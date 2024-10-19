const cartRepository = require("../repositories/cart.repository");

exports.findAll = async () => await cartRepository.findAllByQuery();

exports.addCart = async (cart) => await cartRepository.addCart(cart);
