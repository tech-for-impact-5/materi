const bcrypt = require('bcrypt');
const Todo = require("../models/Todo");
const User = require('../models/User');

module.exports = {
  getAllTodo : async (req, res) => {
    const todos = await  Todo.findAll()

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos
    })
  },

  getTodoById : (req, res) => {

  },

  createTodo : async (req, res) => {
    let data = req.body

    try {
      // input data
      await Todo.create(data)

      // send response
      res.status(201).json({
        message: "berhasil menambahkan todo"
      })
      
    } catch (error) {
      res.json({
        message: "gagal menambahkan todo",
        error: error.message
      })
    }
  },
}