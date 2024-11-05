const addUser = "insert into users (name,username,password) values ($1,$2,$3)";

module.exports = {
  addUser,
};
