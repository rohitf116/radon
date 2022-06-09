const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: String,
    author_id: {
      type: ObjectId,
      ref: "NewAuthor",
    },
    publisher: {
      type: ObjectId,
      ref: "NewPublisher",
    },
    price: Number,
    ratings: Number,
    isHardCover: {
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewBook", bookSchema);
