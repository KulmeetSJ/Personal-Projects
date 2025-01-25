const mongoose = require("mongoose");
require("dotenv").config();

//This method returns us promise , so we use then and catch
mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("Connection failed");
    })