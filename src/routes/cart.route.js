const router = require("express").Router();
const cartController = require("../controllers/cart.controller");

router.post("/addCart", cartController.addCart);
router.get("/getCartsHistoryAll", cartController.getCartsHistoryAll);

module.exports = router;
