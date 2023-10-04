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
    const type = req.params[0];
    const genre = req.query.genres;

    const now = Date.now();
    const cacheKey = genre ? `${type}_${genre}` : type;

    if (cache[cacheKey] && now - cache[cacheKey].timestamp < cacheTTL) {
      return res.json(cache[cacheKey].data);
    }

    const type_mappings = {
      games: "games",
      genres: "genres",
      "platforms/lists/parents": "platforms/lists/parents",
    };

    const api_path = type_mappings[type];
    if (!api_path) {
      return res.status(400).json({ error: "Invalid type parameter" });
    }

    let url = `https://api.rawg.io/api/${api_path}?key=${process.env.REACT_APP_API_KEY}`;

    if (type === "games" && genre) {
      url += `&genres=${genre}`;
    }

    const response = await axios.get(url);

    const sanitizedData = sanitizeResponseData(response.data);

    cache[cacheKey] = {
      data: sanitizedData,
      timestamp: now,
    };

    res.json(sanitizedData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch data from the external API" });
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
  return data;
}

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
