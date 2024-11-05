const addUser =
  "insert into users (name,username,password) values ($1,$2,$3) RETURNING id";

const getUserByUsername =
  "SELECT id,name,username from users WHERE username=$1";

module.exports = {
  addUser,
  getUserByUsername,
};
