const { ProductsDAO } = require("../db-access");

function showProducts() {
  return ProductsDAO.getAllProducts().then((products) =>
    products.map((product) => ({
      id: product._id,
      ProductName: product.ProductName,
      Company: product.Company,
      Price: product.Price,
      ProductLink: product.ProductLink,
      LinkShop: product.LinkShop,
    }))
  );
}

module.exports = {
  showProducts,
};
