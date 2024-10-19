const router = require("express").Router();
const orderController = require("../controllers/orders.controller");

router.get(
  "/getOrderHistoryAll/:user_id/:order_running_no",
  orderController.getOrderHistoryAll
);

module.exports = router;
