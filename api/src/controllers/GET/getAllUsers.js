const { User } = require("../../db.js");

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  return users;
};

module.exports = getAllUsers;
