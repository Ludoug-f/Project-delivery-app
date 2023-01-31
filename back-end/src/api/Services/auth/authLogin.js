const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv');

// Token for Validation on Login
  const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
  const TokenCreation = (id) => jwt.sign(id, secret);
  const LoginToken = (id) => jwt.sign(id, secret, { expiresIn: '7d' });
  
  const TokenValidation = (token) => {
    try {
      const decoded = jwt.verify(token, secret);
      return decoded;
    } catch (error) {
      return false;
    }
  };

// Token Decoding for User Data
  const TokenDecoder = (token) => {
    try {
      const decoded = jwt.verify(token, secret);
      return decoded;
    } catch (error) {
      return undefined;
    }
  };

module.exports = { TokenCreation, LoginToken, TokenValidation, TokenDecoder };