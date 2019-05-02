const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class Customer extends Model {}
Customer.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'customers'
  // options
});

module.exports = Customer;