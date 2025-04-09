"use strict";
(("undefined" != typeof self ? self : this).webpackChunkshopee_pc =
  ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
  [7327],
  {
    92320: function (e, t, i) {
      i.d(t, {
        DV: function () {
          return Ct;
        },
      });
      var r,
        n,
        a,
        o,
        s,
        c,
        l,
        p,
        u,
        d,
        h,
        f,
        v,
        m,
        g,
        y,
        _,
        w,
        b,
        R,
        k,
        A = i(1489),
        x = i(48261),
        C = i(84898),
        H = "device_sz_fingerprint",
        S = "sz-token",
        P = "af-ac-enc-sz-token",
        E = "x-sz-sdk-version",
        T = "d-nonptcha-sync",
        D = "/verify/traffic",
        F = "/verify/traffic/error",
        I = "/buyer/login",
        O = {
          onInit: function () {},
          onComplete: function () {},
          onFail: function () {},
          onTimeout: function () {},
        },
        U =
          (((a = {})[(n = ge)(0)] = O),
          (a[n(1)] = O),
          (a.hookFUFetch = O),
          (a.hookFUXhr = O),
          a),
        L = {
          test: "90a081b48a9c87345189bda87a989d23",
          uat: "5a733eaa4e1df48aa36fd9316f093107",
          staging: "d9dd212362d63e8ddb085bb5bce5259f",
          stable: "dc6fe70845cb784460ead6c7fd76bb91",
          live: "f9ffc83459897a13dd14c537e84b1753",
        },
        M =
          (((r = {}).env = {
            test: "test.",
            stable: "test-stable.",
            staging: "staging.",
            liveish: "live-test.",
            live: "",
            uat: "uat.",
          }),
          (r.cid = {
            SG: "sg",
            TW: "xiapi",
            MY: "my",
            PH: "ph",
            TH: "th",
            ID: "id",
            VN: "vn",
            BR: "br",
            MX: "mx",
            CO: "co",
            CL: "cl",
            PL: "pl",
            AR: "xiapi",
            ES: "xiapi",
            FR: "xiapi",
            IN: "xiapi",
          }),
          r),
        N = [
          "/api/v2/item/get",
          "/api/v4/item/get",
          "/api/v4/pdp/get",
          "/api/v4/pdp/get_pc",
          "/api/v4/pdp/get_rw",
        ],
        q = [
          "/api/v4/search/search_facet",
          "/api/v4/search/search_items",
          "/api/v4/search/search_page_common",
          "/api/v4/search/get_ymal_items",
          "/api/v4/search/search_filter_config",
          "/api/v4/search/search_mart_items",
          "/api/v4/search/search_user",
        ],
        B = [
          "/api/v4/shop/get_shop_detail",
          "/api/v4/shop/get_categories",
          "/api/v4/shop/get_shop_tab",
          "/api/v4/shop/rcmd_items",
          "/api/v4/shop/get_shop_base",
          "/api/v4/shop/get_shop_seo",
          "/api/v4/shop/get_products_tab_data",
          "/api/v4/shop/get_membership_data",
          "/api/v4/shop/get_campaign_preview",
          "/api/v4/shop/get_top_products",
          "/api/v4/shop/get_shop_seller_show",
          "/api/v4/shop/get_shop_seller_info",
          "/api/v4/shop/is_show",
          "/api/v4/shop/get_shop_by_user",
          "/api/v4/shop/get_follow_prize_campaign",
          "/api/v4/shop/get_shop_base_preview",
          "/api/v4/shop/search_items",
          "/api/v4/shop/get_shop_core_info",
          "/api/v4/shop/get_popup_data",
          "/api/v4/shop/get_campaign_tab_data",
          "/api/v4/shop/block_user",
          "/api/v4/shop/get_scp_list",
          "/api/v4/shop/get_shop_tab_preview",
          "/api/v4/shop/unfollow",
          "/api/v4/shop/follow",
        ],
        z = Object.freeze({
          REQUEST_TIMEOUT: -99,
          FE_SERVER_ERROR: -999,
          SERVER_ERROR: 10005,
          t: 90309999,
        });
      ((s = o || (o = {}))[(s.Captcha = 1)] = "Captcha"),
        (s[(s.ForceLogin = 2)] = "ForceLogin"),
        (s[(s.Redirect = 5)] = "Redirect"),
        (s[(s.FORCE_DOWNLOAD_APP = 8)] = "FORCE_DOWNLOAD_APP"),
        (s[(s.FORCE_BIND_PHONE = 9)] = "FORCE_BIND_PHONE"),
        (s[(s.VERIFY_PHONE = 10)] = "VERIFY_PHONE"),
        ((l = c || (c = {}))[(l.Block = 2)] = "Block"),
        (l[(l.Challenge = 3)] = "Challenge"),
        ((u = p || (p = {}))[(u.Level1 = 1)] = "Level1"),
        (u[(u.Level2 = 2)] = "Level2"),
        (u[(u.Level3 = 3)] = "Level3"),
        ((h = d || (d = {})).External = "1"),
        (h.Internal = "2"),
        ((v = f || (f = {})).ShopeeInternal = "1"),
        (v.ShopeeApp = "2"),
        ((g = m || (m = {}))[(g.AntiCrawler = 0)] = "AntiCrawler"),
        (g[(g.Dfp = 1)] = "Dfp"),
        ((_ = y || (y = {})).Request = "request"),
        (_.Success = "success"),
        (_.Timeout = "timeout"),
        (_.Failed = "failed"),
        ((b = w || (w = {}))[(b.PC = 0)] = "PC"),
        (b[(b.RW = 1)] = "RW"),
        (b[(b.SHOPEELIVE = 2)] = "SHOPEELIVE"),
        (b[(b.BANK = 3)] = "BANK"),
        ((k = R || (R = {})).FORCEAPP = "1"),
        (k.BINDPHONE = "2"),
        (k.VERIFYPHONE = "3");
      var j,
        V,
        W = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        X = /beeshop|shopee/i,
        Q = /shopee.*app_type=2(\s|$)/i,
        J = /shopee-food-driver/i,
        Y = /shopee-express-driver/i,
        G = /shopeepay|airpay/i,
        K = /mitra/i,
        $ = /seatalk/i,
        Z = /shopee-toc-acc-sdk/i,
        ee = /now/i,
        te = /spinjam.*app_type=20(\s|$)/i;
      ((V = j || (j = {}))[(V.Shopee = 1)] = "Shopee"),
        (V[(V.ShopeeFoodDriver = 2)] = "ShopeeFoodDriver"),
        (V[(V.ShopeePartner = 3)] = "ShopeePartner"),
        (V[(V.ShopeeExpressDriver = 4)] = "ShopeeExpressDriver"),
        (V[(V.ShopeePay = 5)] = "ShopeePay"),
        (V[(V.Mitra = 6)] = "Mitra"),
        (V[(V.SeaTalk = 7)] = "SeaTalk"),
        (V[(V.ShopeeAccountSdk = 8)] = "ShopeeAccountSdk"),
        (V[(V.ShopeeFoodBuyer = 11)] = "ShopeeFoodBuyer"),
        (V[(V.SPinjam = 12)] = "SPinjam");
      var ie = function () {
        return (
          void 0 !==
          (function (e) {
            if (
              (void 0 === e &&
                (e = (function () {
                  if (W) return window.navigator.userAgent;
                })()),
              void 0 !== e)
            )
              return J.test(e)
                ? j.ShopeeFoodDriver
                : Q.test(e)
                ? j.ShopeePartner
                : Y.test(e)
                ? j.ShopeeExpressDriver
                : K.test(e)
                ? j.Mitra
                : $.test(e)
                ? j.SeaTalk
                : Z.test(e)
                ? j.ShopeeAccountSdk
                : ee.test(e)
                ? j.ShopeeFoodBuyer
                : G.test(e)
                ? j.ShopeePay
                : X.test(e)
                ? j.Shopee
                : te.test(e)
                ? j.SPinjam
                : void 0;
          })()
        );
      };
      function re(e, t) {
        var i = (function (e, t) {
          if ((void 0 === t && (t = !1), !e)) return "";
          var i = Object.keys(e).filter(function (t) {
            return null != e[t];
          });
          return i.length
            ? (t ? "" : "?") +
                i
                  .sort()
                  .map(function (t) {
                    return (
                      encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                    );
                  })
                  .join("&")
            : "";
        })(t);
        if (!i.substring(1)) return e;
        var r = e.split("#"),
          n = r[0],
          a = r[1];
        return (
          (n = n.indexOf("?") > -1 ? n + "&" + i.substring(1) : "" + n + i),
          a ? n + "#" + a : n
        );
      }
      var ne = [
        /^(seller\.)((xiapi|sg|th|vn|id|ph|br|my|tw|mx|co|cl|in|ar|pl|fr|es)\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.cn$/,
        /^(banhang\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.vn$/,
        /^(seller\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.(co\.(id|th)|com\.(ar|br|co|mx|my)|cl|es|fr|in|ph|pl|sg|tw)$/,
      ];
      function ae(e) {
        if (!e) return !1;
        try {
          var t = new URL(e).hostname;
          return ne.some(function (e) {
            return e.test(t);
          });
        } catch (e) {
          return !1;
        }
      }
      function oe() {
        return self.__ENV__;
      }
      function se() {
        return self.__LOCALE__;
      }
      var ce,
        le =
          (((ce = {}).malls = {
            SG: "shopee.sg",
            TW: "shopee.tw",
            MY: "shopee.com.my",
            PH: "shopee.ph",
            TH: "shopee.co.th",
            ID: "shopee.co.id",
            VN: "shopee.vn",
            BR: "shopee.com.br",
            MX: "shopee.com.mx",
            CO: "shopee.com.co",
            CL: "shopee.cl",
            AR: "shopee.com.ar",
            FR: "shopee.fr",
            PL: "shopee.pl",
            ES: "shopee.es",
            IN: "shopee.in",
          }),
          (ce.envs = {
            test: "test.",
            stable: "test-stable.",
            staging: "staging.",
            liveish: "live-test.",
            live: "",
            uat: "uat.",
          }),
          ce);
      function pe(e) {
        var t = e.env,
          i = e.locale;
        return "https://" + le.envs[t] + le.malls[i];
      }
      var ue = /web_sdk_host=snack/i;
      function de(e) {
        var t = e.isRelative,
          i = e.host;
        return re("" + (t ? "" : i) + e.path, e.params);
      }
      function he(e) {
        var t,
          i,
          r,
          n,
          a,
          o,
          s = e.history,
          c = e.redirectType,
          l = e.shouldReplaceHistory,
          p = e.absoluteRedirectPath,
          u = e.relativeRedirectPath;
        c !== d.External && s
          ? l
            ? s.replace(u)
            : ie()
            ? null === (t = window) ||
              void 0 === t ||
              null === (i = t.WebViewJavascriptBridge) ||
              void 0 === i ||
              i.callHandler(
                "navigate",
                (((a = {}).url = p), (a.popSelf = 0), (a.navbar = {}), a)
              )
            : s.push(u)
          : l
          ? location.replace(p)
          : ie()
          ? null === (r = window) ||
            void 0 === r ||
            null === (n = r.WebViewJavascriptBridge) ||
            void 0 === n ||
            n.callHandler(
              "navigate",
              (((o = {}).url = p), (o.popSelf = 0), (o.navbar = {}), o)
            )
          : (location.href = p);
      }
      function fe(e) {
        var t = e.history,
          i = e.next,
          r = e.appKey,
          n = e.scene,
          a = void 0 === n ? "crawler_item" : n,
          o = e.shouldReplaceHistory,
          s = void 0 === o || o,
          c = e.clientId,
          l = e.redirectType,
          p = void 0 === l ? d.External : l,
          u = e.verificationPageHost,
          h = void 0 === u ? location.origin : u,
          f = e.antiBotTrackingId,
          v = e.setRedirecting;
        (p !== d.External && t) || (v && v());
        var m,
          g,
          y,
          _ = (0, C.A)(
            {
              is_initial: !0,
              app_key: r,
              scene: a,
              client_id: c,
              redirect_type: p,
              next: i,
              should_replace_history: s,
              anti_bot_tracking_id: f,
            },
            i.includes("__mobile__") || ie() ? { __mobile__: 1 } : {}
          );
        he(
          (((y = {}).history = t),
          (y.redirectType = p),
          (y.shouldReplaceHistory = s),
          (y.absoluteRedirectPath = de(
            (((g = { isRelative: !1 }).host = h),
            (g.path = D),
            (g.params = _),
            g)
          )),
          (y.relativeRedirectPath = de(
            (((m = { isRelative: !0 }).host = h),
            (m.path = D),
            (m.params = _),
            m)
          )),
          y)
        );
      }
      function ve(e) {
        var t,
          i,
          r,
          n,
          a,
          o,
          s = e.history,
          c = e.trackingId,
          l = e.shouldReplaceHistory,
          p = void 0 === l || l,
          u = e.redirectType,
          h = void 0 === u ? d.External : u,
          f = e.verificationPageHost,
          v = void 0 === f ? location.origin : f,
          m = e.homeUrl,
          g = e.isLoggedIn,
          y = void 0 === g || g,
          _ = e.error_type,
          w = (0, C.A)(
            { tracking_id: c, is_logged_in: y, home_url: m || location.origin },
            _ ? (((r = {}).type = _), r) : {},
            _ === R.BINDPHONE || _ === R.VERIFYPHONE
              ? (((i = {}).next = location.href), i)
              : {},
            location.origin.includes("xiapibuy")
              ? (((t = {}).origin = location.origin), t)
              : {},
            ie() ? { __mobile__: 1 } : {}
          );
        he(
          (((o = {}).history = s),
          (o.redirectType = h),
          (o.shouldReplaceHistory = p),
          (o.absoluteRedirectPath = de(
            (((a = { isRelative: !1 }).host = v),
            (a.path = F),
            (a.params = w),
            a)
          )),
          (o.relativeRedirectPath = de(
            (((n = { isRelative: !0 }).host = v),
            (n.path = F),
            (n.params = w),
            n)
          )),
          o)
        );
      }
      function me(e) {
        var t,
          i = e.history,
          r = e.next,
          n = e.redirectType,
          a = void 0 === n ? d.External : n,
          o = e.shouldReplaceHistory,
          s = void 0 === o || o,
          c = e.verificationPageHost,
          l = void 0 === c ? location.origin : c,
          p = e.isFromGoogleAdsPDP,
          u = e.trackingId,
          h = (0, C.A)(
            { next: r },
            r.includes("__mobile__") || ie() ? { __mobile__: 1 } : {},
            p ? (((t = {}).is_from_fu = new Date().getTime()), t) : {},
            { fu_tracking_id: u }
          );
        if (
          (function () {
            if (W) {
              var e = window.navigator.userAgent;
              if (ue.test(e)) return !0;
            }
            return !1;
          })()
        )
          window.SHPLSBridge &&
            (0, x.A)(
              (0, A.A)().mark(function e() {
                return (0, A.A)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), window.SHPLSBridge.checkLogin();
                      case 2:
                        if (((e.t0 = !e.sent), !e.t0)) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 6), window.SHPLSBridge.login();
                      case 6:
                        window.location.reload();
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
        else if (ie()) {
          var f, v;
          null === (f = window) ||
            void 0 === f ||
            null === (v = f.WebViewJavascriptBridge) ||
            void 0 === v ||
            v.callHandler(
              "login",
              (((g = {}).redirectPath = re("main", (((m = {}).apprl = r), m))),
              (g.redirectTab = 1),
              g),
              function (e) {
                0 === (null == e ? void 0 : e.error) && location.replace(r);
              }
            );
        } else {
          var m, g;
          if (location.origin.includes("xiapibuy")) {
            var y =
                window.location.origin + "/api/seller_platform/nonce/callback/",
              _ = window.btoa(
                JSON.stringify((((S = {}).next = window.location.href), S))
              ),
              w = oe();
            he(
              (((H = {}).history = i),
              (H.redirectType = d.External),
              (H.shouldReplaceHistory = s),
              (H.absoluteRedirectPath = de(
                (((k = { isRelative: !1 }).host =
                  "https://account.seller." + (M.env[w] || "") + "shopee.com"),
                (k.path = "/signin/oauth/identifier"),
                (k.params =
                  (((R = { account_type: 2 }).client_id = L[w] || L.live),
                  (R.require_passwd = !0),
                  (R.login_types = "[1,2,3,4,5]"),
                  (R.redirect_uri = y),
                  (R.region = se()),
                  (R.response_type = "tob_nonce"),
                  (R.scope = "profile"),
                  (R.state = _),
                  R)),
                k)
              )),
              (H.relativeRedirectPath = de(
                (((b = { isRelative: !0 }).host = l),
                (b.path = I),
                (b.params = h),
                b)
              )),
              H)
            );
          } else {
            var b, R, k, H, S, P, E, T;
            he(
              (((T = {}).history = i),
              (T.redirectType = a),
              (T.shouldReplaceHistory = s),
              (T.absoluteRedirectPath = de(
                (((E = { isRelative: !1 }).host = l),
                (E.path = I),
                (E.params = h),
                E)
              )),
              (T.relativeRedirectPath = de(
                (((P = { isRelative: !0 }).host = l),
                (P.path = I),
                (P.params = h),
                P)
              )),
              T)
            );
          }
        }
      }
      function ge(e, t) {
        var i = Oe,
          r = i();
        return (
          !i.QY && (i.QY = []),
          (ge = function (t, n) {
            t -= 0;
            var a = i.QY[t];
            return (
              a ||
                (void 0 === ge.Qf &&
                  ((ge.Qg = function (e) {
                    for (
                      var t, i, r = "", n = "", a = 0, o = 0;
                      (i = e.charAt(o++));
                      ~i && ((t = a % 4 ? 64 * t + i : i), a++ % 4)
                        ? (r += String.fromCharCode(
                            255 & (t >> ((-2 * a) & 6))
                          ))
                        : 0
                    )
                      i =
                        "rmjuhniwzpdclsoebafvtykxqgTLJDBVGMRFNQCWPXHIZKAOEUSY6975284013+/=".indexOf(
                          i
                        );
                    for (var s = 0, c = r.length; s < c; s++)
                      n +=
                        "%" + ("00" + r.charCodeAt(s).toString(16)).slice(-2);
                    return decodeURIComponent(n);
                  }),
                  (e = arguments),
                  (ge.Qf = !0)),
                (a = ge.Qg(r[t])),
                (i.QY[t] = a)),
              a
            );
          }),
          ge(e, t)
        );
      }
      function ye(e, t) {
        return new Promise(function (i, r) {
          setTimeout(function () {
            try {
              i(t());
            } catch (e) {
              r(e);
            }
          }, e);
        });
      }
      var _e = "1.12.18",
        we = function (e) {
          var t, i, r, n;
          !ae(window.location.href) &&
            (null === (t = window) ||
              void 0 === t ||
              null === (i = t.Sentry) ||
              void 0 === i ||
              i.captureException(
                e,
                (((n = {}).tags =
                  (((r = {
                    sentryProjectSlug: "shopee-secure-fetch-utils",
                  }).sfuVersion = "" + _e),
                  r)),
                n)
              ));
        };
      function be(e) {
        var t,
          i,
          r,
          n,
          a,
          s,
          l,
          p,
          u,
          h,
          f,
          v,
          m,
          g,
          y = e.antiCrawlerConfig,
          _ = e.response,
          b = e.pathname,
          k = e.platform,
          A = e.source,
          x = e.setRedirecting,
          C = e.getRedirecting,
          H = e.triggerAntiCrawlerCustomizedErrorPage,
          S = e.triggerAntiCrawlerForceLogin,
          P = e.triggerAntiCrawlerVerification,
          E = e.enablePopup;
        if (_ && y) {
          var T, F, I, O, U, L, N, q, B, j, V, X, Q;
          if (
            (_[3]
              ? ((N = (U = _)[4]),
                (q = U[0]),
                (B = U[1]),
                (X = U[2]),
                (V = U[3]),
                (j = null === (T = L = U[6]) || void 0 === T ? void 0 : T[0]),
                (Q = null === (F = L) || void 0 === F ? void 0 : F[1]))
              : ((N = (U = _).challenge_type),
                (q = U.action_type),
                (B = U.tracking_id),
                (X = U.is_login),
                (V = U.error),
                (j =
                  null === (I = U.captcha_extra_info) || void 0 === I
                    ? void 0
                    : I.tracking_id),
                (Q =
                  null === (O = U.captcha) || void 0 === O
                    ? void 0
                    : O.business)),
            V !== z.t)
          )
            return;
          if (
            location.href.includes("/verify/traffic") ||
            location.href.includes("/verify/captcha")
          )
            return;
          if (C && x && C()) return;
          if (q === c.Block) {
            var J =
              k === w.SHOPEELIVE ? location.origin + "/pc/setup" : y.homeUrl;
            return void H(
              ((g = {}),
              (g.trackingId = B || ""),
              (g.shouldReplaceHistory = y.shouldReplaceHistory),
              (g.redirectType = y.redirectType),
              (g.isLoggedIn = X),
              (g.verificationPageHost = y.verificationPageHost),
              (g.homeUrl = J),
              g)
            );
          }
          if (N === o.Captcha) {
            var Y =
              k == w.PC || k == w.RW
                ? (Q || "TSS") + "." + w[k]
                : A
                ? (Q || "TSS") + "." + A
                : y.appKey;
            if (!Y) return;
            return void (E && y.usePopupCaptcha
              ? (function (e) {
                  var t,
                    i,
                    r = e.appKey,
                    n = e.scene,
                    a = void 0 === n ? "crawler_item" : n,
                    o = e.clientId,
                    s = e.shouldReplaceHistory,
                    c = e.antiBotTrackingId,
                    l = e.verificationPageHost;
                  if (W) {
                    if (document.querySelector("#sfu-captcha-modal")) return;
                    var p = document.createElement("div");
                    p.setAttribute("id", "sfu-captcha-modal"),
                      p.classList.add("sfu-captcha-modal"),
                      p.classList.add("open");
                    var u = document.createElement("div");
                    u.classList.add("sfu-captcha-modal-body"), p.appendChild(u);
                    var h = document.createElement("iframe"),
                      f =
                        (((i = { is_initial: !0 }).app_key = r),
                        (i.scene = a),
                        (i.client_id = o),
                        (i.redirect_type = d.Internal),
                        (i.use_popup = !0),
                        (i.should_replace_history = s),
                        (i.anti_bot_tracking_id = c),
                        (i.__mobile__ = "1"),
                        i),
                      v = de(
                        (((t = { isRelative: !1 }).host =
                          l ||
                          window.location.protocol +
                            "//" +
                            window.location.host),
                        (t.path = D),
                        (t.params = f),
                        t)
                      );
                    h.setAttribute("src", v),
                      h.setAttribute("name", "sfu-captcha-modal-iframe"),
                      (h.style.width = "100%"),
                      (h.style.height = "100%"),
                      u.appendChild(h),
                      document.body.appendChild(p),
                      document.body.classList.add("sfu-captcha-modal-open");
                    var m = document.createElement("script");
                    m.setAttribute("type", "text/javascript");
                    var g = document.createTextNode(
                      "\n    function closeSFUCaptchaModal() {\n        var sfuCaptchaModal = document.querySelector('#sfu-captcha-modal');\n        if(sfuCaptchaModal){\n          sfuCaptchaModal.remove();\n        }\n        document.body.classList.remove('sfu-captcha-modal-open');\n    }\n    "
                    );
                    m.appendChild(g);
                    var y = document.createElement("style");
                    y.setAttribute("type", "text/css");
                    var _ = document.createTextNode(
                      "\n    .sfu-captcha-modal {\n        display: none;\n        position: fixed; \n        inset: 0;\n        background-color: rgba(0, 0, 0, .75);\n        z-index: 100000;\n        overflow: auto;\n    }\n    .sfu-captcha-modal.open {\n        display: flex;\n    }\n    .sfu-captcha-modal-body {\n        width: 80vw;\n        max-width: 500px;\n        min-width:  400px;\n        height: 550px;\n        margin: auto; \n        background: #fff;\n    }\n    .sfu-captcha-modal iframe {\n      box-sizing: border-box;\n    }\n    body.sfu-captcha-modal-open {\n        overflow: hidden;\n    }"
                    );
                    y.appendChild(_),
                      document.getElementsByTagName("head")[0].appendChild(y),
                      document.getElementsByTagName("head")[0].appendChild(m);
                  }
                })(
                  ((m = {}),
                  (m.clientId = y.captchaClientId || ""),
                  (m.next = y.next || location.href),
                  (m.appKey = Y),
                  (m.scene = "crawler_item"),
                  (m.redirectType = y.redirectType),
                  (m.shouldReplaceHistory = y.shouldReplaceHistory),
                  (m.verificationPageHost = y.verificationPageHost),
                  (m.antiBotTrackingId = j),
                  m)
                )
              : P(
                  ((v = {}),
                  (v.clientId = y.captchaClientId || ""),
                  (v.next = y.next || location.href),
                  (v.appKey = Y),
                  (v.scene = "crawler_item"),
                  (v.redirectType = y.redirectType),
                  (v.shouldReplaceHistory = y.shouldReplaceHistory),
                  (v.verificationPageHost = y.verificationPageHost),
                  (v.antiBotTrackingId = j),
                  (v.setRedirecting = x),
                  v)
                ));
          }
          if (N === o.Redirect) {
            var G = oe(),
              K = se();
            if (G && K) {
              var $ =
                "https://" +
                (M.cid[K] || "xiapi") +
                "." +
                (M.env[G] || "") +
                "xiapibuy.com";
              location.replace($);
            }
            return;
          }
          if (N === o.ForceLogin) {
            var Z, ee;
            if (
              location.href.includes("/buyer/login") ||
              location.href.includes("/buyer/authenticate")
            )
              return;
            var te =
              location.pathname.startsWith("/product") &&
              location.href.includes("gads_t_sig");
            te &&
              (k === w.PC || k === w.RW) &&
              (window.BITrack
                ? window.BITrack(
                    (((f = {}).data =
                      (((h = { type: "v3" }).timestamp = new Date().getTime()),
                      (h.info =
                        (((u = { operation: "action_sfu_handle" }).data =
                          (((p = { code: 1 }).scenario = JSON.stringify(
                            (((l = {}).response = _), (l.pathname = b), l)
                          )),
                          p)),
                        u)),
                      h)),
                    f)
                  )
                : !ae(window.location.href) &&
                  (null === (Z = window) ||
                    void 0 === Z ||
                    null === (ee = Z.Sentry) ||
                    void 0 === ee ||
                    ee.captureMessage(
                      "BITrack is not defined",
                      (((s = {}).tags =
                        (((a = {
                          sentryProjectSlug: "shopee-secure-fetch-utils",
                        }).sfuVersion = "" + _e),
                        a)),
                      s)
                    ))),
              S(
                (((n = {}).next = y.next || location.href),
                (n.redirectType = y.redirectType),
                (n.shouldReplaceHistory = y.shouldReplaceHistory),
                (n.verificationPageHost = y.verificationPageHost),
                (n.isFromGoogleAdsPDP = te),
                (n.trackingId = B || ""),
                n)
              );
          }
          if (N === o.FORCE_DOWNLOAD_APP)
            return void H(
              ((r = {}),
              (r.trackingId = B || ""),
              (r.shouldReplaceHistory = y.shouldReplaceHistory),
              (r.redirectType = y.redirectType),
              (r.verificationPageHost = y.verificationPageHost),
              (r.error_type = R.FORCEAPP),
              r)
            );
          if (N === o.FORCE_BIND_PHONE)
            return void H(
              ((i = {}),
              (i.trackingId = B || ""),
              (i.shouldReplaceHistory = y.shouldReplaceHistory),
              (i.redirectType = y.redirectType),
              (i.verificationPageHost = y.verificationPageHost),
              (i.error_type = R.BINDPHONE),
              i)
            );
          if (N === o.VERIFY_PHONE)
            return void H(
              ((t = {}),
              (t.trackingId = B || ""),
              (t.shouldReplaceHistory = y.shouldReplaceHistory),
              (t.redirectType = y.redirectType),
              (t.verificationPageHost = y.verificationPageHost),
              (t.error_type = R.VERIFYPHONE),
              t)
            );
        }
      }
      var Re = function (e, t, i, r) {
          if (!e.allowCors && !i) return !1;
          if (
            r &&
            e.limitMethods &&
            !e.limitMethods.some(function (e) {
              return e.toLowerCase() === r.toLowerCase();
            })
          )
            return !1;
          switch (e.match) {
            case "contain":
              if (t.includes(e.policyurl))
                return (
                  !e.exclude ||
                  !e.exclude.some(function (e) {
                    return t.includes(e);
                  })
                );
              break;
            case "regexp":
              if (e.policyurl.test(t))
                return (
                  !e.exclude ||
                  !e.exclude.some(function (e) {
                    return t.includes(e);
                  })
                );
              break;
            case "full":
              if (e.policyurl === t) return !0;
          }
          return !1;
        },
        ke = function (e, t, i, r) {
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            if (Re(a, t, i, r)) return a;
          }
        },
        Ae = (function () {
          function e(e) {
            void 0 === e && (e = 20), (this.items = []), (this.maxSize = e);
          }
          var t = e.prototype;
          return (
            (t.enqueue = function (e) {
              this.size() >= this.maxSize &&
                (this.dequeue(), e instanceof He && this.items[0].civid),
                this.items.push(e);
            }),
            (t.dequeue = function () {
              return this.isEmpty() ? "Underflow" : this.items.shift();
            }),
            (t.isEmpty = function () {
              return 0 === this.items.length;
            }),
            (t.size = function () {
              return this.items.length;
            }),
            (t.getItems = function () {
              return this.items;
            }),
            e
          );
        })(),
        xe = (function () {
          function e(e, t) {
            (this.key = e), (this.timestamp = t);
          }
          return (
            (e.prototype.serialize = function () {
              var e = new ArrayBuffer(6),
                t = new DataView(e);
              return (
                t.setUint16(0, this.key), t.setUint32(2, this.timestamp), e
              );
            }),
            e
          );
        })(),
        Ce = (function () {
          function e(e, t, i) {
            (this.x = e), (this.y = t), (this.timestamp = i);
          }
          return (
            (e.prototype.serialize = function () {
              var e = new ArrayBuffer(8),
                t = new DataView(e);
              return (
                t.setUint16(0, this.x),
                t.setUint16(2, this.y),
                t.setUint32(4, this.timestamp),
                e
              );
            }),
            e
          );
        })(),
        He = (function () {
          function e(e, t, i, r, n, a, o, s, c, l, p) {
            (this.operation = e),
              (this.timestamp = t),
              (this.civid = i),
              (this.page_type = r),
              (this.page_section = n),
              (this.target_type = a),
              (this.last_civ_id = o),
              (this.itemidl = s),
              (this.itemidr = c),
              (this.shopidl = l),
              (this.shopidr = p);
          }
          return (
            (e.prototype.serialize = function (e) {
              var t = new ArrayBuffer(34),
                i = new DataView(t);
              i.setUint8(0, this.operation),
                i.setUint32(1, this.timestamp),
                i.setUint8(5, e.indexOf(this.civid));
              for (var r = 0; r < this.page_type.length; r++)
                i.setUint8(6 + r, this.page_type.charCodeAt(r));
              for (r = 0; r < this.page_section.length; r++)
                i.setUint8(11 + r, this.page_section.charCodeAt(r));
              return (
                i.setUint8(16, this.target_type),
                i.setUint8(17, e.indexOf(this.last_civ_id)),
                i.setUint32(18, this.itemidl),
                i.setUint32(22, this.itemidr),
                i.setUint32(26, this.shopidl),
                i.setUint32(30, this.shopidr),
                t
              );
            }),
            e
          );
        })(),
        Se = (function () {
          function e(e, t, i, r, n, a, o, s) {
            (this.basetimestampl = e),
              (this.basetimestampr = t),
              (this.cividmaplen = i),
              (this.eventlen = r),
              (this.oribitlen = n),
              (this.cividmap = a),
              (this.currentTimeOffset = o),
              (this.nonce = s);
          }
          return (
            (e.prototype.serialize = function () {
              var e = this.cividmap.length,
                t = new ArrayBuffer(23 + e),
                i = new DataView(t);
              i.setUint32(0, this.basetimestampl),
                i.setUint32(4, this.basetimestampr),
                i.setUint8(8, this.cividmaplen),
                i.setUint8(9, this.eventlen),
                i.setUint8(10, this.oribitlen);
              for (var r = 0; r < e; r++)
                i.setUint8(11 + r, this.cividmap.charCodeAt(r));
              for (
                i.setUint32(11 + e, this.currentTimeOffset), r = 0;
                r < 8;
                r++
              )
                i.setUint8(15 + e + r, this.nonce[r]);
              return t;
            }),
            e
          );
        })(),
        Pe = new Ae(20),
        Ee = new Ae(21),
        Te = new Ae(5),
        De = new Ae(5),
        Fe = { view: 1, auto_view: 2, click: 3, impression: 4, other: 5 },
        Ie = {
          item: 1,
          shop: 2,
          voucher: 3,
          banner: 4,
          category: 5,
          skinny_banner: 6,
          cluster: 7,
          tab: 8,
          other: 9,
        };
      function Oe() {
        return [
          "Tk8XDnsQq5ySTxa8t7aI",
          "Li3MgnsQq5ySTxa8t7aI",
          "DwpXg7DQJNnADiQuJCn5LiySb5yYDi3KTxXQghySJC3StinWgb",
          "DwpXg7DQJNnADiQuJCn5LiySaC3Sq7ylL7DXLG",
          "DwpXg7DQJNnADiQuJCn5LiySyCySTkgXq7n6Tk3A",
          "J7MODkUNy7nXDhgOJNaCJhQATxb",
          "qk86TtgSqxyNb73AgCQW",
          "g7y6y7yRaiy7TksQaCQAg7ySJwpXLWb",
        ];
      }
      function Ue() {
        try {
          var e =
              void 0 !== performance.timeOrigin
                ? performance.timeOrigin
                : performance.timing.navigationStart,
            t = Math.floor(performance.now());
          e < Math.pow(10, 10) && (e *= 1e3);
          var i = Math.floor(e / Math.pow(10, 9)),
            r = Math.floor(e % Math.pow(10, 9)),
            n = [];
          Pe.getItems().map(function (e) {
            n.includes(e.civid) || "" === e.civid || n.push(e.civid),
              n.includes(e.last_civ_id) ||
                "" === e.last_civ_id ||
                n.push(e.last_civ_id);
          }),
            Te.getItems().map(function (e) {
              n.includes(e.civid) || "" === e.civid || n.push(e.civid),
                n.includes(e.last_civ_id) ||
                  "" === e.last_civ_id ||
                  n.push(e.last_civ_id);
            });
          var a = (function (e) {
              void 0 === e && (e = 8);
              for (var t = new Uint8Array(e), i = 0; i < e; i++)
                t[i] = Math.floor(256 * Math.random());
              return t;
            })(),
            o = new Se(
              i,
              r,
              n.length,
              Pe.size() + Te.size(),
              Ee.size(),
              n.join(""),
              t,
              a
            ),
            s =
              23 +
              o.cividmap.length +
              34 * (Pe.size() + Te.size()) +
              8 * Ee.size() +
              6 * De.size(),
            c = new ArrayBuffer(s),
            l = new Uint8Array(c);
          l.set(new Uint8Array(o.serialize()), 0);
          var p = 23 + o.cividmap.length;
          Pe.getItems().map(function (e) {
            (null == e ? void 0 : e.serialize) &&
              (l.set(new Uint8Array(e.serialize(n)), p), (p += 34));
          }),
            Te.getItems().map(function (e) {
              (null == e ? void 0 : e.serialize) &&
                (l.set(new Uint8Array(e.serialize(n)), p), (p += 34));
            }),
            Ee.getItems().map(function (e) {
              (null == e ? void 0 : e.serialize) &&
                (l.set(new Uint8Array(e.serialize()), p), (p += 8));
            }),
            De.getItems().map(function (e) {
              (null == e ? void 0 : e.serialize) &&
                (l.set(new Uint8Array(e.serialize()), p), (p += 6));
            });
          for (
            var u = btoa(String.fromCharCode.apply(null, Array.from(l))),
              d = "",
              h = 1,
              f = 0;
            f < u.length;
            f++
          )
            u[f] === u[f + 1]
              ? h++
              : ((d += h >= 5 ? "A|" + h + "|" : u[f].repeat(h)), (h = 1));
          return d;
        } catch (e) {
          return we(e), "error";
        }
      }
      function Le(e) {
        var t,
          r = e.locale,
          n = e.env,
          a = e.platform,
          o = e.source,
          s = e.ACConfig,
          c = e.performanceTrackings,
          l = void 0 === c ? U : c,
          p = e.enableGlobalHook,
          u = e.enableTMS,
          h = e.enablePopup,
          f = e.policies,
          v = e.onError,
          g = void 0 === v ? function () {} : v,
          y = null,
          _ = null,
          b = null,
          R = null,
          k = null,
          D = null,
          F = !1;
        function I() {
          F = !0;
        }
        function O() {
          return F;
        }
        function L(e) {
          (a === w.PC || a === w.RW) && we(e);
        }
        function M(e) {
          return z.apply(this, arguments);
        }
        function z() {
          return (
            (z = (0, x.A)(
              (0, A.A)().mark(function e(t) {
                var o, s, c, p, u, d, h, f, v, g;
                return (0, A.A)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((o = t.history),
                            (s = t.onFail),
                            (c = void 0 === s ? function () {} : s),
                            (f = ge),
                            a === w.BANK ||
                              (o && (D = o), null != _ || null != b || !W))
                          ) {
                            e.next = 21;
                            break;
                          }
                          return (
                            (e.prev = 3),
                            l[f(0)].onInit(),
                            l[f(1)].onInit(),
                            (_ = (0, x.A)(
                              (0, A.A)().mark(function e() {
                                return (0, A.A)().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return e.abrupt(
                                          "return",
                                          i.e(6476).then(i.bind(i, 14854))
                                        );
                                      case 1:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )()),
                            (e.next = 9),
                            _
                          );
                        case 9:
                          (y = e.sent),
                            l[f(1)].onComplete(),
                            (r || n) &&
                              (y.default
                                ? y.default.setSdkConfig(
                                    (0, C.A)(
                                      {},
                                      r ? (((h = {}).region = r), h) : {},
                                      n ? (((d = {}).env = n), d) : {}
                                    )
                                  )
                                : y.setSdkConfig(
                                    (0, C.A)(
                                      {},
                                      r ? (((u = {}).region = r), u) : {},
                                      n ? (((p = {}).env = n), p) : {}
                                    )
                                  )),
                            (b = y.default
                              ? y.default.initSdk(m.Dfp)
                              : y.initSdk(m.Dfp)),
                            (R = ye(5e3, function () {
                              return { timeout: !0 };
                            })),
                            (k = ye(1e3, function () {
                              return { timeout: !0 };
                            })),
                            l[f(0)].onComplete(),
                            (e.next = 21);
                          break;
                        case 18:
                          (e.prev = 18),
                            (e.t0 = e.catch(3)),
                            L(e.t0),
                            null !== (v = (g = l[f(0)]).onFail) &&
                              void 0 !== v &&
                              v.call(g),
                            c();
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 18]]
                );
              })
            )),
            z.apply(this, arguments)
          );
        }
        function j() {
          var e,
            t = (function (e) {
              for (var t = "", i = 0; i < e.length; i++)
                t += e[i].toString(16).padStart(2, "0");
              return t;
            })(
              (function () {
                for (var e = new Uint8Array(8), t = 0; t < 8; t++)
                  e[t] = Math.floor(256 * Math.random());
                return e;
              })()
            );
          return ((e = {})["af-ac-enc-dat"] = t), e;
        }
        function V(e) {
          return X.apply(this, arguments);
        }
        function X() {
          return (
            (X = (0, x.A)(
              (0, A.A)().mark(function e(t) {
                var i, r;
                return (0, A.A)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = (void 0 === t ? {} : t).shouldWaitForDfpInit),
                            (r = void 0 !== i && i),
                            (e.prev = 1),
                            (e.next = 4),
                            _
                          );
                        case 4:
                          return (e.next = 6), Promise.race([b, r ? R : k]);
                        case 6:
                          return e.abrupt(
                            "return",
                            y.default
                              ? y.default.getClientCheckData()
                              : y.getClientCheckData()
                          );
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", (L(e.t0), g(e.t0), ""))
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            )),
            X.apply(this, arguments)
          );
        }
        function Q() {
          return (
            (Q = (0, x.A)(
              (0, A.A)().mark(function e(t) {
                var i, r, n, a, o, s, c, l;
                return (0, A.A)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = t.shouldWaitForDfpInit),
                            (r = void 0 !== i && i),
                            (n = t.useHeader),
                            (a = t.customDfp),
                            (e.prev = 1),
                            (e.next = 4),
                            _
                          );
                        case 4:
                          return (e.next = 6), Promise.race([b, r ? R : k]);
                        case 6:
                          if ("string" != typeof a) {
                            e.next = 10;
                            break;
                          }
                          (e.t0 = a), (e.next = 13);
                          break;
                        case 10:
                          return (e.next = 12), V((((l = {})[ge(5)] = r), l));
                        case 12:
                          e.t0 = e.sent;
                        case 13:
                          return (
                            (o = e.t0),
                            e.abrupt(
                              "return",
                              n
                                ? o.length >= 300
                                  ? {}
                                  : (((c = {})[S] = o), c)
                                : (((s = {})[H] = o), s)
                            )
                          );
                        case 17:
                          return (
                            (e.prev = 17),
                            (e.t1 = e.catch(1)),
                            e.abrupt("return", (L(e.t1), g(e.t1), {}))
                          );
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 17]]
                );
              })
            )),
            Q.apply(this, arguments)
          );
        }
        function J() {
          return "" + _e;
        }
        function Y() {
          return G.apply(this, arguments);
        }
        function G() {
          return (
            (G = (0, x.A)(
              (0, A.A)().mark(function e() {
                var t;
                return (0, A.A)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), _;
                        case 3:
                          return (
                            (t = y.default
                              ? y.default.getDegradedData()
                              : y.getDegradedData()),
                            e.abrupt(
                              "return",
                              t && "string" == typeof t
                                ? [].concat(t).some(function (e) {
                                    return e.charCodeAt(0) > 127;
                                  })
                                  ? ""
                                  : t
                                : ""
                            )
                          );
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return", (L(e.t0), ""))
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            )),
            G.apply(this, arguments)
          );
        }
        function K() {
          return (
            (K = (0, x.A)(
              (0, A.A)().mark(function e() {
                var t;
                return (0, A.A)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), _;
                        case 3:
                          if (!y.default) {
                            e.next = 9;
                            break;
                          }
                          return (e.next = 6), y.default.getLongToken();
                        case 6:
                          (e.t0 = e.sent), (e.next = 12);
                          break;
                        case 9:
                          return (e.next = 11), y.getLongToken();
                        case 11:
                          e.t0 = e.sent;
                        case 12:
                          return (
                            (t = e.t0),
                            e.abrupt(
                              "return",
                              t && "string" == typeof t ? t : ""
                            )
                          );
                        case 16:
                          return (
                            (e.prev = 16),
                            (e.t1 = e.catch(0)),
                            e.abrupt("return", (L(e.t1), ""))
                          );
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 16]]
                );
              })
            )),
            K.apply(this, arguments)
          );
        }
        return (
          (function () {
            if (W && p && !window.__fu_hook) {
              (window.__fu_hook = !0),
                u &&
                  (function () {
                    try {
                      document.addEventListener("keydown", function (e) {
                        try {
                          var t,
                            i = performance.now();
                          if (void 0 !== e.key && null !== e.key)
                            1 == e.key.length
                              ? (t = new xe(e.key.charCodeAt(0), i))
                              : e.key.length > 1 &&
                                (t = new xe(
                                  (e.key.charCodeAt(0) << 8) |
                                    e.key.charCodeAt(e.key.length - 1),
                                  i
                                )),
                              De.enqueue(t);
                          else if (void 0 !== e.keyCode) {
                            var r = new xe(e.keyCode, i);
                            De.enqueue(r);
                          }
                        } catch (e) {
                          return we(e), "error";
                        }
                      }),
                        navigator.maxTouchPoints > 0
                          ? (document.addEventListener(
                              "touchmove",
                              function (e) {
                                try {
                                  if (
                                    void 0 !== e.touches &&
                                    null !== e.touches
                                  ) {
                                    var t = void 0;
                                    if (
                                      (e.touches.length > 0
                                        ? (t = e.touches)
                                        : e.changedTouches.length > 0 &&
                                          (t = e.changedTouches),
                                      void 0 !== t)
                                    ) {
                                      var i = performance.now(),
                                        r = new Ce(
                                          t[0].clientX + 1e4,
                                          t[0].clientY,
                                          i
                                        );
                                      Ee.enqueue(r);
                                    }
                                  }
                                } catch (e) {
                                  return we(e), "error";
                                }
                              }
                            ),
                            document.addEventListener("touchend", function (e) {
                              try {
                                if (
                                  void 0 !== e.touches &&
                                  null !== e.touches
                                ) {
                                  var t = void 0;
                                  if (
                                    (e.touches.length > 0
                                      ? (t = e.touches)
                                      : e.changedTouches.length > 0 &&
                                        (t = e.changedTouches),
                                    void 0 !== t)
                                  ) {
                                    var i = performance.now(),
                                      r = new Ce(
                                        t[0].clientX + 1e4,
                                        t[0].clientY,
                                        i
                                      );
                                    Ee.enqueue(r);
                                  }
                                }
                              } catch (e) {
                                return we(e), "error";
                              }
                            }))
                          : (document.addEventListener(
                              "mousemove",
                              function (e) {
                                try {
                                  var t = performance.now(),
                                    i = new Ce(e.clientX, e.clientY, t);
                                  Ee.enqueue(i);
                                } catch (e) {
                                  return we(e), "error";
                                }
                              }
                            ),
                            document.addEventListener("click", function (e) {
                              try {
                                var t = performance.now(),
                                  i = new Ce(e.clientX + 1e4, e.clientY, t);
                                Ee.enqueue(i);
                              } catch (e) {
                                return we(e), "error";
                              }
                            }));
                    } catch (e) {
                      we(e);
                    }
                    if ("function" == typeof window.IDBObjectStore) {
                      var e = IDBObjectStore.prototype.add;
                      try {
                        IDBObjectStore.prototype.add = function (t, i) {
                          try {
                            if (
                              "object" == typeof t &&
                              null !== t &&
                              null !== t.data &&
                              void 0 !== t.data
                            ) {
                              var r = JSON.parse(t.data);
                              if (
                                null !== r.operation &&
                                void 0 !== r.operation
                              ) {
                                var n =
                                    -1 !== Fe[r.operation]
                                      ? Fe[r.operation]
                                      : 0,
                                  a =
                                    r.event_timestamp -
                                    (void 0 !== performance.timeOrigin
                                      ? performance.timeOrigin
                                      : performance.timing.navigationStart),
                                  o = r.civ_id.replaceAll("-", ""),
                                  s = r.page_type.slice(0, 5),
                                  c = r.page_section.slice(0, 5),
                                  l = 0;
                                "" != r.target_type &&
                                  null !== r.target_type &&
                                  (l = Ie[r.target_type]
                                    ? Ie[r.target_type]
                                    : 9);
                                var p = "";
                                null !== r.last_civ_id &&
                                  void 0 !== r.last_civ_id &&
                                  (p = r.last_civ_id.replaceAll("-", ""));
                                var u = 0,
                                  d = 0;
                                if (null !== r.data && void 0 !== r.data) {
                                  var h = r.data;
                                  if (
                                    null !== h.viewed_objects &&
                                    void 0 !== h.viewed_objects &&
                                    h.viewed_objects.length > 0
                                  ) {
                                    var f = h.viewed_objects[0];
                                    null != f &&
                                      (null !== f.ctx_itemid &&
                                        void 0 !== f.ctx_itemid &&
                                        (u = f.ctx_itemid),
                                      null !== f.itemid &&
                                        void 0 !== f.itemid &&
                                        (u = f.itemid),
                                      null !== f.item_id &&
                                        void 0 !== f.item_id &&
                                        (u = f.item_id),
                                      null !== f.ctx_shopid &&
                                        void 0 !== f.ctx_shopid &&
                                        (d = f.ctx_shopid),
                                      null !== f.shopid &&
                                        void 0 !== f.shopid &&
                                        (d = f.shopid),
                                      null !== f.shop_id &&
                                        void 0 !== f.shop_id &&
                                        (d = f.shop_id));
                                  }
                                }
                                var v = Math.floor(u / Math.pow(10, 9)),
                                  m = u % Math.pow(10, 9),
                                  g = Math.floor(d / Math.pow(10, 9)),
                                  y = d % Math.pow(10, 9);
                                3 == n
                                  ? Te.enqueue(
                                      new He(n, a, o, s, c, l, p, v, m, g, y)
                                    )
                                  : Pe.enqueue(
                                      new He(n, a, o, s, c, l, p, v, m, g, y)
                                    );
                              }
                            }
                          } catch (e) {
                            we(e);
                          }
                          return e.call(this, t, i);
                        };
                      } catch (e) {
                        we(e);
                      }
                    }
                  })();
              var e = window.fetch;
              window.fetch = (0, x.A)(
                (0, A.A)().mark(function t() {
                  var i,
                    c,
                    p,
                    v,
                    m,
                    g,
                    y,
                    _,
                    b,
                    R,
                    k,
                    x,
                    H,
                    S,
                    F,
                    U,
                    z,
                    V,
                    W,
                    X,
                    Q,
                    G,
                    K,
                    $,
                    Z,
                    ee,
                    te,
                    ie,
                    re,
                    ne,
                    ae,
                    oe,
                    se,
                    ce,
                    le,
                    ue,
                    de,
                    he = arguments;
                  return (0, A.A)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            for (
                              i = he.length, c = new Array(i), p = 0;
                              p < i;
                              p++
                            )
                              c[p] = he[p];
                            if (
                              ((R = c[0]),
                              (k = c[1]),
                              (t.prev = 2),
                              (U =
                                (F =
                                  window.Request && R instanceof Request
                                    ? new URL(R.url, window.location.origin)
                                    : new URL(
                                        R.toString(),
                                        window.location.origin
                                      )).origin === window.location.origin),
                              (z = F.pathname.replace(/\/+$/, "")),
                              (V =
                                null === (x = k) ||
                                void 0 === x ||
                                null === (H = x.method) ||
                                void 0 === H
                                  ? void 0
                                  : H.toLowerCase()),
                              (W = performance.now()),
                              (Q = !1),
                              !(X = !1) &&
                                null !== (S = k) &&
                                void 0 !== S &&
                                S.anticrawler &&
                                (X = !0),
                              u &&
                                (N.some(function (e) {
                                  return z === e;
                                }) ||
                                  q.some(function (e) {
                                    return z === e;
                                  }) ||
                                  B.some(function (e) {
                                    return z === e;
                                  })) &&
                                (Q = !0),
                              !X &&
                                f &&
                                Array.isArray(f) &&
                                f.length > 0 &&
                                (X = Boolean(ke(f, z, U, V))),
                              !X)
                            ) {
                              t.next = 15;
                              break;
                            }
                            return (
                              l.hookFUFetch.onInit(),
                              M({}),
                              (Z = J()),
                              (t.next = 9),
                              Y()
                            );
                          case 9:
                            (ee = t.sent),
                              (te = j()),
                              window.Request && R instanceof Request
                                ? (R.headers.set(E, Z),
                                  R.headers.set(P, ee),
                                  Object.entries(te).forEach(function (e) {
                                    var t = e[0],
                                      i = e[1];
                                    R.headers.set(t, i);
                                  }),
                                  Q && ((ie = Ue()), R.headers.set(T, ie)))
                                : k
                                ? Array.isArray(k.headers)
                                  ? (k.headers.push([E, Z]),
                                    k.headers.push([P, ee]),
                                    Object.entries(te).forEach(function (e) {
                                      var t,
                                        i = e[0],
                                        r = e[1];
                                      (null === (t = k) || void 0 === t
                                        ? void 0
                                        : t.headers
                                      ).push([i, r]);
                                    }),
                                    Q && ((re = Ue()), k.headers.push([T, re])))
                                  : (k.headers = (0, C.A)(
                                      {},
                                      k.headers,
                                      te,
                                      (((G = {})[P] = ee), (G[E] = Z), G),
                                      Q ? (((b = {})[T] = Ue()), b) : {}
                                    ))
                                : (((_ = {}).headers = (0, C.A)(
                                    {},
                                    te,
                                    (((K = {})[P] = ee), (K[E] = Z), K),
                                    Q ? (((y = {})[T] = Ue()), y) : {}
                                  )),
                                  (k = _)),
                              (a === w.PC || a === w.RW) &&
                                (!window.__SFUC && (window.__SFUC = 0),
                                window.__SFUC++),
                              (ne = performance.now()),
                              (ae = Math.floor(ne - W)),
                              (null === ($ = k) ||
                                void 0 === $ ||
                                !$.anticrawler) &&
                                l.hookFUFetch.onComplete(ae);
                          case 15:
                            return (t.next = 17), e(R, k);
                          case 17:
                            if ((oe = t.sent) && oe.ok) {
                              t.next = 20;
                              break;
                            }
                            return t.abrupt("return", oe);
                          case 20:
                            if (
                              ((t.prev = 20),
                              (se = oe.status),
                              !(X && se >= 200 && se < 300 && 204 !== se))
                            ) {
                              t.next = 32;
                              break;
                            }
                            if (
                              !(ce = oe.headers.get("content-type")) ||
                              !ce.includes("application/json")
                            ) {
                              t.next = 32;
                              break;
                            }
                            return (t.next = 27), oe.clone().json();
                          case 27:
                            if (
                              (ue = t.sent) &&
                              "object" == typeof ue &&
                              !Array.isArray(ue)
                            ) {
                              t.next = 30;
                              break;
                            }
                            return t.abrupt("return", oe);
                          case 30:
                            (de =
                              null !== (le = k) &&
                              void 0 !== le &&
                              le.anticrawler
                                ? k.anticrawler
                                : null == s
                                ? void 0
                                : s[z]),
                              be(
                                ((m = ge),
                                ((g = {}).antiCrawlerConfig = (0, C.A)(
                                  {
                                    redirectType:
                                      a == w.PC || a == w.RW
                                        ? d.Internal
                                        : d.External,
                                    verificationPageHost:
                                      a == w.PC || a == w.RW
                                        ? location.origin
                                        : pe(
                                            ((v = {}),
                                            (v.env = n || "live"),
                                            (v.locale = r || "SG"),
                                            v)
                                          ),
                                  },
                                  de,
                                  {
                                    shouldReplaceHistory:
                                      !1 !==
                                        (null == de
                                          ? void 0
                                          : de.shouldReplaceHistory) &&
                                      "false" !==
                                        (null == de
                                          ? void 0
                                          : de.shouldReplaceHistory),
                                  }
                                )),
                                (g.response = ue),
                                (g.pathname = z),
                                (g.platform = a),
                                (g.source = o),
                                (g.setRedirecting = I),
                                (g.getRedirecting = O),
                                (g[m(2)] = function (e) {
                                  return ve((0, C.A)({}, e, { history: D }));
                                }),
                                (g[m(3)] = function (e) {
                                  return me((0, C.A)({}, e, { history: D }));
                                }),
                                (g[m(4)] = function (e) {
                                  return fe((0, C.A)({}, e, { history: D }));
                                }),
                                (g.enablePopup = h),
                                g)
                              );
                          case 32:
                            return t.abrupt("return", oe);
                          case 35:
                            return (
                              (t.prev = 35),
                              (t.t0 = t.catch(20)),
                              t.abrupt("return", (L(t.t0), oe))
                            );
                          case 38:
                            t.next = 43;
                            break;
                          case 40:
                            return (
                              (t.prev = 40),
                              (t.t1 = t.catch(2)),
                              t.abrupt("return", (L(t.t1), e.apply(void 0, c)))
                            );
                          case 43:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [
                      [2, 40],
                      [20, 35],
                    ]
                  );
                })
              );
              var t = XMLHttpRequest.prototype.open,
                i = XMLHttpRequest.prototype.setRequestHeader,
                c = XMLHttpRequest.prototype.send;
              (XMLHttpRequest.prototype.open = function () {
                for (
                  var e = arguments.length, i = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  i[r] = arguments[r];
                (this.openargs = i), (this.headers = {}), t.apply(this, i);
              }),
                (XMLHttpRequest.prototype.setRequestHeader = function (e, t) {
                  (this.headers[e] = t), i.call(this, e, t);
                }),
                (XMLHttpRequest.prototype.send = (function () {
                  var e = (0, x.A)(
                    (0, A.A)().mark(function e(t) {
                      var i,
                        p,
                        v,
                        m,
                        g,
                        y,
                        _,
                        b,
                        R,
                        k,
                        x,
                        H,
                        S,
                        F,
                        U,
                        z = this;
                      return (0, A.A)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0),
                                  (i = ""),
                                  (p = !1),
                                  (v = !1),
                                  !this.openargs)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                if (
                                  ((m = new URL(
                                    this.openargs[1].toString(),
                                    window.location.origin
                                  )),
                                  (g = m.origin === window.location.origin),
                                  (i = m.pathname.replace(/\/+$/, "")),
                                  (y = this.openargs[0].toLowerCase()),
                                  (_ = performance.now()),
                                  f &&
                                    Array.isArray(f) &&
                                    f.length > 0 &&
                                    (p = Boolean(ke(f, i, g, y))),
                                  u &&
                                    (N.some(function (e) {
                                      return i === e;
                                    }) ||
                                      q.some(function (e) {
                                        return i === e;
                                      }) ||
                                      B.some(function (e) {
                                        return i === e;
                                      })) &&
                                    (v = !0),
                                  !p)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                for (k in (l.hookFUXhr.onInit(),
                                M({}),
                                (b = J()),
                                !this.headers[E] && this.setRequestHeader(E, b),
                                (R = j())))
                                  !this.headers[k] &&
                                    this.setRequestHeader(k, R[k]);
                                return (e.next = 14), Y();
                              case 14:
                                (x = e.sent),
                                  !this.headers[P] &&
                                    this.setRequestHeader(P, x),
                                  v &&
                                    ((H = Ue()),
                                    !this.headers[T] &&
                                      this.setRequestHeader(T, H)),
                                  (a === w.PC || a === w.RW) &&
                                    (!window.__SFUC && (window.__SFUC = 0),
                                    window.__SFUC++),
                                  (S = performance.now()),
                                  (F = Math.floor(S - _)),
                                  l.hookFUXhr.onComplete(F);
                              case 19:
                                (U = this.onreadystatechange),
                                  (this.onreadystatechange = function () {
                                    if (z.readyState === XMLHttpRequest.DONE)
                                      try {
                                        if (
                                          p &&
                                          z.status >= 200 &&
                                          z.status < 300 &&
                                          204 !== z.status
                                        ) {
                                          var e =
                                            z.getResponseHeader("Content-Type");
                                          if (
                                            e &&
                                            !e.includes("application/json")
                                          )
                                            return;
                                          var t = z.responseType;
                                          if (
                                            "blob" == t ||
                                            "arraybuffer" == t ||
                                            "document" == t
                                          )
                                            return;
                                          var c =
                                              t && "text" !== t && z.response
                                                ? z.response
                                                : JSON.parse(z.responseText),
                                            l = null == s ? void 0 : s[i];
                                          be(
                                            ((f = ge),
                                            ((v = {}).antiCrawlerConfig = (0,
                                            C.A)(
                                              {
                                                redirectType:
                                                  a == w.PC || a == w.RW
                                                    ? d.Internal
                                                    : d.External,
                                                verificationPageHost:
                                                  a == w.PC || a == w.RW
                                                    ? location.origin
                                                    : pe(
                                                        ((u = {}),
                                                        (u.env = n || "live"),
                                                        (u.locale = r || "SG"),
                                                        u)
                                                      ),
                                              },
                                              l,
                                              {
                                                shouldReplaceHistory:
                                                  "false" !==
                                                  (null == l
                                                    ? void 0
                                                    : l.shouldReplaceHistory),
                                              }
                                            )),
                                            (v.response = c),
                                            (v.pathname = i),
                                            (v.source = o),
                                            (v.platform = a),
                                            (v.setRedirecting = I),
                                            (v.getRedirecting = O),
                                            (v[f(2)] = function (e) {
                                              return ve(
                                                (0, C.A)({}, e, { history: D })
                                              );
                                            }),
                                            (v[f(3)] = function (e) {
                                              return me(
                                                (0, C.A)({}, e, { history: D })
                                              );
                                            }),
                                            (v[f(4)] = function (e) {
                                              return fe(
                                                (0, C.A)({}, e, { history: D })
                                              );
                                            }),
                                            (v.enablePopup = h),
                                            v)
                                          );
                                        }
                                      } catch (r) {
                                        L(r);
                                      }
                                    for (
                                      var u,
                                        f,
                                        v,
                                        m = arguments.length,
                                        g = new Array(m),
                                        y = 0;
                                      y < m;
                                      y++
                                    )
                                      g[y] = arguments[y];
                                    null == U || U.apply(z, g);
                                  }),
                                  (e.next = 26);
                                break;
                              case 23:
                                (e.prev = 23), (e.t0 = e.catch(0)), L(e.t0);
                              case 26:
                                return (
                                  (e.prev = 26), c.call(this, t), e.finish(26)
                                );
                              case 29:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 23, 26, 29]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })());
            }
          })(),
          ((t = {}).i = M),
          (t.o = J),
          (t.p = Y),
          (t.l = function () {
            return K.apply(this, arguments);
          }),
          (t.u = j),
          (t.h = function (e) {
            return fe((0, C.A)({}, e, { history: D }));
          }),
          (t.v = function (e) {
            return ve((0, C.A)({}, e, { history: D }));
          }),
          (t.m = function (e) {
            return me((0, C.A)({}, e, { history: D }));
          }),
          (t._ = V),
          (t.R = function (e) {
            return Q.apply(this, arguments);
          }),
          (t.getRedirecting = O),
          (t.setRedirecting = I),
          (t.ACConfig = s),
          t
        );
      }
      var Me,
        Ne,
        qe,
        Be,
        ze,
        je,
        Ve,
        We,
        Xe,
        Qe,
        Je,
        Ye,
        Ge,
        Ke,
        $e,
        Ze,
        et,
        tt,
        it,
        rt,
        nt,
        at,
        ot,
        st,
        ct,
        lt,
        pt,
        ut,
        dt,
        ht,
        ft,
        vt,
        mt,
        gt,
        yt,
        _t,
        wt,
        bt,
        Rt,
        kt =
          (((Ne = {})["/webapi/v1/shop_page/replay/add"] = {
            shouldReplaceHistory: "false",
          }),
          (Ne["/webapi/v1/host_config/permission"] = {
            shouldReplaceHistory: "false",
          }),
          (Ne["/webapi/v1/item/my_shop"] = { shouldReplaceHistory: "false" }),
          (Ne["/webapi/v1/item/my_likes"] = { shouldReplaceHistory: "false" }),
          (Ne["/webapi/v1/item/my_recent"] = { shouldReplaceHistory: "false" }),
          (Ne["/webapi/v1/item/parse_url"] = { shouldReplaceHistory: "false" }),
          Ne),
        At =
          (((Me = {})["/api/v4/microsite/get_items"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/market_coin/get_product_feeds"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v2/add_on_deal/info"] = { shouldReplaceHistory: "false" }),
          (Me["/api/v2/add_on_deal/get_main_item_info"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v2/add_on_deal/get_add_on_deal_list"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v2/add_on_deal/get_sub_item_info"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/flash_sale/flash_sale_get_items"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/flash_sale/spm/get_all_itemids"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/pdp/other_quantities/get"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/product/get_shop_info"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/search/search_prefills"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/search/search_hint"] = {
            shouldReplaceHistory: "false",
          }),
          (Me["/api/v4/search/trending_search"] = {
            shouldReplaceHistory: "false",
          }),
          Me),
        xt = [
          ((bt = {
            policyurl: /api\/v3\/affiliateplatform\/.*/,
            match: "regexp",
          }),
          bt),
          ((wt = {
            policyurl: /api\/pas\/v1\/setup_helper\/.*/,
            match: "regexp",
          }),
          wt),
          ((_t = { policyurl: "api/selleradmin/v1/product", match: "contain" }),
          _t),
          ((yt = {
            policyurl: "api/marketing/v4/review_prize/get_products",
            match: "contain",
          }),
          yt),
          ((gt = {
            policyurl: "api/marketing/v4/discount/global/get_items",
            match: "contain",
          }),
          gt),
          ((mt = {
            policyurl: "api/v3/settings/reply_shop_rating",
            match: "contain",
          }),
          mt),
          ((vt = {
            policyurl: "api/marketing/v3/public/product_selector",
            match: "contain",
          }),
          vt),
          ((ft = {
            policyurl: /webchat\/api\/v1\.2\/mini\/order\/.*/,
            match: "regexp",
          }),
          ft),
          ((ht = {
            policyurl: /webchat\/api\/v1\.2\/order\/.*\/rate_buyer/,
            match: "regexp",
          }),
          ht),
          ((dt = {
            policyurl: /webchat\/api\/v1\.2\/order\/.*\/cancel/,
            match: "regexp",
          }),
          dt),
          ((ut = {
            policyurl: "webchat/api/v1.2/mini/orders/orders_by_buyer",
            match: "contain",
          }),
          ut),
          ((pt = {
            policyurl: "webchat/api/v1.2/orders/orders_by_buyer",
            match: "contain",
          }),
          pt),
          ((lt = {
            policyurl: "api/mkt/cmt/bidding/bidding_list",
            match: "contain",
          }),
          lt),
          ((ct = {
            policyurl: "api/mkt/cmt/nominated/nominated_entity_list",
            match: "contain",
          }),
          ct),
          ((st = {
            policyurl: "api/mkt/cmt/preview/preview_list",
            match: "contain",
          }),
          st),
          ((ot = {
            policyurl: "api/mkt/cmt/product/online/selector/verify",
            match: "contain",
          }),
          ot),
          ((at = {
            policyurl:
              "api/mkt/cmt/product/online/selector/verify_products_select_for_bid",
            match: "contain",
          }),
          at),
          ((nt = {
            policyurl: "api/crm/v1/product_selector",
            match: "contain",
          }),
          nt),
          ((rt = {
            policyurl: "api/marketing/v4/graphql/query",
            match: "contain",
          }),
          rt),
          ((it = {
            policyurl: "api/marketing/v4/public/product_selector",
            match: "contain",
          }),
          it),
          ((tt = {
            policyurl: "api/marketing/v4/shop_flash_sale/batch_items/get",
            match: "contain",
          }),
          tt),
          ((et = {
            policyurl: "api/n/decoration/public/get_flash_sale_info",
            match: "contain",
          }),
          et),
          ((Ze = {
            policyurl: "api/n/decoration/public/get_mega_campaign_items",
            match: "contain",
          }),
          Ze),
          (($e = {
            policyurl: "api/marketing/v4/review_prize/get_recommend_products",
            match: "contain",
          }),
          $e),
          ((Ke = {
            policyurl: "api/marketing/v4/review_prize/get_svs_item_info",
            match: "contain",
          }),
          Ke),
          ((Ge = {
            policyurl: "api/marketing/v4/review_prize/item/list",
            match: "contain",
          }),
          Ge),
          ((Ye = {
            policyurl: "api/marketing/v4/review_prize/product_selector",
            match: "contain",
          }),
          Ye),
          ((Je = {
            policyurl: "api/marketing/v3/voucher/product_selector",
            match: "contain",
          }),
          Je),
          ((Qe = {
            policyurl: "api/v1/affiliateplatform/shop/itemsv2",
            match: "contain",
          }),
          Qe),
          ((Xe = {
            policyurl: "api/v3/affiliateplatform/gql",
            match: "contain",
          }),
          Xe),
          ((We = {
            policyurl: "api/tool/mass_product/get_unpublished_product_list",
            match: "contain",
          }),
          We),
          ((Ve = {
            policyurl: "api/v2/message",
            match: "contain",
            allowCors: !0,
          }),
          Ve),
          ((je = {
            policyurl: "api/v2/solution",
            match: "contain",
            allowCors: !0,
          }),
          je),
          ((ze = {
            policyurl: "api/v2/user_message_history",
            match: "contain",
            allowCors: !0,
          }),
          ze),
          ((Be = {
            policyurl: "api/v2/init_session",
            match: "contain",
            allowCors: !0,
          }),
          Be),
          ((qe = {
            policyurl: "api/v2/order_list",
            match: "contain",
            allowCors: !0,
          }),
          qe),
        ];
      function Ct(e) {
        var t,
          r,
          n,
          a,
          o,
          s = e.locale,
          c = e.env,
          l = e.platform,
          p = e.source,
          u = e.enableGlobalHook,
          d = e.enableTMS,
          h = e.baseUrl,
          f = void 0 === h ? "" : h,
          v = e.shouldAppendHost,
          m = (e.allowShortDfp, e.headers),
          g = e.enablePopup,
          y = void 0 !== g && g,
          _ = e.handleMaintenanceModeResponse,
          b = e.policies,
          R = e.performanceTrackings,
          k = void 0 === R ? U : R,
          P = e.onError,
          T = void 0 === P ? function () {} : P,
          D = e.onJsonResponse,
          F = void 0 === D ? function () {} : D,
          I =
            ((n = {}),
            (r = l) == w.PC || r == w.RW
              ? (n = At)
              : r === w.SHOPEELIVE && (n = kt),
            n),
          O = Le(
            (((t = {}).locale = s),
            (t.platform = l),
            (t.source = p),
            (t.policies = b),
            (t.env = c),
            (t.ACConfig = I),
            (t.performanceTrackings = k),
            (t.enableTMS = d),
            (t.enableGlobalHook = u),
            (t.enablePopup = y),
            (t.onError = T),
            t)
          ),
          L = O.i,
          M = O._,
          N = O.R,
          q = O.v,
          B = O.m,
          j = O.h,
          V = O.o,
          X = (O.p, O.l);
        function Q(e, t, i) {
          return J.apply(this, arguments);
        }
        function J() {
          return (
            (J = (0, x.A)(
              (0, A.A)().mark(function e(t, r, n) {
                var a, o, s, c, l, p, u, d, h, g;
                return (0, A.A)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (a =
                              (!W && !/^(https?:)?\/\//.test(t)) || v
                                ? "" + f + t
                                : t),
                            (o =
                              null != r && r.isFormData
                                ? n || new FormData()
                                : JSON.stringify(n)),
                            (s =
                              null != r && r.isFormData
                                ? void 0
                                : {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                  }),
                            (e.next = 6),
                            ((window.global = window),
                            i.g && i.g.fetch ? i.g.fetch : fetch)(
                              a,
                              (0, C.A)(
                                {
                                  method: r && r.method ? r.method : "GET",
                                  headers: (0, C.A)(
                                    {},
                                    s,
                                    null != r && r.overideCreateSFUHeaders
                                      ? null == r
                                        ? void 0
                                        : r.headers
                                      : (0, C.A)(
                                          {},
                                          m,
                                          null == r ? void 0 : r.headers
                                        )
                                  ),
                                },
                                r && !1 === r.withCredentials
                                  ? {}
                                  : { credentials: "include" },
                                {
                                  body: o,
                                  signal: null == r ? void 0 : r.signal,
                                  anticrawler:
                                    null == r ? void 0 : r.antiCrawlerConfig,
                                }
                              )
                            )
                          );
                        case 6:
                          if (
                            ((c = e.sent), !((l = c.status) >= 200 && l < 300))
                          ) {
                            e.next = 16;
                            break;
                          }
                          if (
                            !(p = c.headers.get("content-type")) ||
                            p.includes("application/json")
                          ) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt("return", c);
                        case 12:
                          return (e.next = 14), c.json();
                        case 14:
                          return (
                            (u = e.sent),
                            e.abrupt(
                              "return",
                              (F(u, c),
                              "object" != typeof u || Array.isArray(u)
                                ? u
                                : (0, C.A)({}, u, { __raw: c }))
                            )
                          );
                        case 16:
                          return e.abrupt(
                            "return",
                            408 === l
                              ? (((g = {}).error = z.REQUEST_TIMEOUT),
                                (g.error_msg = l.toString()),
                                (g.__raw = c),
                                g)
                              : (_ && _(c),
                                ((h = {}).error = z.SERVER_ERROR),
                                (h.error_msg =
                                  null == l ? void 0 : l.toString()),
                                (h.__raw = c),
                                h)
                          );
                        case 19:
                          return (
                            (e.prev = 19),
                            (e.t0 = e.catch(0)),
                            e.abrupt(
                              "return",
                              (((d = {}).error = z.SERVER_ERROR),
                              (d.error_msg = e.t0),
                              d)
                            )
                          );
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 19]]
                );
              })
            )),
            J.apply(this, arguments)
          );
        }
        function Y() {
          return (
            (Y = (0, x.A)(
              (0, A.A)().mark(function e(t, i) {
                var r, n, a, o, s, c, l, p, u, d, h, f;
                return (0, A.A)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = ge),
                          (a = (null == i ? void 0 : i[n(6)]) || {}),
                          (o = a.antiCrawler),
                          (s = a.apiProtection),
                          (c = a.deviceFingerPrint) && L({}),
                          (e.next = 4),
                          c
                            ? N(
                                (((u = { useHeader: !0 })[(p = ge)(5)] =
                                  c[p(5)] || !1),
                                (u.customDfp = c.customDfp),
                                u)
                              )
                            : Promise.resolve({})
                        );
                      case 4:
                        return (
                          (d = e.sent),
                          (h =
                            null != c && c.dataFormatter
                              ? c.dataFormatter(d["sz-token"] || "")
                              : d),
                          (f = o ? O.u() : {}),
                          (e.next = 9),
                          Q(
                            t,
                            (((l = { method: "GET" }).headers = (0, C.A)(
                              {},
                              null == i ? void 0 : i.headers,
                              f,
                              h,
                              (((r = {})[E] = V()), r)
                            )),
                            (l.overideCreateSFUHeaders =
                              null == i ? void 0 : i.overideCreateSFUHeaders),
                            (l.withCredentials =
                              null == s ? void 0 : s.withCredentials),
                            (l.signal = null == i ? void 0 : i.signal),
                            (l.antiCrawlerConfig = o),
                            l)
                          )
                        );
                      case 9:
                        return e.abrupt("return", e.sent);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            Y.apply(this, arguments)
          );
        }
        function G() {
          return (
            (G = (0, x.A)(
              (0, A.A)().mark(function e(t, i, r) {
                var n, a;
                return (0, A.A)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = new FormData()), i)) n.append(a, i[a]);
                        return e.abrupt(
                          "return",
                          K(t, n, (0, C.A)({}, r, { isFormData: !0 }))
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            G.apply(this, arguments)
          );
        }
        function K(e, t, i) {
          return $.apply(this, arguments);
        }
        function $() {
          return (
            ($ = (0, x.A)(
              (0, A.A)().mark(function e(t, i, r) {
                var n, a, o, s, c, l, p, u, d, h, f, v, m, g;
                return (0, A.A)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((a = ge),
                          (o = (null == r ? void 0 : r[a(6)]) || {}),
                          (s = o.antiCrawler),
                          (c = o.apiProtection),
                          (l = o.deviceFingerPrint) && L({}),
                          !l)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return (
                          (e.next = 5),
                          N(
                            ((d = ge),
                            ((h = {}).useHeader =
                              null == l ? void 0 : l.useHeader),
                            (h[d(5)] = l[d(5)] || !1),
                            (h.customDfp = l.customDfp),
                            h)
                          )
                        );
                      case 5:
                        (e.t0 = e.sent), (e.next = 9);
                        break;
                      case 8:
                        e.t0 = {};
                      case 9:
                        return (
                          (f = e.t0),
                          (v =
                            null != l && l.dataFormatter
                              ? l.dataFormatter(
                                  null != l && l.useHeader
                                    ? f[S] || ""
                                    : f[H] || ""
                                )
                              : f),
                          (m =
                            (null != r && r.isFormData) ||
                            (null != l && l.useHeader) ||
                            ((u = v) &&
                              0 === Object.keys(u).length &&
                              Object.getPrototypeOf(u) === Object.prototype)
                              ? i
                              : (0, C.A)({}, i, v)),
                          (g = s ? O.u() : {}),
                          (e.next = 15),
                          Q(
                            t,
                            (((p = { method: "POST" }).headers = (0, C.A)(
                              {},
                              null == r ? void 0 : r.headers,
                              g,
                              null != l && l.useHeader ? v : {},
                              (((n = {})[E] = V()), n)
                            )),
                            (p.isFormData = null == r ? void 0 : r.isFormData),
                            (p.overideCreateSFUHeaders =
                              null == r ? void 0 : r.overideCreateSFUHeaders),
                            (p.withCredentials =
                              null == c ? void 0 : c.withCredentials),
                            (p.signal = null == r ? void 0 : r.signal),
                            (p.antiCrawlerConfig = s),
                            p),
                            m
                          )
                        );
                      case 15:
                        return e.abrupt("return", e.sent);
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            $.apply(this, arguments)
          );
        }
        return (
          (a = ge),
          ((o = {}).http = Q),
          (o.get = function (e, t) {
            return Y.apply(this, arguments);
          }),
          (o.post = K),
          (o.postForm = function (e, t, i) {
            return G.apply(this, arguments);
          }),
          (o[a(0)] = function (e) {
            var t;
            W && O.i((((t = {}).history = null == e ? void 0 : e.history), t));
          }),
          (o[a(4)] = j),
          (o[a(2)] = q),
          (o[a(3)] = B),
          (o[a(7)] = M),
          (o.getLongToken = X),
          o
        );
      }
      [
        ((Rt = {
          policyurl: "api/mydata",
          match: "contain",
          exclude: ["api/mydata/homepage/key-metrics"],
        }),
        Rt),
      ].concat(xt);
    },
  },
]);
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-static/_/sfu-stable.6c2b598d767d98d6.legacy.js.map
