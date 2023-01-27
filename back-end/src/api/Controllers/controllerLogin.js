const serviceLogin = require('../Services/serviceLogin');

  // Verify if email and password are provided in the request body
  const ctrlLogin = async (req, res) => { 
    const response = await serviceLogin.login(req.body);

    // If not, return status 404 - Not found
    if (!response) return res.status(404).json({ message: 'Not found' }); 

    return res.status(200).json(response);
  };

 const createUser = async (req, res) => {
    const { name, email, role } = req.body;
  
    const existingEmail = await serviceLogin.findByEmail(email);
    const newUser = await serviceLogin.newUser({ name, email, role });
  
    if (existingEmail) {
      return res.status(409).json({ message: 'Eamil already exists' });
    } 
  
    if (newUser) {
      return res.status(201).json(newUser);
    }
  };
  module.exports = { ctrlLogin, createUser };
