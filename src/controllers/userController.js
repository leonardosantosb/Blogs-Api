const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const createUser = async (req, res) => {
  const secret = process.env.JWT_SECRET;
  const { email, password } = req.body;
  const newLogin = await userService.createUser(req.body);
  const jwtConfig = {
    expiresIn: '2d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { newLogin } }, secret, jwtConfig);

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!newLogin || newLogin.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token });
};

module.exports = {
  createUser,
};