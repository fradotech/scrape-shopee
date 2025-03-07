require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");

const app = express();
const PORT = process.env.PORT || 3001;

const proxyUrl = process.env.PROXY_URL;
const targetUrl = process.env.TARGET_URL;
const proxyUsername = process.env.PROXY_USERNAME;
const proxyPassword = process.env.PROXY_PASSWORD;

const agent = new HttpsProxyAgent(proxyUrl);
agent.options.rejectUnauthorized = false;

const credentials = Buffer.from(`${proxyUsername}:${proxyPassword}`).toString();
const proxyAuthHeader = `Basic ${credentials}`;

const dummyUrl = {
  search: "search?keyword=t-shirt",
  scriptAutoFetch:
    "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/webpack-runtime.6fd73aa8336fa037.js",
  detail502:
    "厚磅短t客製化-重磅棉t訂製印字-印製Logo-不激凸-寬版工裝短t-厚磅素t客製印圖落肩t恤-i.19880850.23026314570",
  detail:
    "",
};

app.get("/:path", async (req, res) => {
  try {
    const url = `${targetUrl}/${req.params.path}`;

    const response = await axios.get(url, {
      httpsAgent: agent,
      headers: {
        "Proxy-Authorization": proxyAuthHeader,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    });

    console.log(
      "\n\n================================================================="
    );
    console.log(response.data);
    console.log(
      "\n\n================================================================="
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(PORT, () =>
  console.info(`Server running at http://localhost:${PORT}`)
);
