const express = require("express");

const WeatherController = require("./app/controller/WeatherController");

const routes = express.Router();

routes.post("/weather", WeatherController.create);

module.exports = routes;
