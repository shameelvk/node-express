const { verifyJwt } = require("../utils/jwtHelper");

const jwtVerifyHandler = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token && token.includes("bearer")) {
    try {
      const result = await verifyJwt(token);
      next();
    } catch (error) {
      res.status(401).json({ message: "Inavlid Token" });
    }
  } else {
    res.status(401).json({ message: "Inavlid Token" });
  }
};

module.exports = { jwtVerifyHandler };
