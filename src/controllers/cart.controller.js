const cartService = require("../services/cart.service");
const orderRunningService = require("../services/order_running.service");

exports.addCart = async (req, res) => {
  try {
    const result = await cartService.addCart(req.body);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCartsHistoryAll = async (req, res) => {
  try {
    const result = await cartService.findAll(req.params.user_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.confirmOrder = async (req, res) => {
  let orderNumber = "";

  try {
    orderNumber = await orderRunningService.docGenerate("OD");
    const result = await cartService.confirmOrder(
      req.params.user_id,
      orderNumber,
      req.body
    );
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
