const express = require('express');
const route = express.Router()
const todoRoutes = require("./todo-route")
const authRoutes = require("./auth-route")
const userRoutes = require("./user-route")


route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di server"
  })
})

route.use("/todos", todoRoutes)
route.use("/auth", authRoutes)
route.use("/users", userRoutes)

// route.use("/movies", moviesRoutes)

module.exports = route