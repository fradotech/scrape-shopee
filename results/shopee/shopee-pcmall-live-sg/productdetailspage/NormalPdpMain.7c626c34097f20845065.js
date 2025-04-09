(self.webpackChunk_pdp_pc = self.webpackChunk_pdp_pc || []).push([
  [4296],
  {
    30572: (e, t, s) => {
      var n = {
        "./sharingv2-BR-live.json": [54044, 1079],
        "./sharingv2-CL-live.json": [52034, 2309],
        "./sharingv2-CO-live.json": [34750, 5748],
        "./sharingv2-ID-live.json": [90002, 9632],
        "./sharingv2-MX-live.json": [22673, 5194],
        "./sharingv2-MY-live.json": [57029, 1612],
        "./sharingv2-PH-live.json": [34668, 438],
        "./sharingv2-SG-live.json": [86636, 9119],
        "./sharingv2-TH-live.json": [39847, 1475],
        "./sharingv2-TW-live.json": [71073, 3576],
        "./sharingv2-VN-live.json": [67633, 9166],
      };
      function i(e) {
        if (!s.o(n, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          i = t[0];
        return s.e(t[1]).then(() => s.t(i, 19));
      }
      (i.keys = () => Object.keys(n)), (i.id = 30572), (e.exports = i);
    },
    21051: (e, t, s) => {
      "use strict";
      s.d(t, { W: () => a });
      var n = s(39632),
        i = s(40280);
      const a = (e) => {
        const { shopInfo: t, item: s } = e,
          { itemId: a, shopId: r } = (0, n.u4)(),
          { data: o } = (0, n.fT)(
            {
              itemId: a,
              shopId: r,
              limit: 15,
              shouldCallApi: !(
                !s ||
                !(s.flag & i.Z.HAS_CHILD_SKU || s.flag & i.Z.HAS_VIRTUAL_SKU)
              ),
            },
            [a, r, null == s ? void 0 : s.flag]
          );
        return {
          showOtherQuantities: !!(
            t &&
            s &&
            (null == o ? void 0 : o.length) >= 4
          ),
          otherQuantitiesItems: o,
        };
      };
    },
    60639: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => x }), s(87363);
      var n = s(81523),
        i = s(78542),
        a = s.n(i),
        r = s(80437),
        o = s(22013),
        l = s(86452),
        c = s(47956),
        d = s(39632);
      const u = "idLK2l",
        p = "EtYbJs",
        h = "R7vGdX",
        m = "EB95ts";
      var _ = s(36094);
      const { t: g } = r.I18n;
      function f({
        displayProductAsLastEntry: e,
        insideAttributeTable: t,
        className: s,
        categories: i,
      }) {
        const r = (0, d.f3)();
        if (!r) return (0, _.jsx)("div", { className: a()(u, s) });
        const l = [
          (0, _.jsx)(
            n.Link,
            { to: "/", className: a()(p, t && h), children: g("label_shopee") },
            "0"
          ),
        ];
        if (
          (i &&
            i.length &&
            i.map((e, s) => {
              const r = (0, o.oY)(i, s),
                d = e.displayName;
              if (!r) return null;
              l.push(
                (0, _.jsx)(
                  "img",
                  { alt: "icon arrow right", className: m, src: c },
                  l.length
                )
              ),
                l.push(
                  (0, _.jsx)(
                    n.Link,
                    { className: a()(p, t && h), to: r, children: d },
                    l.length
                  )
                );
            }),
          e)
        ) {
          const { name: e } = r;
          l.push(
            (0, _.jsx)(
              "img",
              { alt: "icon arrow right", className: m, src: c },
              l.length
            )
          ),
            l.push(
              (0, _.jsx)(
                "span",
                { className: "oh0Xh2", tabIndex: 0, children: e },
                l.length
              )
            );
        }
        return (0, _.jsx)("div", {
          className: a()("flex items-center", u, s),
          children: l,
        });
      }
      f.defaultProps = { insideAttributeTable: !1, useCategoriesFromProps: !1 };
      const x = (0, l.Pf)(f);
    },
    45087: (e, t, s) => {
      "use strict";
      s.d(t, { GG: () => i, Um: () => n });
      const n = 8,
        i = {
          DELETED: 0,
          NORMAL: 1,
          REVIEWING: 2,
          BANNED: 3,
          INVALID: 4,
          INVALID_HIDE: 5,
          OFFENSIVE_HIDE: 6,
          AUDITING: 7,
          NORMAL_UNLIST: 8,
        };
    },
    8203: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          default: () => j_,
          withTargetTypeTrackingDataAnchor: () => f_,
        });
      var n = s(24261),
        i = s(87363),
        a = s.n(i),
        r = s(43966),
        o = s(78542),
        l = s.n(o),
        c = s(35210),
        d = s(81523),
        u = s(21624),
        p = s(27477),
        h = s(62827),
        m = s(23872),
        _ = s(62512),
        g = s(62287),
        f = s(53866);
      const { fetchItemSnapshot: x } = m;
      var v = s(76055),
        C = s(23732);
      const j = (e) => e.flag;
      var b = s(86452),
        N = s(80437),
        I = s(49887),
        y = s(66517);
      var S = s(36094);
      const T = ({ error: e }) => {
          const [t, s] = i.useState(y.LANGUAGES.en);
          return "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." ===
            e.message
            ? (0, S.jsxs)("div", {
                className: "PJFhUR",
                children: [
                  (0, S.jsx)("div", {
                    children:
                      "Looks like this error may have been caused by Google translate. Usage of Google translate is not recommended as it may cause rendering problems",
                  }),
                  (0, S.jsxs)("div", {
                    children: [
                      (0, S.jsxs)("label", {
                        htmlFor: "languages",
                        children: [
                          (0, S.jsx)("b", { children: "Choose locale:" }),
                          " ",
                        ],
                      }),
                      (0, S.jsx)("select", {
                        id: "languages",
                        onChange: (e) => {
                          s(e.target.value);
                        },
                        children: Object.keys(y.COUNTRY_LANGUAGES).map((e, t) =>
                          (0, S.jsx)(
                            "option",
                            {
                              className: "notranslate",
                              value: y.COUNTRY_LANGUAGES[e].default,
                              children: e,
                            },
                            t
                          )
                        ),
                      }),
                      (0, S.jsx)(I.Z, {
                        onClick: () => {
                          (document.cookie = `language=${t}; path=/`),
                            window.location.reload();
                        },
                        size: "small",
                        text: "Fix Error",
                      }),
                    ],
                  }),
                ],
              })
            : (0, S.jsx)(S.Fragment, {});
        },
        w = s.p + "productdetailspage/fb73417afb1d1ff1a01a.png",
        { t: k } = N.I18n,
        { ENV: E } = N.config;
      var P = s(60639),
        A = s(29423),
        L = s(19201),
        R = s(12725),
        D = s(71858),
        M = s(88298),
        O = s(23601),
        Z = s(30846),
        F = s(39632),
        B = s(2748),
        H = s(2659);
      const U = "nVAzDy";
      var V = s(1500),
        W = s(83095);
      const Q = [];
      for (let b_ = 0; b_ < 5; b_++) Q.push({ index: -1 * b_, data: null });
      const G = function () {
        const { isBlockAdult: e } = (0, H.GX)(),
          t = (0, V.isFeatureEnabled)(W.lP) && e,
          [s, n] = (0, i.useState)(0),
          a = !(0, F.f3)(),
          r = (0, F.Gv)(),
          o = (0, B.i3)(),
          c = (0, i.useMemo)(() => {
            const e = [];
            for (let t = s; t < s + 5; ++t)
              t < r.length && e.push({ index: t, data: r[t] });
            return a ? Q : e;
          }, [r, s, a]),
          d = (0, B.l8)(),
          u = (0, B.w5)(),
          p = (0, B.Xy)(),
          h = (0, B.h4)();
        return t
          ? null
          : (0, S.jsxs)("div", {
              className: l()("airUhU", a && "grncJu"),
              children: [
                c.map((e) =>
                  (0, S.jsx)(
                    "div",
                    {
                      className: "UBG7wZ",
                      children: (0, S.jsx)(D.Z, {
                        media: null == e ? void 0 : e.data,
                        isActive: o === e.index,
                        onHover: () => {
                          u(e.index), h({ hash: "" }), p({ hash: "" });
                        },
                        onClick: () => {
                          u(e.index), d(!0);
                        },
                        shouldShowOverlay: 0 === e.index,
                      }),
                    },
                    e.index
                  )
                ),
                r &&
                  r.length > 5 && [
                    (0, S.jsx)(
                      M.hU,
                      {
                        Icon: () =>
                          (0, S.jsx)("img", {
                            alt: "icon arrow left bold",
                            src: O,
                          }),
                        onClick: () => {
                          s > 0 && n((e) => e - 1);
                        },
                        classnames: [U, "CAvqYR"],
                        removeFromTabOrder: !0,
                      },
                      "0"
                    ),
                    (0, S.jsx)(
                      M.hU,
                      {
                        Icon: () =>
                          (0, S.jsx)("img", {
                            alt: "icon arrow right bold",
                            src: Z,
                          }),
                        onClick: () => {
                          const e = r ? r.length : 0;
                          s + 5 < e && n((e) => e + 1);
                        },
                        classnames: [U, "lWmpR1"],
                        removeFromTabOrder: !0,
                      },
                      "1"
                    ),
                  ],
              ],
            });
      };
      var q = s(9148),
        K = s(88357);
      const $ = (0, L.Z)({ loader: () => s.e(1346).then(s.bind(s, 36201)) }),
        Y = function () {
          const { itemId: e } = (0, K.TG)(),
            t = (0, B.nh)(),
            s = (0, B.GH)();
          return (
            (0, i.useEffect)(
              () => () => {
                s();
              },
              [e]
            ),
            (0, S.jsxs)("div", {
              className: "flex flex-column",
              children: [
                (0, S.jsx)(q.TimingBeacon, {}),
                (0, S.jsx)(R.Z, {}),
                (0, S.jsx)(G, {}),
                t && (0, S.jsx)($, {}),
              ],
            })
          );
        };
      var z = s(43287);
      const X =
          {
            ID: "957549474255294",
            MY: "717399095044843",
            PH: "437897333028638",
            SG: "1574354049466790",
            TH: "721805524607838",
            TW: "382498665271383",
            VN: "421039428061656",
            BR: "484889158765114",
            MX: "475715480046008",
            CO: "4285671748115464",
            CL: "417042076237548",
            PL: "118368580369961",
          }[(0, z.Kd)()] || "",
        J = ((0, z.Kd)(), "v19.0");
      let ee = (function (e) {
        return (
          (e.Profile = "profile"),
          (e.Email = "email"),
          (e.Birthday = "https://www.googleapis.com/auth/user.birthday.read"),
          e
        );
      })({});
      [ee.Profile, ee.Email].join(" "),
        [ee.Profile, ee.Email, ee.Birthday].join(" ");
      const te = N.I18n.t,
        se = (0, z.Kd)(),
        ne = (0, z.dU)(),
        ie = Object.freeze({
          FACEBOOK: "facebook-web",
          GOOGLEPLUS: "google-plus",
          MESSENGER: "messenger",
          TWITTER: "twitter",
          PINTEREST: "pinterest",
        }),
        ae = [
          {
            network: ie.MESSENGER,
            ariaLabel: "Share on Messenger",
            classNames: "sprite-product-sharing sprite-product-sharing-fm",
          },
          {
            network: ie.FACEBOOK,
            ariaLabel: "Share on Facebook",
            classNames: "sprite-product-sharing sprite-product-sharing-fb",
          },
          {
            network: ie.PINTEREST,
            ariaLabel: "Share on Pinterest",
            classNames:
              "sprite-product-sharing sprite-product-sharing-pinterest",
          },
          {
            network: ie.TWITTER,
            ariaLabel: "Share on Twitter",
            classNames: "sprite-product-sharing sprite-product-sharing-twitter",
          },
        ],
        re = "product",
        oe = "product_other",
        le = "product_discount",
        ce = "product_discount_other";
      function de(e, t, s, n) {
        const i = n[y.COUNTRY_LANGUAGES[se].default] || n.en,
          a = null == i ? void 0 : i.find((t) => t.id === e);
        let r = a && a[t] && a[t].share_text ? a[t].share_text : "";
        switch (t) {
          case "shop":
          case "shop_other":
            r = r
              .replace("{{shop_name}}", s.shop_name || "")
              .replace("{{shop_link}}", s.link || window.location.href);
            break;
          case re:
          case oe:
          case le:
          case ce:
            r = r
              .replace("{{product_name}}", s.product_name || "")
              .replace("{{price}}", s.price || "")
              .replace("{{pct_off}}", s.pct_off || "")
              .replace("{{price_after}}", s.price || "")
              .replace("{{product_link}}", s.link || window.location.href);
            break;
          case "bundle_deal":
            r = te("label_bundle_deal_share_text");
        }
        switch (e) {
          case ie.FACEBOOK:
            return (
              (o = s.link || window.location.href),
              `https://www.facebook.com/${J}/dialog/feed?app_id=${X}&link=${encodeURIComponent(
                o
              )}&redirect_uri=${encodeURIComponent(
                window.location.href + "#close"
              )}`
            );
          case ie.MESSENGER:
            return ((e, t = !1) =>
              t
                ? `fb-messenger://share?link=${encodeURIComponent(
                    e
                  )}&app_id=${X}`
                : `https://www.facebook.com/${J}/dialog/send?app_id=${X}&display=popup&link=${encodeURIComponent(
                    e
                  )}&redirect_uri=${encodeURIComponent(
                    window.location.href + "#close"
                  )}`)(s.link || window.location.href);
          case ie.GOOGLEPLUS:
            return ((e) =>
              `https://plus.google.com/share?url=${encodeURIComponent(e)}`)(
              s.link || window.location.href
            );
          case ie.PINTEREST:
            return ((e, t, s) =>
              `https://www.pinterest.com/pin/create/button/?url=${e}&media=${
                s || ""
              }&description=${t ? encodeURIComponent(t) : ""}`)(
              s.link || window.location.href,
              r,
              s.image
            );
          case ie.TWITTER:
            return ((e, t) =>
              `https://twitter.com/intent/tweet?original_referer=${encodeURIComponent(
                e
              )}&text=${t ? encodeURIComponent(t) : ""}`)(
              s.link || window.location.href,
              r
            );
        }
        var o;
        return null;
      }
      var ue = s(6178),
        pe = s(10267),
        he = s(8884),
        me = s(98246),
        _e = s(55588);
      const ge = "rhG6k7",
        { t: fe } = N.I18n,
        xe = "#FF424F",
        ve = (0, h.compose)(H.uA, function (e) {
          return function (t) {
            var s;
            const { item: a, likedInfo: r } = t,
              o = r ? r.liked : null == a ? void 0 : a.liked,
              { crossPageTrackingData: l } = i.useContext(_e.Z),
              c = null != (s = null == l ? void 0 : l.algo) ? s : {};
            return (0,
            S.jsx)(me.TrackingDataAnchor, { targetData: (0, n.Z)({}, c, { isLiked: o }), children: (0, S.jsx)(e, (0, n.Z)({}, t)) });
          };
        })(function (e) {
          var t;
          const s = (0, u.useDispatch)(),
            { item: n } = e,
            a = (0, F.$8)(),
            { requireUserToLogin: r } = i.useContext(_e.Z),
            o = (0, me.useTrackImpression)("IconLike"),
            c = (0, me.useTrackClick)("IconLike"),
            d =
              null != (t = a ? a.vItemId : null == n ? void 0 : n.itemid)
                ? t
                : 0,
            p = (0, u.useSelector)((e) => (0, he._k)(e, d)),
            h = p ? p.liked_count : null == n ? void 0 : n.liked_count,
            m = p ? p.liked : null == n ? void 0 : n.liked;
          return (0, S.jsx)("div", {
            className: l()("flex items-center", "feDSnr"),
            children: (0, S.jsxs)("button", {
              disabled: !n,
              ref: o,
              onClick: (t) => {
                t.stopPropagation();
                const { item: n, isLoggedIn: i } = e;
                if (!n) return;
                if ((c(), !i)) return void r("pdp_like_btn");
                const { itemid: o, shopid: l } = n;
                let { liked: d, liked_count: u } = n;
                p && ((d = p.liked), (u = p.liked_count));
                const h = [a ? a.vItemId : o, a ? a.vShopId : l, u];
                s(d ? (0, he.$0)(...h) : (0, he.YI)(...h));
              },
              className: "w2JMKY",
              tabIndex: 0,
              children: [
                (0, S.jsx)("svg", {
                  width: "24",
                  height: "20",
                  className: "vgMiJB",
                  children: (0, S.jsx)("path", {
                    d: "M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z",
                    stroke: xe,
                    strokeWidth: "1.5",
                    fill: m ? xe : "none",
                    fillRule: "evenodd",
                    strokeLinejoin: "round",
                  }),
                }),
                h &&
                  (0, S.jsx)("div", {
                    className: ge,
                    children: fe("label_favorite", {
                      count: ((_ = h), (0, pe.Zf)(_, { symbol: "" })),
                      interpolation: { escape: !1 },
                    }),
                  }),
              ],
            }),
          });
          var _;
        }),
        Ce = N.config.ROOT_DOMAIN,
        { t: je } = N.I18n,
        be = [ie.FACEBOOK, ie.TWITTER, ie.MESSENGER];
      function Ne(e) {
        e &&
          window.open(
            e,
            "_blank",
            "menubar=1,resizable=1,width=600,height=400"
          );
      }
      const Ie = (0, H.uA)(function (e) {
        const { item: t, isOwnItem: a, shopInfo: r } = e,
          [o, c] = (0, i.useState)(null),
          { hide_sharing_button: d } = (0, F.rJ)(),
          u = !!d,
          p = () =>
            s(30572)(`./sharingv2-${se}-${ne}.json`)
              .then((e) => (0, n.Z)({}, e.default))
              .then((e) => (c(e), e));
        (0, i.useEffect)(() => {
          u || p();
        }, [u]);
        const h = (0, V.isFeatureEnabled)(W.WM)
          ? ae.filter((e) => !be.some((t) => t === e.network))
          : ae;
        return (0, S.jsxs)("div", {
          className: l()("flex justify-center items-center", !t && "AVQfIX"),
          style: { marginTop: 15 },
          children: [
            !u &&
              (0, S.jsxs)("div", {
                className: l()("flex items-center", "idmlsn"),
                children: [
                  (0, S.jsxs)("div", {
                    className: ge,
                    children: [je("label_share"), ":"],
                  }),
                  h.map((e) =>
                    (0, S.jsx)(
                      "button",
                      {
                        className: l()(e.classNames, "Vo8Ebs"),
                        "aria-label": e.ariaLabel,
                        onClick: () => {
                          (async (e) => {
                            const s = (function (e, t) {
                                let s = "";
                                return e
                                  ? ((s =
                                      e.price_before_discount > 0
                                        ? t
                                          ? le
                                          : ce
                                        : t
                                        ? re
                                        : oe),
                                    s)
                                  : s;
                              })(t, a),
                              n = (function (e, t) {
                                if (!e) return {};
                                const s =
                                    0 !== e.price_before_discount
                                      ? Math.round(
                                          100 *
                                            (1 -
                                              e.price / e.price_before_discount)
                                        )
                                      : 0,
                                  n = `${location.protocol}//${Ce.replace(
                                    "mall.",
                                    ""
                                  )}/${t}/${e.itemid}`;
                                return {
                                  product_name: e.name,
                                  price: (0, pe.JL)(e.price),
                                  image: (0, ue.Jn)(e.image, !1),
                                  link: n,
                                  pct_off: s.toString(),
                                };
                              })(t, r && r.account && r.account.username);
                            o
                              ? Ne(de(e, s, n, o))
                              : p().then((t) => {
                                  Ne(de(e, s, n, t));
                                });
                          })(e.network);
                        },
                      },
                      e.network
                    )
                  ),
                ],
              }),
            (0, S.jsx)(ve, { item: t }),
          ],
        });
      });
      var ye = s(4896);
      const Se = s.p + "productdetailspage/65d706b021f0e75e9425.svg",
        Te = s.p + "productdetailspage/6215b92e8e4bfd12460d.svg",
        we = s.p + "productdetailspage/5f1ccc915066fa7bb851.svg",
        ke = s.p + "productdetailspage/d35d840bd7617cd29fc5.svg",
        Ee = s.p + "productdetailspage/03489b43c3f89bcad034.svg",
        Pe = s.p + "productdetailspage/b1a5d6e20b0093b1b8f0.svg",
        Ae = (0, z.Kd)(),
        Le = function ({ className: e }) {
          let t = we;
          switch (Ae) {
            case "BR":
            case "CL":
            case "CO":
            case "MX":
              t = ke;
              break;
            case "TW":
              t = Ee;
              break;
            case "ID":
              t = Pe;
          }
          return (0, S.jsx)("img", {
            alt: "mall inline badge",
            className: e,
            src: t,
          });
        },
        Re = s.p + "productdetailspage/98458cbe1c21e57e7ed0.svg",
        De = s.p + "productdetailspage/e86d8123ce688c2f660a.svg",
        Me = s.p + "productdetailspage/8720419a4eb1b37a2e0d.svg",
        Oe = s.p + "productdetailspage/18379e133f0a2190b992.svg",
        Ze = s.p + "productdetailspage/a237f744cf408b1af9f4.svg",
        Fe = "_wgU9F",
        Be = "Jwsdcs",
        He = (0, z.Kd)(),
        Ue = (0, z.of)();
      let Ve = Re;
      switch (He) {
        case "TW":
          Ve = Me;
          break;
        case "ID":
          Ve = De;
          break;
        case "CO":
        case "CL":
        case "MX":
          Ve = Re;
      }
      const We = () =>
        "TH" === He
          ? (0, S.jsx)("img", {
              alt: "shopee preferred plus",
              className: l()("ROemtp"),
              src: "th" === Ue ? Oe : Ze,
            })
          : (0, S.jsx)(ye.l, {
              noTriangle: !0,
              className: l()(Fe, Be, "items-center"),
            });
      function Qe({ isShopeeMart: e }) {
        const t = (0, F.Zl)(),
          { productName: s } = t;
        let {
            isOfficialShop: n,
            isPreferredPlusSeller: i,
            showShopeeVerifiedLabel: a,
          } = t,
          r = (0, F.aj)(),
          o = (0, F.Ub)();
        const c = (0, F.$9)();
        return (
          c &&
            ((n = c.is_official_shop),
            (i = c.is_preferred_plus_seller),
            (a = c.is_shopee_verified),
            (r = c.is_shopee_choice),
            (o = c.is_scs)),
          (0, S.jsxs)("div", {
            className: "WBVL_7",
            children: [
              o
                ? null
                : e
                ? (0, S.jsx)("img", {
                    alt: "supermarket badge",
                    className: l()(Fe, "uxdyrX"),
                    src: "TW" === He ? Te : Se,
                  })
                : r
                ? (0, S.jsx)("img", {
                    alt: "shopee choice badge",
                    className: "uq_xEP",
                    src: Ve,
                  })
                : n
                ? (0, S.jsx)(Le, { className: "fclWZr" })
                : i
                ? (0, S.jsx)(We, {})
                : a
                ? (0, S.jsx)(ye.tI, {
                    noTriangle: !0,
                    className: l()(Fe, Be, "items-center"),
                  })
                : null,
              (0, S.jsx)("h1", { className: "vR6K3w", children: s }),
            ],
          })
        );
      }
      const { t: Ge } = N.I18n;
      function qe({ item: e, isShopeeMart: t }) {
        const s = e ? e.pack_size : null;
        return t && s
          ? (0, S.jsx)("div", {
              className: "UXYzvq",
              children: `${Ge("label_pack_size")} ${s}`,
            })
          : null;
      }
      var Ke = s(33142),
        $e = s(46535),
        Ye = s(53154),
        ze = s(6266);
      const Xe = s.p + "productdetailspage/7aa2db3b3d73e0aa066b.svg";
      var Je = s(10262);
      const et = s.p + "productdetailspage/2975a8f2c8e17a602a55.svg";
      var tt = s(77110);
      const st = function ({ reasons: e, onSelectReason: t }) {
          return (0, S.jsx)("ul", {
            children: e.map((e) =>
              (0, S.jsx)(
                "li",
                {
                  onClick: () => {
                    t(e);
                  },
                  children: e.name,
                },
                e.id
              )
            ),
          });
        },
        { get: nt, jsonPost: it } = N.FetchUtils,
        { t: at } = N.I18n,
        rt = { test: 1216, uat: 1067, live: 1153 },
        { t: ot } = N.I18n,
        lt = function ({ isOpen: e, onClose: t, item: s }) {
          const n = (0, F.$8)(),
            [a, r] = (0, i.useState)(1),
            [o, l] = (0, i.useState)([]),
            [c, d] = (0, i.useState)(null),
            [u, p] = (0, i.useState)(""),
            [h, m] = (0, i.useState)(""),
            [_, g] = (0, i.useState)(""),
            [f, x] = (0, i.useState)(!1),
            [v, C] = (0, i.useState)(!1),
            j = (0, $e.Em)(),
            b = j && (null == c ? void 0 : c.id) === rt[__ENV__],
            N = { user_input: u, affiliate_url: window.location.href },
            I = b
              ? 500
              : (null == c ? void 0 : c.description_length_max) || 500;
          (0, i.useEffect)(() => {
            e &&
              0 === o.length &&
              (async function () {
                var e;
                const t = await nt(
                  "/api/v4/listing_qc/item_report/list_report_reasons"
                );
                return Array.isArray(
                  null == (e = t.data) ? void 0 : e.report_reasons
                )
                  ? {
                      reportReasons: t.data.report_reasons.map(
                        ({
                          id: e,
                          name: t,
                          description_length_max: s,
                          description_length_min: n,
                        }) => ({
                          id: e,
                          name: t,
                          description_length_max: s,
                          description_length_min: n,
                        })
                      ),
                    }
                  : { error_msg: t.error_msg || at("pdp_error_occurred") };
              })().then((e) => {
                if (e.reportReasons) {
                  if ((m(""), !j)) {
                    const t = e.reportReasons.filter(
                      (e) => e.id !== rt[__ENV__]
                    );
                    return void l(t);
                  }
                  l(e.reportReasons);
                } else m(e.error_msg);
              });
          }, [o, e]);
          const y = () => {
              m(""), g(""), r(1), d(null), p("");
            },
            T = () => {
              t(), y();
            };
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)(Ke.Z, {
                isOpen: e,
                children: (0, S.jsxs)("div", {
                  className: "SDvgWG",
                  children: [
                    (0, S.jsxs)("div", {
                      className: "UsJGRc",
                      children: [
                        a > 1 &&
                          (0, S.jsx)("img", {
                            alt: "icon back",
                            className: "mmrQla",
                            onClick: y,
                            src: et,
                          }),
                        (0, S.jsx)("span", {
                          className: "cr59hK",
                          children: c ? c.name : ot("pdp_select_a_reason"),
                        }),
                        (0, S.jsx)("img", {
                          alt: "icon close",
                          className: "B1rS0C",
                          onClick: T,
                          src: Je,
                        }),
                      ],
                    }),
                    h
                      ? (0, S.jsx)("div", { className: "kmLN0Z", children: h })
                      : 1 === a
                      ? (0, S.jsx)(st, {
                          reasons: o,
                          onSelectReason: (e) => {
                            r(2), d(e);
                          },
                        })
                      : 2 === a
                      ? (0, S.jsxs)(S.Fragment, {
                          children: [
                            (0, S.jsxs)("div", {
                              className: "dcQE6F",
                              children: [
                                (0, S.jsx)("textarea", {
                                  placeholder: b
                                    ? ot(
                                        "placeholder_report_this_product_clickbait"
                                      )
                                    : ot("pdp_report_description_placeholder", {
                                        min: c.description_length_min,
                                        max: I,
                                      }),
                                  className: _ ? "RvXdsh" : "",
                                  value: u,
                                  onChange: (e) => {
                                    p(e.target.value), g("");
                                  },
                                }),
                                _ &&
                                  (0, S.jsx)("div", {
                                    className: "ImeN3R",
                                    children: _,
                                  }),
                              ],
                            }),
                            (0, S.jsx)("div", {
                              className: "I0yZUl",
                              children: (0, S.jsx)(tt.nQ, {
                                onClick: () => {
                                  u.length < c.description_length_min ||
                                  u.length > I
                                    ? g(
                                        ot(
                                          "report_description_is_not_in_range",
                                          {
                                            min: c.description_length_min,
                                            max: I,
                                          }
                                        )
                                      )
                                    : (x(!0),
                                      (async function (e) {
                                        if (
                                          (
                                            await it(
                                              "/api/v4/listing_qc/item_report/report_item",
                                              e
                                            )
                                          ).error
                                        )
                                          return at("pdp_error_occurred");
                                      })({
                                        reason_id: c.id,
                                        item_id: n ? n.vItemId : s.itemid,
                                        shop_id: n ? n.vShopId : s.shopid,
                                        description: b ? JSON.stringify(N) : u,
                                      }).then((e) => {
                                        x(!1), e ? g(e) : (T(), C(!0));
                                      }));
                                },
                                children: ot("pdp_send_report"),
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
              f && (0, S.jsx)(Ye.Z, {}),
              v &&
                (0, S.jsx)(ze.ZP, {
                  classNames: "pQNWXh",
                  showToast: !0,
                  toastIcon: (0, S.jsx)("img", {
                    alt: "icon message tick",
                    src: Xe,
                  }),
                  toastText: ot("pdp_reported_successfully"),
                  toastDuration: 2e3,
                  onToastDismiss: () => {
                    C(!1);
                  },
                  zIndex: 2e3,
                }),
            ],
          });
        },
        { t: ct } = N.I18n,
        dt = (0, h.compose)(H.ZP, function (e) {
          return function (t) {
            return (0,
            S.jsx)(_e.Z.Consumer, { children: (s) => (0, S.jsx)(e, (0, n.Z)({}, t, s)) });
          };
        })(function ({ item: e, isLoggedIn: t, requireUserToLogin: s }) {
          const [n, a] = (0, i.useState)(!1),
            r = (0, me.useTrackImpression)("ReportButton"),
            o = (0, me.useTrackClick)("ReportButton");
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)("button", {
                ref: r,
                className: "YysGiT",
                onClick: () => {
                  o(), t ? a(!0) : s("pdp_report_btn");
                },
                children: ct("pdp_report"),
              }),
              (0, S.jsx)(lt, {
                item: e,
                isOpen: n,
                onClose: () => {
                  a(!1);
                },
              }),
            ],
          });
        }),
        ut = "dG6ROf",
        pt = "XLXeSo",
        ht = function ({ rating: e }) {
          const t = (0, F.mX)("disable_price_with_variation");
          return (0, S.jsx)("div", {
            className: "T1549_",
            children: [1, 2, 3, 4, 5].map((s) => {
              const n = Math.max(0, Math.min(100 * (e - s + 1), 100));
              return (0, S.jsxs)(
                "div",
                {
                  className: "sAOZ6s",
                  children: [
                    (0, S.jsx)("div", {
                      className: "ZDu7mK",
                      style: { width: `${n}%` },
                      children: (0, S.jsx)("div", {
                        className: l()("R6CPBG", { [ut]: !t }),
                      }),
                    }),
                    (0, S.jsx)("div", {
                      className: l()("VAir_o", { [pt]: !t }),
                    }),
                  ],
                },
                s
              );
            }),
          });
        },
        mt = (e) => (0, pe.Zf)(e, { symbol: "" }),
        _t = (e, t) => (t && e > 1e4 ? `${mt(1e4)}+` : mt(e)),
        gt = (e, t) => (t && e > 1e4 ? `${mt(1e4)}+` : e),
        ft = "e2p50f",
        xt = "F9RHbS",
        vt = "jMXp4d",
        Ct = "x1i_He";
      var jt = s(71986);
      const bt = s.p + "productdetailspage/e752f9593529853f9406.svg";
      var Nt = s(59627);
      const It = ["iconClass", "iconRef"];
      function yt(e) {
        let { iconClass: t, iconRef: s } = e,
          i = (0, jt.Z)(e, It);
        return (0, S.jsx)(
          Nt.Z,
          (0, n.Z)({}, i, {
            children: (0, S.jsx)(
              "img",
              (0, n.Z)({}, s ? { ref: s } : {}, {
                alt: "icon help",
                className: l()("gdYMVU", t),
                src: bt,
              })
            ),
          })
        );
      }
      const { t: St, tNode: Tt } = N.I18n;
      function wt(e) {
        return e || 0 === e;
      }
      function kt() {
        const {
            displayGlobalSold: e,
            globalSold: t,
            historicalSold: s,
          } = (0, F.fB)(),
          n = (0, F.f3)(),
          i = e ? t : s,
          a = (0, V.isFeatureEnabled)(W.$3),
          r = "SoldCountTooltip",
          o = { sold_count: i },
          c = (0, me.useTrackImpression)(r, o),
          d = (0, me.useTrackClick)(r, o),
          u = !(null == n || !n.is_item_inherited),
          p = !(null == n || !n.display_similar_sold),
          h = ((0, V.isFeatureEnabled)(W.c$) && u) || p;
        return null !== i
          ? (0, S.jsxs)("div", {
              className: l()("flex", "mnzVGI"),
              tabIndex: 0,
              children: [
                (0, S.jsx)("div", {
                  className: "aleSBU",
                  children: Tt(p ? "pdp_similar_sold" : "pdp_sold", {
                    sold_count: (0, S.jsx)("span", {
                      className: "AcmPRb",
                      children: _t(i, a),
                    }),
                  }),
                }),
                ((wt(t) && wt(s) && t > s) || h) &&
                  (0, S.jsx)(yt, {
                    onActive: d,
                    iconRef: c,
                    content: h
                      ? St("inherit_sold_body")
                      : St("label_global_sold_count_drawer_content", {
                          local_count: gt(s, a),
                          local_place: St("label_sold_location"),
                          global_count: gt(t, a),
                        }).replace(/\\n/g, "\n"),
                    drawerClass: "RqQS2I",
                  }),
              ],
            })
          : null;
      }
      const { t: Et } = N.I18n,
        Pt = function ({ item: e, onClickRatingTab: t }) {
          var s;
          const n = (0, F.mX)("disable_price_with_variation"),
            { hide_rating: i } = (0, F.ij)(),
            a = !!i,
            { hide_sold_count: r } = (0, F.rJ)(),
            o = !!r,
            c = e.item_rating,
            d =
              null != c && c.rating_count && c.rating_count.length > 0
                ? c.rating_count[0]
                : 0,
            u = (null == c ? void 0 : c.rating_star) || 0,
            p =
              (null == c || null == (s = c.rating_star)
                ? void 0
                : s.toFixed(1)) || "0";
          return (0, S.jsxs)("div", {
            className: l()("flex", "asFzUa"),
            children: [
              a
                ? null
                : d
                ? (0, S.jsxs)(S.Fragment, {
                    children: [
                      (0, S.jsxs)("button", {
                        className: l()("flex", ft),
                        onClick: t,
                        children: [
                          (0, S.jsx)("div", {
                            className: l()(xt, "dQEiAI", { [vt]: !n }),
                            children: p,
                          }),
                          n
                            ? (0, S.jsx)("div", {
                                className: Ct,
                                children: (0, S.jsx)(ht, { rating: u }),
                              })
                            : (0, S.jsx)(ht, { rating: u }),
                        ],
                      }),
                      (0, S.jsxs)("button", {
                        className: l()("flex", ft),
                        onClick: t,
                        children: [
                          (0, S.jsx)("div", {
                            className: xt,
                            children: _t(d, (0, V.isFeatureEnabled)(W.EE)),
                          }),
                          (0, S.jsx)("div", {
                            className: Ct,
                            children: Et(
                              d > 1
                                ? "label_ratings_count"
                                : "product_page_label_rating"
                            ),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, S.jsx)("div", {
                    className: "s4ihzY",
                    tabIndex: 0,
                    children: (0, S.jsx)("div", {
                      className: "vOrlgh",
                      children: Et("label_no_ratings_yet"),
                    }),
                  }),
              !o && (0, S.jsx)(kt, {}),
              (0, S.jsx)(dt, { item: e }),
            ],
          });
        },
        At = s.p + "productdetailspage/26cb3f2fda38eb6ddcc1.svg";
      var Lt = s(47927);
      const Rt = ["number"],
        Dt = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 25 68.1" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z" }) }));
        }, "zoom"),
        Mt = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 42.3 67.703" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z" }) }));
        }, "zoom"),
        Ot = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 43 67" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z" }) }));
        }, "zoom"),
        Zt = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 42.9 66.9" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z" }) }));
        }, "zoom"),
        Ft = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 42.8 67.6" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z" }) }));
        }, "zoom"),
        Bt = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 43.402 67.6" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z" }) }));
        }, "zoom"),
        Ht = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 39.5 66.3" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z" }) }));
        }, "zoom"),
        Ut = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 43.204 69.004" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z" }) }));
        }, "zoom"),
        Vt = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 43.503 67.701" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z", vectorEffect: "non-scaling-stroke" }) }));
        }, "zoom"),
        Wt = (0, Lt.Z)(function (e) {
          return (0,
          S.jsx)("svg", (0, n.Z)({ viewBox: "0 0 41.701 69.001" }, e, { children: (0, S.jsx)("path", { fillRule: "evenodd", strokeLinecap: "round", strokeWidth: ".945", d: "M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z" }) }));
        }, "zoom"),
        Qt = (e) => {
          let { number: t } = e,
            s = (0, jt.Z)(e, Rt);
          switch (t) {
            case 1:
              return (0, S.jsx)(Dt, (0, n.Z)({}, s));
            case 2:
              return (0, S.jsx)(Mt, (0, n.Z)({}, s));
            case 3:
              return (0, S.jsx)(Ot, (0, n.Z)({}, s));
            case 4:
              return (0, S.jsx)(Zt, (0, n.Z)({}, s));
            case 5:
              return (0, S.jsx)(Ft, (0, n.Z)({}, s));
            case 6:
              return (0, S.jsx)(Bt, (0, n.Z)({}, s));
            case 7:
              return (0, S.jsx)(Ht, (0, n.Z)({}, s));
            case 8:
              return (0, S.jsx)(Ut, (0, n.Z)({}, s));
            case 9:
              return (0, S.jsx)(Vt, (0, n.Z)({}, s));
            case 0:
              return (0, S.jsx)(Wt, (0, n.Z)({}, s));
          }
        };
      var Gt = s(75617),
        qt = s(89044),
        Kt = s(15448);
      const { t: $t } = N.I18n,
        Yt = {
          SENARY: [0, 5, 4, 3, 2, 1, 0],
          DECIMAL: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        },
        zt = ({ colonState: e, theme: t, style: s }) =>
          (0, S.jsxs)("div", {
            className: l()(
              "shopee-countdown-timer__colon",
              `shopee-countdown-timer__colon--flashing-${e}`,
              t && `shopee-countdown-timer__colon--${t}`
            ),
            style: s || void 0,
            children: [
              (0, S.jsx)("div", {
                className: "colon-dot__wrapper",
                children: (0, S.jsx)("span", { className: "colon-dot" }),
              }),
              (0, S.jsx)("div", {
                className: "colon-dot__wrapper",
                children: (0, S.jsx)("span", { className: "colon-dot" }),
              }),
            ],
          });
      class Xt extends i.PureComponent {
        constructor(...e) {
          super(...e),
            (this.countdownEndTimer = 0),
            (this.state = {
              isCountdownEnded:
                1e3 * this.props.targetTimeInSeconds - new Date().getTime() <=
                0,
            }),
            (this.onSafariVisibilityChange = () => {
              this.setState({
                isCountdownEnded:
                  document.hidden ||
                  1e3 * this.props.targetTimeInSeconds - new Date().getTime() <=
                    0,
              });
            });
        }
        componentDidMount() {
          const e = 1e3 * this.props.targetTimeInSeconds - new Date().getTime();
          e < 2147483647 &&
            (this.countdownEndTimer = window.setTimeout(() => {
              this.state.isCountdownEnded ||
                (this.setState({ isCountdownEnded: !0 }),
                this.props.onCountdownEnded && this.props.onCountdownEnded());
            }, e)),
            (0, Gt.G6)() &&
              document.addEventListener(
                "visibilitychange",
                this.onSafariVisibilityChange,
                !1
              );
        }
        componentWillUnmount() {
          clearTimeout(this.countdownEndTimer),
            (0, Gt.G6)() &&
              document.removeEventListener(
                "visibilitychange",
                this.onSafariVisibilityChange,
                !1
              );
        }
        render() {
          const {
              flipRate: e,
              nonFlashing: t,
              flipBoardStyle: s,
              colonStyle: n,
              numberStyle: i,
              targetTimeInSeconds: a,
            } = this.props,
            { isCountdownEnded: r } = this.state,
            o = +new Date(),
            c = Math.max(0, (1e3 * a - o) * this.props.type),
            {
              hour: d,
              minute: u,
              second: p,
            } = (function (e) {
              let t = Math.floor(e / 1e3);
              const s = Math.floor(t / 3600);
              return (
                (t %= 3600),
                {
                  hour: s || 0,
                  minute: Math.floor(t / 60) || 0,
                  second: t % 60 || 0,
                }
              );
            })(c),
            {
              hourHundDelay: h,
              hourDecaDelay: m,
              hourHexaDelay: _,
              minuteDecaDelay: g,
              minuteHexaDelay: f,
              secondDecaDelay: x,
              secondHexaDelay: v,
            } = Jt(d, u, p),
            C = t ? "on" : "off",
            j = (0, Kt.R)((0, z.Kd)(), (0, z.of)()),
            b = qt.durationLocales[j],
            N = (0, qt.formatDuration)(b, 1e3 * a);
          return (0, S.jsxs)("div", {
            className: l()("shopee-countdown-timer", this.props.classNames),
            "aria-label": `${$t("fs_ending_in_transl")} ${N}`,
            tabIndex: 0,
            children: [
              (0, S.jsxs)("div", {
                className: "shopee-countdown-timer__number",
                style: s || void 0,
                children: [
                  d > 99 &&
                    (0, S.jsx)(
                      "div",
                      {
                        className: l()(
                          "shopee-countdown-timer__number__hexa",
                          r ? "" : "shopee-countdown-timer__number__hund--hour"
                        ),
                        style: { animationDelay: h },
                        children: Yt.DECIMAL.map((e, t) =>
                          (0, S.jsx)(
                            "div",
                            {
                              className: l()(
                                "shopee-countdown-timer__number__item"
                              ),
                              children: (0, S.jsx)(Qt, {
                                number: e,
                                iconStyle: i || void 0,
                              }),
                            },
                            t
                          )
                        ),
                      },
                      h
                    ),
                  (0, S.jsx)(
                    "div",
                    {
                      className: l()(
                        "shopee-countdown-timer__number__hexa",
                        r ? "" : "shopee-countdown-timer__number__hexa--hour"
                      ),
                      style: { animationDelay: _ },
                      children: Yt.DECIMAL.map((e, t) =>
                        (0, S.jsx)(
                          "div",
                          {
                            className: l()(
                              "shopee-countdown-timer__number__item"
                            ),
                            children: (0, S.jsx)(Qt, {
                              number: e,
                              iconStyle: i || void 0,
                            }),
                          },
                          t
                        )
                      ),
                    },
                    _
                  ),
                  (0, S.jsx)(
                    "div",
                    {
                      className: l()(
                        "shopee-countdown-timer__number__deca",
                        r ? "" : "shopee-countdown-timer__number__deca--hour"
                      ),
                      style: { animationDelay: m },
                      children: Yt.DECIMAL.map((e, t) =>
                        (0, S.jsx)(
                          "div",
                          {
                            className: l()(
                              "shopee-countdown-timer__number__item"
                            ),
                            children: (0, S.jsx)(Qt, {
                              number: e,
                              iconStyle: i || void 0,
                            }),
                          },
                          t
                        )
                      ),
                    },
                    m
                  ),
                ],
              }),
              e <= 6e4 && [
                (0, S.jsx)(
                  zt,
                  { colonState: C, theme: this.props.theme, style: n },
                  "colon-before-minute"
                ),
                (0, S.jsxs)(
                  "div",
                  {
                    className: "shopee-countdown-timer__number",
                    style: s || void 0,
                    children: [
                      (0, S.jsx)(
                        "div",
                        {
                          className: l()(
                            "shopee-countdown-timer__number__hexa",
                            r
                              ? ""
                              : "shopee-countdown-timer__number__hexa--minute"
                          ),
                          style: { animationDelay: f },
                          children: Yt.SENARY.map((e, t) =>
                            (0, S.jsx)(
                              "div",
                              {
                                className: l()(
                                  "shopee-countdown-timer__number__item"
                                ),
                                children: (0, S.jsx)(Qt, {
                                  number: e,
                                  iconStyle: i || void 0,
                                }),
                              },
                              t
                            )
                          ),
                        },
                        f
                      ),
                      (0, S.jsx)(
                        "div",
                        {
                          className: l()(
                            "shopee-countdown-timer__number__deca",
                            r
                              ? ""
                              : "shopee-countdown-timer__number__deca--minute"
                          ),
                          style: { animationDelay: g },
                          children: Yt.DECIMAL.map((e, t) =>
                            (0, S.jsx)(
                              "div",
                              {
                                className: l()(
                                  "shopee-countdown-timer__number__item"
                                ),
                                children: (0, S.jsx)(Qt, {
                                  number: e,
                                  iconStyle: i || void 0,
                                }),
                              },
                              t
                            )
                          ),
                        },
                        g
                      ),
                    ],
                  },
                  "digit-minute"
                ),
              ],
              e <= 1e3 && [
                (0, S.jsx)(
                  zt,
                  { colonState: C, theme: this.props.theme, style: n },
                  "colon-before-second"
                ),
                (0, S.jsxs)(
                  "div",
                  {
                    className: "shopee-countdown-timer__number",
                    style: s || void 0,
                    children: [
                      (0, S.jsx)(
                        "div",
                        {
                          className: l()(
                            "shopee-countdown-timer__number__hexa",
                            r
                              ? ""
                              : "shopee-countdown-timer__number__hexa--second"
                          ),
                          style: { animationDelay: v },
                          children: Yt.SENARY.map((e, t) =>
                            (0, S.jsx)(
                              "div",
                              {
                                className: l()(
                                  "shopee-countdown-timer__number__item"
                                ),
                                children: (0, S.jsx)(Qt, {
                                  number: e,
                                  iconStyle: i || void 0,
                                }),
                              },
                              t
                            )
                          ),
                        },
                        v
                      ),
                      (0, S.jsx)(
                        "div",
                        {
                          className: l()(
                            "shopee-countdown-timer__number__deca",
                            r
                              ? ""
                              : "shopee-countdown-timer__number__deca--second"
                          ),
                          style: { animationDelay: x },
                          children: Yt.DECIMAL.map((e, t) =>
                            (0, S.jsx)(
                              "div",
                              {
                                className: l()(
                                  "shopee-countdown-timer__number__item"
                                ),
                                children: (0, S.jsx)(Qt, {
                                  number: e,
                                  iconStyle: i || void 0,
                                }),
                              },
                              t
                            )
                          ),
                        },
                        x
                      ),
                    ],
                  },
                  "digit-second"
                ),
              ],
            ],
          });
        }
      }
      Xt.defaultProps = { type: 1, flipRate: 1e3 };
      const Jt = (e, t, s) => ({
          secondDecaDelay: (s % 10) - 9 + "s",
          secondHexaDelay: s - 68 + "s",
          minuteDecaDelay: (t % 10) * 60 + s - 658 + "s",
          minuteHexaDelay: 60 * t + s - 4198 + "s",
          hourDecaDelay: (e % 10) * 3600 + 60 * t + s - 39598 + "s",
          hourHexaDelay: (e % 100) * 3600 + 60 * t + s - 395998 + "s",
          hourHundDelay: (e % 1e3) * 3600 + 60 * t + s - 3959998 + "s",
        }),
        es = Xt;
      var ts = s(67725),
        ss = s(25851);
      const ns = "wV4oFQ",
        is = "WA4LRA",
        as = function () {
          const e = (0, F.mX)("disable_price_with_variation"),
            t = (0, ts.Q6)(),
            s = (0, A.useAtomValue)(ss.k_),
            { rawPrice: n } = (0, ts.$h)(),
            i = (0, me.useTrackImpression)("OngoingBanner", {
              promotionId: null == t ? void 0 : t.promotionId,
              promotionType: null == t ? void 0 : t.promotionType,
              modelId: null == s ? void 0 : s.modelid,
              price: n,
            });
          if (!t || e) return null;
          const {
            brandingIcon: a,
            brandingText: r,
            endTime: o,
            mainColor: l,
            secondaryColor: c,
          } = t;
          return (0, S.jsxs)("div", {
            className: ns,
            style: { background: `linear-gradient(to right, ${l}, ${c})` },
            ref: i,
            children: [
              a,
              (0, S.jsx)("span", { className: is, children: r }),
              !!o &&
                (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsx)("img", {
                      alt: "icon clock",
                      className: "WvWYWM",
                      src: At,
                    }),
                    (0, S.jsx)("span", {
                      className: "kCNv1_",
                      children: N.I18n.t("product_page_label_ends_in"),
                    }),
                    (0, S.jsx)("div", {
                      className: "buRqC6",
                      children: (0, S.jsx)(es, { targetTimeInSeconds: o }),
                    }),
                  ],
                }),
            ],
          });
        },
        rs = ({ item: e }) => {
          const t = (0, p.Z)(
              e,
              ["exclusive_price_info", "exclusive_price_results", "0"],
              null
            ),
            s = (0, p.Z)(t, ["pc_image"], ""),
            n = {
              promotionId: (0, p.Z)(t, ["promotion_id"], ""),
              label: (0, p.Z)(t, ["label"], ""),
              modelId: (0, p.Z)(e, ["exclusive_price_info", "model_id"], -1),
            },
            i = (0, me.useTrackImpression)("ExclusivePriceCard", n);
          return (0, S.jsx)("div", {
            className: "TYHGxr",
            style: { backgroundImage: `url(${(0, ue.Jn)(s)})` },
            ref: i,
          });
        },
        os = s.p + "productdetailspage/dea74facf15efdbdb982.svg",
        ls = s.p + "productdetailspage/1b1d61331933d0ea4795.svg",
        cs = s.p + "productdetailspage/5f8443272f648d05cb8d.svg",
        ds = s.p + "productdetailspage/67e26b7ca41fc3791636.svg",
        us = s.p + "productdetailspage/9cfcc27352978300f7d5.svg",
        { t: ps } = N.I18n,
        hs = (0, z.Kd)();
      function ms() {
        const e = (0, F.MT)(),
          t = (0, me.useTrackImpression)("FlashSaleBanner", {
            promotionId: (null == e ? void 0 : e.promotionId) || -1,
          });
        if (!e) return null;
        const { showExtraDiscountLabel: s, endTime: n } = e;
        let i = os;
        switch (hs) {
          case "MY":
            i = us;
            break;
          case "PH":
          case "SG":
            i = ds;
            break;
          case "TW":
            i = cs;
            break;
          case "BR":
            i = ls;
        }
        return (0, S.jsxs)("div", {
          className: "x7M8PV",
          ref: t,
          children: [
            (0, S.jsx)("img", {
              alt: "icon flash sale",
              className: "QYq0yX",
              src: i,
            }),
            s &&
              (0, S.jsx)("div", {
                className: "Er7dmT",
                children: ps(
                  "label_product_page_flash_sale_extra_discount_badge"
                ),
              }),
            (0, S.jsx)("img", {
              className: "meXFK1",
              alt: "icon clock",
              src: At,
              height: 17,
              width: 17,
            }),
            (0, S.jsx)("div", {
              className: "rchvXw",
              children: ps("product_page_label_ends_in"),
            }),
            n && (0, S.jsx)(es, { targetTimeInSeconds: n }),
          ],
        });
      }
      var _s = s(18818),
        gs = s(19884);
      const { t: fs } = N.I18n,
        xs = "promotion_start_time",
        vs = "promotion_start_date",
        Cs = "p9zkFm";
      function js({
        textColor: e,
        preHypeTextPaddingLeft: t,
        preHypeText: s,
        startTime: n,
      }) {
        const a = (0, i.useMemo)(
          () =>
            s
              ? (function (e, t) {
                  const s =
                      "number" == typeof t && 0 !== t
                        ? (0, gs.mr)(t, { month: "short", day: "short" })
                        : "",
                    n =
                      "number" == typeof t && 0 !== t
                        ? (0, gs.mr)(t, "hh:mm")
                        : "";
                  return (0, _s.w)(e, { [vs]: s, [xs]: n });
                })(s, n)
              : "",
          [s, n]
        );
        return (0, S.jsx)("div", {
          className: Cs,
          style: { color: e, paddingLeft: t ? `${t}%` : void 0 },
          dangerouslySetInnerHTML: { __html: a },
        });
      }
      function bs({ textColor: e, soldCount: t }) {
        const s = (0, i.useMemo)(() => {
          return "number" == typeof (e = t)
            ? fs("product_page_label_sold_n", { sold: (0, pe.JP)(e) })
            : "";
          var e;
        }, [t]);
        return (0, S.jsx)("div", {
          className: l()(Cs, "K2ZHLr"),
          style: { color: e },
          children: s,
        });
      }
      function Ns() {
        const e = (0, F.Qs)(),
          t = (0, me.useTrackImpression)(
            null != e && e.isLpp ? "LowPricePromotion" : "DeepDiscountBanner",
            {
              isOngoingDeepDiscount: null == e ? void 0 : e.isDday,
              promotionId: (null == e ? void 0 : e.promotionId) || -1,
              modelId: (null == e ? void 0 : e.modelId) || -1,
            },
            [e]
          );
        if (!e) return null;
        const {
            backgroundImage: s,
            isDday: n,
            startTime: i,
            preHypeText: a,
            textColor: r,
            textPaddingLeft: o,
            soldCount: l,
          } = e,
          c = s ? `url(${(0, ue.Jn)(s)})` : "";
        return (0, S.jsx)("div", {
          className: "oc36a7",
          style: { backgroundImage: c },
          ref: t,
          children: n
            ? (0, S.jsx)(bs, { textColor: r, soldCount: l })
            : (0, S.jsx)(js, {
                textColor: r,
                preHypeTextPaddingLeft: o,
                preHypeText: a,
                startTime: i,
              }),
        });
      }
      function Is() {
        const e = (0, F.ko)(),
          t = (0, me.useTrackImpression)("OngoingBanner", {
            promotionId: null == e ? void 0 : e.promotionId,
            promotionType: null == e ? void 0 : e.promotionType,
          });
        if (!e) return null;
        const {
          brandingIcon: s,
          brandingText: n,
          mainColor: i,
          secondaryColor: a,
        } = e;
        return (0, S.jsxs)("div", {
          className: ns,
          style: { background: `linear-gradient(to right, ${i}, ${a})` },
          ref: t,
          children: [s, (0, S.jsx)("span", { className: is, children: n })],
        });
      }
      const ys = ({ item: e }) => {
          const { flash_sale: t, deep_discount: s } = e,
            n = (0, p.Z)(
              e,
              ["exclusive_price_info", "exclusive_price_results", "0"],
              null
            ),
            i = (0, p.Z)(n, ["pc_image"], ""),
            a =
              (0, p.Z)(
                e,
                ["exclusive_price_info", "show_exclusive_price_banner"],
                !1
              ) && "" !== i;
          return t
            ? (0, S.jsx)(ms, {})
            : a
            ? (0, S.jsx)(rs, { item: e })
            : s
            ? (0, S.jsx)(Ns, {})
            : (0, S.jsx)(Is, {});
        },
        Ss = i.memo(ys);
      var Ts = s(61486);
      const { t: ws } = N.I18n,
        ks = function (e) {
          const t = (0, Ts.Z)(e.previewInfo);
          return (0, S.jsxs)("div", {
            className: l()("flex items-center", "QjMzan"),
            children: [
              (0, S.jsx)("div", {
                className: "MuD8h4",
                children: (0, S.jsx)("img", { alt: "icon clock", src: At }),
              }),
              ws("label_product_preview_sale_starting_soon"),
              (0, S.jsx)("div", {
                className: l()("flex-auto", "L1_lX8"),
                children:
                  !!t && `${ws("label_product_preview_sale_starts_from")} ${t}`,
              }),
            ],
          });
        };
      var Es = s(61838),
        Ps = s(84245);
      function As() {
        let e = "BhIewg";
        switch ((0, z.Kd)()) {
          case "MY":
            e = "msTHzO";
            break;
          case "PH":
          case "SG":
            e = "KXhw16";
            break;
          case "TW":
            e = "c68rxO";
            break;
          case "BR":
            e = "EUsrIT";
            break;
          case "MX":
          case "CO":
          case "CL":
            e = "qlCDpk";
        }
        return (0, S.jsx)("span", { className: l()("DFQfff", e) });
      }
      var Ls = s(47956),
        Rs = s(38119),
        Ds = s(32812),
        Ms = s(41758);
      const Os = Ds.rb.bind(null, {
          routeByLocale: (0, Rs.pQ)(Rs.Z6.FLASH_SALE),
          queryParams: {
            promotionId: Ms.s2,
            categoryId: Ms.s2,
            fromItem: Ms.s2,
          },
        }),
        Zs =
          (Ds.rb.bind(null, {
            routeByLocale: (0, Rs.pQ)(Rs.Z6.BRAND_SALE),
            queryParams: {
              promotionId: Ms.s2,
              fromShop: Ms.s2,
              fromItem: Ms.s2,
            },
          }),
          Ds.rb.bind(null, {
            routeByLocale: (0, Rs.pQ)(Rs.Z6.MART_FLASH_SALE),
            queryParams: { promotionId: Ms.s2, fromItem: Ms.s2 },
          }),
          (0, Kt.S)((0, z.of)())),
        Fs = qt.durationLocales[Zs],
        Bs = (e) =>
          [y.LANGUAGES["zh-Hans"], y.LANGUAGES["zh-Hant"]].includes((0, z.of)())
            ? Number(((100 - e) / 10).toFixed(1))
            : e,
        Hs = (e, t) => {
          if (!e) return "";
          const {
            start_time: s,
            end_time: n,
            extra_discount: i,
            extra_discount_stock: a,
          } = e;
          if (!i || !a) return "";
          const r = ((e, t) => {
            if (!e || !t) return null;
            const s = new Date(1e3 * e),
              n = new Date(1e3 * t),
              i = (0, qt.timeBetween)("hour", n, s);
            if (i < 1)
              return (0, qt.formatDuration)(Fs, n, s, {
                startUnit: "minute",
                totalUnits: 1,
              });
            const a = (0, qt.addDuration)(s, { hour: Math.floor(i) });
            return (0, qt.formatDuration)(Fs, a, s, {
              startUnit: "hour",
              totalUnits: 1,
            });
          })(s, n);
          return r
            ? t(
                "label_product_flash_sale_extra_discount_limit_stock_limit_time",
                { amount: Bs(i), stock: a, duration: r }
              )
            : t("label_product_flash_sale_extra_discount_limit_stock", {
                amount: Bs(i),
                stock: a,
              });
        },
        Us = (e, t) => {
          const s = Math.pow(2, 31) - 1;
          if (t > s) {
            const n = t - s;
            return setTimeout(function () {
              Us(e, n);
            }, s);
          }
          return setTimeout(e, t);
        },
        { t: Vs } = N.I18n,
        Ws = (0, z.Kd)(),
        Qs = "TW" === Ws;
      class Gs extends i.Component {
        constructor(e) {
          super(e),
            (this.onFlashSaleStarted = () => {
              window.location.reload();
            }),
            (this.handleClick = () => {
              const { trackingClick: e } = this.props;
              e && e();
            }),
            (this.now = +new Date());
        }
        componentDidMount() {
          const { upcomingFlashSale: e } = this.props,
            t = (e && e.start_time && new Date(1e3 * e.start_time)) - this.now;
          t > 0 && (this.timer = Us(this.onFlashSaleStarted, t));
        }
        componentWillUnmount() {
          this.timer && clearTimeout(this.timer);
        }
        render() {
          var e;
          const {
              upcomingFlashSale: t,
              itemId: s,
              trackingRef: n,
            } = this.props,
            i = t && t.start_time && new Date(1e3 * t.start_time),
            a =
              t && t.start_time
                ? (0, gs.p6)(
                    t.start_time,
                    Qs ? "M/d" : { month: "short", day: "short" }
                  )
                : "",
            r = Qs ? `${a} ${(0, gs.Z5)(i)}` : `${(0, gs.Z5)(i)}, ${a}`,
            o =
              1 === t.flash_sale_type
                ? {}
                : { promotionId: t.promotionid, fromItem: s },
            c =
              null != (e = null == t ? void 0 : t.extra_discount_info)
                ? e
                : null;
          return (0, S.jsxs)(d.Link, {
            onClick: this.handleClick,
            to: Os(Ws).getUrl(o),
            className: l()("flex items-center", "ZRb8YF"),
            ref: n,
            children: [
              (0, S.jsx)(As, {}),
              (0, S.jsx)("div", {
                className: "eLrI5y",
                children: `${Vs(
                  "product_page_label_flash_sale_starts_at"
                )} ${r}${Hs(c, Vs)}`,
              }),
              (0, S.jsx)("img", {
                alt: "icon arrow right",
                className: "d24OWs",
                src: Ls,
              }),
            ],
          });
        }
      }
      const qs = (0, me.withTrackImpression)(
          Gs,
          "FlashSaleFutureSessionHeader"
        ),
        Ks = s.p + "productdetailspage/3cb6fea2106fd5801499.svg",
        { t: $s } = N.I18n;
      function Ys() {
        return (0, S.jsxs)("div", {
          className: "vDMxZN",
          children: [
            (0, S.jsx)("img", {
              alt: "lowest installment guarantee logo",
              className: "IrmRMA",
              src: Ks,
            }),
            (0, S.jsx)("div", {
              className: "eyMdEJ",
              children: $s("label_lowest_installments_guaranteed"),
            }),
            (0, S.jsx)(yt, {
              drawerClass: "CtKNpj",
              content: (0, S.jsxs)(S.Fragment, {
                children: [
                  (0, S.jsxs)("a", {
                    href: "https://lig-form.shopeephbi.com/",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "zjO6d8",
                    children: [
                      $s("label_lowest_installments_guaranteed_text"),
                      (0, S.jsx)("img", {
                        alt: "icon arrow right",
                        className: "F1VA_W",
                        src: Ls,
                      }),
                    ],
                  }),
                  (0, S.jsx)("div", {
                    className: "a47gpx",
                    dangerouslySetInnerHTML: {
                      __html: $s("label_lowest_installments_guaranteed_tnc"),
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var zs = s(13509),
        Xs = s(37460);
      const Js = "LPG_REDIRECTION_URL",
        en = "LPG_REDIRECTION_INTERNAL_URL",
        tn = "OGEP_REDIRECTION_URL",
        sn = "/m/shopee-garansi-ori",
        nn = "/m/authenticguarantee",
        an = "/m/shopee-mall-100-authentic",
        rn = {
          [Js]: {
            TW: "https://shopee-support.formstack.com/forms/tw_lpg",
            PH: "https://lpg-form-phbi.web.app",
            MY: "https://shopee.com.my/m/lowestpriceguaranteed",
            ID: "https://shopee.co.id/m/murahlebay",
            VN: "https://shopee.vn/m/gi-cung-re-freeship",
            PL: "https://shopee.pl/m/gwarancja-najnizszej-ceny",
            TH: "https://help.shopee.co.th/portal/webform/608501faae104db5a280be85f74249f1",
            default: "",
          },
          [en]: {
            MY: "/m/lowestpriceguaranteed",
            ID: "/m/murahlebay",
            VN: "/m/gi-cung-re-freeship",
          },
          [tn]: {
            ID: sn ? `https://shopee.co.id${sn}` : null,
            MY: nn ? `https://shopee.com.my${nn}` : null,
            SG: an ? `https://shopee.sg${an}` : null,
            default: null,
          },
        };
      function on(e, t) {
        const s = rn[t];
        return s.hasOwnProperty(e) ? s[e] : s.default;
      }
      y.LANGUAGES.th;
      const ln = "_7aiwyt",
        { t: cn } = N.I18n,
        dn = ({ handleLpgChat: e }) => {
          const t = i.useCallback(() => {
            const t = on(__LOCALE__, Js);
            t && window && window.open ? window.open(t, "_blank") : e && e();
          }, [e]);
          return (0, S.jsxs)("div", {
            className: l()("flex", "items-center", "tD57fL"),
            children: [
              (0, S.jsx)("img", { width: 28, src: Xs.Z[__LOCALE__] }),
              (0, S.jsx)("div", {
                className: "L8wIC6",
                children: cn("label_lowest_price_guaranteed"),
              }),
              (0, S.jsx)(zs.ve, {
                content: (0, S.jsx)("img", {
                  alt: "icon help",
                  className: "KnDbyw",
                  src: bt,
                }),
                showContent: (0, S.jsxs)("div", {
                  className: l()(ln, "NCTaee"),
                  children: [
                    (0, S.jsxs)("button", {
                      className: "k5G9EU",
                      onClick: t,
                      children: [
                        cn("label_lowest_price_text"),
                        (0, S.jsx)("img", {
                          alt: "icon arrow right",
                          className: "iYjRPl",
                          src: Ls,
                        }),
                      ],
                    }),
                    (0, S.jsx)("div", {
                      className: "Xi8knp",
                      children: cn("label_lowest_price_guaranteed_tnc").replace(
                        /\\n/g,
                        "\n"
                      ),
                    }),
                  ],
                }),
                showPosition: "center",
              }),
            ],
          });
        },
        un = {
          lpg: "Kcdc4E",
          icon: "L5A3D0",
          iconID: "ygGuPD",
          iconVN: "RSkYgF",
          lpgTitleContainer: "SBnVFu",
          lpgTitle: "gMbtUb",
          lpgSubtitle: "yt97rI",
          lpgTooltip: "kAeSAk",
          helpIcon: "MeARD8",
          lpgAction: "TbAVGJ",
          iconArrowRight: "r8ukna",
          lpgTnc: "OeC6Rv",
        },
        { t: pn } = N.I18n,
        hn = (0, z.Kd)(),
        mn = ({ handleLpgChat: e }) => {
          const t = i.useCallback(() => {
            const t = on(__LOCALE__, Js);
            t && window && window.open ? window.open(t, "_blank") : e && e();
          }, [e]);
          return (0, S.jsxs)("div", {
            className: l()("flex", "items-center", un.lpg),
            children: [
              (0, S.jsx)("div", {
                className: l()(un.icon, {
                  [un[`icon${hn}`]]: "ID" === hn || "VN" === hn,
                }),
              }),
              (0, S.jsxs)("div", {
                children: [
                  (0, S.jsxs)("div", {
                    className: un.lpgTitleContainer,
                    children: [
                      (0, S.jsx)("div", {
                        className: un.lpgTitle,
                        children: pn("label_lowest_price_guaranteed"),
                      }),
                      (0, S.jsx)(zs.ve, {
                        content: (0, S.jsx)("img", {
                          alt: "icon help",
                          className: un.helpIcon,
                          src: bt,
                        }),
                        showContent: (0, S.jsxs)("div", {
                          className: l()(ln, un.lpgTooltip),
                          children: [
                            (0, S.jsxs)("button", {
                              className: un.lpgAction,
                              onClick: t,
                              children: [
                                pn("label_lowest_price_text"),
                                (0, S.jsx)("img", {
                                  alt: "icon arrow right",
                                  className: un.iconArrowRight,
                                  src: Ls,
                                }),
                              ],
                            }),
                            (0, S.jsx)("div", {
                              className: un.lpgTnc,
                              children: pn(
                                "label_lowest_price_guaranteed_tnc"
                              ).replace(/\\n/g, "\n"),
                            }),
                          ],
                        }),
                        showPosition: "center",
                      }),
                    ],
                  }),
                  (0, S.jsx)("div", {
                    className: un.lpgSubtitle,
                    children: pn("label_lowest_price_text"),
                  }),
                ],
              }),
            ],
          });
        },
        _n = "VQRdEN",
        gn = (0, z.Kd)(),
        { t: fn } = N.I18n,
        xn =
          "SG" === gn
            ? "label_million_dollar_discount"
            : "label_original_guarantee",
        vn =
          "SG" === gn
            ? "label_million_dollar_discount_title"
            : "label_original_guarantee_subtext",
        Cn = () => {
          const e = (0, F.oO)(),
            t =
              (0, V.isFeatureEnabled)(W.bl) && e
                ? "label_original_guarantee_subtext_mall"
                : vn;
          return (0, S.jsx)(me.TrackingLink, {
            targetType: "ProductOriginalGuarantee",
            to: on(__LOCALE__, tn) || "",
            target: "_blank",
            rel: "noreferrer",
            children: (0, S.jsxs)("div", {
              className: l()("flex items-center", "i1ATuL"),
              children: [
                (0, S.jsx)("div", {
                  className: l()("qa6p_P", { [_n]: "ID" === gn }),
                }),
                (0, S.jsxs)("div", {
                  children: [
                    (0, S.jsx)("div", {
                      className: "WGUFQF",
                      children: fn(xn),
                    }),
                    (0, S.jsx)("div", { className: "I2eUzC", children: fn(t) }),
                  ],
                }),
              ],
            }),
          });
        };
      var jn = s(10311),
        bn = s(471);
      function Nn(e) {
        const { showPlaceholder: t, className: s, children: n } = e,
          i = (0, S.jsx)("div", { className: s });
        return t ? i : n ? (0, S.jsx)(S.Fragment, { children: n }) : i;
      }
      function In(e) {
        return (0, F.mk)((t) => !(null == t || !t.includes(e)));
      }
      const yn = "sq8Un3",
        Sn = () => {
          const e = (0, F.QB)(),
            t = (0, F.$f)(),
            s = In("ineligible_ep"),
            { label: i, backgroundColor: a, price: r } = e || {},
            {
              url: o,
              text: l,
              promotionId: c,
              modelId: d,
              label: u,
              ineligibleEpCta: p,
            } = t || {},
            h = { label: u, promotionId: c, modelId: d },
            m = (0, me.useTrackImpression)("ExclusivePriceBadge", h),
            _ = (0, me.useTrackClick)("ExclusivePriceEntry", h);
          if (s && null === e && null === t)
            return (0, S.jsx)(Nn, { className: yn, showPlaceholder: s });
          if (!e || !t) return null;
          const g = (e) =>
            e
              ? `<span class=_1T0it>${(0, bn.formatCurrency)(
                  (0, z.Kd)(),
                  (0, bn.deflateServerNumber)(e)
                )}</span>`
              : "";
          return (0, S.jsxs)("div", {
            className: yn,
            ref: m,
            children: [
              (0, S.jsx)(ye.Q8, {
                label: i || "",
                price: r || 0,
                backgroundColor: a || "#EE4D2D",
                className: "RfzBCD",
              }),
              (0, S.jsxs)("div", {
                onClick: () => {
                  _(), o && (window.location.href = o);
                },
                className: "dDsT9a",
                children: [
                  (0, S.jsx)("div", {
                    className: "text-trunc-1",
                    dangerouslySetInnerHTML: {
                      __html: l
                        ? (0, $e.tx)(
                            l,
                            (0, n.Z)({}, p, {
                              saved_amount: g(
                                null == p ? void 0 : p.save_amount
                              ),
                              promotion_price: g(null == p ? void 0 : p.price),
                            })
                          )
                        : "",
                    },
                  }),
                  (0, S.jsx)(jn.Z, {
                    className: "ljlTQb",
                    color: "rgba(0, 0, 0, 0.54)",
                  }),
                ],
              }),
            ],
          });
        },
        Tn = (0, z.Kd)(),
        { t: wn } = N.I18n,
        kn = ["PL", "ES", "FR"],
        En = ["CO"];
      function Pn({ itemType: e }) {
        return kn.includes(Tn) || (En.includes(Tn) && 1 === e)
          ? (0, S.jsx)("div", {
              className: l()("SpXDAl"),
              children: wn("product_page_label_vat_inclusive"),
            })
          : null;
      }
      const An = s.p + "productdetailspage/03bd4df693f3e66f2f8a.svg",
        Ln = s.p + "productdetailspage/a67394e0bf3ee5f4d181.svg",
        Rn = s.p + "productdetailspage/3b5eec7723a8155e10c0.svg";
      var Dn = s(34242),
        Mn = (function (e) {
          return (
            (e[(e.VOUCHER_ONLY = 1)] = "VOUCHER_ONLY"),
            (e[(e.EP_ONLY = 2)] = "EP_ONLY"),
            (e[(e.VOUCHER_EP = 3)] = "VOUCHER_EP"),
            e
          );
        })(Mn || {});
      function On() {
        const e = (0, ts.KD)(),
          t = (0, i.useMemo)(() => {
            if (!e) return {};
            const {
                finalPriceValue: t,
                productDiscount: s,
                otherDiscounts: n,
              } = e,
              i =
                !(null == n || !n.length) &&
                (null == n
                  ? void 0
                  : n.findIndex((e) => e.type === Dn.N8.MembershipDiscount)) >=
                  0,
              a =
                !!s ||
                (!(null == n || !n.length) &&
                  n.findIndex((e) => e.type !== Dn.N8.MembershipDiscount));
            return {
              finalPriceType:
                i && a ? Mn.VOUCHER_EP : a ? Mn.VOUCHER_ONLY : Mn.EP_ONLY,
              finalPriceValue: t,
            };
          }, [e]);
        return {
          drawerTrackingRef: (0, me.useTrackImpression)("FinalPriceDrawer", t),
          voucherIconTrackingRef: (0, me.useTrackImpression)("FinalPrice", t),
        };
      }
      const Zn = {
          indicatorIcon: "VORYf4",
          drawerContainer: "bmio7i",
          drawerTitle: "Aa5Bm3",
          drawerItem: "aTgGZz",
          main: "t4bIH7",
          price: "_XD6zA",
          discount: "fUgcCU",
          caption: "SdwVt8",
          summary: "eBIqW9",
          estimatedPrice: "VbPRhS",
          finalPrice: "wNfSEo",
          finalPriceDisclaimer: "U6i4na",
          divider: "BcpmJT",
          martColor: "nCS24N",
          mallColor: "Tqs6s8",
        },
        { t: Fn } = N.I18n;
      function Bn({ name: e, price: t, caption: s, isDiscount: n = !1 }) {
        const { isMart: i, isOfficial: a } = (0, F.J_)();
        return (0, S.jsxs)("div", {
          className: Zn.drawerItem,
          children: [
            (0, S.jsxs)("div", {
              className: Zn.main,
              children: [
                (0, S.jsx)("span", { className: Zn.name, children: e }),
                (0, S.jsx)("span", {
                  className: l()(Zn.price, {
                    [Zn.discount]: n,
                    [Zn.martColor]: i,
                    [Zn.mallColor]: a && !i,
                  }),
                  children: t,
                }),
              ],
            }),
            !!s && (0, S.jsx)("div", { className: Zn.caption, children: s }),
          ],
        });
      }
      const Hn = function () {
          const { isMart: e, isOfficial: t } = (0, F.J_)(),
            s = (0, ts.KD)(),
            { drawerTrackingRef: n } = On();
          if (!s) return null;
          const {
            originalPrice: i,
            productDiscount: a,
            otherDiscounts: r,
            price: o,
          } = s;
          return (0, S.jsxs)("div", {
            className: Zn.drawerContainer,
            ref: n,
            children: [
              (0, S.jsx)("div", {
                className: Zn.drawerTitle,
                children: Fn("pdp_final_price_indicator_drawer_title"),
              }),
              (0, S.jsx)(Bn, {
                name: Fn("pdp_final_price_indicator_drawer_original_price"),
                price: i,
              }),
              !!a &&
                (0, S.jsx)(Bn, {
                  name: null == a ? void 0 : a.name,
                  price: a.discountAmount,
                  isDiscount: !0,
                }),
              (0, S.jsx)("div", { className: Zn.divider }),
              !!r &&
                r.map((e) =>
                  (0, S.jsx)(
                    Bn,
                    {
                      name: e.name,
                      price: e.discountAmount,
                      caption: e.caption,
                      isDiscount: !0,
                    },
                    e.name
                  )
                ),
              (0, S.jsx)("div", { className: Zn.divider }),
              (0, S.jsxs)("div", {
                className: Zn.summary,
                children: [
                  (0, S.jsxs)("div", {
                    className: Zn.estimatedPrice,
                    children: [
                      `${Fn(
                        "pdp_final_price_indicator_drawer_estimated_price"
                      )}`,
                      (0, S.jsx)("span", {
                        className: l()(Zn.finalPrice, {
                          [Zn.martColor]: e,
                          [Zn.mallColor]: t && !e,
                        }),
                        children: o,
                      }),
                    ],
                  }),
                  (0, S.jsx)("div", {
                    className: Zn.finalPriceDisclaimer,
                    children: Fn(
                      "pdp_final_price_indicator_drawer_final_price_hint"
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        Un = function () {
          const e = (0, ts.BV)(),
            { isMart: t, isOfficial: s } = (0, F.J_)(),
            { voucherIconTrackingRef: n } = On();
          return e
            ? (0, S.jsx)(zs.dy, {
                alignment: "center",
                drawerButton: (0, S.jsx)("img", {
                  alt: "final price indicator icon",
                  className: Zn.indicatorIcon,
                  ref: n,
                  src: t ? Rn : s ? Ln : An,
                }),
                children: (0, S.jsx)(Hn, {}),
              })
            : null;
        };
      function Vn(e, t) {
        const { price_before_discount: s, price: n } = e;
        return n && s && s !== n
          ? Wn(Math.min(100 * (1 - n / s), 99), t)
          : null;
      }
      function Wn(e, t) {
        if ("TW" === t) {
          const t = Math.max(0.1, (100 - e) / 10);
          return Number.isInteger(t) ? t.toFixed(0) : t.toFixed(1);
        }
        return `${Math.round(Math.max(1, e))}%`;
      }
      function Qn(e, t) {
        return (0, bn.formatCurrency)(t, (0, bn.deflateServerNumber)(e, t));
      }
      var Gn = s(75317);
      const qn = "B67UQ0";
      var Kn = s(49014),
        $n = s(54173);
      const Yn = (0, z.Kd)(),
        { t: zn } = N.I18n,
        Xn = function (e) {
          const {
            selectedModel: t,
            currentPrice: s,
            priceBeforeDiscount: r,
            currentPriceFormatted: o,
            priceBeforeDiscountFormatted: c,
            useItemLevelPriceStock: d,
          } = e;
          let u = e.item;
          const { price: h, priceBeforeDiscount: m } = (0, ts.$h)(),
            { containerRef: _, isOverflown: g } = (function ({
              price: e = "",
              priceBeforeDiscount: t = "",
            }) {
              const s = (0, i.useRef)(null),
                [n, a] = (0, i.useState)(!1);
              return (
                (0, i.useLayoutEffect)(() => {
                  a(!1);
                }, [e, t]),
                (0, i.useLayoutEffect)(() => {
                  if (!n && s.current && e) {
                    const { scrollWidth: e, offsetWidth: t } = s.current;
                    a(e > t);
                  }
                }, [n, e, t]),
                { containerRef: s, isOverflown: n }
              );
            })({ price: h, priceBeforeDiscount: m }),
            f = !(0, V.isFeatureEnabled)(W.WG),
            x = (0, V.isFeatureEnabled)(W.R6),
            v = (0, F.mX)("disable_price_with_variation"),
            { discount: C, discountText: j } = (0, F.JR)(),
            { discountText: b } = (0, Kn.w1)(),
            N = d ? j : b;
          C && (u = (0, n.Z)({}, u, { discount: Wn(C, Yn) }));
          const I = x
              ? N
              : (({
                  item: e,
                  selectedModel: t,
                  priceBeforeDiscount: s,
                  currentPrice: n,
                }) => {
                  const i = !!t,
                    a = e && e.models && e.models.length > 1,
                    r = (e && e.discount) || "";
                  if (i && a) {
                    if (s > 0 && n > 0) {
                      const t = { price_before_discount: s, price: n };
                      return e && e.flash_sale
                        ? Vn(t, __LOCALE__)
                        : (function (e, t) {
                            const { price_before_discount: s, price: n } = e;
                            return n && s && s !== n
                              ? Wn(Math.round(100 * (1 - n / s)), t)
                              : null;
                          })(t, __LOCALE__);
                    }
                    return "";
                  }
                  return r;
                })({
                  item: u,
                  selectedModel: t,
                  priceBeforeDiscount: r,
                  currentPrice: s,
                  useItemLevelPriceStock: d,
                }),
            y = (0, p.Z)(u, ["coin_earn_label"], ""),
            T = (0, Kn.dp)(),
            w = (0, ts.ZV)(),
            k = v ? T : w,
            E = null == k ? void 0 : k.isWholesale,
            P = (r !== s || d) && !!r && !!c,
            A = !!m;
          return (0, S.jsx)("section", {
            className: v ? l()("flex items-center") : "",
            "aria-live": "polite",
            children: v
              ? null != k && k.isWholesale
                ? (0, S.jsxs)(a().Fragment, {
                    children: [
                      (0, S.jsx)(ti, { price: o }),
                      (0, S.jsx)(Jn, {}),
                      (0, S.jsx)(ii, { coinEarnLabel: y }),
                    ],
                  })
                : (0, S.jsxs)("div", {
                    className: l()("flex items-center", "kvHpZF"),
                    children: [
                      P && (0, S.jsx)(ei, { price: c }),
                      (0, S.jsxs)("div", {
                        className: l()("flex items-center"),
                        children: [
                          (0, S.jsx)(ti, { price: o }),
                          f && (0, S.jsx)(si, { item: u, discount: I }),
                          (0, S.jsx)(ii, { coinEarnLabel: y }),
                        ],
                      }),
                    ],
                  })
              : (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsxs)("div", {
                      className: "jRlVo0",
                      ref: _,
                      children: [
                        (0, S.jsx)(ti, { price: h }),
                        (0, S.jsx)(Un, {}),
                        !g &&
                          A &&
                          (0, S.jsx)(ei, {
                            price: m,
                            s: { marginLeft: (0, $n.Z)(10), marginRight: 0 },
                          }),
                        E && (0, S.jsx)(Jn, {}),
                        (0, S.jsx)(ni, {}),
                        (0, S.jsx)(ii, { coinEarnLabel: y }),
                      ],
                    }),
                    g &&
                      A &&
                      (0, S.jsx)(ei, {
                        price: m,
                        s: { margin: `${(0, $n.Z)(5)} 0`, marginRight: 0 },
                      }),
                  ],
                }),
          });
        };
      function Jn() {
        return (0, S.jsx)("span", {
          className: "cxP78O",
          children: `[${zn("label_product_wholesale")}]`,
        });
      }
      function ei(e) {
        const { price: t, s } = e;
        return (0, S.jsx)("div", {
          className: "ZA5sW5",
          style: s,
          children: t,
        });
      }
      function ti(e) {
        const t = (0, F.mX)("disable_price_with_variation"),
          { price: s } = e;
        return (0, S.jsx)("div", {
          className: l()("IZPeQz", { [qn]: !t }),
          children: s,
        });
      }
      function si(e) {
        const { item: t, discount: s } = e,
          n = (0, p.Z)(t, ["welcome_package_type"], "") === Gn.y.FREE_GIFT;
        return (0, p.Z)(t, ["hidden_price_display"], !1) || !s || n
          ? null
          : (0, S.jsx)("div", { className: "bVtogu", children: ai(s, zn) });
      }
      function ni() {
        const e = (0, ts.d3)(),
          t = (0, ts.yN)();
        return t && !e
          ? (0, S.jsx)("div", { className: "vms4_3", children: t })
          : null;
      }
      function ii(e) {
        const { coinEarnLabel: t } = e;
        return t
          ? (0, S.jsx)(ye.js, { text: t, large: !0, style: { marginRight: 0 } })
          : null;
      }
      function ai(e, t) {
        return `${e} ${t("product_page_badge_label_off")}`;
      }
      const ri = (0, z.Kd)();
      function oi(e) {
        const t = !(0, V.isFeatureEnabled)(W.Sj),
          s = (0, V.isFeatureEnabled)(W.R6),
          { item: n } = e,
          i = (0, p.Z)(n, ["flash_sale", "discount_text"], ""),
          a = (0, p.Z)(n, ["flash_sale", "price_before_discount"], 0),
          r = (0, p.Z)(n, ["flash_sale", "price"], 0),
          o = Qn(String(a), ri),
          c = Qn(String(r), ri),
          d = s ? i : Vn({ price_before_discount: a, price: r }, ri),
          u = (0, p.Z)(n, ["coin_earn_label"], "");
        return (0, S.jsx)("section", {
          className: l()("flex items-center"),
          children: (0, S.jsxs)("div", {
            className: l()("flex items-center", "vRJNuA"),
            children: [
              a && a !== r ? (0, S.jsx)(ei, { price: o }) : null,
              (0, S.jsxs)("div", {
                className: l()("flex items-center"),
                children: [
                  r ? (0, S.jsx)(ti, { price: c }) : null,
                  t && (0, S.jsx)(si, { item: n, discount: d }),
                  (0, S.jsx)(ii, { coinEarnLabel: u }),
                ],
              }),
            ],
          }),
        });
      }
      const { t: li } = N.I18n,
        ci = function () {
          return (0, S.jsxs)("div", {
            className: "aZodKB",
            children: [
              (0, S.jsx)("div", { className: "G3En6C" }),
              (0, S.jsxs)("div", {
                className: "bFB2ho",
                children: [
                  (0, S.jsxs)("div", {
                    className: "UgSYaV",
                    children: [
                      li("bpg_ribbon_title"),
                      (0, S.jsx)("div", {
                        className: "__9aNK",
                        children: (0, S.jsx)("a", {
                          href: "https://shopee.sg/m/shopee-supermarket-everyday-lowest-prices",
                          target: "_blank",
                          rel: "noreferrer",
                          style: { color: "rgba(0,0,0,0.54)" },
                          children: (0, S.jsx)("img", {
                            alt: "icon help",
                            className: "CBRnBZ",
                            src: bt,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, S.jsx)("div", {
                    className: "mPAfIA",
                    children: li("bpg_ribbon_subtitle"),
                  }),
                ],
              }),
            ],
          });
        },
        di = s.p + "productdetailspage/8b2cf24350e114f3ca9b.tr.js";
      var ui = s(20261);
      const { t: pi } = N.I18n;
      N.Tracking.injectTracking(di);
      const hi = function () {
          const e = {
              [ui.MV]: {
                TEXT: "pdp_prc_tooltip_text",
                DRAWER_CONTENT: "pdp_prc_drawer_content",
              },
              MX: {
                TEXT: "pdp_tax_markup_disclaimer",
                DRAWER_CONTENT: "pdp_tax_markup_drawer_content__MX",
              },
            },
            t = (0, F.Q6)(),
            s = (0, me.useTrackImpression)("AdditionalCbTax"),
            n = (0, me.useTrackImpression)("TaxMarkupDisclaimer"),
            i = (0, me.useTrackImpression)("TaxMarkupDisclaimerTooltip");
          return t
            ? (0, S.jsxs)("div", {
                className: "VDApCl",
                children: [
                  (0, S.jsx)("span", {
                    className: "NzLZHV",
                    ref: "MX" === ui.MV ? n : s,
                    children: pi(e[ui.MV].TEXT),
                  }),
                  (0, S.jsx)(yt, {
                    drawerRef: "MX" === ui.MV ? i : void 0,
                    content: pi(e[ui.MV].DRAWER_CONTENT),
                    drawerClass: "tEcN3c",
                  }),
                ],
              })
            : null;
        },
        mi = s.p + "productdetailspage/03bc6b6d8fbda92d3efb.svg",
        _i = s.p + "productdetailspage/e65673731be1d601b349.svg",
        gi = s.p + "productdetailspage/70a063715ef0348c1ff9.svg",
        fi = s.p + "productdetailspage/3787d2ad9f64600c4504.svg",
        xi = s.p + "productdetailspage/fe98537ab3ab7bfe137f.svg",
        vi = s.p + "productdetailspage/27395c4fddb4fb2a2a79.svg",
        Ci = s.p + "productdetailspage/bc8abc1bdc0bd4d0354c.svg",
        ji = s.p + "productdetailspage/b5850290b1848eaf4eee.svg",
        bi = s.p + "productdetailspage/490793eb3b5e2f84bf19.svg",
        Ni = s.p + "productdetailspage/c2c9f19e6b4338b622c5.svg",
        Ii = s.p + "productdetailspage/da508600aff0da3190d0.svg",
        yi = s.p + "productdetailspage/b8c45db76f262a0f85fa.svg",
        Si = s.p + "productdetailspage/9f8a8fcc80cab227d3d4.svg",
        Ti = s.p + "productdetailspage/9783846220f488fadc30.svg",
        wi = s.p + "productdetailspage/74df8e11a08f11a8a990.svg",
        ki = s.p + "productdetailspage/2227a2455bc1588bebf2.svg",
        { t: Ei } = N.I18n;
      var Pi = (function (e) {
        return (
          (e[(e.FulfilledByShopee = 0)] = "FulfilledByShopee"),
          (e[(e.FreeShipping = 1)] = "FreeShipping"),
          (e[(e.FastDelivery = 2)] = "FastDelivery"),
          (e[(e.LowPrice = 3)] = "LowPrice"),
          (e[(e.FreeReturn = 4)] = "FreeReturn"),
          (e[(e.ChangeOfMind = 5)] = "ChangeOfMind"),
          (e[(e.CashOnDelivery = 6)] = "CashOnDelivery"),
          e
        );
      })(Pi || {});
      function Ai() {
        var e;
        const t = (0, z.Kd)(),
          s = (0, F.f3)(),
          i = (0, F.Fk)(),
          a = 1 === (0, F.C0)(),
          r = (0, F._h)();
        let o = null;
        switch (t) {
          case "PH":
            o = [
              { type: Pi.LowPrice, icon: vi },
              { type: Pi.FreeShipping, icon: gi },
              { type: Pi.FreeReturn, icon: fi },
              { type: Pi.FulfilledByShopee, icon: yi },
            ];
            break;
          case "VN":
            (o = [
              { type: Pi.LowPrice, icon: vi },
              { type: Pi.FreeShipping, icon: gi },
            ]),
              i &&
                o.push({
                  type: a ? Pi.ChangeOfMind : Pi.FreeReturn,
                  icon: a ? xi : fi,
                });
            break;
          case "ID":
            o = [
              { type: Pi.FreeShipping, icon: gi },
              { type: Pi.LowPrice, icon: Ci },
              { type: Pi.FreeReturn, icon: Ii },
              { type: Pi.CashOnDelivery, icon: ki },
            ];
            break;
          case "MY":
            o = [
              { type: Pi.FreeReturn, icon: Ni },
              { type: Pi.LowPrice, icon: vi },
              { type: Pi.FulfilledByShopee, icon: yi },
              { type: Pi.FreeShipping, icon: gi },
              { type: Pi.FastDelivery, icon: wi },
            ];
            break;
          case "TW":
            o = [
              { type: Pi.FreeShipping, icon: gi },
              { type: Pi.FastDelivery, icon: Si },
              { type: Pi.FulfilledByShopee, icon: yi },
            ];
            break;
          case "TH":
            o = [
              { type: Pi.FreeShipping, icon: gi },
              { type: Pi.LowPrice, icon: bi },
              { type: Pi.FreeReturn, icon: fi },
              { type: Pi.FulfilledByShopee, icon: yi },
            ];
            break;
          case "SG": {
            var l, c;
            o = [];
            const e = (e) => "X-day" === e.service_type_info;
            !!(
              (null != r &&
                null != (l = r.ungrouped_channel_infos) &&
                l.some(e)) ||
              (null != r &&
                null != (c = r.grouped_channel_infos_by_service_type) &&
                c.some((t) => t.channel_infos.some(e)))
            ) && o.push({ type: Pi.FastDelivery, icon: Ti }),
              i &&
                o.push({ type: a ? Pi.ChangeOfMind : Pi.FreeReturn, icon: fi }),
              s.is_service_by_shopee &&
                o.push({ type: Pi.FulfilledByShopee, icon: yi }),
              o.push(
                { type: Pi.LowPrice, icon: ji },
                { type: Pi.FreeShipping, icon: gi }
              );
            break;
          }
        }
        return null == (e = o)
          ? void 0
          : e.map((e) => {
              switch (e.type) {
                case Pi.FastDelivery:
                  return (0, n.Z)({}, e, {
                    name: Ei(`fast_delivery_choice_title__${t}`),
                    description: Ei(`fast_delivery_choice_subtitle__${t}`),
                  });
                case Pi.FreeReturn:
                  return (0, n.Z)({}, e, {
                    name: Ei(`free_return_choice_title__${t}`),
                    description: Ei(`free_return_choice_subtitle__${t}`),
                  });
                case Pi.FreeShipping:
                  return (0, n.Z)({}, e, {
                    name: Ei(`free_shipping_choice_title__${t}`),
                    description: Ei(`free_shipping_choice_subtitle__${t}`),
                  });
                case Pi.FulfilledByShopee:
                  return (0, n.Z)({}, e, {
                    name: Ei(`fulfilled_by_shopee_choice_title__${t}`),
                    description: Ei(
                      `fulfilled_by_shopee_choice_subtitle__${t}`
                    ),
                  });
                case Pi.LowPrice:
                  return (0, n.Z)({}, e, {
                    name: Ei(`low_price_choice_title__${t}`),
                    description: Ei(`low_price_choice_subtitle__${t}`),
                  });
                case Pi.ChangeOfMind:
                  return (0, n.Z)({}, e, {
                    name: Ei(`com_choice_title__${t}`),
                    description: Ei(`com_choice_subtitle__${t}`),
                  });
                case Pi.CashOnDelivery:
                  return (0, n.Z)({}, e, {
                    name: Ei(`cash_on_delivery_choice_title__${t}`),
                    description: Ei(`cash_on_delivery_choice_subtitle__${t}`),
                  });
              }
            });
      }
      const { t: Li } = N.I18n,
        Ri = function () {
          const e = (0, F.aj)(),
            t = Ai(),
            s = (0, F.l2)();
          return (0, V.isFeatureEnabled)(W.Z0) || !e || !t || s
            ? null
            : (0, S.jsxs)("div", {
                className: "ZGAHfU",
                children: [
                  (0, S.jsx)("img", {
                    alt: "Shopee Choice",
                    className: "vILuOY",
                    src: mi,
                  }),
                  "TW" === ui.MV
                    ? (0, S.jsx)("img", {
                        alt: "蝦皮特選",
                        className: "k96mwU",
                        src: _i,
                      })
                    : (0, S.jsx)("div", {
                        className: "YVIs3C",
                        children: N.I18n.t("pdp_shopee_choice"),
                      }),
                  (0, S.jsx)("div", {
                    className: "ocQX4L",
                    children: t
                      .slice(0, 3)
                      .map((e) => Li(e.name))
                      .join(" · "),
                  }),
                ],
              });
        };
      var Di = s(66699);
      const Mi = (0, z.dU)(),
        Oi = (0, z.Kd)(),
        Zi = (0, V.isFeatureEnabled)(W.gH),
        Fi = {
          default: 0,
          ID: { default: 27994335, staging: 10916, test: 210211, uat: 80346 },
          SG: { default: 30872892, staging: 11086 },
          MY: { default: 145427, staging: 10937 },
          VN: { default: 29940332, staging: 10933 },
          TH: { default: 34458391, staging: 205378, test: 261416 },
          PH: { default: 45737335, uat: 205771, test: 266287 },
          TW: { default: 93943468, uat: 14674 },
        },
        Bi = {
          default: [0],
          ID: {
            default: [
              27994335, 31945464, 31945737, 31945829, 31945923, 31945976,
            ],
            staging: [205221, 205222, 205223, 205224, 205225, 205226],
            test: [261120, 261121, 261122, 261123, 261124, 261125],
          },
          SG: { default: [30872892], staging: [11086] },
          MY: { default: [145427], staging: [10937] },
          VN: { default: [29940332], staging: [10933] },
          TH: { default: [34458391], staging: [205378], test: [261416] },
          PH: { default: [45737335], uat: [205771], test: [266287] },
          TW: { default: [93943468], uat: [14674] },
        };
      function Hi(e) {
        return e.hasOwnProperty(Mi) ? e[Mi] : e.default;
      }
      function Ui(e) {
        if (Zi) {
          const t = Bi.hasOwnProperty(Oi) ? Hi(Bi[Oi]) : Bi.default;
          return t[parseInt(e, 10) % t.length];
        }
        return Fi.hasOwnProperty(Oi) ? Hi(Fi[Oi]) : Fi.default;
      }
      var Vi = s(6035),
        Wi = s(22471),
        Qi = s(10950),
        Gi = s(26712),
        qi = s(52285);
      const Ki = "jw_y2_",
        $i = "ElhX93",
        Yi = "yJfHJc",
        zi = "sqxPFv",
        Xi = function () {
          const e = (0, ts.cm)(),
            t = (0, A.useAtomValue)(ss.k_),
            { rawPrice: s } = (0, ts.$h)(),
            n = {
              promotionId: null == e ? void 0 : e.promotionId,
              promotionType: null == e ? void 0 : e.promotionType,
              modelId: null == t ? void 0 : t.modelid,
              price: s,
            },
            i =
              (null == e ? void 0 : e.fullUrl) || (null == e ? void 0 : e.url);
          i && (n.redirectionUrl = i);
          const a = (0, me.useTrackImpression)("TeaserBanner", n),
            r = (0, me.useTrackClick)("TeaserBanner", n);
          if (!e) return null;
          const { brandingIcon: o, texts: l, url: c, fullUrl: u } = e,
            p = (0, S.jsxs)(S.Fragment, {
              children: [
                !!o && (0, S.jsx)("div", { className: $i, children: o }),
                (0, S.jsx)("div", {
                  className: Yi,
                  children: l.map((e, t) =>
                    (0, S.jsx)(
                      "span",
                      {
                        style:
                          e.type === F.yG.Bold ? { fontWeight: 700 } : void 0,
                        children: e.content,
                      },
                      t
                    )
                  ),
                }),
                !(!c && !u) && (0, S.jsx)(qi.Z, { size: 18, className: zi }),
              ],
            }),
            h = () => {
              r();
            };
          return u
            ? (0, S.jsx)("a", {
                className: Ki,
                href: u,
                target: "_blank",
                rel: "noopener noreferrer",
                ref: a,
                onClick: h,
                children: p,
              })
            : c
            ? (0, S.jsx)(d.Link, {
                className: Ki,
                to: c,
                ref: a,
                onClick: h,
                children: p,
              })
            : (0, S.jsx)("div", {
                className: Ki,
                ref: a,
                onClick: h,
                children: p,
              });
        };
      function Ji() {
        const e = (0, F.r)(),
          t = {
            promotionId: null == e ? void 0 : e.promotionId,
            promotionType: null == e ? void 0 : e.promotionType,
          },
          s = (0, me.useTrackImpression)("TeaserBanner", t),
          n = (0, me.useTrackClick)("TeaserBanner", t);
        if (!e) return null;
        const { brandingIcon: i, texts: a, url: r } = e,
          o = (0, S.jsxs)(S.Fragment, {
            children: [
              !!i && (0, S.jsx)("div", { className: $i, children: i }),
              (0, S.jsx)("div", {
                className: Yi,
                children: a.map((e, t) =>
                  (0, S.jsx)(
                    "span",
                    {
                      style:
                        e.type === F.yG.Bold ? { fontWeight: 700 } : void 0,
                      children: e.content,
                    },
                    t
                  )
                ),
              }),
              (0, S.jsx)(qi.Z, { size: 18, className: zi }),
            ],
          });
        return (0, S.jsx)(d.Link, {
          className: Ki,
          to: r,
          ref: s,
          onClick: () => {
            n();
          },
          children: o,
        });
      }
      const ea = Di.v.BASE_API_URL,
        ta = (0, V.isFeatureEnabled)(W.K6),
        { t: sa } = N.I18n,
        na = (0, z.Kd)();
      function ia(e) {
        var t, s;
        const {
            item: i,
            userId: a,
            selectedModel: r,
            priceBeforeDiscountFormatted: o,
            currentPriceFormatted: c,
            priceBeforeDiscount: h,
            currentPrice: m,
            useItemLevelPriceStock: g,
            isFallbackLogic: f,
            newReduxItemPrice: x,
            newReduxItemPriceBeforeDiscount: v,
            showLowestInstallmentGuarantee: C,
          } = e,
          j = (0, F.mX)("disable_price_with_variation"),
          b = (function () {
            const e = (0, d.useHistory)(),
              t = (0, u.useDispatch)(),
              { isLoggedIn: s } = (0, H.Sq)(),
              i = (0, F.$8)();
            return (a) => {
              if (s) {
                const e = i
                  ? (0, n.Z)({}, a.options, {
                      itemId: i.rItemId,
                      shopId: i.rShopId,
                      vSkuItem: (0, n.Z)({}, i, { modelId: i.rModelId }),
                    })
                  : a.options;
                t(N.Chat.chatWithUser((0, n.Z)({}, a, { options: e })));
              } else
                e.push(
                  (0, Qi.FK)(Gi.D_.getUrl(), {
                    next: location.href,
                    from: location.href,
                    from_source: "pdp_chat_now",
                  })
                );
            };
          })(),
          I = () => {
            b({
              shopId: i.shop_id,
              userId: Ui(a),
              prefilledMessage: sa(
                `msg_lowest_price_guaranteed_prefilled_message_${na.toLowerCase()}`,
                {
                  url:
                    ea +
                    _.Z.getUrl({
                      seoName: i.name,
                      shopId: i.shop_id,
                      itemId: i.item_id,
                    }),
                  interpolation: { escapeValue: !1 },
                }
              ),
              options: { entryPoint: Vi.G.ENTRY_POINT_LOWEST_PRICE_GUARANTEED },
            });
          },
          y = null == (t = (0, ts.Q6)()) ? void 0 : t.mainColor,
          T = null == (s = (0, F.ko)()) ? void 0 : s.mainColor,
          w = null != y ? y : T,
          k = g ? x : c,
          E = g ? v : o,
          P =
            i && i.upcoming_flash_sale && !i.flash_sale
              ? i.upcoming_flash_sale
              : null,
          A = i.has_lowest_price_guarantee && !(0, V.isFeatureEnabled)(W.KZ),
          L = () => A && ("MY" === na || "VN" === na || "ID" === na),
          R = i.show_original_guarantee,
          D = !(!i.show_best_price_guarantee || ta),
          M = (0, p.Z)(i, ["shipping_icon_type"], 0),
          O = !(null == i || !i.flash_sale) && !r && j;
        return (0, S.jsxs)("div", {
          className: l()("flex flex-column", "IFdRIb"),
          children: [
            !!w &&
              (0, S.jsx)("div", {
                className: "Fd0MhG",
                style: { background: `linear-gradient(to left, ${w}, white)` },
              }),
            O
              ? (0, S.jsx)(oi, { item: i })
              : (0, S.jsx)(Xn, {
                  item: i,
                  selectedModel: r,
                  isFallbackLogic: f,
                  currentPrice: m,
                  priceBeforeDiscount: h,
                  currentPriceFormatted: k,
                  priceBeforeDiscountFormatted: E,
                  useItemLevelPriceStock: g,
                }),
            (0, S.jsx)(Pn, { itemType: M }),
            !j && (0, S.jsx)(Xi, {}),
            j && (0, S.jsx)(Ji, {}),
            j &&
              (0, S.jsxs)(S.Fragment, {
                children: [
                  P &&
                    (0, S.jsx)(qs, {
                      upcomingFlashSale: P,
                      itemId: i.itemid,
                      shopId: i.shopid,
                    }),
                  (0, S.jsx)(Sn, {}),
                ],
              }),
            (0, S.jsx)(hi, {}),
            (0, S.jsx)(Ri, {}),
            C
              ? (0, S.jsx)(Ys, {})
              : A && !L()
              ? (0, S.jsx)(dn, { handleLpgChat: I })
              : null,
            R && (0, S.jsx)(Cn, {}),
            L() && (0, S.jsx)(mn, { handleLpgChat: I }),
            D && (0, S.jsx)(ci, {}),
          ],
        });
      }
      const aa = (0, h.compose)(
          (0, u.connect)((e) => {
            const {
                priceBeforeDiscount: t,
                currentPrice: s,
                priceBeforeDiscountFormatted: n,
                currentPriceFormatted: i,
                isFallbackLogic: a,
              } = (0, Es.Yv)(e),
              r = (0, Es.v3)(e);
            return {
              priceBeforeDiscount: t,
              currentPrice: s,
              priceBeforeDiscountFormatted: n,
              currentPriceFormatted: i,
              isFallbackLogic: a,
              useItemLevelPriceStock: (0, Ps.Nz)(r),
            };
          }),
          function (e) {
            return function (t) {
              const s = (0, F.mX)("disable_price_with_variation"),
                i = (0, A.useAtomValue)(ss.k_);
              return (0, S.jsx)(Wi.b.Consumer, {
                children: (a) =>
                  (0, S.jsx)(
                    e,
                    (0, n.Z)({}, t, { selectedModel: s ? a.selectedModel : i })
                  ),
              });
            };
          },
          H.ZP
        )(function (e) {
          const { price: t, priceBeforeDiscount: s } = (0, F.ti)(),
            { showLowestInstallmentGuarantee: i } = (0, F.X8)();
          return (0,
          S.jsx)(ia, (0, n.Z)({}, e, { newReduxItemPrice: t, newReduxItemPriceBeforeDiscount: s, showLowestInstallmentGuarantee: i }));
        }),
        ra = function () {
          var e;
          const t = (0, F.f3)(),
            s = (0, F.mX)("disable_price_with_variation"),
            { accountInfo: n } = (0, H.Sq)(),
            { isMart: i } = (0, F.J_)();
          return (0, S.jsxs)("div", {
            style: { marginTop: 10 },
            children: [
              s ? (0, S.jsx)(Ss, { item: t }) : (0, S.jsx)(as, {}),
              t.preview_info && (0, S.jsx)(ks, { previewInfo: t.preview_info }),
              (0, S.jsx)(aa, {
                item: t,
                isShopeeMart: i,
                userId: null != (e = null == n ? void 0 : n.userId) ? e : null,
              }),
            ],
          });
        },
        oa = s.p + "productdetailspage/75ad583c7fae5d2238b4.svg",
        la = function () {
          const e = (0, F.V8)();
          return null != e && e.disclaimer_text
            ? (0, S.jsxs)("div", {
                className: "xoSh6i",
                children: [
                  (0, S.jsx)("img", {
                    alt: "liquor disclaimer icon",
                    className: "iQpU4t",
                    src: oa,
                  }),
                  (0, S.jsx)("div", { children: e.disclaimer_text }),
                ],
              })
            : null;
        };
      var ca = s(50563);
      function da({ modal: e = !1, type: t, onCancel: s, onSave: n }) {
        return (0, S.jsx)(ca.Z, {
          slotName: "pcmall-autoparts",
          slotProps: { modal: e, type: t, onCancel: s, onSave: n },
        });
      }
      const { t: ua } = N.I18n;
      function pa({ sourceType: e, onSave: t }) {
        const [s, n] = (0, i.useState)(!1),
          a = (0, i.useCallback)(() => n(!1), []),
          { shopId: r, itemId: o } = (0, F.u4)(),
          l = (0, F.xq)(),
          c = {
            shop_id: r,
            item_id: o,
            device_id: "",
            compatibility_status: e,
          },
          d = (0, me.useTrackClick)("AutoPartsFormModalEdit", c);
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)("span", {
              className: "n35tHu",
              onClick: () => {
                n(!0), d();
              },
              children: ua("label_autoparts_edit"),
            }),
            s &&
              (0, S.jsx)(da, {
                modal: !0,
                onCancel: a,
                onSave: (e) => {
                  var s, i, a, c;
                  l({
                    shopId: r,
                    itemId: o,
                    brandId: (null == (s = e.brand) ? void 0 : s.id) || 0,
                    modelId: (null == (i = e.model) ? void 0 : i.id) || 0,
                    yearId: (null == (a = e.year) ? void 0 : a.id) || 0,
                    versionId: (null == (c = e.version) ? void 0 : c.id) || 0,
                  }).finally(() => n(!1)),
                    t && t(e);
                },
              }),
          ],
        });
      }
      const ha = s.p + "productdetailspage/4a509c031d3b0e411310.svg";
      var ma = s(80639);
      function _a() {
        const e = (0, z.of)(),
          t = (0, ma.m9)(e);
        return (0, i.useMemo)(() => {
          var e, s, n, i;
          return {
            brandName:
              (null == t || null == (e = t.brand) ? void 0 : e.name) || "",
            modelName:
              (null == t || null == (s = t.model) ? void 0 : s.name) || "",
            yearName:
              (null == t || null == (n = t.year) ? void 0 : n.name) || "",
            versionName:
              (null == t || null == (i = t.version) ? void 0 : i.name) || "",
          };
        }, [t]);
      }
      const { t: ga } = N.I18n;
      function fa() {
        const { shopId: e, itemId: t } = (0, F.u4)(),
          s = _a(),
          n = {
            shop_id: e,
            item_id: t,
            device_id: "",
            compatibility_status: 1,
            user_vehicle_info: Object.values(s),
          },
          i = (0, me.useTrackImpression)("AutoPartsVehicleInfo", n);
        return (0, S.jsxs)("div", {
          className: "bsAAoE",
          ref: i,
          children: [
            (0, S.jsx)("img", { src: ha }),
            (0, S.jsx)("div", {
              className: "fOgipq",
              children: ga("label_autoparts_compatible_with"),
            }),
            (0, S.jsx)("div", {
              className: "EF1ATM",
              children: ga("label_autoparts_vehicle_info", s),
            }),
            (0, S.jsx)(pa, { sourceType: 1 }),
          ],
        });
      }
      const xa = s.p + "productdetailspage/e177b3ccb791fa3a51e5.svg",
        { t: va } = N.I18n;
      function Ca() {
        const { shopId: e, itemId: t } = (0, F.u4)(),
          s = _a(),
          n = Object.values(s),
          a = (0, K.Bg)(),
          [r, o] = (0, i.useState)(null),
          l = {
            shop_id: e,
            item_id: t,
            device_id: "",
            compatibility_status: 0,
            user_vehicle_info: n,
          },
          c = (0, me.useTrackImpression)("AutoPartsVehicleInfo", l),
          u = (0, me.useTrackClick)("AutoPartsViewProduct", l);
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsxs)("div", {
              className: "mUl4i2",
              ref: c,
              children: [
                (0, S.jsx)("img", { src: xa }),
                (0, S.jsx)("div", {
                  className: "zkgLB0",
                  children: va("label_autoparts_incompatible_with"),
                }),
                (0, S.jsx)("div", {
                  className: "jXx2Tk",
                  children: va("label_autoparts_vehicle_info", r || s),
                }),
                (0, S.jsx)(pa, {
                  sourceType: 0,
                  onSave: (e) => {
                    var t, s, n, i;
                    o({
                      brandName:
                        (null == e || null == (t = e.brand)
                          ? void 0
                          : t.name) || "",
                      modelName:
                        (null == e || null == (s = e.model)
                          ? void 0
                          : s.name) || "",
                      yearName:
                        (null == e || null == (n = e.year) ? void 0 : n.name) ||
                        "",
                      versionName:
                        (null == e || null == (i = e.version)
                          ? void 0
                          : i.name) || "",
                    });
                  },
                }),
              ],
            }),
            a &&
              (0, S.jsx)(d.Link, {
                to: `/search?keyword=${a}&from_auto_drawer=true`,
                onClick: () => {
                  u();
                },
                children: (0, S.jsx)("div", {
                  className: "VvA4RM",
                  children: va("label_autoparts_incompatible_link"),
                }),
              }),
          ],
        });
      }
      function ja() {
        const e = (0, F.Vr)();
        return 2 === e
          ? (0, S.jsx)(fa, {})
          : 3 === e
          ? (0, S.jsx)(Ca, {})
          : null;
      }
      const ba = s.p + "productdetailspage/d6bfbedf56a0f331fd05.svg",
        Na = function () {
          const e = (0, F.u$)(),
            t = null == e ? void 0 : e.nea;
          return t
            ? (0, S.jsxs)("div", {
                className: "HkHJg6",
                children: [
                  (0, S.jsx)("img", {
                    alt: "national environment agency disclaimer icon",
                    className: "K1Rm3M",
                    src: ba,
                  }),
                  (0, S.jsx)("span", { children: t.text }),
                  (0, S.jsx)("a", {
                    className: "Z4Qvak",
                    href: t.full_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: N.I18n.t("product_page_label_learn_more"),
                  }),
                ],
              })
            : null;
        },
        Ia = s.p + "productdetailspage/d32996a147a7f2abca7a.svg",
        ya = s.p + "productdetailspage/0c36f73b2f069bf50b4b.svg",
        Sa = {
          popupChannelWrapper: "RFtB8m",
          activeChannel: "FIA9aM",
          popupChannelImg: "pPGzNd",
          popupChannelName: "Ug6OeI",
          viewMoreIconPopup: "px0yxd",
        },
        Ta = function ({ channel: e, selectedChannel: t, onClick: s }) {
          var n;
          const i = e.name === (null == t ? void 0 : t.name);
          return (0, S.jsx)("div", {
            className: l()(
              "flex items-center",
              Sa.popupChannelWrapper,
              i && Sa.activeChannel
            ),
            onClick: s,
            children: (0, S.jsxs)("div", {
              className: l()("flex flex-auto items-center", Sa.popupChannel),
              children: [
                (0, S.jsx)("img", {
                  className: Sa.popupChannelImg,
                  src: null != (n = e.icon) ? n : void 0,
                }),
                (0, S.jsx)("div", {
                  className: l()("flex-auto", Sa.popupChannelName),
                  children: e.name,
                }),
                i &&
                  (0, S.jsx)("img", {
                    alt: "icon arrow right",
                    className: Sa.viewMoreIconPopup,
                    src: ya,
                  }),
              ],
            }),
          });
        },
        wa = "u5Ij85",
        ka = function ({ tenure: e, amount: t }) {
          return (0, S.jsxs)("tr", {
            children: [
              (0, S.jsx)("td", { className: "fwuod7", children: e }),
              (0, S.jsx)("td", {
                className: "ED51uK",
                children: null != t ? t : "",
              }),
            ],
          });
        },
        { t: Ea } = N.I18n,
        Pa = function ({
          plan: {
            disabled_reason: e,
            name: t,
            monthly_payment: s,
            totalAmount: n,
            hasBuyerTransactionFee: i,
          },
        }) {
          return (0, S.jsxs)("tr", {
            className: l()("FQtUZP", { [wa]: !!e }),
            children: [
              (0, S.jsxs)("td", {
                className: "o1D7nV",
                children: [
                  (0, S.jsx)("span", { className: "KzKhX4", children: t }),
                  !e && (0, S.jsxs)("span", { children: [(0, pe.JL)(s), " "] }),
                ],
              }),
              (0, S.jsx)("td", {
                className: "mC_csS",
                children:
                  e ||
                  (!1 === i
                    ? (0, S.jsx)("span", {
                        className: "SdkYEL",
                        children: Ea("pdp_label_cci_entry_free_btf_no_fee"),
                      })
                    : "number" == typeof n
                    ? (0, pe.JL)(n)
                    : ""),
              }),
            ],
          });
        };
      function Aa(e, t) {
        return e ? `${t}/static/images/${e}@2x.png` : void 0;
      }
      const La = "qm6QLV",
        Ra = "nHfAeP",
        { t: Da } = N.I18n,
        Ma = function ({ closePopup: e, closePopupButtonRef: t }) {
          const s = (0, F.mX)("disable_price_with_variation"),
            { shopId: n, itemId: a } = (0, F.u4)(),
            {
              isCcInstallmentPaymentWhitelist: r,
              isNonCcInstallmentPaymentWhitelist: o,
            } = (0, H.Sq)(),
            { data: c } = (0, F.Xk)(
              {
                shopId: n,
                itemId: a,
                detailLevel: 0,
                enablePdpRevampInterface: !s,
              },
              [n, a, 0, s]
            ),
            d = (0, F.AJ)(),
            u = s ? c : d,
            h = (0, i.useMemo)(
              () =>
                (function (e, t, s) {
                  const n = [];
                  let i = 0;
                  for (const d of e) {
                    var a, r, o, l;
                    if (d.is_cc && t.cc && null != (a = d.banks) && a.length)
                      for (const e of d.banks) {
                        const t = [];
                        for (const s of e.sub_options)
                          (s.disabled_reason &&
                            "not_reach_min_amount" !== s.disabled_reason_key) ||
                            t.push({
                              tenure: s.data.tenure,
                              duration: s.data.tenure,
                              name: s.data.name,
                              interest_rate: s.data.interest_rate,
                              monthly_payment: s.data.monthly_installment,
                              disabled_reason: (0, p.Z)(
                                s,
                                ["disabled_reason"],
                                ""
                              ),
                            });
                        0 !== t.length &&
                          (n.push({
                            name: e.bank_name,
                            icon:
                              ((c = e.bank_logo),
                              c && c.length > 0
                                ? c.replace(/\.png$/, "@3x.png")
                                : c),
                            plans: t,
                            is_cc: !0,
                            is_single_channel: !1,
                            key: "" + i,
                          }),
                          i++);
                      }
                    else if (
                      d.is_cc &&
                      t.cc &&
                      (null == (r = d.banks) || !r.length) &&
                      null != (o = d.plans) &&
                      o.length
                    ) {
                      const e = [];
                      for (const t of d.plans)
                        (t.disabled_reason &&
                          "not_reach_min_amount" !== t.disabled_reason.key) ||
                          e.push({
                            tenure: t.duration,
                            name: t.plan_name,
                            duration: t.duration,
                            interest_rate: t.interest_rate,
                            monthly_payment: t.monthly_payment,
                            disabled_reason: (0, p.Z)(
                              t,
                              ["disabled_reason", "reason"],
                              ""
                            ),
                            totalAmount: t.total_amount,
                            hasBuyerTransactionFee: t.has_buyer_transaction_fee,
                          });
                      if (0 === e.length) continue;
                      n.push({
                        name: d.channel_name,
                        icon: Aa(d.channel_ic, s),
                        plans: e,
                        is_cc: !0,
                        is_single_channel: !0,
                        key: "" + i,
                      });
                    } else if (
                      !d.is_cc &&
                      t.nonCc &&
                      null != (l = d.plans) &&
                      l.length
                    ) {
                      const e = [];
                      for (const t of d.plans)
                        (t.disabled_reason &&
                          "not_reach_min_amount" !== t.disabled_reason.key) ||
                          e.push({
                            tenure: t.duration,
                            name: t.plan_name,
                            duration: t.duration,
                            interest_rate: t.interest_rate,
                            monthly_payment: t.monthly_payment,
                            disabled_reason: (0, p.Z)(
                              t,
                              ["disabled_reason", "reason"],
                              ""
                            ),
                          });
                      if (0 === e.length) continue;
                      n.push({
                        name: d.channel_name,
                        icon: Aa(d.channel_ic, s),
                        plans: e,
                        is_cc: !1,
                        is_single_channel: !1,
                        key: "" + i,
                      }),
                        i++;
                    }
                  }
                  var c;
                  return n;
                })(u || [], { cc: r, nonCc: o }, N.config.SHOPEE_BASE_URL),
              [u, r, o]
            ),
            [m, _] = (0, i.useState)(null),
            {
              flat: g,
              nonCC: f,
              CC: x,
            } = (function (e) {
              const t = { flat: null, nonCC: [], CC: [] };
              for (const s of e) {
                if (s.is_single_channel) {
                  (t.flat = s), (t.nonCC = []), (t.CC = []);
                  break;
                }
                s.is_cc ? t.CC.push(s) : t.nonCC.push(s);
              }
              return t;
            })(h),
            v = (e) =>
              ((e) => !!e.disabled_reason)(e)
                ? e.disabled_reason
                : 1 === e.duration
                ? (0, pe.JL)(e.monthly_payment)
                : Da("product_page_label_opc_amount_per_month", {
                    amount: (0, pe.JL)(e.monthly_payment),
                  });
          return (
            (0, i.useEffect)(() => {
              h.length && _(h[0]);
            }, [h]),
            (0, S.jsxs)("div", {
              "aria-modal": "true",
              className: l()("card", "R0yvAP", g ? "prk9tO" : null),
              children: [
                (0, S.jsx)("div", {
                  className: "IF6ojx",
                  children: Da("label_installment_simulation"),
                }),
                "SG" === __LOCALE__ &&
                  (0, S.jsxs)("div", {
                    className: "shopee-popup-form__prompt-message",
                    children: [
                      (0, S.jsx)("img", {
                        alt: "icon product notice",
                        className: "M4EZyL",
                        src: Ia,
                      }),
                      (0, S.jsx)("div", {
                        className: "shopee-popup-form__prompt-message-text",
                        children: Da("label_installment_sg_text_info"),
                      }),
                    ],
                  }),
                g
                  ? (0, S.jsx)("table", {
                      className: "SmGBM4",
                      children: g.plans.map((e) =>
                        "BR" === (0, z.Kd)() && "number" == typeof e.totalAmount
                          ? (0, S.jsx)(Pa, { plan: e })
                          : (0, S.jsx)(
                              ka,
                              { tenure: e.name, amount: v(e) },
                              e.duration
                            )
                      ),
                    })
                  : (0, S.jsxs)("div", {
                      className: l()("flex", "j3SBEG"),
                      children: [
                        (0, S.jsxs)("div", {
                          className: l()("flex flex-column", "TGiOM5"),
                          children: [
                            !!f &&
                              !!f.length &&
                              (0, S.jsxs)("div", {
                                className: La,
                                children: [
                                  (0, S.jsx)("div", {
                                    className: Ra,
                                    children: Da(
                                      "label_product_installment_non_credit_card"
                                    ),
                                  }),
                                  f.map((e) =>
                                    (0, S.jsx)(
                                      Ta,
                                      {
                                        channel: e,
                                        selectedChannel: m,
                                        onClick: () => {
                                          _(e);
                                        },
                                      },
                                      `${e.key}-${e.name}`
                                    )
                                  ),
                                ],
                              }),
                            !!x &&
                              !!x.length &&
                              (0, S.jsxs)("div", {
                                className: La,
                                children: [
                                  (0, S.jsx)("div", {
                                    className: Ra,
                                    children: Da(
                                      "label_product_installment_credit_card"
                                    ),
                                  }),
                                  x.map((e) =>
                                    (0, S.jsx)(
                                      Ta,
                                      {
                                        channel: e,
                                        selectedChannel: m,
                                        onClick: () => {
                                          _(e);
                                        },
                                      },
                                      `${e.key}-${e.name}`
                                    )
                                  ),
                                ],
                              }),
                          ],
                        }),
                        (0, S.jsxs)("div", {
                          className: l()(
                            "flex flex-column flex-auto",
                            "VFYEsP"
                          ),
                          children: [
                            (0, S.jsx)("div", {
                              className: Ra,
                              children: Da(
                                "product_page_label_installment_title"
                              ),
                            }),
                            !!m &&
                              !!m.plans &&
                              m.plans.map((e, t) =>
                                (0, S.jsxs)(
                                  "div",
                                  {
                                    className: l()("flex", "hN1SOV"),
                                    children: [
                                      (0, S.jsx)("div", {
                                        className: "flex-auto",
                                        children: Da(
                                          "label_cc_installment_plan",
                                          e
                                        ),
                                      }),
                                      (0, S.jsx)("div", {
                                        className: "jpxGdf",
                                        children: v(e),
                                      }),
                                    ],
                                  },
                                  `${t}-${m.key}-${e.duration}`
                                )
                              ),
                          ],
                        }),
                      ],
                    }),
                (0, S.jsxs)("div", {
                  className: l()("flex", "SSfI1U"),
                  children: [
                    (0, S.jsx)("div", {
                      className: "HjXj5I",
                      children: Da("product_page_installment_legal_regulation"),
                    }),
                    (0, S.jsx)(tt.Sy, {
                      size: "m",
                      onClick: e,
                      ref: t,
                      children: Da("product_page_label_close"),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Oa = s.p + "productdetailspage/ebd06b59952762e9bd80.svg";
      var Za = s(83817);
      const Fa = (0, z.Kd)(),
        { t: Ba } = N.I18n,
        Ha = "InstallmentEntrance",
        Ua = function () {
          const e = In("promotion_info.installment"),
            t = (0, F.VO)(),
            s = (0, me.useTrackImpression)(
              Ha,
              null == t ? void 0 : t.trackingData
            ),
            n = (0, me.useTrackClick)(Ha, null == t ? void 0 : t.trackingData),
            r = (0, ts.oI)(),
            o = (0, i.useRef)(null),
            c = (0, i.useRef)(null),
            [d, u] = (0, i.useState)(!1),
            p = (0, i.useCallback)(() => {
              u(!1);
            }, [u]),
            h = (0, i.useCallback)(
              (e) => {
                27 === e.keyCode && p();
              },
              [p]
            );
          return (
            (0, i.useEffect)(() => {
              var e;
              d && (null == (e = c.current) || e.focus());
            }, [d]),
            (0, i.useEffect)(
              () => (
                document.addEventListener("keyup", h),
                () => {
                  document.removeEventListener("keyup", h);
                }
              ),
              [h]
            ),
            void 0 === r
              ? null
              : (0, S.jsxs)("section", {
                  className: l()("flex", Za.Z.row),
                  ref: s,
                  children: [
                    "TH" === Fa
                      ? (0, S.jsx)("h3", {
                          className: Za.Z.attrLabel,
                          children: Ba("product_page_label_installment_tag"),
                        })
                      : (0, S.jsx)("h2", {
                          className: Za.Z.attrLabel,
                          children: Ba("product_page_label_installment_tag"),
                        }),
                    (0, S.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, S.jsx)(Ke.Z, {
                          isOpen: d,
                          onOverlayClick: p,
                          children: (0, S.jsx)(Ma, {
                            closePopup: p,
                            closePopupButtonRef: c,
                          }),
                        }),
                        (0, S.jsxs)(a().Fragment, {
                          children: [
                            (0, S.jsx)("div", {
                              children: e
                                ? (0, S.jsx)("div", { style: { width: 150 } })
                                : r,
                            }),
                            (0, S.jsxs)("button", {
                              className: l()(
                                "flex items-center",
                                Za.Z.viewMore
                              ),
                              onClick: () => {
                                u(!0), n();
                              },
                              "aria-haspopup": "grid",
                              ref: o,
                              children: [
                                Ba("label_view_plans"),
                                (0, S.jsx)("img", {
                                  alt: "icon arrow right",
                                  className: "WByRAC",
                                  src: Oa,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
          );
        },
        Va = "P1Ozlo",
        { t: Wa } = N.I18n;
      class Qa extends i.Component {
        constructor(e) {
          super(e),
            (this.state = { isPopupActive: !1 }),
            (this.openPopup = this.openPopup.bind(this)),
            (this.closePopup = this.closePopup.bind(this)),
            (this.handleKeyUp = this.handleKeyUp.bind(this)),
            (this.closeButtonRef = i.createRef()),
            (this.openButtonRef = i.createRef());
        }
        componentDidMount() {
          document.addEventListener("keyup", this.handleKeyUp);
        }
        render() {
          const { item: e, brief: t } = this.props,
            { wholesale_tier_list: s = [] } = e;
          if (!t) return null;
          const { isPopupActive: n } = this.state;
          return (0, S.jsxs)("section", {
            className: l()("flex", Za.Z.row),
            children: [
              (0, S.jsx)("h2", {
                className: Za.Z.attrLabel,
                children: Wa("product_page_label_wholesale"),
              }),
              (0, S.jsxs)("div", {
                className: "flex",
                onKeyUp: this.handleKeyUp,
                children: [
                  (0, S.jsx)(Ke.Z, {
                    isOpen: n,
                    children: (0, S.jsxs)("div", {
                      className: l()("card flex flex-column", "rphiJ1"),
                      children: [
                        (0, S.jsx)("div", {
                          className: "U2D2mH",
                          children: Wa("product_page_label_wholesale"),
                        }),
                        (0, S.jsxs)("div", {
                          className: l()("flex", "GbmMWt"),
                          children: [
                            (0, S.jsx)("div", {
                              className: Va,
                              children: Wa("ladd_to_cart_abel_quantity"),
                            }),
                            (0, S.jsx)("div", {
                              className: Va,
                              children: Wa("product_page_label_unit_price"),
                            }),
                            (0, S.jsx)("div", {
                              className: Va,
                              children: Wa("label_wholesale_saving"),
                            }),
                          ],
                        }),
                        s.map((t, s) => {
                          const n = t.price;
                          return (0, S.jsxs)(
                            "div",
                            {
                              className: l()("flex", "YCB1KC"),
                              children: [
                                (0, S.jsx)("div", {
                                  className: "fUtVgS",
                                  children: t.max_count
                                    ? `${t.min_count} - ${t.max_count}`
                                    : `≥ ${t.min_count}`,
                                }),
                                (0, S.jsx)("div", {
                                  className: "_wnmWC",
                                  children:
                                    "number" == typeof n &&
                                    n >= 0 &&
                                    (0, pe.JL)(n),
                                }),
                                (0, S.jsx)("div", {
                                  className: "izNOwG",
                                  children: (0, pe.JL)(e.price - n),
                                }),
                              ],
                            },
                            s
                          );
                        }),
                        (0, S.jsx)("div", {
                          className: l()("flex", "iCq3ef"),
                          children: (0, S.jsx)(tt.Sy, {
                            size: "m",
                            onClick: this.closePopup,
                            ref: this.closeButtonRef,
                            children: Wa("product_page_label_close"),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, S.jsx)("div", { children: t }),
                  (0, S.jsxs)("button", {
                    className: l()("flex items-center", Za.Z.viewMore),
                    onClick: this.openPopup,
                    ref: this.openButtonRef,
                    children: [
                      Wa("product_page_label_view_more"),
                      (0, S.jsx)("img", {
                        alt: "icon arrow right bold",
                        className: "GwcqEE",
                        src: Oa,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        componentWillUnmount() {
          document.removeEventListener("keyup", this.handleKeyUp);
        }
        openPopup() {
          this.setState({ isPopupActive: !0 }, () => {
            var e;
            "function" != typeof this.closeButtonRef &&
              (null == (e = this.closeButtonRef) ||
                null == (e = e.current) ||
                e.focus());
          });
        }
        closePopup() {
          this.setState({ isPopupActive: !1 }, () => {
            this.openButtonRef.current && this.openButtonRef.current.focus();
          });
        }
        handleKeyUp(e) {
          e.keyCode === Ga && this.closePopup();
        }
      }
      const Ga = 27;
      var qa = s(10564),
        Ka = s(76777),
        $a = s(73707),
        Ya = s(23875),
        za = s(62099),
        Xa = s(44385),
        Ja = s(99963);
      const er = /[^\d]/g,
        tr = (0, za.n)("FETCH_PRODUCT_SHIPPING"),
        sr = (e, t, s, n) => {
          var i, a;
          return s && n
            ? null == e ||
              null == (i = e.shipping_info) ||
              null == (i = i[`${t}`]) ||
              null == (i = i.modelLevel) ||
              null == (i = i[`${s}`])
              ? void 0
              : i[
                  (function (e) {
                    return `$${e.state}-$${e.city}`;
                  })(n)
                ]
            : null == e || null == (a = e.shipping_info)
            ? void 0
            : a[`${t}`];
        };
      var nr = s(96234),
        ir = s(67722),
        ar = (function (e) {
          return (
            (e[(e.LOCAL = 0)] = "LOCAL"), (e[(e.OVERSEAS = 1)] = "OVERSEAS"), e
          );
        })(ar || {});
      const rr = ar,
        or = s.p + "productdetailspage/50033c4ae067b1eff0f8.svg",
        lr = s.p + "productdetailspage/08ab06a1aec0c9329f9c.svg",
        cr = s.p + "productdetailspage/b34ae5eb265bde88a506.svg",
        dr = s.p + "productdetailspage/356fb8dbde2cd2a5f3e4.svg",
        ur = s.p + "productdetailspage/1021429e71ea4ec9e928.svg",
        pr = s.p + "productdetailspage/0c9a080f7e2b750c3024.png",
        hr = s.p + "productdetailspage/6f749f864009e558adce.svg",
        { t: mr } = N.I18n;
      function _r() {
        const {
            sectionLabel: e,
            description: t,
            iconComponentNoText: s,
          } = ((e) => {
            const t = {
              iconComponentNoText: lr,
              iconComponent: hr,
              sectionLabel: "label_product_fbs_section",
              description: "label_product_fbs_popup_desc",
            };
            let s = { iconComponent: t.iconComponent };
            switch (e) {
              case "TW":
                s = { iconComponent: dr };
                break;
              case "ID":
                s = { iconComponent: or };
                break;
              case "VN":
                s = { iconComponent: ur };
                break;
              case "TH":
                s = { iconComponent: cr };
                break;
              case "MX":
                "es-MX" === (0, z.of)() && (s = { iconComponent: pr });
            }
            return (0, n.Z)({}, t, s);
          })(__LOCALE__),
          i = (0, F.l2)(),
          a = mr(t).replace(/\\n/g, "\n"),
          r = (0, me.useTrackImpression)("FulfilledByShopee");
        return i
          ? null
          : (0, S.jsxs)("div", {
              className: "y5xqvT",
              ref: r,
              children: [
                (0, S.jsx)("img", { alt: "icon service by shopee", src: s }),
                (0, S.jsx)("div", { className: "iDZfa6", children: mr(e) }),
                (0, S.jsx)(yt, { content: a }),
              ],
            });
      }
      const gr = s.p + "productdetailspage/865c60ac23a9293f3820.svg",
        fr = s.p + "productdetailspage/f7a03ffb073684317796.svg",
        xr = s.p + "productdetailspage/5bc4a359e1705af2187c.svg",
        { t: vr } = N.I18n;
      function Cr() {
        const e = (0, u.useSelector)((e) => (0, v.H_)(e)),
          t = (0, u.useSelector)((e) => (0, v.py)(e));
        return (0, S.jsxs)("div", {
          className: "Y04pHP",
          children: [
            (0, S.jsx)("img", {
              alt: "icon same day delivery",
              className: "HICLAp",
              src: e ? fr : t ? xr : gr,
            }),
            (0, S.jsx)("div", {
              className: "w2GEso",
              children: vr("label_same_day_delivery"),
            }),
            (0, S.jsx)(yt, {
              content: vr("label_same_day_delivery_popup_desc"),
            }),
          ],
        });
      }
      var jr = s(41884),
        br = s(52097),
        Nr = s(87438);
      const { useSlaMessagePopupToggle: Ir, useShouldShowSlaMessagePopup: yr } =
          (0, Nr.J)("slaMessagePopup"),
        Sr = (0, A.atom)(null),
        { t: Tr } = N.I18n,
        wr = (0, z.Kd)(),
        kr = (0, z.of)(),
        { formatServerCurrency: Er } = (0, bn.getUtilsByCountry)(wr, kr);
      function Pr({
        isFreeShipping: e,
        isItemEligible: t,
        minSpend: s,
        discount: n,
        className: i,
      }) {
        const a = (0, F.mX)("display_direct_delivery"),
          r = `<span class="${a ? "pcCHFm" : "PJ8nk6"}">${Tr(
            "pdp_coloured_free_shipping"
          )}</span>`,
          o = (e) =>
            e
              ? `<span class="${a ? "gHwVSs" : "ZyfAXa"}">${Er(e)} ${Tr(
                  "pdp_coloured_discount_off"
                )}</span>`
              : "";
        let c = "";
        return (
          (c = e
            ? t
              ? Tr("free_shipping_info_message_above_mbs", { freeShipping: r })
              : Tr("free_shipping_info_message_below_mbs", {
                  minSpend: Er(s),
                  freeShipping: r,
                })
            : t
            ? Tr("shipping_promotion_message_above_mbs", { discountOff: o(n) })
            : Tr("shipping_promotion_message_below_mbs", {
                minSpend: Er(s),
                discountOff: o(n),
              })),
          (0, S.jsx)("div", {
            className: l()("YyI58r", i),
            dangerouslySetInnerHTML: { __html: c },
          })
        );
      }
      function Ar({ text: e, compensation_amount: t, gdt_max: s }) {
        const i = (0, $e.xR)(e, {
          compensation_amount: t ? (0, n.Z)({}, t, { type: "is_price" }) : "",
          gdt_max: s ? (0, n.Z)({}, s, { type: "is_delivery_date" }) : "",
        });
        return (0, S.jsx)("div", { className: "eGhnds", children: i });
      }
      const Lr = s.p + "productdetailspage/5d961234f54d5dac21f9.svg",
        Rr = function ({ className: e, displayText: t, withIcon: s }) {
          var n;
          const {
              direct_delivery: i,
              fulfilled_by_shopee: a,
              spx_instant_delivery: r,
            } = null != t ? t : {},
            { cutoff: o, get_by: c } =
              (null != (n = null != a ? a : i) ? n : r) || {},
            { fbs_highlight: d } = a || {},
            u = !!o,
            p = !!c,
            h = !(null == d || !d.text);
          return u || p || h
            ? (0, S.jsxs)("div", {
                className: l()("N16O65", e),
                children: [
                  !!s &&
                    (0, S.jsx)("img", {
                      alt: "direct delivery icon",
                      className: "Vlxb9h",
                      src: Lr,
                    }),
                  p && (0, S.jsx)("span", { className: "DOBmp8", children: c }),
                  u && o,
                  h && d.text,
                ],
              })
            : null;
        },
        Dr = ({ description: e, className: t }) => {
          const s = (0, F.mX)("is_support_fbs_enabled");
          return e && s
            ? (0, S.jsx)("div", { className: l()("Og3sXY", t), children: e })
            : null;
        };
      var Mr = s(41695);
      const Or = s.p + "productdetailspage/5d961234f54d5dac21f9.svg",
        Zr = s.p + "productdetailspage/6b56a09bbc0bcca75e85.svg",
        Fr = "sR9o6f",
        Br = "wsxv7E",
        Hr = "aR9EZZ",
        Ur = "Dd0TwN",
        Vr = "zIiPHv",
        Wr = (0, z.of)(),
        Qr = ({ channelName: e, channelDeliveryInfo: t }) => {
          const s = (0, F.Fx)(),
            { showSlaMessagePopup: i } = Ir(),
            a = (0, A.useSetAtom)(Sr),
            r = t.formatted_edt_text,
            o = s && !!t.sla_message,
            c = () => {
              var s;
              a({ title: e, content: null != (s = t.sla_message) ? s : "" }),
                i();
            };
          return null != r && r.length
            ? (0, S.jsx)("div", {
                className: "sDckcI",
                children: r.map((e, t) => {
                  const s = (0, Mr.i)(e);
                  return s
                    ? (0, S.jsxs)(
                        "div",
                        {
                          className: l()(Fr, "S_CJtm"),
                          children: [
                            s.map((e, t) =>
                              (0, S.jsxs)(
                                "div",
                                {
                                  className: Fr,
                                  children: [
                                    e.highlightGreenTruck &&
                                      (0, S.jsx)("img", {
                                        alt: "green truck icon",
                                        className: "mtA27y",
                                        src: Or,
                                      }),
                                    e.highlightFieryGreenTruck &&
                                      (0, S.jsx)("img", {
                                        alt: "fiery truck icon",
                                        className: l()("ame7oZ", {
                                          [Hr]: "th" === Wr,
                                          [Ur]:
                                            "zh-Hans" === Wr ||
                                            "zh-Hant" === Wr,
                                        }),
                                        src: Zr,
                                      }),
                                    (0, S.jsx)("div", {
                                      className: l()(Fr, {
                                        [Br]: e.highlightFieryGreenTruck,
                                      }),
                                      children: (0, S.jsx)(
                                        "span",
                                        {
                                          style: (0, n.Z)(
                                            {},
                                            e.bold ? { fontWeight: 500 } : {},
                                            e.textColor
                                              ? { color: e.textColor }
                                              : {}
                                          ),
                                          className: l()("dWlkkl", {
                                            [Vr]: e.highlightGreenTruck,
                                            [Br]: e.highlightFieryGreenTruck,
                                            [Hr]: "th" === Wr,
                                            [Ur]:
                                              "zh-Hans" === Wr ||
                                              "zh-Hant" === Wr,
                                          }),
                                          children: e.content,
                                        },
                                        t
                                      ),
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                            0 === t &&
                              o &&
                              (0, S.jsx)("img", {
                                onClick: c,
                                alt: "icon help",
                                className: "HicEfk",
                                src: bt,
                              }),
                          ],
                        },
                        t
                      )
                    : null;
                }),
              })
            : null;
        },
        Gr = "apWeov",
        qr = "LbaCtO",
        Kr = "J3_XgW";
      var $r = s(80413),
        Yr = s(76802),
        zr = s(99618),
        Xr = s(73001);
      const { post: Jr } = N.FetchUtils;
      let eo = null;
      const to = async (e) => {
        const [, , t, s] = e.queryKey;
        try {
          const e = (function (e) {
              const t = [...(e || [])];
              if (null == t.find((e) => "platform" === e.name)) {
                const e = io[zr.t4] || 32;
                t.push({
                  name: "platform",
                  value_type: "INT",
                  value: String(e),
                });
              }
              return t;
            })(s),
            { error: i, data: a } = await (async function (e) {
              eo ||
                (eo = Xr.ABTest.init({
                  country: (0, z.Kd)(),
                  bizName: "marketplace",
                  isWsa: !0,
                }));
              try {
                var t;
                const s = await eo.fetchInc(
                  [e.scene_key],
                  (0, z.Kd)(),
                  e.filter_data,
                  async (e, t) => await Jr(e, t)
                );
                if (
                  (null == s || null == (t = s.data) ? void 0 : t.length) > 0
                ) {
                  const e = {},
                    t = {};
                  for (const n of s.data) {
                    for (const t of n.experiments) e[t.exp_name] = t;
                    for (const e of n.feature_map || [])
                      t[e.feature_key] = e.feature_value;
                  }
                  return (0, n.Z)({}, s, {
                    data: { experiments: e, features: t },
                  });
                }
                return (0, n.Z)({}, s, { data: null });
              } catch (i) {
                var s;
                return {
                  error: i,
                  error_msg:
                    null != (s = null == i ? void 0 : i.error_msg)
                      ? s
                      : null == i
                      ? void 0
                      : i.message,
                  data: null,
                };
              }
            })({ scene_key: t, filter_data: e });
          if (i || !a) throw new Error("failed to load scene");
          return {
            experiments: (0, n.Z)({}, a.experiments || {}),
            features: (0, n.Z)({}, a.features || {}),
          };
        } catch (i) {
          return null;
        }
      };
      function so(e, t) {
        return ["platform", "abtest", e, t];
      }
      function no(e, t) {
        return e.name > t.name
          ? 1
          : e.name < t.name
          ? -1
          : e.value_type > t.value_type
          ? 1
          : e.value_type < t.value_type
          ? -1
          : e.value > t.value
          ? 1
          : e.value < t.value
          ? -1
          : 0;
      }
      const io = {
        [zr.iw.ANDROID_APP]: 1,
        [zr.iw.IOS_APP]: 2,
        [zr.iw.ANDROID_WEB]: 4,
        [zr.iw.IOS_WEB]: 8,
        [zr.iw.PC_MALL]: 16,
        [zr.iw.ANDROID_LITE]: 32,
        [zr.iw.IOS_LITE]: 32,
        [zr.iw.OTHERS]: 32,
      };
      function ao(e, t, s, n) {
        const { experiments: a, progress: r } = (function (e, t, s) {
          const n = (0, i.useMemo)(
              () =>
                (function (e) {
                  if (e) return e.slice().sort(no);
                })(t),
              [t]
            ),
            a = !!(0, i.useContext)(N.State.HostReactQueryContext);
          try {
            const { data: t, isLoading: i } = (0, Yr.a)(
              (function (e, t, s = !1) {
                return {
                  queryKey: so(e, t),
                  queryFn: to,
                  context: N.State.HostReactQueryContext,
                  suspense: s,
                };
              })(e, n, s)
            );
            if (i) return { progress: $r.ad.REQ };
            if (!t) return { progress: $r.ad.ERR };
            const { experiments: a, features: r } = t;
            return { experiments: a, features: r, progress: $r.ad.OK };
          } catch (r) {
            if (!a) return { progress: $r.ad.INIT };
            throw r;
          }
        })(e, s, n);
        return [a && a[t] ? a[t] : void 0, r];
      }
      const ro = () => {
          const [e] = ao("PROMOTION_VOUCHER", "FE_SHOPEE_SUBSCRIPTION_PHASE3");
          return "treatment" === (null == e ? void 0 : e.parameter);
        },
        oo = s.p + "productdetailspage/ec444a59aef5817397f2.svg",
        lo = s.p + "productdetailspage/25af0ec4ab6b5ade437f.svg",
        co = s.p + "productdetailspage/50b6578b85376c97732a.svg",
        { t: uo } = N.I18n;
      function po({ channelInfo: e, className: t, customStyles: s = {} }) {
        var i, a, r, o, c, d;
        const u = (0, F.mX)("display_direct_delivery"),
          p = (0, F.mX)("is_support_fbs_enabled"),
          h = (0, F.Fx)(),
          { showSlaMessagePopup: m } = Ir(),
          _ = (0, A.useSetAtom)(Sr),
          g = h && !!e.channel_delivery_info.sla_message,
          f = h && !!e.channel_delivery_info.is_fastest_edt_channel,
          {
            direct_delivery: x,
            fulfilled_by_shopee: v,
            spx_instant_delivery: C,
          } = null != (i = e.display_text) ? i : {},
          j = !(!u || !x),
          b = !(!p || null == v || !v.get_by),
          N = !!C,
          I = (0, br.generateChannelPriceInfo)({ channelInfo: e, t: uo }),
          y = e.channel_promotion_infos || [],
          T = y.reduce(
            (e, t) =>
              e +
              ((0, br.generatePromotionInfo)({
                channelPromotionInfo: t,
                t: uo,
              }) || ""),
            ""
          ),
          w =
            e.warning &&
            (0, br.generateChannelWarningLabel)(
              (0, n.Z)({}, e.warning, { t: uo })
            ),
          k =
            null == e || null == (a = e.display_text)
              ? void 0
              : a.late_delivery_compensation,
          E = e.channel_delivery_info,
          P = (0, br.generateEDT)({
            t: uo,
            displayText: null != (r = e.display_text) ? r : {},
            channelDeliveryInfo: E,
            is_guaranteed_edt: !(
              null == (o = e.late_delivery_compensation) || !o.is_guaranteed_edt
            ),
          }),
          L = E ? E.delay_message : null,
          R = !(P || y.length || L),
          D = (0, V.isFeatureEnabled)(W.vk),
          M = e.rule_type,
          O = !(null == (c = E.formatted_edt_text) || !c.length),
          Z = ro();
        return (0, S.jsxs)("div", {
          className: l()(
            "SFi5Vg",
            s.section,
            t,
            s.noExtraInfo ? { [s.noExtraInfo]: R } : null,
            { [Gr]: h }
          ),
          children: [
            (0, S.jsxs)("div", {
              className: l()("n9FCgW", s.channelNameAndCost),
              children: [
                (0, S.jsx)("div", {
                  className: l()("Xf1wi6", s.channelName),
                  children: e.name,
                }),
                (0, S.jsxs)("div", {
                  className: "BtxWDu",
                  children: [
                    e.show_shopee_plus_icon
                      ? Z
                        ? (0, S.jsx)("img", {
                            alt: "shopee plus icon",
                            className: "pVEN7l",
                            src: lo,
                          })
                        : (0, S.jsx)("img", {
                            alt: "shopee plus icon",
                            className: "sdQCLA",
                            src: co,
                          })
                      : M === br.SHIPPING_PROMO_RULE_TYPE.NON_FSV_PLUS
                      ? (0, S.jsx)("img", {
                          alt: "Non FSV Shopping Plus",
                          className: "HhRCys",
                          src: oo,
                        })
                      : null,
                    (0, S.jsx)("div", {
                      className: l()("DbbHsV", s.channelCost),
                      children:
                        w ||
                        (0, S.jsxs)("div", {
                          className: "tAmf62",
                          children: [
                            !!I &&
                              !!I.originalPrice &&
                              (0, S.jsx)("div", {
                                className: "N1S9ia",
                                children: I.originalPrice,
                              }),
                            !!I &&
                              !!I.discountedPrice &&
                              (0, S.jsx)("div", {
                                className: l()("kVeRiB"),
                                children: I.discountedPrice,
                              }),
                          ],
                        }),
                    }),
                  ],
                }),
              ],
            }),
            !w &&
              (0, S.jsxs)(S.Fragment, {
                children: [
                  (0, S.jsxs)("div", {
                    className: Kr,
                    children: [
                      j || b || N
                        ? (0, S.jsx)(Rr, {
                            className: "MLOeJU",
                            withIcon: !0,
                            displayText: e.display_text,
                          })
                        : O
                        ? (0, S.jsx)(Qr, {
                            channelName: e.name,
                            channelDeliveryInfo: E,
                          })
                        : P &&
                          (0, S.jsxs)("div", {
                            className: Kr,
                            children: [
                              f &&
                                (0, S.jsx)("img", {
                                  alt: "fast delivery icon",
                                  className: "J1fUNz",
                                  src: Or,
                                }),
                              (0, S.jsx)("div", {
                                className: l()("dl9jlo", s.deliveryTime, {
                                  [qr]: f,
                                }),
                                children: P,
                              }),
                            ],
                          }),
                      g &&
                        !O &&
                        (0, S.jsx)("img", {
                          onClick: () => {
                            var t;
                            _({
                              title: e.name,
                              content: null != (t = E.sla_message) ? t : "",
                            }),
                              m();
                          },
                          alt: "icon help",
                          className: "zelV5S",
                          src: bt,
                        }),
                    ],
                  }),
                  k && (0, S.jsx)(Ar, (0, n.Z)({}, k)),
                  (!D || !e.lowest_bpsf_promotion_rule) &&
                    T.length > 0 &&
                    (0, S.jsx)("div", {
                      className: l()("VJJeDm", s.promotionText),
                      dangerouslySetInnerHTML: { __html: T },
                    }),
                  D &&
                    e.lowest_bpsf_promotion_rule &&
                    (0, S.jsx)(Pr, {
                      isFreeShipping:
                        e.lowest_bpsf_promotion_rule.is_free_shipping,
                      isItemEligible:
                        e.lowest_bpsf_promotion_rule.is_item_eligible,
                      minSpend: e.lowest_bpsf_promotion_rule.min_spend,
                      discount: e.lowest_bpsf_promotion_rule.discount_value,
                      className: "WMvnW3",
                    }),
                  L &&
                    (0, S.jsx)("div", {
                      className: l()("YULpJb", s.shippingReminder),
                      children: L,
                    }),
                  (0, S.jsx)(Dr, {
                    className: "i413pm",
                    description:
                      null == (d = e.display_text) ||
                      null == (d = d.fulfilled_by_shopee) ||
                      null == (d = d.fbs_highlight)
                        ? void 0
                        : d.description,
                  }),
                ],
              }),
          ],
        });
      }
      const ho = "diWK2j",
        mo = "YJ9JEB",
        _o = ({ channelInfos: e, name: t }) => {
          const s = (0, F.Fx)();
          return (0, S.jsxs)("div", {
            className: l()("q5KiF7", { [ho]: s }),
            children: [
              t
                ? (0, S.jsx)("div", {
                    className: l()("hLl9Yz", { [ho]: s }),
                    children: t,
                  })
                : !s && (0, S.jsx)("div", { className: "CrBlKL" }),
              (0, S.jsx)("div", {
                className: l()("Ej6Io5", { [ho]: s, [mo]: s && !!t }),
                children: e.map((e, t) =>
                  (0, S.jsx)(po, { className: "wykjJM", channelInfo: e }, t)
                ),
              }),
            ],
          });
        },
        { t: go } = N.I18n,
        fo = () => {
          const e = yr(),
            { hideSlaMessagePopup: t } = Ir(),
            s = (0, A.useAtomValue)(Sr);
          return s
            ? (0, S.jsx)(Ke.Z, {
                isOpen: e,
                onOverlayClick: t,
                children: (0, S.jsxs)("div", {
                  className: "dsgr0q",
                  children: [
                    (0, S.jsx)("div", {
                      className: "w6NXMl",
                      children: s.title,
                    }),
                    (0, S.jsx)("div", {
                      className: "vK_Uq5",
                      dangerouslySetInnerHTML: { __html: s.content },
                    }),
                    (0, S.jsx)("div", {
                      className: "FDVCY_",
                      children: (0, S.jsx)(tt.nQ, {
                        className: "Cp6IwQ",
                        onClick: t,
                        children: go("label_ok"),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        },
        xo = ({ productShipping: e }) => {
          if (!e) return null;
          const t = e.ungrouped_channel_infos || [],
            s = e.grouped_channel_infos_by_service_type || [];
          return (0, S.jsxs)(S.Fragment, {
            children: [
              t.map((e) => (0, S.jsx)(po, { channelInfo: e }, e.name)),
              s.map((e) =>
                (0, S.jsx)(
                  _o,
                  { name: e.name, channelInfos: e.channel_infos },
                  e.name
                )
              ),
              (0, S.jsx)(fo, {}),
            ],
          });
        },
        vo = s.p + "productdetailspage/37a10f4c1974a005dfc3.svg",
        Co = s.p + "productdetailspage/7a8655a55f537cddd9c9.svg",
        jo = s.p + "productdetailspage/479254654c21c8686e83.svg",
        bo = () => {
          let e, t;
          return (
            "MY" === (0, z.Kd)() ? ((e = Co), (t = jo)) : ((e = vo), (t = vo)),
            {
              IconSection: e,
              IconDescription: t,
              labelSection: "label_product_s_mart_section",
              labelDescription: "label_product_s_mart_popup_desc",
            }
          );
        },
        { IconSection: No, labelSection: Io, labelDescription: yo } = bo(),
        So = ({ isSbs: e }) =>
          (0, S.jsxs)("div", {
            className: l()("flex", "items-center", "Rt_jnJ"),
            children: [
              No &&
                (0, S.jsx)("img", { alt: "shopee supermarket icon", src: No }),
              (0, S.jsxs)("div", {
                className: "ai5kXA",
                children: [
                  e &&
                    (0, S.jsx)("div", {
                      className: "DkMKTu",
                      children: (0, N.t)(Io),
                    }),
                  (0, S.jsx)("div", {
                    className: "Vjww5c",
                    children: (0, S.jsx)(zs.ve, {
                      content: (0, S.jsx)("img", {
                        alt: "icon help",
                        className: "jZUECu",
                        src: bt,
                      }),
                      showContent: (0, S.jsx)("div", {
                        className: "RC844M",
                        dangerouslySetInnerHTML: { __html: (0, N.t)(yo) },
                      }),
                      showPosition: "center",
                    }),
                  }),
                ],
              }),
            ],
          }),
        { IconSection: To, labelSection: wo, labelDescription: ko } = bo(),
        Eo = () =>
          (0, S.jsxs)("div", {
            className: l()("flex", "items-center", "Z9LFVl"),
            children: [
              To &&
                (0, S.jsx)("img", { alt: "next day delivery icon", src: To }),
              (0, S.jsxs)("div", {
                className: "uvxHv_",
                children: [
                  (0, N.t)(wo),
                  (0, S.jsx)("div", {
                    className: "fhEmmk",
                    children: (0, S.jsx)(zs.ve, {
                      content: (0, S.jsx)("img", {
                        alt: "icon help",
                        className: "N2y_MC",
                        src: bt,
                      }),
                      showContent: (0, S.jsx)("div", {
                        className: "MJLyzU",
                        dangerouslySetInnerHTML: { __html: (0, N.t)(ko) },
                      }),
                      showPosition: "center",
                    }),
                  }),
                ],
              }),
            ],
          }),
        Po = "nVIOok",
        Ao = ({ isSbs: e }) => {
          switch ((0, z.Kd)()) {
            case "TW":
              return e
                ? (0, S.jsx)("div", {
                    className: Po,
                    children: (0, S.jsx)(_r, {}),
                  })
                : null;
            case "MY":
              return ((e) => {
                const t = (0, V.isFeatureEnabled)(W.DN);
                return e || t
                  ? (0, S.jsxs)("div", {
                      className: Po,
                      children: [
                        e && (0, S.jsx)(_r, {}),
                        t && (0, S.jsx)(Eo, {}),
                      ],
                    })
                  : null;
              })(e);
            default:
              return ((e) => (0, S.jsx)(So, { isSbs: e }))(e);
          }
        };
      var Lo = s(59717);
      const Ro = s.p + "productdetailspage/1ec3da0ee6e4e55a7f8e.svg",
        Do = s.p + "productdetailspage/d7faad367390cb8aefbf.svg",
        Mo = s.p + "productdetailspage/120a65ca0c93157d79cc.svg",
        Oo = s.p + "productdetailspage/74f3e9ac01da8565c3ba.png",
        Zo = s.p + "productdetailspage/4d919756d008be859bb3.png",
        Fo = s.p + "productdetailspage/cc790453b240bafe0da1.png",
        Bo = s.p + "productdetailspage/2e16271e2c4f5df7d0f9.png",
        Ho = s.p + "productdetailspage/b92e0db60006f9aed479.png",
        Uo = s.p + "productdetailspage/a27c96ebdc013c7e860f.png",
        Vo = s.p + "productdetailspage/a27c96ebdc013c7e860f.png",
        Wo = s.p + "productdetailspage/701228729dde28f1acb8.png",
        Qo = s.p + "productdetailspage/48a9c6cc34f3ade7c869.png",
        Go = s.p + "productdetailspage/b0e5416569835c95912b.png",
        qo = s.p + "productdetailspage/1a189b90fbf745790861.png",
        Ko = s.p + "productdetailspage/66fe5f58a05cfb8434ee.png",
        $o = s.p + "productdetailspage/ae775e03e1958c5d52e9.png",
        Yo = "Zg6PS1",
        zo = "ZUOl2C",
        { Provider: Xo, Consumer: Jo } = i.createContext({});
      function el(e) {
        return function (t) {
          return (0, S.jsx)(Jo, {
            children: ({ keep: s, doms: i, saveDoms: a }) =>
              (0, S.jsx)(e, (0, n.Z)({}, t, { keep: s, doms: i, saveDoms: a })),
          });
        };
      }
      class tl extends i.PureComponent {
        constructor(e) {
          super(e),
            (this.nodes = {}),
            (this.keep = (e, t) =>
              new Promise((s) => {
                this.setState(
                  {
                    doms: (0, n.Z)({}, this.state.doms, {
                      [e]: { id: e, children: t },
                    }),
                  },
                  () => s(this.nodes[e])
                );
              })),
            (this.saveDoms = (e, t) => {
              this.nodes[e] = t;
            }),
            (this.renderNodesContainer = (e) =>
              (0, S.jsx)("div", {
                style: { display: "none" },
                children:
                  Object.values(e).length > 0 &&
                  Object.values(e).map(({ id: e, children: t }) =>
                    (0, S.jsx)(
                      "div",
                      { ref: (t) => (this.nodes[e] = t), children: t },
                      e
                    )
                  ),
              })),
            (this.state = {
              doms: {},
              keep: this.keep,
              saveDoms: this.saveDoms,
            });
        }
        render() {
          const { children: e, isUseStation: t } = this.props,
            { doms: s } = this.state;
          return (0, S.jsxs)(Xo, {
            value: this.state,
            children: [e, t ? null : this.renderNodesContainer(s)],
          });
        }
      }
      class sl extends i.PureComponent {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.init = async function ({ keep: e, id: s, children: n }) {
              if (e && s && n) {
                var i;
                const a = await e(s, n);
                t.wrapper &&
                  a &&
                  (null == (i = t.wrapper.current) || i.appendChild(a));
              }
            }),
            (this.wrapper = i.createRef());
        }
        componentDidMount() {
          this.init(this.props);
        }
        render() {
          return (0, S.jsx)("div", { ref: this.wrapper });
        }
      }
      const nl = el(sl);
      class il extends i.PureComponent {
        render() {
          const { doms: e, saveDoms: t, ids: s } = this.props;
          return (0, S.jsx)("div", {
            style: { display: "none", pointerEvents: "none" },
            children: s.map((s) =>
              (0, S.jsx)(
                "div",
                {
                  ref: (e) => {
                    e && t && t(s, e);
                  },
                  children: e && e[s] ? e[s].children : null,
                },
                s
              )
            ),
          });
        }
      }
      const al = el(il),
        rl = s.p + "productdetailspage/1faa5b34c2c29d720195.svg",
        ol = (0, z.Kd)(),
        ll = nr.SHIPPING_FEE_ADDRESS_MAX_LEVEL[ol],
        cl = "IE8riR",
        { t: dl } = N.I18n,
        ul = function ({ open: e, onOpen: t, addressType: s, address: n }) {
          const a = (0, i.useMemo)(
              () =>
                ((e) => {
                  if (!e) return "";
                  let t = `${e.city}, ${e.state}`,
                    s = "";
                  const n = ["MX", "BR"].includes(ol);
                  var i;
                  return (
                    e.zipcode &&
                      n &&
                      ((s =
                        null == (i = e.zipcode)
                          ? void 0
                          : i.replace(/[^\d]/g, "")),
                      "BR" === ol &&
                        8 === s.length &&
                        (s = s.substring(0, 5) + "-" + s.substring(5, 8))),
                    ll >= 3 &&
                      (t = `${e.district ? e.district + "," : ""} ${e.city}`),
                    "ID" === ol && (t = `${e.city}`),
                    `${s}${s && t ? ", " : ""}${t}`
                  );
                })(n),
              [n]
            ),
            r = (0, F.Fx)();
          return (0, S.jsxs)("div", {
            className: "flex items-center",
            children: [
              1 === s
                ? (0, S.jsx)("div", {
                    className: "PddMlc",
                    children: dl("label_to"),
                  })
                : null,
              (0, S.jsx)("div", {
                className: "my0ZcO",
                children: (0, S.jsxs)("button", {
                  className: "flex items-center",
                  onClick: t,
                  children: [
                    (0, S.jsx)("span", { className: "awxJLd", children: a }),
                    (0, S.jsx)("img", {
                      alt: "icon arrow down",
                      className: l()("RhLDj0", { [cl]: e }),
                      src: r ? rl : Mo,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        pl = (0, L.Z)({
          loader: () =>
            Promise.all([s.e(4015), s.e(8956)]).then(s.bind(s, 39140)),
        }),
        hl = (0, L.Z)({
          loader: () =>
            Promise.all([s.e(2297), s.e(4015), s.e(6724)]).then(s.bind(s, 585)),
        }),
        ml = (0, L.Z)({ loader: () => s.e(4649).then(s.bind(s, 79972)) });
      function _l({
        address: e,
        addressType: t,
        onAddressSelected: s,
        trackingData: n,
        className: a,
      }) {
        const r = (0, V.isFeatureEnabled)(W.QD),
          o = (0, V.isFeatureEnabled)(W.kM),
          [l, c] = (0, i.useState)(!1),
          d = (0, i.useCallback)(() => c(!0), []),
          u = (0, i.useCallback)(() => c(!1), []),
          p = (0, i.useCallback)(
            (e) => {
              s(e), c(!1);
            },
            [s]
          );
        return (0, S.jsxs)(S.Fragment, {
          children: [
            !o && l && (0, S.jsx)("div", { className: "Jzfbds", onClick: u }),
            (0, S.jsxs)("div", {
              className: "QjxyrX",
              children: [
                (0, S.jsx)(ul, {
                  open: l,
                  onOpen: d,
                  address: e,
                  addressType: t,
                }),
                r
                  ? (0, S.jsx)(ml, {
                      className: a,
                      open: l,
                      onAddressSelected: p,
                      trackingData: n,
                    })
                  : o
                  ? (0, S.jsx)(hl, {
                      open: l,
                      onAddressSelected: p,
                      onClose: u,
                    })
                  : (0, S.jsx)(pl, {
                      open: l,
                      className: a,
                      onAddressSelected: p,
                    }),
              ],
            }),
          ],
        });
      }
      const gl = { container: "LUAQqJ", priceBeforeDiscount: "YRa9CH" },
        fl = (0, z.Kd)(),
        xl = (0, z.of)(),
        { formatServerCurrency: vl } = (0, bn.getUtilsByCountry)(fl, xl);
      function Cl({ priceBeforeDiscount: e, price: t }) {
        const s = t === e;
        return (0, S.jsxs)("div", {
          className: gl.container,
          children: [
            !s &&
              (0, S.jsx)("div", {
                className: gl.priceBeforeDiscount,
                children: void 0 !== e ? vl(e) : "",
              }),
            (0, S.jsx)("div", {
              className: gl.price,
              children: void 0 !== t ? vl(t) : "",
            }),
          ],
        });
      }
      const { t: jl } = N.I18n;
      function bl({ shippingIconType: e }) {
        return (0, F.mX)("display_direct_delivery") || (1 !== e && 3 !== e)
          ? null
          : (0, S.jsx)("div", {
              className: "AGvOhq",
              children: jl("pdp_item_international_shipping"),
            });
      }
      function Nl() {
        return (0, S.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, S.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.16669 3.33331C0.890545 3.33331 0.666687 3.55717 0.666687 3.83331V11.5C0.666687 11.7761 0.890545 12 1.16669 12H2.7933C2.85752 12.8841 3.59497 13.5823 4.4966 13.5823C5.39824 13.5823 6.13568 12.8841 6.1999 12H9.66669L9.66936 12H10.5752C10.6395 12.8843 11.3778 13.5823 12.2785 13.5823C13.1801 13.5823 13.9176 12.8841 13.9818 12H15.1307C15.2947 12 15.4483 11.9196 15.5417 11.7848C15.6351 11.65 15.6565 11.478 15.5989 11.3245L13.4538 5.60224C13.3806 5.40706 13.1941 5.27775 12.9856 5.27775H10.1667V3.83331C10.1667 3.55717 9.94283 3.33331 9.66669 3.33331H1.16669ZM13.7458 11H14.4093L12.6391 6.27775H10.1667V11H10.8114C11.1096 10.501 11.6552 10.1666 12.2785 10.1666C12.9024 10.1666 13.4478 10.501 13.7458 11ZM4.4966 10.1666C3.87265 10.1666 3.32733 10.501 3.02933 11H1.66669V4.33331H9.16669V11H5.96387C5.66587 10.501 5.12055 10.1666 4.4966 10.1666ZM4.4966 11.1666C4.10542 11.1666 3.78876 11.4837 3.78876 11.8745C3.78876 12.2653 4.10542 12.5823 4.4966 12.5823C4.88778 12.5823 5.20444 12.2653 5.20444 11.8745C5.20444 11.4837 4.88778 11.1666 4.4966 11.1666ZM11.5707 11.8745C11.5707 11.4839 11.8879 11.1666 12.2785 11.1666C12.6697 11.1666 12.9863 11.4837 12.9863 11.8745C12.9863 12.2653 12.6697 12.5823 12.2785 12.5823C11.8879 12.5823 11.5707 12.2651 11.5707 11.8745Z",
            fill: "#26AA99",
          }),
        });
      }
      function Il() {
        return (0, S.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, S.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.3518 3.22207C13.4344 2.65334 14.772 3.00501 15.4349 4.03261C15.9503 4.83164 15.6353 5.90203 14.7692 6.29442L10.9359 8.03112L8.52715 12.4184C8.48566 12.494 8.42534 12.5575 8.35204 12.6029L6.48537 13.7585C6.30592 13.8696 6.07603 13.856 5.91087 13.7246C5.74572 13.5932 5.68087 13.3722 5.74881 13.1724L6.8872 9.82417L2.08387 12.0142C1.92909 12.0848 1.74906 12.0718 1.60599 11.9798C1.46292 11.8878 1.37644 11.7293 1.37644 11.5592V9.94813L0.143109 8.30369C-0.0168142 8.09046 0.0186418 7.78926 0.223709 7.619L1.19168 6.8153C1.39038 6.65033 1.68202 6.66382 1.86464 6.84644L3.02774 8.00955L4.26811 7.36455L2.34124 5.71295C2.21406 5.60394 2.14992 5.43848 2.17038 5.27223C2.19085 5.10598 2.29321 4.96102 2.44303 4.88611L4.22081 3.99722C4.3813 3.91698 4.57247 3.92888 4.72177 4.02841L7.40806 5.81927L12.3518 3.22207ZM14.5946 4.57469C14.2124 3.98218 13.4411 3.77941 12.8169 4.10734L7.61029 6.84262C7.44827 6.92774 7.25268 6.91754 7.1004 6.81602L4.4085 5.02141L3.56379 5.44377L5.48093 7.08703C5.60704 7.19513 5.67124 7.3588 5.65225 7.52381C5.63327 7.68882 5.53357 7.83363 5.38621 7.91026L3.16398 9.06582C2.97044 9.16646 2.734 9.13002 2.57975 8.97577L1.47982 7.87583L1.22863 8.08438L2.27644 9.48146C2.34135 9.56801 2.37644 9.67328 2.37644 9.78146V10.7818L7.52588 8.43393C7.70742 8.35117 7.92078 8.38424 8.06874 8.51809C8.21669 8.65194 8.27092 8.86094 8.20669 9.04983L7.14433 12.1744L7.71386 11.8219L10.1395 7.40381C10.1915 7.309 10.2729 7.23363 10.3714 7.189L14.3565 5.38354C14.6662 5.24322 14.7789 4.86044 14.5946 4.57469Z",
            fill: "#26AA99",
          }),
        });
      }
      function yl() {
        return (0, S.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, S.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.16667 3.33331C0.890526 3.33331 0.666668 3.55717 0.666668 3.83331V11.5C0.666668 11.7761 0.890526 12 1.16667 12H2.79328C2.8575 12.8841 3.59495 13.5823 4.49658 13.5823C5.39822 13.5823 6.13566 12.8841 6.19988 12H9.66667L9.66934 12H10.5752C10.6395 12.8843 11.3778 13.5823 12.2785 13.5823C13.1801 13.5823 13.9176 12.8841 13.9818 12H15.1307C15.2947 12 15.4483 11.9196 15.5417 11.7848C15.6351 11.65 15.6565 11.478 15.5989 11.3245L13.4538 5.60224C13.3806 5.40706 13.194 5.27775 12.9856 5.27775H10.1667V3.83331C10.1667 3.55717 9.94281 3.33331 9.66667 3.33331H1.16667ZM13.7457 11H14.4093L12.6391 6.27775H10.1667V11H10.8114C11.1096 10.501 11.6552 10.1666 12.2785 10.1666C12.9024 10.1666 13.4477 10.501 13.7457 11ZM4.49658 10.1666C3.87263 10.1666 3.32731 10.501 3.02931 11H1.66667V4.33331H9.16667V11H5.96385C5.66585 10.501 5.12053 10.1666 4.49658 10.1666ZM4.49658 11.1666C4.10541 11.1666 3.78874 11.4837 3.78874 11.8745C3.78874 12.2653 4.10541 12.5823 4.49658 12.5823C4.88776 12.5823 5.20442 12.2653 5.20442 11.8745C5.20442 11.4837 4.88776 11.1666 4.49658 11.1666ZM11.5706 11.8745C11.5706 11.4839 11.8879 11.1666 12.2785 11.1666C12.6697 11.1666 12.9863 11.4837 12.9863 11.8745C12.9863 12.2653 12.6697 12.5823 12.2785 12.5823C11.8879 12.5823 11.5706 12.2651 11.5706 11.8745Z",
            fill: "black",
            fillOpacity: "0.87",
          }),
        });
      }
      function Sl() {
        return (0, S.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, S.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.3518 3.22207C13.4344 2.65334 14.772 3.00501 15.4349 4.03261C15.9504 4.83164 15.6353 5.90203 14.7692 6.29442L10.9359 8.03112L8.52718 12.4184C8.48569 12.494 8.42537 12.5575 8.35207 12.6029L6.4854 13.7585C6.30595 13.8696 6.07606 13.856 5.9109 13.7246C5.74575 13.5932 5.6809 13.3722 5.74884 13.1724L6.88723 9.82417L2.0839 12.0142C1.92913 12.0848 1.74909 12.0718 1.60602 11.9798C1.46295 11.8878 1.37647 11.7293 1.37647 11.5592V9.94813L0.143139 8.30369C-0.0167836 8.09046 0.0186723 7.78926 0.22374 7.619L1.19172 6.8153C1.39041 6.65033 1.68205 6.66382 1.86467 6.84644L3.02777 8.00955L4.26814 7.36455L2.34127 5.71295C2.21409 5.60394 2.14995 5.43848 2.17042 5.27223C2.19088 5.10598 2.29324 4.96102 2.44306 4.88611L4.22084 3.99722C4.38133 3.91698 4.5725 3.92888 4.7218 4.02841L7.40809 5.81927L12.3518 3.22207ZM14.5946 4.57469C14.2124 3.98218 13.4411 3.77941 12.8169 4.10734L7.61032 6.84262C7.4483 6.92774 7.25271 6.91754 7.10043 6.81602L4.40853 5.02141L3.56382 5.44377L5.48096 7.08703C5.60707 7.19513 5.67127 7.3588 5.65228 7.52381C5.6333 7.68882 5.5336 7.83363 5.38624 7.91026L3.16401 9.06582C2.97047 9.16646 2.73403 9.13002 2.57978 8.97577L1.47985 7.87583L1.22866 8.08438L2.27647 9.48146C2.34138 9.56801 2.37647 9.67328 2.37647 9.78146V10.7818L7.52591 8.43393C7.70745 8.35117 7.92081 8.38424 8.06877 8.51809C8.21673 8.65194 8.27095 8.86094 8.20672 9.04983L7.14436 12.1744L7.71389 11.8219L10.1395 7.40381C10.1915 7.309 10.2729 7.23363 10.3714 7.189L14.3565 5.38354C14.6663 5.24322 14.7789 4.86044 14.5946 4.57469Z",
            fill: "black",
            fillOpacity: "0.87",
          }),
        });
      }
      const Tl = s.p + "productdetailspage/5d961234f54d5dac21f9.svg";
      function wl({ shippingIconType: e }) {
        let t = null;
        switch (e) {
          case 0:
            t = (0, S.jsx)(Nl, {});
            break;
          case 1:
            t = (0, S.jsx)(Il, {});
            break;
          case 2:
            t = (0, S.jsx)(yl, {});
            break;
          case 3:
            t = (0, S.jsx)(Sl, {});
            break;
          case 4:
            t = (0, S.jsx)("img", { alt: "direct shipping icon", src: Tl });
        }
        return (0, S.jsx)("div", { className: "WjX0SZ", children: t });
      }
      const kl = "kAt8Li",
        { t: El } = N.I18n;
      function Pl() {
        const e = (0, F.mX)("is_support_fbs_enabled");
        return (0, S.jsx)("div", {
          className: l()("jQFffX", { [kl]: e }),
          children: El("shipping_fee_message_multiple_model_price"),
        });
      }
      const Al = s.p + "productdetailspage/ae317d9acf8a4aaf620c.svg";
      function Ll() {
        const e = (0, F.mX)("disable_price_with_variation"),
          { isVariationSelected: t, variationPreOrderText: s } = (0, ts.Q)(),
          { isVariationSelected: n, variationPreOrderText: i } = (0, Kn.gH)(),
          a = e ? n : t,
          r = e ? i : s,
          o = (0, F.PP)(),
          l = a ? r : o;
        return l
          ? (0, S.jsxs)("div", {
              className: "YMJfCu",
              children: [
                (0, S.jsx)("img", {
                  alt: "icon preorder",
                  className: "F3NM4u",
                  src: Al,
                }),
                (0, S.jsx)("div", { children: l }),
              ],
            })
          : null;
      }
      const Rl = s.p + "productdetailspage/5031998f7da3a30f88d2.svg",
        Dl = {
          section: "ytozli",
          title: "gxPhDY",
          titleView: "SsEdP1",
          description: "BYQWiH",
        };
      function Ml({ data: e, className: t }) {
        if (!e) return null;
        const { title: s, text: n } = e;
        return (0, S.jsx)("div", {
          className: l()(Dl.section, t),
          children: (0, S.jsxs)("div", {
            className: Dl.content,
            children: [
              (0, S.jsxs)("div", {
                className: Dl.titleView,
                children: [
                  (0, S.jsx)("div", { className: Dl.title, children: s }),
                  (0, S.jsx)("img", {
                    className: Dl.iconTimer,
                    alt: "icon timer",
                    src: Rl,
                    height: 20,
                    width: 20,
                  }),
                ],
              }),
              (0, S.jsx)("div", { className: Dl.description, children: n }),
            ],
          }),
        });
      }
      const Ol = (0, z.Kd)(),
        Zl = nr.SHIPPING_FEE_ADDRESS_MAX_LEVEL[Ol],
        Fl = (0, V.isFeatureEnabled)(W.S8),
        Bl = (0, V.isFeatureEnabled)(W.B0),
        Hl = () => ("BR" === Ol ? Zo : Oo),
        Ul = () => {
          if (!(0, V.isFeatureEnabled)(W.ue)) return Hl();
          switch (Ol) {
            case "ID":
              return Bo;
            case "TH":
            case "MY":
              return Vo;
            case "VN":
              return Qo;
            case "TW":
              return Wo;
            case "SG":
              return Ho;
            case "PH":
              return Uo;
            case "CO":
            case "CL":
            case "MX":
              return Fo;
            default:
              return Hl();
          }
        },
        Vl = () => {
          if (!(0, V.isFeatureEnabled)(W.ue)) return Hl();
          switch (Ol) {
            case "ID":
              return qo;
            case "TH":
            case "MY":
              return Vo;
            case "VN":
              return $o;
            case "SG":
              return Ho;
            case "PH":
              return Ko;
            case "CO":
            case "CL":
            case "MX":
              return Go;
            default:
              return Ul();
          }
        },
        { t: Wl } = N.I18n;
      class Ql extends i.Component {
        constructor(e) {
          super(e),
            (this.setAddress = (e) => {
              ((e, t) => {
                for (const s of Object.keys(e)) if (e[s] !== t[s]) return !1;
                return !0;
              })(e, this.props.selectedShippingAddress) ||
                ((this.hasSelectedAddressApiBeenRequested = !1),
                this.props.setSelectedShippingAddress(e),
                this.loadShippingFeeByAddress(e, void 0, !0));
            }),
            (this.onAddressSelected = (e) => {
              const {
                  state: t = "",
                  city: s = "",
                  district: n = "",
                  town: i = "",
                } = e,
                a = "zipcode" in e ? e.zipcode : "";
              this.setAddress({
                state: t,
                city: s,
                district: n,
                town: i,
                zipcode: a,
              });
            }),
            (this.debouncedLoadShippingFeeByAddress = (0, jr.Ds)(
              this.loadShippingFeeByAddress.bind(this),
              800
            )),
            (this.hasSelectedAddressApiBeenRequested = !1);
        }
        async universalDataFetch() {
          return this.loadShippingFeeByAddress(
            this.props.selectedShippingAddress
          );
        }
        componentDidMount() {
          this.props.isFetchAccountInfoDone &&
            this.loadShippingFeeByAddress(this.props.selectedShippingAddress);
        }
        componentDidUpdate(e) {
          var t;
          e.isFetchAccountInfoDone !== this.props.isFetchAccountInfoDone &&
          this.props.isFetchAccountInfoDone
            ? this.loadShippingFeeByAddress(this.props.selectedShippingAddress)
            : e.item.itemid !== this.props.item.itemid
            ? ((this.hasSelectedAddressApiBeenRequested = !1),
              this.loadShippingFeeByAddress(this.props.selectedShippingAddress))
            : Fl &&
              this.props.item.is_pre_order &&
              this.props.selectedModel &&
              (null == (t = e.selectedModel) ? void 0 : t.modelid) !==
                this.props.selectedModel.modelid &&
              this.debouncedLoadShippingFeeByAddress(
                this.props.selectedShippingAddress,
                this.props.selectedModel.modelid
              );
        }
        loadShippingFeeByAddress(e, t, s) {
          if (this.hasSelectedAddressApiBeenRequested && !t) return;
          this.hasSelectedAddressApiBeenRequested = !0;
          const { props: n } = this;
          if (n.item.itemid && n.item.shopid && e && Zl) {
            const i = (0, V.isFeatureEnabled)(W.tp),
              a = i
                ? n.oneApiFetchProductShippingByAddressV5
                : n.fetchProductShippingByAddressV5;
            return (!i || s) && a(n.item.shopid, n.item.itemid, e, !1, t);
          }
        }
        render() {
          var e, t, s, n, a, r, o, c, d, u, h, m, _, g;
          const {
              item: f,
              productShipping: x,
              isDataReady: v,
              modelRequestStatus: C,
              selectedModel: j,
              selectedShippingAddress: b,
              shouldShowPcKspRevamp: N,
            } = this.props,
            I = (0, br.getLateDeliveryCompensationData)(
              null == x
                ? void 0
                : x.selected_late_delivery_compensation_for_drawer
            ),
            y = (0, p.Z)(x, ["product_info"], null),
            T = (0, p.Z)(y, ["shipping_fee_info"], null),
            w = !!y && y.show_shipping_to,
            k = !!(0, p.Z)(x, ["product_info", "free_shipping", "has_fss"], !1),
            E = y
              ? (0, br.generateFreeShippingProductLevelInfo)({
                  t: Wl,
                  free_shipping: y.free_shipping,
                })
              : "",
            P = "TH" === Ol,
            A = j && C === ir.hi.REQUESTED,
            L = f.is_service_by_shopee,
            R = !(
              null == f ||
              !f.is_mart ||
              ("SG" !== Ol && "MY" !== Ol && !Bl)
            ),
            D =
              (0, V.isFeatureEnabled)(W.I1) &&
              !!(
                (null != x &&
                  null != (e = x.grouped_channel_infos_by_service_type) &&
                  e.some((e) =>
                    e.channel_infos.some((e) => 1003 === e.channel_id)
                  )) ||
                (null != x &&
                  null != (t = x.ungrouped_channel_infos) &&
                  t.some((e) => 1003 === e.channel_id))
              ),
            M = (0, V.isFeatureEnabled)(W.vk),
            O = !(null == x || !x.pre_selected_shipping_channel) && M,
            {
              shippingFeeText: Z = "",
              shippingIconType: F,
              warningType: B,
              warningMsg: H,
            } = O
              ? {
                  shippingIconType: rr.LOCAL,
                  warningType:
                    null == x ||
                    null == (s = x.pre_selected_shipping_channel) ||
                    null == (s = s.warning)
                      ? void 0
                      : s.type,
                  warningMsg:
                    null == x ||
                    null == (n = x.pre_selected_shipping_channel) ||
                    null == (n = n.warning)
                      ? void 0
                      : n.warning_msg,
                }
              : T
              ? (0, br.generateShippingFeeProductLevelInfo)({
                  shipping_fee_info: T,
                })
              : {},
            U = (0, p.Z)(x, ["API_STATUS", "error"], 0),
            Q = B === br.SHIPPING_FEE_WARNING_TYPE.NO_SHIPPING_CHANNEL || U,
            G = B && B !== br.SHIPPING_FEE_WARNING_TYPE.NO_SHIPPING_CHANNEL,
            q = (0, br.calHasSst)(x);
          return (0, S.jsxs)(i.Fragment, {
            children: [
              !v &&
                (0, S.jsx)("div", {
                  className: "qPOUK4",
                  children: Wl("label_loading"),
                }),
              (0, S.jsxs)("div", {
                className: l()("CWIkAx", v ? "oqSQTf" : "Z3_m8m"),
                children: [
                  !Q &&
                    !G &&
                    (0, S.jsxs)(S.Fragment, {
                      children: [
                        (0, S.jsxs)("div", {
                          className: "flex",
                          children: [
                            R && (0, S.jsx)(Ao, { isSbs: !!L }),
                            !R && L && "ID" !== Ol && (0, S.jsx)(_r, {}),
                            D && (0, S.jsx)(Cr, {}),
                          ],
                        }),
                        (0, S.jsx)(Ll, {}),
                      ],
                    }),
                  (0, S.jsxs)("div", {
                    className: "wigEZ0",
                    children: [
                      !O && E && E.title && !N
                        ? (0, S.jsxs)(S.Fragment, {
                            children: [
                              (0, S.jsx)("img", {
                                src: k ? Vl() : Ul(),
                                height: 20,
                                className: "Fy4A_Q",
                              }),
                              (0, S.jsxs)("div", {
                                className: "ohuenU",
                                children: [
                                  (0, S.jsxs)("div", {
                                    className: "nDYwZC",
                                    children: [
                                      (0, S.jsx)("div", { children: E.title }),
                                      P &&
                                        (0, S.jsx)("div", {
                                          className: "ylZz2_",
                                          children: (0, S.jsx)(tl, {
                                            isUseStation: !0,
                                            children: (0, S.jsx)(zs.ve, {
                                              content: (0, S.jsxs)(S.Fragment, {
                                                children: [
                                                  (0, S.jsx)("img", {
                                                    alt: "icon help",
                                                    src: bt,
                                                  }),
                                                  (0, S.jsx)(al, {
                                                    ids: ["freeShippingTC"],
                                                  }),
                                                ],
                                              }),
                                              showContent: (0, S.jsx)("div", {
                                                className: ln,
                                                children: (0, S.jsx)(nl, {
                                                  id: "freeShippingTC",
                                                  className: ln,
                                                  children: (0, S.jsx)("div", {
                                                    className: "nzMrCh",
                                                    dangerouslySetInnerHTML: {
                                                      __html: Wl(
                                                        "pdp_free_shipping_terms_condition"
                                                      ),
                                                    },
                                                  }),
                                                }),
                                              }),
                                              showPosition: "center",
                                            }),
                                          }),
                                        }),
                                    ],
                                  }),
                                  E.description
                                    ? (0, S.jsx)("div", {
                                        className: "mU_CeI",
                                        children: E.description,
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          })
                        : null,
                      (0, S.jsx)("div", {
                        className: "H5IRYN",
                        children:
                          O && null != x && x.pre_selected_shipping_channel
                            ? (0, S.jsx)(wl, {
                                shippingIconType:
                                  null == x
                                    ? void 0
                                    : x.pre_selected_shipping_channel
                                        .shipping_icon_type,
                              })
                            : (0, S.jsx)(S.Fragment, {
                                children:
                                  F === rr.OVERSEAS
                                    ? (0, S.jsx)("img", {
                                        alt: "icon shipped overseas",
                                        className: "fBlHLU",
                                        src: Ro,
                                      })
                                    : (0, S.jsx)("img", {
                                        alt: "icon shipped locally",
                                        className: "i9sDsG",
                                        src: Do,
                                      }),
                              }),
                      }),
                      (0, S.jsxs)("div", {
                        className: l()("flex", "flex-column", "JLop8B"),
                        children: [
                          (0, S.jsx)(Rr, {
                            className: l()("oye0NX", {
                              [zo]:
                                this.props.supportFulfilledByShopee &&
                                (null == x ||
                                null == (a = x.pre_selected_shipping_channel) ||
                                null == (a = a.display_text) ||
                                null == (a = a.fulfilled_by_shopee) ||
                                null == (a = a.fbs_highlight)
                                  ? void 0
                                  : a.description),
                            }),
                            displayText:
                              null == x ||
                              null == (r = x.pre_selected_shipping_channel)
                                ? void 0
                                : r.display_text,
                          }),
                          (0, S.jsx)(Dr, {
                            className: "lgD2zq",
                            description:
                              null == x ||
                              null == (o = x.pre_selected_shipping_channel) ||
                              null == (o = o.display_text) ||
                              null == (o = o.fulfilled_by_shopee) ||
                              null == (o = o.fbs_highlight)
                                ? void 0
                                : o.description,
                          }),
                          (F === rr.OVERSEAS || !!w) &&
                            (0, S.jsxs)("div", {
                              className: l()("flex", "items-center", "C0ngbq"),
                              children: [
                                (0, S.jsx)("div", {
                                  className: Yo,
                                  children: `${Wl(
                                    "product_page_label_shipping"
                                  )} ${Wl(
                                    F === rr.OVERSEAS
                                      ? "label_from"
                                      : "label_to"
                                  )}`,
                                }),
                                (0, S.jsxs)("div", {
                                  className: l()(
                                    "flex",
                                    "items-center",
                                    "oTmzEO"
                                  ),
                                  children: [
                                    F === rr.OVERSEAS &&
                                      (0, S.jsx)("div", {
                                        className: "mMlgVz",
                                        children: ` ${
                                          (f && f.shop_location) ||
                                          Wl("label_overseas")
                                        }`,
                                      }),
                                    w &&
                                      (0, S.jsx)(_l, {
                                        address: b,
                                        addressType: F,
                                        onAddressSelected:
                                          this.onAddressSelected,
                                        trackingData: {
                                          itemId: f.itemid,
                                          shopId: f.shopid,
                                        },
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          Q
                            ? (0, S.jsx)("div", {
                                style: { color: "#636363" },
                                children:
                                  H ||
                                  Wl(
                                    "label_pdp_shipping_fee_no_shipping_channel_available"
                                  ),
                              })
                            : (0, S.jsxs)("div", {
                                className: "BWGW5I",
                                children: [
                                  (0, S.jsx)("div", {
                                    className: Yo,
                                    children: `${Wl("label_shipping_fee")}`,
                                  }),
                                  (0, S.jsx)("div", {
                                    children: (0, S.jsx)(zs.dy, {
                                      alignment: "center",
                                      drawerButton: (0, S.jsxs)("div", {
                                        className: l()(
                                          "flex",
                                          "items-center",
                                          "PZGOkt"
                                        ),
                                        children: [
                                          G
                                            ? H
                                            : O
                                            ? (0, S.jsx)(Cl, {
                                                priceBeforeDiscount:
                                                  null == x ||
                                                  null ==
                                                    (c =
                                                      x.pre_selected_shipping_channel) ||
                                                  null ==
                                                    (c =
                                                      c.price_before_discount)
                                                    ? void 0
                                                    : c.single_value,
                                                price:
                                                  null == x ||
                                                  null ==
                                                    (d =
                                                      x.pre_selected_shipping_channel) ||
                                                  null == (d = d.price)
                                                    ? void 0
                                                    : d.single_value,
                                              })
                                            : `${Z}${
                                                q ? ` ${Wl("PDP_MY_SST")}` : ""
                                              }`,
                                          (0, S.jsx)("img", {
                                            alt: "icon arrow down",
                                            className: "eTGwg9",
                                            src: Mo,
                                          }),
                                        ],
                                      }),
                                      children: (0, S.jsxs)("div", {
                                        className: l()("MdEora", "card"),
                                        children: [
                                          (0, S.jsx)("div", {
                                            className: "XeC500",
                                            children: A
                                              ? (0, S.jsx)(Lo.Z, {
                                                  className: "HykkXO",
                                                })
                                              : (0, S.jsxs)(S.Fragment, {
                                                  children: [
                                                    (0, S.jsx)(Ml, { data: I }),
                                                    (0, S.jsx)(xo, {
                                                      productShipping: x,
                                                    }),
                                                    M &&
                                                      (null == x
                                                        ? void 0
                                                        : x.is_item_with_price_range) &&
                                                      (0, S.jsxs)("div", {
                                                        className: "gbmoiL",
                                                        children: [
                                                          this.props
                                                            .supportFulfilledByShopee &&
                                                            (0, S.jsx)("div", {
                                                              className:
                                                                "dMKkAU",
                                                            }),
                                                          (0, S.jsx)(Pl, {}),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                          }),
                                          q &&
                                            (0, S.jsx)("div", {
                                              className: "Gty4hV",
                                              dangerouslySetInnerHTML: {
                                                __html: Wl(
                                                  "PDP_Shipping_Drawer_MY_SST"
                                                ),
                                              },
                                            }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          O &&
                            (null == x ||
                            null == (u = x.pre_selected_shipping_channel)
                              ? void 0
                              : u.lowest_bpsf_promotion_rule) &&
                            (0, S.jsx)(Pr, {
                              isFreeShipping: !(
                                null == x ||
                                null ==
                                  (h =
                                    x.pre_selected_shipping_channel
                                      .lowest_bpsf_promotion_rule) ||
                                !h.is_free_shipping
                              ),
                              isItemEligible: !(
                                null == x ||
                                null ==
                                  (m =
                                    x.pre_selected_shipping_channel
                                      .lowest_bpsf_promotion_rule) ||
                                !m.is_item_eligible
                              ),
                              minSpend:
                                null == x ||
                                null ==
                                  (_ =
                                    x.pre_selected_shipping_channel
                                      .lowest_bpsf_promotion_rule)
                                  ? void 0
                                  : _.min_spend,
                              discount:
                                null == x ||
                                null ==
                                  (g =
                                    x.pre_selected_shipping_channel
                                      .lowest_bpsf_promotion_rule)
                                  ? void 0
                                  : g.discount_value,
                            }),
                          O &&
                            (null == x
                              ? void 0
                              : x.pre_selected_shipping_channel) &&
                            (0, S.jsx)(bl, {
                              shippingIconType:
                                null == x
                                  ? void 0
                                  : x.pre_selected_shipping_channel
                                      .shipping_icon_type,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      }
      const Gl = (0, h.compose)(
          function (e) {
            return function (t) {
              return (0, S.jsx)(Wi.b.Consumer, {
                children: (s) => (0, S.jsx)(e, (0, n.Z)({}, t, s)),
              });
            };
          },
          (0, u.connect)(
            (e, t) => {
              const { item: s } = e,
                {
                  item: { itemid: i },
                  selectedModel: a,
                  selectedShippingAddress: r,
                } = t;
              let o = null;
              const l = (0, qa.VL)(s, i);
              Fl &&
                t.item.is_pre_order &&
                null != a &&
                a.modelid &&
                (o = (0, qa.VL)(s, i, a.modelid, r));
              const c = (0, p.Z)(o, ["API_STATUS", "status"]),
                d = t.selectedModel && c === ir.hi.SUCCESS;
              return {
                isDataReady:
                  (!!l && (0, ir.px)((0, p.Z)(l, ["API_STATUS"]))) ||
                  !!t.shippingData,
                modelRequestStatus: c,
                productShipping:
                  (d ? o : l) ||
                  (0, n.Z)({}, t.shippingData, {
                    API_STATUS: { status: "success" },
                  }),
                ENABLE_ZIPCODE_SELECTOR: (0, V.isFeatureEnabled)(W.QD),
              };
            },
            {
              fetchProductShippingByAddressV5: Ka.Yn,
              oneApiFetchProductShippingByAddressV5: function (
                e,
                t,
                s,
                i = !1,
                a,
                r
              ) {
                return async (o, l) =>
                  await (0, Ya.ZP)(
                    {
                      apiCall: () =>
                        (function (e, t, s, i, a, r) {
                          var o;
                          const {
                              state: l,
                              city: c,
                              district: d,
                              town: u,
                              zipcode: p,
                            } = s,
                            h = (0, Ja.Wc)(
                              (0, n.Z)(
                                {
                                  shop_id: e,
                                  item_id: t,
                                  state: l,
                                  city: c,
                                  district: d || "",
                                  town: u || "",
                                  buyer_zipcode: p ? p.replace(er, "") : "",
                                },
                                i ? { is_shopee_lite: "true" } : {},
                                { model_id: a },
                                null != (o = null == r ? void 0 : r.apm)
                                  ? o
                                  : {},
                                {
                                  tz_offset_minutes:
                                    -new Date().getTimezoneOffset(),
                                }
                              )
                            );
                          return (0, Xa.Vn)(
                            `/api/v4/pdp/shipping/get${h}`
                          ).then((e) => {
                            var t;
                            if (
                              null != e &&
                              null != (t = e.response) &&
                              t.data
                            ) {
                              var s, i, a, r, o;
                              let t, c;
                              if (
                                null != (s = e.response.data) &&
                                null != (s = s.product_shipping) &&
                                null != (s = s.shipping_fee_info) &&
                                s.price
                              ) {
                                var l;
                                const s =
                                  null == (l = e.response.data) ||
                                  null == (l = l.product_shipping) ||
                                  null == (l = l.shipping_fee_info)
                                    ? void 0
                                    : l.price;
                                (t =
                                  -1 !== s.single_value
                                    ? s.single_value
                                    : s.range_max),
                                  (c =
                                    -1 !== s.single_value
                                      ? s.single_value
                                      : s.range_min);
                              }
                              return {
                                response: {
                                  data: (0, n.Z)(
                                    {},
                                    e.response.data.product_shipping,
                                    {
                                      product_info: {
                                        free_shipping:
                                          null == (i = e.response.data) ||
                                          null == (i = i.product_shipping)
                                            ? void 0
                                            : i.free_shipping,
                                        shipping_fee_info: (0, n.Z)(
                                          {},
                                          null == (a = e.response.data) ||
                                            null == (a = a.product_shipping)
                                            ? void 0
                                            : a.shipping_fee_info,
                                          { max_price: t, min_price: c }
                                        ),
                                        show_shipping_to:
                                          null == (r = e.response.data) ||
                                          null == (r = r.product_shipping)
                                            ? void 0
                                            : r.show_shipping_to,
                                        return_on_spot:
                                          null == (o = e.response.data)
                                            ? void 0
                                            : o.return_on_spot,
                                      },
                                    }
                                  ),
                                },
                              };
                            }
                            return e;
                          });
                        })(e, t, s, i, a, r),
                      actions: [
                        {
                          type: tr.REQUESTED,
                          payload: () => ({
                            shopId: e,
                            itemId: t,
                            modelId: a,
                            address: s,
                          }),
                        },
                        {
                          type: tr.SUCCESS,
                          payload: (n, i, r) => ({
                            shopId: e,
                            itemId: t,
                            modelId: a,
                            address: s,
                            shipping: r,
                          }),
                        },
                        {
                          type: tr.FAILED,
                          payload: (n, i, r) => ({
                            shopId: e,
                            itemId: t,
                            modelId: a,
                            address: s,
                            error: r.error,
                          }),
                        },
                      ],
                      shouldSkipCall: (e) => {
                        if (a) {
                          const n = sr(e.item, t, a, s);
                          return !(
                            !n ||
                            ((0, p.Z)(n, ["API_STATUS", "status"]) !==
                              $a.API_STATUS.SUCCESS &&
                              (0, p.Z)(n, ["API_STATUS", "status"]) !==
                                $a.API_STATUS.REQUESTED)
                          );
                        }
                        return !1;
                      },
                    },
                    o,
                    l
                  );
              },
            }
          )
        )(Ql),
        ql = (0, b.Pf)((0, me.withTrackClick)(Gl, "ShippingToEntry"));
      var Kl = s(31961);
      const $l = ["Component"],
        Yl = (0, Kl.q)()(function (e) {
          var t, s;
          let { Component: a } = e,
            o = (0, jt.Z)(e, $l);
          const [l, c] = (0, i.useState)(!1);
          (0, r.u)(async () => {
            if (void 0 === o.isFetchAccountInfoDone) {
              const e = await o.fetchUserAddressList();
              return c(!0), e;
            }
          }, [o.isFetchAccountInfoDone]);
          const d = (0, F.eI)(),
            u = (0, F.mX)("is_support_fbs_enabled"),
            p = (0, F.l2)();
          return (null != (t = o.isFetchAccountInfoDone) ? t : l)
            ? (0, S.jsx)(
                a,
                (0, n.Z)({}, o, {
                  shippingData: d,
                  isFetchAccountInfoDone:
                    null == (s = o.isFetchAccountInfoDone) || s,
                  supportFulfilledByShopee: u,
                  shouldShowPcKspRevamp: p,
                })
              )
            : null;
        }),
        zl = (0, z.Kd)(),
        Xl = nr.CAPITAL_CITY[zl],
        { t: Jl } = N.I18n;
      class ec extends i.PureComponent {
        constructor(e) {
          super(e),
            (this.setAddress = (e) => {
              this.setState({ selectedShippingAddress: e });
            });
          const t = this.getShippingAddressFromProps(e);
          this.state = { selectedShippingAddress: t };
        }
        getShippingAddressFromProps(e) {
          const t = e.userAddress;
          return t
            ? (function (e) {
                return {
                  city: e.city,
                  state: e.state,
                  district: e.district,
                  town: e.town,
                  zipcode: e.zipcode,
                };
              })(t)
            : Xl;
        }
        componentDidUpdate(e) {
          if (this.props.userAddress !== e.userAddress) {
            const e = this.getShippingAddressFromProps(this.props);
            this.setAddress(e);
          }
        }
        render() {
          const { item: e, addressDone: t } = this.props;
          return (0, S.jsxs)("section", {
            className: l()("flex", Za.Z.row, "uVwYBh"),
            children: [
              (0, S.jsx)("h2", {
                className: Za.Z.attrLabel,
                children: Jl("product_page_label_shipping"),
              }),
              (0, S.jsx)(Yl, {
                Component: ql,
                item: e,
                isFetchAccountInfoDone: t,
                selectedShippingAddress: this.state.selectedShippingAddress,
                setSelectedShippingAddress: this.setAddress,
              }),
            ],
          });
        }
      }
      function tc(e) {
        return (0, F.Fx)() ? null : (0, S.jsx)(ec, (0, n.Z)({}, e));
      }
      var sc = s(63716),
        nc = s(48360),
        ic = s(35497);
      const { t: ac, withI18nCollections: rc } = N.I18n,
        oc = rc([nc.L])(({ voucher: e }) => {
          let t = "";
          const s = e.discount_percent || e.discount_percentage,
            n = e.discount_value,
            i = e.coin_percent || e.coin_percentage;
          return (
            s
              ? (t = ac("pdp_label_voucher_product_percentage_discount", {
                  value: (0, ic.i)(s),
                }))
              : n
              ? (t = ac("label_voucher_product_value_discount", {
                  value: (0, pe.rH)(n, { maxPrecision: 2 }),
                }))
              : i && (t = `${String(i)}%`),
            (0, S.jsxs)(S.Fragment, {
              children: [
                (0, S.jsx)("span", { children: t }),
                !!i &&
                  (0, S.jsx)("span", {
                    className: "xt4bbw",
                    children: ac("label_coins_cashback"),
                  }),
              ],
            })
          );
        }),
        lc = function ({ voucher: e, className: t }) {
          return e
            ? (0, S.jsx)("div", {
                className: l()("o3ut9x", t),
                children: (0, S.jsx)(oc, { voucher: e }),
              })
            : null;
        };
      var cc = s(94628);
      const dc = "miniVoucherPopoverLabel",
        { t: uc, withI18nCollections: pc } = N.I18n,
        hc = pc([nc.L])(
          ((e, t) => {
            class s extends i.Component {
              constructor(e) {
                super(e),
                  (this.state = { showPopover: !1 }),
                  (this.togglePopover = this.togglePopover.bind(this)),
                  (this.delayedTogglePopover =
                    this.delayedTogglePopover.bind(this)),
                  (this.onBlurHandler = this.onBlurHandler.bind(this)),
                  (this.onFocusHandler = this.onFocusHandler.bind(this));
              }
              togglePopover(e) {
                this.setState({ showPopover: e });
              }
              delayedTogglePopover(e) {
                clearTimeout(this._displayTimer),
                  this.state.showPopover !== e &&
                    (this._displayTimer = setTimeout(
                      () => this.togglePopover(e),
                      200
                    ));
              }
              onPopverMouseEnter() {
                clearTimeout(this._displayTimer);
              }
              onBlurHandler() {
                this._onBlurTimeoutId = setTimeout(() => {
                  this.togglePopover(!1);
                });
              }
              onFocusHandler() {
                clearTimeout(this._onBlurTimeoutId), this.togglePopover(!0);
              }
              render() {
                const { showPopover: s } = this.state;
                return (0, S.jsxs)("div", {
                  onMouseLeave: this.delayedTogglePopover.bind(this, !1),
                  onMouseEnter: this.togglePopover.bind(this, !0),
                  onBlur: this.onBlurHandler,
                  onFocus: this.onFocusHandler,
                  "aria-haspopup": "true",
                  "aria-expanded": this.state.showPopover,
                  id: dc,
                  className: l()(this.props.containerClassName, "UvSsjz"),
                  tabIndex: 0,
                  style: { position: "relative" },
                  ref: (e) => {
                    this._popoverAnchor = e;
                  },
                  children: [
                    (0, S.jsx)(e, (0, n.Z)({}, this.props)),
                    s &&
                      (0, S.jsx)(cc.J2, {
                        className: "shopee-popover--dropdown",
                        sizeMode: cc.MO.AUTO,
                        anchorNode: this._popoverAnchor,
                        containerNode: this._popoverAnchor,
                        clickOutsideCallback: () => this.togglePopover(!1),
                        offsetTop: 15,
                        ariaDescribedby: dc,
                        children: (0, S.jsx)("div", {
                          onMouseEnter: this.onPopverMouseEnter.bind(this),
                          children: (0, S.jsx)(t, (0, n.Z)({}, this.props)),
                        }),
                      }),
                  ],
                });
              }
            }
            return s;
          })(
            function ({ itemShopVouchers: e, className: t }) {
              const s = (0, F.Ub)();
              return (0, S.jsxs)("section", {
                className: l()("mini-vouchers", t),
                children: [
                  (0, S.jsx)("h2", {
                    className: "mini-vouchers__label",
                    children: uc(
                      s ? "label_shop_voucher_idscs" : "label_shop_voucher"
                    ),
                  }),
                  (0, S.jsxs)("div", {
                    className: l()(
                      "mini-vouchers__wrapper flex flex-auto flex-no-overflow"
                    ),
                    children: [
                      (0, S.jsxs)("div", {
                        className:
                          "mini-vouchers__vouchers flex flex-auto flex-no-overflow",
                        children: [
                          e
                            .slice(0, 5)
                            .map((e, t) =>
                              (0, S.jsx)(
                                lc,
                                {
                                  className: "mini-voucher-with-popover",
                                  voucher: e,
                                },
                                t
                              )
                            ),
                          (0, S.jsx)("div", {
                            className: "mini-vouchers__mask",
                          }),
                        ],
                      }),
                      e.length >= 5 &&
                        (0, S.jsxs)("div", {
                          className: "mini-vouchers__show-all",
                          children: [
                            uc("product_page_label_show_all"),
                            (0, S.jsxs)("svg", {
                              viewBox: "0 0 14 14",
                              version: "1.1",
                              xmlns: "http://www.w3.org/2000/svg",
                              className: l()("mini-vouchers-show-all__svg"),
                              children: [
                                (0, S.jsx)("defs", {}),
                                (0, S.jsx)("g", {
                                  stroke: "none",
                                  strokeWidth: "1",
                                  fill: "none",
                                  fillRule: "evenodd",
                                  children: (0, S.jsx)("g", {
                                    transform:
                                      "translate(-1293.000000, -334.000000)",
                                    children: (0, S.jsx)("g", {
                                      transform:
                                        "translate(1229.000000, 333.000000)",
                                      children: (0, S.jsxs)("g", {
                                        transform:
                                          "translate(64.000000, 1.000000)",
                                        children: [
                                          (0, S.jsx)("circle", {
                                            id: "Oval-4",
                                            cx: "7",
                                            cy: "7",
                                            r: "7",
                                            fill: "currentColor",
                                          }),
                                          (0, S.jsx)("polyline", {
                                            stroke: "#FFFFFF",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            points: "4 6 7 9.42857143 10 6",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            (e) => {
              const t = (0, me.useTargetType)(),
                s = (0, me.useTargetData)();
              return (0, S.jsx)(ca.Z, {
                slotName: "pcmall-sellervoucherlist",
                slotProps: (0, n.Z)({}, e, {
                  vouchers: e.itemShopVouchers,
                  targetType: t,
                  targetData: s,
                }),
                slotLoadingFallback: null,
                spexNamespace: "app.web_fe.pc.voucher",
              });
            }
          )
        );
      var mc = s(9160);
      class _c {
        constructor() {
          this.__FALLBACK_LOCAL_STORAGE__ = {};
        }
        _getKey(e) {
          return `${_c.KEY}${e}`;
        }
        _get(e) {
          const t = this._getKey(e);
          return !!(mc.X.isSupported()
            ? mc.X.get(t)
            : this.__FALLBACK_LOCAL_STORAGE__[t]);
        }
        _set(e) {
          const t = this._getKey(e);
          mc.X.isSupported()
            ? mc.X.set(t, "1")
            : (this.__FALLBACK_LOCAL_STORAGE__[t] = !0);
        }
        isLearnMoreClicked(e) {
          return this._get(e);
        }
        recordClick(e) {
          this._set(e);
        }
      }
      _c.KEY = "pdp_clicked_insurance_learn_more_";
      const gc = Object.freeze(new _c()),
        { t: fc } = N.I18n,
        xc = (e) => {
          const {
              insurance: {
                insurance_product_id: t,
                product_name: s,
                product_detail_page_url: n,
                product_link_text: a,
              },
              commonStyleModule: r,
            } = e,
            [o, c] = (function (e) {
              const [t, s] = i.useState(!1);
              return (
                i.useEffect(() => {
                  e && s(!gc.isLearnMoreClicked(e));
                }, [e]),
                [t, s]
              );
            })(t),
            d = { insurance_product_id: t, is_new: o },
            u = (0, me.useTrackImpression)("InsuranceEntrance", d),
            p = (0, me.useTrackClick)("InsuranceEntranceLearnMore", d);
          return e.insurance
            ? (0, S.jsxs)("section", {
                ref: u,
                className: l()("flex", r.row),
                style: { alignItems: "stretch" },
                children: [
                  (0, S.jsx)("h2", {
                    className: r.attrLabel,
                    children: fc("product_page_label_protection"),
                  }),
                  (0, S.jsxs)("div", {
                    className: "flex",
                    children: [
                      !!s &&
                        (0, S.jsx)("div", { className: "ydqmvf", children: s }),
                      o &&
                        (0, S.jsx)("div", {
                          className: "K4EMzU",
                          children: fc("pdp_label_new"),
                        }),
                      !!n &&
                        (0, S.jsx)("a", {
                          className: "E_9Yd2",
                          href: n,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          onClick: () => {
                            p(), t && (gc.recordClick(t), c(!1));
                          },
                          children: a || fc("product_page_label_learn_more"),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        },
        vc = (e) => {
          const { insuranceData: t, commonStyleModule: s } = e;
          return (0, S.jsx)(S.Fragment, {
            children: t.insurance_products.map((e) =>
              (0, S.jsx)(
                xc,
                { insurance: e, commonStyleModule: s },
                null == e ? void 0 : e.insurance_product_id
              )
            ),
          });
        },
        { t: Cc } = N.I18n,
        jc = (0, z.Kd)(),
        bc = nr.CAPITAL_CITY[jc],
        Nc = ({ onAddressSelected: e }) => {
          var t;
          const { showShippingTo: s } = null != (t = (0, F.RN)()) ? t : {},
            { itemId: n, shopId: a } = (0, F.u4)(),
            r = (0, F.bJ)(),
            o = (0, F._h)(),
            l = (0, F.Oj)(),
            c = null == o ? void 0 : o.shipping_fee_info,
            d = null == o ? void 0 : o.pre_selected_shipping_channel,
            u = (0, V.isFeatureEnabled)(W.vk),
            p = !!d && u,
            { shippingIconType: h } = p
              ? { shippingIconType: rr.LOCAL }
              : null != o && o.shipping_fee_info
              ? (0, br.generateShippingFeeProductLevelInfo)({
                  shipping_fee_info: c,
                })
              : {},
            [m, _] = (0, i.useState)(null != r ? r : bc);
          if (!s) return null;
          return (0, S.jsxs)("div", {
            className: "EyAHY1",
            children: [
              (0, S.jsx)("div", {
                className: "Dc4Fhg",
                children: `${Cc("product_page_label_shipping")} ${Cc(
                  h === rr.OVERSEAS ? "label_from" : "label_to"
                )}:`,
              }),
              (0, S.jsx)(_l, {
                address: m,
                addressType: h,
                onAddressSelected: (t) => {
                  const {
                      state: s = "",
                      city: i = "",
                      district: o = "",
                      town: c = "",
                    } = t,
                    d = "zipcode" in t ? t.zipcode : "";
                  var u;
                  ((e, t) => {
                    for (const s of Object.keys(e))
                      if (e[s] !== t[s]) return !1;
                    return !0;
                  })(
                    (u = {
                      state: s,
                      city: i,
                      district: o,
                      town: c,
                      zipcode: d,
                    }),
                    r
                  ) ||
                    (_(u),
                    l({ itemId: n, shopId: a, address: u }),
                    null == e || e());
                },
                trackingData: { itemId: n, shopId: a },
              }),
            ],
          });
        },
        { t: Ic } = N.I18n,
        yc = () => {
          const e = (0, F.eI)();
          return (0, br.calHasSst)(e)
            ? (0, S.jsx)("div", {
                className: "gBWM4s",
                dangerouslySetInnerHTML: {
                  __html: Ic("PDP_Shipping_Drawer_MY_SST"),
                },
              })
            : null;
        },
        { useShippingPopupToggle: Sc, useShouldShowShippingPopup: Tc } = (0,
        Nr.J)("shippingPopup"),
        { t: wc } = N.I18n,
        kc = () => {
          var e;
          const t = Tc(),
            { hideShippingPopup: s } = Sc(),
            {
              groupedChannels: n,
              ungroupedChannels: a,
              drawerLateCompensationData: r,
            } = null != (e = (0, F.RN)()) ? e : {},
            o = (0, F._h)(),
            [l, c] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            t || c(!1);
          }, [t]),
            (0, i.useEffect)(() => () => s(), []);
          const d = (0, br.getLateDeliveryCompensationData)(r),
            u = {
              grouped_channel_infos_by_service_type: l
                ? n
                : null == o
                ? void 0
                : o.grouped_channel_infos_by_service_type,
              ungrouped_channel_infos: l
                ? a
                : null == o
                ? void 0
                : o.ungrouped_channel_infos,
            };
          return (0, S.jsx)(Ke.Z, {
            isOpen: t,
            onOverlayClick: s,
            focusTrap: !1,
            children: (0, S.jsxs)("div", {
              className: "oKJkKO",
              children: [
                (0, S.jsxs)("div", {
                  className: "ytTzaP",
                  children: [
                    (0, S.jsx)("div", {
                      className: "fd8gRj",
                      children: wc("pdp_msg_shipping_fee_information"),
                    }),
                    (0, S.jsx)(Ml, { className: "ZdhAws", data: d }),
                    (0, S.jsx)(Nc, { onAddressSelected: () => c(!0) }),
                  ],
                }),
                (0, S.jsx)("div", {
                  className: "tuPCbG",
                  children: (0, S.jsx)(xo, { productShipping: u }),
                }),
                (0, S.jsxs)("div", {
                  className: "pnvN9e",
                  children: [
                    (0, S.jsx)(yc, {}),
                    (0, S.jsx)(tt.nQ, {
                      className: "b1S7eh",
                      onClick: s,
                      children: wc("label_ok"),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ec = ({ onClickEdt: e }) => {
          const t = (0, F.Gy)(),
            s = (0, F.T5)(),
            i = ro();
          if (!t) return null;
          const { edt: a, shippingFee: r, lateDeliveryCompensation: o } = t,
            c = ({ texts: e, className: t }) =>
              e
                ? (0, S.jsx)("div", {
                    className: l()("DyJVP3", t),
                    children: e.map((e, t) =>
                      (0, S.jsx)(
                        "span",
                        {
                          style: (0, n.Z)(
                            {},
                            e.bold ? { fontWeight: 500 } : {},
                            e.textColor ? { color: e.textColor } : {}
                          ),
                          children: e.content,
                        },
                        t
                      )
                    ),
                  })
                : null;
          return (0, S.jsxs)("div", {
            className: "nOqcXQ",
            children: [
              (0, S.jsxs)("div", {
                onClick: e,
                className: "zYAHod",
                children: [
                  (0, S.jsx)(c, { texts: a }),
                  (0, S.jsx)(qi.Z, { className: "X_U_zs" }),
                ],
              }),
              !(null == r || !r.length) &&
                (0, S.jsxs)("div", {
                  className: "IrZ9Rf",
                  children: [
                    (0, S.jsx)(c, { className: "zRFiFo", texts: r }),
                    !(null == s || !s.showShopeePlusIcon) &&
                      (i
                        ? (0, S.jsx)("img", {
                            alt: "shopee plus icon",
                            className: "S_7aDV",
                            src: lo,
                          })
                        : (0, S.jsx)("img", {
                            alt: "shopee plus icon",
                            className: "NsKsHV",
                            src: co,
                          })),
                  ],
                }),
              (0, S.jsx)(c, { texts: o, className: "onPwxQ" }),
            ],
          });
        },
        Pc = s.p + "productdetailspage/f1f65ec969d238ed62ff.svg",
        Ac = s.p + "productdetailspage/298cdb6123eb281e13a9.svg",
        { t: Lc } = N.I18n,
        Rc = () => {
          const { showShippingPopup: e } = Sc(),
            t = (0, F.Fx)(),
            s = (0, F.T5)(),
            n = "ShippingEntrance",
            i = {
              shipping_channel_id: null == s ? void 0 : s.channelId,
              is_xdd_channel: null == s ? void 0 : s.isXddChannel,
              is_pc: !0,
              shopee_plus: !(null == s || !s.showShopeePlusIcon),
            },
            a = (0, me.useTrackImpression)(n, i),
            r = (0, me.useTrackClick)(n, i);
          if (!t) return null;
          const { warningMessage: o } = null != s ? s : {};
          return (0, S.jsxs)("section", {
            className: l()("flex", Za.Z.row, "lkKD9l"),
            children: [
              (0, S.jsx)("h2", {
                className: Za.Z.attrLabel,
                children: Lc("product_page_label_shipping"),
              }),
              (0, S.jsx)("div", {
                className: "flex",
                children: (0, S.jsxs)("div", {
                  ref: a,
                  className: "uQvFLM",
                  children: [
                    (0, S.jsx)("img", {
                      alt: "shipping entrance icon",
                      className: "snjEjZ",
                      src: o ? Ac : Pc,
                    }),
                    o
                      ? (0, S.jsx)("div", { className: "Vnqu24", children: o })
                      : (0, S.jsx)(Ec, {
                          onClickEdt: () => {
                            e(), r();
                          },
                        }),
                  ],
                }),
              }),
              (0, S.jsx)(kc, {}),
            ],
          });
        },
        Dc = s.p + "productdetailspage/0c17849077f3372a7fe0.svg",
        Mc = s.p + "productdetailspage/1ae2ca39edcb6b06170f.svg",
        Oc = s.p + "productdetailspage/fd303700dd252abf3771.svg";
      var Zc = s(55998);
      const Fc = "AWr2k9",
        Bc = ({ service: e, index: t }) => {
          var s;
          const i = !!e.url,
            r = "ServiceItem",
            o = { location: t, service_id: e.id, is_pc: !0 },
            c = (0, me.useTrackImpression)(r, o),
            d = (0, me.useTrackClick)(
              r,
              (0, n.Z)({}, o, { service_url: i ? e.url : "" })
            );
          return a().createElement(
            i ? "a" : "div",
            (0, n.Z)(
              {},
              i && { rel: "noopener noreferrer", href: e.url, onClick: d }
            ),
            (0, S.jsxs)("div", {
              ref: c,
              className: "MxnU3J",
              children: [
                (0, S.jsx)("img", {
                  alt: `${e.title} icon`,
                  className: "OInbBb",
                  src: (0, ue.NF)(e.icon),
                }),
                (0, S.jsxs)("div", {
                  className: "QTBNdq",
                  children: [
                    (0, S.jsx)("div", {
                      className: "AU9pr3",
                      children: e.title,
                    }),
                    (0, S.jsx)("div", {
                      className: l()("RQkBav", { [Fc]: !i }),
                      dangerouslySetInnerHTML: {
                        __html: null != (s = e.description) ? s : "",
                      },
                    }),
                  ],
                }),
                i && (0, S.jsx)(qi.Z, { className: "uzoSuz" }),
              ],
            })
          );
        },
        { t: Hc } = N.I18n,
        Uc = () => {
          const e = (0, F.Qn)();
          return (0, S.jsx)(me.TrackingDataAnchor, {
            targetType: "ServiceDrawer",
            children: (0, S.jsx)("div", {
              className: l()("pmqvjV", "card"),
              children: (0, S.jsxs)("div", {
                className: "HpPP8d",
                children: [
                  (0, S.jsx)("div", {
                    className: "TVuVF3",
                    children: Hc("pdp_pc_ksp_section_title"),
                  }),
                  (0, S.jsx)("div", {
                    className: "Lkcd6o",
                    children: e.map((e, t) =>
                      (0, S.jsx)(Bc, { index: t, service: e }, e.title)
                    ),
                  }),
                ],
              }),
            }),
          });
        },
        Vc = () => {
          const { isMart: e, isOfficial: t } = (0, F.J_)(),
            s = (0, F.PK)(),
            n = "ServiceEntrance",
            i = { service_id: (0, F.Qn)((e) => e.map((e) => e.id)), is_pc: !0 },
            a = (0, me.useTrackImpression)(n, i),
            r = (0, me.useTrackClick)(n, i);
          return s
            ? (0, S.jsx)(zs.dy, {
                onActive: r,
                alignment: "left",
                drawerButton: (0, S.jsxs)("div", {
                  ref: a,
                  className: "_GVeNA",
                  children: [
                    (0, S.jsx)("img", {
                      alt: "service entrance icon",
                      className: "bZMSyU",
                      src: e ? Mc : t ? Oc : Dc,
                    }),
                    (0, S.jsx)("div", { className: "tUagTH", children: s }),
                    (0, S.jsx)(Zc.Z, { className: "LGvA5N" }),
                  ],
                }),
                children: (0, S.jsx)(Uc, {}),
              })
            : null;
        },
        { t: Wc } = N.I18n,
        Qc = () => {
          const e = (0, F.l2)(),
            t = (0, F.PK)();
          return e && t
            ? (0, S.jsxs)("section", {
                className: l()("flex", Za.Z.row),
                children: [
                  (0, S.jsx)("h2", {
                    className: Za.Z.attrLabel,
                    children: Wc("pdp_pc_ksp_section_title"),
                  }),
                  (0, S.jsx)(Vc, {}),
                ],
              })
            : null;
        };
      var Gc = s(79450);
      const { t: qc } = N.I18n;
      function Kc({ text: e }) {
        const t = (0, me.useTrackImpression)("BundleDealBadge");
        return (0, S.jsx)(Gc.Z, {
          labelTitle: qc("bd_label_bundle_deal"),
          ref: t,
          children:
            e && (0, S.jsx)("div", { className: "ZXrGhX", children: e }),
        });
      }
      const { t: $c } = N.I18n;
      function Yc({ text: e }) {
        return (0, S.jsx)(Gc.Z, {
          labelTitle: $c("product_page_label_exclusive_price"),
          children:
            e && (0, S.jsx)("div", { className: "jbM8YZ", children: e }),
        });
      }
      const zc = s.p + "productdetailspage/d7e7e55a43ee9b3167ea.png";
      function Xc() {
        return (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20px",
          height: "22px",
          viewBox: "0 0 20 21",
          children: (0, S.jsx)("path", {
            d: "M 12.925781 20.929688 C 13.941406 20.328125 14.742188 19.5625 15.3125 18.582031 C 17.5625 14.714844 14.972656 9.828125 10.40625 9.363281 C 9.625 9.285156 8.832031 9.324219 8.046875 9.3125 C 7.789062 9.308594 7.722656 9.460938 7.722656 9.683594 C 7.726562 10.476562 7.722656 11.269531 7.722656 12.0625 C 7.722656 12.160156 7.722656 12.257812 7.722656 12.4375 C 5.140625 10.351562 2.609375 8.304688 0.0507812 6.238281 C 2.597656 4.179688 5.128906 2.136719 7.722656 0.0390625 C 7.722656 0.628906 7.722656 1.140625 7.722656 1.648438 C 7.722656 2.015625 7.722656 2.382812 7.722656 2.75 C 7.726562 3.101562 7.792969 3.167969 8.152344 3.171875 C 8.980469 3.171875 9.8125 3.164062 10.640625 3.171875 C 15.03125 3.207031 18.722656 6.046875 19.746094 10.175781 C 20.90625 14.875 17.828125 19.796875 13.003906 20.949219 C 12.996094 20.949219 12.984375 20.945312 12.925781 20.929688 Z M 12.925781 20.929688 ",
            fill: "#2FAC9D",
          }),
        });
      }
      const Jc = s.p + "productdetailspage/b829ee00c5aaf1d7a6ce.svg",
        ed = s.p + "productdetailspage/a6ae1753640cdf79b3ca.svg",
        td = s.p + "productdetailspage/8fc4412966de1aecd179.svg",
        sd = (0, z.Kd)();
      function nd(e) {
        if (e)
          switch (sd) {
            case "MY":
              return Jc;
            case "VN":
              return ed;
          }
        return td;
      }
      const { t: id } = N.I18n,
        ad = (0, z.Kd)();
      function rd({ title: e, message: t }) {
        const s = (0, F.oO)(),
          n = (0, F.aj)(),
          i = (0, F.C0)(),
          a = 1 === i;
        return (s || n) && (0, V.isFeatureEnabled)(W.MR)
          ? null
          : (0, S.jsx)(Gc.Z, {
              labelTitle: id("product_page_label_return"),
              children: (0, S.jsxs)("div", {
                className: "o8k8S4",
                children: [
                  "PH" === ad
                    ? (0, S.jsx)("div", {
                        className: "G3Wedb",
                        children: (0, S.jsx)(Xc, {}),
                      })
                    : (0, S.jsx)("img", {
                        src: (0, V.isFeatureEnabled)(W.MR) ? nd(a) : zc,
                        className: "ikrz0A",
                      }),
                  (0, S.jsx)("div", { className: "Q8e31z", children: e }),
                  (0, S.jsx)("div", { className: "w8_Dsz", children: t }),
                  (0, S.jsx)(yt, {
                    drawerClass: "Qk7Yut",
                    content: id(
                      (2 === i ? "free_return" : "com") + "_info_text"
                    ),
                  }),
                ],
              }),
            });
      }
      function od(e, t) {
        let s = e;
        return (
          Object.entries(t).forEach(([e, t]) => {
            s = s.replace(`{{${e}}}`, t);
          }),
          s
        );
      }
      const ld = s.p + "productdetailspage/8f5c5c892c5aff45f06c.png",
        { t: cd } = N.I18n,
        dd = (0, z.Kd)(),
        ud = (0, pe.se)("VN" !== dd ? 1 : 1e3);
      function pd({ text: e, count: t }) {
        const { coinNo: s, cashUnit: n } = (0, F.z8)((e) => {
          const t = e.spend_cash_unit;
          return {
            coinNo: t ? Math.round(ud / t) : "",
            cashUnit: (0, pe.JL)(ud, 0),
          };
        });
        return (0, S.jsx)(Gc.Z, {
          labelTitle: cd("product_page_label_coins"),
          isCoinLabel: !0,
          children: (0, S.jsxs)("div", {
            className: "CyT4Dj",
            children: [
              (0, S.jsx)("img", {
                src: ld,
                width: 16,
                height: 16,
                className: "rQOiME",
              }),
              (0, S.jsx)("div", {
                className: "tk9RLq",
                dangerouslySetInnerHTML: {
                  __html: od(e, {
                    count: ` <span style="color: #ffae04;">\n            ${(0,
                    pe.w_)(t, !1)}\n          </span>`,
                  }),
                },
              }),
              (0, S.jsx)(yt, {
                content: cd("msg_coin_earn_tooltip", {
                  coinNo: s,
                  cashUnit: n,
                }),
              }),
            ],
          }),
        });
      }
      var hd = s(97843);
      const md = (0, L.Z)({ loader: () => s.e(396).then(s.bind(s, 89915)) }),
        _d = [
          "free_return",
          "exclusive_price_label",
          "bundle_deal",
          "add_on_deal",
          "coin",
          "wholesale",
        ];
      function gd() {
        const e = (0, F.Ri)(),
          t = In("display_sections.coin");
        return (0, S.jsx)(S.Fragment, {
          children: _d.map((s) => {
            if (t)
              return (0, S.jsx)(Nn, {
                className: l()(hd.Z.section, "BsElcS"),
                showPlaceholder: t,
              });
            if (!e || !e[s]) return null;
            const n = e[s];
            return "free_return" === s
              ? (0, S.jsx)(rd, { title: n.title, message: n.message })
              : "exclusive_price_label" === s
              ? (0, S.jsx)(Yc, { text: n.text, color: n.color })
              : "bundle_deal" === s
              ? (0, S.jsx)(Kc, { text: n.text, color: n.color })
              : "add_on_deal" === s
              ? (0, S.jsx)(md, {
                  text: n.text,
                  color: n.color,
                  backgroundColor: n.backgroundColor,
                })
              : "coin" === s
              ? (0, S.jsx)(pd, { text: n.text, count: n.count })
              : null;
          }),
        });
      }
      const fd = "uF9btB";
      var xd = s(69740);
      const vd = (0, V.isFeatureEnabled)(W.B);
      function Cd(e) {
        var t;
        const { item: s, addressDone: n, isShopeeMart: i } = e,
          { credit_insurance_data: a } = s,
          r = In("display_sections.wholesale"),
          o = (0, F.A8)((e) => {
            var t;
            const s =
              null == e || null == (t = e.wholesale) ? void 0 : t.tier_texts;
            return s && s.length > 0
              ? (function (e) {
                  return e
                    .map(({ text: e, price: t }) =>
                      od(e, { price: (0, pe.JL)(t) })
                    )
                    .join(", ");
                })(s)
              : "";
          }),
          c = !(
            !vd ||
            null == a ||
            null == (t = a.insurance_products) ||
            !t.length
          ),
          d = (0, F.bJ)(),
          u = (0, xd.F)(),
          [p] = ao("ruleset", "latam_voucher_ui_pc");
        return (0, S.jsxs)("div", {
          className: "flex flex-column",
          children: [
            !(!s.shop_vouchers || !s.shop_vouchers.length) &&
              (0, S.jsx)(hc, {
                className: "jJ5NSQ",
                containerClassName: l()(
                  Za.Z.row,
                  "hI_RBc",
                  ((h = (0, V.isFeatureEnabled)(W.En)),
                  (m = null == p ? void 0 : p.parameter),
                  (m ? "new_ui" === m : !!h) && "FacMDR")
                ),
                isShopeeMart: i,
                itemShopVouchers: s.shop_vouchers,
              }),
            (0, S.jsx)(gd, {}),
            (0, S.jsx)(Nn, {
              className: l()(Za.Z.row, "HA7c7x"),
              showPlaceholder: r,
              children: (0, S.jsx)(Qa, { item: s, brief: o }),
            }),
            (0, S.jsx)(Ua, {}),
            c && (0, S.jsx)(vc, { insuranceData: a, commonStyleModule: Za.Z }),
            (0, S.jsx)(tc, { item: s, userAddress: d, addressDone: n }),
            (0, S.jsx)(Rc, {}),
            (0, S.jsx)(Qc, {}),
            (0, S.jsx)(Wi.b.Consumer, {
              children: (e) =>
                (0, S.jsx)("div", {
                  className: l()("flex", Za.Z.row, "W5LiQM", {
                    [fd]: u || e.errorModelNotSelected,
                  }),
                  children: (0, S.jsx)(sc.Z, { item: s }),
                }),
            }),
          ],
        });
        var h, m;
      }
      var jd = s(52800),
        bd = s(65930);
      const Nd = s.p + "productdetailspage/29ea5b694ade142991c4.png",
        Id = "kz1LRx",
        yd = "Kdpve_",
        Sd = "lji0M1",
        Td = "u83Maa",
        wd = function (e) {
          return (0, S.jsxs)(
            "svg",
            (0, n.Z)(
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
              {
                children: [
                  (0, S.jsx)("path", {
                    d: "M0 8.77733C0 6.26602 1.86798 4.5 4.51175 4.5C5.87937 4.5 7.00205 5.01088 7.52344 5.92858L5.78791 7.28673C5.48201 6.75588 5.01213 6.44998 4.35828 6.44998C3.22508 6.44998 2.42933 7.34875 2.42933 8.62386C2.42933 9.46062 3.01169 10.022 3.8989 10.022C4.46025 10.022 5.00161 9.78754 5.49147 9.19466L6.91059 10.5518C6.04335 11.6135 4.98164 11.9709 3.66449 11.9709C1.44961 11.9709 0 10.6748 0 8.77628V8.77733Z",
                    fill: "#EE4D2D",
                  }),
                  (0, S.jsx)("path", {
                    d: "M7.44141 8.77733C7.44141 6.2555 9.3199 4.5 11.9426 4.5C14.168 4.5 15.5661 5.81715 15.5661 7.6946C15.5661 10.2164 13.6876 11.9719 11.0649 11.9719C8.8395 11.9719 7.44141 10.6548 7.44141 8.77733ZM13.1379 7.83861C13.1379 7.01132 12.6175 6.44998 11.7398 6.44998C10.5561 6.44998 9.87178 7.46018 9.87178 8.63437C9.87178 9.46167 10.3921 10.023 11.2699 10.023C12.4535 10.023 13.1379 9.0128 13.1379 7.83861Z",
                    fill: "#EE4D2D",
                  }),
                  (0, S.jsx)("path", {
                    d: "M17.1297 4.66309H20.3558C22.6117 4.66309 24.0003 5.81625 24.0003 7.69475C24.0003 10.2166 22.1323 11.8081 19.5296 11.8081H15.7021L17.1307 4.66309H17.1297ZM19.6105 9.93065C20.8867 9.93065 21.57 9.0119 21.57 7.83771C21.57 7.01042 21.0496 6.54158 20.0793 6.54158H19.1606L18.4868 9.93065H19.6095H19.6105Z",
                    fill: "#EE4D2D",
                  }),
                  (0, S.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.6177 13.921C22.6177 13.9209 22.6177 13.9209 22.6177 13.9209H1.18988L0 19.0638H1.19235C1.19235 19.0638 1.19235 19.0638 1.19235 19.0638H22.8102L24.0001 13.921H22.6177Z",
                    fill: "#EE4D2D",
                  }),
                  (0, S.jsx)("path", {
                    d: "M3.53148 17.929C3.33087 17.929 3.15041 17.8915 2.99193 17.8173C2.83346 17.7431 2.70246 17.6414 2.6017 17.5113C2.50002 17.3822 2.4304 17.2292 2.39284 17.0542C2.35528 16.8793 2.3562 16.6933 2.39467 16.4945C2.43406 16.2902 2.50735 16.1015 2.61452 15.9266C2.7217 15.7516 2.85178 15.5996 3.00475 15.4695C3.15773 15.3403 3.32995 15.2377 3.52049 15.1635C3.71102 15.0893 3.90889 15.0518 4.11225 15.0518C4.35683 15.0518 4.56019 15.0948 4.7205 15.1809C4.88172 15.267 5.02188 15.3715 5.14005 15.4933L4.65455 16.0356C4.56935 15.966 4.475 15.9064 4.37241 15.8588C4.26981 15.8112 4.13698 15.7864 3.97301 15.7864C3.87957 15.7864 3.78797 15.802 3.69728 15.8341C3.60659 15.8661 3.52232 15.9119 3.44537 15.9715C3.36842 16.031 3.30155 16.1043 3.24567 16.1904C3.1898 16.2765 3.15041 16.3745 3.12934 16.4854C3.10918 16.587 3.1101 16.6823 3.13117 16.7693C3.15224 16.8564 3.18796 16.9315 3.24018 16.9947C3.29239 17.057 3.3556 17.1064 3.4298 17.1412C3.50491 17.1761 3.58553 17.1935 3.67347 17.1935C3.7724 17.1935 3.86217 17.1843 3.9437 17.1651C4.02431 17.1458 4.09942 17.1229 4.16721 17.0954C4.235 17.068 4.29729 17.0359 4.35408 16.9993C4.41088 16.9626 4.46401 16.9269 4.51439 16.8921L4.78554 17.4298C4.71226 17.4912 4.63164 17.5516 4.54279 17.6112C4.45393 17.6707 4.35775 17.7238 4.25424 17.7706C4.15072 17.8173 4.03805 17.8548 3.91713 17.8842C3.79622 17.9135 3.66797 17.9281 3.53056 17.9281L3.53148 17.929Z",
                    fill: "white",
                  }),
                  (0, S.jsx)("path", {
                    d: "M7.5302 15.0972L7.39738 15.7787H6.19095L6.12042 16.1415L7.29936 16.146L7.16654 16.8276H5.98667L5.91522 17.1949H7.12165L6.98608 17.8938H5.0459L5.58911 15.0972H7.52929H7.5302Z",
                    fill: "white",
                  }),
                  (0, S.jsx)("path", {
                    d: "M7.96698 15.0972H8.70073L8.50195 16.1195L9.52242 15.0972H10.4137L9.1276 16.3384L9.91815 17.8938H9.06623L8.57248 16.8578L8.30958 17.107L8.1566 17.8938H7.42285L7.96606 15.0972H7.96698Z",
                    fill: "white",
                  }),
                  (0, S.jsx)("path", {
                    d: "M11.8742 15.0972H12.608C12.739 15.0972 12.8626 15.1027 12.978 15.1146C13.0935 15.1265 13.2006 15.1494 13.2986 15.1842C13.3967 15.219 13.4874 15.2676 13.5698 15.3308C13.6522 15.393 13.7255 15.4755 13.7906 15.5781C13.862 15.6917 13.9078 15.8291 13.9289 15.9885C13.95 16.1488 13.9435 16.3173 13.9087 16.495C13.8767 16.6608 13.8217 16.8212 13.7457 16.976C13.6687 17.1308 13.5652 17.2728 13.4351 17.4047C13.3371 17.5036 13.2354 17.5851 13.1301 17.6493C13.0248 17.7134 12.9148 17.7638 12.8012 17.8004C12.6877 17.837 12.5704 17.8618 12.4476 17.8746C12.3258 17.8874 12.1976 17.8938 12.0638 17.8938H11.3301L11.8733 15.0972H11.8742ZM12.466 15.8309L12.2076 17.1592H12.3341C12.5704 17.1592 12.7573 17.1079 12.8974 17.0044C13.0367 16.9009 13.1301 16.7314 13.1759 16.495C13.2217 16.2587 13.1961 16.0892 13.098 15.9857C13 15.8822 12.8333 15.8309 12.597 15.8309H12.466Z",
                    fill: "white",
                  }),
                  (0, S.jsx)("path", {
                    d: "M15.1521 17.929C14.9945 17.929 14.8516 17.9043 14.7234 17.8548C14.5942 17.8054 14.4861 17.7339 14.3982 17.6405C14.3103 17.547 14.2443 17.4344 14.2022 17.3015C14.1591 17.1687 14.1472 17.0185 14.1655 16.849C14.1692 16.8142 14.1756 16.7693 14.1829 16.7134C14.1912 16.6585 14.2003 16.5998 14.2104 16.5385C14.2205 16.4771 14.2324 16.4157 14.2443 16.3525C14.2562 16.2902 14.2672 16.2353 14.2764 16.1885L14.4889 15.0957H15.2236L15.011 16.1885C14.9927 16.2847 14.9735 16.3791 14.9561 16.4725C14.9378 16.5659 14.9277 16.6356 14.924 16.6823C14.9084 16.8371 14.9295 16.9617 14.9872 17.056C15.0449 17.1504 15.1475 17.198 15.2959 17.198C15.4443 17.198 15.568 17.1504 15.6578 17.056C15.7475 16.9617 15.8126 16.8398 15.8529 16.6914C15.8684 16.642 15.8849 16.5696 15.9033 16.4753C15.9216 16.3809 15.9399 16.2847 15.9591 16.1885L16.1717 15.0957H16.9063L16.6938 16.1885C16.6846 16.2353 16.6736 16.2884 16.6608 16.3479C16.648 16.4075 16.6343 16.467 16.6214 16.5275C16.6086 16.587 16.5949 16.6438 16.582 16.6979C16.5683 16.7519 16.5564 16.7995 16.5454 16.8398C16.4987 17.0056 16.4309 17.1559 16.342 17.2896C16.2532 17.4234 16.1478 17.5379 16.026 17.6331C15.9042 17.7275 15.7686 17.8008 15.6211 17.8521C15.4727 17.9034 15.317 17.9281 15.1539 17.9281L15.1521 17.929Z",
                    fill: "white",
                  }),
                  (0, S.jsx)("path", {
                    d: "M16.8408 17.8938L17.384 15.0972H18.1709L17.7678 17.1683H18.5547L18.693 17.8938H16.8398H16.8408Z",
                    fill: "white",
                  }),
                  (0, S.jsx)("path", {
                    d: "M19.8582 17.929C19.7006 17.929 19.5577 17.9043 19.4295 17.8548C19.3003 17.8054 19.1922 17.7339 19.1043 17.6405C19.0163 17.547 18.9504 17.4344 18.9082 17.3015C18.8652 17.1687 18.8533 17.0185 18.8716 16.849C18.8752 16.8142 18.8817 16.7693 18.889 16.7134C18.8972 16.6585 18.9064 16.5998 18.9165 16.5385C18.9265 16.4771 18.9385 16.4157 18.9504 16.3525C18.9623 16.2902 18.9733 16.2353 18.9824 16.1885L19.1949 15.0957H19.9296L19.7171 16.1885C19.6988 16.2847 19.6795 16.3791 19.6621 16.4725C19.6438 16.5659 19.6337 16.6356 19.6301 16.6823C19.6145 16.8371 19.6356 16.9617 19.6933 17.056C19.751 17.1504 19.8536 17.198 20.002 17.198C20.1504 17.198 20.274 17.1504 20.3638 17.056C20.4536 16.9617 20.5186 16.8398 20.5589 16.6914C20.5745 16.642 20.591 16.5696 20.6093 16.4753C20.6276 16.3809 20.646 16.2847 20.6652 16.1885L20.8777 15.0957H21.6124L21.3999 16.1885C21.3907 16.2353 21.3797 16.2884 21.3669 16.3479C21.3541 16.4075 21.3403 16.467 21.3275 16.5275C21.3147 16.587 21.3009 16.6438 21.2881 16.6979C21.2744 16.7519 21.2624 16.7995 21.2515 16.8398C21.2047 17.0056 21.137 17.1559 21.0481 17.2896C20.9592 17.4234 20.8539 17.5379 20.7321 17.6331C20.6102 17.7275 20.4747 17.8008 20.3272 17.8521C20.1788 17.9034 20.023 17.9281 19.86 17.9281L19.8582 17.929Z",
                    fill: "white",
                  }),
                ],
              }
            )
          );
        };
      var kd = s(96008),
        Ed = s(49214),
        Pd = s(8487);
      const Ad = {
          section: "fqmTt_",
          itemContainer: "Nm4HEX",
          drawer: "_7dS96",
          item: "XklnWA",
          invisible: "_W1kLr",
          itemImg: "oZtSFx",
        },
        { t: Ld } = N.I18n;
      function Rd({ useTransifyAsFallback: e = !0, keySellingPoints: t }) {
        const s = Array.isArray(t)
            ? t
            : e
            ? (0, Ed.BW)().map(({ Icon: e, textLabel: t, descLabel: s }) => ({
                Icon: e,
                tagTitle: t,
                tagText: s,
              }))
            : [],
          n = (0, i.useRef)(null),
          [a, r] = (function (
            e,
            { containerHorizontalPadding: t, kspArray: s, isKspDifferent: n }
          ) {
            const a = ((e, t) => {
                const s = (0, i.useRef)(t);
                return (
                  (0, i.useEffect)(() => {
                    s.current = e;
                  }, [e]),
                  s.current
                );
              })(s, []),
              [r, o] = (0, i.useState)([]),
              l = s.map((e, t) => n(e, a[t])).some((e) => e);
            return (
              (0, i.useEffect)(() => {
                const s = e.current;
                if (l && s) {
                  const e = s.getBoundingClientRect().width - (t || 0),
                    n = [];
                  for (let t = 0; t < s.children.length; ++t)
                    n.push(s.children[t].getBoundingClientRect().width);
                  if (!(n.reduce((e, t) => e + t, 0) > e)) return void o([]);
                  const i = n.map((t) => t * n.length > e),
                    a = i.filter((e) => e).length,
                    r = i.reduce((e, t, s) => e + (t ? 0 : n[s]), 0);
                  o(
                    i.map((t) => ({
                      maxWidth: t ? `${((e - r) / a).toFixed(2)}px` : "none",
                    }))
                  );
                }
              }, [e, s.length, t, l]),
              [l, l ? [] : r]
            );
          })(n, {
            isKspDifferent: (e, t) =>
              !((!e && !t) || (e && t && e.tagTitle === t.tagTitle)),
            kspArray: s,
            containerHorizontalPadding: Dd,
          });
        return (o = s) && 0 !== o.length
          ? (0, S.jsx)("div", {
              className: Ad.section,
              ref: n,
              children: s.map(
                ({ Icon: e, imageHash: t, tagTitle: s, tagText: n }, i) =>
                  (0, S.jsx)(
                    "div",
                    {
                      className: l()(
                        Ad.itemContainer,
                        a ? Ad.invisible : void 0
                      ),
                      children: (0, S.jsx)(zs.ve, {
                        content: (0, S.jsxs)("div", {
                          className: Ad.item,
                          style: r[i],
                          children: [
                            t
                              ? (0, S.jsx)("img", {
                                  className: Ad.itemImg,
                                  src: (0, Pd.R)(t),
                                })
                              : e
                              ? (0, S.jsx)(e, { className: Ad.itemImg })
                              : null,
                            (0, S.jsx)("div", {
                              className: Ad.itemTagTitle,
                              children: Ld(s),
                            }),
                          ],
                        }),
                        showContent: (0, S.jsx)("div", {
                          className: ln,
                          dangerouslySetInnerHTML: { __html: Ld(n) },
                        }),
                        showPosition: "center",
                      }),
                    },
                    i
                  )
              ),
            })
          : null;
        var o;
      }
      const Dd = 24;
      var Md = s(1396);
      class Od extends a().Component {
        constructor(e) {
          super(e),
            (this.universalDataFetch = this.universalDataFetch.bind(this));
        }
        async universalDataFetch() {
          await this.props.dataFetching();
        }
        componentDidMount() {
          this.universalDataFetch();
        }
        render() {
          return (0, S.jsx)(Zd, {});
        }
      }
      function Zd() {
        const e = (0, V.isFeatureEnabled)(W.iD, !1),
          t = (0, u.useSelector)((e) => (0, kd.UO)(Fd(e))),
          s = e ? Bd(t.slice(0, 3)) : void 0;
        return e
          ? (0, S.jsx)(Rd, { keySellingPoints: s, useTransifyAsFallback: !1 })
          : (0, S.jsx)(Rd, {});
      }
      const Fd = (e) => e[kd.LZ],
        Bd = (e) =>
          e.map(({ text: e, icon: t, title: s }) => ({
            imageHash: (0, ue.Jn)(t),
            tagTitle: s,
            tagText: e,
          })),
        Hd = (0, u.connect)(null, {
          dataFetching: function () {
            return async function (e) {
              (0, V.isFeatureEnabled)(W.iD, !1) &&
                (await e((0, kd.Kq)({ getState: Fd, skipApiCallIfFresh: !0 })));
            };
          },
        }),
        Ud = a().memo(
          (0, h.compose)((0, N.withI18nCollections)([Md.Am]), Hd)(Od)
        );
      let Vd = (function (e) {
        return (
          (e.SEVENDAYRETURN = "7_day_return"),
          (e.FIFTEENDAYRETURN = "15_day_return"),
          (e.THIRTYDAYRETURN = "30_day_return"),
          (e.AUTHENTIC = "authentic"),
          (e.FREESHIPPING = "free_shipping"),
          (e.SPECIALDEALS = "special_deals"),
          e
        );
      })({});
      const Wd = s.p + "productdetailspage/2b0c3538f050999fef02.png",
        Qd = s.p + "productdetailspage/2b0c3538f050999fef02.png",
        Gd = s.p + "productdetailspage/2b0c3538f050999fef02.png",
        qd = s.p + "productdetailspage/2b0c3538f050999fef02.png",
        Kd = s.p + "productdetailspage/fdba98d136b036c4cac4.png",
        $d = s.p + "productdetailspage/437f0ea51f2e59a271cd.png",
        Yd = s.p + "productdetailspage/437f0ea51f2e59a271cd.png",
        zd = s.p + "productdetailspage/437f0ea51f2e59a271cd.png",
        Xd = s.p + "productdetailspage/1fdbbc283dceda852868.png",
        Jd = s.p + "productdetailspage/3df1c004ffaa246ee0d9.svg",
        eu = s.p + "productdetailspage/ea18703c217c528ec51a.svg",
        tu = s.p + "productdetailspage/7077c70ab0445eaaf96a.png",
        su = s.p + "productdetailspage/7077c70ab0445eaaf96a.png",
        nu = s.p + "productdetailspage/7077c70ab0445eaaf96a.png",
        iu = s.p + "productdetailspage/f08304e041b02a8aeb00.png",
        au = s.p + "productdetailspage/071dae3ae5c535e3f60e.png",
        ru = s.p + "productdetailspage/3787d2ad9f64600c4504.svg",
        ou = s.p + "productdetailspage/868c7560821feeac43db.svg",
        lu = s.p + "productdetailspage/f2da642139c2d7368490.svg",
        cu = (0, z.Kd)(),
        { t: du } = ((0, z.Kd)(), N.I18n),
        { t: uu } = N.I18n;
      function pu({ sellingPoints: e }) {
        return (0, S.jsx)("div", {
          className: Ad.section,
          children: e.map(({ Icon: e, tagTitle: t, tagText: s }, n) =>
            (0, S.jsx)(
              "div",
              {
                className: Ad.itemContainer,
                children: (0, S.jsx)(zs.ve, {
                  content: (0, S.jsxs)("div", {
                    className: Ad.item,
                    children: [
                      (0, S.jsx)(e, { className: Ad.itemImg }),
                      (0, S.jsx)("div", { children: uu(t) }),
                    ],
                  }),
                  showContent: (0, S.jsx)("div", {
                    className: ln,
                    dangerouslySetInnerHTML: { __html: uu(s) },
                  }),
                  showPosition: "center",
                  extraClasses: Ad.drawer,
                }),
              },
              n
            )
          ),
        });
      }
      function hu() {
        const e = (() => {
            const e = (0, F.aj)(),
              t = (0, F.Fk)(),
              s = (0, F.C0)();
            if (e) return null;
            const i = [];
            return (
              (function ({
                isChangeOfMind: e = !1,
                isShopeeChoice: t = !1,
              } = {}) {
                const s = (0, z.Kd)();
                let n = [
                  { asset: Gd, type: Vd.FIFTEENDAYRETURN },
                  { asset: $d, type: Vd.FREESHIPPING },
                  { asset: tu, type: Vd.AUTHENTIC },
                ];
                switch (s) {
                  case "ID":
                    n = [
                      { asset: Wd, type: Vd.FIFTEENDAYRETURN },
                      { asset: su, type: Vd.AUTHENTIC },
                      { asset: Yd, type: Vd.FREESHIPPING },
                    ];
                    break;
                  case "MY":
                    n = [
                      { asset: nu, type: Vd.AUTHENTIC },
                      { asset: e ? eu : qd, type: Vd.FIFTEENDAYRETURN },
                      { asset: zd, type: Vd.FREESHIPPING },
                    ];
                    break;
                  case "PH":
                    n = [
                      { asset: su, type: Vd.AUTHENTIC },
                      { asset: Qd, type: Vd.SEVENDAYRETURN },
                      { asset: zd, type: Vd.FREESHIPPING },
                    ];
                    break;
                  case "SG":
                    n = [
                      { asset: Gd, type: Vd.FIFTEENDAYRETURN },
                      { asset: su, type: Vd.AUTHENTIC },
                      { asset: Yd, type: Vd.FREESHIPPING },
                    ];
                    break;
                  case "TH":
                    n = [
                      { asset: au, type: Vd.SPECIALDEALS },
                      { asset: su, type: Vd.AUTHENTIC },
                      { asset: Gd, type: Vd.FIFTEENDAYRETURN },
                    ];
                    break;
                  case "VN":
                    n = [
                      { asset: e ? Jd : Gd, type: Vd.FIFTEENDAYRETURN },
                      { asset: tu, type: Vd.AUTHENTIC },
                      { asset: $d, type: Vd.FREESHIPPING },
                    ];
                    break;
                  case "PL":
                    n = [
                      { asset: su, type: Vd.AUTHENTIC },
                      { asset: Gd, type: Vd.THIRTYDAYRETURN },
                    ];
                    break;
                  case "TW":
                    n = [
                      { asset: Kd, type: Vd.FIFTEENDAYRETURN },
                      { asset: Xd, type: Vd.FREESHIPPING },
                      { asset: iu, type: Vd.AUTHENTIC },
                    ];
                }
                if (t && "TW" !== s)
                  for (const i of n)
                    i.type === Vd.AUTHENTIC
                      ? (i.asset = lu)
                      : i.type === Vd.FREESHIPPING
                      ? (i.asset = ou)
                      : i.type.includes("return") && (i.asset = ru);
                return n;
              })({ isChangeOfMind: 1 === s, isShopeeChoice: e }).forEach(
                ({ asset: e, type: a }, r) => {
                  const o = a.includes("return");
                  if (!t && (0, V.isFeatureEnabled)(W.MR) && o) return;
                  const l = `${r + 1}${
                    "TW" === cu ? "" : `_${cu.toLowerCase()}`
                  }`;
                  let c = `Label_selling_point_${l}`,
                    d = `Msg_selling_point_${l}`;
                  if (t && o)
                    switch (s) {
                      case 1:
                        (c = "pdp_before_revamp_mall_ksp_change_of_mind"),
                          (d = "com_info_text");
                        break;
                      case 2:
                        (c = "pdp_before_revamp_mall_ksp_free_return"),
                          (d = "free_return_info_text");
                    }
                  i.push({
                    Icon: function (t) {
                      return (0, S.jsx)("img", (0, n.Z)({}, t, { src: e }));
                    },
                    tagTitle: c,
                    tagText: d,
                    type: a,
                  });
                }
              ),
              (function (e) {
                if ((0, V.isFeatureEnabled)(W.MR)) {
                  const t = e.findIndex((e) => e.type.includes("return"));
                  t > 0 && e.unshift(e.splice(t, 1)[0]);
                }
              })(i),
              i
            );
          })(),
          t = Ai(),
          s = (0, F.aj)();
        if (s && (0, V.isFeatureEnabled)(W.Z0)) return null;
        const i =
          s && t
            ? null == t
              ? void 0
              : t
                  .slice(0, 3)
                  .map((e) => ({
                    tagTitle: e.name,
                    tagText: e.description,
                    Icon: (t) =>
                      (0, S.jsx)(
                        "img",
                        (0, n.Z)({}, t, {
                          alt: "shopee choice ksp icon",
                          src: e.icon,
                        })
                      ),
                  }))
            : e;
        return i ? (0, S.jsx)(pu, { sellingPoints: i }) : null;
      }
      const { t: mu } = N.I18n;
      function _u({ className: e }) {
        const t = (0, F.f3)(),
          { isLoggedIn: s, accountInfo: n } = (0, H.Sq)(),
          i = (0, F.aj)(),
          a = (0, F.l2)(),
          r = {
            itemId: null == t ? void 0 : t.item_id,
            shopId: null == t ? void 0 : t.shop_id,
          },
          o = (0, me.useTrackImpression)("ReturnOnSpot", r),
          c = (0, me.useTrackClick)("ReturnOnSpot", r),
          d = (0, me.useTrackImpression)("MartGuaranteeInfo", r),
          p = null == t ? void 0 : t.is_official_shop,
          h = (null == t ? void 0 : t.is_mart) && (0, V.isFeatureEnabled)(W.B0),
          m = (() => {
            var e;
            const t = (e) => null != e,
              s = (0, F.f3)(),
              n = (0, F.zi)(),
              i = (0, u.useSelector)((e) =>
                t(null == s ? void 0 : s.item_id)
                  ? sr(e.item, null == s ? void 0 : s.item_id)
                  : null
              ),
              a = t(i),
              r =
                null == i || null == (e = i.product_info)
                  ? void 0
                  : e.return_on_spot;
            return t(a ? r : n);
          })(),
          _ = !((!(0, bd.cB)() && s && n && (0, bd.Bl)(n)) || p || i),
          g = (0, V.isFeatureEnabled)(W.C$) && (i || p || h);
        return a
          ? null
          : (0, S.jsxs)("div", {
              className: l()("gIL8h3", e),
              children: [
                m &&
                  (0, S.jsxs)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://shopee.co.id/m/tentang-cod-cekdulu",
                    ref: o,
                    onClick: c,
                    className: Id,
                    children: [
                      (0, S.jsx)(wd, { className: yd }),
                      (0, S.jsx)("span", {
                        className: Sd,
                        children: mu("pdp_ros_banner_title"),
                      }),
                      (0, S.jsx)("span", {
                        className: Td,
                        children: mu("pdp_ros_banner_subtitle"),
                      }),
                    ],
                  }),
                _ &&
                  (0, S.jsxs)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: bd.qB,
                    className: Id,
                    children: [
                      (0, S.jsx)("img", { src: Nd, className: yd }),
                      (0, S.jsx)("span", {
                        className: Sd,
                        children: mu("product_page_label_shopee_guarantee"),
                      }),
                      (0, S.jsx)("span", {
                        className: Td,
                        children: mu("product_page_txt_shopee_guarantee"),
                      }),
                    ],
                  }),
                g &&
                  (0, S.jsx)("div", {
                    ref: d,
                    children: h
                      ? (0, S.jsx)(Ud, {})
                      : p || i
                      ? (0, S.jsx)(hu, {})
                      : null,
                  }),
              ],
            });
      }
      var gu = s(17572);
      const fu = function () {
        return (0, S.jsxs)("div", {
          className: l()("flex-auto flex-column ", gu.Z.briefRightContent),
          style: { height: 570 },
          children: [
            (0, S.jsx)("div", {
              className: "skeleton skeleton-full skeleton-line",
            }),
            (0, S.jsx)("div", {
              className: "skeleton skeleton-medium skeleton-line",
              style: { marginTop: 11 },
            }),
            (0, S.jsx)("div", {
              className: "skeleton skeleton-full",
              style: { margin: "30px 0 30px", height: 200 },
            }),
          ],
        });
      };
      var xu = s(58323),
        vu = s(49437),
        Cu = s(98410);
      const ju = s.p + "productdetailspage/5a5775ef7868b6eed3f7.png",
        bu = s.p + "productdetailspage/9a6e4788ae52fb4a738a.png",
        Nu = s.p + "productdetailspage/994e25ef995d4f2e365e.png",
        Iu = {
          ID: { link: "https://shopee.co.id/m/Prescription-TnC", logo: ju },
          PH: { link: "https://shopee.ph/m/prescription-tnc", logo: bu },
        },
        yu = (0, z.Kd)(),
        { t: Su } = N.I18n,
        Tu = Iu[yu],
        wu = null == Tu ? void 0 : Tu.link,
        ku = null == Tu ? void 0 : Tu.logo,
        Eu = ({ className: e, openInNewTab: t, shopId: s, item: n }) => {
          const i = null == n ? void 0 : n.itemid,
            a = (0, me.useTrackImpression)(
              "PrescriptionSection",
              { itemId: i, shopId: s },
              [i, s]
            ),
            r = (0, me.useTrackClick)("PrescriptionSection", {
              itemId: i,
              shopId: s,
            });
          return null != n && n.is_prescription_item && s
            ? (0, S.jsxs)("a", {
                ref: a,
                className: l()("w7ks6r", e),
                href: wu,
                target: t ? "_blank" : "_self",
                rel: t ? "noreferrer" : void 0,
                onClick: () => {
                  window.open(wu, t ? "Prescription_Details" : "_self"), r();
                },
                children: [
                  (0, S.jsx)("img", { src: ku, className: "jjGWyx" }),
                  (0, S.jsxs)("div", {
                    className: "xccTfr",
                    children: [
                      (0, S.jsx)("div", {
                        className: "SlwkHx",
                        children: Su("pdp_prescription_title"),
                      }),
                      (0, S.jsx)("div", {
                        className: "PLjDaD",
                        children: Su("pdp_prescription_content"),
                      }),
                    ],
                  }),
                  (0, S.jsx)("img", { src: Nu, className: "yseyPt" }),
                ],
              })
            : null;
        };
      s(84640), i.Component, s.p;
      const Pu = "rgba(0,0,0,0.87)";
      function Au(e) {
        const { attributes: t, template: s } = e;
        if (null == t || !t.length) return [s];
        const n = [];
        let i = s;
        for (; -1 !== i.indexOf("{"); ) {
          const e = i.indexOf("{");
          if (e < -1) break;
          e && n.push(i.substring(0, e));
          const s = i.indexOf("}"),
            a = i.substring(e + 1, s),
            r = t.find((e) => e.key === a);
          r ? n.push(r) : n.push(i.substring(e, s + 1)),
            (i = i.substring(s + 1));
        }
        return i && n.push(i), n;
      }
      const Lu = function ({ className: e, templateTexts: t }) {
        var s, n;
        return (0, S.jsx)("div", {
          className: l()("RKYouk", e),
          style: {
            color:
              null != (s = null != (n = t.text_color) ? n : t.text_hex_color)
                ? s
                : Pu,
          },
          children: Au(t).map((e) => {
            var t, s;
            if ("string" == typeof e) return e.replace(/ |\t/g, " ");
            const {
                format: n,
                key: i,
                text_color: a,
                text_hex_color: r,
                type: o,
                value: l,
              } = e,
              c = {
                color: null != (t = null != a ? a : r) ? t : Pu,
                fontWeight:
                  null != n && n.includes(Dn.aZ.TEXT_FORMAT_BOLD) ? 500 : 400,
              };
            return (0, S.jsx)(
              "span",
              {
                style: c,
                children:
                  o === Dn.GC.TEXT_REPLACEMENT_CURRENCY
                    ? (0, pe.JL)(null != (s = l.value_int) ? s : 0)
                    : l.value_str,
              },
              i
            );
          }),
        });
      };
      var Ru = s(54878),
        Du = s(33339),
        Mu = s(46413),
        Ou = s(62553),
        Zu = s(79843),
        Fu = s(7756),
        Bu = s(14524),
        Hu = s(68737);
      function Uu(e) {
        return N.FetchUtils.post("/api/v1/tradein_drawer/get_page_data", e);
      }
      let Vu = (function (e) {
          return (
            (e[(e.PAGE_TYPE_DYNAMIC_QUESTIONNAIRE = 0)] =
              "PAGE_TYPE_DYNAMIC_QUESTIONNAIRE"),
            (e[(e.PAGE_TYPE_QUESTIONNAIRE_ITEM_LIST = 1)] =
              "PAGE_TYPE_QUESTIONNAIRE_ITEM_LIST"),
            (e[(e.PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION = 2)] =
              "PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION"),
            (e[(e.PAGE_TYPE_POST_QUESTIONNAIRE_ATC = 3)] =
              "PAGE_TYPE_POST_QUESTIONNAIRE_ATC"),
            (e[(e.PAGE_TYPE_POST_QUESTIONNAIRE_QUOTATION_SUMMARY = 4)] =
              "PAGE_TYPE_POST_QUESTIONNAIRE_QUOTATION_SUMMARY"),
            e
          );
        })({}),
        Wu = (function (e) {
          return (
            (e[(e.WITHOUT_NEW_ITEM = 1)] = "WITHOUT_NEW_ITEM"),
            (e[(e.WITH_NEW_ITEM = 2)] = "WITH_NEW_ITEM"),
            e
          );
        })({}),
        Qu = (function (e) {
          return (
            (e[(e.STRING = 1)] = "STRING"), (e[(e.PRICE = 2)] = "PRICE"), e
          );
        })({}),
        Gu = (function (e) {
          return (
            (e[(e.ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE = 1672100009)] =
              "ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE"),
            (e[
              (e.ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE_PARTNER_ITEM_UNAVAILABLE = 1672100015)
            ] =
              "ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE_PARTNER_ITEM_UNAVAILABLE"),
            (e[
              (e.ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE_PARTNER_PRICE_UNAVAILABLE = 1672100018)
            ] =
              "ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE_PARTNER_PRICE_UNAVAILABLE"),
            e
          );
        })({});
      const qu = (e) => {
          var t, s;
          const i = e.error,
            a = e.page_title,
            r = e.selected_item_key,
            o = e.question_list[0].options,
            l =
              (null == o
                ? void 0
                : o.reduce((e, t) => {
                    var s;
                    const i =
                        null == t || null == (s = t.tags)
                          ? void 0
                          : s.find((e) => "brand" === e.name),
                      a = (null == i ? void 0 : i.value) || "";
                    return t
                      ? (0, n.Z)({}, e, { [a]: [...(e[a] || []), t] })
                      : e;
                  }, {})) || {},
            c =
              null == (t = e.question_list[0].option_filter_info)
                ? void 0
                : t.find((e) => "brand" === e.option_filter_tag),
            d = ((null == c ? void 0 : c.select_bar_options) || []).reduce(
              (e, t) =>
                null != t && t.option_key
                  ? (0, n.Z)({}, e, {
                      [null == t ? void 0 : t.option_key]: (0, n.Z)({}, t, {
                        options: l[null == t ? void 0 : t.option_key],
                      }),
                    })
                  : e,
              {}
            ),
            u =
              null == (s = e.question_list[0]) ||
              null == (s = s.option_filter_info)
                ? void 0
                : s[0].text_bar_hint_text;
          return {
            error: i,
            pageTitle: a,
            preSelectedDeviceKey: r,
            questionKey: e.question_list[0].question_key,
            brandFiltersMap: d,
            options: o,
            searchbarPlaceholder: u,
          };
        },
        Ku = (e) => {
          const t = e.error,
            s = e.page_title,
            n = e.question_list.filter((e) => {
              var t;
              return null == (t = e.option_ext_info)
                ? void 0
                : t.radio_required;
            }).length,
            i = e.question_list,
            a = i.reduce(
              (e, t) => (
                t.question_key &&
                  (e[t.question_key] = t.selected_option_keys || []),
                e
              ),
              {}
            );
          return {
            error: t,
            pageTitle: s,
            numCompulsoryQuestions: n,
            questionList: i,
            preSelectedResponses: a,
            helpBannerData: e.help_banner,
            tradeinDeviceData: e.tradein_product_card_info,
          };
        },
        $u = (e) => {
          var t, s, n;
          return {
            error: e.error,
            pageTitle: e.page_title,
            sectionTitle: e.section_title,
            finePrints:
              (null == (t = e.fine_print_data) ? void 0 : t.fine_prints) || [],
            termsAndConditions: e.terms_and_conditions || {},
            tradeinProductCardInfo: e.tradein_product_card_info || {},
            paymentBreakdowns:
              (null == (s = e.payment_breakdown_data)
                ? void 0
                : s.payment_breakdowns) || [],
            finalPrice:
              null == (n = e.payment_breakdown_data) ? void 0 : n.final_price,
          };
        };
      var Yu = s(89575);
      const zu = a().createContext({ init: () => {}, showMiniToast: () => {} }),
        Xu = i.lazy(() =>
          Promise.all([s.e(7861), s.e(5453), s.e(377)]).then(s.bind(s, 29891))
        );
      let Ju = null,
        ep = [];
      const tp = ({ children: e, zIndex: t = 1e3, bottom: s }) => {
        const [a, r] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)([]),
          c = (0, i.useCallback)(() => {
            r(!0);
          }, [r]),
          d = (0, i.useCallback)(
            (e) => {
              (0, Yu.Z)() && (c(), l((t) => [...t, (0, n.Z)({}, e)]));
            },
            [l, c]
          );
        return (
          (0, i.useEffect)(
            () => (
              (Ju = d),
              ep.forEach((e) => d(e)),
              (ep = []),
              () => {
                Ju = null;
              }
            ),
            [d]
          ),
          (0, S.jsxs)(zu.Provider, {
            value: { init: c, showMiniToast: d },
            children: [
              a &&
                (0, S.jsx)(i.Suspense, {
                  fallback: null,
                  children: (0, S.jsx)(Xu, {
                    toastQueue: o,
                    setToastQueue: l,
                    zIndex: t,
                    bottom: s,
                  }),
                }),
              e,
            ],
          })
        );
      };
      var sp = s(27454),
        np = s(64444);
      const ip = function () {
          return (0, S.jsx)("div", {
            className: "Sw1ASv",
            children: (0, S.jsx)(np.Z, {}),
          });
        },
        { t: ap } = N.I18n;
      function rp() {
        return (0, S.jsxs)("svg", {
          width: "121",
          height: "121",
          viewBox: "0 0 121 121",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, S.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M81 75.5C91.2173 75.5 99.5 67.2173 99.5 57C99.5 46.7827 91.2173 38.5 81 38.5C70.7827 38.5 62.5 46.7827 62.5 57C62.5 67.2173 70.7827 75.5 81 75.5Z",
              fill: "#E8E8E8",
            }),
            (0, S.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.5 75.5C7.70914 75.5 9.5 73.7091 9.5 71.5C9.5 69.2909 7.70914 67.5 5.5 67.5C3.29086 67.5 1.5 69.2909 1.5 71.5C1.5 73.7091 3.29086 75.5 5.5 75.5Z",
              stroke: "#E8E8E8",
              strokeWidth: "2",
            }),
            (0, S.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M110.5 40.5C109.948 40.5 109.5 40.9477 109.5 41.5V44.5H106.5C105.948 44.5 105.5 44.9477 105.5 45.5C105.5 46.0523 105.948 46.5 106.5 46.5H109.5V49.5C109.5 50.0523 109.948 50.5 110.5 50.5C111.052 50.5 111.5 50.0523 111.5 49.5V46.5H114.5C115.052 46.5 115.5 46.0523 115.5 45.5C115.5 44.9477 115.052 44.5 114.5 44.5H111.5V41.5C111.5 40.9477 111.052 40.5 110.5 40.5Z",
              fill: "#E8E8E8",
            }),
            (0, S.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.5 15.5C17.9477 15.5 17.5 15.9477 17.5 16.5V19.5H14.5C13.9477 19.5 13.5 19.9477 13.5 20.5C13.5 21.0523 13.9477 21.5 14.5 21.5H17.5V24.5C17.5 25.0523 17.9477 25.5 18.5 25.5C19.0523 25.5 19.5 25.0523 19.5 24.5V21.5H22.5C23.0523 21.5 23.5 21.0523 23.5 20.5C23.5 19.9477 23.0523 19.5 22.5 19.5H19.5V16.5C19.5 15.9477 19.0523 15.5 18.5 15.5Z",
              fill: "#E8E8E8",
            }),
            (0, S.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M46.5 37.5V19.5C46.5 18.9477 46.9477 18.5 47.5 18.5H85.5C87.1569 18.5 88.5 19.8431 88.5 21.5V30.9347C87.8476 30.6297 87.1805 30.3509 86.5 30.0998V21.5C86.5 20.9477 86.0523 20.5 85.5 20.5H48.5V37.5C48.5 40.2614 46.2614 42.5 43.5 42.5H25.5V98.5C25.5 99.0523 25.9477 99.5 26.5 99.5H85.5C86.0523 99.5 86.5 99.0523 86.5 98.5V78.9002C87.1805 78.6491 87.8476 78.3703 88.5 78.0653V98.5C88.5 100.157 87.1569 101.5 85.5 101.5H26.5C24.8431 101.5 23.5 100.157 23.5 98.5V41.5C23.5 40.9477 23.9477 40.5 24.5 40.5H43.5C45.1569 40.5 46.5 39.1569 46.5 37.5Z",
              fill: "#BDBDBD",
            }),
            (0, S.jsx)("path", {
              d: "M47.4998 19.5L24.4998 41.5",
              stroke: "#BDBDBD",
              strokeWidth: "2",
            }),
            (0, S.jsx)("rect", {
              x: "34.5",
              y: "69.5",
              width: "22",
              height: "2",
              rx: "1",
              fill: "#BDBDBD",
            }),
            (0, S.jsx)("rect", {
              x: "34.5",
              y: "77.5",
              width: "44",
              height: "2",
              rx: "1",
              fill: "#BDBDBD",
            }),
            (0, S.jsx)("rect", {
              x: "34.5",
              y: "85.5",
              width: "44",
              height: "2",
              rx: "1",
              fill: "#BDBDBD",
            }),
            (0, S.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M88.1455 64.4129C95.416 57.633 95.8137 46.243 89.0339 38.9725C82.2541 31.7021 70.864 31.3043 63.5936 38.0841C56.3231 44.864 55.9253 56.254 62.7052 63.5245C69.485 70.795 80.875 71.1927 88.1455 64.4129Z",
              stroke: "#BDBDBD",
              strokeWidth: "2",
            }),
            (0, S.jsx)("path", {
              d: "M87.7724 46.0723C87.1913 44.8438 86.4135 43.6829 85.4371 42.6359C83.605 40.6712 81.324 39.3756 78.9003 38.76",
              stroke: "#BDBDBD",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, S.jsx)("rect", {
              x: "88.2866",
              y: "68.1902",
              width: "4",
              height: "24",
              rx: "2",
              transform: "rotate(-43 88.2866 68.1902)",
              fill: "#BDBDBD",
            }),
            (0, S.jsx)("rect", {
              x: "86.9717",
              y: "65.3141",
              width: "2",
              height: "8",
              rx: "1",
              transform: "rotate(-43 86.9717 65.3141)",
              fill: "#BDBDBD",
            }),
          ],
        });
      }
      const op = function ({ subTitle: e }) {
        return (0, S.jsxs)("div", {
          className: "_wpFeY",
          children: [
            (0, S.jsx)(rp, {}),
            (0, S.jsx)("div", {
              className: "lZEKtG",
              children: ap(
                "label_vas_tradein_drawer_device_selection_search_empty_title"
              ),
            }),
            e ? (0, S.jsx)("div", { className: "wWD97X", children: e }) : null,
          ],
        });
      };
      var lp = s(95904),
        cp = s(87787),
        dp = s(48154),
        up = s(93217),
        pp = s(68163);
      const hp = "rgGuJU",
        { t: mp } = N.I18n,
        _p = (e) => {
          const [t, s] = i.useState(""),
            [n, a] = i.useState(""),
            { data: r, isLoading: o } =
              ((c = e.questionnaireId),
              (d = qu),
              (0, Hu.a)({
                queryKey: ["questionnaire", "device"],
                queryFn: async () =>
                  Uu({
                    questionnaire_id: c,
                    page_type: Vu.PAGE_TYPE_QUESTIONNAIRE_ITEM_LIST,
                  }),
                select: d,
              }));
          var c, d;
          const u = e.setSelectedDeviceKey;
          i.useEffect(() => {
            null != r && r.preSelectedDeviceKey && u(r.preSelectedDeviceKey);
          }, [null == r ? void 0 : r.preSelectedDeviceKey, u]);
          const p = i.useMemo(() => {
              var e, s;
              return (
                (null ==
                (e =
                  n && !t
                    ? null == r || null == (s = r.brandFiltersMap[n])
                      ? void 0
                      : s.options
                    : null == r
                    ? void 0
                    : r.options)
                  ? void 0
                  : e
                      .filter((e) => {
                        var s;
                        return (
                          !t ||
                          (null == e || null == (s = e.option_text)
                            ? void 0
                            : s
                                .trim()
                                .toLowerCase()
                                .includes(t.trim().toLowerCase()))
                        );
                      })
                      .map((e) =>
                        null != e && e.option_key && null != e && e.option_text
                          ? (0, S.jsx)(
                              "div",
                              {
                                className: "u2yaoJ",
                                children: (0, S.jsx)(dp.Z, {
                                  id: e.option_key,
                                  value: e.option_key,
                                  children: e.option_text,
                                }),
                              },
                              e.option_key
                            )
                          : null
                      )) || []
              );
            }, [
              null == r ? void 0 : r.brandFiltersMap,
              null == r ? void 0 : r.options,
              t,
              n,
            ]),
            h = i.useMemo(
              () =>
                Object.entries(
                  (null == r ? void 0 : r.brandFiltersMap) || []
                ).map(([e, t]) => {
                  const s = n === e;
                  return (0, S.jsxs)(
                    "div",
                    {
                      className: l()("PZA6NZ", { [hp]: s }),
                      onClick: () => a(s ? "" : e),
                      children: [
                        (0, S.jsx)(pp.Z, {
                          fileId: t.logo_link,
                          className: "SNRn_F",
                          height: 40,
                          width: 40,
                        }),
                        (0, S.jsx)("div", { className: "f2KtsN", children: e }),
                      ],
                    },
                    e
                  );
                }),
              [null == r ? void 0 : r.brandFiltersMap, n]
            ),
            m = (0, me.useTrackClick)("CloseButton", {
              step: Vu.PAGE_TYPE_QUESTIONNAIRE_ITEM_LIST,
            }),
            _ = (null == r ? void 0 : r.pageTitle) || "";
          return (
            i.useEffect(() => {
              var t, s, n, i, a, r, o, l;
              _
                ? (null == (n = e.drawerHooks) || n.setDisplayDrawerTitle(!0),
                  null == (i = e.drawerHooks) || i.setDrawerTitle(_),
                  null == (a = e.drawerHooks) || a.setOnClickBack({ fn: null }),
                  null == (r = e.drawerHooks) ||
                    r.setOnClickClose({
                      fn: () => {
                        m();
                      },
                    }),
                  null == (o = e.drawerHooks) ||
                    o.setOnClickOutside({
                      fn: () => {
                        m();
                      },
                    }))
                : null == (l = e.drawerHooks) || l.setDisplayDrawerTitle(!1),
                null == (t = e.drawerHooks) || t.setTermsAndConditions(null),
                null == (s = e.drawerHooks) || s.setBottomButton(null);
            }, [_]),
            o
              ? (0, S.jsx)(ip, {})
              : (0, S.jsxs)("div", {
                  onClick: (e) => {
                    e.stopPropagation();
                  },
                  children: [
                    (0, S.jsxs)("div", {
                      className: "cqKG06",
                      children: [
                        (0, S.jsxs)("div", {
                          className: "df4qmj",
                          children: [
                            (0, S.jsx)(cp.Z, {}),
                            (0, S.jsx)("input", {
                              className: "AI654z",
                              placeholder:
                                (null == r ? void 0 : r.searchbarPlaceholder) ||
                                "",
                              value: t,
                              onChange: (e) => s(e.target.value),
                            }),
                            !!t &&
                              (0, S.jsx)(lp.Z, {
                                className: "ZZv1aw",
                                onClick: () => {
                                  s("");
                                },
                              }),
                          ],
                        }),
                        !t &&
                          (0, S.jsx)("div", {
                            className: "kbUNDu",
                            children: h,
                          }),
                      ],
                    }),
                    p.length
                      ? (0, S.jsx)("div", {
                          className: "tbdiET",
                          children: (0, S.jsx)(up.E, {
                            name: "device",
                            onChange: (t) => {
                              e.setSelectedDeviceKey(t.target.value),
                                e.onChange();
                            },
                            children: p,
                          }),
                        })
                      : (0, S.jsx)(op, {
                          subTitle: mp(
                            "msg_vas_tradein_drawer_device_selection_search_empty_content"
                          ),
                        }),
                  ],
                })
          );
        };
      var gp = s(37742),
        fp = s(55334),
        xp = s(2228),
        vp = s(81169),
        Cp = s(57202),
        jp = s(17156);
      const bp = (e, t) => {
          var s, n;
          const a = i.useMemo(
              () => e.responses[e.question.question_key || -1] || [],
              [e.question.question_key, e.responses]
            ),
            [r, o] = i.useState(e.initialIsCollapsed),
            {
              question_text: l,
              question_help_text: c,
              option_ext_info: d,
            } = e.question,
            u = null == d ? void 0 : d.radio_required,
            p = i.useMemo(() => {
              var t;
              return (
                (null == (t = e.question) || null == (t = t.options)
                  ? void 0
                  : t.map((t) =>
                      null != t && t.option_key && null != t && t.option_text
                        ? u
                          ? (0, S.jsx)(
                              dp.Z,
                              {
                                id: t.option_key,
                                value: t.option_key,
                                defaultChecked: Boolean(
                                  a.find((e) => e === t.option_key)
                                ),
                                children: (0, S.jsx)("div", {
                                  className: "B92e4D",
                                  children: t.option_text,
                                }),
                              },
                              t.option_key
                            )
                          : (0, S.jsx)(
                              jp.Z,
                              {
                                id: t.option_key,
                                name: t.option_key,
                                defaultChecked: Boolean(
                                  a.find((e) => e === t.option_key)
                                ),
                                onChange: (t) => {
                                  const s = t.target.checked
                                    ? [...a, t.target.name]
                                    : [...a].filter((e) => e !== t.target.name);
                                  e.question.question_key &&
                                    e.onChange(e.question.question_key, s);
                                },
                                children: (0, S.jsx)("div", {
                                  className: "CPXZTa",
                                  children: t.option_text,
                                }),
                              },
                              t.option_key
                            )
                        : null
                    )) || []
              );
            }, [u, e, a]);
          return e.question.question_key
            ? (0, S.jsxs)("div", {
                className: "XYjte5",
                ref: t,
                children: [
                  (0, S.jsxs)("div", {
                    className: "bd5nPP",
                    children: [
                      (0, S.jsxs)("div", {
                        className: "KYOwCK",
                        children: [
                          (0, S.jsxs)("div", {
                            className: "LqVHJN",
                            children: [e.id, "."],
                          }),
                          (0, S.jsxs)("div", {
                            children: [
                              (0, S.jsx)("div", {
                                className: "_VYDza",
                                children: l,
                              }),
                              (0, S.jsx)("div", {
                                className: "l7bAGh",
                                children: c,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, S.jsx)("div", {
                        className: "F0G2EZ",
                        onClick: () => o(!r),
                        children: r
                          ? (0, S.jsx)(Cp.Z, { color: "#999999" })
                          : (0, S.jsx)(vp.Z, { color: "#999999" }),
                      }),
                    ],
                  }),
                  (0, S.jsx)("div", {
                    className: "pb8jt1",
                    children: r
                      ? (0, S.jsx)("div", {
                          className: "lJMxJq",
                          children:
                            null == (s = e.question.options)
                              ? void 0
                              : s
                                  .filter(
                                    (e) =>
                                      e.option_key &&
                                      a.find((t) => t === e.option_key)
                                  )
                                  .map((e) => e.option_text)
                                  .join(", "),
                        })
                      : u
                      ? (0, S.jsx)(up.E, {
                          name: e.question.question_key,
                          onChange: (t) => {
                            o(!0),
                              e.question.question_key &&
                                e.onChange(e.question.question_key, [
                                  t.target.value,
                                ]);
                          },
                          defaultValue:
                            (null == (n = e.responses[e.question.question_key])
                              ? void 0
                              : n[0]) || "",
                          children: p,
                        })
                      : p,
                  }),
                ],
              })
            : null;
        },
        Np = i.forwardRef(bp);
      var Ip = s(91025),
        yp = s(75246);
      const Sp = {
        body: "iO1kXk",
        pageWrapperPc: "pNd_cu",
        pageWrapperRw: "GrmnG0",
        headerWrapper: "xUiCv9",
        progressWrapper: "_TI0CD",
        bodyWrapper: "OmG_W7",
        bodyTitle: "UC7W4R",
        progressBarFlexContainer: "T_1eer",
        progressBarRelativeContainer: "yZVl8I",
        backgroundBar: "_iKMKn",
        progressBar: "SubaTk",
        questionCounterText: "dNKzgx",
        tradeinWrapper: "rKcW3s",
        tradeinHeaderWrapper: "v12ry1",
        tradeinTitle: "h8AJTS",
        tradeinEditBtn: "jHDyZy",
        tradeinBodyWrapper: "UNuAR5",
        deviceImg: "kuXd2I",
        tradeinProductText: "oqMGs2",
        tradeinProductName: "l1B4jz",
        tradeinProductDescription: "EjyuiQ",
        tradeinProductDescriptionBold: "bNGNGV",
        submitButton: "LZVvTh",
        submitButtonPc: "EwVPDz",
      };
      var Tp = s(7366),
        wp = s.n(Tp);
      const kp = /({{[^}]+}})/g;
      function Ep(e, t = []) {
        const s = (t || []).reduce((e, t) => {
          var s;
          return (
            t.key &&
              (t.type === Qu.PRICE
                ? (e[t.key] =
                    ((s = t.value_price || 0),
                    (0, bn.formatCurrency)(
                      (0, z.Kd)(),
                      (0, bn.deflateServerNumber)(s, (0, z.Kd)())
                    )))
                : (e[t.key] = t.value_string || "")),
            e
          );
        }, {});
        return (null == e ? void 0 : e.replace(kp, (e, t) => s[t] || "")) || "";
      }
      const Pp = wp().getSharedMemory("@shopee/trade-in"),
        Ap = "hasInjectedTrackingRules",
        Lp = (e) => {
          Pp.set(Ap, e);
        },
        Rp = () => (Pp.has(Ap) || Lp(!1), Pp.get(Ap)),
        { t: Dp } = N.I18n;
      function Mp(e) {
        return Object.keys(e).filter((t) => {
          var s;
          return (null == (s = e[t]) ? void 0 : s.length) > 0;
        }).length;
      }
      const Op = ({ tradeinDevice: e, onChangeDevice: t }) => {
          var s;
          const n = (0, me.useTrackClick)("ChangeDeviceButton");
          if (!e) return null;
          const i =
            null == e || null == (s = e.product_description)
              ? void 0
              : s.split(/(\{\{.+?\}\})/g).filter(Boolean);
          return (0, S.jsxs)("div", {
            className: Sp.tradeinWrapper,
            children: [
              (0, S.jsxs)("div", {
                className: Sp.tradeinHeaderWrapper,
                children: [
                  (0, S.jsx)("div", {
                    className: Sp.tradeinTitle,
                    children: e.card_section_title,
                  }),
                  (0, S.jsxs)("div", {
                    className: Sp.tradeinEditBtn,
                    onClick: () => {
                      n(), t();
                    },
                    children: [e.edit_button_text, (0, S.jsx)(fp.Z, {})],
                  }),
                ],
              }),
              (0, S.jsxs)("div", {
                className: Sp.tradeinBodyWrapper,
                children: [
                  (0, S.jsx)("div", {
                    className: Sp.deviceImg,
                    children: (0, S.jsx)(pp.Z, {
                      fileId: null == e ? void 0 : e.logo_link,
                      height: 40,
                      width: 40,
                    }),
                  }),
                  (0, S.jsxs)("div", {
                    className: Sp.tradeinProductText,
                    children: [
                      (0, S.jsx)("div", {
                        className: Sp.tradeinProductName,
                        children: Ep(e.product_name, e.attributes),
                      }),
                      (0, S.jsx)("div", {
                        className: Sp.tradeinProductDescription,
                        children:
                          null == i
                            ? void 0
                            : i.map((t, s) =>
                                t.match(/(\{\{.+?\}\})/g)
                                  ? (0, S.jsx)(
                                      "span",
                                      {
                                        className:
                                          Sp.tradeinProductDescriptionBold,
                                        children: Ep(
                                          t,
                                          null == e ? void 0 : e.attributes
                                        ),
                                      },
                                      s
                                    )
                                  : (0, S.jsx)("span", { children: t }, s)
                              ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Zp = (e) => {
          var t, s, a;
          const [r, o] = i.useState(!1),
            c = i.useRef(null),
            [d, u] = i.useState(0),
            [p, h] = i.useState({}),
            { data: m, isLoading: _ } =
              ((g = e.questionnaireId),
              (f = e.selectedDeviceKey || ""),
              (x = Ku),
              (0, Hu.a)({
                queryKey: ["questionnaire", "evaluation", f],
                queryFn: async () =>
                  Uu({
                    questionnaire_id: g,
                    page_type: Vu.PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION,
                    evaluation_question_list_page_param: {
                      user_selected_item_key: f,
                    },
                  }),
                select: x,
                staleTime: 0,
              }));
          var g, f, x;
          const [v, C] = i.useState(null),
            j = (0, me.useTrackClick)("BackButton", {
              step: Vu.PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION,
            }),
            b = (0, me.useTrackClick)("Tip"),
            I = (0, me.useTrackClick)("PrimaryButton", {
              step: Vu.PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION,
              tradeinDeviceDetail:
                null != m && m.tradeinDeviceData
                  ? Ep(
                      null == m || null == (t = m.tradeinDeviceData)
                        ? void 0
                        : t.product_name,
                      null == m || null == (s = m.tradeinDeviceData)
                        ? void 0
                        : s.attributes
                    )
                  : "",
            }),
            y = (0, me.useTrackClick)("CloseButton", {
              step: Vu.PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION,
            }),
            T = (() => {
              const { init: e, showMiniToast: t } = (0, i.useContext)(zu);
              return (
                (0, i.useEffect)(() => {
                  e();
                }, [e]),
                t
              );
            })(),
            w = (0, jr.Nr)((e) => {
              T(e);
            }, 500),
            k = (0, sp.pm)(),
            E = (0, jr.Nr)((e) => {
              k(e);
            }, 500);
          i.useEffect(() => {
            const e = (null == m ? void 0 : m.preSelectedResponses) || {},
              t = Mp(e);
            h(e),
              u(t),
              t &&
                E({
                  text: Dp("msg_vas_tradein_drawer_toast_survey_prefilled"),
                  level: "success",
                });
          }, [null == m ? void 0 : m.preSelectedResponses, w, E]);
          const P = (null == m ? void 0 : m.tradeinDeviceData) || {},
            A = (null == m ? void 0 : m.numCompulsoryQuestions) || 0,
            L = i.useMemo(
              () =>
                (null == m
                  ? void 0
                  : m.questionList
                      .map((e, t) => {
                        var s;
                        return e.question_key
                          ? (0, S.jsx)(
                              Np,
                              {
                                id: t + 1,
                                initialIsCollapsed:
                                  (null == m ||
                                  null ==
                                    (s = m.preSelectedResponses[e.question_key])
                                    ? void 0
                                    : s.length) > 0,
                                question: e,
                                responses: p,
                                onChange: (e, t) =>
                                  h((s) => {
                                    const i = (0, n.Z)({}, s, { [e]: t });
                                    return u(Mp(i)), i;
                                  }),
                              },
                              e.question_key
                            )
                          : null;
                      })
                      .slice(0, d + 1)) || [],
              [
                null == m ? void 0 : m.questionList,
                null == m ? void 0 : m.preSelectedResponses,
                d,
                p,
              ]
            );
          i.useEffect(() => {
            var e;
            Mp((null == m ? void 0 : m.preSelectedResponses) || {}) < A &&
              (null == (e = c.current) ||
                e.scrollIntoView({ behavior: "smooth" }));
          }, [d, null == m ? void 0 : m.preSelectedResponses, A, L.length]);
          const R = (null == m ? void 0 : m.pageTitle) || "";
          return (
            i.useEffect(() => {
              var t, s, n, i, a, r, o, l;
              R
                ? (null == (n = e.drawerHooks) || n.setDisplayDrawerTitle(!0),
                  null == (i = e.drawerHooks) || i.setDrawerTitle(R),
                  null == (a = e.drawerHooks) ||
                    a.setOnClickBack({
                      fn: () => {
                        j(), e.onClickBack && e.onClickBack();
                      },
                    }),
                  null == (r = e.drawerHooks) ||
                    r.setOnClickClose({
                      fn: () => {
                        y();
                      },
                    }),
                  null == (o = e.drawerHooks) ||
                    o.setOnClickOutside({
                      fn: () => {
                        y();
                      },
                    }))
                : null == (l = e.drawerHooks) || l.setDisplayDrawerTitle(!1),
                null == (t = e.drawerHooks) || t.setTermsAndConditions(null),
                null == (s = e.drawerHooks) || s.setBottomButton(null);
            }, [R]),
            _
              ? (0, S.jsx)(ip, {})
              : (0, S.jsxs)("div", {
                  className: Sp.body,
                  onClick: (e) => {
                    e.stopPropagation();
                  },
                  children: [
                    v &&
                      (0, S.jsx)(xp.Z, {
                        zIndex: 11e3,
                        buttonVariant: "one-button",
                        content: v.content,
                        textAlign: "left",
                        primaryActionText: Dp("label_ok"),
                        onClickPrimary: (e) => {
                          e.stopPropagation(),
                            v.onClickPrimary && v.onClickPrimary(e),
                            C(null);
                        },
                      }),
                    (0, S.jsxs)("div", {
                      className: Sp.headerWrapper,
                      children: [
                        (0, S.jsx)(Ip.ZP, {
                          level: "page",
                          icon: (0, S.jsx)(gp.Z, { color: yp.m7 }),
                          color: "caution",
                          action: "leadTo",
                          onActionClick: () => {
                            var e;
                            b(),
                              null != m &&
                                null != (e = m.helpBannerData) &&
                                e.action_url &&
                                window.open(
                                  m.helpBannerData.action_url,
                                  "_blank"
                                );
                          },
                          children:
                            null == m || null == (a = m.helpBannerData)
                              ? void 0
                              : a.title,
                        }),
                        (0, S.jsx)("div", {
                          className: Sp.tradeinDeviceContainer,
                          children: (0, S.jsx)(Op, {
                            tradeinDevice: P,
                            onChangeDevice: e.onClickBack,
                          }),
                        }),
                      ],
                    }),
                    (0, S.jsxs)("div", {
                      className: Sp.bodyWrapper,
                      children: [
                        (0, S.jsxs)("div", {
                          className: Sp.progressWrapper,
                          children: [
                            (0, S.jsx)("div", {
                              className: Sp.bodyTitle,
                              children: Dp(
                                "label_vas_tradein_drawer_survey_card_header"
                              ),
                            }),
                            (0, S.jsxs)("div", {
                              className: Sp.progressBarFlexContainer,
                              children: [
                                (0, S.jsxs)("div", {
                                  className: Sp.progressBarRelativeContainer,
                                  children: [
                                    (0, S.jsx)("div", {
                                      className: Sp.backgroundBar,
                                    }),
                                    (0, S.jsx)("div", {
                                      className: Sp.progressBar,
                                      style: {
                                        width: (Math.min(d, A) / A) * 100 + "%",
                                      },
                                    }),
                                  ],
                                }),
                                (0, S.jsx)("div", {
                                  className: Sp.questionCounterText,
                                  children: `${Math.min(d, A)}/${A}`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, S.jsx)("div", {
                          className: Sp.questionnaireWrapper,
                          children: L,
                        }),
                        (0, S.jsx)("div", { ref: c }),
                      ],
                    }),
                    d >= A && (0, S.jsx)("div", { style: { height: 68 } }),
                    d >= A
                      ? (0, S.jsx)("div", {
                          className: l()(Sp.submitButton, Sp.submitButtonPc),
                          children: (0, S.jsx)(Zu.Z, {
                            disabled: r,
                            text: Dp("label_vas_tradein_drawer_cta_get_quote"),
                            size: void 0,
                            width: void 0,
                            onClick: async () => {
                              try {
                                I(), o(!0);
                                const s = await ((t = {
                                  questionnaire_id: e.questionnaireId,
                                  selected_item_key: e.selectedDeviceKey,
                                  question_responses: [
                                    ...Object.entries(p).map(([e, t]) => ({
                                      question_key: e,
                                      selected_option_keys: t,
                                    })),
                                  ],
                                }),
                                N.FetchUtils.post(
                                  "/api/v1/tradein_drawer/submit_questionnaire_response",
                                  t
                                ));
                                if ((o(!1), s.error))
                                  switch (s.error) {
                                    case Gu.ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE_PARTNER_ITEM_UNAVAILABLE:
                                      C({
                                        content: Dp(
                                          "msg_error_submit_question_missing_device"
                                        ),
                                        onClickPrimary: (t) => {
                                          e.onClickBack();
                                        },
                                      });
                                      break;
                                    case Gu.ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE:
                                    case Gu.ERROR_VALIDATE_QUESTIONNAIRE_RESPONSE_PARTNER_PRICE_UNAVAILABLE:
                                    default:
                                      C({
                                        content: Dp(
                                          "msg_error_submit_question_tradein_info_updated"
                                        ),
                                        onClickPrimary: (t) => {
                                          null == e.handleSubmitError ||
                                            e.handleSubmitError(s.error);
                                        },
                                      });
                                  }
                                else {
                                  const { tradein_price: t } = s,
                                    n = ((e, t) => {
                                      var s;
                                      const n =
                                          null == e
                                            ? void 0
                                            : e.find(
                                                (e) =>
                                                  "storage" === e.question_key
                                              ),
                                        i =
                                          null == n || null == (s = n.options)
                                            ? void 0
                                            : s.find((e) => e.option_key === t);
                                      return (
                                        (null == i ? void 0 : i.option_text) ||
                                        ""
                                      );
                                    })(
                                      null == m ? void 0 : m.questionList,
                                      p.storage[0]
                                    ),
                                    i = {
                                      itemName:
                                        Ep(P.product_name, P.attributes) +
                                        (n ? `, ${n}` : ""),
                                      tradeInPrice: t || P.product_price || 0,
                                      itemImageUrl: P.logo_link || "",
                                    };
                                  null == e.handleSubmitSuccess ||
                                    e.handleSubmitSuccess(i);
                                }
                              } catch (s) {
                                C({
                                  content: Dp(
                                    "msg_error_submit_question_tradein_info_updated"
                                  ),
                                  onClickPrimary: (t) => {
                                    null == e.handleSubmitError ||
                                      e.handleSubmitError(s);
                                  },
                                });
                              }
                              var t;
                            },
                          }),
                        })
                      : null,
                  ],
                })
          );
        },
        Fp = s.p + "productdetailspage/55a3d007c2f017499161.tr.js",
        Bp = "f9D7wi";
      Rp() || (N.Tracking.injectTracking(Fp), Lp(!0));
      const Hp = (0, Fu.cf)(),
        Up = (e) => {
          const { data: t, isLoading: s } =
            ((a = e.questionnaireId),
            (0, Hu.a)({
              queryKey: ["questionnaire", "dynamic"],
              queryFn: async () =>
                Uu({
                  questionnaire_id: a,
                  page_type: Vu.PAGE_TYPE_DYNAMIC_QUESTIONNAIRE,
                }),
              select: undefined,
              staleTime: 0,
            }));
          var a;
          const [r, o] = i.useState(null),
            [l, c] = i.useState(""),
            d = (0, me.useTrackImpression)(
              "PageView",
              { step: null == t ? void 0 : t.page_type },
              [null == t ? void 0 : t.page_type]
            );
          if (
            (i.useEffect(() => {
              o((null == t ? void 0 : t.page_type) || null),
                c((null == t ? void 0 : t.selected_item_key) || "");
            }, [
              null == t ? void 0 : t.page_type,
              null == t ? void 0 : t.selected_item_key,
            ]),
            s)
          )
            return (0, S.jsx)(ip, {});
          switch (r) {
            case Vu.PAGE_TYPE_QUESTIONNAIRE_ITEM_LIST:
              return (0, S.jsx)("div", {
                ref: d,
                className: Bp,
                children: (0, S.jsx)(
                  _p,
                  (0, n.Z)({}, e, {
                    setSelectedDeviceKey: c,
                    onChange: () => {
                      o(Vu.PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION);
                    },
                  })
                ),
              });
            case Vu.PAGE_TYPE_QUESTIONNAIRE_EVALUATION_QUESTION:
              return (0, S.jsx)("div", {
                ref: d,
                className: Bp,
                children: (0, S.jsx)(
                  Zp,
                  (0, n.Z)({}, e, {
                    selectedDeviceKey: l,
                    onClickBack: () => {
                      o(Vu.PAGE_TYPE_QUESTIONNAIRE_ITEM_LIST);
                    },
                  })
                ),
              });
            default:
              return null != t && t.error ? (0, S.jsx)(op, {}) : null;
          }
        },
        Vp = (e) =>
          (0, S.jsx)(Bu.aH, {
            client: Hp,
            children: (0, S.jsx)(me.TrackingProvider, {
              onTrack: N.Tracking.onTrack,
              children: (0, S.jsx)(me.TrackingDataAnchor, {
                targetType: "Tradein",
                targetData: e.drawerData,
                children: (0, S.jsx)(tp, {
                  bottom: 60,
                  children: (0, S.jsx)(sp.ZP, {
                    zIndex: 1e4,
                    children: (0, S.jsx)(Up, (0, n.Z)({}, e)),
                  }),
                }),
              }),
            }),
          }),
        Wp = {
          pageWrapper: "bN3as0",
          rwWrapper: "Nocj5I",
          pageContent: "DypNCn",
          pageSubTitle: "d2AcoG",
          newDeviceInfo: "zNcsiD",
          tradeInDeviceInfo: "FpSo_G",
          noPointer: "KaK2Xo",
          deviceRow: "Z2uaOH",
          tradeInDeviceChip: "n9t4LT",
          deviceRowNameModel: "HTLWzo",
          deviceName: "fTcQnt",
          deviceModel: "e3esgJ",
          deviceRowPrice: "TBb5rU",
          productDescriptionSeparator: "GQo58j",
          tradeInBreakdownRow: "wz24yt",
          tradeInBreakdownRowLabel: "vd1hra",
          tradeInBreakdownRowValue: "LfykP2",
          tradeInBreakdownRowBig: "t9pyo_",
          tradeInBreakdownRowHighlight: "v1R8b1",
          notes: "z7UObL",
          noteItem: "nVSorE",
        };
      let Qp = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.PDP = 1)] = "PDP"),
          (e[(e.CHECKOUT = 2)] = "CHECKOUT"),
          e
        );
      })({});
      const Gp = /({[^}]+})/g,
        qp = ({ termsAndConditions: e }) => {
          const { placeholder_template: t, display_attributes: s } = e,
            n = (s || []).reduce((e, t) => ((e[t.placeholder] = t), e), {}),
            i = (t || "").split(Gp).filter(Boolean);
          return (0, S.jsx)("div", {
            className: "UxeogC",
            children: i.map((e, t) => {
              const s = e.match(/{([^}]+)}/);
              if (s) {
                const i = s[1],
                  a = n[i];
                if (a) {
                  const e = { color: a.text_color };
                  return a.hyperlink
                    ? (0, S.jsx)(
                        "a",
                        {
                          href: a.hyperlink,
                          style: e,
                          target: "_blank",
                          rel: "noreferrer",
                          children: a.value,
                        },
                        t
                      )
                    : (0, S.jsx)("span", { style: e, children: a.value }, t);
                }
                return (0, S.jsx)("span", { children: e }, t);
              }
              return (0, S.jsx)("span", { children: e }, t);
            }),
          });
        };
      Rp() || (N.Tracking.injectTracking(Fp), Lp(!0));
      const { t: Kp } = N.I18n,
        $p = (e) =>
          (0, bn.formatCurrency)(
            (0, z.Kd)(),
            (0, bn.deflateServerNumber)(e, (0, z.Kd)())
          );
      function Yp() {
        return (0, S.jsx)("svg", {
          width: "10",
          height: "10",
          viewBox: "0 0 10 10",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, S.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.55658 0.687924C3.821 0.466048 4.21523 0.500538 4.4371 0.764959L7.44878 4.35414C7.76072 4.72589 7.76072 5.26796 7.44878 5.63971L4.43704 9.22894C4.21517 9.49336 3.82094 9.52785 3.55652 9.30597C3.2921 9.08409 3.25761 8.68987 3.47949 8.42545L6.0867 5.31832C6.24267 5.13244 6.24267 4.86141 6.0867 4.67553L3.47955 1.56844C3.25767 1.30402 3.29216 0.9098 3.55658 0.687924Z",
            fill: "black",
            fillOpacity: "0.26",
          }),
        });
      }
      const zp = (0, Fu.cf)(),
        Xp = (e) => {
          var t, s;
          const {
              questionnaireId: n,
              modelToBuy: a,
              warranty: r,
              drawerHooks: o,
              drawerData: c,
            } = e,
            { data: d, isLoading: u } = ((e, t, s) =>
              (0, Hu.a)({
                queryKey: ["questionnaire", "quotation", t],
                queryFn: async () =>
                  Uu({
                    questionnaire_id: e,
                    page_type:
                      Vu.PAGE_TYPE_POST_QUESTIONNAIRE_QUOTATION_SUMMARY,
                    quotation_summary_page_param: t,
                  }),
                select: s,
                staleTime: 0,
              }))(
              n,
              {
                quotation_summary_breakdown_type: a
                  ? Wu.WITH_NEW_ITEM
                  : Wu.WITHOUT_NEW_ITEM,
                new_item_card_info: a
                  ? {
                      item_name: a.itemName,
                      item_description: a.modelDescription,
                      product_image: a.image,
                      item_id: a.itemId,
                      model_id: a.modelId,
                      item_price: a.price,
                    }
                  : void 0,
                non_tradein_vas_price_breakdowns:
                  r && (null == c ? void 0 : c.fromSource) === Qp.PDP
                    ? [{ vas_type: 4, label: r.productName, value: r.price }]
                    : void 0,
              },
              $u
            ),
            p = (0, me.useTrackClick)("BackButton", {
              step: Vu.PAGE_TYPE_POST_QUESTIONNAIRE_QUOTATION_SUMMARY,
            }),
            h = (0, me.useTrackClick)("PrimaryButton", {
              step: Vu.PAGE_TYPE_POST_QUESTIONNAIRE_QUOTATION_SUMMARY,
              tradeinDeviceDetail:
                null != d && d.tradeinProductCardInfo
                  ? Ep(
                      null == d || null == (t = d.tradeinProductCardInfo)
                        ? void 0
                        : t.product_name,
                      null == d || null == (s = d.tradeinProductCardInfo)
                        ? void 0
                        : s.attributes
                    )
                  : "",
              tradeinDiscount:
                null == d ? void 0 : d.tradeinProductCardInfo.product_price,
            }),
            m = (0, me.useTrackClick)("CloseButton", {
              step: Vu.PAGE_TYPE_POST_QUESTIONNAIRE_QUOTATION_SUMMARY,
            }),
            _ =
              ((0, me.useTrackClick)("DeviceDrawerCard", { cardType: 1 }),
              (0, me.useTrackClick)("DeviceDrawerCard", { cardType: 2 })),
            g = null == d ? void 0 : d.pageTitle;
          if (
            (i.useEffect(() => {
              g
                ? (null == o || o.setDisplayDrawerTitle(!0),
                  null == o || o.setDrawerTitle(g),
                  null == o ||
                    o.setOnClickBack({
                      fn: () => {
                        p(), e.onClickBack && e.onClickBack();
                      },
                    }),
                  null == o ||
                    o.setTermsAndConditions({
                      contents: (0, S.jsx)(qp, {
                        termsAndConditions:
                          null == d ? void 0 : d.termsAndConditions,
                      }),
                    }),
                  null == o ||
                    o.setBottomButton({
                      text:
                        (null == c ? void 0 : c.fromSource) === Qp.PDP
                          ? Kp("label_vas_tradein_drawer_cta_buy_now")
                          : Kp("label_vas_tradein_drawer_cta_got_it"),
                      onClick: () => {
                        h(), e.onSubmit && e.onSubmit();
                      },
                    }),
                  null == o ||
                    o.setOnClickClose({
                      fn: () => {
                        m();
                      },
                    }),
                  null == o ||
                    o.setOnClickOutside({
                      fn: () => {
                        m();
                      },
                    }))
                : (null == o || o.setDisplayDrawerTitle(!1),
                  null == o || o.setTermsAndConditions(null));
            }, [g]),
            u)
          )
            return (0, S.jsx)(ip, {});
          if (null != d && d.error) return (0, S.jsx)(op, {});
          const f = null == d ? void 0 : d.tradeinProductCardInfo,
            x = null == d ? void 0 : d.paymentBreakdowns,
            v = null == d ? void 0 : d.finalPrice,
            C = null == d ? void 0 : d.finePrints,
            j = Ep(
              null == f ? void 0 : f.product_description,
              null == f ? void 0 : f.attributes
            );
          return (0, S.jsx)("div", {
            className: l()(Wp.pageWrapper, !1),
            onClick: (e) => {
              e.stopPropagation();
            },
            children: (0, S.jsxs)("div", {
              className: Wp.pageContent,
              children: [
                (0, S.jsx)("div", {
                  className: Wp.pageSubTitle,
                  children: (null == d ? void 0 : d.sectionTitle) || "",
                }),
                a
                  ? (0, S.jsx)("div", {
                      className: l()(Wp.newDeviceInfo, Wp.noPointer),
                      onClick: () => {},
                      children: (0, S.jsxs)("div", {
                        className: Wp.deviceRow,
                        children: [
                          (0, S.jsx)("img", { src: a.image }),
                          (0, S.jsxs)("div", {
                            className: Wp.deviceRowNameModel,
                            children: [
                              (0, S.jsx)("div", {
                                className: Wp.deviceName,
                                children: a.itemName,
                              }),
                              (0, S.jsxs)("div", {
                                className: Wp.deviceModel,
                                children: [a.modelDescription, !1],
                              }),
                            ],
                          }),
                          (0, S.jsx)("div", {
                            className: Wp.deviceRowPrice,
                            children: $p(a.price),
                          }),
                        ],
                      }),
                    })
                  : null,
                f
                  ? (0, S.jsx)("div", {
                      className: Wp.tradeInDeviceInfo,
                      onClick: () => {
                        _(), null == e.onReset || e.onReset();
                      },
                      children: (0, S.jsxs)("div", {
                        className: Wp.deviceRow,
                        children: [
                          (0, S.jsx)("div", {
                            className: Wp.tradeInDeviceChip,
                            children: f.card_section_title,
                          }),
                          (0, S.jsx)("img", { src: f.logo_link }),
                          (0, S.jsxs)("div", {
                            className: Wp.deviceRowNameModel,
                            children: [
                              (0, S.jsx)("div", {
                                className: Wp.deviceName,
                                children: Ep(f.product_name, f.attributes),
                              }),
                              (0, S.jsxs)("div", {
                                className: Wp.deviceModel,
                                children: [
                                  j
                                    ? (0, S.jsx)("span", {
                                        className:
                                          Wp.productDescriptionSeparator,
                                        children: j,
                                      })
                                    : null,
                                  f.edit_button_text,
                                  " ",
                                  (0, S.jsx)(Yp, {}),
                                ],
                              }),
                            ],
                          }),
                          (0, S.jsx)("div", {
                            className: Wp.deviceRowPrice,
                            children: $p(f.product_price || 0),
                          }),
                        ],
                      }),
                    })
                  : null,
                (0, S.jsxs)("div", {
                  className: Wp.tradeInBreakdown,
                  children: [
                    null != x && x.length
                      ? x.map((e, t) =>
                          (0, S.jsxs)(
                            "div",
                            {
                              className: Wp.tradeInBreakdownRow,
                              children: [
                                (0, S.jsx)("div", {
                                  className: Wp.tradeInBreakdownRowLabel,
                                  children: e.label,
                                }),
                                (0, S.jsx)("div", {
                                  className: Wp.tradeInBreakdownRowValue,
                                  children: $p(e.value || 0),
                                }),
                              ],
                            },
                            t
                          )
                        )
                      : null,
                    v
                      ? (0, S.jsxs)("div", {
                          className: l()(
                            Wp.tradeInBreakdownRow,
                            Wp.tradeInBreakdownRowBig
                          ),
                          children: [
                            (0, S.jsx)("div", {
                              className: Wp.tradeInBreakdownRowLabel,
                              children: v.label,
                            }),
                            (0, S.jsx)("div", {
                              className: Wp.tradeInBreakdownRowValue,
                              children: $p(v.value || 0),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                null != C && C.length
                  ? (0, S.jsx)("div", {
                      className: Wp.notes,
                      children: C.map((e, t) =>
                        (0, S.jsx)(
                          "div",
                          { className: Wp.noteItem, children: e },
                          t
                        )
                      ),
                    })
                  : null,
              ],
            }),
          });
        },
        Jp = (e) =>
          (0, S.jsx)(Bu.aH, {
            client: zp,
            children: (0, S.jsx)(me.TrackingProvider, {
              onTrack: N.Tracking.onTrack,
              children: (0, S.jsx)(me.TrackingDataAnchor, {
                targetType: "Tradein",
                targetData: e.drawerData,
                children: (0, S.jsx)(Xp, (0, n.Z)({}, e)),
              }),
            }),
          }),
        eh = function ({ isTncChecked: e, terms: t, onCheck: s }) {
          return t
            ? (0, S.jsxs)("div", {
                className: "ZTyhF9",
                onClick: (e) => {
                  e.stopPropagation();
                },
                children: [
                  (0, S.jsx)("span", {
                    onClick: () => {
                      s(!e);
                    },
                    children: (0, S.jsx)(jp.Z, { checked: e }),
                  }),
                  t,
                ],
              })
            : null;
        };
      let th = (function (e) {
        return (
          (e[(e.QUESTIONNAIRE = 0)] = "QUESTIONNAIRE"),
          (e[(e.QUOTATION = 1)] = "QUOTATION"),
          e
        );
      })({});
      const sh = N.I18n.withI18nCollections([726])(function ({
          isModalShown: e,
          currentStep: t,
          setCurrentStep: s,
          closeModal: n,
          tradeInProduct: r,
          questionnaireParams: o,
          modelToBuy: l,
          warranty: c,
          onQuestionnaireSubmitSuccess: d,
          onQuotationSubmitSuccess: u,
        }) {
          const [p, h] = (0, i.useState)(""),
            [m, _] = (0, i.useState)(!1),
            [g, f] = (0, i.useState)(null),
            [x, v] = (0, i.useState)(null),
            [C, j] = (0, i.useState)(null),
            [b, N] = (0, i.useState)(null),
            I = {
              setDisplayDrawerTitle: () => {},
              setDrawerTitle: (e) => {
                h(e);
              },
              setOnClickBack: () => {},
              setOnClickClose: (e) => {
                j(e);
              },
              setOnClickOutside: (e) => {
                N(e);
              },
              setBottomButton: (e) => {
                v(e);
              },
              setTermsAndConditions: (e) => {
                f(null == e ? void 0 : e.contents);
              },
            };
          (0, i.useEffect)(() => {
            _(!1);
          }, [t]);
          const y = a().useMemo(
            () => ({
              fromSource: (null == r ? void 0 : r.fromSource) || 0,
              tradeInProductId: (null == r ? void 0 : r.productId) || 0,
              tradeInServiceId: (null == r ? void 0 : r.serviceId) || 0,
              itemId: (null == r ? void 0 : r.itemId) || 0,
              shopId: (null == r ? void 0 : r.shopId) || 0,
            }),
            [
              null == r ? void 0 : r.fromSource,
              null == r ? void 0 : r.itemId,
              null == r ? void 0 : r.productId,
              null == r ? void 0 : r.serviceId,
              null == r ? void 0 : r.shopId,
            ]
          );
          return e
            ? (0, S.jsx)(Mu.u, {
                closeWhenClickOverlay: !0,
                onClose: () => {
                  (null == b ? void 0 : b.fn) && b.fn(), n();
                },
                children: (0, S.jsxs)("div", {
                  className: "YLLEyZ",
                  children: [
                    (0, S.jsxs)("div", {
                      className: "WMRYIX",
                      children: [
                        (0, S.jsx)("div", { children: p }),
                        (0, S.jsx)(Ou.Z, {
                          onClick: () => {
                            (null == C ? void 0 : C.fn) && C.fn(), n();
                          },
                        }),
                      ],
                    }),
                    t === th.QUESTIONNAIRE &&
                      (0, S.jsx)(Vp, {
                        drawerHooks: I,
                        drawerData: y,
                        handleSubmitSuccess: () => {
                          s(th.QUOTATION), null == d || d();
                        },
                        handleSubmitError: () => {
                          n();
                        },
                        questionnaireId:
                          (null == o ? void 0 : o.questionnaireId) || 0,
                      }),
                    t === th.QUOTATION &&
                      (0, S.jsx)(Jp, {
                        drawerData: y,
                        questionnaireId:
                          (null == o ? void 0 : o.questionnaireId) || 0,
                        modelToBuy: l,
                        warranty: c,
                        onSubmit: () => {
                          null == u || u(), n();
                        },
                        onClickBack: () => {
                          s(th.QUESTIONNAIRE);
                        },
                        onReset: () => {
                          s(th.QUESTIONNAIRE);
                        },
                        drawerHooks: I,
                        handleSubmitSuccess: () => {
                          s(th.QUOTATION);
                        },
                      }),
                    !!x &&
                      (0, S.jsxs)("div", {
                        className: "k9HhVV",
                        children: [
                          (0, S.jsx)(eh, {
                            terms: g,
                            isTncChecked: m,
                            onCheck: (e) => {
                              _(e);
                            },
                          }),
                          (0, S.jsx)("div", {
                            style: { textAlign: "right" },
                            children: (0, S.jsx)(Zu.Z, {
                              disabled: !m,
                              text: x.text,
                              onClick: x.onClick,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              })
            : null;
        }),
        nh =
          ((ih = function ({ openTradeInModal: e }) {
            const t = (0, F.sg)(),
              { itemId: s, shopId: n } = (0, F.u4)(),
              i = (0, F.Ex)(),
              a = () => {
                i({ shopId: n, itemId: s, platform: "PC" });
              },
              r = {
                productId: null == t ? void 0 : t.vas_product_id,
                hasPreffiledInfo: null == t ? void 0 : t.has_prefilled_info,
              },
              o = (0, me.useTrackImpression)("TradeInEntrance", r),
              l = (0, me.useTrackClick)("TradeInEntrance", r);
            if (!t) return null;
            const {
              cta_text: c,
              icon: d,
              formatted_text: u,
              service_id: p,
              vas_product_id: h,
              questionnaire_info: m,
            } = t;
            return (0, S.jsxs)("div", {
              ref: o,
              className: "cNDurv",
              children: [
                (0, S.jsx)("img", {
                  alt: "trade in icon",
                  className: "RINP16",
                  src: d,
                }),
                (0, S.jsx)(Lu, { className: "LhfrSF", templateTexts: u }),
                (0, S.jsx)("button", {
                  className: "Kj7pHj",
                  onClick: () => {
                    var t;
                    l(),
                      e({
                        tradeIn: {
                          fromSource: 1,
                          serviceId: p,
                          productId: h,
                          itemId: s,
                          shopId: n,
                        },
                        questionnaireParams: {
                          questionnaireId:
                            null !=
                            (t = null == m ? void 0 : m.questionnaire_id)
                              ? t
                              : -1,
                        },
                        onQuestionnaireSubmitSuccess: a,
                      });
                  },
                  children: c,
                }),
              ],
            });
          }),
          function (e) {
            const [t, s] = (0, i.useState)(!1),
              [a, r] = (0, i.useState)(th.QUESTIONNAIRE),
              [o, l] = (0, i.useState)(null),
              [c, u] = (0, i.useState)(null),
              [p, h] = (0, i.useState)(null),
              [m, _] = (0, i.useState)(null),
              [g, f] = (0, i.useState)({ fn: null }),
              [x, v] = (0, i.useState)({ fn: null }),
              C = (0, d.useHistory)(),
              { accountStatus: j } = (0, Ru.B)(),
              b = 1 === j,
              I = (0, i.useCallback)((e) => {
                b ||
                  C.push(
                    (0, Qi.FK)(Du.D_.getUrl(), {
                      next: location.href,
                      from: location.href,
                    })
                  );
                const {
                  tradeIn: t,
                  questionnaireParams: { questionnaireId: n },
                  modelToBuy: i = null,
                  warranty: a = null,
                  onQuestionnaireSubmitSuccess: o = null,
                  onQuotationSubmitSuccess: c = null,
                } = e;
                r(th.QUESTIONNAIRE),
                  l(t),
                  h({ questionnaireId: n }),
                  u(i),
                  _(a),
                  f({ fn: o }),
                  v({ fn: c }),
                  s(!0);
              }, []),
              y = (0, i.useCallback)(() => {
                s(!1);
              }, []);
            return (0, S.jsxs)(S.Fragment, {
              children: [
                (0, S.jsx)(
                  ih,
                  (0, n.Z)({}, e, { openTradeInModal: I, closeTradeInModal: y })
                ),
                (0, S.jsx)(me.TrackingProvider, {
                  onTrack: N.Tracking.onTrack,
                  children: (0, S.jsx)(me.TrackingDataAnchor, {
                    targetType: "Tradein",
                    children: (0, S.jsx)(sh, {
                      isModalShown: t,
                      currentStep: a,
                      setCurrentStep: r,
                      closeModal: y,
                      tradeInProduct: o,
                      questionnaireParams: p,
                      onQuestionnaireSubmitSuccess:
                        (null == g ? void 0 : g.fn) || null,
                      onQuotationSubmitSuccess:
                        (null == x ? void 0 : x.fn) || null,
                      modelToBuy: c,
                      warranty: m,
                    }),
                  }),
                }),
              ],
            });
          });
      var ih;
      function ah(e) {
        (0, Cu.S)(), (0, Cu.T)();
        const t = (0, F.f3)(),
          { isMart: s } = (0, F.J_)(),
          { accountInfo: n } = (0, H.Sq)(),
          i = (0, F.fh)(),
          a = (0, A.useAtomValue)(ss.k_);
        return (0, S.jsxs)("section", {
          className: l()("flex card", "jNRWxO"),
          children: [
            (0, S.jsxs)("section", {
              className: "_OguPS",
              children: [
                (0, S.jsx)(Y, {}),
                (0, S.jsx)(Ie, { item: t, shopInfo: i }),
              ],
            }),
            (0, S.jsx)("section", {
              className: l()("flex flex-auto", "YTDXQ0"),
              children: t
                ? (0, S.jsxs)("div", {
                    className: l()("flex-auto flex-column ", "tKNJvJ"),
                    children: [
                      (0, S.jsx)(Qe, { item: t, isShopeeMart: s }),
                      (0, S.jsx)(qe, { item: t, isShopeeMart: s }),
                      (0, S.jsx)(Pt, {
                        item: t,
                        onClickRatingTab: e.onClickRatingTab,
                      }),
                      (0, S.jsx)(ra, {}),
                      (0, S.jsx)(nh, {}),
                      (0, S.jsx)(ja, {}),
                      (0, S.jsx)(la, {}),
                      (0, S.jsx)(Na, {}),
                      (0, S.jsx)("div", {
                        className: "y_zeJr",
                        children: (0, S.jsx)(Cd, { item: t, isShopeeMart: s }),
                      }),
                      (0, S.jsx)("div", {
                        className: "CFIB2E",
                        children: (0, S.jsx)(jd.Z, {
                          shopInfo: i,
                          userAccount: n,
                          selectedModel: a,
                        }),
                      }),
                      (0, S.jsx)(_u, { className: "DaLVBj" }),
                      (0, S.jsx)(xu.ZP, {}),
                    ],
                  })
                : (0, S.jsx)(fu, {}),
            }),
            (0, S.jsx)(vu.Z, { chatWithShop: e.chatWithShop }),
          ],
        });
      }
      const rh = (0, A.createStore)(),
        oh = function (e) {
          return (0, S.jsx)(A.Provider, {
            store: rh,
            children: (0, S.jsx)(ah, (0, n.Z)({}, e)),
          });
        };
      var lh = s(5866),
        ch = s(35518),
        dh = s(59418);
      const uh = (e) =>
        (0, S.jsx)(Ke.Z, {
          isOpen: e.displayPopup,
          onOverlayClick: () => e.hideWelcomePackagePopup(),
          children: (0, S.jsx)(dh.Z, {
            customTitle: (0, N.t)(
              "product_page_label_welcome_package_download"
            ),
            customDesc: (0, N.t)("product_page_label_welcome_package_get"),
          }),
        });
      var ph = s(64504),
        hh = s(70418),
        mh = s(69828),
        _h = s(81457),
        gh = s(94801),
        fh = s(22199),
        xh = s(78385),
        vh = s(599),
        Ch = s(46934),
        jh = s(36152),
        bh = s(84465),
        Nh = s(18238),
        Ih = s(100),
        yh = s(24855),
        Sh = s(34352),
        Th = s(60738),
        wh = s(71244),
        kh = s(38214),
        Eh = s(80802),
        Ph = s(61378),
        Ah = s(24418),
        Lh = s(67957),
        Rh = s(47968);
      const Dh = (0, z.Kd)(),
        { t: Mh } = N.I18n,
        Oh = () => {};
      class Zh extends a().Component {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.getRefGallery = (e) => (this.refGallery = e)),
            (this.showMediaPopup = () => {
              this.setState({ showMediaPopup: !0 });
            }),
            (this.hideMediaPopup = () => {
              this.setState({ showMediaPopup: !1 });
            }),
            (this.showLowFulfillmentRate = () => {
              this.setState({ showLowFulfillmentRate: !0 });
            }),
            (this.hideLowFulfillmentRate = () => {
              this.setState({ showLowFulfillmentRate: !1 });
            }),
            (this.showSemiInactive = ({ isBuyNow: e }) => {
              this.setState(
                { isBuyNowInactivePopup: e, showSemiInactive: !0 },
                () => {
                  const e = document.querySelector(".shopee-alert-popup__btn");
                  e && e.focus();
                }
              );
            }),
            (this.hideSemiInactive = () => {
              this.setState({ showSemiInactive: !1 }, () => {
                if (this.state.isBuyNowInactivePopup) {
                  const e = document.querySelector(
                    `.${Lh.Z.addToCart} button:nth-child(2)`
                  );
                  e && e.focus();
                } else {
                  const e = document.querySelector(
                    `.${Lh.Z.addToCart} button:nth-child(1)`
                  );
                  e && e.focus();
                }
              });
            }),
            (this.showInactive = ({ isBuyNow: e }) => {
              this.setState(
                { isBuyNowInactivePopup: e, showInactive: !0 },
                () => {
                  const e = document.querySelector(".shopee-alert-popup__btn");
                  e && e.focus();
                }
              );
            }),
            (this.hideInactive = () => {
              this.setState({ showInactive: !1 }, () => {
                if (this.state.isBuyNowInactivePopup) {
                  const e = document.querySelector(
                    `.${Lh.Z.addToCart} button:nth-child(2)`
                  );
                  e && e.focus();
                } else {
                  const e = document.querySelector(
                    `.${Lh.Z.addToCart} button:nth-child(1)`
                  );
                  e && e.focus();
                }
              });
            }),
            (this.showPrescriptionFeed = () => {
              this.setState({ showPrescriptionFeed: !0 });
            }),
            (this.hidePrescriptionFeed = () => {
              this.setState({ showPrescriptionFeed: !1 });
            }),
            (this.showWelcomePackagePopup = () => {
              this.setState({ showWelcomePackagePopup: !0 });
            }),
            (this.hideWelcomePackagePopup = () => {
              this.setState({ showWelcomePackagePopup: !1 });
            }),
            (this.generateAddToCartPopup = (e) =>
              (0, S.jsx)(hh.Z, {
                message: e,
                primaryBtnText: Mh("product_page_label_ok"),
              })),
            (this.onMediaClick = (e) => {
              this.setState({ popupSelectedIndex: e }), this.showMediaPopup();
            }),
            (this.updateWholesaleTier = () => {
              const { item: e } = this.props;
              if (
                e &&
                e.can_use_wholesale &&
                "number" == typeof this.state.selectedQty
              ) {
                const t = (0, Ch.Z)(
                  e.wholesale_tier_list,
                  this.state.selectedQty
                );
                this.setState({ applicableWholesaleTier: t });
              }
            }),
            (this.onSelectModel = (e) => {
              e !== this.state.selectedModel &&
                (this.setState({
                  selectedModel: e,
                  selectedQty: 1,
                  previousQty: 1,
                  errorModelNotSelected: !1,
                  shouldShowMaxInputWarning: !1,
                }),
                this.props.setModelId(null == e ? void 0 : e.modelid),
                e || this.props.setSelectVariationBffData(null));
            }),
            (this.getSelectedVariationImageInfo = (e) => {
              var t, s, n, i;
              return null != e && e.length && "number" == typeof e[0]
                ? {
                    hash:
                      null !=
                      (t =
                        null == (s = this.props.item) ||
                        null == (s = s.tier_variations) ||
                        null == (s = s[0]) ||
                        null == (s = s.images)
                          ? void 0
                          : s[e[0]])
                        ? t
                        : "",
                    optionName:
                      null !=
                      (n =
                        null == (i = this.props.item) ||
                        null == (i = i.tier_variations) ||
                        null == (i = i[0]) ||
                        null == (i = i.options)
                          ? void 0
                          : i[e[0]])
                        ? n
                        : "",
                  }
                : { hash: "", optionName: "" };
            }),
            (this.onTierOptionChange = (e, t) => {
              const { item: s } = this.props,
                n = (s && s.tier_variations && s.tier_variations) || [];
              let i = new Array(n.length);
              this.state.selectedOptionIndices
                ? (i = this.state.selectedOptionIndices.slice())
                : i.fill(null);
              const a = i[e];
              i[e] = t;
              let r = 0;
              const o = (s && s.models && s.models) || [];
              for (r = 0; r < n.length; r++) {
                if (r === e) continue;
                const t = i[r] || 0,
                  s = (0, _h.iY)({
                    itemModels: o,
                    tierIndex: r,
                    selectedOptionIndices: i,
                    tierVariations: n,
                  });
                null != t && null === s[t] && (i[r] = null);
              }
              null !== a && a === t && (i[e] = null),
                i && i.every((e) => null === e) && (i = null);
              const l = i;
              if (
                (this.setState({ selectedOptionIndices: l }),
                i && -1 === i.indexOf(null))
              ) {
                const e = ((s && s.models && s.models) || []).find(
                  (e) =>
                    e.extinfo &&
                    e.extinfo.tier_index &&
                    (0, bh.Z)(e.extinfo.tier_index, i)
                );
                e ? this.onSelectModel(e) : this.onSelectModel(null);
              } else this.onSelectModel(null);
            }),
            (this.onDecreaseQty = () => {
              const e = this.state.selectedQty;
              "number" == typeof e &&
                e > 1 &&
                this.handleQtyChange(
                  "number" == typeof this.state.selectedQty
                    ? this.state.selectedQty - 1
                    : 1
                );
            }),
            (this.onIncreaseQty = () => {
              this.handleQtyChange(
                "number" == typeof this.state.selectedQty
                  ? this.state.selectedQty + 1
                  : 2
              );
            }),
            (this.onQtyInputChange = (e) => {
              this.handleQtyChange(e.target.value);
            }),
            (this.handleQtyChange = (e) => {
              const { maxInputQuantity: t, isHideStockOneApi: s } = this.props;
              if ((this.setState({ shouldShowMaxInputWarning: !1 }), "" === e))
                this.setState({ selectedQty: e });
              else {
                const n = "number" == typeof e ? e : parseInt(e, 10);
                if (isNaN(n)) return;
                const i = s,
                  a = i ? Math.min(n, t, 10) : Math.min(n, t);
                !i && n > t && this.setState({ shouldShowMaxInputWarning: !0 }),
                  this.setState({ selectedQty: a, previousQty: a });
              }
            }),
            (this.onQtyInputBlur = (e) => {
              const { maxInputQuantity: t } = this.props,
                { previousQty: s } = this.state,
                { value: n } = e.target;
              if ("" === n) {
                const e = Math.min(t, s);
                this.setState({ selectedQty: e, previousQty: e });
              }
            }),
            (this.handleAddItemToCart = (e) => {
              const {
                item: t,
                shopInfo: s,
                accountInfo: n,
                loggedIn: i,
                requireUserToLogin: a,
              } = this.props;
              if (!n || !i)
                return void a(e ? "pdp_buy_now_btn" : "pdp_add_to_cart_btn");
              if (!t || 0 === t.stock) return;
              if (t && t.models && t.models.length && !this.state.selectedModel)
                return void this.setState({ errorModelNotSelected: !0 });
              const r = (!!s && s.last_active_time) || 0,
                o = (0, p.Z)(t, ["has_low_fulfillment_rate"], !1);
              this.setState({ isBuyNowClick: !!e }, () => {
                (0, gh._h)(r) && "IN" !== Dh
                  ? this.showInactive({ isBuyNow: e })
                  : (0, kh.u)(t ? t.label_ids : null)
                  ? this.showPrescriptionFeed()
                  : o
                  ? this.showLowFulfillmentRate()
                  : (0, gh.VH)(r) && "IN" !== Dh
                  ? this.showSemiInactive({ isBuyNow: e })
                  : this.buyNowOrAddToCart(e);
              });
            }),
            (this.addItemToCart = async function (e) {
              const {
                  state: { selectedModel: s, previousQty: n },
                  props: i,
                } = t,
                { accountInfo: a, item: r, showPopup: o, addItemToCart: l } = i;
              if (r) {
                const { itemid: c, shopid: d } = r,
                  u = s && s.modelid,
                  h = await l({
                    shopId: d,
                    itemId: c,
                    quantity: n,
                    modelId: u,
                    source: JSON.stringify({
                      refer_urls: (0, Nh.getReferals)(c),
                    }),
                    add_on_deal_id: (0, p.Z)(r, [
                      "add_on_deal_info",
                      "add_on_deal_id",
                    ]),
                    client_source: C.mM.PDP_PAGE,
                    onSuccess: () => {
                      i.fetchCartDrawerItems(),
                        null == i.hostFetchCartDrawerItems ||
                          i.hostFetchCartDrawerItems();
                    },
                  });
                if (
                  (h &&
                    h.error &&
                    h.error_msg &&
                    (0, C.Qv)(h.error) &&
                    o(t.generateAddToCartPopup(h.error_msg)),
                  h && !h.error)
                ) {
                  if (
                    ((0, wh.X)({
                      accountInfo: a,
                      item: r,
                      selectedModel: s,
                      quantity: n,
                    }),
                    e)
                  ) {
                    i.unmountPageToDefaultTheme("product");
                    const e = (0, Eh.G4)({ itemId: c, modelId: u });
                    i.history.push(jh.N.getUrl({ shopId: d, itemKeys: [e] }));
                  }
                  t.trackAddToCartSuccess(e);
                }
              }
            }),
            (this.handleAutoSelectModel = (e) => {
              let t = null;
              if (e && e.models) {
                const s = e.models;
                if (
                  1 === s.length &&
                  s[0].stock > 0 &&
                  s[0].status === Ih.Z.NORMAL
                )
                  t = s[0];
                else {
                  const e = (0, _h.KC)({
                      models: s,
                      selectedOptionIndices: null,
                    }),
                    n = e && 1 === e.length ? e[0] : null;
                  if (n) {
                    const e = n.extinfo && n.extinfo.tier_index;
                    this.setState({ selectedOptionIndices: e }), (t = n);
                  }
                }
              }
              return t && this.onSelectModel(t), t;
            }),
            (this.showToast = (e) => {
              this.setState({ shouldShowToast: !0, toastProps: e });
            }),
            (this.hideToast = () => {
              this.setState({
                shouldShowToast: !1,
                toastProps: { toastText: "" },
              });
            }),
            (this.handleGimmickItemClick = () => {
              this.showToast({
                toastText: Mh("label_item_not_individual_sale"),
              });
            }),
            (this.handleBuyNowClick = () => {
              const { item: e } = this.props,
                t = (0, Sh.G)(e),
                s = !!e && e.welcome_package_type === Gn.y.FREE_GIFT,
                n = !!e && e.welcome_package_type === Gn.y.EXCLUSIVE_DEALS;
              t
                ? this.handleGimmickItemClick()
                : s || n
                ? this.setState({ showWelcomePackagePopup: !0 })
                : this.handleAddItemToCart(!0);
            }),
            (this.handleAddItemToCartClick = () => {
              const { item: e } = this.props,
                t = (0, Sh.G)(e),
                s = !!e && e.welcome_package_type === Gn.y.FREE_GIFT;
              this.hideMediaPopup();
              const n = !!e && e.welcome_package_type === Gn.y.EXCLUSIVE_DEALS;
              t
                ? this.handleGimmickItemClick()
                : s || n
                ? this.setState({ showWelcomePackagePopup: !0 })
                : this.handleAddItemToCart(!1);
            }),
            (this.state = {
              showMediaPopup: !1,
              showLowFulfillmentRate: !1,
              showSemiInactive: !1,
              showInactive: !1,
              showAdultPopup: !1,
              showPrescriptionFeed: !1,
              isBuyNowClick: !1,
              showWelcomePackagePopup: !1,
              isBuyNowInactivePopup: !1,
              isFetchCompleted: !1,
              popupSelectedIndex: 0,
              selectedModel: null,
              selectedQty: 1,
              previousQty: 1,
              selectedOptionIndices: null,
              errorModelNotSelected: !1,
              applicableWholesaleTier: null,
              shouldShowMaxInputWarning: !1,
              shouldShowToast: !1,
              toastProps: { toastText: "" },
            }),
            (this.contextMethods = {
              onSelectModel: this.onSelectModel.bind(this),
              onIncreaseQty: this.onIncreaseQty.bind(this),
              onDecreaseQty: this.onDecreaseQty.bind(this),
              onQtyInputChange: this.onQtyInputChange.bind(this),
              onQtyInputBlur: this.onQtyInputBlur.bind(this),
              addItemToCart: this.addItemToCart.bind(this),
              onTierOptionChange: this.onTierOptionChange.bind(this),
            }),
            (this.searchParams = new URLSearchParams(e.location.search));
          const s = e.oneApiOnChangeInputQuantity;
          this.debouncedOnChangeInputQuantity = (0, jr.ZP)(s, 500);
        }
        buyNowOrAddToCart(e = this.state.isBuyNowClick) {
          e && (0, V.isFeatureEnabled)(W.b7)
            ? this.redirectToOnePageCheckout()
            : this.addItemToCart(e);
        }
        async redirectToOnePageCheckout() {
          const { previousQty: e, selectedModel: t } = this.state,
            { item: s, defaultDeliveryAddress: n, history: i } = this.props,
            { itemid: a, shopid: r } = s,
            o = t.modelid,
            l = await (0, xh.T)({
              source: xh.t.PDP_BUY_NOW,
              buyerAddress: n,
              shopOrders: [
                { shopId: r, items: [{ itemId: a, modelId: o, quantity: e }] },
              ],
            });
          null != l && l.errorMessage
            ? this.showToast({ toastText: l.errorMessage })
            : (this.trackAddToCartSuccess(!0),
              (0, vh.Hl)({
                source: vh.Zm,
                history: i,
                data: {
                  shoporders: [
                    {
                      shop: { shopid: r },
                      items: [{ itemid: a, modelid: o, quantity: e }],
                    },
                  ],
                },
              }));
        }
        trackAddToCartSuccess(e) {
          const {
              state: { selectedModel: t, previousQty: s },
            } = this,
            {
              item: n,
              adsTrackingData: i,
              crossPageTrackingData: a,
            } = this.props;
          if (!n) return;
          const { itemid: r, shopid: o } = n,
            l = null == t ? void 0 : t.modelid;
          (0, me.trackingAction)({
            action: "addToCartSuccess",
            data: {
              itemId: r,
              shopId: o,
              modelId: l,
              quantity: s,
              isBuyNow: e,
              price: t ? t.price : n.price,
              catId: n.catid,
              name: n.name,
              isGroupBuyItem: t
                ? !!t.extinfo && t.extinfo.group_buy_info
                : n.is_group_buy_item,
              adsTrackingData: i,
              crossPageTrackingData: a,
            },
            track: this.props.contextOnTrack,
          });
        }
        async universalDataFetch() {
          const {
              item: e,
              shopId: t,
              oneApiInitAddToCartInfo: s,
              fetchUserAddressList: n,
              loggedIn: i,
            } = this.props,
            a = s,
            { selectedModel: r, selectedQty: o } = this.state;
          e &&
            e.itemid &&
            (await Promise.all([
              a({
                shopId: t,
                itemId: e.itemid,
                selectedModel: r || null,
                inputQuantity: o || 1,
                isLoggedIn: i,
                locale: Dh,
                t: Mh,
              }),
              n(),
            ]),
            this.setState({ isFetchCompleted: !0 }));
        }
        async componentDidMount() {
          const { item: e } = this.props;
          await this.universalDataFetch(), this.handleAutoSelectModel(e);
        }
        async componentDidUpdate(e, t) {
          var s = this;
          const { props: i, state: a } = this,
            { item: r } = e,
            {
              item: o,
              shopId: l,
              oneApiInitAddToCartInfo: c,
              oneApiOnChangeModel: d,
              oneApiOnChangeInputQuantity: u,
              updateCartQuantity: h,
              ENABLE_QUANTITY_PURCHASE_WITH_LIMIT: m,
              maxInputQuantity: _,
              loggedIn: g,
              fetchUserAddressList: f,
            } = i,
            x = c,
            v = d,
            C = u,
            {
              selectedQty: j,
              selectedModel: b,
              previousQty: N,
              shouldShowMaxInputWarning: I,
            } = a;
          if (
            ((j !== t.selectedQty || I !== t.shouldShowMaxInputWarning) &&
              "number" == typeof j &&
              (this.updateWholesaleTier(), o && o.itemid) &&
              (m ? this.debouncedOnChangeInputQuantity : C)({
                shopId: l,
                itemId: o.itemid,
                item: o,
                selectedModel: b || null,
                inputQuantity: j,
                enablePurchaseWithLimit: m,
                locale: Dh,
                shouldShowMaxInputWarning: this.state.shouldShowMaxInputWarning,
                t: Mh,
              }),
            _ !== e.maxInputQuantity && _)
          ) {
            const e = Math.min(_, N);
            if (isNaN(e)) return;
            this.setState({ selectedQty: e, previousQty: e });
          }
          (0, p.Z)(o, ["models"]) !== (0, p.Z)(r, ["models"]) &&
            ((this.searchParams = new URLSearchParams(i.location.search)),
            this.setState(
              { selectedModel: null, selectedOptionIndices: null },
              async function () {
                const { selectedQty: e } = s.state,
                  t = s.searchParams.get("model"),
                  n = (0, _h.Sb)(o, t),
                  i = (0, _h.xT)(n),
                  a = i ? n : s.handleAutoSelectModel(o);
                if (i && a) {
                  const e = a.extinfo && a.extinfo.tier_index;
                  s.setState({ selectedOptionIndices: e }), s.onSelectModel(a);
                }
                o &&
                  o.itemid &&
                  x &&
                  (await Promise.all([
                    x({
                      shopId: l,
                      itemId: o.itemid,
                      item: o,
                      selectedModel: a || null,
                      inputQuantity: e || 1,
                      isLoggedIn: g,
                      locale: Dh,
                      t: Mh,
                    }),
                    f(),
                  ]),
                  s.setState({ isFetchCompleted: !0 }));
              }
            )),
            a.selectedModel !== t.selectedModel &&
              "number" == typeof j &&
              (!this.searchParams ||
                !Array.from(this.searchParams.keys()).includes("model") ||
                (b && b.modelid + "" === this.searchParams.get("model")) ||
                (this.searchParams.delete("model"),
                i.history.replace(
                  { search: this.searchParams.toString() },
                  (0, n.Z)({}, i.location.state || {})
                )),
              o &&
                o.itemid &&
                v &&
                v({
                  shopId: l,
                  itemId: o.itemid,
                  item: o,
                  selectedModel: b || null,
                  inputQuantity: j,
                  enablePurchaseWithLimit: m,
                  locale: Dh,
                  t: Mh,
                })),
            i.cartItemCount !== e.cartItemCount &&
              "number" == typeof j &&
              o &&
              o.itemid &&
              h &&
              h({
                shopId: l,
                itemId: o.itemid,
                selectedModel: b || null,
                inputQuantity: j,
                enablePurchaseWithLimit: m,
                locale: Dh,
                t: Mh,
              });
        }
        render() {
          const { state: e, props: t } = this,
            {
              item: s,
              shopInfo: i,
              accountInfo: a,
              isShopeeMart: r,
              isScsShop: o,
            } = t;
          return (0, S.jsx)(Wi.b.Provider, {
            value: e,
            children: (0, S.jsxs)(Wi.t.Provider, {
              value: this.contextMethods,
              children: [
                (0, S.jsx)(uh, {
                  displayPopup: e.showWelcomePackagePopup,
                  hideWelcomePackagePopup: this.hideWelcomePackagePopup,
                }),
                (0, S.jsxs)("section", {
                  className: l()("product-briefing flex card", gu.Z.brief),
                  children: [
                    !!s &&
                      (0, S.jsxs)(S.Fragment, {
                        children: [
                          (0, S.jsx)(mh.Z, {
                            isOpen: e.showLowFulfillmentRate,
                            primaryBtnText: Mh(
                              "product_page_label_low_fulfillment_buy_anyway"
                            ),
                            onPrimaryBtnClick: () => {
                              this.buyNowOrAddToCart();
                            },
                            complementBtnText: Mh(
                              "product_page_label_low_fulfillment_chat_to_offer"
                            ),
                            onComplementBtnClick: () => {
                              t.chatWithShop(Vi.G.ENTRY_POINT_POOR_FULFILMENT);
                            },
                            message: `${Mh(
                              "product_page_msg_low_fulfillment_rate_popup"
                            )}`,
                            onClose: this.hideLowFulfillmentRate,
                          }),
                          (0, S.jsx)(Ke.Z, {
                            isOpen: e.showSemiInactive,
                            children: (0, S.jsx)(hh.Z, {
                              primaryBtnText: Mh(
                                "product_page_label_buy_anyway"
                              ),
                              onPrimaryBtnClick: () => {
                                this.buyNowOrAddToCart();
                              },
                              complementBtnText: Mh(
                                "product_page_label_chat_to_offer"
                              ),
                              onComplementBtnClick: () => {
                                t.chatWithShop(
                                  Vi.G.ENTRY_POINT_PRODUCT_INACTIVE_SELLER
                                );
                              },
                              message: `${Mh(
                                "product_page_msg_inactive_sellers_popup" +
                                  (o ? "_idscs" : ""),
                                { n: fh.Jm }
                              )}`,
                              onClose: this.hideSemiInactive,
                            }),
                          }),
                          (0, S.jsx)(Ke.Z, {
                            isOpen: e.showInactive,
                            children: (0, S.jsx)(hh.Z, {
                              primaryBtnText: Mh(
                                "product_page_label_chat_to_offer"
                              ),
                              onPrimaryBtnClick: () => {
                                t.chatWithShop(
                                  Vi.G.ENTRY_POINT_PRODUCT_INACTIVE_SELLER
                                );
                              },
                              complementBtnText: Mh(
                                "product_page_label_cancel"
                              ),
                              onComplementBtnClick: Oh,
                              message: `${Mh(
                                "product_page_msg_real_inactive_sellers_popup" +
                                  (o ? "_idscs" : ""),
                                { n: fh.KC }
                              )}`,
                              onClose: this.hideInactive,
                            }),
                          }),
                          (0, S.jsx)(Ke.Z, {
                            isOpen: e.showPrescriptionFeed,
                            children: (0, S.jsx)(hh.Z, {
                              primaryBtnText: Mh(
                                "product_page_prescription_feed_popup_btn"
                              ),
                              onPrimaryBtnClick: () => {
                                this.buyNowOrAddToCart();
                              },
                              message: (0, S.jsx)("span", {
                                style: { whiteSpace: "pre-line" },
                                children: Mh(
                                  "product_page_prescription_feed_popup_msg"
                                ),
                              }),
                              onClose: this.hidePrescriptionFeed,
                            }),
                          }),
                        ],
                      }),
                    (0, S.jsxs)("section", {
                      className: gu.Z.briefLeft,
                      children: [
                        (0, S.jsx)(Y, {}),
                        (0, S.jsx)(Ie, { item: s, shopInfo: i }),
                      ],
                    }),
                    (0, S.jsx)("section", {
                      className: l()("flex flex-auto", gu.Z.briefRight),
                      children: s
                        ? (0, S.jsxs)("div", {
                            className: l()(
                              "flex-auto flex-column ",
                              gu.Z.briefRightContent
                            ),
                            children: [
                              (0, S.jsx)(Qe, { item: s, isShopeeMart: r }),
                              (0, S.jsx)(qe, { item: s, isShopeeMart: r }),
                              (0, S.jsx)(Pt, {
                                item: s,
                                onClickRatingTab: this.props.onClickRatingTab,
                              }),
                              (0, S.jsxs)("div", {
                                style: { marginTop: 10 },
                                children: [
                                  (0, S.jsx)(Ss, { item: s }),
                                  s.preview_info &&
                                    (0, S.jsx)(ks, {
                                      previewInfo: s.preview_info,
                                    }),
                                  (0, S.jsx)(aa, {
                                    item: s,
                                    isShopeeMart: r,
                                    userId: (0, p.Z)(a, ["userId"], null),
                                  }),
                                ],
                              }),
                              (0, S.jsx)(ja, {}),
                              (0, S.jsx)(la, {}),
                              (0, S.jsx)(Na, {}),
                              (0, S.jsx)("div", {
                                className: gu.Z.dataTable,
                                children: (0, S.jsx)(Cd, {
                                  item: s,
                                  isShopeeMart: r,
                                  addressDone: this.state.isFetchCompleted,
                                }),
                              }),
                              (0, S.jsx)("div", {
                                className: gu.Z.buyActionsContainer,
                                children: (0, S.jsx)(jd.Z, {
                                  shopInfo: i,
                                  userAccount: a,
                                  selectedModel: e.selectedModel,
                                  onAddToCart: this.handleAddItemToCartClick,
                                  onBuyNow: this.handleBuyNowClick,
                                }),
                              }),
                              (0, S.jsx)(
                                ze.ZP,
                                (0, n.Z)(
                                  {
                                    showToast: this.state.shouldShowToast,
                                    toastIcon: (0, S.jsx)("img", {
                                      alt: "icon bubble info",
                                      src: Th,
                                    }),
                                    onToastDismiss: this.hideToast,
                                    style: { padding: "25px" },
                                  },
                                  this.state.toastProps
                                )
                              ),
                              (0, S.jsx)(_u, {
                                className: gu.Z.briefingFooter,
                              }),
                            ],
                          })
                        : (0, S.jsx)(fu, {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
      }
      const Fh = {
          unmountPageToDefaultTheme: v.PP,
          oneApiInitAddToCartInfo: ch.cH,
          oneApiOnChangeModel: ch.ou,
          oneApiOnChangeInputQuantity: ch.Fl,
          updateCartQuantity: ch.rC,
          fetchCartDrawerItems: lh.E,
          showPopup: ph.U,
        },
        Bh = (0, h.compose)(
          (0, me.withOnTrackAsProps)(),
          d.withRouter,
          (0, Ph.u)(),
          (0, Kl.q)(),
          (0, u.connect)((e, t) => {
            const {
              accountInfo: s,
              accountStatus: n,
              accountInfoProgress: i,
            } = t;
            return {
              birthTimestamp: s && s.birthTimestamp,
              adultConsent: s && s.adultConsentTimestamp,
              loggedIn: n && n === Ah.d.LOGGED_IN,
              isFetchAccountInfoDone: i === $r.ZP.OK || i === $r.ZP.ERR,
              cartItemCount: (0, yh.rJ)(e),
              ENABLE_QUANTITY_PURCHASE_WITH_LIMIT: (0, V.isFeatureEnabled)(
                W.XH
              ),
              ENABLED_OFFICIAL_SHOP_SELLING_POINT: (0, V.isFeatureEnabled)(
                W.C$
              ),
            };
          }, Fh),
          function (e) {
            return (t) =>
              (0, S.jsx)(_e.Z.Consumer, {
                children: (s) =>
                  (0, S.jsx)(
                    e,
                    (0, n.Z)({}, t, {
                      adsTrackingData: s.adsTrackingData,
                      crossPageTrackingData: s.crossPageTrackingData,
                    })
                  ),
              });
          }
        )(function (e) {
          var t, s;
          const a = (0, K.j0)(),
            r = (0, F.MU)(),
            o = (0, Kn.dW)(),
            l = (0, F.mX)("disable_price_with_variation"),
            c = (0, Kn.HK)(),
            d = (0, ts.p0)(),
            u = l
              ? null !=
                (t =
                  null != c
                    ? c
                    : null == (s = e.item)
                    ? void 0
                    : s.max_quantity)
                ? t
                : 10
              : d,
            p = (0, F.Ub)(),
            { handlers: h } = (0, i.useContext)(Rh.PageConfigurationContext);
          return (0,
          S.jsx)(Zh, (0, n.Z)({}, e, { setModelId: a, isHideStockOneApi: r, setSelectVariationBffData: o, maxInputQuantity: u, isScsShop: p, hostFetchCartDrawerItems: null == h ? void 0 : h.fetchCartDrawerItems }));
        });
      var Hh = s(54529),
        Uh = s(21051);
      const Vh = (0, L.Z)({ loader: () => s.e(5937).then(s.bind(s, 53169)) }),
        Wh = (0, L.Z)({ loader: () => s.e(2212).then(s.bind(s, 78085)) }),
        Qh = (0, L.Z)({
          loader: () =>
            Promise.all([s.e(5325), s.e(3538), s.e(3546)]).then(
              s.bind(s, 80016)
            ),
        }),
        Gh = (0, Hh.Z)({
          hydrateId: "shopee-choice-recommendations",
          chunkName: "ShopeeChoiceRecommendations",
          loader: () =>
            Promise.all([s.e(5325), s.e(3538), s.e(2334)]).then(
              s.bind(s, 49667)
            ),
        }),
        qh = (0, Hh.Z)({
          hydrateId: "pdp-product-shop",
          chunkName: "ProductShop",
          loader: () => s.e(1384).then(s.bind(s, 2326)),
        }),
        Kh = (0, Hh.Z)({
          hydrateId: "pdp-spu-shop",
          chunkName: "SpuShop",
          loader: () => s.e(6494).then(s.bind(s, 55415)),
        });
      function $h({ shop: e, chatWithShop: t }) {
        var s, n;
        const i = (0, F.f3)(),
          a = (0, F.b2)(),
          r = (0, F.$8)(),
          { isOfficial: o, isMart: l } = (0, F.J_)(),
          { showOtherQuantities: c } = (0, Uh.W)({ item: i, shopInfo: e }),
          d = (0, p.Z)(i, ["categories", 0, "catid"], 0),
          u = (0, p.Z)(i, ["categories", 2, "catid"], 0),
          h =
            null !=
            (s = a
              ? null == r
                ? void 0
                : r.rItemId
              : null == i
              ? void 0
              : i.item_id)
              ? s
              : 0,
          m =
            null !=
            (n = a
              ? null == r
                ? void 0
                : r.rShopId
              : null == i
              ? void 0
              : i.shop_id)
              ? n
              : 0,
          _ = (0, S.jsxs)(S.Fragment, {
            children: [
              i && i.add_on_deal_info ? (0, S.jsx)(Vh, { item: i }) : null,
              i &&
                !!i.bundle_deal_id &&
                (0, S.jsx)(Wh, {
                  bundleDealId: i.bundle_deal_id,
                  itemId: h,
                  shopId: m,
                  isOfficialShop: o,
                  isShopeeMart: l,
                  fromModel: null == r ? void 0 : r.rModelId,
                  vItemId: null == r ? void 0 : r.vItemId,
                  vModelId: null == r ? void 0 : r.vModelId,
                  vShopId: null == r ? void 0 : r.vShopId,
                }),
            ],
          }),
          g = (0, F.aj)(),
          f = (0, F.mX)("display_choice_customised_section"),
          x = !a && g && f;
        return i
          ? (0, S.jsxs)(S.Fragment, {
              children: [
                _,
                c && (0, S.jsx)(Qh, { shopInfo: e, item: i }),
                a
                  ? (0, S.jsx)(Kh, { chatWithUser: t })
                  : (0, S.jsx)(qh, {
                      item: i,
                      itemId: h,
                      categoryId: d,
                      l3CategoryId: u,
                      shopInfo: e,
                      isFetching: !i,
                      chatWithUser: t,
                      isShopeeMart: l,
                    }),
                x && (0, S.jsx)(Gh, {}),
              ],
            })
          : null;
      }
      const Yh = s.p + "productdetailspage/346bf514504c618c4c06.png";
      function zh() {
        return (0, S.jsx)("div", {
          role: "main",
          className: "product-not-exist",
          children: (0, S.jsxs)("div", {
            className: "product-not-exist__content",
            children: [
              (0, S.jsx)("img", {
                src: Yh,
                alt: "product not exist",
                className: "product-not-exist__icon",
              }),
              (0, S.jsx)("div", {
                className: "product-not-exist__text",
                children: N.I18n.t("text_product_not_exist"),
              }),
            ],
          }),
        });
      }
      const { t: Xh } = N.I18n,
        Jh = ({ shopInfo: e, userId: t }) =>
          e && e.vacation && e.userid !== t
            ? (0, S.jsxs)("div", {
                className: "dBfDWY",
                children: [
                  (0, S.jsx)("img", {
                    alt: "icon product notice",
                    className: "OzG_WI",
                    src: Ia,
                  }),
                  Xh("product_page_text_seller_on_vacation"),
                ],
              })
            : null;
      var em = s(27432);
      const tm = "SPC_IAA",
        sm = (e, t) => e.is_alcohol_product && t,
        nm = (e) => {
          (0, g.pC)(tm, e ? "1" : "0");
        },
        im = () => "1" === (0, g.ej)(tm) || "0" === (0, g.ej)(tm),
        am = (e) => (0, em.Bb)(21)(e);
      var rm = s(11623);
      function om() {
        const e = (0, d.useHistory)();
        return () => {
          e && ("PUSH" === e.action ? e.goBack() : e.push("/"));
        };
      }
      const lm = "SXDo3H",
        { t: cm } = N.I18n,
        dm = function () {
          var e, t;
          const s = (0, u.useDispatch)(),
            n = (0, F.f3)(),
            {
              accountInfo: i,
              birthTimestamp: a,
              isLoggedIn: r,
              isFetchAccountInfoDone: o,
              setUserAdultConsentTimestamp: c,
            } = (0, H.Sq)(),
            d = om(),
            p = (0, V.isFeatureEnabled)(W.xY);
          if (
            (null != n && null != (e = n.age_gate) && e.kyc) ||
            (null != n &&
              null != (t = n.age_gate_control) &&
              t.age_gate_level) ||
            !n ||
            !sm(n, p)
          )
            return null;
          const h = () => {
            d(), setTimeout(() => nm(!1), 0);
          };
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)(Ke.Z, {
                isOpen: !(!(sm(n, p) && i && o) || im() || (a && !am(a))),
                children: (0, S.jsx)(hh.Z, {
                  className: l()("adult-confirmation-popup", lm),
                  primaryBtnText: cm("label_alcohol_product_popup_yes"),
                  complementBtnText: cm("label_alcohol_product_popup_no"),
                  onPrimaryBtnClick: () => {
                    r && c({ adultConsentTimestamp: +new Date() }),
                      s((0, rm.wk)(!0)),
                      nm(!0);
                  },
                  onComplementBtnClick: h,
                  title: cm("label_confirm_age_religion"),
                  message: cm("text_adult_alcohol_confirm_msg", { age: 21 }),
                }),
              }),
              (0, S.jsx)(Ke.Z, {
                isOpen: !!(
                  sm(n, p) &&
                  i &&
                  o &&
                  ((im() && "1" !== (0, g.ej)(tm)) || (a && !am(a)))
                ),
                children: (0, S.jsx)(hh.Z, {
                  className: l()("adult-confirmation-popup", lm),
                  primaryBtnText: cm("pdp_label_alcohol_product_popup_go_back"),
                  onPrimaryBtnClick: h,
                  message: cm("pdp_msg_must_be_alcohol_adult_to_view_content", {
                    age: 21,
                  }),
                }),
              }),
            ],
          });
        };
      var um = s(15519),
        pm = s(48247),
        hm = s(37701),
        mm = s.n(hm);
      function _m({
        closeWhenClickOverlay: e,
        targetType: t = "Modal",
        children: s,
        className: n,
        onClose: a,
      }) {
        const r = (0, i.useCallback)(() => {
            e && a && a();
          }, [e, a]),
          o = (0, i.useCallback)(
            (e) => {
              "Escape" === e.key && r();
            },
            [r]
          );
        return (
          (0, i.useEffect)(
            () => (
              window.addEventListener("keyup", o),
              () => {
                window.removeEventListener("keyup", o);
              }
            ),
            [o]
          ),
          (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)("style", {
                type: "text/css",
                dangerouslySetInnerHTML: { __html: "body{overflow:hidden;}" },
              }),
              (0, S.jsx)(me.TrackingDataAnchor, {
                targetType: t,
                children: (0, S.jsxs)(mm(), {
                  element: "div",
                  className: "OK2S5z",
                  children: [
                    (0, S.jsx)("div", {
                      className: l()("XsMEjP", n),
                      children: s,
                    }),
                    (0, S.jsx)("div", { className: "EBRFWp", onClick: r }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      const gm = {
        container: "cz7Ulg",
        "type-filled": "o9RGvm",
        disabled: "LOZP9g",
        "type-outlineNeutral": "NvCpmF",
        "size-large": "oBKomb",
        "width-full": "NEJEI0",
      };
      function fm({
        children: e,
        type: t = "filled",
        size: s = "normal",
        width: n = "auto",
        disabled: i,
        onClick: a,
      }) {
        return (0, S.jsx)("button", {
          className: l()(
            gm.container,
            gm[`type-${t}`],
            gm[`size-${s}`],
            gm[`width-${n}`]
          ),
          disabled: i,
          onClick: a,
          children: e,
        });
      }
      function xm({
        closeWhenClickOverlay: e,
        children: t,
        title: s,
        primaryActionText: n,
        secondaryActionText: i,
        onClickPrimary: a,
        onClickSecondary: r,
        onClose: o,
      }) {
        return (0, S.jsxs)(_m, {
          onClose: o,
          closeWhenClickOverlay: e,
          className: "X4TmNY",
          children: [
            s && (0, S.jsx)("div", { className: "GufqRt", children: s }),
            (0, S.jsx)("div", { className: "a3f5I1", children: t }),
            (0, S.jsxs)("div", {
              className: "YU4z24",
              children: [
                (0, S.jsx)(fm, {
                  onClick: a,
                  type: "filled",
                  size: "large",
                  width: "full",
                  disabled: !1,
                  children: n,
                }),
                i &&
                  (0, S.jsx)(fm, {
                    onClick: r,
                    type: "outlineNeutral",
                    size: "large",
                    width: "full",
                    disabled: !1,
                    children: i,
                  }),
              ],
            }),
          ],
        });
      }
      const { t: vm } = N.I18n;
      function Cm() {
        const e = (0, d.useHistory)(),
          {
            adultState: t,
            adultMinAge: s,
            adultConfirm: n,
            adultCancel: i,
            adultConfirmSession: a,
            adultCancelSession: r,
          } = (0, pm.Ie)(),
          o = () => {
            (0, $e.Fv)(e);
          };
        switch (t) {
          case pm.SN.CONFIRM:
            return (0, S.jsx)(xm, {
              title: vm("label_confirm_age"),
              primaryActionText: vm("label_age_over_n", { age: s }),
              secondaryActionText: vm("label_age_under_n", { age: s }),
              onClickPrimary: n,
              onClickSecondary: i,
              children: vm("text_adult_confirm_msg", { age: s }),
            });
          case pm.SN.CONFIRM_SESSION:
            return (0, S.jsx)(xm, {
              title: vm("label_confirm_age_repeated"),
              primaryActionText: vm("label_age_over_n", { age: s }),
              secondaryActionText: vm("label_age_under_n", { age: s }),
              onClickPrimary: a,
              onClickSecondary: r,
              children: vm("text_adult_confirm_msg_repeated", { age: s }),
            });
          case pm.SN.BLOCK:
            return (0, S.jsx)(xm, {
              primaryActionText: vm("product_page_label_go_back"),
              onClickPrimary: o,
              children: vm("msg_must_be_adult_to_view_content", { age: s }),
            });
          default:
            return null;
        }
      }
      const { t: jm } = N.I18n;
      function bm() {
        const e = (0, d.useHistory)(),
          { kycAdultState: t, kycMinAge: s } = (0, pm.I0)(),
          n = () => {
            (0, $e.Fv)(e);
          },
          i = () => {
            (0, $e.IB)(e);
          },
          a = () => {
            e.push("/web");
          };
        switch (t) {
          case pm.bp.KYC_GUEST:
            return (0, S.jsx)(xm, {
              title: jm("label_confirm_age"),
              primaryActionText: jm("label_login_pdp"),
              secondaryActionText: jm("product_page_label_go_back"),
              onClickPrimary: i,
              onClickSecondary: n,
              children: jm("pdp_msg_login_to_verify", { age: s }),
            });
          case pm.bp.KYC_SPP_NOT_ACTIVE:
            return (0, S.jsx)(xm, {
              title: jm("label_confirm_age"),
              primaryActionText: jm("pdp_label_get_spp_to_verify_in_app_btn"),
              secondaryActionText: jm("product_page_label_go_back"),
              onClickPrimary: a,
              onClickSecondary: n,
              children: jm("pdp_msg_get_spp_to_verify", { age: s }),
            });
          case pm.bp.KYC_SPP_NOT_VERIFIED:
            return (0, S.jsx)(xm, {
              title: jm("label_confirm_age"),
              primaryActionText: jm("pdp_label_kyc_to_verify_in_app_btn"),
              secondaryActionText: jm("product_page_label_go_back"),
              onClickPrimary: a,
              onClickSecondary: n,
              children: jm("pdp_msg_kyc_to_verify", { age: s }),
            });
          case pm.bp.KYC_BLOCK:
            return (0, S.jsx)(xm, {
              primaryActionText: jm("product_page_label_go_back"),
              onClickPrimary: n,
              children: jm("pdp_msg_must_be_adult_to_view_content", { age: s }),
            });
          default:
            return null;
        }
      }
      const { t: Nm } = N.I18n;
      function Im() {
        const e = (0, d.useHistory)(),
          {
            ageGateAdultState: t,
            ageGateAdultMinAge: s,
            ageGateAdultConfirm: n,
          } = (0, pm.$5)(),
          i = () => {
            (0, $e.Fv)(e);
          };
        switch (t) {
          case pm.sz.CONFIRM:
            return (0, S.jsx)(xm, {
              title: Nm("label_confirm_age"),
              primaryActionText: Nm("label_age_over_n", { age: s }),
              secondaryActionText: Nm("label_age_under_n", { age: s }),
              onClickPrimary: n,
              onClickSecondary: i,
              children: Nm("text_adult_confirm_msg", { age: s }),
            });
          case pm.sz.BLOCK:
            return (0, S.jsx)(xm, {
              primaryActionText: Nm("product_page_label_go_back"),
              onClickPrimary: i,
              children: Nm("msg_must_be_adult_to_view_content", { age: s }),
            });
          default:
            return null;
        }
      }
      function ym() {
        const e = (0, u.useDispatch)(),
          t = (0, um.Q)(),
          { adultState: s } = (0, pm.Ie)(),
          { kycAdultState: n } = (0, pm.I0)(),
          { ageGateAdultState: i } = (0, pm.$5)();
        let a = null;
        return (
          (0, r.u)(() => {
            e((0, rm.r4)());
          }, []),
          n !== pm.bp.KYC_NONE
            ? n !== pm.bp.KYC_PASS && (a = (0, S.jsx)(bm, {}))
            : i !== pm.sz.NONE
            ? i !== pm.sz.PASS && (a = (0, S.jsx)(Im, {}))
            : s !== pm.SN.NONE && s !== pm.SN.PASS && (a = (0, S.jsx)(Cm, {})),
          a || t
        );
      }
      var Sm = s(19365);
      const { t: Tm } = N.I18n,
        wm = new Map(),
        km = "milk_acknowledgemnt_map",
        Em = (0, V.isFeatureEnabled)(W.nB);
      function Pm() {
        const e = new Date(),
          t = String(e.getDate()).padStart(2, "0");
        return (
          String(e.getMonth() + 1).padStart(2, "0") +
          "/" +
          t +
          "/" +
          e.getFullYear()
        );
      }
      function Am({ userId: e, isMilkProduct: t = !1, handleGoBack: s }) {
        const n = null != e ? e : 0,
          [a, r] = i.useState(wm),
          [o, l] = i.useState(!0);
        return (
          i.useEffect(() => {
            if (t) {
              const t = (() => {
                const e = mc.X.isSupported() ? mc.X.read(km) : wm;
                return e ? new Map(JSON.parse(e)) : wm;
              })();
              r(t), l(t.get(e) === Pm());
            }
          }, [t, e]),
          Em && t && !o
            ? (0, S.jsx)(Sm.Z, {
                buttonVariant: "stacked-buttons",
                title: Tm("label_milk_acknowledgment_title"),
                content: (0, S.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: Tm("label_milk_acknowledgment_content"),
                  },
                }),
                textAlign: "left",
                primaryActionText: Tm("label_acknowledge"),
                secondaryActionText: Tm("label_back_to_previous"),
                onClickPrimary: () => {
                  mc.X.isSupported() &&
                    (a.set(n, Pm()),
                    mc.X.write(km, JSON.stringify(Array.from(a.entries())))),
                    l(!0);
                },
                onClickSecondary: s,
              })
            : null
        );
      }
      function Lm() {
        const e = (0, F.Vr)(),
          { shopId: t, itemId: s } = (0, F.u4)(),
          n = (0, F.xq)(),
          i = {
            shop_id: t,
            item_id: s,
            device_id: "",
            compatibility_status: 2,
          },
          a = (0, me.useTrackImpression)("AutoPartsVehicleInfo", i);
        return 1 === e
          ? (0, S.jsx)("div", {
              className: "Wfdz8b",
              ref: a,
              children: (0, S.jsx)(da, {
                type: "add",
                onSave: (e) => {
                  var i, a, r, o;
                  n({
                    shopId: t,
                    itemId: s,
                    brandId: (null == (i = e.brand) ? void 0 : i.id) || 0,
                    modelId: (null == (a = e.model) ? void 0 : a.id) || 0,
                    yearId: (null == (r = e.year) ? void 0 : r.id) || 0,
                    versionId: (null == (o = e.version) ? void 0 : o.id) || 0,
                  });
                },
              }),
            })
          : null;
      }
      var Rm = s(78591),
        Dm = s(56401),
        Mm = s(22013),
        Om = s(17146),
        Zm = s(4916);
      const Fm = "AFFILIATE-ADS",
        Bm = "__expiry__";
      function Hm(e) {
        mc.y.isSupported() &&
          window.requestIdleCallback(function () {
            const t = mc.y.getItem("sp_af");
            t &&
              ((t.ad_tracking_time = +new Date()),
              (function (e, t, s) {
                window.requestIdleCallback(() => {
                  const n = mc.X.getItem(Fm) || { [Bm]: [] };
                  e in n &&
                    (function (e, t) {
                      const s = e[Bm].findIndex((e) => e.productId === t);
                      s > -1 && e[Bm].splice(s, 1);
                    })(n, e),
                    (n[e] = t),
                    n[Bm].push({
                      productId: e,
                      [Bm]: +new Date() + 24 * s * 60 * 60 * 1e3,
                    }),
                    (function (e) {
                      const t = +new Date(),
                        s = e.__expiry__ || [];
                      let n = 0;
                      for (; n < s.length && !(s[n][Bm] >= t); n++);
                      s.splice(0, n).forEach((t) => {
                        delete e[t.productId];
                      });
                    })(n),
                    mc.X.setItem(Fm, n);
                });
              })(e, t, 1));
          });
      }
      var Um = s(45087),
        Vm = s(75172),
        Wm = s(19450),
        Qm = s(15350);
      const Gm = "@shopee/search-shared-memory",
        qm = "ads_tracking_data_referrer",
        Km = wp().getSharedMemory(Gm);
      wp().getSharedMemory(Gm);
      var $m = s(25099),
        Ym = s(59447),
        zm = s(67334),
        Xm = s(84751);
      var Jm = s(58968);
      const { t: e_ } = N.I18n,
        { SHOPEE_BASE_URL: t_ } = N.config,
        s_ = (0, z.Kd)(),
        n_ = (0, z.dU)(),
        i_ = N.Chat.chatWithUser;
      function a_(e, t) {
        const s = {};
        return (
          e &&
            e.info &&
            ((s.username = e.info.username),
            (s.birthTimestamp = e.info.birth_timestamp),
            (s.adultConsentTimestamp = e.info.adult_consent)),
          {
            requireUserToLogin: (e) => {
              t.push(
                (0, Qi.FK)(Du.D_.getUrl(), {
                  next: location.href,
                  from: location.href,
                  from_source:
                    {
                      pdp_chat_now_btn: "pdp_chat_now_btn",
                      pdp_report_btn: "pdp_report_btn",
                      pdp_like_btn: "pdp_like_btn",
                      pdp_add_to_cart_btn: "pdp_add_to_cart_btn",
                      pdp_buy_now_btn: "pdp_buy_now_btn",
                    }[e || ""] || "",
                })
              );
            },
            userAdult: (0, em.Eg)(s, Zm.jC, s_),
            userAccount: null,
            isShopeeMall: !1,
          }
        );
      }
      const r_ = (e, t, s) => _.Z.getUrl({ seoName: s, shopId: e, itemId: t }),
        o_ = (e, t) => Vm.IM.getUrl({ username: t }),
        l_ = (e, t) =>
          (0, $m.e)({
            SHOPEE_BASE_URL: t_,
            product: e,
            shop: t,
            getImageUrl: ue.Jn,
            getProductUrl: r_,
            getShopUrl: o_,
            countryCurrency: (0, nr.getCountryConfig)((0, z.Kd)()).currency,
          }),
        c_ = (0, L.Z)({
          loader: () =>
            Promise.all([s.e(7861), s.e(7035)]).then(s.bind(s, 72056)),
          placeholder: (0, S.jsx)("div", {
            className: "page-product__content",
          }),
        }),
        d_ = (0, L.Z)({ loader: () => s.e(5296).then(s.bind(s, 22313)) }),
        u_ = "ProductPage";
      class p_ extends a().Component {
        constructor(e) {
          super(e),
            (this.adsTrackingData = null),
            (this.lastPageParams = null),
            (this.chatWithShop = (e) => {
              var t;
              const {
                shopId: s,
                shop: i,
                virtualShop: a,
                spuIds: r,
                itemId: o,
                chatWithUser: l,
                isLoggedIn: c,
                trackingClick: d,
                crossPageTrackingData: u,
              } = this.props;
              if (!i && !a) return;
              const p = (0, n.Z)(
                  { entryPoint: e },
                  r
                    ? { vSkuItem: (0, n.Z)({}, r, { modelId: r.rModelId }) }
                    : null
                ),
                h = null != (t = null == u ? void 0 : u.algo) ? t : {};
              var m;
              d({
                targetData: (0, n.Z)({}, h, {
                  context: { shopId: s, itemId: o },
                }),
              }),
                c
                  ? l({
                      shopId: (null == r ? void 0 : r.rShopId) || s,
                      userId:
                        null != (m = null == i ? void 0 : i.userid)
                          ? m
                          : (null == a ? void 0 : a.user_id) || 0,
                      itemId: (null == r ? void 0 : r.rItemId) || o,
                      options: p,
                    })
                  : this.props.history.push(
                      (0, Qi.FK)(Du.D_.getUrl(), {
                        next: location.href,
                        from: location.href,
                        from_source: "pdp_chat_now_btn",
                      })
                    );
            }),
            (this.onClickRatingTab = () => {
              const e = !!(function () {
                const e = window.navigator.userAgent,
                  t = e.indexOf("MSIE ");
                if (t > 0)
                  return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
                if (e.indexOf("Trident/") > 0) {
                  const t = e.indexOf("rv:");
                  return parseInt(e.substring(t + 3, e.indexOf(".", t)), 10);
                }
                const s = e.indexOf("Edge/");
                return (
                  s > 0 && parseInt(e.substring(s + 5, e.indexOf(".", s)), 10)
                );
              })();
              this.refRating &&
                (e
                  ? this.refRating.scrollIntoView()
                  : this.refRating.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    }));
            }),
            (this.trackingData = { context: this.getPageParams(e) });
        }
        UNSAFE_componentWillMount() {
          const { itemId: e } = this.props;
          this.universalDataFetch(this.props), Hm(e);
          {
            const e = (0, p.Z)(this.props, ["pageParams", "sp_atk"], void 0);
            if (e) {
              const t = (0, Wm.Z)();
              this.adsTrackingData = t.get(e);
            }
          }
        }
        componentDidMount() {
          this.trackPageStateEvent(this.props, !0, !0);
        }
        async universalDataFetch(e) {
          const {
            itemId: t,
            shopId: s,
            isSnapshot: n,
            SHOULD_USE_VSKU_BFF: i,
          } = e;
          return await e.loadProductPage(t, s, {
            isSnapshot: n,
            useVSkuBFF: i,
          });
        }
        UNSAFE_componentWillReceiveProps(e) {
          const { location: t } = this.props,
            { location: s } = e,
            n = s.pathname !== t.pathname || !1;
          this.trackPageStateEvent(e, n);
        }
        componentDidUpdate(e) {
          const { props: t } = this,
            { itemId: s, shopId: n, isSnapshot: i, SHOULD_USE_VSKU_BFF: a } = t,
            { item: r } = e;
          t.location.pathname !== e.location.pathname &&
            r &&
            (isNaN(s) ||
              isNaN(n) ||
              (t.loadProductPage(s, n, { isSnapshot: i, useVSkuBFF: a }),
              Hm(r.itemid)));
          const o = (0, p.Z)(e, ["pageParams", "sp_atk"], void 0),
            l = (0, p.Z)(this.props, ["pageParams", "sp_atk"], void 0);
          if (o !== l)
            if (l) {
              const e = (0, Wm.Z)();
              this.adsTrackingData = e.get(l);
            } else this.adsTrackingData = null;
        }
        componentWillUnmount() {
          this.props.unmountPageToDefaultTheme("product");
        }
        trackPageStateEvent(e, t = !1, s = !1) {
          const { history: n, location: i } = e,
            a = "POP" === n.action,
            r = this.getPageParams(e);
          if (
            JSON.stringify(r) !== JSON.stringify(this.lastPageParams) &&
            ((this.trackingData = { context: r }),
            (this.lastPageParams = r),
            s || t)
          ) {
            const e = {
              type: "pageState",
              timestamp: Date.now(),
              info: {
                id: i.key,
                pageType: u_,
                initial: t,
                isBack: a,
                pageParams: r,
                href: "",
                title: "",
              },
            };
            try {
              (e.info.href = window.location.href || ""),
                (e.info.title = document.title || "");
            } catch (o) {}
            this.props.contextOnTrack(e);
          }
        }
        getPageParams(e) {
          const {
              location: t,
              match: { params: s },
              trackingProps: i,
              spuTrackingData: a,
            } = e,
            r = (0, Ym.KN)(t.pathname) || e.isOfficialShopTheme;
          return (0, me.toJS)(
            (0, n.Z)({}, s, (0, Ja.AW)(t.search), { hash: t.hash }, i, {
              isOfficialShopTheme: r,
              spuTrackingData: a,
            })
          );
        }
        render() {
          const { props: e } = this,
            {
              shopId: t,
              item: s,
              shop: i,
              staticContext: a,
              SHOULD_SHOW_MART_PAGE: r,
              isOwnItem: o,
              userId: d,
              crossPageTrackingData: u,
              isIndexable: p,
              abnormalPopup: h,
              goBack: m,
              disablePriceRevamp: _,
              catIds: g,
              categories: f,
              adsReferer: x,
              redirectUrl: v,
            } = e,
            C = i || null;
          if (a && s && s.status === Um.GG.NORMAL_UNLIST)
            return (a.statusCode = 404), null;
          if (v) return (0, S.jsx)(Dm.Z, { to: v, isServerRender: !1 });
          const j = (function (e) {
            return (
              void 0 !== (null == e ? void 0 : e.type) &&
              null !== (null == e ? void 0 : e.type) &&
              [
                F.U_.ITEM_INVALID,
                F.U_.ITEM_INVALID_OWNER,
                F.U_.ITEM_WARNING,
                F.U_.ITEM_WARNING_OWNER,
                F.U_.ITEM_BLACKLIST,
                F.U_.SELLER_ABNORMAL,
                F.U_.SHOP_ABNORMAL,
              ].includes(e.type)
            );
          })(h);
          if (e.itemError || j)
            return (0, S.jsxs)("div", {
              className: "page-product container",
              children: [
                (0, S.jsxs)(c.Helmet, {
                  children: [
                    (0, S.jsx)("meta", { name: "is404", content: "true" }),
                    p &&
                      "live" === n_ &&
                      (0, S.jsx)("meta", { name: "robots", content: "all" }),
                  ],
                }),
                (0, S.jsx)(zh, {}),
              ],
            });
          const b = !!s && !!s.is_official_shop,
            I = s && s.is_mart && r,
            y =
              N.Theme.VARIABLES[I ? zm.Q.S_MART : b ? zm.Q.OFS : zm.Q.DEFAULT][
                "--meta-theme-color"
              ];
          return (0, S.jsxs)(me.TrackingDataAnchor, {
            targetData: this.trackingData,
            children: [
              (0, S.jsx)(dm, {}),
              (0, S.jsx)(ym, {}),
              (0, S.jsx)(Am, {
                userId: d,
                isMilkProduct: !(
                  null == s || !s.is_infant_milk_formula_product
                ),
                handleGoBack: m,
              }),
              (0, S.jsx)(Lm, {}),
              (0, S.jsx)("div", {
                className: "KrtGbA",
                children: (0, S.jsx)(_e.Z.Provider, {
                  value: (0, n.Z)(
                    {
                      isOwnItem: o,
                      adsTrackingData: this.adsTrackingData,
                      crossPageTrackingData: u,
                    },
                    a_(e.accountV2, e.history)
                  ),
                  children: (0, S.jsxs)("div", {
                    className: l()("page-product", b && "page-product--mall"),
                    children: [
                      (0, S.jsx)(Mm.ZP, {
                        item: s,
                        shop: C,
                        getProductLdJson: l_,
                        getImageUrl: ue.Jn,
                        getProductUrl: r_,
                        t: e_,
                        SHOPEE_BASE_URL: t_,
                        COUNTRY_NAME: Zm.n7,
                        disableAMP: (0, Mm.To)(s, C),
                        isIndexable: p,
                        themeColor: y,
                      }),
                      (0, S.jsx)(
                        me.WithImpressionPlaceholder,
                        (0, n.Z)(
                          { item: s, isOwner: !!o },
                          this.adsTrackingData
                            ? { adsTrackingData: this.adsTrackingData }
                            : {},
                          x ? { referer: x } : {}
                        ),
                        "tracking" + (s ? s.itemid : "")
                      ),
                      (0, S.jsxs)("div", {
                        role: "main",
                        className: "container",
                        children: [
                          (0, S.jsx)(P.Z, {
                            categories: f,
                            className: "page-product__breadcrumb",
                            displayProductAsLastEntry: !0,
                          }),
                          (0, S.jsx)(Jh, { shopInfo: C, userId: d }),
                          _
                            ? (0, S.jsx)(_e.Z.Consumer, {
                                children: ({ requireUserToLogin: n }) =>
                                  (0, S.jsx)(Bh, {
                                    item: s,
                                    shopId: t,
                                    shopInfo: C,
                                    historyCount: e.flagStore[Om.r],
                                    requireUserToLogin: n,
                                    onClickRatingTab: this.onClickRatingTab,
                                    addItemToCart: e.addItemToCart,
                                    chatWithShop: this.chatWithShop,
                                    className: "page-product__info",
                                    isShopeeMart: !!I,
                                  }),
                              })
                            : (0, S.jsx)(oh, {
                                chatWithShop: this.chatWithShop,
                                onClickRatingTab: this.onClickRatingTab,
                              }),
                          (0, S.jsx)(Eu, {
                            openInNewTab: !0,
                            className: "oHWDGJ",
                            item: s,
                            shopId: t,
                          }),
                          (0, S.jsx)($h, {
                            shop: i,
                            chatWithShop: this.chatWithShop,
                          }),
                          (0, S.jsx)(c_, {
                            itemId: e.itemId,
                            shopId: t,
                            item: s,
                            shop: i,
                            onRatingSectionRef: (e) => (this.refRating = e),
                            isShopeeMart: I,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, V.isFeatureEnabled)(W.ZR)
                ? (0, S.jsx)(Rh.Footer, {
                    enable: !0,
                    pageType: 2,
                    seoRelateLinksProps: { item_id: e.itemId, cat_ids: g },
                    showSellingPoints: !e.shouldShowPcKspRevamp,
                  })
                : (0, S.jsx)(d_, {}),
            ],
          });
        }
      }
      function h_(e) {
        const {
          isOfficialShopPath: t,
          isOfficialShopTheme: s,
          isShopeeMartTheme: n,
        } = e;
        return n ? "theme--s-mart" : t || s ? "theme--ofs" : void 0;
      }
      function m_(e) {
        return function (t) {
          return (0, S.jsx)("div", {
            className: h_(t),
            children: (0, S.jsx)(e, (0, n.Z)({}, t)),
          });
        };
      }
      const __ = {
          unmountPageToDefaultTheme: v.PP,
          loadProductPage:
            (e, t, { isSnapshot: s }) =>
            async (n) => {
              if (s) {
                const { response: s, error: n } = await x(t, e);
                if (!n) {
                  const e = (0, p.Z)(s, ["data", "itemid"]),
                    n = (0, p.Z)(s, ["data", "name"]);
                  if (e)
                    return void self.location.replace(
                      _.Z.getUrl({ seoName: n, shopId: t, itemId: +e })
                    );
                }
              }
              return (
                await n(
                  (0, f.u)(parseInt((0, g.ej)("SPC_U"), 10), {
                    skipApiCallIfFresh: !0,
                  })
                ),
                []
              );
            },
          addItemToCart: C.dm,
          chatWithUser: i_,
          getLinkedItem: Xm.I,
        },
        g_ = (e) => {
          var t;
          const { itemId: s, shopId: a, item: o } = e;
          !(function (e, t, s) {
            var n;
            const a = (0, me.useOnTrack)(),
              r = (0, i.useRef)(-1),
              o = (0, i.useRef)(!1),
              l = (0, Qm.fU)();
            (0, i.useEffect)(() => {
              var n;
              if (
                (e !== r.current && ((o.current = !1), (r.current = e)),
                !o.current && null != s && null != (n = s.models) && n.length)
              ) {
                var i, c, d;
                let n = -1;
                "number" ==
                  typeof (null == s || null == (i = s.add_on_deal_info)
                    ? void 0
                    : i.add_on_deal_id) &&
                  (n = s.add_on_deal_info.add_on_deal_id),
                  "number" ==
                    typeof (null == s || null == (c = s.bundle_deal_info)
                      ? void 0
                      : c.bundle_deal_id) &&
                    (n =
                      null == s ? void 0 : s.bundle_deal_info.bundle_deal_id);
                const r = [];
                for (const e of s.models) {
                  var u;
                  const t = e.promotionid,
                    s =
                      null == (u = e.price_stocks) || null == (u = u[0])
                        ? void 0
                        : u.promotion_type;
                  if (t || s) {
                    const n = { model_id: e.modelid };
                    t && (n.discount_promotion_id = t),
                      s && (n.discount_promotion_type = s),
                      r.push({ items: n });
                  }
                }
                (0, me.trackingAction)({
                  track: a,
                  action: "ActionViewPdp",
                  data: {
                    itemId: e,
                    discountPromotionInfo: r,
                    shopId: t,
                    packagePromotionType:
                      null == s || null == (d = s.add_on_deal_info)
                        ? void 0
                        : d.sub_type,
                    packagePromotionId: n,
                    reviewRcmdExpGroup:
                      null == s ? void 0 : s.review_rcmd_exp_group,
                    spuTrackingData: l,
                  },
                }),
                  (o.current = !0);
              }
            }, [
              e,
              null == s ? void 0 : s.models,
              null == l || null == (n = l.spuIds) ? void 0 : n.rItemId,
            ]);
          })(s, a, o);
          const l = (0, F.xw)(),
            { setPageTheme: c } = (0, i.useContext)(
              Rh.PageConfigurationContext
            ),
            d = o && o.is_official_shop,
            u = o && o.is_mart && (0, V.isFeatureEnabled)(W.B0),
            p = (0, F.h7)().map((e) => e.catid),
            h = (0, F.Bg)(),
            m = om(),
            _ = (0, F.mX)("disable_price_with_variation"),
            g = (function () {
              const { current: e } = i.useRef(Km.get(qm) || null);
              return (
                i.useEffect(() => {
                  Km.has(qm) && Km.delete(qm);
                }, []),
                { referredAdsTrackingData: e }
              );
            })(),
            f = (0, F.l2)(),
            x = (0, Jm.I)(),
            v = (0, F.$9)(),
            C = (0, F.$8)(),
            j = (0, Qm.fU)();
          return (
            (0, r.u)(async () => {
              if ((0, V.isFeatureEnabled)(W.ZR))
                return c({
                  theme: u ? zm.Q.S_MART : d ? zm.Q.OFS : zm.Q.DEFAULT,
                  pageName: "product",
                });
            }, [d, u]),
            (0, S.jsxs)(S.Fragment, {
              children: [
                (0, V.isFeatureEnabled)(W.ZR) &&
                  (0, S.jsx)(Rh.Header, { enable: !0 }),
                (0, S.jsx)(
                  p_,
                  (0, n.Z)({}, e, {
                    abnormalPopup: l,
                    catIds: p,
                    categories: h,
                    goBack: m,
                    disablePriceRevamp: _,
                    adsReferer:
                      null == (t = g.referredAdsTrackingData)
                        ? void 0
                        : t.ads_referer,
                    shouldShowPcKspRevamp: f,
                    redirectUrl: x,
                    virtualShop: v,
                    spuIds: C,
                    spuTrackingData: j,
                  })
                ),
              ],
            })
          );
        },
        f_ = (e) =>
          function (t) {
            return (0, S.jsx)(me.TrackingDataAnchor, {
              targetType: u_,
              children: (0, S.jsx)(e, (0, n.Z)({}, t)),
            });
          },
        x_ = (0, u.connect)((e, t) => {
          var s, n;
          const i = parseInt(t.match.params.shopId, 10),
            a = parseInt(t.match.params.itemId, 10),
            r = "#snapshot=1" === t.location.hash;
          return {
            shopId: i,
            itemId: a,
            pageParams: (0, Ja.AW)(t.location.search),
            isSnapshot: r,
            item: (0, F.rV)(e),
            shop: (0, F.rK)(e),
            itemError: null == (s = (0, F.if)(e)) ? void 0 : s.error,
            isOfficialShopPath: (0, Ym.KN)(t.location.pathname),
            isOfficialShopTheme: (0, v.H_)(e),
            isShopeeMartTheme: (0, v.py)(e),
            flagStore: j(e),
            isIndexable: null == (n = (0, F.if)(e)) ? void 0 : n.is_indexable,
            SHOULD_SHOW_MART_PAGE: (0, V.isFeatureEnabled)(W.B0),
            SHOULD_USE_VSKU_BFF: (0, V.isFeatureEnabled)(W.qM),
          };
        }, __),
        v_ = (0, me.withTrackClick)(
          (0, h.compose)(f_, x_, m_, H.ZP)(g_),
          `${u_}.ChatNowButton`
        ),
        C_ = (0, me.withTrackClick)(
          (0, h.compose)(f_, x_, m_, (0, Rm.withHeader)(), H.ZP)(g_),
          `${u_}.ChatNowButton`
        ),
        j_ = (0, h.compose)(
          (0, b.R8)(
            function ({ error: e }) {
              return (0, S.jsxs)(S.Fragment, {
                children: [
                  (0, S.jsx)("img", { className: "Re56EB", src: w }),
                  (0, S.jsx)("div", {
                    className: "gOoSPx",
                    children: k("title_crash"),
                  }),
                  "live" !== E &&
                    e &&
                    (0, S.jsxs)(S.Fragment, {
                      children: [
                        (0, S.jsxs)("h1", {
                          children: [
                            "Please screenshot this and report to",
                            " ",
                            (0, S.jsx)("a", {
                              href: "https://space.shopee.io/utility/seatalkbot/seatalk-group/invite/730170751723779527",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "SeaTalk",
                            }),
                          ],
                        }),
                        (0, S.jsx)(T, { error: e }),
                        (0, S.jsx)("pre", {
                          style: {
                            color: "red",
                            padding: 14,
                            backgroundColor: "#ffeeee",
                          },
                          children: e.stack,
                        }),
                      ],
                    }),
                ],
              });
            },
            { errorLevel: "fatal" }
          ),
          (0, me.withOnTrackAsProps)(),
          d.withRouter,
          function (e) {
            return function (t) {
              var s;
              return (0, S.jsx)(
                e,
                (0, n.Z)({}, t, {
                  trackingProps:
                    null == (s = t.crossPageTrackingData) ? void 0 : s.algo,
                })
              );
            };
          }
        )((e) =>
          (0, V.isFeatureEnabled)(W.ZR)
            ? (0, S.jsx)(v_, (0, n.Z)({}, e))
            : (0, S.jsx)(C_, (0, n.Z)({}, e))
        );
    },
    59627: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => c });
      var n = s(24261),
        i = (s(87363), s(78542)),
        a = s.n(i),
        r = s(13509);
      const o = { drawerContainer: "NtkrDO" };
      var l = s(36094);
      function c({
        content: e,
        children: t,
        drawerClass: s,
        drawerRef: i,
        onActive: c,
      }) {
        return (0, l.jsx)(r.ve, {
          onActive: c,
          content: t,
          showPosition: "center",
          showContent:
            "string" == typeof e
              ? (0, l.jsx)(
                  "div",
                  (0, n.Z)({}, i ? { ref: i } : {}, {
                    className: a()(o.drawerContainer, s),
                    dangerouslySetInnerHTML: { __html: e },
                  })
                )
              : (0, l.jsx)(
                  "div",
                  (0, n.Z)({}, i ? { ref: i } : {}, {
                    className: a()(o.drawerContainer, s),
                    children: e,
                  })
                ),
        });
      }
    },
    79450: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => o }), s(87363);
      var n = s(43287),
        i = s(97843),
        a = s(36094);
      const r = (0, n.Kd)();
      function o({ labelTitle: e, children: t, ref: s, isCoinLabel: n }) {
        return (0, a.jsxs)("section", {
          className: i.Z.section,
          ref: s,
          children: [
            n && "TH" === r
              ? (0, a.jsx)("h3", { className: i.Z.key, children: e })
              : (0, a.jsx)("h2", { className: i.Z.key, children: e }),
            t,
          ],
        });
      }
    },
    71858: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => p }), s(87363);
      var n = s(31988),
        i = s(89788),
        a = s(68163);
      function r(e) {
        return e < 10 ? `0${e}` : `${e}`;
      }
      const o = function (e) {
          if (void 0 === e) return "";
          const t = Math.floor(e / 3600),
            s = Math.floor((e % 3600) / 60),
            n = e % 60,
            i = r(t),
            a = r(s),
            o = r(n);
          return 0 === t ? `${a}:${o}` : `${i}:${a}:${o}`;
        },
        l = () => {};
      var c = s(78542),
        d = s.n(c);
      var u = s(36094);
      const p = function ({
        className: e,
        isActive: t = !1,
        showHoverMask: s = !1,
        media: r,
        showMediaDuration: c = !1,
        shouldShowOverlay: p = !1,
        onClick: h,
        onHover: m,
      }) {
        return (0, u.jsxs)("div", {
          className: d()("jA1mTx", e),
          onClick: null != h ? h : l,
          onMouseEnter: null != m ? m : l,
          children: [
            (0, u.jsx)("div", {
              className: "YM40Nc",
              children: (0, u.jsx)(a.Z, {
                fileId: (null == r ? void 0 : r.mediaId) || "",
                width: 82,
                height: 82,
                className: "raRnQV",
              }),
            }),
            p && (0, u.jsx)(i.Z, { previewClassName: "MMqomL" }),
            "video" === (null == r ? void 0 : r.type) &&
              (c
                ? (0, u.jsxs)("div", {
                    className: "lZujh6",
                    children: [
                      (0, u.jsx)("div", { className: "WqggnM" }),
                      (0, u.jsx)("div", {
                        className: "y8QiYh",
                        children: o(null == r ? void 0 : r.duration),
                      }),
                    ],
                  })
                : (0, u.jsx)("img", {
                    alt: "icon video play",
                    className: "NYFAyb",
                    src: n,
                  })),
            (0, u.jsx)("div", {
              className: d()(t && "wOzCmT", "thumbnail-selected-mask"),
            }),
            s && (0, u.jsx)("div", { className: "bh76f7" }),
          ],
        });
      };
    },
    13509: (e, t, s) => {
      "use strict";
      s.d(t, { dy: () => d, ve: () => p });
      var n = s(24261),
        i = s(87363),
        a = s(78542),
        r = s.n(a),
        o = s(36094);
      const l = [];
      let c = 0;
      const d = function (e) {
        const [t, s] = i.useState(!1),
          [a, d] = i.useState(),
          [u] = i.useState(() => "pc-drawer-id-" + c++),
          { onMouseLeave: p, onActive: h } = e;
        i.useEffect(() => {
          t && "function" == typeof h && h();
        }, [t, h]);
        const m = i.useCallback(() => {
            s(!0);
          }, []),
          _ = i.useCallback(
            (e) => {
              "function" == typeof p && p(e), s(!1);
            },
            [p]
          ),
          g = i.useCallback(() => {
            d(
              setTimeout(() => {
                s(!1);
              })
            );
          }, []),
          f = i.useCallback(() => {
            a && clearTimeout(a), s(!0);
          }, [a]),
          {
            alignment: x,
            delay: v,
            extraClasses: C,
          } = (0, n.Z)({ alignment: "left", delay: 0.2, extraClasses: l }, e),
          j = { transitionDelay: `${v}s` };
        return (
          "left" === x
            ? (j.left = "0")
            : "right" === x
            ? (j.right = "0")
            : "center" === x &&
              ((j.transform = "translate(-50%, 0)"), (j.left = "50%")),
          (0, o.jsxs)("div", {
            className: r()("shopee-drawer", C),
            onMouseLeave: _,
            onMouseEnter: m,
            onFocus: f,
            onBlur: g,
            id: u,
            tabIndex: e.targetId ? void 0 : 0,
            children: [
              e.drawerButton,
              t &&
                (0, o.jsx)("div", {
                  className: "shopee-drawer__contents",
                  style: j,
                  "aria-describedby": e.targetId || u,
                  "aria-hidden": !t,
                  children: e.children,
                }),
            ],
          })
        );
      };
      s(6178);
      var u = s(54020);
      s(48661);
      const p = function ({
        content: e,
        showContent: t,
        showPosition: s,
        extraClasses: n,
        onActive: i,
      }) {
        return (0, o.jsx)(d, {
          drawerButton: e,
          alignment: s || "left",
          extraClasses: n,
          onActive: i,
          children: (0, o.jsx)(u.b, { content: t, arrowPosition: s || "left" }),
        });
      };
    },
    8487: (e, t, s) => {
      "use strict";
      s.d(t, { R: () => n });
      const n = (e, t) => {
        const s = t || window.devicePixelRatio;
        if (!s) return e;
        const n = ((e) =>
          e <= 1 ? "_mdpi" : e <= 2 ? "_xhdpi" : e <= 3 ? "_xxhdpi" : "")(s);
        return e + n;
      };
    },
    46413: (e, t, s) => {
      "use strict";
      s.d(t, { u: () => p });
      var n = s(87363),
        i = s(78542),
        a = s.n(i),
        r = s(14382),
        o = s(37701),
        l = s.n(o),
        c = s(98246);
      var d = s(36094);
      class u extends n.Component {
        constructor(...e) {
          super(...e),
            (this.onKeyUp = (e) => {
              27 === e.keyCode && this.handleOverlayClick();
            }),
            (this.handleOverlayClick = () => {
              const { onClose: e, closeWhenClickOverlay: t } = this.props;
              t && e && e();
            });
        }
        componentDidMount() {
          if (this.props.disableBackgroundScroll) {
            const e = document.body;
            if (e) {
              const t = e.clientWidth;
              e.setAttribute("class", "shopee-no-scroll"),
                (e.style.width = `${t}px`);
            }
          }
          window.addEventListener("keyup", this.onKeyUp);
        }
        componentWillUnmount() {
          const e = document.body;
          this.props.disableBackgroundScroll &&
            e &&
            (e.removeAttribute("class"), (e.style.width = "auto")),
            window.removeEventListener("keyup", this.onKeyUp);
        }
        render() {
          const { anchor: e } = this.props;
          return (0, d.jsx)(r.Z, {
            anchor: e,
            children: (0, d.jsx)(c.TrackingDataAnchor, {
              targetType: this.props.targetType || "Modal",
              children: (0, d.jsxs)(l(), {
                element: "div",
                className: a()("oOyt8z", this.props.containerClassName),
                children: [
                  (0, d.jsx)("div", {
                    role: "dialog",
                    className: a()("NDTw5b", this.props.contentClassName),
                    children: this.props.children,
                  }),
                  (0, d.jsx)("div", {
                    className: "dqUa8V",
                    onClick: this.handleOverlayClick,
                  }),
                ],
              }),
            }),
          });
        }
      }
      u.defaultProps = {
        closeWhenClickOverlay: !0,
        disableBackgroundScroll: !0,
      };
      const p = u;
      s(59602);
    },
    25099: (e, t, s) => {
      "use strict";
      s.d(t, { e: () => l });
      var n = s(24261),
        i = s(85138),
        a = s(471);
      const r = (e) =>
        [4, 6, 7, 8, 9].includes(e) ? "UsedCondition" : "NewCondition";
      function o(e) {
        return String((0, a.formatNumber)((0, a.deflateServerNumber)(e), 2));
      }
      function l({
        product: e,
        shop: t,
        SHOPEE_BASE_URL: s,
        getProductUrl: a,
        getShopUrl: l,
        getImageUrl: c,
        countryCurrency: d,
      }) {
        if (!(e && e.name && e.itemid && e.shopid && e.image && e.price))
          return "";
        const u = {
          "@context": "http://schema.org",
          "@type": "Product",
          name: e.name,
          description:
            "description" in e &&
            e.description &&
            "string" == typeof e.description
              ? e.description
              : "",
          url: s + a(e.shopid, e.itemid, e.name),
          productID: "" + e.itemid,
          image: c(e.image),
          brand: e.brand ? e.brand : "",
        };
        let p = "price_min" in e && null != e.price_min ? e.price_min : 0,
          h = "price_max" in e && null != e.price_max ? e.price_max : 0;
        const m = (0, i.gq)(e),
          _ = p > 0 && p < h;
        if (
          ((m && m.end_time && 1e3 * m.end_time > Date.now()) || _
            ? (_
                ? m &&
                  "number" == typeof m.group_buy_price &&
                  m.group_buy_price < p &&
                  (p = m.group_buy_price)
                : ((p = (m && m.group_buy_price) || p), (h = e.price)),
              (u.offers = {
                "@type": "AggregateOffer",
                lowPrice: o(p),
                highPrice: o(h),
                priceCurrency: d,
              }))
            : (u.offers = {
                "@type": "Offer",
                price: o(e.price),
                priceCurrency: d,
              }),
          t && u.offers)
        ) {
          const e = (function ({
            shop: e,
            SHOPEE_BASE_URL: t,
            getShopUrl: s,
            getImageUrl: n,
          }) {
            if (!e) return "";
            const i = {
                "@context": "http://schema.org",
                "@type": "Organization",
                name: e.name,
                url:
                  t +
                  s(
                    e.shopid,
                    e.account && e.account.username
                      ? e.account.username
                      : e.username
                  ),
                image: n(
                  e.account && e.account.portrait ? e.account.portrait : ""
                ),
              },
              a = e.rating_bad + e.rating_good + e.rating_normal;
            return (
              a > 0 &&
                (i.aggregateRating = {
                  "@type": "AggregateRating",
                  bestRating: 5,
                  worstRating: 1,
                  ratingCount: a + "",
                  ratingValue:
                    e.account && e.account.total_avg_star
                      ? e.account.total_avg_star.toFixed(2)
                      : e.rating_star
                      ? e.rating_star.toFixed(2)
                      : "",
                }),
              i
            );
          })({ shop: t, SHOPEE_BASE_URL: s, getShopUrl: l, getImageUrl: c });
          e && (u.offers = (0, n.Z)({}, u.offers, { seller: e }));
        }
        "condition" in e &&
          e.condition &&
          (u.offers = (0, n.Z)({}, u.offers, {
            itemCondition: r(e.condition),
          })),
          0 !== e.stock &&
            (u.offers = (0, n.Z)({}, u.offers, {
              availability: "http://schema.org/InStock",
            }));
        const g = e.item_rating ? e.item_rating.rating_count[0] : 0;
        var f;
        return (
          g &&
            (u.aggregateRating = {
              "@type": "AggregateRating",
              bestRating: 5,
              worstRating: 1,
              ratingCount: g + "",
              ratingValue: (
                (null == (f = e.item_rating) ? void 0 : f.rating_star) || 0
              ).toFixed(2),
            }),
          JSON.stringify(u)
        );
      }
    },
    50563: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => m });
      var n = s(87363),
        i = s(7366),
        a = s.n(i),
        r = s(36094);
      const o = ({
        error: e,
        fallback: t = null,
        slotProps: s,
        slotName: i,
      }) => (
        (0, n.useEffect)(() => {
          var t;
          self.location &&
            "localhost" === self.location.hostname &&
            console.error(e);
          const n = null == (t = window) ? void 0 : t.__DECKER_HOOK__;
          if (n)
            try {
              n.sendToDevtools("MFE_ERROR_SLOT", {
                error: { message: e.message, name: e.name, stack: e.stack },
                slotProps: l(s),
                slotName: i,
              });
            } catch (e) {}
        }, [e]),
        self.location && "localhost" === self.location.hostname
          ? (0, r.jsxs)("div", {
              style: {
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "red",
              },
              children: [
                (0, r.jsx)("div", { children: "Slot Error:" }),
                (0, r.jsx)("pre", { children: e.stack }),
              ],
            })
          : (0, r.jsx)(r.Fragment, { children: t })
      );
      function l(e) {
        if (e)
          return JSON.parse(
            JSON.stringify(e, (e, t) => {
              if (!t || "object" != typeof t || !("$$typeof" in t)) return t;
            })
          );
      }
      var c = s(24261);
      const d = n.createContext({ showLoadingPlaceholder: !1 });
      var u = s(86452),
        p = s(47968);
      function h({ error: e, renderError: t, props: s }) {
        return t(e, s);
      }
      const m = (function (e) {
        if (!e.getComponent)
          throw new Error(
            "`getComponent` option is required for `createSlotComponent()`"
          );
        const {
            getComponent: t,
            getComponentImmediate: s,
            getProps: i,
            getDependencies: a,
            renderError: o = () => null,
            renderLoading: l = () => null,
            name: m,
          } = e,
          _ = (e) => {
            const m = (function () {
                const [e, t] = (0, n.useState)(!1);
                return (
                  (0, n.useEffect)(() => {
                    const e = setTimeout(() => t(!0), 200);
                    return () => clearTimeout(e);
                  }, []),
                  e
                );
              })(),
              [_, g] = (0, n.useState)(() => s(e)),
              [f, x] = (0, n.useState)(null),
              {
                setHeaderProps: v,
                setFooterProps: C,
                setPageTheme: j,
              } = (0, n.useContext)(p.PageConfigurationContext);
            return (
              (0, n.useEffect)(() => {
                let n = !1;
                const i = s(e);
                return (
                  i
                    ? g(() => i)
                    : (g(void 0),
                      t(e)
                        .then((e) => {
                          n || g(() => e);
                        })
                        .catch((e) => {
                          n || x(e);
                        })),
                  () => {
                    (n = !0), e.isPageRoute && (v({}), C({}), j({}));
                  }
                );
              }, [...a(e), e.isPageRoute]),
              f
                ? o(f, e)
                : _
                ? (0, r.jsx)("div", {
                    style: { display: "contents" },
                    children: (0, r.jsx)(u.SV, {
                      errorComponent: h,
                      errorComponentProps: { props: e, renderError: o },
                      children: (0, r.jsx)(d.Provider, {
                        value: { showLoadingPlaceholder: m },
                        children: (0, r.jsx)(_, (0, c.Z)({}, i(e))),
                      }),
                    }),
                  })
                : (0, r.jsx)(d.Provider, {
                    value: { showLoadingPlaceholder: m },
                    children: l(e),
                  })
            );
          };
        return m && (_.displayName = m), _;
      })({
        getComponent: ({ slotName: e, performanceTrace: t }) => (
          t && t.start(),
          a()
            .getModule(e)
            .then((s) => {
              if (t) {
                var n, i;
                const { projectAndModuleName: s, buildInformation: r } =
                    null != (n = a().getModuleInfo(e)) ? n : {},
                  o =
                    null != (i = null == r ? void 0 : r.tag)
                      ? i
                      : null == r
                      ? void 0
                      : r.buildId;
                t.addAttributes({
                  slot_name: e || "unknown",
                  module_name: s || e || "unknown",
                  module_version: o || "unknown",
                }),
                  t.stop();
              }
              return s;
            })
        ),
        getComponentImmediate: ({ slotName: e }) => a().getModuleImmediate(e),
        getProps: ({ slotProps: e }) => e,
        getDependencies: ({ slotName: e }) => [e],
        renderError: (e, { slotName: t, slotProps: s, slotErrorFallback: n }) =>
          (0, r.jsx)(o, { error: e, slotName: t, slotProps: s, fallback: n }),
        renderLoading: (e) =>
          (0, r.jsx)(r.Fragment, { children: e.slotLoadingFallback }),
        name: "Slot",
      });
    },
    53154: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => r });
      var n = s(24261);
      s(87363);
      const i = s.p + "productdetailspage/a02ade81006a12b6a5c4.png";
      var a = s(36094);
      const r = function ({ imgProps: e = {} }) {
        return (0, a.jsx)("div", {
          className: "loading-spinner-popup",
          role: "status",
          children: (0, a.jsx)("div", {
            className: "loading-spinner-popup__container",
            role: "presentation",
            children: (0, a.jsx)(
              "img",
              (0, n.Z)({ src: i, width: 48, height: 48 }, e)
            ),
          }),
        });
      };
    },
    7756: (e, t, s) => {
      "use strict";
      s.d(t, { cf: () => o });
      var n = s(72566),
        i = s(67141);
      s(87363);
      const a = "text/shopee-rq",
        r = {
          queries: {
            networkMode: "always",
            retry: !1,
            staleTime: 1 / 0,
            cacheTime: 1 / 0,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
            structuralSharing: !1,
          },
          mutations: { networkMode: "always" },
        };
      function o(e) {
        const t = new n.S({ defaultOptions: r }),
          s = null == e ? void 0 : e.initialState;
        try {
          if (s) (0, i.ZB)(t, s);
          else {
            const e = document.querySelector(`script[type="${a}"]`);
            if (e) {
              const s = JSON.parse(e.textContent || "");
              (0, i.ZB)(t, s);
            }
          }
        } catch (o) {}
        return t;
      }
    },
    37460: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => r });
      const n = s.p + "productdetailspage/73ff5b46ecbe564f4b48.png",
        i = s.p + "productdetailspage/410d0b2e5c01980373d9.png",
        a = s.p + "productdetailspage/e7eaef3ad5ca5dadd207.png",
        r = {
          ID: n,
          MY: i,
          SG: a,
          VN: s.p + "productdetailspage/49a0b76f9cfdaae23b09.png",
          TH: s.p + "productdetailspage/bcc604ec09b9c300f211.png",
          PH: a,
          TW: s.p + "productdetailspage/10e4f27e539ffdd249b9.png",
          BR: a,
          MX: a,
          CO: a,
          CL: a,
          AR: a,
          FR: a,
          PL: a,
          ES: a,
          IN: a,
        };
    },
    65930: (e, t, s) => {
      "use strict";
      s.d(t, { Bl: () => l, cB: () => o, qB: () => i });
      const n = (0, s(43287).Kd)(),
        i = {
          SG: "https://shopee.sg/m/shopee-guarantee",
          MY: "https://shopee.com.my/m/shopee-guarantee",
          PH: "https://shopee.ph/m/shopee-guarantee ",
          TH: "https://shopee.co.th/m/shopee-guarantee",
          TW: "https://shopee.tw/m/shopee-guarantee",
          ID: "https://shopee.co.id/m/garansi-shopee-id",
          VN: "https://shopee.vn/m/shopee-dam-bao",
          BR: "https://shopee.com.br/m/garantia-shopee",
          MX: "https://shopee.com.mx/m/garantia-shopee",
          CO: "https://shopee.com.co/m/shopee-garantia",
          CL: "https://shopee.cl/m/shopee-garantia",
          AR: "https://shopee.com.ar/m/sobre-garantia-shopee",
          FR: "https://shopee.fr/m/garantie-shopee",
          PL: "https://shopee.pl/m/gwarancjashopee",
          ES: "https://shopee.es/m/shopee-garantia",
          IN: "https://shopee.in/m/shopee-guarantee",
        }[n],
        a = 7776e3,
        r = ["PL", "ES", "FR"];
      function o() {
        return r.includes(n);
      }
      function l(e) {
        const t = !e.isNewUser,
          s = new Date().getTime() / 1e3;
        return (s - ("number" == typeof e.ctime ? e.ctime : s)) / a > 1 && t;
      }
    },
    49214: (e, t, s) => {
      "use strict";
      s.d(t, { BW: () => b, KQ: () => j }), s(87363);
      var n = s(36094),
        i = s(78542),
        a = s.n(i),
        r = s(29595),
        o = s(98246),
        l = s(80437);
      const c = s.p + "productdetailspage/4557cc538398ac11cbc1.tr.js",
        { injectTracking: d } = l.Tracking;
      d(c);
      var u = s(8487),
        p = s(43287),
        h = s(24261);
      function m(e) {
        return (0, n.jsxs)(
          "svg",
          (0, h.Z)({}, e, {
            fill: "none",
            height: "16",
            viewBox: "0 0 16 16",
            width: "16",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("circle", {
                cx: "8",
                cy: "8",
                fill: "#066bc8",
                r: "6",
              }),
              (0, n.jsx)("path", {
                d: "m6.5 4.5-2.2943 1.83544c-.10335.08268-.09933.24115.00808.31848l2.28622 1.64608-.3-1.3h3.3c.33333 0 1.5.3 1.5 1.5s-1.16667 1.5-1.5 1.5h-4v1h4c2 0 2.5-1.66667 2.5-2.5s-.5-2.5-2.5-2.5h-3.3z",
                fill: "#fff",
              }),
            ],
          })
        );
      }
      function _(e) {
        return (0, n.jsxs)(
          "svg",
          (0, h.Z)({}, e, {
            fill: "none",
            height: "16",
            viewBox: "0 0 16 16",
            width: "16",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "m12.5901 3.75752c-.0459-.00103-1.1986-.03185-2.3873-.51838-1.13013-.45743-1.88063-.97513-2.02445-1.07784l-.21932-.1613-.20013.16299c-.15967.11309-.90691.62233-2.02231 1.07625-.69135.2805-1.52538.46356-2.34874.51548l-.38785.01777v5.00779c0 1.11843.67127 2.40472 1.84255 3.52982 1.05321 1.0046 2.28061 1.6537 3.12692 1.6537.84702 0 2.07503-.6491 3.12853-1.6537 1.1708-1.1165 1.8423-2.4031 1.8423-3.52982v-5.02278z",
                fill: "#066bc8",
              }),
              (0, n.jsx)("path", {
                clipRule: "evenodd",
                d: "m11.7747 7.06066-1.0607-1.06066-3.12666 3.12667-1.66169-1.66169-1.06066 1.06066 2.19623 2.19626c.2929.2929.76777.2929 1.06066 0 .02275-.0228.04374-.0466.06295-.0714z",
                fill: "#fff",
                fillRule: "evenodd",
              }),
            ],
          })
        );
      }
      function g(e) {
        return (0, n.jsxs)(
          "svg",
          (0, h.Z)(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "40",
              height: "40",
              viewBox: "0 0 40 40",
              fill: "none",
            },
            e,
            {
              children: [
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M38.7156 28.4099H18.0013C14.8398 28.4099 12.2711 26.0351 12.2711 23.1073V8.53644L8.64852 7.30025C8.49168 7.25714 8.34586 7.18169 8.22067 7.07889C8.09547 6.97608 7.99375 6.84824 7.92219 6.70379C7.85063 6.55934 7.81086 6.40155 7.8055 6.24082C7.80013 6.08009 7.8293 5.92006 7.89108 5.77127C8.02879 5.46623 8.27996 5.22518 8.5926 5.09801C8.90524 4.97085 9.25541 4.9673 9.57062 5.0881L13.4566 6.4219C13.8631 6.55007 14.2185 6.8012 14.4726 7.13978C14.7267 7.47837 14.8667 7.88728 14.8727 8.30872V23.1431C14.8951 23.9324 15.2337 24.6806 15.8141 25.2234C16.3945 25.7663 17.1693 26.0594 17.9683 26.0384H38.6827C38.8495 26.031 39.016 26.0563 39.1728 26.113C39.3295 26.1697 39.4733 26.2565 39.5959 26.3684C39.7184 26.4804 39.8172 26.6153 39.8866 26.7652C39.956 26.9152 39.9945 27.0773 40 27.2421C39.9949 27.4027 39.9575 27.5608 39.89 27.707C39.8224 27.8532 39.726 27.9847 39.6065 28.0937C39.4869 28.2027 39.3465 28.2871 39.1936 28.342C39.0406 28.3968 38.8782 28.421 38.7156 28.4132V28.4099Z",
                  fill: "#066BC8",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.52964 13.2896H1.21168C1.05244 13.2901 0.894681 13.2589 0.747479 13.1978C0.600277 13.1367 0.466532 13.047 0.353931 12.9339C0.241331 12.8207 0.152097 12.6862 0.0913577 12.5383C0.0306186 12.3903 -0.000427683 12.2317 4.4498e-06 12.0716C0.00506782 11.7502 0.134351 11.4433 0.360495 11.216C0.58664 10.9887 0.8919 10.8587 1.21168 10.8536H9.52964C9.84956 10.8554 10.1557 10.9846 10.381 11.2129C10.6063 11.4412 10.7324 11.75 10.7315 12.0716C10.7346 12.2324 10.7054 12.3922 10.6456 12.5414C10.5858 12.6906 10.4967 12.8261 10.3835 12.9399C10.2704 13.0536 10.1356 13.1432 9.98716 13.2033C9.83875 13.2634 9.67979 13.2928 9.51981 13.2896",
                  fill: "#066BC8",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.49927 17.1921H3.67124C3.50942 17.1921 3.34919 17.1606 3.19969 17.0994C3.05019 17.0382 2.91435 16.9485 2.79993 16.8354C2.68551 16.7223 2.59475 16.588 2.53282 16.4402C2.4709 16.2924 2.43903 16.1341 2.43903 15.9741C2.43903 15.8142 2.4709 15.6558 2.53282 15.508C2.59475 15.3602 2.68551 15.226 2.79993 15.1129C2.91435 14.9997 3.05019 14.91 3.19969 14.8488C3.34919 14.7876 3.50942 14.7561 3.67124 14.7561H9.49927C9.66121 14.7557 9.82164 14.7869 9.97134 14.8479C10.121 14.909 10.257 14.9987 10.3716 15.1119C10.4861 15.2251 10.5768 15.3595 10.6386 15.5075C10.7003 15.6555 10.7319 15.814 10.7315 15.9741C10.7347 16.1349 10.7049 16.2947 10.6441 16.4439C10.5833 16.5931 10.4927 16.7286 10.3776 16.8423C10.2626 16.9561 10.1255 17.0457 9.97454 17.1058C9.82361 17.1659 9.66196 17.1952 9.49927 17.1921Z",
                  fill: "#066BC8",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.46513 21.0946H6.14464C5.97818 21.095 5.81328 21.0638 5.6594 21.0027C5.50553 20.9417 5.36572 20.852 5.24802 20.7388C5.13032 20.6256 5.03704 20.4912 4.97355 20.3432C4.91006 20.1952 4.8776 20.0366 4.87806 19.8766C4.88335 19.5551 5.01849 19.2483 5.25488 19.0209C5.49128 18.7936 5.81037 18.6637 6.14464 18.6586H9.46513C9.80105 18.6586 10.1232 18.7869 10.3607 19.0153C10.5983 19.2437 10.7317 19.5535 10.7317 19.8766C10.7317 20.1996 10.5983 20.5094 10.3607 20.7378C10.1232 20.9662 9.80105 21.0946 9.46513 21.0946Z",
                  fill: "#066BC8",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M23.5127 32.0411C23.5192 32.4766 23.3959 32.904 23.1586 33.2692C22.9213 33.6344 22.5808 33.9207 22.1803 34.0918C21.7798 34.2629 21.3374 34.311 20.9095 34.23C20.4816 34.149 20.0875 33.9425 19.7772 33.6369C19.467 33.3312 19.2547 32.9402 19.1673 32.5136C19.08 32.087 19.1215 31.644 19.2867 31.2411C19.4518 30.8381 19.7331 30.4934 20.0948 30.2508C20.4564 30.0082 20.8821 29.8786 21.3176 29.8785C21.6048 29.8725 21.8903 29.9241 22.1573 30.0302C22.4242 30.1363 22.6672 30.2949 22.8718 30.4965C23.0764 30.6981 23.2386 30.9386 23.3487 31.2039C23.4587 31.4692 23.5145 31.7539 23.5127 32.0411Z",
                  fill: "#066BC8",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M37.5607 32.0409C37.5671 32.4764 37.4438 32.9039 37.2066 33.2691C36.9693 33.6343 36.6287 33.9207 36.2282 34.0918C35.8277 34.2629 35.3854 34.311 34.9575 34.23C34.5296 34.149 34.1354 33.9425 33.8252 33.6368C33.515 33.3311 33.3027 32.9401 33.2153 32.5134C33.128 32.0868 33.1695 31.6438 33.3347 31.2408C33.4998 30.8378 33.7811 30.493 34.1428 30.2504C34.5044 30.0077 34.9301 29.8781 35.3656 29.8781C35.9425 29.8772 36.4965 30.1037 36.9074 30.5086C37.3183 30.9135 37.5531 31.4641 37.5607 32.0409Z",
                  fill: "#066BC8",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.0546 23.5365H37.5307V23.5333C37.9171 23.5377 38.2898 23.3914 38.569 23.1257C38.8482 22.8599 39.0117 22.4959 39.0244 22.1117V9.34906C39.0117 8.96481 38.8482 8.6008 38.569 8.33506C38.2898 8.06931 37.9171 7.92297 37.5307 7.92741H19.0546C18.8625 7.92225 18.6713 7.95503 18.492 8.02385C18.3126 8.09267 18.1488 8.19617 18.0099 8.32836C17.871 8.46055 17.7599 8.61881 17.6828 8.794C17.6057 8.9692 17.5643 9.15785 17.561 9.34906V22.1149C17.5737 22.4991 17.7372 22.8631 18.0164 23.1289C18.2956 23.3946 18.6683 23.541 19.0546 23.5365ZM26.9125 19.1843C26.3854 19.016 25.899 18.741 25.4838 18.3766L24.6396 19.3782C25.1109 19.7723 25.6356 20.0986 26.1982 20.3475C26.8451 20.6157 27.5439 20.7371 28.2439 20.7029C28.695 20.7066 29.144 20.6412 29.5752 20.5091C29.9571 20.3784 30.3181 20.1934 30.6467 19.9598C30.9546 19.7245 31.209 19.4272 31.3936 19.0874C31.5887 18.7307 31.6893 18.3304 31.6858 17.9242C31.7068 17.4915 31.5935 17.0628 31.3611 16.6964C31.1407 16.3437 30.8541 16.0365 30.5168 15.7917C30.1676 15.5371 29.7853 15.3306 29.3804 15.1779C28.9907 15.0163 28.5686 14.8547 28.2114 14.7255L28.0166 14.6286C27.8165 14.5673 27.6212 14.4917 27.4321 14.4024C27.2373 14.3055 27.0749 14.2085 26.9125 14.1116C26.7594 14.0078 26.6273 13.8762 26.5229 13.7239C26.4419 13.5517 26.3977 13.3647 26.393 13.1746C26.3857 12.9935 26.4308 12.814 26.5229 12.6576C26.6393 12.5045 26.7823 12.3732 26.945 12.2699C27.143 12.1752 27.3496 12.0995 27.562 12.0437C27.7942 11.9777 28.0348 11.9451 28.2763 11.9468C28.7472 11.9398 29.2135 12.0392 29.6401 12.2376C29.963 12.3932 30.2773 12.5658 30.5818 12.7546L31.3286 11.6883C31.2714 11.6542 31.2182 11.616 31.1634 11.5767C31.0626 11.5043 30.9563 11.428 30.8091 11.3652C30.7177 11.3262 30.6262 11.282 30.5327 11.2368C30.3937 11.1696 30.25 11.1001 30.0947 11.0421C29.8224 10.9209 29.5399 10.8236 29.2505 10.7513C28.9305 10.6822 28.6037 10.6496 28.2763 10.6544C27.8573 10.6531 27.4407 10.7185 27.0424 10.8483C26.664 10.9476 26.3103 11.1236 26.0034 11.3652C25.7048 11.5883 25.4606 11.8754 25.289 12.2053C25.1195 12.5355 25.0305 12.9008 25.0292 13.2715C25.0331 13.6665 25.1334 14.0546 25.3215 14.4024C25.5154 14.698 25.7567 14.9599 26.0358 15.1779C26.3346 15.3947 26.6625 15.5687 27.01 15.6948C27.1089 15.7306 27.2103 15.7689 27.3128 15.8076C27.5805 15.9086 27.8557 16.0125 28.114 16.0825C28.2449 16.1198 28.3758 16.1677 28.5192 16.2202C28.6247 16.2588 28.7369 16.2999 28.8608 16.341C29.1187 16.4399 29.3684 16.5587 29.6077 16.6964C29.8241 16.8429 30.0205 17.0167 30.1921 17.2134C30.3394 17.4215 30.4187 17.6697 30.4194 17.9242C30.4239 18.1502 30.3679 18.3732 30.2571 18.5704C29.9663 18.9461 29.5529 19.2089 29.0881 19.3136C28.8333 19.3776 28.5716 19.4101 28.3088 19.4105C27.8328 19.4304 27.3577 19.3534 26.9125 19.1843Z",
                  fill: "#066BC8",
                }),
              ],
            }
          )
        );
      }
      function f(e) {
        return (0, n.jsxs)(
          "svg",
          (0, h.Z)(
            { fill: "none", height: 40, width: 40, viewBox: "0 0 40 40" },
            e,
            {
              children: [
                (0, n.jsx)("path", { d: "M0 0h40v40H0z", fill: "#fff" }),
                (0, n.jsxs)("g", {
                  fill: "#066bc8",
                  children: [
                    (0, n.jsx)("path", {
                      d: "M18.163 28.36a2.73 2.73 0 1 1-5.461 0 2.73 2.73 0 0 1 5.461 0z",
                    }),
                    (0, n.jsx)("path", {
                      d: "M13.08 27.114h4.688a2.73 2.73 0 0 0-4.687 0z",
                    }),
                    (0, n.jsx)("path", {
                      d: "M11.593 27.114a4.08 4.08 0 0 1 7.662 0h9.416V9.348c0-.744-.604-1.348-1.348-1.348H10.905c-.744 0-1.348.604-1.348 1.348v16.418c0 .744.604 1.348 1.348 1.348zM36.846 28.516a2.73 2.73 0 1 1-5.461 0 2.73 2.73 0 0 1 5.461 0z",
                    }),
                    (0, n.jsx)("path", {
                      d: "M31.777 27.114h4.687a2.73 2.73 0 0 0-4.687 0z",
                    }),
                    (0, n.jsx)("path", {
                      d: "M30.289 27.114a4.08 4.08 0 0 1 7.662 0h.7c.897 0 1.544-.86 1.295-1.722L36.388 13.07a1.348 1.348 0 0 0-1.295-.974h-5.057v15.018zM2.73 21.653h5.462v2.184H2.73zM0 26.177h8.192v2.184H0z",
                    }),
                  ],
                }),
              ],
            }
          )
        );
      }
      function x(e) {
        return (0, n.jsxs)(
          "svg",
          (0, h.Z)(
            {
              width: 40,
              height: 40,
              viewBox: "0 0 40 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
            {
              children: [
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.4326 1.1276C19.7918 0.957466 20.2084 0.957466 20.5675 1.1276L37.3582 9.08109C37.8212 9.30039 38.1163 9.7668 38.1163 10.2791V28.8372C38.1163 29.3294 37.8437 29.781 37.4081 30.0102L20.6175 38.8475C20.231 39.0508 19.7691 39.0508 19.3827 38.8475L2.59199 30.0102C2.15646 29.781 1.88379 29.3294 1.88379 28.8372V10.2791C1.88379 9.7668 2.17895 9.30039 2.64191 9.08109L19.4326 1.1276Z",
                  fill: "#066BC8",
                }),
                (0, n.jsx)("path", {
                  d: "M35.4473 12.1061C35.9413 11.8591 36.1415 11.2584 35.8945 10.7645C35.6476 10.2705 35.0469 10.0703 34.5529 10.3172L35.4473 12.1061ZM5.44734 10.3172C4.95336 10.0703 4.35268 10.2705 4.10569 10.7645C3.85871 11.2584 4.05893 11.8591 4.55291 12.1061L5.44734 10.3172ZM19.0001 35.5867C19.0001 36.139 19.4478 36.5867 20.0001 36.5867C20.5524 36.5867 21.0001 36.139 21.0001 35.5867H19.0001ZM34.5529 10.3172L19.5529 17.8172L20.4473 19.6061L35.4473 12.1061L34.5529 10.3172ZM20.4473 17.8172L5.44734 10.3172L4.55291 12.1061L19.5529 19.6061L20.4473 17.8172ZM19.0001 18.7117V35.5867H21.0001V18.7117H19.0001Z",
                  fill: "white",
                }),
              ],
            }
          )
        );
      }
      const { t: v } = l.I18n,
        C = {
          MY: [
            function (e) {
              return (0, n.jsxs)(
                "svg",
                (0, h.Z)(
                  { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none" },
                  e,
                  {
                    children: [
                      (0, n.jsx)("path", { fill: "#fff", d: "M0 0h40v40H0z" }),
                      (0, n.jsx)("path", {
                        d: "M23.986 6 9.61 9.99 24.042 14l14.373-3.99L23.986 6zM24.62 15.043l-.025 12.512 5.464-1.519-.002-1.22 4.024 1.296-4.013 3.565-.002-1.138-5.476 1.521-.01 4.513 15.38-4.27.04-19.53-15.38 4.27zM8.015 15.763l-4.96-1.378v2.505l13.557 3.767.003-1.308 4.457 3.678-4.466 1.204V23.16L5.575 20.096v2.504l17.863 4.963.025-12.52-15.438-4.29-.01 5.01zM0 23.555v2.506l7.99 2.22-.005 2.004 15.438 4.29.009-4.51L0 23.556z",
                        fill: "#066BC8",
                      }),
                    ],
                  }
                )
              );
            },
            g,
            f,
          ],
          TH: [
            function (e) {
              return (0, n.jsx)(
                "svg",
                (0, h.Z)(
                  {
                    width: 40,
                    height: 40,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  e,
                  {
                    children: (0, n.jsx)("path", {
                      d: "M38.5183 21.1795L19.5838 1.68939C19.3318 1.43138 19.0224 1.23658 18.6809 1.1209C18.3393 1.00522 17.9752 0.971922 17.6183 1.02373L4.53314 2.95519C4.17302 3.00754 3.83918 3.17402 3.58068 3.43016C3.32218 3.6863 3.15265 4.0186 3.097 4.37823L1.02665 17.6128C0.969299 17.974 0.999594 18.3437 1.11498 18.6908C1.23037 19.0378 1.42747 19.3521 1.68968 19.6071L21.1798 38.5181C21.5014 38.8303 21.933 39.0034 22.3812 38.9999C22.8295 38.9965 23.2583 38.8168 23.5751 38.4997L38.4921 23.5853C38.8135 23.2691 38.9966 22.8386 39.0015 22.3878C39.0064 21.937 38.8327 21.5026 38.5183 21.1795ZM9.34212 11.2209C8.90269 11.2204 8.47328 11.0896 8.10816 10.8451C7.74304 10.6006 7.45861 10.2533 7.2908 9.84716C7.123 9.44103 7.07937 8.99428 7.16541 8.56335C7.25146 8.13243 7.46332 7.73669 7.77423 7.42615C8.08513 7.11561 8.48112 6.90422 8.91214 6.81868C9.34317 6.73314 9.78987 6.7773 10.1958 6.94558C10.6017 7.11387 10.9487 7.39871 11.1927 7.76412C11.4368 8.12953 11.5671 8.55909 11.5671 8.99852C11.5695 9.29212 11.5137 9.5833 11.403 9.85522C11.2922 10.1271 11.1287 10.3744 10.9218 10.5828C10.7149 10.7911 10.4688 10.9564 10.1976 11.0691C9.92651 11.1817 9.63573 11.2396 9.34212 11.2392V11.2209ZM30.3365 25.1263L27.0476 26.172C26.8907 26.2217 26.7482 26.3088 26.6323 26.4256C26.5164 26.5424 26.4305 26.6856 26.3819 26.8428L25.3729 30.1344C25.317 30.3155 25.2115 30.4773 25.0684 30.6015C24.9252 30.7257 24.7501 30.8073 24.563 30.837C24.3758 30.8668 24.184 30.8435 24.0094 30.7698C23.8348 30.6961 23.6844 30.5749 23.5751 30.4201L21.5729 27.6133C21.4772 27.4791 21.3505 27.3699 21.2036 27.2951C21.0567 27.2203 20.8939 27.182 20.729 27.1835L17.2855 27.236C17.0966 27.2371 16.9112 27.1855 16.75 27.0872C16.5888 26.9889 16.4581 26.8476 16.3727 26.6791C16.2873 26.5107 16.2504 26.3219 16.2663 26.1337C16.2822 25.9455 16.3501 25.7655 16.4626 25.6137L18.5172 22.8489C18.6159 22.7172 18.6809 22.5633 18.7065 22.4007C18.732 22.238 18.7174 22.0716 18.6639 21.9159L17.5449 18.6558C17.4844 18.4774 17.4748 18.2857 17.5172 18.1022C17.5595 17.9187 17.6521 17.7506 17.7846 17.6167C17.9171 17.4829 18.0843 17.3886 18.2674 17.3443C18.4504 17.3001 18.6422 17.3078 18.8212 17.3664L22.0866 18.4671C22.2426 18.5196 22.409 18.5334 22.5715 18.5074C22.734 18.4813 22.8877 18.4163 23.0195 18.3177L25.787 16.2526C25.9385 16.1391 26.1187 16.0703 26.3072 16.0539C26.4957 16.0375 26.6851 16.0742 26.8539 16.1598C27.0227 16.2455 27.1641 16.3766 27.2623 16.5384C27.3604 16.7002 27.4113 16.8863 27.4092 17.0755L27.3725 20.5217C27.3707 20.6863 27.4089 20.8488 27.4838 20.9953C27.5587 21.1418 27.668 21.268 27.8023 21.363L30.6143 23.3468C30.7693 23.4555 30.8908 23.6054 30.965 23.7795C31.0392 23.9536 31.0632 24.145 31.0343 24.3321C31.0054 24.5192 30.9247 24.6944 30.8014 24.838C30.6781 24.9816 30.5171 25.0878 30.3365 25.1446V25.1263Z",
                      fill: "#066BC8",
                    }),
                  }
                )
              );
            },
            f,
            m,
          ],
          SG: [
            x,
            function (e) {
              return (0, n.jsxs)(
                "svg",
                (0, h.Z)(
                  {
                    width: 40,
                    height: 40,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  e,
                  {
                    children: [
                      (0, n.jsx)("path", {
                        d: "M3.8385 9.89575C3.8385 8.08891 5.56419 7.08325 7.05823 7.08325H32.9437C33.7442 7.08325 34.5237 7.33806 35.128 7.78996C35.7286 8.239 36.2501 8.96688 36.2501 9.89575V17.9505L35.0642 18.0113C33.9604 18.0679 32.9703 18.6887 32.5128 19.6738L32.512 19.6754C31.8588 21.0768 32.4833 22.7586 33.9839 23.4196C34.3237 23.5678 34.6869 23.6461 35.0614 23.6644L36.2501 23.7227V31.7708C36.2501 33.577 34.5252 34.5833 33.032 34.5833H7.05823C5.56419 34.5833 3.8385 33.5776 3.8385 31.7708V23.5942H5.0885C6.71223 23.5942 7.96609 22.325 7.96609 20.8333C7.96609 19.3415 6.71223 18.0723 5.0885 18.0723H3.8385V9.89575Z",
                        fill: "#066BC8",
                      }),
                      (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15 16.6668H16.6667V13.3335H15V16.6668Z",
                        fill: "white",
                      }),
                      (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15 10.8335H16.6667V8.3335H15L15 10.8335Z",
                        fill: "white",
                      }),
                      (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15 22.5001H16.6667V19.1667H15V22.5001Z",
                        fill: "white",
                      }),
                      (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15 28.3336H16.6667V25.0002H15V28.3336Z",
                        fill: "white",
                      }),
                      (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15 33.3335H16.6667V30.8335H15V33.3335Z",
                        fill: "white",
                      }),
                    ],
                  }
                )
              );
            },
            f,
          ],
          ID: [
            f,
            function (e) {
              return (0, n.jsxs)(
                "svg",
                (0, h.Z)(
                  {
                    width: 40,
                    height: 40,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  e,
                  {
                    children: [
                      (0, n.jsx)("path", {
                        d: "M3.65836 9.99372L18.6584 2.49372C19.5029 2.07143 20.4971 2.07143 21.3416 2.49372L36.3416 9.99372C37.358 10.5019 38 11.5407 38 12.677V37.5229C38 37.6886 37.8657 37.8229 37.7 37.8229H32.3C32.1343 37.8229 32 37.6886 32 37.5229V17.1229C32 16.9572 31.8657 16.8229 31.7 16.8229H8.3C8.13431 16.8229 8 16.9572 8 17.1229V37.5229C8 37.6886 7.86569 37.8229 7.7 37.8229H2.3C2.13431 37.8229 2 37.6886 2 37.5229V12.677C2 11.5407 2.64201 10.5019 3.65836 9.99372Z",
                        fill: "#066BC8",
                      }),
                      (0, n.jsx)("path", {
                        d: "M17 31.8229H23V37.8229H17V31.8229Z",
                        fill: "#066BC8",
                      }),
                      (0, n.jsx)("path", {
                        d: "M10.0449 31.8229H16.0449V37.8229H10.0449V31.8229Z",
                        fill: "#066BC8",
                      }),
                      (0, n.jsx)("path", {
                        d: "M23.9551 31.8229H29.9551V37.8229H23.9551V31.8229Z",
                        fill: "#066BC8",
                      }),
                      (0, n.jsx)("path", {
                        d: "M23.9551 25.1066H29.9551V31.1066H23.9551V25.1066Z",
                        fill: "#066BC8",
                      }),
                      (0, n.jsx)("path", {
                        d: "M23.9551 18.3903H29.9551V24.3903H23.9551V18.3903Z",
                        fill: "#066BC8",
                      }),
                      (0, n.jsx)("path", {
                        d: "M17 25.1066H23V31.1066H17V25.1066Z",
                        fill: "#066BC8",
                      }),
                    ],
                  }
                )
              );
            },
            _,
          ],
          PH: [x, f, g],
          default: [m, _, f],
        };
      function j() {
        var e, t, s;
        const n = (0, p.Kd)();
        return [
          {
            Icon: (null == (e = C[n]) ? void 0 : e[0]) || C.default[0],
            title: v("label_mart_ksp_title_1"),
            description: v("label_mart_ksp_desc_1"),
          },
          {
            Icon: (null == (t = C[n]) ? void 0 : t[1]) || C.default[1],
            title: v("label_mart_ksp_title_2"),
            description: v("label_mart_ksp_desc_2"),
          },
          {
            Icon: (null == (s = C[n]) ? void 0 : s[2]) || C.default[2],
            title: v("label_mart_ksp_title_3"),
            description: v("label_mart_ksp_desc_3"),
          },
        ];
      }
      function b() {
        var e, t, s;
        const n = (0, p.Kd)();
        return [
          {
            Icon: (null == (e = C[n]) ? void 0 : e[0]) || C.default[0],
            textLabel: "label_mart_ksp_title_1",
            descLabel: "label_mart_ksp_desc_1",
          },
          {
            Icon: (null == (t = C[n]) ? void 0 : t[1]) || C.default[1],
            textLabel: "label_mart_ksp_title_2",
            descLabel: "label_mart_ksp_desc_2",
          },
          {
            Icon: (null == (s = C[n]) ? void 0 : s[2]) || C.default[2],
            textLabel: "label_mart_ksp_title_3",
            descLabel: "label_mart_ksp_desc_3",
          },
        ];
      }
      var N = s(6178),
        I = s(1396);
      const y = "Io84eA",
        { withI18nCollections: S } = l.I18n;
      S([I.Am], function () {
        return (0, n.jsx)("div", { className: a()("lmE3DI", "container") });
      })(function ({ useTransifyAsFallback: e = !0, keySellingPoints: t }) {
        const [s] = [(0, o.useTrackClick)("MartKsp")],
          i = Array.isArray(t) ? t : e ? j() : [];
        return i.length
          ? (0, n.jsx)("div", {
              className: a()("gql643", "container"),
              onClick: s,
              children: i.map(
                ({ title: e, Icon: t, imageHash: s, description: a }, o) =>
                  (0, n.jsxs)(
                    "div",
                    {
                      className: "WS4rM_",
                      children: [
                        s
                          ? (0, n.jsx)("img", {
                              className: y,
                              src: (0, N.Jn)((0, u.R)(s)),
                            })
                          : t
                          ? (0, n.jsx)(t, { className: y })
                          : null,
                        (0, n.jsx)("div", {
                          className: "yMW1If",
                          children: (0, n.jsx)(r.ve, {
                            extraClasses: "PqHhDA",
                            content: (0, n.jsx)("div", {
                              className: "RrWF9N",
                              children: e,
                            }),
                            showContent: (0, n.jsx)("div", {
                              className: "oZ2qq4",
                              dangerouslySetInnerHTML: { __html: a },
                            }),
                            showPosition:
                              0 === o
                                ? "left"
                                : o === i.length - 1
                                ? "right"
                                : "center",
                          }),
                        }),
                      ],
                    },
                    o
                  )
              ),
            })
          : null;
      }),
        s(21624),
        s(43966),
        s(70893),
        s(43968),
        s(80413);
    },
    43968: (e, t, s) => {
      "use strict";
      s.d(t, { LZ: () => o, kg: () => h, dm: () => m, I6: () => c });
      var n = s(24261),
        i = s(15277),
        a = s(80413);
      const r = (0, s(62099).n)("FETCH_MART_KSP"),
        o = "martKsp",
        l = { progress: a.ZP.INIT, updateTime: -1, keySellingPoints: [] },
        c = (0, i.Z)(
          {
            [r.REQUESTED]: (e, t) => (0, n.Z)({}, e, { progress: a.ZP.REQ }),
            [r.SUCCESS]: (e, t) => {
              var s;
              const {
                payload: { response: i },
              } = t;
              return (0, n.Z)({}, e, {
                progress: a.ZP.OK,
                keySellingPoints:
                  (null == i || null == (s = i.data) ? void 0 : s.ksp) || [],
                updateTime: +new Date(),
              });
            },
            [r.FAILED]: (e, t) => {
              const {
                payload: { error: s, error_msg: i },
              } = t;
              return (0, n.Z)({}, e, {
                progress: a.ZP.ERR,
                error: s,
                error_msg: i,
              });
            },
          },
          l
        );
      var d = s(64491),
        u = s(80437);
      const { fetchInfo: p } = u.FetchUtils,
        h = (e) =>
          (0, d.ZP)({
            apiCall: () => p("/api/v4/pages/mart/get_ksp"),
            actions: [
              () => ({ type: r.REQUESTED }),
              (e, t) => ({ type: r.SUCCESS, payload: { response: t } }),
              (e, t) => ({
                type: r.FAILED,
                payload: { error: t.error, error_msg: t.error_msg },
              }),
            ],
            shouldSkipCall: (t) => {
              if (null == e || !e.getState) return !1;
              const s = e.getState(t);
              return !(
                !s ||
                (s.progress !== a.ZP.REQ &&
                  !(
                    null != e &&
                    e.skipApiCallIfFresh &&
                    null != s.updateTime &&
                    s.updateTime >= +new Date() - 6e4
                  ))
              );
            },
          });
      function m(e) {
        return e.keySellingPoints;
      }
    },
    97843: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => n });
      const n = { section: "yjMlzR", key: "OGxzJN" };
    },
    23601: (e, t, s) => {
      "use strict";
      e.exports = s.p + "productdetailspage/5914c85bab254a6705bd.svg";
    },
    30846: (e, t, s) => {
      "use strict";
      e.exports = s.p + "productdetailspage/7e05bc64eb8a25d287c5.svg";
    },
    47956: (e, t, s) => {
      "use strict";
      e.exports = s.p + "productdetailspage/dd5cbafaee315c6c99f4.svg";
    },
  },
]);
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-productdetailspage/_/NormalPdpMain.7c626c34097f20845065.js.map
