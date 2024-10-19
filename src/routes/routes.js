const router = require("express").Router();
const jwt = require("../configs/jwt");

router.use("/products", require("./product.route"));
router.use("/account", require("./account.route"));

module.exports = router;
