const { checkUser } = require('../Services/serviceRegister');

// Create new a user in database and return a token
const NewUser = async (req, res) => {
    const user = await checkUser(req.body);
    if (user) {
      return res.status(201).json({ token: user });
    }
    return res.status(409).json({ message: 'Data already exists' });
  };
  
  module.exports = { NewUser };