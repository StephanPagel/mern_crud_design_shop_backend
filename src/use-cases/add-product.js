const { ProductsDAO } = require("../db-access");
const { makeProduct } = require("../domain/Product");

async function addProduct({
  ProductName,
  Company,
  Price,
  ProductLink,
  LinkShop,
}) {
  const product = makeProduct({
    ProductName,
    Company,
    Price,
    ProductLink,
    LinkShop,
  });
  // return ProductsDAO.addProduct(product);
  const insertResult = await ProductsDAO.addProduct(product);
  return makeProduct({ ...product, _id: insertResult.insertedId });
}

module.exports = {
  addProduct,
};
