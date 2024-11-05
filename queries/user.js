const addUser =
  "insert into users (name,username,password) values ($1,$2,$3) RETURNING id";

module.exports = {
  addUser,
};
