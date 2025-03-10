require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const tasks = require("./routes/tasks")
const connectdb = require("./db/connectb")

//middleware




app.use(express.json());



//routes
app.get("/",(req,res) =>{
    res.send("Hello word")
})
app.use("/api/v1/tasks/", tasks);



const start = async () =>{
try {
    await connectdb(process.env.MONGO_URI)
    app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}🚀`);
});
    
} catch (error) {
    console.log("Could not run server❌",error);
    
}

}

start()