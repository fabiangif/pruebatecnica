const saveDB = require("./saveDB");

const getApi = require("./getApi");

async function initialProduct() {
  const booksApi = await getApi();
  console.log(booksApi, "SOY BOOKSAPI");
  booksApi.forEach((m) => saveDB(m));
}

module.exports = initialProduct;
