const db = require("../db/models");

exports.findAll = async () =>
  await db.sequelize.query(`SELECT * from order_running`, {
    type: db.sequelize.QueryTypes.SELECT,
  });

exports.update = async (id, data) =>
  await db.order_running.update(data, {
    where: {
      id: id,
    },
  });

exports.findByModuleName = async (module) =>
  await db.order_running.findOne({
    where: {
      module,
      status: "A",
    },
  });
