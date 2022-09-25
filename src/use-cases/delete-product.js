const { ProductsDAO } = require("../db-access");

function deleteProduct(productId) {
  return ProductsDAO.deleteProductById(productId);
}

module.exports = {
  deleteProduct,
};
