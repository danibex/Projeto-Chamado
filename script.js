// Importando e instansiando modulo express
const express = require("express")
const app = express()

// Importando e configurando o bodyparse(nativo do node)
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configurando sequelize (acesso ao banco de dados)
const Sequelize = require("sequelize") /* Importando módulo */
const sequelize = new Sequelize("teste", "root", "32301919", {
    host: "localhost", /* Servidor onde está o banco */
    dialect: "mysql", /* Tipo do banco */
}) /* Banco de dados(databases), usuario, senha */

  // Mensagens de autinticação e funcionamento
  sequelize.authenticate().then(function(){
      console.log("Conectado com sucesso!!!")
  }).catch(function(erro){
      console.log("Falha ao se conectar "+erro)
  })

// Módulo de intermediação entre o node o html
const handlebars = require("express-handlebars")
const { json } = require("sequelize")
  // Config
    // Template Engine
      app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
      app.set("view engine", "handlebars") 

app.get("/cad", function(req, res){
  res.render("formulario")
})

app.post("/add", function(req,res) {
  res.send("Nome: "+req.body.nome+"</br>Setor: "+req.body.setor+"</br>Chamado: "+req.body.chamado)
})







const porta = 5502

app.listen(porta, function(){
    console.log(`Servidor rodando na porta ${porta}`)
})