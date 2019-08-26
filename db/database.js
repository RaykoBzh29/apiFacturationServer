const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bglzhscwytizoap669gm-mysql.services.clever-cloud.com',
  port: '3306',
  user: 'uysjg76k5ztbvfv9',
  password: 'vD1m8JHImbGdRUh6BSfK',
  database: 'bglzhscwytizoap669gm',
});
module.exports = db;