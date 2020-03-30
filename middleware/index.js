const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secret.js');

module.exports = {
  restricted
};

// Auth Router

function restricted(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        //i.e: the token is not valid
        res.status(401).json({ errorMessage: 'The provided token is invalid / expired' });
      } else {
        req.user = { id: decodedToken.id, email: decodedToken.email };
        next();
      }
    });
  } else {
    res.status(401).json({ errorMessage: 'Must be an authorized villager / token is missing' });
  }
}