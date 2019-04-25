const router = require('express').Router();
const MockResponse = require('./../functions/mocks-model');
const check  = require('./../functions/check-number');

router.get('/hello', (req, res, next)=>{
  res.json({message: 'hello world'});
});

router.get('/bilangan/:val1/:val2?', (req, res, next)=>{
  const start = Number.parseInt(req.params.val1);
  const end  = Number.parseInt(req.params.val2) || start;

  let data = [];

  for (let i = start; i <= end; i++) {
    response = {"angka": i, "bilangan": check.checkNumber2(i, check.print)};
    data.push(response);
  }

  res.json(data);
});

router.get('/bilangan-model/:val1/:val2?', (req, res, next)=>{
  const start = Number.parseInt(req.params.val1);
  const end   = Number.parseInt(req.params.val2) || start;

  let data;

  if (end === start) {
    data = MockResponse.mocks1(start, MockResponse.print);
  } else {
    data = MockResponse.mocks2(start, end);
  }

  res.json(data);
});

module.exports = router;