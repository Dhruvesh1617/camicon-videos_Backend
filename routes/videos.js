const express=require("express");
const {VideoData}=require("../models/video-lib_data.model");
const videoRouter=express.Router();

videoRouter.route("/")
.get(async (req,res)=>{
    try
    {
    const videos=await VideoData.find({});
    res.status(200).json({success:true,videos})
    }
    catch(err)
    {
      res.status(500).json({success:false,message:err})  
    }


})

.post(async (req,res)=>
{
try
{
const newVideo=req.body;
const NewVideo=new VideoData(newVideo);
const savedVideo=await NewVideo.save();
res.status(200).json({success:true,savedVideo})
}
catch(error)
{
    res.status(500).json({success:false,message:error})
}
})

module.exports={videoRouter}