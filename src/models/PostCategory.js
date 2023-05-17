/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    postId: {
      allowNull: false,
      type: DataTypes.NUMBER,
      foreignKey: true,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.NUMBER,
      foreignKey: true,
    }
  },
  {
    timestamps: false,
    underscored: true,
  },
)
PostCategoryTable.associate = (models) => {
  models.Category.belongsToMany(models.BlogPost, {
    as: 'blogposts',
    through: PostCategoryTable,
    foreignKey: 'postId',
    otherKey: 'categoryId'
  });
  models.BlogPost.belongsToMany(models.Category, {
    as: 'Category',
    through: PostCategoryTable,
    foreignKey: 'categoryId',
    otherKey: 'postId'
  })
};
  return PostCategoryTable;
}

module.exports = PostCategorySchema;