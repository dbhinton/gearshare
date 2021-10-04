const mongoose = require('mongoose');

// Create your User Model
const ratingSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
  }, {
    timestamps: true
  });
// Need to have Google ID on my userSchema

module.exports = mongoose.model("Rating", ratingSchema);