(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [951],
    {
        52742: (r, t, o) => {
            'use strict';
            o.d(t, {lk: () => la});
            var a = o(58457),
                e = o(65812),
                n = o.n(e),
                i = o(46455),
                l = o(78492),
                s = l.cQ.moment,
                d = o(59087),
                b = o(75804),
                c = o(7203),
                m = o(88580),
                p = o(71549),
                g = l.cQ.ListUtils.mapListValues,
                f = o(8713),
                u = o(16229);
            function v(r, t) {
                var o = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(r);
                    t &&
                        (a = a.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t)
                                .enumerable;
                        })),
                        o.push.apply(o, a);
                }
                return o;
            }
            function h(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? v(Object(o), !0).forEach(function (t) {
                              y(r, t, o[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                r,
                                Object.getOwnPropertyDescriptors(o)
                            )
                          : v(Object(o)).forEach(function (t) {
                                Object.defineProperty(
                                    r,
                                    t,
                                    Object.getOwnPropertyDescriptor(o, t)
                                );
                            });
                }
                return r;
            }
            function x(r) {
                return (
                    (x =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function (r) {
                                  return typeof r;
                              }
                            : function (r) {
                                  return r &&
                                      'function' == typeof Symbol &&
                                      r.constructor === Symbol &&
                                      r !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof r;
                              }),
                    x(r)
                );
            }
            function w(r, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(r, a.key, a);
                }
            }
            function y(r, t, o) {
                return (
                    t in r
                        ? Object.defineProperty(r, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (r[t] = o),
                    r
                );
            }
            function k(r, t) {
                return (
                    (function (r) {
                        if (Array.isArray(r)) return r;
                    })(r) ||
                    (function (r, t) {
                        var o =
                            null == r
                                ? null
                                : ('undefined' != typeof Symbol &&
                                      r[Symbol.iterator]) ||
                                  r['@@iterator'];
                        if (null != o) {
                            var a,
                                e,
                                n = [],
                                i = !0,
                                l = !1;
                            try {
                                for (
                                    o = o.call(r);
                                    !(i = (a = o.next()).done) &&
                                    (n.push(a.value), !t || n.length !== t);
                                    i = !0
                                );
                            } catch (r) {
                                (l = !0), (e = r);
                            } finally {
                                try {
                                    i || null == o.return || o.return();
                                } finally {
                                    if (l) throw e;
                                }
                            }
                            return n;
                        }
                    })(r, t) ||
                    j(r, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function z(r) {
                return (
                    (function (r) {
                        if (Array.isArray(r)) return A(r);
                    })(r) ||
                    (function (r) {
                        if (
                            ('undefined' != typeof Symbol &&
                                null != r[Symbol.iterator]) ||
                            null != r['@@iterator']
                        )
                            return Array.from(r);
                    })(r) ||
                    j(r) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function j(r, t) {
                if (r) {
                    if ('string' == typeof r) return A(r, t);
                    var o = Object.prototype.toString.call(r).slice(8, -1);
                    return (
                        'Object' === o &&
                            r.constructor &&
                            (o = r.constructor.name),
                        'Map' === o || 'Set' === o
                            ? Array.from(r)
                            : 'Arguments' === o ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    o
                                )
                              ? A(r, t)
                              : void 0
                    );
                }
            }
            function A(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var o = 0, a = new Array(t); o < t; o++) a[o] = r[o];
                return a;
            }
            var O = function () {},
                R = {},
                E = {},
                S = null,
                C = {mark: O, measure: O};
            try {
                'undefined' != typeof window && (R = window),
                    'undefined' != typeof document && (E = document),
                    'undefined' != typeof MutationObserver &&
                        (S = MutationObserver),
                    'undefined' != typeof performance && (C = performance);
            } catch (r) {}
            var B,
                N,
                P,
                L,
                I,
                M = (R.navigator || {}).userAgent,
                G = void 0 === M ? '' : M,
                Y = R,
                _ = E,
                T = S,
                W = C,
                q =
                    (Y.document,
                    !!_.documentElement &&
                        !!_.head &&
                        'function' == typeof _.addEventListener &&
                        'function' == typeof _.createElement),
                D = ~G.indexOf('MSIE') || ~G.indexOf('Trident/'),
                Z = '___FONT_AWESOME___',
                F = 16,
                U = 'fa',
                V = 'svg-inline--fa',
                H = 'data-fa-i2svg',
                X = 'data-fa-pseudo-element',
                Q = 'data-fa-pseudo-element-pending',
                K = 'data-prefix',
                $ = 'data-icon',
                J = 'fontawesome-i2svg',
                rr = 'async',
                tr = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
                or = (function () {
                    try {
                        return !0;
                    } catch (r) {
                        return !1;
                    }
                })(),
                ar = 'classic',
                er = 'sharp',
                nr = [ar, er];
            function ir(r) {
                return new Proxy(r, {
                    get: function (r, t) {
                        return t in r ? r[t] : r[ar];
                    },
                });
            }
            var lr = ir(
                    (y((B = {}), ar, {
                        fa: 'solid',
                        fas: 'solid',
                        'fa-solid': 'solid',
                        far: 'regular',
                        'fa-regular': 'regular',
                        fal: 'light',
                        'fa-light': 'light',
                        fat: 'thin',
                        'fa-thin': 'thin',
                        fad: 'duotone',
                        'fa-duotone': 'duotone',
                        fab: 'brands',
                        'fa-brands': 'brands',
                        fak: 'kit',
                        fakd: 'kit',
                        'fa-kit': 'kit',
                        'fa-kit-duotone': 'kit',
                    }),
                    y(B, er, {
                        fa: 'solid',
                        fass: 'solid',
                        'fa-solid': 'solid',
                        fasr: 'regular',
                        'fa-regular': 'regular',
                        fasl: 'light',
                        'fa-light': 'light',
                        fast: 'thin',
                        'fa-thin': 'thin',
                    }),
                    B)
                ),
                sr = ir(
                    (y((N = {}), ar, {
                        solid: 'fas',
                        regular: 'far',
                        light: 'fal',
                        thin: 'fat',
                        duotone: 'fad',
                        brands: 'fab',
                        kit: 'fak',
                    }),
                    y(N, er, {
                        solid: 'fass',
                        regular: 'fasr',
                        light: 'fasl',
                        thin: 'fast',
                    }),
                    N)
                ),
                dr = ir(
                    (y((P = {}), ar, {
                        fab: 'fa-brands',
                        fad: 'fa-duotone',
                        fak: 'fa-kit',
                        fal: 'fa-light',
                        far: 'fa-regular',
                        fas: 'fa-solid',
                        fat: 'fa-thin',
                    }),
                    y(P, er, {
                        fass: 'fa-solid',
                        fasr: 'fa-regular',
                        fasl: 'fa-light',
                        fast: 'fa-thin',
                    }),
                    P)
                ),
                br = ir(
                    (y((L = {}), ar, {
                        'fa-brands': 'fab',
                        'fa-duotone': 'fad',
                        'fa-kit': 'fak',
                        'fa-light': 'fal',
                        'fa-regular': 'far',
                        'fa-solid': 'fas',
                        'fa-thin': 'fat',
                    }),
                    y(L, er, {
                        'fa-solid': 'fass',
                        'fa-regular': 'fasr',
                        'fa-light': 'fasl',
                        'fa-thin': 'fast',
                    }),
                    L)
                ),
                cr = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
                mr = 'fa-layers-text',
                pr =
                    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
                gr = ir(
                    (y((I = {}), ar, {
                        900: 'fas',
                        400: 'far',
                        normal: 'far',
                        300: 'fal',
                        100: 'fat',
                    }),
                    y(I, er, {
                        900: 'fass',
                        400: 'fasr',
                        300: 'fasl',
                        100: 'fast',
                    }),
                    I)
                ),
                fr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ur = fr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                vr = [
                    'class',
                    'data-prefix',
                    'data-icon',
                    'data-fa-transform',
                    'data-fa-mask',
                ],
                hr = {
                    GROUP: 'duotone-group',
                    SWAP_OPACITY: 'swap-opacity',
                    PRIMARY: 'primary',
                    SECONDARY: 'secondary',
                },
                xr = new Set();
            Object.keys(sr[ar]).map(xr.add.bind(xr)),
                Object.keys(sr[er]).map(xr.add.bind(xr));
            var wr = []
                    .concat(nr, z(xr), [
                        '2xs',
                        'xs',
                        'sm',
                        'lg',
                        'xl',
                        '2xl',
                        'beat',
                        'border',
                        'fade',
                        'beat-fade',
                        'bounce',
                        'flip-both',
                        'flip-horizontal',
                        'flip-vertical',
                        'flip',
                        'fw',
                        'inverse',
                        'layers-counter',
                        'layers-text',
                        'layers',
                        'li',
                        'pull-left',
                        'pull-right',
                        'pulse',
                        'rotate-180',
                        'rotate-270',
                        'rotate-90',
                        'rotate-by',
                        'shake',
                        'spin-pulse',
                        'spin-reverse',
                        'spin',
                        'stack-1x',
                        'stack-2x',
                        'stack',
                        'ul',
                        hr.GROUP,
                        hr.SWAP_OPACITY,
                        hr.PRIMARY,
                        hr.SECONDARY,
                    ])
                    .concat(
                        fr.map(function (r) {
                            return ''.concat(r, 'x');
                        })
                    )
                    .concat(
                        ur.map(function (r) {
                            return 'w-'.concat(r);
                        })
                    ),
                yr = Y.FontAwesomeConfig || {};
            _ &&
                'function' == typeof _.querySelector &&
                [
                    ['data-family-prefix', 'familyPrefix'],
                    ['data-css-prefix', 'cssPrefix'],
                    ['data-family-default', 'familyDefault'],
                    ['data-style-default', 'styleDefault'],
                    ['data-replacement-class', 'replacementClass'],
                    ['data-auto-replace-svg', 'autoReplaceSvg'],
                    ['data-auto-add-css', 'autoAddCss'],
                    ['data-auto-a11y', 'autoA11y'],
                    ['data-search-pseudo-elements', 'searchPseudoElements'],
                    ['data-observe-mutations', 'observeMutations'],
                    ['data-mutate-approach', 'mutateApproach'],
                    ['data-keep-original-source', 'keepOriginalSource'],
                    ['data-measure-performance', 'measurePerformance'],
                    ['data-show-missing-icons', 'showMissingIcons'],
                ].forEach(function (r) {
                    var t = k(r, 2),
                        o = t[0],
                        a = t[1],
                        e = (function (r) {
                            return (
                                '' === r ||
                                ('false' !== r && ('true' === r || r))
                            );
                        })(
                            (function (r) {
                                var t = _.querySelector('script[' + r + ']');
                                if (t) return t.getAttribute(r);
                            })(o)
                        );
                    null != e && (yr[a] = e);
                });
            var kr = {
                styleDefault: 'solid',
                familyDefault: 'classic',
                cssPrefix: U,
                replacementClass: V,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: 'async',
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0,
            };
            yr.familyPrefix && (yr.cssPrefix = yr.familyPrefix);
            var zr = h(h({}, kr), yr);
            zr.autoReplaceSvg || (zr.observeMutations = !1);
            var jr = {};
            Object.keys(kr).forEach(function (r) {
                Object.defineProperty(jr, r, {
                    enumerable: !0,
                    set: function (t) {
                        (zr[r] = t),
                            Ar.forEach(function (r) {
                                return r(jr);
                            });
                    },
                    get: function () {
                        return zr[r];
                    },
                });
            }),
                Object.defineProperty(jr, 'familyPrefix', {
                    enumerable: !0,
                    set: function (r) {
                        (zr.cssPrefix = r),
                            Ar.forEach(function (r) {
                                return r(jr);
                            });
                    },
                    get: function () {
                        return zr.cssPrefix;
                    },
                }),
                (Y.FontAwesomeConfig = jr);
            var Ar = [],
                Or = F,
                Rr = {size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1},
                Er =
                    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            function Sr() {
                for (var r = 12, t = ''; r-- > 0; )
                    t += Er[(62 * Math.random()) | 0];
                return t;
            }
            function Cr(r) {
                for (var t = [], o = (r || []).length >>> 0; o--; ) t[o] = r[o];
                return t;
            }
            function Br(r) {
                return r.classList
                    ? Cr(r.classList)
                    : (r.getAttribute('class') || '')
                          .split(' ')
                          .filter(function (r) {
                              return r;
                          });
            }
            function Nr(r) {
                return ''
                    .concat(r)
                    .replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
            }
            function Pr(r) {
                return Object.keys(r || {}).reduce(function (t, o) {
                    return t + ''.concat(o, ': ').concat(r[o].trim(), ';');
                }, '');
            }
            function Lr(r) {
                return (
                    r.size !== Rr.size ||
                    r.x !== Rr.x ||
                    r.y !== Rr.y ||
                    r.rotate !== Rr.rotate ||
                    r.flipX ||
                    r.flipY
                );
            }
            var Ir =
                ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
            function Mr() {
                var r = U,
                    t = V,
                    o = jr.cssPrefix,
                    a = jr.replacementClass,
                    e = Ir;
                if (o !== r || a !== t) {
                    var n = new RegExp('\\.'.concat(r, '\\-'), 'g'),
                        i = new RegExp('\\--'.concat(r, '\\-'), 'g'),
                        l = new RegExp('\\.'.concat(t), 'g');
                    e = e
                        .replace(n, '.'.concat(o, '-'))
                        .replace(i, '--'.concat(o, '-'))
                        .replace(l, '.'.concat(a));
                }
                return e;
            }
            var Gr = !1;
            function Yr() {
                jr.autoAddCss &&
                    !Gr &&
                    ((function (r) {
                        if (r && q) {
                            var t = _.createElement('style');
                            t.setAttribute('type', 'text/css'),
                                (t.innerHTML = r);
                            for (
                                var o = _.head.childNodes,
                                    a = null,
                                    e = o.length - 1;
                                e > -1;
                                e--
                            ) {
                                var n = o[e],
                                    i = (n.tagName || '').toUpperCase();
                                ['STYLE', 'LINK'].indexOf(i) > -1 && (a = n);
                            }
                            _.head.insertBefore(t, a);
                        }
                    })(Mr()),
                    (Gr = !0));
            }
            var _r = {
                    mixout: function () {
                        return {dom: {css: Mr, insertCss: Yr}};
                    },
                    hooks: function () {
                        return {
                            beforeDOMElementCreation: function () {
                                Yr();
                            },
                            beforeI2svg: function () {
                                Yr();
                            },
                        };
                    },
                },
                Tr = Y || {};
            Tr[Z] || (Tr[Z] = {}),
                Tr[Z].styles || (Tr[Z].styles = {}),
                Tr[Z].hooks || (Tr[Z].hooks = {}),
                Tr[Z].shims || (Tr[Z].shims = []);
            var Wr = Tr[Z],
                qr = [],
                Dr = !1;
            function Zr(r) {
                var t = r.tag,
                    o = r.attributes,
                    a = void 0 === o ? {} : o,
                    e = r.children,
                    n = void 0 === e ? [] : e;
                return 'string' == typeof r
                    ? Nr(r)
                    : '<'
                          .concat(t, ' ')
                          .concat(
                              (function (r) {
                                  return Object.keys(r || {})
                                      .reduce(function (t, o) {
                                          return (
                                              t +
                                              ''
                                                  .concat(o, '="')
                                                  .concat(Nr(r[o]), '" ')
                                          );
                                      }, '')
                                      .trim();
                              })(a),
                              '>'
                          )
                          .concat(n.map(Zr).join(''), '</')
                          .concat(t, '>');
            }
            function Fr(r, t, o) {
                if (r && r[t] && r[t][o])
                    return {prefix: t, iconName: o, icon: r[t][o]};
            }
            q &&
                ((Dr = (
                    _.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
                ).test(_.readyState)) ||
                    _.addEventListener('DOMContentLoaded', function r() {
                        _.removeEventListener('DOMContentLoaded', r),
                            (Dr = 1),
                            qr.map(function (r) {
                                return r();
                            });
                    }));
            var Ur = function (r, t, o, a) {
                var e,
                    n,
                    i,
                    l = Object.keys(r),
                    s = l.length,
                    d =
                        void 0 !== a
                            ? (function (r, t) {
                                  return function (o, a, e, n) {
                                      return r.call(t, o, a, e, n);
                                  };
                              })(t, a)
                            : t;
                for (
                    void 0 === o
                        ? ((e = 1), (i = r[l[0]]))
                        : ((e = 0), (i = o));
                    e < s;
                    e++
                )
                    i = d(i, r[(n = l[e])], n, r);
                return i;
            };
            function Vr(r) {
                var t = (function (r) {
                    for (var t = [], o = 0, a = r.length; o < a; ) {
                        var e = r.charCodeAt(o++);
                        if (e >= 55296 && e <= 56319 && o < a) {
                            var n = r.charCodeAt(o++);
                            56320 == (64512 & n)
                                ? t.push(
                                      ((1023 & e) << 10) + (1023 & n) + 65536
                                  )
                                : (t.push(e), o--);
                        } else t.push(e);
                    }
                    return t;
                })(r);
                return 1 === t.length ? t[0].toString(16) : null;
            }
            function Hr(r) {
                return Object.keys(r).reduce(function (t, o) {
                    var a = r[o];
                    return a.icon ? (t[a.iconName] = a.icon) : (t[o] = a), t;
                }, {});
            }
            function Xr(r, t) {
                var o = (
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {}
                    ).skipHooks,
                    a = void 0 !== o && o,
                    e = Hr(t);
                'function' != typeof Wr.hooks.addPack || a
                    ? (Wr.styles[r] = h(h({}, Wr.styles[r] || {}), e))
                    : Wr.hooks.addPack(r, Hr(t)),
                    'fas' === r && Xr('fa', t);
            }
            var Qr,
                Kr,
                $r,
                Jr = Wr.styles,
                rt = Wr.shims,
                tt =
                    (y((Qr = {}), ar, Object.values(dr[ar])),
                    y(Qr, er, Object.values(dr[er])),
                    Qr),
                ot = null,
                at = {},
                et = {},
                nt = {},
                it = {},
                lt = {},
                st =
                    (y((Kr = {}), ar, Object.keys(lr[ar])),
                    y(Kr, er, Object.keys(lr[er])),
                    Kr);
            var dt,
                bt = function () {
                    var r = function (r) {
                        return Ur(
                            Jr,
                            function (t, o, a) {
                                return (t[a] = Ur(o, r, {})), t;
                            },
                            {}
                        );
                    };
                    (at = r(function (r, t, o) {
                        return (
                            t[3] && (r[t[3]] = o),
                            t[2] &&
                                t[2]
                                    .filter(function (r) {
                                        return 'number' == typeof r;
                                    })
                                    .forEach(function (t) {
                                        r[t.toString(16)] = o;
                                    }),
                            r
                        );
                    })),
                        (et = r(function (r, t, o) {
                            return (
                                (r[o] = o),
                                t[2] &&
                                    t[2]
                                        .filter(function (r) {
                                            return 'string' == typeof r;
                                        })
                                        .forEach(function (t) {
                                            r[t] = o;
                                        }),
                                r
                            );
                        })),
                        (lt = r(function (r, t, o) {
                            var a = t[2];
                            return (
                                (r[o] = o),
                                a.forEach(function (t) {
                                    r[t] = o;
                                }),
                                r
                            );
                        }));
                    var t = 'far' in Jr || jr.autoFetchSvg,
                        o = Ur(
                            rt,
                            function (r, o) {
                                var a = o[0],
                                    e = o[1],
                                    n = o[2];
                                return (
                                    'far' !== e || t || (e = 'fas'),
                                    'string' == typeof a &&
                                        (r.names[a] = {prefix: e, iconName: n}),
                                    'number' == typeof a &&
                                        (r.unicodes[a.toString(16)] = {
                                            prefix: e,
                                            iconName: n,
                                        }),
                                    r
                                );
                            },
                            {names: {}, unicodes: {}}
                        );
                    (nt = o.names),
                        (it = o.unicodes),
                        (ot = ut(jr.styleDefault, {family: jr.familyDefault}));
                };
            function ct(r, t) {
                return (at[r] || {})[t];
            }
            function mt(r, t) {
                return (lt[r] || {})[t];
            }
            function pt(r) {
                return nt[r] || {prefix: null, iconName: null};
            }
            function gt() {
                return ot;
            }
            (dt = function (r) {
                ot = ut(r.styleDefault, {family: jr.familyDefault});
            }),
                Ar.push(dt),
                bt();
            var ft = function () {
                return {prefix: null, iconName: null, rest: []};
            };
            function ut(r) {
                var t = (
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                    ).family,
                    o = void 0 === t ? ar : t,
                    a = lr[o][r],
                    e = sr[o][r] || sr[o][a],
                    n = r in Wr.styles ? r : null;
                return e || n || null;
            }
            var vt =
                (y(($r = {}), ar, Object.keys(dr[ar])),
                y($r, er, Object.keys(dr[er])),
                $r);
            function ht(r) {
                var t,
                    o = (
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                    ).skipLookups,
                    a = void 0 !== o && o,
                    e =
                        (y(
                            (t = {}),
                            ar,
                            ''.concat(jr.cssPrefix, '-').concat(ar)
                        ),
                        y(t, er, ''.concat(jr.cssPrefix, '-').concat(er)),
                        t),
                    n = null,
                    i = ar;
                (r.includes(e[ar]) ||
                    r.some(function (r) {
                        return vt[ar].includes(r);
                    })) &&
                    (i = ar),
                    (r.includes(e[er]) ||
                        r.some(function (r) {
                            return vt[er].includes(r);
                        })) &&
                        (i = er);
                var l = r.reduce(function (r, t) {
                    var o = (function (r, t) {
                        var o,
                            a = t.split('-'),
                            e = a[0],
                            n = a.slice(1).join('-');
                        return e !== r || '' === n || ((o = n), ~wr.indexOf(o))
                            ? null
                            : n;
                    })(jr.cssPrefix, t);
                    if (
                        (Jr[t]
                            ? ((t = tt[i].includes(t) ? br[i][t] : t),
                              (n = t),
                              (r.prefix = t))
                            : st[i].indexOf(t) > -1
                              ? ((n = t), (r.prefix = ut(t, {family: i})))
                              : o
                                ? (r.iconName = o)
                                : t !== jr.replacementClass &&
                                  t !== e[ar] &&
                                  t !== e[er] &&
                                  r.rest.push(t),
                        !a && r.prefix && r.iconName)
                    ) {
                        var l = 'fa' === n ? pt(r.iconName) : {},
                            s = mt(r.prefix, r.iconName);
                        l.prefix && (n = null),
                            (r.iconName = l.iconName || s || r.iconName),
                            (r.prefix = l.prefix || r.prefix),
                            'far' !== r.prefix ||
                                Jr.far ||
                                !Jr.fas ||
                                jr.autoFetchSvg ||
                                (r.prefix = 'fas');
                    }
                    return r;
                }, ft());
                return (
                    (r.includes('fa-brands') || r.includes('fab')) &&
                        (l.prefix = 'fab'),
                    (r.includes('fa-duotone') || r.includes('fad')) &&
                        (l.prefix = 'fad'),
                    l.prefix ||
                        i !== er ||
                        (!Jr.fass && !jr.autoFetchSvg) ||
                        ((l.prefix = 'fass'),
                        (l.iconName = mt(l.prefix, l.iconName) || l.iconName)),
                    ('fa' !== l.prefix && 'fa' !== n) ||
                        (l.prefix = gt() || 'fas'),
                    l
                );
            }
            var xt = (function () {
                    function r() {
                        !(function (r, t) {
                            if (!(r instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, r),
                            (this.definitions = {});
                    }
                    var t, o;
                    return (
                        (t = r),
                        (o = [
                            {
                                key: 'add',
                                value: function () {
                                    for (
                                        var r = this,
                                            t = arguments.length,
                                            o = new Array(t),
                                            a = 0;
                                        a < t;
                                        a++
                                    )
                                        o[a] = arguments[a];
                                    var e = o.reduce(this._pullDefinitions, {});
                                    Object.keys(e).forEach(function (t) {
                                        (r.definitions[t] = h(
                                            h({}, r.definitions[t] || {}),
                                            e[t]
                                        )),
                                            Xr(t, e[t]);
                                        var o = dr[ar][t];
                                        o && Xr(o, e[t]), bt();
                                    });
                                },
                            },
                            {
                                key: 'reset',
                                value: function () {
                                    this.definitions = {};
                                },
                            },
                            {
                                key: '_pullDefinitions',
                                value: function (r, t) {
                                    var o =
                                        t.prefix && t.iconName && t.icon
                                            ? {0: t}
                                            : t;
                                    return (
                                        Object.keys(o).map(function (t) {
                                            var a = o[t],
                                                e = a.prefix,
                                                n = a.iconName,
                                                i = a.icon,
                                                l = i[2];
                                            r[e] || (r[e] = {}),
                                                l.length > 0 &&
                                                    l.forEach(function (t) {
                                                        'string' == typeof t &&
                                                            (r[e][t] = i);
                                                    }),
                                                (r[e][n] = i);
                                        }),
                                        r
                                    );
                                },
                            },
                        ]),
                        o && w(t.prototype, o),
                        Object.defineProperty(t, 'prototype', {writable: !1}),
                        r
                    );
                })(),
                wt = [],
                yt = {},
                kt = {},
                zt = Object.keys(kt);
            function jt(r, t) {
                for (
                    var o = arguments.length,
                        a = new Array(o > 2 ? o - 2 : 0),
                        e = 2;
                    e < o;
                    e++
                )
                    a[e - 2] = arguments[e];
                return (
                    (yt[r] || []).forEach(function (r) {
                        t = r.apply(null, [t].concat(a));
                    }),
                    t
                );
            }
            function At(r) {
                for (
                    var t = arguments.length,
                        o = new Array(t > 1 ? t - 1 : 0),
                        a = 1;
                    a < t;
                    a++
                )
                    o[a - 1] = arguments[a];
                (yt[r] || []).forEach(function (r) {
                    r.apply(null, o);
                });
            }
            function Ot() {
                var r = arguments[0],
                    t = Array.prototype.slice.call(arguments, 1);
                return kt[r] ? kt[r].apply(null, t) : void 0;
            }
            function Rt(r) {
                'fa' === r.prefix && (r.prefix = 'fas');
                var t = r.iconName,
                    o = r.prefix || gt();
                if (t)
                    return (
                        (t = mt(o, t) || t),
                        Fr(Et.definitions, o, t) || Fr(Wr.styles, o, t)
                    );
            }
            var Et = new xt(),
                St = {
                    i2svg: function () {
                        var r =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                        return q
                            ? (At('beforeI2svg', r),
                              Ot('pseudoElements2svg', r),
                              Ot('i2svg', r))
                            : Promise.reject(
                                  'Operation requires a DOM of some kind.'
                              );
                    },
                    watch: function () {
                        var r,
                            t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                            o = t.autoReplaceSvgRoot;
                        !1 === jr.autoReplaceSvg && (jr.autoReplaceSvg = !0),
                            (jr.observeMutations = !0),
                            (r = function () {
                                Bt({autoReplaceSvgRoot: o}), At('watch', t);
                            }),
                            q && (Dr ? setTimeout(r, 0) : qr.push(r));
                    },
                },
                Ct = {
                    noAuto: function () {
                        (jr.autoReplaceSvg = !1),
                            (jr.observeMutations = !1),
                            At('noAuto');
                    },
                    config: jr,
                    dom: St,
                    parse: {
                        icon: function (r) {
                            if (null === r) return null;
                            if ('object' === x(r) && r.prefix && r.iconName)
                                return {
                                    prefix: r.prefix,
                                    iconName:
                                        mt(r.prefix, r.iconName) || r.iconName,
                                };
                            if (Array.isArray(r) && 2 === r.length) {
                                var t =
                                        0 === r[1].indexOf('fa-')
                                            ? r[1].slice(3)
                                            : r[1],
                                    o = ut(r[0]);
                                return {prefix: o, iconName: mt(o, t) || t};
                            }
                            if (
                                'string' == typeof r &&
                                (r.indexOf(''.concat(jr.cssPrefix, '-')) > -1 ||
                                    r.match(cr))
                            ) {
                                var a = ht(r.split(' '), {skipLookups: !0});
                                return {
                                    prefix: a.prefix || gt(),
                                    iconName:
                                        mt(a.prefix, a.iconName) || a.iconName,
                                };
                            }
                            if ('string' == typeof r) {
                                var e = gt();
                                return {prefix: e, iconName: mt(e, r) || r};
                            }
                        },
                    },
                    library: Et,
                    findIconDefinition: Rt,
                    toHtml: Zr,
                },
                Bt = function () {
                    var r = (
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {}
                        ).autoReplaceSvgRoot,
                        t = void 0 === r ? _ : r;
                    (Object.keys(Wr.styles).length > 0 || jr.autoFetchSvg) &&
                        q &&
                        jr.autoReplaceSvg &&
                        Ct.dom.i2svg({node: t});
                };
            function Nt(r, t) {
                return (
                    Object.defineProperty(r, 'abstract', {get: t}),
                    Object.defineProperty(r, 'html', {
                        get: function () {
                            return r.abstract.map(function (r) {
                                return Zr(r);
                            });
                        },
                    }),
                    Object.defineProperty(r, 'node', {
                        get: function () {
                            if (q) {
                                var t = _.createElement('div');
                                return (t.innerHTML = r.html), t.children;
                            }
                        },
                    }),
                    r
                );
            }
            function Pt(r) {
                var t = r.icons,
                    o = t.main,
                    a = t.mask,
                    e = r.prefix,
                    n = r.iconName,
                    i = r.transform,
                    l = r.symbol,
                    s = r.title,
                    d = r.maskId,
                    b = r.titleId,
                    c = r.extra,
                    m = r.watchable,
                    p = void 0 !== m && m,
                    g = a.found ? a : o,
                    f = g.width,
                    u = g.height,
                    v = 'fak' === e,
                    x = [
                        jr.replacementClass,
                        n ? ''.concat(jr.cssPrefix, '-').concat(n) : '',
                    ]
                        .filter(function (r) {
                            return -1 === c.classes.indexOf(r);
                        })
                        .filter(function (r) {
                            return '' !== r || !!r;
                        })
                        .concat(c.classes)
                        .join(' '),
                    w = {
                        children: [],
                        attributes: h(
                            h({}, c.attributes),
                            {},
                            {
                                'data-prefix': e,
                                'data-icon': n,
                                class: x,
                                role: c.attributes.role || 'img',
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 '.concat(f, ' ').concat(u),
                            }
                        ),
                    },
                    y =
                        v && !~c.classes.indexOf('fa-fw')
                            ? {width: ''.concat((f / u) * 16 * 0.0625, 'em')}
                            : {};
                p && (w.attributes[H] = ''),
                    s &&
                        (w.children.push({
                            tag: 'title',
                            attributes: {
                                id:
                                    w.attributes['aria-labelledby'] ||
                                    'title-'.concat(b || Sr()),
                            },
                            children: [s],
                        }),
                        delete w.attributes.title);
                var k = h(
                        h({}, w),
                        {},
                        {
                            prefix: e,
                            iconName: n,
                            main: o,
                            mask: a,
                            maskId: d,
                            transform: i,
                            symbol: l,
                            styles: h(h({}, y), c.styles),
                        }
                    ),
                    z =
                        a.found && o.found
                            ? Ot('generateAbstractMask', k) || {
                                  children: [],
                                  attributes: {},
                              }
                            : Ot('generateAbstractIcon', k) || {
                                  children: [],
                                  attributes: {},
                              },
                    j = z.children,
                    A = z.attributes;
                return (
                    (k.children = j),
                    (k.attributes = A),
                    l
                        ? (function (r) {
                              var t = r.prefix,
                                  o = r.iconName,
                                  a = r.children,
                                  e = r.attributes,
                                  n = r.symbol,
                                  i =
                                      !0 === n
                                          ? ''
                                                .concat(t, '-')
                                                .concat(jr.cssPrefix, '-')
                                                .concat(o)
                                          : n;
                              return [
                                  {
                                      tag: 'svg',
                                      attributes: {style: 'display: none;'},
                                      children: [
                                          {
                                              tag: 'symbol',
                                              attributes: h(
                                                  h({}, e),
                                                  {},
                                                  {id: i}
                                              ),
                                              children: a,
                                          },
                                      ],
                                  },
                              ];
                          })(k)
                        : (function (r) {
                              var t = r.children,
                                  o = r.main,
                                  a = r.mask,
                                  e = r.attributes,
                                  n = r.styles,
                                  i = r.transform;
                              if (Lr(i) && o.found && !a.found) {
                                  var l = {x: o.width / o.height / 2, y: 0.5};
                                  e.style = Pr(
                                      h(
                                          h({}, n),
                                          {},
                                          {
                                              'transform-origin': ''
                                                  .concat(l.x + i.x / 16, 'em ')
                                                  .concat(l.y + i.y / 16, 'em'),
                                          }
                                      )
                                  );
                              }
                              return [{tag: 'svg', attributes: e, children: t}];
                          })(k)
                );
            }
            function Lt(r) {
                var t = r.content,
                    o = r.width,
                    a = r.height,
                    e = r.transform,
                    n = r.title,
                    i = r.extra,
                    l = r.watchable,
                    s = void 0 !== l && l,
                    d = h(
                        h(h({}, i.attributes), n ? {title: n} : {}),
                        {},
                        {class: i.classes.join(' ')}
                    );
                s && (d[H] = '');
                var b = h({}, i.styles);
                Lr(e) &&
                    ((b.transform = (function (r) {
                        var t = r.transform,
                            o = r.width,
                            a = void 0 === o ? F : o,
                            e = r.height,
                            n = void 0 === e ? F : e,
                            i = r.startCentered,
                            l = void 0 !== i && i,
                            s = '';
                        return (
                            (s +=
                                l && D
                                    ? 'translate('
                                          .concat(t.x / Or - a / 2, 'em, ')
                                          .concat(t.y / Or - n / 2, 'em) ')
                                    : l
                                      ? 'translate(calc(-50% + '
                                            .concat(
                                                t.x / Or,
                                                'em), calc(-50% + '
                                            )
                                            .concat(t.y / Or, 'em)) ')
                                      : 'translate('
                                            .concat(t.x / Or, 'em, ')
                                            .concat(t.y / Or, 'em) ')),
                            (s += 'scale('
                                .concat(
                                    (t.size / Or) * (t.flipX ? -1 : 1),
                                    ', '
                                )
                                .concat(
                                    (t.size / Or) * (t.flipY ? -1 : 1),
                                    ') '
                                )) + 'rotate('.concat(t.rotate, 'deg) ')
                        );
                    })({transform: e, startCentered: !0, width: o, height: a})),
                    (b['-webkit-transform'] = b.transform));
                var c = Pr(b);
                c.length > 0 && (d.style = c);
                var m = [];
                return (
                    m.push({tag: 'span', attributes: d, children: [t]}),
                    n &&
                        m.push({
                            tag: 'span',
                            attributes: {class: 'sr-only'},
                            children: [n],
                        }),
                    m
                );
            }
            var It = Wr.styles;
            function Mt(r) {
                var t = r[0],
                    o = r[1],
                    a = k(r.slice(4), 1)[0];
                return {
                    found: !0,
                    width: t,
                    height: o,
                    icon: Array.isArray(a)
                        ? {
                              tag: 'g',
                              attributes: {
                                  class: ''
                                      .concat(jr.cssPrefix, '-')
                                      .concat(hr.GROUP),
                              },
                              children: [
                                  {
                                      tag: 'path',
                                      attributes: {
                                          class: ''
                                              .concat(jr.cssPrefix, '-')
                                              .concat(hr.SECONDARY),
                                          fill: 'currentColor',
                                          d: a[0],
                                      },
                                  },
                                  {
                                      tag: 'path',
                                      attributes: {
                                          class: ''
                                              .concat(jr.cssPrefix, '-')
                                              .concat(hr.PRIMARY),
                                          fill: 'currentColor',
                                          d: a[1],
                                      },
                                  },
                              ],
                          }
                        : {
                              tag: 'path',
                              attributes: {fill: 'currentColor', d: a},
                          },
                };
            }
            var Gt = {found: !1, width: 512, height: 512};
            function Yt(r, t) {
                var o = t;
                return (
                    'fa' === t && null !== jr.styleDefault && (t = gt()),
                    new Promise(function (a, e) {
                        if ((Ot('missingIconAbstract'), 'fa' === o)) {
                            var n = pt(r) || {};
                            (r = n.iconName || r), (t = n.prefix || t);
                        }
                        if (r && t && It[t] && It[t][r]) return a(Mt(It[t][r]));
                        !(function (r, t) {
                            or ||
                                jr.showMissingIcons ||
                                !r ||
                                console.error(
                                    'Icon with name "'
                                        .concat(r, '" and prefix "')
                                        .concat(t, '" is missing.')
                                );
                        })(r, t),
                            a(
                                h(
                                    h({}, Gt),
                                    {},
                                    {
                                        icon:
                                            (jr.showMissingIcons &&
                                                r &&
                                                Ot('missingIconAbstract')) ||
                                            {},
                                    }
                                )
                            );
                    })
                );
            }
            var _t = function () {},
                Tt =
                    jr.measurePerformance && W && W.mark && W.measure
                        ? W
                        : {mark: _t, measure: _t},
                Wt = 'FA "6.5.1"',
                qt = function (r) {
                    Tt.mark(''.concat(Wt, ' ').concat(r, ' ends')),
                        Tt.measure(
                            ''.concat(Wt, ' ').concat(r),
                            ''.concat(Wt, ' ').concat(r, ' begins'),
                            ''.concat(Wt, ' ').concat(r, ' ends')
                        );
                },
                Dt = {
                    begin: function (r) {
                        return (
                            Tt.mark(''.concat(Wt, ' ').concat(r, ' begins')),
                            function () {
                                return qt(r);
                            }
                        );
                    },
                    end: qt,
                },
                Zt = function () {};
            function Ft(r) {
                return (
                    'string' ==
                    typeof (r.getAttribute ? r.getAttribute(H) : null)
                );
            }
            function Ut(r) {
                return _.createElementNS('http://www.w3.org/2000/svg', r);
            }
            function Vt(r) {
                return _.createElement(r);
            }
            function Ht(r) {
                var t = (
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                    ).ceFn,
                    o = void 0 === t ? ('svg' === r.tag ? Ut : Vt) : t;
                if ('string' == typeof r) return _.createTextNode(r);
                var a = o(r.tag);
                return (
                    Object.keys(r.attributes || []).forEach(function (t) {
                        a.setAttribute(t, r.attributes[t]);
                    }),
                    (r.children || []).forEach(function (r) {
                        a.appendChild(Ht(r, {ceFn: o}));
                    }),
                    a
                );
            }
            var Xt = {
                replace: function (r) {
                    var t = r[0];
                    if (t.parentNode)
                        if (
                            (r[1].forEach(function (r) {
                                t.parentNode.insertBefore(Ht(r), t);
                            }),
                            null === t.getAttribute(H) && jr.keepOriginalSource)
                        ) {
                            var o = _.createComment(
                                (function (r) {
                                    var t = ' '.concat(r.outerHTML, ' ');
                                    return ''.concat(
                                        t,
                                        'Font Awesome fontawesome.com '
                                    );
                                })(t)
                            );
                            t.parentNode.replaceChild(o, t);
                        } else t.remove();
                },
                nest: function (r) {
                    var t = r[0],
                        o = r[1];
                    if (~Br(t).indexOf(jr.replacementClass))
                        return Xt.replace(r);
                    var a = new RegExp(''.concat(jr.cssPrefix, '-.*'));
                    if ((delete o[0].attributes.id, o[0].attributes.class)) {
                        var e = o[0].attributes.class.split(' ').reduce(
                            function (r, t) {
                                return (
                                    t === jr.replacementClass || t.match(a)
                                        ? r.toSvg.push(t)
                                        : r.toNode.push(t),
                                    r
                                );
                            },
                            {toNode: [], toSvg: []}
                        );
                        (o[0].attributes.class = e.toSvg.join(' ')),
                            0 === e.toNode.length
                                ? t.removeAttribute('class')
                                : t.setAttribute('class', e.toNode.join(' '));
                    }
                    var n = o
                        .map(function (r) {
                            return Zr(r);
                        })
                        .join('\n');
                    t.setAttribute(H, ''), (t.innerHTML = n);
                },
            };
            function Qt(r) {
                r();
            }
            function Kt(r, t) {
                var o = 'function' == typeof t ? t : Zt;
                if (0 === r.length) o();
                else {
                    var a = Qt;
                    jr.mutateApproach === rr &&
                        (a = Y.requestAnimationFrame || Qt),
                        a(function () {
                            var t =
                                    !0 === jr.autoReplaceSvg
                                        ? Xt.replace
                                        : Xt[jr.autoReplaceSvg] || Xt.replace,
                                a = Dt.begin('mutate');
                            r.map(t), a(), o();
                        });
                }
            }
            var $t = !1;
            function Jt() {
                $t = !0;
            }
            function ro() {
                $t = !1;
            }
            var to = null;
            function oo(r) {
                if (T && jr.observeMutations) {
                    var t = r.treeCallback,
                        o = void 0 === t ? Zt : t,
                        a = r.nodeCallback,
                        e = void 0 === a ? Zt : a,
                        n = r.pseudoElementsCallback,
                        i = void 0 === n ? Zt : n,
                        l = r.observeMutationsRoot,
                        s = void 0 === l ? _ : l;
                    (to = new T(function (r) {
                        if (!$t) {
                            var t = gt();
                            Cr(r).forEach(function (r) {
                                if (
                                    ('childList' === r.type &&
                                        r.addedNodes.length > 0 &&
                                        !Ft(r.addedNodes[0]) &&
                                        (jr.searchPseudoElements && i(r.target),
                                        o(r.target)),
                                    'attributes' === r.type &&
                                        r.target.parentNode &&
                                        jr.searchPseudoElements &&
                                        i(r.target.parentNode),
                                    'attributes' === r.type &&
                                        Ft(r.target) &&
                                        ~vr.indexOf(r.attributeName))
                                )
                                    if (
                                        'class' === r.attributeName &&
                                        (function (r) {
                                            var t = r.getAttribute
                                                    ? r.getAttribute(K)
                                                    : null,
                                                o = r.getAttribute
                                                    ? r.getAttribute($)
                                                    : null;
                                            return t && o;
                                        })(r.target)
                                    ) {
                                        var a = ht(Br(r.target)),
                                            n = a.prefix,
                                            l = a.iconName;
                                        r.target.setAttribute(K, n || t),
                                            l && r.target.setAttribute($, l);
                                    } else
                                        (s = r.target) &&
                                            s.classList &&
                                            s.classList.contains &&
                                            s.classList.contains(
                                                jr.replacementClass
                                            ) &&
                                            e(r.target);
                                var s;
                            });
                        }
                    })),
                        q &&
                            to.observe(s, {
                                childList: !0,
                                attributes: !0,
                                characterData: !0,
                                subtree: !0,
                            });
                }
            }
            function ao(r) {
                var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {styleParser: !0},
                    o = (function (r) {
                        var t,
                            o,
                            a = r.getAttribute('data-prefix'),
                            e = r.getAttribute('data-icon'),
                            n =
                                void 0 !== r.innerText
                                    ? r.innerText.trim()
                                    : '',
                            i = ht(Br(r));
                        return (
                            i.prefix || (i.prefix = gt()),
                            a && e && ((i.prefix = a), (i.iconName = e)),
                            (i.iconName && i.prefix) ||
                                (i.prefix &&
                                    n.length > 0 &&
                                    (i.iconName =
                                        ((t = i.prefix),
                                        (o = r.innerText),
                                        (et[t] || {})[o] ||
                                            ct(i.prefix, Vr(r.innerText)))),
                                !i.iconName &&
                                    jr.autoFetchSvg &&
                                    r.firstChild &&
                                    r.firstChild.nodeType === Node.TEXT_NODE &&
                                    (i.iconName = r.firstChild.data)),
                            i
                        );
                    })(r),
                    a = o.iconName,
                    e = o.prefix,
                    n = o.rest,
                    i = (function (r) {
                        var t = Cr(r.attributes).reduce(function (r, t) {
                                return (
                                    'class' !== r.name &&
                                        'style' !== r.name &&
                                        (r[t.name] = t.value),
                                    r
                                );
                            }, {}),
                            o = r.getAttribute('title'),
                            a = r.getAttribute('data-fa-title-id');
                        return (
                            jr.autoA11y &&
                                (o
                                    ? (t['aria-labelledby'] = ''
                                          .concat(
                                              jr.replacementClass,
                                              '-title-'
                                          )
                                          .concat(a || Sr()))
                                    : ((t['aria-hidden'] = 'true'),
                                      (t.focusable = 'false'))),
                            t
                        );
                    })(r),
                    l = jt('parseNodeAttributes', {}, r),
                    s = t.styleParser
                        ? (function (r) {
                              var t = r.getAttribute('style'),
                                  o = [];
                              return (
                                  t &&
                                      (o = t.split(';').reduce(function (r, t) {
                                          var o = t.split(':'),
                                              a = o[0],
                                              e = o.slice(1);
                                          return (
                                              a &&
                                                  e.length > 0 &&
                                                  (r[a] = e.join(':').trim()),
                                              r
                                          );
                                      }, {})),
                                  o
                              );
                          })(r)
                        : [];
                return h(
                    {
                        iconName: a,
                        title: r.getAttribute('title'),
                        titleId: r.getAttribute('data-fa-title-id'),
                        prefix: e,
                        transform: Rr,
                        mask: {iconName: null, prefix: null, rest: []},
                        maskId: null,
                        symbol: !1,
                        extra: {classes: n, styles: s, attributes: i},
                    },
                    l
                );
            }
            var eo = Wr.styles;
            function no(r) {
                var t =
                    'nest' === jr.autoReplaceSvg
                        ? ao(r, {styleParser: !1})
                        : ao(r);
                return ~t.extra.classes.indexOf(mr)
                    ? Ot('generateLayersText', r, t)
                    : Ot('generateSvgReplacementMutation', r, t);
            }
            var io = new Set();
            function lo(r) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                if (!q) return Promise.resolve();
                var o = _.documentElement.classList,
                    a = function (r) {
                        return o.add(''.concat(J, '-').concat(r));
                    },
                    e = function (r) {
                        return o.remove(''.concat(J, '-').concat(r));
                    },
                    n = jr.autoFetchSvg
                        ? io
                        : nr
                              .map(function (r) {
                                  return 'fa-'.concat(r);
                              })
                              .concat(Object.keys(eo));
                n.includes('fa') || n.push('fa');
                var i = ['.'.concat(mr, ':not([').concat(H, '])')]
                    .concat(
                        n.map(function (r) {
                            return '.'.concat(r, ':not([').concat(H, '])');
                        })
                    )
                    .join(', ');
                if (0 === i.length) return Promise.resolve();
                var l = [];
                try {
                    l = Cr(r.querySelectorAll(i));
                } catch (r) {}
                if (!(l.length > 0)) return Promise.resolve();
                a('pending'), e('complete');
                var s = Dt.begin('onTree'),
                    d = l.reduce(function (r, t) {
                        try {
                            var o = no(t);
                            o && r.push(o);
                        } catch (r) {
                            or ||
                                ('MissingIcon' === r.name && console.error(r));
                        }
                        return r;
                    }, []);
                return new Promise(function (r, o) {
                    Promise.all(d)
                        .then(function (o) {
                            Kt(o, function () {
                                a('active'),
                                    a('complete'),
                                    e('pending'),
                                    'function' == typeof t && t(),
                                    s(),
                                    r();
                            });
                        })
                        .catch(function (r) {
                            s(), o(r);
                        });
                });
            }
            function so(r) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                no(r).then(function (r) {
                    r && Kt([r], t);
                });
            }
            nr.map(function (r) {
                io.add('fa-'.concat(r));
            }),
                Object.keys(lr[ar]).map(io.add.bind(io)),
                Object.keys(lr[er]).map(io.add.bind(io)),
                (io = z(io));
            var bo = function (r) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        o = t.transform,
                        a = void 0 === o ? Rr : o,
                        e = t.symbol,
                        n = void 0 !== e && e,
                        i = t.mask,
                        l = void 0 === i ? null : i,
                        s = t.maskId,
                        d = void 0 === s ? null : s,
                        b = t.title,
                        c = void 0 === b ? null : b,
                        m = t.titleId,
                        p = void 0 === m ? null : m,
                        g = t.classes,
                        f = void 0 === g ? [] : g,
                        u = t.attributes,
                        v = void 0 === u ? {} : u,
                        x = t.styles,
                        w = void 0 === x ? {} : x;
                    if (r) {
                        var y = r.prefix,
                            k = r.iconName,
                            z = r.icon;
                        return Nt(h({type: 'icon'}, r), function () {
                            return (
                                At('beforeDOMElementCreation', {
                                    iconDefinition: r,
                                    params: t,
                                }),
                                jr.autoA11y &&
                                    (c
                                        ? (v['aria-labelledby'] = ''
                                              .concat(
                                                  jr.replacementClass,
                                                  '-title-'
                                              )
                                              .concat(p || Sr()))
                                        : ((v['aria-hidden'] = 'true'),
                                          (v.focusable = 'false'))),
                                Pt({
                                    icons: {
                                        main: Mt(z),
                                        mask: l
                                            ? Mt(l.icon)
                                            : {
                                                  found: !1,
                                                  width: null,
                                                  height: null,
                                                  icon: {},
                                              },
                                    },
                                    prefix: y,
                                    iconName: k,
                                    transform: h(h({}, Rr), a),
                                    symbol: n,
                                    title: c,
                                    maskId: d,
                                    titleId: p,
                                    extra: {
                                        attributes: v,
                                        styles: w,
                                        classes: f,
                                    },
                                })
                            );
                        });
                    }
                },
                co = {
                    mixout: function () {
                        return {
                            icon:
                                ((r = bo),
                                function (t) {
                                    var o =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {},
                                        a = (t || {}).icon ? t : Rt(t || {}),
                                        e = o.mask;
                                    return (
                                        e &&
                                            (e = (e || {}).icon
                                                ? e
                                                : Rt(e || {})),
                                        r(a, h(h({}, o), {}, {mask: e}))
                                    );
                                }),
                        };
                        var r;
                    },
                    hooks: function () {
                        return {
                            mutationObserverCallbacks: function (r) {
                                return (
                                    (r.treeCallback = lo),
                                    (r.nodeCallback = so),
                                    r
                                );
                            },
                        };
                    },
                    provides: function (r) {
                        (r.i2svg = function (r) {
                            var t = r.node,
                                o = void 0 === t ? _ : t,
                                a = r.callback;
                            return lo(o, void 0 === a ? function () {} : a);
                        }),
                            (r.generateSvgReplacementMutation = function (
                                r,
                                t
                            ) {
                                var o = t.iconName,
                                    a = t.title,
                                    e = t.titleId,
                                    n = t.prefix,
                                    i = t.transform,
                                    l = t.symbol,
                                    s = t.mask,
                                    d = t.maskId,
                                    b = t.extra;
                                return new Promise(function (t, c) {
                                    Promise.all([
                                        Yt(o, n),
                                        s.iconName
                                            ? Yt(s.iconName, s.prefix)
                                            : Promise.resolve({
                                                  found: !1,
                                                  width: 512,
                                                  height: 512,
                                                  icon: {},
                                              }),
                                    ])
                                        .then(function (s) {
                                            var c = k(s, 2),
                                                m = c[0],
                                                p = c[1];
                                            t([
                                                r,
                                                Pt({
                                                    icons: {main: m, mask: p},
                                                    prefix: n,
                                                    iconName: o,
                                                    transform: i,
                                                    symbol: l,
                                                    maskId: d,
                                                    title: a,
                                                    titleId: e,
                                                    extra: b,
                                                    watchable: !0,
                                                }),
                                            ]);
                                        })
                                        .catch(c);
                                });
                            }),
                            (r.generateAbstractIcon = function (r) {
                                var t,
                                    o = r.children,
                                    a = r.attributes,
                                    e = r.main,
                                    n = r.transform,
                                    i = Pr(r.styles);
                                return (
                                    i.length > 0 && (a.style = i),
                                    Lr(n) &&
                                        (t = Ot(
                                            'generateAbstractTransformGrouping',
                                            {
                                                main: e,
                                                transform: n,
                                                containerWidth: e.width,
                                                iconWidth: e.width,
                                            }
                                        )),
                                    o.push(t || e.icon),
                                    {children: o, attributes: a}
                                );
                            });
                    },
                },
                mo = {
                    mixout: function () {
                        return {
                            layer: function (r) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {},
                                    o = t.classes,
                                    a = void 0 === o ? [] : o;
                                return Nt({type: 'layer'}, function () {
                                    At('beforeDOMElementCreation', {
                                        assembler: r,
                                        params: t,
                                    });
                                    var o = [];
                                    return (
                                        r(function (r) {
                                            Array.isArray(r)
                                                ? r.map(function (r) {
                                                      o = o.concat(r.abstract);
                                                  })
                                                : (o = o.concat(r.abstract));
                                        }),
                                        [
                                            {
                                                tag: 'span',
                                                attributes: {
                                                    class: [
                                                        ''.concat(
                                                            jr.cssPrefix,
                                                            '-layers'
                                                        ),
                                                    ]
                                                        .concat(z(a))
                                                        .join(' '),
                                                },
                                                children: o,
                                            },
                                        ]
                                    );
                                });
                            },
                        };
                    },
                },
                po = {
                    mixout: function () {
                        return {
                            counter: function (r) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {},
                                    o = t.title,
                                    a = void 0 === o ? null : o,
                                    e = t.classes,
                                    n = void 0 === e ? [] : e,
                                    i = t.attributes,
                                    l = void 0 === i ? {} : i,
                                    s = t.styles,
                                    d = void 0 === s ? {} : s;
                                return Nt(
                                    {type: 'counter', content: r},
                                    function () {
                                        return (
                                            At('beforeDOMElementCreation', {
                                                content: r,
                                                params: t,
                                            }),
                                            (function (r) {
                                                var t = r.content,
                                                    o = r.title,
                                                    a = r.extra,
                                                    e = h(
                                                        h(
                                                            h({}, a.attributes),
                                                            o ? {title: o} : {}
                                                        ),
                                                        {},
                                                        {
                                                            class: a.classes.join(
                                                                ' '
                                                            ),
                                                        }
                                                    ),
                                                    n = Pr(a.styles);
                                                n.length > 0 && (e.style = n);
                                                var i = [];
                                                return (
                                                    i.push({
                                                        tag: 'span',
                                                        attributes: e,
                                                        children: [t],
                                                    }),
                                                    o &&
                                                        i.push({
                                                            tag: 'span',
                                                            attributes: {
                                                                class: 'sr-only',
                                                            },
                                                            children: [o],
                                                        }),
                                                    i
                                                );
                                            })({
                                                content: r.toString(),
                                                title: a,
                                                extra: {
                                                    attributes: l,
                                                    styles: d,
                                                    classes: [
                                                        ''.concat(
                                                            jr.cssPrefix,
                                                            '-layers-counter'
                                                        ),
                                                    ].concat(z(n)),
                                                },
                                            })
                                        );
                                    }
                                );
                            },
                        };
                    },
                },
                go = {
                    mixout: function () {
                        return {
                            text: function (r) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {},
                                    o = t.transform,
                                    a = void 0 === o ? Rr : o,
                                    e = t.title,
                                    n = void 0 === e ? null : e,
                                    i = t.classes,
                                    l = void 0 === i ? [] : i,
                                    s = t.attributes,
                                    d = void 0 === s ? {} : s,
                                    b = t.styles,
                                    c = void 0 === b ? {} : b;
                                return Nt(
                                    {type: 'text', content: r},
                                    function () {
                                        return (
                                            At('beforeDOMElementCreation', {
                                                content: r,
                                                params: t,
                                            }),
                                            Lt({
                                                content: r,
                                                transform: h(h({}, Rr), a),
                                                title: n,
                                                extra: {
                                                    attributes: d,
                                                    styles: c,
                                                    classes: [
                                                        ''.concat(
                                                            jr.cssPrefix,
                                                            '-layers-text'
                                                        ),
                                                    ].concat(z(l)),
                                                },
                                            })
                                        );
                                    }
                                );
                            },
                        };
                    },
                    provides: function (r) {
                        r.generateLayersText = function (r, t) {
                            var o = t.title,
                                a = t.transform,
                                e = t.extra,
                                n = null,
                                i = null;
                            if (D) {
                                var l = parseInt(
                                        getComputedStyle(r).fontSize,
                                        10
                                    ),
                                    s = r.getBoundingClientRect();
                                (n = s.width / l), (i = s.height / l);
                            }
                            return (
                                jr.autoA11y &&
                                    !o &&
                                    (e.attributes['aria-hidden'] = 'true'),
                                Promise.resolve([
                                    r,
                                    Lt({
                                        content: r.innerHTML,
                                        width: n,
                                        height: i,
                                        transform: a,
                                        title: o,
                                        extra: e,
                                        watchable: !0,
                                    }),
                                ])
                            );
                        };
                    },
                },
                fo = new RegExp('"', 'ug'),
                uo = [1105920, 1112319];
            function vo(r, t) {
                var o = ''.concat(Q).concat(t.replace(':', '-'));
                return new Promise(function (a, e) {
                    if (null !== r.getAttribute(o)) return a();
                    var n,
                        i,
                        l,
                        s = Cr(r.children).filter(function (r) {
                            return r.getAttribute(X) === t;
                        })[0],
                        d = Y.getComputedStyle(r, t),
                        b = d.getPropertyValue('font-family').match(pr),
                        c = d.getPropertyValue('font-weight'),
                        m = d.getPropertyValue('content');
                    if (s && !b) return r.removeChild(s), a();
                    if (b && 'none' !== m && '' !== m) {
                        var p = d.getPropertyValue('content'),
                            g = ~['Sharp'].indexOf(b[2]) ? er : ar,
                            f = ~[
                                'Solid',
                                'Regular',
                                'Light',
                                'Thin',
                                'Duotone',
                                'Brands',
                                'Kit',
                            ].indexOf(b[2])
                                ? sr[g][b[2].toLowerCase()]
                                : gr[g][c],
                            u = (function (r) {
                                var t,
                                    o,
                                    a,
                                    e,
                                    n = r.replace(fo, ''),
                                    i =
                                        (0,
                                        (a = (t = n).length),
                                        (e = t.charCodeAt(0)) >= 55296 &&
                                        e <= 56319 &&
                                        a > 1 &&
                                        (o = t.charCodeAt(1)) >= 56320 &&
                                        o <= 57343
                                            ? 1024 * (e - 55296) +
                                              o -
                                              56320 +
                                              65536
                                            : e),
                                    l = i >= uo[0] && i <= uo[1],
                                    s = 2 === n.length && n[0] === n[1];
                                return {
                                    value: Vr(s ? n[0] : n),
                                    isSecondary: l || s,
                                };
                            })(p),
                            v = u.value,
                            x = u.isSecondary,
                            w = b[0].startsWith('FontAwesome'),
                            y = ct(f, v),
                            k = y;
                        if (w) {
                            var z =
                                ((i = it[(n = v)]),
                                (l = ct('fas', n)),
                                i ||
                                    (l
                                        ? {prefix: 'fas', iconName: l}
                                        : null) || {
                                        prefix: null,
                                        iconName: null,
                                    });
                            z.iconName &&
                                z.prefix &&
                                ((y = z.iconName), (f = z.prefix));
                        }
                        if (
                            !y ||
                            x ||
                            (s &&
                                s.getAttribute(K) === f &&
                                s.getAttribute($) === k)
                        )
                            a();
                        else {
                            r.setAttribute(o, k), s && r.removeChild(s);
                            var j = {
                                    iconName: null,
                                    title: null,
                                    titleId: null,
                                    prefix: null,
                                    transform: Rr,
                                    symbol: !1,
                                    mask: {
                                        iconName: null,
                                        prefix: null,
                                        rest: [],
                                    },
                                    maskId: null,
                                    extra: {
                                        classes: [],
                                        styles: {},
                                        attributes: {},
                                    },
                                },
                                A = j.extra;
                            (A.attributes[X] = t),
                                Yt(y, f)
                                    .then(function (e) {
                                        var n = Pt(
                                                h(
                                                    h({}, j),
                                                    {},
                                                    {
                                                        icons: {
                                                            main: e,
                                                            mask: ft(),
                                                        },
                                                        prefix: f,
                                                        iconName: k,
                                                        extra: A,
                                                        watchable: !0,
                                                    }
                                                )
                                            ),
                                            i = _.createElementNS(
                                                'http://www.w3.org/2000/svg',
                                                'svg'
                                            );
                                        '::before' === t
                                            ? r.insertBefore(i, r.firstChild)
                                            : r.appendChild(i),
                                            (i.outerHTML = n
                                                .map(function (r) {
                                                    return Zr(r);
                                                })
                                                .join('\n')),
                                            r.removeAttribute(o),
                                            a();
                                    })
                                    .catch(e);
                        }
                    } else a();
                });
            }
            function ho(r) {
                return Promise.all([vo(r, '::before'), vo(r, '::after')]);
            }
            function xo(r) {
                return !(
                    r.parentNode === document.head ||
                    ~tr.indexOf(r.tagName.toUpperCase()) ||
                    r.getAttribute(X) ||
                    (r.parentNode && 'svg' === r.parentNode.tagName)
                );
            }
            function wo(r) {
                if (q)
                    return new Promise(function (t, o) {
                        var a = Cr(r.querySelectorAll('*')).filter(xo).map(ho),
                            e = Dt.begin('searchPseudoElements');
                        Jt(),
                            Promise.all(a)
                                .then(function () {
                                    e(), ro(), t();
                                })
                                .catch(function () {
                                    e(), ro(), o();
                                });
                    });
            }
            var yo = !1,
                ko = function (r) {
                    return r
                        .toLowerCase()
                        .split(' ')
                        .reduce(
                            function (r, t) {
                                var o = t.toLowerCase().split('-'),
                                    a = o[0],
                                    e = o.slice(1).join('-');
                                if (a && 'h' === e) return (r.flipX = !0), r;
                                if (a && 'v' === e) return (r.flipY = !0), r;
                                if (((e = parseFloat(e)), isNaN(e))) return r;
                                switch (a) {
                                    case 'grow':
                                        r.size = r.size + e;
                                        break;
                                    case 'shrink':
                                        r.size = r.size - e;
                                        break;
                                    case 'left':
                                        r.x = r.x - e;
                                        break;
                                    case 'right':
                                        r.x = r.x + e;
                                        break;
                                    case 'up':
                                        r.y = r.y - e;
                                        break;
                                    case 'down':
                                        r.y = r.y + e;
                                        break;
                                    case 'rotate':
                                        r.rotate = r.rotate + e;
                                }
                                return r;
                            },
                            {
                                size: 16,
                                x: 0,
                                y: 0,
                                flipX: !1,
                                flipY: !1,
                                rotate: 0,
                            }
                        );
                },
                zo = {
                    mixout: function () {
                        return {
                            parse: {
                                transform: function (r) {
                                    return ko(r);
                                },
                            },
                        };
                    },
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (r, t) {
                                var o = t.getAttribute('data-fa-transform');
                                return o && (r.transform = ko(o)), r;
                            },
                        };
                    },
                    provides: function (r) {
                        r.generateAbstractTransformGrouping = function (r) {
                            var t = r.main,
                                o = r.transform,
                                a = r.containerWidth,
                                e = r.iconWidth,
                                n = {
                                    transform: 'translate('.concat(
                                        a / 2,
                                        ' 256)'
                                    ),
                                },
                                i = 'translate('
                                    .concat(32 * o.x, ', ')
                                    .concat(32 * o.y, ') '),
                                l = 'scale('
                                    .concat(
                                        (o.size / 16) * (o.flipX ? -1 : 1),
                                        ', '
                                    )
                                    .concat(
                                        (o.size / 16) * (o.flipY ? -1 : 1),
                                        ') '
                                    ),
                                s = 'rotate('.concat(o.rotate, ' 0 0)'),
                                d = {
                                    outer: n,
                                    inner: {
                                        transform: ''
                                            .concat(i, ' ')
                                            .concat(l, ' ')
                                            .concat(s),
                                    },
                                    path: {
                                        transform: 'translate('.concat(
                                            (e / 2) * -1,
                                            ' -256)'
                                        ),
                                    },
                                };
                            return {
                                tag: 'g',
                                attributes: h({}, d.outer),
                                children: [
                                    {
                                        tag: 'g',
                                        attributes: h({}, d.inner),
                                        children: [
                                            {
                                                tag: t.icon.tag,
                                                children: t.icon.children,
                                                attributes: h(
                                                    h({}, t.icon.attributes),
                                                    d.path
                                                ),
                                            },
                                        ],
                                    },
                                ],
                            };
                        };
                    },
                },
                jo = {x: 0, y: 0, width: '100%', height: '100%'};
            function Ao(r) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return (
                    r.attributes &&
                        (r.attributes.fill || t) &&
                        (r.attributes.fill = 'black'),
                    r
                );
            }
            var Oo,
                Ro = {
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (r, t) {
                                var o = t.getAttribute('data-fa-mask'),
                                    a = o
                                        ? ht(
                                              o.split(' ').map(function (r) {
                                                  return r.trim();
                                              })
                                          )
                                        : ft();
                                return (
                                    a.prefix || (a.prefix = gt()),
                                    (r.mask = a),
                                    (r.maskId =
                                        t.getAttribute('data-fa-mask-id')),
                                    r
                                );
                            },
                        };
                    },
                    provides: function (r) {
                        r.generateAbstractMask = function (r) {
                            var t,
                                o = r.children,
                                a = r.attributes,
                                e = r.main,
                                n = r.mask,
                                i = r.maskId,
                                l = r.transform,
                                s = e.width,
                                d = e.icon,
                                b = n.width,
                                c = n.icon,
                                m = (function (r) {
                                    var t = r.transform,
                                        o = r.iconWidth,
                                        a = {
                                            transform: 'translate('.concat(
                                                r.containerWidth / 2,
                                                ' 256)'
                                            ),
                                        },
                                        e = 'translate('
                                            .concat(32 * t.x, ', ')
                                            .concat(32 * t.y, ') '),
                                        n = 'scale('
                                            .concat(
                                                (t.size / 16) *
                                                    (t.flipX ? -1 : 1),
                                                ', '
                                            )
                                            .concat(
                                                (t.size / 16) *
                                                    (t.flipY ? -1 : 1),
                                                ') '
                                            ),
                                        i = 'rotate('.concat(t.rotate, ' 0 0)');
                                    return {
                                        outer: a,
                                        inner: {
                                            transform: ''
                                                .concat(e, ' ')
                                                .concat(n, ' ')
                                                .concat(i),
                                        },
                                        path: {
                                            transform: 'translate('.concat(
                                                (o / 2) * -1,
                                                ' -256)'
                                            ),
                                        },
                                    };
                                })({
                                    transform: l,
                                    containerWidth: b,
                                    iconWidth: s,
                                }),
                                p = {
                                    tag: 'rect',
                                    attributes: h(
                                        h({}, jo),
                                        {},
                                        {fill: 'white'}
                                    ),
                                },
                                g = d.children
                                    ? {children: d.children.map(Ao)}
                                    : {},
                                f = {
                                    tag: 'g',
                                    attributes: h({}, m.inner),
                                    children: [
                                        Ao(
                                            h(
                                                {
                                                    tag: d.tag,
                                                    attributes: h(
                                                        h({}, d.attributes),
                                                        m.path
                                                    ),
                                                },
                                                g
                                            )
                                        ),
                                    ],
                                },
                                u = {
                                    tag: 'g',
                                    attributes: h({}, m.outer),
                                    children: [f],
                                },
                                v = 'mask-'.concat(i || Sr()),
                                x = 'clip-'.concat(i || Sr()),
                                w = {
                                    tag: 'mask',
                                    attributes: h(
                                        h({}, jo),
                                        {},
                                        {
                                            id: v,
                                            maskUnits: 'userSpaceOnUse',
                                            maskContentUnits: 'userSpaceOnUse',
                                        }
                                    ),
                                    children: [p, u],
                                },
                                y = {
                                    tag: 'defs',
                                    children: [
                                        {
                                            tag: 'clipPath',
                                            attributes: {id: x},
                                            children:
                                                ((t = c),
                                                'g' === t.tag
                                                    ? t.children
                                                    : [t]),
                                        },
                                        w,
                                    ],
                                };
                            return (
                                o.push(y, {
                                    tag: 'rect',
                                    attributes: h(
                                        {
                                            fill: 'currentColor',
                                            'clip-path': 'url(#'.concat(x, ')'),
                                            mask: 'url(#'.concat(v, ')'),
                                        },
                                        jo
                                    ),
                                }),
                                {children: o, attributes: a}
                            );
                        };
                    },
                },
                Eo = {
                    provides: function (r) {
                        var t = !1;
                        Y.matchMedia &&
                            (t = Y.matchMedia(
                                '(prefers-reduced-motion: reduce)'
                            ).matches),
                            (r.missingIconAbstract = function () {
                                var r = [],
                                    o = {fill: 'currentColor'},
                                    a = {
                                        attributeType: 'XML',
                                        repeatCount: 'indefinite',
                                        dur: '2s',
                                    };
                                r.push({
                                    tag: 'path',
                                    attributes: h(
                                        h({}, o),
                                        {},
                                        {
                                            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                                        }
                                    ),
                                });
                                var e = h(
                                        h({}, a),
                                        {},
                                        {attributeName: 'opacity'}
                                    ),
                                    n = {
                                        tag: 'circle',
                                        attributes: h(
                                            h({}, o),
                                            {},
                                            {cx: '256', cy: '364', r: '28'}
                                        ),
                                        children: [],
                                    };
                                return (
                                    t ||
                                        n.children.push(
                                            {
                                                tag: 'animate',
                                                attributes: h(
                                                    h({}, a),
                                                    {},
                                                    {
                                                        attributeName: 'r',
                                                        values: '28;14;28;28;14;28;',
                                                    }
                                                ),
                                            },
                                            {
                                                tag: 'animate',
                                                attributes: h(
                                                    h({}, e),
                                                    {},
                                                    {values: '1;0;1;1;0;1;'}
                                                ),
                                            }
                                        ),
                                    r.push(n),
                                    r.push({
                                        tag: 'path',
                                        attributes: h(
                                            h({}, o),
                                            {},
                                            {
                                                opacity: '1',
                                                d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                                            }
                                        ),
                                        children: t
                                            ? []
                                            : [
                                                  {
                                                      tag: 'animate',
                                                      attributes: h(
                                                          h({}, e),
                                                          {},
                                                          {
                                                              values: '1;0;0;0;0;1;',
                                                          }
                                                      ),
                                                  },
                                              ],
                                    }),
                                    t ||
                                        r.push({
                                            tag: 'path',
                                            attributes: h(
                                                h({}, o),
                                                {},
                                                {
                                                    opacity: '0',
                                                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                                                }
                                            ),
                                            children: [
                                                {
                                                    tag: 'animate',
                                                    attributes: h(
                                                        h({}, e),
                                                        {},
                                                        {values: '0;0;1;1;0;0;'}
                                                    ),
                                                },
                                            ],
                                        }),
                                    {
                                        tag: 'g',
                                        attributes: {class: 'missing'},
                                        children: r,
                                    }
                                );
                            });
                    },
                };
            (Oo = {mixoutsTo: Ct}.mixoutsTo),
                (wt = [
                    _r,
                    co,
                    mo,
                    po,
                    go,
                    {
                        hooks: function () {
                            return {
                                mutationObserverCallbacks: function (r) {
                                    return (r.pseudoElementsCallback = wo), r;
                                },
                            };
                        },
                        provides: function (r) {
                            r.pseudoElements2svg = function (r) {
                                var t = r.node,
                                    o = void 0 === t ? _ : t;
                                jr.searchPseudoElements && wo(o);
                            };
                        },
                    },
                    {
                        mixout: function () {
                            return {
                                dom: {
                                    unwatch: function () {
                                        Jt(), (yo = !0);
                                    },
                                },
                            };
                        },
                        hooks: function () {
                            return {
                                bootstrap: function () {
                                    oo(jt('mutationObserverCallbacks', {}));
                                },
                                noAuto: function () {
                                    to && to.disconnect();
                                },
                                watch: function (r) {
                                    var t = r.observeMutationsRoot;
                                    yo
                                        ? ro()
                                        : oo(
                                              jt('mutationObserverCallbacks', {
                                                  observeMutationsRoot: t,
                                              })
                                          );
                                },
                            };
                        },
                    },
                    zo,
                    Ro,
                    Eo,
                    {
                        hooks: function () {
                            return {
                                parseNodeAttributes: function (r, t) {
                                    var o = t.getAttribute('data-fa-symbol'),
                                        a = null !== o && ('' === o || o);
                                    return (r.symbol = a), r;
                                },
                            };
                        },
                    },
                ]),
                (yt = {}),
                Object.keys(kt).forEach(function (r) {
                    -1 === zt.indexOf(r) && delete kt[r];
                }),
                wt.forEach(function (r) {
                    var t = r.mixout ? r.mixout() : {};
                    if (
                        (Object.keys(t).forEach(function (r) {
                            'function' == typeof t[r] && (Oo[r] = t[r]),
                                'object' === x(t[r]) &&
                                    Object.keys(t[r]).forEach(function (o) {
                                        Oo[r] || (Oo[r] = {}),
                                            (Oo[r][o] = t[r][o]);
                                    });
                        }),
                        r.hooks)
                    ) {
                        var o = r.hooks();
                        Object.keys(o).forEach(function (r) {
                            yt[r] || (yt[r] = []), yt[r].push(o[r]);
                        });
                    }
                    r.provides && r.provides(kt);
                }),
                Ct.noAuto,
                Ct.config,
                Ct.library,
                Ct.dom;
            var So = Ct.parse,
                Co = (Ct.findIconDefinition, Ct.toHtml, Ct.icon),
                Bo = (Ct.layer, Ct.text, Ct.counter, o(40507)),
                No = o.n(Bo);
            function Po(r, t) {
                var o = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(r);
                    t &&
                        (a = a.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t)
                                .enumerable;
                        })),
                        o.push.apply(o, a);
                }
                return o;
            }
            function Lo(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Po(Object(o), !0).forEach(function (t) {
                              Mo(r, t, o[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                r,
                                Object.getOwnPropertyDescriptors(o)
                            )
                          : Po(Object(o)).forEach(function (t) {
                                Object.defineProperty(
                                    r,
                                    t,
                                    Object.getOwnPropertyDescriptor(o, t)
                                );
                            });
                }
                return r;
            }
            function Io(r) {
                return (
                    (Io =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function (r) {
                                  return typeof r;
                              }
                            : function (r) {
                                  return r &&
                                      'function' == typeof Symbol &&
                                      r.constructor === Symbol &&
                                      r !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof r;
                              }),
                    Io(r)
                );
            }
            function Mo(r, t, o) {
                return (
                    t in r
                        ? Object.defineProperty(r, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (r[t] = o),
                    r
                );
            }
            function Go(r) {
                return (
                    (function (r) {
                        if (Array.isArray(r)) return Yo(r);
                    })(r) ||
                    (function (r) {
                        if (
                            ('undefined' != typeof Symbol &&
                                null != r[Symbol.iterator]) ||
                            null != r['@@iterator']
                        )
                            return Array.from(r);
                    })(r) ||
                    (function (r, t) {
                        if (r) {
                            if ('string' == typeof r) return Yo(r, t);
                            var o = Object.prototype.toString
                                .call(r)
                                .slice(8, -1);
                            return (
                                'Object' === o &&
                                    r.constructor &&
                                    (o = r.constructor.name),
                                'Map' === o || 'Set' === o
                                    ? Array.from(r)
                                    : 'Arguments' === o ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            o
                                        )
                                      ? Yo(r, t)
                                      : void 0
                            );
                        }
                    })(r) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function Yo(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var o = 0, a = new Array(t); o < t; o++) a[o] = r[o];
                return a;
            }
            function _o(r) {
                return (
                    (t = r),
                    (t -= 0) == t
                        ? r
                        : (r = r.replace(/[\-_\s]+(.)?/g, function (r, t) {
                              return t ? t.toUpperCase() : '';
                          }))
                              .substr(0, 1)
                              .toLowerCase() + r.substr(1)
                );
                var t;
            }
            var To = ['style'],
                Wo = !1;
            try {
                Wo = !0;
            } catch (r) {}
            function qo(r) {
                return r &&
                    'object' === Io(r) &&
                    r.prefix &&
                    r.iconName &&
                    r.icon
                    ? r
                    : So.icon
                      ? So.icon(r)
                      : null === r
                        ? null
                        : r && 'object' === Io(r) && r.prefix && r.iconName
                          ? r
                          : Array.isArray(r) && 2 === r.length
                            ? {prefix: r[0], iconName: r[1]}
                            : 'string' == typeof r
                              ? {prefix: 'fas', iconName: r}
                              : void 0;
            }
            function Do(r, t) {
                return (Array.isArray(t) && t.length > 0) ||
                    (!Array.isArray(t) && t)
                    ? Mo({}, r, t)
                    : {};
            }
            var Zo = n().forwardRef(function (r, t) {
                var o = r.icon,
                    a = r.mask,
                    e = r.symbol,
                    n = r.className,
                    i = r.title,
                    l = r.titleId,
                    s = r.maskId,
                    d = qo(o),
                    b = Do(
                        'classes',
                        [].concat(
                            Go(
                                (function (r) {
                                    var t,
                                        o = r.beat,
                                        a = r.fade,
                                        e = r.beatFade,
                                        n = r.bounce,
                                        i = r.shake,
                                        l = r.flash,
                                        s = r.spin,
                                        d = r.spinPulse,
                                        b = r.spinReverse,
                                        c = r.pulse,
                                        m = r.fixedWidth,
                                        p = r.inverse,
                                        g = r.border,
                                        f = r.listItem,
                                        u = r.flip,
                                        v = r.size,
                                        h = r.rotation,
                                        x = r.pull,
                                        w =
                                            (Mo(
                                                (t = {
                                                    'fa-beat': o,
                                                    'fa-fade': a,
                                                    'fa-beat-fade': e,
                                                    'fa-bounce': n,
                                                    'fa-shake': i,
                                                    'fa-flash': l,
                                                    'fa-spin': s,
                                                    'fa-spin-reverse': b,
                                                    'fa-spin-pulse': d,
                                                    'fa-pulse': c,
                                                    'fa-fw': m,
                                                    'fa-inverse': p,
                                                    'fa-border': g,
                                                    'fa-li': f,
                                                    'fa-flip': !0 === u,
                                                    'fa-flip-horizontal':
                                                        'horizontal' === u ||
                                                        'both' === u,
                                                    'fa-flip-vertical':
                                                        'vertical' === u ||
                                                        'both' === u,
                                                }),
                                                'fa-'.concat(v),
                                                null != v
                                            ),
                                            Mo(
                                                t,
                                                'fa-rotate-'.concat(h),
                                                null != h && 0 !== h
                                            ),
                                            Mo(
                                                t,
                                                'fa-pull-'.concat(x),
                                                null != x
                                            ),
                                            Mo(
                                                t,
                                                'fa-swap-opacity',
                                                r.swapOpacity
                                            ),
                                            t);
                                    return Object.keys(w)
                                        .map(function (r) {
                                            return w[r] ? r : null;
                                        })
                                        .filter(function (r) {
                                            return r;
                                        });
                                })(r)
                            ),
                            Go(n.split(' '))
                        )
                    ),
                    c = Do(
                        'transform',
                        'string' == typeof r.transform
                            ? So.transform(r.transform)
                            : r.transform
                    ),
                    m = Do('mask', qo(a)),
                    p = Co(
                        d,
                        Lo(
                            Lo(Lo(Lo({}, b), c), m),
                            {},
                            {symbol: e, title: i, titleId: l, maskId: s}
                        )
                    );
                if (!p)
                    return (
                        (function () {
                            var r;
                            !Wo &&
                                console &&
                                'function' == typeof console.error &&
                                (r = console).error.apply(r, arguments);
                        })('Could not find icon', d),
                        null
                    );
                var g = p.abstract,
                    f = {ref: t};
                return (
                    Object.keys(r).forEach(function (t) {
                        Zo.defaultProps.hasOwnProperty(t) || (f[t] = r[t]);
                    }),
                    Fo(g[0], f)
                );
            });
            (Zo.displayName = 'FontAwesomeIcon'),
                (Zo.propTypes = {
                    beat: No().bool,
                    border: No().bool,
                    beatFade: No().bool,
                    bounce: No().bool,
                    className: No().string,
                    fade: No().bool,
                    flash: No().bool,
                    mask: No().oneOfType([
                        No().object,
                        No().array,
                        No().string,
                    ]),
                    maskId: No().string,
                    fixedWidth: No().bool,
                    inverse: No().bool,
                    flip: No().oneOf([
                        !0,
                        !1,
                        'horizontal',
                        'vertical',
                        'both',
                    ]),
                    icon: No().oneOfType([
                        No().object,
                        No().array,
                        No().string,
                    ]),
                    listItem: No().bool,
                    pull: No().oneOf(['right', 'left']),
                    pulse: No().bool,
                    rotation: No().oneOf([0, 90, 180, 270]),
                    shake: No().bool,
                    size: No().oneOf([
                        '2xs',
                        'xs',
                        'sm',
                        'lg',
                        'xl',
                        '2xl',
                        '1x',
                        '2x',
                        '3x',
                        '4x',
                        '5x',
                        '6x',
                        '7x',
                        '8x',
                        '9x',
                        '10x',
                    ]),
                    spin: No().bool,
                    spinPulse: No().bool,
                    spinReverse: No().bool,
                    symbol: No().oneOfType([No().bool, No().string]),
                    title: No().string,
                    titleId: No().string,
                    transform: No().oneOfType([No().string, No().object]),
                    swapOpacity: No().bool,
                }),
                (Zo.defaultProps = {
                    border: !1,
                    className: '',
                    mask: null,
                    maskId: null,
                    fixedWidth: !1,
                    inverse: !1,
                    flip: !1,
                    icon: null,
                    listItem: !1,
                    pull: null,
                    pulse: !1,
                    rotation: null,
                    size: null,
                    spin: !1,
                    spinPulse: !1,
                    spinReverse: !1,
                    beat: !1,
                    fade: !1,
                    beatFade: !1,
                    bounce: !1,
                    shake: !1,
                    symbol: !1,
                    title: '',
                    titleId: null,
                    transform: null,
                    swapOpacity: !1,
                });
            var Fo = function r(t, o) {
                    var a =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                    if ('string' == typeof o) return o;
                    var e = (o.children || []).map(function (o) {
                            return r(t, o);
                        }),
                        n = Object.keys(o.attributes || {}).reduce(
                            function (r, t) {
                                var a = o.attributes[t];
                                switch (t) {
                                    case 'class':
                                        (r.attrs.className = a),
                                            delete o.attributes.class;
                                        break;
                                    case 'style':
                                        r.attrs.style = a
                                            .split(';')
                                            .map(function (r) {
                                                return r.trim();
                                            })
                                            .filter(function (r) {
                                                return r;
                                            })
                                            .reduce(function (r, t) {
                                                var o,
                                                    a = t.indexOf(':'),
                                                    e = _o(t.slice(0, a)),
                                                    n = t.slice(a + 1).trim();
                                                return (
                                                    e.startsWith('webkit')
                                                        ? (r[
                                                              ((o = e),
                                                              o
                                                                  .charAt(0)
                                                                  .toUpperCase() +
                                                                  o.slice(1))
                                                          ] = n)
                                                        : (r[e] = n),
                                                    r
                                                );
                                            }, {});
                                        break;
                                    default:
                                        0 === t.indexOf('aria-') ||
                                        0 === t.indexOf('data-')
                                            ? (r.attrs[t.toLowerCase()] = a)
                                            : (r.attrs[_o(t)] = a);
                                }
                                return r;
                            },
                            {attrs: {}}
                        ),
                        i = a.style,
                        l = void 0 === i ? {} : i,
                        s = (function (r, t) {
                            if (null == r) return {};
                            var o,
                                a,
                                e = (function (r, t) {
                                    if (null == r) return {};
                                    var o,
                                        a,
                                        e = {},
                                        n = Object.keys(r);
                                    for (a = 0; a < n.length; a++)
                                        (o = n[a]),
                                            t.indexOf(o) >= 0 || (e[o] = r[o]);
                                    return e;
                                })(r, t);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(r);
                                for (a = 0; a < n.length; a++)
                                    (o = n[a]),
                                        t.indexOf(o) >= 0 ||
                                            (Object.prototype.propertyIsEnumerable.call(
                                                r,
                                                o
                                            ) &&
                                                (e[o] = r[o]));
                            }
                            return e;
                        })(a, To);
                    return (
                        (n.attrs.style = Lo(Lo({}, n.attrs.style), l)),
                        t.apply(
                            void 0,
                            [o.tag, Lo(Lo({}, n.attrs), s)].concat(Go(e))
                        )
                    );
                }.bind(null, n().createElement),
                Uo = o(67774),
                Vo = l.cQ.uuid,
                Ho = o(77188),
                Xo = l.cQ.ListUtils.mapListValues,
                Qo = l.cQ.DragIcon,
                Ko = {
                    delGroup: Uo.I7k,
                    delRuleGroup: Uo.I7k,
                    delRule: Uo.I7k,
                    addRuleGroup: Uo.r8p,
                    addRuleGroupExt: Uo.r8p,
                    addRule: Uo.r8p,
                    addGroup: Uo.r8p,
                    drag: Uo.eEm,
                },
                $o = {addRuleGroup: !0, delRuleGroup: !0, delRule: !0},
                Jo = {
                    addRule: 'primary',
                    addGroup: 'primary',
                    delGroup: 'danger',
                    delRuleGroup: 'danger',
                    delRule: 'danger',
                };
            const ra = {
                BootstrapTextWidget: function (r) {
                    var t = r.value,
                        o = r.setValue,
                        a = (r.config, r.readonly),
                        e = r.placeholder,
                        l = r.maxLength,
                        s = t || '';
                    return n().createElement(i.Z, {
                        type: 'text',
                        bsSize: 'sm',
                        value: s,
                        placeholder: e,
                        disabled: a,
                        onChange: function (r) {
                            var t = r.target.value;
                            '' === t && (t = void 0), o(t);
                        },
                        maxLength: l,
                    });
                },
                BootstrapTextAreaWidget: function (r) {
                    var t = r.value,
                        o = r.setValue,
                        a = (r.config, r.readonly),
                        e = r.placeholder,
                        l = r.maxLength,
                        s = (r.maxRows, r.fullWidth),
                        d = t || '';
                    return n().createElement(i.Z, {
                        type: 'textarea',
                        bsSize: 'sm',
                        value: d,
                        placeholder: e,
                        disabled: a,
                        onChange: function (r) {
                            var t = r.target.value;
                            '' === t && (t = void 0), o(t);
                        },
                        maxLength: l,
                        style: {width: s ? '100%' : void 0},
                    });
                },
                BootstrapDateWidget: function (r) {
                    var t = r.value,
                        o = r.setValue,
                        a = (r.config, r.valueFormat, r.readonly);
                    return n().createElement(i.Z, {
                        type: 'date',
                        bsSize: 'sm',
                        value: t || '',
                        disabled: a,
                        onChange: function (r) {
                            var t = r.target.value;
                            '' == t && (t = void 0), o(t);
                        },
                    });
                },
                BootstrapDateTimeWidget: function (r) {
                    var t,
                        o = r.value,
                        a = r.setValue,
                        e = (r.config, r.valueFormat),
                        l = (r.use12Hours, r.readonly);
                    return (
                        (t = o ? s(o).format('YYYY-MM-DDTHH:mm') : ''),
                        n().createElement(i.Z, {
                            type: 'datetime-local',
                            bsSize: 'sm',
                            value: t,
                            disabled: l,
                            onChange: function (r) {
                                var t = r.target.value;
                                (t =
                                    '' == t
                                        ? void 0
                                        : s(new Date(t)).format(e)),
                                    a(t);
                            },
                        })
                    );
                },
                BootstrapTimeWidget: function (r) {
                    var t = r.value,
                        o = r.setValue,
                        a = (r.config, r.valueFormat, r.use12Hours, r.readonly);
                    return n().createElement(i.Z, {
                        type: 'time',
                        bsSize: 'sm',
                        value: t || '',
                        disabled: a,
                        onChange: function (r) {
                            var t = r.target.value;
                            '' == t && (t = void 0), o(t);
                        },
                    });
                },
                BootstrapSelectWidget: function (r) {
                    var t = r.listValues,
                        o = r.value,
                        a = r.setValue,
                        i = (r.allowCustomValues, r.readonly),
                        l = r.placeholder,
                        s = function (r) {
                            void 0 !== r.target.value && a(r.target.value);
                        },
                        f = null != o,
                        u = (0, e.useState)(!1),
                        v = (0, d.Z)(u, 2),
                        h = v[0],
                        x = v[1];
                    return n().createElement(
                        c.Z,
                        {
                            isOpen: h,
                            onClick: function () {
                                return x(!h);
                            },
                            disabled: i,
                            toggle: function () {
                                return x(!h);
                            },
                        },
                        n().createElement(
                            m.Z,
                            {
                                tag: 'button',
                                className: 'form-select',
                                style: {
                                    lineHeight: '105%',
                                    minHeight: '1.7rem',
                                    paddingBottom: '0.45rem',
                                },
                                color: 'transparent',
                            },
                            f
                                ? (function (r) {
                                      return i || null != r
                                          ? (function (r) {
                                                return g(t, function (t) {
                                                    var o = t.title;
                                                    return t.value === r
                                                        ? o
                                                        : null;
                                                })
                                                    .filter(function (r) {
                                                        return null !== r;
                                                    })
                                                    .shift();
                                            })(r)
                                          : l;
                                  })(o)
                                : n().createElement('span', null, ' ')
                        ),
                        n().createElement(
                            p.Z,
                            {container: 'body', style: {}},
                            !f &&
                                n().createElement(b.Z, {
                                    disabled: !0,
                                    value: '',
                                }),
                            g(t, function (r) {
                                var t = r.title,
                                    a = r.value;
                                return n().createElement(
                                    b.Z,
                                    {
                                        key: a,
                                        onClick: s,
                                        value: a,
                                        active: o == a,
                                    },
                                    t
                                );
                            })
                        )
                    );
                },
                BootstrapNumberWidget: function (r) {
                    var t = r.value,
                        o = r.setValue,
                        a = (r.config, r.readonly),
                        e = r.min,
                        l = r.max,
                        s = r.step,
                        d = r.placeholder,
                        b = null == t ? '' : t;
                    return n().createElement(i.Z, {
                        type: 'number',
                        bsSize: 'sm',
                        value: b,
                        placeholder: d,
                        disabled: a,
                        min: e,
                        max: l,
                        step: s,
                        onChange: function (r) {
                            var t = r.target.value;
                            (t = '' === t || null === t ? void 0 : Number(t)),
                                o(t);
                        },
                    });
                },
                BootstrapSliderWidget: function (r) {
                    var t = r.value,
                        o = r.setValue,
                        a = (r.config, r.readonly),
                        e = r.min,
                        l = r.max,
                        s = r.step,
                        d = r.placeholder,
                        b = function (r) {
                            var t = r.target.value;
                            (t = '' === t || null === t ? void 0 : Number(t)),
                                o(t);
                        },
                        c = null == t ? '' : t;
                    return n().createElement(
                        'div',
                        {style: {display: 'inline-flex', flexWrap: 'wrap'}},
                        n().createElement(i.Z, {
                            key: 'number',
                            bsSize: 'sm',
                            style: {
                                marginLeft: '5px',
                                display: 'inline-flex',
                                width: 'auto',
                            },
                            type: 'number',
                            value: c,
                            placeholder: d,
                            disabled: a,
                            min: e,
                            max: l,
                            step: s,
                            onChange: b,
                        }),
                        n().createElement(i.Z, {
                            key: 'range',
                            bsSize: 'sm',
                            style: {
                                marginLeft: '5px',
                                display: 'inline-flex',
                                width: 'auto',
                                minWidth: '150px',
                            },
                            type: 'range',
                            value: c,
                            disabled: a,
                            min: e,
                            max: l,
                            step: s,
                            onChange: b,
                        })
                    );
                },
                BootstrapBooleanWidget: function (r) {
                    var t = r.value,
                        o = r.setValue,
                        a = (r.config, r.labelYes, r.labelNo, r.readonly),
                        e = function (r) {
                            return o('true' == r.target.value);
                        },
                        i = Vo(),
                        l = Vo();
                    return n().createElement(
                        n().Fragment,
                        null,
                        n().createElement(
                            f.Z,
                            null,
                            n().createElement(
                                u.Z,
                                {
                                    id: i,
                                    value: !0,
                                    checked: !!t,
                                    disabled: a,
                                    color: !0 === t ? 'success' : 'secondary',
                                    onClick: e,
                                    size: 'sm',
                                },
                                n().createElement(Zo, {icon: Uo.LEp})
                            ),
                            n().createElement(
                                u.Z,
                                {
                                    id: l,
                                    value: !1,
                                    checked: !t,
                                    disabled: a,
                                    color: !1 === t ? 'danger' : 'secondary',
                                    onClick: e,
                                    size: 'sm',
                                },
                                n().createElement(Zo, {icon: Uo.NBC})
                            )
                        )
                    );
                },
                BootstrapMultiSelectWidget: function (r) {
                    var t = r.listValues,
                        o = r.value,
                        a = r.setValue,
                        i = (r.allowCustomValues, r.placeholder),
                        l = r.readonly,
                        s = (0, e.useState)(!1),
                        g = (0, d.Z)(s, 2),
                        f = g[0],
                        u = g[1],
                        v = (0, e.useState)(null != o ? o : []),
                        h = (0, d.Z)(v, 2),
                        x = h[0],
                        w = h[1],
                        y = function (r) {
                            var o = k(r.target.value, t);
                            0 == o.length && (o = void 0), a(o);
                        },
                        k = function (r, t) {
                            if (!r) return x;
                            var o = [];
                            return (
                                x.includes(r)
                                    ? ((o = x.filter(function (t) {
                                          return t !== r;
                                      })),
                                      w(o))
                                    : ((o = [].concat((0, Ho.Z)(x), [r])),
                                      w(o)),
                                o
                            );
                        };
                    return n().createElement(
                        c.Z,
                        {
                            isOpen: f,
                            onClick: function () {
                                return u(!f);
                            },
                            disabled: l,
                            toggle: function () {
                                return u(!f);
                            },
                        },
                        n().createElement(
                            m.Z,
                            {
                                tag: 'button',
                                className: 'form-select',
                                style: {
                                    lineHeight: '105%',
                                    minHeight: '1.7rem',
                                    paddingBottom: '0.45rem',
                                },
                                color: 'transparent',
                            },
                            x.length
                                ? (function (r) {
                                      if (!l && !r.length) return i;
                                      var o = Xo(t, function (t) {
                                          var o = t.title,
                                              a = t.value;
                                          return r.indexOf(a) > -1 ? o : null;
                                      }).filter(function (r) {
                                          return null !== r;
                                      });
                                      return o.join(', ');
                                  })(x)
                                : n().createElement('span', null, ' ')
                        ),
                        n().createElement(
                            p.Z,
                            {container: 'body', style: {}},
                            Xo(t, function (r) {
                                var t = r.title,
                                    o = r.value;
                                return n().createElement(
                                    b.Z,
                                    {
                                        key: o,
                                        onClick: y,
                                        value: o,
                                        active: x.some(function (r) {
                                            return r === o;
                                        }),
                                    },
                                    t
                                );
                            })
                        )
                    );
                },
                BootstrapFieldSelect: function (r) {
                    var t,
                        o = r.items,
                        a = r.setField,
                        i = r.selectedKey,
                        l = r.readonly,
                        s = r.placeholder,
                        g = r.errorText,
                        f = (0, e.useState)(!1),
                        u = (0, d.Z)(f, 2),
                        v = u[0],
                        h = u[1],
                        x = function (r) {
                            void 0 !== r.target.value && a(r.target.value);
                        },
                        w = null != i;
                    return n().createElement(
                        c.Z,
                        {
                            isOpen: v,
                            onClick: function () {
                                return h(!v);
                            },
                            disabled: l,
                            toggle: function () {
                                return h(!v);
                            },
                        },
                        n().createElement(
                            m.Z,
                            {
                                tag: 'button',
                                className: 'form-select',
                                style: {
                                    lineHeight: '105%',
                                    minHeight: '1.7rem',
                                    paddingBottom: '0.45rem',
                                },
                                color: 'transparent',
                            },
                            w
                                ? (function (r, t) {
                                      var o;
                                      return l || t
                                          ? (null ===
                                                (o = (function r(o) {
                                                    for (var a in o) {
                                                        var e = o[a];
                                                        if (e.path === t)
                                                            return e;
                                                        if (e.items) {
                                                            var n = r(e.items);
                                                            if (n) return n;
                                                        }
                                                    }
                                                })(r)) || void 0 === o
                                                ? void 0
                                                : o.label) || t
                                          : s;
                                  })(o, i)
                                : ((t = s || g || '&nbsp;'),
                                  g
                                      ? n().createElement(
                                            'span',
                                            {style: {color: 'red'}},
                                            t
                                        )
                                      : n().createElement('span', null, t))
                        ),
                        n().createElement(
                            p.Z,
                            {
                                container: 'body',
                                style: {overflowY: 'auto', maxHeight: '400px'},
                            },
                            !w &&
                                n().createElement(b.Z, {
                                    key: 'body',
                                    disabled: !0,
                                    value: '',
                                }),
                            (function r(t) {
                                var o =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    a =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2]
                                            ? arguments[2]
                                            : 0;
                                return Object.keys(t).map(function (e) {
                                    var l = t[e],
                                        s = l.items,
                                        d = l.path,
                                        c = l.label,
                                        m = l.disabled,
                                        p = l.matchesType,
                                        g = a > 0 ? '  '.repeat(a) : '',
                                        f = a > 1 ? '  '.repeat(a - 1) : '';
                                    if (s)
                                        return n().createElement(
                                            'div',
                                            {
                                                key: 'dropdown-itemGroup-'.concat(
                                                    d
                                                ),
                                            },
                                            n().createElement(
                                                b.Z,
                                                {
                                                    header: !0,
                                                    key: ''.concat(
                                                        d,
                                                        '-header'
                                                    ),
                                                    onClick: x,
                                                    value: d,
                                                },
                                                g + c
                                            ),
                                            r(s, !0, a + 1)
                                        );
                                    var u = p
                                        ? n().createElement('b', null, f + c)
                                        : f + c;
                                    return n().createElement(
                                        b.Z,
                                        {
                                            disabled: m,
                                            key: d,
                                            onClick: x,
                                            value: d,
                                            className: o ? 'px-4' : void 0,
                                            active: i == d,
                                        },
                                        u
                                    );
                                });
                            })(o)
                        )
                    );
                },
                BootstrapIcon: function (r) {
                    var t = r.type,
                        o =
                            (Ko[t] && n().createElement(Zo, {icon: Ko[t]})) ||
                            null;
                    return (
                        o || 'drag' !== t || (o = n().createElement(Qo, null)),
                        o
                    );
                },
                BootstrapButton: function (r) {
                    var t = r.type,
                        o = r.label,
                        a = r.onClick,
                        e = r.renderIcon,
                        i = r.readonly,
                        l =
                            (null == e ? void 0 : e({type: t, readonly: i})) ||
                            null,
                        s = $o[t] || !o;
                    return a
                        ? n().createElement(
                              u.Z,
                              {size: 'sm', color: Jo[t], onClick: a},
                              l,
                              !s && o
                          )
                        : l;
                },
                BootstrapButtonGroup: function (r) {
                    var t = r.children;
                    return r.config, n().createElement(f.Z, null, t);
                },
                BootstrapConjs: function (r) {
                    var t = r.id,
                        o = r.not,
                        a = r.setNot,
                        e = r.conjunctionOptions,
                        i = r.setConjunction,
                        l = r.disabled,
                        s = r.readonly,
                        d = r.config,
                        b = r.showNot,
                        c = r.notLabel,
                        m = Object.keys(e).length,
                        p = l,
                        g = d.settings.forceShowConj || (m > 1 && !p),
                        v = function (r) {
                            return i(r);
                        };
                    return n().createElement(
                        f.Z,
                        {size: 'sm', disabled: s},
                        b &&
                            (s && !o
                                ? null
                                : n().createElement(
                                      u.Z,
                                      {
                                          key: t,
                                          id: t + '__not',
                                          size: 'sm',
                                          color: o ? 'danger' : 'secondary',
                                          onClick: function (r) {
                                              return a(r);
                                          }.bind(null, !o),
                                          disabled: s,
                                      },
                                      c || 'NOT'
                                  )),
                        g &&
                            Object.keys(e).map(function (r) {
                                var t = e[r],
                                    o = t.id,
                                    a = (t.name, t.label),
                                    d = t.checked,
                                    b = i.isDummyFn ? '__dummy' : '';
                                return (!s && !l) || d
                                    ? n().createElement(
                                          u.Z,
                                          {
                                              key: o + b,
                                              id: o + b,
                                              size: 'sm',
                                              color: d
                                                  ? 'primary'
                                                  : 'secondary',
                                              value: r,
                                              onClick: v.bind(null, r),
                                              disabled: s || l,
                                          },
                                          a
                                      )
                                    : null;
                            })
                    );
                },
                BootstrapValueSources: function (r) {
                    r.config;
                    var t = r.valueSources,
                        o = r.valueSrc,
                        a = (r.title, r.setValueSrc),
                        i = r.readonly,
                        l = (0, e.useState)(!1),
                        s = (0, d.Z)(l, 2),
                        g = s[0],
                        f = s[1],
                        u = function (r) {
                            void 0 !== r.target.value && a(r.target.value);
                        };
                    return n().createElement(
                        c.Z,
                        {
                            isOpen: g,
                            onClick: function () {
                                return f(!g);
                            },
                            disabled: i,
                            toggle: function () {
                                return f(!g);
                            },
                        },
                        n().createElement(
                            m.Z,
                            {
                                tag: 'span',
                                className: 'btn',
                                style: {
                                    lineHeight: '105%',
                                    minHeight: '1.7rem',
                                    paddingBottom: '0.45rem',
                                },
                                color: 'transparent',
                            },
                            n().createElement(Zo, {icon: Uo.iV1})
                        ),
                        n().createElement(
                            p.Z,
                            {container: 'body', style: {}},
                            (function (r) {
                                return r.map(function (r) {
                                    var t = (0, d.Z)(r, 2),
                                        a = t[0],
                                        e = t[1];
                                    return n().createElement(
                                        b.Z,
                                        {
                                            key: a,
                                            onClick: u,
                                            value: a,
                                            active: o == a,
                                        },
                                        e.label || a
                                    );
                                });
                            })(t)
                        )
                    );
                },
                BootstrapConfirm: function (r) {
                    var t = r.onOk,
                        o = (r.okText, r.cancelText, r.title);
                    confirm(o) && t();
                },
                BootstrapProvider: function (r) {
                    return r.config, r.children;
                },
            };
            function ta(r, t) {
                var o = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(r);
                    t &&
                        (a = a.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t)
                                .enumerable;
                        })),
                        o.push.apply(o, a);
                }
                return o;
            }
            function oa(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ta(Object(o), !0).forEach(function (t) {
                              (0, a.Z)(r, t, o[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                r,
                                Object.getOwnPropertyDescriptors(o)
                            )
                          : ta(Object(o)).forEach(function (t) {
                                Object.defineProperty(
                                    r,
                                    t,
                                    Object.getOwnPropertyDescriptor(o, t)
                                );
                            });
                }
                return r;
            }
            var aa = oa(
                    oa({}, l.I4.settings),
                    {},
                    {
                        renderField: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapFieldSelect, r);
                        },
                        renderOperator: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapFieldSelect, r);
                        },
                        renderFunc: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapFieldSelect, r);
                        },
                        renderConjs: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapConjs, r);
                        },
                        renderButton: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapButton, r);
                        },
                        renderIcon: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapIcon, r);
                        },
                        renderButtonGroup: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapButtonGroup, r);
                        },
                        renderValueSources: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapValueSources, r);
                        },
                        renderFieldSources: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapValueSources, r);
                        },
                        renderProvider: function (r, t) {
                            return (0, t.RCE)(t.W.BootstrapProvider, r);
                        },
                        renderConfirm: function (r, t) {
                            return (0, t.W.BootstrapConfirm)(r);
                        },
                    }
                ),
                ea = oa(
                    oa({}, l.I4.widgets),
                    {},
                    {
                        text: oa(
                            oa({}, l.I4.widgets.text),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapTextWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        textarea: oa(
                            oa({}, l.I4.widgets.textarea),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapTextAreaWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        number: oa(
                            oa({}, l.I4.widgets.number),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapNumberWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        multiselect: oa(
                            oa({}, l.I4.widgets.multiselect),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapMultiSelectWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        select: oa(
                            oa({}, l.I4.widgets.select),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapSelectWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        slider: oa(
                            oa({}, l.I4.widgets.slider),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapSliderWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        boolean: oa(
                            oa({}, l.I4.widgets.boolean),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapBooleanWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        date: oa(
                            oa({}, l.I4.widgets.date),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapDateWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        time: oa(
                            oa({}, l.I4.widgets.time),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapTimeWidget,
                                        r
                                    );
                                },
                            }
                        ),
                        datetime: oa(
                            oa({}, l.I4.widgets.datetime),
                            {},
                            {
                                factory: function (r, t) {
                                    return (0, t.RCE)(
                                        t.W.BootstrapDateTimeWidget,
                                        r
                                    );
                                },
                            }
                        ),
                    }
                ),
                na = oa({}, l.I4.types),
                ia = oa(oa({}, l.I4.ctx), {}, {W: oa(oa({}, l.I4.ctx.W), ra)});
            const la = oa(
                oa({}, l.I4),
                {},
                {ctx: ia, types: na, widgets: ea, settings: aa}
            );
        },
        20947: (r, t, o) => {
            'use strict';
            o.d(t, {Z: () => l});
            var a = o(84039),
                e = o.n(a),
                n = o(76499),
                i = o.n(n)()(e());
            i.push([
                r.id,
                '/******************************************************************************/\n/** MAIN ********************************************************************/\n/******************************************************************************/\n.qb-drag-handler, .qb-draggable, .query-builder {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.rule--header:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n.query-builder {\n  overflow: hidden;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.25;\n  margin: 1rem;\n}\n\n.group {\n  background: rgba(250, 240, 210, 0.5);\n  border: 1px solid #DCC896;\n}\n\n.rule {\n  background-color: white;\n  border: 1px solid transparent;\n  padding: 10px;\n}\n\n.rule-with-error .rule {\n  border: 1px solid #e0a1a1;\n}\n\n.rule--body {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n.rule--body--wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.rule--error {\n  color: red;\n  margin-bottom: -5px;\n  margin-top: 5px;\n}\n\n.group-or-rule {\n  border-radius: 5px;\n  position: relative;\n}\n\n.rule_group {\n  background: rgba(255, 252, 242, 0.5);\n  border: 1px solid #f9f1dd;\n}\n\n.locked {\n  border: 1px dashed red;\n}\n\n.qb-placeholder {\n  border: 1px dashed gray;\n}\n\n/******************************************************************************/\n/** DRAG *********************************************************************/\n/******************************************************************************/\n.query-builder.qb-dragging {\n  cursor: -webkit-grabbing !important;\n  cursor: grabbing !important;\n}\n.query-builder.qb-dragging button {\n  pointer-events: none;\n}\n\n.qb-draggable {\n  pointer-events: none;\n  position: absolute;\n  opacity: 0.7;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.qb-drag-handler {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n/******************************************************************************/\n/** TREE LINES *********************************************************************/\n/******************************************************************************/\n.group--header:not(.no--children):not(.hide--conjs) {\n  position: relative;\n}\n.group--header:not(.no--children):not(.hide--conjs)::before {\n  z-index: 0;\n  content: "";\n  position: absolute;\n  border-width: 0 0 0 2px;\n  border-color: #ccc;\n  border-style: solid;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.group--header:not(.no--children):not(.hide--conjs).hide--line::before {\n  border-color: rgba(128, 128, 128, 0.1);\n}\n.group--header:not(.no--children):not(.hide--conjs)::before {\n  top: 20px;\n  height: calc(100% + 10px - 20px);\n  left: 11px;\n  width: 13px;\n}\n\n.group--children > .group-or-rule-container > .group-or-rule::before {\n  border-width: 0 0 2px 2px;\n}\n.group--children > .group-or-rule-container > .group-or-rule::after {\n  border-width: 0 0 0 2px;\n}\n.group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after {\n  content: "";\n  position: absolute;\n  border-color: #ccc;\n  border-style: solid;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.group--children > .group-or-rule-container > .group-or-rule::before {\n  top: -1px;\n  height: calc(50% + 1px + 1px);\n}\n.group--children > .group-or-rule-container > .group-or-rule::after {\n  top: calc(50% + 1px);\n  height: calc(50% - 1px + 10px + 2px);\n}\n.group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after {\n  left: -14px;\n  width: 13px;\n}\n.group--children > .group-or-rule-container:last-child > .group-or-rule::before {\n  border-radius: 0 0 0 4px;\n}\n.group--children > .group-or-rule-container:last-child > .group-or-rule::after {\n  display: none;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::before {\n  display: none;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after {\n  border-radius: 4px 0 0 0;\n  border-width: 2px 0 0 2px;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after {\n  top: calc(50% - 1px);\n  height: calc(50% + 1px + 10px + 2px);\n}\n.group--children.hide--line > .group-or-rule-container > .group-or-rule::before, .group--children.hide--line > .group-or-rule-container > .group-or-rule::after {\n  border-color: rgba(128, 128, 128, 0.1);\n}\n\n.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::before {\n  display: none;\n}\n.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after {\n  border-radius: 4px 0 0 0;\n  border-width: 2px 0 0 2px;\n}\n.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after {\n  top: calc(50% - 1px);\n  height: calc(50% + 1px + 5px + 2px);\n}\n.rule_group--children > .group-or-rule-container > .group-or-rule::before {\n  top: -1px;\n  height: calc(50% + 1px + 1px);\n}\n.rule_group--children > .group-or-rule-container > .group-or-rule::after {\n  top: calc(50% + 1px);\n  height: calc(50% - 1px + 5px + 2px);\n}\n.rule_group--children > .group-or-rule-container > .group-or-rule::before, .rule_group--children > .group-or-rule-container > .group-or-rule::after {\n  left: -11px;\n  width: 10px;\n}\n\n.switch_group > .group--children > .group-or-rule-container > .group-or-rule::before {\n  top: -2px;\n  height: calc(50% + 1px + 2px);\n}\n.switch_group > .group--children > .group-or-rule-container > .group-or-rule::after {\n  top: calc(50% + 1px);\n  height: calc(50% - 1px + 10px + 4px);\n}\n.switch_group > .group--children > .group-or-rule-container > .group-or-rule::before, .switch_group > .group--children > .group-or-rule-container > .group-or-rule::after {\n  left: -15px;\n  width: 13px;\n}\n.switch_group > .group--header:not(.no--children):not(.hide--conjs)::before {\n  top: 20px;\n  height: calc(100% + 10px - 20px);\n  left: 11px;\n  width: 13px;\n}\n\n.qb-draggable::before, .qb-draggable::after {\n  display: none;\n}\n\n/******************************************************************************/\n/** GROUP *********************************************************************/\n/******************************************************************************/\n.group--header,\n.group--footer {\n  display: flex;\n  align-items: stretch;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.group-or-rule-container {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-right: 10px;\n}\n.group-or-rule-container:first-child {\n  margin-top: 0px !important;\n}\n.group-or-rule-container:last-child {\n  margin-bottom: 0px !important;\n}\n\n.group--drag-handler {\n  margin-right: 8px;\n  margin-top: 3px;\n  position: relative;\n  align-self: center;\n}\n\n.group--conjunctions {\n  flex-shrink: 0;\n  display: flex;\n}\n.group--conjunctions .group--drag-handler {\n  margin-left: 10px;\n}\n\n.group--children {\n  padding-left: 24px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.group--children .group--field--count--rule {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.group--conjunctions.hide--conj {\n  opacity: 0.3;\n}\n\n.group--actions {\n  margin-left: 10px;\n  flex: 1;\n  display: flex;\n}\n.group--actions--tl, .group--actions--bl {\n  justify-content: flex-start;\n}\n.group--actions--tl {\n  margin-left: 20px;\n}\n.group--actions--tc, .group--actions--bc {\n  justify-content: center;\n}\n.group--actions--tr, .group--actions--br {\n  justify-content: flex-end;\n}\n\n/******************************************************************************/\n/** CASE_GROUP *********************************************************************/\n/******************************************************************************/\n.case_group {\n  border-width: 2px;\n}\n\n.case_group--body {\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.case_group--body .case_group--children {\n  flex: auto;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.case_group--body .case_group--value {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 10px;\n}\n\n/******************************************************************************/\n/** RULE_GROUP *********************************************************************/\n/******************************************************************************/\n.rule_group {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 10px;\n}\n.rule_group .group--field {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-self: center;\n}\n.rule_group .group--actions {\n  margin-left: 10px;\n  align-self: center;\n  flex: 0;\n}\n.rule_group .rule_group--children {\n  flex: 1;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 18px;\n}\n.rule_group .rule_group--children .group-or-rule-container {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-right: 5px;\n}\n.rule_group .rule_group--children.one--child {\n  padding-left: 9px;\n}\n\n/******************************************************************************/\n/** RULE_GROUP_EXT *********************************************************************/\n/******************************************************************************/\n.rule_group_ext .group--actions {\n  flex: none;\n}\n\n.group--header.hide--drag.with--conjs > .group--field--count--rule {\n  margin-left: 20px;\n}\n\n/******************************************************************************/\n/** RULE **********************************************************************/\n/******************************************************************************/\n.rule {\n  flex: 1;\n  display: flex;\n}\n\n.rule--header {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}\n\n.rule--drag-handler {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n\n.rule--field, .rule--fieldsrc, .group--field, .rule--operator, .rule--value, .rule--operator-options, .rule--widget, .widget--widget, .widget--valuesrc, .widget--sep, .operator--options--sep, .rule--before-widget, .rule--after-widget {\n  display: inline-block;\n}\n\n.widget--sep, .operator--options--sep, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep {\n  vertical-align: bottom;\n  align-self: flex-end;\n  margin-bottom: 8px;\n}\n\n.rule--func--arg-sep {\n  margin-bottom: 3px;\n}\n\n.widget--sep {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.widget--sep.widget--sep-first {\n  margin-right: 10px;\n  margin-left: 0;\n}\n\n.rule--operator {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.operator--options--sep {\n  margin-right: 10px;\n}\n\n.rule--func--arg-sep {\n  margin-left: 3px;\n  margin-right: 6px;\n}\n\n.rule--func--bracket-after {\n  margin-left: 5px;\n  margin-right: 2px;\n}\n\n.rule--func--bracket-before {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.widget--valuesrc {\n  vertical-align: top;\n}\n\n.rule--fieldsrc {\n  vertical-align: top;\n}\n\n.operator--options {\n  display: flex;\n}\n\n.rule--operator-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.rule--operator-text-wrapper {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\ndiv.tooltip-inner {\n  max-width: 500px;\n}\n\n.rule--label {\n  display: block;\n  font-weight: bold;\n}\n\n/******************************************************************************/\n/** FUNC **********************************************************************/\n/******************************************************************************/\n.rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep {\n  display: inline-block;\n}\n\n.rule--func--wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rule--func--args {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rule--func--arg {\n  display: flex;\n}\n\n.rule--field-wrapper,\n.rule--field--func,\n.rule--func--wrapper,\n.rule--func--args,\n.rule--func--arg,\n.rule--func--arg-value,\n.rule--func--arg-value > .rule--widget,\n.widget--func {\n  display: contents;\n}\n\n.rule--func, .widget--widget {\n  margin-bottom: 2px;\n}\n\n.rule--body--wrapper {\n  margin-bottom: -2px;\n}\n\n/******************************************************************************/\n/** Minimalism ****************************************************************/\n/******************************************************************************/\n.qb-lite .group--drag-handler, .qb-lite .group--actions {\n  transition: opacity 0.2s;\n}\n.qb-lite .group--header:hover .group--header .group--drag-handler, .qb-lite .group--header:hover .group--header .group--actions,\n.qb-lite .group--header:not(:hover) .group--drag-handler,\n.qb-lite .group--header:not(:hover) .group--actions,\n.qb-lite .rule_group:not(:hover) .group--drag-handler,\n.qb-lite .rule_group:not(:hover) .group--actions {\n  opacity: 0;\n}\n.qb-lite .rule--fieldsrc, .qb-lite .widget--valuesrc, .qb-lite .rule--drag-handler, .qb-lite .rule--header {\n  transition: opacity 0.2s;\n}\n.qb-lite .rule:hover .rule .rule--fieldsrc, .qb-lite .rule:hover .rule .widget--valuesrc, .qb-lite .rule:hover .rule .rule--drag-handler, .qb-lite .rule:hover .rule .rule--header,\n.qb-lite .rule:not(:hover) .rule--fieldsrc,\n.qb-lite .rule:not(:hover) .widget--valuesrc,\n.qb-lite .rule:not(:hover) .rule--drag-handler,\n.qb-lite .rule:not(:hover) .rule--header {\n  opacity: 0;\n}\n.qb-lite.qb-dragging .rule--fieldsrc, .qb-lite.qb-dragging .widget--valuesrc, .qb-lite.qb-dragging .rule--drag-handler, .qb-lite.qb-dragging .rule--header, .qb-lite.qb-dragging .group--drag-handler, .qb-lite.qb-dragging .group--actions {\n  opacity: 0 !important;\n}\n\n/******************************************************************************/\n/** Shrink textarea ***********************************************************/\n/******************************************************************************/\n.rule--body.can--shrink--value .rule--value {\n  flex: 1;\n}\n.rule--body.can--shrink--value .rule--value > .rule--widget {\n  width: 100%;\n  display: flex;\n}\n.rule--body.can--shrink--value .rule--value > .rule--widget .widget--widget {\n  flex: 1;\n}\n\n.svg-inline--fa {\n  pointer-events: none;\n}\n\n.btn > .svg-inline--fa {\n  margin-right: 4px;\n}\n\n.rule--drag-handler .svg-inline--fa {\n  margin-left: 6px;\n}\n',
                '',
            ]);
            const l = i;
        },
        95460: (r, t, o) => {
            'use strict';
            o.d(t, {Z: () => H});
            var a = o(84039),
                e = o.n(a),
                n = o(76499),
                i = o.n(n),
                l = o(14888),
                s = o.n(l),
                d = new URL(o(96770), o.b),
                b = new URL(o(46711), o.b),
                c = new URL(o(46199), o.b),
                m = new URL(o(11029), o.b),
                p = new URL(o(78931), o.b),
                g = new URL(o(17486), o.b),
                f = new URL(o(79609), o.b),
                u = new URL(o(42469), o.b),
                v = new URL(o(80991), o.b),
                h = new URL(o(45122), o.b),
                x = new URL(o(54144), o.b),
                w = new URL(o(32221), o.b),
                y = new URL(o(62956), o.b),
                k = new URL(o(26588), o.b),
                z = new URL(o(90819), o.b),
                j = new URL(o(31281), o.b),
                A = new URL(o(16254), o.b),
                O = new URL(o(25647), o.b),
                R = new URL(o(81692), o.b),
                E = i()(e()),
                S = s()(d),
                C = s()(b),
                B = s()(c),
                N = s()(m),
                P = s()(p),
                L = s()(g),
                I = s()(f),
                M = s()(u),
                G = s()(v),
                Y = s()(h),
                _ = s()(x),
                T = s()(w),
                W = s()(y),
                q = s()(k),
                D = s()(z),
                Z = s()(j),
                F = s()(A),
                U = s()(O),
                V = s()(R);
            E.push([
                r.id,
                '@charset "UTF-8";/*!\n * Bootstrap  v5.3.3 (https://getbootstrap.com/)\n * Copyright 2011-2024 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, 0.75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, 0.5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, 0.175);--bs-border-radius:0.375rem;--bs-border-radius-sm:0.25rem;--bs-border-radius-lg:0.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-box-shadow-sm:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, 0.175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-focus-ring-width:0.25rem;--bs-focus-ring-opacity:0.25;--bs-focus-ring-color:rgba(13, 110, 253, 0.25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}[data-bs-theme=dark]{color-scheme:dark;--bs-body-color:#dee2e6;--bs-body-color-rgb:222,226,230;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#fff;--bs-emphasis-color-rgb:255,255,255;--bs-secondary-color:rgba(222, 226, 230, 0.75);--bs-secondary-color-rgb:222,226,230;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:rgba(222, 226, 230, 0.5);--bs-tertiary-color-rgb:222,226,230;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-primary-text-emphasis:#6ea8fe;--bs-secondary-text-emphasis:#a7acb1;--bs-success-text-emphasis:#75b798;--bs-info-text-emphasis:#6edff6;--bs-warning-text-emphasis:#ffda6a;--bs-danger-text-emphasis:#ea868f;--bs-light-text-emphasis:#f8f9fa;--bs-dark-text-emphasis:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#161719;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#41464b;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#087990;--bs-warning-border-subtle:#997404;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-heading-color:inherit;--bs-link-color:#6ea8fe;--bs-link-hover-color:#8bb9fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:139,185,254;--bs-code-color:#e685b5;--bs-highlight-color:#dee2e6;--bs-highlight-bg:#664d03;--bs-border-color:#495057;--bs-border-color-translucent:rgba(255, 255, 255, 0.15);--bs-form-valid-color:#75b798;--bs-form-valid-border-color:#75b798;--bs-form-invalid-color:#ea868f;--bs-form-invalid-border-color:#ea868f}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;border:0;border-top:var(--bs-border-width) solid;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.1875em;color:var(--bs-highlight-color);background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-secondary-color);text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:"— "}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:var(--bs-secondary-color)}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.66666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.66666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.66666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.66666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.66666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.66666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color-type:initial;--bs-table-bg-type:initial;--bs-table-color-state:initial;--bs-table-bg-state:initial;--bs-table-color:var(--bs-emphasis-color);--bs-table-bg:var(--bs-body-bg);--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-emphasis-color);--bs-table-striped-bg:rgba(var(--bs-emphasis-color-rgb), 0.05);--bs-table-active-color:var(--bs-emphasis-color);--bs-table-active-bg:rgba(var(--bs-emphasis-color-rgb), 0.1);--bs-table-hover-color:var(--bs-emphasis-color);--bs-table-hover-bg:rgba(var(--bs-emphasis-color-rgb), 0.075);width:100%;margin-bottom:1rem;vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;color:var(--bs-table-color-state,var(--bs-table-color-type,var(--bs-table-color)));background-color:var(--bs-table-bg);border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,var(--bs-table-accent-bg)))}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:calc(var(--bs-border-width) * 2) solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:var(--bs-border-width) 0}.table-bordered>:not(caption)>*>*{border-width:0 var(--bs-border-width)}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-color-type:var(--bs-table-striped-color);--bs-table-bg-type:var(--bs-table-striped-bg)}.table-striped-columns>:not(caption)>tr>:nth-child(2n){--bs-table-color-type:var(--bs-table-striped-color);--bs-table-bg-type:var(--bs-table-striped-bg)}.table-active{--bs-table-color-state:var(--bs-table-active-color);--bs-table-bg-state:var(--bs-table-active-bg)}.table-hover>tbody>tr:hover>*{--bs-table-color-state:var(--bs-table-hover-color);--bs-table-bg-state:var(--bs-table-hover-bg)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#a6b5cc;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#b5b6b7;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#a7b9b1;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#a6c3ca;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#ccc2a4;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#c6acae;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#c6c7c8;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#4d5154;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + var(--bs-border-width));padding-bottom:calc(.375rem + var(--bs-border-width));margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + var(--bs-border-width));padding-bottom:calc(.5rem + var(--bs-border-width));font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + var(--bs-border-width));padding-bottom:calc(.25rem + var(--bs-border-width));font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:var(--bs-secondary-color)}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-body-bg);background-clip:padding-box;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{min-width:85px;height:1.5em;margin:0}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::-moz-placeholder{color:var(--bs-secondary-color);opacity:1}.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:var(--bs-secondary-bg)}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:var(--bs-body-color);background-color:transparent;border:solid transparent;border-width:var(--bs-border-width) 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2));padding:.25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2))}textarea.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}textarea.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}.form-control-color{width:3rem;height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2));padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}.form-control-color::-webkit-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}.form-select{--bs-form-select-bg-img:url(' +
                    S +
                    ');display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:var(--bs-secondary-bg)}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--bs-body-color)}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url(' +
                    C +
                    ')}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{--bs-form-check-bg:var(--bs-body-bg);flex-shrink:0;width:1em;height:1em;margin-top:.25em;vertical-align:top;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);background-repeat:no-repeat;background-position:center;background-size:contain;border:var(--bs-border-width) solid var(--bs-border-color);-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url(' +
                    B +
                    ')}.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url(' +
                    N +
                    ')}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;--bs-form-check-bg-image:url(' +
                    P +
                    ')}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{--bs-form-switch-bg:url(' +
                    L +
                    ');width:2em;margin-left:-2.5em;background-image:var(--bs-form-switch-bg);background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{--bs-form-switch-bg:url(' +
                    I +
                    ')}.form-switch .form-check-input:checked{background-position:right center;--bs-form-switch-bg:url(' +
                    M +
                    ')}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url(' +
                    G +
                    ')}.form-range{width:100%;height:1.5rem;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;-webkit-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:var(--bs-secondary-bg);border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;-moz-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:var(--bs-secondary-bg);border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:var(--bs-secondary-color)}.form-range:disabled::-moz-range-thumb{background-color:var(--bs-secondary-color)}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + calc(var(--bs-border-width) * 2));min-height:calc(3.5rem + calc(var(--bs-border-width) * 2));line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;z-index:2;height:100%;padding:1rem .75rem;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:var(--bs-border-width) solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::-moz-placeholder,.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control-plaintext:not(:-moz-placeholder-shown),.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:not(:-moz-placeholder-shown)~label::after{position:absolute;inset:1rem 0.375rem;z-index:-1;height:1.5em;content:"";background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius)}.form-floating>.form-control-plaintext~label::after,.form-floating>.form-control:focus~label::after,.form-floating>.form-control:not(:placeholder-shown)~label::after,.form-floating>.form-select~label::after{position:absolute;inset:1rem 0.375rem;z-index:-1;height:1.5em;content:"";background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius)}.form-floating>.form-control:-webkit-autofill~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label{border-width:var(--bs-border-width) 0}.form-floating>.form-control:disabled~label,.form-floating>:disabled~label{color:#6c757d}.form-floating>.form-control:disabled~label::after,.form-floating>:disabled~label::after{background-color:var(--bs-secondary-bg)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);text-align:center;white-space:nowrap;background-color:var(--bs-tertiary-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius)}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:calc(var(--bs-border-width) * -1);border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:var(--bs-form-valid-color)}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:var(--bs-success);border-radius:var(--bs-border-radius)}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:var(--bs-form-valid-border-color);padding-right:calc(1.5em + .75rem);background-image:url(' +
                    Y +
                    ');background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:var(--bs-form-valid-border-color)}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url(' +
                    Y +
                    ');padding-right:4.125rem;background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3rem + calc(1.5em + .75rem))}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:var(--bs-form-valid-border-color)}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:var(--bs-form-valid-color)}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:var(--bs-form-valid-color)}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:var(--bs-form-invalid-color)}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:var(--bs-danger);border-radius:var(--bs-border-radius)}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:var(--bs-form-invalid-border-color);padding-right:calc(1.5em + .75rem);background-image:url(' +
                    _ +
                    ');background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:var(--bs-form-invalid-border-color)}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url(' +
                    _ +
                    ');padding-right:4.125rem;background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3rem + calc(1.5em + .75rem))}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:var(--bs-form-invalid-border-color)}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:var(--bs-form-invalid-color)}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:var(--bs-form-invalid-color)}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:0.75rem;--bs-btn-padding-y:0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity:0.65;--bs-btn-focus-box-shadow:0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check+.btn:hover{color:var(--bs-btn-color);background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked:focus-visible+.btn{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:0 0 0 #000;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:0.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:var(--bs-border-radius-lg)}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:0.25rem;--bs-btn-padding-x:0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius:var(--bs-border-radius-sm)}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:var(--bs-body-color);--bs-dropdown-bg:var(--bs-body-bg);--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:var(--bs-border-radius);--bs-dropdown-border-width:var(--bs-border-width);--bs-dropdown-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:var(--bs-box-shadow);--bs-dropdown-link-color:var(--bs-body-color);--bs-dropdown-link-hover-color:var(--bs-body-color);--bs-dropdown-link-hover-bg:var(--bs-tertiary-bg);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:var(--bs-tertiary-color);--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0;border-radius:var(--bs-dropdown-item-border-radius,0)}.dropdown-item:focus,.dropdown-item:hover{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:var(--bs-border-radius)}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:calc(var(--bs-border-width) * -1)}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:calc(var(--bs-border-width) * -1)}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;background:0 0;border:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.nav-link.disabled,.nav-link:disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width:var(--bs-border-width);--bs-nav-tabs-border-color:var(--bs-border-color);--bs-nav-tabs-border-radius:var(--bs-border-radius);--bs-nav-tabs-link-hover-border-color:var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);--bs-nav-tabs-link-active-color:var(--bs-emphasis-color);--bs-nav-tabs-link-active-bg:var(--bs-body-bg);--bs-nav-tabs-link-active-border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(-1 * var(--bs-nav-tabs-border-width));border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(-1 * var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius:var(--bs-border-radius);--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-underline{--bs-nav-underline-gap:1rem;--bs-nav-underline-border-width:0.125rem;--bs-nav-underline-link-active-color:var(--bs-emphasis-color);gap:var(--bs-nav-underline-gap)}.nav-underline .nav-link{padding-right:0;padding-left:0;border-bottom:var(--bs-nav-underline-border-width) solid transparent}.nav-underline .nav-link:focus,.nav-underline .nav-link:hover{border-bottom-color:currentcolor}.nav-underline .nav-link.active,.nav-underline .show>.nav-link{font-weight:700;color:var(--bs-nav-underline-link-active-color);border-bottom-color:currentcolor}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:0.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), 0.65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), 0.8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), 0.3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:0.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:0.5rem;--bs-navbar-toggler-padding-y:0.25rem;--bs-navbar-toggler-padding-x:0.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url(' +
                    T +
                    ');--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), 0.15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:0.25rem;--bs-navbar-toggler-transition:box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link.active,.navbar-nav .nav-link.show{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark,.navbar[data-bs-theme=dark]{--bs-navbar-color:rgba(255, 255, 255, 0.55);--bs-navbar-hover-color:rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color:rgba(255, 255, 255, 0.25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg:url(' +
                    W +
                    ')}[data-bs-theme=dark] .navbar-toggler-icon{--bs-navbar-toggler-icon-bg:url(' +
                    W +
                    ')}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:0.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y:0.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb), 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y);color:var(--bs-card-title-color)}.card-subtitle{margin-top:calc(-.5 * var(--bs-card-title-spacer-y));margin-bottom:0;color:var(--bs-card-subtitle-color)}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-bottom:calc(-1 * var(--bs-card-cap-padding-y));margin-left:calc(-.5 * var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-left:calc(-.5 * var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url(' +
                    q +
                    ');--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url(' +
                    D +
                    ');--bs-accordion-btn-focus-box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text-emphasis);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:"";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media (prefers-reduced-motion:reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type>.accordion-header .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type>.accordion-header .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type>.accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush>.accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush>.accordion-item:first-child{border-top:0}.accordion-flush>.accordion-item:last-child{border-bottom:0}.accordion-flush>.accordion-item>.accordion-header .accordion-button,.accordion-flush>.accordion-item>.accordion-header .accordion-button.collapsed{border-radius:0}.accordion-flush>.accordion-item>.accordion-collapse{border-radius:0}[data-bs-theme=dark] .accordion-button::after{--bs-accordion-btn-icon:url(' +
                    Z +
                    ');--bs-accordion-btn-active-icon:url(' +
                    Z +
                    ')}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:var(--bs-secondary-color);--bs-breadcrumb-item-padding-x:0.5rem;--bs-breadcrumb-item-active-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, "/")}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:0.75rem;--bs-pagination-padding-y:0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:var(--bs-body-bg);--bs-pagination-border-width:var(--bs-border-width);--bs-pagination-border-color:var(--bs-border-color);--bs-pagination-border-radius:var(--bs-border-radius);--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:var(--bs-tertiary-bg);--bs-pagination-hover-border-color:var(--bs-border-color);--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:var(--bs-secondary-bg);--bs-pagination-focus-box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:var(--bs-secondary-color);--bs-pagination-disabled-bg:var(--bs-secondary-bg);--bs-pagination-disabled-border-color:var(--bs-border-color);display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.active>.page-link,.page-link.active{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.disabled>.page-link,.page-link.disabled{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:calc(var(--bs-border-width) * -1)}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:var(--bs-border-radius-lg)}.pagination-sm{--bs-pagination-padding-x:0.5rem;--bs-pagination-padding-y:0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius:var(--bs-border-radius-sm)}.badge{--bs-badge-padding-x:0.65em;--bs-badge-padding-y:0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:var(--bs-border-radius);display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700;color:var(--bs-alert-link-color)}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color:var(--bs-primary-text-emphasis);--bs-alert-bg:var(--bs-primary-bg-subtle);--bs-alert-border-color:var(--bs-primary-border-subtle);--bs-alert-link-color:var(--bs-primary-text-emphasis)}.alert-secondary{--bs-alert-color:var(--bs-secondary-text-emphasis);--bs-alert-bg:var(--bs-secondary-bg-subtle);--bs-alert-border-color:var(--bs-secondary-border-subtle);--bs-alert-link-color:var(--bs-secondary-text-emphasis)}.alert-success{--bs-alert-color:var(--bs-success-text-emphasis);--bs-alert-bg:var(--bs-success-bg-subtle);--bs-alert-border-color:var(--bs-success-border-subtle);--bs-alert-link-color:var(--bs-success-text-emphasis)}.alert-info{--bs-alert-color:var(--bs-info-text-emphasis);--bs-alert-bg:var(--bs-info-bg-subtle);--bs-alert-border-color:var(--bs-info-border-subtle);--bs-alert-link-color:var(--bs-info-text-emphasis)}.alert-warning{--bs-alert-color:var(--bs-warning-text-emphasis);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text-emphasis)}.alert-danger{--bs-alert-color:var(--bs-danger-text-emphasis);--bs-alert-bg:var(--bs-danger-bg-subtle);--bs-alert-border-color:var(--bs-danger-border-subtle);--bs-alert-link-color:var(--bs-danger-text-emphasis)}.alert-light{--bs-alert-color:var(--bs-light-text-emphasis);--bs-alert-bg:var(--bs-light-bg-subtle);--bs-alert-border-color:var(--bs-light-border-subtle);--bs-alert-link-color:var(--bs-light-text-emphasis)}.alert-dark{--bs-alert-color:var(--bs-dark-text-emphasis);--bs-alert-bg:var(--bs-dark-bg-subtle);--bs-alert-border-color:var(--bs-dark-border-subtle);--bs-alert-link-color:var(--bs-dark-text-emphasis)}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress,.progress-stacked{--bs-progress-height:1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-stacked>.progress{overflow:visible}.progress-stacked>.progress>.progress-bar{width:100%}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color:var(--bs-body-color);--bs-list-group-bg:var(--bs-body-bg);--bs-list-group-border-color:var(--bs-border-color);--bs-list-group-border-width:var(--bs-border-width);--bs-list-group-border-radius:var(--bs-border-radius);--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:0.5rem;--bs-list-group-action-color:var(--bs-secondary-color);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-tertiary-bg);--bs-list-group-action-active-color:var(--bs-body-color);--bs-list-group-action-active-bg:var(--bs-secondary-bg);--bs-list-group-disabled-color:var(--bs-secondary-color);--bs-list-group-disabled-bg:var(--bs-body-bg);--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item::before{content:counters(section, ".") ". ";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(-1 * var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{--bs-list-group-color:var(--bs-primary-text-emphasis);--bs-list-group-bg:var(--bs-primary-bg-subtle);--bs-list-group-border-color:var(--bs-primary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-primary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-primary-border-subtle);--bs-list-group-active-color:var(--bs-primary-bg-subtle);--bs-list-group-active-bg:var(--bs-primary-text-emphasis);--bs-list-group-active-border-color:var(--bs-primary-text-emphasis)}.list-group-item-secondary{--bs-list-group-color:var(--bs-secondary-text-emphasis);--bs-list-group-bg:var(--bs-secondary-bg-subtle);--bs-list-group-border-color:var(--bs-secondary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-secondary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-secondary-border-subtle);--bs-list-group-active-color:var(--bs-secondary-bg-subtle);--bs-list-group-active-bg:var(--bs-secondary-text-emphasis);--bs-list-group-active-border-color:var(--bs-secondary-text-emphasis)}.list-group-item-success{--bs-list-group-color:var(--bs-success-text-emphasis);--bs-list-group-bg:var(--bs-success-bg-subtle);--bs-list-group-border-color:var(--bs-success-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-success-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-success-border-subtle);--bs-list-group-active-color:var(--bs-success-bg-subtle);--bs-list-group-active-bg:var(--bs-success-text-emphasis);--bs-list-group-active-border-color:var(--bs-success-text-emphasis)}.list-group-item-info{--bs-list-group-color:var(--bs-info-text-emphasis);--bs-list-group-bg:var(--bs-info-bg-subtle);--bs-list-group-border-color:var(--bs-info-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-info-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-info-border-subtle);--bs-list-group-active-color:var(--bs-info-bg-subtle);--bs-list-group-active-bg:var(--bs-info-text-emphasis);--bs-list-group-active-border-color:var(--bs-info-text-emphasis)}.list-group-item-warning{--bs-list-group-color:var(--bs-warning-text-emphasis);--bs-list-group-bg:var(--bs-warning-bg-subtle);--bs-list-group-border-color:var(--bs-warning-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-warning-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-warning-border-subtle);--bs-list-group-active-color:var(--bs-warning-bg-subtle);--bs-list-group-active-bg:var(--bs-warning-text-emphasis);--bs-list-group-active-border-color:var(--bs-warning-text-emphasis)}.list-group-item-danger{--bs-list-group-color:var(--bs-danger-text-emphasis);--bs-list-group-bg:var(--bs-danger-bg-subtle);--bs-list-group-border-color:var(--bs-danger-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-danger-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-danger-border-subtle);--bs-list-group-active-color:var(--bs-danger-bg-subtle);--bs-list-group-active-bg:var(--bs-danger-text-emphasis);--bs-list-group-active-border-color:var(--bs-danger-text-emphasis)}.list-group-item-light{--bs-list-group-color:var(--bs-light-text-emphasis);--bs-list-group-bg:var(--bs-light-bg-subtle);--bs-list-group-border-color:var(--bs-light-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-light-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-light-border-subtle);--bs-list-group-active-color:var(--bs-light-bg-subtle);--bs-list-group-active-bg:var(--bs-light-text-emphasis);--bs-list-group-active-border-color:var(--bs-light-text-emphasis)}.list-group-item-dark{--bs-list-group-color:var(--bs-dark-text-emphasis);--bs-list-group-bg:var(--bs-dark-bg-subtle);--bs-list-group-border-color:var(--bs-dark-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-dark-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-dark-border-subtle);--bs-list-group-active-color:var(--bs-dark-bg-subtle);--bs-list-group-active-bg:var(--bs-dark-text-emphasis);--bs-list-group-active-border-color:var(--bs-dark-text-emphasis)}.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url(' +
                    F +
                    ');--bs-btn-close-opacity:0.5;--bs-btn-close-hover-opacity:0.75;--bs-btn-close-focus-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:0.25;--bs-btn-close-white-filter:invert(1) grayscale(100%) brightness(200%);box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:var(--bs-btn-close-color);background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:var(--bs-btn-close-opacity)}.btn-close:hover{color:var(--bs-btn-close-color);text-decoration:none;opacity:var(--bs-btn-close-hover-opacity)}.btn-close:focus{outline:0;box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity)}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--bs-btn-close-disabled-opacity)}.btn-close-white{filter:var(--bs-btn-close-white-filter)}[data-bs-theme=dark] .btn-close{filter:var(--bs-btn-close-white-filter)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:0.75rem;--bs-toast-padding-y:0.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb), 0.85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb), 0.85);--bs-toast-header-border-color:var(--bs-border-color-translucent);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex:1090;position:absolute;z-index:var(--bs-toast-zindex);width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(-.5 * var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-color: ;--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:var(--bs-box-shadow-sm);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin) * 2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin) * 2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);margin:calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * .5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:var(--bs-box-shadow)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:0.5rem;--bs-tooltip-padding-y:0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:0.9;--bs-tooltip-arrow-width:0.8rem;--bs-tooltip-arrow-height:0.4rem;z-index:var(--bs-tooltip-zindex);display:block;margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:calc(-1 * var(--bs-tooltip-arrow-height))}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:calc(-1 * var(--bs-tooltip-arrow-height))}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:0.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:var(--bs-box-shadow);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color:inherit;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:0.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid;border-width:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-top>.popover-arrow::before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-end>.popover-arrow::before{border-width:calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::before{border-width:0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(-.5 * var(--bs-popover-arrow-width));content:"";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-start>.popover-arrow::before{border-width:calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(' +
                    U +
                    ')}.carousel-control-next-icon{background-image:url(' +
                    V +
                    ')}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}[data-bs-theme=dark] .carousel .carousel-control-next-icon,[data-bs-theme=dark] .carousel .carousel-control-prev-icon,[data-bs-theme=dark].carousel .carousel-control-next-icon,[data-bs-theme=dark].carousel .carousel-control-prev-icon{filter:invert(1) grayscale(100)}[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target],[data-bs-theme=dark].carousel .carousel-indicators [data-bs-target]{background-color:#000}[data-bs-theme=dark] .carousel .carousel-caption,[data-bs-theme=dark].carousel .carousel-caption{color:#000}.spinner-border,.spinner-grow{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-border-width:0.25em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:transparent}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:var(--bs-box-shadow-sm);--bs-offcanvas-transition:transform 0.3s ease-in-out;--bs-offcanvas-title-line-height:1.5}@media (max-width:575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (max-width:767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);margin:calc(-.5 * var(--bs-offcanvas-padding-y)) calc(-.5 * var(--bs-offcanvas-padding-x)) calc(-.5 * var(--bs-offcanvas-padding-y)) auto}.offcanvas-title{margin-bottom:0;line-height:var(--bs-offcanvas-title-line-height)}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:""}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:""}.text-bg-primary{color:#fff!important;background-color:RGBA(var(--bs-primary-rgb),var(--bs-bg-opacity,1))!important}.text-bg-secondary{color:#fff!important;background-color:RGBA(var(--bs-secondary-rgb),var(--bs-bg-opacity,1))!important}.text-bg-success{color:#fff!important;background-color:RGBA(var(--bs-success-rgb),var(--bs-bg-opacity,1))!important}.text-bg-info{color:#000!important;background-color:RGBA(var(--bs-info-rgb),var(--bs-bg-opacity,1))!important}.text-bg-warning{color:#000!important;background-color:RGBA(var(--bs-warning-rgb),var(--bs-bg-opacity,1))!important}.text-bg-danger{color:#fff!important;background-color:RGBA(var(--bs-danger-rgb),var(--bs-bg-opacity,1))!important}.text-bg-light{color:#000!important;background-color:RGBA(var(--bs-light-rgb),var(--bs-bg-opacity,1))!important}.text-bg-dark{color:#fff!important;background-color:RGBA(var(--bs-dark-rgb),var(--bs-bg-opacity,1))!important}.link-primary{color:RGBA(var(--bs-primary-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important}.link-primary:focus,.link-primary:hover{color:RGBA(10,88,202,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important}.link-secondary{color:RGBA(var(--bs-secondary-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important}.link-secondary:focus,.link-secondary:hover{color:RGBA(86,94,100,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important}.link-success{color:RGBA(var(--bs-success-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important}.link-success:focus,.link-success:hover{color:RGBA(20,108,67,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important}.link-info{color:RGBA(var(--bs-info-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important}.link-info:focus,.link-info:hover{color:RGBA(61,213,243,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important}.link-warning{color:RGBA(var(--bs-warning-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important}.link-warning:focus,.link-warning:hover{color:RGBA(255,205,57,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important}.link-danger{color:RGBA(var(--bs-danger-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important}.link-danger:focus,.link-danger:hover{color:RGBA(176,42,55,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important}.link-light{color:RGBA(var(--bs-light-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important}.link-light:focus,.link-light:hover{color:RGBA(249,250,251,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important}.link-dark{color:RGBA(var(--bs-dark-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important}.link-dark:focus,.link-dark:hover{color:RGBA(26,30,33,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important}.link-body-emphasis{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-body-emphasis:focus,.link-body-emphasis:hover{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,.75))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,0.75))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,0.75))!important}.focus-ring:focus{outline:0;box-shadow:var(--bs-focus-ring-x,0) var(--bs-focus-ring-y,0) var(--bs-focus-ring-blur,0) var(--bs-focus-ring-width) var(--bs-focus-ring-color)}.icon-link{display:inline-flex;gap:.375rem;align-items:center;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,0.5));text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,0.5));text-underline-offset:0.25em;-webkit-backface-visibility:hidden;backface-visibility:hidden}.icon-link>.bi{flex-shrink:0;width:1em;height:1em;fill:currentcolor;transition:.2s ease-in-out transform}@media (prefers-reduced-motion:reduce){.icon-link>.bi{transition:none}}.icon-link-hover:focus-visible>.bi,.icon-link-hover:hover>.bi{transform:var(--bs-icon-link-transform,translate3d(.25em,0,0))}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:""}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption),.visually-hidden:not(caption){position:absolute!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:""}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:var(--bs-border-width);min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.object-fit-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-none{-o-object-fit:none!important;object-fit:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.overflow-x-auto{overflow-x:auto!important}.overflow-x-hidden{overflow-x:hidden!important}.overflow-x-visible{overflow-x:visible!important}.overflow-x-scroll{overflow-x:scroll!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-hidden{overflow-y:hidden!important}.overflow-y-visible{overflow-y:visible!important}.overflow-y-scroll{overflow-y:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-inline-grid{display:inline-grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:var(--bs-box-shadow)!important}.shadow-sm{box-shadow:var(--bs-box-shadow-sm)!important}.shadow-lg{box-shadow:var(--bs-box-shadow-lg)!important}.shadow-none{box-shadow:none!important}.focus-ring-primary{--bs-focus-ring-color:rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity))}.focus-ring-secondary{--bs-focus-ring-color:rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity))}.focus-ring-success{--bs-focus-ring-color:rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity))}.focus-ring-info{--bs-focus-ring-color:rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity))}.focus-ring-warning{--bs-focus-ring-color:rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity))}.focus-ring-danger{--bs-focus-ring-color:rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity))}.focus-ring-light{--bs-focus-ring-color:rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity))}.focus-ring-dark{--bs-focus-ring-color:rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity))}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-black{--bs-border-opacity:1;border-color:rgba(var(--bs-black-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-primary-subtle{border-color:var(--bs-primary-border-subtle)!important}.border-secondary-subtle{border-color:var(--bs-secondary-border-subtle)!important}.border-success-subtle{border-color:var(--bs-success-border-subtle)!important}.border-info-subtle{border-color:var(--bs-info-border-subtle)!important}.border-warning-subtle{border-color:var(--bs-warning-border-subtle)!important}.border-danger-subtle{border-color:var(--bs-danger-border-subtle)!important}.border-light-subtle{border-color:var(--bs-light-border-subtle)!important}.border-dark-subtle{border-color:var(--bs-dark-border-subtle)!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.border-opacity-10{--bs-border-opacity:0.1}.border-opacity-25{--bs-border-opacity:0.25}.border-opacity-50{--bs-border-opacity:0.5}.border-opacity-75{--bs-border-opacity:0.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.row-gap-0{row-gap:0!important}.row-gap-1{row-gap:.25rem!important}.row-gap-2{row-gap:.5rem!important}.row-gap-3{row-gap:1rem!important}.row-gap-4{row-gap:1.5rem!important}.row-gap-5{row-gap:3rem!important}.column-gap-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-lighter{font-weight:lighter!important}.fw-light{font-weight:300!important}.fw-normal{font-weight:400!important}.fw-medium{font-weight:500!important}.fw-semibold{font-weight:600!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}.text-white-50{--bs-text-opacity:1;color:rgba(255,255,255,.5)!important}.text-body-secondary{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-body-tertiary{--bs-text-opacity:1;color:var(--bs-tertiary-color)!important}.text-body-emphasis{--bs-text-opacity:1;color:var(--bs-emphasis-color)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:0.25}.text-opacity-50{--bs-text-opacity:0.5}.text-opacity-75{--bs-text-opacity:0.75}.text-opacity-100{--bs-text-opacity:1}.text-primary-emphasis{color:var(--bs-primary-text-emphasis)!important}.text-secondary-emphasis{color:var(--bs-secondary-text-emphasis)!important}.text-success-emphasis{color:var(--bs-success-text-emphasis)!important}.text-info-emphasis{color:var(--bs-info-text-emphasis)!important}.text-warning-emphasis{color:var(--bs-warning-text-emphasis)!important}.text-danger-emphasis{color:var(--bs-danger-text-emphasis)!important}.text-light-emphasis{color:var(--bs-light-text-emphasis)!important}.text-dark-emphasis{color:var(--bs-dark-text-emphasis)!important}.link-opacity-10{--bs-link-opacity:0.1}.link-opacity-10-hover:hover{--bs-link-opacity:0.1}.link-opacity-25{--bs-link-opacity:0.25}.link-opacity-25-hover:hover{--bs-link-opacity:0.25}.link-opacity-50{--bs-link-opacity:0.5}.link-opacity-50-hover:hover{--bs-link-opacity:0.5}.link-opacity-75{--bs-link-opacity:0.75}.link-opacity-75-hover:hover{--bs-link-opacity:0.75}.link-opacity-100{--bs-link-opacity:1}.link-opacity-100-hover:hover{--bs-link-opacity:1}.link-offset-1{text-underline-offset:0.125em!important}.link-offset-1-hover:hover{text-underline-offset:0.125em!important}.link-offset-2{text-underline-offset:0.25em!important}.link-offset-2-hover:hover{text-underline-offset:0.25em!important}.link-offset-3{text-underline-offset:0.375em!important}.link-offset-3-hover:hover{text-underline-offset:0.375em!important}.link-underline-primary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-secondary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-success{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important}.link-underline-info{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important}.link-underline-warning{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important}.link-underline-danger{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important}.link-underline-light{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important}.link-underline-dark{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important}.link-underline{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-underline-opacity-0{--bs-link-underline-opacity:0}.link-underline-opacity-0-hover:hover{--bs-link-underline-opacity:0}.link-underline-opacity-10{--bs-link-underline-opacity:0.1}.link-underline-opacity-10-hover:hover{--bs-link-underline-opacity:0.1}.link-underline-opacity-25{--bs-link-underline-opacity:0.25}.link-underline-opacity-25-hover:hover{--bs-link-underline-opacity:0.25}.link-underline-opacity-50{--bs-link-underline-opacity:0.5}.link-underline-opacity-50-hover:hover{--bs-link-underline-opacity:0.5}.link-underline-opacity-75{--bs-link-underline-opacity:0.75}.link-underline-opacity-75-hover:hover{--bs-link-underline-opacity:0.75}.link-underline-opacity-100{--bs-link-underline-opacity:1}.link-underline-opacity-100-hover:hover{--bs-link-underline-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-body-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-bg-rgb),var(--bs-bg-opacity))!important}.bg-body-tertiary{--bs-bg-opacity:1;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}.bg-opacity-10{--bs-bg-opacity:0.1}.bg-opacity-25{--bs-bg-opacity:0.25}.bg-opacity-50{--bs-bg-opacity:0.5}.bg-opacity-75{--bs-bg-opacity:0.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-primary-subtle{background-color:var(--bs-primary-bg-subtle)!important}.bg-secondary-subtle{background-color:var(--bs-secondary-bg-subtle)!important}.bg-success-subtle{background-color:var(--bs-success-bg-subtle)!important}.bg-info-subtle{background-color:var(--bs-info-bg-subtle)!important}.bg-warning-subtle{background-color:var(--bs-warning-bg-subtle)!important}.bg-danger-subtle{background-color:var(--bs-danger-bg-subtle)!important}.bg-light-subtle{background-color:var(--bs-light-bg-subtle)!important}.bg-dark-subtle{background-color:var(--bs-dark-bg-subtle)!important}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:var(--bs-border-radius-xxl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-top-1{border-top-left-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-top-2{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-3{border-top-left-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-top-4{border-top-left-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-top-5{border-top-left-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}.rounded-top-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.rounded-top-pill{border-top-left-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-end{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-end-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-end-1{border-top-right-radius:var(--bs-border-radius-sm)!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important}.rounded-end-2{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-end-3{border-top-right-radius:var(--bs-border-radius-lg)!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important}.rounded-end-4{border-top-right-radius:var(--bs-border-radius-xl)!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important}.rounded-end-5{border-top-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-right-radius:var(--bs-border-radius-xxl)!important}.rounded-end-circle{border-top-right-radius:50%!important;border-bottom-right-radius:50%!important}.rounded-end-pill{border-top-right-radius:var(--bs-border-radius-pill)!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-bottom-1{border-bottom-right-radius:var(--bs-border-radius-sm)!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important}.rounded-bottom-2{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-bottom-3{border-bottom-right-radius:var(--bs-border-radius-lg)!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important}.rounded-bottom-4{border-bottom-right-radius:var(--bs-border-radius-xl)!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important}.rounded-bottom-5{border-bottom-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-left-radius:var(--bs-border-radius-xxl)!important}.rounded-bottom-circle{border-bottom-right-radius:50%!important;border-bottom-left-radius:50%!important}.rounded-bottom-pill{border-bottom-right-radius:var(--bs-border-radius-pill)!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-start-1{border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-top-left-radius:var(--bs-border-radius-sm)!important}.rounded-start-2{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-3{border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-top-left-radius:var(--bs-border-radius-lg)!important}.rounded-start-4{border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-top-left-radius:var(--bs-border-radius-xl)!important}.rounded-start-5{border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-top-left-radius:var(--bs-border-radius-xxl)!important}.rounded-start-circle{border-bottom-left-radius:50%!important;border-top-left-radius:50%!important}.rounded-start-pill{border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-top-left-radius:var(--bs-border-radius-pill)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}.z-n1{z-index:-1!important}.z-0{z-index:0!important}.z-1{z-index:1!important}.z-2{z-index:2!important}.z-3{z-index:3!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.object-fit-sm-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-sm-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-sm-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-sm-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-sm-none{-o-object-fit:none!important;object-fit:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-inline-grid{display:inline-grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.row-gap-sm-0{row-gap:0!important}.row-gap-sm-1{row-gap:.25rem!important}.row-gap-sm-2{row-gap:.5rem!important}.row-gap-sm-3{row-gap:1rem!important}.row-gap-sm-4{row-gap:1.5rem!important}.row-gap-sm-5{row-gap:3rem!important}.column-gap-sm-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-sm-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-sm-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-sm-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-sm-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-sm-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.object-fit-md-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-md-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-md-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-md-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-md-none{-o-object-fit:none!important;object-fit:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-inline-grid{display:inline-grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.row-gap-md-0{row-gap:0!important}.row-gap-md-1{row-gap:.25rem!important}.row-gap-md-2{row-gap:.5rem!important}.row-gap-md-3{row-gap:1rem!important}.row-gap-md-4{row-gap:1.5rem!important}.row-gap-md-5{row-gap:3rem!important}.column-gap-md-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-md-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-md-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-md-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-md-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-md-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.object-fit-lg-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-lg-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-lg-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-lg-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-lg-none{-o-object-fit:none!important;object-fit:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-inline-grid{display:inline-grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.row-gap-lg-0{row-gap:0!important}.row-gap-lg-1{row-gap:.25rem!important}.row-gap-lg-2{row-gap:.5rem!important}.row-gap-lg-3{row-gap:1rem!important}.row-gap-lg-4{row-gap:1.5rem!important}.row-gap-lg-5{row-gap:3rem!important}.column-gap-lg-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-lg-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-lg-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-lg-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-lg-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-lg-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.object-fit-xl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xl-none{-o-object-fit:none!important;object-fit:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-inline-grid{display:inline-grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.row-gap-xl-0{row-gap:0!important}.row-gap-xl-1{row-gap:.25rem!important}.row-gap-xl-2{row-gap:.5rem!important}.row-gap-xl-3{row-gap:1rem!important}.row-gap-xl-4{row-gap:1.5rem!important}.row-gap-xl-5{row-gap:3rem!important}.column-gap-xl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xl-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-xl-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-xl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.object-fit-xxl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xxl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xxl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xxl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xxl-none{-o-object-fit:none!important;object-fit:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-inline-grid{display:inline-grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.row-gap-xxl-0{row-gap:0!important}.row-gap-xxl-1{row-gap:.25rem!important}.row-gap-xxl-2{row-gap:.5rem!important}.row-gap-xxl-3{row-gap:1rem!important}.row-gap-xxl-4{row-gap:1.5rem!important}.row-gap-xxl-5{row-gap:3rem!important}.column-gap-xxl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xxl-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-xxl-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-xxl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xxl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xxl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-inline-grid{display:inline-grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}',
                '',
            ]);
            const H = E;
        },
        14888: (r) => {
            'use strict';
            r.exports = function (r, t) {
                return (
                    t || (t = {}),
                    r
                        ? ((r = String(r.__esModule ? r.default : r)),
                          /^['"].*['"]$/.test(r) && (r = r.slice(1, -1)),
                          t.hash && (r += t.hash),
                          /["'() \t\n]|(%20)/.test(r) || t.needQuotes
                              ? '"'.concat(
                                    r
                                        .replace(/"/g, '\\"')
                                        .replace(/\n/g, '\\n'),
                                    '"'
                                )
                              : r)
                        : r
                );
            };
        },
        15154: (r) => {
            var t = 'undefined' != typeof Element,
                o = 'function' == typeof Map,
                a = 'function' == typeof Set,
                e = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
            function n(r, i) {
                if (r === i) return !0;
                if (r && i && 'object' == typeof r && 'object' == typeof i) {
                    if (r.constructor !== i.constructor) return !1;
                    var l, s, d, b;
                    if (Array.isArray(r)) {
                        if ((l = r.length) != i.length) return !1;
                        for (s = l; 0 != s--; ) if (!n(r[s], i[s])) return !1;
                        return !0;
                    }
                    if (o && r instanceof Map && i instanceof Map) {
                        if (r.size !== i.size) return !1;
                        for (b = r.entries(); !(s = b.next()).done; )
                            if (!i.has(s.value[0])) return !1;
                        for (b = r.entries(); !(s = b.next()).done; )
                            if (!n(s.value[1], i.get(s.value[0]))) return !1;
                        return !0;
                    }
                    if (a && r instanceof Set && i instanceof Set) {
                        if (r.size !== i.size) return !1;
                        for (b = r.entries(); !(s = b.next()).done; )
                            if (!i.has(s.value[0])) return !1;
                        return !0;
                    }
                    if (e && ArrayBuffer.isView(r) && ArrayBuffer.isView(i)) {
                        if ((l = r.length) != i.length) return !1;
                        for (s = l; 0 != s--; ) if (r[s] !== i[s]) return !1;
                        return !0;
                    }
                    if (r.constructor === RegExp)
                        return r.source === i.source && r.flags === i.flags;
                    if (
                        r.valueOf !== Object.prototype.valueOf &&
                        'function' == typeof r.valueOf &&
                        'function' == typeof i.valueOf
                    )
                        return r.valueOf() === i.valueOf();
                    if (
                        r.toString !== Object.prototype.toString &&
                        'function' == typeof r.toString &&
                        'function' == typeof i.toString
                    )
                        return r.toString() === i.toString();
                    if (
                        (l = (d = Object.keys(r)).length) !==
                        Object.keys(i).length
                    )
                        return !1;
                    for (s = l; 0 != s--; )
                        if (!Object.prototype.hasOwnProperty.call(i, d[s]))
                            return !1;
                    if (t && r instanceof Element) return !1;
                    for (s = l; 0 != s--; )
                        if (
                            (('_owner' !== d[s] &&
                                '__v' !== d[s] &&
                                '__o' !== d[s]) ||
                                !r.$$typeof) &&
                            !n(r[d[s]], i[d[s]])
                        )
                            return !1;
                    return !0;
                }
                return r != r && i != i;
            }
            r.exports = function (r, t) {
                try {
                    return n(r, t);
                } catch (r) {
                    if ((r.message || '').match(/stack|recursion/i))
                        return (
                            console.warn(
                                'react-fast-compare cannot handle circular refs'
                            ),
                            !1
                        );
                    throw r;
                }
            };
        },
        5519: (r, t, o) => {
            'use strict';
            var a = o(57856),
                e = o.n(a),
                n = o(38470),
                i = o.n(n),
                l = o(28458),
                s = o.n(l),
                d = o(71278),
                b = o.n(d),
                c = o(29488),
                m = o.n(c),
                p = o(20947),
                g = {};
            (g.styleTagTransform = m()),
                (g.setAttributes = s()),
                (g.insert = function (r) {
                    var t = document.querySelector('head'),
                        o = window._lastElementInsertedByStyleLoader;
                    o
                        ? o.nextSibling
                            ? t.insertBefore(r, o.nextSibling)
                            : t.appendChild(r)
                        : t.insertBefore(r, t.firstChild),
                        (window._lastElementInsertedByStyleLoader = r);
                }),
                (g.domAPI = i()),
                (g.insertStyleElement = b()),
                e()(p.Z, g),
                p.Z && p.Z.locals && p.Z.locals;
        },
        14207: (r, t, o) => {
            'use strict';
            var a = o(57856),
                e = o.n(a),
                n = o(38470),
                i = o.n(n),
                l = o(28458),
                s = o.n(l),
                d = o(71278),
                b = o.n(d),
                c = o(29488),
                m = o.n(c),
                p = o(95460),
                g = {};
            (g.styleTagTransform = m()),
                (g.setAttributes = s()),
                (g.insert = function (r) {
                    var t = document.querySelector('head'),
                        o = window._lastElementInsertedByStyleLoader;
                    o
                        ? o.nextSibling
                            ? t.insertBefore(r, o.nextSibling)
                            : t.appendChild(r)
                        : t.insertBefore(r, t.firstChild),
                        (window._lastElementInsertedByStyleLoader = r);
                }),
                (g.domAPI = i()),
                (g.insertStyleElement = b()),
                e()(p.Z, g),
                p.Z && p.Z.locals && p.Z.locals;
        },
        11029: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e';
        },
        79609: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e';
        },
        42469: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e';
        },
        17486: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e';
        },
        80991: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e';
        },
        54144: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e';
        },
        16254: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e';
        },
        31281: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e';
        },
        25647: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e';
        },
        81692: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e';
        },
        90819: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e';
        },
        26588: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e';
        },
        96770: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e';
        },
        46711: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e';
        },
        78931: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e';
        },
        46199: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e';
        },
        62956: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e';
        },
        32221: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e';
        },
        45122: (r) => {
            'use strict';
            r.exports =
                'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e';
        },
    },
]);
