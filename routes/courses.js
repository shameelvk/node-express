const express = require("express");
const route = express.Router();

const {
  getCource,
  getCources,
  deleteCource,
  updateCource,
  addCource,
} = require("../controllers/courses");
const { jwtVerifyHandler } = require("../middlewires/jwtHandler");

route.route("/:id").get(getCource).put(updateCource).delete(deleteCource);
route.get("/", [jwtVerifyHandler], getCources);
route.post("/", addCource);

module.exports = route;
