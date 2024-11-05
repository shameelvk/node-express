const express = require("express");
const { addUser } = require("../controllers/users");
const route = express.Router();

route.post("/", addUser);

module.exports = route;
