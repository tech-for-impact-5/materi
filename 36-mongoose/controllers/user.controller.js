const User = require('../models/user');

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find()

    res.json({
      message: "berhasil mendapatkan data user",
      data: users
    })
  },

  getUserById: (req, res) => {

  },

  createUser: async (req, res) => {
    let data = req.body

    await User.create(data)

    res.json({
      message: "berhasil membuat data user"
    })
  },
}