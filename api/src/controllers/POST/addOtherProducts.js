const { Otherproduct, User } = require("../../db");

const postOtherproduct = async (req, res) => {
  try {
    const { name, price, code, existence, dealer, quantity, idUser } = req.body;
    
    if (!name || !code|| !price || !existence || !dealer || !quantity )
      throw new Error("missing parameters", { statusCode: 400 });

    const newProduct = await Otherproduct.create({
      name,
      code,
      price,
      existence,
      dealer,
      quantity
    });

    // const userDb = await User.findOne({
    //   where: {
    //     id: idUser,
    //   },
    // });

    // if (!userDb) throw new Error("User not found", { statusCode: 404 });

    // await userDb.addProduct(newProduct);

    return res.status(200).send(newProduct);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postOtherproduct;
