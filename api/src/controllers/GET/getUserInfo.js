const { User } = require("../../db");

const getUserInfo = async (id) => {
  let user = await User.findAll({
    where: {
      id: id,
    },
  });
  
  if (user.length === 0)
    throw new Error("Product not found", { statusCode: 404 });

  return user;
};

module.exports = getUserInfo;
