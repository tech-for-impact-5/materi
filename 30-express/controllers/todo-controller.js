const Todos = require("../models/Todos")

module.exports = {
  getAllTodo: (req, res) => {
    res.json({
      message: "berhasil mendapatkan data todos",
      data: Todos
    })
  }, 

  getTodoById: (req, res) => {

  }, 

  addTodo: (req, res) => {

  }, 

  editTodoById: (req, res) => {

  }, 

  deleteTodoById: (req, res) => {

  }, 
}