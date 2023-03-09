const router = require("express").Router();
const postProduct = require("../../controllers/POST/addProduct");

router.post("/product", postProduct)

module.exports = router;
