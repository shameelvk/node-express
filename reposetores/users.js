const pool = require("../config/db");
const userQuires = require("../queries/user");
const { hashPassword } = require("../utils/passwordHaser");

const adduser = (name, username, password) => {
  console.log("haai");

  const hashPass = hashPassword(password);
  return new Promise((resolve, reject) => {
    pool.query(
      userQuires.addUser,
      [name, username, hashPass],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};

module.exports = {
  adduser,
};
