const mongoose = require("mongoose");

const CONNECTION_STRING =
  "mongodb+srv://admin:admin@alancluster.rtrlz.mongodb.net/to-do-backend?retryWrites=true&w=majority";  // ✅ Correct format
  
  
  const connectDb = (url)=>{
    console.log("connected to databse✅");
  return mongoose.connect(CONNECTION_STRING)
  
    
  }
  module.exports = connectDb