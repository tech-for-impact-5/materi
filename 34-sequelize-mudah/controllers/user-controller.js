const bcrypt = require('bcrypt');
const User = require("../models/User");
const Todo = require('../models/Todo');

module.exports = {
  getAllUser : async (req, res) => {
    const users = await User.findAll({include: Todo})

    res.json({
      message: "berhasil mendapatkan data user",
      data: users
    })
  },

  getUserById : (req, res) => {

  },

  createUser : async (req, res) => {
    let data = req.body

    try {
      // hash password
      const hashPassword = bcrypt.hashSync(data.password, 10)
      data.password = hashPassword

      // input data
      await User.create(data)

      // send response
      res.status(201).json({
        message: "berhasil menambahkan user"
      })
      
    } catch {
      res.json({
        message: "gagal menambahkan user"
      })
    }
  },
}