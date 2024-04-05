'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [718],
    {
        40654: (e, t, n) => {
            n.d(t, {p: () => i});
            var i = n(65812).createContext({});
        },
        73606: (e, t, n) => {
            function i(e) {
                return e.canCheck
                    ? !(!e.isChecked && !e.checked)
                    : 'boolean' == typeof e.isChecked
                      ? e.isChecked
                      : 'boolean' == typeof e.checked
                        ? e.checked
                        : null;
            }
            function r(e) {
                return !(!e.subMenuProps && !e.items);
            }
            function o(e) {
                return !(!e.isDisabled && !e.disabled);
            }
            function g(e) {
                return null !== i(e) ? 'menuitemcheckbox' : 'menuitem';
            }
            n.d(t, {Df: () => r, E3: () => i, JF: () => g, P_: () => o});
        },
        44375: (e, t, n) => {
            var i;
            n.d(t, {K7: () => a, eD: () => i, tc: () => u}),
                n(65812),
                (function (e) {
                    (e[(e.small = 0)] = 'small'),
                        (e[(e.medium = 1)] = 'medium'),
                        (e[(e.large = 2)] = 'large'),
                        (e[(e.xLarge = 3)] = 'xLarge'),
                        (e[(e.xxLarge = 4)] = 'xxLarge'),
                        (e[(e.xxxLarge = 5)] = 'xxxLarge'),
                        (e[(e.unknown = 999)] = 'unknown');
                })(i || (i = {}));
            var r,
                o,
                g = [479, 639, 1023, 1365, 1919, 99999999];
            function a() {
                var e;
                return null !== (e = null != r ? r : o) && void 0 !== e
                    ? e
                    : i.large;
            }
            function d(e) {
                try {
                    return e.document.documentElement.clientWidth;
                } catch (t) {
                    return e.innerWidth;
                }
            }
            function u(e) {
                var t = i.small;
                if (e) {
                    try {
                        for (; d(e) > g[t]; ) t++;
                    } catch (e) {
                        t = a();
                    }
                    o = t;
                } else {
                    if (void 0 === r)
                        throw new Error(
                            'Content was rendered in a server environment without providing a default responsive mode. Call setResponsiveMode to define what the responsive mode is.'
                        );
                    t = r;
                }
                return t;
            }
        },
        81262: (e, t, n) => {
            n.d(t, {NA: () => o, hX: () => g, xw: () => r});
            var i = n(63442),
                r = function () {
                    var e;
                    return (
                        null !== (e = (0, i.zY)()) && void 0 !== e
                            ? e
                            : 'undefined' != typeof window
                    )
                        ? window
                        : void 0;
                },
                o = function (e) {
                    var t, n;
                    return (
                        null !==
                            (n =
                                null === (t = null == e ? void 0 : e.window) ||
                                void 0 === t
                                    ? void 0
                                    : t.document) && void 0 !== n
                            ? n
                            : 'undefined' != typeof document
                    )
                        ? document
                        : void 0;
                },
                g = function (e) {
                    var t;
                    return (
                        null !== (t = null == e ? void 0 : e.window) &&
                        void 0 !== t
                            ? t
                            : 'undefined' != typeof window
                    )
                        ? window
                        : void 0;
                };
        },
        51444: (e, t, n) => {
            n.d(t, {q: () => d});
            var i = n(65812),
                r = n(84346),
                o = n(73298),
                g = n(44375),
                a = n(63442),
                d = function (e, t) {
                    var n = i.useState((0, g.K7)()),
                        d = n[0],
                        u = n[1],
                        l = i.useCallback(
                            function () {
                                var t = (0, g.tc)((0, r.J)(e.current));
                                d !== t && u(t);
                            },
                            [e, d]
                        ),
                        c = (0, a.zY)();
                    return (
                        (0, o.d)(c, 'resize', l),
                        i.useEffect(
                            function () {
                                void 0 === t && l();
                            },
                            [t]
                        ),
                        null != t ? t : d
                    );
                };
        },
        64519: (e, t, n) => {
            n.d(t, {
                Tj: () => i,
                by: () => o,
                fV: () => g,
                ms: () => a,
                nK: () => d,
                ww: () => r,
            });
            var i,
                r = 'ktp',
                o = '-',
                g = 'data-ktp-target',
                a = 'data-ktp-execute-target',
                d = 'ktp-layer-id';
            !(function (e) {
                (e.KEYTIP_ADDED = 'keytipAdded'),
                    (e.KEYTIP_REMOVED = 'keytipRemoved'),
                    (e.KEYTIP_UPDATED = 'keytipUpdated'),
                    (e.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded'),
                    (e.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved'),
                    (e.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute'),
                    (e.ENTER_KEYTIP_MODE = 'enterKeytipMode'),
                    (e.EXIT_KEYTIP_MODE = 'exitKeytipMode');
            })(i || (i = {}));
        },
        34602: (e, t, n) => {
            n.d(t, {K: () => a});
            var i = n(96583),
                r = n(60702),
                o = n(83510),
                g = n(64519),
                a = (function () {
                    function e() {
                        (this.keytips = {}),
                            (this.persistedKeytips = {}),
                            (this.sequenceMapping = {}),
                            (this.inKeytipMode = !1),
                            (this.shouldEnterKeytipMode = !0),
                            (this.delayUpdatingKeytipChange = !1);
                    }
                    return (
                        (e.getInstance = function () {
                            return this._instance;
                        }),
                        (e.prototype.init = function (e) {
                            this.delayUpdatingKeytipChange = e;
                        }),
                        (e.prototype.register = function (e, t) {
                            void 0 === t && (t = !1);
                            var n = e;
                            t ||
                                ((n = this.addParentOverflow(e)),
                                (this.sequenceMapping[
                                    n.keySequences.toString()
                                ] = n));
                            var i = this._getUniqueKtp(n);
                            if (
                                (t
                                    ? (this.persistedKeytips[i.uniqueID] = i)
                                    : (this.keytips[i.uniqueID] = i),
                                this.inKeytipMode ||
                                    !this.delayUpdatingKeytipChange)
                            ) {
                                var o = t
                                    ? g.Tj.PERSISTED_KEYTIP_ADDED
                                    : g.Tj.KEYTIP_ADDED;
                                r.r.raise(this, o, {
                                    keytip: n,
                                    uniqueID: i.uniqueID,
                                });
                            }
                            return i.uniqueID;
                        }),
                        (e.prototype.update = function (e, t) {
                            var n = this.addParentOverflow(e),
                                i = this._getUniqueKtp(n, t),
                                o = this.keytips[t];
                            o &&
                                ((i.keytip.visible = o.keytip.visible),
                                (this.keytips[t] = i),
                                delete this.sequenceMapping[
                                    o.keytip.keySequences.toString()
                                ],
                                (this.sequenceMapping[
                                    i.keytip.keySequences.toString()
                                ] = i.keytip),
                                (!this.inKeytipMode &&
                                    this.delayUpdatingKeytipChange) ||
                                    r.r.raise(this, g.Tj.KEYTIP_UPDATED, {
                                        keytip: i.keytip,
                                        uniqueID: i.uniqueID,
                                    }));
                        }),
                        (e.prototype.unregister = function (e, t, n) {
                            void 0 === n && (n = !1),
                                n
                                    ? delete this.persistedKeytips[t]
                                    : delete this.keytips[t],
                                !n &&
                                    delete this.sequenceMapping[
                                        e.keySequences.toString()
                                    ];
                            var i = n
                                ? g.Tj.PERSISTED_KEYTIP_REMOVED
                                : g.Tj.KEYTIP_REMOVED;
                            (!this.inKeytipMode &&
                                this.delayUpdatingKeytipChange) ||
                                r.r.raise(this, i, {keytip: e, uniqueID: t});
                        }),
                        (e.prototype.enterKeytipMode = function () {
                            r.r.raise(this, g.Tj.ENTER_KEYTIP_MODE);
                        }),
                        (e.prototype.exitKeytipMode = function () {
                            r.r.raise(this, g.Tj.EXIT_KEYTIP_MODE);
                        }),
                        (e.prototype.getKeytips = function () {
                            var e = this;
                            return Object.keys(this.keytips).map(function (t) {
                                return e.keytips[t].keytip;
                            });
                        }),
                        (e.prototype.addParentOverflow = function (e) {
                            var t = (0, i.ev)([], e.keySequences, !0);
                            if ((t.pop(), 0 !== t.length)) {
                                var n = this.sequenceMapping[t.toString()];
                                if (n && n.overflowSetSequence)
                                    return (0, i.pi)((0, i.pi)({}, e), {
                                        overflowSetSequence:
                                            n.overflowSetSequence,
                                    });
                            }
                            return e;
                        }),
                        (e.prototype.menuExecute = function (e, t) {
                            r.r.raise(this, g.Tj.PERSISTED_KEYTIP_EXECUTE, {
                                overflowButtonSequences: e,
                                keytipSequences: t,
                            });
                        }),
                        (e.prototype._getUniqueKtp = function (e, t) {
                            return (
                                void 0 === t && (t = (0, o.z)()),
                                {keytip: (0, i.pi)({}, e), uniqueID: t}
                            );
                        }),
                        (e._instance = new e()),
                        e
                    );
                })();
        },
        62785: (e, t, n) => {
            n.d(t, {a1: () => a, aB: () => g, w7: () => d});
            var i = n(96583),
                r = n(64519),
                o = n(41695);
            function g(e) {
                return e.reduce(function (e, t) {
                    return e + r.by + t.split('').join(r.by);
                }, r.ww);
            }
            function a(e, t) {
                var n = t.length,
                    r = (0, i.ev)([], t, !0).pop(),
                    g = (0, i.ev)([], e, !0);
                return (0, o.OA)(g, n - 1, r);
            }
            function d(e) {
                var t = ' ' + r.nK;
                return e.length ? t + ' ' + g(e) : t;
            }
        },
        4458: (e, t, n) => {
            n.d(t, {
                DQ: () => L,
                Su: () => B,
                c5: () => O,
                qE: () => U,
                qs: () => j,
            });
            var i,
                r = n(96583),
                o = n(53222),
                g = n(33749),
                a = n(84346),
                d = n(94863),
                u = n(86221),
                l = n(78879);
            function c(e, t, n) {
                return {targetEdge: e, alignmentEdge: t, isAuto: n};
            }
            var p =
                (((i = {})[o.b.topLeftEdge] = c(u.z.top, u.z.left)),
                (i[o.b.topCenter] = c(u.z.top)),
                (i[o.b.topRightEdge] = c(u.z.top, u.z.right)),
                (i[o.b.topAutoEdge] = c(u.z.top, void 0, !0)),
                (i[o.b.bottomLeftEdge] = c(u.z.bottom, u.z.left)),
                (i[o.b.bottomCenter] = c(u.z.bottom)),
                (i[o.b.bottomRightEdge] = c(u.z.bottom, u.z.right)),
                (i[o.b.bottomAutoEdge] = c(u.z.bottom, void 0, !0)),
                (i[o.b.leftTopEdge] = c(u.z.left, u.z.top)),
                (i[o.b.leftCenter] = c(u.z.left)),
                (i[o.b.leftBottomEdge] = c(u.z.left, u.z.bottom)),
                (i[o.b.rightTopEdge] = c(u.z.right, u.z.top)),
                (i[o.b.rightCenter] = c(u.z.right)),
                (i[o.b.rightBottomEdge] = c(u.z.right, u.z.bottom)),
                i);
            function s(e, t) {
                return !(
                    e.top < t.top ||
                    e.bottom > t.bottom ||
                    e.left < t.left ||
                    e.right > t.right
                );
            }
            function f(e, t) {
                var n = [];
                return (
                    e.top < t.top && n.push(u.z.top),
                    e.bottom > t.bottom && n.push(u.z.bottom),
                    e.left < t.left && n.push(u.z.left),
                    e.right > t.right && n.push(u.z.right),
                    n
                );
            }
            function v(e, t) {
                return e[u.z[t]];
            }
            function E(e, t, n) {
                return (e[u.z[t]] = n), e;
            }
            function h(e, t) {
                var n = I(t);
                return (v(e, n.positiveEdge) + v(e, n.negativeEdge)) / 2;
            }
            function m(e, t) {
                return e > 0 ? t : -1 * t;
            }
            function b(e, t) {
                return m(e, v(t, e));
            }
            function y(e, t, n) {
                return m(n, v(e, n) - v(t, n));
            }
            function w(e, t, n, i) {
                void 0 === i && (i = !0);
                var r = v(e, t) - n,
                    o = E(e, t, n);
                return i && (o = E(e, -1 * t, v(e, -1 * t) - r)), o;
            }
            function z(e, t, n, i) {
                return void 0 === i && (i = 0), w(e, n, v(t, n) + m(n, i));
            }
            function k(e, t, n) {
                return b(n, e) > b(n, t);
            }
            function T(e, t) {
                for (var n = 0, i = 0, r = f(e, t); i < r.length; i++) {
                    var o = r[i];
                    n += Math.pow(y(e, t, o), 2);
                }
                return n;
            }
            function D(e, t, n, i) {
                return (
                    void 0 === i && (i = 200),
                    (n === u.z.bottom || n === u.z.top) && y(e, t, n) >= i
                );
            }
            function R(e, t, n, i) {
                for (var r = 0, o = e; r < o.length; r++) {
                    var g = o[r],
                        a = void 0;
                    i && i === -1 * g
                        ? ((a = w(t.elementRectangle, g, v(n, g), !1)),
                          (t.forcedInBounds = !0))
                        : k((a = z(t.elementRectangle, n, g)), n, -1 * g) ||
                          ((a = w(a, -1 * g, v(n, -1 * g), !1)),
                          (t.forcedInBounds = !0)),
                        (t.elementRectangle = a);
                }
                return t;
            }
            function K(e, t, n) {
                var i = I(t).positiveEdge;
                return w(e, i, n - (h(e, t) - v(e, i)));
            }
            function S(e, t, n, i, r) {
                void 0 === i && (i = 0);
                var o = new l.A(e.left, e.right, e.top, e.bottom),
                    g = n.alignmentEdge,
                    a = n.targetEdge,
                    d = r ? a : -1 * a;
                return (
                    (o = r
                        ? z(o, t, a, i)
                        : (function (e, t, n, i) {
                              void 0 === i && (i = 0);
                              var r = m(-1 * n, i);
                              return w(e, -1 * n, v(t, n) + r);
                          })(o, t, a, i)),
                    (o = g ? z(o, t, g) : K(o, d, h(t, a)))
                );
            }
            function I(e) {
                return e === u.z.top || e === u.z.bottom
                    ? {positiveEdge: u.z.left, negativeEdge: u.z.right}
                    : {positiveEdge: u.z.top, negativeEdge: u.z.bottom};
            }
            function _(e, t, n) {
                return n && Math.abs(y(e, n, t)) > Math.abs(y(e, n, -1 * t))
                    ? -1 * t
                    : t;
            }
            function q(e, t, n, i, r, o, g, a) {
                var d,
                    l = {},
                    c = M(t),
                    p = o ? n : -1 * n,
                    s = r || I(n).positiveEdge;
                return (
                    (g &&
                        !(function (e, t, n) {
                            return void 0 !== n && v(e, t) === v(n, t);
                        })(e, ((d = s), -1 * d), i)) ||
                        (s = _(e, s, i)),
                    (l[u.z[p]] = y(e, c, p)),
                    (l[u.z[s]] = y(e, c, s)),
                    a &&
                        ((l[u.z[-1 * p]] = y(e, c, -1 * p)),
                        (l[u.z[-1 * s]] = y(e, c, -1 * s))),
                    l
                );
            }
            function P(e, t, n) {
                var i = h(t, e),
                    r = h(n, e),
                    o = I(e),
                    g = o.positiveEdge,
                    a = o.negativeEdge;
                return i <= r ? g : a;
            }
            function A(e, t, n, i, r, o, a, d, l) {
                void 0 === o && (o = !1);
                var c = S(e, t, i, r, l);
                return s(c, n)
                    ? {
                          elementRectangle: c,
                          targetEdge: i.targetEdge,
                          alignmentEdge: i.alignmentEdge,
                      }
                    : (function (e, t, n, i, r, o, a, d, l) {
                          void 0 === r && (r = !1), void 0 === a && (a = 0);
                          var c = i.alignmentEdge,
                              p = i.alignTargetEdge,
                              v = {
                                  elementRectangle: e,
                                  targetEdge: i.targetEdge,
                                  alignmentEdge: c,
                              };
                          d ||
                              l ||
                              (v = (function (e, t, n, i, r, o, a) {
                                  void 0 === r && (r = !1),
                                      void 0 === a && (a = 0);
                                  var d = [
                                      u.z.left,
                                      u.z.right,
                                      u.z.bottom,
                                      u.z.top,
                                  ];
                                  (0, g.zg)() && ((d[0] *= -1), (d[1] *= -1));
                                  for (
                                      var l,
                                          c = e,
                                          p = i.targetEdge,
                                          s = i.alignmentEdge,
                                          f = p,
                                          v = s,
                                          E = 0;
                                      E < 4;
                                      E++
                                  ) {
                                      if (k(c, n, p))
                                          return {
                                              elementRectangle: c,
                                              targetEdge: p,
                                              alignmentEdge: s,
                                          };
                                      if (r && D(t, n, p, o)) {
                                          switch (p) {
                                              case u.z.bottom:
                                                  c.bottom = n.bottom;
                                                  break;
                                              case u.z.top:
                                                  c.top = n.top;
                                          }
                                          return {
                                              elementRectangle: c,
                                              targetEdge: p,
                                              alignmentEdge: s,
                                              forcedInBounds: !0,
                                          };
                                      }
                                      var h = T(c, n);
                                      (!l || h < l) &&
                                          ((l = h), (f = p), (v = s)),
                                          d.splice(d.indexOf(p), 1),
                                          d.length > 0 &&
                                              (d.indexOf(-1 * p) > -1
                                                  ? (p *= -1)
                                                  : ((s = p),
                                                    (p = d.slice(-1)[0])),
                                              (c = S(
                                                  e,
                                                  t,
                                                  {
                                                      targetEdge: p,
                                                      alignmentEdge: s,
                                                  },
                                                  a
                                              )));
                                  }
                                  return {
                                      elementRectangle: (c = S(
                                          e,
                                          t,
                                          {targetEdge: f, alignmentEdge: v},
                                          a
                                      )),
                                      targetEdge: f,
                                      alignmentEdge: v,
                                  };
                              })(e, t, n, i, r, o, a));
                          var E = f(v.elementRectangle, n),
                              h = d ? -v.targetEdge : void 0;
                          if (E.length > 0)
                              if (p)
                                  if (
                                      v.alignmentEdge &&
                                      E.indexOf(-1 * v.alignmentEdge) > -1
                                  ) {
                                      var m = (function (e, t, n, i) {
                                          var r = e.alignmentEdge,
                                              o = e.targetEdge,
                                              g = -1 * r;
                                          return {
                                              elementRectangle: S(
                                                  e.elementRectangle,
                                                  t,
                                                  {
                                                      targetEdge: o,
                                                      alignmentEdge: g,
                                                  },
                                                  n,
                                                  i
                                              ),
                                              targetEdge: o,
                                              alignmentEdge: g,
                                          };
                                      })(v, t, a, l);
                                      if (s(m.elementRectangle, n)) return m;
                                      v = R(f(m.elementRectangle, n), v, n, h);
                                  } else v = R(E, v, n, h);
                              else v = R(E, v, n, h);
                          return v;
                      })(c, t, n, i, o, a, r, d, l);
            }
            function M(e) {
                var t = e.getBoundingClientRect();
                return new l.A(t.left, t.right, t.top, t.bottom);
            }
            function x(e, t, n, i, a, d) {
                void 0 === a && (a = !1);
                var c = e.gapSpace ? e.gapSpace : 0,
                    v = (function (e, t) {
                        var n;
                        if (t) {
                            if (t.preventDefault) {
                                var i = t;
                                n = new l.A(
                                    i.clientX,
                                    i.clientX,
                                    i.clientY,
                                    i.clientY
                                );
                            } else if (t.getBoundingClientRect) n = M(t);
                            else {
                                var r = t,
                                    o = r.left || r.x,
                                    g = r.top || r.y,
                                    a = r.right || o,
                                    d = r.bottom || g;
                                n = new l.A(o, a, g, d);
                            }
                            if (!s(n, e))
                                for (
                                    var c = 0, p = f(n, e);
                                    c < p.length;
                                    c++
                                ) {
                                    var v = p[c];
                                    n[u.z[v]] = e[u.z[v]];
                                }
                        } else n = new l.A(0, 0, 0, 0);
                        return n;
                    })(n, e.target),
                    E = (function (e, t, n, i, r) {
                        return (
                            e.isAuto &&
                                (e.alignmentEdge = P(e.targetEdge, t, n)),
                            (e.alignTargetEdge = r),
                            e
                        );
                    })(
                        (function (e, t, n) {
                            if ((void 0 === e && (e = o.b.bottomAutoEdge), n))
                                return {
                                    alignmentEdge: n.alignmentEdge,
                                    isAuto: n.isAuto,
                                    targetEdge: n.targetEdge,
                                };
                            var i = (0, r.pi)({}, p[e]);
                            return (0, g.zg)()
                                ? (i.alignmentEdge &&
                                      i.alignmentEdge % 2 == 0 &&
                                      (i.alignmentEdge = -1 * i.alignmentEdge),
                                  void 0 !== t ? p[t] : i)
                                : i;
                        })(e.directionalHint, e.directionalHintForRTL, i),
                        v,
                        n,
                        e.coverTarget,
                        e.alignTargetEdge
                    ),
                    h = A(
                        M(t),
                        v,
                        n,
                        E,
                        c,
                        a,
                        d,
                        e.directionalHintFixed,
                        e.coverTarget
                    );
                return (0, r.pi)((0, r.pi)({}, h), {targetRectangle: v});
            }
            function C(e, t, n) {
                return (
                    void 0 === t && (t = 0),
                    void 0 === n && (n = 0),
                    (function (e) {
                        return Math.sqrt(e * e * 2);
                    })(e ? t : 0) /
                        2 +
                        n
                );
            }
            function Y(e, t, n, i, o, g, c, p) {
                void 0 === o && (o = !1);
                var s = null != p ? p : (0, a.J)(),
                    f = (e.isBeakVisible && e.beakWidth) || 0,
                    E = C(e.isBeakVisible, e.beakWidth, e.gapSpace),
                    m = e;
                m.gapSpace = E;
                var T,
                    D,
                    R,
                    S,
                    A,
                    M,
                    Y,
                    O,
                    B,
                    U = e.bounds
                        ? ((B = e.bounds),
                          new l.A(B.left, B.right, B.top, B.bottom))
                        : new l.A(
                              0,
                              s.innerWidth - (0, d.np)(),
                              0,
                              s.innerHeight
                          ),
                    j = x(m, n, U, i, o, g),
                    L =
                        ((T = j),
                        (D = (function (e, t) {
                            var n = t.targetRectangle,
                                i = I(t.targetEdge),
                                r = i.positiveEdge,
                                o = i.negativeEdge,
                                g = h(n, t.targetEdge),
                                a = new l.A(
                                    e / 2,
                                    t.elementRectangle.width - e / 2,
                                    e / 2,
                                    t.elementRectangle.height - e / 2
                                ),
                                d = new l.A(0, e, 0, e);
                            return (
                                k(
                                    (d = K(
                                        (d = w(d, -1 * t.targetEdge, -e / 2)),
                                        -1 * t.targetEdge,
                                        g - b(r, t.elementRectangle)
                                    )),
                                    a,
                                    r
                                )
                                    ? k(d, a, o) || (d = z(d, a, o))
                                    : (d = z(d, a, r)),
                                d
                            );
                        })(f, j)),
                        (R = U),
                        (S = -1 * T.targetEdge),
                        (A = new l.A(
                            0,
                            T.elementRectangle.width,
                            0,
                            T.elementRectangle.height
                        )),
                        (M = {}),
                        (Y = _(
                            T.elementRectangle,
                            T.alignmentEdge
                                ? T.alignmentEdge
                                : I(S).positiveEdge,
                            R
                        )),
                        (O =
                            y(T.elementRectangle, T.targetRectangle, S) >
                            Math.abs(v(D, S))),
                        (M[u.z[S]] = v(D, S)),
                        (M[u.z[Y]] = y(D, A, Y)),
                        {
                            elementPosition: (0, r.pi)({}, M),
                            closestEdge: P(T.targetEdge, D, A),
                            targetEdge: S,
                            hideBeak: !O,
                        });
                return (0, r.pi)(
                    (0, r.pi)(
                        {},
                        (function (e, t, n, i, r) {
                            return {
                                elementPosition: q(
                                    e.elementRectangle,
                                    t,
                                    e.targetEdge,
                                    n,
                                    e.alignmentEdge,
                                    i,
                                    r,
                                    e.forcedInBounds
                                ),
                                targetEdge: e.targetEdge,
                                alignmentEdge: e.alignmentEdge,
                            };
                        })(j, t, U, e.coverTarget, c)
                    ),
                    {beakPosition: L}
                );
            }
            function O(e, t, n, i, r, o, g) {
                return Y(e, t, n, i, r, o, void 0, g);
            }
            function B(e, t, n, i, r) {
                return (function (e, t, n, i, r) {
                    return Y(
                        e,
                        t,
                        n,
                        i,
                        !1,
                        void 0,
                        !0,
                        null != r ? r : (0, a.J)()
                    );
                })(e, t, n, i, r);
            }
            function U(e, t) {
                return (function (e, t) {
                    var n = void 0;
                    if (
                        (t.getWindowSegments && (n = t.getWindowSegments()),
                        void 0 === n || n.length <= 1)
                    )
                        return {
                            top: 0,
                            left: 0,
                            right: t.innerWidth,
                            bottom: t.innerHeight,
                            width: t.innerWidth,
                            height: t.innerHeight,
                        };
                    var i = 0,
                        r = 0;
                    if (null !== e && e.getBoundingClientRect) {
                        var o = e.getBoundingClientRect();
                        (i = (o.left + o.right) / 2),
                            (r = (o.top + o.bottom) / 2);
                    } else
                        null !== e && ((i = e.left || e.x), (r = e.top || e.y));
                    for (
                        var g = {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                width: 0,
                                height: 0,
                            },
                            a = 0,
                            d = n;
                        a < d.length;
                        a++
                    ) {
                        var u = d[a];
                        i &&
                            u.left <= i &&
                            u.right >= i &&
                            r &&
                            u.top <= r &&
                            u.bottom >= r &&
                            (g = {
                                top: u.top,
                                left: u.left,
                                right: u.right,
                                bottom: u.bottom,
                                width: u.width,
                                height: u.height,
                            });
                    }
                    return g;
                })(e, t);
            }
            function j(e, t, n) {
                return C(e, t, n);
            }
            function L(e) {
                return (function (e) {
                    var t,
                        n,
                        i,
                        r,
                        o = e,
                        g = e,
                        a = e,
                        d = null !== (t = a.left) && void 0 !== t ? t : a.x,
                        u = null !== (n = a.top) && void 0 !== n ? n : a.y,
                        c = null !== (i = a.right) && void 0 !== i ? i : d,
                        p = null !== (r = a.bottom) && void 0 !== r ? r : u;
                    return o.stopPropagation
                        ? new l.A(o.clientX, o.clientX, o.clientY, o.clientY)
                        : void 0 !== d && void 0 !== u
                          ? new l.A(d, c, u, p)
                          : M(g);
                })(e);
            }
        },
        86221: (e, t, n) => {
            var i, r;
            n.d(t, {z: () => i}),
                (function (e) {
                    (e[(e.top = 1)] = 'top'),
                        (e[(e.bottom = -1)] = 'bottom'),
                        (e[(e.left = 2)] = 'left'),
                        (e[(e.right = -2)] = 'right');
                })(i || (i = {})),
                (function (e) {
                    (e[(e.top = 0)] = 'top'),
                        (e[(e.bottom = 1)] = 'bottom'),
                        (e[(e.start = 2)] = 'start'),
                        (e[(e.end = 3)] = 'end');
                })(r || (r = {}));
        },
        42169: (e, t, n) => {
            function i(e, t) {
                for (var n = [], i = 0, r = t; i < r.length; i++) {
                    var o = e[r[i]];
                    o && n.push(o);
                }
                return n;
            }
            n.d(t, {t: () => i});
        },
        38582: (e, t, n) => {
            var i;
            n.d(t, {F: () => i}),
                (function (e) {
                    (e[(e.Normal = 0)] = 'Normal'),
                        (e[(e.Divider = 1)] = 'Divider'),
                        (e[(e.Header = 2)] = 'Header'),
                        (e[(e.SelectAll = 3)] = 'SelectAll');
                })(i || (i = {}));
        },
    },
]);
