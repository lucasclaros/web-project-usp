const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db_User = "eduardofernandes5225"
const db_Password = "cHXj445CUFOR53O0"

dotenv.config();
const url = `mongodb+srv://${db_User}:${db_Password}@cluster0.boqq9aj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao MongoDB.');
  })
  .catch((error) => {
    console.error('Erro de conexão com o MongoDB:', error);
  });