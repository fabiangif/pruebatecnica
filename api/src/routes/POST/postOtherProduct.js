const router = require("express").Router();
const postOtherproduct = require("../../controllers/POST/addOtherProducts");

router.post("/otherproduct", postOtherproduct);

module.exports = router;
