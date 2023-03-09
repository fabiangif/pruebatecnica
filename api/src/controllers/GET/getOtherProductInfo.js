const { Otherproduct } = require("../../db");

const getOtherproductInfo = async (id) => {
  let otherProduct = await Otherproduct.findAll({
    where: {
      id: id,
    },
  });

  if (otherProduct.length === 0)
    throw new Error("Product not found", { statusCode: 404 });

  return otherProduct;
};

module.exports = getOtherproductInfo;
