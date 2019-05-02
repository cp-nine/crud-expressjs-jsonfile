const CustomerRouter = require('express').Router();
import {findAll, findById, insert, update, hapus, success, fail} from './../service/customer-dao-service';

//  get customers
CustomerRouter.get('/customers', (req, res, next)=>{

  const customer = findAll();

  res.json(customer);

});

// get by id
CustomerRouter.get('/customer/:id', (req, res, next)=>{

  const customer = findById(req.params.id);
  res.json(customer);
  
});

// post
CustomerRouter.post('/customer', (req, res, next) => {

  let response = insert(req.body, success, fail);

  res.json(response);
});

// update
CustomerRouter.put('/customer/:id', (req, res, next) => {

  let response = update(req.params.id, req.body, User.success, User.fail);

  res.json(response);
});

CustomerRouter.delete('/customer/:id', (req, res, next) => {

  const response = hapus(req.params.id, success, fail);
  res.status(200).json(response);

});

module.exports = CustomerRouter;