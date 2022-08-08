const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const upload = require('../middleware/imageUpload');

router.post("/addproduct", upload.single('image'), productController.newProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);
router.patch("/edit/:id", productController.editProduct);
router.patch("/status/:id", productController.setProductStatus);
router.patch("/delete/:id", productController.setProductDeleted);
// router.delete("/:id", productController.deleteProduct);

module.exports = router;