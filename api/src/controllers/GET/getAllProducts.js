const { Product } = require("../../db.js");

const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  return products;
};

module.exports = getAllProducts;
