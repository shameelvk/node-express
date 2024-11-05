const pool = require("../config/db");
const userQuires = require("../queries/user");
const { hashPassword } = require("../utils/passwordHaser");

const adduser = (name, username, password) => {
  const hashPass = hashPassword(password);
  return new Promise((resolve, reject) => {
    pool.query(
      userQuires.addUser,
      [name, username, hashPass],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log(result.rows);
          const userId = result.rows ? result.rows[0].id : 0;
          resolve(userId);
        }
      }
    );
  });
};

const isUserExisitByUsername = (username) => {
  return new Promise((resolve, reject) => {
    pool.query(userQuires.getUserByUsername, [username], (error, result) => {
      if (error) {
        reject(false);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
  adduser,
  isUserExisitByUsername,
};
