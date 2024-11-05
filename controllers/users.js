const { adduser } = require("../reposetores/users");
const { createJwt } = require("../utils/jwtHelper");

const addUser = async (req, res, next) => {
  const { name, username, password } = req.body;
  try {
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
