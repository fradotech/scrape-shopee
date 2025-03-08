const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");

const host = process.env.HOST;

// Disabled due to low SR. Please use non-API URLs

/*======================= Web Unlocker Proxy =======================*/
const webUnlockerAgent = new HttpsProxyAgent(
  process.env.WEB_UNLOCKER_PROXY_URL
);
webUnlockerAgent.options.rejectUnauthorized = false;

const dummyUrl = {
  search: "/search?keyword=shirt",
  detail502:
    "/Long-Cargo-pants-jeans-Celana-cargo-jeans-loose-fit-Reguler-Standard-Black-Sandwash-i.221882027.24266697670",
  account: "/api/v4/account/basic/get_account_info",
  mrScraper:
    "/api/v4/pdp/get_pc?item_id=4420309814&shop_id=10115139&tz_offset_minutes=420&detail_level=0&",
};

async function scrapeWithBrightdata(req, res, authCookie) {
  try {
    req.originalUrl =
      req.originalUrl === "/" ? dummyUrl.search : req.originalUrl;

    const url = `${host}${dummyUrl.mrScraper}`;

    console.log(`Requesting: ${url}`);

    const response = await axios.get(url, {
      httpsAgent: webUnlockerAgent,
      headers: {
        Cookie: authCookie,
        Referer: "https://shopee.tw/",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36",
      },
    });

    if (typeof response.data === "string" && process.env.SCRIPT_PRELOAD) {
      response.data = response.data.replace(
        new RegExp(process.env.SCRIPT_PRELOAD, "g"),
        ""
      );
    }

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error: ${error.message}`);
  }
}

module.exports = { scrapeWithBrightdata };
