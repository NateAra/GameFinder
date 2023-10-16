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
    const { genres, platforms, ordering, search } = req.query;

    const sanitizedGenres = sanitizeInput(genres);
    const sanitizedPlatforms = sanitizeInput(platforms);
    const sanitizedOrdering = sanitizeInput(ordering);
    const sanitizedSearch = sanitizeInput(search);

    let url = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`;
    if (sanitizedGenres) {
      url += `&genres=${sanitizedGenres}`;
    }
    if (sanitizedPlatforms) {
      url += `&platforms=${sanitizedPlatforms}`;
    }
    if (sanitizedOrdering) {
      url += `&ordering=${sanitizedOrdering}`;
    }
    if (sanitizedSearch) {
      url += `&search=${sanitizedSearch}`;
    }

    const response = await axios.get(url);
    const sanitizedResponse = sanitizeResponseData(response.data)
    res.status(200).json(sanitizedResponse);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch games data" });
  }
});

function sanitizeInput(input) {
  const sanitized = input ? input.replace(/[^a-zA-Z0-9_-]/g, "") : null;
  return sanitized;
}

function sanitizeResponseData(data) {
  if (data.next) {
    data.next = sanitizeUrl(data.next);
  }
  return data;
}

function sanitizeUrl(url) {
  return url.replace(/key=[^&]*&?/, "");
}

app.listen(PORT, () => {
  console.log(`API is listening on Port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

module.exports = app;