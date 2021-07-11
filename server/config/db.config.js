const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sayuri0210",
  database: "gruneasia_test",
});

module.exports = pool;
