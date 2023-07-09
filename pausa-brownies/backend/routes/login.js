
const express = require('express');
const router = express.Router();
const User = require('../model/users.js');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: 'Deu bom? Dei', user });
    } else {
      res.status(401).json({ message: 'Deu ruim' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;