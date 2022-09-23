// const { UserDAO } = require("../db-access")
// const { makeUser } = require("../domain/User")
// const jwt = require("jsonwebtoken")
// const { hash } = require("../utils/hash")

// function loginUser({ email, password }) {
//     return UserDAO
//     .findByEmail(email)
//     .then(foundUser => {
//         if(!foundUser) {
//             throw new Error("Problem logging in")
//         }

//         const user = makeUser(foundUser)
//         const passwordHash = hash(password + '' + user.passwordSalt)

//         const correctPassword = user.passwordHash === passwordHash
//         if(!correctPassword) {
//             throw new Error("Problem logging in")
//         }

//         const token = createToken(user)
//         return token
//     })
// }

// function createToken(user) {
//     const initiatedAtTimestamp = Math.floor(Date.now() / 1000)
//     const ONE_HOUR_IN_SECONDS = 60 * 60
//     const expiresAtTimestamp = initiatedAtTimestamp + ONE_HOUR_IN_SECONDS

//     const tokenPayload = {
//         sub: user._id,
//         iat: initiatedAtTimestamp,
//         exp: expiresAtTimestamp,
//         role: user.role || "user"
//     }

//     const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { algorithm: "HS256" })
//     return token
// }

// module.exports = {
//     loginUser
// }