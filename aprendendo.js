const { Mongoose } = require("mongoose");

const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/aprendendo', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('conectado com sucesso')
}).catch((err) => {
    console.error("houve um erro ao se conectar com o mongodb", err)
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const kittySchema = new mongoose.Schema({
    name: String
  });

kittySchema.methods.speak = function () {
const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
console.log(greeting);
}
  
const Kitten = mongoose.model('Kitten', kittySchema);

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

// Kitten.find({ name: /^fluff/ }, callback);
  

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'



