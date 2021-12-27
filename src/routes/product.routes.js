const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.route("/").get(productController.all).post(productController.create)
router.route("/:id").get(productController.one).put(productController.update).delete(productController.delete)

module.exports = router;
