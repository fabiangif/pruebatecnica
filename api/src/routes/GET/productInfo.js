const router = require('express').Router();
const getProductInfo = require ('../../controllers/GET/getProductInfo');


router.get("/product/:id", async (req, res) => {
    const { id } = req.params
    try {
        let productInfo = await getProductInfo(id)
        res.status(200).json(productInfo)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;