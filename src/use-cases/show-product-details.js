const { ProductsDAO } = require("../db-access");

function showProductDetails(id) {
  return ProductsDAO.getProductById(id);
}

module.exports = {
  showProductDetails,
};
