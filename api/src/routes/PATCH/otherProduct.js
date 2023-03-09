const router = require("express").Router();
const updateOtherproduct = require("../../controllers/PATCH/updateOtherProduct");

router.patch("/otherproduct/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, code, existence, dealer, quantity } = req.body;

  try {
    const update = await updateOtherproduct({
      id,
      name,
      price,
      code,
      existence,
      dealer,
      quantity
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;