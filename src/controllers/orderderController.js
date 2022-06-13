const orderModel = require("../models/orderModel");
const ProductModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

exports.createOrder = async (req, res) => {
  const data = req.body;
  const isFree = req.headers["isfreeappuser"];

  console.log("--------------------- " + isFree);
  if (data.userId.length !== 24) {
    console.log("11");
    res.send("Invalid user Id");
  } else if (data.productId.length !== 24) {
    console.log("14");
    res.send("Invalid product  Id");
  } else {
    console.log("17");
    const person = await userModel
      .findById(data.userId)
      .select({ balance: 1, _id: 0 });
    const product = await productModel.findById(data.productId); //.select("_id");
    console.log(person.balance);
    if (person == null) {
      res.send("we dont have user with this ID");
      //   if (isFree == true) {
      // console.log("22");
      // const purchase = await orderModel.create(data, { new: true });
      // res.send({ purchase });

      //   }
      //   console.log(person);
      //   console.log(product);
      //   res.send("data.productId.length !== 24");
    } else if (product == null) {
      console.log("30");
      res.send("We have no product with this id");
    } else {
      console.log("33");
      let ammount = person.balance;
      const price = product.price;
      if (isFree == "true") {
        console.log("42");
        const purchase = await orderModel.create(data);
        res.status(200).json(purchase);
      } else if (isFree == "false") {
        if (ammount >= price) {
          while (ammount >= price) {
            const purchase = await orderModel.create(data);
            ammount = ammount - price;
            res.status(200).json(purchase);
          }
        } else {
          res.status(200).json("user dont have enought balance");
        }
        res.status(200).json(ammount);
      } else {
        res.send("err");
      }
    }
  }
};
