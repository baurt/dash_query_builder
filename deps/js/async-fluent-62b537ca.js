'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [509],
    {
        8249: (e, o, r) => {
            r.d(o, {mR: () => i, tf: () => n});
            var t = r(96583),
                i = {
                    formatDay: function (e) {
                        return e.getDate().toString();
                    },
                    formatMonth: function (e, o) {
                        return o.months[e.getMonth()];
                    },
                    formatYear: function (e) {
                        return e.getFullYear().toString();
                    },
                    formatMonthDayYear: function (e, o) {
                        return (
                            o.months[e.getMonth()] +
                            ' ' +
                            e.getDate() +
                            ', ' +
                            e.getFullYear()
                        );
                    },
                    formatMonthYear: function (e, o) {
                        return o.months[e.getMonth()] + ' ' + e.getFullYear();
                    },
                },
                n = (0, t.pi)(
                    (0, t.pi)(
                        {},
                        {
                            months: [
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                            ],
                            shortMonths: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ],
                            days: [
                                'Sunday',
                                'Monday',
                                'Tuesday',
                                'Wednesday',
                                'Thursday',
                                'Friday',
                                'Saturday',
                            ],
                            shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                        }
                    ),
                    {
                        goToToday: 'Go to today',
                        weekNumberFormatString: 'Week number {0}',
                        prevMonthAriaLabel: 'Previous month',
                        nextMonthAriaLabel: 'Next month',
                        prevYearAriaLabel: 'Previous year',
                        nextYearAriaLabel: 'Next year',
                        prevYearRangeAriaLabel: 'Previous year range',
                        nextYearRangeAriaLabel: 'Next year range',
                        closeButtonAriaLabel: 'Close',
                        selectedDateFormatString: 'Selected date {0}',
                        todayDateFormatString: "Today's date {0}",
                        monthPickerHeaderAriaLabel: '{0}, change year',
                        yearPickerHeaderAriaLabel: '{0}, change month',
                        dayMarkedAriaLabel: 'marked',
                    }
                );
        },
        56558: (e, o, r) => {
            r.d(o, {e: () => s});
            var t = r(96583),
                i = r(85577),
                n = r(40468),
                a = r(72766),
                l = r(94981),
                s = function (e) {
                    var o = e.targetDate,
                        r = e.initialDate,
                        s = e.direction,
                        c = (0, t._T)(e, [
                            'targetDate',
                            'initialDate',
                            'direction',
                        ]),
                        d = o;
                    if (!(0, i.f)(o, c)) return o;
                    for (
                        ;
                        0 !== (0, l.NJ)(r, d) &&
                        (0, i.f)(d, c) &&
                        !(0, n.g)(d, c) &&
                        !(0, a.I)(d, c);

                    )
                        d = (0, l.E4)(d, s);
                    return 0 === (0, l.NJ)(r, d) || (0, i.f)(d, c) ? void 0 : d;
                };
        },
        64137: (e, o, r) => {
            r.d(o, {x: () => n});
            var t = r(96583),
                i = r(94981),
                n = function (e, o, r) {
                    var n = (0, t.ev)([], e, !0);
                    return (
                        o &&
                            (n = n.filter(function (e) {
                                return (0, i.NJ)(e, o) >= 0;
                            })),
                        r &&
                            (n = n.filter(function (e) {
                                return (0, i.NJ)(e, r) <= 0;
                            })),
                        n
                    );
                };
        },
        36061: (e, o, r) => {
            r.d(o, {m: () => l});
            var t = r(94981),
                i = r(56414),
                n = r(64137),
                a = r(85577),
                l = function (e) {
                    var o,
                        r = e.selectedDate,
                        l = e.dateRangeType,
                        s = e.firstDayOfWeek,
                        c = e.today,
                        d = e.minDate,
                        u = e.maxDate,
                        g = e.weeksToShow,
                        S = e.workWeekDays,
                        f = e.daysToSelectInDayView,
                        m = e.restrictedDates,
                        h = e.markedDays,
                        p = {minDate: d, maxDate: u, restrictedDates: m},
                        C = c || new Date(),
                        F = e.navigatedDate ? e.navigatedDate : C;
                    o =
                        g && g <= 4
                            ? new Date(
                                  F.getFullYear(),
                                  F.getMonth(),
                                  F.getDate()
                              )
                            : new Date(F.getFullYear(), F.getMonth(), 1);
                    for (var L = []; o.getDay() !== s; )
                        o.setDate(o.getDate() - 1);
                    o = (0, t.E4)(o, -i.NA);
                    var y = !1,
                        M = (function (e, o, r) {
                            return !o ||
                                e !== i.NU.WorkWeek ||
                                ((function (e, o, r) {
                                    for (
                                        var t = new Set(e), i = 0, n = 0, a = e;
                                        n < a.length;
                                        n++
                                    ) {
                                        var l = (a[n] + 1) % 7;
                                        (!t.has(l) || r === l) && i++;
                                    }
                                    return i < 2;
                                })(o, 0, r) &&
                                    0 !== o.length)
                                ? e
                                : i.NU.Week;
                        })(l, S, s),
                        v = [];
                    r &&
                        ((v = (0, t.e0)(r, M, s, S, f)),
                        (v = (0, n.x)(v, d, u)));
                    for (var D = !0, k = 0; D; k++) {
                        var b = [];
                        y = !0;
                        for (
                            var T = function (e) {
                                    var r = new Date(o.getTime()),
                                        i = {
                                            key: o.toString(),
                                            date: o.getDate().toString(),
                                            originalDate: r,
                                            isInMonth:
                                                o.getMonth() === F.getMonth(),
                                            isToday: (0, t.aN)(C, o),
                                            isSelected: (0, t.le)(o, v),
                                            isInBounds: !(0, a.f)(o, p),
                                            isMarked:
                                                (null == h
                                                    ? void 0
                                                    : h.some(function (e) {
                                                          return (0, t.aN)(
                                                              r,
                                                              e
                                                          );
                                                      })) || !1,
                                        };
                                    b.push(i),
                                        i.isInMonth && (y = !1),
                                        o.setDate(o.getDate() + 1);
                                },
                                w = 0;
                            w < i.NA;
                            w++
                        )
                            T();
                        (D = g ? k < g + 1 : !y || 0 === k), L.push(b);
                    }
                    return L;
                };
        },
        40468: (e, o, r) => {
            r.d(o, {g: () => i});
            var t = r(94981),
                i = function (e, o) {
                    var r = o.maxDate;
                    return !!r && (0, t.NJ)(e, r) >= 1;
                };
        },
        72766: (e, o, r) => {
            r.d(o, {I: () => i});
            var t = r(94981),
                i = function (e, o) {
                    var r = o.minDate;
                    return !!r && (0, t.NJ)(r, e) >= 1;
                };
        },
        85577: (e, o, r) => {
            r.d(o, {f: () => a});
            var t = r(94981),
                i = r(72766),
                n = r(40468),
                a = function (e, o) {
                    var r = o.restrictedDates,
                        a = o.minDate,
                        l = o.maxDate;
                    return (
                        !!(r || a || l) &&
                        ((r &&
                            r.some(function (o) {
                                return (0, t.aN)(o, e);
                            })) ||
                            (0, i.I)(e, o) ||
                            (0, n.g)(e, o))
                    );
                };
        },
        94981: (e, o, r) => {
            r.d(o, {
                Bc: () => s,
                D7: () => d,
                E4: () => n,
                NJ: () => m,
                Q9: () => g,
                W8: () => u,
                aN: () => f,
                c8: () => y,
                e0: () => h,
                iU: () => C,
                jh: () => a,
                le: () => p,
                pU: () => c,
                q0: () => S,
                zI: () => l,
            });
            var t = r(56414),
                i = r(34532);
            function n(e, o) {
                var r = new Date(e.getTime());
                return r.setDate(r.getDate() + o), r;
            }
            function a(e, o) {
                return n(e, o * i.r.DaysInOneWeek);
            }
            function l(e, o) {
                var r = new Date(e.getTime()),
                    t = r.getMonth() + o;
                return (
                    r.setMonth(t),
                    r.getMonth() !==
                        ((t % i.r.MonthInOneYear) + i.r.MonthInOneYear) %
                            i.r.MonthInOneYear && (r = n(r, -r.getDate())),
                    r
                );
            }
            function s(e, o) {
                var r = new Date(e.getTime());
                return (
                    r.setFullYear(e.getFullYear() + o),
                    r.getMonth() !==
                        ((e.getMonth() % i.r.MonthInOneYear) +
                            i.r.MonthInOneYear) %
                            i.r.MonthInOneYear && (r = n(r, -r.getDate())),
                    r
                );
            }
            function c(e) {
                return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
            }
            function d(e) {
                return new Date(
                    e.getFullYear(),
                    e.getMonth() + 1,
                    0,
                    0,
                    0,
                    0,
                    0
                );
            }
            function u(e) {
                return new Date(e.getFullYear(), 0, 1, 0, 0, 0, 0);
            }
            function g(e) {
                return new Date(e.getFullYear() + 1, 0, 0, 0, 0, 0, 0);
            }
            function S(e, o) {
                return l(e, o - e.getMonth());
            }
            function f(e, o) {
                return (
                    (!e && !o) ||
                    (!(!e || !o) &&
                        e.getFullYear() === o.getFullYear() &&
                        e.getMonth() === o.getMonth() &&
                        e.getDate() === o.getDate())
                );
            }
            function m(e, o) {
                return y(e) - y(o);
            }
            function h(e, o, r, a, s) {
                void 0 === s && (s = 1);
                var c,
                    d = [],
                    u = null;
                switch (
                    (a ||
                        (a = [
                            t.eO.Monday,
                            t.eO.Tuesday,
                            t.eO.Wednesday,
                            t.eO.Thursday,
                            t.eO.Friday,
                        ]),
                    (s = Math.max(s, 1)),
                    o)
                ) {
                    case t.NU.Day:
                        u = n((c = L(e)), s);
                        break;
                    case t.NU.Week:
                    case t.NU.WorkWeek:
                        (c = (function (e, o) {
                            var r = o - e.getDay();
                            return r > 0 && (r -= i.r.DaysInOneWeek), n(e, r);
                        })(L(e), r)),
                            (u = n(c, i.r.DaysInOneWeek));
                        break;
                    case t.NU.Month:
                        u = l(
                            (c = new Date(e.getFullYear(), e.getMonth(), 1)),
                            1
                        );
                        break;
                    default:
                        throw new Error('Unexpected object: ' + o);
                }
                var g = c;
                do {
                    (o !== t.NU.WorkWeek || -1 !== a.indexOf(g.getDay())) &&
                        d.push(g),
                        (g = n(g, 1));
                } while (!f(g, u));
                return d;
            }
            function p(e, o) {
                for (var r = 0, t = o; r < t.length; r++)
                    if (f(e, t[r])) return !0;
                return !1;
            }
            function C(e, o, r, n) {
                var a = n.getFullYear(),
                    l = n.getMonth(),
                    s = 1,
                    c = new Date(a, l, s),
                    d =
                        s +
                        (o + i.r.DaysInOneWeek - 1) -
                        (function (e, o) {
                            return e !== t.eO.Sunday && o < e
                                ? o + i.r.DaysInOneWeek
                                : o;
                        })(o, c.getDay()),
                    u = new Date(a, l, d);
                s = u.getDate();
                for (var g = [], S = 0; S < e; S++)
                    g.push(F(u, o, r)),
                        (s += i.r.DaysInOneWeek),
                        (u = new Date(a, l, s));
                return g;
            }
            function F(e, o, r) {
                switch (r) {
                    case t.On.FirstFullWeek:
                        return M(e, o, i.r.DaysInOneWeek);
                    case t.On.FirstFourDayWeek:
                        return M(e, o, 4);
                    default:
                        return (function (e, o) {
                            var r = v(e) - 1,
                                t =
                                    (e.getDay() -
                                        (r % i.r.DaysInOneWeek) -
                                        o +
                                        2 * i.r.DaysInOneWeek) %
                                    i.r.DaysInOneWeek;
                            return Math.floor((r + t) / i.r.DaysInOneWeek + 1);
                        })(e, o);
                }
            }
            function L(e) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate());
            }
            function y(e) {
                return (
                    e.getDate() + (e.getMonth() << 5) + (e.getFullYear() << 9)
                );
            }
            function M(e, o, r) {
                var n = v(e) - 1,
                    a = e.getDay() - (n % i.r.DaysInOneWeek),
                    l = v(new Date(e.getFullYear() - 1, t.m2.December, 31)) - 1,
                    s = (o - a + 2 * i.r.DaysInOneWeek) % i.r.DaysInOneWeek;
                0 !== s && s >= r && (s -= i.r.DaysInOneWeek);
                var c = n - s;
                return (
                    c < 0 &&
                        (0 !=
                            (s =
                                (o -
                                    (a -= l % i.r.DaysInOneWeek) +
                                    2 * i.r.DaysInOneWeek) %
                                i.r.DaysInOneWeek) &&
                            s + 1 >= r &&
                            (s -= i.r.DaysInOneWeek),
                        (c = l - s)),
                    Math.floor(c / i.r.DaysInOneWeek + 1)
                );
            }
            function v(e) {
                for (
                    var o = e.getMonth(), r = e.getFullYear(), t = 0, i = 0;
                    i < o;
                    i++
                )
                    t += D(i + 1, r);
                return t + e.getDate();
            }
            function D(e, o) {
                return new Date(o, e, 0).getDate();
            }
        },
        56414: (e, o, r) => {
            var t, i, n, a;
            r.d(o, {
                NA: () => l,
                NU: () => a,
                On: () => n,
                eO: () => t,
                m2: () => i,
            }),
                (function (e) {
                    (e[(e.Sunday = 0)] = 'Sunday'),
                        (e[(e.Monday = 1)] = 'Monday'),
                        (e[(e.Tuesday = 2)] = 'Tuesday'),
                        (e[(e.Wednesday = 3)] = 'Wednesday'),
                        (e[(e.Thursday = 4)] = 'Thursday'),
                        (e[(e.Friday = 5)] = 'Friday'),
                        (e[(e.Saturday = 6)] = 'Saturday');
                })(t || (t = {})),
                (function (e) {
                    (e[(e.January = 0)] = 'January'),
                        (e[(e.February = 1)] = 'February'),
                        (e[(e.March = 2)] = 'March'),
                        (e[(e.April = 3)] = 'April'),
                        (e[(e.May = 4)] = 'May'),
                        (e[(e.June = 5)] = 'June'),
                        (e[(e.July = 6)] = 'July'),
                        (e[(e.August = 7)] = 'August'),
                        (e[(e.September = 8)] = 'September'),
                        (e[(e.October = 9)] = 'October'),
                        (e[(e.November = 10)] = 'November'),
                        (e[(e.December = 11)] = 'December');
                })(i || (i = {})),
                (function (e) {
                    (e[(e.FirstDay = 0)] = 'FirstDay'),
                        (e[(e.FirstFullWeek = 1)] = 'FirstFullWeek'),
                        (e[(e.FirstFourDayWeek = 2)] = 'FirstFourDayWeek');
                })(n || (n = {})),
                (function (e) {
                    (e[(e.Day = 0)] = 'Day'),
                        (e[(e.Week = 1)] = 'Week'),
                        (e[(e.Month = 2)] = 'Month'),
                        (e[(e.WorkWeek = 3)] = 'WorkWeek');
                })(a || (a = {}));
            var l = 7;
        },
        34532: (e, o, r) => {
            r.d(o, {r: () => t});
            var t = {
                MillisecondsInOneDay: 864e5,
                MillisecondsIn1Sec: 1e3,
                MillisecondsIn1Min: 6e4,
                MillisecondsIn30Mins: 18e5,
                MillisecondsIn1Hour: 36e5,
                MinutesInOneDay: 1440,
                MinutesInOneHour: 60,
                DaysInOneWeek: 7,
                MonthInOneYear: 12,
                HoursInOneDay: 24,
                SecondsInOneMinute: 60,
                OffsetTo24HourFormat: 12,
                TimeFormatRegex: /^(\d\d?):(\d\d):?(\d\d)? ?([ap]m)?/i,
            };
        },
        58980: (e, o, r) => {
            r.d(o, {T: () => t});
            var t = function (e, o, r) {
                var t = e.toLocaleTimeString([], {
                    hour: 'numeric',
                    minute: '2-digit',
                    second: o ? '2-digit' : void 0,
                    hour12: r,
                });
                return (
                    r || '24' !== t.slice(0, 2) || (t = '00' + t.slice(2)), t
                );
            };
        },
        25938: (e, o, r) => {
            r.d(o, {Wp: () => n, m1: () => a, mH: () => i});
            var t = r(34532),
                i = function (e, o) {
                    var r = new Date(e.getTime());
                    return (
                        r.setTime(
                            r.getTime() +
                                o *
                                    t.r.MinutesInOneHour *
                                    t.r.MillisecondsIn1Sec
                        ),
                        r
                    );
                },
                n = function (e, o) {
                    var r = new Date(e.getTime()),
                        i = r.getMinutes();
                    if (t.r.MinutesInOneHour % o) r.setMinutes(0);
                    else {
                        for (
                            var n = t.r.MinutesInOneHour / o, a = 1;
                            a <= n;
                            a++
                        )
                            if (i > o * (a - 1) && i <= o * a) {
                                i = o * a;
                                break;
                            }
                        r.setMinutes(i);
                    }
                    return r;
                },
                a = function (e, o, r) {
                    var i,
                        n = t.r.TimeFormatRegex.exec(r) || [],
                        a = n[1],
                        l = n[2],
                        s = n[3],
                        c = n[4],
                        d = +a,
                        u = +l,
                        g = s ? +s : 0;
                    e &&
                        c &&
                        ('pm' === c.toLowerCase() &&
                        d !== t.r.OffsetTo24HourFormat
                            ? (d += t.r.OffsetTo24HourFormat)
                            : 'am' === c.toLowerCase() &&
                              d === t.r.OffsetTo24HourFormat &&
                              (d -= t.r.OffsetTo24HourFormat)),
                        (i =
                            o.getHours() > d ||
                            (o.getHours() === d && o.getMinutes() > u)
                                ? t.r.HoursInOneDay - o.getHours() + d
                                : Math.abs(o.getHours() - d));
                    var S =
                            t.r.MillisecondsIn1Sec *
                                t.r.MinutesInOneHour *
                                i *
                                t.r.SecondsInOneMinute +
                            g * t.r.MillisecondsIn1Sec,
                        f = new Date(o.getTime() + S);
                    return f.setMinutes(u), f.setSeconds(g), f;
                };
        },
        44557: (e, o, r) => {
            r.d(o, {t: () => i});
            var t = r(85298);
            function i(e, o, r) {
                void 0 === r && (r = !0);
                var i = !1;
                if (e && o)
                    if (r)
                        if (e === o) i = !0;
                        else
                            for (i = !1; o; ) {
                                var n = (0, t.G)(o);
                                if (n === e) {
                                    i = !0;
                                    break;
                                }
                                o = n;
                            }
                    else e.contains && (i = e.contains(o));
                return i;
            }
        },
        44185: (e, o, r) => {
            r.d(o, {j: () => i});
            var t = r(2089);
            function i(e, o, r) {
                var i = (0, t.X)(
                    e,
                    function (e) {
                        return e.hasAttribute(o);
                    },
                    r
                );
                return i && i.getAttribute(o);
            }
        },
        2089: (e, o, r) => {
            r.d(o, {X: () => i});
            var t = r(85298);
            function i(e, o, r) {
                return (
                    null != r || (r = document),
                    e && e !== r.body ? (o(e) ? e : i((0, t.G)(e), o)) : null
                );
            }
        },
        32494: (e, o, r) => {
            r.d(o, {G: () => i});
            var t = r(40168);
            function i(e, o) {
                void 0 === o && (o = !0);
                var r = [];
                if (e) {
                    for (var i = 0; i < e.children.length; i++)
                        r.push(e.children.item(i));
                    o && (0, t.r)(e) && r.push.apply(r, e._virtual.children);
                }
                return r;
            }
        },
        85298: (e, o, r) => {
            r.d(o, {G: () => i});
            var t = r(40168);
            function i(e, o) {
                return (
                    void 0 === o && (o = !0),
                    e &&
                        ((o &&
                            (function (e) {
                                var o;
                                return (
                                    e && (0, t.r)(e) && (o = e._virtual.parent),
                                    o
                                );
                            })(e)) ||
                            (e.parentNode && e.parentNode))
                );
            }
        },
        40168: (e, o, r) => {
            function t(e) {
                return e && !!e._virtual;
            }
            r.d(o, {r: () => t});
        },
        23379: (e, o, r) => {
            r.d(o, {w: () => n});
            var t = r(2089),
                i = r(24413);
            function n(e, o, r) {
                var n = (0, t.X)(
                    e,
                    function (e) {
                        return o === e || e.hasAttribute(i.Y);
                    },
                    r
                );
                return null !== n && n.hasAttribute(i.Y);
            }
        },
        24413: (e, o, r) => {
            r.d(o, {U: () => i, Y: () => t});
            var t = 'data-portal-element';
            function i(e) {
                e.setAttribute(t, 'true');
            }
        },
        46337: (e, o, r) => {
            function t(e, o) {
                var r = e,
                    t = o;
                r._virtual || (r._virtual = {children: []});
                var i = r._virtual.parent;
                if (i && i !== o) {
                    var n = i._virtual.children.indexOf(r);
                    n > -1 && i._virtual.children.splice(n, 1);
                }
                (r._virtual.parent = t || void 0),
                    t &&
                        (t._virtual || (t._virtual = {children: []}),
                        t._virtual.children.push(r));
            }
            r.d(o, {N: () => t});
        },
        15329: (e, o, r) => {
            r.d(o, {l: () => T});
            var t = r(85446);
            function i(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-a13498cf.woff') format('woff')"
                        ),
                    },
                    icons: {
                        GlobalNavButton: '',
                        ChevronDown: '',
                        ChevronUp: '',
                        Edit: '',
                        Add: '',
                        Cancel: '',
                        More: '',
                        Settings: '',
                        Mail: '',
                        Filter: '',
                        Search: '',
                        Share: '',
                        BlockedSite: '',
                        FavoriteStar: '',
                        FavoriteStarFill: '',
                        CheckMark: '',
                        Delete: '',
                        ChevronLeft: '',
                        ChevronRight: '',
                        Calendar: '',
                        Megaphone: '',
                        Undo: '',
                        Flag: '',
                        Page: '',
                        Pinned: '',
                        View: '',
                        Clear: '',
                        Download: '',
                        Upload: '',
                        Folder: '',
                        Sort: '',
                        AlignRight: '',
                        AlignLeft: '',
                        Tag: '',
                        AddFriend: '',
                        Info: '',
                        SortLines: '',
                        List: '',
                        CircleRing: '',
                        Heart: '',
                        HeartFill: '',
                        Tiles: '',
                        Embed: '',
                        Glimmer: '',
                        Ascending: '',
                        Descending: '',
                        SortUp: '',
                        SortDown: '',
                        SyncToPC: '',
                        LargeGrid: '',
                        SkypeCheck: '',
                        SkypeClock: '',
                        SkypeMinus: '',
                        ClearFilter: '',
                        Flow: '',
                        StatusCircleCheckmark: '',
                        MoreVertical: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function n(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-0"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-0-467ee27f.woff') format('woff')"
                        ),
                    },
                    icons: {
                        PageLink: '',
                        CommentSolid: '',
                        ChangeEntitlements: '',
                        Installation: '',
                        WebAppBuilderModule: '',
                        WebAppBuilderFragment: '',
                        WebAppBuilderSlot: '',
                        BullseyeTargetEdit: '',
                        WebAppBuilderFragmentCreate: '',
                        PageData: '',
                        PageHeaderEdit: '',
                        ProductList: '',
                        UnpublishContent: '',
                        DependencyAdd: '',
                        DependencyRemove: '',
                        EntitlementPolicy: '',
                        EntitlementRedemption: '',
                        SchoolDataSyncLogo: '',
                        PinSolid12: '',
                        PinSolidOff12: '',
                        AddLink: '',
                        SharepointAppIcon16: '',
                        DataflowsLink: '',
                        TimePicker: '',
                        UserWarning: '',
                        ComplianceAudit: '',
                        InternetSharing: '',
                        Brightness: '',
                        MapPin: '',
                        Airplane: '',
                        Tablet: '',
                        QuickNote: '',
                        Video: '',
                        People: '',
                        Phone: '',
                        Pin: '',
                        Shop: '',
                        Stop: '',
                        Link: '',
                        AllApps: '',
                        Zoom: '',
                        ZoomOut: '',
                        Microphone: '',
                        Camera: '',
                        Attach: '',
                        Send: '',
                        FavoriteList: '',
                        PageSolid: '',
                        Forward: '',
                        Back: '',
                        Refresh: '',
                        Lock: '',
                        ReportHacked: '',
                        EMI: '',
                        MiniLink: '',
                        Blocked: '',
                        ReadingMode: '',
                        Favicon: '',
                        Remove: '',
                        Checkbox: '',
                        CheckboxComposite: '',
                        CheckboxFill: '',
                        CheckboxIndeterminate: '',
                        CheckboxCompositeReversed: '',
                        BackToWindow: '',
                        FullScreen: '',
                        Print: '',
                        Up: '',
                        Down: '',
                        OEM: '',
                        Save: '',
                        ReturnKey: '',
                        Cloud: '',
                        Flashlight: '',
                        CommandPrompt: '',
                        Sad: '',
                        RealEstate: '',
                        SIPMove: '',
                        EraseTool: '',
                        GripperTool: '',
                        Dialpad: '',
                        PageLeft: '',
                        PageRight: '',
                        MultiSelect: '',
                        KeyboardClassic: '',
                        Play: '',
                        Pause: '',
                        InkingTool: '',
                        Emoji2: '',
                        GripperBarHorizontal: '',
                        System: '',
                        Personalize: '',
                        SearchAndApps: '',
                        Globe: '',
                        EaseOfAccess: '',
                        ContactInfo: '',
                        Unpin: '',
                        Contact: '',
                        Memo: '',
                        IncomingCall: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function a(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-1"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-1-4d521695.woff') format('woff')"
                        ),
                    },
                    icons: {
                        Paste: '',
                        WindowsLogo: '',
                        Error: '',
                        GripperBarVertical: '',
                        Unlock: '',
                        Slideshow: '',
                        Trim: '',
                        AutoEnhanceOn: '',
                        AutoEnhanceOff: '',
                        Color: '',
                        SaveAs: '',
                        Light: '',
                        Filters: '',
                        AspectRatio: '',
                        Contrast: '',
                        Redo: '',
                        Crop: '',
                        PhotoCollection: '',
                        Album: '',
                        Rotate: '',
                        PanoIndicator: '',
                        Translate: '',
                        RedEye: '',
                        ViewOriginal: '',
                        ThumbnailView: '',
                        Package: '',
                        Telemarketer: '',
                        Warning: '',
                        Financial: '',
                        Education: '',
                        ShoppingCart: '',
                        Train: '',
                        Move: '',
                        TouchPointer: '',
                        Merge: '',
                        TurnRight: '',
                        Ferry: '',
                        Highlight: '',
                        PowerButton: '',
                        Tab: '',
                        Admin: '',
                        TVMonitor: '',
                        Speakers: '',
                        Game: '',
                        HorizontalTabKey: '',
                        UnstackSelected: '',
                        StackIndicator: '',
                        Nav2DMapView: '',
                        StreetsideSplitMinimize: '',
                        Car: '',
                        Bus: '',
                        EatDrink: '',
                        SeeDo: '',
                        LocationCircle: '',
                        Home: '',
                        SwitcherStartEnd: '',
                        ParkingLocation: '',
                        IncidentTriangle: '',
                        Touch: '',
                        MapDirections: '',
                        CaretHollow: '',
                        CaretSolid: '',
                        History: '',
                        Location: '',
                        MapLayers: '',
                        SearchNearby: '',
                        Work: '',
                        Recent: '',
                        Hotel: '',
                        Bank: '',
                        LocationDot: '',
                        Dictionary: '',
                        ChromeBack: '',
                        FolderOpen: '',
                        PinnedFill: '',
                        RevToggleKey: '',
                        USB: '',
                        Previous: '',
                        Next: '',
                        Sync: '',
                        Help: '',
                        Emoji: '',
                        MailForward: '',
                        ClosePane: '',
                        OpenPane: '',
                        PreviewLink: '',
                        ZoomIn: '',
                        Bookmarks: '',
                        Document: '',
                        ProtectedDocument: '',
                        OpenInNewWindow: '',
                        MailFill: '',
                        ViewAll: '',
                        Switch: '',
                        Rename: '',
                        Go: '',
                        Remote: '',
                        SelectAll: '',
                        Orientation: '',
                        Import: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function l(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-2"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-2-63c99abf.woff') format('woff')"
                        ),
                    },
                    icons: {
                        Picture: '',
                        ChromeClose: '',
                        ShowResults: '',
                        Message: '',
                        CalendarDay: '',
                        CalendarWeek: '',
                        MailReplyAll: '',
                        Read: '',
                        Cut: '',
                        PaymentCard: '',
                        Copy: '',
                        Important: '',
                        MailReply: '',
                        GotoToday: '',
                        Font: '',
                        FontColor: '',
                        FolderFill: '',
                        Permissions: '',
                        DisableUpdates: '',
                        Unfavorite: '',
                        Italic: '',
                        Underline: '',
                        Bold: '',
                        MoveToFolder: '',
                        Dislike: '',
                        Like: '',
                        AlignCenter: '',
                        OpenFile: '',
                        ClearSelection: '',
                        FontDecrease: '',
                        FontIncrease: '',
                        FontSize: '',
                        CellPhone: '',
                        RepeatOne: '',
                        RepeatAll: '',
                        Calculator: '',
                        Library: '',
                        PostUpdate: '',
                        NewFolder: '',
                        CalendarReply: '',
                        UnsyncFolder: '',
                        SyncFolder: '',
                        BlockContact: '',
                        Accept: '',
                        BulletedList: '',
                        Preview: '',
                        News: '',
                        Chat: '',
                        Group: '',
                        World: '',
                        Comment: '',
                        DockLeft: '',
                        DockRight: '',
                        Repair: '',
                        Accounts: '',
                        Street: '',
                        RadioBullet: '',
                        Stopwatch: '',
                        Clock: '',
                        WorldClock: '',
                        AlarmClock: '',
                        Photo: '',
                        ActionCenter: '',
                        Hospital: '',
                        Timer: '',
                        FullCircleMask: '',
                        LocationFill: '',
                        ChromeMinimize: '',
                        ChromeRestore: '',
                        Annotation: '',
                        Fingerprint: '',
                        Handwriting: '',
                        ChromeFullScreen: '',
                        Completed: '',
                        Label: '',
                        FlickDown: '',
                        FlickUp: '',
                        FlickLeft: '',
                        FlickRight: '',
                        MiniExpand: '',
                        MiniContract: '',
                        Streaming: '',
                        MusicInCollection: '',
                        OneDriveLogo: '',
                        CompassNW: '',
                        Code: '',
                        LightningBolt: '',
                        CalculatorMultiply: '',
                        CalculatorAddition: '',
                        CalculatorSubtract: '',
                        CalculatorPercentage: '',
                        CalculatorEqualTo: '',
                        PrintfaxPrinterFile: '',
                        StorageOptical: '',
                        Communications: '',
                        Headset: '',
                        Health: '',
                        Webcam2: '',
                        FrontCamera: '',
                        ChevronUpSmall: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function s(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-3"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-3-089e217a.woff') format('woff')"
                        ),
                    },
                    icons: {
                        ChevronDownSmall: '',
                        ChevronLeftSmall: '',
                        ChevronRightSmall: '',
                        ChevronUpMed: '',
                        ChevronDownMed: '',
                        ChevronLeftMed: '',
                        ChevronRightMed: '',
                        Devices2: '',
                        PC1: '',
                        PresenceChickletVideo: '',
                        Reply: '',
                        HalfAlpha: '',
                        ConstructionCone: '',
                        DoubleChevronLeftMed: '',
                        Volume0: '',
                        Volume1: '',
                        Volume2: '',
                        Volume3: '',
                        Chart: '',
                        Robot: '',
                        Manufacturing: '',
                        LockSolid: '',
                        FitPage: '',
                        FitWidth: '',
                        BidiLtr: '',
                        BidiRtl: '',
                        RightDoubleQuote: '',
                        Sunny: '',
                        CloudWeather: '',
                        Cloudy: '',
                        PartlyCloudyDay: '',
                        PartlyCloudyNight: '',
                        ClearNight: '',
                        RainShowersDay: '',
                        Rain: '',
                        Thunderstorms: '',
                        RainSnow: '',
                        Snow: '',
                        BlowingSnow: '',
                        Frigid: '',
                        Fog: '',
                        Squalls: '',
                        Duststorm: '',
                        Unknown: '',
                        Precipitation: '',
                        Ribbon: '',
                        AreaChart: '',
                        Assign: '',
                        FlowChart: '',
                        CheckList: '',
                        Diagnostic: '',
                        Generate: '',
                        LineChart: '',
                        Equalizer: '',
                        BarChartHorizontal: '',
                        BarChartVertical: '',
                        Freezing: '',
                        FunnelChart: '',
                        Processing: '',
                        Quantity: '',
                        ReportDocument: '',
                        StackColumnChart: '',
                        SnowShowerDay: '',
                        HailDay: '',
                        WorkFlow: '',
                        HourGlass: '',
                        StoreLogoMed20: '',
                        TimeSheet: '',
                        TriangleSolid: '',
                        UpgradeAnalysis: '',
                        VideoSolid: '',
                        RainShowersNight: '',
                        SnowShowerNight: '',
                        Teamwork: '',
                        HailNight: '',
                        PeopleAdd: '',
                        Glasses: '',
                        DateTime2: '',
                        Shield: '',
                        Header1: '',
                        PageAdd: '',
                        NumberedList: '',
                        PowerBILogo: '',
                        Info2: '',
                        MusicInCollectionFill: '',
                        Asterisk: '',
                        ErrorBadge: '',
                        CircleFill: '',
                        Record2: '',
                        AllAppsMirrored: '',
                        BookmarksMirrored: '',
                        BulletedListMirrored: '',
                        CaretHollowMirrored: '',
                        CaretSolidMirrored: '',
                        ChromeBackMirrored: '',
                        ClearSelectionMirrored: '',
                        ClosePaneMirrored: '',
                        DockLeftMirrored: '',
                        DoubleChevronLeftMedMirrored: '',
                        GoMirrored: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function c(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-4"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-4-a656cc0a.woff') format('woff')"
                        ),
                    },
                    icons: {
                        HelpMirrored: '',
                        ImportMirrored: '',
                        ImportAllMirrored: '',
                        ListMirrored: '',
                        MailForwardMirrored: '',
                        MailReplyMirrored: '',
                        MailReplyAllMirrored: '',
                        MiniContractMirrored: '',
                        MiniExpandMirrored: '',
                        OpenPaneMirrored: '',
                        ParkingLocationMirrored: '',
                        SendMirrored: '',
                        ShowResultsMirrored: '',
                        ThumbnailViewMirrored: '',
                        Media: '',
                        Devices3: '',
                        Focus: '',
                        VideoLightOff: '',
                        Lightbulb: '',
                        StatusTriangle: '',
                        VolumeDisabled: '',
                        Puzzle: '',
                        EmojiNeutral: '',
                        EmojiDisappointed: '',
                        HomeSolid: '',
                        Ringer: '',
                        PDF: '',
                        HeartBroken: '',
                        StoreLogo16: '',
                        MultiSelectMirrored: '',
                        Broom: '',
                        AddToShoppingList: '',
                        Cocktails: '',
                        Wines: '',
                        Articles: '',
                        Cycling: '',
                        DietPlanNotebook: '',
                        Pill: '',
                        ExerciseTracker: '',
                        HandsFree: '',
                        Medical: '',
                        Running: '',
                        Weights: '',
                        Trackers: '',
                        AddNotes: '',
                        AllCurrency: '',
                        BarChart4: '',
                        CirclePlus: '',
                        Coffee: '',
                        Cotton: '',
                        Market: '',
                        Money: '',
                        PieDouble: '',
                        PieSingle: '',
                        RemoveFilter: '',
                        Savings: '',
                        Sell: '',
                        StockDown: '',
                        StockUp: '',
                        Lamp: '',
                        Source: '',
                        MSNVideos: '',
                        Cricket: '',
                        Golf: '',
                        Baseball: '',
                        Soccer: '',
                        MoreSports: '',
                        AutoRacing: '',
                        CollegeHoops: '',
                        CollegeFootball: '',
                        ProFootball: '',
                        ProHockey: '',
                        Rugby: '',
                        SubstitutionsIn: '',
                        Tennis: '',
                        Arrivals: '',
                        Design: '',
                        Website: '',
                        Drop: '',
                        HistoricalWeather: '',
                        SkiResorts: '',
                        Snowflake: '',
                        BusSolid: '',
                        FerrySolid: '',
                        AirplaneSolid: '',
                        TrainSolid: '',
                        Ticket: '',
                        WifiWarning4: '',
                        Devices4: '',
                        AzureLogo: '',
                        BingLogo: '',
                        MSNLogo: '',
                        OutlookLogoInverse: '',
                        OfficeLogo: '',
                        SkypeLogo: '',
                        Door: '',
                        EditMirrored: '',
                        GiftCard: '',
                        DoubleBookmark: '',
                        StatusErrorFull: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function d(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-5"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-5-f95ba260.woff') format('woff')"
                        ),
                    },
                    icons: {
                        Certificate: '',
                        FastForward: '',
                        Rewind: '',
                        Photo2: '',
                        OpenSource: '',
                        Movers: '',
                        CloudDownload: '',
                        Family: '',
                        WindDirection: '',
                        Bug: '',
                        SiteScan: '',
                        BrowserScreenShot: '',
                        F12DevTools: '',
                        CSS: '',
                        JS: '',
                        DeliveryTruck: '',
                        ReminderPerson: '',
                        ReminderGroup: '',
                        ReminderTime: '',
                        TabletMode: '',
                        Umbrella: '',
                        NetworkTower: '',
                        CityNext: '',
                        CityNext2: '',
                        Section: '',
                        OneNoteLogoInverse: '',
                        ToggleFilled: '',
                        ToggleBorder: '',
                        SliderThumb: '',
                        ToggleThumb: '',
                        Documentation: '',
                        Badge: '',
                        Giftbox: '',
                        VisualStudioLogo: '',
                        HomeGroup: '',
                        ExcelLogoInverse: '',
                        WordLogoInverse: '',
                        PowerPointLogoInverse: '',
                        Cafe: '',
                        SpeedHigh: '',
                        Commitments: '',
                        ThisPC: '',
                        MusicNote: '',
                        MicOff: '',
                        PlaybackRate1x: '',
                        EdgeLogo: '',
                        CompletedSolid: '',
                        AlbumRemove: '',
                        MessageFill: '',
                        TabletSelected: '',
                        MobileSelected: '',
                        LaptopSelected: '',
                        TVMonitorSelected: '',
                        DeveloperTools: '',
                        Shapes: '',
                        InsertTextBox: '',
                        LowerBrightness: '',
                        WebComponents: '',
                        OfflineStorage: '',
                        DOM: '',
                        CloudUpload: '',
                        ScrollUpDown: '',
                        DateTime: '',
                        Event: '',
                        Cake: '',
                        Org: '',
                        PartyLeader: '',
                        DRM: '',
                        CloudAdd: '',
                        AppIconDefault: '',
                        Photo2Add: '',
                        Photo2Remove: '',
                        Calories: '',
                        POI: '',
                        AddTo: '',
                        RadioBtnOff: '',
                        RadioBtnOn: '',
                        ExploreContent: '',
                        Product: '',
                        ProgressLoopInner: '',
                        ProgressLoopOuter: '',
                        Blocked2: '',
                        FangBody: '',
                        Toolbox: '',
                        PageHeader: '',
                        ChatInviteFriend: '',
                        Brush: '',
                        Shirt: '',
                        Crown: '',
                        Diamond: '',
                        ScaleUp: '',
                        QRCode: '',
                        Feedback: '',
                        SharepointLogoInverse: '',
                        YammerLogo: '',
                        Hide: '',
                        Uneditable: '',
                        ReturnToSession: '',
                        OpenFolderHorizontal: '',
                        CalendarMirrored: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function u(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-6"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-6-ef6fd590.woff') format('woff')"
                        ),
                    },
                    icons: {
                        SwayLogoInverse: '',
                        OutOfOffice: '',
                        Trophy: '',
                        ReopenPages: '',
                        EmojiTabSymbols: '',
                        AADLogo: '',
                        AccessLogo: '',
                        AdminALogoInverse32: '',
                        AdminCLogoInverse32: '',
                        AdminDLogoInverse32: '',
                        AdminELogoInverse32: '',
                        AdminLLogoInverse32: '',
                        AdminMLogoInverse32: '',
                        AdminOLogoInverse32: '',
                        AdminPLogoInverse32: '',
                        AdminSLogoInverse32: '',
                        AdminYLogoInverse32: '',
                        DelveLogoInverse: '',
                        ExchangeLogoInverse: '',
                        LyncLogo: '',
                        OfficeVideoLogoInverse: '',
                        SocialListeningLogo: '',
                        VisioLogoInverse: '',
                        Balloons: '',
                        Cat: '',
                        MailAlert: '',
                        MailCheck: '',
                        MailLowImportance: '',
                        MailPause: '',
                        MailRepeat: '',
                        SecurityGroup: '',
                        Table: '',
                        VoicemailForward: '',
                        VoicemailReply: '',
                        Waffle: '',
                        RemoveEvent: '',
                        EventInfo: '',
                        ForwardEvent: '',
                        WipePhone: '',
                        AddOnlineMeeting: '',
                        JoinOnlineMeeting: '',
                        RemoveLink: '',
                        PeopleBlock: '',
                        PeopleRepeat: '',
                        PeopleAlert: '',
                        PeoplePause: '',
                        TransferCall: '',
                        AddPhone: '',
                        UnknownCall: '',
                        NoteReply: '',
                        NoteForward: '',
                        NotePinned: '',
                        RemoveOccurrence: '',
                        Timeline: '',
                        EditNote: '',
                        CircleHalfFull: '',
                        Room: '',
                        Unsubscribe: '',
                        Subscribe: '',
                        HardDrive: '',
                        RecurringTask: '',
                        TaskManager: '',
                        TaskManagerMirrored: '',
                        Combine: '',
                        Split: '',
                        DoubleChevronUp: '',
                        DoubleChevronLeft: '',
                        DoubleChevronRight: '',
                        TextBox: '',
                        TextField: '',
                        NumberField: '',
                        Dropdown: '',
                        PenWorkspace: '',
                        BookingsLogo: '',
                        ClassNotebookLogoInverse: '',
                        DelveAnalyticsLogo: '',
                        DocsLogoInverse: '',
                        Dynamics365Logo: '',
                        DynamicSMBLogo: '',
                        OfficeAssistantLogo: '',
                        OfficeStoreLogo: '',
                        OneNoteEduLogoInverse: '',
                        PlannerLogo: '',
                        PowerApps: '',
                        Suitcase: '',
                        ProjectLogoInverse: '',
                        CaretLeft8: '',
                        CaretRight8: '',
                        CaretUp8: '',
                        CaretDown8: '',
                        CaretLeftSolid8: '',
                        CaretRightSolid8: '',
                        CaretUpSolid8: '',
                        CaretDownSolid8: '',
                        ClearFormatting: '',
                        Superscript: '',
                        Subscript: '',
                        Strikethrough: '',
                        Export: '',
                        ExportMirrored: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function g(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-7"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-7-2b97bb99.woff') format('woff')"
                        ),
                    },
                    icons: {
                        SingleBookmark: '',
                        SingleBookmarkSolid: '',
                        DoubleChevronDown: '',
                        FollowUser: '',
                        ReplyAll: '',
                        WorkforceManagement: '',
                        RecruitmentManagement: '',
                        Questionnaire: '',
                        ManagerSelfService: '',
                        ProductionFloorManagement: '',
                        ProductRelease: '',
                        ProductVariant: '',
                        ReplyMirrored: '',
                        ReplyAllMirrored: '',
                        Medal: '',
                        AddGroup: '',
                        QuestionnaireMirrored: '',
                        CloudImportExport: '',
                        TemporaryUser: '',
                        CaretSolid16: '',
                        GroupedDescending: '',
                        GroupedAscending: '',
                        AwayStatus: '',
                        MyMoviesTV: '',
                        GenericScan: '',
                        AustralianRules: '',
                        WifiEthernet: '',
                        TrackersMirrored: '',
                        DateTimeMirrored: '',
                        StopSolid: '',
                        DoubleChevronUp12: '',
                        DoubleChevronDown12: '',
                        DoubleChevronLeft12: '',
                        DoubleChevronRight12: '',
                        CalendarAgenda: '',
                        ConnectVirtualMachine: '',
                        AddEvent: '',
                        AssetLibrary: '',
                        DataConnectionLibrary: '',
                        DocLibrary: '',
                        FormLibrary: '',
                        FormLibraryMirrored: '',
                        ReportLibrary: '',
                        ReportLibraryMirrored: '',
                        ContactCard: '',
                        CustomList: '',
                        CustomListMirrored: '',
                        IssueTracking: '',
                        IssueTrackingMirrored: '',
                        PictureLibrary: '',
                        OfficeAddinsLogo: '',
                        OfflineOneDriveParachute: '',
                        OfflineOneDriveParachuteDisabled: '',
                        TriangleSolidUp12: '',
                        TriangleSolidDown12: '',
                        TriangleSolidLeft12: '',
                        TriangleSolidRight12: '',
                        TriangleUp12: '',
                        TriangleDown12: '',
                        TriangleLeft12: '',
                        TriangleRight12: '',
                        ArrowUpRight8: '',
                        ArrowDownRight8: '',
                        DocumentSet: '',
                        GoToDashboard: '',
                        DelveAnalytics: '',
                        ArrowUpRightMirrored8: '',
                        ArrowDownRightMirrored8: '',
                        CompanyDirectory: '',
                        OpenEnrollment: '',
                        CompanyDirectoryMirrored: '',
                        OneDriveAdd: '',
                        ProfileSearch: '',
                        Header2: '',
                        Header3: '',
                        Header4: '',
                        RingerSolid: '',
                        Eyedropper: '',
                        MarketDown: '',
                        CalendarWorkWeek: '',
                        SidePanel: '',
                        GlobeFavorite: '',
                        CaretTopLeftSolid8: '',
                        CaretTopRightSolid8: '',
                        ViewAll2: '',
                        DocumentReply: '',
                        PlayerSettings: '',
                        ReceiptForward: '',
                        ReceiptReply: '',
                        ReceiptCheck: '',
                        Fax: '',
                        RecurringEvent: '',
                        ReplyAlt: '',
                        ReplyAllAlt: '',
                        EditStyle: '',
                        EditMail: '',
                        Lifesaver: '',
                        LifesaverLock: '',
                        InboxCheck: '',
                        FolderSearch: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function S(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-8"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-8-6fdf1528.woff') format('woff')"
                        ),
                    },
                    icons: {
                        CollapseMenu: '',
                        ExpandMenu: '',
                        Boards: '',
                        SunAdd: '',
                        SunQuestionMark: '',
                        LandscapeOrientation: '',
                        DocumentSearch: '',
                        PublicCalendar: '',
                        PublicContactCard: '',
                        PublicEmail: '',
                        PublicFolder: '',
                        WordDocument: '',
                        PowerPointDocument: '',
                        ExcelDocument: '',
                        GroupedList: '',
                        ClassroomLogo: '',
                        Sections: '',
                        EditPhoto: '',
                        Starburst: '',
                        ShareiOS: '',
                        AirTickets: '',
                        PencilReply: '',
                        Tiles2: '',
                        SkypeCircleCheck: '',
                        SkypeCircleClock: '',
                        SkypeCircleMinus: '',
                        SkypeMessage: '',
                        ClosedCaption: '',
                        ATPLogo: '',
                        OfficeFormsLogoInverse: '',
                        RecycleBin: '',
                        EmptyRecycleBin: '',
                        Hide2: '',
                        Breadcrumb: '',
                        BirthdayCake: '',
                        TimeEntry: '',
                        CRMProcesses: '',
                        PageEdit: '',
                        PageArrowRight: '',
                        PageRemove: '',
                        Database: '',
                        DataManagementSettings: '',
                        CRMServices: '',
                        EditContact: '',
                        ConnectContacts: '',
                        AppIconDefaultAdd: '',
                        AppIconDefaultList: '',
                        ActivateOrders: '',
                        DeactivateOrders: '',
                        ProductCatalog: '',
                        ScatterChart: '',
                        AccountActivity: '',
                        DocumentManagement: '',
                        CRMReport: '',
                        KnowledgeArticle: '',
                        Relationship: '',
                        HomeVerify: '',
                        ZipFolder: '',
                        SurveyQuestions: '',
                        TextDocument: '',
                        TextDocumentShared: '',
                        PageCheckedOut: '',
                        PageShared: '',
                        SaveAndClose: '',
                        Script: '',
                        Archive: '',
                        ActivityFeed: '',
                        Compare: '',
                        EventDate: '',
                        ArrowUpRight: '',
                        CaretRight: '',
                        SetAction: '',
                        ChatBot: '',
                        CaretSolidLeft: '',
                        CaretSolidDown: '',
                        CaretSolidRight: '',
                        CaretSolidUp: '',
                        PowerAppsLogo: '',
                        PowerApps2Logo: '',
                        SearchIssue: '',
                        SearchIssueMirrored: '',
                        FabricAssetLibrary: '',
                        FabricDataConnectionLibrary: '',
                        FabricDocLibrary: '',
                        FabricFormLibrary: '',
                        FabricFormLibraryMirrored: '',
                        FabricReportLibrary: '',
                        FabricReportLibraryMirrored: '',
                        FabricPublicFolder: '',
                        FabricFolderSearch: '',
                        FabricMovetoFolder: '',
                        FabricUnsyncFolder: '',
                        FabricSyncFolder: '',
                        FabricOpenFolderHorizontal: '',
                        FabricFolder: '',
                        FabricFolderFill: '',
                        FabricNewFolder: '',
                        FabricPictureLibrary: '',
                        PhotoVideoMedia: '',
                        AddFavorite: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function f(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-9"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-9-c6162b42.woff') format('woff')"
                        ),
                    },
                    icons: {
                        AddFavoriteFill: '',
                        BufferTimeBefore: '',
                        BufferTimeAfter: '',
                        BufferTimeBoth: '',
                        PublishContent: '',
                        ClipboardList: '',
                        ClipboardListMirrored: '',
                        CannedChat: '',
                        SkypeForBusinessLogo: '',
                        TabCenter: '',
                        PageCheckedin: '',
                        PageList: '',
                        ReadOutLoud: '',
                        CaretBottomLeftSolid8: '',
                        CaretBottomRightSolid8: '',
                        FolderHorizontal: '',
                        MicrosoftStaffhubLogo: '',
                        GiftboxOpen: '',
                        StatusCircleOuter: '',
                        StatusCircleInner: '',
                        StatusCircleRing: '',
                        StatusTriangleOuter: '',
                        StatusTriangleInner: '',
                        StatusTriangleExclamation: '',
                        StatusCircleExclamation: '',
                        StatusCircleErrorX: '',
                        StatusCircleInfo: '',
                        StatusCircleBlock: '',
                        StatusCircleBlock2: '',
                        StatusCircleQuestionMark: '',
                        StatusCircleSync: '',
                        Toll: '',
                        ExploreContentSingle: '',
                        CollapseContent: '',
                        CollapseContentSingle: '',
                        InfoSolid: '',
                        GroupList: '',
                        ProgressRingDots: '',
                        CaloriesAdd: '',
                        BranchFork: '',
                        MuteChat: '',
                        AddHome: '',
                        AddWork: '',
                        MobileReport: '',
                        ScaleVolume: '',
                        HardDriveGroup: '',
                        FastMode: '',
                        ToggleLeft: '',
                        ToggleRight: '',
                        TriangleShape: '',
                        RectangleShape: '',
                        CubeShape: '',
                        Trophy2: '',
                        BucketColor: '',
                        BucketColorFill: '',
                        Taskboard: '',
                        SingleColumn: '',
                        DoubleColumn: '',
                        TripleColumn: '',
                        ColumnLeftTwoThirds: '',
                        ColumnRightTwoThirds: '',
                        AccessLogoFill: '',
                        AnalyticsLogo: '',
                        AnalyticsQuery: '',
                        NewAnalyticsQuery: '',
                        AnalyticsReport: '',
                        WordLogo: '',
                        WordLogoFill: '',
                        ExcelLogo: '',
                        ExcelLogoFill: '',
                        OneNoteLogo: '',
                        OneNoteLogoFill: '',
                        OutlookLogo: '',
                        OutlookLogoFill: '',
                        PowerPointLogo: '',
                        PowerPointLogoFill: '',
                        PublisherLogo: '',
                        PublisherLogoFill: '',
                        ScheduleEventAction: '',
                        FlameSolid: '',
                        ServerProcesses: '',
                        Server: '',
                        SaveAll: '',
                        LinkedInLogo: '',
                        Decimals: '',
                        SidePanelMirrored: '',
                        ProtectRestrict: '',
                        Blog: '',
                        UnknownMirrored: '',
                        PublicContactCardMirrored: '',
                        GridViewSmall: '',
                        GridViewMedium: '',
                        GridViewLarge: '',
                        Step: '',
                        StepInsert: '',
                        StepShared: '',
                        StepSharedAdd: '',
                        StepSharedInsert: '',
                        ViewDashboard: '',
                        ViewList: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function m(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-10"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-10-c4ded8e4.woff') format('woff')"
                        ),
                    },
                    icons: {
                        ViewListGroup: '',
                        ViewListTree: '',
                        TriggerAuto: '',
                        TriggerUser: '',
                        PivotChart: '',
                        StackedBarChart: '',
                        StackedLineChart: '',
                        BuildQueue: '',
                        BuildQueueNew: '',
                        UserFollowed: '',
                        ContactLink: '',
                        Stack: '',
                        Bullseye: '',
                        VennDiagram: '',
                        FiveTileGrid: '',
                        FocalPoint: '',
                        Insert: '',
                        RingerRemove: '',
                        TeamsLogoInverse: '',
                        TeamsLogo: '',
                        TeamsLogoFill: '',
                        SkypeForBusinessLogoFill: '',
                        SharepointLogo: '',
                        SharepointLogoFill: '',
                        DelveLogo: '',
                        DelveLogoFill: '',
                        OfficeVideoLogo: '',
                        OfficeVideoLogoFill: '',
                        ExchangeLogo: '',
                        ExchangeLogoFill: '',
                        Signin: '',
                        DocumentApproval: '',
                        CloneToDesktop: '',
                        InstallToDrive: '',
                        Blur: '',
                        Build: '',
                        ProcessMetaTask: '',
                        BranchFork2: '',
                        BranchLocked: '',
                        BranchCommit: '',
                        BranchCompare: '',
                        BranchMerge: '',
                        BranchPullRequest: '',
                        BranchSearch: '',
                        BranchShelveset: '',
                        RawSource: '',
                        MergeDuplicate: '',
                        RowsGroup: '',
                        RowsChild: '',
                        Deploy: '',
                        Redeploy: '',
                        ServerEnviroment: '',
                        VisioDiagram: '',
                        HighlightMappedShapes: '',
                        TextCallout: '',
                        IconSetsFlag: '',
                        VisioLogo: '',
                        VisioLogoFill: '',
                        VisioDocument: '',
                        TimelineProgress: '',
                        TimelineDelivery: '',
                        Backlog: '',
                        TeamFavorite: '',
                        TaskGroup: '',
                        TaskGroupMirrored: '',
                        ScopeTemplate: '',
                        AssessmentGroupTemplate: '',
                        NewTeamProject: '',
                        CommentAdd: '',
                        CommentNext: '',
                        CommentPrevious: '',
                        ShopServer: '',
                        LocaleLanguage: '',
                        QueryList: '',
                        UserSync: '',
                        UserPause: '',
                        StreamingOff: '',
                        ArrowTallUpLeft: '',
                        ArrowTallUpRight: '',
                        ArrowTallDownLeft: '',
                        ArrowTallDownRight: '',
                        FieldEmpty: '',
                        FieldFilled: '',
                        FieldChanged: '',
                        FieldNotChanged: '',
                        RingerOff: '',
                        PlayResume: '',
                        BulletedList2: '',
                        BulletedList2Mirrored: '',
                        ImageCrosshair: '',
                        GitGraph: '',
                        Repo: '',
                        RepoSolid: '',
                        FolderQuery: '',
                        FolderList: '',
                        FolderListMirrored: '',
                        LocationOutline: '',
                        POISolid: '',
                        CalculatorNotEqualTo: '',
                        BoxSubtractSolid: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function h(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-11"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-11-2a8393d6.woff') format('woff')"
                        ),
                    },
                    icons: {
                        BoxAdditionSolid: '',
                        BoxMultiplySolid: '',
                        BoxPlaySolid: '',
                        BoxCheckmarkSolid: '',
                        CirclePauseSolid: '',
                        CirclePause: '',
                        MSNVideosSolid: '',
                        CircleStopSolid: '',
                        CircleStop: '',
                        NavigateBack: '',
                        NavigateBackMirrored: '',
                        NavigateForward: '',
                        NavigateForwardMirrored: '',
                        UnknownSolid: '',
                        UnknownMirroredSolid: '',
                        CircleAddition: '',
                        CircleAdditionSolid: '',
                        FilePDB: '',
                        FileTemplate: '',
                        FileSQL: '',
                        FileJAVA: '',
                        FileASPX: '',
                        FileCSS: '',
                        FileSass: '',
                        FileLess: '',
                        FileHTML: '',
                        JavaScriptLanguage: '',
                        CSharpLanguage: '',
                        CSharp: '',
                        VisualBasicLanguage: '',
                        VB: '',
                        CPlusPlusLanguage: '',
                        CPlusPlus: '',
                        FSharpLanguage: '',
                        FSharp: '',
                        TypeScriptLanguage: '',
                        PythonLanguage: '',
                        PY: '',
                        CoffeeScript: '',
                        MarkDownLanguage: '',
                        FullWidth: '',
                        FullWidthEdit: '',
                        Plug: '',
                        PlugSolid: '',
                        PlugConnected: '',
                        PlugDisconnected: '',
                        UnlockSolid: '',
                        Variable: '',
                        Parameter: '',
                        CommentUrgent: '',
                        Storyboard: '',
                        DiffInline: '',
                        DiffSideBySide: '',
                        ImageDiff: '',
                        ImagePixel: '',
                        FileBug: '',
                        FileCode: '',
                        FileComment: '',
                        BusinessHoursSign: '',
                        FileImage: '',
                        FileSymlink: '',
                        AutoFillTemplate: '',
                        WorkItem: '',
                        WorkItemBug: '',
                        LogRemove: '',
                        ColumnOptions: '',
                        Packages: '',
                        BuildIssue: '',
                        AssessmentGroup: '',
                        VariableGroup: '',
                        FullHistory: '',
                        Wheelchair: '',
                        SingleColumnEdit: '',
                        DoubleColumnEdit: '',
                        TripleColumnEdit: '',
                        ColumnLeftTwoThirdsEdit: '',
                        ColumnRightTwoThirdsEdit: '',
                        StreamLogo: '',
                        PassiveAuthentication: '',
                        AlertSolid: '',
                        MegaphoneSolid: '',
                        TaskSolid: '',
                        ConfigurationSolid: '',
                        BugSolid: '',
                        CrownSolid: '',
                        Trophy2Solid: '',
                        QuickNoteSolid: '',
                        ConstructionConeSolid: '',
                        PageListSolid: '',
                        PageListMirroredSolid: '',
                        StarburstSolid: '',
                        ReadingModeSolid: '',
                        SadSolid: '',
                        HealthSolid: '',
                        ShieldSolid: '',
                        GiftBoxSolid: '',
                        ShoppingCartSolid: '',
                        MailSolid: '',
                        ChatSolid: '',
                        RibbonSolid: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function p(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-12"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-12-7e945a1e.woff') format('woff')"
                        ),
                    },
                    icons: {
                        FinancialSolid: '',
                        FinancialMirroredSolid: '',
                        HeadsetSolid: '',
                        PermissionsSolid: '',
                        ParkingSolid: '',
                        ParkingMirroredSolid: '',
                        DiamondSolid: '',
                        AsteriskSolid: '',
                        OfflineStorageSolid: '',
                        BankSolid: '',
                        DecisionSolid: '',
                        Parachute: '',
                        ParachuteSolid: '',
                        FiltersSolid: '',
                        ColorSolid: '',
                        ReviewSolid: '',
                        ReviewRequestSolid: '',
                        ReviewRequestMirroredSolid: '',
                        ReviewResponseSolid: '',
                        FeedbackRequestSolid: '',
                        FeedbackRequestMirroredSolid: '',
                        FeedbackResponseSolid: '',
                        WorkItemBar: '',
                        WorkItemBarSolid: '',
                        Separator: '',
                        NavigateExternalInline: '',
                        PlanView: '',
                        TimelineMatrixView: '',
                        EngineeringGroup: '',
                        ProjectCollection: '',
                        CaretBottomRightCenter8: '',
                        CaretBottomLeftCenter8: '',
                        CaretTopRightCenter8: '',
                        CaretTopLeftCenter8: '',
                        DonutChart: '',
                        ChevronUnfold10: '',
                        ChevronFold10: '',
                        DoubleChevronDown8: '',
                        DoubleChevronUp8: '',
                        DoubleChevronLeft8: '',
                        DoubleChevronRight8: '',
                        ChevronDownEnd6: '',
                        ChevronUpEnd6: '',
                        ChevronLeftEnd6: '',
                        ChevronRightEnd6: '',
                        ContextMenu: '',
                        AzureAPIManagement: '',
                        AzureServiceEndpoint: '',
                        VSTSLogo: '',
                        VSTSAltLogo1: '',
                        VSTSAltLogo2: '',
                        FileTypeSolution: '',
                        WordLogoInverse16: '',
                        WordLogo16: '',
                        WordLogoFill16: '',
                        PowerPointLogoInverse16: '',
                        PowerPointLogo16: '',
                        PowerPointLogoFill16: '',
                        ExcelLogoInverse16: '',
                        ExcelLogo16: '',
                        ExcelLogoFill16: '',
                        OneNoteLogoInverse16: '',
                        OneNoteLogo16: '',
                        OneNoteLogoFill16: '',
                        OutlookLogoInverse16: '',
                        OutlookLogo16: '',
                        OutlookLogoFill16: '',
                        PublisherLogoInverse16: '',
                        PublisherLogo16: '',
                        PublisherLogoFill16: '',
                        VisioLogoInverse16: '',
                        VisioLogo16: '',
                        VisioLogoFill16: '',
                        TestBeaker: '',
                        TestBeakerSolid: '',
                        TestExploreSolid: '',
                        TestAutoSolid: '',
                        TestUserSolid: '',
                        TestImpactSolid: '',
                        TestPlan: '',
                        TestStep: '',
                        TestParameter: '',
                        TestSuite: '',
                        TestCase: '',
                        Sprint: '',
                        SignOut: '',
                        TriggerApproval: '',
                        Rocket: '',
                        AzureKeyVault: '',
                        Onboarding: '',
                        Transition: '',
                        LikeSolid: '',
                        DislikeSolid: '',
                        CRMCustomerInsightsApp: '',
                        EditCreate: '',
                        PlayReverseResume: '',
                        PlayReverse: '',
                        SearchData: '',
                        UnSetColor: '',
                        DeclineCall: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function C(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-13"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-13-c3989a02.woff') format('woff')"
                        ),
                    },
                    icons: {
                        RectangularClipping: '',
                        TeamsLogo16: '',
                        TeamsLogoFill16: '',
                        Spacer: '',
                        SkypeLogo16: '',
                        SkypeForBusinessLogo16: '',
                        SkypeForBusinessLogoFill16: '',
                        FilterSolid: '',
                        MailUndelivered: '',
                        MailTentative: '',
                        MailTentativeMirrored: '',
                        MailReminder: '',
                        ReceiptUndelivered: '',
                        ReceiptTentative: '',
                        ReceiptTentativeMirrored: '',
                        Inbox: '',
                        IRMReply: '',
                        IRMReplyMirrored: '',
                        IRMForward: '',
                        IRMForwardMirrored: '',
                        VoicemailIRM: '',
                        EventAccepted: '',
                        EventTentative: '',
                        EventTentativeMirrored: '',
                        EventDeclined: '',
                        IDBadge: '',
                        BackgroundColor: '',
                        OfficeFormsLogoInverse16: '',
                        OfficeFormsLogo: '',
                        OfficeFormsLogoFill: '',
                        OfficeFormsLogo16: '',
                        OfficeFormsLogoFill16: '',
                        OfficeFormsLogoInverse24: '',
                        OfficeFormsLogo24: '',
                        OfficeFormsLogoFill24: '',
                        PageLock: '',
                        NotExecuted: '',
                        NotImpactedSolid: '',
                        FieldReadOnly: '',
                        FieldRequired: '',
                        BacklogBoard: '',
                        ExternalBuild: '',
                        ExternalTFVC: '',
                        ExternalXAML: '',
                        IssueSolid: '',
                        DefectSolid: '',
                        LadybugSolid: '',
                        NugetLogo: '',
                        TFVCLogo: '',
                        ProjectLogo32: '',
                        ProjectLogoFill32: '',
                        ProjectLogo16: '',
                        ProjectLogoFill16: '',
                        SwayLogo32: '',
                        SwayLogoFill32: '',
                        SwayLogo16: '',
                        SwayLogoFill16: '',
                        ClassNotebookLogo32: '',
                        ClassNotebookLogoFill32: '',
                        ClassNotebookLogo16: '',
                        ClassNotebookLogoFill16: '',
                        ClassNotebookLogoInverse32: '',
                        ClassNotebookLogoInverse16: '',
                        StaffNotebookLogo32: '',
                        StaffNotebookLogoFill32: '',
                        StaffNotebookLogo16: '',
                        StaffNotebookLogoFill16: '',
                        StaffNotebookLogoInverted32: '',
                        StaffNotebookLogoInverted16: '',
                        KaizalaLogo: '',
                        TaskLogo: '',
                        ProtectionCenterLogo32: '',
                        GallatinLogo: '',
                        Globe2: '',
                        Guitar: '',
                        Breakfast: '',
                        Brunch: '',
                        BeerMug: '',
                        Vacation: '',
                        Teeth: '',
                        Taxi: '',
                        Chopsticks: '',
                        SyncOccurence: '',
                        UnsyncOccurence: '',
                        GIF: '',
                        PrimaryCalendar: '',
                        SearchCalendar: '',
                        VideoOff: '',
                        MicrosoftFlowLogo: '',
                        BusinessCenterLogo: '',
                        ToDoLogoBottom: '',
                        ToDoLogoTop: '',
                        EditSolid12: '',
                        EditSolidMirrored12: '',
                        UneditableSolid12: '',
                        UneditableSolidMirrored12: '',
                        UneditableMirrored: '',
                        AdminALogo32: '',
                        AdminALogoFill32: '',
                        ToDoLogoInverse: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function F(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-14"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-14-5cf58db8.woff') format('woff')"
                        ),
                    },
                    icons: {
                        Snooze: '',
                        WaffleOffice365: '',
                        ImageSearch: '',
                        NewsSearch: '',
                        VideoSearch: '',
                        R: '',
                        FontColorA: '',
                        FontColorSwatch: '',
                        LightWeight: '',
                        NormalWeight: '',
                        SemiboldWeight: '',
                        GroupObject: '',
                        UngroupObject: '',
                        AlignHorizontalLeft: '',
                        AlignHorizontalCenter: '',
                        AlignHorizontalRight: '',
                        AlignVerticalTop: '',
                        AlignVerticalCenter: '',
                        AlignVerticalBottom: '',
                        HorizontalDistributeCenter: '',
                        VerticalDistributeCenter: '',
                        Ellipse: '',
                        Line: '',
                        Octagon: '',
                        Hexagon: '',
                        Pentagon: '',
                        RightTriangle: '',
                        HalfCircle: '',
                        QuarterCircle: '',
                        ThreeQuarterCircle: '',
                        '6PointStar': '',
                        '12PointStar': '',
                        ArrangeBringToFront: '',
                        ArrangeSendToBack: '',
                        ArrangeSendBackward: '',
                        ArrangeBringForward: '',
                        BorderDash: '',
                        BorderDot: '',
                        LineStyle: '',
                        LineThickness: '',
                        WindowEdit: '',
                        HintText: '',
                        MediaAdd: '',
                        AnchorLock: '',
                        AutoHeight: '',
                        ChartSeries: '',
                        ChartXAngle: '',
                        ChartYAngle: '',
                        Combobox: '',
                        LineSpacing: '',
                        Padding: '',
                        PaddingTop: '',
                        PaddingBottom: '',
                        PaddingLeft: '',
                        PaddingRight: '',
                        NavigationFlipper: '',
                        AlignJustify: '',
                        TextOverflow: '',
                        VisualsFolder: '',
                        VisualsStore: '',
                        PictureCenter: '',
                        PictureFill: '',
                        PicturePosition: '',
                        PictureStretch: '',
                        PictureTile: '',
                        Slider: '',
                        SliderHandleSize: '',
                        DefaultRatio: '',
                        NumberSequence: '',
                        GUID: '',
                        ReportAdd: '',
                        DashboardAdd: '',
                        MapPinSolid: '',
                        WebPublish: '',
                        PieSingleSolid: '',
                        BlockedSolid: '',
                        DrillDown: '',
                        DrillDownSolid: '',
                        DrillExpand: '',
                        DrillShow: '',
                        SpecialEvent: '',
                        OneDriveFolder16: '',
                        FunctionalManagerDashboard: '',
                        BIDashboard: '',
                        CodeEdit: '',
                        RenewalCurrent: '',
                        RenewalFuture: '',
                        SplitObject: '',
                        BulkUpload: '',
                        DownloadDocument: '',
                        GreetingCard: '',
                        Flower: '',
                        WaitlistConfirm: '',
                        WaitlistConfirmMirrored: '',
                        LaptopSecure: '',
                        DragObject: '',
                        EntryView: '',
                        EntryDecline: '',
                        ContactCardSettings: '',
                        ContactCardSettingsMirrored: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function L(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-15"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-15-3807251b.woff') format('woff')"
                        ),
                    },
                    icons: {
                        CalendarSettings: '',
                        CalendarSettingsMirrored: '',
                        HardDriveLock: '',
                        HardDriveUnlock: '',
                        AccountManagement: '',
                        ReportWarning: '',
                        TransitionPop: '',
                        TransitionPush: '',
                        TransitionEffect: '',
                        LookupEntities: '',
                        ExploreData: '',
                        AddBookmark: '',
                        SearchBookmark: '',
                        DrillThrough: '',
                        MasterDatabase: '',
                        CertifiedDatabase: '',
                        MaximumValue: '',
                        MinimumValue: '',
                        VisualStudioIDELogo32: '',
                        PasteAsText: '',
                        PasteAsCode: '',
                        BrowserTab: '',
                        BrowserTabScreenshot: '',
                        DesktopScreenshot: '',
                        FileYML: '',
                        ClipboardSolid: '',
                        FabricUserFolder: '',
                        FabricNetworkFolder: '',
                        BullseyeTarget: '',
                        AnalyticsView: '',
                        Video360Generic: '',
                        Untag: '',
                        Leave: '',
                        Trending12: '',
                        Blocked12: '',
                        Warning12: '',
                        CheckedOutByOther12: '',
                        CheckedOutByYou12: '',
                        CircleShapeSolid: '',
                        SquareShapeSolid: '',
                        TriangleShapeSolid: '',
                        DropShapeSolid: '',
                        RectangleShapeSolid: '',
                        ZoomToFit: '',
                        InsertColumnsLeft: '',
                        InsertColumnsRight: '',
                        InsertRowsAbove: '',
                        InsertRowsBelow: '',
                        DeleteColumns: '',
                        DeleteRows: '',
                        DeleteRowsMirrored: '',
                        DeleteTable: '',
                        AccountBrowser: '',
                        VersionControlPush: '',
                        StackedColumnChart2: '',
                        TripleColumnWide: '',
                        QuadColumn: '',
                        WhiteBoardApp16: '',
                        WhiteBoardApp32: '',
                        PinnedSolid: '',
                        InsertSignatureLine: '',
                        ArrangeByFrom: '',
                        Phishing: '',
                        CreateMailRule: '',
                        PublishCourse: '',
                        DictionaryRemove: '',
                        UserRemove: '',
                        UserEvent: '',
                        Encryption: '',
                        PasswordField: '',
                        OpenInNewTab: '',
                        Hide3: '',
                        VerifiedBrandSolid: '',
                        MarkAsProtected: '',
                        AuthenticatorApp: '',
                        WebTemplate: '',
                        DefenderTVM: '',
                        MedalSolid: '',
                        D365TalentLearn: '',
                        D365TalentInsight: '',
                        D365TalentHRCore: '',
                        BacklogList: '',
                        ButtonControl: '',
                        TableGroup: '',
                        MountainClimbing: '',
                        TagUnknown: '',
                        TagUnknownMirror: '',
                        TagUnknown12: '',
                        TagUnknown12Mirror: '',
                        Link12: '',
                        Presentation: '',
                        Presentation12: '',
                        Lock12: '',
                        BuildDefinition: '',
                        ReleaseDefinition: '',
                        SaveTemplate: '',
                        UserGauge: '',
                        BlockedSiteSolid12: '',
                        TagSolid: '',
                        OfficeChat: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function y(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-16"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-16-9cf93f3b.woff') format('woff')"
                        ),
                    },
                    icons: {
                        OfficeChatSolid: '',
                        MailSchedule: '',
                        WarningSolid: '',
                        Blocked2Solid: '',
                        SkypeCircleArrow: '',
                        SkypeArrow: '',
                        SyncStatus: '',
                        SyncStatusSolid: '',
                        ProjectDocument: '',
                        ToDoLogoOutline: '',
                        VisioOnlineLogoFill32: '',
                        VisioOnlineLogo32: '',
                        VisioOnlineLogoCloud32: '',
                        VisioDiagramSync: '',
                        Event12: '',
                        EventDateMissed12: '',
                        UserOptional: '',
                        ResponsesMenu: '',
                        DoubleDownArrow: '',
                        DistributeDown: '',
                        BookmarkReport: '',
                        FilterSettings: '',
                        GripperDotsVertical: '',
                        MailAttached: '',
                        AddIn: '',
                        LinkedDatabase: '',
                        TableLink: '',
                        PromotedDatabase: '',
                        BarChartVerticalFilter: '',
                        BarChartVerticalFilterSolid: '',
                        MicOff2: '',
                        MicrosoftTranslatorLogo: '',
                        ShowTimeAs: '',
                        FileRequest: '',
                        WorkItemAlert: '',
                        PowerBILogo16: '',
                        PowerBILogoBackplate16: '',
                        BulletedListText: '',
                        BulletedListBullet: '',
                        BulletedListTextMirrored: '',
                        BulletedListBulletMirrored: '',
                        NumberedListText: '',
                        NumberedListNumber: '',
                        NumberedListTextMirrored: '',
                        NumberedListNumberMirrored: '',
                        RemoveLinkChain: '',
                        RemoveLinkX: '',
                        FabricTextHighlight: '',
                        ClearFormattingA: '',
                        ClearFormattingEraser: '',
                        Photo2Fill: '',
                        IncreaseIndentText: '',
                        IncreaseIndentArrow: '',
                        DecreaseIndentText: '',
                        DecreaseIndentArrow: '',
                        IncreaseIndentTextMirrored: '',
                        IncreaseIndentArrowMirrored: '',
                        DecreaseIndentTextMirrored: '',
                        DecreaseIndentArrowMirrored: '',
                        CheckListText: '',
                        CheckListCheck: '',
                        CheckListTextMirrored: '',
                        CheckListCheckMirrored: '',
                        NumberSymbol: '',
                        Coupon: '',
                        VerifiedBrand: '',
                        ReleaseGate: '',
                        ReleaseGateCheck: '',
                        ReleaseGateError: '',
                        M365InvoicingLogo: '',
                        RemoveFromShoppingList: '',
                        ShieldAlert: '',
                        FabricTextHighlightComposite: '',
                        Dataflows: '',
                        GenericScanFilled: '',
                        DiagnosticDataBarTooltip: '',
                        SaveToMobile: '',
                        Orientation2: '',
                        ScreenCast: '',
                        ShowGrid: '',
                        SnapToGrid: '',
                        ContactList: '',
                        NewMail: '',
                        EyeShadow: '',
                        FabricFolderConfirm: '',
                        InformationBarriers: '',
                        CommentActive: '',
                        ColumnVerticalSectionEdit: '',
                        WavingHand: '',
                        ShakeDevice: '',
                        SmartGlassRemote: '',
                        Rotate90Clockwise: '',
                        Rotate90CounterClockwise: '',
                        CampaignTemplate: '',
                        ChartTemplate: '',
                        PageListFilter: '',
                        SecondaryNav: '',
                        ColumnVerticalSection: '',
                        SkypeCircleSlash: '',
                        SkypeSlash: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            function M(e, o) {
                void 0 === e && (e = '');
                var r = {
                    style: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        speak: 'none',
                    },
                    fontFace: {
                        fontFamily: '"FabricMDL2Icons-17"',
                        src: "url('".concat(
                            e,
                            "fabric-icons-17-0c4ed701.woff') format('woff')"
                        ),
                    },
                    icons: {
                        CustomizeToolbar: '',
                        DuplicateRow: '',
                        RemoveFromTrash: '',
                        MailOptions: '',
                        Childof: '',
                        Footer: '',
                        Header: '',
                        BarChartVerticalFill: '',
                        StackedColumnChart2Fill: '',
                        PlainText: '',
                        AccessibiltyChecker: '',
                        DatabaseSync: '',
                        ReservationOrders: '',
                        TabOneColumn: '',
                        TabTwoColumn: '',
                        TabThreeColumn: '',
                        BulletedTreeList: '',
                        MicrosoftTranslatorLogoGreen: '',
                        MicrosoftTranslatorLogoBlue: '',
                        InternalInvestigation: '',
                        AddReaction: '',
                        ContactHeart: '',
                        VisuallyImpaired: '',
                        EventToDoLogo: '',
                        Variable2: '',
                        ModelingView: '',
                        DisconnectVirtualMachine: '',
                        ReportLock: '',
                        Uneditable2: '',
                        Uneditable2Mirrored: '',
                        BarChartVerticalEdit: '',
                        GlobalNavButtonActive: '',
                        PollResults: '',
                        Rerun: '',
                        QandA: '',
                        QandAMirror: '',
                        BookAnswers: '',
                        AlertSettings: '',
                        TrimStart: '',
                        TrimEnd: '',
                        TableComputed: '',
                        DecreaseIndentLegacy: '',
                        IncreaseIndentLegacy: '',
                        SizeLegacy: '',
                    },
                };
                (0, t.fm)(r, o);
            }
            var v = function () {
                    (0, t.M_)('trash', 'delete'),
                        (0, t.M_)('onedrive', 'onedrivelogo'),
                        (0, t.M_)('alertsolid12', 'eventdatemissed12'),
                        (0, t.M_)('sixpointstar', '6pointstar'),
                        (0, t.M_)('twelvepointstar', '12pointstar'),
                        (0, t.M_)('toggleon', 'toggleleft'),
                        (0, t.M_)('toggleoff', 'toggleright');
                },
                D = r(84346);
            (0, r(49288).x)('@fluentui/font-icons-mdl2', '8.5.34');
            var k = ''.concat(t.SV, '/assets/icons/'),
                b = (0, D.J)();
            function T(e, o) {
                var r, t;
                void 0 === e &&
                    (e =
                        (null === (r = null == b ? void 0 : b.FabricConfig) ||
                        void 0 === r
                            ? void 0
                            : r.iconBaseUrl) ||
                        (null === (t = null == b ? void 0 : b.FabricConfig) ||
                        void 0 === t
                            ? void 0
                            : t.fontBaseUrl) ||
                        k),
                    [
                        i,
                        n,
                        a,
                        l,
                        s,
                        c,
                        d,
                        u,
                        g,
                        S,
                        f,
                        m,
                        h,
                        p,
                        C,
                        F,
                        L,
                        y,
                        M,
                    ].forEach(function (r) {
                        return r(e, o);
                    }),
                    v();
            }
        },
    },
]);
