'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const authRouter = require('./routes/auth');
const { localStrategy, jwtStrategy } = require('./passport/local');

const { dbConnect } = require('./db-mongoose');

const app = express();
// Mount routers
app.use(cors());

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api/', usersRouter);
app.use('/api/notes', notesRouter);
app.use('/api/auth/', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test',
  }),
);

app.use(express.json());

const PORT = process.env.PORT || 8080;

function runServer() {
  const server = app
    .listen(PORT, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
