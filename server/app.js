const express = require('express');
const compression = require('compression');
const router = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.disable('x-powered-by');
app.use(router);
app.get('/', (req, res) => {
  res.send('hello world');
  res.end();
});
app.set('port', process.env.PORT || 8080);

module.exports = app;
