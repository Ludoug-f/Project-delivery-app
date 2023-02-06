const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv');

const JWTPASS = process.env.NODE_ENV || 'JWTPASS';
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
      console.log('erro no token');
      return error;
    }
  };
  
  const validateToken = (token) => {
    const data = jwt.verify(token, JWTPASS);
    console.log(data);
    return data;
  };

module.exports = { TokenCreation, LoginToken, TokenValidation, TokenDecoder, validateToken };
