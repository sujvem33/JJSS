const Product = require("./../../models/products");
const data = require("./../../data/productData");

exports.seedProducts = async (request, response) => {
  try {
    await Product.remove({});
    const newProduct = await Product.insertMany(data.shoeData);
    // console.log(shoeData.shoeData);

    response.status(201).json({
      status: "success",
      data: { newProduct },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.getAllProducts = async (request, response) => {
  try {
    const allProducts = await Product.find();
    response.status(200).json({
      status: "success",
      data: { allProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};

exports.getProducts = async (request, response) => {
  try {
    let catagory = request.params.gender;
    catagory = catagory[0].toUpperCase() + catagory.slice(1);

    // console.log(catagory);
    const allProducts = await Product.find({ gender: catagory });
    response.status(200).json({
      status: "success",
      data: { allProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
}; // product controller