const orderService = require("../services/orders.service");

exports.getOrderHistoryAll = async (req, res) => {
  try {
    const result = await orderService.getOrderHistoryAll(req.params.user_id, req.params.order_running_no);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
