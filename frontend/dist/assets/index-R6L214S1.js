function th(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n]
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o)
                    i &&
                        Object.defineProperty(
                            e,
                            o,
                            i.get ? i : { enumerable: !0, get: () => r[o] }
                        )
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    )
}
;(function () {
    const t = document.createElement("link").relList
    if (t && t.supports && t.supports("modulepreload")) return
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const l of i.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(o) {
        const i = {}
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : o.crossOrigin === "anonymous"
                  ? (i.credentials = "omit")
                  : (i.credentials = "same-origin"),
            i
        )
    }
    function r(o) {
        if (o.ep) return
        o.ep = !0
        const i = n(o)
        fetch(o.href, i)
    }
})()
function ec(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e
}
var nh = { exports: {} },
    ts = {},
    rh = { exports: {} },
    se = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ki = Symbol.for("react.element"),
    qg = Symbol.for("react.portal"),
    Xg = Symbol.for("react.fragment"),
    Jg = Symbol.for("react.strict_mode"),
    Zg = Symbol.for("react.profiler"),
    e1 = Symbol.for("react.provider"),
    t1 = Symbol.for("react.context"),
    n1 = Symbol.for("react.forward_ref"),
    r1 = Symbol.for("react.suspense"),
    o1 = Symbol.for("react.memo"),
    i1 = Symbol.for("react.lazy"),
    Od = Symbol.iterator
function l1(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Od && e[Od]) || e["@@iterator"]),
          typeof e == "function" ? e : null)
}
var oh = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    ih = Object.assign,
    lh = {}
function po(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = lh),
        (this.updater = n || oh)
}
po.prototype.isReactComponent = {}
po.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        )
    this.updater.enqueueSetState(this, e, t, "setState")
}
po.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function sh() {}
sh.prototype = po.prototype
function tc(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = lh),
        (this.updater = n || oh)
}
var nc = (tc.prototype = new sh())
nc.constructor = tc
ih(nc, po.prototype)
nc.isPureReactComponent = !0
var Md = Array.isArray,
    ah = Object.prototype.hasOwnProperty,
    rc = { current: null },
    uh = { key: !0, ref: !0, __self: !0, __source: !0 }
function ch(e, t, n) {
    var r,
        o = {},
        i = null,
        l = null
    if (t != null)
        for (r in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            ah.call(t, r) && !uh.hasOwnProperty(r) && (o[r] = t[r])
    var s = arguments.length - 2
    if (s === 1) o.children = n
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2]
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r])
    return {
        $$typeof: ki,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: rc.current
    }
}
function s1(e, t) {
    return {
        $$typeof: ki,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function oc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ki
}
function a1(e) {
    var t = { "=": "=0", ":": "=2" }
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n]
        })
    )
}
var Id = /\/+/g
function Zs(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? a1("" + e.key)
        : t.toString(36)
}
function ul(e, t, n, r, o) {
    var i = typeof e
    ;(i === "undefined" || i === "boolean") && (e = null)
    var l = !1
    if (e === null) l = !0
    else
        switch (i) {
            case "string":
            case "number":
                l = !0
                break
            case "object":
                switch (e.$$typeof) {
                    case ki:
                    case qg:
                        l = !0
                }
        }
    if (l)
        return (
            (l = e),
            (o = o(l)),
            (e = r === "" ? "." + Zs(l, 0) : r),
            Md(o)
                ? ((n = ""),
                  e != null && (n = e.replace(Id, "$&/") + "/"),
                  ul(o, t, n, "", function (u) {
                      return u
                  }))
                : o != null &&
                  (oc(o) &&
                      (o = s1(
                          o,
                          n +
                              (!o.key || (l && l.key === o.key)
                                  ? ""
                                  : ("" + o.key).replace(Id, "$&/") + "/") +
                              e
                      )),
                  t.push(o)),
            1
        )
    if (((l = 0), (r = r === "" ? "." : r + ":"), Md(e)))
        for (var s = 0; s < e.length; s++) {
            i = e[s]
            var a = r + Zs(i, s)
            l += ul(i, t, n, a, o)
        }
    else if (((a = l1(e)), typeof a == "function"))
        for (e = a.call(e), s = 0; !(i = e.next()).done; )
            (i = i.value), (a = r + Zs(i, s++)), (l += ul(i, t, n, a, o))
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        )
    return l
}
function Bi(e, t, n) {
    if (e == null) return e
    var r = [],
        o = 0
    return (
        ul(e, r, "", "", function (i) {
            return t.call(n, i, o++)
        }),
        r
    )
}
function u1(e) {
    if (e._status === -1) {
        var t = e._result
        ;(t = t()),
            t.then(
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n))
                },
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n))
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t))
    }
    if (e._status === 1) return e._result.default
    throw e._result
}
var ut = { current: null },
    cl = { transition: null },
    c1 = {
        ReactCurrentDispatcher: ut,
        ReactCurrentBatchConfig: cl,
        ReactCurrentOwner: rc
    }
se.Children = {
    map: Bi,
    forEach: function (e, t, n) {
        Bi(
            e,
            function () {
                t.apply(this, arguments)
            },
            n
        )
    },
    count: function (e) {
        var t = 0
        return (
            Bi(e, function () {
                t++
            }),
            t
        )
    },
    toArray: function (e) {
        return (
            Bi(e, function (t) {
                return t
            }) || []
        )
    },
    only: function (e) {
        if (!oc(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            )
        return e
    }
}
se.Component = po
se.Fragment = Xg
se.Profiler = Zg
se.PureComponent = tc
se.StrictMode = Jg
se.Suspense = r1
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c1
se.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        )
    var r = ih({}, e.props),
        o = e.key,
        i = e.ref,
        l = e._owner
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (l = rc.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var s = e.type.defaultProps
        for (a in t)
            ah.call(t, a) &&
                !uh.hasOwnProperty(a) &&
                (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2
    if (a === 1) r.children = n
    else if (1 < a) {
        s = Array(a)
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2]
        r.children = s
    }
    return { $$typeof: ki, type: e.type, key: o, ref: i, props: r, _owner: l }
}
se.createContext = function (e) {
    return (
        (e = {
            $$typeof: t1,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }),
        (e.Provider = { $$typeof: e1, _context: e }),
        (e.Consumer = e)
    )
}
se.createElement = ch
se.createFactory = function (e) {
    var t = ch.bind(null, e)
    return (t.type = e), t
}
se.createRef = function () {
    return { current: null }
}
se.forwardRef = function (e) {
    return { $$typeof: n1, render: e }
}
se.isValidElement = oc
se.lazy = function (e) {
    return { $$typeof: i1, _payload: { _status: -1, _result: e }, _init: u1 }
}
se.memo = function (e, t) {
    return { $$typeof: o1, type: e, compare: t === void 0 ? null : t }
}
se.startTransition = function (e) {
    var t = cl.transition
    cl.transition = {}
    try {
        e()
    } finally {
        cl.transition = t
    }
}
se.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
}
se.useCallback = function (e, t) {
    return ut.current.useCallback(e, t)
}
se.useContext = function (e) {
    return ut.current.useContext(e)
}
se.useDebugValue = function () {}
se.useDeferredValue = function (e) {
    return ut.current.useDeferredValue(e)
}
se.useEffect = function (e, t) {
    return ut.current.useEffect(e, t)
}
se.useId = function () {
    return ut.current.useId()
}
se.useImperativeHandle = function (e, t, n) {
    return ut.current.useImperativeHandle(e, t, n)
}
se.useInsertionEffect = function (e, t) {
    return ut.current.useInsertionEffect(e, t)
}
se.useLayoutEffect = function (e, t) {
    return ut.current.useLayoutEffect(e, t)
}
se.useMemo = function (e, t) {
    return ut.current.useMemo(e, t)
}
se.useReducer = function (e, t, n) {
    return ut.current.useReducer(e, t, n)
}
se.useRef = function (e) {
    return ut.current.useRef(e)
}
se.useState = function (e) {
    return ut.current.useState(e)
}
se.useSyncExternalStore = function (e, t, n) {
    return ut.current.useSyncExternalStore(e, t, n)
}
se.useTransition = function () {
    return ut.current.useTransition()
}
se.version = "18.2.0"
rh.exports = se
var E = rh.exports
const P = ec(E),
    d1 = th({ __proto__: null, default: P }, [E])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f1 = E,
    p1 = Symbol.for("react.element"),
    h1 = Symbol.for("react.fragment"),
    m1 = Object.prototype.hasOwnProperty,
    g1 =
        f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    y1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function dh(e, t, n) {
    var r,
        o = {},
        i = null,
        l = null
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (l = t.ref)
    for (r in t) m1.call(t, r) && !y1.hasOwnProperty(r) && (o[r] = t[r])
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
    return {
        $$typeof: p1,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: g1.current
    }
}
ts.Fragment = h1
ts.jsx = dh
ts.jsxs = dh
nh.exports = ts
var f = nh.exports,
    fh = { exports: {} },
    Ct = {},
    ph = { exports: {} },
    hh = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
    function t(z, D) {
        var B = z.length
        z.push(D)
        e: for (; 0 < B; ) {
            var K = (B - 1) >>> 1,
                le = z[K]
            if (0 < o(le, D)) (z[K] = D), (z[B] = le), (B = K)
            else break e
        }
    }
    function n(z) {
        return z.length === 0 ? null : z[0]
    }
    function r(z) {
        if (z.length === 0) return null
        var D = z[0],
            B = z.pop()
        if (B !== D) {
            z[0] = B
            e: for (var K = 0, le = z.length, Ae = le >>> 1; K < Ae; ) {
                var me = 2 * (K + 1) - 1,
                    ze = z[me],
                    je = me + 1,
                    Qe = z[je]
                if (0 > o(ze, B))
                    je < le && 0 > o(Qe, ze)
                        ? ((z[K] = Qe), (z[je] = B), (K = je))
                        : ((z[K] = ze), (z[me] = B), (K = me))
                else if (je < le && 0 > o(Qe, B))
                    (z[K] = Qe), (z[je] = B), (K = je)
                else break e
            }
        }
        return D
    }
    function o(z, D) {
        var B = z.sortIndex - D.sortIndex
        return B !== 0 ? B : z.id - D.id
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var l = Date,
            s = l.now()
        e.unstable_now = function () {
            return l.now() - s
        }
    }
    var a = [],
        u = [],
        c = 1,
        d = null,
        p = 3,
        w = !1,
        g = !1,
        v = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function y(z) {
        for (var D = n(u); D !== null; ) {
            if (D.callback === null) r(u)
            else if (D.startTime <= z)
                r(u), (D.sortIndex = D.expirationTime), t(a, D)
            else break
            D = n(u)
        }
    }
    function C(z) {
        if (((v = !1), y(z), !g))
            if (n(a) !== null) (g = !0), Se(R)
            else {
                var D = n(u)
                D !== null && re(C, D.startTime - z)
            }
    }
    function R(z, D) {
        ;(g = !1), v && ((v = !1), m(T), (T = -1)), (w = !0)
        var B = p
        try {
            for (
                y(D), d = n(a);
                d !== null && (!(d.expirationTime > D) || (z && !V()));

            ) {
                var K = d.callback
                if (typeof K == "function") {
                    ;(d.callback = null), (p = d.priorityLevel)
                    var le = K(d.expirationTime <= D)
                    ;(D = e.unstable_now()),
                        typeof le == "function"
                            ? (d.callback = le)
                            : d === n(a) && r(a),
                        y(D)
                } else r(a)
                d = n(a)
            }
            if (d !== null) var Ae = !0
            else {
                var me = n(u)
                me !== null && re(C, me.startTime - D), (Ae = !1)
            }
            return Ae
        } finally {
            ;(d = null), (p = B), (w = !1)
        }
    }
    var x = !1,
        _ = null,
        T = -1,
        M = 5,
        F = -1
    function V() {
        return !(e.unstable_now() - F < M)
    }
    function ie() {
        if (_ !== null) {
            var z = e.unstable_now()
            F = z
            var D = !0
            try {
                D = _(!0, z)
            } finally {
                D ? te() : ((x = !1), (_ = null))
            }
        } else x = !1
    }
    var te
    if (typeof h == "function")
        te = function () {
            h(ie)
        }
    else if (typeof MessageChannel < "u") {
        var ue = new MessageChannel(),
            Te = ue.port2
        ;(ue.port1.onmessage = ie),
            (te = function () {
                Te.postMessage(null)
            })
    } else
        te = function () {
            S(ie, 0)
        }
    function Se(z) {
        ;(_ = z), x || ((x = !0), te())
    }
    function re(z, D) {
        T = S(function () {
            z(e.unstable_now())
        }, D)
    }
    ;(e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (z) {
            z.callback = null
        }),
        (e.unstable_continueExecution = function () {
            g || w || ((g = !0), Se(R))
        }),
        (e.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (M = 0 < z ? Math.floor(1e3 / z) : 5)
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a)
        }),
        (e.unstable_next = function (z) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var D = 3
                    break
                default:
                    D = p
            }
            var B = p
            p = D
            try {
                return z()
            } finally {
                p = B
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (z, D) {
            switch (z) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break
                default:
                    z = 3
            }
            var B = p
            p = z
            try {
                return D()
            } finally {
                p = B
            }
        }),
        (e.unstable_scheduleCallback = function (z, D, B) {
            var K = e.unstable_now()
            switch (
                (typeof B == "object" && B !== null
                    ? ((B = B.delay),
                      (B = typeof B == "number" && 0 < B ? K + B : K))
                    : (B = K),
                z)
            ) {
                case 1:
                    var le = -1
                    break
                case 2:
                    le = 250
                    break
                case 5:
                    le = 1073741823
                    break
                case 4:
                    le = 1e4
                    break
                default:
                    le = 5e3
            }
            return (
                (le = B + le),
                (z = {
                    id: c++,
                    callback: D,
                    priorityLevel: z,
                    startTime: B,
                    expirationTime: le,
                    sortIndex: -1
                }),
                B > K
                    ? ((z.sortIndex = B),
                      t(u, z),
                      n(a) === null &&
                          z === n(u) &&
                          (v ? (m(T), (T = -1)) : (v = !0), re(C, B - K)))
                    : ((z.sortIndex = le),
                      t(a, z),
                      g || w || ((g = !0), Se(R))),
                z
            )
        }),
        (e.unstable_shouldYield = V),
        (e.unstable_wrapCallback = function (z) {
            var D = p
            return function () {
                var B = p
                p = D
                try {
                    return z.apply(this, arguments)
                } finally {
                    p = B
                }
            }
        })
})(hh)
ph.exports = hh
var v1 = ph.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mh = E,
    Et = v1
function $(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n])
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    )
}
var gh = new Set(),
    ti = {}
function _r(e, t) {
    oo(e, t), oo(e + "Capture", t)
}
function oo(e, t) {
    for (ti[e] = t, e = 0; e < t.length; e++) gh.add(t[e])
}
var xn = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Ua = Object.prototype.hasOwnProperty,
    w1 =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Dd = {},
    Ad = {}
function x1(e) {
    return Ua.call(Ad, e)
        ? !0
        : Ua.call(Dd, e)
          ? !1
          : w1.test(e)
            ? (Ad[e] = !0)
            : ((Dd[e] = !0), !1)
}
function S1(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)),
                    e !== "data-" && e !== "aria-")
        default:
            return !1
    }
}
function E1(e, t, n, r) {
    if (t === null || typeof t > "u" || S1(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t
            case 4:
                return t === !1
            case 5:
                return isNaN(t)
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function ct(e, t, n, r, o, i, l) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = l)
}
var Ze = {}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Ze[e] = new ct(e, 0, !1, e, null, !1, !1)
    })
;[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (e) {
    var t = e[0]
    Ze[t] = new ct(t, 1, !1, e[1], null, !1, !1)
})
;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ze[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function (e) {
    Ze[e] = new ct(e, 2, !1, e, null, !1, !1)
})
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Ze[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })
;["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ze[e] = new ct(e, 3, !0, e, null, !1, !1)
})
;["capture", "download"].forEach(function (e) {
    Ze[e] = new ct(e, 4, !1, e, null, !1, !1)
})
;["cols", "rows", "size", "span"].forEach(function (e) {
    Ze[e] = new ct(e, 6, !1, e, null, !1, !1)
})
;["rowSpan", "start"].forEach(function (e) {
    Ze[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var ic = /[\-:]([a-z])/g
function lc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(ic, lc)
        Ze[t] = new ct(t, 1, !1, e, null, !1, !1)
    })
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(ic, lc)
        Ze[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    })
;["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(ic, lc)
    Ze[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})
;["tabIndex", "crossOrigin"].forEach(function (e) {
    Ze[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ze.xlinkHref = new ct(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
)
;["src", "href", "action", "formAction"].forEach(function (e) {
    Ze[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function sc(e, t, n, r) {
    var o = Ze.hasOwnProperty(t) ? Ze[t] : null
    ;(o !== null
        ? o.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (E1(t, n, o, r) && (n = null),
        r || o === null
            ? x1(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
              ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((o = o.type),
                      (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Cn = mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ui = Symbol.for("react.element"),
    Ir = Symbol.for("react.portal"),
    Dr = Symbol.for("react.fragment"),
    ac = Symbol.for("react.strict_mode"),
    Ha = Symbol.for("react.profiler"),
    yh = Symbol.for("react.provider"),
    vh = Symbol.for("react.context"),
    uc = Symbol.for("react.forward_ref"),
    Wa = Symbol.for("react.suspense"),
    Va = Symbol.for("react.suspense_list"),
    cc = Symbol.for("react.memo"),
    Dn = Symbol.for("react.lazy"),
    wh = Symbol.for("react.offscreen"),
    Fd = Symbol.iterator
function Co(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Fd && e[Fd]) || e["@@iterator"]),
          typeof e == "function" ? e : null)
}
var Ne = Object.assign,
    ea
function Ao(e) {
    if (ea === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/)
            ea = (t && t[1]) || ""
        }
    return (
        `
` +
        ea +
        e
    )
}
var ta = !1
function na(e, t) {
    if (!e || ta) return ""
    ta = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error()
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var o = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    l = o.length - 1,
                    s = i.length - 1;
                1 <= l && 0 <= s && o[l] !== i[s];

            )
                s--
            for (; 1 <= l && 0 <= s; l--, s--)
                if (o[l] !== i[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if ((l--, s--, 0 > s || o[l] !== i[s])) {
                                var a =
                                    `
` + o[l].replace(" at new ", " at ")
                                return (
                                    e.displayName &&
                                        a.includes("<anonymous>") &&
                                        (a = a.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    a
                                )
                            }
                        while (1 <= l && 0 <= s)
                    break
                }
        }
    } finally {
        ;(ta = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : "") ? Ao(e) : ""
}
function k1(e) {
    switch (e.tag) {
        case 5:
            return Ao(e.type)
        case 16:
            return Ao("Lazy")
        case 13:
            return Ao("Suspense")
        case 19:
            return Ao("SuspenseList")
        case 0:
        case 2:
        case 15:
            return (e = na(e.type, !1)), e
        case 11:
            return (e = na(e.type.render, !1)), e
        case 1:
            return (e = na(e.type, !0)), e
        default:
            return ""
    }
}
function Ga(e) {
    if (e == null) return null
    if (typeof e == "function") return e.displayName || e.name || null
    if (typeof e == "string") return e
    switch (e) {
        case Dr:
            return "Fragment"
        case Ir:
            return "Portal"
        case Ha:
            return "Profiler"
        case ac:
            return "StrictMode"
        case Wa:
            return "Suspense"
        case Va:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case vh:
                return (e.displayName || "Context") + ".Consumer"
            case yh:
                return (e._context.displayName || "Context") + ".Provider"
            case uc:
                var t = e.render
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                )
            case cc:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Ga(e.type) || "Memo"
                )
            case Dn:
                ;(t = e._payload), (e = e._init)
                try {
                    return Ga(e(t))
                } catch {}
        }
    return null
}
function C1(e) {
    var t = e.type
    switch (e.tag) {
        case 24:
            return "Cache"
        case 9:
            return (t.displayName || "Context") + ".Consumer"
        case 10:
            return (t._context.displayName || "Context") + ".Provider"
        case 18:
            return "DehydratedFragment"
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            )
        case 7:
            return "Fragment"
        case 5:
            return t
        case 4:
            return "Portal"
        case 3:
            return "Root"
        case 6:
            return "Text"
        case 16:
            return Ga(t)
        case 8:
            return t === ac ? "StrictMode" : "Mode"
        case 22:
            return "Offscreen"
        case 12:
            return "Profiler"
        case 21:
            return "Scope"
        case 13:
            return "Suspense"
        case 19:
            return "SuspenseList"
        case 25:
            return "TracingMarker"
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null
            if (typeof t == "string") return t
    }
    return null
}
function er(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e
        case "object":
            return e
        default:
            return ""
    }
}
function xh(e) {
    var t = e.type
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    )
}
function j1(e) {
    var t = xh(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t]
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var o = n.get,
            i = n.set
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this)
                },
                set: function (l) {
                    ;(r = "" + l), i.call(this, l)
                }
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r
                },
                setValue: function (l) {
                    r = "" + l
                },
                stopTracking: function () {
                    ;(e._valueTracker = null), delete e[t]
                }
            }
        )
    }
}
function Hi(e) {
    e._valueTracker || (e._valueTracker = j1(e))
}
function Sh(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
        r = ""
    return (
        e && (r = xh(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    )
}
function Cl(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ka(e, t) {
    var n = t.checked
    return Ne({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Bd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked
    ;(n = er(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null
        })
}
function Eh(e, t) {
    ;(t = t.checked), t != null && sc(e, "checked", t, !1)
}
function Qa(e, t) {
    Eh(e, t)
    var n = er(t.value),
        r = t.type
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n)
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value")
        return
    }
    t.hasOwnProperty("value")
        ? Ya(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ya(e, t.type, er(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked)
}
function Ud(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return
        ;(t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t)
    }
    ;(n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n)
}
function Ya(e, t, n) {
    ;(t !== "number" || Cl(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Fo = Array.isArray
function Jr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {}
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + er(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function qa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error($(91))
    return Ne({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Hd(e, t) {
    var n = t.value
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error($(92))
            if (Fo(n)) {
                if (1 < n.length) throw Error($(93))
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), (n = t)
    }
    e._wrapperState = { initialValue: er(n) }
}
function kh(e, t) {
    var n = er(t.value),
        r = er(t.defaultValue)
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Wd(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t)
}
function Ch(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg"
        case "math":
            return "http://www.w3.org/1998/Math/MathML"
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function Xa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Ch(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e
}
var Wi,
    jh = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o)
                  })
              }
            : e
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t
        else {
            for (
                Wi = Wi || document.createElement("div"),
                    Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Wi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild)
            for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
    })
function ni(e, t) {
    if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t
            return
        }
    }
    e.textContent = t
}
var Wo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    P1 = ["Webkit", "ms", "Moz", "O"]
Object.keys(Wo).forEach(function (e) {
    P1.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wo[t] = Wo[e])
    })
})
function Ph(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
            typeof t != "number" ||
            t === 0 ||
            (Wo.hasOwnProperty(e) && Wo[e])
          ? ("" + t).trim()
          : t + "px"
}
function _h(e, t) {
    e = e.style
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Ph(n, t[n], r)
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o)
        }
}
var _1 = Ne(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
)
function Ja(e, t) {
    if (t) {
        if (_1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error($(137, e))
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error($(60))
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error($(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error($(62))
    }
}
function Za(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string"
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1
        default:
            return !0
    }
}
var eu = null
function dc(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    )
}
var tu = null,
    Zr = null,
    eo = null
function Vd(e) {
    if ((e = Pi(e))) {
        if (typeof tu != "function") throw Error($(280))
        var t = e.stateNode
        t && ((t = ls(t)), tu(e.stateNode, e.type, t))
    }
}
function Nh(e) {
    Zr ? (eo ? eo.push(e) : (eo = [e])) : (Zr = e)
}
function Rh() {
    if (Zr) {
        var e = Zr,
            t = eo
        if (((eo = Zr = null), Vd(e), t))
            for (e = 0; e < t.length; e++) Vd(t[e])
    }
}
function bh(e, t) {
    return e(t)
}
function Lh() {}
var ra = !1
function Th(e, t, n) {
    if (ra) return e(t, n)
    ra = !0
    try {
        return bh(e, t, n)
    } finally {
        ;(ra = !1), (Zr !== null || eo !== null) && (Lh(), Rh())
    }
}
function ri(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = ls(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            ;(r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r)
            break e
        default:
            e = !1
    }
    if (e) return null
    if (n && typeof n != "function") throw Error($(231, t, typeof n))
    return n
}
var nu = !1
if (xn)
    try {
        var jo = {}
        Object.defineProperty(jo, "passive", {
            get: function () {
                nu = !0
            }
        }),
            window.addEventListener("test", jo, jo),
            window.removeEventListener("test", jo, jo)
    } catch {
        nu = !1
    }
function N1(e, t, n, r, o, i, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3)
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Vo = !1,
    jl = null,
    Pl = !1,
    ru = null,
    R1 = {
        onError: function (e) {
            ;(Vo = !0), (jl = e)
        }
    }
function b1(e, t, n, r, o, i, l, s, a) {
    ;(Vo = !1), (jl = null), N1.apply(R1, arguments)
}
function L1(e, t, n, r, o, i, l, s, a) {
    if ((b1.apply(this, arguments), Vo)) {
        if (Vo) {
            var u = jl
            ;(Vo = !1), (jl = null)
        } else throw Error($(198))
        Pl || ((Pl = !0), (ru = u))
    }
}
function Nr(e) {
    var t = e,
        n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
        e = t
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
        while (e)
    }
    return t.tag === 3 ? n : null
}
function zh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated
    }
    return null
}
function Gd(e) {
    if (Nr(e) !== e) throw Error($(188))
}
function T1(e) {
    var t = e.alternate
    if (!t) {
        if (((t = Nr(e)), t === null)) throw Error($(188))
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return
        if (o === null) break
        var i = o.alternate
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return Gd(o), e
                if (i === r) return Gd(o), t
                i = i.sibling
            }
            throw Error($(188))
        }
        if (n.return !== r.return) (n = o), (r = i)
        else {
            for (var l = !1, s = o.child; s; ) {
                if (s === n) {
                    ;(l = !0), (n = o), (r = i)
                    break
                }
                if (s === r) {
                    ;(l = !0), (r = o), (n = i)
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = i.child; s; ) {
                    if (s === n) {
                        ;(l = !0), (n = i), (r = o)
                        break
                    }
                    if (s === r) {
                        ;(l = !0), (r = i), (n = o)
                        break
                    }
                    s = s.sibling
                }
                if (!l) throw Error($(189))
            }
        }
        if (n.alternate !== r) throw Error($(190))
    }
    if (n.tag !== 3) throw Error($(188))
    return n.stateNode.current === n ? e : t
}
function $h(e) {
    return (e = T1(e)), e !== null ? Oh(e) : null
}
function Oh(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
        var t = Oh(e)
        if (t !== null) return t
        e = e.sibling
    }
    return null
}
var Mh = Et.unstable_scheduleCallback,
    Kd = Et.unstable_cancelCallback,
    z1 = Et.unstable_shouldYield,
    $1 = Et.unstable_requestPaint,
    Me = Et.unstable_now,
    O1 = Et.unstable_getCurrentPriorityLevel,
    fc = Et.unstable_ImmediatePriority,
    Ih = Et.unstable_UserBlockingPriority,
    _l = Et.unstable_NormalPriority,
    M1 = Et.unstable_LowPriority,
    Dh = Et.unstable_IdlePriority,
    ns = null,
    rn = null
function I1(e) {
    if (rn && typeof rn.onCommitFiberRoot == "function")
        try {
            rn.onCommitFiberRoot(ns, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : F1,
    D1 = Math.log,
    A1 = Math.LN2
function F1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((D1(e) / A1) | 0)) | 0
}
var Vi = 64,
    Gi = 4194304
function Bo(e) {
    switch (e & -e) {
        case 1:
            return 1
        case 2:
            return 2
        case 4:
            return 4
        case 8:
            return 8
        case 16:
            return 16
        case 32:
            return 32
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424
        case 134217728:
            return 134217728
        case 268435456:
            return 268435456
        case 536870912:
            return 536870912
        case 1073741824:
            return 1073741824
        default:
            return e
    }
}
function Nl(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        l = n & 268435455
    if (l !== 0) {
        var s = l & ~o
        s !== 0 ? (r = Bo(s)) : ((i &= l), i !== 0 && (r = Bo(i)))
    } else (l = n & ~o), l !== 0 ? (r = Bo(l)) : i !== 0 && (r = Bo(i))
    if (r === 0) return 0
    if (
        t !== 0 &&
        t !== r &&
        !(t & o) &&
        ((o = r & -r),
        (i = t & -t),
        o >= i || (o === 16 && (i & 4194240) !== 0))
    )
        return t
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Wt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
    return r
}
function B1(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1
        default:
            return -1
    }
}
function U1(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var l = 31 - Wt(i),
            s = 1 << l,
            a = o[l]
        a === -1
            ? (!(s & n) || s & r) && (o[l] = B1(s, t))
            : a <= t && (e.expiredLanes |= s),
            (i &= ~s)
    }
}
function ou(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
}
function Ah() {
    var e = Vi
    return (Vi <<= 1), !(Vi & 4194240) && (Vi = 64), e
}
function oa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
}
function Ci(e, t, n) {
    ;(e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Wt(t)),
        (e[t] = n)
}
function H1(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Wt(n),
            i = 1 << o
        ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
    }
}
function pc(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
        var r = 31 - Wt(n),
            o = 1 << r
        ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
    }
}
var fe = 0
function Fh(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Bh,
    hc,
    Uh,
    Hh,
    Wh,
    iu = !1,
    Ki = [],
    Gn = null,
    Kn = null,
    Qn = null,
    oi = new Map(),
    ii = new Map(),
    Fn = [],
    W1 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        )
function Qd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Gn = null
            break
        case "dragenter":
        case "dragleave":
            Kn = null
            break
        case "mouseover":
        case "mouseout":
            Qn = null
            break
        case "pointerover":
        case "pointerout":
            oi.delete(t.pointerId)
            break
        case "gotpointercapture":
        case "lostpointercapture":
            ii.delete(t.pointerId)
    }
}
function Po(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o]
          }),
          t !== null && ((t = Pi(t)), t !== null && hc(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e)
}
function V1(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Gn = Po(Gn, e, t, n, r, o)), !0
        case "dragenter":
            return (Kn = Po(Kn, e, t, n, r, o)), !0
        case "mouseover":
            return (Qn = Po(Qn, e, t, n, r, o)), !0
        case "pointerover":
            var i = o.pointerId
            return oi.set(i, Po(oi.get(i) || null, e, t, n, r, o)), !0
        case "gotpointercapture":
            return (
                (i = o.pointerId),
                ii.set(i, Po(ii.get(i) || null, e, t, n, r, o)),
                !0
            )
    }
    return !1
}
function Vh(e) {
    var t = cr(e.target)
    if (t !== null) {
        var n = Nr(t)
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = zh(n)), t !== null)) {
                    ;(e.blockedOn = t),
                        Wh(e.priority, function () {
                            Uh(n)
                        })
                    return
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
                return
            }
        }
    }
    e.blockedOn = null
}
function dl(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = lu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (n === null) {
            n = e.nativeEvent
            var r = new n.constructor(n.type, n)
            ;(eu = r), n.target.dispatchEvent(r), (eu = null)
        } else return (t = Pi(n)), t !== null && hc(t), (e.blockedOn = n), !1
        t.shift()
    }
    return !0
}
function Yd(e, t, n) {
    dl(e) && n.delete(t)
}
function G1() {
    ;(iu = !1),
        Gn !== null && dl(Gn) && (Gn = null),
        Kn !== null && dl(Kn) && (Kn = null),
        Qn !== null && dl(Qn) && (Qn = null),
        oi.forEach(Yd),
        ii.forEach(Yd)
}
function _o(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        iu ||
            ((iu = !0),
            Et.unstable_scheduleCallback(Et.unstable_NormalPriority, G1)))
}
function li(e) {
    function t(o) {
        return _o(o, e)
    }
    if (0 < Ki.length) {
        _o(Ki[0], e)
        for (var n = 1; n < Ki.length; n++) {
            var r = Ki[n]
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (
        Gn !== null && _o(Gn, e),
            Kn !== null && _o(Kn, e),
            Qn !== null && _o(Qn, e),
            oi.forEach(t),
            ii.forEach(t),
            n = 0;
        n < Fn.length;
        n++
    )
        (r = Fn[n]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
        Vh(n), n.blockedOn === null && Fn.shift()
}
var to = Cn.ReactCurrentBatchConfig,
    Rl = !0
function K1(e, t, n, r) {
    var o = fe,
        i = to.transition
    to.transition = null
    try {
        ;(fe = 1), mc(e, t, n, r)
    } finally {
        ;(fe = o), (to.transition = i)
    }
}
function Q1(e, t, n, r) {
    var o = fe,
        i = to.transition
    to.transition = null
    try {
        ;(fe = 4), mc(e, t, n, r)
    } finally {
        ;(fe = o), (to.transition = i)
    }
}
function mc(e, t, n, r) {
    if (Rl) {
        var o = lu(e, t, n, r)
        if (o === null) ha(e, t, r, bl, n), Qd(e, r)
        else if (V1(o, e, t, n, r)) r.stopPropagation()
        else if ((Qd(e, r), t & 4 && -1 < W1.indexOf(e))) {
            for (; o !== null; ) {
                var i = Pi(o)
                if (
                    (i !== null && Bh(i),
                    (i = lu(e, t, n, r)),
                    i === null && ha(e, t, r, bl, n),
                    i === o)
                )
                    break
                o = i
            }
            o !== null && r.stopPropagation()
        } else ha(e, t, r, null, n)
    }
}
var bl = null
function lu(e, t, n, r) {
    if (((bl = null), (e = dc(r)), (e = cr(e)), e !== null))
        if (((t = Nr(e)), t === null)) e = null
        else if (((n = t.tag), n === 13)) {
            if (((e = zh(t)), e !== null)) return e
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null
            e = null
        } else t !== e && (e = null)
    return (bl = e), null
}
function Gh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4
        case "message":
            switch (O1()) {
                case fc:
                    return 1
                case Ih:
                    return 4
                case _l:
                case M1:
                    return 16
                case Dh:
                    return 536870912
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Un = null,
    gc = null,
    fl = null
function Kh() {
    if (fl) return fl
    var e,
        t = gc,
        n = t.length,
        r,
        o = "value" in Un ? Un.value : Un.textContent,
        i = o.length
    for (e = 0; e < n && t[e] === o[e]; e++);
    var l = n - e
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
    return (fl = o.slice(e, 1 < r ? 1 - r : void 0))
}
function pl(e) {
    var t = e.keyCode
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    )
}
function Qi() {
    return !0
}
function qd() {
    return !1
}
function jt(e) {
    function t(n, r, o, i, l) {
        ;(this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = l),
            (this.currentTarget = null)
        for (var s in e)
            e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]))
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? Qi
                : qd),
            (this.isPropagationStopped = qd),
            this
        )
    }
    return (
        Ne(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0
                var n = this.nativeEvent
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Qi))
            },
            stopPropagation: function () {
                var n = this.nativeEvent
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Qi))
            },
            persist: function () {},
            isPersistent: Qi
        }),
        t
    )
}
var ho = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    yc = jt(ho),
    ji = Ne({}, ho, { view: 0, detail: 0 }),
    Y1 = jt(ji),
    ia,
    la,
    No,
    rs = Ne({}, ji, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: vc,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== No &&
                      (No && e.type === "mousemove"
                          ? ((ia = e.screenX - No.screenX),
                            (la = e.screenY - No.screenY))
                          : (la = ia = 0),
                      (No = e)),
                  ia)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : la
        }
    }),
    Xd = jt(rs),
    q1 = Ne({}, rs, { dataTransfer: 0 }),
    X1 = jt(q1),
    J1 = Ne({}, ji, { relatedTarget: 0 }),
    sa = jt(J1),
    Z1 = Ne({}, ho, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ey = jt(Z1),
    ty = Ne({}, ho, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    ny = jt(ty),
    ry = Ne({}, ho, { data: 0 }),
    Jd = jt(ry),
    oy = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    iy = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    ly = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    }
function sy(e) {
    var t = this.nativeEvent
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = ly[e])
          ? !!t[e]
          : !1
}
function vc() {
    return sy
}
var ay = Ne({}, ji, {
        key: function (e) {
            if (e.key) {
                var t = oy[e.key] || e.key
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress"
                ? ((e = pl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? iy[e.keyCode] || "Unidentified"
                  : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: vc,
        charCode: function (e) {
            return e.type === "keypress" ? pl(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress"
                ? pl(e)
                : e.type === "keydown" || e.type === "keyup"
                  ? e.keyCode
                  : 0
        }
    }),
    uy = jt(ay),
    cy = Ne({}, rs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Zd = jt(cy),
    dy = Ne({}, ji, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: vc
    }),
    fy = jt(dy),
    py = Ne({}, ho, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hy = jt(py),
    my = Ne({}, rs, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    gy = jt(my),
    yy = [9, 13, 27, 32],
    wc = xn && "CompositionEvent" in window,
    Go = null
xn && "documentMode" in document && (Go = document.documentMode)
var vy = xn && "TextEvent" in window && !Go,
    Qh = xn && (!wc || (Go && 8 < Go && 11 >= Go)),
    ef = " ",
    tf = !1
function Yh(e, t) {
    switch (e) {
        case "keyup":
            return yy.indexOf(t.keyCode) !== -1
        case "keydown":
            return t.keyCode !== 229
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0
        default:
            return !1
    }
}
function qh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
}
var Ar = !1
function wy(e, t) {
    switch (e) {
        case "compositionend":
            return qh(t)
        case "keypress":
            return t.which !== 32 ? null : ((tf = !0), ef)
        case "textInput":
            return (e = t.data), e === ef && tf ? null : e
        default:
            return null
    }
}
function xy(e, t) {
    if (Ar)
        return e === "compositionend" || (!wc && Yh(e, t))
            ? ((e = Kh()), (fl = gc = Un = null), (Ar = !1), e)
            : null
    switch (e) {
        case "paste":
            return null
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char
                if (t.which) return String.fromCharCode(t.which)
            }
            return null
        case "compositionend":
            return Qh && t.locale !== "ko" ? null : t.data
        default:
            return null
    }
}
var Sy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
}
function nf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === "input" ? !!Sy[e.type] : t === "textarea"
}
function Xh(e, t, n, r) {
    Nh(r),
        (t = Ll(t, "onChange")),
        0 < t.length &&
            ((n = new yc("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }))
}
var Ko = null,
    si = null
function Ey(e) {
    am(e, 0)
}
function os(e) {
    var t = Ur(e)
    if (Sh(t)) return e
}
function ky(e, t) {
    if (e === "change") return t
}
var Jh = !1
if (xn) {
    var aa
    if (xn) {
        var ua = "oninput" in document
        if (!ua) {
            var rf = document.createElement("div")
            rf.setAttribute("oninput", "return;"),
                (ua = typeof rf.oninput == "function")
        }
        aa = ua
    } else aa = !1
    Jh = aa && (!document.documentMode || 9 < document.documentMode)
}
function of() {
    Ko && (Ko.detachEvent("onpropertychange", Zh), (si = Ko = null))
}
function Zh(e) {
    if (e.propertyName === "value" && os(si)) {
        var t = []
        Xh(t, si, e, dc(e)), Th(Ey, t)
    }
}
function Cy(e, t, n) {
    e === "focusin"
        ? (of(), (Ko = t), (si = n), Ko.attachEvent("onpropertychange", Zh))
        : e === "focusout" && of()
}
function jy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return os(si)
}
function Py(e, t) {
    if (e === "click") return os(t)
}
function _y(e, t) {
    if (e === "input" || e === "change") return os(t)
}
function Ny(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Qt = typeof Object.is == "function" ? Object.is : Ny
function ai(e, t) {
    if (Qt(e, t)) return !0
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1
    var n = Object.keys(e),
        r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
        var o = n[r]
        if (!Ua.call(t, o) || !Qt(e[o], t[o])) return !1
    }
    return !0
}
function lf(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
}
function sf(e, t) {
    var n = lf(e)
    e = 0
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e }
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = lf(n)
    }
}
function em(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? em(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1
}
function tm() {
    for (var e = window, t = Cl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow
        else break
        t = Cl(e.document)
    }
    return t
}
function xc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    )
}
function Ry(e) {
    var t = tm(),
        n = e.focusedElem,
        r = e.selectionRange
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        em(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && xc(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length))
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection()
                var o = n.textContent.length,
                    i = Math.min(r.start, o)
                ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = sf(n, i))
                var l = sf(n, r)
                o &&
                    l &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== l.node ||
                        e.focusOffset !== l.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(l.node, l.offset))
                        : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
    }
}
var by = xn && "documentMode" in document && 11 >= document.documentMode,
    Fr = null,
    su = null,
    Qo = null,
    au = !1
function af(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    au ||
        Fr == null ||
        Fr !== Cl(r) ||
        ((r = Fr),
        "selectionStart" in r && xc(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset
              })),
        (Qo && ai(Qo, r)) ||
            ((Qo = r),
            (r = Ll(su, "onSelect")),
            0 < r.length &&
                ((t = new yc("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Fr))))
}
function Yi(e, t) {
    var n = {}
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    )
}
var Br = {
        animationend: Yi("Animation", "AnimationEnd"),
        animationiteration: Yi("Animation", "AnimationIteration"),
        animationstart: Yi("Animation", "AnimationStart"),
        transitionend: Yi("Transition", "TransitionEnd")
    },
    ca = {},
    nm = {}
xn &&
    ((nm = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Br.animationend.animation,
        delete Br.animationiteration.animation,
        delete Br.animationstart.animation),
    "TransitionEvent" in window || delete Br.transitionend.transition)
function is(e) {
    if (ca[e]) return ca[e]
    if (!Br[e]) return e
    var t = Br[e],
        n
    for (n in t) if (t.hasOwnProperty(n) && n in nm) return (ca[e] = t[n])
    return e
}
var rm = is("animationend"),
    om = is("animationiteration"),
    im = is("animationstart"),
    lm = is("transitionend"),
    sm = new Map(),
    uf =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        )
function or(e, t) {
    sm.set(e, t), _r(t, [e])
}
for (var da = 0; da < uf.length; da++) {
    var fa = uf[da],
        Ly = fa.toLowerCase(),
        Ty = fa[0].toUpperCase() + fa.slice(1)
    or(Ly, "on" + Ty)
}
or(rm, "onAnimationEnd")
or(om, "onAnimationIteration")
or(im, "onAnimationStart")
or("dblclick", "onDoubleClick")
or("focusin", "onFocus")
or("focusout", "onBlur")
or(lm, "onTransitionEnd")
oo("onMouseEnter", ["mouseout", "mouseover"])
oo("onMouseLeave", ["mouseout", "mouseover"])
oo("onPointerEnter", ["pointerout", "pointerover"])
oo("onPointerLeave", ["pointerout", "pointerover"])
_r(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
)
_r(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
)
_r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"])
_r(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
)
_r(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
)
_r(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
)
var Uo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    zy = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Uo)
    )
function cf(e, t, n) {
    var r = e.type || "unknown-event"
    ;(e.currentTarget = n), L1(r, t, void 0, e), (e.currentTarget = null)
}
function am(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event
        r = r.listeners
        e: {
            var i = void 0
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l],
                        a = s.instance,
                        u = s.currentTarget
                    if (((s = s.listener), a !== i && o.isPropagationStopped()))
                        break e
                    cf(o, s, u), (i = a)
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (
                        ((s = r[l]),
                        (a = s.instance),
                        (u = s.currentTarget),
                        (s = s.listener),
                        a !== i && o.isPropagationStopped())
                    )
                        break e
                    cf(o, s, u), (i = a)
                }
        }
    }
    if (Pl) throw ((e = ru), (Pl = !1), (ru = null), e)
}
function we(e, t) {
    var n = t[pu]
    n === void 0 && (n = t[pu] = new Set())
    var r = e + "__bubble"
    n.has(r) || (um(t, e, 2, !1), n.add(r))
}
function pa(e, t, n) {
    var r = 0
    t && (r |= 4), um(n, e, r, t)
}
var qi = "_reactListening" + Math.random().toString(36).slice(2)
function ui(e) {
    if (!e[qi]) {
        ;(e[qi] = !0),
            gh.forEach(function (n) {
                n !== "selectionchange" &&
                    (zy.has(n) || pa(n, !1, e), pa(n, !0, e))
            })
        var t = e.nodeType === 9 ? e : e.ownerDocument
        t === null || t[qi] || ((t[qi] = !0), pa("selectionchange", !1, t))
    }
}
function um(e, t, n, r) {
    switch (Gh(t)) {
        case 1:
            var o = K1
            break
        case 4:
            o = Q1
            break
        default:
            o = mc
    }
    ;(n = o.bind(null, t, n, e)),
        (o = void 0),
        !nu ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1)
}
function ha(e, t, n, r, o) {
    var i = r
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return
            var l = r.tag
            if (l === 3 || l === 4) {
                var s = r.stateNode.containerInfo
                if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var a = l.tag
                        if (
                            (a === 3 || a === 4) &&
                            ((a = l.stateNode.containerInfo),
                            a === o || (a.nodeType === 8 && a.parentNode === o))
                        )
                            return
                        l = l.return
                    }
                for (; s !== null; ) {
                    if (((l = cr(s)), l === null)) return
                    if (((a = l.tag), a === 5 || a === 6)) {
                        r = i = l
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Th(function () {
        var u = i,
            c = dc(n),
            d = []
        e: {
            var p = sm.get(e)
            if (p !== void 0) {
                var w = yc,
                    g = e
                switch (e) {
                    case "keypress":
                        if (pl(n) === 0) break e
                    case "keydown":
                    case "keyup":
                        w = uy
                        break
                    case "focusin":
                        ;(g = "focus"), (w = sa)
                        break
                    case "focusout":
                        ;(g = "blur"), (w = sa)
                        break
                    case "beforeblur":
                    case "afterblur":
                        w = sa
                        break
                    case "click":
                        if (n.button === 2) break e
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = Xd
                        break
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = X1
                        break
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = fy
                        break
                    case rm:
                    case om:
                    case im:
                        w = ey
                        break
                    case lm:
                        w = hy
                        break
                    case "scroll":
                        w = Y1
                        break
                    case "wheel":
                        w = gy
                        break
                    case "copy":
                    case "cut":
                    case "paste":
                        w = ny
                        break
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = Zd
                }
                var v = (t & 4) !== 0,
                    S = !v && e === "scroll",
                    m = v ? (p !== null ? p + "Capture" : null) : p
                v = []
                for (var h = u, y; h !== null; ) {
                    y = h
                    var C = y.stateNode
                    if (
                        (y.tag === 5 &&
                            C !== null &&
                            ((y = C),
                            m !== null &&
                                ((C = ri(h, m)),
                                C != null && v.push(ci(h, C, y)))),
                        S)
                    )
                        break
                    h = h.return
                }
                0 < v.length &&
                    ((p = new w(p, g, null, n, c)),
                    d.push({ event: p, listeners: v }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (w = e === "mouseout" || e === "pointerout"),
                    p &&
                        n !== eu &&
                        (g = n.relatedTarget || n.fromElement) &&
                        (cr(g) || g[Sn]))
                )
                    break e
                if (
                    (w || p) &&
                    ((p =
                        c.window === c
                            ? c
                            : (p = c.ownerDocument)
                              ? p.defaultView || p.parentWindow
                              : window),
                    w
                        ? ((g = n.relatedTarget || n.toElement),
                          (w = u),
                          (g = g ? cr(g) : null),
                          g !== null &&
                              ((S = Nr(g)),
                              g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                              (g = null))
                        : ((w = null), (g = u)),
                    w !== g)
                ) {
                    if (
                        ((v = Xd),
                        (C = "onMouseLeave"),
                        (m = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((v = Zd),
                            (C = "onPointerLeave"),
                            (m = "onPointerEnter"),
                            (h = "pointer")),
                        (S = w == null ? p : Ur(w)),
                        (y = g == null ? p : Ur(g)),
                        (p = new v(C, h + "leave", w, n, c)),
                        (p.target = S),
                        (p.relatedTarget = y),
                        (C = null),
                        cr(c) === u &&
                            ((v = new v(m, h + "enter", g, n, c)),
                            (v.target = y),
                            (v.relatedTarget = S),
                            (C = v)),
                        (S = C),
                        w && g)
                    )
                        t: {
                            for (v = w, m = g, h = 0, y = v; y; y = $r(y)) h++
                            for (y = 0, C = m; C; C = $r(C)) y++
                            for (; 0 < h - y; ) (v = $r(v)), h--
                            for (; 0 < y - h; ) (m = $r(m)), y--
                            for (; h--; ) {
                                if (
                                    v === m ||
                                    (m !== null && v === m.alternate)
                                )
                                    break t
                                ;(v = $r(v)), (m = $r(m))
                            }
                            v = null
                        }
                    else v = null
                    w !== null && df(d, p, w, v, !1),
                        g !== null && S !== null && df(d, S, g, v, !0)
                }
            }
            e: {
                if (
                    ((p = u ? Ur(u) : window),
                    (w = p.nodeName && p.nodeName.toLowerCase()),
                    w === "select" || (w === "input" && p.type === "file"))
                )
                    var R = ky
                else if (nf(p))
                    if (Jh) R = _y
                    else {
                        R = jy
                        var x = Cy
                    }
                else
                    (w = p.nodeName) &&
                        w.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (R = Py)
                if (R && (R = R(e, u))) {
                    Xh(d, R, n, c)
                    break e
                }
                x && x(e, p, u),
                    e === "focusout" &&
                        (x = p._wrapperState) &&
                        x.controlled &&
                        p.type === "number" &&
                        Ya(p, "number", p.value)
            }
            switch (((x = u ? Ur(u) : window), e)) {
                case "focusin":
                    ;(nf(x) || x.contentEditable === "true") &&
                        ((Fr = x), (su = u), (Qo = null))
                    break
                case "focusout":
                    Qo = su = Fr = null
                    break
                case "mousedown":
                    au = !0
                    break
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ;(au = !1), af(d, n, c)
                    break
                case "selectionchange":
                    if (by) break
                case "keydown":
                case "keyup":
                    af(d, n, c)
            }
            var _
            if (wc)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart"
                            break e
                        case "compositionend":
                            T = "onCompositionEnd"
                            break e
                        case "compositionupdate":
                            T = "onCompositionUpdate"
                            break e
                    }
                    T = void 0
                }
            else
                Ar
                    ? Yh(e, n) && (T = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (T = "onCompositionStart")
            T &&
                (Qh &&
                    n.locale !== "ko" &&
                    (Ar || T !== "onCompositionStart"
                        ? T === "onCompositionEnd" && Ar && (_ = Kh())
                        : ((Un = c),
                          (gc = "value" in Un ? Un.value : Un.textContent),
                          (Ar = !0))),
                (x = Ll(u, T)),
                0 < x.length &&
                    ((T = new Jd(T, e, null, n, c)),
                    d.push({ event: T, listeners: x }),
                    _
                        ? (T.data = _)
                        : ((_ = qh(n)), _ !== null && (T.data = _)))),
                (_ = vy ? wy(e, n) : xy(e, n)) &&
                    ((u = Ll(u, "onBeforeInput")),
                    0 < u.length &&
                        ((c = new Jd(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            c
                        )),
                        d.push({ event: c, listeners: u }),
                        (c.data = _)))
        }
        am(d, t)
    })
}
function ci(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
}
function Ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = ri(e, n)),
            i != null && r.unshift(ci(e, i, o)),
            (i = ri(e, t)),
            i != null && r.push(ci(e, i, o))),
            (e = e.return)
    }
    return r
}
function $r(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
}
function df(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n,
            a = s.alternate,
            u = s.stateNode
        if (a !== null && a === r) break
        s.tag === 5 &&
            u !== null &&
            ((s = u),
            o
                ? ((a = ri(n, i)), a != null && l.unshift(ci(n, a, s)))
                : o || ((a = ri(n, i)), a != null && l.push(ci(n, a, s)))),
            (n = n.return)
    }
    l.length !== 0 && e.push({ event: t, listeners: l })
}
var $y = /\r\n?/g,
    Oy = /\u0000|\uFFFD/g
function ff(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            $y,
            `
`
        )
        .replace(Oy, "")
}
function Xi(e, t, n) {
    if (((t = ff(t)), ff(e) !== t && n)) throw Error($(425))
}
function Tl() {}
var uu = null,
    cu = null
function du(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    )
}
var fu = typeof setTimeout == "function" ? setTimeout : void 0,
    My = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pf = typeof Promise == "function" ? Promise : void 0,
    Iy =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof pf < "u"
              ? function (e) {
                    return pf.resolve(null).then(e).catch(Dy)
                }
              : fu
function Dy(e) {
    setTimeout(function () {
        throw e
    })
}
function ma(e, t) {
    var n = t,
        r = 0
    do {
        var o = n.nextSibling
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), li(t)
                    return
                }
                r--
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++
        n = o
    } while (n)
    li(t)
}
function Yn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
            if (t === "/$") return null
        }
    }
    return e
}
function hf(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var mo = Math.random().toString(36).slice(2),
    tn = "__reactFiber$" + mo,
    di = "__reactProps$" + mo,
    Sn = "__reactContainer$" + mo,
    pu = "__reactEvents$" + mo,
    Ay = "__reactListeners$" + mo,
    Fy = "__reactHandles$" + mo
function cr(e) {
    var t = e[tn]
    if (t) return t
    for (var n = e.parentNode; n; ) {
        if ((t = n[Sn] || n[tn])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = hf(e); e !== null; ) {
                    if ((n = e[tn])) return n
                    e = hf(e)
                }
            return t
        }
        ;(e = n), (n = e.parentNode)
    }
    return null
}
function Pi(e) {
    return (
        (e = e[tn] || e[Sn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    )
}
function Ur(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error($(33))
}
function ls(e) {
    return e[di] || null
}
var hu = [],
    Hr = -1
function ir(e) {
    return { current: e }
}
function xe(e) {
    0 > Hr || ((e.current = hu[Hr]), (hu[Hr] = null), Hr--)
}
function ve(e, t) {
    Hr++, (hu[Hr] = e.current), (e.current = t)
}
var tr = {},
    ot = ir(tr),
    ht = ir(!1),
    vr = tr
function io(e, t) {
    var n = e.type.contextTypes
    if (!n) return tr
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext
    var o = {},
        i
    for (i in n) o[i] = t[i]
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    )
}
function mt(e) {
    return (e = e.childContextTypes), e != null
}
function zl() {
    xe(ht), xe(ot)
}
function mf(e, t, n) {
    if (ot.current !== tr) throw Error($(168))
    ve(ot, t), ve(ht, n)
}
function cm(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n
    r = r.getChildContext()
    for (var o in r) if (!(o in t)) throw Error($(108, C1(e) || "Unknown", o))
    return Ne({}, n, r)
}
function $l(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            tr),
        (vr = ot.current),
        ve(ot, e),
        ve(ht, ht.current),
        !0
    )
}
function gf(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error($(169))
    n
        ? ((e = cm(e, t, vr)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          xe(ht),
          xe(ot),
          ve(ot, e))
        : xe(ht),
        ve(ht, n)
}
var fn = null,
    ss = !1,
    ga = !1
function dm(e) {
    fn === null ? (fn = [e]) : fn.push(e)
}
function By(e) {
    ;(ss = !0), dm(e)
}
function lr() {
    if (!ga && fn !== null) {
        ga = !0
        var e = 0,
            t = fe
        try {
            var n = fn
            for (fe = 1; e < n.length; e++) {
                var r = n[e]
                do r = r(!0)
                while (r !== null)
            }
            ;(fn = null), (ss = !1)
        } catch (o) {
            throw (fn !== null && (fn = fn.slice(e + 1)), Mh(fc, lr), o)
        } finally {
            ;(fe = t), (ga = !1)
        }
    }
    return null
}
var Wr = [],
    Vr = 0,
    Ol = null,
    Ml = 0,
    Nt = [],
    Rt = 0,
    wr = null,
    mn = 1,
    gn = ""
function ar(e, t) {
    ;(Wr[Vr++] = Ml), (Wr[Vr++] = Ol), (Ol = e), (Ml = t)
}
function fm(e, t, n) {
    ;(Nt[Rt++] = mn), (Nt[Rt++] = gn), (Nt[Rt++] = wr), (wr = e)
    var r = mn
    e = gn
    var o = 32 - Wt(r) - 1
    ;(r &= ~(1 << o)), (n += 1)
    var i = 32 - Wt(t) + o
    if (30 < i) {
        var l = o - (o % 5)
        ;(i = (r & ((1 << l) - 1)).toString(32)),
            (r >>= l),
            (o -= l),
            (mn = (1 << (32 - Wt(t) + o)) | (n << o) | r),
            (gn = i + e)
    } else (mn = (1 << i) | (n << o) | r), (gn = e)
}
function Sc(e) {
    e.return !== null && (ar(e, 1), fm(e, 1, 0))
}
function Ec(e) {
    for (; e === Ol; )
        (Ol = Wr[--Vr]), (Wr[Vr] = null), (Ml = Wr[--Vr]), (Wr[Vr] = null)
    for (; e === wr; )
        (wr = Nt[--Rt]),
            (Nt[Rt] = null),
            (gn = Nt[--Rt]),
            (Nt[Rt] = null),
            (mn = Nt[--Rt]),
            (Nt[Rt] = null)
}
var St = null,
    xt = null,
    ke = !1,
    Ut = null
function pm(e, t) {
    var n = bt(5, null, null, 0)
    ;(n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function yf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (St = e), (xt = Yn(t.firstChild)), !0)
                    : !1
            )
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (St = e), (xt = null), !0) : !1
            )
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = wr !== null ? { id: mn, overflow: gn } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824
                      }),
                      (n = bt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (St = e),
                      (xt = null),
                      !0)
                    : !1
            )
        default:
            return !1
    }
}
function mu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function gu(e) {
    if (ke) {
        var t = xt
        if (t) {
            var n = t
            if (!yf(e, t)) {
                if (mu(e)) throw Error($(418))
                t = Yn(n.nextSibling)
                var r = St
                t && yf(e, t)
                    ? pm(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (St = e))
            }
        } else {
            if (mu(e)) throw Error($(418))
            ;(e.flags = (e.flags & -4097) | 2), (ke = !1), (St = e)
        }
    }
}
function vf(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return
    St = e
}
function Ji(e) {
    if (e !== St) return !1
    if (!ke) return vf(e), (ke = !0), !1
    var t
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !du(e.type, e.memoizedProps))),
        t && (t = xt))
    ) {
        if (mu(e)) throw (hm(), Error($(418)))
        for (; t; ) pm(e, t), (t = Yn(t.nextSibling))
    }
    if ((vf(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error($(317))
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data
                    if (n === "/$") {
                        if (t === 0) {
                            xt = Yn(e.nextSibling)
                            break e
                        }
                        t--
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++
                }
                e = e.nextSibling
            }
            xt = null
        }
    } else xt = St ? Yn(e.stateNode.nextSibling) : null
    return !0
}
function hm() {
    for (var e = xt; e; ) e = Yn(e.nextSibling)
}
function lo() {
    ;(xt = St = null), (ke = !1)
}
function kc(e) {
    Ut === null ? (Ut = [e]) : Ut.push(e)
}
var Uy = Cn.ReactCurrentBatchConfig
function At(e, t) {
    if (e && e.defaultProps) {
        ;(t = Ne({}, t)), (e = e.defaultProps)
        for (var n in e) t[n] === void 0 && (t[n] = e[n])
        return t
    }
    return t
}
var Il = ir(null),
    Dl = null,
    Gr = null,
    Cc = null
function jc() {
    Cc = Gr = Dl = null
}
function Pc(e) {
    var t = Il.current
    xe(Il), (e._currentValue = t)
}
function yu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break
        e = e.return
    }
}
function no(e, t) {
    ;(Dl = e),
        (Cc = Gr = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (pt = !0), (e.firstContext = null))
}
function zt(e) {
    var t = e._currentValue
    if (Cc !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Gr === null)) {
            if (Dl === null) throw Error($(308))
            ;(Gr = e), (Dl.dependencies = { lanes: 0, firstContext: e })
        } else Gr = Gr.next = e
    return t
}
var dr = null
function _c(e) {
    dr === null ? (dr = [e]) : dr.push(e)
}
function mm(e, t, n, r) {
    var o = t.interleaved
    return (
        o === null ? ((n.next = n), _c(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        En(e, r)
    )
}
function En(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return)
    return n.tag === 3 ? n.stateNode : null
}
var An = !1
function Nc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null
    }
}
function gm(e, t) {
    ;(e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
}
function yn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function qn(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), de & 2)) {
        var o = r.pending
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            En(e, n)
        )
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), _c(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        En(e, n)
    )
}
function hl(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), pc(e, n)
    }
}
function wf(e, t) {
    var n = e.updateQueue,
        r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                }
                i === null ? (o = i = l) : (i = i.next = l), (n = n.next)
            } while (n !== null)
            i === null ? (o = i = t) : (i = i.next = t)
        } else o = i = t
        ;(n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }),
            (e.updateQueue = n)
        return
    }
    ;(e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t)
}
function Al(e, t, n, r) {
    var o = e.updateQueue
    An = !1
    var i = o.firstBaseUpdate,
        l = o.lastBaseUpdate,
        s = o.shared.pending
    if (s !== null) {
        o.shared.pending = null
        var a = s,
            u = a.next
        ;(a.next = null), l === null ? (i = u) : (l.next = u), (l = a)
        var c = e.alternate
        c !== null &&
            ((c = c.updateQueue),
            (s = c.lastBaseUpdate),
            s !== l &&
                (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
                (c.lastBaseUpdate = a)))
    }
    if (i !== null) {
        var d = o.baseState
        ;(l = 0), (c = u = a = null), (s = i)
        do {
            var p = s.lane,
                w = s.eventTime
            if ((r & p) === p) {
                c !== null &&
                    (c = c.next =
                        {
                            eventTime: w,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        })
                e: {
                    var g = e,
                        v = s
                    switch (((p = t), (w = n), v.tag)) {
                        case 1:
                            if (((g = v.payload), typeof g == "function")) {
                                d = g.call(w, d, p)
                                break e
                            }
                            d = g
                            break e
                        case 3:
                            g.flags = (g.flags & -65537) | 128
                        case 0:
                            if (
                                ((g = v.payload),
                                (p =
                                    typeof g == "function"
                                        ? g.call(w, d, p)
                                        : g),
                                p == null)
                            )
                                break e
                            d = Ne({}, d, p)
                            break e
                        case 2:
                            An = !0
                    }
                }
                s.callback !== null &&
                    s.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = o.effects),
                    p === null ? (o.effects = [s]) : p.push(s))
            } else
                (w = {
                    eventTime: w,
                    lane: p,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }),
                    c === null ? ((u = c = w), (a = d)) : (c = c.next = w),
                    (l |= p)
            if (((s = s.next), s === null)) {
                if (((s = o.shared.pending), s === null)) break
                ;(p = s),
                    (s = p.next),
                    (p.next = null),
                    (o.lastBaseUpdate = p),
                    (o.shared.pending = null)
            }
        } while (!0)
        if (
            (c === null && (a = d),
            (o.baseState = a),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = c),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t
            do (l |= o.lane), (o = o.next)
            while (o !== t)
        } else i === null && (o.shared.lanes = 0)
        ;(Sr |= l), (e.lanes = l), (e.memoizedState = d)
    }
}
function xf(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function"))
                    throw Error($(191, o))
                o.call(r)
            }
        }
}
var ym = new mh.Component().refs
function vu(e, t, n, r) {
    ;(t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : Ne({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var as = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Nr(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = at(),
            o = Jn(e),
            i = yn(r, o)
        ;(i.payload = t),
            n != null && (i.callback = n),
            (t = qn(e, i, o)),
            t !== null && (Vt(t, e, o, r), hl(t, e, o))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = at(),
            o = Jn(e),
            i = yn(r, o)
        ;(i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = qn(e, i, o)),
            t !== null && (Vt(t, e, o, r), hl(t, e, o))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = at(),
            r = Jn(e),
            o = yn(n, r)
        ;(o.tag = 2),
            t != null && (o.callback = t),
            (t = qn(e, o, r)),
            t !== null && (Vt(t, e, r, n), hl(t, e, r))
    }
}
function Sf(e, t, n, r, o, i, l) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, l)
            : t.prototype && t.prototype.isPureReactComponent
              ? !ai(n, r) || !ai(o, i)
              : !0
    )
}
function vm(e, t, n) {
    var r = !1,
        o = tr,
        i = t.contextType
    return (
        typeof i == "object" && i !== null
            ? (i = zt(i))
            : ((o = mt(t) ? vr : ot.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? io(e, o) : tr)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = as),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    )
}
function Ef(e, t, n, r) {
    ;(e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && as.enqueueReplaceState(t, t.state, null)
}
function wu(e, t, n, r) {
    var o = e.stateNode
    ;(o.props = n), (o.state = e.memoizedState), (o.refs = ym), Nc(e)
    var i = t.contextType
    typeof i == "object" && i !== null
        ? (o.context = zt(i))
        : ((i = mt(t) ? vr : ot.current), (o.context = io(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (vu(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" &&
                typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && as.enqueueReplaceState(o, o.state, null),
            Al(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ro(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error($(309))
                var r = n.stateNode
            }
            if (!r) throw Error($(147, e))
            var o = r,
                i = "" + e
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (l) {
                      var s = o.refs
                      s === ym && (s = o.refs = {}),
                          l === null ? delete s[i] : (s[i] = l)
                  }),
                  (t._stringRef = i),
                  t)
        }
        if (typeof e != "string") throw Error($(284))
        if (!n._owner) throw Error($(290, e))
    }
    return e
}
function Zi(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            $(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    )
}
function kf(e) {
    var t = e._init
    return t(e._payload)
}
function wm(e) {
    function t(m, h) {
        if (e) {
            var y = m.deletions
            y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h)
        }
    }
    function n(m, h) {
        if (!e) return null
        for (; h !== null; ) t(m, h), (h = h.sibling)
        return null
    }
    function r(m, h) {
        for (m = new Map(); h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
                (h = h.sibling)
        return m
    }
    function o(m, h) {
        return (m = Zn(m, h)), (m.index = 0), (m.sibling = null), m
    }
    function i(m, h, y) {
        return (
            (m.index = y),
            e
                ? ((y = m.alternate),
                  y !== null
                      ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
                      : ((m.flags |= 2), h))
                : ((m.flags |= 1048576), h)
        )
    }
    function l(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }
    function s(m, h, y, C) {
        return h === null || h.tag !== 6
            ? ((h = ka(y, m.mode, C)), (h.return = m), h)
            : ((h = o(h, y)), (h.return = m), h)
    }
    function a(m, h, y, C) {
        var R = y.type
        return R === Dr
            ? c(m, h, y.props.children, C, y.key)
            : h !== null &&
                (h.elementType === R ||
                    (typeof R == "object" &&
                        R !== null &&
                        R.$$typeof === Dn &&
                        kf(R) === h.type))
              ? ((C = o(h, y.props)), (C.ref = Ro(m, h, y)), (C.return = m), C)
              : ((C = xl(y.type, y.key, y.props, null, m.mode, C)),
                (C.ref = Ro(m, h, y)),
                (C.return = m),
                C)
    }
    function u(m, h, y, C) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== y.containerInfo ||
            h.stateNode.implementation !== y.implementation
            ? ((h = Ca(y, m.mode, C)), (h.return = m), h)
            : ((h = o(h, y.children || [])), (h.return = m), h)
    }
    function c(m, h, y, C, R) {
        return h === null || h.tag !== 7
            ? ((h = gr(y, m.mode, C, R)), (h.return = m), h)
            : ((h = o(h, y)), (h.return = m), h)
    }
    function d(m, h, y) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (h = ka("" + h, m.mode, y)), (h.return = m), h
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Ui:
                    return (
                        (y = xl(h.type, h.key, h.props, null, m.mode, y)),
                        (y.ref = Ro(m, null, h)),
                        (y.return = m),
                        y
                    )
                case Ir:
                    return (h = Ca(h, m.mode, y)), (h.return = m), h
                case Dn:
                    var C = h._init
                    return d(m, C(h._payload), y)
            }
            if (Fo(h) || Co(h))
                return (h = gr(h, m.mode, y, null)), (h.return = m), h
            Zi(m, h)
        }
        return null
    }
    function p(m, h, y, C) {
        var R = h !== null ? h.key : null
        if ((typeof y == "string" && y !== "") || typeof y == "number")
            return R !== null ? null : s(m, h, "" + y, C)
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Ui:
                    return y.key === R ? a(m, h, y, C) : null
                case Ir:
                    return y.key === R ? u(m, h, y, C) : null
                case Dn:
                    return (R = y._init), p(m, h, R(y._payload), C)
            }
            if (Fo(y) || Co(y)) return R !== null ? null : c(m, h, y, C, null)
            Zi(m, y)
        }
        return null
    }
    function w(m, h, y, C, R) {
        if ((typeof C == "string" && C !== "") || typeof C == "number")
            return (m = m.get(y) || null), s(h, m, "" + C, R)
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case Ui:
                    return (
                        (m = m.get(C.key === null ? y : C.key) || null),
                        a(h, m, C, R)
                    )
                case Ir:
                    return (
                        (m = m.get(C.key === null ? y : C.key) || null),
                        u(h, m, C, R)
                    )
                case Dn:
                    var x = C._init
                    return w(m, h, y, x(C._payload), R)
            }
            if (Fo(C) || Co(C))
                return (m = m.get(y) || null), c(h, m, C, R, null)
            Zi(h, C)
        }
        return null
    }
    function g(m, h, y, C) {
        for (
            var R = null, x = null, _ = h, T = (h = 0), M = null;
            _ !== null && T < y.length;
            T++
        ) {
            _.index > T ? ((M = _), (_ = null)) : (M = _.sibling)
            var F = p(m, _, y[T], C)
            if (F === null) {
                _ === null && (_ = M)
                break
            }
            e && _ && F.alternate === null && t(m, _),
                (h = i(F, h, T)),
                x === null ? (R = F) : (x.sibling = F),
                (x = F),
                (_ = M)
        }
        if (T === y.length) return n(m, _), ke && ar(m, T), R
        if (_ === null) {
            for (; T < y.length; T++)
                (_ = d(m, y[T], C)),
                    _ !== null &&
                        ((h = i(_, h, T)),
                        x === null ? (R = _) : (x.sibling = _),
                        (x = _))
            return ke && ar(m, T), R
        }
        for (_ = r(m, _); T < y.length; T++)
            (M = w(_, m, T, y[T], C)),
                M !== null &&
                    (e &&
                        M.alternate !== null &&
                        _.delete(M.key === null ? T : M.key),
                    (h = i(M, h, T)),
                    x === null ? (R = M) : (x.sibling = M),
                    (x = M))
        return (
            e &&
                _.forEach(function (V) {
                    return t(m, V)
                }),
            ke && ar(m, T),
            R
        )
    }
    function v(m, h, y, C) {
        var R = Co(y)
        if (typeof R != "function") throw Error($(150))
        if (((y = R.call(y)), y == null)) throw Error($(151))
        for (
            var x = (R = null), _ = h, T = (h = 0), M = null, F = y.next();
            _ !== null && !F.done;
            T++, F = y.next()
        ) {
            _.index > T ? ((M = _), (_ = null)) : (M = _.sibling)
            var V = p(m, _, F.value, C)
            if (V === null) {
                _ === null && (_ = M)
                break
            }
            e && _ && V.alternate === null && t(m, _),
                (h = i(V, h, T)),
                x === null ? (R = V) : (x.sibling = V),
                (x = V),
                (_ = M)
        }
        if (F.done) return n(m, _), ke && ar(m, T), R
        if (_ === null) {
            for (; !F.done; T++, F = y.next())
                (F = d(m, F.value, C)),
                    F !== null &&
                        ((h = i(F, h, T)),
                        x === null ? (R = F) : (x.sibling = F),
                        (x = F))
            return ke && ar(m, T), R
        }
        for (_ = r(m, _); !F.done; T++, F = y.next())
            (F = w(_, m, T, F.value, C)),
                F !== null &&
                    (e &&
                        F.alternate !== null &&
                        _.delete(F.key === null ? T : F.key),
                    (h = i(F, h, T)),
                    x === null ? (R = F) : (x.sibling = F),
                    (x = F))
        return (
            e &&
                _.forEach(function (ie) {
                    return t(m, ie)
                }),
            ke && ar(m, T),
            R
        )
    }
    function S(m, h, y, C) {
        if (
            (typeof y == "object" &&
                y !== null &&
                y.type === Dr &&
                y.key === null &&
                (y = y.props.children),
            typeof y == "object" && y !== null)
        ) {
            switch (y.$$typeof) {
                case Ui:
                    e: {
                        for (var R = y.key, x = h; x !== null; ) {
                            if (x.key === R) {
                                if (((R = y.type), R === Dr)) {
                                    if (x.tag === 7) {
                                        n(m, x.sibling),
                                            (h = o(x, y.props.children)),
                                            (h.return = m),
                                            (m = h)
                                        break e
                                    }
                                } else if (
                                    x.elementType === R ||
                                    (typeof R == "object" &&
                                        R !== null &&
                                        R.$$typeof === Dn &&
                                        kf(R) === x.type)
                                ) {
                                    n(m, x.sibling),
                                        (h = o(x, y.props)),
                                        (h.ref = Ro(m, x, y)),
                                        (h.return = m),
                                        (m = h)
                                    break e
                                }
                                n(m, x)
                                break
                            } else t(m, x)
                            x = x.sibling
                        }
                        y.type === Dr
                            ? ((h = gr(y.props.children, m.mode, C, y.key)),
                              (h.return = m),
                              (m = h))
                            : ((C = xl(
                                  y.type,
                                  y.key,
                                  y.props,
                                  null,
                                  m.mode,
                                  C
                              )),
                              (C.ref = Ro(m, h, y)),
                              (C.return = m),
                              (m = C))
                    }
                    return l(m)
                case Ir:
                    e: {
                        for (x = y.key; h !== null; ) {
                            if (h.key === x)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo ===
                                        y.containerInfo &&
                                    h.stateNode.implementation ===
                                        y.implementation
                                ) {
                                    n(m, h.sibling),
                                        (h = o(h, y.children || [])),
                                        (h.return = m),
                                        (m = h)
                                    break e
                                } else {
                                    n(m, h)
                                    break
                                }
                            else t(m, h)
                            h = h.sibling
                        }
                        ;(h = Ca(y, m.mode, C)), (h.return = m), (m = h)
                    }
                    return l(m)
                case Dn:
                    return (x = y._init), S(m, h, x(y._payload), C)
            }
            if (Fo(y)) return g(m, h, y, C)
            if (Co(y)) return v(m, h, y, C)
            Zi(m, y)
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
            ? ((y = "" + y),
              h !== null && h.tag === 6
                  ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
                  : (n(m, h), (h = ka(y, m.mode, C)), (h.return = m), (m = h)),
              l(m))
            : n(m, h)
    }
    return S
}
var so = wm(!0),
    xm = wm(!1),
    _i = {},
    on = ir(_i),
    fi = ir(_i),
    pi = ir(_i)
function fr(e) {
    if (e === _i) throw Error($(174))
    return e
}
function Rc(e, t) {
    switch ((ve(pi, t), ve(fi, e), ve(on, _i), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Xa(null, "")
            break
        default:
            ;(e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Xa(t, e))
    }
    xe(on), ve(on, t)
}
function ao() {
    xe(on), xe(fi), xe(pi)
}
function Sm(e) {
    fr(pi.current)
    var t = fr(on.current),
        n = Xa(t, e.type)
    t !== n && (ve(fi, e), ve(on, n))
}
function bc(e) {
    fi.current === e && (xe(on), xe(fi))
}
var Pe = ir(0)
function Fl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            ;(t.child.return = t), (t = t.child)
            continue
        }
        if (t === e) break
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null
            t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
}
var ya = []
function Lc() {
    for (var e = 0; e < ya.length; e++)
        ya[e]._workInProgressVersionPrimary = null
    ya.length = 0
}
var ml = Cn.ReactCurrentDispatcher,
    va = Cn.ReactCurrentBatchConfig,
    xr = 0,
    _e = null,
    Fe = null,
    Ve = null,
    Bl = !1,
    Yo = !1,
    hi = 0,
    Hy = 0
function et() {
    throw Error($(321))
}
function Tc(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Qt(e[n], t[n])) return !1
    return !0
}
function zc(e, t, n, r, o, i) {
    if (
        ((xr = i),
        (_e = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ml.current = e === null || e.memoizedState === null ? Ky : Qy),
        (e = n(r, o)),
        Yo)
    ) {
        i = 0
        do {
            if (((Yo = !1), (hi = 0), 25 <= i)) throw Error($(301))
            ;(i += 1),
                (Ve = Fe = null),
                (t.updateQueue = null),
                (ml.current = Yy),
                (e = n(r, o))
        } while (Yo)
    }
    if (
        ((ml.current = Ul),
        (t = Fe !== null && Fe.next !== null),
        (xr = 0),
        (Ve = Fe = _e = null),
        (Bl = !1),
        t)
    )
        throw Error($(300))
    return e
}
function $c() {
    var e = hi !== 0
    return (hi = 0), e
}
function en() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    }
    return Ve === null ? (_e.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve
}
function $t() {
    if (Fe === null) {
        var e = _e.alternate
        e = e !== null ? e.memoizedState : null
    } else e = Fe.next
    var t = Ve === null ? _e.memoizedState : Ve.next
    if (t !== null) (Ve = t), (Fe = e)
    else {
        if (e === null) throw Error($(310))
        ;(Fe = e),
            (e = {
                memoizedState: Fe.memoizedState,
                baseState: Fe.baseState,
                baseQueue: Fe.baseQueue,
                queue: Fe.queue,
                next: null
            }),
            Ve === null ? (_e.memoizedState = Ve = e) : (Ve = Ve.next = e)
    }
    return Ve
}
function mi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function wa(e) {
    var t = $t(),
        n = t.queue
    if (n === null) throw Error($(311))
    n.lastRenderedReducer = e
    var r = Fe,
        o = r.baseQueue,
        i = n.pending
    if (i !== null) {
        if (o !== null) {
            var l = o.next
            ;(o.next = i.next), (i.next = l)
        }
        ;(r.baseQueue = o = i), (n.pending = null)
    }
    if (o !== null) {
        ;(i = o.next), (r = r.baseState)
        var s = (l = null),
            a = null,
            u = i
        do {
            var c = u.lane
            if ((xr & c) === c)
                a !== null &&
                    (a = a.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action))
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }
                a === null ? ((s = a = d), (l = r)) : (a = a.next = d),
                    (_e.lanes |= c),
                    (Sr |= c)
            }
            u = u.next
        } while (u !== null && u !== i)
        a === null ? (l = r) : (a.next = s),
            Qt(r, t.memoizedState) || (pt = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = a),
            (n.lastRenderedState = r)
    }
    if (((e = n.interleaved), e !== null)) {
        o = e
        do (i = o.lane), (_e.lanes |= i), (Sr |= i), (o = o.next)
        while (o !== e)
    } else o === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
}
function xa(e) {
    var t = $t(),
        n = t.queue
    if (n === null) throw Error($(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState
    if (o !== null) {
        n.pending = null
        var l = (o = o.next)
        do (i = e(i, l.action)), (l = l.next)
        while (l !== o)
        Qt(i, t.memoizedState) || (pt = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i)
    }
    return [i, r]
}
function Em() {}
function km(e, t) {
    var n = _e,
        r = $t(),
        o = t(),
        i = !Qt(r.memoizedState, o)
    if (
        (i && ((r.memoizedState = o), (pt = !0)),
        (r = r.queue),
        Oc(Pm.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (Ve !== null && Ve.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            gi(9, jm.bind(null, n, r, o, t), void 0, null),
            Ke === null)
        )
            throw Error($(349))
        xr & 30 || Cm(n, t, o)
    }
    return o
}
function Cm(e, t, n) {
    ;(e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = _e.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (_e.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function jm(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), _m(t) && Nm(e)
}
function Pm(e, t, n) {
    return n(function () {
        _m(t) && Nm(e)
    })
}
function _m(e) {
    var t = e.getSnapshot
    e = e.value
    try {
        var n = t()
        return !Qt(e, n)
    } catch {
        return !0
    }
}
function Nm(e) {
    var t = En(e, 1)
    t !== null && Vt(t, e, 1, -1)
}
function Cf(e) {
    var t = en()
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: mi,
            lastRenderedState: e
        }),
        (t.queue = e),
        (e = e.dispatch = Gy.bind(null, _e, e)),
        [t.memoizedState, e]
    )
}
function gi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = _e.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (_e.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    )
}
function Rm() {
    return $t().memoizedState
}
function gl(e, t, n, r) {
    var o = en()
    ;(_e.flags |= e),
        (o.memoizedState = gi(1 | t, n, void 0, r === void 0 ? null : r))
}
function us(e, t, n, r) {
    var o = $t()
    r = r === void 0 ? null : r
    var i = void 0
    if (Fe !== null) {
        var l = Fe.memoizedState
        if (((i = l.destroy), r !== null && Tc(r, l.deps))) {
            o.memoizedState = gi(t, n, i, r)
            return
        }
    }
    ;(_e.flags |= e), (o.memoizedState = gi(1 | t, n, i, r))
}
function jf(e, t) {
    return gl(8390656, 8, e, t)
}
function Oc(e, t) {
    return us(2048, 8, e, t)
}
function bm(e, t) {
    return us(4, 2, e, t)
}
function Lm(e, t) {
    return us(4, 4, e, t)
}
function Tm(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null)
            }
        )
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null
            }
        )
}
function zm(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), us(4, 4, Tm.bind(null, t, e), n)
    )
}
function Mc() {}
function $m(e, t) {
    var n = $t()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Tc(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e)
}
function Om(e, t) {
    var n = $t()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Tc(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Mm(e, t, n) {
    return xr & 21
        ? (Qt(n, t) ||
              ((n = Ah()), (_e.lanes |= n), (Sr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (pt = !0)),
          (e.memoizedState = n))
}
function Wy(e, t) {
    var n = fe
    ;(fe = n !== 0 && 4 > n ? n : 4), e(!0)
    var r = va.transition
    va.transition = {}
    try {
        e(!1), t()
    } finally {
        ;(fe = n), (va.transition = r)
    }
}
function Im() {
    return $t().memoizedState
}
function Vy(e, t, n) {
    var r = Jn(e)
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }),
        Dm(e))
    )
        Am(t, n)
    else if (((n = mm(e, t, n, r)), n !== null)) {
        var o = at()
        Vt(n, e, r, o), Fm(n, t, r)
    }
}
function Gy(e, t, n) {
    var r = Jn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }
    if (Dm(e)) Am(t, o)
    else {
        var i = e.alternate
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var l = t.lastRenderedState,
                    s = i(l, n)
                if (((o.hasEagerState = !0), (o.eagerState = s), Qt(s, l))) {
                    var a = t.interleaved
                    a === null
                        ? ((o.next = o), _c(t))
                        : ((o.next = a.next), (a.next = o)),
                        (t.interleaved = o)
                    return
                }
            } catch {
            } finally {
            }
        ;(n = mm(e, t, o, r)),
            n !== null && ((o = at()), Vt(n, e, r, o), Fm(n, t, r))
    }
}
function Dm(e) {
    var t = e.alternate
    return e === _e || (t !== null && t === _e)
}
function Am(e, t) {
    Yo = Bl = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t)
}
function Fm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), pc(e, n)
    }
}
var Ul = {
        readContext: zt,
        useCallback: et,
        useContext: et,
        useEffect: et,
        useImperativeHandle: et,
        useInsertionEffect: et,
        useLayoutEffect: et,
        useMemo: et,
        useReducer: et,
        useRef: et,
        useState: et,
        useDebugValue: et,
        useDeferredValue: et,
        useTransition: et,
        useMutableSource: et,
        useSyncExternalStore: et,
        useId: et,
        unstable_isNewReconciler: !1
    },
    Ky = {
        readContext: zt,
        useCallback: function (e, t) {
            return (en().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: zt,
        useEffect: jf,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                gl(4194308, 4, Tm.bind(null, t, e), n)
            )
        },
        useLayoutEffect: function (e, t) {
            return gl(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return gl(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = en()
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            )
        },
        useReducer: function (e, t, n) {
            var r = en()
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }),
                (r.queue = e),
                (e = e.dispatch = Vy.bind(null, _e, e)),
                [r.memoizedState, e]
            )
        },
        useRef: function (e) {
            var t = en()
            return (e = { current: e }), (t.memoizedState = e)
        },
        useState: Cf,
        useDebugValue: Mc,
        useDeferredValue: function (e) {
            return (en().memoizedState = e)
        },
        useTransition: function () {
            var e = Cf(!1),
                t = e[0]
            return (e = Wy.bind(null, e[1])), (en().memoizedState = e), [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = _e,
                o = en()
            if (ke) {
                if (n === void 0) throw Error($(407))
                n = n()
            } else {
                if (((n = t()), Ke === null)) throw Error($(349))
                xr & 30 || Cm(r, t, n)
            }
            o.memoizedState = n
            var i = { value: n, getSnapshot: t }
            return (
                (o.queue = i),
                jf(Pm.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                gi(9, jm.bind(null, r, i, n, t), void 0, null),
                n
            )
        },
        useId: function () {
            var e = en(),
                t = Ke.identifierPrefix
            if (ke) {
                var n = gn,
                    r = mn
                ;(n = (r & ~(1 << (32 - Wt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = hi++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":")
            } else (n = Hy++), (t = ":" + t + "r" + n.toString(32) + ":")
            return (e.memoizedState = t)
        },
        unstable_isNewReconciler: !1
    },
    Qy = {
        readContext: zt,
        useCallback: $m,
        useContext: zt,
        useEffect: Oc,
        useImperativeHandle: zm,
        useInsertionEffect: bm,
        useLayoutEffect: Lm,
        useMemo: Om,
        useReducer: wa,
        useRef: Rm,
        useState: function () {
            return wa(mi)
        },
        useDebugValue: Mc,
        useDeferredValue: function (e) {
            var t = $t()
            return Mm(t, Fe.memoizedState, e)
        },
        useTransition: function () {
            var e = wa(mi)[0],
                t = $t().memoizedState
            return [e, t]
        },
        useMutableSource: Em,
        useSyncExternalStore: km,
        useId: Im,
        unstable_isNewReconciler: !1
    },
    Yy = {
        readContext: zt,
        useCallback: $m,
        useContext: zt,
        useEffect: Oc,
        useImperativeHandle: zm,
        useInsertionEffect: bm,
        useLayoutEffect: Lm,
        useMemo: Om,
        useReducer: xa,
        useRef: Rm,
        useState: function () {
            return xa(mi)
        },
        useDebugValue: Mc,
        useDeferredValue: function (e) {
            var t = $t()
            return Fe === null
                ? (t.memoizedState = e)
                : Mm(t, Fe.memoizedState, e)
        },
        useTransition: function () {
            var e = xa(mi)[0],
                t = $t().memoizedState
            return [e, t]
        },
        useMutableSource: Em,
        useSyncExternalStore: km,
        useId: Im,
        unstable_isNewReconciler: !1
    }
function uo(e, t) {
    try {
        var n = "",
            r = t
        do (n += k1(r)), (r = r.return)
        while (r)
        var o = n
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack
    }
    return { value: e, source: t, stack: o, digest: null }
}
function Sa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function xu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var qy = typeof WeakMap == "function" ? WeakMap : Map
function Bm(e, t, n) {
    ;(n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
        (n.callback = function () {
            Wl || ((Wl = !0), (bu = r)), xu(e, t)
        }),
        n
    )
}
function Um(e, t, n) {
    ;(n = yn(-1, n)), (n.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == "function") {
        var o = t.value
        ;(n.payload = function () {
            return r(o)
        }),
            (n.callback = function () {
                xu(e, t)
            })
    }
    var i = e.stateNode
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                xu(e, t),
                    typeof r != "function" &&
                        (Xn === null ? (Xn = new Set([this])) : Xn.add(this))
                var l = t.stack
                this.componentDidCatch(t.value, {
                    componentStack: l !== null ? l : ""
                })
            }),
        n
    )
}
function Pf(e, t, n) {
    var r = e.pingCache
    if (r === null) {
        r = e.pingCache = new qy()
        var o = new Set()
        r.set(t, o)
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
    o.has(n) || (o.add(n), (e = cv.bind(null, e, t, n)), t.then(e, e))
}
function _f(e) {
    do {
        var t
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e
        e = e.return
    } while (e !== null)
    return null
}
function Nf(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = yn(-1, 1)), (t.tag = 2), qn(n, t, 1))),
                (n.lanes |= 1)),
          e)
}
var Xy = Cn.ReactCurrentOwner,
    pt = !1
function lt(e, t, n, r) {
    t.child = e === null ? xm(t, null, n, r) : so(t, e.child, n, r)
}
function Rf(e, t, n, r, o) {
    n = n.render
    var i = t.ref
    return (
        no(t, o),
        (r = zc(e, t, n, r, i, o)),
        (n = $c()),
        e !== null && !pt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              kn(e, t, o))
            : (ke && n && Sc(t), (t.flags |= 1), lt(e, t, r, o), t.child)
    )
}
function bf(e, t, n, r, o) {
    if (e === null) {
        var i = n.type
        return typeof i == "function" &&
            !Wc(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), Hm(e, t, i, r, o))
            : ((e = xl(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e))
    }
    if (((i = e.child), !(e.lanes & o))) {
        var l = i.memoizedProps
        if (
            ((n = n.compare),
            (n = n !== null ? n : ai),
            n(l, r) && e.ref === t.ref)
        )
            return kn(e, t, o)
    }
    return (
        (t.flags |= 1),
        (e = Zn(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    )
}
function Hm(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps
        if (ai(i, r) && e.ref === t.ref)
            if (((pt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && (pt = !0)
            else return (t.lanes = e.lanes), kn(e, t, o)
    }
    return Su(e, t, n, r, o)
}
function Wm(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }),
                ve(Qr, vt),
                (vt |= n)
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }),
                    (t.updateQueue = null),
                    ve(Qr, vt),
                    (vt |= e),
                    null
                )
            ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }),
                (r = i !== null ? i.baseLanes : n),
                ve(Qr, vt),
                (vt |= r)
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            ve(Qr, vt),
            (vt |= r)
    return lt(e, t, o, n), t.child
}
function Vm(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152))
}
function Su(e, t, n, r, o) {
    var i = mt(n) ? vr : ot.current
    return (
        (i = io(t, i)),
        no(t, o),
        (n = zc(e, t, n, r, i, o)),
        (r = $c()),
        e !== null && !pt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              kn(e, t, o))
            : (ke && r && Sc(t), (t.flags |= 1), lt(e, t, n, o), t.child)
    )
}
function Lf(e, t, n, r, o) {
    if (mt(n)) {
        var i = !0
        $l(t)
    } else i = !1
    if ((no(t, o), t.stateNode === null))
        yl(e, t), vm(t, n, r), wu(t, n, r, o), (r = !0)
    else if (e === null) {
        var l = t.stateNode,
            s = t.memoizedProps
        l.props = s
        var a = l.context,
            u = n.contextType
        typeof u == "object" && u !== null
            ? (u = zt(u))
            : ((u = mt(n) ? vr : ot.current), (u = io(t, u)))
        var c = n.getDerivedStateFromProps,
            d =
                typeof c == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function"
        d ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== r || a !== u) && Ef(t, l, r, u)),
            (An = !1)
        var p = t.memoizedState
        ;(l.state = p),
            Al(t, r, l, o),
            (a = t.memoizedState),
            s !== r || p !== a || ht.current || An
                ? (typeof c == "function" &&
                      (vu(t, n, c, r), (a = t.memoizedState)),
                  (s = An || Sf(t, n, s, r, p, a, u))
                      ? (d ||
                            (typeof l.UNSAFE_componentWillMount != "function" &&
                                typeof l.componentWillMount != "function") ||
                            (typeof l.componentWillMount == "function" &&
                                l.componentWillMount(),
                            typeof l.UNSAFE_componentWillMount == "function" &&
                                l.UNSAFE_componentWillMount()),
                        typeof l.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof l.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = a)),
                  (l.props = r),
                  (l.state = a),
                  (l.context = u),
                  (r = s))
                : (typeof l.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1))
    } else {
        ;(l = t.stateNode),
            gm(e, t),
            (s = t.memoizedProps),
            (u = t.type === t.elementType ? s : At(t.type, s)),
            (l.props = u),
            (d = t.pendingProps),
            (p = l.context),
            (a = n.contextType),
            typeof a == "object" && a !== null
                ? (a = zt(a))
                : ((a = mt(n) ? vr : ot.current), (a = io(t, a)))
        var w = n.getDerivedStateFromProps
        ;(c =
            typeof w == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function") ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== d || p !== a) && Ef(t, l, r, a)),
            (An = !1),
            (p = t.memoizedState),
            (l.state = p),
            Al(t, r, l, o)
        var g = t.memoizedState
        s !== d || p !== g || ht.current || An
            ? (typeof w == "function" &&
                  (vu(t, n, w, r), (g = t.memoizedState)),
              (u = An || Sf(t, n, u, r, p, g, a) || !1)
                  ? (c ||
                        (typeof l.UNSAFE_componentWillUpdate != "function" &&
                            typeof l.componentWillUpdate != "function") ||
                        (typeof l.componentWillUpdate == "function" &&
                            l.componentWillUpdate(r, g, a),
                        typeof l.UNSAFE_componentWillUpdate == "function" &&
                            l.UNSAFE_componentWillUpdate(r, g, a)),
                    typeof l.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof l.componentDidUpdate != "function" ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate != "function" ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = g)),
              (l.props = r),
              (l.state = g),
              (l.context = a),
              (r = u))
            : (typeof l.componentDidUpdate != "function" ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1))
    }
    return Eu(e, t, n, r, i, o)
}
function Eu(e, t, n, r, o, i) {
    Vm(e, t)
    var l = (t.flags & 128) !== 0
    if (!r && !l) return o && gf(t, n, !1), kn(e, t, i)
    ;(r = t.stateNode), (Xy.current = t)
    var s =
        l && typeof n.getDerivedStateFromError != "function" ? null : r.render()
    return (
        (t.flags |= 1),
        e !== null && l
            ? ((t.child = so(t, e.child, null, i)),
              (t.child = so(t, null, s, i)))
            : lt(e, t, s, i),
        (t.memoizedState = r.state),
        o && gf(t, n, !0),
        t.child
    )
}
function Gm(e) {
    var t = e.stateNode
    t.pendingContext
        ? mf(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && mf(e, t.context, !1),
        Rc(e, t.containerInfo)
}
function Tf(e, t, n, r, o) {
    return lo(), kc(o), (t.flags |= 256), lt(e, t, n, r), t.child
}
var ku = { dehydrated: null, treeContext: null, retryLane: 0 }
function Cu(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
}
function Km(e, t, n) {
    var r = t.pendingProps,
        o = Pe.current,
        i = !1,
        l = (t.flags & 128) !== 0,
        s
    if (
        ((s = l) ||
            (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        s
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        ve(Pe, o & 1),
        e === null)
    )
        return (
            gu(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((l = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (l = { mode: "hidden", children: l }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = l))
                            : (i = fs(l, r, 0, null)),
                        (e = gr(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = Cu(n)),
                        (t.memoizedState = ku),
                        e)
                      : Ic(t, l))
        )
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
        return Jy(e, t, l, r, s, o, n)
    if (i) {
        ;(i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling)
        var a = { mode: "hidden", children: r.children }
        return (
            !(l & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = a),
                  (t.deletions = null))
                : ((r = Zn(o, a)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            s !== null
                ? (i = Zn(s, i))
                : ((i = gr(i, l, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (l = e.child.memoizedState),
            (l =
                l === null
                    ? Cu(n)
                    : {
                          baseLanes: l.baseLanes | n,
                          cachePool: null,
                          transitions: l.transitions
                      }),
            (i.memoizedState = l),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = ku),
            r
        )
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = Zn(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    )
}
function Ic(e, t) {
    return (
        (t = fs({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    )
}
function el(e, t, n, r) {
    return (
        r !== null && kc(r),
        so(t, e.child, null, n),
        (e = Ic(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    )
}
function Jy(e, t, n, r, o, i, l) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Sa(Error($(422)))), el(e, t, l, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((i = r.fallback),
                (o = t.mode),
                (r = fs({ mode: "visible", children: r.children }, o, 0, null)),
                (i = gr(i, o, l, null)),
                (i.flags |= 2),
                (r.return = t),
                (i.return = t),
                (r.sibling = i),
                (t.child = r),
                t.mode & 1 && so(t, e.child, null, l),
                (t.child.memoizedState = Cu(l)),
                (t.memoizedState = ku),
                i)
    if (!(t.mode & 1)) return el(e, t, l, null)
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst
        return (
            (r = s), (i = Error($(419))), (r = Sa(i, r, void 0)), el(e, t, l, r)
        )
    }
    if (((s = (l & e.childLanes) !== 0), pt || s)) {
        if (((r = Ke), r !== null)) {
            switch (l & -l) {
                case 4:
                    o = 2
                    break
                case 16:
                    o = 8
                    break
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32
                    break
                case 536870912:
                    o = 268435456
                    break
                default:
                    o = 0
            }
            ;(o = o & (r.suspendedLanes | l) ? 0 : o),
                o !== 0 &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), En(e, o), Vt(r, e, o, -1))
        }
        return Hc(), (r = Sa(Error($(421)))), el(e, t, l, r)
    }
    return o.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = dv.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (xt = Yn(o.nextSibling)),
          (St = t),
          (ke = !0),
          (Ut = null),
          e !== null &&
              ((Nt[Rt++] = mn),
              (Nt[Rt++] = gn),
              (Nt[Rt++] = wr),
              (mn = e.id),
              (gn = e.overflow),
              (wr = t)),
          (t = Ic(t, r.children)),
          (t.flags |= 4096),
          t)
}
function zf(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), yu(e.return, t, n)
}
function Ea(e, t, n, r, o) {
    var i = e.memoizedState
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o))
}
function Qm(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail
    if ((lt(e, t, r.children, n), (r = Pe.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128)
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && zf(e, n, t)
                else if (e.tag === 19) zf(e, n, t)
                else if (e.child !== null) {
                    ;(e.child.return = e), (e = e.child)
                    continue
                }
                if (e === t) break e
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e
                    e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
            }
        r &= 1
    }
    if ((ve(Pe, r), !(t.mode & 1))) t.memoizedState = null
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Fl(e) === null && (o = n),
                        (n = n.sibling)
                ;(n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    Ea(t, !1, o, n, i)
                break
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Fl(e) === null)) {
                        t.child = o
                        break
                    }
                    ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
                }
                Ea(t, !0, n, null, i)
                break
            case "together":
                Ea(t, !1, null, null, void 0)
                break
            default:
                t.memoizedState = null
        }
    return t.child
}
function yl(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function kn(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Sr |= t.lanes),
        !(n & t.childLanes))
    )
        return null
    if (e !== null && t.child !== e.child) throw Error($(153))
    if (t.child !== null) {
        for (
            e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Zn(e, e.pendingProps)),
                (n.return = t)
        n.sibling = null
    }
    return t.child
}
function Zy(e, t, n) {
    switch (t.tag) {
        case 3:
            Gm(t), lo()
            break
        case 5:
            Sm(t)
            break
        case 1:
            mt(t.type) && $l(t)
            break
        case 4:
            Rc(t, t.stateNode.containerInfo)
            break
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value
            ve(Il, r._currentValue), (r._currentValue = o)
            break
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (ve(Pe, Pe.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? Km(e, t, n)
                      : (ve(Pe, Pe.current & 1),
                        (e = kn(e, t, n)),
                        e !== null ? e.sibling : null)
            ve(Pe, Pe.current & 1)
            break
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Qm(e, t, n)
                t.flags |= 128
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                ve(Pe, Pe.current),
                r)
            )
                break
            return null
        case 22:
        case 23:
            return (t.lanes = 0), Wm(e, t, n)
    }
    return kn(e, t, n)
}
var Ym, ju, qm, Xm
Ym = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
        else if (n.tag !== 4 && n.child !== null) {
            ;(n.child.return = n), (n = n.child)
            continue
        }
        if (n === t) break
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return
            n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
    }
}
ju = function () {}
qm = function (e, t, n, r) {
    var o = e.memoizedProps
    if (o !== r) {
        ;(e = t.stateNode), fr(on.current)
        var i = null
        switch (n) {
            case "input":
                ;(o = Ka(e, o)), (r = Ka(e, r)), (i = [])
                break
            case "select":
                ;(o = Ne({}, o, { value: void 0 })),
                    (r = Ne({}, r, { value: void 0 })),
                    (i = [])
                break
            case "textarea":
                ;(o = qa(e, o)), (r = qa(e, r)), (i = [])
                break
            default:
                typeof o.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Tl)
        }
        Ja(n, r)
        var l
        n = null
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u]
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""))
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (ti.hasOwnProperty(u)
                            ? i || (i = [])
                            : (i = i || []).push(u, null))
        for (u in r) {
            var a = r[u]
            if (
                ((s = o != null ? o[u] : void 0),
                r.hasOwnProperty(u) && a !== s && (a != null || s != null))
            )
                if (u === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) ||
                                (a && a.hasOwnProperty(l)) ||
                                (n || (n = {}), (n[l] = ""))
                        for (l in a)
                            a.hasOwnProperty(l) &&
                                s[l] !== a[l] &&
                                (n || (n = {}), (n[l] = a[l]))
                    } else n || (i || (i = []), i.push(u, n)), (n = a)
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((a = a ? a.__html : void 0),
                          (s = s ? s.__html : void 0),
                          a != null && s !== a && (i = i || []).push(u, a))
                        : u === "children"
                          ? (typeof a != "string" && typeof a != "number") ||
                            (i = i || []).push(u, "" + a)
                          : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (ti.hasOwnProperty(u)
                                ? (a != null &&
                                      u === "onScroll" &&
                                      we("scroll", e),
                                  i || s === a || (i = []))
                                : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n)
        var u = i
        ;(t.updateQueue = u) && (t.flags |= 4)
    }
}
Xm = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
function bo(e, t) {
    if (!ke)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling)
                n === null ? (e.tail = null) : (n.sibling = null)
                break
            case "collapsed":
                n = e.tail
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling)
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null)
        }
}
function tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling)
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function ev(e, t, n) {
    var r = t.pendingProps
    switch ((Ec(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return tt(t), null
        case 1:
            return mt(t.type) && zl(), tt(t), null
        case 3:
            return (
                (r = t.stateNode),
                ao(),
                xe(ht),
                xe(ot),
                Lc(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Ji(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ut !== null && (zu(Ut), (Ut = null)))),
                ju(e, t),
                tt(t),
                null
            )
        case 5:
            bc(t)
            var o = fr(pi.current)
            if (((n = t.type), e !== null && t.stateNode != null))
                qm(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error($(166))
                    return tt(t), null
                }
                if (((e = fr(on.current)), Ji(t))) {
                    ;(r = t.stateNode), (n = t.type)
                    var i = t.memoizedProps
                    switch (
                        ((r[tn] = t), (r[di] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            we("cancel", r), we("close", r)
                            break
                        case "iframe":
                        case "object":
                        case "embed":
                            we("load", r)
                            break
                        case "video":
                        case "audio":
                            for (o = 0; o < Uo.length; o++) we(Uo[o], r)
                            break
                        case "source":
                            we("error", r)
                            break
                        case "img":
                        case "image":
                        case "link":
                            we("error", r), we("load", r)
                            break
                        case "details":
                            we("toggle", r)
                            break
                        case "input":
                            Bd(r, i), we("invalid", r)
                            break
                        case "select":
                            ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                                we("invalid", r)
                            break
                        case "textarea":
                            Hd(r, i), we("invalid", r)
                    }
                    Ja(n, i), (o = null)
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            var s = i[l]
                            l === "children"
                                ? typeof s == "string"
                                    ? r.textContent !== s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Xi(r.textContent, s, e),
                                      (o = ["children", s]))
                                    : typeof s == "number" &&
                                      r.textContent !== "" + s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Xi(r.textContent, s, e),
                                      (o = ["children", "" + s]))
                                : ti.hasOwnProperty(l) &&
                                  s != null &&
                                  l === "onScroll" &&
                                  we("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Hi(r), Ud(r, i, !0)
                            break
                        case "textarea":
                            Hi(r), Wd(r)
                            break
                        case "select":
                        case "option":
                            break
                        default:
                            typeof i.onClick == "function" && (r.onclick = Tl)
                    }
                    ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
                } else {
                    ;(l = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Ch(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = l.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = l.createElement(n, { is: r.is }))
                                  : ((e = l.createElement(n)),
                                    n === "select" &&
                                        ((l = e),
                                        r.multiple
                                            ? (l.multiple = !0)
                                            : r.size && (l.size = r.size)))
                            : (e = l.createElementNS(e, n)),
                        (e[tn] = t),
                        (e[di] = r),
                        Ym(e, t, !1, !1),
                        (t.stateNode = e)
                    e: {
                        switch (((l = Za(n, r)), n)) {
                            case "dialog":
                                we("cancel", e), we("close", e), (o = r)
                                break
                            case "iframe":
                            case "object":
                            case "embed":
                                we("load", e), (o = r)
                                break
                            case "video":
                            case "audio":
                                for (o = 0; o < Uo.length; o++) we(Uo[o], e)
                                o = r
                                break
                            case "source":
                                we("error", e), (o = r)
                                break
                            case "img":
                            case "image":
                            case "link":
                                we("error", e), we("load", e), (o = r)
                                break
                            case "details":
                                we("toggle", e), (o = r)
                                break
                            case "input":
                                Bd(e, r), (o = Ka(e, r)), we("invalid", e)
                                break
                            case "option":
                                o = r
                                break
                            case "select":
                                ;(e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }),
                                    (o = Ne({}, r, { value: void 0 })),
                                    we("invalid", e)
                                break
                            case "textarea":
                                Hd(e, r), (o = qa(e, r)), we("invalid", e)
                                break
                            default:
                                o = r
                        }
                        Ja(n, o), (s = o)
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var a = s[i]
                                i === "style"
                                    ? _h(e, a)
                                    : i === "dangerouslySetInnerHTML"
                                      ? ((a = a ? a.__html : void 0),
                                        a != null && jh(e, a))
                                      : i === "children"
                                        ? typeof a == "string"
                                            ? (n !== "textarea" || a !== "") &&
                                              ni(e, a)
                                            : typeof a == "number" &&
                                              ni(e, "" + a)
                                        : i !==
                                              "suppressContentEditableWarning" &&
                                          i !== "suppressHydrationWarning" &&
                                          i !== "autoFocus" &&
                                          (ti.hasOwnProperty(i)
                                              ? a != null &&
                                                i === "onScroll" &&
                                                we("scroll", e)
                                              : a != null && sc(e, i, a, l))
                            }
                        switch (n) {
                            case "input":
                                Hi(e), Ud(e, r, !1)
                                break
                            case "textarea":
                                Hi(e), Wd(e)
                                break
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + er(r.value))
                                break
                            case "select":
                                ;(e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Jr(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Jr(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          )
                                break
                            default:
                                typeof o.onClick == "function" &&
                                    (e.onclick = Tl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus
                                break e
                            case "img":
                                r = !0
                                break e
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
            }
            return tt(t), null
        case 6:
            if (e && t.stateNode != null) Xm(e, t, e.memoizedProps, r)
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error($(166))
                if (((n = fr(pi.current)), fr(on.current), Ji(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[tn] = t),
                        (i = r.nodeValue !== n) && ((e = St), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Xi(r.nodeValue, n, (e.mode & 1) !== 0)
                                break
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 && Xi(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    i && (t.flags |= 4)
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[tn] = t),
                        (t.stateNode = r)
            }
            return tt(t), null
        case 13:
            if (
                (xe(Pe),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (ke && xt !== null && t.mode & 1 && !(t.flags & 128))
                    hm(), lo(), (t.flags |= 98560), (i = !1)
                else if (((i = Ji(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error($(318))
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error($(317))
                        i[tn] = t
                    } else
                        lo(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4)
                    tt(t), (i = !1)
                } else Ut !== null && (zu(Ut), (Ut = null)), (i = !0)
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || Pe.current & 1
                              ? Be === 0 && (Be = 3)
                              : Hc())),
                  t.updateQueue !== null && (t.flags |= 4),
                  tt(t),
                  null)
        case 4:
            return (
                ao(),
                ju(e, t),
                e === null && ui(t.stateNode.containerInfo),
                tt(t),
                null
            )
        case 10:
            return Pc(t.type._context), tt(t), null
        case 17:
            return mt(t.type) && zl(), tt(t), null
        case 19:
            if ((xe(Pe), (i = t.memoizedState), i === null)) return tt(t), null
            if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
                if (r) bo(i, !1)
                else {
                    if (Be !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((l = Fl(e)), l !== null)) {
                                for (
                                    t.flags |= 128,
                                        bo(i, !1),
                                        r = l.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (l = i.alternate),
                                        l === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = l.childLanes),
                                              (i.lanes = l.lanes),
                                              (i.child = l.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  l.memoizedProps),
                                              (i.memoizedState =
                                                  l.memoizedState),
                                              (i.updateQueue = l.updateQueue),
                                              (i.type = l.type),
                                              (e = l.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext
                                                        })),
                                        (n = n.sibling)
                                return ve(Pe, (Pe.current & 1) | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null &&
                        Me() > co &&
                        ((t.flags |= 128),
                        (r = !0),
                        bo(i, !1),
                        (t.lanes = 4194304))
                }
            else {
                if (!r)
                    if (((e = Fl(l)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            bo(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !l.alternate &&
                                !ke)
                        )
                            return tt(t), null
                    } else
                        2 * Me() - i.renderingStartTime > co &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            bo(i, !1),
                            (t.lanes = 4194304))
                i.isBackwards
                    ? ((l.sibling = t.child), (t.child = l))
                    : ((n = i.last),
                      n !== null ? (n.sibling = l) : (t.child = l),
                      (i.last = l))
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Me()),
                  (t.sibling = null),
                  (n = Pe.current),
                  ve(Pe, r ? (n & 1) | 2 : n & 1),
                  t)
                : (tt(t), null)
        case 22:
        case 23:
            return (
                Uc(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? vt & 1073741824 &&
                      (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : tt(t),
                null
            )
        case 24:
            return null
        case 25:
            return null
    }
    throw Error($(156, t.tag))
}
function tv(e, t) {
    switch ((Ec(t), t.tag)) {
        case 1:
            return (
                mt(t.type) && zl(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 3:
            return (
                ao(),
                xe(ht),
                xe(ot),
                Lc(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            )
        case 5:
            return bc(t), null
        case 13:
            if (
                (xe(Pe),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error($(340))
                lo()
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 19:
            return xe(Pe), null
        case 4:
            return ao(), null
        case 10:
            return Pc(t.type._context), null
        case 22:
        case 23:
            return Uc(), null
        case 24:
            return null
        default:
            return null
    }
}
var tl = !1,
    nt = !1,
    nv = typeof WeakSet == "function" ? WeakSet : Set,
    A = null
function Kr(e, t) {
    var n = e.ref
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                be(e, t, r)
            }
        else n.current = null
}
function Pu(e, t, n) {
    try {
        n()
    } catch (r) {
        be(e, t, r)
    }
}
var $f = !1
function rv(e, t) {
    if (((uu = Rl), (e = tm()), xc(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd }
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window
                var r = n.getSelection && n.getSelection()
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode
                    var o = r.anchorOffset,
                        i = r.focusNode
                    r = r.focusOffset
                    try {
                        n.nodeType, i.nodeType
                    } catch {
                        n = null
                        break e
                    }
                    var l = 0,
                        s = -1,
                        a = -1,
                        u = 0,
                        c = 0,
                        d = e,
                        p = null
                    t: for (;;) {
                        for (
                            var w;
                            d !== n ||
                                (o !== 0 && d.nodeType !== 3) ||
                                (s = l + o),
                                d !== i ||
                                    (r !== 0 && d.nodeType !== 3) ||
                                    (a = l + r),
                                d.nodeType === 3 && (l += d.nodeValue.length),
                                (w = d.firstChild) !== null;

                        )
                            (p = d), (d = w)
                        for (;;) {
                            if (d === e) break t
                            if (
                                (p === n && ++u === o && (s = l),
                                p === i && ++c === r && (a = l),
                                (w = d.nextSibling) !== null)
                            )
                                break
                            ;(d = p), (p = d.parentNode)
                        }
                        d = w
                    }
                    n = s === -1 || a === -1 ? null : { start: s, end: a }
                } else n = null
            }
        n = n || { start: 0, end: 0 }
    } else n = null
    for (
        cu = { focusedElem: e, selectionRange: n }, Rl = !1, A = t;
        A !== null;

    )
        if (
            ((t = A),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (A = e)
        else
            for (; A !== null; ) {
                t = A
                try {
                    var g = t.alternate
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break
                            case 1:
                                if (g !== null) {
                                    var v = g.memoizedProps,
                                        S = g.memoizedState,
                                        m = t.stateNode,
                                        h = m.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? v
                                                : At(t.type, v),
                                            S
                                        )
                                    m.__reactInternalSnapshotBeforeUpdate = h
                                }
                                break
                            case 3:
                                var y = t.stateNode.containerInfo
                                y.nodeType === 1
                                    ? (y.textContent = "")
                                    : y.nodeType === 9 &&
                                      y.documentElement &&
                                      y.removeChild(y.documentElement)
                                break
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break
                            default:
                                throw Error($(163))
                        }
                } catch (C) {
                    be(t, t.return, C)
                }
                if (((e = t.sibling), e !== null)) {
                    ;(e.return = t.return), (A = e)
                    break
                }
                A = t.return
            }
    return (g = $f), ($f = !1), g
}
function qo(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next)
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy
                ;(o.destroy = void 0), i !== void 0 && Pu(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function cs(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next)
        do {
            if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function _u(e) {
    var t = e.ref
    if (t !== null) {
        var n = e.stateNode
        switch (e.tag) {
            case 5:
                e = n
                break
            default:
                e = n
        }
        typeof t == "function" ? t(e) : (t.current = e)
    }
}
function Jm(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), Jm(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[tn],
                delete t[di],
                delete t[pu],
                delete t[Ay],
                delete t[Fy])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null)
}
function Zm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Of(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Zm(e.return)) return null
            e = e.return
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e
            ;(e.child.return = e), (e = e.child)
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}
function Nu(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Tl))
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Nu(e, t, n), e = e.sibling; e !== null; )
            Nu(e, t, n), (e = e.sibling)
}
function Ru(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Ru(e, t, n), e = e.sibling; e !== null; )
            Ru(e, t, n), (e = e.sibling)
}
var Xe = null,
    Ft = !1
function $n(e, t, n) {
    for (n = n.child; n !== null; ) e0(e, t, n), (n = n.sibling)
}
function e0(e, t, n) {
    if (rn && typeof rn.onCommitFiberUnmount == "function")
        try {
            rn.onCommitFiberUnmount(ns, n)
        } catch {}
    switch (n.tag) {
        case 5:
            nt || Kr(n, t)
        case 6:
            var r = Xe,
                o = Ft
            ;(Xe = null),
                $n(e, t, n),
                (Xe = r),
                (Ft = o),
                Xe !== null &&
                    (Ft
                        ? ((e = Xe),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : Xe.removeChild(n.stateNode))
            break
        case 18:
            Xe !== null &&
                (Ft
                    ? ((e = Xe),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? ma(e.parentNode, n)
                          : e.nodeType === 1 && ma(e, n),
                      li(e))
                    : ma(Xe, n.stateNode))
            break
        case 4:
            ;(r = Xe),
                (o = Ft),
                (Xe = n.stateNode.containerInfo),
                (Ft = !0),
                $n(e, t, n),
                (Xe = r),
                (Ft = o)
            break
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !nt &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                o = r = r.next
                do {
                    var i = o,
                        l = i.destroy
                    ;(i = i.tag),
                        l !== void 0 && (i & 2 || i & 4) && Pu(n, t, l),
                        (o = o.next)
                } while (o !== r)
            }
            $n(e, t, n)
            break
        case 1:
            if (
                !nt &&
                (Kr(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    ;(r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount()
                } catch (s) {
                    be(n, t, s)
                }
            $n(e, t, n)
            break
        case 21:
            $n(e, t, n)
            break
        case 22:
            n.mode & 1
                ? ((nt = (r = nt) || n.memoizedState !== null),
                  $n(e, t, n),
                  (nt = r))
                : $n(e, t, n)
            break
        default:
            $n(e, t, n)
    }
}
function Mf(e) {
    var t = e.updateQueue
    if (t !== null) {
        e.updateQueue = null
        var n = e.stateNode
        n === null && (n = e.stateNode = new nv()),
            t.forEach(function (r) {
                var o = fv.bind(null, e, r)
                n.has(r) || (n.add(r), r.then(o, o))
            })
    }
}
function Dt(e, t) {
    var n = t.deletions
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r]
            try {
                var i = e,
                    l = t,
                    s = l
                e: for (; s !== null; ) {
                    switch (s.tag) {
                        case 5:
                            ;(Xe = s.stateNode), (Ft = !1)
                            break e
                        case 3:
                            ;(Xe = s.stateNode.containerInfo), (Ft = !0)
                            break e
                        case 4:
                            ;(Xe = s.stateNode.containerInfo), (Ft = !0)
                            break e
                    }
                    s = s.return
                }
                if (Xe === null) throw Error($(160))
                e0(i, l, o), (Xe = null), (Ft = !1)
                var a = o.alternate
                a !== null && (a.return = null), (o.return = null)
            } catch (u) {
                be(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) t0(t, e), (t = t.sibling)
}
function t0(e, t) {
    var n = e.alternate,
        r = e.flags
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Dt(t, e), Xt(e), r & 4)) {
                try {
                    qo(3, e, e.return), cs(3, e)
                } catch (v) {
                    be(e, e.return, v)
                }
                try {
                    qo(5, e, e.return)
                } catch (v) {
                    be(e, e.return, v)
                }
            }
            break
        case 1:
            Dt(t, e), Xt(e), r & 512 && n !== null && Kr(n, n.return)
            break
        case 5:
            if (
                (Dt(t, e),
                Xt(e),
                r & 512 && n !== null && Kr(n, n.return),
                e.flags & 32)
            ) {
                var o = e.stateNode
                try {
                    ni(o, "")
                } catch (v) {
                    be(e, e.return, v)
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : i,
                    s = e.type,
                    a = e.updateQueue
                if (((e.updateQueue = null), a !== null))
                    try {
                        s === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            Eh(o, i),
                            Za(s, l)
                        var u = Za(s, i)
                        for (l = 0; l < a.length; l += 2) {
                            var c = a[l],
                                d = a[l + 1]
                            c === "style"
                                ? _h(o, d)
                                : c === "dangerouslySetInnerHTML"
                                  ? jh(o, d)
                                  : c === "children"
                                    ? ni(o, d)
                                    : sc(o, c, d, u)
                        }
                        switch (s) {
                            case "input":
                                Qa(o, i)
                                break
                            case "textarea":
                                kh(o, i)
                                break
                            case "select":
                                var p = o._wrapperState.wasMultiple
                                o._wrapperState.wasMultiple = !!i.multiple
                                var w = i.value
                                w != null
                                    ? Jr(o, !!i.multiple, w, !1)
                                    : p !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Jr(
                                                o,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : Jr(
                                                o,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ))
                        }
                        o[di] = i
                    } catch (v) {
                        be(e, e.return, v)
                    }
            }
            break
        case 6:
            if ((Dt(t, e), Xt(e), r & 4)) {
                if (e.stateNode === null) throw Error($(162))
                ;(o = e.stateNode), (i = e.memoizedProps)
                try {
                    o.nodeValue = i
                } catch (v) {
                    be(e, e.return, v)
                }
            }
            break
        case 3:
            if (
                (Dt(t, e),
                Xt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    li(t.containerInfo)
                } catch (v) {
                    be(e, e.return, v)
                }
            break
        case 4:
            Dt(t, e), Xt(e)
            break
        case 13:
            Dt(t, e),
                Xt(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i ||
                        (o.alternate !== null &&
                            o.alternate.memoizedState !== null) ||
                        (Fc = Me())),
                r & 4 && Mf(e)
            break
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((nt = (u = nt) || c), Dt(t, e), (nt = u))
                    : Dt(t, e),
                Xt(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                )
                    for (A = e, c = e.child; c !== null; ) {
                        for (d = A = c; A !== null; ) {
                            switch (((p = A), (w = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qo(4, p, p.return)
                                    break
                                case 1:
                                    Kr(p, p.return)
                                    var g = p.stateNode
                                    if (
                                        typeof g.componentWillUnmount ==
                                        "function"
                                    ) {
                                        ;(r = p), (n = p.return)
                                        try {
                                            ;(t = r),
                                                (g.props = t.memoizedProps),
                                                (g.state = t.memoizedState),
                                                g.componentWillUnmount()
                                        } catch (v) {
                                            be(r, n, v)
                                        }
                                    }
                                    break
                                case 5:
                                    Kr(p, p.return)
                                    break
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Df(d)
                                        continue
                                    }
                            }
                            w !== null ? ((w.return = p), (A = w)) : Df(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d
                            try {
                                ;(o = d.stateNode),
                                    u
                                        ? ((i = o.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((s = d.stateNode),
                                          (a = d.memoizedProps.style),
                                          (l =
                                              a != null &&
                                              a.hasOwnProperty("display")
                                                  ? a.display
                                                  : null),
                                          (s.style.display = Ph("display", l)))
                            } catch (v) {
                                be(e, e.return, v)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps
                            } catch (v) {
                                be(e, e.return, v)
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === e) &&
                        d.child !== null
                    ) {
                        ;(d.child.return = d), (d = d.child)
                        continue
                    }
                    if (d === e) break e
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e
                        c === d && (c = null), (d = d.return)
                    }
                    c === d && (c = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling)
                }
            }
            break
        case 19:
            Dt(t, e), Xt(e), r & 4 && Mf(e)
            break
        case 21:
            break
        default:
            Dt(t, e), Xt(e)
    }
}
function Xt(e) {
    var t = e.flags
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Zm(n)) {
                        var r = n
                        break e
                    }
                    n = n.return
                }
                throw Error($(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode
                    r.flags & 32 && (ni(o, ""), (r.flags &= -33))
                    var i = Of(e)
                    Ru(e, i, o)
                    break
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = Of(e)
                    Nu(e, s, l)
                    break
                default:
                    throw Error($(161))
            }
        } catch (a) {
            be(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ov(e, t, n) {
    ;(A = e), n0(e)
}
function n0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var o = A,
            i = o.child
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || tl
            if (!l) {
                var s = o.alternate,
                    a = (s !== null && s.memoizedState !== null) || nt
                s = tl
                var u = nt
                if (((tl = l), (nt = a) && !u))
                    for (A = o; A !== null; )
                        (l = A),
                            (a = l.child),
                            l.tag === 22 && l.memoizedState !== null
                                ? Af(o)
                                : a !== null
                                  ? ((a.return = l), (A = a))
                                  : Af(o)
                for (; i !== null; ) (A = i), n0(i), (i = i.sibling)
                ;(A = o), (tl = s), (nt = u)
            }
            If(e)
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (A = i))
                : If(e)
    }
}
function If(e) {
    for (; A !== null; ) {
        var t = A
        if (t.flags & 8772) {
            var n = t.alternate
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            nt || cs(5, t)
                            break
                        case 1:
                            var r = t.stateNode
                            if (t.flags & 4 && !nt)
                                if (n === null) r.componentDidMount()
                                else {
                                    var o =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : At(t.type, n.memoizedProps)
                                    r.componentDidUpdate(
                                        o,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    )
                                }
                            var i = t.updateQueue
                            i !== null && xf(t, i, r)
                            break
                        case 3:
                            var l = t.updateQueue
                            if (l !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode
                                            break
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                xf(t, l, n)
                            }
                            break
                        case 5:
                            var s = t.stateNode
                            if (n === null && t.flags & 4) {
                                n = s
                                var a = t.memoizedProps
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus()
                                        break
                                    case "img":
                                        a.src && (n.src = a.src)
                                }
                            }
                            break
                        case 6:
                            break
                        case 4:
                            break
                        case 12:
                            break
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate
                                if (u !== null) {
                                    var c = u.memoizedState
                                    if (c !== null) {
                                        var d = c.dehydrated
                                        d !== null && li(d)
                                    }
                                }
                            }
                            break
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break
                        default:
                            throw Error($(163))
                    }
                nt || (t.flags & 512 && _u(t))
            } catch (p) {
                be(t, t.return, p)
            }
        }
        if (t === e) {
            A = null
            break
        }
        if (((n = t.sibling), n !== null)) {
            ;(n.return = t.return), (A = n)
            break
        }
        A = t.return
    }
}
function Df(e) {
    for (; A !== null; ) {
        var t = A
        if (t === e) {
            A = null
            break
        }
        var n = t.sibling
        if (n !== null) {
            ;(n.return = t.return), (A = n)
            break
        }
        A = t.return
    }
}
function Af(e) {
    for (; A !== null; ) {
        var t = A
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return
                    try {
                        cs(4, t)
                    } catch (a) {
                        be(t, n, a)
                    }
                    break
                case 1:
                    var r = t.stateNode
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            be(t, o, a)
                        }
                    }
                    var i = t.return
                    try {
                        _u(t)
                    } catch (a) {
                        be(t, i, a)
                    }
                    break
                case 5:
                    var l = t.return
                    try {
                        _u(t)
                    } catch (a) {
                        be(t, l, a)
                    }
            }
        } catch (a) {
            be(t, t.return, a)
        }
        if (t === e) {
            A = null
            break
        }
        var s = t.sibling
        if (s !== null) {
            ;(s.return = t.return), (A = s)
            break
        }
        A = t.return
    }
}
var iv = Math.ceil,
    Hl = Cn.ReactCurrentDispatcher,
    Dc = Cn.ReactCurrentOwner,
    Lt = Cn.ReactCurrentBatchConfig,
    de = 0,
    Ke = null,
    Ie = null,
    Je = 0,
    vt = 0,
    Qr = ir(0),
    Be = 0,
    yi = null,
    Sr = 0,
    ds = 0,
    Ac = 0,
    Xo = null,
    ft = null,
    Fc = 0,
    co = 1 / 0,
    dn = null,
    Wl = !1,
    bu = null,
    Xn = null,
    nl = !1,
    Hn = null,
    Vl = 0,
    Jo = 0,
    Lu = null,
    vl = -1,
    wl = 0
function at() {
    return de & 6 ? Me() : vl !== -1 ? vl : (vl = Me())
}
function Jn(e) {
    return e.mode & 1
        ? de & 2 && Je !== 0
            ? Je & -Je
            : Uy.transition !== null
              ? (wl === 0 && (wl = Ah()), wl)
              : ((e = fe),
                e !== 0 ||
                    ((e = window.event), (e = e === void 0 ? 16 : Gh(e.type))),
                e)
        : 1
}
function Vt(e, t, n, r) {
    if (50 < Jo) throw ((Jo = 0), (Lu = null), Error($(185)))
    Ci(e, n, r),
        (!(de & 2) || e !== Ke) &&
            (e === Ke && (!(de & 2) && (ds |= n), Be === 4 && Bn(e, Je)),
            gt(e, r),
            n === 1 &&
                de === 0 &&
                !(t.mode & 1) &&
                ((co = Me() + 500), ss && lr()))
}
function gt(e, t) {
    var n = e.callbackNode
    U1(e, t)
    var r = Nl(e, e === Ke ? Je : 0)
    if (r === 0)
        n !== null && Kd(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Kd(n), t === 1))
            e.tag === 0 ? By(Ff.bind(null, e)) : dm(Ff.bind(null, e)),
                Iy(function () {
                    !(de & 6) && lr()
                }),
                (n = null)
        else {
            switch (Fh(r)) {
                case 1:
                    n = fc
                    break
                case 4:
                    n = Ih
                    break
                case 16:
                    n = _l
                    break
                case 536870912:
                    n = Dh
                    break
                default:
                    n = _l
            }
            n = c0(n, r0.bind(null, e))
        }
        ;(e.callbackPriority = t), (e.callbackNode = n)
    }
}
function r0(e, t) {
    if (((vl = -1), (wl = 0), de & 6)) throw Error($(327))
    var n = e.callbackNode
    if (ro() && e.callbackNode !== n) return null
    var r = Nl(e, e === Ke ? Je : 0)
    if (r === 0) return null
    if (r & 30 || r & e.expiredLanes || t) t = Gl(e, r)
    else {
        t = r
        var o = de
        de |= 2
        var i = i0()
        ;(Ke !== e || Je !== t) && ((dn = null), (co = Me() + 500), mr(e, t))
        do
            try {
                av()
                break
            } catch (s) {
                o0(e, s)
            }
        while (!0)
        jc(),
            (Hl.current = i),
            (de = o),
            Ie !== null ? (t = 0) : ((Ke = null), (Je = 0), (t = Be))
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = ou(e)), o !== 0 && ((r = o), (t = Tu(e, o)))),
            t === 1)
        )
            throw ((n = yi), mr(e, 0), Bn(e, r), gt(e, Me()), n)
        if (t === 6) Bn(e, r)
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !lv(o) &&
                    ((t = Gl(e, r)),
                    t === 2 &&
                        ((i = ou(e)), i !== 0 && ((r = i), (t = Tu(e, i)))),
                    t === 1))
            )
                throw ((n = yi), mr(e, 0), Bn(e, r), gt(e, Me()), n)
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error($(345))
                case 2:
                    ur(e, ft, dn)
                    break
                case 3:
                    if (
                        (Bn(e, r),
                        (r & 130023424) === r &&
                            ((t = Fc + 500 - Me()), 10 < t))
                    ) {
                        if (Nl(e, 0) !== 0) break
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            at(), (e.pingedLanes |= e.suspendedLanes & o)
                            break
                        }
                        e.timeoutHandle = fu(ur.bind(null, e, ft, dn), t)
                        break
                    }
                    ur(e, ft, dn)
                    break
                case 4:
                    if ((Bn(e, r), (r & 4194240) === r)) break
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var l = 31 - Wt(r)
                        ;(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i)
                    }
                    if (
                        ((r = o),
                        (r = Me() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * iv(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = fu(ur.bind(null, e, ft, dn), r)
                        break
                    }
                    ur(e, ft, dn)
                    break
                case 5:
                    ur(e, ft, dn)
                    break
                default:
                    throw Error($(329))
            }
        }
    }
    return gt(e, Me()), e.callbackNode === n ? r0.bind(null, e) : null
}
function Tu(e, t) {
    var n = Xo
    return (
        e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
        (e = Gl(e, t)),
        e !== 2 && ((t = ft), (ft = n), t !== null && zu(t)),
        e
    )
}
function zu(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e)
}
function lv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot
                    o = o.value
                    try {
                        if (!Qt(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n)
        else {
            if (t === e) break
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0
                t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
        }
    }
    return !0
}
function Bn(e, t) {
    for (
        t &= ~Ac,
            t &= ~ds,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Wt(t),
            r = 1 << n
        ;(e[n] = -1), (t &= ~r)
    }
}
function Ff(e) {
    if (de & 6) throw Error($(327))
    ro()
    var t = Nl(e, 0)
    if (!(t & 1)) return gt(e, Me()), null
    var n = Gl(e, t)
    if (e.tag !== 0 && n === 2) {
        var r = ou(e)
        r !== 0 && ((t = r), (n = Tu(e, r)))
    }
    if (n === 1) throw ((n = yi), mr(e, 0), Bn(e, t), gt(e, Me()), n)
    if (n === 6) throw Error($(345))
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        ur(e, ft, dn),
        gt(e, Me()),
        null
    )
}
function Bc(e, t) {
    var n = de
    de |= 1
    try {
        return e(t)
    } finally {
        ;(de = n), de === 0 && ((co = Me() + 500), ss && lr())
    }
}
function Er(e) {
    Hn !== null && Hn.tag === 0 && !(de & 6) && ro()
    var t = de
    de |= 1
    var n = Lt.transition,
        r = fe
    try {
        if (((Lt.transition = null), (fe = 1), e)) return e()
    } finally {
        ;(fe = r), (Lt.transition = n), (de = t), !(de & 6) && lr()
    }
}
function Uc() {
    ;(vt = Qr.current), xe(Qr)
}
function mr(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), My(n)), Ie !== null))
        for (n = Ie.return; n !== null; ) {
            var r = n
            switch ((Ec(r), r.tag)) {
                case 1:
                    ;(r = r.type.childContextTypes), r != null && zl()
                    break
                case 3:
                    ao(), xe(ht), xe(ot), Lc()
                    break
                case 5:
                    bc(r)
                    break
                case 4:
                    ao()
                    break
                case 13:
                    xe(Pe)
                    break
                case 19:
                    xe(Pe)
                    break
                case 10:
                    Pc(r.type._context)
                    break
                case 22:
                case 23:
                    Uc()
            }
            n = n.return
        }
    if (
        ((Ke = e),
        (Ie = e = Zn(e.current, null)),
        (Je = vt = t),
        (Be = 0),
        (yi = null),
        (Ac = ds = Sr = 0),
        (ft = Xo = null),
        dr !== null)
    ) {
        for (t = 0; t < dr.length; t++)
            if (((n = dr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null
                var o = r.next,
                    i = n.pending
                if (i !== null) {
                    var l = i.next
                    ;(i.next = o), (r.next = l)
                }
                n.pending = r
            }
        dr = null
    }
    return e
}
function o0(e, t) {
    do {
        var n = Ie
        try {
            if ((jc(), (ml.current = Ul), Bl)) {
                for (var r = _e.memoizedState; r !== null; ) {
                    var o = r.queue
                    o !== null && (o.pending = null), (r = r.next)
                }
                Bl = !1
            }
            if (
                ((xr = 0),
                (Ve = Fe = _e = null),
                (Yo = !1),
                (hi = 0),
                (Dc.current = null),
                n === null || n.return === null)
            ) {
                ;(Be = 1), (yi = t), (Ie = null)
                break
            }
            e: {
                var i = e,
                    l = n.return,
                    s = n,
                    a = t
                if (
                    ((t = Je),
                    (s.flags |= 32768),
                    a !== null &&
                        typeof a == "object" &&
                        typeof a.then == "function")
                ) {
                    var u = a,
                        c = s,
                        d = c.tag
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate
                        p
                            ? ((c.updateQueue = p.updateQueue),
                              (c.memoizedState = p.memoizedState),
                              (c.lanes = p.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null))
                    }
                    var w = _f(l)
                    if (w !== null) {
                        ;(w.flags &= -257),
                            Nf(w, l, s, i, t),
                            w.mode & 1 && Pf(i, u, t),
                            (t = w),
                            (a = u)
                        var g = t.updateQueue
                        if (g === null) {
                            var v = new Set()
                            v.add(a), (t.updateQueue = v)
                        } else g.add(a)
                        break e
                    } else {
                        if (!(t & 1)) {
                            Pf(i, u, t), Hc()
                            break e
                        }
                        a = Error($(426))
                    }
                } else if (ke && s.mode & 1) {
                    var S = _f(l)
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            Nf(S, l, s, i, t),
                            kc(uo(a, s))
                        break e
                    }
                }
                ;(i = a = uo(a, s)),
                    Be !== 4 && (Be = 2),
                    Xo === null ? (Xo = [i]) : Xo.push(i),
                    (i = l)
                do {
                    switch (i.tag) {
                        case 3:
                            ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                            var m = Bm(i, a, t)
                            wf(i, m)
                            break e
                        case 1:
                            s = a
                            var h = i.type,
                                y = i.stateNode
                            if (
                                !(i.flags & 128) &&
                                (typeof h.getDerivedStateFromError ==
                                    "function" ||
                                    (y !== null &&
                                        typeof y.componentDidCatch ==
                                            "function" &&
                                        (Xn === null || !Xn.has(y))))
                            ) {
                                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                                var C = Um(i, s, t)
                                wf(i, C)
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            s0(n)
        } catch (R) {
            ;(t = R), Ie === n && n !== null && (Ie = n = n.return)
            continue
        }
        break
    } while (!0)
}
function i0() {
    var e = Hl.current
    return (Hl.current = Ul), e === null ? Ul : e
}
function Hc() {
    ;(Be === 0 || Be === 3 || Be === 2) && (Be = 4),
        Ke === null || (!(Sr & 268435455) && !(ds & 268435455)) || Bn(Ke, Je)
}
function Gl(e, t) {
    var n = de
    de |= 2
    var r = i0()
    ;(Ke !== e || Je !== t) && ((dn = null), mr(e, t))
    do
        try {
            sv()
            break
        } catch (o) {
            o0(e, o)
        }
    while (!0)
    if ((jc(), (de = n), (Hl.current = r), Ie !== null)) throw Error($(261))
    return (Ke = null), (Je = 0), Be
}
function sv() {
    for (; Ie !== null; ) l0(Ie)
}
function av() {
    for (; Ie !== null && !z1(); ) l0(Ie)
}
function l0(e) {
    var t = u0(e.alternate, e, vt)
    ;(e.memoizedProps = e.pendingProps),
        t === null ? s0(e) : (Ie = t),
        (Dc.current = null)
}
function s0(e) {
    var t = e
    do {
        var n = t.alternate
        if (((e = t.return), t.flags & 32768)) {
            if (((n = tv(n, t)), n !== null)) {
                ;(n.flags &= 32767), (Ie = n)
                return
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            else {
                ;(Be = 6), (Ie = null)
                return
            }
        } else if (((n = ev(n, t, vt)), n !== null)) {
            Ie = n
            return
        }
        if (((t = t.sibling), t !== null)) {
            Ie = t
            return
        }
        Ie = t = e
    } while (t !== null)
    Be === 0 && (Be = 5)
}
function ur(e, t, n) {
    var r = fe,
        o = Lt.transition
    try {
        ;(Lt.transition = null), (fe = 1), uv(e, t, n, r)
    } finally {
        ;(Lt.transition = o), (fe = r)
    }
    return null
}
function uv(e, t, n, r) {
    do ro()
    while (Hn !== null)
    if (de & 6) throw Error($(327))
    n = e.finishedWork
    var o = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error($(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var i = n.lanes | n.childLanes
    if (
        (H1(e, i),
        e === Ke && ((Ie = Ke = null), (Je = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            nl ||
            ((nl = !0),
            c0(_l, function () {
                return ro(), null
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        ;(i = Lt.transition), (Lt.transition = null)
        var l = fe
        fe = 1
        var s = de
        ;(de |= 4),
            (Dc.current = null),
            rv(e, n),
            t0(n, e),
            Ry(cu),
            (Rl = !!uu),
            (cu = uu = null),
            (e.current = n),
            ov(n),
            $1(),
            (de = s),
            (fe = l),
            (Lt.transition = i)
    } else e.current = n
    if (
        (nl && ((nl = !1), (Hn = e), (Vl = o)),
        (i = e.pendingLanes),
        i === 0 && (Xn = null),
        I1(n.stateNode),
        gt(e, Me()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest })
    if (Wl) throw ((Wl = !1), (e = bu), (bu = null), e)
    return (
        Vl & 1 && e.tag !== 0 && ro(),
        (i = e.pendingLanes),
        i & 1 ? (e === Lu ? Jo++ : ((Jo = 0), (Lu = e))) : (Jo = 0),
        lr(),
        null
    )
}
function ro() {
    if (Hn !== null) {
        var e = Fh(Vl),
            t = Lt.transition,
            n = fe
        try {
            if (((Lt.transition = null), (fe = 16 > e ? 16 : e), Hn === null))
                var r = !1
            else {
                if (((e = Hn), (Hn = null), (Vl = 0), de & 6))
                    throw Error($(331))
                var o = de
                for (de |= 4, A = e.current; A !== null; ) {
                    var i = A,
                        l = i.child
                    if (A.flags & 16) {
                        var s = i.deletions
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a]
                                for (A = u; A !== null; ) {
                                    var c = A
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qo(8, c, i)
                                    }
                                    var d = c.child
                                    if (d !== null) (d.return = c), (A = d)
                                    else
                                        for (; A !== null; ) {
                                            c = A
                                            var p = c.sibling,
                                                w = c.return
                                            if ((Jm(c), c === u)) {
                                                A = null
                                                break
                                            }
                                            if (p !== null) {
                                                ;(p.return = w), (A = p)
                                                break
                                            }
                                            A = w
                                        }
                                }
                            }
                            var g = i.alternate
                            if (g !== null) {
                                var v = g.child
                                if (v !== null) {
                                    g.child = null
                                    do {
                                        var S = v.sibling
                                        ;(v.sibling = null), (v = S)
                                    } while (v !== null)
                                }
                            }
                            A = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null)
                        (l.return = i), (A = l)
                    else
                        e: for (; A !== null; ) {
                            if (((i = A), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        qo(9, i, i.return)
                                }
                            var m = i.sibling
                            if (m !== null) {
                                ;(m.return = i.return), (A = m)
                                break e
                            }
                            A = i.return
                        }
                }
                var h = e.current
                for (A = h; A !== null; ) {
                    l = A
                    var y = l.child
                    if (l.subtreeFlags & 2064 && y !== null)
                        (y.return = l), (A = y)
                    else
                        e: for (l = h; A !== null; ) {
                            if (((s = A), s.flags & 2048))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            cs(9, s)
                                    }
                                } catch (R) {
                                    be(s, s.return, R)
                                }
                            if (s === l) {
                                A = null
                                break e
                            }
                            var C = s.sibling
                            if (C !== null) {
                                ;(C.return = s.return), (A = C)
                                break e
                            }
                            A = s.return
                        }
                }
                if (
                    ((de = o),
                    lr(),
                    rn && typeof rn.onPostCommitFiberRoot == "function")
                )
                    try {
                        rn.onPostCommitFiberRoot(ns, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ;(fe = n), (Lt.transition = t)
        }
    }
    return !1
}
function Bf(e, t, n) {
    ;(t = uo(n, t)),
        (t = Bm(e, t, 1)),
        (e = qn(e, t, 1)),
        (t = at()),
        e !== null && (Ci(e, 1, t), gt(e, t))
}
function be(e, t, n) {
    if (e.tag === 3) Bf(e, e, n)
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Bf(t, e, n)
                break
            } else if (t.tag === 1) {
                var r = t.stateNode
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Xn === null || !Xn.has(r)))
                ) {
                    ;(e = uo(n, e)),
                        (e = Um(t, e, 1)),
                        (t = qn(t, e, 1)),
                        (e = at()),
                        t !== null && (Ci(t, 1, e), gt(t, e))
                    break
                }
            }
            t = t.return
        }
}
function cv(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t),
        (t = at()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ke === e &&
            (Je & n) === n &&
            (Be === 4 ||
            (Be === 3 && (Je & 130023424) === Je && 500 > Me() - Fc)
                ? mr(e, 0)
                : (Ac |= n)),
        gt(e, t)
}
function a0(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Gi), (Gi <<= 1), !(Gi & 130023424) && (Gi = 4194304))
            : (t = 1))
    var n = at()
    ;(e = En(e, t)), e !== null && (Ci(e, t, n), gt(e, n))
}
function dv(e) {
    var t = e.memoizedState,
        n = 0
    t !== null && (n = t.retryLane), a0(e, n)
}
function fv(e, t) {
    var n = 0
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState
            o !== null && (n = o.retryLane)
            break
        case 19:
            r = e.stateNode
            break
        default:
            throw Error($(314))
    }
    r !== null && r.delete(t), a0(e, n)
}
var u0
u0 = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ht.current) pt = !0
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (pt = !1), Zy(e, t, n)
            pt = !!(e.flags & 131072)
        }
    else (pt = !1), ke && t.flags & 1048576 && fm(t, Ml, t.index)
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type
            yl(e, t), (e = t.pendingProps)
            var o = io(t, ot.current)
            no(t, n), (o = zc(null, t, r, e, o, n))
            var i = $c()
            return (
                (t.flags |= 1),
                typeof o == "object" &&
                o !== null &&
                typeof o.render == "function" &&
                o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      mt(r) ? ((i = !0), $l(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      Nc(t),
                      (o.updater = as),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      wu(t, r, e, n),
                      (t = Eu(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      ke && i && Sc(t),
                      lt(null, t, o, n),
                      (t = t.child)),
                t
            )
        case 16:
            r = t.elementType
            e: {
                switch (
                    (yl(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = hv(r)),
                    (e = At(r, e)),
                    o)
                ) {
                    case 0:
                        t = Su(null, t, r, e, n)
                        break e
                    case 1:
                        t = Lf(null, t, r, e, n)
                        break e
                    case 11:
                        t = Rf(null, t, r, e, n)
                        break e
                    case 14:
                        t = bf(null, t, r, At(r.type, e), n)
                        break e
                }
                throw Error($(306, r, ""))
            }
            return t
        case 0:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : At(r, o)),
                Su(e, t, r, o, n)
            )
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : At(r, o)),
                Lf(e, t, r, o, n)
            )
        case 3:
            e: {
                if ((Gm(t), e === null)) throw Error($(387))
                ;(r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    gm(e, t),
                    Al(t, r, null, n)
                var l = t.memoizedState
                if (((r = l.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries:
                                l.pendingSuspenseBoundaries,
                            transitions: l.transitions
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        ;(o = uo(Error($(423)), t)), (t = Tf(e, t, r, n, o))
                        break e
                    } else if (r !== o) {
                        ;(o = uo(Error($(424)), t)), (t = Tf(e, t, r, n, o))
                        break e
                    } else
                        for (
                            xt = Yn(t.stateNode.containerInfo.firstChild),
                                St = t,
                                ke = !0,
                                Ut = null,
                                n = xm(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
                else {
                    if ((lo(), r === o)) {
                        t = kn(e, t, n)
                        break e
                    }
                    lt(e, t, r, n)
                }
                t = t.child
            }
            return t
        case 5:
            return (
                Sm(t),
                e === null && gu(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (l = o.children),
                du(r, o)
                    ? (l = null)
                    : i !== null && du(r, i) && (t.flags |= 32),
                Vm(e, t),
                lt(e, t, l, n),
                t.child
            )
        case 6:
            return e === null && gu(t), null
        case 13:
            return Km(e, t, n)
        case 4:
            return (
                Rc(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = so(t, null, r, n)) : lt(e, t, r, n),
                t.child
            )
        case 11:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : At(r, o)),
                Rf(e, t, r, o, n)
            )
        case 7:
            return lt(e, t, t.pendingProps, n), t.child
        case 8:
            return lt(e, t, t.pendingProps.children, n), t.child
        case 12:
            return lt(e, t, t.pendingProps.children, n), t.child
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (l = o.value),
                    ve(Il, r._currentValue),
                    (r._currentValue = l),
                    i !== null)
                )
                    if (Qt(i.value, l)) {
                        if (i.children === o.children && !ht.current) {
                            t = kn(e, t, n)
                            break e
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var s = i.dependencies
                            if (s !== null) {
                                l = i.child
                                for (var a = s.firstContext; a !== null; ) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            ;(a = yn(-1, n & -n)), (a.tag = 2)
                                            var u = i.updateQueue
                                            if (u !== null) {
                                                u = u.shared
                                                var c = u.pending
                                                c === null
                                                    ? (a.next = a)
                                                    : ((a.next = c.next),
                                                      (c.next = a)),
                                                    (u.pending = a)
                                            }
                                        }
                                        ;(i.lanes |= n),
                                            (a = i.alternate),
                                            a !== null && (a.lanes |= n),
                                            yu(i.return, n, t),
                                            (s.lanes |= n)
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10)
                                l = i.type === t.type ? null : i.child
                            else if (i.tag === 18) {
                                if (((l = i.return), l === null))
                                    throw Error($(341))
                                ;(l.lanes |= n),
                                    (s = l.alternate),
                                    s !== null && (s.lanes |= n),
                                    yu(l, n, t),
                                    (l = i.sibling)
                            } else l = i.child
                            if (l !== null) l.return = i
                            else
                                for (l = i; l !== null; ) {
                                    if (l === t) {
                                        l = null
                                        break
                                    }
                                    if (((i = l.sibling), i !== null)) {
                                        ;(i.return = l.return), (l = i)
                                        break
                                    }
                                    l = l.return
                                }
                            i = l
                        }
                lt(e, t, o.children, n), (t = t.child)
            }
            return t
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                no(t, n),
                (o = zt(o)),
                (r = r(o)),
                (t.flags |= 1),
                lt(e, t, r, n),
                t.child
            )
        case 14:
            return (
                (r = t.type),
                (o = At(r, t.pendingProps)),
                (o = At(r.type, o)),
                bf(e, t, r, o, n)
            )
        case 15:
            return Hm(e, t, t.type, t.pendingProps, n)
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : At(r, o)),
                yl(e, t),
                (t.tag = 1),
                mt(r) ? ((e = !0), $l(t)) : (e = !1),
                no(t, n),
                vm(t, r, o),
                wu(t, r, o, n),
                Eu(null, t, r, !0, e, n)
            )
        case 19:
            return Qm(e, t, n)
        case 22:
            return Wm(e, t, n)
    }
    throw Error($(156, t.tag))
}
function c0(e, t) {
    return Mh(e, t)
}
function pv(e, t, n, r) {
    ;(this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
}
function bt(e, t, n, r) {
    return new pv(e, t, n, r)
}
function Wc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
}
function hv(e) {
    if (typeof e == "function") return Wc(e) ? 1 : 0
    if (e != null) {
        if (((e = e.$$typeof), e === uc)) return 11
        if (e === cc) return 14
    }
    return 2
}
function Zn(e, t) {
    var n = e.alternate
    return (
        n === null
            ? ((n = bt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    )
}
function xl(e, t, n, r, o, i) {
    var l = 2
    if (((r = e), typeof e == "function")) Wc(e) && (l = 1)
    else if (typeof e == "string") l = 5
    else
        e: switch (e) {
            case Dr:
                return gr(n.children, o, i, t)
            case ac:
                ;(l = 8), (o |= 8)
                break
            case Ha:
                return (
                    (e = bt(12, n, t, o | 2)),
                    (e.elementType = Ha),
                    (e.lanes = i),
                    e
                )
            case Wa:
                return (
                    (e = bt(13, n, t, o)),
                    (e.elementType = Wa),
                    (e.lanes = i),
                    e
                )
            case Va:
                return (
                    (e = bt(19, n, t, o)),
                    (e.elementType = Va),
                    (e.lanes = i),
                    e
                )
            case wh:
                return fs(n, o, i, t)
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case yh:
                            l = 10
                            break e
                        case vh:
                            l = 9
                            break e
                        case uc:
                            l = 11
                            break e
                        case cc:
                            l = 14
                            break e
                        case Dn:
                            ;(l = 16), (r = null)
                            break e
                    }
                throw Error($(130, e == null ? e : typeof e, ""))
        }
    return (
        (t = bt(l, n, t, o)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    )
}
function gr(e, t, n, r) {
    return (e = bt(7, e, r, t)), (e.lanes = n), e
}
function fs(e, t, n, r) {
    return (
        (e = bt(22, e, r, t)),
        (e.elementType = wh),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    )
}
function ka(e, t, n) {
    return (e = bt(6, e, null, t)), (e.lanes = n), e
}
function Ca(e, t, n) {
    return (
        (t = bt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }),
        t
    )
}
function mv(e, t, n, r, o) {
    ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = oa(0)),
        (this.expirationTimes = oa(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = oa(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null)
}
function Vc(e, t, n, r, o, i, l, s, a) {
    return (
        (e = new mv(e, t, n, s, a)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = bt(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }),
        Nc(i),
        e
    )
}
function gv(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
        $$typeof: Ir,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function d0(e) {
    if (!e) return tr
    e = e._reactInternals
    e: {
        if (Nr(e) !== e || e.tag !== 1) throw Error($(170))
        var t = e
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context
                    break e
                case 1:
                    if (mt(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext
                        break e
                    }
            }
            t = t.return
        } while (t !== null)
        throw Error($(171))
    }
    if (e.tag === 1) {
        var n = e.type
        if (mt(n)) return cm(e, n, t)
    }
    return t
}
function f0(e, t, n, r, o, i, l, s, a) {
    return (
        (e = Vc(n, r, !0, e, o, i, l, s, a)),
        (e.context = d0(null)),
        (n = e.current),
        (r = at()),
        (o = Jn(n)),
        (i = yn(r, o)),
        (i.callback = t ?? null),
        qn(n, i, o),
        (e.current.lanes = o),
        Ci(e, o, r),
        gt(e, r),
        e
    )
}
function ps(e, t, n, r) {
    var o = t.current,
        i = at(),
        l = Jn(o)
    return (
        (n = d0(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = yn(i, l)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = qn(o, t, l)),
        e !== null && (Vt(e, o, l, i), hl(e, o, l)),
        l
    )
}
function Kl(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode
        default:
            return e.child.stateNode
    }
}
function Uf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Gc(e, t) {
    Uf(e, t), (e = e.alternate) && Uf(e, t)
}
function yv() {
    return null
}
var p0 =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e)
          }
function Kc(e) {
    this._internalRoot = e
}
hs.prototype.render = Kc.prototype.render = function (e) {
    var t = this._internalRoot
    if (t === null) throw Error($(409))
    ps(e, t, null, null)
}
hs.prototype.unmount = Kc.prototype.unmount = function () {
    var e = this._internalRoot
    if (e !== null) {
        this._internalRoot = null
        var t = e.containerInfo
        Er(function () {
            ps(null, e, null, null)
        }),
            (t[Sn] = null)
    }
}
function hs(e) {
    this._internalRoot = e
}
hs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Hh()
        e = { blockedOn: null, target: e, priority: t }
        for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++);
        Fn.splice(n, 0, e), n === 0 && Vh(e)
    }
}
function Qc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ms(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    )
}
function Hf() {}
function vv(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r
            r = function () {
                var u = Kl(l)
                i.call(u)
            }
        }
        var l = f0(t, r, e, 0, null, !1, !1, "", Hf)
        return (
            (e._reactRootContainer = l),
            (e[Sn] = l.current),
            ui(e.nodeType === 8 ? e.parentNode : e),
            Er(),
            l
        )
    }
    for (; (o = e.lastChild); ) e.removeChild(o)
    if (typeof r == "function") {
        var s = r
        r = function () {
            var u = Kl(a)
            s.call(u)
        }
    }
    var a = Vc(e, 0, !1, null, null, !1, !1, "", Hf)
    return (
        (e._reactRootContainer = a),
        (e[Sn] = a.current),
        ui(e.nodeType === 8 ? e.parentNode : e),
        Er(function () {
            ps(t, a, n, r)
        }),
        a
    )
}
function gs(e, t, n, r, o) {
    var i = n._reactRootContainer
    if (i) {
        var l = i
        if (typeof o == "function") {
            var s = o
            o = function () {
                var a = Kl(l)
                s.call(a)
            }
        }
        ps(t, l, e, o)
    } else l = vv(n, t, e, o, r)
    return Kl(l)
}
Bh = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode
            if (t.current.memoizedState.isDehydrated) {
                var n = Bo(t.pendingLanes)
                n !== 0 &&
                    (pc(t, n | 1),
                    gt(t, Me()),
                    !(de & 6) && ((co = Me() + 500), lr()))
            }
            break
        case 13:
            Er(function () {
                var r = En(e, 1)
                if (r !== null) {
                    var o = at()
                    Vt(r, e, 1, o)
                }
            }),
                Gc(e, 1)
    }
}
hc = function (e) {
    if (e.tag === 13) {
        var t = En(e, 134217728)
        if (t !== null) {
            var n = at()
            Vt(t, e, 134217728, n)
        }
        Gc(e, 134217728)
    }
}
Uh = function (e) {
    if (e.tag === 13) {
        var t = Jn(e),
            n = En(e, t)
        if (n !== null) {
            var r = at()
            Vt(n, e, t, r)
        }
        Gc(e, t)
    }
}
Hh = function () {
    return fe
}
Wh = function (e, t) {
    var n = fe
    try {
        return (fe = e), t()
    } finally {
        fe = n
    }
}
tu = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Qa(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                        var o = ls(r)
                        if (!o) throw Error($(90))
                        Sh(r), Qa(r, o)
                    }
                }
            }
            break
        case "textarea":
            kh(e, n)
            break
        case "select":
            ;(t = n.value), t != null && Jr(e, !!n.multiple, t, !1)
    }
}
bh = Bc
Lh = Er
var wv = { usingClientEntryPoint: !1, Events: [Pi, Ur, ls, Nh, Rh, Bc] },
    Lo = {
        findFiberByHostInstance: cr,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    xv = {
        bundleType: Lo.bundleType,
        version: Lo.version,
        rendererPackageName: Lo.rendererPackageName,
        rendererConfig: Lo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Cn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = $h(e)), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Lo.findFiberByHostInstance || yv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rl = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!rl.isDisabled && rl.supportsFiber)
        try {
            ;(ns = rl.inject(xv)), (rn = rl)
        } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wv
Ct.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!Qc(t)) throw Error($(200))
    return gv(e, t, null, n)
}
Ct.createRoot = function (e, t) {
    if (!Qc(e)) throw Error($(299))
    var n = !1,
        r = "",
        o = p0
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Vc(e, 1, !1, null, null, n, !1, r, o)),
        (e[Sn] = t.current),
        ui(e.nodeType === 8 ? e.parentNode : e),
        new Kc(t)
    )
}
Ct.findDOMNode = function (e) {
    if (e == null) return null
    if (e.nodeType === 1) return e
    var t = e._reactInternals
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error($(188))
            : ((e = Object.keys(e).join(",")), Error($(268, e)))
    return (e = $h(t)), (e = e === null ? null : e.stateNode), e
}
Ct.flushSync = function (e) {
    return Er(e)
}
Ct.hydrate = function (e, t, n) {
    if (!ms(t)) throw Error($(200))
    return gs(null, e, t, !0, n)
}
Ct.hydrateRoot = function (e, t, n) {
    if (!Qc(e)) throw Error($(405))
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        l = p0
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (t = f0(t, null, e, 1, n ?? null, o, !1, i, l)),
        (e[Sn] = t.current),
        ui(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o)
    return new hs(t)
}
Ct.render = function (e, t, n) {
    if (!ms(t)) throw Error($(200))
    return gs(null, e, t, !1, n)
}
Ct.unmountComponentAtNode = function (e) {
    if (!ms(e)) throw Error($(40))
    return e._reactRootContainer
        ? (Er(function () {
              gs(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[Sn] = null)
              })
          }),
          !0)
        : !1
}
Ct.unstable_batchedUpdates = Bc
Ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ms(n)) throw Error($(200))
    if (e == null || e._reactInternals === void 0) throw Error($(38))
    return gs(e, t, n, !1, r)
}
Ct.version = "18.2.0-next-9e3b772b8-20220608"
function h0() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)
        } catch (e) {
            console.error(e)
        }
}
h0(), (fh.exports = Ct)
var Yc = fh.exports
const Sv = ec(Yc),
    Ev = th({ __proto__: null, default: Sv }, [Yc])
var m0,
    Wf = Yc
;(m0 = Wf.createRoot), Wf.hydrateRoot
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Le() {
    return (
        (Le = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        Le.apply(this, arguments)
    )
}
var Oe
;(function (e) {
    ;(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE")
})(Oe || (Oe = {}))
const Vf = "popstate"
function kv(e) {
    e === void 0 && (e = {})
    function t(r, o) {
        let { pathname: i, search: l, hash: s } = r.location
        return vi(
            "",
            { pathname: i, search: l, hash: s },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        )
    }
    function n(r, o) {
        return typeof o == "string" ? o : Cr(o)
    }
    return jv(t, n, null, e)
}
function ee(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}
function kr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t)
        try {
            throw new Error(t)
        } catch {}
    }
}
function Cv() {
    return Math.random().toString(36).substr(2, 8)
}
function Gf(e, t) {
    return { usr: e.state, key: e.key, idx: t }
}
function vi(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Le(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: ""
            },
            typeof t == "string" ? jn(t) : t,
            { state: n, key: (t && t.key) || r || Cv() }
        )
    )
}
function Cr(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    )
}
function jn(e) {
    let t = {}
    if (e) {
        let n = e.indexOf("#")
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
        let r = e.indexOf("?")
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e)
    }
    return t
}
function jv(e, t, n, r) {
    r === void 0 && (r = {})
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
        l = o.history,
        s = Oe.Pop,
        a = null,
        u = c()
    u == null && ((u = 0), l.replaceState(Le({}, l.state, { idx: u }), ""))
    function c() {
        return (l.state || { idx: null }).idx
    }
    function d() {
        s = Oe.Pop
        let S = c(),
            m = S == null ? null : S - u
        ;(u = S), a && a({ action: s, location: v.location, delta: m })
    }
    function p(S, m) {
        s = Oe.Push
        let h = vi(v.location, S, m)
        n && n(h, S), (u = c() + 1)
        let y = Gf(h, u),
            C = v.createHref(h)
        try {
            l.pushState(y, "", C)
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError")
                throw R
            o.location.assign(C)
        }
        i && a && a({ action: s, location: v.location, delta: 1 })
    }
    function w(S, m) {
        s = Oe.Replace
        let h = vi(v.location, S, m)
        n && n(h, S), (u = c())
        let y = Gf(h, u),
            C = v.createHref(h)
        l.replaceState(y, "", C),
            i && a && a({ action: s, location: v.location, delta: 0 })
    }
    function g(S) {
        let m =
                o.location.origin !== "null"
                    ? o.location.origin
                    : o.location.href,
            h = typeof S == "string" ? S : Cr(S)
        return (
            ee(
                m,
                "No window.location.(origin|href) available to create URL for href: " +
                    h
            ),
            new URL(h, m)
        )
    }
    let v = {
        get action() {
            return s
        },
        get location() {
            return e(o, l)
        },
        listen(S) {
            if (a) throw new Error("A history only accepts one active listener")
            return (
                o.addEventListener(Vf, d),
                (a = S),
                () => {
                    o.removeEventListener(Vf, d), (a = null)
                }
            )
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: g,
        encodeLocation(S) {
            let m = g(S)
            return { pathname: m.pathname, search: m.search, hash: m.hash }
        },
        push: p,
        replace: w,
        go(S) {
            return l.go(S)
        }
    }
    return v
}
var Re
;(function (e) {
    ;(e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error")
})(Re || (Re = {}))
const Pv = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"])
function _v(e) {
    return e.index === !0
}
function $u(e, t, n, r) {
    return (
        n === void 0 && (n = []),
        r === void 0 && (r = {}),
        e.map((o, i) => {
            let l = [...n, i],
                s = typeof o.id == "string" ? o.id : l.join("-")
            if (
                (ee(
                    o.index !== !0 || !o.children,
                    "Cannot specify children on an index route"
                ),
                ee(
                    !r[s],
                    'Found a route id collision on id "' +
                        s +
                        `".  Route id's must be globally unique within Data Router usages`
                ),
                _v(o))
            ) {
                let a = Le({}, o, t(o), { id: s })
                return (r[s] = a), a
            } else {
                let a = Le({}, o, t(o), { id: s, children: void 0 })
                return (
                    (r[s] = a),
                    o.children && (a.children = $u(o.children, t, l, r)),
                    a
                )
            }
        })
    )
}
function Yr(e, t, n) {
    n === void 0 && (n = "/")
    let r = typeof t == "string" ? jn(t) : t,
        o = go(r.pathname || "/", n)
    if (o == null) return null
    let i = g0(e)
    Rv(i)
    let l = null
    for (let s = 0; l == null && s < i.length; ++s) l = Dv(i[s], Bv(o))
    return l
}
function Nv(e, t) {
    let { route: n, pathname: r, params: o } = e
    return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle }
}
function g0(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "")
    let o = (i, l, s) => {
        let a = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: l,
            route: i
        }
        a.relativePath.startsWith("/") &&
            (ee(
                a.relativePath.startsWith(r),
                'Absolute route path "' +
                    a.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (a.relativePath = a.relativePath.slice(r.length)))
        let u = vn([r, a.relativePath]),
            c = n.concat(a)
        i.children &&
            i.children.length > 0 &&
            (ee(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            g0(i.children, t, c, u)),
            !(i.path == null && !i.index) &&
                t.push({ path: u, score: Mv(u, i.index), routesMeta: c })
    }
    return (
        e.forEach((i, l) => {
            var s
            if (i.path === "" || !((s = i.path) != null && s.includes("?")))
                o(i, l)
            else for (let a of y0(i.path)) o(i, l, a)
        }),
        t
    )
}
function y0(e) {
    let t = e.split("/")
    if (t.length === 0) return []
    let [n, ...r] = t,
        o = n.endsWith("?"),
        i = n.replace(/\?$/, "")
    if (r.length === 0) return o ? [i, ""] : [i]
    let l = y0(r.join("/")),
        s = []
    return (
        s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
        o && s.push(...l),
        s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
    )
}
function Rv(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : Iv(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    )
}
const bv = /^:[\w-]+$/,
    Lv = 3,
    Tv = 2,
    zv = 1,
    $v = 10,
    Ov = -2,
    Kf = (e) => e === "*"
function Mv(e, t) {
    let n = e.split("/"),
        r = n.length
    return (
        n.some(Kf) && (r += Ov),
        t && (r += Tv),
        n
            .filter((o) => !Kf(o))
            .reduce((o, i) => o + (bv.test(i) ? Lv : i === "" ? zv : $v), r)
    )
}
function Iv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
        ? e[e.length - 1] - t[t.length - 1]
        : 0
}
function Dv(e, t) {
    let { routesMeta: n } = e,
        r = {},
        o = "/",
        i = []
    for (let l = 0; l < n.length; ++l) {
        let s = n[l],
            a = l === n.length - 1,
            u = o === "/" ? t : t.slice(o.length) || "/",
            c = Av(
                {
                    path: s.relativePath,
                    caseSensitive: s.caseSensitive,
                    end: a
                },
                u
            )
        if (!c) return null
        Object.assign(r, c.params)
        let d = s.route
        i.push({
            params: r,
            pathname: vn([o, c.pathname]),
            pathnameBase: Vv(vn([o, c.pathnameBase])),
            route: d
        }),
            c.pathnameBase !== "/" && (o = vn([o, c.pathnameBase]))
    }
    return i
}
function Av(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 })
    let [n, r] = Fv(e.path, e.caseSensitive, e.end),
        o = t.match(n)
    if (!o) return null
    let i = o[0],
        l = i.replace(/(.)\/+$/, "$1"),
        s = o.slice(1)
    return {
        params: r.reduce((u, c, d) => {
            let { paramName: p, isOptional: w } = c
            if (p === "*") {
                let v = s[d] || ""
                l = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const g = s[d]
            return w && !g ? (u[p] = void 0) : (u[p] = Uv(g || "", p)), u
        }, {}),
        pathname: i,
        pathnameBase: l,
        pattern: e
    }
}
function Fv(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        kr(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".')
        )
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (l, s, a) => (
                        r.push({ paramName: s, isOptional: a != null }),
                        a ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                )
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }),
              (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (o += "\\/*$")
              : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    )
}
function Bv(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return (
            kr(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        )
    }
}
function Uv(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return (
            kr(
                !1,
                'The value for the URL param "' +
                    t +
                    '" will not be decoded because' +
                    (' the string "' +
                        e +
                        '" is a malformed URL segment. This is probably') +
                    (" due to a bad percent encoding (" + n + ").")
            ),
            e
        )
    }
}
function go(e, t) {
    if (t === "/") return e
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n)
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Hv(e, t) {
    t === void 0 && (t = "/")
    let {
        pathname: n,
        search: r = "",
        hash: o = ""
    } = typeof e == "string" ? jn(e) : e
    return {
        pathname: n ? (n.startsWith("/") ? n : Wv(n, t)) : t,
        search: Gv(r),
        hash: Kv(o)
    }
}
function Wv(e, t) {
    let n = t.replace(/\/+$/, "").split("/")
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
        }),
        n.length > 1 ? n.join("/") : "/"
    )
}
function ja(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    )
}
function v0(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    )
}
function qc(e, t) {
    let n = v0(e)
    return t
        ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
        : n.map((r) => r.pathnameBase)
}
function Xc(e, t, n, r) {
    r === void 0 && (r = !1)
    let o
    typeof e == "string"
        ? (o = jn(e))
        : ((o = Le({}, e)),
          ee(
              !o.pathname || !o.pathname.includes("?"),
              ja("?", "pathname", "search", o)
          ),
          ee(
              !o.pathname || !o.pathname.includes("#"),
              ja("#", "pathname", "hash", o)
          ),
          ee(
              !o.search || !o.search.includes("#"),
              ja("#", "search", "hash", o)
          ))
    let i = e === "" || o.pathname === "",
        l = i ? "/" : o.pathname,
        s
    if (l == null) s = n
    else {
        let d = t.length - 1
        if (!r && l.startsWith("..")) {
            let p = l.split("/")
            for (; p[0] === ".."; ) p.shift(), (d -= 1)
            o.pathname = p.join("/")
        }
        s = d >= 0 ? t[d] : "/"
    }
    let a = Hv(o, s),
        u = l && l !== "/" && l.endsWith("/"),
        c = (i || l === ".") && n.endsWith("/")
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a
}
const vn = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Vv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Gv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    Kv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e)
class Jc {
    constructor(t, n, r, o) {
        o === void 0 && (o = !1),
            (this.status = t),
            (this.statusText = n || ""),
            (this.internal = o),
            r instanceof Error
                ? ((this.data = r.toString()), (this.error = r))
                : (this.data = r)
    }
}
function w0(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    )
}
const x0 = ["post", "put", "patch", "delete"],
    Qv = new Set(x0),
    Yv = ["get", ...x0],
    qv = new Set(Yv),
    Xv = new Set([301, 302, 303, 307, 308]),
    Jv = new Set([307, 308]),
    Pa = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Zv = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    To = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    S0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ew = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
    E0 = "remix-router-transitions"
function tw(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n =
            typeof t < "u" &&
            typeof t.document < "u" &&
            typeof t.document.createElement < "u",
        r = !n
    ee(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    )
    let o
    if (e.mapRouteProperties) o = e.mapRouteProperties
    else if (e.detectErrorBoundary) {
        let k = e.detectErrorBoundary
        o = (j) => ({ hasErrorBoundary: k(j) })
    } else o = ew
    let i = {},
        l = $u(e.routes, o, void 0, i),
        s,
        a = e.basename || "/",
        u = Le(
            {
                v7_fetcherPersist: !1,
                v7_normalizeFormMethod: !1,
                v7_partialHydration: !1,
                v7_prependBasename: !1,
                v7_relativeSplatPath: !1
            },
            e.future
        ),
        c = null,
        d = new Set(),
        p = null,
        w = null,
        g = null,
        v = e.hydrationData != null,
        S = Yr(l, e.history.location, a),
        m = null
    if (S == null) {
        let k = _t(404, { pathname: e.history.location.pathname }),
            { matches: j, route: N } = tp(l)
        ;(S = j), (m = { [N.id]: k })
    }
    let h,
        y = S.some((k) => k.route.lazy),
        C = S.some((k) => k.route.loader)
    if (y) h = !1
    else if (!C) h = !0
    else if (u.v7_partialHydration) {
        let k = e.hydrationData ? e.hydrationData.loaderData : null,
            j = e.hydrationData ? e.hydrationData.errors : null
        h = S.every(
            (N) =>
                N.route.loader &&
                N.route.loader.hydrate !== !0 &&
                ((k && k[N.route.id] !== void 0) ||
                    (j && j[N.route.id] !== void 0))
        )
    } else h = e.hydrationData != null
    let R,
        x = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: S,
            initialized: h,
            navigation: Pa,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || m,
            fetchers: new Map(),
            blockers: new Map()
        },
        _ = Oe.Pop,
        T = !1,
        M,
        F = !1,
        V = new Map(),
        ie = null,
        te = !1,
        ue = !1,
        Te = [],
        Se = [],
        re = new Map(),
        z = 0,
        D = -1,
        B = new Map(),
        K = new Set(),
        le = new Map(),
        Ae = new Map(),
        me = new Set(),
        ze = new Map(),
        je = new Map(),
        Qe = !1
    function Mt() {
        if (
            ((c = e.history.listen((k) => {
                let { action: j, location: N, delta: I } = k
                if (Qe) {
                    Qe = !1
                    return
                }
                kr(
                    je.size === 0 || I != null,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                )
                let U = Td({
                    currentLocation: x.location,
                    nextLocation: N,
                    historyAction: j
                })
                if (U && I != null) {
                    ;(Qe = !0),
                        e.history.go(I * -1),
                        Di(U, {
                            state: "blocked",
                            location: N,
                            proceed() {
                                Di(U, {
                                    state: "proceeding",
                                    proceed: void 0,
                                    reset: void 0,
                                    location: N
                                }),
                                    e.history.go(I)
                            },
                            reset() {
                                let oe = new Map(x.blockers)
                                oe.set(U, To), $e({ blockers: oe })
                            }
                        })
                    return
                }
                return X(j, N)
            })),
            n)
        ) {
            fw(t, V)
            let k = () => pw(t, V)
            t.addEventListener("pagehide", k),
                (ie = () => t.removeEventListener("pagehide", k))
        }
        return (
            x.initialized || X(Oe.Pop, x.location, { initialHydration: !0 }), R
        )
    }
    function It() {
        c && c(),
            ie && ie(),
            d.clear(),
            M && M.abort(),
            x.fetchers.forEach((k, j) => Ii(j)),
            x.blockers.forEach((k, j) => Ld(j))
    }
    function Rn(k) {
        return d.add(k), () => d.delete(k)
    }
    function $e(k, j) {
        j === void 0 && (j = {}), (x = Le({}, x, k))
        let N = [],
            I = []
        u.v7_fetcherPersist &&
            x.fetchers.forEach((U, oe) => {
                U.state === "idle" && (me.has(oe) ? I.push(oe) : N.push(oe))
            }),
            [...d].forEach((U) =>
                U(x, {
                    deletedFetchers: I,
                    unstable_viewTransitionOpts: j.viewTransitionOpts,
                    unstable_flushSync: j.flushSync === !0
                })
            ),
            u.v7_fetcherPersist &&
                (N.forEach((U) => x.fetchers.delete(U)),
                I.forEach((U) => Ii(U)))
    }
    function O(k, j, N) {
        var I, U
        let { flushSync: oe } = N === void 0 ? {} : N,
            G =
                x.actionData != null &&
                x.navigation.formMethod != null &&
                Bt(x.navigation.formMethod) &&
                x.navigation.state === "loading" &&
                ((I = k.state) == null ? void 0 : I._isRedirect) !== !0,
            W
        j.actionData
            ? Object.keys(j.actionData).length > 0
                ? (W = j.actionData)
                : (W = null)
            : G
              ? (W = x.actionData)
              : (W = null)
        let H = j.loaderData
                ? ep(x.loaderData, j.loaderData, j.matches || [], j.errors)
                : x.loaderData,
            ae = x.blockers
        ae.size > 0 &&
            ((ae = new Map(ae)), ae.forEach((ye, Ye) => ae.set(Ye, To)))
        let He =
            T === !0 ||
            (x.navigation.formMethod != null &&
                Bt(x.navigation.formMethod) &&
                ((U = k.state) == null ? void 0 : U._isRedirect) !== !0)
        s && ((l = s), (s = void 0)),
            te ||
                _ === Oe.Pop ||
                (_ === Oe.Push
                    ? e.history.push(k, k.state)
                    : _ === Oe.Replace && e.history.replace(k, k.state))
        let Z
        if (_ === Oe.Pop) {
            let ye = V.get(x.location.pathname)
            ye && ye.has(k.pathname)
                ? (Z = { currentLocation: x.location, nextLocation: k })
                : V.has(k.pathname) &&
                  (Z = { currentLocation: k, nextLocation: x.location })
        } else if (F) {
            let ye = V.get(x.location.pathname)
            ye
                ? ye.add(k.pathname)
                : ((ye = new Set([k.pathname])),
                  V.set(x.location.pathname, ye)),
                (Z = { currentLocation: x.location, nextLocation: k })
        }
        $e(
            Le({}, j, {
                actionData: W,
                loaderData: H,
                historyAction: _,
                location: k,
                initialized: !0,
                navigation: Pa,
                revalidation: "idle",
                restoreScrollPosition: $d(k, j.matches || x.matches),
                preventScrollReset: He,
                blockers: ae
            }),
            { viewTransitionOpts: Z, flushSync: oe === !0 }
        ),
            (_ = Oe.Pop),
            (T = !1),
            (F = !1),
            (te = !1),
            (ue = !1),
            (Te = []),
            (Se = [])
    }
    async function Q(k, j) {
        if (typeof k == "number") {
            e.history.go(k)
            return
        }
        let N = Ou(
                x.location,
                x.matches,
                a,
                u.v7_prependBasename,
                k,
                u.v7_relativeSplatPath,
                j == null ? void 0 : j.fromRouteId,
                j == null ? void 0 : j.relative
            ),
            {
                path: I,
                submission: U,
                error: oe
            } = Qf(u.v7_normalizeFormMethod, !1, N, j),
            G = x.location,
            W = vi(x.location, I, j && j.state)
        W = Le({}, W, e.history.encodeLocation(W))
        let H = j && j.replace != null ? j.replace : void 0,
            ae = Oe.Push
        H === !0
            ? (ae = Oe.Replace)
            : H === !1 ||
              (U != null &&
                  Bt(U.formMethod) &&
                  U.formAction === x.location.pathname + x.location.search &&
                  (ae = Oe.Replace))
        let He =
                j && "preventScrollReset" in j
                    ? j.preventScrollReset === !0
                    : void 0,
            Z = (j && j.unstable_flushSync) === !0,
            ye = Td({ currentLocation: G, nextLocation: W, historyAction: ae })
        if (ye) {
            Di(ye, {
                state: "blocked",
                location: W,
                proceed() {
                    Di(ye, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: W
                    }),
                        Q(k, j)
                },
                reset() {
                    let Ye = new Map(x.blockers)
                    Ye.set(ye, To), $e({ blockers: Ye })
                }
            })
            return
        }
        return await X(ae, W, {
            submission: U,
            pendingError: oe,
            preventScrollReset: He,
            replace: j && j.replace,
            enableViewTransition: j && j.unstable_viewTransition,
            flushSync: Z
        })
    }
    function q() {
        if (
            (Ks(),
            $e({ revalidation: "loading" }),
            x.navigation.state !== "submitting")
        ) {
            if (x.navigation.state === "idle") {
                X(x.historyAction, x.location, {
                    startUninterruptedRevalidation: !0
                })
                return
            }
            X(_ || x.historyAction, x.navigation.location, {
                overrideNavigation: x.navigation
            })
        }
    }
    async function X(k, j, N) {
        M && M.abort(),
            (M = null),
            (_ = k),
            (te = (N && N.startUninterruptedRevalidation) === !0),
            Kg(x.location, x.matches),
            (T = (N && N.preventScrollReset) === !0),
            (F = (N && N.enableViewTransition) === !0)
        let I = s || l,
            U = N && N.overrideNavigation,
            oe = Yr(I, j, a),
            G = (N && N.flushSync) === !0
        if (!oe) {
            let Ye = _t(404, { pathname: j.pathname }),
                { matches: Pt, route: We } = tp(I)
            Qs(),
                O(
                    j,
                    { matches: Pt, loaderData: {}, errors: { [We.id]: Ye } },
                    { flushSync: G }
                )
            return
        }
        if (
            x.initialized &&
            !ue &&
            lw(x.location, j) &&
            !(N && N.submission && Bt(N.submission.formMethod))
        ) {
            O(j, { matches: oe }, { flushSync: G })
            return
        }
        M = new AbortController()
        let W = $o(e.history, j, M.signal, N && N.submission),
            H,
            ae
        if (N && N.pendingError) ae = { [Zo(oe).route.id]: N.pendingError }
        else if (N && N.submission && Bt(N.submission.formMethod)) {
            let Ye = await Ue(W, j, N.submission, oe, {
                replace: N.replace,
                flushSync: G
            })
            if (Ye.shortCircuited) return
            ;(H = Ye.pendingActionData),
                (ae = Ye.pendingActionError),
                (U = _a(j, N.submission)),
                (G = !1),
                (W = new Request(W.url, { signal: W.signal }))
        }
        let {
            shortCircuited: He,
            loaderData: Z,
            errors: ye
        } = await So(
            W,
            j,
            oe,
            U,
            N && N.submission,
            N && N.fetcherSubmission,
            N && N.replace,
            N && N.initialHydration === !0,
            G,
            H,
            ae
        )
        He ||
            ((M = null),
            O(
                j,
                Le({ matches: oe }, H ? { actionData: H } : {}, {
                    loaderData: Z,
                    errors: ye
                })
            ))
    }
    async function Ue(k, j, N, I, U) {
        U === void 0 && (U = {}), Ks()
        let oe = cw(j, N)
        $e({ navigation: oe }, { flushSync: U.flushSync === !0 })
        let G,
            W = Iu(I, j)
        if (!W.route.action && !W.route.lazy)
            G = {
                type: Re.error,
                error: _t(405, {
                    method: k.method,
                    pathname: j.pathname,
                    routeId: W.route.id
                })
            }
        else if (
            ((G = await zo("action", k, W, I, i, o, a, u.v7_relativeSplatPath)),
            k.signal.aborted)
        )
            return { shortCircuited: !0 }
        if (hr(G)) {
            let H
            return (
                U && U.replace != null
                    ? (H = U.replace)
                    : (H =
                          G.location ===
                          x.location.pathname + x.location.search),
                await Eo(x, G, { submission: N, replace: H }),
                { shortCircuited: !0 }
            )
        }
        if (qr(G)) {
            let H = Zo(I, W.route.id)
            return (
                (U && U.replace) !== !0 && (_ = Oe.Push),
                {
                    pendingActionData: {},
                    pendingActionError: { [H.route.id]: G.error }
                }
            )
        }
        if (pr(G)) throw _t(400, { type: "defer-action" })
        return { pendingActionData: { [W.route.id]: G.data } }
    }
    async function So(k, j, N, I, U, oe, G, W, H, ae, He) {
        let Z = I || _a(j, U),
            ye = U || oe || op(Z),
            Ye = s || l,
            [Pt, We] = Yf(
                e.history,
                x,
                N,
                ye,
                j,
                u.v7_partialHydration && W === !0,
                ue,
                Te,
                Se,
                me,
                le,
                K,
                Ye,
                a,
                ae,
                He
            )
        if (
            (Qs(
                (ge) =>
                    !(N && N.some((Ee) => Ee.route.id === ge)) ||
                    (Pt && Pt.some((Ee) => Ee.route.id === ge))
            ),
            (D = ++z),
            Pt.length === 0 && We.length === 0)
        ) {
            let ge = Rd()
            return (
                O(
                    j,
                    Le(
                        { matches: N, loaderData: {}, errors: He || null },
                        ae ? { actionData: ae } : {},
                        ge ? { fetchers: new Map(x.fetchers) } : {}
                    ),
                    { flushSync: H }
                ),
                { shortCircuited: !0 }
            )
        }
        if (!te && (!u.v7_partialHydration || !W)) {
            We.forEach((Ee) => {
                let qt = x.fetchers.get(Ee.key),
                    Fi = Oo(void 0, qt ? qt.data : void 0)
                x.fetchers.set(Ee.key, Fi)
            })
            let ge = ae || x.actionData
            $e(
                Le(
                    { navigation: Z },
                    ge
                        ? Object.keys(ge).length === 0
                            ? { actionData: null }
                            : { actionData: ge }
                        : {},
                    We.length > 0 ? { fetchers: new Map(x.fetchers) } : {}
                ),
                { flushSync: H }
            )
        }
        We.forEach((ge) => {
            re.has(ge.key) && Tn(ge.key),
                ge.controller && re.set(ge.key, ge.controller)
        })
        let Lr = () => We.forEach((ge) => Tn(ge.key))
        M && M.signal.addEventListener("abort", Lr)
        let {
            results: Ys,
            loaderResults: Tr,
            fetcherResults: zn
        } = await Pd(x.matches, N, Pt, We, k)
        if (k.signal.aborted) return { shortCircuited: !0 }
        M && M.signal.removeEventListener("abort", Lr),
            We.forEach((ge) => re.delete(ge.key))
        let sr = np(Ys)
        if (sr) {
            if (sr.idx >= Pt.length) {
                let ge = We[sr.idx - Pt.length].key
                K.add(ge)
            }
            return (
                await Eo(x, sr.result, { replace: G }), { shortCircuited: !0 }
            )
        }
        let { loaderData: qs, errors: Xs } = Zf(x, N, Pt, Tr, He, We, zn, ze)
        ze.forEach((ge, Ee) => {
            ge.subscribe((qt) => {
                ;(qt || ge.done) && ze.delete(Ee)
            })
        })
        let Js = Rd(),
            zr = bd(D),
            Ai = Js || zr || We.length > 0
        return Le(
            { loaderData: qs, errors: Xs },
            Ai ? { fetchers: new Map(x.fetchers) } : {}
        )
    }
    function un(k, j, N, I) {
        if (r)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            )
        re.has(k) && Tn(k)
        let U = (I && I.unstable_flushSync) === !0,
            oe = s || l,
            G = Ou(
                x.location,
                x.matches,
                a,
                u.v7_prependBasename,
                N,
                u.v7_relativeSplatPath,
                j,
                I == null ? void 0 : I.relative
            ),
            W = Yr(oe, G, a)
        if (!W) {
            ko(k, j, _t(404, { pathname: G }), { flushSync: U })
            return
        }
        let {
            path: H,
            submission: ae,
            error: He
        } = Qf(u.v7_normalizeFormMethod, !0, G, I)
        if (He) {
            ko(k, j, He, { flushSync: U })
            return
        }
        let Z = Iu(W, H)
        if (
            ((T = (I && I.preventScrollReset) === !0), ae && Bt(ae.formMethod))
        ) {
            bn(k, j, H, Z, W, U, ae)
            return
        }
        le.set(k, { routeId: j, path: H }), Hg(k, j, H, Z, W, U, ae)
    }
    async function bn(k, j, N, I, U, oe, G) {
        if ((Ks(), le.delete(k), !I.route.action && !I.route.lazy)) {
            let Ee = _t(405, { method: G.formMethod, pathname: N, routeId: j })
            ko(k, j, Ee, { flushSync: oe })
            return
        }
        let W = x.fetchers.get(k)
        Ln(k, dw(G, W), { flushSync: oe })
        let H = new AbortController(),
            ae = $o(e.history, N, H.signal, G)
        re.set(k, H)
        let He = z,
            Z = await zo("action", ae, I, U, i, o, a, u.v7_relativeSplatPath)
        if (ae.signal.aborted) {
            re.get(k) === H && re.delete(k)
            return
        }
        if (u.v7_fetcherPersist && me.has(k)) {
            if (hr(Z) || qr(Z)) {
                Ln(k, In(void 0))
                return
            }
        } else {
            if (hr(Z))
                if ((re.delete(k), D > He)) {
                    Ln(k, In(void 0))
                    return
                } else
                    return (
                        K.add(k),
                        Ln(k, Oo(G)),
                        Eo(x, Z, { fetcherSubmission: G })
                    )
            if (qr(Z)) {
                ko(k, j, Z.error)
                return
            }
        }
        if (pr(Z)) throw _t(400, { type: "defer-action" })
        let ye = x.navigation.location || x.location,
            Ye = $o(e.history, ye, H.signal),
            Pt = s || l,
            We =
                x.navigation.state !== "idle"
                    ? Yr(Pt, x.navigation.location, a)
                    : x.matches
        ee(We, "Didn't find any matches after fetcher action")
        let Lr = ++z
        B.set(k, Lr)
        let Ys = Oo(G, Z.data)
        x.fetchers.set(k, Ys)
        let [Tr, zn] = Yf(
            e.history,
            x,
            We,
            G,
            ye,
            !1,
            ue,
            Te,
            Se,
            me,
            le,
            K,
            Pt,
            a,
            { [I.route.id]: Z.data },
            void 0
        )
        zn
            .filter((Ee) => Ee.key !== k)
            .forEach((Ee) => {
                let qt = Ee.key,
                    Fi = x.fetchers.get(qt),
                    Yg = Oo(void 0, Fi ? Fi.data : void 0)
                x.fetchers.set(qt, Yg),
                    re.has(qt) && Tn(qt),
                    Ee.controller && re.set(qt, Ee.controller)
            }),
            $e({ fetchers: new Map(x.fetchers) })
        let sr = () => zn.forEach((Ee) => Tn(Ee.key))
        H.signal.addEventListener("abort", sr)
        let {
            results: qs,
            loaderResults: Xs,
            fetcherResults: Js
        } = await Pd(x.matches, We, Tr, zn, Ye)
        if (H.signal.aborted) return
        H.signal.removeEventListener("abort", sr),
            B.delete(k),
            re.delete(k),
            zn.forEach((Ee) => re.delete(Ee.key))
        let zr = np(qs)
        if (zr) {
            if (zr.idx >= Tr.length) {
                let Ee = zn[zr.idx - Tr.length].key
                K.add(Ee)
            }
            return Eo(x, zr.result)
        }
        let { loaderData: Ai, errors: ge } = Zf(
            x,
            x.matches,
            Tr,
            Xs,
            void 0,
            zn,
            Js,
            ze
        )
        if (x.fetchers.has(k)) {
            let Ee = In(Z.data)
            x.fetchers.set(k, Ee)
        }
        bd(Lr),
            x.navigation.state === "loading" && Lr > D
                ? (ee(_, "Expected pending action"),
                  M && M.abort(),
                  O(x.navigation.location, {
                      matches: We,
                      loaderData: Ai,
                      errors: ge,
                      fetchers: new Map(x.fetchers)
                  }))
                : ($e({
                      errors: ge,
                      loaderData: ep(x.loaderData, Ai, We, ge),
                      fetchers: new Map(x.fetchers)
                  }),
                  (ue = !1))
    }
    async function Hg(k, j, N, I, U, oe, G) {
        let W = x.fetchers.get(k)
        Ln(k, Oo(G, W ? W.data : void 0), { flushSync: oe })
        let H = new AbortController(),
            ae = $o(e.history, N, H.signal)
        re.set(k, H)
        let He = z,
            Z = await zo("loader", ae, I, U, i, o, a, u.v7_relativeSplatPath)
        if (
            (pr(Z) && (Z = (await j0(Z, ae.signal, !0)) || Z),
            re.get(k) === H && re.delete(k),
            !ae.signal.aborted)
        ) {
            if (me.has(k)) {
                Ln(k, In(void 0))
                return
            }
            if (hr(Z))
                if (D > He) {
                    Ln(k, In(void 0))
                    return
                } else {
                    K.add(k), await Eo(x, Z)
                    return
                }
            if (qr(Z)) {
                ko(k, j, Z.error)
                return
            }
            ee(!pr(Z), "Unhandled fetcher deferred data"), Ln(k, In(Z.data))
        }
    }
    async function Eo(k, j, N) {
        let {
            submission: I,
            fetcherSubmission: U,
            replace: oe
        } = N === void 0 ? {} : N
        j.revalidate && (ue = !0)
        let G = vi(k.location, j.location, { _isRedirect: !0 })
        if ((ee(G, "Expected a location on the redirect navigation"), n)) {
            let ye = !1
            if (j.reloadDocument) ye = !0
            else if (S0.test(j.location)) {
                const Ye = e.history.createURL(j.location)
                ye =
                    Ye.origin !== t.location.origin ||
                    go(Ye.pathname, a) == null
            }
            if (ye) {
                oe
                    ? t.location.replace(j.location)
                    : t.location.assign(j.location)
                return
            }
        }
        M = null
        let W = oe === !0 ? Oe.Replace : Oe.Push,
            { formMethod: H, formAction: ae, formEncType: He } = k.navigation
        !I && !U && H && ae && He && (I = op(k.navigation))
        let Z = I || U
        if (Jv.has(j.status) && Z && Bt(Z.formMethod))
            await X(W, G, {
                submission: Le({}, Z, { formAction: j.location }),
                preventScrollReset: T
            })
        else {
            let ye = _a(G, I)
            await X(W, G, {
                overrideNavigation: ye,
                fetcherSubmission: U,
                preventScrollReset: T
            })
        }
    }
    async function Pd(k, j, N, I, U) {
        let oe = await Promise.all([
                ...N.map((H) =>
                    zo("loader", U, H, j, i, o, a, u.v7_relativeSplatPath)
                ),
                ...I.map((H) =>
                    H.matches && H.match && H.controller
                        ? zo(
                              "loader",
                              $o(e.history, H.path, H.controller.signal),
                              H.match,
                              H.matches,
                              i,
                              o,
                              a,
                              u.v7_relativeSplatPath
                          )
                        : {
                              type: Re.error,
                              error: _t(404, { pathname: H.path })
                          }
                )
            ]),
            G = oe.slice(0, N.length),
            W = oe.slice(N.length)
        return (
            await Promise.all([
                rp(
                    k,
                    N,
                    G,
                    G.map(() => U.signal),
                    !1,
                    x.loaderData
                ),
                rp(
                    k,
                    I.map((H) => H.match),
                    W,
                    I.map((H) => (H.controller ? H.controller.signal : null)),
                    !0
                )
            ]),
            { results: oe, loaderResults: G, fetcherResults: W }
        )
    }
    function Ks() {
        ;(ue = !0),
            Te.push(...Qs()),
            le.forEach((k, j) => {
                re.has(j) && (Se.push(j), Tn(j))
            })
    }
    function Ln(k, j, N) {
        N === void 0 && (N = {}),
            x.fetchers.set(k, j),
            $e(
                { fetchers: new Map(x.fetchers) },
                { flushSync: (N && N.flushSync) === !0 }
            )
    }
    function ko(k, j, N, I) {
        I === void 0 && (I = {})
        let U = Zo(x.matches, j)
        Ii(k),
            $e(
                { errors: { [U.route.id]: N }, fetchers: new Map(x.fetchers) },
                { flushSync: (I && I.flushSync) === !0 }
            )
    }
    function _d(k) {
        return (
            u.v7_fetcherPersist &&
                (Ae.set(k, (Ae.get(k) || 0) + 1), me.has(k) && me.delete(k)),
            x.fetchers.get(k) || Zv
        )
    }
    function Ii(k) {
        let j = x.fetchers.get(k)
        re.has(k) && !(j && j.state === "loading" && B.has(k)) && Tn(k),
            le.delete(k),
            B.delete(k),
            K.delete(k),
            me.delete(k),
            x.fetchers.delete(k)
    }
    function Wg(k) {
        if (u.v7_fetcherPersist) {
            let j = (Ae.get(k) || 0) - 1
            j <= 0 ? (Ae.delete(k), me.add(k)) : Ae.set(k, j)
        } else Ii(k)
        $e({ fetchers: new Map(x.fetchers) })
    }
    function Tn(k) {
        let j = re.get(k)
        ee(j, "Expected fetch controller: " + k), j.abort(), re.delete(k)
    }
    function Nd(k) {
        for (let j of k) {
            let N = _d(j),
                I = In(N.data)
            x.fetchers.set(j, I)
        }
    }
    function Rd() {
        let k = [],
            j = !1
        for (let N of K) {
            let I = x.fetchers.get(N)
            ee(I, "Expected fetcher: " + N),
                I.state === "loading" && (K.delete(N), k.push(N), (j = !0))
        }
        return Nd(k), j
    }
    function bd(k) {
        let j = []
        for (let [N, I] of B)
            if (I < k) {
                let U = x.fetchers.get(N)
                ee(U, "Expected fetcher: " + N),
                    U.state === "loading" && (Tn(N), B.delete(N), j.push(N))
            }
        return Nd(j), j.length > 0
    }
    function Vg(k, j) {
        let N = x.blockers.get(k) || To
        return je.get(k) !== j && je.set(k, j), N
    }
    function Ld(k) {
        x.blockers.delete(k), je.delete(k)
    }
    function Di(k, j) {
        let N = x.blockers.get(k) || To
        ee(
            (N.state === "unblocked" && j.state === "blocked") ||
                (N.state === "blocked" && j.state === "blocked") ||
                (N.state === "blocked" && j.state === "proceeding") ||
                (N.state === "blocked" && j.state === "unblocked") ||
                (N.state === "proceeding" && j.state === "unblocked"),
            "Invalid blocker state transition: " + N.state + " -> " + j.state
        )
        let I = new Map(x.blockers)
        I.set(k, j), $e({ blockers: I })
    }
    function Td(k) {
        let { currentLocation: j, nextLocation: N, historyAction: I } = k
        if (je.size === 0) return
        je.size > 1 && kr(!1, "A router only supports one blocker at a time")
        let U = Array.from(je.entries()),
            [oe, G] = U[U.length - 1],
            W = x.blockers.get(oe)
        if (
            !(W && W.state === "proceeding") &&
            G({ currentLocation: j, nextLocation: N, historyAction: I })
        )
            return oe
    }
    function Qs(k) {
        let j = []
        return (
            ze.forEach((N, I) => {
                ;(!k || k(I)) && (N.cancel(), j.push(I), ze.delete(I))
            }),
            j
        )
    }
    function Gg(k, j, N) {
        if (((p = k), (g = j), (w = N || null), !v && x.navigation === Pa)) {
            v = !0
            let I = $d(x.location, x.matches)
            I != null && $e({ restoreScrollPosition: I })
        }
        return () => {
            ;(p = null), (g = null), (w = null)
        }
    }
    function zd(k, j) {
        return (
            (w &&
                w(
                    k,
                    j.map((I) => Nv(I, x.loaderData))
                )) ||
            k.key
        )
    }
    function Kg(k, j) {
        if (p && g) {
            let N = zd(k, j)
            p[N] = g()
        }
    }
    function $d(k, j) {
        if (p) {
            let N = zd(k, j),
                I = p[N]
            if (typeof I == "number") return I
        }
        return null
    }
    function Qg(k) {
        ;(i = {}), (s = $u(k, o, void 0, i))
    }
    return (
        (R = {
            get basename() {
                return a
            },
            get future() {
                return u
            },
            get state() {
                return x
            },
            get routes() {
                return l
            },
            get window() {
                return t
            },
            initialize: Mt,
            subscribe: Rn,
            enableScrollRestoration: Gg,
            navigate: Q,
            fetch: un,
            revalidate: q,
            createHref: (k) => e.history.createHref(k),
            encodeLocation: (k) => e.history.encodeLocation(k),
            getFetcher: _d,
            deleteFetcher: Wg,
            dispose: It,
            getBlocker: Vg,
            deleteBlocker: Ld,
            _internalFetchControllers: re,
            _internalActiveDeferreds: ze,
            _internalSetRoutes: Qg
        }),
        R
    )
}
function nw(e) {
    return (
        e != null &&
        (("formData" in e && e.formData != null) ||
            ("body" in e && e.body !== void 0))
    )
}
function Ou(e, t, n, r, o, i, l, s) {
    let a, u
    if (l) {
        a = []
        for (let d of t)
            if ((a.push(d), d.route.id === l)) {
                u = d
                break
            }
    } else (a = t), (u = t[t.length - 1])
    let c = Xc(
        o || ".",
        qc(a, i),
        go(e.pathname, n) || e.pathname,
        s === "path"
    )
    return (
        o == null && ((c.search = e.search), (c.hash = e.hash)),
        (o == null || o === "" || o === ".") &&
            u &&
            u.route.index &&
            !Zc(c.search) &&
            (c.search = c.search
                ? c.search.replace(/^\?/, "?index&")
                : "?index"),
        r &&
            n !== "/" &&
            (c.pathname = c.pathname === "/" ? n : vn([n, c.pathname])),
        Cr(c)
    )
}
function Qf(e, t, n, r) {
    if (!r || !nw(r)) return { path: n }
    if (r.formMethod && !uw(r.formMethod))
        return { path: n, error: _t(405, { method: r.formMethod }) }
    let o = () => ({ path: n, error: _t(400, { type: "invalid-body" }) }),
        i = r.formMethod || "get",
        l = e ? i.toUpperCase() : i.toLowerCase(),
        s = C0(n)
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!Bt(l)) return o()
            let p =
                typeof r.body == "string"
                    ? r.body
                    : r.body instanceof FormData ||
                        r.body instanceof URLSearchParams
                      ? Array.from(r.body.entries()).reduce((w, g) => {
                            let [v, S] = g
                            return (
                                "" +
                                w +
                                v +
                                "=" +
                                S +
                                `
`
                            )
                        }, "")
                      : String(r.body)
            return {
                path: n,
                submission: {
                    formMethod: l,
                    formAction: s,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: p
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!Bt(l)) return o()
            try {
                let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body
                return {
                    path: n,
                    submission: {
                        formMethod: l,
                        formAction: s,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: p,
                        text: void 0
                    }
                }
            } catch {
                return o()
            }
        }
    }
    ee(
        typeof FormData == "function",
        "FormData is not available in this environment"
    )
    let a, u
    if (r.formData) (a = Mu(r.formData)), (u = r.formData)
    else if (r.body instanceof FormData) (a = Mu(r.body)), (u = r.body)
    else if (r.body instanceof URLSearchParams) (a = r.body), (u = Jf(a))
    else if (r.body == null) (a = new URLSearchParams()), (u = new FormData())
    else
        try {
            ;(a = new URLSearchParams(r.body)), (u = Jf(a))
        } catch {
            return o()
        }
    let c = {
        formMethod: l,
        formAction: s,
        formEncType:
            (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0
    }
    if (Bt(c.formMethod)) return { path: n, submission: c }
    let d = jn(n)
    return (
        t && d.search && Zc(d.search) && a.append("index", ""),
        (d.search = "?" + a),
        { path: Cr(d), submission: c }
    )
}
function rw(e, t) {
    let n = e
    if (t) {
        let r = e.findIndex((o) => o.route.id === t)
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}
function Yf(e, t, n, r, o, i, l, s, a, u, c, d, p, w, g, v) {
    let S = v ? Object.values(v)[0] : g ? Object.values(g)[0] : void 0,
        m = e.createURL(t.location),
        h = e.createURL(o),
        y = v ? Object.keys(v)[0] : void 0,
        R = rw(n, y).filter((_, T) => {
            let { route: M } = _
            if (M.lazy) return !0
            if (M.loader == null) return !1
            if (i)
                return M.loader.hydrate
                    ? !0
                    : t.loaderData[M.id] === void 0 &&
                          (!t.errors || t.errors[M.id] === void 0)
            if (
                ow(t.loaderData, t.matches[T], _) ||
                s.some((ie) => ie === _.route.id)
            )
                return !0
            let F = t.matches[T],
                V = _
            return qf(
                _,
                Le(
                    {
                        currentUrl: m,
                        currentParams: F.params,
                        nextUrl: h,
                        nextParams: V.params
                    },
                    r,
                    {
                        actionResult: S,
                        defaultShouldRevalidate:
                            l ||
                            m.pathname + m.search === h.pathname + h.search ||
                            m.search !== h.search ||
                            k0(F, V)
                    }
                )
            )
        }),
        x = []
    return (
        c.forEach((_, T) => {
            if (i || !n.some((te) => te.route.id === _.routeId) || u.has(T))
                return
            let M = Yr(p, _.path, w)
            if (!M) {
                x.push({
                    key: T,
                    routeId: _.routeId,
                    path: _.path,
                    matches: null,
                    match: null,
                    controller: null
                })
                return
            }
            let F = t.fetchers.get(T),
                V = Iu(M, _.path),
                ie = !1
            d.has(T)
                ? (ie = !1)
                : a.includes(T)
                  ? (ie = !0)
                  : F && F.state !== "idle" && F.data === void 0
                    ? (ie = l)
                    : (ie = qf(
                          V,
                          Le(
                              {
                                  currentUrl: m,
                                  currentParams:
                                      t.matches[t.matches.length - 1].params,
                                  nextUrl: h,
                                  nextParams: n[n.length - 1].params
                              },
                              r,
                              { actionResult: S, defaultShouldRevalidate: l }
                          )
                      )),
                ie &&
                    x.push({
                        key: T,
                        routeId: _.routeId,
                        path: _.path,
                        matches: M,
                        match: V,
                        controller: new AbortController()
                    })
        }),
        [R, x]
    )
}
function ow(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        o = e[n.route.id] === void 0
    return r || o
}
function k0(e, t) {
    let n = e.route.path
    return (
        e.pathname !== t.pathname ||
        (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
    )
}
function qf(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t)
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function Xf(e, t, n) {
    if (!e.lazy) return
    let r = await e.lazy()
    if (!e.lazy) return
    let o = n[e.id]
    ee(o, "No route found in manifest")
    let i = {}
    for (let l in r) {
        let a = o[l] !== void 0 && l !== "hasErrorBoundary"
        kr(
            !a,
            'Route "' +
                o.id +
                '" has a static property "' +
                l +
                '" defined but its lazy function is also returning a value for this property. ' +
                ('The lazy route property "' + l + '" will be ignored.')
        ),
            !a && !Pv.has(l) && (i[l] = r[l])
    }
    Object.assign(o, i), Object.assign(o, Le({}, t(o), { lazy: void 0 }))
}
async function zo(e, t, n, r, o, i, l, s, a) {
    a === void 0 && (a = {})
    let u,
        c,
        d,
        p = (v) => {
            let S,
                m = new Promise((h, y) => (S = y))
            return (
                (d = () => S()),
                t.signal.addEventListener("abort", d),
                Promise.race([
                    v({
                        request: t,
                        params: n.params,
                        context: a.requestContext
                    }),
                    m
                ])
            )
        }
    try {
        let v = n.route[e]
        if (n.route.lazy)
            if (v) {
                let S,
                    m = await Promise.all([
                        p(v).catch((h) => {
                            S = h
                        }),
                        Xf(n.route, i, o)
                    ])
                if (S) throw S
                c = m[0]
            } else if ((await Xf(n.route, i, o), (v = n.route[e]), v))
                c = await p(v)
            else if (e === "action") {
                let S = new URL(t.url),
                    m = S.pathname + S.search
                throw _t(405, {
                    method: t.method,
                    pathname: m,
                    routeId: n.route.id
                })
            } else return { type: Re.data, data: void 0 }
        else if (v) c = await p(v)
        else {
            let S = new URL(t.url),
                m = S.pathname + S.search
            throw _t(404, { pathname: m })
        }
        ee(
            c !== void 0,
            "You defined " +
                (e === "action" ? "an action" : "a loader") +
                " for route " +
                ('"' +
                    n.route.id +
                    "\" but didn't return anything from your `" +
                    e +
                    "` ") +
                "function. Please return a value or `null`."
        )
    } catch (v) {
        ;(u = Re.error), (c = v)
    } finally {
        d && t.signal.removeEventListener("abort", d)
    }
    if (aw(c)) {
        let v = c.status
        if (Xv.has(v)) {
            let m = c.headers.get("Location")
            if (
                (ee(
                    m,
                    "Redirects returned/thrown from loaders/actions must have a Location header"
                ),
                !S0.test(m))
            )
                m = Ou(
                    new URL(t.url),
                    r.slice(0, r.indexOf(n) + 1),
                    l,
                    !0,
                    m,
                    s
                )
            else if (!a.isStaticRequest) {
                let h = new URL(t.url),
                    y = m.startsWith("//")
                        ? new URL(h.protocol + m)
                        : new URL(m),
                    C = go(y.pathname, l) != null
                y.origin === h.origin &&
                    C &&
                    (m = y.pathname + y.search + y.hash)
            }
            if (a.isStaticRequest) throw (c.headers.set("Location", m), c)
            return {
                type: Re.redirect,
                status: v,
                location: m,
                revalidate: c.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument:
                    c.headers.get("X-Remix-Reload-Document") !== null
            }
        }
        if (a.isRouteRequest)
            throw { type: u === Re.error ? Re.error : Re.data, response: c }
        let S
        try {
            let m = c.headers.get("Content-Type")
            m && /\bapplication\/json\b/.test(m)
                ? c.body == null
                    ? (S = null)
                    : (S = await c.json())
                : (S = await c.text())
        } catch (m) {
            return { type: Re.error, error: m }
        }
        return u === Re.error
            ? { type: u, error: new Jc(v, c.statusText, S), headers: c.headers }
            : {
                  type: Re.data,
                  data: S,
                  statusCode: c.status,
                  headers: c.headers
              }
    }
    if (u === Re.error) return { type: u, error: c }
    if (sw(c)) {
        var w, g
        return {
            type: Re.deferred,
            deferredData: c,
            statusCode: (w = c.init) == null ? void 0 : w.status,
            headers:
                ((g = c.init) == null ? void 0 : g.headers) &&
                new Headers(c.init.headers)
        }
    }
    return { type: Re.data, data: c }
}
function $o(e, t, n, r) {
    let o = e.createURL(C0(t)).toString(),
        i = { signal: n }
    if (r && Bt(r.formMethod)) {
        let { formMethod: l, formEncType: s } = r
        ;(i.method = l.toUpperCase()),
            s === "application/json"
                ? ((i.headers = new Headers({ "Content-Type": s })),
                  (i.body = JSON.stringify(r.json)))
                : s === "text/plain"
                  ? (i.body = r.text)
                  : s === "application/x-www-form-urlencoded" && r.formData
                    ? (i.body = Mu(r.formData))
                    : (i.body = r.formData)
    }
    return new Request(o, i)
}
function Mu(e) {
    let t = new URLSearchParams()
    for (let [n, r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name)
    return t
}
function Jf(e) {
    let t = new FormData()
    for (let [n, r] of e.entries()) t.append(n, r)
    return t
}
function iw(e, t, n, r, o) {
    let i = {},
        l = null,
        s,
        a = !1,
        u = {}
    return (
        n.forEach((c, d) => {
            let p = t[d].route.id
            if (
                (ee(
                    !hr(c),
                    "Cannot handle redirect results in processLoaderData"
                ),
                qr(c))
            ) {
                let w = Zo(e, p),
                    g = c.error
                r && ((g = Object.values(r)[0]), (r = void 0)),
                    (l = l || {}),
                    l[w.route.id] == null && (l[w.route.id] = g),
                    (i[p] = void 0),
                    a || ((a = !0), (s = w0(c.error) ? c.error.status : 500)),
                    c.headers && (u[p] = c.headers)
            } else
                pr(c)
                    ? (o.set(p, c.deferredData), (i[p] = c.deferredData.data))
                    : (i[p] = c.data),
                    c.statusCode != null &&
                        c.statusCode !== 200 &&
                        !a &&
                        (s = c.statusCode),
                    c.headers && (u[p] = c.headers)
        }),
        r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
        { loaderData: i, errors: l, statusCode: s || 200, loaderHeaders: u }
    )
}
function Zf(e, t, n, r, o, i, l, s) {
    let { loaderData: a, errors: u } = iw(t, n, r, o, s)
    for (let c = 0; c < i.length; c++) {
        let { key: d, match: p, controller: w } = i[c]
        ee(
            l !== void 0 && l[c] !== void 0,
            "Did not find corresponding fetcher result"
        )
        let g = l[c]
        if (!(w && w.signal.aborted))
            if (qr(g)) {
                let v = Zo(e.matches, p == null ? void 0 : p.route.id)
                ;(u && u[v.route.id]) ||
                    (u = Le({}, u, { [v.route.id]: g.error })),
                    e.fetchers.delete(d)
            } else if (hr(g)) ee(!1, "Unhandled fetcher revalidation redirect")
            else if (pr(g)) ee(!1, "Unhandled fetcher deferred data")
            else {
                let v = In(g.data)
                e.fetchers.set(d, v)
            }
    }
    return { loaderData: a, errors: u }
}
function ep(e, t, n, r) {
    let o = Le({}, t)
    for (let i of n) {
        let l = i.route.id
        if (
            (t.hasOwnProperty(l)
                ? t[l] !== void 0 && (o[l] = t[l])
                : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
            r && r.hasOwnProperty(l))
        )
            break
    }
    return o
}
function Zo(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
            .reverse()
            .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    )
}
function tp(e) {
    let t =
        e.length === 1
            ? e[0]
            : e.find((n) => n.index || !n.path || n.path === "/") || {
                  id: "__shim-error-route__"
              }
    return {
        matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
        route: t
    }
}
function _t(e, t) {
    let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
        l = "Unknown Server Error",
        s = "Unknown @remix-run/router error"
    return (
        e === 400
            ? ((l = "Bad Request"),
              o && n && r
                  ? (s =
                        "You made a " +
                        o +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide a `loader` for route "' + r + '", ') +
                        "so there is no way to handle the request.")
                  : i === "defer-action"
                    ? (s = "defer() is not supported in actions")
                    : i === "invalid-body" &&
                      (s = "Unable to encode submission body"))
            : e === 403
              ? ((l = "Forbidden"),
                (s = 'Route "' + r + '" does not match URL "' + n + '"'))
              : e === 404
                ? ((l = "Not Found"), (s = 'No route matches URL "' + n + '"'))
                : e === 405 &&
                  ((l = "Method Not Allowed"),
                  o && n && r
                      ? (s =
                            "You made a " +
                            o.toUpperCase() +
                            ' request to "' +
                            n +
                            '" but ' +
                            ('did not provide an `action` for route "' +
                                r +
                                '", ') +
                            "so there is no way to handle the request.")
                      : o &&
                        (s =
                            'Invalid request method "' +
                            o.toUpperCase() +
                            '"')),
        new Jc(e || 500, l, new Error(s), !0)
    )
}
function np(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t]
        if (hr(n)) return { result: n, idx: t }
    }
}
function C0(e) {
    let t = typeof e == "string" ? jn(e) : e
    return Cr(Le({}, t, { hash: "" }))
}
function lw(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search
        ? !1
        : e.hash === ""
          ? t.hash !== ""
          : e.hash === t.hash
            ? !0
            : t.hash !== ""
}
function pr(e) {
    return e.type === Re.deferred
}
function qr(e) {
    return e.type === Re.error
}
function hr(e) {
    return (e && e.type) === Re.redirect
}
function sw(e) {
    let t = e
    return (
        t &&
        typeof t == "object" &&
        typeof t.data == "object" &&
        typeof t.subscribe == "function" &&
        typeof t.cancel == "function" &&
        typeof t.resolveData == "function"
    )
}
function aw(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.headers == "object" &&
        typeof e.body < "u"
    )
}
function uw(e) {
    return qv.has(e.toLowerCase())
}
function Bt(e) {
    return Qv.has(e.toLowerCase())
}
async function rp(e, t, n, r, o, i) {
    for (let l = 0; l < n.length; l++) {
        let s = n[l],
            a = t[l]
        if (!a) continue
        let u = e.find((d) => d.route.id === a.route.id),
            c = u != null && !k0(u, a) && (i && i[a.route.id]) !== void 0
        if (pr(s) && (o || c)) {
            let d = r[l]
            ee(
                d,
                "Expected an AbortSignal for revalidating fetcher deferred result"
            ),
                await j0(s, d, o).then((p) => {
                    p && (n[l] = p || n[l])
                })
        }
    }
}
async function j0(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: Re.data, data: e.deferredData.unwrappedData }
            } catch (o) {
                return { type: Re.error, error: o }
            }
        return { type: Re.data, data: e.deferredData.data }
    }
}
function Zc(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "")
}
function Iu(e, t) {
    let n = typeof t == "string" ? jn(t).search : t.search
    if (e[e.length - 1].route.index && Zc(n || "")) return e[e.length - 1]
    let r = v0(e)
    return r[r.length - 1]
}
function op(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: o,
        formData: i,
        json: l
    } = e
    if (!(!t || !n || !r)) {
        if (o != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: o
            }
        if (i != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: i,
                json: void 0,
                text: void 0
            }
        if (l !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: l,
                text: void 0
            }
    }
}
function _a(e, t) {
    return t
        ? {
              state: "loading",
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text
          }
        : {
              state: "loading",
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0
          }
}
function cw(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function Oo(e, t) {
    return e
        ? {
              state: "loading",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t
          }
        : {
              state: "loading",
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t
          }
}
function dw(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}
function In(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
function fw(e, t) {
    try {
        let n = e.sessionStorage.getItem(E0)
        if (n) {
            let r = JSON.parse(n)
            for (let [o, i] of Object.entries(r || {}))
                i && Array.isArray(i) && t.set(o, new Set(i || []))
        }
    } catch {}
}
function pw(e, t) {
    if (t.size > 0) {
        let n = {}
        for (let [r, o] of t) n[r] = [...o]
        try {
            e.sessionStorage.setItem(E0, JSON.stringify(n))
        } catch (r) {
            kr(
                !1,
                "Failed to save applied view transitions in sessionStorage (" +
                    r +
                    ")."
            )
        }
    }
}
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wi() {
    return (
        (wi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        wi.apply(this, arguments)
    )
}
const ys = E.createContext(null),
    P0 = E.createContext(null),
    Rr = E.createContext(null),
    vs = E.createContext(null),
    Pn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    _0 = E.createContext(null)
function hw(e, t) {
    let { relative: n } = t === void 0 ? {} : t
    Ni() || ee(!1)
    let { basename: r, navigator: o } = E.useContext(Rr),
        { hash: i, pathname: l, search: s } = R0(e, { relative: n }),
        a = l
    return (
        r !== "/" && (a = l === "/" ? r : vn([r, l])),
        o.createHref({ pathname: a, search: s, hash: i })
    )
}
function Ni() {
    return E.useContext(vs) != null
}
function ws() {
    return Ni() || ee(!1), E.useContext(vs).location
}
function N0(e) {
    E.useContext(Rr).static || E.useLayoutEffect(e)
}
function mw() {
    let { isDataRoute: e } = E.useContext(Pn)
    return e ? bw() : gw()
}
function gw() {
    Ni() || ee(!1)
    let e = E.useContext(ys),
        { basename: t, future: n, navigator: r } = E.useContext(Rr),
        { matches: o } = E.useContext(Pn),
        { pathname: i } = ws(),
        l = JSON.stringify(qc(o, n.v7_relativeSplatPath)),
        s = E.useRef(!1)
    return (
        N0(() => {
            s.current = !0
        }),
        E.useCallback(
            function (u, c) {
                if ((c === void 0 && (c = {}), !s.current)) return
                if (typeof u == "number") {
                    r.go(u)
                    return
                }
                let d = Xc(u, JSON.parse(l), i, c.relative === "path")
                e == null &&
                    t !== "/" &&
                    (d.pathname = d.pathname === "/" ? t : vn([t, d.pathname])),
                    (c.replace ? r.replace : r.push)(d, c.state, c)
            },
            [t, r, l, i, e]
        )
    )
}
const yw = E.createContext(null)
function vw(e) {
    let t = E.useContext(Pn).outlet
    return t && E.createElement(yw.Provider, { value: e }, t)
}
function ww() {
    let { matches: e } = E.useContext(Pn),
        t = e[e.length - 1]
    return t ? t.params : {}
}
function R0(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { future: r } = E.useContext(Rr),
        { matches: o } = E.useContext(Pn),
        { pathname: i } = ws(),
        l = JSON.stringify(qc(o, r.v7_relativeSplatPath))
    return E.useMemo(() => Xc(e, JSON.parse(l), i, n === "path"), [e, l, i, n])
}
function xw(e, t, n, r) {
    Ni() || ee(!1)
    let { navigator: o } = E.useContext(Rr),
        { matches: i } = E.useContext(Pn),
        l = i[i.length - 1],
        s = l ? l.params : {}
    l && l.pathname
    let a = l ? l.pathnameBase : "/"
    l && l.route
    let u = ws(),
        c
    if (t) {
        var d
        let S = typeof t == "string" ? jn(t) : t
        a === "/" || ((d = S.pathname) != null && d.startsWith(a)) || ee(!1),
            (c = S)
    } else c = u
    let p = c.pathname || "/",
        w = a === "/" ? p : p.slice(a.length) || "/",
        g = Yr(e, { pathname: w }),
        v = jw(
            g &&
                g.map((S) =>
                    Object.assign({}, S, {
                        params: Object.assign({}, s, S.params),
                        pathname: vn([
                            a,
                            o.encodeLocation
                                ? o.encodeLocation(S.pathname).pathname
                                : S.pathname
                        ]),
                        pathnameBase:
                            S.pathnameBase === "/"
                                ? a
                                : vn([
                                      a,
                                      o.encodeLocation
                                          ? o.encodeLocation(S.pathnameBase)
                                                .pathname
                                          : S.pathnameBase
                                  ])
                    })
                ),
            i,
            n,
            r
        )
    return t && v
        ? E.createElement(
              vs.Provider,
              {
                  value: {
                      location: wi(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default"
                          },
                          c
                      ),
                      navigationType: Oe.Pop
                  }
              },
              v
          )
        : v
}
function Sw() {
    let e = Rw(),
        t = w0(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }
    return E.createElement(
        E.Fragment,
        null,
        E.createElement("h2", null, "Unexpected Application Error!"),
        E.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? E.createElement("pre", { style: o }, n) : null,
        null
    )
}
const Ew = E.createElement(Sw, null)
class kw extends E.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            })
    }
    static getDerivedStateFromError(t) {
        return { error: t }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation
              }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation
              }
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n
        )
    }
    render() {
        return this.state.error !== void 0
            ? E.createElement(
                  Pn.Provider,
                  { value: this.props.routeContext },
                  E.createElement(_0.Provider, {
                      value: this.state.error,
                      children: this.props.component
                  })
              )
            : this.props.children
    }
}
function Cw(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = E.useContext(ys)
    return (
        o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        E.createElement(Pn.Provider, { value: t }, r)
    )
}
function jw(e, t, n, r) {
    var o
    if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null)
    ) {
        var i
        if ((i = n) != null && i.errors) e = n.matches
        else return null
    }
    let l = e,
        s = (o = n) == null ? void 0 : o.errors
    if (s != null) {
        let c = l.findIndex(
            (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
        )
        c >= 0 || ee(!1), (l = l.slice(0, Math.min(l.length, c + 1)))
    }
    let a = !1,
        u = -1
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < l.length; c++) {
            let d = l[c]
            if (
                ((d.route.HydrateFallback || d.route.hydrateFallbackElement) &&
                    (u = c),
                d.route.id)
            ) {
                let { loaderData: p, errors: w } = n,
                    g =
                        d.route.loader &&
                        p[d.route.id] === void 0 &&
                        (!w || w[d.route.id] === void 0)
                if (d.route.lazy || g) {
                    ;(a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]])
                    break
                }
            }
        }
    return l.reduceRight((c, d, p) => {
        let w,
            g = !1,
            v = null,
            S = null
        n &&
            ((w = s && d.route.id ? s[d.route.id] : void 0),
            (v = d.route.errorElement || Ew),
            a &&
                (u < 0 && p === 0
                    ? (Lw("route-fallback", !1), (g = !0), (S = null))
                    : u === p &&
                      ((g = !0), (S = d.route.hydrateFallbackElement || null))))
        let m = t.concat(l.slice(0, p + 1)),
            h = () => {
                let y
                return (
                    w
                        ? (y = v)
                        : g
                          ? (y = S)
                          : d.route.Component
                            ? (y = E.createElement(d.route.Component, null))
                            : d.route.element
                              ? (y = d.route.element)
                              : (y = c),
                    E.createElement(Cw, {
                        match: d,
                        routeContext: {
                            outlet: c,
                            matches: m,
                            isDataRoute: n != null
                        },
                        children: y
                    })
                )
            }
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
            ? E.createElement(kw, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: v,
                  error: w,
                  children: h(),
                  routeContext: { outlet: null, matches: m, isDataRoute: !0 }
              })
            : h()
    }, null)
}
var b0 = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        )
    })(b0 || {}),
    Ql = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        )
    })(Ql || {})
function Pw(e) {
    let t = E.useContext(ys)
    return t || ee(!1), t
}
function _w(e) {
    let t = E.useContext(P0)
    return t || ee(!1), t
}
function Nw(e) {
    let t = E.useContext(Pn)
    return t || ee(!1), t
}
function L0(e) {
    let t = Nw(),
        n = t.matches[t.matches.length - 1]
    return n.route.id || ee(!1), n.route.id
}
function Rw() {
    var e
    let t = E.useContext(_0),
        n = _w(Ql.UseRouteError),
        r = L0(Ql.UseRouteError)
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function bw() {
    let { router: e } = Pw(b0.UseNavigateStable),
        t = L0(Ql.UseNavigateStable),
        n = E.useRef(!1)
    return (
        N0(() => {
            n.current = !0
        }),
        E.useCallback(
            function (o, i) {
                i === void 0 && (i = {}),
                    n.current &&
                        (typeof o == "number"
                            ? e.navigate(o)
                            : e.navigate(o, wi({ fromRouteId: t }, i)))
            },
            [e, t]
        )
    )
}
const ip = {}
function Lw(e, t, n) {
    !t && !ip[e] && (ip[e] = !0)
}
function Tw(e) {
    return vw(e.context)
}
function Zt(e) {
    ee(!1)
}
function zw(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Oe.Pop,
        navigator: i,
        static: l = !1,
        future: s
    } = e
    Ni() && ee(!1)
    let a = t.replace(/^\/*/, "/"),
        u = E.useMemo(
            () => ({
                basename: a,
                navigator: i,
                static: l,
                future: wi({ v7_relativeSplatPath: !1 }, s)
            }),
            [a, s, i, l]
        )
    typeof r == "string" && (r = jn(r))
    let {
            pathname: c = "/",
            search: d = "",
            hash: p = "",
            state: w = null,
            key: g = "default"
        } = r,
        v = E.useMemo(() => {
            let S = go(c, a)
            return S == null
                ? null
                : {
                      location: {
                          pathname: S,
                          search: d,
                          hash: p,
                          state: w,
                          key: g
                      },
                      navigationType: o
                  }
        }, [a, c, d, p, w, g, o])
    return v == null
        ? null
        : E.createElement(
              Rr.Provider,
              { value: u },
              E.createElement(vs.Provider, { children: n, value: v })
          )
}
new Promise(() => {})
function Du(e, t) {
    t === void 0 && (t = [])
    let n = []
    return (
        E.Children.forEach(e, (r, o) => {
            if (!E.isValidElement(r)) return
            let i = [...t, o]
            if (r.type === E.Fragment) {
                n.push.apply(n, Du(r.props.children, i))
                return
            }
            r.type !== Zt && ee(!1),
                !r.props.index || !r.props.children || ee(!1)
            let l = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary:
                    r.props.ErrorBoundary != null ||
                    r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy
            }
            r.props.children && (l.children = Du(r.props.children, i)),
                n.push(l)
        }),
        n
    )
}
function $w(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    }
    return (
        e.Component &&
            Object.assign(t, {
                element: E.createElement(e.Component),
                Component: void 0
            }),
        e.HydrateFallback &&
            Object.assign(t, {
                hydrateFallbackElement: E.createElement(e.HydrateFallback),
                HydrateFallback: void 0
            }),
        e.ErrorBoundary &&
            Object.assign(t, {
                errorElement: E.createElement(e.ErrorBoundary),
                ErrorBoundary: void 0
            }),
        t
    )
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xi() {
    return (
        (xi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        xi.apply(this, arguments)
    )
}
function Ow(e, t) {
    if (e == null) return {}
    var n = {},
        r = Object.keys(e),
        o,
        i
    for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
    return n
}
function Mw(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Iw(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Mw(e)
}
const Dw = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition"
    ],
    Aw = "6"
try {
    window.__reactRouterVersion = Aw
} catch {}
function Fw(e, t) {
    return tw({
        basename: t == null ? void 0 : t.basename,
        future: xi({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: kv({ window: t == null ? void 0 : t.window }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || Bw(),
        routes: e,
        mapRouteProperties: $w,
        window: t == null ? void 0 : t.window
    }).initialize()
}
function Bw() {
    var e
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
    return t && t.errors && (t = xi({}, t, { errors: Uw(t.errors) })), t
}
function Uw(e) {
    if (!e) return null
    let t = Object.entries(e),
        n = {}
    for (let [r, o] of t)
        if (o && o.__type === "RouteErrorResponse")
            n[r] = new Jc(o.status, o.statusText, o.data, o.internal === !0)
        else if (o && o.__type === "Error") {
            if (o.__subType) {
                let i = window[o.__subType]
                if (typeof i == "function")
                    try {
                        let l = new i(o.message)
                        ;(l.stack = ""), (n[r] = l)
                    } catch {}
            }
            if (n[r] == null) {
                let i = new Error(o.message)
                ;(i.stack = ""), (n[r] = i)
            }
        } else n[r] = o
    return n
}
const Hw = E.createContext({ isTransitioning: !1 }),
    Ww = E.createContext(new Map()),
    Vw = "startTransition",
    lp = d1[Vw],
    Gw = "flushSync",
    sp = Ev[Gw]
function Kw(e) {
    lp ? lp(e) : e()
}
function Mo(e) {
    sp ? sp(e) : e()
}
class Qw {
    constructor() {
        ;(this.status = "pending"),
            (this.promise = new Promise((t, n) => {
                ;(this.resolve = (r) => {
                    this.status === "pending" &&
                        ((this.status = "resolved"), t(r))
                }),
                    (this.reject = (r) => {
                        this.status === "pending" &&
                            ((this.status = "rejected"), n(r))
                    })
            }))
    }
}
function Yw(e) {
    let { fallbackElement: t, router: n, future: r } = e,
        [o, i] = E.useState(n.state),
        [l, s] = E.useState(),
        [a, u] = E.useState({ isTransitioning: !1 }),
        [c, d] = E.useState(),
        [p, w] = E.useState(),
        [g, v] = E.useState(),
        S = E.useRef(new Map()),
        { v7_startTransition: m } = r || {},
        h = E.useCallback(
            (_) => {
                m ? Kw(_) : _()
            },
            [m]
        ),
        y = E.useCallback(
            (_, T) => {
                let {
                    deletedFetchers: M,
                    unstable_flushSync: F,
                    unstable_viewTransitionOpts: V
                } = T
                M.forEach((te) => S.current.delete(te)),
                    _.fetchers.forEach((te, ue) => {
                        te.data !== void 0 && S.current.set(ue, te.data)
                    })
                let ie =
                    n.window == null ||
                    typeof n.window.document.startViewTransition != "function"
                if (!V || ie) {
                    F ? Mo(() => i(_)) : h(() => i(_))
                    return
                }
                if (F) {
                    Mo(() => {
                        p && (c && c.resolve(), p.skipTransition()),
                            u({
                                isTransitioning: !0,
                                flushSync: !0,
                                currentLocation: V.currentLocation,
                                nextLocation: V.nextLocation
                            })
                    })
                    let te = n.window.document.startViewTransition(() => {
                        Mo(() => i(_))
                    })
                    te.finished.finally(() => {
                        Mo(() => {
                            d(void 0),
                                w(void 0),
                                s(void 0),
                                u({ isTransitioning: !1 })
                        })
                    }),
                        Mo(() => w(te))
                    return
                }
                p
                    ? (c && c.resolve(),
                      p.skipTransition(),
                      v({
                          state: _,
                          currentLocation: V.currentLocation,
                          nextLocation: V.nextLocation
                      }))
                    : (s(_),
                      u({
                          isTransitioning: !0,
                          flushSync: !1,
                          currentLocation: V.currentLocation,
                          nextLocation: V.nextLocation
                      }))
            },
            [n.window, p, c, S, h]
        )
    E.useLayoutEffect(() => n.subscribe(y), [n, y]),
        E.useEffect(() => {
            a.isTransitioning && !a.flushSync && d(new Qw())
        }, [a]),
        E.useEffect(() => {
            if (c && l && n.window) {
                let _ = l,
                    T = c.promise,
                    M = n.window.document.startViewTransition(async () => {
                        h(() => i(_)), await T
                    })
                M.finished.finally(() => {
                    d(void 0), w(void 0), s(void 0), u({ isTransitioning: !1 })
                }),
                    w(M)
            }
        }, [h, l, c, n.window]),
        E.useEffect(() => {
            c && l && o.location.key === l.location.key && c.resolve()
        }, [c, p, o.location, l]),
        E.useEffect(() => {
            !a.isTransitioning &&
                g &&
                (s(g.state),
                u({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: g.currentLocation,
                    nextLocation: g.nextLocation
                }),
                v(void 0))
        }, [a.isTransitioning, g]),
        E.useEffect(() => {}, [])
    let C = E.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (_) => n.navigate(_),
                push: (_, T, M) =>
                    n.navigate(_, {
                        state: T,
                        preventScrollReset:
                            M == null ? void 0 : M.preventScrollReset
                    }),
                replace: (_, T, M) =>
                    n.navigate(_, {
                        replace: !0,
                        state: T,
                        preventScrollReset:
                            M == null ? void 0 : M.preventScrollReset
                    })
            }),
            [n]
        ),
        R = n.basename || "/",
        x = E.useMemo(
            () => ({ router: n, navigator: C, static: !1, basename: R }),
            [n, C, R]
        )
    return E.createElement(
        E.Fragment,
        null,
        E.createElement(
            ys.Provider,
            { value: x },
            E.createElement(
                P0.Provider,
                { value: o },
                E.createElement(
                    Ww.Provider,
                    { value: S.current },
                    E.createElement(
                        Hw.Provider,
                        { value: a },
                        E.createElement(
                            zw,
                            {
                                basename: R,
                                location: o.location,
                                navigationType: o.historyAction,
                                navigator: C,
                                future: {
                                    v7_relativeSplatPath:
                                        n.future.v7_relativeSplatPath
                                }
                            },
                            o.initialized || n.future.v7_partialHydration
                                ? E.createElement(qw, {
                                      routes: n.routes,
                                      future: n.future,
                                      state: o
                                  })
                                : t
                        )
                    )
                )
            )
        ),
        null
    )
}
function qw(e) {
    let { routes: t, future: n, state: r } = e
    return xw(t, void 0, r, n)
}
const Xw =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    Jw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    wt = E.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: o,
                reloadDocument: i,
                replace: l,
                state: s,
                target: a,
                to: u,
                preventScrollReset: c,
                unstable_viewTransition: d
            } = t,
            p = Ow(t, Dw),
            { basename: w } = E.useContext(Rr),
            g,
            v = !1
        if (typeof u == "string" && Jw.test(u) && ((g = u), Xw))
            try {
                let y = new URL(window.location.href),
                    C = u.startsWith("//")
                        ? new URL(y.protocol + u)
                        : new URL(u),
                    R = go(C.pathname, w)
                C.origin === y.origin && R != null
                    ? (u = R + C.search + C.hash)
                    : (v = !0)
            } catch {}
        let S = hw(u, { relative: o }),
            m = Zw(u, {
                replace: l,
                state: s,
                target: a,
                preventScrollReset: c,
                relative: o,
                unstable_viewTransition: d
            })
        function h(y) {
            r && r(y), y.defaultPrevented || m(y)
        }
        return E.createElement(
            "a",
            xi({}, p, {
                href: g || S,
                onClick: v || i ? r : h,
                ref: n,
                target: a
            })
        )
    })
var ap
;(function (e) {
    ;(e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState")
})(ap || (ap = {}))
var up
;(function (e) {
    ;(e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration")
})(up || (up = {}))
function Zw(e, t) {
    let {
            target: n,
            replace: r,
            state: o,
            preventScrollReset: i,
            relative: l,
            unstable_viewTransition: s
        } = t === void 0 ? {} : t,
        a = mw(),
        u = ws(),
        c = R0(e, { relative: l })
    return E.useCallback(
        (d) => {
            if (Iw(d, n)) {
                d.preventDefault()
                let p = r !== void 0 ? r : Cr(u) === Cr(c)
                a(e, {
                    replace: p,
                    state: o,
                    preventScrollReset: i,
                    relative: l,
                    unstable_viewTransition: s
                })
            }
        },
        [u, a, c, r, o, n, e, i, l, s]
    )
}
function rt(e) {
    return Object.keys(e)
}
function Na(e) {
    return e && typeof e == "object" && !Array.isArray(e)
}
function ed(e, t) {
    const n = { ...e },
        r = t
    return (
        Na(e) &&
            Na(t) &&
            Object.keys(t).forEach((o) => {
                Na(r[o]) && o in e ? (n[o] = ed(n[o], r[o])) : (n[o] = r[o])
            }),
        n
    )
}
function ex(e) {
    return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
}
function tx(e) {
    var t
    return typeof e != "string" || !e.includes("var(--mantine-scale)")
        ? e
        : (t = e.match(/^calc\((.*?)\)$/)) == null
          ? void 0
          : t[1].split("*")[0].trim()
}
function Au(e) {
    const t = tx(e)
    return typeof t == "number"
        ? t
        : typeof t == "string"
          ? t.includes("calc") || t.includes("var")
              ? t
              : t.includes("px")
                ? Number(t.replace("px", ""))
                : t.includes("rem")
                  ? Number(t.replace("rem", "")) * 16
                  : t.includes("em")
                    ? Number(t.replace("em", "")) * 16
                    : Number(t)
          : NaN
}
function Ra(e) {
    return `calc(${e} * var(--mantine-scale))`
}
function T0(e, { shouldScale: t = !1 } = {}) {
    function n(r) {
        if (r === 0 || r === "0") return `0${e}`
        if (typeof r == "number") {
            const o = `${r / 16}${e}`
            return t ? Ra(o) : o
        }
        if (typeof r == "string") {
            if (
                r.startsWith("calc(") ||
                r.startsWith("var(") ||
                r.startsWith("clamp(")
            )
                return r
            if (r.includes(" "))
                return r
                    .split(" ")
                    .map((i) => n(i))
                    .join(" ")
            if (r.includes(e)) return t ? Ra(r) : r
            const o = r.replace("px", "")
            if (!Number.isNaN(Number(o))) {
                const i = `${Number(o) / 16}${e}`
                return t ? Ra(i) : i
            }
        }
        return r
    }
    return n
}
const L = T0("rem", { shouldScale: !0 }),
    cp = T0("em")
function yo(e) {
    return Object.keys(e).reduce(
        (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
        {}
    )
}
function z0(e) {
    return typeof e == "number"
        ? !0
        : typeof e == "string"
          ? e.startsWith("calc(") ||
            e.startsWith("var(") ||
            (e.includes(" ") && e.trim() !== "")
              ? !0
              : /[0-9]/.test(e.trim().replace("-", "")[0])
          : !1
}
function td(e) {
    const t = E.createContext(null)
    return [
        ({ children: o, value: i }) =>
            P.createElement(t.Provider, { value: i }, o),
        () => {
            const o = E.useContext(t)
            if (o === null) throw new Error(e)
            return o
        }
    ]
}
function nx(e = null) {
    const t = E.createContext(e)
    return [
        ({ children: o, value: i }) =>
            P.createElement(t.Provider, { value: i }, o),
        () => E.useContext(t)
    ]
}
function De(e, t = "size", n = !0) {
    if (e !== void 0) return z0(e) ? (n ? L(e) : e) : `var(--${t}-${e})`
}
function jr(e) {
    return De(e, "mantine-spacing")
}
function _n(e) {
    return e === void 0
        ? "var(--mantine-radius-default)"
        : De(e, "mantine-radius")
}
function Gt(e) {
    return De(e, "mantine-font-size")
}
function rx(e) {
    return De(e, "mantine-line-height", !1)
}
function ox(e) {
    if (e) return De(e, "mantine-shadow", !1)
}
function ol(e, t) {
    return (n) => {
        e == null || e(n), t == null || t(n)
    }
}
function ix(e, t) {
    return e in t.breakpoints ? Au(t.breakpoints[e]) : Au(e)
}
function $0(e, t) {
    const n = e.map((r) => ({ value: r, px: ix(r, t) }))
    return n.sort((r, o) => r.px - o.px), n
}
function Ho(e) {
    return typeof e == "object" && e !== null
        ? "base" in e
            ? e.base
            : void 0
        : e
}
var lx = {}
function sx() {
    return typeof process < "u" && lx ? "production" : "development"
}
function O0(e) {
    var t,
        n,
        r = ""
    if (typeof e == "string" || typeof e == "number") r += e
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = O0(e[t])) && (r && (r += " "), (r += n))
        else for (t in e) e[t] && (r && (r += " "), (r += t))
    return r
}
function ln() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = O0(e)) && (r && (r += " "), (r += t))
    return r
}
const ax = {}
function ux(e) {
    const t = {}
    return (
        e.forEach((n) => {
            Object.entries(n).forEach(([r, o]) => {
                t[r] ? (t[r] = ln(t[r], o)) : (t[r] = o)
            })
        }),
        t
    )
}
function xs({ theme: e, classNames: t, props: n, stylesCtx: r }) {
    const i = (Array.isArray(t) ? t : [t]).map((l) =>
        typeof l == "function" ? l(e, n, r) : l || ax
    )
    return ux(i)
}
function Yl({ theme: e, styles: t, props: n, stylesCtx: r }) {
    return (Array.isArray(t) ? t : [t]).reduce(
        (i, l) =>
            typeof l == "function" ? { ...i, ...l(e, n, r) } : { ...i, ...l },
        {}
    )
}
function cx() {
    return `mantine-${Math.random().toString(36).slice(2, 11)}`
}
const nd = typeof document < "u" ? E.useLayoutEffect : E.useEffect,
    dx = P.useId || (() => {})
function fx() {
    const e = dx()
    return e ? `mantine-${e.replace(/:/g, "")}` : ""
}
function M0(e) {
    const t = fx(),
        [n, r] = E.useState(t)
    return (
        nd(() => {
            r(cx())
        }, []),
        typeof e == "string" ? e : typeof window > "u" ? t : n
    )
}
function I0({
    value: e,
    defaultValue: t,
    finalValue: n,
    onChange: r = () => {}
}) {
    const [o, i] = E.useState(t !== void 0 ? t : n),
        l = (s, ...a) => {
            i(s), r == null || r(s, ...a)
        }
    return e !== void 0 ? [e, r, !0] : [o, l, !1]
}
function On(e, t) {
    const n = t - e + 1
    return Array.from({ length: n }, (r, o) => o + e)
}
const il = "dots"
function px({
    total: e,
    siblings: t = 1,
    boundaries: n = 1,
    page: r,
    initialPage: o = 1,
    onChange: i
}) {
    const l = Math.max(Math.trunc(e), 0),
        [s, a] = I0({ value: r, onChange: i, defaultValue: o, finalValue: o }),
        u = (v) => {
            v <= 0 ? a(1) : v > l ? a(l) : a(v)
        },
        c = () => u(s + 1),
        d = () => u(s - 1),
        p = () => u(1),
        w = () => u(l)
    return {
        range: E.useMemo(() => {
            if (t * 2 + 3 + n * 2 >= l) return On(1, l)
            const S = Math.max(s - t, n),
                m = Math.min(s + t, l - n),
                h = S > n + 2,
                y = m < l - (n + 1)
            if (!h && y) {
                const C = t * 2 + n + 2
                return [...On(1, C), il, ...On(l - (n - 1), l)]
            }
            if (h && !y) {
                const C = n + 1 + 2 * t
                return [...On(1, n), il, ...On(l - C, l)]
            }
            return [...On(1, n), il, ...On(S, m), il, ...On(l - n + 1, l)]
        }, [l, t, s]),
        active: s,
        setPage: u,
        next: c,
        previous: d,
        first: p,
        last: w
    }
}
const D0 = E.createContext(null)
function rd() {
    const e = E.useContext(D0)
    if (!e)
        throw new Error("[@mantine/core] MantineProvider was not found in tree")
    return e
}
function hx() {
    return rd().cssVariablesResolver
}
function mx() {
    return rd().classNamesPrefix
}
function od() {
    return rd().getStyleNonce
}
function gx(e) {
    return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)
}
function yx(e) {
    let t = e.replace("#", "")
    if (t.length === 3) {
        const l = t.split("")
        t = [l[0], l[0], l[1], l[1], l[2], l[2]].join("")
    }
    if (t.length === 8) {
        const l = parseInt(t.slice(6, 8), 16) / 255
        return {
            r: parseInt(t.slice(0, 2), 16),
            g: parseInt(t.slice(2, 4), 16),
            b: parseInt(t.slice(4, 6), 16),
            a: l
        }
    }
    const n = parseInt(t, 16),
        r = (n >> 16) & 255,
        o = (n >> 8) & 255,
        i = n & 255
    return { r, g: o, b: i, a: 1 }
}
function vx(e) {
    const [t, n, r, o] = e
        .replace(/[^0-9,./]/g, "")
        .split(/[/,]/)
        .map(Number)
    return { r: t, g: n, b: r, a: o || 1 }
}
function wx(e) {
    const t =
            /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
        n = e.match(t)
    if (!n) return { r: 0, g: 0, b: 0, a: 1 }
    const r = parseInt(n[1], 10),
        o = parseInt(n[2], 10) / 100,
        i = parseInt(n[3], 10) / 100,
        l = n[5] ? parseFloat(n[5]) : void 0,
        s = (1 - Math.abs(2 * i - 1)) * o,
        a = r / 60,
        u = s * (1 - Math.abs((a % 2) - 1)),
        c = i - s / 2
    let d, p, w
    return (
        a >= 0 && a < 1
            ? ((d = s), (p = u), (w = 0))
            : a >= 1 && a < 2
              ? ((d = u), (p = s), (w = 0))
              : a >= 2 && a < 3
                ? ((d = 0), (p = s), (w = u))
                : a >= 3 && a < 4
                  ? ((d = 0), (p = u), (w = s))
                  : a >= 4 && a < 5
                    ? ((d = u), (p = 0), (w = s))
                    : ((d = s), (p = 0), (w = u)),
        {
            r: Math.round((d + c) * 255),
            g: Math.round((p + c) * 255),
            b: Math.round((w + c) * 255),
            a: l || 1
        }
    )
}
function id(e) {
    return gx(e)
        ? yx(e)
        : e.startsWith("rgb")
          ? vx(e)
          : e.startsWith("hsl")
            ? wx(e)
            : { r: 0, g: 0, b: 0, a: 1 }
}
function ll(e, t) {
    if (e.startsWith("var("))
        return `color-mix(in srgb, ${e}, black ${t * 100}%)`
    const { r: n, g: r, b: o, a: i } = id(e),
        l = 1 - t,
        s = (a) => Math.round(a * l)
    return `rgba(${s(n)}, ${s(r)}, ${s(o)}, ${i})`
}
function ql(e, t) {
    return typeof e.primaryShade == "number"
        ? e.primaryShade
        : t === "dark"
          ? e.primaryShade.dark
          : e.primaryShade.light
}
function ba(e) {
    return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4
}
function xx(e) {
    const t = e.match(/oklch\((.*?)%\s/)
    return t ? parseFloat(t[1]) : null
}
function Sx(e) {
    if (e.startsWith("oklch(")) return (xx(e) || 0) / 100
    const { r: t, g: n, b: r } = id(e),
        o = t / 255,
        i = n / 255,
        l = r / 255,
        s = ba(o),
        a = ba(i),
        u = ba(l)
    return 0.2126 * s + 0.7152 * a + 0.0722 * u
}
function Io(e, t = 0.179) {
    return e.startsWith("var(") ? !1 : Sx(e) > t
}
function Ri({ color: e, theme: t, colorScheme: n }) {
    if (typeof e != "string")
        throw new Error(
            `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`
        )
    if (e === "bright")
        return {
            color: e,
            value: n === "dark" ? t.white : t.black,
            shade: void 0,
            isThemeColor: !1,
            isLight: Io(n === "dark" ? t.white : t.black, t.luminanceThreshold),
            variable: "--mantine-color-bright"
        }
    if (e === "dimmed")
        return {
            color: e,
            value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
            shade: void 0,
            isThemeColor: !1,
            isLight: Io(
                n === "dark" ? t.colors.dark[2] : t.colors.gray[6],
                t.luminanceThreshold
            ),
            variable: "--mantine-color-dimmed"
        }
    if (e === "white" || e === "black")
        return {
            color: e,
            value: e === "white" ? t.white : t.black,
            shade: void 0,
            isThemeColor: !1,
            isLight: Io(
                e === "white" ? t.white : t.black,
                t.luminanceThreshold
            ),
            variable: `--mantine-color-${e}`
        }
    const [r, o] = e.split("."),
        i = o ? Number(o) : void 0,
        l = r in t.colors
    if (l) {
        const s =
            i !== void 0 ? t.colors[r][i] : t.colors[r][ql(t, n || "light")]
        return {
            color: r,
            value: s,
            shade: i,
            isThemeColor: l,
            isLight: Io(s, t.luminanceThreshold),
            variable: o
                ? `--mantine-color-${r}-${i}`
                : `--mantine-color-${r}-filled`
        }
    }
    return {
        color: e,
        value: e,
        isThemeColor: l,
        isLight: Io(e, t.luminanceThreshold),
        shade: i,
        variable: void 0
    }
}
function Pr(e, t) {
    const n = Ri({ color: e || t.primaryColor, theme: t })
    return n.variable ? `var(${n.variable})` : e
}
function Fu(e, t) {
    const n = {
            from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
            to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
            deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
        },
        r = Pr(n.from, t),
        o = Pr(n.to, t)
    return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`
}
function dt(e, t) {
    if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)"
    if (e.startsWith("var(")) {
        const i = (1 - t) * 100
        return `color-mix(in srgb, ${e}, transparent ${i}%)`
    }
    if (e.startsWith("oklch"))
        return e.includes("/")
            ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
            : e.replace(")", ` / ${t})`)
    const { r: n, g: r, b: o } = id(e)
    return `rgba(${n}, ${r}, ${o}, ${t})`
}
const Ex = ({
        color: e,
        theme: t,
        variant: n,
        gradient: r,
        autoContrast: o
    }) => {
        const i = Ri({ color: e, theme: t }),
            l = typeof o == "boolean" ? o : t.autoContrast
        if (n === "filled") {
            const s =
                l && i.isLight
                    ? "var(--mantine-color-black)"
                    : "var(--mantine-color-white)"
            return i.isThemeColor
                ? i.shade === void 0
                    ? {
                          background: `var(--mantine-color-${e}-filled)`,
                          hover: `var(--mantine-color-${e}-filled-hover)`,
                          color: s,
                          border: `${L(1)} solid transparent`
                      }
                    : {
                          background: `var(--mantine-color-${i.color}-${i.shade})`,
                          hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
                          color: s,
                          border: `${L(1)} solid transparent`
                      }
                : {
                      background: e,
                      hover: ll(e, 0.1),
                      color: s,
                      border: `${L(1)} solid transparent`
                  }
        }
        if (n === "light") {
            if (i.isThemeColor) {
                if (i.shade === void 0)
                    return {
                        background: `var(--mantine-color-${e}-light)`,
                        hover: `var(--mantine-color-${e}-light-hover)`,
                        color: `var(--mantine-color-${e}-light-color)`,
                        border: `${L(1)} solid transparent`
                    }
                const s = t.colors[i.color][i.shade]
                return {
                    background: dt(s, 0.1),
                    hover: dt(s, 0.12),
                    color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
                    border: `${L(1)} solid transparent`
                }
            }
            return {
                background: dt(e, 0.1),
                hover: dt(e, 0.12),
                color: e,
                border: `${L(1)} solid transparent`
            }
        }
        if (n === "outline")
            return i.isThemeColor
                ? i.shade === void 0
                    ? {
                          background: "transparent",
                          hover: `var(--mantine-color-${e}-outline-hover)`,
                          color: `var(--mantine-color-${e}-outline)`,
                          border: `${L(1)} solid var(--mantine-color-${e}-outline)`
                      }
                    : {
                          background: "transparent",
                          hover: dt(t.colors[i.color][i.shade], 0.05),
                          color: `var(--mantine-color-${i.color}-${i.shade})`,
                          border: `${L(1)} solid var(--mantine-color-${i.color}-${i.shade})`
                      }
                : {
                      background: "transparent",
                      hover: dt(e, 0.05),
                      color: e,
                      border: `${L(1)} solid ${e}`
                  }
        if (n === "subtle") {
            if (i.isThemeColor) {
                if (i.shade === void 0)
                    return {
                        background: "transparent",
                        hover: `var(--mantine-color-${e}-light-hover)`,
                        color: `var(--mantine-color-${e}-light-color)`,
                        border: `${L(1)} solid transparent`
                    }
                const s = t.colors[i.color][i.shade]
                return {
                    background: "transparent",
                    hover: dt(s, 0.12),
                    color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
                    border: `${L(1)} solid transparent`
                }
            }
            return {
                background: "transparent",
                hover: dt(e, 0.12),
                color: e,
                border: `${L(1)} solid transparent`
            }
        }
        return n === "transparent"
            ? i.isThemeColor
                ? i.shade === void 0
                    ? {
                          background: "transparent",
                          hover: "transparent",
                          color: `var(--mantine-color-${e}-light-color)`,
                          border: `${L(1)} solid transparent`
                      }
                    : {
                          background: "transparent",
                          hover: "transparent",
                          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
                          border: `${L(1)} solid transparent`
                      }
                : {
                      background: "transparent",
                      hover: "transparent",
                      color: e,
                      border: `${L(1)} solid transparent`
                  }
            : n === "white"
              ? i.isThemeColor
                  ? i.shade === void 0
                      ? {
                            background: "var(--mantine-color-white)",
                            hover: ll(t.white, 0.01),
                            color: `var(--mantine-color-${e}-filled)`,
                            border: `${L(1)} solid transparent`
                        }
                      : {
                            background: "var(--mantine-color-white)",
                            hover: ll(t.white, 0.01),
                            color: `var(--mantine-color-${i.color}-${i.shade})`,
                            border: `${L(1)} solid transparent`
                        }
                  : {
                        background: "var(--mantine-color-white)",
                        hover: ll(t.white, 0.01),
                        color: e,
                        border: `${L(1)} solid transparent`
                    }
              : n === "gradient"
                ? {
                      background: Fu(r, t),
                      hover: Fu(r, t),
                      color: "var(--mantine-color-white)",
                      border: "none"
                  }
                : n === "default"
                  ? {
                        background: "var(--mantine-color-default)",
                        hover: "var(--mantine-color-default-hover)",
                        color: "var(--mantine-color-default-color)",
                        border: `${L(1)} solid var(--mantine-color-default-border)`
                    }
                  : {}
    },
    kx = {
        dark: [
            "#C9C9C9",
            "#b8b8b8",
            "#828282",
            "#696969",
            "#424242",
            "#3b3b3b",
            "#2e2e2e",
            "#242424",
            "#1f1f1f",
            "#141414"
        ],
        gray: [
            "#f8f9fa",
            "#f1f3f5",
            "#e9ecef",
            "#dee2e6",
            "#ced4da",
            "#adb5bd",
            "#868e96",
            "#495057",
            "#343a40",
            "#212529"
        ],
        red: [
            "#fff5f5",
            "#ffe3e3",
            "#ffc9c9",
            "#ffa8a8",
            "#ff8787",
            "#ff6b6b",
            "#fa5252",
            "#f03e3e",
            "#e03131",
            "#c92a2a"
        ],
        pink: [
            "#fff0f6",
            "#ffdeeb",
            "#fcc2d7",
            "#faa2c1",
            "#f783ac",
            "#f06595",
            "#e64980",
            "#d6336c",
            "#c2255c",
            "#a61e4d"
        ],
        grape: [
            "#f8f0fc",
            "#f3d9fa",
            "#eebefa",
            "#e599f7",
            "#da77f2",
            "#cc5de8",
            "#be4bdb",
            "#ae3ec9",
            "#9c36b5",
            "#862e9c"
        ],
        violet: [
            "#f3f0ff",
            "#e5dbff",
            "#d0bfff",
            "#b197fc",
            "#9775fa",
            "#845ef7",
            "#7950f2",
            "#7048e8",
            "#6741d9",
            "#5f3dc4"
        ],
        indigo: [
            "#edf2ff",
            "#dbe4ff",
            "#bac8ff",
            "#91a7ff",
            "#748ffc",
            "#5c7cfa",
            "#4c6ef5",
            "#4263eb",
            "#3b5bdb",
            "#364fc7"
        ],
        blue: [
            "#e7f5ff",
            "#d0ebff",
            "#a5d8ff",
            "#74c0fc",
            "#4dabf7",
            "#339af0",
            "#228be6",
            "#1c7ed6",
            "#1971c2",
            "#1864ab"
        ],
        cyan: [
            "#e3fafc",
            "#c5f6fa",
            "#99e9f2",
            "#66d9e8",
            "#3bc9db",
            "#22b8cf",
            "#15aabf",
            "#1098ad",
            "#0c8599",
            "#0b7285"
        ],
        teal: [
            "#e6fcf5",
            "#c3fae8",
            "#96f2d7",
            "#63e6be",
            "#38d9a9",
            "#20c997",
            "#12b886",
            "#0ca678",
            "#099268",
            "#087f5b"
        ],
        green: [
            "#ebfbee",
            "#d3f9d8",
            "#b2f2bb",
            "#8ce99a",
            "#69db7c",
            "#51cf66",
            "#40c057",
            "#37b24d",
            "#2f9e44",
            "#2b8a3e"
        ],
        lime: [
            "#f4fce3",
            "#e9fac8",
            "#d8f5a2",
            "#c0eb75",
            "#a9e34b",
            "#94d82d",
            "#82c91e",
            "#74b816",
            "#66a80f",
            "#5c940d"
        ],
        yellow: [
            "#fff9db",
            "#fff3bf",
            "#ffec99",
            "#ffe066",
            "#ffd43b",
            "#fcc419",
            "#fab005",
            "#f59f00",
            "#f08c00",
            "#e67700"
        ],
        orange: [
            "#fff4e6",
            "#ffe8cc",
            "#ffd8a8",
            "#ffc078",
            "#ffa94d",
            "#ff922b",
            "#fd7e14",
            "#f76707",
            "#e8590c",
            "#d9480f"
        ]
    },
    dp =
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    ld = {
        scale: 1,
        fontSmoothing: !0,
        focusRing: "auto",
        white: "#fff",
        black: "#000",
        colors: kx,
        primaryShade: { light: 6, dark: 8 },
        primaryColor: "blue",
        variantColorResolver: Ex,
        autoContrast: !1,
        luminanceThreshold: 0.3,
        fontFamily: dp,
        fontFamilyMonospace:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
        respectReducedMotion: !1,
        cursorType: "default",
        defaultGradient: { from: "blue", to: "cyan", deg: 45 },
        defaultRadius: "sm",
        activeClassName: "mantine-active",
        focusClassName: "",
        headings: {
            fontFamily: dp,
            fontWeight: "700",
            textWrap: "wrap",
            sizes: {
                h1: { fontSize: L(34), lineHeight: "1.3" },
                h2: { fontSize: L(26), lineHeight: "1.35" },
                h3: { fontSize: L(22), lineHeight: "1.4" },
                h4: { fontSize: L(18), lineHeight: "1.45" },
                h5: { fontSize: L(16), lineHeight: "1.5" },
                h6: { fontSize: L(14), lineHeight: "1.5" }
            }
        },
        fontSizes: { xs: L(12), sm: L(14), md: L(16), lg: L(18), xl: L(20) },
        lineHeights: {
            xs: "1.4",
            sm: "1.45",
            md: "1.55",
            lg: "1.6",
            xl: "1.65"
        },
        radius: { xs: L(2), sm: L(4), md: L(8), lg: L(16), xl: L(32) },
        spacing: { xs: L(10), sm: L(12), md: L(16), lg: L(20), xl: L(32) },
        breakpoints: {
            xs: "36em",
            sm: "48em",
            md: "62em",
            lg: "75em",
            xl: "88em"
        },
        shadows: {
            xs: `0 ${L(1)} ${L(3)} rgba(0, 0, 0, 0.05), 0 ${L(1)} ${L(2)} rgba(0, 0, 0, 0.1)`,
            sm: `0 ${L(1)} ${L(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${L(10)} ${L(15)} ${L(-5)}, rgba(0, 0, 0, 0.04) 0 ${L(7)} ${L(7)} ${L(-5)}`,
            md: `0 ${L(1)} ${L(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${L(20)} ${L(25)} ${L(-5)}, rgba(0, 0, 0, 0.04) 0 ${L(10)} ${L(10)} ${L(-5)}`,
            lg: `0 ${L(1)} ${L(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${L(28)} ${L(23)} ${L(-7)}, rgba(0, 0, 0, 0.04) 0 ${L(12)} ${L(12)} ${L(-7)}`,
            xl: `0 ${L(1)} ${L(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${L(36)} ${L(28)} ${L(-7)}, rgba(0, 0, 0, 0.04) 0 ${L(17)} ${L(17)} ${L(-7)}`
        },
        other: {},
        components: {}
    }
function fp(e) {
    return e === "auto" || e === "dark" || e === "light"
}
function Cx({ key: e = "mantine-color-scheme-value" } = {}) {
    let t
    return {
        get: (n) => {
            if (typeof window > "u") return n
            try {
                const r = window.localStorage.getItem(e)
                return fp(r) ? r : n
            } catch {
                return n
            }
        },
        set: (n) => {
            try {
                window.localStorage.setItem(e, n)
            } catch (r) {
                console.warn(
                    "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
                    r
                )
            }
        },
        subscribe: (n) => {
            ;(t = (r) => {
                r.storageArea === window.localStorage &&
                    r.key === e &&
                    fp(r.newValue) &&
                    n(r.newValue)
            }),
                window.addEventListener("storage", t)
        },
        unsubscribe: () => {
            window.removeEventListener("storage", t)
        },
        clear: () => {
            window.localStorage.removeItem(e)
        }
    }
}
const jx =
        "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
    pp =
        "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }"
function La(e) {
    return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e
}
function hp(e) {
    if (!(e.primaryColor in e.colors)) throw new Error(jx)
    if (
        typeof e.primaryShade == "object" &&
        (!La(e.primaryShade.dark) || !La(e.primaryShade.light))
    )
        throw new Error(pp)
    if (typeof e.primaryShade == "number" && !La(e.primaryShade))
        throw new Error(pp)
}
function Px(e, t) {
    var r
    if (!t) return hp(e), e
    const n = ed(e, t)
    return (
        t.fontFamily &&
            !((r = t.headings) != null && r.fontFamily) &&
            (n.headings.fontFamily = t.fontFamily),
        hp(n),
        n
    )
}
const sd = E.createContext(null),
    _x = () => E.useContext(sd) || ld
function Nn() {
    const e = E.useContext(sd)
    if (!e)
        throw new Error(
            "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
        )
    return e
}
function A0({ theme: e, children: t, inherit: n = !0 }) {
    const r = _x(),
        o = E.useMemo(() => Px(n ? r : ld, e), [e, r, n])
    return P.createElement(sd.Provider, { value: o }, t)
}
A0.displayName = "@mantine/core/MantineThemeProvider"
function Nx() {
    const e = Nn(),
        t = od(),
        n = rt(e.breakpoints).reduce((r, o) => {
            const i = e.breakpoints[o].includes("px"),
                l = Au(e.breakpoints[o]),
                s = i ? `${l - 0.1}px` : cp(l - 0.1),
                a = i ? `${l}px` : cp(l)
            return `${r}@media (max-width: ${s}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${o} {display: none !important;}}`
        }, "")
    return P.createElement("style", {
        "data-mantine-styles": "classes",
        nonce: t == null ? void 0 : t(),
        dangerouslySetInnerHTML: { __html: n }
    })
}
function Ta(e) {
    return Object.entries(e)
        .map(([t, n]) => `${t}: ${n};`)
        .join("")
}
function za(e, t) {
    return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t)
}
function Rx(e, t) {
    const n = Ta(e.variables),
        r = n ? za(t, n) : "",
        o = Ta(e.dark),
        i = o ? za(`${t}[data-mantine-color-scheme="dark"]`, o) : "",
        l = Ta(e.light),
        s = l ? za(`${t}[data-mantine-color-scheme="light"]`, l) : ""
    return `${r}${i}${s}`
}
function F0({ color: e, theme: t, autoContrast: n = !0 }) {
    return (typeof n == "boolean" ? n : t.autoContrast) &&
        Ri({ color: e || t.primaryColor, theme: t }).isLight
        ? "var(--mantine-color-black)"
        : "var(--mantine-color-white)"
}
function mp(e, t) {
    return F0({
        color: e.colors[e.primaryColor][ql(e, t)],
        theme: e,
        autoContrast: null
    })
}
function Or(e, t, n) {
    rt(t).forEach((r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }))
}
const B0 = (e) => {
    const t = ql(e, "dark"),
        n = ql(e, "light"),
        r =
            e.defaultRadius in e.radius
                ? e.radius[e.defaultRadius]
                : L(e.defaultRadius),
        o = {
            variables: {
                "--mantine-scale": e.scale.toString(),
                "--mantine-cursor-type": e.cursorType,
                "--mantine-webkit-font-smoothing": e.fontSmoothing
                    ? "antialiased"
                    : "unset",
                "--mantine-color-scheme": "light dark",
                "--mantine-moz-font-smoothing": e.fontSmoothing
                    ? "grayscale"
                    : "unset",
                "--mantine-color-white": e.white,
                "--mantine-color-black": e.black,
                "--mantine-line-height": e.lineHeights.md,
                "--mantine-font-family": e.fontFamily,
                "--mantine-font-family-monospace": e.fontFamilyMonospace,
                "--mantine-font-family-headings": e.headings.fontFamily,
                "--mantine-heading-font-weight": e.headings.fontWeight,
                "--mantine-heading-text-wrap": e.headings.textWrap,
                "--mantine-radius-default": r,
                "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
                "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
                "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
                "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
                "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
            },
            light: {
                "--mantine-primary-color-contrast": mp(e, "light"),
                "--mantine-color-bright": "var(--mantine-color-black)",
                "--mantine-color-text": e.black,
                "--mantine-color-body": e.white,
                "--mantine-color-error": "var(--mantine-color-red-6)",
                "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
                "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${n})`,
                "--mantine-color-default": "var(--mantine-color-white)",
                "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
                "--mantine-color-default-color": "var(--mantine-color-black)",
                "--mantine-color-default-border": "var(--mantine-color-gray-4)"
            },
            dark: {
                "--mantine-primary-color-contrast": mp(e, "dark"),
                "--mantine-color-bright": "var(--mantine-color-white)",
                "--mantine-color-text": "var(--mantine-color-dark-0)",
                "--mantine-color-body": "var(--mantine-color-dark-7)",
                "--mantine-color-error": "var(--mantine-color-red-8)",
                "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
                "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
                "--mantine-color-default": "var(--mantine-color-dark-6)",
                "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
                "--mantine-color-default-color": "var(--mantine-color-white)",
                "--mantine-color-default-border": "var(--mantine-color-dark-4)"
            }
        }
    Or(o.variables, e.breakpoints, "breakpoint"),
        Or(o.variables, e.spacing, "spacing"),
        Or(o.variables, e.fontSizes, "font-size"),
        Or(o.variables, e.lineHeights, "line-height"),
        Or(o.variables, e.shadows, "shadow"),
        Or(o.variables, e.radius, "radius"),
        e.colors[e.primaryColor].forEach((l, s) => {
            o.variables[`--mantine-primary-color-${s}`] =
                `var(--mantine-color-${e.primaryColor}-${s})`
        }),
        rt(e.colors).forEach((l) => {
            e.colors[l].forEach((u, c) => {
                o.variables[`--mantine-color-${l}-${c}`] = u
            })
            const s = `var(--mantine-color-${l}-${n === 9 ? 8 : n + 1})`,
                a = `var(--mantine-color-${l}-${t === 9 ? 8 : t + 1})`
            ;(o.light["--mantine-color-dimmed"] =
                "var(--mantine-color-gray-6)"),
                (o.light[`--mantine-color-${l}-text`] =
                    `var(--mantine-color-${l}-filled)`),
                (o.light[`--mantine-color-${l}-filled`] =
                    `var(--mantine-color-${l}-${n})`),
                (o.light[`--mantine-color-${l}-filled-hover`] = s),
                (o.light[`--mantine-color-${l}-light`] = dt(
                    e.colors[l][n],
                    0.1
                )),
                (o.light[`--mantine-color-${l}-light-hover`] = dt(
                    e.colors[l][n],
                    0.12
                )),
                (o.light[`--mantine-color-${l}-light-color`] =
                    `var(--mantine-color-${l}-${n})`),
                (o.light[`--mantine-color-${l}-outline`] =
                    `var(--mantine-color-${l}-${n})`),
                (o.light[`--mantine-color-${l}-outline-hover`] = dt(
                    e.colors[l][n],
                    0.05
                )),
                (o.dark["--mantine-color-dimmed"] =
                    "var(--mantine-color-dark-2)"),
                (o.dark[`--mantine-color-${l}-text`] =
                    `var(--mantine-color-${l}-4)`),
                (o.dark[`--mantine-color-${l}-filled`] =
                    `var(--mantine-color-${l}-${t})`),
                (o.dark[`--mantine-color-${l}-filled-hover`] = a),
                (o.dark[`--mantine-color-${l}-light`] = dt(
                    e.colors[l][Math.max(0, t - 2)],
                    0.15
                )),
                (o.dark[`--mantine-color-${l}-light-hover`] = dt(
                    e.colors[l][Math.max(0, t - 2)],
                    0.2
                )),
                (o.dark[`--mantine-color-${l}-light-color`] =
                    `var(--mantine-color-${l}-${Math.max(t - 5, 0)})`),
                (o.dark[`--mantine-color-${l}-outline`] =
                    `var(--mantine-color-${l}-${Math.max(t - 4, 0)})`),
                (o.dark[`--mantine-color-${l}-outline-hover`] = dt(
                    e.colors[l][Math.max(t - 4, 0)],
                    0.05
                ))
        })
    const i = e.headings.sizes
    return (
        rt(i).forEach((l) => {
            ;(o.variables[`--mantine-${l}-font-size`] = i[l].fontSize),
                (o.variables[`--mantine-${l}-line-height`] = i[l].lineHeight),
                (o.variables[`--mantine-${l}-font-weight`] =
                    i[l].fontWeight || e.headings.fontWeight)
        }),
        o
    )
}
function bx({ theme: e, generator: t }) {
    const n = B0(e),
        r = t == null ? void 0 : t(e)
    return r ? ed(n, r) : n
}
const $a = B0(ld)
function Lx(e) {
    const t = { variables: {}, light: {}, dark: {} }
    return (
        rt(e.variables).forEach((n) => {
            $a.variables[n] !== e.variables[n] &&
                (t.variables[n] = e.variables[n])
        }),
        rt(e.light).forEach((n) => {
            $a.light[n] !== e.light[n] && (t.light[n] = e.light[n])
        }),
        rt(e.dark).forEach((n) => {
            $a.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n])
        }),
        t
    )
}
function Tx(e) {
    return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`
}
function U0({ cssVariablesSelector: e }) {
    const t = Nn(),
        n = od(),
        r = hx(),
        o = bx({ theme: t, generator: r }),
        i = e === ":root",
        l = i ? Lx(o) : o,
        s = Rx(l, e)
    return s
        ? P.createElement("style", {
              "data-mantine-styles": !0,
              nonce: n == null ? void 0 : n(),
              dangerouslySetInnerHTML: { __html: `${s}${i ? "" : Tx(e)}` }
          })
        : null
}
U0.displayName = "@mantine/CssVariables"
function zx() {
    const e = console.error
    console.error = (...t) => {
        ;(t.length > 1 &&
            typeof t[0] == "string" &&
            t[0].toLowerCase().includes("extra attributes from the server") &&
            typeof t[1] == "string" &&
            t[1].toLowerCase().includes("data-mantine-color-scheme")) ||
            e(...t)
    }
}
function Mr(e, t) {
    var r
    const n =
        e !== "auto"
            ? e
            : window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
    ;(r = t()) == null || r.setAttribute("data-mantine-color-scheme", n)
}
function $x({
    manager: e,
    defaultColorScheme: t,
    getRootElement: n,
    forceColorScheme: r
}) {
    const o = E.useRef(),
        [i, l] = E.useState(() => e.get(t)),
        s = r || i,
        a = E.useCallback(
            (c) => {
                r || (Mr(c, n), l(c), e.set(c))
            },
            [e.set, s, r]
        ),
        u = E.useCallback(() => {
            l(t), Mr(t, n), e.clear()
        }, [e.clear, t])
    return (
        E.useEffect(
            () => (e.subscribe(a), e.unsubscribe),
            [e.subscribe, e.unsubscribe]
        ),
        nd(() => {
            Mr(e.get(t), n)
        }, []),
        E.useEffect(() => {
            var d
            if (r) return Mr(r, n), () => {}
            r === void 0 && Mr(i, n),
                (o.current = window.matchMedia("(prefers-color-scheme: dark)"))
            const c = (p) => {
                i === "auto" && Mr(p.matches ? "dark" : "light", n)
            }
            return (
                (d = o.current) == null || d.addEventListener("change", c),
                () => {
                    var p
                    return (p = o.current) == null
                        ? void 0
                        : p.removeEventListener("change", c)
                }
            )
        }, [i, r]),
        { colorScheme: s, setColorScheme: a, clearColorScheme: u }
    )
}
function Ox({ respectReducedMotion: e, getRootElement: t }) {
    nd(() => {
        var n
        e &&
            ((n = t()) == null ||
                n.setAttribute("data-respect-reduced-motion", "true"))
    }, [e])
}
zx()
function H0({
    theme: e,
    children: t,
    getStyleNonce: n,
    withCssVariables: r = !0,
    cssVariablesSelector: o = ":root",
    classNamesPrefix: i = "mantine",
    colorSchemeManager: l = Cx(),
    defaultColorScheme: s = "light",
    getRootElement: a = () => document.documentElement,
    cssVariablesResolver: u,
    forceColorScheme: c
}) {
    const {
        colorScheme: d,
        setColorScheme: p,
        clearColorScheme: w
    } = $x({
        defaultColorScheme: s,
        forceColorScheme: c,
        manager: l,
        getRootElement: a
    })
    return (
        Ox({
            respectReducedMotion:
                (e == null ? void 0 : e.respectReducedMotion) || !1,
            getRootElement: a
        }),
        P.createElement(
            D0.Provider,
            {
                value: {
                    colorSchemeManager: l,
                    colorScheme: d,
                    setColorScheme: p,
                    clearColorScheme: w,
                    getRootElement: a,
                    classNamesPrefix: i,
                    getStyleNonce: n,
                    cssVariablesResolver: u,
                    cssVariablesSelector: o
                }
            },
            P.createElement(
                A0,
                { theme: e },
                r && P.createElement(U0, { cssVariablesSelector: o }),
                P.createElement(Nx, null),
                t
            )
        )
    )
}
H0.displayName = "@mantine/core/MantineProvider"
function Mx({ classNames: e, styles: t, props: n, stylesCtx: r }) {
    const o = Nn()
    return {
        resolvedClassNames: xs({
            theme: o,
            classNames: e,
            props: n,
            stylesCtx: r || void 0
        }),
        resolvedStyles: Yl({
            theme: o,
            styles: t,
            props: n,
            stylesCtx: r || void 0
        })
    }
}
const Ix = {
    always: "mantine-focus-always",
    auto: "mantine-focus-auto",
    never: "mantine-focus-never"
}
function Dx({ theme: e, options: t, unstyled: n }) {
    return ln(
        (t == null ? void 0 : t.focusable) &&
            !n &&
            (e.focusClassName || Ix[e.focusRing]),
        (t == null ? void 0 : t.active) && !n && e.activeClassName
    )
}
function Ax({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
    return xs({
        theme: o,
        classNames: n == null ? void 0 : n.classNames,
        props: (n == null ? void 0 : n.props) || r,
        stylesCtx: t
    })[e]
}
function Fx({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
    return xs({ theme: n, classNames: r, props: o, stylesCtx: t })[e]
}
function Bx({ rootSelector: e, selector: t, className: n }) {
    return e === t ? n : void 0
}
function Ux({ selector: e, classes: t, unstyled: n }) {
    return n ? void 0 : t[e]
}
function Hx({
    themeName: e,
    classNamesPrefix: t,
    selector: n,
    withStaticClass: r
}) {
    return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`)
}
function Wx({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
    return e.map((i) => {
        var l, s
        return (s = xs({
            theme: t,
            classNames: (l = t.components[i]) == null ? void 0 : l.classNames,
            props: r,
            stylesCtx: o
        })) == null
            ? void 0
            : s[n]
    })
}
function Vx({ options: e, classes: t, selector: n, unstyled: r }) {
    return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0
}
function Gx({
    theme: e,
    options: t,
    themeName: n,
    selector: r,
    classNamesPrefix: o,
    classNames: i,
    classes: l,
    unstyled: s,
    className: a,
    rootSelector: u,
    props: c,
    stylesCtx: d
}) {
    return ln(
        Dx({ theme: e, options: t, unstyled: s }),
        Wx({ theme: e, themeName: n, selector: r, props: c, stylesCtx: d }),
        Vx({ options: t, classes: l, selector: r, unstyled: s }),
        Fx({ selector: r, stylesCtx: d, theme: e, classNames: i, props: c }),
        Ax({ selector: r, stylesCtx: d, options: t, props: c, theme: e }),
        Bx({ rootSelector: u, selector: r, className: a }),
        Ux({ selector: r, classes: l, unstyled: s }),
        Hx({
            themeName: n,
            classNamesPrefix: o,
            selector: r,
            withStaticClass: t == null ? void 0 : t.withStaticClass
        }),
        t == null ? void 0 : t.className
    )
}
function Kx({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
    return t
        .map((i) => {
            var l
            return Yl({
                theme: e,
                styles: (l = e.components[i]) == null ? void 0 : l.styles,
                props: n,
                stylesCtx: r
            })[o]
        })
        .reduce((i, l) => ({ ...i, ...l }), {})
}
function Bu({ style: e, theme: t }) {
    return Array.isArray(e)
        ? [...e].reduce((n, r) => ({ ...n, ...Bu({ style: r, theme: t }) }), {})
        : typeof e == "function"
          ? e(t)
          : e ?? {}
}
function Qx(e) {
    return e.reduce(
        (t, n) => (
            n &&
                Object.keys(n).forEach((r) => {
                    t[r] = { ...t[r], ...yo(n[r]) }
                }),
            t
        ),
        {}
    )
}
function Yx({
    vars: e,
    varsResolver: t,
    theme: n,
    props: r,
    stylesCtx: o,
    selector: i,
    themeName: l
}) {
    var s
    return (s = Qx([
        t == null ? void 0 : t(n, r, o),
        ...l.map((a) => {
            var u, c, d
            return (d =
                (c = (u = n.components) == null ? void 0 : u[a]) == null
                    ? void 0
                    : c.vars) == null
                ? void 0
                : d.call(c, n, r, o)
        }),
        e == null ? void 0 : e(n, r, o)
    ])) == null
        ? void 0
        : s[i]
}
function qx({
    theme: e,
    themeName: t,
    selector: n,
    options: r,
    props: o,
    stylesCtx: i,
    rootSelector: l,
    styles: s,
    style: a,
    vars: u,
    varsResolver: c
}) {
    return {
        ...Kx({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
        ...Yl({ theme: e, styles: s, props: o, stylesCtx: i })[n],
        ...Yl({
            theme: e,
            styles: r == null ? void 0 : r.styles,
            props: (r == null ? void 0 : r.props) || o,
            stylesCtx: i
        })[n],
        ...Yx({
            theme: e,
            props: o,
            stylesCtx: i,
            vars: u,
            varsResolver: c,
            selector: n,
            themeName: t
        }),
        ...(l === n ? Bu({ style: a, theme: e }) : null),
        ...Bu({ style: r == null ? void 0 : r.style, theme: e })
    }
}
function pe({
    name: e,
    classes: t,
    props: n,
    stylesCtx: r,
    className: o,
    style: i,
    rootSelector: l = "root",
    unstyled: s,
    classNames: a,
    styles: u,
    vars: c,
    varsResolver: d
}) {
    const p = Nn(),
        w = mx(),
        g = (Array.isArray(e) ? e : [e]).filter((v) => v)
    return (v, S) => ({
        className: Gx({
            theme: p,
            options: S,
            themeName: g,
            selector: v,
            classNamesPrefix: w,
            classNames: a,
            classes: t,
            unstyled: s,
            className: o,
            rootSelector: l,
            props: n,
            stylesCtx: r
        }),
        style: qx({
            theme: p,
            themeName: g,
            selector: v,
            options: S,
            props: n,
            stylesCtx: r,
            rootSelector: l,
            styles: u,
            style: i,
            vars: c,
            varsResolver: d
        })
    })
}
function Xx(e, t) {
    return typeof e == "boolean" ? e : t.autoContrast
}
function Y(e, t, n) {
    var l
    const r = Nn(),
        o = (l = r.components[e]) == null ? void 0 : l.defaultProps,
        i = typeof o == "function" ? o(r) : o
    return { ...t, ...i, ...yo(n) }
}
function gp(e) {
    return rt(e)
        .reduce((t, n) => (e[n] !== void 0 ? `${t}${ex(n)}:${e[n]};` : t), "")
        .trim()
}
function Jx({ selector: e, styles: t, media: n }) {
    const r = t ? gp(t) : "",
        o = Array.isArray(n)
            ? n.map((i) => `@media${i.query}{${e}{${gp(i.styles)}}}`)
            : []
    return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim()
}
function Ss({ selector: e, styles: t, media: n }) {
    const r = od()
    return P.createElement("style", {
        "data-mantine-styles": "inline",
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: {
            __html: Jx({ selector: e, styles: t, media: n })
        }
    })
}
function Es(e) {
    const {
        m: t,
        mx: n,
        my: r,
        mt: o,
        mb: i,
        ml: l,
        mr: s,
        p: a,
        px: u,
        py: c,
        pt: d,
        pb: p,
        pl: w,
        pr: g,
        bg: v,
        c: S,
        opacity: m,
        ff: h,
        fz: y,
        fw: C,
        lts: R,
        ta: x,
        lh: _,
        fs: T,
        tt: M,
        td: F,
        w: V,
        miw: ie,
        maw: te,
        h: ue,
        mih: Te,
        mah: Se,
        bgsz: re,
        bgp: z,
        bgr: D,
        bga: B,
        pos: K,
        top: le,
        left: Ae,
        bottom: me,
        right: ze,
        inset: je,
        display: Qe,
        flex: Mt,
        hiddenFrom: It,
        visibleFrom: Rn,
        lightHidden: $e,
        darkHidden: O,
        ...Q
    } = e
    return {
        styleProps: yo({
            m: t,
            mx: n,
            my: r,
            mt: o,
            mb: i,
            ml: l,
            mr: s,
            p: a,
            px: u,
            py: c,
            pt: d,
            pb: p,
            pl: w,
            pr: g,
            bg: v,
            c: S,
            opacity: m,
            ff: h,
            fz: y,
            fw: C,
            lts: R,
            ta: x,
            lh: _,
            fs: T,
            tt: M,
            td: F,
            w: V,
            miw: ie,
            maw: te,
            h: ue,
            mih: Te,
            mah: Se,
            bgsz: re,
            bgp: z,
            bgr: D,
            bga: B,
            pos: K,
            top: le,
            left: Ae,
            bottom: me,
            right: ze,
            inset: je,
            display: Qe,
            flex: Mt,
            hiddenFrom: It,
            visibleFrom: Rn,
            lightHidden: $e,
            darkHidden: O
        }),
        rest: Q
    }
}
const Zx = {
    m: { type: "spacing", property: "margin" },
    mt: { type: "spacing", property: "marginTop" },
    mb: { type: "spacing", property: "marginBottom" },
    ml: { type: "spacing", property: "marginLeft" },
    mr: { type: "spacing", property: "marginRight" },
    mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
    my: { type: "spacing", property: ["marginTop", "marginBottom"] },
    p: { type: "spacing", property: "padding" },
    pt: { type: "spacing", property: "paddingTop" },
    pb: { type: "spacing", property: "paddingBottom" },
    pl: { type: "spacing", property: "paddingLeft" },
    pr: { type: "spacing", property: "paddingRight" },
    px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
    py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
    bg: { type: "color", property: "background" },
    c: { type: "textColor", property: "color" },
    opacity: { type: "identity", property: "opacity" },
    ff: { type: "fontFamily", property: "fontFamily" },
    fz: { type: "fontSize", property: "fontSize" },
    fw: { type: "identity", property: "fontWeight" },
    lts: { type: "size", property: "letterSpacing" },
    ta: { type: "identity", property: "textAlign" },
    lh: { type: "lineHeight", property: "lineHeight" },
    fs: { type: "identity", property: "fontStyle" },
    tt: { type: "identity", property: "textTransform" },
    td: { type: "identity", property: "textDecoration" },
    w: { type: "spacing", property: "width" },
    miw: { type: "spacing", property: "minWidth" },
    maw: { type: "spacing", property: "maxWidth" },
    h: { type: "spacing", property: "height" },
    mih: { type: "spacing", property: "minHeight" },
    mah: { type: "spacing", property: "maxHeight" },
    bgsz: { type: "size", property: "backgroundSize" },
    bgp: { type: "identity", property: "backgroundPosition" },
    bgr: { type: "identity", property: "backgroundRepeat" },
    bga: { type: "identity", property: "backgroundAttachment" },
    pos: { type: "identity", property: "position" },
    top: { type: "identity", property: "top" },
    left: { type: "size", property: "left" },
    bottom: { type: "size", property: "bottom" },
    right: { type: "size", property: "right" },
    inset: { type: "size", property: "inset" },
    display: { type: "identity", property: "display" },
    flex: { type: "identity", property: "flex" }
}
function W0(e, t) {
    const n = Ri({ color: e, theme: t })
    return n.color === "dimmed"
        ? "var(--mantine-color-dimmed)"
        : n.color === "bright"
          ? "var(--mantine-color-bright)"
          : n.variable
            ? `var(${n.variable})`
            : n.color
}
function e2(e, t) {
    const n = Ri({ color: e, theme: t })
    return n.isThemeColor && n.shade === void 0
        ? `var(--mantine-color-${n.color}-text)`
        : W0(e, t)
}
const yp = {
    text: "var(--mantine-font-family)",
    mono: "var(--mantine-font-family-monospace)",
    heading: "var(--mantine-font-family-headings)"
}
function t2(e) {
    return typeof e == "string" && e in yp ? yp[e] : e
}
function n2(e, t) {
    return typeof e == "string" && e in t.fontSizes
        ? `var(--mantine-font-size-${e})`
        : typeof e == "number" || typeof e == "string"
          ? L(e)
          : e
}
function r2(e) {
    return e
}
function o2(e, t) {
    return typeof e == "string" && e in t.lineHeights
        ? `var(--mantine-line-height-${e})`
        : e
}
function i2(e) {
    return typeof e == "number" ? L(e) : e
}
function l2(e, t) {
    if (typeof e == "number") return L(e)
    if (typeof e == "string") {
        const n = e.replace("-", "")
        if (!(n in t.spacing)) return L(e)
        const r = `--mantine-spacing-${n}`
        return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`
    }
    return e
}
const Oa = {
    color: W0,
    textColor: e2,
    fontSize: n2,
    spacing: l2,
    identity: r2,
    size: i2,
    lineHeight: o2,
    fontFamily: t2
}
function vp(e) {
    return e.replace("(min-width: ", "").replace("em)", "")
}
function s2({ media: e, ...t }) {
    const r = Object.keys(e)
        .sort((o, i) => Number(vp(o)) - Number(vp(i)))
        .map((o) => ({ query: o, styles: e[o] }))
    return { ...t, media: r }
}
function a2(e) {
    if (typeof e != "object" || e === null) return !1
    const t = Object.keys(e)
    return !(t.length === 1 && t[0] === "base")
}
function u2(e) {
    return typeof e == "object" && e !== null
        ? "base" in e
            ? e.base
            : void 0
        : e
}
function c2(e) {
    return typeof e == "object" && e !== null
        ? rt(e).filter((t) => t !== "base")
        : []
}
function d2(e, t) {
    return typeof e == "object" && e !== null && t in e ? e[t] : e
}
function V0({ styleProps: e, data: t, theme: n }) {
    return s2(
        rt(e).reduce(
            (r, o) => {
                if (o === "hiddenFrom" || o === "visibleFrom") return r
                const i = t[o],
                    l = Array.isArray(i.property) ? i.property : [i.property],
                    s = u2(e[o])
                if (!a2(e[o]))
                    return (
                        l.forEach((u) => {
                            r.inlineStyles[u] = Oa[i.type](s, n)
                        }),
                        r
                    )
                r.hasResponsiveStyles = !0
                const a = c2(e[o])
                return (
                    l.forEach((u) => {
                        s && (r.styles[u] = Oa[i.type](s, n)),
                            a.forEach((c) => {
                                const d = `(min-width: ${n.breakpoints[c]})`
                                r.media[d] = {
                                    ...r.media[d],
                                    [u]: Oa[i.type](d2(e[o], c), n)
                                }
                            })
                    }),
                    r
                )
            },
            { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
        )
    )
}
function ks() {
    return `__m__-${E.useId().replace(/:/g, "")}`
}
function G0(e) {
    return e.startsWith("data-") ? e : `data-${e}`
}
function f2(e) {
    return Object.keys(e).reduce((t, n) => {
        const r = e[n]
        return (
            r === void 0 ||
                r === "" ||
                r === !1 ||
                r === null ||
                (t[G0(n)] = e[n]),
            t
        )
    }, {})
}
function K0(e) {
    return e
        ? typeof e == "string"
            ? { [G0(e)]: !0 }
            : Array.isArray(e)
              ? [...e].reduce((t, n) => ({ ...t, ...K0(n) }), {})
              : f2(e)
        : null
}
function Uu(e, t) {
    return Array.isArray(e)
        ? [...e].reduce((n, r) => ({ ...n, ...Uu(r, t) }), {})
        : typeof e == "function"
          ? e(t)
          : e ?? {}
}
function p2({ theme: e, style: t, vars: n, styleProps: r }) {
    const o = Uu(t, e),
        i = Uu(n, e)
    return { ...o, ...i, ...r }
}
const Q0 = E.forwardRef(
    (
        {
            component: e,
            style: t,
            __vars: n,
            className: r,
            variant: o,
            mod: i,
            size: l,
            hiddenFrom: s,
            visibleFrom: a,
            lightHidden: u,
            darkHidden: c,
            renderRoot: d,
            ...p
        },
        w
    ) => {
        const g = Nn(),
            v = e || "div",
            { styleProps: S, rest: m } = Es(p),
            h = ks(),
            y = V0({ styleProps: S, theme: g, data: Zx }),
            C = {
                ref: w,
                style: p2({
                    theme: g,
                    style: t,
                    vars: n,
                    styleProps: y.inlineStyles
                }),
                className: ln(r, {
                    [h]: y.hasResponsiveStyles,
                    "mantine-light-hidden": u,
                    "mantine-dark-hidden": c,
                    [`mantine-hidden-from-${s}`]: s,
                    [`mantine-visible-from-${a}`]: a
                }),
                "data-variant": o,
                "data-size": z0(l) ? void 0 : l || void 0,
                ...K0(i),
                ...m
            }
        return P.createElement(
            P.Fragment,
            null,
            y.hasResponsiveStyles &&
                P.createElement(Ss, {
                    selector: `.${h}`,
                    styles: y.styles,
                    media: y.media
                }),
            typeof d == "function" ? d(C) : P.createElement(v, { ...C })
        )
    }
)
Q0.displayName = "@mantine/core/Box"
const J = Q0
function Y0(e) {
    return e
}
function Ce(e) {
    const t = E.forwardRef(e)
    return (t.extend = Y0), t
}
function yt(e) {
    const t = E.forwardRef(e)
    return (t.extend = Y0), t
}
var q0 = { root: "m-87cf2631" }
const h2 = { __staticSelector: "UnstyledButton" },
    bi = yt((e, t) => {
        const n = Y("UnstyledButton", h2, e),
            {
                className: r,
                component: o = "button",
                __staticSelector: i,
                unstyled: l,
                classNames: s,
                styles: a,
                style: u,
                ...c
            } = n,
            d = pe({
                name: i,
                props: n,
                classes: q0,
                className: r,
                style: u,
                classNames: s,
                styles: a,
                unstyled: l
            })
        return P.createElement(J, {
            ...d("root", { focusable: !0 }),
            component: o,
            ref: t,
            type: o === "button" ? "button" : void 0,
            ...c
        })
    })
bi.classes = q0
bi.displayName = "@mantine/core/UnstyledButton"
var X0 = { root: "m-1b7284a3" }
const m2 = {},
    g2 = (e, { radius: t, shadow: n }) => ({
        root: {
            "--paper-radius": t === void 0 ? void 0 : _n(t),
            "--paper-shadow": ox(n)
        }
    }),
    vo = yt((e, t) => {
        const n = Y("Paper", m2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                withBorder: a,
                vars: u,
                radius: c,
                shadow: d,
                variant: p,
                mod: w,
                ...g
            } = n,
            v = pe({
                name: "Paper",
                props: n,
                classes: X0,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: u,
                varsResolver: g2
            })
        return P.createElement(J, {
            ref: t,
            mod: [{ "data-with-border": a }, w],
            ...v("root"),
            variant: p,
            ...g
        })
    })
vo.classes = X0
vo.displayName = "@mantine/core/Paper"
var Ht = {
    root: "m-5ae2e3c",
    barsLoader: "m-7a2bd4cd",
    bar: "m-870bb79",
    "bars-loader-animation": "m-5d2b3b9d",
    dotsLoader: "m-4e3f22d7",
    dot: "m-870c4af",
    "loader-dots-animation": "m-aac34a1",
    ovalLoader: "m-b34414df",
    "oval-loader-animation": "m-f8e89c4b"
}
const y2 = E.forwardRef(({ className: e, ...t }, n) =>
        P.createElement(
            J,
            {
                component: "span",
                className: ln(Ht.barsLoader, e),
                ...t,
                ref: n
            },
            P.createElement("span", { className: Ht.bar }),
            P.createElement("span", { className: Ht.bar }),
            P.createElement("span", { className: Ht.bar })
        )
    ),
    v2 = E.forwardRef(({ className: e, ...t }, n) =>
        P.createElement(
            J,
            {
                component: "span",
                className: ln(Ht.dotsLoader, e),
                ...t,
                ref: n
            },
            P.createElement("span", { className: Ht.dot }),
            P.createElement("span", { className: Ht.dot }),
            P.createElement("span", { className: Ht.dot })
        )
    ),
    w2 = E.forwardRef(({ className: e, ...t }, n) =>
        P.createElement(J, {
            component: "span",
            className: ln(Ht.ovalLoader, e),
            ...t,
            ref: n
        })
    ),
    J0 = { bars: y2, oval: w2, dots: v2 },
    x2 = { loaders: J0, type: "oval" },
    S2 = (e, { size: t, color: n }) => ({
        root: {
            "--loader-size": De(t, "loader-size"),
            "--loader-color": n ? Pr(n, e) : void 0
        }
    }),
    Li = Ce((e, t) => {
        const n = Y("Loader", x2, e),
            {
                size: r,
                color: o,
                type: i,
                vars: l,
                className: s,
                style: a,
                classNames: u,
                styles: c,
                unstyled: d,
                loaders: p,
                variant: w,
                children: g,
                ...v
            } = n,
            S = pe({
                name: "Loader",
                props: n,
                classes: Ht,
                className: s,
                style: a,
                classNames: u,
                styles: c,
                unstyled: d,
                vars: l,
                varsResolver: S2
            })
        return g
            ? P.createElement(J, { ...S("root"), ref: t, ...v }, g)
            : P.createElement(J, {
                  ...S("root"),
                  ref: t,
                  component: p[i],
                  variant: w,
                  size: r,
                  ...v
              })
    })
Li.defaultLoaders = J0
Li.classes = Ht
Li.displayName = "@mantine/core/Loader"
var Cs = {
    root: "m-8d3f4000",
    loader: "m-302b9fb1",
    icon: "m-8d3afb97",
    group: "m-1a0f1b21"
}
const wp = { orientation: "horizontal" },
    E2 = (e, { borderWidth: t }) => ({ group: { "--ai-border-width": L(t) } }),
    ad = Ce((e, t) => {
        const n = Y("ActionIconGroup", wp, e),
            {
                className: r,
                style: o,
                classNames: i,
                styles: l,
                unstyled: s,
                orientation: a,
                vars: u,
                borderWidth: c,
                variant: d,
                mod: p,
                ...w
            } = Y("ActionIconGroup", wp, e),
            g = pe({
                name: "ActionIconGroup",
                props: n,
                classes: Cs,
                className: r,
                style: o,
                classNames: i,
                styles: l,
                unstyled: s,
                vars: u,
                varsResolver: E2,
                rootSelector: "group"
            })
        return P.createElement(J, {
            ...g("group"),
            ref: t,
            variant: d,
            mod: [{ "data-orientation": a }, p],
            role: "group",
            ...w
        })
    })
ad.classes = Cs
ad.displayName = "@mantine/core/ActionIconGroup"
const k2 = {},
    C2 = (
        e,
        {
            size: t,
            radius: n,
            variant: r,
            gradient: o,
            color: i,
            autoContrast: l
        }
    ) => {
        const s = e.variantColorResolver({
            color: i || e.primaryColor,
            theme: e,
            gradient: o,
            variant: r || "filled",
            autoContrast: l
        })
        return {
            root: {
                "--ai-size": De(t, "ai-size"),
                "--ai-radius": n === void 0 ? void 0 : _n(n),
                "--ai-bg": i || r ? s.background : void 0,
                "--ai-hover": i || r ? s.hover : void 0,
                "--ai-hover-color": i || r ? s.hoverColor : void 0,
                "--ai-color": s.color,
                "--ai-bd": i || r ? s.border : void 0
            }
        }
    },
    yr = yt((e, t) => {
        const n = Y("ActionIcon", k2, e),
            {
                className: r,
                unstyled: o,
                variant: i,
                classNames: l,
                styles: s,
                style: a,
                loading: u,
                loaderProps: c,
                size: d,
                color: p,
                radius: w,
                __staticSelector: g,
                gradient: v,
                vars: S,
                children: m,
                disabled: h,
                "data-disabled": y,
                autoContrast: C,
                mod: R,
                ...x
            } = n,
            _ = pe({
                name: ["ActionIcon", g],
                props: n,
                className: r,
                style: a,
                classes: Cs,
                classNames: l,
                styles: s,
                unstyled: o,
                vars: S,
                varsResolver: C2
            })
        return P.createElement(
            bi,
            {
                ..._("root", { active: !h && !u && !y }),
                ...x,
                unstyled: o,
                variant: i,
                size: d,
                disabled: h || u,
                ref: t,
                mod: [{ loading: u, disabled: h || y }, R]
            },
            P.createElement(
                J,
                { component: "span", ..._("loader"), "aria-hidden": !0 },
                P.createElement(Li, {
                    color: "var(--ai-color)",
                    size: "calc(var(--ai-size) * 0.55)",
                    ...c
                })
            ),
            P.createElement(
                J,
                { component: "span", mod: { loading: u }, ..._("icon") },
                m
            )
        )
    })
yr.classes = Cs
yr.displayName = "@mantine/core/ActionIcon"
yr.Group = ad
function j2(e) {
    return E.Children.toArray(e).filter(Boolean)
}
var Z0 = { root: "m-4081bf90" }
const P2 = {
        preventGrowOverflow: !0,
        gap: "md",
        align: "center",
        justify: "flex-start",
        wrap: "wrap"
    },
    _2 = (
        e,
        {
            grow: t,
            preventGrowOverflow: n,
            gap: r,
            align: o,
            justify: i,
            wrap: l
        },
        { childWidth: s }
    ) => ({
        root: {
            "--group-child-width": t && n ? s : void 0,
            "--group-gap": jr(r),
            "--group-align": o,
            "--group-justify": i,
            "--group-wrap": l
        }
    }),
    nr = Ce((e, t) => {
        const n = Y("Group", P2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                children: a,
                gap: u,
                align: c,
                justify: d,
                wrap: p,
                grow: w,
                preventGrowOverflow: g,
                vars: v,
                variant: S,
                __size: m,
                mod: h,
                ...y
            } = n,
            C = j2(a),
            R = C.length,
            x = jr(u ?? "md"),
            T = { childWidth: `calc(${100 / R}% - (${x} - ${x} / ${R}))` },
            M = pe({
                name: "Group",
                props: n,
                stylesCtx: T,
                className: o,
                style: i,
                classes: Z0,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: v,
                varsResolver: _2
            })
        return P.createElement(
            J,
            {
                ...M("root"),
                ref: t,
                variant: S,
                mod: [{ grow: w }, h],
                size: m,
                ...y
            },
            C
        )
    })
nr.classes = Z0
nr.displayName = "@mantine/core/Group"
const [N2, js] = nx({
    offsetBottom: !1,
    offsetTop: !1,
    describedBy: void 0,
    getStyles: null,
    inputId: void 0,
    labelId: void 0
})
var Ot = {
    wrapper: "m-6c018570",
    input: "m-8fb7ebe7",
    section: "m-82577fc2",
    placeholder: "m-88bacfd0",
    root: "m-46b77525",
    label: "m-8fdc1311",
    required: "m-78a94662",
    error: "m-8f816625",
    description: "m-fe47ce59"
}
const xp = {},
    R2 = (e, { size: t }) => ({
        description: {
            "--input-description-size":
                t === void 0 ? void 0 : `calc(${Gt(t)} - ${L(2)})`
        }
    }),
    Ps = Ce((e, t) => {
        const n = Y("InputDescription", xp, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                size: u,
                __staticSelector: c,
                __inheritStyles: d = !0,
                variant: p,
                ...w
            } = Y("InputDescription", xp, n),
            g = js(),
            v = pe({
                name: ["InputWrapper", c],
                props: n,
                classes: Ot,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                rootSelector: "description",
                vars: a,
                varsResolver: R2
            }),
            S = (d && (g == null ? void 0 : g.getStyles)) || v
        return P.createElement(J, {
            component: "p",
            ref: t,
            variant: p,
            size: u,
            ...S("description"),
            ...w
        })
    })
Ps.classes = Ot
Ps.displayName = "@mantine/core/InputDescription"
const b2 = {},
    L2 = (e, { size: t }) => ({
        error: {
            "--input-error-size":
                t === void 0 ? void 0 : `calc(${Gt(t)} - ${L(2)})`
        }
    }),
    _s = Ce((e, t) => {
        const n = Y("InputError", b2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                size: u,
                __staticSelector: c,
                __inheritStyles: d = !0,
                variant: p,
                ...w
            } = n,
            g = pe({
                name: ["InputWrapper", c],
                props: n,
                classes: Ot,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                rootSelector: "error",
                vars: a,
                varsResolver: L2
            }),
            v = js(),
            S = (d && (v == null ? void 0 : v.getStyles)) || g
        return P.createElement(J, {
            component: "p",
            ref: t,
            variant: p,
            size: u,
            ...S("error"),
            ...w
        })
    })
_s.classes = Ot
_s.displayName = "@mantine/core/InputError"
const Sp = { labelElement: "label" },
    T2 = (e, { size: t }) => ({
        label: { "--input-label-size": Gt(t), "--input-asterisk-color": void 0 }
    }),
    Ns = Ce((e, t) => {
        const n = Y("InputLabel", Sp, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                labelElement: u,
                size: c,
                required: d,
                htmlFor: p,
                onMouseDown: w,
                children: g,
                __staticSelector: v,
                variant: S,
                mod: m,
                ...h
            } = Y("InputLabel", Sp, n),
            y = pe({
                name: ["InputWrapper", v],
                props: n,
                classes: Ot,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                rootSelector: "label",
                vars: a,
                varsResolver: T2
            }),
            C = js(),
            R = (C == null ? void 0 : C.getStyles) || y
        return P.createElement(
            J,
            {
                ...R("label"),
                component: u,
                variant: S,
                size: c,
                ref: t,
                htmlFor: u === "label" ? p : void 0,
                mod: [{ required: d }, m],
                onMouseDown: (x) => {
                    w == null || w(x),
                        !x.defaultPrevented &&
                            x.detail > 1 &&
                            x.preventDefault()
                },
                ...h
            },
            g,
            d &&
                P.createElement(
                    "span",
                    { ...R("required"), "aria-hidden": !0 },
                    " *"
                )
        )
    })
Ns.classes = Ot
Ns.displayName = "@mantine/core/InputLabel"
const Ep = {},
    ud = Ce((e, t) => {
        const n = Y("InputPlaceholder", Ep, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                __staticSelector: u,
                variant: c,
                error: d,
                mod: p,
                ...w
            } = Y("InputPlaceholder", Ep, n),
            g = pe({
                name: ["InputPlaceholder", u],
                props: n,
                classes: Ot,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                rootSelector: "placeholder"
            })
        return P.createElement(J, {
            ...g("placeholder"),
            mod: [{ error: !!d }, p],
            component: "span",
            variant: c,
            ref: t,
            ...w
        })
    })
ud.classes = Ot
ud.displayName = "@mantine/core/InputPlaceholder"
function z2(e, { hasDescription: t, hasError: n }) {
    const r = e.findIndex((a) => a === "input"),
        o = e[r - 1],
        i = e[r + 1]
    return {
        offsetBottom: (t && i === "description") || (n && i === "error"),
        offsetTop: (t && o === "description") || (n && o === "error")
    }
}
const $2 = {
        labelElement: "label",
        inputContainer: (e) => e,
        inputWrapperOrder: ["label", "description", "input", "error"]
    },
    O2 = (e, { size: t }) => ({
        label: {
            "--input-label-size": Gt(t),
            "--input-asterisk-color": void 0
        },
        error: {
            "--input-error-size":
                t === void 0 ? void 0 : `calc(${Gt(t)} - ${L(2)})`
        },
        description: {
            "--input-description-size":
                t === void 0 ? void 0 : `calc(${Gt(t)} - ${L(2)})`
        }
    }),
    cd = Ce((e, t) => {
        const n = Y("InputWrapper", $2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                size: u,
                variant: c,
                __staticSelector: d,
                inputContainer: p,
                inputWrapperOrder: w,
                label: g,
                error: v,
                description: S,
                labelProps: m,
                descriptionProps: h,
                errorProps: y,
                labelElement: C,
                children: R,
                withAsterisk: x,
                id: _,
                required: T,
                __stylesApiProps: M,
                mod: F,
                ...V
            } = n,
            ie = pe({
                name: ["InputWrapper", d],
                props: M || n,
                classes: Ot,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: O2
            }),
            te = { size: u, variant: c, __staticSelector: d },
            ue = M0(_),
            Te = typeof x == "boolean" ? x : T,
            Se = (y == null ? void 0 : y.id) || `${ue}-error`,
            re = (h == null ? void 0 : h.id) || `${ue}-description`,
            z = ue,
            D = !!v && typeof v != "boolean",
            B = !!S,
            K = `${D ? Se : ""} ${B ? re : ""}`,
            le = K.trim().length > 0 ? K.trim() : void 0,
            Ae = (m == null ? void 0 : m.id) || `${ue}-label`,
            me =
                g &&
                P.createElement(
                    Ns,
                    {
                        key: "label",
                        labelElement: C,
                        id: Ae,
                        htmlFor: z,
                        required: Te,
                        ...te,
                        ...m
                    },
                    g
                ),
            ze =
                B &&
                P.createElement(
                    Ps,
                    {
                        key: "description",
                        ...h,
                        ...te,
                        size: (h == null ? void 0 : h.size) || te.size,
                        id: (h == null ? void 0 : h.id) || re
                    },
                    S
                ),
            je = P.createElement(P.Fragment, { key: "input" }, p(R)),
            Qe =
                D &&
                P.createElement(
                    _s,
                    {
                        ...y,
                        ...te,
                        size: (y == null ? void 0 : y.size) || te.size,
                        key: "error",
                        id: (y == null ? void 0 : y.id) || Se
                    },
                    v
                ),
            Mt = w.map((It) => {
                switch (It) {
                    case "label":
                        return me
                    case "input":
                        return je
                    case "description":
                        return ze
                    case "error":
                        return Qe
                    default:
                        return null
                }
            })
        return P.createElement(
            N2,
            {
                value: {
                    getStyles: ie,
                    describedBy: le,
                    inputId: z,
                    labelId: Ae,
                    ...z2(w, { hasDescription: B, hasError: D })
                }
            },
            P.createElement(
                J,
                {
                    ref: t,
                    variant: c,
                    size: u,
                    mod: [{ error: !!v }, F],
                    ...ie("root"),
                    ...V
                },
                Mt
            )
        )
    })
cd.classes = Ot
cd.displayName = "@mantine/core/InputWrapper"
const M2 = {
        variant: "default",
        leftSectionPointerEvents: "none",
        rightSectionPointerEvents: "none",
        withAria: !0,
        withErrorStyles: !0
    },
    I2 = (e, t, n) => ({
        wrapper: {
            "--input-margin-top": n.offsetTop
                ? "calc(var(--mantine-spacing-xs) / 2)"
                : void 0,
            "--input-margin-bottom": n.offsetBottom
                ? "calc(var(--mantine-spacing-xs) / 2)"
                : void 0,
            "--input-height": De(t.size, "input-height"),
            "--input-fz": Gt(t.size),
            "--input-radius": t.radius === void 0 ? void 0 : _n(t.radius),
            "--input-left-section-width":
                t.leftSectionWidth !== void 0 ? L(t.leftSectionWidth) : void 0,
            "--input-right-section-width":
                t.rightSectionWidth !== void 0
                    ? L(t.rightSectionWidth)
                    : void 0,
            "--input-padding-y": t.multiline
                ? De(t.size, "input-padding-y")
                : void 0,
            "--input-left-section-pointer-events": t.leftSectionPointerEvents,
            "--input-right-section-pointer-events": t.rightSectionPointerEvents
        }
    }),
    kt = yt((e, t) => {
        const n = Y("Input", M2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                required: a,
                __staticSelector: u,
                __stylesApiProps: c,
                size: d,
                wrapperProps: p,
                error: w,
                disabled: g,
                leftSection: v,
                leftSectionProps: S,
                leftSectionWidth: m,
                rightSection: h,
                rightSectionProps: y,
                rightSectionWidth: C,
                rightSectionPointerEvents: R,
                leftSectionPointerEvents: x,
                variant: _,
                vars: T,
                pointer: M,
                multiline: F,
                radius: V,
                id: ie,
                withAria: te,
                withErrorStyles: ue,
                mod: Te,
                ...Se
            } = n,
            { styleProps: re, rest: z } = Es(Se),
            D = js(),
            B = {
                offsetBottom: D == null ? void 0 : D.offsetBottom,
                offsetTop: D == null ? void 0 : D.offsetTop
            },
            K = pe({
                name: ["Input", u],
                props: c || n,
                classes: Ot,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                stylesCtx: B,
                rootSelector: "wrapper",
                vars: T,
                varsResolver: I2
            }),
            le = te
                ? {
                      required: a,
                      disabled: g,
                      "aria-invalid": !!w,
                      "aria-describedby": D == null ? void 0 : D.describedBy,
                      id: (D == null ? void 0 : D.inputId) || ie
                  }
                : {}
        return P.createElement(
            J,
            {
                ...K("wrapper"),
                ...re,
                ...p,
                mod: [
                    {
                        error: !!w && ue,
                        pointer: M,
                        disabled: g,
                        multiline: F,
                        "data-with-right-section": !!h,
                        "data-with-left-section": !!v
                    },
                    Te
                ],
                variant: _,
                size: d
            },
            v &&
                P.createElement(
                    "div",
                    {
                        ...S,
                        "data-position": "left",
                        ...K("section", {
                            className: S == null ? void 0 : S.className,
                            style: S == null ? void 0 : S.style
                        })
                    },
                    v
                ),
            P.createElement(J, {
                component: "input",
                ...z,
                ...le,
                ref: t,
                required: a,
                mod: { disabled: g, error: !!w && ue },
                variant: _,
                ...K("input")
            }),
            h &&
                P.createElement(
                    "div",
                    {
                        ...y,
                        "data-position": "right",
                        ...K("section", {
                            className: y == null ? void 0 : y.className,
                            style: y == null ? void 0 : y.style
                        })
                    },
                    h
                )
        )
    })
kt.classes = Ot
kt.Wrapper = cd
kt.Label = Ns
kt.Error = _s
kt.Description = Ps
kt.Placeholder = ud
kt.displayName = "@mantine/core/Input"
function D2(e, t, n) {
    const r = Y(e, t, n),
        {
            label: o,
            description: i,
            error: l,
            required: s,
            classNames: a,
            styles: u,
            className: c,
            unstyled: d,
            __staticSelector: p,
            __stylesApiProps: w,
            errorProps: g,
            labelProps: v,
            descriptionProps: S,
            wrapperProps: m,
            id: h,
            size: y,
            style: C,
            inputContainer: R,
            inputWrapperOrder: x,
            withAsterisk: _,
            variant: T,
            vars: M,
            mod: F,
            ...V
        } = r,
        { styleProps: ie, rest: te } = Es(V),
        ue = {
            label: o,
            description: i,
            error: l,
            required: s,
            classNames: a,
            className: c,
            __staticSelector: p,
            __stylesApiProps: w || r,
            errorProps: g,
            labelProps: v,
            descriptionProps: S,
            unstyled: d,
            styles: u,
            size: y,
            style: C,
            inputContainer: R,
            inputWrapperOrder: x,
            withAsterisk: _,
            variant: T,
            id: h,
            mod: F,
            ...m
        }
    return {
        ...te,
        classNames: a,
        styles: u,
        unstyled: d,
        wrapperProps: { ...ue, ...ie },
        inputProps: {
            required: s,
            classNames: a,
            styles: u,
            unstyled: d,
            size: y,
            __staticSelector: p,
            __stylesApiProps: w || r,
            error: l,
            variant: T,
            id: h
        }
    }
}
const A2 = { __staticSelector: "InputBase", withAria: !0 },
    br = yt((e, t) => {
        const { inputProps: n, wrapperProps: r, ...o } = D2("InputBase", A2, e)
        return P.createElement(
            kt.Wrapper,
            { ...r },
            P.createElement(kt, { ...n, ...o, ref: t })
        )
    })
br.classes = { ...kt.classes, ...kt.Wrapper.classes }
br.displayName = "@mantine/core/InputBase"
const F2 = {
    gap: { type: "spacing", property: "gap" },
    rowGap: { type: "spacing", property: "rowGap" },
    columnGap: { type: "spacing", property: "columnGap" },
    align: { type: "identity", property: "alignItems" },
    justify: { type: "identity", property: "justifyContent" },
    wrap: { type: "identity", property: "flexWrap" },
    direction: { type: "identity", property: "flexDirection" }
}
var eg = { root: "m-8bffd616" }
const B2 = {},
    Wn = yt((e, t) => {
        const n = Y("Flex", B2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                gap: u,
                rowGap: c,
                columnGap: d,
                align: p,
                justify: w,
                wrap: g,
                direction: v,
                ...S
            } = n,
            m = pe({
                name: "Flex",
                classes: eg,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a
            }),
            h = Nn(),
            y = ks(),
            C = V0({
                styleProps: {
                    gap: u,
                    rowGap: c,
                    columnGap: d,
                    align: p,
                    justify: w,
                    wrap: g,
                    direction: v
                },
                theme: h,
                data: F2
            })
        return P.createElement(
            P.Fragment,
            null,
            C.hasResponsiveStyles &&
                P.createElement(Ss, {
                    selector: `.${y}`,
                    styles: C.styles,
                    media: C.media
                }),
            P.createElement(J, {
                ref: t,
                ...m("root", { className: y, style: yo(C.inlineStyles) }),
                ...S
            })
        )
    })
Wn.classes = eg
Wn.displayName = "@mantine/core/Flex"
var tg = { root: "m-b6d8b162" }
function U2(e) {
    if (e === "start") return "start"
    if (e === "end" || e) return "end"
}
const H2 = { inherit: !1 },
    W2 = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
        root: {
            "--text-fz": Gt(o),
            "--text-lh": rx(o),
            "--text-gradient": t === "gradient" ? Fu(r, e) : void 0,
            "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
            "--text-color": i ? Pr(i, e) : void 0
        }
    }),
    ne = yt((e, t) => {
        const n = Y("Text", H2, e),
            {
                lineClamp: r,
                truncate: o,
                inline: i,
                inherit: l,
                gradient: s,
                span: a,
                __staticSelector: u,
                vars: c,
                className: d,
                style: p,
                classNames: w,
                styles: g,
                unstyled: v,
                variant: S,
                mod: m,
                size: h,
                ...y
            } = n,
            C = pe({
                name: ["Text", u],
                props: n,
                classes: tg,
                className: d,
                style: p,
                classNames: w,
                styles: g,
                unstyled: v,
                vars: c,
                varsResolver: W2
            })
        return P.createElement(J, {
            ...C("root", { focusable: !0 }),
            ref: t,
            component: a ? "span" : "p",
            variant: S,
            mod: [
                {
                    "data-truncate": U2(o),
                    "data-line-clamp": typeof r == "number",
                    "data-inline": i,
                    "data-inherit": l
                },
                m
            ],
            size: h,
            ...y
        })
    })
ne.classes = tg
ne.displayName = "@mantine/core/Text"
var ng = { root: "m-849cf0da" }
const V2 = { underline: "hover" },
    Rs = yt((e, t) => {
        const {
            underline: n,
            className: r,
            unstyled: o,
            mod: i,
            ...l
        } = Y("Anchor", V2, e)
        return P.createElement(ne, {
            component: "a",
            ref: t,
            className: ln({ [ng.root]: !o }, r),
            ...l,
            mod: [{ underline: n }, i],
            __staticSelector: "Anchor",
            unstyled: o
        })
    })
Rs.classes = ng
Rs.displayName = "@mantine/core/Anchor"
const rg = E.createContext(null),
    G2 = rg.Provider
function K2() {
    return { withinGroup: !!E.useContext(rg) }
}
var bs = {
    group: "m-11def92b",
    root: "m-f85678b6",
    image: "m-11f8ac07",
    placeholder: "m-104cd71f"
}
const Q2 = {},
    Y2 = (e, { spacing: t }) => ({ group: { "--ag-spacing": jr(t) } }),
    dd = Ce((e, t) => {
        const n = Y("AvatarGroup", Q2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                spacing: u,
                ...c
            } = n,
            d = pe({
                name: "AvatarGroup",
                classes: bs,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: Y2,
                rootSelector: "group"
            })
        return P.createElement(
            G2,
            { value: !0 },
            P.createElement(J, { ref: t, ...d("group"), ...c })
        )
    })
dd.classes = bs
dd.displayName = "@mantine/core/AvatarGroup"
function q2(e) {
    return P.createElement(
        "svg",
        {
            ...e,
            "data-avatar-placeholder-icon": !0,
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        P.createElement("path", {
            d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
        })
    )
}
const X2 = {},
    J2 = (
        e,
        {
            size: t,
            radius: n,
            variant: r,
            gradient: o,
            color: i,
            autoContrast: l
        }
    ) => {
        const s = e.variantColorResolver({
            color: i || "gray",
            theme: e,
            gradient: o,
            variant: r || "light",
            autoContrast: l
        })
        return {
            root: {
                "--avatar-size": De(t, "avatar-size"),
                "--avatar-radius": n === void 0 ? void 0 : _n(n),
                "--avatar-bg": i || r ? s.background : void 0,
                "--avatar-color": i || r ? s.color : void 0,
                "--avatar-bd": i || r ? s.border : void 0
            }
        }
    },
    wo = yt((e, t) => {
        const n = Y("Avatar", X2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                src: u,
                alt: c,
                radius: d,
                color: p,
                gradient: w,
                imageProps: g,
                children: v,
                autoContrast: S,
                mod: m,
                ...h
            } = n,
            y = K2(),
            [C, R] = E.useState(!u),
            x = pe({
                name: "Avatar",
                props: n,
                classes: bs,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: J2
            })
        return (
            E.useEffect(() => R(!u), [u]),
            P.createElement(
                J,
                {
                    ...x("root"),
                    mod: [{ "within-group": y.withinGroup }, m],
                    ref: t,
                    ...h
                },
                C
                    ? P.createElement(
                          "span",
                          { ...x("placeholder"), title: c },
                          v || P.createElement(q2, null)
                      )
                    : P.createElement("img", {
                          ...g,
                          ...x("image"),
                          src: u,
                          alt: c,
                          onError: (_) => {
                              var T
                              R(!0),
                                  (T = g == null ? void 0 : g.onError) ==
                                      null || T.call(g, _)
                          }
                      })
            )
        )
    })
wo.classes = bs
wo.displayName = "@mantine/core/Avatar"
wo.Group = dd
var og = {
    root: "m-347db0ec",
    "root--dot": "m-fbd81e3d",
    label: "m-5add502a",
    section: "m-91fdda9b"
}
const Z2 = {},
    e4 = (
        e,
        {
            radius: t,
            color: n,
            gradient: r,
            variant: o,
            size: i,
            autoContrast: l
        }
    ) => {
        const s = e.variantColorResolver({
            color: n || e.primaryColor,
            theme: e,
            gradient: r,
            variant: o || "filled",
            autoContrast: l
        })
        return {
            root: {
                "--badge-height": De(i, "badge-height"),
                "--badge-padding-x": De(i, "badge-padding-x"),
                "--badge-fz": De(i, "badge-fz"),
                "--badge-radius": t === void 0 ? void 0 : _n(t),
                "--badge-bg": n || o ? s.background : void 0,
                "--badge-color": n || o ? s.color : void 0,
                "--badge-bd": n || o ? s.border : void 0,
                "--badge-dot-color": o === "dot" ? Pr(n, e) : void 0
            }
        }
    },
    pn = yt((e, t) => {
        const n = Y("Badge", Z2, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                radius: u,
                color: c,
                gradient: d,
                leftSection: p,
                rightSection: w,
                children: g,
                variant: v,
                fullWidth: S,
                autoContrast: m,
                circle: h,
                mod: y,
                ...C
            } = n,
            R = pe({
                name: "Badge",
                props: n,
                classes: og,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: e4
            })
        return P.createElement(
            J,
            {
                variant: v,
                mod: [{ block: S, circle: h }, y],
                ...R("root", { variant: v }),
                ref: t,
                ...C
            },
            p &&
                P.createElement(
                    "span",
                    { ...R("section"), "data-position": "left" },
                    p
                ),
            P.createElement("span", { ...R("label") }, g),
            w &&
                P.createElement(
                    "span",
                    { ...R("section"), "data-position": "right" },
                    w
                )
        )
    })
pn.classes = og
pn.displayName = "@mantine/core/Badge"
var Ls = {
    root: "m-77c9d27d",
    inner: "m-80f1301b",
    loader: "m-a25b86ee",
    label: "m-811560b9",
    section: "m-a74036a",
    group: "m-80d6d844"
}
const kp = { orientation: "horizontal" },
    t4 = (e, { borderWidth: t }) => ({
        group: { "--button-border-width": L(t) }
    }),
    fd = Ce((e, t) => {
        const n = Y("ButtonGroup", kp, e),
            {
                className: r,
                style: o,
                classNames: i,
                styles: l,
                unstyled: s,
                orientation: a,
                vars: u,
                borderWidth: c,
                variant: d,
                mod: p,
                ...w
            } = Y("ButtonGroup", kp, e),
            g = pe({
                name: "ButtonGroup",
                props: n,
                classes: Ls,
                className: r,
                style: o,
                classNames: i,
                styles: l,
                unstyled: s,
                vars: u,
                varsResolver: t4,
                rootSelector: "group"
            })
        return P.createElement(J, {
            ...g("group"),
            ref: t,
            variant: d,
            mod: [{ "data-orientation": a }, p],
            role: "group",
            ...w
        })
    })
fd.classes = Ls
fd.displayName = "@mantine/core/ButtonGroup"
const n4 = {},
    r4 = (
        e,
        {
            radius: t,
            color: n,
            gradient: r,
            variant: o,
            size: i,
            justify: l,
            autoContrast: s
        }
    ) => {
        const a = e.variantColorResolver({
            color: n || e.primaryColor,
            theme: e,
            gradient: r,
            variant: o || "filled",
            autoContrast: s
        })
        return {
            root: {
                "--button-justify": l,
                "--button-height": De(i, "button-height"),
                "--button-padding-x": De(i, "button-padding-x"),
                "--button-fz":
                    i != null && i.includes("compact")
                        ? Gt(i.replace("compact-", ""))
                        : Gt(i),
                "--button-radius": t === void 0 ? void 0 : _n(t),
                "--button-bg": n || o ? a.background : void 0,
                "--button-hover": n || o ? a.hover : void 0,
                "--button-color": a.color,
                "--button-bd": n || o ? a.border : void 0,
                "--button-hover-color": n || o ? a.hoverColor : void 0
            }
        }
    },
    Ge = yt((e, t) => {
        const n = Y("Button", n4, e),
            {
                style: r,
                vars: o,
                className: i,
                color: l,
                disabled: s,
                children: a,
                leftSection: u,
                rightSection: c,
                fullWidth: d,
                variant: p,
                radius: w,
                loading: g,
                loaderProps: v,
                gradient: S,
                classNames: m,
                styles: h,
                unstyled: y,
                "data-disabled": C,
                autoContrast: R,
                mod: x,
                ..._
            } = n,
            T = pe({
                name: "Button",
                props: n,
                classes: Ls,
                className: i,
                style: r,
                classNames: m,
                styles: h,
                unstyled: y,
                vars: o,
                varsResolver: r4
            }),
            M = !!u,
            F = !!c
        return P.createElement(
            bi,
            {
                ref: t,
                ...T("root", { active: !s && !g && !C }),
                unstyled: y,
                variant: p,
                disabled: s || g,
                mod: [
                    {
                        disabled: s || C,
                        loading: g,
                        block: d,
                        "with-left-section": M,
                        "with-right-section": F
                    },
                    x
                ],
                ..._
            },
            P.createElement(
                J,
                { component: "span", ...T("loader"), "aria-hidden": !0 },
                P.createElement(Li, {
                    color: "var(--button-color)",
                    size: "calc(var(--button-height) / 1.8)",
                    ...v
                })
            ),
            P.createElement(
                "span",
                { ...T("inner") },
                u &&
                    P.createElement(
                        J,
                        {
                            component: "span",
                            ...T("section"),
                            mod: { position: "left" }
                        },
                        u
                    ),
                P.createElement(
                    J,
                    { component: "span", mod: { loading: g }, ...T("label") },
                    a
                ),
                c &&
                    P.createElement(
                        J,
                        {
                            component: "span",
                            ...T("section"),
                            mod: { position: "right" }
                        },
                        c
                    )
            )
        )
    })
Ge.classes = Ls
Ge.displayName = "@mantine/core/Button"
Ge.Group = fd
const [o4, i4] = td("Card component was not found in tree")
var pd = { root: "m-e615b15f", section: "m-599a2148" }
const l4 = {},
    Ts = yt((e, t) => {
        const n = Y("CardSection", l4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                vars: s,
                withBorder: a,
                inheritPadding: u,
                mod: c,
                ...d
            } = n,
            p = i4()
        return P.createElement(J, {
            ref: t,
            mod: [{ "with-border": a, "inherit-padding": u }, c],
            ...p.getStyles("section", {
                className: o,
                style: i,
                styles: l,
                classNames: r
            }),
            ...d
        })
    })
Ts.classes = pd
Ts.displayName = "@mantine/core/CardSection"
const s4 = {},
    a4 = (e, { padding: t }) => ({ root: { "--card-padding": jr(t) } }),
    Vn = yt((e, t) => {
        const n = Y("Card", s4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                children: u,
                padding: c,
                ...d
            } = n,
            p = pe({
                name: "Card",
                props: n,
                classes: pd,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: a4
            }),
            w = E.Children.toArray(u),
            g = w.map((v, S) =>
                typeof v == "object" && v && "type" in v && v.type === Ts
                    ? E.cloneElement(v, {
                          "data-first-section": S === 0 || void 0,
                          "data-last-section": S === w.length - 1 || void 0
                      })
                    : v
            )
        return P.createElement(
            o4,
            { value: { getStyles: p } },
            P.createElement(vo, { ref: t, unstyled: s, ...p("root"), ...d }, g)
        )
    })
Vn.classes = pd
Vn.displayName = "@mantine/core/Card"
Vn.Section = Ts
var ig = { root: "m-7485cace" }
const u4 = {},
    c4 = (e, { size: t, fluid: n }) => ({
        root: { "--container-size": n ? void 0 : De(t, "container-size") }
    }),
    rr = Ce((e, t) => {
        const n = Y("Container", u4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                fluid: u,
                mod: c,
                ...d
            } = n,
            p = pe({
                name: "Container",
                classes: ig,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: c4
            })
        return P.createElement(J, {
            ref: t,
            mod: [{ fluid: u }, c],
            ...p("root"),
            ...d
        })
    })
rr.classes = ig
rr.displayName = "@mantine/core/Container"
var lg = { root: "m-3eebeb36", label: "m-9e365f20" }
const d4 = { orientation: "horizontal" },
    f4 = (e, { color: t, variant: n, size: r }) => ({
        root: {
            "--divider-color": t ? Pr(t, e) : void 0,
            "--divider-border-style": n,
            "--divider-size": De(r, "divider-size")
        }
    }),
    ei = Ce((e, t) => {
        const n = Y("Divider", d4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                color: u,
                orientation: c,
                label: d,
                labelPosition: p,
                mod: w,
                ...g
            } = n,
            v = pe({
                name: "Divider",
                classes: lg,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: f4
            })
        return P.createElement(
            J,
            {
                ref: t,
                mod: [{ orientation: c, "with-label": !!d }, w],
                ...v("root"),
                ...g,
                role: "separator"
            },
            d &&
                P.createElement(
                    J,
                    { component: "span", mod: { position: p }, ...v("label") },
                    d
                )
        )
    })
ei.classes = lg
ei.displayName = "@mantine/core/Divider"
const [p4, sg] = td("Grid component was not found in tree"),
    Hu = (e, t) =>
        e === "content"
            ? "auto"
            : e === "auto"
              ? "0rem"
              : e
                ? `${100 / (t / e)}%`
                : void 0,
    Cp = (e, t, n) =>
        n || e === "auto" ? "100%" : e === "content" ? "unset" : Hu(e, t),
    jp = (e, t) => {
        if (e) return e === "auto" || t ? "1" : "auto"
    },
    Pp = (e, t) => (e === 0 ? "0" : e ? `${100 / (t / e)}%` : void 0)
function h4({ span: e, order: t, offset: n, selector: r }) {
    var p
    const o = Nn(),
        i = sg(),
        s = Ho(e) === void 0 ? 12 : Ho(e),
        a = yo({
            "--col-order": (p = Ho(t)) == null ? void 0 : p.toString(),
            "--col-flex-grow": jp(s, i.grow),
            "--col-flex-basis": Hu(s, i.columns),
            "--col-width": s === "content" ? "auto" : void 0,
            "--col-max-width": Cp(s, i.columns, i.grow),
            "--col-offset": Pp(Ho(n), i.columns)
        }),
        u = rt(o.breakpoints).reduce((w, g) => {
            var v
            return (
                w[g] || (w[g] = {}),
                typeof t == "object" &&
                    t[g] !== void 0 &&
                    (w[g]["--col-order"] =
                        (v = t[g]) == null ? void 0 : v.toString()),
                typeof e == "object" &&
                    e[g] !== void 0 &&
                    ((w[g]["--col-flex-grow"] = jp(e[g], i.grow)),
                    (w[g]["--col-flex-basis"] = Hu(e[g], i.columns)),
                    (w[g]["--col-width"] =
                        e[g] === "content" ? "auto" : void 0),
                    (w[g]["--col-max-width"] = Cp(e[g], i.columns, i.grow))),
                typeof n == "object" &&
                    n[g] !== void 0 &&
                    (w[g]["--col-offset"] = Pp(n[g], i.columns)),
                w
            )
        }, {}),
        d = $0(rt(u), o)
            .filter((w) => rt(u[w.value]).length > 0)
            .map((w) => ({
                query: `(min-width: ${o.breakpoints[w.value]})`,
                styles: u[w.value]
            }))
    return P.createElement(Ss, { styles: a, media: d, selector: r })
}
var hd = { root: "m-410352e9", inner: "m-dee7bd2f", col: "m-96bdd299" }
const m4 = { span: 12 },
    md = Ce((e, t) => {
        const n = Y("GridCol", m4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                vars: s,
                span: a,
                order: u,
                offset: c,
                ...d
            } = n,
            p = sg(),
            w = ks()
        return P.createElement(
            P.Fragment,
            null,
            P.createElement(h4, {
                selector: `.${w}`,
                span: a,
                order: u,
                offset: c
            }),
            P.createElement(J, {
                ref: t,
                ...p.getStyles("col", {
                    className: ln(o, w),
                    style: i,
                    classNames: r,
                    styles: l
                }),
                ...d
            })
        )
    })
md.classes = hd
md.displayName = "@mantine/core/GridCol"
function g4({ gutter: e, selector: t }) {
    const n = Nn(),
        r = yo({ "--grid-gutter": jr(Ho(e)) }),
        o = rt(n.breakpoints).reduce(
            (s, a) => (
                s[a] || (s[a] = {}),
                typeof e == "object" &&
                    e[a] !== void 0 &&
                    (s[a]["--grid-gutter"] = jr(e[a])),
                s
            ),
            {}
        ),
        l = $0(rt(o), n)
            .filter((s) => rt(o[s.value]).length > 0)
            .map((s) => ({
                query: `(min-width: ${n.breakpoints[s.value]})`,
                styles: o[s.value]
            }))
    return P.createElement(Ss, { styles: r, media: l, selector: t })
}
const y4 = { gutter: "md", grow: !1, columns: 12 },
    v4 = (e, { justify: t, align: n, overflow: r }) => ({
        root: { "--grid-justify": t, "--grid-align": n, "--grid-overflow": r }
    }),
    Si = Ce((e, t) => {
        const n = Y("Grid", y4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                grow: u,
                gutter: c,
                columns: d,
                align: p,
                justify: w,
                children: g,
                ...v
            } = n,
            S = pe({
                name: "Grid",
                classes: hd,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: v4
            }),
            m = ks()
        return P.createElement(
            p4,
            { value: { getStyles: S, grow: u, columns: d } },
            P.createElement(g4, { selector: `.${m}`, ...n }),
            P.createElement(
                J,
                { ref: t, ...S("root", { className: m }), ...v },
                P.createElement("div", { ...S("inner") }, g)
            )
        )
    })
Si.classes = hd
Si.displayName = "@mantine/core/Grid"
Si.Col = md
var ag = { root: "m-9e117634" }
const w4 = {},
    x4 = (e, { radius: t, fit: n }) => ({
        root: {
            "--image-radius": t === void 0 ? void 0 : _n(t),
            "--image-object-fit": n
        }
    }),
    zs = yt((e, t) => {
        const n = Y("Image", w4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                onError: u,
                src: c,
                radius: d,
                fit: p,
                fallbackSrc: w,
                mod: g,
                ...v
            } = n,
            [S, m] = E.useState(!c)
        E.useEffect(() => m(!c), [c])
        const h = pe({
            name: "Image",
            classes: ag,
            props: n,
            className: o,
            style: i,
            classNames: r,
            styles: l,
            unstyled: s,
            vars: a,
            varsResolver: x4
        })
        return S && w
            ? P.createElement(J, {
                  component: "img",
                  src: w,
                  ...h("root"),
                  onError: u,
                  mod: ["fallback", g],
                  ...v
              })
            : P.createElement(J, {
                  component: "img",
                  ref: t,
                  ...h("root"),
                  src: c,
                  onError: (y) => {
                      u == null || u(y), m(!0)
                  },
                  mod: g,
                  ...v
              })
    })
zs.classes = ag
zs.displayName = "@mantine/core/Image"
function Wu() {
    return (
        (Wu = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        Wu.apply(this, arguments)
    )
}
function S4(e, t) {
    if (e == null) return {}
    var n = {},
        r = Object.keys(e),
        o,
        i
    for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
    return n
}
var E4 = E.useLayoutEffect,
    k4 = function (t) {
        var n = E.useRef(t)
        return (
            E4(function () {
                n.current = t
            }),
            n
        )
    },
    _p = function (t, n) {
        if (typeof t == "function") {
            t(n)
            return
        }
        t.current = n
    },
    C4 = function (t, n) {
        var r = E.useRef()
        return E.useCallback(
            function (o) {
                ;(t.current = o),
                    r.current && _p(r.current, null),
                    (r.current = n),
                    n && _p(n, o)
            },
            [n]
        )
    },
    Np = {
        "min-height": "0",
        "max-height": "none",
        height: "0",
        visibility: "hidden",
        overflow: "hidden",
        position: "absolute",
        "z-index": "-1000",
        top: "0",
        right: "0"
    },
    j4 = function (t) {
        Object.keys(Np).forEach(function (n) {
            t.style.setProperty(n, Np[n], "important")
        })
    },
    Rp = j4,
    it = null,
    bp = function (t, n) {
        var r = t.scrollHeight
        return n.sizingStyle.boxSizing === "border-box"
            ? r + n.borderSize
            : r - n.paddingSize
    }
function P4(e, t, n, r) {
    n === void 0 && (n = 1),
        r === void 0 && (r = 1 / 0),
        it ||
            ((it = document.createElement("textarea")),
            it.setAttribute("tabindex", "-1"),
            it.setAttribute("aria-hidden", "true"),
            Rp(it)),
        it.parentNode === null && document.body.appendChild(it)
    var o = e.paddingSize,
        i = e.borderSize,
        l = e.sizingStyle,
        s = l.boxSizing
    Object.keys(l).forEach(function (p) {
        var w = p
        it.style[w] = l[w]
    }),
        Rp(it),
        (it.value = t)
    var a = bp(it, e)
    ;(it.value = t), (a = bp(it, e)), (it.value = "x")
    var u = it.scrollHeight - o,
        c = u * n
    s === "border-box" && (c = c + o + i), (a = Math.max(c, a))
    var d = u * r
    return s === "border-box" && (d = d + o + i), (a = Math.min(d, a)), [a, u]
}
var Lp = function () {},
    _4 = function (t, n) {
        return t.reduce(function (r, o) {
            return (r[o] = n[o]), r
        }, {})
    },
    N4 = [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "boxSizing",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "letterSpacing",
        "lineHeight",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "tabSize",
        "textIndent",
        "textRendering",
        "textTransform",
        "width",
        "wordBreak"
    ],
    R4 = !!document.documentElement.currentStyle,
    b4 = function (t) {
        var n = window.getComputedStyle(t)
        if (n === null) return null
        var r = _4(N4, n),
            o = r.boxSizing
        if (o === "") return null
        R4 &&
            o === "border-box" &&
            (r.width =
                parseFloat(r.width) +
                parseFloat(r.borderRightWidth) +
                parseFloat(r.borderLeftWidth) +
                parseFloat(r.paddingRight) +
                parseFloat(r.paddingLeft) +
                "px")
        var i = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
            l = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth)
        return { sizingStyle: r, paddingSize: i, borderSize: l }
    },
    L4 = b4
function ug(e, t, n) {
    var r = k4(n)
    E.useLayoutEffect(function () {
        var o = function (l) {
            return r.current(l)
        }
        if (e)
            return (
                e.addEventListener(t, o),
                function () {
                    return e.removeEventListener(t, o)
                }
            )
    }, [])
}
var T4 = function (t) {
        ug(window, "resize", t)
    },
    z4 = function (t) {
        ug(document.fonts, "loadingdone", t)
    },
    $4 = [
        "cacheMeasurements",
        "maxRows",
        "minRows",
        "onChange",
        "onHeightChange"
    ],
    O4 = function (t, n) {
        var r = t.cacheMeasurements,
            o = t.maxRows,
            i = t.minRows,
            l = t.onChange,
            s = l === void 0 ? Lp : l,
            a = t.onHeightChange,
            u = a === void 0 ? Lp : a,
            c = S4(t, $4),
            d = c.value !== void 0,
            p = E.useRef(null),
            w = C4(p, n),
            g = E.useRef(0),
            v = E.useRef(),
            S = function () {
                var y = p.current,
                    C = r && v.current ? v.current : L4(y)
                if (C) {
                    v.current = C
                    var R = P4(C, y.value || y.placeholder || "x", i, o),
                        x = R[0],
                        _ = R[1]
                    g.current !== x &&
                        ((g.current = x),
                        y.style.setProperty("height", x + "px", "important"),
                        u(x, { rowHeight: _ }))
                }
            },
            m = function (y) {
                d || S(), s(y)
            }
        return (
            E.useLayoutEffect(S),
            T4(S),
            z4(S),
            E.createElement("textarea", Wu({}, c, { onChange: m, ref: w }))
        )
    },
    M4 = E.forwardRef(O4)
const I4 = {},
    $s = Ce((e, t) => {
        const {
                autosize: n,
                maxRows: r,
                minRows: o,
                __staticSelector: i,
                resize: l,
                ...s
            } = Y("Textarea", I4, e),
            a = n && sx() !== "test",
            u = a ? { maxRows: r, minRows: o } : {}
        return P.createElement(br, {
            component: a ? M4 : "textarea",
            ref: t,
            ...s,
            __staticSelector: i || "Textarea",
            multiline: !0,
            "data-no-overflow": (n && r === void 0) || void 0,
            __vars: { "--input-resize": l },
            ...u
        })
    })
$s.classes = br.classes
$s.displayName = "@mantine/core/Textarea"
const [D4, Os] = td("Pagination.Root component was not found in tree")
var Ti = { root: "m-4addd315", control: "m-326d024a", dots: "m-4ad7767d" }
const A4 = { withPadding: !0 },
    zi = Ce((e, t) => {
        const n = Y("PaginationControl", A4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                vars: s,
                active: a,
                disabled: u,
                withPadding: c,
                mod: d,
                ...p
            } = n,
            w = Os(),
            g = u || w.disabled
        return P.createElement(bi, {
            ref: t,
            disabled: g,
            mod: [{ active: a, disabled: g, "with-padding": c }, d],
            ...w.getStyles("control", {
                className: o,
                style: i,
                classNames: r,
                styles: l,
                active: !g
            }),
            ...p
        })
    })
zi.classes = Ti
zi.displayName = "@mantine/core/PaginationControl"
function $i({ style: e, children: t, path: n, ...r }) {
    return P.createElement(
        "svg",
        {
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                width: "calc(var(--pagination-control-size) / 1.8)",
                height: "calc(var(--pagination-control-size) / 1.8)",
                ...e
            },
            ...r
        },
        P.createElement("path", { d: n, fill: "currentColor" })
    )
}
const F4 = (e) =>
        P.createElement($i, {
            ...e,
            path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
        }),
    B4 = (e) =>
        P.createElement($i, {
            ...e,
            path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
        }),
    U4 = (e) =>
        P.createElement($i, {
            ...e,
            path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
        }),
    H4 = (e) =>
        P.createElement($i, {
            ...e,
            path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
        }),
    W4 = (e) =>
        P.createElement($i, {
            ...e,
            path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
        }),
    V4 = { icon: W4 },
    Ms = Ce((e, t) => {
        const n = Y("PaginationDots", V4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                vars: s,
                icon: a,
                ...u
            } = n,
            c = Os(),
            d = a
        return P.createElement(
            J,
            {
                ref: t,
                ...c.getStyles("dots", {
                    className: o,
                    style: i,
                    styles: l,
                    classNames: r
                }),
                ...u
            },
            P.createElement(d, {
                style: {
                    width: "calc(var(--pagination-control-size) / 1.8)",
                    height: "calc(var(--pagination-control-size) / 1.8)"
                }
            })
        )
    })
Ms.classes = Ti
Ms.displayName = "@mantine/core/PaginationDots"
function Is({ icon: e, name: t, action: n, type: r }) {
    const o = { icon: e },
        i = E.forwardRef((l, s) => {
            const { icon: a, ...u } = Y(t, o, l),
                c = a,
                d = Os(),
                p = r === "next" ? d.active === d.total : d.active === 1
            return P.createElement(
                zi,
                {
                    disabled: d.disabled || p,
                    ref: s,
                    onClick: d[n],
                    withPadding: !1,
                    ...u
                },
                P.createElement(c, {
                    style: {
                        width: "calc(var(--pagination-control-size) / 1.8)",
                        height: "calc(var(--pagination-control-size) / 1.8)"
                    }
                })
            )
        })
    return (i.displayName = `@mantine/core/${t}`), i
}
const cg = Is({
        icon: F4,
        name: "PaginationNext",
        action: "onNext",
        type: "next"
    }),
    dg = Is({
        icon: B4,
        name: "PaginationPrevious",
        action: "onPrevious",
        type: "previous"
    }),
    fg = Is({
        icon: U4,
        name: "PaginationFirst",
        action: "onFirst",
        type: "previous"
    }),
    pg = Is({
        icon: H4,
        name: "PaginationLast",
        action: "onLast",
        type: "next"
    })
function gd({ dotsIcon: e }) {
    const t = Os(),
        n = t.range.map((r, o) => {
            var i
            return r === "dots"
                ? P.createElement(Ms, { icon: e, key: o })
                : P.createElement(
                      zi,
                      {
                          key: o,
                          active: r === t.active,
                          "aria-current": r === t.active ? "page" : void 0,
                          onClick: () => t.onChange(r),
                          disabled: t.disabled,
                          ...((i = t.getItemProps) == null
                              ? void 0
                              : i.call(t, r))
                      },
                      r
                  )
        })
    return P.createElement(P.Fragment, null, n)
}
gd.displayName = "@mantine/core/PaginationItems"
const G4 = { siblings: 1, boundaries: 1 },
    K4 = (e, { size: t, radius: n, color: r, autoContrast: o }) => ({
        root: {
            "--pagination-control-radius": n === void 0 ? void 0 : _n(n),
            "--pagination-control-size": De(t, "pagination-control-size"),
            "--pagination-control-fz": Gt(t),
            "--pagination-active-bg": r ? Pr(r, e) : void 0,
            "--pagination-active-color": Xx(o, e)
                ? F0({ color: r, theme: e })
                : void 0
        }
    }),
    Ds = Ce((e, t) => {
        const n = Y("PaginationRoot", G4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                total: u,
                value: c,
                defaultValue: d,
                onChange: p,
                disabled: w,
                siblings: g,
                boundaries: v,
                color: S,
                radius: m,
                onNextPage: h,
                onPreviousPage: y,
                onFirstPage: C,
                onLastPage: R,
                getItemProps: x,
                autoContrast: _,
                ...T
            } = n,
            M = pe({
                name: "Pagination",
                classes: Ti,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: K4
            }),
            {
                range: F,
                setPage: V,
                next: ie,
                previous: te,
                active: ue,
                first: Te,
                last: Se
            } = px({
                page: c,
                initialPage: d,
                onChange: p,
                total: u,
                siblings: g,
                boundaries: v
            }),
            re = ol(h, ie),
            z = ol(y, te),
            D = ol(C, Te),
            B = ol(R, Se)
        return P.createElement(
            D4,
            {
                value: {
                    total: u,
                    range: F,
                    active: ue,
                    disabled: w,
                    getItemProps: x,
                    onChange: V,
                    onNext: re,
                    onPrevious: z,
                    onFirst: D,
                    onLast: B,
                    getStyles: M
                }
            },
            P.createElement(J, { ref: t, ...M("root"), ...T })
        )
    })
Ds.classes = Ti
Ds.displayName = "@mantine/core/PaginationRoot"
const Q4 = { withControls: !0, siblings: 1, boundaries: 1, gap: 8 },
    Yt = Ce((e, t) => {
        const n = Y("Pagination", Q4, e),
            {
                withEdges: r,
                withControls: o,
                getControlProps: i,
                nextIcon: l,
                previousIcon: s,
                lastIcon: a,
                firstIcon: u,
                dotsIcon: c,
                total: d,
                gap: p,
                ...w
            } = n
        return d <= 0
            ? null
            : P.createElement(
                  Ds,
                  { ref: t, total: d, ...w },
                  P.createElement(
                      nr,
                      { gap: p },
                      r &&
                          P.createElement(fg, {
                              icon: u,
                              ...(i == null ? void 0 : i("first"))
                          }),
                      o &&
                          P.createElement(dg, {
                              icon: s,
                              ...(i == null ? void 0 : i("previous"))
                          }),
                      P.createElement(gd, { dotsIcon: c }),
                      o &&
                          P.createElement(cg, {
                              icon: l,
                              ...(i == null ? void 0 : i("next"))
                          }),
                      r &&
                          P.createElement(pg, {
                              icon: a,
                              ...(i == null ? void 0 : i("last"))
                          })
                  )
              )
    })
Yt.classes = Ti
Yt.displayName = "@mantine/core/Pagination"
Yt.Root = Ds
Yt.Control = zi
Yt.Dots = Ms
Yt.First = fg
Yt.Last = pg
Yt.Next = cg
Yt.Previous = dg
Yt.Items = gd
const Y4 = ({ reveal: e }) =>
    P.createElement(
        "svg",
        {
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                width: "var(--psi-icon-size)",
                height: "var(--psi-icon-size)"
            }
        },
        P.createElement("path", {
            d: e
                ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z"
                : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
        })
    )
var Vu = {
    root: "m-f61ca620",
    input: "m-ccf8da4c",
    innerInput: "m-f2d85dd2",
    visibilityToggle: "m-b1072d44"
}
const q4 = { visibilityToggleIcon: Y4 },
    X4 = (e, { size: t }) => ({
        root: {
            "--psi-icon-size": De(t, "psi-icon-size"),
            "--psi-button-size": De(t, "psi-button-size")
        }
    }),
    As = Ce((e, t) => {
        const n = Y("PasswordInput", q4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                required: u,
                error: c,
                leftSection: d,
                disabled: p,
                id: w,
                variant: g,
                inputContainer: v,
                description: S,
                label: m,
                size: h,
                errorProps: y,
                descriptionProps: C,
                labelProps: R,
                withAsterisk: x,
                inputWrapperOrder: _,
                wrapperProps: T,
                radius: M,
                rightSection: F,
                rightSectionWidth: V,
                rightSectionPointerEvents: ie,
                leftSectionWidth: te,
                visible: ue,
                defaultVisible: Te,
                onVisibilityChange: Se,
                visibilityToggleIcon: re,
                visibilityToggleButtonProps: z,
                rightSectionProps: D,
                leftSectionProps: B,
                leftSectionPointerEvents: K,
                mod: le,
                ...Ae
            } = n,
            me = M0(w),
            [ze, je] = I0({
                value: ue,
                defaultValue: Te,
                finalValue: !1,
                onChange: Se
            }),
            Qe = () => je(!ze),
            Mt = pe({
                name: "PasswordInput",
                classes: Vu,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: X4
            }),
            { resolvedClassNames: It, resolvedStyles: Rn } = Mx({
                classNames: r,
                styles: l,
                props: n
            }),
            { styleProps: $e, rest: O } = Es(Ae),
            Q = re,
            q = P.createElement(
                yr,
                {
                    ...Mt("visibilityToggle"),
                    disabled: p,
                    radius: M,
                    "aria-hidden": !z,
                    tabIndex: -1,
                    ...z,
                    variant: "subtle",
                    color: "gray",
                    unstyled: s,
                    onMouseDown: (X) => {
                        var Ue
                        X.preventDefault(),
                            (Ue = z == null ? void 0 : z.onMouseDown) == null ||
                                Ue.call(z, X),
                            Qe()
                    },
                    onKeyDown: (X) => {
                        var Ue
                        ;(Ue = z == null ? void 0 : z.onKeyDown) == null ||
                            Ue.call(z, X),
                            X.key === " " && (X.preventDefault(), Qe())
                    }
                },
                P.createElement(Q, { reveal: ze })
            )
        return P.createElement(
            kt.Wrapper,
            {
                required: u,
                id: me,
                label: m,
                error: c,
                description: S,
                size: h,
                classNames: It,
                styles: Rn,
                __staticSelector: "PasswordInput",
                errorProps: y,
                descriptionProps: C,
                unstyled: s,
                withAsterisk: x,
                inputWrapperOrder: _,
                inputContainer: v,
                variant: g,
                labelProps: { ...R, htmlFor: me },
                mod: le,
                ...Mt("root"),
                ...$e,
                ...T
            },
            P.createElement(
                kt,
                {
                    component: "div",
                    error: c,
                    leftSection: d,
                    size: h,
                    classNames: { ...It, input: ln(Vu.input, It.input) },
                    styles: Rn,
                    radius: M,
                    disabled: p,
                    __staticSelector: "PasswordInput",
                    rightSectionWidth: V,
                    rightSection: F ?? q,
                    variant: g,
                    unstyled: s,
                    leftSectionWidth: te,
                    rightSectionPointerEvents: ie || "all",
                    rightSectionProps: D,
                    leftSectionProps: B,
                    leftSectionPointerEvents: K,
                    withAria: !1
                },
                P.createElement("input", {
                    required: u,
                    "data-invalid": !!c || void 0,
                    "data-with-left-section": !!d || void 0,
                    ...Mt("innerInput"),
                    disabled: p,
                    id: me,
                    ref: t,
                    ...O,
                    autoComplete: O.autoComplete || "off",
                    type: ze ? "text" : "password"
                })
            )
        )
    })
As.classes = { ...br.classes, ...Vu }
As.displayName = "@mantine/core/PasswordInput"
var hg = { root: "m-18320242", "skeleton-fade": "m-299c329c" }
const J4 = { visible: !0, animate: !0 },
    Z4 = (e, { width: t, height: n, radius: r, circle: o }) => ({
        root: {
            "--skeleton-height": L(n),
            "--skeleton-width": L(o ? n : t),
            "--skeleton-radius": o ? "1000px" : r === void 0 ? void 0 : _n(r)
        }
    }),
    yd = Ce((e, t) => {
        const n = Y("Skeleton", J4, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                width: u,
                height: c,
                circle: d,
                visible: p,
                radius: w,
                animate: g,
                mod: v,
                ...S
            } = n,
            m = pe({
                name: "Skeleton",
                classes: hg,
                props: n,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: Z4
            })
        return P.createElement(J, {
            ref: t,
            ...m("root"),
            mod: [{ visible: p, animate: g }, v],
            ...S
        })
    })
yd.classes = hg
yd.displayName = "@mantine/core/Skeleton"
var mg = { root: "m-6d731127" }
const eS = { gap: "md", align: "stretch", justify: "flex-start" },
    tS = (e, { gap: t, align: n, justify: r }) => ({
        root: { "--stack-gap": jr(t), "--stack-align": n, "--stack-justify": r }
    }),
    Xl = Ce((e, t) => {
        const n = Y("Stack", eS, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                vars: a,
                align: u,
                justify: c,
                gap: d,
                variant: p,
                ...w
            } = n,
            g = pe({
                name: "Stack",
                props: n,
                classes: mg,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: a,
                varsResolver: tS
            })
        return P.createElement(J, { ref: t, ...g("root"), variant: p, ...w })
    })
Xl.classes = mg
Xl.displayName = "@mantine/core/Stack"
const nS = {},
    Kt = Ce((e, t) => {
        const n = Y("TextInput", nS, e)
        return P.createElement(br, {
            component: "input",
            ref: t,
            ...n,
            __staticSelector: "TextInput"
        })
    })
Kt.classes = br.classes
Kt.displayName = "@mantine/core/TextInput"
const rS = ["h1", "h2", "h3", "h4", "h5", "h6"]
function oS(e, t) {
    const n = t !== void 0 ? t : `h${e}`
    return rS.includes(n)
        ? {
              fontSize: `var(--mantine-${n}-font-size)`,
              fontWeight: `var(--mantine-${n}-font-weight)`,
              lineHeight: `var(--mantine-${n}-line-height)`
          }
        : {
              fontSize: L(n),
              fontWeight: `var(--mantine-h${e}-font-weight)`,
              lineHeight: `var(--mantine-h${e}-line-height)`
          }
}
var gg = { root: "m-8a5d1357" }
const iS = { order: 1 },
    lS = (e, { order: t, size: n, lineClamp: r, textWrap: o }) => {
        const i = oS(t, n)
        return {
            root: {
                "--title-fw": i.fontWeight,
                "--title-lh": i.lineHeight,
                "--title-fz": i.fontSize,
                "--title-line-clamp":
                    typeof r == "number" ? r.toString() : void 0,
                "--title-text-wrap": o
            }
        }
    },
    st = Ce((e, t) => {
        const n = Y("Title", iS, e),
            {
                classNames: r,
                className: o,
                style: i,
                styles: l,
                unstyled: s,
                order: a,
                vars: u,
                size: c,
                variant: d,
                lineClamp: p,
                textWrap: w,
                mod: g,
                ...v
            } = n,
            S = pe({
                name: "Title",
                props: n,
                classes: gg,
                className: o,
                style: i,
                classNames: r,
                styles: l,
                unstyled: s,
                vars: u,
                varsResolver: lS
            })
        return [1, 2, 3, 4, 5, 6].includes(a)
            ? P.createElement(J, {
                  ...S("root"),
                  component: `h${a}`,
                  variant: d,
                  ref: t,
                  mod: [
                      { order: a, "data-line-clamp": typeof p == "number" },
                      g
                  ],
                  size: c,
                  ...v
              })
            : null
    })
st.classes = gg
st.displayName = "@mantine/core/Title"
const yg = E.createContext(),
    sS = (e, t) => {
        switch (t.type) {
            case "LOGIN":
                return { user: t.payload }
            case "LOGOUT":
                return { user: null }
            default:
                return e
        }
    },
    aS = ({ children: e }) => {
        const [t, n] = E.useReducer(sS, { user: null })
        return (
            E.useEffect(() => {
                const r = localStorage.getItem("token")
                r && n({ type: "LOGIN", payload: { token: r } })
            }, []),
            E.useEffect(() => {
                var r
                localStorage.setItem(
                    "token",
                    ((r = t.user) == null ? void 0 : r.token) || ""
                )
            }, [t.user]),
            f.jsx(yg.Provider, { value: { ...t, dispatch: n }, children: e })
        )
    },
    vd = () => {
        const e = E.useContext(yg)
        if (!e)
            throw Error(
                "useAuthContext must be used inside a AuthContextProvider."
            )
        return e
    },
    uS = () => {
        const { dispatch: e } = vd()
        return {
            logout: () => {
                localStorage.removeItem("token"), e({ type: "LOGOUT" })
            }
        }
    }
var vg = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Tp = P.createContext && P.createContext(vg),
    cS = ["attr", "size", "title"]
function dS(e, t) {
    if (e == null) return {}
    var n = fS(e, t),
        r,
        o
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e)
        for (o = 0; o < i.length; o++)
            (r = i[o]),
                !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (n[r] = e[r])
    }
    return n
}
function fS(e, t) {
    if (e == null) return {}
    var n = {},
        r = Object.keys(e),
        o,
        i
    for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
    return n
}
function Jl() {
    return (
        (Jl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        Jl.apply(this, arguments)
    )
}
function zp(e, t) {
    var n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e)
        t &&
            (r = r.filter(function (o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })),
            n.push.apply(n, r)
    }
    return n
}
function Zl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {}
        t % 2
            ? zp(Object(n), !0).forEach(function (r) {
                  pS(e, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : zp(Object(n)).forEach(function (r) {
                    Object.defineProperty(
                        e,
                        r,
                        Object.getOwnPropertyDescriptor(n, r)
                    )
                })
    }
    return e
}
function pS(e, t, n) {
    return (
        (t = hS(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    )
}
function hS(e) {
    var t = mS(e, "string")
    return typeof t == "symbol" ? t : String(t)
}
function mS(e, t) {
    if (typeof e != "object" || e === null) return e
    var n = e[Symbol.toPrimitive]
    if (n !== void 0) {
        var r = n.call(e, t || "default")
        if (typeof r != "object") return r
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function wg(e) {
    return (
        e &&
        e.map((t, n) =>
            P.createElement(t.tag, Zl({ key: n }, t.attr), wg(t.child))
        )
    )
}
function sn(e) {
    return (t) =>
        P.createElement(gS, Jl({ attr: Zl({}, e.attr) }, t), wg(e.child))
}
function gS(e) {
    var t = (n) => {
        var { attr: r, size: o, title: i } = e,
            l = dS(e, cS),
            s = o || n.size || "1em",
            a
        return (
            n.className && (a = n.className),
            e.className && (a = (a ? a + " " : "") + e.className),
            P.createElement(
                "svg",
                Jl(
                    {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    },
                    n.attr,
                    r,
                    l,
                    {
                        className: a,
                        style: Zl(
                            Zl({ color: e.color || n.color }, n.style),
                            e.style
                        ),
                        height: s,
                        width: s,
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                ),
                i && P.createElement("title", null, i),
                e.children
            )
        )
    }
    return Tp !== void 0
        ? P.createElement(Tp.Consumer, null, (n) => t(n))
        : t(vg)
}
function yS(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [
            {
                tag: "path",
                attr: { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" },
                child: []
            },
            {
                tag: "polyline",
                attr: { points: "10 17 15 12 10 7" },
                child: []
            },
            {
                tag: "line",
                attr: { x1: "15", y1: "12", x2: "3", y2: "12" },
                child: []
            }
        ]
    })(e)
}
const vS = () => {
    const [e, t] = E.useState(!1),
        [n, r] = E.useState(!1),
        o = () => {
            t(!e)
        },
        i = () => {
            r(!n)
        },
        l = () => {
            r(!1)
        },
        { logout: s } = uS(),
        a = () => {
            s()
        },
        { user: u } = vd()
    return f.jsx(f.Fragment, {
        children: f.jsx("nav", {
            className:
                "bg-black/5 border-b border-black/50 backdrop-blur-lg z-[999] fixed text-base w-full",
            children: f.jsxs("div", {
                className:
                    "flex flex-wrap items-center justify-between p-4 lg:px-12 px-2 first:mr-auto last:ml-auto",
                children: [
                    f.jsx(wt, {
                        to: "/",
                        className: "flex items-center",
                        children: f.jsx(zs, {
                            src: "/logo.png",
                            className: "h-8 w-auto opacity-85"
                        })
                    }),
                    f.jsxs("div", {
                        className: "flex items-center lg:order-2",
                        children: [
                            f.jsxs("div", {
                                className: "relative",
                                children: [
                                    u
                                        ? f.jsxs("button", {
                                              type: "button",
                                              className:
                                                  "flex lg:pl-16 pl-0 lg:mr-3 items-center justify-center text-sm  rounded-full mr-0",
                                              id: "user-menu-button",
                                              "aria-expanded": "false",
                                              "data-dropdown-toggle":
                                                  "user-dropdown",
                                              "data-dropdown-placement":
                                                  "bottom",
                                              onClick: o,
                                              children: [
                                                  f.jsx("span", {
                                                      className: "sr-only",
                                                      children: "Open user menu"
                                                  }),
                                                  f.jsx(nr, {
                                                      children: f.jsx(wo, {
                                                          children: "Z"
                                                      })
                                                  }),
                                                  u &&
                                                      f.jsx("span", {
                                                          className:
                                                              "pt-1 text-[18px]",
                                                          children: u.name
                                                      })
                                              ]
                                          })
                                        : f.jsx(wt, {
                                              to: "/login",
                                              children: f.jsx(Ge, {
                                                  size: "md",
                                                  variant: "subtle",
                                                  rightSection: f.jsx(yS, {
                                                      className: "size-4"
                                                  }),
                                                  className:
                                                      "flex gap-2 justify-center items-center",
                                                  children: f.jsx("h1", {
                                                      className:
                                                          "-mt-0.5 font-medium",
                                                      children: "Login"
                                                  })
                                              })
                                          }),
                                    e &&
                                        u &&
                                        f.jsxs("div", {
                                            className:
                                                "origin-top-right absolute right-0 mt-2 w-48 rounded-md border-b border-gray-500 py-1 ring-1backdrop-blur-lg",
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "aria-labelledby":
                                                "user-menu-button",
                                            tabIndex: "-1",
                                            children: [
                                                f.jsx(wt, {
                                                    to: "/profile",
                                                    children: f.jsx("span", {
                                                        className:
                                                            "block px-4 py-2 text-sm ",
                                                        role: "menuitem",
                                                        children: "Your Profile"
                                                    })
                                                }),
                                                f.jsx(wt, {
                                                    to: "/settings",
                                                    children: f.jsx("span", {
                                                        className:
                                                            "block px-4 py-2 text-sm ",
                                                        role: "menuitem",
                                                        children: "Settings"
                                                    })
                                                }),
                                                f.jsx("span", {
                                                    className:
                                                        "block px-4 py-2 text-sm hover:cursor-pointer",
                                                    role: "menuitem",
                                                    onClick: a,
                                                    children: "Sign out"
                                                })
                                            ]
                                        })
                                ]
                            }),
                            f.jsxs("button", {
                                "data-collapse-toggle": "mobile-menu-2",
                                type: "button",
                                className:
                                    "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none",
                                "aria-controls": "mobile-menu-2",
                                "aria-expanded": n ? "true" : "false",
                                onClick: i,
                                children: [
                                    f.jsx("span", {
                                        className: "sr-only",
                                        children: "Open main menu"
                                    }),
                                    f.jsx("svg", {
                                        className: "w-6 h-6 text-white",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: f.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    f.jsx("div", {
                        className: `items-center justify-between w-full lg:flex  lg:w-auto lg:order-1 ${n ? "" : "hidden"}`,
                        id: "mobile-menu-2",
                        children: f.jsxs("ul", {
                            className:
                                "flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 md:",
                            children: [
                                f.jsx("li", {
                                    children: f.jsx(wt, {
                                        to: "/",
                                        className:
                                            "block py-2 pl-3 pr-4  rounded",
                                        "aria-current": "page",
                                        onClick: l,
                                        children: "Home"
                                    })
                                }),
                                f.jsx("li", {
                                    children: f.jsx(wt, {
                                        to: "/tasks",
                                        className:
                                            "block py-2 pl-3 pr-4 rounded ",
                                        onClick: l,
                                        children: "Tasks"
                                    })
                                }),
                                f.jsx("li", {
                                    children: f.jsx(wt, {
                                        to: "/create-task",
                                        className:
                                            "block py-2 pl-3 pr-4 rounded ",
                                        onClick: l,
                                        children: "Create Task"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    })
}
/**
 * @license @tabler/icons-react v3.0.0-alpha.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wS = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
}
/**
 * @license @tabler/icons-react v3.0.0-alpha.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = (e, t, n) => {
    const r = E.forwardRef(
        (
            {
                color: o = "currentColor",
                size: i = 24,
                stroke: l = 2,
                className: s = "",
                children: a,
                ...u
            },
            c
        ) =>
            E.createElement(
                "svg",
                {
                    ref: c,
                    ...wS,
                    width: i,
                    height: i,
                    stroke: o,
                    strokeWidth: l,
                    className: ["tabler-icon", `tabler-icon-${e}`, s].join(" "),
                    ...u
                },
                [
                    ...n.map(([d, p]) => E.createElement(d, p)),
                    ...(Array.isArray(a) ? a : [a])
                ]
            )
    )
    return (r.displayName = `${t}`), r
}
/**
 * @license @tabler/icons-react v3.0.0-alpha.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var xS = wd("brand-instagram", "IconBrandInstagram", [
    [
        "path",
        {
            d: "M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z",
            key: "svg-0"
        }
    ],
    ["path", { d: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }],
    ["path", { d: "M16.5 7.5l0 .01", key: "svg-2" }]
])
/**
 * @license @tabler/icons-react v3.0.0-alpha.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var SS = wd("brand-twitter", "IconBrandTwitter", [
    [
        "path",
        {
            d: "M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z",
            key: "svg-0"
        }
    ]
])
/**
 * @license @tabler/icons-react v3.0.0-alpha.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ES = wd("brand-youtube", "IconBrandYoutube", [
    [
        "path",
        {
            d: "M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z",
            key: "svg-0"
        }
    ],
    ["path", { d: "M10 9l5 3l-5 3z", key: "svg-1" }]
])
const kS = "_footer_1c0lr_1",
    CS = "_logo_1c0lr_23",
    jS = "_description_1c0lr_43",
    PS = "_inner_1c0lr_61",
    _S = "_groups_1c0lr_81",
    NS = "_wrapper_1c0lr_99",
    RS = "_link_1c0lr_107",
    bS = "_title_1c0lr_131",
    LS = "_afterFooter_1c0lr_151",
    TS = "_social_1c0lr_181",
    Jt = {
        footer: kS,
        logo: CS,
        description: jS,
        inner: PS,
        groups: _S,
        wrapper: NS,
        link: RS,
        title: bS,
        afterFooter: LS,
        social: TS
    },
    zS = [
        {
            title: "About",
            links: [
                { label: "Features", link: "#" },
                { label: "Pricing", link: "#" },
                { label: "Support", link: "#" },
                { label: "Forums", link: "#" }
            ]
        },
        {
            title: "Project",
            links: [
                { label: "Contribute", link: "#" },
                { label: "Media assets", link: "#" },
                { label: "Changelog", link: "#" },
                { label: "Releases", link: "#" }
            ]
        },
        {
            title: "Community",
            links: [
                { label: "Join Discord", link: "#" },
                { label: "Follow on Twitter", link: "#" },
                { label: "Email newsletter", link: "#" },
                { label: "GitHub discussions", link: "#" }
            ]
        }
    ]
function $S() {
    const e = zS.map((t) => {
        const n = t.links.map((r, o) =>
            f.jsx(
                ne,
                {
                    className: Jt.link,
                    component: "a",
                    href: r.link,
                    onClick: (i) => i.preventDefault(),
                    children: r.label
                },
                o
            )
        )
        return f.jsxs(
            "div",
            {
                className: Jt.wrapper,
                children: [
                    f.jsx(ne, { className: Jt.title, children: t.title }),
                    n
                ]
            },
            t.title
        )
    })
    return f.jsxs("footer", {
        className: Jt.footer,
        children: [
            f.jsxs(rr, {
                className: Jt.inner,
                children: [
                    f.jsxs("div", {
                        className: Jt.logo,
                        children: [
                            f.jsx(zs, {
                                src: "/logo.png",
                                className: "opacity-80"
                            }),
                            f.jsx(ne, {
                                size: "sm",
                                c: "dimmed",
                                className: Jt.description,
                                children:
                                    "Hire skilled and motivated students for your tasks and support their journey."
                            })
                        ]
                    }),
                    f.jsx("div", { className: Jt.groups, children: e })
                ]
            }),
            f.jsxs(rr, {
                className: Jt.afterFooter,
                children: [
                    f.jsx(ne, {
                        c: "dimmed",
                        size: "sm",
                        children: "© 2024 website name. All rights reserved."
                    }),
                    f.jsxs(nr, {
                        gap: 0,
                        className: Jt.social,
                        justify: "flex-end",
                        wrap: "nowrap",
                        children: [
                            f.jsx(yr, {
                                size: "lg",
                                color: "gray",
                                variant: "subtle",
                                children: f.jsx(SS, {
                                    style: { width: L(18), height: L(18) },
                                    stroke: 1.5
                                })
                            }),
                            f.jsx(yr, {
                                size: "lg",
                                color: "gray",
                                variant: "subtle",
                                children: f.jsx(ES, {
                                    style: { width: L(18), height: L(18) },
                                    stroke: 1.5
                                })
                            }),
                            f.jsx(yr, {
                                size: "lg",
                                color: "gray",
                                variant: "subtle",
                                children: f.jsx(xS, {
                                    style: { width: L(18), height: L(18) },
                                    stroke: 1.5
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    })
}
function OS() {
    return f.jsxs(f.Fragment, {
        children: [
            f.jsx(vS, {}),
            f.jsx("main", {
                className: "py-[78px] pb-48",
                children: f.jsx(Tw, {})
            }),
            f.jsx($S, {})
        ]
    })
}
function xg(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}
const { toString: MS } = Object.prototype,
    { getPrototypeOf: xd } = Object,
    Fs = ((e) => (t) => {
        const n = MS.call(t)
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)),
    an = (e) => ((e = e.toLowerCase()), (t) => Fs(t) === e),
    Bs = (e) => (t) => typeof t === e,
    { isArray: xo } = Array,
    Ei = Bs("undefined")
function IS(e) {
    return (
        e !== null &&
        !Ei(e) &&
        e.constructor !== null &&
        !Ei(e.constructor) &&
        Tt(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    )
}
const Sg = an("ArrayBuffer")
function DS(e) {
    let t
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && Sg(e.buffer)),
        t
    )
}
const AS = Bs("string"),
    Tt = Bs("function"),
    Eg = Bs("number"),
    Us = (e) => e !== null && typeof e == "object",
    FS = (e) => e === !0 || e === !1,
    Sl = (e) => {
        if (Fs(e) !== "object") return !1
        const t = xd(e)
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        )
    },
    BS = an("Date"),
    US = an("File"),
    HS = an("Blob"),
    WS = an("FileList"),
    VS = (e) => Us(e) && Tt(e.pipe),
    GS = (e) => {
        let t
        return (
            e &&
            ((typeof FormData == "function" && e instanceof FormData) ||
                (Tt(e.append) &&
                    ((t = Fs(e)) === "formdata" ||
                        (t === "object" &&
                            Tt(e.toString) &&
                            e.toString() === "[object FormData]"))))
        )
    },
    KS = an("URLSearchParams"),
    QS = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
function Oi(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return
    let r, o
    if ((typeof e != "object" && (e = [e]), xo(e)))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = i.length
        let s
        for (r = 0; r < l; r++) (s = i[r]), t.call(null, e[s], s, e)
    }
}
function kg(e, t) {
    t = t.toLowerCase()
    const n = Object.keys(e)
    let r = n.length,
        o
    for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
    return null
}
const Cg =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof window < "u"
                ? window
                : global,
    jg = (e) => !Ei(e) && e !== Cg
function Gu() {
    const { caseless: e } = (jg(this) && this) || {},
        t = {},
        n = (r, o) => {
            const i = (e && kg(t, o)) || o
            Sl(t[i]) && Sl(r)
                ? (t[i] = Gu(t[i], r))
                : Sl(r)
                  ? (t[i] = Gu({}, r))
                  : xo(r)
                    ? (t[i] = r.slice())
                    : (t[i] = r)
        }
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && Oi(arguments[r], n)
    return t
}
const YS = (e, t, n, { allOwnKeys: r } = {}) => (
        Oi(
            t,
            (o, i) => {
                n && Tt(o) ? (e[i] = xg(o, n)) : (e[i] = o)
            },
            { allOwnKeys: r }
        ),
        e
    ),
    qS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    XS = (e, t, n, r) => {
        ;(e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n)
    },
    JS = (e, t, n, r) => {
        let o, i, l
        const s = {}
        if (((t = t || {}), e == null)) return t
        do {
            for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
                (l = o[i]),
                    (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0))
            e = n !== !1 && xd(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype)
        return t
    },
    ZS = (e, t, n) => {
        ;(e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length)
        const r = e.indexOf(t, n)
        return r !== -1 && r === n
    },
    e5 = (e) => {
        if (!e) return null
        if (xo(e)) return e
        let t = e.length
        if (!Eg(t)) return null
        const n = new Array(t)
        for (; t-- > 0; ) n[t] = e[t]
        return n
    },
    t5 = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < "u" && xd(Uint8Array)),
    n5 = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e)
        let o
        for (; (o = r.next()) && !o.done; ) {
            const i = o.value
            t.call(e, i[0], i[1])
        }
    },
    r5 = (e, t) => {
        let n
        const r = []
        for (; (n = e.exec(t)) !== null; ) r.push(n)
        return r
    },
    o5 = an("HTMLFormElement"),
    i5 = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
            return r.toUpperCase() + o
        }),
    $p = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    l5 = an("RegExp"),
    Pg = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {}
        Oi(n, (o, i) => {
            let l
            ;(l = t(o, i, e)) !== !1 && (r[i] = l || o)
        }),
            Object.defineProperties(e, r)
    },
    s5 = (e) => {
        Pg(e, (t, n) => {
            if (Tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1
            const r = e[n]
            if (Tt(r)) {
                if (((t.enumerable = !1), "writable" in t)) {
                    t.writable = !1
                    return
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        )
                    })
            }
        })
    },
    a5 = (e, t) => {
        const n = {},
            r = (o) => {
                o.forEach((i) => {
                    n[i] = !0
                })
            }
        return xo(e) ? r(e) : r(String(e).split(t)), n
    },
    u5 = () => {},
    c5 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    Ma = "abcdefghijklmnopqrstuvwxyz",
    Op = "0123456789",
    _g = { DIGIT: Op, ALPHA: Ma, ALPHA_DIGIT: Ma + Ma.toUpperCase() + Op },
    d5 = (e = 16, t = _g.ALPHA_DIGIT) => {
        let n = ""
        const { length: r } = t
        for (; e--; ) n += t[(Math.random() * r) | 0]
        return n
    }
function f5(e) {
    return !!(
        e &&
        Tt(e.append) &&
        e[Symbol.toStringTag] === "FormData" &&
        e[Symbol.iterator]
    )
}
const p5 = (e) => {
        const t = new Array(10),
            n = (r, o) => {
                if (Us(r)) {
                    if (t.indexOf(r) >= 0) return
                    if (!("toJSON" in r)) {
                        t[o] = r
                        const i = xo(r) ? [] : {}
                        return (
                            Oi(r, (l, s) => {
                                const a = n(l, o + 1)
                                !Ei(a) && (i[s] = a)
                            }),
                            (t[o] = void 0),
                            i
                        )
                    }
                }
                return r
            }
        return n(e, 0)
    },
    h5 = an("AsyncFunction"),
    m5 = (e) => e && (Us(e) || Tt(e)) && Tt(e.then) && Tt(e.catch),
    b = {
        isArray: xo,
        isArrayBuffer: Sg,
        isBuffer: IS,
        isFormData: GS,
        isArrayBufferView: DS,
        isString: AS,
        isNumber: Eg,
        isBoolean: FS,
        isObject: Us,
        isPlainObject: Sl,
        isUndefined: Ei,
        isDate: BS,
        isFile: US,
        isBlob: HS,
        isRegExp: l5,
        isFunction: Tt,
        isStream: VS,
        isURLSearchParams: KS,
        isTypedArray: t5,
        isFileList: WS,
        forEach: Oi,
        merge: Gu,
        extend: YS,
        trim: QS,
        stripBOM: qS,
        inherits: XS,
        toFlatObject: JS,
        kindOf: Fs,
        kindOfTest: an,
        endsWith: ZS,
        toArray: e5,
        forEachEntry: n5,
        matchAll: r5,
        isHTMLForm: o5,
        hasOwnProperty: $p,
        hasOwnProp: $p,
        reduceDescriptors: Pg,
        freezeMethods: s5,
        toObjectSet: a5,
        toCamelCase: i5,
        noop: u5,
        toFiniteNumber: c5,
        findKey: kg,
        global: Cg,
        isContextDefined: jg,
        ALPHABET: _g,
        generateString: d5,
        isSpecCompliantForm: f5,
        toJSONObject: p5,
        isAsyncFn: h5,
        isThenable: m5
    }
function ce(e, t, n, r, o) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        o && (this.response = o)
}
b.inherits(ce, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: b.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null
        }
    }
})
const Ng = ce.prototype,
    Rg = {}
;[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((e) => {
    Rg[e] = { value: e }
})
Object.defineProperties(ce, Rg)
Object.defineProperty(Ng, "isAxiosError", { value: !0 })
ce.from = (e, t, n, r, o, i) => {
    const l = Object.create(Ng)
    return (
        b.toFlatObject(
            e,
            l,
            function (a) {
                return a !== Error.prototype
            },
            (s) => s !== "isAxiosError"
        ),
        ce.call(l, e.message, t, n, r, o),
        (l.cause = e),
        (l.name = e.name),
        i && Object.assign(l, i),
        l
    )
}
const g5 = null
function Ku(e) {
    return b.isPlainObject(e) || b.isArray(e)
}
function bg(e) {
    return b.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Mp(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (o, i) {
                  return (o = bg(o)), !n && i ? "[" + o + "]" : o
              })
              .join(n ? "." : "")
        : t
}
function y5(e) {
    return b.isArray(e) && !e.some(Ku)
}
const v5 = b.toFlatObject(b, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
})
function Hs(e, t, n) {
    if (!b.isObject(e)) throw new TypeError("target must be an object")
    ;(t = t || new FormData()),
        (n = b.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (v, S) {
                return !b.isUndefined(S[v])
            }
        ))
    const r = n.metaTokens,
        o = n.visitor || c,
        i = n.dots,
        l = n.indexes,
        a = (n.Blob || (typeof Blob < "u" && Blob)) && b.isSpecCompliantForm(t)
    if (!b.isFunction(o)) throw new TypeError("visitor must be a function")
    function u(g) {
        if (g === null) return ""
        if (b.isDate(g)) return g.toISOString()
        if (!a && b.isBlob(g))
            throw new ce("Blob is not supported. Use a Buffer instead.")
        return b.isArrayBuffer(g) || b.isTypedArray(g)
            ? a && typeof Blob == "function"
                ? new Blob([g])
                : Buffer.from(g)
            : g
    }
    function c(g, v, S) {
        let m = g
        if (g && !S && typeof g == "object") {
            if (b.endsWith(v, "{}"))
                (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g))
            else if (
                (b.isArray(g) && y5(g)) ||
                ((b.isFileList(g) || b.endsWith(v, "[]")) && (m = b.toArray(g)))
            )
                return (
                    (v = bg(v)),
                    m.forEach(function (y, C) {
                        !(b.isUndefined(y) || y === null) &&
                            t.append(
                                l === !0
                                    ? Mp([v], C, i)
                                    : l === null
                                      ? v
                                      : v + "[]",
                                u(y)
                            )
                    }),
                    !1
                )
        }
        return Ku(g) ? !0 : (t.append(Mp(S, v, i), u(g)), !1)
    }
    const d = [],
        p = Object.assign(v5, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: Ku
        })
    function w(g, v) {
        if (!b.isUndefined(g)) {
            if (d.indexOf(g) !== -1)
                throw Error("Circular reference detected in " + v.join("."))
            d.push(g),
                b.forEach(g, function (m, h) {
                    ;(!(b.isUndefined(m) || m === null) &&
                        o.call(t, m, b.isString(h) ? h.trim() : h, v, p)) ===
                        !0 && w(m, v ? v.concat(h) : [h])
                }),
                d.pop()
        }
    }
    if (!b.isObject(e)) throw new TypeError("data must be an object")
    return w(e), t
}
function Ip(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    }
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r]
    })
}
function Sd(e, t) {
    ;(this._pairs = []), e && Hs(e, this, t)
}
const Lg = Sd.prototype
Lg.append = function (t, n) {
    this._pairs.push([t, n])
}
Lg.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, Ip)
          }
        : Ip
    return this._pairs
        .map(function (o) {
            return n(o[0]) + "=" + n(o[1])
        }, "")
        .join("&")
}
function w5(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]")
}
function Tg(e, t, n) {
    if (!t) return e
    const r = (n && n.encode) || w5,
        o = n && n.serialize
    let i
    if (
        (o
            ? (i = o(t, n))
            : (i = b.isURLSearchParams(t)
                  ? t.toString()
                  : new Sd(t, n).toString(r)),
        i)
    ) {
        const l = e.indexOf("#")
        l !== -1 && (e = e.slice(0, l)),
            (e += (e.indexOf("?") === -1 ? "?" : "&") + i)
    }
    return e
}
class Dp {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null
            }),
            this.handlers.length - 1
        )
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        b.forEach(this.handlers, function (r) {
            r !== null && t(r)
        })
    }
}
const zg = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    x5 = typeof URLSearchParams < "u" ? URLSearchParams : Sd,
    S5 = typeof FormData < "u" ? FormData : null,
    E5 = typeof Blob < "u" ? Blob : null,
    k5 = {
        isBrowser: !0,
        classes: { URLSearchParams: x5, FormData: S5, Blob: E5 },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    $g = typeof window < "u" && typeof document < "u",
    C5 = ((e) => $g && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
        typeof navigator < "u" && navigator.product
    ),
    j5 =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    P5 = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: $g,
                hasStandardBrowserEnv: C5,
                hasStandardBrowserWebWorkerEnv: j5
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    nn = { ...P5, ...k5 }
function _5(e, t) {
    return Hs(
        e,
        new nn.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, o, i) {
                    return nn.isNode && b.isBuffer(n)
                        ? (this.append(r, n.toString("base64")), !1)
                        : i.defaultVisitor.apply(this, arguments)
                }
            },
            t
        )
    )
}
function N5(e) {
    return b
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]))
}
function R5(e) {
    const t = {},
        n = Object.keys(e)
    let r
    const o = n.length
    let i
    for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
    return t
}
function Og(e) {
    function t(n, r, o, i) {
        let l = n[i++]
        if (l === "__proto__") return !0
        const s = Number.isFinite(+l),
            a = i >= n.length
        return (
            (l = !l && b.isArray(o) ? o.length : l),
            a
                ? (b.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
                : ((!o[l] || !b.isObject(o[l])) && (o[l] = []),
                  t(n, r, o[l], i) && b.isArray(o[l]) && (o[l] = R5(o[l])),
                  !s)
        )
    }
    if (b.isFormData(e) && b.isFunction(e.entries)) {
        const n = {}
        return (
            b.forEachEntry(e, (r, o) => {
                t(N5(r), o, n, 0)
            }),
            n
        )
    }
    return null
}
function b5(e, t, n) {
    if (b.isString(e))
        try {
            return (t || JSON.parse)(e), b.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError") throw r
        }
    return (n || JSON.stringify)(e)
}
const Ed = {
    transitional: zg,
    adapter: ["xhr", "http"],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || "",
                o = r.indexOf("application/json") > -1,
                i = b.isObject(t)
            if (
                (i && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t))
            )
                return o ? JSON.stringify(Og(t)) : t
            if (
                b.isArrayBuffer(t) ||
                b.isBuffer(t) ||
                b.isStream(t) ||
                b.isFile(t) ||
                b.isBlob(t)
            )
                return t
            if (b.isArrayBufferView(t)) return t.buffer
            if (b.isURLSearchParams(t))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    t.toString()
                )
            let s
            if (i) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                    return _5(t, this.formSerializer).toString()
                if (
                    (s = b.isFileList(t)) ||
                    r.indexOf("multipart/form-data") > -1
                ) {
                    const a = this.env && this.env.FormData
                    return Hs(
                        s ? { "files[]": t } : t,
                        a && new a(),
                        this.formSerializer
                    )
                }
            }
            return i || o
                ? (n.setContentType("application/json", !1), b5(t))
                : t
        }
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || Ed.transitional,
                r = n && n.forcedJSONParsing,
                o = this.responseType === "json"
            if (t && b.isString(t) && ((r && !this.responseType) || o)) {
                const l = !(n && n.silentJSONParsing) && o
                try {
                    return JSON.parse(t)
                } catch (s) {
                    if (l)
                        throw s.name === "SyntaxError"
                            ? ce.from(
                                  s,
                                  ce.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : s
                }
            }
            return t
        }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: nn.classes.FormData, Blob: nn.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
}
b.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Ed.headers[e] = {}
})
const kd = Ed,
    L5 = b.toObjectSet([
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
        "user-agent"
    ]),
    T5 = (e) => {
        const t = {}
        let n, r, o
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (l) {
                        ;(o = l.indexOf(":")),
                            (n = l.substring(0, o).trim().toLowerCase()),
                            (r = l.substring(o + 1).trim()),
                            !(!n || (t[n] && L5[n])) &&
                                (n === "set-cookie"
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ", " + r : r))
                    }),
            t
        )
    },
    Ap = Symbol("internals")
function Do(e) {
    return e && String(e).trim().toLowerCase()
}
function El(e) {
    return e === !1 || e == null ? e : b.isArray(e) ? e.map(El) : String(e)
}
function z5(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
    let r
    for (; (r = n.exec(e)); ) t[r[1]] = r[2]
    return t
}
const $5 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Ia(e, t, n, r, o) {
    if (b.isFunction(r)) return r.call(this, t, n)
    if ((o && (t = n), !!b.isString(t))) {
        if (b.isString(r)) return t.indexOf(r) !== -1
        if (b.isRegExp(r)) return r.test(t)
    }
}
function O5(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function M5(e, t) {
    const n = b.toCamelCase(" " + t)
    ;["get", "set", "has"].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (o, i, l) {
                return this[r].call(this, t, o, i, l)
            },
            configurable: !0
        })
    })
}
class Ws {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this
        function i(s, a, u) {
            const c = Do(a)
            if (!c) throw new Error("header name must be a non-empty string")
            const d = b.findKey(o, c)
            ;(!d ||
                o[d] === void 0 ||
                u === !0 ||
                (u === void 0 && o[d] !== !1)) &&
                (o[d || a] = El(s))
        }
        const l = (s, a) => b.forEach(s, (u, c) => i(u, c, a))
        return (
            b.isPlainObject(t) || t instanceof this.constructor
                ? l(t, n)
                : b.isString(t) && (t = t.trim()) && !$5(t)
                  ? l(T5(t), n)
                  : t != null && i(n, t, r),
            this
        )
    }
    get(t, n) {
        if (((t = Do(t)), t)) {
            const r = b.findKey(this, t)
            if (r) {
                const o = this[r]
                if (!n) return o
                if (n === !0) return z5(o)
                if (b.isFunction(n)) return n.call(this, o, r)
                if (b.isRegExp(n)) return n.exec(o)
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (((t = Do(t)), t)) {
            const r = b.findKey(this, t)
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || Ia(this, this[r], r, n))
            )
        }
        return !1
    }
    delete(t, n) {
        const r = this
        let o = !1
        function i(l) {
            if (((l = Do(l)), l)) {
                const s = b.findKey(r, l)
                s && (!n || Ia(r, r[s], s, n)) && (delete r[s], (o = !0))
            }
        }
        return b.isArray(t) ? t.forEach(i) : i(t), o
    }
    clear(t) {
        const n = Object.keys(this)
        let r = n.length,
            o = !1
        for (; r--; ) {
            const i = n[r]
            ;(!t || Ia(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
        }
        return o
    }
    normalize(t) {
        const n = this,
            r = {}
        return (
            b.forEach(this, (o, i) => {
                const l = b.findKey(r, i)
                if (l) {
                    ;(n[l] = El(o)), delete n[i]
                    return
                }
                const s = t ? O5(i) : String(i).trim()
                s !== i && delete n[i], (n[s] = El(o)), (r[s] = !0)
            }),
            this
        )
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null)
        return (
            b.forEach(this, (r, o) => {
                r != null &&
                    r !== !1 &&
                    (n[o] = t && b.isArray(r) ? r.join(", ") : r)
            }),
            n
        )
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n)
            .join(`
`)
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t)
        return n.forEach((o) => r.set(o)), r
    }
    static accessor(t) {
        const r = (this[Ap] = this[Ap] = { accessors: {} }).accessors,
            o = this.prototype
        function i(l) {
            const s = Do(l)
            r[s] || (M5(o, l), (r[s] = !0))
        }
        return b.isArray(t) ? t.forEach(i) : i(t), this
    }
}
Ws.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
])
b.reduceDescriptors(Ws.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1)
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
})
b.freezeMethods(Ws)
const wn = Ws
function Da(e, t) {
    const n = this || kd,
        r = t || n,
        o = wn.from(r.headers)
    let i = r.data
    return (
        b.forEach(e, function (s) {
            i = s.call(n, i, o.normalize(), t ? t.status : void 0)
        }),
        o.normalize(),
        i
    )
}
function Mg(e) {
    return !!(e && e.__CANCEL__)
}
function Mi(e, t, n) {
    ce.call(this, e ?? "canceled", ce.ERR_CANCELED, t, n),
        (this.name = "CanceledError")
}
b.inherits(Mi, ce, { __CANCEL__: !0 })
function I5(e, t, n) {
    const r = n.config.validateStatus
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new ce(
                  "Request failed with status code " + n.status,
                  [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          )
}
const D5 = nn.hasStandardBrowserEnv
    ? {
          write(e, t, n, r, o, i) {
              const l = [e + "=" + encodeURIComponent(t)]
              b.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
                  b.isString(r) && l.push("path=" + r),
                  b.isString(o) && l.push("domain=" + o),
                  i === !0 && l.push("secure"),
                  (document.cookie = l.join("; "))
          },
          read(e) {
              const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              )
              return t ? decodeURIComponent(t[3]) : null
          },
          remove(e) {
              this.write(e, "", Date.now() - 864e5)
          }
      }
    : {
          write() {},
          read() {
              return null
          },
          remove() {}
      }
function A5(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function F5(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Ig(e, t) {
    return e && !A5(t) ? F5(e, t) : t
}
const B5 = nn.hasStandardBrowserEnv
    ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a")
          let r
          function o(i) {
              let l = i
              return (
                  t && (n.setAttribute("href", l), (l = n.href)),
                  n.setAttribute("href", l),
                  {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, "") : "",
                      hash: n.hash ? n.hash.replace(/^#/, "") : "",
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                          n.pathname.charAt(0) === "/"
                              ? n.pathname
                              : "/" + n.pathname
                  }
              )
          }
          return (
              (r = o(window.location.href)),
              function (l) {
                  const s = b.isString(l) ? o(l) : l
                  return s.protocol === r.protocol && s.host === r.host
              }
          )
      })()
    : (function () {
          return function () {
              return !0
          }
      })()
function U5(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
    return (t && t[1]) || ""
}
function H5(e, t) {
    e = e || 10
    const n = new Array(e),
        r = new Array(e)
    let o = 0,
        i = 0,
        l
    return (
        (t = t !== void 0 ? t : 1e3),
        function (a) {
            const u = Date.now(),
                c = r[i]
            l || (l = u), (n[o] = a), (r[o] = u)
            let d = i,
                p = 0
            for (; d !== o; ) (p += n[d++]), (d = d % e)
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - l < t))
                return
            const w = c && u - c
            return w ? Math.round((p * 1e3) / w) : void 0
        }
    )
}
function Fp(e, t) {
    let n = 0
    const r = H5(50, 250)
    return (o) => {
        const i = o.loaded,
            l = o.lengthComputable ? o.total : void 0,
            s = i - n,
            a = r(s),
            u = i <= l
        n = i
        const c = {
            loaded: i,
            total: l,
            progress: l ? i / l : void 0,
            bytes: s,
            rate: a || void 0,
            estimated: a && l && u ? (l - i) / a : void 0,
            event: o
        }
        ;(c[t ? "download" : "upload"] = !0), e(c)
    }
}
const W5 = typeof XMLHttpRequest < "u",
    V5 =
        W5 &&
        function (e) {
            return new Promise(function (n, r) {
                let o = e.data
                const i = wn.from(e.headers).normalize()
                let { responseType: l, withXSRFToken: s } = e,
                    a
                function u() {
                    e.cancelToken && e.cancelToken.unsubscribe(a),
                        e.signal && e.signal.removeEventListener("abort", a)
                }
                let c
                if (b.isFormData(o)) {
                    if (
                        nn.hasStandardBrowserEnv ||
                        nn.hasStandardBrowserWebWorkerEnv
                    )
                        i.setContentType(!1)
                    else if ((c = i.getContentType()) !== !1) {
                        const [v, ...S] = c
                            ? c
                                  .split(";")
                                  .map((m) => m.trim())
                                  .filter(Boolean)
                            : []
                        i.setContentType(
                            [v || "multipart/form-data", ...S].join("; ")
                        )
                    }
                }
                let d = new XMLHttpRequest()
                if (e.auth) {
                    const v = e.auth.username || "",
                        S = e.auth.password
                            ? unescape(encodeURIComponent(e.auth.password))
                            : ""
                    i.set("Authorization", "Basic " + btoa(v + ":" + S))
                }
                const p = Ig(e.baseURL, e.url)
                d.open(
                    e.method.toUpperCase(),
                    Tg(p, e.params, e.paramsSerializer),
                    !0
                ),
                    (d.timeout = e.timeout)
                function w() {
                    if (!d) return
                    const v = wn.from(
                            "getAllResponseHeaders" in d &&
                                d.getAllResponseHeaders()
                        ),
                        m = {
                            data:
                                !l || l === "text" || l === "json"
                                    ? d.responseText
                                    : d.response,
                            status: d.status,
                            statusText: d.statusText,
                            headers: v,
                            config: e,
                            request: d
                        }
                    I5(
                        function (y) {
                            n(y), u()
                        },
                        function (y) {
                            r(y), u()
                        },
                        m
                    ),
                        (d = null)
                }
                if (
                    ("onloadend" in d
                        ? (d.onloadend = w)
                        : (d.onreadystatechange = function () {
                              !d ||
                                  d.readyState !== 4 ||
                                  (d.status === 0 &&
                                      !(
                                          d.responseURL &&
                                          d.responseURL.indexOf("file:") === 0
                                      )) ||
                                  setTimeout(w)
                          }),
                    (d.onabort = function () {
                        d &&
                            (r(
                                new ce("Request aborted", ce.ECONNABORTED, e, d)
                            ),
                            (d = null))
                    }),
                    (d.onerror = function () {
                        r(new ce("Network Error", ce.ERR_NETWORK, e, d)),
                            (d = null)
                    }),
                    (d.ontimeout = function () {
                        let S = e.timeout
                            ? "timeout of " + e.timeout + "ms exceeded"
                            : "timeout exceeded"
                        const m = e.transitional || zg
                        e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
                            r(
                                new ce(
                                    S,
                                    m.clarifyTimeoutError
                                        ? ce.ETIMEDOUT
                                        : ce.ECONNABORTED,
                                    e,
                                    d
                                )
                            ),
                            (d = null)
                    }),
                    nn.hasStandardBrowserEnv &&
                        (s && b.isFunction(s) && (s = s(e)),
                        s || (s !== !1 && B5(p))))
                ) {
                    const v =
                        e.xsrfHeaderName &&
                        e.xsrfCookieName &&
                        D5.read(e.xsrfCookieName)
                    v && i.set(e.xsrfHeaderName, v)
                }
                o === void 0 && i.setContentType(null),
                    "setRequestHeader" in d &&
                        b.forEach(i.toJSON(), function (S, m) {
                            d.setRequestHeader(m, S)
                        }),
                    b.isUndefined(e.withCredentials) ||
                        (d.withCredentials = !!e.withCredentials),
                    l && l !== "json" && (d.responseType = e.responseType),
                    typeof e.onDownloadProgress == "function" &&
                        d.addEventListener(
                            "progress",
                            Fp(e.onDownloadProgress, !0)
                        ),
                    typeof e.onUploadProgress == "function" &&
                        d.upload &&
                        d.upload.addEventListener(
                            "progress",
                            Fp(e.onUploadProgress)
                        ),
                    (e.cancelToken || e.signal) &&
                        ((a = (v) => {
                            d &&
                                (r(!v || v.type ? new Mi(null, e, d) : v),
                                d.abort(),
                                (d = null))
                        }),
                        e.cancelToken && e.cancelToken.subscribe(a),
                        e.signal &&
                            (e.signal.aborted
                                ? a()
                                : e.signal.addEventListener("abort", a)))
                const g = U5(p)
                if (g && nn.protocols.indexOf(g) === -1) {
                    r(
                        new ce(
                            "Unsupported protocol " + g + ":",
                            ce.ERR_BAD_REQUEST,
                            e
                        )
                    )
                    return
                }
                d.send(o || null)
            })
        },
    Qu = { http: g5, xhr: V5 }
b.forEach(Qu, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", { value: t })
        } catch {}
        Object.defineProperty(e, "adapterName", { value: t })
    }
})
const Bp = (e) => `- ${e}`,
    G5 = (e) => b.isFunction(e) || e === null || e === !1,
    Dg = {
        getAdapter: (e) => {
            e = b.isArray(e) ? e : [e]
            const { length: t } = e
            let n, r
            const o = {}
            for (let i = 0; i < t; i++) {
                n = e[i]
                let l
                if (
                    ((r = n),
                    !G5(n) &&
                        ((r = Qu[(l = String(n)).toLowerCase()]), r === void 0))
                )
                    throw new ce(`Unknown adapter '${l}'`)
                if (r) break
                o[l || "#" + i] = r
            }
            if (!r) {
                const i = Object.entries(o).map(
                    ([s, a]) =>
                        `adapter ${s} ` +
                        (a === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                )
                let l = t
                    ? i.length > 1
                        ? `since :
` +
                          i.map(Bp).join(`
`)
                        : " " + Bp(i[0])
                    : "as no adapter specified"
                throw new ce(
                    "There is no suitable adapter to dispatch the request " + l,
                    "ERR_NOT_SUPPORT"
                )
            }
            return r
        },
        adapters: Qu
    }
function Aa(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new Mi(null, e)
}
function Up(e) {
    return (
        Aa(e),
        (e.headers = wn.from(e.headers)),
        (e.data = Da.call(e, e.transformRequest)),
        ["post", "put", "patch"].indexOf(e.method) !== -1 &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
        Dg.getAdapter(e.adapter || kd.adapter)(e).then(
            function (r) {
                return (
                    Aa(e),
                    (r.data = Da.call(e, e.transformResponse, r)),
                    (r.headers = wn.from(r.headers)),
                    r
                )
            },
            function (r) {
                return (
                    Mg(r) ||
                        (Aa(e),
                        r &&
                            r.response &&
                            ((r.response.data = Da.call(
                                e,
                                e.transformResponse,
                                r.response
                            )),
                            (r.response.headers = wn.from(
                                r.response.headers
                            )))),
                    Promise.reject(r)
                )
            }
        )
    )
}
const Hp = (e) => (e instanceof wn ? e.toJSON() : e)
function fo(e, t) {
    t = t || {}
    const n = {}
    function r(u, c, d) {
        return b.isPlainObject(u) && b.isPlainObject(c)
            ? b.merge.call({ caseless: d }, u, c)
            : b.isPlainObject(c)
              ? b.merge({}, c)
              : b.isArray(c)
                ? c.slice()
                : c
    }
    function o(u, c, d) {
        if (b.isUndefined(c)) {
            if (!b.isUndefined(u)) return r(void 0, u, d)
        } else return r(u, c, d)
    }
    function i(u, c) {
        if (!b.isUndefined(c)) return r(void 0, c)
    }
    function l(u, c) {
        if (b.isUndefined(c)) {
            if (!b.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, c)
    }
    function s(u, c, d) {
        if (d in t) return r(u, c)
        if (d in e) return r(void 0, u)
    }
    const a = {
        url: i,
        method: i,
        data: i,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: s,
        headers: (u, c) => o(Hp(u), Hp(c), !0)
    }
    return (
        b.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
            const d = a[c] || o,
                p = d(e[c], t[c], c)
            ;(b.isUndefined(p) && d !== s) || (n[c] = p)
        }),
        n
    )
}
const Ag = "1.6.7",
    Cd = {}
;["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
        Cd[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }
)
const Wp = {}
Cd.transitional = function (t, n, r) {
    function o(i, l) {
        return (
            "[Axios v" +
            Ag +
            "] Transitional option '" +
            i +
            "'" +
            l +
            (r ? ". " + r : "")
        )
    }
    return (i, l, s) => {
        if (t === !1)
            throw new ce(
                o(l, " has been removed" + (n ? " in " + n : "")),
                ce.ERR_DEPRECATED
            )
        return (
            n &&
                !Wp[l] &&
                ((Wp[l] = !0),
                console.warn(
                    o(
                        l,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future"
                    )
                )),
            t ? t(i, l, s) : !0
        )
    }
}
function K5(e, t, n) {
    if (typeof e != "object")
        throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE)
    const r = Object.keys(e)
    let o = r.length
    for (; o-- > 0; ) {
        const i = r[o],
            l = t[i]
        if (l) {
            const s = e[i],
                a = s === void 0 || l(s, i, e)
            if (a !== !0)
                throw new ce(
                    "option " + i + " must be " + a,
                    ce.ERR_BAD_OPTION_VALUE
                )
            continue
        }
        if (n !== !0) throw new ce("Unknown option " + i, ce.ERR_BAD_OPTION)
    }
}
const Yu = { assertOptions: K5, validators: Cd },
    Mn = Yu.validators
class es {
    constructor(t) {
        ;(this.defaults = t),
            (this.interceptors = { request: new Dp(), response: new Dp() })
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let o
                Error.captureStackTrace
                    ? Error.captureStackTrace((o = {}))
                    : (o = new Error())
                const i = o.stack ? o.stack.replace(/^.+\n/, "") : ""
                r.stack
                    ? i &&
                      !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
                      (r.stack +=
                          `
` + i)
                    : (r.stack = i)
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = fo(this.defaults, n))
        const { transitional: r, paramsSerializer: o, headers: i } = n
        r !== void 0 &&
            Yu.assertOptions(
                r,
                {
                    silentJSONParsing: Mn.transitional(Mn.boolean),
                    forcedJSONParsing: Mn.transitional(Mn.boolean),
                    clarifyTimeoutError: Mn.transitional(Mn.boolean)
                },
                !1
            ),
            o != null &&
                (b.isFunction(o)
                    ? (n.paramsSerializer = { serialize: o })
                    : Yu.assertOptions(
                          o,
                          { encode: Mn.function, serialize: Mn.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase())
        let l = i && b.merge(i.common, i[n.method])
        i &&
            b.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (g) => {
                    delete i[g]
                }
            ),
            (n.headers = wn.concat(l, i))
        const s = []
        let a = !0
        this.interceptors.request.forEach(function (v) {
            ;(typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
                ((a = a && v.synchronous), s.unshift(v.fulfilled, v.rejected))
        })
        const u = []
        this.interceptors.response.forEach(function (v) {
            u.push(v.fulfilled, v.rejected)
        })
        let c,
            d = 0,
            p
        if (!a) {
            const g = [Up.bind(this), void 0]
            for (
                g.unshift.apply(g, s),
                    g.push.apply(g, u),
                    p = g.length,
                    c = Promise.resolve(n);
                d < p;

            )
                c = c.then(g[d++], g[d++])
            return c
        }
        p = s.length
        let w = n
        for (d = 0; d < p; ) {
            const g = s[d++],
                v = s[d++]
            try {
                w = g(w)
            } catch (S) {
                v.call(this, S)
                break
            }
        }
        try {
            c = Up.call(this, w)
        } catch (g) {
            return Promise.reject(g)
        }
        for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++])
        return c
    }
    getUri(t) {
        t = fo(this.defaults, t)
        const n = Ig(t.baseURL, t.url)
        return Tg(n, t.params, t.paramsSerializer)
    }
}
b.forEach(["delete", "get", "head", "options"], function (t) {
    es.prototype[t] = function (n, r) {
        return this.request(
            fo(r || {}, { method: t, url: n, data: (r || {}).data })
        )
    }
})
b.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (i, l, s) {
            return this.request(
                fo(s || {}, {
                    method: t,
                    headers: r ? { "Content-Type": "multipart/form-data" } : {},
                    url: i,
                    data: l
                })
            )
        }
    }
    ;(es.prototype[t] = n()), (es.prototype[t + "Form"] = n(!0))
})
const kl = es
class jd {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.")
        let n
        this.promise = new Promise(function (i) {
            n = i
        })
        const r = this
        this.promise.then((o) => {
            if (!r._listeners) return
            let i = r._listeners.length
            for (; i-- > 0; ) r._listeners[i](o)
            r._listeners = null
        }),
            (this.promise.then = (o) => {
                let i
                const l = new Promise((s) => {
                    r.subscribe(s), (i = s)
                }).then(o)
                return (
                    (l.cancel = function () {
                        r.unsubscribe(i)
                    }),
                    l
                )
            }),
            t(function (i, l, s) {
                r.reason || ((r.reason = new Mi(i, l, s)), n(r.reason))
            })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason)
            return
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t])
    }
    unsubscribe(t) {
        if (!this._listeners) return
        const n = this._listeners.indexOf(t)
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t
        return {
            token: new jd(function (o) {
                t = o
            }),
            cancel: t
        }
    }
}
const Q5 = jd
function Y5(e) {
    return function (n) {
        return e.apply(null, n)
    }
}
function q5(e) {
    return b.isObject(e) && e.isAxiosError === !0
}
const qu = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
}
Object.entries(qu).forEach(([e, t]) => {
    qu[t] = e
})
const X5 = qu
function Fg(e) {
    const t = new kl(e),
        n = xg(kl.prototype.request, t)
    return (
        b.extend(n, kl.prototype, t, { allOwnKeys: !0 }),
        b.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (o) {
            return Fg(fo(e, o))
        }),
        n
    )
}
const he = Fg(kd)
he.Axios = kl
he.CanceledError = Mi
he.CancelToken = Q5
he.isCancel = Mg
he.VERSION = Ag
he.toFormData = Hs
he.AxiosError = ce
he.Cancel = he.CanceledError
he.all = function (t) {
    return Promise.all(t)
}
he.spread = Y5
he.isAxiosError = q5
he.mergeConfig = fo
he.AxiosHeaders = wn
he.formToJSON = (e) => Og(b.isHTMLForm(e) ? new FormData(e) : e)
he.getAdapter = Dg.getAdapter
he.HttpStatusCode = X5
he.default = he
function Vp(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            {
                tag: "path",
                attr: { fill: "none", d: "M0 0h24v24H0z" },
                child: []
            },
            {
                tag: "path",
                attr: { fill: "none", d: "M0 0h24v24H0V0z" },
                child: []
            },
            {
                tag: "path",
                attr: {
                    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
                },
                child: []
            }
        ]
    })(e)
}
function Gp(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            {
                tag: "path",
                attr: { fill: "none", d: "M0 0h24v24H0z" },
                child: []
            },
            {
                tag: "path",
                attr: {
                    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                },
                child: []
            }
        ]
    })(e)
}
function Kp(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            {
                tag: "path",
                attr: { fill: "none", d: "M0 0h24v24H0z" },
                child: []
            },
            {
                tag: "path",
                attr: {
                    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                },
                child: []
            }
        ]
    })(e)
}
function J5() {
    const [e, t] = E.useState({}),
        [n, r] = E.useState(!1)
    return (
        E.useEffect(() => {
            async function o() {
                try {
                    r(!0),
                        await he
                            .get(
                                "https://ClassHub-backend.vercel.app//user/profile",
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`
                                    }
                                }
                            )
                            .then((i) => {
                                t(i)
                            })
                            .catch((i) => {
                                if (i.status === 401)
                                    return f.jsx(ne, {
                                        size: "lg",
                                        ta: "center",
                                        children: "You are not logged in."
                                    })
                                console.error(i)
                            })
                } catch (i) {
                    console.error(i)
                } finally {
                    r(!1)
                }
            }
            o()
        }, []),
        n
            ? f.jsx(ne, { ta: "center", size: "xl", children: "Loading..." })
            : f.jsx("div", {
                  children:
                      e.status === 200 && e.data
                          ? f.jsxs(Wn, {
                                justify: "center",
                                direction: "row",
                                wrap: "wrap",
                                gap: { lg: "xl", sm: "lg", xs: "lg" },
                                py: "48",
                                align: "start",
                                px: "lg",
                                children: [
                                    f.jsxs(Vn, {
                                        withBorder: !0,
                                        padding: "xl",
                                        w: "100%",
                                        maw: { lg: "450px" },
                                        radius: "md",
                                        className:
                                            "bg-[var(--mantine-color-body)]",
                                        children: [
                                            f.jsx(Vn.Section, {
                                                h: 140,
                                                w: "auto",
                                                style: {
                                                    backgroundImage: e.data.user
                                                        .backgroundImageURL
                                                        ? `url(${e.data.user.backgroundImageURL})`
                                                        : "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)"
                                                }
                                            }),
                                            f.jsx(wo, {
                                                src: e.data.user
                                                    .profilePictureURL
                                                    ? e.data.user
                                                          .profilePictureURL
                                                    : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
                                                size: 100,
                                                radius: 100,
                                                mx: "auto",
                                                mt: -50,
                                                className: "select-none",
                                                draggable: "false"
                                            }),
                                            f.jsx(ne, {
                                                ta: "center",
                                                fz: "xl",
                                                fw: 800,
                                                mt: "sm",
                                                lineClamp: 1,
                                                children: e.data.user.name
                                            }),
                                            f.jsxs(ne, {
                                                ta: "center",
                                                fz: "md",
                                                c: "dimmed",
                                                children: [
                                                    "@",
                                                    e.data.user.username
                                                ]
                                            }),
                                            f.jsx(ne, {
                                                ta: "center",
                                                fz: "md",
                                                fw: 400,
                                                mt: "sm",
                                                children:
                                                    e.data.user.bio ||
                                                    "User Bio"
                                            }),
                                            f.jsxs(nr, {
                                                mt: "md",
                                                justify: "center",
                                                gap: 30,
                                                children: [
                                                    f.jsxs("div", {
                                                        children: [
                                                            f.jsx(ne, {
                                                                ta: "center",
                                                                fz: "lg",
                                                                fw: 500,
                                                                children:
                                                                    e.data.user
                                                                        .tasks
                                                                        .length
                                                            }),
                                                            f.jsx(ne, {
                                                                ta: "center",
                                                                fz: "sm",
                                                                c: "dimmed",
                                                                lh: 1,
                                                                children:
                                                                    "Tasks Listed"
                                                            })
                                                        ]
                                                    }),
                                                    f.jsxs("div", {
                                                        children: [
                                                            f.jsx(ne, {
                                                                ta: "center",
                                                                fz: "lg",
                                                                fw: 500,
                                                                children:
                                                                    e.data.user
                                                                        .applications
                                                                        .length
                                                            }),
                                                            f.jsx(ne, {
                                                                ta: "center",
                                                                fz: "sm",
                                                                c: "dimmed",
                                                                lh: 1,
                                                                children:
                                                                    "Applications Submitted"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            f.jsx(Ge, {
                                                fullWidth: !0,
                                                radius: "md",
                                                mt: "xl",
                                                size: "lg",
                                                variant: "light",
                                                children: "Edit Profile"
                                            })
                                        ]
                                    }),
                                    f.jsxs(Wn, {
                                        direction: "column",
                                        gap: { lg: "xl", sm: "lg", xs: "lg" },
                                        children: [
                                            f.jsxs(Vn, {
                                                withBorder: !0,
                                                padding: "xl",
                                                radius: "md",
                                                children: [
                                                    f.jsx(st, {
                                                        order: 2,
                                                        ta: "center",
                                                        fw: 800,
                                                        children:
                                                            "Applications Submitted"
                                                    }),
                                                    f.jsxs("ul", {
                                                        className:
                                                            "mt-8 grid space-y-3 divide-y divide-purple-500/50",
                                                        children: [
                                                            e.data.user.applications.map(
                                                                (o) =>
                                                                    f.jsx(
                                                                        "li",
                                                                        {
                                                                            className:
                                                                                "",
                                                                            children:
                                                                                f.jsxs(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "flex justify-between gap-16 items-center mt-3",
                                                                                        children:
                                                                                            [
                                                                                                f.jsxs(
                                                                                                    "div",
                                                                                                    {
                                                                                                        className:
                                                                                                            "flex justify-start items-center gap-2",
                                                                                                        children:
                                                                                                            [
                                                                                                                o.status ===
                                                                                                                    "pending" &&
                                                                                                                    f.jsx(
                                                                                                                        pn,
                                                                                                                        {
                                                                                                                            variant:
                                                                                                                                "light",
                                                                                                                            size: "md",
                                                                                                                            color: "orange",
                                                                                                                            children:
                                                                                                                                o.status
                                                                                                                        }
                                                                                                                    ),
                                                                                                                o.status ===
                                                                                                                    "accepted" &&
                                                                                                                    f.jsx(
                                                                                                                        pn,
                                                                                                                        {
                                                                                                                            variant:
                                                                                                                                "light",
                                                                                                                            size: "md",
                                                                                                                            color: "green",
                                                                                                                            children:
                                                                                                                                o.status
                                                                                                                        }
                                                                                                                    ),
                                                                                                                o.status ===
                                                                                                                    "rejected" &&
                                                                                                                    f.jsx(
                                                                                                                        pn,
                                                                                                                        {
                                                                                                                            variant:
                                                                                                                                "light",
                                                                                                                            size: "md",
                                                                                                                            color: "red",
                                                                                                                            children:
                                                                                                                                o.status
                                                                                                                        }
                                                                                                                    ),
                                                                                                                f.jsxs(
                                                                                                                    ne,
                                                                                                                    {
                                                                                                                        maw: {
                                                                                                                            lg: "380px"
                                                                                                                        },
                                                                                                                        lineClamp: 2,
                                                                                                                        size: "lg",
                                                                                                                        fw: 600,
                                                                                                                        children:
                                                                                                                            [
                                                                                                                                "Applied for ",
                                                                                                                                f.jsx(
                                                                                                                                    wt,
                                                                                                                                    {
                                                                                                                                        to:
                                                                                                                                            "/task/" +
                                                                                                                                            o
                                                                                                                                                .task
                                                                                                                                                ._id,
                                                                                                                                        className:
                                                                                                                                            "underline",
                                                                                                                                        children:
                                                                                                                                            o
                                                                                                                                                .task
                                                                                                                                                .name
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                                " on ",
                                                                                                                                new Date(
                                                                                                                                    o.createdAt
                                                                                                                                ).toLocaleDateString()
                                                                                                                            ]
                                                                                                                    }
                                                                                                                )
                                                                                                            ]
                                                                                                    }
                                                                                                ),
                                                                                                f.jsxs(
                                                                                                    "div",
                                                                                                    {
                                                                                                        className:
                                                                                                            "flex justify-start items-center gap-3",
                                                                                                        children:
                                                                                                            [
                                                                                                                f.jsx(
                                                                                                                    Ge,
                                                                                                                    {
                                                                                                                        px: 6,
                                                                                                                        variant:
                                                                                                                            "outline",
                                                                                                                        size: "xs",
                                                                                                                        radius: "md",
                                                                                                                        children:
                                                                                                                            f.jsx(
                                                                                                                                Kp,
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "size-4"
                                                                                                                                }
                                                                                                                            )
                                                                                                                    }
                                                                                                                ),
                                                                                                                f.jsx(
                                                                                                                    Ge,
                                                                                                                    {
                                                                                                                        px: 6,
                                                                                                                        variant:
                                                                                                                            "outline",
                                                                                                                        size: "xs",
                                                                                                                        radius: "md",
                                                                                                                        color: "red",
                                                                                                                        children:
                                                                                                                            f.jsx(
                                                                                                                                Vp,
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "size-4"
                                                                                                                                }
                                                                                                                            )
                                                                                                                    }
                                                                                                                )
                                                                                                            ]
                                                                                                    }
                                                                                                )
                                                                                            ]
                                                                                    }
                                                                                )
                                                                        },
                                                                        o._id
                                                                    )
                                                            ),
                                                            f.jsx("li", {
                                                                children: f.jsx(
                                                                    wt,
                                                                    {
                                                                        to: "/tasks",
                                                                        children:
                                                                            f.jsx(
                                                                                Ge,
                                                                                {
                                                                                    leftSection:
                                                                                        f.jsx(
                                                                                            Gp,
                                                                                            {
                                                                                                className:
                                                                                                    "size-6"
                                                                                            }
                                                                                        ),
                                                                                    fullWidth:
                                                                                        !0,
                                                                                    className:
                                                                                        "mt-8",
                                                                                    size: "lg",
                                                                                    variant:
                                                                                        "light",
                                                                                    children:
                                                                                        "Apply For Another Task"
                                                                                }
                                                                            )
                                                                    }
                                                                )
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            f.jsxs(Vn, {
                                                withBorder: !0,
                                                padding: "xl",
                                                radius: "md",
                                                children: [
                                                    f.jsx(st, {
                                                        order: 2,
                                                        ta: "center",
                                                        fw: 800,
                                                        children: "Tasks Listed"
                                                    }),
                                                    f.jsxs("ul", {
                                                        className:
                                                            "mt-8 grid space-y-3 divide-y divide-purple-500/50",
                                                        children: [
                                                            e.data.user.tasks.map(
                                                                (o) =>
                                                                    f.jsx(
                                                                        "li",
                                                                        {
                                                                            className:
                                                                                "",
                                                                            children:
                                                                                f.jsxs(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "flex justify-between gap-16 items-center mt-3",
                                                                                        children:
                                                                                            [
                                                                                                f.jsxs(
                                                                                                    "div",
                                                                                                    {
                                                                                                        className:
                                                                                                            "flex justify-start items-center gap-2",
                                                                                                        children:
                                                                                                            [
                                                                                                                o.completed
                                                                                                                    ? f.jsx(
                                                                                                                          pn,
                                                                                                                          {
                                                                                                                              variant:
                                                                                                                                  "light",
                                                                                                                              size: "md",
                                                                                                                              color: "green",
                                                                                                                              children:
                                                                                                                                  "completed"
                                                                                                                          }
                                                                                                                      )
                                                                                                                    : f.jsx(
                                                                                                                          pn,
                                                                                                                          {
                                                                                                                              variant:
                                                                                                                                  "light",
                                                                                                                              size: "md",
                                                                                                                              color: "orange",
                                                                                                                              children:
                                                                                                                                  "pending"
                                                                                                                          }
                                                                                                                      ),
                                                                                                                f.jsxs(
                                                                                                                    ne,
                                                                                                                    {
                                                                                                                        maw: {
                                                                                                                            lg: "350px"
                                                                                                                        },
                                                                                                                        lineClamp: 2,
                                                                                                                        size: "lg",
                                                                                                                        fw: 600,
                                                                                                                        children:
                                                                                                                            [
                                                                                                                                "Listed ",
                                                                                                                                f.jsx(
                                                                                                                                    wt,
                                                                                                                                    {
                                                                                                                                        to:
                                                                                                                                            "/task/" +
                                                                                                                                            o._id,
                                                                                                                                        className:
                                                                                                                                            "underline",
                                                                                                                                        children:
                                                                                                                                            o.name
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                                " on ",
                                                                                                                                new Date(
                                                                                                                                    o.createdAt
                                                                                                                                ).toLocaleDateString()
                                                                                                                            ]
                                                                                                                    }
                                                                                                                )
                                                                                                            ]
                                                                                                    }
                                                                                                ),
                                                                                                f.jsxs(
                                                                                                    "div",
                                                                                                    {
                                                                                                        className:
                                                                                                            "flex justify-start items-center gap-3",
                                                                                                        children:
                                                                                                            [
                                                                                                                f.jsx(
                                                                                                                    Ge,
                                                                                                                    {
                                                                                                                        px: 6,
                                                                                                                        variant:
                                                                                                                            "outline",
                                                                                                                        size: "xs",
                                                                                                                        radius: "md",
                                                                                                                        children:
                                                                                                                            f.jsx(
                                                                                                                                Kp,
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "size-4"
                                                                                                                                }
                                                                                                                            )
                                                                                                                    }
                                                                                                                ),
                                                                                                                f.jsx(
                                                                                                                    Ge,
                                                                                                                    {
                                                                                                                        px: 6,
                                                                                                                        variant:
                                                                                                                            "outline",
                                                                                                                        size: "xs",
                                                                                                                        radius: "md",
                                                                                                                        color: "red",
                                                                                                                        children:
                                                                                                                            f.jsx(
                                                                                                                                Vp,
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "size-4"
                                                                                                                                }
                                                                                                                            )
                                                                                                                    }
                                                                                                                )
                                                                                                            ]
                                                                                                    }
                                                                                                )
                                                                                            ]
                                                                                    }
                                                                                )
                                                                        },
                                                                        o._id
                                                                    )
                                                            ),
                                                            f.jsx("li", {
                                                                children: f.jsx(
                                                                    wt,
                                                                    {
                                                                        to: "/create-task",
                                                                        children:
                                                                            f.jsx(
                                                                                Ge,
                                                                                {
                                                                                    leftSection:
                                                                                        f.jsx(
                                                                                            Gp,
                                                                                            {
                                                                                                className:
                                                                                                    "size-6"
                                                                                            }
                                                                                        ),
                                                                                    fullWidth:
                                                                                        !0,
                                                                                    className:
                                                                                        "mt-8",
                                                                                    size: "lg",
                                                                                    variant:
                                                                                        "light",
                                                                                    children:
                                                                                        "Create A New Task"
                                                                                }
                                                                            )
                                                                    }
                                                                )
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                          : f.jsx(st, {
                                order: 2,
                                fw: 700,
                                py: 48,
                                ta: "center",
                                children: "You are not logged in."
                            })
              })
    )
}
var Z5 = function e(t, n) {
    if (t === n) return !0
    if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return !1
        var r, o, i
        if (Array.isArray(t)) {
            if (((r = t.length), r != n.length)) return !1
            for (o = r; o-- !== 0; ) if (!e(t[o], n[o])) return !1
            return !0
        }
        if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags
        if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf()
        if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString()
        if (((i = Object.keys(t)), (r = i.length), r !== Object.keys(n).length))
            return !1
        for (o = r; o-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1
        for (o = r; o-- !== 0; ) {
            var l = i[o]
            if (!e(t[l], n[l])) return !1
        }
        return !0
    }
    return t !== t && n !== n
}
const Qp = ec(Z5)
function e3(e) {
    if (!/^[0-9a-zA-Z-]+$/.test(e))
        throw new Error(
            `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
        )
}
const t3 = typeof window < "u" ? E.useLayoutEffect : E.useEffect
function qe(e, t) {
    t3(() => {
        if (e)
            return (
                window.addEventListener(e, t),
                () => window.removeEventListener(e, t)
            )
    }, [e])
}
function n3(e, t) {
    e && e3(e),
        qe(`mantine-form:${e}:set-field-value`, (n) =>
            t.setFieldValue(n.detail.path, n.detail.value)
        ),
        qe(`mantine-form:${e}:set-values`, (n) => t.setValues(n.detail)),
        qe(`mantine-form:${e}:set-initial-values`, (n) =>
            t.setInitialValues(n.detail)
        ),
        qe(`mantine-form:${e}:set-errors`, (n) => t.setErrors(n.detail)),
        qe(`mantine-form:${e}:set-field-error`, (n) =>
            t.setFieldError(n.detail.path, n.detail.error)
        ),
        qe(`mantine-form:${e}:clear-field-error`, (n) =>
            t.clearFieldError(n.detail)
        ),
        qe(`mantine-form:${e}:clear-errors`, t.clearErrors),
        qe(`mantine-form:${e}:reset`, t.reset),
        qe(`mantine-form:${e}:validate`, t.validate),
        qe(`mantine-form:${e}:validate-field`, (n) =>
            t.validateField(n.detail)
        ),
        qe(`mantine-form:${e}:reorder-list-item`, (n) =>
            t.reorderListItem(n.detail.path, n.detail.payload)
        ),
        qe(`mantine-form:${e}:remove-list-item`, (n) =>
            t.removeListItem(n.detail.path, n.detail.index)
        ),
        qe(`mantine-form:${e}:insert-list-item`, (n) =>
            t.insertListItem(n.detail.path, n.detail.item, n.detail.index)
        ),
        qe(`mantine-form:${e}:set-dirty`, (n) => t.setDirty(n.detail)),
        qe(`mantine-form:${e}:set-touched`, (n) => t.setTouched(n.detail)),
        qe(`mantine-form:${e}:reset-dirty`, (n) => t.resetDirty(n.detail)),
        qe(`mantine-form:${e}:reset-touched`, t.resetTouched)
}
function Xu(e) {
    return e === null || typeof e != "object"
        ? {}
        : Object.keys(e).reduce((t, n) => {
              const r = e[n]
              return r != null && r !== !1 && (t[n] = r), t
          }, {})
}
function r3(e) {
    return (t) => {
        if (!t) e(t)
        else if (typeof t == "function") e(t)
        else if (typeof t == "object" && "nativeEvent" in t) {
            const { currentTarget: n } = t
            n instanceof HTMLInputElement
                ? n.type === "checkbox"
                    ? e(n.checked)
                    : e(n.value)
                : (n instanceof HTMLTextAreaElement ||
                      n instanceof HTMLSelectElement) &&
                  e(n.value)
        } else e(t)
    }
}
function Yp(e, t) {
    const n = Object.keys(e)
    if (typeof t == "string") {
        const r = n.filter((o) => o.startsWith(`${t}.`))
        return e[t] || r.some((o) => e[o]) || !1
    }
    return n.some((r) => e[r])
}
function Bg(e, t) {
    if (t === null || typeof t != "object") return {}
    const n = { ...t }
    return (
        Object.keys(t).forEach((r) => {
            r.includes(`${String(e)}.`) && delete n[r]
        }),
        n
    )
}
function qp(e, t) {
    const n = e.substring(t.length + 1).split(".")[0]
    return parseInt(n, 10)
}
function Xp(e, t, n, r) {
    if (t === void 0) return n
    const o = `${String(e)}`
    let i = n
    r === -1 && (i = Bg(`${o}.${t}`, i))
    const l = { ...i },
        s = new Set()
    return (
        Object.entries(i)
            .filter(([a]) => {
                if (!a.startsWith(`${o}.`)) return !1
                const u = qp(a, o)
                return Number.isNaN(u) ? !1 : u >= t
            })
            .forEach(([a, u]) => {
                const c = qp(a, o),
                    d = a.replace(`${o}.${c}`, `${o}.${c + r}`)
                ;(l[d] = u), s.add(d), s.has(a) || delete l[a]
            }),
        l
    )
}
function o3(e, { from: t, to: n }, r) {
    const o = `${e}.${t}`,
        i = `${e}.${n}`,
        l = { ...r }
    return (
        Object.keys(r).every((s) => {
            let a, u
            if (
                (s.startsWith(o) && ((a = s), (u = s.replace(o, i))),
                s.startsWith(i) && ((a = s.replace(i, o)), (u = s)),
                a && u)
            ) {
                const c = l[a],
                    d = l[u]
                return (
                    d === void 0 ? delete l[a] : (l[a] = d),
                    c === void 0 ? delete l[u] : (l[u] = c),
                    !1
                )
            }
            return !0
        }),
        l
    )
}
function Ug(e) {
    return typeof e != "string" ? [] : e.split(".")
}
function hn(e, t) {
    const n = Ug(e)
    if (n.length === 0 || typeof t != "object" || t === null) return
    let r = t[n[0]]
    for (let o = 1; o < n.length && r !== void 0; o += 1) r = r[n[o]]
    return r
}
function Jp(e, t, n) {
    typeof n.value == "object" && (n.value = Xr(n.value)),
        !n.enumerable ||
        n.get ||
        n.set ||
        !n.configurable ||
        !n.writable ||
        t === "__proto__"
            ? Object.defineProperty(e, t, n)
            : (e[t] = n.value)
}
function Xr(e) {
    if (typeof e != "object") return e
    var t = 0,
        n,
        r,
        o,
        i = Object.prototype.toString.call(e)
    if (
        (i === "[object Object]"
            ? (o = Object.create(e.__proto__ || null))
            : i === "[object Array]"
              ? (o = Array(e.length))
              : i === "[object Set]"
                ? ((o = new Set()),
                  e.forEach(function (l) {
                      o.add(Xr(l))
                  }))
                : i === "[object Map]"
                  ? ((o = new Map()),
                    e.forEach(function (l, s) {
                        o.set(Xr(s), Xr(l))
                    }))
                  : i === "[object Date]"
                    ? (o = new Date(+e))
                    : i === "[object RegExp]"
                      ? (o = new RegExp(e.source, e.flags))
                      : i === "[object DataView]"
                        ? (o = new e.constructor(Xr(e.buffer)))
                        : i === "[object ArrayBuffer]"
                          ? (o = e.slice(0))
                          : i.slice(-6) === "Array]" &&
                            (o = new e.constructor(e)),
        o)
    ) {
        for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
            Jp(o, r[t], Object.getOwnPropertyDescriptor(e, r[t]))
        for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
            (Object.hasOwnProperty.call(o, (n = r[t])) && o[n] === e[n]) ||
                Jp(o, n, Object.getOwnPropertyDescriptor(e, n))
    }
    return o || e
}
function Vs(e, t, n) {
    const r = Ug(e)
    if (r.length === 0) return n
    const o = Xr(n)
    if (r.length === 1) return (o[r[0]] = t), o
    let i = o[r[0]]
    for (let l = 1; l < r.length - 1; l += 1) {
        if (i === void 0) return o
        i = i[r[l]]
    }
    return (i[r[r.length - 1]] = t), o
}
function i3(e, { from: t, to: n }, r) {
    const o = hn(e, r)
    if (!Array.isArray(o)) return r
    const i = [...o],
        l = o[t]
    return i.splice(t, 1), i.splice(n, 0, l), Vs(e, i, r)
}
function l3(e, t, n, r) {
    const o = hn(e, r)
    if (!Array.isArray(o)) return r
    const i = [...o]
    return i.splice(typeof n == "number" ? n : i.length, 0, t), Vs(e, i, r)
}
function s3(e, t, n) {
    const r = hn(e, n)
    return Array.isArray(r)
        ? Vs(
              e,
              r.filter((o, i) => i !== t),
              n
          )
        : n
}
function Zp(e) {
    const t = Xu(e)
    return { hasErrors: Object.keys(t).length > 0, errors: t }
}
function Ju(e, t, n = "", r = {}) {
    return typeof e != "object" || e === null
        ? r
        : Object.keys(e).reduce((o, i) => {
              const l = e[i],
                  s = `${n === "" ? "" : `${n}.`}${i}`,
                  a = hn(s, t)
              let u = !1
              return (
                  typeof l == "function" && (o[s] = l(a, t, s)),
                  typeof l == "object" &&
                      Array.isArray(a) &&
                      ((u = !0), a.forEach((c, d) => Ju(l, t, `${s}.${d}`, o))),
                  typeof l == "object" &&
                      typeof a == "object" &&
                      a !== null &&
                      (u || Ju(l, t, s, o)),
                  o
              )
          }, r)
}
function Zu(e, t) {
    return Zp(typeof e == "function" ? e(t) : Ju(e, t))
}
function sl(e, t, n) {
    if (typeof e != "string") return { hasError: !1, error: null }
    const r = Zu(t, n),
        o = Object.keys(r.errors).find((i) =>
            e.split(".").every((l, s) => l === i.split(".")[s])
        )
    return { hasError: !!o, error: o ? r.errors[o] : null }
}
const a3 = "__MANTINE_FORM_INDEX__"
function eh(e, t) {
    return t
        ? typeof t == "boolean"
            ? t
            : Array.isArray(t)
              ? t.includes(e.replace(/[.][0-9]/g, `.${a3}`))
              : !1
        : !1
}
function Gs({
    name: e,
    initialValues: t,
    initialErrors: n = {},
    initialDirty: r = {},
    initialTouched: o = {},
    clearInputErrorOnChange: i = !0,
    validateInputOnChange: l = !1,
    validateInputOnBlur: s = !1,
    onValuesChange: a,
    transformValues: u = (p) => p,
    enhanceGetInputProps: c,
    validate: d
} = {}) {
    const [p, w] = E.useState(o),
        [g, v] = E.useState(r),
        [S, m] = E.useState(t || {}),
        [h, y] = E.useState(Xu(n)),
        [C, R] = E.useState(!1),
        x = E.useRef(t || {}),
        _ = (O) => {
            x.current = O
        },
        T = E.useCallback(
            (O) => {
                C || (R(!0), m(O), _(O))
            },
            [C]
        ),
        M = E.useCallback(() => w({}), []),
        F = (O) => {
            const Q = O ? { ...S, ...O } : S
            _(Q), v({})
        },
        V = E.useCallback(
            (O) => y((Q) => Xu(typeof O == "function" ? O(Q) : O)),
            []
        ),
        ie = E.useCallback(() => y({}), []),
        te = E.useCallback(() => {
            m(x.current), ie(), v({}), M()
        }, []),
        ue = E.useCallback((O, Q) => V((q) => ({ ...q, [O]: Q })), []),
        Te = E.useCallback(
            (O) =>
                V((Q) => {
                    if (typeof O != "string") return Q
                    const q = { ...Q }
                    return delete q[O], q
                }),
            []
        ),
        Se = E.useCallback(
            (O) =>
                v((Q) => {
                    if (typeof O != "string") return Q
                    const q = Bg(O, Q)
                    return delete q[O], q
                }),
            []
        ),
        re = E.useCallback((O, Q) => {
            const q = eh(O, l)
            Se(O),
                w((X) => ({ ...X, [O]: !0 })),
                m((X) => {
                    const Ue = Vs(O, Q, X)
                    if (q) {
                        const So = sl(O, d, Ue)
                        So.hasError ? ue(O, So.error) : Te(O)
                    }
                    return a == null || a(Ue, X), Ue
                }),
                !q && i && ue(O, null)
        }, []),
        z = E.useCallback((O) => {
            m((Q) => {
                const q = typeof O == "function" ? O(Q) : O,
                    X = { ...Q, ...q }
                return a == null || a(X, Q), X
            }),
                i && ie()
        }, []),
        D = E.useCallback((O, Q) => {
            Se(O),
                m((q) => {
                    const X = i3(O, Q, q)
                    return a == null || a(X, q), X
                }),
                y((q) => o3(O, Q, q))
        }, []),
        B = E.useCallback((O, Q) => {
            Se(O),
                m((q) => {
                    const X = s3(O, Q, q)
                    return a == null || a(X, q), X
                }),
                y((q) => Xp(O, Q, q, -1))
        }, []),
        K = E.useCallback((O, Q, q) => {
            Se(O),
                m((X) => {
                    const Ue = l3(O, Q, q, X)
                    return a == null || a(Ue, X), Ue
                }),
                y((X) => Xp(O, q, X, 1))
        }, []),
        le = E.useCallback(() => {
            const O = Zu(d, S)
            return y(O.errors), O
        }, [S, d]),
        Ae = E.useCallback(
            (O) => {
                const Q = sl(O, d, S)
                return Q.hasError ? ue(O, Q.error) : Te(O), Q
            },
            [S, d]
        ),
        me = (
            O,
            {
                type: Q = "input",
                withError: q = !0,
                withFocus: X = !0,
                ...Ue
            } = {}
        ) => {
            const un = { onChange: r3((bn) => re(O, bn)) }
            return (
                q && (un.error = h[O]),
                Q === "checkbox"
                    ? (un.checked = hn(O, S))
                    : (un.value = hn(O, S)),
                X &&
                    ((un.onFocus = () => w((bn) => ({ ...bn, [O]: !0 }))),
                    (un.onBlur = () => {
                        if (eh(O, s)) {
                            const bn = sl(O, d, S)
                            bn.hasError ? ue(O, bn.error) : Te(O)
                        }
                    })),
                Object.assign(
                    un,
                    c == null
                        ? void 0
                        : c({
                              inputProps: un,
                              field: O,
                              options: {
                                  type: Q,
                                  withError: q,
                                  withFocus: X,
                                  ...Ue
                              },
                              form: $e
                          })
                )
            )
        },
        ze = (O, Q) => (q) => {
            q == null || q.preventDefault()
            const X = le()
            X.hasErrors
                ? Q == null || Q(X.errors, S, q)
                : O == null || O(u(S), q)
        },
        je = (O) => u(O || S),
        Qe = E.useCallback((O) => {
            O.preventDefault(), te()
        }, []),
        Mt = (O) => {
            if (O) {
                const q = hn(O, g)
                if (typeof q == "boolean") return q
                const X = hn(O, S),
                    Ue = hn(O, x.current)
                return !Qp(X, Ue)
            }
            return Object.keys(g).length > 0 ? Yp(g) : !Qp(S, x.current)
        },
        It = E.useCallback((O) => Yp(p, O), [p]),
        Rn = E.useCallback(
            (O) => (O ? !sl(O, d, S).hasError : !Zu(d, S).hasErrors),
            [S, d]
        ),
        $e = {
            initialized: C,
            values: S,
            errors: h,
            initialize: T,
            setValues: z,
            setInitialValues: _,
            setErrors: V,
            setFieldValue: re,
            setFieldError: ue,
            clearFieldError: Te,
            clearErrors: ie,
            reset: te,
            validate: le,
            validateField: Ae,
            reorderListItem: D,
            removeListItem: B,
            insertListItem: K,
            getInputProps: me,
            onSubmit: ze,
            onReset: Qe,
            isDirty: Mt,
            isTouched: It,
            setTouched: w,
            setDirty: v,
            resetTouched: M,
            resetDirty: F,
            isValid: Rn,
            getTransformedValues: je
        }
    return n3(e, $e), $e
}
function u3() {
    const [e, t] = E.useState(!1),
        [n, r] = E.useState(""),
        [o, i] = E.useState({}),
        l = Gs({
            initialValues: {
                name: "",
                description: "",
                deadline: "",
                bounty: 0
            },
            validate: {
                name: (a) => (a.length > 0 ? null : "Enter a task name"),
                description: (a) =>
                    a.length > 0 ? null : "Enter a task description",
                deadline: (a) => (a ? null : "Enter a task deadline"),
                bounty: (a) => (a >= 0 ? null : "Enter a valid bounty amount")
            }
        })
    E.useEffect(() => {
        async function a() {
            try {
                t(!0)
                const u = await he.get(
                    "https://ClassHub-backend.vercel.app//user/profile",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                i(u)
            } catch (u) {
                console.error(u)
            } finally {
                t(!1)
            }
        }
        a()
    }, [])
    const s = l.onSubmit(async (a) => {
        try {
            t(!0)
            const u = await he.post(
                "https://ClassHub-backend.vercel.app//api/tasks/create",
                { ...a, owner: o.data.user._id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            r(u.data.message), console.log(u.data)
        } catch (u) {
            console.error("Error creating task:", u),
                r(`Something went wrong. Please try again. ${u.message}`)
        } finally {
            t(!1), l.reset()
        }
    })
    return e
        ? f.jsx(ne, { ta: "center", size: "xl", children: "Loading..." })
        : o.status === 200
          ? f.jsx("div", {
                className: "flex justify-center items-center w-full",
                children: f.jsxs(vo, {
                    className: "w-full max-w-[800px]",
                    radius: 0,
                    p: 48,
                    children: [
                        f.jsx(st, {
                            order: 1,
                            className: "",
                            ta: "left",
                            tt: "capitalize",
                            textWrap: "balance",
                            mt: "md",
                            mb: 50,
                            children: "Create a new task"
                        }),
                        f.jsxs("form", {
                            onSubmit: s,
                            children: [
                                f.jsx(Kt, {
                                    withAsterisk: !l.isValid("name"),
                                    label: "Task Title",
                                    placeholder: "Enter the task title",
                                    ...l.getInputProps("name"),
                                    size: "md"
                                }),
                                f.jsx($s, {
                                    resize: "vertical",
                                    withAsterisk: !l.isValid("description"),
                                    label: "Task Description",
                                    placeholder: "Enter the task description",
                                    mt: "md",
                                    size: "md",
                                    ...l.getInputProps("description")
                                }),
                                f.jsx(Kt, {
                                    withAsterisk: !l.isValid("deadline"),
                                    label: "Task Deadline",
                                    placeholder: "Enter the task deadline",
                                    mt: "md",
                                    type: "datetime-local",
                                    ...l.getInputProps("deadline")
                                }),
                                f.jsx(Kt, {
                                    withAsterisk: !l.isValid("bounty"),
                                    label: "Task Bounty",
                                    placeholder: "Enter the task bounty",
                                    mt: "md",
                                    type: "number",
                                    ...l.getInputProps("bounty")
                                }),
                                f.jsx(Ge, {
                                    disabled: e,
                                    fullWidth: !0,
                                    mt: "xl",
                                    size: "md",
                                    variant: "light",
                                    type: "submit",
                                    children: "Create Task"
                                }),
                                f.jsx(ne, {
                                    size: "lg",
                                    ta: "center",
                                    opacity: 0.9,
                                    mt: "md",
                                    children: n
                                })
                            ]
                        })
                    ]
                })
            })
          : f.jsx(ne, {
                size: "lg",
                ta: "center",
                children: "You are not logged in."
            })
}
function al({ size: e = 185, radius: t = 2.5, ...n }) {
    return f.jsxs("svg", {
        "aria-hidden": !0,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 185 185",
        width: e,
        height: e,
        ...n,
        children: [
            f.jsx("rect", { width: "5", height: "5", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "60", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "120", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "20", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "80", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "140", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "40", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "100", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "160", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "180", rx: t }),
            f.jsx("rect", { width: "5", height: "5", y: "20", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "60", y: "20", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "20",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "20", y: "20", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "80", y: "20", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "20",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "40", y: "20", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "20",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "20",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "20",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "40", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "60", y: "40", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "40",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "20", y: "40", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "80", y: "40", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "40",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "40", y: "40", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "40",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "40",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "40",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "60", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "60", y: "60", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "60",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "20", y: "60", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "80", y: "60", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "60",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "40", y: "60", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "60",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "60",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "60",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "80", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "60", y: "80", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "80",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "20", y: "80", rx: t }),
            f.jsx("rect", { width: "5", height: "5", x: "80", y: "80", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "80",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", x: "40", y: "80", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "80",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "80",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "80",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "100", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "60",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "20",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "80",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "40",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "100",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "100",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "120", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "60",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "20",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "80",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "40",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "120",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "120",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "140", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "60",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "20",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "80",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "40",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "140",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "140",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "160", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "60",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "20",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "80",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "40",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "160",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "160",
                rx: t
            }),
            f.jsx("rect", { width: "5", height: "5", y: "180", rx: t }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "60",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "120",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "20",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "80",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "140",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "40",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "100",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "160",
                y: "180",
                rx: t
            }),
            f.jsx("rect", {
                width: "5",
                height: "5",
                x: "180",
                y: "180",
                rx: t
            })
        ]
    })
}
const c3 = "_wrapper_e8pdb_1",
    d3 = "_inner_e8pdb_21",
    f3 = "_dots_e8pdb_31",
    p3 = "_dotsLeft_e8pdb_49",
    h3 = "_title_e8pdb_59",
    m3 = "_highlight_e8pdb_93",
    g3 = "_description_e8pdb_101",
    y3 = "_controls_e8pdb_119",
    v3 = "_control_e8pdb_119",
    cn = {
        wrapper: c3,
        inner: d3,
        dots: f3,
        dotsLeft: p3,
        title: h3,
        highlight: m3,
        description: g3,
        controls: y3,
        control: v3
    }
function w3() {
    return f.jsxs(rr, {
        className: cn.wrapper,
        size: 1400,
        children: [
            f.jsx(al, { className: cn.dots, style: { left: 0, top: 0 } }),
            f.jsx(al, { className: cn.dots, style: { left: 60, top: 0 } }),
            f.jsx(al, { className: cn.dots, style: { left: 0, top: 140 } }),
            f.jsx(al, { className: cn.dots, style: { right: 0, top: 60 } }),
            f.jsxs("div", {
                className: cn.inner,
                children: [
                    f.jsxs(st, {
                        className: "text-center",
                        children: [
                            "Industry experience, now only a ",
                            " ",
                            f.jsx("span", {
                                className:
                                    "text-[var(--mantine-color-purple-4)]",
                                children: "few clicks"
                            }),
                            " ",
                            "away."
                        ]
                    }),
                    f.jsx(rr, {
                        mt: 12,
                        p: 0,
                        size: 600,
                        children: f.jsx(ne, {
                            size: "lg",
                            c: "dimmed",
                            className: cn.description,
                            children:
                                "Gain real-world skills and experience by tackling challenges posted by various industy level businesses and organizations."
                        })
                    }),
                    f.jsxs("div", {
                        className:
                            "flex justify-center items-center mt-6 gap-4",
                        children: [
                            f.jsx(wt, {
                                to: "/login",
                                children: f.jsx(Ge, {
                                    className: cn.control,
                                    size: "md",
                                    variant: "light",
                                    color: "gray",
                                    children: "Get Started"
                                })
                            }),
                            f.jsx(wt, {
                                to: "/tasks",
                                children: f.jsx(Ge, {
                                    variant: "filled",
                                    className: cn.control,
                                    size: "md",
                                    children: "Browse Tasks"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    })
}
const x3 = "_wrapper_1de3j_1",
    S3 = "_form_1de3j_15",
    E3 = "_title_1de3j_37",
    Fa = { wrapper: x3, form: S3, title: E3 }
function k3() {
    const e = Gs({
            initialValues: { email: "", password: "" },
            validate: {
                email: (s) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
                        ? null
                        : "Enter a valid email",
                password: (s) =>
                    s.length > 8
                        ? null
                        : "Password should include at least 8 characters"
            }
        }),
        [t, n] = E.useState(!1),
        [r, o] = E.useState(""),
        { dispatch: i } = vd(),
        l = e.onSubmit(async (s) => {
            try {
                n(!0)
                const a = await he
                    .post("https://ClassHub-backend.vercel.app//auth/login", s)
                    .then((u) => {
                        const c = u.data.token
                        localStorage.getItem("token") &&
                            localStorage.removeItem("token"),
                            localStorage.setItem("token", c),
                            i({ type: "LOGIN", payload: u.data }),
                            (window.location = "/")
                    })
                    .catch((u) => {
                        console.error(u), o(u.message)
                    })
                console.log(a), console.log(s)
            } catch (a) {
                a.response &&
                    a.response.status >= 400 &&
                    a.response.status <= 500 &&
                    o("Something went wrong. Please try again. " + a.message),
                    o("Something went wrong. Please try again. " + a.message),
                    console.error(a)
            } finally {
                n(!1), e.reset()
            }
        })
    return f.jsx("div", {
        className: Fa.wrapper,
        children: f.jsxs(vo, {
            className: Fa.form,
            radius: 0,
            p: 48,
            children: [
                f.jsx(st, {
                    order: 1,
                    className: Fa.title,
                    ta: "left",
                    tt: "capitalize",
                    textWrap: "balance",
                    mt: "md",
                    mb: 50,
                    children: "Login to an existing account"
                }),
                f.jsxs("form", {
                    onReset: e.onReset,
                    onSubmit: l,
                    children: [
                        f.jsx(Kt, {
                            label: "Email Address",
                            placeholder: "your@email.com",
                            ...e.getInputProps("email"),
                            size: "md"
                        }),
                        f.jsx(As, {
                            label: "Password",
                            placeholder: "Your password",
                            mt: "md",
                            size: "md",
                            ...e.getInputProps("password", { type: "input" })
                        }),
                        f.jsx(Ge, {
                            disabled: t,
                            fullWidth: !0,
                            mt: "xl",
                            size: "md",
                            variant: "light",
                            type: "submit",
                            children: "Login"
                        }),
                        f.jsx(ne, {
                            size: "lg",
                            ta: "center",
                            opacity: 0.9,
                            mt: "md",
                            children: r
                        })
                    ]
                }),
                f.jsxs(ne, {
                    ta: "center",
                    mt: "md",
                    children: [
                        "Don't have an account?",
                        " ",
                        f.jsx(Rs, {
                            component: "a",
                            href: "/register",
                            fw: 700,
                            children: "Register"
                        })
                    ]
                })
            ]
        })
    })
}
const C3 = "_wrapper_yk27m_1",
    j3 = "_form_yk27m_17",
    P3 = "_title_yk27m_39",
    Ba = { wrapper: C3, form: j3, title: P3 }
function _3() {
    const [e, t] = E.useState(!1),
        [n, r] = E.useState(""),
        o = Gs({
            initialValues: { name: "", username: "", email: "", password: "" },
            validate: {
                name: (l) => (l.length > 1 ? null : "Enter your name"),
                username: (l) =>
                    l.length >= 3 && l.length < 20
                        ? null
                        : "Username must be at least 3 and at most 20 characters",
                email: (l) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)
                        ? null
                        : "Enter a valid email",
                password: (l) =>
                    l.length > 8
                        ? null
                        : "Password should include at least 8 characters"
            }
        }),
        i = o.onSubmit(async (l) => {
            try {
                t(!0),
                    await he
                        .post(
                            "https://ClassHub-backend.vercel.app//auth/register",
                            l
                        )
                        .then(r("Successfully registed. You can now login."))
                        .catch((s) => {
                            console.error(s), r(s.message)
                        })
            } catch (s) {
                r("Something went wrong. Please try again. " + s.message),
                    console.error(s)
            } finally {
                t(!1), o.reset()
            }
        })
    return f.jsx("div", {
        className: Ba.wrapper,
        children: f.jsxs(vo, {
            className: Ba.form,
            radius: 0,
            p: 48,
            children: [
                f.jsx(st, {
                    order: 1,
                    className: Ba.title,
                    ta: "left",
                    tt: "capitalize",
                    textWrap: "balance",
                    mt: "md",
                    mb: 50,
                    children: "Create a new account"
                }),
                f.jsxs("form", {
                    onReset: o.onReset,
                    onSubmit: i,
                    children: [
                        f.jsx(Kt, {
                            withAsterisk: !o.isValid("name"),
                            label: "Full Name",
                            placeholder: "Your Name",
                            ...o.getInputProps("name"),
                            size: "md"
                        }),
                        f.jsx(Kt, {
                            withAsterisk: !o.isValid("username"),
                            label: "Username",
                            placeholder: "Your password",
                            mt: "md",
                            size: "md",
                            ...o.getInputProps("username", { type: "input" })
                        }),
                        f.jsx(Kt, {
                            withAsterisk: !o.isValid("email"),
                            label: "Email Address",
                            placeholder: "your@email.com",
                            mt: "md",
                            size: "md",
                            ...o.getInputProps("email", { type: "input" })
                        }),
                        f.jsx(As, {
                            withAsterisk: !o.isValid("password"),
                            label: "Password",
                            placeholder: "Your password",
                            mt: "md",
                            size: "md",
                            ...o.getInputProps("password")
                        }),
                        f.jsx(Ge, {
                            disabled: e,
                            fullWidth: !0,
                            mt: "xl",
                            size: "md",
                            variant: "light",
                            type: "submit",
                            children: "Register"
                        }),
                        f.jsx(ne, {
                            size: "lg",
                            ta: "center",
                            opacity: 0.9,
                            mt: "md",
                            children: n
                        })
                    ]
                }),
                f.jsxs(ne, {
                    ta: "center",
                    mt: "md",
                    children: [
                        "Already have an account?",
                        " ",
                        f.jsx(Rs, {
                            component: "a",
                            href: "/login",
                            fw: 700,
                            children: "Login"
                        })
                    ]
                })
            ]
        })
    })
}
function N3(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                },
                child: []
            }
        ]
    })(e)
}
function R3(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 320 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"
                },
                child: []
            }
        ]
    })(e)
}
function b3(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                },
                child: []
            }
        ]
    })(e)
}
function L3() {
    const [e, t] = E.useState([]),
        [n, r] = E.useState(!0),
        [o, i] = E.useState(1),
        [l] = E.useState(6)
    E.useEffect(() => {
        ;(async () => {
            try {
                const p = await he.get(
                    "https://ClassHub-backend.vercel.app//api/tasks"
                )
                t(p.data.tasks)
            } catch (p) {
                console.error("Error fetching tasks:", p)
            } finally {
                r(!1)
            }
        })()
    }, [])
    const s = o * l,
        a = s - l,
        u = e.slice(a, s),
        c = (d) => i(d)
    return f.jsxs(rr, {
        size: "xl",
        children: [
            f.jsx(st, {
                order: 1,
                align: "center",
                mt: 24,
                mb: 48,
                fw: 800,
                children: "Available Tasks"
            }),
            f.jsx(Si, {
                gutter: 32,
                children: n
                    ? f.jsx(ne, {
                          align: "center",
                          size: "xl",
                          children: "Loading..."
                      })
                    : u.map((d) =>
                          f.jsx(
                              Si.Col,
                              {
                                  span: { lg: 4 },
                                  children: f.jsxs(Vn, {
                                      withBorder: !0,
                                      padding: "xl",
                                      radius: "md",
                                      className: "mb-md",
                                      children: [
                                          f.jsx(ne, {
                                              size: "28px",
                                              fw: 700,
                                              children: d.name
                                          }),
                                          f.jsx(ne, {
                                              lineClamp: 3,
                                              size: "xl",
                                              mt: 20,
                                              children: d.description
                                          }),
                                          f.jsxs("div", {
                                              className:
                                                  "flex flex-col divide-y divide-purple-500/50",
                                              children: [
                                                  f.jsxs(ne, {
                                                      size: "xl",
                                                      mt: 20,
                                                      fw: 600,
                                                      className:
                                                          "inline-flex items-center gap-2 ",
                                                      children: [
                                                          f.jsx(R3, {
                                                              className:
                                                                  "size-5"
                                                          }),
                                                          f.jsxs("div", {
                                                              className:
                                                                  "w-full flex justify-between items-center gap-2",
                                                              children: [
                                                                  f.jsx(ne, {
                                                                      inherit:
                                                                          !0,
                                                                      fw: 400,
                                                                      children:
                                                                          "Bounty"
                                                                  }),
                                                                  " ",
                                                                  d.bounty,
                                                                  " INR"
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  f.jsxs(ne, {
                                                      mt: 6,
                                                      size: "xl",
                                                      fw: 600,
                                                      className:
                                                          "inline-flex items-center gap-2",
                                                      children: [
                                                          f.jsx(N3, {
                                                              className:
                                                                  "size-5"
                                                          }),
                                                          f.jsxs("div", {
                                                              className:
                                                                  "w-full flex justify-between items-center gap-2",
                                                              children: [
                                                                  f.jsx(ne, {
                                                                      inherit:
                                                                          !0,
                                                                      fw: 400,
                                                                      children:
                                                                          "Deadline"
                                                                  }),
                                                                  " ",
                                                                  new Date(
                                                                      d.deadline
                                                                  ).toLocaleDateString()
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  f.jsxs(ne, {
                                                      mt: 6,
                                                      size: "xl",
                                                      fw: 600,
                                                      className:
                                                          "inline-flex items-center gap-2",
                                                      children: [
                                                          f.jsx(b3, {
                                                              className:
                                                                  "size-5"
                                                          }),
                                                          f.jsxs("div", {
                                                              className:
                                                                  "w-full flex justify-between items-center gap-2",
                                                              children: [
                                                                  f.jsx(ne, {
                                                                      inherit:
                                                                          !0,
                                                                      fw: 400,
                                                                      children:
                                                                          "Posted By"
                                                                  }),
                                                                  " ",
                                                                  d.owner.name
                                                              ]
                                                          })
                                                      ]
                                                  })
                                              ]
                                          }),
                                          f.jsx(Ge, {
                                              className:
                                                  "inline-flex items-center gap-2",
                                              fullWidth: !0,
                                              mt: 26,
                                              size: "lg",
                                              component: "a",
                                              href: `/task/${d._id}`,
                                              variant: "light",
                                              children: "View Task"
                                          })
                                      ]
                                  })
                              },
                              d._id
                          )
                      )
            }),
            f.jsx(Yt, {
                total: e.length / l + 1,
                limit: l,
                page: o,
                onChange: c,
                withControls: !0,
                autoContrast: !0,
                size: "xl",
                mt: 24,
                className: "flex justify-center items-center"
            })
        ]
    })
}
function T3(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"
                },
                child: []
            }
        ]
    })(e)
}
function z3(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z"
                },
                child: []
            }
        ]
    })(e)
}
function $3(e) {
    return sn({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                },
                child: []
            },
            {
                tag: "path",
                attr: {
                    d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
                },
                child: []
            }
        ]
    })(e)
}
function O3() {
    const e = ww(),
        [t, n] = E.useState({}),
        [r, o] = E.useState(!0),
        i = Gs({
            initialValues: { name: "", description: "", demoLink: "" },
            validate: {
                name: (w) => (w.length > 3 ? null : "Enter your name"),
                description: (w) =>
                    w.length > 100 && w.length < 1e3
                        ? null
                        : "Description should be between 100 and 1000 characters",
                demoLink: (w) =>
                    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(
                        w
                    )
                        ? null
                        : "Enter a valid URL."
            }
        }),
        [l, s] = E.useState(!1),
        [a, u] = E.useState(""),
        [c, d] = E.useState({}),
        p = async () => {
            try {
                s(!0)
                const w = await he.post(
                    "https://ClassHub-backend.vercel.app//api/applications/create",
                    { ...i.values, applicant: c.data.user._id, task: t._id },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                u("Successfully submitted application."), i.reset()
            } catch (w) {
                console.error("Error submitting application:", w)
            } finally {
                s(!1)
            }
        }
    return (
        E.useEffect(() => {
            async function w() {
                try {
                    o(!0),
                        await he
                            .get(
                                "https://ClassHub-backend.vercel.app//user/profile",
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`
                                    }
                                }
                            )
                            .then((g) => {
                                d(g)
                            })
                            .catch((g) => {
                                if (g.status === 401)
                                    return f.jsx(ne, {
                                        size: "lg",
                                        ta: "center",
                                        children: "You are not logged in."
                                    })
                            })
                } catch {
                } finally {
                    o(!1)
                }
            }
            w()
        }, []),
        E.useEffect(() => {
            ;(async () => {
                try {
                    const g = await he.get(
                        `https://ClassHub-backend.vercel.app//api/tasks/${e.taskID}`
                    )
                    n(g.data.task)
                } catch (g) {
                    console.error("Error fetching task:", g)
                } finally {
                    o(!1)
                }
            })()
        }, [e]),
        f.jsx(rr, {
            size: "md",
            children: r
                ? f.jsx(yd, { size: "xl" })
                : f.jsxs(Xl, {
                      spacing: "md",
                      children: [
                          f.jsx(st, {
                              order: 1,
                              align: "center",
                              mt: 24,
                              mb: 48,
                              fw: 800,
                              children: t.name
                          }),
                          f.jsxs(nr, {
                              justify: "start",
                              align: "center",
                              children: [
                                  f.jsxs(pn, {
                                      leftSection: f.jsx(z3, {}),
                                      color: "teal",
                                      variant: "light",
                                      size: "lg",
                                      children: ["Bounty ", t.bounty, " INR"]
                                  }),
                                  f.jsxs(pn, {
                                      leftSection: f.jsx(T3, {}),
                                      size: "lg",
                                      className: "inline-flex flex-row",
                                      color: "gray",
                                      variant: "light",
                                      children: [
                                          "Deadline ",
                                          new Date(
                                              t.deadline
                                          ).toLocaleDateString()
                                      ]
                                  })
                              ]
                          }),
                          f.jsx(ei, {}),
                          f.jsxs(Xl, {
                              spacing: "lg",
                              children: [
                                  f.jsxs(Wn, {
                                      justify: "start",
                                      direction: "column",
                                      align: "start",
                                      gap: "md",
                                      children: [
                                          f.jsx(st, {
                                              order: 3,
                                              children: "Description"
                                          }),
                                          f.jsx(ne, {
                                              className:
                                                  "whitespace-pre-line text-wrap overflow-auto",
                                              size: "lg",
                                              weight: 500,
                                              children: t.description
                                          })
                                      ]
                                  }),
                                  f.jsxs(Wn, {
                                      justify: "start",
                                      align: "start",
                                      direction: "column",
                                      gap: "md",
                                      children: [
                                          f.jsx(st, {
                                              order: 3,
                                              children: "Posted By"
                                          }),
                                          f.jsxs(Wn, {
                                              align: "center",
                                              gap: "sm",
                                              children: [
                                                  f.jsx(wo, {
                                                      children: t.owner
                                                          ? t.owner.name[0].toUpperCase()
                                                          : ""
                                                  }),
                                                  f.jsx(ne, {
                                                      size: "md",
                                                      children: t.owner
                                                          ? t.owner.name
                                                          : ""
                                                  })
                                              ]
                                          })
                                      ]
                                  })
                              ]
                          }),
                          f.jsx(ei, {}),
                          f.jsxs(Wn, {
                              justify: "start",
                              align: "start",
                              gap: "md",
                              direction: "column",
                              children: [
                                  f.jsx(st, {
                                      order: 3,
                                      children: "Additional Info"
                                  }),
                                  f.jsx($3, {})
                              ]
                          }),
                          c &&
                              t.owner &&
                              c.status === 200 &&
                              c.data.user._id !== t.owner._id &&
                              f.jsxs(f.Fragment, {
                                  children: [
                                      f.jsx(ei, {}),
                                      f.jsx(nr, {
                                          mb: 16,
                                          justify: "start",
                                          align: "center",
                                          children: f.jsx(st, {
                                              order: 3,
                                              children: "Apply For This Task"
                                          })
                                      }),
                                      f.jsxs("form", {
                                          className:
                                              "flex justify-center items-center flex-col gap-4 w-full",
                                          onSubmit: i.onSubmit(p),
                                          children: [
                                              f.jsx(Kt, {
                                                  size: "md",
                                                  label: "Your Name",
                                                  ...i.getInputProps("name"),
                                                  w: "100%"
                                              }),
                                              f.jsx($s, {
                                                  size: "md",
                                                  resize: "vertical",
                                                  label: "Description",
                                                  ...i.getInputProps(
                                                      "description"
                                                  ),
                                                  w: "100%"
                                              }),
                                              f.jsx(Kt, {
                                                  size: "md",
                                                  label: "Demo Link",
                                                  ...i.getInputProps(
                                                      "demoLink"
                                                  ),
                                                  w: "100%"
                                              }),
                                              f.jsx(Ge, {
                                                  mt: 16,
                                                  size: "md",
                                                  fullWidth: !0,
                                                  variant: "light",
                                                  type: "submit",
                                                  disabled: l,
                                                  children: l
                                                      ? "Submitting..."
                                                      : "Submit Application"
                                              })
                                          ]
                                      }),
                                      f.jsx(ne, {
                                          size: "lg",
                                          ta: "center",
                                          children: a
                                      })
                                  ]
                              })
                      ]
                  })
        })
    )
}
const M3 = [
        "#f5ecff",
        "#e5d4fa",
        "#c8a6f3",
        "#aa75ed",
        "#904be7",
        "#7f32e4",
        "#7725e4",
        "#6618ca",
        "#5a14b6",
        "#4e0da0"
    ],
    I3 = {
        primaryColor: "purple",
        defaultRadius: "md",
        colors: { purple: M3 },
        fontSizes: { xs: L(10), sm: L(11), md: L(14), lg: L(16), xl: L(20) },
        lineHeights: {
            xs: "1.4",
            sm: "1.45",
            md: "1.55",
            lg: "1.6",
            xl: "1.65"
        },
        fontFamily: "Figtree, sans-serif"
    },
    D3 = Fw(
        Du(
            f.jsxs(Zt, {
                path: "/",
                children: [
                    f.jsxs(Zt, {
                        path: "/",
                        element: f.jsx(OS, {}),
                        children: [
                            f.jsx(Zt, { index: !0, element: f.jsx(w3, {}) }),
                            f.jsx(Zt, {
                                path: "/profile",
                                element: f.jsx(J5, {})
                            }),
                            f.jsx(Zt, {
                                path: "/create-task",
                                element: f.jsx(u3, {})
                            }),
                            f.jsx(Zt, {
                                path: "/tasks",
                                element: f.jsx(L3, {})
                            }),
                            f.jsx(Zt, {
                                path: "/task/:taskID",
                                element: f.jsx(O3, {})
                            })
                        ]
                    }),
                    f.jsx(Zt, { path: "/login", element: f.jsx(k3, {}) }),
                    f.jsx(Zt, { path: "/register", element: f.jsx(_3, {}) })
                ]
            })
        )
    )
m0(document.getElementById("root")).render(
    f.jsx(E.StrictMode, {
        children: f.jsx(H0, {
            theme: I3,
            withCssVariables: !0,
            withGlobalStyles: !0,
            defaultColorScheme: "auto",
            children: f.jsx(aS, { children: f.jsx(Yw, { router: D3 }) })
        })
    })
)
