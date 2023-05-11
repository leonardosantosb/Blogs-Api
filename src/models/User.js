/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: DataTypes.NUMBER,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  })
  return UserTable;
}

module.exports = UserSchema;