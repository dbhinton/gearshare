const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    quantity: Number,
    subtotal: Number,
    products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Cart", cartSchema)