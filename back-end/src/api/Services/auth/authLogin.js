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

<<<<<<< HEAD
  /* const checkToken = (authorization) => {
    if (!authorization) {
      return {message: 'Need a valid token'}
    }
  }; */
  
  const validateToken = (token) => {
    const data = jwt.verify(token, JWTPASS);
    // checkToken(token);
    console.log(data);
    return data;
  };

module.exports = { createToken, validateToken };
=======
module.exports = { TokenCreation, LoginToken, TokenValidation, TokenDecoder };
>>>>>>> main-group-14-main
