const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  keywords: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  vaiBemCom: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);