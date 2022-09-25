function makeProduct({
  _id,
  ProductName,
  Company,
  Price,
  ProductLink,
  LinkShop,
}) {
  return {
    _id,
    ProductName,
    Company,
    Price,
    ProductLink,
    LinkShop,
  };
}

module.exports = {
  makeProduct,
};
