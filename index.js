require("dotenv").config();
const express = require("express");
const { ScrapelessAPI } = require("./scrapeless");
const { products } = require("./products");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

const scrapeless = new ScrapelessAPI();

app.post("/", async (req, res) => {
  console.log(
    `\n\n[${new Date().toISOString()}] Request from client:`,
    req.ip,
    req.body
  );

  try {
    if (!req.body.url) {
      return res.status(400).json({ error: "URL is required" });
    }

    let apiUrl;
    try {
      apiUrl = formatUrl(req.body.url);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    console.log(`Original URL: ${req.body.url}`);
    console.log(`Formatted API URL: ${apiUrl}`);

    const result = await scrapeless.scrapeProduct(apiUrl);
    res.json(result);

    console.log(
      `\n\n[${new Date().toISOString()}] Response from client:`,
      req.ip,
      req.body
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  const host = req.get("host");
  const protocol = req.protocol;
  const baseUrl = `${protocol}://${host}`;

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Shopee API Scraper</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <h1>Shopee API Scraper</h1>
      
      <p>Convert Shopee product URLs to structured data</p>
      
      <h3>Endpoint: POST ${baseUrl}</h3>
      
      <h3>Example (curl):</h3>
      <pre>curl --location '${baseUrl}' \\
      --header 'Content-Type: application/json' \\
      --data '{
          "url": "https://shopee.tw/---i.338037348.24636536148"
      }'</pre>
      
      <h3>Supported URL formats:</h3>
      <ul>
        <li>Product URL: https://shopee.tw/---i.{shop_id}.{item_id}</li>
        <li>API URL: https://shopee.tw/api/v4/pdp/get_pc?item_id={item_id}&shop_id={shop_id}&tz_offset_minutes=420&detail_level=0&</li>
      </ul>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.info(`Server: http://localhost:${PORT}`));

const formatUrl = (url) => {
  if (url.includes("/api/v4/pdp/get_pc")) {
    return url;
  }

  const regex = /i\.(\d+)\.(\d+)/;
  const match = url.match(regex);

  if (!match || match.length < 3) {
    throw new Error(
      "Invalid Shopee product URL format. Expected format: https://shopee.tw/something-i.{shop_id}.{item_id}"
    );
  }

  const shopId = match[1];
  const itemId = match[2];

  return `https://shopee.tw/api/v4/pdp/get_pc?item_id=${itemId}&shop_id=${shopId}&tz_offset_minutes=420&detail_level=0&`;
};
