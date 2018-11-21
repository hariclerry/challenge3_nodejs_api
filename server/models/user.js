module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  });

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};