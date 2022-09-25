const { ProductsDAO } = require("./../db-access");

function updateProductById(productId, updateProduct) {
  console.log("productId:", productId);
  console.log("updateProduct:", updateProduct);
  return ProductsDAO.updateProduct(productId, updateProduct);
}

module.exports = {
  updateProductById,
};
