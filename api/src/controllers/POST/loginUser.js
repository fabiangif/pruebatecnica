const { User } = require("../../db.js");

const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: { email, password }
  });
  return user;
};

module.exports = loginUser;