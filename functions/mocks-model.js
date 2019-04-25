const ResponseModel = require('./../responses/response');
const check = require('./check-number');

function mocks1(val1) {
  let bilangan = check.checkNumber(val1, check.print);
  let data = new ResponseModel(val1, bilangan);
  return data;
}

function mocks2(val1, val2) {
  let data = [];
  let response;

  for (let i = val1; i <= val2; i++) {
    let bilangan = checkNumber(i, check.print);
    response = new ResponseModel(i, bilangan);
    data.push(response);
  }
  return data;
}

module.exports = {
  mocks1: mocks1,
  mocks2: mocks2
}