const router = require("express").Router();
const updateProduct = require("../../controllers/PATCH/updateProduct");

router.patch("/product/:id", async (req, res) => {
  const { id } = req.params;
  const { name, isbn, price, author, editorial, existence, dealer, quantity } = req.body;

  try {
    const update = await updateProduct({
      name,
      price,
      isbn,
      author,
      editorial,
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