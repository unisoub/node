const mysql = require("mysql");

const dotenv = require("dotenv");
dotenv.config({});


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: "3306",
  user: process.env.DB_USER, // Replace with your database username
  password: process.env.DB_PWD, // Replace with your database password
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("database connected");
  }
});
