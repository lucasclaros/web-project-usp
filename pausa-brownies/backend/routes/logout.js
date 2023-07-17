
const express = require('express');
const router = express.Router();

// Rota de logout
router.post('/', (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: 'Logout bem sucedido' });
});

module.exports = router;