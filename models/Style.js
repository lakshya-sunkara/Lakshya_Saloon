const mongoose = require("mongoose");

const styleSchema = new mongoose.Schema({
  styleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ["Hair", "Beard", "Facial", "Massage", "Child Hair Cut"]
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Style", styleSchema);
