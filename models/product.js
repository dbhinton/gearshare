const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    type: String,
    model: String,
    image: String,
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Product", productSchema)