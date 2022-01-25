const express = require('express');  //vai requisitar o nvm(modulo) do express
const app = express(); //vai instanciar o express


app.get('/', function(req, res){
    //res.send("Sup"); Enviar objetos html
    res.sendFile(__dirname + "/index.html");
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/sobre.html");
});

app.get('/blog', function(req, res){
    res.sendFile(__dirname + "/blog.html");
});

app.get('/ola/:nome/:cargo', function(req, res){ //dois pontos "x" é chamado de parâmetro.
    res.send("<h1> Ola " + req.params.nome + "</h1>" + "<h2> Cargo: " + req.params.cargo + "</h2>");
    
});

app.listen(8081, function(){
    console.log("ok")
});