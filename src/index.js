const cors = require("cors")
const morgan = require("morgan")
const express = require("express")
const { productsRouter } = require("./routes/products-router")
const { usersRouter } = require("./routes/users-router")
const { registerUser } = require("./use-cases/register-user")
const { showAllUsers } = require("./use-cases/show-all-users")
const { loginUser } = require("./use-cases/login-user")
// const { doAuthMiddleware } = require("./auth/doAuthMiddleware")

const PORT = process.env.PORT || 9000
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// ********** ROUTES **********

app.get("/", (_, res) => res.send("it works..."))

// ********** PRODUCTS **********

app.use("/products", productsRouter)

// ********** USER **********

// app.use("/users", usersRouter)

// ********** ERROR 404 **********

app.use((_, res) => {
    res.status(404).json({ error: "Not found." })
})

app.listen(PORT, () => console.log("Server listening on port", PORT))