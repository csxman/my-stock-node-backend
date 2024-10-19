const db = require("../db/models");
const { Op } = require("sequelize");

exports.findAll = async () =>
  await db.Carts.findAll({
    order: [["id", "DESC"]],
  });

exports.findAllByQuery = async () =>
  await db.sequelize.query(
    `SELECT ct.id,ct.product_id,ct.quantity,pt.name,pt.price,pt.stock,pt.image,ct.created_at,ct.updated_at
                            FROM Carts ct
                            LEFT JOIN Products pt
                            on ct.product_id = pt.id`,
    { type: db.sequelize.QueryTypes.SELECT }
  );

exports.addCart = async (cart) => {
  let stock_balance = 0;

  const t = await db.sequelize.transaction();

  try {
    // check stock balance first before adding to cart
    const product = await db.Products.findOne(
      {
        where: {
          id: cart.product_id,
        },
      },
      { transaction: t }
    );

    if (product.stock < cart.quantity) {
      throw new Error("Stock is not enough");
    }

    // update stock balance
    stock_balance = product.stock - cart.quantity;
    await db.Products.update(
      {
        stock: stock_balance,
      },
      {
        where: {
          id: cart.product_id,
        },
      },
      { transaction: t }
    );

    // add to cart
    await db.Carts.create(cart, { transaction: t });

    await t.commit();
    return { save_sta: true, save_msg: "save success" };
  } catch (error) {
    await t.rollback();
    console.log(`add cart error:`, error.toString());
    return { save_sta: false, save_msg: error.toString() };
  }
};
