const { ProductsDAO } = require("../db-access")
const { makeProduct } = require ("../domain/Product")

function addProduct({ ProductName, Company,
Price, ProductLink,LinkShop}) {
    const product = makeProduct({
      ProductName,
      Company,
      Price,
      ProductLink,
      LinkShop,
    });
    return ProductsDAO.addProduct(product)
}

module.exports = {
    addProduct
}