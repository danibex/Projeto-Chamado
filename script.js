const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/add", function(req, res){
    req.body.conteudo
    res.send("<h1>Nome: "+req.body.nome+"</h1> <h2>Setor: "+req.body.setor+ "</h2> Chamado: "+ req.body.chamado)
})

/*

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

*/
const porta = 5501

app.listen(porta, function(){
    console.log(`Servidor rodando na porta ${porta}`)
})