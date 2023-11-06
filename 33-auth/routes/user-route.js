const express = require('express');
const bcrypt = require('bcrypt')
const route = express.Router()

const User = require("../models/Users")

route.get('/', (req, res) => {
  res.json({
    data: User
  })
})

// route.getById('/:id', (req, res) => {

// })

module.exports = route
