  const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' });
}
  next();
};
  const nameValidate = async (req, res, next) => {
    const { name } = req.body;
    if (!name || name.length < 12) {
      return res.status(400).json({ message: 'Name must be at least 12 characters' });
    }
    next();
  };
  
  const passwordValidate = async (req, res, next) => {
    const { password } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    next();
  };
  
  module.exports = { nameValidate, emailValidate, passwordValidate };