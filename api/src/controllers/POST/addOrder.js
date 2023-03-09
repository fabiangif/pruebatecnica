const { Cart, User } = require("../../db");

const postOrder = async (req, res) => {
  try {
    const { amount, product, idUser } = req.body;

    if (!amount || !idUser || !product)
      throw new Error("missing parameters", { statusCode: 400 });

    const newOrder = await Cart.create({
      product,
      amount
    });

    const userDb = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (!userDb) throw new Error("User not found", { statusCode: 404 });

    await userDb.addOrder(newOrder);

    return res.status(200).json({
      ...newOrder.dataValues,
      userId: userDb.id
    });
    
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = { postOrder };
