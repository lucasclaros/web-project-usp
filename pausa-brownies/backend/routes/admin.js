const express = require('express');
const router = express.Router();

const isAdmin = (req, res, next) => {
    if (req.session.role === 'admin') {
      // O usuário é um administrador, pode prosseguir
      next();
    } else {
      res.status(403).json({ message: 'Acesso negado' });
    }
  };
// Rota protegida que requer autenticação de administrador
router.get('/', isAdmin, (req, res) => {
  res.json({ message: 'Acesso de Admin' });
});

module.exports = router;