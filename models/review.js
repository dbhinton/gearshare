const mongoose = require('mongoose');

// Create your User Model
const reviewSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
  }, {
    timestamps: true
  });
// Need to have Google ID on my userSchema

module.exports = mongoose.model("Review", reviewSchema);