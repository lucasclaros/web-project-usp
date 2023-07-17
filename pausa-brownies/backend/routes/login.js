
const express = require('express');
const router = express.Router();
const User = require('../model/users.js');

// Rota de login
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email não encontrado' });
    }
    // Verifique se a senha está correta
    if (user.password !== password) {
      return res.status(401).json({ message: 'Senha Incorreta'});
    }

    const isAdmin = user.role === 'admin';

    req.session.userId = user._id;
    req.session.role = user.role;
    res.status(200).json({ message: 'Login bem sucedido', isAdmin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;