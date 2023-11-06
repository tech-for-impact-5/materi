const express = require('express');
const route = express.Router()
const todoRoutes = require("./todo-route")
const authRoutes = require("./auth-route")
const userRoutes = require("./user-route");
const verifyToken = require('../middleware/auth');


route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di server"
  })
})

route.use("/auth", authRoutes)
route.use("/users", userRoutes)
route.use("/todos", verifyToken, todoRoutes)

// route.use("/movies", moviesRoutes)

module.exports = route