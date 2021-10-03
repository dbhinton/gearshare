const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    quantity: Number,
    subtotal: Number,
    products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Cart", cartSchema)