const router = require('express').Router();
const getOtherproductInfo = require ('../../controllers/GET/getOtherProductInfo');


router.get("/otherproduct/:id", async (req, res) => {
    const { id } = req.params
    
    try {
        let productInfo = await getOtherproductInfo(id)
        res.status(200).json(productInfo)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;