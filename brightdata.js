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

async function scrapeWithBrightdata(req, res) {
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

async function scrapeProductDetail(req, res) {
  try {
    // Extract item_id and shop_id from URL or use defaults
    const item_id = 24079408833;
    const shop_id = 24178040;

    // Construct API URL
    const apiUrl = `${host}/api/v4/pdp/get_pc?item_id=${item_id}&shop_id=${shop_id}&tz_offset_minutes=420&detail_level=0&=null`;

    console.log(`Requesting API: ${apiUrl}`);

    const response = await axios.get(apiUrl, {
      httpsAgent: webUnlockerAgent,
      headers: {
        // Standard headers
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:136.0) Gecko/20100101 Firefox/136.0",
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br, zstd",

        // Referer is important for anti-bot detection
        Referer:
          "https://shopee.tw/%E4%B8%8D%E8%87%AD%E8%85%B3%E4%B8%8D%E7%A3%A8%E8%85%B3-%E5%8E%9A%E5%BA%95%E8%BB%9F%E5%BA%95-%E8%B8%A9%E5%B1%8E%E6%84%9F%E6%B4%9E%E6%B4%9E%E9%9E%8B-%E5%A4%8F%E5%AD%A3%E6%96%B0%E5%93%81%E6%B4%9E%E6%B4%9E%E9%9E%8B-%E5%A4%96%E7%A9%BF%E8%8A%B1%E5%9C%92%E9%9E%8B-%E8%BB%9F%E5%BA%95%E6%B6%BC%E9%9E%8B-%E5%8C%85%E9%A0%AD%E5%87%89%E6%8B%96%E9%9E%8B-%E9%98%B2%E6%BB%91%E6%8B%96%E9%9E%8B-%E5%8E%9A%E5%BA%95%E8%B8%A9%E5%B1%8E%E6%84%9F%E6%B4%9E%E6%B4%9E%E9%9E%8B-i.24178040.24079408833?sp_atk=0ff652a9-3bdc-437a-b0e2-bd002224679b&xptdk=0ff652a9-3bdc-437a-b0e2-bd002224679b",

        // API specific headers
        "Content-Type": "application/json",
        "X-Shopee-Language": "en",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": "Nmi0JWsaUTshz1A3zt1rgSptsfMOThSN",
        "X-API-SOURCE": "pc",

        // Security-related headers
        "af-ac-enc-dat": "c31c281754850a6d",
        "sz-token":
          "sAI/8j1lWkRlOHjwIi7PIA==|MInJmCYL1SLsDIanOJDRLvvwX0bWbzJ6BqjaHbREzuP8cmN2q/3K56pPm1fvvOwt17WoF5Q5Skvu74M=|vjztXllowJHRixZD|08|3",
        "x-sz-sdk-version": "1.12.17",
        "x-sap-ri": "23ffcb67022cde6d1c16a93c05011401fa21c3ef7f096d160b1e",
        "x-sap-sec":
          "SuStvmSgJnJahWfosnkksTWo7nPos8Oo4nrksUBoankIsTOo+skSsVEopnkdsvWoNnOUs1BoCnPjsFxoTskYsUxo9KOqs8BoXnO9sFEodsrSstWoAsOPsufohnOZsqfoenkOs1vocnPEsFBoAnP0suOo2nk1sWEoHnPysDfoEnPqsWloAKk+sXloFnkMsUEoWsr1sWxoqnOosTBosnOosnOYny1KH5qhGNNdssOony7prCOhsnOSssOosnOojUBjgC0rPXIczQaW6sOosTN0ssOo7iWsnPfhsnOos1lEvY2Wqpk/qbHv3KkMinsos949TSnosnOzJCKoQ2b8z1KosWPGCnIosnOosue7sKOostc7icMgDPQosnrmMK8g3nOouCEoybJtnnsosnOonuZqoCrEMnsosnOooOndsKOosnOolgIstmmkssOoALtf0COopk0UhwwaRKE5ZTJhzOJYsCOosnko5KOosvU+ssOofIONfCOosFGpkwBMjnsosuKpsnPLHJLBKVijPgXK4BGikwZauPZby1izXeZNmRdibSdxaQeKvLtRUG+ZdIaAHVJ7cRSBB+NmRcIEGOUsgiI+85Nady5kVNBxO9ptxpquB0YyyuPLHMpZO09eYurK9x046A9nGlhZlgScPbm2I2iNKKWgvFt3Spu3obBozjSXxM6TKzTkfSFbgVNhb9P4kBdAR1XZZBjyujVOWnL0rCXAOX6+Gl5LY3e33N4jUsIklnCGX5NMKE/tx7aUu9nJnNQXQHRic6L0bYm8v18VMgXfIKF0NvbvXeKfDp7dUUt11VxaGUlosWwhXaJdow+fioPfHrMbZjnqn28LLzcsxAB6jjDgtaVtFqC2kPh0L7Lr7HHgy5Oa8aobi3TZWslyAAsChik/qxlt+P/39pQeagjde329RZK3ZFCysnOSsnOoW2KWeCWosnkHhoP1hyZuTrsosnP7wenVtCOyW3letGnOs5UEhFFNKumkMFVnseaHc42nFCbHVVuM2YBJPT/d3wrbEbM4X+Pcahs9yhO02AhPuMGZtRH+dJY4JwsJjbfAtdIqx+MLi9oU2jHnPzddM1EgHm0UfGGhWKH0vixHdrQWbxSjhfnsJbLclS8GqiBRcsZ4eWsJWwT/p5pBQ3bBRK0IDfsvIMYN4NfCbcLkkzKtJiQ/DWf5bE7S+FGjEdoKZ7533D6hsnOSsnOoVDtQussosnrrjnOossOosD2vsnOssnOoYyfosnBosnrlaX87snOosnWosnrcx9mipJxcQCOosnOrsnOofmTuKCRI31AVsnOoRKOosvtZQSGY+/EGMUFiLwMsdpe8N7Z0KZIz5bg5J1GONxeN2uJL2VeS0aJD2/tS/EgxcH3+I1h3BHtOJEhw+SJk3VJxdHc041eA2phwr2ePJwLY/1lwMHLx263aIw33N/Kb/wcL+6LbJ2M55bgx+Hta71gTN63O0UhXdUtSRuOiRuEossOosTA4snOosnOosnOosnWosnkKDlCwB9UfHCBosnrEZXLHsnOosn==",
        "af-ac-enc-sz-token":
          "sAI/8j1lWkRlOHjwIi7PIA==|MInJmCYL1SLsDIanOJDRLvvwX0bWbzJ6BqjaHbREzuP8cmN2q/3K56pPm1fvvOwt17WoF5Q5Skvu74M=|vjztXllowJHRixZD|08|3",
        "d-nonptcha-sync": "AAAGzRkstWEA|6|Co4f6SiPloOiIY=",

        // Fetch metadata
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",

        // Connection headers
        Connection: "keep-alive",
        TE: "trailers",
        Priority: "u=4",

        // Updated cookie string with all the security tokens
        Cookie:
          "__LOCALE__null=TW; csrftoken=Nmi0JWsaUTshz1A3zt1rgSptsfMOThSN; _QPWSDCXHZQA=4fcc8764-2961-47c9-aa11-0c248e263e0a; REC7iLP4Q=9fc21a82-aeb9-4b4a-a051-96fad600de28; SPC_SI=wBnIZwAAAABhdTRlZ1hiOewMEgAAAAAAOWhCajBvWEk=; SPC_SEC_SI=v1-V1pxbXU1elpjdnZxSzFKNuktc3mvskUsbwhsi8DATcvnjT1/1Ynl8nHnNJNDj5RqCY8J2SDPaZ2NtBDMptSSxnbePkztE5ImjePCrJkcukE=; _sapid=cbc15ffdb62a949ace9c93ff188be3b2de711dbc59f62705e5ec84a2; SPC_F=B5anP7680b9OS5sMARIWrhovXrF0A8b3; REC_T_ID=8cdbf309-fbeb-11ef-91fe-82a5777d8d3c; SPC_R_T_ID=XAEy2NWK6OkMM8BBwXg4AuiKDdWi/zaEl+Kxe/qzLrd9puodSwntZQ0lXAV054RSKke5vXqsptPz++mSF53U9QswWeHJIN8RMx1umRdkv4ZyeOoCtHm7gyW0dxVsGS1tQ9vxka4/ulMG5P9ks22Dixm2zVIkh/jtTsPqoVjHWa0=; SPC_R_T_IV=WE1kT3NRM0J6aE1FQ3FYZQ==; SPC_T_ID=XAEy2NWK6OkMM8BBwXg4AuiKDdWi/zaEl+Kxe/qzLrd9puodSwntZQ0lXAV054RSKke5vXqsptPz++mSF53U9QswWeHJIN8RMx1umRdkv4ZyeOoCtHm7gyW0dxVsGS1tQ9vxka4/ulMG5P9ks22Dixm2zVIkh/jtTsPqoVjHWa0=; SPC_T_IV=WE1kT3NRM0J6aE1FQ3FYZQ==; _gcl_au=1.1.1716387895.1741417457; _ga_E1H7XE0312=GS1.1.1741417457.1.1.1741422351.25.0.0; _ga=GA1.2.1184586076.1741417457; shopee_webUnique_ccd=sAI%2F8j1lWkRlOHjwIi7PIA%3D%3D%7CMInJmCYL1SLsDIanOJDRLvvwX0bWbzJ6BqjaHbREzuP8cmN2q%2F3K56pPm1fvvOwt17WoF5Q5Skvu74M%3D%7CvjztXllowJHRixZD%7C08%7C3; ds=ba01014fce42bdd0fa772c349d31ed98; _fbp=fb.1.1741417458021.33655599410673385; _gid=GA1.2.224102692.1741417469; SPC_CLIENTID=QjVhblA3NjgwYjlPoyxpqydafrwlbqgk; SPC_U=1492457145; SPC_CDS_CHAT=69a8ebd1-d343-47c2-b42b-c717e7cfec23; language=en; AMP_TOKEN=%24NOT_FOUND; _dc_gtm_UA-61915057-6=1; REC_T_ID=5b67d3f0-fbc2-11ef-b714-2e4aaa5fe512; SPC_EC=.V001c1ZHRzAwMUxWN1hXON3Crt741PwB0EGk/5jyOiVArpfBSrmlHyjMviniQ+buH+49UXPUUBdxpu/66a7qvD4RmMB8f9cQHuaspyYzRfxiESfS9ZJjtsxzNa2un+ZWEd5f1QvNY4CiPCB6R4IwEwJuNVKVSf++rjyXjf5UuJGVIEQdxE0BMzCGDrdkdGh637nmPMeIa3G2hvXyoyNcZCl5pRgqz75dDkTno5btSnWI7hz1KUSVDY1D6KF/jkNauwyZg8h/tY1DXZwnhG7aew==; SPC_F=rmCXUnhZmjX4lQLV008MklEBHWu5h5mY; SPC_R_T_ID=hMBwAdeuo7oqreqB4ZCSQpn1/JOXPgPDPuUiTjgrUfmGHu8gEfeyw6q1UZpj8knaRcWbBxwkBKTqlsYTYxAFFh3IXnB5GO4N5FCGI/tdK/LqnB6Tj6bVULZiNLIlELL7ZlCkNTIYwHMYQ7UzheL/gckyaKCPbALBtu8YwV8yVaM=; SPC_R_T_IV=bWQ1TjBTVUI3MU5hNXl4YQ==; SPC_SEC_SI=v1-b0kwQXM1WXFqZ1BRd1ZNU3GRvRYGdWXzW7G1JimPjBBv+qfMF0pC9TyDcLd8s/zjHfSe7HS1WeFO0Rc9tYEyMeXftNi6A3W8o0Ha/vypFuU=; SPC_SI=vRnIZwAAAABORXJIWnVUZOgUDAAAAAAAM29xS2RrNVo=; SPC_ST=.V001c1ZHRzAwMUxWN1hXON3Crt741PwB0EGk/5jyOiVArpfBSrmlHyjMviniQ+buH+49UXPUUBdxpu/66a7qvD4RmMB8f9cQHuaspyYzRfxiESfS9ZJjtsxzNa2un+ZWEd5f1QvNY4CiPCB6R4IwEwJuNVKVSf++rjyXjf5UuJGVIEQdxE0BMzCGDrdkdGh637nmPMeIa3G2hvXyoyNcZCl5pRgqz75dDkTno5btSnWI7hz1KUSVDY1D6KF/jkNauwyZg8h/tY1DXZwnhG7aew==; SPC_T_ID=hMBwAdeuo7oqreqB4ZCSQpn1/JOXPgPDPuUiTjgrUfmGHu8gEfeyw6q1UZpj8knaRcWbBxwkBKTqlsYTYxAFFh3IXnB5GO4N5FCGI/tdK/LqnB6Tj6bVULZiNLIlELL7ZlCkNTIYwHMYQ7UzheL/gckyaKCPbALBtu8YwV8yVaM=; SPC_T_IV=bWQ1TjBTVUI3MU5hNXl4YQ==; SPC_U=1492457145; __LOCALE__null=TW",
      },
    });

    console.log("\n\n", response.data, "\n\n");
    res.json(response.data);
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data,
    });
  }
}

module.exports = { scrapeWithBrightdata, scrapeProductDetail };
