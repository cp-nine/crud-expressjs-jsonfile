const express = require('express')
const app     = express()
const port    = 3000;

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

});

global.con = con;



//using sequelize
// require('./db/sequelize-connector');

const bodyParser = require('body-parser');

// const router = require('./router/router');
const routes = require('./router/routes');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => console.log(`Running on port ${port}!`))