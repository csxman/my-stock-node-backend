const router = require("express").Router();
const jwt = require("../configs/jwt");

router.use("/products", require("./product.route"));
router.use("/account", require("./account.route"));
router.use("/carts", require("./cart.route"));
router.use("/order_running", require("./order_running.route"));
router.use("/orders", require("./orders.route"));

module.exports = router;
