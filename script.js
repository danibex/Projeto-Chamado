// Importando e instansiando modulo express
const express = require("express")
const app = express()

const Post = require("./models/Post") /* Importando modulo de implementação no banco de dados através do sequelize */

// Importando e configurando o bodyparse(nativo do node)
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configurando sequelize (acesso ao banco de dados)
const Sequelize = require("sequelize") /* Importando módulo */
const sequelize = new Sequelize(/* "teste" */"postapp", "root", "Rafael2021$", {
    host: "localhost", /* Servidor onde está o banco */
    dialect: "mysql", /* Tipo do banco */
    define: {
      timestamps: false
  }
}) /* Banco de dados(databases), usuario, senha */

  // Mensagens de autinticação e funcionamento
  sequelize.authenticate().then(function(){
      console.log("Conectado com sucesso!!!")
  }).catch(function(erro){
      console.log("Falha ao se conectar "+erro)
  })

  app.get("/", function(req, res){
  Post.findAll().then(function(posts){
    console.log(posts)
    res.render("home", {posts: posts} /* {nome: "victor", sobrenome: "lima"} */) 
  })
})

app.get("/deletar/:id", function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.send("<h1>Postagem deletada com sucesso</h1>")
  }).catch(function(erro){
    res.send("Esta postagem não existe!!!")
  })
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
  /* res.send("Nome: "+req.body.nome+"</br>Setor: "+req.body.setor+"</br>Chamado: "+req.body.chamado) */
  Post.create({
    nome: req.body.nome,
    setor: req.body.setor,
    descricao: req.body.descricao 
  }).then(function(){
    res.send("<h1>Chamado registrado!!!</h1>")
  }).catch(function(erro){
    res.send("Houve um erro:::: "+ erro)
  })
})


const porta = 5502

app.listen(porta, function(){
    console.log(`Servidor rodando na porta ${porta}`)
})
