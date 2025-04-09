(self.webpackChunk_pdp_pc = self.webpackChunk_pdp_pc || []).push([
  [1419],
  {
    76398: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => s });
      var r = n(24261),
        o = n(46210),
        i = n(87363),
        u = n.n(i),
        a = n(85383),
        s = function (e, t, n) {
          var i = u().forwardRef(function (i, s) {
            var l = i.size,
              c = i.color,
              f = (0, o.Z)(i, ["size", "color"]),
              d = null === c ? void 0 : c || n,
              D = (0, a.ev)(d);
            return u().createElement(
              e.type,
              (0, r.Z)(
                {},
                e.props,
                { ref: s, width: l || t, height: l || t, color: D },
                f
              )
            );
          });
          return (i.displayName = "NebulaIcon"), i;
        };
    },
    65047: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var r = n(87363),
        o = n.n(r);
      const i = (0, n(76398).L)(
        o().createElement(
          "svg",
          { viewBox: "0 0 12 12", fill: "none" },
          o().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 .766L11.234 0 6 5.234.766 0 0 .766 5.234 6 0 11.234.766 12 6 6.766 11.234 12l.766-.766L6.766 6 12 .766z",
            fill: "currentColor",
          })
        ),
        12,
        "rgba(0, 0, 0, 0.54)"
      );
    },
    57202: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var r = n(87363),
        o = n.n(r);
      const i = (0, n(76398).L)(
        o().createElement(
          "svg",
          { viewBox: "0 0 12 12", fill: "none" },
          o().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z",
            fill: "currentColor",
          })
        ),
        12,
        "#ee4d2d"
      );
    },
    20188: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var r = n(87363),
        o = n.n(r);
      const i = (0, n(76398).L)(
        o().createElement(
          "svg",
          { viewBox: "0 0 24 24", fill: "none" },
          o().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.94 12L9.47 6.53l1.06-1.06 5.647 5.646a1.25 1.25 0 010 1.768L10.53 18.53l-1.06-1.06L14.94 12z",
            fill: "currentColor",
          })
        ),
        24,
        "rgba(0, 0, 0, 0.54)"
      );
    },
    85383: (e, t, n) => {
      "use strict";
      n.d(t, { ev: () => a }), n(24261);
      var r = n(87363),
        o = n(74458),
        i = (n(22352), n(89575)),
        u = (function () {
          if (!(0, i.Z)()) return !0;
          var e = document.createElement("a");
          try {
            return (
              e.style.setProperty("--x", "x"),
              "x" === e.style.getPropertyValue("--x")
            );
          } catch (t) {
            return !1;
          }
        })(),
        a = function (e) {
          if (u || !e) return e;
          var t = (0, r.useContext)(o.ThemeContext).cssVars;
          return e.replace(
            /var\(\s*(--n[0-9a-z-_]*),?.*?(?:[^)(]|\((?:[^)(]|\([^)(]*\))*\))*\)/g,
            function (e, n) {
              return t[n] || e;
            }
          );
        };
    },
    52450: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => _ });
      var r = n(24261),
        o = n(71986),
        i = n(44884),
        u = n(6902),
        a = n(67641),
        s = n(87363),
        l = n.n(s),
        c = n(30394),
        f = n.n(c);
      const d = l().createContext(null);
      var D = function (e) {
          return e.scrollTop;
        },
        h = "unmounted",
        p = "exited",
        m = "entering",
        v = "entered",
        g = "exiting",
        y = (function (e) {
          function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var o,
              i = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? i
                  ? ((o = p), (r.appearStatus = m))
                  : (o = v)
                : (o = t.unmountOnExit || t.mountOnEnter ? h : p),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          (0, i.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === h ? { status: p } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== m && n !== v && (t = m)
                  : (n !== m && n !== v) || (t = g);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === m)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : f().findDOMNode(this);
                    n && D(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === p &&
                  this.setState({ status: h });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [r] : [f().findDOMNode(this), r],
                i = o[0],
                u = o[1],
                a = this.getTimeouts(),
                s = r ? a.appear : a.enter;
              e || n
                ? (this.props.onEnter(i, u),
                  this.safeSetState({ status: m }, function () {
                    t.props.onEntering(i, u),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: v }, function () {
                          t.props.onEntered(i, u);
                        });
                      });
                  }))
                : this.safeSetState({ status: v }, function () {
                    t.props.onEntered(i);
                  });
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : f().findDOMNode(this);
              t
                ? (this.props.onExit(r),
                  this.safeSetState({ status: g }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        f().flushSync(function () {
                          e.safeSetState({ status: p }, function () {
                            e.props.onExited(r);
                          });
                        });
                      });
                  }))
                : this.safeSetState({ status: p }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : f().findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var o = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = o[0],
                    u = o[1];
                  this.props.addEndListener(i, u);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === h) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, o.Z)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return l().createElement(
                d.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : l().cloneElement(l().Children.only(n), r)
              );
            }),
            t
          );
        })(l().Component);
      function b() {}
      (y.contextType = d),
        (y.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: b,
          onEntering: b,
          onEntered: b,
          onExit: b,
          onExiting: b,
          onExited: b,
        }),
        (y.UNMOUNTED = h),
        (y.EXITED = p),
        (y.ENTERING = m),
        (y.ENTERED = v),
        (y.EXITING = g);
      const E = y;
      var C = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (0, a.Z)(e, t);
            })
          );
        },
        w = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  o = r[0],
                  i = r[1];
                t.removeClasses(o, "exit"),
                  t.addClass(o, i ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  o = r[0],
                  i = r[1] ? "appear" : "enter";
                t.addClass(o, i, "active"),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  o = r[0],
                  i = r[1] ? "appear" : "enter";
                t.removeClasses(o, i),
                  t.addClass(o, i, "done"),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"),
                  t.removeClasses(n, "enter"),
                  t.addClass(n, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"),
                  t.addClass(n, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = "string" == typeof n,
                  o = r ? (r && n ? n + "-" : "") + e : n[e];
                return {
                  baseClassName: o,
                  activeClassName: r ? o + "-active" : n[e + "Active"],
                  doneClassName: r ? o + "-done" : n[e + "Done"],
                };
              }),
              t
            );
          }
          (0, i.Z)(t, e);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && o && (r += " " + o),
                "active" === n && e && D(e),
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (0, u.Z)(e, t);
                      });
                  })(e, r));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                o = n.active,
                i = n.done;
              (this.appliedClasses[t] = {}),
                r && C(e, r),
                o && C(e, o),
                i && C(e, i);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, (0, o.Z)(e, ["classNames"]));
              return l().createElement(
                E,
                (0, r.Z)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            t
          );
        })(l().Component);
      w.defaultProps = { classNames: "" };
      const _ = w;
    },
    89183: (e, t, n) => {
      "use strict";
      n.d(t, { l0: () => b, sk: () => m });
      var r = n(24261),
        o = n(87363);
      function i(e = {}) {
        const t = [],
          n = [];
        let r = !1;
        const o = e.onCatchError || console.error,
          i = (e) => {
            t.push(e),
              r ||
                (async () => {
                  for (r = !0; ; ) {
                    const n = t.shift();
                    if (!n) break;
                    try {
                      await n();
                    } catch (e) {
                      o(e);
                    }
                  }
                  (r = !1), n.splice(0, n.length).forEach((e) => e());
                })();
          };
        return {
          enqueue: i,
          enqueueAll: (e) => {
            e.forEach((e) => i(e));
          },
          wait: () =>
            new Promise((e) => {
              r ? n.push(e) : e();
            }),
          cancelAll: () => {
            t.splice(0, t.length);
          },
        };
      }
      function u(e, t) {
        const n = {};
        for (const r in e) n[r] = t(e[r], r, e);
        return n;
      }
      let a = (function (e) {
        return (
          (e[(e.Parallel = 1)] = "Parallel"),
          (e[(e.SequentialStopAfterFirstError = 2)] =
            "SequentialStopAfterFirstError"),
          e
        );
      })({});
      const s = 250,
        l = 0;
      function c({ formConfig: e, initialFormData: t }, n) {
        const o = u(e, (e, n) => {
          var r;
          return null != (r = t[n]) ? r : e.initialValue;
        });
        let c = u(e, () => !1),
          f = u(e, () => !0),
          d = u(e, () => []),
          D = o;
        const h = (function () {
            const e = [];
            return {
              addChangeEventListener: (t) => {
                e.push(t);
              },
              removeChangeEventListener: (t) => {
                const n = e.indexOf(t);
                n >= 0 && e.splice(n, 1);
              },
              emitChangeEvent: () => {
                e.forEach((e) => e());
              },
            };
          })(),
          p = (function ({ formConfig: e }) {
            const t = i(),
              n = async (t, n) => {
                const { validators: r, validationMode: o } = e[n];
                switch (o) {
                  case a.Parallel:
                    return (await Promise.all(r.map((e) => e(t[n], t)))).filter(
                      (e) => !!e
                    );
                  case a.SequentialStopAfterFirstError:
                    for (const e of r) {
                      const r = await e(t[n], t);
                      if (r) return [r];
                    }
                    return [];
                  default:
                    throw new TypeError("Unrecognized validationMode");
                }
              },
              r = async (t) =>
                await (async function (e) {
                  const r = {},
                    o = [];
                  for (const i in e) {
                    const u = async () => {
                      const o = await (e[i], (u = i), n(t, u));
                      var u;
                      r[i] = o;
                    };
                    o.push(u());
                  }
                  return await Promise.all(o), r;
                })(e);
            return {
              getFieldValidationResult: n,
              getFormValidationResult: r,
              scheduleFormValidation: (e, n, o) => {
                let i;
                t.cancelAll(),
                  t.enqueue(() => {
                    return (
                      (e = n),
                      new Promise((t) => {
                        setTimeout(() => t(), e);
                      })
                    );
                    var e;
                  }),
                  t.enqueue(async () => {
                    i = await r(e);
                  }),
                  t.enqueue(() => {
                    i && o({ newFormErrors: i });
                  });
              },
              wait: () => t.wait(),
            };
          })({ formConfig: e }),
          m = (function ({ formConfig: e, checkBeforeTransformation: t }) {
            const n = i(),
              r = async (n, r) => {
                const o = n[r],
                  i = e[r].transform;
                return i ? (t && !(await t({ name: r })) ? o : await i(o)) : o;
              };
            return {
              getTransformationResult: r,
              scheduleTransformation: (e, t, o) => {
                let i;
                n.enqueue(async () => {
                  i = await r(e, t);
                }),
                  n.enqueue(() => {
                    void 0 !== i && o && o({ name: t, newValue: i });
                  });
              },
              wait: () => n.wait(),
            };
          })({
            formConfig: e,
            checkBeforeTransformation: async ({ name: e }) =>
              0 === (await p.getFieldValidationResult(D, e)).length,
          }),
          v = ({ newFormErrors: t }) => {
            const n = u(t, (t, n) =>
              f[n] && !e[n].shouldValidateOnMount ? [] : t
            );
            (d = n), h.emitChangeEvent();
          },
          g = ({ name: e, newValue: t }) => {
            D[e] !== t &&
              ((D = (0, r.Z)({}, D, { [e]: t })),
              (f = (0, r.Z)({}, f, { [e]: !1 })),
              h.emitChangeEvent(),
              n.shouldValidateOnChange && p.scheduleFormValidation(D, s, v));
          };
        if (n.shouldTransformOnMount)
          for (const r in e) m.scheduleTransformation(D, r, g);
        return (
          p.scheduleFormValidation(D, l, v),
          {
            getFields: () =>
              u(e, (e, t) => ({
                name: t,
                value: D[t],
                active: c[t],
                pristine: f[t],
                errors: d[t],
                initialValue: o[t],
                setValue: (e) =>
                  ((e, t) => {
                    D[e] !== t &&
                      ((D = (0, r.Z)({}, D, { [e]: t })),
                      (f = (0, r.Z)({}, f, { [e]: !1 })),
                      h.emitChangeEvent(),
                      n.shouldValidateOnChange
                        ? p.scheduleFormValidation(D, s, v)
                        : ((d = (0, r.Z)({}, d, { [e]: [] })),
                          h.emitChangeEvent()));
                  })(t, e),
                setActive: (e) =>
                  ((e, t) => {
                    c[e] !== t &&
                      ((c = (0, r.Z)({}, c, { [e]: t })),
                      h.emitChangeEvent(),
                      !1 === t && m.scheduleTransformation(D, e, g));
                  })(t, e),
                setPristine: (e) =>
                  ((e, t) => {
                    f[e] !== t &&
                      ((f = (0, r.Z)({}, f, { [e]: t })),
                      h.emitChangeEvent(),
                      n.shouldValidateOnChange &&
                        p.scheduleFormValidation(D, s, v));
                  })(t, e),
              })),
            getFormData: () => D,
            getFormErrors: () => d,
            addChangeEventListener: h.addChangeEventListener,
            removeChangeEventListener: h.removeChangeEventListener,
            validateFormBeforeSubmit: async () => {
              await m.wait(),
                (f = u(e, () => !1)),
                h.emitChangeEvent(),
                p.scheduleFormValidation(D, l, v),
                await p.wait();
            },
            waitForPendingTasks: async () => {
              await m.wait(), await p.wait();
            },
          }
        );
      }
      var f = n(2627),
        d = n.n(f);
      function D(e, t = {}, n = {}) {
        const i = (function (e, t, n = {}) {
            const r = o.useRef(null);
            var i, u;
            return (
              null === r.current &&
                (r.current = c(
                  {
                    formConfig: "function" == typeof e ? e() : e,
                    initialFormData: t,
                  },
                  {
                    shouldTransformOnMount:
                      null != (i = n.shouldTransformOnMount) && i,
                    shouldValidateOnChange:
                      null == (u = n.shouldValidateOnChange) || u,
                  }
                )),
              r.current
            );
          })(
            () =>
              u(e, (e, t) => ({
                name: t,
                initialValue: e.initialValue || "",
                validators: e.dependencies
                  ? e.validators.map((t) =>
                      (function (e, t) {
                        return d()(e, (e, n) =>
                          t.length
                            ? JSON.stringify([e, ...t.map((e) => n[e])])
                            : e
                        );
                      })(t, e.dependencies || [])
                    )
                  : e.validators,
                transform: e.transform,
                shouldValidateOnMount: e.shouldValidateOnMount || !1,
                validationMode: e.shouldStopValidationAfterFirstError
                  ? a.SequentialStopAfterFirstError
                  : a.Parallel,
              })),
            t,
            n
          ),
          [s, l] = o.useState(i.getFields());
        o.useEffect(() => {
          const e = () => {
            l(i.getFields());
          };
          return (
            i.addChangeEventListener(e),
            () => {
              i.removeChangeEventListener(e);
            }
          );
        }, [i]);
        const f = u(s, (e) =>
          (0, r.Z)(
            {},
            e,
            (function (e) {
              return {
                error: e.errors.length ? e.errors[0] : void 0,
                onChange: (t) => {
                  "string" == typeof t
                    ? e.setValue(t)
                    : e.setValue(t.currentTarget.value);
                },
                onFocus: (t) => {
                  t.preventDefault(), e.setActive(!0);
                },
                onBlur: (t) => {
                  t.preventDefault(), e.setActive(!1);
                },
                clear: () => {
                  e.setValue(""), e.setPristine(!0);
                },
                reset: () => {
                  e.setValue(e.initialValue), e.setPristine(!0);
                },
              };
            })(e)
          )
        );
        return {
          fields: Object.freeze(f),
          getFormData: i.getFormData,
          validateFormBeforeSubmit: async () => {
            await i.validateFormBeforeSubmit();
            const e = i.getFormData(),
              t = i.getFormErrors();
            return {
              formData: e,
              formErrors: t,
              isValidForm: Object.values(t).every((e) => 0 === e.length),
            };
          },
          waitForPendingTasks: async () => (
            await i.waitForPendingTasks(),
            { formData: i.getFormData(), formErrors: i.getFormErrors() }
          ),
        };
      }
      function h(e, t) {
        switch (t) {
          case "string":
            return e;
          case "number":
            return parseFloat(e);
          case "boolean":
            return "true" === e;
        }
      }
      function p(e, t) {
        return {
          initialValue: `${e.initialValue}`,
          validators: e.validators.map((n) =>
            (function (e, t, n) {
              return async (r, o) =>
                await e(
                  h(r, t),
                  (function (e, t) {
                    return u(e, (e, n) => h(e, t[n].type));
                  })(o, n)
                );
            })(n, e.type, t)
          ),
          transform: e.transform
            ? ((n = e.transform),
              (r = e.type),
              async (e) => {
                const t = h(e, r);
                return `${await n(t)}`;
              })
            : void 0,
          shouldValidateOnMount: e.shouldValidateOnMount,
          shouldStopValidationAfterFirstError:
            e.shouldStopValidationAfterFirstError,
          dependencies: e.dependencies || null,
        };
        var n, r;
      }
      function m(e, t = {}, n = {}) {
        const o = D(
          u((i = e), (e) => p(e, i)),
          u(t, (e) => (void 0 !== e ? `${e}` : void 0)),
          n
        );
        var i;
        const a = (t) => u(t, (t, n) => h(t, e[n].type)),
          s = u(o.fields, (t, n) =>
            (0, r.Z)({}, t, {
              text: t.value,
              value: h(t.value, e[n].type),
              initialText: t.initialValue,
              initialValue: h(t.initialValue, e[n].type),
              setText: t.setValue,
              setValue: (e) => t.setValue(`${e}`),
              onChange: (e) => t.onChange("object" == typeof e ? e : `${e}`),
            })
          );
        return {
          fields: Object.freeze(s),
          getTextFormData: () => o.getFormData(),
          getFormData: () => a(o.getFormData()),
          validateFormBeforeSubmit: async () => {
            const e = await o.validateFormBeforeSubmit();
            return {
              isValidForm: e.isValidForm,
              textFormData: e.formData,
              formData: a(e.formData),
              formErrors: e.formErrors,
            };
          },
          waitForPendingTasks: async () => {
            const e = await o.waitForPendingTasks();
            return {
              textFormData: e.formData,
              formData: a(e.formData),
              formErrors: e.formErrors,
            };
          },
          forEachField: (e) => {
            Object.values(s).forEach(e);
          },
          everyField: (e) => Object.values(s).every(e),
          resetAllFields: () => {
            Object.values(s).forEach((e) => e.reset());
          },
          clearAllFields: () => {
            Object.values(s).forEach((e) => e.clear());
          },
        };
      }
      var v = n(71986),
        g = n(36094);
      const y = ["children", "onEnterKeyDown", "onEscapeKeyDown"];
      function b(e) {
        let { children: t, onEnterKeyDown: n, onEscapeKeyDown: o } = e,
          i = (0, v.Z)(e, y);
        return (0, g.jsx)(
          "form",
          (0, r.Z)({}, i, {
            onSubmit: (e) => e.preventDefault(),
            onKeyDown: (e) => {
              e &&
                !e.nativeEvent.isComposing &&
                229 !== e.keyCode &&
                ("Enter" === e.key && n
                  ? (e.preventDefault(), n())
                  : "Escape" === e.key && o && (e.preventDefault(), o()));
            },
            children: t,
          })
        );
      }
    },
    72896: (e, t, n) => {
      "use strict";
      n.d(t, { e$: () => r });
      const r = `https://${
        {
          SG: "cvf.shopee.sg",
          TW: "cvf.shopee.tw",
          MY: "cvf.shopee.com.my",
          PH: "cvf.shopee.ph",
          TH: "cvf.shopee.co.th",
          ID: "cvf.shopee.co.id",
          VN: "cvf.shopee.vn",
          BR: "cvf.shopee.com.br",
          MX: "cvf.shopee.com.mx",
          CO: "cvf.shopee.com.co",
          CL: "cvf.shopee.cl",
          PL: "cvf.shopee.pl",
          ES: "cvf.shopee.es",
          FR: "cvf.shopee.fr",
          IN: "cvf.shopee.in",
          AR: "cvf.shopee.com.ar",
        }[(0, n(43287).Kd)()]
      }/file/`;
    },
    86718: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => i });
      var r = n(24261);
      const o = (e, t = 100, n = 0) => {
          n > t ||
            ("object" == typeof e &&
              null !== e &&
              Object.entries(e).forEach(([e, r]) => {
                o(r, t, n + 1);
              }));
        },
        i = ({ logOnFail: e, onFailure: t } = {}) => {
          const n = (n, r, i) => {
              if (i.forceDisableDebug) return;
              const { context: u, rootSchema: a } = i;
              e &&
                o(
                  ((e, t, n) => {
                    const { context: r, rootSchema: o } = n;
                    return {
                      "Validation failure debug info": {
                        "Current schema": t.debugObject,
                        "Current schema's input": e,
                        "Root schema tag": o.tag,
                        "Root schema": o.debugObject,
                        "Point of failure w.r.t root": r,
                      },
                    };
                  })(n, r, i)
                ),
                t && t(n, r, i);
            },
            i = {
              getDefaultValue: () => "",
              formatInternal: (e, t) =>
                "string" == typeof e
                  ? { isFormatCorrect: !0, formattedValue: e }
                  : (n(e, i, t),
                    {
                      isFormatCorrect: !1,
                      formattedValue: i.getDefaultValue(),
                    }),
              format: (e, t = !1) =>
                i.formatInternal(e, {
                  forceDisableDebug: t,
                  context: [],
                  rootSchema: i,
                }),
              debugObject: { type: "string" },
            },
            u = {
              getDefaultValue: () => 0,
              formatInternal: (e, t) =>
                "number" == typeof e
                  ? { isFormatCorrect: !0, formattedValue: e }
                  : (n(e, u, t),
                    {
                      isFormatCorrect: !1,
                      formattedValue: u.getDefaultValue(),
                    }),
              format: (e, t = !1) =>
                u.formatInternal(e, {
                  forceDisableDebug: t,
                  context: [],
                  rootSchema: u,
                }),
              debugObject: { type: "number" },
            },
            a = {
              getDefaultValue: () => !1,
              formatInternal: (e, t) =>
                "boolean" == typeof e
                  ? { isFormatCorrect: !0, formattedValue: e }
                  : (n(e, a, t),
                    {
                      isFormatCorrect: !1,
                      formattedValue: a.getDefaultValue(),
                    }),
              format: (e, t = !1) =>
                a.formatInternal(e, {
                  forceDisableDebug: t,
                  context: [],
                  rootSchema: a,
                }),
              debugObject: { type: "boolean" },
            },
            s = {
              getDefaultValue: () => null,
              formatInternal: (e, t) =>
                null !== e
                  ? (n(e, s, t), { isFormatCorrect: !1, formattedValue: null })
                  : { isFormatCorrect: !0, formattedValue: null },
              format: (e, t = !1) =>
                s.formatInternal(e, {
                  forceDisableDebug: t,
                  context: [],
                  rootSchema: s,
                }),
              debugObject: { type: "null" },
            },
            l = {
              getDefaultValue() {},
              formatInternal: (e, t) =>
                void 0 !== e
                  ? (n(e, l, t),
                    { isFormatCorrect: !1, formattedValue: void 0 })
                  : { isFormatCorrect: !0, formattedValue: void 0 },
              format: (e, t = !1) =>
                l.formatInternal(e, {
                  forceDisableDebug: t,
                  context: [],
                  rootSchema: l,
                }),
              debugObject: { type: "undefined" },
            },
            c = (e) => {
              const t = {
                getDefaultValue: () => e,
                formatInternal: (r, o) =>
                  r !== e
                    ? (n(r, t, o), { isFormatCorrect: !1, formattedValue: e })
                    : { isFormatCorrect: !0, formattedValue: e },
                format: (e, n = !1) =>
                  t.formatInternal(e, {
                    forceDisableDebug: n,
                    context: [],
                    rootSchema: t,
                  }),
                debugObject: { type: "literal", value: e },
              };
              return t;
            },
            f = (e, { tag: t } = {}) => {
              const o = {
                propertySchemas: e,
                getDefaultValue: () => {
                  const t = {};
                  return (
                    Object.entries(e).forEach(([e, n]) => {
                      t[e] = n.getDefaultValue();
                    }),
                    t
                  );
                },
                formatInternal: (t, i) => {
                  t = t || {};
                  const u = {};
                  let a = !0;
                  return (
                    Object.entries(e).forEach(([e, s]) => {
                      if (t.hasOwnProperty(e)) {
                        const { isFormatCorrect: n, formattedValue: o } =
                          s.formatInternal(
                            t[e],
                            (0, r.Z)({}, i, {
                              context: [...i.context, `Key [${e}]`],
                            })
                          );
                        (u[e] = o), (a = a && n);
                      } else
                        s.optional
                          ? (u[e] = void 0)
                          : (n(
                              t,
                              o,
                              (0, r.Z)({}, i, {
                                context: [
                                  ...i.context,
                                  `Key [${e}] is missing`,
                                ],
                              })
                            ),
                            (u[e] = s.getDefaultValue()),
                            (a = !1));
                    }),
                    { isFormatCorrect: a, formattedValue: u }
                  );
                },
                format: (e, t = !1) =>
                  o.formatInternal(e, {
                    forceDisableDebug: t,
                    context: [],
                    rootSchema: o,
                  }),
                debugObject: {
                  type: "object",
                  fields: Object.entries(e).reduce(
                    (e, [t, n]) => (0, r.Z)({}, e, { [t]: n.debugObject }),
                    {}
                  ),
                },
                tag: t,
              };
              return o;
            },
            d = (e, { defaultSchema: t = e[0], tag: o } = {}) => {
              const i = {
                getDefaultValue: () => t.getDefaultValue(),
                formatInternal: (o, u) => {
                  for (const t of e) {
                    const { isFormatCorrect: e, formattedValue: n } =
                      t.formatInternal(
                        o,
                        (0, r.Z)({}, u, { forceDisableDebug: !0 })
                      );
                    if (e) return { isFormatCorrect: e, formattedValue: n };
                  }
                  return (
                    n(o, i, u),
                    t.formatInternal(
                      o,
                      (0, r.Z)({}, u, { forceDisableDebug: !0 })
                    )
                  );
                },
                format: (e, t = !1) =>
                  i.formatInternal(e, {
                    forceDisableDebug: t,
                    context: [],
                    rootSchema: i,
                  }),
                debugObject: {
                  type: "union",
                  children: e.map((e) => e.debugObject),
                },
                tag: o,
              };
              return i;
            };
          return {
            _string: i,
            _number: u,
            _boolean: a,
            _null: s,
            _undefined: l,
            _literal: c,
            _object: f,
            _array: (e, { filter: t = !1, tag: n } = {}) => {
              const o = {
                getDefaultValue: () => [],
                formatInternal: (n, i) => {
                  if (Array.isArray(n)) {
                    const o = n.map((t, n) =>
                      e.formatInternal(
                        t,
                        (0, r.Z)({}, i, {
                          context: [...i.context, `Index [${n}]`],
                        })
                      )
                    );
                    return {
                      isFormatCorrect: o.every((e) => e.isFormatCorrect),
                      formattedValue: t
                        ? o
                            .filter((e) => e.isFormatCorrect)
                            .map((e) => e.formattedValue)
                        : o.map((e) => e.formattedValue),
                    };
                  }
                  return {
                    isFormatCorrect: !1,
                    formattedValue: o.getDefaultValue(),
                  };
                },
                format: (e, t = !1) =>
                  o.formatInternal(e, {
                    forceDisableDebug: t,
                    context: [],
                    rootSchema: o,
                  }),
                debugObject: { type: "array", element: e.debugObject },
                tag: n,
              };
              return o;
            },
            _intersect: (e, t = {}) => {
              const n = e.reduce(
                (e, t) => (0, r.Z)({}, e, t.propertySchemas),
                {}
              );
              return f(n, t);
            },
            _union: d,
            _enum: (e, t = {}) =>
              d(
                Object.values(e).map((e) => c(e)),
                t
              ),
            _optionalNullable: (e, t = {}) =>
              (0, r.Z)({}, d([e, l, s], t), { optional: !0 }),
            _optional: (e, t = {}) =>
              (0, r.Z)({}, d([e, l], t), { optional: !0 }),
            _nullable: (e, t = {}) => d([e, s], t),
            formatResponseDataField: async (
              e,
              t,
              { forceDisableDebug: n } = {}
            ) => {
              const o = await e,
                { data: i, error: u } = o,
                a = !!u && !i;
              return (0, r.Z)({}, o, {
                data: t.format(i, n || a).formattedValue,
              });
            },
          };
        };
    },
    18238: function (e) {
      e.exports = (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        var n = {};
        return (
          (t.m = e),
          (t.c = n),
          (t.i = function (e) {
            return e;
          }),
          (t.d = function (e, n, r) {
            t.o(e, n) ||
              Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r,
              });
          }),
          (t.n = function (e) {
            var n =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(n, "a", n), n;
          }),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = ""),
          t((t.s = 3))
        );
      })([
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = {
            _keyStr:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
              var t,
                n,
                o,
                i,
                u,
                a,
                s,
                l = "",
                c = 0;
              for (e = r._utf8_encode(e); c < e.length; )
                (i = (t = e.charCodeAt(c++)) >> 2),
                  (u = ((3 & t) << 4) | ((n = e.charCodeAt(c++)) >> 4)),
                  (a = ((15 & n) << 2) | ((o = e.charCodeAt(c++)) >> 6)),
                  (s = 63 & o),
                  isNaN(n) ? (a = s = 64) : isNaN(o) && (s = 64),
                  (l =
                    l +
                    this._keyStr.charAt(i) +
                    this._keyStr.charAt(u) +
                    this._keyStr.charAt(a) +
                    this._keyStr.charAt(s));
              return l;
            },
            decode: function (e) {
              var t,
                n,
                o,
                i,
                u,
                a,
                s = "",
                l = 0;
              for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length; )
                (t =
                  (this._keyStr.indexOf(e.charAt(l++)) << 2) |
                  ((i = this._keyStr.indexOf(e.charAt(l++))) >> 4)),
                  (n =
                    ((15 & i) << 4) |
                    ((u = this._keyStr.indexOf(e.charAt(l++))) >> 2)),
                  (o =
                    ((3 & u) << 6) | (a = this._keyStr.indexOf(e.charAt(l++)))),
                  (s += String.fromCharCode(t)),
                  64 != u && (s += String.fromCharCode(n)),
                  64 != a && (s += String.fromCharCode(o));
              return r._utf8_decode(s);
            },
            _utf8_encode: function (e) {
              e = e.replace(/\r\n/g, "\n");
              for (var t = "", n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                r < 128
                  ? (t += String.fromCharCode(r))
                  : r > 127 && r < 2048
                  ? ((t += String.fromCharCode((r >> 6) | 192)),
                    (t += String.fromCharCode((63 & r) | 128)))
                  : ((t += String.fromCharCode((r >> 12) | 224)),
                    (t += String.fromCharCode(((r >> 6) & 63) | 128)),
                    (t += String.fromCharCode((63 & r) | 128)));
              }
              return t;
            },
            _utf8_decode: function (e) {
              for (var t, n, r = "", o = 0, i = (t = 0); o < e.length; )
                (i = e.charCodeAt(o)) < 128
                  ? ((r += String.fromCharCode(i)), o++)
                  : i > 191 && i < 224
                  ? ((t = e.charCodeAt(o + 1)),
                    (r += String.fromCharCode(((31 & i) << 6) | (63 & t))),
                    (o += 2))
                  : ((t = e.charCodeAt(o + 1)),
                    (n = e.charCodeAt(o + 2)),
                    (r += String.fromCharCode(
                      ((15 & i) << 12) | ((63 & t) << 6) | (63 & n)
                    )),
                    (o += 3));
              return r;
            },
          };
          t.default = r;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getCookie = function (e) {
              return (function () {
                var e = document.cookie,
                  t = 0,
                  n = {};
                return (
                  document.cookie.match(/^\s*\$Version=(?:'1'|1);\s*(.*)/) &&
                    ((e = RegExp.$1), (t = 1)),
                  0 === t
                    ? e.split(/[,;]/).map(function (e) {
                        var t = e.indexOf("="),
                          r = [e.substring(0, t), e.substring(t + 1)],
                          o = decodeURIComponent(r[0].trimLeft()),
                          i =
                            r.length > 1
                              ? decodeURIComponent(r[1].trimRight())
                              : null;
                        n[o] = i;
                      })
                    : e
                        .match(
                          /(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|'(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g
                        )
                        .map(function (e, t) {
                          var r = e,
                            o =
                              '"' === t.charAt(0)
                                ? t.substr(1, -1).replace(/\\(.)/g, "$1")
                                : t;
                          n[r] = o;
                        }),
                  n
                );
              })()[e];
            }),
            (t.createCookie = function (e, t, n) {
              if (n) {
                var r = new Date();
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
                var o = "; expires=" + r.toGMTString();
              } else o = "";
              document.cookie = e + "=" + t + o + "; path=/";
            }),
            "function" != typeof String.prototype.trimLeft &&
              (String.prototype.trimLeft = function () {
                return this.replace(/^\s+/, "");
              }),
            "function" != typeof String.prototype.trimRight &&
              (String.prototype.trimRight = function () {
                return this.replace(/\s+$/, "");
              }),
            "function" != typeof Array.prototype.map &&
              (Array.prototype.map = function (e, t) {
                for (var n = 0, r = this.length, o = []; n < r; n++)
                  n in this && (o[n] = e.call(t, this[n]));
                return o;
              });
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            o = n(4),
            i = {},
            u = ["int32", "int64", "bool", "string"];
          !(function (e) {
            e.hasOwnProperty("messages") &&
              "object" == r(e.messages) &&
              (i = e.messages);
          })(o),
            (t.serialize = function e(t, n) {
              if ("string" != typeof t)
                throw new Error(
                  "The `proto` must be of type string. A value of " +
                    t +
                    "is passed in"
                );
              if (null == n) return null;
              if (!i.hasOwnProperty(t))
                throw new Error("Theres no proto definition of " + t);
              var o = [null],
                a = i[t];
              if (!a.hasOwnProperty("fields"))
                throw new Error("Invalid proto definition of " + t);
              var s = a.fields;
              for (var l in s)
                if (s.hasOwnProperty(l)) {
                  var c = s[l];
                  if (n.hasOwnProperty(l)) {
                    var f = n[l];
                    if ((void 0 === f && (f = null), -1 !== u.indexOf(c.type)))
                      o.push(f);
                    else if ("repeated" !== c.rule) o.push(e(c.type, f));
                    else if (
                      f &&
                      "object" === (void 0 === f ? "undefined" : r(f))
                    ) {
                      for (var d = [], D = 0; D < f.length; D++)
                        d.push(e(c.type, f[D]));
                      o.push(d);
                    } else o.push(null);
                  } else o.push(null);
                }
              return o;
            });
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getReferals = t.collect = t.init = void 0);
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            o = n(2),
            i = n(1),
            u = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(n(0)),
            a = !1,
            s = null,
            l = null,
            c = null,
            f = null,
            d = null,
            D = null,
            h = null,
            p =
              ((t.init = function (e, t) {
                if (window.sessionStorage) {
                  if (null != e) {
                    if ("object" !== (void 0 === e ? "undefined" : r(e)))
                      throw new Error("options must be plain object");
                    (D = (0, i.getCookie)("SPC_T_ID")),
                      (h = (0, i.getCookie)("SPC_T_IV")),
                      (l = e.userid || null),
                      (c = e.deviceid || null),
                      (f = e.platform || null),
                      (d = e.country || null);
                  }
                  return (
                    void 0 !== t && "function" == typeof t && (s = t),
                    (a = !0),
                    !0
                  );
                }
              }),
              function (e, t) {
                t = u.default.encode(t || "");
                var n = m();
                n[e] || (n[e] = []),
                  n[e].push({ url: t, timestamp: +new Date() }),
                  n[e].length > 20 && n[e].shift(),
                  sessionStorage.setItem("SPC_T_RF", JSON.stringify(n));
              }),
            m = function () {
              return sessionStorage.getItem("SPC_T_RF")
                ? JSON.parse(sessionStorage.getItem("SPC_T_RF"))
                : {};
            },
            v =
              ((t.collect = function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
                if (window.sessionStorage) {
                  if (!a)
                    throw new Error("must init first before calling collect");
                  4 === e && (t[0].refer_urls = v(t[0].itemid));
                  var r = (function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [],
                        r = {};
                      return (
                        (r.userid = l),
                        (r.sessionid = D),
                        (r.token = h),
                        (r.deviceid = c),
                        (r.platform = f),
                        (r.operation = e),
                        (r.items = t),
                        (r.timestamp = +new Date()),
                        (r.country = d),
                        (r.shops = n),
                        r
                      );
                    })(e, t, n),
                    i = (0, o.serialize)("Tracking", r);
                  return (
                    3 === e && p(t[0].itemid, t[0].refer_urls[0]),
                    4 === e &&
                      (function (e) {
                        var t = m();
                        (t[e] = []),
                          sessionStorage.setItem("SPC_T_RF", JSON.stringify(t));
                      })(t[0].itemid),
                    s("/__t__", i)
                  );
                }
              }),
              (t.getReferals = function (e) {
                for (
                  var t = m()[e] || [], n = [], r = +new Date(), o = 0;
                  o < t.length;
                  o++
                )
                  t[o].timestamp + 18e5 > r && n.push(t[o].url);
                return n;
              }));
        },
        function (e, t) {
          e.exports = {
            options: { java_package: "com.shopee.protocol.ads.action" },
            messages: {
              TrackingFilter: {
                fields: {
                  match_type: { rule: "optional", type: "int32", tag: 1 },
                  match_id: { rule: "repeated", type: "int64", tag: 2 },
                  hashtag: { rule: "repeated", type: "string", tag: 3 },
                },
              },
              TrackingQuery: {
                fields: {
                  keyword: { rule: "optional", type: "string", tag: 1 },
                  sorttype: { rule: "optional", type: "int32", tag: 2 },
                  colorful_blocks: { rule: "repeated", type: "string", tag: 3 },
                  filter_price_min: { rule: "optional", type: "int32", tag: 4 },
                  filter_price_max: { rule: "optional", type: "int32", tag: 5 },
                  filter_include_sf: {
                    rule: "optional",
                    type: "int32",
                    tag: 6,
                  },
                  filter_with_discount: {
                    rule: "optional",
                    type: "int32",
                    tag: 7,
                  },
                  filter_attribute: { rule: "optional", type: "int32", tag: 8 },
                  filter_item_condition: {
                    rule: "optional",
                    type: "int32",
                    tag: 9,
                  },
                  filter_user_verified: {
                    rule: "optional",
                    type: "int32",
                    tag: 10,
                  },
                  filters: {
                    rule: "repeated",
                    type: "TrackingFilter",
                    tag: 11,
                  },
                },
              },
              TrackingItem: {
                fields: {
                  itemid: { rule: "optional", type: "int64", tag: 1 },
                  shopid: { rule: "optional", type: "int32", tag: 2 },
                  discount: { rule: "optional", type: "int32", tag: 3 },
                  free_shipping: { rule: "optional", type: "bool", tag: 4 },
                  is_prefered: { rule: "optional", type: "bool", tag: 5 },
                  algorithm: { rule: "optional", type: "string", tag: 6 },
                  compaignid: { rule: "optional", type: "string", tag: 7 },
                  location: { rule: "optional", type: "int32", tag: 8 },
                  query: { rule: "optional", type: "TrackingQuery", tag: 9 },
                  refer_urls: { rule: "repeated", type: "string", tag: 10 },
                  item_modelid: { rule: "optional", type: "int64", tag: 11 },
                  list_type: { rule: "optional", type: "string", tag: 12 },
                  adsid: { rule: "optional", type: "int64", tag: 13 },
                  location_in_ads: { rule: "optional", type: "int32", tag: 14 },
                  campaignid: { rule: "optional", type: "int64", tag: 15 },
                  ads_keyword: { rule: "optional", type: "string", tag: 16 },
                  match_type: { rule: "optional", type: "int32", tag: 17 },
                  deduction_info: { rule: "optional", type: "string", tag: 18 },
                },
              },
              TrackingShop: {
                fields: {
                  shopid: { rule: "optional", type: "int32", tag: 1 },
                  query: { rule: "optional", type: "TrackingQuery", tag: 2 },
                  algorithm: { rule: "optional", type: "string", tag: 3 },
                  location: { rule: "optional", type: "int32", tag: 4 },
                  refer_urls: { rule: "repeated", type: "string", tag: 5 },
                  list_type: { rule: "optional", type: "string", tag: 6 },
                },
              },
              Tracking: {
                fields: {
                  userid: { rule: "optional", type: "int32", tag: 1 },
                  sessionid: { rule: "optional", type: "string", tag: 2 },
                  deviceid: { rule: "optional", type: "string", tag: 3 },
                  client_ip: { rule: "optional", type: "string", tag: 4 },
                  platform: { rule: "optional", type: "int32", tag: 5 },
                  operation: { rule: "optional", type: "int32", tag: 6 },
                  items: { rule: "repeated", type: "TrackingItem", tag: 7 },
                  timestamp: { rule: "optional", type: "int64", tag: 8 },
                  country: { rule: "optional", type: "string", tag: 9 },
                  token: { rule: "optional", type: "string", tag: 10 },
                  from: { rule: "optional", type: "string", tag: 11 },
                  shops: { rule: "repeated", type: "TrackingShop", tag: 12 },
                },
              },
            },
            package: "beeshop.ads",
          };
        },
      ]);
    },
    41700: (e, t, n) => {
      e.exports = n(78815);
    },
    48537: (e, t, n) => {
      "use strict";
      var r = n(21230),
        o = n(53953),
        i = n(49572),
        u = n(90939),
        a = n(32809),
        s = n(10711),
        l = n(920),
        c = n(28737);
      e.exports = function (e) {
        return new Promise(function (t, n) {
          var f = e.data,
            d = e.headers,
            D = e.responseType;
          r.isFormData(f) && delete d["Content-Type"];
          var h = new XMLHttpRequest();
          if (e.auth) {
            var p = e.auth.username || "",
              m = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            d.Authorization = "Basic " + btoa(p + ":" + m);
          }
          var v = a(e.baseURL, e.url);
          function g() {
            if (h) {
              var r =
                  "getAllResponseHeaders" in h
                    ? s(h.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    D && "text" !== D && "json" !== D
                      ? h.response
                      : h.responseText,
                  status: h.status,
                  statusText: h.statusText,
                  headers: r,
                  config: e,
                  request: h,
                };
              o(t, n, i), (h = null);
            }
          }
          if (
            (h.open(
              e.method.toUpperCase(),
              u(v, e.params, e.paramsSerializer),
              !0
            ),
            (h.timeout = e.timeout),
            "onloadend" in h
              ? (h.onloadend = g)
              : (h.onreadystatechange = function () {
                  h &&
                    4 === h.readyState &&
                    (0 !== h.status ||
                      (h.responseURL &&
                        0 === h.responseURL.indexOf("file:"))) &&
                    setTimeout(g);
                }),
            (h.onabort = function () {
              h && (n(c("Request aborted", e, "ECONNABORTED", h)), (h = null));
            }),
            (h.onerror = function () {
              n(c("Network Error", e, null, h)), (h = null);
            }),
            (h.ontimeout = function () {
              var t = "timeout of " + e.timeout + "ms exceeded";
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(
                  c(
                    t,
                    e,
                    e.transitional && e.transitional.clarifyTimeoutError
                      ? "ETIMEDOUT"
                      : "ECONNABORTED",
                    h
                  )
                ),
                (h = null);
            }),
            r.isStandardBrowserEnv())
          ) {
            var y =
              (e.withCredentials || l(v)) && e.xsrfCookieName
                ? i.read(e.xsrfCookieName)
                : void 0;
            y && (d[e.xsrfHeaderName] = y);
          }
          "setRequestHeader" in h &&
            r.forEach(d, function (e, t) {
              void 0 === f && "content-type" === t.toLowerCase()
                ? delete d[t]
                : h.setRequestHeader(t, e);
            }),
            r.isUndefined(e.withCredentials) ||
              (h.withCredentials = !!e.withCredentials),
            D && "json" !== D && (h.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              h.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress &&
              h.upload &&
              h.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                h && (h.abort(), n(e), (h = null));
              }),
            f || (f = null),
            h.send(f);
        });
      };
    },
    78815: (e, t, n) => {
      "use strict";
      var r = n(21230),
        o = n(97606),
        i = n(45067),
        u = n(79627);
      function a(e) {
        var t = new i(e),
          n = o(i.prototype.request, t);
        return r.extend(n, i.prototype, t), r.extend(n, t), n;
      }
      var s = a(n(40146));
      (s.Axios = i),
        (s.create = function (e) {
          return a(u(s.defaults, e));
        }),
        (s.Cancel = n(4961)),
        (s.CancelToken = n(99232)),
        (s.isCancel = n(77914)),
        (s.all = function (e) {
          return Promise.all(e);
        }),
        (s.spread = n(14477)),
        (s.isAxiosError = n(15085)),
        (e.exports = s),
        (e.exports.default = s);
    },
    4961: (e) => {
      "use strict";
      function t(e) {
        this.message = e;
      }
      (t.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (t.prototype.__CANCEL__ = !0),
        (e.exports = t);
    },
    99232: (e, t, n) => {
      "use strict";
      var r = n(4961);
      function o(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var n = this;
        e(function (e) {
          n.reason || ((n.reason = new r(e)), t(n.reason));
        });
      }
      (o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (o.source = function () {
          var e;
          return {
            token: new o(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }),
        (e.exports = o);
    },
    77914: (e) => {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    45067: (e, t, n) => {
      "use strict";
      var r = n(21230),
        o = n(90939),
        i = n(3641),
        u = n(62647),
        a = n(79627),
        s = n(27656),
        l = s.validators;
      function c(e) {
        (this.defaults = e),
          (this.interceptors = { request: new i(), response: new i() });
      }
      (c.prototype.request = function (e) {
        "string" == typeof e
          ? ((e = arguments[1] || {}).url = arguments[0])
          : (e = e || {}),
          (e = a(this.defaults, e)).method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = "get");
        var t = e.transitional;
        void 0 !== t &&
          s.assertOptions(
            t,
            {
              silentJSONParsing: l.transitional(l.boolean, "1.0.0"),
              forcedJSONParsing: l.transitional(l.boolean, "1.0.0"),
              clarifyTimeoutError: l.transitional(l.boolean, "1.0.0"),
            },
            !1
          );
        var n = [],
          r = !0;
        this.interceptors.request.forEach(function (t) {
          ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
            ((r = r && t.synchronous), n.unshift(t.fulfilled, t.rejected));
        });
        var o,
          i = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            i.push(e.fulfilled, e.rejected);
          }),
          !r)
        ) {
          var c = [u, void 0];
          for (
            Array.prototype.unshift.apply(c, n),
              c = c.concat(i),
              o = Promise.resolve(e);
            c.length;

          )
            o = o.then(c.shift(), c.shift());
          return o;
        }
        for (var f = e; n.length; ) {
          var d = n.shift(),
            D = n.shift();
          try {
            f = d(f);
          } catch (h) {
            D(h);
            break;
          }
        }
        try {
          o = u(f);
        } catch (h) {
          return Promise.reject(h);
        }
        for (; i.length; ) o = o.then(i.shift(), i.shift());
        return o;
      }),
        (c.prototype.getUri = function (e) {
          return (
            (e = a(this.defaults, e)),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        r.forEach(["delete", "get", "head", "options"], function (e) {
          c.prototype[e] = function (t, n) {
            return this.request(
              a(n || {}, { method: e, url: t, data: (n || {}).data })
            );
          };
        }),
        r.forEach(["post", "put", "patch"], function (e) {
          c.prototype[e] = function (t, n, r) {
            return this.request(a(r || {}, { method: e, url: t, data: n }));
          };
        }),
        (e.exports = c);
    },
    3641: (e, t, n) => {
      "use strict";
      var r = n(21230);
      function o() {
        this.handlers = [];
      }
      (o.prototype.use = function (e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          r.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = o);
    },
    32809: (e, t, n) => {
      "use strict";
      var r = n(7351),
        o = n(38592);
      e.exports = function (e, t) {
        return e && !r(t) ? o(e, t) : t;
      };
    },
    28737: (e, t, n) => {
      "use strict";
      var r = n(21287);
      e.exports = function (e, t, n, o, i) {
        var u = new Error(e);
        return r(u, t, n, o, i);
      };
    },
    62647: (e, t, n) => {
      "use strict";
      var r = n(21230),
        o = n(34174),
        i = n(77914),
        u = n(40146);
      function a(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      e.exports = function (e) {
        return (
          a(e),
          (e.headers = e.headers || {}),
          (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = r.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers
          )),
          r.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            }
          ),
          (e.adapter || u.adapter)(e).then(
            function (t) {
              return (
                a(e),
                (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                t
              );
            },
            function (t) {
              return (
                i(t) ||
                  (a(e),
                  t &&
                    t.response &&
                    (t.response.data = o.call(
                      e,
                      t.response.data,
                      t.response.headers,
                      e.transformResponse
                    ))),
                Promise.reject(t)
              );
            }
          )
        );
      };
    },
    21287: (e) => {
      "use strict";
      e.exports = function (e, t, n, r, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    },
    79627: (e, t, n) => {
      "use strict";
      var r = n(21230);
      e.exports = function (e, t) {
        t = t || {};
        var n = {},
          o = ["url", "method", "data"],
          i = ["headers", "auth", "proxy", "params"],
          u = [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "timeoutMessage",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "decompress",
            "maxContentLength",
            "maxBodyLength",
            "maxRedirects",
            "transport",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
            "responseEncoding",
          ],
          a = ["validateStatus"];
        function s(e, t) {
          return r.isPlainObject(e) && r.isPlainObject(t)
            ? r.merge(e, t)
            : r.isPlainObject(t)
            ? r.merge({}, t)
            : r.isArray(t)
            ? t.slice()
            : t;
        }
        function l(o) {
          r.isUndefined(t[o])
            ? r.isUndefined(e[o]) || (n[o] = s(void 0, e[o]))
            : (n[o] = s(e[o], t[o]));
        }
        r.forEach(o, function (e) {
          r.isUndefined(t[e]) || (n[e] = s(void 0, t[e]));
        }),
          r.forEach(i, l),
          r.forEach(u, function (o) {
            r.isUndefined(t[o])
              ? r.isUndefined(e[o]) || (n[o] = s(void 0, e[o]))
              : (n[o] = s(void 0, t[o]));
          }),
          r.forEach(a, function (r) {
            r in t
              ? (n[r] = s(e[r], t[r]))
              : r in e && (n[r] = s(void 0, e[r]));
          });
        var c = o.concat(i).concat(u).concat(a),
          f = Object.keys(e)
            .concat(Object.keys(t))
            .filter(function (e) {
              return -1 === c.indexOf(e);
            });
        return r.forEach(f, l), n;
      };
    },
    53953: (e, t, n) => {
      "use strict";
      var r = n(28737);
      e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status)
          ? t(
              r(
                "Request failed with status code " + n.status,
                n.config,
                null,
                n.request,
                n
              )
            )
          : e(n);
      };
    },
    34174: (e, t, n) => {
      "use strict";
      var r = n(21230),
        o = n(40146);
      e.exports = function (e, t, n) {
        var i = this || o;
        return (
          r.forEach(n, function (n) {
            e = n.call(i, e, t);
          }),
          e
        );
      };
    },
    40146: (e, t, n) => {
      "use strict";
      var r = n(21230),
        o = n(66278),
        i = n(21287),
        u = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !r.isUndefined(e) &&
          r.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var s,
        l = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              ("undefined" != typeof process &&
                "[object process]" ===
                  Object.prototype.toString.call(process))) &&
              (s = n(48537)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : r.isObject(e) ||
                    (t && "application/json" === t["Content-Type"])
                  ? (a(t, "application/json"),
                    (function (e) {
                      if (r.isString(e))
                        try {
                          return (0, JSON.parse)(e), r.trim(e);
                        } catch (t) {
                          if ("SyntaxError" !== t.name) throw t;
                        }
                      return (0, JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                n = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                u = !n && "json" === this.responseType;
              if (u || (o && r.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (a) {
                  if (u) {
                    if ("SyntaxError" === a.name)
                      throw i(a, this, "E_JSON_PARSE");
                    throw a;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      r.forEach(["delete", "get", "head"], function (e) {
        l.headers[e] = {};
      }),
        r.forEach(["post", "put", "patch"], function (e) {
          l.headers[e] = r.merge(u);
        }),
        (e.exports = l);
    },
    97606: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
            n[r] = arguments[r];
          return e.apply(t, n);
        };
      };
    },
    90939: (e, t, n) => {
      "use strict";
      var r = n(21230);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (r.isURLSearchParams(t)) i = t.toString();
        else {
          var u = [];
          r.forEach(t, function (e, t) {
            null != e &&
              (r.isArray(e) ? (t += "[]") : (e = [e]),
              r.forEach(e, function (e) {
                r.isDate(e)
                  ? (e = e.toISOString())
                  : r.isObject(e) && (e = JSON.stringify(e)),
                  u.push(o(t) + "=" + o(e));
              }));
          }),
            (i = u.join("&"));
        }
        if (i) {
          var a = e.indexOf("#");
          -1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
        }
        return e;
      };
    },
    38592: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    49572: (e, t, n) => {
      "use strict";
      var r = n(21230);
      e.exports = r.isStandardBrowserEnv()
        ? {
            write: function (e, t, n, o, i, u) {
              var a = [];
              a.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                r.isString(o) && a.push("path=" + o),
                r.isString(i) && a.push("domain=" + i),
                !0 === u && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    7351: (e) => {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    15085: (e) => {
      "use strict";
      e.exports = function (e) {
        return "object" == typeof e && !0 === e.isAxiosError;
      };
    },
    920: (e, t, n) => {
      "use strict";
      var r = n(21230);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function o(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    66278: (e, t, n) => {
      "use strict";
      var r = n(21230);
      e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
          r !== t &&
            r.toUpperCase() === t.toUpperCase() &&
            ((e[t] = n), delete e[r]);
        });
      };
    },
    10711: (e, t, n) => {
      "use strict";
      var r = n(21230),
        o = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          n,
          i,
          u = {};
        return e
          ? (r.forEach(e.split("\n"), function (e) {
              if (
                ((i = e.indexOf(":")),
                (t = r.trim(e.substr(0, i)).toLowerCase()),
                (n = r.trim(e.substr(i + 1))),
                t)
              ) {
                if (u[t] && o.indexOf(t) >= 0) return;
                u[t] =
                  "set-cookie" === t
                    ? (u[t] ? u[t] : []).concat([n])
                    : u[t]
                    ? u[t] + ", " + n
                    : n;
              }
            }),
            u)
          : u;
      };
    },
    14477: (e) => {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    27656: (e, t, n) => {
      "use strict";
      var r = n(53245),
        o = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          o[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var i = {},
        u = r.version.split(".");
      function a(e, t) {
        for (
          var n = t ? t.split(".") : u, r = e.split("."), o = 0;
          o < 3;
          o++
        ) {
          if (n[o] > r[o]) return !0;
          if (n[o] < r[o]) return !1;
        }
        return !1;
      }
      (o.transitional = function (e, t, n) {
        var o = t && a(t);
        return function (u, a, s) {
          if (!1 === e)
            throw new Error(
              (function (e, t) {
                return (
                  "[Axios v" +
                  r.version +
                  "] Transitional option '" +
                  e +
                  "'" +
                  t +
                  (n ? ". " + n : "")
                );
              })(a, " has been removed in " + t)
            );
          return o && !i[a] && (i[a] = !0), !e || e(u, a, s);
        };
      }),
        (e.exports = {
          isOlderVersion: a,
          assertOptions: function (e, t, n) {
            if ("object" != typeof e)
              throw new TypeError("options must be an object");
            for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
              var i = r[o],
                u = t[i];
              if (u) {
                var a = e[i],
                  s = void 0 === a || u(a, i, e);
                if (!0 !== s)
                  throw new TypeError("option " + i + " must be " + s);
              } else if (!0 !== n) throw Error("Unknown option " + i);
            }
          },
          validators: o,
        });
    },
    21230: (e, t, n) => {
      "use strict";
      var r = n(97606),
        o = Object.prototype.toString;
      function i(e) {
        return "[object Array]" === o.call(e);
      }
      function u(e) {
        return void 0 === e;
      }
      function a(e) {
        return null !== e && "object" == typeof e;
      }
      function s(e) {
        if ("[object Object]" !== o.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      function l(e) {
        return "[object Function]" === o.call(e);
      }
      function c(e, t) {
        if (null != e)
          if (("object" != typeof e && (e = [e]), i(e)))
            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.call(null, e[o], o, e);
      }
      e.exports = {
        isArray: i,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === o.call(e);
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !u(e) &&
            null !== e.constructor &&
            !u(e.constructor) &&
            "function" == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: a,
        isPlainObject: s,
        isUndefined: u,
        isDate: function (e) {
          return "[object Date]" === o.call(e);
        },
        isFile: function (e) {
          return "[object File]" === o.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === o.call(e);
        },
        isFunction: l,
        isStream: function (e) {
          return a(e) && l(e.pipe);
        },
        isURLSearchParams: function (e) {
          return (
            "undefined" != typeof URLSearchParams &&
            e instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: c,
        merge: function e() {
          var t = {};
          function n(n, r) {
            s(t[r]) && s(n)
              ? (t[r] = e(t[r], n))
              : s(n)
              ? (t[r] = e({}, n))
              : i(n)
              ? (t[r] = n.slice())
              : (t[r] = n);
          }
          for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
          return t;
        },
        extend: function (e, t, n) {
          return (
            c(t, function (t, o) {
              e[o] = n && "function" == typeof t ? r(t, n) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
      };
    },
    41577: function (e, t) {
      var n;
      e.exports =
        ((n =
          n ||
          (function (e) {
            var t =
                Object.create ||
                (function () {
                  function e() {}
                  return function (t) {
                    var n;
                    return (
                      (e.prototype = t), (n = new e()), (e.prototype = null), n
                    );
                  };
                })(),
              n = {},
              r = (n.lib = {}),
              o = (r.Base = {
                extend: function (e) {
                  var n = t(this);
                  return (
                    e && n.mixIn(e),
                    (n.hasOwnProperty("init") && this.init !== n.init) ||
                      (n.init = function () {
                        n.$super.init.apply(this, arguments);
                      }),
                    (n.init.prototype = n),
                    (n.$super = this),
                    n
                  );
                },
                create: function () {
                  var e = this.extend();
                  return e.init.apply(e, arguments), e;
                },
                init: function () {},
                mixIn: function (e) {
                  for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                  e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              i = (r.WordArray = o.extend({
                init: function (e, t) {
                  (e = this.words = e || []),
                    (this.sigBytes = null != t ? t : 4 * e.length);
                },
                toString: function (e) {
                  return (e || a).stringify(this);
                },
                concat: function (e) {
                  var t = this.words,
                    n = e.words,
                    r = this.sigBytes,
                    o = e.sigBytes;
                  if ((this.clamp(), r % 4))
                    for (var i = 0; i < o; i++) {
                      var u = (n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      t[(r + i) >>> 2] |= u << (24 - ((r + i) % 4) * 8);
                    }
                  else for (i = 0; i < o; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
                  return (this.sigBytes += o), this;
                },
                clamp: function () {
                  var t = this.words,
                    n = this.sigBytes;
                  (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                    (t.length = e.ceil(n / 4));
                },
                clone: function () {
                  var e = o.clone.call(this);
                  return (e.words = this.words.slice(0)), e;
                },
                random: function (t) {
                  for (
                    var n,
                      r = [],
                      o = function (t) {
                        var n = 987654321,
                          r = 4294967295;
                        return function () {
                          var o =
                            (((n = (36969 * (65535 & n) + (n >> 16)) & r) <<
                              16) +
                              (t = (18e3 * (65535 & t) + (t >> 16)) & r)) &
                            r;
                          return (
                            (o /= 4294967296),
                            (o += 0.5) * (e.random() > 0.5 ? 1 : -1)
                          );
                        };
                      },
                      u = 0;
                    u < t;
                    u += 4
                  ) {
                    var a = o(4294967296 * (n || e.random()));
                    (n = 987654071 * a()), r.push((4294967296 * a()) | 0);
                  }
                  return new i.init(r, t);
                },
              })),
              u = (n.enc = {}),
              a = (u.Hex = {
                stringify: function (e) {
                  for (
                    var t = e.words, n = e.sigBytes, r = [], o = 0;
                    o < n;
                    o++
                  ) {
                    var i = (t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                    r.push((i >>> 4).toString(16)),
                      r.push((15 & i).toString(16));
                  }
                  return r.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], r = 0; r < t; r += 2)
                    n[r >>> 3] |=
                      parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
                  return new i.init(n, t / 2);
                },
              }),
              s = (u.Latin1 = {
                stringify: function (e) {
                  for (
                    var t = e.words, n = e.sigBytes, r = [], o = 0;
                    o < n;
                    o++
                  ) {
                    var i = (t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                    r.push(String.fromCharCode(i));
                  }
                  return r.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], r = 0; r < t; r++)
                    n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                  return new i.init(n, t);
                },
              }),
              l = (u.Utf8 = {
                stringify: function (e) {
                  try {
                    return decodeURIComponent(escape(s.stringify(e)));
                  } catch (t) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (e) {
                  return s.parse(unescape(encodeURIComponent(e)));
                },
              }),
              c = (r.BufferedBlockAlgorithm = o.extend({
                reset: function () {
                  (this._data = new i.init()), (this._nDataBytes = 0);
                },
                _append: function (e) {
                  "string" == typeof e && (e = l.parse(e)),
                    this._data.concat(e),
                    (this._nDataBytes += e.sigBytes);
                },
                _process: function (t) {
                  var n = this._data,
                    r = n.words,
                    o = n.sigBytes,
                    u = this.blockSize,
                    a = o / (4 * u),
                    s =
                      (a = t
                        ? e.ceil(a)
                        : e.max((0 | a) - this._minBufferSize, 0)) * u,
                    l = e.min(4 * s, o);
                  if (s) {
                    for (var c = 0; c < s; c += u) this._doProcessBlock(r, c);
                    var f = r.splice(0, s);
                    n.sigBytes -= l;
                  }
                  return new i.init(f, l);
                },
                clone: function () {
                  var e = o.clone.call(this);
                  return (e._data = this._data.clone()), e;
                },
                _minBufferSize: 0,
              })),
              f =
                ((r.Hasher = c.extend({
                  cfg: o.extend(),
                  init: function (e) {
                    (this.cfg = this.cfg.extend(e)), this.reset();
                  },
                  reset: function () {
                    c.reset.call(this), this._doReset();
                  },
                  update: function (e) {
                    return this._append(e), this._process(), this;
                  },
                  finalize: function (e) {
                    return e && this._append(e), this._doFinalize();
                  },
                  blockSize: 16,
                  _createHelper: function (e) {
                    return function (t, n) {
                      return new e.init(n).finalize(t);
                    };
                  },
                  _createHmacHelper: function (e) {
                    return function (t, n) {
                      return new f.HMAC.init(e, n).finalize(t);
                    };
                  },
                })),
                (n.algo = {}));
            return n;
          })(Math)),
        n);
    },
    72139: function (e, t, n) {
      var r;
      e.exports =
        ((r = n(41577)),
        (function (e) {
          var t = r,
            n = t.lib,
            o = n.WordArray,
            i = n.Hasher,
            u = t.algo,
            a = [];
          !(function () {
            for (var t = 0; t < 64; t++)
              a[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
          })();
          var s = (u.MD5 = i.extend({
            _doReset: function () {
              this._hash = new o.init([
                1732584193, 4023233417, 2562383102, 271733878,
              ]);
            },
            _doProcessBlock: function (e, t) {
              for (var n = 0; n < 16; n++) {
                var r = t + n,
                  o = e[r];
                e[r] =
                  (16711935 & ((o << 8) | (o >>> 24))) |
                  (4278255360 & ((o << 24) | (o >>> 8)));
              }
              var i = this._hash.words,
                u = e[t + 0],
                s = e[t + 1],
                D = e[t + 2],
                h = e[t + 3],
                p = e[t + 4],
                m = e[t + 5],
                v = e[t + 6],
                g = e[t + 7],
                y = e[t + 8],
                b = e[t + 9],
                E = e[t + 10],
                C = e[t + 11],
                w = e[t + 12],
                _ = e[t + 13],
                F = e[t + 14],
                x = e[t + 15],
                A = i[0],
                S = i[1],
                k = i[2],
                O = i[3];
              (A = l(A, S, k, O, u, 7, a[0])),
                (O = l(O, A, S, k, s, 12, a[1])),
                (k = l(k, O, A, S, D, 17, a[2])),
                (S = l(S, k, O, A, h, 22, a[3])),
                (A = l(A, S, k, O, p, 7, a[4])),
                (O = l(O, A, S, k, m, 12, a[5])),
                (k = l(k, O, A, S, v, 17, a[6])),
                (S = l(S, k, O, A, g, 22, a[7])),
                (A = l(A, S, k, O, y, 7, a[8])),
                (O = l(O, A, S, k, b, 12, a[9])),
                (k = l(k, O, A, S, E, 17, a[10])),
                (S = l(S, k, O, A, C, 22, a[11])),
                (A = l(A, S, k, O, w, 7, a[12])),
                (O = l(O, A, S, k, _, 12, a[13])),
                (k = l(k, O, A, S, F, 17, a[14])),
                (A = c(
                  A,
                  (S = l(S, k, O, A, x, 22, a[15])),
                  k,
                  O,
                  s,
                  5,
                  a[16]
                )),
                (O = c(O, A, S, k, v, 9, a[17])),
                (k = c(k, O, A, S, C, 14, a[18])),
                (S = c(S, k, O, A, u, 20, a[19])),
                (A = c(A, S, k, O, m, 5, a[20])),
                (O = c(O, A, S, k, E, 9, a[21])),
                (k = c(k, O, A, S, x, 14, a[22])),
                (S = c(S, k, O, A, p, 20, a[23])),
                (A = c(A, S, k, O, b, 5, a[24])),
                (O = c(O, A, S, k, F, 9, a[25])),
                (k = c(k, O, A, S, h, 14, a[26])),
                (S = c(S, k, O, A, y, 20, a[27])),
                (A = c(A, S, k, O, _, 5, a[28])),
                (O = c(O, A, S, k, D, 9, a[29])),
                (k = c(k, O, A, S, g, 14, a[30])),
                (A = f(
                  A,
                  (S = c(S, k, O, A, w, 20, a[31])),
                  k,
                  O,
                  m,
                  4,
                  a[32]
                )),
                (O = f(O, A, S, k, y, 11, a[33])),
                (k = f(k, O, A, S, C, 16, a[34])),
                (S = f(S, k, O, A, F, 23, a[35])),
                (A = f(A, S, k, O, s, 4, a[36])),
                (O = f(O, A, S, k, p, 11, a[37])),
                (k = f(k, O, A, S, g, 16, a[38])),
                (S = f(S, k, O, A, E, 23, a[39])),
                (A = f(A, S, k, O, _, 4, a[40])),
                (O = f(O, A, S, k, u, 11, a[41])),
                (k = f(k, O, A, S, h, 16, a[42])),
                (S = f(S, k, O, A, v, 23, a[43])),
                (A = f(A, S, k, O, b, 4, a[44])),
                (O = f(O, A, S, k, w, 11, a[45])),
                (k = f(k, O, A, S, x, 16, a[46])),
                (A = d(
                  A,
                  (S = f(S, k, O, A, D, 23, a[47])),
                  k,
                  O,
                  u,
                  6,
                  a[48]
                )),
                (O = d(O, A, S, k, g, 10, a[49])),
                (k = d(k, O, A, S, F, 15, a[50])),
                (S = d(S, k, O, A, m, 21, a[51])),
                (A = d(A, S, k, O, w, 6, a[52])),
                (O = d(O, A, S, k, h, 10, a[53])),
                (k = d(k, O, A, S, E, 15, a[54])),
                (S = d(S, k, O, A, s, 21, a[55])),
                (A = d(A, S, k, O, y, 6, a[56])),
                (O = d(O, A, S, k, x, 10, a[57])),
                (k = d(k, O, A, S, v, 15, a[58])),
                (S = d(S, k, O, A, _, 21, a[59])),
                (A = d(A, S, k, O, p, 6, a[60])),
                (O = d(O, A, S, k, C, 10, a[61])),
                (k = d(k, O, A, S, D, 15, a[62])),
                (S = d(S, k, O, A, b, 21, a[63])),
                (i[0] = (i[0] + A) | 0),
                (i[1] = (i[1] + S) | 0),
                (i[2] = (i[2] + k) | 0),
                (i[3] = (i[3] + O) | 0);
            },
            _doFinalize: function () {
              var t = this._data,
                n = t.words,
                r = 8 * this._nDataBytes,
                o = 8 * t.sigBytes;
              n[o >>> 5] |= 128 << (24 - (o % 32));
              var i = e.floor(r / 4294967296),
                u = r;
              (n[15 + (((o + 64) >>> 9) << 4)] =
                (16711935 & ((i << 8) | (i >>> 24))) |
                (4278255360 & ((i << 24) | (i >>> 8)))),
                (n[14 + (((o + 64) >>> 9) << 4)] =
                  (16711935 & ((u << 8) | (u >>> 24))) |
                  (4278255360 & ((u << 24) | (u >>> 8)))),
                (t.sigBytes = 4 * (n.length + 1)),
                this._process();
              for (var a = this._hash, s = a.words, l = 0; l < 4; l++) {
                var c = s[l];
                s[l] =
                  (16711935 & ((c << 8) | (c >>> 24))) |
                  (4278255360 & ((c << 24) | (c >>> 8)));
              }
              return a;
            },
            clone: function () {
              var e = i.clone.call(this);
              return (e._hash = this._hash.clone()), e;
            },
          }));
          function l(e, t, n, r, o, i, u) {
            var a = e + ((t & n) | (~t & r)) + o + u;
            return ((a << i) | (a >>> (32 - i))) + t;
          }
          function c(e, t, n, r, o, i, u) {
            var a = e + ((t & r) | (n & ~r)) + o + u;
            return ((a << i) | (a >>> (32 - i))) + t;
          }
          function f(e, t, n, r, o, i, u) {
            var a = e + (t ^ n ^ r) + o + u;
            return ((a << i) | (a >>> (32 - i))) + t;
          }
          function d(e, t, n, r, o, i, u) {
            var a = e + (n ^ (t | ~r)) + o + u;
            return ((a << i) | (a >>> (32 - i))) + t;
          }
          (t.MD5 = i._createHelper(s)), (t.HmacMD5 = i._createHmacHelper(s));
        })(Math),
        r.MD5);
    },
    7467: function (e, t, n) {
      var r;
      e.exports =
        ((r = n(41577)),
        (function (e) {
          var t = r,
            n = t.lib,
            o = n.WordArray,
            i = n.Hasher,
            u = t.algo,
            a = [],
            s = [];
          !(function () {
            function t(t) {
              for (var n = e.sqrt(t), r = 2; r <= n; r++)
                if (!(t % r)) return !1;
              return !0;
            }
            function n(e) {
              return (4294967296 * (e - (0 | e))) | 0;
            }
            for (var r = 2, o = 0; o < 64; )
              t(r) &&
                (o < 8 && (a[o] = n(e.pow(r, 0.5))),
                (s[o] = n(e.pow(r, 1 / 3))),
                o++),
                r++;
          })();
          var l = [],
            c = (u.SHA256 = i.extend({
              _doReset: function () {
                this._hash = new o.init(a.slice(0));
              },
              _doProcessBlock: function (e, t) {
                for (
                  var n = this._hash.words,
                    r = n[0],
                    o = n[1],
                    i = n[2],
                    u = n[3],
                    a = n[4],
                    c = n[5],
                    f = n[6],
                    d = n[7],
                    D = 0;
                  D < 64;
                  D++
                ) {
                  if (D < 16) l[D] = 0 | e[t + D];
                  else {
                    var h = l[D - 15],
                      p =
                        ((h << 25) | (h >>> 7)) ^
                        ((h << 14) | (h >>> 18)) ^
                        (h >>> 3),
                      m = l[D - 2],
                      v =
                        ((m << 15) | (m >>> 17)) ^
                        ((m << 13) | (m >>> 19)) ^
                        (m >>> 10);
                    l[D] = p + l[D - 7] + v + l[D - 16];
                  }
                  var g = (r & o) ^ (r & i) ^ (o & i),
                    y =
                      ((r << 30) | (r >>> 2)) ^
                      ((r << 19) | (r >>> 13)) ^
                      ((r << 10) | (r >>> 22)),
                    b =
                      d +
                      (((a << 26) | (a >>> 6)) ^
                        ((a << 21) | (a >>> 11)) ^
                        ((a << 7) | (a >>> 25))) +
                      ((a & c) ^ (~a & f)) +
                      s[D] +
                      l[D];
                  (d = f),
                    (f = c),
                    (c = a),
                    (a = (u + b) | 0),
                    (u = i),
                    (i = o),
                    (o = r),
                    (r = (b + (y + g)) | 0);
                }
                (n[0] = (n[0] + r) | 0),
                  (n[1] = (n[1] + o) | 0),
                  (n[2] = (n[2] + i) | 0),
                  (n[3] = (n[3] + u) | 0),
                  (n[4] = (n[4] + a) | 0),
                  (n[5] = (n[5] + c) | 0),
                  (n[6] = (n[6] + f) | 0),
                  (n[7] = (n[7] + d) | 0);
              },
              _doFinalize: function () {
                var t = this._data,
                  n = t.words,
                  r = 8 * this._nDataBytes,
                  o = 8 * t.sigBytes;
                return (
                  (n[o >>> 5] |= 128 << (24 - (o % 32))),
                  (n[14 + (((o + 64) >>> 9) << 4)] = e.floor(r / 4294967296)),
                  (n[15 + (((o + 64) >>> 9) << 4)] = r),
                  (t.sigBytes = 4 * n.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var e = i.clone.call(this);
                return (e._hash = this._hash.clone()), e;
              },
            }));
          (t.SHA256 = i._createHelper(c)),
            (t.HmacSHA256 = i._createHmacHelper(c));
        })(Math),
        r.SHA256);
    },
    52471: (e) => {
      "use strict";
      e.exports = function () {
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
      };
    },
    25773: (e) => {
      "use strict";
      const t = new Set([
        "ENOTFOUND",
        "ENETUNREACH",
        "UNABLE_TO_GET_ISSUER_CERT",
        "UNABLE_TO_GET_CRL",
        "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
        "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
        "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
        "CERT_SIGNATURE_FAILURE",
        "CRL_SIGNATURE_FAILURE",
        "CERT_NOT_YET_VALID",
        "CERT_HAS_EXPIRED",
        "CRL_NOT_YET_VALID",
        "CRL_HAS_EXPIRED",
        "ERROR_IN_CERT_NOT_BEFORE_FIELD",
        "ERROR_IN_CERT_NOT_AFTER_FIELD",
        "ERROR_IN_CRL_LAST_UPDATE_FIELD",
        "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
        "OUT_OF_MEM",
        "DEPTH_ZERO_SELF_SIGNED_CERT",
        "SELF_SIGNED_CERT_IN_CHAIN",
        "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
        "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
        "CERT_CHAIN_TOO_LONG",
        "CERT_REVOKED",
        "INVALID_CA",
        "PATH_LENGTH_EXCEEDED",
        "INVALID_PURPOSE",
        "CERT_UNTRUSTED",
        "CERT_REJECTED",
        "HOSTNAME_MISMATCH",
      ]);
      e.exports = (e) => !t.has(e && e.code);
    },
    25825: (e, t, n) => {
      var r = n(14323),
        o = n(86735),
        i = n(78612),
        u = n(61012),
        a = n(49147);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = u),
        (s.prototype.set = a),
        (e.exports = s);
    },
    91475: (e, t, n) => {
      var r = n(73580),
        o = n(54228),
        i = n(23902),
        u = n(19346),
        a = n(78978);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = u),
        (s.prototype.set = a),
        (e.exports = s);
    },
    55053: (e, t, n) => {
      var r = n(40988)(n(3232), "Map");
      e.exports = r;
    },
    19039: (e, t, n) => {
      var r = n(72724),
        o = n(81220),
        i = n(99314),
        u = n(83877),
        a = n(42738);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = u),
        (s.prototype.set = a),
        (e.exports = s);
    },
    55400: (e, t, n) => {
      var r = n(3232).Symbol;
      e.exports = r;
    },
    68766: (e, t, n) => {
      var r = n(16833);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    64478: (e, t, n) => {
      var r = n(55400),
        o = n(86445),
        i = n(6432),
        u = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : u && u in Object(e)
          ? o(e)
          : i(e);
      };
    },
    44678: (e, t, n) => {
      var r = n(37739),
        o = n(74474),
        i = n(25226),
        u = n(95887),
        a = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        l = Object.prototype,
        c = s.toString,
        f = l.hasOwnProperty,
        d = RegExp(
          "^" +
            c
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!i(e) || o(e)) && (r(e) ? d : a).test(u(e));
      };
    },
    14441: (e, t, n) => {
      var r = n(3232)["__core-js_shared__"];
      e.exports = r;
    },
    12984: (e, t, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    9403: (e, t, n) => {
      var r = n(65087);
      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    40988: (e, t, n) => {
      var r = n(44678),
        o = n(26927);
      e.exports = function (e, t) {
        var n = o(e, t);
        return r(n) ? n : void 0;
      };
    },
    86445: (e, t, n) => {
      var r = n(55400),
        o = Object.prototype,
        i = o.hasOwnProperty,
        u = o.toString,
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, a),
          n = e[a];
        try {
          e[a] = void 0;
          var r = !0;
        } catch (s) {}
        var o = u.call(e);
        return r && (t ? (e[a] = n) : delete e[a]), o;
      };
    },
    26927: (e) => {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    14323: (e, t, n) => {
      var r = n(60972);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    86735: (e) => {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    78612: (e, t, n) => {
      var r = n(60972),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return o.call(t, e) ? t[e] : void 0;
      };
    },
    61012: (e, t, n) => {
      var r = n(60972),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : o.call(t, e);
      };
    },
    49147: (e, t, n) => {
      var r = n(60972);
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    65087: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    74474: (e, t, n) => {
      var r,
        o = n(14441),
        i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      e.exports = function (e) {
        return !!i && i in e;
      };
    },
    73580: (e) => {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    54228: (e, t, n) => {
      var r = n(68766),
        o = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return !(
          n < 0 ||
          (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, 0)
        );
      };
    },
    23902: (e, t, n) => {
      var r = n(68766);
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    19346: (e, t, n) => {
      var r = n(68766);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    78978: (e, t, n) => {
      var r = n(68766);
      e.exports = function (e, t) {
        var n = this.__data__,
          o = r(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
      };
    },
    72724: (e, t, n) => {
      var r = n(25825),
        o = n(91475),
        i = n(55053);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || o)(),
            string: new r(),
          });
      };
    },
    81220: (e, t, n) => {
      var r = n(9403);
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    99314: (e, t, n) => {
      var r = n(9403);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    83877: (e, t, n) => {
      var r = n(9403);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    42738: (e, t, n) => {
      var r = n(9403);
      e.exports = function (e, t) {
        var n = r(this, e),
          o = n.size;
        return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
      };
    },
    60972: (e, t, n) => {
      var r = n(40988)(Object, "create");
      e.exports = r;
    },
    6432: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    3232: (e, t, n) => {
      var r = n(12984),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      e.exports = i;
    },
    95887: (e) => {
      var t = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (n) {}
          try {
            return e + "";
          } catch (n) {}
        }
        return "";
      };
    },
    16833: (e) => {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    37739: (e, t, n) => {
      var r = n(64478),
        o = n(25226);
      e.exports = function (e) {
        if (!o(e)) return !1;
        var t = r(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    25226: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    2627: (e, t, n) => {
      var r = n(19039);
      function o(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(o)) return i.get(o);
          var u = e.apply(this, r);
          return (n.cache = i.set(o, u) || i), u;
        };
        return (n.cache = new (o.Cache || r)()), n;
      }
      (o.Cache = r), (e.exports = o);
    },
    16113: (e, t, n) => {
      "use strict";
      var r = {};
      (0, n(6434).assign)(r, n(82708), n(9980), n(17276)), (e.exports = r);
    },
    82708: (e, t, n) => {
      "use strict";
      var r = n(71610),
        o = n(6434),
        i = n(45944),
        u = n(5818),
        a = n(87856),
        s = Object.prototype.toString;
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        this.options = o.assign(
          {
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: "",
          },
          e || {}
        );
        var t = this.options;
        t.raw && t.windowBits > 0
          ? (t.windowBits = -t.windowBits)
          : t.gzip &&
            t.windowBits > 0 &&
            t.windowBits < 16 &&
            (t.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new a()),
          (this.strm.avail_out = 0);
        var n = r.deflateInit2(
          this.strm,
          t.level,
          t.method,
          t.windowBits,
          t.memLevel,
          t.strategy
        );
        if (0 !== n) throw new Error(u[n]);
        if (
          (t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary)
        ) {
          var c;
          if (
            ((c =
              "string" == typeof t.dictionary
                ? i.string2buf(t.dictionary)
                : "[object ArrayBuffer]" === s.call(t.dictionary)
                ? new Uint8Array(t.dictionary)
                : t.dictionary),
            0 !== (n = r.deflateSetDictionary(this.strm, c)))
          )
            throw new Error(u[n]);
          this._dict_set = !0;
        }
      }
      function c(e, t) {
        var n = new l(t);
        if ((n.push(e, !0), n.err)) throw n.msg || u[n.err];
        return n.result;
      }
      (l.prototype.push = function (e, t) {
        var n,
          u,
          a = this.strm,
          l = this.options.chunkSize;
        if (this.ended) return !1;
        (u = t === ~~t ? t : !0 === t ? 4 : 0),
          "string" == typeof e
            ? (a.input = i.string2buf(e))
            : "[object ArrayBuffer]" === s.call(e)
            ? (a.input = new Uint8Array(e))
            : (a.input = e),
          (a.next_in = 0),
          (a.avail_in = a.input.length);
        do {
          if (
            (0 === a.avail_out &&
              ((a.output = new o.Buf8(l)), (a.next_out = 0), (a.avail_out = l)),
            1 !== (n = r.deflate(a, u)) && 0 !== n)
          )
            return this.onEnd(n), (this.ended = !0), !1;
          (0 !== a.avail_out && (0 !== a.avail_in || (4 !== u && 2 !== u))) ||
            ("string" === this.options.to
              ? this.onData(i.buf2binstring(o.shrinkBuf(a.output, a.next_out)))
              : this.onData(o.shrinkBuf(a.output, a.next_out)));
        } while ((a.avail_in > 0 || 0 === a.avail_out) && 1 !== n);
        return 4 === u
          ? ((n = r.deflateEnd(this.strm)),
            this.onEnd(n),
            (this.ended = !0),
            0 === n)
          : 2 !== u || (this.onEnd(0), (a.avail_out = 0), !0);
      }),
        (l.prototype.onData = function (e) {
          this.chunks.push(e);
        }),
        (l.prototype.onEnd = function (e) {
          0 === e &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = o.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
        }),
        (t.Deflate = l),
        (t.deflate = c),
        (t.deflateRaw = function (e, t) {
          return ((t = t || {}).raw = !0), c(e, t);
        }),
        (t.gzip = function (e, t) {
          return ((t = t || {}).gzip = !0), c(e, t);
        });
    },
    9980: (e, t, n) => {
      "use strict";
      var r = n(30669),
        o = n(6434),
        i = n(45944),
        u = n(17276),
        a = n(5818),
        s = n(87856),
        l = n(86659),
        c = Object.prototype.toString;
      function f(e) {
        if (!(this instanceof f)) return new f(e);
        this.options = o.assign(
          { chunkSize: 16384, windowBits: 0, to: "" },
          e || {}
        );
        var t = this.options;
        t.raw &&
          t.windowBits >= 0 &&
          t.windowBits < 16 &&
          ((t.windowBits = -t.windowBits),
          0 === t.windowBits && (t.windowBits = -15)),
          !(t.windowBits >= 0 && t.windowBits < 16) ||
            (e && e.windowBits) ||
            (t.windowBits += 32),
          t.windowBits > 15 &&
            t.windowBits < 48 &&
            (15 & t.windowBits || (t.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new s()),
          (this.strm.avail_out = 0);
        var n = r.inflateInit2(this.strm, t.windowBits);
        if (n !== u.Z_OK) throw new Error(a[n]);
        if (
          ((this.header = new l()),
          r.inflateGetHeader(this.strm, this.header),
          t.dictionary &&
            ("string" == typeof t.dictionary
              ? (t.dictionary = i.string2buf(t.dictionary))
              : "[object ArrayBuffer]" === c.call(t.dictionary) &&
                (t.dictionary = new Uint8Array(t.dictionary)),
            t.raw &&
              (n = r.inflateSetDictionary(this.strm, t.dictionary)) !== u.Z_OK))
        )
          throw new Error(a[n]);
      }
      function d(e, t) {
        var n = new f(t);
        if ((n.push(e, !0), n.err)) throw n.msg || a[n.err];
        return n.result;
      }
      (f.prototype.push = function (e, t) {
        var n,
          a,
          s,
          l,
          f,
          d = this.strm,
          D = this.options.chunkSize,
          h = this.options.dictionary,
          p = !1;
        if (this.ended) return !1;
        (a = t === ~~t ? t : !0 === t ? u.Z_FINISH : u.Z_NO_FLUSH),
          "string" == typeof e
            ? (d.input = i.binstring2buf(e))
            : "[object ArrayBuffer]" === c.call(e)
            ? (d.input = new Uint8Array(e))
            : (d.input = e),
          (d.next_in = 0),
          (d.avail_in = d.input.length);
        do {
          if (
            (0 === d.avail_out &&
              ((d.output = new o.Buf8(D)), (d.next_out = 0), (d.avail_out = D)),
            (n = r.inflate(d, u.Z_NO_FLUSH)) === u.Z_NEED_DICT &&
              h &&
              (n = r.inflateSetDictionary(this.strm, h)),
            n === u.Z_BUF_ERROR && !0 === p && ((n = u.Z_OK), (p = !1)),
            n !== u.Z_STREAM_END && n !== u.Z_OK)
          )
            return this.onEnd(n), (this.ended = !0), !1;
          d.next_out &&
            ((0 !== d.avail_out &&
              n !== u.Z_STREAM_END &&
              (0 !== d.avail_in ||
                (a !== u.Z_FINISH && a !== u.Z_SYNC_FLUSH))) ||
              ("string" === this.options.to
                ? ((s = i.utf8border(d.output, d.next_out)),
                  (l = d.next_out - s),
                  (f = i.buf2string(d.output, s)),
                  (d.next_out = l),
                  (d.avail_out = D - l),
                  l && o.arraySet(d.output, d.output, s, l, 0),
                  this.onData(f))
                : this.onData(o.shrinkBuf(d.output, d.next_out)))),
            0 === d.avail_in && 0 === d.avail_out && (p = !0);
        } while ((d.avail_in > 0 || 0 === d.avail_out) && n !== u.Z_STREAM_END);
        return (
          n === u.Z_STREAM_END && (a = u.Z_FINISH),
          a === u.Z_FINISH
            ? ((n = r.inflateEnd(this.strm)),
              this.onEnd(n),
              (this.ended = !0),
              n === u.Z_OK)
            : a !== u.Z_SYNC_FLUSH ||
              (this.onEnd(u.Z_OK), (d.avail_out = 0), !0)
        );
      }),
        (f.prototype.onData = function (e) {
          this.chunks.push(e);
        }),
        (f.prototype.onEnd = function (e) {
          e === u.Z_OK &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = o.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
        }),
        (t.Inflate = f),
        (t.inflate = d),
        (t.inflateRaw = function (e, t) {
          return ((t = t || {}).raw = !0), d(e, t);
        }),
        (t.ungzip = d);
    },
    6434: (e, t) => {
      "use strict";
      var n =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Int32Array;
      function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.assign = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
          var n = t.shift();
          if (n) {
            if ("object" != typeof n)
              throw new TypeError(n + "must be non-object");
            for (var o in n) r(n, o) && (e[o] = n[o]);
          }
        }
        return e;
      }),
        (t.shrinkBuf = function (e, t) {
          return e.length === t
            ? e
            : e.subarray
            ? e.subarray(0, t)
            : ((e.length = t), e);
        });
      var o = {
          arraySet: function (e, t, n, r, o) {
            if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), o);
            else for (var i = 0; i < r; i++) e[o + i] = t[n + i];
          },
          flattenChunks: function (e) {
            var t, n, r, o, i, u;
            for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
            for (u = new Uint8Array(r), o = 0, t = 0, n = e.length; t < n; t++)
              (i = e[t]), u.set(i, o), (o += i.length);
            return u;
          },
        },
        i = {
          arraySet: function (e, t, n, r, o) {
            for (var i = 0; i < r; i++) e[o + i] = t[n + i];
          },
          flattenChunks: function (e) {
            return [].concat.apply([], e);
          },
        };
      (t.setTyped = function (e) {
        e
          ? ((t.Buf8 = Uint8Array),
            (t.Buf16 = Uint16Array),
            (t.Buf32 = Int32Array),
            t.assign(t, o))
          : ((t.Buf8 = Array),
            (t.Buf16 = Array),
            (t.Buf32 = Array),
            t.assign(t, i));
      }),
        t.setTyped(n);
    },
    45944: (e, t, n) => {
      "use strict";
      var r = n(6434),
        o = !0,
        i = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (l) {
        o = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (l) {
        i = !1;
      }
      for (var u = new r.Buf8(256), a = 0; a < 256; a++)
        u[a] =
          a >= 252
            ? 6
            : a >= 248
            ? 5
            : a >= 240
            ? 4
            : a >= 224
            ? 3
            : a >= 192
            ? 2
            : 1;
      function s(e, t) {
        if (t < 65534 && ((e.subarray && i) || (!e.subarray && o)))
          return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
        for (var n = "", u = 0; u < t; u++) n += String.fromCharCode(e[u]);
        return n;
      }
      (u[254] = u[254] = 1),
        (t.string2buf = function (e) {
          var t,
            n,
            o,
            i,
            u,
            a = e.length,
            s = 0;
          for (i = 0; i < a; i++)
            55296 == (64512 & (n = e.charCodeAt(i))) &&
              i + 1 < a &&
              56320 == (64512 & (o = e.charCodeAt(i + 1))) &&
              ((n = 65536 + ((n - 55296) << 10) + (o - 56320)), i++),
              (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
          for (t = new r.Buf8(s), u = 0, i = 0; u < s; i++)
            55296 == (64512 & (n = e.charCodeAt(i))) &&
              i + 1 < a &&
              56320 == (64512 & (o = e.charCodeAt(i + 1))) &&
              ((n = 65536 + ((n - 55296) << 10) + (o - 56320)), i++),
              n < 128
                ? (t[u++] = n)
                : n < 2048
                ? ((t[u++] = 192 | (n >>> 6)), (t[u++] = 128 | (63 & n)))
                : n < 65536
                ? ((t[u++] = 224 | (n >>> 12)),
                  (t[u++] = 128 | ((n >>> 6) & 63)),
                  (t[u++] = 128 | (63 & n)))
                : ((t[u++] = 240 | (n >>> 18)),
                  (t[u++] = 128 | ((n >>> 12) & 63)),
                  (t[u++] = 128 | ((n >>> 6) & 63)),
                  (t[u++] = 128 | (63 & n)));
          return t;
        }),
        (t.buf2binstring = function (e) {
          return s(e, e.length);
        }),
        (t.binstring2buf = function (e) {
          for (var t = new r.Buf8(e.length), n = 0, o = t.length; n < o; n++)
            t[n] = e.charCodeAt(n);
          return t;
        }),
        (t.buf2string = function (e, t) {
          var n,
            r,
            o,
            i,
            a = t || e.length,
            l = new Array(2 * a);
          for (r = 0, n = 0; n < a; )
            if ((o = e[n++]) < 128) l[r++] = o;
            else if ((i = u[o]) > 4) (l[r++] = 65533), (n += i - 1);
            else {
              for (o &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && n < a; )
                (o = (o << 6) | (63 & e[n++])), i--;
              i > 1
                ? (l[r++] = 65533)
                : o < 65536
                ? (l[r++] = o)
                : ((o -= 65536),
                  (l[r++] = 55296 | ((o >> 10) & 1023)),
                  (l[r++] = 56320 | (1023 & o)));
            }
          return s(l, r);
        }),
        (t.utf8border = function (e, t) {
          var n;
          for (
            (t = t || e.length) > e.length && (t = e.length), n = t - 1;
            n >= 0 && 128 == (192 & e[n]);

          )
            n--;
          return n < 0 || 0 === n ? t : n + u[e[n]] > t ? n : t;
        });
    },
    16529: (e) => {
      "use strict";
      e.exports = function (e, t, n, r) {
        for (var o = 65535 & e, i = (e >>> 16) & 65535, u = 0; 0 !== n; ) {
          n -= u = n > 2e3 ? 2e3 : n;
          do {
            i = (i + (o = (o + t[r++]) | 0)) | 0;
          } while (--u);
          (o %= 65521), (i %= 65521);
        }
        return o | (i << 16);
      };
    },
    17276: (e) => {
      "use strict";
      e.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    },
    82465: (e) => {
      "use strict";
      var t = (function () {
        for (var e, t = [], n = 0; n < 256; n++) {
          e = n;
          for (var r = 0; r < 8; r++)
            e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
          t[n] = e;
        }
        return t;
      })();
      e.exports = function (e, n, r, o) {
        var i = t,
          u = o + r;
        e ^= -1;
        for (var a = o; a < u; a++) e = (e >>> 8) ^ i[255 & (e ^ n[a])];
        return ~e;
      };
    },
    71610: (e, t, n) => {
      "use strict";
      var r,
        o = n(6434),
        i = n(17223),
        u = n(16529),
        a = n(82465),
        s = n(5818),
        l = -2,
        c = 258,
        f = 262,
        d = 103,
        D = 113,
        h = 666;
      function p(e, t) {
        return (e.msg = s[t]), t;
      }
      function m(e) {
        return (e << 1) - (e > 4 ? 9 : 0);
      }
      function v(e) {
        for (var t = e.length; --t >= 0; ) e[t] = 0;
      }
      function g(e) {
        var t = e.state,
          n = t.pending;
        n > e.avail_out && (n = e.avail_out),
          0 !== n &&
            (o.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
            (e.next_out += n),
            (t.pending_out += n),
            (e.total_out += n),
            (e.avail_out -= n),
            (t.pending -= n),
            0 === t.pending && (t.pending_out = 0));
      }
      function y(e, t) {
        i._tr_flush_block(
          e,
          e.block_start >= 0 ? e.block_start : -1,
          e.strstart - e.block_start,
          t
        ),
          (e.block_start = e.strstart),
          g(e.strm);
      }
      function b(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function E(e, t) {
        (e.pending_buf[e.pending++] = (t >>> 8) & 255),
          (e.pending_buf[e.pending++] = 255 & t);
      }
      function C(e, t) {
        var n,
          r,
          o = e.max_chain_length,
          i = e.strstart,
          u = e.prev_length,
          a = e.nice_match,
          s = e.strstart > e.w_size - f ? e.strstart - (e.w_size - f) : 0,
          l = e.window,
          d = e.w_mask,
          D = e.prev,
          h = e.strstart + c,
          p = l[i + u - 1],
          m = l[i + u];
        e.prev_length >= e.good_match && (o >>= 2),
          a > e.lookahead && (a = e.lookahead);
        do {
          if (
            l[(n = t) + u] === m &&
            l[n + u - 1] === p &&
            l[n] === l[i] &&
            l[++n] === l[i + 1]
          ) {
            (i += 2), n++;
            do {} while (
              l[++i] === l[++n] &&
              l[++i] === l[++n] &&
              l[++i] === l[++n] &&
              l[++i] === l[++n] &&
              l[++i] === l[++n] &&
              l[++i] === l[++n] &&
              l[++i] === l[++n] &&
              l[++i] === l[++n] &&
              i < h
            );
            if (((r = c - (h - i)), (i = h - c), r > u)) {
              if (((e.match_start = t), (u = r), r >= a)) break;
              (p = l[i + u - 1]), (m = l[i + u]);
            }
          }
        } while ((t = D[t & d]) > s && 0 != --o);
        return u <= e.lookahead ? u : e.lookahead;
      }
      function w(e) {
        var t,
          n,
          r,
          i,
          s,
          l,
          c,
          d,
          D,
          h,
          p = e.w_size;
        do {
          if (
            ((i = e.window_size - e.lookahead - e.strstart),
            e.strstart >= p + (p - f))
          ) {
            o.arraySet(e.window, e.window, p, p, 0),
              (e.match_start -= p),
              (e.strstart -= p),
              (e.block_start -= p),
              (t = n = e.hash_size);
            do {
              (r = e.head[--t]), (e.head[t] = r >= p ? r - p : 0);
            } while (--n);
            t = n = p;
            do {
              (r = e.prev[--t]), (e.prev[t] = r >= p ? r - p : 0);
            } while (--n);
            i += p;
          }
          if (0 === e.strm.avail_in) break;
          if (
            ((l = e.strm),
            (c = e.window),
            (d = e.strstart + e.lookahead),
            (D = i),
            (h = void 0),
            (h = l.avail_in) > D && (h = D),
            (n =
              0 === h
                ? 0
                : ((l.avail_in -= h),
                  o.arraySet(c, l.input, l.next_in, h, d),
                  1 === l.state.wrap
                    ? (l.adler = u(l.adler, c, h, d))
                    : 2 === l.state.wrap && (l.adler = a(l.adler, c, h, d)),
                  (l.next_in += h),
                  (l.total_in += h),
                  h)),
            (e.lookahead += n),
            e.lookahead + e.insert >= 3)
          )
            for (
              s = e.strstart - e.insert,
                e.ins_h = e.window[s],
                e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[s + 1]) & e.hash_mask;
              e.insert &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[s + 3 - 1]) &
                e.hash_mask),
              (e.prev[s & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = s),
              s++,
              e.insert--,
              !(e.lookahead + e.insert < 3));

            );
        } while (e.lookahead < f && 0 !== e.strm.avail_in);
      }
      function _(e, t) {
        for (var n, r; ; ) {
          if (e.lookahead < f) {
            if ((w(e), e.lookahead < f && 0 === t)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((n = 0),
            e.lookahead >= 3 &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
                e.hash_mask),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            0 !== n &&
              e.strstart - n <= e.w_size - f &&
              (e.match_length = C(e, n)),
            e.match_length >= 3)
          )
            if (
              ((r = i._tr_tally(
                e,
                e.strstart - e.match_start,
                e.match_length - 3
              )),
              (e.lookahead -= e.match_length),
              e.match_length <= e.max_lazy_match && e.lookahead >= 3)
            ) {
              e.match_length--;
              do {
                e.strstart++,
                  (e.ins_h =
                    ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
                    e.hash_mask),
                  (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                  (e.head[e.ins_h] = e.strstart);
              } while (0 != --e.match_length);
              e.strstart++;
            } else
              (e.strstart += e.match_length),
                (e.match_length = 0),
                (e.ins_h = e.window[e.strstart]),
                (e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
                  e.hash_mask);
          else
            (r = i._tr_tally(e, 0, e.window[e.strstart])),
              e.lookahead--,
              e.strstart++;
          if (r && (y(e, !1), 0 === e.strm.avail_out)) return 1;
        }
        return (
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          4 === t
            ? (y(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (y(e, !1), 0 === e.strm.avail_out)
            ? 1
            : 2
        );
      }
      function F(e, t) {
        for (var n, r, o; ; ) {
          if (e.lookahead < f) {
            if ((w(e), e.lookahead < f && 0 === t)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((n = 0),
            e.lookahead >= 3 &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
                e.hash_mask),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = 2),
            0 !== n &&
              e.prev_length < e.max_lazy_match &&
              e.strstart - n <= e.w_size - f &&
              ((e.match_length = C(e, n)),
              e.match_length <= 5 &&
                (1 === e.strategy ||
                  (3 === e.match_length &&
                    e.strstart - e.match_start > 4096)) &&
                (e.match_length = 2)),
            e.prev_length >= 3 && e.match_length <= e.prev_length)
          ) {
            (o = e.strstart + e.lookahead - 3),
              (r = i._tr_tally(
                e,
                e.strstart - 1 - e.prev_match,
                e.prev_length - 3
              )),
              (e.lookahead -= e.prev_length - 1),
              (e.prev_length -= 2);
            do {
              ++e.strstart <= o &&
                ((e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
                  e.hash_mask),
                (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart));
            } while (0 != --e.prev_length);
            if (
              ((e.match_available = 0),
              (e.match_length = 2),
              e.strstart++,
              r && (y(e, !1), 0 === e.strm.avail_out))
            )
              return 1;
          } else if (e.match_available) {
            if (
              ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])) && y(e, !1),
              e.strstart++,
              e.lookahead--,
              0 === e.strm.avail_out)
            )
              return 1;
          } else (e.match_available = 1), e.strstart++, e.lookahead--;
        }
        return (
          e.match_available &&
            ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])),
            (e.match_available = 0)),
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          4 === t
            ? (y(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (y(e, !1), 0 === e.strm.avail_out)
            ? 1
            : 2
        );
      }
      function x(e, t, n, r, o) {
        (this.good_length = e),
          (this.max_lazy = t),
          (this.nice_length = n),
          (this.max_chain = r),
          (this.func = o);
      }
      function A() {
        (this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = 8),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new o.Buf16(1146)),
          (this.dyn_dtree = new o.Buf16(122)),
          (this.bl_tree = new o.Buf16(78)),
          v(this.dyn_ltree),
          v(this.dyn_dtree),
          v(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new o.Buf16(16)),
          (this.heap = new o.Buf16(573)),
          v(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new o.Buf16(573)),
          v(this.depth),
          (this.l_buf = 0),
          (this.lit_bufsize = 0),
          (this.last_lit = 0),
          (this.d_buf = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0);
      }
      function S(e) {
        var t;
        return e && e.state
          ? ((e.total_in = e.total_out = 0),
            (e.data_type = 2),
            ((t = e.state).pending = 0),
            (t.pending_out = 0),
            t.wrap < 0 && (t.wrap = -t.wrap),
            (t.status = t.wrap ? 42 : D),
            (e.adler = 2 === t.wrap ? 0 : 1),
            (t.last_flush = 0),
            i._tr_init(t),
            0)
          : p(e, l);
      }
      function k(e) {
        var t,
          n = S(e);
        return (
          0 === n &&
            (((t = e.state).window_size = 2 * t.w_size),
            v(t.head),
            (t.max_lazy_match = r[t.level].max_lazy),
            (t.good_match = r[t.level].good_length),
            (t.nice_match = r[t.level].nice_length),
            (t.max_chain_length = r[t.level].max_chain),
            (t.strstart = 0),
            (t.block_start = 0),
            (t.lookahead = 0),
            (t.insert = 0),
            (t.match_length = t.prev_length = 2),
            (t.match_available = 0),
            (t.ins_h = 0)),
          n
        );
      }
      function O(e, t, n, r, i, u) {
        if (!e) return l;
        var a = 1;
        if (
          (-1 === t && (t = 6),
          r < 0 ? ((a = 0), (r = -r)) : r > 15 && ((a = 2), (r -= 16)),
          i < 1 ||
            i > 9 ||
            8 !== n ||
            r < 8 ||
            r > 15 ||
            t < 0 ||
            t > 9 ||
            u < 0 ||
            u > 4)
        )
          return p(e, l);
        8 === r && (r = 9);
        var s = new A();
        return (
          (e.state = s),
          (s.strm = e),
          (s.wrap = a),
          (s.gzhead = null),
          (s.w_bits = r),
          (s.w_size = 1 << s.w_bits),
          (s.w_mask = s.w_size - 1),
          (s.hash_bits = i + 7),
          (s.hash_size = 1 << s.hash_bits),
          (s.hash_mask = s.hash_size - 1),
          (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
          (s.window = new o.Buf8(2 * s.w_size)),
          (s.head = new o.Buf16(s.hash_size)),
          (s.prev = new o.Buf16(s.w_size)),
          (s.lit_bufsize = 1 << (i + 6)),
          (s.pending_buf_size = 4 * s.lit_bufsize),
          (s.pending_buf = new o.Buf8(s.pending_buf_size)),
          (s.d_buf = 1 * s.lit_bufsize),
          (s.l_buf = 3 * s.lit_bufsize),
          (s.level = t),
          (s.strategy = u),
          (s.method = n),
          k(e)
        );
      }
      (r = [
        new x(0, 0, 0, 0, function (e, t) {
          var n = 65535;
          for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
              if ((w(e), 0 === e.lookahead && 0 === t)) return 1;
              if (0 === e.lookahead) break;
            }
            (e.strstart += e.lookahead), (e.lookahead = 0);
            var r = e.block_start + n;
            if (
              (0 === e.strstart || e.strstart >= r) &&
              ((e.lookahead = e.strstart - r),
              (e.strstart = r),
              y(e, !1),
              0 === e.strm.avail_out)
            )
              return 1;
            if (
              e.strstart - e.block_start >= e.w_size - f &&
              (y(e, !1), 0 === e.strm.avail_out)
            )
              return 1;
          }
          return (
            (e.insert = 0),
            4 === t
              ? (y(e, !0), 0 === e.strm.avail_out ? 3 : 4)
              : (e.strstart > e.block_start && (y(e, !1), e.strm.avail_out), 1)
          );
        }),
        new x(4, 4, 8, 4, _),
        new x(4, 5, 16, 8, _),
        new x(4, 6, 32, 32, _),
        new x(4, 4, 16, 16, F),
        new x(8, 16, 32, 32, F),
        new x(8, 16, 128, 128, F),
        new x(8, 32, 128, 256, F),
        new x(32, 128, 258, 1024, F),
        new x(32, 258, 258, 4096, F),
      ]),
        (t.deflateInit = function (e, t) {
          return O(e, t, 8, 15, 8, 0);
        }),
        (t.deflateInit2 = O),
        (t.deflateReset = k),
        (t.deflateResetKeep = S),
        (t.deflateSetHeader = function (e, t) {
          return e && e.state
            ? 2 !== e.state.wrap
              ? l
              : ((e.state.gzhead = t), 0)
            : l;
        }),
        (t.deflate = function (e, t) {
          var n, o, u, s;
          if (!e || !e.state || t > 5 || t < 0) return e ? p(e, l) : l;
          if (
            ((o = e.state),
            !e.output ||
              (!e.input && 0 !== e.avail_in) ||
              (o.status === h && 4 !== t))
          )
            return p(e, 0 === e.avail_out ? -5 : l);
          if (
            ((o.strm = e),
            (n = o.last_flush),
            (o.last_flush = t),
            42 === o.status)
          )
            if (2 === o.wrap)
              (e.adler = 0),
                b(o, 31),
                b(o, 139),
                b(o, 8),
                o.gzhead
                  ? (b(
                      o,
                      (o.gzhead.text ? 1 : 0) +
                        (o.gzhead.hcrc ? 2 : 0) +
                        (o.gzhead.extra ? 4 : 0) +
                        (o.gzhead.name ? 8 : 0) +
                        (o.gzhead.comment ? 16 : 0)
                    ),
                    b(o, 255 & o.gzhead.time),
                    b(o, (o.gzhead.time >> 8) & 255),
                    b(o, (o.gzhead.time >> 16) & 255),
                    b(o, (o.gzhead.time >> 24) & 255),
                    b(
                      o,
                      9 === o.level ? 2 : o.strategy >= 2 || o.level < 2 ? 4 : 0
                    ),
                    b(o, 255 & o.gzhead.os),
                    o.gzhead.extra &&
                      o.gzhead.extra.length &&
                      (b(o, 255 & o.gzhead.extra.length),
                      b(o, (o.gzhead.extra.length >> 8) & 255)),
                    o.gzhead.hcrc &&
                      (e.adler = a(e.adler, o.pending_buf, o.pending, 0)),
                    (o.gzindex = 0),
                    (o.status = 69))
                  : (b(o, 0),
                    b(o, 0),
                    b(o, 0),
                    b(o, 0),
                    b(o, 0),
                    b(
                      o,
                      9 === o.level ? 2 : o.strategy >= 2 || o.level < 2 ? 4 : 0
                    ),
                    b(o, 3),
                    (o.status = D));
            else {
              var f = (8 + ((o.w_bits - 8) << 4)) << 8;
              (f |=
                (o.strategy >= 2 || o.level < 2
                  ? 0
                  : o.level < 6
                  ? 1
                  : 6 === o.level
                  ? 2
                  : 3) << 6),
                0 !== o.strstart && (f |= 32),
                (f += 31 - (f % 31)),
                (o.status = D),
                E(o, f),
                0 !== o.strstart &&
                  (E(o, e.adler >>> 16), E(o, 65535 & e.adler)),
                (e.adler = 1);
            }
          if (69 === o.status)
            if (o.gzhead.extra) {
              for (
                u = o.pending;
                o.gzindex < (65535 & o.gzhead.extra.length) &&
                (o.pending !== o.pending_buf_size ||
                  (o.gzhead.hcrc &&
                    o.pending > u &&
                    (e.adler = a(e.adler, o.pending_buf, o.pending - u, u)),
                  g(e),
                  (u = o.pending),
                  o.pending !== o.pending_buf_size));

              )
                b(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
              o.gzhead.hcrc &&
                o.pending > u &&
                (e.adler = a(e.adler, o.pending_buf, o.pending - u, u)),
                o.gzindex === o.gzhead.extra.length &&
                  ((o.gzindex = 0), (o.status = 73));
            } else o.status = 73;
          if (73 === o.status)
            if (o.gzhead.name) {
              u = o.pending;
              do {
                if (
                  o.pending === o.pending_buf_size &&
                  (o.gzhead.hcrc &&
                    o.pending > u &&
                    (e.adler = a(e.adler, o.pending_buf, o.pending - u, u)),
                  g(e),
                  (u = o.pending),
                  o.pending === o.pending_buf_size)
                ) {
                  s = 1;
                  break;
                }
                (s =
                  o.gzindex < o.gzhead.name.length
                    ? 255 & o.gzhead.name.charCodeAt(o.gzindex++)
                    : 0),
                  b(o, s);
              } while (0 !== s);
              o.gzhead.hcrc &&
                o.pending > u &&
                (e.adler = a(e.adler, o.pending_buf, o.pending - u, u)),
                0 === s && ((o.gzindex = 0), (o.status = 91));
            } else o.status = 91;
          if (91 === o.status)
            if (o.gzhead.comment) {
              u = o.pending;
              do {
                if (
                  o.pending === o.pending_buf_size &&
                  (o.gzhead.hcrc &&
                    o.pending > u &&
                    (e.adler = a(e.adler, o.pending_buf, o.pending - u, u)),
                  g(e),
                  (u = o.pending),
                  o.pending === o.pending_buf_size)
                ) {
                  s = 1;
                  break;
                }
                (s =
                  o.gzindex < o.gzhead.comment.length
                    ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++)
                    : 0),
                  b(o, s);
              } while (0 !== s);
              o.gzhead.hcrc &&
                o.pending > u &&
                (e.adler = a(e.adler, o.pending_buf, o.pending - u, u)),
                0 === s && (o.status = d);
            } else o.status = d;
          if (
            (o.status === d &&
              (o.gzhead.hcrc
                ? (o.pending + 2 > o.pending_buf_size && g(e),
                  o.pending + 2 <= o.pending_buf_size &&
                    (b(o, 255 & e.adler),
                    b(o, (e.adler >> 8) & 255),
                    (e.adler = 0),
                    (o.status = D)))
                : (o.status = D)),
            0 !== o.pending)
          ) {
            if ((g(e), 0 === e.avail_out)) return (o.last_flush = -1), 0;
          } else if (0 === e.avail_in && m(t) <= m(n) && 4 !== t)
            return p(e, -5);
          if (o.status === h && 0 !== e.avail_in) return p(e, -5);
          if (
            0 !== e.avail_in ||
            0 !== o.lookahead ||
            (0 !== t && o.status !== h)
          ) {
            var C =
              2 === o.strategy
                ? (function (e, t) {
                    for (var n; ; ) {
                      if (0 === e.lookahead && (w(e), 0 === e.lookahead)) {
                        if (0 === t) return 1;
                        break;
                      }
                      if (
                        ((e.match_length = 0),
                        (n = i._tr_tally(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++,
                        n && (y(e, !1), 0 === e.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (e.insert = 0),
                      4 === t
                        ? (y(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                        : e.last_lit && (y(e, !1), 0 === e.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(o, t)
                : 3 === o.strategy
                ? (function (e, t) {
                    for (var n, r, o, u, a = e.window; ; ) {
                      if (e.lookahead <= c) {
                        if ((w(e), e.lookahead <= c && 0 === t)) return 1;
                        if (0 === e.lookahead) break;
                      }
                      if (
                        ((e.match_length = 0),
                        e.lookahead >= 3 &&
                          e.strstart > 0 &&
                          (r = a[(o = e.strstart - 1)]) === a[++o] &&
                          r === a[++o] &&
                          r === a[++o])
                      ) {
                        u = e.strstart + c;
                        do {} while (
                          r === a[++o] &&
                          r === a[++o] &&
                          r === a[++o] &&
                          r === a[++o] &&
                          r === a[++o] &&
                          r === a[++o] &&
                          r === a[++o] &&
                          r === a[++o] &&
                          o < u
                        );
                        (e.match_length = c - (u - o)),
                          e.match_length > e.lookahead &&
                            (e.match_length = e.lookahead);
                      }
                      if (
                        (e.match_length >= 3
                          ? ((n = i._tr_tally(e, 1, e.match_length - 3)),
                            (e.lookahead -= e.match_length),
                            (e.strstart += e.match_length),
                            (e.match_length = 0))
                          : ((n = i._tr_tally(e, 0, e.window[e.strstart])),
                            e.lookahead--,
                            e.strstart++),
                        n && (y(e, !1), 0 === e.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (e.insert = 0),
                      4 === t
                        ? (y(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                        : e.last_lit && (y(e, !1), 0 === e.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(o, t)
                : r[o.level].func(o, t);
            if (((3 !== C && 4 !== C) || (o.status = h), 1 === C || 3 === C))
              return 0 === e.avail_out && (o.last_flush = -1), 0;
            if (
              2 === C &&
              (1 === t
                ? i._tr_align(o)
                : 5 !== t &&
                  (i._tr_stored_block(o, 0, 0, !1),
                  3 === t &&
                    (v(o.head),
                    0 === o.lookahead &&
                      ((o.strstart = 0), (o.block_start = 0), (o.insert = 0)))),
              g(e),
              0 === e.avail_out)
            )
              return (o.last_flush = -1), 0;
          }
          return 4 !== t
            ? 0
            : o.wrap <= 0
            ? 1
            : (2 === o.wrap
                ? (b(o, 255 & e.adler),
                  b(o, (e.adler >> 8) & 255),
                  b(o, (e.adler >> 16) & 255),
                  b(o, (e.adler >> 24) & 255),
                  b(o, 255 & e.total_in),
                  b(o, (e.total_in >> 8) & 255),
                  b(o, (e.total_in >> 16) & 255),
                  b(o, (e.total_in >> 24) & 255))
                : (E(o, e.adler >>> 16), E(o, 65535 & e.adler)),
              g(e),
              o.wrap > 0 && (o.wrap = -o.wrap),
              0 !== o.pending ? 0 : 1);
        }),
        (t.deflateEnd = function (e) {
          var t;
          return e && e.state
            ? 42 !== (t = e.state.status) &&
              69 !== t &&
              73 !== t &&
              91 !== t &&
              t !== d &&
              t !== D &&
              t !== h
              ? p(e, l)
              : ((e.state = null), t === D ? p(e, -3) : 0)
            : l;
        }),
        (t.deflateSetDictionary = function (e, t) {
          var n,
            r,
            i,
            a,
            s,
            c,
            f,
            d,
            D = t.length;
          if (!e || !e.state) return l;
          if (
            2 === (a = (n = e.state).wrap) ||
            (1 === a && 42 !== n.status) ||
            n.lookahead
          )
            return l;
          for (
            1 === a && (e.adler = u(e.adler, t, D, 0)),
              n.wrap = 0,
              D >= n.w_size &&
                (0 === a &&
                  (v(n.head),
                  (n.strstart = 0),
                  (n.block_start = 0),
                  (n.insert = 0)),
                (d = new o.Buf8(n.w_size)),
                o.arraySet(d, t, D - n.w_size, n.w_size, 0),
                (t = d),
                (D = n.w_size)),
              s = e.avail_in,
              c = e.next_in,
              f = e.input,
              e.avail_in = D,
              e.next_in = 0,
              e.input = t,
              w(n);
            n.lookahead >= 3;

          ) {
            (r = n.strstart), (i = n.lookahead - 2);
            do {
              (n.ins_h =
                ((n.ins_h << n.hash_shift) ^ n.window[r + 3 - 1]) &
                n.hash_mask),
                (n.prev[r & n.w_mask] = n.head[n.ins_h]),
                (n.head[n.ins_h] = r),
                r++;
            } while (--i);
            (n.strstart = r), (n.lookahead = 2), w(n);
          }
          return (
            (n.strstart += n.lookahead),
            (n.block_start = n.strstart),
            (n.insert = n.lookahead),
            (n.lookahead = 0),
            (n.match_length = n.prev_length = 2),
            (n.match_available = 0),
            (e.next_in = c),
            (e.input = f),
            (e.avail_in = s),
            (n.wrap = a),
            0
          );
        }),
        (t.deflateInfo = "pako deflate (from Nodeca project)");
    },
    86659: (e) => {
      "use strict";
      e.exports = function () {
        (this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1);
      };
    },
    19433: (e) => {
      "use strict";
      e.exports = function (e, t) {
        var n,
          r,
          o,
          i,
          u,
          a,
          s,
          l,
          c,
          f,
          d,
          D,
          h,
          p,
          m,
          v,
          g,
          y,
          b,
          E,
          C,
          w,
          _,
          F,
          x;
        (n = e.state),
          (r = e.next_in),
          (F = e.input),
          (o = r + (e.avail_in - 5)),
          (i = e.next_out),
          (x = e.output),
          (u = i - (t - e.avail_out)),
          (a = i + (e.avail_out - 257)),
          (s = n.dmax),
          (l = n.wsize),
          (c = n.whave),
          (f = n.wnext),
          (d = n.window),
          (D = n.hold),
          (h = n.bits),
          (p = n.lencode),
          (m = n.distcode),
          (v = (1 << n.lenbits) - 1),
          (g = (1 << n.distbits) - 1);
        e: do {
          h < 15 &&
            ((D += F[r++] << h), (h += 8), (D += F[r++] << h), (h += 8)),
            (y = p[D & v]);
          t: for (;;) {
            if (((D >>>= b = y >>> 24), (h -= b), 0 == (b = (y >>> 16) & 255)))
              x[i++] = 65535 & y;
            else {
              if (!(16 & b)) {
                if (64 & b) {
                  if (32 & b) {
                    n.mode = 12;
                    break e;
                  }
                  (e.msg = "invalid literal/length code"), (n.mode = 30);
                  break e;
                }
                y = p[(65535 & y) + (D & ((1 << b) - 1))];
                continue t;
              }
              for (
                E = 65535 & y,
                  (b &= 15) &&
                    (h < b && ((D += F[r++] << h), (h += 8)),
                    (E += D & ((1 << b) - 1)),
                    (D >>>= b),
                    (h -= b)),
                  h < 15 &&
                    ((D += F[r++] << h),
                    (h += 8),
                    (D += F[r++] << h),
                    (h += 8)),
                  y = m[D & g];
                ;

              ) {
                if (
                  ((D >>>= b = y >>> 24), (h -= b), 16 & (b = (y >>> 16) & 255))
                ) {
                  if (
                    ((C = 65535 & y),
                    h < (b &= 15) &&
                      ((D += F[r++] << h),
                      (h += 8) < b && ((D += F[r++] << h), (h += 8))),
                    (C += D & ((1 << b) - 1)) > s)
                  ) {
                    (e.msg = "invalid distance too far back"), (n.mode = 30);
                    break e;
                  }
                  if (((D >>>= b), (h -= b), C > (b = i - u))) {
                    if ((b = C - b) > c && n.sane) {
                      (e.msg = "invalid distance too far back"), (n.mode = 30);
                      break e;
                    }
                    if (((w = 0), (_ = d), 0 === f)) {
                      if (((w += l - b), b < E)) {
                        E -= b;
                        do {
                          x[i++] = d[w++];
                        } while (--b);
                        (w = i - C), (_ = x);
                      }
                    } else if (f < b) {
                      if (((w += l + f - b), (b -= f) < E)) {
                        E -= b;
                        do {
                          x[i++] = d[w++];
                        } while (--b);
                        if (((w = 0), f < E)) {
                          E -= b = f;
                          do {
                            x[i++] = d[w++];
                          } while (--b);
                          (w = i - C), (_ = x);
                        }
                      }
                    } else if (((w += f - b), b < E)) {
                      E -= b;
                      do {
                        x[i++] = d[w++];
                      } while (--b);
                      (w = i - C), (_ = x);
                    }
                    for (; E > 2; )
                      (x[i++] = _[w++]),
                        (x[i++] = _[w++]),
                        (x[i++] = _[w++]),
                        (E -= 3);
                    E && ((x[i++] = _[w++]), E > 1 && (x[i++] = _[w++]));
                  } else {
                    w = i - C;
                    do {
                      (x[i++] = x[w++]),
                        (x[i++] = x[w++]),
                        (x[i++] = x[w++]),
                        (E -= 3);
                    } while (E > 2);
                    E && ((x[i++] = x[w++]), E > 1 && (x[i++] = x[w++]));
                  }
                  break;
                }
                if (64 & b) {
                  (e.msg = "invalid distance code"), (n.mode = 30);
                  break e;
                }
                y = m[(65535 & y) + (D & ((1 << b) - 1))];
              }
            }
            break;
          }
        } while (r < o && i < a);
        (r -= E = h >> 3),
          (D &= (1 << (h -= E << 3)) - 1),
          (e.next_in = r),
          (e.next_out = i),
          (e.avail_in = r < o ? o - r + 5 : 5 - (r - o)),
          (e.avail_out = i < a ? a - i + 257 : 257 - (i - a)),
          (n.hold = D),
          (n.bits = h);
      };
    },
    30669: (e, t, n) => {
      "use strict";
      var r = n(6434),
        o = n(16529),
        i = n(82465),
        u = n(19433),
        a = n(27652),
        s = -2,
        l = 12,
        c = 30;
      function f(e) {
        return (
          ((e >>> 24) & 255) +
          ((e >>> 8) & 65280) +
          ((65280 & e) << 8) +
          ((255 & e) << 24)
        );
      }
      function d() {
        (this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new r.Buf16(320)),
          (this.work = new r.Buf16(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0);
      }
      function D(e) {
        var t;
        return e && e.state
          ? ((t = e.state),
            (e.total_in = e.total_out = t.total = 0),
            (e.msg = ""),
            t.wrap && (e.adler = 1 & t.wrap),
            (t.mode = 1),
            (t.last = 0),
            (t.havedict = 0),
            (t.dmax = 32768),
            (t.head = null),
            (t.hold = 0),
            (t.bits = 0),
            (t.lencode = t.lendyn = new r.Buf32(852)),
            (t.distcode = t.distdyn = new r.Buf32(592)),
            (t.sane = 1),
            (t.back = -1),
            0)
          : s;
      }
      function h(e) {
        var t;
        return e && e.state
          ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), D(e))
          : s;
      }
      function p(e, t) {
        var n, r;
        return e && e.state
          ? ((r = e.state),
            t < 0
              ? ((n = 0), (t = -t))
              : ((n = 1 + (t >> 4)), t < 48 && (t &= 15)),
            t && (t < 8 || t > 15)
              ? s
              : (null !== r.window && r.wbits !== t && (r.window = null),
                (r.wrap = n),
                (r.wbits = t),
                h(e)))
          : s;
      }
      function m(e, t) {
        var n, r;
        return e
          ? ((r = new d()),
            (e.state = r),
            (r.window = null),
            0 !== (n = p(e, t)) && (e.state = null),
            n)
          : s;
      }
      var v,
        g,
        y = !0;
      function b(e) {
        if (y) {
          var t;
          for (v = new r.Buf32(512), g = new r.Buf32(32), t = 0; t < 144; )
            e.lens[t++] = 8;
          for (; t < 256; ) e.lens[t++] = 9;
          for (; t < 280; ) e.lens[t++] = 7;
          for (; t < 288; ) e.lens[t++] = 8;
          for (a(1, e.lens, 0, 288, v, 0, e.work, { bits: 9 }), t = 0; t < 32; )
            e.lens[t++] = 5;
          a(2, e.lens, 0, 32, g, 0, e.work, { bits: 5 }), (y = !1);
        }
        (e.lencode = v), (e.lenbits = 9), (e.distcode = g), (e.distbits = 5);
      }
      function E(e, t, n, o) {
        var i,
          u = e.state;
        return (
          null === u.window &&
            ((u.wsize = 1 << u.wbits),
            (u.wnext = 0),
            (u.whave = 0),
            (u.window = new r.Buf8(u.wsize))),
          o >= u.wsize
            ? (r.arraySet(u.window, t, n - u.wsize, u.wsize, 0),
              (u.wnext = 0),
              (u.whave = u.wsize))
            : ((i = u.wsize - u.wnext) > o && (i = o),
              r.arraySet(u.window, t, n - o, i, u.wnext),
              (o -= i)
                ? (r.arraySet(u.window, t, n - o, o, 0),
                  (u.wnext = o),
                  (u.whave = u.wsize))
                : ((u.wnext += i),
                  u.wnext === u.wsize && (u.wnext = 0),
                  u.whave < u.wsize && (u.whave += i))),
          0
        );
      }
      (t.inflateReset = h),
        (t.inflateReset2 = p),
        (t.inflateResetKeep = D),
        (t.inflateInit = function (e) {
          return m(e, 15);
        }),
        (t.inflateInit2 = m),
        (t.inflate = function (e, t) {
          var n,
            d,
            D,
            h,
            p,
            m,
            v,
            g,
            y,
            C,
            w,
            _,
            F,
            x,
            A,
            S,
            k,
            O,
            B,
            R,
            P,
            T,
            N,
            I,
            j = 0,
            L = new r.Buf8(4),
            M = [
              16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
            ];
          if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in))
            return s;
          (n = e.state).mode === l && (n.mode = 13),
            (p = e.next_out),
            (D = e.output),
            (v = e.avail_out),
            (h = e.next_in),
            (d = e.input),
            (m = e.avail_in),
            (g = n.hold),
            (y = n.bits),
            (C = m),
            (w = v),
            (T = 0);
          e: for (;;)
            switch (n.mode) {
              case 1:
                if (0 === n.wrap) {
                  n.mode = 13;
                  break;
                }
                for (; y < 16; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                if (2 & n.wrap && 35615 === g) {
                  (n.check = 0),
                    (L[0] = 255 & g),
                    (L[1] = (g >>> 8) & 255),
                    (n.check = i(n.check, L, 2, 0)),
                    (g = 0),
                    (y = 0),
                    (n.mode = 2);
                  break;
                }
                if (
                  ((n.flags = 0),
                  n.head && (n.head.done = !1),
                  !(1 & n.wrap) || (((255 & g) << 8) + (g >> 8)) % 31)
                ) {
                  (e.msg = "incorrect header check"), (n.mode = c);
                  break;
                }
                if (8 != (15 & g)) {
                  (e.msg = "unknown compression method"), (n.mode = c);
                  break;
                }
                if (((y -= 4), (P = 8 + (15 & (g >>>= 4))), 0 === n.wbits))
                  n.wbits = P;
                else if (P > n.wbits) {
                  (e.msg = "invalid window size"), (n.mode = c);
                  break;
                }
                (n.dmax = 1 << P),
                  (e.adler = n.check = 1),
                  (n.mode = 512 & g ? 10 : l),
                  (g = 0),
                  (y = 0);
                break;
              case 2:
                for (; y < 16; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                if (((n.flags = g), 8 != (255 & n.flags))) {
                  (e.msg = "unknown compression method"), (n.mode = c);
                  break;
                }
                if (57344 & n.flags) {
                  (e.msg = "unknown header flags set"), (n.mode = c);
                  break;
                }
                n.head && (n.head.text = (g >> 8) & 1),
                  512 & n.flags &&
                    ((L[0] = 255 & g),
                    (L[1] = (g >>> 8) & 255),
                    (n.check = i(n.check, L, 2, 0))),
                  (g = 0),
                  (y = 0),
                  (n.mode = 3);
              case 3:
                for (; y < 32; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                n.head && (n.head.time = g),
                  512 & n.flags &&
                    ((L[0] = 255 & g),
                    (L[1] = (g >>> 8) & 255),
                    (L[2] = (g >>> 16) & 255),
                    (L[3] = (g >>> 24) & 255),
                    (n.check = i(n.check, L, 4, 0))),
                  (g = 0),
                  (y = 0),
                  (n.mode = 4);
              case 4:
                for (; y < 16; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                n.head && ((n.head.xflags = 255 & g), (n.head.os = g >> 8)),
                  512 & n.flags &&
                    ((L[0] = 255 & g),
                    (L[1] = (g >>> 8) & 255),
                    (n.check = i(n.check, L, 2, 0))),
                  (g = 0),
                  (y = 0),
                  (n.mode = 5);
              case 5:
                if (1024 & n.flags) {
                  for (; y < 16; ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  (n.length = g),
                    n.head && (n.head.extra_len = g),
                    512 & n.flags &&
                      ((L[0] = 255 & g),
                      (L[1] = (g >>> 8) & 255),
                      (n.check = i(n.check, L, 2, 0))),
                    (g = 0),
                    (y = 0);
                } else n.head && (n.head.extra = null);
                n.mode = 6;
              case 6:
                if (
                  1024 & n.flags &&
                  ((_ = n.length) > m && (_ = m),
                  _ &&
                    (n.head &&
                      ((P = n.head.extra_len - n.length),
                      n.head.extra ||
                        (n.head.extra = new Array(n.head.extra_len)),
                      r.arraySet(n.head.extra, d, h, _, P)),
                    512 & n.flags && (n.check = i(n.check, d, _, h)),
                    (m -= _),
                    (h += _),
                    (n.length -= _)),
                  n.length)
                )
                  break e;
                (n.length = 0), (n.mode = 7);
              case 7:
                if (2048 & n.flags) {
                  if (0 === m) break e;
                  _ = 0;
                  do {
                    (P = d[h + _++]),
                      n.head &&
                        P &&
                        n.length < 65536 &&
                        (n.head.name += String.fromCharCode(P));
                  } while (P && _ < m);
                  if (
                    (512 & n.flags && (n.check = i(n.check, d, _, h)),
                    (m -= _),
                    (h += _),
                    P)
                  )
                    break e;
                } else n.head && (n.head.name = null);
                (n.length = 0), (n.mode = 8);
              case 8:
                if (4096 & n.flags) {
                  if (0 === m) break e;
                  _ = 0;
                  do {
                    (P = d[h + _++]),
                      n.head &&
                        P &&
                        n.length < 65536 &&
                        (n.head.comment += String.fromCharCode(P));
                  } while (P && _ < m);
                  if (
                    (512 & n.flags && (n.check = i(n.check, d, _, h)),
                    (m -= _),
                    (h += _),
                    P)
                  )
                    break e;
                } else n.head && (n.head.comment = null);
                n.mode = 9;
              case 9:
                if (512 & n.flags) {
                  for (; y < 16; ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  if (g !== (65535 & n.check)) {
                    (e.msg = "header crc mismatch"), (n.mode = c);
                    break;
                  }
                  (g = 0), (y = 0);
                }
                n.head &&
                  ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                  (e.adler = n.check = 0),
                  (n.mode = l);
                break;
              case 10:
                for (; y < 32; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                (e.adler = n.check = f(g)), (g = 0), (y = 0), (n.mode = 11);
              case 11:
                if (0 === n.havedict)
                  return (
                    (e.next_out = p),
                    (e.avail_out = v),
                    (e.next_in = h),
                    (e.avail_in = m),
                    (n.hold = g),
                    (n.bits = y),
                    2
                  );
                (e.adler = n.check = 1), (n.mode = l);
              case l:
                if (5 === t || 6 === t) break e;
              case 13:
                if (n.last) {
                  (g >>>= 7 & y), (y -= 7 & y), (n.mode = 27);
                  break;
                }
                for (; y < 3; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                switch (((n.last = 1 & g), (y -= 1), 3 & (g >>>= 1))) {
                  case 0:
                    n.mode = 14;
                    break;
                  case 1:
                    if ((b(n), (n.mode = 20), 6 === t)) {
                      (g >>>= 2), (y -= 2);
                      break e;
                    }
                    break;
                  case 2:
                    n.mode = 17;
                    break;
                  case 3:
                    (e.msg = "invalid block type"), (n.mode = c);
                }
                (g >>>= 2), (y -= 2);
                break;
              case 14:
                for (g >>>= 7 & y, y -= 7 & y; y < 32; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                if ((65535 & g) != ((g >>> 16) ^ 65535)) {
                  (e.msg = "invalid stored block lengths"), (n.mode = c);
                  break;
                }
                if (
                  ((n.length = 65535 & g),
                  (g = 0),
                  (y = 0),
                  (n.mode = 15),
                  6 === t)
                )
                  break e;
              case 15:
                n.mode = 16;
              case 16:
                if ((_ = n.length)) {
                  if ((_ > m && (_ = m), _ > v && (_ = v), 0 === _)) break e;
                  r.arraySet(D, d, h, _, p),
                    (m -= _),
                    (h += _),
                    (v -= _),
                    (p += _),
                    (n.length -= _);
                  break;
                }
                n.mode = l;
                break;
              case 17:
                for (; y < 14; ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                if (
                  ((n.nlen = 257 + (31 & g)),
                  (g >>>= 5),
                  (y -= 5),
                  (n.ndist = 1 + (31 & g)),
                  (g >>>= 5),
                  (y -= 5),
                  (n.ncode = 4 + (15 & g)),
                  (g >>>= 4),
                  (y -= 4),
                  n.nlen > 286 || n.ndist > 30)
                ) {
                  (e.msg = "too many length or distance symbols"), (n.mode = c);
                  break;
                }
                (n.have = 0), (n.mode = 18);
              case 18:
                for (; n.have < n.ncode; ) {
                  for (; y < 3; ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  (n.lens[M[n.have++]] = 7 & g), (g >>>= 3), (y -= 3);
                }
                for (; n.have < 19; ) n.lens[M[n.have++]] = 0;
                if (
                  ((n.lencode = n.lendyn),
                  (n.lenbits = 7),
                  (N = { bits: n.lenbits }),
                  (T = a(0, n.lens, 0, 19, n.lencode, 0, n.work, N)),
                  (n.lenbits = N.bits),
                  T)
                ) {
                  (e.msg = "invalid code lengths set"), (n.mode = c);
                  break;
                }
                (n.have = 0), (n.mode = 19);
              case 19:
                for (; n.have < n.nlen + n.ndist; ) {
                  for (
                    ;
                    (S =
                      ((j = n.lencode[g & ((1 << n.lenbits) - 1)]) >>> 16) &
                      255),
                      (k = 65535 & j),
                      !((A = j >>> 24) <= y);

                  ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  if (k < 16) (g >>>= A), (y -= A), (n.lens[n.have++] = k);
                  else {
                    if (16 === k) {
                      for (I = A + 2; y < I; ) {
                        if (0 === m) break e;
                        m--, (g += d[h++] << y), (y += 8);
                      }
                      if (((g >>>= A), (y -= A), 0 === n.have)) {
                        (e.msg = "invalid bit length repeat"), (n.mode = c);
                        break;
                      }
                      (P = n.lens[n.have - 1]),
                        (_ = 3 + (3 & g)),
                        (g >>>= 2),
                        (y -= 2);
                    } else if (17 === k) {
                      for (I = A + 3; y < I; ) {
                        if (0 === m) break e;
                        m--, (g += d[h++] << y), (y += 8);
                      }
                      (y -= A),
                        (P = 0),
                        (_ = 3 + (7 & (g >>>= A))),
                        (g >>>= 3),
                        (y -= 3);
                    } else {
                      for (I = A + 7; y < I; ) {
                        if (0 === m) break e;
                        m--, (g += d[h++] << y), (y += 8);
                      }
                      (y -= A),
                        (P = 0),
                        (_ = 11 + (127 & (g >>>= A))),
                        (g >>>= 7),
                        (y -= 7);
                    }
                    if (n.have + _ > n.nlen + n.ndist) {
                      (e.msg = "invalid bit length repeat"), (n.mode = c);
                      break;
                    }
                    for (; _--; ) n.lens[n.have++] = P;
                  }
                }
                if (n.mode === c) break;
                if (0 === n.lens[256]) {
                  (e.msg = "invalid code -- missing end-of-block"),
                    (n.mode = c);
                  break;
                }
                if (
                  ((n.lenbits = 9),
                  (N = { bits: n.lenbits }),
                  (T = a(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, N)),
                  (n.lenbits = N.bits),
                  T)
                ) {
                  (e.msg = "invalid literal/lengths set"), (n.mode = c);
                  break;
                }
                if (
                  ((n.distbits = 6),
                  (n.distcode = n.distdyn),
                  (N = { bits: n.distbits }),
                  (T = a(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, N)),
                  (n.distbits = N.bits),
                  T)
                ) {
                  (e.msg = "invalid distances set"), (n.mode = c);
                  break;
                }
                if (((n.mode = 20), 6 === t)) break e;
              case 20:
                n.mode = 21;
              case 21:
                if (m >= 6 && v >= 258) {
                  (e.next_out = p),
                    (e.avail_out = v),
                    (e.next_in = h),
                    (e.avail_in = m),
                    (n.hold = g),
                    (n.bits = y),
                    u(e, w),
                    (p = e.next_out),
                    (D = e.output),
                    (v = e.avail_out),
                    (h = e.next_in),
                    (d = e.input),
                    (m = e.avail_in),
                    (g = n.hold),
                    (y = n.bits),
                    n.mode === l && (n.back = -1);
                  break;
                }
                for (
                  n.back = 0;
                  (S =
                    ((j = n.lencode[g & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                    (k = 65535 & j),
                    !((A = j >>> 24) <= y);

                ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                if (S && !(240 & S)) {
                  for (
                    O = A, B = S, R = k;
                    (S =
                      ((j =
                        n.lencode[R + ((g & ((1 << (O + B)) - 1)) >> O)]) >>>
                        16) &
                      255),
                      (k = 65535 & j),
                      !(O + (A = j >>> 24) <= y);

                  ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  (g >>>= O), (y -= O), (n.back += O);
                }
                if (
                  ((g >>>= A), (y -= A), (n.back += A), (n.length = k), 0 === S)
                ) {
                  n.mode = 26;
                  break;
                }
                if (32 & S) {
                  (n.back = -1), (n.mode = l);
                  break;
                }
                if (64 & S) {
                  (e.msg = "invalid literal/length code"), (n.mode = c);
                  break;
                }
                (n.extra = 15 & S), (n.mode = 22);
              case 22:
                if (n.extra) {
                  for (I = n.extra; y < I; ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  (n.length += g & ((1 << n.extra) - 1)),
                    (g >>>= n.extra),
                    (y -= n.extra),
                    (n.back += n.extra);
                }
                (n.was = n.length), (n.mode = 23);
              case 23:
                for (
                  ;
                  (S =
                    ((j = n.distcode[g & ((1 << n.distbits) - 1)]) >>> 16) &
                    255),
                    (k = 65535 & j),
                    !((A = j >>> 24) <= y);

                ) {
                  if (0 === m) break e;
                  m--, (g += d[h++] << y), (y += 8);
                }
                if (!(240 & S)) {
                  for (
                    O = A, B = S, R = k;
                    (S =
                      ((j =
                        n.distcode[R + ((g & ((1 << (O + B)) - 1)) >> O)]) >>>
                        16) &
                      255),
                      (k = 65535 & j),
                      !(O + (A = j >>> 24) <= y);

                  ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  (g >>>= O), (y -= O), (n.back += O);
                }
                if (((g >>>= A), (y -= A), (n.back += A), 64 & S)) {
                  (e.msg = "invalid distance code"), (n.mode = c);
                  break;
                }
                (n.offset = k), (n.extra = 15 & S), (n.mode = 24);
              case 24:
                if (n.extra) {
                  for (I = n.extra; y < I; ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  (n.offset += g & ((1 << n.extra) - 1)),
                    (g >>>= n.extra),
                    (y -= n.extra),
                    (n.back += n.extra);
                }
                if (n.offset > n.dmax) {
                  (e.msg = "invalid distance too far back"), (n.mode = c);
                  break;
                }
                n.mode = 25;
              case 25:
                if (0 === v) break e;
                if (((_ = w - v), n.offset > _)) {
                  if ((_ = n.offset - _) > n.whave && n.sane) {
                    (e.msg = "invalid distance too far back"), (n.mode = c);
                    break;
                  }
                  _ > n.wnext
                    ? ((_ -= n.wnext), (F = n.wsize - _))
                    : (F = n.wnext - _),
                    _ > n.length && (_ = n.length),
                    (x = n.window);
                } else (x = D), (F = p - n.offset), (_ = n.length);
                _ > v && (_ = v), (v -= _), (n.length -= _);
                do {
                  D[p++] = x[F++];
                } while (--_);
                0 === n.length && (n.mode = 21);
                break;
              case 26:
                if (0 === v) break e;
                (D[p++] = n.length), v--, (n.mode = 21);
                break;
              case 27:
                if (n.wrap) {
                  for (; y < 32; ) {
                    if (0 === m) break e;
                    m--, (g |= d[h++] << y), (y += 8);
                  }
                  if (
                    ((w -= v),
                    (e.total_out += w),
                    (n.total += w),
                    w &&
                      (e.adler = n.check =
                        n.flags
                          ? i(n.check, D, w, p - w)
                          : o(n.check, D, w, p - w)),
                    (w = v),
                    (n.flags ? g : f(g)) !== n.check)
                  ) {
                    (e.msg = "incorrect data check"), (n.mode = c);
                    break;
                  }
                  (g = 0), (y = 0);
                }
                n.mode = 28;
              case 28:
                if (n.wrap && n.flags) {
                  for (; y < 32; ) {
                    if (0 === m) break e;
                    m--, (g += d[h++] << y), (y += 8);
                  }
                  if (g !== (4294967295 & n.total)) {
                    (e.msg = "incorrect length check"), (n.mode = c);
                    break;
                  }
                  (g = 0), (y = 0);
                }
                n.mode = 29;
              case 29:
                T = 1;
                break e;
              case c:
                T = -3;
                break e;
              case 31:
                return -4;
              default:
                return s;
            }
          return (
            (e.next_out = p),
            (e.avail_out = v),
            (e.next_in = h),
            (e.avail_in = m),
            (n.hold = g),
            (n.bits = y),
            (n.wsize ||
              (w !== e.avail_out && n.mode < c && (n.mode < 27 || 4 !== t))) &&
            E(e, e.output, e.next_out, w - e.avail_out)
              ? ((n.mode = 31), -4)
              : ((C -= e.avail_in),
                (w -= e.avail_out),
                (e.total_in += C),
                (e.total_out += w),
                (n.total += w),
                n.wrap &&
                  w &&
                  (e.adler = n.check =
                    n.flags
                      ? i(n.check, D, w, e.next_out - w)
                      : o(n.check, D, w, e.next_out - w)),
                (e.data_type =
                  n.bits +
                  (n.last ? 64 : 0) +
                  (n.mode === l ? 128 : 0) +
                  (20 === n.mode || 15 === n.mode ? 256 : 0)),
                ((0 === C && 0 === w) || 4 === t) && 0 === T && (T = -5),
                T)
          );
        }),
        (t.inflateEnd = function (e) {
          if (!e || !e.state) return s;
          var t = e.state;
          return t.window && (t.window = null), (e.state = null), 0;
        }),
        (t.inflateGetHeader = function (e, t) {
          var n;
          return e && e.state && 2 & (n = e.state).wrap
            ? ((n.head = t), (t.done = !1), 0)
            : s;
        }),
        (t.inflateSetDictionary = function (e, t) {
          var n,
            r = t.length;
          return e && e.state
            ? 0 !== (n = e.state).wrap && 11 !== n.mode
              ? s
              : 11 === n.mode && o(1, t, r, 0) !== n.check
              ? -3
              : E(e, t, r, r)
              ? ((n.mode = 31), -4)
              : ((n.havedict = 1), 0)
            : s;
        }),
        (t.inflateInfo = "pako inflate (from Nodeca project)");
    },
    27652: (e, t, n) => {
      "use strict";
      var r = n(6434),
        o = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ],
        i = [
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ],
        u = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ],
        a = [
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ];
      e.exports = function (e, t, n, s, l, c, f, d) {
        var D,
          h,
          p,
          m,
          v,
          g,
          y,
          b,
          E,
          C = d.bits,
          w = 0,
          _ = 0,
          F = 0,
          x = 0,
          A = 0,
          S = 0,
          k = 0,
          O = 0,
          B = 0,
          R = 0,
          P = null,
          T = 0,
          N = new r.Buf16(16),
          I = new r.Buf16(16),
          j = null,
          L = 0;
        for (w = 0; w <= 15; w++) N[w] = 0;
        for (_ = 0; _ < s; _++) N[t[n + _]]++;
        for (A = C, x = 15; x >= 1 && 0 === N[x]; x--);
        if ((A > x && (A = x), 0 === x))
          return (l[c++] = 20971520), (l[c++] = 20971520), (d.bits = 1), 0;
        for (F = 1; F < x && 0 === N[F]; F++);
        for (A < F && (A = F), O = 1, w = 1; w <= 15; w++)
          if (((O <<= 1), (O -= N[w]) < 0)) return -1;
        if (O > 0 && (0 === e || 1 !== x)) return -1;
        for (I[1] = 0, w = 1; w < 15; w++) I[w + 1] = I[w] + N[w];
        for (_ = 0; _ < s; _++) 0 !== t[n + _] && (f[I[t[n + _]]++] = _);
        if (
          (0 === e
            ? ((P = j = f), (g = 19))
            : 1 === e
            ? ((P = o), (T -= 257), (j = i), (L -= 257), (g = 256))
            : ((P = u), (j = a), (g = -1)),
          (R = 0),
          (_ = 0),
          (w = F),
          (v = c),
          (S = A),
          (k = 0),
          (p = -1),
          (m = (B = 1 << A) - 1),
          (1 === e && B > 852) || (2 === e && B > 592))
        )
          return 1;
        for (;;) {
          (y = w - k),
            f[_] < g
              ? ((b = 0), (E = f[_]))
              : f[_] > g
              ? ((b = j[L + f[_]]), (E = P[T + f[_]]))
              : ((b = 96), (E = 0)),
            (D = 1 << (w - k)),
            (F = h = 1 << S);
          do {
            l[v + (R >> k) + (h -= D)] = (y << 24) | (b << 16) | E;
          } while (0 !== h);
          for (D = 1 << (w - 1); R & D; ) D >>= 1;
          if (
            (0 !== D ? ((R &= D - 1), (R += D)) : (R = 0), _++, 0 == --N[w])
          ) {
            if (w === x) break;
            w = t[n + f[_]];
          }
          if (w > A && (R & m) !== p) {
            for (
              0 === k && (k = A), v += F, O = 1 << (S = w - k);
              S + k < x && !((O -= N[S + k]) <= 0);

            )
              S++, (O <<= 1);
            if (((B += 1 << S), (1 === e && B > 852) || (2 === e && B > 592)))
              return 1;
            l[(p = R & m)] = (A << 24) | (S << 16) | (v - c);
          }
        }
        return (
          0 !== R && (l[v + R] = ((w - k) << 24) | (64 << 16)), (d.bits = A), 0
        );
      };
    },
    5818: (e) => {
      "use strict";
      e.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      };
    },
    17223: (e, t, n) => {
      "use strict";
      var r = n(6434);
      function o(e) {
        for (var t = e.length; --t >= 0; ) e[t] = 0;
      }
      var i = [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0,
        ],
        u = [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ],
        a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        s = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        l = new Array(576);
      o(l);
      var c = new Array(60);
      o(c);
      var f = new Array(512);
      o(f);
      var d = new Array(256);
      o(d);
      var D = new Array(29);
      o(D);
      var h,
        p,
        m,
        v = new Array(30);
      function g(e, t, n, r, o) {
        (this.static_tree = e),
          (this.extra_bits = t),
          (this.extra_base = n),
          (this.elems = r),
          (this.max_length = o),
          (this.has_stree = e && e.length);
      }
      function y(e, t) {
        (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
      }
      function b(e) {
        return e < 256 ? f[e] : f[256 + (e >>> 7)];
      }
      function E(e, t) {
        (e.pending_buf[e.pending++] = 255 & t),
          (e.pending_buf[e.pending++] = (t >>> 8) & 255);
      }
      function C(e, t, n) {
        e.bi_valid > 16 - n
          ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
            E(e, e.bi_buf),
            (e.bi_buf = t >> (16 - e.bi_valid)),
            (e.bi_valid += n - 16))
          : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
      }
      function w(e, t, n) {
        C(e, n[2 * t], n[2 * t + 1]);
      }
      function _(e, t) {
        var n = 0;
        do {
          (n |= 1 & e), (e >>>= 1), (n <<= 1);
        } while (--t > 0);
        return n >>> 1;
      }
      function F(e, t, n) {
        var r,
          o,
          i = new Array(16),
          u = 0;
        for (r = 1; r <= 15; r++) i[r] = u = (u + n[r - 1]) << 1;
        for (o = 0; o <= t; o++) {
          var a = e[2 * o + 1];
          0 !== a && (e[2 * o] = _(i[a]++, a));
        }
      }
      function x(e) {
        var t;
        for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        (e.dyn_ltree[512] = 1),
          (e.opt_len = e.static_len = 0),
          (e.last_lit = e.matches = 0);
      }
      function A(e) {
        e.bi_valid > 8
          ? E(e, e.bi_buf)
          : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
          (e.bi_buf = 0),
          (e.bi_valid = 0);
      }
      function S(e, t, n, r) {
        var o = 2 * t,
          i = 2 * n;
        return e[o] < e[i] || (e[o] === e[i] && r[t] <= r[n]);
      }
      function k(e, t, n) {
        for (
          var r = e.heap[n], o = n << 1;
          o <= e.heap_len &&
          (o < e.heap_len && S(t, e.heap[o + 1], e.heap[o], e.depth) && o++,
          !S(t, r, e.heap[o], e.depth));

        )
          (e.heap[n] = e.heap[o]), (n = o), (o <<= 1);
        e.heap[n] = r;
      }
      function O(e, t, n) {
        var r,
          o,
          a,
          s,
          l = 0;
        if (0 !== e.last_lit)
          do {
            (r =
              (e.pending_buf[e.d_buf + 2 * l] << 8) |
              e.pending_buf[e.d_buf + 2 * l + 1]),
              (o = e.pending_buf[e.l_buf + l]),
              l++,
              0 === r
                ? w(e, o, t)
                : (w(e, (a = d[o]) + 256 + 1, t),
                  0 !== (s = i[a]) && C(e, (o -= D[a]), s),
                  w(e, (a = b(--r)), n),
                  0 !== (s = u[a]) && C(e, (r -= v[a]), s));
          } while (l < e.last_lit);
        w(e, 256, t);
      }
      function B(e, t) {
        var n,
          r,
          o,
          i = t.dyn_tree,
          u = t.stat_desc.static_tree,
          a = t.stat_desc.has_stree,
          s = t.stat_desc.elems,
          l = -1;
        for (e.heap_len = 0, e.heap_max = 573, n = 0; n < s; n++)
          0 !== i[2 * n]
            ? ((e.heap[++e.heap_len] = l = n), (e.depth[n] = 0))
            : (i[2 * n + 1] = 0);
        for (; e.heap_len < 2; )
          (i[2 * (o = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1),
            (e.depth[o] = 0),
            e.opt_len--,
            a && (e.static_len -= u[2 * o + 1]);
        for (t.max_code = l, n = e.heap_len >> 1; n >= 1; n--) k(e, i, n);
        o = s;
        do {
          (n = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            k(e, i, 1),
            (r = e.heap[1]),
            (e.heap[--e.heap_max] = n),
            (e.heap[--e.heap_max] = r),
            (i[2 * o] = i[2 * n] + i[2 * r]),
            (e.depth[o] =
              (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
            (i[2 * n + 1] = i[2 * r + 1] = o),
            (e.heap[1] = o++),
            k(e, i, 1);
        } while (e.heap_len >= 2);
        (e.heap[--e.heap_max] = e.heap[1]),
          (function (e, t) {
            var n,
              r,
              o,
              i,
              u,
              a,
              s = t.dyn_tree,
              l = t.max_code,
              c = t.stat_desc.static_tree,
              f = t.stat_desc.has_stree,
              d = t.stat_desc.extra_bits,
              D = t.stat_desc.extra_base,
              h = t.stat_desc.max_length,
              p = 0;
            for (i = 0; i <= 15; i++) e.bl_count[i] = 0;
            for (
              s[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1;
              n < 573;
              n++
            )
              (i = s[2 * s[2 * (r = e.heap[n]) + 1] + 1] + 1) > h &&
                ((i = h), p++),
                (s[2 * r + 1] = i),
                r > l ||
                  (e.bl_count[i]++,
                  (u = 0),
                  r >= D && (u = d[r - D]),
                  (a = s[2 * r]),
                  (e.opt_len += a * (i + u)),
                  f && (e.static_len += a * (c[2 * r + 1] + u)));
            if (0 !== p) {
              do {
                for (i = h - 1; 0 === e.bl_count[i]; ) i--;
                e.bl_count[i]--,
                  (e.bl_count[i + 1] += 2),
                  e.bl_count[h]--,
                  (p -= 2);
              } while (p > 0);
              for (i = h; 0 !== i; i--)
                for (r = e.bl_count[i]; 0 !== r; )
                  (o = e.heap[--n]) > l ||
                    (s[2 * o + 1] !== i &&
                      ((e.opt_len += (i - s[2 * o + 1]) * s[2 * o]),
                      (s[2 * o + 1] = i)),
                    r--);
            }
          })(e, t),
          F(i, l, e.bl_count);
      }
      function R(e, t, n) {
        var r,
          o,
          i = -1,
          u = t[1],
          a = 0,
          s = 7,
          l = 4;
        for (
          0 === u && ((s = 138), (l = 3)), t[2 * (n + 1) + 1] = 65535, r = 0;
          r <= n;
          r++
        )
          (o = u),
            (u = t[2 * (r + 1) + 1]),
            (++a < s && o === u) ||
              (a < l
                ? (e.bl_tree[2 * o] += a)
                : 0 !== o
                ? (o !== i && e.bl_tree[2 * o]++, e.bl_tree[32]++)
                : a <= 10
                ? e.bl_tree[34]++
                : e.bl_tree[36]++,
              (a = 0),
              (i = o),
              0 === u
                ? ((s = 138), (l = 3))
                : o === u
                ? ((s = 6), (l = 3))
                : ((s = 7), (l = 4)));
      }
      function P(e, t, n) {
        var r,
          o,
          i = -1,
          u = t[1],
          a = 0,
          s = 7,
          l = 4;
        for (0 === u && ((s = 138), (l = 3)), r = 0; r <= n; r++)
          if (((o = u), (u = t[2 * (r + 1) + 1]), !(++a < s && o === u))) {
            if (a < l)
              do {
                w(e, o, e.bl_tree);
              } while (0 != --a);
            else
              0 !== o
                ? (o !== i && (w(e, o, e.bl_tree), a--),
                  w(e, 16, e.bl_tree),
                  C(e, a - 3, 2))
                : a <= 10
                ? (w(e, 17, e.bl_tree), C(e, a - 3, 3))
                : (w(e, 18, e.bl_tree), C(e, a - 11, 7));
            (a = 0),
              (i = o),
              0 === u
                ? ((s = 138), (l = 3))
                : o === u
                ? ((s = 6), (l = 3))
                : ((s = 7), (l = 4));
          }
      }
      o(v);
      var T = !1;
      function N(e, t, n, o) {
        C(e, 0 + (o ? 1 : 0), 3),
          (function (e, t, n) {
            A(e),
              E(e, n),
              E(e, ~n),
              r.arraySet(e.pending_buf, e.window, t, n, e.pending),
              (e.pending += n);
          })(e, t, n);
      }
      (t._tr_init = function (e) {
        T ||
          ((function () {
            var e,
              t,
              n,
              r,
              o,
              s = new Array(16);
            for (n = 0, r = 0; r < 28; r++)
              for (D[r] = n, e = 0; e < 1 << i[r]; e++) d[n++] = r;
            for (d[n - 1] = r, o = 0, r = 0; r < 16; r++)
              for (v[r] = o, e = 0; e < 1 << u[r]; e++) f[o++] = r;
            for (o >>= 7; r < 30; r++)
              for (v[r] = o << 7, e = 0; e < 1 << (u[r] - 7); e++)
                f[256 + o++] = r;
            for (t = 0; t <= 15; t++) s[t] = 0;
            for (e = 0; e <= 143; ) (l[2 * e + 1] = 8), e++, s[8]++;
            for (; e <= 255; ) (l[2 * e + 1] = 9), e++, s[9]++;
            for (; e <= 279; ) (l[2 * e + 1] = 7), e++, s[7]++;
            for (; e <= 287; ) (l[2 * e + 1] = 8), e++, s[8]++;
            for (F(l, 287, s), e = 0; e < 30; e++)
              (c[2 * e + 1] = 5), (c[2 * e] = _(e, 5));
            (h = new g(l, i, 257, 286, 15)),
              (p = new g(c, u, 0, 30, 15)),
              (m = new g(new Array(0), a, 0, 19, 7));
          })(),
          (T = !0)),
          (e.l_desc = new y(e.dyn_ltree, h)),
          (e.d_desc = new y(e.dyn_dtree, p)),
          (e.bl_desc = new y(e.bl_tree, m)),
          (e.bi_buf = 0),
          (e.bi_valid = 0),
          x(e);
      }),
        (t._tr_stored_block = N),
        (t._tr_flush_block = function (e, t, n, r) {
          var o,
            i,
            u = 0;
          e.level > 0
            ? (2 === e.strm.data_type &&
                (e.strm.data_type = (function (e) {
                  var t,
                    n = 4093624447;
                  for (t = 0; t <= 31; t++, n >>>= 1)
                    if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
                  if (
                    0 !== e.dyn_ltree[18] ||
                    0 !== e.dyn_ltree[20] ||
                    0 !== e.dyn_ltree[26]
                  )
                    return 1;
                  for (t = 32; t < 256; t++)
                    if (0 !== e.dyn_ltree[2 * t]) return 1;
                  return 0;
                })(e)),
              B(e, e.l_desc),
              B(e, e.d_desc),
              (u = (function (e) {
                var t;
                for (
                  R(e, e.dyn_ltree, e.l_desc.max_code),
                    R(e, e.dyn_dtree, e.d_desc.max_code),
                    B(e, e.bl_desc),
                    t = 18;
                  t >= 3 && 0 === e.bl_tree[2 * s[t] + 1];
                  t--
                );
                return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
              })(e)),
              (o = (e.opt_len + 3 + 7) >>> 3),
              (i = (e.static_len + 3 + 7) >>> 3) <= o && (o = i))
            : (o = i = n + 5),
            n + 4 <= o && -1 !== t
              ? N(e, t, n, r)
              : 4 === e.strategy || i === o
              ? (C(e, 2 + (r ? 1 : 0), 3), O(e, l, c))
              : (C(e, 4 + (r ? 1 : 0), 3),
                (function (e, t, n, r) {
                  var o;
                  for (
                    C(e, t - 257, 5), C(e, n - 1, 5), C(e, r - 4, 4), o = 0;
                    o < r;
                    o++
                  )
                    C(e, e.bl_tree[2 * s[o] + 1], 3);
                  P(e, e.dyn_ltree, t - 1), P(e, e.dyn_dtree, n - 1);
                })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, u + 1),
                O(e, e.dyn_ltree, e.dyn_dtree)),
            x(e),
            r && A(e);
        }),
        (t._tr_tally = function (e, t, n) {
          return (
            (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
            (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
            (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
            e.last_lit++,
            0 === t
              ? e.dyn_ltree[2 * n]++
              : (e.matches++,
                t--,
                e.dyn_ltree[2 * (d[n] + 256 + 1)]++,
                e.dyn_dtree[2 * b(t)]++),
            e.last_lit === e.lit_bufsize - 1
          );
        }),
        (t._tr_align = function (e) {
          C(e, 2, 3),
            w(e, 256, l),
            (function (e) {
              16 === e.bi_valid
                ? (E(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                : e.bi_valid >= 8 &&
                  ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                  (e.bi_buf >>= 8),
                  (e.bi_valid -= 8));
            })(e);
        });
    },
    87856: (e) => {
      "use strict";
      e.exports = function () {
        (this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0);
      };
    },
    71312: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, { Z: () => c });
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
      const u =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (var a = [], s = 0; s < 256; ++s)
        a.push((s + 256).toString(16).substr(1));
      const l = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              a[e[t + 0]] +
              a[e[t + 1]] +
              a[e[t + 2]] +
              a[e[t + 3]] +
              "-" +
              a[e[t + 4]] +
              a[e[t + 5]] +
              "-" +
              a[e[t + 6]] +
              a[e[t + 7]] +
              "-" +
              a[e[t + 8]] +
              a[e[t + 9]] +
              "-" +
              a[e[t + 10]] +
              a[e[t + 11]] +
              a[e[t + 12]] +
              a[e[t + 13]] +
              a[e[t + 14]] +
              a[e[t + 15]]
            ).toLowerCase();
          if (
            !(function (e) {
              return "string" == typeof e && u.test(e);
            })(n)
          )
            throw TypeError("Stringified UUID is invalid");
          return n;
        },
        c = function (e, t, n) {
          var r = (e = e || {}).random || (e.rng || i)();
          if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
            n = n || 0;
            for (var o = 0; o < 16; ++o) t[n + o] = r[o];
            return t;
          }
          return l(r);
        };
    },
    29423: (e, t, n) => {
      "use strict";
      var r = n(95442),
        o = n(70489);
      Object.keys(r).forEach(function (e) {
        "default" === e ||
          Object.prototype.hasOwnProperty.call(t, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      }),
        Object.keys(o).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
    },
    70489: (e, t, n) => {
      "use strict";
      var r = n(87363),
        o = n(95442),
        i = r.createContext(void 0),
        u = function (e) {
          var t = r.useContext(i);
          return (null == e ? void 0 : e.store) || t || o.getDefaultStore();
        },
        a =
          r.use ||
          function (e) {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            throw "rejected" === e.status
              ? e.reason
              : ((e.status = "pending"),
                e.then(
                  function (t) {
                    (e.status = "fulfilled"), (e.value = t);
                  },
                  function (t) {
                    (e.status = "rejected"), (e.reason = t);
                  }
                ),
                e);
          };
      function s(e, t) {
        var n = u(t),
          o = r.useReducer(
            function (t) {
              var r = n.get(e);
              return Object.is(t[0], r) && t[1] === n && t[2] === e
                ? t
                : [r, n, e];
            },
            void 0,
            function () {
              return [n.get(e), n, e];
            }
          ),
          i = o[0],
          s = i[0],
          l = i[1],
          c = i[2],
          f = o[1],
          d = s;
        (l === n && c === e) || (f(), (d = n.get(e)));
        var D,
          h = null == t ? void 0 : t.delay;
        return (
          r.useEffect(
            function () {
              var t = n.sub(e, function () {
                "number" != typeof h ? f() : setTimeout(f, h);
              });
              return f(), t;
            },
            [n, e, h]
          ),
          r.useDebugValue(d),
          "function" == typeof (null == (D = d) ? void 0 : D.then) ? a(d) : d
        );
      }
      function l(e, t) {
        var n = u(t),
          o = r.useCallback(
            function () {
              for (
                var t = arguments.length, r = new Array(t), o = 0;
                o < t;
                o++
              )
                r[o] = arguments[o];
              return n.set.apply(n, [e].concat(r));
            },
            [n, e]
          );
        return o;
      }
      (t.Provider = function (e) {
        var t = e.children,
          n = e.store,
          u = r.useRef();
        return (
          n || u.current || (u.current = o.createStore()),
          r.createElement(i.Provider, { value: n || u.current }, t)
        );
      }),
        (t.useAtom = function (e, t) {
          return [s(e, t), l(e, t)];
        }),
        (t.useAtomValue = s),
        (t.useSetAtom = l),
        (t.useStore = u);
    },
    75903: (e, t, n) => {
      "use strict";
      var r = n(87363),
        o = n(70489),
        i = n(90137),
        u = n(95442);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var s = new WeakMap();
      (t.useAtomCallback = function (e, t) {
        var n = r.useMemo(
          function () {
            return u.atom(null, function (t, n) {
              for (
                var r = arguments.length,
                  o = new Array(r > 2 ? r - 2 : 0),
                  i = 2;
                i < r;
                i++
              )
                o[i - 2] = arguments[i];
              return e.apply(void 0, [t, n].concat(o));
            });
          },
          [e]
        );
        return o.useSetAtom(n, t);
      }),
        (t.useHydrateAtoms = function (e, t) {
          for (
            var n,
              r = o.useStore(t),
              i = (function (e) {
                var t = s.get(e);
                return t || ((t = new WeakSet()), s.set(e, t)), t;
              })(r),
              u = (function (e, t) {
                var n =
                  ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return a(e, t);
                      var n = {}.toString.call(e).slice(8, -1);
                      return (
                        "Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(e)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? a(e, t)
                          : void 0
                      );
                    }
                  })(e)) ||
                  t
                ) {
                  n && (e = n);
                  var r = 0;
                  return function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(e);
            !(n = u()).done;

          ) {
            var l = n.value,
              c = l[0],
              f = l[1];
            (!i.has(c) || (null != t && t.dangerouslyForceHydrate)) &&
              (i.add(c), r.set(c, f));
          }
        }),
        (t.useReducerAtom = function (e, t, n) {
          var i = o.useAtom(e, n),
            u = i[0],
            a = i[1];
          return [
            u,
            r.useCallback(
              function (e) {
                a(function (n) {
                  return t(n, e);
                });
              },
              [a, t]
            ),
          ];
        }),
        (t.useResetAtom = function (e, t) {
          var n = o.useSetAtom(e, t);
          return r.useCallback(
            function () {
              return n(i.RESET);
            },
            [n]
          );
        });
    },
    88665: (e, t, n) => {
      "use strict";
      var r = n(90137),
        o = n(75903);
      Object.keys(r).forEach(function (e) {
        "default" === e ||
          Object.prototype.hasOwnProperty.call(t, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      }),
        Object.keys(o).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
    },
    95442: (e, t) => {
      "use strict";
      var n = 0;
      function r(e) {
        return e(this);
      }
      function o(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n);
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return i(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? i(e, t)
                  : void 0
              );
            }
          })(e)) ||
          t
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        s = function (e, t) {
          return e.unstable_is ? e.unstable_is(t) : t === e;
        },
        l = function (e) {
          return "init" in e;
        },
        c = function (e) {
          return !!e.write;
        },
        f = Symbol(""),
        d = "pending",
        D = new WeakMap(),
        h = function (e) {
          return "v" in e || "e" in e;
        },
        p = function (e) {
          if ("e" in e) throw e.e;
          return e.v;
        },
        m = function (e) {
          var t,
            n = e.v;
          return "object" == typeof (t = n) &&
            null !== t &&
            f in t &&
            n.status === d
            ? n
            : null;
        },
        v = function (e, t, n) {
          n.p.has(e) ||
            (n.p.add(e),
            t.then(
              function () {
                n.p.delete(e);
              },
              function () {
                n.p.delete(e);
              }
            ));
        },
        g = function (e, t, n, r, o) {
          var i;
          n.d.set(r, o.n);
          var u = m(n);
          u && v(t, u, o), null == (i = o.m) || i.t.add(t), e && E(e, r, t);
        },
        y = function () {
          return [new Map(), new Map(), new Set()];
        },
        b = function (e, t, n) {
          e[0].has(t) || e[0].set(t, new Set()), e[1].set(t, n);
        },
        E = function (e, t, n) {
          var r = e[0].get(t);
          r && r.add(n);
        },
        C = function (e, t) {
          e[2].add(t);
        },
        w = function (e) {
          for (; e[1].size || e[2].size; ) {
            e[0].clear();
            var t = new Set(e[1].values());
            e[1].clear();
            var n = new Set(e[2]);
            e[2].clear(),
              t.forEach(function (e) {
                var t;
                return null == (t = e.m)
                  ? void 0
                  : t.l.forEach(function (e) {
                      return e();
                    });
              }),
              n.forEach(function (e) {
                return e();
              });
          }
        },
        _ = function (e) {
          var t = function (t, n, r, o, i) {
              void 0 === o && (o = function () {}),
                void 0 === i && (i = function () {});
              var a,
                s = "v" in n,
                l = n.v,
                c = m(n);
              if ("function" == typeof (null == (a = r) ? void 0 : a.then))
                if (c) c !== r && (c[f](r, o), ++n.n);
                else {
                  var h = (function (e, t, n) {
                    if (!D.has(e)) {
                      var r,
                        o = new Promise(function (i, u) {
                          var a = e,
                            s = function (e) {
                              return function (t) {
                                a === e &&
                                  ((o.status = "fulfilled"),
                                  (o.value = t),
                                  i(t),
                                  n());
                              };
                            },
                            l = function (e) {
                              return function (t) {
                                a === e &&
                                  ((o.status = "rejected"),
                                  (o.reason = t),
                                  u(t),
                                  n());
                              };
                            };
                          e.then(s(e), l(e)),
                            (r = function (e, n) {
                              e &&
                                (D.set(e, o),
                                (a = e),
                                e.then(s(e), l(e)),
                                t(),
                                (t = n));
                            });
                        });
                      (o.status = d), (o[f] = r), D.set(e, o);
                    }
                    return D.get(e);
                  })(r, o, i);
                  if (h.status === d)
                    for (var p, g = u(n.d.keys()); !(p = g()).done; ) {
                      var y = p.value;
                      v(t, h, e(y, n));
                    }
                  (n.v = h), delete n.e;
                }
              else c && c[f](Promise.resolve(r), o), (n.v = r), delete n.e;
              (s && Object.is(l, n.v)) || ++n.n;
            },
            n = function (r, u, a, f) {
              if ((null == f || !f(u)) && h(a)) {
                if (a.m) return a;
                if (
                  Array.from(a.d).every(function (t) {
                    var o = t[0],
                      i = t[1];
                    return n(r, o, e(o, a), f).n === i;
                  })
                )
                  return a;
              }
              a.d.clear();
              var d,
                D,
                m = !0,
                v = {
                  get signal() {
                    return d || (d = new AbortController()), d.signal;
                  },
                  get setSelf() {
                    return (
                      !D &&
                        c(u) &&
                        (D = function () {
                          if (!m) {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return o.apply(void 0, [u].concat(t));
                          }
                        }),
                      D
                    );
                  },
                };
              try {
                var b = u.read(function (o) {
                  if (s(u, o)) {
                    var c = e(o, a);
                    if (!h(c)) {
                      if (!l(o)) throw new Error("no atom init");
                      t(o, c, o.init);
                    }
                    return p(c);
                  }
                  var d = n(r, o, e(o, a), f);
                  if (m) g(r, u, a, o, d);
                  else {
                    var D = y();
                    g(D, u, a, o, d), i(D, u, a), w(D);
                  }
                  return p(d);
                }, v);
                return (
                  t(
                    u,
                    a,
                    b,
                    function () {
                      var e;
                      return null == (e = d) ? void 0 : e.abort();
                    },
                    function () {
                      if (a.m) {
                        var e = y();
                        i(e, u, a), w(e);
                      }
                    }
                  ),
                  a
                );
              } catch (E) {
                return delete a.v, (a.e = E), ++a.n, a;
              } finally {
                m = !1;
              }
            },
            r = function (o, a, c) {
              for (
                var f = arguments.length,
                  d = new Array(f > 3 ? f - 3 : 0),
                  D = 3;
                D < f;
                D++
              )
                d[D - 3] = arguments[D];
              var h = a.write.apply(
                a,
                [
                  function (t) {
                    return p(n(o, t, e(t, c)));
                  },
                  function (f) {
                    for (
                      var d,
                        D = e(f, c),
                        h = arguments.length,
                        p = new Array(h > 1 ? h - 1 : 0),
                        m = 1;
                      m < h;
                      m++
                    )
                      p[m - 1] = arguments[m];
                    if (s(a, f)) {
                      if (!l(f)) throw new Error("atom not writable");
                      var v = "v" in D,
                        g = D.v,
                        y = p[0];
                      t(f, D, y),
                        i(o, f, D),
                        (v && Object.is(g, D.v)) ||
                          (b(o, f, D),
                          (function (t, r, o) {
                            var a = [],
                              s = new Set(),
                              l = function (n, r) {
                                if (!s.has(n)) {
                                  s.add(n);
                                  for (
                                    var o,
                                      i = u(
                                        (function (t, n, r) {
                                          for (
                                            var o,
                                              i,
                                              a = new Map(),
                                              s = u(
                                                (null == (l = r.m)
                                                  ? void 0
                                                  : l.t) || []
                                              );
                                            !(i = s()).done;

                                          ) {
                                            var l,
                                              c = i.value;
                                            a.set(c, e(c, r));
                                          }
                                          for (
                                            var f, d = u(r.p);
                                            !(f = d()).done;

                                          ) {
                                            var D = f.value;
                                            a.set(D, e(D, r));
                                          }
                                          return (
                                            null ==
                                              (o = (function (e, t) {
                                                return e[0].get(t);
                                              })(t, n)) ||
                                              o.forEach(function (t) {
                                                a.set(t, e(t, r));
                                              }),
                                            a
                                          );
                                        })(t, n, r)
                                      );
                                    !(o = i()).done;

                                  ) {
                                    var c = o.value,
                                      f = c[0],
                                      d = c[1];
                                    n !== f && l(f, d);
                                  }
                                  a.push([n, r, r.n]);
                                }
                              };
                            l(r, o);
                            for (
                              var c = new Set([r]),
                                f = function (e) {
                                  return s.has(e);
                                },
                                d = a.length - 1;
                              d >= 0;
                              --d
                            ) {
                              for (
                                var D,
                                  h = a[d],
                                  p = h[0],
                                  m = h[1],
                                  v = h[2],
                                  g = !1,
                                  y = u(m.d.keys());
                                !(D = y()).done;

                              ) {
                                var E = D.value;
                                if (E !== p && c.has(E)) {
                                  g = !0;
                                  break;
                                }
                              }
                              g &&
                                (n(t, p, m, f),
                                i(t, p, m),
                                v !== m.n && (b(t, p, m), c.add(p))),
                                s.delete(p);
                            }
                          })(o, f, D));
                    } else d = r.apply(void 0, [o, f, D].concat(p));
                    return w(o), d;
                  },
                ].concat(d)
              );
              return h;
            },
            o = function (t) {
              for (
                var n = y(),
                  o = arguments.length,
                  i = new Array(o > 1 ? o - 1 : 0),
                  u = 1;
                u < o;
                u++
              )
                i[u - 1] = arguments[u];
              var a = r.apply(void 0, [n, t, e(t)].concat(i));
              return w(n), a;
            },
            i = function (t, n, r) {
              if (r.m && !m(r)) {
                for (var o, i = u(r.d.keys()); !(o = i()).done; ) {
                  var s = o.value;
                  r.m.d.has(s) || (a(t, s, e(s, r)).t.add(n), r.m.d.add(s));
                }
                for (var l, c = u(r.m.d || []); !(l = c()).done; ) {
                  var f = l.value;
                  if (!r.d.has(f)) {
                    r.m.d.delete(f);
                    var d = E(t, f, e(f, r));
                    null == d || d.t.delete(n);
                  }
                }
              }
            },
            a = function (t, o, i) {
              if (!i.m) {
                n(t, o, i);
                for (var s, l = u(i.d.keys()); !(s = l()).done; ) {
                  var f = s.value;
                  a(t, f, e(f, i)).t.add(o);
                }
                if (
                  ((i.m = {
                    l: new Set(),
                    d: new Set(i.d.keys()),
                    t: new Set(),
                  }),
                  c(o) && o.onMount)
                ) {
                  var d = i.m,
                    D = o.onMount;
                  C(t, function () {
                    var e = D(function () {
                      for (
                        var e = arguments.length, n = new Array(e), u = 0;
                        u < e;
                        u++
                      )
                        n[u] = arguments[u];
                      return r.apply(void 0, [t, o, i].concat(n));
                    });
                    e && (d.u = e);
                  });
                }
              }
              return i.m;
            },
            E = function (t, n, r) {
              if (
                !r.m ||
                r.m.l.size ||
                Array.from(r.m.t).some(function (t) {
                  var o;
                  return null == (o = e(t, r).m) ? void 0 : o.d.has(n);
                })
              )
                return r.m;
              var o = r.m.u;
              o && C(t, o), delete r.m;
              for (var i, a = u(r.d.keys()); !(i = a()).done; ) {
                var s = i.value,
                  l = E(t, s, e(s, r));
                null == l || l.t.delete(n);
              }
              var c = m(r);
              c && c[f](void 0, function () {});
            };
          return {
            get: function (t) {
              return p(n(void 0, t, e(t)));
            },
            set: o,
            sub: function (t, n) {
              var r = y(),
                o = e(t),
                i = a(r, t, o);
              w(r);
              var u = i.l;
              return (
                u.add(n),
                function () {
                  u.delete(n);
                  var e = y();
                  E(e, t, o), w(e);
                }
              );
            },
            unstable_derive: function (t) {
              return _.apply(void 0, t(e));
            },
          };
        },
        F = function () {
          var e = new WeakMap();
          return _(function (t) {
            var n = e.get(t);
            return (
              n || ((n = { d: new Map(), p: new Set(), n: 0 }), e.set(t, n)), n
            );
          });
        };
      (t.atom = function (e, t) {
        var i = "atom" + ++n,
          u = {
            toString: function () {
              return i;
            },
          };
        return (
          "function" == typeof e
            ? (u.read = e)
            : ((u.init = e), (u.read = r), (u.write = o)),
          t && (u.write = t),
          u
        );
      }),
        (t.createStore = F),
        (t.getDefaultStore = function () {
          return a || (a = F()), a;
        });
    },
    90137: (e, t, n) => {
      "use strict";
      var r = n(95442),
        o = Symbol("");
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return i(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? i(e, t)
                  : void 0
              );
            }
          })(e)) ||
          t
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          a.apply(null, arguments)
        );
      }
      var s = function (e, t, n) {
          return (t.has(n) ? t : t.set(n, e())).get(n);
        },
        l = new WeakMap(),
        c = new WeakSet(),
        f = function (e) {
          if ("object" == typeof e && null !== e) {
            Object.freeze(e);
            for (
              var t, n = u(Object.getOwnPropertyNames(e));
              !(t = n()).done;

            ) {
              var r = e[t.value];
              f(r);
            }
            return e;
          }
        };
      function d(e) {
        if (c.has(e)) return e;
        c.add(e);
        var t = e.read;
        if (
          ((e.read = function (e, n) {
            return f(t.call(this, e, n));
          }),
          "write" in e)
        ) {
          var n = e.write;
          e.write = function (t, r) {
            for (
              var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), u = 2;
              u < o;
              u++
            )
              i[u - 2] = arguments[u];
            return n.call.apply(
              n,
              [
                this,
                t,
                function () {
                  for (
                    var t = arguments.length, n = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    n[o] = arguments[o];
                  return n[0] === e && (n[1] = f(n[1])), r.apply(void 0, n);
                },
              ].concat(i)
            );
          };
        }
        return e;
      }
      var D = function (e, t, n) {
          return (t.has(n) ? t : t.set(n, e())).get(n);
        },
        h = new WeakMap(),
        p = {},
        m = function (e) {
          return !!e.write;
        },
        v = function (e) {
          return "function" == typeof (null == e ? void 0 : e.then);
        };
      function g(e, t) {
        var n, r;
        void 0 === e &&
          (e = function () {
            try {
              return window.localStorage;
            } catch (e) {
              return;
            }
          });
        var o,
          i = {
            getItem: function (o, i) {
              var u,
                a,
                s = function (e) {
                  if (n !== (e = e || "")) {
                    try {
                      r = JSON.parse(e, null == t ? void 0 : t.reviver);
                    } catch (o) {
                      return i;
                    }
                    n = e;
                  }
                  return r;
                },
                l =
                  null != (u = null == (a = e()) ? void 0 : a.getItem(o))
                    ? u
                    : null;
              return v(l) ? l.then(s) : s(l);
            },
            setItem: function (n, r) {
              var o;
              return null == (o = e())
                ? void 0
                : o.setItem(
                    n,
                    JSON.stringify(r, null == t ? void 0 : t.replacer)
                  );
            },
            removeItem: function (t) {
              var n;
              return null == (n = e()) ? void 0 : n.removeItem(t);
            },
          };
        try {
          var u;
          o = null == (u = e()) ? void 0 : u.subscribe;
        } catch (a) {}
        return (
          !o &&
            "undefined" != typeof window &&
            "function" == typeof window.addEventListener &&
            window.Storage &&
            (o = function (t, n) {
              if (!(e() instanceof window.Storage)) return function () {};
              var r = function (r) {
                r.storageArea === e() && r.key === t && n(r.newValue);
              };
              return (
                window.addEventListener("storage", r),
                function () {
                  window.removeEventListener("storage", r);
                }
              );
            }),
          o &&
            (i.subscribe = (function (e) {
              return function (t, n, r) {
                return e(t, function (e) {
                  var t;
                  try {
                    t = JSON.parse(e || "");
                  } catch (o) {
                    t = r;
                  }
                  n(t);
                });
              };
            })(o)),
          i
        );
      }
      var y = g(),
        b = new WeakMap(),
        E = { state: "loading" },
        C = function (e, t, n) {
          return (t.has(n) ? t : t.set(n, e())).get(n);
        },
        w = new WeakMap(),
        _ = function () {};
      (t.RESET = o),
        (t.atomFamily = function (e, t) {
          var n = null,
            r = new Map(),
            o = new Set(),
            i = function (o) {
              var s;
              if (void 0 === t) s = r.get(o);
              else
                for (var l, c = u(r); !(l = c()).done; ) {
                  var f = l.value,
                    d = f[0],
                    D = f[1];
                  if (t(d, o)) {
                    s = D;
                    break;
                  }
                }
              if (void 0 !== s) {
                if (null == n || !n(s[1], o)) return s[0];
                i.remove(o);
              }
              var h = e(o);
              return r.set(o, [h, Date.now()]), a("CREATE", o, h), h;
            };
          function a(e, t, n) {
            for (var r, i = u(o); !(r = i()).done; )
              (0, r.value)({ type: e, param: t, atom: n });
          }
          return (
            (i.unstable_listen = function (e) {
              return (
                o.add(e),
                function () {
                  o.delete(e);
                }
              );
            }),
            (i.getParams = function () {
              return r.keys();
            }),
            (i.remove = function (e) {
              if (void 0 === t) {
                if (!r.has(e)) return;
                var n = r.get(e)[0];
                r.delete(e), a("REMOVE", e, n);
              } else
                for (var o, i = u(r); !(o = i()).done; ) {
                  var s = o.value,
                    l = s[0],
                    c = s[1][0];
                  if (t(l, e)) {
                    r.delete(l), a("REMOVE", l, c);
                    break;
                  }
                }
            }),
            (i.setShouldRemove = function (e) {
              if ((n = e))
                for (var t, o = u(r); !(t = o()).done; ) {
                  var i = t.value,
                    s = i[0],
                    l = i[1],
                    c = l[0],
                    f = l[1];
                  n(f, s) && (r.delete(s), a("REMOVE", s, c));
                }
            }),
            i
          );
        }),
        (t.atomWithDefault = function (e) {
          var t = Symbol(),
            n = r.atom(t),
            i = r.atom(
              function (r, o) {
                var i = r(n);
                return i !== t ? i : e(r, o);
              },
              function (e, r, u) {
                if (u === o) r(n, t);
                else if ("function" == typeof u) {
                  var a = e(i);
                  r(n, u(a));
                } else r(n, u);
              }
            );
          return i;
        }),
        (t.atomWithLazy = function (e) {
          var t = r.atom(void 0);
          return (
            delete t.init,
            Object.defineProperty(t, "init", {
              get: function () {
                return e();
              },
            }),
            t
          );
        }),
        (t.atomWithObservable = function (e, t) {
          var n = function (e) {
              if ("e" in e) throw e.e;
              return e.d;
            },
            o = r.atom(function (n) {
              var o,
                i,
                u,
                a = e(n),
                s =
                  null == (o = (i = a)[Symbol.observable]) ? void 0 : o.call(i);
              s && (a = s);
              var l,
                c,
                f,
                d,
                D = function () {
                  return new Promise(function (e) {
                    u = e;
                  });
                },
                h =
                  t && "initialValue" in t
                    ? {
                        d:
                          "function" == typeof t.initialValue
                            ? t.initialValue()
                            : t.initialValue,
                      }
                    : D(),
                p = function (e) {
                  (c = e), null == u || u(e), null == l || l(e);
                },
                m = function () {
                  return !l;
                },
                v = function () {
                  f && (clearTimeout(d), f.unsubscribe()),
                    (f = a.subscribe({
                      next: function (e) {
                        return p({ d: e });
                      },
                      error: function (e) {
                        return p({ e });
                      },
                      complete: function () {},
                    })),
                    m() &&
                      null != t &&
                      t.unstable_timeout &&
                      (d = setTimeout(function () {
                        f && (f.unsubscribe(), (f = void 0));
                      }, t.unstable_timeout));
                };
              v();
              var g = r.atom(c || h);
              return (
                (g.onMount = function (e) {
                  return (
                    (l = e),
                    c && e(c),
                    f ? clearTimeout(d) : v(),
                    function () {
                      (l = void 0), f && (f.unsubscribe(), (f = void 0));
                    }
                  );
                }),
                [g, a, D, v, m]
              );
            });
          return r.atom(
            function (e) {
              var t = e(o),
                r = e(t[0]);
              return r instanceof Promise ? r.then(n) : n(r);
            },
            function (e, t, n) {
              var r = e(o),
                i = r[0],
                u = r[1],
                a = r[2],
                s = r[3],
                l = r[4];
              if (!("next" in u)) throw new Error("observable is not subject");
              l() && (t(i, a()), s()), u.next(n);
            }
          );
        }),
        (t.atomWithReducer = function (e, t) {
          return r.atom(e, function (e, n, r) {
            n(this, t(e(this), r));
          });
        }),
        (t.atomWithRefresh = function (e, t) {
          var n = r.atom(0);
          return r.atom(
            function (t, r) {
              return t(n), e(t, r);
            },
            function (e, r) {
              for (
                var o = arguments.length,
                  i = new Array(o > 2 ? o - 2 : 0),
                  u = 2;
                u < o;
                u++
              )
                i[u - 2] = arguments[u];
              if (0 === i.length)
                r(n, function (e) {
                  return e + 1;
                });
              else if (t) return t.apply(void 0, [e, r].concat(i));
            }
          );
        }),
        (t.atomWithReset = function (e) {
          var t = r.atom(e, function (n, r, i) {
            var u = "function" == typeof i ? i(n(t)) : i;
            r(t, u === o ? e : u);
          });
          return t;
        }),
        (t.atomWithStorage = function (e, t, n, i) {
          void 0 === n && (n = y);
          var u = null == i ? void 0 : i.getOnInit,
            a = r.atom(u ? n.getItem(e, t) : t);
          return (
            (a.onMount = function (r) {
              var o;
              return (
                r(n.getItem(e, t)), n.subscribe && (o = n.subscribe(e, r, t)), o
              );
            }),
            r.atom(
              function (e) {
                return e(a);
              },
              function (r, i, u) {
                var s = "function" == typeof u ? u(r(a)) : u;
                return s === o
                  ? (i(a, t), n.removeItem(e))
                  : s instanceof Promise
                  ? s.then(function (t) {
                      return i(a, t), n.setItem(e, t);
                    })
                  : (i(a, s), n.setItem(e, s));
              }
            )
          );
        }),
        (t.createJSONStorage = g),
        (t.freezeAtom = d),
        (t.freezeAtomCreator = function (e) {
          return function () {
            return d(e.apply(void 0, arguments));
          };
        }),
        (t.loadable = function (e) {
          return (
            (t = function () {
              var t = new WeakMap(),
                n = r.atom(0),
                o = r.atom(
                  function (r, o) {
                    var i,
                      u = o.setSelf;
                    r(n);
                    try {
                      i = r(e);
                    } catch (l) {
                      return { state: "hasError", error: l };
                    }
                    if (!(i instanceof Promise))
                      return { state: "hasData", data: i };
                    var a = i,
                      s = t.get(a);
                    return (
                      s ||
                      ("fulfilled" === a.status
                        ? t.set(a, { state: "hasData", data: a.value })
                        : "rejected" === a.status
                        ? t.set(a, { state: "hasError", error: a.reason })
                        : a
                            .then(
                              function (e) {
                                t.set(a, { state: "hasData", data: e });
                              },
                              function (e) {
                                t.set(a, { state: "hasError", error: e });
                              }
                            )
                            .finally(u),
                      t.get(a) || (t.set(a, E), E))
                    );
                  },
                  function (e, t) {
                    t(n, function (e) {
                      return e + 1;
                    });
                  }
                );
              return r.atom(function (e) {
                return e(o);
              });
            }),
            (n = e),
            (b.has(n) ? b : b.set(n, t())).get(n)
          );
          var t, n;
        }),
        (t.selectAtom = function (e, t, n) {
          return (
            void 0 === n && (n = Object.is),
            (o = function () {
              var o = Symbol(),
                i = r.atom(function (r) {
                  var u = r(i);
                  return (function (e) {
                    var r = e[0],
                      i = e[1];
                    if (i === o) return t(r);
                    var u = t(r, i);
                    return n(i, u) ? i : u;
                  })([r(e), u]);
                });
              return (i.init = o), i;
            }),
            (i = t),
            (u = n),
            (a = s(
              function () {
                return new WeakMap();
              },
              l,
              e
            )),
            (c = s(
              function () {
                return new WeakMap();
              },
              a,
              i
            )),
            s(o, c, u)
          );
          var o, i, u, a, c;
        }),
        (t.splitAtom = function (e, t) {
          return (
            (n = function () {
              var n = new WeakMap(),
                o = function (u, a) {
                  var s = n.get(u);
                  if (s) return s;
                  var l = a && n.get(a),
                    c = [],
                    f = [];
                  return (
                    u.forEach(function (n, a) {
                      var s = t ? t(n) : a;
                      f[a] = s;
                      var d = l && l.atomList[l.keyList.indexOf(s)];
                      if (d) c[a] = d;
                      else {
                        var D = function (t) {
                          var n = t(i),
                            r = t(e),
                            a = o(
                              r,
                              null == n ? void 0 : n.arr
                            ).keyList.indexOf(s);
                          if (a < 0 || a >= r.length) {
                            var l = u[o(u).keyList.indexOf(s)];
                            if (l) return l;
                            throw new Error(
                              "splitAtom: index out of bounds for read"
                            );
                          }
                          return r[a];
                        };
                        c[a] = m(e)
                          ? r.atom(D, function (t, n, r) {
                              var u = t(i),
                                a = t(e),
                                l = o(
                                  a,
                                  null == u ? void 0 : u.arr
                                ).keyList.indexOf(s);
                              if (l < 0 || l >= a.length)
                                throw new Error(
                                  "splitAtom: index out of bounds for write"
                                );
                              var c = "function" == typeof r ? r(a[l]) : r;
                              Object.is(a[l], c) ||
                                n(
                                  e,
                                  [].concat(a.slice(0, l), [c], a.slice(l + 1))
                                );
                            })
                          : r.atom(D);
                      }
                    }),
                    (s =
                      l &&
                      l.keyList.length === f.length &&
                      l.keyList.every(function (e, t) {
                        return e === f[t];
                      })
                        ? l
                        : { arr: u, atomList: c, keyList: f }),
                    n.set(u, s),
                    s
                  );
                },
                i = r.atom(function (t) {
                  var n = t(i),
                    r = t(e);
                  return o(r, null == n ? void 0 : n.arr);
                });
              i.init = void 0;
              var u = m(e)
                ? r.atom(
                    function (e) {
                      return e(i).atomList;
                    },
                    function (t, n, r) {
                      switch (r.type) {
                        case "remove":
                          var o = t(u).indexOf(r.atom);
                          if (o >= 0) {
                            var i = t(e);
                            n(e, [].concat(i.slice(0, o), i.slice(o + 1)));
                          }
                          break;
                        case "insert":
                          var a = r.before
                            ? t(u).indexOf(r.before)
                            : t(u).length;
                          if (a >= 0) {
                            var s = t(e);
                            n(
                              e,
                              [].concat(s.slice(0, a), [r.value], s.slice(a))
                            );
                          }
                          break;
                        case "move":
                          var l = t(u).indexOf(r.atom),
                            c = r.before ? t(u).indexOf(r.before) : t(u).length;
                          if (l >= 0 && c >= 0) {
                            var f = t(e);
                            n(
                              e,
                              l < c
                                ? [].concat(
                                    f.slice(0, l),
                                    f.slice(l + 1, c),
                                    [f[l]],
                                    f.slice(c)
                                  )
                                : [].concat(
                                    f.slice(0, c),
                                    [f[l]],
                                    f.slice(c, l),
                                    f.slice(l + 1)
                                  )
                            );
                          }
                      }
                    }
                  )
                : r.atom(function (e) {
                    return e(i).atomList;
                  });
              return u;
            }),
            (o = t || p),
            (i = D(
              function () {
                return new WeakMap();
              },
              h,
              e
            )),
            D(n, i, o)
          );
          var n, o, i;
        }),
        (t.unstable_withStorageValidator = function (e) {
          return function (t) {
            return a({}, t, {
              getItem: function (n, r) {
                var o = function (t) {
                    return e(t) ? t : r;
                  },
                  i = t.getItem(n, r);
                return v(i) ? i.then(o) : o(i);
              },
            });
          };
        }),
        (t.unwrap = function (e, t) {
          return (
            void 0 === t && (t = _),
            (n = function () {
              var n = new WeakMap(),
                o = new WeakMap(),
                i = r.atom(0),
                u = r.atom(
                  function (r, a) {
                    var s = a.setSelf;
                    r(i);
                    var l = r(u),
                      c = r(e);
                    if (!(c instanceof Promise)) return { v: c };
                    if (
                      (c !== (null == l ? void 0 : l.p) &&
                        ("fulfilled" === c.status
                          ? o.set(c, c.value)
                          : "rejected" === c.status
                          ? n.set(c, c.reason)
                          : c
                              .then(
                                function (e) {
                                  return o.set(c, e);
                                },
                                function (e) {
                                  return n.set(c, e);
                                }
                              )
                              .finally(s)),
                      n.has(c))
                    )
                      throw n.get(c);
                    return o.has(c)
                      ? { p: c, v: o.get(c) }
                      : l && "v" in l
                      ? { p: c, f: t(l.v), v: l.v }
                      : { p: c, f: t() };
                  },
                  function (e, t) {
                    t(i, function (e) {
                      return e + 1;
                    });
                  }
                );
              return (
                (u.init = void 0),
                r.atom(
                  function (e) {
                    var t = e(u);
                    return "f" in t ? t.f : t.v;
                  },
                  function (t, n) {
                    for (
                      var r = arguments.length,
                        o = new Array(r > 2 ? r - 2 : 0),
                        i = 2;
                      i < r;
                      i++
                    )
                      o[i - 2] = arguments[i];
                    return n.apply(void 0, [e].concat(o));
                  }
                )
              );
            }),
            (o = t),
            (i = C(
              function () {
                return new WeakMap();
              },
              w,
              e
            )),
            C(n, i, o)
          );
          var n, o, i;
        });
    },
    46210: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(71986);
      function o(e, t) {
        if (null == e) return {};
        var n,
          o,
          i = (0, r.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (o = 0; o < u.length; o++)
            (n = u[o]),
              -1 === t.indexOf(n) &&
                {}.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
    },
    17530: (e, t, n) => {
      "use strict";
      n.d(t, {
        VY: () => Tr,
        JO: () => Rr,
        ck: () => Ir,
        wU: () => Lr,
        eT: () => jr,
        h_: () => Pr,
        fC: () => kr,
        xz: () => Or,
        B4: () => Br,
        l_: () => Nr,
      });
      var r = n(24261),
        o = n(71986),
        i = n(87363),
        u = n.t(i, 2),
        a = n(30394);
      function s(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      const c = ["scope", "children"];
      function f(e, t = []) {
        let n = [];
        const u = () => {
          const t = n.map((e) => (0, i.createContext)(e));
          return function (n) {
            const o = (null == n ? void 0 : n[e]) || t;
            return (0, i.useMemo)(
              () => ({ [`__scope${e}`]: (0, r.Z)({}, n, { [e]: o }) }),
              [n, o]
            );
          };
        };
        return (
          (u.scopeName = e),
          [
            function (t, r) {
              const u = (0, i.createContext)(r),
                a = n.length;
              function s(t) {
                const { scope: n, children: r } = t,
                  s = (0, o.Z)(t, c),
                  l = (null == n ? void 0 : n[e][a]) || u,
                  f = (0, i.useMemo)(() => s, Object.values(s));
                return (0, i.createElement)(l.Provider, { value: f }, r);
              }
              return (
                (n = [...n, r]),
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (n, o) {
                    const s = (null == o ? void 0 : o[e][a]) || u,
                      l = (0, i.useContext)(s);
                    if (l) return l;
                    if (void 0 !== r) return r;
                    throw new Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            d(u, ...t),
          ]
        );
      }
      function d(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (e) {
            const o = n.reduce((t, { useScope: n, scopeName: o }) => {
              const i = n(e)[`__scope${o}`];
              return (0, r.Z)({}, t, i);
            }, {});
            return (0, i.useMemo)(
              () => ({ [`__scope${t.scopeName}`]: o }),
              [o]
            );
          };
        };
        return (n.scopeName = t.scopeName), n;
      }
      function D(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            })(e, t)
          );
      }
      function h(...e) {
        return (0, i.useCallback)(D(...e), e);
      }
      const p = ["children"],
        m = ["children"],
        v = (0, i.forwardRef)((e, t) => {
          const { children: n } = e,
            u = (0, o.Z)(e, p),
            a = i.Children.toArray(n),
            s = a.find(b);
          if (s) {
            const e = s.props.children,
              n = a.map((t) =>
                t === s
                  ? i.Children.count(e) > 1
                    ? i.Children.only(null)
                    : (0, i.isValidElement)(e)
                    ? e.props.children
                    : null
                  : t
              );
            return (0, i.createElement)(
              g,
              (0, r.Z)({}, u, { ref: t }),
              (0, i.isValidElement)(e)
                ? (0, i.cloneElement)(e, void 0, n)
                : null
            );
          }
          return (0, i.createElement)(g, (0, r.Z)({}, u, { ref: t }), n);
        });
      v.displayName = "Slot";
      const g = (0, i.forwardRef)((e, t) => {
        const { children: n } = e,
          u = (0, o.Z)(e, m);
        return (0, i.isValidElement)(n)
          ? (0, i.cloneElement)(
              n,
              (0, r.Z)(
                {},
                (function (e, t) {
                  const n = (0, r.Z)({}, t);
                  for (const o in t) {
                    const i = e[o],
                      u = t[o];
                    /^on[A-Z]/.test(o)
                      ? i && u
                        ? (n[o] = (...e) => {
                            u(...e), i(...e);
                          })
                        : i && (n[o] = i)
                      : "style" === o
                      ? (n[o] = (0, r.Z)({}, i, u))
                      : "className" === o &&
                        (n[o] = [i, u].filter(Boolean).join(" "));
                  }
                  return (0, r.Z)({}, e, n);
                })(u, n.props),
                { ref: t ? D(t, n.ref) : n.ref }
              )
            )
          : i.Children.count(n) > 1
          ? i.Children.only(null)
          : null;
      });
      g.displayName = "SlotClone";
      const y = ({ children: e }) => (0, i.createElement)(i.Fragment, null, e);
      function b(e) {
        return (0, i.isValidElement)(e) && e.type === y;
      }
      const E = ["scope", "children"],
        C = (0, i.createContext)(void 0),
        w = ["asChild"],
        _ = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          const n = (0, i.forwardRef)((e, n) => {
            const { asChild: u } = e,
              a = (0, o.Z)(e, w),
              s = u ? v : t;
            return (
              (0, i.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, i.createElement)(s, (0, r.Z)({}, a, { ref: n }))
            );
          });
          return (
            (n.displayName = `Primitive.${t}`), (0, r.Z)({}, e, { [t]: n })
          );
        }, {});
      function F(e) {
        const t = (0, i.useRef)(e);
        return (
          (0, i.useEffect)(() => {
            t.current = e;
          }),
          (0, i.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
      const x = [
          "disableOutsidePointerEvents",
          "onEscapeKeyDown",
          "onPointerDownOutside",
          "onFocusOutside",
          "onInteractOutside",
          "onDismiss",
        ],
        A = "dismissableLayer.update";
      let S;
      const k = (0, i.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        O = (0, i.forwardRef)((e, t) => {
          var n;
          const {
              disableOutsidePointerEvents: u = !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: s,
              onFocusOutside: c,
              onInteractOutside: f,
              onDismiss: d,
            } = e,
            D = (0, o.Z)(e, x),
            p = (0, i.useContext)(k),
            [m, v] = (0, i.useState)(null),
            g =
              null !== (n = null == m ? void 0 : m.ownerDocument) &&
              void 0 !== n
                ? n
                : null === globalThis || void 0 === globalThis
                ? void 0
                : globalThis.document,
            [, y] = (0, i.useState)({}),
            b = h(t, (e) => v(e)),
            E = Array.from(p.layers),
            [C] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
            w = E.indexOf(C),
            O = m ? E.indexOf(m) : -1,
            P = p.layersWithOutsidePointerEventsDisabled.size > 0,
            T = O >= w,
            N = (function (
              e,
              t = null === globalThis || void 0 === globalThis
                ? void 0
                : globalThis.document
            ) {
              const n = F(e),
                r = (0, i.useRef)(!1),
                o = (0, i.useRef)(() => {});
              return (
                (0, i.useEffect)(() => {
                  const e = (e) => {
                      if (e.target && !r.current) {
                        const i = { originalEvent: e };
                        function u() {
                          R("dismissableLayer.pointerDownOutside", n, i, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = u),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : u();
                      }
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              const t = e.target,
                n = [...p.branches].some((e) => e.contains(t));
              T &&
                !n &&
                (null == s || s(e),
                null == f || f(e),
                e.defaultPrevented || null == d || d());
            }, g),
            I = (function (
              e,
              t = null === globalThis || void 0 === globalThis
                ? void 0
                : globalThis.document
            ) {
              const n = F(e),
                r = (0, i.useRef)(!1);
              return (
                (0, i.useEffect)(() => {
                  const e = (e) => {
                    e.target &&
                      !r.current &&
                      R(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              const t = e.target;
              [...p.branches].some((e) => e.contains(t)) ||
                (null == c || c(e),
                null == f || f(e),
                e.defaultPrevented || null == d || d());
            }, g);
          return (
            (function (
              e,
              t = null === globalThis || void 0 === globalThis
                ? void 0
                : globalThis.document
            ) {
              const n = F(e);
              (0, i.useEffect)(() => {
                const e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              O === p.layers.size - 1 &&
                (null == a || a(e),
                !e.defaultPrevented && d && (e.preventDefault(), d()));
            }, g),
            (0, i.useEffect)(() => {
              if (m)
                return (
                  u &&
                    (0 === p.layersWithOutsidePointerEventsDisabled.size &&
                      ((S = g.body.style.pointerEvents),
                      (g.body.style.pointerEvents = "none")),
                    p.layersWithOutsidePointerEventsDisabled.add(m)),
                  p.layers.add(m),
                  B(),
                  () => {
                    u &&
                      1 === p.layersWithOutsidePointerEventsDisabled.size &&
                      (g.body.style.pointerEvents = S);
                  }
                );
            }, [m, g, u, p]),
            (0, i.useEffect)(
              () => () => {
                m &&
                  (p.layers.delete(m),
                  p.layersWithOutsidePointerEventsDisabled.delete(m),
                  B());
              },
              [m, p]
            ),
            (0, i.useEffect)(() => {
              const e = () => y({});
              return (
                document.addEventListener(A, e),
                () => document.removeEventListener(A, e)
              );
            }, []),
            (0, i.createElement)(
              _.div,
              (0, r.Z)({}, D, {
                ref: b,
                style: (0, r.Z)(
                  { pointerEvents: P ? (T ? "auto" : "none") : void 0 },
                  e.style
                ),
                onFocusCapture: l(e.onFocusCapture, I.onFocusCapture),
                onBlurCapture: l(e.onBlurCapture, I.onBlurCapture),
                onPointerDownCapture: l(
                  e.onPointerDownCapture,
                  N.onPointerDownCapture
                ),
              })
            )
          );
        });
      function B() {
        const e = new CustomEvent(A);
        document.dispatchEvent(e);
      }
      function R(e, t, n, { discrete: r }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r
            ? (function (e, t) {
                e && (0, a.flushSync)(() => e.dispatchEvent(t));
              })(o, i)
            : o.dispatchEvent(i);
      }
      let P = 0;
      function T() {
        const e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      const N = ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"],
        I = "focusScope.autoFocusOnMount",
        j = "focusScope.autoFocusOnUnmount",
        L = { bubbles: !1, cancelable: !0 },
        M = (0, i.forwardRef)((e, t) => {
          const {
              loop: n = !1,
              trapped: u = !1,
              onMountAutoFocus: a,
              onUnmountAutoFocus: s,
            } = e,
            l = (0, o.Z)(e, N),
            [c, f] = (0, i.useState)(null),
            d = F(a),
            D = F(s),
            p = (0, i.useRef)(null),
            m = h(t, (e) => f(e)),
            v = (0, i.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, i.useEffect)(() => {
            if (u) {
              function e(e) {
                if (v.paused || !c) return;
                const t = e.target;
                c.contains(t) ? (p.current = t) : U(p.current, { select: !0 });
              }
              function t(e) {
                if (v.paused || !c) return;
                const t = e.relatedTarget;
                null !== t && (c.contains(t) || U(p.current, { select: !0 }));
              }
              function n(e) {
                const t = document.activeElement;
                for (const n of e)
                  n.removedNodes.length > 0 &&
                    ((null != c && c.contains(t)) || U(c));
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return (
                c && r.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [u, c, v.paused]),
            (0, i.useEffect)(() => {
              if (c) {
                H.add(v);
                const e = document.activeElement;
                if (!c.contains(e)) {
                  const t = new CustomEvent(I, L);
                  c.addEventListener(I, d),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        const n = document.activeElement;
                        for (const r of e)
                          if (
                            (U(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        z(c).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && U(c));
                }
                return () => {
                  c.removeEventListener(I, d),
                    setTimeout(() => {
                      const t = new CustomEvent(j, L);
                      c.addEventListener(j, D),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          U(null != e ? e : document.body, { select: !0 }),
                        c.removeEventListener(j, D),
                        H.remove(v);
                    }, 0);
                };
              }
            }, [c, d, D, v]);
          const g = (0, i.useCallback)(
            (e) => {
              if (!n && !u) return;
              if (v.paused) return;
              const t =
                  "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                const t = e.currentTarget,
                  [o, i] = (function (e) {
                    const t = z(e);
                    return [Z(t, e), Z(t.reverse(), e)];
                  })(t);
                o && i
                  ? e.shiftKey || r !== i
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && U(i, { select: !0 }))
                    : (e.preventDefault(), n && U(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, u, v.paused]
          );
          return (0, i.createElement)(
            _.div,
            (0, r.Z)({ tabIndex: -1 }, l, { ref: m, onKeyDown: g })
          );
        });
      function z(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function Z(e, t) {
        for (const n of e) if (!V(n, { upTo: t })) return n;
      }
      function V(e, { upTo: t }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e; ) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement;
        }
        return !1;
      }
      function U(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (function (e) {
                return e instanceof HTMLInputElement && "select" in e;
              })(e) &&
              t &&
              e.select();
        }
      }
      const H = (function () {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && (null == n || n.pause()), (e = W(e, t)), e.unshift(t);
          },
          remove(t) {
            var n;
            (e = W(e, t)), null === (n = e[0]) || void 0 === n || n.resume();
          },
        };
      })();
      function W(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      const $ = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? i.useLayoutEffect
          : () => {},
        G = u["useId".toString()] || (() => {});
      let q = 0;
      function K(e) {
        const [t, n] = i.useState(G());
        return (
          $(() => {
            e || n((e) => (null != e ? e : String(q++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      const X = ["top", "right", "bottom", "left"],
        Y = Math.min,
        J = Math.max,
        Q = Math.round,
        ee = Math.floor,
        te = (e) => ({ x: e, y: e }),
        ne = { left: "right", right: "left", bottom: "top", top: "bottom" },
        re = { start: "end", end: "start" };
      function oe(e, t, n) {
        return J(e, Y(t, n));
      }
      function ie(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function ue(e) {
        return e.split("-")[0];
      }
      function ae(e) {
        return e.split("-")[1];
      }
      function se(e) {
        return "x" === e ? "y" : "x";
      }
      function le(e) {
        return "y" === e ? "height" : "width";
      }
      function ce(e) {
        return ["top", "bottom"].includes(ue(e)) ? "y" : "x";
      }
      function fe(e) {
        return se(ce(e));
      }
      function de(e) {
        return e.replace(/start|end/g, (e) => re[e]);
      }
      function De(e) {
        return e.replace(/left|right|bottom|top/g, (e) => ne[e]);
      }
      function he(e) {
        return "number" != typeof e
          ? (function (e) {
              return (0, r.Z)({ top: 0, right: 0, bottom: 0, left: 0 }, e);
            })(e)
          : { top: e, right: e, bottom: e, left: e };
      }
      function pe(e) {
        const { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      const me = [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment",
        ],
        ve = ["strategy"],
        ge = ["mainAxis", "crossAxis", "limiter"],
        ye = ["apply"];
      function be(e, t, n) {
        let { reference: r, floating: o } = e;
        const i = ce(t),
          u = fe(t),
          a = le(u),
          s = ue(t),
          l = "y" === i,
          c = r.x + r.width / 2 - o.width / 2,
          f = r.y + r.height / 2 - o.height / 2,
          d = r[a] / 2 - o[a] / 2;
        let D;
        switch (s) {
          case "top":
            D = { x: c, y: r.y - o.height };
            break;
          case "bottom":
            D = { x: c, y: r.y + r.height };
            break;
          case "right":
            D = { x: r.x + r.width, y: f };
            break;
          case "left":
            D = { x: r.x - o.width, y: f };
            break;
          default:
            D = { x: r.x, y: r.y };
        }
        switch (ae(t)) {
          case "start":
            D[u] -= d * (n && l ? -1 : 1);
            break;
          case "end":
            D[u] += d * (n && l ? -1 : 1);
        }
        return D;
      }
      async function Ee(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: r,
            y: o,
            platform: i,
            rects: u,
            elements: a,
            strategy: s,
          } = e,
          {
            boundary: l = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: d = !1,
            padding: D = 0,
          } = ie(t, e),
          h = he(D),
          p = a[d ? ("floating" === f ? "reference" : "floating") : f],
          m = pe(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(p))) ||
                n
                  ? p
                  : p.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: l,
              rootBoundary: c,
              strategy: s,
            })
          ),
          v =
            "floating" === f
              ? {
                  x: r,
                  y: o,
                  width: u.floating.width,
                  height: u.floating.height,
                }
              : u.reference,
          g = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          y = ((await (null == i.isElement ? void 0 : i.isElement(g))) &&
            (await (null == i.getScale ? void 0 : i.getScale(g)))) || {
            x: 1,
            y: 1,
          },
          b = pe(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: v,
                  offsetParent: g,
                  strategy: s,
                })
              : v
          );
        return {
          top: (m.top - b.top + h.top) / y.y,
          bottom: (b.bottom - m.bottom + h.bottom) / y.y,
          left: (m.left - b.left + h.left) / y.x,
          right: (b.right - m.right + h.right) / y.x,
        };
      }
      function Ce(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function we(e) {
        return X.some((t) => e[t] >= 0);
      }
      function _e() {
        return "undefined" != typeof window;
      }
      function Fe(e) {
        return Se(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function xe(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function Ae(e) {
        var t;
        return null ==
          (t = (Se(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function Se(e) {
        return !!_e() && (e instanceof Node || e instanceof xe(e).Node);
      }
      function ke(e) {
        return !!_e() && (e instanceof Element || e instanceof xe(e).Element);
      }
      function Oe(e) {
        return (
          !!_e() && (e instanceof HTMLElement || e instanceof xe(e).HTMLElement)
        );
      }
      function Be(e) {
        return (
          !(!_e() || "undefined" == typeof ShadowRoot) &&
          (e instanceof ShadowRoot || e instanceof xe(e).ShadowRoot)
        );
      }
      function Re(e) {
        const { overflow: t, overflowX: n, overflowY: r, display: o } = Le(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function Pe(e) {
        return ["table", "td", "th"].includes(Fe(e));
      }
      function Te(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (n) {
            return !1;
          }
        });
      }
      function Ne(e) {
        const t = Ie(),
          n = ke(e) ? Le(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function Ie() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function je(e) {
        return ["html", "body", "#document"].includes(Fe(e));
      }
      function Le(e) {
        return xe(e).getComputedStyle(e);
      }
      function Me(e) {
        return ke(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function ze(e) {
        if ("html" === Fe(e)) return e;
        const t = e.assignedSlot || e.parentNode || (Be(e) && e.host) || Ae(e);
        return Be(t) ? t.host : t;
      }
      function Ze(e) {
        const t = ze(e);
        return je(t)
          ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
          : Oe(t) && Re(t)
          ? t
          : Ze(t);
      }
      function Ve(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = Ze(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          u = xe(o);
        if (i) {
          const e = Ue(u);
          return t.concat(
            u,
            u.visualViewport || [],
            Re(o) ? o : [],
            e && n ? Ve(e) : []
          );
        }
        return t.concat(o, Ve(o, [], n));
      }
      function Ue(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function He(e) {
        const t = Le(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = Oe(e),
          i = o ? e.offsetWidth : n,
          u = o ? e.offsetHeight : r,
          a = Q(n) !== i || Q(r) !== u;
        return a && ((n = i), (r = u)), { width: n, height: r, $: a };
      }
      function We(e) {
        return ke(e) ? e : e.contextElement;
      }
      function $e(e) {
        const t = We(e);
        if (!Oe(t)) return te(1);
        const n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = He(t);
        let u = (i ? Q(n.width) : n.width) / r,
          a = (i ? Q(n.height) : n.height) / o;
        return (
          (u && Number.isFinite(u)) || (u = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: u, y: a }
        );
      }
      const Ge = te(0);
      function qe(e) {
        const t = xe(e);
        return Ie() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Ge;
      }
      function Ke(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = We(e);
        let u = te(1);
        t && (r ? ke(r) && (u = $e(r)) : (u = $e(e)));
        const a = (function (e, t, n) {
          return void 0 === t && (t = !1), !(!n || (t && n !== xe(e))) && t;
        })(i, n, r)
          ? qe(i)
          : te(0);
        let s = (o.left + a.x) / u.x,
          l = (o.top + a.y) / u.y,
          c = o.width / u.x,
          f = o.height / u.y;
        if (i) {
          const e = xe(i),
            t = r && ke(r) ? xe(r) : r;
          let n = e,
            o = Ue(n);
          for (; o && r && t !== n; ) {
            const e = $e(o),
              t = o.getBoundingClientRect(),
              r = Le(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              u = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (l *= e.y),
              (c *= e.x),
              (f *= e.y),
              (s += i),
              (l += u),
              (n = xe(o)),
              (o = Ue(n));
          }
        }
        return pe({ width: c, height: f, x: s, y: l });
      }
      function Xe(e, t) {
        const n = Me(e).scrollLeft;
        return t ? t.left + n : Ke(Ae(e)).left + n;
      }
      function Ye(e, t, n) {
        let o;
        if ("viewport" === t)
          o = (function (e, t) {
            const n = xe(e),
              r = Ae(e),
              o = n.visualViewport;
            let i = r.clientWidth,
              u = r.clientHeight,
              a = 0,
              s = 0;
            if (o) {
              (i = o.width), (u = o.height);
              const e = Ie();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: i, height: u, x: a, y: s };
          })(e, n);
        else if ("document" === t)
          o = (function (e) {
            const t = Ae(e),
              n = Me(e),
              r = e.ownerDocument.body,
              o = J(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = J(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              );
            let u = -n.scrollLeft + Xe(e);
            const a = -n.scrollTop;
            return (
              "rtl" === Le(r).direction &&
                (u += J(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: u, y: a }
            );
          })(Ae(e));
        else if (ke(t))
          o = (function (e, t) {
            const n = Ke(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = Oe(e) ? $e(e) : te(1);
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          const n = qe(e);
          o = (0, r.Z)({}, t, { x: t.x - n.x, y: t.y - n.y });
        }
        return pe(o);
      }
      function Je(e, t) {
        const n = ze(e);
        return (
          !(n === t || !ke(n) || je(n)) &&
          ("fixed" === Le(n).position || Je(n, t))
        );
      }
      function Qe(e, t, n) {
        const r = Oe(t),
          o = Ae(t),
          i = "fixed" === n,
          u = Ke(e, !0, i, t);
        let a = { scrollLeft: 0, scrollTop: 0 };
        const s = te(0);
        if (r || (!r && !i))
          if ((("body" !== Fe(t) || Re(o)) && (a = Me(t)), r)) {
            const e = Ke(t, !0, i, t);
            (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
          } else o && (s.x = Xe(o));
        let l = 0,
          c = 0;
        if (o && !r && !i) {
          const e = o.getBoundingClientRect();
          (c = e.top + a.scrollTop), (l = e.left + a.scrollLeft - Xe(o, e));
        }
        return {
          x: u.left + a.scrollLeft - s.x - l,
          y: u.top + a.scrollTop - s.y - c,
          width: u.width,
          height: u.height,
        };
      }
      function et(e) {
        return "static" === Le(e).position;
      }
      function tt(e, t) {
        if (!Oe(e) || "fixed" === Le(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Ae(e) === n && (n = n.ownerDocument.body), n;
      }
      function nt(e, t) {
        const n = xe(e);
        if (Te(e)) return n;
        if (!Oe(e)) {
          let t = ze(e);
          for (; t && !je(t); ) {
            if (ke(t) && !et(t)) return t;
            t = ze(t);
          }
          return n;
        }
        let r = tt(e, t);
        for (; r && Pe(r) && et(r); ) r = tt(r, t);
        return r && je(r) && et(r) && !Ne(r)
          ? n
          : r ||
              (function (e) {
                let t = ze(e);
                for (; Oe(t) && !je(t); ) {
                  if (Ne(t)) return t;
                  if (Te(t)) return null;
                  t = ze(t);
                }
                return null;
              })(e) ||
              n;
      }
      const rt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
          const i = "fixed" === o,
            u = Ae(r),
            a = !!t && Te(t.floating);
          if (r === u || (a && i)) return n;
          let s = { scrollLeft: 0, scrollTop: 0 },
            l = te(1);
          const c = te(0),
            f = Oe(r);
          if (
            (f || (!f && !i)) &&
            (("body" !== Fe(r) || Re(u)) && (s = Me(r)), Oe(r))
          ) {
            const e = Ke(r);
            (l = $e(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop);
          }
          return {
            width: n.width * l.x,
            height: n.height * l.y,
            x: n.x * l.x - s.scrollLeft * l.x + c.x,
            y: n.y * l.y - s.scrollTop * l.y + c.y,
          };
        },
        getDocumentElement: Ae,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
          const i = [
              ...("clippingAncestors" === n
                ? Te(t)
                  ? []
                  : (function (e, t) {
                      const n = t.get(e);
                      if (n) return n;
                      let r = Ve(e, [], !1).filter(
                          (e) => ke(e) && "body" !== Fe(e)
                        ),
                        o = null;
                      const i = "fixed" === Le(e).position;
                      let u = i ? ze(e) : e;
                      for (; ke(u) && !je(u); ) {
                        const t = Le(u),
                          n = Ne(u);
                        n || "fixed" !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  "static" === t.position &&
                                  o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                (Re(u) && !n && Je(e, u))
                          )
                            ? (r = r.filter((e) => e !== u))
                            : (o = t),
                          (u = ze(u));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              r,
            ],
            u = i[0],
            a = i.reduce((e, n) => {
              const r = Ye(t, n, o);
              return (
                (e.top = J(r.top, e.top)),
                (e.right = Y(r.right, e.right)),
                (e.bottom = Y(r.bottom, e.bottom)),
                (e.left = J(r.left, e.left)),
                e
              );
            }, Ye(t, u, o));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top,
          };
        },
        getOffsetParent: nt,
        getElementRects: async function (e) {
          const t = this.getOffsetParent || nt,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: Qe(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          const { width: t, height: n } = He(e);
          return { width: t, height: n };
        },
        getScale: $e,
        isElement: ke,
        isRTL: function (e) {
          return "rtl" === Le(e).direction;
        },
      };
      function ot(e, t, n, o) {
        void 0 === o && (o = {});
        const {
            ancestorScroll: i = !0,
            ancestorResize: u = !0,
            elementResize: a = "function" == typeof ResizeObserver,
            layoutShift: s = "function" == typeof IntersectionObserver,
            animationFrame: l = !1,
          } = o,
          c = We(e),
          f = i || u ? [...(c ? Ve(c) : []), ...Ve(t)] : [];
        f.forEach((e) => {
          i && e.addEventListener("scroll", n, { passive: !0 }),
            u && e.addEventListener("resize", n);
        });
        const d =
          c && s
            ? (function (e, t) {
                let n,
                  o = null;
                const i = Ae(e);
                function u() {
                  var e;
                  clearTimeout(n),
                    null == (e = o) || e.disconnect(),
                    (o = null);
                }
                return (
                  (function a(s, l) {
                    void 0 === s && (s = !1), void 0 === l && (l = 1), u();
                    const {
                      left: c,
                      top: f,
                      width: d,
                      height: D,
                    } = e.getBoundingClientRect();
                    if ((s || t(), !d || !D)) return;
                    const h = {
                      rootMargin:
                        -ee(f) +
                        "px " +
                        -ee(i.clientWidth - (c + d)) +
                        "px " +
                        -ee(i.clientHeight - (f + D)) +
                        "px " +
                        -ee(c) +
                        "px",
                      threshold: J(0, Y(1, l)) || 1,
                    };
                    let p = !0;
                    function m(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== l) {
                        if (!p) return a();
                        t
                          ? a(!1, t)
                          : (n = setTimeout(() => {
                              a(!1, 1e-7);
                            }, 1e3));
                      }
                      p = !1;
                    }
                    try {
                      o = new IntersectionObserver(
                        m,
                        (0, r.Z)({}, h, { root: i.ownerDocument })
                      );
                    } catch (v) {
                      o = new IntersectionObserver(m, h);
                    }
                    o.observe(e);
                  })(!0),
                  u
                );
              })(c, n)
            : null;
        let D,
          h = -1,
          p = null;
        a &&
          ((p = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === c &&
              p &&
              (p.unobserve(t),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                var e;
                null == (e = p) || e.observe(t);
              }))),
              n();
          })),
          c && !l && p.observe(c),
          p.observe(t));
        let m = l ? Ke(e) : null;
        return (
          l &&
            (function t() {
              const r = Ke(e);
              !m ||
                (r.x === m.x &&
                  r.y === m.y &&
                  r.width === m.width &&
                  r.height === m.height) ||
                n(),
                (m = r),
                (D = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            f.forEach((e) => {
              i && e.removeEventListener("scroll", n),
                u && e.removeEventListener("resize", n);
            }),
              null == d || d(),
              null == (e = p) || e.disconnect(),
              (p = null),
              l && cancelAnimationFrame(D);
          }
        );
      }
      const it = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
                x: n,
                y: o,
                placement: i,
                rects: u,
                platform: a,
                elements: s,
                middlewareData: l,
              } = t,
              { element: c, padding: f = 0 } = ie(e, t) || {};
            if (null == c) return {};
            const d = he(f),
              D = { x: n, y: o },
              h = fe(i),
              p = le(h),
              m = await a.getDimensions(c),
              v = "y" === h,
              g = v ? "top" : "left",
              y = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              E = u.reference[p] + u.reference[h] - D[h] - u.floating[p],
              C = D[h] - u.reference[h],
              w = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c));
            let _ = w ? w[b] : 0;
            (_ && (await (null == a.isElement ? void 0 : a.isElement(w)))) ||
              (_ = s.floating[b] || u.floating[p]);
            const F = E / 2 - C / 2,
              x = _ / 2 - m[p] / 2 - 1,
              A = Y(d[g], x),
              S = Y(d[y], x),
              k = A,
              O = _ - m[p] - S,
              B = _ / 2 - m[p] / 2 + F,
              R = oe(k, B, O),
              P =
                !l.arrow &&
                null != ae(i) &&
                B !== R &&
                u.reference[p] / 2 - (B < k ? A : S) - m[p] / 2 < 0,
              T = P ? (B < k ? B - k : B - O) : 0;
            return {
              [h]: D[h] + T,
              data: (0, r.Z)(
                { [h]: R, centerOffset: B - R - T },
                P && { alignmentOffset: T }
              ),
              reset: P,
            };
          },
        }),
        ut = (e, t, n) => {
          const o = new Map(),
            i = (0, r.Z)({ platform: rt }, n),
            u = (0, r.Z)({}, i.platform, { _c: o });
          return (async (e, t, n) => {
            const {
                placement: o = "bottom",
                strategy: i = "absolute",
                middleware: u = [],
                platform: a,
              } = n,
              s = u.filter(Boolean),
              l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: i,
              }),
              { x: f, y: d } = be(c, o, l),
              D = o,
              h = {},
              p = 0;
            for (let m = 0; m < s.length; m++) {
              const { name: n, fn: u } = s[m],
                {
                  x: v,
                  y: g,
                  data: y,
                  reset: b,
                } = await u({
                  x: f,
                  y: d,
                  initialPlacement: o,
                  placement: D,
                  strategy: i,
                  middlewareData: h,
                  rects: c,
                  platform: a,
                  elements: { reference: e, floating: t },
                });
              (f = null != v ? v : f),
                (d = null != g ? g : d),
                (h = (0, r.Z)({}, h, { [n]: (0, r.Z)({}, h[n], y) })),
                b &&
                  p <= 50 &&
                  (p++,
                  "object" == typeof b &&
                    (b.placement && (D = b.placement),
                    b.rects &&
                      (c =
                        !0 === b.rects
                          ? await a.getElementRects({
                              reference: e,
                              floating: t,
                              strategy: i,
                            })
                          : b.rects),
                    ({ x: f, y: d } = be(c, D, l))),
                  (m = -1));
            }
            return { x: f, y: d, placement: D, strategy: i, middlewareData: h };
          })(e, t, (0, r.Z)({}, i, { platform: u }));
        };
      var at = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function st(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 != r--; ) if (!st(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            const n = o[r];
            if (!(("_owner" === n && e.$$typeof) || st(e[n], t[n]))) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function lt(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ct(e, t) {
        const n = lt(e);
        return Math.round(t * n) / n;
      }
      function ft(e) {
        const t = i.useRef(e);
        return (
          at(() => {
            t.current = e;
          }),
          t
        );
      }
      const dt = (e, t) =>
          (0, r.Z)(
            {},
            (function (e) {
              return (
                void 0 === e && (e = 0),
                {
                  name: "offset",
                  options: e,
                  async fn(t) {
                    var n, o;
                    const { x: i, y: u, placement: a, middlewareData: s } = t,
                      l = await (async function (e, t) {
                        const { placement: n, platform: r, elements: o } = e,
                          i = await (null == r.isRTL
                            ? void 0
                            : r.isRTL(o.floating)),
                          u = ue(n),
                          a = ae(n),
                          s = "y" === ce(n),
                          l = ["left", "top"].includes(u) ? -1 : 1,
                          c = i && s ? -1 : 1,
                          f = ie(t, e);
                        let {
                          mainAxis: d,
                          crossAxis: D,
                          alignmentAxis: h,
                        } = "number" == typeof f
                          ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
                          : {
                              mainAxis: f.mainAxis || 0,
                              crossAxis: f.crossAxis || 0,
                              alignmentAxis: f.alignmentAxis,
                            };
                        return (
                          a &&
                            "number" == typeof h &&
                            (D = "end" === a ? -1 * h : h),
                          s ? { x: D * c, y: d * l } : { x: d * l, y: D * c }
                        );
                      })(t, e);
                    return a ===
                      (null == (n = s.offset) ? void 0 : n.placement) &&
                      null != (o = s.arrow) &&
                      o.alignmentOffset
                      ? {}
                      : {
                          x: i + l.x,
                          y: u + l.y,
                          data: (0, r.Z)({}, l, { placement: a }),
                        };
                  },
                }
              );
            })(e),
            { options: [e, t] }
          ),
        Dt = (e, t) =>
          (0, r.Z)(
            {},
            (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "shift",
                  options: e,
                  async fn(t) {
                    const { x: n, y: i, placement: u } = t,
                      a = ie(e, t),
                      {
                        mainAxis: s = !0,
                        crossAxis: l = !1,
                        limiter: c = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                      } = a,
                      f = (0, o.Z)(a, ge),
                      d = { x: n, y: i },
                      D = await Ee(t, f),
                      h = ce(ue(u)),
                      p = se(h);
                    let m = d[p],
                      v = d[h];
                    if (s) {
                      const e = "y" === p ? "bottom" : "right";
                      m = oe(m + D["y" === p ? "top" : "left"], m, m - D[e]);
                    }
                    if (l) {
                      const e = "y" === h ? "bottom" : "right";
                      v = oe(v + D["y" === h ? "top" : "left"], v, v - D[e]);
                    }
                    const g = c.fn((0, r.Z)({}, t, { [p]: m, [h]: v }));
                    return (0, r.Z)({}, g, {
                      data: {
                        x: g.x - n,
                        y: g.y - i,
                        enabled: { [p]: s, [h]: l },
                      },
                    });
                  },
                }
              );
            })(e),
            { options: [e, t] }
          ),
        ht = (e, t) =>
          (0, r.Z)(
            {},
            (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  options: e,
                  fn(t) {
                    const {
                        x: n,
                        y: o,
                        placement: i,
                        rects: u,
                        middlewareData: a,
                      } = t,
                      {
                        offset: s = 0,
                        mainAxis: l = !0,
                        crossAxis: c = !0,
                      } = ie(e, t),
                      f = { x: n, y: o },
                      d = ce(i),
                      D = se(d);
                    let h = f[D],
                      p = f[d];
                    const m = ie(s, t),
                      v =
                        "number" == typeof m
                          ? { mainAxis: m, crossAxis: 0 }
                          : (0, r.Z)({ mainAxis: 0, crossAxis: 0 }, m);
                    if (l) {
                      const e = "y" === D ? "height" : "width",
                        t = u.reference[D] - u.floating[e] + v.mainAxis,
                        n = u.reference[D] + u.reference[e] - v.mainAxis;
                      h < t ? (h = t) : h > n && (h = n);
                    }
                    if (c) {
                      var g, y;
                      const e = "y" === D ? "width" : "height",
                        t = ["top", "left"].includes(ue(i)),
                        n =
                          u.reference[d] -
                          u.floating[e] +
                          ((t && (null == (g = a.offset) ? void 0 : g[d])) ||
                            0) +
                          (t ? 0 : v.crossAxis),
                        r =
                          u.reference[d] +
                          u.reference[e] +
                          (t
                            ? 0
                            : (null == (y = a.offset) ? void 0 : y[d]) || 0) -
                          (t ? v.crossAxis : 0);
                      p < n ? (p = n) : p > r && (p = r);
                    }
                    return { [D]: h, [d]: p };
                  },
                }
              );
            })(e),
            { options: [e, t] }
          ),
        pt = (e, t) =>
          (0, r.Z)(
            {},
            (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "flip",
                  options: e,
                  async fn(t) {
                    var n, r;
                    const {
                        placement: i,
                        middlewareData: u,
                        rects: a,
                        initialPlacement: s,
                        platform: l,
                        elements: c,
                      } = t,
                      f = ie(e, t),
                      {
                        mainAxis: d = !0,
                        crossAxis: D = !0,
                        fallbackPlacements: h,
                        fallbackStrategy: p = "bestFit",
                        fallbackAxisSideDirection: m = "none",
                        flipAlignment: v = !0,
                      } = f,
                      g = (0, o.Z)(f, me);
                    if (null != (n = u.arrow) && n.alignmentOffset) return {};
                    const y = ue(i),
                      b = ce(s),
                      E = ue(s) === s,
                      C = await (null == l.isRTL
                        ? void 0
                        : l.isRTL(c.floating)),
                      w =
                        h ||
                        (E || !v
                          ? [De(s)]
                          : (function (e) {
                              const t = De(e);
                              return [de(e), t, de(t)];
                            })(s)),
                      _ = "none" !== m;
                    !h &&
                      _ &&
                      w.push(
                        ...(function (e, t, n, r) {
                          const o = ae(e);
                          let i = (function (e, t, n) {
                            const r = ["left", "right"],
                              o = ["right", "left"],
                              i = ["top", "bottom"],
                              u = ["bottom", "top"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                return n ? (t ? o : r) : t ? r : o;
                              case "left":
                              case "right":
                                return t ? i : u;
                              default:
                                return [];
                            }
                          })(ue(e), "start" === n, r);
                          return (
                            o &&
                              ((i = i.map((e) => e + "-" + o)),
                              t && (i = i.concat(i.map(de)))),
                            i
                          );
                        })(s, v, m, C)
                      );
                    const F = [s, ...w],
                      x = await Ee(t, g),
                      A = [];
                    let S = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                    if ((d && A.push(x[y]), D)) {
                      const e = (function (e, t, n) {
                        void 0 === n && (n = !1);
                        const r = ae(e),
                          o = fe(e),
                          i = le(o);
                        let u =
                          "x" === o
                            ? r === (n ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === r
                            ? "bottom"
                            : "top";
                        return (
                          t.reference[i] > t.floating[i] && (u = De(u)),
                          [u, De(u)]
                        );
                      })(i, a, C);
                      A.push(x[e[0]], x[e[1]]);
                    }
                    if (
                      ((S = [...S, { placement: i, overflows: A }]),
                      !A.every((e) => e <= 0))
                    ) {
                      var k, O;
                      const e =
                          ((null == (k = u.flip) ? void 0 : k.index) || 0) + 1,
                        t = F[e];
                      if (t)
                        return {
                          data: { index: e, overflows: S },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (O = S.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : O.placement;
                      if (!n)
                        switch (p) {
                          case "bestFit": {
                            var B;
                            const e =
                              null ==
                              (B = S.filter((e) => {
                                if (_) {
                                  const t = ce(e.placement);
                                  return t === b || "y" === t;
                                }
                                return !0;
                              })
                                .map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0),
                                ])
                                .sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : B[0];
                            e && (n = e);
                            break;
                          }
                          case "initialPlacement":
                            n = s;
                        }
                      if (i !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                }
              );
            })(e),
            { options: [e, t] }
          ),
        mt = (e, t) =>
          (0, r.Z)(
            {},
            (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "size",
                  options: e,
                  async fn(t) {
                    var n, i;
                    const {
                        placement: u,
                        rects: a,
                        platform: s,
                        elements: l,
                      } = t,
                      c = ie(e, t),
                      { apply: f = () => {} } = c,
                      d = (0, o.Z)(c, ye),
                      D = await Ee(t, d),
                      h = ue(u),
                      p = ae(u),
                      m = "y" === ce(u),
                      { width: v, height: g } = a.floating;
                    let y, b;
                    "top" === h || "bottom" === h
                      ? ((y = h),
                        (b =
                          p ===
                          ((await (null == s.isRTL
                            ? void 0
                            : s.isRTL(l.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((b = h), (y = "end" === p ? "top" : "bottom"));
                    const E = g - D.top - D.bottom,
                      C = v - D.left - D.right,
                      w = Y(g - D[y], E),
                      _ = Y(v - D[b], C),
                      F = !t.middlewareData.shift;
                    let x = w,
                      A = _;
                    if (
                      (null != (n = t.middlewareData.shift) &&
                        n.enabled.x &&
                        (A = C),
                      null != (i = t.middlewareData.shift) &&
                        i.enabled.y &&
                        (x = E),
                      F && !p)
                    ) {
                      const e = J(D.left, 0),
                        t = J(D.right, 0),
                        n = J(D.top, 0),
                        r = J(D.bottom, 0);
                      m
                        ? (A =
                            v -
                            2 *
                              (0 !== e || 0 !== t ? e + t : J(D.left, D.right)))
                        : (x =
                            g -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : J(D.top, D.bottom)));
                    }
                    await f(
                      (0, r.Z)({}, t, { availableWidth: A, availableHeight: x })
                    );
                    const S = await s.getDimensions(l.floating);
                    return v !== S.width || g !== S.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                }
              );
            })(e),
            { options: [e, t] }
          ),
        vt = (e, t) =>
          (0, r.Z)(
            {},
            (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    const { rects: n } = t,
                      i = ie(e, t),
                      { strategy: u = "referenceHidden" } = i,
                      a = (0, o.Z)(i, ve);
                    switch (u) {
                      case "referenceHidden": {
                        const e = Ce(
                          await Ee(
                            t,
                            (0, r.Z)({}, a, { elementContext: "reference" })
                          ),
                          n.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: we(e),
                          },
                        };
                      }
                      case "escaped": {
                        const e = Ce(
                          await Ee(t, (0, r.Z)({}, a, { altBoundary: !0 })),
                          n.floating
                        );
                        return { data: { escapedOffsets: e, escaped: we(e) } };
                      }
                      default:
                        return {};
                    }
                  },
                }
              );
            })(e),
            { options: [e, t] }
          ),
        gt = (e, t) =>
          (0, r.Z)(
            {},
            ((e) => ({
              name: "arrow",
              options: e,
              fn(t) {
                const { element: n, padding: r } =
                  "function" == typeof e ? e(t) : e;
                return n && ((o = n), {}.hasOwnProperty.call(o, "current"))
                  ? null != n.current
                    ? it({ element: n.current, padding: r }).fn(t)
                    : {}
                  : n
                  ? it({ element: n, padding: r }).fn(t)
                  : {};
                var o;
              },
            }))(e),
            { options: [e, t] }
          ),
        yt = ["__scopePopper", "virtualRef"],
        bt = [
          "__scopePopper",
          "side",
          "sideOffset",
          "align",
          "alignOffset",
          "arrowPadding",
          "collisionBoundary",
          "collisionPadding",
          "sticky",
          "hideWhenDetached",
          "avoidCollisions",
          "onPlaced",
        ],
        Et = "Popper",
        [Ct, wt] = f(Et),
        [_t, Ft] = Ct(Et),
        xt = (0, i.forwardRef)((e, t) => {
          const { __scopePopper: n, virtualRef: u } = e,
            a = (0, o.Z)(e, yt),
            s = Ft("PopperAnchor", n),
            l = (0, i.useRef)(null),
            c = h(t, l);
          return (
            (0, i.useEffect)(() => {
              s.onAnchorChange((null == u ? void 0 : u.current) || l.current);
            }),
            u ? null : (0, i.createElement)(_.div, (0, r.Z)({}, a, { ref: c }))
          );
        }),
        At = "PopperContent",
        [St, kt] = Ct(At),
        Ot = (0, i.forwardRef)((e, t) => {
          var n, u, s, l, c, f, d, D;
          const {
              __scopePopper: p,
              side: m = "bottom",
              sideOffset: v = 0,
              align: g = "center",
              alignOffset: y = 0,
              arrowPadding: b = 0,
              collisionBoundary: E = [],
              collisionPadding: C = 0,
              sticky: w = "partial",
              hideWhenDetached: x = !1,
              avoidCollisions: A = !0,
              onPlaced: S,
            } = e,
            k = (0, o.Z)(e, bt),
            O = Ft(At, p),
            [B, R] = (0, i.useState)(null),
            P = h(t, (e) => R(e)),
            [T, N] = (0, i.useState)(null),
            I = (function (e) {
              const [t, n] = (0, i.useState)(void 0);
              return (
                $(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    const t = new ResizeObserver((t) => {
                      if (!Array.isArray(t)) return;
                      if (!t.length) return;
                      const r = t[0];
                      let o, i;
                      if ("borderBoxSize" in r) {
                        const e = r.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (o = t.inlineSize), (i = t.blockSize);
                      } else (o = e.offsetWidth), (i = e.offsetHeight);
                      n({ width: o, height: i });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(T),
            j =
              null !== (n = null == I ? void 0 : I.width) && void 0 !== n
                ? n
                : 0,
            L =
              null !== (u = null == I ? void 0 : I.height) && void 0 !== u
                ? u
                : 0,
            M = m + ("center" !== g ? "-" + g : ""),
            z =
              "number" == typeof C
                ? C
                : (0, r.Z)({ top: 0, right: 0, bottom: 0, left: 0 }, C),
            Z = Array.isArray(E) ? E : [E],
            V = Z.length > 0,
            U = { padding: z, boundary: Z.filter(Bt), altBoundary: V },
            {
              refs: H,
              floatingStyles: W,
              placement: G,
              isPositioned: q,
              middlewareData: K,
            } = (function (e) {
              void 0 === e && (e = {});
              const {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: o = [],
                  platform: u,
                  elements: { reference: s, floating: l } = {},
                  transform: c = !0,
                  whileElementsMounted: f,
                  open: d,
                } = e,
                [D, h] = i.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = i.useState(o);
              st(p, o) || m(o);
              const [v, g] = i.useState(null),
                [y, b] = i.useState(null),
                E = i.useCallback((e) => {
                  e !== F.current && ((F.current = e), g(e));
                }, []),
                C = i.useCallback((e) => {
                  e !== x.current && ((x.current = e), b(e));
                }, []),
                w = s || v,
                _ = l || y,
                F = i.useRef(null),
                x = i.useRef(null),
                A = i.useRef(D),
                S = null != f,
                k = ft(f),
                O = ft(u),
                B = ft(d),
                R = i.useCallback(() => {
                  if (!F.current || !x.current) return;
                  const e = { placement: t, strategy: n, middleware: p };
                  O.current && (e.platform = O.current),
                    ut(F.current, x.current, e).then((e) => {
                      const t = (0, r.Z)({}, e, {
                        isPositioned: !1 !== B.current,
                      });
                      P.current &&
                        !st(A.current, t) &&
                        ((A.current = t),
                        a.flushSync(() => {
                          h(t);
                        }));
                    });
                }, [p, t, n, O, B]);
              at(() => {
                !1 === d &&
                  A.current.isPositioned &&
                  ((A.current.isPositioned = !1),
                  h((e) => (0, r.Z)({}, e, { isPositioned: !1 })));
              }, [d]);
              const P = i.useRef(!1);
              at(
                () => (
                  (P.current = !0),
                  () => {
                    P.current = !1;
                  }
                ),
                []
              ),
                at(() => {
                  if ((w && (F.current = w), _ && (x.current = _), w && _)) {
                    if (k.current) return k.current(w, _, R);
                    R();
                  }
                }, [w, _, R, k, S]);
              const T = i.useMemo(
                  () => ({
                    reference: F,
                    floating: x,
                    setReference: E,
                    setFloating: C,
                  }),
                  [E, C]
                ),
                N = i.useMemo(() => ({ reference: w, floating: _ }), [w, _]),
                I = i.useMemo(() => {
                  const e = { position: n, left: 0, top: 0 };
                  if (!N.floating) return e;
                  const t = ct(N.floating, D.x),
                    o = ct(N.floating, D.y);
                  return c
                    ? (0, r.Z)(
                        {},
                        e,
                        { transform: "translate(" + t + "px, " + o + "px)" },
                        lt(N.floating) >= 1.5 && { willChange: "transform" }
                      )
                    : { position: n, left: t, top: o };
                }, [n, c, N.floating, D.x, D.y]);
              return i.useMemo(
                () =>
                  (0, r.Z)({}, D, {
                    update: R,
                    refs: T,
                    elements: N,
                    floatingStyles: I,
                  }),
                [D, R, T, N, I]
              );
            })({
              strategy: "fixed",
              placement: M,
              whileElementsMounted: ot,
              elements: { reference: O.anchor },
              middleware: [
                dt({ mainAxis: v + L, alignmentAxis: y }),
                A &&
                  Dt(
                    (0, r.Z)(
                      {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: "partial" === w ? ht() : void 0,
                      },
                      U
                    )
                  ),
                A && pt((0, r.Z)({}, U)),
                mt(
                  (0, r.Z)({}, U, {
                    apply: ({
                      elements: e,
                      rects: t,
                      availableWidth: n,
                      availableHeight: r,
                    }) => {
                      const { width: o, height: i } = t.reference,
                        u = e.floating.style;
                      u.setProperty("--radix-popper-available-width", `${n}px`),
                        u.setProperty(
                          "--radix-popper-available-height",
                          `${r}px`
                        ),
                        u.setProperty("--radix-popper-anchor-width", `${o}px`),
                        u.setProperty("--radix-popper-anchor-height", `${i}px`);
                    },
                  })
                ),
                T && gt({ element: T, padding: b }),
                Rt({ arrowWidth: j, arrowHeight: L }),
                x && vt({ strategy: "referenceHidden" }),
              ],
            }),
            [X, Y] = Pt(G),
            J = F(S);
          $(() => {
            q && (null == J || J());
          }, [q, J]);
          const Q = null === (s = K.arrow) || void 0 === s ? void 0 : s.x,
            ee = null === (l = K.arrow) || void 0 === l ? void 0 : l.y,
            te =
              0 !==
              (null === (c = K.arrow) || void 0 === c
                ? void 0
                : c.centerOffset),
            [ne, re] = (0, i.useState)();
          return (
            $(() => {
              B && re(window.getComputedStyle(B).zIndex);
            }, [B]),
            (0, i.createElement)(
              "div",
              {
                ref: H.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: (0, r.Z)({}, W, {
                  transform: q ? W.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: ne,
                  "--radix-popper-transform-origin": [
                    null === (f = K.transformOrigin) || void 0 === f
                      ? void 0
                      : f.x,
                    null === (d = K.transformOrigin) || void 0 === d
                      ? void 0
                      : d.y,
                  ].join(" "),
                }),
                dir: e.dir,
              },
              (0, i.createElement)(
                St,
                {
                  scope: p,
                  placedSide: X,
                  onArrowChange: N,
                  arrowX: Q,
                  arrowY: ee,
                  shouldHideArrow: te,
                },
                (0, i.createElement)(
                  _.div,
                  (0, r.Z)({ "data-side": X, "data-align": Y }, k, {
                    ref: P,
                    style: (0, r.Z)({}, k.style, {
                      animation: q ? void 0 : "none",
                      opacity:
                        null !== (D = K.hide) &&
                        void 0 !== D &&
                        D.referenceHidden
                          ? 0
                          : void 0,
                    }),
                  })
                )
              )
            )
          );
        });
      function Bt(e) {
        return null !== e;
      }
      const Rt = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, u;
          const { placement: a, rects: s, middlewareData: l } = t,
            c =
              0 !==
              (null === (n = l.arrow) || void 0 === n
                ? void 0
                : n.centerOffset),
            f = c ? 0 : e.arrowWidth,
            d = c ? 0 : e.arrowHeight,
            [D, h] = Pt(a),
            p = { start: "0%", center: "50%", end: "100%" }[h],
            m =
              (null !==
                (r = null === (o = l.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              f / 2,
            v =
              (null !==
                (i = null === (u = l.arrow) || void 0 === u ? void 0 : u.y) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2;
          let g = "",
            y = "";
          return (
            "bottom" === D
              ? ((g = c ? p : `${m}px`), (y = -d + "px"))
              : "top" === D
              ? ((g = c ? p : `${m}px`), (y = `${s.floating.height + d}px`))
              : "right" === D
              ? ((g = -d + "px"), (y = c ? p : `${v}px`))
              : "left" === D &&
                ((g = `${s.floating.width + d}px`), (y = c ? p : `${v}px`)),
            { data: { x: g, y } }
          );
        },
      });
      function Pt(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n];
      }
      const Tt = (e) => {
          const { __scopePopper: t, children: n } = e,
            [r, o] = (0, i.useState)(null);
          return (0, i.createElement)(
            _t,
            { scope: t, anchor: r, onAnchorChange: o },
            n
          );
        },
        Nt = xt,
        It = Ot,
        jt = ["container"],
        Lt = (0, i.forwardRef)((e, t) => {
          var n;
          const {
              container: u = null === globalThis ||
              void 0 === globalThis ||
              null === (n = globalThis.document) ||
              void 0 === n
                ? void 0
                : n.body,
            } = e,
            s = (0, o.Z)(e, jt);
          return u
            ? a.createPortal(
                (0, i.createElement)(_.div, (0, r.Z)({}, s, { ref: t })),
                u
              )
            : null;
        });
      function Mt({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        const [r, o] = (function ({ defaultProp: e, onChange: t }) {
            const n = (0, i.useState)(e),
              [r] = n,
              o = (0, i.useRef)(r),
              u = F(t);
            return (
              (0, i.useEffect)(() => {
                o.current !== r && (u(r), (o.current = r));
              }, [r, o, u]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          u = void 0 !== e,
          a = u ? e : r,
          s = F(n);
        return [
          a,
          (0, i.useCallback)(
            (t) => {
              if (u) {
                const n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else o(t);
            },
            [u, e, o, s]
          ),
        ];
      }
      const zt = (0, i.forwardRef)((e, t) =>
        (0, i.createElement)(
          _.span,
          (0, r.Z)({}, e, {
            ref: t,
            style: (0, r.Z)(
              {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
              },
              e.style
            ),
          })
        )
      );
      var Zt = new WeakMap(),
        Vt = new WeakMap(),
        Ut = {},
        Ht = 0,
        Wt = function (e) {
          return e && (e.host || Wt(e.parentNode));
        },
        $t = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              (function (e) {
                return "undefined" == typeof document
                  ? null
                  : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
              })(e);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              (function (e, t, n, r) {
                var o = (function (e, t) {
                  return t
                    .map(function (t) {
                      if (e.contains(t)) return t;
                      var n = Wt(t);
                      return n && e.contains(n) ? n : null;
                    })
                    .filter(function (e) {
                      return Boolean(e);
                    });
                })(t, Array.isArray(e) ? e : [e]);
                Ut[n] || (Ut[n] = new WeakMap());
                var i = Ut[n],
                  u = [],
                  a = new Set(),
                  s = new Set(o),
                  l = function (e) {
                    e && !a.has(e) && (a.add(e), l(e.parentNode));
                  };
                o.forEach(l);
                var c = function (e) {
                  e &&
                    !s.has(e) &&
                    Array.prototype.forEach.call(e.children, function (e) {
                      if (a.has(e)) c(e);
                      else
                        try {
                          var t = e.getAttribute(r),
                            o = null !== t && "false" !== t,
                            s = (Zt.get(e) || 0) + 1,
                            l = (i.get(e) || 0) + 1;
                          Zt.set(e, s),
                            i.set(e, l),
                            u.push(e),
                            1 === s && o && Vt.set(e, !0),
                            1 === l && e.setAttribute(n, "true"),
                            o || e.setAttribute(r, "true");
                        } catch (f) {}
                    });
                };
                return (
                  c(t),
                  a.clear(),
                  Ht++,
                  function () {
                    u.forEach(function (e) {
                      var t = Zt.get(e) - 1,
                        o = i.get(e) - 1;
                      Zt.set(e, t),
                        i.set(e, o),
                        t || (Vt.has(e) || e.removeAttribute(r), Vt.delete(e)),
                        o || e.removeAttribute(n);
                    }),
                      --Ht ||
                        ((Zt = new WeakMap()),
                        (Zt = new WeakMap()),
                        (Vt = new WeakMap()),
                        (Ut = {}));
                  }
                );
              })(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        Gt = function () {
          return (
            (Gt =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Gt.apply(this, arguments)
          );
        };
      function qt(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      }
      Object.create,
        Object.create,
        "function" == typeof SuppressedError && SuppressedError;
      var Kt = "right-scroll-bar-position",
        Xt = "width-before-scroll-bar";
      function Yt(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var Jt = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        Qt = new WeakMap();
      function en(e) {
        return e;
      }
      var tn = (function (e) {
          void 0 === e && (e = {});
          var t = (function (e, t) {
            void 0 === t && (t = en);
            var n = [],
              r = !1;
            return {
              read: function () {
                if (r)
                  throw new Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : e;
              },
              useMedium: function (e) {
                var o = t(e, r);
                return (
                  n.push(o),
                  function () {
                    n = n.filter(function (e) {
                      return e !== o;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (r = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var o = n;
                  (n = []), o.forEach(e), (t = n);
                }
                var i = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  u = function () {
                    return Promise.resolve().then(i);
                  };
                u(),
                  (n = {
                    push: function (e) {
                      t.push(e), u();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            };
          })(null);
          return (t.options = Gt({ async: !0, ssr: !1 }, e)), t;
        })(),
        nn = function () {},
        rn = i.forwardRef(function (e, t) {
          var n = i.useRef(null),
            r = i.useState({
              onScrollCapture: nn,
              onWheelCapture: nn,
              onTouchMoveCapture: nn,
            }),
            o = r[0],
            u = r[1],
            a = e.forwardProps,
            s = e.children,
            l = e.className,
            c = e.removeScrollBar,
            f = e.enabled,
            d = e.shards,
            D = e.sideCar,
            h = e.noIsolation,
            p = e.inert,
            m = e.allowPinchZoom,
            v = e.as,
            g = void 0 === v ? "div" : v,
            y = qt(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            b = D,
            E = (function (e, t) {
              var n,
                r,
                o,
                u =
                  ((n = t || null),
                  (r = function (t) {
                    return e.forEach(function (e) {
                      return Yt(e, t);
                    });
                  }),
                  ((o = (0, i.useState)(function () {
                    return {
                      value: n,
                      callback: r,
                      facade: {
                        get current() {
                          return o.value;
                        },
                        set current(e) {
                          var t = o.value;
                          t !== e && ((o.value = e), o.callback(e, t));
                        },
                      },
                    };
                  })[0]).callback = r),
                  o.facade);
              return (
                Jt(
                  function () {
                    var t = Qt.get(u);
                    if (t) {
                      var n = new Set(t),
                        r = new Set(e),
                        o = u.current;
                      n.forEach(function (e) {
                        r.has(e) || Yt(e, null);
                      }),
                        r.forEach(function (e) {
                          n.has(e) || Yt(e, o);
                        });
                    }
                    Qt.set(u, e);
                  },
                  [e]
                ),
                u
              );
            })([n, t]),
            C = Gt(Gt({}, y), o);
          return i.createElement(
            i.Fragment,
            null,
            f &&
              i.createElement(b, {
                sideCar: tn,
                removeScrollBar: c,
                shards: d,
                noIsolation: h,
                inert: p,
                setCallbacks: u,
                allowPinchZoom: !!m,
                lockRef: n,
              }),
            a
              ? i.cloneElement(i.Children.only(s), Gt(Gt({}, C), { ref: E }))
              : i.createElement(g, Gt({}, C, { className: l, ref: E }), s)
          );
        });
      (rn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (rn.classNames = { fullWidth: Xt, zeroRight: Kt });
      var on = function (e) {
        var t = e.sideCar,
          n = qt(e, ["sideCar"]);
        if (!t)
          throw new Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return i.createElement(r, Gt({}, n));
      };
      on.isSideCarExport = !0;
      var un = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              var o, i;
              0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })()) &&
                ((i = r),
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = i)
                  : o.appendChild(document.createTextNode(i)),
                (function (e) {
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(e);
                })(t)),
                e++;
            },
            remove: function () {
              !--e &&
                t &&
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        an = function () {
          var e,
            t =
              ((e = un()),
              function (t, n) {
                i.useEffect(
                  function () {
                    return (
                      e.add(t),
                      function () {
                        e.remove();
                      }
                    );
                  },
                  [t && n]
                );
              });
          return function (e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null;
          };
        },
        sn = { left: 0, top: 0, right: 0, gap: 0 },
        ln = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        cn = an(),
        fn = "data-scroll-locked",
        dn = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            a = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(fn, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        u,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(a, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(a, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(Kt, " {\n    right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Xt, " {\n    margin-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Kt, " .")
              .concat(Kt, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Xt, " .")
              .concat(Xt, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(fn, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(a, "px;\n  }\n")
          );
        },
        Dn = function () {
          var e = parseInt(document.body.getAttribute(fn) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        hn = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          i.useEffect(function () {
            return (
              document.body.setAttribute(fn, (Dn() + 1).toString()),
              function () {
                var e = Dn() - 1;
                e <= 0
                  ? document.body.removeAttribute(fn)
                  : document.body.setAttribute(fn, e.toString());
              }
            );
          }, []);
          var u = i.useMemo(
            function () {
              return (function (e) {
                if (
                  (void 0 === e && (e = "margin"), "undefined" == typeof window)
                )
                  return sn;
                var t = (function (e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = t["padding" === e ? "paddingTop" : "marginTop"],
                      o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [ln(n), ln(r), ln(o)];
                  })(e),
                  n = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, r - n + t[2] - t[0]),
                };
              })(o);
            },
            [o]
          );
          return i.createElement(cn, {
            styles: dn(u, !t, o, n ? "" : "!important"),
          });
        },
        pn = !1;
      if ("undefined" != typeof window)
        try {
          var mn = Object.defineProperty({}, "passive", {
            get: function () {
              return (pn = !0), !0;
            },
          });
          window.addEventListener("test", mn, mn),
            window.removeEventListener("test", mn, mn);
        } catch (Mr) {
          pn = !1;
        }
      var vn = !!pn && { passive: !1 },
        gn = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              !(function (e) {
                return "TEXTAREA" === e.tagName;
              })(e) &&
              "visible" === n[t]
            )
          );
        },
        yn = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              bn(e, n))
            ) {
              var r = En(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        bn = function (e, t) {
          return "v" === e
            ? (function (e) {
                return gn(e, "overflowY");
              })(t)
            : (function (e) {
                return gn(e, "overflowX");
              })(t);
        },
        En = function (e, t) {
          return "v" === e
            ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
            : (function (e) {
                return [e.scrollLeft, e.scrollWidth, e.clientWidth];
              })(t);
          var n;
        },
        Cn = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        wn = function (e) {
          return [e.deltaX, e.deltaY];
        },
        _n = function (e) {
          return e && "current" in e ? e.current : e;
        },
        Fn = function (e) {
          return "\n  .block-interactivity-"
            .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
            .concat(e, " {pointer-events: all;}\n");
        },
        xn = 0,
        An = [];
      const Sn =
        ((kn = function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(xn++)[0],
            u = i.useState(function () {
              return an();
            })[0],
            a = i.useRef(e);
          i.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 === arguments.length)
                      for (var r, o = 0, i = t.length; o < i; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(_n), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var s = i.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !a.current.allowPinchZoom;
              var o,
                i = Cn(e),
                u = n.current,
                s = "deltaX" in e ? e.deltaX : u[0] - i[0],
                l = "deltaY" in e ? e.deltaY : u[1] - i[1],
                c = e.target,
                f = Math.abs(s) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === f && "range" === c.type) return !1;
              var d = yn(f, c);
              if (!d) return !0;
              if (
                (d ? (o = f) : ((o = "v" === f ? "h" : "v"), (d = yn(f, c))),
                !d)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || l) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var D = r.current || o;
              return (function (e, t, n, r) {
                var o = (function (e, t) {
                    return "h" === e && "rtl" === t ? -1 : 1;
                  })(e, window.getComputedStyle(t).direction),
                  i = o * r,
                  u = n.target,
                  a = t.contains(u),
                  s = !1,
                  l = i > 0,
                  c = 0,
                  f = 0;
                do {
                  var d = En(e, u),
                    D = d[0],
                    h = d[1] - d[2] - o * D;
                  (D || h) && bn(e, u) && ((c += h), (f += D)),
                    (u = u.parentNode);
                } while ((!a && u !== document.body) || (a && (t.contains(u) || t === u)));
                return (
                  ((l && (0 === c || !1)) || (!l && (0 === f || !1))) &&
                    (s = !0),
                  s
                );
              })(D, t, e, "h" === D ? s : l);
            }, []),
            l = i.useCallback(function (e) {
              var n = e;
              if (An.length && An[An.length - 1] === u) {
                var r = "deltaY" in n ? wn(n) : Cn(n),
                  o = t.current.filter(function (e) {
                    return (
                      e.name === n.type &&
                      e.target === n.target &&
                      ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1])
                    );
                    var t, o;
                  })[0];
                if (o && o.should) n.cancelable && n.preventDefault();
                else if (!o) {
                  var i = (a.current.shards || [])
                    .map(_n)
                    .filter(Boolean)
                    .filter(function (e) {
                      return e.contains(n.target);
                    });
                  (i.length > 0 ? s(n, i[0]) : !a.current.noIsolation) &&
                    n.cancelable &&
                    n.preventDefault();
                }
              }
            }, []),
            c = i.useCallback(function (e, n, r, o) {
              var i = { name: e, delta: n, target: r, should: o };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            f = i.useCallback(function (e) {
              (n.current = Cn(e)), (r.current = void 0);
            }, []),
            d = i.useCallback(function (t) {
              c(t.type, wn(t), t.target, s(t, e.lockRef.current));
            }, []),
            D = i.useCallback(function (t) {
              c(t.type, Cn(t), t.target, s(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              An.push(u),
              e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: D,
              }),
              document.addEventListener("wheel", l, vn),
              document.addEventListener("touchmove", l, vn),
              document.addEventListener("touchstart", f, vn),
              function () {
                (An = An.filter(function (e) {
                  return e !== u;
                })),
                  document.removeEventListener("wheel", l, vn),
                  document.removeEventListener("touchmove", l, vn),
                  document.removeEventListener("touchstart", f, vn);
              }
            );
          }, []);
          var h = e.removeScrollBar,
            p = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            p ? i.createElement(u, { styles: Fn(o) }) : null,
            h ? i.createElement(hn, { gapMode: "margin" }) : null
          );
        }),
        tn.useMedium(kn),
        on);
      var kn,
        On = i.forwardRef(function (e, t) {
          return i.createElement(rn, Gt({}, e, { ref: t, sideCar: Sn }));
        });
      On.classNames = rn.classNames;
      const Bn = On,
        Rn = ["__scopeSelect", "disabled"],
        Pn = ["__scopeSelect", "className", "style", "children", "placeholder"],
        Tn = ["__scopeSelect", "children"],
        Nn = [
          "__scopeSelect",
          "position",
          "onCloseAutoFocus",
          "onEscapeKeyDown",
          "onPointerDownOutside",
          "side",
          "sideOffset",
          "align",
          "alignOffset",
          "arrowPadding",
          "collisionBoundary",
          "collisionPadding",
          "sticky",
          "hideWhenDetached",
          "avoidCollisions",
        ],
        In = ["__scopeSelect", "onPlaced"],
        jn = ["__scopeSelect", "align", "collisionPadding"],
        Ln = ["__scopeSelect"],
        Mn = ["__scopeSelect", "value", "disabled", "textValue"],
        zn = ["__scopeSelect", "className", "style"],
        Zn = ["__scopeSelect"],
        Vn = ["value"],
        Un = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Hn = [" ", "Enter"],
        Wn = "Select",
        [$n, Gn, qn] = (function (e) {
          const t = e + "CollectionProvider",
            [n, u] = f(t),
            [a, s] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            l = e + "CollectionSlot",
            c = e + "CollectionItemSlot",
            d = "data-radix-collection-item";
          return [
            {
              Provider: (e) => {
                const { scope: t, children: n } = e,
                  r = i.useRef(null),
                  o = i.useRef(new Map()).current;
                return i.createElement(
                  a,
                  { scope: t, itemMap: o, collectionRef: r },
                  n
                );
              },
              Slot: i.forwardRef((e, t) => {
                const { scope: n, children: r } = e,
                  o = h(t, s(l, n).collectionRef);
                return i.createElement(v, { ref: o }, r);
              }),
              ItemSlot: i.forwardRef((e, t) => {
                const { scope: n, children: u } = e,
                  a = (0, o.Z)(e, E),
                  l = i.useRef(null),
                  f = h(t, l),
                  D = s(c, n);
                return (
                  i.useEffect(
                    () => (
                      D.itemMap.set(l, (0, r.Z)({ ref: l }, a)),
                      () => {
                        D.itemMap.delete(l);
                      }
                    )
                  ),
                  i.createElement(v, { [d]: "", ref: f }, u)
                );
              }),
            },
            function (t) {
              const n = s(e + "CollectionConsumer", t);
              return i.useCallback(() => {
                const e = n.collectionRef.current;
                if (!e) return [];
                const t = Array.from(e.querySelectorAll(`[${d}]`));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            u,
          ];
        })(Wn),
        [Kn, Xn] = f(Wn, [qn, wt]),
        Yn = wt(),
        [Jn, Qn] = Kn(Wn),
        [er, tr] = Kn(Wn),
        nr = (0, i.forwardRef)((e, t) => {
          const { __scopeSelect: n, disabled: u = !1 } = e,
            a = (0, o.Z)(e, Rn),
            s = Yn(n),
            c = Qn("SelectTrigger", n),
            f = c.disabled || u,
            d = h(t, c.onTriggerChange),
            D = Gn(n),
            [p, m, v] = Ar((e) => {
              const t = D().filter((e) => !e.disabled),
                n = t.find((e) => e.value === c.value),
                r = Sr(t, e, n);
              void 0 !== r && c.onValueChange(r.value);
            }),
            g = () => {
              f || (c.onOpenChange(!0), v());
            };
          return (0, i.createElement)(
            Nt,
            (0, r.Z)({ asChild: !0 }, s),
            (0, i.createElement)(
              _.button,
              (0, r.Z)(
                {
                  type: "button",
                  role: "combobox",
                  "aria-controls": c.contentId,
                  "aria-expanded": c.open,
                  "aria-required": c.required,
                  "aria-autocomplete": "none",
                  dir: c.dir,
                  "data-state": c.open ? "open" : "closed",
                  disabled: f,
                  "data-disabled": f ? "" : void 0,
                  "data-placeholder": void 0 === c.value ? "" : void 0,
                },
                a,
                {
                  ref: d,
                  onClick: l(a.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: l(a.onPointerDown, (e) => {
                    const t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (g(),
                        (c.triggerPointerDownPosRef.current = {
                          x: Math.round(e.pageX),
                          y: Math.round(e.pageY),
                        }),
                        e.preventDefault());
                  }),
                  onKeyDown: l(a.onKeyDown, (e) => {
                    const t = "" !== p.current;
                    e.ctrlKey ||
                      e.altKey ||
                      e.metaKey ||
                      1 !== e.key.length ||
                      m(e.key),
                      (t && " " === e.key) ||
                        (Un.includes(e.key) && (g(), e.preventDefault()));
                  }),
                }
              )
            )
          );
        }),
        rr = (0, i.forwardRef)((e, t) => {
          const { __scopeSelect: n, children: u, placeholder: a } = e,
            s = (0, o.Z)(e, Pn),
            l = Qn("SelectValue", n),
            { onValueNodeHasChildrenChange: c } = l,
            f = void 0 !== u,
            d = h(t, l.onValueNodeChange);
          return (
            $(() => {
              c(f);
            }, [c, f]),
            (0, i.createElement)(
              _.span,
              (0, r.Z)({}, s, { ref: d, style: { pointerEvents: "none" } }),
              void 0 === l.value && void 0 !== a ? a : u
            )
          );
        }),
        or = (0, i.forwardRef)((e, t) => {
          const { children: n } = e,
            u = (0, o.Z)(e, Tn);
          return (0, i.createElement)(
            _.span,
            (0, r.Z)({ "aria-hidden": !0 }, u, { ref: t }),
            n || "▼"
          );
        }),
        ir = "SelectContent",
        ur = (0, i.forwardRef)((e, t) => {
          const n = Qn(ir, e.__scopeSelect),
            [o, u] = (0, i.useState)();
          if (
            ($(() => {
              u(new DocumentFragment());
            }, []),
            !n.open)
          ) {
            const t = o;
            return t
              ? (0, a.createPortal)(
                  (0, i.createElement)(
                    sr,
                    { scope: e.__scopeSelect },
                    (0, i.createElement)(
                      $n.Slot,
                      { scope: e.__scopeSelect },
                      (0, i.createElement)("div", null, e.children)
                    )
                  ),
                  t
                )
              : null;
          }
          return (0, i.createElement)(cr, (0, r.Z)({}, e, { ref: t }));
        }),
        ar = 10,
        [sr, lr] = Kn(ir),
        cr = (0, i.forwardRef)((e, t) => {
          const {
              __scopeSelect: n,
              position: u = "item-aligned",
              onCloseAutoFocus: a,
              onEscapeKeyDown: s,
              onPointerDownOutside: c,
              side: f,
              sideOffset: d,
              align: D,
              alignOffset: p,
              arrowPadding: m,
              collisionBoundary: g,
              collisionPadding: y,
              sticky: b,
              hideWhenDetached: E,
              avoidCollisions: C,
            } = e,
            w = (0, o.Z)(e, Nn),
            _ = Qn(ir, n),
            [F, x] = (0, i.useState)(null),
            [A, S] = (0, i.useState)(null),
            k = h(t, (e) => x(e)),
            [B, R] = (0, i.useState)(null),
            [N, I] = (0, i.useState)(null),
            j = Gn(n),
            [L, z] = (0, i.useState)(!1),
            Z = (0, i.useRef)(!1);
          (0, i.useEffect)(() => {
            if (F) return $t(F);
          }, [F]),
            (0, i.useEffect)(() => {
              var e, t;
              const n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : T()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : T()
                ),
                P++,
                () => {
                  1 === P &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    P--;
                }
              );
            }, []);
          const V = (0, i.useCallback)(
              (e) => {
                const [t, ...n] = j().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (const i of e) {
                  if (i === o) return;
                  if (
                    (null == i || i.scrollIntoView({ block: "nearest" }),
                    i === t && A && (A.scrollTop = 0),
                    i === r && A && (A.scrollTop = A.scrollHeight),
                    null == i || i.focus(),
                    document.activeElement !== o)
                  )
                    return;
                }
              },
              [j, A]
            ),
            U = (0, i.useCallback)(() => V([B, F]), [V, B, F]);
          (0, i.useEffect)(() => {
            L && U();
          }, [L, U]);
          const { onOpenChange: H, triggerPointerDownPosRef: W } = _;
          (0, i.useEffect)(() => {
            if (F) {
              let e = { x: 0, y: 0 };
              const t = (t) => {
                  var n, r, o, i;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (r = W.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (o =
                            null === (i = W.current) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== o
                          ? o
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : F.contains(n.target) || H(!1),
                    document.removeEventListener("pointermove", t),
                    (W.current = null);
                };
              return (
                null !== W.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [F, H, W]),
            (0, i.useEffect)(() => {
              const e = () => H(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [H]);
          const [$, G] = Ar((e) => {
              const t = j().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = Sr(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            q = (0, i.useCallback)(
              (e, t, n) => {
                const r = !Z.current && !n;
                ((void 0 !== _.value && _.value === t) || r) &&
                  (R(e), r && (Z.current = !0));
              },
              [_.value]
            ),
            K = (0, i.useCallback)(() => (null == F ? void 0 : F.focus()), [F]),
            X = (0, i.useCallback)(
              (e, t, n) => {
                const r = !Z.current && !n;
                ((void 0 !== _.value && _.value === t) || r) && I(e);
              },
              [_.value]
            ),
            Y = "popper" === u ? dr : fr,
            J =
              Y === dr
                ? {
                    side: f,
                    sideOffset: d,
                    align: D,
                    alignOffset: p,
                    arrowPadding: m,
                    collisionBoundary: g,
                    collisionPadding: y,
                    sticky: b,
                    hideWhenDetached: E,
                    avoidCollisions: C,
                  }
                : {};
          return (0, i.createElement)(
            sr,
            {
              scope: n,
              content: F,
              viewport: A,
              onViewportChange: S,
              itemRefCallback: q,
              selectedItem: B,
              onItemLeave: K,
              itemTextRefCallback: X,
              focusSelectedItem: U,
              selectedItemText: N,
              position: u,
              isPositioned: L,
              searchRef: $,
            },
            (0, i.createElement)(
              Bn,
              { as: v, allowPinchZoom: !0 },
              (0, i.createElement)(
                M,
                {
                  asChild: !0,
                  trapped: _.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: l(a, (e) => {
                    var t;
                    null === (t = _.trigger) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }),
                      e.preventDefault();
                  }),
                },
                (0, i.createElement)(
                  O,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: c,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => _.onOpenChange(!1),
                  },
                  (0, i.createElement)(
                    Y,
                    (0, r.Z)(
                      {
                        role: "listbox",
                        id: _.contentId,
                        "data-state": _.open ? "open" : "closed",
                        dir: _.dir,
                        onContextMenu: (e) => e.preventDefault(),
                      },
                      w,
                      J,
                      {
                        onPlaced: () => z(!0),
                        ref: k,
                        style: (0, r.Z)(
                          {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                          },
                          w.style
                        ),
                        onKeyDown: l(w.onKeyDown, (e) => {
                          const t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ("Tab" === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || G(e.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(
                              e.key
                            ))
                          ) {
                            let t = j()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            if (
                              (["ArrowUp", "End"].includes(e.key) &&
                                (t = t.slice().reverse()),
                              ["ArrowUp", "ArrowDown"].includes(e.key))
                            ) {
                              const n = e.target,
                                r = t.indexOf(n);
                              t = t.slice(r + 1);
                            }
                            setTimeout(() => V(t)), e.preventDefault();
                          }
                        }),
                      }
                    )
                  )
                )
              )
            )
          );
        }),
        fr = (0, i.forwardRef)((e, t) => {
          const { __scopeSelect: n, onPlaced: u } = e,
            a = (0, o.Z)(e, In),
            l = Qn(ir, n),
            c = lr(ir, n),
            [f, d] = (0, i.useState)(null),
            [D, p] = (0, i.useState)(null),
            m = h(t, (e) => p(e)),
            v = Gn(n),
            g = (0, i.useRef)(!1),
            y = (0, i.useRef)(!0),
            {
              viewport: b,
              selectedItem: E,
              selectedItemText: C,
              focusSelectedItem: w,
            } = c,
            F = (0, i.useCallback)(() => {
              if (l.trigger && l.valueNode && f && D && b && E && C) {
                const e = l.trigger.getBoundingClientRect(),
                  t = D.getBoundingClientRect(),
                  n = l.valueNode.getBoundingClientRect(),
                  r = C.getBoundingClientRect();
                if ("rtl" !== l.dir) {
                  const o = r.left - t.left,
                    i = n.left - o,
                    u = e.left - i,
                    a = e.width + u,
                    l = Math.max(a, t.width),
                    c = window.innerWidth - ar,
                    d = s(i, [ar, c - l]);
                  (f.style.minWidth = a + "px"), (f.style.left = d + "px");
                } else {
                  const o = t.right - r.right,
                    i = window.innerWidth - n.right - o,
                    u = window.innerWidth - e.right - i,
                    a = e.width + u,
                    l = Math.max(a, t.width),
                    c = window.innerWidth - ar,
                    d = s(i, [ar, c - l]);
                  (f.style.minWidth = a + "px"), (f.style.right = d + "px");
                }
                const o = v(),
                  i = window.innerHeight - 2 * ar,
                  a = b.scrollHeight,
                  c = window.getComputedStyle(D),
                  d = parseInt(c.borderTopWidth, 10),
                  h = parseInt(c.paddingTop, 10),
                  p = parseInt(c.borderBottomWidth, 10),
                  m = d + h + a + parseInt(c.paddingBottom, 10) + p,
                  y = Math.min(5 * E.offsetHeight, m),
                  w = window.getComputedStyle(b),
                  _ = parseInt(w.paddingTop, 10),
                  F = parseInt(w.paddingBottom, 10),
                  x = e.top + e.height / 2 - ar,
                  A = i - x,
                  S = E.offsetHeight / 2,
                  k = d + h + (E.offsetTop + S),
                  O = m - k;
                if (k <= x) {
                  const e = E === o[o.length - 1].ref.current;
                  f.style.bottom = "0px";
                  const t = D.clientHeight - b.offsetTop - b.offsetHeight,
                    n = k + Math.max(A, S + (e ? F : 0) + t + p);
                  f.style.height = n + "px";
                } else {
                  const e = E === o[0].ref.current;
                  f.style.top = "0px";
                  const t = Math.max(x, d + b.offsetTop + (e ? _ : 0) + S) + O;
                  (f.style.height = t + "px"),
                    (b.scrollTop = k - x + b.offsetTop);
                }
                (f.style.margin = `${ar}px 0`),
                  (f.style.minHeight = y + "px"),
                  (f.style.maxHeight = i + "px"),
                  null == u || u(),
                  requestAnimationFrame(() => (g.current = !0));
              }
            }, [v, l.trigger, l.valueNode, f, D, b, E, C, l.dir, u]);
          $(() => F(), [F]);
          const [x, A] = (0, i.useState)();
          $(() => {
            D && A(window.getComputedStyle(D).zIndex);
          }, [D]);
          const S = (0, i.useCallback)(
            (e) => {
              e &&
                !0 === y.current &&
                (F(), null == w || w(), (y.current = !1));
            },
            [F, w]
          );
          return (0, i.createElement)(
            Dr,
            {
              scope: n,
              contentWrapper: f,
              shouldExpandOnScrollRef: g,
              onScrollButtonChange: S,
            },
            (0, i.createElement)(
              "div",
              {
                ref: d,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  zIndex: x,
                },
              },
              (0, i.createElement)(
                _.div,
                (0, r.Z)({}, a, {
                  ref: m,
                  style: (0, r.Z)(
                    { boxSizing: "border-box", maxHeight: "100%" },
                    a.style
                  ),
                })
              )
            )
          );
        }),
        dr = (0, i.forwardRef)((e, t) => {
          const {
              __scopeSelect: n,
              align: u = "start",
              collisionPadding: a = ar,
            } = e,
            s = (0, o.Z)(e, jn),
            l = Yn(n);
          return (0, i.createElement)(
            It,
            (0, r.Z)({}, l, s, {
              ref: t,
              align: u,
              collisionPadding: a,
              style: (0, r.Z)({ boxSizing: "border-box" }, s.style, {
                "--radix-select-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-select-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-select-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height":
                  "var(--radix-popper-anchor-height)",
              }),
            })
          );
        }),
        [Dr, hr] = Kn(ir, {}),
        pr = "SelectViewport",
        mr = (0, i.forwardRef)((e, t) => {
          const { __scopeSelect: n } = e,
            u = (0, o.Z)(e, Ln),
            a = lr(pr, n),
            s = hr(pr, n),
            c = h(t, a.onViewportChange),
            f = (0, i.useRef)(0);
          return (0, i.createElement)(
            i.Fragment,
            null,
            (0, i.createElement)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
              },
            }),
            (0, i.createElement)(
              $n.Slot,
              { scope: n },
              (0, i.createElement)(
                _.div,
                (0, r.Z)(
                  { "data-radix-select-viewport": "", role: "presentation" },
                  u,
                  {
                    ref: c,
                    style: (0, r.Z)(
                      { position: "relative", flex: 1, overflow: "auto" },
                      u.style
                    ),
                    onScroll: l(u.onScroll, (e) => {
                      const t = e.currentTarget,
                        { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
                      if (null != r && r.current && n) {
                        const e = Math.abs(f.current - t.scrollTop);
                        if (e > 0) {
                          const r = window.innerHeight - 2 * ar,
                            o = parseFloat(n.style.minHeight),
                            i = parseFloat(n.style.height),
                            u = Math.max(o, i);
                          if (u < r) {
                            const o = u + e,
                              i = Math.min(r, o),
                              a = o - i;
                            (n.style.height = i + "px"),
                              "0px" === n.style.bottom &&
                                ((t.scrollTop = a > 0 ? a : 0),
                                (n.style.justifyContent = "flex-end"));
                          }
                        }
                      }
                      f.current = t.scrollTop;
                    }),
                  }
                )
              )
            )
          );
        }),
        [vr, gr] = Kn("SelectGroup"),
        yr = "SelectItem",
        [br, Er] = Kn(yr),
        Cr = (0, i.forwardRef)((e, t) => {
          const {
              __scopeSelect: n,
              value: u,
              disabled: a = !1,
              textValue: s,
            } = e,
            c = (0, o.Z)(e, Mn),
            f = Qn(yr, n),
            d = lr(yr, n),
            D = f.value === u,
            [p, m] = (0, i.useState)(null != s ? s : ""),
            [v, g] = (0, i.useState)(!1),
            y = h(t, (e) => {
              var t;
              return null === (t = d.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(d, e, u, a);
            }),
            b = K(),
            E = () => {
              a || (f.onValueChange(u), f.onOpenChange(!1));
            };
          return (0, i.createElement)(
            br,
            {
              scope: n,
              value: u,
              disabled: a,
              textId: b,
              isSelected: D,
              onItemTextChange: (0, i.useCallback)((e) => {
                m((t) => {
                  var n;
                  return (
                    t ||
                    (null !== (n = null == e ? void 0 : e.textContent) &&
                    void 0 !== n
                      ? n
                      : ""
                    ).trim()
                  );
                });
              }, []),
            },
            (0, i.createElement)(
              $n.ItemSlot,
              { scope: n, value: u, disabled: a, textValue: p },
              (0, i.createElement)(
                _.div,
                (0, r.Z)(
                  {
                    role: "option",
                    "aria-labelledby": b,
                    "data-highlighted": v ? "" : void 0,
                    "aria-selected": D && v,
                    "data-state": D ? "checked" : "unchecked",
                    "aria-disabled": a || void 0,
                    "data-disabled": a ? "" : void 0,
                    tabIndex: a ? void 0 : -1,
                  },
                  c,
                  {
                    ref: y,
                    onFocus: l(c.onFocus, () => g(!0)),
                    onBlur: l(c.onBlur, () => g(!1)),
                    onPointerUp: l(c.onPointerUp, E),
                    onPointerMove: l(c.onPointerMove, (e) => {
                      var t;
                      a
                        ? null === (t = d.onItemLeave) ||
                          void 0 === t ||
                          t.call(d)
                        : e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: l(c.onPointerLeave, (e) => {
                      var t;
                      e.currentTarget === document.activeElement &&
                        (null === (t = d.onItemLeave) ||
                          void 0 === t ||
                          t.call(d));
                    }),
                    onKeyDown: l(c.onKeyDown, (e) => {
                      var t;
                      ("" !==
                        (null === (t = d.searchRef) || void 0 === t
                          ? void 0
                          : t.current) &&
                        " " === e.key) ||
                        (Hn.includes(e.key) && E(),
                        " " === e.key && e.preventDefault());
                    }),
                  }
                )
              )
            )
          );
        }),
        wr = "SelectItemText",
        _r = (0, i.forwardRef)((e, t) => {
          const { __scopeSelect: n } = e,
            u = (0, o.Z)(e, zn),
            s = Qn(wr, n),
            l = lr(wr, n),
            c = Er(wr, n),
            f = tr(wr, n),
            [d, D] = (0, i.useState)(null),
            p = h(
              t,
              (e) => D(e),
              c.onItemTextChange,
              (e) => {
                var t;
                return null === (t = l.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(l, e, c.value, c.disabled);
              }
            ),
            m = null == d ? void 0 : d.textContent,
            v = (0, i.useMemo)(
              () =>
                (0, i.createElement)(
                  "option",
                  { key: c.value, value: c.value, disabled: c.disabled },
                  m
                ),
              [c.disabled, c.value, m]
            ),
            { onNativeOptionAdd: g, onNativeOptionRemove: y } = f;
          return (
            $(() => (g(v), () => y(v)), [g, y, v]),
            (0, i.createElement)(
              i.Fragment,
              null,
              (0, i.createElement)(
                _.span,
                (0, r.Z)({ id: c.textId }, u, { ref: p })
              ),
              c.isSelected && s.valueNode && !s.valueNodeHasChildren
                ? (0, a.createPortal)(u.children, s.valueNode)
                : null
            )
          );
        }),
        Fr = (0, i.forwardRef)((e, t) => {
          const { __scopeSelect: n } = e,
            u = (0, o.Z)(e, Zn);
          return Er("SelectItemIndicator", n).isSelected
            ? (0, i.createElement)(
                _.span,
                (0, r.Z)({ "aria-hidden": !0 }, u, { ref: t })
              )
            : null;
        }),
        xr = (0, i.forwardRef)((e, t) => {
          const { value: n } = e,
            u = (0, o.Z)(e, Vn),
            a = (0, i.useRef)(null),
            s = h(t, a),
            l = (function (e) {
              const t = (0, i.useRef)({ value: e, previous: e });
              return (0, i.useMemo)(
                () => (
                  t.current.value !== e &&
                    ((t.current.previous = t.current.value),
                    (t.current.value = e)),
                  t.current.previous
                ),
                [e]
              );
            })(n);
          return (
            (0, i.useEffect)(() => {
              const e = a.current,
                t = window.HTMLSelectElement.prototype,
                r = Object.getOwnPropertyDescriptor(t, "value").set;
              if (l !== n && r) {
                const t = new Event("change", { bubbles: !0 });
                r.call(e, n), e.dispatchEvent(t);
              }
            }, [l, n]),
            (0, i.createElement)(
              zt,
              { asChild: !0 },
              (0, i.createElement)(
                "select",
                (0, r.Z)({}, u, { ref: s, defaultValue: n })
              )
            )
          );
        });
      function Ar(e) {
        const t = F(e),
          n = (0, i.useRef)(""),
          r = (0, i.useRef)(0),
          o = (0, i.useCallback)(
            (e) => {
              const o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          u = (0, i.useCallback)(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          (0, i.useEffect)(() => () => window.clearTimeout(r.current), []),
          [n, o, u]
        );
      }
      function Sr(e, t, n) {
        const r =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i =
          ((u = e),
          (a = Math.max(o, 0)),
          u.map((e, t) => u[(a + t) % u.length]));
        var u, a;
        1 === r.length && (i = i.filter((e) => e !== n));
        const s = i.find((e) =>
          e.textValue.toLowerCase().startsWith(r.toLowerCase())
        );
        return s !== n ? s : void 0;
      }
      xr.displayName = "BubbleSelect";
      const kr = (e) => {
          const {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: u,
              value: a,
              defaultValue: s,
              onValueChange: l,
              dir: c,
              name: f,
              autoComplete: d,
              disabled: D,
              required: h,
            } = e,
            p = Yn(t),
            [m, v] = (0, i.useState)(null),
            [g, y] = (0, i.useState)(null),
            [b, E] = (0, i.useState)(!1),
            w = (function (e) {
              const t = (0, i.useContext)(C);
              return e || t || "ltr";
            })(c),
            [_ = !1, F] = Mt({ prop: r, defaultProp: o, onChange: u }),
            [x, A] = Mt({ prop: a, defaultProp: s, onChange: l }),
            S = (0, i.useRef)(null),
            k = !m || Boolean(m.closest("form")),
            [O, B] = (0, i.useState)(new Set()),
            R = Array.from(O)
              .map((e) => e.props.value)
              .join(";");
          return (0, i.createElement)(
            Tt,
            p,
            (0, i.createElement)(
              Jn,
              {
                required: h,
                scope: t,
                trigger: m,
                onTriggerChange: v,
                valueNode: g,
                onValueNodeChange: y,
                valueNodeHasChildren: b,
                onValueNodeHasChildrenChange: E,
                contentId: K(),
                value: x,
                onValueChange: A,
                open: _,
                onOpenChange: F,
                dir: w,
                triggerPointerDownPosRef: S,
                disabled: D,
              },
              (0, i.createElement)(
                $n.Provider,
                { scope: t },
                (0, i.createElement)(
                  er,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, i.useCallback)((e) => {
                      B((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, i.useCallback)((e) => {
                      B((t) => {
                        const n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                  },
                  n
                )
              ),
              k
                ? (0, i.createElement)(
                    xr,
                    {
                      key: R,
                      "aria-hidden": !0,
                      required: h,
                      tabIndex: -1,
                      name: f,
                      autoComplete: d,
                      value: x,
                      onChange: (e) => A(e.target.value),
                      disabled: D,
                    },
                    void 0 === x
                      ? (0, i.createElement)("option", { value: "" })
                      : null,
                    Array.from(O)
                  )
                : null
            )
          );
        },
        Or = nr,
        Br = rr,
        Rr = or,
        Pr = (e) => (0, i.createElement)(Lt, (0, r.Z)({ asChild: !0 }, e)),
        Tr = ur,
        Nr = mr,
        Ir = Cr,
        jr = _r,
        Lr = Fr;
    },
    22352: () => {
      "use strict";
      self.regeneratorRuntime;
    },
    90330: (e, t, n) => {
      "use strict";
      function r(e, t, n, r) {
        return new (n || (n = Promise))(function (t, o) {
          function i(e) {
            try {
              a(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            try {
              a(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            var r;
            e.done
              ? t(e.value)
              : ((r = e.value),
                r instanceof n
                  ? r
                  : new n(function (e) {
                      e(r);
                    })).then(i, u);
          }
          a((r = r.apply(e, [])).next());
        });
      }
      n.d(t, { cy: () => q });
      var o = n(41700),
        i = n(24261),
        u = n(25773);
      const a = "axios-retry";
      function s(e) {
        return (
          !e.response &&
          !!e.code &&
          !["ERR_CANCELED", "ECONNABORTED"].includes(e.code) &&
          u(e)
        );
      }
      const l = ["get", "head", "options"],
        c = l.concat(["put", "delete"]);
      function f(e) {
        return (
          "ECONNABORTED" !== e.code &&
          (!e.response ||
            429 === e.response.status ||
            (e.response.status >= 500 && e.response.status <= 599))
        );
      }
      function d(e) {
        var t;
        return (
          !(null == (t = e.config) || !t.method) &&
          f(e) &&
          -1 !== c.indexOf(e.config.method)
        );
      }
      function D(e) {
        return s(e) || d(e);
      }
      function h(e = void 0) {
        var t;
        const n =
          null == e || null == (t = e.response)
            ? void 0
            : t.headers["retry-after"];
        if (!n) return 0;
        let r = 1e3 * (Number(n) || 0);
        return (
          0 === r && (r = (new Date(n).valueOf() || 0) - Date.now()),
          Math.max(0, r)
        );
      }
      const p = {
        retries: 3,
        retryCondition: D,
        retryDelay: function (e = 0, t = void 0) {
          return Math.max(0, h(t));
        },
        shouldResetTimeout: !1,
        onRetry: () => {},
        onMaxRetryTimesExceeded: () => {},
        validateResponse: null,
      };
      function m(e, t, n = !1) {
        const r = (function (e, t) {
          return (0, i.Z)({}, p, t, e[a]);
        })(e, t || {});
        return (
          (r.retryCount = r.retryCount || 0),
          (r.lastRequestTime && !n) || (r.lastRequestTime = Date.now()),
          (e[a] = r),
          r
        );
      }
      const v = (e, t) => {
        const n = e.interceptors.request.use((e) => {
            var n;
            return (
              m(e, t, !0),
              null != (n = e[a]) &&
                n.validateResponse &&
                (e.validateStatus = () => !1),
              e
            );
          }),
          r = e.interceptors.response.use(null, async (n) => {
            const { config: r } = n;
            if (!r) return Promise.reject(n);
            const o = m(r, t);
            return n.response &&
              null != o.validateResponse &&
              o.validateResponse(n.response)
              ? n.response
              : (await (async function (e, t) {
                  const { retries: n, retryCondition: r } = e,
                    o = (e.retryCount || 0) < n && r(t);
                  if ("object" == typeof o)
                    try {
                      return !1 !== (await o);
                    } catch (i) {
                      return !1;
                    }
                  return o;
                })(o, n))
              ? (async function (e, t, n, r) {
                  var o;
                  t.retryCount += 1;
                  const {
                      retryDelay: i,
                      shouldResetTimeout: u,
                      onRetry: a,
                    } = t,
                    s = i(t.retryCount, n);
                  if (
                    ((function (e, t) {
                      e.defaults.agent === t.agent && delete t.agent,
                        e.defaults.httpAgent === t.httpAgent &&
                          delete t.httpAgent,
                        e.defaults.httpsAgent === t.httpsAgent &&
                          delete t.httpsAgent;
                    })(e, r),
                    !u && r.timeout && t.lastRequestTime)
                  ) {
                    const e = Date.now() - t.lastRequestTime,
                      o = r.timeout - e - s;
                    if (o <= 0) return Promise.reject(n);
                    r.timeout = o;
                  }
                  return (
                    (r.transformRequest = [(e) => e]),
                    await a(t.retryCount, n, r),
                    null != (o = r.signal) && o.aborted
                      ? Promise.resolve(e(r))
                      : new Promise((t) => {
                          var n;
                          const o = () => {
                              clearTimeout(i), t(e(r));
                            },
                            i = setTimeout(() => {
                              var n;
                              t(e(r)),
                                null != (n = r.signal) &&
                                  n.removeEventListener &&
                                  r.signal.removeEventListener("abort", o);
                            }, s);
                          null != (n = r.signal) &&
                            n.addEventListener &&
                            r.signal.addEventListener("abort", o, { once: !0 });
                        })
                  );
                })(e, o, n, r)
              : (await (async function (e, t) {
                  e.retryCount >= e.retries &&
                    (await e.onMaxRetryTimesExceeded(t, e.retryCount));
                })(o, n),
                Promise.reject(n));
          });
        return { requestInterceptorId: n, responseInterceptorId: r };
      };
      (v.isNetworkError = s),
        (v.isSafeRequestError = function (e) {
          var t;
          return (
            !(null == (t = e.config) || !t.method) &&
            f(e) &&
            -1 !== l.indexOf(e.config.method)
          );
        }),
        (v.isIdempotentRequestError = d),
        (v.isNetworkOrIdempotentRequestError = D),
        (v.exponentialDelay = function (e = 0, t = void 0, n = 100) {
          const r = 2 ** e * n,
            o = Math.max(r, h(t));
          return o + 0.2 * o * Math.random();
        }),
        (v.linearDelay = function (e = 100) {
          return (t = 0, n = void 0) => {
            const r = t * e;
            return Math.max(r, h(n));
          };
        }),
        (v.isRetryableError = f);
      const g = v;
      var y,
        b,
        E,
        C,
        w,
        _,
        F,
        x = n(71312);
      function A(e, t) {
        var n = e[0],
          r = e[1],
          o = e[2],
          i = e[3];
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n += (((r & o) | (~r & i)) + t[0] - 680876936) | 0) <<
                        7) |
                        (n >>> 25)) +
                        r) |
                      0) &
                      r) |
                      (~n & o)) +
                      t[1] -
                      389564586) |
                    0) <<
                    12) |
                    (i >>> 20)) +
                    n) |
                  0) &
                  n) |
                  (~i & r)) +
                  t[2] +
                  606105819) |
                0) <<
                17) |
                (o >>> 15)) +
                i) |
              0) &
              i) |
              (~o & n)) +
              t[3] -
              1044525330) |
            0) <<
            22) |
            (r >>> 10)) +
            o) |
          0),
          (r =
            ((((r +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((n =
                        ((((n +=
                          (((r & o) | (~r & i)) + t[4] - 176418897) | 0) <<
                          7) |
                          (n >>> 25)) +
                          r) |
                        0) &
                        r) |
                        (~n & o)) +
                        t[5] +
                        1200080426) |
                      0) <<
                      12) |
                      (i >>> 20)) +
                      n) |
                    0) &
                    n) |
                    (~i & r)) +
                    t[6] -
                    1473231341) |
                  0) <<
                  17) |
                  (o >>> 15)) +
                  i) |
                0) &
                i) |
                (~o & n)) +
                t[7] -
                45705983) |
              0) <<
              22) |
              (r >>> 10)) +
              o) |
            0),
          (r =
            ((((r +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((n =
                        ((((n +=
                          (((r & o) | (~r & i)) + t[8] + 1770035416) | 0) <<
                          7) |
                          (n >>> 25)) +
                          r) |
                        0) &
                        r) |
                        (~n & o)) +
                        t[9] -
                        1958414417) |
                      0) <<
                      12) |
                      (i >>> 20)) +
                      n) |
                    0) &
                    n) |
                    (~i & r)) +
                    t[10] -
                    42063) |
                  0) <<
                  17) |
                  (o >>> 15)) +
                  i) |
                0) &
                i) |
                (~o & n)) +
                t[11] -
                1990404162) |
              0) <<
              22) |
              (r >>> 10)) +
              o) |
            0),
          (r =
            ((((r +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((n =
                        ((((n +=
                          (((r & o) | (~r & i)) + t[12] + 1804603682) | 0) <<
                          7) |
                          (n >>> 25)) +
                          r) |
                        0) &
                        r) |
                        (~n & o)) +
                        t[13] -
                        40341101) |
                      0) <<
                      12) |
                      (i >>> 20)) +
                      n) |
                    0) &
                    n) |
                    (~i & r)) +
                    t[14] -
                    1502002290) |
                  0) <<
                  17) |
                  (o >>> 15)) +
                  i) |
                0) &
                i) |
                (~o & n)) +
                t[15] +
                1236535329) |
              0) <<
              22) |
              (r >>> 10)) +
              o) |
            0),
          (r =
            ((((r +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((n =
                        ((((n +=
                          (((r & i) | (o & ~i)) + t[1] - 165796510) | 0) <<
                          5) |
                          (n >>> 27)) +
                          r) |
                        0) &
                        o) |
                        (r & ~o)) +
                        t[6] -
                        1069501632) |
                      0) <<
                      9) |
                      (i >>> 23)) +
                      n) |
                    0) &
                    r) |
                    (n & ~r)) +
                    t[11] +
                    643717713) |
                  0) <<
                  14) |
                  (o >>> 18)) +
                  i) |
                0) &
                n) |
                (i & ~n)) +
                t[0] -
                373897302) |
              0) <<
              20) |
              (r >>> 12)) +
              o) |
            0),
          (r =
            ((((r +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((n =
                        ((((n +=
                          (((r & i) | (o & ~i)) + t[5] - 701558691) | 0) <<
                          5) |
                          (n >>> 27)) +
                          r) |
                        0) &
                        o) |
                        (r & ~o)) +
                        t[10] +
                        38016083) |
                      0) <<
                      9) |
                      (i >>> 23)) +
                      n) |
                    0) &
                    r) |
                    (n & ~r)) +
                    t[15] -
                    660478335) |
                  0) <<
                  14) |
                  (o >>> 18)) +
                  i) |
                0) &
                n) |
                (i & ~n)) +
                t[4] -
                405537848) |
              0) <<
              20) |
              (r >>> 12)) +
              o) |
            0),
          (r =
            ((((r +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((n =
                        ((((n +=
                          (((r & i) | (o & ~i)) + t[9] + 568446438) | 0) <<
                          5) |
                          (n >>> 27)) +
                          r) |
                        0) &
                        o) |
                        (r & ~o)) +
                        t[14] -
                        1019803690) |
                      0) <<
                      9) |
                      (i >>> 23)) +
                      n) |
                    0) &
                    r) |
                    (n & ~r)) +
                    t[3] -
                    187363961) |
                  0) <<
                  14) |
                  (o >>> 18)) +
                  i) |
                0) &
                n) |
                (i & ~n)) +
                t[8] +
                1163531501) |
              0) <<
              20) |
              (r >>> 12)) +
              o) |
            0),
          (r =
            ((((r +=
              ((((o =
                ((((o +=
                  ((((i =
                    ((((i +=
                      ((((n =
                        ((((n +=
                          (((r & i) | (o & ~i)) + t[13] - 1444681467) | 0) <<
                          5) |
                          (n >>> 27)) +
                          r) |
                        0) &
                        o) |
                        (r & ~o)) +
                        t[2] -
                        51403784) |
                      0) <<
                      9) |
                      (i >>> 23)) +
                      n) |
                    0) &
                    r) |
                    (n & ~r)) +
                    t[7] +
                    1735328473) |
                  0) <<
                  14) |
                  (o >>> 18)) +
                  i) |
                0) &
                n) |
                (i & ~n)) +
                t[12] -
                1926607734) |
              0) <<
              20) |
              (r >>> 12)) +
              o) |
            0),
          (r =
            ((((r +=
              (((o =
                ((((o +=
                  (((i =
                    ((((i +=
                      (((n =
                        ((((n += ((r ^ o ^ i) + t[5] - 378558) | 0) << 4) |
                          (n >>> 28)) +
                          r) |
                        0) ^
                        r ^
                        o) +
                        t[8] -
                        2022574463) |
                      0) <<
                      11) |
                      (i >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    r) +
                    t[11] +
                    1839030562) |
                  0) <<
                  16) |
                  (o >>> 16)) +
                  i) |
                0) ^
                i ^
                n) +
                t[14] -
                35309556) |
              0) <<
              23) |
              (r >>> 9)) +
              o) |
            0),
          (r =
            ((((r +=
              (((o =
                ((((o +=
                  (((i =
                    ((((i +=
                      (((n =
                        ((((n += ((r ^ o ^ i) + t[1] - 1530992060) | 0) << 4) |
                          (n >>> 28)) +
                          r) |
                        0) ^
                        r ^
                        o) +
                        t[4] +
                        1272893353) |
                      0) <<
                      11) |
                      (i >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    r) +
                    t[7] -
                    155497632) |
                  0) <<
                  16) |
                  (o >>> 16)) +
                  i) |
                0) ^
                i ^
                n) +
                t[10] -
                1094730640) |
              0) <<
              23) |
              (r >>> 9)) +
              o) |
            0),
          (r =
            ((((r +=
              (((o =
                ((((o +=
                  (((i =
                    ((((i +=
                      (((n =
                        ((((n += ((r ^ o ^ i) + t[13] + 681279174) | 0) << 4) |
                          (n >>> 28)) +
                          r) |
                        0) ^
                        r ^
                        o) +
                        t[0] -
                        358537222) |
                      0) <<
                      11) |
                      (i >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    r) +
                    t[3] -
                    722521979) |
                  0) <<
                  16) |
                  (o >>> 16)) +
                  i) |
                0) ^
                i ^
                n) +
                t[6] +
                76029189) |
              0) <<
              23) |
              (r >>> 9)) +
              o) |
            0),
          (r =
            ((((r +=
              (((o =
                ((((o +=
                  (((i =
                    ((((i +=
                      (((n =
                        ((((n += ((r ^ o ^ i) + t[9] - 640364487) | 0) << 4) |
                          (n >>> 28)) +
                          r) |
                        0) ^
                        r ^
                        o) +
                        t[12] -
                        421815835) |
                      0) <<
                      11) |
                      (i >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    r) +
                    t[15] +
                    530742520) |
                  0) <<
                  16) |
                  (o >>> 16)) +
                  i) |
                0) ^
                i ^
                n) +
                t[2] -
                995338651) |
              0) <<
              23) |
              (r >>> 9)) +
              o) |
            0),
          (r =
            ((((r +=
              (((i =
                ((((i +=
                  ((r ^
                    ((n =
                      ((((n += ((o ^ (r | ~i)) + t[0] - 198630844) | 0) << 6) |
                        (n >>> 26)) +
                        r) |
                      0) |
                      ~o)) +
                    t[7] +
                    1126891415) |
                  0) <<
                  10) |
                  (i >>> 22)) +
                  n) |
                0) ^
                ((o =
                  ((((o += ((n ^ (i | ~r)) + t[14] - 1416354905) | 0) << 15) |
                    (o >>> 17)) +
                    i) |
                  0) |
                  ~n)) +
                t[5] -
                57434055) |
              0) <<
              21) |
              (r >>> 11)) +
              o) |
            0),
          (r =
            ((((r +=
              (((i =
                ((((i +=
                  ((r ^
                    ((n =
                      ((((n += ((o ^ (r | ~i)) + t[12] + 1700485571) | 0) <<
                        6) |
                        (n >>> 26)) +
                        r) |
                      0) |
                      ~o)) +
                    t[3] -
                    1894986606) |
                  0) <<
                  10) |
                  (i >>> 22)) +
                  n) |
                0) ^
                ((o =
                  ((((o += ((n ^ (i | ~r)) + t[10] - 1051523) | 0) << 15) |
                    (o >>> 17)) +
                    i) |
                  0) |
                  ~n)) +
                t[1] -
                2054922799) |
              0) <<
              21) |
              (r >>> 11)) +
              o) |
            0),
          (r =
            ((((r +=
              (((i =
                ((((i +=
                  ((r ^
                    ((n =
                      ((((n += ((o ^ (r | ~i)) + t[8] + 1873313359) | 0) << 6) |
                        (n >>> 26)) +
                        r) |
                      0) |
                      ~o)) +
                    t[15] -
                    30611744) |
                  0) <<
                  10) |
                  (i >>> 22)) +
                  n) |
                0) ^
                ((o =
                  ((((o += ((n ^ (i | ~r)) + t[6] - 1560198380) | 0) << 15) |
                    (o >>> 17)) +
                    i) |
                  0) |
                  ~n)) +
                t[13] +
                1309151649) |
              0) <<
              21) |
              (r >>> 11)) +
              o) |
            0),
          (r =
            ((((r +=
              (((i =
                ((((i +=
                  ((r ^
                    ((n =
                      ((((n += ((o ^ (r | ~i)) + t[4] - 145523070) | 0) << 6) |
                        (n >>> 26)) +
                        r) |
                      0) |
                      ~o)) +
                    t[11] -
                    1120210379) |
                  0) <<
                  10) |
                  (i >>> 22)) +
                  n) |
                0) ^
                ((o =
                  ((((o += ((n ^ (i | ~r)) + t[2] + 718787259) | 0) << 15) |
                    (o >>> 17)) +
                    i) |
                  0) |
                  ~n)) +
                t[9] -
                343485551) |
              0) <<
              21) |
              (r >>> 11)) +
              o) |
            0),
          (e[0] = (n + e[0]) | 0),
          (e[1] = (r + e[1]) | 0),
          (e[2] = (o + e[2]) | 0),
          (e[3] = (i + e[3]) | 0);
      }
      function S(e) {
        var t,
          n = [];
        for (t = 0; t < 64; t += 4)
          n[t >> 2] =
            e.charCodeAt(t) +
            (e.charCodeAt(t + 1) << 8) +
            (e.charCodeAt(t + 2) << 16) +
            (e.charCodeAt(t + 3) << 24);
        return n;
      }
      !(function (e) {
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
      })(y || (y = {})),
        (function (e) {
          (e.SG = "sg"),
            (e.MY = "my"),
            (e.BR = "br"),
            (e.ID = "id"),
            (e.TW = "tw"),
            (e.VN = "vn"),
            (e.TH = "th"),
            (e.PH = "ph"),
            (e.MX = "mx"),
            (e.CO = "co"),
            (e.CL = "cl"),
            (e.AR = "ar"),
            (e.PL = "pl"),
            (e.ES = "es"),
            (e.FR = "fr"),
            (e.IN = "in"),
            (e.CN = "cn");
        })(b || (b = {})),
        (function (e) {
          (e.TEST = "test"),
            (e.LIVE = "live"),
            (e.UAT = "uat"),
            (e.STAGING = "staging"),
            (e.TEST_STABLE = "test-stable");
        })(E || (E = {})),
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
        })(C || (C = {})),
        (function (e) {
          (e.V1 = "V1"), (e.V2 = "V2");
        })(w || (w = {})),
        (function (e) {
          (e.DEFAULT_FORMAT = "default_format"),
            (e.DEFINITION_BEST = "definition_best"),
            (e.DEFINITION_WORST = "definition_worst"),
            (e.BITRATE_BEST = "bitrate_best"),
            (e.BITRATE_WORST = "bitrate_worst");
        })(_ || (_ = {})),
        (function (e) {
          (e.String = "String"),
            (e.Number = "Number"),
            (e.Object = "Object"),
            (e.Boolean = "Boolean");
        })(F || (F = {}));
      var k = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      function O(e) {
        var t,
          n = "";
        for (t = 0; t < 4; t += 1)
          n += k[(e >> (8 * t + 4)) & 15] + k[(e >> (8 * t)) & 15];
        return n;
      }
      const B = (e) => {
        return (
          /[\u0080-\uFFFF]/.test((t = e)) &&
            (t = unescape(encodeURIComponent(t))),
          (function (e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t] = O(e[t]);
            return e.join("");
          })(
            (function (e) {
              var t,
                n,
                r,
                o,
                i,
                u,
                a = e.length,
                s = [1732584193, -271733879, -1732584194, 271733878];
              for (t = 64; t <= a; t += 64) A(s, S(e.substring(t - 64, t)));
              for (
                n = (e = e.substring(t - 64)).length,
                  r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  t = 0;
                t < n;
                t += 1
              )
                r[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
              if (((r[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
                for (A(s, r), t = 0; t < 16; t += 1) r[t] = 0;
              return (
                (o = (o = 8 * a).toString(16).match(/(.*?)(.{0,8})$/)),
                (i = parseInt(o[2], 16)),
                (u = parseInt(o[1], 16) || 0),
                (r[14] = i),
                (r[15] = u),
                A(s, r),
                s
              );
            })(t)
          )
        );
        var t;
      };
      var R = "4.1.0";
      const P = "endpoint_strategy",
        T = "md5s",
        N = {
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
              protocol: {
                shopeeuss: "http",
                wscloud: "http",
                awscloud: "http",
              },
            },
          },
        };
      var I;
      const j = "undefined" != typeof window ? window : global,
        L =
          !!(null == j ? void 0 : j.window) &&
          void 0 !==
            (null === (I = j.window) || void 0 === I ? void 0 : I.document),
        M = (e) => Object.prototype.toString.call(e).slice(8, -1),
        z = (e, t) => {
          if (!e)
            throw new Error(t || "Value must not be undefined, null or zero");
        },
        Z = (e, t) => {
          const n = Date.now().toString().substr(0, 10),
            r = ((e) => {
              e = e || 32;
              let t = "";
              for (let n = 0; n < e; n++)
                t +=
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[
                    Math.floor(62 * Math.random())
                  ];
              return t;
            })(6);
          return r + "-" + B(r + "@" + e + "@" + t + "@shopee@" + n) + "-" + n;
        },
        V = (e, t) => {
          const n = (0, x.Z)().replace(/-/g, "");
          return {
            version: 1,
            sign: Z(n, 101),
            request_id: n,
            biz: 101,
            app_version: "mms-endpoint-" + R,
            sdk_version: "mms-endpoint-" + R,
            os_type: 2,
            device_model: navigator.userAgent,
            client_region: e,
            uid: t,
          };
        },
        U = (e) => {
          var t;
          const n = o.create({ timeout: e.timeout });
          return (
            g(n, {
              retries: null !== (t = e.retryTimes) && void 0 !== t ? t : 5,
              retryDelay: () => {
                var t;
                return null !== (t = e.retryDelay) && void 0 !== t ? t : 6e4;
              },
            }),
            n
          );
        };
      class H {
        constructor(e) {
          var t;
          (this.reported = !1),
            (this.reportData = []),
            (this.config = Object.assign({}, e));
          const n = null !== (t = C[e.country]) && void 0 !== t ? t : "sg";
          this.domain = "cn" === n ? "sg" : n;
        }
        report() {
          var e;
          if (
            (this.reported && !this.config.reportNoLimit) ||
            !this.reportData.length
          )
            return;
          this.reported = !0;
          const t = `https://data-rep.livetech.${
              null !==
                (e = new Map([
                  [E.TEST, "test."],
                  [E.UAT, "uat."],
                  [E.LIVE, ""],
                  [E.STAGING, "staging."],
                  [E.TEST_STABLE, "staging."],
                ]).get(this.config.env || E.STAGING)) && void 0 !== e
                ? e
                : "staging."
            }shopee.${this.domain}/dataapi/dataweb/event/reportJSON`,
            n = o.post(
              t,
              { events: this.reportData.slice() },
              { headers: { "Content-Type": "application/json" } }
            );
          return (this.reportData = []), n;
        }
        setReportData(e) {
          this.reportData.push({ header: this.getReportHeader(), body: e });
        }
        getReportHeader() {
          return {
            id: 80010,
            uid: this.config.uid,
            biz: 101,
            scene_id: 109,
            country: this.config.country,
            os: 2,
            ua: window.navigator.userAgent,
            sdk_version: this.config.sdkVersion,
            timestamp: Date.now(),
          };
        }
      }
      class W {
        constructor(e) {
          (this.getMMSData = (...e) =>
            r(this, 0, void 0, function* () {
              const t = yield ((n = {
                vids: e,
                country: this.options.country,
                env: this.options.env,
                biz: this.options.biz,
                uid: this.options.uid,
                version: R,
              }),
              r(void 0, 0, void 0, function* () {
                const {
                    env: e,
                    country: t,
                    vids: r,
                    biz: o,
                    version: i,
                    uid: u,
                  } = n,
                  a = `https://api.mms.${
                    new Map([
                      [E.TEST, "test."],
                      [E.LIVE, ""],
                      [E.UAT, "uat."],
                      [E.STAGING, "staging."],
                      [E.TEST_STABLE, "test-stable."],
                    ]).get(e) || ""
                  }shopee.${
                    C[t] || ""
                  }/videoapi/api/v1/video/outerbatchgetdispatcherinfo`,
                  s = (0, x.Z)().replace(/-/g, ""),
                  { data: l } = yield U({}).post(a, {
                    vid: r,
                    version: 1,
                    sign: Z(s, o),
                    request_id: s,
                    biz: o,
                    app_version: "mms-endpoint-" + i,
                    sdk_version: "mms-endpoint-" + i,
                    client_info: {
                      region: t.toLocaleLowerCase(),
                      uid: u,
                      device_id: navigator.userAgent,
                    },
                  });
                return l;
              }));
              var n;
              return t;
            })),
            this.initOptions(e),
            this.initReporter(),
            this.initStrategy(),
            this.initSupportSuffix();
        }
        getHttpUrl(e) {
          const t = this.getImagePath(Object.assign({}, e));
          return t ? { ok: !0, url: `http://${t}` } : { ok: !1, url: "" };
        }
        getHttpsUrl(e) {
          const t = this.getImagePath(Object.assign({}, e));
          return t ? { ok: !0, url: `https://${t}` } : { ok: !1, url: "" };
        }
        getImgUrl(e, t = "", n = "", r) {
          return this.getHttpUrl({
            biz: e,
            imgId: t,
            suffix: n,
            disableWebp: null == r ? void 0 : r.disable_webp,
            version: w.V1,
          });
        }
        getImgUrlV2(e, t = "", n = "", r) {
          return this.getHttpUrl({
            biz: e,
            imgId: t,
            suffix: n,
            disableWebp: null == r ? void 0 : r.disable_webp,
            version: w.V2,
          });
        }
        getImgHttpsUrl(e, t = "", n = "", r) {
          return this.getHttpsUrl({
            biz: e,
            imgId: t,
            suffix: n,
            disableWebp: null == r ? void 0 : r.disable_webp,
            version: w.V1,
          });
        }
        getImgHttpsUrlV2(e, t = "", n = "", r) {
          return this.getHttpsUrl({
            biz: e,
            imgId: t,
            suffix: n,
            disableWebp: null == r ? void 0 : r.disable_webp,
            version: w.V2,
          });
        }
        downloadImg(e, t, n = "", r = "") {
          const o = this.getHttpUrl({
            biz: e,
            imgId: t,
            suffix: n,
            version: w.V1,
          });
          return o.ok
            ? ((e, t) =>
                new Promise((n, r) => {
                  const o = new Image();
                  o.setAttribute("crossOrigin", "anonymous"),
                    (o.src = e),
                    (o.onload = () => {
                      if (o.width > 0 && o.height > 0) {
                        const e = document.createElement("canvas");
                        (e.width = o.width),
                          (e.height = o.height),
                          e
                            .getContext("2d")
                            .drawImage(o, 0, 0, o.width, o.height),
                          e.toBlob((e) => {
                            const n = URL.createObjectURL(e),
                              r = document.createElement("a");
                            (r.download = t),
                              (r.href = n),
                              r.click(),
                              r.remove(),
                              URL.revokeObjectURL(n);
                          }),
                          n(!0);
                      } else n(!1);
                    }),
                    (o.onerror = function (e) {
                      r(!1);
                    });
                }))(o.url, r || t)
            : Promise.reject(!1);
        }
        getStrategy() {
          const e = this.options.biz,
            {
              ver: t,
              endpoint_cron: n,
              mms_image: {
                data: { api_timeout: r, configs: o },
              },
            } = W.strategy;
          return {
            ver: t,
            api_timeout: r,
            endpoint_cron: n,
            configs: o[e] || o[100],
          };
        }
        getImagePath(e) {
          var t;
          const {
              imgId: n,
              version: r = "V1",
              suffix: o = "",
              disableWebp: i,
              disableAvif: u,
            } = e,
            a =
              null !== (t = null == e ? void 0 : e.biz) && void 0 !== t
                ? t
                : this.options.biz,
            { configs: s } = W.strategy.mms_image.data,
            l = s[a] || s[100],
            {
              disable: c = !1,
              default_suffix: f = "",
              extend_suffix: d = "",
              domains: D = ["mms.img.susercontent.com"],
            } = l.endpoint || {};
          if (c) return "";
          if (!n || !D.length) return "";
          if (r === w.V1 && 32 !== n.length) return "";
          let h = "";
          return (
            (h = `${D[Math.floor(Math.random() * D.length)]}/${n}${o}`),
            ((".webp" == `${f}` && !i && this.getSupportWebp()) ||
              (".avif" === f && !u && W.supportAvif) ||
              (".webp" !== f && ".avif" !== f)) &&
              (h += `${f}${d}`),
            h
          );
        }
        setStrategy(e) {
          (W.strategy = e), localStorage.setItem(P, JSON.stringify(e));
        }
        initOptions(e) {
          z(e.biz, "Parameter biz must not be empty or zero"),
            ((e) => {
              if (M(e) !== F.Number)
                throw new Error("Parameter biz must be number");
            })(e.biz),
            z(e.country, "Parameter country must not be empty or zero"),
            ((e, t) => {
              if (M(e) !== t)
                throw new Error("Parameter country must be string type");
            })(e.country, F.String),
            (this.options = Object.assign(Object.assign({}, e), {
              browser: void 0 !== e.browser ? !!e.browser : L,
              biz: e.biz,
              country: String(e.country).toUpperCase(),
            }));
        }
        initStrategy() {
          var e, t;
          if (this.options.browser) {
            const n = localStorage.getItem(P),
              r = n ? JSON.parse(n) || N : W.strategy;
            !r ||
            Date.now() -
              1e3 *
                (null === (e = null == r ? void 0 : r.endpoint_cron) ||
                void 0 === e
                  ? void 0
                  : e.pull_time) >
              (null === (t = null == r ? void 0 : r.endpoint_cron) ||
              void 0 === t
                ? void 0
                : t.ttl)
              ? this.fetchStrategy()
              : this.setStrategy(r);
          }
        }
        fetchStrategy() {
          var e, t, n, o;
          return r(this, 0, void 0, function* () {
            if (W.loading) return;
            const r = Date.now();
            W.loading = !0;
            try {
              const e = Object.assign({}, this.options),
                t = yield ((e) => {
                  var t, n;
                  const {
                      env: r,
                      country: o,
                      uid: i,
                      timeout: u,
                      retryTimes: a,
                      retryDelay: s,
                    } = e,
                    l =
                      null !==
                        (t = new Map([
                          [E.TEST, "test."],
                          [E.UAT, "uat."],
                          [E.LIVE, ""],
                          [E.STAGING, "staging."],
                          [E.TEST_STABLE, "staging."],
                        ]).get(r || E.STAGING)) && void 0 !== t
                        ? t
                        : "staging.";
                  let c = "";
                  const f = localStorage.getItem(T);
                  f && "undefined" !== f && (c = JSON.parse(f));
                  const d = `https://endpoint.mms.${l}shopee.${
                    null !== (n = C[o]) && void 0 !== n ? n : "sg"
                  }/api/v1/configs`;
                  return U({ timeout: u, retryTimes: a, retryDelay: s }).post(
                    d,
                    { _header: V(o, i), md5s: c || {} }
                  );
                })(e);
              this.processRemoteStrategy(t, r);
            } catch (i) {
              if (i.err) {
                const { err: o, retry_count: u } = i;
                let a =
                  null !==
                    (n =
                      null ===
                        (t =
                          null === (e = null == o ? void 0 : o.response) ||
                          void 0 === e
                            ? void 0
                            : e.data) || void 0 === t
                        ? void 0
                        : t.code) && void 0 !== n
                    ? n
                    : 500;
                ((e) =>
                  e.message.includes("timeout") || "ECONNABORTED" === e.code)(
                  o
                ) && (a = 1001),
                  this.reporter.setReportData({
                    action_id: a,
                    cost: Date.now() - r,
                    trigger_scene: 4,
                    retry_count: u,
                    latitude: 0,
                    longitude: 0,
                  });
              }
            } finally {
              (W.loading = !1),
                null === (o = this.reporter.report()) ||
                  void 0 === o ||
                  o.catch((e) => {});
            }
          });
        }
        processRemoteStrategy(e, t) {
          var n;
          const { code: r, data: o } = e.data;
          if (0 === r) {
            localStorage.setItem(T, JSON.stringify(o.md5s));
            const r = localStorage.getItem(P);
            if (
              (this.reporter.setReportData({
                action_id: 0,
                cost: Date.now() - t,
                trigger_scene: 4,
                ver:
                  null === (n = o.mms_image) || void 0 === n
                    ? void 0
                    : n.data.ver,
                retry_count: e.retry_count,
                latitude: 0,
                longitude: 0,
              }),
              r && JSON.parse(r))
            )
              return void this.setStrategy(
                ((e) => {
                  const t = localStorage.getItem(P);
                  if (!t) return e;
                  const n = JSON.parse(t),
                    { endpoint_cron: r, md5s: o } = e;
                  return (
                    (n.endpoint_cron = r),
                    (n.md5s = o),
                    [
                      "core_player",
                      "livelog",
                      "mms_detect",
                      "mms_image",
                      "mms_vod",
                      "new_test",
                      "rtc",
                      "upload",
                    ].forEach((t) => {
                      e[t] && 0 === e[t].status && (n[t] = e[t]);
                    }),
                    n
                  );
                })(o)
              );
            this.setStrategy(o);
          }
        }
        initSupportSuffix() {
          if (!this.options.browser)
            return (W.supportWebp = !1), void (W.supportAvif = !1);
          try {
            requestIdleCallback(() => {
              this.getSupportWebp(), this.getSupportAvif();
            });
          } catch (e) {}
        }
        getSupportWebp() {
          return (
            null === W.supportWebp &&
              (W.supportWebp = (() => {
                if (!L) return !1;
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
              })()),
            W.supportWebp
          );
        }
        getSupportAvif() {
          return r(this, 0, void 0, function* () {
            return (
              null === W.supportAvif &&
                (W.supportAvif = yield r(void 0, 0, void 0, function* () {
                  if (!L) return !1;
                  const e = yield window
                    .fetch(
                      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
                    )
                    .then((e) => e.blob());
                  return createImageBitmap(e).then(
                    () => !0,
                    () => !1
                  );
                })),
              W.supportAvif
            );
          });
        }
        initReporter() {
          this.reporter = new H({
            country: this.options.country,
            biz: 101,
            env: this.options.env,
            sdkVersion: "mms-endpoint-" + R,
            uid: this.options.uid,
            reportNoLimit: !0,
          });
        }
      }
      (W.strategy = N),
        (W.supportWebp = null),
        (W.supportAvif = null),
        (W.loading = !1);
      const $ = _.DEFINITION_BEST,
        G = (e, t = $) => {
          var n, r;
          const { formats: o, default_format: i } = e,
            u = o && Array.isArray(o) && o.length && !!o[0].url,
            a = !!i;
          if (!u && !a) throw new Error("MMSData is invalid");
          const s = u
              ? null === (n = o[0]) || void 0 === n
                ? void 0
                : n.url
              : null,
            l = u
              ? null === (r = o[o.length - 1]) || void 0 === r
                ? void 0
                : r.url
              : null,
            c = u
              ? o
                  .filter((e) => !!e.bitrate)
                  .sort((e, t) => e.bitrate - t.bitrate)
              : [];
          switch (t) {
            case _.DEFAULT_FORMAT:
              return a ? i.url : null;
            case _.DEFINITION_BEST:
              return l || i.url || null;
            case _.DEFINITION_WORST:
              return s || i.url || null;
            case _.BITRATE_BEST:
              return c.length ? c[c.length - 1].url : i.url;
            case _.BITRATE_WORST:
              return c.length ? c[0].url : i.url;
            default:
              return null;
          }
        },
        q = (e) => {
          if (!e || (!e.mmsData && !e.videoInfo))
            return {
              ok: !1,
              url: "",
              errMsg: "Parameter provide mmsData or videoInfo field",
            };
          if (e.mmsData)
            try {
              const t = G(e.mmsData, e.strategy);
              return { ok: !!t, url: t || "" };
            } catch (t) {
              return {
                ok: !1,
                url: "",
                errMsg: null == t ? void 0 : t.message,
              };
            }
          try {
            const n = ((e, n, r = $) => {
              const { mms_data: o, video_id: i } = e;
              if (o)
                try {
                  const e = JSON.parse(o);
                  return G(e, r);
                } catch (t) {
                  throw new Error("Invalid mms_data in videoInfo");
                }
              if (i && i.startsWith("api/v4"))
                return `https://mms.vod.susercontent.com/${i}`;
              if (!n || !Object.values(b).includes(n))
                throw new Error(`Invalid region param: ${n}`);
              if (!i) throw new Error("Invalid video_id");
              return `https://cvf.shopee.${n}/file/${i}`;
            })(
              e.videoInfo,
              null == e ? void 0 : e.region,
              null == e ? void 0 : e.strategy
            );
            return { ok: !!n, url: n || "" };
          } catch (t) {
            return { ok: !1, url: "", errMsg: null == t ? void 0 : t.message };
          }
        };
    },
    22151: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => Ve });
      var r = {}.constructor;
      function o(e) {
        return null != e && e.constructor === r;
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e) {
        var t,
          n,
          r,
          s,
          l,
          c =
            ((s = Array.prototype.slice.call(e)),
            (l = 4),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(s) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i = [],
                    u = !0,
                    a = !1;
                  try {
                    for (
                      n = n.call(e);
                      !(u = (r = n.next()).done) &&
                      (i.push(r.value), !t || i.length !== t);
                      u = !0
                    );
                  } catch (s) {
                    (a = !0), (o = s);
                  } finally {
                    try {
                      u || null == n.return || n.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  return i;
                }
              })(s, l) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return a(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? a(e, t)
                      : void 0
                  );
                }
              })(s, l) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          f = c[0],
          d = c[1],
          D = c[2],
          h = c[3];
        if ("string" != typeof f)
          throw new TypeError("A text for parsing must be a string.");
        if (((t = f), d && "string" != typeof d)) {
          if (!o(d)) throw new Error("Invalid second argument: ".concat(d));
          D ? ((n = d), (r = D)) : (r = d);
        } else
          h ? ((n = D), (r = h)) : ((n = void 0), (r = D)),
            d &&
              (n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? i(Object(n), !0).forEach(function (t) {
                        u(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : i(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({ defaultCountry: d }, n));
        return { text: t, options: n, metadata: r };
      }
      var l = 2,
        c = 17,
        f = 3,
        d = "0-9０-９٠-٩۰-۹",
        D = ""
          .concat("-‐-―−ー－")
          .concat("／/")
          .concat("．.")
          .concat("  ­​⁠　")
          .concat("()（）［］\\[\\]")
          .concat("~⁓∼～");
      function h(e) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          h(e)
        );
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (m = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return v(e, arguments, b(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              y(r, e)
            );
          }),
          m(e)
        );
      }
      function v(e, t, n) {
        return (
          (v = g()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && y(o, n.prototype), o;
              }),
          v.apply(null, arguments)
        );
      }
      function g() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function y(e, t) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          y(e, t)
        );
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      var E = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && y(e, t);
        })(i, e);
        var t,
          n,
          r,
          o =
            ((n = i),
            (r = g()),
            function () {
              var e,
                t = b(n);
              if (r) {
                var o = b(this).constructor;
                e = Reflect.construct(t, arguments, o);
              } else e = t.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === h(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return p(e);
              })(this, e);
            });
        function i(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            (t = o.call(this, e)),
            Object.setPrototypeOf(p(t), i.prototype),
            (t.name = t.constructor.name),
            t
          );
        }
        return (
          (t = i), Object.defineProperty(t, "prototype", { writable: !1 }), t
        );
      })(m(Error));
      function C(e, t) {
        (e = e.split("-")), (t = t.split("-"));
        for (var n = e[0].split("."), r = t[0].split("."), o = 0; o < 3; o++) {
          var i = Number(n[o]),
            u = Number(r[o]);
          if (i > u) return 1;
          if (u > i) return -1;
          if (!isNaN(i) && isNaN(u)) return 1;
          if (isNaN(i) && !isNaN(u)) return -1;
        }
        return e[1] && t[1]
          ? e[1] > t[1]
            ? 1
            : e[1] < t[1]
            ? -1
            : 0
          : !e[1] && t[1]
          ? 1
          : e[1] && !t[1]
          ? -1
          : 0;
      }
      function w(e) {
        return (
          (w =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          w(e)
        );
      }
      function _(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function F(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function x(e, t, n) {
        return (
          t && F(e.prototype, t),
          n && F(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var A = " ext. ",
        S = /^\d+$/,
        k = (function () {
          function e(t) {
            _(this, e),
              (function (e) {
                if (!e)
                  throw new Error(
                    "[libphonenumber-js] `metadata` argument not passed. Check your arguments."
                  );
                if (!o(e) || !o(e.countries))
                  throw new Error(
                    "[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(
                      o(e)
                        ? "an object of shape: { " +
                            Object.keys(e).join(", ") +
                            " }"
                        : "a " + N(e) + ": " + e,
                      "."
                    )
                  );
              })(t),
              (this.metadata = t),
              j.call(this, t);
          }
          return (
            x(e, [
              {
                key: "getCountries",
                value: function () {
                  return Object.keys(this.metadata.countries).filter(function (
                    e
                  ) {
                    return "001" !== e;
                  });
                },
              },
              {
                key: "getCountryMetadata",
                value: function (e) {
                  return this.metadata.countries[e];
                },
              },
              {
                key: "nonGeographic",
                value: function () {
                  if (!(this.v1 || this.v2 || this.v3))
                    return (
                      this.metadata.nonGeographic ||
                      this.metadata.nonGeographical
                    );
                },
              },
              {
                key: "hasCountry",
                value: function (e) {
                  return void 0 !== this.getCountryMetadata(e);
                },
              },
              {
                key: "hasCallingCode",
                value: function (e) {
                  if (this.getCountryCodesForCallingCode(e)) return !0;
                  if (this.nonGeographic()) {
                    if (this.nonGeographic()[e]) return !0;
                  } else {
                    var t = this.countryCallingCodes()[e];
                    if (t && 1 === t.length && "001" === t[0]) return !0;
                  }
                },
              },
              {
                key: "isNonGeographicCallingCode",
                value: function (e) {
                  return this.nonGeographic()
                    ? !!this.nonGeographic()[e]
                    : !this.getCountryCodesForCallingCode(e);
                },
              },
              {
                key: "country",
                value: function (e) {
                  return this.selectNumberingPlan(e);
                },
              },
              {
                key: "selectNumberingPlan",
                value: function (e, t) {
                  if (
                    (e && S.test(e) && ((t = e), (e = null)), e && "001" !== e)
                  ) {
                    if (!this.hasCountry(e))
                      throw new Error("Unknown country: ".concat(e));
                    this.numberingPlan = new O(
                      this.getCountryMetadata(e),
                      this
                    );
                  } else if (t) {
                    if (!this.hasCallingCode(t))
                      throw new Error("Unknown calling code: ".concat(t));
                    this.numberingPlan = new O(
                      this.getNumberingPlanMetadata(t),
                      this
                    );
                  } else this.numberingPlan = void 0;
                  return this;
                },
              },
              {
                key: "getCountryCodesForCallingCode",
                value: function (e) {
                  var t = this.countryCallingCodes()[e];
                  if (t) {
                    if (1 === t.length && 3 === t[0].length) return;
                    return t;
                  }
                },
              },
              {
                key: "getCountryCodeForCallingCode",
                value: function (e) {
                  var t = this.getCountryCodesForCallingCode(e);
                  if (t) return t[0];
                },
              },
              {
                key: "getNumberingPlanMetadata",
                value: function (e) {
                  var t = this.getCountryCodeForCallingCode(e);
                  if (t) return this.getCountryMetadata(t);
                  if (this.nonGeographic()) {
                    var n = this.nonGeographic()[e];
                    if (n) return n;
                  } else {
                    var r = this.countryCallingCodes()[e];
                    if (r && 1 === r.length && "001" === r[0])
                      return this.metadata.countries["001"];
                  }
                },
              },
              {
                key: "countryCallingCode",
                value: function () {
                  return this.numberingPlan.callingCode();
                },
              },
              {
                key: "IDDPrefix",
                value: function () {
                  return this.numberingPlan.IDDPrefix();
                },
              },
              {
                key: "defaultIDDPrefix",
                value: function () {
                  return this.numberingPlan.defaultIDDPrefix();
                },
              },
              {
                key: "nationalNumberPattern",
                value: function () {
                  return this.numberingPlan.nationalNumberPattern();
                },
              },
              {
                key: "possibleLengths",
                value: function () {
                  return this.numberingPlan.possibleLengths();
                },
              },
              {
                key: "formats",
                value: function () {
                  return this.numberingPlan.formats();
                },
              },
              {
                key: "nationalPrefixForParsing",
                value: function () {
                  return this.numberingPlan.nationalPrefixForParsing();
                },
              },
              {
                key: "nationalPrefixTransformRule",
                value: function () {
                  return this.numberingPlan.nationalPrefixTransformRule();
                },
              },
              {
                key: "leadingDigits",
                value: function () {
                  return this.numberingPlan.leadingDigits();
                },
              },
              {
                key: "hasTypes",
                value: function () {
                  return this.numberingPlan.hasTypes();
                },
              },
              {
                key: "type",
                value: function (e) {
                  return this.numberingPlan.type(e);
                },
              },
              {
                key: "ext",
                value: function () {
                  return this.numberingPlan.ext();
                },
              },
              {
                key: "countryCallingCodes",
                value: function () {
                  return this.v1
                    ? this.metadata.country_phone_code_to_countries
                    : this.metadata.country_calling_codes;
                },
              },
              {
                key: "chooseCountryByCountryCallingCode",
                value: function (e) {
                  return this.selectNumberingPlan(e);
                },
              },
              {
                key: "hasSelectedNumberingPlan",
                value: function () {
                  return void 0 !== this.numberingPlan;
                },
              },
            ]),
            e
          );
        })(),
        O = (function () {
          function e(t, n) {
            _(this, e),
              (this.globalMetadataObject = n),
              (this.metadata = t),
              j.call(this, n.metadata);
          }
          return (
            x(e, [
              {
                key: "callingCode",
                value: function () {
                  return this.metadata[0];
                },
              },
              {
                key: "getDefaultCountryMetadataForRegion",
                value: function () {
                  return this.globalMetadataObject.getNumberingPlanMetadata(
                    this.callingCode()
                  );
                },
              },
              {
                key: "IDDPrefix",
                value: function () {
                  if (!this.v1 && !this.v2) return this.metadata[1];
                },
              },
              {
                key: "defaultIDDPrefix",
                value: function () {
                  if (!this.v1 && !this.v2) return this.metadata[12];
                },
              },
              {
                key: "nationalNumberPattern",
                value: function () {
                  return this.v1 || this.v2
                    ? this.metadata[1]
                    : this.metadata[2];
                },
              },
              {
                key: "possibleLengths",
                value: function () {
                  if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
                },
              },
              {
                key: "_getFormats",
                value: function (e) {
                  return e[this.v1 ? 2 : this.v2 ? 3 : 4];
                },
              },
              {
                key: "formats",
                value: function () {
                  var e = this;
                  return (
                    this._getFormats(this.metadata) ||
                    this._getFormats(
                      this.getDefaultCountryMetadataForRegion()
                    ) ||
                    []
                  ).map(function (t) {
                    return new B(t, e);
                  });
                },
              },
              {
                key: "nationalPrefix",
                value: function () {
                  return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
                },
              },
              {
                key: "_getNationalPrefixFormattingRule",
                value: function (e) {
                  return e[this.v1 ? 4 : this.v2 ? 5 : 6];
                },
              },
              {
                key: "nationalPrefixFormattingRule",
                value: function () {
                  return (
                    this._getNationalPrefixFormattingRule(this.metadata) ||
                    this._getNationalPrefixFormattingRule(
                      this.getDefaultCountryMetadataForRegion()
                    )
                  );
                },
              },
              {
                key: "_nationalPrefixForParsing",
                value: function () {
                  return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
                },
              },
              {
                key: "nationalPrefixForParsing",
                value: function () {
                  return (
                    this._nationalPrefixForParsing() || this.nationalPrefix()
                  );
                },
              },
              {
                key: "nationalPrefixTransformRule",
                value: function () {
                  return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
                },
              },
              {
                key: "_getNationalPrefixIsOptionalWhenFormatting",
                value: function () {
                  return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
                },
              },
              {
                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                value: function () {
                  return (
                    this._getNationalPrefixIsOptionalWhenFormatting(
                      this.metadata
                    ) ||
                    this._getNationalPrefixIsOptionalWhenFormatting(
                      this.getDefaultCountryMetadataForRegion()
                    )
                  );
                },
              },
              {
                key: "leadingDigits",
                value: function () {
                  return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
                },
              },
              {
                key: "types",
                value: function () {
                  return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
                },
              },
              {
                key: "hasTypes",
                value: function () {
                  return !(
                    (this.types() && 0 === this.types().length) ||
                    !this.types()
                  );
                },
              },
              {
                key: "type",
                value: function (e) {
                  if (this.hasTypes() && T(this.types(), e))
                    return new P(T(this.types(), e), this);
                },
              },
              {
                key: "ext",
                value: function () {
                  return this.v1 || this.v2 ? A : this.metadata[13] || A;
                },
              },
            ]),
            e
          );
        })(),
        B = (function () {
          function e(t, n) {
            _(this, e), (this._format = t), (this.metadata = n);
          }
          return (
            x(e, [
              {
                key: "pattern",
                value: function () {
                  return this._format[0];
                },
              },
              {
                key: "format",
                value: function () {
                  return this._format[1];
                },
              },
              {
                key: "leadingDigitsPatterns",
                value: function () {
                  return this._format[2] || [];
                },
              },
              {
                key: "nationalPrefixFormattingRule",
                value: function () {
                  return (
                    this._format[3] ||
                    this.metadata.nationalPrefixFormattingRule()
                  );
                },
              },
              {
                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                value: function () {
                  return (
                    !!this._format[4] ||
                    this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                  );
                },
              },
              {
                key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                value: function () {
                  return (
                    this.usesNationalPrefix() &&
                    !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                  );
                },
              },
              {
                key: "usesNationalPrefix",
                value: function () {
                  return !(
                    !this.nationalPrefixFormattingRule() ||
                    R.test(this.nationalPrefixFormattingRule())
                  );
                },
              },
              {
                key: "internationalFormat",
                value: function () {
                  return this._format[5] || this.format();
                },
              },
            ]),
            e
          );
        })(),
        R = /^\(?\$1\)?$/,
        P = (function () {
          function e(t, n) {
            _(this, e), (this.type = t), (this.metadata = n);
          }
          return (
            x(e, [
              {
                key: "pattern",
                value: function () {
                  return this.metadata.v1 ? this.type : this.type[0];
                },
              },
              {
                key: "possibleLengths",
                value: function () {
                  if (!this.metadata.v1)
                    return this.type[1] || this.metadata.possibleLengths();
                },
              },
            ]),
            e
          );
        })();
      function T(e, t) {
        switch (t) {
          case "FIXED_LINE":
            return e[0];
          case "MOBILE":
            return e[1];
          case "TOLL_FREE":
            return e[2];
          case "PREMIUM_RATE":
            return e[3];
          case "PERSONAL_NUMBER":
            return e[4];
          case "VOICEMAIL":
            return e[5];
          case "UAN":
            return e[6];
          case "PAGER":
            return e[7];
          case "VOIP":
            return e[8];
          case "SHARED_COST":
            return e[9];
        }
      }
      var N = function (e) {
        return w(e);
      };
      function I(e, t) {
        if ((t = new k(t)).hasCountry(e))
          return t.country(e).countryCallingCode();
        throw new Error("Unknown country: ".concat(e));
      }
      function j(e) {
        var t = e.version;
        "number" == typeof t
          ? ((this.v1 = 1 === t),
            (this.v2 = 2 === t),
            (this.v3 = 3 === t),
            (this.v4 = 4 === t))
          : t
          ? -1 === C(t, "1.2.0")
            ? (this.v2 = !0)
            : -1 === C(t, "1.7.35")
            ? (this.v3 = !0)
            : (this.v4 = !0)
          : (this.v1 = !0);
      }
      var L = function (e) {
        return "([".concat(d, "]{1,").concat(e, "})");
      };
      function M(e) {
        var t = "[  \\t,]*",
          n = "[:\\.．]?[  \\t,-]*",
          r = "#?",
          o = "[  \\t]*";
        return (
          ";ext=" +
          L("20") +
          "|" +
          t +
          "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)" +
          n +
          L("20") +
          "#?|" +
          t +
          "(?:[xｘ#＃~～]|int|ｉｎｔ)" +
          n +
          L("9") +
          "#?|[- ]+" +
          L("6") +
          "#|" +
          o +
          "(?:,{2}|;)" +
          n +
          L("15") +
          "#?|" +
          o +
          "(?:,)+" +
          n +
          L("9") +
          r
        );
      }
      var z = "[" + d + "]{" + l + "}",
        Z = "[+＋]{0,1}(?:[" + D + "]*[" + d + "]){3,}[" + D + d + "]*",
        V = new RegExp("^[+＋]{0,1}(?:[" + D + "]*[" + d + "]){1,2}$", "i"),
        U = Z + "(?:" + M() + ")?",
        H = new RegExp("^" + z + "$|^" + U + "$", "i"),
        W = new RegExp("(?:" + M() + ")$", "i"),
        $ = {
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          "０": "0",
          "１": "1",
          "２": "2",
          "３": "3",
          "４": "4",
          "５": "5",
          "６": "6",
          "７": "7",
          "８": "8",
          "９": "9",
          "٠": "0",
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "۰": "0",
          "۱": "1",
          "۲": "2",
          "۳": "3",
          "۴": "4",
          "۵": "5",
          "۶": "6",
          "۷": "7",
          "۸": "8",
          "۹": "9",
        };
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function q(e) {
        for (
          var t,
            n = "",
            r = (function (e, t) {
              var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
              if (n) return (n = n.call(e)).next.bind(n);
              if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? G(e, t)
                        : void 0
                    );
                  }
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                n && (e = n);
                var r = 0;
                return function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] };
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(e.split(""));
          !(t = r()).done;

        )
          n +=
            ((o = t.value),
            (i = n),
            (u = void 0),
            ("+" === o
              ? i
                ? void ("function" == typeof u && u("end"))
                : "+"
              : (function (e) {
                  return $[e];
                })(o)) || "");
        var o, i, u;
        return n;
      }
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function X(e, t) {
        return Y(e, void 0, t);
      }
      function Y(e, t, n) {
        var r = n.type(t),
          o = (r && r.possibleLengths()) || n.possibleLengths();
        if (!o) return "IS_POSSIBLE";
        if ("FIXED_LINE_OR_MOBILE" === t) {
          if (!n.type("FIXED_LINE")) return Y(e, "MOBILE", n);
          var i = n.type("MOBILE");
          i &&
            (o = (function (e, t) {
              for (
                var n,
                  r = e.slice(),
                  o = (function (e, t) {
                    var n =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                      Array.isArray(e) ||
                      (n = (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return K(e, t);
                          var n = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return (
                            "Object" === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            "Map" === n || "Set" === n
                              ? Array.from(e)
                              : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? K(e, t)
                              : void 0
                          );
                        }
                      })(e)) ||
                      (t && e && "number" == typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0;
                      return function () {
                        return r >= e.length
                          ? { done: !0 }
                          : { done: !1, value: e[r++] };
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(t);
                !(n = o()).done;

              ) {
                var i = n.value;
                e.indexOf(i) < 0 && r.push(i);
              }
              return r.sort(function (e, t) {
                return e - t;
              });
            })(o, i.possibleLengths()));
        } else if (t && !r) return "INVALID_LENGTH";
        var u = e.length,
          a = o[0];
        return a === u
          ? "IS_POSSIBLE"
          : a > u
          ? "TOO_SHORT"
          : o[o.length - 1] < u
          ? "TOO_LONG"
          : o.indexOf(u, 1) >= 0
          ? "IS_POSSIBLE"
          : "INVALID_LENGTH";
      }
      function J(e, t) {
        return "IS_POSSIBLE" === X(e, t);
      }
      function Q(e, t) {
        return (e = e || ""), new RegExp("^(?:" + t + ")$").test(e);
      }
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var te = [
        "MOBILE",
        "PREMIUM_RATE",
        "TOLL_FREE",
        "SHARED_COST",
        "VOIP",
        "PERSONAL_NUMBER",
        "PAGER",
        "UAN",
        "VOICEMAIL",
      ];
      function ne(e, t, n) {
        if (((t = t || {}), e.country || e.countryCallingCode)) {
          (n = new k(n)).selectNumberingPlan(e.country, e.countryCallingCode);
          var r = t.v2 ? e.nationalNumber : e.phone;
          if (Q(r, n.nationalNumberPattern())) {
            if (re(r, "FIXED_LINE", n))
              return n.type("MOBILE") && "" === n.type("MOBILE").pattern()
                ? "FIXED_LINE_OR_MOBILE"
                : n.type("MOBILE")
                ? re(r, "MOBILE", n)
                  ? "FIXED_LINE_OR_MOBILE"
                  : "FIXED_LINE"
                : "FIXED_LINE_OR_MOBILE";
            for (
              var o,
                i = (function (e, t) {
                  var n =
                    ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (n) return (n = n.call(e)).next.bind(n);
                  if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                      if (e) {
                        if ("string" == typeof e) return ee(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                          "Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(e)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? ee(e, t)
                            : void 0
                        );
                      }
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                  ) {
                    n && (e = n);
                    var r = 0;
                    return function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(te);
              !(o = i()).done;

            ) {
              var u = o.value;
              if (re(r, u, n)) return u;
            }
          }
        }
      }
      function re(e, t, n) {
        return (
          !(!(t = n.type(t)) || !t.pattern()) &&
          !(t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0) &&
          Q(e, t.pattern())
        );
      }
      var oe = /(\$\d)/;
      var ie = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
      function ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ae(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(n), !0).forEach(function (t) {
                le(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function le(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ce = {
        formatExtension: function (e, t, n) {
          return "".concat(e).concat(n.ext()).concat(t);
        },
      };
      function fe(e, t, n, r, o) {
        var i = (function (e, t) {
          for (
            var n,
              r = (function (e, t) {
                var n =
                  ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return ue(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(e)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? ue(e, t)
                          : void 0
                      );
                    }
                  })(e)) ||
                  (t && e && "number" == typeof e.length)
                ) {
                  n && (e = n);
                  var r = 0;
                  return function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(e);
            !(n = r()).done;

          ) {
            var o = n.value;
            if (o.leadingDigitsPatterns().length > 0) {
              var i =
                o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1];
              if (0 !== t.search(i)) continue;
            }
            if (Q(t, o.pattern())) return o;
          }
        })(r.formats(), e);
        return i
          ? (function (e, t, n) {
              var r = n.useInternationalFormat,
                o = n.withNationalPrefix,
                i =
                  (n.carrierCode,
                  n.metadata,
                  e.replace(
                    new RegExp(t.pattern()),
                    r
                      ? t.internationalFormat()
                      : o && t.nationalPrefixFormattingRule()
                      ? t.format().replace(oe, t.nationalPrefixFormattingRule())
                      : t.format()
                  ));
              return r
                ? (function (e) {
                    return e
                      .replace(new RegExp("[".concat(D, "]+"), "g"), " ")
                      .trim();
                  })(i)
                : i;
            })(e, i, {
              useInternationalFormat: "INTERNATIONAL" === n,
              withNationalPrefix:
                !i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() ||
                !o ||
                !1 !== o.nationalPrefix,
              carrierCode: t,
              metadata: r,
            })
          : e;
      }
      function de(e, t, n, r) {
        return t ? r(e, t, n) : e;
      }
      function De(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                pe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function pe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function me(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var ve = (function () {
          function e(t, n, r) {
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              !t)
            )
              throw new TypeError(
                "`country` or `countryCallingCode` not passed"
              );
            if (!n) throw new TypeError("`nationalNumber` not passed");
            if (!r) throw new TypeError("`metadata` not passed");
            var o = (function (e, t) {
                var n,
                  r,
                  o = new k(t);
                return (
                  ge(e)
                    ? ((n = e),
                      o.selectNumberingPlan(n),
                      (r = o.countryCallingCode()))
                    : (r = e),
                  { country: n, countryCallingCode: r }
                );
              })(t, r),
              i = o.country,
              u = o.countryCallingCode;
            (this.country = i),
              (this.countryCallingCode = u),
              (this.nationalNumber = n),
              (this.number =
                "+" + this.countryCallingCode + this.nationalNumber),
              (this.getMetadata = function () {
                return r;
              });
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "setExt",
                value: function (e) {
                  this.ext = e;
                },
              },
              {
                key: "getPossibleCountries",
                value: function () {
                  return this.country
                    ? [this.country]
                    : ((e = this.countryCallingCode),
                      (t = this.nationalNumber),
                      (n = this.getMetadata()),
                      (r = new k(n).getCountryCodesForCallingCode(e))
                        ? r.filter(function (e) {
                            return (function (e, t, n) {
                              var r = new k(n);
                              return (
                                r.selectNumberingPlan(t),
                                r.numberingPlan
                                  .possibleLengths()
                                  .indexOf(e.length) >= 0
                              );
                            })(t, e, n);
                          })
                        : []);
                  var e, t, n, r;
                },
              },
              {
                key: "isPossible",
                value: function () {
                  return (function (e, t, n) {
                    if ((void 0 === t && (t = {}), (n = new k(n)), t.v2)) {
                      if (!e.countryCallingCode)
                        throw new Error("Invalid phone number object passed");
                      n.selectNumberingPlan(e.countryCallingCode);
                    } else {
                      if (!e.phone) return !1;
                      if (e.country) {
                        if (!n.hasCountry(e.country))
                          throw new Error(
                            "Unknown country: ".concat(e.country)
                          );
                        n.country(e.country);
                      } else {
                        if (!e.countryCallingCode)
                          throw new Error("Invalid phone number object passed");
                        n.selectNumberingPlan(e.countryCallingCode);
                      }
                    }
                    if (n.possibleLengths())
                      return J(e.phone || e.nationalNumber, n);
                    if (
                      e.countryCallingCode &&
                      n.isNonGeographicCallingCode(e.countryCallingCode)
                    )
                      return !0;
                    throw new Error(
                      'Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.'
                    );
                  })(this, { v2: !0 }, this.getMetadata());
                },
              },
              {
                key: "isValid",
                value: function () {
                  return (
                    (e = this),
                    (t = { v2: !0 }),
                    (n = this.getMetadata()),
                    (t = t || {}),
                    (n = new k(n)).selectNumberingPlan(
                      e.country,
                      e.countryCallingCode
                    ),
                    n.hasTypes()
                      ? void 0 !== ne(e, t, n.metadata)
                      : Q(
                          t.v2 ? e.nationalNumber : e.phone,
                          n.nationalNumberPattern()
                        )
                  );
                  var e, t, n;
                },
              },
              {
                key: "isNonGeographic",
                value: function () {
                  return new k(this.getMetadata()).isNonGeographicCallingCode(
                    this.countryCallingCode
                  );
                },
              },
              {
                key: "isEqual",
                value: function (e) {
                  return this.number === e.number && this.ext === e.ext;
                },
              },
              {
                key: "getType",
                value: function () {
                  return ne(this, { v2: !0 }, this.getMetadata());
                },
              },
              {
                key: "format",
                value: function (e, t) {
                  return (function (e, t, n, r) {
                    if (
                      ((n = n ? se(se({}, ce), n) : ce),
                      (r = new k(r)),
                      e.country && "001" !== e.country)
                    ) {
                      if (!r.hasCountry(e.country))
                        throw new Error("Unknown country: ".concat(e.country));
                      r.country(e.country);
                    } else {
                      if (!e.countryCallingCode) return e.phone || "";
                      r.selectNumberingPlan(e.countryCallingCode);
                    }
                    var o,
                      i = r.countryCallingCode(),
                      u = n.v2 ? e.nationalNumber : e.phone;
                    switch (t) {
                      case "NATIONAL":
                        return u
                          ? de(
                              (o = fe(u, e.carrierCode, "NATIONAL", r, n)),
                              e.ext,
                              r,
                              n.formatExtension
                            )
                          : "";
                      case "INTERNATIONAL":
                        return u
                          ? ((o = fe(u, null, "INTERNATIONAL", r, n)),
                            de(
                              (o = "+".concat(i, " ").concat(o)),
                              e.ext,
                              r,
                              n.formatExtension
                            ))
                          : "+".concat(i);
                      case "E.164":
                        return "+".concat(i).concat(u);
                      case "RFC3966":
                        return (function (e) {
                          var t = e.number,
                            n = e.ext;
                          if (!t) return "";
                          if ("+" !== t[0])
                            throw new Error(
                              '"formatRFC3966()" expects "number" to be in E.164 format.'
                            );
                          return "tel:".concat(t).concat(n ? ";ext=" + n : "");
                        })({ number: "+".concat(i).concat(u), ext: e.ext });
                      case "IDD":
                        if (!n.fromCountry) return;
                        var a = (function (e, t, n, r, o) {
                          if (I(r, o.metadata) === n) {
                            var i = fe(e, t, "NATIONAL", o);
                            return "1" === n ? n + " " + i : i;
                          }
                          var u = (function (e, t, n) {
                            var r = new k(n);
                            return (
                              r.selectNumberingPlan(e, void 0),
                              r.defaultIDDPrefix()
                                ? r.defaultIDDPrefix()
                                : ie.test(r.IDDPrefix())
                                ? r.IDDPrefix()
                                : void 0
                            );
                          })(r, 0, o.metadata);
                          if (u)
                            return ""
                              .concat(u, " ")
                              .concat(n, " ")
                              .concat(fe(e, null, "INTERNATIONAL", o));
                        })(u, e.carrierCode, i, n.fromCountry, r);
                        return de(a, e.ext, r, n.formatExtension);
                      default:
                        throw new Error(
                          'Unknown "format" argument passed to "formatNumber()": "'.concat(
                            t,
                            '"'
                          )
                        );
                    }
                  })(
                    this,
                    e,
                    t ? he(he({}, t), {}, { v2: !0 }) : { v2: !0 },
                    this.getMetadata()
                  );
                },
              },
              {
                key: "formatNational",
                value: function (e) {
                  return this.format("NATIONAL", e);
                },
              },
              {
                key: "formatInternational",
                value: function (e) {
                  return this.format("INTERNATIONAL", e);
                },
              },
              {
                key: "getURI",
                value: function (e) {
                  return this.format("RFC3966", e);
                },
              },
            ]) && me(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        ge = function (e) {
          return /^[A-Z]{2}$/.test(e);
        },
        ye = new RegExp("([" + d + "])");
      function be(e, t) {
        var n = (function (e, t) {
            if (e && t.numberingPlan.nationalPrefixForParsing()) {
              var n = new RegExp(
                  "^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"
                ),
                r = n.exec(e);
              if (r) {
                var o,
                  i,
                  u,
                  a = r.length - 1,
                  s = a > 0 && r[a];
                if (t.nationalPrefixTransformRule() && s)
                  (o = e.replace(n, t.nationalPrefixTransformRule())),
                    a > 1 && (i = r[1]);
                else {
                  var l = r[0];
                  (o = e.slice(l.length)), s && (i = r[1]);
                }
                if (s) {
                  var c = e.indexOf(r[1]);
                  e.slice(0, c) === t.numberingPlan.nationalPrefix() &&
                    (u = t.numberingPlan.nationalPrefix());
                } else u = r[0];
                return { nationalNumber: o, nationalPrefix: u, carrierCode: i };
              }
            }
            return { nationalNumber: e };
          })(e, t),
          r = n.carrierCode,
          o = n.nationalNumber;
        if (o !== e) {
          if (
            !(function (e, t, n) {
              return !(
                Q(e, n.nationalNumberPattern()) &&
                !Q(t, n.nationalNumberPattern())
              );
            })(e, o, t)
          )
            return { nationalNumber: e };
          if (
            t.possibleLengths() &&
            !(function (e, t) {
              switch (X(e, t)) {
                case "TOO_SHORT":
                case "INVALID_LENGTH":
                  return !1;
                default:
                  return !0;
              }
            })(o, t)
          )
            return { nationalNumber: e };
        }
        return { nationalNumber: o, carrierCode: r };
      }
      function Ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ce = !1;
      function we(e, t) {
        var n = t.nationalNumber,
          r = t.defaultCountry,
          o = t.metadata;
        if (Ce && o.isNonGeographicCallingCode(e)) return "001";
        var i = o.getCountryCodesForCallingCode(e);
        return i
          ? 1 === i.length
            ? i[0]
            : (function (e, t) {
                var n = t.countries,
                  r = t.metadata;
                r = new k(r);
                for (
                  var o,
                    i = (function (e, t) {
                      var n =
                        ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                      if (n) return (n = n.call(e)).next.bind(n);
                      if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return Ee(e, t);
                            var n = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? Ee(e, t)
                                : void 0
                            );
                          }
                        })(e)) ||
                        (t && e && "number" == typeof e.length)
                      ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(n);
                  !(o = i()).done;

                ) {
                  var u = o.value;
                  if ((r.country(u), r.leadingDigits())) {
                    if (e && 0 === e.search(r.leadingDigits())) return u;
                  } else if (ne({ phone: e, country: u }, void 0, r.metadata))
                    return u;
                }
              })(n, { countries: i, defaultCountry: r, metadata: o.metadata })
          : void 0;
      }
      var _e = "+",
        Fe = "([" + d + "]|[\\-\\.\\(\\)]?)",
        xe = new RegExp("^\\" + _e + Fe + "*[" + d + "]" + Fe + "*$", "g"),
        Ae = new RegExp(
          "^([" +
            d +
            "]+((\\-)*[" +
            d +
            "])*\\.)*[a-zA-Z]+((\\-)*[" +
            d +
            "])*\\.?$",
          "g"
        ),
        Se = "tel:",
        ke = ";phone-context=",
        Oe = ";isub=";
      var Be = 250,
        Re = new RegExp("[+＋" + d + "]"),
        Pe = new RegExp("[^" + d + "#]+$"),
        Te = !1;
      function Ne(e, t, n) {
        if (
          ((t = t || {}),
          (n = new k(n)),
          t.defaultCountry && !n.hasCountry(t.defaultCountry))
        ) {
          if (t.v2) throw new E("INVALID_COUNTRY");
          throw new Error("Unknown country: ".concat(t.defaultCountry));
        }
        var r = (function (e, t, n) {
            var r = (function (e, t) {
              var n,
                r = t.extractFormattedPhoneNumber,
                o = (function (e) {
                  var t = e.indexOf(ke);
                  if (t < 0) return null;
                  var n = t + ke.length;
                  if (n >= e.length) return "";
                  var r = e.indexOf(";", n);
                  return r >= 0 ? e.substring(n, r) : e.substring(n);
                })(e);
              if (
                !(function (e) {
                  return (
                    null === e || (0 !== e.length && (xe.test(e) || Ae.test(e)))
                  );
                })(o)
              )
                throw new E("NOT_A_NUMBER");
              if (null === o) n = r(e) || "";
              else {
                (n = ""), o.charAt(0) === _e && (n += o);
                var i,
                  u = e.indexOf(Se);
                i = u >= 0 ? u + Se.length : 0;
                var a = e.indexOf(ke);
                n += e.substring(i, a);
              }
              var s = n.indexOf(Oe);
              if ((s > 0 && (n = n.substring(0, s)), "" !== n)) return n;
            })(e, {
              extractFormattedPhoneNumber: function (e) {
                return (function (e, t, n) {
                  if (e)
                    if (e.length > Be) {
                      if (n) throw new E("TOO_LONG");
                    } else {
                      if (!1 === t) return e;
                      var r = e.search(Re);
                      if (!(r < 0)) return e.slice(r).replace(Pe, "");
                    }
                })(e, n, t);
              },
            });
            if (!r) return {};
            if (
              !(function (e) {
                return e.length >= l && H.test(e);
              })(r)
            )
              return (function (e) {
                return V.test(e);
              })(r)
                ? { error: "TOO_SHORT" }
                : {};
            var o = (function (e) {
              var t = e.search(W);
              if (t < 0) return {};
              for (
                var n = e.slice(0, t), r = e.match(W), o = 1;
                o < r.length;

              ) {
                if (r[o]) return { number: n, ext: r[o] };
                o++;
              }
            })(r);
            return o.ext ? o : { number: r };
          })(e, t.v2, t.extract),
          o = r.number,
          i = r.ext,
          u = r.error;
        if (!o) {
          if (t.v2) {
            if ("TOO_SHORT" === u) throw new E("TOO_SHORT");
            throw new E("NOT_A_NUMBER");
          }
          return {};
        }
        var a = (function (e, t, n, r) {
            var o,
              i = (function (e, t, n, r) {
                if (!e) return {};
                var o;
                if ("+" !== e[0]) {
                  var i = (function (e, t, n, r) {
                    if (t) {
                      var o = new k(r);
                      o.selectNumberingPlan(t, n);
                      var i = new RegExp(o.IDDPrefix());
                      if (0 === e.search(i)) {
                        var u = (e = e.slice(e.match(i)[0].length)).match(ye);
                        if (
                          !(
                            u &&
                            null != u[1] &&
                            u[1].length > 0 &&
                            "0" === u[1]
                          )
                        )
                          return e;
                      }
                    }
                  })(e, t, n, r);
                  if (!i || i === e) {
                    if (t || n) {
                      var u = (function (e, t, n, r) {
                          var o = t ? I(t, r) : n;
                          if (0 === e.indexOf(o)) {
                            (r = new k(r)).selectNumberingPlan(t, n);
                            var i = e.slice(o.length),
                              u = be(i, r).nationalNumber,
                              a = be(e, r).nationalNumber;
                            if (
                              (!Q(a, r.nationalNumberPattern()) &&
                                Q(u, r.nationalNumberPattern())) ||
                              "TOO_LONG" === X(a, r)
                            )
                              return { countryCallingCode: o, number: i };
                          }
                          return { number: e };
                        })(e, t, n, r),
                        a = u.countryCallingCode,
                        s = u.number;
                      if (a)
                        return {
                          countryCallingCodeSource:
                            "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                          countryCallingCode: a,
                          number: s,
                        };
                    }
                    return { number: e };
                  }
                  (o = !0), (e = "+" + i);
                }
                if ("0" === e[1]) return {};
                r = new k(r);
                for (var l = 2; l - 1 <= f && l <= e.length; ) {
                  var c = e.slice(1, l);
                  if (r.hasCallingCode(c))
                    return (
                      r.selectNumberingPlan(c),
                      {
                        countryCallingCodeSource: o
                          ? "FROM_NUMBER_WITH_IDD"
                          : "FROM_NUMBER_WITH_PLUS_SIGN",
                        countryCallingCode: c,
                        number: e.slice(l),
                      }
                    );
                  l++;
                }
                return {};
              })(q(e), t, n, r.metadata),
              u = i.countryCallingCodeSource,
              a = i.countryCallingCode,
              s = i.number;
            if (a) r.selectNumberingPlan(a);
            else {
              if (!s || (!t && !n)) return {};
              r.selectNumberingPlan(t, n),
                t
                  ? (o = t)
                  : Te && r.isNonGeographicCallingCode(n) && (o = "001"),
                (a = n || I(t, r.metadata));
            }
            if (!s)
              return { countryCallingCodeSource: u, countryCallingCode: a };
            var l = be(q(s), r),
              c = l.nationalNumber,
              d = l.carrierCode,
              D = we(a, { nationalNumber: c, defaultCountry: t, metadata: r });
            return (
              D && ((o = D), "001" === D || r.country(o)),
              {
                country: o,
                countryCallingCode: a,
                countryCallingCodeSource: u,
                nationalNumber: c,
                carrierCode: d,
              }
            );
          })(o, t.defaultCountry, t.defaultCallingCode, n),
          s = a.country,
          d = a.nationalNumber,
          D = a.countryCallingCode,
          h = a.countryCallingCodeSource,
          p = a.carrierCode;
        if (!n.hasSelectedNumberingPlan()) {
          if (t.v2) throw new E("INVALID_COUNTRY");
          return {};
        }
        if (!d || d.length < l) {
          if (t.v2) throw new E("TOO_SHORT");
          return {};
        }
        if (d.length > c) {
          if (t.v2) throw new E("TOO_LONG");
          return {};
        }
        if (t.v2) {
          var m = new ve(D, d, n.metadata);
          return (
            s && (m.country = s),
            p && (m.carrierCode = p),
            i && (m.ext = i),
            (m.__countryCallingCodeSource = h),
            m
          );
        }
        var v =
          !!(t.extended ? n.hasSelectedNumberingPlan() : s) &&
          Q(d, n.nationalNumberPattern());
        return t.extended
          ? {
              country: s,
              countryCallingCode: D,
              carrierCode: p,
              valid: v,
              possible:
                !!v || !(!0 !== t.extended || !n.possibleLengths() || !J(d, n)),
              phone: d,
              ext: i,
            }
          : v
          ? (function (e, t, n) {
              var r = { country: e, phone: t };
              return n && (r.ext = n), r;
            })(s, d, i)
          : {};
      }
      function Ie(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ie(Object(n), !0).forEach(function (t) {
                Le(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ie(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Le(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Me(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Me(Object(n), !0).forEach(function (t) {
                Ze(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Me(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ze(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ve() {
        var e = s(arguments);
        return (function (e, t, n) {
          t &&
            t.defaultCountry &&
            !(function (e, t) {
              return t.countries.hasOwnProperty(e);
            })(t.defaultCountry, n) &&
            (t = ze(ze({}, t), {}, { defaultCountry: void 0 }));
          try {
            return (function (e, t, n) {
              return Ne(e, je(je({}, t), {}, { v2: !0 }), n);
            })(e, t, n);
          } catch (r) {
            if (!(r instanceof E)) throw r;
          }
        })(e.text, e.options, e.metadata);
      }
    },
    53245: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
      );
    },
  },
]);
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-productdetailspage/_/1419.becb3683e6d0ce692546.js.map
