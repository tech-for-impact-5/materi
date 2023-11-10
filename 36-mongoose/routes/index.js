const express = require('express');
const route = express.Router()

const userRoute = require("./user.route")
const todoRoute = require("./todo.route")
const authRoute = require("./auth.route")

route.get("/", (req, res) => {
  res.json("ini dari express mongoose")
})

route.use("/auth", authRoute)
route.use("/users", userRoute)
route.use("/todos", todoRoute)
// route.use("/user", userRoute)

module.exports = route
