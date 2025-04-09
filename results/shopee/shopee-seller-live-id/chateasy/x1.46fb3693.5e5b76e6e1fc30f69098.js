"use strict";
(self.miniJsonp = self.miniJsonp || []).push([
  [6462],
  {
    31172: function (e, t, n) {
      var r,
        o,
        i,
        s = n(62100),
        a = s.Reader,
        c = s.Writer,
        u = s.util,
        l = s.roots.default || (s.roots.default = {});
      (l.mmsevent =
        (((i = {}).EventID =
          ((r = {}),
          ((o = Object.create(r))[(r[30004] = "MMSFileTransferEvent")] = 30004),
          (o[(r[30005] = "MMSReportUploadEvent")] = 30005),
          (o[(r[80001] = "MMSImgGetStrategyEvent")] = 80001),
          (o[(r[80002] = "MMSImgCompressEvent")] = 80002),
          (o[(r[80003] = "MMSImgPreuploadEvent")] = 80003),
          (o[(r[80004] = "MMSImgFileTransferEvent")] = 80004),
          (o[(r[80005] = "MMSImgNotifyEvent")] = 80005),
          (o[(r[80006] = "MMSGetEndpointStrategyEvent")] = 80006),
          (o[(r[80010] = "MMSGetEndpointCfgEvent")] = 80010),
          o)),
        (i.EventList = (function () {
          function e(e) {
            if (((this.events = []), e))
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.events = u.emptyArray),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              if ((t || (t = c.create()), null != e.events && e.events.length))
                for (var n = 0; n < e.events.length; ++n)
                  l.mmsevent.Event.encode(
                    e.events[n],
                    t.uint32(10).fork()
                  ).ldelim();
              return t;
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.EventList();
                e.pos < n;

              ) {
                var o = e.uint32();
                o >>> 3 == 1
                  ? ((r.events && r.events.length) || (r.events = []),
                    r.events.push(l.mmsevent.Event.decode(e, e.uint32())))
                  : e.skipType(7 & o);
              }
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.events && e.hasOwnProperty("events")) {
                if (!Array.isArray(e.events)) return "events: array expected";
                for (var t = 0; t < e.events.length; ++t) {
                  var n = l.mmsevent.Event.verify(e.events[t]);
                  if (n) return "events." + n;
                }
              }
              return null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.EventList) return e;
              var t = new l.mmsevent.EventList();
              if (e.events) {
                if (!Array.isArray(e.events))
                  throw TypeError(".mmsevent.EventList.events: array expected");
                t.events = [];
                for (var n = 0; n < e.events.length; ++n) {
                  if ("object" != typeof e.events[n])
                    throw TypeError(
                      ".mmsevent.EventList.events: object expected"
                    );
                  t.events[n] = l.mmsevent.Event.fromObject(e.events[n]);
                }
              }
              return t;
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (
                ((t.arrays || t.defaults) && (n.events = []),
                e.events && e.events.length)
              ) {
                n.events = [];
                for (var r = 0; r < e.events.length; ++r)
                  n.events[r] = l.mmsevent.Event.toObject(e.events[r], t);
              }
              return n;
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.Event = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.header = null),
            (e.prototype.body = u.newBuffer([])),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                null != e.header &&
                  Object.hasOwnProperty.call(e, "header") &&
                  l.mmsevent.Header.encode(
                    e.header,
                    t.uint32(10).fork()
                  ).ldelim(),
                null != e.body &&
                  Object.hasOwnProperty.call(e, "body") &&
                  t.uint32(18).bytes(e.body),
                t
              );
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.Event();
                e.pos < n;

              ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.header = l.mmsevent.Header.decode(e, e.uint32());
                    break;
                  case 2:
                    r.body = e.bytes();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.header && e.hasOwnProperty("header")) {
                var t = l.mmsevent.Header.verify(e.header);
                if (t) return "header." + t;
              }
              return null != e.body &&
                e.hasOwnProperty("body") &&
                !(
                  (e.body && "number" == typeof e.body.length) ||
                  u.isString(e.body)
                )
                ? "body: buffer expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.Event) return e;
              var t = new l.mmsevent.Event();
              if (null != e.header) {
                if ("object" != typeof e.header)
                  throw TypeError(".mmsevent.Event.header: object expected");
                t.header = l.mmsevent.Header.fromObject(e.header);
              }
              return (
                null != e.body &&
                  ("string" == typeof e.body
                    ? u.base64.decode(
                        e.body,
                        (t.body = u.newBuffer(u.base64.length(e.body))),
                        0
                      )
                    : e.body.length && (t.body = e.body)),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.header = null),
                  t.bytes === String
                    ? (n.body = "")
                    : ((n.body = []),
                      t.bytes !== Array && (n.body = u.newBuffer(n.body)))),
                null != e.header &&
                  e.hasOwnProperty("header") &&
                  (n.header = l.mmsevent.Header.toObject(e.header, t)),
                null != e.body &&
                  e.hasOwnProperty("body") &&
                  (n.body =
                    t.bytes === String
                      ? u.base64.encode(e.body, 0, e.body.length)
                      : t.bytes === Array
                      ? Array.prototype.slice.call(e.body)
                      : e.body),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.Header = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.id = 0),
            (e.prototype.sceneId = 0),
            (e.prototype.uid = u.Long ? u.Long.fromBits(0, 0, !0) : 0),
            (e.prototype.deviceId = ""),
            (e.prototype.deviceModel = ""),
            (e.prototype.os = 0),
            (e.prototype.osVersion = ""),
            (e.prototype.clientVersion = ""),
            (e.prototype.clientIp = ""),
            (e.prototype.network = 0),
            (e.prototype.country = ""),
            (e.prototype.ua = ""),
            (e.prototype.sdkVersion = ""),
            (e.prototype.timestamp = u.Long ? u.Long.fromBits(0, 0, !0) : 0),
            (e.prototype.adjustTimestamp = u.Long
              ? u.Long.fromBits(0, 0, !0)
              : 0),
            (e.prototype.sdkType = 0),
            (e.prototype.bodyFormat = 0),
            (e.prototype.abTest = ""),
            (e.prototype.appType = 0),
            (e.prototype.rnVersion = ""),
            (e.prototype.channel = ""),
            (e.prototype.biz = 0),
            (e.prototype.samplePercent = 100),
            (e.prototype.dataSourceType = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                null != e.id &&
                  Object.hasOwnProperty.call(e, "id") &&
                  t.uint32(8).uint32(e.id),
                null != e.sceneId &&
                  Object.hasOwnProperty.call(e, "sceneId") &&
                  t.uint32(16).uint32(e.sceneId),
                null != e.uid &&
                  Object.hasOwnProperty.call(e, "uid") &&
                  t.uint32(24).uint64(e.uid),
                null != e.deviceId &&
                  Object.hasOwnProperty.call(e, "deviceId") &&
                  t.uint32(34).string(e.deviceId),
                null != e.deviceModel &&
                  Object.hasOwnProperty.call(e, "deviceModel") &&
                  t.uint32(42).string(e.deviceModel),
                null != e.os &&
                  Object.hasOwnProperty.call(e, "os") &&
                  t.uint32(48).uint32(e.os),
                null != e.osVersion &&
                  Object.hasOwnProperty.call(e, "osVersion") &&
                  t.uint32(58).string(e.osVersion),
                null != e.clientVersion &&
                  Object.hasOwnProperty.call(e, "clientVersion") &&
                  t.uint32(66).string(e.clientVersion),
                null != e.clientIp &&
                  Object.hasOwnProperty.call(e, "clientIp") &&
                  t.uint32(74).string(e.clientIp),
                null != e.network &&
                  Object.hasOwnProperty.call(e, "network") &&
                  t.uint32(80).uint32(e.network),
                null != e.country &&
                  Object.hasOwnProperty.call(e, "country") &&
                  t.uint32(90).string(e.country),
                null != e.ua &&
                  Object.hasOwnProperty.call(e, "ua") &&
                  t.uint32(98).string(e.ua),
                null != e.sdkVersion &&
                  Object.hasOwnProperty.call(e, "sdkVersion") &&
                  t.uint32(106).string(e.sdkVersion),
                null != e.timestamp &&
                  Object.hasOwnProperty.call(e, "timestamp") &&
                  t.uint32(112).uint64(e.timestamp),
                null != e.adjustTimestamp &&
                  Object.hasOwnProperty.call(e, "adjustTimestamp") &&
                  t.uint32(120).uint64(e.adjustTimestamp),
                null != e.sdkType &&
                  Object.hasOwnProperty.call(e, "sdkType") &&
                  t.uint32(128).uint32(e.sdkType),
                null != e.bodyFormat &&
                  Object.hasOwnProperty.call(e, "bodyFormat") &&
                  t.uint32(136).uint32(e.bodyFormat),
                null != e.abTest &&
                  Object.hasOwnProperty.call(e, "abTest") &&
                  t.uint32(146).string(e.abTest),
                null != e.appType &&
                  Object.hasOwnProperty.call(e, "appType") &&
                  t.uint32(152).uint32(e.appType),
                null != e.rnVersion &&
                  Object.hasOwnProperty.call(e, "rnVersion") &&
                  t.uint32(162).string(e.rnVersion),
                null != e.channel &&
                  Object.hasOwnProperty.call(e, "channel") &&
                  t.uint32(170).string(e.channel),
                null != e.biz &&
                  Object.hasOwnProperty.call(e, "biz") &&
                  t.uint32(176).uint32(e.biz),
                null != e.samplePercent &&
                  Object.hasOwnProperty.call(e, "samplePercent") &&
                  t.uint32(184).uint32(e.samplePercent),
                null != e.dataSourceType &&
                  Object.hasOwnProperty.call(e, "dataSourceType") &&
                  t.uint32(192).uint32(e.dataSourceType),
                t
              );
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.Header();
                e.pos < n;

              ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.id = e.uint32();
                    break;
                  case 2:
                    r.sceneId = e.uint32();
                    break;
                  case 3:
                    r.uid = e.uint64();
                    break;
                  case 4:
                    r.deviceId = e.string();
                    break;
                  case 5:
                    r.deviceModel = e.string();
                    break;
                  case 6:
                    r.os = e.uint32();
                    break;
                  case 7:
                    r.osVersion = e.string();
                    break;
                  case 8:
                    r.clientVersion = e.string();
                    break;
                  case 9:
                    r.clientIp = e.string();
                    break;
                  case 10:
                    r.network = e.uint32();
                    break;
                  case 11:
                    r.country = e.string();
                    break;
                  case 12:
                    r.ua = e.string();
                    break;
                  case 13:
                    r.sdkVersion = e.string();
                    break;
                  case 14:
                    r.timestamp = e.uint64();
                    break;
                  case 15:
                    r.adjustTimestamp = e.uint64();
                    break;
                  case 16:
                    r.sdkType = e.uint32();
                    break;
                  case 17:
                    r.bodyFormat = e.uint32();
                    break;
                  case 18:
                    r.abTest = e.string();
                    break;
                  case 19:
                    r.appType = e.uint32();
                    break;
                  case 20:
                    r.rnVersion = e.string();
                    break;
                  case 21:
                    r.channel = e.string();
                    break;
                  case 22:
                    r.biz = e.uint32();
                    break;
                  case 23:
                    r.samplePercent = e.uint32();
                    break;
                  case 24:
                    r.dataSourceType = e.uint32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : null != e.id && e.hasOwnProperty("id") && !u.isInteger(e.id)
                ? "id: integer expected"
                : null != e.sceneId &&
                  e.hasOwnProperty("sceneId") &&
                  !u.isInteger(e.sceneId)
                ? "sceneId: integer expected"
                : null != e.uid &&
                  e.hasOwnProperty("uid") &&
                  !(
                    u.isInteger(e.uid) ||
                    (e.uid && u.isInteger(e.uid.low) && u.isInteger(e.uid.high))
                  )
                ? "uid: integer|Long expected"
                : null != e.deviceId &&
                  e.hasOwnProperty("deviceId") &&
                  !u.isString(e.deviceId)
                ? "deviceId: string expected"
                : null != e.deviceModel &&
                  e.hasOwnProperty("deviceModel") &&
                  !u.isString(e.deviceModel)
                ? "deviceModel: string expected"
                : null != e.os && e.hasOwnProperty("os") && !u.isInteger(e.os)
                ? "os: integer expected"
                : null != e.osVersion &&
                  e.hasOwnProperty("osVersion") &&
                  !u.isString(e.osVersion)
                ? "osVersion: string expected"
                : null != e.clientVersion &&
                  e.hasOwnProperty("clientVersion") &&
                  !u.isString(e.clientVersion)
                ? "clientVersion: string expected"
                : null != e.clientIp &&
                  e.hasOwnProperty("clientIp") &&
                  !u.isString(e.clientIp)
                ? "clientIp: string expected"
                : null != e.network &&
                  e.hasOwnProperty("network") &&
                  !u.isInteger(e.network)
                ? "network: integer expected"
                : null != e.country &&
                  e.hasOwnProperty("country") &&
                  !u.isString(e.country)
                ? "country: string expected"
                : null != e.ua && e.hasOwnProperty("ua") && !u.isString(e.ua)
                ? "ua: string expected"
                : null != e.sdkVersion &&
                  e.hasOwnProperty("sdkVersion") &&
                  !u.isString(e.sdkVersion)
                ? "sdkVersion: string expected"
                : null != e.timestamp &&
                  e.hasOwnProperty("timestamp") &&
                  !(
                    u.isInteger(e.timestamp) ||
                    (e.timestamp &&
                      u.isInteger(e.timestamp.low) &&
                      u.isInteger(e.timestamp.high))
                  )
                ? "timestamp: integer|Long expected"
                : null != e.adjustTimestamp &&
                  e.hasOwnProperty("adjustTimestamp") &&
                  !(
                    u.isInteger(e.adjustTimestamp) ||
                    (e.adjustTimestamp &&
                      u.isInteger(e.adjustTimestamp.low) &&
                      u.isInteger(e.adjustTimestamp.high))
                  )
                ? "adjustTimestamp: integer|Long expected"
                : null != e.sdkType &&
                  e.hasOwnProperty("sdkType") &&
                  !u.isInteger(e.sdkType)
                ? "sdkType: integer expected"
                : null != e.bodyFormat &&
                  e.hasOwnProperty("bodyFormat") &&
                  !u.isInteger(e.bodyFormat)
                ? "bodyFormat: integer expected"
                : null != e.abTest &&
                  e.hasOwnProperty("abTest") &&
                  !u.isString(e.abTest)
                ? "abTest: string expected"
                : null != e.appType &&
                  e.hasOwnProperty("appType") &&
                  !u.isInteger(e.appType)
                ? "appType: integer expected"
                : null != e.rnVersion &&
                  e.hasOwnProperty("rnVersion") &&
                  !u.isString(e.rnVersion)
                ? "rnVersion: string expected"
                : null != e.channel &&
                  e.hasOwnProperty("channel") &&
                  !u.isString(e.channel)
                ? "channel: string expected"
                : null != e.biz &&
                  e.hasOwnProperty("biz") &&
                  !u.isInteger(e.biz)
                ? "biz: integer expected"
                : null != e.samplePercent &&
                  e.hasOwnProperty("samplePercent") &&
                  !u.isInteger(e.samplePercent)
                ? "samplePercent: integer expected"
                : null != e.dataSourceType &&
                  e.hasOwnProperty("dataSourceType") &&
                  !u.isInteger(e.dataSourceType)
                ? "dataSourceType: integer expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.Header) return e;
              var t = new l.mmsevent.Header();
              return (
                null != e.id && (t.id = e.id >>> 0),
                null != e.sceneId && (t.sceneId = e.sceneId >>> 0),
                null != e.uid &&
                  (u.Long
                    ? ((t.uid = u.Long.fromValue(e.uid)).unsigned = !0)
                    : "string" == typeof e.uid
                    ? (t.uid = parseInt(e.uid, 10))
                    : "number" == typeof e.uid
                    ? (t.uid = e.uid)
                    : "object" == typeof e.uid &&
                      (t.uid = new u.LongBits(
                        e.uid.low >>> 0,
                        e.uid.high >>> 0
                      ).toNumber(!0))),
                null != e.deviceId && (t.deviceId = String(e.deviceId)),
                null != e.deviceModel &&
                  (t.deviceModel = String(e.deviceModel)),
                null != e.os && (t.os = e.os >>> 0),
                null != e.osVersion && (t.osVersion = String(e.osVersion)),
                null != e.clientVersion &&
                  (t.clientVersion = String(e.clientVersion)),
                null != e.clientIp && (t.clientIp = String(e.clientIp)),
                null != e.network && (t.network = e.network >>> 0),
                null != e.country && (t.country = String(e.country)),
                null != e.ua && (t.ua = String(e.ua)),
                null != e.sdkVersion && (t.sdkVersion = String(e.sdkVersion)),
                null != e.timestamp &&
                  (u.Long
                    ? ((t.timestamp = u.Long.fromValue(e.timestamp)).unsigned =
                        !0)
                    : "string" == typeof e.timestamp
                    ? (t.timestamp = parseInt(e.timestamp, 10))
                    : "number" == typeof e.timestamp
                    ? (t.timestamp = e.timestamp)
                    : "object" == typeof e.timestamp &&
                      (t.timestamp = new u.LongBits(
                        e.timestamp.low >>> 0,
                        e.timestamp.high >>> 0
                      ).toNumber(!0))),
                null != e.adjustTimestamp &&
                  (u.Long
                    ? ((t.adjustTimestamp = u.Long.fromValue(
                        e.adjustTimestamp
                      )).unsigned = !0)
                    : "string" == typeof e.adjustTimestamp
                    ? (t.adjustTimestamp = parseInt(e.adjustTimestamp, 10))
                    : "number" == typeof e.adjustTimestamp
                    ? (t.adjustTimestamp = e.adjustTimestamp)
                    : "object" == typeof e.adjustTimestamp &&
                      (t.adjustTimestamp = new u.LongBits(
                        e.adjustTimestamp.low >>> 0,
                        e.adjustTimestamp.high >>> 0
                      ).toNumber(!0))),
                null != e.sdkType && (t.sdkType = e.sdkType >>> 0),
                null != e.bodyFormat && (t.bodyFormat = e.bodyFormat >>> 0),
                null != e.abTest && (t.abTest = String(e.abTest)),
                null != e.appType && (t.appType = e.appType >>> 0),
                null != e.rnVersion && (t.rnVersion = String(e.rnVersion)),
                null != e.channel && (t.channel = String(e.channel)),
                null != e.biz && (t.biz = e.biz >>> 0),
                null != e.samplePercent &&
                  (t.samplePercent = e.samplePercent >>> 0),
                null != e.dataSourceType &&
                  (t.dataSourceType = e.dataSourceType >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (t.defaults) {
                if (((n.id = 0), (n.sceneId = 0), u.Long)) {
                  var r = new u.Long(0, 0, !0);
                  n.uid =
                    t.longs === String
                      ? r.toString()
                      : t.longs === Number
                      ? r.toNumber()
                      : r;
                } else n.uid = t.longs === String ? "0" : 0;
                (n.deviceId = ""),
                  (n.deviceModel = ""),
                  (n.os = 0),
                  (n.osVersion = ""),
                  (n.clientVersion = ""),
                  (n.clientIp = ""),
                  (n.network = 0),
                  (n.country = ""),
                  (n.ua = ""),
                  (n.sdkVersion = ""),
                  u.Long
                    ? ((r = new u.Long(0, 0, !0)),
                      (n.timestamp =
                        t.longs === String
                          ? r.toString()
                          : t.longs === Number
                          ? r.toNumber()
                          : r))
                    : (n.timestamp = t.longs === String ? "0" : 0),
                  u.Long
                    ? ((r = new u.Long(0, 0, !0)),
                      (n.adjustTimestamp =
                        t.longs === String
                          ? r.toString()
                          : t.longs === Number
                          ? r.toNumber()
                          : r))
                    : (n.adjustTimestamp = t.longs === String ? "0" : 0),
                  (n.sdkType = 0),
                  (n.bodyFormat = 0),
                  (n.abTest = ""),
                  (n.appType = 0),
                  (n.rnVersion = ""),
                  (n.channel = ""),
                  (n.biz = 0),
                  (n.samplePercent = 100),
                  (n.dataSourceType = 0);
              }
              return (
                null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                null != e.sceneId &&
                  e.hasOwnProperty("sceneId") &&
                  (n.sceneId = e.sceneId),
                null != e.uid &&
                  e.hasOwnProperty("uid") &&
                  ("number" == typeof e.uid
                    ? (n.uid = t.longs === String ? String(e.uid) : e.uid)
                    : (n.uid =
                        t.longs === String
                          ? u.Long.prototype.toString.call(e.uid)
                          : t.longs === Number
                          ? new u.LongBits(
                              e.uid.low >>> 0,
                              e.uid.high >>> 0
                            ).toNumber(!0)
                          : e.uid)),
                null != e.deviceId &&
                  e.hasOwnProperty("deviceId") &&
                  (n.deviceId = e.deviceId),
                null != e.deviceModel &&
                  e.hasOwnProperty("deviceModel") &&
                  (n.deviceModel = e.deviceModel),
                null != e.os && e.hasOwnProperty("os") && (n.os = e.os),
                null != e.osVersion &&
                  e.hasOwnProperty("osVersion") &&
                  (n.osVersion = e.osVersion),
                null != e.clientVersion &&
                  e.hasOwnProperty("clientVersion") &&
                  (n.clientVersion = e.clientVersion),
                null != e.clientIp &&
                  e.hasOwnProperty("clientIp") &&
                  (n.clientIp = e.clientIp),
                null != e.network &&
                  e.hasOwnProperty("network") &&
                  (n.network = e.network),
                null != e.country &&
                  e.hasOwnProperty("country") &&
                  (n.country = e.country),
                null != e.ua && e.hasOwnProperty("ua") && (n.ua = e.ua),
                null != e.sdkVersion &&
                  e.hasOwnProperty("sdkVersion") &&
                  (n.sdkVersion = e.sdkVersion),
                null != e.timestamp &&
                  e.hasOwnProperty("timestamp") &&
                  ("number" == typeof e.timestamp
                    ? (n.timestamp =
                        t.longs === String ? String(e.timestamp) : e.timestamp)
                    : (n.timestamp =
                        t.longs === String
                          ? u.Long.prototype.toString.call(e.timestamp)
                          : t.longs === Number
                          ? new u.LongBits(
                              e.timestamp.low >>> 0,
                              e.timestamp.high >>> 0
                            ).toNumber(!0)
                          : e.timestamp)),
                null != e.adjustTimestamp &&
                  e.hasOwnProperty("adjustTimestamp") &&
                  ("number" == typeof e.adjustTimestamp
                    ? (n.adjustTimestamp =
                        t.longs === String
                          ? String(e.adjustTimestamp)
                          : e.adjustTimestamp)
                    : (n.adjustTimestamp =
                        t.longs === String
                          ? u.Long.prototype.toString.call(e.adjustTimestamp)
                          : t.longs === Number
                          ? new u.LongBits(
                              e.adjustTimestamp.low >>> 0,
                              e.adjustTimestamp.high >>> 0
                            ).toNumber(!0)
                          : e.adjustTimestamp)),
                null != e.sdkType &&
                  e.hasOwnProperty("sdkType") &&
                  (n.sdkType = e.sdkType),
                null != e.bodyFormat &&
                  e.hasOwnProperty("bodyFormat") &&
                  (n.bodyFormat = e.bodyFormat),
                null != e.abTest &&
                  e.hasOwnProperty("abTest") &&
                  (n.abTest = e.abTest),
                null != e.appType &&
                  e.hasOwnProperty("appType") &&
                  (n.appType = e.appType),
                null != e.rnVersion &&
                  e.hasOwnProperty("rnVersion") &&
                  (n.rnVersion = e.rnVersion),
                null != e.channel &&
                  e.hasOwnProperty("channel") &&
                  (n.channel = e.channel),
                null != e.biz && e.hasOwnProperty("biz") && (n.biz = e.biz),
                null != e.samplePercent &&
                  e.hasOwnProperty("samplePercent") &&
                  (n.samplePercent = e.samplePercent),
                null != e.dataSourceType &&
                  e.hasOwnProperty("dataSourceType") &&
                  (n.dataSourceType = e.dataSourceType),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.FileTransferEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.serviceId = ""),
            (e.prototype.serviceIndex = 0),
            (e.prototype.vid = ""),
            (e.prototype.code = 0),
            (e.prototype.sdkCode = 0),
            (e.prototype.extendId = ""),
            (e.prototype.cost = u.Long ? u.Long.fromBits(0, 0, !0) : 0),
            (e.prototype.fsize = u.Long ? u.Long.fromBits(0, 0, !0) : 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                null != e.actionId &&
                  Object.hasOwnProperty.call(e, "actionId") &&
                  t.uint32(8).int32(e.actionId),
                null != e.serviceId &&
                  Object.hasOwnProperty.call(e, "serviceId") &&
                  t.uint32(18).string(e.serviceId),
                null != e.serviceIndex &&
                  Object.hasOwnProperty.call(e, "serviceIndex") &&
                  t.uint32(24).int32(e.serviceIndex),
                null != e.vid &&
                  Object.hasOwnProperty.call(e, "vid") &&
                  t.uint32(34).string(e.vid),
                null != e.code &&
                  Object.hasOwnProperty.call(e, "code") &&
                  t.uint32(40).int32(e.code),
                null != e.sdkCode &&
                  Object.hasOwnProperty.call(e, "sdkCode") &&
                  t.uint32(48).int32(e.sdkCode),
                null != e.extendId &&
                  Object.hasOwnProperty.call(e, "extendId") &&
                  t.uint32(58).string(e.extendId),
                null != e.cost &&
                  Object.hasOwnProperty.call(e, "cost") &&
                  t.uint32(64).uint64(e.cost),
                null != e.fsize &&
                  Object.hasOwnProperty.call(e, "fsize") &&
                  t.uint32(72).uint64(e.fsize),
                t
              );
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.FileTransferEvent();
                e.pos < n;

              ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.actionId = e.int32();
                    break;
                  case 2:
                    r.serviceId = e.string();
                    break;
                  case 3:
                    r.serviceIndex = e.int32();
                    break;
                  case 4:
                    r.vid = e.string();
                    break;
                  case 5:
                    r.code = e.int32();
                    break;
                  case 6:
                    r.sdkCode = e.int32();
                    break;
                  case 7:
                    r.extendId = e.string();
                    break;
                  case 8:
                    r.cost = e.uint64();
                    break;
                  case 9:
                    r.fsize = e.uint64();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  !u.isInteger(e.actionId)
                ? "actionId: integer expected"
                : null != e.serviceId &&
                  e.hasOwnProperty("serviceId") &&
                  !u.isString(e.serviceId)
                ? "serviceId: string expected"
                : null != e.serviceIndex &&
                  e.hasOwnProperty("serviceIndex") &&
                  !u.isInteger(e.serviceIndex)
                ? "serviceIndex: integer expected"
                : null != e.vid && e.hasOwnProperty("vid") && !u.isString(e.vid)
                ? "vid: string expected"
                : null != e.code &&
                  e.hasOwnProperty("code") &&
                  !u.isInteger(e.code)
                ? "code: integer expected"
                : null != e.sdkCode &&
                  e.hasOwnProperty("sdkCode") &&
                  !u.isInteger(e.sdkCode)
                ? "sdkCode: integer expected"
                : null != e.extendId &&
                  e.hasOwnProperty("extendId") &&
                  !u.isString(e.extendId)
                ? "extendId: string expected"
                : null != e.cost &&
                  e.hasOwnProperty("cost") &&
                  !(
                    u.isInteger(e.cost) ||
                    (e.cost &&
                      u.isInteger(e.cost.low) &&
                      u.isInteger(e.cost.high))
                  )
                ? "cost: integer|Long expected"
                : null != e.fsize &&
                  e.hasOwnProperty("fsize") &&
                  !(
                    u.isInteger(e.fsize) ||
                    (e.fsize &&
                      u.isInteger(e.fsize.low) &&
                      u.isInteger(e.fsize.high))
                  )
                ? "fsize: integer|Long expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.FileTransferEvent) return e;
              var t = new l.mmsevent.FileTransferEvent();
              return (
                null != e.actionId && (t.actionId = 0 | e.actionId),
                null != e.serviceId && (t.serviceId = String(e.serviceId)),
                null != e.serviceIndex && (t.serviceIndex = 0 | e.serviceIndex),
                null != e.vid && (t.vid = String(e.vid)),
                null != e.code && (t.code = 0 | e.code),
                null != e.sdkCode && (t.sdkCode = 0 | e.sdkCode),
                null != e.extendId && (t.extendId = String(e.extendId)),
                null != e.cost &&
                  (u.Long
                    ? ((t.cost = u.Long.fromValue(e.cost)).unsigned = !0)
                    : "string" == typeof e.cost
                    ? (t.cost = parseInt(e.cost, 10))
                    : "number" == typeof e.cost
                    ? (t.cost = e.cost)
                    : "object" == typeof e.cost &&
                      (t.cost = new u.LongBits(
                        e.cost.low >>> 0,
                        e.cost.high >>> 0
                      ).toNumber(!0))),
                null != e.fsize &&
                  (u.Long
                    ? ((t.fsize = u.Long.fromValue(e.fsize)).unsigned = !0)
                    : "string" == typeof e.fsize
                    ? (t.fsize = parseInt(e.fsize, 10))
                    : "number" == typeof e.fsize
                    ? (t.fsize = e.fsize)
                    : "object" == typeof e.fsize &&
                      (t.fsize = new u.LongBits(
                        e.fsize.low >>> 0,
                        e.fsize.high >>> 0
                      ).toNumber(!0))),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (t.defaults) {
                if (
                  ((n.actionId = 0),
                  (n.serviceId = ""),
                  (n.serviceIndex = 0),
                  (n.vid = ""),
                  (n.code = 0),
                  (n.sdkCode = 0),
                  (n.extendId = ""),
                  u.Long)
                ) {
                  var r = new u.Long(0, 0, !0);
                  n.cost =
                    t.longs === String
                      ? r.toString()
                      : t.longs === Number
                      ? r.toNumber()
                      : r;
                } else n.cost = t.longs === String ? "0" : 0;
                u.Long
                  ? ((r = new u.Long(0, 0, !0)),
                    (n.fsize =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                        ? r.toNumber()
                        : r))
                  : (n.fsize = t.longs === String ? "0" : 0);
              }
              return (
                null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  (n.actionId = e.actionId),
                null != e.serviceId &&
                  e.hasOwnProperty("serviceId") &&
                  (n.serviceId = e.serviceId),
                null != e.serviceIndex &&
                  e.hasOwnProperty("serviceIndex") &&
                  (n.serviceIndex = e.serviceIndex),
                null != e.vid && e.hasOwnProperty("vid") && (n.vid = e.vid),
                null != e.code && e.hasOwnProperty("code") && (n.code = e.code),
                null != e.sdkCode &&
                  e.hasOwnProperty("sdkCode") &&
                  (n.sdkCode = e.sdkCode),
                null != e.extendId &&
                  e.hasOwnProperty("extendId") &&
                  (n.extendId = e.extendId),
                null != e.cost &&
                  e.hasOwnProperty("cost") &&
                  ("number" == typeof e.cost
                    ? (n.cost = t.longs === String ? String(e.cost) : e.cost)
                    : (n.cost =
                        t.longs === String
                          ? u.Long.prototype.toString.call(e.cost)
                          : t.longs === Number
                          ? new u.LongBits(
                              e.cost.low >>> 0,
                              e.cost.high >>> 0
                            ).toNumber(!0)
                          : e.cost)),
                null != e.fsize &&
                  e.hasOwnProperty("fsize") &&
                  ("number" == typeof e.fsize
                    ? (n.fsize = t.longs === String ? String(e.fsize) : e.fsize)
                    : (n.fsize =
                        t.longs === String
                          ? u.Long.prototype.toString.call(e.fsize)
                          : t.longs === Number
                          ? new u.LongBits(
                              e.fsize.low >>> 0,
                              e.fsize.high >>> 0
                            ).toNumber(!0)
                          : e.fsize)),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.ImgCompressEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.type = 0),
            (e.prototype.quality = 0),
            (e.prototype.scale = 0),
            (e.prototype.bSize = 0),
            (e.prototype.aSize = 0),
            (e.prototype.cost = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                t.uint32(8).uint32(e.actionId),
                t.uint32(16).uint32(e.type),
                null != e.quality &&
                  Object.hasOwnProperty.call(e, "quality") &&
                  t.uint32(24).uint32(e.quality),
                null != e.scale &&
                  Object.hasOwnProperty.call(e, "scale") &&
                  t.uint32(37).float(e.scale),
                null != e.bSize &&
                  Object.hasOwnProperty.call(e, "bSize") &&
                  t.uint32(40).uint32(e.bSize),
                t.uint32(48).uint32(e.aSize),
                t.uint32(56).uint32(e.cost),
                t
              );
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.ImgCompressEvent();
                e.pos < n;

              ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.actionId = e.uint32();
                    break;
                  case 2:
                    r.type = e.uint32();
                    break;
                  case 3:
                    r.quality = e.uint32();
                    break;
                  case 4:
                    r.scale = e.float();
                    break;
                  case 5:
                    r.bSize = e.uint32();
                    break;
                  case 6:
                    r.aSize = e.uint32();
                    break;
                  case 7:
                    r.cost = e.uint32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("actionId"))
                throw u.ProtocolError("missing required 'actionId'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("type"))
                throw u.ProtocolError("missing required 'type'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("aSize"))
                throw u.ProtocolError("missing required 'aSize'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("cost"))
                throw u.ProtocolError("missing required 'cost'", {
                  instance: r,
                });
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : u.isInteger(e.actionId)
                ? u.isInteger(e.type)
                  ? null != e.quality &&
                    e.hasOwnProperty("quality") &&
                    !u.isInteger(e.quality)
                    ? "quality: integer expected"
                    : null != e.scale &&
                      e.hasOwnProperty("scale") &&
                      "number" != typeof e.scale
                    ? "scale: number expected"
                    : null != e.bSize &&
                      e.hasOwnProperty("bSize") &&
                      !u.isInteger(e.bSize)
                    ? "bSize: integer expected"
                    : u.isInteger(e.aSize)
                    ? u.isInteger(e.cost)
                      ? null
                      : "cost: integer expected"
                    : "aSize: integer expected"
                  : "type: integer expected"
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.ImgCompressEvent) return e;
              var t = new l.mmsevent.ImgCompressEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.type && (t.type = e.type >>> 0),
                null != e.quality && (t.quality = e.quality >>> 0),
                null != e.scale && (t.scale = Number(e.scale)),
                null != e.bSize && (t.bSize = e.bSize >>> 0),
                null != e.aSize && (t.aSize = e.aSize >>> 0),
                null != e.cost && (t.cost = e.cost >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.actionId = 0),
                  (n.type = 0),
                  (n.quality = 0),
                  (n.scale = 0),
                  (n.bSize = 0),
                  (n.aSize = 0),
                  (n.cost = 0)),
                null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  (n.actionId = e.actionId),
                null != e.type && e.hasOwnProperty("type") && (n.type = e.type),
                null != e.quality &&
                  e.hasOwnProperty("quality") &&
                  (n.quality = e.quality),
                null != e.scale &&
                  e.hasOwnProperty("scale") &&
                  (n.scale =
                    t.json && !isFinite(e.scale) ? String(e.scale) : e.scale),
                null != e.bSize &&
                  e.hasOwnProperty("bSize") &&
                  (n.bSize = e.bSize),
                null != e.aSize &&
                  e.hasOwnProperty("aSize") &&
                  (n.aSize = e.aSize),
                null != e.cost && e.hasOwnProperty("cost") && (n.cost = e.cost),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.ImgPreuploadEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.serviceLen = 0),
            (e.prototype.firstServiceId = ""),
            (e.prototype.imgIdsLen = 0),
            (e.prototype.cost = 0),
            (e.prototype.strategyVer = 0),
            (e.prototype.retryCount = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                t.uint32(8).uint32(e.actionId),
                null != e.serviceLen &&
                  Object.hasOwnProperty.call(e, "serviceLen") &&
                  t.uint32(16).uint32(e.serviceLen),
                null != e.firstServiceId &&
                  Object.hasOwnProperty.call(e, "firstServiceId") &&
                  t.uint32(26).string(e.firstServiceId),
                null != e.imgIdsLen &&
                  Object.hasOwnProperty.call(e, "imgIdsLen") &&
                  t.uint32(32).uint32(e.imgIdsLen),
                null != e.cost &&
                  Object.hasOwnProperty.call(e, "cost") &&
                  t.uint32(40).uint32(e.cost),
                t.uint32(48).uint32(e.strategyVer),
                null != e.retryCount &&
                  Object.hasOwnProperty.call(e, "retryCount") &&
                  t.uint32(56).uint32(e.retryCount),
                t
              );
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.ImgPreuploadEvent();
                e.pos < n;

              ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.actionId = e.uint32();
                    break;
                  case 2:
                    r.serviceLen = e.uint32();
                    break;
                  case 3:
                    r.firstServiceId = e.string();
                    break;
                  case 4:
                    r.imgIdsLen = e.uint32();
                    break;
                  case 5:
                    r.cost = e.uint32();
                    break;
                  case 6:
                    r.strategyVer = e.uint32();
                    break;
                  case 7:
                    r.retryCount = e.uint32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("actionId"))
                throw u.ProtocolError("missing required 'actionId'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("strategyVer"))
                throw u.ProtocolError("missing required 'strategyVer'", {
                  instance: r,
                });
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : u.isInteger(e.actionId)
                ? null != e.serviceLen &&
                  e.hasOwnProperty("serviceLen") &&
                  !u.isInteger(e.serviceLen)
                  ? "serviceLen: integer expected"
                  : null != e.firstServiceId &&
                    e.hasOwnProperty("firstServiceId") &&
                    !u.isString(e.firstServiceId)
                  ? "firstServiceId: string expected"
                  : null != e.imgIdsLen &&
                    e.hasOwnProperty("imgIdsLen") &&
                    !u.isInteger(e.imgIdsLen)
                  ? "imgIdsLen: integer expected"
                  : null != e.cost &&
                    e.hasOwnProperty("cost") &&
                    !u.isInteger(e.cost)
                  ? "cost: integer expected"
                  : u.isInteger(e.strategyVer)
                  ? null != e.retryCount &&
                    e.hasOwnProperty("retryCount") &&
                    !u.isInteger(e.retryCount)
                    ? "retryCount: integer expected"
                    : null
                  : "strategyVer: integer expected"
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.ImgPreuploadEvent) return e;
              var t = new l.mmsevent.ImgPreuploadEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.serviceLen && (t.serviceLen = e.serviceLen >>> 0),
                null != e.firstServiceId &&
                  (t.firstServiceId = String(e.firstServiceId)),
                null != e.imgIdsLen && (t.imgIdsLen = e.imgIdsLen >>> 0),
                null != e.cost && (t.cost = e.cost >>> 0),
                null != e.strategyVer && (t.strategyVer = e.strategyVer >>> 0),
                null != e.retryCount && (t.retryCount = e.retryCount >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.actionId = 0),
                  (n.serviceLen = 0),
                  (n.firstServiceId = ""),
                  (n.imgIdsLen = 0),
                  (n.cost = 0),
                  (n.strategyVer = 0),
                  (n.retryCount = 0)),
                null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  (n.actionId = e.actionId),
                null != e.serviceLen &&
                  e.hasOwnProperty("serviceLen") &&
                  (n.serviceLen = e.serviceLen),
                null != e.firstServiceId &&
                  e.hasOwnProperty("firstServiceId") &&
                  (n.firstServiceId = e.firstServiceId),
                null != e.imgIdsLen &&
                  e.hasOwnProperty("imgIdsLen") &&
                  (n.imgIdsLen = e.imgIdsLen),
                null != e.cost && e.hasOwnProperty("cost") && (n.cost = e.cost),
                null != e.strategyVer &&
                  e.hasOwnProperty("strategyVer") &&
                  (n.strategyVer = e.strategyVer),
                null != e.retryCount &&
                  e.hasOwnProperty("retryCount") &&
                  (n.retryCount = e.retryCount),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.ImgFileTransferEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.serviceId = ""),
            (e.prototype.serviceIdx = 0),
            (e.prototype.imgid = ""),
            (e.prototype.code = 0),
            (e.prototype.extendId = ""),
            (e.prototype.cost = 0),
            (e.prototype.fsize = 0),
            (e.prototype.strategyVer = 0),
            (e.prototype.retryCount = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                t.uint32(8).uint32(e.actionId),
                t.uint32(18).string(e.serviceId),
                t.uint32(24).uint32(e.serviceIdx),
                t.uint32(34).string(e.imgid),
                t.uint32(40).uint32(e.code),
                null != e.extendId &&
                  Object.hasOwnProperty.call(e, "extendId") &&
                  t.uint32(50).string(e.extendId),
                null != e.cost &&
                  Object.hasOwnProperty.call(e, "cost") &&
                  t.uint32(56).uint32(e.cost),
                null != e.fsize &&
                  Object.hasOwnProperty.call(e, "fsize") &&
                  t.uint32(64).uint32(e.fsize),
                t.uint32(72).uint32(e.strategyVer),
                null != e.retryCount &&
                  Object.hasOwnProperty.call(e, "retryCount") &&
                  t.uint32(80).uint32(e.retryCount),
                t
              );
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.ImgFileTransferEvent();
                e.pos < n;

              ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.actionId = e.uint32();
                    break;
                  case 2:
                    r.serviceId = e.string();
                    break;
                  case 3:
                    r.serviceIdx = e.uint32();
                    break;
                  case 4:
                    r.imgid = e.string();
                    break;
                  case 5:
                    r.code = e.uint32();
                    break;
                  case 6:
                    r.extendId = e.string();
                    break;
                  case 7:
                    r.cost = e.uint32();
                    break;
                  case 8:
                    r.fsize = e.uint32();
                    break;
                  case 9:
                    r.strategyVer = e.uint32();
                    break;
                  case 10:
                    r.retryCount = e.uint32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("actionId"))
                throw u.ProtocolError("missing required 'actionId'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("serviceId"))
                throw u.ProtocolError("missing required 'serviceId'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("serviceIdx"))
                throw u.ProtocolError("missing required 'serviceIdx'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("imgid"))
                throw u.ProtocolError("missing required 'imgid'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("code"))
                throw u.ProtocolError("missing required 'code'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("strategyVer"))
                throw u.ProtocolError("missing required 'strategyVer'", {
                  instance: r,
                });
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : u.isInteger(e.actionId)
                ? u.isString(e.serviceId)
                  ? u.isInteger(e.serviceIdx)
                    ? u.isString(e.imgid)
                      ? u.isInteger(e.code)
                        ? null != e.extendId &&
                          e.hasOwnProperty("extendId") &&
                          !u.isString(e.extendId)
                          ? "extendId: string expected"
                          : null != e.cost &&
                            e.hasOwnProperty("cost") &&
                            !u.isInteger(e.cost)
                          ? "cost: integer expected"
                          : null != e.fsize &&
                            e.hasOwnProperty("fsize") &&
                            !u.isInteger(e.fsize)
                          ? "fsize: integer expected"
                          : u.isInteger(e.strategyVer)
                          ? null != e.retryCount &&
                            e.hasOwnProperty("retryCount") &&
                            !u.isInteger(e.retryCount)
                            ? "retryCount: integer expected"
                            : null
                          : "strategyVer: integer expected"
                        : "code: integer expected"
                      : "imgid: string expected"
                    : "serviceIdx: integer expected"
                  : "serviceId: string expected"
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.ImgFileTransferEvent) return e;
              var t = new l.mmsevent.ImgFileTransferEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.serviceId && (t.serviceId = String(e.serviceId)),
                null != e.serviceIdx && (t.serviceIdx = e.serviceIdx >>> 0),
                null != e.imgid && (t.imgid = String(e.imgid)),
                null != e.code && (t.code = e.code >>> 0),
                null != e.extendId && (t.extendId = String(e.extendId)),
                null != e.cost && (t.cost = e.cost >>> 0),
                null != e.fsize && (t.fsize = e.fsize >>> 0),
                null != e.strategyVer && (t.strategyVer = e.strategyVer >>> 0),
                null != e.retryCount && (t.retryCount = e.retryCount >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.actionId = 0),
                  (n.serviceId = ""),
                  (n.serviceIdx = 0),
                  (n.imgid = ""),
                  (n.code = 0),
                  (n.extendId = ""),
                  (n.cost = 0),
                  (n.fsize = 0),
                  (n.strategyVer = 0),
                  (n.retryCount = 0)),
                null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  (n.actionId = e.actionId),
                null != e.serviceId &&
                  e.hasOwnProperty("serviceId") &&
                  (n.serviceId = e.serviceId),
                null != e.serviceIdx &&
                  e.hasOwnProperty("serviceIdx") &&
                  (n.serviceIdx = e.serviceIdx),
                null != e.imgid &&
                  e.hasOwnProperty("imgid") &&
                  (n.imgid = e.imgid),
                null != e.code && e.hasOwnProperty("code") && (n.code = e.code),
                null != e.extendId &&
                  e.hasOwnProperty("extendId") &&
                  (n.extendId = e.extendId),
                null != e.cost && e.hasOwnProperty("cost") && (n.cost = e.cost),
                null != e.fsize &&
                  e.hasOwnProperty("fsize") &&
                  (n.fsize = e.fsize),
                null != e.strategyVer &&
                  e.hasOwnProperty("strategyVer") &&
                  (n.strategyVer = e.strategyVer),
                null != e.retryCount &&
                  e.hasOwnProperty("retryCount") &&
                  (n.retryCount = e.retryCount),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.ImgNotifyEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.serviceId = ""),
            (e.prototype.imgid = ""),
            (e.prototype.code = 0),
            (e.prototype.cost = 0),
            (e.prototype.strategyVer = 0),
            (e.prototype.retryCount = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                t.uint32(8).uint32(e.actionId),
                t.uint32(18).string(e.serviceId),
                t.uint32(26).string(e.imgid),
                t.uint32(32).uint32(e.code),
                t.uint32(40).uint32(e.cost),
                t.uint32(48).uint32(e.strategyVer),
                null != e.retryCount &&
                  Object.hasOwnProperty.call(e, "retryCount") &&
                  t.uint32(56).uint32(e.retryCount),
                t
              );
            }),
            (e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }),
            (e.decode = function (e, t) {
              e instanceof a || (e = a.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t,
                  r = new l.mmsevent.ImgNotifyEvent();
                e.pos < n;

              ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.actionId = e.uint32();
                    break;
                  case 2:
                    r.serviceId = e.string();
                    break;
                  case 3:
                    r.imgid = e.string();
                    break;
                  case 4:
                    r.code = e.uint32();
                    break;
                  case 5:
                    r.cost = e.uint32();
                    break;
                  case 6:
                    r.strategyVer = e.uint32();
                    break;
                  case 7:
                    r.retryCount = e.uint32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("actionId"))
                throw u.ProtocolError("missing required 'actionId'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("serviceId"))
                throw u.ProtocolError("missing required 'serviceId'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("imgid"))
                throw u.ProtocolError("missing required 'imgid'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("code"))
                throw u.ProtocolError("missing required 'code'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("cost"))
                throw u.ProtocolError("missing required 'cost'", {
                  instance: r,
                });
              if (!r.hasOwnProperty("strategyVer"))
                throw u.ProtocolError("missing required 'strategyVer'", {
                  instance: r,
                });
              return r;
            }),
            (e.decodeDelimited = function (e) {
              return (
                e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
              );
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : u.isInteger(e.actionId)
                ? u.isString(e.serviceId)
                  ? u.isString(e.imgid)
                    ? u.isInteger(e.code)
                      ? u.isInteger(e.cost)
                        ? u.isInteger(e.strategyVer)
                          ? null != e.retryCount &&
                            e.hasOwnProperty("retryCount") &&
                            !u.isInteger(e.retryCount)
                            ? "retryCount: integer expected"
                            : null
                          : "strategyVer: integer expected"
                        : "cost: integer expected"
                      : "code: integer expected"
                    : "imgid: string expected"
                  : "serviceId: string expected"
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.mmsevent.ImgNotifyEvent) return e;
              var t = new l.mmsevent.ImgNotifyEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.serviceId && (t.serviceId = String(e.serviceId)),
                null != e.imgid && (t.imgid = String(e.imgid)),
                null != e.code && (t.code = e.code >>> 0),
                null != e.cost && (t.cost = e.cost >>> 0),
                null != e.strategyVer && (t.strategyVer = e.strategyVer >>> 0),
                null != e.retryCount && (t.retryCount = e.retryCount >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.actionId = 0),
                  (n.serviceId = ""),
                  (n.imgid = ""),
                  (n.code = 0),
                  (n.cost = 0),
                  (n.strategyVer = 0),
                  (n.retryCount = 0)),
                null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  (n.actionId = e.actionId),
                null != e.serviceId &&
                  e.hasOwnProperty("serviceId") &&
                  (n.serviceId = e.serviceId),
                null != e.imgid &&
                  e.hasOwnProperty("imgid") &&
                  (n.imgid = e.imgid),
                null != e.code && e.hasOwnProperty("code") && (n.code = e.code),
                null != e.cost && e.hasOwnProperty("cost") && (n.cost = e.cost),
                null != e.strategyVer &&
                  e.hasOwnProperty("strategyVer") &&
                  (n.strategyVer = e.strategyVer),
                null != e.retryCount &&
                  e.hasOwnProperty("retryCount") &&
                  (n.retryCount = e.retryCount),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        i)),
        (e.exports = l);
    },
    80843: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AWSUploader = t.AWS = void 0);
      var s = n(9669),
        a = n(10898),
        c = n(32681),
        u = n(35266),
        l = n(6607),
        d = n(89137),
        p = (function () {
          function e(e) {
            (this.mediaUrl = e.authorization),
              (this.coverUrl = e.coverToken),
              (this.domain = e.domain),
              (this.vid = e.vid),
              (this.reportOption = {
                country: e.country,
                env: e.env,
                biz: e.biz,
                sdkVersion: e.sdkVersion,
                serviceId: e.serviceId,
                serviceIndex: e.serviceIndex,
                vid: e.vid,
              });
          }
          return (
            (e.prototype.upload = function (e) {
              return new v(
                r(r({ mediaUrl: this.mediaUrl, coverUrl: this.coverUrl }, e), {
                  vid: this.vid,
                  domain: this.domain,
                  report: new u.Report(this.reportOption),
                })
              );
            }),
            e
          );
        })();
      t.AWS = p;
      var v = (function () {
        function e(e) {
          var t = e.mediaFile,
            n = e.coverFile,
            r = e.mediaType,
            o = e.mediaUrl,
            i = e.coverUrl,
            u = e.vid,
            p = e.domain,
            v = e.report,
            f = this;
          (this.eventMap = new Map()),
            (this.report = v),
            (this.domain = p),
            (this.cancelToken = s.default.CancelToken.source()),
            (this.$ = s.default.create()),
            this.$.interceptors.response.use(
              function (e) {
                return e;
              },
              function (e) {
                var t, n, r, o, i, u, l;
                return s.default.isCancel(e)
                  ? Promise.reject(
                      new c.Error({
                        code: a.ErrorCode.UserCancel,
                        message: "User cancel",
                        error: e,
                      })
                    )
                  : (
                      null ===
                        (n =
                          null === (t = null == e ? void 0 : e.response) ||
                          void 0 === t
                            ? void 0
                            : t.data) || void 0 === n
                        ? void 0
                        : n.code
                    )
                  ? Promise.reject(
                      new c.Error({
                        code:
                          null ===
                            (o =
                              null === (r = null == e ? void 0 : e.response) ||
                              void 0 === r
                                ? void 0
                                : r.data) || void 0 === o
                            ? void 0
                            : o.code,
                        message:
                          null ===
                            (u =
                              null === (i = null == e ? void 0 : e.response) ||
                              void 0 === i
                                ? void 0
                                : i.data) || void 0 === u
                            ? void 0
                            : u.message,
                        error: e,
                        httpCode:
                          null === (l = null == e ? void 0 : e.response) ||
                          void 0 === l
                            ? void 0
                            : l.status,
                      })
                    )
                  : Promise.reject(e);
              }
            );
          var y = new Array(4).fill(Promise.resolve(null));
          if (t) {
            this.fsize = t.size;
            var h =
              r === l.MediaType.video
                ? "".concat(u, ".ori.mp4")
                : "".concat(u, ".ori.aac");
            (y[0] = this.$.put(o, t, {
              headers: { "Content-Type": l.ContentTypeHeader[r] },
              cancelToken: this.cancelToken.token,
              onUploadProgress: function (e) {
                f.emit(l.UploaderEvents.mediaProgress, {
                  total: e.total,
                  loaded: e.loaded,
                  percent: parseFloat((e.loaded / e.total).toFixed(2)),
                });
              },
            })
              .then(function () {
                var e = f.genUploadResponse(u, h);
                return f.emit(l.UploaderEvents.mediaUpload, e), e;
              })
              .catch(function (e) {
                var t,
                  n,
                  r,
                  o = a.ErrorCode.PublishResultVideoFailed;
                throw (
                  (s.default.isCancel((null == e ? void 0 : e.error) || e) &&
                    (o = a.ErrorCode.UserCancel),
                  f.report
                    .FileTransferEvent({
                      actionId: o,
                      code:
                        null !==
                          (r =
                            null ===
                              (n =
                                null ===
                                  (t = null == e ? void 0 : e.response) ||
                                void 0 === t
                                  ? void 0
                                  : t.data) || void 0 === n
                              ? void 0
                              : n.code) && void 0 !== r
                          ? r
                          : 0,
                    })
                    .report(),
                  f.cancel(),
                  e)
                );
              })),
              (y[2] = (0, d.getFileMd5)(t));
          }
          if (n) {
            t || (this.fsize = n.size);
            var g = "".concat(u, ".ori.jpg");
            (y[1] = this.$.put(i, n, {
              headers: { "Content-Type": l.ContentTypeHeader.image },
              cancelToken: this.cancelToken.token,
              onUploadProgress: function (e) {
                f.emit(l.UploaderEvents.coverProgress, {
                  total: e.total,
                  loaded: e.loaded,
                  percent: parseFloat((e.loaded / e.total).toFixed(2)),
                });
              },
            })
              .then(function () {
                var e = f.genUploadResponse(u, g);
                return f.emit(l.UploaderEvents.coverUpload, e), e;
              })
              .catch(function (e) {
                var t,
                  n,
                  r,
                  o = a.ErrorCode.PublishResultCoverFailed;
                throw (
                  (s.default.isCancel((null == e ? void 0 : e.error) || e) &&
                    (o = a.ErrorCode.UserCancel),
                  f.report
                    .FileTransferEvent({
                      actionId: o,
                      code:
                        null !==
                          (r =
                            null ===
                              (n =
                                null ===
                                  (t = null == e ? void 0 : e.response) ||
                                void 0 === t
                                  ? void 0
                                  : t.data) || void 0 === n
                              ? void 0
                              : n.code) && void 0 !== r
                          ? r
                          : 0,
                    })
                    .report(),
                  f.cancel(),
                  e)
                );
              })),
              (y[3] = (0, d.getFileMd5)(n));
          }
          this.donePromise = Promise.all(y);
        }
        return (
          (e.prototype.cancel = function () {
            this.cancelToken.cancel();
          }),
          (e.prototype.done = function () {
            return o(this, void 0, void 0, function () {
              var e, t, n, r, o, s, c;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 2, , 3]),
                      (e = Date.now()),
                      [4, this.donePromise]
                    );
                  case 1:
                    return (
                      (t = i.sent()),
                      (n = t[0]),
                      (r = t[1]),
                      (o = t[2]),
                      (s = t[3]),
                      this.report
                        .FileTransferEvent({
                          actionId: a.ErrorCode.Success,
                          code: 0,
                          sdkCode: 0,
                          cost: Date.now() - e,
                          extendId:
                            (null == n ? void 0 : n.extendId) ||
                            (null == r ? void 0 : r.extendId),
                          fsize: this.fsize,
                        })
                        .report(),
                      (c = { video: n, cover: r }),
                      o && (c.video.md5 = o),
                      s && (c.cover.md5 = s),
                      [2, c]
                    );
                  case 2:
                    throw i.sent();
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.genUploadResponse = function (e, t) {
            return { url: this.domain + "/" + t, etag: e, extendId: e };
          }),
          (e.prototype.on = function (e, t) {
            var n = this.eventMap.get(e) || new Set();
            n.add(t), this.eventMap.set(e, n);
          }),
          (e.prototype.off = function (e, t) {
            var n = this.eventMap.get(e);
            n && (n.delete(t), 0 === n.size && this.eventMap.delete(e));
          }),
          (e.prototype.emit = function (e, t) {
            var n = this.eventMap.get(e);
            n &&
              n.forEach(function (e) {
                e(t);
              });
          }),
          e
        );
      })();
      t.AWSUploader = v;
    },
    73856: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MMS = void 0);
      var s = n(6607),
        a = n(14516),
        c = n(61579),
        u = n(9669),
        l = (function () {
          function e(e) {
            if (
              ((this.serviceList = e),
              (this.eventMap = new Map()),
              (this.curServiceIdx = 0),
              !e.length)
            )
              throw new Error("one service at least");
            this.createService(this.serviceList[this.curServiceIdx]);
          }
          return (
            (e.prototype.createService = function (e) {
              return o(this, void 0, void 0, function () {
                var t;
                return i(this, function (o) {
                  switch (
                    ((t = {
                      country: e.country,
                      env: e.env,
                      biz: e.biz,
                      vid: e.vid,
                      sdkVersion: "mms-" + a.version,
                      serviceId: e.serviceID,
                      serviceIndex: e.serviceIndex,
                    }),
                    e.serviceID)
                  ) {
                    case s.ServiceID.shopeeuss:
                      this.service = Promise.resolve()
                        .then(function () {
                          return n(10898);
                        })
                        .then(function (t) {
                          return new (0, t.default)(e);
                        });
                      break;
                    case s.ServiceID.wscloud:
                      this.service = Promise.resolve()
                        .then(function () {
                          return n(61579);
                        })
                        .then(function (n) {
                          return new (0,
                          n.WCS)(r({ authorization: e.authorization, uploadDomain: e.uploadDomain, domain: e.domain }, t));
                        });
                      break;
                    case s.ServiceID.awscloud:
                      this.service = Promise.resolve()
                        .then(function () {
                          return n(80843);
                        })
                        .then(function (n) {
                          return new (0,
                          n.AWS)(r({ authorization: e.authorization, coverToken: e.coverToken, domain: e.domain }, t));
                        });
                      break;
                    default:
                      if (
                        (this.curServiceIdx++,
                        this.curServiceIdx >= this.serviceList.length)
                      )
                        throw new Error(
                          "Unrecognized serviceID, serviceID must be one of ".concat(
                            Object.values(s.ServiceID)
                              .map(function (e) {
                                return "'".concat(e, "'");
                              })
                              .join(" | ")
                          )
                        );
                      this.createService(this.serviceList[this.curServiceIdx]);
                  }
                  return [2];
                });
              });
            }),
            (e.prototype.subscribe = function () {
              var e = this;
              this.uploader.on(s.UploaderEvents.mediaUpload, function (t) {
                return e.emit(s.UploaderEvents.mediaUpload, t);
              }),
                this.uploader.on(s.UploaderEvents.coverUpload, function (t) {
                  return e.emit(s.UploaderEvents.coverUpload, t);
                }),
                this.uploader.on(s.UploaderEvents.mediaProgress, function (t) {
                  return e.emit(
                    s.UploaderEvents.mediaProgress,
                    r(r({}, t), {
                      curService: e.serviceList[e.curServiceIdx].serviceID,
                    })
                  );
                }),
                this.uploader.on(s.UploaderEvents.coverProgress, function (t) {
                  return e.emit(
                    s.UploaderEvents.coverProgress,
                    r(r({}, t), {
                      curService: e.serviceList[e.curServiceIdx].serviceID,
                    })
                  );
                });
            }),
            (e.prototype.upload = function (e) {
              return o(this, void 0, void 0, function () {
                var t;
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (this.uploadParams = r({}, e)),
                        (t = this),
                        [4, this.service]
                      );
                    case 1:
                      return (
                        (t.uploader = n.sent().upload(e)),
                        this.subscribe(),
                        [2, this.uploader]
                      );
                  }
                });
              });
            }),
            (e.prototype.done = function () {
              return o(this, void 0, void 0, function () {
                var e, t, n;
                return i(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        o.trys.push([0, 2, , 7]),
                        (e = [{}]),
                        [4, this.uploader.done()]
                      );
                    case 1:
                      return [
                        2,
                        r.apply(void 0, [
                          r.apply(void 0, e.concat([o.sent()])),
                          {
                            finalService:
                              this.serviceList[this.curServiceIdx].serviceID,
                          },
                        ]),
                      ];
                    case 2:
                      if (
                        ((t = o.sent()),
                        !(
                          u.default.isCancel(null == t ? void 0 : t.error) ||
                          (null == t ? void 0 : t.message) ===
                            c.abortErrorMessage ||
                          this.curServiceIdx + 1 >= this.serviceList.length
                        ))
                      )
                        return [3, 3];
                      throw t;
                    case 3:
                      return (
                        this.curServiceIdx++,
                        this.createService(
                          this.serviceList[this.curServiceIdx]
                        ),
                        (n = this),
                        [4, this.service]
                      );
                    case 4:
                      return (
                        (n.uploader = o.sent().upload(this.uploadParams)),
                        this.subscribe(),
                        [4, this.done()]
                      );
                    case 5:
                      return [2, o.sent()];
                    case 6:
                      return [3, 7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.cancel = function () {
              this.uploader.cancel();
            }),
            (e.prototype.on = function (e, t) {
              var n = this.eventMap.get(e) || new Set();
              n.add(t), this.eventMap.set(e, n);
            }),
            (e.prototype.off = function (e, t) {
              var n = this.eventMap.get(e);
              n && (n.delete(t), 0 === n.size && this.eventMap.delete(e));
            }),
            (e.prototype.emit = function (e, t) {
              var n = this.eventMap.get(e);
              n &&
                n.forEach(function (e) {
                  e(t);
                });
            }),
            (e.version = a.version),
            e
          );
        })();
      t.MMS = l;
    },
    61579: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WcsUploader = t.WCS = t.abortErrorMessage = void 0);
      var s = n(54723),
        a = n(10898),
        c = n(89137),
        u = n(35266),
        l = n(6607);
      t.abortErrorMessage = "停止上传文件。";
      var d = (function () {
        function e(e) {
          (this.authorization = e.authorization),
            (this.uploadDomain = e.uploadDomain),
            (this.domain = e.domain),
            (this.vid = e.vid),
            (this.reportOption = {
              country: e.country,
              env: e.env,
              biz: e.biz,
              sdkVersion: e.sdkVersion,
              serviceId: e.serviceId,
              serviceIndex: e.serviceIndex,
              vid: e.vid,
            });
        }
        return (
          (e.prototype.upload = function (e) {
            return new p(
              r(r({}, e), {
                authorization: this.authorization,
                uploadDomain: this.uploadDomain,
                domain: this.domain,
                vid: this.vid,
                report: new u.Report(this.reportOption),
              })
            );
          }),
          e
        );
      })();
      t.WCS = d;
      var p = (function () {
        function e(e) {
          var n = e.mediaFile,
            r = e.coverFile,
            o = e.authorization,
            i = e.uploadDomain,
            u = e.domain,
            d = e.vid,
            p = e.mediaType,
            v = e.autoPicType,
            f = e.report,
            y = this;
          (this.eventMap = new Map()), (this.report = f), (this.domain = u);
          var h = function () {},
            g = function () {},
            m = new Array(4).fill(Promise.resolve(null));
          if (n) {
            this.fsize = n.size;
            var b =
                p === l.MediaType.video
                  ? "".concat(d, ".ori.mp4")
                  : "".concat(d, ".ori.aac"),
              I = (0, s.wcsUpload)(n, o, i, {
                mimeType: l.ContentTypeHeader[p],
                key: b,
                timeout: 0,
              });
            (h = function () {
              return I.stop();
            }),
              (m[0] = new Promise(function (e, t) {
                (I.uploadProgress = function (e) {
                  var t = e.total;
                  y.emit(l.UploaderEvents.mediaProgress, {
                    loaded: t.loaded,
                    total: t.size,
                    percent: Math.round(t.percent) / 100,
                  });
                }),
                  (I.onComplete = function (t) {
                    var n = t.data,
                      r = y.normalizeResponse(n, b);
                    y.emit(l.UploaderEvents.mediaUpload, r), e(r);
                  }),
                  (I.onError = t),
                  I.putFile();
              }).catch(function (e) {
                var n,
                  r,
                  o,
                  i = a.ErrorCode.PublishResultVideoFailed;
                throw (
                  (t.abortErrorMessage === (null == e ? void 0 : e.message) &&
                    (i = a.ErrorCode.UserCancel),
                  y.report
                    .FileTransferEvent({
                      actionId: i,
                      code:
                        null !==
                          (o =
                            null ===
                              (r =
                                null ===
                                  (n = null == e ? void 0 : e.response) ||
                                void 0 === n
                                  ? void 0
                                  : n.data) || void 0 === r
                              ? void 0
                              : r.code) && void 0 !== o
                          ? o
                          : 0,
                    })
                    .report(),
                  e)
                );
              })),
              (m[2] = (0, c.getFileMd5)(n));
          }
          if (r) {
            n || (this.fsize = r.size);
            var w = "".concat(d, ".ori.jpg");
            v && (w = "".concat(d, ".ori.").concat(r.name.split(".").pop()));
            var O = (0, s.wcsUpload)(r, o, i, {
              mimeType: l.ContentTypeHeader.image,
              key: w,
            });
            (g = O.stop),
              (m[1] = new Promise(function (e, t) {
                (O.uploadProgress = function (e) {
                  var t = e.total;
                  y.emit(l.UploaderEvents.coverProgress, {
                    loaded: t.loaded,
                    total: t.size,
                    percent: Math.round(t.percent) / 100,
                  });
                }),
                  (O.onComplete = function (t) {
                    var n = t.data,
                      r = y.normalizeResponse(n, w);
                    y.emit(l.UploaderEvents.coverUpload, r), e(r);
                  }),
                  (O.onError = t),
                  O.putFile();
              }).catch(function (e) {
                var n,
                  r,
                  o,
                  i = a.ErrorCode.PublishResultCoverFailed;
                throw (
                  (t.abortErrorMessage === (null == e ? void 0 : e.message) &&
                    (i = a.ErrorCode.UserCancel),
                  y.report
                    .FileTransferEvent({
                      actionId: i,
                      code:
                        null !==
                          (o =
                            null ===
                              (r =
                                null ===
                                  (n = null == e ? void 0 : e.response) ||
                                void 0 === n
                                  ? void 0
                                  : n.data) || void 0 === r
                              ? void 0
                              : r.code) && void 0 !== o
                          ? o
                          : 0,
                    })
                    .report(),
                  e)
                );
              })),
              (m[3] = (0, c.getFileMd5)(r));
          }
          (this.cancel = function () {
            h(), g();
          }),
            (this.donePromise = Promise.all(m));
        }
        return (
          (e.prototype.normalizeResponse = function (e, t) {
            return "string" == typeof e
              ? { url: this.domain + "/" + t, etag: e, extendId: e }
              : { url: this.domain + "/" + t, etag: e.hash, extendId: e.hash };
          }),
          (e.prototype.done = function () {
            return o(this, void 0, void 0, function () {
              var e, t, n, r, o, s, c;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 2, , 3]),
                      (e = Date.now()),
                      [4, this.donePromise]
                    );
                  case 1:
                    return (
                      (t = i.sent()),
                      (n = t[0]),
                      (r = t[1]),
                      (o = t[2]),
                      (s = t[3]),
                      this.report
                        .FileTransferEvent({
                          actionId: a.ErrorCode.Success,
                          code: 0,
                          cost: Date.now() - e,
                          extendId:
                            (null == n ? void 0 : n.extendId) ||
                            (null == r ? void 0 : r.extendId),
                          fsize: this.fsize,
                        })
                        .report(),
                      (c = { video: n, cover: r }),
                      o && (c.video.md5 = o),
                      s && (c.cover.md5 = s),
                      [2, c]
                    );
                  case 2:
                    throw i.sent();
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.on = function (e, t) {
            var n = this.eventMap.get(e) || new Set();
            n.add(t), this.eventMap.set(e, n);
          }),
          (e.prototype.off = function (e, t) {
            var n = this.eventMap.get(e);
            n && (n.delete(t), 0 === n.size && this.eventMap.delete(e));
          }),
          (e.prototype.emit = function (e, t) {
            var n = this.eventMap.get(e);
            n &&
              n.forEach(function (e) {
                e(t);
              });
          }),
          e
        );
      })();
      t.WcsUploader = p;
    },
    53816: function (e, t, n) {
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (
              (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              r(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              i.apply(this, arguments)
            );
          },
        s =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        a =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = n(9669),
        u = n(32681),
        l = n(70249),
        d = n(89137),
        p = n(10485),
        v = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.options = t),
              (n.$ = c.default.create({
                adapter: (0, p.retryAdapterEnhancer)(
                  c.default.defaults.adapter,
                  {
                    times: n.options.strategy.retry_count,
                    delay: n.options.strategy.backoff_time,
                  }
                ),
              })),
              (n.cancelToken = c.default.CancelToken.source()),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.upload = function (e) {
              var t = e.file,
                n = e.imgId,
                r = e.imgIndex;
              return s(this, void 0, void 0, function () {
                var e,
                  o,
                  v,
                  f,
                  y,
                  h,
                  g,
                  m,
                  b,
                  I,
                  w,
                  O,
                  P,
                  S,
                  _,
                  k = this;
                return a(this, function (T) {
                  switch (T.label) {
                    case 0:
                      if (t.size <= this.options.strategy.slice)
                        return [
                          2,
                          new Promise(function (e, o) {
                            k.normalUpload(t, n, r).then(e).catch(o);
                          }),
                        ];
                      (e = []), (o = []), (v = []), (f = 0), (T.label = 1);
                    case 1:
                      return f < t.size / this.options.strategy.slice
                        ? ((y = this.options.strategy.slice * f),
                          (h = y + this.options.strategy.slice),
                          (g = (h <= t.size ? h : t.size) - y),
                          (b = (m = e).push),
                          [4, (0, d.getEtag)(t.slice(y, y + g))])
                        : [3, 4];
                    case 2:
                      b.apply(m, [T.sent()]),
                        v.push({ index: f, start: y, size: g }),
                        (T.label = 3);
                    case 3:
                      return f++, [3, 1];
                    case 4:
                      return [4, this.prepare(n)];
                    case 5:
                      return (
                        (I = T.sent()),
                        (w = []),
                        (O = 0),
                        (P = function (e, t) {
                          return (O -= w[e] || 0), (w[e] = t || 0), (O += w[e]);
                        }),
                        (S = v.map(function (o) {
                          var u = o.start,
                            d = o.size,
                            v = o.index;
                          return function () {
                            return s(k, void 0, void 0, function () {
                              var o,
                                s = this;
                              return a(this, function (a) {
                                return (
                                  (o = {
                                    Authorization: this.options.token,
                                    Etag: e[v],
                                    "X-Request-Id": ""
                                      .concat(n, "-")
                                      .concat(v + 1),
                                    "Content-Type": l.ContentTypeHeader.slice,
                                    "X-Slice-Index": v + 1,
                                  }),
                                  [
                                    2,
                                    c.default
                                      .create({
                                        adapter: (0, p.retryAdapterEnhancer)(
                                          c.default.defaults.adapter,
                                          {
                                            times:
                                              this.options.strategy.retry_count,
                                            delay:
                                              this.options.strategy
                                                .backoff_time,
                                          }
                                        ),
                                        onUploadProgress: function (e) {
                                          var n = P(v, e.loaded),
                                            o = (0, p.getProgressInfoItem)(
                                              n,
                                              t.size
                                            );
                                          s.options.onProgressCB(
                                            i(i({}, o), { index: r })
                                          );
                                        },
                                      })
                                      .post(
                                        ""
                                          .concat(
                                            this.options.upload_domain,
                                            "/api/v3/"
                                          )
                                          .concat(this.options.bucket, "/")
                                          .concat(n, "?uploadId=")
                                          .concat(I),
                                        t.slice(u, u + d),
                                        {
                                          cancelToken: this.cancelToken.token,
                                          headers: o,
                                        }
                                      )
                                      .then(function (e) {
                                        return {
                                          identity: e.data.data.identity,
                                          size: d,
                                          index: v,
                                        };
                                      }),
                                  ]
                                );
                              });
                            });
                          };
                        })),
                        (_ = new u.Queue(S, {
                          concurrency: this.options.strategy.concurrency,
                        })),
                        [
                          2,
                          new Promise(function (t, i) {
                            var c = 0;
                            _.setTaskFullfilledHandler(function (u) {
                              var l = u.index,
                                d = u.identity;
                              return s(k, void 0, void 0, function () {
                                var s, u;
                                return a(this, function (a) {
                                  switch (a.label) {
                                    case 0:
                                      if (((o[l] = d), ++c !== S.length))
                                        return [3, 4];
                                      a.label = 1;
                                    case 1:
                                      return (
                                        a.trys.push([1, 3, , 4]),
                                        [4, this.mergeObject(n, r, e, o, I)]
                                      );
                                    case 2:
                                      return (s = a.sent()), t(s), [3, 4];
                                    case 3:
                                      return (u = a.sent()), i(u), [3, 4];
                                    case 4:
                                      return [2];
                                  }
                                });
                              });
                            }),
                              _.setAllTaskFullfilledHandler(function () {}),
                              _.setTaskRejectedHandler(function (e) {
                                k.cancel(), i(e);
                              }),
                              _.start();
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.prepare = function (e) {
              return s(this, void 0, void 0, function () {
                return a(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.$.post(
                          ""
                            .concat(
                              this.options.upload_domain,
                              "/api/v3/prepare/"
                            )
                            .concat(this.options.bucket, "/")
                            .concat(e),
                          null,
                          {
                            cancelToken: this.cancelToken.token,
                            headers: {
                              Authorization: this.options.token,
                              "X-Request-Id": e,
                              "Content-Type": l.ContentTypeHeader.image,
                            },
                          }
                        ),
                      ];
                    case 1:
                      return [2, t.sent().data.data.uploadId];
                  }
                });
              });
            }),
            (t.prototype.mergeObject = function (e, t, n, r, o) {
              return s(this, void 0, void 0, function () {
                var i, s, c, u, p, v, f;
                return a(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (i = {
                          slice_etags: n.map(function (e, t) {
                            return { index: t + 1, etag: e, identity: r[t] };
                          }),
                        }),
                        (u = (c = this.$).post),
                        (p = [
                          ""
                            .concat(
                              this.options.upload_domain,
                              "/api/v3/commit/"
                            )
                            .concat(this.options.bucket, "/")
                            .concat(e, "?uploadId=")
                            .concat(o),
                          i,
                        ]),
                        (v = {}),
                        (f = {
                          "X-Request-Id": e + "-merge",
                          "Content-Type": l.ContentTypeHeader.image,
                          Authorization: this.options.token,
                          "X-Slice-Count": n.length,
                        }),
                        [4, (0, d.getEtag)(new Blob([JSON.stringify(i)]))]
                      );
                    case 1:
                      return [
                        4,
                        u.apply(
                          c,
                          p.concat([
                            ((v.headers = ((f.Etag = a.sent()), f)),
                            (v.cancelToken = this.cancelToken.token),
                            v),
                          ])
                        ),
                      ];
                    case 2:
                      return (
                        (s = a.sent().data.data),
                        [
                          2,
                          {
                            index: t,
                            url: this.getFileUrl(e),
                            etag: s.etag,
                            img_id: e,
                          },
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.getFileUrl = function (e) {
              return this.options.play_domain + "/" + e;
            }),
            (t.prototype.normalUpload = function (e, t, n) {
              return s(this, void 0, void 0, function () {
                var r,
                  o = this;
                return a(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, (0, d.getEtag)(e)];
                    case 1:
                      return (
                        (r = s.sent()),
                        [
                          2,
                          new Promise(function (s, a) {
                            c.default
                              .create({
                                adapter: (0, p.retryAdapterEnhancer)(
                                  c.default.defaults.adapter,
                                  {
                                    times: o.options.strategy.retry_count,
                                    delay: o.options.strategy.backoff_time,
                                  }
                                ),
                                onUploadProgress: function (e) {
                                  var t = (0, p.getProgressInfoItem)(
                                    e.loaded,
                                    e.total
                                  );
                                  o.options.onProgressCB(
                                    i(i({}, t), { index: n })
                                  );
                                },
                              })
                              .post(
                                ""
                                  .concat(o.options.upload_domain, "/api/v3/")
                                  .concat(o.options.bucket, "/")
                                  .concat(t),
                                e,
                                {
                                  cancelToken: o.cancelToken.token,
                                  headers: {
                                    Authorization: o.options.token,
                                    "X-Request-Id": t,
                                    ETag: r,
                                    "Content-Type": l.ContentTypeHeader.image,
                                  },
                                }
                              )
                              .then(function (e) {
                                s({
                                  index: n,
                                  url: o.getFileUrl(t),
                                  etag: e.data.data.etag,
                                  img_id: t,
                                });
                              })
                              .catch(a);
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.cancel = function () {
              this.cancelToken.cancel();
            }),
            t
          );
        })(p.ImgUploader);
      t.default = v;
    },
    8984: function (e, t, n) {
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (
              (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              r(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              i.apply(this, arguments)
            );
          },
        s =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        a =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WCSImg = void 0);
      var c = n(54723),
        u = n(6607),
        l = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.options = t), n;
          }
          return (
            o(t, e),
            (t.prototype.cancel = function () {}),
            (t.prototype.upload = function (e) {
              var t = e.file,
                n = e.imgId,
                r = e.imgIndex;
              return s(this, void 0, void 0, function () {
                var e = this;
                return a(this, function (o) {
                  return [
                    2,
                    new Promise(function (o, s) {
                      var a = "".concat(n),
                        l = (0, c.wcsUpload)(
                          t,
                          e.options.token,
                          e.options.upload_domain,
                          {
                            key: a,
                            mimeType: u.ContentTypeHeader.image,
                            retryCount: e.options.strategy.retry_count,
                            concurrentRequestLimit:
                              e.options.strategy.concurrency,
                          }
                        );
                      (l.uploadProgress = function (t) {
                        var n = t.total;
                        e.options.onProgressCB(
                          i(i({}, n), {
                            percent: Math.round(n.percent) / 100,
                            index: r,
                            total: n.size,
                          })
                        );
                      }),
                        (l.onComplete = function (t) {
                          var i = t.data;
                          o(
                            "string" == typeof i
                              ? {
                                  url: e.options.play_domain + "/" + a,
                                  etag: i,
                                  img_id: n,
                                  index: r,
                                }
                              : {
                                  url: e.options.play_domain + "/" + a,
                                  etag: i.hash,
                                  img_id: n,
                                  index: r,
                                }
                          );
                        }),
                        (l.onError = s),
                        (e.cancel = function () {
                          l.stop();
                        }),
                        l.putFile();
                    }),
                  ];
                });
              });
            }),
            t
          );
        })(n(10485).ImgUploader);
      t.WCSImg = l;
    },
    30383: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MMSImg = void 0);
      var s = n(26729),
        a = n(70249),
        c = n(14516),
        u = n(1746),
        l = n(56391),
        d = n(10485),
        p = n(35266),
        v = n(9669),
        f = n(53816),
        y = n(8984),
        h = n(6607),
        g = (function () {
          function e(e) {
            (this.options = e),
              (this.event = new s.EventEmitter()),
              (this.serviceMap = {
                shopeeuss: void 0,
                wscloud: void 0,
                awscloud: void 0,
              }),
              (e.env = e.env || a.IEnv.STAGING);
          }
          return (
            (e.dataURLtoFile = function (e, t) {
              var n = e.split(",");
              if (2 !== n.length) throw new Error("dataURL is normative");
              for (
                var r = n[0].match(/:(.*?);/)[1],
                  o = window.atob(n[1]),
                  i = o.length,
                  s = new Uint8Array(i);
                i--;

              )
                s[i] = o.charCodeAt(i);
              return new File([s], t, { type: r });
            }),
            Object.defineProperty(e.prototype, "strategy", {
              get: function () {
                return r(
                  {
                    ver: this._strategy.ver,
                    api_timeout: this._strategy.api_timeout,
                  },
                  this._strategy.configs.upload
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.genCommonBody = function (e) {
              var t = (0, u.v4)().replace(/-/g, ""),
                n = null != e ? e : this.options.biz;
              return {
                version: 1,
                sign: (0, d.getSignature)(t, n),
                biz: n,
                app_version: "mms-" + c.version,
                sdk_version: "mms-" + c.version,
                os_type: 2,
                request_id: t,
                device_model: navigator.userAgent,
                client_region: this.options.country,
                uid: this.options.uid,
              };
            }),
            (e.prototype.genAxiosInstance = function (e, t, n) {
              return v.default.create({
                timeout: null != e ? e : 0,
                adapter: (0, d.retryAdapterEnhancer)(
                  v.default.defaults.adapter,
                  { times: null != t ? t : 3, delay: null != n ? n : 0 }
                ),
              });
            }),
            (e.prototype.preupload = function (e) {
              var t, n, s;
              return o(this, void 0, void 0, function () {
                var o, c, u, l, p, v;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (o = this.genCommonBody()),
                        (c = Date.now()),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          this.genAxiosInstance(
                            this.strategy.api_timeout,
                            this.strategy.retry_count,
                            this.strategy.backoff_time
                          ).post(
                            "https://api.mms."
                              .concat(h.IEnvDomain[this.options.env], "shopee.")
                              .concat(
                                a.ICountryDomain[this.options.country],
                                "/uploadapi/api/v1/image/preupload"
                              ),
                            { _header: o, count: e }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (u = i.sent()),
                        ((l = u.data.data).services = l.services.map(function (
                          e,
                          t
                        ) {
                          return r(r({}, e), {
                            token: (0, d.decryptToken)(e.token, o.request_id),
                            index: t,
                          });
                        })),
                        this.report.ImgPreuploadEvent({
                          actionId: this.canceled ? 3002 : 0,
                          serviceLen: l.services.length,
                          firstServiceId: l.services[0].service_id,
                          imgIdsLen: l.img_ids.length,
                          cost: Date.now() - c,
                          strategyVer: this.strategy.ver,
                          retryCount: u.retry_count,
                        }),
                        [2, l]
                      );
                    case 3:
                      throw (
                        ((p = i.sent()),
                        (v =
                          null !==
                            (s =
                              null ===
                                (n =
                                  null ===
                                    (t = null == p ? void 0 : p.response) ||
                                  void 0 === t
                                    ? void 0
                                    : t.data) || void 0 === n
                                ? void 0
                                : n.code) && void 0 !== s
                            ? s
                            : 3001),
                        (0, d.isTimeout)(p) && (v = 3001),
                        this.report.ImgPreuploadEvent({
                          actionId: this.canceled ? 3002 : v,
                          cost: Date.now() - c,
                          strategyVer: this.strategy.ver,
                          retryCount: this.strategy.retry_count,
                        }),
                        p)
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getStrategy = function () {
              var e = new l.ENDPOINT({
                biz: this.options.biz,
                country: a.ICountry.SG,
                env: this.options.env,
                uid: this.options.uid,
              }).getStrategy();
              if (e) {
                var t = e.ver,
                  n = e.api_timeout,
                  r = e.configs,
                  o = e.endpoint_cron,
                  i = o.interval,
                  s = o.pull_time,
                  c = o.ttl;
                this._strategy = {
                  ver: t,
                  interval: i,
                  pull_time: s,
                  ttl: c,
                  api_timeout: n,
                  configs: r,
                };
              }
            }),
            (e.prototype.notify = function (e) {
              var t, n, r, s, c, u;
              return o(this, void 0, void 0, function () {
                var o, l, p, v;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (o = Date.now()), (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          this.genAxiosInstance(
                            this.strategy.api_timeout,
                            this.strategy.retry_count,
                            this.strategy.backoff_time
                          ).post(
                            "https://api.mms."
                              .concat(h.IEnvDomain[this.options.env], "shopee.")
                              .concat(
                                a.ICountryDomain[this.options.country],
                                "/uploadapi/api/v1/image/notify"
                              ),
                            {
                              _header: this.genCommonBody(),
                              service_id: e.serviceId,
                              img_id: e.imgId,
                              url: e.url,
                              fsize: e.fsize,
                              finish_time: e.finishTime,
                            },
                            { headers: { Authorization: e.token } }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (l = i.sent()),
                        this.report.ImgNotifyEvent({
                          actionId: this.canceled ? 5002 : 0,
                          serviceId: e.serviceId,
                          imgid: e.imgId,
                          code: l.data.code,
                          cost: Date.now() - o,
                          strategyVer: this.strategy.ver,
                          retryCount: l.retry_count,
                        }),
                        [3, 4]
                      );
                    case 3:
                      throw (
                        ((p = i.sent()),
                        (v =
                          null !==
                            (r =
                              null ===
                                (n =
                                  null ===
                                    (t = null == p ? void 0 : p.response) ||
                                  void 0 === t
                                    ? void 0
                                    : t.data) || void 0 === n
                                ? void 0
                                : n.code) && void 0 !== r
                            ? r
                            : 5001),
                        (0, d.isTimeout)(p) && (v = 5001),
                        this.report.ImgNotifyEvent({
                          actionId: this.canceled ? 5002 : v,
                          serviceId: e.serviceId,
                          imgid: e.imgId,
                          code:
                            null !==
                              (u =
                                null ===
                                  (c =
                                    null ===
                                      (s = null == p ? void 0 : p.response) ||
                                    void 0 === s
                                      ? void 0
                                      : s.data) || void 0 === c
                                  ? void 0
                                  : c.code) && void 0 !== u
                              ? u
                              : 5001,
                          cost: Date.now() - o,
                          strategyVer: this.strategy.ver,
                          retryCount: this.strategy.retry_count,
                        }),
                        p)
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.base64Upload = function (t) {
              if (t.length <= 0)
                throw new Error("there is no dataUrl, at least one");
              this.upload(
                t.map(function (t) {
                  return e.dataURLtoFile(t);
                })
              );
            }),
            (e.prototype.upload = function (e) {
              return o(this, void 0, void 0, function () {
                return i(this, function (t) {
                  if (e.length <= 0)
                    throw new Error("there is no file, at least 1 file");
                  return (
                    (this.report = new p.Report({
                      country: this.options.country,
                      biz: this.options.biz,
                      env: this.options.env,
                      sdkVersion: "mms-" + c.version,
                      uid: this.options.uid,
                      reportNoLimit: !0,
                    })),
                    (this.files = e),
                    (this.canceled = !1),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.createService = function (e) {
              var t = this,
                n = function (e) {
                  return t.event.emit(a.UploaderEvents.imageProgress, e);
                };
              switch (e.service_id) {
                case a.ServiceID.shopeeuss:
                  (this.curService = new f.default(
                    r(r({}, e), { strategy: this.strategy, onProgressCB: n })
                  )),
                    (this.serviceMap[a.ServiceID.shopeeuss] = this.curService);
                  break;
                case a.ServiceID.wscloud:
                  (this.curService = new y.WCSImg(
                    r(r({}, e), { strategy: this.strategy, onProgressCB: n })
                  )),
                    (this.serviceMap[a.ServiceID.wscloud] = this.curService);
              }
            }),
            (e.prototype.done = function () {
              var e;
              return o(this, void 0, void 0, function () {
                var t, n, o, s, c, u, l, d, p, f, y, h, g, m, b;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (t = []), (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, , 16, 17]),
                        this.getStrategy(),
                        [4, this.preupload(this.files.length)]
                      );
                    case 2:
                      ((n = i.sent()).services = n.services.map(function (
                        e,
                        t
                      ) {
                        return r(r({}, e), { index: t });
                      })),
                        (o = 0),
                        (s = !1),
                        (c = 0),
                        (u = n.services),
                        (i.label = 3);
                    case 3:
                      if (!(c < u.length)) return [3, 15];
                      if (
                        ((l = u[c]),
                        this.canceled || o >= this.files.length || s)
                      )
                        return [3, 15];
                      (d = l.service_id), this.createService(l), (i.label = 4);
                    case 4:
                      if (!(o < this.files.length) || this.canceled)
                        return [3, 14];
                      (p = {
                        serviceId: l.service_id,
                        serviceIdx: l.index,
                        imgid: n.img_ids[o],
                        strategyVer: this.strategy.ver,
                      }),
                        (f = Date.now()),
                        (y = void 0),
                        (h = !1),
                        (i.label = 5);
                    case 5:
                      return (
                        i.trys.push([5, 7, , 8]),
                        [
                          4,
                          this.serviceMap[d].upload({
                            file: this.files[o],
                            imgId: n.img_ids[o],
                            imgIndex: o,
                          }),
                        ]
                      );
                    case 6:
                      return (
                        (g = i.sent()),
                        (y = g.url),
                        this.event.emit(a.UploaderEvents.imageUpload, g),
                        t.push(g),
                        this.report.ImgFileTransferEvent(
                          r(r({}, p), {
                            actionId: this.canceled ? 4003 : 0,
                            code: 0,
                            extendId: n.img_ids[o],
                            fsize: this.files[o].size,
                            cost: Date.now() - f,
                          })
                        ),
                        [3, 8]
                      );
                    case 7:
                      return (
                        (m = i.sent()),
                        (h = !0),
                        (b = 4001),
                        v.default.isCancel(m) && (b = 4003),
                        this.report.ImgFileTransferEvent(
                          r(r({}, p), {
                            actionId: this.canceled ? 4003 : b,
                            code: this.canceled
                              ? 4003
                              : (null ===
                                  (e = null == m ? void 0 : m.response) ||
                                void 0 === e
                                  ? void 0
                                  : e.data.code) || 4001,
                            cost: Date.now() - f,
                          })
                        ),
                        [3, 8]
                      );
                    case 8:
                      if (h) return [3, 12];
                      i.label = 9;
                    case 9:
                      return (
                        i.trys.push([9, 11, , 12]),
                        [
                          4,
                          this.notify({
                            serviceId: l.service_id,
                            imgId: n.img_ids[o],
                            token: l.token,
                            url: y,
                            fsize: this.files[o].size,
                            finishTime: Date.now(),
                          }),
                        ]
                      );
                    case 10:
                      return i.sent(), [3, 12];
                    case 11:
                      return i.sent(), (h = !0), (s = !0), t.pop(), [3, 12];
                    case 12:
                      if (h) return [3, 14];
                      i.label = 13;
                    case 13:
                      return o++, [3, 4];
                    case 14:
                      return c++, [3, 3];
                    case 15:
                      return [3, 17];
                    case 16:
                      return this.report.report(), [7];
                    case 17:
                      return [2, this.canceled ? [] : t];
                  }
                });
              });
            }),
            (e.prototype.cancel = function () {
              var e;
              null === (e = this.curService) || void 0 === e || e.cancel(),
                (this.canceled = !0);
            }),
            (e.prototype.on = function (e, t) {
              this.event.on(e, t);
            }),
            (e.prototype.off = function (e, t) {
              this.event.off(e, t);
            }),
            (e.prototype.once = function (e, t) {
              this.event.once(e, t);
            }),
            e
          );
        })();
      t.MMSImg = g;
    },
    10485: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getProgressInfoItem =
          t.ImgUploader =
          t.retryAdapterEnhancer =
          t.getSignature =
          t.decryptToken =
          t.isTimeout =
            void 0);
      var s = n(8322),
        a = n(81354);
      t.isTimeout = function (e) {
        return e.message.includes("timeout") || "ECONNABORTED" === e.code;
      };
      t.decryptToken = function (e, t) {
        return a.AES.decrypt(e, a.enc.Utf8.parse(t), {
          iv: a.enc.Utf8.parse("1234567887654321"),
          mode: a.mode.CBC,
          padding: a.pad.Pkcs7,
        }).toString(a.enc.Utf8);
      };
      t.getSignature = function (e, t) {
        var n = Date.now().toString().substr(0, 10),
          r = (function (e) {
            e = e || 32;
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                n = "",
                r = 0;
              r < e;
              r++
            )
              n += t[Math.floor(Math.random() * t.length)];
            return n;
          })(6);
        return (
          r + "-" + s.hash(r + "@" + e + "@" + t + "@shopee@" + n) + "-" + n
        );
      };
      t.retryAdapterEnhancer = function (e, t) {
        var n = t || {},
          s = n.times,
          a = void 0 === s ? 0 : s,
          c = n.delay,
          u = void 0 === c ? 0 : c;
        return function (t) {
          return o(void 0, void 0, void 0, function () {
            var n, s, c, l, d, p;
            return i(this, function (v) {
              return (
                (n = t.retryTimes),
                (s = void 0 === n ? a : n),
                (c = t.retryDelay),
                (l = void 0 === c ? u : c),
                (d = 0),
                (p = function () {
                  return o(void 0, void 0, void 0, function () {
                    var n, o;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            i.trys.push([0, 2, , 4]), (n = [{}]), [4, e(t)]
                          );
                        case 1:
                          return [
                            2,
                            r.apply(void 0, [
                              r.apply(void 0, n.concat([i.sent()])),
                              { retry_count: d },
                            ]),
                          ];
                        case 2:
                          return (
                            (o = i.sent()),
                            !s || d >= s
                              ? [2, Promise.reject(o)]
                              : (d++,
                                [
                                  4,
                                  new Promise(function (e) {
                                    setTimeout(e, l);
                                  }).then(p),
                                ])
                          );
                        case 3:
                          return [2, i.sent()];
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                [2, p()]
              );
            });
          });
        };
      };
      var c = function () {};
      (t.ImgUploader = c),
        (t.getProgressInfoItem = function (e, t) {
          return {
            total: t,
            loaded: e,
            percent: parseFloat((e / t).toFixed(2)),
          };
        });
    },
    70249: function (e, t, n) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var o = Object.getOwnPropertyDescriptor(t, n);
                (o &&
                  !("get" in o
                    ? !t.__esModule
                    : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, o);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        o(n(6607), t),
        o(n(30383), t);
      var i = n(73856);
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return i.MMS;
        },
      });
    },
    35266: function (e, t, n) {
      var r =
        (this && this.__assign) ||
        function () {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            r.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Report = void 0);
      var o = n(9669),
        i = n(6607),
        s = n(31172),
        a = (function () {
          function e(e) {
            (this.reportNoLimit = !1),
              (this.reported = !1),
              (this.events = new s.mmsevent.EventList()),
              (this._country = e.country),
              (this._env = e.env || i.IEnv.STAGING),
              (this._biz = e.biz),
              (this._sdkVersion = e.sdkVersion),
              (this._domain = i.ICountryDomain[e.country]),
              (this._serviceIndex = e.serviceIndex),
              (this._serviceId = e.serviceId),
              (this._vid = e.vid),
              (this._uid = e.uid),
              (this.reportNoLimit = e.reportNoLimit);
          }
          return (
            (e.prototype.genHeader = function (e) {
              return s.mmsevent.Header.create({
                id: e,
                uid: this._uid,
                biz: this._biz,
                sceneId: 109,
                country: this._country,
                os: 2,
                ua: window.navigator.userAgent,
                sdkVersion: this._sdkVersion,
                timestamp: Date.now(),
              });
            }),
            (e.prototype.FileTransferEvent = function (e) {
              var t,
                n,
                o,
                i = r(r({}, e), {
                  serviceId:
                    null !== (t = this._serviceId) && void 0 !== t
                      ? t
                      : e.serviceId,
                  serviceIndex:
                    null !== (n = this._serviceIndex) && void 0 !== n
                      ? n
                      : e.serviceIndex,
                  vid: null !== (o = this._vid) && void 0 !== o ? o : e.vid,
                }),
                a = s.mmsevent.FileTransferEvent.create(i);
              s.mmsevent.FileTransferEvent.verify(a);
              var c = s.mmsevent.Event.create({
                header: this.genHeader(s.mmsevent.EventID.MMSFileTransferEvent),
                body: s.mmsevent.FileTransferEvent.encode(a).finish(),
              });
              return this.events.events.push(c), this;
            }),
            (e.prototype.ImgPreuploadEvent = function (e) {
              var t = s.mmsevent.ImgPreuploadEvent.create(e);
              s.mmsevent.ImgPreuploadEvent.verify(t);
              var n = s.mmsevent.Event.create({
                header: this.genHeader(s.mmsevent.EventID.MMSImgPreuploadEvent),
                body: s.mmsevent.ImgPreuploadEvent.encode(t).finish(),
              });
              return this.events.events.push(n), this;
            }),
            (e.prototype.ImgFileTransferEvent = function (e) {
              var t = s.mmsevent.ImgFileTransferEvent.create(e);
              s.mmsevent.ImgFileTransferEvent.verify(t);
              var n = s.mmsevent.Event.create({
                header: this.genHeader(
                  s.mmsevent.EventID.MMSImgFileTransferEvent
                ),
                body: s.mmsevent.ImgFileTransferEvent.encode(t).finish(),
              });
              return this.events.events.push(n), this;
            }),
            (e.prototype.ImgNotifyEvent = function (e) {
              var t = s.mmsevent.ImgNotifyEvent.create(e);
              s.mmsevent.ImgNotifyEvent.verify(t);
              var n = s.mmsevent.Event.create({
                header: this.genHeader(s.mmsevent.EventID.MMSImgNotifyEvent),
                body: s.mmsevent.ImgNotifyEvent.encode(t).finish(),
              });
              return this.events.events.push(n), this;
            }),
            (e.prototype.report = function () {
              if (!this.reported || this.reportNoLimit) {
                this.reported = !0;
                var e = "https://data-rep.livetech."
                  .concat(i.IEnvDomain[this._env], "shopee.")
                  .concat(this._domain, "/dataapi/dataweb/event/reportPB");
                s.mmsevent.EventList.verify(this.events);
                var t = s.mmsevent.EventList.encode(this.events).finish();
                return (
                  (this.events.events.length = 0),
                  o.default.post(e, t.slice(), {
                    headers: { "Content-Type": "application/octet-stream" },
                  })
                );
              }
            }),
            e
          );
        })();
      t.Report = a;
    },
    6607: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IEnvDomain =
          t.IEnv =
          t.ICountryDomain =
          t.ICountry =
          t.ContentTypeHeader =
          t.MediaType =
          t.HttpCode =
          t.UploaderEvents =
          t.ServiceID =
            void 0),
        (function (e) {
          (e.shopeeuss = "shopeeuss"),
            (e.wscloud = "wscloud"),
            (e.awscloud = "awscloud");
        })(t.ServiceID || (t.ServiceID = {})),
        (function (e) {
          (e.mediaUpload = "media_upload"),
            (e.mediaProgress = "media_progress"),
            (e.coverUpload = "cover_upload"),
            (e.coverProgress = "cover_progress"),
            (e.imageUpload = "image_upload"),
            (e.imageProgress = "image_progress");
        })(t.UploaderEvents || (t.UploaderEvents = {})),
        (function (e) {
          (e[(e.OK = 200)] = "OK"),
            (e[(e.InvalidParam = 400)] = "InvalidParam"),
            (e[(e.InvalidToken = 403)] = "InvalidToken"),
            (e[(e.BucketUnExist = 404)] = "BucketUnExist"),
            (e[(e.SizeExceeded = 413)] = "SizeExceeded"),
            (e[(e.ServerError = 500)] = "ServerError");
        })(t.HttpCode || (t.HttpCode = {})),
        (function (e) {
          (e.video = "video"), (e.audio = "audio");
        })(t.MediaType || (t.MediaType = {})),
        (function (e) {
          (e.video = "video/mp4"),
            (e.audio = "audio/acc"),
            (e.image = "image/jpeg"),
            (e.slice = "application/octet-stream");
        })(t.ContentTypeHeader || (t.ContentTypeHeader = {})),
        (function (e) {
          (e.SG = "SG"),
            (e.MY = "MY"),
            (e.BR = "BR"),
            (e.ID = "ID"),
            (e.TW = "TW"),
            (e.VN = "VN"),
            (e.TH = "TH"),
            (e.PH = "PH"),
            (e.MX = "MX"),
            (e.CO = "CO"),
            (e.CL = "CL"),
            (e.AR = "AR"),
            (e.PL = "PL"),
            (e.ES = "ES"),
            (e.FR = "FR"),
            (e.IN = "IN");
        })(t.ICountry || (t.ICountry = {})),
        (function (e) {
          (e.SG = "sg"),
            (e.MY = "com.my"),
            (e.BR = "com.br"),
            (e.ID = "co.id"),
            (e.TW = "tw"),
            (e.VN = "vn"),
            (e.TH = "co.th"),
            (e.PH = "ph"),
            (e.MX = "com.mx"),
            (e.CO = "com.co"),
            (e.CL = "cl"),
            (e.AR = "com.ar"),
            (e.PL = "pl"),
            (e.ES = "es"),
            (e.FR = "fr"),
            (e.IN = "in");
        })(t.ICountryDomain || (t.ICountryDomain = {})),
        (function (e) {
          (e.TEST = "test"),
            (e.LIVE = "live"),
            (e.UAT = "uat"),
            (e.STAGING = "staging"),
            (e.TEST_STABLE = "test-stable");
        })(t.IEnv || (t.IEnv = {})),
        (function (e) {
          (e.live = ""),
            (e.staging = "staging."),
            (e.uat = "uat."),
            (e.test = "test."),
            (e["test-stable"] = "staging.");
        })(t.IEnvDomain || (t.IEnvDomain = {}));
    },
    89137: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isAudio = t.isVideo = t.isImage = t.getFileMd5 = t.getEtag = void 0);
      var r = n(9930);
      Object.defineProperty(t, "getEtag", {
        enumerable: !0,
        get: function () {
          return r.getEtag;
        },
      });
      var o = n(43340);
      Object.defineProperty(t, "getFileMd5", {
        enumerable: !0,
        get: function () {
          return o.getFileMd5;
        },
      });
      var i = n(32681);
      Object.defineProperty(t, "isImage", {
        enumerable: !0,
        get: function () {
          return i.isImage;
        },
      }),
        Object.defineProperty(t, "isVideo", {
          enumerable: !0,
          get: function () {
            return i.isVideo;
          },
        }),
        Object.defineProperty(t, "isAudio", {
          enumerable: !0,
          get: function () {
            return i.isAudio;
          },
        });
    },
    76949: function (e, t, n) {
      var r,
        o,
        i,
        s = n(62100),
        a = s.Writer,
        c = s.util,
        u = s.roots.default || (s.roots.default = {});
      (u.endpointevent =
        (((i = {}).EventID =
          ((r = {}),
          ((o = Object.create(r))[
            (r[80010] = "MMSGetEndpointCfgEvent")
          ] = 80010),
          o)),
        (i.EventList = (function () {
          function e(e) {
            if (((this.events = []), e))
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.events = c.emptyArray),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              if ((t || (t = a.create()), null != e.events && e.events.length))
                for (var n = 0; n < e.events.length; ++n)
                  u.endpointevent.Event.encode(
                    e.events[n],
                    t.uint32(10).fork()
                  ).ldelim();
              return t;
            }),
            e
          );
        })()),
        (i.Event = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.header = null),
            (e.prototype.body = c.newBuffer([])),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = a.create()),
                null != e.header &&
                  Object.hasOwnProperty.call(e, "header") &&
                  u.endpointevent.Header.encode(
                    e.header,
                    t.uint32(10).fork()
                  ).ldelim(),
                null != e.body &&
                  Object.hasOwnProperty.call(e, "body") &&
                  t.uint32(18).bytes(e.body),
                t
              );
            }),
            e
          );
        })()),
        (i.Header = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.id = 0),
            (e.prototype.sceneId = 0),
            (e.prototype.uid = c.Long ? c.Long.fromBits(0, 0, !0) : 0),
            (e.prototype.deviceId = ""),
            (e.prototype.deviceModel = ""),
            (e.prototype.os = 0),
            (e.prototype.osVersion = ""),
            (e.prototype.clientVersion = ""),
            (e.prototype.clientIp = ""),
            (e.prototype.network = 0),
            (e.prototype.country = ""),
            (e.prototype.ua = ""),
            (e.prototype.sdkVersion = ""),
            (e.prototype.timestamp = c.Long ? c.Long.fromBits(0, 0, !0) : 0),
            (e.prototype.adjustTimestamp = c.Long
              ? c.Long.fromBits(0, 0, !0)
              : 0),
            (e.prototype.sdkType = 0),
            (e.prototype.bodyFormat = 0),
            (e.prototype.abTest = ""),
            (e.prototype.appType = 0),
            (e.prototype.rnVersion = ""),
            (e.prototype.channel = ""),
            (e.prototype.biz = 0),
            (e.prototype.samplePercent = 100),
            (e.prototype.dataSourceType = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = a.create()),
                null != e.id &&
                  Object.hasOwnProperty.call(e, "id") &&
                  t.uint32(8).uint32(e.id),
                null != e.sceneId &&
                  Object.hasOwnProperty.call(e, "sceneId") &&
                  t.uint32(16).uint32(e.sceneId),
                null != e.uid &&
                  Object.hasOwnProperty.call(e, "uid") &&
                  t.uint32(24).uint64(e.uid),
                null != e.deviceId &&
                  Object.hasOwnProperty.call(e, "deviceId") &&
                  t.uint32(34).string(e.deviceId),
                null != e.deviceModel &&
                  Object.hasOwnProperty.call(e, "deviceModel") &&
                  t.uint32(42).string(e.deviceModel),
                null != e.os &&
                  Object.hasOwnProperty.call(e, "os") &&
                  t.uint32(48).uint32(e.os),
                null != e.osVersion &&
                  Object.hasOwnProperty.call(e, "osVersion") &&
                  t.uint32(58).string(e.osVersion),
                null != e.clientVersion &&
                  Object.hasOwnProperty.call(e, "clientVersion") &&
                  t.uint32(66).string(e.clientVersion),
                null != e.clientIp &&
                  Object.hasOwnProperty.call(e, "clientIp") &&
                  t.uint32(74).string(e.clientIp),
                null != e.network &&
                  Object.hasOwnProperty.call(e, "network") &&
                  t.uint32(80).uint32(e.network),
                null != e.country &&
                  Object.hasOwnProperty.call(e, "country") &&
                  t.uint32(90).string(e.country),
                null != e.ua &&
                  Object.hasOwnProperty.call(e, "ua") &&
                  t.uint32(98).string(e.ua),
                null != e.sdkVersion &&
                  Object.hasOwnProperty.call(e, "sdkVersion") &&
                  t.uint32(106).string(e.sdkVersion),
                null != e.timestamp &&
                  Object.hasOwnProperty.call(e, "timestamp") &&
                  t.uint32(112).uint64(e.timestamp),
                null != e.adjustTimestamp &&
                  Object.hasOwnProperty.call(e, "adjustTimestamp") &&
                  t.uint32(120).uint64(e.adjustTimestamp),
                null != e.sdkType &&
                  Object.hasOwnProperty.call(e, "sdkType") &&
                  t.uint32(128).uint32(e.sdkType),
                null != e.bodyFormat &&
                  Object.hasOwnProperty.call(e, "bodyFormat") &&
                  t.uint32(136).uint32(e.bodyFormat),
                null != e.abTest &&
                  Object.hasOwnProperty.call(e, "abTest") &&
                  t.uint32(146).string(e.abTest),
                null != e.appType &&
                  Object.hasOwnProperty.call(e, "appType") &&
                  t.uint32(152).uint32(e.appType),
                null != e.rnVersion &&
                  Object.hasOwnProperty.call(e, "rnVersion") &&
                  t.uint32(162).string(e.rnVersion),
                null != e.channel &&
                  Object.hasOwnProperty.call(e, "channel") &&
                  t.uint32(170).string(e.channel),
                null != e.biz &&
                  Object.hasOwnProperty.call(e, "biz") &&
                  t.uint32(176).uint32(e.biz),
                null != e.samplePercent &&
                  Object.hasOwnProperty.call(e, "samplePercent") &&
                  t.uint32(184).uint32(e.samplePercent),
                null != e.dataSourceType &&
                  Object.hasOwnProperty.call(e, "dataSourceType") &&
                  t.uint32(192).uint32(e.dataSourceType),
                t
              );
            }),
            e
          );
        })()),
        (i.GetEndpointCfgEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.cost = 0),
            (e.prototype.triggerScene = 0),
            (e.prototype.ver = 0),
            (e.prototype.retryCount = 0),
            (e.prototype.latitude = 0),
            (e.prototype.longitude = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = a.create()),
                t.uint32(8).uint32(e.actionId),
                null != e.cost &&
                  Object.hasOwnProperty.call(e, "cost") &&
                  t.uint32(16).uint32(e.cost),
                null != e.triggerScene &&
                  Object.hasOwnProperty.call(e, "triggerScene") &&
                  t.uint32(24).uint32(e.triggerScene),
                null != e.ver &&
                  Object.hasOwnProperty.call(e, "ver") &&
                  t.uint32(32).uint32(e.ver),
                null != e.retryCount &&
                  Object.hasOwnProperty.call(e, "retryCount") &&
                  t.uint32(40).uint32(e.retryCount),
                null != e.latitude &&
                  Object.hasOwnProperty.call(e, "latitude") &&
                  t.uint32(49).double(e.latitude),
                null != e.longitude &&
                  Object.hasOwnProperty.call(e, "longitude") &&
                  t.uint32(57).double(e.longitude),
                t
              );
            }),
            e
          );
        })()),
        i)),
        (e.exports = u);
    },
    78006: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ICountryDomain = t.IEnv = t.ICountry = void 0),
        (function (e) {
          (e.SG = "SG"),
            (e.MY = "MY"),
            (e.BR = "BR"),
            (e.ID = "ID"),
            (e.TW = "TW"),
            (e.VN = "VN"),
            (e.TH = "TH"),
            (e.PH = "PH"),
            (e.MX = "MX"),
            (e.CO = "CO"),
            (e.CL = "CL"),
            (e.AR = "AR"),
            (e.PL = "PL"),
            (e.ES = "ES"),
            (e.FR = "FR"),
            (e.IN = "IN"),
            (e.CN = "CN");
        })(t.ICountry || (t.ICountry = {})),
        (function (e) {
          (e.TEST = "test"),
            (e.LIVE = "live"),
            (e.UAT = "uat"),
            (e.STAGING = "staging"),
            (e.TEST_STABLE = "test-stable");
        })(t.IEnv || (t.IEnv = {})),
        (function (e) {
          (e.SG = "sg"),
            (e.MY = "com.my"),
            (e.BR = "com.br"),
            (e.ID = "co.id"),
            (e.TW = "tw"),
            (e.VN = "vn"),
            (e.TH = "co.th"),
            (e.PH = "ph"),
            (e.MX = "com.mx"),
            (e.CO = "com.co"),
            (e.CL = "cl"),
            (e.AR = "com.ar"),
            (e.PL = "pl"),
            (e.ES = "es"),
            (e.FR = "fr"),
            (e.IN = "in"),
            (e.CN = "cn");
        })(t.ICountryDomain || (t.ICountryDomain = {}));
    },
    56391: function (e, t, n) {
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENDPOINT = t.ICountry = t.IEnv = void 0);
      var i = n(1746),
        s = n(9669),
        a = n(88623),
        c = n(86148),
        u = n(78006);
      Object.defineProperty(t, "IEnv", {
        enumerable: !0,
        get: function () {
          return u.IEnv;
        },
      }),
        Object.defineProperty(t, "ICountry", {
          enumerable: !0,
          get: function () {
            return u.ICountry;
          },
        });
      var l = n(26439),
        d = (function () {
          function e(e) {
            (this.options = e),
              (this.support_webp = (0, l.isSupportWebp)()),
              (e.env = String(e.env).toLowerCase()),
              (e.country = String(e.country).toUpperCase()),
              this.fetchStrategy("endpoint_strategy");
          }
          return (
            (e.prototype.genAxiosInstance = function (e, t, n) {
              return s.default.create({
                timeout: null != e ? e : 0,
                adapter: (0, l.retryAdapterEnhancer)(
                  s.default.defaults.adapter,
                  { times: null != t ? t : 5, delay: null != n ? n : 6e4 }
                ),
              });
            }),
            (e.prototype.genHeader = function () {
              var e = (0, i.v4)().replace(/-/g, "");
              return {
                version: 1,
                sign: (0, l.getSignature)(e, 101),
                request_id: e,
                biz: 101,
                app_version: "mms-endpoint-" + a.version,
                sdk_version: "mms-endpoint-" + a.version,
                os_type: 2,
                device_model: navigator.userAgent,
                client_region: this.options.country,
                uid: this.options.uid,
              };
            }),
            (e.prototype.genReport = function () {
              this.report = new c.Report({
                country: this.options.country,
                biz: 101,
                env: this.options.env,
                sdkVersion: "mms-endpoint-" + a.version,
                uid: this.options.uid,
                reportNoLimit: !0,
              });
            }),
            (e.prototype.filterData = function (e) {
              var t = JSON.parse(localStorage.getItem("endpoint_strategy")),
                n = e.endpoint_cron,
                r = e.md5s;
              (t.endpoint_cron = n), (t.md5s = r);
              return (
                [
                  "core_player",
                  "livelog",
                  "mms_detect",
                  "mms_image",
                  "mms_vod",
                  "new_test",
                  "rtc",
                  "upload",
                ].forEach(function (n) {
                  e[n] && 0 === e[n].status && (t[n] = e[n]);
                }),
                t
              );
            }),
            (e.prototype.fetchStrategy = function (t) {
              var n, i, s, a, c, d, p, v, f;
              return r(this, void 0, void 0, function () {
                var r, y, h, g, m, b, I, w, O, P, S, _, k, T, E;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (
                        (this.genReport(),
                        (r = JSON.parse(localStorage.getItem(t))),
                        (y =
                          r || JSON.parse(JSON.stringify(l.defaultStrategy))),
                        r &&
                          !(
                            Date.now() -
                              1e3 *
                                (null ===
                                  (n = null == r ? void 0 : r.endpoint_cron) ||
                                void 0 === n
                                  ? void 0
                                  : n.pull_time) >
                            (null ===
                              (i = null == r ? void 0 : r.endpoint_cron) ||
                            void 0 === i
                              ? void 0
                              : i.ttl)
                          ))
                      )
                        return [3, 6];
                      if (
                        ((h = 0),
                        (g = 0),
                        (m = Date.now()),
                        (b =
                          null !==
                            (s = new Map([
                              [u.IEnv.TEST, "test."],
                              [u.IEnv.UAT, "uat."],
                              [u.IEnv.LIVE, ""],
                              [u.IEnv.STAGING, "staging."],
                              [u.IEnv.TEST_STABLE, "staging."],
                            ]).get(this.options.env)) && void 0 !== s
                            ? s
                            : "staging."),
                        e.lock)
                      )
                        return [3, 5];
                      (e.lock = !0), (o.label = 1);
                    case 1:
                      return (
                        o.trys.push([1, 3, 4, 5]),
                        (I = ""),
                        localStorage.getItem("md5s") &&
                          "undefined" !== localStorage.getItem("md5s") &&
                          (I = JSON.parse(localStorage.getItem("md5s"))),
                        (w = "https://endpoint.mms."
                          .concat(b, "shopee.")
                          .concat(
                            null !==
                              (a = u.ICountryDomain[this.options.country]) &&
                              void 0 !== a
                              ? a
                              : "sg",
                            "/api/v1/configs"
                          )),
                        [
                          4,
                          this.genAxiosInstance(
                            0,
                            (null ===
                              (c = null == r ? void 0 : r.endpoint_cron) ||
                            void 0 === c
                              ? void 0
                              : c.max_retry_count) || 5,
                            (null ===
                              (d = null == r ? void 0 : r.endpoint_cron) ||
                            void 0 === d
                              ? void 0
                              : d.fail_retry_period) || 6e3
                          ).post(w, {
                            _header: this.genHeader(),
                            md5s: I || {},
                          }),
                        ]
                      );
                    case 2:
                      return (
                        0 === (O = o.sent()).data.code
                          ? (localStorage.setItem(
                              "md5s",
                              JSON.stringify(O.data.data.md5s)
                            ),
                            (P = O.data.data),
                            JSON.parse(
                              localStorage.getItem("endpoint_strategy")
                            ) && (P = this.filterData(O.data.data)),
                            (S = P.mms_image),
                            localStorage.setItem(t, JSON.stringify(P)),
                            this.report.GetEndpointCfgEvent({
                              actionId: 0,
                              cost: Date.now() - m,
                              triggerScene: 4,
                              ver: S.data.ver,
                              retryCount: O.retry_count,
                              latitude: h,
                              longitude: g,
                            }),
                            (this._strategy = P))
                          : (this._strategy = y),
                        [3, 5]
                      );
                    case 3:
                      return (
                        (_ = o.sent()).err &&
                          ((k = _.err),
                          (T = _.retry_count),
                          (E =
                            null !==
                              (f =
                                null ===
                                  (v =
                                    null ===
                                      (p = null == k ? void 0 : k.response) ||
                                    void 0 === p
                                      ? void 0
                                      : p.data) || void 0 === v
                                  ? void 0
                                  : v.code) && void 0 !== f
                              ? f
                              : 500),
                          (0, l.isTimeout)(k) && (E = 1001),
                          this.report.GetEndpointCfgEvent({
                            actionId: E,
                            cost: Date.now() - m,
                            triggerScene: 4,
                            retryCount: T,
                            latitude: h,
                            longitude: g,
                          })),
                        (this._strategy = y),
                        [3, 5]
                      );
                    case 4:
                      return (e.lock = !1), this.report.report(), [7];
                    case 5:
                      return [3, 7];
                    case 6:
                      (this._strategy = r), (o.label = 7);
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getImgUrl = function (e, t, n, r) {
              return (
                void 0 === t && (t = ""),
                void 0 === n && (n = ""),
                this.getImgUrlInternal(e, t, n, !0, r)
              );
            }),
            (e.prototype.getImgUrlV2 = function (e, t, n, r) {
              return (
                void 0 === t && (t = ""),
                void 0 === n && (n = ""),
                this.getImgUrlInternal(e, t, n, !1, r)
              );
            }),
            (e.prototype.getImgUrlInternal = function (e, t, n, r, o) {
              void 0 === t && (t = ""), void 0 === n && (n = "");
              var i = (
                  JSON.parse(localStorage.getItem("endpoint_strategy")) ||
                  l.defaultStrategy
                ).mms_image.data.configs,
                s = (i[e] || i[100]).endpoint,
                a = s.disable,
                c = void 0 !== a && a,
                u = s.default_suffix,
                d = void 0 === u ? "" : u,
                p = s.extend_suffix,
                v = void 0 === p ? "" : p,
                f = s.domains,
                y = void 0 === f ? ["mms.img.susercontent.com"] : f;
              if (c) return { ok: !1, url: "" };
              if (r && 32 !== t.length) return { ok: !1, url: "" };
              if (0 !== t.length && y.length) {
                var h = "http://",
                  g = y[Math.floor(Math.random() * y.length)];
                return (
                  (h += "".concat(g, "/").concat(t).concat(n)),
                  ((".webp" === "".concat(d) &&
                    !(null == o ? void 0 : o.disable_webp) &&
                    this.support_webp) ||
                    ".webp" != "".concat(d)) &&
                    (h += "".concat(d).concat(v)),
                  { ok: !0, url: h }
                );
              }
              return { ok: !1, url: "" };
            }),
            (e.prototype.getImgHttpsUrl = function (e, t, n, r) {
              void 0 === n && (n = "");
              var o = this.getImgUrl(e, t, n, r);
              return o.ok && (o.url = o.url.replace("http://", "https://")), o;
            }),
            (e.prototype.getImgHttpsUrlV2 = function (e, t, n, r) {
              void 0 === n && (n = "");
              var o = this.getImgUrlV2(e, t, n, r);
              return o.ok && (o.url = o.url.replace("http://", "https://")), o;
            }),
            (e.prototype.downloadImg = function (e, t, n, r) {
              var o = this;
              return (
                void 0 === n && (n = ""),
                void 0 === r && (r = ""),
                new Promise(function (i, s) {
                  var a = o.getImgUrl(e, t, n);
                  if (a.ok) {
                    var c = new Image();
                    c.setAttribute("crossOrigin", "anonymous"),
                      (c.src = a.url),
                      (c.onload = function () {
                        if (c.width > 0 && c.height > 0) {
                          console.log(c.width, 222), console.log(c.height, 222);
                          var e = document.createElement("canvas");
                          (e.width = c.width),
                            (e.height = c.height),
                            e
                              .getContext("2d")
                              .drawImage(c, 0, 0, c.width, c.height),
                            e.toBlob(function (e) {
                              var n = URL.createObjectURL(e),
                                o = document.createElement("a");
                              (o.download = r || t),
                                (o.href = n),
                                o.click(),
                                o.remove(),
                                URL.revokeObjectURL(n);
                            }),
                            i(!0);
                        } else i(!1);
                      }),
                      (c.onerror = function (e) {
                        console.log("error===", e), s(!1);
                      });
                  } else s(!1);
                })
              );
            }),
            (e.prototype.getDataBy = function (e) {
              return this._strategy[e]
                ? this._strategy[e]
                : { ok: !1, data: {} };
            }),
            (e.prototype.getStrategy = function () {
              this.fetchStrategy("endpoint_strategy");
              var e = this.options.biz,
                t =
                  JSON.parse(localStorage.getItem("endpoint_strategy")) ||
                  l.defaultStrategy,
                n = t.ver,
                r = t.endpoint_cron,
                o = t.mms_image.data,
                i = o.api_timeout,
                s = o.configs;
              return {
                ver: n,
                api_timeout: i,
                endpoint_cron: r,
                configs: s[e] || s[100],
              };
            }),
            (e.lock = !1),
            e
          );
        })();
      t.ENDPOINT = d;
    },
    86148: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Report = void 0);
      var r = n(9669),
        o = n(78006),
        i = n(76949),
        s = (function () {
          function e(e) {
            var t;
            (this.reportNoLimit = !1),
              (this.reported = !1),
              (this.events = new i.endpointevent.EventList()),
              (this._country = e.country),
              (this._env = e.env),
              (this._biz = e.biz),
              (this._sdkVersion = e.sdkVersion),
              (this._domain =
                null !== (t = o.ICountryDomain[e.country]) && void 0 !== t
                  ? t
                  : "sg"),
              "cn" === this._domain && (this._domain = "sg"),
              (this._serviceIndex = e.serviceIndex),
              (this._serviceId = e.serviceId),
              (this._vid = e.vid),
              (this._uid = e.uid),
              (this.reportNoLimit = e.reportNoLimit);
          }
          return (
            (e.prototype.genHeader = function (e) {
              return i.endpointevent.Header.create({
                id: e,
                uid: this._uid,
                biz: 101,
                sceneId: 109,
                country: this._country,
                os: 2,
                ua: window.navigator.userAgent,
                sdkVersion: this._sdkVersion,
                timestamp: Date.now(),
              });
            }),
            (e.prototype.GetEndpointCfgEvent = function (e) {
              var t = i.endpointevent.GetEndpointCfgEvent.create(e),
                n = i.endpointevent.Event.create({
                  header: this.genHeader(
                    i.endpointevent.EventID.MMSGetEndpointCfgEvent
                  ),
                  body: i.endpointevent.GetEndpointCfgEvent.encode(t).finish(),
                });
              return this.events.events.push(n), this;
            }),
            (e.prototype.report = function () {
              var e;
              if (!this.reported || this.reportNoLimit) {
                this.reported = !0;
                var t =
                    null !==
                      (e = new Map([
                        [o.IEnv.TEST, "test."],
                        [o.IEnv.UAT, "uat."],
                        [o.IEnv.LIVE, ""],
                        [o.IEnv.STAGING, "staging."],
                        [o.IEnv.TEST_STABLE, "staging."],
                      ]).get(this._env)) && void 0 !== e
                      ? e
                      : "staging.",
                  n = "https://data-rep.livetech."
                    .concat(t, "shopee.")
                    .concat(this._domain, "/dataapi/dataweb/event/reportPB"),
                  s = i.endpointevent.EventList.encode(this.events).finish();
                return (
                  (this.events.events.length = 0),
                  r.default.post(n, s.slice(), {
                    headers: { "Content-Type": "application/octet-stream" },
                  })
                );
              }
            }),
            e
          );
        })();
      t.Report = s;
    },
    26439: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return s.label++, { value: i[1], done: !1 };
                        case 5:
                          s.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            s.label = i[1];
                            break;
                          }
                          if (6 === i[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = i);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(i);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      i = t.call(e, s);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSupportWebp =
          t.getSignature =
          t.retryAdapterEnhancer =
          t.isTimeout =
          t.defaultStrategy =
            void 0);
      var s = n(8322);
      t.defaultStrategy = {
        ver: 1,
        endpoint_cron: {
          pull_time: 0,
          interval: 36e5,
          ttl: 54e5,
          network_switch_delay: 5e3,
          max_retry_count: 5,
          fail_retry_period: 6e4,
        },
        md5s: {
          core_player: "b320601c364b4b5d7addeb2348991600",
          mms_image: "60b1315bb7352d7e5665b86bf417b8e3",
          mms_vod: "83906596171c59e082ac182309e9d1ad",
          rtc: "5bfdccefa64ad48fe7ec78944e71f7dd",
          livelog: "ba8b9f77aa4e32f23ef7e7e639c9100df91",
          upload: "fddc13b22e37a30c9147e0ab1dbe128b",
        },
        mms_image: {
          status: 0,
          data: {
            ver: 1,
            api_timeout: 4e3,
            configs: {
              100: {
                compress: { type: 0, scale: 1, quality: 100 },
                upload: {
                  backoff_time: 50,
                  concurrency: 3,
                  default_img_count: 3,
                  retry_count: 2,
                  slice: 5242880,
                },
                endpoint: {
                  disable: !1,
                  default_suffix: "",
                  domains: ["mms.img.susercontent.com"],
                  extend_suffix: "",
                },
              },
            },
          },
        },
        mms_vod: {
          status: 0,
          data: {
            bandwidth_threshold: [
              { max: 2999, max_bitrate: 55e4, min: 0 },
              { max: 4999, max_bitrate: 65e4, min: 3e3 },
              { max: 9999999, max_bitrate: 1e6, min: 5e3 },
            ],
            decode_method: 0,
            endpoint: "http://play-aka.vod.shopee.com",
            ver: 1,
            video_codec: "H264",
            video_codec_max_defn: "V720P",
          },
        },
        core_player: {
          status: 0,
          data: {
            H264_sdk_type: { 0: 0 },
            H265_sdk_type: { 0: 0 },
            bitrate_stats: { dot_interval: 2, report_interval: 30 },
            default_sdk_type: { 0: 0 },
            enable_rtl: !1,
            enable_view_hw: !1,
            hd_enable: { H264: 1, H265: 1, default: 1 },
            report_level: 3,
          },
        },
        rtc: { status: 0, data: { enable_rtl: !1 } },
        livelog: { status: 0, data: { log_enabled: !1 } },
        upload: {
          status: 0,
          data: {
            protocol: { shopeeuss: "http", wscloud: "http", awscloud: "http" },
          },
        },
      };
      t.isTimeout = function (e) {
        return e.message.includes("timeout") || "ECONNABORTED" === e.code;
      };
      t.retryAdapterEnhancer = function (e, t) {
        var n = t || {},
          s = n.times,
          a = void 0 === s ? 0 : s,
          c = n.delay,
          u = void 0 === c ? 0 : c;
        return function (t) {
          return o(void 0, void 0, void 0, function () {
            var n, s, c, l, d, p;
            return i(this, function (v) {
              return (
                (n = t.retryTimes),
                (s = void 0 === n ? a : n),
                (c = t.retryDelay),
                (l = void 0 === c ? u : c),
                (d = 0),
                (p = function () {
                  return o(void 0, void 0, void 0, function () {
                    var n, o, a;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            i.trys.push([0, 2, , 4]), (n = [{}]), [4, e(t)]
                          );
                        case 1:
                          return [
                            2,
                            r.apply(void 0, [
                              r.apply(void 0, n.concat([i.sent()])),
                              { retry_count: d },
                            ]),
                          ];
                        case 2:
                          return (
                            (o = i.sent()),
                            !s || d >= s
                              ? ((a = { err: o, retry_count: d }),
                                [2, Promise.reject(a)])
                              : (d++,
                                [
                                  4,
                                  new Promise(function (e) {
                                    setTimeout(e, l);
                                  }).then(p),
                                ])
                          );
                        case 3:
                          return [2, i.sent()];
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                [2, p()]
              );
            });
          });
        };
      };
      t.getSignature = function (e, t) {
        var n = Date.now().toString().substr(0, 10),
          r = (function (e) {
            e = e || 32;
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                n = "",
                r = 0;
              r < e;
              r++
            )
              n += t[Math.floor(Math.random() * t.length)];
            return n;
          })(6);
        return (
          r + "-" + s.hash(r + "@" + e + "@" + t + "@shopee@" + n) + "-" + n
        );
      };
      t.isSupportWebp = function () {
        try {
          return (
            0 ===
            document
              .createElement("canvas")
              .toDataURL("image/webp")
              .indexOf("data:image/webp")
          );
        } catch (e) {
          return !1;
        }
      };
    },
    1746: function (e, t, n) {
      var r;
      n.r(t),
        n.d(t, {
          NIL: function () {
            return z;
          },
          parse: function () {
            return h;
          },
          stringify: function () {
            return p;
          },
          v1: function () {
            return y;
          },
          v3: function () {
            return k;
          },
          v4: function () {
            return T;
          },
          v5: function () {
            return C;
          },
          validate: function () {
            return a;
          },
          version: function () {
            return V;
          },
        });
      var o = new Uint8Array(16);
      function i() {
        if (
          !r &&
          !(r =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return r(o);
      }
      var s =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (
        var a = function (e) {
            return "string" == typeof e && s.test(e);
          },
          c = [],
          u = 0;
        u < 256;
        ++u
      )
        c.push((u + 256).toString(16).substr(1));
      var l,
        d,
        p = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              c[e[t + 0]] +
              c[e[t + 1]] +
              c[e[t + 2]] +
              c[e[t + 3]] +
              "-" +
              c[e[t + 4]] +
              c[e[t + 5]] +
              "-" +
              c[e[t + 6]] +
              c[e[t + 7]] +
              "-" +
              c[e[t + 8]] +
              c[e[t + 9]] +
              "-" +
              c[e[t + 10]] +
              c[e[t + 11]] +
              c[e[t + 12]] +
              c[e[t + 13]] +
              c[e[t + 14]] +
              c[e[t + 15]]
            ).toLowerCase();
          if (!a(n)) throw TypeError("Stringified UUID is invalid");
          return n;
        },
        v = 0,
        f = 0;
      var y = function (e, t, n) {
        var r = (t && n) || 0,
          o = t || new Array(16),
          s = (e = e || {}).node || l,
          a = void 0 !== e.clockseq ? e.clockseq : d;
        if (null == s || null == a) {
          var c = e.random || (e.rng || i)();
          null == s && (s = l = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
            null == a && (a = d = 16383 & ((c[6] << 8) | c[7]));
        }
        var u = void 0 !== e.msecs ? e.msecs : Date.now(),
          y = void 0 !== e.nsecs ? e.nsecs : f + 1,
          h = u - v + (y - f) / 1e4;
        if (
          (h < 0 && void 0 === e.clockseq && (a = (a + 1) & 16383),
          (h < 0 || u > v) && void 0 === e.nsecs && (y = 0),
          y >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (v = u), (f = y), (d = a);
        var g = (1e4 * (268435455 & (u += 122192928e5)) + y) % 4294967296;
        (o[r++] = (g >>> 24) & 255),
          (o[r++] = (g >>> 16) & 255),
          (o[r++] = (g >>> 8) & 255),
          (o[r++] = 255 & g);
        var m = ((u / 4294967296) * 1e4) & 268435455;
        (o[r++] = (m >>> 8) & 255),
          (o[r++] = 255 & m),
          (o[r++] = ((m >>> 24) & 15) | 16),
          (o[r++] = (m >>> 16) & 255),
          (o[r++] = (a >>> 8) | 128),
          (o[r++] = 255 & a);
        for (var b = 0; b < 6; ++b) o[r + b] = s[b];
        return t || p(o);
      };
      var h = function (e) {
        if (!a(e)) throw TypeError("Invalid UUID");
        var t,
          n = new Uint8Array(16);
        return (
          (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
          (n[1] = (t >>> 16) & 255),
          (n[2] = (t >>> 8) & 255),
          (n[3] = 255 & t),
          (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
          (n[5] = 255 & t),
          (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
          (n[7] = 255 & t),
          (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
          (n[9] = 255 & t),
          (n[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
          (n[11] = (t / 4294967296) & 255),
          (n[12] = (t >>> 24) & 255),
          (n[13] = (t >>> 16) & 255),
          (n[14] = (t >>> 8) & 255),
          (n[15] = 255 & t),
          n
        );
      };
      function g(e, t, n) {
        function r(e, r, o, i) {
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var t = [], n = 0; n < e.length; ++n)
                  t.push(e.charCodeAt(n));
                return t;
              })(e)),
            "string" == typeof r && (r = h(r)),
            16 !== r.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          var s = new Uint8Array(16 + e.length);
          if (
            (s.set(r),
            s.set(e, r.length),
            ((s = n(s))[6] = (15 & s[6]) | t),
            (s[8] = (63 & s[8]) | 128),
            o)
          ) {
            i = i || 0;
            for (var a = 0; a < 16; ++a) o[i + a] = s[a];
            return o;
          }
          return p(s);
        }
        try {
          r.name = e;
        } catch (e) {}
        return (
          (r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          r
        );
      }
      function m(e) {
        return 14 + (((e + 64) >>> 9) << 4) + 1;
      }
      function b(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
      }
      function I(e, t, n, r, o, i) {
        return b(((s = b(b(t, e), b(r, i))) << (a = o)) | (s >>> (32 - a)), n);
        var s, a;
      }
      function w(e, t, n, r, o, i, s) {
        return I((t & n) | (~t & r), e, t, o, i, s);
      }
      function O(e, t, n, r, o, i, s) {
        return I((t & r) | (n & ~r), e, t, o, i, s);
      }
      function P(e, t, n, r, o, i, s) {
        return I(t ^ n ^ r, e, t, o, i, s);
      }
      function S(e, t, n, r, o, i, s) {
        return I(n ^ (t | ~r), e, t, o, i, s);
      }
      var _ = function (e) {
          if ("string" == typeof e) {
            var t = unescape(encodeURIComponent(e));
            e = new Uint8Array(t.length);
            for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
          }
          return (function (e) {
            for (
              var t = [], n = 32 * e.length, r = "0123456789abcdef", o = 0;
              o < n;
              o += 8
            ) {
              var i = (e[o >> 5] >>> o % 32) & 255,
                s = parseInt(r.charAt((i >>> 4) & 15) + r.charAt(15 & i), 16);
              t.push(s);
            }
            return t;
          })(
            (function (e, t) {
              (e[t >> 5] |= 128 << t % 32), (e[m(t) - 1] = t);
              for (
                var n = 1732584193,
                  r = -271733879,
                  o = -1732584194,
                  i = 271733878,
                  s = 0;
                s < e.length;
                s += 16
              ) {
                var a = n,
                  c = r,
                  u = o,
                  l = i;
                (n = w(n, r, o, i, e[s], 7, -680876936)),
                  (i = w(i, n, r, o, e[s + 1], 12, -389564586)),
                  (o = w(o, i, n, r, e[s + 2], 17, 606105819)),
                  (r = w(r, o, i, n, e[s + 3], 22, -1044525330)),
                  (n = w(n, r, o, i, e[s + 4], 7, -176418897)),
                  (i = w(i, n, r, o, e[s + 5], 12, 1200080426)),
                  (o = w(o, i, n, r, e[s + 6], 17, -1473231341)),
                  (r = w(r, o, i, n, e[s + 7], 22, -45705983)),
                  (n = w(n, r, o, i, e[s + 8], 7, 1770035416)),
                  (i = w(i, n, r, o, e[s + 9], 12, -1958414417)),
                  (o = w(o, i, n, r, e[s + 10], 17, -42063)),
                  (r = w(r, o, i, n, e[s + 11], 22, -1990404162)),
                  (n = w(n, r, o, i, e[s + 12], 7, 1804603682)),
                  (i = w(i, n, r, o, e[s + 13], 12, -40341101)),
                  (o = w(o, i, n, r, e[s + 14], 17, -1502002290)),
                  (n = O(
                    n,
                    (r = w(r, o, i, n, e[s + 15], 22, 1236535329)),
                    o,
                    i,
                    e[s + 1],
                    5,
                    -165796510
                  )),
                  (i = O(i, n, r, o, e[s + 6], 9, -1069501632)),
                  (o = O(o, i, n, r, e[s + 11], 14, 643717713)),
                  (r = O(r, o, i, n, e[s], 20, -373897302)),
                  (n = O(n, r, o, i, e[s + 5], 5, -701558691)),
                  (i = O(i, n, r, o, e[s + 10], 9, 38016083)),
                  (o = O(o, i, n, r, e[s + 15], 14, -660478335)),
                  (r = O(r, o, i, n, e[s + 4], 20, -405537848)),
                  (n = O(n, r, o, i, e[s + 9], 5, 568446438)),
                  (i = O(i, n, r, o, e[s + 14], 9, -1019803690)),
                  (o = O(o, i, n, r, e[s + 3], 14, -187363961)),
                  (r = O(r, o, i, n, e[s + 8], 20, 1163531501)),
                  (n = O(n, r, o, i, e[s + 13], 5, -1444681467)),
                  (i = O(i, n, r, o, e[s + 2], 9, -51403784)),
                  (o = O(o, i, n, r, e[s + 7], 14, 1735328473)),
                  (n = P(
                    n,
                    (r = O(r, o, i, n, e[s + 12], 20, -1926607734)),
                    o,
                    i,
                    e[s + 5],
                    4,
                    -378558
                  )),
                  (i = P(i, n, r, o, e[s + 8], 11, -2022574463)),
                  (o = P(o, i, n, r, e[s + 11], 16, 1839030562)),
                  (r = P(r, o, i, n, e[s + 14], 23, -35309556)),
                  (n = P(n, r, o, i, e[s + 1], 4, -1530992060)),
                  (i = P(i, n, r, o, e[s + 4], 11, 1272893353)),
                  (o = P(o, i, n, r, e[s + 7], 16, -155497632)),
                  (r = P(r, o, i, n, e[s + 10], 23, -1094730640)),
                  (n = P(n, r, o, i, e[s + 13], 4, 681279174)),
                  (i = P(i, n, r, o, e[s], 11, -358537222)),
                  (o = P(o, i, n, r, e[s + 3], 16, -722521979)),
                  (r = P(r, o, i, n, e[s + 6], 23, 76029189)),
                  (n = P(n, r, o, i, e[s + 9], 4, -640364487)),
                  (i = P(i, n, r, o, e[s + 12], 11, -421815835)),
                  (o = P(o, i, n, r, e[s + 15], 16, 530742520)),
                  (n = S(
                    n,
                    (r = P(r, o, i, n, e[s + 2], 23, -995338651)),
                    o,
                    i,
                    e[s],
                    6,
                    -198630844
                  )),
                  (i = S(i, n, r, o, e[s + 7], 10, 1126891415)),
                  (o = S(o, i, n, r, e[s + 14], 15, -1416354905)),
                  (r = S(r, o, i, n, e[s + 5], 21, -57434055)),
                  (n = S(n, r, o, i, e[s + 12], 6, 1700485571)),
                  (i = S(i, n, r, o, e[s + 3], 10, -1894986606)),
                  (o = S(o, i, n, r, e[s + 10], 15, -1051523)),
                  (r = S(r, o, i, n, e[s + 1], 21, -2054922799)),
                  (n = S(n, r, o, i, e[s + 8], 6, 1873313359)),
                  (i = S(i, n, r, o, e[s + 15], 10, -30611744)),
                  (o = S(o, i, n, r, e[s + 6], 15, -1560198380)),
                  (r = S(r, o, i, n, e[s + 13], 21, 1309151649)),
                  (n = S(n, r, o, i, e[s + 4], 6, -145523070)),
                  (i = S(i, n, r, o, e[s + 11], 10, -1120210379)),
                  (o = S(o, i, n, r, e[s + 2], 15, 718787259)),
                  (r = S(r, o, i, n, e[s + 9], 21, -343485551)),
                  (n = b(n, a)),
                  (r = b(r, c)),
                  (o = b(o, u)),
                  (i = b(i, l));
              }
              return [n, r, o, i];
            })(
              (function (e) {
                if (0 === e.length) return [];
                for (
                  var t = 8 * e.length, n = new Uint32Array(m(t)), r = 0;
                  r < t;
                  r += 8
                )
                  n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                return n;
              })(e),
              8 * e.length
            )
          );
        },
        k = g("v3", 48, _);
      var T = function (e, t, n) {
        var r = (e = e || {}).random || (e.rng || i)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (var o = 0; o < 16; ++o) t[n + o] = r[o];
          return t;
        }
        return p(r);
      };
      function E(e, t, n, r) {
        switch (e) {
          case 0:
            return (t & n) ^ (~t & r);
          case 1:
          case 3:
            return t ^ n ^ r;
          case 2:
            return (t & n) ^ (t & r) ^ (n & r);
        }
      }
      function x(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      var j = function (e) {
          var t = [1518500249, 1859775393, 2400959708, 3395469782],
            n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
            var r = unescape(encodeURIComponent(e));
            e = [];
            for (var o = 0; o < r.length; ++o) e.push(r.charCodeAt(o));
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          for (
            var i = e.length / 4 + 2,
              s = Math.ceil(i / 16),
              a = new Array(s),
              c = 0;
            c < s;
            ++c
          ) {
            for (var u = new Uint32Array(16), l = 0; l < 16; ++l)
              u[l] =
                (e[64 * c + 4 * l] << 24) |
                (e[64 * c + 4 * l + 1] << 16) |
                (e[64 * c + 4 * l + 2] << 8) |
                e[64 * c + 4 * l + 3];
            a[c] = u;
          }
          (a[s - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
            (a[s - 1][14] = Math.floor(a[s - 1][14])),
            (a[s - 1][15] = (8 * (e.length - 1)) & 4294967295);
          for (var d = 0; d < s; ++d) {
            for (var p = new Uint32Array(80), v = 0; v < 16; ++v)
              p[v] = a[d][v];
            for (var f = 16; f < 80; ++f)
              p[f] = x(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
            for (
              var y = n[0], h = n[1], g = n[2], m = n[3], b = n[4], I = 0;
              I < 80;
              ++I
            ) {
              var w = Math.floor(I / 20),
                O = (x(y, 5) + E(w, h, g, m) + b + t[w] + p[I]) >>> 0;
              (b = m), (m = g), (g = x(h, 30) >>> 0), (h = y), (y = O);
            }
            (n[0] = (n[0] + y) >>> 0),
              (n[1] = (n[1] + h) >>> 0),
              (n[2] = (n[2] + g) >>> 0),
              (n[3] = (n[3] + m) >>> 0),
              (n[4] = (n[4] + b) >>> 0);
          }
          return [
            (n[0] >> 24) & 255,
            (n[0] >> 16) & 255,
            (n[0] >> 8) & 255,
            255 & n[0],
            (n[1] >> 24) & 255,
            (n[1] >> 16) & 255,
            (n[1] >> 8) & 255,
            255 & n[1],
            (n[2] >> 24) & 255,
            (n[2] >> 16) & 255,
            (n[2] >> 8) & 255,
            255 & n[2],
            (n[3] >> 24) & 255,
            (n[3] >> 16) & 255,
            (n[3] >> 8) & 255,
            255 & n[3],
            (n[4] >> 24) & 255,
            (n[4] >> 16) & 255,
            (n[4] >> 8) & 255,
            255 & n[4],
          ];
        },
        C = g("v5", 80, j),
        z = "00000000-0000-0000-0000-000000000000";
      var V = function (e) {
        if (!a(e)) throw TypeError("Invalid UUID");
        return parseInt(e.substr(14, 1), 16);
      };
    },
    14516: function (e) {
      e.exports = { version: "2.3.8" };
    },
    88623: function (e) {
      e.exports = { version: "2.4.0" };
    },
  },
]);
