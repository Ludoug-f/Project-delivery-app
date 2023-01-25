const jwt = require('jsonwebtoken');
require('dotenv');

const JWTPASS = process.env.NODE_ENV || 'JWTPASS'; // JWT password

  const createToken = (email) => jwt.sign(email, JWTPASS); // Create token

module.exports = { createToken };