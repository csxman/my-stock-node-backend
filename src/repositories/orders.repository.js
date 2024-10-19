const db = require("../db/models");
const { Op } = require("sequelize");

exports.findAllByQuery = async (user_id, order_running_no) =>
  await db.sequelize.query(
    `SELECT ods.id,ods.order_running_no,ct.id as cart_id,ct.product_id as product_id,ct.quantity,
            pt.name as product_name ,pt.price,ct.created_at,ct.updated_at,ct.cart_status,
            CASE
                WHEN ct.cart_status = 'C' THEN "In Cart"
                WHEN ct.cart_status = 'O' THEN "In Order"
                WHEN ct.cart_status = 'S' THEN "Order Success"
            END as order_status
            FROM Orders ods
            LEFT JOIN Carts ct
            ON ods.id = ct.order_id
            LEFT JOIN Products pt
            on ct.product_id = pt.id
            where ods.ord_user_id = ${user_id} and ods.order_running_no = '${order_running_no}' and ct.cart_status = 'O'`,
    { type: db.sequelize.QueryTypes.SELECT }
  );
