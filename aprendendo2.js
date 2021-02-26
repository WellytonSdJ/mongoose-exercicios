const mongoose = require('mongoose')

//configurando o mongoose
// mongoose.Promise = globalPromise;
mongoose.connect("mongodb://localhost/blog", {
    userMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongoDB Conectado!")
}).catch((err) => {
    console.log("hove um erro ao se conectaro ao mongodb: ", err)
})

//definindo model

const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true,
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }

})

mongoose.model('usuarios', UsuarioSchema) //depois de criar o schema do model sempre lembrar de colocar um nome pra collection desse model e o schema que ele se referencia



const Fulano = mongoose.model('usuarios') //fazemos isso para referenciar o nosso schema dentro de uma variável, 


//sempre que quiser criar um novo usuário (receita de bolo)
// "new"+ nome da variavel que armazenou o schema({aqui vai um objeto com os dados}).save().then().catch()
//PRONTO!!
new Fulano({
    nome: "Fulano",
    sobrenome: "de tal",
    email: "fulano@fulano.com",
    idade: 18,
    pais: "japao"
}).save().then(() => { console.log("salvo com sucesso") }).catch((err) => { console.error("erro ao salvar" + err) })
