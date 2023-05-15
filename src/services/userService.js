const { User } = require('../models');

  const createUser = async ({ email, password }) => {
    const newUser = await User.findOne({ where: { email, password } }); 
    return newUser;
  };

  module.exports = {
    createUser,
  };