const axios = require("axios");

const openWeatherMap = require("../../config/openWeatherMap");

const API_KEY = openWeatherMap.API_KEY
  ? openWeatherMap.API_KEY
  : "fd192102f4273560130f08c5cf75a68a";

module.exports = {
  async SearchByCity(city) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
      );

      return Number((response.data.main.temp - 273.15).toFixed(2));
    } catch (error) {
      return { error };
    }
  },

  async SearchByCoordinates(lat, lon) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      return Number((response.data.main.temp - 273.15).toFixed(2));
    } catch (error) {
      return { error };
    }
  },
};
