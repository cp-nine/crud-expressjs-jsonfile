const UpdateRouter = require('express').Router();
import * as User from './../model/customer';

UpdateRouter.put('/customer/:id', (req, res, next) => {

  let response = User.update(req.params.id, req.body, User.success, User.fail);

  res.json(response);

  
});

module.exports = UpdateRouter;