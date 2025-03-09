require("dotenv").config();
const express = require("express");
const { scrapelessRequest, getAllTasks } = require("./scrapeless");
const { products } = require("./products");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

const dummyUrl = {
  search: "search?keyword=shirt",
  mrScraper:
    "api/v4/pdp/get_pc?item_id=4420309814&shop_id=10115139&tz_offset_minutes=420&detail_level=0&",
};

app.post("/", async (req, res) => {
  if (!req.body?.url) {
    return res.status(400).json({ message: "url is required" });
  }

  scrapelessRequest(res, req.body.url);
});

app.get("/tasks", async (req, res) => {
  getAllTasks(res);
});

app.listen(PORT, () => console.info(`Server: http://localhost:${PORT}`));

validate = (req, res, next) => {
  if (!req.body.url) {
    return res.status(400).json({ message: "URL is required" });
  }
  next();
};
