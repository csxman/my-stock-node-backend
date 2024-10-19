const cartService = require("../services/cart.service");

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
    const result = await cartService.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
