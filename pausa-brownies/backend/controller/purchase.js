const Purchase = require('../model/purchase');


const createPurchase = async (req, res) => {
    const { userId, productId, quantity, totalPrice } = req.body;

    try {
      // nova compra
      const purchase = new Purchase({
        userId,
        productId,
        quantity,
        totalPrice,
      });
  
      // Salvar a compra
      await purchase.save();
  
      res.status(201).json({ message: 'Compra salva' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getPurchase = async (req, res) => {
    try {
        // todas as compras do banco
        const purchases = await Purchase.find();
    
        res.status(200).json({ compras: purchases });
      } catch (error) {
        res.status(500).json({ mensagem: error.message });
      }
};

const getPurchaseById = async (req, res) => {
    const { id } = req.params;

    try {
      // Encontrar a compra pelo ID no banco de dados
      const purchase = await Purchase.findById(id);
  
      if (!purchase) {
        return res.status(404).json({ mensagem: 'Compra não encontrada' });
      }
  
      res.status(200).json({ compra: purchase });
    } catch (error) {
      res.status(500).json({ mensagem: error.message });
    }
  };

const updatePurchase = async (req, res) => {
    const { id } = req.params;
    const { quantity, totalPrice } = req.body;
  
    try {
      const purchase = await Purchase.findById(id);
  
      if (!purchase) {
        return res.status(404).json({ mensagem: 'Compra n encontrada' });
      }
  
      // atualiza os campos da compra
      purchase.quantity = quantity;
      purchase.totalPrice = totalPrice;
  
      await purchase.save();
  
      res.status(200).json({ mensagem: 'Compra atualizada' });
    } catch (error) {
      res.status(500).json({ mensagem: error.message });
    }
  };

const deletePurchase = async (req, res) => {
    const { id } = req.params;

    try {

      const purchase = await Purchase.findById(id);
  
      if (!purchase) {
        return res.status(404).json({ mensagem: 'Compra não encontrada' });
      }
  
      // Remove
      await purchase.remove();
  
      res.status(200).json({ mensagem: 'Compra excluída' });
    } catch (error) {
      res.status(500).json({ mensagem: message.error });
    }
  };

module.exports = {
  createPurchase,
  getPurchase,
  getPurchaseById,
  updatePurchase,
  deletePurchase
};