const pool = require("../config/db");
const courceQuires = require("../queries/cource");
const {
  getAllCources,
  getcourceById,
  addCourc,
  iscourceExisitById,
  UpdateCource,
  deleteCourceByid,
} = require("../reposetores/courses");
const ErrorResponse = require("../utils/errorResponse");

// getall cources
const getCources = async (req, res, next) => {
  try {
    const courses = await getAllCources();
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }

  // res.status(200).json({status:true,data:[{id:1,cource:"Node js"},{id:2,cource:"simple js"}]})
};

// get single cource
const getCource = async (req, res, next) => {
  const courceId = req.params.id;

  try {
    const cource = await getcourceById(courceId);
    res.status(200).json(cource);
  } catch (error) {
    next(error);
  }

  // res.status(200).json({status:true,data:{id:req.params.id,cource:"front end"}})
};

// add cources
const addCource = async (req, res, next) => {
  const { title, duration } = req.body;

  try {
    await addCourc(title, duration);
    res.status(201).json({ message: "cources added sucessfully" });
  } catch (error) {
    next(error);
  }

  //   res.status(200).json({ status: true, message: "cource added sucessfully" });
};

const updateCource = async (req, res, next) => {
  const { title, duration } = req.body;
  const courceId = req.params.id;
  const iscourceExisit = await iscourceExisitById(courceId);
  try {
    if (iscourceExisit) {
      await UpdateCource(title, duration, courceId);
      res.status(200).json({ message: "updated the recorde" });
    } else {
      next(new ErrorResponse("Cource not exsist..", 404));
    }
  } catch (error) {
    next(error);
  }

  //   res
  //     .status(200)
  //     .json({ status: true, message: `updated cource id ${req.params.id}` });
};

const deleteCource = async (req, res, next) => {
  const courceId = req.params.id;
  const iscourceExisit = await iscourceExisitById(courceId);
  if (iscourceExisit) {
    deleteCourceByid(courceId).then(
      () => {
        res.status(200).json({ message: "deleted sucessfully" });
      },
      (err) => {
        res.status(500).json({ message: err.message });
      }
    );
  } else {
    res.status(404).json({ message: "Cource not exsist.." });
  }

  //   res
  //     .status(200)
  //     .json({ status: true, message: `deleted cource id ${req.params.id}` });
};

module.exports = {
  getCource,
  getCources,
  deleteCource,
  updateCource,
  addCource,
};
