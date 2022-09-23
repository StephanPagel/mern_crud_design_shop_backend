const { ProductsDAO } = require("../db-access")

function editProduct({ productId, updatedValue }) {
    ProductsDAO.updateProductById(productId, updatedValue)
}

module.exports = {
    editProduct
}