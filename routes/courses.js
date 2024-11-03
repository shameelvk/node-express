const express=require("express");
const route=express.Router();

const{
    getCource,getCources,deleteCource,updateCource,addCource
}=require("../controllers/courses")


route.route("/:id").get(getCource).put(updateCource).delete(deleteCource);
route.get("/",getCources);
route.post("/",addCource)


module.exports=route;