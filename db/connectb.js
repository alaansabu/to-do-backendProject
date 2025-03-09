const mongoose = require("mongoose");

const CONNECTION_STRING =
  "mongodb+srv://admin:admin@alancluster.rtrlz.mongodb.net/to-do-backend?retryWrites=true&w=majority";  // ✅ Correct format
  mongoose
  .connect(CONNECTION_STRING)
  .then((conn) => {
    console.log(`✅ CONNECTED TO THE DB: ${conn.connection.name}`);
    console.log(`📡 DB HOST: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error("❌ COULD NOT CONNECT TO DB:", err);
  });
  