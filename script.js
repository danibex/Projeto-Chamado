const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/add", function(req, res){
    req.body.conteudo
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
})

/*

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

*/

app.listen(8081, function(){
    console.log("Servidor rodando")
})