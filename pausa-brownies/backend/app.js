const express = require('express');
const session = require('express-session');
const app = express();
const db = require('./db');


// Importar as rotas
const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const adminRouter = require('./routes/admin');

app.use(express.json());
app.use(
  session({
    secret: 'pausa-brownies-session',
    resave: false,
    saveUninitialized: false,
  })
);

// Configurar as rotas
app.use('/users', usersRouter);
app.use('/products',productRouter);

// Login e Logout
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

// Rota protegida por autenticação de admin
app.use('/admin', adminRouter);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});