const ReadRouter = require('express').Router();
import * as User from './../model/customer';
import NotFound from './../responses/notfound';

ReadRouter.get('/customers', (req, res, next)=>{

  const customer = User.findAll();

  res.json(customer);

});

ReadRouter.get('/customer/:id', (req, res, next)=>{

  const customer = User.findById(req.params.id);

  if (customer) {
    res.status(200).json(customer);
  } else {
    const message = "Customer "+ req.params.id +" Not Found";
    res.status(404).json({message});
  }
  
});

ReadRouter.get('*', (req, res, next)=>{

  const message = "Not Found";
  res.status(404).json({message});
  
});

module.exports = ReadRouter;