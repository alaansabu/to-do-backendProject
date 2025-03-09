require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const tasks = require("./routes/tasks")


//middleware




app.use(express.json());



//routes
app.get("/",(req,res) =>{
    res.send("Hello word")
})
app.use("/api/v1/tasks/", tasks);





app.listen(PORT,()=>{

console.log(`Server running in port ${PORT}🚀`);


})