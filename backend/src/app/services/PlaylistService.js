const axios = require("axios");
const spotify = require("../../config/spotify");

const Authorization = `Bearer ${spotify.token}`;

module.exports = {
  async FindBestPlaylist(temperature) {
    const headers = {
      Authorization,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let playlistID = "";

    if (temperature > 30) {
      playlistID = spotify.playlist.IDParty;
    } else if (temperature >= 15) {
      playlistID = spotify.playlist.IDPop;
    } else if (temperature >= 10) {
      playlistID = spotify.playlist.IDRock;
    } else {
      playlistID = spotify.playlist.IDClassic;
    }

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistID}?market=BR`,
        { headers }
      );

      const playlist = response.data.tracks.items.map(
        (item) => `${item.track.name}`
      );

      return playlist;
    } catch (error) {
      return error;
    }
  },
};
