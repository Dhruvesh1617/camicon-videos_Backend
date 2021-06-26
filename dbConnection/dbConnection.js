const mongoose=require("mongoose")
const uri="mongodb+srv://DhruveshShetty:Dexter%40162O17@neog-cluster.wcltu.mongodb.net/videoDB";
async function dbConnection()
{
    await mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("Successfully connected to DB")).catch((err)=>console.log(err))
}
module.exports={dbConnection}