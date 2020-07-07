const express = require("express");

const WeatherController = require("./app/controllers/WeatherController");

const routes = express.Router();

routes.post("/weather", WeatherController.create);

module.exports = routes;
