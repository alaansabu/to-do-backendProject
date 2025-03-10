const mongoose = require("mongoose");


  
  const connectDb = (url)=>{
    console.log("connected to databse✅");
  return mongoose.connect(url)
  
    
  }
  module.exports = connectDb