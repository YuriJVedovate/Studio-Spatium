const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cad = require("./modules/cadastroUsuario")
const conexao = require("./modules/conexão")

  //CONFIGURAÇÕES
    //template engire;
    app.use(express.static('public'));

    // bodyParser 
      app.use(bodyParser.urlencoded({extended: false}))
      app.use(bodyParser.json())

    //Conecção com Mysql
      

     

  //ROTAS
  app.get("/", function(req, res){
    res.render(path.join(__dirname, './public', 'index.html'));
  })
  app.get("/curiosidades.html", function(req, res){
    return res.render("/curiosidade.html");
  })
  app.get("/login", function(req, res){
    res.render(path.join(__dirname, './public', 'login.html'));
  })
  
  app.post('/add_user', function(req, res){
    cad.create({
        email: req.body.emailCad,
        nome: req.body.nomeCad,
        senha: req.body.senhaCad
    }).then(function(){
        res.redirect('/login.html')
    }).catch(function(err){
        console.log("Erro ao cadastrar Usuario" + err)
    });
});

app.post('/verLogin', function(req,res){

    let nome = req.body.nome
    let senha = req.body.senha

    conexao.query(`SELECT * FROM usuarios where nome = '${nome}' and senha = '${senha}'`, function(err, result, fields){
        if(err){
            console.log('Erro de consulta: ' + err);
            res.redirect('/login.html')  
        }
        else if(result == 0){
            console.log('Dado não existe ' + err);
            res.redirect('/login.html') 
        }
        else 
        {
            console.log(result);
            res.json(nome)
        }
    })
})


    app.listen(8000, function () {
      console.log("servidor iniciado!! ")
    });