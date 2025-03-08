const { chromium } = require("playwright");
const fs = require("fs");

const proxy = {
  server: "http://brd.superproxy.io:33335",
  username: "brd-customer-hl_155f2a69-zone-web_unlocker2",
  password: "hztios8y76y4",
};

// Add this function to simulate human behavior
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

const test = async () => {
  const browser = await chromium.launch({
    headless: false,
    proxy: {
      server: proxy.server,
      username: proxy.username,
      password: proxy.password,
    },
  });

  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    locale: "zh-TW",
  });

  const page = await context.newPage();

  page.setDefaultNavigationTimeout(600000);

  await page.goto("https://shopee.tw/search?keyword=Tkk-800ml-1200ml-SUS316", {
    waitUntil: "networkidle",
  });

  /* =========== Avoid bot detection =========== */
  await page.mouse.move(100, 100);
  await delay(500);
  await page.mouse.move(300, 400, { steps: 10 });

  await page.mouse.wheel(0, 300);
  await delay(2000);

  /* =========== Go to detail page =========== */
  await page.waitForSelector(".shopee-search-item-result__item a");
  const productLinks = await page.$$eval(
    ".shopee-search-item-result__item a",
    (links) => links.map((link) => link.href)
  );

  if (productLinks.length < 0) console.log("Failed find product!");

  await page.goto(productLinks[0], { waitUntil: "networkidle" });
  await page.waitForLoadState("networkidle");

  const htmlContent = await page.content();

  /* =========== Save to file =========== */
  fs.writeFileSync("product-detail.html", htmlContent);
  console.log("HTML saved to product-detail.html");

  console.log("Success get detail product");

  await browser.pause();
};

test();
