const express = require('express');
const bcrypt = require('bcrypt')
const route = express.Router()

const User = require("../models/Users")

route.post('/login', (req, res) => {
  let data = req.body

  const user = User.find(item => item.email == data.email)
  // select * from user where email = auzan@gmail.com

  if (!user) {
    res.json({
      message: "anda tuh siapaa??"
    })
    return
  }
  
  if (bcrypt.compareSync(data.password, user.password)) {
    res.json({
      message: "anda berhasil login"
    })
    return
  }

  res.json({
    message: "password anda salah"
  })
})

route.post('/regis', (req, res) => {
  let data = req.body
  console.log(data);
  
  let saltRounds = 10
  let hashPassword = bcrypt.hashSync(data.password, saltRounds)

  data.password = hashPassword
  User.push(data)

  res.json({
    message: "berhasil regis"
  })
})

module.exports = route
