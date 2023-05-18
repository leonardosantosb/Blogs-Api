/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    }, 
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  },
)
BlogPostTable.associate = (models) => {
  BlogPostTable.belongsTo(models.User, {
    foreignKey: 'user_id',
    as: 'user',
  });
};
return BlogPostTable;

}
module.exports = BlogPostSchema;