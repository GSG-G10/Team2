const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./routes');

const loginRoute = require('./routes/login');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());

app.disable('x-powered-by');
app.use(router);

app.use('/', loginRoute);
app.get('/', (req, res) => {
  res.send('hello world');
  res.end();
});
app.set('port', process.env.PORT || 8080);

module.exports = app;
