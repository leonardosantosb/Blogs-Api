const { User } = require('../models');

  const login = async ({ email, password }) => {
    const Login = await User.findOne({ where: { email, password } }); 
    return Login;
  };

  const createUser = async ({ displayName, email, password, image }) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  };

  const getAll = async () => {
    const getUsers = await User.findAll({ attributes: { exclude: 'password' } });
    return getUsers;
  };

  module.exports = {
    login,
    createUser,
    getAll,
  };