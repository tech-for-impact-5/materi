const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find()

    res.json({
      message: "berhasil mendapatkan data user",
      data: users
    })
  },

  getUserById: async (req, res) => {
    const {id} = req.params
    const users = await User.findById(id)

    res.json(users)
  },

  getUserTodos: async (req, res) => {
    const {id} = req.params

    const todos = await Todo.find({userID: id})

    res.json(todos)
  },

  createUser: async (req, res) => {
    let data = req.body

    await User.create(data)

    res.json({
      message: "berhasil membuat data user"
    })
  },
}