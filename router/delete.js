const DeleteRouter = require('express').Router();
import * as User from './../model/customer';

DeleteRouter.delete('/customer/:id', (req, res, next) => {

  if(User.hapus(req.params.id)){
    res.status(200).json({"message": "success"});
  } else {
    res.status(200).json({"message": "failed"});
  }

});

module.exports = DeleteRouter;