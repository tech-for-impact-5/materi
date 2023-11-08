const express = require('express');
const route = express.Router()

const userRoutes = require("./user-route.js")
const todoRoutes = require("./todo-route.js")


route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di express sequelize"
  })
})

route.use("/users", userRoutes)
route.use("/todos", todoRoutes)

module.exports = route