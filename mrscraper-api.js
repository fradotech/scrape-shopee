import fs from "fs";
import axios from "axios";
import pLimit from "p-limit";
import https from "https";

const httpsAgent = new https.Agent({ keepAlive: true, maxSockets: 600 });
axios.defaults.httpsAgent = httpsAgent;

const limit = pLimit(600);

const RESULTS_DIR = "results";
const FAILED_DIR = "failed";

[RESULTS_DIR, FAILED_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

class RequestError extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
    this.name = "RequestError";
  }
}

(async () => {
  try {
    const urls = JSON.parse(fs.readFileSync("api_urls.json", "utf-8"));
    console.log(`Total URLs to process: ${urls.length}`);

    const results = [];

    const postData = async (url, index) => {
      try {
        const response = await axios.post(
          "https://scraper.mrscraper.com/api/shopee/sync",
          { url },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer 1922|cKYoLW8SLlRRxOutl7JeWJG4GUwucqy5DTd1ccEc83fd642f",
            },
            timeout: 30 * 60 * 1000,
          }
        );

        results.push(response.data);
        const filePath = `${RESULTS_DIR}/${index + 1}.json`;
        fs.writeFileSync(filePath, JSON.stringify(response.data, null, 2));
        console.log(`Response saved for URL index ${index}: ${filePath}`);

        return response.data;
      } catch (error) {
        console.error(`Error for URL ${url} index ${index}: ${error.message}`);
        if (error.response) {
          console.error(`Status: ${error.response.status}`);
          console.error(`Response: ${JSON.stringify(error.response.data)}`);
          throw new RequestError("Request failed", {
            url,
            error: error.response.data,
          });
        }
        throw new RequestError("Request failed", { url, error });
      }
    };

    const requests = urls.map((url, index) =>
      limit(() => postData(url, index))
    );

    const responses = await Promise.allSettled(requests);

    const failedRequests = responses.filter((res) => res.status === "rejected");
    const successfulRequests = responses.filter(
      (res) => res.status === "fulfilled"
    );

    console.log("Summary:");
    console.log(`- Total requests: ${urls.length}`);
    console.log(`- Successful: ${successfulRequests.length}`);
    console.log(`- Failed: ${failedRequests.length}`);

    failedRequests.forEach((res, idx) => {
      const filePath = `${FAILED_DIR}/${idx + 1}.json`;
      if (res.reason instanceof RequestError) {
        console.error(`Failed request (index ${idx}):`, res.reason);
        fs.writeFileSync(filePath, JSON.stringify(res.reason.details, null, 2));
      }
    });

    console.log("Script completed successfully.");
  } catch (error) {
    console.error("An unexpected error occurred:", error.message);
  }
})();
