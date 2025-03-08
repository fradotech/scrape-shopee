const axios = require("axios");

const host = process.env.HOST;

// Your current plan does not allow you to use our premium proxies. Please upgrade your plan to gain access to our Premium and Ultra Premium pools. More information can be found in our documentation(https://www.docs.scraperapi.com/making-requests/customizing-requests/premium-residential-mobile-proxy-pools).")

async function scrapeWithScraperAPI(req, res, authCookie) {
  const SCRAPER_API_KEY = "3879265d986002abdb369dc15bd1f0fd";
  const targetUrl = `${host}/api/v4/account/basic/get_account_info`;

  // Encode the target URL
  const scraperApiUrl = `http://api.scraperapi.com/?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(
    targetUrl
  )}&ultra_premium=true`;

  try {
    console.log(`Requesting: ${targetUrl}`);

    const response = await axios.get(scraperApiUrl, {
      headers: {
        Cookie: authCookie,
        Referer: "https://shopee.tw/",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36",
      },
    });
    console.log("\n\n", response.data, "\n\n");
    res.send(response.data);
  } catch (error) {
    console.error("ScraperAPI Error:", error);
    console.error("ScraperAPI Error:", error.message);
  }
}

module.exports = { scrapeWithScraperAPI };
