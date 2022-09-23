// const { ObjectId } = require("mongodb")
// const { getDB } = require("./getDB")

// const usersCollectionName = "users"

// function findAll() {
//     return getDB()
//     .then(db => db.collection(usersCollectionName).find().toArray())
// }

// function findById(id) {
//     return getDB()
//     .then(db => db.collection(usersCollectionName).findOne({ _id: ObjectId(id) }))
// }

// function findByEmail(email) {
//     return getDB()
//     .then(db => db.collection(usersCollectionName).findOne({ email: email }))
// }

// function insertOne(userInfo) {
//     return getDB()
//     .then(db => db.collection(usersCollectionName).insertOne(userInfo))
// }

// module.exports = {
//     findAll,
//     findById,
//     findByEmail,
//     insertOne
// }