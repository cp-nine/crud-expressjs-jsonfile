const CreateRouter = require('express').Router();
import * as User from './../model/customer';

CreateRouter.post('/customer', (req, res, next) => {

  let response = User.insert(req.body);

  res.json(response);
});

module.exports = CreateRouter;