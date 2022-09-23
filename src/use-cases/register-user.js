// const { UserDAO } = require("../db-access")
// const { hash, createRandomHash } = require("../utils/hash")

// function registerUser({ name, email, password }) {
//     const passwordSalt = createRandomHash()
//     const passwordHash = hash(password + '' + passwordSalt)

//     const newUser = {
//         name,
//         email,
//         emailVerified: false,
//         passwordHash,
//         passwordSalt
//     }

//     return UserDAO
//     .insertOne(newUser)
//     .then((insertResult) => {
//         return ({
//             _id: insertResult.insertedId,
//             name,
//             email
//         })
//     })
// }

// module.exports = {
//     registerUser
// }