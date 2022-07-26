const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.post("/addproduct", productController.newProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);
router.patch("/:id", productController.setProductStatus);
router.delete("/:id", productController.deleteProduct);

module.exports = router;