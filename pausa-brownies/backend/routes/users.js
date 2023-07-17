const express = require('express');
const router = express.Router();
const UserController = require('../controller/users');

// Rotas para usuários
router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id/promote', UserController.promoteUser);
module.exports = router;