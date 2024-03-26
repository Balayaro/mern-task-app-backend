const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/connectDB");
//const Task = require("./model/taskModel");
//const taskController = require("./controllers/taskController");
const TaskRoute = require("./routes/taskRoute");
const PORT = process.env.PORT || 5000;
const app = express();

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
  {
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"]
  }
));

//ROUTES

app.use("/api/tasks", TaskRoute);
//CONNECT DATABASE

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
