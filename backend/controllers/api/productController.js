const Product = require("./../../models/products");

// Define a route handler for creating users
exports.createProduct = async (request, response) => {
  try {
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

// Define a route handler for creating users
exports.getProduct = async (request, response) => {
  try {
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.editProduct = async (request, response) => {
  try {
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.deleteProduct = async (request, response) => {
  try {
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};