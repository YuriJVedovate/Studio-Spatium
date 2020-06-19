const mysql = require('mysql');
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'projetopi',
    password: '221015',
    database: 'studiospatium'
});

conexao.connect(function(err){
    if(err) throw (err);
});

module.exports = conexao