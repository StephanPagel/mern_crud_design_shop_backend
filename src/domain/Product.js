function makeProduct({
    _id,
    ProductName,
    Company,
    Price,
    ProductLink,
    LinkShop
}) {
    // if (typeof ProductName !== "string" || ProductName.length < 1) {
    //   throw new Error("Productname must have at least one character.");
    // }
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
    makeProduct
}