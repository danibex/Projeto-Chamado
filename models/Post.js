const db = require("./db")

const Post = db.sequelize.define("postagens", {
    título: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post /* acessar o post através de outros arquivos */

Post.sync({force: true})
