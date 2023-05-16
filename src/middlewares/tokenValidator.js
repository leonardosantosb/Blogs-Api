const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;
const tokenValidator = async (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {  
    const decode = jwt.verify(token, secret);
    const user = await userService.getAll(decode);
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidator,
};