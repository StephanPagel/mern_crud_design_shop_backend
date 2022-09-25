const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

const productsCollectionName = "shop-products";

async function getAllProducts() {
  const db = await getDB();
  const products = await db.collection(productsCollectionName).find().toArray();
  return products;
}

async function addProduct(product) {
  const db = await getDB();
  const result = await db.collection(productsCollectionName).insertOne(product);
  try {
    if (result.acknowledged === true && result.insertedId) {
      return {
        _id: result.insertedId,
        ...product,
      };
    } else {
      return reject(result);
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
  return db.collection(productsCollectionName).findOne({
    _id: ObjectId(id),
  });
}

function updateProduct(id, updateProduct) {
  return new Promise((resolve, _) => {
    getDB()
      .then((db) =>
        db
          .collection(productsCollectionName)
          .findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: updateProduct },
            { returnDocument: "after" }
          )
      )
      .then((result) => {
        console.log(result);
        resolve(result.value);
      });
  });
}

function deleteProductById(id) {
  return new Promise(() => {
    getDB().then((db) => {
      db.collection(productsCollectionName).deleteOne({ _id: ObjectId(id) });
    });
  });
}

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProductById,
};
