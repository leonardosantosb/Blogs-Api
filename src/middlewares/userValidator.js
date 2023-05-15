const { User } = require('../models');

function validateEmail(email) {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(email);
}
const userValidator = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const userVerify = await User.findOne({ where: { email } });
  
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
}
if (password.length < 6) {
  return res.status(400).json({ message: '"password" length must be at least 6 characters long',
  });
}
if (userVerify) { return res.status(409).json({ message: 'User already registered' }); }
next();
};

module.exports = {
  userValidator,
};