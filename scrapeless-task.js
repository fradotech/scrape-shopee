const https = require("https");

class Payload {
  constructor(actor, input) {
    this.actor = actor;
    this.input = input;
  }
}

function sendRequest() {
  const host = "api.scrapeless.com";
  const url = `https://${host}/api/v1/scraper/request`;
  const token =
    "sk_PvZaSpnIxDJ5j1TMHy0q9ea9OgwSig8p3pIeycassQwwnYDkoSSyDMMiTdeHZvFf";

  const inputData = {
    action: "shopee.product",
    url: "https://shopee.tw/api/v4/pdp/get_pc?item_id=4420309814&shop_id=10115139&tz_offset_minutes=420&detail_level=0&",
  };

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
      console.log("Respons permintaan awal:", body);

      // Parse respons untuk mendapatkan taskId
      const response = JSON.parse(body);
      if (response.taskId) {
        // Jika taskId ada, periksa hasil dengan taskId
        checkTaskResult(response.taskId, token);
      }
    });
  });

  req.on("error", (error) => {
    console.error("Error:", error);
  });

  req.write(jsonPayload);
  req.end();
}

function checkTaskResult(taskId, token) {
  console.log(`Memeriksa hasil untuk taskId: ${taskId}`);

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
      const response = JSON.parse(body);

      if (response.status === "pending" || response.status === "processing") {
        // Jika tugas masih dalam proses, periksa lagi setelah beberapa detik
        console.log("Tugas masih diproses, memeriksa kembali dalam 3 detik...");
        setTimeout(() => checkTaskResult(taskId, token), 3000);
      } else if (response.status === "completed") {
        // Jika tugas selesai, tampilkan hasil
        console.log("Hasil scraping:", response.result);
        return response.result;
      } else {
        // Jika ada error
        console.error("Error dalam tugas:", response);
      }
    });
  });

  req.on("error", (error) => {
    console.error("Error saat memeriksa hasil:", error);
  });

  req.end();
}

sendRequest();
