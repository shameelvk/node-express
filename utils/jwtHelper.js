var jwt = require("jsonwebtoken");
const SECRET = "shameel";

const createJwt = (userId) => {
  const token = jwt.sign({ userId: userId }, SECRET);
  return token;
};

module.exports = {
  createJwt,
};
