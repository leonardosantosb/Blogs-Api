/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
  })
  return CategoryTable;
}

module.exports = CategorySchema;