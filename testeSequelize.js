/* Conectando-se ao banco de dados teste */
const Sequelize = require("sequelize") /* Importando módulo */
const sequelize = new Sequelize("teste", "root", "32301919", {
    host: "localhost", /* Servidor onde está o banco */
    dialect: "mysql", /* Tipo do banco */
}) /* Banco de dados(databases), usuario, senha */

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!!!")
}).catch(function(erro){
    console.log("Falha ao se conectar "+erro)
})

/* mysql -u root -p */

// Models
// Postagem
const Postagem = sequelize.define("postagem", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true})  /* sincronizando o model com o sql */
Postagem.create({
    titulo: "Um titulo aqui",
    conteudo: "Exemplo de chamado"
}) 

// Usuários

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.sync({force: true})

Usuario.create({
    nome: "Rebeca",
    sobrenome: "Santana",
    idade: 23,
    email: "rebecaalmeida@outlook.com"
})