const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/pausa-brownies';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((error) => {
    console.error('Erro de conexão com o MongoDB:', error);
  });