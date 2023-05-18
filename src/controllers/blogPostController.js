const blogPostService = require('../services/blogPostService');

const getAll = async (req, res) => {
  const getBlogPost = await blogPostService.getAll();
  return res.status(200).json(getBlogPost);
};

module.exports = {
  getAll,
};