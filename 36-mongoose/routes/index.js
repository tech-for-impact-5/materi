const express = require('express');
const route = express.Router()

const userRoute = require("./user.route")
const todoRoute = require("./todo.route")

route.get("/", (req, res) => {
  res.json("ini dari express mongoose")
})

route.use("/users", userRoute)
route.use("/todos", todoRoute)
// route.use("/user", userRoute)

module.exports = route
