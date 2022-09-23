const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

async function getAllProducts() {
  const db = await getDB();
  const products = await db.collection("shop-products").find().toArray();
  return products;
}

async function addProduct(product) {
  const db = await getDB();
  const result = await db.collection("shop-products").insertOne(product);
  try {
    if (result.acknowledged === true && result.insertedId) {
      return {
        _id: result.insertedId,
        ...product,
      };
    } else {
      return result;
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: err.toString() || "Internal Server Error." });
  }
}

async function getProductById(id) {
  const db = await getDB();
  return db.collection("shop-products").findOne({
    _id: ObjectId(id),
  });
}

function updateProductById(id, updatedValue) {
  return new Promise((resolve, reject) => {
    getDB()
      .then((db) =>
        db.collection("shop-products").findOneAndUpdate(
          { _id: ObjectId(id) },
          {
            $set: {
              ProductName: updatedValue.ProductName,
              Company: updatedValue.Company,
              Price: updatedValue.Price,
              ProductLink: updatedValue.ProductLink,
              LinkShop: updatedValue.LinkShop,
            },
          },
          { returnDocument: "after" }
        )
      )
      .then((result) => {
        if (result.ok === 1) resolve(result.value);
        else reject({ msg: "Error updating product" });
      })
      .catch((err) => reject(err));
  });
}

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
};
