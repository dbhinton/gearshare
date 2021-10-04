const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    subtotal: Number,
    orderDate: Date,
    city: String,
    state: String,
    zip: Number,
    country: String,
    paymentMethod: String,
    productsBought: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
    buyer: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Order", orderSchema)