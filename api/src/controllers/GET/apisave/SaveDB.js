const { Product } = require('../../../db');

async function saveDB(data){

    const instance = await Product.create({
            id: data.id,
            isbn: data.isbn,
            name: data.name,
            author: data.author,
            price: data.price,
            editorial: data.editorial,
            existence: data.existence,
    });

    return instance;
}

module.exports = saveDB;