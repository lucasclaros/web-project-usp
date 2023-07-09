const express = require('express');
const mongoose = require('mongoose');
console.log('Versão do Mongoose:', mongoose.version);
// Configurar a conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/pausa-brownies', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

// Definir o esquema e o modelo do documento
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', UserSchema);

// Criar um novo usuário
const createUser = async () => {
  try {
    const user = new User({ name: 'John Doe', age: 25 });
    await user.save();
    console.log('Usuário criado com sucesso:', user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  }
};

// Consultar todos os usuários
const getUsers = async () => {
  try {
    const users = await User.find();
    console.log('Usuários encontrados:', users);
  } catch (error) {
    console.error('Erro ao consultar usuários:', error);
  }
};

// Iniciar o aplicativo
const app = express();

// Rota principal
app.get('/', (req, res) => {
  res.send('Seja bem-vindo à API Node.js com MongoDB!');
});

// Rota para criar um novo usuário
app.get('/create', (req, res) => {
  createUser();
  res.send('Usuário criado!');
});

// Rota para consultar todos os usuários
app.get('/users', (req, res) => {
  getUsers();
  res.send('Consulta de usuários!');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta [${PORT}]`);
});
