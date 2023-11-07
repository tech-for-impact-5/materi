const express = require("express");
const route = express.Router();

const {
  getAllUser,
  getUserById,
  createUser,
} = require("../controllers/user-controller");

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.post("/", createUser);

module.exports = route;
