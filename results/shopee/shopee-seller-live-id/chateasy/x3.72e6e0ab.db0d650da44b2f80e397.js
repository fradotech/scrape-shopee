"use strict";
(self.miniJsonp = self.miniJsonp || []).push([
  [4404],
  {
    12754: function (e, r, _) {
      _.r(r),
        _.d(r, {
          ROUTE_ANTI_CRAWLER: function () {
            return c;
          },
          ROUTE_ANTI_CRAWLER_ERROR: function () {
            return I;
          },
          ROUTE_ANTI_CRAWLER_TEST: function () {
            return s;
          },
          ROUTE_IVS: function () {
            return E;
          },
          ROUTE_IVS_NO_UNIVERSAL_LINK: function () {
            return o;
          },
          ROUTE_VERIFY_BY_EMAIL: function () {
            return A;
          },
          ROUTE_VERIFY_BY_EMAIL_LINK_RECEIVER: function () {
            return N;
          },
          ROUTE_VERIFY_BY_EMAIL_LINK_SENDER: function () {
            return S;
          },
          ROUTE_VERIFY_BY_LINK_RECEIVER: function () {
            return u;
          },
          ROUTE_VERIFY_BY_LINK_SENDER: function () {
            return O;
          },
          ROUTE_VERIFY_BY_OTP: function () {
            return R;
          },
          ROUTE_VERIFY_BY_OTP_UNIVERSAL_LINK: function () {
            return T;
          },
          ROUTE_VERIFY_BY_PASSWORD: function () {
            return i;
          },
          ROUTE_VERIFY_BY_QR: function () {
            return U;
          },
          ROUTE_VERIFY_BY_SHOPEE_PAY: function () {
            return l;
          },
          ROUTE_VERIFY_CAPTCHA: function () {
            return t;
          },
          ROUTE_VERIFY_CAPTCHA_FEATURE: function () {
            return n;
          },
          ROUTE_VERIFY_CAPTCHA_POPUP: function () {
            return a;
          },
        });
      const t = "/verify/captcha",
        a = "/verify/captcha/popup",
        n = "/verify/captcha/feature",
        E = "/verify/ivs",
        o = "/s/browser/ivs",
        i = "/verify/password",
        R = "/verify/otp",
        T = "/s/browser/verify/otp",
        O = "/verify/link",
        u = "/dlink/verify/link",
        c = "/verify/traffic",
        I = "/verify/traffic/error",
        s = "/verify/traffic/test",
        l = "/payment/ivs/wallet-pin",
        A = "/verify/email",
        U = "/verify/qr",
        S = "/verify/email-link",
        N = "/dlink/verify/email-link";
    },
    90290: function (e, r, _) {
      _.r(r),
        _.d(r, {
          ROUTE_AUTHENTICATE_BY_OTP: function () {
            return n;
          },
          ROUTE_AUTHENTICATE_BY_SHOPEE_PAY: function () {
            return m;
          },
          ROUTE_AUTHENTICATE_OAUTH: function () {
            return H;
          },
          ROUTE_AUTHENTICATE_SOCIAL_BIND_ACCOUNT: function () {
            return g;
          },
          ROUTE_AUTHENTICATION_IVS: function () {
            return L;
          },
          ROUTE_CHECKOUT_SIGNUP: function () {
            return P;
          },
          ROUTE_INTEGRATION_ADDRESS_CALLBACK: function () {
            return F;
          },
          ROUTE_INTEGRATION_LINK_LINE: function () {
            return f;
          },
          ROUTE_INTEGRATION_LINK_LINE_MISSION_STICKER: function () {
            return h;
          },
          ROUTE_INTEGRATION_LINK_LINE_OPEN_APP: function () {
            return y;
          },
          ROUTE_INTEGRATION_LINK_LKPP_SSO: function () {
            return p;
          },
          ROUTE_INTEGRATION_LINK_META: function () {
            return B;
          },
          ROUTE_INTEGRATION_LINK_NOW: function () {
            return C;
          },
          ROUTE_INTEGRATION_LINK_SNACK: function () {
            return M;
          },
          ROUTE_INTEGRATION_LINK_SNACK_CHECKOUT: function () {
            return Y;
          },
          ROUTE_INTEGRATION_TW_E_INVOICE: function () {
            return D;
          },
          ROUTE_INTEGRATION_TW_E_INVOICE_NO_UNIVERSAL_LINK: function () {
            return G;
          },
          ROUTE_LEGACY_RESET_PASSWORD: function () {
            return S;
          },
          ROUTE_LEGACY_SIGNUP_BY_OTP: function () {
            return i;
          },
          ROUTE_LIVE_STREAMING_LOGIN_BY_OTP: function () {
            return A;
          },
          ROUTE_LIVE_STREAMING_LOGIN_BY_PASSWORD: function () {
            return l;
          },
          ROUTE_LIVE_STREAMING_LOGIN_BY_QR: function () {
            return U;
          },
          ROUTE_LIVE_STREAMING_SIGNUP_BY_OTP: function () {
            return s;
          },
          ROUTE_LOGIN_BY_OTP: function () {
            return a;
          },
          ROUTE_LOGIN_BY_PASSWORD: function () {
            return t;
          },
          ROUTE_LOGIN_BY_QR: function () {
            return E;
          },
          ROUTE_LOGIN_BY_WHATSAPP_TOKEN: function () {
            return o;
          },
          ROUTE_LOGIN_SIGNUP_COMBINATION: function () {
            return b;
          },
          ROUTE_LOGIN_SIGNUP_GUEST_CART: function () {
            return v;
          },
          ROUTE_RESET_PASSWORD: function () {
            return N;
          },
          ROUTE_RESET_PASSWORD_BY_EMAIL: function () {
            return d;
          },
          ROUTE_SELLER_LOGIN_BY_OTP: function () {
            return c;
          },
          ROUTE_SELLER_LOGIN_BY_PASSWORD: function () {
            return u;
          },
          ROUTE_SELLER_LOGIN_BY_QR: function () {
            return I;
          },
          ROUTE_SELLER_SIGNUP_BY_OTP: function () {
            return O;
          },
          ROUTE_SIGNUP_BY_OTP: function () {
            return R;
          },
          ROUTE_SIGNUP_KYC: function () {
            return T;
          },
          ROUTE_TOB_AUTHENTICATION: function () {
            return W;
          },
        });
      const t = "/buyer/login",
        a = "/buyer/login/otp",
        n = "/authenticate/otp",
        E = "/buyer/login/qr",
        o = "/authenticate/whatsapp",
        i = "/buyer/login/signup",
        R = "/buyer/signup",
        T = "/buyer/signup/kyc",
        O = "/seller/signup",
        u = "/seller/login",
        c = "/seller/login/otp",
        I = "/seller/login/qr",
        s = "/live/signup",
        l = "/live/login",
        A = "/live/login/otp",
        U = "/live/login/qr",
        S = "/buyer/login/reset",
        N = "/buyer/reset",
        d = "/forgot_password",
        P = "/checkout/signup",
        C = "/integration/link/now",
        p = "/integration/link/lkpp",
        m = "/shopeepay/login",
        L = "/authenticate/ivs",
        g = "/authenticate/social/bind",
        f = "/integration/link/line",
        y = "/integration/link/line/open-app",
        h = "/buyer/w/line-mission-sticker",
        D = "/integration/link/e-invoice",
        G = "/s/browser/integration/link/e-invoice",
        F = "/integration/address/callback",
        H = "/authenticate/oauth",
        M = "/integration/link/snack",
        Y = "/integration/link/snack/checkout",
        B = "/integration/link/meta",
        b = "/buyer/authenticate",
        v = "/guest/authenticate",
        W = "/tob/authenticate";
    },
    37725: function (e, r, _) {
      _.r(r),
        _.d(r, {
          COUNTRY_CODE: function () {
            return R;
          },
          CURRENCY_CONFIG: function () {
            return A;
          },
          CURRENCY_ID: function () {
            return T;
          },
          DEFAULT_NOTCHES: function () {
            return h;
          },
          DEFAULT_SEPARATOR_PATTERN: function () {
            return u;
          },
          LANGUAGE: function () {
            return O;
          },
          MAX_PRECISION: function () {
            return i;
          },
          SYMBOL_POSITION: function () {
            return s;
          },
          _compactNumber: function () {
            return Ue;
          },
          compactCurrency: function () {
            return Se;
          },
          compactNumber: function () {
            return Ne;
          },
          default: function () {
            return Ce;
          },
          deflateServerNumber: function () {
            return ue;
          },
          formatCurrency: function () {
            return le;
          },
          formatCurrencyNumber: function () {
            return se;
          },
          formatNumber: function () {
            return Ie;
          },
          getConfigByCountry: function () {
            return Oe;
          },
          getCountryConfig: function () {
            return te;
          },
          getCurrencyConfig: function () {
            return ne;
          },
          getCurrencySpaceBetweenSymbol: function () {
            return ie;
          },
          getCurrencySymbol: function () {
            return Ee;
          },
          getCurrencySymbolPosition: function () {
            return oe;
          },
          getNotches: function () {
            return Re;
          },
          getNumberParts: function () {
            return P;
          },
          getServerNumberConvertRatio: function () {
            return Te;
          },
          getUtilsByCountry: function () {
            return Pe;
          },
          localizeCompactNumber: function () {
            return de;
          },
          parseServerNumber: function () {
            return ce;
          },
        });
      var t,
        a,
        n,
        E,
        o,
        i = 20,
        R = {
          SG: "SG",
          ID: "ID",
          MY: "MY",
          PH: "PH",
          TW: "TW",
          TH: "TH",
          VN: "VN",
          IR: "IR",
          MM: "MM",
          HK: "HK",
          BR: "BR",
          CN: "CN",
          MX: "MX",
          CO: "CO",
          CL: "CL",
          AR: "AR",
          PL: "PL",
          ES: "ES",
          FR: "FR",
          IN: "IN",
          US: "US",
          KR: "KR",
        },
        T = {
          SGD: "SGD",
          IDR: "IDR",
          MYR: "MYR",
          PHP: "PHP",
          TWD: "TWD",
          THB: "THB",
          VND: "VND",
          IRR: "IRR",
          MMK: "MMK",
          HKD: "HKD",
          BRL: "BRL",
          CNY: "CNY",
          MXN: "MXN",
          COP: "COP",
          CLP: "CLP",
          ARS: "ARS",
          PLN: "PLN",
          EUR: "EUR",
          INR: "INR",
          USD: "USD",
          KRW: "KRW",
        },
        O = {
          en: "en",
          id: "id",
          ms: "ms",
          "zh-Hans": "zh-Hans",
          "zh-Hant": "zh-Hant",
          th: "th",
          vi: "vi",
          "pt-BR": "pt-BR",
          "es-MX": "es-MX",
          "es-CO": "es-CO",
          "es-CL": "es-CL",
          "es-AR": "es-AR",
          pl: "pl",
          "es-ES": "es-ES",
          fr: "fr",
          hi: "hi",
        },
        u = [3],
        c = ",",
        I = ".",
        s = { FRONT: "FRONT", BACK: "BACK" },
        l = {
          symbol: "$",
          precision: 2,
          separator: c,
          separatorPattern: u,
          decimalPoint: I,
        },
        A =
          (((t = { default: l })[T.SGD] = l),
          (t[T.IDR] = {
            symbol: "Rp",
            precision: 0,
            separator: I,
            decimalPoint: c,
          }),
          (t[T.MYR] = {
            symbol: "RM",
            precision: 2,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.PHP] = {
            symbol: "₱",
            precision: 0,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.TWD] = {
            symbol: "$",
            precision: 0,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.THB] = {
            symbol: "฿",
            maxPrecision: 2,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.VND] = {
            symbol: "₫",
            precision: 0,
            separator: I,
            decimalPoint: c,
          }),
          (t[T.IRR] = {
            symbol: "تومان",
            precision: 0,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.MMK] = {
            symbol: "Ks",
            precision: 0,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.HKD] = l),
          (t[T.BRL] = {
            symbol: "R$",
            precision: 2,
            separator: I,
            decimalPoint: c,
          }),
          (t[T.CNY] = {
            symbol: "￥",
            precision: 2,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.MXN] = {
            symbol: "MX$",
            precision: 2,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.COP] = {
            symbol: "COP",
            precision: 0,
            separator: I,
            decimalPoint: c,
          }),
          (t[T.CLP] = {
            symbol: "CLP",
            precision: 0,
            separator: I,
            decimalPoint: c,
          }),
          (t[T.ARS] = {
            symbol: "$",
            precision: 2,
            separator: I,
            decimalPoint: c,
          }),
          (t[T.PLN] = {
            symbol: "zł",
            symbolPosition: s.BACK,
            precision: 2,
            separator: " ",
            decimalPoint: c,
            spaceBetweenSymbol: !0,
          }),
          (t[T.EUR] = {
            symbol: "€",
            symbolPosition: s.BACK,
            precision: 2,
            separator: I,
            decimalPoint: c,
          }),
          (t[T.INR] = {
            symbol: "₹",
            precision: 0,
            separator: c,
            decimalPoint: I,
            separatorPattern: [3, 2, 2],
          }),
          (t[T.USD] = {
            symbol: "USD",
            precision: 2,
            separator: c,
            decimalPoint: I,
          }),
          (t[T.KRW] = {
            symbol: "KRW",
            precision: 0,
            separator: c,
            decimalPoint: I,
          }),
          t);
      function U(e, r, _) {
        var t = parseFloat(String(e));
        return isFinite(t)
          ? "function" == typeof r
            ? r(t)
            : t
          : void 0 !== _
          ? _
          : e;
      }
      function S(e) {
        var r = Number(e)
          .toExponential()
          .split("e")
          .map(function (e) {
            return +e;
          });
        return { mant: r[0], exp: r[1] };
      }
      function N(e) {
        for (var r = "", _ = 0; _ < e; _++) r += "0";
        return r;
      }
      function d(e, r) {
        return U(
          e,
          function (e) {
            return "number" == typeof r && r >= 0 && r < 100
              ? (function (e, r) {
                  var _ = S(e),
                    t = S(
                      Math.round(+(String(_.mant) + "e" + String(_.exp + r)))
                    ),
                    a = String(+(String(t.mant) + "e" + String(t.exp - r)));
                  if (0 === r || a.includes("e")) return a;
                  var n = a.indexOf(".");
                  return -1 === n
                    ? a + "." + N(r)
                    : a + N(r - (a.length - n) + 1);
                })(e, r)
              : e.toString();
          },
          ""
        );
      }
      function P(e, r) {
        if ((void 0 === r && (r = "."), "string" == typeof e)) {
          var _ = e.search(/^-|\+/) + 1,
            t = e.lastIndexOf(r);
          return {
            symbol: e.slice(0, _),
            integer: e.slice(_, t < 0 ? void 0 : t),
            decimal: t < 0 ? void 0 : e.slice(t + 1),
            decimalPoint: r,
          };
        }
        return { symbol: "", integer: "", decimal: "", decimalPoint: r };
      }
      var C = 1e3,
        p = 1e6,
        m = 1e9,
        L = 1e4,
        g = 1e5,
        f = 1e7,
        y = 1e8,
        h = [
          { notch: m, unit: "b" },
          { notch: p, unit: "m" },
          { notch: C, unit: "k" },
        ],
        D =
          (((a = {})[R.SG] = { default: h }),
          (a[R.ID] = {
            default: [
              { notch: m, unit: "M" },
              { notch: p, unit: "JT" },
              { notch: C, unit: "RB" },
            ],
          }),
          (a[R.MY] =
            (((n = { default: h })[O.ms] = h),
            (n[O["zh-Hans"]] = [
              { notch: y, unit: "亿" },
              { notch: L, unit: "万" },
              { notch: C, unit: "千" },
            ]),
            n)),
          (a[R.PH] = {
            default: [
              { notch: m, unit: "B" },
              { notch: p, unit: "M" },
              { notch: C, unit: "K" },
            ],
          }),
          (a[R.TW] = {
            default: [
              { notch: y, unit: "億" },
              { notch: L, unit: "萬" },
            ],
          }),
          (a[R.TH] =
            (((E = {
              default: [
                { notch: p, unit: "ล้าน" },
                { notch: C, unit: "พัน" },
              ],
            })[O.en] = h),
            E)),
          (a[R.VN] = {
            default: [
              { notch: p, unit: "tr" },
              { notch: C, unit: "k" },
            ],
          }),
          (a[R.IR] = { default: h }),
          (a[R.MM] = { default: h }),
          (a[R.HK] = { default: h }),
          (a[R.CN] = { default: [{ notch: L, unit: "万" }] }),
          (a[R.BR] = {
            default: [
              { notch: m, unit: "bi" },
              { notch: p, unit: "mi" },
              { notch: C, unit: "mil" },
            ],
          }),
          (a[R.MX] = {
            default: [
              { notch: m, unit: "mil millones" },
              { notch: p, unit: "millón" },
              { notch: C, unit: "mil" },
            ],
          }),
          (a[R.CO] = {
            default: [
              { notch: m, unit: "mil millones" },
              { notch: p, unit: "millón" },
              { notch: C, unit: "mil" },
            ],
          }),
          (a[R.CL] = {
            default: [
              { notch: m, unit: "mil millones" },
              { notch: p, unit: "millón" },
              { notch: C, unit: "mil" },
            ],
          }),
          (a[R.AR] = {
            default: [
              { notch: m, unit: "mm" },
              { notch: p, unit: "m" },
              { notch: C, unit: "k" },
            ],
          }),
          (a[R.PL] = {
            default: [
              { notch: m, unit: " mld" },
              { notch: p, unit: " mln" },
              { notch: C, unit: " tys." },
            ],
          }),
          (a[R.ES] = {
            default: [
              { notch: m, unit: "MM" },
              { notch: p, unit: "M" },
              { notch: C, unit: "k" },
            ],
          }),
          (a[R.FR] = {
            default: [
              { notch: m, unit: " Md" },
              { notch: p, unit: " M" },
              { notch: C, unit: " k" },
            ],
          }),
          (a[R.IN] =
            (((o = {
              default: [
                { notch: f, unit: " करोड़" },
                { notch: g, unit: " लाख" },
                { notch: C, unit: " हजार" },
              ],
            })[O.en] = [
              { notch: f, unit: " cr" },
              { notch: g, unit: " lakh" },
              { notch: C, unit: "k" },
            ]),
            o)),
          (a[R.US] = {
            default: [
              { notch: m, unit: "B" },
              { notch: p, unit: "M" },
              { notch: C, unit: "k" },
            ],
          }),
          (a[R.KR] = {
            default: [
              { notch: L, unit: "만" },
              { notch: y, unit: "억" },
              { notch: 1e12, unit: "조" },
            ],
          }),
          a);
      var G,
        F,
        H,
        M,
        Y,
        B,
        b,
        v,
        W,
        V,
        K,
        k,
        w,
        x,
        q,
        X,
        $,
        j,
        z,
        Q,
        J,
        Z,
        ee,
        re = function () {
          return (
            (re =
              Object.assign ||
              function (e) {
                for (var r, _ = 1, t = arguments.length; _ < t; _++)
                  for (var a in (r = arguments[_]))
                    Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                return e;
              }),
            re.apply(this, arguments)
          );
        },
        _e =
          (((G = {})[R.SG] = {
            currencies: ((F = {}), (F[T.SGD] = {}), F),
            defaultCurrency: T.SGD,
          }),
          (G[R.ID] = {
            currencies: ((H = {}), (H[T.IDR] = {}), H),
            defaultCurrency: T.IDR,
          }),
          (G[R.MY] = {
            currencies: ((M = {}), (M[T.MYR] = {}), M),
            defaultCurrency: T.MYR,
          }),
          (G[R.PH] = {
            currencies: ((Y = {}), (Y[T.PHP] = {}), Y),
            defaultCurrency: T.PHP,
          }),
          (G[R.TW] = {
            currencies: ((B = {}), (B[T.TWD] = {}), B),
            defaultCurrency: T.TWD,
          }),
          (G[R.TH] = {
            currencies: ((b = {}), (b[T.THB] = {}), b),
            defaultCurrency: T.THB,
          }),
          (G[R.VN] = {
            currencies: ((v = {}), (v[T.VND] = {}), v),
            defaultCurrency: T.VND,
          }),
          (G[R.IR] = {
            currencies:
              ((W = {}), (W[T.IRR] = { convertRate: 1e6 }), (W[T.MMK] = {}), W),
            defaultCurrency: T.IRR,
            serverCurrency: T.MMK,
          }),
          (G[R.MM] = {
            currencies: ((V = {}), (V[T.MMK] = {}), V),
            defaultCurrency: T.MMK,
          }),
          (G[R.HK] = {
            currencies: ((K = {}), (K[T.HKD] = {}), K),
            defaultCurrency: T.HKD,
          }),
          (G[R.BR] = {
            currencies: ((k = {}), (k[T.BRL] = {}), k),
            defaultCurrency: T.BRL,
          }),
          (G[R.CN] = {
            currencies: ((w = {}), (w[T.CNY] = {}), w),
            defaultCurrency: T.CNY,
          }),
          (G[R.MX] = {
            currencies: ((x = {}), (x[T.MXN] = {}), x),
            defaultCurrency: T.MXN,
          }),
          (G[R.CO] = {
            currencies: ((q = {}), (q[T.COP] = {}), q),
            defaultCurrency: T.COP,
          }),
          (G[R.CL] = {
            currencies: ((X = {}), (X[T.CLP] = {}), X),
            defaultCurrency: T.CLP,
          }),
          (G[R.AR] = {
            currencies: (($ = {}), ($[T.ARS] = {}), $),
            defaultCurrency: T.ARS,
          }),
          (G[R.PL] = {
            currencies: ((j = {}), (j[T.PLN] = {}), j),
            defaultCurrency: T.PLN,
          }),
          (G[R.ES] = {
            currencies: ((z = {}), (z[T.EUR] = {}), z),
            defaultCurrency: T.EUR,
          }),
          (G[R.FR] = {
            currencies: ((Q = {}), (Q[T.EUR] = { separator: " " }), Q),
            defaultCurrency: T.EUR,
          }),
          (G[R.IN] = {
            currencies: ((J = {}), (J[T.INR] = {}), J),
            defaultCurrency: T.INR,
          }),
          (G[R.US] = {
            currencies: ((Z = {}), (Z[T.USD] = {}), Z),
            defaultCurrency: T.USD,
          }),
          (G[R.KR] = {
            currencies: ((ee = {}), (ee[T.KRW] = {}), ee),
            defaultCurrency: T.KRW,
          }),
          G);
      function te(e, r) {
        var _ = "string" == typeof e ? e.toUpperCase() : e,
          t = (function (e, r) {
            if (!e) return h;
            var _ = D[e],
              t = _.default;
            return (r && _[r]) || t;
          })(_, r);
        return re(re({}, _e[_]), { notches: t });
      }
      var ae = function () {
        return (
          (ae =
            Object.assign ||
            function (e) {
              for (var r, _ = 1, t = arguments.length; _ < t; _++)
                for (var a in (r = arguments[_]))
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              return e;
            }),
          ae.apply(this, arguments)
        );
      };
      function ne(e, r) {
        if ("string" == typeof (_ = e) && _.toUpperCase() in T)
          return A[String(e).toUpperCase()];
        var _,
          t = te(e, r),
          a = t && t.defaultCurrency && A[t.defaultCurrency];
        return a ? ae(ae({}, a), t.currencies[t.defaultCurrency]) : A.default;
      }
      function Ee(e) {
        var r = ne(e);
        return (r && r.symbol) || "";
      }
      function oe(e) {
        var r = ne(e);
        return r && void 0 !== r.symbolPosition ? r.symbolPosition : s.FRONT;
      }
      function ie(e) {
        var r = ne(e);
        return (r && r.spaceBetweenSymbol) || !1;
      }
      function Re(e, r) {
        return "string" == typeof (_ = e) && _.toUpperCase() in R
          ? r
            ? te(e, r).notches
            : te(e).notches
          : h;
        var _;
      }
      function Te(e, r) {
        if (e) {
          var _ = te(e),
            t = _ && _.currencies[r || _.defaultCurrency];
          if (t && t.convertRate) return t.convertRate;
        }
        return 1e5;
      }
      function Oe(e, r) {
        return {
          getCountryConfig: function (_, t) {
            return te(_ || e, t || r);
          },
          getServerNumberConvertRatio: Te,
          getNotches: function (_, t) {
            return Re(_ || e, t || r);
          },
          getCurrencySymbol: Ee,
          DEFAULT_NOTCHES: h,
          getCurrencyConfig: function (e) {
            return ne(e, r);
          },
        };
      }
      function ue(e, r, _) {
        return U(e, function (e) {
          return e / Te(r, _);
        });
      }
      function ce(e, r, _) {
        return U(e, function (e) {
          return Math.round(e * Te(r, _));
        });
      }
      function Ie(e, r) {
        var _ = ("object" == typeof r && r) || {},
          t = _.precision,
          a = _.maxPrecision,
          n = _.decimalPoint,
          E = void 0 === n ? "." : n,
          o = _.separator,
          i = _.separatorPattern,
          R = t;
        return (
          "object" != typeof r && (R = r),
          U(
            e,
            function (e) {
              var r = d(e, a);
              if (
                ((r = d(
                  r,
                  U(
                    a,
                    function (e) {
                      return U(
                        R,
                        function (r) {
                          return Math.min(r, e);
                        },
                        void 0
                      );
                    },
                    R
                  )
                )),
                o)
              ) {
                var _ = P(r),
                  t = _.symbol,
                  n = _.integer,
                  T = _.decimal,
                  O =
                    "function" == typeof o
                      ? o(n)
                      : (function (e, r) {
                          var _ = r || {},
                            t = _.separator,
                            a = void 0 === t ? "," : t,
                            n = _.separatorPattern,
                            E = void 0 === n ? u : n;
                          if ("string" != typeof e) return "";
                          if ("string" != typeof a) return e;
                          for (var o = [], i = e.length, R = 0; i > 0; ) {
                            var T = E[R % E.length],
                              O = e.slice(Math.max(i - T, 0), i);
                            o.unshift(O), (i -= T), R++;
                          }
                          return o.join(a);
                        })(n, { separator: o, separatorPattern: i });
                return t + O + (T ? E + T : "");
              }
              return r.replace(/\./, E);
            },
            ""
          )
        );
      }
      function se(e, r, _) {
        var t =
            "object" == typeof _
              ? _
              : { precision: _, maxPrecision: void 0, noSeparator: void 0 },
          a = t.precision,
          n = t.maxPrecision,
          E = t.noSeparator,
          o = ne(e),
          i = o
            ? Ie(r, {
                decimalPoint: o.decimalPoint,
                separator: E ? void 0 : o.separator,
                separatorPattern: E
                  ? void 0
                  : void 0 === typeof o.separatorPattern
                  ? u
                  : o.separatorPattern,
                maxPrecision: U(
                  n,
                  function (e) {
                    return e;
                  },
                  !1 === n ? n : o.maxPrecision
                ),
                precision: U(
                  a,
                  function (e) {
                    return e;
                  },
                  !1 === a ? a : o.precision
                ),
              })
            : Ie(r);
        return (
          ("THB" === e || "TH" === e) &&
            void 0 === a &&
            "string" == typeof i &&
            /\.\d$/.exec(i) &&
            (i += "0"),
          i
        );
      }
      function le(e, r, _) {
        var t = "number" == typeof r ? r : parseFloat(r),
          a = t < 0,
          n = Ee(e),
          E = oe(e),
          o = ie(e);
        "object" == typeof _ &&
          ("string" == typeof _.symbol && (n = _.symbol),
          "string" == typeof _.symbolPosition && (E = _.symbolPosition),
          "boolean" == typeof _.spaceBetweenSymbol &&
            (o = _.spaceBetweenSymbol));
        var i = String(se(e, Math.abs(t), _)),
          R = a ? "-" : "",
          T = o ? " " : "";
        return E === s.BACK ? R + i + T + n : R + n + T + i;
      }
      var Ae = function () {
        return (
          (Ae =
            Object.assign ||
            function (e) {
              for (var r, _ = 1, t = arguments.length; _ < t; _++)
                for (var a in (r = arguments[_]))
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              return e;
            }),
          Ae.apply(this, arguments)
        );
      };
      function Ue(e, r, _) {
        void 0 === r && (r = 1), void 0 === _ && (_ = h);
        var t = parseFloat(String(e));
        if (isFinite(t) && _ && _.length && t >= _[_.length - 1].notch)
          for (var a = _.length; a--; ) {
            var n = _[a],
              E = n.notch,
              o = n.unit,
              i = _[a - 1],
              R = parseFloat(d(t / E, r));
            if (!i || Math.abs(R) < i.notch / E) return { number: R, unit: o };
          }
        return { number: parseFloat(d(t, r)), unit: "" };
      }
      function Se(e, r, _, t, a) {
        var n = _ && "object" == typeof _ ? _.maxPrecision : _,
          E = Ue(r, n, t || Re(e, a)),
          o = E.number,
          i = E.unit;
        return (
          "" +
          le(
            e,
            o,
            _ && "object" == typeof _
              ? Ae(Ae({}, _), { precision: null != _.precision && _.precision })
              : { precision: !1, maxPrecision: n }
          ) +
          i
        );
      }
      function Ne(e, r, _) {
        void 0 === r && (r = 1), void 0 === _ && (_ = h);
        var t = Ue(e, r, _);
        return "" + t.number + t.unit;
      }
      function de(e, r, _, t) {
        var a = Re(e, t);
        return Se(
          e,
          r,
          _ && "object" == typeof _
            ? Ae(Ae({}, _), { symbol: "" })
            : { maxPrecision: _, symbol: "" },
          a
        );
      }
      function Pe(e, r) {
        var _ = Oe(e, r);
        return {
          getCurrencyConfig: function () {
            return _.getCurrencyConfig(e);
          },
          getCountryConfig: function () {
            return _.getCountryConfig(e, r);
          },
          deflateServerNumber: function (r) {
            return ue(r, e);
          },
          parseServerNumber: function (r) {
            return ce(r, e);
          },
          getCurrencySymbol: function () {
            return _.getCurrencySymbol(e);
          },
          getCurrencySymbolPosition: function () {
            return oe(e);
          },
          getNotches: function () {
            return _.getNotches(e, r);
          },
          formatServerNumber: function (r, _) {
            return Ie(ue(r, e), _);
          },
          formatCurrencyNumber: function (r, _) {
            return se(e, r, _);
          },
          formatServerCurrencyNumber: function (r, _) {
            return se(e, ue(r, e), _);
          },
          formatCurrency: function (r, _) {
            return le(e, r, _);
          },
          formatServerCurrency: function (r, _) {
            return le(e, ue(r, e), _);
          },
          compactServerNumber: function (r, _, t) {
            return Ne(ue(r, e), _, t);
          },
          localizeCompactNumber: function (_, t) {
            return de(e, _, t, r);
          },
          localizeCompactServerNumber: function (_, t) {
            return de(e, ue(_, e), t, r);
          },
          compactCurrency: function (_, t, a) {
            return Se(e, _, t, a, r);
          },
          compactServerCurrency: function (_, t, a) {
            return Se(e, ue(_, e), t, a, r);
          },
        };
      }
      var Ce = Pe;
    },
    75362: function (e, r, _) {
      _.r(r),
        _.d(r, {
          ROUTE_NOTIFICATION: function () {
            return t;
          },
        });
      const t = "/user/notifications/:category?";
    },
    41701: function (e, r, _) {
      var t,
        a = Object.defineProperty,
        n = Object.defineProperties,
        E = Object.getOwnPropertyDescriptor,
        o = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertyNames,
        R = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        u = (e, r, _) =>
          r in e
            ? a(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (e[r] = _),
        c = (e, r) => {
          for (var _ in r || (r = {})) T.call(r, _) && u(e, _, r[_]);
          if (R) for (var _ of R(r)) O.call(r, _) && u(e, _, r[_]);
          return e;
        },
        I = (e, r) => n(e, o(r)),
        s = (e, r) => {
          for (var _ in r) a(e, _, { get: r[_], enumerable: !0 });
        },
        l = {};
      s(l, {
        account: () => gE,
        addAddress: () => HE,
        address: () => FE,
        allCategories: () => cn,
        allCategoryPage: () => UE,
        base: () => mE,
        brandsale: () => Pn,
        bundleDeal: () => Po,
        buyerRating: () => wn,
        cart: () => dE,
        cartAddOnDeal: () => an,
        chat: () => ao,
        chatConversation: () => no,
        checkout: () => NE,
        checkoutSignup: () => QE,
        collection: () => Un,
        customKYCTW: () => JE,
        dailyDiscover: () => jn,
        default: () => Go,
        digital_product_voucher_tnc: () => KE,
        doubleElevenProducts: () => zn,
        email: () => hE,
        emptyPage: () => Eo,
        entryCollectionLanding: () => Lo,
        featuredCollectionItems: () => rE,
        featuredCollections: () => eE,
        findSimilarProducts: () => aE,
        flashsale: () => dn,
        fromSameShop: () => tE,
        googlePlayAuthFailed: () => fo,
        groupAndSave: () => mn,
        groupBuyBrowseDeal: () => fn,
        groupBuyDetail: () => Ln,
        groupBuyInvite: () => gn,
        groupBuyMyGroups: () => yn,
        helpCenter: () => hn,
        helpCenterAnswer: () => Dn,
        isvLinkingAuthFailed: () => yo,
        itemRating: () => xn,
        ivsWalletPinAuthFailed: () => ho,
        l3Category: () => On,
        landingPage: () => AE,
        loginByOTP: () => xE,
        loginByPassword: () => wE,
        loginByQR: () => qE,
        mainCategory: () => En,
        mart: () => To,
        martAddOnDeals: () => No,
        martAllProducts: () => lo,
        martBundleDeal: () => po,
        martBuyAgain: () => Ao,
        martCategoriesList: () => Oo,
        martDeals: () => so,
        martFlashSale: () => Ro,
        martL1Category: () => uo,
        martL2Category: () => co,
        martL3Category: () => Io,
        martRecommendationSeeMore: () => Uo,
        martVouchers: () => So,
        me: () => LE,
        myCoins: () => bE,
        mylikes: () => ME,
        mypurchases: () => YE,
        mytransactions: () => vE,
        myvouchers: () => BE,
        officialMall: () => Gn,
        officialMallBrands: () => Bn,
        officialMallBrandsInCategory: () => bn,
        officialMallCategoryPanel: () => Wn,
        officialMallHashtag: () => Hn,
        officialMallJustForYou: () => vn,
        officialMallSearch: () => Fn,
        password: () => DE,
        payment: () => GE,
        pdpAddOnDeal: () => tn,
        personalizedCollection: () => Nn,
        phone: () => yE,
        popularProduct: () => $n,
        product: () => Kn,
        productCollectionLanding: () => go,
        product_label_landing: () => oo,
        profile: () => fE,
        purchaseWithGifts: () => rn,
        purchaseWithPurchase: () => nn,
        redirectFrom3PPUrlConfig: () => Do,
        resetPassword: () => jE,
        resetPasswordByEmail: () => zE,
        returnDropOffDetailUrl: () => ro,
        returnPickUpAddressUrl: () => to,
        returnPickUpDetailUrl: () => eo,
        returnPickUpTimeUrl: () => _o,
        routes: () => A,
        search: () => EE,
        searchAttribute: () => RE,
        searchDropOffBranchesUrl: () => ZE,
        searchIntermediate: () => uE,
        searchKeyword: () => oE,
        searchProductCatalogue: () => OE,
        searchUser: () => TE,
        seoCollection: () => Sn,
        seoL3Category: () => un,
        seoMainCategory: () => on,
        seoOfficialMallCategory: () => Mn,
        seoOfficialMallCategoryPopular: () => Yn,
        seoProduct: () => kn,
        seoProductGroupBuy: () => pn,
        seoProductIntermediate: () => Xn,
        seoSearchHashtag: () => iE,
        seoShop: () => IE,
        seoSubCategory: () => Tn,
        shop: () => cE,
        shopAddOnDeal: () => _n,
        shopBundleDeal: () => Co,
        shopCategoryPage: () => nE,
        shopCollection: () => lE,
        shopCollectionLanding: () => mo,
        shopDetails: () => sE,
        shopRating: () => qn,
        signupByOTP: () => $E,
        smartflashsale: () => Cn,
        subCategory: () => Rn,
        topProducts: () => Qn,
        topProductsInCategory: () => Jn,
        topProductsMoreLists: () => Zn,
        utils: () => fa,
        verifyOTPAndLogin: () => XE,
        voucher_details: () => WE,
        voucher_details_v2: () => VE,
        voucher_landing: () => kE,
        webInternalDevtool: () => io,
        youMayAlsoLike: () => _E,
      }),
        (e.exports =
          ((t = l),
          ((e, r, _, t) => {
            if ((r && "object" == typeof r) || "function" == typeof r)
              for (let n of i(r))
                T.call(e, n) ||
                  n === _ ||
                  a(e, n, {
                    get: () => r[n],
                    enumerable: !(t = E(r, n)) || t.enumerable,
                  });
            return e;
          })(a({}, "__esModule", { value: !0 }), t)));
      var A = {};
      s(A, {
        COMPAT_CLASSIC_EXACT_ROUTES: () => b,
        COMPAT_CLASSIC_INEXACT_ROUTES: () => v,
        COMPAT_HANDLED_EXACT_ROUTES: () => W,
        COMPAT_HANDLED_INEXACT_ROUTES: () => V,
        LEGACY_404_ROUTES: () => F,
        LEGACY_CLASSIC_ROUTES: () => B,
        LEGACY_HANDLED_ROUTES: () => Y,
        LEGACY_ROUTES: () => q,
        MICROSITE_VOUCHER_GRID_TWO_PER_ROW_PREVIEW: () => Qr,
        NEW_404_INEXACT_ROUTES: () => M,
        NEW_404_ROUTES: () => H,
        NEW_NGINX_EXACT_ROUTES: () => D,
        NEW_NGINX_INEXACT_ROUTES: () => G,
        NGINX_ROUTES: () => h,
        OLD_MALL_PARAM: () => re,
        REQUEST_RETURN_UPLOAD_EVIDENCE_PAGE: () => F_,
        RETURN_REFUND_DETAIL_PAGE_WITH_ORDER_ID: () => g_,
        RETURN_REFUND_DETAIL_PAGE_WITH_RETURN_ID: () => f_,
        RETURN_REFUND_DETAIL_RATING_PAGE: () => y_,
        ROUTES_BY_COUNTRY: () => S,
        ROUTE_ADDON_FROM_CART: () => wr,
        ROUTE_ADDON_FROM_PDP: () => xr,
        ROUTE_ADDRESSES: () => qt,
        ROUTE_ADDRESS_LIST_PAGE: () => ua,
        ROUTE_ADDRESS_PAGE: () => ca,
        ROUTE_AFFILIATE_SHOP_INTERMEDIATE_PAGE: () => er,
        ROUTE_ALL_CAMPAIGNS: () => ae,
        ROUTE_ALL_CATEGORIES: () => We,
        ROUTE_ANTI_CRAWLER: () => w.ROUTE_ANTI_CRAWLER,
        ROUTE_ANTI_CRAWLER_ERROR: () => w.ROUTE_ANTI_CRAWLER_ERROR,
        ROUTE_ANTI_CRAWLER_TEST: () => w.ROUTE_ANTI_CRAWLER_TEST,
        ROUTE_AUTHENTICATE_BY_OTP: () => k.ROUTE_AUTHENTICATE_BY_OTP,
        ROUTE_AUTHENTICATE_BY_SHOPEE_PAY: () =>
          k.ROUTE_AUTHENTICATE_BY_SHOPEE_PAY,
        ROUTE_AUTHENTICATE_OAUTH: () => k.ROUTE_AUTHENTICATE_OAUTH,
        ROUTE_AUTHENTICATE_SOCIAL_BIND_ACCOUNT: () =>
          k.ROUTE_AUTHENTICATE_SOCIAL_BIND_ACCOUNT,
        ROUTE_AUTHENTICATION_IVS: () => k.ROUTE_AUTHENTICATION_IVS,
        ROUTE_AUTH_LOGIN: () => $t,
        ROUTE_BANK_ACCOUNTS: () => __,
        ROUTE_BRANCH_RESELECTION_PAGE: () => x.ROUTE_BRANCH_RESELECTION_PAGE,
        ROUTE_BUNDLE_DEAL: () => ne,
        ROUTE_BUNDLE_DEAL_SHOP_LANDING: () => Ee,
        ROUTE_BUYER_RATING: () => gr,
        ROUTE_BUYER_REFUND: () => I_,
        ROUTE_BUYER_WALLET: () => Wr,
        ROUTE_BUYER_WALLET_ANGBAO: () => Vr,
        ROUTE_BUYER_WALLET_PAY: () => Kr,
        ROUTE_BUY_AGAIN: () => mt,
        ROUTE_CAMPAIGN_ENTRY_COLLECTION: () => Pa,
        ROUTE_CART: () => Le,
        ROUTE_CART_YOU_MAY_ALSO_LIKE: () => Tr,
        ROUTE_CATEGORY: () => De,
        ROUTE_CHANGE_PAYMENT_METHOD: () => yt,
        ROUTE_CHANGE_PAYMENT_PREFERENCE: () => Ft,
        ROUTE_CHAT: () => Mt,
        ROUTE_CHAT_CONVERSATION: () => Yt,
        ROUTE_CHECKOUT: () => Ce,
        ROUTE_CHECKOUT_DETAIL: () => Ar,
        ROUTE_CHECKOUT_SIGNUP: () => k.ROUTE_CHECKOUT_SIGNUP,
        ROUTE_COINS_LANDING: () => ht,
        ROUTE_COINS_LANDING_ALIAS: () => Dt,
        ROUTE_COLLECTION: () => Be,
        ROUTE_COLLECTION_LANDING: () => Sa,
        ROUTE_CONTACT_LIST: () => bt,
        ROUTE_CRM_ABANDONED_CART: () => la,
        ROUTE_CRM_DEEP_DISCOUNT_SKU: () => Ia,
        ROUTE_CRM_LIKED_ITEMS: () => Aa,
        ROUTE_CRM_SEARCH_ITEMS: () => Ua,
        ROUTE_CRM_TOP_PRODUCTS: () => sa,
        ROUTE_CUSTOMER_RELATIONS_MANAGEMENT: () => Vt,
        ROUTE_CUSTOM_KYC_TW: () => x.ROUTE_CUSTOM_KYC_TW,
        ROUTE_DAILY_DISCOVER: () => rr,
        ROUTE_DLINK_PAYMENT_MICROFE_PAGE: () => Tt,
        ROUTE_DOUBLE_ELEVEN_PRODUCTS: () => _r,
        ROUTE_DP_PAYMENT_SELECTION: () => Ot,
        ROUTE_DP_VOUCHER_REDEMPTION: () => b_,
        ROUTE_DP_VOUCHER_TNC: () => v_,
        ROUTE_EMAIL_VERIFICATION: () => zt,
        ROUTE_EMPTY: () => wt,
        ROUTE_EXTERNAL_CHECKOUT: () => pe,
        ROUTE_FEATURED_COLLECTIONS: () => or,
        ROUTE_FEATURED_COLLECTION_ITEMS: () => ir,
        ROUTE_FIND_SIMILAR_PRODUCTS: () => ur,
        ROUTE_FOOTER_INFO_BLOCK_PREVIEW: () => La,
        ROUTE_FREE_MONEY: () => E_,
        ROUTE_FREE_MONEY_SHARING: () => o_,
        ROUTE_FREE_SHIPPING_KYC: () => vt,
        ROUTE_FROM_SAME_SHOP: () => Or,
        ROUTE_GAME: () => Bt,
        ROUTE_GASLANDING_PAGE: () => Qe,
        ROUTE_GENERIC_DOWNLOAD_APP: () => Wt,
        ROUTE_GROUP_AND_SAVE: () => Re,
        ROUTE_GROUP_BUY_DETAIL: () => Te,
        ROUTE_GROUP_BUY_INVITE: () => Oe,
        ROUTE_HASHTAG: () => Me,
        ROUTE_HOME: () => St,
        ROUTE_IFRAME_DATA_PIPE: () => st,
        ROUTE_INTEGRATION_ADDRESS_CALLBACK: () =>
          k.ROUTE_INTEGRATION_ADDRESS_CALLBACK,
        ROUTE_INTEGRATION_LINK_LINE: () => k.ROUTE_INTEGRATION_LINK_LINE,
        ROUTE_INTEGRATION_LINK_LINE_MISSION_STICKER: () =>
          k.ROUTE_INTEGRATION_LINK_LINE_MISSION_STICKER,
        ROUTE_INTEGRATION_LINK_LINE_OPEN_APP: () =>
          k.ROUTE_INTEGRATION_LINK_LINE_OPEN_APP,
        ROUTE_INTEGRATION_LINK_LKPP_SSO: () =>
          k.ROUTE_INTEGRATION_LINK_LKPP_SSO,
        ROUTE_INTEGRATION_LINK_META: () => k.ROUTE_INTEGRATION_LINK_META,
        ROUTE_INTEGRATION_LINK_NOW: () => k.ROUTE_INTEGRATION_LINK_NOW,
        ROUTE_INTEGRATION_LINK_SNACK: () => k.ROUTE_INTEGRATION_LINK_SNACK,
        ROUTE_INTEGRATION_LINK_SNACK_CHECKOUT: () =>
          k.ROUTE_INTEGRATION_LINK_SNACK_CHECKOUT,
        ROUTE_INTEGRATION_TW_E_INVOICE: () => k.ROUTE_INTEGRATION_TW_E_INVOICE,
        ROUTE_INTEGRATION_TW_E_INVOICE_NO_UNIVERSAL_LINK: () =>
          k.ROUTE_INTEGRATION_TW_E_INVOICE_NO_UNIVERSAL_LINK,
        ROUTE_INTERMEDIATE_PAGE_INSTALL_V3: () => Ze,
        ROUTE_INTERMEDIATE_PAGE_PROMOTION: () => qe,
        ROUTE_INTERMEDIATE_PAGE_PROMOTION_ABTEST: () => $e,
        ROUTE_INTERMEDIATE_PAGE_PROMOTION_ABTEST_OLD: () => je,
        ROUTE_INTERMEDIATE_PAGE_PROMOTION_OLD: () => Xe,
        ROUTE_INTERMEDIATE_PAGE_WP: () => ze,
        ROUTE_INTERMEDIATE_PAGE_WP_V2: () => Je,
        ROUTE_INVOICE: () => T_,
        ROUTE_ITEM_RATING: () => fr,
        ROUTE_IVS: () => w.ROUTE_IVS,
        ROUTE_IVS_NO_UNIVERSAL_LINK: () => w.ROUTE_IVS_NO_UNIVERSAL_LINK,
        ROUTE_JKO_WALLET: () => kr,
        ROUTE_L3_CATEGORY: () => Fe,
        ROUTE_LANDING_PAGE: () => Jr,
        ROUTE_LANDING_PAGE_ALL_CATEGORIES: () => Zr,
        ROUTE_LANDING_PAGE_ALL_CATEGORIES_HOME: () => e_,
        ROUTE_LANDING_PAGE_AUTO_COLLECTION: () => t_,
        ROUTE_LANDING_PAGE_PERSONALIZED_COLLECTION: () => ve,
        ROUTE_LANDING_PAGE_PRODUCT_LABEL: () => xt,
        ROUTE_LANDING_PAGE_SIBLING_COLLECTION: () => a_,
        ROUTE_LEGACY_COLLECTION: () => be,
        ROUTE_LEGACY_HASHTAG: () => Ye,
        ROUTE_LEGACY_RESET_PASSWORD: () => k.ROUTE_LEGACY_RESET_PASSWORD,
        ROUTE_LEGACY_SIGNUP_BY_OTP: () => k.ROUTE_LEGACY_SIGNUP_BY_OTP,
        ROUTE_LIVE_STREAMING_LOGIN_BY_OTP: () =>
          k.ROUTE_LIVE_STREAMING_LOGIN_BY_OTP,
        ROUTE_LIVE_STREAMING_LOGIN_BY_PASSWORD: () =>
          k.ROUTE_LIVE_STREAMING_LOGIN_BY_PASSWORD,
        ROUTE_LIVE_STREAMING_LOGIN_BY_QR: () =>
          k.ROUTE_LIVE_STREAMING_LOGIN_BY_QR,
        ROUTE_LIVE_STREAMING_SIGNUP_BY_OTP: () =>
          k.ROUTE_LIVE_STREAMING_SIGNUP_BY_OTP,
        ROUTE_LOGIN: () => pt,
        ROUTE_LOGIN_BY_OTP: () => k.ROUTE_LOGIN_BY_OTP,
        ROUTE_LOGIN_BY_PASSWORD: () => k.ROUTE_LOGIN_BY_PASSWORD,
        ROUTE_LOGIN_BY_QR: () => k.ROUTE_LOGIN_BY_QR,
        ROUTE_LOGIN_BY_WHATSAPP_TOKEN: () => k.ROUTE_LOGIN_BY_WHATSAPP_TOKEN,
        ROUTE_LOGIN_SIGNUP_COMBINATION: () => k.ROUTE_LOGIN_SIGNUP_COMBINATION,
        ROUTE_LOGIN_SIGNUP_GUEST_CART: () => k.ROUTE_LOGIN_SIGNUP_GUEST_CART,
        ROUTE_MARKETPLACE_PAYMENT_PAGE: () => me,
        ROUTE_MART_MEMBERSHIP: () => vr,
        ROUTE_MICROSITE: () => oe,
        ROUTE_MY_COINS: () => Gt,
        ROUTE_MY_LIKES: () => Cr,
        ROUTE_NATIVE_OPEN: () => r_,
        ROUTE_NOTIFICATION: () => K.ROUTE_NOTIFICATION,
        ROUTE_NOTIFICATION_SETTINGS: () => dt,
        ROUTE_OFFICIAL_SHOP: () => Ie,
        ROUTE_OFFICIAL_SHOP_BRANDS: () => Ue,
        ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY: () => Se,
        ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL: () => Pe,
        ROUTE_OFFICIAL_SHOP_EDITOR_PREVIEW: () => le,
        ROUTE_OFFICIAL_SHOP_HASHTAG: () => Ke,
        ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU: () => Ae,
        ROUTE_OFFICIAL_SHOP_OLD: () => ce,
        ROUTE_OFFICIAL_SHOP_PREVIEW: () => se,
        ROUTE_OFFICIAL_SHOP_SEARCH: () => Ve,
        ROUTE_OFFICIAL_SHOP_WITH_CATEGORY: () => Ne,
        ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR: () => de,
        ROUTE_ORDER_CANCELLATION_DETAIL: () => Sr,
        ROUTE_ORDER_DETAIL: () => sr,
        ROUTE_ORDER_DETAIL_WSA: () => lr,
        ROUTE_ORDER_LIST: () => Ir,
        ROUTE_ORDER_LIST_PC: () => Pt,
        ROUTE_ORDER_LIST_RW: () => Ct,
        ROUTE_ORDER_RATING: () => yr,
        ROUTE_ORDER_RETURN: () => Ur,
        ROUTE_ORDER_SUCCESS_PAGE: () => Lt,
        ROUTE_ORDER_UNIVERSAL: () => dr,
        ROUTE_PAGE_BUILDER: () => ie,
        ROUTE_PARCEL_LIST: () => n_,
        ROUTE_PAYMENT_CHANNEL_ITEM_PAGE: () => $_,
        ROUTE_PAYMENT_CHANNEL_ITEM_WITH_ID_PAGE: () => j_,
        ROUTE_PAYMENT_GOOGLE_PLAY_AGREEMENT: () => J_,
        ROUTE_PAYMENT_GOOGLE_PLAY_FAILED: () => tt,
        ROUTE_PAYMENT_GOOGLE_PLAY_PIN_VERIFICATION: () => rt,
        ROUTE_PAYMENT_GOOGLE_PLAY_SUCCESS: () => _t,
        ROUTE_PAYMENT_INTEGRATION_AGREEMENT: () => at,
        ROUTE_PAYMENT_INTEGRATION_FAILED: () => ot,
        ROUTE_PAYMENT_INTEGRATION_OTP_VERIFICATION: () => Et,
        ROUTE_PAYMENT_INTEGRATION_PIN_VERIFICATION: () => nt,
        ROUTE_PAYMENT_IVS_ERROR: () => et,
        ROUTE_PAYMENT_IVS_WALLET_PIN: () => Z_,
        ROUTE_PAYMENT_MICROFE_PAGE: () => Rt,
        ROUTE_PAYMENT_POST_PAGE: () => it,
        ROUTE_PAYMENT_REDIRECT_FROM_3PP_PAGE: () => z_,
        ROUTE_PAYMENT_REDIRECT_FROM_BANKING_APP_PAGE: () => Q_,
        ROUTE_PAYMENT_SAFE_PAGE: () => V_,
        ROUTE_PAYMENT_SAFE_PAGE_FIXED_VA: () => K_,
        ROUTE_PAYMENT_SAFE_PAGE_FIXED_VA_WITH_OPTIONINFO: () => k_,
        ROUTE_PAYMENT_SAFE_PAGE_OTP: () => X_,
        ROUTE_PAYMENT_SAFE_PAGE_TOB: () => w_,
        ROUTE_PAYMENT_SAFE_PAGE_TOB_FIXED_VA: () => x_,
        ROUTE_PAYMENT_SAFE_PAGE_TOB_FIXED_VA_WITH_OPTIONINFO: () => q_,
        ROUTE_PAYMENT_SELECITON_PAGE_BASE: () => ut,
        ROUTE_PC_EVENT: () => Xt,
        ROUTE_PC_MY_GROUPS: () => ue,
        ROUTE_POPULAR_PRODUCTS: () => tr,
        ROUTE_PRODUCT_COLLECTION_LANDING: () => da,
        ROUTE_PRODUCT_PAGE: () => X,
        ROUTE_PRODUCT_PAGE_OLD: () => $,
        ROUTE_PROFILE: () => Nt,
        ROUTE_PROGRAM_FORM: () => gt,
        ROUTE_PURCHASE_WITH_GIFTS: () => Xr,
        ROUTE_PURCHASE_WITH_GIFTS_SECTION_PREVIEW: () => jr,
        ROUTE_PURCHASE_WITH_PURCHASE: () => $r,
        ROUTE_QRCODE_LOGIN: () => Kt,
        ROUTE_QRCODE_VERIFICATION: () => kt,
        ROUTE_RATING_REPORT: () => hr,
        ROUTE_RECOMMEND_PRODUCT: () => we,
        ROUTE_RECOMMEND_PRODUCT__NEW: () => xe,
        ROUTE_REFERRAL: () => Hr,
        ROUTE_REFERRAL_ALIAS: () => Mr,
        ROUTE_REFERRAL_WELCOME: () => Yr,
        ROUTE_REFUND_RETURN_PAGE: () => c_,
        ROUTE_REPLY_TO_BUYER_RATING: () => Dr,
        ROUTE_REPLY_TO_SELLER_RATING: () => Gr,
        ROUTE_REPORT_USER: () => pa,
        ROUTE_REPORT_USER_V2: () => ma,
        ROUTE_RESET_PASSWORD: () => k.ROUTE_RESET_PASSWORD,
        ROUTE_RESET_PASSWORD_BY_EMAIL: () => k.ROUTE_RESET_PASSWORD_BY_EMAIL,
        ROUTE_RETURN_INSTRUCTION: () => u_,
        ROUTE_RETURN_LOGISTICS: () => s_,
        ROUTE_RETURN_LOGISTICS_CHANGE_PICKUP_ADDRESS: () => d_,
        ROUTE_RETURN_LOGISTICS_CHANGE_PICKUP_TIME: () => N_,
        ROUTE_RETURN_LOGISTICS_DROP_OFF_DETAIL: () => S_,
        ROUTE_RETURN_LOGISTICS_INFO_BY_ORDERID: () => m_,
        ROUTE_RETURN_LOGISTICS_INFO_BY_RETURNID: () => L_,
        ROUTE_RETURN_LOGISTICS_INPUT_SHIPPING_INFO: () => C_,
        ROUTE_RETURN_LOGISTICS_PICK_UP_DETAIL: () => U_,
        ROUTE_RETURN_LOGISTICS_SEARCH_DROP_OFF_BRANCHES: () => A_,
        ROUTE_RETURN_LOGISTICS_SHIPPING_INFO_SELECT_CARRIER: () => p_,
        ROUTE_RETURN_REQUEST: () => Pr,
        ROUTE_RETURN_REQUEST_ISSUE_SELECTION_PAGE: () => h_,
        ROUTE_RETURN_REQUEST_ITEM_SELECTION_PAGE: () => D_,
        ROUTE_RETURN_REQUEST_SUMMARY_PAGE: () => G_,
        ROUTE_RETURN_SELECT_SHIPPING_OPTION_ROOT: () => P_,
        ROUTE_RETURN_UPLOAD_MISSING_EVIDENCE: () => l_,
        ROUTE_SEARCH: () => ge,
        ROUTE_SEARCH_CATALOGUE: () => He,
        ROUTE_SEARCH_INTERMEDIATE: () => ye,
        ROUTE_SEARCH_SHOP: () => he,
        ROUTE_SEARCH_USER: () => fe,
        ROUTE_SELECT_COURIER: () => O_,
        ROUTE_SELLER_AFFILIATES: () => jt,
        ROUTE_SELLER_AFFLIATES: () => Br,
        ROUTE_SELLER_CENTER_LINK: () => W_,
        ROUTE_SELLER_LOGIN_BY_OTP: () => k.ROUTE_SELLER_LOGIN_BY_OTP,
        ROUTE_SELLER_LOGIN_BY_PASSWORD: () => k.ROUTE_SELLER_LOGIN_BY_PASSWORD,
        ROUTE_SELLER_LOGIN_BY_QR: () => k.ROUTE_SELLER_LOGIN_BY_QR,
        ROUTE_SELLER_MEMBERSHIP: () => br,
        ROUTE_SELLER_SIGNUP_BY_OTP: () => k.ROUTE_SELLER_SIGNUP_BY_OTP,
        ROUTE_SEO_BRAND: () => ke,
        ROUTE_SETTINGS_EMAIL: () => x.ROUTE_SETTINGS_EMAIL,
        ROUTE_SETTINGS_NOTIFICATIONS: () => x.ROUTE_SETTINGS_NOTIFICATIONS,
        ROUTE_SHARE_EXPIRED: () => Ut,
        ROUTE_SHOP: () => j,
        ROUTE_SHOPEE_BUDDY: () => R_,
        ROUTE_SHOPEE_BUDDY_WELCOME: () => i_,
        ROUTE_SHOPEE_FOOD_PAYMENT_SELECITON_PAGE: () => ct,
        ROUTE_SHOPEE_MART: () => ea,
        ROUTE_SHOPEE_MART_ADD_ON_DEALS: () => Ta,
        ROUTE_SHOPEE_MART_ALL_PRODUCTS: () => Ea,
        ROUTE_SHOPEE_MART_BUNDLE_DEALS: () => Ra,
        ROUTE_SHOPEE_MART_BUY_AGAIN: () => oa,
        ROUTE_SHOPEE_MART_CATEGORIES_LIST: () => ra,
        ROUTE_SHOPEE_MART_DEALS: () => na,
        ROUTE_SHOPEE_MART_L1_CATEGORY: () => _a,
        ROUTE_SHOPEE_MART_L2_CATEGORY: () => ta,
        ROUTE_SHOPEE_MART_L3_CATEGORY: () => aa,
        ROUTE_SHOPEE_MART_RECOMMENDATION_SEE_MORE: () => Oa,
        ROUTE_SHOPEE_MART_VOUCHERS: () => ia,
        ROUTE_SHOPEE_PLAY_PAYMENT_SELECITON_PAGE: () => It,
        ROUTE_SHOP_ADD_ON_DEALS: () => qr,
        ROUTE_SHOP_CATEGORY: () => ga,
        ROUTE_SHOP_COLLECTION_LANDING: () => Na,
        ROUTE_SHOP_DETAILS: () => J,
        ROUTE_SHOP_FOLLOWERS: () => x.ROUTE_SHOP_FOLLOWERS,
        ROUTE_SHOP_FOLLOWING: () => x.ROUTE_SHOP_FOLLOWING,
        ROUTE_SHOP_OLD: () => z,
        ROUTE_SHOP_RATING: () => Lr,
        ROUTE_SHOP_USER_VIEW: () => Q,
        ROUTE_SIGNUP_BY_OTP: () => k.ROUTE_SIGNUP_BY_OTP,
        ROUTE_SIGNUP_KYC: () => k.ROUTE_SIGNUP_KYC,
        ROUTE_SLASH_PRICE: () => Fr,
        ROUTE_SUBCATEGORY: () => Ge,
        ROUTE_SVS_PAYMENT_SELECTION: () => At,
        ROUTE_SVS_PAYMENT_SELECTION_DEMO: () => lt,
        ROUTE_S_BROWSER_REDIRECT: () => Ca,
        ROUTE_TOB_AUTHENTICATION: () => k.ROUTE_TOB_AUTHENTICATION,
        ROUTE_TOP_PRODUCTS: () => ar,
        ROUTE_TOP_PRODUCTS_CATEGORY_LANDING: () => nr,
        ROUTE_TOP_PRODUCTS_MORE_LISTS: () => Er,
        ROUTE_TRANSACTION_LIST: () => Nr,
        ROUTE_TW_CUSTOM_KYC: () => ft,
        ROUTE_UNIVERSAL_LINK: () => _e,
        ROUTE_USER_ACCOUNT: () => x.ROUTE_USER_ACCOUNT,
        ROUTE_USER_ADDRESS: () => x.ROUTE_USER_ADDRESS,
        ROUTE_USER_ADD_ADDRESS: () => x.ROUTE_USER_ADD_ADDRESS,
        ROUTE_USER_BASE: () => x.ROUTE_USER_BASE,
        ROUTE_USER_DELETE: () => x.ROUTE_USER_DELETE,
        ROUTE_USER_DNI: () => x.ROUTE_USER_DNI,
        ROUTE_USER_EDIT_ADDRESS: () => x.ROUTE_USER_EDIT_ADDRESS,
        ROUTE_USER_EMAIL: () => x.ROUTE_USER_EMAIL,
        ROUTE_USER_GDPR: () => x.ROUTE_USER_GDPR,
        ROUTE_USER_GDPR_COOKIE_SETTING: () => x.ROUTE_USER_GDPR_COOKIE_SETTING,
        ROUTE_USER_GDPR_COOKIE_SETTING_GUEST: () =>
          x.ROUTE_USER_GDPR_COOKIE_SETTING_GUEST,
        ROUTE_USER_KYC: () => x.ROUTE_USER_KYC,
        ROUTE_USER_LOCATION_SELECTOR: () => x.ROUTE_USER_LOCATION_SELECTOR,
        ROUTE_USER_ME: () => x.ROUTE_USER_ME,
        ROUTE_USER_PASSWORD: () => x.ROUTE_USER_PASSWORD,
        ROUTE_USER_PAYMENT: () => Z,
        ROUTE_USER_PHONE: () => x.ROUTE_USER_PHONE,
        ROUTE_USER_PROFILE: () => x.ROUTE_USER_PROFILE,
        ROUTE_USER_SELLING_POINT: () => Ht,
        ROUTE_USER_SETTING: () => x.ROUTE_USER_SETTING,
        ROUTE_USER_SETTING_LANGUAGE: () => x.ROUTE_USER_SETTING_LANGUAGE,
        ROUTE_USER_SETTING_LANGUAGE_LEGACY: () =>
          x.ROUTE_USER_SETTING_LANGUAGE_LEGACY,
        ROUTE_USER_SETTING_LEGACY: () => x.ROUTE_USER_SETTING_LEGACY,
        ROUTE_USER_SETTING_NOTIFICATION: () =>
          x.ROUTE_USER_SETTING_NOTIFICATION,
        ROUTE_USER_SETTING_NOTIFICATION_EMAIL: () =>
          x.ROUTE_USER_SETTING_NOTIFICATION_EMAIL,
        ROUTE_USER_SETTING_NOTIFICATION_SMS: () =>
          x.ROUTE_USER_SETTING_NOTIFICATION_SMS,
        ROUTE_USER_SETTING_NOTIFICATION_WHATSAPP: () =>
          x.ROUTE_USER_SETTING_NOTIFICATION_WHATSAPP,
        ROUTE_USER_SETTING_NOTIFICATION_ZALO: () =>
          x.ROUTE_USER_SETTING_NOTIFICATION_ZALO,
        ROUTE_USER_SETTING_PRIVACY: () => x.ROUTE_USER_SETTING_PRIVACY,
        ROUTE_USER_TAX_ID: () => x.ROUTE_USER_TAX_ID,
        ROUTE_VERIFY_ACCOUNT_SELLER_MAIN_SUB: () =>
          x.ROUTE_VERIFY_ACCOUNT_SELLER_MAIN_SUB,
        ROUTE_VERIFY_BY_EMAIL: () => w.ROUTE_VERIFY_BY_EMAIL,
        ROUTE_VERIFY_BY_EMAIL_LINK_RECEIVER: () =>
          w.ROUTE_VERIFY_BY_EMAIL_LINK_RECEIVER,
        ROUTE_VERIFY_BY_EMAIL_LINK_SENDER: () =>
          w.ROUTE_VERIFY_BY_EMAIL_LINK_SENDER,
        ROUTE_VERIFY_BY_LINK_RECEIVER: () => w.ROUTE_VERIFY_BY_LINK_RECEIVER,
        ROUTE_VERIFY_BY_LINK_SENDER: () => w.ROUTE_VERIFY_BY_LINK_SENDER,
        ROUTE_VERIFY_BY_OTP: () => w.ROUTE_VERIFY_BY_OTP,
        ROUTE_VERIFY_BY_OTP_UNIVERSAL_LINK: () =>
          w.ROUTE_VERIFY_BY_OTP_UNIVERSAL_LINK,
        ROUTE_VERIFY_BY_PASSWORD: () => w.ROUTE_VERIFY_BY_PASSWORD,
        ROUTE_VERIFY_BY_QR: () => w.ROUTE_VERIFY_BY_QR,
        ROUTE_VERIFY_BY_SHOPEE_PAY: () => w.ROUTE_VERIFY_BY_SHOPEE_PAY,
        ROUTE_VERIFY_CAPTCHA: () => w.ROUTE_VERIFY_CAPTCHA,
        ROUTE_VERIFY_CAPTCHA_FEATURE: () => w.ROUTE_VERIFY_CAPTCHA_FEATURE,
        ROUTE_VERIFY_CAPTCHA_POPUP: () => w.ROUTE_VERIFY_CAPTCHA_POPUP,
        ROUTE_VERIFY_OTP: () => ee,
        ROUTE_VOUCHER_DETAILS: () => M_,
        ROUTE_VOUCHER_DETAILS_OLD: () => H_,
        ROUTE_VOUCHER_LANDING: () => B_,
        ROUTE_VOUCHER_PREVIEW: () => Y_,
        ROUTE_VOUCHER_WALLET: () => cr,
        ROUTE_WEB_INTERNAL_BANNERSDK: () => Jt,
        ROUTE_WEB_INTERNAL_COMPONENT_BUILDER: () => Zt,
        ROUTE_WEB_INTERNAL_DEVTOOL: () => Qt,
        ROUTE_WEB_TO_APP: () => te,
        ROUTE_WELCOME_PACKAGE: () => pr,
        ROUTE_WELCOME_PACKAGE_ALIAS: () => mr,
        ROUTE_YOU_MAY_ALSO_LIKE: () => Rr,
        SHOP_PAGE_SELLER_VOUCHER_PREVIEW: () => zr,
        getRegionalRoute: () => f,
        getRouteByCountry: () => g,
        getSimilarRoutesByCountry: () => L,
      });
      var U = _(50946),
        S = {
          FLASH_SALE: "FLASH_SALE",
          BRAND_SALE: "BRAND_SALE",
          ROUTE_COIN_LANDING: "ROUTE_COIN_LANDING",
          MART_FLASH_SALE: "MART_FLASH_SALE",
          ROUTE_OFFICIAL_SHOP: "ROUTE_OFFICIAL_SHOP",
          ROUTE_OFFICIAL_SHOP_WITH_CATEGORY:
            "ROUTE_OFFICIAL_SHOP_WITH_CATEGORY",
          ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU: "ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU",
          ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR:
            "ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR",
          ROUTE_OFFICIAL_SHOP_SEARCH: "ROUTE_OFFICIAL_SHOP_SEARCH",
          ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY:
            "ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY",
          ROUTE_OFFICIAL_SHOP_BRANDS: "ROUTE_OFFICIAL_SHOP_BRANDS",
          ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL:
            "ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL",
        },
        N = {
          default: "/mall",
          BR: "/oficial",
          CO: "/oficiales",
          MX: "/oficiales",
          CL: "/oficiales",
        },
        d = {
          [S.ROUTE_OFFICIAL_SHOP]: "",
          [S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY]:
            "/:categoryName(.+)-cat.:categoryId(-?\\d+)",
          [S.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU]: "/just-for-you",
          [S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR]:
            "/:categoryName(.+)-cat.:categoryId(-?\\d+)/popular",
          [S.ROUTE_OFFICIAL_SHOP_SEARCH]: "/search",
          [S.ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY]: "/brands/:categoryId",
          [S.ROUTE_OFFICIAL_SHOP_BRANDS]: "/brands",
          [S.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL]: "/categories",
        };
      function P(e) {
        const r = { default: "" };
        return (
          Object.entries(N).forEach(([_, t]) => {
            r[_] = `${t}${d[e]}`;
          }),
          (r.similar = [r.default]),
          r
        );
      }
      var C = {
          [S.FLASH_SALE]: I(c({ default: "/flash_sale" }, U.FLASH_SALE_URL), {
            similar: m(
              { underscored: !0, concatenated: !0, trailing: !0 },
              "flash sale",
              "flash sales",
              "flash deal",
              "flash deals",
              "shocking sale"
            ),
          }),
          [S.BRAND_SALE]: I(
            c({ default: "/mall-flash-sale" }, U.BRAND_SALE_URL),
            {
              similar: m(
                { underscored: !0, concatenated: !0, trailing: !0 },
                "brand sale",
                "brands sale",
                "mall flash sale"
              ),
            }
          ),
          [S.ROUTE_COIN_LANDING]: {
            default: "shopee-coins",
            ID: "koin-shopee",
          },
          [S.MART_FLASH_SALE]: I(
            c({ default: "/supermarket/flash-sale" }, U.MART_FLASH_SALE_URL),
            {
              similar: m(
                {
                  prefix: "/supermarket",
                  underscored: !0,
                  concatenated: !0,
                  trailing: !0,
                  dashed: !0,
                },
                "flash sale",
                "flash sales",
                "flash deal",
                "flash deals",
                "shocking sale"
              ),
            }
          ),
          [S.ROUTE_OFFICIAL_SHOP]: P(S.ROUTE_OFFICIAL_SHOP),
          [S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY]: P(
            S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY
          ),
          [S.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU]: P(
            S.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU
          ),
          [S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR]: P(
            S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR
          ),
          [S.ROUTE_OFFICIAL_SHOP_SEARCH]: P(S.ROUTE_OFFICIAL_SHOP_SEARCH),
          [S.ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY]: P(
            S.ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY
          ),
          [S.ROUTE_OFFICIAL_SHOP_BRANDS]: P(S.ROUTE_OFFICIAL_SHOP_BRANDS),
          [S.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL]: P(
            S.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL
          ),
        },
        p = [];
      function m(e, ...r) {
        const _ = [],
          t = (function (e) {
            if (0 === e.length || "/" !== e[e.length - 1]) return e;
            return e.substring(0, e.length - 1);
          })(y(e.prefix || ""));
        return (
          r.map((r) => {
            e.dashed && _.push(`${t}/${r.replace(/ /g, "-")}`),
              e.underscored && _.push(`${t}/${r.replace(/ /g, "_")}`),
              e.concatenated && _.push(`${t}/${r.replace(/ /g, "")}`);
          }),
          _.map((r) => {
            e.trailing && _.push(`${r}/`);
          }),
          _
        );
      }
      function L(e, r) {
        const _ = C[r];
        return (_ && _.similar && _.similar.filter((_) => _ !== g(r)(e))) || p;
      }
      var g = (e) => {
        const r = C[e];
        return (e) => (r && (r[e] || r.default)) || "";
      };
      function f(e) {
        return (r) => {
          if (!e || !C.hasOwnProperty(e)) return "";
          const _ = C[e];
          if (!r) return y(_.default);
          const t = _[r];
          return y(t || _.default);
        };
      }
      function y(e) {
        return 0 === e.length || "/" === e[0] ? e : `/${e}`;
      }
      var h = ["/web", "/localservice"],
        D = ["/hc/:articlePath"],
        G = ["/digital-product", "/produk-digital", "/help_center"],
        F = [
          "/feeds",
          "/home_just_for_you_api",
          "/home2",
          "/just_for_you",
          "/monitor",
          "/recommend-item",
          "/recommendation",
          "/test_metrics",
          "/test",
          "/test1",
          "/timeline",
          "/trending_hashtags",
          "/trending-shops",
          "/hashtags",
          "/brand_list",
          "/buyer",
          "/categories",
          "/category-item",
          "/contact-us",
          "/is_short_url",
          "/official-shop-landing-in-tab",
          "/official-shop-landing",
          "/official-shop",
          "/user_selling_points",
          "/universal-error",
          "/airpay_api_proxy",
          "/local_core_api",
          "/search-filter",
          "/healthcheck_core",
          "/jam",
          "/oops",
          "/tracking_proxy",
          "/addresses",
        ],
        H = [
          "/buyer/payment/:paymentId(\\d+)/",
          "/buyer/return/:returnId(\\d+)/select_bank_account",
        ],
        M = [
          "/buyer/return/logistics/select_address",
          "/buyer/wallet/credit_card/post",
        ],
        Y = [
          "/edit_addresses",
          "/Official-Shops",
          "/search-item",
          "/search-user",
        ],
        B = ["/item_data", "/captcha", "/bridge_cmd"],
        b = ["/buyer/seen_item", "/func/app_select", "/seller/trans/:orderId"],
        v = [
          "/buyer/airpay_wallet/",
          "/buyer/bankaccount/",
          "/buyer/mybankaccount/",
          "/buyer/payment/",
          "/buyer/return/",
          "/buyer/wallet/",
          "/seller/verification/",
        ],
        W = ["/coins/expiry"],
        V = ["/seller/portal/"],
        K = _(75362),
        k = _(90290),
        w = _(12754),
        x = _(63275),
        q = [...F, ...B, ...Y, ...h, "/addresses", "/coins", "/help_center"],
        X = "/:seoName(.+)-i\\.:shopId(\\d+)\\.:itemId(\\d+)",
        $ = "/product/:shopId(\\d+)/:itemId(\\d+)",
        j = "/:username([a-zA-Z0-9_.]{2,30})",
        z = "/shop/:shopId(\\d+)",
        Q = "/shop/user/:userId(\\d+)",
        J = "/shop/:shopId(\\d+)/details",
        Z = "/user/account/payment",
        ee = "/otp/verify",
        re = "__classic__=1",
        _e = "/universal-link/:path?",
        te = "/web-to-app",
        ae = "/campaigns",
        ne = "/bundle-deal/:bundleDealId(\\d+)",
        Ee = "/bundle-deal-shop-landing/:shopId(\\d+)",
        oe = "/m/:pathname(.+)",
        ie = "/p/:pathname(.+)",
        Re = "/group-and-save/:tabType?",
        Te = "/user/groups/:groupId(\\d+)",
        Oe = "/group-buy-invite/:groupId(\\d+)",
        ue = "/user/groups",
        ce = "/Official-Shops",
        Ie = "/mall",
        se = `/__preview__${Ie}`,
        le = `${Ie}/preview`,
        Ae = `${Ie}/just-for-you`,
        Ue = `${Ie}/brands`,
        Se = `${Ue}/:categoryId(-?\\d+)`,
        Ne = `${Ie}/:categoryName(.+)-cat.:categoryId(-?\\d+)`,
        de = `${Ne}/popular`,
        Pe = `${Ie}/categories`,
        Ce = "/checkout",
        pe = "/marketplace-checkout",
        me = "/mpp/:checkoutId",
        Le = "/cart",
        ge = "/search",
        fe = "/search_user",
        ye = "/search_intermediate",
        he = "/shop/:shopId(\\d+)/search",
        De = "/:categoryName([^/]+)-cat\\.:categoryId(\\d+)",
        Ge =
          "/:categoryName([^/]+)-cat\\.:categoryId(\\d+)\\.:subCategoryId(\\d+)",
        Fe =
          "/:categoryName([^/]+)-cat\\.:categoryId(\\d+)\\.:subCategoryId(\\d+)\\.:l3CategoryId(\\d+)",
        He = "/search-catalogue",
        Me = "/:hashtag(.+)-tag",
        Ye = "/tag/:hashtag(.+)",
        Be = "/:collection(.+)-col.:collectionId(\\d+)",
        be = "/collections/:collectionId(\\d+)",
        ve = "/l/personalized_collection/:collectionId(\\d+)",
        We = "/all_categories",
        Ve = `${Ie}${ge}`,
        Ke = `${Ve}${Me}`,
        ke = "/list/:brand?/:category?/:attribute?",
        we = `/s/${X}`,
        xe = `${X}/similar`,
        qe = `${X}/:pageType(promotion|affiliate)`,
        Xe = `${$}/:pageType(promotion|affiliate)`,
        $e = `${X}/promotion/:pageType(main|card|list)`,
        je = `${$}/promotion/:pageType(main|card|list)`,
        ze = "/intermediate/welcome_package",
        Qe = "/lp/:shopId/:productId",
        Je = "/intermediate/welcome_package_v2",
        Ze = "/intermediate/install_v3",
        er = `${X}/affiliate`,
        rr = "/daily_discover",
        _r = "/double_eleven_big_sale/:pageNumber(\\d+)?",
        tr = "/popular_products",
        ar = "/top_products",
        nr = "/top_products/:categoryName([^/]+)-cat\\.:categoryId(\\d+)",
        Er = "/top_products_more_lists",
        or = "/featured_collections",
        ir = "/featured_collection_items",
        Rr = "/you_may_also_like/:shopId(\\d+)/:itemId(\\d+)/:categoryId(\\d+)",
        Tr = "/cart/recommend",
        Or = "/from_same_shop/:shopId(\\d+)/:itemId(\\d+)/:categoryId(\\d+)",
        ur = "/find_similar_products",
        cr = "/user/voucher-wallet",
        Ir = "/user/purchase/",
        sr = "/user/purchase/order/:orderId",
        lr = "/order/detail/",
        Ar = "/user/purchase/checkout/:checkoutId",
        Ur = "/return",
        Sr = "/user/purchase/cancellation/:orderId(\\d+)",
        Nr = "/user/transaction",
        dr = "/order/universal",
        Pr = "/return/request/:orderId(\\d+)",
        Cr = "/user/my-likes",
        pr = "/welcome-package",
        mr = "/welcome",
        Lr = "/shop/:shopid(\\d+)/rating",
        gr = "/buyer/:userid(\\d+)/rating",
        fr = "/shop/:shopid(\\d+)/item/:itemid(\\d+)/rating",
        yr = "/rating",
        hr = "/rating/report",
        Dr = "/shop/rating/reply_to_buyer/:cmtId(\\d+)",
        Gr = "/shop/rating/reply_to_seller/:cmtId(\\d+)",
        Fr = "/slash-price/:id?",
        Hr = "/referral-program",
        Mr = "/referral",
        Yr = "/referral-welcome",
        Br = "/seller-affiliates",
        br = "/seller-membership/home/:shopId?",
        vr = "/supermarket-membership/home/:shopId?",
        Wr = "/wallet/:action",
        Vr = "/wallet/angbao",
        Kr = "/wallet/pay",
        kr = "/jko-wallet/:action",
        wr =
          "/addon-deal-cart-selection/:dealId(\\d+)/:mainItemId(\\d+)/:shopId(\\d+)?/:addOnGroupId?",
        xr =
          "/addon-deal-selection/:dealId(\\d+)/:mainItemId(\\d+)/:shopId(\\d+)?",
        qr =
          "/shop-add-on-deals/:shopId(\\d+)/:addOnDealId(\\d+)/:mainItemId(\\d+)",
        Xr = "/purchase-with-gifts/:dealId(\\d+)/:itemId(\\d+)?/:shopId(\\d+)?",
        $r =
          "/purchase-with-purchase/:addOnDealId(\\d+)/:shopId(\\d+)/:mainItemId(\\d+)?",
        jr = "/purchase-with-gifts-section-preview",
        zr = "/promotion/admin/seller-voucher-preview",
        Qr = "/promotion/admin/microsite-voucher-grid-2-preview",
        Jr = "/l/:templateType/:pageName",
        Zr = Jr.replace(":templateType", "category"),
        e_ = Zr.replace(":pageName", "home"),
        r_ = "/native",
        __ = "/(bank-accounts|user/account/payment)/:action?",
        t_ = Jr.replace(":templateType", "collection2"),
        a_ = "/l/sibling_collection/:groupId(\\d+)/:collectionId(\\d+)",
        n_ = "/buyer/logistics/info/:shopId(\\d+)/:orderId(\\d+)",
        E_ = "/program/free-money",
        o_ = "/program/free-money/sharing",
        i_ = "/program/shopee-buddy-welcome",
        R_ = "/program/shopee-buddy",
        T_ = "/invoice/:order_id",
        O_ = "/buyer/logistics/return/:returnId(\\d+)",
        u_ = "/buyer/logistics/return/:returnId(\\d+)/instruction",
        c_ = "/refund-return",
        I_ = "/buyer/return/view/orderid/:orderId",
        s_ = "/return",
        l_ = "/return/upload-missing-evidence/:returnId(\\d+)",
        A_ = "/return/search-drop-off-branches/:channelId(\\d+)",
        U_ = "/return/pick-up-detail/:returnId(\\d+)",
        S_ = "/return/drop-off-detail/:returnId(\\d+)",
        N_ = "/return/pick-up-time/:returnId(\\d+)",
        d_ = "/return/pick-up-address/:returnId(\\d+)",
        P_ = "/return/select-shipping-option/:returnId(\\d+)",
        C_ = "/return/input-shipping-info/:returnId(\\d+)?",
        p_ = "/return/input-shipping-info/select-carrier/",
        m_ = "/return/logistics_info/orderid/:orderId(\\d+)?",
        L_ = "/return/logistics_info/returnid/:returnId(\\d+)?",
        g_ = "/return/detail/orderid/:orderId(\\d+)",
        f_ = "/return/detail/returnid/:returnId(\\d+)",
        y_ = `${f_}/rating`,
        h_ = "/return/request/option/:orderId",
        D_ = "/return/request/select/:orderId",
        G_ = "/return/request/detail/:orderId",
        F_ = "/return/upload-missing-evidence/:returnId(\\d+)",
        H_ = "/voucher-details/:voucherCode/:promotionId(\\d+)/:signature",
        M_ = "/voucher/details",
        Y_ = "/promotion/admin/voucher-preview",
        B_ = "/search",
        b_ = "/dp-voucher",
        v_ = "/digital-product/rnweb/dp-order/VOUCHER_T_C",
        W_ = "/seller-link/:path",
        V_ = "/payment/:payment_id",
        K_ = "/payment/fixed_account/:provider_category/:consumer_category",
        k_ =
          "/payment/fixed_account/:provider_category/:consumer_category/:option_info",
        w_ = "/payment/tob/:payment_id",
        x_ = "/payment/tob/fixed_account/:provider_category/:consumer_category",
        q_ =
          "/payment/tob/fixed_account/:provider_category/:consumer_category/:option_info",
        X_ = "/payment/otp/:payment_id",
        $_ = "/payment/channel_item/:action/:channel_id",
        j_ = "/payment/channel_item/:action/:channel_id/:channel_item_id",
        z_ = "/payment/redirect_from_third_party/:payment_id",
        Q_ = "/payment/redirect_from_banking_app",
        J_ = "/payment/google-play/agreement",
        Z_ = "/payment/ivs/wallet-pin",
        et = "/payment/ivs/failed/:error",
        rt = "/payment/google-play/wallet-pin",
        _t = "/payment/google-play/success",
        tt = "/payment/google-play/failed/:error",
        at = "/payment/linking/agreement",
        nt = "/payment/linking/pin-verification",
        Et = "/payment/linking/otp-verification",
        ot = "/payment/linking/failed/:error",
        it = "/payment/post",
        Rt = "/payment",
        Tt = "/dlink/payment",
        Ot = "/dp-payment-selection",
        ut = "/payment-selection-page",
        ct = "/payment-selection-page/shopee-food",
        It = "/payment-selection-page/shopee-play",
        st = "/iframe-data-pipe",
        lt = "/svs-payment-selection-demo",
        At = "/svs-payment-selection",
        Ut = "/program/share-expired",
        St = "/",
        Nt = "/user/account/profile",
        dt = "/user/settings/notifications",
        Pt = "/user/purchase",
        Ct = "/me",
        pt = "/buyer/login",
        mt = "/buy-again",
        Lt = "/order/success/:orderId",
        gt = "/program/form/:formId",
        ft = "/user/account/custom-kyc-tw",
        yt = "/buyer/payment/:checkoutId(\\d+)/select/",
        ht = "/shopee-coins/",
        Dt = "/koin-shopee/",
        Gt = "/user/coin",
        Ft = "/user/payment/preference",
        Ht = "/user_selling_points/",
        Mt = "/chat",
        Yt = "/chat/conversation",
        Bt = "/game",
        bt = "/contact-list/",
        vt = "/kyc/free-shipping",
        Wt = "/generic-download/app",
        Vt = "/dailydealslanding",
        Kt = "/qrcode-login",
        kt = "/qrcode-verification",
        wt = "/empty-page",
        xt = "/l/product_label/:labelId",
        qt = "/rn/buyer_address_list/",
        Xt = "/pc_event",
        $t = "/auth/auth-login",
        jt = "/seller-affiliates",
        zt = "/email_verification",
        Qt = "/__internal/devtool",
        Jt = "/__internal/bannersdk",
        Zt = "/__internal/componentbuilder",
        ea = "/supermarket",
        ra =
          "/supermarket/:categoryName([^/]*)-list-cat\\.:l1CategoryId(-?\\d+)",
        _a = "/supermarket/:categoryName([^/]+)-cat\\.:l1CategoryId(-?\\d+)",
        ta =
          "/supermarket/:categoryName([^/]+)-cat\\.:l1CategoryId(\\d+)\\.:l2CategoryId(\\d+)",
        aa =
          "/supermarket/:categoryName([^/]+)-cat\\.:l1CategoryId(\\d+)\\.:l2CategoryId(\\d+)\\.:l3CategoryId(\\d+)",
        na = "/supermarket/deals",
        Ea = "/supermarket/all-products",
        oa = "/supermarket/buy-again",
        ia = "/supermarket/vouchers",
        Ra = "/supermarket/bundle-deals",
        Ta = "/supermarket/add-on-deals",
        Oa = "/supermarket/recommendation",
        ua = "/address/list",
        ca = "/address/edit",
        Ia = "/newuserlanding_sku",
        sa = "/newuserlanding_tp",
        la = "/abandonedcartlanding",
        Aa = "/likeditemslanding",
        Ua = "/search_landing",
        Sa = "/clp/:collectionType/:collectionId",
        Na = Sa.replace(":collectionType", "shopcollections"),
        da = Sa.replace(":collectionType", "collections"),
        Pa = Sa.replace(":collectionType", "entrycollections"),
        Ca = "/s/browser/:path*",
        pa = "/shop/:shopId/report",
        ma = "/report/:userId",
        La = "/__preview__/footer-info-block",
        ga = "/shop/:shopId(\\d+)/category",
        fa = {};
      s(fa, {
        eachRouteParams: () => ka,
        fillRouteParams: () => wa,
        seoText: () => ha,
      });
      var ya = _(42195);
      function ha(e) {
        return e
          .trim()
          .replace(/[\s<>#%"{}|\\^[\]`;/?:@&=+$,]/g, "-")
          .replace(/\0/g, "")
          .replace(/-+/g, "-");
      }
      var Da = (e) => I(c({}, e), { optional: !0 }),
        Ga = { formatFromUrl: (e) => String(e), formatToUrl: (e) => ha(e) },
        Fa = { formatFromUrl: (e) => String(e), formatToUrl: (e) => String(e) },
        Ha = Da(Fa),
        Ma = {
          formatFromUrl: (e) => String(e),
          formatToUrl: (e) => e.toLowerCase(),
        },
        Ya = Da(Ma),
        Ba = {
          formatFromUrl: (e) => parseInt(e, 10),
          formatToUrl: (e) => String(e),
        },
        ba = Da(Ba),
        va = Da({
          formatFromUrl: (e) => parseFloat(e),
          formatToUrl: (e) => String(e),
        }),
        Wa =
          (Da({
            formatFromUrl: (e) => JSON.parse(e),
            formatToUrl: (e) => JSON.stringify(e),
          }),
          Da({
            formatFromUrl: (e) => !0 === e || "true" === e || "1" === e,
            formatToUrl: (e) =>
              !e || ("boolean" != typeof e && 1 !== e) ? "false" : "true",
          })),
        Va = Da({
          formatFromUrl: (e) =>
            (0, ya.parseQueryStringArray)(e).map(decodeURIComponent),
          formatToUrl: (e) =>
            (e || [])
              .filter((e) => null != e)
              .map(encodeURIComponent)
              .join(","),
        }),
        Ka = Da({
          formatFromUrl: (e) =>
            (0, ya.parseQueryStringArray)(e)
              .map((e) => parseInt(e, 10))
              .filter((e) => "number" == typeof e && isFinite(e)),
          formatToUrl: (e) =>
            (e || [])
              .filter((e) => "number" == typeof e && isFinite(e))
              .join(","),
        }),
        ka = (e, r) =>
          e.replace(/:([a-zA-Z]\w*)(\(([^)]*)\))?(\?)?/g, (e, ..._) => {
            const [t, , a, n] = _;
            return r(t, { reg: a, isOptional: !!n });
          }),
        wa = (e, r) =>
          ka(e, (_, { reg: t, isOptional: a }) => {
            const n = r[_];
            if (a && null == n) return "";
            if (t) {
              new RegExp(t).test(n) ||
                console.warn(
                  `[@shopee_common/url] ${_} (${n}) cannot match regular expression of route (${e})!`
                );
            }
            return String(n);
          }),
        xa = (e) => {
          const r = {};
          return (
            ka(e, (e, { reg: _, isOptional: t }) => {
              const a = ((e) =>
                /^-?\??(\\d|\[[\d-]+\])\+?$/.test(e) ? Ba : Ga)(_ || "");
              return (r[e] = t ? Da(a) : a), "";
            }),
            { route: e, routeParams: r }
          );
        },
        qa = {};
      s(qa, {
        account: () => gE,
        addAddress: () => HE,
        address: () => FE,
        allCategories: () => cn,
        allCategoryPage: () => UE,
        base: () => mE,
        brandsale: () => Pn,
        bundleDeal: () => Po,
        buyerRating: () => wn,
        cart: () => dE,
        cartAddOnDeal: () => an,
        chat: () => ao,
        chatConversation: () => no,
        checkout: () => NE,
        checkoutSignup: () => QE,
        collection: () => Un,
        customKYCTW: () => JE,
        dailyDiscover: () => jn,
        digital_product_voucher_tnc: () => KE,
        doubleElevenProducts: () => zn,
        email: () => hE,
        emptyPage: () => Eo,
        entryCollectionLanding: () => Lo,
        featuredCollectionItems: () => rE,
        featuredCollections: () => eE,
        findSimilarProducts: () => aE,
        flashsale: () => dn,
        fromSameShop: () => tE,
        googlePlayAuthFailed: () => fo,
        groupAndSave: () => mn,
        groupBuyBrowseDeal: () => fn,
        groupBuyDetail: () => Ln,
        groupBuyInvite: () => gn,
        groupBuyMyGroups: () => yn,
        helpCenter: () => hn,
        helpCenterAnswer: () => Dn,
        isvLinkingAuthFailed: () => yo,
        itemRating: () => xn,
        ivsWalletPinAuthFailed: () => ho,
        l3Category: () => On,
        landingPage: () => AE,
        loginByOTP: () => xE,
        loginByPassword: () => wE,
        loginByQR: () => qE,
        mainCategory: () => En,
        mart: () => To,
        martAddOnDeals: () => No,
        martAllProducts: () => lo,
        martBundleDeal: () => po,
        martBuyAgain: () => Ao,
        martCategoriesList: () => Oo,
        martDeals: () => so,
        martFlashSale: () => Ro,
        martL1Category: () => uo,
        martL2Category: () => co,
        martL3Category: () => Io,
        martRecommendationSeeMore: () => Uo,
        martVouchers: () => So,
        me: () => LE,
        myCoins: () => bE,
        mylikes: () => ME,
        mypurchases: () => YE,
        mytransactions: () => vE,
        myvouchers: () => BE,
        officialMall: () => Gn,
        officialMallBrands: () => Bn,
        officialMallBrandsInCategory: () => bn,
        officialMallCategoryPanel: () => Wn,
        officialMallHashtag: () => Hn,
        officialMallJustForYou: () => vn,
        officialMallSearch: () => Fn,
        password: () => DE,
        payment: () => GE,
        pdpAddOnDeal: () => tn,
        personalizedCollection: () => Nn,
        phone: () => yE,
        popularProduct: () => $n,
        product: () => Kn,
        productCollectionLanding: () => go,
        product_label_landing: () => oo,
        profile: () => fE,
        purchaseWithGifts: () => rn,
        purchaseWithPurchase: () => nn,
        redirectFrom3PPUrlConfig: () => Do,
        resetPassword: () => jE,
        resetPasswordByEmail: () => zE,
        returnDropOffDetailUrl: () => ro,
        returnPickUpAddressUrl: () => to,
        returnPickUpDetailUrl: () => eo,
        returnPickUpTimeUrl: () => _o,
        search: () => EE,
        searchAttribute: () => RE,
        searchDropOffBranchesUrl: () => ZE,
        searchIntermediate: () => uE,
        searchKeyword: () => oE,
        searchProductCatalogue: () => OE,
        searchUser: () => TE,
        seoCollection: () => Sn,
        seoL3Category: () => un,
        seoMainCategory: () => on,
        seoOfficialMallCategory: () => Mn,
        seoOfficialMallCategoryPopular: () => Yn,
        seoProduct: () => kn,
        seoProductGroupBuy: () => pn,
        seoProductIntermediate: () => Xn,
        seoSearchHashtag: () => iE,
        seoShop: () => IE,
        seoSubCategory: () => Tn,
        shop: () => cE,
        shopAddOnDeal: () => _n,
        shopBundleDeal: () => Co,
        shopCategoryPage: () => nE,
        shopCollection: () => lE,
        shopCollectionLanding: () => mo,
        shopDetails: () => sE,
        shopRating: () => qn,
        signupByOTP: () => $E,
        smartflashsale: () => Cn,
        subCategory: () => Rn,
        topProducts: () => Qn,
        topProductsInCategory: () => Jn,
        topProductsMoreLists: () => Zn,
        verifyOTPAndLogin: () => XE,
        voucher_details: () => WE,
        voucher_details_v2: () => VE,
        voucher_landing: () => kE,
        webInternalDevtool: () => io,
        youMayAlsoLike: () => _E,
      });
      var Xa = _(42195),
        $a = (e) => (r, _) => {
          const t = c({}, _);
          if (r && "object" == typeof r)
            for (const a in r) {
              const n = r[a],
                E = _[a];
              (n && n.optional && null == E) || (t[a] = e(n, E));
            }
          return t;
        },
        ja = $a((e, r) => {
          const _ = e && e.formatToUrl;
          return void 0 === r ? "" : "function" == typeof _ ? _(r) : String(r);
        }),
        za = $a((e, r) => {
          if (e) {
            const { formatFromUrl: _ } = e;
            if (void 0 === r) return r;
            if ("function" == typeof _) return _(r);
          }
          return r;
        }),
        Qa =
          ({ route: e, routeParams: r, queryParams: _ }) =>
          (t) => {
            const a = t ? ja(r, t) : {},
              n = wa(e, a).replace(/\\(.)/g, "$1");
            let E = "";
            if (t) {
              const e = c({}, t);
              if (
                (r &&
                  Object.keys(r).forEach((r) => {
                    (_ && _[r]) || delete e[r];
                  }),
                _)
              ) {
                const r = ja(_, e);
                E = (0, Xa.jsonToQueryString)(r);
              }
            }
            return { pathname: n, search: E };
          },
        Ja = (e) => (r) => {
          return ((_ = Qa(e)(r)).pathname || "") + (_.search || "");
          var _;
        };
      function Za(e) {
        const { routeParams: r, queryParams: _ } = e;
        return {
          config: e,
          getLocation: Qa(e),
          getUrl: Ja(e),
          formatParamsFromRoute: za.bind(null, r),
          formatParamsToRoute: ja.bind(null, r),
          formatParamsFromQuery: za.bind(null, _),
          formatParamsToQuery: ja.bind(null, _),
        };
      }
      var en = ({ routeByLocale: e, routeParams: r, queryParams: _ }, t) =>
          Za({ route: e(t), routeParams: r, queryParams: _ }),
        rn = Za(I(c({}, xa(Xr)), { queryParams: { showGifts: ba } })),
        _n = Za(I(c({}, xa(qr)), { queryParams: { tab: ba } })),
        tn = Za(c({}, xa(xr))),
        an = Za(c({}, xa(wr))),
        nn = Za(I(c({}, xa($r)), { queryParams: { showItems: ba } })),
        En = Za({ route: ge, queryParams: { category: Ba } }),
        on = Za(xa(De)),
        Rn = Za({ route: ge, queryParams: { category: Ba, subcategory: Ba } }),
        Tn = Za(xa(Ge)),
        On = Za({
          route: ge,
          queryParams: { category: Ba, subcategory: Ba, keyword: Fa },
        }),
        un = Za(xa(Fe)),
        cn = Za({ route: We }),
        In = I(
          c(
            {},
            {
              withDiscount: Wa,
              freeShipping: Wa,
              newItem: Wa,
              usedItem: Wa,
              preferred: Wa,
              minPrice: ba,
              maxPrice: ba,
              facet: Ka,
              locations: Va,
              wholesale: Wa,
              shippingOptions: Ka,
              payCreditCard: Wa,
              payCOD: Wa,
              installment: Wa,
              ccInstallment: Wa,
              nonCCInstallment: Wa,
              hasLowestPriceGuarantee: Wa,
              serviceByShopee: ba,
              officialMall: Wa,
              ratingFilter: ba,
              labelIds: Ka,
              pLabelIds: Ka,
              isBuyerPerspective: Wa,
              brands: Ka,
              preOrder: Wa,
              filterVideo: Wa,
              preferredPlus: Wa,
              filterOriginal: Wa,
              filters: Ka,
              pcpIds: Ka,
              itemTagIds: Ka,
            }
          ),
          {
            sortBy: Ha,
            order: Ha,
            lat: va,
            lon: va,
            skipShuffle: Wa,
            filterSoldOut: ba,
            hideRemainingPrice: Wa,
            page: ba,
            peep_signature: Ha,
            noCorrection: Wa,
            reservedKeyword: Ha,
            showItems: Wa,
            trackingId: Ha,
          }
        ),
        sn = I(c({}, In), { keyword: Ya }),
        ln = I(c({}, sn), {
          shop: ba,
          subcategory: ba,
          category: ba,
          thirdCategory: ba,
          attrId: ba,
          attrVal: Ya,
          attrName: Ha,
          hashtag: Ya,
          shopCollection: ba,
          originalCategoryId: ba,
          collection: ba,
          searchPrefill: ba,
          promotionId: ba,
          catalogue: Ya,
          site: Ha,
          searchFrom: Ha,
          originalResultType: ba,
          complementKeyword: Ha,
        }),
        An = I(c({}, In), {
          evcode: Ha,
          voucherCode: Ha,
          signature: Fa,
          source: Ya,
          preSource: Ha,
        }),
        Un = Za(I(c({}, xa(be)), { queryParams: sn })),
        Sn = Za(I(c({}, xa(Be)), { queryParams: sn })),
        Nn = Za(I(c({}, xa(ve)), { queryParams: sn })),
        dn = en.bind(null, {
          routeByLocale: g(S.FLASH_SALE),
          queryParams: { promotionId: ba, categoryId: ba, fromItem: ba },
        }),
        Pn = en.bind(null, {
          routeByLocale: g(S.BRAND_SALE),
          queryParams: { promotionId: ba, fromShop: ba, fromItem: ba },
        }),
        Cn = en.bind(null, {
          routeByLocale: g(S.MART_FLASH_SALE),
          queryParams: { promotionId: ba, fromItem: ba },
        }),
        pn = Za(I(c({}, xa(X)), { queryParams: { groupId: Ba } })),
        mn = Za(I(c({}, xa(Re)), { queryParams: { tabType: Ha } })),
        Ln = Za(I(c({}, xa(Te)), { queryParams: { orderid: Ba } })),
        gn = Za(xa(Oe)),
        fn = Za({
          route: wa(Re, { tabType: "deal" }),
          queryParams: { category: ba },
        }),
        yn = Za({ route: ue, queryParams: { listType: ba } }),
        hn = Za({ route: "/help_center" }),
        Dn = Za(xa("/help_center/answer/:issueId(\\d)")),
        Gn = en.bind(null, { routeByLocale: g(S.ROUTE_OFFICIAL_SHOP) }),
        Fn = en.bind(null, {
          routeByLocale: g(S.ROUTE_OFFICIAL_SHOP_SEARCH),
          queryParams: ln,
        }),
        Hn = Za(I(c({}, xa(Ke)), { queryParams: sn })),
        Mn = en.bind(null, {
          routeByLocale: g(S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY),
          routeParams: xa(Ne).routeParams,
        }),
        Yn = en.bind(null, {
          routeByLocale: g(S.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR),
          routeParams: xa(de).routeParams,
          queryParams: { pageNumber: ba },
        }),
        Bn = en.bind(null, { routeByLocale: g(S.ROUTE_OFFICIAL_SHOP_BRANDS) }),
        bn = en.bind(null, {
          routeByLocale: g(S.ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY),
          routeParams: xa(Se).routeParams,
        }),
        vn = en.bind(null, {
          routeByLocale: g(S.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU),
          routeParams: xa(Ae).routeParams,
          queryParams: { pageNumber: ba },
        }),
        Wn = en.bind(null, {
          routeByLocale: g(S.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL),
          routeParams: xa(Pe).routeParams,
        }),
        Vn = {
          vItemId: ba,
          vShopId: ba,
          vModelId: ba,
          rModelId: ba,
          sp_atk: Ha,
          xptdk: Ha,
        },
        Kn = Za(I(c({}, xa($)), { queryParams: Vn })),
        kn = Za(I(c({}, xa(X)), { queryParams: Vn })),
        wn = Za(xa(gr)),
        xn = Za(xa(fr)),
        qn = Za(xa(Lr)),
        Xn = Za(
          I(c({}, xa(xe)), {
            queryParams: {
              from: Fa,
              promotionid: Ba,
              signature: Ha,
              timeslot_info: Ha,
            },
          })
        ),
        $n = Za(I(c({}, xa(tr)), { queryParams: { pageNumber: ba } })),
        jn = Za(I(c({}, xa(rr)), { queryParams: { pageNumber: ba } })),
        zn = Za(xa(_r)),
        Qn = Za(
          I(c({}, xa(ar)), {
            queryParams: { catId: Ha, subTab: Ha, clusterOnly: Wa, sortBy: ba },
          })
        ),
        Jn = Za(I(c({}, xa(nr)), { queryParams: { catId: Ha, sortBy: ba } })),
        Zn = Za({ route: Er }),
        eE = Za({ route: or }),
        rE = Za(I(c({}, xa(ir)), { queryParams: { knodeId: Fa } })),
        _E = Za(
          I(c({}, xa(Rr)), { queryParams: { pageNumber: ba, upstream: Ha } })
        ),
        tE = Za(
          I(c({}, xa(Or)), { queryParams: { pageNumber: ba, isMart: Wa } })
        ),
        aE = Za(
          I(c({}, xa(ur)), {
            queryParams: {
              shopid: Ba,
              itemid: Ba,
              catid: Ba,
              page: ba,
              from_cart: ba,
              upstream: Ha,
            },
          })
        ),
        nE = Za(
          I(c({}, xa(ga)), {
            queryParams: { shopCollection: ba, originalCategoryId: ba },
          })
        ),
        EE = Za(I(c({}, xa(ge)), { queryParams: ln })),
        oE = Za(I(c({}, xa(ge)), { queryParams: { keyword: Fa } })),
        iE = Za({
          route: Me,
          routeParams: {
            hashtag: {
              formatFromUrl: (e) => e,
              formatToUrl: (e) =>
                ha(
                  e
                    ? String(e).startsWith("#")
                      ? e.substring(1)
                      : String(e)
                    : ""
                ).toLowerCase(),
            },
          },
          queryParams: I(c({}, sn), { hashtag: Fa }),
        }),
        RE = Za({
          route: ge,
          queryParams: { attrId: Ba, attrName: Fa, attrVal: Ma },
        }),
        TE = Za(I(c({}, xa(fe)), { queryParams: ln })),
        OE = Za(
          I(c({}, xa(He)), {
            queryParams: I(c({}, sn), { category: ba, subcategory: ba }),
          })
        ),
        uE = Za(I(c({}, xa(ye)), { queryParams: ln })),
        cE = Za(
          I(c({}, xa(z)), {
            queryParams: I(c({}, In), {
              shopCollection: ba,
              originalCategoryId: ba,
              tab: ba,
              itemId: ba,
              categoryId: ba,
              priorityPromotionId: ba,
              prioritySignature: Ha,
              prioritySignatureSource: Ha,
              entryPoint: Ha,
            }),
          })
        ),
        IE = Za(
          I(c({}, xa(j)), {
            queryParams: I(c({}, In), {
              shopCollection: ba,
              originalCategoryId: ba,
              tab: ba,
              itemId: ba,
              categoryId: ba,
              priorityPromotionId: ba,
              prioritySignature: Ha,
              prioritySignatureSource: Ha,
              entryPoint: Ha,
              upstream: Ha,
            }),
          })
        ),
        sE = Za(xa(J)),
        lE = Za(
          I(c({}, xa(he)), {
            queryParams: I(c({}, In), {
              shopCollection: ba,
              originalCategoryId: ba,
            }),
          })
        ),
        AE = Za(c({}, xa(Jr))),
        UE = Za(I(c({}, xa(Zr)), { queryParams: { categoryId: ba } })),
        SE = { state: Ya },
        NE = Za(I(c({}, xa(Ce)), { queryParams: SE })),
        dE = Za(
          I(c({}, xa(Le)), {
            queryParams: {
              shopId: ba,
              itemKeys: Va,
              referrerItems: Ha,
              source: Ha,
              orderStatus: ba,
            },
          })
        ),
        PE = { source: Ha, action: Ha },
        CE = {
          evcode: Ha,
          promotionId: ba,
          signature: Ha,
          source: Ha,
          action: Ha,
          from_source: Ha,
        },
        pE = { activityId: ba, voucherCode: Ha, dp_from_source: Ha },
        mE = Za(xa(x.ROUTE_USER_BASE)),
        LE = Za(xa(x.ROUTE_USER_ME)),
        gE = Za(xa(x.ROUTE_USER_ACCOUNT)),
        fE = Za(xa(x.ROUTE_USER_PROFILE)),
        yE = Za(xa(x.ROUTE_USER_PHONE)),
        hE = Za(xa(x.ROUTE_USER_EMAIL)),
        DE = Za(xa(x.ROUTE_USER_PASSWORD)),
        GE = Za(xa(Z)),
        FE = Za(xa(x.ROUTE_USER_ADDRESS)),
        HE = Za(xa(x.ROUTE_USER_ADD_ADDRESS)),
        ME = Za(xa(Cr)),
        YE = Za(xa(Ir)),
        BE = Za(I(c({}, xa(cr)), { queryParams: CE })),
        bE = Za(xa(Gt)),
        vE = Za(xa(Nr)),
        WE = Za(I(c({}, xa(H_)), { queryParams: PE })),
        VE = Za(I(c({}, xa(M_)), { queryParams: CE })),
        KE = Za(I(c({}, xa(v_)), { queryParams: pE })),
        kE = Za(I(c({}, xa(B_)), { queryParams: An })),
        wE = Za(xa(k.ROUTE_LOGIN_BY_PASSWORD)),
        xE = Za(xa(k.ROUTE_LOGIN_BY_OTP)),
        qE = Za(xa(k.ROUTE_LOGIN_BY_QR)),
        XE = Za(xa(k.ROUTE_AUTHENTICATE_BY_OTP)),
        $E = Za(xa(k.ROUTE_SIGNUP_BY_OTP)),
        jE = Za(xa(k.ROUTE_RESET_PASSWORD)),
        zE = Za(xa(k.ROUTE_RESET_PASSWORD_BY_EMAIL)),
        QE = Za(xa(k.ROUTE_CHECKOUT_SIGNUP)),
        JE = Za(c({}, xa(x.ROUTE_CUSTOM_KYC_TW))),
        ZE = Za(c({}, xa(A_))),
        eo = Za(c({}, xa(U_))),
        ro = Za(c({}, xa(S_))),
        _o = Za(c({}, xa(N_))),
        to = Za(c({}, xa(d_))),
        ao = Za(xa(Mt)),
        no = Za(
          I(c({}, xa(Yt)), {
            queryParams: {
              userId: Ba,
              entryPoint: ba,
              orderId: ba,
              itemId: ba,
              from: Ha,
            },
          })
        ),
        Eo = Za(c({}, xa(wt))),
        oo = Za(I(c({}, xa(xt)), { queryParams: sn })),
        io = Za(c({}, xa(Qt))),
        Ro = en.bind(null, { routeByLocale: g(S.MART_FLASH_SALE) }),
        To = Za(xa(ea)),
        Oo = Za(xa(ra)),
        uo = Za(I(c({}, xa(_a)), { queryParams: ln })),
        co = Za(
          I(c({}, xa(ta)), { queryParams: I(c({}, ln), { fromMpi: Wa }) })
        ),
        Io = Za(
          I(c({}, xa(aa)), { queryParams: I(c({}, ln), { fromMpi: Wa }) })
        ),
        so = Za(xa(na)),
        lo = Za(I(c({}, xa(Ea)), { queryParams: ln })),
        Ao = Za(
          I(c({}, xa(oa)), { queryParams: { page: ba, productLabelId: ba } })
        ),
        Uo = Za(
          I(c({}, xa(Oa)), { queryParams: { page: ba, productLabelId: ba } })
        ),
        So = Za(xa(ia)),
        No = Za(xa(Ta)),
        Po = Za(I(c({}, xa(ne)), { queryParams: { fromItem: Ha, from: Ha } })),
        Co = Za(
          I(c({}, xa(Ee)), {
            queryParams: { fromDeal: ba, fromItem: ba, selectedDeal: ba },
          })
        ),
        po = Za(
          I(c({}, xa(Ra)), {
            queryParams: { fromDeal: ba, fromItem: ba, selectedDeal: ba },
          })
        ),
        mo = Za(I(c({}, xa(Na)), { routeParams: { collectionId: Ba } })),
        Lo = Za(I(c({}, xa(Pa)), { routeParams: { collectionId: Ba } })),
        go = Za(I(c({}, xa(da)), { routeParams: { collectionId: Ba } })),
        fo = Za(xa(tt)),
        yo = Za(xa(ot)),
        ho = Za(xa(et)),
        Do = Za(xa(z_)),
        Go = qa;
    },
    63275: function (e, r, _) {
      _.r(r),
        _.d(r, {
          ROUTE_BRANCH_RESELECTION_PAGE: function () {
            return M;
          },
          ROUTE_CUSTOM_KYC_TW: function () {
            return A;
          },
          ROUTE_EMAIL_OTP_SHARED_SERVICE: function () {
            return v;
          },
          ROUTE_PHONE_OTP_SHARED_SERVICE: function () {
            return b;
          },
          ROUTE_SETTINGS_EMAIL: function () {
            return S;
          },
          ROUTE_SETTINGS_NOTIFICATIONS: function () {
            return U;
          },
          ROUTE_SHOP_FOLLOWERS: function () {
            return H;
          },
          ROUTE_SHOP_FOLLOWING: function () {
            return F;
          },
          ROUTE_USER_ACCOUNT: function () {
            return n;
          },
          ROUTE_USER_ADDRESS: function () {
            return T;
          },
          ROUTE_USER_ADD_ADDRESS: function () {
            return O;
          },
          ROUTE_USER_BASE: function () {
            return t;
          },
          ROUTE_USER_DELETE: function () {
            return s;
          },
          ROUTE_USER_DNI: function () {
            return I;
          },
          ROUTE_USER_EDIT_ADDRESS: function () {
            return u;
          },
          ROUTE_USER_EMAIL: function () {
            return i;
          },
          ROUTE_USER_GDPR: function () {
            return h;
          },
          ROUTE_USER_GDPR_COOKIE_SETTING: function () {
            return D;
          },
          ROUTE_USER_GDPR_COOKIE_SETTING_GUEST: function () {
            return G;
          },
          ROUTE_USER_KYC: function () {
            return Y;
          },
          ROUTE_USER_LOCATION_SELECTOR: function () {
            return l;
          },
          ROUTE_USER_ME: function () {
            return a;
          },
          ROUTE_USER_PASSWORD: function () {
            return R;
          },
          ROUTE_USER_PHONE: function () {
            return o;
          },
          ROUTE_USER_PROFILE: function () {
            return E;
          },
          ROUTE_USER_SETTING: function () {
            return f;
          },
          ROUTE_USER_SETTING_LANGUAGE: function () {
            return d;
          },
          ROUTE_USER_SETTING_LANGUAGE_LEGACY: function () {
            return N;
          },
          ROUTE_USER_SETTING_LEGACY: function () {
            return g;
          },
          ROUTE_USER_SETTING_NOTIFICATION: function () {
            return P;
          },
          ROUTE_USER_SETTING_NOTIFICATION_EMAIL: function () {
            return C;
          },
          ROUTE_USER_SETTING_NOTIFICATION_SMS: function () {
            return p;
          },
          ROUTE_USER_SETTING_NOTIFICATION_WHATSAPP: function () {
            return m;
          },
          ROUTE_USER_SETTING_NOTIFICATION_ZALO: function () {
            return L;
          },
          ROUTE_USER_SETTING_PRIVACY: function () {
            return y;
          },
          ROUTE_USER_TAX_ID: function () {
            return c;
          },
          ROUTE_VERIFY_ACCOUNT_SELLER_MAIN_SUB: function () {
            return B;
          },
        });
      const t = "/user",
        a = "/me",
        n = "/user/account",
        E = "/user/account/profile",
        o = "/user/account/phone",
        i = "/user/account/email",
        R = "/user/account/password",
        T = "/user/account/address",
        O = "/user/account/address/add",
        u = "/user/account/address/edit/:addressId(\\d+)",
        c = "/user/account/tax-id",
        I = "/user/account/dni",
        s = "/user/account/delete",
        l = "/user/location-selector",
        A = "/kyc/custom-tw",
        U = "/user/settings/notifications",
        S = "/user/settings/email",
        N = "/me/setting/language",
        d = "/user/setting/language",
        P = "/user/setting/notification",
        C = "/user/setting/notification/email",
        p = "/user/setting/notification/sms",
        m = "/user/setting/notification/whatsapp",
        L = "/user/setting/notification/zalo",
        g = "/me/setting",
        f = "/user/setting",
        y = "/user/setting/privacy",
        h = "/user/account/gdpr",
        D = "/user/account/cookie",
        G = "/setting/cookie",
        F = "/shop/:shopid(\\d+)/following",
        H = "/shop/:shopid(\\d+)/followers",
        M = "/reselect_branch/:orderid/:shopid/:forderid/:storeid",
        Y = "/user/account/kyc",
        B = "/verify/account/seller-main-sub",
        b = "/verify/otp",
        v = "/verify/email";
    },
    50946: function (e, r, _) {
      _.r(r),
        _.d(r, {
          BRAND_SALE_URL: function () {
            return h;
          },
          CAPITAL_CITY: function () {
            return m;
          },
          CONF: function () {
            return n;
          },
          CONF_KEYS: function () {
            return a;
          },
          COUNTRY_CONFIG: function () {
            return C;
          },
          CSContactNumber: function () {
            return o;
          },
          DEFAULT_COLLAPSE_DISPLAY_LIMIT: function () {
            return F;
          },
          DEFAULT_COLLAPSE_START_OFFSET: function () {
            return H;
          },
          ENABLE_OFFICIAL_MALL: function () {
            return y;
          },
          FILTER_SHORTCUTS: function () {
            return Y;
          },
          FLASH_SALE_URL: function () {
            return D;
          },
          MART_FLASH_SALE_URL: function () {
            return G;
          },
          OFFENSIVE_HIDES: function () {
            return g;
          },
          PAGE_TYPE: function () {
            return f;
          },
          SEARCH_FILTER_PANEL_CONFIG: function () {
            return M;
          },
          SHIPPING_FEE_ADDRESS_MAX_LEVEL: function () {
            return L;
          },
          getConf: function () {
            return E;
          },
          getCountryConfig: function () {
            return p;
          },
        });
      var t = _(40673),
        a = {
          PRICE_FILTER_DEFAULT_RANGE: "PRICE_FILTER_DEFAULT_RANGE",
          SHOW_SOLD_COUNT: "SHOW_SOLD_COUNT",
          OFFENSIVE_HIDE: "OFFENSIVE_HIDE",
          SELLER_DEFINED_FREE_SHIPPING_PROMOTION:
            "SELLER_DEFINED_FREE_SHIPPING_PROMOTION",
        },
        n = {
          [a.SHOW_SOLD_COUNT]: { SG: !0, TW: !0, ID: !0, TH: !0, default: !1 },
          [a.SELLER_DEFINED_FREE_SHIPPING_PROMOTION]: { default: !0 },
          [a.PRICE_FILTER_DEFAULT_RANGE]: {
            SG: [
              { price_min: 0, price_max: 1e6 },
              { price_min: 1e6, price_max: 2e6 },
              { price_min: 2e6, price_max: 3e6 },
            ],
            MY: [
              { price_min: 0, price_max: 2e6 },
              { price_min: 2e6, price_max: 4e6 },
              { price_min: 4e6, price_max: 6e6 },
            ],
            PH: [
              { price_min: 0, price_max: 2e7 },
              { price_min: 2e7, price_max: 4e7 },
              { price_min: 4e7, price_max: 6e7 },
            ],
            ID: [
              { price_min: 0, price_max: 75e8 },
              { price_min: 75e8, price_max: 15e9 },
              { price_min: 15e9, price_max: 2e10 },
            ],
            TW: [
              { price_min: 0, price_max: 3e7 },
              { price_min: 3e7, price_max: 7e7 },
              { price_min: 7e7, price_max: 1e8 },
            ],
            TH: [
              { price_min: 0, price_max: 15e6 },
              { price_min: 15e6, price_max: 3e7 },
              { price_min: 3e7, price_max: 45e6 },
            ],
            VN: [
              { price_min: 0, price_max: 1e10 },
              { price_min: 1e10, price_max: 2e10 },
              { price_min: 2e10, price_max: 3e10 },
            ],
            BR: [
              { price_min: 0, price_max: 2e6 },
              { price_min: 2e6, price_max: 4e6 },
              { price_min: 4e6, price_max: 6e6 },
            ],
            MX: [
              { price_min: 0, price_max: 1e7 },
              { price_min: 1e7, price_max: 2e7 },
              { price_min: 2e7, price_max: 3e7 },
            ],
            CO: [
              { price_min: 0, price_max: 13e8 },
              { price_min: 13e8, price_max: 26e8 },
              { price_min: 26e8, price_max: 39e8 },
            ],
            CL: [
              { price_min: 0, price_max: 3e8 },
              { price_min: 3e8, price_max: 6e8 },
              { price_min: 6e8, price_max: 9e8 },
            ],
            AR: [
              { price_min: 0, price_max: 4e7 },
              { price_min: 4e7, price_max: 8e7 },
              { price_min: 8e7, price_max: 12e7 },
            ],
            FR: [
              { price_min: 0, price_max: 5e5 },
              { price_min: 5e5, price_max: 1e6 },
              { price_min: 1e6, price_max: 15e5 },
            ],
            PL: [
              { price_min: 0, price_max: 15e5 },
              { price_min: 15e5, price_max: 3e6 },
              { price_min: 3e6, price_max: 45e5 },
            ],
            ES: [
              { price_min: 0, price_max: 5e5 },
              { price_min: 5e5, price_max: 1e6 },
              { price_min: 1e6, price_max: 15e5 },
            ],
            IN: [
              { price_min: 0, price_max: 2e7 },
              { price_min: 2e7, price_max: 4e7 },
              { price_min: 4e7, price_max: 6e7 },
            ],
          },
          [a.OFFENSIVE_HIDE]: { MY: !0, TW: !0, default: !1 },
        };
      function E(e, r) {
        const _ = n[r];
        return _.hasOwnProperty(e) ? _[e] : _.default;
      }
      var o = {
          SG: "+65 6206 6610",
          MY: "03 - 2777 9222",
          TW: "(02) 6636 6559",
          PH: "02 880 5200",
          VN: "19001221",
          ID: "1500702",
          TH: "02-017-8399",
          BR: "customer service contact number here",
          MX: "customer service contact number here",
          CO: "customer service contact number here",
          CL: "customer service contact number here",
          AR: "customer service contact number here",
          FR: "customer service contact number here",
          PL: "customer service contact number here",
          ES: "customer service contact number here",
          IN: "customer service contact number here",
        },
        i = "SGD",
        R = "IDR",
        T = "THB",
        O = "VND",
        u = "PHP",
        c = "TWD",
        I = "MYR",
        s = "BRL",
        l = "MXN",
        A = "COP",
        U = "CLP",
        S = "ARS",
        N = "PLN",
        d = "EUR",
        P = "INR",
        C = {
          default: {
            language: t.a2.en,
            currency: i,
            adultAge: 18,
            countryName: "",
            languages: null,
          },
          SG: {
            language: t.a2.en,
            currency: i,
            adultAge: 18,
            countryName: "Singapore",
            languages: [
              { languageCode: t.a2.en, languageName: "English" },
              { languageCode: t.a2["zh-Hans"], languageName: "简体中文" },
              { languageCode: t.a2.ms, languageName: "Bahasa Melayu" },
            ],
          },
          ID: {
            language: t.a2.id,
            currency: R,
            countryName: "Indonesia",
            adultAge: 21,
            languages: [
              { languageCode: t.a2.id, languageName: "Bahasa Indonesia" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          TH: {
            language: t.a2.th,
            languages: [
              { languageCode: t.a2.th, languageName: "ไทย" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
            currency: T,
            countryName: "Thailand",
            adultAge: 20,
          },
          VN: {
            language: t.a2.vi,
            currency: O,
            countryName: "Việt Nam",
            adultAge: 18,
            languages: [
              { languageCode: t.a2.vi, languageName: "Tiếng Việt" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          PH: {
            language: t.a2.en,
            currency: u,
            adultAge: 18,
            countryName: "Philippines",
            languages: [
              { languageCode: t.a2.en, languageName: "English" },
              { languageCode: t.a2["zh-Hans"], languageName: "简体中文" },
              { languageCode: t.a2.fil, languageName: "Filipino" },
            ],
          },
          TW: {
            language: t.a2["zh-Hant"],
            currency: c,
            adultAge: 18,
            countryName: "蝦皮購物",
            languages: [
              { languageCode: t.a2["zh-Hant"], languageName: "繁體中文" },
              { languageCode: t.a2["zh-Hans"], languageName: "简体中文" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          MY: {
            language: t.a2.en,
            currency: I,
            countryName: "Malaysia",
            adultAge: 18,
            languages: [
              { languageCode: t.a2.en, languageName: "English" },
              { languageCode: t.a2["zh-Hans"], languageName: "简体中文" },
              { languageCode: t.a2.ms, languageName: "Bahasa Melayu" },
            ],
          },
          BR: {
            adultAge: 18,
            language: t.a2["pt-BR"],
            currency: s,
            countryName: "Brasil",
            languages: [
              { languageCode: t.a2["pt-BR"], languageName: "Português - BR" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          MX: {
            adultAge: 18,
            language: t.a2["es-MX"],
            currency: l,
            countryName: "México",
            languages: [
              { languageCode: t.a2["es-MX"], languageName: "Español-Mexico" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          CO: {
            adultAge: 18,
            language: t.a2["es-CO"],
            currency: A,
            countryName: "Colombia",
            languages: [
              { languageCode: t.a2["es-CO"], languageName: "Español-Colombia" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          CL: {
            adultAge: 18,
            language: t.a2["es-CL"],
            currency: U,
            countryName: "Chile",
            languages: [
              { languageCode: t.a2["es-CL"], languageName: "Español-Chile" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          AR: {
            adultAge: 18,
            language: t.a2["es-AR"],
            currency: S,
            countryName: "Argentina",
            languages: [
              {
                languageCode: t.a2["es-AR"],
                languageName: "Español-Argentina",
              },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          FR: {
            adultAge: 18,
            language: t.a2.fr,
            currency: d,
            countryName: "France",
            languages: [
              { languageCode: t.a2.fr, languageName: "Français" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          PL: {
            adultAge: 18,
            language: t.a2.pl,
            currency: N,
            countryName: "Polska",
            languages: [
              { languageCode: t.a2.pl, languageName: "Polski" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          ES: {
            adultAge: 18,
            language: t.a2["es-ES"],
            currency: d,
            countryName: "España",
            languages: [
              { languageCode: t.a2["es-ES"], languageName: "España-Spain" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
          IN: {
            adultAge: 18,
            language: t.a2.en,
            currency: P,
            countryName: "India",
            languages: [
              { languageCode: t.a2.hi, languageName: "हिन्दी" },
              { languageCode: t.a2.en, languageName: "English" },
            ],
          },
        };
      function p(e) {
        return C[e] || C.default;
      }
      var m = {
          SG: { state: "", city: "" },
          TW: { state: "臺北市", city: "中正區" },
          PH: {
            state: "Metro Manila",
            city: "Metro Manila",
            district: "Binondo",
            town: "Barangay 288",
          },
          VN: {
            state: "Hà Nội",
            city: "Quận Hoàn Kiếm",
            district: "Phường Tràng Tiền",
          },
          ID: {
            state: "DKI JAKARTA",
            city: "KOTA JAKARTA PUSAT",
            district: "MENTENG",
          },
          TH: { state: "จังหวัดกรุงเทพมหานคร", city: "เขตพระนคร" },
          MY: { state: "Kuala Lumpur", city: "KL City" },
          BR: { state: "São Paulo", city: "São Paulo", zipcode: "05024040" },
          MX: {
            state: "Ciudad de México",
            city: "Milpa Alta",
            district: "Ciudad de México",
            zipcode: "01000",
          },
          CO: { state: "Bogotá, D.C.", city: "Bogotá, D.C." },
          CL: { state: "Metropolitana De Santiago", city: "Santiago" },
          AR: {
            state: "CAPITAL FEDERAL",
            city: "CIUDAD AUTONOMA BUENOS AIRES",
          },
          FR: { state: "Paris", city: "Paris" },
          PL: {
            state: "Mazowieckie",
            city: "Warszawa",
            district: "Warszawa",
            zipcode: "00065",
          },
          ES: { state: "Madrid", city: "Madrid" },
          IN: { state: "New Delhi", city: "New Delhi", zipcode: "110000" },
        },
        L = {
          SG: 2,
          TW: 2,
          PH: 4,
          VN: 3,
          ID: 3,
          TH: 2,
          MY: 2,
          BR: 2,
          MX: 3,
          CO: 2,
          CL: 2,
          AR: 2,
          FR: 2,
          PL: 4,
          ES: 2,
          IN: 2,
        },
        g = {},
        f = {
          PRODUCT: 0,
          CATEGORY: 1,
          SHOP: 2,
          COLLECTION: 3,
          EVENT: 4,
          BRIDGE_CMD: 5,
          SEO: 6,
          COIN: 7,
          DIRECT: 8,
          OTHERS: -1,
        },
        y = {
          SG: !0,
          TW: !0,
          ID: !0,
          VN: !0,
          MY: !0,
          TH: !0,
          PH: !0,
          BR: !1,
          MX: !1,
          CO: !1,
          CL: !1,
          AR: !1,
          FR: !1,
          PL: !1,
          ES: !1,
          IN: !1,
        },
        h = {
          SG: "/mall-flash-sale",
          PH: "/mall-flash-sale",
          ID: "/mall-flash-sale",
          TW: "/mall-flash-sale",
          VN: "/mall-flash-sale",
          MY: "/mall-flash-sale",
          TH: "/mall-flash-sale",
          BR: "/mall-flash-sale",
          MX: "/mall-flash-sale",
          CO: "/mall-flash-sale",
          CL: "/mall-flash-sale",
          AR: "/mall-flash-sale",
          FR: "/mall-flash-sale",
          PL: "/mall-flash-sale",
          ES: "/mall-flash-sale",
          IN: "/mall-hot-deals",
        },
        D = {
          SG: "/flash_deals",
          PH: "/flash_deals",
          ID: "/flash_sale",
          TW: "/flash_sale",
          VN: "/flash_sale",
          MY: "/shocking_sale",
          TH: "/flash_sale",
          BR: "/flash_sale",
          MX: "/flash_sale",
          CO: "/flash_sale",
          CL: "/flash_sale",
          FR: "/promo_flash",
          PL: "/okazje_dnia",
          ES: "/venta_flash",
          AR: "/flash_sale",
          IN: "/hot_deals",
        },
        G = {
          SG: "/supermarket/flash-deals",
          PH: "/supermarket/flash-deals",
          ID: "/supermarket/flash-sale",
          TW: "/supermarket/flash-sale",
          VN: "/supermarket/flash-sale",
          MY: "/supermarket/shocking-sale",
          TH: "/supermarket/flash-sale",
          BR: "/supermarket/flash-sale",
          MX: "/supermarket/flash-sale",
          CO: "/supermarket/flash-sale",
          CL: "/supermarket/flash-sale",
          AR: "/supermarket/flash-sale",
          FR: "/supermarket/flash-sale",
          PL: "/supermarket/flash-sale",
          ES: "/supermarket/flash-sale",
          IN: "/supermarket/hot-deals",
        },
        F = 4,
        H = 4,
        M = {
          default: {
            groups: [
              "FACET",
              "LOCATIONS",
              "SHIPPING_OPTIONS",
              {
                group: "SHOP_TYPE",
                filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"],
              },
              {
                group: "SERVICE_AND_PROMOTION",
                filters: [
                  "WHOLESALE",
                  "WITH_DISCOUNT",
                  "FREE_SHIPPING",
                  "HAS_LOWEST_PRICE_GUARANTEE",
                ],
              },
              { group: "CONDITION", filters: ["NEW_ITEM", "USED_ITEM"] },
              "PRICE_RANGE",
            ],
          },
          TW: {
            groups: [
              "FACET",
              "LOCATIONS",
              "SHIPPING_OPTIONS",
              {
                group: "SHOP_TYPE",
                filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"],
              },
              {
                group: "SERVICE_AND_PROMOTION",
                filters: [
                  "WHOLESALE",
                  "WITH_DISCOUNT",
                  "FREE_SHIPPING",
                  "PAY_CREDIT_CARD",
                ],
              },
              { group: "CONDITION", filters: ["NEW_ITEM", "USED_ITEM"] },
              "PRICE_RANGE",
            ],
          },
          MY: {
            groups: [
              "FACET",
              "LOCATIONS",
              {
                group: "SHOP_TYPE",
                filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"],
              },
              {
                group: "SERVICE_AND_PROMOTION",
                filters: [
                  "WHOLESALE",
                  "WITH_DISCOUNT",
                  "FREE_SHIPPING",
                  "HAS_LOWEST_PRICE_GUARANTEE",
                ],
              },
              { group: "CONDITION", filters: ["NEW_ITEM", "USED_ITEM"] },
              "PRICE_RANGE",
            ],
          },
          ID: {
            groups: [
              "FACET",
              "LOCATIONS",
              "SHIPPING_OPTIONS",
              { group: "CONDITION", filters: ["NEW_ITEM", "USED_ITEM"] },
              {
                group: "SHOP_TYPE",
                filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"],
              },
              {
                collapseDisplayLimit: 2,
                group: "SERVICE_AND_PROMOTION",
                collapseStartOffset: 2,
                filters: [
                  "FREE_SHIPPING",
                  "WITH_DISCOUNT",
                  "WHOLESALE",
                  "PAY_COD",
                  "HAS_LOWEST_PRICE_GUARANTEE",
                  "INSTALLMENT",
                ],
              },
              "PRICE_RANGE",
            ],
          },
          TH: {
            groups: [
              "FACET",
              "LOCATIONS",
              {
                group: "SHOP_TYPE",
                filters: ["OFFICIAL_MALL", "PREFERRED", "SERVICE_BY_SHOPEE"],
              },
              {
                group: "SERVICE_AND_PROMOTION",
                filters: [
                  "WHOLESALE",
                  "WITH_DISCOUNT",
                  "FREE_SHIPPING",
                  "HAS_LOWEST_PRICE_GUARANTEE",
                ],
              },
              { group: "CONDITION", filters: ["NEW_ITEM", "USED_ITEM"] },
              "PRICE_RANGE",
            ],
          },
          BR: {
            groups: [
              "FACET",
              "LOCATIONS",
              "SHIPPING_OPTIONS",
              {
                group: "SHOP_TYPE",
                filters: ["PREFERRED", "SERVICE_BY_SHOPEE"],
              },
              {
                group: "SERVICE_AND_PROMOTION",
                filters: [
                  "WHOLESALE",
                  "WITH_DISCOUNT",
                  "FREE_SHIPPING",
                  "HAS_LOWEST_PRICE_GUARANTEE",
                ],
              },
              { group: "CONDITION", filters: ["NEW_ITEM", "USED_ITEM"] },
              "PRICE_RANGE",
            ],
          },
          MX: {},
          CO: {},
          CL: {},
          AR: {},
          FR: {},
          PL: {},
          ES: {},
          IN: {},
        },
        Y = {
          default: ["OFFICIAL_MALL", "PREFERRED", "LOCATIONS", "PRICE_RANGE"],
          TW: [
            "SERVICE_BY_SHOPEE",
            "OFFICIAL_MALL",
            "PREFERRED",
            "FREE_SHIPPING",
          ],
          VN: ["OFFICIAL_MALL", "PREFERRED", "LOCATIONS", "SHIPPING_OPTIONS"],
          TH: ["OFFICIAL_MALL", "PREFERRED", "FREE_SHIPPING", "PRICE_RANGE"],
          MY: ["OFFICIAL_MALL", "PREFERRED", "LOCATIONS", "PAY_COD"],
          ID: [
            "OFFICIAL_MALL",
            "PREFERRED",
            "SERVICE_BY_SHOPEE",
            "SHIPPING_OPTIONS",
          ],
          BR: ["PREFERRED", "LOCATIONS", "PRICE_RANGE"],
          MX: [],
          CO: [],
          CL: [],
          AR: [],
          FR: [],
          PL: [],
          ES: [],
          IN: [],
        };
    },
  },
]);
