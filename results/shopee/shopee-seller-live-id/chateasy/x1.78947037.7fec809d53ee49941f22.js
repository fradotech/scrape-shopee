"use strict";
(self.miniJsonp = self.miniJsonp || []).push([
  [6308],
  {
    86576: function (e, t, n) {
      var r,
        i,
        o,
        s = n(62100),
        a = s.Reader,
        c = s.Writer,
        u = s.util,
        l = s.roots.default || (s.roots.default = {});
      (l.ussevent =
        (((o = {}).EventID =
          ((r = {}),
          ((i = Object.create(r))[
            (r[30001] = "MMSInitUploadSDKEvent")
          ] = 30001),
          (i[(r[30002] = "MMSGetTokenEvent")] = 30002),
          (i[(r[30003] = "MMSPreUploadEvent")] = 30003),
          (i[(r[30004] = "MMSFileTransferEvent")] = 30004),
          (i[(r[30005] = "MMSReportUploadEvent")] = 30005),
          (i[(r[80001] = "MMSImgGetStrategyEvent")] = 80001),
          (i[(r[80002] = "MMSImgCompressEvent")] = 80002),
          (i[(r[80003] = "MMSImgPreuploadEvent")] = 80003),
          (i[(r[80004] = "MMSImgFileTransferEvent")] = 80004),
          (i[(r[80005] = "MMSImgNotifyEvent")] = 80005),
          (i[(r[80006] = "MMSGetEndpointStrategyEvent")] = 80006),
          i)),
        (o.EventList = (function () {
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
                  l.ussevent.Event.encode(
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
                  r = new l.ussevent.EventList();
                e.pos < n;

              ) {
                var i = e.uint32();
                i >>> 3 == 1
                  ? ((r.events && r.events.length) || (r.events = []),
                    r.events.push(l.ussevent.Event.decode(e, e.uint32())))
                  : e.skipType(7 & i);
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
                  var n = l.ussevent.Event.verify(e.events[t]);
                  if (n) return "events." + n;
                }
              }
              return null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.ussevent.EventList) return e;
              var t = new l.ussevent.EventList();
              if (e.events) {
                if (!Array.isArray(e.events))
                  throw TypeError(".ussevent.EventList.events: array expected");
                t.events = [];
                for (var n = 0; n < e.events.length; ++n) {
                  if ("object" != typeof e.events[n])
                    throw TypeError(
                      ".ussevent.EventList.events: object expected"
                    );
                  t.events[n] = l.ussevent.Event.fromObject(e.events[n]);
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
                  n.events[r] = l.ussevent.Event.toObject(e.events[r], t);
              }
              return n;
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (o.Event = (function () {
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
                  l.ussevent.Header.encode(
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
                  r = new l.ussevent.Event();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
                  case 1:
                    r.header = l.ussevent.Header.decode(e, e.uint32());
                    break;
                  case 2:
                    r.body = e.bytes();
                    break;
                  default:
                    e.skipType(7 & i);
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
                var t = l.ussevent.Header.verify(e.header);
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
              if (e instanceof l.ussevent.Event) return e;
              var t = new l.ussevent.Event();
              if (null != e.header) {
                if ("object" != typeof e.header)
                  throw TypeError(".ussevent.Event.header: object expected");
                t.header = l.ussevent.Header.fromObject(e.header);
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
                  (n.header = l.ussevent.Header.toObject(e.header, t)),
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
        (o.Header = (function () {
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
                  r = new l.ussevent.Header();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
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
                    e.skipType(7 & i);
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
              if (e instanceof l.ussevent.Header) return e;
              var t = new l.ussevent.Header();
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
        (o.FileTransferEvent = (function () {
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
                  r = new l.ussevent.FileTransferEvent();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
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
                    e.skipType(7 & i);
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
              if (e instanceof l.ussevent.FileTransferEvent) return e;
              var t = new l.ussevent.FileTransferEvent();
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
        (o.ImgGetStrategyEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.ver = 0),
            (e.prototype.cost = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                t.uint32(8).uint32(e.actionId),
                null != e.ver &&
                  Object.hasOwnProperty.call(e, "ver") &&
                  t.uint32(16).uint32(e.ver),
                null != e.cost &&
                  Object.hasOwnProperty.call(e, "cost") &&
                  t.uint32(24).uint32(e.cost),
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
                  r = new l.ussevent.ImgGetStrategyEvent();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
                  case 1:
                    r.actionId = e.uint32();
                    break;
                  case 2:
                    r.ver = e.uint32();
                    break;
                  case 3:
                    r.cost = e.uint32();
                    break;
                  default:
                    e.skipType(7 & i);
                }
              }
              if (!r.hasOwnProperty("actionId"))
                throw u.ProtocolError("missing required 'actionId'", {
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
                ? null != e.ver &&
                  e.hasOwnProperty("ver") &&
                  !u.isInteger(e.ver)
                  ? "ver: integer expected"
                  : null != e.cost &&
                    e.hasOwnProperty("cost") &&
                    !u.isInteger(e.cost)
                  ? "cost: integer expected"
                  : null
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.ussevent.ImgGetStrategyEvent) return e;
              var t = new l.ussevent.ImgGetStrategyEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.ver && (t.ver = e.ver >>> 0),
                null != e.cost && (t.cost = e.cost >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.actionId = 0), (n.ver = 0), (n.cost = 0)),
                null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  (n.actionId = e.actionId),
                null != e.ver && e.hasOwnProperty("ver") && (n.ver = e.ver),
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
        (o.ImgCompressEvent = (function () {
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
                  r = new l.ussevent.ImgCompressEvent();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
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
                    e.skipType(7 & i);
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
              if (e instanceof l.ussevent.ImgCompressEvent) return e;
              var t = new l.ussevent.ImgCompressEvent();
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
        (o.ImgPreuploadEvent = (function () {
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
                  r = new l.ussevent.ImgPreuploadEvent();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
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
                  default:
                    e.skipType(7 & i);
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
                  ? null
                  : "strategyVer: integer expected"
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.ussevent.ImgPreuploadEvent) return e;
              var t = new l.ussevent.ImgPreuploadEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.serviceLen && (t.serviceLen = e.serviceLen >>> 0),
                null != e.firstServiceId &&
                  (t.firstServiceId = String(e.firstServiceId)),
                null != e.imgIdsLen && (t.imgIdsLen = e.imgIdsLen >>> 0),
                null != e.cost && (t.cost = e.cost >>> 0),
                null != e.strategyVer && (t.strategyVer = e.strategyVer >>> 0),
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
                  (n.strategyVer = 0)),
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
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (o.ImgFileTransferEvent = (function () {
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
                  r = new l.ussevent.ImgFileTransferEvent();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
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
                  default:
                    e.skipType(7 & i);
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
                          ? null
                          : "strategyVer: integer expected"
                        : "code: integer expected"
                      : "imgid: string expected"
                    : "serviceIdx: integer expected"
                  : "serviceId: string expected"
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.ussevent.ImgFileTransferEvent) return e;
              var t = new l.ussevent.ImgFileTransferEvent();
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
                  (n.strategyVer = 0)),
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
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (o.ImgNotifyEvent = (function () {
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
                  r = new l.ussevent.ImgNotifyEvent();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
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
                  default:
                    e.skipType(7 & i);
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
                          ? null
                          : "strategyVer: integer expected"
                        : "cost: integer expected"
                      : "code: integer expected"
                    : "imgid: string expected"
                  : "serviceId: string expected"
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.ussevent.ImgNotifyEvent) return e;
              var t = new l.ussevent.ImgNotifyEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.serviceId && (t.serviceId = String(e.serviceId)),
                null != e.imgid && (t.imgid = String(e.imgid)),
                null != e.code && (t.code = e.code >>> 0),
                null != e.cost && (t.cost = e.cost >>> 0),
                null != e.strategyVer && (t.strategyVer = e.strategyVer >>> 0),
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
                  (n.strategyVer = 0)),
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
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            }),
            e
          );
        })()),
        (o.GetEndpointStrategyEvent = (function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.actionId = 0),
            (e.prototype.ver = 0),
            (e.prototype.cost = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = c.create()),
                t.uint32(8).uint32(e.actionId),
                null != e.ver &&
                  Object.hasOwnProperty.call(e, "ver") &&
                  t.uint32(16).uint32(e.ver),
                null != e.cost &&
                  Object.hasOwnProperty.call(e, "cost") &&
                  t.uint32(24).uint32(e.cost),
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
                  r = new l.ussevent.GetEndpointStrategyEvent();
                e.pos < n;

              ) {
                var i = e.uint32();
                switch (i >>> 3) {
                  case 1:
                    r.actionId = e.uint32();
                    break;
                  case 2:
                    r.ver = e.uint32();
                    break;
                  case 3:
                    r.cost = e.uint32();
                    break;
                  default:
                    e.skipType(7 & i);
                }
              }
              if (!r.hasOwnProperty("actionId"))
                throw u.ProtocolError("missing required 'actionId'", {
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
                ? null != e.ver &&
                  e.hasOwnProperty("ver") &&
                  !u.isInteger(e.ver)
                  ? "ver: integer expected"
                  : null != e.cost &&
                    e.hasOwnProperty("cost") &&
                    !u.isInteger(e.cost)
                  ? "cost: integer expected"
                  : null
                : "actionId: integer expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof l.ussevent.GetEndpointStrategyEvent) return e;
              var t = new l.ussevent.GetEndpointStrategyEvent();
              return (
                null != e.actionId && (t.actionId = e.actionId >>> 0),
                null != e.ver && (t.ver = e.ver >>> 0),
                null != e.cost && (t.cost = e.cost >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.actionId = 0), (n.ver = 0), (n.cost = 0)),
                null != e.actionId &&
                  e.hasOwnProperty("actionId") &&
                  (n.actionId = e.actionId),
                null != e.ver && e.hasOwnProperty("ver") && (n.ver = e.ver),
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
        o)),
        (e.exports = l);
    },
    27921: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
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
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ImgUploadUtil =
          t.defaultStrategy =
          t.decryptToken =
          t.getSignature =
            void 0);
      var s = n(9669),
        a = n(8322),
        c = n(81354),
        u = n(26286),
        l = n(59819),
        d = n(74710),
        p = n(32681),
        v = function (e) {
          return e.message.includes("timeout") || "ECONNABORTED" === e.code;
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
          r + "-" + a.hash(r + "@" + e + "@" + t + "@shopee@" + n) + "-" + n
        );
      };
      (t.decryptToken = function (e, t) {
        return c.AES.decrypt(e, c.enc.Utf8.parse(t), {
          iv: c.enc.Utf8.parse("1234567887654321"),
          mode: c.mode.CBC,
          padding: c.pad.Pkcs7,
        }).toString(c.enc.Utf8);
      }),
        (t.defaultStrategy = {
          ver: 1,
          interval: 72e5,
          ttl: 9e6,
          pull_time: 1635429656,
          api_timeout: 4e3,
          configs: {
            100: {
              compress: { compress_type: 0, quality: 100, scale: 1 },
              upload: {
                slice: 1024e3,
                retry_count: 2,
                backoff_time: 50,
                default_img_count: 3,
                concurrency: 3,
              },
              endpoint: {
                doamin_rules: {},
                default_suffix: "",
                extend_suffix: "",
              },
            },
          },
        });
      var f = (function () {
        function e(e) {
          this.options = e;
        }
        return (
          (e.prototype.preupload = function (e) {
            var n, s, a;
            return i(this, void 0, void 0, function () {
              var i, c, u, d, p, f;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    (i = this.genCommonBody()), (c = Date.now()), (o.label = 1);
                  case 1:
                    return (
                      o.trys.push([1, 3, , 4]),
                      [
                        4,
                        e.axiosInstance.post(
                          "https://api.mms."
                            .concat(l.IEnvDomain[this.options.env], ".shopee.")
                            .concat(
                              l.ICountryDomain[this.options.country],
                              "/uploadapi/api/v1/image/preupload"
                            ),
                          { _header: i, count: e.imgCount }
                        ),
                      ]
                    );
                  case 2:
                    return (
                      (u = o.sent()),
                      ((d = u.data.data).services = d.services.map(function (
                        e,
                        n
                      ) {
                        return r(r({}, e), {
                          token: (0, t.decryptToken)(e.token, i.request_id),
                          index: n,
                        });
                      })),
                      this.options.report.ImgPreuploadEvent({
                        actionId: 0,
                        serviceLen: d.services.length,
                        firstServiceId: d.services[0].service_id,
                        imgIdsLen: d.img_ids.length,
                        cost: Date.now() - c,
                        strategyVer: e.strategyVer,
                      }),
                      [2, d]
                    );
                  case 3:
                    throw (
                      ((p = o.sent()),
                      (f =
                        null !==
                          (a =
                            null ===
                              (s =
                                null ===
                                  (n = null == p ? void 0 : p.response) ||
                                void 0 === n
                                  ? void 0
                                  : n.data) || void 0 === s
                              ? void 0
                              : s.code) && void 0 !== a
                          ? a
                          : 500),
                      v(p) && (f = 3001),
                      this.options.report.ImgPreuploadEvent({
                        actionId: f,
                        cost: Date.now() - c,
                        strategyVer: e.strategyVer,
                      }),
                      p)
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getStrategy = function (e) {
            var n, r, a;
            return i(this, void 0, void 0, function () {
              var i, c, u, d, f, h, g, y;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (
                      ((i = s.default.create({
                        adapter: (0, p.retryAdapterEnhancer)(
                          s.default.defaults.adapter,
                          { times: 3, delay: 0 }
                        ),
                      })),
                      (c = JSON.parse(localStorage.getItem(e))) &&
                        !(Date.now() - 1e3 * c.pull_time > c.ttl))
                    )
                      return [3, 5];
                    (u = Date.now()), (o.label = 1);
                  case 1:
                    return (
                      o.trys.push([1, 3, , 4]),
                      [
                        4,
                        i.post(
                          "https://endpoint.mms."
                            .concat(l.IEnvDomain[this.options.env], ".shopee.")
                            .concat(
                              l.ICountryDomain[this.options.country],
                              "/api/v1/strategy/img"
                            ),
                          { _header: this.genCommonBody() }
                        ),
                      ]
                    );
                  case 2:
                    return (
                      (d = o.sent()),
                      (f = d.data.data),
                      localStorage.setItem(e, JSON.stringify(f)),
                      this.options.report
                        .ImgGetStrategyEvent({
                          actionId: 0,
                          ver: f.ver,
                          cost: Date.now() - u,
                        })
                        .report(),
                      [2, f]
                    );
                  case 3:
                    return (
                      (h = o.sent()),
                      ((g =
                        c ||
                        JSON.parse(
                          JSON.stringify(t.defaultStrategy)
                        )).pull_time = Math.trunc(Date.now() / 1e3)),
                      localStorage.setItem(e, JSON.stringify(g)),
                      (y =
                        null !==
                          (a =
                            null ===
                              (r =
                                null ===
                                  (n = null == h ? void 0 : h.response) ||
                                void 0 === n
                                  ? void 0
                                  : n.data) || void 0 === r
                              ? void 0
                              : r.code) && void 0 !== a
                          ? a
                          : 500),
                      v(h) && (y = 1001),
                      this.options.report
                        .ImgGetStrategyEvent({
                          actionId: y,
                          cost: Date.now() - u,
                        })
                        .report(),
                      [2, t.defaultStrategy]
                    );
                  case 4:
                    return [3, 6];
                  case 5:
                    return [2, c];
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.notify = function (e) {
            var t, n, r, s, a, c;
            return i(this, void 0, void 0, function () {
              var i, u, d, p;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    (i = Date.now()), (o.label = 1);
                  case 1:
                    return (
                      o.trys.push([1, 3, , 4]),
                      [
                        4,
                        e.axiosInstance.post(
                          "https://api.mms."
                            .concat(l.IEnvDomain[this.options.env], ".shopee.")
                            .concat(
                              l.ICountryDomain[this.options.country],
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
                      (u = o.sent().data.code),
                      this.options.report.ImgNotifyEvent({
                        actionId: 0,
                        serviceId: e.serviceId,
                        imgid: e.imgId,
                        code: u,
                        cost: Date.now() - i,
                        strategyVer: e.strategyVer,
                      }),
                      [3, 4]
                    );
                  case 3:
                    throw (
                      ((d = o.sent()),
                      (p =
                        null !==
                          (r =
                            null ===
                              (n =
                                null ===
                                  (t = null == d ? void 0 : d.response) ||
                                void 0 === t
                                  ? void 0
                                  : t.data) || void 0 === n
                              ? void 0
                              : n.code) && void 0 !== r
                          ? r
                          : 500),
                      v(d) && (p = 5001),
                      this.options.report.ImgNotifyEvent({
                        actionId: p,
                        serviceId: e.serviceId,
                        imgid: e.imgId,
                        code:
                          null !==
                            (c =
                              null ===
                                (a =
                                  null ===
                                    (s = null == d ? void 0 : d.response) ||
                                  void 0 === s
                                    ? void 0
                                    : s.data) || void 0 === a
                                ? void 0
                                : a.code) && void 0 !== c
                            ? c
                            : 500,
                        cost: Date.now() - i,
                        strategyVer: e.strategyVer,
                      }),
                      d)
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.genCommonBody = function () {
            var e = (0, u.v4)().replace(/-/g, "");
            return {
              version: 1,
              sign: (0, t.getSignature)(e, this.options.biz),
              biz: this.options.biz,
              app_version: "uss-" + d.version,
              sdk_version: "uss-" + d.version,
              os_type: 2,
              request_id: e,
              device_model: navigator.userAgent,
              client_region: this.options.country,
              uid: this.options.uid,
            };
          }),
          e
        );
      })();
      t.ImgUploadUtil = f;
    },
    40615: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
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
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.USS = void 0);
      var s = n(9669),
        a = n(32681),
        c = n(9930),
        u = n(59819),
        l = new Map([
          ["jpg", u.ContentTypeHeader.image],
          ["jpeg", u.ContentTypeHeader.image],
          ["png", u.ContentTypeHeader.pngImage],
        ]),
        d = (function () {
          function e(e) {
            (this.queueMap = new Map()),
              (this.bucket = e.bucket),
              (this.domain = e.domain),
              (this.concurrency = e.concurrency || 3),
              (this.$ = s.default.create({
                baseURL: "".concat(e.uploadDomain, "/api/v2"),
                headers: { Authorization: e.authorization },
              })),
              this.$.interceptors.response.use(
                function (e) {
                  return e;
                },
                function (e) {
                  var t, n, r, i, o, c, l;
                  return s.default.isCancel(e)
                    ? Promise.reject(
                        new a.Error({
                          code: u.ErrorCode.UserCancel,
                          message: "User cancel.",
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
                        new a.Error({
                          code:
                            null ===
                              (i =
                                null ===
                                  (r = null == e ? void 0 : e.response) ||
                                void 0 === r
                                  ? void 0
                                  : r.data) || void 0 === i
                              ? void 0
                              : i.code,
                          message:
                            null ===
                              (c =
                                null ===
                                  (o = null == e ? void 0 : e.response) ||
                                void 0 === o
                                  ? void 0
                                  : o.data) || void 0 === c
                              ? void 0
                              : c.message,
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
              ),
              (this.sliceSize = e.sliceSize);
          }
          return (
            (e.prototype.putObject = function (e) {
              var t = e.file,
                n = e.contentType,
                s = e.cancelToken,
                l = e.onUploadProgress,
                d = e.autoPicType;
              return i(this, void 0, void 0, function () {
                var e,
                  p,
                  v,
                  f,
                  h,
                  g,
                  y,
                  m,
                  I,
                  b,
                  w,
                  O,
                  P,
                  k = this;
                return o(this, function (S) {
                  switch (S.label) {
                    case 0:
                      return (
                        (e = d && t.name.split(".").pop()),
                        [4, (0, c.getEtag)(t)]
                      );
                    case 1:
                      if (
                        ((p = S.sent()),
                        (v = (0, a.createStorage)(p)),
                        (f = []),
                        (h = (v.get() || []).reduce(function (e, t) {
                          return e.concat(
                            e.find(function (e) {
                              return e.index === t.index;
                            })
                              ? []
                              : [t]
                          );
                        }, [])),
                        (g = t.size > this.sliceSize))
                      )
                        for (
                          y = function (e) {
                            var n = m.sliceSize * e,
                              r = n + m.sliceSize,
                              i = (r <= t.size ? r : t.size) - n,
                              o = t.slice(n, n + i);
                            !!h.find(function (t) {
                              return t.index === e;
                            }) || f.push({ index: e, slice: o, size: i });
                          },
                            m = this,
                            I = 0;
                          I < t.size / this.sliceSize;
                          I++
                        )
                          y(I);
                      else f.push({ index: 0, slice: t, size: t.size });
                      if (0 !== f.length) return [3, 5];
                      S.label = 2;
                    case 2:
                      return (
                        S.trys.push([2, , 4, 5]),
                        [4, this.mergeObject(p, h, n, s, e)]
                      );
                    case 3:
                      return (
                        (b = S.sent()),
                        [2, r(r({}, b), { url: this.getFileUrl(b.fid, n, e) })]
                      );
                    case 4:
                      return v.remove(), [7];
                    case 5:
                      return (
                        (w = f.map(function (t) {
                          var a = t.slice,
                            l = t.size,
                            d = t.index;
                          return function () {
                            return i(k, void 0, void 0, function () {
                              var t,
                                i = this;
                              return o(this, function (o) {
                                switch (o.label) {
                                  case 0:
                                    return [4, (0, c.getEtag)(a)];
                                  case 1:
                                    return (
                                      (t = o.sent()),
                                      [
                                        2,
                                        this.$.post(
                                          "/upload/".concat(this.bucket),
                                          a,
                                          {
                                            cancelToken: s.token,
                                            headers: {
                                              ETag: t,
                                              "Content-Type": g
                                                ? u.ContentTypeHeader.slice
                                                : this.getContentTypeHeader(
                                                    n,
                                                    e
                                                  ),
                                            },
                                          }
                                        ).then(function (t) {
                                          var o = t.data.data;
                                          return {
                                            data: r(r({}, o), {
                                              url: i.getFileUrl(o.fid, n, e),
                                            }),
                                            size: l,
                                            index: d,
                                          };
                                        }),
                                      ]
                                    );
                                }
                              });
                            });
                          };
                        })),
                        (O = new a.Queue(w, { concurrency: this.concurrency })),
                        (P = this.queueMap.get(s) || new Set()),
                        this.queueMap.set(s, P.add(O)),
                        [
                          2,
                          new Promise(function (a, c) {
                            var u = 0;
                            O.setTaskFullfilledHandler(function (d) {
                              var f = d.data,
                                g = d.size,
                                y = d.index;
                              return i(k, void 0, void 0, function () {
                                var i, d, m;
                                return o(this, function (o) {
                                  switch (o.label) {
                                    case 0:
                                      if (
                                        (h.find(function (e) {
                                          return e.index === y;
                                        }) ||
                                          h.push({
                                            index: y,
                                            size: g,
                                            fid: f.fid,
                                          }),
                                        (i = h.reduce(function (e, t) {
                                          return e + t.size;
                                        }, 0)),
                                        null == l ||
                                          l({
                                            total: t.size,
                                            loaded: i,
                                            percent: parseFloat(
                                              (i / t.size).toFixed(2)
                                            ),
                                          }),
                                        1 === w.length)
                                      )
                                        return (
                                          a(
                                            r(r({}, f), {
                                              url: this.getFileUrl(f.fid, n, e),
                                            })
                                          ),
                                          [2]
                                        );
                                      if ((v.set(h), ++u !== w.length))
                                        return [3, 5];
                                      o.label = 1;
                                    case 1:
                                      return (
                                        o.trys.push([1, 3, 4, 5]),
                                        [4, this.mergeObject(p, h, n, s, e)]
                                      );
                                    case 2:
                                      return (
                                        (d = o.sent()),
                                        a(
                                          r(r({}, d), {
                                            url: this.getFileUrl(d.fid, n, e),
                                          })
                                        ),
                                        [3, 5]
                                      );
                                    case 3:
                                      return (m = o.sent()), c(m), [3, 5];
                                    case 4:
                                      return v.remove(), [7];
                                    case 5:
                                      return [2];
                                  }
                                });
                              });
                            }),
                              O.setAllTaskFullfilledHandler(function () {
                                var e = k.queueMap.get(s) || new Set();
                                e.delete(O), k.queueMap.set(s, e);
                              }),
                              O.setTaskRejectedHandler(function (e) {
                                v.remove(), k.cancel(s), c(e);
                              }),
                              O.start();
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.cancel = function (e) {
              var t = this.queueMap.get(e);
              null == t ||
                t.forEach(function (e) {
                  return e.cancel();
                }),
                e.cancel();
            }),
            (e.prototype.resume = function (e) {
              var t = this.queueMap.get(e);
              null == t ||
                t.forEach(function (e) {
                  return e.resume();
                });
            }),
            (e.prototype.getFileUrl = function (e, t, n) {
              var r;
              switch (t) {
                case u.ContentType.video:
                  r = u.FileExt.video;
                  break;
                case u.ContentType.audio:
                  r = u.FileExt.audio;
                  break;
                default:
                  r = l.has(n) ? n : u.FileExt.image;
              }
              return this.domain + "/" + this.bucket + "/" + e + "." + r;
            }),
            (e.prototype.getContentTypeHeader = function (e, t) {
              return t && l.has(t) ? l.get(t) : u.ContentTypeHeader[e];
            }),
            (e.prototype.mergeObject = function (e, t, n, r, s) {
              return i(this, void 0, void 0, function () {
                var i, a;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        this.$.post(
                          "/mergeFiles/".concat(this.bucket),
                          {
                            fids: t.map(function (e) {
                              return { index: e.index, fid: e.fid };
                            }),
                          },
                          {
                            headers: {
                              ETag: e,
                              "Content-Type": this.getContentTypeHeader(n, s),
                            },
                            cancelToken: r.token,
                          }
                        ),
                      ];
                    case 1:
                      return (
                        (i = o.sent()),
                        (a = i.data.data),
                        [
                          2,
                          {
                            url: this.getFileUrl(a.fid, n, s),
                            etag: a.etag,
                            fid: a.fid,
                          },
                        ]
                      );
                  }
                });
              });
            }),
            e
          );
        })();
      t.USS = d;
    },
    96400: function (e, t, n) {
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
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
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UssVodUploader = void 0);
      var o = n(9669),
        s = n(43340),
        a = n(59819),
        c = (function () {
          function e(e) {
            var t = e.mediaFile,
              n = e.coverFile,
              r = e.uss,
              i = e.cancelToken,
              c = e.mediaType,
              u = e.autoPicType,
              l = e.report,
              d = this;
            (this.eventMap = new Map()),
              (this.report = l),
              (this.cancel = function () {
                return r.cancel(i);
              }),
              (this.resume = function () {
                return r.resume(i);
              });
            var p = [
              Promise.resolve(null),
              Promise.resolve(null),
              Promise.resolve(null),
              Promise.resolve(null),
            ];
            t &&
              ((this.fsize = t.size),
              (p[0] = r
                .putObject({
                  file: t,
                  contentType:
                    c == a.MediaType.video
                      ? a.ContentType.video
                      : a.ContentType.audio,
                  cancelToken: i,
                  onUploadProgress: function (e) {
                    d.emit(a.UploaderEvents.mediaProgress, e);
                  },
                })
                .then(function (e) {
                  var t = d.getNormalizeResponse(e);
                  return d.emit(a.UploaderEvents.mediaUpload, t), t;
                })
                .catch(function (e) {
                  var t,
                    n,
                    r,
                    i,
                    s,
                    c,
                    u = a.ErrorCode.PublishResultVideoFailed;
                  throw (
                    (o.default.isCancel((null == e ? void 0 : e.error) || e) &&
                      (u = a.ErrorCode.UserCancel),
                    d.report
                      .FileTransferEvent({
                        actionId: u,
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
                        sdkCode:
                          null !==
                            (c =
                              null ===
                                (s =
                                  null ===
                                    (i = null == e ? void 0 : e.response) ||
                                  void 0 === i
                                    ? void 0
                                    : i.data) || void 0 === s
                                ? void 0
                                : s.code) && void 0 !== c
                            ? c
                            : 0,
                      })
                      .report(),
                    d.cancel(),
                    e)
                  );
                })),
              (p[2] = (0, s.getFileMd5)(t))),
              n &&
                (t || (this.fsize = n.size),
                (p[1] = r
                  .putObject({
                    file: n,
                    contentType: a.ContentType.image,
                    cancelToken: i,
                    onUploadProgress: function (e) {
                      d.emit(a.UploaderEvents.coverProgress, e);
                    },
                    autoPicType: u,
                  })
                  .then(function (e) {
                    var t = d.getNormalizeResponse(e);
                    return d.emit(a.UploaderEvents.coverUpload, t), t;
                  })
                  .catch(function (e) {
                    var t,
                      n,
                      r,
                      i,
                      s,
                      c,
                      u = a.ErrorCode.PublishResultCoverFailed;
                    throw (
                      (o.default.isCancel(
                        (null == e ? void 0 : e.error) || e
                      ) && (u = a.ErrorCode.UserCancel),
                      d.report
                        .FileTransferEvent({
                          actionId: u,
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
                          sdkCode:
                            null !==
                              (c =
                                null ===
                                  (s =
                                    null ===
                                      (i = null == e ? void 0 : e.response) ||
                                    void 0 === i
                                      ? void 0
                                      : i.data) || void 0 === s
                                  ? void 0
                                  : s.code) && void 0 !== c
                              ? c
                              : 0,
                        })
                        .report(),
                      d.cancel(),
                      e)
                    );
                  })),
                (p[3] = (0, s.getFileMd5)(n))),
              (this.donePromise = Promise.all(p));
          }
          return (
            (e.prototype.done = function () {
              return r(this, void 0, void 0, function () {
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
            (e.prototype.on = function (e, t) {
              var n = this.eventMap.get(e) || new Set();
              n.add(t), this.eventMap.set(e, n);
            }),
            (e.prototype.off = function (e, t) {
              var n = this.eventMap.get(e);
              n && (n.delete(t), 0 === n.size && this.eventMap.delete(e));
            }),
            (e.prototype.getNormalizeResponse = function (e) {
              return { url: e.url, etag: e.etag, extendId: e.fid };
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
      t.UssVodUploader = c;
    },
    50425: function (e, t, n) {
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
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
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UssImgUploader = t.UssImg = void 0);
      var s = n(32681),
        a = n(9669),
        c = n(27921),
        u = n(74710),
        l = n(29444),
        d = n(9930),
        p = n(59819),
        v = (function () {
          function e(e) {
            (this.option = e),
              (this.report = new l.Report({
                country: this.option.country,
                biz: this.option.biz,
                env: this.option.env,
                sdkVersion: "uss-" + u.version,
                uid: e.uid,
                reportNoLimit: !0,
              })),
              (this.imgUploadUtil = new c.ImgUploadUtil({
                report: this.report,
                biz: this.option.biz,
                env: this.option.env,
                country: this.option.country,
                uid: e.uid,
              }));
          }
          return (
            (e.prototype.upload = function (e) {
              return i(this, void 0, void 0, function () {
                var t;
                return o(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return !e.length || e.length > 9
                        ? [
                            2,
                            Promise.reject(
                              new Error("image count too many or too little")
                            ),
                          ]
                        : [
                            4,
                            this.imgUploadUtil.getStrategy(
                              "uss_image_strategy"
                            ),
                          ];
                    case 1:
                      return (
                        (t = n.sent()),
                        [
                          2,
                          new f({
                            imgFiles: e,
                            strategy: t,
                            report: this.report,
                            imgUploadUtil: this.imgUploadUtil,
                            biz: this.option.biz,
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            e
          );
        })();
      t.UssImg = v;
      var f = (function () {
        function e(e) {
          (this.options = e),
            (this.curImgIdx = 0),
            (this.canceled = !1),
            (this.curServiceId = "shopeeuss"),
            (this.eventMap = new Map()),
            (this.cancelToken = a.default.CancelToken.source()),
            (this.doneResult = []),
            (this.$chore = a.default.create({
              timeout: this.strategy.api_timeout,
              adapter: (0, s.retryAdapterEnhancer)(a.default.defaults.adapter, {
                times: this.strategy.retry_count,
                delay: this.strategy.backoff_time,
              }),
            })),
            (this.$upload = a.default.create({
              adapter: (0, s.retryAdapterEnhancer)(a.default.defaults.adapter, {
                times: this.strategy.retry_count,
                delay: this.strategy.backoff_time,
              }),
            }));
        }
        return (
          (e.prototype.done = function () {
            var e;
            return i(this, void 0, void 0, function () {
              var t,
                n,
                i,
                s,
                c,
                u,
                l,
                d = this;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 9, 10, 11]),
                      (t = this),
                      [
                        4,
                        this.options.imgUploadUtil.preupload({
                          axiosInstance: this.$chore,
                          imgCount:
                            this.options.imgFiles.length ||
                            this.strategy.default_img_count,
                          strategyVer: this.strategy.ver,
                        }),
                      ]
                    );
                  case 1:
                    (t.uploadMsg = o.sent()), (o.label = 2);
                  case 2:
                    if (
                      !(
                        this.curImgIdx < this.options.imgFiles.length &&
                        this.curImgIdx < this.imgIds.length
                      ) ||
                      this.canceled
                    )
                      return [3, 8];
                    (n = Date.now()),
                      (i = {
                        serviceId: this.curServiceId,
                        serviceIdx: this.curUploadMsg.index,
                        imgid: this.imgIds[this.curImgIdx],
                        strategyVer: this.strategy.ver,
                      }),
                      (o.label = 3);
                  case 3:
                    return (
                      o.trys.push([3, 6, , 7]),
                      [
                        4,
                        this.putObject({
                          file: this.options.imgFiles[this.curImgIdx],
                          onUploadProgress: function (e) {
                            d.emit(
                              p.UploaderEvents.imageProgress,
                              r(r({}, e), { index: d.curImgIdx })
                            );
                          },
                          cancelToken: this.cancelToken,
                        }),
                      ]
                    );
                  case 4:
                    return (
                      (s = o.sent()),
                      this.doneResult.push(s),
                      this.emit(p.UploaderEvents.imageUpload, s),
                      [
                        4,
                        this.options.imgUploadUtil.notify({
                          axiosInstance: this.$chore,
                          serviceId: this.curServiceId,
                          imgId: this.imgIds[this.curImgIdx],
                          url: s.url,
                          fsize: this.options.imgFiles[this.curImgIdx].size,
                          finishTime: Math.trunc(Date.now() / 1e3),
                          token: this.curUploadMsg.token,
                          strategyVer: this.strategy.ver,
                        }),
                      ]
                    );
                  case 5:
                    return (
                      o.sent(),
                      this.options.report.ImgFileTransferEvent(
                        r(r({}, i), {
                          actionId: 0,
                          code: 0,
                          extendId: this.imgIds[this.curImgIdx],
                          fsize: this.options.imgFiles[this.curImgIdx].size,
                          cost: Date.now() - n,
                        })
                      ),
                      this.curImgIdx++,
                      [3, 7]
                    );
                  case 6:
                    throw (
                      ((c = o.sent()),
                      (u = 4001),
                      a.default.isCancel(c) && (u = 4003),
                      this.options.report.ImgFileTransferEvent(
                        r(r({}, i), {
                          actionId: u,
                          code:
                            (null === (e = null == c ? void 0 : c.response) ||
                            void 0 === e
                              ? void 0
                              : e.data.code) || -1,
                          cost: Date.now() - n,
                        })
                      ),
                      c)
                    );
                  case 7:
                    return [3, 2];
                  case 8:
                    return [3, 11];
                  case 9:
                    throw ((l = o.sent()), this.cancel(), l);
                  case 10:
                    return this.options.report.report(), [7];
                  case 11:
                    return [2, this.doneResult];
                }
              });
            });
          }),
          (e.prototype.putObject = function (e) {
            var t = e.file,
              n = e.onUploadProgress,
              r = e.cancelToken;
            return i(this, void 0, void 0, function () {
              var e,
                a,
                c,
                u,
                l,
                v,
                f,
                h,
                g,
                y,
                m,
                I,
                b,
                w = this;
              return o(this, function (O) {
                switch (O.label) {
                  case 0:
                    return (
                      (a = []),
                      (c = []),
                      (u = t.size > this.strategy.slice)
                        ? [3, 2]
                        : [4, (0, d.getEtag)(t)]
                    );
                  case 1:
                    (e = O.sent()), (O.label = 2);
                  case 2:
                    (l = 0), (O.label = 3);
                  case 3:
                    return l < t.size / this.strategy.slice
                      ? ((v = this.strategy.slice * l),
                        (f = v + this.strategy.slice),
                        (h = (f <= t.size ? f : t.size) - v),
                        (g = t.slice(v, v + h)),
                        (m = (y = a).push),
                        [4, (0, d.getEtag)(g)])
                      : [3, 6];
                  case 4:
                    m.apply(y, [O.sent()]),
                      c.push({ index: l, slice: g, size: h }),
                      (O.label = 5);
                  case 5:
                    return l++, [3, 3];
                  case 6:
                    return (
                      (I = c.map(function (t) {
                        var n = t.slice,
                          s = t.size,
                          c = t.index;
                        return function () {
                          return i(w, void 0, void 0, function () {
                            var t;
                            return o(this, function (i) {
                              return (
                                (t = {
                                  Authorization: this.curUploadMsg.token,
                                  Etag: u ? a[c] : e,
                                  "X-Request-Id": u
                                    ? ""
                                        .concat(
                                          this.imgIds[this.curImgIdx],
                                          "-"
                                        )
                                        .concat(c + 1)
                                    : "".concat(
                                        this.imgIds[this.curImgIdx],
                                        "-0"
                                      ),
                                  "Content-Type": u
                                    ? p.ContentTypeHeader.slice
                                    : p.ContentTypeHeader.image,
                                }),
                                u &&
                                  Object.assign(t, { "X-Slice-Index": c + 1 }),
                                [
                                  2,
                                  this.$upload
                                    .post(
                                      ""
                                        .concat(
                                          this.curUploadMsg.upload_domain,
                                          "/api/v3/"
                                        )
                                        .concat(this.curUploadMsg.bucket, "/")
                                        .concat(this.imgIds[this.curImgIdx]),
                                      n,
                                      { cancelToken: r.token, headers: t }
                                    )
                                    .then(function () {
                                      return { size: s, index: c };
                                    }),
                                ]
                              );
                            });
                          });
                        };
                      })),
                      (b = new s.Queue(I, {
                        concurrency: this.strategy.concurrency,
                      })),
                      [
                        2,
                        new Promise(function (s, c) {
                          var u = 0;
                          b.setTaskFullfilledHandler(function (l) {
                            var d = l.size,
                              p = l.index;
                            return i(w, void 0, void 0, function () {
                              var i, l, v;
                              return o(this, function (o) {
                                switch (o.label) {
                                  case 0:
                                    if (
                                      ((i = p * this.strategy.slice + d),
                                      null == n ||
                                        n({
                                          total: t.size,
                                          loaded: i,
                                          percent: parseFloat(
                                            (i / t.size).toFixed(2)
                                          ),
                                        }),
                                      1 === I.length)
                                    )
                                      return (
                                        s({
                                          index: this.curImgIdx,
                                          etag: e,
                                          url: this.getFileUrl(),
                                          img_id: this.imgIds[this.curImgIdx],
                                        }),
                                        [2]
                                      );
                                    if (++u !== I.length) return [3, 4];
                                    o.label = 1;
                                  case 1:
                                    return (
                                      o.trys.push([1, 3, , 4]),
                                      [4, this.mergeObject(a, r)]
                                    );
                                  case 2:
                                    return (l = o.sent()), s(l), [3, 4];
                                  case 3:
                                    return (v = o.sent()), c(v), [3, 4];
                                  case 4:
                                    return [2];
                                }
                              });
                            });
                          }),
                            b.setAllTaskFullfilledHandler(function () {}),
                            b.setTaskRejectedHandler(function (e) {
                              w.cancel(), c(e);
                            }),
                            b.start();
                        }),
                      ]
                    );
                }
              });
            });
          }),
          (e.prototype.mergeObject = function (e, t) {
            return i(this, void 0, void 0, function () {
              var n, r, i, s, a, c, u;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (n = {
                        merge_etag: e.map(function (e, t) {
                          return { index: t + 1, etag: e };
                        }),
                      }),
                      (s = (i = this.$upload).post),
                      (a = [
                        ""
                          .concat(
                            this.curUploadMsg.upload_domain,
                            "/api/v3/merge/"
                          )
                          .concat(this.curUploadMsg.bucket, "/")
                          .concat(this.imgIds[this.curImgIdx]),
                        n,
                      ]),
                      (c = {}),
                      (u = {
                        "X-Request-Id": this.imgIds[this.curImgIdx] + "-merge",
                        "Content-Type": p.ContentTypeHeader.image,
                        Authorization: this.curUploadMsg.token,
                        "X-Merge-Total": e.length,
                      }),
                      [4, (0, d.getEtag)(new Blob([JSON.stringify(n)]))]
                    );
                  case 1:
                    return [
                      4,
                      s.apply(
                        i,
                        a.concat([
                          ((c.headers = ((u.Etag = o.sent()), u)),
                          (c.cancelToken = t.token),
                          c),
                        ])
                      ),
                    ];
                  case 2:
                    return (
                      (r = o.sent().data.data),
                      [
                        2,
                        {
                          index: this.curImgIdx,
                          url: this.getFileUrl(),
                          etag: r.etag,
                          img_id: this.imgIds[this.curImgIdx],
                        },
                      ]
                    );
                }
              });
            });
          }),
          (e.prototype.getFileUrl = function () {
            return (
              this.curUploadMsg.play_domain + "/" + this.imgIds[this.curImgIdx]
            );
          }),
          (e.prototype.cancel = function () {
            this.cancelToken.cancel(), (this.canceled = !0);
          }),
          Object.defineProperty(e.prototype, "strategy", {
            get: function () {
              return r(
                {
                  ver: this.options.strategy.ver,
                  api_timeout: this.options.strategy.api_timeout,
                },
                (
                  this.options.strategy.configs[this.options.biz] ||
                  this.options.strategy.configs[100]
                ).upload
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "curUploadMsg", {
            get: function () {
              var e = this;
              return this.uploadMsg.services.filter(function (t) {
                return t.service_id === e.curServiceId;
              })[0];
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "imgIds", {
            get: function () {
              return this.uploadMsg.img_ids;
            },
            enumerable: !1,
            configurable: !0,
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
      t.UssImgUploader = f;
    },
    98175: function (e, t, n) {
      var r =
        (this && this.__assign) ||
        function () {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            r.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UssVod = void 0);
      var i = n(9669),
        o = n(59819),
        s = n(96400),
        a = n(40615),
        c = n(32681),
        u = n(74710),
        l = n(29444),
        d = (function () {
          function e(t) {
            (this.cancelToken = i.default.CancelToken.source()),
              (this.uss = new a.USS(r(r({}, t), { sliceSize: t.sliceSize }))),
              (this.reportOption = {
                country: t.country,
                biz: t.biz,
                env: t.env,
                vid: t.vid,
                sdkVersion: "uss-" + e.version,
                serviceId: "shopeeuss",
                serviceIndex: t.serviceIndex,
              });
          }
          return (
            (e.prototype.upload = function (e) {
              if (e.coverFile && !(0, c.isImage)(e.coverFile))
                throw new c.Error({
                  code: o.ErrorCode.PublishResultCoverInvalid,
                  message: "Publish result cover invalid.",
                });
              return new s.UssVodUploader(
                r(r({}, e), {
                  cancelToken: i.default.CancelToken.source(),
                  uss: this.uss,
                  report: new l.Report(this.reportOption),
                })
              );
            }),
            (e.version = u.version),
            e
          );
        })();
      t.UssVod = d;
    },
    9930: function (e, t, n) {
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
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
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEtag = void 0);
      var o = n(93810),
        s = n(59819),
        a = n(32681);
      function c(e) {
        var t = new FileReader();
        return (
          t.readAsArrayBuffer(e),
          new Promise(function (e, n) {
            (t.onload = function (t) {
              e(t.target.result);
            }),
              (t.onerror = n);
          })
        );
      }
      t.getEtag = function (e) {
        return r(this, void 0, void 0, function () {
          function t(e) {
            for (var t = [], n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              t = t.concat(i);
            }
            return new Uint8Array(t);
          }
          function n() {
            if (!d.length) return "Fto5o-5ea0sNMlW_75VgGJCv2AcJ";
            var e = t(d);
            return (
              v > 1 ? ((p = 150), (e = u(e.buffer))) : (e = Array.apply([], e)),
              (function (e, t) {
                for (var n, r = 0, i = e.length, o = ""; r < i; )
                  (n = e.subarray(r, Math.min(r + 32768, i))),
                    (o += String.fromCharCode.apply(null, n)),
                    (r += 32768);
                return t
                  ? btoa(o).replace(/\//g, "_").replace(/\+/g, "-")
                  : btoa(o);
              })((e = t([[p], e])), !0)
            );
          }
          var r, u, l, d, p, v, f, h;
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  c(e).catch(function (e) {
                    throw new a.Error({
                      code: s.ErrorCode.CheckFileFail,
                      message: "Get file etag failed",
                      error: e,
                    });
                  }),
                ];
              case 1:
                for (
                  r = t.sent(),
                    u = o.digest,
                    l = 4194304,
                    d = [],
                    p = 22,
                    v = 0,
                    f = r.size || r.length || r.byteLength,
                    v = Math.ceil(f / l),
                    h = 0;
                  h < v;
                  h++
                )
                  d.push(u(r.slice(h * l, (h + 1) * l)));
                return [2, n()];
            }
          });
        });
      };
    },
    10898: function (e, t, n) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        i(n(59819), t),
        i(n(50425), t);
      var o = n(98175);
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return o.UssVod;
        },
      });
    },
    43340: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getFileMd5 = void 0);
      var r = n(8322),
        i = n(59819),
        o = n(32681);
      t.getFileMd5 = function (e) {
        var t = File.prototype.slice,
          n = 2097152,
          s = Math.ceil(e.size / n),
          a = 0,
          c = new r.ArrayBuffer(),
          u = new FileReader();
        return new Promise(function (r, l) {
          function d() {
            var r = a * n,
              i = r + n >= e.size ? e.size : r + n;
            u.readAsArrayBuffer(t.call(e, r, i));
          }
          (u.onload = function (e) {
            c.append(e.target.result), ++a < s ? d() : r(c.end());
          }),
            (u.onerror = function (e) {
              l(
                new o.Error({
                  code: i.ErrorCode.CheckFileFail,
                  message: "Get file etag failed",
                  error: e,
                })
              );
            }),
            d();
        });
      };
    },
    29444: function (e, t, n) {
      var r =
        (this && this.__assign) ||
        function () {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            r.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Report = void 0);
      var i = n(9669),
        o = n(59819),
        s = n(86576),
        a = (function () {
          function e(e) {
            (this.reportNoLimit = !1),
              (this.reported = !1),
              (this.events = new s.ussevent.EventList()),
              (this._country = e.country),
              (this._env = e.env),
              (this._biz = e.biz),
              (this._uid = e.uid),
              (this._sdkVersion = e.sdkVersion),
              (this._domain = o.ICountryDomain[e.country]),
              (this._serviceIndex = e.serviceIndex),
              (this._serviceId = e.serviceId),
              (this._vid = e.vid),
              (this.reportNoLimit = e.reportNoLimit);
          }
          return (
            (e.prototype.genHeader = function (e) {
              return s.ussevent.Header.create({
                id: e,
                biz: this._biz,
                uid: this._uid,
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
                i,
                o = r(r({}, e), {
                  serviceId:
                    null !== (t = this._serviceId) && void 0 !== t
                      ? t
                      : e.serviceId,
                  serviceIndex:
                    null !== (n = this._serviceIndex) && void 0 !== n
                      ? n
                      : e.serviceIndex,
                  vid: null !== (i = this._vid) && void 0 !== i ? i : e.vid,
                }),
                a = s.ussevent.FileTransferEvent.create(o);
              s.ussevent.FileTransferEvent.verify(a);
              var c = s.ussevent.Event.create({
                header: this.genHeader(s.ussevent.EventID.MMSFileTransferEvent),
                body: s.ussevent.FileTransferEvent.encode(a).finish(),
              });
              return this.events.events.push(c), this;
            }),
            (e.prototype.ImgGetStrategyEvent = function (e) {
              var t = s.ussevent.ImgGetStrategyEvent.create(e);
              s.ussevent.ImgGetStrategyEvent.verify(t);
              var n = s.ussevent.Event.create({
                header: this.genHeader(
                  s.ussevent.EventID.MMSImgGetStrategyEvent
                ),
                body: s.ussevent.ImgGetStrategyEvent.encode(t).finish(),
              });
              return this.events.events.push(n), this;
            }),
            (e.prototype.ImgPreuploadEvent = function (e) {
              var t = s.ussevent.ImgPreuploadEvent.create(e);
              s.ussevent.ImgPreuploadEvent.verify(t);
              var n = s.ussevent.Event.create({
                header: this.genHeader(s.ussevent.EventID.MMSImgPreuploadEvent),
                body: s.ussevent.ImgPreuploadEvent.encode(t).finish(),
              });
              return this.events.events.push(n), this;
            }),
            (e.prototype.ImgFileTransferEvent = function (e) {
              var t = s.ussevent.ImgFileTransferEvent.create(e);
              s.ussevent.ImgFileTransferEvent.verify(t);
              var n = s.ussevent.Event.create({
                header: this.genHeader(
                  s.ussevent.EventID.MMSImgFileTransferEvent
                ),
                body: s.ussevent.ImgFileTransferEvent.encode(t).finish(),
              });
              return this.events.events.push(n), this;
            }),
            (e.prototype.ImgNotifyEvent = function (e) {
              var t = s.ussevent.ImgNotifyEvent.create(e);
              s.ussevent.ImgNotifyEvent.verify(t);
              var n = s.ussevent.Event.create({
                header: this.genHeader(s.ussevent.EventID.MMSImgNotifyEvent),
                body: s.ussevent.ImgNotifyEvent.encode(t).finish(),
              });
              return this.events.events.push(n), this;
            }),
            (e.prototype.report = function () {
              if (!this.reported || this.reportNoLimit) {
                this.reported = !0;
                var e = new Map([
                    [o.IEnv.TEST, "test."],
                    [o.IEnv.UAT, "uat."],
                    [o.IEnv.LIVE, ""],
                    [o.IEnv.STAGING, "staging."],
                  ]).get(this._env),
                  t = "https://data-rep.livetech."
                    .concat(e, "shopee.")
                    .concat(this._domain, "/dataapi/dataweb/event/reportPB");
                s.ussevent.EventList.verify(this.events);
                var n = s.ussevent.EventList.encode(this.events).finish();
                return (
                  (this.events.events.length = 0),
                  i.default.post(t, n.slice(), {
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
    59819: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IEnvDomain =
          t.IEnv =
          t.ICountryDomain =
          t.ICountry =
          t.ErrorCode =
          t.ContentTypeHeader =
          t.FileExt =
          t.MediaType =
          t.ContentType =
          t.HttpCode =
          t.UploaderEvents =
            void 0),
        (function (e) {
          (e.mediaUpload = "media_upload"),
            (e.mediaProgress = "media_progress"),
            (e.coverUpload = "cover_upload"),
            (e.coverProgress = "cover_progress"),
            (e.imageProgress = "image_progress"),
            (e.imageUpload = "image_upload");
        })(t.UploaderEvents || (t.UploaderEvents = {})),
        (function (e) {
          (e[(e.ok = 200)] = "ok"),
            (e[(e.invalidParam = 400)] = "invalidParam"),
            (e[(e.invalidToken = 403)] = "invalidToken"),
            (e[(e.bucketUnExist = 404)] = "bucketUnExist"),
            (e[(e.sizeExceeded = 413)] = "sizeExceeded"),
            (e[(e.serverError = 500)] = "serverError");
        })(t.HttpCode || (t.HttpCode = {})),
        (function (e) {
          (e.video = "video"), (e.image = "image"), (e.audio = "audio");
        })(t.ContentType || (t.ContentType = {})),
        (function (e) {
          (e.video = "video"), (e.audio = "audio");
        })(t.MediaType || (t.MediaType = {})),
        (function (e) {
          (e.video = "mp4"), (e.image = "jpg"), (e.audio = "aac");
        })(t.FileExt || (t.FileExt = {})),
        (function (e) {
          (e.video = "video/mp4"),
            (e.image = "image/jpeg"),
            (e.audio = "audio/aac"),
            (e.slice = "application/octet-stream"),
            (e.pngImage = "image/png");
        })(t.ContentTypeHeader || (t.ContentTypeHeader = {})),
        (function (e) {
          (e[(e.Success = 0)] = "Success"),
            (e[(e.Unknown = -1)] = "Unknown"),
            (e[(e.PreparePublishFail = 1e3)] = "PreparePublishFail"),
            (e[(e.PublishResultRequestFailed = 1001)] =
              "PublishResultRequestFailed"),
            (e[(e.PublishResultResponseError = 1002)] =
              "PublishResultResponseError"),
            (e[(e.PublishResultVideoFailed = 1003)] =
              "PublishResultVideoFailed"),
            (e[(e.PublishResultCoverFailed = 1004)] =
              "PublishResultCoverFailed"),
            (e[(e.PublishResultVideoInvalid = 1007)] =
              "PublishResultVideoInvalid"),
            (e[(e.PublishResultCoverInvalid = 1008)] =
              "PublishResultCoverInvalid"),
            (e[(e.TokenInvalid = 1012)] = "TokenInvalid"),
            (e[(e.VideoPathIsNull = 1013)] = "VideoPathIsNull"),
            (e[(e.VideoNoExist = 1014)] = "VideoNoExist"),
            (e[(e.CoverNoExist = 1016)] = "CoverNoExist"),
            (e[(e.UserCancel = 1017)] = "UserCancel"),
            (e[(e.CheckFileFail = 1101)] = "CheckFileFail"),
            (e[(e.UssMergeFilesFail = 1102)] = "UssMergeFilesFail");
        })(t.ErrorCode || (t.ErrorCode = {})),
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
            (e.STAGING = "staging");
        })(t.IEnv || (t.IEnv = {})),
        (function (e) {
          (e.live = ""),
            (e.staging = "staging."),
            (e.uat = "uat."),
            (e.test = "test.");
        })(t.IEnvDomain || (t.IEnvDomain = {}));
    },
    32681: function (e, t) {
      var n =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
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
        r =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.retryAdapterEnhancer =
          t.Error =
          t.isAudio =
          t.isVideo =
          t.isImage =
          t.createStorage =
          t.Queue =
            void 0);
      var i = (function () {
        function e(e, t) {
          (this.index = -1),
            (this.running = 0),
            (this.canceled = !1),
            (this.tasks = e),
            (this.concurrency = t.concurrency);
        }
        return (
          (e.prototype.addTask = function (e) {
            this.tasks.push(e);
          }),
          (e.prototype.setTaskFullfilledHandler = function (e) {
            this.onTaskFullfilled = e;
          }),
          (e.prototype.setTaskRejectedHandler = function (e) {
            this.onTaskRejected = e;
          }),
          (e.prototype.setAllTaskFullfilledHandler = function (e) {
            this.onAllTaskFullfilled = e;
          }),
          (e.prototype.run = function () {
            var e = this;
            this.running < this.concurrency &&
              !this.canceled &&
              this.index < this.tasks.length - 1 &&
              (this.running++,
              this.tasks[++this.index]()
                .then(function (t) {
                  var n;
                  null === (n = e.onTaskFullfilled) ||
                    void 0 === n ||
                    n.call(e, t),
                    e.index === e.tasks.length - 1 && e.onAllTaskFullfilled();
                })
                .catch(function (t) {
                  var n;
                  null === (n = e.onTaskRejected) ||
                    void 0 === n ||
                    n.call(e, t);
                })
                .finally(function () {
                  e.running > 0 && e.running--, e.run();
                }),
              this.run());
          }),
          (e.prototype.start = function () {
            (this.index = -1), this.run();
          }),
          (e.prototype.cancel = function () {
            this.canceled = !0;
          }),
          (e.prototype.resume = function () {
            (this.canceled = !1), this.run();
          }),
          e
        );
      })();
      t.Queue = i;
      t.createStorage = function (e) {
        var t = "USS_VOD_".concat(e);
        return {
          set: function (e) {
            try {
              localStorage.setItem(t, JSON.stringify(e));
            } catch (e) {
              console.error(e);
            }
          },
          get: function () {
            try {
              return JSON.parse(localStorage.getItem(t));
            } catch (e) {
              return null;
            }
          },
          remove: function () {
            localStorage.removeItem(t);
          },
        };
      };
      t.isImage = function (e) {
        var t = e.name.split(".").pop();
        return /^(jpg|jpeg|png|gif|bmp|webp)$/i.test(t);
      };
      t.isVideo = function (e) {
        var t = e.name.split(".").pop();
        return /^(mp4|rmvb|mkv|flv|mpeg4|3gp|avi|mov|wmv|rm|mpg)$/i.test(t);
      };
      t.isAudio = function (e) {
        var t = e.name.split(".").pop();
        return /^(mp3|aac)$/i.test(t);
      };
      var o = function (e) {
        var t = e.code,
          n = void 0 === t ? -1 : t,
          r = e.message,
          i = e.error,
          o = void 0 === i ? null : i,
          s = e.httpCode,
          a = void 0 === s ? null : s;
        (this.code = n),
          (this.message = r),
          (this.error = o),
          (this.httpCode = a);
      };
      t.Error = o;
      t.retryAdapterEnhancer = function (e, t) {
        var i = t || {},
          o = i.times,
          s = void 0 === o ? 0 : o,
          a = i.delay,
          c = void 0 === a ? 0 : a;
        return function (t) {
          return n(void 0, void 0, void 0, function () {
            var i, o, a, u, l, d;
            return r(this, function (p) {
              return (
                (i = t.retryTimes),
                (o = void 0 === i ? s : i),
                (a = t.retryDelay),
                (u = void 0 === a ? c : a),
                (l = 1),
                (d = function () {
                  return n(void 0, void 0, void 0, function () {
                    var n;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return r.trys.push([0, 2, , 4]), [4, e(t)];
                        case 1:
                        case 3:
                          return [2, r.sent()];
                        case 2:
                          return (
                            (n = r.sent()),
                            !o || l >= o
                              ? [2, Promise.reject(n)]
                              : (l++,
                                [
                                  4,
                                  new Promise(function (e) {
                                    setTimeout(e, u);
                                  }).then(d),
                                ])
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                [2, d()]
              );
            });
          });
        };
      };
    },
    26286: function (e, t, n) {
      var r;
      n.r(t),
        n.d(t, {
          NIL: function () {
            return C;
          },
          parse: function () {
            return g;
          },
          stringify: function () {
            return p;
          },
          v1: function () {
            return h;
          },
          v3: function () {
            return x;
          },
          v4: function () {
            return T;
          },
          v5: function () {
            return V;
          },
          validate: function () {
            return a;
          },
          version: function () {
            return _;
          },
        });
      var i = new Uint8Array(16);
      function o() {
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
        return r(i);
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
      var h = function (e, t, n) {
        var r = (t && n) || 0,
          i = t || new Array(16),
          s = (e = e || {}).node || l,
          a = void 0 !== e.clockseq ? e.clockseq : d;
        if (null == s || null == a) {
          var c = e.random || (e.rng || o)();
          null == s && (s = l = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
            null == a && (a = d = 16383 & ((c[6] << 8) | c[7]));
        }
        var u = void 0 !== e.msecs ? e.msecs : Date.now(),
          h = void 0 !== e.nsecs ? e.nsecs : f + 1,
          g = u - v + (h - f) / 1e4;
        if (
          (g < 0 && void 0 === e.clockseq && (a = (a + 1) & 16383),
          (g < 0 || u > v) && void 0 === e.nsecs && (h = 0),
          h >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (v = u), (f = h), (d = a);
        var y = (1e4 * (268435455 & (u += 122192928e5)) + h) % 4294967296;
        (i[r++] = (y >>> 24) & 255),
          (i[r++] = (y >>> 16) & 255),
          (i[r++] = (y >>> 8) & 255),
          (i[r++] = 255 & y);
        var m = ((u / 4294967296) * 1e4) & 268435455;
        (i[r++] = (m >>> 8) & 255),
          (i[r++] = 255 & m),
          (i[r++] = ((m >>> 24) & 15) | 16),
          (i[r++] = (m >>> 16) & 255),
          (i[r++] = (a >>> 8) | 128),
          (i[r++] = 255 & a);
        for (var I = 0; I < 6; ++I) i[r + I] = s[I];
        return t || p(i);
      };
      var g = function (e) {
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
      function y(e, t, n) {
        function r(e, r, i, o) {
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var t = [], n = 0; n < e.length; ++n)
                  t.push(e.charCodeAt(n));
                return t;
              })(e)),
            "string" == typeof r && (r = g(r)),
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
            i)
          ) {
            o = o || 0;
            for (var a = 0; a < 16; ++a) i[o + a] = s[a];
            return i;
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
      function I(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
      }
      function b(e, t, n, r, i, o) {
        return I(((s = I(I(t, e), I(r, o))) << (a = i)) | (s >>> (32 - a)), n);
        var s, a;
      }
      function w(e, t, n, r, i, o, s) {
        return b((t & n) | (~t & r), e, t, i, o, s);
      }
      function O(e, t, n, r, i, o, s) {
        return b((t & r) | (n & ~r), e, t, i, o, s);
      }
      function P(e, t, n, r, i, o, s) {
        return b(t ^ n ^ r, e, t, i, o, s);
      }
      function k(e, t, n, r, i, o, s) {
        return b(n ^ (t | ~r), e, t, i, o, s);
      }
      var S = function (e) {
          if ("string" == typeof e) {
            var t = unescape(encodeURIComponent(e));
            e = new Uint8Array(t.length);
            for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
          }
          return (function (e) {
            for (
              var t = [], n = 32 * e.length, r = "0123456789abcdef", i = 0;
              i < n;
              i += 8
            ) {
              var o = (e[i >> 5] >>> i % 32) & 255,
                s = parseInt(r.charAt((o >>> 4) & 15) + r.charAt(15 & o), 16);
              t.push(s);
            }
            return t;
          })(
            (function (e, t) {
              (e[t >> 5] |= 128 << t % 32), (e[m(t) - 1] = t);
              for (
                var n = 1732584193,
                  r = -271733879,
                  i = -1732584194,
                  o = 271733878,
                  s = 0;
                s < e.length;
                s += 16
              ) {
                var a = n,
                  c = r,
                  u = i,
                  l = o;
                (n = w(n, r, i, o, e[s], 7, -680876936)),
                  (o = w(o, n, r, i, e[s + 1], 12, -389564586)),
                  (i = w(i, o, n, r, e[s + 2], 17, 606105819)),
                  (r = w(r, i, o, n, e[s + 3], 22, -1044525330)),
                  (n = w(n, r, i, o, e[s + 4], 7, -176418897)),
                  (o = w(o, n, r, i, e[s + 5], 12, 1200080426)),
                  (i = w(i, o, n, r, e[s + 6], 17, -1473231341)),
                  (r = w(r, i, o, n, e[s + 7], 22, -45705983)),
                  (n = w(n, r, i, o, e[s + 8], 7, 1770035416)),
                  (o = w(o, n, r, i, e[s + 9], 12, -1958414417)),
                  (i = w(i, o, n, r, e[s + 10], 17, -42063)),
                  (r = w(r, i, o, n, e[s + 11], 22, -1990404162)),
                  (n = w(n, r, i, o, e[s + 12], 7, 1804603682)),
                  (o = w(o, n, r, i, e[s + 13], 12, -40341101)),
                  (i = w(i, o, n, r, e[s + 14], 17, -1502002290)),
                  (n = O(
                    n,
                    (r = w(r, i, o, n, e[s + 15], 22, 1236535329)),
                    i,
                    o,
                    e[s + 1],
                    5,
                    -165796510
                  )),
                  (o = O(o, n, r, i, e[s + 6], 9, -1069501632)),
                  (i = O(i, o, n, r, e[s + 11], 14, 643717713)),
                  (r = O(r, i, o, n, e[s], 20, -373897302)),
                  (n = O(n, r, i, o, e[s + 5], 5, -701558691)),
                  (o = O(o, n, r, i, e[s + 10], 9, 38016083)),
                  (i = O(i, o, n, r, e[s + 15], 14, -660478335)),
                  (r = O(r, i, o, n, e[s + 4], 20, -405537848)),
                  (n = O(n, r, i, o, e[s + 9], 5, 568446438)),
                  (o = O(o, n, r, i, e[s + 14], 9, -1019803690)),
                  (i = O(i, o, n, r, e[s + 3], 14, -187363961)),
                  (r = O(r, i, o, n, e[s + 8], 20, 1163531501)),
                  (n = O(n, r, i, o, e[s + 13], 5, -1444681467)),
                  (o = O(o, n, r, i, e[s + 2], 9, -51403784)),
                  (i = O(i, o, n, r, e[s + 7], 14, 1735328473)),
                  (n = P(
                    n,
                    (r = O(r, i, o, n, e[s + 12], 20, -1926607734)),
                    i,
                    o,
                    e[s + 5],
                    4,
                    -378558
                  )),
                  (o = P(o, n, r, i, e[s + 8], 11, -2022574463)),
                  (i = P(i, o, n, r, e[s + 11], 16, 1839030562)),
                  (r = P(r, i, o, n, e[s + 14], 23, -35309556)),
                  (n = P(n, r, i, o, e[s + 1], 4, -1530992060)),
                  (o = P(o, n, r, i, e[s + 4], 11, 1272893353)),
                  (i = P(i, o, n, r, e[s + 7], 16, -155497632)),
                  (r = P(r, i, o, n, e[s + 10], 23, -1094730640)),
                  (n = P(n, r, i, o, e[s + 13], 4, 681279174)),
                  (o = P(o, n, r, i, e[s], 11, -358537222)),
                  (i = P(i, o, n, r, e[s + 3], 16, -722521979)),
                  (r = P(r, i, o, n, e[s + 6], 23, 76029189)),
                  (n = P(n, r, i, o, e[s + 9], 4, -640364487)),
                  (o = P(o, n, r, i, e[s + 12], 11, -421815835)),
                  (i = P(i, o, n, r, e[s + 15], 16, 530742520)),
                  (n = k(
                    n,
                    (r = P(r, i, o, n, e[s + 2], 23, -995338651)),
                    i,
                    o,
                    e[s],
                    6,
                    -198630844
                  )),
                  (o = k(o, n, r, i, e[s + 7], 10, 1126891415)),
                  (i = k(i, o, n, r, e[s + 14], 15, -1416354905)),
                  (r = k(r, i, o, n, e[s + 5], 21, -57434055)),
                  (n = k(n, r, i, o, e[s + 12], 6, 1700485571)),
                  (o = k(o, n, r, i, e[s + 3], 10, -1894986606)),
                  (i = k(i, o, n, r, e[s + 10], 15, -1051523)),
                  (r = k(r, i, o, n, e[s + 1], 21, -2054922799)),
                  (n = k(n, r, i, o, e[s + 8], 6, 1873313359)),
                  (o = k(o, n, r, i, e[s + 15], 10, -30611744)),
                  (i = k(i, o, n, r, e[s + 6], 15, -1560198380)),
                  (r = k(r, i, o, n, e[s + 13], 21, 1309151649)),
                  (n = k(n, r, i, o, e[s + 4], 6, -145523070)),
                  (o = k(o, n, r, i, e[s + 11], 10, -1120210379)),
                  (i = k(i, o, n, r, e[s + 2], 15, 718787259)),
                  (r = k(r, i, o, n, e[s + 9], 21, -343485551)),
                  (n = I(n, a)),
                  (r = I(r, c)),
                  (i = I(i, u)),
                  (o = I(o, l));
              }
              return [n, r, i, o];
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
        x = y("v3", 48, S);
      var T = function (e, t, n) {
        var r = (e = e || {}).random || (e.rng || o)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (var i = 0; i < 16; ++i) t[n + i] = r[i];
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
      function j(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      var z = function (e) {
          var t = [1518500249, 1859775393, 2400959708, 3395469782],
            n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
            var r = unescape(encodeURIComponent(e));
            e = [];
            for (var i = 0; i < r.length; ++i) e.push(r.charCodeAt(i));
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          for (
            var o = e.length / 4 + 2,
              s = Math.ceil(o / 16),
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
              p[f] = j(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
            for (
              var h = n[0], g = n[1], y = n[2], m = n[3], I = n[4], b = 0;
              b < 80;
              ++b
            ) {
              var w = Math.floor(b / 20),
                O = (j(h, 5) + E(w, g, y, m) + I + t[w] + p[b]) >>> 0;
              (I = m), (m = y), (y = j(g, 30) >>> 0), (g = h), (h = O);
            }
            (n[0] = (n[0] + h) >>> 0),
              (n[1] = (n[1] + g) >>> 0),
              (n[2] = (n[2] + y) >>> 0),
              (n[3] = (n[3] + m) >>> 0),
              (n[4] = (n[4] + I) >>> 0);
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
        V = y("v5", 80, z),
        C = "00000000-0000-0000-0000-000000000000";
      var _ = function (e) {
        if (!a(e)) throw TypeError("Invalid UUID");
        return parseInt(e.substr(14, 1), 16);
      };
    },
    74710: function (e) {
      e.exports = JSON.parse(
        '{"name":"uss-vod-js-sdk","version":"2.3.11","main":"lib/src/index.js","types":"lib/src/index.d.ts","scripts":{"prepare":"yarn build","clean":"rm -rf dist/* lib/*","build":"yarn build:pb && yarn build:js","build:pb":"pbjs -t static-module -w commonjs -o proto/index.js proto/stats.proto && pbts -o proto/index.d.ts proto/index.js","build:js":"yarn clean && webpack && tsc && cp -r proto lib","prepublishOnly":"yarn build","dev":"parcel example/index.html -p 1235"},"files":["lib","src"],"dependencies":{"axios":"^0.21.1","crypto-js":"^4.1.1","js-sha1":"^0.6.0","protobufjs":"^6.11.2","spark-md5":"^3.0.1","uuid":"^8.3.2"},"devDependencies":{"@types/axios":"^0.14.0","@types/crypto-js":"^4.0.1","@types/spark-md5":"^3.0.2","@types/uuid":"^8.3.3","@typescript-eslint/eslint-plugin":"^4.14.2","@typescript-eslint/parser":"^4.14.2","browser-resolve":"^2.0.0","eslint":"^7.19.0","husky":"^4.3.8","jest":"^26.6.3","lint-staged":"^10.5.3","parcel":"^2.5.0","prettier":"^2.2.1","process":"^0.11.10","terser-webpack-plugin":"^5.1.1","ts-jest":"^26.4.4","ts-loader":"^8.0.14","typescript":"^4.1.3","webpack":"^5.15.0","webpack-cli":"^4.3.1"},"husky":{"hooks":{"pre-commit":"tsc --noEmit && lint-staged"}},"lint-staged":{"*.{ts}":["eslint --fix"],"*.{ts,md,html}":["prettier --write"]},"publishConfig":{"registry":"https://npm.shopee.io"},"gitHead":"350c8a88f53c2e6c0f88786e9a10a340056be9ee"}'
      );
    },
  },
]);
