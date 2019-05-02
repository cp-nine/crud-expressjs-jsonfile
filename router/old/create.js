const CreateRouter = require('express').Router();
import {insert, success, fail} from './../dao/customer';

CreateRouter.post('/customer', (req, res, next) => {

  let response = insert(req.body, success, fail);

  res.json(response);
});

module.exports = CreateRouter;