const md5 = require('md5');
const { User } = require('../../database/models');
const Auth = require('./auth/authLogin');

  // Search for user by email
  const login = async ({ email, password }) => { 
    if (!email) return undefined;
    const user = await User.findOne({ where: { email } });

    // Compare password with MD5
    if (user) { 
      const passwordMd5 = md5(password);
      const correct = passwordMd5 === user.password;

      // Create token and return user data if password is correct
      if (correct) { 
 return {
        name: user.name,
        email,
        token: Auth.createToken(email),
        role: user.role,
      }; 
}
    }

    return undefined;
  };

  module.exports = { login };