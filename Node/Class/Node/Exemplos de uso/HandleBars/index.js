const express = require("./node_modules/express");
const app = express();
const handlebars = require("./node_modules/express-handlebars");
const bodyParser = require("./node_modules/body-parser");
const Post = require("./models/Post")

//Config
//Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//body parser        
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Rota  
app.get("/cad", function (req, res) {
    res.render("formulario");
});

app.get("/", function (req, res) {//Ordenar do mais novo ao mais antigo. Padrão sem nada é do mais antigo ao mais novo.
    Post.findAll({order: [["id", "DESC"]]}).then(function (posts) {  //Vai no banco pegar tudo 
        res.render("home", {
            posts: posts  
        })
    })
});

app.post("/add", function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect("/")
    }).catch(function (erro) {
        res.send("erro " + erro)
    })

})

app.get("/delete/:id", function(req, res){
    Post.destroy({where: {
        "id": req.params.id
    }}).then(function(){
        res.send("Deletado")
    }).catch(function(erro){
        res.send("Não existe")
    })
        
    
})


app.listen(8081, function () {
    console.log("Server rondando!!!!!");
});