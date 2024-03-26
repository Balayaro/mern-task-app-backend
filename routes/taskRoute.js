const express = require("express");
const tourController = require("../controllers/taskController")

const Router = express.Router();

Router
    .route("/")
    .get(tourController.getTasks)
    .post(tourController.createTask)


Router
    .route("/:id")
    .get(tourController.getTask)
    .delete(tourController.deleteTask)
    .put(tourController.updateTask)

module.exports = Router;