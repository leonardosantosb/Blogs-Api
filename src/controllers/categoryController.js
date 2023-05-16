const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  console.log('controller', req.body);
  const newCategory = await categoryService.createCategory(req.body);
  console.log('newcategory', newCategory);

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};