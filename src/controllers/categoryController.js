const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const newCategory = await categoryService.createCategory(req.body);
  return res.status(201).json(newCategory);
};

const getAll = async (req, res) => {
  const getCategorys = await categoryService.getAll();
  return res.status(200).json(getCategorys);
};

module.exports = {
  createCategory,
  getAll,
};