const express = require('express');
const route = express.Router()
const todoRoutes = require("./todo-route")

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di server"
  })
})

route.use("/todos", todoRoutes)
// route.use("/movies", moviesRoutes)
// route.use("/users", usersRoutes)

module.exports = route