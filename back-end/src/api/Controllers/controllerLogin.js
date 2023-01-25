const serviceLogin = require('../Services/serviceLogin');

  // Verify if email and password are provided in the request body
  const ctrlLogin = async (req, res) => { 
    const response = await serviceLogin.login(req.body);

    // If not, return status 404 - Not found
    if (!response) return res.status(404).json({ message: 'Not found' }); 

    return res.status(200).json(response);
  };

  module.exports = { ctrlLogin };