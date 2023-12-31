/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    }, 
    name: DataTypes.STRING,
  }, 
    {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
    },
  )
  return CategoryTable;
}

module.exports = CategorySchema;