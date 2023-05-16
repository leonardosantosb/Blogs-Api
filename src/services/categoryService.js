const { Category } = require('../models');

  const createCategory = async ({ name }) => {
    console.log('NAMESERV', name);
    const newCategory = await Category.create({ name });
    return newCategory;
  };

  const getAll = async () => {
    const getCategorys = await Category.findAll();
    return getCategorys;
  };

  module.exports = {
    createCategory,
    getAll,
  };