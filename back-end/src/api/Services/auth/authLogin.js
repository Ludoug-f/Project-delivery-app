const jwt = require('jsonwebtoken');
require('dotenv');

const JWTPASS = process.env.NODE_ENV || 'JWTPASS'; // JWT password

  const createToken = (email) => jwt.sign(email, JWTPASS); // Create token

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
