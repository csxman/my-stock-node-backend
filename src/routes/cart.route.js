const router = require("express").Router();
const cartController = require("../controllers/cart.controller");

router.post("/addCart", cartController.addCart);
router.get("/getCartsHistoryAll/:user_id", cartController.getCartsHistoryAll);
router.put("/confirmOrder/:user_id", cartController.confirmOrder);

module.exports = router;
