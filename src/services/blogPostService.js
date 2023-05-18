const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const getPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } }, 
      { model: Category, as: 'categories' },
    ], 
  });
  return getPosts;
};

module.exports = {
  getAll,
};