const { adduser } = require("../reposetores/users");

const addUser = async (req, res, next) => {
  const { name, username, password } = req.body;
  try {
    await adduser(name, username, password);
    res.status(201).json({ message: "User added sucessfully" });
  } catch (error) {
    next(error);
  }

  //   res.status(200).json({ status: true, message: "cource added sucessfully" });
};

module.exports = {
  addUser,
};
