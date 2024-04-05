'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [675],
    {
        98770: (e, t, o) => {
            o.d(t, {Z: () => J});
            var n = o(65812),
                r = o(82187),
                i = o.n(r),
                a = o(18344),
                l = o(36760),
                c = o(7792),
                s = o(93262),
                d = o(72237),
                p = o(24627),
                u = o(96677),
                g = o(27767),
                m = o(88631),
                b = o(22345),
                h = o(81587),
                f = o(24192),
                $ = o(98615),
                w = o(16760),
                v = o(40414),
                C = o(28229),
                I = o(93455),
                S = o(60091),
                x = o(91265),
                y = o(21661),
                N = o(22794),
                k = o(44398),
                E = o(93189),
                O = o(35237);
            const P = (e) => {
                const {
                        prefixCls: t,
                        switcherIcon: o,
                        treeNodeProps: r,
                        showLine: a,
                    } = e,
                    {isLeaf: l, expanded: c, loading: s} = r;
                if (s)
                    return n.createElement(N.Z, {
                        className: `${t}-switcher-loading-icon`,
                    });
                let d;
                if ((a && 'object' == typeof a && (d = a.showLeafIcon), l)) {
                    if (!a) return null;
                    if ('boolean' != typeof d && d) {
                        const e = 'function' == typeof d ? d(r) : d,
                            o = `${t}-switcher-line-custom-icon`;
                        return n.isValidElement(e)
                            ? (0, O.Tm)(e, {
                                  className: i()(e.props.className || '', o),
                              })
                            : e;
                    }
                    return d
                        ? n.createElement(y.Z, {
                              className: `${t}-switcher-line-icon`,
                          })
                        : n.createElement('span', {
                              className: `${t}-switcher-leaf-line`,
                          });
                }
                const p = `${t}-switcher-icon`,
                    u = 'function' == typeof o ? o(r) : o;
                return n.isValidElement(u)
                    ? (0, O.Tm)(u, {className: i()(u.props.className || '', p)})
                    : void 0 !== u
                      ? u
                      : a
                        ? c
                            ? n.createElement(k.Z, {
                                  className: `${t}-switcher-line-icon`,
                              })
                            : n.createElement(E.Z, {
                                  className: `${t}-switcher-line-icon`,
                              })
                        : n.createElement(x.Z, {className: p});
            };
            var H = o(884),
                Z = o(35029),
                B = o(25361),
                T = o(258),
                j = o(66922),
                R = o(92825);
            const q = new H.E4('ant-tree-node-fx-do-not-use', {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1},
                }),
                M = (e, t) => ({
                    [`.${e}-switcher-icon`]: {
                        display: 'inline-block',
                        fontSize: 10,
                        verticalAlign: 'baseline',
                        svg: {transition: `transform ${t.motionDurationSlow}`},
                    },
                }),
                A = (e, t) => ({
                    [`.${e}-drop-indicator`]: {
                        position: 'absolute',
                        zIndex: 1,
                        height: 2,
                        backgroundColor: t.colorPrimary,
                        borderRadius: 1,
                        pointerEvents: 'none',
                        '&:after': {
                            position: 'absolute',
                            top: -3,
                            insetInlineStart: -6,
                            width: 8,
                            height: 8,
                            backgroundColor: 'transparent',
                            border: `${(0, H.bf)(t.lineWidthBold)} solid ${
                                t.colorPrimary
                            }`,
                            borderRadius: '50%',
                            content: '""',
                        },
                    },
                }),
                L = (e, t) => {
                    const {
                            treeCls: o,
                            treeNodeCls: n,
                            treeNodePadding: r,
                            titleHeight: i,
                            nodeSelectedBg: a,
                            nodeHoverBg: l,
                        } = t,
                        c = t.paddingXS;
                    return {
                        [o]: Object.assign(Object.assign({}, (0, j.Wf)(t)), {
                            background: t.colorBgContainer,
                            borderRadius: t.borderRadius,
                            transition: `background-color ${t.motionDurationSlow}`,
                            [`&${o}-rtl`]: {
                                [`${o}-switcher`]: {
                                    '&_close': {
                                        [`${o}-switcher-icon`]: {
                                            svg: {transform: 'rotate(90deg)'},
                                        },
                                    },
                                },
                            },
                            [`&-focused:not(:hover):not(${o}-active-focused)`]:
                                Object.assign({}, (0, j.oN)(t)),
                            [`${o}-list-holder-inner`]: {
                                alignItems: 'flex-start',
                            },
                            [`&${o}-block-node`]: {
                                [`${o}-list-holder-inner`]: {
                                    alignItems: 'stretch',
                                    [`${o}-node-content-wrapper`]: {
                                        flex: 'auto',
                                    },
                                    [`${n}.dragging`]: {
                                        position: 'relative',
                                        '&:after': {
                                            position: 'absolute',
                                            top: 0,
                                            insetInlineEnd: 0,
                                            bottom: r,
                                            insetInlineStart: 0,
                                            border: `1px solid ${t.colorPrimary}`,
                                            opacity: 0,
                                            animationName: q,
                                            animationDuration:
                                                t.motionDurationSlow,
                                            animationPlayState: 'running',
                                            animationFillMode: 'forwards',
                                            content: '""',
                                            pointerEvents: 'none',
                                        },
                                    },
                                },
                            },
                            [`${n}`]: {
                                display: 'flex',
                                alignItems: 'flex-start',
                                padding: `0 0 ${(0, H.bf)(r)} 0`,
                                outline: 'none',
                                '&-rtl': {direction: 'rtl'},
                                '&-disabled': {
                                    [`${o}-node-content-wrapper`]: {
                                        color: t.colorTextDisabled,
                                        cursor: 'not-allowed',
                                        '&:hover': {background: 'transparent'},
                                    },
                                },
                                [`&-active ${o}-node-content-wrapper`]: {
                                    background: t.controlItemBgHover,
                                },
                                [`&:not(${n}-disabled).filter-node ${o}-title`]:
                                    {color: 'inherit', fontWeight: 500},
                                '&-draggable': {
                                    cursor: 'grab',
                                    [`${o}-draggable-icon`]: {
                                        flexShrink: 0,
                                        width: i,
                                        lineHeight: `${(0, H.bf)(i)}`,
                                        textAlign: 'center',
                                        visibility: 'visible',
                                        opacity: 0.2,
                                        transition: `opacity ${t.motionDurationSlow}`,
                                        [`${n}:hover &`]: {opacity: 0.45},
                                    },
                                    [`&${n}-disabled`]: {
                                        [`${o}-draggable-icon`]: {
                                            visibility: 'hidden',
                                        },
                                    },
                                },
                            },
                            [`${o}-indent`]: {
                                alignSelf: 'stretch',
                                whiteSpace: 'nowrap',
                                userSelect: 'none',
                                '&-unit': {display: 'inline-block', width: i},
                            },
                            [`${o}-draggable-icon`]: {visibility: 'hidden'},
                            [`${o}-switcher`]: Object.assign(
                                Object.assign({}, M(e, t)),
                                {
                                    position: 'relative',
                                    flex: 'none',
                                    alignSelf: 'stretch',
                                    width: i,
                                    margin: 0,
                                    lineHeight: `${(0, H.bf)(i)}`,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    transition: `all ${t.motionDurationSlow}`,
                                    borderRadius: t.borderRadius,
                                    '&-noop': {cursor: 'unset'},
                                    [`&:not(${o}-switcher-noop):hover`]: {
                                        backgroundColor: t.colorBgTextHover,
                                    },
                                    '&_close': {
                                        [`${o}-switcher-icon`]: {
                                            svg: {transform: 'rotate(-90deg)'},
                                        },
                                    },
                                    '&-loading-icon': {color: t.colorPrimary},
                                    '&-leaf-line': {
                                        position: 'relative',
                                        zIndex: 1,
                                        display: 'inline-block',
                                        width: '100%',
                                        height: '100%',
                                        '&:before': {
                                            position: 'absolute',
                                            top: 0,
                                            insetInlineEnd: t
                                                .calc(i)
                                                .div(2)
                                                .equal(),
                                            bottom: t.calc(r).mul(-1).equal(),
                                            marginInlineStart: -1,
                                            borderInlineEnd: `1px solid ${t.colorBorder}`,
                                            content: '""',
                                        },
                                        '&:after': {
                                            position: 'absolute',
                                            width: t
                                                .calc(t.calc(i).div(2).equal())
                                                .mul(0.8)
                                                .equal(),
                                            height: t.calc(i).div(2).equal(),
                                            borderBottom: `1px solid ${t.colorBorder}`,
                                            content: '""',
                                        },
                                    },
                                }
                            ),
                            [`${o}-checkbox`]: {
                                top: 'initial',
                                marginInlineEnd: c,
                                alignSelf: 'flex-start',
                                marginTop: t.marginXXS,
                            },
                            [`${o}-node-content-wrapper, ${o}-checkbox + span`]:
                                {
                                    position: 'relative',
                                    zIndex: 'auto',
                                    minHeight: i,
                                    margin: 0,
                                    padding: `0 ${(0, H.bf)(
                                        t.calc(t.paddingXS).div(2).equal()
                                    )}`,
                                    color: 'inherit',
                                    lineHeight: `${(0, H.bf)(i)}`,
                                    background: 'transparent',
                                    borderRadius: t.borderRadius,
                                    cursor: 'pointer',
                                    transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
                                    '&:hover': {backgroundColor: l},
                                    [`&${o}-node-selected`]: {
                                        backgroundColor: a,
                                    },
                                    [`${o}-iconEle`]: {
                                        display: 'inline-block',
                                        width: i,
                                        height: i,
                                        lineHeight: `${(0, H.bf)(i)}`,
                                        textAlign: 'center',
                                        verticalAlign: 'top',
                                        '&:empty': {display: 'none'},
                                    },
                                },
                            [`${o}-unselectable ${o}-node-content-wrapper:hover`]:
                                {backgroundColor: 'transparent'},
                            [`${o}-node-content-wrapper`]: Object.assign(
                                {
                                    lineHeight: `${(0, H.bf)(i)}`,
                                    userSelect: 'none',
                                },
                                A(e, t)
                            ),
                            [`${n}.drop-container`]: {
                                '> [draggable]': {
                                    boxShadow: `0 0 0 2px ${t.colorPrimary}`,
                                },
                            },
                            '&-show-line': {
                                [`${o}-indent`]: {
                                    '&-unit': {
                                        position: 'relative',
                                        height: '100%',
                                        '&:before': {
                                            position: 'absolute',
                                            top: 0,
                                            insetInlineEnd: t
                                                .calc(i)
                                                .div(2)
                                                .equal(),
                                            bottom: t.calc(r).mul(-1).equal(),
                                            borderInlineEnd: `1px solid ${t.colorBorder}`,
                                            content: '""',
                                        },
                                        '&-end': {
                                            '&:before': {display: 'none'},
                                        },
                                    },
                                },
                                [`${o}-switcher`]: {
                                    background: 'transparent',
                                    '&-line-icon': {verticalAlign: '-0.15em'},
                                },
                            },
                            [`${n}-leaf-last`]: {
                                [`${o}-switcher`]: {
                                    '&-leaf-line': {
                                        '&:before': {
                                            top: 'auto !important',
                                            bottom: 'auto !important',
                                            height: `${(0, H.bf)(
                                                t.calc(i).div(2).equal()
                                            )} !important`,
                                        },
                                    },
                                },
                            },
                        }),
                    };
                },
                W = (e) => {
                    const {
                        treeCls: t,
                        treeNodeCls: o,
                        treeNodePadding: n,
                        directoryNodeSelectedBg: r,
                        directoryNodeSelectedColor: i,
                    } = e;
                    return {
                        [`${t}${t}-directory`]: {
                            [o]: {
                                position: 'relative',
                                '&:before': {
                                    position: 'absolute',
                                    top: 0,
                                    insetInlineEnd: 0,
                                    bottom: n,
                                    insetInlineStart: 0,
                                    transition: `background-color ${e.motionDurationMid}`,
                                    content: '""',
                                    pointerEvents: 'none',
                                },
                                '&:hover': {
                                    '&:before': {
                                        background: e.controlItemBgHover,
                                    },
                                },
                                '> *': {zIndex: 1},
                                [`${t}-switcher`]: {
                                    transition: `color ${e.motionDurationMid}`,
                                },
                                [`${t}-node-content-wrapper`]: {
                                    borderRadius: 0,
                                    userSelect: 'none',
                                    '&:hover': {background: 'transparent'},
                                    [`&${t}-node-selected`]: {
                                        color: i,
                                        background: 'transparent',
                                    },
                                },
                                '&-selected': {
                                    '\n            &:hover::before,\n            &::before\n          ':
                                        {background: r},
                                    [`${t}-switcher`]: {color: i},
                                    [`${t}-node-content-wrapper`]: {
                                        color: i,
                                        background: 'transparent',
                                    },
                                },
                            },
                        },
                    };
                },
                D = (e, t) => {
                    const o = `.${e}`,
                        n = `${o}-treenode`,
                        r = t.calc(t.paddingXS).div(2).equal(),
                        i = (0, B.TS)(t, {
                            treeCls: o,
                            treeNodeCls: n,
                            treeNodePadding: r,
                        });
                    return [L(e, i), W(i)];
                },
                _ = (e) => {
                    const {controlHeightSM: t} = e;
                    return {
                        titleHeight: t,
                        nodeHoverBg: e.controlItemBgHover,
                        nodeSelectedBg: e.controlItemBgActive,
                    };
                },
                z =
                    ((0, T.I$)(
                        'Tree',
                        (e, t) => {
                            let {prefixCls: o} = t;
                            return [
                                {
                                    [e.componentCls]: (0, Z.C2)(
                                        `${o}-checkbox`,
                                        e
                                    ),
                                },
                                D(o, e),
                                (0, R.Z)(e),
                            ];
                        },
                        (e) => {
                            const {colorTextLightSolid: t, colorPrimary: o} = e;
                            return Object.assign(Object.assign({}, _(e)), {
                                directoryNodeSelectedColor: t,
                                directoryNodeSelectedBg: o,
                            });
                        }
                    ),
                    (e) => {
                        const {
                                componentCls: t,
                                treePrefixCls: o,
                                colorBgElevated: n,
                            } = e,
                            r = `.${o}`;
                        return [
                            {
                                [`${t}-dropdown`]: [
                                    {
                                        padding: `${(0, H.bf)(
                                            e.paddingXS
                                        )} ${(0, H.bf)(
                                            e.calc(e.paddingXS).div(2).equal()
                                        )}`,
                                    },
                                    D(o, (0, B.TS)(e, {colorBgContainer: n})),
                                    {
                                        [r]: {
                                            borderRadius: 0,
                                            [`${r}-list-holder-inner`]: {
                                                alignItems: 'stretch',
                                                [`${r}-treenode`]: {
                                                    [`${r}-node-content-wrapper`]:
                                                        {flex: 'auto'},
                                                },
                                            },
                                        },
                                    },
                                    (0, Z.C2)(`${o}-checkbox`, e),
                                    {
                                        '&-rtl': {
                                            direction: 'rtl',
                                            [`${r}-switcher${r}-switcher_close`]:
                                                {
                                                    [`${r}-switcher-icon svg`]:
                                                        {
                                                            transform:
                                                                'rotate(90deg)',
                                                        },
                                                },
                                        },
                                    },
                                ],
                            },
                        ];
                    });
            const F = (e, t) => {
                    var o,
                        {
                            prefixCls: r,
                            size: d,
                            disabled: x,
                            bordered: y = !0,
                            className: N,
                            rootClassName: k,
                            treeCheckable: E,
                            multiple: O,
                            listHeight: H = 256,
                            listItemHeight: Z = 26,
                            placement: j,
                            notFoundContent: R,
                            switcherIcon: q,
                            treeLine: M,
                            getPopupContainer: A,
                            popupClassName: L,
                            dropdownClassName: W,
                            treeIcon: D = !1,
                            transitionName: F,
                            choiceTransitionName: X = '',
                            status: V,
                            treeExpandAction: J,
                            builtinPlacements: Q,
                            dropdownMatchSelectWidth: U,
                            popupMatchSelectWidth: Y,
                            allowClear: G,
                            variant: K,
                            dropdownStyle: ee,
                            tagRender: te,
                        } = e,
                        oe = (function (e, t) {
                            var o = {};
                            for (var n in e)
                                Object.prototype.hasOwnProperty.call(e, n) &&
                                    t.indexOf(n) < 0 &&
                                    (o[n] = e[n]);
                            if (
                                null != e &&
                                'function' ==
                                    typeof Object.getOwnPropertySymbols
                            ) {
                                var r = 0;
                                for (
                                    n = Object.getOwnPropertySymbols(e);
                                    r < n.length;
                                    r++
                                )
                                    t.indexOf(n[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            n[r]
                                        ) &&
                                        (o[n[r]] = e[n[r]]);
                            }
                            return o;
                        })(e, [
                            'prefixCls',
                            'size',
                            'disabled',
                            'bordered',
                            'className',
                            'rootClassName',
                            'treeCheckable',
                            'multiple',
                            'listHeight',
                            'listItemHeight',
                            'placement',
                            'notFoundContent',
                            'switcherIcon',
                            'treeLine',
                            'getPopupContainer',
                            'popupClassName',
                            'dropdownClassName',
                            'treeIcon',
                            'transitionName',
                            'choiceTransitionName',
                            'status',
                            'treeExpandAction',
                            'builtinPlacements',
                            'dropdownMatchSelectWidth',
                            'popupMatchSelectWidth',
                            'allowClear',
                            'variant',
                            'dropdownStyle',
                            'tagRender',
                        ]);
                    const {
                            getPopupContainer: ne,
                            getPrefixCls: re,
                            renderEmpty: ie,
                            direction: ae,
                            virtual: le,
                            popupMatchSelectWidth: ce,
                            popupOverflow: se,
                        } = n.useContext(u.E_),
                        de = re(),
                        pe = re('select', r),
                        ue = re('select-tree', r),
                        ge = re('tree-select', r),
                        {compactSize: me, compactItemClassnames: be} = (0,
                        S.ri)(pe, ae),
                        he = (0, b.Z)(pe),
                        fe = (0, b.Z)(ge),
                        [$e, we, ve] = (0, v.Z)(pe, he),
                        [Ce] = (function (e, t, o) {
                            return (0, T.I$)(
                                'TreeSelect',
                                (e) => {
                                    const o = (0, B.TS)(e, {treePrefixCls: t});
                                    return [z(o)];
                                },
                                _
                            )(e, o);
                        })(ge, ue, fe),
                        [Ie, Se] = (0, $.Z)(K, y),
                        xe = i()(
                            L || W,
                            `${ge}-dropdown`,
                            {[`${ge}-dropdown-rtl`]: 'rtl' === ae},
                            k,
                            ve,
                            he,
                            fe,
                            we
                        ),
                        ye = !(!E && !O),
                        Ne = (0, I.Z)(oe.suffixIcon, oe.showArrow),
                        ke =
                            null !== (o = null != Y ? Y : U) && void 0 !== o
                                ? o
                                : ce,
                        {
                            status: Ee,
                            hasFeedback: Oe,
                            isFormItemInput: Pe,
                            feedbackIcon: He,
                        } = n.useContext(f.aM),
                        Ze = (0, p.F)(Ee, V),
                        {
                            suffixIcon: Be,
                            removeIcon: Te,
                            clearIcon: je,
                        } = (0, C.Z)(
                            Object.assign(Object.assign({}, oe), {
                                multiple: ye,
                                showSuffixIcon: Ne,
                                hasFeedback: Oe,
                                feedbackIcon: He,
                                prefixCls: pe,
                                componentName: 'TreeSelect',
                            })
                        ),
                        Re = !0 === G ? {clearIcon: je} : G;
                    let qe;
                    qe =
                        void 0 !== R
                            ? R
                            : (null == ie ? void 0 : ie('Select')) ||
                              n.createElement(g.Z, {componentName: 'Select'});
                    const Me = (0, l.Z)(oe, [
                            'suffixIcon',
                            'removeIcon',
                            'clearIcon',
                            'itemIcon',
                            'switcherIcon',
                        ]),
                        Ae = n.useMemo(
                            () =>
                                void 0 !== j
                                    ? j
                                    : 'rtl' === ae
                                      ? 'bottomRight'
                                      : 'bottomLeft',
                            [j, ae]
                        ),
                        Le = (0, h.Z)((e) => {
                            var t;
                            return null !== (t = null != d ? d : me) &&
                                void 0 !== t
                                ? t
                                : e;
                        }),
                        We = n.useContext(m.Z),
                        De = null != x ? x : We,
                        _e = i()(
                            !r && ge,
                            {
                                [`${pe}-lg`]: 'large' === Le,
                                [`${pe}-sm`]: 'small' === Le,
                                [`${pe}-rtl`]: 'rtl' === ae,
                                [`${pe}-${Ie}`]: Se,
                                [`${pe}-in-form-item`]: Pe,
                            },
                            (0, p.Z)(pe, Ze, Oe),
                            be,
                            N,
                            k,
                            ve,
                            he,
                            fe,
                            we
                        ),
                        [ze] = (0, c.Cn)(
                            'SelectLike',
                            null == ee ? void 0 : ee.zIndex
                        );
                    return $e(
                        Ce(
                            n.createElement(
                                a.ZP,
                                Object.assign({virtual: le, disabled: De}, Me, {
                                    dropdownMatchSelectWidth: ke,
                                    builtinPlacements: (0, w.Z)(Q, se),
                                    ref: t,
                                    prefixCls: pe,
                                    className: _e,
                                    listHeight: H,
                                    listItemHeight: Z,
                                    treeCheckable: E
                                        ? n.createElement('span', {
                                              className: `${pe}-tree-checkbox-inner`,
                                          })
                                        : E,
                                    treeLine: !!M,
                                    suffixIcon: Be,
                                    multiple: ye,
                                    placement: Ae,
                                    removeIcon: Te,
                                    allowClear: Re,
                                    switcherIcon: (e) =>
                                        n.createElement(P, {
                                            prefixCls: ue,
                                            switcherIcon: q,
                                            treeNodeProps: e,
                                            showLine: M,
                                        }),
                                    showTreeIcon: D,
                                    notFoundContent: qe,
                                    getPopupContainer: A || ne,
                                    treeMotion: null,
                                    dropdownClassName: xe,
                                    dropdownStyle: Object.assign(
                                        Object.assign({}, ee),
                                        {zIndex: ze}
                                    ),
                                    choiceTransitionName: (0, s.m)(de, '', X),
                                    transitionName: (0, s.m)(de, 'slide-up', F),
                                    treeExpandAction: J,
                                    tagRender: ye ? te : void 0,
                                })
                            )
                        )
                    );
                },
                X = n.forwardRef(F),
                V = (0, d.Z)(X);
            (X.TreeNode = a.OF),
                (X.SHOW_ALL = a.Qw),
                (X.SHOW_PARENT = a.hT),
                (X.SHOW_CHILD = a.FJ),
                (X._InternalPanelDoNotUseOrYouWillBeFired = V);
            const J = X;
        },
        74072: (e, t, o) => {
            o.d(t, {Z: () => n});
            const n = '5.16.0';
        },
        77851: (e, t, o) => {
            o.d(t, {H: () => l});
            var n = o(45680),
                r = o(65812);
            function i() {}
            const a = r.createContext({add: i, remove: i});
            function l(e) {
                const t = r.useContext(a),
                    o = r.useRef();
                return (0, n.zX)((n) => {
                    if (n) {
                        const r = e ? n.querySelector(e) : n;
                        t.add(r), (o.current = r);
                    } else t.remove(o.current);
                });
            }
        },
    },
]);
