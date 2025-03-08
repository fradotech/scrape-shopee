const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");

const host = process.env.HOST;

// Disabled due to low SR. Please use non-API URLs

/*======================= Web Unlocker Proxy =======================*/
const webUnlockerAgent = new HttpsProxyAgent(
  process.env.WEB_UNLOCKER_PROXY_URL
);
webUnlockerAgent.options.rejectUnauthorized = false;

const dummyUrl = {
  search: "/search?keyword=shirt",
  detailNoLogin1:
    "/不臭腳不磨腳-厚底軟底-踩屎感洞洞鞋-夏季新品洞洞鞋-外穿花園鞋-軟底涼鞋-包頭凉拖鞋-防滑拖鞋-厚底踩屎感洞洞鞋-i.24178040.24079408833?sp_atk=0ff652a9-3bdc-437a-b0e2-bd002224679b&xptdk=0ff652a9-3bdc-437a-b0e2-bd002224679b",
  detailNoLogin2:
    "/女拖鞋-拖鞋女-涼鞋女-平底鞋-踩屎感涼鞋女款外穿年夏季新款厚底松糕跟兩穿涼拖鞋時尚女鞋-跟鞋-涼拖鞋-女涼鞋-懶人鞋-i.12041532.29260530198?sp_atk=8501278f-f0b9-4d05-935f-a640c9e98939&xptdk=8501278f-f0b9-4d05-935f-a640c9e98939",
  detailNoLogin3:
    "/大容量保溫杯巨無霸不銹鋼保冷陶瓷新款2024冰霸杯男士水杯子-i.271842038.28470712224?sp_atk=170c8334-e913-422e-9487-6a63628be0a3&xptdk=170c8334-e913-422e-9487-6a63628be0a3",
  account: "/api/v4/account/basic/get_account_info",
  mrScraper:
    "/api/v4/pdp/get_pc?item_id=4420309814&shop_id=10115139&tz_offset_minutes=420&detail_level=0&",
};

async function scrapeWithBrightdata(req, res, authCookie) {
  try {
    req.originalUrl =
      req.originalUrl === "/" ? dummyUrl.search : req.originalUrl;

    const url = `${host}${dummyUrl.detailNoLogin2}`;

    console.log(`Requesting: ${url}`);

    const response = await axios.get(url, {
      httpsAgent: webUnlockerAgent,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:136.0) Gecko/20100101 Firefox/136.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-User": "?1",
        Connection: "keep-alive",
        TE: "trailers",
        Cookie:
          "__LOCALE__null=TW; csrftoken=Nmi0JWsaUTshz1A3zt1rgSptsfMOThSN; _QPWSDCXHZQA=4fcc8764-2961-47c9-aa11-0c248e263e0a; REC7iLP4Q=9fc21a82-aeb9-4b4a-a051-96fad600de28; SPC_SI=wBnIZwAAAABhdTRlZ1hiOewMEgAAAAAAOWhCajBvWEk=; SPC_SEC_SI=v1-V1pxbXU1elpjdnZxSzFKNuktc3mvskUsbwhsi8DATcvnjT1/1Ynl8nHnNJNDj5RqCY8J2SDPaZ2NtBDMptSSxnbePkztE5ImjePCrJkcukE=; _sapid=cbc15ffdb62a949ace9c93ff188be3b2de711dbc59f62705e5ec84a2; SPC_F=B5anP7680b9OS5sMARIWrhovXrF0A8b3; REC_T_ID=8cdbf309-fbeb-11ef-91fe-82a5777d8d3c; SPC_R_T_ID=XAEy2NWK6OkMM8BBwXg4AuiKDdWi/zaEl+Kxe/qzLrd9puodSwntZQ0lXAV054RSKke5vXqsptPz++mSF53U9QswWeHJIN8RMx1umRdkv4ZyeOoCtHm7gyW0dxVsGS1tQ9vxka4/ulMG5P9ks22Dixm2zVIkh/jtTsPqoVjHWa0=; SPC_R_T_IV=WE1kT3NRM0J6aE1FQ3FYZQ==; SPC_T_ID=XAEy2NWK6OkMM8BBwXg4AuiKDdWi/zaEl+Kxe/qzLrd9puodSwntZQ0lXAV054RSKke5vXqsptPz++mSF53U9QswWeHJIN8RMx1umRdkv4ZyeOoCtHm7gyW0dxVsGS1tQ9vxka4/ulMG5P9ks22Dixm2zVIkh/jtTsPqoVjHWa0=; SPC_T_IV=WE1kT3NRM0J6aE1FQ3FYZQ==; _gcl_au=1.1.1716387895.1741417457; _ga_E1H7XE0312=GS1.1.1741417457.1.1.1741421263.52.0.0; _ga=GA1.2.1184586076.1741417457; shopee_webUnique_ccd=Gz8WO7n4y6xaOVtxWzAaAA%3D%3D%7CD4nJmCYL1SLsDIanOJDRLvvwX0bWbzJ6BqjaHX9D2eP8cmN2q%2F3K56pPm1fvvOwt17WoF5Q5Skvu74M%3D%7CvjztXllowJHRixZD%7C08%7C3; ds=ca5ac60d783ab48e32c24b002c84ed11; _fbp=fb.1.1741417458021.33655599410673385; _gid=GA1.2.224102692.1741417469; SPC_CLIENTID=QjVhblA3NjgwYjlPoyxpqydafrwlbqgk; SPC_U=1492457145; SPC_CDS_CHAT=69a8ebd1-d343-47c2-b42b-c717e7cfec23; language=en; AMP_TOKEN=%24NOT_FOUND; _dc_gtm_UA-61915057-6=1",
        Priority: "u=0, i",
      },
    });

    if (typeof response.data === "string" && process.env.SCRIPT_PRELOAD) {
      response.data = response.data.replace(
        new RegExp(process.env.SCRIPT_PRELOAD, "g"),
        ""
      );
    }

    console.log("\n\n", response.data, "\n\n");
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error: ${error.message}`);
  }
}

module.exports = { scrapeWithBrightdata };
