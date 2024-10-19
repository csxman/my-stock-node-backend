const router = require("express").Router();
const orderRunningController = require("../controllers/order_running.controller");

router.get("/getAll", orderRunningController.getAll);

module.exports = router;
