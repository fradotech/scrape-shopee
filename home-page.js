const fs = require("fs");
const path = require("path");
const { products } = require("./products");

function getHomePage(baseUrl) {
  // Read example response from JSON file
  let exampleResponse = "{}";
  try {
    const examplePath = path.join(__dirname, "response.example.json");
    exampleResponse = fs.readFileSync(examplePath, "utf8");
    // Format the JSON for better display
    exampleResponse = JSON.stringify(JSON.parse(exampleResponse), null, 2);
  } catch (error) {
    console.error("Failed to load example response:", error.message);
  }

  // Get 5 random products for examples
  const randomProducts = getRandomProducts(products, 5);
  const productExamples = randomProducts
    .map(
      (product, index) => `
      <div class="product-example">
        <strong>Example ${index + 1}:</strong>
        <a href="${product}" target="_blank" class="product-link">${product}</a>
        <button class="copy-btn" onclick="copyToClipboard('${product}')" title="Copy URL">Copy</button>
        <button class="try-btn" onclick="tryApi('${product}')" title="Try with this URL">Try</button>
      </div>`
    )
    .join("");

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopee API Scraper</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f9fa;
      }
      header {
        background-color: #ee4d2d;
        color: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
      }
      h1 {
        margin: 0;
      }
      .container {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 20px;
      }
      code, pre {
        background-color: #f5f5f5;
        border-radius: 4px;
        padding: 12px;
        overflow-x: auto;
        border: 1px solid #e0e0e0;
        font-family: Consolas, Monaco, 'Andale Mono', monospace;
      }
      .endpoint {
        font-weight: bold;
        color: #ee4d2d;
      }
      ul {
        padding-left: 20px;
      }
      li {
        margin-bottom: 8px;
      }
      footer {
        text-align: center;
        margin-top: 30px;
        font-size: 0.8rem;
        color: #666;
      }
      .json-response {
        max-height: 500px;
        overflow-y: auto;
      }
      .product-example {
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .product-link {
        margin: 0 10px;
        color: #0366d6;
        word-break: break-all;
        flex: 1;
      }
      .copy-btn, .try-btn {
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 8px;
        cursor: pointer;
        font-size: 12px;
        margin-left: 5px;
      }
      .try-btn {
        background-color: #ee4d2d;
        color: white;
        border: none;
      }
      #result {
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        display: none;
      }
      #loading {
        display: none;
        color: #ee4d2d;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>🛍️ Shopee API Scraper by <a href="https://frado.id" style="color:white;text-decoration:none;">frado.id</a></h1>
    </header>
    
    <div class="container">
      <p>This service converts Shopee product URLs into structured data using the Shopee API.</p>
      
      <h2>API Endpoint</h2>
      <p class="endpoint">POST ${baseUrl}</p>
      
      <h2>How to Use</h2>
      <h3>Example (curl):</h3>
      <pre>curl --location '${baseUrl}' \\
  --header 'Content-Type: application/json' \\
  --data '{
      "url": "https://shopee.tw/---i.338037348.24636536148"
  }'</pre>
      
      <h2>Supported URL Formats</h2>
      <ul>
        <li><strong>Product URL:</strong> https://shopee.tw/product-name-i.{shop_id}.{item_id}</li>
        <li><strong>API URL:</strong> https://shopee.tw/api/v4/pdp/get_pc?item_id={item_id}&shop_id={shop_id}&tz_offset_minutes=420&detail_level=0&</li>
      </ul>
      
      <h2>Product Examples</h2>
      <div class="product-examples">
        ${productExamples}
      </div>
      
      <div id="loading">Processing request...</div>
      <div id="result"></div>
    </div>
    
    <div class="container">
      <h2>Response Example</h2>
      <div class="json-response">
        <pre>${exampleResponse}</pre>
      </div>
    </div>
    
    <footer>
      &copy; ${new Date().getFullYear()} Shopee API Scraper | All Rights Reserved
    </footer>
    
    <script>
      function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('URL copied to clipboard!');
      }
      
      function tryApi(url) {
        const loading = document.getElementById('loading');
        const result = document.getElementById('result');
        
        loading.style.display = 'block';
        result.style.display = 'none';
        
        fetch('${baseUrl}', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: url })
        })
        .then(response => response.json())
        .then(data => {
          loading.style.display = 'none';
          result.style.display = 'block';
          result.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
        })
        .catch(error => {
          loading.style.display = 'none';
          result.style.display = 'block';
          result.innerHTML = '<div style="color: red;">Error: ' + error.message + '</div>';
        });
      }
    </script>
  </body>
  </html>
    `;
}

// Function to get random products from the array
function getRandomProducts(array, count) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

module.exports = { getHomePage, products };
module.exports = { getHomePage };
