const Sequelize = require ('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

/*sequelize.authenticate().then(function(){
    console.log('conectado com sucesso no banco');
}).catch(function(erro){
    console.log("Erro ao conectar" + erro);
});*/

const Postagens = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuarios = sequelize.define("usuarios", {
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


//Postagens.sync({force: true}); //criará tabela na database test 
//Usuarios.sync({force: true});

Postagens.create({
    titulo: "AAAAAAAAAAAAA",  //insert na tabela
    conteudo: "dasdasdasdas"
});

Usuarios.create({
    nome: "asdsda",
    sobrenome: "dasdasda",
    idade: 20,
    email: "dassdadsa"
})