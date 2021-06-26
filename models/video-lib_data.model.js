const mongoose=require("mongoose");
const {Schema}=mongoose;

const VideoSchema=new Schema({
    name:{type:String,required:true},
    imageUrl:{type:String,required:true},
    videoUrl:{type:String,required:true},
    duration:{type:String,required:true},
    details:{type:String,required:true},
})

const VideoData=mongoose.model("VideoData",VideoSchema);

module.exports={VideoData}