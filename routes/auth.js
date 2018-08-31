'use strict';

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');
const router = express.Router();

const createAuthToken = function(user) {
  return jwt.sign({ user }, keys.JWT_SECRET, {
    subject: user.username,
    expiresIn: keys.JWT_EXPIRY,
    algorithm: 'HS256',
  });
};

const localAuth = passport.authenticate('local', {
  session: false,
  failWithError: true,
});

router.use(bodyParser.json());

router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user.serialize());
  res.json({ authToken });
});

const jwtAuth = passport.authenticate('jwt', {
  session: false,
  failWithError: true,
});

router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});

module.exports = router;
