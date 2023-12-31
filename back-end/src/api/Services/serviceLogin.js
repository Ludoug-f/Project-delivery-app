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

  /* const verifyAdmToken = async (email) => {
    const user = await User.findOne({ where: { email } });
    if (user) { 
      const passwordMd5 = md5(password);
      const correct = passwordMd5 === user.password;
    
      if
    }
  } */

  const admToken = async (user, authorization) => {
    // const token = Auth.createToken(user);
    // console.log(token);
    // console.log(user);
    const token = await Auth.TokenDecoder(authorization);
    try {
      const userAdm = await User.findOne({ where: { id: token } });

      if (userAdm.role !== 'administrator' || !authorization) {
        return { message: 'Unauthorized' };
      }
      const passEncryp = md5(user.password);
      const createUser = await User.create({
        name: user.name,
        email: user.email,
        role: user.role,
        password: passEncryp });
      return { message: createUser }; 
    } catch (error) {
      console.log(error);
    }
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

  /* const newAdmUser = async (user, token) => {
    const { name, email, role } = user;
    await admToken(token)
    const createUser = await User.create({ name, email, role });

    return { type: 201, message: createUser };
  }; */

  const findByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
  
    return user;
  };

  const findByName = async (name) => {
    const user = await User.findOne({ where: { name } });
  
    return user;
  };

  module.exports = { login, newUser, findByEmail, findByName, admToken };
