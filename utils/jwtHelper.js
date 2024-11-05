var jwt = require("jsonwebtoken");
const SECRET = "shameel";

const createJwt = (userId) => {
  const token = jwt.sign({ userId: userId }, SECRET);
  return token;
};

const verifyJwt = (token) => {
  return new Promise((resolve, reject) => {
    const formattedToken = token.replace("bearer ", "");
    jwt.verify(formattedToken, SECRET, (err, decoded) => {
      if (err) {
        reject({ valid: false, error: err });
      }
      resolve({ valid: true, userId: decoded.userId });
    });
  });
};

module.exports = {
  createJwt,
  verifyJwt,
};
