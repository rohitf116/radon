const { count, Console } = require("console");
const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const { set } = require("mongoose");

// -------------------------------1
const createAuthor = async function (req, res) {
  const data = req.body;
  const savedData = await AuthorModel.create(data);
  console.log(savedData);
  res.send({ msg: savedData });
};
// -------------------------------2

const createBook = async function (req, res) {
  const data = req.body;
  const savedData = await BookModel.create(data);
  console.log(savedData);
  res.send({ msg: savedData });
};
// -------------------------------3
const chetan = async function (req, res) {
  const idAuthor = await AuthorModel.find({
    author_name: "Chetan Bhagat",
  }).select({ author_id: 1, _id: 0 });
  console.log(idAuthor);
  const allBooks = await BookModel.find(...idAuthor);
  res.send({ allBooks });
};
// -------------------------------4
const authorOfTwoStates = async function (req, res) {
  const neededbook = await BookModel.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },
    { new: true }
  ); //.select({ author_id: 1, _id: 0 });
  price = neededbook.price;
  const auId = neededbook.author_id;
  console.log(neededbook.price);
  const CurrentAutho = await AuthorModel.find({ author_id: auId }).select({
    author_name: 1,
    _id: 0,
  });
  const [authorName] = [...CurrentAutho];

  console.log("hi", CurrentAutho);
  console.log(price);
  res.send({ authorName, price });
};

// -------------------------------5

const findBook = async function (req, res) {
  const cheapBooks = await BookModel.find({
    price: { $gte: 50, $lte: 100 },
  }).select("author_id");
  const arr = cheapBooks.map((ele) => ele.author_id);
  let uniqueChars = arr.filter((c, index) => {
    return arr.indexOf(c) === index;
  });
  const [one, two] = [...uniqueChars];
  console.log(one, two);
  const final = await AuthorModel.find({
    $or: [{ author_id: one }, { author_id: two }],
  });

  console.log(final);
  res.send({ final });
};
module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.chetan = chetan;
module.exports.authorOfTwoStates = authorOfTwoStates;
module.exports.findBook = findBook;
