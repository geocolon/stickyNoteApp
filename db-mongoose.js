'use strict';

const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.Promise = global.Promise;

function dbConnect(url = keys.DATABASE_URL) {
  return mongoose
    .connect(
      url,
      { useNewUrlParser: true },
    )
    .catch(err => {
      console.error('Mongoose failed to connect');
      console.error(err);
    });
}

function dbDisconnect() {
  return mongoose.disconnect();
}

function dbGet() {
  return mongoose;
}

module.exports = {
  dbConnect,
  dbDisconnect,
  dbGet,
};

