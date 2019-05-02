const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
});

con.connect((err)=>{
  if (err){ console.log(err);
   };
  console.log("Connected!");

  // Create Database
  // con.query("CREATE DATABASE testdb", (err, res) => {
  //   if(err) throw err;
  //   console.log("Database Created");    
  // });

  // Create Table
  // let sql = `create table if not exists customers(
  //               id int primary key auto_increment,
  //               name varchar(100)not null,
  //               username varchar(20)not null,
  //               email varchar(85)not null,
  //               password varchar(255)not null,
  //               address varchar(255)not null
  //           )`;
  // con.query(sql, (err, results, fields) => {
  //   if(err) throw err;
  //   console.log("Table Created");
    
  // })

  // Select Table
  // let sql = `SELECT * FROM customers`;
  // con.query(sql,(err, results)=>{
  //   console.log(JSON.stringify(results));
  // })
})

module.exports = con;

