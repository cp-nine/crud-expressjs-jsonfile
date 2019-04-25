const fs = require('fs');
const CommonResponse = require('./../responses/common-response');

const dataUser = `${__dirname}/../db/customer.json`;
const customers = (fs.existsSync(dataUser) ? JSON.parse(fs.readFileSync(dataUser, {encoding: 'UTF8'})) : []);

function findAll() {
  return success(customers);
}

function findById(id) {
  return customers.find((customer)=>{return customer.id === Number(id)});
}

function findByUsername(username) {
  return customers.find(
    (customer) => {
      return customer.username === username
    });
}

function insert(data, resolve, reject) {
  const index = customers.findIndex((customer) => {
      return customer.id === Number(data.id)
    });

  if (index < 0) {
    customers.push(data);
    save(customers);
    return resolve(findById(data.id));
  } else {
    return reject(40, "Bad request", null);
  }

  
}

function update(id, data, resolve, reject) {
  const customer = customers.find((customer) => {
    return customer.id === Number(id)
  });

  let isUsed = findByUsername(data.username);

  if (customer) {

    if (isValid(data)) {

      if (customer.username === data.username || !isUsed) {
        customer.id = customer.id;
        customer.name = data.name;
        customer.username = data.username;
        customer.email = data.email;
        customer.password = data.password;
        customer.address = data.address;

        save(customers);
        resolve(customers);

        return success(findById(id));
      } 

      return reject(43, "Username is used", null);
    }

    return reject(43, "Email cannot empty", null);

  } else {
    return reject(44, "Customer Not Found", null);
  }
  
}

function hapus(id, resolve, reject) {
  const index = customers.findIndex((customer) => { return customer.id === Number(id)});

  if (index > 0) {
    customers.splice(index);
    save(customers);

    return resolve(null);
  } else {
    return reject(44, "Customer not found", null);
  }

}

function save(customers) {
  fs.writeFileSync(dataUser, JSON.stringify(customers));
}


function success(data){
  return new CommonResponse(20, "Success", data);
}

function fail(status, message, data){
  return new CommonResponse(status, message, data);
}

function isValid(data) {

  if (!data.email) {
    return false;
  } else {
    return true;
  }

}


export {findAll, findById, insert, update, hapus, success, fail};

//  use express module
// module.exports = {
//   findAll: findAll, 
//   findById: findById
// };