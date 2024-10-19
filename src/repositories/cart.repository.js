const db = require("../db/models");
const { Op } = require("sequelize");

exports.findAll = async () =>
  await db.Carts.findAll({
    order: [["id", "DESC"]],
  });

exports.findAllByQuery = async (user_id) =>
  await db.sequelize.query(
    `SELECT ct.id,ct.product_id,ct.quantity,pt.name,pt.price,pt.stock,pt.image,ct.created_at,ct.updated_at
                            FROM Carts ct
                            LEFT JOIN Products pt
                            on ct.product_id = pt.id
                            where ct.user_id = ${user_id}`,
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

exports.confirmOrder = async (user_id, orderNumber, cart) => {
  //update cart status = O  by user_id
  const t = await db.sequelize.transaction();
  try {
    let ord_body = {
      order_running_no: orderNumber,
      ord_user_id: user_id,
      remark: "Order",
    };
    // add to order
    const res_add_order = await db.Orders.create(ord_body, { transaction: t });

    await db.Carts.update(
      {
        cart_status: "O",
        order_running_no: orderNumber,
        order_id: res_add_order.id,
      },
      {
        where: {
          user_id: user_id,
          order_running_no: null,
        },
      },
      { transaction: t }
    );

    await t.commit();
    return { save_sta: true, save_msg: "save success" };
  } catch (error) {
    await t.rollback();
    // console.log(`confirm order error:`, error.toString());
    return { save_sta: false, save_msg: error.toString() };
  }
};
