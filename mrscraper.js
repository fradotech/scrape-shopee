const axios = require("axios");

const MRSCRAPER_API_TOKEN =
  "1921|wJPT0141bM5zJEnPK2GYGJD1CiMmgYRcBSdSay6K3e062a62";
const MRSCRAPER_URL = "https://scraper.mrscraper.com/api/shopee/sync";

async function mrScraper(req, res) {
  const shopeeUrl =
    "https://shopee.tw/api/v4/pdp/get_pc?item_id=4420309814&shop_id=10115139&tz_offset_minutes=420&detail_level=0&";

  try {
    console.log(`Requesting via MrScraper: ${shopeeUrl}`);

    const response = await axios.post(
      MRSCRAPER_URL,
      {
        url: shopeeUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MRSCRAPER_API_TOKEN}`,
        },
      }
    );

    console.log("\n\n", response.data, "\n\n");
    res.send(response.data);
  } catch (error) {
    console.error("MrScraper API Error:", error);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response:", error.response.data);
    }
  }
}

module.exports = { mrScraper };
