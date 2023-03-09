const { Otherproduct } = require("../../db");

const updateProduct = async ({ id, name, code, price, existence }) => {
  const productFound = await Otherproduct.findOne({
    where: {
      id: id,
    },
  });

  switch (n) {
    case 'NAME':
      productFound.update({
        name: name,
      });
      await productFound.save();
      return productFound;
    case 'CODE':
      productFound.update({
        code: code,
      });
      await productFound.save();
      return productFound;
    case 'PRICE':
      productFound.update({
        price: price,
      });
      await productFound.save();
      return productFound;
    case 'EXISTENCE':
      productFound.update({
        existence: existence,
      });
      await productFound.save();
      return productFound;
    default:
      return 'Cannot change the value'
  }
};

module.exports = updateProduct;