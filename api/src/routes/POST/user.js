const { Router } = require("express");
const { postUser } = require("../../controllers/POST/addUser");
const router = Router();

router.post("/user", postUser);

module.exports = router;
