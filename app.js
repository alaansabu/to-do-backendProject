require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const tasks = require("./routes/tasks")
const connectdb = require("./db/connectb")
const  notFound = require("./middleware/notFound")
const cors =  require("cors")
const path = require('path')

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')))

//middleware




app.use(express.json());
app.use(notFound)
app.use(cors())

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