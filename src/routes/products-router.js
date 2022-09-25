const express = require("express");
const { addProduct } = require("../use-cases/add-product");
const { showProducts } = require("../use-cases/show-products");
const { updateProductById } = require("../use-cases/update-product");
const { showProductDetails } = require("../use-cases/show-product-details");
const { deleteProduct } = require("../use-cases/delete-product");

const productsRouter = express.Router();

productsRouter.get("/all", (_, res) => {
  showProducts()
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to load products from database" });
    });
});

productsRouter.get("/detail/:id", (req, res) => {
  const productId = req.params.id;
  showProductDetails(productId).then((product) => res.json(product));
});

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

productsRouter.put("/edit/:id", (req, res) => {
  const productId = req.params.id;
  const updateProduct = req.body;
  console.log("file", req.file);
  if (req.file) {
    updateProduct.filename = req.file.filename;
  }
  updateProductById(productId, updateProduct)
    .then((updatedElement) => res.json(updatedElement))
    .catch((err) => console.log(err));
  console.log(req.body);
});

productsRouter.delete("/delete/:id", (req, res) => {
  const productId = req.params.id;
  deleteProduct(productId)
    .then((products) => res.json(products))
    // .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete product" });
    });
});

module.exports = {
  productsRouter,
};
