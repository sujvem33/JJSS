// Product Routes
const express = require("express");
const productController = require("../../controllers/api/productController");
const router = express.Router();

router.route("/").post(productController.createProduct);
router.route("/:id").get(productController.getProduct);
router.route("/:id").put(productController.editProduct);
router.route("/:id").delete(productController.deleteProduct);

module.exports = router;