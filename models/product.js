const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
  users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
}, {
  timestamps: true
});

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    type: String,
    desc: String,
    image: String,
    reviews: [reviewSchema],
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model("Product", productSchema)