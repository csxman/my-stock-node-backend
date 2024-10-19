const cartRepository = require("../repositories/cart.repository");

//get all cart history
exports.findAll = async (user_id) =>
  await cartRepository.findAllByQuery(user_id);

//add cart
exports.addCart = async (cart) => await cartRepository.addCart(cart);

//confirm order
exports.confirmOrder = async (user_id, orderNumber, cart) =>
  await cartRepository.confirmOrder(user_id, orderNumber, cart);
