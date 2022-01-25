const mongoose = require("../node_modules/mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo")
.then(() => {
    console.log("Executado")
}).catch((err)=>{
    console.log("PRoblem" + err);
}) //se a base não existir, será criado. 

const userSchema = mongoose.Schema({
    nome: {
        type: String
        //require: true
    },
    sobrenome: {
        type: String
    },
    email: {
        type: String
    },
    idade: {
        type: Number
    }
})

mongoose.model("usuarios", userSchema);

const newUser = mongoose.model("usuarios")

new newUser({
    nome: "Ac",
    sobrenome: "asda",
    email: "dassad",
    idade: 21
}).save().then(()=>{
    console.log("OK")
}).catch((err)=>{
    console.log(err)

});

 