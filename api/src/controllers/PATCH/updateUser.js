const { User } = require("../../db");

const updateUser = async ({ id, name, photo, email, password, phone, wallet, adress, isAdmin }) => {

  const userFound = await User.findOne({
    where: {
      id: id,
    },
  });
  
  if (userFound && wallet && !name && !userName && !email && !password && !phone && !isActive && !isAdmin) {
    userFound.update({
      wallet,
    });
    await userFound.save();
    return userFound;
  }
  if (userFound && !name && !userName && !email && !password && !phone && !wallet && !isAdmin) {
    userFound.update({
      adress,
    });
    await userFound.save();
    return userFound;
  }
  if (userFound && isAdmin && !name && !userName && !email && !password && !phone && !wallet && !isActive) {
    userFound.update({
      isAdmin,
    });
    await userFound.save();
    return userFound;
  }

  if (userFound) {
    userFound.update({
      isAdmin,
      name,
      userName,
      email,
      password,
      phone,
      wallet,
      isActive,
    });
    await userFound.save();
    return userFound;
  }
};

module.exports = updateUser;