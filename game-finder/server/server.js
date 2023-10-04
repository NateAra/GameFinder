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

    let url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;
    if (genre) {
      url += `&genres=${genre}`;
    }
    if (platform) {
      url += `&platforms=${platform}`;
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch games data" });
  }
});

app.get("/genres", async (req, res) => {
  try {
    const url = `https://api.rawg.io/api/genres?key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch genres data" });
  }
});

app.get("/platforms", async (req, res) => {
  try {
    const url = `https://api.rawg.io/api/platforms?key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch platforms data" });
  }
});

app.get("/platforms/lists/parents", async (req, res) => {
  try {
    const url = `https://api.rawg.io/api/platforms/lists/parents?key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch parent platforms data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
