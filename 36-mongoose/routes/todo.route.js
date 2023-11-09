const express = require("express");
const route = express.Router();

const {
  getAllTodo,
  getTodoById,
  createTodo,
} = require("../controllers/todo.controller");

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);

module.exports = route;
