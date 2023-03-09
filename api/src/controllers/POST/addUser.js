const { User } = require("../../db");

const postUser = async (req, res) => {
  try {
    const { name, email, password, phone, isAdmin } = req.body;

    console.log(User)

    // Verificamos que tengamos todos los valores
    if (!name || !email || !password || !phone || !isAdmin)
      throw new Error("missing parameters");

    // Si todo esta bien creamos el usuario
    const newUser = await User.create({
      name,
      email,
      password,
      phone: phone ? phone : null,
      isAdmin: isAdmin ? isAdmin : false,
    });

    return res.status(200).json(newUser);
  } catch (error) {
    switch (error) {
      case "llave duplicada viola restricción de unicidad «users_email_key»":
        return res.status(400).send({ error: "Ya hay un usuario email ya existe" });
      case "llave duplicada viola restricción de unicidad «users_userName_key»":
        return res.status(400).send({ error: "El usuario ya existe" });
      case "llave duplicada viola restricción de unicidad «users_phone_key»":
        return res.status(400).send({ error: "El telefono ya existe" });
      default:
        return res.status(400).send({ error: error.message });
    }
  }
};

module.exports = { postUser };
