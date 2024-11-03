const pool = require("../config/db");
const courceQuires = require("../queries/cource");

const getAllCources = () => {
  return new Promise((resolve, reject) => {
    pool.query(courceQuires.getCources, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result.rows);
    });
  });
};

const getcourceById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(courceQuires.getCourceById, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
};

const addCourc = (title, duration) => {
  return new Promise((resolve, reject) => {
    pool.query(courceQuires.addCource, [title, duration], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

const iscourceExisitById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(courceQuires.getCourceById, [id], (error, result) => {
      if (error) {
        reject(false);
      } else {
        resolve(result.rows.length > 0);
      }
    });
  });
};

const UpdateCource = (title, duration, courceId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      courceQuires.updateCource,
      [title, duration, courceId],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};

const deleteCourceByid = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(courceQuires.deleteCource, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};
module.exports = {
  getAllCources,
  getcourceById,
  addCourc,
  iscourceExisitById,
  UpdateCource,
  deleteCourceByid,
};
