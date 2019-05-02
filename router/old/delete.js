const DeleteRouter = require('express').Router();
import {hapus, success, fail} from './../model/customer';

DeleteRouter.delete('/customer/:id', (req, res, next) => {

    const response = hapus(req.params.id, success, fail);
    res.status(200).json(response);
  

});

module.exports = DeleteRouter;