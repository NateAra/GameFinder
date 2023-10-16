const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/games", async (req, res) => {
  try {
    const genre = req.query.genres;
    const platform = req.query.platforms;
    const sortOrder = req.query.ordering;
    const searchs = req.query.search;

    let url = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`;
    if (genre) {
      url += `&genres=${genre}`;
    }
    if (platform) {
      url += `&platforms=${platform}`;
    }
    if (sortOrder) {
      url += `&ordering=${sortOrder}`;
    }
    if (searchs) {
      url += `&search=${searchs}`;
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch games data" });
  }
});

app.listen(PORT, () => {
  console.log(`API is listening on Port ${PORT}`);
});

module.exports = app