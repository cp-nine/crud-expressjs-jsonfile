const Sequelize = require('sequelize');
const Customer = require('./../model/customer-suquelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('testdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

Customers = new Customer();

Customers.findAll().then(customers => {
  console.log("All users:", JSON.stringify(customers, null, 4));
});