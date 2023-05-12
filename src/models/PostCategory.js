/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    post_id: DataTypes.NUMBER,
    category_id: DataTypes.NUMBER,
  })
  return PostCategoryTable;
}

module.exports = PostCategorySchema;