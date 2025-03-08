const { chromium } = require("playwright-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

chromium.use(StealthPlugin());

const proxies = [
  {
    server: "http://brd.superproxy.io:33335",
    username: "brd-customer-hl_64c8f60b-zone-web_unlocker1",
    password: "42f2zztou1zt",
  },
  {
    server: "http://brd.superproxy.io:33335",
    username: "brd-customer-hl_64c8f60b-zone-web_unlocker2",
    password: "s4d75qgb5kme",
  },
];

function getRandomProxy() {
  return proxies[Math.floor(Math.random() * proxies.length)];
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

const test = async () => {
  const browser = await chromium.launch({
    headless: false,
    proxy: getRandomProxy(),
    timeout: 600000,
  });

  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPad; CPU OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 MicroMessenger/7.0.20",
    "Mozilla/5.0 (Linux; Android 12; SM-G9980) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36 Line/12.11.1",
  ];

  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    userAgent: userAgents[Math.floor(Math.random() * userAgents.length)],
    locale: "zh-TW",
  });

  const page = await context.newPage();

  page.setDefaultNavigationTimeout(600000);

  const searchTerms = [
    "thermos bottle",
    "travel mug",
    "insulated cup",
    "stainless steel tumbler",
    "vacuum flask",
    "water bottle",
    "yeti cup",
    "coffee mug",
    "cold cup",
    "thermal bottle",
  ];

  page.on("response", async (response) => {
    const status = response.status();
    if (status >= 400) {
      console.log(`Response error: ${status} for ${response.url()}`);
    }
  });

  const randomSearchTerm =
    searchTerms[Math.floor(Math.random() * searchTerms.length)];

  await page.goto(`https://shopee.tw/search?keyword=${randomSearchTerm}`, {
    waitUntil: "domcontentloaded",
  });

  /* =========== Avoid bot detection =========== */
  // More realistic browsing behavior
  await page.mouse.move(Math.random() * 500, Math.random() * 500, {
    steps: 20,
  });
  await delay(1000 + Math.random() * 1000);

  // Realistic scrolling pattern
  for (let i = 0; i < 3; i++) {
    await page.mouse.wheel(0, Math.floor(100 + Math.random() * 200));
    await delay(1000 + Math.random() * 1500);
  }

  // Hover over some products before clicking
  const items = await page.$$(".shopee-search-item-result__item");
  if (items.length > 0) {
    const randomIndexes = [
      Math.floor(Math.random() * items.length),
      Math.floor(Math.random() * items.length),
    ];

    for (const idx of randomIndexes) {
      await items[idx].hover();
      await delay(1000 + Math.random() * 2000);
    }
  }

  /* =========== Go to detail page =========== */
  await page.waitForSelector(".shopee-search-item-result__item a");
  const productLinks = await page.$$eval(
    ".shopee-search-item-result__item a",
    (links) => links.map((link) => link.href)
  );

  if (productLinks.length < 0) console.log("Failed find product!");

  console.log("Product links: ", productLinks);
  console.log(
    "Go to detail page: ",
    productLinks[Math.floor(Math.random() * productLinks.length)]
  );

  await page.goto(productLinks[0], { waitUntil: "networkidle" });
  await page.waitForLoadState("networkidle");

  const htmlContent = await page.content();

  /* =========== Result as string =========== */
  console.log("\n\nproduct-detail\n\n", htmlContent, "\n\n");
  console.log("Success get detail product");

  await browser.pause();
};

test();
