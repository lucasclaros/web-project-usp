const express = require('express');
const app = express();
const db = require('./db');

// Importar as rotas
const usersRouter = require('./routes/users');

app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Tá funcionando desgraça');
});

// Configurar as rotas
app.use('/users', usersRouter);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});