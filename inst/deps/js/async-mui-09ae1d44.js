'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [439],
    {
        60510: (e, t, n) => {
            function r(e) {
                if (null == e) return window;
                if ('[object Window]' !== e.toString()) {
                    var t = e.ownerDocument;
                    return (t && t.defaultView) || window;
                }
                return e;
            }
            function o(e) {
                return e instanceof r(e).Element || e instanceof Element;
            }
            function i(e) {
                return (
                    e instanceof r(e).HTMLElement || e instanceof HTMLElement
                );
            }
            function a(e) {
                return (
                    'undefined' != typeof ShadowRoot &&
                    (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
                );
            }
            n.d(t, {fi: () => le});
            var s = Math.max,
                f = Math.min,
                c = Math.round;
            function p() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands)
                    ? e.brands
                          .map(function (e) {
                              return e.brand + '/' + e.version;
                          })
                          .join(' ')
                    : navigator.userAgent;
            }
            function u() {
                return !/^((?!chrome|android).)*safari/i.test(p());
            }
            function l(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var a = e.getBoundingClientRect(),
                    s = 1,
                    f = 1;
                t &&
                    i(e) &&
                    ((s =
                        (e.offsetWidth > 0 && c(a.width) / e.offsetWidth) || 1),
                    (f =
                        (e.offsetHeight > 0 && c(a.height) / e.offsetHeight) ||
                        1));
                var p = (o(e) ? r(e) : window).visualViewport,
                    l = !u() && n,
                    d = (a.left + (l && p ? p.offsetLeft : 0)) / s,
                    h = (a.top + (l && p ? p.offsetTop : 0)) / f,
                    m = a.width / s,
                    v = a.height / f;
                return {
                    width: m,
                    height: v,
                    top: h,
                    right: d + m,
                    bottom: h + v,
                    left: d,
                    x: d,
                    y: h,
                };
            }
            function d(e) {
                var t = r(e);
                return {scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset};
            }
            function h(e) {
                return e ? (e.nodeName || '').toLowerCase() : null;
            }
            function m(e) {
                return (
                    (o(e) ? e.ownerDocument : e.document) || window.document
                ).documentElement;
            }
            function v(e) {
                return l(m(e)).left + d(e).scrollLeft;
            }
            function g(e) {
                return r(e).getComputedStyle(e);
            }
            function y(e) {
                var t = g(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r);
            }
            function b(e, t, n) {
                void 0 === n && (n = !1);
                var o,
                    a,
                    s = i(t),
                    f =
                        i(t) &&
                        (function (e) {
                            var t = e.getBoundingClientRect(),
                                n = c(t.width) / e.offsetWidth || 1,
                                r = c(t.height) / e.offsetHeight || 1;
                            return 1 !== n || 1 !== r;
                        })(t),
                    p = m(t),
                    u = l(e, f, n),
                    g = {scrollLeft: 0, scrollTop: 0},
                    b = {x: 0, y: 0};
                return (
                    (s || (!s && !n)) &&
                        (('body' !== h(t) || y(p)) &&
                            (g =
                                (o = t) !== r(o) && i(o)
                                    ? {
                                          scrollLeft: (a = o).scrollLeft,
                                          scrollTop: a.scrollTop,
                                      }
                                    : d(o)),
                        i(t)
                            ? (((b = l(t, !0)).x += t.clientLeft),
                              (b.y += t.clientTop))
                            : p && (b.x = v(p))),
                    {
                        x: u.left + g.scrollLeft - b.x,
                        y: u.top + g.scrollTop - b.y,
                        width: u.width,
                        height: u.height,
                    }
                );
            }
            function w(e) {
                var t = l(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return (
                    Math.abs(t.width - n) <= 1 && (n = t.width),
                    Math.abs(t.height - r) <= 1 && (r = t.height),
                    {x: e.offsetLeft, y: e.offsetTop, width: n, height: r}
                );
            }
            function x(e) {
                return 'html' === h(e)
                    ? e
                    : e.assignedSlot ||
                          e.parentNode ||
                          (a(e) ? e.host : null) ||
                          m(e);
            }
            function O(e) {
                return ['html', 'body', '#document'].indexOf(h(e)) >= 0
                    ? e.ownerDocument.body
                    : i(e) && y(e)
                      ? e
                      : O(x(e));
            }
            function j(e, t) {
                var n;
                void 0 === t && (t = []);
                var o = O(e),
                    i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = r(o),
                    s = i
                        ? [a].concat(a.visualViewport || [], y(o) ? o : [])
                        : o,
                    f = t.concat(s);
                return i ? f : f.concat(j(x(s)));
            }
            function E(e) {
                return ['table', 'td', 'th'].indexOf(h(e)) >= 0;
            }
            function D(e) {
                return i(e) && 'fixed' !== g(e).position
                    ? e.offsetParent
                    : null;
            }
            function A(e) {
                for (
                    var t = r(e), n = D(e);
                    n && E(n) && 'static' === g(n).position;

                )
                    n = D(n);
                return n &&
                    ('html' === h(n) ||
                        ('body' === h(n) && 'static' === g(n).position))
                    ? t
                    : n ||
                          (function (e) {
                              var t = /firefox/i.test(p());
                              if (
                                  /Trident/i.test(p()) &&
                                  i(e) &&
                                  'fixed' === g(e).position
                              )
                                  return null;
                              var n = x(e);
                              for (
                                  a(n) && (n = n.host);
                                  i(n) && ['html', 'body'].indexOf(h(n)) < 0;

                              ) {
                                  var r = g(n);
                                  if (
                                      'none' !== r.transform ||
                                      'none' !== r.perspective ||
                                      'paint' === r.contain ||
                                      -1 !==
                                          ['transform', 'perspective'].indexOf(
                                              r.willChange
                                          ) ||
                                      (t && 'filter' === r.willChange) ||
                                      (t && r.filter && 'none' !== r.filter)
                                  )
                                      return n;
                                  n = n.parentNode;
                              }
                              return null;
                          })(e) ||
                          t;
            }
            var k = 'top',
                L = 'bottom',
                W = 'right',
                M = 'left',
                P = 'auto',
                B = [k, L, W, M],
                H = 'start',
                R = 'end',
                T = 'clippingParents',
                q = 'viewport',
                C = 'popper',
                S = 'reference',
                V = B.reduce(function (e, t) {
                    return e.concat([t + '-' + H, t + '-' + R]);
                }, []),
                N = [].concat(B, [P]).reduce(function (e, t) {
                    return e.concat([t, t + '-' + H, t + '-' + R]);
                }, []),
                _ = [
                    'beforeRead',
                    'read',
                    'afterRead',
                    'beforeMain',
                    'main',
                    'afterMain',
                    'beforeWrite',
                    'write',
                    'afterWrite',
                ];
            function I(e) {
                var t = new Map(),
                    n = new Set(),
                    r = [];
                function o(e) {
                    n.add(e.name),
                        []
                            .concat(e.requires || [], e.requiresIfExists || [])
                            .forEach(function (e) {
                                if (!n.has(e)) {
                                    var r = t.get(e);
                                    r && o(r);
                                }
                            }),
                        r.push(e);
                }
                return (
                    e.forEach(function (e) {
                        t.set(e.name, e);
                    }),
                    e.forEach(function (e) {
                        n.has(e.name) || o(e);
                    }),
                    r
                );
            }
            var F = {placement: 'bottom', modifiers: [], strategy: 'absolute'};
            function U() {
                for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    t[n] = arguments[n];
                return !t.some(function (e) {
                    return !(e && 'function' == typeof e.getBoundingClientRect);
                });
            }
            function z(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    i = t.defaultOptions,
                    a = void 0 === i ? F : i;
                return function (e, t, n) {
                    void 0 === n && (n = a);
                    var i,
                        s,
                        f = {
                            placement: 'bottom',
                            orderedModifiers: [],
                            options: Object.assign({}, F, a),
                            modifiersData: {},
                            elements: {reference: e, popper: t},
                            attributes: {},
                            styles: {},
                        },
                        c = [],
                        p = !1,
                        u = {
                            state: f,
                            setOptions: function (n) {
                                var i =
                                    'function' == typeof n ? n(f.options) : n;
                                l(),
                                    (f.options = Object.assign(
                                        {},
                                        a,
                                        f.options,
                                        i
                                    )),
                                    (f.scrollParents = {
                                        reference: o(e)
                                            ? j(e)
                                            : e.contextElement
                                              ? j(e.contextElement)
                                              : [],
                                        popper: j(t),
                                    });
                                var s,
                                    p,
                                    d = (function (e) {
                                        var t = I(e);
                                        return _.reduce(function (e, n) {
                                            return e.concat(
                                                t.filter(function (e) {
                                                    return e.phase === n;
                                                })
                                            );
                                        }, []);
                                    })(
                                        ((s = [].concat(
                                            r,
                                            f.options.modifiers
                                        )),
                                        (p = s.reduce(function (e, t) {
                                            var n = e[t.name];
                                            return (
                                                (e[t.name] = n
                                                    ? Object.assign({}, n, t, {
                                                          options:
                                                              Object.assign(
                                                                  {},
                                                                  n.options,
                                                                  t.options
                                                              ),
                                                          data: Object.assign(
                                                              {},
                                                              n.data,
                                                              t.data
                                                          ),
                                                      })
                                                    : t),
                                                e
                                            );
                                        }, {})),
                                        Object.keys(p).map(function (e) {
                                            return p[e];
                                        }))
                                    );
                                return (
                                    (f.orderedModifiers = d.filter(
                                        function (e) {
                                            return e.enabled;
                                        }
                                    )),
                                    f.orderedModifiers.forEach(function (e) {
                                        var t = e.name,
                                            n = e.options,
                                            r = void 0 === n ? {} : n,
                                            o = e.effect;
                                        if ('function' == typeof o) {
                                            var i = o({
                                                state: f,
                                                name: t,
                                                instance: u,
                                                options: r,
                                            });
                                            c.push(i || function () {});
                                        }
                                    }),
                                    u.update()
                                );
                            },
                            forceUpdate: function () {
                                if (!p) {
                                    var e = f.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (U(t, n)) {
                                        (f.rects = {
                                            reference: b(
                                                t,
                                                A(n),
                                                'fixed' === f.options.strategy
                                            ),
                                            popper: w(n),
                                        }),
                                            (f.reset = !1),
                                            (f.placement = f.options.placement),
                                            f.orderedModifiers.forEach(
                                                function (e) {
                                                    return (f.modifiersData[
                                                        e.name
                                                    ] = Object.assign(
                                                        {},
                                                        e.data
                                                    ));
                                                }
                                            );
                                        for (
                                            var r = 0;
                                            r < f.orderedModifiers.length;
                                            r++
                                        )
                                            if (!0 !== f.reset) {
                                                var o = f.orderedModifiers[r],
                                                    i = o.fn,
                                                    a = o.options,
                                                    s = void 0 === a ? {} : a,
                                                    c = o.name;
                                                'function' == typeof i &&
                                                    (f =
                                                        i({
                                                            state: f,
                                                            options: s,
                                                            name: c,
                                                            instance: u,
                                                        }) || f);
                                            } else (f.reset = !1), (r = -1);
                                    }
                                }
                            },
                            update:
                                ((i = function () {
                                    return new Promise(function (e) {
                                        u.forceUpdate(), e(f);
                                    });
                                }),
                                function () {
                                    return (
                                        s ||
                                            (s = new Promise(function (e) {
                                                Promise.resolve().then(
                                                    function () {
                                                        (s = void 0), e(i());
                                                    }
                                                );
                                            })),
                                        s
                                    );
                                }),
                            destroy: function () {
                                l(), (p = !0);
                            },
                        };
                    if (!U(e, t)) return u;
                    function l() {
                        c.forEach(function (e) {
                            return e();
                        }),
                            (c = []);
                    }
                    return (
                        u.setOptions(n).then(function (e) {
                            !p && n.onFirstUpdate && n.onFirstUpdate(e);
                        }),
                        u
                    );
                };
            }
            var X = {passive: !0};
            function Y(e) {
                return e.split('-')[0];
            }
            function G(e) {
                return e.split('-')[1];
            }
            function J(e) {
                return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
            }
            function K(e) {
                var t,
                    n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? Y(o) : null,
                    a = o ? G(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    f = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case k:
                        t = {x: s, y: n.y - r.height};
                        break;
                    case L:
                        t = {x: s, y: n.y + n.height};
                        break;
                    case W:
                        t = {x: n.x + n.width, y: f};
                        break;
                    case M:
                        t = {x: n.x - r.width, y: f};
                        break;
                    default:
                        t = {x: n.x, y: n.y};
                }
                var c = i ? J(i) : null;
                if (null != c) {
                    var p = 'y' === c ? 'height' : 'width';
                    switch (a) {
                        case H:
                            t[c] = t[c] - (n[p] / 2 - r[p] / 2);
                            break;
                        case R:
                            t[c] = t[c] + (n[p] / 2 - r[p] / 2);
                    }
                }
                return t;
            }
            var Q = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'};
            function Z(e) {
                var t,
                    n = e.popper,
                    o = e.popperRect,
                    i = e.placement,
                    a = e.variation,
                    s = e.offsets,
                    f = e.position,
                    p = e.gpuAcceleration,
                    u = e.adaptive,
                    l = e.roundOffsets,
                    d = e.isFixed,
                    h = s.x,
                    v = void 0 === h ? 0 : h,
                    y = s.y,
                    b = void 0 === y ? 0 : y,
                    w = 'function' == typeof l ? l({x: v, y: b}) : {x: v, y: b};
                (v = w.x), (b = w.y);
                var x = s.hasOwnProperty('x'),
                    O = s.hasOwnProperty('y'),
                    j = M,
                    E = k,
                    D = window;
                if (u) {
                    var P = A(n),
                        B = 'clientHeight',
                        H = 'clientWidth';
                    P === r(n) &&
                        'static' !== g((P = m(n))).position &&
                        'absolute' === f &&
                        ((B = 'scrollHeight'), (H = 'scrollWidth')),
                        (i === k || ((i === M || i === W) && a === R)) &&
                            ((E = L),
                            (b -=
                                (d && P === D && D.visualViewport
                                    ? D.visualViewport.height
                                    : P[B]) - o.height),
                            (b *= p ? 1 : -1)),
                        (i !== M && ((i !== k && i !== L) || a !== R)) ||
                            ((j = W),
                            (v -=
                                (d && P === D && D.visualViewport
                                    ? D.visualViewport.width
                                    : P[H]) - o.width),
                            (v *= p ? 1 : -1));
                }
                var T,
                    q = Object.assign({position: f}, u && Q),
                    C =
                        !0 === l
                            ? (function (e, t) {
                                  var n = e.x,
                                      r = e.y,
                                      o = t.devicePixelRatio || 1;
                                  return {
                                      x: c(n * o) / o || 0,
                                      y: c(r * o) / o || 0,
                                  };
                              })({x: v, y: b}, r(n))
                            : {x: v, y: b};
                return (
                    (v = C.x),
                    (b = C.y),
                    p
                        ? Object.assign(
                              {},
                              q,
                              (((T = {})[E] = O ? '0' : ''),
                              (T[j] = x ? '0' : ''),
                              (T.transform =
                                  (D.devicePixelRatio || 1) <= 1
                                      ? 'translate(' + v + 'px, ' + b + 'px)'
                                      : 'translate3d(' +
                                        v +
                                        'px, ' +
                                        b +
                                        'px, 0)'),
                              T)
                          )
                        : Object.assign(
                              {},
                              q,
                              (((t = {})[E] = O ? b + 'px' : ''),
                              (t[j] = x ? v + 'px' : ''),
                              (t.transform = ''),
                              t)
                          )
                );
            }
            var $ = {
                left: 'right',
                right: 'left',
                bottom: 'top',
                top: 'bottom',
            };
            function ee(e) {
                return e.replace(/left|right|bottom|top/g, function (e) {
                    return $[e];
                });
            }
            var te = {start: 'end', end: 'start'};
            function ne(e) {
                return e.replace(/start|end/g, function (e) {
                    return te[e];
                });
            }
            function re(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && a(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host;
                    } while (r);
                }
                return !1;
            }
            function oe(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height,
                });
            }
            function ie(e, t, n) {
                return t === q
                    ? oe(
                          (function (e, t) {
                              var n = r(e),
                                  o = m(e),
                                  i = n.visualViewport,
                                  a = o.clientWidth,
                                  s = o.clientHeight,
                                  f = 0,
                                  c = 0;
                              if (i) {
                                  (a = i.width), (s = i.height);
                                  var p = u();
                                  (p || (!p && 'fixed' === t)) &&
                                      ((f = i.offsetLeft), (c = i.offsetTop));
                              }
                              return {width: a, height: s, x: f + v(e), y: c};
                          })(e, n)
                      )
                    : o(t)
                      ? (function (e, t) {
                            var n = l(e, !1, 'fixed' === t);
                            return (
                                (n.top = n.top + e.clientTop),
                                (n.left = n.left + e.clientLeft),
                                (n.bottom = n.top + e.clientHeight),
                                (n.right = n.left + e.clientWidth),
                                (n.width = e.clientWidth),
                                (n.height = e.clientHeight),
                                (n.x = n.left),
                                (n.y = n.top),
                                n
                            );
                        })(t, n)
                      : oe(
                            (function (e) {
                                var t,
                                    n = m(e),
                                    r = d(e),
                                    o =
                                        null == (t = e.ownerDocument)
                                            ? void 0
                                            : t.body,
                                    i = s(
                                        n.scrollWidth,
                                        n.clientWidth,
                                        o ? o.scrollWidth : 0,
                                        o ? o.clientWidth : 0
                                    ),
                                    a = s(
                                        n.scrollHeight,
                                        n.clientHeight,
                                        o ? o.scrollHeight : 0,
                                        o ? o.clientHeight : 0
                                    ),
                                    f = -r.scrollLeft + v(e),
                                    c = -r.scrollTop;
                                return (
                                    'rtl' === g(o || n).direction &&
                                        (f +=
                                            s(
                                                n.clientWidth,
                                                o ? o.clientWidth : 0
                                            ) - i),
                                    {width: i, height: a, x: f, y: c}
                                );
                            })(m(e))
                        );
            }
            function ae(e) {
                return Object.assign(
                    {},
                    {top: 0, right: 0, bottom: 0, left: 0},
                    e
                );
            }
            function se(e, t) {
                return t.reduce(function (t, n) {
                    return (t[n] = e), t;
                }, {});
            }
            function fe(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    a = void 0 === r ? e.placement : r,
                    c = n.strategy,
                    p = void 0 === c ? e.strategy : c,
                    u = n.boundary,
                    d = void 0 === u ? T : u,
                    v = n.rootBoundary,
                    y = void 0 === v ? q : v,
                    b = n.elementContext,
                    w = void 0 === b ? C : b,
                    O = n.altBoundary,
                    E = void 0 !== O && O,
                    D = n.padding,
                    M = void 0 === D ? 0 : D,
                    P = ae('number' != typeof M ? M : se(M, B)),
                    H = w === C ? S : C,
                    R = e.rects.popper,
                    V = e.elements[E ? H : w],
                    N = (function (e, t, n, r) {
                        var a =
                                'clippingParents' === t
                                    ? (function (e) {
                                          var t = j(x(e)),
                                              n =
                                                  ['absolute', 'fixed'].indexOf(
                                                      g(e).position
                                                  ) >= 0 && i(e)
                                                      ? A(e)
                                                      : e;
                                          return o(n)
                                              ? t.filter(function (e) {
                                                    return (
                                                        o(e) &&
                                                        re(e, n) &&
                                                        'body' !== h(e)
                                                    );
                                                })
                                              : [];
                                      })(e)
                                    : [].concat(t),
                            c = [].concat(a, [n]),
                            p = c[0],
                            u = c.reduce(
                                function (t, n) {
                                    var o = ie(e, n, r);
                                    return (
                                        (t.top = s(o.top, t.top)),
                                        (t.right = f(o.right, t.right)),
                                        (t.bottom = f(o.bottom, t.bottom)),
                                        (t.left = s(o.left, t.left)),
                                        t
                                    );
                                },
                                ie(e, p, r)
                            );
                        return (
                            (u.width = u.right - u.left),
                            (u.height = u.bottom - u.top),
                            (u.x = u.left),
                            (u.y = u.top),
                            u
                        );
                    })(
                        o(V) ? V : V.contextElement || m(e.elements.popper),
                        d,
                        y,
                        p
                    ),
                    _ = l(e.elements.reference),
                    I = K({
                        reference: _,
                        element: R,
                        strategy: 'absolute',
                        placement: a,
                    }),
                    F = oe(Object.assign({}, R, I)),
                    U = w === C ? F : _,
                    z = {
                        top: N.top - U.top + P.top,
                        bottom: U.bottom - N.bottom + P.bottom,
                        left: N.left - U.left + P.left,
                        right: U.right - N.right + P.right,
                    },
                    X = e.modifiersData.offset;
                if (w === C && X) {
                    var Y = X[a];
                    Object.keys(z).forEach(function (e) {
                        var t = [W, L].indexOf(e) >= 0 ? 1 : -1,
                            n = [k, L].indexOf(e) >= 0 ? 'y' : 'x';
                        z[e] += Y[n] * t;
                    });
                }
                return z;
            }
            function ce(e, t, n) {
                return s(e, f(t, n));
            }
            function pe(e, t, n) {
                return (
                    void 0 === n && (n = {x: 0, y: 0}),
                    {
                        top: e.top - t.height - n.y,
                        right: e.right - t.width + n.x,
                        bottom: e.bottom - t.height + n.y,
                        left: e.left - t.width - n.x,
                    }
                );
            }
            function ue(e) {
                return [k, W, L, M].some(function (t) {
                    return e[t] >= 0;
                });
            }
            var le = z({
                defaultModifiers: [
                    {
                        name: 'eventListeners',
                        enabled: !0,
                        phase: 'write',
                        fn: function () {},
                        effect: function (e) {
                            var t = e.state,
                                n = e.instance,
                                o = e.options,
                                i = o.scroll,
                                a = void 0 === i || i,
                                s = o.resize,
                                f = void 0 === s || s,
                                c = r(t.elements.popper),
                                p = [].concat(
                                    t.scrollParents.reference,
                                    t.scrollParents.popper
                                );
                            return (
                                a &&
                                    p.forEach(function (e) {
                                        e.addEventListener(
                                            'scroll',
                                            n.update,
                                            X
                                        );
                                    }),
                                f && c.addEventListener('resize', n.update, X),
                                function () {
                                    a &&
                                        p.forEach(function (e) {
                                            e.removeEventListener(
                                                'scroll',
                                                n.update,
                                                X
                                            );
                                        }),
                                        f &&
                                            c.removeEventListener(
                                                'resize',
                                                n.update,
                                                X
                                            );
                                }
                            );
                        },
                        data: {},
                    },
                    {
                        name: 'popperOffsets',
                        enabled: !0,
                        phase: 'read',
                        fn: function (e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = K({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: 'absolute',
                                placement: t.placement,
                            });
                        },
                        data: {},
                    },
                    {
                        name: 'computeStyles',
                        enabled: !0,
                        phase: 'beforeWrite',
                        fn: function (e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                s = n.roundOffsets,
                                f = void 0 === s || s,
                                c = {
                                    placement: Y(t.placement),
                                    variation: G(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o,
                                    isFixed: 'fixed' === t.options.strategy,
                                };
                            null != t.modifiersData.popperOffsets &&
                                (t.styles.popper = Object.assign(
                                    {},
                                    t.styles.popper,
                                    Z(
                                        Object.assign({}, c, {
                                            offsets:
                                                t.modifiersData.popperOffsets,
                                            position: t.options.strategy,
                                            adaptive: a,
                                            roundOffsets: f,
                                        })
                                    )
                                )),
                                null != t.modifiersData.arrow &&
                                    (t.styles.arrow = Object.assign(
                                        {},
                                        t.styles.arrow,
                                        Z(
                                            Object.assign({}, c, {
                                                offsets: t.modifiersData.arrow,
                                                position: 'absolute',
                                                adaptive: !1,
                                                roundOffsets: f,
                                            })
                                        )
                                    )),
                                (t.attributes.popper = Object.assign(
                                    {},
                                    t.attributes.popper,
                                    {'data-popper-placement': t.placement}
                                ));
                        },
                        data: {},
                    },
                    {
                        name: 'applyStyles',
                        enabled: !0,
                        phase: 'write',
                        fn: function (e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach(function (e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                i(o) &&
                                    h(o) &&
                                    (Object.assign(o.style, n),
                                    Object.keys(r).forEach(function (e) {
                                        var t = r[e];
                                        !1 === t
                                            ? o.removeAttribute(e)
                                            : o.setAttribute(
                                                  e,
                                                  !0 === t ? '' : t
                                              );
                                    }));
                            });
                        },
                        effect: function (e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: '0',
                                        top: '0',
                                        margin: '0',
                                    },
                                    arrow: {position: 'absolute'},
                                    reference: {},
                                };
                            return (
                                Object.assign(
                                    t.elements.popper.style,
                                    n.popper
                                ),
                                (t.styles = n),
                                t.elements.arrow &&
                                    Object.assign(
                                        t.elements.arrow.style,
                                        n.arrow
                                    ),
                                function () {
                                    Object.keys(t.elements).forEach(
                                        function (e) {
                                            var r = t.elements[e],
                                                o = t.attributes[e] || {},
                                                a = Object.keys(
                                                    t.styles.hasOwnProperty(e)
                                                        ? t.styles[e]
                                                        : n[e]
                                                ).reduce(function (e, t) {
                                                    return (e[t] = ''), e;
                                                }, {});
                                            i(r) &&
                                                h(r) &&
                                                (Object.assign(r.style, a),
                                                Object.keys(o).forEach(
                                                    function (e) {
                                                        r.removeAttribute(e);
                                                    }
                                                ));
                                        }
                                    );
                                }
                            );
                        },
                        requires: ['computeStyles'],
                    },
                    {
                        name: 'offset',
                        enabled: !0,
                        phase: 'main',
                        requires: ['popperOffsets'],
                        fn: function (e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = N.reduce(function (e, n) {
                                    return (
                                        (e[n] = (function (e, t, n) {
                                            var r = Y(e),
                                                o =
                                                    [M, k].indexOf(r) >= 0
                                                        ? -1
                                                        : 1,
                                                i =
                                                    'function' == typeof n
                                                        ? n(
                                                              Object.assign(
                                                                  {},
                                                                  t,
                                                                  {placement: e}
                                                              )
                                                          )
                                                        : n,
                                                a = i[0],
                                                s = i[1];
                                            return (
                                                (a = a || 0),
                                                (s = (s || 0) * o),
                                                [M, W].indexOf(r) >= 0
                                                    ? {x: s, y: a}
                                                    : {x: a, y: s}
                                            );
                                        })(n, t.rects, i)),
                                        e
                                    );
                                }, {}),
                                s = a[t.placement],
                                f = s.x,
                                c = s.y;
                            null != t.modifiersData.popperOffsets &&
                                ((t.modifiersData.popperOffsets.x += f),
                                (t.modifiersData.popperOffsets.y += c)),
                                (t.modifiersData[r] = a);
                        },
                    },
                    {
                        name: 'flip',
                        enabled: !0,
                        phase: 'main',
                        fn: function (e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (
                                    var o = n.mainAxis,
                                        i = void 0 === o || o,
                                        a = n.altAxis,
                                        s = void 0 === a || a,
                                        f = n.fallbackPlacements,
                                        c = n.padding,
                                        p = n.boundary,
                                        u = n.rootBoundary,
                                        l = n.altBoundary,
                                        d = n.flipVariations,
                                        h = void 0 === d || d,
                                        m = n.allowedAutoPlacements,
                                        v = t.options.placement,
                                        g = Y(v),
                                        y =
                                            f ||
                                            (g !== v && h
                                                ? (function (e) {
                                                      if (Y(e) === P) return [];
                                                      var t = ee(e);
                                                      return [ne(e), t, ne(t)];
                                                  })(v)
                                                : [ee(v)]),
                                        b = [v].concat(y).reduce(function (
                                            e,
                                            n
                                        ) {
                                            return e.concat(
                                                Y(n) === P
                                                    ? (function (e, t) {
                                                          void 0 === t &&
                                                              (t = {});
                                                          var n = t,
                                                              r = n.placement,
                                                              o = n.boundary,
                                                              i =
                                                                  n.rootBoundary,
                                                              a = n.padding,
                                                              s =
                                                                  n.flipVariations,
                                                              f =
                                                                  n.allowedAutoPlacements,
                                                              c =
                                                                  void 0 === f
                                                                      ? N
                                                                      : f,
                                                              p = G(r),
                                                              u = p
                                                                  ? s
                                                                      ? V
                                                                      : V.filter(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                return (
                                                                                    G(
                                                                                        e
                                                                                    ) ===
                                                                                    p
                                                                                );
                                                                            }
                                                                        )
                                                                  : B,
                                                              l = u.filter(
                                                                  function (e) {
                                                                      return (
                                                                          c.indexOf(
                                                                              e
                                                                          ) >= 0
                                                                      );
                                                                  }
                                                              );
                                                          0 === l.length &&
                                                              (l = u);
                                                          var d = l.reduce(
                                                              function (t, n) {
                                                                  return (
                                                                      (t[n] =
                                                                          fe(
                                                                              e,
                                                                              {
                                                                                  placement:
                                                                                      n,
                                                                                  boundary:
                                                                                      o,
                                                                                  rootBoundary:
                                                                                      i,
                                                                                  padding:
                                                                                      a,
                                                                              }
                                                                          )[
                                                                              Y(
                                                                                  n
                                                                              )
                                                                          ]),
                                                                      t
                                                                  );
                                                              },
                                                              {}
                                                          );
                                                          return Object.keys(
                                                              d
                                                          ).sort(
                                                              function (e, t) {
                                                                  return (
                                                                      d[e] -
                                                                      d[t]
                                                                  );
                                                              }
                                                          );
                                                      })(t, {
                                                          placement: n,
                                                          boundary: p,
                                                          rootBoundary: u,
                                                          padding: c,
                                                          flipVariations: h,
                                                          allowedAutoPlacements:
                                                              m,
                                                      })
                                                    : n
                                            );
                                        }, []),
                                        w = t.rects.reference,
                                        x = t.rects.popper,
                                        O = new Map(),
                                        j = !0,
                                        E = b[0],
                                        D = 0;
                                    D < b.length;
                                    D++
                                ) {
                                    var A = b[D],
                                        R = Y(A),
                                        T = G(A) === H,
                                        q = [k, L].indexOf(R) >= 0,
                                        C = q ? 'width' : 'height',
                                        S = fe(t, {
                                            placement: A,
                                            boundary: p,
                                            rootBoundary: u,
                                            altBoundary: l,
                                            padding: c,
                                        }),
                                        _ = q ? (T ? W : M) : T ? L : k;
                                    w[C] > x[C] && (_ = ee(_));
                                    var I = ee(_),
                                        F = [];
                                    if (
                                        (i && F.push(S[R] <= 0),
                                        s && F.push(S[_] <= 0, S[I] <= 0),
                                        F.every(function (e) {
                                            return e;
                                        }))
                                    ) {
                                        (E = A), (j = !1);
                                        break;
                                    }
                                    O.set(A, F);
                                }
                                if (j)
                                    for (
                                        var U = function (e) {
                                                var t = b.find(function (t) {
                                                    var n = O.get(t);
                                                    if (n)
                                                        return n
                                                            .slice(0, e)
                                                            .every(
                                                                function (e) {
                                                                    return e;
                                                                }
                                                            );
                                                });
                                                if (t) return (E = t), 'break';
                                            },
                                            z = h ? 3 : 1;
                                        z > 0 && 'break' !== U(z);
                                        z--
                                    );
                                t.placement !== E &&
                                    ((t.modifiersData[r]._skip = !0),
                                    (t.placement = E),
                                    (t.reset = !0));
                            }
                        },
                        requiresIfExists: ['offset'],
                        data: {_skip: !1},
                    },
                    {
                        name: 'preventOverflow',
                        enabled: !0,
                        phase: 'main',
                        fn: function (e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                i = void 0 === o || o,
                                a = n.altAxis,
                                c = void 0 !== a && a,
                                p = n.boundary,
                                u = n.rootBoundary,
                                l = n.altBoundary,
                                d = n.padding,
                                h = n.tether,
                                m = void 0 === h || h,
                                v = n.tetherOffset,
                                g = void 0 === v ? 0 : v,
                                y = fe(t, {
                                    boundary: p,
                                    rootBoundary: u,
                                    padding: d,
                                    altBoundary: l,
                                }),
                                b = Y(t.placement),
                                x = G(t.placement),
                                O = !x,
                                j = J(b),
                                E = 'x' === j ? 'y' : 'x',
                                D = t.modifiersData.popperOffsets,
                                P = t.rects.reference,
                                B = t.rects.popper,
                                R =
                                    'function' == typeof g
                                        ? g(
                                              Object.assign({}, t.rects, {
                                                  placement: t.placement,
                                              })
                                          )
                                        : g,
                                T =
                                    'number' == typeof R
                                        ? {mainAxis: R, altAxis: R}
                                        : Object.assign(
                                              {mainAxis: 0, altAxis: 0},
                                              R
                                          ),
                                q = t.modifiersData.offset
                                    ? t.modifiersData.offset[t.placement]
                                    : null,
                                C = {x: 0, y: 0};
                            if (D) {
                                if (i) {
                                    var S,
                                        V = 'y' === j ? k : M,
                                        N = 'y' === j ? L : W,
                                        _ = 'y' === j ? 'height' : 'width',
                                        I = D[j],
                                        F = I + y[V],
                                        U = I - y[N],
                                        z = m ? -B[_] / 2 : 0,
                                        X = x === H ? P[_] : B[_],
                                        K = x === H ? -B[_] : -P[_],
                                        Q = t.elements.arrow,
                                        Z =
                                            m && Q
                                                ? w(Q)
                                                : {width: 0, height: 0},
                                        $ = t.modifiersData['arrow#persistent']
                                            ? t.modifiersData[
                                                  'arrow#persistent'
                                              ].padding
                                            : {
                                                  top: 0,
                                                  right: 0,
                                                  bottom: 0,
                                                  left: 0,
                                              },
                                        ee = $[V],
                                        te = $[N],
                                        ne = ce(0, P[_], Z[_]),
                                        re = O
                                            ? P[_] / 2 -
                                              z -
                                              ne -
                                              ee -
                                              T.mainAxis
                                            : X - ne - ee - T.mainAxis,
                                        oe = O
                                            ? -P[_] / 2 +
                                              z +
                                              ne +
                                              te +
                                              T.mainAxis
                                            : K + ne + te + T.mainAxis,
                                        ie =
                                            t.elements.arrow &&
                                            A(t.elements.arrow),
                                        ae = ie
                                            ? 'y' === j
                                                ? ie.clientTop || 0
                                                : ie.clientLeft || 0
                                            : 0,
                                        se =
                                            null !=
                                            (S = null == q ? void 0 : q[j])
                                                ? S
                                                : 0,
                                        pe = I + oe - se,
                                        ue = ce(
                                            m ? f(F, I + re - se - ae) : F,
                                            I,
                                            m ? s(U, pe) : U
                                        );
                                    (D[j] = ue), (C[j] = ue - I);
                                }
                                if (c) {
                                    var le,
                                        de = 'x' === j ? k : M,
                                        he = 'x' === j ? L : W,
                                        me = D[E],
                                        ve = 'y' === E ? 'height' : 'width',
                                        ge = me + y[de],
                                        ye = me - y[he],
                                        be = -1 !== [k, M].indexOf(b),
                                        we =
                                            null !=
                                            (le = null == q ? void 0 : q[E])
                                                ? le
                                                : 0,
                                        xe = be
                                            ? ge
                                            : me -
                                              P[ve] -
                                              B[ve] -
                                              we +
                                              T.altAxis,
                                        Oe = be
                                            ? me +
                                              P[ve] +
                                              B[ve] -
                                              we -
                                              T.altAxis
                                            : ye,
                                        je =
                                            m && be
                                                ? (function (e, t, n) {
                                                      var r = ce(e, t, n);
                                                      return r > n ? n : r;
                                                  })(xe, me, Oe)
                                                : ce(
                                                      m ? xe : ge,
                                                      me,
                                                      m ? Oe : ye
                                                  );
                                    (D[E] = je), (C[E] = je - me);
                                }
                                t.modifiersData[r] = C;
                            }
                        },
                        requiresIfExists: ['offset'],
                    },
                    {
                        name: 'arrow',
                        enabled: !0,
                        phase: 'main',
                        fn: function (e) {
                            var t,
                                n = e.state,
                                r = e.name,
                                o = e.options,
                                i = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                s = Y(n.placement),
                                f = J(s),
                                c = [M, W].indexOf(s) >= 0 ? 'height' : 'width';
                            if (i && a) {
                                var p = (function (e, t) {
                                        return ae(
                                            'number' !=
                                                typeof (e =
                                                    'function' == typeof e
                                                        ? e(
                                                              Object.assign(
                                                                  {},
                                                                  t.rects,
                                                                  {
                                                                      placement:
                                                                          t.placement,
                                                                  }
                                                              )
                                                          )
                                                        : e)
                                                ? e
                                                : se(e, B)
                                        );
                                    })(o.padding, n),
                                    u = w(i),
                                    l = 'y' === f ? k : M,
                                    d = 'y' === f ? L : W,
                                    h =
                                        n.rects.reference[c] +
                                        n.rects.reference[f] -
                                        a[f] -
                                        n.rects.popper[c],
                                    m = a[f] - n.rects.reference[f],
                                    v = A(i),
                                    g = v
                                        ? 'y' === f
                                            ? v.clientHeight || 0
                                            : v.clientWidth || 0
                                        : 0,
                                    y = h / 2 - m / 2,
                                    b = p[l],
                                    x = g - u[c] - p[d],
                                    O = g / 2 - u[c] / 2 + y,
                                    j = ce(b, O, x),
                                    E = f;
                                n.modifiersData[r] =
                                    (((t = {})[E] = j),
                                    (t.centerOffset = j - O),
                                    t);
                            }
                        },
                        effect: function (e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? '[data-popper-arrow]' : n;
                            null != r &&
                                ('string' != typeof r ||
                                    (r = t.elements.popper.querySelector(r))) &&
                                re(t.elements.popper, r) &&
                                (t.elements.arrow = r);
                        },
                        requires: ['popperOffsets'],
                        requiresIfExists: ['preventOverflow'],
                    },
                    {
                        name: 'hide',
                        enabled: !0,
                        phase: 'main',
                        requiresIfExists: ['preventOverflow'],
                        fn: function (e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = fe(t, {elementContext: 'reference'}),
                                s = fe(t, {altBoundary: !0}),
                                f = pe(a, r),
                                c = pe(s, o, i),
                                p = ue(f),
                                u = ue(c);
                            (t.modifiersData[n] = {
                                referenceClippingOffsets: f,
                                popperEscapeOffsets: c,
                                isReferenceHidden: p,
                                hasPopperEscaped: u,
                            }),
                                (t.attributes.popper = Object.assign(
                                    {},
                                    t.attributes.popper,
                                    {
                                        'data-popper-reference-hidden': p,
                                        'data-popper-escaped': u,
                                    }
                                ));
                        },
                    },
                ],
            });
        },
    },
]);
