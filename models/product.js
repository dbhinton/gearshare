const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    type: String,
    model: String,
    image: String,
    googleId: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Product", productSchema)