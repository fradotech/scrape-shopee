const https = require("https");

class Payload {
  constructor(actor, input) {
    this.actor = actor;
    this.input = input;
  }
}

async function scrapelessRequest(expressRes, reqUrl) {
  const host = "api.scrapeless.com";
  const url = `https://${host}/api/v1/scraper/request`;
  const token =
    "sk_PvZaSpnIxDJ5j1TMHy0q9ea9OgwSig8p3pIeycassQwwnYDkoSSyDMMiTdeHZvFf";

  const inputData = {
    action: "shopee.product",
    url: reqUrl,
  };

  console.log("Requesting Scraper API with input data:", inputData);

  const payload = new Payload("scraper.shopee", inputData);
  const jsonPayload = JSON.stringify(payload);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-token": token,
    },
  };

  const req = https.request(url, options, (res) => {
    let body = "";

    res.on("data", (chunk) => {
      body += chunk;
    });

    res.on("end", () => {
      console.log("Response of first request:", body);

      const response = JSON.parse(body);
      if (response.taskId) {
        checkTaskResult(response.taskId, token, expressRes);
      } else {
        console.log(
          "============================== Result ==============================\n",
          response
        );
        expressRes.send(response);
      }
    });
  });

  req.on("error", (error) => {
    console.error("Error:", error);
  });

  req.write(jsonPayload);
  req.end();
}

function checkTaskResult(taskId, token, expressRes) {
  console.log(`Check result for taskId: ${taskId}`);

  const host = "api.scrapeless.com";
  const url = `https://${host}/api/v1/scraper/result/${taskId}`;

  const options = {
    method: "GET",
    headers: {
      "x-api-token": token,
    },
  };

  const req = https.request(url, options, (res) => {
    let body = "";

    res.on("data", (chunk) => {
      body += chunk;
    });

    res.on("end", () => {
      try {
        const response = JSON.parse(body);
        console.log("Task check response:", response);

        if (response.state === "pending" || response.state === "processing") {
          console.log(
            `Task ${taskId} is still ${response.state}... checking again in 3s`
          );
          setTimeout(() => checkTaskResult(taskId, token, expressRes), 3000);
        } else if (response.status === "completed" || response.result) {
          console.log(
            "============================== Result ==============================\n",
            response.result
          );
          expressRes.json(response.result || response);
        } else if (response.error) {
          console.error(`Task ${taskId} failed with error:`, response.error);
          expressRes.status(500).json({
            error: "Task failed",
            taskId: taskId,
            details: response.error,
          });
        } else {
          console.error("Error or unknown task state:", response);
          expressRes.status(500).json({
            error: "Task failed or returned unknown state",
            taskId: taskId,
            details: response,
          });
        }
      } catch (error) {
        console.error("Error parsing response:", error);
        expressRes.status(500).json({ error: "Failed to parse response" });
      }
    });
  });

  req.on("error", (error) => {
    console.error("Error check task:", error);
    expressRes.status(500).json({ error: "Failed to check task status" });
  });

  req.end();
}

// Add this function to your scrapeless.js file

async function getAllTasks(expressRes) {
  const host = "api.scrapeless.com";
  const url = `https://${host}/api/v1/scraper/tasks`;
  const token =
    "sk_PvZaSpnIxDJ5j1TMHy0q9ea9OgwSig8p3pIeycassQwwnYDkoSSyDMMiTdeHZvFf";

  const options = {
    method: "GET",
    headers: {
      "x-api-token": token,
    },
  };

  const req = https.request(url, options, (res) => {
    let body = "";

    res.on("data", (chunk) => {
      body += chunk;
    });

    res.on("end", () => {
      try {
        const response = JSON.parse(body);
        console.log("All tasks response:", response);
        expressRes.json(response);
      } catch (error) {
        console.error("Error parsing tasks response:", error);
        expressRes
          .status(500)
          .json({ error: "Failed to parse tasks response" });
      }
    });
  });

  req.on("error", (error) => {
    console.error("Error getting tasks:", error);
    expressRes.status(500).json({ error: "Failed to get tasks list" });
  });

  req.end();
}

// Don't forget to update your module exports
module.exports = { scrapelessRequest, getAllTasks };
