const ProductModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
  const data = req.body;
  const savedData = await ProductModel.create(data);
  res.send({ savedData });
};
