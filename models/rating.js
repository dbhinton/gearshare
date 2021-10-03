const mongoose = require('mongoose');

// Create your User Model
const ratingSchema = new mongoose.Schema({
    name: String,
    type: String,
    email: String,
    googleId: String
  }, {
    timestamps: true
  });
// Need to have Google ID on my userSchema

module.exports = mongoose.model("Rating", ratingSchema);