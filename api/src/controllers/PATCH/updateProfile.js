const { User } = require("../../db");

const updateProfile = async (id, { photo, name, email, password, phone, adress }) => {
  
  const profileFound = await User.findOne({
    where: {
      id: id,
    },
  });

  if(!profileFound) throw new Error('User donnot exist');

  switch(n) {
    case 'NAME':
      profileFound.update({
        name: name,
      });
    case 'PHOTO':
      profileFound.update({
        photo: photo,
      });
    case 'EMAIL':
      profileFound.update({
        email: email,
      });
    case 'PASSWORD':
      profileFound.update({
        password: password,
      });
    case 'PHONE':
      profileFound.update({
        phone: phone,
      });
    case 'ADRESS':
      profileFound.update({
        adress: adress,
      });
  }
  
  await profileFound.save();

  return profileFound;
};

module.exports = updateProfile;