const express = require("express");
const dotenv = require("dotenv").config({ path: "./config/config.env" });
const cource = require("./routes/courses");
const logger = require("./middlewires/logger");
const erroHandler = require("./middlewires/errorHandler");

const app = express();

// const logger=(req,res,next)=>{
//     req.myName="shameel"
//     next()
// }
app.use(express.json());
app.use(logger);
app.get("/", (req, res) => {
  res.status(200).json({ status: true, message: "welcome to Node js" });
});

app.use("/api/vi/cource/", cource);

app.use(erroHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port is litening ${process.env.NODE_HOST} and in port ${PORT}`);
});
