const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
  });

  return User;
};

module.exports = User;
