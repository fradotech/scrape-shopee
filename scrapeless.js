const axios = require("axios");

class ScrapelessAPI {
  constructor(apiToken, options = {}) {
    this.apiToken = apiToken || process.env.API_KEY;
    this.baseUrl = "https://api.scrapeless.com/api/v1";
    this.client = axios.create({
      baseURL: this.baseUrl,
      timeout: options.timeout || 30000,
      headers: {
        "Content-Type": "application/json",
        "x-api-token": this.apiToken,
      },
    });
    this.maxRetries = options.maxRetries || 10;
    this.pollingInterval = options.pollingInterval || 3000;
  }

  async scrapeProduct(url) {
    try {
      const payload = {
        actor: "scraper.shopee",
        input: {
          action: "shopee.product",
          url: url,
        },
      };

      console.log("Starting Shopee scraping task with URL:", url);
      const response = await this.client.post("/scraper/request", payload);

      if (response.data?.taskId) {
        const result = await this.pollTaskResult(response.data.taskId);
        return result;
      }

      return response.data;
    } catch (error) {
      this._handleError(error, "Failed to start scraping task");
    }
  }

  async pollTaskResult(taskId, attempt = 1) {
    try {
      console.log(
        `Checking task status [${attempt}/${this.maxRetries}] for task: ${taskId}`
      );

      const response = await this.client.get(`/scraper/result/${taskId}`);
      const data = response.data;

      if (data.state === "pending" || data.state === "processing") {
        if (attempt >= this.maxRetries) {
          throw new Error(
            `Task ${taskId} timed out after ${this.maxRetries} attempts`
          );
        }

        console.log(
          `Task ${taskId} is ${data.state}... checking again in ${
            this.pollingInterval / 1000
          }s`
        );
        await new Promise((resolve) =>
          setTimeout(resolve, this.pollingInterval)
        );
        return this.pollTaskResult(taskId, attempt + 1);
      }

      if (data.error) {
        throw new Error(`Task failed: ${JSON.stringify(data.error)}`);
      }

      return data.result || data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error(`Task ${taskId} not found`);
      }
      this._handleError(error, `Failed to check task ${taskId}`);
    }
  }

  async getTask(taskId) {
    try {
      const response = await this.client.get(`/scraper/result/${taskId}`);
      return response.data;
    } catch (error) {
      this._handleError(error, `Failed to get task ${taskId}`);
    }
  }

  _handleError(error, message) {
    console.error(error);
    if (error.response) {
      const errorData = error.response.data;
      throw new Error(
        `${message}: ${error.response.status} - ${
          typeof errorData === "object" ? JSON.stringify(errorData) : errorData
        }`
      );
    } else if (error.request) {
      throw new Error(`${message}: No response received from server`);
    } else {
      throw new Error(`${message}: ${error.message}`);
    }
  }
}

async function scrapelessRequest(expressRes, reqUrl) {
  const api = new ScrapelessAPI();

  try {
    const result = await api.scrapeProduct(reqUrl);
    expressRes.json(result);
  } catch (error) {
    console.error("Error in scrapelessRequest:", error.message);
    expressRes.status(500).json({
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
}

module.exports = {
  scrapelessRequest,
  ScrapelessAPI,
};
