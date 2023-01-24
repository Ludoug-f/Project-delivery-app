const serviceLogin = require('../Services/serviceLogin');

  const Login = async (req, res) => {
    const response = await serviceLogin.login(req.body);

    if (!response) return res.status(404).json({ message: 'Not found' });

    return res.status(200).json(response);
  };

  module.exports = { Login };