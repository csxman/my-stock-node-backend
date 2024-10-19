const mysql = require("mysql2");
const dotenv = require("dotenv").config();

// console.log(process.env.DB_HOST);

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

exports.ExecDataNoIndex = async (sql) =>
  await con
    .promise()
    .query(sql)
    .then(([rows, fields]) => {
      //   console.log(rows);
      //   con.end();
      //   console.log("Connection closed");
      return rows;
    })
    .catch(console.log);

exports.ExecDataByIndex = async (sql, q_index) =>
  await con
    .promise()
    .query(sql, q_index)
    .then(([rows, fields]) => {
      //   console.log(rows);
      //   con.end();
      //   console.log("Connection closed");
      return rows;
    })
    .catch(console.log);
