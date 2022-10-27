const express = require("express");
const productController = require("../../controllers/api/productController");
const router = express.Router();


router.route("/").post(productController.seedProducts);

router.route("/").get(productController.getAllProducts);
router.route("/:gender").get(productController.getProducts);


module.exports = router; 