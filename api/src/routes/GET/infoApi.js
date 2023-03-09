const router = require('express').Router();
const getApi = require("../../controllers/GET/apisave/getApi")

router.get("/infoapi", async (req, res) => {
    try {
        let allApiInfo = await getApi()
        console.log(allApiInfo)
        res.status(200).json(allApiInfo)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;