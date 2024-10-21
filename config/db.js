// connecting .env file.
require("dotenv").config();

const sqlite3 = require("sqlite3").verbose();

//getting db path from .env.
const db_path = process.env.DB_PATH;

const db = new sqlite3.Database(
  db_path,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) console.log(err.message);
    console.log(`connected to SQLite Database.${db_path}`);
  }
);

module.exports = db;
