const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'To do list',
  }));
  

server.listen(4000, ()=> console.log("listening at port 4000"));
