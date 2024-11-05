const { adduser, isUserExisitByUsername } = require("../reposetores/users");
const ErrorResponse = require("../utils/errorResponse");
const { createJwt } = require("../utils/jwtHelper");

const addUser = async (req, res, next) => {
  const { name, username, password } = req.body;
  try {
    const user = await isUserExisitByUsername(username);
    if (user && user.length > 0) {
      return next(new ErrorResponse("Username already exsist..", 404));
    }
    const userId = await adduser(name, username, password);
    if (userId) {
      const token = createJwt(userId);
      res
        .status(201)
        .json({ message: "User added sucessfully", token: token, name: name });
    }
  } catch (error) {
    next(error);
  }

  //   res.status(200).json({ status: true, message: "cource added sucessfully" });
};

module.exports = {
  addUser,
};
