const express=require("express")
const app=express();
const port=process.env.PORT || 5000;
const {dbConnection}=require("./dbConnection/dbConnection")
const {videoRouter}=require("./routes/videos")
app.use(express.json()) //to parse JSON-body
dbConnection() //running connection

app.use("/videos",videoRouter)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,(req,res)=>{
    console.log(`Successfully connected on ${port}`)
})
