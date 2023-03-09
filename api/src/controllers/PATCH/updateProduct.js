const { Product } = require("../../db");

const updateProduct = async ({ id, name, ISBN, price, author, editorial, existence }) => {
  const productFound = await Product.findOne({
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
    case 'ISBN':
      productFound.update({
        ISBN: ISBN,
      });
      await productFound.save();
      return productFound;
    case 'PRICE':
      productFound.update({
        price: price,
      });
      await productFound.save();
      return productFound;
    case 'AUTHOR':
      productFound.update({
        author: author,
      });
      await productFound.save();
      return productFound;
    case 'EDITORIAL':
      productFound.update({
        editorial: editorial,
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