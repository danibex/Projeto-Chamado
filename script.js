const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/add", function(req, res){
    req.body.conteudo
    res.send("<h1>Nome: </h1>"+req.body.nome+"<h2>Setor: </h2>"+req.body.setor+ "<h2>Chamado:</h2> <p>"+ req.body.chamado+"</p>")
})

app.get("/ola/:nome/:cargo", function(req, res) { /* Parâmetro nome e cargo*/
  res.send(`${req.params}`) /* Acessando parametros */
})

/* 
app.get("/ola/:nome/:cargo", function(req, res) {
  res.send(`Olá ${req.params.nome} do ${req.params.cargo}`) 
})
 */

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