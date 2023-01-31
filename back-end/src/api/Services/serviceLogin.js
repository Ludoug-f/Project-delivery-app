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
        token: Auth.TokenCreation(user.id),
        role: user.role,
      }; 
}
    }
    
    return undefined;
  };

  const newUser = async (user) => {
    const { name, email, role } = user;
  
    // const passwordMd5 = md5(password);
    
    const createUser = await User.create({ name, email, role });
    if (createUser) return { type: '400', message: 'User already exits' };
    //  rever logica if
    // if(newUser) return { type: '400', message: 'User already exits' }
    return { message: createUser };
  };

  const findByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
  
    return user;
  };

  const findByName = async (name) => {
    const user = await User.findOne({ where: { name } });
  
    if (!user) {
      return { type: 400, message: 'Name not found' };
    }
  
    return { type: null, message: user };
  };

  module.exports = { login, newUser, findByEmail, findByName };
