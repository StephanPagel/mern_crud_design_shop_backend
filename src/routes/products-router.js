const express = require("express");
const { addProduct } = require("../use-cases/add-product")
const { showProducts } = require("../use-cases/show-products")
const { editProduct } = require("../use-cases/edit-product")
const { showProductDetails } = require("../use-cases/show-product-details.js")

const productsRouter = express.Router()

productsRouter.get("/all", (_, res) => {
  showProducts()
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to load products from database" });
    });
});

productsRouter.get("/detail/:id", (req, res) => {
  const productId = req.params.id
  showProductDetails(productId)
  .then((product) => res.json(product))
  .then((product) => console.log(product))
})

productsRouter.post("/add", (req, res) => {
  if (!req.body || !req.body.ProductName) {
    res.state(400).json({ error: "Please include a product." });
    return;
  }

  const newProduct = {
    ProductName: req.body.ProductName,
    Company: req.body.Company,
    Price: req.body.Price,
    ProductLink: req.body.ProductLink,
    LinkShop: req.body.LinkShop,
  };

  addProduct(newProduct)
    .then((addedProduct) => res.status(201).json(addedProduct))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add product to database" });
    });
});

// productsRouter.edit("/edit:id", (req, res) => {
//   const productId = req.params.id
  
// })

module.exports = {
    productsRouter
}