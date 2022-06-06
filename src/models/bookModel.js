const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      unique: true,
      required: true,
    },
    authorName: {
      type: String,
      unique: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema); //users

// String, Number
// Boolean, Object/json, array
