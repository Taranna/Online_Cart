const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAProductById,
} = require("../controller/productControllers");

//desc =GET all products from db
//route =GET /api/products
//acces=public
router.get("/", getAllProducts);

//desc =GET a singular  product (using :id )from db
//route =GET /api/products/:id
//acces=public
router.get("/:id", getAProductById);

module.exports = router;
