const mongoose = require('mongoose');

// Create your User Model
const userSchema = new mongoose.Schema({
    name: String,
    type: String,
    email: String,
    avatar: String,
    listings: [String],
    googleId: String
  }, {
    timestamps: true
  });
// Need to have Google ID on my userSchema

module.exports = mongoose.model("User", userSchema);