const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook = async function (req, res) {
  const idof = req.body.author_id;
  if (!req.body.author_id) {
    res.send(" this detail is required:author");
  } else {
    const isAuthor = await authorModel.exists(
      { _id: idof },
      async function (err, doc) {
        if (err) {
          res.send("author is not present");
          console.log("author is not present");
        } else {
          if (!req.body.publisher) {
            res.send(" this detail is required:Publisher");
          } else {
            const isPublisher = await publisherModel.exists(
              { _id: req.body.publisher },
              async function (err, doc) {
                if (err) {
                  res.send(" publisher is not present");
                } else {
                  const newBookCreated = await bookModel.create(req.body);
                  res.send({ newBookCreated });
                }
              }
            );
          }
        }
      }
    );
  }
};

const getBooksData = async function (req, res) {
  let books = await bookModel.find();
  res.send({ data: books });
};

const getBooksWithAuthorDetails = async function (req, res) {
  let specificBook = await bookModel
    .find()
    .populate(["author_id", "publisher"]);
  res.send({ data: specificBook });
};

const updatedBook = async function (req, res) {
  const checkId = await publisherModel
    .find({ name: { $in: ["Penguin", "HarperCollins"] } })
    .select("_id");
  const check0 = await publisherModel.find().select("_id");
  console.log(checkId);
  console.log(check0);
  const upFalse = await bookModel.updateMany(
    {
      publisher: { $nin: checkId },
    },
    { $set: { isHardCover: false } }
  );
  const upTrue = await bookModel.updateMany(
    {
      publisher: { $in: checkId },
    },
    { $set: { isHardCover: true } }
  );
  const upbooks = await bookModel.find();

  res.send({ upbooks });
};
//   const oldDat = req.body.isHardCover
//   const data = await bookModel.updateMany(
//     { $set: { isHardCover: true } },
//     { upsert: true }
//   );
//   res.send({ data });
// };

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.updatedBook = updatedBook;
