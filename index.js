require("dotenv").config();
const express = require("express");
const axios = require("axios");
// const { scrapeWithScraperAPI } = require("./scraperapi");
// const { scrapeWithBrightdata, scrapeProductDetail } = require("./brightdata");
const { mrScraper } = require("./mrscraper");

const app = express();
const PORT = process.env.PORT || 3001;

app.get("*", async (req, res) => {
  // scrapeWithScraperAPI(req, res, authCookie);
  // scrapeWithBrightdata(req, res, null);
  mrScraper(req, res, null);
});

app.listen(PORT, () =>
  console.info(`Server running at http://localhost:${PORT}`)
);
