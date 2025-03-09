This service converts Shopee product URLs into structured data using the Shopee API. Demo here

## https://scrap-shopee-tw.onrender.com

## Tech Stacks

- Javascript
- NodeJs v22+
- Yarn

## Setup

- Copy `.env.example` and rename to `.env`
- Install dependencies

```
yarn install
```

- Create `API_KEY` from scrapeless.com and fill `API_KEY` in `.env`
- Run development mode

```
yarn dev
```

## How it's work

`shopee.tw` tidak bisa dibuka dengan IP non Taiwan. Jika pakai VPN taiwan, maka dapat membukanya. Tapi bagaimana cara scrapingnya jika menggunakan VPN? Pasti tidak efektif. Harus pakai code dan automation, bahkan kalau bisa pakai AI.

Ada beberapa cara yg sudah dicoba, dan yg terakhir berhasil. Cara terakhir dalam bypass shopee taiwan, yaitu pakai API pihak ke 3 di scrapeless.com dengan fiturnya Scraping API. Sebelum ke pembahasan itu, saya ingin cerita beberapa metode yg terdahulu sebagai history trial and error.

#### 1. Residential Proxy by brightdata.com (Try and Error)

Sebelumnya pakai expressJs dengan residential proxy dari brightdata.com free trial dan belum bisa membuka API nya dengan prefix `shopee.tw/api/v4/...`, hanya web utama catalog saja. Ketika masuk ke halaman detail, code terdeteksi bot dan selalu `502 Page blocked`.

Ketika memaksa untuk hit endpointnya `shopee.tw/api/v4/...`, maka akan tambah gagal dengan response `Disabled due to low SR. Please use non-API URLs` dari brightdata.com success rate nya rendah.

#### 2. Resindential Proxy by another provider (Try and Error)

Hampir mirip dengan cara pertama, hanya saja residentialnya memakai scrapapi.com, dan beberapa residential proxy gratis lainnya. Namun hasilnya tetap sama, berhasil di catalog, tapi gagal di halaman detail product.

#### 3. Playwright

Berharap dapat membuat perilaku alami dengan interaksi browser seperti puppeter. Menggunakan playwright tetap memerlukan residential proxy, memakai brightdata.com lagi. Banyak cara yg pakai di sini, diantaranya:

- Random pick residential proxy
- Random pick headers, cookie, userAgent, dll
- Nature user interaction avoid bot detection (scroll, click, hoover, search, etc)
- Playwright-extra
- Puppeteer-extra-plugin-stealth

Namun ternyata masih gagal dan terdeteksi oleh bot

#### 4. Instant dengan scrapeless.com

Jalan terakhir memakai scrapeless.com yaitu provider scraping API dengan free trial plan-nya. Integrasinya hanya integrasi biaya juga, hit endpoint memakai API key dari scrapeless.com dengan payload API shopee `shopee.tw/api/v4/...`. Bagaimana scrapeless.com bisa bypass shopee dengan batasan geografis, tanpa login, dan deteksi bot baik API maupun HTML content?

- Scrapeless menggunakan IP local taiwan dengan metode residential proxy juga untuk mengakses-nya sehingga seakan akan request terjadi dari Taiwan
- Scrapeless manage session dan cookie supaya tetap bisa menjadi logged user mirip seperti user mengakses alami app
- Untuk menghindari deteksi bot, Scrapeless juga manage header, body, dll yang berperilaku sangat mirip dengan user sedang mengaksesnya (ini seperti cara no 3 yg sudah dicoba, tapi gagal).

###### Optimize performance

- Scrapeless juga menggunakan AI supaya dapat menaikkan akurasi dan efesiensi pengambilan data
- Untuk proses yg memakan waktu lama, scrapeless menggunakan async process dimana request akan diproses di background, dan dapat melihat hasilnya dari taskId dari response
