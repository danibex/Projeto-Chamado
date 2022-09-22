// Configurando sequelize (acesso ao banco de dados)
const Sequelize = require("sequelize") /* Importando módulo */
const sequelize = new Sequelize("postapp", "daniel", "lab01", {
    host: "localhost", /* Servidor onde está o banco */
    dialect: "mysql", /* Tipo do banco */
}) /* Banco de dados(databases), usuario, senha */

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

