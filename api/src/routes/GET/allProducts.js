const router = require('express').Router();
const initialProduct = require ('../../controllers/GET/apisave/index');
const getAllProducts = require('../../controllers/GET/getAllProducts');

router.get("/allproducts", async (req, res) => {
    try {
        let allProducts= await getAllProducts();
        res.status(200).json(allProducts)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;