const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    subtotal: Number,
    saleDate: Date,
    city: String,
    state: String,
    zip: Number,
    country: String,
    productsSold: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
    seller: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Sale", saleSchema)