const axios = require("axios");

const Authorization =
  "Bearer BQC3o9VepkG89F32ZYz2zz765leIbGmGr_NbUagYNORG93gywwmBIkAQWjAA5HZZ2dpLp1IV3_ZHMNLFjVkiJbQcXoGckct7l88MF0cH990VUS4jGWqFETBYeISN4sBzQ3galgg56PjzxXcCv_7ZbeAyL4tpwr6MhoXS2";

const IDRock = "37i9dQZF1DWXRqgorJj26U";
const IDParty = "37i9dQZF1DWXRqgorJj26U";
const IDPop = "37i9dQZF1DWXRqgorJj26U";
const IDClassic = "37i9dQZF1DWXRqgorJj26U";

module.exports = {
  async FindBestPlaylist(temperature) {
    const headers = {
      Authorization,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let playlistID = "";

    if (temperature > 30) {
      playlistID = IDParty;
    } else if (temperature >= 15) {
      playlistID = IDPop;
    } else if (temperature >= 10) {
      playlistID = IDRock;
    } else {
      playlistID = IDClassic;
    }

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistID}?market=BR&limit=10`,
        { headers }
      );
    } catch (error) {
      return error;
    }

    const playlist = response.data.tracks.items.map(
      (item) => `${item.track.name}`
    );

    return playlist;
  },
};
