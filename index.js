require("dotenv").config();
const express = require("express");
const axios = require("axios");
// const { scrapeWithScraperAPI } = require("./scraperapi");
const { scrapeWithBrightdata, scrapeProductDetail } = require("./brightdata");

const app = express();
const PORT = process.env.PORT || 3001;

const authCookie = `_gcl_au=1.1.156621029.1741352283; _med=affiliates; _QPWSDCXHZQA=3079ad50-462f-4b36-adba-efb4ed31784f; REC7iLP4Q=7cfd4645-13ba-433e-9ff2-8ee441231d74; SPC_SI=vRnIZwAAAABORXJIWnVUZOgUDAAAAAAAM29xS2RrNVo=; SPC_SEC_SI=v1-UlJiYVNiU2gxaTZQcXR6SKHz/pQWJ2unXlASvhwfkoU6J+B1nHHfK1QA2Y0uXYFral9mX4I/xpq5PSs0saiDi5B1nfGNIjIlwxWoVOlnOv4=; SPC_F=aXLbRLOZJq6l125C87nlQHdp4u3tkGjz; REC_T_ID=ce14310b-fb53-11ef-83c9-0ea86f55a723; SPC_R_T_ID=hMBwAdeuo7oqreqB4ZCSQpn1/JOXPgPDPuUiTjgrUfmGHu8gEfeyw6q1UZpj8knaRcWbBxwkBKTqlsYTYxAFFh3djrWwrz1U7TfRyj86b1fcFdvFNiLPsuk4pI5oXZnayLhNwVO/l7CMZsJc4ZJEAV57f0BgKEGwaXeuAS/4r4+B0uaP/9UnNmJC/7xqbiElPY0EM7kJQrSTQRDiB+yK/XIXvVKsH05vBrdue39hEpskiMsPL4G+zvCkljIqWTr98JkPhZxvQylACQfqTW3xHSMSa8ldvIyQf9qg==; SPC_ST=.c0FaaDRCOEZsOW5BTjZsY5NLxNpkNm5hh4odvliOO2ahpjNzMDlucwnrLJB7csf0MdaOmxzjaj7rWwrz1U7TfRyj86b1fcFdvFNiLPsuk4pI5oXZnayLhNwVO/l7CMZsJc4ZJEAV57f0BgKEGwaXeuAS/4r4+B0uaP/9UnNmJC/7xqbiElPY0EM7kJQrSTQRDiB+yK/XIXvVKsH05vBrdue39hEpskiMsPL4G+zvCkljIqWTr98JkPhZxvQylACQfqTW3xHSMSa8ldvIyQf9qg==`;

app.get("/product", async (req, res) => {
  scrapeProductDetail(req, res);
});

app.get("*", async (req, res) => {
  // scrapeWithScraperAPI(req, res, authCookie);
  scrapeWithBrightdata(req, res, null);
});

app.listen(PORT, () =>
  console.info(`Server running at http://localhost:${PORT}`)
);
