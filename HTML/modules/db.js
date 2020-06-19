const Sequelize = require('sequelize');
const sequelize = new Sequelize( //define que sera usado um banco local o usuario 
  'studiospatium',
  'projetopi',
  '221015',
  {
    host: "localhost",
    dialect: 'mysql'
 });

sequelize.authenticate().then(function () { // função para verificar conecção com o banco 
  console.log("O banco esta conectado!!"); // mostra que conecto
}).catch(function (erro) {
  console.log("falha ao se conectar: " + erro) // mostra o erro
});

module.exports = {
  sequelize: sequelize , 
  Sequelize: Sequelize
}