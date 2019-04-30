const express = require('express')
const app     = express()
const port    = 3000;

// using mysql connector
// require('./db/connector');

//using sequelize
// require('./db/sequelize-connector');

const bodyParser = require('body-parser');

const router = require('./router/router');
const ReadRouter = require('./router/read');
const CreateRouter = require('./router/create');
const UpdateRouter = require('./router/update');
const DeleteRouter = require('./router/delete');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use([router, ReadRouter, CreateRouter, UpdateRouter, DeleteRouter]);
// app.use(ReadRouter);
// app.use(CreateRouter);
// app.use(UpdateRouter);
// app.use(DeleteRouter);

app.listen(port, () => console.log(`Running on port ${port}!`))