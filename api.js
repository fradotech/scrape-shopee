require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");

const app = express();

const proxyUser = "brd-customer-hl_ac974830-zone-residential_proxy1";
const proxyPass = "2w6wvcmriy5v";
const proxyHost = "brd.superproxy.io";
const proxyPort = "33335";

const proxyUrl = `http://${proxyUser}:${proxyPass}@${proxyHost}:${proxyPort}`;
const agent = new HttpsProxyAgent(proxyUrl);

// Endpoint scraping
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://shopee.tw/api/v4/account/basic/get_account_info",
      { httpsAgent: agent }
    );

    console.log("\n\n", response.data, "\n\n");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
