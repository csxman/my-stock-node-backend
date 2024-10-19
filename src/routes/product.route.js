const router = require("express").Router();
const productController = require("../controllers/product.controller");

router.get("/getProducts", productController.getProducts);
router.get("/price", productController.getProductByPrice);
router.get("/:id", productController.getProduct);
router.post("/addProduct", productController.addProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
