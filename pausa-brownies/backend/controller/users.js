const User = require('../model/users');

// novo usuário
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// todos os usuários
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// atualizar um usuário pelo ID
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para deletar um usuário pelo ID
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndRemove(userId);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const promoteUser = async(req, res) => {
  const userId = req.params.id;

  try {
    // Verifique se o usuário existe no banco de dados
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verifique se o usuário já é um administrador
    if (user.role === 'admin') {
      return res.status(400).json({ message: 'Usuário já é admin' });
    }

    // Promova o usuário a administrador
    user.role = 'admin';
    await user.save();

    res.status(200).json({ message: 'Usuário promovido a admin' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  promoteUser
};