const { Product } = require("../../db");

const postProduct = async (req, res) => {
  try {
    const {
      name,
      isbn,
      price,
      author,
      editorial,
      existence,
      dealer,
      quantity,
    } = req.body;

    if (
      !name ||
      !isbn ||
      !price ||
      !author ||
      !editorial ||
      !existence ||
      !dealer ||
      !quantity
    )
      throw new Error("missing parameters", { statusCode: 400 });

    const newProduct = await Product.create({
      name: name,
      isbn: isbn,
      price: price,
      author: author,
      editorial: editorial,
      existence: existence,
      dealer: dealer,
      quantity: quantity,
    });

    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postProduct;
