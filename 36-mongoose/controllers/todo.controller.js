const Todo = require('../models/todo');

module.exports = {
  getAllTodo: async (req, res) => {
    const user = req.user

    const todos = await Todo.find({userID: user.id}).populate("userID", ["_id", "name"])

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos
    })
  },

  getTodoById: (req, res) => {

  },

  createTodo: async (req, res) => {
    let data = req.body

    await Todo.create(data)

    res.json({
      message: "berhasil membuat data todo"
    })
  },
}