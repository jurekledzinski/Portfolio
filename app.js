const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const { atlasUrl } = require('./configs/config');

mongoose.connect(atlasUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

let errDb = false;
let openDb = true;

db.on('error', (err) => {
  errDb;
});
db.once('open', () => {
  openDb;
});

const emailRouter = require('./routes/email');

const app = express();

app.use(compression());
app.use(helmet());
app.disable('x-powered-by');

app.use(
  cors({
    credentials: true,
    origin: 'https://powerful-cliffs-92962.herokuapp.com',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self' firebasestorage.googleapis.com *.firebasestorage.googleapis.com mongodb.com *.mongodb.com; img-src * 'self' data: https:;font-src *; object-src 'self';script-src 'self';style-src 'self' 'unsafe-inline' fontawesome.com *.fontawesome.com fonts.google.com *.fonts.google.com fonts.googleapis.com *.fonts.googleapis.com;"
  );
  next();
});

app.use('/email', emailRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    where: error.message,
    statusCode: error.status,
    alert: error.msgError,
  });
});

module.exports = app;
