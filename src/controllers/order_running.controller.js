const orderRunningService = require("../services/order_running.service");

exports.getAll = async (req, res) =>
  res.json(await orderRunningService.findAll());