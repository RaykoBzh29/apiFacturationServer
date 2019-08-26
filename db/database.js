const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'bglzhscwytizoap669gm',
});
module.exports = db;