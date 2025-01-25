const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require('./routes/users');
const quizRoutes = require('./routes/quizzes');
const { use } = require("passport");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
let server;

//Middleware configuration
//Middleware is a function that executes when a request comes in and before it reaches to the route handler

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
app.use(bodyParser.json({ limit: '20mb' }));

app.use('/api/users/', userRoutes);
app.use('/api/quizzes/', quizRoutes);

require("./database");

server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});