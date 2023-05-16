const { Category } = require('../models');

  const createCategory = async ({ name }) => {
    console.log('NAMESERV', name);
    const newCategory = await Category.create({ name });
    return newCategory;
  };

  module.exports = {
    createCategory,
  };