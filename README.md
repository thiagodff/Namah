<h1 align="center">
<br>
  <img src="frontend/src/assets/logo.svg" alt="namah" width="120">
<br>
<br>
Namah
</h1>

<p align="center">UI clone responsive using Vuejs and a backend with return a playlist based on local temperature</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div>
  <img src="./.github/namah-full.gif" alt="demo-web" height="425">
</div>

<hr />

## Features

This app features all the latest tools and practices in mobile development!

- ✅ **Vue Js** — A progressive framework for building user interfaces
- 💹 **Node Js** — Designed to build scalable network applications

## Getting started

1. Clone this repo using `git clone https://github.com/thiagodff/Namah`
2. Move yourself to the appropriate directory: `cd Namah`<br />

### Getting started with the [frontend](https://github.com/thiagodff/Namah/tree/master/frontend)

You can access the site here: [namah.netlify.app](namah.netlify.app/)

1. Move yourself to the frontend folder: `cd frontend`<br />
2. Run `yarn` to install dependencies<br />
3. Run `yarn serve` to run the application

### Getting started with the [backend](https://github.com/thiagodff/Namah/tree/master/backend)

1. Move yourself to the backend folder: `cd backend`<br />
2. Copy the .env.example `cp .env.example .env`<br>
3. Setup [spotify token](https://developer.spotify.com/console/get-playlist/) and [open weather map api key](https://openweathermap.org/api)<br>
4. Run `docker-compose up` to setup all your database and start services(be sure to have docker and docker-compose installed)<br>

### Routes

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Playlist%20Based%20on%20Temperature&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fthiagodff%2FNamah%2Fmaster%2F.github%2FInsomnia.json)

| Method | Request    | Body                            |
| :----- | :--------- | :------------------------------ |
| POST   | `/weather` | `{ city, latitude, longitude }` |

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

---

<p align="center">Made with ❤️ by <strong>Thiago</strong> :wave: <a href="https://www.linkedin.com/in/thiago-fernandes-dornelles">See my linkedin!</a></p>
