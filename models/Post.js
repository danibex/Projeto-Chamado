const db = require("./db")

const Post = db.sequelize.define("postagens", {
    nome: {
        type: db.Sequelize.STRING
    },
    setor: {
        type: db.Sequelize.TEXT
    },
    descricao: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post /* acessar o post através de outros arquivos */

// Post.sync({force: true})
