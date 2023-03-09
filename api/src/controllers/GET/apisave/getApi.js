const axios = require("axios");

const getApi = async () => {
  try {
    const books = await axios.get(`http://localhost:3003/`);

    const allBooks = books.data.map((e) => {
      return {
        id: e.id,
        isbn: e.ISBN,
        name: e.name,
        author: e.author,
        price: e.price,
        editorial: e.editorial,
        existence: e.existence,
      };
    });
    
    return allBooks;

  } catch (err) {
    console.log(err);
  }
};

module.exports = getApi;
