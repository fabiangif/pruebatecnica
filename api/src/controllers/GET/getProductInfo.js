const { Product } = require("../../db");

const getProductInfo = async (id) => {
  let product = await Product.findAll({
    where: {
      id: id,
    },
  });

  if (product.length === 0)
    throw new Error("Product not found", { statusCode: 404 });

  return product;
};

module.exports = getProductInfo;
