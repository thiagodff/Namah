const SearchWeatherService = require("../services/SearchWeatherService");
const PlaylistService = require("../services/PlaylistService");
const axios = require("axios");

module.exports = {
  async create(req, res) {
    const { city, latitude, longitude } = req.body;

    let temperature;

    if (city) {
      temperature = await SearchWeatherService.SearchByCity(city);
    } else if (latitude && longitude) {
      temperature = await SearchWeatherService.SearchByCoordinates(
        latitude,
        longitude
      );
    } else {
      return res.status(400).json({ message: "Plase, revise your data input" });
    }

    const playlist = await PlaylistService.FindBestPlaylist(temperature);

    return res.json({ temperature, playlist });
  },
};
