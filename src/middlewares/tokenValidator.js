const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const tokenValidator = (req, res, next) => {
  const token = req.header('Authorization');
  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidator,
};