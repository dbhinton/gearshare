const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    type: String,
    desc: String,
    image: String,
    ratings: {type: mongoose.Schema.Types.ObjectId, ref: "Rating"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Product", productSchema)