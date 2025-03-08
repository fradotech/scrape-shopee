(("undefined" != typeof self ? self : this).webpackChunkshopee_rw =
  ("undefined" != typeof self ? self : this).webpackChunkshopee_rw || []).push([
  [4296],
  {
    58169: (e, t, n) => {
      "use strict";
      n.d(t, {
        Aj: () => E,
        Er: () => l,
        F3: () => s,
        O$: () => S,
        OX: () => h,
        UX: () => c,
        YI: () => m,
        Yp: () => f,
        Z9: () => _,
        _r: () => u,
        c7: () => A,
        f$: () => g,
        gW: () => d,
        im: () => I,
        kE: () => i,
        kH: () => r,
        mR: () => o,
        n0: () => p,
        oi: () => R,
        ot: () => a,
        yV: () => b,
      });
      const r = "/verify/captcha",
        a = "/verify/captcha/popup",
        o = "/verify/captcha/feature",
        i = "/verify/ivs",
        s = "/s/browser/ivs",
        c = "/verify/password",
        l = "/verify/otp",
        d = "/s/browser/verify/otp",
        u = "/verify/link",
        p = "/dlink/verify/link",
        _ = "/verify/traffic",
        m = "/verify/traffic/error",
        f = "/verify/traffic/test",
        h = "/payment/ivs/wallet-pin",
        E = "/verify/email",
        g = "/verify/qr",
        S = "/verify/email-link",
        I = "/dlink/verify/email-link",
        R = "/verify/question",
        A = "/verify/trusted-token",
        b = "/dlink/verify/trusted-token";
    },
    9611: (e, t, n) => {
      "use strict";
      n.d(t, { ML: () => s });
      var r = n(11804),
        a = n(96662);
      const o = "CHECKOUT_CONFIGS",
        i = "BUYER_CONFIGS",
        s = (e) => {
          var t, n, s;
          const c = (() => {
              const e = (0, a.dU)();
              switch (e) {
                case "liveish":
                case "stable":
                  return "live";
                default:
                  return e;
              }
            })(),
            l =
              [o, i]
                .map((t) => {
                  var n;
                  return null == (n = r.ZP.getAsset("mobilemall-checkout")) ||
                    null == (n = n[t]) ||
                    null == (n = n[c])
                    ? void 0
                    : n[e];
                })
                .find(Boolean) || {};
          if (!l) return null;
          const d = (0, a.Kd)().toLowerCase();
          return null !=
            (t =
              null != (n = l[d])
                ? n
                : null ==
                  (s = Object.entries(l).find(([e]) =>
                    e.includes(d.toLowerCase())
                  ))
                ? void 0
                : s[1])
            ? t
            : l.default;
        };
    },
    53463: (e, t, n) => {
      "use strict";
      n.d(t, {
        OJ: () => d,
        RY: () => l,
        Rd: () => o,
        S3: () => u,
        WY: () => s,
        _x: () => r,
        fY: () => i,
        jx: () => c,
        k6: () => a,
        vd: () => p,
      });
      const r =
          "11014d13e391d869e859c963a874d9cdb05ffecee6043a021567b019588b680b",
        a = "685438011e0bf6532d1f1475e125d31968f972bd2eea4e7fd4d76a4e4d38e05d",
        o = "d535a65fab98405bd479747c2d528ff34cd28fe8a982ef63cf69da46cee9a26b",
        i = "e4a4358229c2abac44b47109ca3278cf148e0dc2de49e02e7e631bd58af1b72f",
        s = "b6eb3d67afead11e64848edf55ecda770abf16a5eb0cf92f2cef6f52c21bfc0d",
        c = "b330f2dc8baf8e0e21d7a7b1a10ad796eb712e78e264008fbda3f88aa516cef7",
        l = "d907c508b180e9fa4091a821bbcce5185f885fae711ccc533f1569819cacd6f3",
        d = "3fe406f2dc7404558b9660676b50f54526789de636642d9e02adc9c7dd2b9989",
        u = "f50256ce75f7d8792a7385b16e35a7b35bbc1a4c1728ab9a53bd7df92545c980",
        p = "91cef75c5be443fe8d3ddd97c915f948df7ab967f9ce8d889a90fa85c2d9d910";
    },
    27106: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => r, O: () => a });
      let r = (function (e) {
          return (
            (e[(e.Analytical = 1)] = "Analytical"),
            (e[(e.Functional = 2)] = "Functional"),
            (e[(e.Advertising = 3)] = "Advertising"),
            (e[(e.ThirdPartyGoogle = 4)] = "ThirdPartyGoogle"),
            (e[(e.ThirdPartyTiktok = 5)] = "ThirdPartyTiktok"),
            e
          );
        })({}),
        a = (function (e) {
          return (
            (e[(e.Missing = 0)] = "Missing"),
            (e[(e.Accepted = 1)] = "Accepted"),
            (e[(e.Rejected = 2)] = "Rejected"),
            e
          );
        })({});
    },
    25614: (e, t, n) => {
      "use strict";
      n.d(t, {
        DM: () => h,
        FI: () => u,
        GF: () => p,
        HH: () => c,
        Hq: () => o,
        Pz: () => l,
        RJ: () => s,
        XY: () => r,
        Zu: () => _,
        _d: () => g,
        cm: () => i,
        d$: () => E,
        hp: () => f,
        ii: () => d,
        rJ: () => a,
        x8: () => m,
      });
      let r = (function (e) {
        return (
          (e.REQUESTED = "ACCOUNT/FETCH_ACCOUNT_INFO_REQUESTED"),
          (e.SUCCESS = "ACCOUNT/FETCH_ACCOUNT_INFO_SUCCESS"),
          (e.FAILED = "ACCOUNT/FETCH_ACCOUNT_INFO_FAILED"),
          e
        );
      })({});
      const a = "ACCOUNT/UPDATE_PHONE_NUMBER",
        o = "ACCOUNT/UPDATE_EMAIL",
        i = "ACCOUNT/UPDATE_HAS_PASSWORD";
      let s = (function (e) {
          return (
            (e.REQUESTED = "ACCOUNT/SET_ADULT_CONSENT_TIMESTAMP_REQUESTED"),
            (e.SUCCESS = "ACCOUNT/SET_ADULT_CONSENT_TIMESTAMP_SUCCESS"),
            (e.FAILED = "ACCOUNT/SET_ADULT_CONSENT_TIMESTAMP_FAILED"),
            e
          );
        })({}),
        c = (function (e) {
          return (
            (e.REQUESTED = "ACCOUNT/ACCEPT_PRIVACY_POLICY_REQUESTED"),
            (e.SUCCESS = "ACCOUNT/ACCEPT_PRIVACY_POLICY_SUCCESS"),
            (e.FAILED = "ACCOUNT/ACCEPT_PRIVACY_POLICY_FAILED"),
            e
          );
        })({}),
        l = (function (e) {
          return (
            (e.REQUESTED = "ACCOUNT/BIND_PHONE_NUMBER_REQUESTED"),
            (e.SUCCESS = "ACCOUNT/BIND_PHONE_NUMBER_SUCCESS"),
            (e.FAILED = "ACCOUNT/BIND_PHONE_NUMBER_FAILED"),
            e
          );
        })({}),
        d = (function (e) {
          return (
            (e.REQUESTED = "ADD_PHONE/ADD_PHONE_NUMBER_REQUESTED"),
            (e.SUCCESS = "ADD_PHONE/ADD_PHONE_NUMBER_SUCCESS"),
            (e.FAILED = "ADD_PHONE/ADD_PHONE_NUMBER_FAILED"),
            e
          );
        })({}),
        u = (function (e) {
          return (
            (e.REQUESTED = "CHANGE_PHONE/UPDATE_PHONE_NUMBER_REQUESTED"),
            (e.FAILED = "CHANGE_PHONE/UPDATE_PHONE_NUMBER_FAILED"),
            (e.SUCCESS = "CHANGE_PHONE/UPDATE_PHONE_NUMBER_SUCCESS"),
            e
          );
        })({}),
        p = (function (e) {
          return (
            (e.REQUESTED = "CHANGE_EMAIL/CHANGE_EMAIL_REQUESTED"),
            (e.FAILED = "CHANGE_EMAIL/CHANGE_EMAIL_FAILED"),
            (e.SUCCESS = "CHANGE_EMAIL/CHANGE_EMAIL_SUCCESS"),
            e
          );
        })({}),
        _ = (function (e) {
          return (
            (e.FAILED = "USER_PROFILE/UPDATE_USER_PROFILE_FAILED"),
            (e.SUCCESS = "USER_PROFILE/UPDATE_USER_PROFILE_SUCCESS"),
            (e.REQUESTED = "USER_PROFILE/UPDATE_USER_PROFILE_REQUESTED"),
            e
          );
        })({}),
        m = (function (e) {
          return (
            (e.FAILED = "USER_PROFILE/UPDATE_USERNAME_FAILED"),
            (e.SUCCESS = "USER_PROFILE/UPDATE_USERNAME_SUCCESS"),
            (e.REQUESTED = "USER_PROFILE/UPDATE_USERNAME_REQUESTED"),
            e
          );
        })({}),
        f = (function (e) {
          return (
            (e.REQUESTED = "USER_GDPR/ACCEPT_COOKIES_REQUESTED"),
            (e.SUCCESS = "USER_GDPR/ACCEPT_COOKIES_SUCCESS"),
            (e.FAILED = "USER_GDPR/ACCEPT_COOKIES_FAILED"),
            e
          );
        })({});
      const h = "USER_GDPR/ACCEPT_COOKIES_NON_LOGGED_IN";
      let E = (function (e) {
          return (
            (e.REQUESTED = "USER_GDPR/SET_DATA_PROCESSING_CONSENT_REQUESTED"),
            (e.SUCCESS = "USER_GDPR/SET_DATA_PROCESSING_CONSENT_SUCCESS"),
            (e.FAILED = "USER_GDPR/SET_DATA_PROCESSING_CONSENT_FAILED"),
            e
          );
        })({}),
        g = (function (e) {
          return (
            (e.REQUESTED = "ACCOUNT/CHANGE_TAX_ID_REQUESTED"),
            (e.SUCCESS = "ACCOUNT/CHANGE_TAX_ID_SUCCESS"),
            (e.FAILED = "ACCOUNT/CHANGE_TAX_ID_FAILED"),
            e
          );
        })({});
    },
    41579: (e, t, n) => {
      "use strict";
      n.d(t, { GN: () => s, RD: () => c, hW: () => l });
      var r = n(86321),
        a = n(17675);
      const o = "SPC_U",
        i = "@shopee/account-basic-info";
      function s() {
        const e = (0, r.ej)(o);
        return !!e && "-" !== e;
      }
      function c(e) {
        a.X.setItem(i, e);
      }
      function l() {
        a.X.removeItem(i);
      }
    },
    80165: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => s, u: () => d });
      var r = n(38918),
        a = n(67673),
        o = n(60026);
      const i = {
          state: void 0,
          actions: (0, o.bindActionCreators)(a.cq, () => {}),
        },
        s = r.createContext(i);
      var c = n(77080),
        l = n(1722);
      function d({ children: e }) {
        const t = (0, c.useSelector)(l.S),
          n = (0, c.useDispatch)(),
          i = r.useMemo(() => (0, o.bindActionCreators)(a.cq, n), []);
        return r.createElement(
          s.Provider,
          { value: { actions: i, state: t } },
          e
        );
      }
    },
    94046: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => i });
      var r = n(61934),
        a = n(38918),
        o = n(91766);
      const i = () =>
        function (e) {
          return (t) => {
            const n = (0, o.B)();
            return a.createElement(e, (0, r.Z)({}, t, n));
          };
        };
    },
    91766: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => l });
      var r = n(61934),
        a = n(38918),
        o = n(80165),
        i = n(41579),
        s = n(67673),
        c = n(87099);
      const l = () => {
        const { actions: e, state: t } = (0, a.useContext)(o.w),
          n = (0, s.tk)(t),
          {
            accountStatus: l,
            accountInfo: { username: d, portrait: u },
          } = n;
        return (
          (0, a.useEffect)(() => {
            l === c.d.LOGGED_IN
              ? (0, i.RD)({ username: d, portrait: u })
              : l === c.d.NOT_LOGGED_IN && (0, i.hW)();
          }, [l, d, u]),
          (0, r.Z)({}, n, e)
        );
      };
    },
    59966: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => g });
      var r = n(61934),
        a = n(7957),
        o = n(38918),
        i = n(77080),
        s = n(54332);
      const c = "accountPayment",
        l = (e) => e[c];
      let d = (function (e) {
        return (
          (e.REQUESTED =
            "ACCOUNT_PAYMENT/FETCH_ACCOUNT_PAYMENT_INFO_REQUESTED"),
          (e.SUCCESS = "ACCOUNT_PAYMENT/FETCH_ACCOUNT_PAYMENT_INFO_SUCCESS"),
          (e.FAILED = "ACCOUNT_PAYMENT/FETCH_ACCOUNT_PAYMENT_INFO_FAILED"),
          e
        );
      })({});
      var u = n(88064);
      const p = {
        info: {
          is_cc_installment_payment_eligible: !1,
          is_non_cc_installment_payment_eligible: !1,
        },
        progress: u.ZP.INIT,
        error: null,
      };
      function _(e = p, t) {
        switch (t.type) {
          case d.REQUESTED:
            return (0, r.Z)({}, e, { progress: u.ZP.REQ });
          case d.SUCCESS:
            return (0, r.Z)({}, e, {
              info: (0, r.Z)({}, e.info, t.payload.info),
              progress: u.ZP.OK,
            });
          case d.FAILED:
            return (0, r.Z)({}, e, {
              error: t.payload.error,
              progress: u.ZP.ERR,
            });
          default:
            return e;
        }
      }
      var m = n(11793),
        f = n(10791);
      const h = {
          fetchAccountPaymentInfo: function () {
            return async (e, t) => {
              if (!t()[c]) return;
              e({ type: d.REQUESTED });
              const n = await m.FetchUtils.get(
                "/api/v4/account/basic/get_payment_info"
              );
              n && !n.error
                ? e({ type: d.SUCCESS, payload: { info: n.data } })
                : e({ type: d.FAILED, payload: { error: n.error } });
            };
          },
        },
        E = ["accountPaymentState", "fetchAccountPaymentInfo"],
        g = () =>
          function (e) {
            class t extends o.Component {
              constructor(e) {
                super(e), e.injectAsyncReducer({ [c]: _ });
              }
              render() {
                const t = this.props,
                  { accountPaymentState: n, fetchAccountPaymentInfo: i } = t,
                  s = (0, a.Z)(t, E),
                  c = ((e) => {
                    var t;
                    return {
                      accountPaymentInfo: {
                        isCCInstallmentPaymentEligible:
                          (0, f.Z)(e, [
                            "info",
                            "is_cc_installment_payment_eligible",
                          ]) || !1,
                        isNonCCInstallmentPaymentEligible:
                          (0, f.Z)(e, [
                            "info",
                            "is_non_cc_installment_payment_eligible",
                          ]) || !1,
                      },
                      accountPaymentProgress:
                        null != (t = (0, f.Z)(e, ["progress"])) ? t : u.ZP.INIT,
                      accountPaymentError: (0, f.Z)(e, ["error"]),
                    };
                  })(n),
                  l = { fetchAccountPaymentInfo: i },
                  d = (0, r.Z)({}, c, l, s);
                return o.createElement(e, d);
              }
            }
            const n = (0, i.connect)((e) => ({ accountPaymentState: l(e) }), h);
            return (0, s.withInjectReducer)(n(t));
          };
    },
    40469: (e, t, n) => {
      "use strict";
      n.d(t, {
        jW: () => R,
        dg: () => A,
        yy: () => I,
        eF: () => O,
        F1: () => P,
        M9: () => m,
        LM: () => b,
        $5: () => S,
        ZC: () => f,
        s: () => E,
        rY: () => g,
        Rv: () => h,
      });
      var r = n(11793);
      const { get: a, post: o } = r.FetchUtils;
      var i = n(25614),
        s = n(78927),
        c = n(88064),
        l = n(31720),
        d = n(72288);
      const u = (e) => Math.floor(e / 1e3);
      var p = n(10791);
      const _ = new (n(70898).PerformanceTrace)("accountInfo", {
        type: "accountInfoLoad",
      });
      function m(
        { forceRefetch: e, isFromAppRoot: t = !1 } = { forceRefetch: !1 }
      ) {
        return async (n, r) => {
          const o = r()[s.L5];
          if (!o) return;
          const { progress: u, error: p } = o;
          if (
            !e &&
            (u === c.ZP.REQ ||
              u === c.ZP.OK ||
              (u === c.ZP.ERR && p === l.j.NOT_LOGIN))
          )
            return;
          _.forceStart(),
            t && n({ type: i.XY.REQUESTED, payload: { isClient: d.N } });
          const m = await a("/api/v4/account/basic/get_account_info");
          m && !m.error
            ? (n({ type: i.XY.SUCCESS, payload: { info: m.data } }),
              _.addAttributes({ status: "success" }))
            : (n({ type: i.XY.FAILED, payload: { error: m.error } }),
              _.addAttributes({ status: "fail" })),
            _.stop();
        };
      }
      function f(e) {
        return e.error
          ? { type: i.XY.FAILED, payload: { error: e.error } }
          : { type: i.XY.SUCCESS, payload: { info: e.data } };
      }
      function h(e) {
        return { type: i.rJ, payload: { phone: e } };
      }
      function E(e) {
        return { type: i.Hq, payload: { email: e } };
      }
      function g(e) {
        return { type: i.cm, payload: { hasPassword: e } };
      }
      function S({ adultConsentTimestamp: e }) {
        return async (t, n) => {
          t({ type: i.RJ.REQUESTED });
          const r = (0, p.Z)(n(), [s.L5, "info", "username"], ""),
            a = u(e),
            c = await (function ({ username: e, adultConsentTimestamp: t }) {
              return o("/api/v2/user/profile/update", {
                username: e,
                adult_consent: t,
              });
            })({ username: r, adultConsentTimestamp: a });
          c.error
            ? t({ type: i.RJ.FAILED })
            : t({ type: i.RJ.SUCCESS, payload: { adultConsentTimestamp: a } });
        };
      }
      function I() {
        return async (e) => {
          e({ type: i.HH.REQUESTED }),
            (
              await o("/api/v4/basic/set_account_time", {
                tos_accepted_time: !0,
              })
            ).error
              ? e({ type: i.HH.FAILED })
              : e({ type: i.HH.SUCCESS });
        };
      }
      function R() {
        return async (e) => {
          e({ type: i.hp.REQUESTED });
          const t = await o("/api/v4/basic/set_account_time", {
            cookies_accepted_time: !0,
          });
          return (
            t.error ? e({ type: i.hp.FAILED }) : e({ type: i.hp.SUCCESS }),
            { error: t.error }
          );
        };
      }
      function A() {
        return { type: i.DM };
      }
      function b({ dataProcessingConsent: e }) {
        return async (t) => {
          t({ type: i.d$.REQUESTED, payload: { dataProcessingConsent: e } });
          const n = await (function ({ dataProcessingConsent: e }) {
            return o("/api/v4/account/set_account_flag", {
              disallow_data_processing: !e,
            });
          })({ dataProcessingConsent: e });
          return (
            n.error ? t({ type: i.d$.FAILED }) : t({ type: i.d$.SUCCESS }),
            { error: n.error }
          );
        };
      }
      function O({
        phone: e,
        vcode: t,
        otp_seed: n,
        decision_token: r,
        riskData: a,
      }) {
        return async (s) => {
          s({ type: i.Pz.REQUESTED });
          const c = await (function ({
            phone: e,
            vcode: t,
            otp_seed: n,
            decision_token: r,
            riskData: a,
            force_seed: i,
          }) {
            const {
              client_type: s,
              system_version: c,
              longitude: l,
              latitude: d,
            } = a || {};
            return o("/api/v2/user/phone/update/", {
              client_type: s,
              system_version: c,
              longitude: l,
              latitude: d,
              phone: e,
              vcode: t,
              otp_seed: n,
              decision_token: r,
              force_seed: i,
            });
          })({
            phone: e,
            vcode: t,
            otp_seed: n,
            decision_token: r,
            riskData: a,
          });
          c.error
            ? s({ type: i.Pz.FAILED })
            : s({ type: i.Pz.SUCCESS, payload: { phone: e } });
        };
      }
      function P({ taxId: e }) {
        return async (t) => {
          t({ type: i._d.REQUESTED });
          const { error: n, error_msg: r } = await (function ({ taxId: e }) {
            return o("/api/v4/account/management/change_tax_id", {
              new_tax_id: e,
            });
          })({ taxId: e });
          return (
            t(
              n
                ? { type: i._d.FAILED }
                : { type: i._d.SUCCESS, payload: { taxId: e } }
            ),
            { error: n, error_msg: r }
          );
        };
      }
    },
    78927: (e, t, n) => {
      "use strict";
      n.d(t, { L5: () => r, MR: () => a, UB: () => o });
      const r = "accountV2",
        a = "shopee-raw-account-info",
        o = Object.freeze({
          username: "",
          default_address: void 0,
          holiday_mode_on: !1,
          holiday_mode_mtime: null,
          userid: 0,
          shopid: 0,
          access: { wallet_setting: void 0, wallet_provider: void 0 },
          phone: "",
          has_password: !1,
          phone_verified: !1,
          payment_password: void 0,
          web_option: void 0,
          portrait: "",
          is_seller: !1,
          is_mall_seller: !1,
          email: "",
          email_verified: !1,
          not_new_user: !1,
          ctime: 0,
          feed_account_info: void 0,
          birth_timestamp: void 0,
          birth_timestamp_verified: !1,
          adult_consent: void 0,
          cb_option: 0,
          tos_accepted_time: void 0,
          cover: "",
          cookies_accepted_time: void 0,
          disallow_data_processing: void 0,
          tax_id: "",
        });
    },
    1722: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => a });
      var r = n(78927);
      const a = (e) => e[r.L5];
    },
    87099: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => r });
      let r = (function (e) {
        return (
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.LOGGED_IN = 1)] = "LOGGED_IN"),
          (e[(e.NOT_LOGGED_IN = 2)] = "NOT_LOGGED_IN"),
          e
        );
      })({});
    },
    67673: (e, t, n) => {
      "use strict";
      n.d(t, { cq: () => l, tk: () => d });
      var r = n(40469),
        a = n(88064),
        o = n(31720),
        i = n(78927),
        s = n(10791),
        c = n(87099);
      const l = {
          fetchAccountInfo: r.M9,
          updatePhoneNumber: r.Rv,
          updateEmail: r.s,
          bindPhone: r.eF,
          setUserAdultConsentTimestamp: r.$5,
          acceptPrivacyPolicy: r.yy,
          updateHasPassword: r.rY,
          acceptCookies: r.jW,
          acceptCookiesNonLoggedIn: r.dg,
          setDataProcessingConsent: r.LM,
          changeTaxId: r.F1,
        },
        d = (e) => {
          const t = (0, s.Z)(e, ["info"]),
            n = (0, s.Z)(t, ["userid"], null),
            r = (0, s.Z)(e, ["progress"], a.ZP.INIT),
            l = (0, s.Z)(e, ["error"]),
            d =
              r === a.ZP.INIT ||
              r === a.ZP.REQ ||
              (r === a.ZP.ERR && l !== o.j.NOT_LOGIN)
                ? c.d.UNKNOWN
                : r === a.ZP.OK && n
                ? c.d.LOGGED_IN
                : c.d.NOT_LOGGED_IN;
          return {
            accountInfo: {
              userId: (0, s.Z)(t, ["userid"]) || i.UB.userid,
              username: (0, s.Z)(t, ["username"]) || i.UB.username,
              email: (0, s.Z)(t, ["email"]) || i.UB.email,
              emailVerified:
                (0, s.Z)(t, ["email_verified"]) || i.UB.email_verified,
              phone: (0, s.Z)(t, ["phone"]) || i.UB.phone,
              hasPassword: (0, s.Z)(t, ["has_password"]) || i.UB.has_password,
              portrait: (0, s.Z)(t, ["portrait"]) || i.UB.portrait,
              adultConsentTimestamp:
                (0, s.Z)(t, ["adult_consent"]) || i.UB.adult_consent,
              birthTimestamp:
                (0, s.Z)(t, ["birth_timestamp"]) || i.UB.birth_timestamp,
              birthTimestampVerified:
                (0, s.Z)(t, ["birth_timestamp_verified"]) ||
                i.UB.birth_timestamp_verified,
              ctime: (0, s.Z)(t, ["ctime"]) || i.UB.ctime,
              isSeller: (0, s.Z)(t, ["is_seller"]) || i.UB.is_seller,
              isMallSeller:
                (0, s.Z)(t, ["is_mall_seller"]) || i.UB.is_mall_seller,
              isNewUser: !(0, s.Z)(t, ["not_new_user"]) || i.UB.not_new_user,
              shopId: (0, s.Z)(t, ["shopid"]) || i.UB.shopid,
              tosAcceptedTime:
                (0, s.Z)(t, ["tos_accepted_time"]) || i.UB.tos_accepted_time,
              webOption: (0, s.Z)(t, ["web_option"]) || i.UB.web_option,
              paymentPassword:
                (0, s.Z)(t, ["payment_password"]) || i.UB.payment_password,
              cbOption: (0, s.Z)(t, ["cb_option"]) || i.UB.cb_option,
              cookiesAcceptedTime:
                (0, s.Z)(t, ["cookies_accepted_time"]) ||
                i.UB.cookies_accepted_time,
              disallowDataProcessing:
                (0, s.Z)(t, ["disallow_data_processing"]) ||
                i.UB.disallow_data_processing,
              taxId: (0, s.Z)(t, ["tax_id"]) || i.UB.tax_id,
            },
            accountStatus: d,
            accountInfoProgress: r,
            accountInfoError: l,
          };
        };
    },
    39573: (e, t, n) => {
      "use strict";
      n.d(t, {
        ER: () => A,
        FZ: () => h,
        HJ: () => y,
        I2: () => k,
        Iu: () => U,
        JV: () => D,
        LM: () => g,
        N6: () => f,
        PT: () => N,
        Pj: () => s,
        Ql: () => S,
        S8: () => _,
        T_: () => c,
        WS: () => I,
        X6: () => P,
        ZV: () => l,
        _1: () => u,
        ah: () => v,
        dn: () => m,
        eg: () => w,
        gI: () => d,
        gi: () => o,
        iT: () => F,
        ii: () => H,
        k9: () => O,
        kl: () => x,
        l0: () => R,
        lI: () => E,
        lL: () => L,
        mI: () => p,
        oy: () => C,
        pH: () => Z,
        q: () => T,
        qB: () => a,
        qU: () => M,
        qc: () => i,
        wl: () => r,
        yx: () => b,
      });
      const r = "/buyer/login",
        a = "/buyer/login/otp",
        o = "/authenticate/otp",
        i = "/buyer/login/qr",
        s = "/authenticate/whatsapp",
        c = "/buyer/login/signup",
        l = "/buyer/signup",
        d = "/buyer/signup/kyc",
        u = "/seller/signup",
        p = "/seller/login",
        _ = "/seller/login/otp",
        m = "/seller/login/qr",
        f = "/live/signup",
        h = "/live/login",
        E = "/live/login/otp",
        g = "/live/login/qr",
        S = "/buyer/login/reset",
        I = "/buyer/reset",
        R = "/forgot_password",
        A = "/checkout/signup",
        b = "/integration/link/now",
        O = "/integration/link/lkpp",
        P = "/shopeepay/login",
        C = "/authenticate/ivs",
        T = "/authenticate/social/bind",
        y = "/integration/link/line",
        v = "/integration/link/line/open-app",
        w = "/buyer/w/line-mission-sticker",
        N = "/integration/link/e-invoice",
        L = "/s/browser/integration/link/e-invoice",
        D = "/integration/address/callback",
        U = "/authenticate/oauth",
        k = "/integration/link/snack",
        F = "/integration/link/snack/checkout",
        M = "/integration/link/meta",
        H = "/buyer/authenticate",
        Z = "/guest/authenticate",
        x = "/tob/authenticate";
    },
    15723: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => o, v: () => i });
      var r = n(61934);
      async function a(e, t = {}, n = {}) {
        const a =
            null != n && n.isFormPost
              ? {}
              : {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
          o = await fetch(
            e,
            (0, r.Z)({}, t, {
              headers: (0, r.Z)({}, a, t.headers),
              credentials: "include",
            })
          );
        if (o.status >= 200 && o.status < 300)
          return { parsedBody: await o.json(), headers: o.headers };
        throw new Error(o.statusText);
      }
      async function o(e, t = {}) {
        return (await a(e, (0, r.Z)({ method: "GET" }, t))).parsedBody;
      }
      async function i(e, t, n = {}, o = {}) {
        return (
          await a(
            e,
            (0, r.Z)(
              {
                method: "POST",
                body: null != o && o.isFormPost ? t : JSON.stringify(t),
              },
              n
            ),
            o
          )
        ).parsedBody;
      }
    },
    25141: (e, t, n) => {
      "use strict";
      function r() {
        return (
          "undefined" != typeof window &&
          void 0 !== window.location &&
          ("localhost" === window.location.hostname ||
            "127.0.0.1" === window.location.hostname ||
            "0.0.0.0" === window.location.hostname)
        );
      }
      n.d(t, { Z: () => r });
    },
    14364: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a, u: () => o });
      var r = n(96662);
      function a(...e) {
        "live" !== (0, r.dU)() &&
          void 0 !== typeof globalThis &&
          globalThis.console &&
          "function" == typeof globalThis.console.log &&
          globalThis.console.log(...e);
      }
      function o(...e) {
        "live" !== (0, r.dU)() &&
          void 0 !== typeof globalThis &&
          globalThis.console &&
          "function" == typeof globalThis.console.error &&
          globalThis.console.error(...e);
      }
    },
    53845: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => o, c: () => E });
      var r,
        a = n(11804);
      let o = (function (e) {
        return (
          (e.AntiFraudApiProtectionUseSapSdk = "af_sap_sdk"),
          (e.AntiFraudApiProtectionUseLegacyAntiFraudSignature =
            "af_sap_legacy"),
          (e.StandaloneSecuritySdk = "standalone_security_sdk"),
          (e.StandaloneFetchUtils = "standalone_fetch_utils"),
          (e.ContextActionAccountV2 = "context_action_account_v2"),
          (e.AccountInfoSynchronousFetchServerPc =
            "account_info_sync_fetch_server_pc"),
          (e.AccountInfoSynchronousFetchServerRw =
            "account_info_sync_fetch_server_rw"),
          (e.AccountInfoSynchronousFetchClientPc =
            "account_info_sync_fetch_client_pc"),
          (e.AccountInfoSynchronousFetchClientRw =
            "account_info_sync_fetch_client_rw"),
          (e.AccountReduxInvalidServerStateReportPc =
            "account_redux_invalid_server_state_report_pc"),
          (e.AccountReduxInvalidServerStateReportRw =
            "account_redux_invalid_server_state_report_rw"),
          (e.SignupOtpZaloWeb = "signup_otp_zalo_web"),
          (e.LoginOtpZaloWeb = "login_otp_zalo_web"),
          (e.AuthenticationBindOtpZaloWeb = "authentication_bind_otp_zalo_web"),
          (e.OtpSharedServiceOtpZaloWeb = "otp_shared_service_otp_zalo_web"),
          (e.PhoneNumberFormatV2 = "phone_number_format_v2"),
          (e.UserForeignPhoneNumber = "user_foreign_phone_number"),
          (e.IdentityAndAccountMicroAppPilotTest =
            "identity_and_account_micro_app_pilot_test"),
          e
        );
      })({});
      const i =
        (null == (r = a.ZP.getHostAsset()) ? void 0 : r.USER_STATIC_TOGGLE) ||
        {};
      var s = n(96662),
        c = n(86321),
        l = n(14364);
      let d = (function (e) {
        return (
          (e[(e.WhitelistUserId = 1)] = "WhitelistUserId"),
          (e[(e.GreyscaleDeviceFingerprint = 2)] =
            "GreyscaleDeviceFingerprint"),
          e
        );
      })({});
      const u = Math.floor(new Date().getTime() / 1e3);
      let p = 0;
      const _ = "SPC_F",
        m = "SPC_U";
      function f() {
        if (p) return p;
        const e = (0, c.ej)(_) || "";
        return (
          (p = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n += 1)
              t = (Math.imul(31, t) + e.charCodeAt(n)) | 0;
            return Math.abs(t);
          })(e)),
          p
        );
      }
      const h = {};
      function E(e, t) {
        return (function (
          e,
          t,
          { defaultValue: n, env: r, locale: a, hardcodedFeatureConfig: o }
        ) {
          const i = (function (e, t) {
            const n = "live" === (0, s.dU)(),
              r = t[e];
            if (void 0 !== r) {
              if ("boolean" == typeof r) {
                if (n) return;
                return r;
              }
              if (void 0 !== r.nonLiveValue) {
                if (n) return;
                return r.nonLiveValue;
              }
            }
          })(e, o);
          return "boolean" == typeof i
            ? i
            : (function (
                e,
                t,
                { defaultValue: n, env: r, locale: a, deviceFingerprint: o }
              ) {
                var i, p, _, h, E, g;
                const S = t[e];
                if (void 0 === S)
                  return (
                    (0, l.u)(
                      "User Static Feature Toggle:",
                      `Config for ${e} not found`
                    ),
                    n
                  );
                if ("boolean" == typeof S) return S;
                const I =
                  null !=
                  (i =
                    null != (p = null != (_ = S[r]) ? _ : S.default_env)
                      ? p
                      : S.default)
                    ? i
                    : void 0;
                if (void 0 === I)
                  return (
                    (0, l.u)(
                      "User Static Feature Toggle:",
                      `Invalid ${e} config found for "${r}" Env:`,
                      JSON.stringify(S, null, 2)
                    ),
                    n
                  );
                if ("boolean" == typeof I) return I;
                const R =
                  null !=
                  (h =
                    null != (E = null != (g = I[a]) ? g : I.default_locale)
                      ? E
                      : I.default)
                    ? h
                    : void 0;
                if (void 0 === R)
                  return (
                    (0, l.u)(
                      "User Static Feature Toggle:",
                      `Invalid ${e} config found for "${r}" Env and "${a}" Locale:`,
                      JSON.stringify(I, null, 2)
                    ),
                    n
                  );
                if ("boolean" == typeof R) return R;
                if (null != R.start_time && u < R.start_time) return n;
                if (null != R.end_time && u >= R.end_time) return n;
                if (Array.isArray(R.rules))
                  for (const l of R.rules)
                    switch (l.type) {
                      case d.WhitelistUserId: {
                        if (!0 === l.disabled) continue;
                        if (null != l.start_time && u < l.start_time) continue;
                        if (null != l.end_time && u >= l.end_time) continue;
                        const e = (0, c.ej)(m) || "";
                        if (
                          r === (0, s.dU)() &&
                          e &&
                          l.white_list_user_id.includes(e)
                        )
                          return l.value;
                        break;
                      }
                      case d.GreyscaleDeviceFingerprint:
                        if (!0 === l.disabled) continue;
                        if (null != l.start_time && u < l.start_time) continue;
                        if (null != l.end_time && u >= l.end_time) continue;
                        if ((null != o ? o : f()) % 100 < l.percentage)
                          return l.value;
                    }
                return R.default;
              })(e, t, { defaultValue: n, env: r, locale: a });
        })(e, i, {
          defaultValue: t,
          env: (0, s.dU)(),
          locale: (0, s.Kd)(),
          hardcodedFeatureConfig: h,
        });
      }
    },
    80924: (e, t, n) => {
      "use strict";
      n.d(t, {
        B9: () => L,
        Dg: () => s,
        F6: () => f,
        GA: () => y,
        Gl: () => R,
        I0: () => H,
        Iu: () => E,
        ME: () => _,
        N9: () => v,
        Sr: () => F,
        TT: () => M,
        Tj: () => m,
        Tw: () => i,
        Uc: () => c,
        W0: () => N,
        a9: () => b,
        bz: () => a,
        dB: () => D,
        gL: () => k,
        gN: () => u,
        in: () => o,
        nN: () => d,
        ng: () => T,
        oN: () => I,
        p3: () => U,
        pm: () => w,
        qQ: () => A,
        rJ: () => S,
        rt: () => P,
        sX: () => p,
        tG: () => g,
        tK: () => l,
        tp: () => C,
        wg: () => O,
        xj: () => h,
        yN: () => r,
      });
      const r = "/user",
        a = "/me",
        o = "/user/account",
        i = "/user/account/profile",
        s = "/user/account/phone",
        c = "/user/account/email",
        l = "/user/account/password",
        d = "/user/account/address",
        u = "/user/account/address/add",
        p = "/user/account/address/edit/:addressId(\\d+)",
        _ = "/user/account/tax-id",
        m = "/user/account/dni",
        f = "/user/account/delete",
        h = "/user/location-selector",
        E = "/kyc/custom-tw",
        g = "/user/settings/notifications",
        S = "/user/settings/email",
        I = "/me/setting/language",
        R = "/user/setting/language",
        A = "/user/setting/notification",
        b = "/user/setting/notification/email",
        O = "/user/setting/notification/sms",
        P = "/user/setting/notification/whatsapp",
        C = "/user/setting/notification/zalo",
        T = "/me/setting",
        y = "/user/setting",
        v = "/user/setting/privacy",
        w = "/user/account/gdpr",
        N = "/user/account/cookie",
        L = "/setting/cookie",
        D = "/shop/:shopid(\\d+)/following",
        U = "/shop/:shopid(\\d+)/followers",
        k = "/user/account/kyc",
        F = "/verify/account/seller-main-sub",
        M = "/verify/otp",
        H = "/verify/email";
    },
    82851: (e, t, n) => {
      "use strict";
      n.d(t, {
        UserWebViewContext: () => i,
        useInitUserWebViewContext: () => l,
        useUserWebViewContext: () => d,
      }),
        n(63414);
      var r = n(38918);
      const a = { config: {}, isInited: !1 },
        o = "@shopee-user/webview/config",
        i = r.createContext(a);
      var s = n(77317),
        c = n(17675);
      const l = () => {
          const [e, t] = r.useState(!1),
            [n, i] = r.useState(a.config);
          return {
            config: n,
            isInited: e,
            init: (e) => {
              const n = ((e) => {
                const {
                  legacy_disable_extra_top_offset_ios: t,
                  disable_safe_area_inset_top_ios: n,
                } = (0, s.AW)(e);
                return {
                  legacyDisableExtraTopOffsetIOS: "true" === t,
                  disableSafeAreaInsetTopIOS: "true" === n,
                };
              })(e);
              ((e) => {
                c.y.setItem(o, JSON.stringify(e));
              })(n),
                i(n),
                t(!0);
            },
          };
        },
        d = () => {
          const e = r.useContext(i);
          if (!e.isInited) {
            const t = (() => {
              const e = c.y.getItem(o);
              return e ? JSON.parse(e) : void 0;
            })();
            t && ((e.config = t), (e.isInited = !0));
          }
          return e;
        };
    },
    63414: () => {},
    86685: (e, t, n) => {
      "use strict";
      n.microfeA(e, function () {
        return Promise.resolve(n(11804))
          .then(function () {
            return (
              Platform.setModuleOptionsOverride("shopee_common__currency", {
                version: "4.0.2",
              }),
              Platform.setModuleOptionsOverride("shopee__tracking-hoc", {
                version: "6.4.0",
                bundler: "webpack",
                type: "platform",
                alias: "TrackingHoc",
              }),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-pdp-choice",
                {
                  version: "0.0.29",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-centralisation",
                {
                  version: "0.0.17",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride("shopee__item-card-waterfall", {
                version: "0.0.30",
                platform: "rw",
                css: 1,
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride("shopee__settings", {
                version: "2.2.0",
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-microsite-v2",
                {
                  version: "0.1.49",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-simplified-v2",
                {
                  version: "0.1.47",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-top-product-v2",
                {
                  version: "0.1.47",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride("shopee__language", {
                version: "2.2.0",
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride("shopee__item-card-elements", {
                version: "1.0.10",
                platform: "rw",
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride("shopee__item-card-nuz-v2", {
                version: "0.1.47",
                platform: "rw",
                css: 1,
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-standard-v2",
                {
                  version: "0.1.47",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-recommendation-v2",
                {
                  version: "0.1.47",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-promotion-v2",
                {
                  version: "0.1.47",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride("shopee__item-card-choice", {
                version: "0.0.37",
                platform: "rw",
                css: 1,
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride("shopee__item-card-high-end", {
                version: "0.1.48",
                platform: "rw",
                css: 1,
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride("shopee__item-card-s-mart-v2", {
                version: "0.1.47",
                platform: "rw",
                css: 1,
                bundler: "webpack",
              }),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-horizontal-v2",
                {
                  version: "0.0.44",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Platform.setModuleOptionsOverride(
                "shopee__item-card-daily-discover-v2",
                {
                  version: "0.1.47",
                  platform: "rw",
                  css: 1,
                  bundler: "webpack",
                }
              ),
              Promise.all([
                n.microfeM(0),
                n.microfeM(14),
                n.microfeM(10),
                n.microfeM(1),
                n.microfeM(5),
                n.microfeM(4),
                n.microfeM(6),
                n.microfeM(9),
                n.microfeM(7),
                n.microfeM(2),
                n.microfeM(3),
              ])
            );
          })
          .then(function () {
            return Promise.all([
              n.microfeM(11),
              n.microfeM(11),
              n.microfeM(12),
              n.microfeM(13),
              n.microfeM(15),
            ]);
          })
          .then(function () {
            e.exports = t;
            var r = {};
            n.r(r), n.d(r, { TimingBeacon: () => g });
            var a = n(38918),
              o = n.n(a),
              i = n(13052),
              s = n(54037),
              c = n(77080),
              l = n(60026),
              d = n(61004),
              u = n(52812),
              p = n(43486),
              _ = n(6859),
              m = n(91646),
              f = n(54332),
              h = n(41754),
              E = n(25200);
            const g = ({ identifier: e, attributes: t }) => (
              a.useEffect(() => {
                (0, E.p7)(e || "heroComponentMount");
              }, [e]),
              a.useEffect(() => {
                (0, E.q0)(t);
              }, [t]),
              a.createElement(a.Fragment, null)
            );
            var S,
              I = n(70898),
              R = n(26574),
              A = n(43482),
              b = n(28058),
              O = n(80165),
              P = n(11804);
            const C = {
              fetchVariateConfigs: () => {},
              getSignature: () => null,
              getVariateConfig: () => null,
            };
            let T = C;
            if (
              (null == (S = window) || null == (S = S.__ASSETS__)
                ? void 0
                : S.PLATFORM_STATIC_TOGGLE.EXPERIMENTS_PROXY) &&
              "Proxy" in window
            ) {
              const e = {},
                t = new Proxy(C.getVariateConfig, {
                  apply: (t, n, r) => {
                    const a = r && r[0] ? r[0] : void 0;
                    return (
                      "string" == typeof a &&
                        (e[a] ||
                          (window.Sentry &&
                            (window.Sentry.captureMessage(
                              "Experiments getVariateConfig",
                              {
                                tags: {
                                  feature:
                                    "shopee-experiments-getVariateConfig",
                                  signature: a,
                                },
                              }
                            ),
                            (e[a] = !0)))),
                      t.apply(n, r)
                    );
                  },
                });
              T = new Proxy(C, {
                get: (e, n) => ("getVariateConfig" === n ? t : e[n]),
              });
            }
            (0, P.Jj)("React", a),
              (0, P.Jj)("ReactDom", i),
              (0, P.Jj)("ReactDomServer", s),
              (0, P.Jj)("Redux", l),
              (0, P.Jj)("ReduxDynamicMiddlewares", d),
              (0, P.Jj)("ReactRedux", c),
              (0, P.Jj)("_ReactRouter", u),
              (0, P.Jj)("ReactRouter", p),
              (0, P.Jj)("ReactHelmet", _),
              (0, P.Jj)("PlatformApi", m),
              (0, P.Jj)("WithInjectReducer", f),
              (0, P.Jj)("NebulaCore", h),
              (0, P.Jj)("PrometheusBeacon", r),
              (0, P.Jj)("PrometheusTracker", I),
              (0, P.Jj)("Experiments", T),
              (0, P.Jj)("HistoryApi", R),
              (0, P.Jj)("FeatureToggles", A),
              (0, P.Jj)("TrackingHoc", b),
              (0, P.Jj)("Account", { AccountContext: O.w }),
              P.ZP.setModuleOptionsOverride("shopee_common__currency", {
                version: "4.0.2",
              }),
              P.ZP.setModuleOptionsOverride("shopee__settings", {
                version: "2.2.0",
              }),
              P.ZP.setModuleOptionsOverride("shopee__language", {
                version: "2.2.0",
              });
            var y = n(61934);
            let v = 1;
            const w = {};
            let N = [],
              L = 1;
            const D = {};
            function U() {
              return N[0];
            }
            const k = () => {},
              F = {
                init: k,
                send(e, t) {
                  var n;
                  null == (n = N.find((e) => 0 === e.impl || 1 === e.impl)) ||
                    null == (n = n.sdk) ||
                    null == n.send ||
                    n.send(e, t);
                },
                registerHandler(e, t, n) {
                  const r = U();
                  if (!r) return;
                  let a;
                  const { id: o, impl: i, sdk: s } = r;
                  switch (i) {
                    case 0:
                      return void s.registerHandler(e, t);
                    case 1:
                      n || (n = String(L++)),
                        (a = n),
                        s.registerHandler(e, t, a);
                      break;
                    case 2:
                      (a = s.registerHandler(e, t)), n || (n = a);
                  }
                  return (
                    D[e] || (D[e] = {}),
                    (D[e][n] = { handlerId: a, instanceId: o }),
                    n
                  );
                },
                unregisterHandler(e, t) {
                  var n;
                  if (!t) return;
                  const r = null == (n = D[e]) ? void 0 : n[t];
                  if (!r) return;
                  const a = w[r.instanceId];
                  a && 0 !== a.impl && a.sdk.unregisterHandler(e, r.handlerId);
                },
                callHandler(e, t, n) {
                  var r;
                  null == (r = U()) ||
                    null == (r = r.sdk) ||
                    null == r.callHandler ||
                    r.callHandler(e, t, n);
                },
                callHandlerAsync(e, t, n) {
                  var r;
                  null == (r = N.find((e) => 2 === e.impl)) ||
                    null == (r = r.sdk) ||
                    null == r.callHandlerAsync ||
                    r.callHandlerAsync(e, t, n);
                },
                reset: k,
                addHook: k,
                delHook: k,
                appHasHandler: (e) => !1,
                hasHandler(e) {
                  for (const { sdk: t } of N)
                    if ("true" === t.hasHandler(e)) return "true";
                  return "false";
                },
                hasHandlerCB(e) {
                  var t;
                  null == (t = window.gabridge) ||
                    null == t.onHasHandler ||
                    t.onHasHandler(e, F.hasHandler(e));
                },
                _fetchQueue() {
                  const e = [];
                  for (const { id: n, sdk: r } of N) {
                    const a = r._fetchQueue();
                    if (a)
                      try {
                        const t = JSON.parse(a);
                        for (const r of t) {
                          if (!("callbackId" in r) || !r.callbackId) {
                            e.push(r);
                            continue;
                          }
                          const t = (0, y.Z)({}, r);
                          (t.callbackId = `${n}:${r.callbackId}`), e.push(t);
                        }
                      } catch (t) {}
                  }
                  return JSON.stringify(e);
                },
                _handleMessageFromObjC(e) {
                  const t = JSON.parse(e);
                  if ("responseId" in t && t.responseId) {
                    const e = t.responseId.match(/^(?:(\d+):)?(.*)$/);
                    if (e && e[1]) {
                      const n = w[e[1]];
                      if (n) {
                        const r = (0, y.Z)({}, t);
                        return (
                          (r.responseId = e[2]),
                          void n.sdk._handleMessageFromObjC(JSON.stringify(r))
                        );
                      }
                    }
                  }
                  for (const { sdk: n } of N) n._handleMessageFromObjC(e);
                },
                get _messageHandler() {},
                set _messageHandler(e) {},
                get _instances() {
                  return N.slice();
                },
                _removeInstance(e) {
                  N = N.filter((t) => t.sdk !== e || (delete w[t.id], !1));
                },
              };
            !(function () {
              try {
                const e = navigator.userAgent.toLowerCase();
                if (!e.includes("shopee") && !e.includes("beeshop")) return;
                const t = window.__ASSETS__.PLATFORM_STATIC_TOGGLE,
                  n = t.BRIDGE_V2,
                  r = Math.floor(100 * Math.random());
                let o = 0;
                if (n) {
                  const e = Object.keys(n);
                  let t = n.default;
                  for (let r = 0; r < e.length; r++) {
                    const a = e[r];
                    if (
                      "default" !== a &&
                      new RegExp(a).test(location.pathname)
                    ) {
                      t = n[a];
                      break;
                    }
                  }
                  if (!t) return;
                  let a = 0;
                  for (let n = 0; n < t.length; n++) {
                    const e = t[n];
                    if (((a += e.p), r < a)) {
                      o = e.v;
                      break;
                    }
                  }
                } else {
                  const e = t.SINGLETON_BRIDGE,
                    n = location.pathname;
                  e[
                    n.startsWith("/return/")
                      ? "return"
                      : n.startsWith("/payment/")
                      ? "payment"
                      : n.startsWith("/verify/")
                      ? "verify"
                      : "default"
                  ] > r && (o = 1);
                }
                switch (o) {
                  case 3:
                    !(function () {
                      const e = a,
                        t = e.useEffect.bind(e);
                      e.useEffect = function (e, n) {
                        return t(() => {
                          const t = e();
                          if ("function" == typeof t)
                            return () => {
                              try {
                                t();
                              } catch (e) {
                                if (
                                  !(function (e) {
                                    if (
                                      !e ||
                                      !e.message ||
                                      "TypeError" !== e.name
                                    )
                                      return !1;
                                    const t = String(e.message);
                                    return (
                                      t.indexOf(
                                        "Cannot delete property 'WebViewJavascriptBridge'"
                                      ) >= 0 ||
                                      t.indexOf(
                                        'property "WebViewJavascriptBridge" is non-configurable'
                                      ) >= 0 ||
                                      t.indexOf("Unable to delete property") >=
                                        0
                                    );
                                  })(e)
                                )
                                  throw e;
                              }
                            };
                        }, n);
                      };
                    })();
                  case 2:
                    return void Object.defineProperty(
                      window,
                      "WebViewJavascriptBridge",
                      {
                        get: () => {
                          if (0 !== N.length) return F;
                        },
                        set(e) {
                          if (!e) return;
                          const t = v++;
                          let n;
                          (n =
                            "reset" in e
                              ? "addHook" in e
                                ? { id: t, sdk: e, impl: 1 }
                                : {
                                    id: t,
                                    sdk: e,
                                    impl: 2,
                                    version: e._sdkVersion || 0,
                                  }
                              : { id: t, sdk: e, impl: 0 }),
                            N.push(n),
                            (w[t] = n),
                            N.sort((e, t) =>
                              2 === e.impl && 2 === t.impl
                                ? t.version - e.version
                                : t.impl - e.impl
                            ),
                            2 !== n.impl && e.init();
                        },
                      }
                    );
                  case 1:
                    return (function () {
                      const e = {};
                      [
                        "WebViewJavascriptBridge",
                        "connectWebViewJavascriptBridge",
                      ].forEach((t) => {
                        Object.defineProperty(window, t, {
                          configurable: !1,
                          set(n) {
                            e[t] || (e[t] = n);
                          },
                          get: () => e[t],
                        });
                      });
                    })();
                }
              } catch (e) {}
            })();
            var M = n(50002);
            function H(e) {
              return e || {};
            }
            function Z(e = null) {
              return e;
            }
            H.__isStubReducer = !0;
            var x = n(79923),
              G = n(38806),
              B = n(15407),
              W = n(50624),
              V = n(45641);
            const j = "FETCH_CAT_SEO",
              Y = (0, V.n)("FETCH_MART_CAT_SEO"),
              $ = (0, V.n)("FETCH_SHARING_V3_DATA"),
              K = (0, V.n)("FETCH_ITEM_GENERIC_SHARING"),
              q = (0, V.n)("FETCH_SHOP_GENERIC_SHARING"),
              X = (0, V.n)("FETCH_CUSTOM_FOOTER"),
              Q = {
                SG: "sg",
                MY: "ms",
                VN: "vi",
                PH: "ph",
                TH: "th",
                TW: "zh-Hant",
                ID: "id",
                BR: "br",
                MX: "es-mx",
                CO: "co",
                CL: "cl",
              };
            var J = n(88064),
              z = n(96662);
            const ee = {
                category: {},
                martCategory: {},
                shopSharing: {},
                itemSharing: {},
                sharingV3Data: {},
                sharingV3DataProgress: J.ad.INIT,
                footer: {},
              },
              te = (0, W.Z)(
                {
                  [j]: (e, t) => {
                    const n = t;
                    return (0, y.Z)({}, e, {
                      category: (0, y.Z)({}, e.category, { [n.id]: n.data }),
                    });
                  },
                  [Y.SUCCESS]: (e, t) => {
                    const n = t;
                    return (0, y.Z)({}, e, {
                      martCategory: (0, y.Z)({}, e.martCategory, {
                        [n.id]: n.data,
                      }),
                    });
                  },
                  [$.REQUESTED]: (e) =>
                    (0, y.Z)({}, e, { sharingV3DataProgress: J.ad.REQ }),
                  [$.FAILED]: (e) =>
                    (0, y.Z)({}, e, { sharingV3DataProgress: J.ad.ERR }),
                  [$.SUCCESS]: (e, t) => {
                    const n = t;
                    return (0, y.Z)({}, e, {
                      sharingV3Data: (0, y.Z)({}, e.sharingV3Data, {
                        [Q[(0, z.Kd)()]]: [...n.payload.data],
                      }),
                      sharingV3DataProgress: J.ad.OK,
                    });
                  },
                  [K.SUCCESS]: (e, t) => {
                    const n = t;
                    return (0, y.Z)({}, e, {
                      itemSharing: (0, y.Z)({}, e.itemSharing, {
                        ["" + n.payload.itemId]: n.payload.data,
                      }),
                    });
                  },
                  [q.SUCCESS]: (e, t) => {
                    const n = t;
                    return (0, y.Z)({}, e, {
                      shopSharing: (0, y.Z)({}, e.shopSharing, {
                        ["" + n.payload.shopId]: n.payload.data,
                      }),
                    });
                  },
                  [X.SUCCESS]: (e, t) => {
                    const n = t;
                    return (0, y.Z)({}, e, {
                      footer: (0, y.Z)({}, e.footer, { [n.id]: n.data }),
                    });
                  },
                },
                ee
              ),
              ne = { storage: n(91211).default },
              re = (function (e, t) {
                return (0, x.persistReducer)(
                  (0, y.Z)({}, ne, {
                    key: "featureToggles",
                    whitelist: ["toggles", "updateTime", "userid"],
                  }),
                  t
                );
              })(0, n(29812).Z);
            function ae(e) {
              return e &&
                e.tier_variations &&
                !e.tier_variations.some((e) => !e.options)
                ? e.tier_variations
                : [];
            }
            function oe(e) {
              return e
                ? e.tier_variations
                  ? (0, y.Z)({}, ie(e), { tier_variations: ae(e) })
                  : ie(e)
                : null;
            }
            function ie(e) {
              return (0,
              y.Z)({}, e, { adsid: void 0, ads_keyword: void 0, campaignid: void 0, locationInAds: void 0, match_type: void 0 });
            }
            function se(e) {
              return `$${e.state}-$${e.city}`;
            }
            var ce = n(70012);
            function le() {
              return { status: ce.hi.REQUESTED, error: null };
            }
            function de() {
              return { status: ce.hi.SUCCESS, error: null };
            }
            function ue(e) {
              return { status: ce.hi.FAILED, error: e };
            }
            var pe = n(5181);
            function _e(e, t) {
              return e.reduce((e, n) => ((e[`${n}`] = t), e), {});
            }
            const me = (0, W.Z)(
              {
                [pe.wq.REQUESTED]: (e, t) =>
                  (0, y.Z)({}, e, {
                    itemError: (0, y.Z)({}, e.itemError, {
                      [t.payload.itemId]: null,
                    }),
                  }),
                [pe.wq.SUCCESS]: (e, t) => {
                  const n = e.items["" + t.payload.itemId];
                  return (0, y.Z)({}, e, {
                    items: (0, y.Z)({}, e.items, {
                      ["" + t.payload.itemId]: (0, y.Z)(
                        {},
                        n,
                        oe(t.payload.item)
                      ),
                    }),
                  });
                },
                [pe.wq.FAILED]: (e, t) =>
                  (0, y.Z)({}, e, {
                    itemError: (0, y.Z)({}, e.itemError, {
                      [t.payload.itemId]: t.payload.error,
                    }),
                    itemCensorIndex: (0, y.Z)({}, e.itemCensorIndex, {
                      [t.payload.itemId]: t.payload.isIndexable,
                    }),
                  }),
                [pe.OG.REQUESTED]: (e, t) => {
                  const n = _e(t.payload.itemIds, J.ZP.REQ);
                  return (0, y.Z)({}, e, {
                    itemsApiProgress: (0, y.Z)({}, e.itemsApiProgress, n),
                  });
                },
                [pe.OG.SUCCESS]: (e, t) => {
                  const n = t.payload.items
                      ? t.payload.items.reduce(
                          (t, n) => (
                            (t["" + n.itemid] = (0, y.Z)(
                              {},
                              e.items["" + n.itemid],
                              oe(n)
                            )),
                            t
                          ),
                          {}
                        )
                      : {},
                    r = t.payload.items
                      ? _e(
                          t.payload.items.map((e) => e.itemid),
                          J.ZP.OK
                        )
                      : {};
                  return t.payload.isPartial
                    ? (0, y.Z)({}, e, {
                        partial: (0, y.Z)({}, e.partial, n),
                        itemsApiProgress: (0, y.Z)({}, e.itemsApiProgress, r),
                      })
                    : (0, y.Z)({}, e, {
                        items: (0, y.Z)({}, e.items, n),
                        itemsApiProgress: (0, y.Z)({}, e.itemsApiProgress, r),
                      });
                },
                [pe.OG.FAILED]: (e, t) => {
                  const n = _e(t.payload.itemIds, J.ZP.ERR);
                  return (0, y.Z)({}, e, {
                    itemsApiProgress: (0, y.Z)({}, e.itemsApiProgress, n),
                  });
                },
                [pe.v_.REQUESTED]: (e, t) =>
                  (0, y.Z)({}, e, {
                    shipping_fee: (0, y.Z)({}, e.shipping_fee, {
                      [t.payload.itemId]: (0, y.Z)(
                        {},
                        e.shipping_fee[t.payload.itemId],
                        { API_STATUS: le() }
                      ),
                    }),
                  }),
                [pe.v_.SUCCESS]: (e, t) =>
                  (0, y.Z)({}, e, {
                    shipping_fee: (0, y.Z)({}, e.shipping_fee, {
                      [t.payload.itemId]: (0, y.Z)(
                        {},
                        e.shipping_fee[t.payload.itemId],
                        {
                          logistics: t.payload.shipping.shipping_infos,
                          promotion_rules: t.payload.shipping.promotion_rules,
                          logistic_service_types:
                            t.payload.shipping.logistic_service_types,
                          has_mask_channel: t.payload.shipping.has_mask_channel,
                          shipping_infos_group_by_service_type:
                            t.payload.shipping
                              .shipping_infos_group_by_service_type,
                          API_STATUS: de(),
                        }
                      ),
                    }),
                  }),
                [pe.v_.FAILED]: (e, t) =>
                  (0, y.Z)({}, e, {
                    shipping_fee: (0, y.Z)({}, e.shipping_fee, {
                      [t.payload.itemId]: { API_STATUS: ue() },
                    }),
                  }),
                [pe.N$.REQUESTED]: (e, t) => {
                  const { itemId: n, modelId: r, address: a } = t.payload,
                    o = (0, y.Z)({}, e, {
                      shipping_info: (0, y.Z)({}, e.shipping_info, {
                        [n]: (0, y.Z)({}, e.shipping_info[n]),
                      }),
                    });
                  if (r && a) {
                    var i;
                    const e = se(a),
                      t =
                        null == (i = o.shipping_info[n])
                          ? void 0
                          : i.modelLevel,
                      s = null == t ? void 0 : t[r],
                      c = null == s ? void 0 : s[e];
                    o.shipping_info[n].modelLevel = (0, y.Z)({}, t, {
                      [r]: (0, y.Z)({}, s, {
                        [e]: (0, y.Z)({}, c, { API_STATUS: le() }),
                      }),
                    });
                  } else o.shipping_info[n].API_STATUS = le();
                  return o;
                },
                [pe.N$.SUCCESS]: (e, t) => {
                  const {
                      itemId: n,
                      modelId: r,
                      address: a,
                      shipping: { data: o },
                    } = t.payload,
                    i = (0, y.Z)({}, e, {
                      shipping_info: (0, y.Z)({}, e.shipping_info, {
                        [n]: (0, y.Z)({}, e.shipping_info[n]),
                      }),
                    }),
                    s = i.shipping_info[n];
                  if (r && a) {
                    const e = se(a);
                    s.modelLevel = (0, y.Z)({}, s.modelLevel, {
                      [r]: (0, y.Z)({}, s.modelLevel[r], {
                        [e]: (0, y.Z)({}, s.modelLevel[r][e], o, {
                          API_STATUS: de(),
                        }),
                      }),
                    });
                  } else Object.assign(s, o, { API_STATUS: de() });
                  return i;
                },
                [pe.N$.FAILED]: (e, t) => {
                  const {
                      itemId: n,
                      modelId: r,
                      address: a,
                      error: o,
                    } = t.payload,
                    i = (0, y.Z)({}, e, {
                      shipping_info: (0, y.Z)({}, e.shipping_info, {
                        [n]: (0, y.Z)({}, e.shipping_info[n]),
                      }),
                    }),
                    s = i.shipping_info[n];
                  if (r && a) {
                    const e = se(a);
                    s.modelLevel = (0, y.Z)({}, s.modelLevel, {
                      [r]: (0, y.Z)({}, s.modelLevel[r], {
                        [e]: (0, y.Z)({}, s.modelLevel[r][e], {
                          API_STATUS: ue(o),
                        }),
                      }),
                    });
                  } else s.API_STATUS = ue(o);
                  return i;
                },
                [pe.Re.SUCCESS]: (e, t) => {
                  const n = e.items[t.itemId];
                  return (0, y.Z)({}, e, {
                    items: (0, y.Z)({}, e.items, {
                      [t.itemId]: (0, y.Z)({}, n, {
                        installment_plans: t.plans,
                      }),
                    }),
                  });
                },
                [pe.zO]: (e, t) =>
                  (0, y.Z)({}, e, t.state, {
                    items: (0, y.Z)({}, e.items, { [t.itemId]: t.item }),
                  }),
              },
              {
                items: {},
                partial: {},
                itemError: {},
                shipping_fee: {},
                itemsApiProgress: {},
                shipping_info: {},
                itemCensorIndex: {},
              }
            );
            var fe = n(33069);
            const he = (0, V.n)("FETCH_SHOP_DATA"),
              Ee = (0, V.n)("FOLLOW_SHOP"),
              ge = (0, V.n)("UNFOLLOW_SHOP"),
              Se = (0, V.n)("BLOCK_USER"),
              Ie = (0, V.n)("FETCH_SHOP_CATEGORIES"),
              Re = (0, V.n)("FETCH_SHOP_LIKES"),
              Ae = (0, V.n)("FETCH_BATCH_SHOP_BRIEF_INFO");
            function be(e, t, n) {
              const r = e.slice(),
                a = n || 0 === n ? n : e.length;
              for (let o = 0; o < t.length; o++) r[a + o] = t[o];
              return r;
            }
            (0, V.n)("FETCH_SHOP_GAME");
            const Oe = (0, V.n)("LIKE_ITEM"),
              Pe = (0, V.n)("UNLIKE_ITEM"),
              Ce =
                ((0, V.n)("UPDATE_BATCH_LIKED_ITEM"),
                (0, W.Z)(
                  {
                    [Oe.REQUESTED]: (e, t) =>
                      (0, y.Z)({}, e, {
                        likedInfo: (0, y.Z)({}, e.likedInfo, {
                          [t.itemId]: { liked: !0, liked_count: t.likeCount },
                        }),
                      }),
                    [Oe.FAILED]: (e, t) =>
                      (0, y.Z)({}, e, {
                        likedInfo: (0, y.Z)({}, e.likedInfo, {
                          [t.itemId]: { liked: !1, liked_count: t.likeCount },
                        }),
                      }),
                    [Pe.REQUESTED]: (e, t) =>
                      (0, y.Z)({}, e, {
                        likedInfo: (0, y.Z)({}, e.likedInfo, {
                          [t.itemId]: { liked: !1, liked_count: t.likeCount },
                        }),
                      }),
                    [Pe.FAILED]: (e, t) =>
                      (0, y.Z)({}, e, {
                        likedInfo: (0, y.Z)({}, e.likedInfo, {
                          [t.itemId]: { liked: !0, liked_count: t.likeCount },
                        }),
                      }),
                  },
                  { likedInfo: {} }
                ));
            var Te = n(8689);
            const ye = { currentLocation: null, previousLocation: null };
            var ve = n(58159),
              we = n(17675);
            var Ne = n(72288),
              Le = n(25614),
              De = n(78927);
            const Ue = {
                info: (0, y.Z)({}, De.UB, {
                  cookies_accepted_time: Ne.N
                    ? (function () {
                        const e = we.X.getItem("@shopee/user-gdpr");
                        return isNaN(parseInt(e, 10)) ? 0 : parseInt(e, 10);
                      })()
                    : 0,
                  disallow_data_processing: null,
                }),
                progress: J.ZP.INIT,
                error: null,
                isClient: !1,
              },
              ke = "largeFeatureToggle",
              Fe = (0, V.n)("FETCH_LARGE_FEATURE_TOGGLES"),
              Me = {},
              He = {
                featureToggles: re,
                history: function (e = ye, t) {
                  return t.type === Te.nk
                    ? (0, y.Z)({}, e, {
                        previousLocation: e.currentLocation,
                        currentLocation: t.payload,
                      })
                    : e;
                },
                item: me,
                itemClient: Ce,
                itemCardManifest: fe.Z,
                seo: te,
                shop: function (e = {}, t) {
                  switch (t.type) {
                    case he.REQUESTED:
                      return (function (e, t) {
                        const { shopId: n } = t;
                        return "number" != typeof n
                          ? e
                          : (0, y.Z)({}, e, {
                              [n]: (0, y.Z)({}, e[n], { isFetching: !0 }),
                            });
                      })(e, t);
                    case he.SUCCESS:
                      return (function (e, t) {
                        return (0, y.Z)({}, e, {
                          [t.shopId]: (0, y.Z)({}, e[t.shopId], {
                            shopInfo: t.response,
                            isFetching: !1,
                          }),
                        });
                      })(e, t);
                    case he.FAILED:
                      return (function (e, t) {
                        const { shopId: n } = t;
                        return "number" != typeof n
                          ? e
                          : (0, y.Z)({}, e, {
                              [n]: (0, y.Z)({}, e[n], { isFetching: !1 }),
                            });
                      })(e, t);
                    case Ee.SUCCESS:
                      return (function (e, t) {
                        return (0, y.Z)({}, e, {
                          [t.shopId]: (0, y.Z)({}, e[t.shopId], {
                            shopInfo: (0, y.Z)({}, e[t.shopId].shopInfo, {
                              followed: !0,
                            }),
                            shopBriefInfo: (0, y.Z)(
                              {},
                              e[t.shopId].shopBriefInfo,
                              { followed: !0 }
                            ),
                          }),
                        });
                      })(e, t);
                    case ge.SUCCESS:
                      return (function (e, t) {
                        return (0, y.Z)({}, e, {
                          [t.shopId]: (0, y.Z)({}, e[t.shopId], {
                            shopInfo: (0, y.Z)({}, e[t.shopId].shopInfo, {
                              followed: !1,
                            }),
                            shopBriefInfo: (0, y.Z)(
                              {},
                              e[t.shopId].shopBriefInfo,
                              { followed: !1 }
                            ),
                          }),
                        });
                      })(e, t);
                    case Se.SUCCESS:
                      return (function (e, t) {
                        return (0, y.Z)({}, e, {
                          [t.shopId]: (0, y.Z)({}, e[t.shopId], {
                            shopInfo: (0, y.Z)({}, e[t.shopId].shopInfo, {
                              is_blocking_owner: t.toBlock,
                            }),
                          }),
                        });
                      })(e, t);
                    case Ie.SUCCESS:
                      return (function (e, t) {
                        var n;
                        return (0, y.Z)({}, e, {
                          [t.shopId]: (0, y.Z)({}, e[t.shopId], {
                            shopCategories: {
                              items: be(
                                (null == e ||
                                null == (n = e[t.shopId]) ||
                                null == (n = n.shopCategories)
                                  ? void 0
                                  : n.items) || [],
                                t.data.items,
                                t.offset
                              ),
                              hasMore:
                                null == t.data.nomore
                                  ? t.data.items.length === t.limit
                                  : !t.data.nomore,
                              allProductsCover: t.data.all_products_cover,
                              nextOffset: t.offset + t.limit,
                            },
                          }),
                        });
                      })(e, t);
                    case Re.SUCCESS:
                      return (function (e, t) {
                        var n;
                        const r =
                          (null == e ||
                          null == (n = e[t.shopId]) ||
                          null == (n = n.likedItems)
                            ? void 0
                            : n.items) || [];
                        return (0, y.Z)({}, e, {
                          [t.shopId]: (0, y.Z)({}, e[t.shopId], {
                            likedItems: {
                              items: r.concat(t.response.data.items),
                              hasMore: t.response.data.items.length === t.limit,
                              private: !1,
                            },
                          }),
                        });
                      })(e, t);
                    case Re.FAILED:
                      return (function (e, t) {
                        return (0, y.Z)({}, e, {
                          [t.shopId]: (0, y.Z)({}, e[t.shopId], {
                            likedItems: { items: [], hasMore: !1, private: !0 },
                          }),
                        });
                      })(e, t);
                    case Ae.REQUESTED:
                      return (function (e, t) {
                        return (0, y.Z)(
                          {},
                          e,
                          t.shopIds.reduce(
                            (t, n) => (
                              (t[n] = (0, y.Z)({}, e[n], {
                                fetchBriefInfoProgress: J.ZP.REQ,
                              })),
                              t
                            ),
                            {}
                          )
                        );
                      })(e, t);
                    case Ae.SUCCESS:
                      return (function (e, t) {
                        return (0, y.Z)(
                          {},
                          e,
                          t.response.data.shops.reduce((t, n) => {
                            if (!n || !n.shopid) return t;
                            const { shopid: r } = n;
                            return (
                              (t[r] = (0, y.Z)({}, e[r], {
                                fetchBriefInfoProgress: J.ZP.OK,
                                shopBriefInfo: n,
                              })),
                              t
                            );
                          }, {})
                        );
                      })(e, t);
                    case Ae.FAILED:
                      return (function (e, t) {
                        return (0, y.Z)(
                          {},
                          e,
                          t.shopIds.reduce(
                            (t, n) => (
                              (t[n] = (0, y.Z)({}, e[n], {
                                fetchBriefInfoProgress: J.ZP.ERR,
                              })),
                              t
                            ),
                            {}
                          )
                        );
                      })(e, t);
                    default:
                      return e;
                  }
                },
                theme: function (e = "", t) {
                  switch (t.type) {
                    case "SET_DEFAULT_THEME":
                      return ve.Q.DEFAULT;
                    case "SET_OFFICIAL_SHOP_THEME":
                      return t.enable ? ve.Q.OFS : ve.Q.DEFAULT;
                    case "SET_SHOPEE_MART_THEME":
                      return ve.Q.S_MART;
                    default:
                      return e;
                  }
                },
                [De.L5]: function (e = Ue, t) {
                  switch (t.type) {
                    case Le.XY.REQUESTED:
                      return (0, y.Z)({}, e, {
                        isClient: t.payload.isClient,
                        progress: J.ZP.REQ,
                      });
                    case Le.XY.FAILED:
                      return (0, y.Z)({}, e, {
                        error: t.payload.error,
                        progress: J.ZP.ERR,
                      });
                    case Le.XY.SUCCESS:
                      return (0, y.Z)({}, e, {
                        info: (0, y.Z)({}, e.info, t.payload.info),
                        progress: J.ZP.OK,
                      });
                    default:
                      return (function (e = Ue, t) {
                        switch (t.type) {
                          case Le.rJ:
                          case Le.ii.SUCCESS:
                          case Le.FI.SUCCESS:
                            return t.payload
                              ? (0, y.Z)({}, e, {
                                  info: (0, y.Z)({}, e.info, {
                                    phone: t.payload.phone,
                                  }),
                                })
                              : e;
                          case Le.Hq:
                          case Le.GF.SUCCESS:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                email: t.payload.email,
                              }),
                            });
                          case Le.cm:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                has_password: t.payload.hasPassword,
                              }),
                            });
                          case Le.Pz.SUCCESS:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                phone: t.payload.phone,
                                phone_verified: !0,
                              }),
                            });
                          case Le.RJ.SUCCESS:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                adult_consent: t.payload.adultConsentTimestamp,
                              }),
                            });
                          case Le.HH.SUCCESS:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                tos_accepted_time: Math.round(
                                  Date.now().valueOf() / 1e3
                                ),
                              }),
                            });
                          case Le.x8.SUCCESS:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                username: t.payload.newUsername,
                              }),
                            });
                          case Le.Zu.SUCCESS:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)(
                                {},
                                e.info,
                                t.payload.newProfile.portrait && {
                                  portrait: t.payload.newProfile.portrait,
                                }
                              ),
                            });
                          case Le.hp.REQUESTED:
                          case Le.DM:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                cookies_accepted_time: Math.round(
                                  Date.now() / 1e3
                                ),
                              }),
                            });
                          case Le.hp.FAILED:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                cookies_accepted_time: 0,
                              }),
                            });
                          case Le.d$.REQUESTED: {
                            const { dataProcessingConsent: n } = t.payload;
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                disallow_data_processing: !n,
                              }),
                            });
                          }
                          case Le.d$.FAILED:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                disallow_data_processing:
                                  !e.info.disallow_data_processing,
                              }),
                            });
                          case Le._d.SUCCESS:
                            return (0, y.Z)({}, e, {
                              info: (0, y.Z)({}, e.info, {
                                tax_id: t.payload.taxId,
                              }),
                            });
                          default:
                            return e;
                        }
                      })(e, t);
                  }
                },
                [ke]: function (e = Me, t) {
                  const n = t;
                  switch (n.type) {
                    case Fe.REQUESTED: {
                      const t = (0, y.Z)({}, e);
                      return (
                        n.payload.hashedNameList.forEach((e) => {
                          t[e] = (0, y.Z)({}, t[e] || {}, {
                            progress: J.ZP.REQ,
                          });
                        }),
                        t
                      );
                    }
                    case Fe.SUCCESS: {
                      const t = (0, y.Z)({}, e);
                      return (
                        n.payload.data.forEach(({ name: e, toggle: n }) => {
                          t[e] = { progress: J.ZP.OK, value: n };
                        }),
                        t
                      );
                    }
                    case Fe.FAILED: {
                      const t = (0, y.Z)({}, e);
                      return (
                        n.payload.hashedNameList.forEach((e) => {
                          t[e] = (0, y.Z)({}, t[e] || {}, {
                            progress: J.ZP.ERR,
                          });
                        }),
                        t
                      );
                    }
                    default:
                      return e;
                  }
                },
              };
            let Ze = null,
              xe = null,
              Ge = function (e) {};
            function Be() {
              if (null !== m.history) {
                let e = null;
                const t = (function ({ history: e }) {
                    const t = [d.default, G.Z];
                    return [
                      (() => {
                        const n = (0, B.Z)(e);
                        return n
                          ? (0, l.applyMiddleware)(...t, n)
                          : (0, l.applyMiddleware)(...t);
                      })(),
                    ];
                  })({ history: m.history }),
                  n =
                    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
                    l.compose);
                (Ze = (function ({
                  reducers: e,
                  enhancer: t,
                  onReducerInjected: n,
                  onStoreCreated: r,
                  initialState: a = window.__STORE__,
                  configureReducer: o,
                }) {
                  const i = Object.assign({}, e);
                  if (a && "object" == typeof a)
                    for (const c of Object.keys(a))
                      i.hasOwnProperty(c) || (i[c] = H);
                  const s = (function ({
                    reducers: e,
                    enhancer: t,
                    initialState: n,
                    configureReducer: r,
                  }) {
                    const a = (0, l.combineReducers)(
                        0 === Object.keys(e).length ? { noop: Z } : e
                      ),
                      o = r ? r(a) : a;
                    return (0, l.createStore)(o, n, t);
                  })({
                    reducers: i,
                    enhancer: t,
                    initialState: a,
                    configureReducer: o,
                  });
                  return (
                    r && r(s),
                    {
                      store: s,
                      injectReducer: (e) => {
                        if (!s) return;
                        let t = !1;
                        if (
                          (Object.keys(e).forEach((n) => {
                            (i[n] && null == i[n].__isStubReducer) ||
                              ((t = !0), (i[n] = e[n]));
                          }),
                          !t)
                        )
                          return;
                        const r = (0, l.combineReducers)(i);
                        s.replaceReducer(o ? o(r) : r), n && n();
                      },
                    }
                  );
                })({
                  reducers: (0, y.Z)({}, He, { router: (0, M.iz)(m.history) }),
                  enhancer: n(...t),
                  onStoreCreated: (t) => {
                    we.X.isSupported() && (e = (0, x.persistStore)(t));
                  },
                  onReducerInjected: () => {
                    e && e.persist();
                  },
                })),
                  (xe = Ze.store),
                  (Ge = Ze.injectReducer);
              }
            }
            const We = n.microfeI(0).__exports["./client"];
            var Ve = n(75342),
              je = n(11793),
              Ye = n(20545),
              $e = n(42790),
              Ke = n(59711),
              qe = n(70654),
              Xe = n(39573),
              Qe = n(80924),
              Je = n(58169),
              ze = n(95907),
              et = n(84648),
              tt = n(69391);
            function nt({ location: e }) {
              const t = e.pathname.substring(3) + e.search + e.hash;
              return a.createElement(tt.Z, { to: t, isServerRender: !1 });
            }
            nt.fetchInitial = () => {};
            const rt = nt,
              at = (0, $e.Z)("mobilemall-productdetailspage", {
                spexNamespace: "app.web_fe.mobile.productdetailspage",
                withFeatureToggles: !0,
                withAccountInfo: !0,
              }),
              ot = (0, c.connect)((e) => {
                const { [De.L5]: t, featureToggles: n, item: r } = e;
                return {
                  initialState: { [De.L5]: t, featureToggles: n, item: r },
                };
              })(at);
            var it = n(77317),
              st = n(21026),
              ct = n(48156),
              lt = n(6931);
            const dt = "mobilemall-malllanding",
              ut = (0, $e.Z)(dt, {
                spexNamespace: "app.web_fe.mobile.mallfe",
                withFeatureToggles: !0,
              }),
              pt = (e) => {
                const t = (0, u.useLocation)(),
                  n = (0, it.AW)(t.search),
                  [r, a] = (0, ct.JS)("MM_URL", "MM_url_management_web"),
                  i =
                    "group_b_new" === (null == r ? void 0 : r.parameter) ||
                    !(null == n || !n.__pb_mall__) ||
                    ["MX", "CO", "CL"].includes((0, z.Kd)());
                return a === J.ZP.INIT || a === J.ZP.REQ
                  ? o().createElement(
                      "div",
                      {
                        style: {
                          width: "100vw",
                          height: "100vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      },
                      o().createElement(lt.g, null)
                    )
                  : i
                  ? o().createElement(st.Z, {
                      slotName: "mobilemall-pagebuilder",
                      spexNamespace: "app.web_fe.mobile.pagebuilder",
                      withFeatureToggles: !0,
                      withAccountInfo: !0,
                      slotProps: e,
                    })
                  : o().createElement(ut, {
                      location: e.location,
                      match: e.match,
                      history: e.history,
                      slotName: dt,
                    });
              },
              _t = "mobilemall-mart-homepage",
              mt = function (e) {
                return a.createElement(st.Z, {
                  slotName: _t,
                  spexNamespace: "app.web_fe.mobile.mart",
                  slotProps: (0, y.Z)({}, e, { slotName: _t }),
                  slotLoadingFallback: null,
                  withFeatureToggles: !0,
                  withExperiments: !0,
                });
              },
              ft = "mobilemall-mart-voucherlandingpage",
              ht = function (e) {
                return a.createElement(st.Z, {
                  slotName: ft,
                  spexNamespace: "app.web_fe.mobile.mart",
                  slotProps: (0, y.Z)({}, e, { slotName: ft }),
                  slotLoadingFallback: null,
                  withFeatureToggles: !0,
                  withExperiments: !0,
                });
              };
            var Et = n(95504),
              gt = n(29451);
            const St = n(47600).vy.MART_LANDING_PAGE;
            function It(e) {
              return a.createElement(gt.Z, {
                location: e.location,
                match: e.match,
                pageType: St,
                trackParams: { shopId: (0, Et.AT)() },
              });
            }
            const Rt = "mobilemall-martcategorylistpage",
              At = function (e) {
                return a.createElement(st.Z, {
                  slotName: Rt,
                  spexNamespace: "app.web_fe.mobile.mart",
                  slotProps: (0, y.Z)({}, e, { slotName: Rt }),
                  slotLoadingFallback: null,
                  withFeatureToggles: !0,
                  withExperiments: !0,
                });
              },
              bt = "mobilemall-mart-categorylandingpage",
              Ot = function (e) {
                return a.createElement(st.Z, {
                  slotName: bt,
                  spexNamespace: "app.web_fe.mobile.mart",
                  slotProps: (0, y.Z)({}, e, { slotName: bt }),
                  slotLoadingFallback: null,
                  withFeatureToggles: !0,
                  withExperiments: !0,
                });
              },
              Pt = "mobilemall-mart-dealspage",
              Ct = function (e) {
                return a.createElement(st.Z, {
                  slotName: Pt,
                  spexNamespace: "app.web_fe.mobile.mart",
                  slotProps: (0, y.Z)({}, e, { slotName: Pt }),
                  slotLoadingFallback: null,
                  withFeatureToggles: !0,
                  withExperiments: !0,
                });
              };
            let Tt, yt, vt, wt, Nt, Lt, Dt, Ut, kt, Ft, Mt, Ht, Zt, xt, Gt, Bt;
            const { LOCALE: Wt } = je.config,
              Vt = "name",
              jt = "component",
              Yt = "chunkName",
              $t = "params",
              Kt = "loader",
              qt = "Placeholder",
              Xt = "spexNamespace",
              Qt = "skipSsr",
              Jt = "withExperiments",
              zt = "withFeatureToggles",
              en = "slotNames";
            let tn = null;
            function nn() {
              tn = [
                Tt ||
                  (Tt = {
                    path: Ke.AF6,
                    exact: !0,
                    [en]: ["mobilemall-mart-homepage"],
                    [Vt]: "ShopeeMartHomePage",
                    [jt]: mt,
                    [$t]: { [Yt]: "ShopeeMartHomePage" },
                  }),
                vt ||
                  (vt = {
                    path: Ke.d4u,
                    exact: !0,
                    [en]: ["mobilemall-rcmd-mart-buy-again-page"],
                    [Vt]: "ShopeeMartBuyAgainPage",
                    [jt]:
                      yt ||
                      (yt = (0, $e.Z)("mobilemall-rcmd-mart-buy-again-page", {
                        [Xt]: "app.web_fe.mobile.rcmd",
                        [Qt]: !1,
                        [Jt]: !1,
                        [zt]: !1,
                      })),
                    [$t]: { [Yt]: "ShopeeMartBuyAgainPage" },
                  }),
                wt ||
                  (wt = {
                    path: Ke.$Q2,
                    exact: !0,
                    [en]: ["mobilemall-mart-voucherlandingpage"],
                    [Vt]: "ShopeeMartVoucherLandingPage",
                    [jt]: ht,
                    [$t]: { [Yt]: "ShopeeMartVoucherLandingPage" },
                  }),
                Nt ||
                  (Nt = {
                    path: Ke.eWi,
                    exact: !0,
                    [en]: ["mobilemall-bundledeal"],
                    [Vt]: "ShopeeMartBundleDealLandingPage",
                    [jt]: It,
                    [$t]: { [Yt]: "ShopeeMartBundleDealLandingPage" },
                  }),
                Dt ||
                  (Dt = {
                    path: Ke.GIs,
                    exact: !0,
                    [en]: ["mobilemall-search-mart-page"],
                    [Vt]: "ShopeeMartSearchPage",
                    [jt]:
                      Lt ||
                      (Lt = (0, $e.Z)("mobilemall-search-mart-page", {
                        [Xt]: "app.web_fe.mobile.search",
                        [Qt]: !1,
                        [Jt]: !1,
                        [zt]: !1,
                      })),
                    [$t]: { [Yt]: "ShopeeMartSearchPage" },
                  }),
                Ut ||
                  (Ut = {
                    path: Ke.OVr,
                    exact: !0,
                    [en]: ["mobilemall-martcategorylistpage"],
                    [Vt]: "ShopeeMartCategoriesListPage",
                    [jt]: At,
                    [$t]: { [Yt]: "ShopeeMartCategoriesListPage" },
                  }),
                kt ||
                  (kt = {
                    path: [Ke.pu, Ke.g5j, Ke.Qeo],
                    exact: !0,
                    [en]: ["mobilemall-mart-categorylandingpage"],
                    [Vt]: "ShopeeMartCategoryLandingPage",
                    [jt]: Ot,
                    [$t]: { [Yt]: "ShopeeMartCategoryLandingPage" },
                  }),
                Ft ||
                  (Ft = {
                    path: Ke.oT4,
                    exact: !0,
                    [en]: ["mobilemall-mart-dealspage"],
                    [Vt]: "ShopeeMartDealsPage",
                    [jt]: Ct,
                    [$t]: { [Yt]: "ShopeeMartDealsPage" },
                  }),
                Ht ||
                  (Ht = {
                    path: Ke.Fvt,
                    exact: !0,
                    [Vt]: "ShopeeMartAddOnDealsPage",
                    [jt]:
                      Mt ||
                      (Mt = (0, Ve.Ds)({
                        [Kt]: () => n.e(4859).then(n.bind(n, 64306)),
                        [qt]: Ye.Z,
                      })),
                    [$t]: { [Yt]: "ShopeeMartAddOnDealsPage" },
                  }),
                xt ||
                  (xt = {
                    path: (0, qe.pQ)(qe.Z6.MART_FLASH_SALE)(Wt),
                    exact: !0,
                    [Vt]: "PageFlashSaleSMart",
                    [jt]:
                      Zt ||
                      (Zt = (0, Ve.Ds)({
                        [Kt]: () => n.e(8798).then(n.bind(n, 87793)),
                        [qt]: Ye.Z,
                      })),
                    [$t]: { [Yt]: "PageFlashSaleSMart" },
                  }),
                Bt ||
                  (Bt = {
                    path: (0, qe.jt)(Wt, qe.Z6.MART_FLASH_SALE),
                    exact: !0,
                    [Vt]: "PageRedirectToFlashSaleSMart",
                    [jt]:
                      Gt ||
                      (Gt = (0, Ve.Ds)({
                        [Kt]: () => n.e(1331).then(n.bind(n, 94981)),
                        [qt]: Ye.Z,
                      })),
                    [$t]: { [Yt]: "PageRedirectToFlashSaleSMart" },
                  }),
              ].filter((e) => !!e);
              for (const e of tn)
                e.routes &&
                  e.getRoutesUncached &&
                  (e.routes = e.getRoutesUncached());
              return tn;
            }
            var rn = n(33822);
            let an, on, sn, cn, ln, dn;
            const un = "name",
              pn = "component",
              _n = "chunkName",
              mn = "params",
              fn = "loader",
              hn = "Placeholder";
            let En = null;
            function gn() {
              En = [
                on ||
                  (on = {
                    path: Ke.zn6,
                    exact: !0,
                    [un]: "ShopeeFoodPaymentSelectionPage",
                    [pn]:
                      an ||
                      (an = (0, Ve.Ds)({
                        [fn]: () =>
                          Promise.all([n.e(2755), n.e(7380), n.e(601)]).then(
                            n.bind(n, 63543)
                          ),
                        [hn]: Ye.Z,
                      })),
                    [mn]: { [_n]: "ShopeeFoodPaymentSelectionPage" },
                  }),
                cn ||
                  (cn = {
                    path: Ke.Jmm,
                    exact: !0,
                    [un]: "ShopeePlayPaymentSelectionPage",
                    [pn]:
                      sn ||
                      (sn = (0, Ve.Ds)({
                        [fn]: () =>
                          Promise.all([n.e(2755), n.e(7380), n.e(6184)]).then(
                            n.bind(n, 11450)
                          ),
                        [hn]: Ye.Z,
                      })),
                    [mn]: { [_n]: "ShopeePlayPaymentSelectionPage" },
                  }),
                dn ||
                  (dn = {
                    path: Ke.Ggd,
                    exact: !0,
                    [un]: "PageDPPaymentSelection",
                    [pn]:
                      ln ||
                      (ln = (0, Ve.Ds)({
                        [fn]: () =>
                          Promise.all([n.e(2755), n.e(7380), n.e(1968)]).then(
                            n.bind(n, 91945)
                          ),
                        [hn]: Ye.Z,
                      })),
                    [mn]: { [_n]: "PageDPPaymentSelection" },
                  }),
              ].filter((e) => !!e);
              for (const e of En)
                e.routes &&
                  e.getRoutesUncached &&
                  (e.routes = e.getRoutesUncached());
              return En;
            }
            const { SHOPEE_BASE_URL: Sn } = je.config,
              In = function () {
                return (
                  (0, a.useEffect)(() => {
                    const e = window.location;
                    e.replace(Sn + e.pathname + e.search + e.hash);
                  }, []),
                  null
                );
              },
              { SHOPEE_BASE_URL: Rn } = je.config;
            function An({ location: e, staticContext: t }) {
              const n =
                Rn +
                (/__classic__=1/.test(e.search)
                  ? "/"
                  : ((r = e.pathname + e.search + e.hash),
                    (0, it.ZY)(r, { __classic__: 1 })));
              var r;
              return window.location.replace(n), null;
            }
            An.fetchInitial = () => {};
            const bn = An;
            var On = n(54554);
            let Pn,
              Cn,
              Tn,
              yn,
              vn,
              wn,
              Nn,
              Ln,
              Dn,
              Un,
              kn,
              Fn,
              Mn,
              Hn,
              Zn,
              xn,
              Gn,
              Bn,
              Wn,
              Vn,
              jn,
              Yn,
              $n,
              Kn,
              qn,
              Xn,
              Qn,
              Jn,
              zn,
              er,
              tr,
              nr,
              rr,
              ar,
              or,
              ir,
              sr,
              cr,
              lr,
              dr,
              ur,
              pr,
              _r,
              mr,
              fr,
              hr,
              Er,
              gr,
              Sr,
              Ir,
              Rr,
              Ar,
              br,
              Or,
              Pr,
              Cr,
              Tr,
              yr,
              vr,
              wr,
              Nr,
              Lr,
              Dr,
              Ur,
              kr,
              Fr,
              Mr,
              Hr,
              Zr,
              xr,
              Gr,
              Br,
              Wr,
              Vr,
              jr,
              Yr,
              $r,
              Kr,
              qr,
              Xr,
              Qr,
              Jr,
              zr,
              ea,
              ta,
              na,
              ra,
              aa,
              oa,
              ia,
              sa,
              ca,
              la,
              da,
              ua,
              pa,
              _a,
              ma,
              fa,
              ha,
              Ea,
              ga,
              Sa,
              Ia,
              Ra,
              Aa,
              ba,
              Oa,
              Pa,
              Ca,
              Ta,
              ya,
              va,
              wa,
              Na,
              La,
              Da,
              Ua,
              ka,
              Fa,
              Ma,
              Ha,
              Za,
              xa,
              Ga,
              Ba,
              Wa,
              Va,
              ja,
              Ya,
              $a,
              Ka,
              qa,
              Xa,
              Qa,
              Ja,
              za,
              eo,
              to,
              no,
              ro,
              ao,
              oo,
              io,
              so,
              co,
              lo,
              uo,
              po,
              _o,
              mo,
              fo,
              ho,
              Eo,
              go,
              So,
              Io,
              Ro,
              Ao,
              bo,
              Oo,
              Po,
              Co,
              To,
              yo,
              vo,
              wo,
              No,
              Lo,
              Do,
              Uo,
              ko,
              Fo,
              Mo,
              Ho,
              Zo,
              xo,
              Go,
              Bo,
              Wo,
              Vo,
              jo,
              Yo,
              $o,
              Ko,
              qo,
              Xo,
              Qo,
              Jo,
              zo,
              ei,
              ti,
              ni,
              ri,
              ai,
              oi,
              ii,
              si,
              ci,
              li,
              di,
              ui,
              pi,
              _i,
              mi,
              fi,
              hi,
              Ei,
              gi,
              Si,
              Ii,
              Ri,
              Ai,
              bi,
              Oi,
              Pi,
              Ci,
              Ti,
              yi,
              vi,
              wi,
              Ni,
              Li,
              Di,
              Ui,
              ki,
              Fi,
              Mi,
              Hi,
              Zi,
              xi,
              Gi,
              Bi,
              Wi,
              Vi,
              ji,
              Yi,
              $i,
              Ki,
              qi,
              Xi,
              Qi,
              Ji,
              zi,
              es,
              ts,
              ns,
              rs,
              as,
              os,
              is,
              ss,
              cs,
              ls,
              ds,
              us,
              ps,
              _s,
              ms,
              fs,
              hs,
              Es,
              gs,
              Ss,
              Is,
              Rs,
              As,
              bs,
              Os,
              Ps,
              Cs,
              Ts,
              ys,
              vs,
              ws,
              Ns,
              Ls,
              Ds,
              Us,
              ks,
              Fs,
              Ms,
              Hs,
              Zs,
              xs,
              Gs,
              Bs,
              Ws,
              Vs,
              js,
              Ys,
              $s,
              Ks,
              qs,
              Xs,
              Qs,
              Js,
              zs,
              ec,
              tc,
              nc,
              rc,
              ac,
              oc,
              ic,
              sc,
              cc,
              lc,
              dc,
              uc,
              pc,
              _c,
              mc,
              fc,
              hc,
              Ec,
              gc,
              Sc,
              Ic,
              Rc,
              Ac,
              bc,
              Oc,
              Pc,
              Cc,
              Tc,
              yc,
              vc,
              wc,
              Nc,
              Lc,
              Dc,
              Uc,
              kc,
              Fc,
              Mc,
              Hc,
              Zc,
              xc,
              Gc,
              Bc,
              Wc,
              Vc,
              jc,
              Yc,
              $c,
              Kc,
              qc,
              Xc;
            const { LOCALE: Qc, ENV: Jc } = je.config,
              zc = "name",
              el = "component",
              tl = "chunkName",
              nl = "params",
              rl = "loader",
              al = "Placeholder",
              ol = "spexNamespace",
              il = "skipSsr",
              sl = "withExperiments",
              cl = "withFeatureToggles",
              ll = "defaultSlotProps",
              dl = "slotNames",
              ul = "routes",
              pl = "getRoutesUncached";
            let _l = null;
            var ml = n(82646);
            var fl = n(52567),
              hl = n(83131),
              El = n(67711),
              gl = n(68058);
            const { COUNTRY_NAME: Sl, SHOPEE_BASE_URL: Il } = je.config,
              Rl = (function ({ SHOPEE_BASE_URL: e }) {
                let t = {};
                const n = (0, z.Kd)();
                "SG" === n || "MY" === n || "TH" === n
                  ? (t = { name: "Shopee" })
                  : "TW" === n
                  ? (t = { name: "蝦皮購物" })
                  : ("ID" === n ||
                      "VN" === n ||
                      "PH" === n ||
                      "BR" === n ||
                      "CO" === n ||
                      "CL" === n ||
                      "MX" === n ||
                      "FR" === n ||
                      "PL" === n ||
                      "ES" === n ||
                      "IN" === n ||
                      "AR" === n) &&
                    (t = { name: "Shopee" });
                const r = (function (e) {
                  let t = null;
                  return (
                    "SG" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeSingapore",
                          "https://www.instagram.com/Shopee_SG",
                          "https://www.youtube.com/channel/UC1eupZS1NOaspu_l_-UstxQ",
                          "https://x.com/ShopeeSG",
                          "https://www.tiktok.com/@shopeesg",
                          "http://play.google.com/store/apps/details?id=com.shopee.sg",
                          "https://itunes.apple.com/SG/app/id959840394",
                        ])
                      : "MY" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeMY",
                          "https://www.instagram.com/Shopee_MY",
                          "https://www.youtube.com/@Shopee_MY",
                          "https://x.com/ShopeeMY",
                          "https://www.tiktok.com/@shopeemy",
                          "https://play.google.com/store/apps/details?id=com.shopee.my",
                          "https://itunes.apple.com/MY/app/id959841113",
                        ])
                      : "TH" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeTH",
                          "https://www.instagram.com/Shopee_TH",
                          "https://www.youtube.com/channel/UCb-nPCNWXBnxbU1SmMz1a-Q",
                          "https://x.com/ShopeeTH",
                          "https://www.tiktok.com/@shopeeth",
                          "https://play.google.com/store/apps/details?id=com.shopee.th",
                          "https://itunes.apple.com/TH/app/id959841453",
                          "https://liff.line.me/1645278921-kWRPP32q/?accountId=shopeeth",
                        ])
                      : "TW" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeTW",
                          "https://www.instagram.com/Shopee_TW",
                          "https://www.youtube.com/channel/UC9wQHnWHsAzv6TRdG4R86Kg",
                          "https://www.tiktok.com/@shopee_tw",
                          "https://play.google.com/store/apps/details?id=com.shopee.tw",
                          "https://itunes.apple.com/TW/app/id959841107",
                          "https://page.line.me/980zufun",
                        ])
                      : "ID" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeID",
                          "https://www.instagram.com/Shopee_ID",
                          "https://www.youtube.com/channel/UCwljrkoI5jsfvAKgW3zNC7Q",
                          "https://x.com/shopeeid",
                          "https://www.tiktok.com/@shopee_id",
                          "https://play.google.com/store/apps/details?id=com.shopee.id",
                          "https://itunes.apple.com/ID/app/id959841443",
                        ])
                      : "VN" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeVN",
                          "https://www.instagram.com/Shopee_VN/",
                          "https://www.youtube.com/channel/UCKcxoGpxOJx3nt83MCG-nuQ",
                          "https://x.com/ShopeeVN",
                          "https://www.tiktok.com/@shopee_vn",
                          "https://play.google.com/store/apps/details?id=com.shopee.vn",
                          "https://itunes.apple.com/VN/app/id959841449",
                        ])
                      : "PH" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeePH",
                          "https://www.instagram.com/Shopee_PH",
                          "https://www.youtube.com/c/shopeephilippines",
                          "https://x.com/ShopeePH",
                          "https://www.tiktok.com/@shopee_ph",
                          "https://play.google.com/store/apps/details?id=com.shopee.ph",
                          "https://itunes.apple.com/PH/app/id959841854",
                        ])
                      : "BR" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeBR",
                          "https://www.instagram.com/Shopee_BR",
                          "https://www.youtube.com/channel/UCpiIoPTro2qRbz135LksDaA",
                          "https://x.com/shopee_br",
                          "https://www.tiktok.com/@shopee_br",
                          "https://play.google.com/store/apps/details?id=com.shopee.br",
                          "https://apps.apple.com/br/app/id1481812175",
                        ])
                      : "CO" === e
                      ? (t = [
                          "https://facebook.com/ShopeeCO",
                          "https://www.instagram.com/Shopee_co",
                          "https://www.youtube.com/@shopeecolombia967",
                          "https://www.tiktok.com/@shopee_co?lang=en",
                          "https://play.google.com/store/apps/details?id=com.shopee.co&pli=1",
                          "https://apps.apple.com/co/app/shopee-co-compra-en-l%C3%ADnea/id1554257433",
                        ])
                      : "CL" === e
                      ? (t = [
                          "https://www.instagram.com/shopee_cl/",
                          "https://www.youtube.com/@shopeechile1125",
                          "https://www.tiktok.com/@shopee_cl?lang=en",
                          "https://play.google.com/store/apps/details?id=com.shopee.cl",
                          "https://apps.apple.com/cl/app/shopee-cl-compra-en-l%C3%ADnea/id1554257918",
                        ])
                      : "MX" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeMX",
                          "https://www.instagram.com/shopee_mx/",
                          "https://www.youtube.com/@shopeemexico",
                          "https://www.tiktok.com/@shopee_mx",
                          "https://play.google.com/store/apps/details?id=com.shopee.mx",
                          "https://apps.apple.com/mx/app/shopee-mx-3-3-mega-promo/id1540749085",
                        ])
                      : "FR" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeFR",
                          "https://www.instagram.com/shopee_fr",
                          "https://play.google.com/store/apps/details?id=com.shopee.fr",
                          "https://apps.apple.com/FR/app/id1569764159",
                        ])
                      : "PL" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeePL",
                          "https://www.instagram.com/shopee_pl",
                          "https://www.youtube.com/channel/UCriUYy85veu2fz1p4Oaa6KA",
                          "https://play.google.com/store/apps/details?id=com.shopee.pl",
                          "https://apps.apple.com/pl/app/id1569764124",
                        ])
                      : "ES" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeES",
                          "https://www.instagram.com/shopee_es",
                          "https://play.google.com/store/apps/details?id=com.shopee.es",
                          "https://apps.apple.com/ES/app/id1569763855",
                        ])
                      : "IN" === e
                      ? (t = [
                          "https://www.facebook.com/ShopeeIN",
                          "https://www.instagram.com/shopee_in",
                          "https://play.google.com/store/apps/details?id=com.shopee.in",
                          "https://apps.apple.com/IN/app/id1505678092",
                        ])
                      : "AR" === e &&
                        (t = [
                          "https://www.facebook.com/shopeeAR",
                          "https://www.instagram.com/shopee_ar",
                          "https://x.com/ShopeeAR",
                          "https://www.youtube.com/channel/UCh2sA5lQtIWr5URk8T_eqYg",
                        ]),
                    t
                  );
                })(n);
                return (
                  r && (t.sameAs = r),
                  JSON.stringify(
                    (0, y.Z)(
                      {
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        url: e,
                        potentialAction: {
                          "@type": "SearchAction",
                          target: "/search?keyword={search_term_string}",
                          "query-input": "required name=search_term_string",
                        },
                      },
                      t
                    )
                  )
                );
              })({ SHOPEE_BASE_URL: Il }),
              { t: Al } = je.I18n;
            function bl({ theme: e = gl.Q.DEFAULT }) {
              const { pathname: t } = (0, p.useLocation)(),
                n = Al(El.Jo, { country: Sl, interpolation: { escape: !1 } }),
                r = m.Theme.VARIABLES[e || gl.Q.DEFAULT]["--meta-theme-color"];
              return a.createElement(
                _.Helmet,
                null,
                a.createElement("title", null, n),
                a.createElement("meta", { name: "theme-color", content: r }),
                a.createElement("meta", { property: "og:title", content: n }),
                "/" !== t &&
                  a.createElement("script", { type: "application/ld+json" }, Rl)
              );
            }
            var Ol = n(28023);
            class Pl {
              constructor(e, t, n) {
                (this.env = e.toLowerCase()),
                  (this.locale = t.toUpperCase()),
                  (this.props = n),
                  n.initSubscribe(this.sync.bind(this));
              }
              dataPostProcesser(e, t) {
                const { platform: n, getCookies: r } = this.props;
                this.cookies || (this.cookies = r());
                const a = this.cookies;
                return (0,
                Ol.kL)((0, y.Z)({ userid: a.SPC_U && "-" !== a.SPC_U ? parseInt(a.SPC_U, 10) : void 0, sessionid: a.SPC_R_T_ID, token: a.SPC_R_T_IV, deviceid: a.SPC_F, platform: n, timestamp: new Date().getTime(), country: this.locale, dfp: t }, e));
              }
              async sync({ data: e }) {
                const t = await je.FetchUtils.getWebDeviceFingerprint({
                    shouldWaitForDfpInit: !0,
                  }),
                  n = this.dataPostProcesser(e, t);
                return (
                  "live" !== this.env &&
                    (0, b.trackLog)({ data: n, raw: e }, "AD"),
                  fetch(Pl.REPORT_ENDPOINT, {
                    method: "POST",
                    body: JSON.stringify(n),
                  })
                );
              }
            }
            Pl.REPORT_ENDPOINT = "/__t__";
            const Cl = (e) => (t) => t.type === e,
              Tl = (e) => (t) => t.info.operation === e,
              yl = (e) => (t) => !!t.info && t.info.target_type === e,
              vl = (e) => {
                const t = e.replace(
                  /([\(\)\{\}\[\]\.\*\+\?\$\^\|\\\/])/g,
                  "\\$1"
                );
                return (
                  (n = new RegExp(`(^|.)${t}$`)),
                  (e) => !!e.info && n.test(e.info.targetType)
                );
                var n;
              },
              wl = (e) => (t) => !!t.info && t.info.page_section === e,
              Nl =
                (...e) =>
                (t) =>
                  e.every((e) => e(t)),
              Ll =
                (...e) =>
                (t) =>
                  e.some((e) => e(t));
            var Dl = n(39855);
            class Ul {
              constructor(e, t, n) {
                const r = this.sync.bind(this);
                (this.sync = r),
                  (this.env = e.toLowerCase()),
                  (this.country = t.toLowerCase()),
                  (this.meta = n.meta),
                  (this.getCookies = n.getCookies),
                  (this.cookies = null),
                  (this.firstPage = null),
                  (this.prevPage = null),
                  (this.prevPageParams = []),
                  n.subscribe(() => !0, r);
              }
              async sync(e) {
                var t;
                this.cookies || (this.cookies = this.getCookies()),
                  (t = e) &&
                    "pageState" === t.type &&
                    (await this.sendNavigateEvent(e),
                    (e = this.cleanPageParams(e)));
                const n = this.cookies;
                await new Promise((t) => {
                  if (!window.dataLayer) return t(void 0);
                  window.dataLayer.push(
                    (0, y.Z)(
                      {
                        event: e.type,
                        country: this.country,
                        environment: this.env,
                        userid:
                          n.SPC_U && "-" !== n.SPC_U
                            ? parseInt(n.SPC_U, 10)
                            : null,
                      },
                      this.meta,
                      e,
                      { eventCallback: t }
                    )
                  );
                });
              }
              async sendNavigateEvent(e) {
                const t = (e && e.info) || {},
                  { href: n, title: r } = t,
                  a = {};
                this.firstPage || (this.firstPage = a);
                const o = {
                  event: "_gtm_navigate",
                  data: {
                    first: this.firstPage,
                    prev: this.prevPage || {},
                    current: a,
                  },
                };
                if (((this.prevPage = a), n)) {
                  const e = (0, Dl.l)(n),
                    t = (0, y.Z)({}, e, { search: (0, it.AW)(e.search) });
                  Object.assign(a, t);
                } else a.search = {};
                r && (a.title = r),
                  await new Promise((e) => {
                    if (!window.dataLayer) return e(void 0);
                    (o.eventCallback = e), window.dataLayer.push(o);
                  });
              }
              cleanPageParams(e) {
                const t = (e && e.info) || {},
                  { pageParams: n = {} } = t,
                  r = this.prevPageParams.reduce(
                    (e, t) => ((e[t] = void 0), e),
                    {}
                  ),
                  a = (0, y.Z)({}, e, {
                    info: (0, y.Z)({}, t, { pageParams: (0, y.Z)({}, r, n) }),
                  });
                return (this.prevPageParams = Object.keys(n)), a;
              }
            }
            var kl = n(86321);
            function Fl() {
              const e = navigator
                ? navigator.userAgent || navigator.vendor || window.opera
                : "";
              return /windows phone/i.test(e)
                ? Ol.Oh.OTHERS
                : /android/i.test(e)
                ? Ol.Oh.ANDROID_WEB
                : /iPad|iPhone|iPod/.test(e) && !window.MSStream
                ? Ol.Oh.IOS_WEB
                : Ol.Oh.OTHERS;
            }
            function Ml(e, t, n = {}) {
              const r = t ? (0, Ol.QX)(t) : {};
              return (0,
              y.Z)({}, n, { operation: Ol.Tl.IMPRESSION, items: e.filter((e) => !!e).map((e) => (0, y.Z)({}, (0, Ol.Jw)(e, null == n ? void 0 : n.listType, r, void 0), { traffic_source: e.traffic_source, display_ad_tag: e.display_ad_tag, target_type: e.target_type, abtest_sign: e.abtest_sign })) });
            }
            function Hl(e, t, n = {}) {
              const r = t ? (0, Ol.QX)(t) : {};
              return (0,
              y.Z)({}, n, { operation: Ol.Tl.CLICK, items: [(0, y.Z)({}, (0, Ol.Jw)(e, null == n ? void 0 : n.listType, r, void 0), { traffic_source: e.traffic_source, display_ad_tag: e.display_ad_tag, target_type: e.target_type, abtest_sign: e.abtest_sign })] });
            }
            var Zl = n(10791),
              xl = n(38196),
              Gl = n(64211);
            function Bl(e, t, n = {}) {
              const r = t ? Vl(t) : {};
              return {
                entrance: n.entrance,
                page_type: n.page_type,
                page_section: n.page_section,
                search_props: n.search_props,
                operation: Ol.Tl.SHOP_CLICK,
                json_data: n.json_data,
                placement: n.placement,
                view_session_id: n.view_session_id,
                shops: [
                  (0, y.Z)({}, Wl(e, r, n.clickArea), {
                    target_type: e.target_type,
                  }),
                ],
                clickItemInfo: n ? n.clickItemInfo : void 0,
                packageVersion: n.packageVersion,
                appVersion: n.appVersion,
              };
            }
            function Wl(e, t, n) {
              return {
                shopid: e.shopid,
                location: e.location,
                query: t,
                json_data: e.json_data,
                items: e.items,
                vouchers: e.shop_vouchers ? e.shop_vouchers.vouchers : {},
                clickArea: n,
                ls_session_id: e.livestream_info
                  ? e.livestream_info.session_id
                  : void 0,
              };
            }
            function Vl(e, t = {}) {
              const n = (0, xl.Z)(e),
                r = [{ match_type: jl(n), match_id: [Yl(n, e)] }];
              return (
                n === Gl.$4.SHOP_CATEGORY &&
                  r.unshift({
                    match_type: jl(Gl.$4.SHOP),
                    match_id: [Yl(Gl.$4.SHOP, e)],
                  }),
                {
                  keyword: e.keyword,
                  sorttype: $l(e),
                  colorful_blocks: t.colorful_blocks,
                  filter_price_min: e.minPrice ? 1 : 0,
                  filter_price_max: e.maxPrice ? 1 : 0,
                  filter_include_sf: e.freeShipping ? 1 : 0,
                  filter_with_discount: e.withDiscount ? 1 : 0,
                  wholesale: e.wholesale ? 1 : 0,
                  filter_item_condition: e.usedItem || e.newItem ? 1 : 0,
                  filter_user_verified: e.preferred ? 1 : 0,
                  filters: r,
                  image_id: t.image_id,
                  candidate_box: t.candidate_box,
                  l1_cat: t.l1_cat,
                }
              );
            }
            function jl(e) {
              return e === Gl.$4.COLLECTION
                ? Ol.jL.MATCH_COLLECTION
                : e === Gl.$4.CATEGORY || e === Gl.$4.SUBCATEGORY
                ? Ol.jL.MATCH_CATEGORY
                : e === Gl.$4.SHOP
                ? Ol.jL.MATCH_SHOP
                : e === Gl.$4.ATTRIBUTE
                ? Ol.jL.MATCH_ATTRIBUTE
                : e === Gl.$4.SHOP_CATEGORY
                ? Ol.jL.MATCH_SHOP_CATE
                : void 0;
            }
            function Yl(e, t) {
              let n;
              switch (e) {
                case Gl.$4.COLLECTION:
                  n = t.collection;
                  break;
                case Gl.$4.CATEGORY:
                  n = t.category;
                  break;
                case Gl.$4.SUBCATEGORY:
                  n = t.subcategory;
                  break;
                case Gl.$4.SHOP:
                  n = t.shop;
                  break;
                case Gl.$4.ATTRIBUTE:
                  n = t.attrId;
                  break;
                case Gl.$4.SHOP_CATEGORY:
                  n = t.shopCollection;
                  break;
                default:
                  n = void 0;
              }
              return "string" == typeof n ? parseInt(n, 10) : n;
            }
            function $l(e) {
              switch (e.sortBy) {
                case Gl.DQ.RELEVANCY:
                case Gl.DQ.POPULAR:
                  return Ol.IR.SORTBY_RELEVANCE;
                case Gl.DQ.TIME:
                  return Ol.IR.SORTBY_LATEST_DESC;
                case Gl.DQ.PRICE:
                  return e.order === Gl.mX.ASC
                    ? Ol.IR.SORTBY_PRICE_ASC
                    : Ol.IR.SORTBY_PRICE_DESC;
                case Gl.DQ.SALES:
                  return Ol.IR.SORTBY_ITEM_SOLD_DESC;
                case Gl.DQ.DISTANCE:
                  return Ol.IR.SORTBY_DISTANCE_ASC;
                default:
                  return;
              }
            }
            var Kl = n(69034),
              ql = n(34667),
              Xl = n(86815),
              Ql = n(92222),
              Jl = n(55210),
              zl = n(41759),
              ed = n(97168),
              td = n(45066),
              nd = n(8110),
              rd = n(44832);
            function ad(
              e,
              t,
              {
                isOfficialMallPath: n,
                isCcInstallmentPaymentWhitelist: r,
                isNonCcInstallmentPaymentWhitelist: a,
              },
              o
            ) {
              var i;
              const s = (0, Kl.Z)(t, e),
                c = (0, ql.Z)(t, e, { isOfficialMallPath: n }),
                l = (0, Xl.ZP)(t, e, {
                  supportsPwg: !1,
                  isCcInstallmentPaymentWhitelist: r,
                  isNonCcInstallmentPaymentWhitelist: a,
                  showDeepDiscountLabel: !0,
                }),
                d = (0, Ql.Z)(t, e);
              let u = null,
                p = !1;
              return (
                c.forEach((e) => {
                  e.name === Jl.SY.OFFICIAL_SHOP
                    ? (u = 1)
                    : e.name === Jl.SY.PREFERRED
                    ? (u = 2)
                    : e.name === Jl.SY.SBS && (p = !0);
                }),
                {
                  campaign_label_ids: id(s, zl.y.CUSTOM),
                  has_video: !!e.video_info_list && !!e.video_info_list.length,
                  item_discount: e.raw_discount || o.discount,
                  shop_type: u,
                  service_by_shopee: p,
                  image_flag_ids: id(c, Jl.SY.CUSTOM),
                  price_before_discount:
                    e.price_before_discount ||
                    (null == (i = e.item_data) ||
                    null == (i = i.item_card_display_price)
                      ? void 0
                      : i.origin_price),
                  price_max_before_discount: e.price_max_before_discount,
                  price_min_before_discount: e.price_min_before_discount,
                  price: e.price || o.price,
                  price_max: e.price_max,
                  price_min: e.price_min,
                  bundle_deal_label:
                    od(l, ed.zR.BUNDLE_DEAL) &&
                    (0, td.HV)(e) &&
                    e.bundle_deal_info
                      ? e.bundle_deal_info.bundle_deal_label
                      : void 0,
                  wholesale: od(l, ed.zR.WHOLESALE) && (0, td.kg)(e),
                  addon_deal_label:
                    od(l, ed.zR.ADD_ON) && (0, td.mC)(e) && e.add_on_deal_info
                      ? e.add_on_deal_info.add_on_deal_label
                      : void 0,
                  cashback: od(l, ed.zR.CASHBACK) && (0, td.tL)(e),
                  other_promotion_label_id: id(l, ed.zR.CUSTOM),
                  rating_star: e.item_rating
                    ? e.item_rating.rating_star
                    : o.rating
                    ? o.rating.rating_star
                    : 0,
                  sold_count: e.historical_sold || o.sold_count,
                  free_shipping: od(d, nd.d.FREE_SHIPPING) && (0, rd.v1)(e),
                  other_icon_in_price_id: id(d, nd.d.CUSTOM),
                  sold_out: o.is_sold_out || 0 === e.stock,
                }
              );
            }
            function od(e, t) {
              return e.some((e) => e.name === t);
            }
            function id(e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  e.name === t && n.push(...e.product_label_ids);
                }),
                n
              );
            }
            function sd(e, t) {
              (function (e, t) {
                const n = Ll(
                    vl("ProductPage.YouMayAlsoLike.ItemCard"),
                    vl("CartYmal.ItemCard")
                  ),
                  r = Ll(
                    vl("ProductPage.YouMayAlsoLike.product_card"),
                    vl("CartYmal.product_card")
                  );
                e(
                  Nl((e) => "impression" === e.type, n),
                  (function (e) {
                    return ({ info: t }) => {
                      var n, r;
                      const { impressions: a } = t,
                        o =
                          null == (n = a[0]) || null == (n = n.targetData)
                            ? void 0
                            : n.adsTrackingData;
                      let i = {};
                      const s =
                          (null == o ? void 0 : o.recommendParams) ||
                          (null == (r = a[0]) || null == (r = r.targetData)
                            ? void 0
                            : r.context),
                        { page_type: c, page_section: l } = null != o ? o : {};
                      s &&
                        (i = Ml(
                          a.map(({ targetData: e }) => {
                            var t;
                            const { item: n, traffic_source: r } = e,
                              { display_ad_tag: a } = n || {};
                            return (0, y.Z)({}, n, {
                              target_type: "item",
                              display_ad_tag: a,
                              traffic_source: r,
                              abtest_sign:
                                null == e ||
                                null == (t = e.adsTrackingData) ||
                                null == (t = t.item)
                                  ? void 0
                                  : t.abtest_sign,
                            });
                          }),
                          s,
                          {
                            page_type: c,
                            page_section: l,
                            placement: null == o ? void 0 : o.placement,
                            entrance: null == o ? void 0 : o.entrance,
                            view_session_id:
                              null == o ? void 0 : o.view_session_id,
                          }
                        )),
                        e({ data: i });
                    };
                  })(t)
                ),
                  e(
                    Nl((e) => "click" === e.type, n),
                    (function (e) {
                      return ({ info: t }) => {
                        const { targetData: n } = t,
                          {
                            item: r,
                            adsTrackingData: a,
                            traffic_source: o,
                          } = n,
                          { display_ad_tag: i } = r || {},
                          {
                            placement: s,
                            entrance: c,
                            view_session_id: l,
                            page_type: d,
                            page_section: u,
                          } = null != a ? a : {};
                        let p = {};
                        const _ =
                          (null == n
                            ? void 0
                            : n.adsTrackingData.recommendParams) ||
                          (null == n ? void 0 : n.context);
                        _ &&
                          (p = Hl(
                            (0, y.Z)({}, r, {
                              abtest_sign: null == r ? void 0 : r.abtest_sign,
                              target_type: "item",
                              traffic_source: o,
                              display_ad_tag: i,
                            }),
                            _,
                            {
                              page_type: d,
                              page_section: u,
                              placement: s,
                              entrance: c,
                              view_session_id: l,
                            }
                          )),
                          e({ data: p });
                      };
                    })(t)
                  ),
                  e(
                    Nl((e) => "impression" === e.type, r),
                    (function (e) {
                      return ({ info: t }) => {
                        var n, r;
                        const { impressions: a } = t,
                          o =
                            null == (n = a[0]) || null == (n = n.targetData)
                              ? void 0
                              : n.adsTrackingData;
                        let i = {};
                        const s =
                            (null == o ? void 0 : o.recommendParams) ||
                            (null == (r = a[0]) || null == (r = r.targetData)
                              ? void 0
                              : r.context),
                          { page_type: c, page_section: l } =
                            null != o ? o : {};
                        s &&
                          (i = Ml(
                            a.map(({ targetData: e }) => {
                              var t, n, r, a, o, i, s, c, l;
                              const {
                                  item: d,
                                  traffic_source: u,
                                  display_ad_tag: p,
                                } = e,
                                { item_data: _, item_card_displayed_asset: m } =
                                  (null == d ? void 0 : d.item) || {};
                              return (0, y.Z)({}, (0, y.Z)({}, d, _, m), {
                                target_type: "item",
                                display_ad_tag: p ? 1 : 0,
                                traffic_source: u,
                                location:
                                  null !=
                                  (t =
                                    null != (n = e.index) ? n : e.item_location)
                                    ? t
                                    : e.listPosition,
                                abtest_sign:
                                  null == e ||
                                  null == (r = e.adsTrackingData) ||
                                  null == (r = r.item)
                                    ? void 0
                                    : r.abtest_sign,
                                adsid:
                                  null !=
                                  (a =
                                    null == e ||
                                    null == (o = e.adsTrackingData) ||
                                    null == (o = o.item)
                                      ? void 0
                                      : o.adsid)
                                    ? a
                                    : null == d || null == (i = d.ads_info)
                                    ? void 0
                                    : i.adsid,
                                deduction_info:
                                  null !=
                                  (s =
                                    null == e ||
                                    null == (c = e.adsTrackingData) ||
                                    null == (c = c.item)
                                      ? void 0
                                      : c.deduction_info)
                                    ? s
                                    : null == d || null == (l = d.ads_info)
                                    ? void 0
                                    : l.deduction_info,
                              });
                            }),
                            s,
                            {
                              page_type: c,
                              page_section: l,
                              placement: null == o ? void 0 : o.placement,
                              entrance: null == o ? void 0 : o.entrance,
                              view_session_id:
                                null == o ? void 0 : o.view_session_id,
                            }
                          )),
                          e({ data: i });
                      };
                    })(t)
                  ),
                  e(
                    Nl((e) => "click" === e.type, r),
                    (function (e) {
                      return ({ info: t }) => {
                        const { targetData: n } = t,
                          {
                            item: r,
                            adsTrackingData: a,
                            traffic_source: o,
                            display_ad_tag: i,
                          } = n,
                          { item_data: s, item_card_displayed_asset: c } =
                            (null == r ? void 0 : r.item) || {},
                          {
                            placement: l,
                            entrance: d,
                            view_session_id: u,
                            page_type: p,
                            page_section: _,
                          } = null != a ? a : {};
                        let m = {};
                        const f =
                          (null == n
                            ? void 0
                            : n.adsTrackingData.recommendParams) ||
                          (null == n ? void 0 : n.context);
                        var h, E, g, S, I, R, A, b, O;
                        f &&
                          (m = Hl(
                            (0, y.Z)({}, (0, y.Z)({}, r, s, c), {
                              location:
                                null !=
                                (h =
                                  null != (E = n.index) ? E : n.item_location)
                                  ? h
                                  : n.listPosition,
                              target_type: "item",
                              traffic_source: o,
                              display_ad_tag: i ? 1 : 0,
                              abtest_sign:
                                null == n ||
                                null == (g = n.adsTrackingData) ||
                                null == (g = g.item)
                                  ? void 0
                                  : g.abtest_sign,
                              adsid:
                                null !=
                                (S =
                                  null == n ||
                                  null == (I = n.adsTrackingData) ||
                                  null == (I = I.item)
                                    ? void 0
                                    : I.adsid)
                                  ? S
                                  : null == r || null == (R = r.ads_info)
                                  ? void 0
                                  : R.adsid,
                              deduction_info:
                                null !=
                                (A =
                                  null == n ||
                                  null == (b = n.adsTrackingData) ||
                                  null == (b = b.item)
                                    ? void 0
                                    : b.deduction_info)
                                  ? A
                                  : null == r || null == (O = r.ads_info)
                                  ? void 0
                                  : O.deduction_info,
                            }),
                            f,
                            {
                              page_type: p,
                              page_section: _,
                              placement: l,
                              entrance: d,
                              view_session_id: u,
                            }
                          )),
                          e({ data: m });
                      };
                    })(t)
                  );
                const a = Ll(
                  vl("HomePage.DAILY_DISCOVER.ItemCard"),
                  vl("PageDailyDiscover.ItemCard")
                );
                e(
                  Nl((e) => "impression" === e.type, a),
                  ({ info: e }) => {
                    var n;
                    const { impressions: r } = e,
                      a =
                        null == (n = r[0]) || null == (n = n.targetData)
                          ? void 0
                          : n.adsTrackingData;
                    let o = {};
                    a &&
                      (o = (0, Ol.m6)(
                        r.map(({ targetData: e }) =>
                          (0, y.Z)({}, e.item, { location: e.index })
                        ),
                        null,
                        {
                          placement: null == a ? void 0 : a.placement,
                          view_session_id:
                            null == a ? void 0 : a.view_session_id,
                        }
                      )),
                      t({ data: o });
                  }
                ),
                  e(
                    Nl(
                      Cl("v3"),
                      Tl("impression"),
                      wl("daily_discover"),
                      yl("item")
                    ),
                    ({ info: e }) => {
                      const { data: n } = e,
                        { adsTrackingData: r, item: a, viewed_objects: o } = n;
                      if (r) {
                        const { placement: e, view_session_id: n, item: i } = r,
                          s = (0, y.Z)({}, a, {
                            page_number: i.page_number || null,
                            location: o[0].location,
                          });
                        let c = (0, Ol.m6)([s], null, {
                          placement: e,
                          view_session_id: n,
                        });
                        (c = (0, y.Z)({}, c, {
                          items: c.items.map((e) =>
                            (0, y.Z)({}, e, {
                              traffic_source: o[0].traffic_source,
                            })
                          ),
                        })),
                          t({ data: c });
                      } else t({ data: {} });
                    }
                  ),
                  e(
                    Nl((e) => "click" === e.type, a),
                    ({ info: e }) => {
                      const { targetData: n } = e,
                        { placement: r, view_session_id: a } =
                          null == n ? void 0 : n.adsTrackingData,
                        o = (0, Ol.FU)(
                          (0, y.Z)({}, n.item, { location: n.index }),
                          null,
                          { placement: r, view_session_id: a }
                        );
                      t({ data: o });
                    }
                  ),
                  e(
                    Nl(Cl("v3"), Tl("click"), wl("daily_discover"), yl("item")),
                    ({ info: e }) => {
                      const { data: n } = e,
                        {
                          adsTrackingData: r,
                          location: a,
                          item: o,
                          traffic_source: i,
                        } = n || {};
                      if (r) {
                        const { placement: e, view_session_id: n } = r,
                          s = (0, y.Z)({}, o, { location: a });
                        let c = (0, Ol.FU)(s, null, {
                          placement: e,
                          view_session_id: n,
                        });
                        (c = (0, y.Z)({}, c, {
                          items: c.items.map((e) =>
                            (0, y.Z)({}, e, { traffic_source: i })
                          ),
                        })),
                          t({ data: c });
                      } else t({ data: {} });
                    }
                  );
              })(e, t),
                (function (e, t) {
                  const n = Ll(
                    vl("SearchPage.ItemCard"),
                    vl("SearchPage.product_card"),
                    vl("SearchPage.YouMayAlsoLike.ItemCard"),
                    vl("CategoryPage.CATEGORY.ItemCard"),
                    vl("CategoryPage.ItemCard"),
                    vl("L2CategoryPage.ItemCard"),
                    vl("L3CategoryPage.ItemCard"),
                    vl("CollectionPage.COLLECTION.ItemCard"),
                    vl("ShopPage.ShopTab.SHOP_PAGE_SHOP_TAB.ItemCard"),
                    vl("ShopPage.AllProductsTab.SHOP_PAGE_PRODUCT_TAB.ItemCard")
                  );
                  e(
                    Nl((e) => "impression" === e.type, n),
                    ({ info: e }) => {
                      var n;
                      const { impressions: r } = e,
                        a = (0, Zl.Z)(r, [0, "targetData"], {}),
                        {
                          json_data: o,
                          placement: i,
                          view_session_id: s,
                          page_type: c,
                          page_section: l,
                        } = null != (n = null == a ? void 0 : a.adsTrackingData)
                          ? n
                          : {},
                        {
                          searchParams: d = {},
                          scenario: u,
                          search_entrance: p,
                          global_session_id: _,
                          search_session_id: m,
                          entrance: f,
                        } = a,
                        h = (function (e, t, n, r = {}) {
                          const a = t ? Vl(t, r) : {};
                          return {
                            operation: Ol.Tl.IMPRESSION,
                            json_data: r.json_data,
                            placement: r.placement,
                            view_session_id: r.view_session_id,
                            entrance: r.entrance,
                            page_type: r.page_type,
                            page_section: r.page_section,
                            search_props: r.search_props,
                            items: e
                              .filter((e) => !!e)
                              .map((e) =>
                                (0, y.Z)(
                                  {},
                                  (0, Ol.Jw)(e, n, a, r, e.productCard),
                                  {
                                    traffic_source: e.traffic_source,
                                    display_ad_tag: e.display_ad_tag,
                                    target_type: e.target_type,
                                  }
                                )
                              ),
                          };
                        })(
                          r.map(({ targetData: e }) => {
                            const {
                                item: t,
                                propsItem: n,
                                traffic_source: r,
                              } = e,
                              a = null != t ? t : n,
                              { display_ad_tag: o } = a || {};
                            return (0, y.Z)({}, a, {
                              productCard: ad(
                                a,
                                e.itemCardManifest,
                                {
                                  isOfficialMallPath: e.isOfficialMallSearch,
                                  isCcInstallmentPaymentWhitelist:
                                    e.isCcInstallmentPaymentWhitelist,
                                  isNonCcInstallmentPaymentWhitelist:
                                    e.isNonCcInstallmentPaymentWhitelist,
                                },
                                e
                              ),
                              target_type: "item",
                              traffic_source: r,
                              display_ad_tag: o,
                            });
                          }),
                          d,
                          null,
                          {
                            json_data: o,
                            placement: i,
                            view_session_id: s,
                            page_type: c,
                            page_section: l,
                            search_props: {
                              sort_by:
                                (null == d ? void 0 : d.sortBy) || "relevancy",
                              global_session_id: _,
                              search_session_id: m,
                              scenario: u,
                              search_entrance: null == p ? void 0 : p.entrance,
                              search_mid: null == p ? void 0 : p.mid,
                            },
                            entrance: f,
                          }
                        );
                      t({ data: h });
                    }
                  ),
                    e(
                      Nl((e) => "click" === e.type, n),
                      ({ info: e }) => {
                        var n;
                        const { targetData: r } = e,
                          {
                            json_data: a,
                            placement: o,
                            view_session_id: i,
                            page_type: s,
                            page_section: c,
                          } = (0, Zl.Z)(r, ["adsTrackingData"], {}),
                          {
                            searchParams: l = {},
                            scenario: d,
                            search_entrance: u,
                            traffic_source: p,
                            global_session_id: _,
                            search_session_id: m,
                            entrance: f,
                          } = r,
                          h =
                            null != (n = null == r ? void 0 : r.item)
                              ? n
                              : null == r
                              ? void 0
                              : r.propsItem,
                          { display_ad_tag: E } = h || {},
                          g = (function (e, t, n, r = {}) {
                            const a = t ? Vl(t, r) : {};
                            return {
                              operation: Ol.Tl.CLICK,
                              json_data: r.json_data,
                              placement: r.placement,
                              view_session_id: r.view_session_id,
                              entrance: r.entrance,
                              page_type: r.page_type,
                              page_section: r.page_section,
                              search_props: r.search_props,
                              items: [
                                (0, y.Z)(
                                  {},
                                  (0, Ol.Jw)(e, n, a, r, e.productCard),
                                  {
                                    traffic_source: e.traffic_source,
                                    display_ad_tag: e.display_ad_tag,
                                    target_type: e.target_type,
                                  }
                                ),
                              ],
                            };
                          })(
                            (0, y.Z)({}, h, {
                              productCard: ad(
                                h,
                                r.itemCardManifest,
                                {
                                  isOfficialMallPath: r.isOfficialMallSearch,
                                  isCcInstallmentPaymentWhitelist:
                                    r.isCcInstallmentPaymentWhitelist,
                                  isNonCcInstallmentPaymentWhitelist:
                                    r.isNonCcInstallmentPaymentWhitelist,
                                },
                                r
                              ),
                              target_type: "item",
                              traffic_source: p,
                              display_ad_tag: E,
                            }),
                            l,
                            null,
                            {
                              json_data: a,
                              placement: o,
                              view_session_id: i,
                              page_type: s,
                              page_section: c,
                              search_props: {
                                sort_by:
                                  (null == l ? void 0 : l.sortBy) ||
                                  "relevancy",
                                global_session_id: _,
                                search_session_id: m,
                                scenario: d,
                                search_entrance:
                                  null == u ? void 0 : u.entrance,
                                search_mid: null == u ? void 0 : u.mid,
                              },
                              entrance: f,
                            }
                          );
                        t({ data: g });
                      }
                    );
                  const r = Ll(vl("SearchPage.SearchUser")),
                    a = Ll(
                      vl("SearchPage.SearchUser"),
                      vl("SearchPage.SearchBrandVoucher"),
                      vl("SearchPage.SearchBrandBanner")
                    );
                  e(
                    Nl((e) => "impression" === e.type, r),
                    ({ info: e }) => {
                      const { impressions: n } = e,
                        r = n[0].targetData,
                        {
                          searchParams: a,
                          userInfo: o,
                          scenario: i,
                          search_entrance: s,
                          search_session_id: c,
                          global_session_id: l,
                          view_session_id: d,
                          json_data: u,
                          target_type: p,
                        } = r,
                        _ = (function (e, t, n = {}) {
                          const r = t ? Vl(t) : {};
                          return {
                            entrance: n.entrance,
                            search_props: n.search_props,
                            page_type: n.page_type,
                            page_section: n.page_section,
                            operation: Ol.Tl.SHOP_IMPRESSION,
                            json_data: n.json_data,
                            placement: n.placement,
                            view_session_id: n.view_session_id,
                            packageVersion: n.packageVersion,
                            appVersion: n.appVersion,
                            shops: e
                              .filter((e) => !!e)
                              .map((e) =>
                                (0, y.Z)({}, Wl(e, r), {
                                  target_type: e.target_type,
                                })
                              ),
                          };
                        })(
                          n.map(
                            ({
                              targetData: { userInfo: e, renderedItems: t },
                            }) => (0, y.Z)({}, e, { items: t, target_type: p })
                          ),
                          a,
                          {
                            placement: Ol.E_.SHOP_SEARCH,
                            algorithm: o ? o.algorithm : void 0,
                            page_type: "search",
                            entrance: 5,
                            view_session_id: d,
                            json_data: u,
                            search_props: {
                              sort_by: null == a ? void 0 : a.sortBy,
                              global_session_id: l,
                              search_session_id: c,
                              scenario: i,
                              search_entrance: null == s ? void 0 : s.entrance,
                              search_mid: null == s ? void 0 : s.mid,
                            },
                          }
                        );
                      t({ data: _ });
                    }
                  ),
                    e(
                      Nl((e) => "click" === e.type, a),
                      ({ info: e }) => {
                        const { targetData: n } = e,
                          {
                            searchParams: r,
                            userInfo: a,
                            clickItemInfo: o,
                            view_session_id: i,
                            scenario: s,
                            target_type: c,
                            search_entrance: l,
                            search_session_id: d,
                            global_session_id: u,
                            json_data: p,
                            clickArea: _,
                          } = n,
                          m = Bl((0, y.Z)({}, a, { target_type: c }), r, {
                            placement: Ol.E_.SHOP_SEARCH,
                            algorithm: a ? a.algorithm : void 0,
                            clickArea: _ || 0,
                            clickItemInfo: o,
                            view_session_id: i,
                            page_type: "search",
                            entrance: 5,
                            json_data: p,
                            search_props: {
                              sort_by: null == r ? void 0 : r.sortBy,
                              global_session_id: u,
                              search_session_id: d,
                              scenario: s,
                              search_entrance: null == l ? void 0 : l.entrance,
                              search_mid: null == l ? void 0 : l.mid,
                            },
                          });
                        t({ data: m });
                      }
                    );
                  const o = Ll(vl("SearchPage.SearchShopSection.ItemCard"));
                  e(
                    Nl((e) => "click" === e.type, o),
                    ({ info: e }) => {
                      const { targetData: n } = e,
                        {
                          searchParams: r,
                          view_session_id: a,
                          scenario: o,
                          search_entrance: i,
                          search_session_id: s,
                          global_session_id: c,
                          json_data: l,
                          clickArea: d,
                          adsTrackingData: u,
                        } = n,
                        {
                          clickItemInfo: p,
                          adsTrackinguserInfo: _,
                          target_type: m,
                          adsClickedItem: f,
                        } = u,
                        h = Bl(
                          (0, y.Z)({}, _, { target_type: m, items: [f] }),
                          r,
                          {
                            placement: Ol.E_.SHOP_SEARCH,
                            algorithm: _ ? _.algorithm : void 0,
                            clickArea: d || 0,
                            clickItemInfo: p,
                            view_session_id: a,
                            page_type: "search",
                            entrance: 5,
                            json_data: l,
                            search_props: {
                              sort_by: null == r ? void 0 : r.sortBy,
                              global_session_id: c,
                              search_session_id: s,
                              scenario: o,
                              search_entrance: null == i ? void 0 : i.entrance,
                              search_mid: null == i ? void 0 : i.mid,
                            },
                          }
                        );
                      t({ data: h });
                    }
                  );
                })(e, t),
                (function (e, t) {
                  const n = Ll(
                    (e) => !!e.info && "addToCart" === e.info.action
                  );
                  e(
                    Nl((e) => "action" === e.type, n),
                    ({
                      info: {
                        data: {
                          itemId: e,
                          shopId: n,
                          modelId: r,
                          quantity: a,
                          price: o,
                          adsTrackingData: i,
                        },
                      },
                    }) => {
                      const s = (0, Ol.Xq)(
                        { shopid: n, itemid: e },
                        r,
                        a,
                        o,
                        i
                      );
                      t({ data: s });
                    }
                  );
                })(e, t),
                (function (e, t) {
                  const n = Ll(
                    vl(
                      "ShopPage.ShopTab.SHOP_PAGE_CATEGORIES_HIGHLIGHT.ItemCard"
                    ),
                    vl("ShopPage.ShopTab.FlashSaleSession.ItemCard"),
                    vl("ShopPage.ShopTab.FlashSaleSession.HorizontalItemCard"),
                    vl("ShopPage.ShopCampaign.FlashSaleSession.ItemCard"),
                    vl(
                      "ShopPage.ShopCampaign.FlashSaleSession.HorizontalItemCard"
                    ),
                    vl("ShopPage.ShopCampaign.FeaturedProducts.ItemCard"),
                    vl("ShopPage.ShopCampaign.JustForYou.ItemCard"),
                    vl(
                      "ShopPage.ShopFlashSale.FlashSaleSession.HorizontalItemCard"
                    ),
                    vl("ShopPage.ShopFlashSale.ItemCard"),
                    vl(
                      "ShopPage.ShopTab.ShopDecoration.HighlightProducts.ItemCard"
                    ),
                    vl("ShopPage.ShopTab.ShopDecoration.Carousel.ItemCard")
                  );
                  e(
                    Nl((e) => "impression" === e.type, n),
                    ({ info: e }) => {
                      const { impressions: n } = e,
                        r = (0, Zl.Z)(
                          n,
                          [0, "targetData", "item", "shopid"],
                          void 0
                        ),
                        a = (0, Zl.Z)(n, [0, "targetData", "shopid"]) || r,
                        o = (0, Ol.cF)(
                          n.map(({ targetData: e }) => e.item),
                          { shop: a },
                          null,
                          {}
                        );
                      t({ data: o });
                    }
                  ),
                    e(
                      Nl((e) => "click" === e.type, n),
                      ({ info: e }) => {
                        const { targetData: n } = e,
                          r = n.item.shopid,
                          a = (0, Ol.DS)(n.item, { shop: r }, null, {});
                        t({ data: a });
                      }
                    );
                })(e, t);
            }
            var cd = n(27106);
            const ld = {
              [cd.E.Analytical]: "consent_analytical",
              [cd.E.Functional]: "consent_functional",
              [cd.E.Advertising]: "consent_advertising",
              [cd.E.ThirdPartyGoogle]: "consent_thirdparty_google",
              [cd.E.ThirdPartyTiktok]: "consent_thirdparty_tiktok",
            };
            let dd = !0;
            function ud(e, t) {
              setTimeout(() => {
                const n = "rweb",
                  r = (function () {
                    const e = navigator
                      ? navigator.userAgent || navigator.vendor || window.opera
                      : "";
                    return /windows phone/i.test(e)
                      ? "rweb_others"
                      : /android/i.test(e)
                      ? "rweb_android"
                      : /iPad|iPhone|iPod/.test(e) && !window.MSStream
                      ? "rweb_ios"
                      : "rweb_others";
                  })(),
                  a =
                    (window &&
                      window.navigator &&
                      window.navigator.userAgent) ||
                    "";
                var o, i;
                (o = __LOCALE__),
                  (i = {
                    platform: Fl(),
                    getCookies: kl.$1,
                    initSubscribe: sd.bind(null, e),
                  }),
                  new Pl("live", o, i),
                  je.Tracking.createBITracker("live", __LOCALE__, {
                    subscribe: e,
                    getCookies: kl.$1,
                    platform: r,
                    source: n,
                    sendEventByInterval: !0,
                    routes: t,
                  }),
                  (function (e, t, n) {
                    new Ul("live", t, n);
                  })(0, __LOCALE__, {
                    subscribe: e,
                    getCookies: kl.$1,
                    meta: { platform: r, ua: a, source: n },
                  }),
                  je.Vj.isGDPRRequired() &&
                    je.Vj.subscribeToCookiePreferenceChange((e) => {
                      const t = {};
                      if (!e.need_consent) {
                        for (const n of e.preferences || []) {
                          if (n.status !== cd.O.Accepted) continue;
                          const e = ld[n.category];
                          e && (t[e] = "granted");
                        }
                        !(function (e) {
                          dd &&
                            ((function (e) {
                              var t;
                              const n =
                                null == (t = window.dataLayer) ||
                                null == t.findIndex
                                  ? void 0
                                  : t.findIndex(
                                      (e) =>
                                        "object" == typeof e &&
                                        "gtm.js" === e.event
                                    );
                              !(function () {
                                var e;
                                void 0 !== n &&
                                  (null == (e = window.dataLayer) ||
                                    null == e.splice ||
                                    e.splice(n + 1, 0, arguments));
                              })("consent", "update", e);
                            })(e),
                            (dd = !1)),
                            (function () {
                              var e;
                              null == (e = window.dataLayer) ||
                                null == e.push ||
                                e.push(arguments);
                            })("consent", "update", e),
                            null == window.__shopeeLoadGTM ||
                              window.__shopeeLoadGTM();
                        })(t);
                      }
                    });
              }, 0);
            }
            var pd = n(53845),
              _d = n(35782),
              md = n(90614),
              fd = n(68854);
            const hd = m.Theme.VARIABLES;
            var Ed = n(94046),
              gd = n(59966),
              Sd = n(87099);
            n(71884);
            const Id = a.lazy(() => n.e(6929).then(n.bind(n, 48893))),
              Rd = a.lazy(() => n.e(358).then(n.bind(n, 86615))),
              Ad = (0, fd.Z)({
                placeholder: a.createElement("div", null),
                loader: () =>
                  Promise.all([n.e(1651), n.e(2825)]).then(n.bind(n, 20135)),
              }),
              bd = a.lazy(() =>
                Promise.all([n.e(684), n.e(9696), n.e(160)]).then(
                  n.bind(n, 89423)
                )
              ),
              Od = a.lazy(() => n.e(4612).then(n.bind(n, 69013)));
            a.Fragment;
            class Pd extends a.Component {
              constructor(e) {
                super(e), ud(je.Tracking.subscribe, this.props.getRootRoutes());
              }
              componentDidMount() {
                (0, I.markPerfMetric)("appDidMount"),
                  (0, pd.c)(pd.L.AccountInfoSynchronousFetchClientRw, !1) ||
                    this.props.fetchAccountInfo({
                      skipAddress: !1,
                      forceRefetch: !0,
                      isFromAppRoot: !0,
                    }),
                  this.props.fetchAccountPaymentInfo(),
                  je.FetchUtils.initSecuritySdk({
                    history: this.props.history,
                  }),
                  this.onPropsChange();
              }
              onPropsChange(e) {
                try {
                  (null == e ? void 0 : e.accountStatus) !==
                    this.props.accountStatus &&
                    this.props.accountStatus === Sd.d.LOGGED_IN &&
                    je.Tracking.setUserId(this.props.accountInfo.userId);
                } catch (n) {
                  var t;
                  (null == (t = window) ? void 0 : t.Sentry) &&
                    window.Sentry.captureException(n);
                }
              }
              componentDidUpdate(e) {
                this.onPropsChange(e);
              }
              shouldOptOutFromA2HSPopup() {
                const e = ((0, fl.f)(
                  this.props.getRootRoutes(),
                  window.location.pathname
                ) || [])[0];
                return (
                  !(e && e.route && e.route.params) || e.route.params.skipA2HS
                );
              }
              render() {
                const { theme: e = gl.Q.DEFAULT, getRootRoutes: t } =
                    this.props,
                  n = t(),
                  r = (0, fl.H)(n);
                return a.createElement(
                  hl.IK,
                  { useWindow: !0 },
                  a.createElement(
                    b.TrackingProvider,
                    { onTrack: je.Tracking.onTrack },
                    a.createElement(
                      "div",
                      { className: "app-container" },
                      a.createElement(bl, { theme: e }),
                      (0, A.isFeatureEnabled)(
                        "da3374fc91d9c2a2b8e91b094101f59d991c1b15b12d174e10b2cc9d55531514"
                      ) && a.createElement(Ad, { routes: n }),
                      r,
                      a.createElement(
                        a.Suspense,
                        { fallback: a.createElement("div", null) },
                        !!(0, A.isFeatureEnabled)(
                          "424ef522dc469680886ab084afde7abab125684e8319a4bd4701b3d9453d8409"
                        ) &&
                          !(0, z.Xw)() &&
                          a.createElement(Rd, null)
                      ),
                      a.createElement(
                        a.Suspense,
                        { fallback: a.createElement("div", null) },
                        !1,
                        !(0, ml.xT)() &&
                          (0, A.isFeatureEnabled)(
                            "a75ffb42518d4cf400ee38a94a6ad3300759e7e53b799229674a97c872a7cfc4"
                          ) &&
                          a.createElement(
                            a.Suspense,
                            { fallback: a.createElement("div", null) },
                            a.createElement(Id, { getRoutes: t })
                          ),
                        a.createElement(bd, null),
                        !this.shouldOptOutFromA2HSPopup() &&
                          a.createElement(Od, { onTrack: je.Tracking.onTrack })
                      ),
                      null
                    )
                  )
                );
              }
            }
            const Cd = (0, _d.Pf)(
              ((yd = (0, gd.$)()(
                (0, Ed.u)()(
                  (0, p.withRouter)(
                    ((Td = Pd),
                    function (e) {
                      return a.createElement(Td, e);
                    })
                  )
                )
              )),
              (0, c.connect)(function (e) {
                return { theme: e.theme };
              })((e) => {
                const { theme: t } = e;
                return (
                  a.useEffect(() => {
                    !(function ({ theme: e }) {
                      if (!window.cssVars) return;
                      const t = hd[e];
                      window.cssVars({ variables: t, watch: !0 });
                    })({ theme: t });
                  }, [t]),
                  a.createElement(yd, e)
                );
              })),
              md.Z,
              { errorLevel: "fatal" }
            );
            var Td, yd;
            if (window && window.__DECKER_HOOK__) {
              const e = window.__DECKER_HOOK__;
              e.on("USER_ID_GET", () => {
                e.sendToDevtools("USER_ID_GET_RESPONSE", (0, kl.ej)("SPC_U"));
              }),
                e.sendToDevtools("APP_UPDATED"),
                e.on("GET_GIT_SHA", () => {
                  e.sendToDevtools(
                    "GET_GIT_SHA_RESPONSE",
                    "e435e9cef1d4f1a03a5611bc131a55ededc2f3e1"
                  ),
                    e.sendToPopup(
                      "GET_GIT_SHA_RESPONSE",
                      "e435e9cef1d4f1a03a5611bc131a55ededc2f3e1"
                    );
                }),
                e.on("GET_VERSION", () => {
                  e.sendToDevtools(
                    "GET_VERSION_RESPONSE",
                    "sw-WEBFE-MKP-2025.03.v1-1"
                  ),
                    e.sendToPopup(
                      "GET_VERSION_RESPONSE",
                      "sw-WEBFE-MKP-2025.03.v1-1"
                    );
                });
            }
            const { t: vd, withI18nCollections: wd, tNode: Nd } = je.I18n,
              Ld = je.I18n.default;
            var Dd = n(20937);
            const Ud = [
                /TypeError: Load failed/i,
                /TypeError: Script(.+)load failed/i,
                /SecurityError: Script load failed/i,
                /Network\s?Error/i,
                /Network request failed/i,
                /Load timeout for modules/i,
                /The network connection was lost./i,
                /The request timed out./i,
                /Request timeout/i,
                /TimeoutError/i,
                /Service Worker script execution timed out/i,
                /TypeError: đã huỷ/i,
                /TypeError: ถูกยกเลิก/i,
                /TypeError: 已取消/i,
                /Failed to fetch/i,
                /Failed to load script /i,
                /Failed to register a ServiceWorker/i,
                /Loading chunk (\d+) failed/i,
                /Loading CSS chunk (\d+) failed/i,
                /Blocked a frame with origin/i,
                /from accessing a cross-origin frame. Protocols, domains, and ports must match/i,
                /socket reconnect error/i,
                /socket disconnect/i,
                /(pcmall|mobilemall)_root_assets_sw\.js load failed/i,
                /<unknown>/i,
                /MutationObserver/i,
                /QuotaExceededError/i,
                /UnknownError/i,
                /ResizeObserver loop (limit exceeded|completed)/i,
                /InvalidStateError/i,
                /unhandledrejection/i,
                /AbortError/i,
                /Request aborted/i,
                /The operation was aborted due to shutdown/i,
                /out of memory/i,
                /ConstraintError/i,
                /SyntaxError/i,
                /IDBDatabase/i,
                /Non-Error promise rejection/i,
                /Failed to execute '(insertBefore|removeChild)' on 'Node'/i,
                /Fetch SDK from config failed/i,
                /Event `(Event|ProgressEvent|XMLHttpRequestProgressEvent)` \(type=(abort|timeout)\) captured as promise rejection/i,
                /^TransactionInactiveError:/i,
                /^SyntaxError:/i,
                /processRandomSelector/i,
                /__gCrWeb/i,
                /zaloJSV2/i,
                /vid_mate_check/i,
                /onScreenResumed/i,
                /onScreenPaused/i,
                /WeixinJSBridge/i,
                /NS_ERROR_NOT_INITIALIZED/i,
                /NS_ERROR_FILE_NOT_FOUND/i,
                /NS_BINDING_ABORTED/i,
                /mraid/i,
                /Unauthoried/i,
                /MoatMAK/i,
                /jQuery/i,
                /userscripts/i,
                /loaderCB01579/i,
                /NodeFilter/i,
                /__firefox__/i,
                /pktAnnotationHighlighter/i,
                /AFMA_ReceiveMessage/i,
                /goldlog/i,
                /ToutiaoJSBridge/i,
                /instantSearchSDKJSBridgeClearHighlight/i,
                /MutationObserver/i,
                /<unknown>/i,
                /Failed writing data to the file system/i,
                /Error: Script error for "https:\/\/deo.shopeemobile.com\/shopee\/shopee-trackingsdk-live-sg/i,
                /google_tag_manager/i,
                /gtm.js/i,
                /getElementsByClassName('qb-b')/i,
                /getElementsByClassName('dt')/i,
                /getElementsByTagName('video')/i,
                /document.head.querySelector/i,
                /document.querySelector('title').textContent/i,
                /target.className.indexOf/i,
                /Can't find variable: \$/i,
                /Can't find variable: native/i,
                /WebViewJavascriptBridge/i,
                /window\.nativebridge/i,
                /has no method 'processJSON'/i,
                /vars.hotjar.com/i,
                /FirebaseError/i,
              ],
              kd = [/u.c.b.r.o.w.s.e.r/i];
            var Fd = n(15013);
            const Md =
                /.+\/shopee-(pcmall|mobilemall|lite)-.+\/(.+?)\/(.+?)\.(.+?)(\.legacy)?\.js$/,
              Hd = /^SAP|web_enhance_sap/,
              Zd =
                /.+\/modules-federation\/(.+?)\/0\/shopee__(.+?)(\/(pc|rw))?\/(.+?)(\.legacy)?\.js$/;
            let xd = (function (e) {
              return (
                (e[(e.MICRO_APP = 1)] = "MICRO_APP"),
                (e[(e.HOST_APP = 2)] = "HOST_APP"),
                (e[(e.PROJECT = 3)] = "PROJECT"),
                e
              );
            })({});
            function Gd(e) {
              const t = e.js_error_message;
              if (t && Hd.test(t))
                return { type: xd.PROJECT, name: "sap-web-sdk" };
              if (
                e.js_data_field &&
                "string" == typeof e.js_data_field.sentryProjectSlug &&
                e.js_data_field.sentryProjectSlug
              )
                return {
                  type: xd.PROJECT,
                  name: e.js_data_field.sentryProjectSlug,
                };
              const n =
                e.js_data_field &&
                "string" == typeof e.js_data_field.moduleName &&
                "string" == typeof e.js_data_field.projectName &&
                e.js_data_field.moduleName &&
                e.js_data_field.projectName
                  ? {
                      moduleName: e.js_data_field.moduleName,
                      projectName: e.js_data_field.projectName,
                    }
                  : null;
              if (n)
                return {
                  type: xd.MICRO_APP,
                  projectName: n.projectName,
                  moduleName: n.moduleName,
                };
              const r = (0, Fd.Dt)(e.js_error_stack || "");
              try {
                for (let e = r.length - 1; e >= 0; e--) {
                  const t = r[e].filename;
                  if (!t) continue;
                  const n = Bd(t) || Wd(t) || Vd(t);
                  if (n) return n;
                }
              } catch (a) {}
              return null;
            }
            function Bd(e) {
              const t = e.match(Md);
              if (t && t[1] && t[2])
                return "string" == typeof t[3] && t[3].includes("sap-hook")
                  ? { type: xd.PROJECT, name: "sap-web-sdk" }
                  : "assets" === t[2]
                  ? { type: xd.HOST_APP }
                  : { type: xd.MICRO_APP, projectName: t[1], moduleName: t[2] };
            }
            function Wd(e) {
              const t = e.match(Zd);
              if (t)
                return t[2].match(/(pbc|pbs)-/)
                  ? {
                      type: xd.PROJECT,
                      name: "shopee-promotion-page-builder",
                      customTags: {
                        pbPackageName: t[2],
                        pbPackageVersion: t[5],
                      },
                    }
                  : void 0;
            }
            function Vd(e) {
              if (e.includes("/chateasy/"))
                return { type: xd.PROJECT, name: "shopee-mini-chat" };
            }
            var jd = n(26298),
              Yd = n(65085);
            function $d(e) {
              if (e) {
                if ("string" == typeof e) return { level: e };
                if ("function" != typeof e && !("addBreadcrumb" in e))
                  return { level: e.level, data_field: e.tags };
              }
            }
            function Kd() {}
            const { ENV: qd, LOCALE: Xd } = je.config;
            var Qd = n(1722),
              Jd = n(40469);
            var zd = n(67673),
              eu = n(41579),
              tu = n(14364),
              nu = (n(63882), n(74088)),
              ru = n(60790),
              au = n(62241),
              ou = n(53463);
            const iu = "mobilemall-productdetailspage",
              su = async () =>
                (() => {
                  var e;
                  return (
                    (0, A.isFeatureEnabled)(ou._x) &&
                    !(
                      null != (e = window) &&
                      null != (e = e.navigator) &&
                      null != (e = e.connection) &&
                      e.saveData
                    )
                  );
                })()
                  ? P.ZP.getModuleImmediate(iu) || (await P.ZP.getModule(iu))
                  : null;
            function cu() {
              return new Promise((e) => {
                setTimeout(e, 0);
              });
            }
            async function lu(e, t, ...n) {
              const r = new I.PerformanceTrace(t);
              r.start();
              const a = await e(...n);
              return r.stop(), a;
            }
            const {
              USER_STANDARD_LANGUAGE: du,
              ENV: uu,
              LOCALE: pu,
            } = je.config;
            (0, I.markPerfMetric)("clientExecution");
            const _u = document.getElementById("app");
            async function mu(e) {
              (0, I.markPerfMetric)("appStartRender"),
                await Promise.all([
                  (0, Ve.y7)(e()),
                  lu(P.se, "waitHydrationReady"),
                ]);
              const t = document.querySelector(".app-shell");
              var n;
              t &&
                ("function" == typeof t.remove
                  ? t.remove()
                  : t.parentNode &&
                    "function" == typeof t.parentNode.removeChild &&
                    t.parentNode.removeChild(t)),
                await cu(),
                (n = a.createElement(
                  a.StrictMode,
                  null,
                  a.createElement(
                    c.Provider,
                    { store: xe },
                    a.createElement(
                      M.xI,
                      { history: m.history },
                      a.createElement(
                        _.HelmetProvider,
                        null,
                        a.createElement(
                          f.InjectReducerContext.Provider,
                          { value: { injectAsyncReducer: Ge } },
                          a.createElement(
                            nu.f6,
                            { theme: ru.rX, language: du },
                            a.createElement(
                              je.ZM.HostReactQueryContext.Provider,
                              { value: je.ZM.hostTanstackQueryClient },
                              a.createElement(
                                au.VW,
                                { zIndex: 1e4 },
                                a.createElement(
                                  O.u,
                                  null,
                                  a.createElement(Cd, { getRootRoutes: e })
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )),
                0 === _u.children.length
                  ? We.createRoot(_u).render(n)
                  : We.hydrateRoot(_u, n),
                window.__STORE__ && delete window.__STORE__;
            }
            async function fu() {
              if ("serviceWorker" in navigator)
                if ((0, ml.xT)() || (!(0, ml.Dt)() && !(0, ml.gn)()))
                  try {
                    await (async () => {
                      if (navigator.serviceWorker)
                        if (navigator.serviceWorker.getRegistrations) {
                          const e =
                            await navigator.serviceWorker.getRegistrations();
                          await Promise.all(e.map((e) => e.unregister()));
                        } else if (navigator.serviceWorker.getRegistration) {
                          const e =
                            await navigator.serviceWorker.getRegistration();
                          e && (await e.unregister());
                        }
                    })();
                  } catch (t) {}
                else {
                  try {
                    (await self.caches.open("shopee_sw_shared_info")).put(
                      "/info",
                      new Response(
                        JSON.stringify({
                          ENV: uu,
                          LOCALE: pu,
                          SPC_F: (0, kl.ej)("SPC_F") || "",
                          SPC_U: (0, kl.ej)("SPC_U") || "",
                          SPC_PFB: (0, kl.ej)("_SPC_PFB") || "",
                        })
                      )
                    );
                  } catch (t) {
                    window.Sentry &&
                      window.Sentry.addBreadcrumb({
                        category: "sw",
                        level: "warning",
                        message: "Fail to pass info to cache",
                      });
                  }
                  try {
                    navigator.serviceWorker.register(
                      "/mobilemall_root_assets_sw.js"
                    );
                  } catch (t) {
                    var e;
                    null == (e = window.Sentry) ||
                      e.addBreadcrumb({
                        category: "sw",
                        level: "warning",
                        message: "Service Worker Registration failed",
                      });
                  }
                }
            }
            async function hu() {
              await (0, A.fetchFeatureToggles)(),
                await (0, A.initDeckerIfApplicable)();
            }
            async function Eu() {
              ((e) => {
                const t = (() => {
                  if ("undefined" == typeof document);
                  else {
                    const t = document.querySelector(`script[type="${De.MR}"]`);
                    if (t)
                      try {
                        return JSON.parse(t.textContent || "");
                      } catch (e) {}
                  }
                })();
                null != e && e.dispatch && t && e.dispatch((0, Jd.ZC)(t));
              })(xe);
              const e = (0, Qd.S)(xe ? xe.getState() : {}),
                t = (0, zd.tk)(e),
                { accountInfoProgress: n } = t,
                r =
                  !!document.querySelector(`script[type="${De.MR}"]`) &&
                  (0, eu.GN)() &&
                  n !== J.ZP.OK;
              if (
                r &&
                (0, pd.c)(pd.L.AccountReduxInvalidServerStateReportRw, !1)
              ) {
                var a;
                const t = `[Invalid account redux state from server]: ${JSON.stringify(
                  e
                )}`;
                (0, tu.Z)(t),
                  (null == (a = window) ? void 0 : a.Sentry) &&
                    window.Sentry.captureException(new Error(t));
              }
              (0, pd.c)(pd.L.AccountInfoSynchronousFetchClientRw, !1) &&
                (null == xe ? void 0 : xe.dispatch) &&
                (await xe.dispatch(
                  (0, Jd.M9)({ forceRefetch: r, isFromAppRoot: !0 })
                ));
            }
            let gu = Date.now();
            const Su = () => {
              const { interval: e } =
                globalThis.__ASSETS__.SECURITY_REFRESH_INTERVAL || {};
              if (!e) return;
              const t = Date.now(),
                n = Math.round((t - gu) / 1e3 / 60);
              "visible" === document.visibilityState &&
                (je.Tracking.onTrack({
                  type: "v3",
                  timestamp: Date.now(),
                  info: {
                    operation: "action_refresh_page_rate",
                    data: { duration: n },
                  },
                }),
                e > 0 && n >= e && window.location.reload()),
                (gu = t);
            };
            async function Iu() {
              const { initSap: e } = await n.e(2554).then(n.bind(n, 62554));
              e();
            }
            !(async function () {
              var e;
              await cu();
              const { getRootRoutes: t, clearRootRoutesCache: r } = (function (
                  e
                ) {
                  const t = (0, it.AW)(
                      ("undefined" != typeof window &&
                        window.location &&
                        window.location.search) ||
                        ""
                    ),
                    r = !e && !!t.__mobile__,
                    a = !e && !!t.tried_rn;
                  let o = null;
                  return {
                    getRootRoutes: function () {
                      return (
                        o ||
                        ((e = (function () {
                          _l = [
                            Cn ||
                              (Cn = {
                                path: Ke.zvK,
                                [zc]: "RouteUnifiedLink",
                                [el]:
                                  Pn ||
                                  (Pn = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([n.e(3727), n.e(4784)]).then(
                                        n.bind(n, 31672)
                                      ),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "RouteUnifiedLink",
                                  forShopeeApp: "always",
                                },
                              }),
                            Tn ||
                              (Tn = {
                                path: "/rw",
                                [zc]: "RouteRedirectReactWeb",
                                [el]: rt,
                                [nl]: {
                                  [tl]: "RouteRedirectReactWeb",
                                  forShopeeApp: "always",
                                },
                              }),
                            vn ||
                              (vn = {
                                path: Ke.SM7,
                                [zc]: "RouteWebToApp",
                                [el]:
                                  yn ||
                                  (yn = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([n.e(7894), n.e(9938)]).then(
                                        n.bind(n, 91702)
                                      ),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "RouteWebToApp",
                                  forShopeeApp: "always",
                                },
                              }),
                            wn ||
                              (wn = {
                                path: [Ke.NIA, Ke.GpB],
                                exact: !0,
                                [dl]: ["mobilemall-productdetailspage"],
                                [zc]: "ProductDetailsPage",
                                [el]: ot,
                                [nl]: {
                                  [tl]: "ProductDetailsPage",
                                  applink: !0,
                                },
                              }),
                            Ln ||
                              (Ln = {
                                path: ["/shop/:shopid/item/:itemid"],
                                exact: !0,
                                [zc]: "LegacyProductDetailsPageRedirect",
                                [el]:
                                  Nn ||
                                  (Nn = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.resolve().then(n.bind(n, 54554)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "LegacyProductDetailsPageRedirect",
                                  forShopeeApp: "always",
                                },
                              }),
                            Un ||
                              (Un = {
                                path: Ke.Gqe,
                                exact: !0,
                                [zc]: "RouteRedirectToEventPage",
                                [el]:
                                  Dn ||
                                  (Dn = (0, Ve.Ds)({
                                    [rl]: () => n.e(4047).then(n.bind(n, 3370)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteRedirectToEventPage" },
                              }),
                            Fn ||
                              (Fn = {
                                path: [Ke.AUe, Ke.J_k, Ke.CBI],
                                exact: !0,
                                [dl]: [
                                  "mobilemall-collectionfe-productcollection",
                                ],
                                [zc]: "CollectionPage",
                                [el]:
                                  kn ||
                                  (kn = (0, $e.Z)(
                                    "mobilemall-collectionfe-productcollection",
                                    {
                                      [ol]: "app.web_fe.mobile.collectionfe",
                                      [il]: !1,
                                      [sl]: !0,
                                      [cl]: !0,
                                      [ll]: {
                                        slotName:
                                          "mobilemall-collectionfe-productcollection",
                                      },
                                    }
                                  )),
                                [nl]: { [tl]: "CollectionPage" },
                              }),
                            Hn ||
                              (Hn = {
                                path: Ke.eEt,
                                exact: !0,
                                [zc]: "CollectionPageRedirect",
                                [el]:
                                  Mn ||
                                  (Mn = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(7454).then(n.bind(n, 61520)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "CollectionPageRedirect" },
                              }),
                            xn ||
                              (xn = {
                                path: Ke.F7b,
                                exact: !0,
                                [dl]: ["mobilemall-pagebuilder"],
                                [zc]: "PageMicroSite",
                                [el]:
                                  Zn ||
                                  (Zn = (0, $e.Z)("mobilemall-pagebuilder", {
                                    [ol]: "app.web_fe.mobile.pagebuilder",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                    [ll]: {
                                      slotName: "mobilemall-pagebuilder",
                                    },
                                  })),
                                [nl]: { [tl]: "PageMicroSite", applink: !0 },
                              }),
                            Bn ||
                              (Bn = {
                                path: Ke.T4l,
                                exact: !0,
                                [dl]: ["mobilemall-pagebuilder"],
                                [zc]: "PageBuilderP",
                                [el]:
                                  Gn ||
                                  (Gn = (0, $e.Z)("mobilemall-pagebuilder", {
                                    [ol]: "app.web_fe.mobile.pagebuilder",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                    [ll]: {
                                      slotName: "mobilemall-pagebuilder",
                                    },
                                  })),
                                [nl]: {
                                  [tl]: "PageBuilderP",
                                  applink: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            Vn ||
                              (Vn = {
                                path: Ke.Nko,
                                exact: !0,
                                [zc]: "PLPRedirect",
                                [el]:
                                  Wn ||
                                  (Wn = (0, Ve.Ds)({
                                    [rl]: () => n.e(874).then(n.bind(n, 91750)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PLPRedirect" },
                              }),
                            jn ||
                              (jn = {
                                path: [
                                  (0, qe.pQ)(qe.Z6.ROUTE_OFFICIAL_SHOP)(Qc),
                                  ...(0, qe.jt)(Qc, qe.Z6.ROUTE_OFFICIAL_SHOP),
                                  Ke.ASv,
                                  Ke.maj,
                                  (0, qe.pQ)(
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY
                                  )(Qc),
                                  ...(0, qe.jt)(
                                    Qc,
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY
                                  ),
                                ],
                                exact: !0,
                                [zc]: "MallLandingPage",
                                [el]: pt,
                                [nl]: { [tl]: "MallLandingPage" },
                              }),
                            $n ||
                              ($n = {
                                path: [
                                  (0, qe.pQ)(
                                    qe.Z6
                                      .ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY
                                  )(Qc),
                                  ...(0, qe.jt)(
                                    Qc,
                                    qe.Z6
                                      .ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY
                                  ),
                                  (0, qe.pQ)(qe.Z6.ROUTE_OFFICIAL_SHOP_BRANDS)(
                                    Qc
                                  ),
                                  ...(0, qe.jt)(
                                    Qc,
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_BRANDS
                                  ),
                                ],
                                exact: !0,
                                [dl]: ["mobilemall-mallbrands"],
                                [zc]: "MallBrandList",
                                [el]:
                                  Yn ||
                                  (Yn = (0, $e.Z)("mobilemall-mallbrands", {
                                    [ol]: "app.web_fe.mobile.mallfe",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                    [ll]: { slotName: "mobilemall-mallbrands" },
                                  })),
                                [nl]: { [tl]: "MallBrandList" },
                              }),
                            qn ||
                              (qn = {
                                path: [
                                  (0, qe.pQ)(
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL
                                  )(Qc),
                                  ...(0, qe.jt)(
                                    Qc,
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL
                                  ),
                                ],
                                exact: !0,
                                [dl]: ["mobilemall-mallcategories"],
                                [zc]: "MallCategoryPanel",
                                [el]:
                                  Kn ||
                                  (Kn = (0, $e.Z)("mobilemall-mallcategories", {
                                    [ol]: "app.web_fe.mobile.mallfe",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                    [ll]: {
                                      slotName: "mobilemall-mallcategories",
                                    },
                                  })),
                                [nl]: { [tl]: "MallCategoryPanel" },
                              }),
                            Qn ||
                              (Qn = {
                                path: Ke.qDW,
                                exact: !0,
                                [zc]: "AllCategories",
                                [el]:
                                  Xn ||
                                  (Xn = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(1651),
                                        n.e(6889),
                                        n.e(335),
                                        n.e(6526),
                                      ]).then(n.bind(n, 84846)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "AllCategories" },
                              }),
                            zn ||
                              (zn = {
                                path: [Ke.AF6],
                                exact: !1,
                                [zc]: "ShopeeMart",
                                [el]:
                                  Jn ||
                                  (Jn = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(6147).then(n.bind(n, 37184)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "ShopeeMart" },
                                [ul]: tn || nn(),
                                [pl]: nn,
                              }),
                            tr ||
                              (tr = {
                                path: Ke.Rah,
                                [zc]: "NativeOpenRedirect",
                                [el]:
                                  er ||
                                  (er = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(5370).then(n.bind(n, 62562)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "NativeOpenRedirect" },
                              }),
                            rr ||
                              (rr = {
                                path: [Ke.jzm, Ke.MYO],
                                exact: !0,
                                [dl]: ["mobilemall-welcomepackage"],
                                [zc]: "WelcomePackage",
                                [el]:
                                  nr ||
                                  (nr = (0, $e.Z)("mobilemall-welcomepackage", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "WelcomePackage" },
                              }),
                            or ||
                              (or = {
                                path: [
                                  Ke.Kzw,
                                  Ke.xHX,
                                  Ke.LxO,
                                  "/wallet/pix_open_finance",
                                  "/wallet/linked_payment_methods",
                                  "/wallet/linked_accounts",
                                ],
                                exact: !0,
                                [zc]: "PageGenericDownloadApp",
                                [el]:
                                  ar ||
                                  (ar = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3754).then(n.bind(n, 23220)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageGenericDownloadApp" },
                              }),
                            sr ||
                              (sr = {
                                path: [Ke.XMC, Ke.lOV],
                                exact: !0,
                                [dl]: ["mobilemall-intermediate"],
                                [zc]: "PageIntermediate",
                                [el]:
                                  ir ||
                                  (ir = (0, $e.Z)("mobilemall-intermediate", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageIntermediate" },
                              }),
                            lr ||
                              (lr = {
                                path: [Ke.e5b, Ke._KV],
                                exact: !0,
                                [dl]: ["mobilemall-intermediateabtest"],
                                [zc]: "PageIntermediateAbtest",
                                [el]:
                                  cr ||
                                  (cr = (0, $e.Z)(
                                    "mobilemall-intermediateabtest",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageIntermediateAbtest" },
                              }),
                            ur ||
                              (ur = {
                                path: Ke.q9X,
                                exact: !0,
                                [dl]: ["mobilemall-intermediateinstall"],
                                [zc]: "PageIntermediateWP",
                                [el]:
                                  dr ||
                                  (dr = (0, $e.Z)(
                                    "mobilemall-intermediateinstall",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageIntermediateWP" },
                              }),
                            _r ||
                              (_r = {
                                path: Ke.CEA,
                                exact: !0,
                                [dl]: ["mobilemall-intermediateinstall"],
                                [zc]: "PageIntermediateWPV2",
                                [el]:
                                  pr ||
                                  (pr = (0, $e.Z)(
                                    "mobilemall-intermediateinstall",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageIntermediateWPV2" },
                              }),
                            fr ||
                              (fr = {
                                path: Ke.flR,
                                exact: !0,
                                [dl]: ["mobilemall-intermediateinstall"],
                                [zc]: "PageIntermediateInstallV3",
                                [el]:
                                  mr ||
                                  (mr = (0, $e.Z)(
                                    "mobilemall-intermediateinstall",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageIntermediateInstallV3" },
                              }),
                            Er ||
                              (Er = {
                                path: [Ke.oQ6],
                                exact: !0,
                                [dl]: ["mobilemall-gaslandingpage"],
                                [zc]: "GASLandingPage",
                                [el]:
                                  hr ||
                                  (hr = (0, $e.Z)("mobilemall-gaslandingpage", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "GASLandingPage" },
                              }),
                            Sr ||
                              (Sr = {
                                path: [Ke.Y8H],
                                exact: !0,
                                [dl]: ["mobilemall-anlandingpage"],
                                [zc]: "ANLandingPage",
                                [el]:
                                  gr ||
                                  (gr = (0, $e.Z)("mobilemall-anlandingpage", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "ANLandingPage" },
                              }),
                            Rr ||
                              (Rr = {
                                path: Ke.BOk,
                                exact: !0,
                                [zc]: "PageShareExpiration",
                                [el]:
                                  Ir ||
                                  (Ir = (0, Ve.Ds)({
                                    [rl]: () => n.e(369).then(n.bind(n, 34250)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageShareExpiration" },
                              }),
                            {
                              path: [
                                Xe.wl,
                                Xe.qB,
                                Xe.Pj,
                                Xe.T_,
                                Xe.ZV,
                                Xe.gI,
                                Xe.l0,
                                Xe.q,
                                ...((0, A.isFeatureEnabled)(
                                  "caeb500a7f539c8e24f2ce4421a57b96ca43c0826729ce5c651555eaca0ed281"
                                )
                                  ? [Xe.ii]
                                  : []),
                                ...((0, A.isFeatureEnabled)(
                                  "220739a06c14cfcf14f8a98eebd3680a877a7f37a53ade3beb33854b035e86e5"
                                )
                                  ? [Xe.pH]
                                  : []),
                                ...((0, A.isFeatureEnabled)(
                                  "eda48021a045d771e43fc3a9b4e2dcfe92cd2ae90960329e73bef4e66c2cfc64"
                                )
                                  ? [Xe.kl]
                                  : []),
                              ],
                              exact: !0,
                              [zc]: "PageAuthentication",
                              [el]:
                                Ar ||
                                (Ar = (0, Ve.Ds)({
                                  [rl]: () =>
                                    Promise.all([
                                      n.e(684),
                                      n.e(4303),
                                      n.e(3513),
                                      n.e(9093),
                                      n.e(9278),
                                      n.e(9696),
                                      n.e(9078),
                                      n.e(494),
                                    ]).then(n.bind(n, 84415)),
                                  [al]: Ye.Z,
                                })),
                              [nl]: { [tl]: "PageAuthentication" },
                            },
                            Or ||
                              (Or = {
                                path: [Xe.Ql, Xe.WS],
                                exact: !0,
                                [zc]: "PageAuthenticationInWebview",
                                [el]:
                                  br ||
                                  (br = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(4303),
                                        n.e(3513),
                                        n.e(9093),
                                        n.e(9278),
                                        n.e(9696),
                                        n.e(9078),
                                        n.e(494),
                                      ]).then(n.bind(n, 84415)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageAuthenticationInWebview",
                                  forShopeeApp: "always",
                                },
                              }),
                            (0, A.isFeatureEnabled)(
                              "d7caac7e73343ff4da32e73d19d6312f9c67582f0a356c0e28e14dc66c0d581e"
                            )
                              ? Cr ||
                                (Cr = {
                                  path: "/loyalty",
                                  exact: !1,
                                  [dl]: ["mobilemall-buyerusermobileloyalty"],
                                  [zc]: "PageLoyalty",
                                  [el]:
                                    Pr ||
                                    (Pr = (0, $e.Z)(
                                      "mobilemall-buyerusermobileloyalty",
                                      { [ol]: "", [il]: !1, [sl]: !1, [cl]: !1 }
                                    )),
                                  [nl]: {
                                    [tl]: "PageLoyalty",
                                    forShopeeApp: "always",
                                  },
                                })
                              : null,
                            "MX" === Qc &&
                            (0, A.isFeatureEnabled)(
                              "9907c4aa3de4308186085e41ec71358cf00e63f53bea66648e32ccdf0200b00b"
                            )
                              ? yr ||
                                (yr = {
                                  path: Qe.gL,
                                  exact: !0,
                                  [zc]: "PageUserKyc",
                                  [el]:
                                    Tr ||
                                    (Tr = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(2338),
                                          n.e(2709),
                                          n.e(4435),
                                        ]).then(n.bind(n, 63856)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageUserKyc" },
                                })
                              : null,
                            "BR" === Qc &&
                            (0, A.isFeatureEnabled)(
                              "13a5f0b8440368bdcba9aa15765e12a5db41e51c12d9e1b1e44ce56b84587ab5"
                            )
                              ? wr ||
                                (wr = {
                                  path: Qe.gL,
                                  exact: !0,
                                  [zc]: "PageUserKyc",
                                  [el]:
                                    vr ||
                                    (vr = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(2338),
                                          n.e(2709),
                                          n.e(4435),
                                        ]).then(n.bind(n, 15145)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageUserKyc" },
                                })
                              : null,
                            Lr ||
                              (Lr = {
                                path: [Xe._1, Xe.mI, Xe.S8],
                                exact: !0,
                                [zc]: "PageSellerAuthentication",
                                [el]:
                                  Nr ||
                                  (Nr = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(4303),
                                        n.e(3513),
                                        n.e(9093),
                                        n.e(9278),
                                        n.e(9696),
                                        n.e(9078),
                                        n.e(8464),
                                      ]).then(n.bind(n, 83792)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageSellerAuthentication" },
                              }),
                            Ur ||
                              (Ur = {
                                path: Qe.Dg,
                                exact: !0,
                                [zc]: "PageUserPhone",
                                [el]:
                                  Dr ||
                                  (Dr = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(9278),
                                        n.e(6910),
                                        n.e(9393),
                                      ]).then(n.bind(n, 49873)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageUserPhone",
                                  forShopeeApp: "always",
                                },
                              }),
                            Fr ||
                              (Fr = {
                                path: Qe.tK,
                                exact: !0,
                                [zc]: "PageUserPassword",
                                [el]:
                                  kr ||
                                  (kr = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(4303),
                                        n.e(215),
                                        n.e(6124),
                                        n.e(3758),
                                      ]).then(n.bind(n, 63276)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageUserPassword" },
                              }),
                            (0, A.isFeatureEnabled)(
                              "e947f3caddfd83500b09e822f5221787a76c8d5564a8292131e029415490cb38"
                            )
                              ? Hr ||
                                (Hr = {
                                  path: Qe.Uc,
                                  exact: !0,
                                  [zc]: "PageUserEmail",
                                  [el]:
                                    Mr ||
                                    (Mr = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(2338),
                                          n.e(4303),
                                          n.e(215),
                                          n.e(6124),
                                          n.e(9278),
                                          n.e(6910),
                                          n.e(8637),
                                        ]).then(n.bind(n, 48913)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageUserEmail" },
                                })
                              : null,
                            xr ||
                              (xr = {
                                path: Xe.yx,
                                exact: !0,
                                [zc]: "PageIntegrationLinkNow",
                                [el]:
                                  Zr ||
                                  (Zr = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(7830),
                                        n.e(9433),
                                      ]).then(n.bind(n, 32829)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageIntegrationLinkNow" },
                              }),
                            Br ||
                              (Br = {
                                path: Xe.ah,
                                exact: !0,
                                [zc]: "PageIntegrationLINEOpenApp",
                                [el]:
                                  Gr ||
                                  (Gr = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(6006),
                                        n.e(6124),
                                        n.e(9723),
                                      ]).then(n.bind(n, 93561)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageIntegrationLINEOpenApp",
                                  forShopeeApp: "always",
                                },
                              }),
                            Vr ||
                              (Vr = {
                                path: Xe.HJ,
                                exact: !0,
                                [zc]: "PageIntegrationLINE",
                                [el]:
                                  Wr ||
                                  (Wr = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(3977),
                                        n.e(6124),
                                        n.e(4715),
                                      ]).then(n.bind(n, 22280)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageIntegrationLINE",
                                  forShopeeApp: "always",
                                },
                              }),
                            Yr ||
                              (Yr = {
                                path: Xe.eg,
                                exact: !0,
                                [zc]: "PageLINEMissionSticker",
                                [el]:
                                  jr ||
                                  (jr = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(1845),
                                        n.e(7261),
                                        n.e(9525),
                                        n.e(6124),
                                        n.e(4528),
                                        n.e(5702),
                                        n.e(7830),
                                        n.e(8893),
                                        n.e(2902),
                                      ]).then(n.bind(n, 38453)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageLINEMissionSticker" },
                              }),
                            Kr ||
                              (Kr = {
                                path: Je.kH,
                                exact: !0,
                                [dl]: ["mobilemall-captcha"],
                                [zc]: "RouteVerifyCaptcha",
                                [el]:
                                  $r ||
                                  ($r = (0, $e.Z)("mobilemall-captcha", {
                                    [ol]: "",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "PageVerifyCaptcha",
                                  dropPWAShell: !0,
                                },
                              }),
                            Xr ||
                              (Xr = {
                                path: Je.ot,
                                exact: !0,
                                [dl]: ["mobilemall-captchapopup"],
                                [zc]: "RouteVerifyCaptchaPopup",
                                [el]:
                                  qr ||
                                  (qr = (0, $e.Z)("mobilemall-captchapopup", {
                                    [ol]: "",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "PageVerifyCaptchaPopup",
                                  dropPWAShell: !0,
                                },
                              }),
                            Jr ||
                              (Jr = {
                                path: Je.mR,
                                exact: !0,
                                [dl]: ["mobilemall-captchademo"],
                                [zc]: "PageVerifyCaptchaFeature",
                                [el]:
                                  Qr ||
                                  (Qr = (0, $e.Z)("mobilemall-captchademo", {
                                    [ol]: "",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageVerifyCaptchaFeature" },
                              }),
                            ea ||
                              (ea = {
                                path: [Je.kE, Je.F3],
                                exact: !0,
                                [zc]: "PageIdentityVerification",
                                [el]:
                                  zr ||
                                  (zr = (0, $e.Z)("mobilemall-antifraudivs", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "PageIdentityVerification",
                                  forShopeeApp: "always",
                                },
                              }),
                            na ||
                              (na = {
                                path: [Je.oi],
                                exact: !0,
                                [dl]: ["mobilemall-antifraudverifyquestion"],
                                [zc]: "PageVerifyQestion",
                                [el]:
                                  ta ||
                                  (ta = (0, $e.Z)(
                                    "mobilemall-antifraudverifyquestion",
                                    { [ol]: "", [il]: !1, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageVerifyQestion" },
                              }),
                            aa ||
                              (aa = {
                                path: [Je.c7],
                                exact: !0,
                                [dl]: [
                                  "mobilemall-antifraudtrusteddevicetoken",
                                ],
                                [zc]: "PageVerifyTrustedDevice",
                                [el]:
                                  ra ||
                                  (ra = (0, $e.Z)(
                                    "mobilemall-antifraudtrusteddevicetoken",
                                    { [ol]: "", [il]: !1, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageVerifyTrustedDevice" },
                              }),
                            ia ||
                              (ia = {
                                path: [Je.yV],
                                exact: !0,
                                [dl]: [
                                  "mobilemall-antifraudtrusteddevicetokenreceiver",
                                ],
                                [zc]: "PageVerifyTrustedDeviceReceiver",
                                [el]:
                                  oa ||
                                  (oa = (0, $e.Z)(
                                    "mobilemall-antifraudtrusteddevicetokenreceiver",
                                    { [ol]: "", [il]: !1, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "PageVerifyTrustedDeviceReceiver",
                                  forShopeeApp: "always",
                                },
                              }),
                            ca ||
                              (ca = {
                                path: Je.Z9,
                                exact: !0,
                                [dl]: ["mobilemall-anticrawler"],
                                [zc]: "PageAntiCrawlerVerify",
                                [el]:
                                  sa ||
                                  (sa = (0, $e.Z)("mobilemall-anticrawler", {
                                    [ol]: "",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageAntiCrawlerVerify" },
                              }),
                            da ||
                              (da = {
                                path: Je.YI,
                                exact: !0,
                                [dl]: ["mobilemall-antifrauderror"],
                                [zc]: "PageAntiCrawlerError",
                                [el]:
                                  la ||
                                  (la = (0, $e.Z)("mobilemall-antifrauderror", {
                                    [ol]: "",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "PageAntiCrawlerError",
                                  applink: !0,
                                },
                              }),
                            "test" === Jc
                              ? pa ||
                                (pa = {
                                  path: Je.Yp,
                                  exact: !0,
                                  [zc]: "PageAntiCrawlerTest",
                                  [el]:
                                    ua ||
                                    (ua = (0, Ve.Ds)({
                                      [rl]: () =>
                                        n.e(8009).then(n.bind(n, 51051)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageAntiCrawlerTest" },
                                })
                              : null,
                            ma ||
                              (ma = {
                                path: Xe.oy,
                                exact: !0,
                                [zc]: "PageAuthenticationIVS",
                                [el]:
                                  _a ||
                                  (_a = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(4303),
                                        n.e(5677),
                                        n.e(6124),
                                        n.e(2063),
                                      ]).then(n.bind(n, 14123)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageAuthenticationIVS" },
                              }),
                            ha ||
                              (ha = {
                                path: Xe.X6,
                                exact: !0,
                                [zc]: "PageAuthenticationShopeePay",
                                [el]:
                                  fa ||
                                  (fa = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(1845),
                                        n.e(7261),
                                        n.e(3748),
                                        n.e(6124),
                                        n.e(4528),
                                        n.e(5702),
                                        n.e(7830),
                                        n.e(8893),
                                        n.e(4343),
                                      ]).then(n.bind(n, 8980)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageAuthenticationShopeePay" },
                              }),
                            ga ||
                              (ga = {
                                path: [Je.Er, Je.gW],
                                exact: !0,
                                [zc]: "PageVerifyOTP",
                                [el]:
                                  Ea ||
                                  (Ea = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(1845),
                                        n.e(3368),
                                        n.e(6124),
                                        n.e(4528),
                                        n.e(8863),
                                        n.e(9278),
                                        n.e(72),
                                        n.e(6061),
                                      ]).then(n.bind(n, 98487)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageVerifyOTP",
                                  forShopeeApp: "always",
                                },
                              }),
                            Ia ||
                              (Ia = {
                                path: Je.Aj,
                                exact: !0,
                                [zc]: "PageVerifyEmail",
                                [el]:
                                  Sa ||
                                  (Sa = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(1845),
                                        n.e(9012),
                                        n.e(6124),
                                        n.e(4528),
                                        n.e(566),
                                      ]).then(n.bind(n, 3189)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageVerifyEmail",
                                  forShopeeApp: "always",
                                },
                              }),
                            Aa ||
                              (Aa = {
                                path: Je.UX,
                                exact: !0,
                                [zc]: "PageVerifyPassword",
                                [el]:
                                  Ra ||
                                  (Ra = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(232),
                                        n.e(6124),
                                        n.e(561),
                                      ]).then(n.bind(n, 940)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageVerifyPassword",
                                  forShopeeApp: "always",
                                },
                              }),
                            Oa ||
                              (Oa = {
                                path: Je._r,
                                exact: !0,
                                [zc]: "PageVerifyLinkSender",
                                [el]:
                                  ba ||
                                  (ba = (0, $e.Z)(
                                    "mobilemall-antifraudverifylink",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "PageVerifyLinkSender",
                                  forShopeeApp: "always",
                                },
                              }),
                            Ca ||
                              (Ca = {
                                path: Je.n0,
                                exact: !0,
                                [zc]: "PageVerifyLinkReceiver",
                                [el]:
                                  Pa ||
                                  (Pa = (0, $e.Z)(
                                    "mobilemall-antifraudverifylinkreceiver",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "PageVerifyLinkReceiver",
                                  forShopeeApp: "always",
                                },
                              }),
                            ya ||
                              (ya = {
                                path: Je.O$,
                                exact: !0,
                                [zc]: "PageVerifyEmailLinkSender",
                                [el]:
                                  Ta ||
                                  (Ta = (0, $e.Z)(
                                    "mobilemall-antifraudverifyemaillink",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "PageVerifyEmailLinkSender",
                                  forShopeeApp: "always",
                                },
                              }),
                            wa ||
                              (wa = {
                                path: Je.im,
                                exact: !0,
                                [zc]: "PageVerifyEmailLinkReceiver",
                                [el]:
                                  va ||
                                  (va = (0, $e.Z)(
                                    "mobilemall-antifraudverifyemaillinkreceiver",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "PageVerifyEmailLinkReceiver",
                                  forShopeeApp: "always",
                                },
                              }),
                            La ||
                              (La = {
                                path: Qe.pm,
                                exact: !0,
                                [zc]: "PageUserGDPR",
                                [el]:
                                  Na ||
                                  (Na = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(4571).then(n.bind(n, 51672)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageUserGDPR" },
                              }),
                            "BR" !== Qc
                              ? null
                              : Ua ||
                                (Ua = {
                                  path: Qe.W0,
                                  exact: !0,
                                  [zc]: "PageUserGdprCookieSetting",
                                  [el]:
                                    Da ||
                                    (Da = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(7450),
                                          n.e(6124),
                                          n.e(8725),
                                        ]).then(n.bind(n, 2135)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageUserGdprCookieSetting" },
                                }),
                            Fa ||
                              (Fa = {
                                path: Je.f$,
                                exact: !0,
                                [zc]: "PageVerifyQr",
                                [el]:
                                  ka ||
                                  (ka = (0, $e.Z)(
                                    "mobilemall-antifraudverifyqr",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "PageVerifyQr",
                                  forShopeeApp: "always",
                                },
                              }),
                            "TW" !== Qc
                              ? null
                              : Ha ||
                                (Ha = {
                                  path: Qe.Iu,
                                  exact: !0,
                                  [zc]: "RouteCustomKYCTW",
                                  [el]:
                                    Ma ||
                                    (Ma = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(1240),
                                          n.e(6124),
                                          n.e(5480),
                                        ]).then(n.bind(n, 34502)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "RouteCustomKYCTW" },
                                }),
                            (0, A.isFeatureEnabled)(
                              "5d442dc8b89a0af84e9ef0ed610f1e88a9ad558c235adb2eb1b5c9971d91a4be"
                            )
                              ? xa ||
                                (xa = {
                                  path: [
                                    Qe.ng,
                                    Qe.GA,
                                    ...("TH" === Qc ? [Qe.N9] : []),
                                    Qe.Gl,
                                    Qe.oN,
                                    Qe.bz,
                                    Qe.yN,
                                  ],
                                  exact: !0,
                                  [zc]: "PageAccountMicroFEPage",
                                  [el]:
                                    Za ||
                                    (Za = (0, $e.Z)("mobilemall-useraccount", {
                                      [ol]: "",
                                      [il]: !0,
                                      [sl]: !1,
                                      [cl]: !1,
                                    })),
                                  [nl]: { [tl]: "PageAccountMicroFEPage" },
                                })
                              : {
                                  path: [
                                    Qe.ng,
                                    Qe.GA,
                                    ...("TH" === Qc ? [Qe.N9] : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "1c72d784a0f1706307b84eadb3a8671285493c3ec651eff274c6b1a8c6a5e7c3"
                                    )
                                      ? [Qe.qQ]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "f7b242aaee94c2969f9118917a78da441a4e02f85c77676d80f408c86ce162ac"
                                    )
                                      ? [Qe.a9]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "e4ed3b6116d3cf1515640c515766b177de480ba612229465d3a35879d9d1dd8c"
                                    )
                                      ? [Qe.wg]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "6fd67ffa3f0d0517e6d4561deeeba6a6441d12e8dde2f14fdd6cfdf5518e13eb"
                                    )
                                      ? [Qe.rt]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "5a7da06724e2f7056bf4b1522513905864ae7a938caeff7527d0da836bc70b84"
                                    )
                                      ? [Qe.tp]
                                      : []),
                                    Qe.Gl,
                                    Qe.oN,
                                    Qe.bz,
                                    Qe.yN,
                                  ],
                                  exact: !0,
                                  [zc]: "PageAccountMicroFEPage",
                                  [el]:
                                    Za ||
                                    (Za = (0, $e.Z)("mobilemall-useraccount", {
                                      [ol]: "",
                                      [il]: !0,
                                      [sl]: !1,
                                      [cl]: !1,
                                    })),
                                  [nl]: { [tl]: "PageAccountMicroFEPage" },
                                },
                            "live" === Jc
                              ? null
                              : Ba ||
                                (Ba = {
                                  path: "/buyeruser/demo",
                                  exact: !0,
                                  [dl]: ["mobilemall-buyerusermobiledefault"],
                                  [zc]: "PageUserMFEDemo",
                                  [el]:
                                    Ga ||
                                    (Ga = (0, $e.Z)(
                                      "mobilemall-buyerusermobiledefault",
                                      { [ol]: "", [il]: !1, [sl]: !1, [cl]: !1 }
                                    )),
                                  [nl]: { [tl]: "PageUserMFEDemo" },
                                }),
                            (0, A.isFeatureEnabled)(
                              "5d442dc8b89a0af84e9ef0ed610f1e88a9ad558c235adb2eb1b5c9971d91a4be"
                            )
                              ? {
                                  path: [
                                    ...((0, A.isFeatureEnabled)(
                                      "1c72d784a0f1706307b84eadb3a8671285493c3ec651eff274c6b1a8c6a5e7c3"
                                    )
                                      ? [Qe.qQ]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "f7b242aaee94c2969f9118917a78da441a4e02f85c77676d80f408c86ce162ac"
                                    )
                                      ? [Qe.a9]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "e4ed3b6116d3cf1515640c515766b177de480ba612229465d3a35879d9d1dd8c"
                                    )
                                      ? [Qe.wg]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "6fd67ffa3f0d0517e6d4561deeeba6a6441d12e8dde2f14fdd6cfdf5518e13eb"
                                    )
                                      ? [Qe.rt]
                                      : []),
                                    ...((0, A.isFeatureEnabled)(
                                      "5a7da06724e2f7056bf4b1522513905864ae7a938caeff7527d0da836bc70b84"
                                    )
                                      ? [Qe.tp]
                                      : []),
                                  ],
                                  exact: !0,
                                  [dl]: [
                                    "mobilemall-buyernotimobiledefault-notificationsetting",
                                  ],
                                  [zc]: "BuyerNotiMobileNotificationSetting",
                                  [el]:
                                    Wa ||
                                    (Wa = (0, $e.Z)(
                                      "mobilemall-buyernotimobiledefault-notificationsetting",
                                      { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                    )),
                                  [nl]: {
                                    [tl]: "BuyerNotiMobileNotificationSetting",
                                  },
                                }
                              : null,
                            (0, A.isFeatureEnabled)(
                              "218b015314ecc31500b62af6ca96495c5296522e8de9c510f7f41619f47b5349"
                            )
                              ? ja ||
                                (ja = {
                                  path: ["/demo/user/identity-microfe-1"],
                                  exact: !0,
                                  [zc]: "PageIdentityMicroFEDemo1",
                                  [el]:
                                    Va ||
                                    (Va = (0, Ve.Ds)({
                                      [rl]: () =>
                                        n.e(4063).then(n.bind(n, 46943)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageIdentityMicroFEDemo1" },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "218b015314ecc31500b62af6ca96495c5296522e8de9c510f7f41619f47b5349"
                            )
                              ? $a ||
                                ($a = {
                                  path: ["/demo/user/identity-microfe-2"],
                                  exact: !0,
                                  [zc]: "PageIdentityMicroFEDemo2",
                                  [el]:
                                    Ya ||
                                    (Ya = (0, Ve.Ds)({
                                      [rl]: () =>
                                        n.e(5468).then(n.bind(n, 46070)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageIdentityMicroFEDemo2" },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "5d442dc8b89a0af84e9ef0ed610f1e88a9ad558c235adb2eb1b5c9971d91a4be",
                              !1
                            )
                              ? null
                              : (0, A.isFeatureEnabled)(
                                  "77591834b69dfde3dbd9e2e077373ca254ef2a9fdf56b0cbe0e04889485a9f2e"
                                )
                              ? qa ||
                                (qa = {
                                  path: [
                                    "/notification/email-subscription-center",
                                  ],
                                  exact: !0,
                                  [dl]: [
                                    "user-microfe-identity-mobile-noti-email-subscription-center",
                                  ],
                                  [zc]: "PageNotificationSubscriptionCenter",
                                  [el]:
                                    Ka ||
                                    (Ka = (0, $e.Z)(
                                      "user-microfe-identity-mobile-noti-email-subscription-center",
                                      { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                    )),
                                  [nl]: {
                                    [tl]: "PageNotificationSubscriptionCenter",
                                  },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "5d442dc8b89a0af84e9ef0ed610f1e88a9ad558c235adb2eb1b5c9971d91a4be",
                              !1
                            )
                              ? Qa ||
                                (Qa = {
                                  path: "/notification/email-subscription-center",
                                  exact: !0,
                                  [dl]: [
                                    "mobilemall-buyernotimobiledefault-emailsubscription",
                                  ],
                                  [zc]: "BuyerNotiMobileEmailSubscriptionCenter",
                                  [el]:
                                    Xa ||
                                    (Xa = (0, $e.Z)(
                                      "mobilemall-buyernotimobiledefault-emailsubscription",
                                      { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                    )),
                                  [nl]: {
                                    [tl]: "BuyerNotiMobileEmailSubscriptionCenter",
                                  },
                                })
                              : null,
                            "live" === Jc
                              ? null
                              : za ||
                                (za = {
                                  path: "/buyernoti/demo",
                                  exact: !0,
                                  [dl]: ["mobilemall-buyernotimobiledefault"],
                                  [zc]: "PageNotiMFEDemo",
                                  [el]:
                                    Ja ||
                                    (Ja = (0, $e.Z)(
                                      "mobilemall-buyernotimobiledefault",
                                      { [ol]: "", [il]: !1, [sl]: !1, [cl]: !1 }
                                    )),
                                  [nl]: { [tl]: "PageNotiMFEDemo" },
                                }),
                            to ||
                              (to = {
                                path: [Qe.dB, Qe.p3],
                                exact: !0,
                                [zc]: "PageUserMicroFEPageForShopeeApp",
                                [el]:
                                  eo ||
                                  (eo = (0, $e.Z)("mobilemall-useraccount", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "PageUserMicroFEPageForShopeeApp",
                                  forShopeeApp: "always",
                                },
                              }),
                            (0, A.isFeatureEnabled)(
                              "218b015314ecc31500b62af6ca96495c5296522e8de9c510f7f41619f47b5349"
                            )
                              ? ro ||
                                (ro = {
                                  path: "/demo/user/account-microfe-1",
                                  exact: !0,
                                  [zc]: "PageAccountMicroFEDemo1",
                                  [el]:
                                    no ||
                                    (no = (0, Ve.Ds)({
                                      [rl]: () =>
                                        n.e(4432).then(n.bind(n, 28335)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageAccountMicroFEDemo1" },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "218b015314ecc31500b62af6ca96495c5296522e8de9c510f7f41619f47b5349"
                            )
                              ? oo ||
                                (oo = {
                                  path: "/demo/user/account-microfe-2",
                                  exact: !0,
                                  [zc]: "PageAccountMicroFEDemo2",
                                  [el]:
                                    ao ||
                                    (ao = (0, Ve.Ds)({
                                      [rl]: () =>
                                        n.e(4870).then(n.bind(n, 95533)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageAccountMicroFEDemo2" },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "edd6e8f23a84cfc0eaf84e8839a3246c0f8f190f581a247ae7dbbdc63744c309"
                            )
                              ? so ||
                                (so = {
                                  path: Qe.Sr,
                                  exact: !0,
                                  [zc]: "PageVerifyAccountSellerMainSub",
                                  [el]:
                                    io ||
                                    (io = (0, $e.Z)(
                                      "user-microfe-account-mobile-verify-account-seller-main-sub",
                                      { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                    )),
                                  [nl]: {
                                    [tl]: "PageVerifyAccountSellerMainSub",
                                  },
                                })
                              : null,
                            lo ||
                              (lo = {
                                path: Qe.gN,
                                exact: !0,
                                [zc]: "PageAddAddress",
                                [el]:
                                  co ||
                                  (co = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(5523),
                                        n.e(4),
                                        n.e(2709),
                                        n.e(335),
                                        n.e(4761),
                                        n.e(2019),
                                        n.e(6102),
                                        n.e(7471),
                                        n.e(7263),
                                        n.e(7654),
                                      ]).then(n.bind(n, 5925)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageAddAddress" },
                              }),
                            po ||
                              (po = {
                                path: Qe.sX,
                                exact: !0,
                                [zc]: "PageEditAddress",
                                [el]:
                                  uo ||
                                  (uo = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(5523),
                                        n.e(4),
                                        n.e(2709),
                                        n.e(335),
                                        n.e(4761),
                                        n.e(2019),
                                        n.e(6102),
                                        n.e(7471),
                                        n.e(7263),
                                        n.e(9610),
                                      ]).then(n.bind(n, 7542)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageEditAddress" },
                              }),
                            mo ||
                              (mo = {
                                path: [Ke.siV],
                                exact: !0,
                                [zc]: "PageAddressList",
                                [el]:
                                  _o ||
                                  (_o = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(4212).then(n.bind(n, 37881)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageAddressList" },
                              }),
                            ho ||
                              (ho = {
                                path: [Qe.nN],
                                exact: !0,
                                [zc]: "PageUserAddress",
                                [el]:
                                  fo ||
                                  (fo = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(4761),
                                        n.e(6148),
                                        n.e(3507),
                                      ]).then(n.bind(n, 61771)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageUserAddress" },
                              }),
                            go ||
                              (go = {
                                path: Xe.JV,
                                exact: !0,
                                [zc]: "PageIntegrationAddressCallback",
                                [el]:
                                  Eo ||
                                  (Eo = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(4557).then(n.bind(n, 23480)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageIntegrationAddressCallback",
                                },
                              }),
                            Io ||
                              (Io = {
                                path: Qe.xj,
                                exact: !0,
                                [zc]: "PageUserLocationSelector",
                                [el]:
                                  So ||
                                  (So = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(8635),
                                        n.e(335),
                                        n.e(4761),
                                        n.e(6148),
                                        n.e(4759),
                                      ]).then(n.bind(n, 4676)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageUserLocationSelector" },
                              }),
                            Ao ||
                              (Ao = {
                                path: Xe.Iu,
                                exact: !0,
                                [zc]: "PageOAuth",
                                [el]:
                                  Ro ||
                                  (Ro = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(1577),
                                        n.e(6124),
                                        n.e(1200),
                                      ]).then(n.bind(n, 21443)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageOAuth" },
                              }),
                            "test" === Jc
                              ? Oo ||
                                (Oo = {
                                  path: "/demo/account",
                                  exact: !0,
                                  [zc]: "AccountDemoPage",
                                  [el]:
                                    bo ||
                                    (bo = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(2338),
                                          n.e(1845),
                                          n.e(4303),
                                          n.e(3513),
                                          n.e(6124),
                                          n.e(4528),
                                          n.e(9093),
                                          n.e(6667),
                                          n.e(9278),
                                          n.e(9696),
                                          n.e(9078),
                                          n.e(3976),
                                        ]).then(n.bind(n, 80979)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "AccountDemoPage" },
                                })
                              : null,
                            "test" === Jc
                              ? Co ||
                                (Co = {
                                  path: "/demo/address/select",
                                  exact: !0,
                                  [zc]: "PageAddressSelectionDemo",
                                  [el]:
                                    Po ||
                                    (Po = (0, Ve.Ds)({
                                      [rl]: () =>
                                        n.e(2161).then(n.bind(n, 49632)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageAddressSelectionDemo" },
                                })
                              : null,
                            "live" !== Jc && "liveish" !== Jc
                              ? yo ||
                                (yo = {
                                  path: "/demo/address",
                                  exact: !0,
                                  [zc]: "PageAddressDemo",
                                  [el]:
                                    To ||
                                    (To = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(2338),
                                          n.e(5523),
                                          n.e(4),
                                          n.e(2359),
                                          n.e(6651),
                                          n.e(6124),
                                          n.e(335),
                                          n.e(4761),
                                          n.e(2019),
                                          n.e(6102),
                                          n.e(7471),
                                          n.e(4726),
                                          n.e(7537),
                                        ]).then(n.bind(n, 99856)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageAddressDemo" },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "f062eac374e03e408aabac189602a0faa7c01042443efecccf42102279b6b598",
                              !1
                            )
                              ? wo ||
                                (wo = {
                                  path: Xe.I2,
                                  exact: !0,
                                  [zc]: "PageSnackVideoIntegration",
                                  [el]:
                                    vo ||
                                    (vo = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(6717),
                                          n.e(6124),
                                          n.e(1930),
                                          n.e(2672),
                                        ]).then(n.bind(n, 38327)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageSnackVideoIntegration" },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "f062eac374e03e408aabac189602a0faa7c01042443efecccf42102279b6b598",
                              !1
                            )
                              ? Lo ||
                                (Lo = {
                                  path: Xe.iT,
                                  exact: !0,
                                  [zc]: "PageSnackVideoIntegrationCheckout",
                                  [el]:
                                    No ||
                                    (No = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(6717),
                                          n.e(6124),
                                          n.e(1930),
                                          n.e(3756),
                                        ]).then(n.bind(n, 50417)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: {
                                    [tl]: "PageSnackVideoIntegrationCheckout",
                                  },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "5488c4ea00c4104b46cf784d8c785d88df4d384c45c82edee07807589ad592a7",
                              !1
                            )
                              ? Uo ||
                                (Uo = {
                                  path: Xe.qU,
                                  exact: !0,
                                  [zc]: "PageMetaIntegration",
                                  [el]:
                                    Do ||
                                    (Do = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(279),
                                          n.e(6124),
                                          n.e(1808),
                                        ]).then(n.bind(n, 87e3)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageMetaIntegration" },
                                })
                              : null,
                            Fo ||
                              (Fo = {
                                path: Ke.r6X,
                                exact: !1,
                                [dl]: ["mobilemall-ordersuccess"],
                                [zc]: "OrderSuccessPage",
                                [el]:
                                  ko ||
                                  (ko = (0, $e.Z)("mobilemall-ordersuccess", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "OrderSuccessPage" },
                              }),
                            Ho ||
                              (Ho = {
                                path: "/user/purchase/checkout/:id/",
                                exact: !1,
                                [dl]: ["mobilemall-orderlist"],
                                [zc]: "OrderListSection",
                                [el]:
                                  Mo ||
                                  (Mo = (0, $e.Z)("mobilemall-orderlist", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "OrderListSection" },
                              }),
                            xo ||
                              (xo = {
                                path: [
                                  "/user/purchase",
                                  "/user/purchase/list/",
                                  "/user/purchase/order/:id/",
                                ],
                                exact: !0,
                                [zc]: "RouteRedirectPurchaseToMePage",
                                [el]:
                                  Zo ||
                                  (Zo = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3394).then(n.bind(n, 97149)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteRedirectPurchaseToMePage" },
                              }),
                            "TW" !== Qc
                              ? null
                              : Bo ||
                                (Bo = {
                                  path: [Xe.PT, Xe.lL],
                                  exact: !0,
                                  [zc]: "PageIntegrationTWEInvoice",
                                  [el]:
                                    Go ||
                                    (Go = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(684),
                                          n.e(5020),
                                          n.e(6124),
                                          n.e(7598),
                                        ]).then(n.bind(n, 59365)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageIntegrationTWEInvoice" },
                                }),
                            Wo ||
                              (Wo = {
                                path: Ke.lCC,
                                exact: !0,
                                [dl]: [
                                  "mobilemall-checkout",
                                  "mobilemall-checkout-norevamp",
                                ],
                                [zc]: "PageCheckout",
                                [el]: rn.Z,
                                [nl]: { [tl]: "PageCheckout" },
                              }),
                            jo ||
                              (jo = {
                                path: Ke.ky_,
                                exact: !0,
                                [dl]: [
                                  "pcmall-externalcheckout",
                                  "mobilemall-checkout",
                                  "mobilemall-checkout-norevamp",
                                ],
                                [zc]: "PageCheckoutExternal",
                                [el]:
                                  Vo ||
                                  (Vo = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(7423).then(n.bind(n, 75855)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageCheckoutExternal",
                                  forShopeeApp: "try-rn-first",
                                },
                              }),
                            $o ||
                              ($o = {
                                path: Ke.TWV,
                                exact: !0,
                                [dl]: ["mobilemall-cart"],
                                [zc]: "PageShoppingCart",
                                [el]:
                                  Yo ||
                                  (Yo = (0, $e.Z)("mobilemall-cart", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageShoppingCart" },
                              }),
                            qo ||
                              (qo = {
                                path: Ke.qHk,
                                exact: !0,
                                [zc]: "PageIframeDataPipe",
                                [el]:
                                  Ko ||
                                  (Ko = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(5897).then(n.bind(n, 97315)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageIframeDataPipe" },
                              }),
                            Qo ||
                              (Qo = {
                                path: Ke.DW9,
                                exact: !0,
                                [dl]: ["mobilemall-invoicepage"],
                                [zc]: "PageInvoice",
                                [el]:
                                  Xo ||
                                  (Xo = (0, $e.Z)("mobilemall-invoicepage", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageInvoice" },
                              }),
                            zo ||
                              (zo = {
                                path: Ke.Ao3,
                                exact: !0,
                                [zc]: "PageAddress",
                                [el]:
                                  Jo ||
                                  (Jo = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(684),
                                        n.e(2338),
                                        n.e(5523),
                                        n.e(4),
                                        n.e(335),
                                        n.e(4761),
                                        n.e(2019),
                                        n.e(6102),
                                        n.e(8247),
                                      ]).then(n.bind(n, 83679)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageAddress" },
                              }),
                            ti ||
                              (ti = {
                                path: [
                                  Ke.KHp,
                                  "/rw/payment/callback/:checkoutId",
                                  "/pc/payment/callback/:checkoutId",
                                ],
                                exact: !0,
                                [zc]: "MarketplacePaymentPage",
                                [el]:
                                  ei ||
                                  (ei = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(7026).then(n.bind(n, 96446)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "MarketplacePaymentPage" },
                              }),
                            ri ||
                              (ri = {
                                path: Ke.lP8,
                                [zc]: "RouteSellerLink",
                                [el]:
                                  ni ||
                                  (ni = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(1098).then(n.bind(n, 93264)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteSellerLink" },
                              }),
                            oi ||
                              (oi = {
                                path: "/sclp/:pageType/:promotionId",
                                exact: !0,
                                [dl]: ["mobilemall-sclp"],
                                [zc]: "PageSellerCenterLanding",
                                [el]:
                                  ai ||
                                  (ai = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([n.e(1474), n.e(4906)]).then(
                                        n.bind(n, 32225)
                                      ),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageSellerCenterLanding" },
                              }),
                            si ||
                              (si = {
                                path: [Ke.vYK, Ke.KSk],
                                exact: !1,
                                [dl]: ["mobilemall-paymentfe"],
                                [zc]: "PagePaymentMicroFEPage",
                                [el]:
                                  ii ||
                                  (ii = (0, $e.Z)("mobilemall-paymentfe", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "PagePaymentMicroFEPage",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            li ||
                              (li = {
                                path: [Ke.I7f, Ke.Ggd],
                                exact: !1,
                                [zc]: "PaymentSelectionPage",
                                [el]:
                                  ci ||
                                  (ci = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(1430).then(n.bind(n, 35377)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PaymentSelectionPage",
                                  skipA2HS: !0,
                                },
                                [ul]: En || gn(),
                                [pl]: gn,
                              }),
                            ui ||
                              (ui = {
                                path: Ke.Jvs,
                                exact: !0,
                                [dl]: ["mobilemall-returnrequestissue"],
                                [zc]: "ReturnRequestIssueSelectionPage",
                                [el]:
                                  di ||
                                  (di = (0, $e.Z)(
                                    "mobilemall-returnrequestissue",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "ReturnRequestIssueSelectionPage",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            _i ||
                              (_i = {
                                path: Ke.kQk,
                                exact: !0,
                                [dl]: ["mobilemall-returnrequestitemselect"],
                                [zc]: "ReturnRequestItemSelectionPage",
                                [el]:
                                  pi ||
                                  (pi = (0, $e.Z)(
                                    "mobilemall-returnrequestitemselect",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "ReturnRequestItemSelectionPage",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            fi ||
                              (fi = {
                                path: Ke.tW0,
                                exact: !0,
                                [dl]: ["mobilemall-returnrequestsummary"],
                                [zc]: "ReturnRequestSummaryPage",
                                [el]:
                                  mi ||
                                  (mi = (0, $e.Z)(
                                    "mobilemall-returnrequestsummary",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: {
                                  [tl]: "ReturnRequestSummaryPage",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            Ei ||
                              (Ei = {
                                path: [
                                  Ke.HgE,
                                  Ke.B77,
                                  Ke.uWq,
                                  Ke.DvZ,
                                  Ke.fNg,
                                  Ke.XLP,
                                ],
                                [dl]: ["mobilemall-returndetail"],
                                [zc]: "ReturnRefundDetailSubPages",
                                [el]:
                                  hi ||
                                  (hi = (0, $e.Z)("mobilemall-returndetail", {
                                    [ol]: "app.web_fe.mobile.returndetail",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                  })),
                                [nl]: {
                                  [tl]: "ReturnRefundDetailSubPages",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            Si ||
                              (Si = {
                                path: [Ke.Xuj],
                                [dl]: ["mobilemall-returndetail"],
                                [zc]: "ReturnRefundDetailRatingPage",
                                [el]:
                                  gi ||
                                  (gi = (0, $e.Z)("mobilemall-returndetail", {
                                    [ol]: "app.web_fe.mobile.returndetail",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                  })),
                                [nl]: {
                                  [tl]: "ReturnRefundDetailRatingPage",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            (0, A.isFeatureEnabled)(
                              "3cb536dab71a6a2fc4d95db5a5a68b26ed3609f9e35ac2a02fa9b3314f1d4e6b"
                            )
                              ? Ri ||
                                (Ri = {
                                  path: [Ke.omx, Ke.hak],
                                  [dl]: ["mobilemall-returndetail-v2"],
                                  [zc]: "ReturnRefundDetailPage",
                                  [el]:
                                    Ii ||
                                    (Ii = (0, $e.Z)(
                                      "mobilemall-returndetail-v2",
                                      {
                                        [ol]: "app.web_fe.mobile.returndetail",
                                        [il]: !1,
                                        [sl]: !1,
                                        [cl]: !0,
                                      }
                                    )),
                                  [nl]: {
                                    [tl]: "ReturnRefundDetailPage",
                                    skipA2HS: !0,
                                    forShopeeApp: "always",
                                  },
                                })
                              : null,
                            (0, A.isFeatureEnabled)(
                              "3cb536dab71a6a2fc4d95db5a5a68b26ed3609f9e35ac2a02fa9b3314f1d4e6b"
                            )
                              ? null
                              : bi ||
                                (bi = {
                                  path: [Ke.omx, Ke.hak],
                                  [dl]: ["mobilemall-returndetail"],
                                  [zc]: "OldReturnRefundDetailPage",
                                  [el]:
                                    Ai ||
                                    (Ai = (0, $e.Z)("mobilemall-returndetail", {
                                      [ol]: "app.web_fe.mobile.returndetail",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !0,
                                    })),
                                  [nl]: {
                                    [tl]: "OldReturnRefundDetailPage",
                                    skipA2HS: !0,
                                    forShopeeApp: "always",
                                  },
                                }),
                            Pi ||
                              (Pi = {
                                path: Ke.PWP,
                                exact: !0,
                                [dl]: ["mobilemall-returnevidence"],
                                [zc]: "ReturnUploadMissingEvidence",
                                [el]:
                                  Oi ||
                                  (Oi = (0, $e.Z)("mobilemall-returnevidence", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "ReturnUploadMissingEvidence",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            Ti ||
                              (Ti = {
                                path: Ke.AqD,
                                [dl]: ["mobilemall-return"],
                                [zc]: "ReturnLogistics",
                                [el]:
                                  Ci ||
                                  (Ci = (0, $e.Z)("mobilemall-return", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "ReturnLogistics",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            vi ||
                              (vi = {
                                path: Ke.PyL,
                                exact: !0,
                                [dl]: ["mobilemall-pagedpvoucherredemption"],
                                [zc]: "PageDpVoucherRedemption",
                                [el]:
                                  yi ||
                                  (yi = (0, $e.Z)(
                                    "mobilemall-pagedpvoucherredemption",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageDpVoucherRedemption" },
                              }),
                            Ni ||
                              (Ni = {
                                path: (0, qe.pQ)(qe.Z6.FLASH_SALE)(Qc),
                                exact: !0,
                                [zc]: "PageFlashSale",
                                [el]:
                                  wi ||
                                  (wi = (0, $e.Z)("mobilemall-flashsale", {
                                    [ol]: "app.web_fe.mobile.flashsale",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                    [ll]: { componentName: "PageFlashSale" },
                                  })),
                                [nl]: { [tl]: "PageFlashSale", applink: !0 },
                              }),
                            Di ||
                              (Di = {
                                path: (0, qe.jt)(Qc, qe.Z6.FLASH_SALE),
                                exact: !0,
                                [zc]: "FlashSaleRedirect",
                                [el]:
                                  Li ||
                                  (Li = (0, Ve.Ds)({
                                    [rl]: () => n.e(152).then(n.bind(n, 61313)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "FlashSaleRedirect",
                                  applink: !0,
                                },
                              }),
                            ki ||
                              (ki = {
                                path: (0, qe.pQ)(qe.Z6.BRAND_SALE)(Qc),
                                exact: !0,
                                [zc]: "PageBrandSale",
                                [el]:
                                  Ui ||
                                  (Ui = (0, $e.Z)("mobilemall-brandsale", {
                                    [ol]: "app.web_fe.mobile.flashsale",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                    [ll]: { componentName: "PageBrandSale" },
                                  })),
                                [nl]: { [tl]: "PageBrandSale" },
                              }),
                            Mi ||
                              (Mi = {
                                path: (0, qe.jt)(Qc, qe.Z6.BRAND_SALE),
                                exact: !0,
                                [zc]: "BrandSaleRedirect",
                                [el]:
                                  Fi ||
                                  (Fi = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(1815).then(n.bind(n, 37335)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "BrandSaleRedirect" },
                              }),
                            Zi ||
                              (Zi = {
                                path: Ke.H_l,
                                exact: !0,
                                [dl]: ["mobilemall-collectionfe-allcampaigns"],
                                [zc]: "PageCampaigns",
                                [el]:
                                  Hi ||
                                  (Hi = (0, $e.Z)(
                                    "mobilemall-collectionfe-allcampaigns",
                                    {
                                      [ol]: "app.web_fe.mobile.collectionfe",
                                      [il]: !1,
                                      [sl]: !0,
                                      [cl]: !0,
                                      [ll]: {
                                        slotName:
                                          "mobilemall-collectionfe-allcampaigns",
                                      },
                                    }
                                  )),
                                [nl]: { [tl]: "PageCampaigns" },
                              }),
                            Gi ||
                              (Gi = {
                                path: Ke.Iio,
                                exact: !0,
                                [dl]: ["mobilemall-bundledeal"],
                                [zc]: "PdpBundleDealLandingPage",
                                [el]:
                                  xi ||
                                  (xi = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(4149).then(n.bind(n, 96961)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PdpBundleDealLandingPage" },
                              }),
                            Wi ||
                              (Wi = {
                                path: Ke.uSj,
                                exact: !0,
                                [dl]: ["mobilemall-bundledeal"],
                                [zc]: "ShopBundleDealLandingPage",
                                [el]:
                                  Bi ||
                                  (Bi = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(7557).then(n.bind(n, 80316)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "ShopBundleDealLandingPage" },
                              }),
                            ji ||
                              (ji = {
                                path: [Ke.v3M, Ke.dS0],
                                exact: !0,
                                [zc]: "PdpAddOnDealsPage",
                                [el]:
                                  Vi ||
                                  (Vi = (0, Ve.Ds)({
                                    [rl]: () => n.e(818).then(n.bind(n, 1662)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PdpAddOnDealsPage" },
                              }),
                            $i ||
                              ($i = {
                                path: Ke.uh,
                                exact: !0,
                                [zc]: "ShopAddOnDealsPage",
                                [el]:
                                  Yi ||
                                  (Yi = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(8618).then(n.bind(n, 89286)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "ShopAddOnDealsPage" },
                              }),
                            qi ||
                              (qi = {
                                path: [
                                  "/shopee-coins",
                                  "/koin-shopee",
                                  "/shopee-coins-v2",
                                ],
                                exact: !0,
                                [dl]: ["mobilemall-coinsrewardpage"],
                                [zc]: "PageCoinsMicroApp",
                                [el]:
                                  Ki ||
                                  (Ki = (0, $e.Z)(
                                    "mobilemall-coinsrewardpage",
                                    {
                                      [ol]: "app.web_fe.mobile.coinsrewardpage",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !1,
                                    }
                                  )),
                                [nl]: {
                                  [tl]: "PageCoinsMicroApp",
                                  skipA2HS: !0,
                                },
                              }),
                            Qi ||
                              (Qi = {
                                path: ["/coins", "/coins/transaction/list"],
                                exact: !0,
                                [zc]: "RedirectToCoinsMobileHistory",
                                [el]:
                                  Xi ||
                                  (Xi = (0, $e.Z)("mobilemall-coins", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "RedirectToCoinsMobileHistory",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            zi ||
                              (zi = {
                                path: "/coins/expiration",
                                exact: !0,
                                [zc]: "RedirectToCoinsMobileExpiration",
                                [el]:
                                  Ji ||
                                  (Ji = (0, $e.Z)("mobilemall-coins", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "RedirectToCoinsMobileExpiration",
                                  skipA2HS: !0,
                                  forShopeeApp: "always",
                                },
                              }),
                            ts ||
                              (ts = {
                                path: [
                                  "/wallet_redirection/transaction_reference",
                                ],
                                exact: !0,
                                [zc]: "RedirectToWalletTransactionReference",
                                [el]:
                                  es ||
                                  (es = (0, $e.Z)("mobilemall-paymentfe", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "RedirectToWalletTransactionReference",
                                },
                              }),
                            rs ||
                              (rs = {
                                path: Ke.ySk,
                                exact: !0,
                                [zc]: "PageBuyWithGifts",
                                [el]:
                                  ns ||
                                  (ns = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(5325).then(n.bind(n, 58534)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageBuyWithGifts" },
                              }),
                            os ||
                              (os = {
                                path: Ke.Hdq,
                                exact: !0,
                                [zc]: "PageBuyWithGiftsSectionPreview",
                                [el]:
                                  as ||
                                  (as = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(9432).then(n.bind(n, 11610)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "PageBuyWithGiftsSectionPreview",
                                },
                              }),
                            ss ||
                              (ss = {
                                path: Ke.ekC,
                                exact: !0,
                                [zc]: "PurchaseWithPurchasePage",
                                [el]:
                                  is ||
                                  (is = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(7633).then(n.bind(n, 96289)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PurchaseWithPurchasePage" },
                              }),
                            ls ||
                              (ls = {
                                path: Ke.gsz,
                                exact: !0,
                                [dl]: [
                                  "mobilemall-shoppagesellervoucherpreview",
                                ],
                                [zc]: "ShopPageSellerVoucherPreview",
                                [el]:
                                  cs ||
                                  (cs = (0, $e.Z)(
                                    "mobilemall-shoppagesellervoucherpreview",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "ShopPageSellerVoucherPreview" },
                              }),
                            us ||
                              (us = {
                                path: [Ke.thN],
                                [dl]: ["mobilemall-formmanagement"],
                                [zc]: "ProgramForm",
                                [el]:
                                  ds ||
                                  (ds = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(8953).then(n.bind(n, 38418)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "ProgramForm" },
                              }),
                            _s ||
                              (_s = {
                                path: Ke.WSN,
                                exact: !0,
                                [dl]: ["mobilemall-pageitemrating"],
                                [zc]: "PageItemRatings",
                                [el]:
                                  ps ||
                                  (ps = (0, $e.Z)("mobilemall-pageitemrating", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageItemRatings" },
                              }),
                            fs ||
                              (fs = {
                                path: Ke.Ur5,
                                exact: !0,
                                [dl]: ["mobilemall-pageratingreport"],
                                [zc]: "PageRatingReport",
                                [el]:
                                  ms ||
                                  (ms = (0, $e.Z)(
                                    "mobilemall-pageratingreport",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageRatingReport" },
                              }),
                            Es ||
                              (Es = {
                                path: Ke.ZDl,
                                exact: !0,
                                [dl]: ["mobilemall-pageshoprating"],
                                [zc]: "PageShopRatings",
                                [el]:
                                  hs ||
                                  (hs = (0, $e.Z)("mobilemall-pageshoprating", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageShopRatings" },
                              }),
                            Ss ||
                              (Ss = {
                                path: [Ke.ole, Ke.KAe],
                                exact: !0,
                                [dl]: ["mobilemall-pagereplyrating"],
                                [zc]: "PageReplyRating",
                                [el]:
                                  gs ||
                                  (gs = (0, $e.Z)(
                                    "mobilemall-pagereplyrating",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageReplyRating" },
                              }),
                            Rs ||
                              (Rs = {
                                path: [
                                  Ke.AI1,
                                  Ke.nNA,
                                  Ke.I$6,
                                  (0, qe.pQ)(qe.Z6.ROUTE_OFFICIAL_SHOP_SEARCH)(
                                    Qc
                                  ),
                                  ...(0, qe.jt)(
                                    Qc,
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_SEARCH
                                  ),
                                ],
                                exact: !0,
                                [dl]: ["mobilemall-search-result-page"],
                                [zc]: "PageSearch",
                                [el]:
                                  Is ||
                                  (Is = (0, $e.Z)(
                                    "mobilemall-search-result-page",
                                    {
                                      [ol]: "app.web_fe.mobile.search",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !0,
                                    }
                                  )),
                                [nl]: { [tl]: "PageSearch", applink: !0 },
                              }),
                            bs ||
                              (bs = {
                                path: Ke.qPX,
                                exact: !0,
                                [dl]: ["mobilemall-search-intermediate-page"],
                                [zc]: "SearchIntermediatePageWrapper",
                                [el]:
                                  As ||
                                  (As = (0, $e.Z)(
                                    "mobilemall-search-intermediate-page",
                                    {
                                      [ol]: "app.web_fe.mobile.search",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !0,
                                    }
                                  )),
                                [nl]: {
                                  [tl]: "SearchIntermediatePageWrapper",
                                  skipA2HS: !0,
                                },
                              }),
                            Ps ||
                              (Ps = {
                                path: Ke.yJy,
                                exact: !0,
                                [dl]: ["mobilemall-search-user-page"],
                                [zc]: "SearchUserPage",
                                [el]:
                                  Os ||
                                  (Os = (0, $e.Z)(
                                    "mobilemall-search-user-page",
                                    {
                                      [ol]: "app.web_fe.mobile.search",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !0,
                                    }
                                  )),
                                [nl]: { [tl]: "SearchUserPage" },
                              }),
                            Ts ||
                              (Ts = {
                                path: [Ke.ace, Ke.tZn, Ke.ieA],
                                exact: !0,
                                [dl]: ["mobilemall-categoryfe"],
                                [zc]: "PageCategory",
                                [el]:
                                  Cs ||
                                  (Cs = (0, $e.Z)("mobilemall-categoryfe", {
                                    [ol]: "app.web_fe.mobile.categoryfe",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !0,
                                  })),
                                [nl]: { [tl]: "PageCategory" },
                              }),
                            vs ||
                              (vs = {
                                path: Ke.qj7,
                                exact: !0,
                                [dl]: ["mobilemall-dd-landing-page"],
                                [zc]: "PageDailyDiscover",
                                [el]:
                                  ys ||
                                  (ys = (0, $e.Z)(
                                    "mobilemall-dd-landing-page",
                                    {
                                      [ol]: "app.web_fe.mobile.dd",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !0,
                                      [ll]: {
                                        componentName: "PageDailyDiscover",
                                      },
                                    }
                                  )),
                                [nl]: { [tl]: "PageDailyDiscover" },
                              }),
                            Ns ||
                              (Ns = {
                                path: [Ke.mD6, Ke.Mcf],
                                exact: !0,
                                [dl]: [
                                  "mobilemall-rcmd-home-top-products-page",
                                ],
                                [zc]: "TopProductPage",
                                [el]:
                                  ws ||
                                  (ws = (0, $e.Z)(
                                    "mobilemall-rcmd-home-top-products-page",
                                    {
                                      [ol]: "app.web_fe.mobile.rcmd",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !1,
                                    }
                                  )),
                                [nl]: { [tl]: "TopProductPage" },
                              }),
                            Ds ||
                              (Ds = {
                                path: Ke.adt,
                                exact: !0,
                                [dl]: [
                                  "mobilemall-rcmd-home-top-products-list-page",
                                ],
                                [zc]: "PageTopProductsMoreLists",
                                [el]:
                                  Ls ||
                                  (Ls = (0, $e.Z)(
                                    "mobilemall-rcmd-home-top-products-list-page",
                                    { [ol]: "", [il]: !0, [sl]: !1, [cl]: !1 }
                                  )),
                                [nl]: { [tl]: "PageTopProductsMoreLists" },
                              }),
                            ks ||
                              (ks = {
                                path: Ke.rAz,
                                exact: !0,
                                [dl]: [
                                  "mobilemall-rcmd-featured-collections-list-page",
                                ],
                                [zc]: "PageFeaturedCollections",
                                [el]:
                                  Us ||
                                  (Us = (0, $e.Z)(
                                    "mobilemall-rcmd-featured-collections-list-page",
                                    {
                                      [ol]: "app.web_fe.mobile.rcmd",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !1,
                                    }
                                  )),
                                [nl]: { [tl]: "PageFeaturedCollections" },
                              }),
                            Ms ||
                              (Ms = {
                                path: Ke.B_j,
                                exact: !0,
                                [dl]: [
                                  "mobilemall-rcmd-featured-collections-page",
                                ],
                                [zc]: "PageFeaturedCollectionItems",
                                [el]:
                                  Fs ||
                                  (Fs = (0, $e.Z)(
                                    "mobilemall-rcmd-featured-collections-page",
                                    {
                                      [ol]: "app.web_fe.mobile.rcmd",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !1,
                                    }
                                  )),
                                [nl]: { [tl]: "PageFeaturedCollectionItems" },
                              }),
                            Zs ||
                              (Zs = {
                                path: Ke.heM,
                                exact: !0,
                                [dl]: ["mobilemall-rcmd-fsp-page"],
                                [zc]: "PageFindSimilarProducts",
                                [el]:
                                  Hs ||
                                  (Hs = (0, $e.Z)("mobilemall-rcmd-fsp-page", {
                                    [ol]: "app.web_fe.mobile.rcmd",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageFindSimilarProducts" },
                              }),
                            Gs ||
                              (Gs = {
                                path: Ke.g8j,
                                exact: !0,
                                [dl]: ["mobilemall-rcmd-pdp-ftss-page"],
                                [zc]: "PageFromSameShop",
                                [el]:
                                  xs ||
                                  (xs = (0, $e.Z)(
                                    "mobilemall-rcmd-pdp-ftss-page",
                                    {
                                      [ol]: "app.web_fe.mobile.rcmd",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !1,
                                    }
                                  )),
                                [nl]: { [tl]: "PageFromSameShop" },
                              }),
                            Ws ||
                              (Ws = {
                                path: [Ke.LT, Ke.C5Y],
                                exact: !0,
                                [zc]: "RecommendProductPage",
                                [el]:
                                  Bs ||
                                  (Bs = (0, $e.Z)(
                                    "mobilemall-flashsalesoldout",
                                    {
                                      [ol]: "app.web_fe.mobile.flashsale",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !0,
                                      [ll]: {
                                        componentName: "FlashSaleSoldOut",
                                      },
                                    }
                                  )),
                                [nl]: { [tl]: "RecommendProductPage" },
                              }),
                            js ||
                              (js = {
                                path: [
                                  (0, qe.pQ)(
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU
                                  )(Qc),
                                  ...(0, qe.jt)(
                                    Qc,
                                    qe.Z6.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU
                                  ),
                                  (0, qe.pQ)(
                                    qe.Z6
                                      .ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR
                                  )(Qc),
                                  ...(0, qe.jt)(
                                    Qc,
                                    qe.Z6
                                      .ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR
                                  ),
                                ],
                                exact: !0,
                                [dl]: [
                                  "mobilemall-rcmd-mall-just-for-you-page",
                                ],
                                [zc]: "OfficialShopPageRecommendSeeMore",
                                [el]:
                                  Vs ||
                                  (Vs = (0, $e.Z)(
                                    "mobilemall-rcmd-mall-just-for-you-page",
                                    {
                                      [ol]: "app.web_fe.mobile.rcmd",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !1,
                                    }
                                  )),
                                [nl]: {
                                  [tl]: "OfficialShopPageRecommendSeeMore",
                                },
                              }),
                            $s ||
                              ($s = {
                                path: Ke.D$R,
                                exact: !0,
                                [dl]: ["mobilemall-seo-brand-page"],
                                [zc]: "PageSeoBrand",
                                [el]:
                                  Ys ||
                                  (Ys = (0, $e.Z)("mobilemall-seo-brand-page", {
                                    [ol]: "app.web_fe.mobile.search",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "PageSeoBrand" },
                              }),
                            qs ||
                              (qs = {
                                path: Ke.xxI,
                                exact: !0,
                                [dl]: ["mobilemall-rcmd-shop-category-page"],
                                [zc]: "PageShopCategory",
                                [el]:
                                  Ks ||
                                  (Ks = (0, $e.Z)(
                                    "mobilemall-rcmd-shop-category-page",
                                    {
                                      [ol]: "app.web_fe.mobile.rcmd",
                                      [il]: !1,
                                      [sl]: !1,
                                      [cl]: !1,
                                    }
                                  )),
                                [nl]: { [tl]: "PageShopCategory" },
                              }),
                            Qs ||
                              (Qs = {
                                path: "/broadcast/landing",
                                exact: !0,
                                [dl]: ["mobilemall-chatbroadcast"],
                                [zc]: "PageBroadcastLanding",
                                [el]:
                                  Xs ||
                                  (Xs = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([n.e(1474), n.e(2986)]).then(
                                        n.bind(n, 30964)
                                      ),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageBroadcastLanding" },
                              }),
                            zs ||
                              (zs = {
                                path: ["/scp/*", "/scp_tmp/*"],
                                exact: !0,
                                [dl]: ["mobilemall-shopcustompage"],
                                [zc]: "ShopCustomPage",
                                [el]:
                                  Js ||
                                  (Js = (0, $e.Z)("mobilemall-shopcustompage", {
                                    [ol]: "",
                                    [il]: !0,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "ShopCustomPage",
                                  forShopeeApp: "always",
                                },
                              }),
                            tc ||
                              (tc = {
                                path: "/shop/:shopId/item/:itemId/report",
                                [zc]: "ProductReport",
                                [el]:
                                  ec ||
                                  (ec = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.all([
                                        n.e(4538),
                                        n.e(335),
                                        n.e(9214),
                                      ]).then(n.bind(n, 85900)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "ProductReport" },
                              }),
                            rc ||
                              (rc = {
                                path: "/popup/",
                                [zc]: "Popup",
                                [el]:
                                  nc ||
                                  (nc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(6556).then(n.bind(n, 55370)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "Popup" },
                              }),
                            oc ||
                              (oc = {
                                path: ["/", "/__preview__/home"],
                                exact: !0,
                                [dl]: ["mobilemall-homepagefe"],
                                [zc]: "HomePage",
                                [el]:
                                  ac ||
                                  (ac = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(8460).then(n.bind(n, 30693)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "HomePage", applink: !0 },
                              }),
                            sc ||
                              (sc = {
                                path: Ke.X7q,
                                exact: !0,
                                [zc]: "FooterInfoBlockPreview",
                                [el]:
                                  ic ||
                                  (ic = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(8225).then(n.bind(n, 84553)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "FooterInfoBlockPreview" },
                              }),
                            lc ||
                              (lc = {
                                path: Ke.WT1,
                                exact: !0,
                                [dl]: ["mobilemall-collectionfe-shop-clp"],
                                [zc]: "PageShopCollectionLanding",
                                [el]:
                                  cc ||
                                  (cc = (0, $e.Z)(
                                    "mobilemall-collectionfe-shop-clp",
                                    {
                                      [ol]: "app.web_fe.mobile.collectionfe",
                                      [il]: !1,
                                      [sl]: !0,
                                      [cl]: !0,
                                      [ll]: {
                                        slotName:
                                          "mmobilemall-collectionfe-shop-clp",
                                      },
                                    }
                                  )),
                                [nl]: { [tl]: "PageShopCollectionLanding" },
                              }),
                            uc ||
                              (uc = {
                                path: Ke.tEh,
                                exact: !0,
                                [dl]: ["mobilemall-collectionfe-product-clp"],
                                [zc]: "PageProductCollectionLanding",
                                [el]:
                                  dc ||
                                  (dc = (0, $e.Z)(
                                    "mobilemall-collectionfe-product-clp",
                                    {
                                      [ol]: "app.web_fe.mobile.collectionfe",
                                      [il]: !1,
                                      [sl]: !0,
                                      [cl]: !0,
                                      [ll]: {
                                        slotName:
                                          "mobilemall-collectionfe-product-clp",
                                      },
                                    }
                                  )),
                                [nl]: { [tl]: "PageProductCollectionLanding" },
                              }),
                            _c ||
                              (_c = {
                                path: Ke.duu,
                                exact: !0,
                                [dl]: ["mobilemall-collectionfe-entry-clp"],
                                [zc]: "PageCampaignEntryCollection",
                                [el]:
                                  pc ||
                                  (pc = (0, $e.Z)(
                                    "mobilemall-collectionfe-entry-clp",
                                    {
                                      [ol]: "app.web_fe.mobile.collectionfe",
                                      [il]: !1,
                                      [sl]: !0,
                                      [cl]: !0,
                                      [ll]: {
                                        slotName:
                                          "mobilemall-collectionfe-entry-clp",
                                      },
                                    }
                                  )),
                                [nl]: { [tl]: "PageCampaignEntryCollection" },
                              }),
                            fc ||
                              (fc = {
                                path: [...ze.Or, ...ze.km],
                                exact: !0,
                                [zc]: "RouteLegacyNotFound",
                                [el]:
                                  mc ||
                                  (mc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3892).then(n.bind(n, 24850)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteLegacyNotFound" },
                              }),
                            Ec ||
                              (Ec = {
                                path: [...ze.e6],
                                exact: !1,
                                [zc]: "RouteLegacyNotFound",
                                [el]:
                                  hc ||
                                  (hc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3892).then(n.bind(n, 24850)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteLegacyNotFound" },
                              }),
                            Sc ||
                              (Sc = {
                                path: [
                                  "/buyer/payment/(airpay_cc|akulaku|bank_transfer|bca_one_klik|commit|cybs|dragonpay|esun|esun_cb|ipay|kredivo|molpay|nicepay_cc|options|select_bank_account|bridge_safe/proxy|ipay88_cc/mall_response_url|mpgs_cc/add_card|buyer/payment/bridge_safe/add_card/.*?|\\d+/cybs|\\d+/ipay88_cc|stripe_cc/add_card_v2|stripe_cc/commit|spm/fixed_account)/",
                                  "/buyer/payment/spm/action/(otp|add_new_card/api|fraud_otp.*?)/",
                                  "/buyer/payment/spm/ui/payment/(commit|init/checkout)/",
                                ],
                                exact: !1,
                                [zc]: "RouteLegacyNotFound",
                                [el]:
                                  gc ||
                                  (gc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3892).then(n.bind(n, 24850)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteLegacyNotFound" },
                              }),
                            Rc ||
                              (Rc = {
                                path: [
                                  "/search-item",
                                  "/item",
                                  "/buyer/return/add/shopid/:shopId(\\d+)/orderid/:orderId(\\d+)/",
                                  "/buyer/return/logistics/select_address/",
                                  "/buyer/return/view/:returnId(\\d+)/",
                                  "/buyer/return/view/orderid/:orderId(\\d+)/",
                                  "/buyer/return/:returnId(\\d+)/view_return_label/",
                                ],
                                exact: !0,
                                [zc]: "RouteRedirectLegacyPaths",
                                [el]:
                                  Ic ||
                                  (Ic = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.resolve().then(n.bind(n, 54554)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "RouteRedirectLegacyPaths",
                                  forShopeeApp: "always",
                                },
                              }),
                            bc ||
                              (bc = {
                                path: [
                                  ...ze.QS,
                                  ...ze.zz,
                                  Ke.xrH,
                                  "/order/buyer/cancelled/:orderId",
                                  "/order/buyer/completed/:orderId",
                                  "/order/buyer/to_pay/:checkoutId",
                                  "/order/buyer/to_receive/:orderId",
                                  "/order/buyer/to_ship/:orderId",
                                  "/order/seller/cancelled/:orderId",
                                  "/order/seller/completed/:orderId",
                                  "/order/seller/to_pay/:checkoutId",
                                  "/order/seller/to_receive/:orderId",
                                  "/order/seller/to_ship/:orderId",
                                ],
                                exact: !0,
                                [zc]: "RouteRedirectLegacyPaths",
                                [el]:
                                  Ac ||
                                  (Ac = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.resolve().then(n.bind(n, 54554)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteRedirectLegacyPaths" },
                              }),
                            Pc ||
                              (Pc = {
                                path: [...ze.fK],
                                exact: !1,
                                [zc]: "RouteRedirectLegacyPaths",
                                [el]:
                                  Oc ||
                                  (Oc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      Promise.resolve().then(n.bind(n, 54554)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteRedirectLegacyPaths" },
                              }),
                            Cc ||
                              (Cc = {
                                path: [...et.xf, ...et.NU],
                                exact: !0,
                                [zc]: "RouteRedirectToNginx",
                                [el]: In,
                                [nl]: { [tl]: "RouteRedirectToNginx" },
                              }),
                            Tc ||
                              (Tc = {
                                path: [...et.JG],
                                exact: !1,
                                [zc]: "RouteRedirectToNginx",
                                [el]: In,
                                [nl]: { [tl]: "RouteRedirectToNginx" },
                              }),
                            yc ||
                              (yc = {
                                path: [Ke.yl6, ...ze.MW, ...ze.Vi],
                                exact: !0,
                                [zc]: "RouteRedirectToWSA",
                                [el]: bn,
                                [nl]: { [tl]: "RouteRedirectToWSA" },
                              }),
                            vc ||
                              (vc = {
                                path: [...ze.qp],
                                exact: !1,
                                [zc]: "RouteRedirectToWSA",
                                [el]: bn,
                                [nl]: { [tl]: "RouteRedirectToWSA" },
                              }),
                            Nc ||
                              (Nc = {
                                path: [Ke.cP$, Ke.tXA],
                                exact: !0,
                                [dl]: ["mobilemall-shop"],
                                [zc]: "ShopeeShopPage",
                                [el]:
                                  wc ||
                                  (wc = (0, $e.Z)("mobilemall-shop", {
                                    [ol]: "app.web_fe.mobile.shop",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: { [tl]: "ShopeeShopPage", applink: !0 },
                              }),
                            Dc ||
                              (Dc = {
                                path: Ke.ga9,
                                exact: !1,
                                [dl]: ["mobilemall-shop"],
                                [zc]: "ShopeeShopPageOld",
                                [el]:
                                  Lc ||
                                  (Lc = (0, $e.Z)("mobilemall-shop", {
                                    [ol]: "app.web_fe.mobile.shop",
                                    [il]: !1,
                                    [sl]: !1,
                                    [cl]: !1,
                                  })),
                                [nl]: {
                                  [tl]: "ShopeeShopPageOld",
                                  applink: !0,
                                },
                              }),
                            "live" !== Jc && "liveish" !== Jc
                              ? kc ||
                                (kc = {
                                  path: Ke.BTf,
                                  exact: !0,
                                  [zc]: "PageDevtool",
                                  [el]:
                                    Uc ||
                                    (Uc = (0, Ve.Ds)({
                                      [rl]: () =>
                                        n.e(9611).then(n.bind(n, 89914)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "PageDevtool" },
                                })
                              : null,
                            "live" === Jc
                              ? null
                              : Mc ||
                                (Mc = {
                                  path: Ke.GnA,
                                  exact: !0,
                                  [zc]: "BannerSDKPlayground",
                                  [el]:
                                    Fc ||
                                    (Fc = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(1651),
                                          n.e(2971),
                                          n.e(642),
                                        ]).then(n.bind(n, 1703)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "BannerSDKPlayground" },
                                }),
                            "live" === Jc
                              ? null
                              : Zc ||
                                (Zc = {
                                  path: Ke.UJ0,
                                  exact: !0,
                                  [zc]: "ComponentBuilderPlayground",
                                  [el]:
                                    Hc ||
                                    (Hc = (0, Ve.Ds)({
                                      [rl]: () =>
                                        Promise.all([
                                          n.e(2971),
                                          n.e(5479),
                                        ]).then(n.bind(n, 97227)),
                                      [al]: Ye.Z,
                                    })),
                                  [nl]: { [tl]: "ComponentBuilderPlayground" },
                                }),
                            Gc ||
                              (Gc = {
                                path: Qe.yN,
                                exact: !1,
                                [zc]: "RouteRedirectToMePage",
                                [el]:
                                  xc ||
                                  (xc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(7177).then(n.bind(n, 72295)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteRedirectToMePage" },
                              }),
                            Wc ||
                              (Wc = {
                                path: Ke.cLk,
                                exact: !0,
                                [zc]: "RouteRedirectForSBrowser",
                                [el]:
                                  Bc ||
                                  (Bc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(1615).then(n.bind(n, 54349)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "RouteRedirectForSBrowser" },
                              }),
                            jc ||
                              (jc = {
                                path: [
                                  "/addresses/:addressId(\\d+)",
                                  "/categories/:catId(\\d+)",
                                  Ke.J_k,
                                  Ke.ga9,
                                  "/shop_detail/:shopId(\\d+)",
                                ],
                                exact: !0,
                                [zc]: "OthersRedirectToRN",
                                [el]:
                                  Vc ||
                                  (Vc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3019).then(n.bind(n, 75169)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "OthersRedirectToRN",
                                  forShopeeApp: "always",
                                },
                              }),
                            Yc ||
                              (Yc = {
                                path: "/:username([a-zA-Z0-9_.]{2,30})/:itemId(\\d+)",
                                exact: !0,
                                [zc]: "RouteRedirectLegacyPaths",
                                [el]: On.default,
                                [nl]: {
                                  [tl]: "RouteRedirectLegacyPaths",
                                  forShopeeApp: "always",
                                },
                              }),
                            Kc ||
                              (Kc = {
                                path: "*",
                                exact: !0,
                                [zc]: "PageNotFound",
                                [el]:
                                  $c ||
                                  ($c = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3892).then(n.bind(n, 24850)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: { [tl]: "PageNotFound" },
                              }),
                            Xc ||
                              (Xc = {
                                path: "*",
                                exact: !0,
                                [zc]: "RouteRedirectToRN",
                                [el]:
                                  qc ||
                                  (qc = (0, Ve.Ds)({
                                    [rl]: () =>
                                      n.e(3019).then(n.bind(n, 75169)),
                                    [al]: Ye.Z,
                                  })),
                                [nl]: {
                                  [tl]: "RouteRedirectToRN",
                                  forShopeeApp: "always",
                                },
                              }),
                          ].filter((e) => !!e);
                          for (const e of _l)
                            e.routes &&
                              e.getRoutesUncached &&
                              (e.routes = e.getRoutesUncached());
                          return _l;
                        })()),
                        (o =
                          (0, ml.xT)() || (0, ml.pf)()
                            ? (0, ml.Rl)() || r
                              ? e
                              : e.filter((e) => {
                                  const { forShopeeApp: t = !1 } =
                                    (e || {}).params || {};
                                  return (
                                    "always" === t ||
                                    !(!a || "try-rn-first" !== t)
                                  );
                                })
                            : e))
                      );
                      var e;
                    },
                    clearRootRoutesCache: function () {
                      o = null;
                    },
                  };
                })(),
                a = window.location;
              if (
                a.hostname.startsWith("mall.") &&
                "VN" === __LOCALE__ &&
                !a.pathname.match(
                  /^(\/payment\/account-linking\/|\/s\/browser\/payment\/account-linking\/)/
                )
              )
                return void a.replace(a.href.replace("mall.", ""));
              window.document.documentElement.setAttribute("lang", du),
                (function (e) {
                  const t = (function ({
                    appId: e,
                    apmsSecretKey: t,
                    bundleVersion: n,
                    bundleName: r,
                    buildId: a,
                    env: o,
                    locale: i,
                    platform: s,
                    getRoutes: c,
                    sample: l,
                  }) {
                    const d = (0, kl.ej)("SPC_U"),
                      u = {
                        de_app_id: e,
                        secret_key: t,
                        js_bundle_name: r,
                        js_bundle_version: n,
                        region: i,
                        js_build_id: a,
                        environment: "live",
                        user_id: d,
                        logger: "test" === o,
                      },
                      p = {
                        sample: null != l ? l : "live" === o ? 0.05 : 1,
                        beforeAddData(e) {
                          if (
                            (function (e) {
                              for (const t of Ud) if (t.test(e)) return !0;
                              for (const t of kd) if (t.test(e)) return !0;
                              return !1;
                            })(
                              `${e.js_error_name}: ${e.js_error_message}\n${e.js_error_stack}`
                            )
                          )
                            return !1;
                          const t = (e.js_data_field = (0, y.Z)(
                            {},
                            e.js_data_field
                          ));
                          (t.pageName = (function () {
                            const e = c();
                            if (!e) return "";
                            const t = (0, fl.f)(e, self.location.pathname);
                            if (t && Array.isArray(t)) {
                              const e = t[t.length - 1];
                              if (e && e.route && e.route.name)
                                return e.route.name;
                            }
                            return "";
                          })()),
                            (t.platform = s),
                            (t.env = o),
                            (t.locale = i);
                          const r = Gd(e);
                          if (r)
                            if (r.type === xd.MICRO_APP)
                              (t.microApp = r.moduleName),
                                (t.moduleName = r.moduleName),
                                (t.projectName = r.projectName),
                                (t.hostRelease = n);
                            else if (r.type === xd.PROJECT) {
                              var a;
                              (t.inferredProject = r.name),
                                (t.hostRelease = n),
                                Object.entries(
                                  null != (a = r.customTags) ? a : {}
                                ).forEach(([e, n]) => {
                                  void 0 === t[e] && (t[e] = n);
                                });
                            }
                          return t;
                        },
                        transport(e) {
                          const t = Gd(e);
                          if (!t) return {};
                          if (t.type === xd.MICRO_APP) {
                            var r;
                            const e = `${t.projectName}-${t.moduleName}`,
                              n = (function (e) {
                                if (!e) return null;
                                const t =
                                  null == P.ZP
                                    ? void 0
                                    : P.ZP.getSharedMemory("buildInformation");
                                if (t) {
                                  const n = t.get(e);
                                  if (n) return n;
                                }
                                return null;
                              })(e),
                              a =
                                null != (r = null == n ? void 0 : n.tag)
                                  ? r
                                  : null == n
                                  ? void 0
                                  : n.lastCommitHash;
                            return {
                              js_build_id: null == n ? void 0 : n.buildId,
                              js_bundle_name: e,
                              js_bundle_version: a,
                            };
                          }
                          return t.type === xd.PROJECT
                            ? {
                                js_bundle_name: t.name,
                                js_bundle_version: n,
                                js_build_id: a,
                              }
                            : {};
                        },
                      };
                    return (
                      (0, jd.kA)({ config: u, exception: p }),
                      {
                        addBreadcrumb({
                          type: e,
                          category: t,
                          message: n,
                          data: r,
                        }) {
                          (0, Yd.Og)({
                            type: e,
                            category: t,
                            message: n,
                            data: r,
                          });
                        },
                        captureEvent: (e) => (
                          (0, Yd.jk)({ message: e.message, data: $d(e) }), ""
                        ),
                        captureException: (e, t) => (
                          (0, Yd.jk)({ error: e, data: $d(t) }), ""
                        ),
                        captureMessage: (e, t) => (
                          (0, Yd.jk)({ message: e, data: $d(t) }), ""
                        ),
                        onLoad(e) {
                          e();
                        },
                        setTag(e, t) {
                          void 0 === t ? (0, jd.VG)(e) : (0, jd.dZ)(e, t);
                        },
                        configureScope: Kd,
                        getCurrentScope: Kd,
                        forceLoad: Kd,
                        init: Kd,
                        showReportDialog: Kd,
                        withScope: Kd,
                      }
                    );
                  })({
                    appId: "71",
                    apmsSecretKey: "1494d50178e3494eb902fd09cf45d4e7",
                    bundleName: "mobilemall-static",
                    bundleVersion: "sw-WEBFE-MKP-2025.03.v1-1",
                    buildId: "1229_1741146834",
                    locale: Xd,
                    env: qd,
                    platform: "rw",
                    getRoutes: e,
                  });
                  window.Sentry = {
                    addBreadcrumb: (...e) => t.addBreadcrumb(...e),
                    captureEvent: (...e) => t.captureEvent(...e),
                    captureException: (...e) => t.captureException(...e),
                    captureMessage: (...e) => t.captureMessage(...e),
                    onLoad: (...e) => t.onLoad(...e),
                    setTag: (...e) => t.setTag(...e),
                    configureScope: (...e) => t.configureScope(...e),
                    getCurrentScope: (...e) => t.getCurrentScope(...e),
                    forceLoad: (...e) => t.forceLoad(...e),
                    init: (...e) => t.init(...e),
                    showReportDialog: (...e) => t.showReportDialog(...e),
                    withScope: (...e) => t.withScope(...e),
                  };
                })(t),
                await cu(),
                (function (e) {
                  (I.perfTrackerInstance.appRouterConfig = e()),
                    m.history &&
                      m.history.listen(I.perfTrackerInstance.handleNavigate);
                })(t),
                await cu(),
                (0, I.startApmsPlatformTracking)({
                  apmsConfig: {
                    app_name: "rw-platform",
                    secret_key:
                      "live" === uu || "liveish" === uu
                        ? "e925ddf04c5ceaefeb4c5339641e42132342afb592103eef7d10d500462953d9"
                        : "a9dcf67f52504e1b9040db39394a51a50a6dcedb5c6c5860dee79cc5ceb95827",
                    app_version: "sw-WEBFE-MKP-2025.03.v1-1",
                  },
                }),
                I.perfTrackerInstance.startTrace("initialRender"),
                await cu(),
                Be(),
                await cu(),
                (0, Dd.on)(Ld, "RW_HOST"),
                (0, I.markPerfMetric)("initAsync"),
                await Promise.all([
                  lu(Ld.fetchTranslationCollection, "fetchTranslation", 525),
                  lu(hu, "fetchFeatureToggle"),
                  lu(Iu, "sapLoadTime").catch((e) => {
                    var t;
                    null == (t = window) ||
                      null == (t = t.Sentry) ||
                      t.captureException(new Error(`SAP HOOK JS Error : ${e}`));
                  }),
                  lu(Eu, "fetchAccountInfo"),
                ]),
                await cu(),
                r();
              const o = t();
              (I.perfTrackerInstance.appRouterConfig = o),
                null == (e = window) ||
                  null == e.requestIdleCallback ||
                  e.requestIdleCallback(su),
                await lu(mu, "renderTime", t),
                await lu(fu, "serviceworkerRegister"),
                window.addEventListener("visibilitychange", Su);
            })();
          });
      });
    },
    33822: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => f });
      var r = n(7957),
        a = n(38918),
        o = n(42790),
        i = n(48156),
        s = n(9611),
        c = n(43482),
        l = n(53463),
        d = n(11804),
        u = n(88064);
      const p = {
          live: "order_conversion",
          liveish: "order_conversion",
          test: "order_conversion_test",
          uat: "order_conversion_uat",
          stable: "",
          staging: "order_conversion_staging",
        }[(0, n(96662).dU)()],
        _ = ["forceUIRevamp"],
        m = () => null,
        f = function (e) {
          let { forceUIRevamp: t } = e,
            n = (0, r.Z)(e, _);
          const { slotName: f } = (({ forceUIRevamp: e } = {}) => {
              const [t, n] = (0, i.JS)(p, "opc_revamp_web_holdout"),
                [r, a] = (0, i.vi)(p, "order.opc_revamp_web"),
                o = "mobilemall-checkout-norevamp",
                _ = "mobilemall-checkout",
                m = (() => {
                  try {
                    return JSON.parse(
                      r || (null == t ? void 0 : t.parameter) || "{}"
                    );
                  } catch (e) {
                    return {};
                  }
                })(),
                f = (0, s.ML)("opc_revamp_web"),
                {
                  mode: h,
                  revampId: E,
                  revamp_newPaymentEntrance: g,
                } = f instanceof Object ? f : m;
              return (
                !E ||
                  e ||
                  (0, c.isFeatureEnabled)(l.vd) ||
                  d.ZP.getSharedMemory("checkout-web-utils").set(
                    "opc-revamp-id",
                    !0
                  ),
                {
                  slotName:
                    void 0 !== e
                      ? e
                        ? _
                        : o
                      : (0, c.isFeatureEnabled)(l.S3)
                      ? _
                      : (0, c.isFeatureEnabled)(l.vd)
                      ? o
                      : (n !== u.ZP.OK && n !== u.ZP.ERR) ||
                        (a !== u.ZP.OK && a !== u.ZP.ERR)
                      ? void 0
                      : "revamp" === h
                      ? _
                      : o,
                  revampId: E,
                  revamp_newPaymentEntrance: g,
                }
              );
            })({ forceUIRevamp: t }),
            h = a.useMemo(() => (f ? (0, o.Z)(f, { skipSsr: !0 }) : m), [f]);
          return a.createElement(h, n);
        };
    },
    54554: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => w });
      var r = n(61934),
        a = n(38918),
        o = n.n(a),
        i = n(25514),
        s = n(52812),
        c = n(11793),
        l = n(59711),
        d = n(80924),
        u = n(83092),
        p = n(26011);
      const { get: _ } = c.FetchUtils;
      var m = n(69391),
        f = n(77317),
        h = n(13787),
        E = n(72535);
      const { ROOT_DOMAIN: g } = c.config,
        S = "/seller/portal/",
        I = { [S]: !0 },
        R = ["__dsrn__", "tried_rn"];
      function A(e, t, n) {
        const a = (0, r.Z)({}, e);
        return (
          t &&
            t.forEach((e) => {
              delete a[e];
            }),
          (0, f.Wc)(a, n)
        );
      }
      function b(e, t, n) {
        return A((0, f.AW)(e), t, n);
      }
      const O = (0, h.uJ)((0, E.uU)(l.$Hi)),
        P = (0, h.uJ)((0, E.uU)(l.G40)),
        C = (e, t) => O.getUrl({ orderId: t.params.orderId || "" }),
        T = (e, t) => P.getUrl({ checkoutId: t.params.checkoutId || "" }),
        y = {
          "/buyer/return/add/shopid/:shopId(\\d+)/orderid/:orderId(\\d+)/": (
            e,
            t
          ) => `/return/request/option/${t.params.orderId}`,
          "/buyer/return/logistics/select_address/": (e) => {
            const { return_id: t } = (0, f.AW)(e.search);
            return `/return/select-shipping-option/${t}`;
          },
          "/buyer/return/view/:returnId(\\d+)/": (e, t) =>
            `/return/detail/returnid/${t.params.returnId}`,
          "/buyer/return/view/orderid/:orderId(\\d+)/": (e, t) =>
            `/return/detail/orderid/${t.params.orderId}`,
          "/buyer/return/:returnId(\\d+)/view_return_label/": (e, t) =>
            `/refund-return/return-instructions/${t.params.returnId}`,
          "/coins/expiry": "/coins",
          "/edit_addresses": d.bz,
          "/item": (e) => {
            const t = (0, f.AW)(e.search),
              n = (0, f.AW)(e.hash.substring(1)),
              r = n.shopid || t.sid || t.shopid,
              a = n.itemid || t.iid || t.itemid;
            return r && a
              ? p.O.getUrl({ shopId: r, itemId: a }) +
                  A(t, [...R, "sid", "shopid", "iid", "itemid"]) +
                  `#${A(n, ["shopid", "itemid"], !0)}`
              : l.XX0;
          },
          "/order/buyer/cancelled/:orderId": C,
          "/order/buyer/completed/:orderId": C,
          "/order/buyer/to_pay/:checkoutId": T,
          "/order/buyer/to_receive/:orderId": C,
          "/order/buyer/to_ship/:orderId": C,
          [l.xrH]: (e) => {
            const { orderid: t, checkoutid: n } = (0, f.AW)(e.search);
            return n
              ? P.getUrl({ checkoutId: n })
              : t
              ? O.getUrl({ orderId: t })
              : l.XX0;
          },
          "/order/seller/cancelled/:orderId": C,
          "/order/seller/completed/:orderId": C,
          "/order/seller/to_pay/:checkoutId": T,
          "/order/seller/to_receive/:orderId": C,
          "/order/seller/to_ship/:orderId": C,
          "/shop/:shopid(\\d+)/item/:itemid(\\d+)/": (e, t) => {
            const { shopid: n, itemid: r } = t.params;
            return n && r
              ? p.O.getUrl({ shopId: n, itemId: r }) + b(e.search, R) + e.hash
              : l.XX0;
          },
          "/search-item": (e) => {
            const t = (0, f.AW)(e.search),
              n = {};
            return (
              (n.keyword = t.search),
              (n.shop = t.shopid),
              (n.shopCollection = t.shop_categoryids),
              (n.originalCategoryId = t.original_categoryid),
              (n.category = t.categoryid),
              (n.subcategory = t.sub_categoryid),
              (n.page = t.page),
              u.yC.getUrl(n)
            );
          },
          [S]: "https://seller." + g,
          [l.n6n]: l.oxE,
          "/search-user": (e) => {
            const { keyword: t } = (0, f.AW)(e.search);
            return u.qz.getUrl({ keyword: t || "" });
          },
          "/:username([a-zA-Z0-9_.]{2,30})/:itemId(\\d+)": async (e, t) => {
            const { username: n, itemId: r } = t.params;
            if (n && r) {
              const t = await (async (e) => {
                try {
                  const {
                    data: { shop_id: t },
                  } = await _(
                    `/api/v4/pdp/get_shopid_by_username/?username=${encodeURIComponent(
                      e
                    )}`
                  );
                  return t ? t.toString() : "";
                } catch (t) {
                  return "";
                }
              })(n);
              if (t)
                return (
                  p.O.getUrl({ shopId: t, itemId: r }) + b(e.search, R) + e.hash
                );
            }
            return l.XX0;
          },
        };
      function v({ location: e, match: t }) {
        const [n, r] = (0, a.useState)(200);
        return (
          (0, i.u)(() => {
            const [, n] =
              Object.entries(y).find(
                ([t, n]) =>
                  n && (0, s.matchPath)(e.pathname, { path: t, exact: !I[t] })
              ) || [];
            if ("function" == typeof n) {
              async function a() {
                const a = await n(e, t);
                r(a);
              }
              return a();
            }
            r(n || l.XX0);
          }, [e, t]),
          200 === n
            ? null
            : o().createElement(m.Z, { to: n, isServerRender: !1 })
        );
      }
      v.fetchInitial = () => {};
      const w = v;
    },
    42790: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => d });
      var r = n(61934),
        a = n(38918),
        o = n(21026),
        i = n(18510);
      const s = { spinner: "B3dD6x" };
      function c() {
        return a.createElement(i.Z, {
          show: !0,
          hideOverlay: !0,
          spinnerClassName: s.spinner,
        });
      }
      var l = n(70898);
      function d(
        e,
        {
          skipSsr: t,
          slotLoadingFallback: n = a.createElement(c, null),
          spexNamespace: i,
          defaultSlotProps: s,
          withExperiments: d,
          withFeatureToggles: u,
          withAccountInfo: p,
        }
      ) {
        function _(c) {
          const _ = new l.PerformanceTrace("slotMountTime");
          return a.createElement(o.Z, {
            slotName: e,
            slotProps: (0, r.Z)({}, s, c),
            spexNamespace: i,
            slotLoadingFallback: n,
            skipSsr: t,
            withExperiments: d,
            withFeatureToggles: u,
            withAccountInfo: p,
            isPageRoute: !0,
            performanceTrace: _,
          });
        }
        return (_.displayName = `SlotRoute("${e}")`), _;
      }
    },
    35428: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var r = n(2944),
        a = n.n(r),
        o = n(54378),
        i = n.n(o);
      const s = (e) => {
        if ("string" == typeof e) return a()(e).toString();
        if (!Array.isArray(e) && !ArrayBuffer.isView(e)) throw new TypeError();
        return a()(i().create(Uint8Array.from(e))).toString();
      };
    },
    16880: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { getSsrRequestContext: () => r });
      const r = () => {};
    },
    2402: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var r = n(11804);
      const a = {
        get FESTIVAL_SKIN_V2() {
          var e, t;
          return (
            this._getAssets(),
            null !=
            (e = null == (t = this._assets) ? void 0 : t.FESTIVAL_SKIN_V2)
              ? e
              : void 0
          );
        },
        get MART_CONFIG() {
          var e, t;
          return (
            this._getAssets(),
            null != (e = null == (t = this._assets) ? void 0 : t.MART_CONFIG)
              ? e
              : void 0
          );
        },
        get TRANSIFY_COLLECTION_MAPPING() {
          var e, t;
          return (
            this._getAssets(),
            null !=
            (e =
              null == (t = this._assets)
                ? void 0
                : t.TRANSIFY_COLLECTION_MAPPING)
              ? e
              : void 0
          );
        },
        get TRANSIFY_MAPPING() {
          var e, t;
          return (
            this._getAssets(),
            null !=
            (e = null == (t = this._assets) ? void 0 : t.TRANSIFY_MAPPING)
              ? e
              : void 0
          );
        },
        _assets: void 0,
        _getAssets: function () {
          if (void 0 === this._assets) {
            const e = r.ZP.getHostAsset();
            e && (this._assets = e);
          }
        },
      };
    },
    64184: (e, t, n) => {
      "use strict";
      n.d(t, {
        Gu: () => u,
        N7: () => _,
        TQ: () => s,
        cS: () => c,
        oe: () => p,
        vu: () => d,
        xm: () => l,
        zY: () => i,
      });
      var r,
        a,
        o = n(2402);
      const i = "RW_HOST",
        s = "n",
        c = "__plural",
        l = "shopee-mobilemall-live-sg",
        d = 3,
        u = null != (r = o.Z.TRANSIFY_MAPPING) ? r : {},
        p = "SHOPEE_RW",
        _ = null != (a = o.Z.TRANSIFY_COLLECTION_MAPPING) ? a : {};
    },
    45876: (e, t, n) => {
      "use strict";
      n.d(t, { config: () => ae });
      var r = {};
      n.r(r),
        n.d(r, {
          ADULT_AGE: () => C,
          API_HOST: () => S,
          API_PROTOCOL: () => f,
          BASE_SHARE_URL: () => g,
          COUNTRY: () => v,
          COUNTRY_NAME: () => O,
          ENV: () => p,
          FESTIVAL_SKIN: () => N,
          IS_OFFICIAL_MALL_DOMAIN: () => u,
          LOCALE: () => _,
          LOCALHOST: () => y,
          LOCAL_CURRENCY: () => P,
          MART_CONFIG: () => w,
          MWEB_DOMAIN: () => I,
          ROOT_DOMAIN: () => h,
          ROOT_OFFICIAL_MALL_DOMAIN: () => R,
          SHOPEE_BASE_URL: () => E,
          SOURCE_FILE_HOST: () => A,
          SUPPORTED_LANGUAGES: () => T,
          USER_STANDARD_LANGUAGE: () => m,
        });
      var a = {};
      n.r(a),
        n.d(a, {
          APP_ID: () => V,
          BASE_IMAGE_URL: () => x,
          BASE_VIDEO_URL: () => G,
          CONNECTION_SERVER: () => Q,
          COOKIE_DOMAIN: () => Z,
          DEBUG_SW: () => Y,
          DEFAULT_LANGUAGE: () => B,
          DISABLE_WORKER: () => J,
          ENABLE_SW: () => $,
          ENABLE_TRACKER_LOG: () => z,
          ENV_DOMAIN_MAPPING: () => X,
          IMAGE_HOST: () => H,
          LANGUAGE: () => M,
          LOCALE_DOMAIN_MAPPING: () => q,
          LOCAL_API: () => K,
          ONE_LINK_APP_ID: () => j,
          ROOT_SHARE_DOMAIN: () => W,
          SERVER_RENDER: () => D,
          TRANSIFY_COLLECTION_MAPPING: () => U,
          TRANSIFY_MANAGER_CDN_BASE: () => k,
          TRANSIFY_PROJECT: () => F,
        });
      var o = n(61934),
        i = n(2402),
        s = n(65559),
        c = n.n(s),
        l = n(96234),
        d = n(96662);
      const u = (0, n(78928).G7)(),
        p = (0, d.dU)(),
        _ = (0, d.Kd)(),
        m = (0, d.of)(),
        f = "https://",
        h = c().env[p] + c().mall[_],
        E = `${f}${h}`,
        g = E,
        S = E,
        I = `${f}mall.${h}`,
        R = "mall." + h,
        A = c().assets[_],
        b = (0, l.getCountryConfig)(_),
        O = b.countryName,
        P = b.currency,
        C = b.adultAge || (0, l.getCountryConfig)("default").adultAge,
        T = b.languages,
        y = !1,
        v = _,
        w = i.Z.MART_CONFIG,
        N = i.Z.FESTIVAL_SKIN_V2;
      var L = n(64184);
      const D = !1,
        U = L.N7,
        k = L.xm,
        F = L.oe,
        M = {
          BR: "pt-BR",
          CL: "es-CL",
          CO: "es-CO",
          ID: "id",
          MX: "es-MX",
          MY: "en",
          PH: "en",
          SG: "en",
          TH: "th",
          TW: "zh-Hant",
          VN: "vi",
        },
        H = c().image[_],
        Z = c().mall[_],
        x = `https://${c().image[_]}/file/`,
        G = `https://${c().video[_]}/video/`,
        B = M[_],
        W = h,
        V = {
          AR: { Android: "com.shopee.ar", iOS: "1569763993" },
          BR: { Android: "com.shopee.br", iOS: "1481812175" },
          CL: { Android: "com.shopee.cl", iOS: "1554257918" },
          CO: { Android: "com.shopee.co", iOS: "1554257433" },
          ES: { Android: "com.shopee.es", iOS: "1569763855" },
          FR: { Android: "com.shopee.fr", iOS: "1569764159" },
          ID: { Android: "com.shopee.id", iOS: "959841443" },
          IN: { Android: "com.shopee.in", iOS: "1505678092" },
          MX: { Android: "com.shopee.mx", iOS: "1540749085" },
          MY: { Android: "com.shopee.my", iOS: "959841113" },
          PH: { Android: "com.shopee.ph", iOS: "959841854" },
          PL: { Android: "com.shopee.pl", iOS: "1569764124" },
          SG: { Android: "com.shopee.sg", iOS: "959840394" },
          TH: { Android: "com.shopee.th", iOS: "959841453" },
          TW: { Android: "com.shopee.tw", iOS: "959841107" },
          VN: { Android: "com.shopee.vn", iOS: "959841449" },
        }[_],
        j = {
          AR: "dqNz",
          BR: "salS",
          CL: "Iovx",
          CO: "RYgH",
          ES: "dbYu",
          FR: "OeKN",
          ID: "966699492",
          IN: "CKKb",
          MX: "3203413121",
          MY: "356033421",
          PH: "801056447",
          PL: "26Am",
          SG: "3203413121",
          TH: "3686521112",
          TW: "2688877613",
          VN: "3249649563",
        }[_],
        Y = !1,
        $ = !1,
        K = !1,
        q = c().mall,
        X = c().env,
        Q = "chat-ws." + h.replace("live.", ""),
        J = !1,
        z = !1,
        ee = n(20172).Y.child("@shopee/platform"),
        te = E,
        ne = te,
        re = (0, o.Z)({ NON_LOCAL_ROOT_DOMAIN: te, BASE_API_URL: ne }, r, a);
      !(function (e, t) {
        Object.keys(t).forEach((n) => {
          Object.defineProperty(e, n, {
            get: () => (
              ee.warn("config field %key is deprecated", { key: n }), t[n]
            ),
          });
        });
      })(re, a);
      const ae = re;
    },
    96491: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          DEPRECATED_fetchTranslationFull: () => S,
          addInitialCollections: () => u,
          addInitialTranslation: () => p,
          create: () => _,
          default: () => d,
          fetchTranslationCollection: () => m,
          t: () => f,
          tCountry: () => I,
          tNode: () => h,
          useI18nCollections: () => E,
          withI18nCollections: () => g,
        });
      var r = n(64184),
        a = n(20937),
        o = n(45876);
      const { ENV: i, LOCALE: s, USER_STANDARD_LANGUAGE: c } = o.config;
      (0, a.S1)({
        env: i,
        lang: c,
        locale: s,
        pluralKey: r.TQ,
        pluralSuffix: r.cS,
      });
      const l = (0, a.Ue)({
          name: r.zY,
          transifyCollectionMapping: r.N7,
          transifyManagerCdnBase: r.xm,
          transifyManagerId: r.vu,
          transifyManagerProject: r.oe,
          transifyMapping: r.Gu,
        }),
        d = l,
        u = l.addInitialCollections,
        p = l.addInitialTranslation,
        _ = a.Ue,
        m = l.fetchTranslationCollection,
        f = l.t,
        h = l.tNode,
        E = l.useI18nCollections,
        g = l.withI18nCollections,
        S = l.fetchTranslationFull,
        I = (e, t) => l.t(e, t, { localeDelimiter: "_" });
    },
    20172: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => c });
      var r = n(7957),
        a = n(61934),
        o = n(25141);
      function i(e, t) {
        return t
          ? e.replace(/%(%|[a-zA-Z0-9-_]+)/g, (e, n) => {
              var r;
              return "%" === n ? "%" : null != (r = String(t[n])) ? r : "";
            })
          : e;
      }
      const s = ["error"],
        c = (0, o.Z)()
          ? (function e(t = []) {
              const n = console,
                o = {
                  error: {
                    level: "error",
                    style: "background-color:red;color:white;",
                  },
                  warn: {
                    level: "warn",
                    style: "background-color:yellow;color:black;",
                  },
                  info: {
                    level: "info",
                    style: "background-color:green;color:white;",
                  },
                  verbose: {
                    level: "log",
                    style: "background-color:cyan;color:black;",
                  },
                  debug: {
                    level: "debug",
                    style: "background-color:magenta;color:white;",
                  },
                  silly: {
                    level: "debug",
                    style: "background-color:gray;color:white;",
                  },
                };
              function c(e, a, c) {
                const l = [];
                if (c) {
                  const e = (0, r.Z)(c, s);
                  Object.keys(e).length && l.push(e),
                    c.error && l.push(c.error);
                }
                n[o[e].level](
                  "%c" + t.join(":"),
                  o[e].style + "padding:1px 4px;",
                  i(a, c),
                  ...l
                );
              }
              return {
                child: (n) => e([...t, n]),
                error(e, t) {
                  "string" == typeof e
                    ? c("error", e, t)
                    : c("error", e.message, (0, a.Z)({}, t, { error: e }));
                },
                warn(e, t) {
                  c("warn", e, t);
                },
                info(e, t) {
                  c("info", e, t);
                },
                log(e, t) {
                  c("info", e, t);
                },
                http() {},
                verbose(e, t) {
                  c("verbose", e, t);
                },
                debug(e, t) {
                  c("debug", e, t);
                },
                silly(e, t) {
                  c("silly", e, t);
                },
              };
            })()
          : (function e(t = []) {
              function n(e, n, r) {
                var o;
                null == (o = window.Sentry) ||
                  o.addBreadcrumb({
                    category: "logger",
                    level: e,
                    message: i(n, r),
                    data: (0, a.Z)({}, r, { labels: t }),
                  });
              }
              return {
                child: (n) => e([...t, n]),
                error(e, t) {
                  "string" == typeof e
                    ? n("error", e, t)
                    : n("error", e.message, (0, a.Z)({}, t, { error: e }));
                },
                warn(e, t) {
                  n("warning", e, t);
                },
                info(e, t) {
                  n("info", e, t);
                },
                log(e, t) {
                  n("info", e, t);
                },
                http() {},
                verbose(e, t) {
                  n("debug", e, t);
                },
                debug(e, t) {
                  n("debug", e, t);
                },
                silly(e, t) {
                  n("debug", e, t);
                },
              };
            })();
    },
    91646: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          Cookie: () => r.Vj,
          Env: () => r.Xb,
          FetchUtils: () => r.FetchUtils,
          I18n: () => r.I18n,
          Logger: () => r.Yd,
          Metrics: () => r.C3,
          State: () => r.ZM,
          Theme: () => l,
          Tracking: () => r.Tracking,
          UI: () => p,
          config: () => r.config,
          fetchTranslationCollection: () => _.fetchTranslationCollection,
          history: () => d,
          injectTracking: () => m.injectTracking,
          t: () => _.t,
          tNode: () => _.tNode,
          useI18nCollections: () => _.useI18nCollections,
          withI18nCollections: () => _.withI18nCollections,
        });
      var r = n(11793),
        a = n(58159);
      const o = "#ee4d2d",
        i = "rgba(255,87,34,0.1)",
        s = "#d0011b",
        c = "#066bc8",
        l = {
          VARIABLES: {
            [a.Q.DEFAULT]: {
              "--brand-primary-color": o,
              "--brand-primary-light-color": i,
              "--meta-theme-color": o,
            },
            [a.Q.OFS]: {
              "--brand-primary-color": s,
              "--brand-primary-light-color": "rgba(208,1,27,0.08)",
              "--meta-theme-color": s,
            },
            [a.Q.S_MART]: {
              "--brand-primary-color": c,
              "--brand-primary-light-color": "#e6f0f9",
              "--meta-theme-color": c,
            },
            [a.Q.HEB]: {
              "--brand-primary-color": o,
              "--brand-primary-light-color": i,
              "--meta-theme-color": o,
            },
          },
        },
        d = (0, n(26574).createBrowserHistory)();
      var u = n(74093);
      const p = {
        ScrollBehavior: n(83131).ZP,
        closeDialog: () => {},
        showDialog: () => {},
        showToast: u.bn,
      };
      var _ = n(96491),
        m = n(47288);
    },
    47288: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          createBITracker: () => O,
          injectTracking: () => P,
          onTrack: () => S,
          setAbTestSignature: () => T,
          setUserId: () => C,
          subscribe: () => I,
        });
      var r = n(61934),
        a = n(24318),
        o = n(73237),
        i = n(11793),
        s = n(96662),
        c = n(86321),
        l = n(82646),
        d = n(5923),
        u = n(52567);
      function p() {
        return window.trackingSDK;
      }
      function _({ data: e }) {
        if (!m(e)) return;
        const t = p();
        if (!t) return;
        const { priority: n } = e;
        delete e.priority;
        const r = (function (e) {
          const {
              timestamp: t,
              session_id: n,
              sequence_id: r,
              ab_test: a,
              source: o = "",
            } = e,
            {
              page_type: i = "",
              operation: s,
              target_type: c = "",
              page_section: l = "",
              data: d,
              position_id: u,
              tracker_id: p,
              target_property: _,
            } = e.info;
          return {
            event_timestamp: t,
            sequence_id: r,
            session_id: n,
            page_type: i,
            page_section: l,
            operation: s,
            target_type: c,
            ab_test: a,
            data: d,
            platform_implementation: o,
            position_id: u,
            tracker_id: p,
            target_property: _,
          };
        })(e);
        n
          ? null == t.algo || t.algo("track", r)
          : null == t.ubt || t.ubt("track", r);
      }
      function m(e) {
        return "type" in e && "v3" === e.type;
      }
      class f {
        constructor(e, t, a) {
          var f = this;
          (this.initWeb = (e, t, n) => {
            const {
                subscribe: a,
                routes: o,
                getCookies: s,
                platform: c,
                source: l,
                appId: d = 0,
                sendEventByInterval: h,
              } = n,
              g = (e) => {
                const t = (0, u.f)(o, e);
                if (!Array.isArray(t)) return null;
                const n = t[t.length - 1];
                return n && n.route && n.route.name ? n.route.name : null;
              },
              S = p();
            if (!S) return;
            const I = s() || {};
            let R = null,
              A = !1,
              b = !1;
            const O = async function e() {
                (A = !0), (b = !1);
                let t = "";
                try {
                  t =
                    (await i.FetchUtils.getWebDeviceFingerprint({
                      shouldWaitForDfpInit: !0,
                    })) || "";
                } catch (n) {}
                if ((t && (R = t), (A = !1), !R)) return b ? e() : void 0;
              },
              P = () => R || (A ? (b = !0) : O(), null),
              C = (function () {
                try {
                  return "sw-WEBFE-MKP-2025.03.v1-1";
                } catch (e) {
                  return "";
                }
              })();
            S.init(
              ["ubt", "algo", "debugview", "visualisation"],
              (n) => ({
                env: e,
                platform: c,
                locale: t,
                version: C,
                app_version: C,
                appId: d,
                enableAutoTrack: !0,
                autoTrackMatchRoutes: g,
                sendImmediately: !h || "algo" === n,
                token: I.SPC_R_T_IV,
                signature: I.SPC_R_T_ID,
                device_id: I.SPC_F,
                debugMode: "debugview" === n || "visualisation" === n,
                getDfp: "ubt" === n ? P : void 0,
                secured_post: "ubt" === n ? i.FetchUtils.post : void 0,
                getVisualisationMap:
                  "visualisation" === n ? this.getSchemaMap : void 0,
                sapid: E() || "",
              }),
              "1.1.24"
            );
            const T = this.userId;
            T && this.setUserId(T);
            const y = this.abTestSignature;
            y && this.setAbTestSignature(y),
              this.defineWindow(({ data: e }) => {
                m(e) && _({ data: (0, r.Z)({ source: l }, e) });
              }),
              a(
                () => !0,
                async function (e) {
                  const t = await f.conversion(
                    ((n = e), (0, r.Z)({}, n, { source: l }))
                  );
                  var n;
                  await Promise.all(t.map((e) => _({ data: e })));
                }
              ),
              addEventListener("beforeunload", () => {
                var e;
                null == (e = p()) ||
                  null == e.ubt ||
                  e.ubt("exitPageTrack", {
                    operation: "action_exit_page",
                    tracker_id: 220,
                    platform_implementation: l,
                  });
              });
          }),
            (this.initBridge = (e, t, a) => {
              let o = [],
                i = null;
              n.e(7565)
                .then(n.bind(n, 45978))
                .then((e) => {
                  i = e.trackBIEvent;
                })
                .catch(() => {});
              const s = ({ data: e }) => {
                m(e) && (o.push(e), i && i(o) && (o = []));
              };
              this.defineWindow(s),
                a.subscribe(
                  () => !0,
                  async function (e) {
                    var t;
                    (
                      await f.conversion(
                        ((t = e), (0, r.Z)({}, t, { source: a.source }))
                      )
                    ).forEach((e) => s({ data: e }));
                  }
                );
            }),
            (this.hydrateUserId = () => {
              (0, l.N1)() &&
                n
                  .e(7565)
                  .then(n.bind(n, 45978))
                  .then((e) => e.getUserId())
                  .then((e) => this.setUserId(e))
                  .catch(() => {});
            }),
            (this.defineWindow = (e) => {
              window.BITrack ||
                Object.defineProperty(window, "BITrack", {
                  enumerable: !1,
                  writable: !1,
                  value: e,
                });
            }),
            (this.initWorker = async function () {
              const e =
                window.hasOwnProperty("__DECKER_HOOK__") || f.isUsingBridge
                  ? Promise.resolve()
                  : new Promise((e) => {
                      setTimeout(e, 5e3);
                    });
              await e;
              const t = (await n.e(2916).then(n.bind(n, 62916))).default();
              return (
                await t.ready,
                (r = t),
                window.hasOwnProperty("__DECKER_HOOK__") &&
                  "function" ==
                    typeof window.__DECKER_HOOK__.debugTrackingWorker &&
                  window.__DECKER_HOOK__.debugTrackingWorker(r),
                t.init({
                  env: f.env,
                  locale: f.locale,
                  enableVisualisation: h(),
                }),
                t
              );
              var r;
            }),
            (this.getWorkerInstance = () =>
              this.workerInstance ||
              this.workerPromise ||
              (this.workerPromise = this.initWorker())),
            (this.getSchemaMap = async function () {
              const e = await f.getWorkerInstance();
              return await e.getSchemaMap();
            }),
            (this.conversion = async function (e) {
              const t = await f.getWorkerInstance(),
                n = f.injectQueue;
              (f.injectQueue = []),
                await Promise.all(n.map(t.injectRules)),
                h() && n.length > 0 && f.debouncedInsertVisualisationMap();
              const a = (function (e) {
                  if (window.hasOwnProperty("__DECKER_HOOK__")) {
                    const t = (0, d.Z)();
                    return (
                      window.__DECKER_HOOK__.emit(
                        "v2Events",
                        (0, r.Z)({}, e, { eventId: t })
                      ),
                      t
                    );
                  }
                })(e),
                o = await t.v2ToV3(e);
              var i, l;
              return (
                (i = o),
                (l = a),
                window.hasOwnProperty("__DECKER_HOOK__") &&
                  window.__DECKER_HOOK__.emit("v3Events", {
                    events: i,
                    v2Id: l,
                    country: (0, s.Kd)(),
                    device_id: (0, c.ej)("SPC_F"),
                    user_agent: navigator.userAgent,
                    domain: window.location.hostname,
                  }),
                o
              );
            }),
            (this.injectRules = (...e) => {
              if ((this.injectQueue.push(...e), !window)) return;
              const t = window.document;
              t &&
                t.createElement &&
                e.forEach((e) => {
                  const n = t.createElement("link");
                  (n.rel = "prefetch"),
                    (n.href = e),
                    (n.onload = () => t.head.removeChild(n)),
                    t.head.appendChild(n);
                });
            }),
            (this.setUserId = (e) => {
              if (("number" != typeof e && (e = parseInt(e, 10)), isNaN(e)))
                return;
              this.userId = e;
              const t = p();
              t &&
                (null == t.ubt || t.ubt("setUserId", e),
                null == t.algo || t.algo("setUserId", e));
            }),
            (this.setAbTestSignature = (e) => {
              this.abTestSignature = e;
              const t = p();
              t &&
                (null == t.ubt || t.ubt("setABTest", e),
                null == t.algo || t.algo("setABTest", e));
            }),
            (this.insertVisualisationMap = async function () {
              const e = p();
              if (!e) return;
              const t = await f.getSchemaMap();
              t &&
                (null == e.visualisation ||
                  e.visualisation("insertVisualisationMap", t));
            }),
            (t = t.toLowerCase()),
            (this.workerInstance = null),
            (this.workerPromise = null),
            (this.injectQueue = []),
            (this.env = e),
            (this.locale = t),
            this.injectRules(...(a.injectQueue || [])),
            this.hydrateUserId(),
            (this.debouncedInsertVisualisationMap = (0, o.Ds)(
              this.insertVisualisationMap,
              500
            )),
            (this.isUsingBridge = (0, l.xT)() && !(0, l.N1)()),
            (this.isUsingBridge ? this.initBridge : this.initWeb)(e, t, a);
        }
      }
      function h() {
        return (
          (function () {
            try {
              const e = new URL(location.href).searchParams.get(
                "tms_visualisation_mode"
              );
              return e && "true" === e.toLowerCase();
            } catch (e) {
              return !1;
            }
          })() ||
          (function () {
            try {
              const e = localStorage.getItem("tms_visualisation_options");
              if (!e) return !1;
              const { enableVisualisation: t = !1 } = JSON.parse(e) || {};
              return t;
            } catch (e) {
              return !1;
            }
          })()
        );
      }
      function E() {
        try {
          return (
            (localStorage && localStorage.getItem("_sapid")) ||
            (sessionStorage && sessionStorage.getItem("_sapid")) ||
            ""
          );
        } catch (e) {
          return "";
        }
      }
      const g = new a.Z(),
        S = g.publish,
        I = g.subscribe;
      let R = null,
        A = null;
      const b = [];
      function O(e, t, n) {
        return (
          null !== R ||
            ((R = (function (e, t, n) {
              return new f(e, t, n);
            })(e, t, (0, r.Z)({}, n, { injectQueue: b }))),
            A && R.setUserId(A)),
          R
        );
      }
      function P(...e) {
        R ? R.injectRules(...e) : b.push(...e);
      }
      function C(e) {
        if (((A = e), R && R.setUserId)) return R.setUserId(e);
      }
      const T = () => {};
    },
    11793: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vj: () => se,
        Xb: () => c,
        FetchUtils: () => r,
        I18n: () => o,
        Yd: () => Q.Y,
        C3: () => a,
        ZM: () => ie,
        Tracking: () => X,
        config: () => i.config,
      });
      var r = {};
      n.r(r),
        n.d(r, {
          adPost: () => N,
          fetch: () => L,
          fetchInfo: () => D,
          formPost: () => U,
          genericHttp: () => k,
          get: () => F,
          getLongToken: () => x,
          getWebDeviceFingerprint: () => Z,
          http: () => M,
          initSecuritySdk: () => H,
          jsonPost: () => G,
          makeFullUrl: () => B,
          onFailHandler: () => W,
          post: () => V,
          postFetchHandler: () => Y,
          postForm: () => j,
          simplePost: () => $,
          syncPost: () => K,
          utilFetch: () => q,
        });
      var a = {};
      n.r(a), n.d(a, { SSR_ONLY_createPrometheusMetrics: () => J });
      var o = n(96491),
        i = n(45876),
        s = n(96662);
      const c = {
        getEnv: s.dU,
        getLocale: s.Kd,
        getUserLanguage: s.of,
        isUserLanguageSet: s.Xw,
        setUserLanguage: s.hJ,
      };
      var l = n(32111);
      let d = (function (e) {
        return (e[(e.PC = 0)] = "PC"), (e[(e.RW = 1)] = "RW"), e;
      })({});
      var u = n(61934),
        p = n(89049),
        _ = n(14364),
        m = n(86321);
      function f(e, t) {
        const n = `${e}csrftoken`;
        let r = (0, m.ej)(n);
        return (
          r ||
            ((r = (function (
              e,
              t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            ) {
              let n = "";
              for (let r = 0; r < e; r++) {
                const e = Math.floor(Math.random() * t.length);
                n += t.substring(e, e + 1);
              }
              return n;
            })(32)),
            (0, m.pC)(n, r, 0, t)),
          r
        );
      }
      function h(e) {
        (0, _.Z)(e),
          void 0 !== typeof globalThis &&
            globalThis.Sentry &&
            globalThis.Sentry.captureException(
              new Error(`Dynamic Web Security SDK Error : ${e}`)
            );
      }
      function E(e) {
        500 === e.status &&
          e.json().then((t) => {
            if ("ERROR_MAINTENANCE" === t.status) {
              if (e.url.includes("api/v4/mntmode"))
                return void (
                  "53484F504545" === t.key && window.location.reload()
                );
              fetch("/api/v4/mntmode").then(E);
            }
          });
      }
      var g = n(70898),
        S = n(72288),
        I = (function (e) {
          return (e.Success = "success"), (e.Failed = "failed"), e;
        })(I || {}),
        R = (function (e) {
          return (
            (e.InitSecuritySdk = "initSecuritySdk"),
            (e.LoadSecuritySdk = "loadSecuritySdk"),
            (e.HookFUFetch = "hookFUFetch"),
            (e.HookFUXhr = "hookFUXhr"),
            e
          );
        })(R || {});
      const A = (e) => {
          if (S.N)
            try {
              e();
            } catch (t) {
              (0, _.Z)(t);
            }
        },
        b = () => {
          const e = new g.PerformanceTrace("fuSdk"),
            t = { [R.InitSecuritySdk]: 0, [R.LoadSecuritySdk]: 0 };
          return {
            initSecuritySdk: {
              onInit: () => {
                A(() => {
                  e.forceStart(),
                    (t[R.InitSecuritySdk] = Number(window.performance.now()));
                });
              },
              onComplete: () => {
                A(() => {
                  e.markCustomMetric(
                    R.InitSecuritySdk,
                    Math.floor(
                      Number(window.performance.now() - t[R.InitSecuritySdk])
                    )
                  ),
                    e.addAttributes({ initSecuritySdkStatus: I.Success }),
                    e.stop();
                });
              },
              onFail: () => {
                A(() => {
                  e.markCustomMetric(
                    R.InitSecuritySdk,
                    Math.floor(
                      Number(window.performance.now() - t[R.InitSecuritySdk])
                    )
                  ),
                    e.addAttributes({ initSecuritySdkStatus: I.Failed }),
                    e.stop();
                });
              },
            },
            loadSecuritySdk: {
              onInit: () => {
                e.forceStart(),
                  A(() => {
                    t[R.LoadSecuritySdk] = Number(window.performance.now());
                  });
              },
              onComplete: () => {
                A(() => {
                  e.markCustomMetric(
                    R.LoadSecuritySdk,
                    Math.floor(
                      Number(window.performance.now() - t[R.LoadSecuritySdk])
                    )
                  ),
                    e.addAttributes({ loadSecuritySdkStatus: I.Success }),
                    e.stop();
                });
              },
              onFail: () => {
                A(() => {
                  e.markCustomMetric(
                    R.LoadSecuritySdk,
                    Math.floor(
                      Number(window.performance.now() - t[R.LoadSecuritySdk])
                    )
                  ),
                    e.addAttributes({ loadSecuritySdkStatus: I.Failed }),
                    e.stop();
                });
              },
            },
            hookFUFetch: {
              onInit: () => {
                A(() => {
                  e.forceStart();
                });
              },
              onComplete: (t) => {
                t &&
                  A(() => {
                    e.markCustomMetric(R.HookFUFetch, t),
                      e.addAttributes({ hookFUFetchStatus: I.Success }),
                      e.stop();
                  });
              },
            },
            hookFUXhr: {
              onInit: () => {
                A(() => {
                  e.forceStart();
                });
              },
              onComplete: (t) => {
                t &&
                  A(() => {
                    e.markCustomMetric(R.HookFUXhr, t),
                      e.addAttributes({ hookFUXhrStatus: I.Success }),
                      e.stop();
                  });
              },
            },
          };
        };
      var O = n(38160),
        P = n(72032),
        C = n(78984);
      const T = [l.N.RW],
        y = { platform: d.RW },
        v = (0, l.Z)(...T),
        w = (function ({ platform: e, fetchUtilsConfig: t = {} }) {
          const n = (function () {
              var e;
              const t = document.cookie || " ",
                n =
                  null == (e = window) || null == (e = e.__ASSETS__)
                    ? void 0
                    : e.PLATFORM_STATIC_TOGGLE.USE_LATEST_SFU;
              if (100 === n || t.indexOf("__SFU=1;") >= 0) return !0;
              let r = "";
              try {
                r = t.split("SPC_F=")[1].split(";")[0].slice(-2);
              } catch (o) {
                return !1;
              }
              let a = 0;
              for (let i = 0; i < r.length; i += 1)
                a = (Math.imul(31, a) + r.charCodeAt(i)) | 0;
              return (a = Math.abs(a) % 100), a < n;
            })(),
            r = (0, u.Z)(
              {},
              (function ({ platform: e, fetchUtilsConfig: t = {} }) {
                const n = t.cookieDomain,
                  r = t.cookiePrefix || "",
                  a = {
                    "X-Shopee-Language": (0, s.of)(),
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRFToken": f(r, n),
                  };
                return (
                  e === d.RW && (a["X-API-SOURCE"] = "rweb"),
                  e === d.PC && (a["X-API-SOURCE"] = "pc"),
                  a
                );
              })({ platform: e, fetchUtilsConfig: t }),
              t.headers
            ),
            a = [r["X-API-SOURCE"], "meta"].join(","),
            o = (e) =>
              (0, C.r)()
                ? (((e = Object.assign({ headers: {} }, e)).headers =
                    Object.assign({ "X-Api-Src-List": a }, e.headers)),
                  e)
                : e,
            i = {
              baseUrl: (0, p.SV)(),
              shouldAppendHost: t.shouldAppendHost,
              headers: r,
              enableGlobalHook: !0,
              enableTMS: !0,
              platform: e,
              policies: [
                { policyurl: "api/v4/pdp/get_pc", match: "contain" },
                { policyurl: "api/v4/pdp/get_rw", match: "contain" },
                {
                  policyurl:
                    "api/app/crm/public/v1/query_broadcast_product_info",
                  allowCors: !0,
                  match: "contain",
                },
                {
                  limitMethods: ["GET", "POST"],
                  allowCors: !1,
                  policyurl: "api/",
                  match: "contain",
                },
              ],
              handleMaintenanceModeResponse: E,
              onError: h,
            },
            c = n
              ? (0, O.rP)((0, u.Z)({}, i, { performanceTrackings: b() }))
              : (0, P.rP)(i);
          return (0, u.Z)({}, c, {
            get(e, t) {
              const n = o(t);
              return c.get(e, n);
            },
            http(e, t, n) {
              const r = o(t);
              return c.http(e, r, n);
            },
            post(e, t, n) {
              const r = o(n);
              return c.post(e, t, r);
            },
            postForm(e, t, n) {
              const r = o(n);
              return c.postForm(e, t, r);
            },
          });
        })(y),
        N = v.adPost,
        L = v.fetch,
        D = v.fetchInfo,
        U = v.formPost,
        k = v.genericHttp,
        F = w.get,
        M = w.http,
        H = w.initSecuritySdk,
        Z = w.getWebDeviceFingerprint,
        x = w.getLongToken,
        G = v.jsonPost,
        B = v.makeFullUrl,
        W = v.onFailHandler,
        V = w.post,
        j = w.postForm,
        Y = v.postFetchHandler,
        $ = v.simplePost,
        K = v.syncPost,
        q = v.utilFetch;
      var X = n(47288),
        Q = n(20172);
      function J(e, t) {}
      var z = n(15723);
      const ee = {
        need_consent: !0,
        preferences: [],
        allowed_fe_set_cookies: [],
      };
      function te(e) {
        return null == e
          ? null
          : e.reduce(
              (e, { category: t, status: n, update_time: r }) => (
                (e[t] = { status: n, update_time: r }), e
              ),
              {}
            );
      }
      var ne = n(6872);
      const re = (0, n(38918).createContext)(void 0),
        ae = {
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
        },
        oe = (function () {
          const e = new ne.QueryClient({ defaultOptions: ae });
          try {
            {
              const t = document.querySelector('script[type="text/shopee-rq"]');
              if (t) {
                const n = JSON.parse(t.textContent || "");
                (0, ne.hydrate)(e, n);
              }
            }
          } catch (t) {}
          return e;
        })(),
        ie = {
          HostReactQueryContext: re,
          get hostTanstackQueryClient() {
            return oe;
          },
        },
        se = (function ({ locale: e }) {
          let t = null,
            n = null,
            r = [];
          function a() {
            return -1 !== ["BR"].indexOf(e);
          }
          function o(e) {
            (0, m.pC)(e, "", 0);
          }
          function i() {
            if (!t) return;
            const e = (0, u.Z)({}, t, { preferenceMap: te(t.preferences) });
            for (let t = 0; t < r.length; t++) r[t](e);
          }
          async function s() {
            if (!a())
              return {
                need_consent: !1,
                preferences: null,
                allowed_fe_set_cookies: null,
              };
            if (!t) {
              const e = null === n;
              n ||
                (n = (async function () {
                  const e = await (0, z.U)(
                    "/api/v4/account/cookie_get_preferences?version=1"
                  );
                  return e.error ? ee : e.data;
                })()),
                (t = await n),
                e && i();
            }
            return t;
          }
          async function c(e) {
            if (!a()) return !0;
            const t = await s(),
              n =
                !!t.allowed_fe_set_cookies &&
                -1 !== t.allowed_fe_set_cookies.indexOf(e);
            return n || o(e), n;
          }
          return {
            shouldShowCookieConsentBanner: async function () {
              return (await s()).need_consent;
            },
            getCookiePreference: async function () {
              return (await s()).preferences;
            },
            getCookiePreferenceMap: async function () {
              return te((await s()).preferences);
            },
            getCookieAllowedList: async function () {
              return (await s()).allowed_fe_set_cookies;
            },
            acceptAllNonEssentialCookies: async function () {
              const e = await (async function () {
                return (0, z.v)("/api/v4/account/cookie_accept_all", {
                  version: 1,
                });
              })();
              return e.error
                ? { error: e.error }
                : ((t = (0, u.Z)({}, t, e.data, { need_consent: !1 })),
                  i(),
                  { error: 0 });
            },
            rejectAllNonEssentialCookies: async function () {
              const e = await (async function () {
                return (0, z.v)("/api/v4/account/cookie_reject_all", {
                  version: 1,
                });
              })();
              return e.error
                ? { error: e.error }
                : ((t = (0, u.Z)({}, t, e.data, { need_consent: !1 })),
                  i(),
                  { error: 0 });
            },
            setCookiePreference: async function (e) {
              const n = await (async function (e) {
                return (0, z.v)("/api/v4/account/cookie_set_preferences", {
                  preferences: e,
                  version: 1,
                });
              })(e);
              return n.error
                ? { error: n.error }
                : ((t = (0, u.Z)({}, t, n.data)), i(), { error: 0 });
            },
            isGDPRRequired: a,
            subscribeToCookiePreferenceChange: function (e) {
              return (
                r.push(e),
                () => {
                  r = r.filter((t) => t !== e);
                }
              );
            },
            canSetCookie: c,
            safelySetCookie: async function (e, t, n, r) {
              return !!(await c(e)) && ((0, m.pC)(e, t, n, r), !0);
            },
            setCookie: m.pC,
            removeCookie: o,
            getCookie: m.ej,
            getCookies: m.$1,
          };
        })({ locale: (0, s.Kd)() });
    },
    48156: (e, t, n) => {
      "use strict";
      n.d(t, { JS: () => g, vi: () => S });
      var r = n(38918),
        a = n(88064),
        o = n(11793),
        i = n(6872),
        s = n(37195),
        c = n(61934),
        l = n(16919),
        d = n(96662);
      const { post: u } = o.FetchUtils;
      let p = null;
      const _ = async (e) => {
        const [, , t, n] = e.queryKey;
        try {
          const e = (function (e) {
              const t = [...(e || [])];
              if (null == t.find((e) => "platform" === e.name)) {
                const e = h[s.t4] || 32;
                t.push({
                  name: "platform",
                  value_type: "INT",
                  value: String(e),
                });
              }
              return t;
            })(n),
            { error: r, data: a } = await (async function (e) {
              p ||
                (p = l.ABTest.init({
                  country: (0, d.Kd)(),
                  bizName: "marketplace",
                  isWsa: !0,
                }));
              try {
                var t;
                const n = await p.fetchInc(
                  [e.scene_key],
                  (0, d.Kd)(),
                  e.filter_data,
                  async (e, t) => await u(e, t)
                );
                if (
                  (null == n || null == (t = n.data) ? void 0 : t.length) > 0
                ) {
                  const e = {},
                    t = {};
                  for (const r of n.data) {
                    for (const t of r.experiments) e[t.exp_name] = t;
                    for (const e of r.feature_map || [])
                      t[e.feature_key] = e.feature_value;
                  }
                  return (0, c.Z)({}, n, {
                    data: { experiments: e, features: t },
                  });
                }
                return (0, c.Z)({}, n, { data: null });
              } catch (r) {
                var n;
                return {
                  error: r,
                  error_msg:
                    null != (n = null == r ? void 0 : r.error_msg)
                      ? n
                      : null == r
                      ? void 0
                      : r.message,
                  data: null,
                };
              }
            })({ scene_key: t, filter_data: e });
          if (r || !a) throw new Error("failed to load scene");
          return {
            experiments: (0, c.Z)({}, a.experiments || {}),
            features: (0, c.Z)({}, a.features || {}),
          };
        } catch (r) {
          return null;
        }
      };
      function m(e, t) {
        return ["platform", "abtest", e, t];
      }
      function f(e, t) {
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
      const h = {
        [s.iw.ANDROID_APP]: 1,
        [s.iw.IOS_APP]: 2,
        [s.iw.ANDROID_WEB]: 4,
        [s.iw.IOS_WEB]: 8,
        [s.iw.PC_MALL]: 16,
        [s.iw.ANDROID_LITE]: 32,
        [s.iw.IOS_LITE]: 32,
        [s.iw.OTHERS]: 32,
      };
      function E(e, t, n) {
        const s = (0, r.useMemo)(
            () =>
              (function (e) {
                if (e) return e.slice().sort(f);
              })(t),
            [t]
          ),
          c = !!(0, r.useContext)(o.ZM.HostReactQueryContext);
        try {
          const { data: t, isLoading: r } = (0, i.useQuery)(
            (function (e, t, n = !1) {
              return {
                queryKey: m(e, t),
                queryFn: _,
                context: o.ZM.HostReactQueryContext,
                suspense: n,
              };
            })(e, s, n)
          );
          if (r) return { progress: a.ad.REQ };
          if (!t) return { progress: a.ad.ERR };
          const { experiments: c, features: l } = t;
          return { experiments: c, features: l, progress: a.ad.OK };
        } catch (l) {
          if (!c) return { progress: a.ad.INIT };
          throw l;
        }
      }
      function g(e, t, n, r) {
        const { experiments: a, progress: o } = E(e, n, r);
        return [a && a[t] ? a[t] : void 0, o];
      }
      function S(e, t, n, r) {
        const { features: a, progress: o } = E(e, n, r);
        return [a && a[t] ? a[t] : void 0, o];
      }
    },
    88064: (e, t, n) => {
      "use strict";
      n.d(t, { ZP: () => o, ad: () => r, et: () => a });
      const r = Object.freeze({ INIT: 0, REQ: 1, OK: 2, ERR: 3 }),
        a = Object.freeze({
          apiProgress: r.INIT,
          error: null,
          error_msg: null,
        }),
        o = r;
    },
    86321: (e, t, n) => {
      "use strict";
      function r() {
        var e;
        const t =
          null == (e = self) || null == (e = e.document) ? void 0 : e.cookie;
        return "string" == typeof t && t;
      }
      let a, o;
      function i(e) {
        if (e === a) return o;
        const t = {};
        return (
          e.split(";").forEach((e) => {
            if (0 === e.length) return;
            const n = e.indexOf("="),
              r = e.substring(0, n),
              a = e.substring(n + 1);
            t[r.trim()] = (function (e) {
              '"' === e[0] && '"' === e[e.length - 1] && (e = e.slice(1, -1));
              try {
                return decodeURIComponent(e);
              } catch (t) {
                return decodeURIComponent(encodeURIComponent(e));
              }
            })(a);
          }),
          (a = e),
          (o = t),
          t
        );
      }
      function s() {
        const e = r();
        return !1 === e ? {} : i(e);
      }
      function c(e) {
        const t = r();
        if (!1 !== t) return i(t)[e];
      }
      function l(e, t, n, a) {
        if (!1 === r()) return;
        let o = `${e}=${t};`;
        if (n) {
          const e = new Date();
          e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3),
            (o += `expires=${e.toUTCString()};`);
        }
        (o += "path=/;"),
          a && (o += `domain=${a};`),
          (self.document.cookie = o);
      }
      n.d(t, { $1: () => s, ej: () => c, pC: () => l });
    },
    42849: (e, t, n) => {
      "use strict";
      n.d(t, { C8: () => a, _8: () => r });
      const r = "#EE4D2D",
        a = "#066BC8";
    },
    73237: (e, t, n) => {
      "use strict";
      n.d(t, { Ds: () => a, Nr: () => o, ZP: () => i });
      var r = n(38918);
      function a(e, t) {
        let n = null;
        const r = () => {
            n && clearTimeout(n);
          },
          a = (...a) => {
            r(),
              (n = setTimeout(() => {
                e(...a), (n = null);
              }, t));
          };
        return (a.cancel = r), a;
      }
      function o(e, t) {
        return r.useRef(a(e, t)).current;
      }
      const i = a;
    },
    72288: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => r });
      const r = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    },
    10791: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = function (e, t, n) {
        if (Array.isArray(t) && t.length)
          for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r];
            if (!e || !Object.prototype.hasOwnProperty.call(e, a)) return n;
            e = e[a];
          }
        return e;
      };
    },
    20937: (e, t, n) => {
      "use strict";
      n.d(t, { on: () => q, Ue: () => K, S1: () => $ });
      const r = [
        { prefix: "{{", suffix: "}}" },
        { prefix: "__", suffix: "__" },
        { prefix: "_{", suffix: "}_" },
        { prefix: "#{", suffix: "}" },
      ];
      var a = n(61934),
        o = n(38918),
        i = n.n(o);
      function s(e) {
        let t, n, r;
        const a = e || 1;
        function o(e, o) {
          ++t > a && ((r = n), i(!0), ++t), n.set(e, o);
        }
        function i(e) {
          (t = 0), (n = new Map()), e || (r = new Map());
        }
        return (
          i(),
          {
            get: function (e) {
              let t = n.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = r.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set: function (e, t) {
              void 0 !== n.get(e) ? n.set(e, t) : o(e, t);
            },
          }
        );
      }
      const c = [s(5), s(5)];
      function l(e) {
        if (void 0 === e) return e;
        const t = /([\S]+)="([^"]+)"/g,
          n = {};
        let r;
        for (; (r = t.exec(e)); ) n[r[1]] = r[2];
        return n;
      }
      function d(e, t, n, r, i, s, u) {
        const p = [];
        let _ = "";
        const m = (e) => {
            i && s
              ? p.push(
                  o.createElement(
                    i,
                    (0, a.Z)({ key: p.length }, u, {
                      dangerouslySetInnerHTML: { __html: e },
                    })
                  )
                )
              : i
              ? p.push(o.createElement(i, (0, a.Z)({ key: p.length }, u), e))
              : p.push(e);
          },
          f = (e) => {
            if (e)
              if (Array.isArray(e)) e.forEach(f);
              else if ("string" == typeof e || "number" == typeof e) _ += e;
              else {
                if ((_ && (m(_), (_ = "")), !o.isValidElement(e)))
                  throw Error(
                    "Only String or valid React Element could be passed"
                  );
                p.push(o.cloneElement(e, { key: p.length }));
              }
          },
          h = (function (e, t) {
            const n = c[t ? 1 : 0],
              r = n.get(e);
            if (r) return r;
            const a = (function (e, t) {
              return new RegExp(
                "(?:" +
                  e
                    .map(({ prefix: e, suffix: t }) => e + "(.*?)" + t)
                    .join("|") +
                  (t
                    ? `|<[a-z-]+(?:\\s+[^>]+)/>|<([a-z-]+)(\\s+[^>]+)?>(.*?(?=<))</\\${
                        e.length + 1
                      }>`
                    : "") +
                  ")",
                "g"
              );
            })(e, t);
            return n.set(e, a), a;
          })(n, r);
        let E;
        h.lastIndex = 0;
        let g = 0;
        if (t && "object" == typeof t)
          e: for (; (E = h.exec(e)); ) {
            f(e.substring(g, E.index)), (g = E.index + E[0].length);
            let a = 1;
            for (let e = 0; e < n.length; e++, a++)
              if (void 0 !== E[a]) {
                const r = E[a];
                if (r in t) {
                  const e = t[r];
                  f(e);
                } else f(n[e].prefix + r + n[e].suffix);
                continue e;
              }
            if (r && void 0 !== E[a]) {
              const e = t[E[a]],
                r = d(E[a + 2], t, n, !1, i, s, u);
              if ("function" == typeof e) {
                const t = l(E[a + 1]),
                  n = 1 === r.length ? r[0] : r;
                f(e(n, null != t ? t : {}));
              } else f(r);
            } else f(E[0]);
          }
        return f(e.substring(g)), _ && m(_), p;
      }
      let u = (function (e) {
        return (
          (e.en = "en"),
          (e.id = "id"),
          (e.ms = "ms"),
          (e["zh-Hans"] = "zh-Hans"),
          (e["zh-Hant"] = "zh-Hant"),
          (e.th = "th"),
          (e.vi = "vi"),
          (e["pt-BR"] = "pt-BR"),
          (e["es-MX"] = "es-MX"),
          (e["es-CO"] = "es-CO"),
          (e["es-CL"] = "es-CL"),
          (e["es-AR"] = "es-AR"),
          (e.fr = "fr"),
          (e.pl = "pl"),
          (e["es-ES"] = "es-ES"),
          (e.hi = "hi"),
          (e.fil = "fil"),
          e
        );
      })({});
      const p = {
        one: (e) => e,
        few: (e) => e + "__few",
        many: (e) => e + "__many",
        other: (e) => e + "__other",
        noPlural: (e) => e,
      };
      function _(e) {
        return (
          "string" == typeof e && (e = parseInt(e, 10)), Math.floor(Math.abs(e))
        );
      }
      function m(e) {
        const t = (e = String(e)).indexOf(".");
        return -1 === t ? 0 : e.length - t - 1;
      }
      function f(e) {
        return (
          "string" == typeof e && (e = Number(e)), 1 === e ? "one" : "other"
        );
      }
      function h() {
        return "noPlural";
      }
      const E = {
        en: (e) => {
          const t = _(e),
            n = m(e);
          return 1 === t && 0 === n ? "one" : "other";
        },
        id: h,
        ms: h,
        "zh-Hans": h,
        "zh-Hant": h,
        th: h,
        vi: h,
        "pt-BR": (e) => {
          const t = _(e);
          return 1 === t || 0 === t ? "one" : "other";
        },
        "es-MX": f,
        "es-CO": f,
        "es-CL": f,
        "es-AR": f,
        pl: (e) => {
          const t = _(e),
            n = m(e),
            r = t % 10,
            a = t % 100,
            o = a >= 12 && a <= 14;
          if (1 === t && 0 === n) return "one";
          if (0 === n && r >= 2 && r <= 4 && !o) return "few";
          if (0 === n) {
            if (1 !== t && r >= 0 && r <= 1) return "many";
            if (r >= 5 && r <= 9) return "many";
            if (o) return "many";
          }
          return "other";
        },
        "es-ES": f,
        fr: (e) => {
          const t = _(e);
          return 1 === t || 0 === t ? "one" : "other";
        },
        hi: (e) => (
          "string" == typeof e && (e = Number(e)),
          0 === _(e) || 1 === e ? "one" : "other"
        ),
        fil: (e) => {
          const t = _(e),
            n = m(e);
          if (0 === n && (1 === t || 2 === t || 3 === t)) return "one";
          const r = t % 10;
          if (0 === n && r % 10 != 4 && 6 !== r && 9 !== r) return "one";
          const a =
            (function (e) {
              if ("string" == typeof e && isNaN(parseFloat(e))) return 0;
              const t = String(e).split(".")[1];
              return t ? parseInt(t, 10) : 0;
            })(e) % 10;
          return 0 !== n && 4 !== a && 6 !== a && 9 !== a ? "one" : "other";
        },
      };
      function g(e, t) {
        let n = e;
        return (
          t &&
            "object" == typeof t &&
            (n +=
              "#" +
              (function (e) {
                const t = Object.keys(e).sort(),
                  n = {};
                for (const r of t) n[r] = e[r];
                return JSON.stringify(n, (e, t) => {
                  return (0, o.isValidElement)(t)
                    ? `<${
                        "string" == typeof (n = t).type ? n.type : n.type.name
                      } .../>`
                    : t;
                  var n;
                });
              })(t)),
          n
        );
      }
      let S = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.FINAL_KEY = 1)] = "FINAL_KEY"),
          (e[(e.RAW_KEY = 2)] = "RAW_KEY"),
          e
        );
      })({});
      const I = [
          { prefix: "{{", suffix: "}}" },
          { prefix: "__", suffix: "__" },
          { prefix: "_{", suffix: "}_" },
          { prefix: "#{", suffix: "}" },
        ],
        R = "https://deo.shopeemobile.com/shopee/stm-sg-live",
        A = {
          [u.en]: "en",
          [u.id]: "id",
          [u.ms]: "ms-my",
          [u.th]: "th",
          [u.vi]: "vi",
          [u["zh-Hans"]]: "zh-hans",
          [u["zh-Hant"]]: "zh-hant",
          [u["pt-BR"]]: "pt-br",
          [u["es-MX"]]: "es-mx",
          [u["es-CO"]]: "es-co",
          [u["es-CL"]]: "es-cl",
          [u["es-AR"]]: "es-ar",
          [u.fr]: "fr",
          [u.pl]: "pl",
          [u["es-ES"]]: "es-es",
          [u.fil]: "fil",
          [u.hi]: "hi",
          default: "en",
        },
        b = {
          live: "",
          liveish: "",
          stable: "",
          staging: "staging",
          test: "test",
          uat: "uat",
          default: "",
        };
      function O({
        key: e,
        args: t,
        dict: n,
        pluralKey: a,
        pluralSuffix: o,
        lang: i,
        locale: s,
        localeDelimiter: c,
        placeholderPatterns: l,
        debug: d,
      }) {
        return d === S.RAW_KEY
          ? g(e, t)
          : ((e = P({
              key: e,
              args: t,
              dict: n,
              pluralKey: a,
              pluralSuffix: o,
              lang: i,
              locale: s,
              localeDelimiter: c,
            })),
            d === S.FINAL_KEY
              ? g(e, t)
              : n.hasOwnProperty(e)
              ? (function (e, t, n = r) {
                  return (
                    t &&
                      "object" == typeof t &&
                      Object.keys(t).forEach((a) => {
                        t &&
                          t.hasOwnProperty(a) &&
                          (e = (function (e, t, n, a = r) {
                            return e.replace(
                              (function (e, t) {
                                return new RegExp(
                                  e
                                    .map(
                                      ({ prefix: e, suffix: n }) => e + t + n
                                    )
                                    .join("|"),
                                  "g"
                                );
                              })(a, t),
                              () => n
                            );
                          })(e, a, t[a], n));
                      }),
                    e
                  );
                })(n[e], t, l)
              : e);
      }
      function P({
        key: e,
        args: t,
        dict: n,
        pluralKey: r,
        pluralSuffix: a,
        lang: o,
        locale: i,
        localeDelimiter: s,
      }) {
        if (t && t.hasOwnProperty(r)) {
          let i = t[r];
          const { key: s, category: c } = (function (e, t, n) {
            let r = E[t];
            r || (r = h);
            const a = r(n);
            return { key: (0, p[a])(e), category: a };
          })(e, o, i);
          n.hasOwnProperty(s)
            ? (e = s)
            : "few" === c ||
              "many" === c ||
              ("other" === c &&
                ("number" != typeof i && (i = Number(i)),
                1 !== i && n.hasOwnProperty(e + a) && (e += a)));
        }
        const c = `${e}${s}${i}`;
        n.hasOwnProperty(c) && (e = c);
        const l = `${e}${s}${i.toLowerCase()}`;
        return n.hasOwnProperty(l) && (e = l), e;
      }
      function C({ base: e, env: t, lang: n, cid: r, map: a }) {
        return T({ base: e, env: t, lang: n, cid: r, map: a });
      }
      function T({ base: e, env: t, lang: n, cid: r, map: a }) {
        const o = [
          A[n] || A.default,
          v(r) ? "col" + r : "",
          y({ env: t, lang: n, cid: r, map: a }),
          "json",
        ]
          .filter(Boolean)
          .join(".");
        return [R, e, b[t] || b.default, o].filter(Boolean).join("/");
      }
      function y({ env: e, lang: t, cid: n, map: r }) {
        let a = e.toLowerCase();
        a = "liveish" === a ? "live" : a;
        let o = `${t.toLowerCase()}-${a}`;
        return v(n) && (o = `${o}-${n}`), r[o];
      }
      function v(e) {
        return "number" == typeof e;
      }
      const w = "text/i18n-collections",
        N = "text/i18n-translations";
      var L = n(11793),
        D = n(86321);
      const U = "I18N_SHOW_KEYS";
      var k;
      n(54037),
        null == (k = window) || null == (k = k.document) || k.createElement,
        (n.g.__SHOPEE_SERVER_INSERTED_HTML_CONTEXT =
          n.g.__SHOPEE_SERVER_INSERTED_HTML_CONTEXT ||
          o.createContext(() => {}));
      const F = {
          subscribe: () => () => {},
          get: () => {},
          has: () => !1,
          set: (e, t) => {},
          assign: (e, t) => Object.assign({}, t),
          push: (e, ...t) => t.slice(),
        },
        M = i().createContext(F);
      function H(e, t) {
        const {
            subscribe: n,
            get: r,
            has: a,
            set: i,
            assign: s,
            push: c,
          } = (0, o.useContext)(M),
          [l, d] = (0, o.useState)(() => {
            if (a(e)) return r(e);
            if ("function" == typeof t) {
              const n = t();
              return i(e, n), n;
            }
            return i(e, t), t;
          });
        return (
          (0, o.useEffect)(() => n(e, (e) => d(() => e)), [n, e, d]),
          [
            l,
            (0, o.useMemo)(
              () => ({
                set: (t) => {
                  i(e, t), d(t);
                },
                assign: (t) => d(s(e, t)),
                push: (...t) => d(c(e, ...t)),
              }),
              [e, i, s, c, d]
            ),
          ]
        );
      }
      let Z,
        x,
        G,
        B,
        W,
        V,
        j = 0;
      const Y = !!window.__DECKER_HOOK__;
      function $({
        env: e,
        lang: t,
        locale: r,
        pluralKey: a,
        pluralSuffix: o,
      }) {
        (Z = e),
          (x = t),
          (G = r),
          (B = a),
          (W = o),
          (V = (function () {
            switch ((0, D.ej)(U)) {
              case "1":
                return S.FINAL_KEY;
              case "2":
                return S.RAW_KEY;
              default:
                return S.NONE;
            }
          })()),
          Y &&
            n
              .e(9194)
              .then(n.bind(n, 69194))
              .then(({ init: n }) => {
                n({ lang: t, env: e });
              });
      }
      function K({
        name: e,
        transifyManagerId: t,
        transifyManagerProject: r,
        transifyManagerCdnBase: a,
        transifyMapping: i = {},
        transifyCollectionMapping: s,
        pluralKey: c = B,
        pluralSuffix: l = W,
        placeholderPatterns: u,
      }) {
        const p = j++,
          _ = {},
          m = new Set(),
          f = new Map(),
          h = new Map(),
          E = (function () {
            const e =
              self && self.navigator
                ? navigator.connection ||
                  navigator.mozConnection ||
                  navigator.webkitConnection
                : null;
            return !!e && "4g" === e.effectiveType && !1 === e.saveData;
          })(),
          R = {},
          A = {
            t: function (e, t, n) {
              var r, a, o;
              return O({
                key: e,
                args: t,
                dict: _,
                pluralKey:
                  null != (r = null == n ? void 0 : n.pluralKey) ? r : c,
                pluralSuffix: l,
                lang: x,
                locale: G,
                localeDelimiter:
                  null != (a = null == n ? void 0 : n.localeDelimiter)
                    ? a
                    : "__",
                placeholderPatterns:
                  null != (o = null == n ? void 0 : n.placeholderPatterns)
                    ? o
                    : u,
                debug: V,
              });
            },
            tNode: function (e, t, n, r) {
              var a, o, i;
              return (function ({
                key: e,
                args: t,
                dict: n,
                pluralKey: r,
                pluralSuffix: a,
                lang: o,
                locale: i,
                localeDelimiter: s,
                wrapperElement: c,
                insertWrapperElementAsInnerHtml: l,
                elementProps: u,
                placeholderPatterns: p,
                formatRichText: _ = !1,
                debug: m,
              }) {
                var f;
                return m === S.RAW_KEY
                  ? [g(e, t)]
                  : ((e = P({
                      key: e,
                      args: t,
                      dict: n,
                      pluralKey: r,
                      pluralSuffix: a,
                      lang: o,
                      locale: i,
                      localeDelimiter: s,
                    })),
                    m === S.FINAL_KEY
                      ? [g(e, t)]
                      : d(
                          null != (f = n[e]) ? f : e,
                          null != t ? t : {},
                          null != p ? p : I,
                          _,
                          c,
                          l,
                          u
                        ));
              })({
                key: e,
                args: t,
                dict: _,
                pluralKey:
                  null != (a = null == r ? void 0 : r.pluralKey) ? a : c,
                pluralSuffix: l,
                lang: x,
                locale: G,
                localeDelimiter:
                  null != (o = null == r ? void 0 : r.localeDelimiter)
                    ? o
                    : "__",
                placeholderPatterns:
                  null != (i = null == r ? void 0 : r.placeholderPatterns)
                    ? i
                    : u,
                wrapperElement: null == r ? void 0 : r.wrapperElement,
                insertWrapperElementAsInnerHtml:
                  null == r ? void 0 : r.insertWrapperElementAsInnerHtml,
                elementProps: n,
                formatRichText: null == r ? void 0 : r.formatRichText,
                debug: V,
              });
            },
            addInitialTranslation: b,
            addInitialCollections: y,
            fetchTranslationFull: async function () {
              let e = await (async function ({
                lang: e,
                env: t,
                base: n,
                map: r,
                fetch: a,
              }) {
                return a(T({ base: n, env: t, lang: e, map: r }));
              })({ base: a, map: i, lang: x, env: Z, fetch: X });
              Y &&
                (e = (await n.e(9194).then(n.bind(n, 69194))).showTranslation(
                  e,
                  r
                )),
                Object.assign(_, e);
            },
            fetchTranslationCollection: v,
            useI18nCollections: function (...e) {
              const t = [],
                n = [],
                r = [];
              for (const a of e)
                f.has(a)
                  ? (n.push(a), f.get(a) instanceof TypeError || r.push(a))
                  : m.has(a) || t.push(a);
              if (window.Sentry && "live" === L.Xb.getEnv()) {
                if (r.length > 0) {
                  const e = r.join(", ");
                  R[e] ||
                    ((R[e] = !0),
                    window.Sentry.captureMessage(
                      "[i18n-fetch] Collections failed to download: " + e,
                      { tags: { feature: "i18n-fetch" }, level: "warning" }
                    ));
                }
              } else if (n.length > 0)
                throw new Error(
                  "Collections failed to download: " + n.join(", ")
                );
              if (t.length > 0) throw Promise.all(t.map(v));
            },
            withI18nCollections: function (e, t) {
              return function (n) {
                function r(t) {
                  return A.useI18nCollections(...e), o.createElement(n, t);
                }
                return (
                  E &&
                    e.forEach((e) =>
                      (function (e) {
                        if (!w.has(e)) {
                          w.add(e);
                          const t = document.createElement("link");
                          (t.rel = "prefetch"),
                            (t.as = "fetch"),
                            (t.href = C({
                              base: a,
                              env: Z,
                              lang: x,
                              cid: e,
                              map: s,
                            })),
                            document.head.appendChild(t);
                        }
                      })(e)
                    ),
                  function (e) {
                    return o.createElement(
                      o.Suspense,
                      { fallback: t ? o.createElement(t, null) : null },
                      o.createElement(r, e)
                    );
                  }
                );
              };
            },
            getTranslationFilePath: function () {
              return T({ base: a, env: Z, lang: x, map: i });
            },
            getTranslationCollectionFilePath: function (e) {
              return C({ base: a, env: Z, lang: x, cid: e, map: s });
            },
            I18nHydrator: function (e) {
              const [t] = H("i18n-cols", []),
                [n] = H("i18n-tran", {});
              return (
                o.useMemo(() => y(t), [t]), o.useMemo(() => b(n), [n]), null
              );
            },
          };
        function b(e) {
          Object.assign(_, e);
        }
        function y(e) {
          e.forEach((e) => m.add(e));
        }
        async function v(e) {
          if (!m.has(e))
            return (
              h.has(e) ||
                (h.set(
                  e,
                  (async function (e) {
                    try {
                      let t = await (async function ({
                        base: e,
                        cid: t,
                        lang: n,
                        env: r,
                        map: a,
                        fetch: o,
                      }) {
                        return o(
                          T({ base: e, env: r, lang: n, cid: t, map: a })
                        );
                      })({
                        base: a,
                        lang: x,
                        env: Z,
                        cid: e,
                        map: s,
                        fetch: X,
                      });
                      if (!t) throw new Error("translation is not available");
                      return (
                        Y &&
                          (t = (
                            await n.e(9194).then(n.bind(n, 69194))
                          ).showTranslation(t, r, e)),
                        Object.assign(_, t),
                        m.add(e),
                        h.delete(e),
                        t
                      );
                    } catch (t) {
                      throw (f.set(e, t), t);
                    } finally {
                      Y &&
                        (await n.e(9194).then(n.bind(n, 69194))).updateStatus(
                          p
                        );
                    }
                  })(e)
                ),
                Y && (await n.e(9194).then(n.bind(n, 69194))).updateStatus(p)),
              h.get(e)
            );
        }
        const w = new Set();
        return (
          Y &&
            n
              .e(9194)
              .then(n.bind(n, 69194))
              .then(({ debug: n }) => {
                n({
                  debugId: p,
                  name: e,
                  fetchedCollections: m,
                  pendingCollections: h,
                  failedCollections: f,
                  transifyCollectionMapping: s,
                  transifyMapping: i,
                  transifyManagerCdnBase: a,
                  transifyManagerProject: r,
                  transifyManagerId: t,
                });
              }),
          A
        );
      }
      function q(e, t) {
        try {
          document
            .querySelectorAll(`script[type="${N}"][data-name="${t}"]`)
            .forEach((t) => {
              try {
                const r = ((n = t.textContent), JSON.parse(n));
                e.addInitialTranslation(r);
              } catch (r) {}
              var n;
            });
        } catch (n) {}
        try {
          document
            .querySelectorAll(`script[type="${w}"][data-name="${t}"]`)
            .forEach((t) => {
              try {
                const n = t.textContent.split(",").map((e) => Number(e));
                e.addInitialCollections(n);
              } catch (n) {}
            });
        } catch (n) {}
      }
      async function X(e, t) {
        try {
          const n = await fetch(e, t);
          if (!n.ok) throw new Error(`${e} failed to download (${n.status}).`);
          return await n.json();
        } catch (n) {
          throw (
            (n instanceof TypeError && (n.message = n.message + ` (${e})`), n)
          );
        }
      }
    },
    32111: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => S, Z: () => H });
      var r = n(61934);
      function a(e) {
        return Boolean(
          e &&
            "object" == typeof e &&
            "[object RegExp]" !== Object.prototype.toString.call(e) &&
            "[object Date]" !== Object.prototype.toString.call(e)
        );
      }
      function o(e, t) {
        return t && !0 === t.clone && a(e)
          ? s(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
        var n;
      }
      function i(e, t, n) {
        const r = e.slice();
        return (
          t.forEach(function (t, i) {
            void 0 === r[i]
              ? (r[i] = o(t, n))
              : a(t)
              ? (r[i] = s(e[i], t, n))
              : -1 === e.indexOf(t) && r.push(o(t, n));
          }),
          r
        );
      }
      function s(e, t, n) {
        if (!e) return t;
        if (!t) return e;
        const r = Array.isArray(t);
        return r === Array.isArray(e)
          ? r
            ? ((n || { arrayMerge: i }).arrayMerge || i)(e, t, n)
            : (function (e, t, n) {
                const r = {};
                return (
                  a(e) &&
                    Object.keys(e).forEach(function (t) {
                      r[t] = o(e[t], n);
                    }),
                  Object.keys(t).forEach(function (i) {
                    a(t[i]) && e[i]
                      ? (r[i] = s(e[i], t[i], n))
                      : (r[i] = o(t[i], n));
                  }),
                  r
                );
              })(e, t, n)
          : o(t, n);
      }
      s.all = function (e, t) {
        if (!Array.isArray(e) || e.length < 2)
          throw new Error(
            "first argument should be an array with at least two elements"
          );
        return e.reduce(function (e, n) {
          return s(e, n, t);
        });
      };
      const c = s;
      var l = n(96662),
        d = n(65559),
        u = n.n(d);
      const p = -111,
        _ = ["/api/banner/get_list", "/api/banner/batch_list", "/__t__"],
        m = self.__LOCALE__ || "SG",
        f = self.__ENV__ || "test",
        h = u().env[f] + u().mall[m],
        E = "mall." + h,
        g = `https://${
          self &&
          self.location &&
          self.location.hostname &&
          self.location.hostname.startsWith("mall.")
            ? E
            : h
        }`,
        S = { PC: 0, RW: 1 };
      var I = n(78984),
        R = n(2944),
        A = n.n(R),
        b = String.fromCharCode;
      function O() {
        return b(45).__();
      }
      function P() {
        return String.fromCharCode(53);
      }
      function C() {
        var e = b(105).___();
        return (
          (e += b(70).__()),
          (e += O()),
          (e += b(110).___()),
          (e += (b(79) + b(78) + b(69)).__()),
          (e += O()),
          (e += b(109).___()),
          (e += (b(65) + b(84)).__()),
          (e += (b(67) + b(72)).__()) + O()
        );
      }
      (String.prototype.___ = String.prototype.toUpperCase),
        (String.prototype.__ = String.prototype.toLowerCase);
      var T = P();
      (T += P()),
        (T += String.fromCharCode(98)),
        (T += String.fromCharCode(48));
      const y = (T += String.fromCharCode(51));
      function v(e) {
        return new Promise(function (t) {
          t(e);
        })
          .then(N)
          .then(L)
          .then(w)
          .catch(function (e) {
            return (
              e.response.status,
              { error: "server-error", status: e.response.status }
            );
          });
      }
      function w(e) {
        return "string" == typeof e ||
          (e.error && e.data) ||
          (0 === e.error &&
            e.error_msg &&
            "success" === e.error_msg.toLowerCase())
          ? e
          : e.error && 0 !== e.error && e.error_msg && e.error_msg_raw
          ? { error: e.error_msg, error_msg_raw: e.error_msg_raw }
          : e.error && 0 !== e.error
          ? { error: e.error, error_response: e, error_msg: e.error_msg }
          : e.err && 0 !== e.err
          ? { error: e.err, error_msg: e.error_msg }
          : e.errmsg
          ? { error: e.errmsg, errmsg: e.errmsg }
          : e.error_msg
          ? { error: e.error_msg, error_msg: e.error_msg }
          : { response: e };
      }
      function N(e) {
        if (e.status >= 200 && e.status < 300) return e.json.bind(e), e;
        500 === e.status &&
          e.json().then((t) => {
            if ("ERROR_MAINTENANCE" === t.status) {
              if (e.url.includes("api/v4/mntmode"))
                return void (
                  "53484F504545" === t.key && window.location.reload()
                );
              fetch("api/v4/mntmode").then(N);
            }
          });
        const t = new Error(e.statusText);
        throw ((t.response = e), t);
      }
      async function L(e) {
        const t = e.headers && e.headers.get("content-type");
        if (t && t.toLowerCase().includes("text/plain")) return await e.text();
        const n = await (function (e) {
          return e.json();
        })(e);
        return n && n.constructor === Object
          ? (0, r.Z)({ status: e.status, headers: e.headers }, n)
          : n;
      }
      function D(e) {
        return new Promise(function (t) {
          t({ error: p, message: e.message });
        });
      }
      function U(e, t) {
        return (0, r.Z)({}, e, { [C()]: `${y}-${A()(`${y}${A()(t)}${y}`)}` });
      }
      var k = n(86321);
      const F = "csrftoken";
      function M(e, t) {
        const n = e + F;
        let r = (0, k.ej)(n);
        return (
          r ||
            ((r = (function (
              e,
              t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            ) {
              let n = "";
              for (let r = 0; r < e; r++) {
                let e = Math.floor(Math.random() * t.length);
                n += t.substring(e, e + 1);
              }
              return n;
            })(32)),
            (0, k.pC)(n, r, 0, t)),
          r
        );
      }
      function H(e, t) {
        const a = (function (e, t) {
            let n = {
              headers: {
                "X-Shopee-Language": (0, l.of)(),
                "X-Requested-With": "XMLHttpRequest",
                "X-API-SOURCE": "pc",
              },
              API_HOST: g,
            };
            return (
              e === S.RW &&
                (n.headers = Object.assign({}, n.headers, {
                  "X-API-SOURCE": "rweb",
                })),
              t && (n = c(n, t)),
              n
            );
          })(e, t),
          o = a.headers,
          i = {},
          s = { "X-Api-Src-List": [o["X-API-SOURCE"], "meta"].join(",") },
          d = () => ((0, I.r)() ? s : i),
          u = a.API_HOST,
          p = !!a.shouldAppendHost,
          m = a.cookieDomain,
          f = a.cookiePrefix || "",
          h = () => n.g.fetch;
        function E(e, t = { appendHost: p }) {
          const { appendHost: n } = t;
          return (
            _.find((t) => e.startsWith(t)) ||
              -1 !== e.indexOf("/api/v1") ||
              -1 !== e.indexOf("/api/v2") ||
              -1 !== e.indexOf("/api/v3") ||
              -1 !== e.indexOf("/api/v4") ||
              -1 !== e.indexOf("/api/payment") ||
              -1 !== e.indexOf("/shopeepay") ||
              -1 !== e.indexOf("/spba/frontend") ||
              -1 !== u.indexOf("localhost") ||
              e.startsWith("http") ||
              (["/backend", "/wallet", "/m/"].every(
                (t) => -1 === e.indexOf(t)
              ) &&
                -1 === e.indexOf("/api/v0") &&
                (e = "/api/v0" + e)),
            n ? u + e : e
          );
        }
        return {
          syncPost: function (e, t) {
            const n = document.createElement("form");
            n.setAttribute("method", "post"), n.setAttribute("action", E(e));
            for (let r in t) {
              const e = t[r],
                a = document.createElement("input");
              a.setAttribute("type", "hidden"),
                a.setAttribute("name", r),
                a.setAttribute("value", e),
                n.appendChild(a);
            }
            document.body.appendChild(n), n.submit();
          },
          adPost: function (e, t) {
            return h()(e, { method: "post", body: JSON.stringify(t) })
              .then(v)
              .catch(D);
          },
          fetchInfo: function (e, t = {}) {
            const n = e.slice(e.indexOf("?") + 1),
              a = U(
                (0, r.Z)({}, o, d(), t.headers, {
                  "X-Shopee-Language": (0, l.of)(),
                }),
                n.replace(/[!'()*]/g, escape)
              );
            return h()(E(e), {
              credentials: t.credentials || "include",
              headers: a,
            })
              .then(v)
              .catch(D);
          },
          jsonPost: function (e, t, n = {}) {
            e = E(e);
            const a = n.skipStringify ? t : JSON.stringify(t);
            return h()(e, {
              method: "POST",
              headers: U(
                (0, r.Z)(
                  {},
                  o,
                  d(),
                  {
                    "X-CSRFToken": M(f, m),
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  n.headers,
                  { "X-Shopee-Language": (0, l.of)() }
                ),
                a
              ),
              credentials: n.credentials || "include",
              body: a,
            })
              .then(v)
              .catch(D);
          },
          formPost: function (e, t) {
            return (function (e, t, n = {}) {
              const a = new FormData();
              for (let r in t) a.append(r, t[r]);
              return h()(E(e), {
                method: "POST",
                headers: (0, r.Z)({}, o, d(), { "X-CSRFToken": M(f, m) }, n),
                credentials: "include",
                body: a,
              })
                .then(v)
                .catch((e) => ({ error: e }));
            })(e, t);
          },
          simplePost: function (e, t) {
            return h()(E(e), {
              method: "POST",
              body: JSON.stringify(t),
              headers: (0, r.Z)({}, o, d()),
            })
              .then(v)
              .catch(D);
          },
          fetch: h(),
          utilFetch: h(),
          makeFullUrl: E,
          postFetchHandler: v,
          onFailHandler: D,
          genericHttp: function (e, t = {}, n) {
            const a = e.slice(e.indexOf("?") + 1);
            e = E(e);
            const i = JSON.stringify(n),
              s = a.replace(/[!'()*]/g, escape);
            return h()(e, {
              method: t && t.method ? t.method : "GET",
              headers: U(
                (0, r.Z)(
                  {},
                  o,
                  d(),
                  {
                    "X-CSRFToken": M(f, m),
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  t.headers
                ),
                t && t.method && "POST" === t.method.toUpperCase() ? i : s
              ),
              credentials: "include",
              body: i,
            });
          },
        };
      }
    },
    96662: (e, t, n) => {
      "use strict";
      n.d(t, {
        Kd: () => _,
        Xw: () => f,
        dU: () => m,
        hJ: () => g,
        j0: () => h,
        of: () => E,
      });
      var r = n(86321),
        a = n(66517),
        o = n(96234),
        i = n(82646),
        s = n(77317),
        c = n(65559),
        l = n.n(c);
      const d = "language",
        u = "override_language",
        p = 9999;
      function _() {
        return self.__LOCALE__;
      }
      function m() {
        return self.__ENV__;
      }
      function f() {
        return !!h();
      }
      function h() {
        if ((0, i.xT)()) {
          const e = (function () {
            const e = self.navigator.userAgent,
              t = e.indexOf("locale");
            if (t < 0) return;
            let n = e.substr(t + 7, 2);
            return (
              "pt" === n && (n = e.substr(t + 7, 5)),
              "zh" === n && (n = e.substr(t + 7, 7)),
              "es" === n && (n = e.substr(t + 7, 5)),
              "fil" === e.substr(t + 7, 3) && (n = "fil"),
              (0, a.convertToStandardLanguage)(n)
            );
          })();
          if (e) return e;
        }
        const e = (function () {
          var e;
          const t = (0, s.AW)(null == (e = self.location) ? void 0 : e.search)[
            u
          ];
          if (t) return (0, a.convertToStandardLanguage)(t);
        })();
        if (e) return e;
        const t = (0, r.ej)(d);
        return t ? (0, a.convertToStandardLanguage)(t) : void 0;
      }
      function E() {
        return (
          h() ||
          (0, a.convertToStandardLanguage)(
            (
              o.COUNTRY_CONFIG[self.__LOCALE__] ||
              o.COUNTRY_CONFIG.default ||
              {}
            ).language
          ) ||
          a.DEFAULT_LANGUAGE
        );
      }
      function g(e) {
        (0, r.pC)(d, "", -1);
        const t = self.location.hostname,
          n = l().env[m()] + l().mall[_()],
          o = new RegExp(n.replace(/\./g, "\\.") + "$").test(t)
            ? "." + n
            : void 0;
        (0, r.pC)(d, (0, a.convertToNonStandardLanguage)(e || ""), p, o);
      }
    },
    24318: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = class {
        constructor() {
          (this.subscribers = []),
            (this.publish = (e) =>
              new Promise((t) => {
                "function" == typeof self.requestIdleCallback
                  ? self.requestIdleCallback(() => {
                      this._notifySubscriber(e).then(t);
                    })
                  : this._notifySubscriber(e).then(t);
              })),
            (this.subscribe = (e, t) => (
              this.subscribers.push({ selector: e, subscriber: t }),
              this._unsubscribe.bind(this, e, t)
            )),
            (this._notifySubscriber = (e) => {
              const t = JSON.stringify(e) || "";
              return Promise.all(
                this.subscribers.map((n) => {
                  if (n.selector(e)) return n.subscriber(JSON.parse(t));
                })
              );
            }),
            (this._unsubscribe = (e, t) => {
              const n = this.subscribers.findIndex(
                (n) => n.selector === e && n.subscriber === t
              );
              this.subscribers.splice(n, 1);
            });
        }
      };
    },
    68058: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => r });
      let r = (function (e) {
        return (
          (e.DEFAULT = "default"),
          (e.OFS = "ofs"),
          (e.S_MART = "s-mart"),
          (e.HEB = "heb"),
          e
        );
      })({});
    },
    58159: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => r.Q });
      var r = n(68058);
    },
    37195: (e, t, n) => {
      "use strict";
      n.d(t, { Dt: () => r.Dt, gn: () => r.gn, iw: () => a, t4: () => o });
      var r = n(82646);
      const a = Object.freeze({
          IOS_WEB: 1,
          IOS_APP: 2,
          ANDROID_WEB: 3,
          ANDROID_APP: 4,
          PC_MALL: 5,
          IOS_LITE: 6,
          ANDROID_LITE: 7,
          OTHERS: 128,
        }),
        o = (0, r.tq)()
          ? (0, r.Dt)()
            ? a.ANDROID_WEB
            : (0, r.gn)()
            ? a.IOS_WEB
            : a.OTHERS
          : a.PC_MALL;
    },
    69391: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(38918),
        a = n(43486);
      function o({ to: e, isServerRender: t }) {
        return e &&
          ("object" != typeof e ||
            (void 0 !== e.pathname && void 0 !== e.search))
          ? "string" == typeof e &&
            (function (e) {
              return /^http/.test(e);
            })(e)
            ? t
              ? r.createElement(a.Route, {
                  render: ({ staticContext: t }) => (
                    t && ((t.url = e), (t.status = 302)), null
                  ),
                })
              : ((self.location = e), null)
            : t
            ? r.createElement(a.Route, {
                render: ({ staticContext: t }) => (
                  t && (t.status = 302), r.createElement(a.Redirect, { to: e })
                ),
              })
            : r.createElement(a.Redirect, { to: e })
          : null;
      }
    },
    35782: (e, t, n) => {
      "use strict";
      n.d(t, { Pf: () => i, SV: () => o });
      var r = n(61934),
        a = n(38918);
      class o extends a.Component {
        constructor(e) {
          super(e), (this.state = { error: null });
        }
        catchServerError(e) {
          (e = e || "Unknown SSR error, please report to Web FE Platform team"),
            this.setState({ error: new Error(e) });
        }
        componentDidCatch(e, t) {
          var n;
          this.setState({ error: e }),
            window &&
              window.Sentry &&
              (null == (n = window.Sentry) ||
                n.withScope((n) => {
                  var r;
                  "string" == typeof this.props.errorLevel &&
                    n.setLevel(this.props.errorLevel),
                    Object.keys(t).forEach((e) => {
                      n.setExtra(e, t[e]);
                    }),
                    null == (r = window.Sentry) || r.captureException(e);
                }));
        }
        render() {
          const { error: e } = this.state,
            { errorComponent: t, errorComponentProps: n } = this.props;
          if (e) {
            if (t) {
              const o = t;
              return a.createElement(o, (0, r.Z)({ error: e }, n));
            }
            return null;
          }
          return this.props.children;
        }
      }
      function i(e, t, { errorLevel: n } = {}) {
        return function (r) {
          return a.createElement(
            o,
            { errorComponent: t, errorLevel: n },
            a.createElement(e, r)
          );
        };
      }
    },
    20545: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => _ });
      var r = n(38918),
        a = n(30600),
        o = n.n(a),
        i = n(59487),
        s = n(82646),
        c = n(82851),
        l = n(65761);
      const d = () => {},
        u = function ({
          contentClassName: e,
          title: t = "",
          isCentered: n = !1,
          hideIcon: a = !1,
          onClick: u = d,
          rightContent: p,
          onTrackingClick: _ = d,
        }) {
          const {
              config: {
                legacyDisableExtraTopOffsetIOS: m,
                disableSafeAreaInsetTopIOS: f,
              },
            } = (0, c.useUserWebViewContext)(),
            h = !f && (0, s.uE)() && (0, s.gn)();
          return r.createElement(
            "div",
            {
              className: o()(
                l.Z.navbar,
                h && (m ? l.Z.navbarIOSWithoutExtraTopOffset : l.Z.navbarIOS)
              ),
            },
            a
              ? r.createElement("div", { className: l.Z.noIconPlaceholder })
              : r.createElement(i.Z, {
                  className: l.Z.icon,
                  onClick: (e) => {
                    e.preventDefault(), _ && _(), u();
                  },
                }),
            r.createElement(
              "div",
              { className: o()(l.Z.content, n && l.Z.contentCentered, e) },
              r.createElement("div", { className: l.Z.title }, t)
            ),
            p && r.createElement("div", { className: l.Z.rightContent }, p)
          );
        },
        p = r.lazy(() => n.e(6594).then(n.bind(n, 36594))),
        _ = function (e) {
          const { isInited: t } = (0, c.useUserWebViewContext)();
          return t
            ? r.createElement(u, e)
            : r.createElement(
                r.Suspense,
                { fallback: r.createElement("div", null) },
                r.createElement(p, e)
              );
        };
    },
    59487: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(61934),
        a = n(38918);
      function o(e) {
        return a.createElement(
          "svg",
          (0, r.Z)({ viewBox: "0 0 22 17" }, e),
          a.createElement(
            "g",
            {
              stroke: "none",
              strokeWidth: "1",
              fillRule: "evenodd",
              transform: "translate(-3, -6)",
            },
            a.createElement("path", {
              d: "M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z",
            })
          )
        );
      }
    },
    25514: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => o });
      var r = n(38918),
        a = n.n(r);
      function o(e, t) {
        a().useEffect(() => {
          const t = e();
          if (Array.isArray(t)) return t[1];
        }, t);
      }
    },
    50624: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = function (e, t) {
        return function (n = t, r) {
          return r && e.hasOwnProperty(r.type) ? e[r.type](n, r) : n;
        };
      };
    },
    45641: (e, t, n) => {
      "use strict";
      function r(e, t) {
        return Object.assign({ type: e }, t);
      }
      function a(e) {
        return {
          NAME: `${e}`,
          REQUESTED: `${e}_REQUESTED`,
          SUCCESS: `${e}_SUCCESS`,
          FAILED: `${e}_FAILED`,
        };
      }
      n.d(t, { a: () => r, n: () => a });
    },
    67711: (e, t, n) => {
      "use strict";
      n.d(t, { Jo: () => s, sY: () => o });
      var r = n(96662),
        a = n(73044);
      const o = "live" === (0, r.dU)() || "liveish" === (0, r.dU)();
      let i;
      switch ((0, r.Kd)()) {
        case "MY":
          i = "title_home_page_new_my";
          break;
        case "PH":
          i = "title_home_page_new_ph";
          break;
        case "SG":
          i = "title_home_page_new_sg";
          break;
        case "IN":
          i = "title_home_page_new_in";
          break;
        default:
          i = "title_home_page_new";
      }
      const s = i;
      a.TE.SG.iOS,
        a.TE.MY.iOS,
        a.TE.TH.iOS,
        a.TE.TW.iOS,
        a.TE.ID.iOS,
        a.TE.VN.iOS,
        a.TE.PH.iOS,
        a.TE.BR.iOS,
        a.TE.MX.iOS,
        a.TE.CO.iOS,
        a.TE.CL.iOS,
        a.TE.AR.iOS,
        a.TE.FR.iOS,
        a.TE.PL.iOS,
        a.TE.ES.iOS,
        a.TE.IN.iOS,
        a.TE.SG.Android,
        a.TE.MY.Android,
        a.TE.TH.Android,
        a.TE.TW.Android,
        a.TE.ID.Android,
        a.TE.VN.Android,
        a.TE.PH.Android,
        a.TE.BR.Android,
        a.TE.MX.Android,
        a.TE.CO.Android,
        a.TE.CL.Android,
        a.TE.AR.Android,
        a.TE.FR.Android,
        a.TE.PL.Android,
        a.TE.ES.Android,
        a.TE.IN.Android,
        a.TE.SG.iOS,
        a.TE.MY.iOS,
        a.TE.TH.iOS,
        a.TE.TW.iOS,
        a.TE.ID.iOS,
        a.TE.VN.iOS,
        a.TE.PH.iOS,
        a.TE.BR.iOS,
        a.TE.MX.iOS,
        a.TE.CO.iOS,
        a.TE.CL.iOS,
        a.TE.AR.iOS,
        a.TE.FR.iOS,
        a.TE.PL.iOS,
        a.TE.ES.iOS,
        a.TE.IN.iOS,
        a.TE.SG.Android,
        a.TE.MY.Android,
        a.TE.TH.Android,
        a.TE.TW.Android,
        a.TE.ID.Android,
        a.TE.VN.Android,
        a.TE.PH.Android,
        a.TE.BR.Android,
        a.TE.MX.Android,
        a.TE.CO.Android,
        a.TE.CL.Android,
        a.TE.AR.Android,
        a.TE.FR.Android,
        a.TE.PL.Android,
        a.TE.ES.Android,
        a.TE.IN.Android;
    },
    89049: (e, t, n) => {
      "use strict";
      n.d(t, {
        WN: () => b,
        Eg: () => S,
        Lk: () => g,
        SV: () => E,
        Co: () => I,
        WU: () => d,
        Jn: () => R,
        NF: () => A,
      });
      var r = n(65559),
        a = n.n(r),
        o = n(39855),
        i = n(96662);
      const s = new RegExp(
          [
            "cf.shopee.",
            "f.shopee.",
            ".mms.shopee.",
            ".img.susercontent.com",
          ].join("|")
        ),
        c = /^http(s)?:\/\//,
        l = /(&quot;?|[&<>"'/])/g,
        d = (e) => {
          if (!s.test(e)) return null;
          e.endsWith("/") && (e = e.slice(0, e.length - 1));
          const t = e.replace(c, "").split("/");
          if (t.length < 3) return null;
          let n = t[t.length - 1];
          if (n.startsWith("http")) {
            const e = decodeURIComponent(n);
            return d(e);
          }
          return (
            n.includes(".") && (n = n.split(".")[0]),
            n.includes("_") && (n = n.split("_")[0]),
            n.includes("@") && (n = n.split("@")[0]),
            (n = decodeURIComponent(n).replace(l, "")),
            n
          );
        },
        u = /_tn$/,
        p = { VN: "banhang" },
        _ = { TW: "zhibo" },
        m = { TW: "xiapi" },
        f = `https://${a().env[(0, i.dU)()]}${a().mall[(0, i.Kd)()]}`,
        h = `https://${a().image[(0, i.Kd)()]}/file`;
      function E(e = {}) {
        const {
          isChinaProxy: t = !1,
          env: n = (0, i.dU)(),
          locale: r = (0, i.Kd)(),
        } = e;
        return t
          ? `https://${m[r] || r.toLowerCase()}.${a().env[n]}shopee.cn`
          : `https://${a().env[n]}${a().mall[r]}`;
      }
      function g(e = {}) {
        const {
          isChinaProxy: t = !1,
          env: n = (0, i.dU)(),
          locale: r = (0, i.Kd)(),
        } = e;
        return t
          ? `https://seller.${m[r] || r.toLowerCase()}.${a().env[n]}shopee.cn`
          : `https://${p[r] || "seller"}.${a().env[n]}${a().mall[r]}`;
      }
      function S(e = {}) {
        const {
          isChinaProxy: t = !1,
          isKoreaProxy: n = !1,
          env: r = (0, i.dU)(),
          locale: o = (0, i.Kd)(),
        } = e;
        return t
          ? `https://${_[o] || "live"}.${m[o] || o.toLowerCase()}.${
              a().env[r]
            }shopee.cn`
          : n
          ? `https://live.${o.toLowerCase()}.${a().env[r]}shopee.kr`
          : `https://live.${a().env[r]}${a().mall[o]}`;
      }
      function I() {
        return `https://lite.${a().env[(0, i.dU)()]}${a().mall[(0, i.Kd)()]}`;
      }
      function R(e, t = !1) {
        return A(e, { thumbnail: t });
      }
      function A(e, t = {}) {
        return (function (e, t, n = {}) {
          if (!e) return "";
          if (e.startsWith("http")) {
            const t = d(e);
            if (!t) return e;
            e = t;
          }
          e = encodeURIComponent(e).replace(/\u0027/g, "%27");
          const { thumbnail: r, width: a, webp: o } = n;
          return (
            r && !u.test(e) && (e += "_tn"),
            "number" == typeof a && (e += `@resize_w${a}_nl`),
            o && (e += ".webp"),
            `${t}/${e}`
          );
        })(e, h, t);
      }
      function b(e) {
        if (!e) return f;
        const { hostname: t, href: n } = (0, o.l)(e);
        return t ? n : `${f}${e}`;
      }
    },
    39855: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => o });
      const r = "",
        a = /^((?:pluang):)\/\/([a-zA-Z0-9.-]+?)(\/|\?|#|$)/;
      function o(e) {
        if (self && self.URL)
          try {
            const {
              host: t = r,
              pathname: n = r,
              hostname: a = r,
              hash: o = r,
              search: i = r,
              href: s = r,
              protocol: c = r,
              origin: l = r,
            } = new URL(e);
            if (!t || !a || !n)
              throw new Error(
                "Instance of URL returns wrong values, trying fallback method"
              );
            return {
              host: t,
              hostname: a,
              pathname: n,
              hash: o,
              search: i,
              href: s,
              protocol: c,
              origin: l,
            };
          } catch (E) {}
        let t = null,
          n = "",
          o = null,
          i = null;
        const s = e.replace(a, (e, r, a, s) => {
            (t = r), (n = a);
            const c = n.replace(/\./g, "\\.");
            return (
              (o = new RegExp("^" + c, "i")),
              (i = new RegExp("^http:\\/\\/" + c, "i")),
              "http://" + a + s
            );
          }),
          c = document.createElement("a");
        c.href = s;
        let {
          host: l,
          hostname: d,
          pathname: u,
          hash: p,
          search: _,
          origin: m,
          href: f,
          protocol: h,
        } = c;
        return (
          t &&
            o &&
            i &&
            ((l = l.replace(o, n)),
            (d = d.replace(o, n)),
            (u = "/" === u ? "" : u),
            (m = m.replace(i, t + "//" + n)),
            (f = e),
            (h = t)),
          (u = "" !== u && "/" !== u[0] ? "/" + u : u),
          (m = m && "null" !== m ? m : h + "//" + l),
          {
            host: l,
            pathname: u,
            hostname: d,
            hash: p,
            search: _,
            href: f,
            protocol: h,
            origin: m,
          }
        );
      }
    },
    77317: (e, t, n) => {
      "use strict";
      n.d(t, {
        $o: () => P,
        AG: () => C,
        AN: () => O,
        AW: () => f,
        Fr: () => h,
        Ge: () => l,
        N0: () => g,
        Nz: () => _,
        Wc: () => m,
        Xd: () => R,
        ZY: () => E,
        a8: () => b,
        ct: () => u,
        d3: () => A,
        lA: () => d,
        n0: () => I,
        qe: () => c,
        xd: () => S,
        zP: () => o,
      });
      var r = n(61934),
        a = n(39855);
      const o =
          /^(mall\.)?(test\.|uat\.|test-stable\.|staging\.|live-test\.)?shopee\.(co\.(id|th)|com\.(my|br|mx|co|ar)|sg|vn|tw|ph|cl|pl|es)$/,
        i =
          /^(seller\.|live\.)?(sg|th|vn|id|ph|br|my|xiapi|mx|co|cl|pl)\.((test|uat|staging|live-test|test-stable)\.)?shopee\.cn$/,
        s =
          /^(live\.)?(sg|th|vn|id|ph|br|my|tw|mx|co|cl|pl)\.((test|uat|staging|live-test|test-stable)\.)?shopee\.kr/,
        c =
          /(\.shopee|^www.shopee|^shopee)\.(co\.(id|th)|com\.(my|br|co|mx|ar)|sg|vn|tw|ph|cl|fr|pl|es|in|cn|kr)$/,
        l = /(([^.]+\.)+|^)shp\.ee$/,
        d = /^(localhost|0\.0\.0\.0|127\.0\.0\.1)$/,
        u = [
          /^(seller\.)((xiapi|sg|th|vn|id|ph|br|my|tw|mx|co|cl|in|ar|pl|fr|es)\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.cn$/,
          /^(banhang\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.vn$/,
          /^(seller\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.(co\.(id|th)|com\.(ar|br|co|mx|my)|cl|es|fr|in|ph|pl|sg|tw)$/,
        ],
        p = [/(\.now|^now)\.vn(\/|$)/],
        _ = [d, c, l];
      function m(e, t = !1) {
        if (!e) return "";
        const n = Object.keys(e).filter((t) => null != e[t]);
        return n.length
          ? (t ? "" : "?") +
              n
                .sort()
                .map(function (t) {
                  return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                })
                .join("&")
          : "";
      }
      function f(e) {
        const t = {};
        if ("string" != typeof e || 0 === e.length) return t;
        if ((0 === e.indexOf("?") && (e = e.substr(1)), !e.length)) return t;
        const n = e.split("&");
        for (let r = 0; r < n.length; r++) {
          const e = n[r].split("="),
            a = e[0];
          let o = e[1];
          (o = "string" == typeof o ? o.replace(/\+/g, "%20") : o),
            (o = decodeURIComponent(o)),
            (t[a] = o);
        }
        return t;
      }
      function h(e) {
        return "string" == typeof e
          ? e.trim().split(",").map(decodeURIComponent)
          : e;
      }
      function E(e, t) {
        const n = m(t);
        if (!n.substring(1)) return e;
        let [r, a] = e.split("#");
        return (
          (r = r.indexOf("?") > -1 ? `${r}&${n.substring(1)}` : `${r}${n}`),
          a ? `${r}#${a}` : r
        );
      }
      function g(e, t, n = !0, o = !1) {
        const { origin: i, pathname: s, search: c, hash: l } = (0, a.l)(e),
          d = f(c);
        return E((n ? i : "") + s + (o ? l : ""), (0, r.Z)({}, d, t));
      }
      function S(e) {
        if (!e) return !1;
        const { hostname: t } = (0, a.l)(e);
        return c.test(t);
      }
      function I(e) {
        if (!e) return !1;
        const { hostname: t } = (0, a.l)(e);
        return u.some((e) => e.test(t));
      }
      function R(e) {
        if (!e) return !1;
        const { hostname: t } = (0, a.l)(e);
        return i.test(t);
      }
      function A(e) {
        if (!e) return !1;
        const { hostname: t } = (0, a.l)(e);
        return s.test(t);
      }
      function b(e) {
        if (!e) return !1;
        const { hostname: t } = (0, a.l)(e);
        return d.test(t);
      }
      function O(e) {
        if (!e) return !1;
        const { hostname: t } = (0, a.l)(e);
        return d.test(t) || c.test(t) || l.test(t) || i.test(t);
      }
      function P(e) {
        if (!e) return !1;
        const { hostname: t } = (0, a.l)(e);
        return p.some((e) => e.test(t));
      }
      function C(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return {};
        }
      }
    },
    6507: (e, t, n) => {
      "use strict";
      n.d(t, {
        $D: () => E,
        Aj: () => r,
        GM: () => g,
        HG: () => p,
        HY: () => o,
        MY: () => i,
        Nl: () => h,
        Pl: () => S,
        TQ: () => m,
        _$: () => _,
        aC: () => d,
        bs: () => l,
        cB: () => c,
        cw: () => f,
        gl: () => s,
        o$: () => a,
        yz: () => u,
      });
      const r = /(iPhone|iPad|iPod)/,
        a = /Android/,
        o = /Mobi/,
        i = /(FB_IAB|FBAV|FBAN)/,
        s = /messenger/i,
        c = /instagram/i,
        l = /beeshop|shopee/i,
        d = /airpay|shopeepay/i,
        u = /now/i,
        p = /mitra/i,
        _ = /shopee.*app_type=2(\s|$)/i,
        m = /shopee-toc-acc-sdk/i,
        f = /shopee-tob-acc-sdk/i,
        h = /spinjam.*app_type=20(\s|$)/i,
        E = /shopee.*food.*driver/i,
        g = /WhatsApp/,
        S = /seatalk/i;
    },
    82646: (e, t, n) => {
      "use strict";
      n.d(t, {
        Df: () => m,
        Dt: () => o,
        N1: () => u,
        Rl: () => d,
        UX: () => h,
        YO: () => s,
        fK: () => c,
        gn: () => a,
        ij: () => E,
        pf: () => p,
        r: () => _,
        tq: () => i,
        uE: () => f,
        vu: () => g,
        xT: () => l,
      });
      var r = n(6507);
      const a = () => !!r.Aj.exec(E()),
        o = () => !!r.o$.exec(E()),
        i = () => !!r.HY.exec(E()),
        s = () => !!r.MY.exec(E()) && !r.gl.exec(E()),
        c = () => !!r.cB.exec(E()),
        l = () => !!r.bs.exec(E()),
        d = () => !!r._$.exec(E()),
        u = () => !!r.$D.exec(E()),
        p = () => !!r.Nl.exec(E()),
        _ = () => !!r.cw.exec(E()),
        m = () =>
          !!r.aC.exec(E()) ||
          !!r.yz.exec(E()) ||
          !!r.HG.exec(E()) ||
          d() ||
          u() ||
          !!r.TQ.exec(E()) ||
          p() ||
          !!r.Pl.exec(E()),
        f = () => l() || m(),
        h = () => r.GM.test(E());
      function E() {
        var e;
        return (null == (e = self.navigator) ? void 0 : e.userAgent) || "";
      }
      function g(e) {
        if (!e) return null;
        const t = e.match(/Chrome\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/);
        return t && 5 === t.length
          ? { major: +t[1], minor: +t[2], build: +t[3], patch: +t[4] }
          : null;
      }
    },
    17675: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => d, y: () => u });
      var r = {};
      function a(e, t) {
        const n = t.isSupported.bind(this, e),
          r = t.getItem.bind(this, e),
          a = t.setItem.bind(this, e),
          o = t.removeItem.bind(this, e);
        return {
          read: r,
          get: r,
          getItem: r,
          write: a,
          set: a,
          setItem: a,
          remove: o,
          removeItem: o,
          clear: t.clear.bind(this, e),
          isSupported: n,
        };
      }
      n.r(r),
        n.d(r, {
          clear: () => l,
          getItem: () => i,
          isSupported: () => o,
          removeItem: () => c,
          setItem: () => s,
        });
      const o = (e) => {
          const t = "SPC_" + e + "_TEST_KEY";
          try {
            return !(
              !self ||
              !self[e] ||
              (self[e].setItem(t, t), self[e].removeItem(t), 0)
            );
          } catch (n) {
            return !1;
          }
        },
        i = (e, t) => {
          try {
            if (window && window[e]) {
              const n = window[e].getItem(t);
              return n ? JSON.parse(n) : void 0;
            }
          } catch (n) {
            return;
          }
        },
        s = (e, t, n) => {
          try {
            if (window && window[e]) {
              const r = JSON.stringify(n);
              window[e].setItem(t, r);
            }
          } catch (r) {}
        },
        c = (e, t) => {
          try {
            window && window[e] && window[e].removeItem(t);
          } catch (n) {}
        },
        l = (e, t) => {
          const n = {};
          t &&
            t.forEach((t) => {
              n[t] = i(e, t);
            });
          try {
            window && window[e] && window[e].clear();
          } catch (r) {}
          t &&
            t.forEach((t) => {
              n[t] && s(e, t, n[t]);
            });
        },
        d = a("localStorage", r),
        u = a("sessionStorage", r);
    },
    63882: () => {},
    29812: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => c });
      var r = n(61934);
      n(43482);
      const a = (0, n(45641).n)("FETCH_FEATURE_TOGGLES");
      var o = n(50624),
        i = n(88064);
      const s = { toggles: {}, fetchStatus: i.ZP.INIT, updateTime: 0 },
        c = (0, o.Z)(
          {
            [a.REQUESTED]: (e) => (0, r.Z)({}, e, { fetchStatus: i.ZP.REQ }),
            [a.SUCCESS]: (e, t) => {
              let n = {};
              const a = t;
              if (
                a.payload &&
                a.payload.response &&
                a.payload.response.data &&
                Array.isArray(a.payload.response.data)
              )
                for (const r of a.payload.response.data) n[r.name] = r.toggle;
              else n = (0, r.Z)({}, e.toggles);
              return (0, r.Z)({}, e, {
                toggles: n,
                userid: a.payload.userid,
                fetchStatus: i.ZP.OK,
                updateTime: Date.now(),
              });
            },
            [a.FAILED]: (e) => (0, r.Z)({}, e, { fetchStatus: i.ZP.ERR }),
          },
          s
        );
    },
    52280: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => u, u: () => l });
      var r = n(64934),
        a = n(11793);
      const o = "/api/v4/platform/get_ft_v2",
        i = [-99, -999, 10005],
        s = { headers: { "Accept-Encoding": "identity" } };
      var c = n(69689);
      async function l() {
        let e = (0, r.v)();
        if (e) return e;
        let t = !0;
        try {
          const { data: n, error: r } = await (async function (e) {
            const {
              data: t,
              error: n,
              error_msg: r,
            } = await a.FetchUtils.get(o, e ? s : void 0);
            return { data: t, error: n, error_msg: r };
          })();
          !r && n && n.length
            ? (e = (function (e) {
                if (e && Array.isArray(e)) {
                  const t = {};
                  for (const n of e) t[n.name] = n.toggle;
                  return t;
                }
                return {};
              })(n))
            : r && i.includes(r) && (t = !1);
        } catch (l) {}
        e
          ? (function (e) {
              if (e)
                try {
                  localStorage.setItem(d, JSON.stringify(e));
                } catch (l) {}
            })(e)
          : (window.Sentry &&
              t &&
              window.Sentry.captureMessage(
                "Received error or empty data from Feature Toggle API",
                { level: "warning", tags: { feature: "feature-toggle-web" } }
              ),
            (e = (function () {
              try {
                const e = localStorage.getItem(d);
                if (!e) return;
                const t = JSON.parse(e);
                if (t && Object.keys(t).length > 0) return t;
              } catch (l) {}
            })()));
        const n = (0, c.c)();
        return e && n && Object.assign(e, n), (0, r.q)(e), e;
      }
      const d = "sp_ftv2_cache";
      function u(e) {
        return JSON.stringify(e);
      }
    },
    64934: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i, v: () => o });
      var r = n(10685);
      let a;
      function o() {
        if (a) return a;
        const e = (function () {
          if ("undefined" != typeof document)
            return document.querySelector(`script[type="${r.i}"]`);
        })();
        if (e)
          try {
            const t = JSON.parse(e.textContent || "");
            return (a = t), t;
          } catch (t) {}
      }
      function i(e) {
        a = e;
      }
    },
    43482: (e, t, n) => {
      "use strict";
      function r(e, t = !1) {
        return n(54272).c(e, t);
      }
      n.r(t),
        n.d(t, {
          contextKey: () => s,
          convertFTMapToJson: () => i,
          fetchFeatureToggles: () => o,
          hydrationKey: () => a.i,
          initDeckerIfApplicable: () => c,
          isFeatureEnabled: () => r,
        });
      var a = n(10685);
      async function o() {
        return await n(52280).u();
      }
      function i(e) {
        return n(52280).J(e);
      }
      const s = "";
      async function c() {
        if (window.__DECKER_HOOK__) {
          const { init: e } = await n.e(3277).then(n.bind(n, 93277));
          e();
        }
      }
    },
    54272: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => a });
      var r = n(64934);
      function a(e, t = !1) {
        const n = (0, r.v)();
        return "object" == typeof n && Object.hasOwnProperty.call(n, e)
          ? n[e]
          : t;
      }
    },
    69689: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => a, c: () => o });
      var r = n(86321);
      const a = "FEATURE_TOGGLE_OVERRIDE";
      function o() {
        try {
          const e = (0, r.ej)(a);
          if (e) return JSON.parse(e);
        } catch (e) {}
      }
    },
    10685: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => r });
      const r = "text/shopee-ft";
    },
    31720: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a, j: () => r });
      const r = Object.freeze({
          OK: 0,
          DEPRECATED: -4,
          DROPPED_PER_USER: -3,
          DROPPED: -2,
          UNKNOWN: -1,
          PARAM: 1,
          PERM: 2,
          LIMIT: 3,
          NOTFOUND: 4,
          EXIST: 5,
          OUTSTOCK: 6,
          EXPIRE: 7,
          INVITATION: 8,
          BANNED: 9,
          DUPCMD: 10,
          DUPLICATE: 11,
          COUNTRY_RESTRICT: 12,
          DELETED: 13,
          PROMOTION: 14,
          FREQUENT: 15,
          SHADOW_ACC: 16,
          PRICE_LIMIT: 17,
          PRICERULE: 18,
          NOT_LOGIN: 19,
          FRAUD: 20,
          HASHTAG_LIMIT: 21,
          LOCKED: 22,
          SELLER_PROMOTION: 23,
          USER_FREEZED: 24,
          LOGIN_DEVICE_LIMIT: 25,
          ESTIMATED_DAYS_LIMIT: 26,
          ITEM_EMPTY_DESC: 27,
          BE_BLOCKED: 28,
          I_BLOCKED: 29,
          CATEGORY_LEVEL: 30,
          CATEGORY_REMOVED: 31,
          CATEGORY_CONSISTENT: 32,
          NAME_LIMIT: 33,
          DISABLED: 34,
          NEED_OTP: 35,
          PASSWORD_CHANGE: 36,
          TRANSFEERA_VALIDATE_FAILED: 22,
          VERSION: 37,
          NEED_VOICE_OTP: 38,
          HOLIDAY: 39,
          SHADOW: 40,
          NEED_VERIFY_PHONE: 41,
          PRICE: 42,
          LISTING_PENALTY: 43,
          NEWLY_REGISTERED: 44,
          NO_ORDER: 45,
          PHONE_REGISTERED: 46,
          REFERRAL_FULLY_REDEEMED: 47,
          GROUP_BUY: 48,
          WELCOME_PACKAGE: 49,
          UNLISTED: 50,
          SHOPNAME_INVALID: 51,
          MESSAGE_CENSORED: 52,
          PHONE_FORMAT: 53,
          SLASH_PRICE_DAILY_LIMIT: 54,
          SLASH_PRICE_ENDED: 56,
          DAILY_LIMIT: 54,
          ITEM_LIMIT: 55,
          ENDED: 56,
          SLASH_PRICE: 57,
          WALLET_COMPENSATE_WRONG_PROVIDER: 58,
          NEED_REGISTER: 59,
          ADD_ON_DEAL: 60,
          WALLET_BALANCE_INSUFFICIENT: 61,
          ADD_ON_DEAL_SUB_ITEM_INVALID: 62,
          ADD_ON_DEAL_MAIN_ITEM_INVALID: 63,
          ADD_ON_DEAL_EXPIRED: 64,
          ADD_ON_DEAL_CANNOT_FULFILL_STOCK: 10001,
          CENSORED: 65,
          WALLET_COMPENSATE_BALANCE_INSUFFICIENT: 66,
          CATEGORY_NOT_LEAF_NODE: 67,
          COINS_ALREADY_RETRIEVED: 68,
          RESERVED_USERNAME: 74,
          RESERVED_SHOPNAME: 75,
          NEED_WHATS_APP_OTP: 77,
          ORDER_LOGISTICS_ALREADY_IN_END_STATE: 78,
          ITEM_BAN: 79,
          ITEM_DELETED: 80,
          ITEM_REVIEW: 81,
          CHAT_CANCELORDER_WARNING: 82,
          CHAT_RECEIVER_UNSUPPORTED: 83,
          USER_ITEM_LIMIT: 84,
          WELCOME_PACKAGE_WRONG_ED_QUANTITY: 85,
          ORDER_METADATA_FAILED: 86,
          CANNOT_FULFILLED_FROM_WAREHOUSE_STOCK: 87,
          CANNOT_FULFILLED_FROM_SELLER_STOCK: 88,
          NEED_CAPTCHA: 89,
          WELCOME_PACKAGE_NOT_NEW_USER: 90,
          WELCOME_PACKAGE_WRONG_FREE_GIFT_QUANTITY: 91,
          CHAT_BAD_PRIVATE_IMAGE_ID: 92,
          CHAT_UNEXPECTED_BOT_MSG: 93,
          CHAT_BOT_SESSION_EXPIRED: 94,
          RECYCLED_PHONE: 95,
          NEED_IVS: 98,
          OTP_LOGIN_NEED_IVS: 12301032,
          EMAIL_EXIST: 99,
          EMAIL_MISMATCH: 101,
          NEED_BIND: 103,
          NEED_UPDATE_PASSWORD: 111,
          OTP_LOGIN_NEED_UPDATE_PASSWORD: 12301034,
          SIGNUP_BANNED_V2: 114,
          OTP_ERROR_VCODE_NEED_ZALO: 115,
          OTP_ERROR_VCODE_NEED_ZALO_V4: 23500154,
          FRAUD_BOT_REGISTRATION: 201,
          TOKEN_INVALID: 1e4,
          CREDIT_CART_CHANNEL_NOT_EXISTED: 10001,
          BE_ERROR: 10002,
          PERMISSION: 10003,
          LOGISTIC_CANCELLATION_ERROR: 10004,
          SERVER_ERROR: 10005,
          UNDEFINED_VALIDATION_SEED: 10006,
          INVALID_ACTION: 10007,
          NO_VALID_PAYMENT_METHODS: 10008,
          INVALID_DATA_FORMAT: 10009,
          INVALID_DEVICE_FINGERPRINT: 10010,
          NO_CHALLENGE_TOKEN_FOUND: 10011,
          CART_ORDER_HAS_PREVIEW_ITEM: 10012,
          PHONE_NOT_FOUND: 10013,
          ENTITY_EXISTED: 10014,
          EXCEED_LIMIT: 10015,
          CAPTCHA_VERIFICATION_FAILED: 10026,
          CAPTCHA_VERIFICATION_REQUIRED: 10027,
          CART_PARTIAL_FULFILMENT_ERROR: 10001,
          WRONG_ANSWER: 10051,
          TRIES_EXCEEDED: 10052,
          INVALID_CHALLENGE: 10054,
          CHALLENGE_UNAVAILABLE: 10055,
          ADDRESS_NOT_MODIFIED: 10082,
          TAXABLE_ADDRESS: 10083,
          NOT_SERVICEABLE_ADDRESS: 10084,
          INVALID_BUYER_ADDRESS: 10085,
          SINGNATURE_VERIFICATION_FAILED: 10086,
          CONVENIENT_STORE_INVALID: 10087,
          EDIT_NOT_ALLOWED: 10096,
          ADDRESS_ESF_INCREASED: 10097,
          ADDRESS_NO_GEOLOCATION: 10098,
          REQUEST_TIMEOUT: -99,
          FE_SERVER_ERROR: -999,
          USER_NOT_EXIST: 12301002,
          STATUS_NOT_NORMAL: 12301003,
          PHONE_REUSE_EXCEED_LIMIT: 12301004,
          USER_HAS_ONGOING_REFUND: 12301006,
          USER_HAS_ONGOING_WITHDRAWAL: 12301007,
          SELLER_WALLET_NOT_EQUAL_ZERO: 12301008,
          SHOPEEPAY_WALLET_BALANCE_AVAILABLE: 12301009,
          NO_PASSWORD: 12301010,
          ONGOING_ORDER_EXIST: 12301014,
          PHONE_NOT_EXIST: 12301016,
          PHONE_ALREADY_EXIST: 12301017,
          PAYMENT_VERIFY_METHOD_UNAVAILABLE: 12301018,
          INVALID_THIRD_PARTY_ID: 12301011,
          PAYMENT_VERIFY_DUPLICATE: 12301019,
          PAYMENT_VERIFY_WRONG_ANSWER: 12301020,
          TOKEN_EXPIRED: 12301023,
          IS_SHOPEEPAY_MERCHANT: 12301024,
          IS_MITRA_MERCHANT: 12301025,
          ONGOING_FUNDS_IN_CREDIT_PRODUCT: 12301026,
          PHONE_INVALID: 12301028,
          ACCOUNT_BANNED: 12301029,
          ANTI_FRAUD: 12301030,
          RECYCLED_PHONE_V4: 12301031,
          OTP_LIMIT: 12301203,
          OTP_TOKEN_EXPIRED: 12301205,
          API_CALL_AIRPAY: 12302005,
          AIRPAY_DENIED: 12303001,
          AIRPAY_PASSCODE_CHANGE_PERIOD: 12303002,
          AIRPAY_PHONE_CHANGE_TIME_LIMIT: 12303003,
          AIRPAY_DEVICE_BIND_TIME_LIMIT: 12303004,
          INVALID_REGION: 12304004,
          OTP_ERROR_BLOCKED: 12301210,
          NOT_ALLOW_DELETE_PENDING_CS_CASES: 12301062,
          ERROR_NEW_DEVICE_CHANGE_EMAIL_COOL_DOWN: 12301063,
          ERROR_ONGOING_CHANGE_EMAIL_REQUEST: 12301065,
          NOT_ALLOW_UNBIND_PHONE: 12301115,
          ACCOUNT_OR_PHONE_RESTRICT: 12301116,
          FAIL_RULE_ENGINE_CHECK: 12305001,
          CHANGE_PHONE_FALLBACK_OLD_FLOW: 12305002,
          CHANGE_PHONE_ERROR_NEW_DEVICE_COOLDOWN: 12301064,
          CHANGE_PHONE_ERROR_ONGOING_REQUEST: 12301066,
          CHECK_CHANGE_PASSWORD_HIGHEST_RISK: 12305011,
          SIGNUP_BANNED: 12307001,
          CAPTCHA_ERROR_MISMATCH: 315e5,
          IVS_GENERAL_ERROR: 499e5,
          IVS_UNKNOWN_ERROR: 50200100,
          PASSWORD_ERROR_COOLDOWN: 5200106,
          PASSWORD_ERROR_NOT_CHANGED: 5200244,
          CART_BFF_PARTIAL_FULFILMENT_ERROR: 15020008,
          CART_BFF_ADD_ON_DEAL_SUB_ITEM_INVALID: 15020009,
          CART_BFF_ADD_ON_DEAL_MAIN_ITEM_INVALID: 15020010,
          CART_BFF_ADD_ON_DEAL_EXPIRED: 15020011,
          CART_BFF_TOTAL_QUANTITY_EXCEEDED: 15020018,
          OTP_ERROR_INTERNAL: 235e5,
          OTP_ERROR_EXTERNAL: 23500001,
          OTP_ERROR_SESSION: 23500002,
          OTP_ERROR_PHONE_FORMAT_INVALID: 23500050,
          OTP_ERROR_PHONE_TAKEN: 23500051,
          OTP_ERROR_CAPTCHA_NOT_MATCH: 23500100,
          OTP_ERROR_CAPTCHA_NOT_VERIFIED: 23500101,
          OTP_ERROR_VCODE_LIMIT: 23500150,
          OTP_ERROR_VCODE_NEED_VOICE: 23500151,
          OTP_ERROR_VCODE_NEED_WHATS_APP: 23500152,
          OTP_ERROR_VCODE_NOT_MATCH: 23500153,
          OTP_ERROR_VCODE_EXPIRED: 23500156,
          OTP_SERVICE_NOT_AVAILABLE: 119,
          OTP_SERVICE_NOT_AVAILABLE_V4: 23500157,
          OTP_ERROR_RULE_ENGINE_BLOCKED: 23500158,
          OTP_ERROR_CHANNEL_NOT_AVAILABLE: 23500161,
          OTP_ERROR_TOKEN_INVALID: 23500200,
          OTP_ERROR_TOKEN_EXPIRED: 23500201,
          OTP_ERROR_VCODE_NEED_VIBER: 116,
          OTP_ERROR_VCODE_NEED_VIBER_V4: 23500155,
          KYC_INTERNAL: 251e5,
          KYC_NOT_FOUND: 25100100,
          KYC_PROVIDER_ERROR: 25100101,
          KYC_USER_NOT_LOGGED_IN: 25100102,
          KYC_HAS_APPROVED: 25100103,
          KYC_UPDATE_NOT_APPROVED: 25000109,
          KYC_EXCEED_SUBMIT_LIMIT_ERROR: 25000110,
          KYC_CPF_NUMBER_INVALID_FORMAT: 25100200,
          KYC_CPF_NUMBER_EXIST: 25100201,
          KYC_HAS_PENDING_ATTEMPT: 25100202,
          KYC_TOO_MANY_ATTEMPT: 25100203,
          KYC_CPF_NUMBER_EMPTY: 25100204,
          KYC_FRAUD_POTENTIAL_BOT: 25100205,
          USER_ERROR_INTERNAL: 284e5,
          USER_ERROR_EXTERNAL: 28400001,
          USER_ERROR_SESSION: 28400002,
          USER_ERROR_PERMISSION: 28400003,
          USER_VERIFY_LINK_COOLDOWN_10_MINUTES: 81900201,
          USER_VERIFY_LINK_COOLDOWN_24_HOURS: 81900202,
          USER_VERIFY_LINK_TOKEN_EXPIRED: 81900203,
          USER_VERIFY_LINK_INVALID_TOKEN: 81900102,
          USER_VERIFY_QR_INVALID_REQUEST: 1581e5,
          USER_VERIFY_QR_INVALID_VTOKEN: 158100001,
          USER_VERIFY_QR_RATE_LIMIT: 158100201,
          USER_VERIFY_LINK_INVALID_RTOKEN: 81900103,
          USER_VERIFY_LINK_RTOKEN_STATUS_INVALID: 81900204,
          TRIGGER_ANTI_CRAWLER: 90309999,
          USER_E_INVOICE_TOKEN_OR_NONCE_INVALID: 32000001,
          LINE_MISSION_STICKER_COMPLETED: 32000051,
          WHATSAPP_ERROR_TOKEN_EXPIRED: 32000052,
          BRANCH_RESELECTION_ERROR_INTERNAL: 955e5,
          BRANCH_RESELECTION_ERROR_EXTERNAL: 95500001,
          BRANCH_RESELECTION_ERROR_ORDER_LOGISTICS_NOT_FOUND: 95500200,
          BRANCH_RESELECTION_ERROR_NOT_SUPPORTED: 95500201,
          BRANCH_RESELECTION_ERROR_EXPIRED: 95500202,
          BRANCH_RESELECTION_ERROR_ALREADY_DONE: 95500203,
          BRANCH_RESELECTION_ERROR_LOGISTICS_ADDRESS_TYPE_NOT_ALLOWED: 95500204,
          BRANCH_RESELECTION_ERROR_STORE_NOT_AVAILABLE: 95500205,
          BRANCH_RESELECTION_ERROR_PARCEL_OUT_SLS: 95500206,
          PROFILE_INVALID_NICKNAME: 32000200,
          ERROR_PROFILE_BIRTHDAY_GENDER_UPDATED: 32000202,
          ERROR_CANNOT_DELETE_DEFAULT_RETURN_STORE: 95500302,
          ERROR_CANNOT_EDIT_FISCAL_ADDRESS: 95500100,
          ERROR_CANNOT_EDIT_LEGAL_ADDRESS: 95500101,
          USERNAME_ERROR_RESERVED: 5200230,
          USERNAME_ERROR_DUPLICATE: 5200104,
          ACCOUNT_OAUTH_ERROR_SERVER: 15593e5,
          ACCOUNT_OAUTH_ERROR_PARAMS: 1559301e3,
          ACCOUNT_OAUTH_ERROR_UNAUTHORIZED_CLIENT: 1559301001,
        }),
        a = r;
    },
    46148: (e, t, n) => {
      "use strict";
      n.d(t, {
        Dh: () => p,
        FJ: () => h,
        Hs: () => d,
        Ij: () => u,
        Iz: () => s,
        Wz: () => i,
        YL: () => m,
        b4: () => f,
        eM: () => c,
        fn: () => E,
        ku: () => l,
        s2: () => _,
      });
      var r = n(61934),
        a = n(77317),
        o = n(83138);
      const i = (e) => (0, r.Z)({}, e, { optional: !0 }),
        s = {
          formatFromUrl: (e) => String(e),
          formatToUrl: (e) => (0, o.N)(e),
        },
        c = { formatFromUrl: (e) => String(e), formatToUrl: (e) => String(e) },
        l = i(c),
        d = {
          formatFromUrl: (e) => String(e),
          formatToUrl: (e) => e.toLowerCase(),
        },
        u = i(d),
        p = {
          formatFromUrl: (e) => parseInt(e, 10),
          formatToUrl: (e) => String(e),
        },
        _ = i(p),
        m = i({
          formatFromUrl: (e) => parseFloat(e),
          formatToUrl: (e) => String(e),
        }),
        f =
          (i({
            formatFromUrl: (e) => JSON.parse(e),
            formatToUrl: (e) => JSON.stringify(e),
          }),
          i({
            formatFromUrl: (e) => !0 === e || "true" === e || "1" === e,
            formatToUrl: (e) =>
              !e || ("boolean" != typeof e && 1 !== e) ? "false" : "true",
          })),
        h = i({
          formatFromUrl: (e) => (0, a.Fr)(e).map(decodeURIComponent),
          formatToUrl: (e) =>
            (e || [])
              .filter((e) => null != e)
              .map(encodeURIComponent)
              .join(","),
        }),
        E = i({
          formatFromUrl: (e) =>
            (0, a.Fr)(e)
              .map((e) => parseInt(e, 10))
              .filter((e) => "number" == typeof e && isFinite(e)),
          formatToUrl: (e) =>
            (e || [])
              .filter((e) => "number" == typeof e && isFinite(e))
              .join(","),
        });
    },
    89920: (e, t, n) => {
      "use strict";
      n.d(t, { C8: () => i, Mt: () => s, mS: () => c });
      var r = n(61934),
        a = n(46148);
      const o = {
          withDiscount: a.b4,
          freeShipping: a.b4,
          newItem: a.b4,
          usedItem: a.b4,
          preferred: a.b4,
          minPrice: a.s2,
          maxPrice: a.s2,
          facet: a.fn,
          locations: a.FJ,
          wholesale: a.b4,
          shippingOptions: a.fn,
          payCreditCard: a.b4,
          payCOD: a.b4,
          installment: a.b4,
          ccInstallment: a.b4,
          nonCCInstallment: a.b4,
          hasLowestPriceGuarantee: a.b4,
          serviceByShopee: a.s2,
          officialMall: a.b4,
          ratingFilter: a.s2,
          labelIds: a.fn,
          pLabelIds: a.fn,
          isBuyerPerspective: a.b4,
          brands: a.fn,
          preOrder: a.b4,
          filterVideo: a.b4,
          preferredPlus: a.b4,
          filterOriginal: a.b4,
          filters: a.fn,
          pcpIds: a.fn,
          itemTagIds: a.fn,
        },
        i = (0, r.Z)({}, o, {
          sortBy: a.ku,
          order: a.ku,
          lat: a.YL,
          lon: a.YL,
          skipShuffle: a.b4,
          filterSoldOut: a.s2,
          hideRemainingPrice: a.b4,
          page: a.s2,
          peep_signature: a.ku,
          noCorrection: a.b4,
          reservedKeyword: a.ku,
          showItems: a.b4,
          trackingId: a.ku,
        }),
        s = (0, r.Z)({}, i, { keyword: a.Ij }),
        c = (0, r.Z)({}, s, {
          shop: a.s2,
          subcategory: a.s2,
          category: a.s2,
          thirdCategory: a.s2,
          attrId: a.s2,
          attrVal: a.Ij,
          attrName: a.ku,
          hashtag: a.Ij,
          shopCollection: a.s2,
          originalCategoryId: a.s2,
          collection: a.s2,
          searchPrefill: a.s2,
          promotionId: a.s2,
          catalogue: a.Ij,
          site: a.ku,
          searchFrom: a.ku,
          originalResultType: a.s2,
          complementKeyword: a.ku,
        });
      (0, r.Z)({}, i, {
        evcode: a.ku,
        voucherCode: a.ku,
        signature: a.eM,
        source: a.Ij,
        preSource: a.ku,
      });
    },
    70654: (e, t, n) => {
      "use strict";
      n.d(t, { Z6: () => o, jt: () => p, pQ: () => _ });
      var r = n(61934),
        a = n(96234);
      const o = {
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
        i = {
          default: "/mall",
          BR: "/oficial",
          CO: "/oficiales",
          MX: "/oficiales",
          CL: "/oficiales",
        },
        s = {
          [o.ROUTE_OFFICIAL_SHOP]: "",
          [o.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY]:
            "/:categoryName(.+)-cat.:categoryId(-?\\d+)",
          [o.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU]: "/just-for-you",
          [o.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR]:
            "/:categoryName(.+)-cat.:categoryId(-?\\d+)/popular",
          [o.ROUTE_OFFICIAL_SHOP_SEARCH]: "/search",
          [o.ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY]: "/brands/:categoryId",
          [o.ROUTE_OFFICIAL_SHOP_BRANDS]: "/brands",
          [o.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL]: "/categories",
        };
      function c(e) {
        const t = { default: "" };
        return (
          Object.entries(i).forEach(([n, r]) => {
            t[n] = `${r}${s[e]}`;
          }),
          (t.similar = [t.default]),
          t
        );
      }
      const l = {
          [o.FLASH_SALE]: (0, r.Z)(
            { default: "/flash_sale" },
            a.FLASH_SALE_URL,
            {
              similar: u(
                { underscored: !0, concatenated: !0, trailing: !0 },
                "flash sale",
                "flash sales",
                "flash deal",
                "flash deals",
                "shocking sale"
              ),
            }
          ),
          [o.BRAND_SALE]: (0, r.Z)(
            { default: "/mall-flash-sale" },
            a.BRAND_SALE_URL,
            {
              similar: u(
                { underscored: !0, concatenated: !0, trailing: !0 },
                "brand sale",
                "brands sale",
                "mall flash sale"
              ),
            }
          ),
          [o.ROUTE_COIN_LANDING]: {
            default: "shopee-coins",
            ID: "koin-shopee",
          },
          [o.MART_FLASH_SALE]: (0, r.Z)(
            { default: "/supermarket/flash-sale" },
            a.MART_FLASH_SALE_URL,
            {
              similar: u(
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
          [o.ROUTE_OFFICIAL_SHOP]: c(o.ROUTE_OFFICIAL_SHOP),
          [o.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY]: c(
            o.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY
          ),
          [o.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU]: c(
            o.ROUTE_OFFICIAL_SHOP_JUST_FOR_YOU
          ),
          [o.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR]: c(
            o.ROUTE_OFFICIAL_SHOP_WITH_CATEGORY_POPULAR
          ),
          [o.ROUTE_OFFICIAL_SHOP_SEARCH]: c(o.ROUTE_OFFICIAL_SHOP_SEARCH),
          [o.ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY]: c(
            o.ROUTE_OFFICIAL_SHOP_BRANDS_WITH_CATEGORY
          ),
          [o.ROUTE_OFFICIAL_SHOP_BRANDS]: c(o.ROUTE_OFFICIAL_SHOP_BRANDS),
          [o.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL]: c(
            o.ROUTE_OFFICIAL_SHOP_CATEGORY_PANEL
          ),
        },
        d = [];
      function u(e, ...t) {
        const n = [],
          r = (function (e) {
            return 0 === e.length || "/" !== e[e.length - 1]
              ? e
              : e.substring(0, e.length - 1);
          })(0 === (a = e.prefix || "").length || "/" === a[0] ? a : `/${a}`);
        var a;
        return (
          t.map((t) => {
            e.dashed && n.push(`${r}/${t.replace(/ /g, "-")}`),
              e.underscored && n.push(`${r}/${t.replace(/ /g, "_")}`),
              e.concatenated && n.push(`${r}/${t.replace(/ /g, "")}`);
          }),
          n.map((t) => {
            e.trailing && n.push(`${t}/`);
          }),
          n
        );
      }
      function p(e, t) {
        const n = l[t];
        return (n && n.similar && n.similar.filter((n) => n !== _(t)(e))) || d;
      }
      const _ = (e) => {
        const t = l[e];
        return (e) => (t && (t[e] || t.default)) || "";
      };
    },
    59711: (e, t, n) => {
      "use strict";
      n.d(t, {
        $Hi: () => fe,
        $Q2: () => Lt,
        AF6: () => Ot,
        AI1: () => L,
        ASv: () => R,
        AUe: () => G,
        Ao3: () => Mt,
        AqD: () => Be,
        B77: () => Ye,
        BOk: () => pt,
        BTf: () => Rt,
        B_j: () => de,
        C5Y: () => q,
        C8D: () => Se,
        CBI: () => xe,
        CEA: () => re,
        C_n: () => nt,
        D$R: () => $,
        DW9: () => Ge,
        DvZ: () => Ve,
        F7b: () => E,
        FUS: () => C,
        Fvt: () => Ut,
        G40: () => Ee,
        GIs: () => wt,
        Ggd: () => st,
        GnA: () => At,
        GpB: () => i,
        Gqe: () => St,
        H_l: () => m,
        Hdq: () => Ue,
        HgE: () => je,
        I$6: () => k,
        I7f: () => ct,
        Iio: () => f,
        J_k: () => B,
        Jmm: () => dt,
        Jvs: () => ze,
        KAe: () => Ce,
        KHp: () => w,
        KSk: () => it,
        Kzw: () => Et,
        LT: () => K,
        LxO: () => ye,
        MYO: () => Re,
        Mcf: () => se,
        NIA: () => o,
        Nko: () => gt,
        O5X: () => d,
        OVr: () => Pt,
        OfW: () => _e,
        PWP: () => We,
        PyL: () => rt,
        QGR: () => Fe,
        Qeo: () => yt,
        QhF: () => kt,
        Rah: () => Ze,
        Rs4: () => T,
        S1u: () => P,
        SM7: () => _,
        T4l: () => g,
        TWV: () => N,
        UJ0: () => bt,
        Ur5: () => Oe,
        WSN: () => be,
        WT1: () => Zt,
        X7q: () => Wt,
        XLP: () => qe,
        XMC: () => X,
        XX0: () => _t,
        Xuj: () => Je,
        Y8H: () => ne,
        ZDl: () => Ae,
        ZFy: () => O,
        ZqG: () => u,
        _BA: () => Me,
        _KV: () => z,
        ace: () => F,
        adt: () => ce,
        cLk: () => Bt,
        cP$: () => s,
        d4u: () => Nt,
        dS0: () => ve,
        duu: () => Gt,
        e5b: () => J,
        eEt: () => W,
        eWi: () => Dt,
        ekC: () => De,
        etW: () => V,
        fNg: () => Ke,
        flR: () => ae,
        fx8: () => ge,
        g5j: () => Tt,
        g8j: () => ue,
        gRI: () => Y,
        ga9: () => c,
        gsz: () => ke,
        hak: () => Qe,
        heM: () => pe,
        ieA: () => H,
        jzm: () => Ie,
        kF_: () => Z,
        kQk: () => et,
        ky_: () => v,
        lCC: () => y,
        lOV: () => Q,
        lP8: () => at,
        mD6: () => ie,
        maj: () => A,
        mq3: () => j,
        n6n: () => S,
        nNA: () => x,
        oQ6: () => te,
        oT4: () => vt,
        ole: () => Pe,
        omx: () => Xe,
        oxE: () => I,
        oxJ: () => b,
        pu: () => Ct,
        q9X: () => ee,
        qDW: () => He,
        qHk: () => ut,
        qPX: () => U,
        qj7: () => oe,
        r6X: () => mt,
        rAz: () => le,
        siV: () => Ft,
        tEh: () => xt,
        tW0: () => tt,
        tXA: () => l,
        tZn: () => M,
        thN: () => ft,
        uSj: () => h,
        uWq: () => $e,
        uh: () => Ne,
        v3M: () => we,
        vYK: () => ot,
        xHX: () => Te,
        xrH: () => he,
        xxI: () => Vt,
        y1K: () => Ht,
        yJy: () => D,
        ySk: () => Le,
        yl6: () => It,
        yqm: () => me,
        ytW: () => ht,
        zn6: () => lt,
        zvK: () => p,
      });
      var r = n(84648),
        a = n(95907);
      a.Or, a.MW, a.QS, r.xf;
      const o = "/:seoName(.+)-i\\.:shopId(\\d+)\\.:itemId(\\d+)",
        i = "/product/:shopId(\\d+)/:itemId(\\d+)",
        s = "/:username([a-zA-Z0-9_.]{2,30})",
        c = "/shop/:shopId(\\d+)",
        l = "/shop/user/:userId(\\d+)",
        d = "/shop/:shopId(\\d+)/details",
        u = "/user/account/payment",
        p = "/universal-link/:path?",
        _ = "/web-to-app",
        m = "/campaigns",
        f = "/bundle-deal/:bundleDealId(\\d+)",
        h = "/bundle-deal-shop-landing/:shopId(\\d+)",
        E = "/m/:pathname(.+)",
        g = "/p/:pathname(.+)",
        S = "/Official-Shops",
        I = "/mall",
        R = `/__preview__${I}`,
        A = `${I}/preview`,
        b = `${I}/just-for-you`,
        O = `${`${I}/brands`}/:categoryId(-?\\d+)`,
        P = `${I}/:categoryName(.+)-cat.:categoryId(-?\\d+)`,
        C = `${P}/popular`,
        T = `${I}/categories`,
        y = "/checkout",
        v = "/marketplace-checkout",
        w = "/mpp/:checkoutId",
        N = "/cart",
        L = "/search",
        D = "/search_user",
        U = "/search_intermediate",
        k = "/shop/:shopId(\\d+)/search",
        F = "/:categoryName([^/]+)-cat\\.:categoryId(\\d+)",
        M =
          "/:categoryName([^/]+)-cat\\.:categoryId(\\d+)\\.:subCategoryId(\\d+)",
        H =
          "/:categoryName([^/]+)-cat\\.:categoryId(\\d+)\\.:subCategoryId(\\d+)\\.:l3CategoryId(\\d+)",
        Z = "/search-catalogue",
        x = "/:hashtag(.+)-tag",
        G = "/:collection(.+)-col.:collectionId(\\d+)",
        B = "/collections/:collectionId(\\d+)",
        W = "/l/personalized_collection/:collectionId(\\d+)",
        V = "/all_categories",
        j = `${I}${L}`,
        Y = `${j}${x}`,
        $ = "/list/:brand?/:category?/:attribute?",
        K = `/s/${o}`,
        q = `${o}/similar`,
        X = `${o}/:pageType(promotion|affiliate)`,
        Q = `${i}/:pageType(promotion|affiliate)`,
        J = `${o}/promotion/:pageType(main|card|list)`,
        z = `${i}/promotion/:pageType(main|card|list)`,
        ee = "/intermediate/welcome_package",
        te = "/lp/:shopId/:productId",
        ne = "/opaanlp/:shopId/:productId",
        re = "/intermediate/welcome_package_v2",
        ae = "/intermediate/install_v3",
        oe = "/daily_discover",
        ie = "/top_products",
        se = "/top_products/:categoryName([^/]+)-cat\\.:categoryId(\\d+)",
        ce = "/top_products_more_lists",
        le = "/featured_collections",
        de = "/featured_collection_items",
        ue = "/from_same_shop/:shopId(\\d+)/:itemId(\\d+)/:categoryId(\\d+)",
        pe = "/find_similar_products",
        _e = "/user/voucher-wallet",
        me = "/user/purchase/",
        fe = "/user/purchase/order/:orderId",
        he = "/order/detail/",
        Ee = "/user/purchase/checkout/:checkoutId",
        ge = "/user/transaction",
        Se = "/user/my-likes",
        Ie = "/welcome-package",
        Re = "/welcome",
        Ae = "/buyer/:userid(\\d+)/rating",
        be = "/shop/:shopid(\\d+)/item/:itemid(\\d+)/rating",
        Oe = "/rating/report",
        Pe = "/shop/rating/reply_to_buyer/:cmtId(\\d+)",
        Ce = "/shop/rating/reply_to_seller/:cmtId(\\d+)",
        Te = "/wallet/angbao",
        ye = "/wallet/pay",
        ve =
          "/addon-deal-cart-selection/:dealId(\\d+)/:mainItemId(\\d+)/:shopId(\\d+)?/:addOnGroupId?",
        we =
          "/addon-deal-selection/:dealId(\\d+)/:mainItemId(\\d+)/:shopId(\\d+)?",
        Ne =
          "/shop-add-on-deals/:shopId(\\d+)/:addOnDealId(\\d+)/:mainItemId(\\d+)",
        Le = "/purchase-with-gifts/:dealId(\\d+)/:itemId(\\d+)?/:shopId(\\d+)?",
        De =
          "/purchase-with-purchase/:addOnDealId(\\d+)/:shopId(\\d+)/:mainItemId(\\d+)?",
        Ue = "/purchase-with-gifts-section-preview",
        ke = "/promotion/admin/seller-voucher-preview",
        Fe = "/l/:templateType/:pageName",
        Me = Fe.replace(":templateType", "category"),
        He = Me.replace(":pageName", "home"),
        Ze = "/native",
        xe =
          (Fe.replace(":templateType", "collection2"),
          "/l/sibling_collection/:groupId(\\d+)/:collectionId(\\d+)"),
        Ge = "/invoice/:order_id",
        Be = "/return",
        We = "/return/upload-missing-evidence/:returnId(\\d+)",
        Ve = "/return/search-drop-off-branches/:channelId(\\d+)",
        je = "/return/select-shipping-option/:returnId(\\d+)",
        Ye = "/return/input-shipping-info/:returnId(\\d+)?",
        $e = "/return/input-shipping-info/select-carrier/",
        Ke = "/return/logistics_info/orderid/:orderId(\\d+)?",
        qe = "/return/logistics_info/returnid/:returnId(\\d+)?",
        Xe = "/return/detail/orderid/:orderId(\\d+)",
        Qe = "/return/detail/returnid/:returnId(\\d+)",
        Je = `${Qe}/rating`,
        ze = "/return/request/option/:orderId",
        et = "/return/request/select/:orderId",
        tt = "/return/request/detail/:orderId",
        nt = "/search",
        rt = "/dp-voucher",
        at = "/seller-link/:path",
        ot = "/payment",
        it = "/dlink/payment",
        st = "/dp-payment-selection",
        ct = "/payment-selection-page",
        lt = "/payment-selection-page/shopee-food",
        dt = "/payment-selection-page/shopee-play",
        ut = "/iframe-data-pipe",
        pt = "/program/share-expired",
        _t = "/",
        mt = "/order/success/:orderId",
        ft = "/program/form/:formId",
        ht = "/user/coin",
        Et = "/generic-download/app",
        gt = "/l/product_label/:labelId",
        St = "/pc_event",
        It = "/email_verification",
        Rt = "/__internal/devtool",
        At = "/__internal/bannersdk",
        bt = "/__internal/componentbuilder",
        Ot = "/supermarket",
        Pt =
          "/supermarket/:categoryName([^/]*)-list-cat\\.:l1CategoryId(-?\\d+)",
        Ct = "/supermarket/:categoryName([^/]+)-cat\\.:l1CategoryId(-?\\d+)",
        Tt =
          "/supermarket/:categoryName([^/]+)-cat\\.:l1CategoryId(\\d+)\\.:l2CategoryId(\\d+)",
        yt =
          "/supermarket/:categoryName([^/]+)-cat\\.:l1CategoryId(\\d+)\\.:l2CategoryId(\\d+)\\.:l3CategoryId(\\d+)",
        vt = "/supermarket/deals",
        wt = "/supermarket/all-products",
        Nt = "/supermarket/buy-again",
        Lt = "/supermarket/vouchers",
        Dt = "/supermarket/bundle-deals",
        Ut = "/supermarket/add-on-deals",
        kt = "/supermarket/recommendation",
        Ft = "/address/list",
        Mt = "/address/edit",
        Ht = "/clp/:collectionType/:collectionId",
        Zt = Ht.replace(":collectionType", "shopcollections"),
        xt = Ht.replace(":collectionType", "collections"),
        Gt = Ht.replace(":collectionType", "entrycollections"),
        Bt = "/s/browser/:path*",
        Wt = "/__preview__/footer-info-block",
        Vt = "/shop/:shopId(\\d+)/category";
    },
    84648: (e, t, n) => {
      "use strict";
      n.d(t, { JG: () => o, NU: () => a, xf: () => r });
      const r = ["/web", "/localservice"],
        a = ["/hc/:articlePath"],
        o = ["/digital-product", "/produk-digital", "/help_center"];
    },
    95907: (e, t, n) => {
      "use strict";
      n.d(t, {
        MW: () => s,
        Or: () => r,
        QS: () => i,
        Vi: () => c,
        e6: () => o,
        fK: () => u,
        km: () => a,
        qp: () => l,
        zz: () => d,
      });
      const r = [
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
        a = [
          "/buyer/payment/:paymentId(\\d+)/",
          "/buyer/return/:returnId(\\d+)/select_bank_account",
        ],
        o = [
          "/buyer/return/logistics/select_address",
          "/buyer/wallet/credit_card/post",
        ],
        i = [
          "/edit_addresses",
          "/Official-Shops",
          "/search-item",
          "/search-user",
        ],
        s = ["/item_data", "/captcha", "/bridge_cmd"],
        c = ["/buyer/seen_item", "/func/app_select", "/seller/trans/:orderId"],
        l = [
          "/buyer/airpay_wallet/",
          "/buyer/bankaccount/",
          "/buyer/mybankaccount/",
          "/buyer/payment/",
          "/buyer/return/",
          "/buyer/wallet/",
          "/seller/verification/",
        ],
        d = ["/coins/expiry"],
        u = ["/seller/portal/"];
    },
    26011: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => l, Z: () => d });
      var r = n(61934),
        a = n(46148),
        o = n(59711),
        i = n(13787),
        s = n(72535);
      const c = {
          vItemId: a.s2,
          vShopId: a.s2,
          vModelId: a.s2,
          rModelId: a.s2,
          sp_atk: a.ku,
          xptdk: a.ku,
        },
        l = (0, i.uJ)((0, r.Z)({}, (0, s.uU)(o.GpB), { queryParams: c })),
        d = (0, i.uJ)((0, r.Z)({}, (0, s.uU)(o.NIA), { queryParams: c }));
    },
    83092: (e, t, n) => {
      "use strict";
      n.d(t, { qz: () => d, yC: () => l });
      var r = n(61934),
        a = n(59711),
        o = n(13787),
        i = n(72535),
        s = (n(83138), n(46148)),
        c = n(89920);
      const l = (0, o.uJ)(
          (0, r.Z)({}, (0, i.uU)(a.AI1), { queryParams: c.mS })
        ),
        d =
          ((0, r.Z)({}, (0, i.uU)(a.AI1), { queryParams: { keyword: s.eM } }),
          a.nNA,
          (0, r.Z)({}, c.Mt, { hashtag: s.eM }),
          a.AI1,
          s.Dh,
          s.eM,
          s.Hs,
          (0, o.uJ)((0, r.Z)({}, (0, i.uU)(a.yJy), { queryParams: c.mS })));
      (0, r.Z)({}, (0, i.uU)(a.kF_), {
        queryParams: (0, r.Z)({}, c.Mt, { category: s.s2, subcategory: s.s2 }),
      }),
        (0, r.Z)({}, (0, i.uU)(a.qPX), { queryParams: c.mS });
    },
    13787: (e, t, n) => {
      "use strict";
      n.d(t, { rb: () => p, uJ: () => u });
      var r = n(61934),
        a = n(77317);
      const o = (e) => (t, n) => {
          const a = (0, r.Z)({}, n);
          if (t && "object" == typeof t)
            for (const r in t) {
              const o = t[r],
                i = n[r];
              (o && o.optional && null == i) || (a[r] = e(o, i));
            }
          return a;
        },
        i = o((e, t) => {
          const n = e && e.formatToUrl;
          return void 0 === t ? "" : "function" == typeof n ? n(t) : String(t);
        }),
        s = o((e, t) => {
          if (e) {
            const { formatFromUrl: n } = e;
            if (void 0 === t) return t;
            if ("function" == typeof n) return n(t);
          }
          return t;
        });
      var c = n(72535);
      const l =
          ({ route: e, routeParams: t, queryParams: n }) =>
          (o) => {
            const s = o ? i(t, o) : {},
              l = (0, c.VJ)(e, s).replace(/\\(.)/g, "$1");
            let d = "";
            if (o) {
              const e = (0, r.Z)({}, o);
              if (
                (t &&
                  Object.keys(t).forEach((t) => {
                    (n && n[t]) || delete e[t];
                  }),
                n)
              ) {
                const t = i(n, e);
                d = (0, a.Wc)(t);
              }
            }
            return { pathname: l, search: d };
          },
        d = (e) => (t) =>
          ((e) => (e.pathname || "") + (e.search || ""))(l(e)(t));
      function u(e) {
        const { routeParams: t, queryParams: n } = e;
        return {
          config: e,
          getLocation: l(e),
          getUrl: d(e),
          formatParamsFromRoute: s.bind(null, t),
          formatParamsToRoute: i.bind(null, t),
          formatParamsFromQuery: s.bind(null, n),
          formatParamsToQuery: i.bind(null, n),
        };
      }
      const p = ({ routeByLocale: e, routeParams: t, queryParams: n }, r) =>
        u({ route: e(r), routeParams: t, queryParams: n });
    },
    72535: (e, t, n) => {
      "use strict";
      n.d(t, { VJ: () => o, uU: () => i });
      var r = n(46148);
      const a = (e, t) =>
          e.replace(/:([a-zA-Z]\w*)(\(([^)]*)\))?(\?)?/g, (e, ...n) => {
            const [r, , a, o] = n;
            return t(r, { reg: a, isOptional: !!o });
          }),
        o = (e, t) =>
          a(e, (e, { reg: n, isOptional: r }) => {
            const a = t[e];
            return r && null == a
              ? ""
              : (n && new RegExp(n).test(a), String(a));
          }),
        i = (e) => {
          const t = {};
          return (
            a(e, (e, { reg: n, isOptional: a }) => {
              const o = ((e) =>
                /^-?\??(\\d|\[[\d-]+\])\+?$/.test(e) ? r.Dh : r.Iz)(n || "");
              return (t[e] = a ? (0, r.Wz)(o) : o), "";
            }),
            { route: e, routeParams: t }
          );
        };
    },
    83138: (e, t, n) => {
      "use strict";
      function r(e) {
        return e
          .trim()
          .replace(/[\s<>#%"{}|\\^[\]`;/?:@&=+$,]/g, "-")
          .replace(/\0/g, "")
          .replace(/-+/g, "-");
      }
      n.d(t, { N: () => r });
    },
    78984: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => a });
      const r = window,
        a = () => r.__metaPfUrl === location.pathname;
    },
    69211: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => o, N: () => a });
      var r = n(58181);
      function a(e) {
        const t = (0, r.MC)(),
          n = null == t ? void 0 : t[e];
        if (
          n &&
          !((null == t ? void 0 : t[e]) instanceof Array) &&
          "string" != typeof (null == t ? void 0 : t[e])
        )
          return null == n ? void 0 : n.assets;
      }
      function o() {
        return self.__ASSETS__;
      }
    },
    68674: (e, t, n) => {
      "use strict";
      function r() {
        return self.__LOCALE__;
      }
      function a() {
        return self.__ENV__;
      }
      n.d(t, { K: () => r, d: () => a });
    },
    11804: (e, t, n) => {
      "use strict";
      n.d(t, { ZP: () => _e, Jj: () => B, se: () => le });
      var r = {};
      n.r(r),
        n.d(r, { registerFederatedModules: () => _, registerSlot: () => m });
      var a = n(61934),
        o = n(59642);
      let i;
      function s() {
        return n
          .e(8246)
          .then(n.bind(n, 98246))
          .then(({ defineWebpack: e }) => {
            i = e;
          });
      }
      var c = n(86321),
        l = n(58181),
        d = n(68674),
        u = n(31518);
      const p = "undefined" != typeof window && window.__DECKER_HOOK__;
      function _(e) {
        p &&
          f(
            p,
            "MFE_FEDERATED_MODULES_INFO",
            "MFE_RETRIEVE_FEDERATED_MODULES_INFO",
            e
          );
      }
      function m(e) {
        p && f(p, "MFE_LOAD_SLOT", "MFE_RETRIEVE_SLOTS", e);
      }
      function f(e, t, n, r) {
        function a() {
          e.sendToDevtools(t, r);
        }
        e.on(n, a), a();
      }
      let h, E;
      const g = [];
      class S extends Map {
        getSingleton() {
          return this.singletonValue;
        }
        setSingleton(e, t) {
          (this.singletonKey = e), (this.singletonValue = t);
        }
        hasSingleton() {
          return void 0 !== this.singletonKey;
        }
      }
      class I {
        constructor() {
          this.map = new Map();
        }
        get(e, t) {
          const n = this.map.get(e);
          if (void 0 !== t) {
            if (void 0 === n) return;
            return n.get(t);
          }
          return void 0 === n ? [] : Array.from(n.values());
        }
        set(e, t, n) {
          const r = this.map.get(e);
          if (void 0 === r) {
            const r = new S();
            r.set(t, n), this.map.set(e, r);
          } else r.set(t, n);
        }
        has(e, t) {
          const n = this.map.get(e);
          return (
            void 0 !== n &&
            (void 0 !== t ? n.has(t) : 0 !== Array.from(n.keys()).length)
          );
        }
        delete(e, t) {
          if (void 0 !== t) {
            const n = this.map.get(e);
            if (void 0 === n) return;
            n.delete(t);
          } else this.map.delete(e);
        }
        getSingleton(e) {
          const t = this.map.get(e);
          if (void 0 !== t) return t.getSingleton();
        }
        setSingleton(e, t, n) {
          const r = this.map.get(e);
          if (void 0 === r) {
            const r = new S();
            r.setSingleton(t, n), this.map.set(e, r);
          } else r.setSingleton(t, n);
        }
        hasSingleton(e) {
          const t = this.map.get(e);
          return void 0 !== t && t.hasSingleton();
        }
      }
      const R = new I(),
        A = new I(),
        b = new I(),
        O = new Map(),
        P = new Set(),
        C = /\*.legacy.(js|css)/,
        T = (e, t) => (t ? !C.test(e) : C.test(e)),
        y = "__shp_owp_bizid",
        v = async (e, t, n) => {
          let r = [],
            a = [];
          const o = await fetch(`/devapi/module_federation_urls/${e}`);
          if (!o.ok) return null;
          const i = await o.json();
          i && ((r = i.js), (a = i.css));
          const s = r.find((e) => T(e, t)),
            c = n && a.find((e) => T(e, t));
          return s ? { jsUrl: s, cssUrl: c } : null;
        },
        w = (e, t, n) => {
          const { platform: r, css: a, dev: o, appOfflineCacheBizId: i } = n,
            s = r ? "/rw" : "",
            c = (0, l.VZ)(),
            u = o && c ? ".dev" : "",
            p = `https://deo.shopeemobile.com/shopee/modules-federation/${(0,
            d.d)()}/0/${e}${s}/${t}${u}`;
          return {
            jsUrl: `${p}.js${i ? `?${y}=${i}` : ""}`,
            cssUrl: a && `${p}.css${i ? `?${y}=${i}` : ""}`,
          };
        };
      function N() {
        return void 0 === E && (E = (0, u.W)() || ""), E;
      }
      let L;
      async function D(e, t) {
        var n;
        (await (async function () {
          const e = (0, l.VZ)(),
            t = (0, d.d)(),
            n = N();
          if (!e) {
            if ("live" === t || "liveish" === t) return !1;
            if (!n) return;
          }
          try {
            return (
              L ||
                (L = (async () => {
                  const e = await fetch(
                      "/devapi/module_federation_versions" +
                        (n ? `?pfb=${n}` : "")
                    ),
                    t = await e.json();
                  for (const { moduleName: n, options: r } of t) {
                    const e = H(n);
                    P.add(e), O.set(e, r);
                  }
                })()),
              await L,
              !0
            );
          } catch (r) {
            return !1;
          }
        })()) &&
          (t = (function (e, t) {
            return (0, a.Z)({}, t, O.get(e));
          })(e, t));
        const { css: r, platform: i, dev: s, version: u } = t,
          p = w(e, u, {
            platform: !!i,
            css: !!r,
            dev: !!s,
            appOfflineCacheBizId:
              null == (n = t) ? void 0 : n.appOfflineCacheBizId,
          }),
          _ =
            (void 0 === h &&
              (h = "true" === (0, c.ej)("__MF_DEV__" + window.location.port)),
            h && (await v(e, !0, !!r))),
          { jsUrl: m, cssUrl: f } = _ || p;
        (0, o.jS)(m), f && (0, o.CP)(f);
      }
      function U(e, t) {
        if ("number" == typeof e) {
          const [n = "", r] = (function (e, t) {
            const n = F.get(e);
            return [null == n ? void 0 : n[0][t], null == n ? void 0 : n[1][t]];
          })(t.requester, e);
          return [n, (0, a.Z)({}, t, r, O.get(n))];
        }
        const n = H(e);
        return [n, (0, a.Z)({}, t, M(t.requester, n), O.get(n))];
      }
      function k(e, t, n) {
        let r = new Promise((n) => {
          b.set(e, t, n);
        });
        return (
          (r = r.then((e) => (n ? n.then(() => e) : e))), A.set(e, t, r), r
        );
      }
      const F = new Map();
      function M(e, t) {
        const n = F.get(e);
        return null == n ? void 0 : n[2][t];
      }
      function H(e) {
        return e.replace(/^(?:@(.+)(\/))?(.+)$/, (e, t, n, r) =>
          n ? t + "__" + r : r
        );
      }
      const Z = new Map(),
        x = new Map(),
        G = new Map();
      function B(e, t) {
        var n, r, a;
        Z.set(e, t),
          null == (n = x.get(e)) || n.resolve(t),
          (r = e),
          (a = t),
          "undefined" == typeof window ||
            r in window ||
            Object.defineProperty(window, r, {
              configurable: !1,
              enumerable: !1,
              value: a,
            });
      }
      async function W(e, t) {
        const {
            version: n,
            bundler: r,
            css: a,
            platform: o,
            dev: i,
            alias: c,
            appOfflineCacheBizId: l,
          } = t || {},
          d = null != c ? c : e;
        if (Z.get(d)) return Z.get(d);
        let u = G.get(d);
        return (
          u ||
          ((u = new Promise((e) => {
            x.set(d, { resolve: e });
          })),
          u.then((e) => ("webpack" === r ? s().then(() => e) : e)),
          G.set(d, u),
          null != t &&
            t.version &&
            D(e, {
              version: String(n),
              css: a,
              platform: o,
              dev: i,
              appOfflineCacheBizId: l,
            }),
          u)
        );
      }
      function V(e, t) {
        var n;
        return Z.get(null != (n = t.alias) ? n : e);
      }
      var j = n(63130);
      function Y(e) {
        const t = (0, l.MC)(),
          n = null == t ? void 0 : t[e];
        if (
          n &&
          !((null == t ? void 0 : t[e]) instanceof Array) &&
          "string" != typeof (null == t ? void 0 : t[e])
        )
          return null == n ? void 0 : n.metaAppDetails;
      }
      const $ = new Map(),
        K = new Map(),
        q = new Map(),
        X = new Map();
      function Q(e) {
        const t = new Promise((t, n) => {
          q.set(e, t), X.set(e, n);
        });
        return K.set(e, t), t;
      }
      async function J(e, t) {
        return t && "module" === t.type
          ? (async function (e, t) {
              const [n, r] = U(e, t);
              if ("platform" === r.type) return W(n, r);
              const { version: a, bundler: o } = r;
              if (R.hasSingleton(n)) return R.getSingleton(n);
              if (R.has(n, a)) return R.get(n, a);
              if (A.has(n, a)) return A.get(n, a);
              const i = k(n, a, "webpack" === o ? s() : void 0);
              return await D(n, r), i;
            })(e, t)
          : t && "platform" === t.type
          ? W(e, t)
          : (async function (e, t) {
              if ($.has(e)) return $.get(e);
              const n = await (0, l.O$)(e, { getPFBCookie: u.W });
              if (!n) throw new Error(`No module named ${e}.`);
              if (K.has(e)) return K.get(e);
              const r = (function (e) {
                  if (e instanceof Array) {
                    const t = [],
                      n = [];
                    return (
                      e.map((e) => {
                        e.endsWith(".js")
                          ? t.push(e)
                          : e.endsWith(".css") && n.push(e);
                      }),
                      {
                        legacy: { js: t, css: n },
                        modern: { js: t, css: n },
                        assets: void 0,
                        metaAppDetails: void 0,
                      }
                    );
                  }
                  return e;
                })(n),
                a = Q(e),
                i = (0, o.yu)(e, r);
              return (
                !0 === (null == t ? void 0 : t.rejectPromise) &&
                  i.catch((t) =>
                    (function (e, t) {
                      K.has(e) &&
                        (K.delete(e), X.get(e)(t), q.delete(e), X.delete(e));
                    })(e, t)
                  ),
                a
              );
            })(e, t);
      }
      function z(e, t, n) {
        n && "module" === n.type
          ? (function (e, t, n) {
              const r = n.version;
              if (null != r)
                if (n.isSingleton || P.has(e)) {
                  if (R.hasSingleton(e)) return;
                  R.setSingleton(e, r, t),
                    (function (e, t) {
                      A.has(e) &&
                        (A.delete(e),
                        b.get(e).forEach((e) => e(t)),
                        b.delete(e));
                    })(e, t);
                } else
                  R.set(e, r, t),
                    (function (e, t, n) {
                      A.has(e, t) &&
                        (A.delete(e, t), b.get(e, t)(n), b.delete(e, t));
                    })(e, r, t);
            })(e, t, n)
          : n && "platform" === n.type
          ? B(e, t)
          : (function (e, t, n) {
              if (
                ($.set(e, t),
                n &&
                  n.buildInformation &&
                  n.projectAndModuleName &&
                  (0, j.Uw)("buildInformation").set(
                    n.projectAndModuleName,
                    n.buildInformation
                  ),
                n && n.registerSentryDsn && n.projectAndModuleName)
              ) {
                const t = (0, j.Uw)("sentryDsn"),
                  r = Y(e);
                r && r.sentryDsn && t.set(n.projectAndModuleName, r.sentryDsn);
              }
              !(function (e, t) {
                K.has(e) &&
                  (K.delete(e), q.get(e)(t), q.delete(e), X.delete(e));
              })(e, t);
            })(e, t, n);
      }
      function ee(e, t) {
        return t && "module" === t.type
          ? (function (e, t) {
              const [n, r] = U(e, t);
              if ("platform" === r.type) return V(n, r);
              const a = r.version;
              return R.hasSingleton(n) ? R.getSingleton(n) : R.get(n, a);
            })(e, t)
          : t && "platform" === t.type
          ? V(e, t)
          : (function (e) {
              return $.get(e);
            })(e);
      }
      const te = "DEP_RESOLVE_TIME_OUT",
        ne = new Map();
      function re(e, t, n) {
        "function" == typeof t.then ? t.then((t) => z(e, t[n])) : z(e, t[n]);
      }
      const ae = self.mfeModules;
      if (!ae || Array.isArray(ae)) {
        const e = {
          push(e) {
            !(async function (e) {
              const [t, n, r, a = 0] = e;
              let o = [];
              n &&
                n.length &&
                (o = await (async function (e, t) {
                  let n = [];
                  const r = Promise.all(t.map((e) => W(e))).then((e) => {
                      n = e;
                    }),
                    a = new Promise((e) => {
                      setTimeout(() => {
                        e(te);
                      }, 5e3);
                    });
                  return (await Promise.race([r, a])) === te && (await r), n;
                })(0, n));
              const i = r.apply(null, o);
              if (0 !== a) {
                if (1 === a) {
                  const [e, n, r, a] = i;
                  "object" == typeof n
                    ? re(t, n, r)
                    : (ne.has(e) || ne.set(e, []), ne.get(e).push([t, a, r]));
                }
                2 === a && i();
              } else z(t, i);
            })(e);
          },
          s: {
            push: (e) =>
              (function (e) {
                const [t, n] = e,
                  r = ne.get(t);
                if ((ne.delete(t), Array.isArray(r)))
                  for (const [a, o, i] of r) re(a, n(o), i);
              })(e),
          },
        };
        (self.mfeModules = e),
          ae &&
            (ae.forEach((t) => e.push(t)),
            Array.isArray(ae.s) && ae.s.forEach((t) => e.s.push(t)));
      }
      const oe = new Map();
      function ie(e) {
        return document.querySelectorAll(
          `script[type="text/mfe-initial-data"][data-module="${btoa(e)}"]`
        );
      }
      let se = !1,
        ce = null;
      async function le() {
        if (!se) return null !== ce ? ce : (ce = Promise.resolve().then(de));
      }
      async function de() {
        try {
          const e = document.querySelector(
            'script[type="text/mfe-initial-slots"]'
          );
          if (e && e.textContent) {
            const t = e.textContent.split(",");
            await Promise.all(t.map((e) => J(e)));
          }
        } catch (e) {
        } finally {
          (ce = null), (se = !0);
        }
      }
      var ue = n(69211);
      window.__DECKER_HOOK__ &&
        n
          .e(2679)
          .then(n.bind(n, 72679))
          .then(({ init: e }) => {
            e(j.Z4);
          });
      const pe = {
        getModuleImmediate: ee,
        getModule: J,
        setModule: z,
        setModuleOptionsOverride: function (e, t) {
          !(function (e, t) {
            O.set(e, t);
          })(e, t);
        },
        loadRemoteJs: function (e) {
          return e && "module" === e.type
            ? (async function ({ name: e, version: t, entryFiles: n }) {
                if (R.hasSingleton(e)) return R.getSingleton(e);
                if (R.has(e, t)) return R.get(e, t);
                if (A.has(e, t)) return A.get(e, t);
                const r = k(e, t);
                for (const a of n)
                  a.endsWith(".js")
                    ? (0, o.jS)(a)
                    : a.endsWith(".css") && (0, o.CP)(a);
                return r;
              })(e)
            : (async function ({ name: e, entryFile: t }) {
                if ($.has(e)) return $.get(e);
                if (K.has(e)) return K.get(e);
                const n = Q(e);
                return (0, o.jS)(t), n;
              })(e);
        },
        getInitialData: function (e) {
          if (oe.has(e)) return oe.get(e);
          const t = ie(e);
          if (t.length > 0)
            try {
              const n = [];
              t.forEach((e) => {
                n.push(JSON.parse(e.textContent));
              });
              const r = n.length > 1 ? n : n[0];
              return oe.set(e, r), r;
            } catch (n) {}
          else oe.set(e, void 0);
        },
        clearInitialData: function (e) {
          oe.delete(e),
            ie(e).forEach((e) => {
              e.parentNode.removeChild(e);
            });
        },
        getSharedMemory: j.Uw,
        getAsset: ue.N,
        getHostAsset: ue.$,
        getMetaAppDetails: Y,
        defineWebpack: function (e) {
          return s().then(() => {
            i(e);
          });
        },
        registerModuleRegistry: function (e, t, n) {
          const r = {};
          for (let a = 0; a < Object.keys(t).length; a++) r[t[a]] = n[a];
          F.set(e, [t, n, r]), _({ base: { requester: e }, map: n, name: t });
          for (const a of g) a({ requester: e, optionsMapping: r });
        },
        addRegisterModuleCallback: function (e) {
          g.push(e);
        },
        _: r,
      };
      !(function (e) {
        Object.defineProperty(e, "bind", {
          get: () =>
            function t(n) {
              return (0, a.Z)({}, e, {
                get bind() {
                  return t;
                },
                getModule: (e, t) => J(e, (0, a.Z)({}, t, { requester: n })),
                getModuleImmediate: (e, t) =>
                  ee(e, (0, a.Z)({}, t, { requester: n })),
              });
            },
        });
      })(pe),
        B("Platform", pe);
      const _e = pe;
    },
    59642: (e, t, n) => {
      "use strict";
      function r(e, t) {
        const n = "modern";
        if (!(n in t))
          throw new Error(`Unable to load "${n}" build for "${e}"`);
        const r = t[n];
        return Promise.all([
          ...a(r.js, r.jsIntegrity, (e, t) => o(e, void 0, t)),
          ...a(r.css, r.cssIntegrity, (e, t) => c(e, t)),
        ]);
      }
      function a(e, t, n) {
        const r = [];
        if (!e) return r;
        for (let a = 0; a < e.length; a++)
          r.push(n(e[a], null == t ? void 0 : t[a]));
        return r;
      }
      function o(e, t = !0, n) {
        return new Promise((r) => s(e, r, void 0, t, n));
      }
      n.d(t, { CP: () => c, jS: () => o, yF: () => s, yu: () => r });
      const i = {};
      function s(e, t, n, r, a) {
        if (i[e]) return void i[e].push(t);
        let o = !1,
          s = l("script", "src", e);
        function c(t, n) {
          (s.onerror = s.onload = null), clearTimeout(d);
          const r = i[e];
          if (
            (delete i[e],
            s.parentNode && s.parentNode.removeChild(s),
            r && r.forEach((e) => e(n)),
            t)
          )
            return t(n);
        }
        s ||
          ((o = !0),
          (s = document.createElement("script")),
          r && ((s.async = !1), (s.defer = !0)),
          (s.crossOrigin = ""),
          n && s.setAttribute("fetchpriority", n),
          (s.type = "module"),
          a && ((s.integrity = a), (s.crossOrigin = "anonymous")),
          (s.src = e)),
          (i[e] = [t]);
        const d = setTimeout(
            () => c(void 0, { type: "timeout", target: s }),
            12e4
          ),
          u = s.onerror,
          p = s.onload;
        (s.onerror = (e) => c(u, e)),
          (s.onload = (e) => c(p, e)),
          o && document.body.appendChild(s);
      }
      function c(e, t) {
        return new Promise((n) => {
          if (
            l("link", "href", e, "rel", "preload") ||
            l("style", "data-href", e)
          )
            return void n(void 0);
          const r = document.createElement("link");
          (r.rel = "stylesheet"),
            (r.onload = r.onerror = n),
            t && ((r.integrity = t), (r.crossOrigin = "anonymous")),
            (r.href = e),
            document.head.appendChild(r);
        });
      }
      function l(e, t, n, r, a) {
        const o = document.getElementsByTagName(e);
        for (let i = 0; i < o.length; i++) {
          const e = o[i];
          if (!((r && a && e.getAttribute(r) === a) || e.getAttribute(t) !== n))
            return e;
        }
      }
    },
    58181: (e, t, n) => {
      "use strict";
      n.d(t, { MC: () => I, O$: () => R, UG: () => m, VZ: () => S });
      var r,
        a = n(61934),
        o = n(68674),
        i = n(82646),
        s = n(77317),
        c = n(69211);
      let l = null,
        d = null,
        u = null,
        p =
          null == (r = window) || null == (r = r.location) ? void 0 : r.origin,
        _ = async function (e) {
          const t = S(),
            n = (0, o.d)(),
            r = null != undefined ? undefined : (0, o.K)();
          if (!t && ("live" === n || "liveish" === n)) return (l = u(h()));
          const a = self.__APP_ID__ || self.__PAGE_ID__,
            c = (function (e, t, n, r) {
              const a = {
                appId: e,
                locale: t,
                env: n,
                _SPC_PFB: r,
                name: "PAGE_MANIFEST",
              };
              return (
                (0, i.tq)() ? (a.__mobile__ = 1) : (a.__hybrid_pc__ = 1),
                (0, s.Wc)(a)
              );
            })(a, r, n, e());
          if (!a)
            try {
              return (l = u(h()));
            } catch (d) {
              return (l = u({}));
            }
          if (t)
            try {
              const e = await (async function (e, t) {
                try {
                  const e = await fetch(
                    `${p}/devapi/page-manifest-inject/${t}`
                  );
                  if (!e.ok) throw new Error("Not ok");
                  return await e.json();
                } catch (n) {
                  return (
                    await fetch(`${p}/devapi/page_manifest/${e}/${t}`)
                  ).json();
                }
              })(a, c);
              return (l = u(e));
            } catch (_) {}
          try {
            const e = await (async function (e, t) {
              try {
                const e = await fetch(`${p}/devapi/page-manifest-proxy/${t}`);
                if (!e.ok) throw new Error("Not ok");
                return await e.json();
              } catch (n) {
                return (
                  await fetch(
                    `${p}/devapi/space/api/webfe/release/public/pageGroups/page/${e}/asset${t}`
                  )
                ).json();
              }
            })(a, c);
            return (l = u(e));
          } catch (m) {}
          return (l = u({}));
        };
      async function m({ noCache: e, getPFBCookie: t }) {
        return !e && l
          ? l
          : d ||
              ((d = new Promise((e) => {
                u = (t) => (e(t), (d = u = null), t);
              })),
              _(t));
      }
      function f(e) {
        try {
          const t = document.querySelector(e);
          if (t) return JSON.parse(t.textContent || "{}");
        } catch (t) {}
      }
      function h() {
        return (
          (function () {
            const e = f('script[type="text/shopee-page-manifest"]');
            if (!e) return;
            const t =
              f('script[type="text/shopee-page-manifest-override"]') || {};
            return (0, a.Z)({}, e, t);
          })() || (0, c.$)().PAGE_MANIFEST
        );
      }
      const E = /^(localhost|\d+\.\d+\.\d+\.\d+)$/;
      let g;
      function S() {
        return void 0 !== g || (g = E.test(self.location.hostname)), g;
      }
      function I() {
        return l;
      }
      async function R(e, t) {
        var n, r;
        if (
          (l || (await m(t)),
          "string" == typeof (null == (n = l) ? void 0 : n[e]))
        ) {
          const t = await fetch(l[e]);
          l[e] = await t.json();
        }
        return null == (r = l) ? void 0 : r[e];
      }
    },
    31518: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => a });
      var r = n(86321);
      function a() {
        return (0, r.ej)("_SPC_PFB");
      }
    },
    63130: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { Uw: () => o, Z4: () => i, cc: () => a });
      const a = new Map();
      function o(e) {
        let t;
        return (
          a.has(e)
            ? (t = a.get(e))
            : (null == r || r(), a.set(e, (t = new Map()))),
          t
        );
      }
      function i(e) {
        r = e;
      }
    },
    51443: (e, t, n) => {
      "use strict";
      n(89385),
        n(88233),
        n(61415),
        n(34810),
        n(46176),
        n(36524),
        n(34259),
        n(55193),
        n(47652),
        n(84828),
        n(39958),
        n(69915),
        n(45185),
        n(94926),
        n(40410),
        n(91809),
        n(18069),
        n(75709),
        n(50220),
        n(16062),
        n(90464),
        n(14088),
        n(974),
        n(39613),
        n(75899),
        n(61402),
        n(76509),
        n(44907),
        n(51306),
        n(9433),
        n(12459),
        n(98708),
        n(52829),
        n(64896),
        n(82149),
        n(45129),
        n(61565),
        n(90379),
        n(50929),
        n(69911),
        n(50984),
        n(86211),
        n(7312),
        n(40313),
        n(70618),
        n(90444),
        n(14860),
        n(15785),
        n(60471),
        n(9194),
        n(94467),
        n(91444),
        n(26096),
        n(3729),
        n(11770);
    },
    11770: () => {
      !(function (e) {
        (e.requestIdleCallback =
          e.requestIdleCallback ||
          function (e) {
            return setTimeout(function () {
              var t = Date.now();
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
          (e.cancelIdleCallback =
            e.cancelIdleCallback ||
            function (e) {
              clearTimeout(e);
            });
      })(self);
    },
    90614: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => l, Z: () => d });
      var r = n(38918),
        a = n.n(r),
        o = n(11793);
      n(66517);
      const i = n.p + "c68ff78f5fd71182.png",
        s = { img: "tHDCR4", text: "DJ6_Nc" },
        { t: c } = o.I18n;
      function l({ error: e }) {
        return a().createElement(
          r.Fragment,
          null,
          a().createElement("img", { className: s.img, src: i }),
          a().createElement("div", { className: s.text }, c("title_crash")),
          !1
        );
      }
      const d = l;
    },
    83131: (e, t, n) => {
      "use strict";
      n.d(t, { IK: () => y, ZP: () => v });
      var r = n(38918),
        a = n.n(r);
      const o = () => {},
        i = a().createRef(),
        s = a().createContext({
          registerScrollWaitingList: o,
          onScrollRestored: o,
          containerRef: i,
        });
      var c = n(7957),
        l = n(13052),
        d = n.n(l),
        u = n(52812),
        p = n(24318);
      const _ = ["useWindow"],
        m = ["useWindow"],
        f = Symbol.for("@shopee/scroll-behavior");
      window[f] = window[f] || { instanceCount: 0 };
      const h = {};
      function E(e, t, n = i) {
        const [r, a] = (function () {
          let e = [],
            t = 0;
          return [
            function () {
              let n = !1;
              return (
                t++,
                () => {
                  n ||
                    ((n = !0), 0 == --t && (e.forEach((e) => e()), (e = [])));
                }
              );
            },
            function (n) {
              0 === t ? requestAnimationFrame(() => n()) : e.push(n);
            },
          ];
        })();
        let o,
          s = "",
          c = !1;
        const l = new p.Z();
        function d() {
          c ||
            requestAnimationFrame(() => {
              const t = e.current;
              t && (h[s] = t.getScrollPosition());
            });
        }
        function u(t, n) {
          requestAnimationFrame(() => {
            var r;
            null == (r = e.current) || r.scrollTo(t, n);
          });
        }
        function _() {
          const t = h[s];
          t &&
            a(() => {
              var n;
              const { x: r, y: a } = t,
                o = null == (n = e.current) ? void 0 : n.getScrollPosition();
              ((null == o ? void 0 : o.x) === r &&
                (null == o ? void 0 : o.y) === a) ||
                (u(r, a), l.publish({}));
            });
        }
        return {
          init: function () {
            var t;
            0 == window[f].instanceCount++ &&
              (history.scrollRestoration = "manual");
            const n = null == (t = e.current) ? void 0 : t.onScroll(d);
            return () => {
              0 == --window[f].instanceCount &&
                (history.scrollRestoration = "auto"),
                null == n || n();
            };
          },
          setTransitioning: function () {
            c = !0;
          },
          setNewLocation: function (e, n) {
            c = !1;
            const r = o;
            var a, i, l;
            (o = e),
              (s = (function (e, t) {
                const n = e.key;
                return (
                  "@@scroll/" +
                  ((null == t ? void 0 : t.prefix) || "") +
                  ((!(null != t && t.ignoreLocationKey) && n) || "")
                );
              })(e, t.current)),
              void 0 === r
                ? (_(), d())
                : r !== e &&
                  (!t.current.prefix &&
                  r.pathname === e.pathname &&
                  r.search === e.search &&
                  r.hash !== e.hash &&
                  e.hash
                    ? (a = document.getElementById(e.hash.replace("#", ""))) &&
                      (a &&
                      document &&
                      document.documentElement &&
                      document.documentElement.style &&
                      "scrollBehavior" in document.documentElement.style
                        ? a.scrollIntoView({ behavior: "smooth" })
                        : a && a.scrollIntoView(),
                      d())
                    : "PUSH" === n
                    ? (null == (i = o) ? void 0 : i.state) &&
                      !0 ===
                        (null == (l = o) || null == (l = l.state)
                          ? void 0
                          : l.SUPPRESS_SCROLL_TOP_STATE_KEY)
                      ? requestAnimationFrame(() => {
                          d();
                        })
                      : (u(0, 0), d())
                    : "POP" === n
                    ? _()
                    : d());
          },
          context: {
            registerScrollWaitingList: r,
            onScrollRestored: function (e) {
              return l.subscribe(() => !0, e);
            },
            containerRef: n,
          },
        };
      }
      function g({ prefix: e, ignoreLocationKey: t }) {
        const n = (0, r.useRef)({});
        return (
          (0, r.useEffect)(() => {
            (n.current.prefix = e), (n.current.ignoreLocationKey = t);
          }, [e, t]),
          n
        );
      }
      function S() {
        return {
          getScrollPosition: () => ({ x: window.scrollX, y: window.scrollY }),
          scrollTo(e, t) {
            window.scrollTo(e, t);
          },
          onScroll: (e) => (
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("scroll", e);
            }
          ),
        };
      }
      function I(e) {
        if (e && "scrollTop" in e)
          return {
            getScrollPosition: () => ({
              x: e.scrollLeft || 0,
              y: e.scrollTop || 0,
            }),
            scrollTo:
              "function" != typeof e.scrollTo
                ? (t, n) => {
                    (e.scrollLeft = t), (e.scrollTop = n);
                  }
                : (t, n) => e.scrollTo(t, n),
            onScroll: (t) => (
              e.addEventListener("scroll", t),
              () => {
                e.removeEventListener("scroll", t);
              }
            ),
          };
      }
      function R(e) {
        const t = (0, u.useLocation)(),
          { action: n } = (0, u.useHistory)();
        (0, r.useLayoutEffect)(() => {
          e.setTransitioning();
        }, [t, n, e]),
          (0, r.useEffect)(() => {
            e.setNewLocation(t, n);
          }, [t, n, e]);
      }
      const A = ["children"];
      function b(e) {
        let { children: t } = e,
          n = (0, c.Z)(e, A);
        const o = (0, r.useRef)(null),
          i = (function (e, t) {
            let { useWindow: n } = t,
              a = (0, c.Z)(t, _);
            const o = (function (e, t) {
                const n = (0, r.useRef)();
                return (
                  (0, r.useEffect)(() => {
                    n.current = t ? S() : I(e());
                  }, [t]),
                  n
                );
              })(e, n),
              i = g(a),
              [s] = (0, r.useState)(() => E(o, i));
            return (0, r.useEffect)(() => s.init(), [s]), R(s), s;
          })(() => {
            var e;
            return null == (e = o.current) ? void 0 : e.getDOMNode();
          }, n);
        return a().createElement(
          s.Provider,
          { value: i.context },
          a().createElement(O, { ref: o }, t)
        );
      }
      b.locationVisited = h;
      class O extends a().Component {
        getDOMNode() {
          return d().findDOMNode(this);
        }
        render() {
          return a().Children.only(this.props.children);
        }
      }
      const P = b,
        C = ["children"];
      function T(e) {
        let { children: t } = e;
        const n = (function (e) {
          let { useWindow: t } = e,
            n = (0, c.Z)(e, m);
          const [a, o] = (function (e) {
              const t = (0, r.useRef)(),
                n = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  t.current = e ? S() : I(n.current);
                }, [e]),
                [t, n]
              );
            })(t),
            i = g(n),
            [s] = (0, r.useState)(() => E(a, i, o));
          return (0, r.useEffect)(() => s.init(), [s]), R(s), s;
        })((0, c.Z)(e, C));
        return a().createElement(
          s.Provider,
          { value: n.context },
          "function" == typeof t ? t(n.context.containerRef) : t
        );
      }
      T.locationVisited = h;
      const y = T,
        v = P;
    },
    21026: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => p, Z: () => m });
      var r = n(38918),
        a = n.n(r),
        o = n(11804);
      const i = ({
        error: e,
        fallback: t = null,
        slotProps: n,
        slotName: a,
      }) => (
        (0, r.useEffect)(() => {
          var t;
          self.location &&
            "localhost" === self.location.hostname &&
            console.error(e);
          const r = null == (t = window) ? void 0 : t.__DECKER_HOOK__;
          if (r)
            try {
              r.sendToDevtools("MFE_ERROR_SLOT", {
                error: { message: e.message, name: e.name, stack: e.stack },
                slotProps: s(n),
                slotName: a,
              });
            } catch (e) {}
        }, [e]),
        self.location && "localhost" === self.location.hostname
          ? r.createElement(
              "div",
              {
                style: {
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "red",
                },
              },
              r.createElement("div", null, "Slot Error:"),
              r.createElement("pre", null, e.stack)
            )
          : r.createElement(r.Fragment, null, t)
      );
      function s(e) {
        if (e)
          return JSON.parse(
            JSON.stringify(e, (e, t) => {
              if (!t || "object" != typeof t || !("$$typeof" in t)) return t;
            })
          );
      }
      var c = n(93123),
        l = n(35782);
      const d = n.microfeI(15);
      function u({ error: e, renderError: t, props: n }) {
        return t(e, n);
      }
      function p(e) {
        if (!e.getComponent)
          throw new Error(
            "`getComponent` option is required for `createSlotComponent()`"
          );
        const {
            getComponent: t,
            getComponentImmediate: n,
            getProps: o,
            getDependencies: i,
            renderError: s = () => null,
            renderLoading: p = () => null,
            name: _,
          } = e,
          m = (e) => {
            const _ = (function () {
                const [e, t] = (0, r.useState)(!1);
                return (
                  (0, r.useEffect)(() => {
                    const e = setTimeout(() => t(!0), c.c);
                    return () => clearTimeout(e);
                  }, []),
                  e
                );
              })(),
              [m, f] = (0, r.useState)(() => n(e)),
              [h, E] = (0, r.useState)(null),
              {
                setHeaderProps: g,
                setFooterProps: S,
                setPageTheme: I,
              } = (0, r.useContext)(d.PageConfigurationContext);
            return (
              (0, r.useEffect)(() => {
                let r = !1;
                const a = n(e);
                return (
                  a
                    ? f(() => a)
                    : (f(void 0),
                      t(e)
                        .then((e) => {
                          r || f(() => e);
                        })
                        .catch((e) => {
                          r || E(e);
                        })),
                  () => {
                    (r = !0), e.isPageRoute && (g({}), S({}), I({}));
                  }
                );
              }, [...i(e), e.isPageRoute]),
              h
                ? s(h, e)
                : m
                ? a().createElement(
                    "div",
                    { style: { display: "contents" } },
                    a().createElement(
                      l.SV,
                      {
                        errorComponent: u,
                        errorComponentProps: { props: e, renderError: s },
                      },
                      a().createElement(
                        c.$.Provider,
                        { value: { showLoadingPlaceholder: _ } },
                        a().createElement(m, o(e))
                      )
                    )
                  )
                : a().createElement(
                    c.$.Provider,
                    { value: { showLoadingPlaceholder: _ } },
                    p(e)
                  )
            );
          };
        return _ && (m.displayName = _), m;
      }
      const _ = p({
          getComponent: ({ slotName: e, performanceTrace: t }) => (
            t && (t.addAttributes({ slot_name: e || "unknown" }), t.start()),
            o.ZP.getModule(e).then((e) => (t && t.stop(), e))
          ),
          getComponentImmediate: ({ slotName: e }) =>
            o.ZP.getModuleImmediate(e),
          getProps: ({ slotProps: e }) => e,
          getDependencies: ({ slotName: e }) => [e],
          renderError: (
            e,
            { slotName: t, slotProps: n, slotErrorFallback: a }
          ) =>
            r.createElement(i, {
              error: e,
              slotName: t,
              slotProps: n,
              fallback: a,
            }),
          renderLoading: (e) =>
            r.createElement(r.Fragment, null, e.slotLoadingFallback),
          name: "Slot",
        }),
        m = _;
    },
    89303: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => o });
      var r = n(61934),
        a = n(96662);
      function o(e) {
        return (0, r.Z)(
          { region: (0, a.Kd)().toLowerCase(), logger: !1, sample: 1 },
          e,
          {
            environment: "live",
            app_name:
              ((0, a.dU)().includes("live")
                ? e.app_name
                : e.non_live_app_name || `${e.app_name}-non-live`) || "",
            secret_key: e.secret_key || "",
            app_version: e.app_version || "",
          }
        );
      }
    },
    67866: (e, t, n) => {
      "use strict";
      n.d(t, {
        r2: () => m,
        Hs: () => E,
        YK: () => f,
        xJ: () => h,
        nL: () => _,
      });
      var r = n(65559),
        a = n.n(r),
        o = n(96662),
        i = n(26298),
        s = n(65085),
        c = n(61934);
      const l = {
          "initialRender-clientExecution": "cfdf19eab444e5ebae9d7726c67868e2",
          "initialRender-appStartRender": "ed5b025d8ba8f06e75d2b63de237852c",
          "initialRender-appDidMount": "f8b963aef12f771d45f1888698244735",
          "initialRender-heroComponentMount":
            "f8e50fb0dd9c8938a8e27eb069b95840",
          "initialRender-initAsync": "1ef512d921ba372fbcda653746507e88",
          "initialRender-duration": "9575502851d5a58fb996a27501876f80",
          "navigation-heroComponentMount": "60d4b38e3c56770434b75ab8470e861a",
          "navigation-duration": "d48ddf5ea6214eaa9065e00403ef49ce",
          "ImageServer-domainLookupStart": "8d0fcc1f36d0e3a8cb88d9dad34dce22",
          "ImageServer-domainLookupEnd": "75f3b398390d5b4225f1eb6b748602fa",
          "ImageServer-connectStart": "5a9096f399610be2fd3b8be96eabe6f1",
          "ImageServer-connectEnd": "f987f50d7988eb114cd0e943d63fec4c",
          "ImageServer-requestStart": "d8e9cbdd340b9eceded88d3fda5b626f",
          "ImageServer-responseStart": "424051a25481346368ccd8c69d5cf565",
          "ImageServer-responseEnd": "3c968b6aeabd2bafd3cb61457908c038",
          "ImageServer-domInteractive": "c656365153c90a60e1d2623996228990",
          "ImageServer-domContentLoadedEventStart":
            "1f9c11b67c33dba3403e274a358f1682",
          "ImageServer-domContentLoadedEventEnd":
            "3819d71f736f7a63ca6019bba75b4beb",
          "ImageServer-domComplete": "4c04f7c20ea6fbd06bf8b3c6785433ac",
          "ImageServer-lcpStartTime": "7cafb7046c4f1e6016e152a6380515ca",
          "ImageServer-totalImageBytes": "867331904aac51d4824de290c010fa61",
          "ImageServer-transferBytes": "f02a837ca37e7bf078c7d3ac3324a9db",
          "ImageServer-imageLoadSpeed": "5b2371a91dfed2eeee20b5ee630b32c1",
          "ImageServer-successRate": "c6c96eb5c7775ce6451590211bf43f64",
          "ImageServer-errorCount": "d27a8ac8c8acb865dacd1ed691ba478a",
          "ImageServer-duration": "6aa74f8d0477adc3fb8117d39ce7b71c",
          "MicrositePageConfigAPI-duration": "e19dedbaefb345ef7122d9c8f3a24479",
          "loadDfpWebTrace-sdkLoaded": "bf934355a88c5e44bc31f28d3e98d5bb",
          "loadDfpWebTrace-duration": "6d2a183bf1a51bb190d19406bb452a2b",
          "accountInfo-duration": "e49b9d1525561159e27d98d528d69913",
          "postWithSignature-SapSdkInvoked": "bed38d40ded2a6ed2701680d24eaa995",
          "postWithSignature-duration": "5a6aac5c28fd2847fba9e0db2a1c349b",
          "antiCrawlerWebSdk-generateDataForGetRequest":
            "7490b682ff73d63f076d3f3ca65d827b",
          "antiCrawlerWebSdk-generateDataForPostRequest":
            "dcbb9feea53d05f9a56f8d568636c414",
          "antiCrawlerWebSdk-loadingSdkStart":
            "18da8b5293ecaa4258748c3c81bec647",
          "antiCrawlerWebSdk-initStart": "d2df3acdbfeb77ed5a9745a803f63c5d",
          "antiCrawlerWebSdk-initStartAfterRequestIdleCallback":
            "13e08b97a69b0df19a003e3f6b5146e5",
          "antiCrawlerWebSdk-initEnd": "0ebb02619e78b48f04bafc2f466792a1",
          "antiCrawlerWebSdk-sdkLoaded": "3c75d84a16adf5262520b9b63efbe991",
          "antiCrawlerWebSdk-sdkInitialized":
            "ed3c3ec4987e7bdd2e4be9c9055dcb2a",
          "antiCrawlerWebSdk-loadingSdkEnd": "ee48e0c22186b73404a2ef805362613d",
          "antiCrawlerWebSdk-duration": "0e51cae67b33e9b622edabf0af94aa1e",
          "fuSdk-initSecuritySdk": "eb8c00150246a715209e52f2f51de980",
          "fuSdk-loadSecuritySdk": "8eda30dc0f60df559f74f4900dd57967",
          "fuSdk-hookFUFetch": "f7270f7c44f3556ad6835fe65f56a861",
          "fuSdk-hookFUXhr": "12bbbed203b4d3139ce7a62cd01803f7",
          "captcha-sdkExecution": "8154990708c4fd9247b27bd4763a8a7f",
          "captcha-duration": "450fb4d431ed777081e96b41728d7ec3",
          "captchaPage-CLS": "6481c944515d6262daead21b31a32b59",
          "captchaPage-FCP": "0d5c4dfc1729842bd103b94147329a1a",
          "captchaPage-FID": "95576811ec100abe39f72bd91c9efe32",
          "captchaPage-LCP": "750ef2d1f2371b4ea75cb24d23a864f9",
          "captchaPage-TTFB": "f6a5c3802eca11c9fb08f21ade9b8fca",
          "captchaPage-componentDidMount": "41d1c61744c572b19f6532e2cd061e17",
          "captchaPage-componentWillUnmount":
            "ccd795168f74f1c2a5aae75e5b123b2f",
          "captchaPage-duration": "0a1716bc309c6a1fe36bec5a9c0d23a2",
          "prefetchCartAssets-assetsFetched":
            "7b365a7eb4d3cb9a1a96d919827720cf",
          "prefetchCartAssets-duration": "98276e6e347217fa69b10b2ce51630d1",
          "sapLoadTime-duration": "8c41fedad6fbc3053783f9754443c318",
          "sapExecutionTime-duration": "e8d32d42004762702200814cd95e4481",
          "serviceworkerRegister-duration": "b71d1d255695708c411413084ae12893",
          "fetchFeatureToggle-duration": "c6151199484c77fbab5c3c95dcb62feb",
          "fetchAccountInfo-duration": "054f390c337f2e0260eb6b77bdc55cd4",
          "fetchTranslation-duration": "e1e6069231269bd7d504a2296ef3e64c",
          "renderTime-duration": "d8a7d9a80fa6c001d363df6fe776d2e9",
          "waitHydrationReady-duration": "5a774ad7e864b2dbc1d56076ded24609",
          "initWebBridge-duration": "83e03c0bb9a24bc4adf72f68cd6968f6",
          "slotMountTime-duration": "b705d9259e0b27bed11aaa382febd109",
        },
        d = {
          page_name: "page_name",
          pageName: "page_name",
          component_name: "component_name",
          componentName: "component_name",
          operation_name: "operation_name",
          operationName: "operation_name",
          status: "status",
          page_url: "page_url",
          pageUrl: "page_url",
          url: "url",
          custom_field: "custom_field",
          customField: "custom_field",
        };
      var u = n(89303);
      let p = null;
      function _({ apmsConfig: e }) {
        const t = (0, u.d)(e);
        (0, i.H6)({
          config: t,
          apiPaths: ["/api/"],
          resourcePaths: [
            `https://${a().image[(0, o.Kd)()]}/`,
            `https://${a().video[(0, o.Kd)()]}/`,
            `https://${a().assets[(0, o.Kd)()]}/`,
          ],
        }),
          (p = (0, i.nO)(t));
      }
      function m(e) {
        return (0, i.nO)(e);
      }
      function f(e, t, n) {
        const r = t || p;
        if (!r) return;
        const a = (function (e, t) {
          const {
              traceName: n,
              metricName: r,
              value: a,
              attributes: o = {},
            } = e,
            i = [n, r].filter(Boolean).join("-"),
            s = (t && t[i]) || l[i];
          if (!s) return;
          const u = Object.keys(o),
            p = {},
            _ = {};
          return (
            u.forEach((e) => {
              const t = o[e];
              if (e in d) {
                const n = d[e];
                _[n] = t;
              } else p[e] = t;
            }),
            (0, c.Z)({ point_id: s, data: p }, a ? { duration: a } : {}, _)
          );
        })(e, n);
        a && r.sendData(a);
      }
      function h(e) {
        (0, i.dZ)("page_name", e);
      }
      function E() {
        (0, s.cV)();
      }
    },
    25200: (e, t, n) => {
      "use strict";
      n.d(t, { p7: () => s, q0: () => c, ql: () => i });
      var r = n(61934),
        a = n(52567),
        o = n(67866);
      const i = new (class {
        constructor() {
          (this._platformTraceName = ""),
            (this._appRouterConfig = null),
            (this._performanceMetrics = {}),
            (this._customAttributes = {}),
            (this._startTime = null),
            (this._timeOffset = null),
            (this._isTraceRunning = !1),
            (this._pathname = null),
            (this.addMetric = (e) => {
              this._performanceMetrics[e] = this.now;
            }),
            (this.addAttributes = (e) => {
              this._customAttributes = (0, r.Z)({}, this._customAttributes, e);
            }),
            (this.dumpEntries = () => {
              const e = this._customAttributes || {},
                t = this._performanceMetrics || {};
              Object.keys(t).forEach((n) => {
                const r = t[n];
                if (!r) return;
                const a = Math.floor(r - (this._timeOffset || 0));
                (0, o.YK)({
                  traceName: this._platformTraceName,
                  metricName: n,
                  value: a,
                  attributes: e,
                });
              }),
                (this._performanceMetrics = {}),
                (this._customAttributes = {});
            }),
            (this.startTrace = (e) => {
              this.stopTrace(),
                (this._platformTraceName = e),
                (this._isTraceRunning = !0),
                window &&
                  window.location &&
                  (this._pathname = window.location.pathname);
              const t = this.currentRouteIdentifier;
              t &&
                ((this._customAttributes = (0, r.Z)(
                  {},
                  this._customAttributes,
                  { pageName: t }
                )),
                (0, o.xJ)(t)),
                this._isFirstPlatformTrace || (this._timeOffset = this.now),
                (this._isFirstPlatformTrace = !1);
            }),
            (this.stopTrace = () => {
              this._isTraceRunning &&
                (this.dumpEntries(), (this._isTraceRunning = !1));
            }),
            (this.handleNavigate = () => {
              try {
                this._isFirstPlatformTrace || this.startTrace("navigation");
              } catch (e) {
                window && window.Sentry && window.Sentry.captureException(e);
              }
            }),
            (this._appRouterConfig = null),
            (this._isFirstPlatformTrace = !0),
            (this._performanceMetrics = {}),
            (this._customAttributes = {}),
            (this._startTime = new Date().getTime()),
            (this._timeOffset = 0),
            document &&
              document.addEventListener &&
              document.addEventListener("visibilitychange", () => {
                "hidden" === document.visibilityState &&
                  (this.stopTrace(), (0, o.Hs)());
              });
        }
        set appRouterConfig(e) {
          e && (this._appRouterConfig = e);
        }
        get currentRouteIdentifier() {
          if (!this._pathname || !this._appRouterConfig) return;
          const e = (0, a.f)(this._appRouterConfig, this._pathname),
            t = e[e.length - 1];
          return t && t.route
            ? String(t.route.name || t.route.path || "")
            : void 0;
        }
        get now() {
          return window && window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime() - (this._startTime || 0);
        }
      })();
      function s(e) {
        if (e) {
          i.addMetric(e);
          try {
            performance.mark(e);
          } catch (t) {}
        }
      }
      function c(e) {
        e && i.addAttributes(e);
      }
    },
    70898: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          PerformanceTrace: () => i,
          generateApmsConfig: () => s.d,
          generateCustomReporter: () => o.r2,
          markPerfMetric: () => r.p7,
          perfTrackerInstance: () => r.ql,
          reportApmsDataOnPageUnload: () => o.Hs,
          sendApmsCustomTrace: () => o.YK,
          setPerfAttributes: () => r.q0,
          startApmsPlatformTracking: () => o.nL,
        });
      var r = n(25200),
        a = n(61934),
        o = n(67866);
      const i = class {
        constructor(e, t, n, i) {
          (this._traceName = ""),
            (this._metrics = {}),
            (this._attributes = {}),
            (this._apmsPointConversion = {}),
            (this._timeOffset = null),
            (this._timeElapsed = null),
            (this._isTraceRunning = !1),
            (this.start = (e) => {
              const { resetTimer: t = !0 } = e || {};
              return (
                this._isTraceRunning ||
                  ((this._timeOffset = t ? r.ql.now : r.ql._timeOffset),
                  (this._isTraceRunning = !0)),
                this
              );
            }),
            (this.forceStart = (e) => {
              const { resetTimer: t = !0 } = e || {};
              return (
                this._initiateTrace(),
                (this._timeOffset = t ? r.ql.now : r.ql._timeOffset),
                (this._isTraceRunning = !0),
                this
              );
            }),
            (this.stop = () => {
              if (!this._isTraceRunning) return this;
              const e = this._timeOffset || 0,
                t = r.ql.now;
              (this._isTraceRunning = !1),
                (this._timeElapsed = t - e),
                (this._metrics = (0, a.Z)({}, this._metrics, {
                  duration: Math.floor(this._timeElapsed),
                })),
                Object.keys(this._metrics).forEach((e) => {
                  (0, o.YK)(
                    {
                      traceName: this._traceName,
                      metricName: e,
                      value: this._metrics[e],
                      attributes: this._attributes,
                    },
                    this._apmsCustomTracker,
                    this._apmsPointConversion
                  );
                });
              try {
                performance.measure(this._traceName, { start: e, end: t });
              } catch (n) {}
              return this;
            }),
            (this.discard = () => (
              this._initiateTrace(),
              (this._metrics = {}),
              (this._attributes = {}),
              this
            )),
            (this.markMetric = (e) => {
              const t = Math.floor(r.ql.now - (this._timeOffset || 0));
              return (
                (this._metrics = (0, a.Z)({}, this._metrics, { [e]: t })), this
              );
            }),
            (this.markCustomMetric = (e, t) => (
              (this._metrics = (0, a.Z)({}, this._metrics, { [e]: t })), this
            )),
            (this.record = (e, t, n) => {
              const r = n || { metrics: {}, attributes: {} },
                i = r.metrics || {},
                s = r.attributes || {};
              return (
                Object.keys((0, a.Z)({}, i, { duration: t })).forEach((e) => {
                  (0, o.YK)(
                    {
                      traceName: this._traceName,
                      metricName: e,
                      value: i[e],
                      attributes: s,
                    },
                    this._apmsCustomTracker,
                    this._apmsPointConversion
                  );
                }),
                this
              );
            }),
            (this.addAttributes = (e) => (
              (this._attributes = (0, a.Z)({}, this._attributes, e)), this
            )),
            (this.removeAttribute = (e) => (delete this._attributes[e], this)),
            (this.getAttribute = (e) => this._attributes[e] || ""),
            (this.getMetric = (e) => this._metrics[e] || 0),
            (this.incrementMetric = (e, t) => (
              (this._metrics = (0, a.Z)({}, this._metrics, {
                [e]: this.getMetric(e) + (null != t ? t : 1),
              })),
              this
            )),
            (this._traceName = e),
            (this._attributes = t || {}),
            (this._apmsCustomTracker = n),
            (this._apmsPointConversion = i || {}),
            (this._timeOffset = 0),
            (this._timeElapsed = 0),
            this._initiateTrace();
        }
        _initiateTrace() {
          this._isTraceRunning = !1;
        }
      };
      var s = n(89303);
    },
    75342: (e, t, n) => {
      "use strict";
      n.d(t, { y7: () => l, Ds: () => d });
      var r = n(61934),
        a = n(38918),
        o = n(93123),
        i = n(7957),
        s = n(52567);
      const c = ["route"];
      function l(e, t) {
        const n = (function (e, t) {
            return (0, s.f)(
              e,
              t || (window && window.location && window.location.pathname)
            );
          })(e, t || (window && window.location && window.location.pathname)),
          r = [];
        return (
          n.forEach((e) => {
            let { route: t } = e,
              n = (0, i.Z)(e, c);
            const { component: a, params: o, name: s, slotNames: l } = t;
            let d = !1;
            if (
              (a &&
                a.load &&
                ((d = !0),
                r.push(
                  a
                    .load()
                    .then((e) => ({
                      component: e,
                      params: o,
                      reactRouterProps: n,
                      pageName: s,
                      slotNames: l,
                    }))
                )),
              a && Array.isArray(a.childComponents))
            )
              for (const i of a.childComponents)
                i &&
                  i.load &&
                  r.push(
                    i
                      .load()
                      .then((e) => ({
                        component: e,
                        params: o,
                        reactRouterProps: n,
                        pageName: s,
                        slotNames: l,
                      }))
                  );
            d ||
              r.push(
                Promise.resolve({
                  component: a,
                  params: o,
                  reactRouterProps: n,
                  pageName: s,
                  slotNames: l,
                })
              );
          }),
          Promise.all(r)
        );
      }
      function d({ loader: e, Placeholder: t, ownProps: n }) {
        let i = null;
        return class s extends a.Component {
          static load() {
            return e().then((e) => ((i = "default" in e ? e.default : e), i));
          }
          constructor(e) {
            super(e),
              (this._timeoutId = null),
              (this.updateState = this.updateState.bind(this)),
              (this.state = { Component: i, showLoadingPlaceholder: !1 });
          }
          componentDidMount() {
            (this._timeoutId = setTimeout(() => {
              this.setState({ showLoadingPlaceholder: !0 });
            }, o.c)),
              s.load().then(this.updateState);
          }
          componentWillUnmount() {
            this._timeoutId && clearTimeout(this._timeoutId);
          }
          updateState() {
            this.state.Component !== i && this.setState({ Component: i });
          }
          render() {
            const { Component: e } = this.state;
            return e
              ? a.createElement(
                  o.$.Provider,
                  {
                    value: {
                      showLoadingPlaceholder: this.state.showLoadingPlaceholder,
                    },
                  },
                  a.createElement(e, (0, r.Z)({}, this.props, n))
                )
              : t
              ? a.createElement(
                  o.$.Provider,
                  {
                    value: {
                      showLoadingPlaceholder: this.state.showLoadingPlaceholder,
                    },
                  },
                  a.createElement(t, this.props)
                )
              : null;
          }
        };
      }
    },
    68854: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => p });
      var r = n(61934),
        a = n(38918),
        o = n.n(a),
        i = n(52812),
        s = n(65170),
        c = n(3005),
        l = n(72288);
      class d extends a.Component {
        constructor(e) {
          super(e),
            (this._ref = null),
            (this.setRef = (e) => {
              e && (this._ref = e);
            }),
            (0, s.Z)(
              e.onEnterViewPort,
              "it's compulsory to pass onEnterViewPort function as props to LazyTrigger"
            );
        }
        UNSAFE_componentWillMount() {
          l.N || this.props.onEnterViewPort();
        }
        componentDidMount() {
          l.N &&
            (this.props.observeMultipleTime
              ? (0, c.N7)(this._ref, {
                  enterViewCallback: this.props.onEnterViewPort,
                  rootMargin: this.props.rootMargin,
                })
              : (0, c.Bt)(this._ref, {
                  enterViewCallback: this.props.onEnterViewPort,
                  rootMargin: this.props.rootMargin,
                }));
        }
        componentWillUnmount() {
          l.N && (0, c.p_)(this._ref);
        }
        render() {
          return a.createElement(
            "div",
            { ref: this.setRef },
            this.props.children
          );
        }
      }
      function u() {
        return o().createElement("div", { style: { height: "1px" } });
      }
      const p = ({
        loader: e,
        placeholder: t,
        PlaceholderComponent: n,
        skipLazyTrigger: s,
        rootMargin: c,
        hydrateId: l,
        containerProps: p,
      }) => {
        let _;
        const m = "sll2-" + (l || "");
        if (l)
          try {
            const e = document.getElementById(m),
              t = e ? e.innerHTML : "";
            _ = o().createElement(
              "div",
              (0, r.Z)({}, p, { id: m, dangerouslySetInnerHTML: { __html: t } })
            );
          } catch (E) {}
        let f = !1;
        const h = (0, a.lazy)(e);
        return (e) => {
          const [E, g] = (0, a.useState)(!1),
            S = (0, i.useHistory)(),
            I = (0, a.useCallback)(() => {
              f || (f = !0), g(!0);
            }, [g]),
            R = (f && S && "POP" === S.action) || s;
          return (
            _ ||
              (_ = t
                ? o().createElement(o().Fragment, null, t)
                : n
                ? o().createElement(n, e)
                : o().createElement(u, null)),
            E || R
              ? l
                ? o().createElement(
                    a.Suspense,
                    { fallback: _ },
                    o().createElement(
                      "div",
                      (0, r.Z)({}, p, { id: m }),
                      o().createElement(h, e)
                    )
                  )
                : o().createElement(
                    a.Suspense,
                    { fallback: _ },
                    o().createElement(h, e)
                  )
              : o().createElement(d, { onEnterViewPort: I, rootMargin: c }, _)
          );
        };
      };
    },
    18510: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => c });
      var r = n(38918),
        a = n.n(r),
        o = n(30600),
        i = n.n(o),
        s = n(42849);
      function c({
        show: e = !1,
        color: t = s._8,
        hideOverlay: n = !1,
        spinnerClassName: r,
      }) {
        return a().createElement(
          "div",
          {
            className: i()(
              { "stardust-spinner--hidden": !e },
              "stardust-spinner"
            ),
          },
          a().createElement(
            "div",
            {
              className: i()("stardust-spinner__background", {
                "stardust-spinner__background--no-overlay": n,
              }),
            },
            a().createElement(
              "div",
              { className: i()(r, "stardust-spinner__main"), role: "img" },
              a().createElement(
                "svg",
                { width: "34", height: "12", viewBox: "-1 0 33 12" },
                a().createElement("circle", {
                  className: "stardust-spinner__spinner",
                  cx: 4,
                  cy: 6,
                  r: 4,
                  fill: t,
                }),
                a().createElement("circle", {
                  className: "stardust-spinner__spinner",
                  cx: 16,
                  cy: 6,
                  r: 4,
                  fill: t,
                }),
                a().createElement("circle", {
                  className: "stardust-spinner__spinner",
                  cx: 28,
                  cy: 6,
                  r: 4,
                  fill: t,
                })
              )
            )
          )
        );
      }
    },
    3005: (e, t, n) => {
      "use strict";
      n.d(t, { Bt: () => p, N7: () => u, p_: () => _ });
      var r = n(72288);
      function a(e, t = 0) {
        return e + "_" + t.toString();
      }
      const o = `0px 0px ${
          r.N && self && self.innerWidth <= 640 ? 80 : 300
        }px 0px`,
        i = 0,
        s = a(o, i);
      let c;
      function l(e) {
        var t;
        const n =
          null == (t = self.__INTERSECTION_OBSERVER)
            ? void 0
            : t.CALLBACK_MULTIMAP.get(e);
        return function (e) {
          for (const t of e) {
            const e = t.target;
            if (n && n.has(e)) {
              const {
                enterViewCallback: r,
                leaveViewCallback: a,
                intersectionChangeCallback: o,
              } = n.get(e) || {};
              t.isIntersecting ? r && r(t) : a && a(t), o && o(t);
            }
          }
        };
      }
      function d(e, t) {
        if (!self.__INTERSECTION_OBSERVER)
          return { observer: void 0, callbackMap: void 0 };
        const n = null != e ? e : o,
          r = null != t ? t : i,
          s = a(n, r);
        let d = s ? self.__INTERSECTION_OBSERVER.OBSERVER_MAP.get(s) : c;
        return (
          d ||
            (self.__INTERSECTION_OBSERVER.CALLBACK_MULTIMAP.set(
              s,
              new WeakMap()
            ),
            (d = new self.IntersectionObserver(l(s), {
              rootMargin: n,
              threshold: r,
            })),
            self.__INTERSECTION_OBSERVER.OBSERVER_MAP.set(s, d)),
          {
            observer: d,
            callbackMap: self.__INTERSECTION_OBSERVER.CALLBACK_MULTIMAP.get(s),
          }
        );
      }
      function u(e, t) {
        if (!r.N || !self.__INTERSECTION_OBSERVER) return;
        const {
            rootMargin: n,
            threshold: a,
            enterViewCallback: o,
            leaveViewCallback: i,
            intersectionChangeCallback: s,
          } = t || {},
          { observer: c, callbackMap: l } = d(n, a);
        c &&
          e &&
          l &&
          (l.set(e, {
            enterViewCallback: o,
            leaveViewCallback: i,
            intersectionChangeCallback: s,
          }),
          c.observe(e));
      }
      function p(e, t) {
        if (!r.N || !self.__INTERSECTION_OBSERVER) return;
        const { rootMargin: n, threshold: a, enterViewCallback: o } = t || {},
          { observer: i, callbackMap: s } = d(n, a);
        i &&
          e &&
          s &&
          (s.set(e, {
            enterViewCallback: (t) => {
              o && o(t), s.has(e) && (s.delete(e), i.unobserve(e));
            },
          }),
          i.observe(e));
      }
      function _(e, t) {
        if (!r.N || !self.__INTERSECTION_OBSERVER) return;
        const { rootMargin: n, threshold: a } = t || {},
          { observer: o, callbackMap: i } = d(n, a);
        e && o && i && i.has(e) && (i.delete(e), o.unobserve(e));
      }
      "undefined" != typeof window &&
        !c &&
        r.N &&
        (self.__INTERSECTION_OBSERVER ||
          (self.__INTERSECTION_OBSERVER = {
            OBSERVER_MAP: new Map(),
            CALLBACK_MULTIMAP: new Map(),
          }),
        self.__INTERSECTION_OBSERVER.CALLBACK_MULTIMAP.set(s, new WeakMap()),
        (c = new self.IntersectionObserver(l(s), {
          rootMargin: o,
          threshold: i,
        })),
        self.__INTERSECTION_OBSERVER.OBSERVER_MAP.set(s, c));
    },
    93123: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => o, c: () => a });
      var r = n(38918);
      const a = 200,
        o = r.createContext({ showLoadingPlaceholder: !1 });
    },
    54332: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          InjectReducerContext: () => o,
          withAsyncReducers: () => c,
          withInjectReducer: () => i,
          withInjectReducerHigher: () => s,
        });
      var r = n(61934),
        a = n(38918);
      const o = a.createContext({ injectAsyncReducer: () => {} });
      function i(e, t) {
        var n, i;
        const s =
          null !=
          (n = null == t || null == (i = t.context) ? void 0 : i.Consumer)
            ? n
            : o.Consumer;
        return function (t) {
          return a.createElement(s, null, ({ injectAsyncReducer: n }) =>
            a.createElement(e, (0, r.Z)({ injectAsyncReducer: n }, t))
          );
        };
      }
      function s(e) {
        return function (t) {
          return i(t, e);
        };
      }
      function c(e, t) {
        return function (n) {
          var r;
          const i = null != (r = null == t ? void 0 : t.context) ? r : o;
          return function (t) {
            const { injectAsyncReducer: r } = a.useContext(i);
            return (
              a.useMemo(() => {
                r(e);
              }, [r]),
              a.createElement(n, t)
            );
          };
        };
      }
    },
    29451: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var r = n(47600),
        a = n(61934),
        o = n(38918),
        i = n(21026),
        s = n(18510);
      function c() {
        return o.createElement(
          "div",
          { className: "vLc7hx" },
          o.createElement(s.Z, {
            show: !0,
            hideOverlay: !0,
            spinnerClassName: "D0C3x9",
          })
        );
      }
      const l = (function (
        e,
        {
          skipSsr: t,
          withExperiments: n,
          withFeatureToggles: r,
          slotLoadingFallback: s = o.createElement(c, null),
          spexNamespace: l,
          defaultSlotProps: d,
        }
      ) {
        const u = (c) =>
          o.createElement(i.Z, {
            slotName: e,
            slotProps: (0, a.Z)({}, d, c),
            slotLoadingFallback: s,
            spexNamespace: l,
            skipSsr: t,
            withExperiments: n,
            withFeatureToggles: r,
          });
        return (u.displayName = `SlotRoute("${e}")`), u;
      })(r.Gi, { spexNamespace: r.fq, withFeatureToggles: !0 });
    },
    47600: (e, t, n) => {
      "use strict";
      n.d(t, { Gi: () => r, fq: () => a, vy: () => o });
      const r = "mobilemall-bundledeal",
        a = "app.web_fe.mobile.bundledeal";
      let o = (function (e) {
        return (
          (e.PDP_SECTION = "PdpBundleDeal"),
          (e.PDP_LANDING_PAGE = "PdpBundleDealLandingPage"),
          (e.SHOP_SECTION = "ShopBundleDeal"),
          (e.SHOP_LANDING_PAGE = "ShopBundleDealLandingPage"),
          (e.MART_SECTION = "MartBundleDeal"),
          (e.MART_LANDING_PAGE = "MartBundleDealLandingPage"),
          e
        );
      })({});
    },
    72135: (e, t, n) => {
      "use strict";
      n.d(t, { G8: () => c });
      var r = n(10791),
        a = n(96662);
      const o = (0, a.Kd)(),
        i = (0, a.dU)(),
        s = (0, r.Z)(
          {
            live: {
              SG: 1000117,
              MY: 1000117,
              ID: 1000953,
              PH: 1000142,
              TH: 1000232,
              TW: 1000638,
              VN: 1001026,
              BR: void 0,
            },
            uat: {
              SG: 1000765,
              MY: 1000766,
              ID: 1000767,
              PH: 1000768,
              TH: 1000769,
              TW: 1000770,
              VN: 1000771,
              BR: 1000772,
            },
            test: {
              SG: 9991671,
              MY: 9991672,
              ID: 9991673,
              PH: 9991674,
              TH: 9991675,
              TW: 9991676,
              VN: 9991677,
              BR: 9991678,
            },
          },
          [i, o],
          -1
        ),
        c = (e) => {
          const t = (0, r.Z)(e, ["label_ids"], []);
          return !!(e && s && t && t.includes(s));
        };
    },
    73044: (e, t, n) => {
      "use strict";
      n.d(t, { TE: () => f, G7: () => h, rO: () => p });
      const r = JSON.parse(
        '{"ONE_LINK_APP_IDS":{"SG":"3203413121","ID":"966699492","MY":"356033421","PH":"801056447","TW":"2688877613","TH":"3686521112","VN":"3249649563","BR":"salS","MX":"3203413121","CO":"RYgH","CL":"Iovx","AR":"dqNz","FR":"OeKN","PL":"26Am","ES":"dbYu","IN":"CKKb"},"APP_IDS":{"SG":{"iOS":"959840394","Android":"com.shopee.sg"},"ID":{"iOS":"959841443","Android":"com.shopee.id"},"MY":{"iOS":"959841113","Android":"com.shopee.my"},"PH":{"iOS":"959841854","Android":"com.shopee.ph"},"TW":{"iOS":"959841107","Android":"com.shopee.tw"},"TH":{"iOS":"959841453","Android":"com.shopee.th"},"VN":{"iOS":"959841449","Android":"com.shopee.vn"},"BR":{"iOS":"1481812175","Android":"com.shopee.br"},"MX":{"iOS":"1540749085","Android":"com.shopee.mx"},"CO":{"iOS":"1554257433","Android":"com.shopee.co"},"CL":{"iOS":"1554257918","Android":"com.shopee.cl"},"AR":{"iOS":"1569763993","Android":"com.shopee.ar"},"FR":{"iOS":"1569764159","Android":"com.shopee.fr"},"PL":{"iOS":"1569764124","Android":"com.shopee.pl"},"ES":{"iOS":"1569763855","Android":"com.shopee.es"},"IN":{"iOS":"1505678092","Android":"com.shopee.in"}},"APPGALLERY_IDS":{"CO":"C104985191","PL":"C105064419","CL":"C104985211"},"Referral":{"PopupReferralRW":"rweb_popup_referral","PopupReferralLite":"lite_popup_referral","WebReferral":"web_referral"}}'
      );
      var a = n(96662),
        o = n(82646);
      const {
          APP_IDS: i,
          ONE_LINK_APP_IDS: s,
          Referral: c,
          APPGALLERY_IDS: l,
        } = r,
        d = (0, a.Kd)(),
        u = i[d];
      s[d];
      const p = (e) => {
        const t = `http://app.appsflyer.com/${(0, o.gn)() ? u.iOS : u.Android}`;
        return e ? t + `?pid=${e}` : t;
      };
      var _ = n(66517);
      n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        (0, a.Kd)(),
        (0, a.of)();
      _.LANGUAGES.en, _.LANGUAGES.en, _.LANGUAGES.en;
      const {
        ONE_LINK_APP_IDS: m,
        APP_IDS: f,
        Referral: h,
        APPGALLERY_IDS: E,
      } = r;
      Object.keys(E);
    },
    5181: (e, t, n) => {
      "use strict";
      n.d(t, {
        N$: () => i,
        OG: () => l,
        Re: () => s,
        v_: () => o,
        wq: () => a,
        zO: () => c,
      });
      var r = n(45641);
      const a = (0, r.n)("FETCH_PRODUCT"),
        o =
          ((0, r.n)("FETCH_ITEM_DETAIL"),
          (0, r.n)("FETCH_PRODUCT_SHIPPING_BY_ADDRESS")),
        i = (0, r.n)("FETCH_PRODUCT_SHIPPING"),
        s = (0, r.n)("FETCH_PRODUCT_INSTALLMENT_PLAN"),
        c = "HYDRATE_PRODUCT",
        l = (0, r.n)("FETCH_BATCH_PRODUCT");
    },
    95504: (e, t, n) => {
      "use strict";
      n.d(t, { AT: () => o, HA: () => i });
      var r = n(11793);
      const { MART_CONFIG: a } = r.config;
      function o() {
        var e;
        return null == a || null == (e = a.shop) ? void 0 : e.shopid;
      }
      function i() {
        var e;
        return null == a || null == (e = a.shop) ? void 0 : e.username;
      }
      n(42849), n(17675);
    },
    78928: (e, t, n) => {
      "use strict";
      n.d(t, { G7: () => s, KN: () => c });
      var r = n(43482),
        a = n(96662);
      n(70654);
      const o = {
          default: /\/mall(\/.*)?$/,
          BR: /\/(?:mall|oficial)(\/.*)?$/,
          MX: /\/(?:mall|oficiales)(\/.*)?$/,
          CO: /\/(?:mall|oficiales)(\/.*)?$/,
          CL: /\/(?:mall|oficiales)(\/.*)?$/,
        },
        i = o[(0, a.Kd)()] || o.default;
      function s() {
        return (
          (0, r.isFeatureEnabled)(
            "ae81efe6e5a11084e9ca6691298706f54f1155df057bddf28eff57d4c316276c",
            !1
          ) &&
          "undefined" != typeof location &&
          !!location.hostname &&
          !!location.hostname.startsWith("mall.")
        );
      }
      function c(e) {
        var t;
        const n = (
          e ||
          (null == (t = self.location) ? void 0 : t.pathname) ||
          ""
        ).toLowerCase();
        return (s() && "/" === n) || i.test(n);
      }
    },
    64211: (e, t, n) => {
      "use strict";
      n.d(t, {
        $4: () => r,
        Am: () => _,
        DQ: () => a,
        IV: () => m,
        Xe: () => c,
        bM: () => p,
        do: () => h,
        it: () => f,
        kY: () => u,
        mX: () => o,
        sM: () => i,
        we: () => d,
      });
      let r = (function (e) {
          return (
            (e.GLOBAL = "GLOBAL"),
            (e.COLLECTION = "COLLECTION"),
            (e.SHOP = "SHOP"),
            (e.SHOP_CATEGORY = "SHOP_CATEGORY"),
            (e.SUBCATEGORY = "SUBCATEGORY"),
            (e.CATEGORY = "CATEGORY"),
            (e.ATTRIBUTE = "ATTRIBUTE"),
            (e.PREFILL = "PREFILL"),
            (e.VOUCHER = "VOUCHER"),
            (e.SITE = "SITE"),
            (e.CATALOGUE = "CATALOGUE"),
            (e.PRODUCT_LABEL = "PRODUCT_LABEL"),
            (e.INSURANCE = "INSURANCE"),
            (e.PDP = "PDP"),
            (e.MALL = "MALL"),
            (e.DAILY_DISCOVER_SEARCH_SUGGESTION =
              "DAILY_DISCOVER_SEARCH_SUGGESTION"),
            (e.MINI_DETAIL_FEED = "MINI_DETAIL_FEED"),
            (e.IMAGE_SEARCH = "IMAGE_SEARCH"),
            (e.OTHER = "OTHER"),
            e
          );
        })({}),
        a = (function (e) {
          return (
            (e.RELEVANCY = "relevancy"),
            (e.TIME = "ctime"),
            (e.POPULAR = "pop"),
            (e.PRICE = "price"),
            (e.DISTANCE = "distance"),
            (e.SALES = "sales"),
            (e.DISCOUNT = "discount"),
            e
          );
        })({}),
        o = (function (e) {
          return (e.ASC = "asc"), (e.DESC = "desc"), e;
        })({}),
        i = (function (e) {
          return (
            (e[(e.LOADING = -2)] = "LOADING"),
            (e[(e.ERROR = -1)] = "ERROR"),
            (e[(e.NORMAL = 0)] = "NORMAL"),
            (e[(e.NO_RESULT = 1)] = "NO_RESULT"),
            (e[(e.NO_RESULT_FILTER = 1.1)] = "NO_RESULT_FILTER"),
            (e[(e.NO_RESULT_SHOP = 1.2)] = "NO_RESULT_SHOP"),
            (e[(e.NO_RESULT_MALL = 1.3)] = "NO_RESULT_MALL"),
            (e[(e.NO_RESULT_SMART_NEXT_SEARCH = 1.4)] =
              "NO_RESULT_SMART_NEXT_SEARCH"),
            (e[(e.NO_RESULT_CENSORED = 1.5)] = "NO_RESULT_CENSORED"),
            (e[(e.NORMAL_WITH_HINT = 2)] = "NORMAL_WITH_HINT"),
            (e[(e.TOO_FEW = 3)] = "TOO_FEW"),
            (e[(e.AUTO_CORRECTION = 4)] = "AUTO_CORRECTION"),
            (e[(e.DROP_WORDS = 5)] = "DROP_WORDS"),
            (e[(e.SHOP_INTENTION = 6)] = "SHOP_INTENTION"),
            (e[(e.HIDDEN_CORRECTION = 7)] = "HIDDEN_CORRECTION"),
            e
          );
        })({}),
        s = (function (e) {
          return (
            (e[(e.LOADING = -2)] = "LOADING"),
            (e[(e.ERROR = -1)] = "ERROR"),
            (e[(e.NORMAL = 0)] = "NORMAL"),
            (e[(e.NO_RESULT = 1)] = "NO_RESULT"),
            (e[(e.NO_RESULT_FILTER = 1.1)] = "NO_RESULT_FILTER"),
            (e[(e.NO_RESULT_IMPLICIT = 2)] = "NO_RESULT_IMPLICIT"),
            (e[(e.NO_RESULT_EXPLICIT = 3)] = "NO_RESULT_EXPLICIT"),
            e
          );
        })({}),
        c = (function (e) {
          return (
            (e.GLOBAL_SEARCH = "PAGE_GLOBAL_SEARCH"),
            (e.MALL_SEARCH = "PAGE_MALL_SEARCH"),
            (e.SEARCH_IN_PDP = "PAGE_PDP_SEARCH"),
            (e.PREFILL_SEARCH = "PAGE_PREFILL_SEARCH"),
            (e.BROWSE_IN_SHOP = "PAGE_SHOP"),
            (e.BROWSE_IN_SHOP_CATEGORY = "PAGE_SHOP_CATEGORY"),
            (e.BROWSE_IN_SHOP_DECORATION = "PAGE_SHOP_DECORATION"),
            (e.BROWSE_IN_CATEGORY = "PAGE_CATEGORY"),
            (e.BROWSE_IN_COLLECTION = "PAGE_COLLECTION"),
            (e.BROWSE_IN_MICROSITE = "PAGE_MICROSITE"),
            (e.BROWSE_IN_VOUCHER = "PAGE_VOUCHER"),
            (e.BROWSE_IN_SEO = "PAGE_SEO"),
            (e.SEARCH_IN_SHOP = "PAGE_SHOP_SEARCH"),
            (e.SEARCH_IN_SHOP_CATEGORY = "PAGE_SHOP_CATEGORY_SEARCH"),
            (e.SEARCH_IN_CATEGORY = "PAGE_CATEGORY_SEARCH"),
            (e.SEARCH_IN_COLLECTION = "PAGE_COLLECTION_SEARCH"),
            (e.SEARCH_IN_VOUCHER = "PAGE_VOUCHER_SEARCH"),
            (e.SEARCH_IN_MICROSITE = "PAGE_MICROSITE_SEARCH"),
            (e.SEARCH_IN_SEO_PAGE = "PAGE_SEO_SEARCH"),
            (e.SEARCH_IN_OTHERS = "PAGE_OTHERS_SEARCH"),
            (e.BROWSE_IN_OTHERS = "PAGE_OTHERS"),
            (e.BROWSE_IN_SUBCATEGORY = "PAGE_SUB_CATEGORY"),
            (e.SEARCH_IN_SUBCATEGORY = "PAGE_SUB_CATEGORY_SEARCH"),
            (e.SEARCH_IN_INSURANCE = "PAGE_INSURANCE_SEARCH"),
            (e.SEARCH_IN_PRODUCT_LABEL = "PAGE_PRODUCT_LABEL"),
            (e.SEARCH_IN_CATALOGUE = "PAGE_CATALOGUE_SEARCH"),
            e
          );
        })({}),
        l = (function (e) {
          return (
            (e.GLOBAL = "STORAGE_KEY_SEARCH_KEYWORD_GLOBAL"),
            (e.IN_SHOP = "STORAGE_KEY_SEARCH_KEYWORD_IN_SHOP"),
            e
          );
        })({});
      const d = {
          [r.GLOBAL]: c.GLOBAL_SEARCH,
          [r.MALL]: c.GLOBAL_SEARCH,
          [r.DAILY_DISCOVER_SEARCH_SUGGESTION]: c.GLOBAL_SEARCH,
          [r.MINI_DETAIL_FEED]: c.GLOBAL_SEARCH,
          [r.CATEGORY]: c.SEARCH_IN_CATEGORY,
          [r.SUBCATEGORY]: c.SEARCH_IN_CATEGORY,
          [r.COLLECTION]: c.SEARCH_IN_COLLECTION,
          [r.SHOP]: c.SEARCH_IN_SHOP,
          [r.SHOP_CATEGORY]: c.SEARCH_IN_SHOP_CATEGORY,
          [r.SITE]: c.SEARCH_IN_MICROSITE,
          [r.PREFILL]: c.PREFILL_SEARCH,
          [r.ATTRIBUTE]: c.SEARCH_IN_OTHERS,
          [r.CATALOGUE]: c.SEARCH_IN_CATALOGUE,
          [r.VOUCHER]: c.SEARCH_IN_VOUCHER,
          [r.PRODUCT_LABEL]: c.SEARCH_IN_PRODUCT_LABEL,
          [r.INSURANCE]: c.SEARCH_IN_INSURANCE,
          [r.PDP]: c.SEARCH_IN_PDP,
          [r.IMAGE_SEARCH]: c.SEARCH_IN_OTHERS,
          [r.OTHER]: c.BROWSE_IN_OTHERS,
        },
        u = {
          [r.GLOBAL]: c.GLOBAL_SEARCH,
          [r.MALL]: c.GLOBAL_SEARCH,
          [r.DAILY_DISCOVER_SEARCH_SUGGESTION]: c.GLOBAL_SEARCH,
          [r.MINI_DETAIL_FEED]: c.GLOBAL_SEARCH,
          [r.CATEGORY]: c.BROWSE_IN_CATEGORY,
          [r.SUBCATEGORY]: c.BROWSE_IN_CATEGORY,
          [r.COLLECTION]: c.BROWSE_IN_COLLECTION,
          [r.SHOP]: c.BROWSE_IN_SHOP,
          [r.SHOP_CATEGORY]: c.BROWSE_IN_SHOP_CATEGORY,
          [r.SITE]: c.BROWSE_IN_MICROSITE,
          [r.PREFILL]: c.PREFILL_SEARCH,
          [r.ATTRIBUTE]: c.BROWSE_IN_OTHERS,
          [r.CATALOGUE]: c.BROWSE_IN_OTHERS,
          [r.VOUCHER]: c.BROWSE_IN_VOUCHER,
          [r.PRODUCT_LABEL]: c.BROWSE_IN_OTHERS,
          [r.INSURANCE]: c.BROWSE_IN_OTHERS,
          [r.PDP]: c.BROWSE_IN_OTHERS,
          [r.IMAGE_SEARCH]: c.BROWSE_IN_OTHERS,
          [r.OTHER]: c.BROWSE_IN_OTHERS,
        },
        p = [i.ERROR, i.NO_RESULT, i.NO_RESULT_SHOP, i.NO_RESULT_MALL],
        _ = (s.ERROR, s.NO_RESULT, [i.TOO_FEW, i.AUTO_CORRECTION]),
        m =
          (i.NORMAL_WITH_HINT,
          i.AUTO_CORRECTION,
          i.TOO_FEW,
          i.DROP_WORDS,
          i.HIDDEN_CORRECTION,
          i.TOO_FEW,
          i.AUTO_CORRECTION,
          i.DROP_WORDS,
          "SEARCH_BAR_RESET_INPUT_EVENT"),
        f = { GLOBAL: l.GLOBAL, IN_SHOP: l.IN_SHOP },
        h = {
          GLOBAL: "homepage_search_bar",
          PDP: "pdp_search_bar",
          MALL: "mall_search_bar",
          MALL_SRP: "mall_srp_search_bar",
          CATEGORY: "category_search_bar",
          SUBCATEGORY: "subcategory_search_bar",
          SITE: "microsite_search_bar",
          VOUCHER: "voucher_search_bar",
          COLLECTION: "collection_search_bar",
          SHOP: "shop_search_bar",
          SHOP_CATEGORY: "in_shop_category_page",
          SEARCH_RESULT_PAGE_SEARCH_BAR: "srp_search_bar",
          HOMEPAGE_TRENDING_SEARCH: "homepage_trending_search",
          INSURANCE: "insurance",
          DAILY_DISCOVER_SEARCH_SUGGESTION: "homepage_dd_card",
          MINI_DETAIL_FEED: "mini_detail_feed_search",
          OTHER: "other",
        };
    },
    38196: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var r = n(64211);
      function a(e) {
        let t = r.$4.OTHER;
        return (
          e.shop
            ? ((t = r.$4.SHOP),
              (e.shopCollection || e.originalCategoryId) &&
                (t = r.$4.SHOP_CATEGORY))
            : e.collection
            ? (t = r.$4.COLLECTION)
            : e.catalogue
            ? (t = r.$4.CATALOGUE)
            : e.category
            ? ((t = r.$4.CATEGORY), e.subcategory && (t = r.$4.SUBCATEGORY))
            : e.searchPrefill
            ? (t = r.$4.PREFILL)
            : e.site || e.microsite
            ? (t = r.$4.SITE)
            : e.attrId
            ? (t = r.$4.ATTRIBUTE)
            : e.promotionId
            ? (t = r.$4.VOUCHER)
            : e.keyword && (t = r.$4.GLOBAL),
          t
        );
      }
    },
    65761: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = {
        navbar: "cYIznA",
        contentCentered: "ZCSSJR",
        navbarIOS: "qFYoVu",
        navbarIOSWithoutExtraTopOffset: "qDN3T2",
        icon: "sozgRv",
        noIconPlaceholder: "zTzuLV",
        content: "vhgJBV",
        title: "R13coU",
        rightContent: "wbml3j",
      };
    },
    67991: (e, t, n) => {},
    83355: (e, t, n) => {
      "use strict";
      n.d(t, { Ay: () => r });
      let r = (function (e) {
        return (
          (e[(e.DEFAULT = 0)] = "DEFAULT"),
          (e[(e.EXPANDED_F_CHANNEL_DRAWER = 1)] = "EXPANDED_F_CHANNEL_DRAWER"),
          e
        );
      })({});
    },
    70012: (e, t, n) => {
      "use strict";
      n.d(t, {
        hi: () => r,
        mN: () => i,
        Ay: () => s.Ay,
        Sj: () => o,
        Xl: () => a,
      }),
        n(67991);
      let r = (function (e) {
          return (
            (e.REQUESTED = "requested"),
            (e.SUCCESS = "success"),
            (e.FAILED = "failed"),
            e
          );
        })({}),
        a = (function (e) {
          return (
            (e[(e.FSV = 1)] = "FSV"),
            (e[(e.PlatformVoucher = 2)] = "PlatformVoucher"),
            (e[(e.ShopVoucher = 3)] = "ShopVoucher"),
            e
          );
        })({}),
        o = (function (e) {
          return (
            (e.Submission = "submission"),
            (e.ExitWithoutSubmission = "exit_without_submission"),
            e
          );
        })({}),
        i = (function (e) {
          return (
            (e.Autocomplete = "AC"),
            (e.Geocoding = "GC"),
            (e.Cache = "Cache"),
            (e.Other = "Other"),
            e
          );
        })({});
      var s = n(83355);
    },
    65559: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(13);
    },
    66517: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(11);
    },
    96234: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(12);
    },
    28058: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(4);
    },
    71884: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(10);
    },
    6872: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(14);
    },
    26574: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(9);
    },
    38918: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(3);
    },
    13052: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(0);
    },
    54037: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(0).__exports["./server"];
    },
    6859: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(2);
    },
    77080: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(1);
    },
    52812: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(5);
    },
    43486: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(7);
    },
    60026: (e, t, n) => {
      "use strict";
      e.exports = n.microfeI(6);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [2944, 9339, 7417], () => (t(51443), t(86685))), e.O();
  },
]);
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/mobilemall-static/_/bundle.0a01cc62dd5a1b47.js.map
