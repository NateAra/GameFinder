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

const cache = {};
const cacheTTL = 60 * 60 * 1000; // 1 hour, Time to live

app.get("/:type", async (req, res) => {
  try {
    const type = req.params.type;

    if (type !== "games" && type !== "genres") {
      return res.status(400).json({ error: "Invalid type parameter" });
    }

    const now = Date.now();
    
    if (cache[type] && (now - cache[type].timestamp < cacheTTL)) {
      return res.json(cache[type].data);
    }

    const response = await axios.get(
      `https://api.rawg.io/api/${type}?key=${process.env.REACT_APP_API_KEY}`
    );
    
    // Sanitize the response data before sending it to the client
    const sanitizedData = sanitizeResponseData(response.data);
    
    cache[type] = {
      data: sanitizedData,
      timestamp: now
    };
    
    res.json(sanitizedData);

  } catch (error) {
    // Handle error
    res.status(500).json({ error: "Failed to fetch data from the external API" });
  }
});

function sanitizeResponseData(data) {
  // Remove sensitive information from the response data
  if (data.next) {
    data.next = sanitizeUrl(data.next);
  }
  // Perform other sanitization as needed
  return data;
}

function sanitizeUrl(url) {
  // Remove the API key from the URL
  return url.replace(/key=[^&]*&?/, "");
}


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
