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

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from RAWG API: ", error.message);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }

    res
      .status(500)
      .json({ error: "Failed to fetch data from the external API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
