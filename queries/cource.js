const getCources = "select id,title,duration from courses";
const getCourceById = "select id,title,duration from courses where id=$1";
const addCource = "insert into courses (title,duration) values ($1,$2)";
const updateCource = "UPDATE courses SET title=$1,duration=$2 where id=$3";
const deleteCource = "DELETE FROM courses WHERE id=$1";

module.exports = {
  getCources,
  getCourceById,
  addCource,
  updateCource,
  deleteCource,
};
