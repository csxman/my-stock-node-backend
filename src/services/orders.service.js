const orderRepository = require("../repositories/orders.repository");

//get all order history
exports.getOrderHistoryAll = async (user_id, order_running_no) =>
  await orderRepository.findAllByQuery(user_id, order_running_no);
