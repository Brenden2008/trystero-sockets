var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    i = {}.hasOwnProperty,
    n = (e, t) => () => (e && (t = e(e = 0)), t),
    s = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports),
    o = (t, r) => {
        for (var i in r) e(t, i, {
            get: r[i],
            enumerable: !0
        })
    },
    a = n => ((n, s, o, a) => {
        if (s && "object" == typeof s || "function" == typeof s)
            for (let l of r(s)) !i.call(n, l) && l !== o && e(n, l, {
                get: () => s[l],
                enumerable: !(a = t(s, l)) || a.enumerable
            });
        return n
    })(e({}, "__esModule", {
        value: !0
    }), n),
    l = n((() => {})),
    h = {};

function u(e) {
    throw Error("Node.js process " + e + " is not supported by JSPM core outside of Node.js")
}

function c() {
    !k || !R || (k = !1, R.length ? I = R.concat(I) : C = -1, I.length && f())
}

function f() {
    if (!k) {
        var e = setTimeout(c, 0);
        k = !0;
        for (var t = I.length; t;) {
            for (R = I, I = []; ++C < t;) R && R[C].run();
            C = -1, t = I.length
        }
        R = null, k = !1, clearTimeout(e)
    }
}

function d(e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    I.push(new p(e, t)), 1 === I.length && !k && setTimeout(f, 0)
}

function p(e, t) {
    this.fun = e, this.array = t
}

function g() {}

function b() {
    u("_linkedBinding")
}

function y() {
    u("dlopen")
}

function m() {
    return []
}

function _() {
    return []
}

function w(e, t) {
    if (!e) throw Error(t || "assertion error")
}

function v() {
    return !1
}

function E() {
    return Se.now() / 1e3
}

function S(e) {
    var t = Math.floor(.001 * (Date.now() - Se.now())),
        r = .001 * Se.now(),
        i = Math.floor(r) + t,
        n = Math.floor(r % 1 * 1e9);
    return e && (i -= e[0], (n -= e[1]) < 0 && (i--, n += Te)), [i, n]
}

function A() {
    return Le
}

function T() {
    return []
}
o(h, {
    _debugEnd() {
        return he
    },
    _debugProcess() {
        return le
    },
    _events() {
        return ke
    },
    _eventsCount() {
        return Re
    },
    _exiting() {
        return K
    },
    _fatalExceptions() {
        return se
    },
    _getActiveHandles() {
        return _
    },
    _getActiveRequests() {
        return m
    },
    _kill() {
        return Q
    },
    _linkedBinding() {
        return b
    },
    _maxListeners() {
        return Ie
    },
    _preload_modules() {
        return ve
    },
    _rawDebug() {
        return H
    },
    _startProfilerIdleNotifier() {
        return ue
    },
    _stopProfilerIdleNotifier() {
        return ce
    },
    _tickCallback() {
        return ae
    },
    abort() {
        return ge
    },
    addListener() {
        return Ce
    },
    allowedNodeEnvironmentFlags() {
        return ie
    },
    arch() {
        return P
    },
    argv() {
        return N
    },
    argv0() {
        return we
    },
    assert() {
        return w
    },
    binding() {
        return D
    },
    chdir() {
        return q
    },
    config() {
        return Y
    },
    cpuUsage() {
        return J
    },
    cwd() {
        return W
    },
    debugPort() {
        return _e
    },
    default () {
        return Le
    },
    dlopen() {
        return y
    },
    domain() {
        return z
    },
    emit() {
        return Ne
    },
    emitWarning() {
        return j
    },
    env() {
        return x
    },
    execArgv() {
        return M
    },
    execPath() {
        return me
    },
    exit() {
        return te
    },
    features() {
        return ne
    },
    hasUncaughtExceptionCaptureCallback() {
        return v
    },
    hrtime() {
        return S
    },
    kill() {
        return ee
    },
    listeners() {
        return T
    },
    memoryUsage() {
        return Z
    },
    moduleLoadList() {
        return V
    },
    nextTick() {
        return d
    },
    off() {
        return Pe
    },
    on() {
        return A
    },
    once() {
        return Oe
    },
    openStdin() {
        return re
    },
    pid() {
        return be
    },
    platform() {
        return B
    },
    ppid() {
        return ye
    },
    prependListener() {
        return Me
    },
    prependOnceListener() {
        return Ue
    },
    reallyExit() {
        return G
    },
    release() {
        return $
    },
    removeAllListeners() {
        return xe
    },
    removeListener() {
        return Be
    },
    resourceUsage() {
        return X
    },
    setSourceMapsEnabled() {
        return Ee
    },
    setUncaughtExceptionCaptureCallback() {
        return oe
    },
    stderr() {
        return de
    },
    stdin() {
        return pe
    },
    stdout() {
        return fe
    },
    title() {
        return O
    },
    umask() {
        return F
    },
    uptime() {
        return E
    },
    version() {
        return U
    },
    versions() {
        return L
    }
});
var I, k, R, C, O, P, B, x, N, M, U, L, j, D, F, W, q, $, H, V, z, K, Y, G, Q, J, X, Z, ee, te, re, ie, ne, se, oe, ae, le, he, ue, ce, fe, de, pe, ge, be, ye, me, _e, we, ve, Ee, Se, Ae, Te, Ie, ke, Re, Ce, Oe, Pe, Be, xe, Ne, Me, Ue, Le, je = n((() => {
        l(), Ze(), De(), I = [], k = !1, C = -1, p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, O = "browser", P = "x64", B = "browser", x = {
            PATH: "/usr/bin",
            LANG: navigator.language + ".UTF-8",
            PWD: "/",
            HOME: "/home",
            TMP: "/tmp"
        }, N = ["/usr/bin/node"], M = [], U = "v16.8.0", L = {}, j = (e, t) => {
            console.warn((t ? t + ": " : "") + e)
        }, D = () => {
            u("binding")
        }, F = () => 0, W = () => "/", q = () => {}, $ = {
            name: "node",
            sourceUrl: "",
            headersUrl: "",
            libUrl: ""
        }, H = g, V = [], z = {}, K = !1, Y = {}, G = g, Q = g, X = J = () => ({}), Z = J, ee = g, te = g, re = g, ie = {}, ne = {
            inspector: !1,
            debug: !1,
            uv: !1,
            ipv6: !1,
            tls_alpn: !1,
            tls_sni: !1,
            tls_ocsp: !1,
            tls: !1,
            cached_builtins: !0
        }, se = g, oe = g, ae = g, le = g, he = g, ue = g, ce = g, fe = void 0, de = void 0, pe = void 0, ge = g, be = 2, ye = 1, me = "/bin/usr/node", _e = 9229, we = "node", ve = [], Ee = g, void 0 === (Se = {
            now: typeof performance < "u" ? performance.now.bind(performance) : void 0,
            timing: typeof performance < "u" ? performance.timing : void 0
        }).now && (Ae = Date.now(), Se.timing && Se.timing.navigationStart && (Ae = Se.timing.navigationStart), Se.now = () => Date.now() - Ae), Te = 1e9, S.bigint = e => {
            var t = S(e);
            return typeof BigInt > "u" ? t[0] * Te + t[1] : BigInt(t[0] * Te) + BigInt(t[1])
        }, Le = {
            version: U,
            versions: L,
            arch: P,
            platform: B,
            release: $,
            _rawDebug: H,
            moduleLoadList: V,
            binding: D,
            _linkedBinding: b,
            _events: ke = {},
            _eventsCount: Re = 0,
            _maxListeners: Ie = 10,
            on: A,
            addListener: Ce = A,
            once: Oe = A,
            off: Pe = A,
            removeListener: Be = A,
            removeAllListeners: xe = A,
            emit: Ne = g,
            prependListener: Me = A,
            prependOnceListener: Ue = A,
            listeners: T,
            domain: z,
            _exiting: K,
            config: Y,
            dlopen: y,
            uptime: E,
            _getActiveRequests: m,
            _getActiveHandles: _,
            reallyExit: G,
            _kill: Q,
            cpuUsage: J,
            resourceUsage: X,
            memoryUsage: Z,
            kill: ee,
            exit: te,
            openStdin: re,
            allowedNodeEnvironmentFlags: ie,
            assert: w,
            features: ne,
            _fatalExceptions: se,
            setUncaughtExceptionCaptureCallback: oe,
            hasUncaughtExceptionCaptureCallback: v,
            emitWarning: j,
            nextTick: d,
            _tickCallback: ae,
            _debugProcess: le,
            _debugEnd: he,
            _startProfilerIdleNotifier: ue,
            _stopProfilerIdleNotifier: ce,
            stdout: fe,
            stdin: pe,
            stderr: de,
            abort: ge,
            umask: F,
            chdir: q,
            cwd: W,
            env: x,
            title: O,
            argv: N,
            execArgv: M,
            pid: be,
            ppid: ye,
            execPath: me,
            debugPort: _e,
            hrtime: S,
            argv0: we,
            _preload_modules: ve,
            setSourceMapsEnabled: Ee
        }
    })),
    De = n((() => {
        je()
    })),
    Fe = {};

function We() {
    if (Ke) return ze;
    Ke = !0;
    let e = function() {
            if ($e) return qe;
            $e = !0, qe.byteLength = e => {
                var t = s(e),
                    r = t[0],
                    i = t[1];
                return 3 * (r + i) / 4 - i
            }, qe.toByteArray = e => {
                var i, n, o = s(e),
                    a = o[0],
                    l = o[1],
                    h = new r(((e, t, r) => 3 * (t + r) / 4 - r)(0, a, l)),
                    u = 0,
                    c = l > 0 ? a - 4 : a;
                for (n = 0; n < c; n += 4) i = t[e.charCodeAt(n)] << 18 | t[e.charCodeAt(n + 1)] << 12 | t[e.charCodeAt(n + 2)] << 6 | t[e.charCodeAt(n + 3)], h[u++] = i >> 16 & 255, h[u++] = i >> 8 & 255, h[u++] = 255 & i;
                return 2 === l && (i = t[e.charCodeAt(n)] << 2 | t[e.charCodeAt(n + 1)] >> 4, h[u++] = 255 & i), 1 === l && (i = t[e.charCodeAt(n)] << 10 | t[e.charCodeAt(n + 1)] << 4 | t[e.charCodeAt(n + 2)] >> 2, h[u++] = i >> 8 & 255, h[u++] = 255 & i), h
            }, qe.fromByteArray = t => {
                for (var r, i = t.length, n = i % 3, s = [], o = 16383, l = 0, h = i - n; l < h; l += o) s.push(a(t, l, l + o > h ? h : l + o));
                return 1 === n ? (r = t[i - 1], s.push(e[r >> 2] + e[r << 4 & 63] + "==")) : 2 === n && (r = (t[i - 2] << 8) + t[i - 1], s.push(e[r >> 10] + e[r >> 4 & 63] + e[r << 2 & 63] + "=")), s.join("")
            };
            for (var e = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0; n < 64; ++n) e[n] = i[n], t[i.charCodeAt(n)] = n;

            function s(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
            }

            function o(t) {
                return e[t >> 18 & 63] + e[t >> 12 & 63] + e[t >> 6 & 63] + e[63 & t]
            }

            function a(e, t, r) {
                for (var i, n = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), n.push(o(i));
                return n.join("")
            }
            return t[45] = 62, t[95] = 63, qe
        }(),
        t = (Ve || (Ve = !0, He.read = (e, t, r, i, n) => {
            var s, o, a = 8 * n - i - 1,
                l = (1 << a) - 1,
                h = l >> 1,
                u = -7,
                c = r ? n - 1 : 0,
                f = r ? -1 : 1,
                d = e[t + c];
            for (c += f, s = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; s = 256 * s + e[t + c], c += f, u -= 8);
            for (o = s & (1 << -u) - 1, s >>= -u, u += i; u > 0; o = 256 * o + e[t + c], c += f, u -= 8);
            if (0 === s) s = 1 - h;
            else {
                if (s === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                o += Math.pow(2, i), s -= h
            }
            return (d ? -1 : 1) * o * Math.pow(2, s - i)
        }, He.write = (e, t, r, i, n, s) => {
            var o, a, l, h = 8 * s - n - 1,
                u = (1 << h) - 1,
                c = u >> 1,
                f = 23 === n ? 5.960464477539062e-8 : 0,
                d = i ? 0 : s - 1,
                p = i ? 1 : -1,
                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = u) : (t * (l = Math.pow(2, -(o = Math.floor(Math.log(t) / Math.LN2)))) < 1 && (o--, l *= 2), (t += o + c >= 1 ? f / l : f * Math.pow(2, 1 - c)) * l >= 2 && (o++, l /= 2), o + c >= u ? (a = 0, o = u) : o + c >= 1 ? (a = (t * l - 1) * Math.pow(2, n), o += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, n), o = 0)); n >= 8; e[r + d] = 255 & a, d += p, a /= 256, n -= 8);
            for (o = o << n | a, h += n; h > 0; e[r + d] = 255 & o, d += p, o /= 256, h -= 8);
            e[r + d - p] |= 128 * g
        }), He),
        r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    ze.Buffer = s, ze.SlowBuffer = function(e) {
        return +e != e && (e = 0), s.alloc(+e)
    }, ze.INSPECT_MAX_BYTES = 50;
    let i = 2147483647;

    function n(e) {
        if (e > i) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, s.prototype), t
    }

    function s(e, t, r) {
        if ("number" == typeof e) {
            if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
            return l(e)
        }
        return o(e, t, r)
    }

    function o(e, t, r) {
        if ("string" == typeof e) return function(e, t) {
            if (("string" != typeof t || "" === t) && (t = "utf8"), !s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            let r = 0 | f(e, t),
                i = n(r),
                o = i.write(e, t);
            return o !== r && (i = i.slice(0, o)), i
        }(e, t);
        if (ArrayBuffer.isView(e)) return function(e) {
            if (z(e, Uint8Array)) {
                let t = new Uint8Array(e);
                return u(t.buffer, t.byteOffset, t.byteLength)
            }
            return h(e)
        }(e);
        if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (z(e, ArrayBuffer) || e && z(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (z(e, SharedArrayBuffer) || e && z(e.buffer, SharedArrayBuffer))) return u(e, t, r);
        if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
        let i = e.valueOf && e.valueOf();
        if (null != i && i !== e) return s.from(i, t, r);
        let o = function(e) {
            if (s.isBuffer(e)) {
                let t = 0 | c(e.length),
                    r = n(t);
                return 0 === r.length || e.copy(r, 0, 0, t), r
            }
            if (void 0 !== e.length) return "number" != typeof e.length || K(e.length) ? n(0) : h(e);
            if ("Buffer" === e.type && Array.isArray(e.data)) return h(e.data)
        }(e);
        if (o) return o;
        if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
    }

    function a(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
        if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
    }

    function l(e) {
        return a(e), n(e < 0 ? 0 : 0 | c(e))
    }

    function h(e) {
        let t = e.length < 0 ? 0 : 0 | c(e.length),
            r = n(t);
        for (let i = 0; i < t; i += 1) r[i] = 255 & e[i];
        return r
    }

    function u(e, t, r) {
        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let i;
        return i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(i, s.prototype), i
    }

    function c(e) {
        if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return 0 | e
    }

    function f(e, t) {
        if (s.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || z(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length,
            i = arguments.length > 2 && !0 === arguments[2];
        if (!i && 0 === r) return 0;
        let n = !1;
        for (;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
                return $(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return H(e).length;
            default:
                if (n) return i ? -1 : $(e).length;
                t = ("" + t).toLowerCase(), n = !0
        }
    }

    function d(e, t, r) {
        let i = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8");;) switch (e) {
            case "hex":
                return k(this, t, r);
            case "utf8":
            case "utf-8":
                return S(this, t, r);
            case "ascii":
                return T(this, t, r);
            case "latin1":
            case "binary":
                return I(this, t, r);
            case "base64":
                return E(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return R(this, t, r);
            default:
                if (i) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), i = !0
        }
    }

    function p(e, t, r) {
        let i = e[t];
        e[t] = e[r], e[r] = i
    }

    function g(e, t, r, i, n) {
        if (0 === e.length) return -1;
        if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), K(r = +r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (n) return -1;
            r = e.length - 1
        } else if (r < 0) {
            if (!n) return -1;
            r = 0
        }
        if ("string" == typeof t && (t = s.from(t, i)), s.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, r, i, n);
        if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : b(e, [t], r, i, n);
        throw new TypeError("val must be string, number or Buffer")
    }

    function b(e, t, r, i, n) {
        let s, o = 1,
            a = e.length,
            l = t.length;
        if (void 0 !== i && ("ucs2" === (i = (i + "").toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
            if (e.length < 2 || t.length < 2) return -1;
            o = 2, a /= 2, l /= 2, r /= 2
        }

        function h(e, t) {
            return 1 === o ? e[t] : e.readUInt16BE(t * o)
        }
        if (n) {
            let i = -1;
            for (s = r; s < a; s++)
                if (h(e, s) === h(t, -1 === i ? 0 : s - i)) {
                    if (-1 === i && (i = s), s - i + 1 === l) return i * o
                } else - 1 !== i && (s -= s - i), i = -1
        } else
            for (r + l > a && (r = a - l), s = r; s >= 0; s--) {
                let r = !0;
                for (let i = 0; i < l; i++)
                    if (h(e, s + i) !== h(t, i)) {
                        r = !1;
                        break
                    } if (r) return s
            }
        return -1
    }

    function y(e, t, r, i) {
        r = Number(r) || 0;
        let n = e.length - r;
        i ? (i = Number(i)) > n && (i = n) : i = n;
        let s, o = t.length;
        for (i > o / 2 && (i = o / 2), s = 0; s < i; ++s) {
            let i = parseInt(t.substr(2 * s, 2), 16);
            if (K(i)) return s;
            e[r + s] = i
        }
        return s
    }

    function m(e, t, r, i) {
        return V($(t, e.length - r), e, r, i)
    }

    function _(e, t, r, i) {
        return V(function(e) {
            let t = [];
            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t
        }(t), e, r, i)
    }

    function w(e, t, r, i) {
        return V(H(t), e, r, i)
    }

    function v(e, t, r, i) {
        return V(function(e, t) {
            let r, i, n, s = [];
            for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), i = r >> 8, n = r % 256, s.push(n), s.push(i);
            return s
        }(t, e.length - r), e, r, i)
    }

    function E(t, r, i) {
        return 0 === r && i === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(r, i))
    }

    function S(e, t, r) {
        r = Math.min(e.length, r);
        let i = [],
            n = t;
        for (; n < r;) {
            let t = e[n],
                s = null,
                o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
            if (n + o <= r) {
                let r, i, a, l;
                switch (o) {
                    case 1:
                        t < 128 && (s = t);
                        break;
                    case 2:
                        r = e[n + 1], 128 == (192 & r) && (l = (31 & t) << 6 | 63 & r, l > 127 && (s = l));
                        break;
                    case 3:
                        r = e[n + 1], i = e[n + 2], 128 == (192 & r) && 128 == (192 & i) && (l = (15 & t) << 12 | (63 & r) << 6 | 63 & i, l > 2047 && (l < 55296 || l > 57343) && (s = l));
                        break;
                    case 4:
                        r = e[n + 1], i = e[n + 2], a = e[n + 3], 128 == (192 & r) && 128 == (192 & i) && 128 == (192 & a) && (l = (15 & t) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & a, l > 65535 && l < 1114112 && (s = l))
                }
            }
            null === s ? (s = 65533, o = 1) : s > 65535 && (s -= 65536, i.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), i.push(s), n += o
        }
        return function(e) {
            let t = e.length;
            if (t <= A) return String.fromCharCode.apply(String, e);
            let r = "",
                i = 0;
            for (; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += A));
            return r
        }(i)
    }
    ze.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = function() {
        try {
            let e = new Uint8Array(1),
                t = {
                    foo() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
        } catch {
            return !1
        }
    }(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
        enumerable: !0,
        get() {
            if (s.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(s.prototype, "offset", {
        enumerable: !0,
        get() {
            if (s.isBuffer(this)) return this.byteOffset
        }
    }), s.poolSize = 8192, s.from = (e, t, r) => o(e, t, r), Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = (e, t, r) => function(e, t, r) {
        return a(e), e <= 0 ? n(e) : void 0 !== t ? "string" == typeof r ? n(e).fill(t, r) : n(e).fill(t) : n(e)
    }(e, t, r), s.allocUnsafe = e => l(e), s.allocUnsafeSlow = e => l(e), s.isBuffer = e => null != e && !0 === e._isBuffer && e !== s.prototype, s.compare = (e, t) => {
        if (z(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), z(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        let r = e.length,
            i = t.length;
        for (let n = 0, s = Math.min(r, i); n < s; ++n)
            if (e[n] !== t[n]) {
                r = e[n], i = t[n];
                break
            } return r < i ? -1 : i < r ? 1 : 0
    }, s.isEncoding = e => {
        switch ((e + "").toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, s.concat = (e, t) => {
        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return s.alloc(0);
        let r;
        if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
        let i = s.allocUnsafe(t),
            n = 0;
        for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (z(t, Uint8Array)) n + t.length > i.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(i, n)) : Uint8Array.prototype.set.call(i, t, n);
            else {
                if (!s.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                t.copy(i, n)
            }
            n += t.length
        }
        return i
    }, s.byteLength = f, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2) p(this, t, t + 1);
        return this
    }, s.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
        return this
    }, s.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
        return this
    }, s.prototype.toString = function() {
        let e = this.length;
        return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : d.apply(this, arguments)
    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
        if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === s.compare(this, e)
    }, s.prototype.inspect = function() {
        let e = "",
            t = ze.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
    }, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, r, i, n) {
        if (z(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw new RangeError("out of range index");
        if (i >= n && t >= r) return 0;
        if (i >= n) return -1;
        if (t >= r) return 1;
        if (this === e) return 0;
        let o = (n >>>= 0) - (i >>>= 0),
            a = (r >>>= 0) - (t >>>= 0),
            l = Math.min(o, a),
            h = this.slice(i, n),
            u = e.slice(t, r);
        for (let e = 0; e < l; ++e)
            if (h[e] !== u[e]) {
                o = h[e], a = u[e];
                break
            } return o < a ? -1 : a < o ? 1 : 0
    }, s.prototype.includes = function(e, t, r) {
        return -1 !== this.indexOf(e, t, r)
    }, s.prototype.indexOf = function(e, t, r) {
        return g(this, e, t, r, !0)
    }, s.prototype.lastIndexOf = function(e, t, r) {
        return g(this, e, t, r, !1)
    }, s.prototype.write = function(e, t, r, i) {
        if (void 0 === t) i = "utf8", r = this.length, t = 0;
        else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;
        else {
            if (!isFinite(t)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
        }
        let n = this.length - t;
        if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let s = !1;
        for (;;) switch (i) {
            case "hex":
                return y(this, e, t, r);
            case "utf8":
            case "utf-8":
                return m(this, e, t, r);
            case "ascii":
            case "latin1":
            case "binary":
                return _(this, e, t, r);
            case "base64":
                return w(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return v(this, e, t, r);
            default:
                if (s) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), s = !0
        }
    }, s.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: [].slice.call(this._arr || this, 0)
        }
    };
    let A = 4096;

    function T(e, t, r) {
        let i = "";
        r = Math.min(e.length, r);
        for (let n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
        return i
    }

    function I(e, t, r) {
        let i = "";
        r = Math.min(e.length, r);
        for (let n = t; n < r; ++n) i += String.fromCharCode(e[n]);
        return i
    }

    function k(e, t, r) {
        let i = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
        let n = "";
        for (let i = t; i < r; ++i) n += Y[e[i]];
        return n
    }

    function R(e, t, r) {
        let i = e.slice(t, r),
            n = "";
        for (let e = 0; e < i.length - 1; e += 2) n += String.fromCharCode(i[e] + 256 * i[e + 1]);
        return n
    }

    function C(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
    }

    function O(e, t, r, i, n, o) {
        if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > n || t < o) throw new RangeError('"value" argument is out of bounds');
        if (r + i > e.length) throw new RangeError("Index out of range")
    }

    function P(e, t, r, i, n) {
        D(t, i, n, e, r, 7);
        let s = Number(t & BigInt(4294967295));
        e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s;
        let o = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, r
    }

    function B(e, t, r, i, n) {
        D(t, i, n, e, r, 7);
        let s = Number(t & BigInt(4294967295));
        e[r + 7] = s, s >>= 8, e[r + 6] = s, s >>= 8, e[r + 5] = s, s >>= 8, e[r + 4] = s;
        let o = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = o, o >>= 8, e[r + 2] = o, o >>= 8, e[r + 1] = o, o >>= 8, e[r] = o, r + 8
    }

    function x(e, t, r, i) {
        if (r + i > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range")
    }

    function N(e, r, i, n, s) {
        return r = +r, i >>>= 0, s || x(e, 0, i, 4), t.write(e, r, i, n, 23, 4), i + 4
    }

    function M(e, r, i, n, s) {
        return r = +r, i >>>= 0, s || x(e, 0, i, 8), t.write(e, r, i, n, 52, 8), i + 8
    }
    s.prototype.slice = function(e, t) {
        let r = this.length;
        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
        let i = this.subarray(e, t);
        return Object.setPrototypeOf(i, s.prototype), i
    }, s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || C(e, t, this.length);
        let i = this[e],
            n = 1,
            s = 0;
        for (; ++s < t && (n *= 256);) i += this[e + s] * n;
        return i
    }, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || C(e, t, this.length);
        let i = this[e + --t],
            n = 1;
        for (; t > 0 && (n *= 256);) i += this[e + --t] * n;
        return i
    }, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
        return e >>>= 0, t || C(e, 1, this.length), this[e]
    }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
        return e >>>= 0, t || C(e, 2, this.length), this[e] | this[e + 1] << 8
    }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
        return e >>>= 0, t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
        return e >>>= 0, t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
        return e >>>= 0, t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, s.prototype.readBigUInt64LE = G((function(e) {
        F(e >>>= 0, "offset");
        let t = this[e],
            r = this[e + 7];
        (void 0 === t || void 0 === r) && W(e, this.length - 8);
        let i = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            n = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
        return BigInt(i) + (BigInt(n) << BigInt(32))
    })), s.prototype.readBigUInt64BE = G((function(e) {
        F(e >>>= 0, "offset");
        let t = this[e],
            r = this[e + 7];
        (void 0 === t || void 0 === r) && W(e, this.length - 8);
        let i = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
            n = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
        return (BigInt(i) << BigInt(32)) + BigInt(n)
    })), s.prototype.readIntLE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || C(e, t, this.length);
        let i = this[e],
            n = 1,
            s = 0;
        for (; ++s < t && (n *= 256);) i += this[e + s] * n;
        return n *= 128, i >= n && (i -= Math.pow(2, 8 * t)), i
    }, s.prototype.readIntBE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || C(e, t, this.length);
        let i = t,
            n = 1,
            s = this[e + --i];
        for (; i > 0 && (n *= 256);) s += this[e + --i] * n;
        return n *= 128, s >= n && (s -= Math.pow(2, 8 * t)), s
    }, s.prototype.readInt8 = function(e, t) {
        return e >>>= 0, t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, s.prototype.readInt16LE = function(e, t) {
        e >>>= 0, t || C(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return 32768 & r ? 4294901760 | r : r
    }, s.prototype.readInt16BE = function(e, t) {
        e >>>= 0, t || C(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return 32768 & r ? 4294901760 | r : r
    }, s.prototype.readInt32LE = function(e, t) {
        return e >>>= 0, t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, s.prototype.readInt32BE = function(e, t) {
        return e >>>= 0, t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, s.prototype.readBigInt64LE = G((function(e) {
        F(e >>>= 0, "offset");
        let t = this[e],
            r = this[e + 7];
        (void 0 === t || void 0 === r) && W(e, this.length - 8);
        let i = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
    })), s.prototype.readBigInt64BE = G((function(e) {
        F(e >>>= 0, "offset");
        let t = this[e],
            r = this[e + 7];
        (void 0 === t || void 0 === r) && W(e, this.length - 8);
        let i = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r)
    })), s.prototype.readFloatLE = function(e, r) {
        return e >>>= 0, r || C(e, 4, this.length), t.read(this, e, !0, 23, 4)
    }, s.prototype.readFloatBE = function(e, r) {
        return e >>>= 0, r || C(e, 4, this.length), t.read(this, e, !1, 23, 4)
    }, s.prototype.readDoubleLE = function(e, r) {
        return e >>>= 0, r || C(e, 8, this.length), t.read(this, e, !0, 52, 8)
    }, s.prototype.readDoubleBE = function(e, r) {
        return e >>>= 0, r || C(e, 8, this.length), t.read(this, e, !1, 52, 8)
    }, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, r, i) {
        if (e = +e, t >>>= 0, r >>>= 0, !i) {
            O(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
        }
        let n = 1,
            s = 0;
        for (this[t] = 255 & e; ++s < r && (n *= 256);) this[t + s] = e / n & 255;
        return t + r
    }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, r, i) {
        if (e = +e, t >>>= 0, r >>>= 0, !i) {
            O(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
        }
        let n = r - 1,
            s = 1;
        for (this[t + n] = 255 & e; --n >= 0 && (s *= 256);) this[t + n] = e / s & 255;
        return t + r
    }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
    }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
    }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
    }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
    }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
    }, s.prototype.writeBigUInt64LE = G((function(e, t = 0) {
        return P(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
    })), s.prototype.writeBigUInt64BE = G((function(e, t = 0) {
        return B(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
    })), s.prototype.writeIntLE = function(e, t, r, i) {
        if (e = +e, t >>>= 0, !i) {
            let i = Math.pow(2, 8 * r - 1);
            O(this, e, t, r, i - 1, -i)
        }
        let n = 0,
            s = 1,
            o = 0;
        for (this[t] = 255 & e; ++n < r && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + n - 1] && (o = 1), this[t + n] = (e / s >> 0) - o & 255;
        return t + r
    }, s.prototype.writeIntBE = function(e, t, r, i) {
        if (e = +e, t >>>= 0, !i) {
            let i = Math.pow(2, 8 * r - 1);
            O(this, e, t, r, i - 1, -i)
        }
        let n = r - 1,
            s = 1,
            o = 0;
        for (this[t + n] = 255 & e; --n >= 0 && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + n + 1] && (o = 1), this[t + n] = (e / s >> 0) - o & 255;
        return t + r
    }, s.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
    }, s.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
    }, s.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
    }, s.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
    }, s.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
    }, s.prototype.writeBigInt64LE = G((function(e, t = 0) {
        return P(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    })), s.prototype.writeBigInt64BE = G((function(e, t = 0) {
        return B(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    })), s.prototype.writeFloatLE = function(e, t, r) {
        return N(this, e, t, !0, r)
    }, s.prototype.writeFloatBE = function(e, t, r) {
        return N(this, e, t, !1, r)
    }, s.prototype.writeDoubleLE = function(e, t, r) {
        return M(this, e, t, !0, r)
    }, s.prototype.writeDoubleBE = function(e, t, r) {
        return M(this, e, t, !1, r)
    }, s.prototype.copy = function(e, t, r, i) {
        if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !i && 0 !== i && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r || 0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
        let n = i - r;
        return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, i) : Uint8Array.prototype.set.call(e, this.subarray(r, i), t), n
    }, s.prototype.fill = function(e, t, r, i) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !s.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (1 === e.length) {
                let t = e.charCodeAt(0);
                ("utf8" === i && t < 128 || "latin1" === i) && (e = t)
            }
        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
        if (r <= t) return this;
        let n;
        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
            for (n = t; n < r; ++n) this[n] = e;
        else {
            let o = s.isBuffer(e) ? e : s.from(e, i),
                a = o.length;
            if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
            for (n = 0; n < r - t; ++n) this[n + t] = o[n % a]
        }
        return this
    };
    let U = {};

    function L(e, t, r) {
        U[e] = class extends r {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
            }
            get code() {
                return e
            }
            set code(e) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${e}]: ${this.message}`
            }
        }
    }

    function j(e) {
        let t = "",
            r = e.length,
            i = "-" === e[0] ? 1 : 0;
        for (; r >= i + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
        return `${e.slice(0,r)}${t}`
    }

    function D(e, t, r, i, n, s) {
        if (e > r || e < t) {
            let i, n = "bigint" == typeof t ? "n" : "";
            throw i = s > 3 ? 0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(s+1)}${n}` : `>= -(2${n} ** ${8*(s+1)-1}${n}) and < 2 ** ${8*(s+1)-1}${n}` : `>= ${t}${n} and <= ${r}${n}`, new U.ERR_OUT_OF_RANGE("value", i, e)
        }! function(e, t, r) {
            F(t, "offset"), (void 0 === e[t] || void 0 === e[t + r]) && W(t, e.length - (r + 1))
        }(i, n, s)
    }

    function F(e, t) {
        if ("number" != typeof e) throw new U.ERR_INVALID_ARG_TYPE(t, "number", e)
    }

    function W(e, t, r) {
        throw Math.floor(e) !== e ? (F(e, r), new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new U.ERR_BUFFER_OUT_OF_BOUNDS : new U.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${t}`, e)
    }
    L("ERR_BUFFER_OUT_OF_BOUNDS", (e => e ? e + " is outside of buffer bounds" : "Attempt to access memory outside buffer bounds"), RangeError), L("ERR_INVALID_ARG_TYPE", ((e, t) => `The "${e}" argument must be of type number. Received type ${typeof t}`), TypeError), L("ERR_OUT_OF_RANGE", ((e, t, r) => {
        let i = `The value of "${e}" is out of range.`,
            n = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = j(r + "") : "bigint" == typeof r && (n = r + "", (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (n = j(n)), n += "n"), i += ` It must be ${t}. Received ${n}`, i
    }), RangeError);
    let q = /[^+/0-9A-Za-z-_]/g;

    function $(e, t) {
        t = t || 1 / 0;
        let r, i = e.length,
            n = null,
            s = [];
        for (let o = 0; o < i; ++o) {
            if (r = e.charCodeAt(o), r > 55295 && r < 57344) {
                if (!n) {
                    if (r > 56319) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    }
                    if (o + 1 === i) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    }
                    n = r;
                    continue
                }
                if (r < 56320) {
                    (t -= 3) > -1 && s.push(239, 191, 189), n = r;
                    continue
                }
                r = 65536 + (n - 55296 << 10 | r - 56320)
            } else n && (t -= 3) > -1 && s.push(239, 191, 189);
            if (n = null, r < 128) {
                if ((t -= 1) < 0) break;
                s.push(r)
            } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                s.push(r >> 6 | 192, 63 & r | 128)
            } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
            } else {
                if (!(r < 1114112)) throw Error("Invalid code point");
                if ((t -= 4) < 0) break;
                s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
            }
        }
        return s
    }

    function H(t) {
        return e.toByteArray(function(e) {
            if ((e = (e = e.split("=")[0]).trim().replace(q, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e
        }(t))
    }

    function V(e, t, r, i) {
        let n;
        for (n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
        return n
    }

    function z(e, t) {
        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
    }

    function K(e) {
        return e != e
    }
    let Y = (() => {
        let e = "0123456789abcdef",
            t = Array(256);
        for (let r = 0; r < 16; ++r) {
            let i = 16 * r;
            for (let n = 0; n < 16; ++n) t[i + n] = e[r] + e[n]
        }
        return t
    })();

    function G(e) {
        return typeof BigInt > "u" ? Q : e
    }

    function Q() {
        throw Error("BigInt not supported")
    }
    return ze
}
o(Fe, {
    Buffer() {
        return Ge
    },
    INSPECT_MAX_BYTES() {
        return Qe
    },
    default () {
        return Ye
    },
    kMaxLength() {
        return Je
    }
});
var qe, $e, He, Ve, ze, Ke, Ye, Ge, Qe, Je, Xe = n((() => {
        l(), Ze(), De(), qe = {}, $e = !1, He = {}, Ve = !1, ze = {}, Ke = !1, (Ye = We()).Buffer, Ye.SlowBuffer, Ye.INSPECT_MAX_BYTES, Ye.kMaxLength, Ge = Ye.Buffer, Qe = Ye.INSPECT_MAX_BYTES, Je = Ye.kMaxLength
    })),
    Ze = n((() => {
        Xe()
    })),
    et = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = class {
            constructor(e) {
                this.aliasToTopic = {}, this.max = e
            }
            put(e, t) {
                return !(0 === t || t > this.max) && (this.aliasToTopic[t] = e, this.length = Object.keys(this.aliasToTopic).length, !0)
            }
            getTopicByAlias(e) {
                return this.aliasToTopic[e]
            }
            clear() {
                this.aliasToTopic = {}
            }
        }
    })),
    tt = s(((e, t) => {
        l(), Ze(), De(), t.exports = {
            ArrayIsArray: e => Array.isArray(e),
            ArrayPrototypeIncludes: (e, t) => e.includes(t),
            ArrayPrototypeIndexOf: (e, t) => e.indexOf(t),
            ArrayPrototypeJoin: (e, t) => e.join(t),
            ArrayPrototypeMap: (e, t) => e.map(t),
            ArrayPrototypePop: (e, t) => e.pop(t),
            ArrayPrototypePush: (e, t) => e.push(t),
            ArrayPrototypeSlice: (e, t, r) => e.slice(t, r),
            Error,
            FunctionPrototypeCall: (e, t, ...r) => e.call(t, ...r),
            FunctionPrototypeSymbolHasInstance: (e, t) => Function.prototype[Symbol.hasInstance].call(e, t),
            MathFloor: Math.floor,
            Number,
            NumberIsInteger: Number.isInteger,
            NumberIsNaN: Number.isNaN,
            NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
            NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
            NumberParseInt: Number.parseInt,
            ObjectDefineProperties: (e, t) => Object.defineProperties(e, t),
            ObjectDefineProperty: (e, t, r) => Object.defineProperty(e, t, r),
            ObjectGetOwnPropertyDescriptor: (e, t) => Object.getOwnPropertyDescriptor(e, t),
            ObjectKeys: e => Object.keys(e),
            ObjectSetPrototypeOf: (e, t) => Object.setPrototypeOf(e, t),
            Promise,
            PromisePrototypeCatch: (e, t) => e.catch(t),
            PromisePrototypeThen: (e, t, r) => e.then(t, r),
            PromiseReject: e => Promise.reject(e),
            ReflectApply: Reflect.apply,
            RegExpPrototypeTest: (e, t) => e.test(t),
            SafeSet: Set,
            String,
            StringPrototypeSlice: (e, t, r) => e.slice(t, r),
            StringPrototypeToLowerCase: e => e.toLowerCase(),
            StringPrototypeToUpperCase: e => e.toUpperCase(),
            StringPrototypeTrim: e => e.trim(),
            Symbol,
            SymbolFor: Symbol.for,
            SymbolAsyncIterator: Symbol.asyncIterator,
            SymbolHasInstance: Symbol.hasInstance,
            SymbolIterator: Symbol.iterator,
            TypedArrayPrototypeSet: (e, t, r) => e.set(t, r),
            Uint8Array
        }
    })),
    rt = s(((e, t) => {
        l(), Ze(), De();
        var r = (Xe(), a(Fe)),
            i = Object.getPrototypeOf((async () => {})).constructor,
            n = globalThis.Blob || r.Blob,
            s = typeof n < "u" ? e => e instanceof n : () => !1;
        t.exports = {
            AggregateError: class extends Error {
                constructor(e) {
                    if (!Array.isArray(e)) throw new TypeError("Expected input to be an Array, got " + typeof e);
                    let t = "";
                    for (let r = 0; r < e.length; r++) t += `    ${e[r].stack}\n`;
                    super(t), this.name = "AggregateError", this.errors = e
                }
            },
            kEmptyObject: Object.freeze({}),
            once(e) {
                let t = !1;
                return function(...r) {
                    t || (t = !0, e.apply(this, r))
                }
            },
            createDeferredPromise() {
                let e, t;
                return {
                    promise: new Promise(((r, i) => {
                        e = r, t = i
                    })),
                    resolve: e,
                    reject: t
                }
            },
            promisify: e => new Promise(((t, r) => {
                e(((e, ...i) => e ? r(e) : t(...i)))
            })),
            debuglog: () => () => {},
            format: (e, ...t) => e.replace(/%([sdifj])/g, ((...[e, r]) => {
                let i = t.shift();
                return "f" === r ? i.toFixed(6) : "j" === r ? JSON.stringify(i) : "s" === r && "object" == typeof i ? ((i.constructor !== Object ? i.constructor.name : "") + " {}").trim() : i.toString()
            })),
            inspect(e) {
                switch (typeof e) {
                    case "string":
                        if (e.includes("'")) {
                            if (!e.includes('"')) return `"${e}"`;
                            if (!e.includes("`") && !e.includes("${")) return `\`${e}\``
                        }
                        return `'${e}'`;
                    case "number":
                        return isNaN(e) ? "NaN" : Object.is(e, -0) ? e + "" : e;
                    case "bigint":
                        return e + "" + "n";
                    case "boolean":
                    case "undefined":
                        return e + "";
                    case "object":
                        return "{}"
                }
            },
            types: {
                isAsyncFunction: e => e instanceof i,
                isArrayBufferView: e => ArrayBuffer.isView(e)
            },
            isBlob: s
        }, t.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom")
    })),
    it = s(((e, t) => {
        l(), Ze(), De();
        var {
            AbortController: r,
            AbortSignal: i
        } = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
        t.exports = r, t.exports.AbortSignal = i, t.exports.default = r
    })),
    nt = s(((e, t) => {
        l(), Ze(), De();
        var {
            format: r,
            inspect: i,
            AggregateError: n
        } = rt(), s = globalThis.AggregateError || n, o = Symbol(), a = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], h = /^([A-Z][a-z0-9]*)+$/, u = {};

        function c(e, t) {
            if (!e) throw new u.ERR_INTERNAL_ASSERTION(t)
        }

        function f(e) {
            let t = "",
                r = e.length,
                i = "-" === e[0] ? 1 : 0;
            for (; r >= i + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
            return `${e.slice(0,r)}${t}`
        }

        function d(e, t, i) {
            i || (i = Error);
            class n extends i {
                constructor(...i) {
                    super(function(e, t, i) {
                        if ("function" == typeof t) return c(t.length <= i.length, `Code: ${e}; The provided arguments length (${i.length}) does not match the required ones (${t.length}).`), t(...i);
                        let n = (t.match(/%[dfijoOs]/g) || []).length;
                        return c(n === i.length, `Code: ${e}; The provided arguments length (${i.length}) does not match the required ones (${n}).`), 0 === i.length ? t : r(t, ...i)
                    }(e, t, i))
                }
                toString() {
                    return `${this.name} [${e}]: ${this.message}`
                }
            }
            Object.defineProperties(n.prototype, {
                name: {
                    value: i.name,
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                },
                toString: {
                    value() {
                        return `${this.name} [${e}]: ${this.message}`
                    },
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                }
            }), n.prototype.code = e, n.prototype[o] = !0, u[e] = n
        }

        function p(e) {
            let t = "__node_internal_" + e.name;
            return Object.defineProperty(e, "name", {
                value: t
            }), e
        }
        d("ERR_ASSERTION", "%s", Error), d("ERR_INVALID_ARG_TYPE", ((e, t, r) => {
            c("string" == typeof e, "'name' must be a string"), Array.isArray(t) || (t = [t]);
            let n = "The ";
            e.endsWith(" argument") ? n += e + " " : n += `"${e}" ${e.includes(".")?"property":"argument"} `, n += "must be ";
            let s = [],
                o = [],
                l = [];
            for (let e of t) c("string" == typeof e, "All expected entries have to be of type string"), a.includes(e) ? s.push(e.toLowerCase()) : h.test(e) ? o.push(e) : (c("object" !== e, 'The value "object" should be written as "Object"'), l.push(e));
            if (o.length > 0) {
                let e = s.indexOf("object"); - 1 !== e && (s.splice(s, e, 1), o.push("Object"))
            }
            if (s.length > 0) {
                switch (s.length) {
                    case 1:
                        n += "of type " + s[0];
                        break;
                    case 2:
                        n += `one of type ${s[0]} or ${s[1]}`;
                        break;
                    default: {
                        let e = s.pop();
                        n += `one of type ${s.join(", ")}, or ${e}`
                    }
                }(o.length > 0 || l.length > 0) && (n += " or ")
            }
            if (o.length > 0) {
                switch (o.length) {
                    case 1:
                        n += "an instance of " + o[0];
                        break;
                    case 2:
                        n += `an instance of ${o[0]} or ${o[1]}`;
                        break;
                    default: {
                        let e = o.pop();
                        n += `an instance of ${o.join(", ")}, or ${e}`
                    }
                }
                l.length > 0 && (n += " or ")
            }
            switch (l.length) {
                case 0:
                    break;
                case 1:
                    l[0].toLowerCase() !== l[0] && (n += "an "), n += "" + l[0];
                    break;
                case 2:
                    n += `one of ${l[0]} or ${l[1]}`;
                    break;
                default: {
                    let e = l.pop();
                    n += `one of ${l.join(", ")}, or ${e}`
                }
            }
            if (null == r) n += ". Received " + r;
            else if ("function" == typeof r && r.name) n += ". Received function " + r.name;
            else if ("object" == typeof r) {
                var u;
                if (null !== (u = r.constructor) && void 0 !== u && u.name) n += ". Received an instance of " + r.constructor.name;
                else {
                    n += ". Received " + i(r, {
                        depth: -1
                    })
                }
            } else {
                let e = i(r, {
                    colors: !1
                });
                e.length > 25 && (e = e.slice(0, 25) + "..."), n += `. Received type ${typeof r} (${e})`
            }
            return n
        }), TypeError), d("ERR_INVALID_ARG_VALUE", ((e, t, r = "is invalid") => {
            let n = i(t);
            return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".")?"property":"argument"} '${e}' ${r}. Received ${n}`
        }), TypeError), d("ERR_INVALID_RETURN_VALUE", ((e, t, r) => {
            var i;
            return `Expected ${e} to be returned from the "${t}" function but got ${null!=r&&null!==(i=r.constructor)&&void 0!==i&&i.name?"instance of "+r.constructor.name:"type "+typeof r}.`
        }), TypeError), d("ERR_MISSING_ARGS", ((...e) => {
            c(e.length > 0, "At least one arg needs to be specified");
            let t, r = e.length;
            switch (e = (Array.isArray(e) ? e : [e]).map((e => `"${e}"`)).join(" or "), r) {
                case 1:
                    t += `The ${e[0]} argument`;
                    break;
                case 2:
                    t += `The ${e[0]} and ${e[1]} arguments`;
                    break;
                default: {
                    let r = e.pop();
                    t += `The ${e.join(", ")}, and ${r} arguments`
                }
            }
            return t + " must be specified"
        }), TypeError), d("ERR_OUT_OF_RANGE", ((e, t, r) => {
            let n;
            return c(t, 'Missing "range" argument'), Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = f(r + "") : "bigint" == typeof r ? (n = r + "", (r > 2n ** 32n || r < -(2n ** 32n)) && (n = f(n)), n += "n") : n = i(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`
        }), RangeError), d("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), d("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), d("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), d("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), d("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), d("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), d("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), d("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), d("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), d("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), d("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), t.exports = {
            AbortError: class extends Error {
                constructor(e = "The operation was aborted", t) {
                    if (void 0 !== t && "object" != typeof t) throw new u.ERR_INVALID_ARG_TYPE("options", "Object", t);
                    super(e, t), this.code = "ABORT_ERR", this.name = "AbortError"
                }
            },
            aggregateTwoErrors: p((function(e, t) {
                if (e && t && e !== t) {
                    if (Array.isArray(t.errors)) return t.errors.push(e), t;
                    let r = new s([t, e], t.message);
                    return r.code = t.code, r
                }
                return e || t
            })),
            hideStackFrames: p,
            codes: u
        }
    })),
    st = s(((e, t) => {
        l(), Ze(), De();
        var {
            ArrayIsArray: r,
            ArrayPrototypeIncludes: i,
            ArrayPrototypeJoin: n,
            ArrayPrototypeMap: s,
            NumberIsInteger: o,
            NumberIsNaN: a,
            NumberMAX_SAFE_INTEGER: h,
            NumberMIN_SAFE_INTEGER: u,
            NumberParseInt: c,
            ObjectPrototypeHasOwnProperty: f,
            RegExpPrototypeExec: d,
            String: p,
            StringPrototypeToUpperCase: g,
            StringPrototypeTrim: b
        } = tt(), {
            hideStackFrames: y,
            codes: {
                ERR_SOCKET_BAD_PORT: m,
                ERR_INVALID_ARG_TYPE: _,
                ERR_INVALID_ARG_VALUE: w,
                ERR_OUT_OF_RANGE: v,
                ERR_UNKNOWN_SIGNAL: E
            }
        } = nt(), {
            normalizeEncoding: S
        } = rt(), {
            isAsyncFunction: A,
            isArrayBufferView: T
        } = rt().types, I = {};
        var k = /^[0-7]+$/;
        var R = y(((e, t, r = u, i = h) => {
                if ("number" != typeof e) throw new _(t, "number", e);
                if (!o(e)) throw new v(t, "an integer", e);
                if (e < r || e > i) throw new v(t, `>= ${r} && <= ${i}`, e)
            })),
            C = y(((e, t, r = -2147483648, i = 2147483647) => {
                if ("number" != typeof e) throw new _(t, "number", e);
                if (!o(e)) throw new v(t, "an integer", e);
                if (e < r || e > i) throw new v(t, `>= ${r} && <= ${i}`, e)
            })),
            O = y(((e, t, r = !1) => {
                if ("number" != typeof e) throw new _(t, "number", e);
                if (!o(e)) throw new v(t, "an integer", e);
                let i = r ? 1 : 0,
                    n = 4294967295;
                if (e < i || e > n) throw new v(t, `>= ${i} && <= ${n}`, e)
            }));

        function P(e, t) {
            if ("string" != typeof e) throw new _(t, "string", e)
        }
        var B = y(((e, t, r) => {
            if (!i(r, e)) {
                let i = "must be one of: " + n(s(r, (e => "string" == typeof e ? `'${e}'` : p(e))), ", ");
                throw new w(t, e, i)
            }
        }));

        function x(e, t) {
            if ("boolean" != typeof e) throw new _(t, "boolean", e)
        }

        function N(e, t, r) {
            return null != e && f(e, t) ? e[t] : r
        }
        var M = y(((e, t, i = null) => {
                let n = N(i, "allowArray", !1),
                    s = N(i, "allowFunction", !1);
                if (!N(i, "nullable", !1) && null === e || !n && r(e) || "object" != typeof e && (!s || "function" != typeof e)) throw new _(t, "Object", e)
            })),
            U = y(((e, t) => {
                if (null != e && "object" != typeof e && "function" != typeof e) throw new _(t, "a dictionary", e)
            })),
            L = y(((e, t, i = 0) => {
                if (!r(e)) throw new _(t, "Array", e);
                if (e.length < i) {
                    throw new w(t, e, "must be longer than " + i)
                }
            }));
        var j = y(((e, t = "buffer") => {
            if (!T(e)) throw new _(t, ["Buffer", "TypedArray", "DataView"], e)
        }));
        var D = y(((e, t) => {
                if (void 0 !== e && (null === e || "object" != typeof e || !("aborted" in e))) throw new _(t, "AbortSignal", e)
            })),
            F = y(((e, t) => {
                if ("function" != typeof e) throw new _(t, "Function", e)
            })),
            W = y(((e, t) => {
                if ("function" != typeof e || A(e)) throw new _(t, "Function", e)
            })),
            q = y(((e, t) => {
                if (void 0 !== e) throw new _(t, "undefined", e)
            }));
        var $ = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;

        function H(e, t) {
            if (typeof e > "u" || !d($, e)) throw new w(t, e, 'must be an array or string of format "</styles.css>; rel=preload; as=style"')
        }
        t.exports = {
            isInt32(e) {
                return e === (0 | e)
            },
            isUint32(e) {
                return e === e >>> 0
            },
            parseFileMode(e, t, r) {
                if (typeof e > "u" && (e = r), "string" == typeof e) {
                    if (null === d(k, e)) throw new w(t, e, "must be a 32-bit unsigned integer or an octal string");
                    e = c(e, 8)
                }
                return O(e, t), e
            },
            validateArray: L,
            validateStringArray(e, t) {
                L(e, t);
                for (let r = 0; r < e.length; r++) P(e[r], `${t}[${r}]`)
            },
            validateBooleanArray(e, t) {
                L(e, t);
                for (let r = 0; r < e.length; r++) x(e[r], `${t}[${r}]`)
            },
            validateBoolean: x,
            validateBuffer: j,
            validateDictionary: U,
            validateEncoding(e, t) {
                let r = S(t),
                    i = e.length;
                if ("hex" === r && i % 2 != 0) throw new w("encoding", t, "is invalid for data of length " + i)
            },
            validateFunction: F,
            validateInt32: C,
            validateInteger: R,
            validateNumber(e, t, r, i) {
                if ("number" != typeof e) throw new _(t, "number", e);
                if (null != r && e < r || null != i && e > i || (null != r || null != i) && a(e)) throw new v(t, `${null!=r?">= "+r:""}${null!=r&&null!=i?" && ":""}${null!=i?"<= "+i:""}`, e)
            },
            validateObject: M,
            validateOneOf: B,
            validatePlainFunction: W,
            validatePort(e, t = "Port", r = !0) {
                if ("number" != typeof e && "string" != typeof e || "string" == typeof e && 0 === b(e).length || +e != +e >>> 0 || e > 65535 || 0 === e && !r) throw new m(t, e, r);
                return 0 | e
            },
            validateSignalName(e, t = "signal") {
                if (P(e, t), void 0 === I[e]) throw void 0 !== I[g(e)] ? new E(e + " (signals must use all capital letters)") : new E(e)
            },
            validateString: P,
            validateUint32: O,
            validateUndefined: q,
            validateUnion(e, t, r) {
                if (!i(r, e)) throw new _(t, `('${n(r,"|")}')`, e)
            },
            validateAbortSignal: D,
            validateLinkHeaderValue(e) {
                if ("string" == typeof e) return H(e, "hints"), e;
                if (r(e)) {
                    let t = e.length,
                        r = "";
                    if (0 === t) return r;
                    for (let i = 0; i < t; i++) {
                        let n = e[i];
                        H(n, "hints"), r += n, i !== t - 1 && (r += ", ")
                    }
                    return r
                }
                throw new w("hints", e, 'must be an array or string of format "</styles.css>; rel=preload; as=style"')
            }
        }
    })),
    ot = s(((e, t) => {
        l(), Ze(), De();
        var r, i, n = t.exports = {};

        function s() {
            throw Error("setTimeout has not been defined")
        }

        function o() {
            throw Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch {
                try {
                    return r.call(null, e, 0)
                } catch {
                    return r.call(this, e, 0)
                }
            }
        }(() => {
            try {
                r = "function" == typeof setTimeout ? setTimeout : s
            } catch {
                r = s
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : o
            } catch {
                i = o
            }
        })();
        var h, u = [],
            c = !1,
            f = -1;

        function d() {
            !c || !h || (c = !1, h.length ? u = h.concat(u) : f = -1, u.length && p())
        }

        function p() {
            if (!c) {
                var e = a(d);
                c = !0;
                for (var t = u.length; t;) {
                    for (h = u, u = []; ++f < t;) h && h[f].run();
                    f = -1, t = u.length
                }
                h = null, c = !1,
                    function(e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            return i(e)
                        } catch {
                            try {
                                return i.call(null, e)
                            } catch {
                                return i.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function g(e, t) {
            this.fun = e, this.array = t
        }

        function b() {}
        n.nextTick = function(e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            u.push(new g(e, t)), 1 === u.length && !c && a(p)
        }, g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = b, n.addListener = b, n.once = b, n.off = b, n.removeListener = b, n.removeAllListeners = b, n.emit = b, n.prependListener = b, n.prependOnceListener = b, n.listeners = () => [], n.binding = () => {
            throw Error("process.binding is not supported")
        }, n.cwd = () => "/", n.chdir = () => {
            throw Error("process.chdir is not supported")
        }, n.umask = () => 0
    })),
    at = s(((e, t) => {
        l(), Ze(), De();
        var {
            Symbol: r,
            SymbolAsyncIterator: i,
            SymbolIterator: n,
            SymbolFor: s
        } = tt(), o = r("kDestroyed"), a = r("kIsErrored"), h = r("kIsReadable"), u = r("kIsDisturbed"), c = s("nodejs.webstream.isClosedPromise"), f = s("nodejs.webstream.controllerErrorFunction");

        function d(e, t = !1) {
            var r;
            return !(!e || "function" != typeof e.pipe || "function" != typeof e.on || t && ("function" != typeof e.pause || "function" != typeof e.resume) || e._writableState && !1 === (null === (r = e._readableState) || void 0 === r ? void 0 : r.readable) || e._writableState && !e._readableState)
        }

        function p(e) {
            var t;
            return !(!e || "function" != typeof e.write || "function" != typeof e.on || e._readableState && !1 === (null === (t = e._writableState) || void 0 === t ? void 0 : t.writable))
        }

        function g(e) {
            return e && (e._readableState || e._writableState || "function" == typeof e.write && "function" == typeof e.on || "function" == typeof e.pipe && "function" == typeof e.on)
        }

        function b(e) {
            return !(!e || g(e) || "function" != typeof e.pipeThrough || "function" != typeof e.getReader || "function" != typeof e.cancel)
        }

        function y(e) {
            return !(!e || g(e) || "function" != typeof e.getWriter || "function" != typeof e.abort)
        }

        function m(e) {
            return !(!e || g(e) || "object" != typeof e.readable || "object" != typeof e.writable)
        }

        function _(e) {
            if (!g(e)) return null;
            let t = e._writableState,
                r = e._readableState,
                i = t || r;
            return !!(e.destroyed || e[o] || null != i && i.destroyed)
        }

        function w(e) {
            if (!p(e)) return null;
            if (!0 === e.writableEnded) return !0;
            let t = e._writableState;
            return (null == t || !t.errored) && ("boolean" != typeof t?.ended ? null : t.ended)
        }

        function v(e, t) {
            if (!d(e)) return null;
            let r = e._readableState;
            return (null == r || !r.errored) && ("boolean" != typeof r?.endEmitted ? null : !!(r.endEmitted || !1 === t && !0 === r.ended && 0 === r.length))
        }

        function E(e) {
            return e && null != e[h] ? e[h] : "boolean" != typeof e?.readable ? null : !_(e) && (d(e) && e.readable && !v(e))
        }

        function S(e) {
            return "boolean" != typeof e?.writable ? null : !_(e) && (p(e) && e.writable && !w(e))
        }

        function A(e) {
            return "boolean" == typeof e._closed && "boolean" == typeof e._defaultKeepAlive && "boolean" == typeof e._removedConnection && "boolean" == typeof e._removedContLen
        }

        function T(e) {
            return "boolean" == typeof e._sent100 && A(e)
        }
        t.exports = {
            kDestroyed: o,
            isDisturbed(e) {
                var t;
                return !(!e || !(null !== (t = e[u]) && void 0 !== t ? t : e.readableDidRead || e.readableAborted))
            },
            kIsDisturbed: u,
            isErrored(e) {
                var t, r, i, n, s, o, l, h, u, c;
                return !(!e || !(null !== (t = null !== (r = null !== (i = null !== (n = null !== (s = null !== (o = e[a]) && void 0 !== o ? o : e.readableErrored) && void 0 !== s ? s : e.writableErrored) && void 0 !== n ? n : null === (l = e._readableState) || void 0 === l ? void 0 : l.errorEmitted) && void 0 !== i ? i : null === (h = e._writableState) || void 0 === h ? void 0 : h.errorEmitted) && void 0 !== r ? r : null === (u = e._readableState) || void 0 === u ? void 0 : u.errored) && void 0 !== t ? t : null !== (c = e._writableState) && void 0 !== c && c.errored))
            },
            kIsErrored: a,
            isReadable: E,
            kIsReadable: h,
            kIsClosedPromise: c,
            kControllerErrorFunction: f,
            isClosed(e) {
                if (!g(e)) return null;
                if ("boolean" == typeof e.closed) return e.closed;
                let t = e._writableState,
                    r = e._readableState;
                return "boolean" == typeof t?.closed || "boolean" == typeof r?.closed ? t?.closed || r?.closed : "boolean" == typeof e._closed && A(e) ? e._closed : null
            },
            isDestroyed: _,
            isDuplexNodeStream(e) {
                return !(!e || "function" != typeof e.pipe || !e._readableState || "function" != typeof e.on || "function" != typeof e.write)
            },
            isFinished(e, t) {
                return g(e) ? !!_(e) || !(!1 !== t?.readable && E(e) || !1 !== t?.writable && S(e)) : null
            },
            isIterable(e, t) {
                return null != e && (!0 === t ? "function" == typeof e[i] : !1 === t ? "function" == typeof e[n] : "function" == typeof e[i] || "function" == typeof e[n])
            },
            isReadableNodeStream: d,
            isReadableStream: b,
            isReadableEnded(e) {
                if (!d(e)) return null;
                if (!0 === e.readableEnded) return !0;
                let t = e._readableState;
                return !(!t || t.errored) && ("boolean" != typeof t?.ended ? null : t.ended)
            },
            isReadableFinished: v,
            isReadableErrored(e) {
                var t, r;
                return g(e) ? e.readableErrored ? e.readableErrored : null !== (t = null === (r = e._readableState) || void 0 === r ? void 0 : r.errored) && void 0 !== t ? t : null : null
            },
            isNodeStream: g,
            isWebStream(e) {
                return b(e) || y(e) || m(e)
            },
            isWritable: S,
            isWritableNodeStream: p,
            isWritableStream: y,
            isWritableEnded: w,
            isWritableFinished(e, t) {
                if (!p(e)) return null;
                if (!0 === e.writableFinished) return !0;
                let r = e._writableState;
                return (null == r || !r.errored) && ("boolean" != typeof r?.finished ? null : !!(r.finished || !1 === t && !0 === r.ended && 0 === r.length))
            },
            isWritableErrored(e) {
                var t, r;
                return g(e) ? e.writableErrored ? e.writableErrored : null !== (t = null === (r = e._writableState) || void 0 === r ? void 0 : r.errored) && void 0 !== t ? t : null : null
            },
            isServerRequest(e) {
                var t;
                return "boolean" == typeof e._consuming && "boolean" == typeof e._dumped && void 0 === (null === (t = e.req) || void 0 === t ? void 0 : t.upgradeOrConnect)
            },
            isServerResponse: T,
            willEmitClose(e) {
                if (!g(e)) return null;
                let t = e._writableState,
                    r = e._readableState,
                    i = t || r;
                return !i && T(e) || !!(i && i.autoDestroy && i.emitClose && !1 === i.closed)
            },
            isTransformStream: m
        }
    })),
    lt = s(((e, t) => {
        l(), Ze(), De();
        var r = ot(),
            {
                AbortError: i,
                codes: n
            } = nt(),
            {
                ERR_INVALID_ARG_TYPE: s,
                ERR_STREAM_PREMATURE_CLOSE: o
            } = n,
            {
                kEmptyObject: a,
                once: h
            } = rt(),
            {
                validateAbortSignal: u,
                validateFunction: c,
                validateObject: f,
                validateBoolean: d
            } = st(),
            {
                Promise: p,
                PromisePrototypeThen: g
            } = tt(),
            {
                isClosed: b,
                isReadable: y,
                isReadableNodeStream: m,
                isReadableStream: _,
                isReadableFinished: w,
                isReadableErrored: v,
                isWritable: E,
                isWritableNodeStream: S,
                isWritableStream: A,
                isWritableFinished: T,
                isWritableErrored: I,
                isNodeStream: k,
                willEmitClose: R,
                kIsClosedPromise: C
            } = at();
        var O = () => {};

        function P(e, t, n) {
            var l, d;
            if (2 === arguments.length ? (n = t, t = a) : null == t ? t = a : f(t, "options"), c(n, "callback"), u(t.signal, "options.signal"), n = h(n), _(e) || A(e)) return function(e, t, n) {
                let s = !1,
                    o = O;
                if (t.signal)
                    if (o = () => {
                            s = !0, n.call(e, new i(void 0, {
                                cause: t.signal.reason
                            }))
                        }, t.signal.aborted) r.nextTick(o);
                    else {
                        let r = n;
                        n = h(((...i) => {
                            t.signal.removeEventListener("abort", o), r.apply(e, i)
                        })), t.signal.addEventListener("abort", o)
                    } let a = (...t) => {
                    s || r.nextTick((() => n.apply(e, t)))
                };
                return g(e[C].promise, a, a), O
            }(e, t, n);
            if (!k(e)) throw new s("stream", ["ReadableStream", "WritableStream", "Stream"], e);
            let p = null !== (l = t.readable) && void 0 !== l ? l : m(e),
                P = null !== (d = t.writable) && void 0 !== d ? d : S(e),
                B = e._writableState,
                x = e._readableState,
                N = () => {
                    e.writable || L()
                },
                M = R(e) && m(e) === p && S(e) === P,
                U = T(e, !1),
                L = () => {
                    U = !0, e.destroyed && (M = !1), (!M || e.readable && !p) && (!p || j) && n.call(e)
                },
                j = w(e, !1),
                D = () => {
                    j = !0, e.destroyed && (M = !1), (!M || e.writable && !P) && (!P || U) && n.call(e)
                },
                F = t => {
                    n.call(e, t)
                },
                W = b(e),
                q = () => {
                    W = !0;
                    let t = I(e) || v(e);
                    return t && "boolean" != typeof t ? n.call(e, t) : p && !j && m(e, !0) && !w(e, !1) ? n.call(e, new o) : !P || U || T(e, !1) ? void n.call(e) : n.call(e, new o)
                },
                $ = () => {
                    W = !0;
                    let t = I(e) || v(e);
                    if (t && "boolean" != typeof t) return n.call(e, t);
                    n.call(e)
                },
                H = () => {
                    e.req.on("finish", L)
                };
            ! function(e) {
                return e.setHeader && "function" == typeof e.abort
            }(e) ? P && !B && (e.on("end", N), e.on("close", N)): (e.on("complete", L), M || e.on("abort", q), e.req ? H() : e.on("request", H)), !M && "boolean" == typeof e.aborted && e.on("aborted", q), e.on("end", D), e.on("finish", L), !1 !== t.error && e.on("error", F), e.on("close", q), W ? r.nextTick(q) : null != B && B.errorEmitted || null != x && x.errorEmitted ? M || r.nextTick($) : (!p && (!M || y(e)) && (U || !1 === E(e)) || !P && (!M || E(e)) && (j || !1 === y(e)) || x && e.req && e.aborted) && r.nextTick($);
            let V = () => {
                n = O, e.removeListener("aborted", q), e.removeListener("complete", L), e.removeListener("abort", q), e.removeListener("request", H), e.req && e.req.removeListener("finish", L), e.removeListener("end", N), e.removeListener("close", N), e.removeListener("finish", L), e.removeListener("end", D), e.removeListener("error", F), e.removeListener("close", q)
            };
            if (t.signal && !W) {
                let s = () => {
                    let r = n;
                    V(), r.call(e, new i(void 0, {
                        cause: t.signal.reason
                    }))
                };
                if (t.signal.aborted) r.nextTick(s);
                else {
                    let r = n;
                    n = h(((...i) => {
                        t.signal.removeEventListener("abort", s), r.apply(e, i)
                    })), t.signal.addEventListener("abort", s)
                }
            }
            return V
        }
        t.exports = P, t.exports.finished = function(e, t) {
            var r;
            let i = !1;
            return null === t && (t = a), null !== (r = t) && void 0 !== r && r.cleanup && (d(t.cleanup, "cleanup"), i = t.cleanup), new p(((r, n) => {
                let s = P(e, t, (e => {
                    i && s(), e ? n(e) : r()
                }))
            }))
        }
    })),
    ht = s(((e, t) => {
        l(), Ze(), De();
        var r = ot(),
            {
                aggregateTwoErrors: i,
                codes: {
                    ERR_MULTIPLE_CALLBACK: n
                },
                AbortError: s
            } = nt(),
            {
                Symbol: o
            } = tt(),
            {
                kDestroyed: a,
                isDestroyed: h,
                isFinished: u,
                isServerRequest: c
            } = at(),
            f = o("kDestroy"),
            d = o("kConstruct");

        function p(e, t, r) {
            e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e))
        }

        function g(e, t, i) {
            let n = !1;

            function s(t) {
                if (n) return;
                n = !0;
                let s = e._readableState,
                    o = e._writableState;
                p(t, o, s), o && (o.closed = !0), s && (s.closed = !0), "function" == typeof i && i(t), t ? r.nextTick(b, e, t) : r.nextTick(y, e)
            }
            try {
                e._destroy(t || null, s)
            } catch (e) {
                s(e)
            }
        }

        function b(e, t) {
            m(e, t), y(e)
        }

        function y(e) {
            let t = e._readableState,
                r = e._writableState;
            r && (r.closeEmitted = !0), t && (t.closeEmitted = !0), (null != r && r.emitClose || null != t && t.emitClose) && e.emit("close")
        }

        function m(e, t) {
            let r = e._readableState,
                i = e._writableState;
            null != i && i.errorEmitted || null != r && r.errorEmitted || (i && (i.errorEmitted = !0), r && (r.errorEmitted = !0), e.emit("error", t))
        }

        function _(e, t, i) {
            let n = e._readableState,
                s = e._writableState;
            if (null != s && s.destroyed || null != n && n.destroyed) return this;
            null != n && n.autoDestroy || null != s && s.autoDestroy ? e.destroy(t) : t && (t.stack, s && !s.errored && (s.errored = t), n && !n.errored && (n.errored = t), i ? r.nextTick(m, e, t) : m(e, t))
        }

        function w(e) {
            let t = !1;

            function i(i) {
                if (t) return void _(e, i ?? new n);
                t = !0;
                let s = e._readableState,
                    o = e._writableState,
                    a = o || s;
                s && (s.constructed = !0), o && (o.constructed = !0), a.destroyed ? e.emit(f, i) : i ? _(e, i, !0) : r.nextTick(v, e)
            }
            try {
                e._construct((e => {
                    r.nextTick(i, e)
                }))
            } catch (e) {
                r.nextTick(i, e)
            }
        }

        function v(e) {
            e.emit(d)
        }

        function E(e) {
            return e?.setHeader && "function" == typeof e.abort
        }

        function S(e) {
            e.emit("close")
        }

        function A(e, t) {
            e.emit("error", t), r.nextTick(S, e)
        }
        t.exports = {
            construct(e, t) {
                if ("function" != typeof e._construct) return;
                let i = e._readableState,
                    n = e._writableState;
                i && (i.constructed = !1), n && (n.constructed = !1), e.once(d, t), !(e.listenerCount(d) > 1) && r.nextTick(w, e)
            },
            destroyer(e, t) {
                !e || h(e) || (!t && !u(e) && (t = new s), c(e) ? (e.socket = null, e.destroy(t)) : E(e) ? e.abort() : E(e.req) ? e.req.abort() : "function" == typeof e.destroy ? e.destroy(t) : "function" == typeof e.close ? e.close() : t ? r.nextTick(A, e, t) : r.nextTick(S, e), e.destroyed || (e[a] = !0))
            },
            destroy(e, t) {
                let r = this._readableState,
                    n = this._writableState,
                    s = n || r;
                return null != n && n.destroyed || null != r && r.destroyed ? ("function" == typeof t && t(), this) : (p(e, n, r), n && (n.destroyed = !0), r && (r.destroyed = !0), s.constructed ? g(this, e, t) : this.once(f, (function(r) {
                    g(this, i(r, e), t)
                })), this)
            },
            undestroy() {
                let e = this._readableState,
                    t = this._writableState;
                e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = !1 === e.readable, e.endEmitted = !1 === e.readable), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = !1 === t.writable, t.ending = !1 === t.writable, t.finished = !1 === t.writable)
            },
            errorOrDestroy: _
        }
    }));

function ut() {
    ut.init.call(this)
}

function ct(e) {
    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}

function ft(e) {
    return void 0 === e._maxListeners ? ut.defaultMaxListeners : e._maxListeners
}

function dt(e, t, r, i) {
    var n, s, o;
    if (ct(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), o = s[t]), void 0 === o) o = s[t] = r, ++e._eventsCount;
    else if ("function" == typeof o ? o = s[t] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), (n = ft(e)) > 0 && o.length > n && !o.warned) {
        o.warned = !0;
        var a = Error("Possible EventEmitter memory leak detected. " + o.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
        a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = o.length, console && console.warn && console.warn(a)
    }
    return e
}

function pt() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function gt(e, t, r) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: r
        },
        n = pt.bind(i);
    return n.listener = r, i.wrapFn = n, n
}

function bt(e, t, r) {
    var i = e._events;
    if (void 0 === i) return [];
    var n = i[t];
    return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? (e => {
        for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    })(n) : mt(n, n.length)
}

function yt(e) {
    var t = this._events;
    if (void 0 !== t) {
        var r = t[e];
        if ("function" == typeof r) return 1;
        if (void 0 !== r) return r.length
    }
    return 0
}

function mt(e, t) {
    for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
    return r
}
var _t, wt, vt, Et, St, At, Tt, It = n((() => {
        l(), Ze(), De(), vt = "object" == typeof Reflect ? Reflect : null, Et = vt && "function" == typeof vt.apply ? vt.apply : (e, t, r) => function() {}.apply.call(e, t, r), wt = vt && "function" == typeof vt.ownKeys ? vt.ownKeys : Object.getOwnPropertySymbols ? e => Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) : e => Object.getOwnPropertyNames(e), St = Number.isNaN || (e => e != e), _t = ut, ut.EventEmitter = ut, ut.prototype._events = void 0, ut.prototype._eventsCount = 0, ut.prototype._maxListeners = void 0, At = 10, Object.defineProperty(ut, "defaultMaxListeners", {
            enumerable: !0,
            get() {
                return At
            },
            set(e) {
                if ("number" != typeof e || e < 0 || St(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                At = e
            }
        }), ut.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, ut.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || St(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, ut.prototype.getMaxListeners = function() {
            return ft(this)
        }, ut.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
            var i = "error" === e,
                n = this._events;
            if (void 0 !== n) i = i && void 0 === n.error;
            else if (!i) return !1;
            if (i) {
                var s;
                if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
                var o = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw o.context = s, o
            }
            var a = n[e];
            if (void 0 === a) return !1;
            if ("function" == typeof a) Et(a, this, t);
            else {
                var l = a.length,
                    h = mt(a, l);
                for (r = 0; r < l; ++r) Et(h[r], this, t)
            }
            return !0
        }, ut.prototype.addListener = function(e, t) {
            return dt(this, e, t, !1)
        }, ut.prototype.on = ut.prototype.addListener, ut.prototype.prependListener = function(e, t) {
            return dt(this, e, t, !0)
        }, ut.prototype.once = function(e, t) {
            return ct(t), this.on(e, gt(this, e, t)), this
        }, ut.prototype.prependOnceListener = function(e, t) {
            return ct(t), this.prependListener(e, gt(this, e, t)), this
        }, ut.prototype.removeListener = function(e, t) {
            var r, i, n, s, o;
            if (ct(t), void 0 === (i = this._events)) return this;
            if (void 0 === (r = i[e])) return this;
            if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (n = -1, s = r.length - 1; s >= 0; s--)
                    if (r[s] === t || r[s].listener === t) {
                        o = r[s].listener, n = s;
                        break
                    } if (n < 0) return this;
                0 === n ? r.shift() : ((e, t) => {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                })(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t)
            }
            return this
        }, ut.prototype.off = ut.prototype.removeListener, ut.prototype.removeAllListeners = function(e) {
            var t, r, i;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
            if (0 === arguments.length) {
                var n, s = Object.keys(r);
                for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof(t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
            return this
        }, ut.prototype.listeners = function(e) {
            return bt(this, e, !0)
        }, ut.prototype.rawListeners = function(e) {
            return bt(this, e, !1)
        }, ut.listenerCount = (e, t) => "function" == typeof e.listenerCount ? e.listenerCount(t) : yt.call(e, t), ut.prototype.listenerCount = yt, ut.prototype.eventNames = function() {
            return this._eventsCount > 0 ? wt(this._events) : []
        }, (Tt = _t).EventEmitter, Tt.defaultMaxListeners, Tt.init, Tt.listenerCount, Tt.EventEmitter, Tt.defaultMaxListeners, Tt.init, Tt.listenerCount
    })),
    kt = {};
o(kt, {
    EventEmitter() {
        return Rt
    },
    default () {
        return Tt
    },
    defaultMaxListeners() {
        return Ct
    },
    init() {
        return Ot
    },
    listenerCount() {
        return Pt
    },
    on() {
        return Bt
    },
    once() {
        return xt
    }
});
var Rt, Ct, Ot, Pt, Bt, xt, Nt = n((() => {
        l(), Ze(), De(), It(), It(), Tt.once = (e, t) => new Promise(((r, i) => {
            function n(...t) {
                void 0 !== s && e.removeListener("error", s), r(t)
            }
            let s;
            "error" !== t && (s = t => {
                e.removeListener(name, n), i(t)
            }, e.once("error", s)), e.once(t, n)
        })), Tt.on = function(e, t) {
            let r = [],
                i = [],
                n = null,
                s = !1,
                o = {
                    async next() {
                        let e = r.shift();
                        if (e) return createIterResult(e, !1);
                        if (n) {
                            let e = Promise.reject(n);
                            return n = null, e
                        }
                        return s ? createIterResult(void 0, !0) : new Promise(((e, t) => i.push({
                            resolve: e,
                            reject: t
                        })))
                    },
                    async return () {
                        e.removeListener(t, a), e.removeListener("error", l), s = !0;
                        for (let e of i) e.resolve(createIterResult(void 0, !0));
                        return createIterResult(void 0, !0)
                    },
                    throw (r) {
                        n = r, e.removeListener(t, a), e.removeListener("error", l)
                    },
                    [Symbol.asyncIterator]() {
                        return this
                    }
                };
            return e.on(t, a), e.on("error", l), o;

            function a(...e) {
                let t = i.shift();
                t ? t.resolve(createIterResult(e, !1)) : r.push(e)
            }

            function l(e) {
                s = !0;
                let t = i.shift();
                t ? t.reject(e) : n = e, o.return()
            }
        }, ({
            EventEmitter: Rt,
            defaultMaxListeners: Ct,
            init: Ot,
            listenerCount: Pt,
            on: Bt,
            once: xt
        } = Tt)
    })),
    Mt = s(((e, t) => {
        l(), Ze(), De();
        var {
            ArrayIsArray: r,
            ObjectSetPrototypeOf: i
        } = tt(), {
            EventEmitter: n
        } = (Nt(), a(kt));

        function s(e) {
            n.call(this, e)
        }

        function o(e, t, i) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, i);
            e._events && e._events[t] ? r(e._events[t]) ? e._events[t].unshift(i) : e._events[t] = [i, e._events[t]] : e.on(t, i)
        }
        i(s.prototype, n.prototype), i(s, n), s.prototype.pipe = function(e, t) {
            let r = this;

            function i(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause()
            }

            function s() {
                r.readable && r.resume && r.resume()
            }
            r.on("data", i), e.on("drain", s), !e._isStdio && (!t || !1 !== t.end) && (r.on("end", l), r.on("close", h));
            let a = !1;

            function l() {
                a || (a = !0, e.end())
            }

            function h() {
                a || (a = !0, "function" == typeof e.destroy && e.destroy())
            }

            function u(e) {
                c(), 0 === n.listenerCount(this, "error") && this.emit("error", e)
            }

            function c() {
                r.removeListener("data", i), e.removeListener("drain", s), r.removeListener("end", l), r.removeListener("close", h), r.removeListener("error", u), e.removeListener("error", u), r.removeListener("end", c), r.removeListener("close", c), e.removeListener("close", c)
            }
            return o(r, "error", u), o(e, "error", u), r.on("end", c), r.on("close", c), e.on("close", c), e.emit("pipe", r), e
        }, t.exports = {
            Stream: s,
            prependListener: o
        }
    })),
    Ut = s(((e, t) => {
        l(), Ze(), De();
        var {
            AbortError: r,
            codes: i
        } = nt(), {
            isNodeStream: n,
            isWebStream: s,
            kControllerErrorFunction: o
        } = at(), a = lt(), {
            ERR_INVALID_ARG_TYPE: h
        } = i;
        t.exports.addAbortSignal = (e, r) => {
            if (((e, t) => {
                    if ("object" != typeof e || !("aborted" in e)) throw new h(t, "AbortSignal", e)
                })(e, "signal"), !n(r) && !s(r)) throw new h("stream", ["ReadableStream", "WritableStream", "Stream"], r);
            return t.exports.addAbortSignalNoValidate(e, r)
        }, t.exports.addAbortSignalNoValidate = (e, t) => {
            if ("object" != typeof e || !("aborted" in e)) return t;
            let i = n(t) ? () => {
                t.destroy(new r(void 0, {
                    cause: e.reason
                }))
            } : () => {
                t[o](new r(void 0, {
                    cause: e.reason
                }))
            };
            return e.aborted ? i() : (e.addEventListener("abort", i), a(t, (() => e.removeEventListener("abort", i)))), t
        }
    })),
    Lt = s(((e, t) => {
        l(), Ze(), De();
        var {
            StringPrototypeSlice: r,
            SymbolIterator: i,
            TypedArrayPrototypeSet: n,
            Uint8Array: s
        } = tt(), {
            Buffer: o
        } = (Xe(), a(Fe)), {
            inspect: h
        } = rt();
        t.exports = class {
            constructor() {
                this.head = null, this.tail = null, this.length = 0
            }
            push(e) {
                let t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }
            unshift(e) {
                let t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }
            shift() {
                if (0 === this.length) return;
                let e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
            }
            clear() {
                this.head = this.tail = null, this.length = 0
            }
            join(e) {
                if (0 === this.length) return "";
                let t = this.head,
                    r = "" + t.data;
                for (; null !== (t = t.next);) r += e + t.data;
                return r
            }
            concat(e) {
                if (0 === this.length) return o.alloc(0);
                let t = o.allocUnsafe(e >>> 0),
                    r = this.head,
                    i = 0;
                for (; r;) n(t, r.data, i), i += r.data.length, r = r.next;
                return t
            }
            consume(e, t) {
                let r = this.head.data;
                if (e < r.length) {
                    let t = r.slice(0, e);
                    return this.head.data = r.slice(e), t
                }
                return e === r.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e)
            }
            first() {
                return this.head.data
            }*[i]() {
                for (let e = this.head; e; e = e.next) yield e.data
            }
            _getString(e) {
                let t = "",
                    i = this.head,
                    n = 0;
                do {
                    let s = i.data;
                    if (!(e > s.length)) {
                        e === s.length ? (t += s, ++n, i.next ? this.head = i.next : this.head = this.tail = null) : (t += r(s, 0, e), this.head = i, i.data = r(s, e));
                        break
                    }
                    t += s, e -= s.length, ++n
                } while (null !== (i = i.next));
                return this.length -= n, t
            }
            _getBuffer(e) {
                let t = o.allocUnsafe(e),
                    r = e,
                    i = this.head,
                    a = 0;
                do {
                    let o = i.data;
                    if (!(e > o.length)) {
                        e === o.length ? (n(t, o, r - e), ++a, i.next ? this.head = i.next : this.head = this.tail = null) : (n(t, new s(o.buffer, o.byteOffset, e), r - e), this.head = i, i.data = o.slice(e));
                        break
                    }
                    n(t, o, r - e), e -= o.length, ++a
                } while (null !== (i = i.next));
                return this.length -= a, t
            } [Symbol.for("nodejs.util.inspect.custom")](e, t) {
                return h(this, {
                    ...t,
                    depth: 0,
                    customInspect: !1
                })
            }
        }
    })),
    jt = s(((e, t) => {
        l(), Ze(), De();
        var {
            MathFloor: r,
            NumberIsInteger: i
        } = tt(), {
            ERR_INVALID_ARG_VALUE: n
        } = nt().codes;

        function s(e) {
            return e ? 16 : 16384
        }
        t.exports = {
            getHighWaterMark(e, t, o, a) {
                let l = function(e, t, r) {
                    return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                }(t, a, o);
                if (null != l) {
                    if (!i(l) || l < 0) {
                        throw new n(a ? "options." + o : "options.highWaterMark", l)
                    }
                    return r(l)
                }
                return s(e.objectMode)
            },
            getDefaultHighWaterMark: s
        }
    }));

function Dt(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
}

function Ft(e, t, r) {
    for (var i, n, s = [], o = t; o < r; o += 3) i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), s.push(xr[(n = i) >> 18 & 63] + xr[n >> 12 & 63] + xr[n >> 6 & 63] + xr[63 & n]);
    return s.join("")
}

function Wt(e) {
    if (e > 2147483647) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, qt.prototype), t
}

function qt(e, t, r) {
    if ("number" == typeof e) {
        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
        return Vt(e)
    }
    return $t(e, t, r)
}

function $t(e, t, r) {
    if ("string" == typeof e) return ((e, t) => {
        if ("string" == typeof t && "" !== t || (t = "utf8"), !qt.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        var r = 0 | Yt(e, t),
            i = Wt(r),
            n = i.write(e, t);
        return n !== r && (i = i.slice(0, n)), i
    })(e, t);
    if (ArrayBuffer.isView(e)) return zt(e);
    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    if (_r(e, ArrayBuffer) || e && _r(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (_r(e, SharedArrayBuffer) || e && _r(e.buffer, SharedArrayBuffer))) return function(e, t, r) {
        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var i;
        return i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(i, qt.prototype), i
    }(e, t, r);
    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
    var i = e.valueOf && e.valueOf();
    if (null != i && i !== e) return qt.from(i, t, r);
    var n = (e => {
        if (qt.isBuffer(e)) {
            var t = 0 | Kt(e.length),
                r = Wt(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r
        }
        return void 0 !== e.length ? "number" != typeof e.length || wr(e.length) ? Wt(0) : zt(e) : "Buffer" === e.type && Array.isArray(e.data) ? zt(e.data) : void 0
    })(e);
    if (n) return n;
    if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return qt.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
}

function Ht(e) {
    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
}

function Vt(e) {
    return Ht(e), Wt(e < 0 ? 0 : 0 | Kt(e))
}

function zt(e) {
    for (var t = e.length < 0 ? 0 : 0 | Kt(e.length), r = Wt(t), i = 0; i < t; i += 1) r[i] = 255 & e[i];
    return r
}

function Kt(e) {
    if (e >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
    return 0 | e
}

function Yt(e, t) {
    if (qt.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || _r(e, ArrayBuffer)) return e.byteLength;
    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    var r = e.length,
        i = arguments.length > 2 && !0 === arguments[2];
    if (!i && 0 === r) return 0;
    for (var n = !1;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
            return r;
        case "utf8":
        case "utf-8":
            return br(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * r;
        case "hex":
            return r >>> 1;
        case "base64":
            return yr(e).length;
        default:
            if (n) return i ? -1 : br(e).length;
            t = ("" + t).toLowerCase(), n = !0
    }
}

function Gt(e, t, r) {
    var i = !1;
    if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0) <= (t >>>= 0)) return "";
    for (e || (e = "utf8");;) switch (e) {
        case "hex":
            return hr(this, t, r);
        case "utf8":
        case "utf-8":
            return or(this, t, r);
        case "ascii":
            return ar(this, t, r);
        case "latin1":
        case "binary":
            return lr(this, t, r);
        case "base64":
            return sr(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ur(this, t, r);
        default:
            if (i) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), i = !0
    }
}

function Qt(e, t, r) {
    var i = e[t];
    e[t] = e[r], e[r] = i
}

function Jt(e, t, r, i, n) {
    if (0 === e.length) return -1;
    if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), wr(r = +r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (n) return -1;
        r = e.length - 1
    } else if (r < 0) {
        if (!n) return -1;
        r = 0
    }
    if ("string" == typeof t && (t = qt.from(t, i)), qt.isBuffer(t)) return 0 === t.length ? -1 : Xt(e, t, r, i, n);
    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : Xt(e, [t], r, i, n);
    throw new TypeError("val must be string, number or Buffer")
}

function Xt(e, t, r, i, n) {
    var s, o = 1,
        a = e.length,
        l = t.length;
    if (void 0 !== i && ("ucs2" === (i = (i + "").toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
        if (e.length < 2 || t.length < 2) return -1;
        o = 2, a /= 2, l /= 2, r /= 2
    }

    function h(e, t) {
        return 1 === o ? e[t] : e.readUInt16BE(t * o)
    }
    if (n) {
        var u = -1;
        for (s = r; s < a; s++)
            if (h(e, s) === h(t, -1 === u ? 0 : s - u)) {
                if (-1 === u && (u = s), s - u + 1 === l) return u * o
            } else - 1 !== u && (s -= s - u), u = -1
    } else
        for (r + l > a && (r = a - l), s = r; s >= 0; s--) {
            for (var c = !0, f = 0; f < l; f++)
                if (h(e, s + f) !== h(t, f)) {
                    c = !1;
                    break
                } if (c) return s
        }
    return -1
}

function Zt(e, t, r, i) {
    r = Number(r) || 0;
    var n = e.length - r;
    i ? (i = Number(i)) > n && (i = n) : i = n;
    var s = t.length;
    i > s / 2 && (i = s / 2);
    for (var o = 0; o < i; ++o) {
        var a = parseInt(t.substr(2 * o, 2), 16);
        if (wr(a)) return o;
        e[r + o] = a
    }
    return o
}

function er(e, t, r, i) {
    return mr(br(t, e.length - r), e, r, i)
}

function tr(e, t, r, i) {
    return mr((e => {
        for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
        return t
    })(t), e, r, i)
}

function rr(e, t, r, i) {
    return tr(e, t, r, i)
}

function ir(e, t, r, i) {
    return mr(yr(t), e, r, i)
}

function nr(e, t, r, i) {
    return mr(((e, t) => {
        for (var r, i, n, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) i = (r = e.charCodeAt(o)) >> 8, n = r % 256, s.push(n), s.push(i);
        return s
    })(t, e.length - r), e, r, i)
}

function sr(e, t, r) {
    return 0 === t && r === e.length ? Dr.fromByteArray(e) : Dr.fromByteArray(e.slice(t, r))
}

function or(e, t, r) {
    r = Math.min(e.length, r);
    for (var i = [], n = t; n < r;) {
        var s, o, a, l, h = e[n],
            u = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
        if (n + c <= r) switch (c) {
            case 1:
                h < 128 && (u = h);
                break;
            case 2:
                128 == (192 & (s = e[n + 1])) && (l = (31 & h) << 6 | 63 & s) > 127 && (u = l);
                break;
            case 3:
                s = e[n + 1], o = e[n + 2], 128 == (192 & s) && 128 == (192 & o) && (l = (15 & h) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (u = l);
                break;
            case 4:
                s = e[n + 1], o = e[n + 2], a = e[n + 3], 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && (l = (15 & h) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
        }
        null === u ? (u = 65533, c = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), i.push(u), n += c
    }
    return (e => {
        var t = e.length;
        if (t <= 4096) return String.fromCharCode.apply(String, e);
        for (var r = "", i = 0; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += 4096));
        return r
    })(i)
}

function ar(e, t, r) {
    var i = "";
    r = Math.min(e.length, r);
    for (var n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
    return i
}

function lr(e, t, r) {
    var i = "";
    r = Math.min(e.length, r);
    for (var n = t; n < r; ++n) i += String.fromCharCode(e[n]);
    return i
}

function hr(e, t, r) {
    var i = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
    for (var n = "", s = t; s < r; ++s) n += $r[e[s]];
    return n
}

function ur(e, t, r) {
    for (var i = e.slice(t, r), n = "", s = 0; s < i.length; s += 2) n += String.fromCharCode(i[s] + 256 * i[s + 1]);
    return n
}

function cr(e, t, r) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
}

function fr(e, t, r, i, n, s) {
    if (!qt.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > n || t < s) throw new RangeError('"value" argument is out of bounds');
    if (r + i > e.length) throw new RangeError("Index out of range")
}

function dr(e, t, r, i) {
    if (r + i > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range")
}

function pr(e, t, r, i, n) {
    return t = +t, r >>>= 0, n || dr(e, 0, r, 4), Fr.write(e, t, r, i, 23, 4), r + 4
}

function gr(e, t, r, i, n) {
    return t = +t, r >>>= 0, n || dr(e, 0, r, 8), Fr.write(e, t, r, i, 52, 8), r + 8
}

function br(e, t) {
    var r;
    t = t || 1 / 0;
    for (var i = e.length, n = null, s = [], o = 0; o < i; ++o) {
        if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
            if (!n) {
                if (r > 56319) {
                    (t -= 3) > -1 && s.push(239, 191, 189);
                    continue
                }
                if (o + 1 === i) {
                    (t -= 3) > -1 && s.push(239, 191, 189);
                    continue
                }
                n = r;
                continue
            }
            if (r < 56320) {
                (t -= 3) > -1 && s.push(239, 191, 189), n = r;
                continue
            }
            r = 65536 + (n - 55296 << 10 | r - 56320)
        } else n && (t -= 3) > -1 && s.push(239, 191, 189);
        if (n = null, r < 128) {
            if ((t -= 1) < 0) break;
            s.push(r)
        } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            s.push(r >> 6 | 192, 63 & r | 128)
        } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
        } else {
            if (!(r < 1114112)) throw Error("Invalid code point");
            if ((t -= 4) < 0) break;
            s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
        }
    }
    return s
}

function yr(e) {
    return Dr.toByteArray((e => {
        if ((e = (e = e.split("=")[0]).trim().replace(qr, "")).length < 2) return "";
        for (; e.length % 4 != 0;) e += "=";
        return e
    })(e))
}

function mr(e, t, r, i) {
    for (var n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
    return n
}

function _r(e, t) {
    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
}

function wr(e) {
    return e != e
}

function vr(e, t) {
    for (var r in e) t[r] = e[r]
}

function Er(e, t, r) {
    return zr(e, t, r)
}

function Sr(e) {
    var t;
    switch (this.encoding = (e => {
            var t = (e => {
                if (!e) return "utf8";
                for (var t;;) switch (e) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return e;
                    default:
                        if (t) return;
                        e = ("" + e).toLowerCase(), t = !0
                }
            })(e);
            if ("string" != typeof t && (Yr.isEncoding === Gr || !Gr(e))) throw Error("Unknown encoding: " + e);
            return t || e
        })(e), this.encoding) {
        case "utf16le":
            this.text = Ir, this.end = kr, t = 4;
            break;
        case "utf8":
            this.fillLast = Tr, t = 4;
            break;
        case "base64":
            this.text = Rr, this.end = Cr, t = 3;
            break;
        default:
            return this.write = Or, void(this.end = Pr)
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Yr.allocUnsafe(t)
}

function Ar(e) {
    return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
}

function Tr(e) {
    var t = this.lastTotal - this.lastNeed,
        r = ((e, t) => {
            if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
            }
        })(this, e);
    return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
}

function Ir(e, t) {
    if ((e.length - t) % 2 == 0) {
        var r = e.toString("utf16le", t);
        if (r) {
            var i = r.charCodeAt(r.length - 1);
            if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
        }
        return r
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
}

function kr(e) {
    var t = e && e.length ? this.write(e) : "";
    if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r)
    }
    return t
}

function Rr(e, t) {
    var r = (e.length - t) % 3;
    return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
}

function Cr(e) {
    var t = e && e.length ? this.write(e) : "";
    return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
}

function Or(e) {
    return e.toString(this.encoding)
}

function Pr(e) {
    return e && e.length ? this.write(e) : ""
}
var Br, xr, Nr, Mr, Ur, Lr, jr, Dr, Fr, Wr, qr, $r, Hr, Vr, zr, Kr, Yr, Gr, Qr = n((() => {
        for (l(), Ze(), De(), Br = {
                byteLength(e) {
                    var t = Dt(e),
                        r = t[0],
                        i = t[1];
                    return 3 * (r + i) / 4 - i
                },
                toByteArray(e) {
                    var t, r, i, n = Dt(e),
                        s = n[0],
                        o = n[1],
                        a = new Mr(3 * (s + (i = o)) / 4 - i),
                        l = 0,
                        h = o > 0 ? s - 4 : s;
                    for (r = 0; r < h; r += 4) t = Nr[e.charCodeAt(r)] << 18 | Nr[e.charCodeAt(r + 1)] << 12 | Nr[e.charCodeAt(r + 2)] << 6 | Nr[e.charCodeAt(r + 3)], a[l++] = t >> 16 & 255, a[l++] = t >> 8 & 255, a[l++] = 255 & t;
                    return 2 === o && (t = Nr[e.charCodeAt(r)] << 2 | Nr[e.charCodeAt(r + 1)] >> 4, a[l++] = 255 & t), 1 === o && (t = Nr[e.charCodeAt(r)] << 10 | Nr[e.charCodeAt(r + 1)] << 4 | Nr[e.charCodeAt(r + 2)] >> 2, a[l++] = t >> 8 & 255, a[l++] = 255 & t), a
                },
                fromByteArray(e) {
                    for (var t, r = e.length, i = r % 3, n = [], s = 0, o = r - i; s < o; s += 16383) n.push(Ft(e, s, s + 16383 > o ? o : s + 16383));
                    return 1 === i ? (t = e[r - 1], n.push(xr[t >> 2] + xr[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], n.push(xr[t >> 10] + xr[t >> 4 & 63] + xr[t << 2 & 63] + "=")), n.join("")
                }
            }, xr = [], Nr = [], Mr = typeof Uint8Array < "u" ? Uint8Array : Array, Ur = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lr = 0, 64; Lr < 64; ++Lr) xr[Lr] = Ur[Lr], Nr[Ur.charCodeAt(Lr)] = Lr;
        Nr[45] = 62, Nr[95] = 63, jr = {}, Dr = Br, Fr = {
            read(e, t, r, i, n) {
                var s, o, a = 8 * n - i - 1,
                    l = (1 << a) - 1,
                    h = l >> 1,
                    u = -7,
                    c = r ? n - 1 : 0,
                    f = r ? -1 : 1,
                    d = e[t + c];
                for (c += f, s = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; s = 256 * s + e[t + c], c += f, u -= 8);
                for (o = s & (1 << -u) - 1, s >>= -u, u += i; u > 0; o = 256 * o + e[t + c], c += f, u -= 8);
                if (0 === s) s = 1 - h;
                else {
                    if (s === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                    o += Math.pow(2, i), s -= h
                }
                return (d ? -1 : 1) * o * Math.pow(2, s - i)
            },
            write(e, t, r, i, n, s) {
                var o, a, l, h = 8 * s - n - 1,
                    u = (1 << h) - 1,
                    c = u >> 1,
                    f = 23 === n ? 5.960464477539062e-8 : 0,
                    d = i ? 0 : s - 1,
                    p = i ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = u) : (t * (l = Math.pow(2, -(o = Math.floor(Math.log(t) / Math.LN2)))) < 1 && (o--, l *= 2), (t += o + c >= 1 ? f / l : f * Math.pow(2, 1 - c)) * l >= 2 && (o++, l /= 2), o + c >= u ? (a = 0, o = u) : o + c >= 1 ? (a = (t * l - 1) * Math.pow(2, n), o += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, n), o = 0)); n >= 8; e[r + d] = 255 & a, d += p, a /= 256, n -= 8);
                for (o = o << n | a, h += n; h > 0; e[r + d] = 255 & o, d += p, o /= 256, h -= 8);
                e[r + d - p] |= 128 * g
            }
        }, Wr = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null, jr.Buffer = qt, jr.SlowBuffer = e => (+e != e && (e = 0), qt.alloc(+e)), jr.INSPECT_MAX_BYTES = 50, jr.kMaxLength = 2147483647, qt.TYPED_ARRAY_SUPPORT = (() => {
            try {
                var e = new Uint8Array(1),
                    t = {
                        foo() {
                            return 42
                        }
                    };
                return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
            } catch {
                return !1
            }
        })(), qt.TYPED_ARRAY_SUPPORT || typeof console > "u" || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(qt.prototype, "parent", {
            enumerable: !0,
            get() {
                if (qt.isBuffer(this)) return this.buffer
            }
        }), Object.defineProperty(qt.prototype, "offset", {
            enumerable: !0,
            get() {
                if (qt.isBuffer(this)) return this.byteOffset
            }
        }), qt.poolSize = 8192, qt.from = (e, t, r) => $t(e, t, r), Object.setPrototypeOf(qt.prototype, Uint8Array.prototype), Object.setPrototypeOf(qt, Uint8Array), qt.alloc = (e, t, r) => {
            return n = t, s = r, Ht(i = e), i <= 0 ? Wt(i) : void 0 !== n ? "string" == typeof s ? Wt(i).fill(n, s) : Wt(i).fill(n) : Wt(i);
            var i, n, s
        }, qt.allocUnsafe = e => Vt(e), qt.allocUnsafeSlow = e => Vt(e), qt.isBuffer = e => null != e && !0 === e._isBuffer && e !== qt.prototype, qt.compare = (e, t) => {
            if (_r(e, Uint8Array) && (e = qt.from(e, e.offset, e.byteLength)), _r(t, Uint8Array) && (t = qt.from(t, t.offset, t.byteLength)), !qt.isBuffer(e) || !qt.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            for (var r = e.length, i = t.length, n = 0, s = Math.min(r, i); n < s; ++n)
                if (e[n] !== t[n]) {
                    r = e[n], i = t[n];
                    break
                } return r < i ? -1 : i < r ? 1 : 0
        }, qt.isEncoding = e => {
            switch ((e + "").toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, qt.concat = (e, t) => {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return qt.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var i = qt.allocUnsafe(t),
                n = 0;
            for (r = 0; r < e.length; ++r) {
                var s = e[r];
                if (_r(s, Uint8Array) && (s = qt.from(s)), !qt.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(i, n), n += s.length
            }
            return i
        }, qt.byteLength = Yt, qt.prototype._isBuffer = !0, qt.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) Qt(this, t, t + 1);
            return this
        }, qt.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) Qt(this, t, t + 3), Qt(this, t + 1, t + 2);
            return this
        }, qt.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) Qt(this, t, t + 7), Qt(this, t + 1, t + 6), Qt(this, t + 2, t + 5), Qt(this, t + 3, t + 4);
            return this
        }, qt.prototype.toString = function() {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? or(this, 0, e) : Gt.apply(this, arguments)
        }, qt.prototype.toLocaleString = qt.prototype.toString, qt.prototype.equals = function(e) {
            if (!qt.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === qt.compare(this, e)
        }, qt.prototype.inspect = function() {
            var e = "",
                t = jr.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
        }, Wr && (qt.prototype[Wr] = qt.prototype.inspect), qt.prototype.compare = function(e, t, r, i, n) {
            if (_r(e, Uint8Array) && (e = qt.from(e, e.offset, e.byteLength)), !qt.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw new RangeError("out of range index");
            if (i >= n && t >= r) return 0;
            if (i >= n) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (var s = (n >>>= 0) - (i >>>= 0), o = (r >>>= 0) - (t >>>= 0), a = Math.min(s, o), l = this.slice(i, n), h = e.slice(t, r), u = 0; u < a; ++u)
                if (l[u] !== h[u]) {
                    s = l[u], o = h[u];
                    break
                } return s < o ? -1 : o < s ? 1 : 0
        }, qt.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, qt.prototype.indexOf = function(e, t, r) {
            return Jt(this, e, t, r, !0)
        }, qt.prototype.lastIndexOf = function(e, t, r) {
            return Jt(this, e, t, r, !1)
        }, qt.prototype.write = function(e, t, r, i) {
            if (void 0 === t) i = "utf8", r = this.length, t = 0;
            else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;
            else {
                if (!isFinite(t)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
            }
            var n = this.length - t;
            if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var s = !1;;) switch (i) {
                case "hex":
                    return Zt(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return er(this, e, t, r);
                case "ascii":
                    return tr(this, e, t, r);
                case "latin1":
                case "binary":
                    return rr(this, e, t, r);
                case "base64":
                    return ir(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return nr(this, e, t, r);
                default:
                    if (s) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), s = !0
            }
        }, qt.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: [].slice.call(this._arr || this, 0)
            }
        }, qt.prototype.slice = function(e, t) {
            var r = this.length;
            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
            var i = this.subarray(e, t);
            return Object.setPrototypeOf(i, qt.prototype), i
        }, qt.prototype.readUIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || cr(e, t, this.length);
            for (var i = this[e], n = 1, s = 0; ++s < t && (n *= 256);) i += this[e + s] * n;
            return i
        }, qt.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || cr(e, t, this.length);
            for (var i = this[e + --t], n = 1; t > 0 && (n *= 256);) i += this[e + --t] * n;
            return i
        }, qt.prototype.readUInt8 = function(e, t) {
            return e >>>= 0, t || cr(e, 1, this.length), this[e]
        }, qt.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0, t || cr(e, 2, this.length), this[e] | this[e + 1] << 8
        }, qt.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0, t || cr(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, qt.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0, t || cr(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, qt.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0, t || cr(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, qt.prototype.readIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || cr(e, t, this.length);
            for (var i = this[e], n = 1, s = 0; ++s < t && (n *= 256);) i += this[e + s] * n;
            return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i
        }, qt.prototype.readIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || cr(e, t, this.length);
            for (var i = t, n = 1, s = this[e + --i]; i > 0 && (n *= 256);) s += this[e + --i] * n;
            return s >= (n *= 128) && (s -= Math.pow(2, 8 * t)), s
        }, qt.prototype.readInt8 = function(e, t) {
            return e >>>= 0, t || cr(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, qt.prototype.readInt16LE = function(e, t) {
            e >>>= 0, t || cr(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, qt.prototype.readInt16BE = function(e, t) {
            e >>>= 0, t || cr(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, qt.prototype.readInt32LE = function(e, t) {
            return e >>>= 0, t || cr(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, qt.prototype.readInt32BE = function(e, t) {
            return e >>>= 0, t || cr(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, qt.prototype.readFloatLE = function(e, t) {
            return e >>>= 0, t || cr(e, 4, this.length), Fr.read(this, e, !0, 23, 4)
        }, qt.prototype.readFloatBE = function(e, t) {
            return e >>>= 0, t || cr(e, 4, this.length), Fr.read(this, e, !1, 23, 4)
        }, qt.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0, t || cr(e, 8, this.length), Fr.read(this, e, !0, 52, 8)
        }, qt.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0, t || cr(e, 8, this.length), Fr.read(this, e, !1, 52, 8)
        }, qt.prototype.writeUIntLE = function(e, t, r, i) {
            e = +e, t >>>= 0, r >>>= 0, i || fr(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var n = 1,
                s = 0;
            for (this[t] = 255 & e; ++s < r && (n *= 256);) this[t + s] = e / n & 255;
            return t + r
        }, qt.prototype.writeUIntBE = function(e, t, r, i) {
            e = +e, t >>>= 0, r >>>= 0, i || fr(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var n = r - 1,
                s = 1;
            for (this[t + n] = 255 & e; --n >= 0 && (s *= 256);) this[t + n] = e / s & 255;
            return t + r
        }, qt.prototype.writeUInt8 = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
        }, qt.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, qt.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, qt.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
        }, qt.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, qt.prototype.writeIntLE = function(e, t, r, i) {
            if (e = +e, t >>>= 0, !i) {
                var n = Math.pow(2, 8 * r - 1);
                fr(this, e, t, r, n - 1, -n)
            }
            var s = 0,
                o = 1,
                a = 0;
            for (this[t] = 255 & e; ++s < r && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
            return t + r
        }, qt.prototype.writeIntBE = function(e, t, r, i) {
            if (e = +e, t >>>= 0, !i) {
                var n = Math.pow(2, 8 * r - 1);
                fr(this, e, t, r, n - 1, -n)
            }
            var s = r - 1,
                o = 1,
                a = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
            return t + r
        }, qt.prototype.writeInt8 = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, qt.prototype.writeInt16LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, qt.prototype.writeInt16BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, qt.prototype.writeInt32LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
        }, qt.prototype.writeInt32BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || fr(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, qt.prototype.writeFloatLE = function(e, t, r) {
            return pr(this, e, t, !0, r)
        }, qt.prototype.writeFloatBE = function(e, t, r) {
            return pr(this, e, t, !1, r)
        }, qt.prototype.writeDoubleLE = function(e, t, r) {
            return gr(this, e, t, !0, r)
        }, qt.prototype.writeDoubleBE = function(e, t, r) {
            return gr(this, e, t, !1, r)
        }, qt.prototype.copy = function(e, t, r, i) {
            if (!qt.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (r || (r = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r || 0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
            if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
            var n = i - r;
            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, i);
            else if (this === e && r < t && t < i)
                for (var s = n - 1; s >= 0; --s) e[s + t] = this[s + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, i), t);
            return n
        }, qt.prototype.fill = function(e, t, r, i) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !qt.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                if (1 === e.length) {
                    var n = e.charCodeAt(0);
                    ("utf8" === i && n < 128 || "latin1" === i) && (e = n)
                }
            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            var s;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                for (s = t; s < r; ++s) this[s] = e;
            else {
                var o = qt.isBuffer(e) ? e : qt.from(e, i),
                    a = o.length;
                if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (s = 0; s < r - t; ++s) this[s + t] = o[s % a]
            }
            return this
        }, qr = /[^+/0-9A-Za-z-_]/g, $r = (() => {
            for (var e = Array(256), t = 0; t < 16; ++t)
                for (var r = 16 * t, i = 0; i < 16; ++i) e[r + i] = "0123456789abcdef" [t] + "0123456789abcdef" [i];
            return e
        })(), jr.Buffer, jr.INSPECT_MAX_BYTES, jr.kMaxLength, Hr = {}, (zr = (Vr = jr).Buffer).from && zr.alloc && zr.allocUnsafe && zr.allocUnsafeSlow ? Hr = Vr : (vr(Vr, Hr), Hr.Buffer = Er), Er.prototype = Object.create(zr.prototype), vr(zr, Er), Er.from = (e, t, r) => {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return zr(e, t, r)
        }, Er.alloc = (e, t, r) => {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var i = zr(e);
            return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0), i
        }, Er.allocUnsafe = e => {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return zr(e)
        }, Er.allocUnsafeSlow = e => {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return Vr.SlowBuffer(e)
        }, Kr = {}, Yr = Hr.Buffer, Gr = Yr.isEncoding || (e => {
            switch ((e = "" + e) && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        }), Kr.StringDecoder = Sr, Sr.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                r = this.lastNeed, this.lastNeed = 0
            } else r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }, Sr.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }, Sr.prototype.text = function(e, t) {
            var r = ((e, t, r) => {
                var i = t.length - 1;
                if (i < r) return 0;
                var n = Ar(t[i]);
                return n >= 0 ? (n > 0 && (e.lastNeed = n - 1), n) : --i < r || -2 === n ? 0 : (n = Ar(t[i])) >= 0 ? (n > 0 && (e.lastNeed = n - 2), n) : --i < r || -2 === n ? 0 : (n = Ar(t[i])) >= 0 ? (n > 0 && (2 === n ? n = 0 : e.lastNeed = n - 3), n) : 0
            })(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = r;
            var i = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i)
        }, Sr.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }, Kr.StringDecoder, Kr.StringDecoder
    })),
    Jr = {};
o(Jr, {
    StringDecoder() {
        return Xr
    },
    default () {
        return Kr
    }
});
var Xr, Zr = n((() => {
        l(), Ze(), De(), Qr(), Qr(), Xr = Kr.StringDecoder
    })),
    ei = s(((e, t) => {
        l(), Ze(), De();
        var r = ot(),
            {
                PromisePrototypeThen: i,
                SymbolAsyncIterator: n,
                SymbolIterator: s
            } = tt(),
            {
                Buffer: o
            } = (Xe(), a(Fe)),
            {
                ERR_INVALID_ARG_TYPE: h,
                ERR_STREAM_NULL_VALUES: u
            } = nt().codes;
        t.exports = function(e, t, a) {
            let l, c;
            if ("string" == typeof t || t instanceof o) return new e({
                objectMode: !0,
                ...a,
                read() {
                    this.push(t), this.push(null)
                }
            });
            if (t && t[n]) c = !0, l = t[n]();
            else {
                if (!t || !t[s]) throw new h("iterable", ["Iterable"], t);
                c = !1, l = t[s]()
            }
            let f = new e({
                    objectMode: !0,
                    highWaterMark: 1,
                    ...a
                }),
                d = !1;
            return f._read = () => {
                d || (d = !0, async function() {
                    for (;;) {
                        try {
                            let {
                                value: e,
                                done: t
                            } = c ? await l.next() : l.next();
                            if (t) f.push(null);
                            else {
                                let t = e && "function" == typeof e.then ? await e : e;
                                if (null === t) throw d = !1, new u;
                                if (f.push(t)) continue;
                                d = !1
                            }
                        } catch (e) {
                            f.destroy(e)
                        }
                        break
                    }
                }())
            }, f._destroy = (e, t) => {
                i(async function(e) {
                    let t = null != e,
                        r = "function" == typeof l.throw;
                    if (t && r) {
                        let {
                            value: t,
                            done: r
                        } = await l.throw(e);
                        if (await t, r) return
                    }
                    if ("function" == typeof l.return) {
                        let {
                            value: e
                        } = await l.return();
                        await e
                    }
                }(e), (() => r.nextTick(t, e)), (i => r.nextTick(t, i || e)))
            }, f
        }
    })),
    ti = s(((e, t) => {
        l(), Ze(), De();
        var r = ot(),
            {
                ArrayPrototypeIndexOf: i,
                NumberIsInteger: n,
                NumberIsNaN: s,
                NumberParseInt: o,
                ObjectDefineProperties: h,
                ObjectKeys: u,
                ObjectSetPrototypeOf: c,
                Promise: f,
                SafeSet: d,
                SymbolAsyncIterator: p,
                Symbol: g
            } = tt();
        t.exports = F, F.ReadableState = D;
        var {
            EventEmitter: b
        } = (Nt(), a(kt)), {
            Stream: y,
            prependListener: m
        } = Mt(), {
            Buffer: _
        } = (Xe(), a(Fe)), {
            addAbortSignal: w
        } = Ut(), v = lt(), E = rt().debuglog("stream", (e => {
            E = e
        })), S = Lt(), A = ht(), {
            getHighWaterMark: T,
            getDefaultHighWaterMark: I
        } = jt(), {
            aggregateTwoErrors: k,
            codes: {
                ERR_INVALID_ARG_TYPE: R,
                ERR_METHOD_NOT_IMPLEMENTED: C,
                ERR_OUT_OF_RANGE: O,
                ERR_STREAM_PUSH_AFTER_EOF: P,
                ERR_STREAM_UNSHIFT_AFTER_END_EVENT: B
            }
        } = nt(), {
            validateObject: x
        } = st(), N = g("kPaused"), {
            StringDecoder: M
        } = (Zr(), a(Jr)), U = ei();
        c(F.prototype, y.prototype), c(F, y);
        var L = () => {},
            {
                errorOrDestroy: j
            } = A;

        function D(e, t, r) {
            "boolean" != typeof r && (r = t instanceof ni()), this.objectMode = !(!e || !e.objectMode), r && (this.objectMode = this.objectMode || !(!e || !e.readableObjectMode)), this.highWaterMark = e ? T(this, e, "readableHighWaterMark", r) : I(!1), this.buffer = new S, this.length = 0, this.pipes = [], this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.constructed = !0, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this[N] = null, this.errorEmitted = !1, this.emitClose = !e || !1 !== e.emitClose, this.autoDestroy = !e || !1 !== e.autoDestroy, this.destroyed = !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = !1, this.readingMore = !1, this.dataEmitted = !1, this.decoder = null, this.encoding = null, e && e.encoding && (this.decoder = new M(e.encoding), this.encoding = e.encoding)
        }

        function F(e) {
            if (!(this instanceof F)) return new F(e);
            let t = this instanceof ni();
            this._readableState = new D(e, this, t), e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.construct && (this._construct = e.construct), e.signal && !t && w(e.signal, this)), y.call(this, e), A.construct(this, (() => {
                this._readableState.needReadable && K(this, this._readableState)
            }))
        }

        function W(e, t, r, i) {
            E("readableAddChunk", t);
            let n, s = e._readableState;
            if (s.objectMode || ("string" == typeof t ? (r = r || s.defaultEncoding, s.encoding !== r && (i && s.encoding ? t = _.from(t, r).toString(s.encoding) : (t = _.from(t, r), r = ""))) : t instanceof _ ? r = "" : y._isUint8Array(t) ? (t = y._uint8ArrayToBuffer(t), r = "") : null != t && (n = new R("chunk", ["string", "Buffer", "Uint8Array"], t))), n) j(e, n);
            else if (null === t) s.reading = !1,
                function(e, t) {
                    if (E("onEofChunk"), !t.ended) {
                        if (t.decoder) {
                            let e = t.decoder.end();
                            e && e.length && (t.buffer.push(e), t.length += t.objectMode ? 1 : e.length)
                        }
                        t.ended = !0, t.sync ? V(e) : (t.needReadable = !1, t.emittedReadable = !0, z(e))
                    }
                }(e, s);
            else if (s.objectMode || t && t.length > 0)
                if (i)
                    if (s.endEmitted) j(e, new B);
                    else {
                        if (s.destroyed || s.errored) return !1;
                        q(e, s, t, !0)
                    }
            else if (s.ended) j(e, new P);
            else {
                if (s.destroyed || s.errored) return !1;
                s.reading = !1, s.decoder && !r ? (t = s.decoder.write(t), s.objectMode || 0 !== t.length ? q(e, s, t, !1) : K(e, s)) : q(e, s, t, !1)
            } else i || (s.reading = !1, K(e, s));
            return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
        }

        function q(e, t, r, i) {
            t.flowing && 0 === t.length && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null, t.dataEmitted = !0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && V(e)), K(e, t)
        }
        F.prototype.destroy = A.destroy, F.prototype._undestroy = A.undestroy, F.prototype._destroy = (e, t) => {
            t(e)
        }, F.prototype[b.captureRejectionSymbol] = function(e) {
            this.destroy(e)
        }, F.prototype.push = function(e, t) {
            return W(this, e, t, !1)
        }, F.prototype.unshift = function(e, t) {
            return W(this, e, t, !0)
        }, F.prototype.isPaused = function() {
            let e = this._readableState;
            return !0 === e[N] || !1 === e.flowing
        }, F.prototype.setEncoding = function(e) {
            let t = new M(e);
            this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
            let r = this._readableState.buffer,
                i = "";
            for (let e of r) i += t.write(e);
            return r.clear(), "" !== i && r.push(i), this._readableState.length = i.length, this
        };
        var $;

        function H(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : s(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0
        }

        function V(e) {
            let t = e._readableState;
            E("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (E("emitReadable", t.flowing), t.emittedReadable = !0, r.nextTick(z, e))
        }

        function z(e) {
            let t = e._readableState;
            E("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && !t.errored && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, X(e)
        }

        function K(e, t) {
            !t.readingMore && t.constructed && (t.readingMore = !0, r.nextTick(Y, e, t))
        }

        function Y(e, t) {
            for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                let r = t.length;
                if (E("maybeReadMore read 0"), e.read(0), r === t.length) break
            }
            t.readingMore = !1
        }

        function G(e) {
            let t = e._readableState;
            t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !1 === t[N] ? t.flowing = !0 : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null)
        }

        function Q(e) {
            E("readable nexttick read 0"), e.read(0)
        }

        function J(e, t) {
            E("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), X(e), t.flowing && !t.reading && e.read(0)
        }

        function X(e) {
            let t = e._readableState;
            for (E("flow", t.flowing); t.flowing && null !== e.read(););
        }

        function Z(e, t) {
            "function" != typeof e.read && (e = F.wrap(e, {
                objectMode: !0
            }));
            let r = async function*(e, t) {
                let r = L;

                function i(t) {
                    this === e ? (r(), r = L) : r = t
                }
                e.on("readable", i);
                let n, s = v(e, {
                    writable: !1
                }, (e => {
                    n = e ? k(n, e) : null, r(), r = L
                }));
                try {
                    for (;;) {
                        let t = e.destroyed ? null : e.read();
                        if (null !== t) yield t;
                        else {
                            if (n) throw n;
                            if (null === n) return;
                            await new f(i)
                        }
                    }
                } catch (e) {
                    throw n = k(n, e), n
                } finally {
                    !n && !1 === t?.destroyOnReturn || void 0 !== n && !e._readableState.autoDestroy ? (e.off("readable", i), s()) : A.destroyer(e, null)
                }
            }(e, t);
            return r.stream = e, r
        }

        function ee(e, t) {
            if (0 === t.length) return null;
            let r;
            return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r
        }

        function te(e) {
            let t = e._readableState;
            E("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, r.nextTick(re, t, e))
        }

        function re(e, t) {
            if (E("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && 0 === e.length)
                if (e.endEmitted = !0, t.emit("end"), t.writable && !1 === t.allowHalfOpen) r.nextTick(ie, t);
                else if (e.autoDestroy) {
                let e = t._writableState;
                (!e || e.autoDestroy && (e.finished || !1 === e.writable)) && t.destroy()
            }
        }

        function ie(e) {
            e.writable && !e.writableEnded && !e.destroyed && e.end()
        }

        function ne() {
            return void 0 === $ && ($ = {}), $
        }
        F.prototype.read = function(e) {
            E("read", e), void 0 === e ? e = NaN : n(e) || (e = o(e, 10));
            let t = this._readableState,
                r = e;
            if (e > t.highWaterMark && (t.highWaterMark = function(e) {
                    if (e > 1073741824) throw new O("size", "<= 1GiB", e);
                    return e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, ++e
                }(e)), 0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return E("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? te(this) : V(this), null;
            if (0 === (e = H(e, t)) && t.ended) return 0 === t.length && te(this), null;
            let i, s = t.needReadable;
            if (E("need readable", s), (0 === t.length || t.length - e < t.highWaterMark) && (s = !0, E("length less than watermark", s)), t.ended || t.reading || t.destroyed || t.errored || !t.constructed) s = !1, E("reading, ended or constructing", s);
            else if (s) {
                E("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0);
                try {
                    this._read(t.highWaterMark)
                } catch (e) {
                    j(this, e)
                }
                t.sync = !1, t.reading || (e = H(r, t))
            }
            return i = e > 0 ? ee(e, t) : null, null === i ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && te(this)), null !== i && !t.errorEmitted && !t.closeEmitted && (t.dataEmitted = !0, this.emit("data", i)), i
        }, F.prototype._read = () => {
            throw new C("_read()")
        }, F.prototype.pipe = function(e, t) {
            let i = this,
                n = this._readableState;
            1 === n.pipes.length && (n.multiAwaitDrain || (n.multiAwaitDrain = !0, n.awaitDrainWriters = new d(n.awaitDrainWriters ? [n.awaitDrainWriters] : []))), n.pipes.push(e), E("pipe count=%d opts=%j", n.pipes.length, t);
            let s = t && !1 === t.end || e === r.stdout || e === r.stderr ? b : a;

            function o(t, r) {
                E("onunpipe"), t === i && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, E("cleanup"), e.removeListener("close", p), e.removeListener("finish", g), l && e.removeListener("drain", l), e.removeListener("error", f), e.removeListener("unpipe", o), i.removeListener("end", a), i.removeListener("end", b), i.removeListener("data", c), h = !0, l && n.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && l())
            }

            function a() {
                E("onend"), e.end()
            }
            n.endEmitted ? r.nextTick(s) : i.once("end", s), e.on("unpipe", o);
            let l, h = !1;

            function u() {
                h || (1 === n.pipes.length && n.pipes[0] === e ? (E("false write response, pause", 0), n.awaitDrainWriters = e, n.multiAwaitDrain = !1) : n.pipes.length > 1 && n.pipes.includes(e) && (E("false write response, pause", n.awaitDrainWriters.size), n.awaitDrainWriters.add(e)), i.pause()), l || (l = function(e, t) {
                    return () => {
                        let r = e._readableState;
                        r.awaitDrainWriters === t ? (E("pipeOnDrain", 1), r.awaitDrainWriters = null) : r.multiAwaitDrain && (E("pipeOnDrain", r.awaitDrainWriters.size), r.awaitDrainWriters.delete(t)), (!r.awaitDrainWriters || 0 === r.awaitDrainWriters.size) && e.listenerCount("data") && e.resume()
                    }
                }(i, e), e.on("drain", l))
            }

            function c(t) {
                E("ondata");
                let r = e.write(t);
                E("dest.write", r), !1 === r && u()
            }

            function f(t) {
                if (E("onerror", t), b(), e.removeListener("error", f), 0 === e.listenerCount("error")) {
                    let r = e._writableState || e._readableState;
                    r && !r.errorEmitted ? j(e, t) : e.emit("error", t)
                }
            }

            function p() {
                e.removeListener("finish", g), b()
            }

            function g() {
                E("onfinish"), e.removeListener("close", p), b()
            }

            function b() {
                E("unpipe"), i.unpipe(e)
            }
            return i.on("data", c), m(e, "error", f), e.once("close", p), e.once("finish", g), e.emit("pipe", i), !0 === e.writableNeedDrain ? n.flowing && u() : n.flowing || (E("pipe resume"), i.resume()), e
        }, F.prototype.unpipe = function(e) {
            let t = this._readableState;
            if (0 === t.pipes.length) return this;
            if (!e) {
                let e = t.pipes;
                t.pipes = [], this.pause();
                for (let t = 0; t < e.length; t++) e[t].emit("unpipe", this, {
                    hasUnpiped: !1
                });
                return this
            }
            let r = i(t.pipes, e);
            return -1 === r || (t.pipes.splice(r, 1), 0 === t.pipes.length && this.pause(), e.emit("unpipe", this, {
                hasUnpiped: !1
            })), this
        }, F.prototype.on = function(e, t) {
            let i = y.prototype.on.call(this, e, t),
                n = this._readableState;
            return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, !1 !== n.flowing && this.resume()) : "readable" === e && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, E("on readable", n.length, n.reading), n.length ? V(this) : n.reading || r.nextTick(Q, this)), i
        }, F.prototype.addListener = F.prototype.on, F.prototype.removeListener = function(e, t) {
            let i = y.prototype.removeListener.call(this, e, t);
            return "readable" === e && r.nextTick(G, this), i
        }, F.prototype.off = F.prototype.removeListener, F.prototype.removeAllListeners = function(e) {
            let t = y.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" === e || void 0 === e) && r.nextTick(G, this), t
        }, F.prototype.resume = function() {
            let e = this._readableState;
            return e.flowing || (E("resume"), e.flowing = !e.readableListening, function(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(J, e, t))
            }(this, e)), e[N] = !1, this
        }, F.prototype.pause = function() {
            return E("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (E("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[N] = !0, this
        }, F.prototype.wrap = function(e) {
            let t = !1;
            e.on("data", (r => {
                !this.push(r) && e.pause && (t = !0, e.pause())
            })), e.on("end", (() => {
                this.push(null)
            })), e.on("error", (e => {
                j(this, e)
            })), e.on("close", (() => {
                this.destroy()
            })), e.on("destroy", (() => {
                this.destroy()
            })), this._read = () => {
                t && e.resume && (t = !1, e.resume())
            };
            let r = u(e);
            for (let t = 1; t < r.length; t++) {
                let i = r[t];
                void 0 === this[i] && "function" == typeof e[i] && (this[i] = e[i].bind(e))
            }
            return this
        }, F.prototype[p] = function() {
            return Z(this)
        }, F.prototype.iterator = function(e) {
            return void 0 !== e && x(e, "options"), Z(this, e)
        }, h(F.prototype, {
            readable: {
                __proto__: null,
                get() {
                    let e = this._readableState;
                    return !(!e || !1 === e.readable || e.destroyed || e.errorEmitted || e.endEmitted)
                },
                set(e) {
                    this._readableState && (this._readableState.readable = !!e)
                }
            },
            readableDidRead: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._readableState.dataEmitted
                }
            },
            readableAborted: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return !(!1 === this._readableState.readable || !this._readableState.destroyed && !this._readableState.errored || this._readableState.endEmitted)
                }
            },
            readableHighWaterMark: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._readableState.highWaterMark
                }
            },
            readableBuffer: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._readableState && this._readableState.buffer
                }
            },
            readableFlowing: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._readableState.flowing
                },
                set(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            },
            readableLength: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._readableState.length
                }
            },
            readableObjectMode: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return !!this._readableState && this._readableState.objectMode
                }
            },
            readableEncoding: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._readableState ? this._readableState.encoding : null
                }
            },
            errored: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._readableState ? this._readableState.errored : null
                }
            },
            closed: {
                __proto__: null,
                get() {
                    return !!this._readableState && this._readableState.closed
                }
            },
            destroyed: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return !!this._readableState && this._readableState.destroyed
                },
                set(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            },
            readableEnded: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return !!this._readableState && this._readableState.endEmitted
                }
            }
        }), h(D.prototype, {
            pipesCount: {
                __proto__: null,
                get() {
                    return this.pipes.length
                }
            },
            paused: {
                __proto__: null,
                get() {
                    return !1 !== this[N]
                },
                set(e) {
                    this[N] = !!e
                }
            }
        }), F._fromList = ee, F.from = (e, t) => U(F, e, t), F.fromWeb = (e, t) => ne().newStreamReadableFromReadableStream(e, t), F.toWeb = (e, t) => ne().newReadableStreamFromStreamReadable(e, t), F.wrap = (e, t) => {
            var r, i;
            return new F({
                objectMode: null === (r = null !== (i = e.readableObjectMode) && void 0 !== i ? i : e.objectMode) || void 0 === r || r,
                ...t,
                destroy(t, r) {
                    A.destroyer(e, t), r(t)
                }
            }).wrap(e)
        }
    })),
    ri = s(((e, t) => {
        l(), Ze(), De();
        var r = ot(),
            {
                ArrayPrototypeSlice: i,
                Error: n,
                FunctionPrototypeSymbolHasInstance: s,
                ObjectDefineProperty: o,
                ObjectDefineProperties: h,
                ObjectSetPrototypeOf: u,
                StringPrototypeToLowerCase: c,
                Symbol: f,
                SymbolHasInstance: d
            } = tt();
        t.exports = M, M.WritableState = x;
        var {
            EventEmitter: p
        } = (Nt(), a(kt)), g = Mt().Stream, {
            Buffer: b
        } = (Xe(), a(Fe)), y = ht(), {
            addAbortSignal: m
        } = Ut(), {
            getHighWaterMark: _,
            getDefaultHighWaterMark: w
        } = jt(), {
            ERR_INVALID_ARG_TYPE: v,
            ERR_METHOD_NOT_IMPLEMENTED: E,
            ERR_MULTIPLE_CALLBACK: S,
            ERR_STREAM_CANNOT_PIPE: A,
            ERR_STREAM_DESTROYED: T,
            ERR_STREAM_ALREADY_FINISHED: I,
            ERR_STREAM_NULL_VALUES: k,
            ERR_STREAM_WRITE_AFTER_END: R,
            ERR_UNKNOWN_ENCODING: C
        } = nt().codes, {
            errorOrDestroy: O
        } = y;

        function P() {}
        u(M.prototype, g.prototype), u(M, g);
        var B = f("kOnFinished");

        function x(e, t, r) {
            "boolean" != typeof r && (r = t instanceof ni()), this.objectMode = !(!e || !e.objectMode), r && (this.objectMode = this.objectMode || !(!e || !e.writableObjectMode)), this.highWaterMark = e ? _(this, e, "writableHighWaterMark", r) : w(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
            let i = !(!e || !1 !== e.decodeStrings);
            this.decodeStrings = !i, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = D.bind(void 0, t), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, N(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !e || !1 !== e.emitClose, this.autoDestroy = !e || !1 !== e.autoDestroy, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[B] = []
        }

        function N(e) {
            e.buffered = [], e.bufferedIndex = 0, e.allBuffers = !0, e.allNoop = !0
        }

        function M(e) {
            let t = this instanceof ni();
            if (!t && !s(M, this)) return new M(e);
            this._writableState = new x(e, this, t), e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final), "function" == typeof e.construct && (this._construct = e.construct), e.signal && m(e.signal, this)), g.call(this, e), y.construct(this, (() => {
                let e = this._writableState;
                e.writing || $(this, e), z(this, e)
            }))
        }

        function U(e, t, i, n) {
            let s, o = e._writableState;
            if ("function" == typeof i) n = i, i = o.defaultEncoding;
            else {
                if (i) {
                    if ("buffer" !== i && !b.isEncoding(i)) throw new C(i)
                } else i = o.defaultEncoding;
                "function" != typeof n && (n = P)
            }
            if (null === t) throw new k;
            if (!o.objectMode)
                if ("string" == typeof t) !1 !== o.decodeStrings && (t = b.from(t, i), i = "buffer");
                else if (t instanceof b) i = "buffer";
            else {
                if (!g._isUint8Array(t)) throw new v("chunk", ["string", "Buffer", "Uint8Array"], t);
                t = g._uint8ArrayToBuffer(t), i = "buffer"
            }
            return o.ending ? s = new R : o.destroyed && (s = new T("write")), s ? (r.nextTick(n, s), O(e, s, !0), s) : (o.pendingcb++, function(e, t, r, i, n) {
                let s = t.objectMode ? 1 : r.length;
                t.length += s;
                let o = t.length < t.highWaterMark;
                return o || (t.needDrain = !0), t.writing || t.corked || t.errored || !t.constructed ? (t.buffered.push({
                    chunk: r,
                    encoding: i,
                    callback: n
                }), t.allBuffers && "buffer" !== i && (t.allBuffers = !1), t.allNoop && n !== P && (t.allNoop = !1)) : (t.writelen = s, t.writecb = n, t.writing = !0, t.sync = !0, e._write(r, i, t.onwrite), t.sync = !1), o && !t.errored && !t.destroyed
            }(e, o, t, i, n))
        }

        function L(e, t, r, i, n, s, o) {
            t.writelen = i, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new T("write")) : r ? e._writev(n, t.onwrite) : e._write(n, s, t.onwrite), t.sync = !1
        }

        function j(e, t, r, i) {
            --t.pendingcb, i(r), q(t), O(e, r)
        }

        function D(e, t) {
            let i = e._writableState,
                n = i.sync,
                s = i.writecb;
            "function" == typeof s ? (i.writing = !1, i.writecb = null, i.length -= i.writelen, i.writelen = 0, t ? (t.stack, i.errored || (i.errored = t), e._readableState && !e._readableState.errored && (e._readableState.errored = t), n ? r.nextTick(j, e, i, t, s) : j(e, i, t, s)) : (i.buffered.length > i.bufferedIndex && $(e, i), n ? null !== i.afterWriteTickInfo && i.afterWriteTickInfo.cb === s ? i.afterWriteTickInfo.count++ : (i.afterWriteTickInfo = {
                count: 1,
                cb: s,
                stream: e,
                state: i
            }, r.nextTick(F, i.afterWriteTickInfo)) : W(e, i, 1, s))) : O(e, new S)
        }

        function F({
            stream: e,
            state: t,
            count: r,
            cb: i
        }) {
            return t.afterWriteTickInfo = null, W(e, t, r, i)
        }

        function W(e, t, r, i) {
            for (!t.ending && !e.destroyed && 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")); r-- > 0;) t.pendingcb--, i();
            t.destroyed && q(t), z(e, t)
        }

        function q(e) {
            if (e.writing) return;
            for (let r = e.bufferedIndex; r < e.buffered.length; ++r) {
                var t;
                let {
                    chunk: i,
                    callback: n
                } = e.buffered[r], s = e.objectMode ? 1 : i.length;
                e.length -= s, n(null !== (t = e.errored) && void 0 !== t ? t : new T("write"))
            }
            let r = e[B].splice(0);
            for (let t = 0; t < r.length; t++) {
                var i;
                r[t](null !== (i = e.errored) && void 0 !== i ? i : new T("end"))
            }
            N(e)
        }

        function $(e, t) {
            if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed) return;
            let {
                buffered: r,
                bufferedIndex: n,
                objectMode: s
            } = t, o = r.length - n;
            if (!o) return;
            let a = n;
            if (t.bufferProcessing = !0, o > 1 && e._writev) {
                t.pendingcb -= o - 1;
                let n = t.allNoop ? P : e => {
                        for (let t = a; t < r.length; ++t) r[t].callback(e)
                    },
                    s = t.allNoop && 0 === a ? r : i(r, a);
                s.allBuffers = t.allBuffers, L(e, t, !0, t.length, s, "", n), N(t)
            } else {
                do {
                    let {
                        chunk: i,
                        encoding: n,
                        callback: o
                    } = r[a];
                    r[a++] = null, L(e, t, !1, s ? 1 : i.length, i, n, o)
                } while (a < r.length && !t.writing);
                a === r.length ? N(t) : a > 256 ? (r.splice(0, a), t.bufferedIndex = 0) : t.bufferedIndex = a
            }
            t.bufferProcessing = !1
        }

        function H(e) {
            return e.ending && !e.destroyed && e.constructed && 0 === e.length && !e.errored && 0 === e.buffered.length && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted
        }

        function V(e, t) {
            !t.prefinished && !t.finalCalled && ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.finalCalled = !0, function(e, t) {
                let i = !1;

                function n(n) {
                    if (i) O(e, n ?? S());
                    else if (i = !0, t.pendingcb--, n) {
                        let r = t[B].splice(0);
                        for (let e = 0; e < r.length; e++) r[e](n);
                        O(e, n, t.sync)
                    } else H(t) && (t.prefinished = !0, e.emit("prefinish"), t.pendingcb++, r.nextTick(K, e, t))
                }
                t.sync = !0, t.pendingcb++;
                try {
                    e._final(n)
                } catch (e) {
                    n(e)
                }
                t.sync = !1
            }(e, t)))
        }

        function z(e, t, i) {
            H(t) && (V(e, t), 0 === t.pendingcb && (i ? (t.pendingcb++, r.nextTick(((e, t) => {
                H(t) ? K(e, t) : t.pendingcb--
            }), e, t)) : H(t) && (t.pendingcb++, K(e, t))))
        }

        function K(e, t) {
            t.pendingcb--, t.finished = !0;
            let r = t[B].splice(0);
            for (let e = 0; e < r.length; e++) r[e]();
            if (e.emit("finish"), t.autoDestroy) {
                let t = e._readableState;
                (!t || t.autoDestroy && (t.endEmitted || !1 === t.readable)) && e.destroy()
            }
        }
        x.prototype.getBuffer = function() {
            return i(this.buffered, this.bufferedIndex)
        }, o(x.prototype, "bufferedRequestCount", {
            __proto__: null,
            get() {
                return this.buffered.length - this.bufferedIndex
            }
        }), o(M, d, {
            __proto__: null,
            value(e) {
                return !!s(this, e) || this === M && (e && e._writableState instanceof x)
            }
        }), M.prototype.pipe = function() {
            O(this, new A)
        }, M.prototype.write = function(e, t, r) {
            return !0 === U(this, e, t, r)
        }, M.prototype.cork = function() {
            this._writableState.corked++
        }, M.prototype.uncork = function() {
            let e = this._writableState;
            e.corked && (e.corked--, e.writing || $(this, e))
        }, M.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = c(e)), !b.isEncoding(e)) throw new C(e);
            return this._writableState.defaultEncoding = e, this
        }, M.prototype._write = function(e, t, r) {
            if (!this._writev) throw new E("_write()");
            this._writev([{
                chunk: e,
                encoding: t
            }], r)
        }, M.prototype._writev = null, M.prototype.end = function(e, t, i) {
            let s, o = this._writableState;
            if ("function" == typeof e ? (i = e, e = null, t = null) : "function" == typeof t && (i = t, t = null), null != e) {
                let r = U(this, e, t);
                r instanceof n && (s = r)
            }
            return o.corked && (o.corked = 1, this.uncork()), s || (o.errored || o.ending ? o.finished ? s = new I("end") : o.destroyed && (s = new T("end")) : (o.ending = !0, z(this, o, !0), o.ended = !0)), "function" == typeof i && (s || o.finished ? r.nextTick(i, s) : o[B].push(i)), this
        }, h(M.prototype, {
            closed: {
                __proto__: null,
                get() {
                    return !!this._writableState && this._writableState.closed
                }
            },
            destroyed: {
                __proto__: null,
                get() {
                    return !!this._writableState && this._writableState.destroyed
                },
                set(e) {
                    this._writableState && (this._writableState.destroyed = e)
                }
            },
            writable: {
                __proto__: null,
                get() {
                    let e = this._writableState;
                    return !(!e || !1 === e.writable || e.destroyed || e.errored || e.ending || e.ended)
                },
                set(e) {
                    this._writableState && (this._writableState.writable = !!e)
                }
            },
            writableFinished: {
                __proto__: null,
                get() {
                    return !!this._writableState && this._writableState.finished
                }
            },
            writableObjectMode: {
                __proto__: null,
                get() {
                    return !!this._writableState && this._writableState.objectMode
                }
            },
            writableBuffer: {
                __proto__: null,
                get() {
                    return this._writableState && this._writableState.getBuffer()
                }
            },
            writableEnded: {
                __proto__: null,
                get() {
                    return !!this._writableState && this._writableState.ending
                }
            },
            writableNeedDrain: {
                __proto__: null,
                get() {
                    let e = this._writableState;
                    return !!e && (!e.destroyed && !e.ending && e.needDrain)
                }
            },
            writableHighWaterMark: {
                __proto__: null,
                get() {
                    return this._writableState && this._writableState.highWaterMark
                }
            },
            writableCorked: {
                __proto__: null,
                get() {
                    return this._writableState ? this._writableState.corked : 0
                }
            },
            writableLength: {
                __proto__: null,
                get() {
                    return this._writableState && this._writableState.length
                }
            },
            errored: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return this._writableState ? this._writableState.errored : null
                }
            },
            writableAborted: {
                __proto__: null,
                enumerable: !1,
                get() {
                    return !(!1 === this._writableState.writable || !this._writableState.destroyed && !this._writableState.errored || this._writableState.finished)
                }
            }
        });
        var Y, G = y.destroy;

        function Q() {
            return void 0 === Y && (Y = {}), Y
        }
        M.prototype.destroy = function(e, t) {
            let i = this._writableState;
            return !i.destroyed && (i.bufferedIndex < i.buffered.length || i[B].length) && r.nextTick(q, i), G.call(this, e, t), this
        }, M.prototype._undestroy = y.undestroy, M.prototype._destroy = (e, t) => {
            t(e)
        }, M.prototype[p.captureRejectionSymbol] = function(e) {
            this.destroy(e)
        }, M.fromWeb = (e, t) => Q().newStreamWritableFromWritableStream(e, t), M.toWeb = e => Q().newWritableStreamFromStreamWritable(e)
    })),
    ii = s(((e, t) => {
        l(), Ze(), De();
        var r = ot(),
            i = (Xe(), a(Fe)),
            {
                isReadable: n,
                isWritable: s,
                isIterable: o,
                isNodeStream: h,
                isReadableNodeStream: u,
                isWritableNodeStream: c,
                isDuplexNodeStream: f
            } = at(),
            d = lt(),
            {
                AbortError: p,
                codes: {
                    ERR_INVALID_ARG_TYPE: g,
                    ERR_INVALID_RETURN_VALUE: b
                }
            } = nt(),
            {
                destroyer: y
            } = ht(),
            m = ni(),
            _ = ti(),
            {
                createDeferredPromise: w
            } = rt(),
            v = ei(),
            E = globalThis.Blob || i.Blob,
            S = typeof E < "u" ? e => e instanceof E : () => !1,
            A = globalThis.AbortController || it().AbortController,
            {
                FunctionPrototypeCall: T
            } = tt(),
            I = class extends m {
                constructor(e) {
                    super(e), !1 === e?.readable && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), !1 === e?.writable && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)
                }
            };

        function k(e) {
            let t, r, i, o, a, l = e.readable && "function" != typeof e.readable.read ? _.wrap(e.readable) : e.readable,
                h = e.writable,
                u = !!n(l),
                c = !!s(h);

            function f(e) {
                let t = o;
                o = null, t ? t(e) : e && a.destroy(e)
            }
            return a = new I({
                readableObjectMode: !(null == l || !l.readableObjectMode),
                writableObjectMode: !(null == h || !h.writableObjectMode),
                readable: u,
                writable: c
            }), c && (d(h, (e => {
                c = !1, e && y(l, e), f(e)
            })), a._write = (e, r, i) => {
                h.write(e, r) ? i() : t = i
            }, a._final = e => {
                h.end(), r = e
            }, h.on("drain", (() => {
                if (t) {
                    let e = t;
                    t = null, e()
                }
            })), h.on("finish", (() => {
                if (r) {
                    let e = r;
                    r = null, e()
                }
            }))), u && (d(l, (e => {
                u = !1, e && y(l, e), f(e)
            })), l.on("readable", (() => {
                if (i) {
                    let e = i;
                    i = null, e()
                }
            })), l.on("end", (() => {
                a.push(null)
            })), a._read = () => {
                for (;;) {
                    let e = l.read();
                    if (null === e) return void(i = a._read);
                    if (!a.push(e)) return
                }
            }), a._destroy = (e, n) => {
                !e && null !== o && (e = new p), i = null, t = null, r = null, null === o ? n(e) : (o = n, y(h, e), y(l, e))
            }, a
        }
        t.exports = function e(t, i) {
            if (f(t)) return t;
            if (u(t)) return k({
                readable: t
            });
            if (c(t)) return k({
                writable: t
            });
            if (h(t)) return k({
                writable: !1,
                readable: !1
            });
            if ("function" == typeof t) {
                let {
                    value: e,
                    write: n,
                    final: s,
                    destroy: a
                } = function(e) {
                    let {
                        promise: t,
                        resolve: i
                    } = w(), n = new A, s = n.signal;
                    return {
                        value: e(async function*() {
                            for (;;) {
                                let e = t;
                                t = null;
                                let {
                                    chunk: n,
                                    done: o,
                                    cb: a
                                } = await e;
                                if (r.nextTick(a), o) return;
                                if (s.aborted) throw new p(void 0, {
                                    cause: s.reason
                                });
                                ({
                                    promise: t,
                                    resolve: i
                                } = w()), yield n
                            }
                        }(), {
                            signal: s
                        }),
                        write(e, t, r) {
                            let n = i;
                            i = null, n({
                                chunk: e,
                                done: !1,
                                cb: r
                            })
                        },
                        final(e) {
                            let t = i;
                            i = null, t({
                                done: !0,
                                cb: e
                            })
                        },
                        destroy(e, t) {
                            n.abort(), t(e)
                        }
                    }
                }(t);
                if (o(e)) return v(I, e, {
                    objectMode: !0,
                    write: n,
                    final: s,
                    destroy: a
                });
                let l = e?.then;
                if ("function" == typeof l) {
                    let t, i = T(l, e, (e => {
                        if (null != e) throw new b("nully", "body", e)
                    }), (e => {
                        y(t, e)
                    }));
                    return t = new I({
                        objectMode: !0,
                        readable: !1,
                        write: n,
                        final(e) {
                            s((async () => {
                                try {
                                    await i, r.nextTick(e, null)
                                } catch (t) {
                                    r.nextTick(e, t)
                                }
                            }))
                        },
                        destroy: a
                    })
                }
                throw new b("Iterable, AsyncIterable or AsyncFunction", i, e)
            }
            if (S(t)) return e(t.arrayBuffer());
            if (o(t)) return v(I, t, {
                objectMode: !0,
                writable: !1
            });
            if ("object" == typeof t?.writable || "object" == typeof t?.readable) {
                return k({
                    readable: null != t && t.readable ? u(t?.readable) ? t?.readable : e(t.readable) : void 0,
                    writable: null != t && t.writable ? c(t?.writable) ? t?.writable : e(t.writable) : void 0
                })
            }
            let n = t?.then;
            if ("function" == typeof n) {
                let e;
                return T(n, t, (t => {
                    null != t && e.push(t), e.push(null)
                }), (t => {
                    y(e, t)
                })), e = new I({
                    objectMode: !0,
                    writable: !1,
                    read() {}
                })
            }
            throw new g(i, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t)
        }
    })),
    ni = s(((e, t) => {
        l(), Ze(), De();
        var {
            ObjectDefineProperties: r,
            ObjectGetOwnPropertyDescriptor: i,
            ObjectKeys: n,
            ObjectSetPrototypeOf: s
        } = tt();
        t.exports = c;
        var o, a, h = ti(),
            u = ri();
        s(c.prototype, h.prototype), s(c, h);
        {
            let e = n(u.prototype);
            for (let t = 0; t < e.length; t++) {
                let r = e[t];
                c.prototype[r] || (c.prototype[r] = u.prototype[r])
            }
        }

        function c(e) {
            if (!(this instanceof c)) return new c(e);
            h.call(this, e), u.call(this, e), e ? (this.allowHalfOpen = !1 !== e.allowHalfOpen, !1 === e.readable && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), !1 === e.writable && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0
        }

        function f() {
            return void 0 === o && (o = {}), o
        }
        r(c.prototype, {
            writable: {
                __proto__: null,
                ...i(u.prototype, "writable")
            },
            writableHighWaterMark: {
                __proto__: null,
                ...i(u.prototype, "writableHighWaterMark")
            },
            writableObjectMode: {
                __proto__: null,
                ...i(u.prototype, "writableObjectMode")
            },
            writableBuffer: {
                __proto__: null,
                ...i(u.prototype, "writableBuffer")
            },
            writableLength: {
                __proto__: null,
                ...i(u.prototype, "writableLength")
            },
            writableFinished: {
                __proto__: null,
                ...i(u.prototype, "writableFinished")
            },
            writableCorked: {
                __proto__: null,
                ...i(u.prototype, "writableCorked")
            },
            writableEnded: {
                __proto__: null,
                ...i(u.prototype, "writableEnded")
            },
            writableNeedDrain: {
                __proto__: null,
                ...i(u.prototype, "writableNeedDrain")
            },
            destroyed: {
                __proto__: null,
                get() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set(e) {
                    this._readableState && this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            }
        }), c.fromWeb = (e, t) => f().newStreamDuplexFromReadableWritablePair(e, t), c.toWeb = e => f().newReadableWritablePairFromDuplex(e), c.from = e => (a || (a = ii()), a(e, "body"))
    })),
    si = s(((e, t) => {
        l(), Ze(), De();
        var {
            ObjectSetPrototypeOf: r,
            Symbol: i
        } = tt();
        t.exports = h;
        var {
            ERR_METHOD_NOT_IMPLEMENTED: n
        } = nt().codes, s = ni(), {
            getHighWaterMark: o
        } = jt();
        r(h.prototype, s.prototype), r(h, s);
        var a = i("kCallback");

        function h(e) {
            if (!(this instanceof h)) return new h(e);
            let t = e ? o(this, e, "readableHighWaterMark", !0) : null;
            0 === t && (e = {
                ...e,
                highWaterMark: null,
                readableHighWaterMark: t,
                writableHighWaterMark: e.writableHighWaterMark || 0
            }), s.call(this, e), this._readableState.sync = !1, this[a] = null, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", c)
        }

        function u(e) {
            "function" != typeof this._flush || this.destroyed ? (this.push(null), e && e()) : this._flush(((t, r) => {
                t ? e ? e(t) : this.destroy(t) : (null != r && this.push(r), this.push(null), e && e())
            }))
        }

        function c() {
            this._final !== u && u.call(this)
        }
        h.prototype._final = u, h.prototype._transform = () => {
            throw new n("_transform()")
        }, h.prototype._write = function(e, t, r) {
            let i = this._readableState,
                n = this._writableState,
                s = i.length;
            this._transform(e, t, ((e, t) => {
                e ? r(e) : (null != t && this.push(t), n.ended || s === i.length || i.length < i.highWaterMark ? r() : this[a] = r)
            }))
        }, h.prototype._read = function() {
            if (this[a]) {
                let e = this[a];
                this[a] = null, e()
            }
        }
    })),
    oi = s(((e, t) => {
        l(), Ze(), De();
        var {
            ObjectSetPrototypeOf: r
        } = tt();
        t.exports = n;
        var i = si();

        function n(e) {
            if (!(this instanceof n)) return new n(e);
            i.call(this, e)
        }
        r(n.prototype, i.prototype), r(n, i), n.prototype._transform = (e, t, r) => {
            r(null, e)
        }
    })),
    ai = s(((e, t) => {
        l(), Ze(), De();
        var r, i, n = ot(),
            {
                ArrayIsArray: s,
                Promise: o,
                SymbolAsyncIterator: a
            } = tt(),
            h = lt(),
            {
                once: u
            } = rt(),
            c = ht(),
            f = ni(),
            {
                aggregateTwoErrors: d,
                codes: {
                    ERR_INVALID_ARG_TYPE: p,
                    ERR_INVALID_RETURN_VALUE: g,
                    ERR_MISSING_ARGS: b,
                    ERR_STREAM_DESTROYED: y,
                    ERR_STREAM_PREMATURE_CLOSE: m
                },
                AbortError: _
            } = nt(),
            {
                validateFunction: w,
                validateAbortSignal: v
            } = st(),
            {
                isIterable: E,
                isReadable: S,
                isReadableNodeStream: A,
                isNodeStream: T,
                isTransformStream: I,
                isWebStream: k,
                isReadableStream: R,
                isReadableEnded: C
            } = at(),
            O = globalThis.AbortController || it().AbortController;

        function P(e, t, r) {
            let i = !1;
            return e.on("close", (() => {
                i = !0
            })), {
                destroy(t) {
                    i || (i = !0, c.destroyer(e, t || new y("pipe")))
                },
                cleanup: h(e, {
                    readable: t,
                    writable: r
                }, (e => {
                    i = !e
                }))
            }
        }

        function B(e) {
            if (E(e)) return e;
            if (A(e)) return async function*(e) {
                i || (i = ti()), yield* i.prototype[a].call(e)
            }(e);
            throw new p("val", ["Readable", "Iterable", "AsyncIterable"], e)
        }
        async function x(e, t, r, {
            end: i
        }) {
            let n, s = null,
                a = e => {
                    if (e && (n = e), s) {
                        let e = s;
                        s = null, e()
                    }
                },
                l = () => new o(((e, t) => {
                    n ? t(n) : s = () => {
                        n ? t(n) : e()
                    }
                }));
            t.on("drain", a);
            let u = h(t, {
                readable: !1
            }, a);
            try {
                t.writableNeedDrain && await l();
                for await (let r of e) t.write(r) || await l();
                i && t.end(), await l(), r()
            } catch (e) {
                r(n !== e ? d(n, e) : e)
            } finally {
                u(), t.off("drain", a)
            }
        }
        async function N(e, t, r, {
            end: i
        }) {
            I(t) && (t = t.writable);
            let n = t.getWriter();
            try {
                for await (let t of e) await n.ready, n.write(t).catch((() => {}));
                await n.ready, i && await n.close(), r()
            } catch (e) {
                try {
                    await n.abort(e), r(e)
                } catch (e) {
                    r(e)
                }
            }
        }

        function M(e, t, i) {
            if (1 === e.length && s(e[0]) && (e = e[0]), e.length < 2) throw new b("streams");
            let o = new O,
                a = o.signal,
                l = i?.signal,
                h = [];

            function u() {
                M(new _)
            }
            v(l, "options.signal"), l?.addEventListener("abort", u);
            let c, d, y, m = [],
                w = 0;

            function C(e) {
                M(e, 0 == --w)
            }

            function M(e, r) {
                if (e && (!c || "ERR_STREAM_PREMATURE_CLOSE" === c.code) && (c = e), c || r) {
                    for (; m.length;) m.shift()(c);
                    l?.removeEventListener("abort", u), o.abort(), r && (c || h.forEach((e => e())), n.nextTick(t, c, d))
                }
            }
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    o = t < e.length - 1,
                    l = t > 0,
                    u = o || !1 !== i?.end,
                    c = t === e.length - 1;
                if (T(s)) {
                    let e = e => {
                        e && "AbortError" !== e.name && "ERR_STREAM_PREMATURE_CLOSE" !== e.code && C(e)
                    };
                    if (u) {
                        let {
                            destroy: e,
                            cleanup: t
                        } = P(s, o, l);
                        m.push(e), S(s) && c && h.push(t)
                    }
                    s.on("error", e), S(s) && c && h.push((() => {
                        s.removeListener("error", e)
                    }))
                }
                if (0 === t)
                    if ("function" == typeof s) {
                        if (y = s({
                                signal: a
                            }), !E(y)) throw new g("Iterable, AsyncIterable or Stream", "source", y)
                    } else y = E(s) || A(s) || I(s) ? s : f.from(s);
                else if ("function" == typeof s) {
                    var L;
                    if (I(y)) y = B(null === (L = y) || void 0 === L ? void 0 : L.readable);
                    else y = B(y);
                    if (y = s(y, {
                            signal: a
                        }), o) {
                        if (!E(y, !0)) throw new g("AsyncIterable", `transform[${t-1}]`, y)
                    } else {
                        var j;
                        r || (r = oi());
                        let e = new r({
                                objectMode: !0
                            }),
                            t = null === (j = y) || void 0 === j ? void 0 : j.then;
                        if ("function" == typeof t) w++, t.call(y, (t => {
                            d = t, null != t && e.write(t), u && e.end(), n.nextTick(C)
                        }), (t => {
                            e.destroy(t), n.nextTick(C, t)
                        }));
                        else if (E(y, !0)) w++, x(y, e, C, {
                            end: u
                        });
                        else {
                            if (!R(y) && !I(y)) throw new g("AsyncIterable or Promise", "destination", y);
                            {
                                let t = y.readable || y;
                                w++, x(t, e, C, {
                                    end: u
                                })
                            }
                        }
                        y = e;
                        let {
                            destroy: i,
                            cleanup: s
                        } = P(y, !1, !0);
                        m.push(i), c && h.push(s)
                    }
                } else if (T(s)) {
                    if (A(y)) {
                        w += 2;
                        let e = U(y, s, C, {
                            end: u
                        });
                        S(s) && c && h.push(e)
                    } else if (I(y) || R(y)) {
                        let e = y.readable || y;
                        w++, x(e, s, C, {
                            end: u
                        })
                    } else {
                        if (!E(y)) throw new p("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], y);
                        w++, x(y, s, C, {
                            end: u
                        })
                    }
                    y = s
                } else if (k(s)) {
                    if (A(y)) w++, N(B(y), s, C, {
                        end: u
                    });
                    else if (R(y) || E(y)) w++, N(y, s, C, {
                        end: u
                    });
                    else {
                        if (!I(y)) throw new p("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], y);
                        w++, N(y.readable, s, C, {
                            end: u
                        })
                    }
                    y = s
                } else y = f.from(s)
            }
            return (null != a && a.aborted || null != l && l.aborted) && n.nextTick(u), y
        }

        function U(e, t, r, {
            end: i
        }) {
            let s = !1;
            if (t.on("close", (() => {
                    s || r(new m)
                })), e.pipe(t, {
                    end: !1
                }), i) {
                let r = () => {
                    s = !0, t.end()
                };
                C(e) ? n.nextTick(r) : e.once("end", r)
            } else r();
            return h(e, {
                readable: !0,
                writable: !1
            }, (t => {
                let i = e._readableState;
                t && "ERR_STREAM_PREMATURE_CLOSE" === t.code && i && i.ended && !i.errored && !i.errorEmitted ? e.once("end", r).once("error", r) : r(t)
            })), h(t, {
                readable: !1,
                writable: !0
            }, r)
        }
        t.exports = {
            pipelineImpl: M,
            pipeline(...e) {
                return M(e, u(function(e) {
                    return w(e[e.length - 1], "streams[stream.length - 1]"), e.pop()
                }(e)))
            }
        }
    })),
    li = s(((e, t) => {
        l(), Ze(), De();
        var {
            pipeline: r
        } = ai(), i = ni(), {
            destroyer: n
        } = ht(), {
            isNodeStream: s,
            isReadable: o,
            isWritable: a,
            isWebStream: h,
            isTransformStream: u,
            isWritableStream: c,
            isReadableStream: f
        } = at(), {
            AbortError: d,
            codes: {
                ERR_INVALID_ARG_VALUE: p,
                ERR_MISSING_ARGS: g
            }
        } = nt(), b = lt();
        t.exports = (...e) => {
            if (0 === e.length) throw new g("streams");
            if (1 === e.length) return i.from(e[0]);
            let t, l, y, m, _, w = [...e];
            if ("function" == typeof e[0] && (e[0] = i.from(e[0])), "function" == typeof e[e.length - 1]) {
                let t = e.length - 1;
                e[t] = i.from(e[t])
            }
            for (let t = 0; t < e.length; ++t)
                if (s(e[t]) || h(e[t])) {
                    if (t < e.length - 1 && !(o(e[t]) || f(e[t]) || u(e[t]))) throw new p(`streams[${t}]`, w[t], "must be readable");
                    if (t > 0 && !(a(e[t]) || c(e[t]) || u(e[t]))) throw new p(`streams[${t}]`, w[t], "must be writable")
                } let v = e[0],
                E = r(e, (function(e) {
                    let t = m;
                    m = null, t ? t(e) : e ? _.destroy(e) : !A && !S && _.destroy()
                })),
                S = !!(a(v) || c(v) || u(v)),
                A = !!(o(E) || f(E) || u(E));
            if (_ = new i({
                    writableObjectMode: !(null == v || !v.writableObjectMode),
                    readableObjectMode: !(null == E || !E.writableObjectMode),
                    writable: S,
                    readable: A
                }), S) {
                if (s(v)) _._write = (e, r, i) => {
                    v.write(e, r) ? i() : t = i
                }, _._final = e => {
                    v.end(), l = e
                }, v.on("drain", (() => {
                    if (t) {
                        let e = t;
                        t = null, e()
                    }
                }));
                else if (h(v)) {
                    let e = (u(v) ? v.writable : v).getWriter();
                    _._write = async (t, r, i) => {
                        try {
                            await e.ready, e.write(t).catch((() => {})), i()
                        } catch (e) {
                            i(e)
                        }
                    }, _._final = async t => {
                        try {
                            await e.ready, e.close().catch((() => {})), l = t
                        } catch (e) {
                            t(e)
                        }
                    }
                }
                let e = u(E) ? E.readable : E;
                b(e, (() => {
                    if (l) {
                        let e = l;
                        l = null, e()
                    }
                }))
            }
            if (A)
                if (s(E)) E.on("readable", (() => {
                    if (y) {
                        let e = y;
                        y = null, e()
                    }
                })), E.on("end", (() => {
                    _.push(null)
                })), _._read = () => {
                    for (;;) {
                        let e = E.read();
                        if (null === e) return void(y = _._read);
                        if (!_.push(e)) return
                    }
                };
                else if (h(E)) {
                let e = (u(E) ? E.readable : E).getReader();
                _._read = async () => {
                    for (;;) try {
                        let {
                            value: t,
                            done: r
                        } = await e.read();
                        if (!_.push(t)) return;
                        if (r) return void _.push(null)
                    } catch {
                        return
                    }
                }
            }
            return _._destroy = (e, r) => {
                !e && null !== m && (e = new d), y = null, t = null, l = null, null === m ? r(e) : (m = r, s(E) && n(E, e))
            }, _
        }
    })),
    hi = s(((e, t) => {
        l(), Ze(), De();
        var r = globalThis.AbortController || it().AbortController,
            {
                codes: {
                    ERR_INVALID_ARG_VALUE: i,
                    ERR_INVALID_ARG_TYPE: n,
                    ERR_MISSING_ARGS: s,
                    ERR_OUT_OF_RANGE: o
                },
                AbortError: a
            } = nt(),
            {
                validateAbortSignal: h,
                validateInteger: u,
                validateObject: c
            } = st(),
            f = tt().Symbol("kWeak"),
            {
                finished: d
            } = lt(),
            p = li(),
            {
                addAbortSignalNoValidate: g
            } = Ut(),
            {
                isWritable: b,
                isNodeStream: y
            } = at(),
            {
                ArrayPrototypePush: m,
                MathFloor: _,
                Number: w,
                NumberIsNaN: v,
                Promise: E,
                PromiseReject: S,
                PromisePrototypeThen: A,
                Symbol: T
            } = tt(),
            I = T("kEmpty"),
            k = T("kEof");

        function R(e, t) {
            if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
            null != t && c(t, "options"), null != t?.signal && h(t.signal, "options.signal");
            let i = 1;
            return null != t?.concurrency && (i = _(t.concurrency)), u(i, "concurrency", 1), async function*() {
                var n, s;
                let o = new r,
                    l = this,
                    h = [],
                    u = o.signal,
                    c = {
                        signal: u
                    },
                    f = () => o.abort();
                null != t && null !== (n = t.signal) && void 0 !== n && n.aborted && f(), null == t || null === (s = t.signal) || void 0 === s || s.addEventListener("abort", f);
                let d, p, g = !1;

                function b() {
                    g = !0
                }!async function() {
                    try {
                        for await (let t of l) {
                            var r;
                            if (g) return;
                            if (u.aborted) throw new a;
                            try {
                                t = e(t, c)
                            } catch (e) {
                                t = S(e)
                            }
                            t !== I && ("function" == typeof(null === (r = t) || void 0 === r ? void 0 : r.catch) && t.catch(b), h.push(t), d && (d(), d = null), !g && h.length && h.length >= i && await new E((e => {
                                p = e
                            })))
                        }
                        h.push(k)
                    } catch (e) {
                        let t = S(e);
                        A(t, void 0, b), h.push(t)
                    } finally {
                        var n;
                        g = !0, d && (d(), d = null), null == t || null === (n = t.signal) || void 0 === n || n.removeEventListener("abort", f)
                    }
                }();
                try {
                    for (;;) {
                        for (; h.length > 0;) {
                            let e = await h[0];
                            if (e === k) return;
                            if (u.aborted) throw new a;
                            e !== I && (yield e), h.shift(), p && (p(), p = null)
                        }
                        await new E((e => {
                            d = e
                        }))
                    }
                } finally {
                    o.abort(), g = !0, p && (p(), p = null)
                }
            }.call(this)
        }
        async function C(e, t) {
            for await (let r of O.call(this, e, t)) return !0;
            return !1
        }

        function O(e, t) {
            if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
            return R.call(this, (async function(t, r) {
                return await e(t, r) ? t : I
            }), t)
        }
        var P = class extends s {
            constructor() {
                super("reduce"), this.message = "Reduce of an empty stream requires an initial value"
            }
        };

        function B(e) {
            if (e = w(e), v(e)) return 0;
            if (e < 0) throw new o("number", ">= 0", e);
            return e
        }
        t.exports.streamReturningOperators = {
            asIndexedPairs(e) {
                return null != e && c(e, "options"), null != e?.signal && h(e.signal, "options.signal"), async function*() {
                    let t = 0;
                    for await (let i of this) {
                        var r;
                        if (null != e && null !== (r = e.signal) && void 0 !== r && r.aborted) throw new a({
                            cause: e.signal.reason
                        });
                        yield [t++, i]
                    }
                }.call(this)
            },
            drop(e, t) {
                return null != t && c(t, "options"), null != t?.signal && h(t.signal, "options.signal"), e = B(e), async function*() {
                    var r;
                    if (null != t && null !== (r = t.signal) && void 0 !== r && r.aborted) throw new a;
                    for await (let r of this) {
                        var i;
                        if (null != t && null !== (i = t.signal) && void 0 !== i && i.aborted) throw new a;
                        e-- <= 0 && (yield r)
                    }
                }.call(this)
            },
            filter: O,
            flatMap(e, t) {
                let r = R.call(this, e, t);
                return async function*() {
                    for await (let e of r) yield* e
                }()
            },
            map: R,
            take(e, t) {
                return null != t && c(t, "options"), null != t?.signal && h(t.signal, "options.signal"), e = B(e), async function*() {
                    var r;
                    if (null != t && null !== (r = t.signal) && void 0 !== r && r.aborted) throw new a;
                    for await (let r of this) {
                        var i;
                        if (null != t && null !== (i = t.signal) && void 0 !== i && i.aborted) throw new a;
                        if (!(e-- > 0)) return;
                        yield r
                    }
                }.call(this)
            },
            compose(e, t) {
                if (null != t && c(t, "options"), null != t?.signal && h(t.signal, "options.signal"), y(e) && !b(e)) throw new i("stream", e, "must be writable");
                let r = p(this, e);
                return null != t && t.signal && g(t.signal, r), r
            }
        }, t.exports.promiseReturningOperators = {
            async every(e, t) {
                if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
                return !await C.call(this, (async (...t) => !await e(...t)), t)
            },
            async forEach(e, t) {
                if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
                for await (let r of R.call(this, (async function(t, r) {
                    return await e(t, r), I
                }), t));
            },
            async reduce(e, t, i) {
                var s;
                if ("function" != typeof e) throw new n("reducer", ["Function", "AsyncFunction"], e);
                null != i && c(i, "options"), null != i?.signal && h(i.signal, "options.signal");
                let o = arguments.length > 1;
                if (null != i && null !== (s = i.signal) && void 0 !== s && s.aborted) {
                    let e = new a(void 0, {
                        cause: i.signal.reason
                    });
                    throw this.once("error", (() => {})), await d(this.destroy(e)), e
                }
                let l = new r,
                    u = l.signal;
                if (null != i && i.signal) {
                    let e = {
                        once: !0,
                        [f]: this
                    };
                    i.signal.addEventListener("abort", (() => l.abort()), e)
                }
                let p = !1;
                try {
                    for await (let r of this) {
                        var g;
                        if (p = !0, null != i && null !== (g = i.signal) && void 0 !== g && g.aborted) throw new a;
                        o ? t = await e(t, r, {
                            signal: u
                        }) : (t = r, o = !0)
                    }
                    if (!p && !o) throw new P
                } finally {
                    l.abort()
                }
                return t
            },
            async toArray(e) {
                null != e && c(e, "options"), null != e?.signal && h(e.signal, "options.signal");
                let t = [];
                for await (let i of this) {
                    var r;
                    if (null != e && null !== (r = e.signal) && void 0 !== r && r.aborted) throw new a(void 0, {
                        cause: e.signal.reason
                    });
                    m(t, i)
                }
                return t
            },
            some: C,
            async find(e, t) {
                for await (let r of O.call(this, e, t)) return r
            }
        }
    })),
    ui = s(((e, t) => {
        l(), Ze(), De();
        var {
            ArrayPrototypePop: r,
            Promise: i
        } = tt(), {
            isIterable: n,
            isNodeStream: s,
            isWebStream: o
        } = at(), {
            pipelineImpl: a
        } = ai(), {
            finished: h
        } = lt();
        ci(), t.exports = {
            finished: h,
            pipeline(...e) {
                return new i(((t, i) => {
                    let l, h, u = e[e.length - 1];
                    if (u && "object" == typeof u && !s(u) && !n(u) && !o(u)) {
                        let t = r(e);
                        l = t.signal, h = t.end
                    }
                    a(e, ((e, r) => {
                        e ? i(e) : t(r)
                    }), {
                        signal: l,
                        end: h
                    })
                }))
            }
        }
    })),
    ci = s(((e, t) => {
        l(), Ze(), De();
        var {
            Buffer: r
        } = (Xe(), a(Fe)), {
            ObjectDefineProperty: i,
            ObjectKeys: n,
            ReflectApply: s
        } = tt(), {
            promisify: {
                custom: o
            }
        } = rt(), {
            streamReturningOperators: h,
            promiseReturningOperators: u
        } = hi(), {
            codes: {
                ERR_ILLEGAL_CONSTRUCTOR: c
            }
        } = nt(), f = li(), {
            pipeline: d
        } = ai(), {
            destroyer: p
        } = ht(), g = lt(), b = ui(), y = at(), m = t.exports = Mt().Stream;
        m.isDisturbed = y.isDisturbed, m.isErrored = y.isErrored, m.isReadable = y.isReadable, m.Readable = ti();
        for (let e of n(h)) {
            let t = function(...e) {
                    if (new.target) throw c();
                    return m.Readable.from(s(r, this, e))
                },
                r = h[e];
            i(t, "name", {
                __proto__: null,
                value: r.name
            }), i(t, "length", {
                __proto__: null,
                value: r.length
            }), i(m.Readable.prototype, e, {
                __proto__: null,
                value: t,
                enumerable: !1,
                configurable: !0,
                writable: !0
            })
        }
        for (let e of n(u)) {
            let t = function(...e) {
                    if (new.target) throw c();
                    return s(r, this, e)
                },
                r = u[e];
            i(t, "name", {
                __proto__: null,
                value: r.name
            }), i(t, "length", {
                __proto__: null,
                value: r.length
            }), i(m.Readable.prototype, e, {
                __proto__: null,
                value: t,
                enumerable: !1,
                configurable: !0,
                writable: !0
            })
        }
        m.Writable = ri(), m.Duplex = ni(), m.Transform = si(), m.PassThrough = oi(), m.pipeline = d;
        var {
            addAbortSignal: _
        } = Ut();
        m.addAbortSignal = _, m.finished = g, m.destroy = p, m.compose = f, i(m, "promises", {
            __proto__: null,
            configurable: !0,
            enumerable: !0,
            get: () => b
        }), i(d, o, {
            __proto__: null,
            enumerable: !0,
            get: () => b.pipeline
        }), i(g, o, {
            __proto__: null,
            enumerable: !0,
            get: () => b.finished
        }), m.Stream = m, m._isUint8Array = e => e instanceof Uint8Array, m._uint8ArrayToBuffer = e => r.from(e.buffer, e.byteOffset, e.byteLength)
    })),
    fi = s(((e, t) => {
        l(), Ze(), De();
        var r = ci(),
            i = ui(),
            n = r.Readable.destroy;
        t.exports = r.Readable, t.exports._uint8ArrayToBuffer = r._uint8ArrayToBuffer, t.exports._isUint8Array = r._isUint8Array, t.exports.isDisturbed = r.isDisturbed, t.exports.isErrored = r.isErrored, t.exports.isReadable = r.isReadable, t.exports.Readable = r.Readable, t.exports.Writable = r.Writable, t.exports.Duplex = r.Duplex, t.exports.Transform = r.Transform, t.exports.PassThrough = r.PassThrough, t.exports.addAbortSignal = r.addAbortSignal, t.exports.finished = r.finished, t.exports.destroy = r.destroy, t.exports.destroy = n, t.exports.pipeline = r.pipeline, t.exports.compose = r.compose, Object.defineProperty(r, "promises", {
            configurable: !0,
            enumerable: !0,
            get: () => i
        }), t.exports.Stream = r.Stream, t.exports.default = t.exports
    })),
    di = s(((e, t) => {
        l(), Ze(), De(), t.exports = "function" == typeof Object.create ? (e, t) => {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : (e, t) => {
            if (t) {
                e.super_ = t;
                var r = () => {};
                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
            }
        }
    })),
    pi = s(((e, t) => {
        l(), Ze(), De();
        var {
            Buffer: r
        } = (Xe(), a(Fe)), i = Symbol.for("BufferList");

        function n(e) {
            if (!(this instanceof n)) return new n(e);
            n._init.call(this, e)
        }
        n._init = function(e) {
                Object.defineProperty(this, i, {
                    value: !0
                }), this._bufs = [], this.length = 0, e && this.append(e)
            }, n.prototype._new = e => new n(e), n.prototype._offset = function(e) {
                if (0 === e) return [0, 0];
                let t = 0;
                for (let r = 0; r < this._bufs.length; r++) {
                    let i = t + this._bufs[r].length;
                    if (e < i || r === this._bufs.length - 1) return [r, e - t];
                    t = i
                }
            }, n.prototype._reverseOffset = function(e) {
                let t = e[0],
                    r = e[1];
                for (let e = 0; e < t; e++) r += this._bufs[e].length;
                return r
            }, n.prototype.get = function(e) {
                if (e > this.length || e < 0) return;
                let t = this._offset(e);
                return this._bufs[t[0]][t[1]]
            }, n.prototype.slice = function(e, t) {
                return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e, t)
            }, n.prototype.copy = function(e, t, i, n) {
                if (("number" != typeof i || i < 0) && (i = 0), ("number" != typeof n || n > this.length) && (n = this.length), i >= this.length || n <= 0) return e || r.alloc(0);
                let s = !!e,
                    o = this._offset(i),
                    a = n - i,
                    l = a,
                    h = s && t || 0,
                    u = o[1];
                if (0 === i && n === this.length) {
                    if (!s) return 1 === this._bufs.length ? this._bufs[0] : r.concat(this._bufs, this.length);
                    for (let t = 0; t < this._bufs.length; t++) this._bufs[t].copy(e, h), h += this._bufs[t].length;
                    return e
                }
                if (l <= this._bufs[o[0]].length - u) return s ? this._bufs[o[0]].copy(e, t, u, u + l) : this._bufs[o[0]].slice(u, u + l);
                s || (e = r.allocUnsafe(a));
                for (let t = o[0]; t < this._bufs.length; t++) {
                    let r = this._bufs[t].length - u;
                    if (!(l > r)) {
                        this._bufs[t].copy(e, h, u, u + l), h += r;
                        break
                    }
                    this._bufs[t].copy(e, h, u), h += r, l -= r, u && (u = 0)
                }
                return e.length > h ? e.slice(0, h) : e
            }, n.prototype.shallowSlice = function(e, t) {
                if (e = e || 0, t = "number" != typeof t ? this.length : t, e < 0 && (e += this.length), t < 0 && (t += this.length), e === t) return this._new();
                let r = this._offset(e),
                    i = this._offset(t),
                    n = this._bufs.slice(r[0], i[0] + 1);
                return 0 === i[1] ? n.pop() : n[n.length - 1] = n[n.length - 1].slice(0, i[1]), 0 !== r[1] && (n[0] = n[0].slice(r[1])), this._new(n)
            }, n.prototype.toString = function(e, t, r) {
                return this.slice(t, r).toString(e)
            }, n.prototype.consume = function(e) {
                if (e = Math.trunc(e), Number.isNaN(e) || e <= 0) return this;
                for (; this._bufs.length;) {
                    if (!(e >= this._bufs[0].length)) {
                        this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
                        break
                    }
                    e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                }
                return this
            }, n.prototype.duplicate = function() {
                let e = this._new();
                for (let t = 0; t < this._bufs.length; t++) e.append(this._bufs[t]);
                return e
            }, n.prototype.append = function(e) {
                if (null == e) return this;
                if (e.buffer) this._appendBuffer(r.from(e.buffer, e.byteOffset, e.byteLength));
                else if (Array.isArray(e))
                    for (let t = 0; t < e.length; t++) this.append(e[t]);
                else if (this._isBufferList(e))
                    for (let t = 0; t < e._bufs.length; t++) this.append(e._bufs[t]);
                else "number" == typeof e && (e = e.toString()), this._appendBuffer(r.from(e));
                return this
            }, n.prototype._appendBuffer = function(e) {
                this._bufs.push(e), this.length += e.length
            }, n.prototype.indexOf = function(e, t, i) {
                if (void 0 === i && "string" == typeof t && (i = t, t = void 0), "function" == typeof e || Array.isArray(e)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
                if ("number" == typeof e ? e = r.from([e]) : "string" == typeof e ? e = r.from(e, i) : this._isBufferList(e) ? e = e.slice() : Array.isArray(e.buffer) ? e = r.from(e.buffer, e.byteOffset, e.byteLength) : r.isBuffer(e) || (e = r.from(e)), isNaN(t = Number(t || 0)) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 0 === e.length) return t > this.length ? this.length : t;
                let n = this._offset(t),
                    s = n[0],
                    o = n[1];
                for (; s < this._bufs.length; s++) {
                    let t = this._bufs[s];
                    for (; o < t.length;)
                        if (t.length - o >= e.length) {
                            let r = t.indexOf(e, o);
                            if (-1 !== r) return this._reverseOffset([s, r]);
                            o = t.length - e.length + 1
                        } else {
                            let t = this._reverseOffset([s, o]);
                            if (this._match(t, e)) return t;
                            o++
                        } o = 0
                }
                return -1
            }, n.prototype._match = function(e, t) {
                if (this.length - e < t.length) return !1;
                for (let r = 0; r < t.length; r++)
                    if (this.get(e + r) !== t[r]) return !1;
                return !0
            },
            function() {
                let e = {
                    readDoubleBE: 8,
                    readDoubleLE: 8,
                    readFloatBE: 4,
                    readFloatLE: 4,
                    readBigInt64BE: 8,
                    readBigInt64LE: 8,
                    readBigUInt64BE: 8,
                    readBigUInt64LE: 8,
                    readInt32BE: 4,
                    readInt32LE: 4,
                    readUInt32BE: 4,
                    readUInt32LE: 4,
                    readInt16BE: 2,
                    readInt16LE: 2,
                    readUInt16BE: 2,
                    readUInt16LE: 2,
                    readInt8: 1,
                    readUInt8: 1,
                    readIntBE: null,
                    readIntLE: null,
                    readUIntBE: null,
                    readUIntLE: null
                };
                for (let t in e) ! function(t) {
                    n.prototype[t] = null === e[t] ? function(e, r) {
                        return this.slice(e, e + r)[t](0, r)
                    } : function(r = 0) {
                        return this.slice(r, r + e[t])[t](0)
                    }
                }(t)
            }(), n.prototype._isBufferList = e => e instanceof n || n.isBufferList(e), n.isBufferList = e => null != e && e[i], t.exports = n
    })),
    gi = s(((e, t) => {
        l(), Ze(), De();
        var r = fi().Duplex,
            i = di(),
            n = pi();

        function s(e) {
            if (!(this instanceof s)) return new s(e);
            if ("function" == typeof e) {
                this._callback = e;
                let t = function(e) {
                    this._callback && (this._callback(e), this._callback = null)
                }.bind(this);
                this.on("pipe", (e => {
                    e.on("error", t)
                })), this.on("unpipe", (e => {
                    e.removeListener("error", t)
                })), e = null
            }
            n._init.call(this, e), r.call(this)
        }
        i(s, r), Object.assign(s.prototype, n.prototype), s.prototype._new = e => new s(e), s.prototype._write = function(e, t, r) {
            this._appendBuffer(e), "function" == typeof r && r()
        }, s.prototype._read = function(e) {
            if (!this.length) return this.push(null);
            e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e)
        }, s.prototype.end = function(e) {
            r.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null)
        }, s.prototype._destroy = function(e, t) {
            this._bufs.length = 0, this.length = 0, t(e)
        }, s.prototype._isBufferList = e => e instanceof s || e instanceof n || s.isBufferList(e), s.isBufferList = n.isBufferList, t.exports = s, t.exports.BufferListStream = s, t.exports.BufferList = n
    })),
    bi = s(((e, t) => {
        l(), Ze(), De();
        t.exports = class {
            constructor() {
                this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null
            }
        }
    })),
    yi = s(((e, t) => {
        l(), Ze(), De();
        var r = t.exports,
            {
                Buffer: i
            } = (Xe(), a(Fe));
        r.types = {
            0: "reserved",
            1: "connect",
            2: "connack",
            3: "publish",
            4: "puback",
            5: "pubrec",
            6: "pubrel",
            7: "pubcomp",
            8: "subscribe",
            9: "suback",
            10: "unsubscribe",
            11: "unsuback",
            12: "pingreq",
            13: "pingresp",
            14: "disconnect",
            15: "auth"
        }, r.requiredHeaderFlags = {
            1: 0,
            2: 0,
            4: 0,
            5: 0,
            6: 2,
            7: 0,
            8: 2,
            9: 0,
            10: 2,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0
        }, r.requiredHeaderFlagsErrors = {};
        for (let e in r.requiredHeaderFlags) {
            let t = r.requiredHeaderFlags[e];
            r.requiredHeaderFlagsErrors[e] = "Invalid header flag bits, must be 0x" + t.toString(16) + " for " + r.types[e] + " packet"
        }
        r.codes = {};
        for (let e in r.types) {
            let t = r.types[e];
            r.codes[t] = e
        }
        r.CMD_SHIFT = 4, r.CMD_MASK = 240, r.DUP_MASK = 8, r.QOS_MASK = 3, r.QOS_SHIFT = 1, r.RETAIN_MASK = 1, r.VARBYTEINT_MASK = 127, r.VARBYTEINT_FIN_MASK = 128, r.VARBYTEINT_MAX = 268435455, r.SESSIONPRESENT_MASK = 1, r.SESSIONPRESENT_HEADER = i.from([r.SESSIONPRESENT_MASK]), r.CONNACK_HEADER = i.from([r.codes.connack << r.CMD_SHIFT]), r.USERNAME_MASK = 128, r.PASSWORD_MASK = 64, r.WILL_RETAIN_MASK = 32, r.WILL_QOS_MASK = 24, r.WILL_QOS_SHIFT = 3, r.WILL_FLAG_MASK = 4, r.CLEAN_SESSION_MASK = 2, r.CONNECT_HEADER = i.from([r.codes.connect << r.CMD_SHIFT]), r.properties = {
            sessionExpiryInterval: 17,
            willDelayInterval: 24,
            receiveMaximum: 33,
            maximumPacketSize: 39,
            topicAliasMaximum: 34,
            requestResponseInformation: 25,
            requestProblemInformation: 23,
            userProperties: 38,
            authenticationMethod: 21,
            authenticationData: 22,
            payloadFormatIndicator: 1,
            messageExpiryInterval: 2,
            contentType: 3,
            responseTopic: 8,
            correlationData: 9,
            maximumQoS: 36,
            retainAvailable: 37,
            assignedClientIdentifier: 18,
            reasonString: 31,
            wildcardSubscriptionAvailable: 40,
            subscriptionIdentifiersAvailable: 41,
            sharedSubscriptionAvailable: 42,
            serverKeepAlive: 19,
            responseInformation: 26,
            serverReference: 28,
            topicAlias: 35,
            subscriptionIdentifier: 11
        }, r.propertiesCodes = {};
        for (let e in r.properties) {
            let t = r.properties[e];
            r.propertiesCodes[t] = e
        }

        function n(e) {
            return [0, 1, 2].map((t => [0, 1].map((n => [0, 1].map((s => {
                let o = i.alloc(1);
                return o.writeUInt8(r.codes[e] << r.CMD_SHIFT | (n ? r.DUP_MASK : 0) | t << r.QOS_SHIFT | s, 0, !0), o
            }))))))
        }
        r.propertiesTypes = {
            sessionExpiryInterval: "int32",
            willDelayInterval: "int32",
            receiveMaximum: "int16",
            maximumPacketSize: "int32",
            topicAliasMaximum: "int16",
            requestResponseInformation: "byte",
            requestProblemInformation: "byte",
            userProperties: "pair",
            authenticationMethod: "string",
            authenticationData: "binary",
            payloadFormatIndicator: "byte",
            messageExpiryInterval: "int32",
            contentType: "string",
            responseTopic: "string",
            correlationData: "binary",
            maximumQoS: "int8",
            retainAvailable: "byte",
            assignedClientIdentifier: "string",
            reasonString: "string",
            wildcardSubscriptionAvailable: "byte",
            subscriptionIdentifiersAvailable: "byte",
            sharedSubscriptionAvailable: "byte",
            serverKeepAlive: "int16",
            responseInformation: "string",
            serverReference: "string",
            topicAlias: "int16",
            subscriptionIdentifier: "var"
        }, r.PUBLISH_HEADER = n("publish"), r.SUBSCRIBE_HEADER = n("subscribe"), r.SUBSCRIBE_OPTIONS_QOS_MASK = 3, r.SUBSCRIBE_OPTIONS_NL_MASK = 1, r.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, r.SUBSCRIBE_OPTIONS_RAP_MASK = 1, r.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, r.SUBSCRIBE_OPTIONS_RH_MASK = 3, r.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, r.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], r.SUBSCRIBE_OPTIONS_NL = 4, r.SUBSCRIBE_OPTIONS_RAP = 8, r.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], r.UNSUBSCRIBE_HEADER = n("unsubscribe"), r.ACKS = {
            unsuback: n("unsuback"),
            puback: n("puback"),
            pubcomp: n("pubcomp"),
            pubrel: n("pubrel"),
            pubrec: n("pubrec")
        }, r.SUBACK_HEADER = i.from([r.codes.suback << r.CMD_SHIFT]), r.VERSION3 = i.from([3]), r.VERSION4 = i.from([4]), r.VERSION5 = i.from([5]), r.VERSION131 = i.from([131]), r.VERSION132 = i.from([132]), r.QOS = [0, 1, 2].map((e => i.from([e]))), r.EMPTY = {
            pingreq: i.from([r.codes.pingreq << 4, 0]),
            pingresp: i.from([r.codes.pingresp << 4, 0]),
            disconnect: i.from([r.codes.disconnect << 4, 0])
        }, r.MQTT5_PUBACK_PUBREC_CODES = {
            0: "Success",
            16: "No matching subscribers",
            128: "Unspecified error",
            131: "Implementation specific error",
            135: "Not authorized",
            144: "Topic Name invalid",
            145: "Packet identifier in use",
            151: "Quota exceeded",
            153: "Payload format invalid"
        }, r.MQTT5_PUBREL_PUBCOMP_CODES = {
            0: "Success",
            146: "Packet Identifier not found"
        }, r.MQTT5_SUBACK_CODES = {
            0: "Granted QoS 0",
            1: "Granted QoS 1",
            2: "Granted QoS 2",
            128: "Unspecified error",
            131: "Implementation specific error",
            135: "Not authorized",
            143: "Topic Filter invalid",
            145: "Packet Identifier in use",
            151: "Quota exceeded",
            158: "Shared Subscriptions not supported",
            161: "Subscription Identifiers not supported",
            162: "Wildcard Subscriptions not supported"
        }, r.MQTT5_UNSUBACK_CODES = {
            0: "Success",
            17: "No subscription existed",
            128: "Unspecified error",
            131: "Implementation specific error",
            135: "Not authorized",
            143: "Topic Filter invalid",
            145: "Packet Identifier in use"
        }, r.MQTT5_DISCONNECT_CODES = {
            0: "Normal disconnection",
            4: "Disconnect with Will Message",
            128: "Unspecified error",
            129: "Malformed Packet",
            130: "Protocol Error",
            131: "Implementation specific error",
            135: "Not authorized",
            137: "Server busy",
            139: "Server shutting down",
            141: "Keep Alive timeout",
            142: "Session taken over",
            143: "Topic Filter invalid",
            144: "Topic Name invalid",
            147: "Receive Maximum exceeded",
            148: "Topic Alias invalid",
            149: "Packet too large",
            150: "Message rate too high",
            151: "Quota exceeded",
            152: "Administrative action",
            153: "Payload format invalid",
            154: "Retain not supported",
            155: "QoS not supported",
            156: "Use another server",
            157: "Server moved",
            158: "Shared Subscriptions not supported",
            159: "Connection rate exceeded",
            160: "Maximum connect time",
            161: "Subscription Identifiers not supported",
            162: "Wildcard Subscriptions not supported"
        }, r.MQTT5_AUTH_CODES = {
            0: "Success",
            24: "Continue authentication",
            25: "Re-authenticate"
        }
    })),
    mi = s(((e, t) => {
        l(), Ze(), De();
        var r = 1e3,
            i = 6e4,
            n = 60 * i,
            s = 24 * n,
            o = 7 * s,
            a = 365.25 * s;

        function h(e, t, r, i) {
            var n = t >= 1.5 * r;
            return Math.round(e / r) + " " + i + (n ? "s" : "")
        }
        t.exports = (e, t) => {
            t = t || {};
            var l = typeof e;
            if ("string" === l && e.length > 0) return function(e) {
                if (e += "", !(e.length > 100)) {
                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var l = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return l * a;
                            case "weeks":
                            case "week":
                            case "w":
                                return l * o;
                            case "days":
                            case "day":
                            case "d":
                                return l * s;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return l * n;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return l * i;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return l * r;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return l;
                            default:
                                return
                        }
                    }
                }
            }(e);
            if ("number" === l && isFinite(e)) return t.long ? function(e) {
                var t = Math.abs(e);
                return t >= s ? h(e, t, s, "day") : t >= n ? h(e, t, n, "hour") : t >= i ? h(e, t, i, "minute") : t >= r ? h(e, t, r, "second") : e + " ms"
            }(e) : function(e) {
                var t = Math.abs(e);
                return t >= s ? Math.round(e / s) + "d" : t >= n ? Math.round(e / n) + "h" : t >= i ? Math.round(e / i) + "m" : t >= r ? Math.round(e / r) + "s" : e + "ms"
            }(e);
            throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    })),
    _i = s(((e, t) => {
        l(), Ze(), De(), t.exports = function(e) {
            function t(e) {
                let i, n, s, o = null;

                function a(...e) {
                    if (!a.enabled) return;
                    let r = a,
                        n = Number(new Date),
                        s = n - (i || n);
                    r.diff = s, r.prev = i, r.curr = n, i = n, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let o = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, ((i, n) => {
                        if ("%%" === i) return "%";
                        o++;
                        let s = t.formatters[n];
                        if ("function" == typeof s) {
                            let t = e[o];
                            i = s.call(r, t), e.splice(o, 1), o--
                        }
                        return i
                    })), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e)
                }
                return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get() {
                        return null !== o ? o : (n !== t.namespaces && (n = t.namespaces, s = t.enabled(e)), s)
                    },
                    set(e) {
                        o = e
                    }
                }), "function" == typeof t.init && t.init(a), a
            }

            function r(e, r) {
                let i = t(this.namespace + (typeof r > "u" ? ":" : r) + e);
                return i.log = this.log, i
            }

            function i(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return t.debug = t, t.default = t, t.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                let e = [...t.names.map(i), ...t.skips.map(i).map((e => "-" + e))].join(",");
                return t.enable(""), e
            }, t.enable = function(e) {
                t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                let r, i = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    n = i.length;
                for (r = 0; r < n; r++) i[r] && ("-" === (e = i[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(RegExp("^" + e.slice(1) + "$")) : t.names.push(RegExp("^" + e + "$")))
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let r, i;
                for (r = 0, i = t.skips.length; r < i; r++)
                    if (t.skips[r].test(e)) return !1;
                for (r = 0, i = t.names.length; r < i; r++)
                    if (t.names[r].test(e)) return !0;
                return !1
            }, t.humanize = mi(), t.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
            }, Object.keys(e).forEach((r => {
                t[r] = e[r]
            })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                let r = 0;
                for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
                return t.colors[Math.abs(r) % t.colors.length]
            }, t.enable(t.load()), t
        }
    })),
    wi = s(((e, t) => {
        l(), Ze(), De(), e.formatArgs = function(e) {
            if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
            let r = "color: " + this.color;
            e.splice(1, 0, r, "color: inherit");
            let i = 0,
                n = 0;
            e[0].replace(/%[a-zA-Z%]/g, (e => {
                "%%" !== e && (i++, "%c" === e && (n = i))
            })), e.splice(n, 0, r)
        }, e.save = function(t) {
            try {
                t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
            } catch {}
        }, e.load = function() {
            let t;
            try {
                t = e.storage.getItem("debug")
            } catch {}
            return !t && typeof h < "u" && "env" in h && (t = h.env.DEBUG), t
        }, e.useColors = function() {
            return !(!(typeof window < "u" && window.process) || "renderer" !== window.process.type && !window.process.__nwjs) || !(typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && (typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }, e.storage = function() {
            try {
                return localStorage
            } catch {}
        }(), e.destroy = (() => {
            let e = !1;
            return () => {
                e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {}), t.exports = _i()(e);
        var {
            formatters: r
        } = t.exports;
        r.j = e => {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    })),
    vi = s(((e, t) => {
        l(), Ze(), De();
        var r = gi(),
            {
                EventEmitter: i
            } = (Nt(), a(kt)),
            n = bi(),
            s = yi(),
            o = wi()("mqtt-packet:parser");
        t.exports = class e extends i {
            constructor() {
                super(), this.parser = this.constructor.parser
            }
            static parser(t) {
                return this instanceof e ? (this.settings = t || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : (new e).parser(t)
            }
            _resetState() {
                o("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new n, this.error = null, this._list = r(), this._stateCounter = 0
            }
            parse(e) {
                for (this.error && this._resetState(), this._list.append(e), o("parse: current state: %s", this._states[this._stateCounter]);
                    (-1 !== this.packet.length || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error;) this._stateCounter++, o("parse: state complete. _stateCounter is now: %d", this._stateCounter), o("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
                return o("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length
            }
            _parseHeader() {
                let e = this._list.readUInt8(0),
                    t = e >> s.CMD_SHIFT;
                this.packet.cmd = s.types[t];
                let r = 15 & e,
                    i = s.requiredHeaderFlags[t];
                return null != i && r !== i ? this._emitError(Error(s.requiredHeaderFlagsErrors[t])) : (this.packet.retain = 0 != (e & s.RETAIN_MASK), this.packet.qos = e >> s.QOS_SHIFT & s.QOS_MASK, this.packet.qos > 2 ? this._emitError(Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = 0 != (e & s.DUP_MASK), o("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0))
            }
            _parseLength() {
                let e = this._parseVarByteNum(!0);
                return e && (this.packet.length = e.value, this._list.consume(e.bytes)), o("_parseLength %d", e.value), !!e
            }
            _parsePayload() {
                o("_parsePayload: payload %O", this._list);
                let e = !1;
                if (0 === this.packet.length || this._list.length >= this.packet.length) {
                    switch (this._pos = 0, this.packet.cmd) {
                        case "connect":
                            this._parseConnect();
                            break;
                        case "connack":
                            this._parseConnack();
                            break;
                        case "publish":
                            this._parsePublish();
                            break;
                        case "puback":
                        case "pubrec":
                        case "pubrel":
                        case "pubcomp":
                            this._parseConfirmation();
                            break;
                        case "subscribe":
                            this._parseSubscribe();
                            break;
                        case "suback":
                            this._parseSuback();
                            break;
                        case "unsubscribe":
                            this._parseUnsubscribe();
                            break;
                        case "unsuback":
                            this._parseUnsuback();
                            break;
                        case "pingreq":
                        case "pingresp":
                            break;
                        case "disconnect":
                            this._parseDisconnect();
                            break;
                        case "auth":
                            this._parseAuth();
                            break;
                        default:
                            this._emitError(Error("Not supported"))
                    }
                    e = !0
                }
                return o("_parsePayload complete result: %s", e), e
            }
            _parseConnect() {
                o("_parseConnect");
                let e, t, r, i, n = {},
                    a = this.packet,
                    l = this._parseString();
                if (null === l) return this._emitError(Error("Cannot parse protocolId"));
                if ("MQTT" !== l && "MQIsdp" !== l) return this._emitError(Error("Invalid protocolId"));
                if (a.protocolId = l, this._pos >= this._list.length) return this._emitError(Error("Packet too short"));
                if (a.protocolVersion = this._list.readUInt8(this._pos), a.protocolVersion >= 128 && (a.bridgeMode = !0, a.protocolVersion = a.protocolVersion - 128), 3 !== a.protocolVersion && 4 !== a.protocolVersion && 5 !== a.protocolVersion) return this._emitError(Error("Invalid protocol version"));
                if (this._pos++, this._pos >= this._list.length) return this._emitError(Error("Packet too short"));
                if (1 & this._list.readUInt8(this._pos)) return this._emitError(Error("Connect flag bit 0 must be 0, but got 1"));
                n.username = this._list.readUInt8(this._pos) & s.USERNAME_MASK, n.password = this._list.readUInt8(this._pos) & s.PASSWORD_MASK, n.will = this._list.readUInt8(this._pos) & s.WILL_FLAG_MASK;
                let h = !!(this._list.readUInt8(this._pos) & s.WILL_RETAIN_MASK),
                    u = (this._list.readUInt8(this._pos) & s.WILL_QOS_MASK) >> s.WILL_QOS_SHIFT;
                if (n.will) a.will = {}, a.will.retain = h, a.will.qos = u;
                else {
                    if (h) return this._emitError(Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
                    if (u) return this._emitError(Error("Will QoS must be set to zero when Will Flag is set to 0"))
                }
                if (a.clean = 0 != (this._list.readUInt8(this._pos) & s.CLEAN_SESSION_MASK), this._pos++, a.keepalive = this._parseNum(), -1 === a.keepalive) return this._emitError(Error("Packet too short"));
                if (5 === a.protocolVersion) {
                    let e = this._parseProperties();
                    Object.getOwnPropertyNames(e).length && (a.properties = e)
                }
                let c = this._parseString();
                if (null === c) return this._emitError(Error("Packet too short"));
                if (a.clientId = c, o("_parseConnect: packet.clientId: %s", a.clientId), n.will) {
                    if (5 === a.protocolVersion) {
                        let e = this._parseProperties();
                        Object.getOwnPropertyNames(e).length && (a.will.properties = e)
                    }
                    if (e = this._parseString(), null === e) return this._emitError(Error("Cannot parse will topic"));
                    if (a.will.topic = e, o("_parseConnect: packet.will.topic: %s", a.will.topic), t = this._parseBuffer(), null === t) return this._emitError(Error("Cannot parse will payload"));
                    a.will.payload = t, o("_parseConnect: packet.will.paylaod: %s", a.will.payload)
                }
                if (n.username) {
                    if (i = this._parseString(), null === i) return this._emitError(Error("Cannot parse username"));
                    a.username = i, o("_parseConnect: packet.username: %s", a.username)
                }
                if (n.password) {
                    if (r = this._parseBuffer(), null === r) return this._emitError(Error("Cannot parse password"));
                    a.password = r
                }
                return this.settings = a, o("_parseConnect: complete"), a
            }
            _parseConnack() {
                o("_parseConnack");
                let e = this.packet;
                if (this._list.length < 1) return null;
                let t = this._list.readUInt8(this._pos++);
                if (t > 1) return this._emitError(Error("Invalid connack flags, bits 7-1 must be set to 0"));
                if (e.sessionPresent = !!(t & s.SESSIONPRESENT_MASK), 5 === this.settings.protocolVersion) this._list.length >= 2 ? e.reasonCode = this._list.readUInt8(this._pos++) : e.reasonCode = 0;
                else {
                    if (this._list.length < 2) return null;
                    e.returnCode = this._list.readUInt8(this._pos++)
                }
                if (-1 === e.returnCode || -1 === e.reasonCode) return this._emitError(Error("Cannot parse return code"));
                if (5 === this.settings.protocolVersion) {
                    let t = this._parseProperties();
                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                }
                o("_parseConnack: complete")
            }
            _parsePublish() {
                o("_parsePublish");
                let e = this.packet;
                if (e.topic = this._parseString(), null === e.topic) return this._emitError(Error("Cannot parse topic"));
                if (!(e.qos > 0) || this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        let t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length && (e.properties = t)
                    }
                    e.payload = this._list.slice(this._pos, e.length), o("_parsePublish: payload from buffer list: %o", e.payload)
                }
            }
            _parseSubscribe() {
                o("_parseSubscribe");
                let e, t, r, i, n, a, l, h = this.packet;
                if (h.subscriptions = [], this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        let e = this._parseProperties();
                        Object.getOwnPropertyNames(e).length && (h.properties = e)
                    }
                    if (h.length <= 0) return this._emitError(Error("Malformed subscribe, no payload specified"));
                    for (; this._pos < h.length;) {
                        if (e = this._parseString(), null === e) return this._emitError(Error("Cannot parse topic"));
                        if (this._pos >= h.length) return this._emitError(Error("Malformed Subscribe Payload"));
                        if (t = this._parseByte(), 5 === this.settings.protocolVersion) {
                            if (192 & t) return this._emitError(Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))
                        } else if (252 & t) return this._emitError(Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
                        if (r = t & s.SUBSCRIBE_OPTIONS_QOS_MASK, r > 2) return this._emitError(Error("Invalid subscribe QoS, must be <= 2"));
                        if (a = 0 != (t >> s.SUBSCRIBE_OPTIONS_NL_SHIFT & s.SUBSCRIBE_OPTIONS_NL_MASK), n = 0 != (t >> s.SUBSCRIBE_OPTIONS_RAP_SHIFT & s.SUBSCRIBE_OPTIONS_RAP_MASK), i = t >> s.SUBSCRIBE_OPTIONS_RH_SHIFT & s.SUBSCRIBE_OPTIONS_RH_MASK, i > 2) return this._emitError(Error("Invalid retain handling, must be <= 2"));
                        l = {
                            topic: e,
                            qos: r
                        }, 5 === this.settings.protocolVersion ? (l.nl = a, l.rap = n, l.rh = i) : this.settings.bridgeMode && (l.rh = 0, l.rap = !0, l.nl = !0), o("_parseSubscribe: push subscription `%s` to subscription", l), h.subscriptions.push(l)
                    }
                }
            }
            _parseSuback() {
                o("_parseSuback");
                let e = this.packet;
                if (this.packet.granted = [], this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        let t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length && (e.properties = t)
                    }
                    if (e.length <= 0) return this._emitError(Error("Malformed suback, no payload specified"));
                    for (; this._pos < this.packet.length;) {
                        let e = this._list.readUInt8(this._pos++);
                        if (5 === this.settings.protocolVersion) {
                            if (!s.MQTT5_SUBACK_CODES[e]) return this._emitError(Error("Invalid suback code"))
                        } else if (e > 2 && 128 !== e) return this._emitError(Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
                        this.packet.granted.push(e)
                    }
                }
            }
            _parseUnsubscribe() {
                o("_parseUnsubscribe");
                let e = this.packet;
                if (e.unsubscriptions = [], this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        let t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length && (e.properties = t)
                    }
                    if (e.length <= 0) return this._emitError(Error("Malformed unsubscribe, no payload specified"));
                    for (; this._pos < e.length;) {
                        let t = this._parseString();
                        if (null === t) return this._emitError(Error("Cannot parse topic"));
                        o("_parseUnsubscribe: push topic `%s` to unsubscriptions", t), e.unsubscriptions.push(t)
                    }
                }
            }
            _parseUnsuback() {
                o("_parseUnsuback");
                let e = this.packet;
                if (!this._parseMessageId()) return this._emitError(Error("Cannot parse messageId"));
                if ((3 === this.settings.protocolVersion || 4 === this.settings.protocolVersion) && 2 !== e.length) return this._emitError(Error("Malformed unsuback, payload length must be 2"));
                if (e.length <= 0) return this._emitError(Error("Malformed unsuback, no payload specified"));
                if (5 === this.settings.protocolVersion) {
                    let t = this._parseProperties();
                    for (Object.getOwnPropertyNames(t).length && (e.properties = t), e.granted = []; this._pos < this.packet.length;) {
                        let e = this._list.readUInt8(this._pos++);
                        if (!s.MQTT5_UNSUBACK_CODES[e]) return this._emitError(Error("Invalid unsuback code"));
                        this.packet.granted.push(e)
                    }
                }
            }
            _parseConfirmation() {
                o("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
                let e = this.packet;
                if (this._parseMessageId(), 5 === this.settings.protocolVersion) {
                    if (e.length > 2) {
                        switch (e.reasonCode = this._parseByte(), this.packet.cmd) {
                            case "puback":
                            case "pubrec":
                                if (!s.MQTT5_PUBACK_PUBREC_CODES[e.reasonCode]) return this._emitError(Error("Invalid " + this.packet.cmd + " reason code"));
                                break;
                            case "pubrel":
                            case "pubcomp":
                                if (!s.MQTT5_PUBREL_PUBCOMP_CODES[e.reasonCode]) return this._emitError(Error("Invalid " + this.packet.cmd + " reason code"))
                        }
                        o("_parseConfirmation: packet.reasonCode `%d`", e.reasonCode)
                    } else e.reasonCode = 0;
                    if (e.length > 3) {
                        let t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length && (e.properties = t)
                    }
                }
                return !0
            }
            _parseDisconnect() {
                let e = this.packet;
                if (o("_parseDisconnect"), 5 === this.settings.protocolVersion) {
                    this._list.length > 0 ? (e.reasonCode = this._parseByte(), s.MQTT5_DISCONNECT_CODES[e.reasonCode] || this._emitError(Error("Invalid disconnect reason code"))) : e.reasonCode = 0;
                    let t = this._parseProperties();
                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                }
                return o("_parseDisconnect result: true"), !0
            }
            _parseAuth() {
                o("_parseAuth");
                let e = this.packet;
                if (5 !== this.settings.protocolVersion) return this._emitError(Error("Not supported auth packet for this version MQTT"));
                if (e.reasonCode = this._parseByte(), !s.MQTT5_AUTH_CODES[e.reasonCode]) return this._emitError(Error("Invalid auth reason code"));
                let t = this._parseProperties();
                return Object.getOwnPropertyNames(t).length && (e.properties = t), o("_parseAuth: result: true"), !0
            }
            _parseMessageId() {
                let e = this.packet;
                return e.messageId = this._parseNum(), null === e.messageId ? (this._emitError(Error("Cannot parse messageId")), !1) : (o("_parseMessageId: packet.messageId %d", e.messageId), !0)
            }
            _parseString(e) {
                let t = this._parseNum(),
                    r = t + this._pos;
                if (-1 === t || r > this._list.length || r > this.packet.length) return null;
                let i = this._list.toString("utf8", this._pos, r);
                return this._pos += t, o("_parseString: result: %s", i), i
            }
            _parseStringPair() {
                return o("_parseStringPair"), {
                    name: this._parseString(),
                    value: this._parseString()
                }
            }
            _parseBuffer() {
                let e = this._parseNum(),
                    t = e + this._pos;
                if (-1 === e || t > this._list.length || t > this.packet.length) return null;
                let r = this._list.slice(this._pos, t);
                return this._pos += e, o("_parseBuffer: result: %o", r), r
            }
            _parseNum() {
                if (this._list.length - this._pos < 2) return -1;
                let e = this._list.readUInt16BE(this._pos);
                return this._pos += 2, o("_parseNum: result: %s", e), e
            }
            _parse4ByteNum() {
                if (this._list.length - this._pos < 4) return -1;
                let e = this._list.readUInt32BE(this._pos);
                return this._pos += 4, o("_parse4ByteNum: result: %s", e), e
            }
            _parseVarByteNum(e) {
                o("_parseVarByteNum");
                let t, r = 0,
                    i = 1,
                    n = 0,
                    a = !1,
                    l = this._pos ? this._pos : 0;
                for (; r < 4 && l + r < this._list.length;) {
                    if (t = this._list.readUInt8(l + r++), n += i * (t & s.VARBYTEINT_MASK), i *= 128, !(t & s.VARBYTEINT_FIN_MASK)) {
                        a = !0;
                        break
                    }
                    if (this._list.length <= r) break
                }
                return !a && 4 === r && this._list.length >= r && this._emitError(Error("Invalid variable byte integer")), l && (this._pos += r), a = !!a && (e ? {
                    bytes: r,
                    value: n
                } : n), o("_parseVarByteNum: result: %o", a), a
            }
            _parseByte() {
                let e;
                return this._pos < this._list.length && (e = this._list.readUInt8(this._pos), this._pos++), o("_parseByte: result: %o", e), e
            }
            _parseByType(e) {
                switch (o("_parseByType: type: %s", e), e) {
                    case "byte":
                        return 0 !== this._parseByte();
                    case "int8":
                        return this._parseByte();
                    case "int16":
                        return this._parseNum();
                    case "int32":
                        return this._parse4ByteNum();
                    case "var":
                        return this._parseVarByteNum();
                    case "string":
                        return this._parseString();
                    case "pair":
                        return this._parseStringPair();
                    case "binary":
                        return this._parseBuffer()
                }
            }
            _parseProperties() {
                o("_parseProperties");
                let e = this._parseVarByteNum(),
                    t = this._pos + e,
                    r = {};
                for (; this._pos < t;) {
                    let e = this._parseByte();
                    if (!e) return this._emitError(Error("Cannot parse property code type")), !1;
                    let t = s.propertiesCodes[e];
                    if (!t) return this._emitError(Error("Unknown property")), !1;
                    if ("userProperties" !== t) r[t] ? (Array.isArray(r[t]) || (r[t] = [r[t]]), r[t].push(this._parseByType(s.propertiesTypes[t]))) : r[t] = this._parseByType(s.propertiesTypes[t]);
                    else {
                        r[t] || (r[t] = Object.create(null));
                        let e = this._parseByType(s.propertiesTypes[t]);
                        if (r[t][e.name])
                            if (Array.isArray(r[t][e.name])) r[t][e.name].push(e.value);
                            else {
                                let i = r[t][e.name];
                                r[t][e.name] = [i], r[t][e.name].push(e.value)
                            }
                        else r[t][e.name] = e.value
                    }
                }
                return r
            }
            _newPacket() {
                return o("_newPacket"), this.packet && (this._list.consume(this.packet.length), o("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), o("_newPacket: new packet"), this.packet = new n, this._pos = 0, !0
            }
            _emitError(e) {
                o("_emitError", e), this.error = e, this.emit("error", e)
            }
        }
    })),
    Ei = s(((e, t) => {
        l(), Ze(), De();
        var {
            Buffer: r
        } = (Xe(), a(Fe)), i = {}, n = r.isBuffer(r.from([1, 2]).subarray(0, 1));

        function s(e) {
            let t = r.allocUnsafe(2);
            return t.writeUInt8(e >> 8, 0), t.writeUInt8(255 & e, 1), t
        }
        t.exports = {
            cache: i,
            generateCache() {
                for (let e = 0; e < 65536; e++) i[e] = s(e)
            },
            generateNumber: s,
            genBufVariableByteInt(e) {
                let t = 0,
                    i = 0,
                    s = r.allocUnsafe(4);
                do {
                    t = e % 128 | 0, (e = e / 128 | 0) > 0 && (t |= 128), s.writeUInt8(t, i++)
                } while (e > 0 && i < 4);
                return e > 0 && (i = 0), n ? s.subarray(0, i) : s.slice(0, i)
            },
            generate4ByteBuffer(e) {
                let t = r.allocUnsafe(4);
                return t.writeUInt32BE(e, 0), t
            }
        }
    })),
    Si = s(((e, t) => {
        l(), Ze(), De(), typeof h > "u" || !h.version || 0 === h.version.indexOf("v0.") || 0 === h.version.indexOf("v1.") && 0 !== h.version.indexOf("v1.8.") ? t.exports = {
            nextTick(e, t, r, i) {
                if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
                var n, s, o = arguments.length;
                switch (o) {
                    case 0:
                    case 1:
                        return h.nextTick(e);
                    case 2:
                        return h.nextTick((() => {
                            e.call(null, t)
                        }));
                    case 3:
                        return h.nextTick((() => {
                            e.call(null, t, r)
                        }));
                    case 4:
                        return h.nextTick((() => {
                            e.call(null, t, r, i)
                        }));
                    default:
                        for (n = Array(o - 1), s = 0; s < n.length;) n[s++] = arguments[s];
                        return h.nextTick((() => {
                            e.apply(null, n)
                        }))
                }
            }
        } : t.exports = h
    })),
    Ai = s(((e, t) => {
        l(), Ze(), De();
        var r = yi(),
            {
                Buffer: i
            } = (Xe(), a(Fe)),
            n = i.allocUnsafe(0),
            s = i.from([0]),
            o = Ei(),
            h = Si().nextTick,
            u = wi()("mqtt-packet:writeToStream"),
            c = o.cache,
            f = o.generateNumber,
            d = o.generateCache,
            p = o.genBufVariableByteInt,
            g = o.generate4ByteBuffer,
            b = A,
            y = !0;

        function m(e, t, o) {
            switch (u("generate called"), t.cork && (t.cork(), h(_, t)), y && (y = !1, d()), u("generate: packet.cmd: %s", e.cmd), e.cmd) {
                case "connect":
                    return function(e, t) {
                        let n = e || {},
                            s = n.protocolId || "MQTT",
                            o = n.protocolVersion || 4,
                            a = n.will,
                            l = n.clean,
                            h = n.keepalive || 0,
                            u = n.clientId || "",
                            c = n.username,
                            f = n.password,
                            d = n.properties;
                        void 0 === l && (l = !0);
                        let p, g, y = 0;
                        if (!s || "string" != typeof s && !i.isBuffer(s)) return t.destroy(Error("Invalid protocolId")), !1;
                        if (y += s.length + 2, 3 !== o && 4 !== o && 5 !== o) return t.destroy(Error("Invalid protocol version")), !1;
                        if (y += 1, ("string" == typeof u || i.isBuffer(u)) && (u || o >= 4) && (u || l)) y += i.byteLength(u) + 2;
                        else {
                            if (o < 4) return t.destroy(Error("clientId must be supplied before 3.1.1")), !1;
                            if (1 * l == 0) return t.destroy(Error("clientId must be given if cleanSession set to 0")), !1
                        }
                        if ("number" != typeof h || h < 0 || h > 65535 || h % 1 != 0) return t.destroy(Error("Invalid keepalive")), !1;
                        if (y += 2, y += 1, 5 === o) {
                            if (p = k(t, d), !p) return !1;
                            y += p.length
                        }
                        if (a) {
                            if ("object" != typeof a) return t.destroy(Error("Invalid will")), !1;
                            if (!a.topic || "string" != typeof a.topic) return t.destroy(Error("Invalid will topic")), !1;
                            if (y += i.byteLength(a.topic) + 2, y += 2, a.payload) {
                                if (!(a.payload.length >= 0)) return t.destroy(Error("Invalid will payload")), !1;
                                "string" == typeof a.payload ? y += i.byteLength(a.payload) : y += a.payload.length
                            }
                            if (g = {}, 5 === o) {
                                if (g = k(t, a.properties), !g) return !1;
                                y += g.length
                            }
                        }
                        let m = !1;
                        if (null != c) {
                            if (!B(c)) return t.destroy(Error("Invalid username")), !1;
                            m = !0, y += i.byteLength(c) + 2
                        }
                        if (null != f) {
                            if (!m) return t.destroy(Error("Username is required to use password")), !1;
                            if (!B(f)) return t.destroy(Error("Invalid password")), !1;
                            y += P(f) + 2
                        }
                        t.write(r.CONNECT_HEADER), v(t, y), I(t, s), n.bridgeMode && (o += 128), t.write(131 === o ? r.VERSION131 : 132 === o ? r.VERSION132 : 4 === o ? r.VERSION4 : 5 === o ? r.VERSION5 : r.VERSION3);
                        let _ = 0;
                        return _ |= null != c ? r.USERNAME_MASK : 0, _ |= null != f ? r.PASSWORD_MASK : 0, _ |= a && a.retain ? r.WILL_RETAIN_MASK : 0, _ |= a && a.qos ? a.qos << r.WILL_QOS_SHIFT : 0, _ |= a ? r.WILL_FLAG_MASK : 0, _ |= l ? r.CLEAN_SESSION_MASK : 0, t.write(i.from([_])), b(t, h), 5 === o && p.write(), I(t, u), a && (5 === o && g.write(), E(t, a.topic), I(t, a.payload)), null != c && I(t, c), null != f && I(t, f), !0
                    }(e, t);
                case "connack":
                    return function(e, t, n) {
                        let o = n ? n.protocolVersion : 4,
                            a = e || {},
                            l = 5 === o ? a.reasonCode : a.returnCode,
                            h = a.properties,
                            u = 2;
                        if ("number" != typeof l) return t.destroy(Error("Invalid return code")), !1;
                        let c = null;
                        if (5 === o) {
                            if (c = k(t, h), !c) return !1;
                            u += c.length
                        }
                        return t.write(r.CONNACK_HEADER), v(t, u), t.write(a.sessionPresent ? r.SESSIONPRESENT_HEADER : s), t.write(i.from([l])), c?.write(), !0
                    }(e, t, o);
                case "publish":
                    return function(e, t, s) {
                        u("publish: packet: %o", e);
                        let o = s ? s.protocolVersion : 4,
                            a = e || {},
                            l = a.qos || 0,
                            h = a.retain ? r.RETAIN_MASK : 0,
                            c = a.topic,
                            f = a.payload || n,
                            d = a.messageId,
                            p = a.properties,
                            g = 0;
                        if ("string" == typeof c) g += i.byteLength(c) + 2;
                        else {
                            if (!i.isBuffer(c)) return t.destroy(Error("Invalid topic")), !1;
                            g += c.length + 2
                        }
                        if (i.isBuffer(f) ? g += f.length : g += i.byteLength(f), l && "number" != typeof d) return t.destroy(Error("Invalid messageId")), !1;
                        l && (g += 2);
                        let y = null;
                        if (5 === o) {
                            if (y = k(t, p), !y) return !1;
                            g += y.length
                        }
                        return t.write(r.PUBLISH_HEADER[l][a.dup ? 1 : 0][h ? 1 : 0]), v(t, g), b(t, P(c)), t.write(c), l > 0 && b(t, d), y?.write(), u("publish: payload: %o", f), t.write(f)
                    }(e, t, o);
                case "puback":
                case "pubrec":
                case "pubrel":
                case "pubcomp":
                    return function(e, t, n) {
                        let s = n ? n.protocolVersion : 4,
                            o = e || {},
                            a = o.cmd || "puback",
                            l = o.messageId,
                            h = o.dup && "pubrel" === a ? r.DUP_MASK : 0,
                            u = 0,
                            c = o.reasonCode,
                            f = o.properties,
                            d = 5 === s ? 3 : 2;
                        if ("pubrel" === a && (u = 1), "number" != typeof l) return t.destroy(Error("Invalid messageId")), !1;
                        let p = null;
                        if (5 === s && "object" == typeof f) {
                            if (p = R(t, f, n, d), !p) return !1;
                            d += p.length
                        }
                        return t.write(r.ACKS[a][u][h][0]), 3 === d && (d += 0 !== c ? 1 : -1), v(t, d), b(t, l), 5 === s && 2 !== d && t.write(i.from([c])), null !== p ? p.write() : 4 === d && t.write(i.from([0])), !0
                    }(e, t, o);
                case "subscribe":
                    return function(e, t, n) {
                        u("subscribe: packet: ");
                        let s = n ? n.protocolVersion : 4,
                            o = e || {},
                            a = o.dup ? r.DUP_MASK : 0,
                            l = o.messageId,
                            h = o.subscriptions,
                            c = o.properties,
                            f = 0;
                        if ("number" != typeof l) return t.destroy(Error("Invalid messageId")), !1;
                        f += 2;
                        let d = null;
                        if (5 === s) {
                            if (d = k(t, c), !d) return !1;
                            f += d.length
                        }
                        if ("object" != typeof h || !h.length) return t.destroy(Error("Invalid subscriptions")), !1;
                        for (let e = 0; e < h.length; e += 1) {
                            let r = h[e].topic,
                                n = h[e].qos;
                            if ("string" != typeof r) return t.destroy(Error("Invalid subscriptions - invalid topic")), !1;
                            if ("number" != typeof n) return t.destroy(Error("Invalid subscriptions - invalid qos")), !1;
                            if (5 === s) {
                                if ("boolean" != typeof(h[e].nl || !1)) return t.destroy(Error("Invalid subscriptions - invalid No Local")), !1;
                                if ("boolean" != typeof(h[e].rap || !1)) return t.destroy(Error("Invalid subscriptions - invalid Retain as Published")), !1;
                                let r = h[e].rh || 0;
                                if ("number" != typeof r || r > 2) return t.destroy(Error("Invalid subscriptions - invalid Retain Handling")), !1
                            }
                            f += i.byteLength(r) + 2 + 1
                        }
                        u("subscribe: writing to stream: %o", r.SUBSCRIBE_HEADER), t.write(r.SUBSCRIBE_HEADER[1][a ? 1 : 0][0]), v(t, f), b(t, l), null !== d && d.write();
                        let p = !0;
                        for (let e of h) {
                            let n, o = e.topic,
                                a = e.qos,
                                l = +e.nl,
                                h = +e.rap,
                                u = e.rh;
                            E(t, o), n = r.SUBSCRIBE_OPTIONS_QOS[a], 5 === s && (n |= l ? r.SUBSCRIBE_OPTIONS_NL : 0, n |= h ? r.SUBSCRIBE_OPTIONS_RAP : 0, n |= u ? r.SUBSCRIBE_OPTIONS_RH[u] : 0), p = t.write(i.from([n]))
                        }
                        return p
                    }(e, t, o);
                case "suback":
                    return function(e, t, n) {
                        let s = n ? n.protocolVersion : 4,
                            o = e || {},
                            a = o.messageId,
                            l = o.granted,
                            h = o.properties,
                            u = 0;
                        if ("number" != typeof a) return t.destroy(Error("Invalid messageId")), !1;
                        if (u += 2, "object" != typeof l || !l.length) return t.destroy(Error("Invalid qos vector")), !1;
                        for (let e = 0; e < l.length; e += 1) {
                            if ("number" != typeof l[e]) return t.destroy(Error("Invalid qos vector")), !1;
                            u += 1
                        }
                        let c = null;
                        if (5 === s) {
                            if (c = R(t, h, n, u), !c) return !1;
                            u += c.length
                        }
                        return t.write(r.SUBACK_HEADER), v(t, u), b(t, a), null !== c && c.write(), t.write(i.from(l))
                    }(e, t, o);
                case "unsubscribe":
                    return function(e, t, n) {
                        let s = n ? n.protocolVersion : 4,
                            o = e || {},
                            a = o.messageId,
                            l = o.dup ? r.DUP_MASK : 0,
                            h = o.unsubscriptions,
                            u = o.properties,
                            c = 0;
                        if ("number" != typeof a) return t.destroy(Error("Invalid messageId")), !1;
                        if (c += 2, "object" != typeof h || !h.length) return t.destroy(Error("Invalid unsubscriptions")), !1;
                        for (let e = 0; e < h.length; e += 1) {
                            if ("string" != typeof h[e]) return t.destroy(Error("Invalid unsubscriptions")), !1;
                            c += i.byteLength(h[e]) + 2
                        }
                        let f = null;
                        if (5 === s) {
                            if (f = k(t, u), !f) return !1;
                            c += f.length
                        }
                        t.write(r.UNSUBSCRIBE_HEADER[1][l ? 1 : 0][0]), v(t, c), b(t, a), null !== f && f.write();
                        let d = !0;
                        for (let e = 0; e < h.length; e++) d = E(t, h[e]);
                        return d
                    }(e, t, o);
                case "unsuback":
                    return function(e, t, n) {
                        let s = n ? n.protocolVersion : 4,
                            o = e || {},
                            a = o.messageId,
                            l = o.dup ? r.DUP_MASK : 0,
                            h = o.granted,
                            u = o.properties,
                            c = o.cmd,
                            f = 0,
                            d = 2;
                        if ("number" != typeof a) return t.destroy(Error("Invalid messageId")), !1;
                        if (5 === s) {
                            if ("object" != typeof h || !h.length) return t.destroy(Error("Invalid qos vector")), !1;
                            for (let e = 0; e < h.length; e += 1) {
                                if ("number" != typeof h[e]) return t.destroy(Error("Invalid qos vector")), !1;
                                d += 1
                            }
                        }
                        let p = null;
                        if (5 === s) {
                            if (p = R(t, u, n, d), !p) return !1;
                            d += p.length
                        }
                        return t.write(r.ACKS[c][f][l][0]), v(t, d), b(t, a), null !== p && p.write(), 5 === s && t.write(i.from(h)), !0
                    }(e, t, o);
                case "pingreq":
                case "pingresp":
                    return function(e, t) {
                        return t.write(r.EMPTY[e.cmd])
                    }(e, t);
                case "disconnect":
                    return function(e, t, n) {
                        let s = n ? n.protocolVersion : 4,
                            o = e || {},
                            a = o.reasonCode,
                            l = o.properties,
                            h = 5 === s ? 1 : 0,
                            u = null;
                        if (5 === s) {
                            if (u = R(t, l, n, h), !u) return !1;
                            h += u.length
                        }
                        return t.write(i.from([r.codes.disconnect << 4])), v(t, h), 5 === s && t.write(i.from([a])), null !== u && u.write(), !0
                    }(e, t, o);
                case "auth":
                    return function(e, t, n) {
                        let s = n ? n.protocolVersion : 4,
                            o = e || {},
                            a = o.reasonCode,
                            l = o.properties,
                            h = 5 === s ? 1 : 0;
                        5 !== s && t.destroy(Error("Invalid mqtt version for auth packet"));
                        let u = R(t, l, n, h);
                        return !!u && (h += u.length, t.write(i.from([r.codes.auth << 4])), v(t, h), t.write(i.from([a])), null !== u && u.write(), !0)
                    }(e, t, o);
                default:
                    return t.destroy(Error("Unknown command")), !1
            }
        }

        function _(e) {
            e.uncork()
        }
        Object.defineProperty(m, "cacheNumbers", {
            get: () => b === A,
            set(e) {
                e ? ((!c || 0 === Object.keys(c).length) && (y = !0), b = A) : (y = !1, b = T)
            }
        });
        var w = {};

        function v(e, t) {
            if (t > r.VARBYTEINT_MAX) return e.destroy(Error("Invalid variable byte integer: " + t)), !1;
            let i = w[t];
            return i || (i = p(t), t < 16384 && (w[t] = i)), u("writeVarByteInt: writing to stream: %o", i), e.write(i)
        }

        function E(e, t) {
            let r = i.byteLength(t);
            return b(e, r), u("writeString: %s", t), e.write(t, "utf8")
        }

        function S(e, t, r) {
            E(e, t), E(e, r)
        }

        function A(e, t) {
            return u("writeNumberCached: number: %d", t), u("writeNumberCached: %o", c[t]), e.write(c[t])
        }

        function T(e, t) {
            let r = f(t);
            return u("writeNumberGenerated: %o", r), e.write(r)
        }

        function I(e, t) {
            "string" == typeof t ? E(e, t) : t ? (b(e, t.length), e.write(t)) : b(e, 0)
        }

        function k(e, t) {
            if ("object" != typeof t || null != t.length) return {
                length: 1,
                write() {
                    O(e, {}, 0)
                }
            };
            let n = 0;

            function s(t, n) {
                let s = 0;
                switch (r.propertiesTypes[t]) {
                    case "byte":
                        if ("boolean" != typeof n) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += 2;
                        break;
                    case "int8":
                        if ("number" != typeof n || n < 0 || n > 255) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += 2;
                        break;
                    case "binary":
                        if (n && null === n) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += 1 + i.byteLength(n) + 2;
                        break;
                    case "int16":
                        if ("number" != typeof n || n < 0 || n > 65535) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += 3;
                        break;
                    case "int32":
                        if ("number" != typeof n || n < 0 || n > 4294967295) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += 5;
                        break;
                    case "var":
                        if ("number" != typeof n || n < 0 || n > 268435455) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += 1 + i.byteLength(p(n));
                        break;
                    case "string":
                        if ("string" != typeof n) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += 3 + i.byteLength(n.toString());
                        break;
                    case "pair":
                        if ("object" != typeof n) return e.destroy(Error(`Invalid ${t}: ${n}`)), !1;
                        s += Object.getOwnPropertyNames(n).reduce(((e, t) => {
                            let r = n[t];
                            return e += Array.isArray(r) ? r.reduce(((e, r) => e += 3 + i.byteLength(t.toString()) + 2 + i.byteLength(r.toString())), 0) : 3 + i.byteLength(t.toString()) + 2 + i.byteLength(n[t].toString())
                        }), 0);
                        break;
                    default:
                        return e.destroy(Error(`Invalid property ${t}: ${n}`)), !1
                }
                return s
            }
            if (t)
                for (let e in t) {
                    let r = 0,
                        i = 0,
                        o = t[e];
                    if (Array.isArray(o))
                        for (let t = 0; t < o.length; t++) {
                            if (i = s(e, o[t]), !i) return !1;
                            r += i
                        } else {
                            if (i = s(e, o), !i) return !1;
                            r = i
                        }
                    if (!r) return !1;
                    n += r
                }
            return {
                length: i.byteLength(p(n)) + n,
                write() {
                    O(e, t, n)
                }
            }
        }

        function R(e, t, r, i) {
            let n = ["reasonString", "userProperties"],
                s = r && r.properties && r.properties.maximumPacketSize ? r.properties.maximumPacketSize : 0,
                o = k(e, t);
            if (s)
                for (; i + o.length > s;) {
                    let r = n.shift();
                    if (!r || !t[r]) return !1;
                    delete t[r], o = k(e, t)
                }
            return o
        }

        function C(e, t, n) {
            switch (r.propertiesTypes[t]) {
                case "byte":
                    e.write(i.from([r.properties[t]])), e.write(i.from([+n]));
                    break;
                case "int8":
                    e.write(i.from([r.properties[t]])), e.write(i.from([n]));
                    break;
                case "binary":
                    e.write(i.from([r.properties[t]])), I(e, n);
                    break;
                case "int16":
                    e.write(i.from([r.properties[t]])), b(e, n);
                    break;
                case "int32":
                    e.write(i.from([r.properties[t]])),
                        function(e, t) {
                            let r = g(t);
                            u("write4ByteNumber: %o", r), e.write(r)
                        }(e, n);
                    break;
                case "var":
                    e.write(i.from([r.properties[t]])), v(e, n);
                    break;
                case "string":
                    e.write(i.from([r.properties[t]])), E(e, n);
                    break;
                case "pair":
                    Object.getOwnPropertyNames(n).forEach((s => {
                        let o = n[s];
                        Array.isArray(o) ? o.forEach((n => {
                            e.write(i.from([r.properties[t]])), S(e, s.toString(), n.toString())
                        })) : (e.write(i.from([r.properties[t]])), S(e, s.toString(), o.toString()))
                    }));
                    break;
                default:
                    return e.destroy(Error(`Invalid property ${t} value: ${n}`)), !1
            }
        }

        function O(e, t, r) {
            v(e, r);
            for (let r in t)
                if ({}.hasOwnProperty.call(t, r) && null !== t[r]) {
                    let i = t[r];
                    if (Array.isArray(i))
                        for (let t = 0; t < i.length; t++) C(e, r, i[t]);
                    else C(e, r, i)
                }
        }

        function P(e) {
            return e ? e instanceof i ? e.length : i.byteLength(e) : 0
        }

        function B(e) {
            return "string" == typeof e || e instanceof i
        }
        t.exports = m
    })),
    Ti = s(((e, t) => {
        l(), Ze(), De();
        var r = Ai(),
            {
                EventEmitter: i
            } = (Nt(), a(kt)),
            {
                Buffer: n
            } = (Xe(), a(Fe));
        var s = class extends i {
            constructor() {
                super(), this._array = Array(20), this._i = 0
            }
            write(e) {
                return this._array[this._i++] = e, !0
            }
            concat() {
                let e, t = 0,
                    r = Array(this._array.length),
                    i = this._array,
                    s = 0;
                for (e = 0; e < i.length && void 0 !== i[e]; e++) "string" != typeof i[e] ? r[e] = i[e].length : r[e] = n.byteLength(i[e]), t += r[e];
                let o = n.allocUnsafe(t);
                for (e = 0; e < i.length && void 0 !== i[e]; e++) "string" != typeof i[e] ? (i[e].copy(o, s), s += r[e]) : (o.write(i[e], s), s += r[e]);
                return o
            }
            destroy(e) {
                e && this.emit("error", e)
            }
        };
        t.exports = function(e, t) {
            let i = new s;
            return r(e, i, t), i.concat()
        }
    })),
    Ii = s((e => {
        l(), Ze(), De(), e.parser = vi().parser, e.generate = Ti(), e.writeToStream = Ai()
    })),
    ki = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = class {
            constructor() {
                this.nextId = Math.max(1, Math.floor(65535 * Math.random()))
            }
            allocate() {
                let e = this.nextId++;
                return 65536 === this.nextId && (this.nextId = 1), e
            }
            getLastAllocated() {
                return 1 === this.nextId ? 65535 : this.nextId - 1
            }
            register(e) {
                return !0
            }
            deallocate(e) {}
            clear() {}
        }
    })),
    Ri = s(((e, t) => {
        function r(e) {
            return e instanceof Ge ? Ge.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length)
        }
        l(), Ze(), De(), t.exports = function(e) {
            return (e = e || {}).circles ? function(e) {
                var t = [],
                    i = [];
                return e.proto ? function e(s) {
                    if ("object" != typeof s || null === s) return s;
                    if (s instanceof Date) return new Date(s);
                    if (Array.isArray(s)) return n(s, e);
                    if (s instanceof Map) return new Map(n(Array.from(s), e));
                    if (s instanceof Set) return new Set(n(Array.from(s), e));
                    var o = {};
                    for (var a in t.push(s), i.push(o), s) {
                        var l = s[a];
                        if ("object" != typeof l || null === l) o[a] = l;
                        else if (l instanceof Date) o[a] = new Date(l);
                        else if (l instanceof Map) o[a] = new Map(n(Array.from(l), e));
                        else if (l instanceof Set) o[a] = new Set(n(Array.from(l), e));
                        else if (ArrayBuffer.isView(l)) o[a] = r(l);
                        else {
                            var h = t.indexOf(l);
                            o[a] = -1 !== h ? i[h] : e(l)
                        }
                    }
                    return t.pop(), i.pop(), o
                } : function e(s) {
                    if ("object" != typeof s || null === s) return s;
                    if (s instanceof Date) return new Date(s);
                    if (Array.isArray(s)) return n(s, e);
                    if (s instanceof Map) return new Map(n(Array.from(s), e));
                    if (s instanceof Set) return new Set(n(Array.from(s), e));
                    var o = {};
                    for (var a in t.push(s), i.push(o), s)
                        if (!1 !== Object.hasOwnProperty.call(s, a)) {
                            var l = s[a];
                            if ("object" != typeof l || null === l) o[a] = l;
                            else if (l instanceof Date) o[a] = new Date(l);
                            else if (l instanceof Map) o[a] = new Map(n(Array.from(l), e));
                            else if (l instanceof Set) o[a] = new Set(n(Array.from(l), e));
                            else if (ArrayBuffer.isView(l)) o[a] = r(l);
                            else {
                                var h = t.indexOf(l);
                                o[a] = -1 !== h ? i[h] : e(l)
                            }
                        } return t.pop(), i.pop(), o
                };

                function n(e, n) {
                    for (var s = Object.keys(e), o = Array(s.length), a = 0; a < s.length; a++) {
                        var l = s[a],
                            h = e[l];
                        if ("object" != typeof h || null === h) o[l] = h;
                        else if (h instanceof Date) o[l] = new Date(h);
                        else if (ArrayBuffer.isView(h)) o[l] = r(h);
                        else {
                            var u = t.indexOf(h);
                            o[l] = -1 !== u ? i[u] : n(h)
                        }
                    }
                    return o
                }
            }(e) : e.proto ? function e(i) {
                if ("object" != typeof i || null === i) return i;
                if (i instanceof Date) return new Date(i);
                if (Array.isArray(i)) return t(i, e);
                if (i instanceof Map) return new Map(t(Array.from(i), e));
                if (i instanceof Set) return new Set(t(Array.from(i), e));
                var n = {};
                for (var s in i) {
                    var o = i[s];
                    "object" != typeof o || null === o ? n[s] = o : o instanceof Date ? n[s] = new Date(o) : o instanceof Map ? n[s] = new Map(t(Array.from(o), e)) : o instanceof Set ? n[s] = new Set(t(Array.from(o), e)) : ArrayBuffer.isView(o) ? n[s] = r(o) : n[s] = e(o)
                }
                return n
            } : function e(i) {
                if ("object" != typeof i || null === i) return i;
                if (i instanceof Date) return new Date(i);
                if (Array.isArray(i)) return t(i, e);
                if (i instanceof Map) return new Map(t(Array.from(i), e));
                if (i instanceof Set) return new Set(t(Array.from(i), e));
                var n = {};
                for (var s in i)
                    if (!1 !== Object.hasOwnProperty.call(i, s)) {
                        var o = i[s];
                        "object" != typeof o || null === o ? n[s] = o : o instanceof Date ? n[s] = new Date(o) : o instanceof Map ? n[s] = new Map(t(Array.from(o), e)) : o instanceof Set ? n[s] = new Set(t(Array.from(o), e)) : ArrayBuffer.isView(o) ? n[s] = r(o) : n[s] = e(o)
                    } return n
            };

            function t(e, t) {
                for (var i = Object.keys(e), n = Array(i.length), s = 0; s < i.length; s++) {
                    var o = i[s],
                        a = e[o];
                    "object" != typeof a || null === a ? n[o] = a : a instanceof Date ? n[o] = new Date(a) : ArrayBuffer.isView(a) ? n[o] = r(a) : n[o] = t(a)
                }
                return n
            }
        }
    })),
    Ci = s(((e, t) => {
        l(), Ze(), De(), t.exports = Ri()()
    })),
    Oi = s((e => {
        function t(e) {
            let t = e.split("/");
            for (let e = 0; e < t.length; e++)
                if ("+" !== t[e]) {
                    if ("#" === t[e]) return e === t.length - 1;
                    if (-1 !== t[e].indexOf("+") || -1 !== t[e].indexOf("#")) return !1
                } return !0
        }
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.validateTopics = e.validateTopic = void 0, e.validateTopic = t, e.validateTopics = function(e) {
            if (0 === e.length) return "empty_topic_list";
            for (let r = 0; r < e.length; r++)
                if (!t(e[r])) return e[r];
            return null
        }
    })),
    Pi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = fi(),
            r = {
                objectMode: !0
            },
            i = {
                clean: !0
            };
        e.default = class {
            constructor(e) {
                this.options = e || {}, this.options = Object.assign(Object.assign({}, i), e), this._inflights = new Map
            }
            put(e, t) {
                return this._inflights.set(e.messageId, e), t && t(), this
            }
            createStream() {
                let e = new t.Readable(r),
                    i = [],
                    n = !1,
                    s = 0;
                return this._inflights.forEach((e => {
                    i.push(e)
                })), e._read = () => {
                    !n && s < i.length ? e.push(i[s++]) : e.push(null)
                }, e.destroy = () => {
                    if (!n) return n = !0, setTimeout((() => {
                        e.emit("close")
                    }), 0), e
                }, e
            }
            del(e, t) {
                let r = this._inflights.get(e.messageId);
                return r ? (this._inflights.delete(e.messageId), t(null, r)) : t && t(Error("missing packet")), this
            }
            get(e, t) {
                let r = this._inflights.get(e.messageId);
                return r ? t(null, r) : t && t(Error("missing packet")), this
            }
            close(e) {
                this.options.clean && (this._inflights = null), e && e()
            }
        }
    })),
    Bi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = [0, 16, 128, 131, 135, 144, 145, 151, 153];
        e.default = (e, r, i) => {
            e.log("handlePublish: packet %o", r), i = typeof i < "u" ? i : e.noop;
            let n = r.topic.toString(),
                s = r.payload,
                {
                    qos: o
                } = r,
                {
                    messageId: a
                } = r,
                {
                    options: l
                } = e;
            if (5 === e.options.protocolVersion) {
                let t;
                if (r.properties && (t = r.properties.topicAlias), typeof t < "u")
                    if (0 === n.length) {
                        if (!(t > 0 && t <= 65535)) return e.log("handlePublish :: topic alias out of range. alias: %d", t), void e.emit("error", Error("Received Topic Alias is out of range"));
                        {
                            let r = e.topicAliasRecv.getTopicByAlias(t);
                            if (!r) return e.log("handlePublish :: unregistered topic alias. alias: %d", t), void e.emit("error", Error("Received unregistered Topic Alias"));
                            n = r, e.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", n, t)
                        }
                    } else {
                        if (!e.topicAliasRecv.put(n, t)) return e.log("handlePublish :: topic alias out of range. alias: %d", t), void e.emit("error", Error("Received Topic Alias is out of range"));
                        e.log("handlePublish :: registered topic: %s - alias: %d", n, t)
                    }
            }
            switch (e.log("handlePublish: qos %d", o), o) {
                case 2:
                    l.customHandleAcks(n, s, r, ((n, s) => ("number" == typeof n && (s = n, n = null), n ? e.emit("error", n) : -1 === t.indexOf(s) ? e.emit("error", Error("Wrong reason code for pubrec")) : void(s ? e._sendPacket({
                        cmd: "pubrec",
                        messageId: a,
                        reasonCode: s
                    }, i) : e.incomingStore.put(r, (() => {
                        e._sendPacket({
                            cmd: "pubrec",
                            messageId: a
                        }, i)
                    }))))));
                    break;
                case 1:
                    l.customHandleAcks(n, s, r, ((o, l) => ("number" == typeof o && (l = o, o = null), o ? e.emit("error", o) : -1 === t.indexOf(l) ? e.emit("error", Error("Wrong reason code for puback")) : (l || e.emit("message", n, s, r), void e.handleMessage(r, (t => {
                        if (t) return i && i(t);
                        e._sendPacket({
                            cmd: "puback",
                            messageId: a,
                            reasonCode: l
                        }, i)
                    }))))));
                    break;
                case 0:
                    e.emit("message", n, s, r), e.handleMessage(r, i);
                    break;
                default:
                    e.log("handlePublish: unknown QoS. Doing nothing.")
            }
        }
    })),
    xi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.nextTick = e.applyMixin = e.ErrorWithReasonCode = void 0;
        e.ErrorWithReasonCode = class e extends Error {
            constructor(t, r) {
                super(t), this.code = r, Object.setPrototypeOf(this, e.prototype), Object.getPrototypeOf(this).name = "ErrorWithReasonCode"
            }
        }, e.applyMixin = function(e, t, r = !1) {
            var i;
            let n = [t];
            for (;;) {
                let e = n[0],
                    t = Object.getPrototypeOf(e);
                if (!t?.prototype) break;
                n.unshift(t)
            }
            for (let t of n)
                for (let n of Object.getOwnPropertyNames(t.prototype))(r || "constructor" !== n) && Object.defineProperty(e.prototype, n, null !== (i = Object.getOwnPropertyDescriptor(t.prototype, n)) && void 0 !== i ? i : Object.create(null))
        }, e.nextTick = h ? h.nextTick : e => {
            setTimeout(e, 0)
        }
    })),
    Ni = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ReasonCodes = void 0, e.ReasonCodes = {
            0: "",
            1: "Unacceptable protocol version",
            2: "Identifier rejected",
            3: "Server unavailable",
            4: "Bad username or password",
            5: "Not authorized",
            16: "No matching subscribers",
            17: "No subscription existed",
            128: "Unspecified error",
            129: "Malformed Packet",
            130: "Protocol Error",
            131: "Implementation specific error",
            132: "Unsupported Protocol Version",
            133: "Client Identifier not valid",
            134: "Bad User Name or Password",
            135: "Not authorized",
            136: "Server unavailable",
            137: "Server busy",
            138: "Banned",
            139: "Server shutting down",
            140: "Bad authentication method",
            141: "Keep Alive timeout",
            142: "Session taken over",
            143: "Topic Filter invalid",
            144: "Topic Name invalid",
            145: "Packet identifier in use",
            146: "Packet Identifier not found",
            147: "Receive Maximum exceeded",
            148: "Topic Alias invalid",
            149: "Packet too large",
            150: "Message rate too high",
            151: "Quota exceeded",
            152: "Administrative action",
            153: "Payload format invalid",
            154: "Retain not supported",
            155: "QoS not supported",
            156: "Use another server",
            157: "Server moved",
            158: "Shared Subscriptions not supported",
            159: "Connection rate exceeded",
            160: "Maximum connect time",
            161: "Subscription Identifiers not supported",
            162: "Wildcard Subscriptions not supported"
        };
        e.default = (t, r) => {
            let i, {
                    messageId: n
                } = r,
                s = r.cmd,
                o = null,
                a = t.outgoing[n] ? t.outgoing[n].cb : null;
            if (a) {
                switch (t.log("_handleAck :: packet type", s), s) {
                    case "pubcomp":
                    case "puback": {
                        let s = r.reasonCode;
                        s && s > 0 && 16 !== s ? (i = Error("Publish error: " + e.ReasonCodes[s]), i.code = s, t._removeOutgoingAndStoreMessage(n, (() => {
                            a(i, r)
                        }))) : t._removeOutgoingAndStoreMessage(n, a);
                        break
                    }
                    case "pubrec": {
                        o = {
                            cmd: "pubrel",
                            qos: 2,
                            messageId: n
                        };
                        let s = r.reasonCode;
                        s && s > 0 && 16 !== s ? (i = Error("Publish error: " + e.ReasonCodes[s]), i.code = s, t._removeOutgoingAndStoreMessage(n, (() => {
                            a(i, r)
                        }))) : t._sendPacket(o);
                        break
                    }
                    case "suback": {
                        delete t.outgoing[n], t.messageIdProvider.deallocate(n);
                        let e = r.granted;
                        for (let r = 0; r < e.length; r++)
                            if (128 & e[r]) {
                                let e = t.messageIdToTopic[n];
                                e && e.forEach((e => {
                                    delete t._resubscribeTopics[e]
                                }))
                            } delete t.messageIdToTopic[n], t._invokeStoreProcessingQueue(), a(null, r);
                        break
                    }
                    case "unsuback":
                        delete t.outgoing[n], t.messageIdProvider.deallocate(n), t._invokeStoreProcessingQueue(), a(null);
                        break;
                    default:
                        t.emit("error", Error("unrecognized packet type"))
                }
                t.disconnecting && 0 === Object.keys(t.outgoing).length && t.emit("outgoingEmpty")
            } else t.log("_handleAck :: Server sent an ack in error. Ignoring.")
        }
    })),
    Mi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = xi(),
            r = Ni();
        e.default = (e, i) => {
            let {
                options: n
            } = e, s = n.protocolVersion, o = 5 === s ? i.reasonCode : i.returnCode;
            if (5 === s) e.handleAuth(i, ((i, n) => {
                if (i) e.emit("error", i);
                else if (24 === o) e.reconnecting = !1, e._sendPacket(n);
                else {
                    let i = new t.ErrorWithReasonCode("Connection refused: " + r.ReasonCodes[o], o);
                    e.emit("error", i)
                }
            }));
            else {
                let r = new t.ErrorWithReasonCode("Protocol error: Auth packets are only supported in MQTT 5. Your version:" + s, o);
                e.emit("error", r)
            }
        }
    })),
    Ui = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LRUCache = void 0;
        var t = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
            r = new Set,
            i = "object" == typeof h && h ? h : {},
            n = (e, t, r, n) => {
                "function" == typeof i.emitWarning ? i.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
            },
            s = globalThis.AbortController,
            o = globalThis.AbortSignal;
        if (typeof s > "u") {
            o = class {
                onabort;
                _onabort = [];
                reason;
                aborted = !1;
                addEventListener(e, t) {
                    this._onabort.push(t)
                }
            }, s = class {
                constructor() {
                    t()
                }
                signal = new o;
                abort(e) {
                    if (!this.signal.aborted) {
                        this.signal.reason = e, this.signal.aborted = !0;
                        for (let t of this.signal._onabort) t(e);
                        this.signal.onabort?.(e)
                    }
                }
            };
            let e = "1" !== i.env?.LRU_CACHE_IGNORE_AC_WARNING,
                t = () => {
                    e && (e = !1, n("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
                }
        }
        var a = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
            u = e => a(e) ? e <= 256 ? Uint8Array : e <= 65536 ? Uint16Array : e <= 4294967296 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? c : null : null,
            c = class extends Array {
                constructor(e) {
                    super(e), this.fill(0)
                }
            },
            f = class e {
                heap;
                length;
                static #e = !1;
                static create(t) {
                    let r = u(t);
                    if (!r) return [];
                    e.#e = !0;
                    let i = new e(t, r);
                    return e.#e = !1, i
                }
                constructor(t, r) {
                    if (!e.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
                    this.heap = new r(t), this.length = 0
                }
                push(e) {
                    this.heap[this.length++] = e
                }
                pop() {
                    return this.heap[--this.length]
                }
            },
            d = class e {
                #e;
                #t;
                #r;
                #i;
                #n;
                ttl;
                ttlResolution;
                ttlAutopurge;
                updateAgeOnGet;
                updateAgeOnHas;
                allowStale;
                noDisposeOnSet;
                noUpdateTTL;
                maxEntrySize;
                sizeCalculation;
                noDeleteOnFetchRejection;
                noDeleteOnStaleGet;
                allowStaleOnFetchAbort;
                allowStaleOnFetchRejection;
                ignoreFetchAbort;
                #s;
                #o;
                #a;
                #l;
                #h;
                #u;
                #c;
                #f;
                #d;
                #p;
                #g;
                #b;
                #y;
                #m;
                #_;
                #w;
                #v;
                static unsafeExposeInternals(e) {
                    return {
                        starts: e.#y,
                        ttls: e.#m,
                        sizes: e.#b,
                        keyMap: e.#a,
                        keyList: e.#l,
                        valList: e.#h,
                        next: e.#u,
                        prev: e.#c,
                        get head() {
                            return e.#f
                        },
                        get tail() {
                            return e.#d
                        },
                        free: e.#p,
                        isBackgroundFetch(t) {
                            return e.#E(t)
                        },
                        backgroundFetch(t, r, i, n) {
                            return e.#S(t, r, i, n)
                        },
                        moveToTail(t) {
                            return e.#A(t)
                        },
                        indexes(t) {
                            return e.#T(t)
                        },
                        rindexes(t) {
                            return e.#I(t)
                        },
                        isStale(t) {
                            return e.#k(t)
                        }
                    }
                }
                get max() {
                    return this.#e
                }
                get maxSize() {
                    return this.#t
                }
                get calculatedSize() {
                    return this.#o
                }
                get size() {
                    return this.#s
                }
                get fetchMethod() {
                    return this.#n
                }
                get dispose() {
                    return this.#r
                }
                get disposeAfter() {
                    return this.#i
                }
                constructor(t) {
                    let {
                        max: i = 0,
                        ttl: s,
                        ttlResolution: o = 1,
                        ttlAutopurge: l,
                        updateAgeOnGet: h,
                        updateAgeOnHas: c,
                        allowStale: d,
                        dispose: p,
                        disposeAfter: g,
                        noDisposeOnSet: b,
                        noUpdateTTL: y,
                        maxSize: m = 0,
                        maxEntrySize: _ = 0,
                        sizeCalculation: w,
                        fetchMethod: v,
                        noDeleteOnFetchRejection: E,
                        noDeleteOnStaleGet: S,
                        allowStaleOnFetchRejection: A,
                        allowStaleOnFetchAbort: T,
                        ignoreFetchAbort: I
                    } = t;
                    if (0 !== i && !a(i)) throw new TypeError("max option must be a nonnegative integer");
                    let k = i ? u(i) : Array;
                    if (!k) throw Error("invalid max value: " + i);
                    if (this.#e = i, this.#t = m, this.maxEntrySize = _ || this.#t, this.sizeCalculation = w, this.sizeCalculation) {
                        if (!this.#t && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                        if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
                    }
                    if (void 0 !== v && "function" != typeof v) throw new TypeError("fetchMethod must be a function if specified");
                    if (this.#n = v, this.#w = !!v, this.#a = new Map, this.#l = Array(i).fill(void 0), this.#h = Array(i).fill(void 0), this.#u = new k(i), this.#c = new k(i), this.#f = 0, this.#d = 0, this.#p = f.create(i), this.#s = 0, this.#o = 0, "function" == typeof p && (this.#r = p), "function" == typeof g ? (this.#i = g, this.#g = []) : (this.#i = void 0, this.#g = void 0), this.#_ = !!this.#r, this.#v = !!this.#i, this.noDisposeOnSet = !!b, this.noUpdateTTL = !!y, this.noDeleteOnFetchRejection = !!E, this.allowStaleOnFetchRejection = !!A, this.allowStaleOnFetchAbort = !!T, this.ignoreFetchAbort = !!I, 0 !== this.maxEntrySize) {
                        if (0 !== this.#t && !a(this.#t)) throw new TypeError("maxSize must be a positive integer if specified");
                        if (!a(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
                        this.#R()
                    }
                    if (this.allowStale = !!d, this.noDeleteOnStaleGet = !!S, this.updateAgeOnGet = !!h, this.updateAgeOnHas = !!c, this.ttlResolution = a(o) || 0 === o ? o : 1, this.ttlAutopurge = !!l, this.ttl = s || 0, this.ttl) {
                        if (!a(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
                        this.#C()
                    }
                    if (0 === this.#e && 0 === this.ttl && 0 === this.#t) throw new TypeError("At least one of max, maxSize, or ttl is required");
                    if (!this.ttlAutopurge && !this.#e && !this.#t) {
                        let t = "LRU_CACHE_UNBOUNDED";
                        (e => !r.has(e))(t) && (r.add(t), n("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", t, e))
                    }
                }
                getRemainingTTL(e) {
                    return this.#a.has(e) ? 1 / 0 : 0
                }
                #C() {
                    let e = new c(this.#e),
                        r = new c(this.#e);
                    this.#m = e, this.#y = r, this.#O = (i, n, s = t.now()) => {
                        if (r[i] = 0 !== n ? s : 0, e[i] = n, 0 !== n && this.ttlAutopurge) {
                            let e = setTimeout((() => {
                                this.#k(i) && this.delete(this.#l[i])
                            }), n + 1);
                            e.unref && e.unref()
                        }
                    }, this.#P = i => {
                        r[i] = 0 !== e[i] ? t.now() : 0
                    }, this.#B = (t, s) => {
                        if (e[s]) {
                            let o = e[s],
                                a = r[s];
                            t.ttl = o, t.start = a, t.now = i || n();
                            let l = t.now - a;
                            t.remainingTTL = o - l
                        }
                    };
                    let i = 0,
                        n = () => {
                            let e = t.now();
                            if (this.ttlResolution > 0) {
                                i = e;
                                let t = setTimeout((() => i = 0), this.ttlResolution);
                                t.unref && t.unref()
                            }
                            return e
                        };
                    this.getRemainingTTL = t => {
                        let s = this.#a.get(t);
                        if (void 0 === s) return 0;
                        let o = e[s],
                            a = r[s];
                        return 0 === o || 0 === a ? 1 / 0 : o - ((i || n()) - a)
                    }, this.#k = t => 0 !== e[t] && 0 !== r[t] && (i || n()) - r[t] > e[t]
                }
                #P = () => {};
                #B = () => {};
                #O = () => {};
                #k = () => !1;
                #R() {
                    let e = new c(this.#e);
                    this.#o = 0, this.#b = e, this.#x = t => {
                        this.#o -= e[t], e[t] = 0
                    }, this.#N = (e, t, r, i) => {
                        if (this.#E(t)) return 0;
                        if (!a(r)) {
                            if (!i) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                            if ("function" != typeof i) throw new TypeError("sizeCalculation must be a function");
                            if (r = i(t, e), !a(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
                        }
                        return r
                    }, this.#M = (t, r, i) => {
                        if (e[t] = r, this.#t) {
                            let r = this.#t - e[t];
                            for (; this.#o > r;) this.#U(!0)
                        }
                        this.#o += e[t], i && (i.entrySize = r, i.totalCalculatedSize = this.#o)
                    }
                }
                #x = () => {};
                #M = () => {};
                #N = (e, t, r, i) => {
                    if (r || i) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
                    return 0
                };* #T({
                    allowStale: e = this.allowStale
                } = {}) {
                    if (this.#s)
                        for (let t = this.#d; this.#L(t) && ((e || !this.#k(t)) && (yield t), t !== this.#f);) t = this.#c[t]
                }* #I({
                    allowStale: e = this.allowStale
                } = {}) {
                    if (this.#s)
                        for (let t = this.#f; this.#L(t) && ((e || !this.#k(t)) && (yield t), t !== this.#d);) t = this.#u[t]
                }
                #L(e) {
                    return void 0 !== e && this.#a.get(this.#l[e]) === e
                }* entries() {
                    for (let e of this.#T()) void 0 !== this.#h[e] && void 0 !== this.#l[e] && !this.#E(this.#h[e]) && (yield [this.#l[e], this.#h[e]])
                }* rentries() {
                    for (let e of this.#I()) void 0 !== this.#h[e] && void 0 !== this.#l[e] && !this.#E(this.#h[e]) && (yield [this.#l[e], this.#h[e]])
                }* keys() {
                    for (let e of this.#T()) {
                        let t = this.#l[e];
                        void 0 !== t && !this.#E(this.#h[e]) && (yield t)
                    }
                }* rkeys() {
                    for (let e of this.#I()) {
                        let t = this.#l[e];
                        void 0 !== t && !this.#E(this.#h[e]) && (yield t)
                    }
                }* values() {
                    for (let e of this.#T()) void 0 !== this.#h[e] && !this.#E(this.#h[e]) && (yield this.#h[e])
                }* rvalues() {
                    for (let e of this.#I()) void 0 !== this.#h[e] && !this.#E(this.#h[e]) && (yield this.#h[e])
                } [Symbol.iterator]() {
                    return this.entries()
                }
                find(e, t = {}) {
                    for (let r of this.#T()) {
                        let i = this.#h[r],
                            n = this.#E(i) ? i.__staleWhileFetching : i;
                        if (void 0 !== n && e(n, this.#l[r], this)) return this.get(this.#l[r], t)
                    }
                }
                forEach(e, t = this) {
                    for (let r of this.#T()) {
                        let i = this.#h[r],
                            n = this.#E(i) ? i.__staleWhileFetching : i;
                        void 0 !== n && e.call(t, n, this.#l[r], this)
                    }
                }
                rforEach(e, t = this) {
                    for (let r of this.#I()) {
                        let i = this.#h[r],
                            n = this.#E(i) ? i.__staleWhileFetching : i;
                        void 0 !== n && e.call(t, n, this.#l[r], this)
                    }
                }
                purgeStale() {
                    let e = !1;
                    for (let t of this.#I({
                            allowStale: !0
                        })) this.#k(t) && (this.delete(this.#l[t]), e = !0);
                    return e
                }
                dump() {
                    let e = [];
                    for (let r of this.#T({
                            allowStale: !0
                        })) {
                        let i = this.#l[r],
                            n = this.#h[r],
                            s = this.#E(n) ? n.__staleWhileFetching : n;
                        if (void 0 === s || void 0 === i) continue;
                        let o = {
                            value: s
                        };
                        if (this.#m && this.#y) {
                            o.ttl = this.#m[r];
                            let e = t.now() - this.#y[r];
                            o.start = Math.floor(Date.now() - e)
                        }
                        this.#b && (o.size = this.#b[r]), e.unshift([i, o])
                    }
                    return e
                }
                load(e) {
                    this.clear();
                    for (let [r, i] of e) {
                        if (i.start) {
                            let e = Date.now() - i.start;
                            i.start = t.now() - e
                        }
                        this.set(r, i.value, i)
                    }
                }
                set(e, t, r = {}) {
                    if (void 0 === t) return this.delete(e), this;
                    let {
                        ttl: i = this.ttl,
                        start: n,
                        noDisposeOnSet: s = this.noDisposeOnSet,
                        sizeCalculation: o = this.sizeCalculation,
                        status: a
                    } = r, {
                        noUpdateTTL: l = this.noUpdateTTL
                    } = r, h = this.#N(e, t, r.size || 0, o);
                    if (this.maxEntrySize && h > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.delete(e), this;
                    let u = 0 === this.#s ? void 0 : this.#a.get(e);
                    if (void 0 === u) u = 0 === this.#s ? this.#d : 0 !== this.#p.length ? this.#p.pop() : this.#s === this.#e ? this.#U(!1) : this.#s, this.#l[u] = e, this.#h[u] = t, this.#a.set(e, u), this.#u[this.#d] = u, this.#c[u] = this.#d, this.#d = u, this.#s++, this.#M(u, h, a), a && (a.set = "add"), l = !1;
                    else {
                        this.#A(u);
                        let r = this.#h[u];
                        if (t !== r) {
                            if (this.#w && this.#E(r)) {
                                r.__abortController.abort(Error("replaced"));
                                let {
                                    __staleWhileFetching: t
                                } = r;
                                void 0 !== t && !s && (this.#_ && this.#r?.(t, e, "set"), this.#v && this.#g?.push([t, e, "set"]))
                            } else s || (this.#_ && this.#r?.(r, e, "set"), this.#v && this.#g?.push([r, e, "set"]));
                            if (this.#x(u), this.#M(u, h, a), this.#h[u] = t, a) {
                                a.set = "replace";
                                let e = r && this.#E(r) ? r.__staleWhileFetching : r;
                                void 0 !== e && (a.oldValue = e)
                            }
                        } else a && (a.set = "update")
                    }
                    if (0 !== i && !this.#m && this.#C(), this.#m && (l || this.#O(u, i, n), a && this.#B(a, u)), !s && this.#v && this.#g) {
                        let e, t = this.#g;
                        for (; e = t?.shift();) this.#i?.(...e)
                    }
                    return this
                }
                pop() {
                    try {
                        for (; this.#s;) {
                            let e = this.#h[this.#f];
                            if (this.#U(!0), this.#E(e)) {
                                if (e.__staleWhileFetching) return e.__staleWhileFetching
                            } else if (void 0 !== e) return e
                        }
                    } finally {
                        if (this.#v && this.#g) {
                            let e, t = this.#g;
                            for (; e = t?.shift();) this.#i?.(...e)
                        }
                    }
                }
                #U(e) {
                    let t = this.#f,
                        r = this.#l[t],
                        i = this.#h[t];
                    return this.#w && this.#E(i) ? i.__abortController.abort(Error("evicted")) : (this.#_ || this.#v) && (this.#_ && this.#r?.(i, r, "evict"), this.#v && this.#g?.push([i, r, "evict"])), this.#x(t), e && (this.#l[t] = void 0, this.#h[t] = void 0, this.#p.push(t)), 1 === this.#s ? (this.#f = this.#d = 0, this.#p.length = 0) : this.#f = this.#u[t], this.#a.delete(r), this.#s--, t
                }
                has(e, t = {}) {
                    let {
                        updateAgeOnHas: r = this.updateAgeOnHas,
                        status: i
                    } = t, n = this.#a.get(e);
                    if (void 0 !== n) {
                        let e = this.#h[n];
                        if (this.#E(e) && void 0 === e.__staleWhileFetching) return !1;
                        if (!this.#k(n)) return r && this.#P(n), i && (i.has = "hit", this.#B(i, n)), !0;
                        i && (i.has = "stale", this.#B(i, n))
                    } else i && (i.has = "miss");
                    return !1
                }
                peek(e, t = {}) {
                    let {
                        allowStale: r = this.allowStale
                    } = t, i = this.#a.get(e);
                    if (void 0 !== i && (r || !this.#k(i))) {
                        let e = this.#h[i];
                        return this.#E(e) ? e.__staleWhileFetching : e
                    }
                }
                #S(e, t, r, i) {
                    let n = void 0 === t ? void 0 : this.#h[t];
                    if (this.#E(n)) return n;
                    let o = new s,
                        {
                            signal: a
                        } = r;
                    a?.addEventListener("abort", (() => o.abort(a.reason)), {
                        signal: o.signal
                    });
                    let l = {
                            signal: o.signal,
                            options: r,
                            context: i
                        },
                        h = (i, n = !1) => {
                            let {
                                aborted: s
                            } = o.signal, a = r.ignoreFetchAbort && void 0 !== i;
                            if (r.status && (s && !n ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, a && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !a && !n) return u(o.signal.reason);
                            let h = c;
                            return this.#h[t] === c && (void 0 === i ? h.__staleWhileFetching ? this.#h[t] = h.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), this.set(e, i, l.options))), i
                        },
                        u = i => {
                            let {
                                aborted: n
                            } = o.signal, s = n && r.allowStaleOnFetchAbort, a = s || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, h = c;
                            if (this.#h[t] === c && (l && void 0 !== h.__staleWhileFetching ? s || (this.#h[t] = h.__staleWhileFetching) : this.delete(e)), a) return r.status && void 0 !== h.__staleWhileFetching && (r.status.returnedStale = !0), h.__staleWhileFetching;
                            if (h.__returned === h) throw i
                        };
                    r.status && (r.status.fetchDispatched = !0);
                    let c = new Promise(((t, i) => {
                            let s = this.#n?.(e, n, l);
                            s && s instanceof Promise && s.then((e => t(void 0 === e ? void 0 : e)), i), o.signal.addEventListener("abort", (() => {
                                (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (t(void 0), r.allowStaleOnFetchAbort && (t = e => h(e, !0)))
                            }))
                        })).then(h, (e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e)))),
                        f = Object.assign(c, {
                            __abortController: o,
                            __staleWhileFetching: n,
                            __returned: void 0
                        });
                    return void 0 === t ? (this.set(e, f, {
                        ...l.options,
                        status: void 0
                    }), t = this.#a.get(e)) : this.#h[t] = f, f
                }
                #E(e) {
                    if (!this.#w) return !1;
                    let t = e;
                    return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof s
                }
                async fetch(e, t = {}) {
                    let {
                        allowStale: r = this.allowStale,
                        updateAgeOnGet: i = this.updateAgeOnGet,
                        noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
                        ttl: s = this.ttl,
                        noDisposeOnSet: o = this.noDisposeOnSet,
                        size: a = 0,
                        sizeCalculation: l = this.sizeCalculation,
                        noUpdateTTL: h = this.noUpdateTTL,
                        noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
                        allowStaleOnFetchRejection: c = this.allowStaleOnFetchRejection,
                        ignoreFetchAbort: f = this.ignoreFetchAbort,
                        allowStaleOnFetchAbort: d = this.allowStaleOnFetchAbort,
                        context: p,
                        forceRefresh: g = !1,
                        status: b,
                        signal: y
                    } = t;
                    if (!this.#w) return b && (b.fetch = "get"), this.get(e, {
                        allowStale: r,
                        updateAgeOnGet: i,
                        noDeleteOnStaleGet: n,
                        status: b
                    });
                    let m = {
                            allowStale: r,
                            updateAgeOnGet: i,
                            noDeleteOnStaleGet: n,
                            ttl: s,
                            noDisposeOnSet: o,
                            size: a,
                            sizeCalculation: l,
                            noUpdateTTL: h,
                            noDeleteOnFetchRejection: u,
                            allowStaleOnFetchRejection: c,
                            allowStaleOnFetchAbort: d,
                            ignoreFetchAbort: f,
                            status: b,
                            signal: y
                        },
                        _ = this.#a.get(e);
                    if (void 0 === _) {
                        b && (b.fetch = "miss");
                        let t = this.#S(e, _, m, p);
                        return t.__returned = t
                    } {
                        let t = this.#h[_];
                        if (this.#E(t)) {
                            let e = r && void 0 !== t.__staleWhileFetching;
                            return b && (b.fetch = "inflight", e && (b.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
                        }
                        let n = this.#k(_);
                        if (!g && !n) return b && (b.fetch = "hit"), this.#A(_), i && this.#P(_), b && this.#B(b, _), t;
                        let s = this.#S(e, _, m, p),
                            o = void 0 !== s.__staleWhileFetching && r;
                        return b && (b.fetch = n ? "stale" : "refresh", o && n && (b.returnedStale = !0)), o ? s.__staleWhileFetching : s.__returned = s
                    }
                }
                get(e, t = {}) {
                    let {
                        allowStale: r = this.allowStale,
                        updateAgeOnGet: i = this.updateAgeOnGet,
                        noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
                        status: s
                    } = t, o = this.#a.get(e);
                    if (void 0 !== o) {
                        let t = this.#h[o],
                            a = this.#E(t);
                        return s && this.#B(s, o), this.#k(o) ? (s && (s.get = "stale"), a ? (s && r && void 0 !== t.__staleWhileFetching && (s.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (n || this.delete(e), s && r && (s.returnedStale = !0), r ? t : void 0)) : (s && (s.get = "hit"), a ? t.__staleWhileFetching : (this.#A(o), i && this.#P(o), t))
                    }
                    s && (s.get = "miss")
                }
                #j(e, t) {
                    this.#c[t] = e, this.#u[e] = t
                }
                #A(e) {
                    e !== this.#d && (e === this.#f ? this.#f = this.#u[e] : this.#j(this.#c[e], this.#u[e]), this.#j(this.#d, e), this.#d = e)
                }
                delete(e) {
                    let t = !1;
                    if (0 !== this.#s) {
                        let r = this.#a.get(e);
                        if (void 0 !== r)
                            if (t = !0, 1 === this.#s) this.clear();
                            else {
                                this.#x(r);
                                let t = this.#h[r];
                                this.#E(t) ? t.__abortController.abort(Error("deleted")) : (this.#_ || this.#v) && (this.#_ && this.#r?.(t, e, "delete"), this.#v && this.#g?.push([t, e, "delete"])), this.#a.delete(e), this.#l[r] = void 0, this.#h[r] = void 0, r === this.#d ? this.#d = this.#c[r] : r === this.#f ? this.#f = this.#u[r] : (this.#u[this.#c[r]] = this.#u[r], this.#c[this.#u[r]] = this.#c[r]), this.#s--, this.#p.push(r)
                            }
                    }
                    if (this.#v && this.#g?.length) {
                        let e, t = this.#g;
                        for (; e = t?.shift();) this.#i?.(...e)
                    }
                    return t
                }
                clear() {
                    for (let e of this.#I({
                            allowStale: !0
                        })) {
                        let t = this.#h[e];
                        if (this.#E(t)) t.__abortController.abort(Error("deleted"));
                        else {
                            let r = this.#l[e];
                            this.#_ && this.#r?.(t, r, "delete"), this.#v && this.#g?.push([t, r, "delete"])
                        }
                    }
                    if (this.#a.clear(), this.#h.fill(void 0), this.#l.fill(void 0), this.#m && this.#y && (this.#m.fill(0), this.#y.fill(0)), this.#b && this.#b.fill(0), this.#f = 0, this.#d = 0, this.#p.length = 0, this.#o = 0, this.#s = 0, this.#v && this.#g) {
                        let e, t = this.#g;
                        for (; e = t?.shift();) this.#i?.(...e)
                    }
                }
            };
        e.LRUCache = d
    })),
    Li = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.ContainerIterator = e.Container = e.Base = void 0;
        e.ContainerIterator = class {
            constructor(e = 0) {
                this.iteratorType = e
            }
            equals(e) {
                return this.o === e.o
            }
        };
        var t = class {
            constructor() {
                this.i = 0
            }
            get length() {
                return this.i
            }
            size() {
                return this.i
            }
            empty() {
                return 0 === this.i
            }
        };
        e.Base = t;
        e.Container = class extends t {}
    })),
    ji = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = Li(),
            r = class extends t.Base {
                constructor(e = []) {
                    super(), this.S = [];
                    let t = this;
                    e.forEach((e => {
                        t.push(e)
                    }))
                }
                clear() {
                    this.i = 0, this.S = []
                }
                push(e) {
                    return this.S.push(e), this.i += 1, this.i
                }
                pop() {
                    if (0 !== this.i) return this.i -= 1, this.S.pop()
                }
                top() {
                    return this.S[this.i - 1]
                }
            };
        e.default = r
    })),
    Di = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = Li(),
            r = class extends t.Base {
                constructor(e = []) {
                    super(), this.j = 0, this.q = [];
                    let t = this;
                    e.forEach((e => {
                        t.push(e)
                    }))
                }
                clear() {
                    this.q = [], this.i = this.j = 0
                }
                push(e) {
                    let t = this.q.length;
                    if (this.j / t > .5 && this.j + this.i >= t && t > 4096) {
                        let t = this.i;
                        for (let e = 0; e < t; ++e) this.q[e] = this.q[this.j + e];
                        this.j = 0, this.q[this.i] = e
                    } else this.q[this.j + this.i] = e;
                    return ++this.i
                }
                pop() {
                    if (0 === this.i) return;
                    let e = this.q[this.j++];
                    return this.i -= 1, e
                }
                front() {
                    if (0 !== this.i) return this.q[this.j]
                }
            };
        e.default = r
    })),
    Fi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = Li(),
            r = class extends t.Base {
                constructor(e = [], t = ((e, t) => e > t ? -1 : e < t ? 1 : 0), r = !0) {
                    if (super(), this.v = t, Array.isArray(e)) this.C = r ? [...e] : e;
                    else {
                        this.C = [];
                        let t = this;
                        e.forEach((e => {
                            t.C.push(e)
                        }))
                    }
                    this.i = this.C.length;
                    let i = this.i >> 1;
                    for (let e = this.i - 1 >> 1; e >= 0; --e) this.k(e, i)
                }
                m(e) {
                    let t = this.C[e];
                    for (; e > 0;) {
                        let r = e - 1 >> 1,
                            i = this.C[r];
                        if (this.v(i, t) <= 0) break;
                        this.C[e] = i, e = r
                    }
                    this.C[e] = t
                }
                k(e, t) {
                    let r = this.C[e];
                    for (; e < t;) {
                        let t = e << 1 | 1,
                            i = t + 1,
                            n = this.C[t];
                        if (i < this.i && this.v(n, this.C[i]) > 0 && (t = i, n = this.C[i]), this.v(n, r) >= 0) break;
                        this.C[e] = n, e = t
                    }
                    this.C[e] = r
                }
                clear() {
                    this.i = 0, this.C.length = 0
                }
                push(e) {
                    this.C.push(e), this.m(this.i), this.i += 1
                }
                pop() {
                    if (0 === this.i) return;
                    let e = this.C[0],
                        t = this.C.pop();
                    return this.i -= 1, this.i && (this.C[0] = t, this.k(0, this.i >> 1)), e
                }
                top() {
                    return this.C[0]
                }
                find(e) {
                    return this.C.indexOf(e) >= 0
                }
                remove(e) {
                    let t = this.C.indexOf(e);
                    return !(t < 0) && (0 === t ? this.pop() : t === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(t, 1, this.C.pop()), this.i -= 1, this.m(t), this.k(t, this.i >> 1)), !0)
                }
                updateItem(e) {
                    let t = this.C.indexOf(e);
                    return !(t < 0) && (this.m(t), this.k(t, this.i >> 1), !0)
                }
                toArray() {
                    return [...this.C]
                }
            };
        e.default = r
    })),
    Wi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = Li(),
            r = class extends t.Container {};
        e.default = r
    })),
    qi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.throwIteratorAccessError = function() {
            throw new RangeError("Iterator access denied!")
        }
    })),
    $i = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.RandomIterator = void 0;
        var t = Li(),
            r = qi(),
            i = class extends t.ContainerIterator {
                constructor(e, t) {
                    super(t), this.o = e, 0 === this.iteratorType ? (this.pre = function() {
                        return 0 === this.o && (0, r.throwIteratorAccessError)(), this.o -= 1, this
                    }, this.next = function() {
                        return this.o === this.container.size() && (0, r.throwIteratorAccessError)(), this.o += 1, this
                    }) : (this.pre = function() {
                        return this.o === this.container.size() - 1 && (0, r.throwIteratorAccessError)(), this.o += 1, this
                    }, this.next = function() {
                        return -1 === this.o && (0, r.throwIteratorAccessError)(), this.o -= 1, this
                    })
                }
                get pointer() {
                    return this.container.getElementByPos(this.o)
                }
                set pointer(e) {
                    this.container.setElementByPos(this.o, e)
                }
            };
        e.RandomIterator = i
    })),
    Hi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t, r = (t = Wi()) && t.t ? t : {
                default: t
            },
            i = $i();
        var n = class e extends i.RandomIterator {
                constructor(e, t, r) {
                    super(e, r), this.container = t
                }
                copy() {
                    return new e(this.o, this.container, this.iteratorType)
                }
            },
            s = class extends r.default {
                constructor(e = [], t = !0) {
                    if (super(), Array.isArray(e)) this.J = t ? [...e] : e, this.i = e.length;
                    else {
                        this.J = [];
                        let t = this;
                        e.forEach((e => {
                            t.pushBack(e)
                        }))
                    }
                }
                clear() {
                    this.i = 0, this.J.length = 0
                }
                begin() {
                    return new n(0, this)
                }
                end() {
                    return new n(this.i, this)
                }
                rBegin() {
                    return new n(this.i - 1, this, 1)
                }
                rEnd() {
                    return new n(-1, this, 1)
                }
                front() {
                    return this.J[0]
                }
                back() {
                    return this.J[this.i - 1]
                }
                getElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    return this.J[e]
                }
                eraseElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    return this.J.splice(e, 1), this.i -= 1, this.i
                }
                eraseElementByValue(e) {
                    let t = 0;
                    for (let r = 0; r < this.i; ++r) this.J[r] !== e && (this.J[t++] = this.J[r]);
                    return this.i = this.J.length = t, this.i
                }
                eraseElementByIterator(e) {
                    let t = e.o;
                    return e = e.next(), this.eraseElementByPos(t), e
                }
                pushBack(e) {
                    return this.J.push(e), this.i += 1, this.i
                }
                popBack() {
                    if (0 !== this.i) return this.i -= 1, this.J.pop()
                }
                setElementByPos(e, t) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    this.J[e] = t
                }
                insert(e, t, r = 1) {
                    if (e < 0 || e > this.i) throw new RangeError;
                    return this.J.splice(e, 0, ...Array(r).fill(t)), this.i += r, this.i
                }
                find(e) {
                    for (let t = 0; t < this.i; ++t)
                        if (this.J[t] === e) return new n(t, this);
                    return this.end()
                }
                reverse() {
                    this.J.reverse()
                }
                unique() {
                    let e = 1;
                    for (let t = 1; t < this.i; ++t) this.J[t] !== this.J[t - 1] && (this.J[e++] = this.J[t]);
                    return this.i = this.J.length = e, this.i
                }
                sort(e) {
                    this.J.sort(e)
                }
                forEach(e) {
                    for (let t = 0; t < this.i; ++t) e(this.J[t], t, this)
                } [Symbol.iterator]() {
                    return function*() {
                        yield* this.J
                    }.bind(this)()
                }
            };
        e.default = s
    })),
    Vi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t, r = (t = Wi()) && t.t ? t : {
                default: t
            },
            i = Li(),
            n = qi();
        var s = class e extends i.ContainerIterator {
                constructor(e, t, r, i) {
                    super(i), this.o = e, this.h = t, this.container = r, 0 === this.iteratorType ? (this.pre = function() {
                        return this.o.L === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                    }, this.next = function() {
                        return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                    }) : (this.pre = function() {
                        return this.o.B === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                    }, this.next = function() {
                        return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                    })
                }
                get pointer() {
                    return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o.l
                }
                set pointer(e) {
                    this.o === this.h && (0, n.throwIteratorAccessError)(), this.o.l = e
                }
                copy() {
                    return new e(this.o, this.h, this.container, this.iteratorType)
                }
            },
            o = class extends r.default {
                constructor(e = []) {
                    super(), this.h = {}, this.p = this._ = this.h.L = this.h.B = this.h;
                    let t = this;
                    e.forEach((e => {
                        t.pushBack(e)
                    }))
                }
                V(e) {
                    let {
                        L: t,
                        B: r
                    } = e;
                    t.B = r, r.L = t, e === this.p && (this.p = r), e === this._ && (this._ = t), this.i -= 1
                }
                G(e, t) {
                    let r = t.B,
                        i = {
                            l: e,
                            L: t,
                            B: r
                        };
                    t.B = i, r.L = i, t === this.h && (this.p = i), r === this.h && (this._ = i), this.i += 1
                }
                clear() {
                    this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h
                }
                begin() {
                    return new s(this.p, this.h, this)
                }
                end() {
                    return new s(this.h, this.h, this)
                }
                rBegin() {
                    return new s(this._, this.h, this, 1)
                }
                rEnd() {
                    return new s(this.h, this.h, this, 1)
                }
                front() {
                    return this.p.l
                }
                back() {
                    return this._.l
                }
                getElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let t = this.p;
                    for (; e--;) t = t.B;
                    return t.l
                }
                eraseElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let t = this.p;
                    for (; e--;) t = t.B;
                    return this.V(t), this.i
                }
                eraseElementByValue(e) {
                    let t = this.p;
                    for (; t !== this.h;) t.l === e && this.V(t), t = t.B;
                    return this.i
                }
                eraseElementByIterator(e) {
                    let t = e.o;
                    return t === this.h && (0, n.throwIteratorAccessError)(), e = e.next(), this.V(t), e
                }
                pushBack(e) {
                    return this.G(e, this._), this.i
                }
                popBack() {
                    if (0 === this.i) return;
                    let e = this._.l;
                    return this.V(this._), e
                }
                pushFront(e) {
                    return this.G(e, this.h), this.i
                }
                popFront() {
                    if (0 === this.i) return;
                    let e = this.p.l;
                    return this.V(this.p), e
                }
                setElementByPos(e, t) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let r = this.p;
                    for (; e--;) r = r.B;
                    r.l = t
                }
                insert(e, t, r = 1) {
                    if (e < 0 || e > this.i) throw new RangeError;
                    if (r <= 0) return this.i;
                    if (0 === e)
                        for (; r--;) this.pushFront(t);
                    else if (e === this.i)
                        for (; r--;) this.pushBack(t);
                    else {
                        let i = this.p;
                        for (let t = 1; t < e; ++t) i = i.B;
                        let n = i.B;
                        for (this.i += r; r--;) i.B = {
                            l: t,
                            L: i
                        }, i.B.L = i, i = i.B;
                        i.B = n, n.L = i
                    }
                    return this.i
                }
                find(e) {
                    let t = this.p;
                    for (; t !== this.h;) {
                        if (t.l === e) return new s(t, this.h, this);
                        t = t.B
                    }
                    return this.end()
                }
                reverse() {
                    if (this.i <= 1) return;
                    let e = this.p,
                        t = this._,
                        r = 0;
                    for (; r << 1 < this.i;) {
                        let i = e.l;
                        e.l = t.l, t.l = i, e = e.B, t = t.L, r += 1
                    }
                }
                unique() {
                    if (this.i <= 1) return this.i;
                    let e = this.p;
                    for (; e !== this.h;) {
                        let t = e;
                        for (; t.B !== this.h && t.l === t.B.l;) t = t.B, this.i -= 1;
                        e.B = t.B, e.B.L = e, e = e.B
                    }
                    return this.i
                }
                sort(e) {
                    if (this.i <= 1) return;
                    let t = [];
                    this.forEach((e => {
                        t.push(e)
                    })), t.sort(e);
                    let r = this.p;
                    t.forEach((e => {
                        r.l = e, r = r.B
                    }))
                }
                merge(e) {
                    let t = this;
                    if (0 === this.i) e.forEach((e => {
                        t.pushBack(e)
                    }));
                    else {
                        let r = this.p;
                        e.forEach((e => {
                            for (; r !== t.h && r.l <= e;) r = r.B;
                            t.G(e, r.L)
                        }))
                    }
                    return this.i
                }
                forEach(e) {
                    let t = this.p,
                        r = 0;
                    for (; t !== this.h;) e(t.l, r++, this), t = t.B
                } [Symbol.iterator]() {
                    return function*() {
                        if (0 === this.i) return;
                        let e = this.p;
                        for (; e !== this.h;) yield e.l, e = e.B
                    }.bind(this)()
                }
            };
        e.default = o
    })),
    zi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t, r = (t = Wi()) && t.t ? t : {
                default: t
            },
            i = $i();
        var n = class e extends i.RandomIterator {
                constructor(e, t, r) {
                    super(e, r), this.container = t
                }
                copy() {
                    return new e(this.o, this.container, this.iteratorType)
                }
            },
            s = class extends r.default {
                constructor(e = [], t = 4096) {
                    super(), this.j = 0, this.D = 0, this.R = 0, this.N = 0, this.P = 0, this.A = [];
                    let r = (() => {
                        if ("number" == typeof e.length) return e.length;
                        if ("number" == typeof e.size) return e.size;
                        if ("function" == typeof e.size) return e.size();
                        throw new TypeError("Cannot get the length or size of the container")
                    })();
                    this.F = t, this.P = Math.max(Math.ceil(r / this.F), 1);
                    for (let e = 0; e < this.P; ++e) this.A.push(Array(this.F));
                    let i = Math.ceil(r / this.F);
                    this.j = this.R = (this.P >> 1) - (i >> 1), this.D = this.N = this.F - r % this.F >> 1;
                    let n = this;
                    e.forEach((e => {
                        n.pushBack(e)
                    }))
                }
                T() {
                    let e = [],
                        t = Math.max(this.P >> 1, 1);
                    for (let r = 0; r < t; ++r) e[r] = Array(this.F);
                    for (let t = this.j; t < this.P; ++t) e[e.length] = this.A[t];
                    for (let t = 0; t < this.R; ++t) e[e.length] = this.A[t];
                    e[e.length] = [...this.A[this.R]], this.j = t, this.R = e.length - 1;
                    for (let r = 0; r < t; ++r) e[e.length] = Array(this.F);
                    this.A = e, this.P = e.length
                }
                O(e) {
                    let t = this.D + e + 1,
                        r = t % this.F,
                        i = r - 1,
                        n = this.j + (t - r) / this.F;
                    return 0 === r && (n -= 1), n %= this.P, i < 0 && (i += this.F), {
                        curNodeBucketIndex: n,
                        curNodePointerIndex: i
                    }
                }
                clear() {
                    this.A = [Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1
                }
                begin() {
                    return new n(0, this)
                }
                end() {
                    return new n(this.i, this)
                }
                rBegin() {
                    return new n(this.i - 1, this, 1)
                }
                rEnd() {
                    return new n(-1, this, 1)
                }
                front() {
                    if (0 !== this.i) return this.A[this.j][this.D]
                }
                back() {
                    if (0 !== this.i) return this.A[this.R][this.N]
                }
                pushBack(e) {
                    return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = e, this.i
                }
                popBack() {
                    if (0 === this.i) return;
                    let e = this.A[this.R][this.N];
                    return 1 !== this.i && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, e
                }
                pushFront(e) {
                    return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = e, this.i
                }
                popFront() {
                    if (0 === this.i) return;
                    let e = this.A[this.j][this.D];
                    return 1 !== this.i && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, e
                }
                getElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let {
                        curNodeBucketIndex: t,
                        curNodePointerIndex: r
                    } = this.O(e);
                    return this.A[t][r]
                }
                setElementByPos(e, t) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let {
                        curNodeBucketIndex: r,
                        curNodePointerIndex: i
                    } = this.O(e);
                    this.A[r][i] = t
                }
                insert(e, t, r = 1) {
                    if (e < 0 || e > this.i) throw new RangeError;
                    if (0 === e)
                        for (; r--;) this.pushFront(t);
                    else if (e === this.i)
                        for (; r--;) this.pushBack(t);
                    else {
                        let i = [];
                        for (let t = e; t < this.i; ++t) i.push(this.getElementByPos(t));
                        this.cut(e - 1);
                        for (let e = 0; e < r; ++e) this.pushBack(t);
                        for (let e = 0; e < i.length; ++e) this.pushBack(i[e])
                    }
                    return this.i
                }
                cut(e) {
                    if (e < 0) return this.clear(), 0;
                    let {
                        curNodeBucketIndex: t,
                        curNodePointerIndex: r
                    } = this.O(e);
                    return this.R = t, this.N = r, this.i = e + 1, this.i
                }
                eraseElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    if (0 === e) this.popFront();
                    else if (e === this.i - 1) this.popBack();
                    else {
                        let t = [];
                        for (let r = e + 1; r < this.i; ++r) t.push(this.getElementByPos(r));
                        this.cut(e), this.popBack();
                        let r = this;
                        t.forEach((e => {
                            r.pushBack(e)
                        }))
                    }
                    return this.i
                }
                eraseElementByValue(e) {
                    if (0 === this.i) return 0;
                    let t = [];
                    for (let r = 0; r < this.i; ++r) {
                        let i = this.getElementByPos(r);
                        i !== e && t.push(i)
                    }
                    let r = t.length;
                    for (let e = 0; e < r; ++e) this.setElementByPos(e, t[e]);
                    return this.cut(r - 1)
                }
                eraseElementByIterator(e) {
                    let t = e.o;
                    return this.eraseElementByPos(t), e = e.next()
                }
                find(e) {
                    for (let t = 0; t < this.i; ++t)
                        if (this.getElementByPos(t) === e) return new n(t, this);
                    return this.end()
                }
                reverse() {
                    let e = 0,
                        t = this.i - 1;
                    for (; e < t;) {
                        let r = this.getElementByPos(e);
                        this.setElementByPos(e, this.getElementByPos(t)), this.setElementByPos(t, r), e += 1, t -= 1
                    }
                }
                unique() {
                    if (this.i <= 1) return this.i;
                    let e = 1,
                        t = this.getElementByPos(0);
                    for (let r = 1; r < this.i; ++r) {
                        let i = this.getElementByPos(r);
                        i !== t && (t = i, this.setElementByPos(e++, i))
                    }
                    for (; this.i > e;) this.popBack();
                    return this.i
                }
                sort(e) {
                    let t = [];
                    for (let e = 0; e < this.i; ++e) t.push(this.getElementByPos(e));
                    t.sort(e);
                    for (let e = 0; e < this.i; ++e) this.setElementByPos(e, t[e])
                }
                shrinkToFit() {
                    if (0 === this.i) return;
                    let e = [];
                    this.forEach((t => {
                        e.push(t)
                    })), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
                    for (let e = 0; e < this.P; ++e) this.A.push(Array(this.F));
                    for (let t = 0; t < e.length; ++t) this.pushBack(e[t])
                }
                forEach(e) {
                    for (let t = 0; t < this.i; ++t) e(this.getElementByPos(t), t, this)
                } [Symbol.iterator]() {
                    return function*() {
                        for (let e = 0; e < this.i; ++e) yield this.getElementByPos(e)
                    }.bind(this)()
                }
            };
        e.default = s
    })),
    Ki = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.TreeNodeEnableIndex = e.TreeNode = void 0;
        var t = class {
            constructor(e, t) {
                this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = e, this.l = t
            }
            L() {
                let e = this;
                if (1 === e.ee && e.tt.tt === e) e = e.W;
                else if (e.U)
                    for (e = e.U; e.W;) e = e.W;
                else {
                    let t = e.tt;
                    for (; t.U === e;) e = t, t = e.tt;
                    e = t
                }
                return e
            }
            B() {
                let e = this;
                if (e.W) {
                    for (e = e.W; e.U;) e = e.U;
                    return e
                } {
                    let t = e.tt;
                    for (; t.W === e;) e = t, t = e.tt;
                    return e.W !== t ? t : e
                }
            }
            te() {
                let e = this.tt,
                    t = this.W,
                    r = t.U;
                return e.tt === this ? e.tt = t : e.U === this ? e.U = t : e.W = t, t.tt = e, t.U = this, this.tt = t, this.W = r, r && (r.tt = this), t
            }
            se() {
                let e = this.tt,
                    t = this.U,
                    r = t.W;
                return e.tt === this ? e.tt = t : e.U === this ? e.U = t : e.W = t, t.tt = e, t.W = this, this.tt = t, this.U = r, r && (r.tt = this), t
            }
        };
        e.TreeNode = t;
        e.TreeNodeEnableIndex = class extends t {
            constructor() {
                super(...arguments), this.rt = 1
            }
            te() {
                let e = super.te();
                return this.ie(), e.ie(), e
            }
            se() {
                let e = super.se();
                return this.ie(), e.ie(), e
            }
            ie() {
                this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt)
            }
        }
    })),
    Yi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = Ki(),
            r = Li(),
            i = qi(),
            n = class extends r.Container {
                constructor(e = ((e, t) => e < t ? -1 : e > t ? 1 : 0), r = !1) {
                    super(), this.Y = void 0, this.v = e, r ? (this.re = t.TreeNodeEnableIndex, this.M = function(e, t, r) {
                        let i = this.ne(e, t, r);
                        if (i) {
                            let e = i.tt;
                            for (; e !== this.h;) e.rt += 1, e = e.tt;
                            let t = this.he(i);
                            if (t) {
                                let {
                                    parentNode: e,
                                    grandParent: r,
                                    curNode: i
                                } = t;
                                e.ie(), r.ie(), i.ie()
                            }
                        }
                        return this.i
                    }, this.V = function(e) {
                        let t = this.fe(e);
                        for (; t !== this.h;) t.rt -= 1, t = t.tt
                    }) : (this.re = t.TreeNode, this.M = function(e, t, r) {
                        let i = this.ne(e, t, r);
                        return i && this.he(i), this.i
                    }, this.V = this.fe), this.h = new this.re
                }
                X(e, t) {
                    let r = this.h;
                    for (; e;) {
                        let i = this.v(e.u, t);
                        if (i < 0) e = e.W;
                        else {
                            if (!(i > 0)) return e;
                            r = e, e = e.U
                        }
                    }
                    return r
                }
                Z(e, t) {
                    let r = this.h;
                    for (; e;) this.v(e.u, t) <= 0 ? e = e.W : (r = e, e = e.U);
                    return r
                }
                $(e, t) {
                    let r = this.h;
                    for (; e;) {
                        let i = this.v(e.u, t);
                        if (i < 0) r = e, e = e.W;
                        else {
                            if (!(i > 0)) return e;
                            e = e.U
                        }
                    }
                    return r
                }
                rr(e, t) {
                    let r = this.h;
                    for (; e;) this.v(e.u, t) < 0 ? (r = e, e = e.W) : e = e.U;
                    return r
                }
                ue(e) {
                    for (;;) {
                        let t = e.tt;
                        if (t === this.h) return;
                        if (1 === e.ee) return void(e.ee = 0);
                        if (e === t.U) {
                            let r = t.W;
                            if (1 === r.ee) r.ee = 0, t.ee = 1, t === this.Y ? this.Y = t.te() : t.te();
                            else {
                                if (r.W && 1 === r.W.ee) return r.ee = t.ee, t.ee = 0, r.W.ee = 0, void(t === this.Y ? this.Y = t.te() : t.te());
                                r.U && 1 === r.U.ee ? (r.ee = 1, r.U.ee = 0, r.se()) : (r.ee = 1, e = t)
                            }
                        } else {
                            let r = t.U;
                            if (1 === r.ee) r.ee = 0, t.ee = 1, t === this.Y ? this.Y = t.se() : t.se();
                            else {
                                if (r.U && 1 === r.U.ee) return r.ee = t.ee, t.ee = 0, r.U.ee = 0, void(t === this.Y ? this.Y = t.se() : t.se());
                                r.W && 1 === r.W.ee ? (r.ee = 1, r.W.ee = 0, r.te()) : (r.ee = 1, e = t)
                            }
                        }
                    }
                }
                fe(e) {
                    if (1 === this.i) return this.clear(), this.h;
                    let t = e;
                    for (; t.U || t.W;) {
                        if (t.W)
                            for (t = t.W; t.U;) t = t.U;
                        else t = t.U;
                        [e.u, t.u] = [t.u, e.u], [e.l, t.l] = [t.l, e.l], e = t
                    }
                    this.h.U === t ? this.h.U = t.tt : this.h.W === t && (this.h.W = t.tt), this.ue(t);
                    let r = t.tt;
                    return t === r.U ? r.U = void 0 : r.W = void 0, this.i -= 1, this.Y.ee = 0, r
                }
                oe(e, t) {
                    return void 0 !== e && (!(!this.oe(e.U, t) && !t(e)) || this.oe(e.W, t))
                }
                he(e) {
                    for (;;) {
                        let t = e.tt;
                        if (0 === t.ee) return;
                        let r = t.tt;
                        if (t === r.U) {
                            let i = r.W;
                            if (i && 1 === i.ee) {
                                if (i.ee = t.ee = 0, r === this.Y) return;
                                r.ee = 1, e = r;
                                continue
                            }
                            if (e === t.W) {
                                if (e.ee = 0, e.U && (e.U.tt = t), e.W && (e.W.tt = r), t.W = e.U, r.U = e.W, e.U = t, e.W = r, r === this.Y) this.Y = e, this.h.tt = e;
                                else {
                                    let t = r.tt;
                                    t.U === r ? t.U = e : t.W = e
                                }
                                return e.tt = r.tt, t.tt = e, r.tt = e, r.ee = 1, {
                                    parentNode: t,
                                    grandParent: r,
                                    curNode: e
                                }
                            }
                            t.ee = 0, r === this.Y ? this.Y = r.se() : r.se(), r.ee = 1
                        } else {
                            let i = r.U;
                            if (i && 1 === i.ee) {
                                if (i.ee = t.ee = 0, r === this.Y) return;
                                r.ee = 1, e = r;
                                continue
                            }
                            if (e === t.U) {
                                if (e.ee = 0, e.U && (e.U.tt = r), e.W && (e.W.tt = t), r.W = e.U, t.U = e.W, e.U = r, e.W = t, r === this.Y) this.Y = e, this.h.tt = e;
                                else {
                                    let t = r.tt;
                                    t.U === r ? t.U = e : t.W = e
                                }
                                return e.tt = r.tt, t.tt = e, r.tt = e, r.ee = 1, {
                                    parentNode: t,
                                    grandParent: r,
                                    curNode: e
                                }
                            }
                            t.ee = 0, r === this.Y ? this.Y = r.te() : r.te(), r.ee = 1
                        }
                        return
                    }
                }
                ne(e, t, r) {
                    if (void 0 === this.Y) return this.i += 1, this.Y = new this.re(e, t), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, void(this.h.W = this.Y);
                    let i, n = this.h.U,
                        s = this.v(n.u, e);
                    if (0 !== s) {
                        if (s > 0) n.U = new this.re(e, t), n.U.tt = n, i = n.U, this.h.U = i;
                        else {
                            let n = this.h.W,
                                s = this.v(n.u, e);
                            if (0 === s) return void(n.l = t);
                            if (s < 0) n.W = new this.re(e, t), n.W.tt = n, i = n.W, this.h.W = i;
                            else {
                                if (void 0 !== r) {
                                    let n = r.o;
                                    if (n !== this.h) {
                                        let r = this.v(n.u, e);
                                        if (0 === r) return void(n.l = t);
                                        if (r > 0) {
                                            let r = n.L(),
                                                s = this.v(r.u, e);
                                            if (0 === s) return void(r.l = t);
                                            s < 0 && (i = new this.re(e, t), void 0 === r.W ? (r.W = i, i.tt = r) : (n.U = i, i.tt = n))
                                        }
                                    }
                                }
                                if (void 0 === i)
                                    for (i = this.Y;;) {
                                        let r = this.v(i.u, e);
                                        if (r > 0) {
                                            if (void 0 === i.U) {
                                                i.U = new this.re(e, t), i.U.tt = i, i = i.U;
                                                break
                                            }
                                            i = i.U
                                        } else {
                                            if (!(r < 0)) return void(i.l = t);
                                            if (void 0 === i.W) {
                                                i.W = new this.re(e, t), i.W.tt = i, i = i.W;
                                                break
                                            }
                                            i = i.W
                                        }
                                    }
                            }
                        }
                        return this.i += 1, i
                    }
                    n.l = t
                }
                I(e, t) {
                    for (; e;) {
                        let r = this.v(e.u, t);
                        if (r < 0) e = e.W;
                        else {
                            if (!(r > 0)) return e;
                            e = e.U
                        }
                    }
                    return e || this.h
                }
                clear() {
                    this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0
                }
                updateKeyByIterator(e, t) {
                    let r = e.o;
                    if (r === this.h && (0, i.throwIteratorAccessError)(), 1 === this.i) return r.u = t, !0;
                    if (r === this.h.U) return this.v(r.B().u, t) > 0 && (r.u = t, !0);
                    if (r === this.h.W) return this.v(r.L().u, t) < 0 && (r.u = t, !0);
                    let n = r.L().u;
                    if (this.v(n, t) >= 0) return !1;
                    let s = r.B().u;
                    return !(this.v(s, t) <= 0) && (r.u = t, !0)
                }
                eraseElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let t = 0,
                        r = this;
                    return this.oe(this.Y, (i => e === t ? (r.V(i), !0) : (t += 1, !1))), this.i
                }
                eraseElementByKey(e) {
                    if (0 === this.i) return !1;
                    let t = this.I(this.Y, e);
                    return t !== this.h && (this.V(t), !0)
                }
                eraseElementByIterator(e) {
                    let t = e.o;
                    t === this.h && (0, i.throwIteratorAccessError)();
                    let r = void 0 === t.W;
                    return 0 === e.iteratorType ? r && e.next() : (!r || void 0 === t.U) && e.next(), this.V(t), e
                }
                forEach(e) {
                    let t = 0;
                    for (let r of this) e(r, t++, this)
                }
                getElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let t, r = 0;
                    for (let i of this) {
                        if (r === e) {
                            t = i;
                            break
                        }
                        r += 1
                    }
                    return t
                }
                getHeight() {
                    if (0 === this.i) return 0;
                    let e = t => t ? Math.max(e(t.U), e(t.W)) + 1 : 0;
                    return e(this.Y)
                }
            };
        e.default = n
    })),
    Gi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = Li(),
            r = qi(),
            i = class extends t.ContainerIterator {
                constructor(e, t, i) {
                    super(i), this.o = e, this.h = t, 0 === this.iteratorType ? (this.pre = function() {
                        return this.o === this.h.U && (0, r.throwIteratorAccessError)(), this.o = this.o.L(), this
                    }, this.next = function() {
                        return this.o === this.h && (0, r.throwIteratorAccessError)(), this.o = this.o.B(), this
                    }) : (this.pre = function() {
                        return this.o === this.h.W && (0, r.throwIteratorAccessError)(), this.o = this.o.B(), this
                    }, this.next = function() {
                        return this.o === this.h && (0, r.throwIteratorAccessError)(), this.o = this.o.L(), this
                    })
                }
                get index() {
                    let e = this.o,
                        t = this.h.tt;
                    if (e === this.h) return t ? t.rt - 1 : 0;
                    let r = 0;
                    for (e.U && (r += e.U.rt); e !== t;) {
                        let t = e.tt;
                        e === t.W && (r += 1, t.U && (r += t.U.rt)), e = t
                    }
                    return r
                }
            };
        e.default = i
    })),
    Qi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = n(Yi()),
            r = n(Gi()),
            i = qi();

        function n(e) {
            return e && e.t ? e : {
                default: e
            }
        }
        var s = class e extends r.default {
                constructor(e, t, r, i) {
                    super(e, t, i), this.container = r
                }
                get pointer() {
                    return this.o === this.h && (0, i.throwIteratorAccessError)(), this.o.u
                }
                copy() {
                    return new e(this.o, this.h, this.container, this.iteratorType)
                }
            },
            o = class extends t.default {
                constructor(e = [], t, r) {
                    super(t, r);
                    let i = this;
                    e.forEach((e => {
                        i.insert(e)
                    }))
                }* K(e) {
                    void 0 !== e && (yield* this.K(e.U), yield e.u, yield* this.K(e.W))
                }
                begin() {
                    return new s(this.h.U || this.h, this.h, this)
                }
                end() {
                    return new s(this.h, this.h, this)
                }
                rBegin() {
                    return new s(this.h.W || this.h, this.h, this, 1)
                }
                rEnd() {
                    return new s(this.h, this.h, this, 1)
                }
                front() {
                    return this.h.U ? this.h.U.u : void 0
                }
                back() {
                    return this.h.W ? this.h.W.u : void 0
                }
                insert(e, t) {
                    return this.M(e, void 0, t)
                }
                find(e) {
                    let t = this.I(this.Y, e);
                    return new s(t, this.h, this)
                }
                lowerBound(e) {
                    let t = this.X(this.Y, e);
                    return new s(t, this.h, this)
                }
                upperBound(e) {
                    let t = this.Z(this.Y, e);
                    return new s(t, this.h, this)
                }
                reverseLowerBound(e) {
                    let t = this.$(this.Y, e);
                    return new s(t, this.h, this)
                }
                reverseUpperBound(e) {
                    let t = this.rr(this.Y, e);
                    return new s(t, this.h, this)
                }
                union(e) {
                    let t = this;
                    return e.forEach((e => {
                        t.insert(e)
                    })), this.i
                } [Symbol.iterator]() {
                    return this.K(this.Y)
                }
            };
        e.default = o
    })),
    Ji = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = n(Yi()),
            r = n(Gi()),
            i = qi();

        function n(e) {
            return e && e.t ? e : {
                default: e
            }
        }
        var s = class e extends r.default {
                constructor(e, t, r, i) {
                    super(e, t, i), this.container = r
                }
                get pointer() {
                    this.o === this.h && (0, i.throwIteratorAccessError)();
                    let e = this;
                    return new Proxy([], {
                        get: (t, r) => "0" === r ? e.o.u : "1" === r ? e.o.l : void 0,
                        set(t, r, i) {
                            if ("1" !== r) throw new TypeError("props must be 1");
                            return e.o.l = i, !0
                        }
                    })
                }
                copy() {
                    return new e(this.o, this.h, this.container, this.iteratorType)
                }
            },
            o = class extends t.default {
                constructor(e = [], t, r) {
                    super(t, r);
                    let i = this;
                    e.forEach((e => {
                        i.setElement(e[0], e[1])
                    }))
                }* K(e) {
                    void 0 !== e && (yield* this.K(e.U), yield [e.u, e.l], yield* this.K(e.W))
                }
                begin() {
                    return new s(this.h.U || this.h, this.h, this)
                }
                end() {
                    return new s(this.h, this.h, this)
                }
                rBegin() {
                    return new s(this.h.W || this.h, this.h, this, 1)
                }
                rEnd() {
                    return new s(this.h, this.h, this, 1)
                }
                front() {
                    if (0 === this.i) return;
                    let e = this.h.U;
                    return [e.u, e.l]
                }
                back() {
                    if (0 === this.i) return;
                    let e = this.h.W;
                    return [e.u, e.l]
                }
                lowerBound(e) {
                    let t = this.X(this.Y, e);
                    return new s(t, this.h, this)
                }
                upperBound(e) {
                    let t = this.Z(this.Y, e);
                    return new s(t, this.h, this)
                }
                reverseLowerBound(e) {
                    let t = this.$(this.Y, e);
                    return new s(t, this.h, this)
                }
                reverseUpperBound(e) {
                    let t = this.rr(this.Y, e);
                    return new s(t, this.h, this)
                }
                setElement(e, t, r) {
                    return this.M(e, t, r)
                }
                find(e) {
                    let t = this.I(this.Y, e);
                    return new s(t, this.h, this)
                }
                getElementByKey(e) {
                    return this.I(this.Y, e).l
                }
                union(e) {
                    let t = this;
                    return e.forEach((e => {
                        t.setElement(e[0], e[1])
                    })), this.i
                } [Symbol.iterator]() {
                    return this.K(this.Y)
                }
            };
        e.default = o
    })),
    Xi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = function(e) {
            let t = typeof e;
            return "object" === t && null !== e || "function" === t
        }
    })),
    Zi = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.HashContainerIterator = e.HashContainer = void 0;
        var t, r = Li(),
            i = (t = Xi()) && t.t ? t : {
                default: t
            },
            n = qi();
        var s = class extends r.ContainerIterator {
            constructor(e, t, r) {
                super(r), this.o = e, this.h = t, 0 === this.iteratorType ? (this.pre = function() {
                    return this.o.L === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                }, this.next = function() {
                    return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                }) : (this.pre = function() {
                    return this.o.B === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                }, this.next = function() {
                    return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                })
            }
        };
        e.HashContainerIterator = s;
        var o = class extends r.Container {
            constructor() {
                super(), this.H = [], this.g = {}, this.HASH_TAG = Symbol(), Object.setPrototypeOf(this.g, null), this.h = {}, this.h.L = this.h.B = this.p = this._ = this.h
            }
            V(e) {
                let {
                    L: t,
                    B: r
                } = e;
                t.B = r, r.L = t, e === this.p && (this.p = r), e === this._ && (this._ = t), this.i -= 1
            }
            M(e, t, r) {
                let n;
                if (void 0 === r && (r = (0, i.default)(e)), r) {
                    let r = e[this.HASH_TAG];
                    if (void 0 !== r) return this.H[r].l = t, this.i;
                    Object.defineProperty(e, this.HASH_TAG, {
                        value: this.H.length,
                        configurable: !0
                    }), n = {
                        u: e,
                        l: t,
                        L: this._,
                        B: this.h
                    }, this.H.push(n)
                } else {
                    let r = this.g[e];
                    if (r) return r.l = t, this.i;
                    n = {
                        u: e,
                        l: t,
                        L: this._,
                        B: this.h
                    }, this.g[e] = n
                }
                return 0 === this.i ? (this.p = n, this.h.B = n) : this._.B = n, this._ = n, this.h.L = n, ++this.i
            }
            I(e, t) {
                if (void 0 === t && (t = (0, i.default)(e)), t) {
                    let t = e[this.HASH_TAG];
                    return void 0 === t ? this.h : this.H[t]
                }
                return this.g[e] || this.h
            }
            clear() {
                let e = this.HASH_TAG;
                this.H.forEach((t => {
                    delete t.u[e]
                })), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h
            }
            eraseElementByKey(e, t) {
                let r;
                if (void 0 === t && (t = (0, i.default)(e)), t) {
                    let t = e[this.HASH_TAG];
                    if (void 0 === t) return !1;
                    delete e[this.HASH_TAG], r = this.H[t], delete this.H[t]
                } else {
                    if (r = this.g[e], void 0 === r) return !1;
                    delete this.g[e]
                }
                return this.V(r), !0
            }
            eraseElementByIterator(e) {
                let t = e.o;
                return t === this.h && (0, n.throwIteratorAccessError)(), this.V(t), e.next()
            }
            eraseElementByPos(e) {
                if (e < 0 || e > this.i - 1) throw new RangeError;
                let t = this.p;
                for (; e--;) t = t.B;
                return this.V(t), this.i
            }
        };
        e.HashContainer = o
    })),
    en = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t = Zi(),
            r = qi(),
            i = class e extends t.HashContainerIterator {
                constructor(e, t, r, i) {
                    super(e, t, i), this.container = r
                }
                get pointer() {
                    return this.o === this.h && (0, r.throwIteratorAccessError)(), this.o.u
                }
                copy() {
                    return new e(this.o, this.h, this.container, this.iteratorType)
                }
            },
            n = class extends t.HashContainer {
                constructor(e = []) {
                    super();
                    let t = this;
                    e.forEach((e => {
                        t.insert(e)
                    }))
                }
                begin() {
                    return new i(this.p, this.h, this)
                }
                end() {
                    return new i(this.h, this.h, this)
                }
                rBegin() {
                    return new i(this._, this.h, this, 1)
                }
                rEnd() {
                    return new i(this.h, this.h, this, 1)
                }
                front() {
                    return this.p.u
                }
                back() {
                    return this._.u
                }
                insert(e, t) {
                    return this.M(e, void 0, t)
                }
                getElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let t = this.p;
                    for (; e--;) t = t.B;
                    return t.u
                }
                find(e, t) {
                    let r = this.I(e, t);
                    return new i(r, this.h, this)
                }
                forEach(e) {
                    let t = 0,
                        r = this.p;
                    for (; r !== this.h;) e(r.u, t++, this), r = r.B
                } [Symbol.iterator]() {
                    return function*() {
                        let e = this.p;
                        for (; e !== this.h;) yield e.u, e = e.B
                    }.bind(this)()
                }
            };
        e.default = n
    })),
    tn = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), e.default = void 0;
        var t, r = Zi(),
            i = (t = Xi()) && t.t ? t : {
                default: t
            },
            n = qi();
        var s = class e extends r.HashContainerIterator {
                constructor(e, t, r, i) {
                    super(e, t, i), this.container = r
                }
                get pointer() {
                    this.o === this.h && (0, n.throwIteratorAccessError)();
                    let e = this;
                    return new Proxy([], {
                        get: (t, r) => "0" === r ? e.o.u : "1" === r ? e.o.l : void 0,
                        set(t, r, i) {
                            if ("1" !== r) throw new TypeError("props must be 1");
                            return e.o.l = i, !0
                        }
                    })
                }
                copy() {
                    return new e(this.o, this.h, this.container, this.iteratorType)
                }
            },
            o = class extends r.HashContainer {
                constructor(e = []) {
                    super();
                    let t = this;
                    e.forEach((e => {
                        t.setElement(e[0], e[1])
                    }))
                }
                begin() {
                    return new s(this.p, this.h, this)
                }
                end() {
                    return new s(this.h, this.h, this)
                }
                rBegin() {
                    return new s(this._, this.h, this, 1)
                }
                rEnd() {
                    return new s(this.h, this.h, this, 1)
                }
                front() {
                    if (0 !== this.i) return [this.p.u, this.p.l]
                }
                back() {
                    if (0 !== this.i) return [this._.u, this._.l]
                }
                setElement(e, t, r) {
                    return this.M(e, t, r)
                }
                getElementByKey(e, t) {
                    if (void 0 === t && (t = (0, i.default)(e)), t) {
                        let t = e[this.HASH_TAG];
                        return void 0 !== t ? this.H[t].l : void 0
                    }
                    let r = this.g[e];
                    return r ? r.l : void 0
                }
                getElementByPos(e) {
                    if (e < 0 || e > this.i - 1) throw new RangeError;
                    let t = this.p;
                    for (; e--;) t = t.B;
                    return [t.u, t.l]
                }
                find(e, t) {
                    let r = this.I(e, t);
                    return new s(r, this.h, this)
                }
                forEach(e) {
                    let t = 0,
                        r = this.p;
                    for (; r !== this.h;) e([r.u, r.l], t++, this), r = r.B
                } [Symbol.iterator]() {
                    return function*() {
                        let e = this.p;
                        for (; e !== this.h;) yield [e.u, e.l], e = e.B
                    }.bind(this)()
                }
            };
        e.default = o
    })),
    rn = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "t", {
            value: !0
        }), Object.defineProperty(e, "Deque", {
            enumerable: !0,
            get() {
                return o.default
            }
        }), Object.defineProperty(e, "HashMap", {
            enumerable: !0,
            get() {
                return c.default
            }
        }), Object.defineProperty(e, "HashSet", {
            enumerable: !0,
            get() {
                return u.default
            }
        }), Object.defineProperty(e, "LinkList", {
            enumerable: !0,
            get() {
                return s.default
            }
        }), Object.defineProperty(e, "OrderedMap", {
            enumerable: !0,
            get() {
                return h.default
            }
        }), Object.defineProperty(e, "OrderedSet", {
            enumerable: !0,
            get() {
                return a.default
            }
        }), Object.defineProperty(e, "PriorityQueue", {
            enumerable: !0,
            get() {
                return i.default
            }
        }), Object.defineProperty(e, "Queue", {
            enumerable: !0,
            get() {
                return r.default
            }
        }), Object.defineProperty(e, "Stack", {
            enumerable: !0,
            get() {
                return t.default
            }
        }), Object.defineProperty(e, "Vector", {
            enumerable: !0,
            get() {
                return n.default
            }
        });
        var t = f(ji()),
            r = f(Di()),
            i = f(Fi()),
            n = f(Hi()),
            s = f(Vi()),
            o = f(zi()),
            a = f(Qi()),
            h = f(Ji()),
            u = f(en()),
            c = f(tn());

        function f(e) {
            return e && e.t ? e : {
                default: e
            }
        }
    })),
    nn = s(((e, t) => {
        l(), Ze(), De();
        var r = rn().OrderedSet,
            i = wi()("number-allocator:trace"),
            n = wi()("number-allocator:error");

        function s(e, t) {
            this.low = e, this.high = t
        }

        function o(e, t) {
            if (!(this instanceof o)) return new o(e, t);
            this.min = e, this.max = t, this.ss = new r([], ((e, t) => e.compare(t))), i("Create"), this.clear()
        }
        s.prototype.equals = function(e) {
            return this.low === e.low && this.high === e.high
        }, s.prototype.compare = function(e) {
            return this.low < e.low && this.high < e.low ? -1 : e.low < this.low && e.high < this.low ? 1 : 0
        }, o.prototype.firstVacant = function() {
            return 0 === this.ss.size() ? null : this.ss.front().low
        }, o.prototype.alloc = function() {
            if (0 === this.ss.size()) return i("alloc():empty"), null;
            let e = this.ss.begin(),
                t = e.pointer.low,
                r = e.pointer.high,
                n = t;
            return n + 1 <= r ? this.ss.updateKeyByIterator(e, new s(t + 1, r)) : this.ss.eraseElementByPos(0), i("alloc():" + n), n
        }, o.prototype.use = function(e) {
            let t = new s(e, e),
                r = this.ss.lowerBound(t);
            if (!r.equals(this.ss.end())) {
                let n = r.pointer.low,
                    o = r.pointer.high;
                return r.pointer.equals(t) ? (this.ss.eraseElementByIterator(r), i("use():" + e), !0) : !(n > e) && (n === e ? (this.ss.updateKeyByIterator(r, new s(n + 1, o)), i("use():" + e), !0) : o === e ? (this.ss.updateKeyByIterator(r, new s(n, o - 1)), i("use():" + e), !0) : (this.ss.updateKeyByIterator(r, new s(e + 1, o)), this.ss.insert(new s(n, e - 1)), i("use():" + e), !0))
            }
            return i("use():failed"), !1
        }, o.prototype.free = function(e) {
            if (e < this.min || e > this.max) return void n("free():" + e + " is out of range");
            let t = new s(e, e),
                r = this.ss.upperBound(t);
            if (r.equals(this.ss.end())) {
                if (r.equals(this.ss.begin())) return void this.ss.insert(t);
                r.pre();
                let i = r.pointer.high;
                r.pointer.high + 1 === e ? this.ss.updateKeyByIterator(r, new s(i, e)) : this.ss.insert(t)
            } else if (r.equals(this.ss.begin()))
                if (e + 1 === r.pointer.low) {
                    let t = r.pointer.high;
                    this.ss.updateKeyByIterator(r, new s(e, t))
                } else this.ss.insert(t);
            else {
                let i = r.pointer.low,
                    n = r.pointer.high;
                r.pre();
                let o = r.pointer.low;
                r.pointer.high + 1 === e ? e + 1 === i ? (this.ss.eraseElementByIterator(r), this.ss.updateKeyByIterator(r, new s(o, n))) : this.ss.updateKeyByIterator(r, new s(o, e)) : e + 1 === i ? (this.ss.eraseElementByIterator(r.next()), this.ss.insert(new s(e, n))) : this.ss.insert(t)
            }
            i("free():" + e)
        }, o.prototype.clear = function() {
            i("clear()"), this.ss.clear(), this.ss.insert(new s(this.min, this.max))
        }, o.prototype.intervalCount = function() {
            return this.ss.size()
        }, o.prototype.dump = function() {
            for (let e of this.ss);
        }, t.exports = o
    })),
    sn = s(((e, t) => {
        l(), Ze(), De();
        var r = nn();
        t.exports.NumberAllocator = r
    })),
    on = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = Ui(),
            r = sn();
        e.default = class {
            constructor(e) {
                e > 0 && (this.aliasToTopic = new t.LRUCache({
                    max: e
                }), this.topicToAlias = {}, this.numberAllocator = new r.NumberAllocator(1, e), this.max = e, this.length = 0)
            }
            put(e, t) {
                if (0 === t || t > this.max) return !1;
                let r = this.aliasToTopic.get(t);
                return r && delete this.topicToAlias[r], this.aliasToTopic.set(t, e), this.topicToAlias[e] = t, this.numberAllocator.use(t), this.length = this.aliasToTopic.size, !0
            }
            getTopicByAlias(e) {
                return this.aliasToTopic.get(e)
            }
            getAliasByTopic(e) {
                let t = this.topicToAlias[e];
                return typeof t < "u" && this.aliasToTopic.get(t), t
            }
            clear() {
                this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0
            }
            getLruAlias() {
                return this.numberAllocator.firstVacant() || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1]
            }
        }
    })),
    an = s((e => {
        l(), Ze(), De();
        var t = e && e.__importDefault || (e => e && e.__esModule ? e : {
            default: e
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = Ni(),
            i = t(on()),
            n = xi();
        e.default = (e, t) => {
            e.log("_handleConnack");
            let {
                options: s
            } = e, o = 5 === s.protocolVersion ? t.reasonCode : t.returnCode;
            if (clearTimeout(e.connackTimer), delete e.topicAliasSend, t.properties) {
                if (t.properties.topicAliasMaximum) {
                    if (t.properties.topicAliasMaximum > 65535) return void e.emit("error", Error("topicAliasMaximum from broker is out of range"));
                    t.properties.topicAliasMaximum > 0 && (e.topicAliasSend = new i.default(t.properties.topicAliasMaximum))
                }
                t.properties.serverKeepAlive && s.keepalive && (s.keepalive = t.properties.serverKeepAlive, e._shiftPingInterval()), t.properties.maximumPacketSize && (s.properties || (s.properties = {}), s.properties.maximumPacketSize = t.properties.maximumPacketSize)
            }
            if (0 === o) e.reconnecting = !1, e._onConnect(t);
            else if (o > 0) {
                let t = new n.ErrorWithReasonCode("Connection refused: " + r.ReasonCodes[o], o);
                e.emit("error", t)
            }
        }
    })),
    ln = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = (e, t, r) => {
            e.log("handling pubrel packet");
            let i = typeof r < "u" ? r : e.noop,
                {
                    messageId: n
                } = t,
                s = {
                    cmd: "pubcomp",
                    messageId: n
                };
            e.incomingStore.get(t, ((t, r) => {
                t ? e._sendPacket(s, i) : (e.emit("message", r.topic, r.payload, r), e.handleMessage(r, (t => {
                    if (t) return i(t);
                    e.incomingStore.del(r, e.noop), e._sendPacket(s, i)
                })))
            }))
        }
    })),
    hn = s((e => {
        l(), Ze(), De();
        var t = e && e.__importDefault || (e => e && e.__esModule ? e : {
            default: e
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t(Bi()),
            i = t(Mi()),
            n = t(an()),
            s = t(Ni()),
            o = t(ln());
        e.default = (e, t, a) => {
            let {
                options: l
            } = e;
            if (5 === l.protocolVersion && l.properties && l.properties.maximumPacketSize && l.properties.maximumPacketSize < t.length) return e.emit("error", Error("exceeding packets size " + t.cmd)), e.end({
                reasonCode: 149,
                properties: {
                    reasonString: "Maximum packet size was exceeded"
                }
            }), e;
            switch (e.log("_handlePacket :: emitting packetreceive"), e.emit("packetreceive", t), t.cmd) {
                case "publish":
                    (0, r.default)(e, t, a);
                    break;
                case "puback":
                case "pubrec":
                case "pubcomp":
                case "suback":
                case "unsuback":
                    (0, s.default)(e, t), a();
                    break;
                case "pubrel":
                    (0, o.default)(e, t, a);
                    break;
                case "connack":
                    (0, n.default)(e, t), a();
                    break;
                case "auth":
                    (0, i.default)(e, t), a();
                    break;
                case "pingresp":
                    e.pingResp = !0, a();
                    break;
                case "disconnect":
                    e.emit("disconnect", t), a();
                    break;
                default:
                    e.log("_handlePacket :: unknown command"), a()
            }
        }
    })),
    un = s((e => {
        l(), Ze(), De();
        var t = e && e.__importDefault || (e => e && e.__esModule ? e : {
            default: e
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TypedEventEmitter = void 0;
        var r = t((Nt(), a(kt))),
            i = xi(),
            n = class {};
        e.TypedEventEmitter = n, (0, i.applyMixin)(n, r.default)
    })),
    cn = s(((e, t) => {
        var r, i;
        l(), Ze(), De(), r = e, i = e => {
            var t, r = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER,
                i = 536870912,
                n = 2 * i,
                s = new WeakMap,
                o = ((e, t) => s => {
                    var o = t.get(s),
                        a = void 0 === o ? s.size : o < n ? o + 1 : 0;
                    if (!s.has(a)) return e(s, a);
                    if (s.size < i) {
                        for (; s.has(a);) a = Math.floor(Math.random() * n);
                        return e(s, a)
                    }
                    if (s.size > r) throw Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                    for (; s.has(a);) a = Math.floor(Math.random() * r);
                    return e(s, a)
                })((t = s, (e, r) => (t.set(e, r), r)), s),
                a = (e => t => {
                    var r = e(t);
                    return t.add(r), r
                })(o);
            e.addUniqueNumber = a, e.generateUniqueNumber = o
        }, "object" == typeof e && typeof t < "u" ? i(e) : "function" == typeof define && define.amd ? define(["exports"], i) : i((r = typeof globalThis < "u" ? globalThis : r || self).fastUniqueNumbers = {})
    })),
    fn = s(((e, t) => {
        var r, i;
        l(), Ze(), De(), r = e, i = (e, t) => {
            e.load = e => {
                var r = new Map([
                        [0, () => {}]
                    ]),
                    i = new Map([
                        [0, () => {}]
                    ]),
                    n = new Map,
                    s = new Worker(e);
                return s.addEventListener("message", (e => {
                    var t = e.data;
                    if ((e => void 0 !== e.method && "call" === e.method)(t)) {
                        var s = t.params,
                            o = s.timerId,
                            a = s.timerType;
                        if ("interval" === a) {
                            var l = r.get(o);
                            if ("number" == typeof l) {
                                var h = n.get(l);
                                if (void 0 === h || h.timerId !== o || h.timerType !== a) throw Error("The timer is in an undefined state.")
                            } else {
                                if (!(typeof l < "u")) throw Error("The timer is in an undefined state.");
                                l()
                            }
                        } else if ("timeout" === a) {
                            var u = i.get(o);
                            if ("number" == typeof u) {
                                var c = n.get(u);
                                if (void 0 === c || c.timerId !== o || c.timerType !== a) throw Error("The timer is in an undefined state.")
                            } else {
                                if (!(typeof u < "u")) throw Error("The timer is in an undefined state.");
                                u(), i.delete(o)
                            }
                        }
                    } else {
                        if (!(e => null === e.error && "number" == typeof e.id)(t)) {
                            var f = t.error.message;
                            throw Error(f)
                        }
                        var d = t.id,
                            p = n.get(d);
                        if (void 0 === p) throw Error("The timer is in an undefined state.");
                        var g = p.timerId,
                            b = p.timerType;
                        n.delete(d), "interval" === b ? r.delete(g) : i.delete(g)
                    }
                })), {
                    clearInterval(e) {
                        var i = t.generateUniqueNumber(n);
                        n.set(i, {
                            timerId: e,
                            timerType: "interval"
                        }), r.set(e, i), s.postMessage({
                            id: i,
                            method: "clear",
                            params: {
                                timerId: e,
                                timerType: "interval"
                            }
                        })
                    },
                    clearTimeout(e) {
                        var r = t.generateUniqueNumber(n);
                        n.set(r, {
                            timerId: e,
                            timerType: "timeout"
                        }), i.set(e, r), s.postMessage({
                            id: r,
                            method: "clear",
                            params: {
                                timerId: e,
                                timerType: "timeout"
                            }
                        })
                    },
                    setInterval(e, i) {
                        var n = t.generateUniqueNumber(r);
                        return r.set(n, (() => {
                            e(), "function" == typeof r.get(n) && s.postMessage({
                                id: null,
                                method: "set",
                                params: {
                                    delay: i,
                                    now: performance.now(),
                                    timerId: n,
                                    timerType: "interval"
                                }
                            })
                        })), s.postMessage({
                            id: null,
                            method: "set",
                            params: {
                                delay: i,
                                now: performance.now(),
                                timerId: n,
                                timerType: "interval"
                            }
                        }), n
                    },
                    setTimeout(e, r) {
                        var n = t.generateUniqueNumber(i);
                        return i.set(n, e), s.postMessage({
                            id: null,
                            method: "set",
                            params: {
                                delay: r,
                                now: performance.now(),
                                timerId: n,
                                timerType: "timeout"
                            }
                        }), n
                    }
                }
            }
        }, "object" == typeof e && typeof t < "u" ? i(e, cn()) : "function" == typeof define && define.amd ? define(["exports", "fast-unique-numbers"], i) : i((r = typeof globalThis < "u" ? globalThis : r || self).workerTimersBroker = {}, r.fastUniqueNumbers)
    })),
    dn = s(((e, t) => {
        var r, i;
        l(), Ze(), De(), r = e, i = (e, t) => {
            var r, i, n, s = (r = t.load, i = '(()=>{var e={67:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error(\'There is no interval scheduled with the given id "\'.concat(t,\'".\'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error(\'The given type "\'.concat(c,\'" is not supported\'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error(\'The given method "\'.concat(t.method,\'" is not supported\'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error(\'The given type "\'.concat(v,\'" is not supported\'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(67)})()})();', n = null, () => {
                if (null !== n) return n;
                var e = new Blob([i], {
                        type: "application/javascript; charset=utf-8"
                    }),
                    t = URL.createObjectURL(e);
                return n = r(t), setTimeout((() => URL.revokeObjectURL(t))), n
            });
            e.clearInterval = e => s().clearInterval(e), e.clearTimeout = e => s().clearTimeout(e), e.setInterval = (e, t) => s().setInterval(e, t), e.setTimeout = (e, t) => s().setTimeout(e, t)
        }, "object" == typeof e && typeof t < "u" ? i(e, fn()) : "function" == typeof define && define.amd ? define(["exports", "worker-timers-broker"], i) : i((r = typeof globalThis < "u" ? globalThis : r || self).workerTimers = {}, r.workerTimersBroker)
    })),
    pn = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.isWebWorker = void 0;
        var t = () => {
                var e, t;
                return !("object" != typeof self || null === (t = null === (e = self?.constructor) || void 0 === e ? void 0 : e.name) || void 0 === t || !t.includes("WorkerGlobalScope"))
            },
            r = typeof window < "u" && typeof window.document < "u" || t() || typeof navigator < "u" && "ReactNative" === navigator.product;
        e.isWebWorker = t(), e.default = r
    })),
    gn = s((e => {
        l(), Ze(), De();
        var t = e && e.__createBinding || (Object.create ? (e, t, r, i) => {
                void 0 === i && (i = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                    enumerable: !0,
                    get() {
                        return t[r]
                    }
                }), Object.defineProperty(e, i, n)
            } : (e, t, r, i) => {
                void 0 === i && (i = r), e[i] = t[r]
            }),
            r = e && e.__setModuleDefault || (Object.create ? (e, t) => {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : (e, t) => {
                e.default = t
            }),
            i = e && e.__importStar || (e => {
                if (e && e.__esModule) return e;
                var i = {};
                if (null != e)
                    for (var n in e) "default" !== n && {}.hasOwnProperty.call(e, n) && t(i, e, n);
                return r(i, e), i
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = dn(),
            s = i(pn());
        e.default = class {
            constructor(e, t) {
                this._setTimeout = s.default && !s.isWebWorker ? n.setTimeout : (e, t) => setTimeout(e, t), this._clearTimeout = s.default && !s.isWebWorker ? n.clearTimeout : e => clearTimeout(e), this.keepalive = 1e3 * e, this.checkPing = t, this.reschedule()
            }
            clear() {
                this.timer && (this._clearTimeout(this.timer), this.timer = null)
            }
            reschedule() {
                this.clear(), this.timer = this._setTimeout((() => {
                    this.checkPing(), this.timer && this.reschedule()
                }), this.keepalive)
            }
        }
    })),
    bn = s((e => {
        l(), Ze(), De();
        var t = e && e.__createBinding || (Object.create ? (e, t, r, i) => {
                void 0 === i && (i = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                    enumerable: !0,
                    get() {
                        return t[r]
                    }
                }), Object.defineProperty(e, i, n)
            } : (e, t, r, i) => {
                void 0 === i && (i = r), e[i] = t[r]
            }),
            r = e && e.__setModuleDefault || (Object.create ? (e, t) => {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : (e, t) => {
                e.default = t
            }),
            i = e && e.__importStar || (e => {
                if (e && e.__esModule) return e;
                var i = {};
                if (null != e)
                    for (var n in e) "default" !== n && {}.hasOwnProperty.call(e, n) && t(i, e, n);
                return r(i, e), i
            }),
            n = e && e.__importDefault || (e => e && e.__esModule ? e : {
                default: e
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(et()),
            o = n(Ii()),
            a = n(ki()),
            h = fi(),
            u = n(Ci()),
            c = i(Oi()),
            f = n(wi()),
            d = n(Pi()),
            p = n(hn()),
            g = xi(),
            b = un(),
            y = n(gn()),
            m = globalThis.setImmediate || ((...e) => {
                let t = e.shift();
                (0, g.nextTick)((() => {
                    t(...e)
                }))
            }),
            _ = {
                keepalive: 60,
                reschedulePings: !0,
                protocolId: "MQTT",
                protocolVersion: 4,
                reconnectPeriod: 1e3,
                connectTimeout: 3e4,
                clean: !0,
                resubscribe: !0,
                writeCache: !0
            },
            w = class e extends b.TypedEventEmitter {
                static defaultId() {
                    return "mqttjs_" + Math.random().toString(16).substr(2, 8)
                }
                constructor(t, r) {
                    super(), this.options = r || {};
                    for (let e in _) typeof this.options[e] > "u" ? this.options[e] = _[e] : this.options[e] = r[e];
                    this.log = this.options.log || (0, f.default)("mqttjs:client"), this.noop = this._noop.bind(this), this.log("MqttClient :: options.protocol", r.protocol), this.log("MqttClient :: options.protocolVersion", r.protocolVersion), this.log("MqttClient :: options.username", r.username), this.log("MqttClient :: options.keepalive", r.keepalive), this.log("MqttClient :: options.reconnectPeriod", r.reconnectPeriod), this.log("MqttClient :: options.rejectUnauthorized", r.rejectUnauthorized), this.log("MqttClient :: options.properties.topicAliasMaximum", r.properties ? r.properties.topicAliasMaximum : void 0), this.options.clientId = "string" == typeof r.clientId ? r.clientId : e.defaultId(), this.log("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = 5 === r.protocolVersion && r.customHandleAcks ? r.customHandleAcks : (...e) => {
                        e[3](null, 0)
                    }, this.options.writeCache || (o.default.writeToStream.cacheNumbers = !1), this.streamBuilder = t, this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new a.default : this.options.messageIdProvider, this.outgoingStore = r.outgoingStore || new d.default, this.incomingStore = r.incomingStore || new d.default, this.queueQoSZero = void 0 === r.queueQoSZero || r.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.reconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = !0, r.properties && r.properties.topicAliasMaximum > 0 && (r.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new s.default(r.properties.topicAliasMaximum)), this.on("connect", (() => {
                        let {
                            queue: e
                        } = this, t = () => {
                            let r = e.shift();
                            this.log("deliver :: entry %o", r);
                            let i = null;
                            if (!r) return void this._resubscribe();
                            i = r.packet, this.log("deliver :: call _sendPacket for %o", i);
                            let n = !0;
                            i.messageId && 0 !== i.messageId && (this.messageIdProvider.register(i.messageId) || (n = !1)), n ? this._sendPacket(i, (e => {
                                r.cb && r.cb(e), t()
                            })) : (this.log("messageId: %d has already used. The message is skipped and removed.", i.messageId), t())
                        };
                        this.log("connect :: sending queued packets"), t()
                    })), this.on("close", (() => {
                        this.log("close :: connected set to `false`"), this.connected = !1, this.log("close :: clearing connackTimer"), clearTimeout(this.connackTimer), this.log("close :: clearing ping timer"), this.pingTimer && (this.pingTimer.clear(), this.pingTimer = null), this.topicAliasRecv && this.topicAliasRecv.clear(), this.log("close :: calling _setupReconnect"), this._setupReconnect()
                    })), this.options.manualConnect || (this.log("MqttClient :: setting up stream"), this.connect())
                }
                handleAuth(e, t) {
                    t()
                }
                handleMessage(e, t) {
                    t()
                }
                _nextId() {
                    return this.messageIdProvider.allocate()
                }
                getLastMessageId() {
                    return this.messageIdProvider.getLastAllocated()
                }
                connect() {
                    var e;
                    let t = new h.Writable,
                        r = o.default.parser(this.options),
                        i = null,
                        n = [];
                    this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), r.on("packet", (e => {
                        this.log("parser :: on packet push to packets array."), n.push(e)
                    }));
                    let s = () => {
                            this.log("work :: getting next packet in queue");
                            let e = n.shift();
                            if (e) this.log("work :: packet pulled from queue"), (0, p.default)(this, e, a);
                            else {
                                this.log("work :: no packets in queue");
                                let e = i;
                                i = null, this.log("work :: done flag is %s", !!e), e && e()
                            }
                        },
                        a = () => {
                            if (n.length)(0, g.nextTick)(s);
                            else {
                                let e = i;
                                i = null, e()
                            }
                        };
                    t._write = (e, t, n) => {
                        i = n, this.log("writable stream :: parsing buffer"), r.parse(e), s()
                    };
                    this.log("connect :: pipe stream to writable stream"), this.stream.pipe(t), this.stream.on("error", (e => {
                        this.log("streamErrorHandler :: error", e.message), e.code ? (this.log("streamErrorHandler :: emitting error"), this.emit("error", e)) : this.noop(e)
                    })), this.stream.on("close", (() => {
                        this.log("(%s)stream :: on close", this.options.clientId), this._flushVolatile(), this.log("stream: emit close to MqttClient"), this.emit("close")
                    })), this.log("connect: sending packet `connect`");
                    let l = {
                        cmd: "connect",
                        protocolId: this.options.protocolId,
                        protocolVersion: this.options.protocolVersion,
                        clean: this.options.clean,
                        clientId: this.options.clientId,
                        keepalive: this.options.keepalive,
                        username: this.options.username,
                        password: this.options.password,
                        properties: this.options.properties
                    };
                    if (this.options.will && (l.will = Object.assign(Object.assign({}, this.options.will), {
                            payload: null === (e = this.options.will) || void 0 === e ? void 0 : e.payload
                        })), this.topicAliasRecv && (l.properties || (l.properties = {}), this.topicAliasRecv && (l.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(l), r.on("error", this.emit.bind(this, "error")), this.options.properties) {
                        if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) return this.end((() => this.emit("error", Error("Packet has no Authentication Method")))), this;
                        if (this.options.properties.authenticationMethod && this.options.authPacket && "object" == typeof this.options.authPacket) {
                            let e = Object.assign({
                                cmd: "auth",
                                reasonCode: 0
                            }, this.options.authPacket);
                            this._writePacket(e)
                        }
                    }
                    return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout((() => {
                        this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), this._cleanUp(!0)
                    }), this.options.connectTimeout), this
                }
                publish(e, t, r, i) {
                    this.log("publish :: message `%s` to topic `%s`", t, e);
                    let {
                        options: n
                    } = this;
                    "function" == typeof r && (i = r, r = null), r = r || {}, r = Object.assign(Object.assign({}, {
                        qos: 0,
                        retain: !1,
                        dup: !1
                    }), r);
                    let {
                        qos: s,
                        retain: o,
                        dup: a,
                        properties: l,
                        cbStorePut: h
                    } = r;
                    if (this._checkDisconnecting(i)) return this;
                    let u = () => {
                        let r = 0;
                        if ((1 === s || 2 === s) && (r = this._nextId(), null === r)) return this.log("No messageId left"), !1;
                        let u = {
                            cmd: "publish",
                            topic: e,
                            payload: t,
                            qos: s,
                            retain: o,
                            messageId: r,
                            dup: a
                        };
                        switch (5 === n.protocolVersion && (u.properties = l), this.log("publish :: qos", s), s) {
                            case 1:
                            case 2:
                                this.outgoing[u.messageId] = {
                                    volatile: !1,
                                    cb: i || this.noop
                                }, this.log("MqttClient:publish: packet cmd: %s", u.cmd), this._sendPacket(u, void 0, h);
                                break;
                            default:
                                this.log("MqttClient:publish: packet cmd: %s", u.cmd), this._sendPacket(u, i, h)
                        }
                        return !0
                    };
                    return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !u()) && this._storeProcessingQueue.push({
                        invoke: u,
                        cbStorePut: r.cbStorePut,
                        callback: i
                    }), this
                }
                publishAsync(e, t, r) {
                    return new Promise(((i, n) => {
                        this.publish(e, t, r, ((e, t) => {
                            e ? n(e) : i(t)
                        }))
                    }))
                }
                subscribe(e, t, r) {
                    let i = this.options.protocolVersion;
                    "function" == typeof t && (r = t), r = r || this.noop;
                    let n = !1,
                        s = [];
                    "string" == typeof e ? s = e = [e] : Array.isArray(e) ? s = e : "object" == typeof e && (n = e.resubscribe, delete e.resubscribe, s = Object.keys(e));
                    let o = c.validateTopics(s);
                    if (null !== o) return m(r, Error("Invalid topic " + o)), this;
                    if (this._checkDisconnecting(r)) return this.log("subscribe: discconecting true"), this;
                    let a = {
                        qos: 0
                    };
                    5 === i && (a.nl = !1, a.rap = !1, a.rh = 0);
                    let l = (t = Object.assign(Object.assign({}, a), t)).properties,
                        h = [],
                        u = (e, r) => {
                            if (r = r || t, !{}.hasOwnProperty.call(this._resubscribeTopics, e) || this._resubscribeTopics[e].qos < r.qos || n) {
                                let t = {
                                    topic: e,
                                    qos: r.qos
                                };
                                5 === i && (t.nl = r.nl, t.rap = r.rap, t.rh = r.rh, t.properties = l), this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", t.topic, t.qos), h.push(t)
                            }
                        };
                    if (Array.isArray(e) ? e.forEach((e => {
                            this.log("subscribe: array topic %s", e), u(e)
                        })) : Object.keys(e).forEach((t => {
                            this.log("subscribe: object topic %s, %o", t, e[t]), u(t, e[t])
                        })), !h.length) return r(null, []), this;
                    let f = () => {
                        let e = this._nextId();
                        if (null === e) return this.log("No messageId left"), !1;
                        let t = {
                            cmd: "subscribe",
                            subscriptions: h,
                            messageId: e
                        };
                        if (l && (t.properties = l), this.options.resubscribe) {
                            this.log("subscribe :: resubscribe true");
                            let e = [];
                            h.forEach((t => {
                                if (this.options.reconnectPeriod > 0) {
                                    let r = {
                                        qos: t.qos
                                    };
                                    5 === i && (r.nl = t.nl || !1, r.rap = t.rap || !1, r.rh = t.rh || 0, r.properties = t.properties), this._resubscribeTopics[t.topic] = r, e.push(t.topic)
                                }
                            })), this.messageIdToTopic[t.messageId] = e
                        }
                        return this.outgoing[t.messageId] = {
                            volatile: !0,
                            cb(e, t) {
                                if (!e) {
                                    let {
                                        granted: e
                                    } = t;
                                    for (let t = 0; t < e.length; t += 1) h[t].qos = e[t]
                                }
                                r(e, h)
                            }
                        }, this.log("subscribe :: call _sendPacket"), this._sendPacket(t), !0
                    };
                    return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !f()) && this._storeProcessingQueue.push({
                        invoke: f,
                        callback: r
                    }), this
                }
                subscribeAsync(e, t) {
                    return new Promise(((r, i) => {
                        this.subscribe(e, t, ((e, t) => {
                            e ? i(e) : r(t)
                        }))
                    }))
                }
                unsubscribe(e, t, r) {
                    "string" == typeof e && (e = [e]), "function" == typeof t && (r = t), r = r || this.noop;
                    let i = c.validateTopics(e);
                    if (null !== i) return m(r, Error("Invalid topic " + i)), this;
                    if (this._checkDisconnecting(r)) return this;
                    let n = () => {
                        let i = this._nextId();
                        if (null === i) return this.log("No messageId left"), !1;
                        let n = {
                            cmd: "unsubscribe",
                            messageId: i,
                            unsubscriptions: []
                        };
                        return "string" == typeof e ? n.unsubscriptions = [e] : Array.isArray(e) && (n.unsubscriptions = e), this.options.resubscribe && n.unsubscriptions.forEach((e => {
                            delete this._resubscribeTopics[e]
                        })), "object" == typeof t && t.properties && (n.properties = t.properties), this.outgoing[n.messageId] = {
                            volatile: !0,
                            cb: r
                        }, this.log("unsubscribe: call _sendPacket"), this._sendPacket(n), !0
                    };
                    return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !n()) && this._storeProcessingQueue.push({
                        invoke: n,
                        callback: r
                    }), this
                }
                unsubscribeAsync(e, t) {
                    return new Promise(((r, i) => {
                        this.unsubscribe(e, t, ((e, t) => {
                            e ? i(e) : r(t)
                        }))
                    }))
                }
                end(e, t, r) {
                    this.log("end :: (%s)", this.options.clientId), (null == e || "boolean" != typeof e) && (r = r || t, t = e, e = !1), "object" != typeof t && (r = r || t, t = null), this.log("end :: cb? %s", !!r), (!r || "function" != typeof r) && (r = this.noop);
                    let i = () => {
                            this.log("end :: closeStores: closing incoming and outgoing stores"), this.disconnected = !0, this.incomingStore.close((e => {
                                this.outgoingStore.close((t => {
                                    if (this.log("end :: closeStores: emitting end"), this.emit("end"), r) {
                                        let i = e || t;
                                        this.log("end :: closeStores: invoking callback with args"), r(i)
                                    }
                                }))
                            })), this._deferredReconnect && this._deferredReconnect()
                        },
                        n = () => {
                            this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, e), this._cleanUp(e, (() => {
                                this.log("end :: finish :: calling process.nextTick on closeStores"), (0, g.nextTick)(i)
                            }), t)
                        };
                    return this.disconnecting ? (r(), this) : (this._clearReconnect(), this.disconnecting = !0, !e && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, n, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), n()), this)
                }
                endAsync(e, t) {
                    return new Promise(((r, i) => {
                        this.end(e, t, (e => {
                            e ? i(e) : r()
                        }))
                    }))
                }
                removeOutgoingMessage(e) {
                    if (this.outgoing[e]) {
                        let {
                            cb: t
                        } = this.outgoing[e];
                        this._removeOutgoingAndStoreMessage(e, (() => {
                            t(Error("Message removed"))
                        }))
                    }
                    return this
                }
                reconnect(e) {
                    this.log("client reconnect");
                    let t = () => {
                        e ? (this.options.incomingStore = e.incomingStore, this.options.outgoingStore = e.outgoingStore) : (this.options.incomingStore = null, this.options.outgoingStore = null), this.incomingStore = this.options.incomingStore || new d.default, this.outgoingStore = this.options.outgoingStore || new d.default, this.disconnecting = !1, this.disconnected = !1, this._deferredReconnect = null, this._reconnect()
                    };
                    return this.disconnecting && !this.disconnected ? this._deferredReconnect = t : t(), this
                }
                _flushVolatile() {
                    this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach((e => {
                        this.outgoing[e].volatile && "function" == typeof this.outgoing[e].cb && (this.outgoing[e].cb(Error("Connection closed")), delete this.outgoing[e])
                    })))
                }
                _flush() {
                    this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach((e => {
                        "function" == typeof this.outgoing[e].cb && (this.outgoing[e].cb(Error("Connection closed")), delete this.outgoing[e])
                    })))
                }
                _removeTopicAliasAndRecoverTopicName(e) {
                    let t;
                    e.properties && (t = e.properties.topicAlias);
                    let r = e.topic.toString();
                    if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", t, r), 0 === r.length) {
                        if (typeof t > "u") return Error("Unregistered Topic Alias");
                        if (r = this.topicAliasSend.getTopicByAlias(t), typeof r > "u") return Error("Unregistered Topic Alias");
                        e.topic = r
                    }
                    t && delete e.properties.topicAlias
                }
                _checkDisconnecting(e) {
                    return this.disconnecting && (e && e !== this.noop ? e(Error("client disconnecting")) : this.emit("error", Error("client disconnecting"))), this.disconnecting
                }
                _reconnect() {
                    this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end((() => {
                        this.connect()
                    })), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect())
                }
                _setupReconnect() {
                    !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = !0), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval((() => {
                        this.log("reconnectTimer :: reconnect triggered!"), this._reconnect()
                    }), this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...")
                }
                _clearReconnect() {
                    this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null)
                }
                _cleanUp(e, t, r = {}) {
                    if (t && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", t)), this.log("_cleanUp :: forced? %s", e), e) 0 === this.options.reconnectPeriod && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
                    else {
                        let e = Object.assign({
                            cmd: "disconnect"
                        }, r);
                        this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(e, (() => {
                            this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), m((() => {
                                this.stream.end((() => {
                                    this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId)
                                }))
                            }))
                        }))
                    }!this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), this.pingTimer && (this.log("_cleanUp :: clearing pingTimer"), this.pingTimer.clear(), this.pingTimer = null), t && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", t), t())
                }
                _storeAndSend(e, t, r) {
                    this.log("storeAndSend :: store packet with cmd %s to outgoingStore", e.cmd);
                    let i, n = e;
                    if ("publish" === n.cmd && (n = (0, u.default)(e), i = this._removeTopicAliasAndRecoverTopicName(n), i)) return t && t(i);
                    this.outgoingStore.put(n, (i => {
                        if (i) return t && t(i);
                        r(), this._writePacket(e, t)
                    }))
                }
                _applyTopicAlias(e) {
                    if (5 === this.options.protocolVersion && "publish" === e.cmd) {
                        let t;
                        e.properties && (t = e.properties.topicAlias);
                        let r = e.topic.toString();
                        if (this.topicAliasSend)
                            if (t) {
                                if (0 !== r.length && (this.log("applyTopicAlias :: register topic: %s - alias: %d", r, t), !this.topicAliasSend.put(r, t))) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", r, t), Error("Sending Topic Alias out of range")
                            } else 0 !== r.length && (this.options.autoAssignTopicAlias ? (t = this.topicAliasSend.getAliasByTopic(r), t ? (e.topic = "", e.properties = Object.assign(Object.assign({}, e.properties), {
                                topicAlias: t
                            }), this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", r, t)) : (t = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(r, t), e.properties = Object.assign(Object.assign({}, e.properties), {
                                topicAlias: t
                            }), this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", r, t))) : this.options.autoUseTopicAlias && (t = this.topicAliasSend.getAliasByTopic(r), t && (e.topic = "", e.properties = Object.assign(Object.assign({}, e.properties), {
                                topicAlias: t
                            }), this.log("applyTopicAlias :: auto use topic: %s - alias: %d", r, t))));
                        else if (t) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", r, t), Error("Sending Topic Alias out of range")
                    }
                }
                _noop(e) {
                    this.log("noop ::", e)
                }
                _writePacket(e, t) {
                    this.log("_writePacket :: packet: %O", e), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", e), this._shiftPingInterval(), this.log("_writePacket :: writing to stream");
                    let r = o.default.writeToStream(e, this.stream, this.options);
                    this.log("_writePacket :: writeToStream result %s", r), !r && t && t !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", t)) : t && (this.log("_writePacket :: invoking cb"), t())
                }
                _sendPacket(e, t, r, i) {
                    this.log("_sendPacket :: (%s) ::  start", this.options.clientId), r = r || this.noop, t = t || this.noop;
                    let n = this._applyTopicAlias(e);
                    if (n) t(n);
                    else {
                        if (!this.connected) return "auth" === e.cmd ? void this._writePacket(e, t) : (this.log("_sendPacket :: client not connected. Storing packet offline."), void this._storePacket(e, t, r));
                        if (i) this._writePacket(e, t);
                        else {
                            switch (e.cmd) {
                                case "publish":
                                    break;
                                case "pubrel":
                                    return void this._storeAndSend(e, t, r);
                                default:
                                    return void this._writePacket(e, t)
                            }
                            switch (e.qos) {
                                case 2:
                                case 1:
                                    this._storeAndSend(e, t, r);
                                    break;
                                default:
                                    this._writePacket(e, t)
                            }
                            this.log("_sendPacket :: (%s) ::  end", this.options.clientId)
                        }
                    }
                }
                _storePacket(e, t, r) {
                    this.log("_storePacket :: packet: %o", e), this.log("_storePacket :: cb? %s", !!t), r = r || this.noop;
                    let i = e;
                    if ("publish" === i.cmd) {
                        i = (0, u.default)(e);
                        let r = this._removeTopicAliasAndRecoverTopicName(i);
                        if (r) return t && t(r)
                    }
                    let n = i.qos || 0;
                    0 === n && this.queueQoSZero || "publish" !== i.cmd ? this.queue.push({
                        packet: i,
                        cb: t
                    }) : n > 0 ? (t = this.outgoing[i.messageId] ? this.outgoing[i.messageId].cb : null, this.outgoingStore.put(i, (e => {
                        if (e) return t && t(e);
                        r()
                    }))) : t && t(Error("No connection to broker"))
                }
                _setupPingTimer() {
                    this.log("_setupPingTimer :: keepalive %d (seconds)", this.options.keepalive), !this.pingTimer && this.options.keepalive && (this.pingResp = !0, this.pingTimer = new y.default(this.options.keepalive, (() => {
                        this._checkPing()
                    })))
                }
                _shiftPingInterval() {
                    this.pingTimer && this.options.keepalive && this.options.reschedulePings && this.pingTimer.reschedule()
                }
                _checkPing() {
                    this.log("_checkPing :: checking ping..."), this.pingResp ? (this.log("_checkPing :: ping response received. Clearing flag and sending `pingreq`"), this.pingResp = !1, this._sendPacket({
                        cmd: "pingreq"
                    })) : (this.log("_checkPing :: calling _cleanUp with force true"), this._cleanUp(!0))
                }
                _resubscribe() {
                    this.log("_resubscribe");
                    let e = Object.keys(this._resubscribeTopics);
                    if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && e.length > 0)
                        if (this.options.resubscribe)
                            if (5 === this.options.protocolVersion) {
                                this.log("_resubscribe: protocolVersion 5");
                                for (let t = 0; t < e.length; t++) {
                                    let r = {};
                                    r[e[t]] = this._resubscribeTopics[e[t]], r.resubscribe = !0, this.subscribe(r, {
                                        properties: r[e[t]].properties
                                    })
                                }
                            } else this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics);
                    else this._resubscribeTopics = {};
                    this._firstConnection = !1
                }
                _onConnect(e) {
                    if (this.disconnected) return void this.emit("connect", e);
                    this.connackPacket = e, this.messageIdProvider.clear(), this._setupPingTimer(), this.connected = !0;
                    let t = () => {
                        let r = this.outgoingStore.createStream(),
                            i = () => {
                                r.destroy(), r = null, this._flushStoreProcessingQueue(), n()
                            },
                            n = () => {
                                this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}
                            };
                        this.once("close", i), r.on("error", (e => {
                            n(), this._flushStoreProcessingQueue(), this.removeListener("close", i), this.emit("error", e)
                        }));
                        let s = () => {
                            if (!r) return;
                            let e, t = r.read(1);
                            t ? (this._storeProcessing = !0, this._packetIdsDuringStoreProcessing[t.messageId] ? s() : this.disconnecting || this.reconnectTimer ? r.destroy && r.destroy() : (e = this.outgoing[t.messageId] ? this.outgoing[t.messageId].cb : null, this.outgoing[t.messageId] = {
                                volatile: !1,
                                cb(t, r) {
                                    e && e(t, r), s()
                                }
                            }, this._packetIdsDuringStoreProcessing[t.messageId] = !0, this.messageIdProvider.register(t.messageId) ? this._sendPacket(t, void 0, void 0, !0) : this.log("messageId: %d has already used.", t.messageId))) : r.once("readable", s)
                        };
                        r.on("end", (() => {
                            let r = !0;
                            for (let e in this._packetIdsDuringStoreProcessing)
                                if (!this._packetIdsDuringStoreProcessing[e]) {
                                    r = !1;
                                    break
                                } this.removeListener("close", i), r ? (n(), this._invokeAllStoreProcessingQueue(), this.emit("connect", e)) : t()
                        })), s()
                    };
                    t()
                }
                _invokeStoreProcessingQueue() {
                    if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
                        let e = this._storeProcessingQueue[0];
                        if (e && e.invoke()) return this._storeProcessingQueue.shift(), !0
                    }
                    return !1
                }
                _invokeAllStoreProcessingQueue() {
                    for (; this._invokeStoreProcessingQueue(););
                }
                _flushStoreProcessingQueue() {
                    for (let e of this._storeProcessingQueue) e.cbStorePut && e.cbStorePut(Error("Connection closed")), e.callback && e.callback(Error("Connection closed"));
                    this._storeProcessingQueue.splice(0)
                }
                _removeOutgoingAndStoreMessage(e, t) {
                    delete this.outgoing[e], this.outgoingStore.del({
                        messageId: e
                    }, ((r, i) => {
                        t(r, i), this.messageIdProvider.deallocate(e), this._invokeStoreProcessingQueue()
                    }))
                }
            };
        e.default = w
    })),
    yn = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = sn();
        e.default = class {
            constructor() {
                this.numberAllocator = new t.NumberAllocator(1, 65535)
            }
            allocate() {
                return this.lastId = this.numberAllocator.alloc(), this.lastId
            }
            getLastAllocated() {
                return this.lastId
            }
            register(e) {
                return this.numberAllocator.use(e)
            }
            deallocate(e) {
                this.numberAllocator.free(e)
            }
            clear() {
                this.numberAllocator.clear()
            }
        }
    }));

function mn(e) {
    throw new RangeError(An[e])
}

function _n(e, t) {
    let r = e.split("@"),
        i = "";
    return r.length > 1 && (i = r[0] + "@", e = r[1]), i + ((e, t) => {
        let r = [],
            i = e.length;
        for (; i--;) r[i] = t(e[i]);
        return r
    })((e = e.replace(Sn, ".")).split("."), t).join(".")
}

function wn(e) {
    let t = [],
        r = 0,
        i = e.length;
    for (; r < i;) {
        let n = e.charCodeAt(r++);
        if (n >= 55296 && n <= 56319 && r < i) {
            let i = e.charCodeAt(r++);
            56320 == (64512 & i) ? t.push(((1023 & n) << 10) + (1023 & i) + 65536) : (t.push(n), r--)
        } else t.push(n)
    }
    return t
}
var vn, En, Sn, An, Tn, In, kn, Rn, Cn, On, Pn, Bn = n((() => {
    l(), Ze(), De(), vn = /^xn--/, En = /[^\0-\x7E]/, Sn = /[\x2E\u3002\uFF0E\uFF61]/g, An = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }, Tn = Math.floor, In = String.fromCharCode, kn = (e, t) => e + 22 + 75 * (e < 26) - ((0 != t) << 5), Rn = (e, t, r) => {
        let i = 0;
        for (e = r ? Tn(e / 700) : e >> 1, e += Tn(e / t); e > 455; i += 36) e = Tn(e / 35);
        return Tn(i + 36 * e / (e + 38))
    }, On = e => {
        let t = [],
            r = (e = wn(e)).length,
            i = 128,
            n = 0,
            s = 72;
        for (let r of e) r < 128 && t.push(In(r));
        let o = t.length,
            a = o;
        for (o && t.push("-"); a < r;) {
            let r = 2147483647;
            for (let t of e) t >= i && t < r && (r = t);
            let l = a + 1;
            r - i > Tn((2147483647 - n) / l) && mn("overflow"), n += (r - i) * l, i = r;
            for (let r of e)
                if (r < i && ++n > 2147483647 && mn("overflow"), r == i) {
                    let e = n;
                    for (let r = 36;; r += 36) {
                        let i = r <= s ? 1 : r >= s + 26 ? 26 : r - s;
                        if (e < i) break;
                        let n = e - i,
                            o = 36 - i;
                        t.push(In(kn(i + n % o, 0))), e = Tn(n / o)
                    }
                    t.push(In(kn(e, 0))), s = Rn(n, l, a == o), n = 0, ++a
                }++ n, ++i
        }
        return t.join("")
    }, Pn = {
        version: "2.1.0",
        ucs2: {
            decode: wn,
            encode(e) {
                return String.fromCodePoint(...e)
            }
        },
        decode: Cn = e => {
            let t = [],
                r = e.length,
                i = 0,
                n = 128,
                s = 72,
                o = e.lastIndexOf("-");
            o < 0 && (o = 0);
            for (let r = 0; r < o; ++r) e.charCodeAt(r) >= 128 && mn("not-basic"), t.push(e.charCodeAt(r));
            for (let l = o > 0 ? o + 1 : 0; l < r;) {
                let o = i;
                for (let t = 1, n = 36;; n += 36) {
                    l >= r && mn("invalid-input");
                    let o = (a = e.charCodeAt(l++)) - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : 36;
                    (o >= 36 || o > Tn((2147483647 - i) / t)) && mn("overflow"), i += o * t;
                    let h = n <= s ? 1 : n >= s + 26 ? 26 : n - s;
                    if (o < h) break;
                    let u = 36 - h;
                    t > Tn(2147483647 / u) && mn("overflow"), t *= u
                }
                let h = t.length + 1;
                s = Rn(i - o, h, 0 == o), Tn(i / h) > 2147483647 - n && mn("overflow"), n += Tn(i / h), i %= h, t.splice(i++, 0, n)
            }
            var a;
            return String.fromCodePoint(...t)
        },
        encode: On,
        toASCII(e) {
            return _n(e, (e => En.test(e) ? "xn--" + On(e) : e))
        },
        toUnicode(e) {
            return _n(e, (e => vn.test(e) ? Cn(e.slice(4).toLowerCase()) : e))
        }
    }, Pn.encode, Pn.toASCII, Pn.toUnicode, Pn.ucs2, Pn.version
}));

function xn(e, t) {
    return {}.hasOwnProperty.call(e, t)
}
var Nn, Mn, Un, Ln, jn = n((() => {
    l(), Ze(), De(), Nn = (e, t, r, i) => {
        t = t || "&", r = r || "=";
        var n = {};
        if ("string" != typeof e || 0 === e.length) return n;
        var s = /\+/g;
        e = e.split(t);
        var o = 1e3;
        i && "number" == typeof i.maxKeys && (o = i.maxKeys);
        var a = e.length;
        o > 0 && a > o && (a = o);
        for (var l = 0; l < a; ++l) {
            var h, u, c, f, d = e[l].replace(s, "%20"),
                p = d.indexOf(r);
            p >= 0 ? (h = d.substr(0, p), u = d.substr(p + 1)) : (h = d, u = ""), c = decodeURIComponent(h), f = decodeURIComponent(u), xn(n, c) ? Array.isArray(n[c]) ? n[c].push(f) : n[c] = [n[c], f] : n[c] = f
        }
        return n
    }, Mn = e => {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    }, Un = (e, t, r, i) => (t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map((i => {
        var n = encodeURIComponent(Mn(i)) + r;
        return Array.isArray(e[i]) ? e[i].map((e => n + encodeURIComponent(Mn(e)))).join(t) : n + encodeURIComponent(Mn(e[i]))
    })).join(t) : i ? encodeURIComponent(Mn(i)) + r + encodeURIComponent(Mn(e)) : ""), (Ln = {}).decode = Ln.parse = Nn, Ln.encode = Ln.stringify = Un, Ln.decode, Ln.encode, Ln.parse, Ln.stringify
}));

function Dn() {
    throw Error("setTimeout has not been defined")
}

function Fn() {
    throw Error("clearTimeout has not been defined")
}

function Wn(e) {
    if (Kn === setTimeout) return setTimeout(e, 0);
    if ((Kn === Dn || !Kn) && setTimeout) return Kn = setTimeout, setTimeout(e, 0);
    try {
        return Kn(e, 0)
    } catch {
        try {
            return Kn.call(null, e, 0)
        } catch {
            return Kn.call(this || Gn, e, 0)
        }
    }
}

function qn() {
    Zn && Jn && (Zn = !1, Jn.length ? Xn = Jn.concat(Xn) : es = -1, Xn.length && $n())
}

function $n() {
    if (!Zn) {
        var e = Wn(qn);
        Zn = !0;
        for (var t = Xn.length; t;) {
            for (Jn = Xn, Xn = []; ++es < t;) Jn && Jn[es].run();
            es = -1, t = Xn.length
        }
        Jn = null, Zn = !1,
            function(e) {
                if (Yn === clearTimeout) return clearTimeout(e);
                if ((Yn === Fn || !Yn) && clearTimeout) return Yn = clearTimeout, clearTimeout(e);
                try {
                    Yn(e)
                } catch {
                    try {
                        return Yn.call(null, e)
                    } catch {
                        return Yn.call(this || Gn, e)
                    }
                }
            }(e)
    }
}

function Hn(e, t) {
    (this || Gn).fun = e, (this || Gn).array = t
}

function Vn() {}
var zn, Kn, Yn, Gn, Qn, Jn, Xn, Zn, es, ts, rs = n((() => {
    l(), Ze(), De(), Gn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, Qn = zn = {}, (() => {
        try {
            Kn = "function" == typeof setTimeout ? setTimeout : Dn
        } catch {
            Kn = Dn
        }
        try {
            Yn = "function" == typeof clearTimeout ? clearTimeout : Fn
        } catch {
            Yn = Fn
        }
    })(), Xn = [], Zn = !1, es = -1, Qn.nextTick = function(e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        Xn.push(new Hn(e, t)), 1 !== Xn.length || Zn || Wn($n)
    }, Hn.prototype.run = function() {
        (this || Gn).fun.apply(null, (this || Gn).array)
    }, Qn.title = "browser", Qn.browser = !0, Qn.env = {}, Qn.argv = [], Qn.version = "", Qn.versions = {}, Qn.on = Vn, Qn.addListener = Vn, Qn.once = Vn, Qn.off = Vn, Qn.removeListener = Vn, Qn.removeAllListeners = Vn, Qn.emit = Vn, Qn.prependListener = Vn, Qn.prependOnceListener = Vn, Qn.listeners = () => [], Qn.binding = () => {
        throw Error("process.binding is not supported")
    }, Qn.cwd = () => "/", Qn.chdir = () => {
        throw Error("process.chdir is not supported")
    }, Qn.umask = () => 0, ts = zn, ts.argv, ts.binding, ts.browser, ts.chdir, ts.cwd, ts.emit, ts.env, ts.listeners, ts.nextTick, ts.off, ts.on, ts.once, ts.prependListener, ts.prependOnceListener, ts.removeAllListeners, ts.removeListener, ts.title, ts.umask, ts.version, ts.versions
}));

function is() {
    if (ss) return ns;
    ss = !0;
    var e, t, r = ns = {};

    function i() {
        throw Error("setTimeout has not been defined")
    }

    function n() {
        throw Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
            return e(t, 0)
        } catch {
            try {
                return e.call(null, t, 0)
            } catch {
                return e.call(this || os, t, 0)
            }
        }
    }(() => {
        try {
            e = "function" == typeof setTimeout ? setTimeout : i
        } catch {
            e = i
        }
        try {
            t = "function" == typeof clearTimeout ? clearTimeout : n
        } catch {
            t = n
        }
    })();
    var o, a = [],
        l = !1,
        h = -1;

    function u() {
        !l || !o || (l = !1, o.length ? a = o.concat(a) : h = -1, a.length && c())
    }

    function c() {
        if (!l) {
            var e = s(u);
            l = !0;
            for (var r = a.length; r;) {
                for (o = a, a = []; ++h < r;) o && o[h].run();
                h = -1, r = a.length
            }
            o = null, l = !1,
                function(e) {
                    if (t === clearTimeout) return clearTimeout(e);
                    if ((t === n || !t) && clearTimeout) return t = clearTimeout, clearTimeout(e);
                    try {
                        return t(e)
                    } catch {
                        try {
                            return t.call(null, e)
                        } catch {
                            return t.call(this || os, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        (this || os).fun = e, (this || os).array = t
    }

    function d() {}
    return r.nextTick = function(e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        a.push(new f(e, t)), 1 === a.length && !l && s(c)
    }, f.prototype.run = function() {
        (this || os).fun.apply(null, (this || os).array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = d, r.addListener = d, r.once = d, r.off = d, r.removeListener = d, r.removeAllListeners = d, r.emit = d, r.prependListener = d, r.prependOnceListener = d, r.listeners = () => [], r.binding = () => {
        throw Error("process.binding is not supported")
    }, r.cwd = () => "/", r.chdir = () => {
        throw Error("process.chdir is not supported")
    }, r.umask = () => 0, ns
}
var ns, ss, os, as, ls = n((() => {
    l(), Ze(), De(), ns = {}, ss = !1, os = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, (as = is()).platform = "browser", as.addListener, as.argv, as.binding, as.browser, as.chdir, as.cwd, as.emit, as.env, as.listeners, as.nextTick, as.off, as.on, as.once, as.prependListener, as.prependOnceListener, as.removeAllListeners, as.removeListener, as.title, as.umask, as.version, as.versions
}));
var hs, us, cs, fs = n((() => {
        l(), Ze(), De(), ls(), hs = {}, us = !1, cs = function() {
            if (us) return hs;
            us = !0;
            var e = as;

            function t(e) {
                if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }

            function r(e, t) {
                for (var r, i = "", n = 0, s = -1, o = 0, a = 0; a <= e.length; ++a) {
                    if (a < e.length) r = e.charCodeAt(a);
                    else {
                        if (47 === r) break;
                        r = 47
                    }
                    if (47 === r) {
                        if (s !== a - 1 && 1 !== o)
                            if (s !== a - 1 && 2 === o) {
                                if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                    if (i.length > 2) {
                                        var l = i.lastIndexOf("/");
                                        if (l !== i.length - 1) {
                                            -1 === l ? (i = "", n = 0) : n = (i = i.slice(0, l)).length - 1 - i.lastIndexOf("/"), s = a, o = 0;
                                            continue
                                        }
                                    } else if (2 === i.length || 1 === i.length) {
                                    i = "", n = 0, s = a, o = 0;
                                    continue
                                }
                                t && (i.length > 0 ? i += "/.." : i = "..", n = 2)
                            } else i.length > 0 ? i += "/" + e.slice(s + 1, a) : i = e.slice(s + 1, a), n = a - s - 1;
                        s = a, o = 0
                    } else 46 === r && -1 !== o ? ++o : o = -1
                }
                return i
            }
            var i = {
                resolve() {
                    for (var i, n = "", s = !1, o = arguments.length - 1; o >= -1 && !s; o--) {
                        var a;
                        o >= 0 ? a = arguments[o] : (void 0 === i && (i = e.cwd()), a = i), t(a), 0 !== a.length && (n = a + "/" + n, s = 47 === a.charCodeAt(0))
                    }
                    return n = r(n, !s), s ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : "."
                },
                normalize(e) {
                    if (t(e), 0 === e.length) return ".";
                    var i = 47 === e.charCodeAt(0),
                        n = 47 === e.charCodeAt(e.length - 1);
                    return 0 === (e = r(e, !i)).length && !i && (e = "."), e.length > 0 && n && (e += "/"), i ? "/" + e : e
                },
                isAbsolute: e => (t(e), e.length > 0 && 47 === e.charCodeAt(0)),
                join() {
                    if (0 === arguments.length) return ".";
                    for (var e, r = 0; r < arguments.length; ++r) {
                        var n = arguments[r];
                        t(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                    }
                    return void 0 === e ? "." : i.normalize(e)
                },
                relative(e, r) {
                    if (t(e), t(r), e === r || (e = i.resolve(e)) === (r = i.resolve(r))) return "";
                    for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                    for (var s = e.length, o = s - n, a = 1; a < r.length && 47 === r.charCodeAt(a); ++a);
                    for (var l = r.length - a, h = o < l ? o : l, u = -1, c = 0; c <= h; ++c) {
                        if (c === h) {
                            if (l > h) {
                                if (47 === r.charCodeAt(a + c)) return r.slice(a + c + 1);
                                if (0 === c) return r.slice(a + c)
                            } else o > h && (47 === e.charCodeAt(n + c) ? u = c : 0 === c && (u = 0));
                            break
                        }
                        var f = e.charCodeAt(n + c);
                        if (f !== r.charCodeAt(a + c)) break;
                        47 === f && (u = c)
                    }
                    var d = "";
                    for (c = n + u + 1; c <= s; ++c)(c === s || 47 === e.charCodeAt(c)) && (0 === d.length ? d += ".." : d += "/..");
                    return d.length > 0 ? d + r.slice(a + u) : (a += u, 47 === r.charCodeAt(a) && ++a, r.slice(a))
                },
                _makeLong: e => e,
                dirname(e) {
                    if (t(e), 0 === e.length) return ".";
                    for (var r = e.charCodeAt(0), i = 47 === r, n = -1, s = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (r = e.charCodeAt(o))) {
                            if (!s) {
                                n = o;
                                break
                            }
                        } else s = !1;
                    return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
                },
                basename(e, r) {
                    if (void 0 !== r && "string" != typeof r) throw new TypeError('"ext" argument must be a string');
                    t(e);
                    var i, n = 0,
                        s = -1,
                        o = !0;
                    if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var a = r.length - 1,
                            l = -1;
                        for (i = e.length - 1; i >= 0; --i) {
                            var h = e.charCodeAt(i);
                            if (47 === h) {
                                if (!o) {
                                    n = i + 1;
                                    break
                                }
                            } else - 1 === l && (o = !1, l = i + 1), a >= 0 && (h === r.charCodeAt(a) ? -1 == --a && (s = i) : (a = -1, s = l))
                        }
                        return n === s ? s = l : -1 === s && (s = e.length), e.slice(n, s)
                    }
                    for (i = e.length - 1; i >= 0; --i)
                        if (47 === e.charCodeAt(i)) {
                            if (!o) {
                                n = i + 1;
                                break
                            }
                        } else - 1 === s && (o = !1, s = i + 1);
                    return -1 === s ? "" : e.slice(n, s)
                },
                extname(e) {
                    t(e);
                    for (var r = -1, i = 0, n = -1, s = !0, o = 0, a = e.length - 1; a >= 0; --a) {
                        var l = e.charCodeAt(a);
                        if (47 !== l) - 1 === n && (s = !1, n = a + 1), 46 === l ? -1 === r ? r = a : 1 !== o && (o = 1) : -1 !== r && (o = -1);
                        else if (!s) {
                            i = a + 1;
                            break
                        }
                    }
                    return -1 === r || -1 === n || 0 === o || 1 === o && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
                },
                format(e) {
                    if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    return ((e, t) => {
                        var r = t.dir || t.root,
                            i = t.base || (t.name || "") + (t.ext || "");
                        return r ? r === t.root ? r + i : r + e + i : i
                    })("/", e)
                },
                parse(e) {
                    t(e);
                    var r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === e.length) return r;
                    var i, n = e.charCodeAt(0),
                        s = 47 === n;
                    s ? (r.root = "/", i = 1) : i = 0;
                    for (var o = -1, a = 0, l = -1, h = !0, u = e.length - 1, c = 0; u >= i; --u)
                        if (47 !== (n = e.charCodeAt(u))) - 1 === l && (h = !1, l = u + 1), 46 === n ? -1 === o ? o = u : 1 !== c && (c = 1) : -1 !== o && (c = -1);
                        else if (!h) {
                        a = u + 1;
                        break
                    }
                    return -1 === o || -1 === l || 0 === c || 1 === c && o === l - 1 && o === a + 1 ? -1 !== l && (r.base = r.name = 0 === a && s ? e.slice(1, l) : e.slice(a, l)) : (0 === a && s ? (r.name = e.slice(1, o), r.base = e.slice(1, l)) : (r.name = e.slice(a, o), r.base = e.slice(a, l)), r.ext = e.slice(o, l)), a > 0 ? r.dir = e.slice(0, a - 1) : s && (r.dir = "/"), r
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            return i.posix = i, hs = i
        }()
    })),
    ds = {};

function ps() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}

function gs(e, t, r) {
    if (e && Es.isObject(e) && e instanceof ps) return e;
    var i = new ps;
    return i.parse(e, t, r), i
}

function bs(e) {
    if ("string" == typeof e) e = new URL(e);
    else if (!(e instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    if ("file:" !== e.protocol) throw new Deno.errors.InvalidData("invalid url scheme");
    return Hs ? function(e) {
        let t = e.hostname,
            r = e.pathname;
        for (let e = 0; e < r.length; e++)
            if ("%" === r[e]) {
                let t = r.codePointAt(e + 2) || 32;
                if ("2" === r[e + 1] && 102 === t || "5" === r[e + 1] && 99 === t) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")
            } if (r = r.replace(Vs, "\\"), r = decodeURIComponent(r), "" !== t) return `\\\\${t}${r}`;
        {
            let e = 32 | r.codePointAt(1),
                t = r[2];
            if (e < qs || e > $s || ":" !== t) throw new Deno.errors.InvalidData("file url path must be absolute");
            return r.slice(1)
        }
    }(e) : function(e) {
        if ("" !== e.hostname) throw new Deno.errors.InvalidData("invalid file url hostname");
        let t = e.pathname;
        for (let e = 0; e < t.length; e++)
            if ("%" === t[e]) {
                let r = t.codePointAt(e + 2) || 32;
                if ("2" === t[e + 1] && 102 === r) throw new Deno.errors.InvalidData("must not include encoded / characters")
            } return decodeURIComponent(t)
    }(e)
}

function ys(e) {
    let t = js.resolve(e),
        r = e.charCodeAt(e.length - 1);
    (r === Ws || Hs && r === Fs) && t[t.length - 1] !== js.sep && (t += "/");
    let i = new URL("file://");
    return t.includes("%") && (t = t.replace(zs, "%25")), !Hs && t.includes("\\") && (t = t.replace(Ks, "%5C")), t.includes("\n") && (t = t.replace(Ys, "%0A")), t.includes("\r") && (t = t.replace(Gs, "%0D")), t.includes("\t") && (t = t.replace(Qs, "%09")), i.pathname = t, i
}

function ms(e) {
    if ("string" == typeof e) e = new URL(e);
    else if (!(e instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    if ("file:" !== e.protocol) throw new Deno.errors.InvalidData("invalid url scheme");
    return lo ? function(e) {
        let t = e.hostname,
            r = e.pathname;
        for (let e = 0; e < r.length; e++)
            if ("%" === r[e]) {
                let t = r.codePointAt(e + 2) || 32;
                if ("2" === r[e + 1] && 102 === t || "5" === r[e + 1] && 99 === t) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")
            } if (r = r.replace(ho, "\\"), r = decodeURIComponent(r), "" !== t) return `\\\\${t}${r}`;
        {
            let e = 32 | r.codePointAt(1),
                t = r[2];
            if (e < oo || e > ao || ":" !== t) throw new Deno.errors.InvalidData("file url path must be absolute");
            return r.slice(1)
        }
    }(e) : function(e) {
        if ("" !== e.hostname) throw new Deno.errors.InvalidData("invalid file url hostname");
        let t = e.pathname;
        for (let e = 0; e < t.length; e++)
            if ("%" === t[e]) {
                let r = t.codePointAt(e + 2) || 32;
                if ("2" === t[e + 1] && 102 === r) throw new Deno.errors.InvalidData("must not include encoded / characters")
            } return decodeURIComponent(t)
    }(e)
}

function _s(e) {
    let t = cs.resolve(e),
        r = e.charCodeAt(e.length - 1);
    (r === so || lo && r === no) && t[t.length - 1] !== cs.sep && (t += "/");
    let i = new URL("file://");
    return t.includes("%") && (t = t.replace(uo, "%25")), !lo && t.includes("\\") && (t = t.replace(co, "%5C")), t.includes("\n") && (t = t.replace(fo, "%0A")), t.includes("\r") && (t = t.replace(po, "%0D")), t.includes("\t") && (t = t.replace(go, "%09")), i.pathname = t, i
}
o(ds, {
    URL() {
        return io
    },
    Url() {
        return Xs
    },
    default () {
        return ws
    },
    fileURLToPath() {
        return ms
    },
    format() {
        return Zs
    },
    parse() {
        return ro
    },
    pathToFileURL() {
        return _s
    },
    resolve() {
        return eo
    },
    resolveObject() {
        return to
    }
});
var ws, vs, Es, Ss, As, Ts, Is, ks, Rs, Cs, Os, Ps, Bs, xs, Ns, Ms, Us, Ls, js, Ds, Fs, Ws, qs, $s, Hs, Vs, zs, Ks, Ys, Gs, Qs, Js, Xs, Zs, eo, to, ro, io, no, so, oo, ao, lo, ho, uo, co, fo, po, go, bo = n((() => {
        l(), Ze(), De(), Bn(), jn(), rs(), fs(), ls(), vs = Pn, Es = {
            isString(e) {
                return "string" == typeof e
            },
            isObject(e) {
                return "object" == typeof e && null !== e
            },
            isNull(e) {
                return null === e
            },
            isNullOrUndefined(e) {
                return null == e
            }
        }, (ws = {}).parse = gs, ws.resolve = (e, t) => gs(e, !1, !0).resolve(t), ws.resolveObject = (e, t) => e ? gs(e, !1, !0).resolveObject(t) : t, ws.format = e => (Es.isString(e) && (e = gs(e)), e instanceof ps ? e.format() : ps.prototype.format.call(e)), ws.Url = ps, Ss = /^([a-z0-9.+-]+:)/i, As = /:[0-9]*$/, Ts = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Is = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), ks = ["'"].concat(Is), Rs = ["%", "/", "?", ";", "#"].concat(ks), Cs = ["/", "?", "#"], Os = /^[+a-z0-9A-Z_-]{0,63}$/, Ps = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Bs = {
            javascript: !0,
            "javascript:": !0
        }, xs = {
            javascript: !0,
            "javascript:": !0
        }, Ns = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        }, Ms = Ln, ps.prototype.parse = function(e, t, r) {
            if (!Es.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var i = e.indexOf("?"),
                n = -1 !== i && i < e.indexOf("#") ? "?" : "#",
                s = e.split(n);
            s[0] = s[0].replace(/\\/g, "/");
            var o = e = s.join(n);
            if (o = o.trim(), !r && 1 === e.split("#").length) {
                var a = Ts.exec(o);
                if (a) return this.path = o, this.href = o, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = t ? Ms.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            var l = Ss.exec(o);
            if (l) {
                var h = (l = l[0]).toLowerCase();
                this.protocol = h, o = o.substr(l.length)
            }
            if (r || l || o.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var u = "//" === o.substr(0, 2);
                !u || l && xs[l] || (o = o.substr(2), this.slashes = !0)
            }
            if (!xs[l] && (u || l && !Ns[l])) {
                for (var c, f, d = -1, p = 0; p < Cs.length; p++) - 1 !== (g = o.indexOf(Cs[p])) && (-1 === d || g < d) && (d = g);
                for (-1 !== (f = -1 === d ? o.lastIndexOf("@") : o.lastIndexOf("@", d)) && (c = o.slice(0, f), o = o.slice(f + 1), this.auth = decodeURIComponent(c)), d = -1, p = 0; p < Rs.length; p++) {
                    var g; - 1 !== (g = o.indexOf(Rs[p])) && (-1 === d || g < d) && (d = g)
                } - 1 === d && (d = o.length), this.host = o.slice(0, d), o = o.slice(d), this.parseHost(), this.hostname = this.hostname || "";
                var b = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!b)
                    for (var y = this.hostname.split(/\./), m = (p = 0, y.length); p < m; p++) {
                        var _ = y[p];
                        if (_ && !_.match(Os)) {
                            for (var w = "", v = 0, E = _.length; v < E; v++) _.charCodeAt(v) > 127 ? w += "x" : w += _[v];
                            if (!w.match(Os)) {
                                var S = y.slice(0, p),
                                    A = y.slice(p + 1),
                                    T = _.match(Ps);
                                T && (S.push(T[1]), A.unshift(T[2])), A.length && (o = "/" + A.join(".") + o), this.hostname = S.join(".");
                                break
                            }
                        }
                    }
                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), b || (this.hostname = vs.toASCII(this.hostname));
                var I = this.port ? ":" + this.port : "",
                    k = this.hostname || "";
                this.host = k + I, this.href += this.host, b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== o[0] && (o = "/" + o))
            }
            if (!Bs[h])
                for (p = 0, m = ks.length; p < m; p++) {
                    var R = ks[p];
                    if (-1 !== o.indexOf(R)) {
                        var C = encodeURIComponent(R);
                        C === R && (C = escape(R)), o = o.split(R).join(C)
                    }
                }
            var O = o.indexOf("#"); - 1 !== O && (this.hash = o.substr(O), o = o.slice(0, O));
            var P = o.indexOf("?");
            if (-1 !== P ? (this.search = o.substr(P), this.query = o.substr(P + 1), t && (this.query = Ms.parse(this.query)), o = o.slice(0, P)) : t && (this.search = "", this.query = {}), o && (this.pathname = o), Ns[h] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                I = this.pathname || "";
                var B = this.search || "";
                this.path = I + B
            }
            return this.href = this.format(), this
        }, ps.prototype.format = function() {
            var e = this.auth || "";
            e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "",
                r = this.pathname || "",
                i = this.hash || "",
                n = !1,
                s = "";
            this.host ? n = e + this.host : this.hostname && (n = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && Es.isObject(this.query) && Object.keys(this.query).length && (s = Ms.stringify(this.query));
            var o = this.search || s && "?" + s || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || Ns[t]) && !1 !== n ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), o && "?" !== o.charAt(0) && (o = "?" + o), t + n + (r = r.replace(/[?#]/g, (e => encodeURIComponent(e)))) + (o = o.replace("#", "%23")) + i
        }, ps.prototype.resolve = function(e) {
            return this.resolveObject(gs(e, !1, !0)).format()
        }, ps.prototype.resolveObject = function(e) {
            if (Es.isString(e)) {
                var t = new ps;
                t.parse(e, !1, !0), e = t
            }
            for (var r = new ps, i = Object.keys(this), n = 0; n < i.length; n++) {
                var s = i[n];
                r[s] = this[s]
            }
            if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
            if (e.slashes && !e.protocol) {
                for (var o = Object.keys(e), a = 0; a < o.length; a++) {
                    var l = o[a];
                    "protocol" !== l && (r[l] = e[l])
                }
                return Ns[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
            }
            if (e.protocol && e.protocol !== r.protocol) {
                if (!Ns[e.protocol]) {
                    for (var h = Object.keys(e), u = 0; u < h.length; u++) {
                        var c = h[u];
                        r[c] = e[c]
                    }
                    return r.href = r.format(), r
                }
                if (r.protocol = e.protocol, e.host || xs[e.protocol]) r.pathname = e.pathname;
                else {
                    for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()););
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), r.pathname = f.join("/")
                }
                if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                    var d = r.pathname || "",
                        p = r.search || "";
                    r.path = d + p
                }
                return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
            }
            var g = r.pathname && "/" === r.pathname.charAt(0),
                b = e.host || e.pathname && "/" === e.pathname.charAt(0),
                y = b || g || r.host && e.pathname,
                m = y,
                _ = r.pathname && r.pathname.split("/") || [],
                w = (f = e.pathname && e.pathname.split("/") || [], r.protocol && !Ns[r.protocol]);
            if (w && (r.hostname = "", r.port = null, r.host && ("" === _[0] ? _[0] = r.host : _.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), y = y && ("" === f[0] || "" === _[0])), b) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, _ = f;
            else if (f.length) _ || (_ = []), _.pop(), _ = _.concat(f), r.search = e.search, r.query = e.query;
            else if (!Es.isNullOrUndefined(e.search)) return w && (r.hostname = r.host = _.shift(), (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift())), r.search = e.search, r.query = e.query, Es.isNull(r.pathname) && Es.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
            if (!_.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
            for (var v = _.slice(-1)[0], E = (r.host || e.host || _.length > 1) && ("." === v || ".." === v) || "" === v, S = 0, A = _.length; A >= 0; A--) "." === (v = _[A]) ? _.splice(A, 1) : ".." === v ? (_.splice(A, 1), S++) : S && (_.splice(A, 1), S--);
            if (!y && !m)
                for (; S--; S) _.unshift("..");
            !y || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), E && "/" !== _.join("/").substr(-1) && _.push("");
            var T, I = "" === _[0] || _[0] && "/" === _[0].charAt(0);
            return w && (r.hostname = r.host = I ? "" : _.length ? _.shift() : "", (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift())), (y = y || r.host && _.length) && !I && _.unshift(""), _.length ? r.pathname = _.join("/") : (r.pathname = null, r.path = null), Es.isNull(r.pathname) && Es.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }, ps.prototype.parseHost = function() {
            var e = this.host,
                t = As.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }, ws.Url, ws.format, ws.resolve, ws.resolveObject, Us = {}, Ls = !1, js = function() {
            if (Ls) return Us;
            Ls = !0;
            var e = ts;

            function t(e) {
                if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }

            function r(e, t) {
                for (var r, i = "", n = 0, s = -1, o = 0, a = 0; a <= e.length; ++a) {
                    if (a < e.length) r = e.charCodeAt(a);
                    else {
                        if (47 === r) break;
                        r = 47
                    }
                    if (47 === r) {
                        if (s !== a - 1 && 1 !== o)
                            if (s !== a - 1 && 2 === o) {
                                if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                    if (i.length > 2) {
                                        var l = i.lastIndexOf("/");
                                        if (l !== i.length - 1) {
                                            -1 === l ? (i = "", n = 0) : n = (i = i.slice(0, l)).length - 1 - i.lastIndexOf("/"), s = a, o = 0;
                                            continue
                                        }
                                    } else if (2 === i.length || 1 === i.length) {
                                    i = "", n = 0, s = a, o = 0;
                                    continue
                                }
                                t && (i.length > 0 ? i += "/.." : i = "..", n = 2)
                            } else i.length > 0 ? i += "/" + e.slice(s + 1, a) : i = e.slice(s + 1, a), n = a - s - 1;
                        s = a, o = 0
                    } else 46 === r && -1 !== o ? ++o : o = -1
                }
                return i
            }
            var i = {
                resolve() {
                    for (var i, n = "", s = !1, o = arguments.length - 1; o >= -1 && !s; o--) {
                        var a;
                        o >= 0 ? a = arguments[o] : (void 0 === i && (i = e.cwd()), a = i), t(a), 0 !== a.length && (n = a + "/" + n, s = 47 === a.charCodeAt(0))
                    }
                    return n = r(n, !s), s ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : "."
                },
                normalize(e) {
                    if (t(e), 0 === e.length) return ".";
                    var i = 47 === e.charCodeAt(0),
                        n = 47 === e.charCodeAt(e.length - 1);
                    return 0 === (e = r(e, !i)).length && !i && (e = "."), e.length > 0 && n && (e += "/"), i ? "/" + e : e
                },
                isAbsolute: e => (t(e), e.length > 0 && 47 === e.charCodeAt(0)),
                join() {
                    if (0 === arguments.length) return ".";
                    for (var e, r = 0; r < arguments.length; ++r) {
                        var n = arguments[r];
                        t(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                    }
                    return void 0 === e ? "." : i.normalize(e)
                },
                relative(e, r) {
                    if (t(e), t(r), e === r || (e = i.resolve(e)) === (r = i.resolve(r))) return "";
                    for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                    for (var s = e.length, o = s - n, a = 1; a < r.length && 47 === r.charCodeAt(a); ++a);
                    for (var l = r.length - a, h = o < l ? o : l, u = -1, c = 0; c <= h; ++c) {
                        if (c === h) {
                            if (l > h) {
                                if (47 === r.charCodeAt(a + c)) return r.slice(a + c + 1);
                                if (0 === c) return r.slice(a + c)
                            } else o > h && (47 === e.charCodeAt(n + c) ? u = c : 0 === c && (u = 0));
                            break
                        }
                        var f = e.charCodeAt(n + c);
                        if (f !== r.charCodeAt(a + c)) break;
                        47 === f && (u = c)
                    }
                    var d = "";
                    for (c = n + u + 1; c <= s; ++c)(c === s || 47 === e.charCodeAt(c)) && (0 === d.length ? d += ".." : d += "/..");
                    return d.length > 0 ? d + r.slice(a + u) : (a += u, 47 === r.charCodeAt(a) && ++a, r.slice(a))
                },
                _makeLong: e => e,
                dirname(e) {
                    if (t(e), 0 === e.length) return ".";
                    for (var r = e.charCodeAt(0), i = 47 === r, n = -1, s = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (r = e.charCodeAt(o))) {
                            if (!s) {
                                n = o;
                                break
                            }
                        } else s = !1;
                    return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
                },
                basename(e, r) {
                    if (void 0 !== r && "string" != typeof r) throw new TypeError('"ext" argument must be a string');
                    t(e);
                    var i, n = 0,
                        s = -1,
                        o = !0;
                    if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var a = r.length - 1,
                            l = -1;
                        for (i = e.length - 1; i >= 0; --i) {
                            var h = e.charCodeAt(i);
                            if (47 === h) {
                                if (!o) {
                                    n = i + 1;
                                    break
                                }
                            } else - 1 === l && (o = !1, l = i + 1), a >= 0 && (h === r.charCodeAt(a) ? -1 == --a && (s = i) : (a = -1, s = l))
                        }
                        return n === s ? s = l : -1 === s && (s = e.length), e.slice(n, s)
                    }
                    for (i = e.length - 1; i >= 0; --i)
                        if (47 === e.charCodeAt(i)) {
                            if (!o) {
                                n = i + 1;
                                break
                            }
                        } else - 1 === s && (o = !1, s = i + 1);
                    return -1 === s ? "" : e.slice(n, s)
                },
                extname(e) {
                    t(e);
                    for (var r = -1, i = 0, n = -1, s = !0, o = 0, a = e.length - 1; a >= 0; --a) {
                        var l = e.charCodeAt(a);
                        if (47 !== l) - 1 === n && (s = !1, n = a + 1), 46 === l ? -1 === r ? r = a : 1 !== o && (o = 1) : -1 !== r && (o = -1);
                        else if (!s) {
                            i = a + 1;
                            break
                        }
                    }
                    return -1 === r || -1 === n || 0 === o || 1 === o && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
                },
                format(e) {
                    if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    return ((e, t) => {
                        var r = t.dir || t.root,
                            i = t.base || (t.name || "") + (t.ext || "");
                        return r ? r === t.root ? r + i : r + e + i : i
                    })("/", e)
                },
                parse(e) {
                    t(e);
                    var r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === e.length) return r;
                    var i, n = e.charCodeAt(0),
                        s = 47 === n;
                    s ? (r.root = "/", i = 1) : i = 0;
                    for (var o = -1, a = 0, l = -1, h = !0, u = e.length - 1, c = 0; u >= i; --u)
                        if (47 !== (n = e.charCodeAt(u))) - 1 === l && (h = !1, l = u + 1), 46 === n ? -1 === o ? o = u : 1 !== c && (c = 1) : -1 !== o && (c = -1);
                        else if (!h) {
                        a = u + 1;
                        break
                    }
                    return -1 === o || -1 === l || 0 === c || 1 === c && o === l - 1 && o === a + 1 ? -1 !== l && (r.base = r.name = 0 === a && s ? e.slice(1, l) : e.slice(a, l)) : (0 === a && s ? (r.name = e.slice(1, o), r.base = e.slice(1, l)) : (r.name = e.slice(a, o), r.base = e.slice(a, l)), r.ext = e.slice(o, l)), a > 0 ? r.dir = e.slice(0, a - 1) : s && (r.dir = "/"), r
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            return i.posix = i, Us = i
        }(), Ds = typeof Deno < "u" ? "windows" === Deno.build.os ? "win32" : Deno.build.os : void 0, ws.URL = typeof URL < "u" ? URL : null, ws.pathToFileURL = ys, ws.fileURLToPath = bs, ws.Url, ws.format, ws.resolve, ws.resolveObject, ws.URL, Fs = 92, Ws = 47, qs = 97, $s = 122, Hs = "win32" === Ds, Vs = /\//g, zs = /%/g, Ks = /\\/g, Ys = /\n/g, Gs = /\r/g, Qs = /\t/g, Js = typeof Deno < "u" ? "windows" === Deno.build.os ? "win32" : Deno.build.os : void 0, ws.URL = typeof URL < "u" ? URL : null, ws.pathToFileURL = _s, ws.fileURLToPath = ms, Xs = ws.Url, Zs = ws.format, eo = ws.resolve, to = ws.resolveObject, ro = ws.parse, io = ws.URL, no = 92, so = 47, oo = 97, ao = 122, lo = "win32" === Js, ho = /\//g, uo = /%/g, co = /\\/g, fo = /\n/g, po = /\r/g, go = /\t/g
    })),
    yo = {};

function mo() {
    throw Error("Node.js net module is not supported by JSPM core outside of Node.js")
}
o(yo, {
    Server() {
        return mo
    },
    Socket() {
        return mo
    },
    Stream() {
        return mo
    },
    _createServerHandle() {
        return mo
    },
    _normalizeArgs() {
        return mo
    },
    _setSimultaneousAccepts() {
        return mo
    },
    connect() {
        return mo
    },
    createConnection() {
        return mo
    },
    createServer() {
        return mo
    },
    default () {
        return _o
    },
    isIP() {
        return mo
    },
    isIPv4() {
        return mo
    },
    isIPv6() {
        return mo
    }
});
var _o, wo = n((() => {
        l(), Ze(), De(), _o = {
            _createServerHandle: mo,
            _normalizeArgs: mo,
            _setSimultaneousAccepts: mo,
            connect: mo,
            createConnection: mo,
            createServer: mo,
            isIP: mo,
            isIPv4: mo,
            isIPv6: mo,
            Server: mo,
            Socket: mo,
            Stream: mo
        }
    })),
    vo = s((e => {
        l(), Ze(), De();
        var t = e && e.__importDefault || (e => e && e.__esModule ? e : {
            default: e
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t((wo(), a(yo))),
            i = (0, t(wi()).default)("mqttjs:tcp");
        e.default = (e, t) => {
            t.port = t.port || 1883, t.hostname = t.hostname || t.host || "localhost";
            let {
                port: n
            } = t, s = t.hostname;
            return i("port %d and host %s", n, s), r.default.createConnection(n, s)
        }
    })),
    Eo = {};
o(Eo, {
    default () {
        return So
    }
});
var So, Ao = n((() => {
        l(), Ze(), De(), So = {}
    })),
    To = s((e => {
        l(), Ze(), De();
        var t = e && e.__importDefault || (e => e && e.__esModule ? e : {
            default: e
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t((Ao(), a(Eo))),
            i = t((wo(), a(yo))),
            n = (0, t(wi()).default)("mqttjs:tls");
        e.default = (e, t) => {
            t.port = t.port || 8883, t.host = t.hostname || t.host || "localhost", 0 === i.default.isIP(t.host) && (t.servername = t.host), t.rejectUnauthorized = !1 !== t.rejectUnauthorized, delete t.path, n("port %d host %s rejectUnauthorized %b", t.port, t.host, t.rejectUnauthorized);
            let s = r.default.connect(t);

            function o(r) {
                t.rejectUnauthorized && e.emit("error", r), s.end()
            }
            return s.on("secureConnect", (() => {
                t.rejectUnauthorized && !s.authorized ? s.emit("error", Error("TLS not authorized")) : s.removeListener("error", o)
            })), s.on("error", o), s
        }
    })),
    Io = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BufferedDuplex = e.writev = void 0;
        var t = fi();

        function r(e, t) {
            let r = Array(e.length);
            for (let t = 0; t < e.length; t++) "string" == typeof e[t].chunk ? r[t] = Ge.from(e[t].chunk, "utf8") : r[t] = e[t].chunk;
            this._write(Ge.concat(r), "binary", t)
        }
        e.writev = r;
        var i = class extends t.Duplex {
            constructor(e, t, i) {
                super({
                    objectMode: !0
                }), this.proxy = t, this.socket = i, this.writeQueue = [], e.objectMode || (this._writev = r.bind(this)), this.isSocketOpen = !1, this.proxy.on("data", (e => {
                    this.push(e)
                }))
            }
            _read(e) {
                this.proxy.read(e)
            }
            _write(e, t, r) {
                this.isSocketOpen ? this.writeToProxy(e, t, r) : this.writeQueue.push({
                    chunk: e,
                    encoding: t,
                    cb: r
                })
            }
            _final(e) {
                this.writeQueue = [], this.proxy.end(e)
            }
            socketReady() {
                this.emit("connect"), this.isSocketOpen = !0, this.processWriteQueue()
            }
            writeToProxy(e, t, r) {
                !1 === this.proxy.write(e, t) ? this.proxy.once("drain", r) : r()
            }
            processWriteQueue() {
                for (; this.writeQueue.length > 0;) {
                    let {
                        chunk: e,
                        encoding: t,
                        cb: r
                    } = this.writeQueue.shift();
                    this.writeToProxy(e, t, r)
                }
            }
        };
        e.BufferedDuplex = i
    })),
    ko = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t, r, i, n = (Xe(), a(Fe)),
            s = fi(),
            o = Io();
        e.default = (e, a) => {
            if (a.hostname = a.hostname || a.host, !a.hostname) throw Error("Could not determine host. Specify host manually.");
            let l = "MQIsdp" === a.protocolId && 3 === a.protocolVersion ? "mqttv3.1" : "mqtt";
            ! function(e) {
                e.hostname || (e.hostname = "localhost"), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {})
            }(a);
            let h = function(e, t) {
                let r = "wxs" === e.protocol ? "wss" : "ws",
                    i = `${r}://${e.hostname}${e.path}`;
                return e.port && 80 !== e.port && 443 !== e.port && (i = `${r}://${e.hostname}:${e.port}${e.path}`), "function" == typeof e.transformWsUrl && (i = e.transformWsUrl(i, e, t)), i
            }(a, e);
            t = wx.connectSocket({
                url: h,
                protocols: [l]
            }), r = function() {
                let e = new s.Transform;
                return e._write = (e, r, i) => {
                    t.send({
                        data: e.buffer,
                        success() {
                            i()
                        },
                        fail(e) {
                            i(Error(e))
                        }
                    })
                }, e._flush = e => {
                    t.close({
                        success() {
                            e()
                        }
                    })
                }, e
            }(), (i = new o.BufferedDuplex(a, r, t))._destroy = (e, r) => {
                t.close({
                    success() {
                        r && r(e)
                    }
                })
            };
            let u = i.destroy;
            return i.destroy = (e, r) => (i.destroy = u, setTimeout((() => {
                t.close({
                    fail() {
                        i._destroy(e, r)
                    }
                })
            }), 0), i), t.onOpen((() => {
                i.socketReady()
            })), t.onMessage((e => {
                let {
                    data: t
                } = e;
                t = t instanceof ArrayBuffer ? n.Buffer.from(t) : n.Buffer.from(t, "utf8"), r.push(t)
            })), t.onClose((() => {
                i.emit("close"), i.end(), i.destroy()
            })), t.onError((e => {
                let t = Error(e.errMsg);
                i.destroy(t)
            })), i
        }
    })),
    Ro = s((e => {
        l(), Ze(), De(), Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t, r, i, n = (Xe(), a(Fe)),
            s = fi(),
            o = Io(),
            h = !1;
        e.default = (e, a) => {
            if (a.hostname = a.hostname || a.host, !a.hostname) throw Error("Could not determine host. Specify host manually.");
            let l = "MQIsdp" === a.protocolId && 3 === a.protocolVersion ? "mqttv3.1" : "mqtt";
            ! function(e) {
                e.hostname || (e.hostname = "localhost"), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {})
            }(a);
            let u = function(e, t) {
                let r = "alis" === e.protocol ? "wss" : "ws",
                    i = `${r}://${e.hostname}${e.path}`;
                return e.port && 80 !== e.port && 443 !== e.port && (i = `${r}://${e.hostname}:${e.port}${e.path}`), "function" == typeof e.transformWsUrl && (i = e.transformWsUrl(i, e, t)), i
            }(a, e);
            return (t = a.my).connectSocket({
                url: u,
                protocols: l
            }), r = function() {
                let e = new s.Transform;
                return e._write = (e, r, i) => {
                    t.sendSocketMessage({
                        data: e.buffer,
                        success() {
                            i()
                        },
                        fail() {
                            i(Error())
                        }
                    })
                }, e._flush = e => {
                    t.closeSocket({
                        success() {
                            e()
                        }
                    })
                }, e
            }(), i = new o.BufferedDuplex(a, r, t), h || (h = !0, t.onSocketOpen((() => {
                i.socketReady()
            })), t.onSocketMessage((e => {
                if ("string" == typeof e.data) {
                    let t = n.Buffer.from(e.data, "base64");
                    r.push(t)
                } else {
                    let t = new FileReader;
                    t.addEventListener("load", (() => {
                        let e = t.result;
                        e = e instanceof ArrayBuffer ? n.Buffer.from(e) : n.Buffer.from(e, "utf8"), r.push(e)
                    })), t.readAsArrayBuffer(e.data)
                }
            })), t.onSocketClose((() => {
                i.end(), i.destroy()
            })), t.onSocketError((e => {
                i.destroy(e)
            }))), i
        }
    })),
    Co = s(((e, t) => {
        l(), Ze(), De(), t.exports = () => {
            throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
        }
    })),
    Oo = s((e => {
        l(), Ze(), De();
        var t = e && e.__importDefault || (e => e && e.__esModule ? e : {
            default: e
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (Xe(), a(Fe)),
            i = t(Co()),
            n = t(wi()),
            s = fi(),
            o = t(pn()),
            h = Io(),
            u = (0, n.default)("mqttjs:ws"),
            c = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];

        function f(e, t) {
            let r = `${e.protocol}://${e.hostname}:${e.port}${e.path}`;
            return "function" == typeof e.transformWsUrl && (r = e.transformWsUrl(r, e, t)), r
        }

        function d(e) {
            let t = e;
            return e.hostname || (t.hostname = "localhost"), e.port || ("wss" === e.protocol ? t.port = 443 : t.port = 80), e.path || (t.path = "/"), e.wsOptions || (t.wsOptions = {}), !o.default && "wss" === e.protocol && c.forEach((r => {
                ({}).hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(e.wsOptions, r) && (t.wsOptions[r] = e[r])
            })), t
        }
        e.default = o.default ? (e, t) => {
            u("browserStreamBuilder");
            let i, n = function(e) {
                    let t = d(e);
                    if (t.hostname || (t.hostname = t.host), !t.hostname) {
                        if (typeof document > "u") throw Error("Could not determine host. Specify host manually.");
                        let e = new URL(document.URL);
                        t.hostname = e.hostname, t.port || (t.port = Number(e.port))
                    }
                    return void 0 === t.objectMode && (t.objectMode = !(!0 === t.binary || void 0 === t.binary)), t
                }(t).browserBufferSize || 524288,
                o = t.browserBufferTimeout || 1e3,
                a = !t.objectMode,
                l = function(e, t) {
                    let r, i = "MQIsdp" === t.protocolId && 3 === t.protocolVersion ? "mqttv3.1" : "mqtt",
                        n = f(t, e);
                    return r = t.createWebsocket ? t.createWebsocket(n, [i], t) : new WebSocket(n, [i]), r.binaryType = "arraybuffer", r
                }(e, t),
                c = function(e, t, r) {
                    let i = new s.Transform({
                        objectMode: e.objectMode
                    });
                    return i._write = t, i._flush = r, i
                }(t, (function e(t, i, s) {
                    if (l.bufferedAmount > n) return void setTimeout(e, o, t, i, s);
                    a && "string" == typeof t && (t = r.Buffer.from(t, "utf8"));
                    try {
                        l.send(t)
                    } catch (e) {
                        return s(e)
                    }
                    s()
                }), (function(e) {
                    l.close(), e()
                }));
            t.objectMode || (c._writev = h.writev.bind(c)), c.on("close", (() => {
                l.close()
            }));
            let p = typeof l.addEventListener < "u";

            function g() {
                u("WebSocket onOpen"), i instanceof h.BufferedDuplex && i.socketReady()
            }

            function b(e) {
                u("WebSocket onClose", e), i.end(), i.destroy()
            }

            function y(e) {
                u("WebSocket onError", e);
                let t = Error("WebSocket error");
                t.event = e, i.destroy(t)
            }

            function m(e) {
                let {
                    data: t
                } = e;
                t = t instanceof ArrayBuffer ? r.Buffer.from(t) : r.Buffer.from(t, "utf8"), c.push(t)
            }
            return l.readyState === l.OPEN ? (i = c, i.socket = l) : (i = new h.BufferedDuplex(t, c, l), p ? l.addEventListener("open", g) : l.onopen = g), p ? (l.addEventListener("close", b), l.addEventListener("error", y), l.addEventListener("message", m)) : (l.onclose = b, l.onerror = y, l.onmessage = m), i
        } : (e, t) => {
            u("streamBuilder");
            let r = d(t),
                n = f(r, e),
                s = function(e, t, r) {
                    u("createWebSocket"), u(`protocol: ${r.protocolId} ${r.protocolVersion}`);
                    let n, s = "MQIsdp" === r.protocolId && 3 === r.protocolVersion ? "mqttv3.1" : "mqtt";
                    return u(`creating new Websocket for url: ${t} and protocol: ${s}`), n = r.createWebsocket ? r.createWebsocket(t, [s], r) : new i.default(t, [s], r.wsOptions), n
                }(0, n, r),
                o = i.default.createWebSocketStream(s, r.wsOptions);
            return o.url = n, s.on("close", (() => {
                o.destroy()
            })), o
        }
    })),
    Po = s((e => {
        l(), Ze(), De();
        var t = e && e.__importDefault || (e => e && e.__esModule ? e : {
            default: e
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.connectAsync = void 0;
        var r = t(wi()),
            i = t((bo(), a(ds))),
            n = t(bn()),
            s = t(pn()),
            o = (0, r.default)("mqttjs"),
            h = {};

        function u(e, t) {
            if (o("connecting to an MQTT broker..."), "object" == typeof e && !t && (t = e, e = ""), t = t || {}, e && "string" == typeof e) {
                let r = i.default.parse(e, !0);
                if (null != r.port && (r.port = Number(r.port)), null === (t = Object.assign(Object.assign({}, r), t)).protocol) throw Error("Missing protocol");
                t.protocol = t.protocol.replace(/:$/, "")
            }
            if (function(e) {
                    let t;
                    e.auth && (t = e.auth.match(/^(.+):(.+)$/), t ? (e.username = t[1], e.password = t[2]) : e.username = e.auth)
                }(t), t.query && "string" == typeof t.query.clientId && (t.clientId = t.query.clientId), t.cert && t.key) {
                if (!t.protocol) throw Error("Missing secure protocol key");
                if (-1 === ["mqtts", "wss", "wxs", "alis"].indexOf(t.protocol)) switch (t.protocol) {
                    case "mqtt":
                        t.protocol = "mqtts";
                        break;
                    case "ws":
                        t.protocol = "wss";
                        break;
                    case "wx":
                        t.protocol = "wxs";
                        break;
                    case "ali":
                        t.protocol = "alis";
                        break;
                    default:
                        throw Error(`Unknown protocol for secure connection: "${t.protocol}"!`)
                }
            }
            if (!h[t.protocol]) {
                let e = -1 !== ["mqtts", "wss"].indexOf(t.protocol);
                t.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter(((t, r) => (!e || r % 2 != 0) && "function" == typeof h[t]))[0]
            }
            if (!1 === t.clean && !t.clientId) throw Error("Missing clientId for unclean clients");
            t.protocol && (t.defaultProtocol = t.protocol);
            let r = new n.default((function(e) {
                return t.servers && ((!e._reconnectCount || e._reconnectCount === t.servers.length) && (e._reconnectCount = 0), t.host = t.servers[e._reconnectCount].host, t.port = t.servers[e._reconnectCount].port, t.protocol = t.servers[e._reconnectCount].protocol ? t.servers[e._reconnectCount].protocol : t.defaultProtocol, t.hostname = t.host, e._reconnectCount++), o("calling streambuilder for", t.protocol), h[t.protocol](e, t)
            }), t);
            return r.on("error", (() => {})), r
        }
        s.default ? (h.wx = ko().default, h.wxs = ko().default, h.ali = Ro().default, h.alis = Ro().default) : (h.mqtt = vo().default, h.tcp = vo().default, h.ssl = To().default, h.tls = h.ssl, h.mqtts = To().default), h.ws = Oo().default, h.wss = Oo().default, e.connectAsync = function(e, t, r = !0) {
            return new Promise(((i, n) => {
                let s = u(e, t),
                    o = {
                        connect() {
                            a(), i(s)
                        },
                        end() {
                            a(), i(s)
                        },
                        error(e) {
                            a(), s.end(), n(e)
                        }
                    };

                function a() {
                    Object.keys(o).forEach((e => {
                        s.off(e, o[e])
                    }))
                }!1 === r && (o.close = () => {
                    o.error(Error("Couldn't connect to server"))
                }), Object.keys(o).forEach((e => {
                    s.on(e, o[e])
                }))
            }))
        }, e.default = u
    })),
    Bo = s((e => {
        l(), Ze(), De();
        var t = e && e.__createBinding || (Object.create ? (e, t, r, i) => {
                void 0 === i && (i = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                    enumerable: !0,
                    get() {
                        return t[r]
                    }
                }), Object.defineProperty(e, i, n)
            } : (e, t, r, i) => {
                void 0 === i && (i = r), e[i] = t[r]
            }),
            r = e && e.__setModuleDefault || (Object.create ? (e, t) => {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : (e, t) => {
                e.default = t
            }),
            i = e && e.__importStar || (e => {
                if (e && e.__esModule) return e;
                var i = {};
                if (null != e)
                    for (var n in e) "default" !== n && {}.hasOwnProperty.call(e, n) && t(i, e, n);
                return r(i, e), i
            }),
            n = e && e.__exportStar || ((e, r) => {
                for (var i in e) "default" !== i && !{}.hasOwnProperty.call(r, i) && t(r, e, i)
            }),
            s = e && e.__importDefault || (e => e && e.__esModule ? e : {
                default: e
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ReasonCodes = e.UniqueMessageIdProvider = e.DefaultMessageIdProvider = e.Store = e.MqttClient = e.connectAsync = e.connect = e.Client = void 0;
        var o = s(bn());
        e.MqttClient = o.default;
        var a = s(ki());
        e.DefaultMessageIdProvider = a.default;
        var h = s(yn());
        e.UniqueMessageIdProvider = h.default;
        var u = s(Pi());
        e.Store = u.default;
        var c = i(Po());
        e.connect = c.default, Object.defineProperty(e, "connectAsync", {
            enumerable: !0,
            get() {
                return c.connectAsync
            }
        }), e.Client = o.default, n(bn(), e), n(xi(), e);
        var f = Ni();
        Object.defineProperty(e, "ReasonCodes", {
            enumerable: !0,
            get() {
                return f.ReasonCodes
            }
        })
    })),
    xo = s((e => {
        l(), Ze(), De();
        var t = e && e.__createBinding || (Object.create ? (e, t, r, i) => {
                void 0 === i && (i = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                    enumerable: !0,
                    get() {
                        return t[r]
                    }
                }), Object.defineProperty(e, i, n)
            } : (e, t, r, i) => {
                void 0 === i && (i = r), e[i] = t[r]
            }),
            r = e && e.__setModuleDefault || (Object.create ? (e, t) => {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : (e, t) => {
                e.default = t
            }),
            i = e && e.__importStar || (e => {
                if (e && e.__esModule) return e;
                var i = {};
                if (null != e)
                    for (var n in e) "default" !== n && {}.hasOwnProperty.call(e, n) && t(i, e, n);
                return r(i, e), i
            }),
            n = e && e.__exportStar || ((e, r) => {
                for (var i in e) "default" !== i && !{}.hasOwnProperty.call(r, i) && t(r, e, i)
            });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(Bo());
        e.default = s, n(Bo(), e)
    })),
    No = xo();

function Mo(e) {
    const t = new Uint8Array(e);
    for (let r = 0; r < e; r++) t[r] = 256 * Math.random() | 0;
    return t
}

function Uo() {
    if ("undefined" == typeof globalThis) return null;
    const e = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
    };
    return e.RTCPeerConnection ? e : null
}

function Lo(e, t) {
    return Object.defineProperty(e, "code", {
        value: t,
        enumerable: !0,
        configurable: !0
    }), e
}

function jo(e) {
    return e.replace(/a=ice-options:trickle\s\n/g, "")
}
class Do {
    constructor(e = {}) {
        if (this._map = new Map, this._id = Mo(4).toString("hex").slice(0, 7), this._doDebug = e.debug, this._debug("new peer %o", e), this.channelName = e.initiator ? e.channelName || Mo(20).toString("hex") : null, this.initiator = e.initiator || !1, this.channelConfig = e.channelConfig || Do.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, Do.config, e.config), this.offerOptions = e.offerOptions || {}, this.answerOptions = e.answerOptions || {}, this.sdpTransform = e.sdpTransform || (e => e), this.streams = e.streams || (e.stream ? [e.stream] : []), this.trickle = void 0 === e.trickle || e.trickle, this.allowHalfTrickle = void 0 !== e.allowHalfTrickle && e.allowHalfTrickle, this.iceCompleteTimeout = e.iceCompleteTimeout || 5e3, this.destroyed = !1, this.destroying = !1, this._connected = !1, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, this._wrtc = e.wrtc && "object" == typeof e.wrtc ? e.wrtc : Uo(), !this._wrtc) throw "undefined" == typeof window ? Lo(Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT") : Lo(Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
        this._pcReady = !1, this._channelReady = !1, this._iceComplete = !1, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = !1, this._firstNegotiation = !0, this._batchedNegotiation = !1, this._queuedNegotiation = !1, this._sendersAwaitingStable = [], this._senderMap = new Map, this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
        try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config)
        } catch (e) {
            return void this.destroy(Lo(e, "ERR_PC_CONSTRUCTOR"))
        }
        this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId, this._pc.oniceconnectionstatechange = () => {
            this._onIceStateChange()
        }, this._pc.onicegatheringstatechange = () => {
            this._onIceStateChange()
        }, this._pc.onconnectionstatechange = () => {
            this._onConnectionStateChange()
        }, this._pc.onsignalingstatechange = () => {
            this._onSignalingStateChange()
        }, this._pc.onicecandidate = e => {
            this._onIceCandidate(e)
        }, "object" == typeof this._pc.peerIdentity && this._pc.peerIdentity.catch((e => {
            this.destroy(Lo(e, "ERR_PC_PEER_IDENTITY"))
        })), this.initiator || this.channelNegotiated ? this._setupData({
            channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
        }) : this._pc.ondatachannel = e => {
            this._setupData(e)
        }, this.streams && this.streams.forEach((e => {
            this.addStream(e)
        })), this._pc.ontrack = e => {
            this._onTrack(e)
        }, this._debug("initial negotiation"), this._needsNegotiation()
    }
    get bufferSize() {
        return this._channel && this._channel.bufferedAmount || 0
    }
    get connected() {
        return this._connected && "open" === this._channel.readyState
    }
    address() {
        return {
            port: this.localPort,
            family: this.localFamily,
            address: this.localAddress
        }
    }
    signal(e) {
        if (!this.destroying) {
            if (this.destroyed) throw Lo(Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (t) {
                e = {}
            }
            this._debug("signal()"), e.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()), e.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), this.addTransceiver(e.transceiverRequest.kind, e.transceiverRequest.init)), e.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(e.candidate) : this._pendingCandidates.push(e.candidate)), e.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e)).then((() => {
                this.destroyed || (this._pendingCandidates.forEach((e => {
                    this._addIceCandidate(e)
                })), this._pendingCandidates = [], "offer" === this._pc.remoteDescription.type && this._createAnswer())
            })).catch((e => {
                this.destroy(Lo(e, "ERR_SET_REMOTE_DESCRIPTION"))
            })), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || this.destroy(Lo(Error("signal() called with invalid signal data"), "ERR_SIGNALING"))
        }
    }
    _addIceCandidate(e) {
        const t = new this._wrtc.RTCIceCandidate(e);
        this._pc.addIceCandidate(t).catch((e => {
            !t.address || t.address.endsWith(".local") ? console.warn("Ignoring unsupported ICE candidate.") : this.destroy(Lo(e, "ERR_ADD_ICE_CANDIDATE"))
        }))
    }
    send(e) {
        if (!this.destroying) {
            if (this.destroyed) throw Lo(Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
            this._channel.send(e)
        }
    }
    addTransceiver(e, t) {
        if (!this.destroying) {
            if (this.destroyed) throw Lo(Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
            if (this._debug("addTransceiver()"), this.initiator) try {
                this._pc.addTransceiver(e, t), this._needsNegotiation()
            } catch (e) {
                this.destroy(Lo(e, "ERR_ADD_TRANSCEIVER"))
            } else this.emit("signal", {
                type: "transceiverRequest",
                transceiverRequest: {
                    kind: e,
                    init: t
                }
            })
        }
    }
    addStream(e) {
        if (!this.destroying) {
            if (this.destroyed) throw Lo(Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
            this._debug("addStream()"), e.getTracks().forEach((t => {
                this.addTrack(t, e)
            }))
        }
    }
    addTrack(e, t) {
        if (this.destroying) return;
        if (this.destroyed) throw Lo(Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTrack()");
        const r = this._senderMap.get(e) || new Map;
        let i = r.get(t);
        if (i) throw i.removed ? Lo(Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED") : Lo(Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
        i = this._pc.addTrack(e, t), r.set(t, i), this._senderMap.set(e, r), this._needsNegotiation()
    }
    replaceTrack(e, t, r) {
        if (this.destroying) return;
        if (this.destroyed) throw Lo(Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("replaceTrack()");
        const i = this._senderMap.get(e),
            n = i ? i.get(r) : null;
        if (!n) throw Lo(Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        t && this._senderMap.set(t, i), null != n.replaceTrack ? n.replaceTrack(t) : this.destroy(Lo(Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"))
    }
    removeTrack(e, t) {
        if (this.destroying) return;
        if (this.destroyed) throw Lo(Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSender()");
        const r = this._senderMap.get(e),
            i = r ? r.get(t) : null;
        if (!i) throw Lo(Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        try {
            i.removed = !0, this._pc.removeTrack(i)
        } catch (e) {
            "NS_ERROR_UNEXPECTED" === e.name ? this._sendersAwaitingStable.push(i) : this.destroy(Lo(e, "ERR_REMOVE_TRACK"))
        }
        this._needsNegotiation()
    }
    removeStream(e) {
        if (!this.destroying) {
            if (this.destroyed) throw Lo(Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
            this._debug("removeSenders()"), e.getTracks().forEach((t => {
                this.removeTrack(t, e)
            }))
        }
    }
    _needsNegotiation() {
        this._debug("_needsNegotiation"), this._batchedNegotiation || (this._batchedNegotiation = !0, queueMicrotask((() => {
            this._batchedNegotiation = !1, this.initiator || !this._firstNegotiation ? (this._debug("starting batched negotiation"), this.negotiate()) : this._debug("non-initiator initial negotiation request discarded"), this._firstNegotiation = !1
        })))
    }
    negotiate() {
        if (!this.destroying) {
            if (this.destroyed) throw Lo(Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
            this.initiator ? this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("start negotiation"), setTimeout((() => {
                this._createOffer()
            }), 0)) : this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("requesting negotiation from initiator"), this.emit("signal", {
                type: "renegotiate",
                renegotiate: !0
            })), this._isNegotiating = !0
        }
    }
    destroy(e) {
        this.destroyed || this.destroying || (this.destroying = !0, this._debug("destroying (error: %s)", e && (e.message || e)), queueMicrotask((() => {
            if (this.destroyed = !0, this.destroying = !1, this._debug("destroy (error: %s)", e && (e.message || e)), this._connected = !1, this._pcReady = !1, this._channelReady = !1, this._remoteTracks = null, this._remoteStreams = null, this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._channel) {
                try {
                    this._channel.close()
                } catch (e) {}
                this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, this._channel.onerror = null
            }
            if (this._pc) {
                try {
                    this._pc.close()
                } catch (e) {}
                this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, this._pc.ondatachannel = null
            }
            this._pc = null, this._channel = null, e && this.emit("error", e), this.emit("close")
        })))
    }
    _setupData(e) {
        if (!e.channel) return this.destroy(Lo(Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        this._channel = e.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = 65536), this.channelName = this._channel.label, this._channel.onmessage = e => {
            this._onChannelMessage(e)
        }, this._channel.onbufferedamountlow = () => {
            this._onChannelBufferedAmountLow()
        }, this._channel.onopen = () => {
            this._onChannelOpen()
        }, this._channel.onclose = () => {
            this._onChannelClose()
        }, this._channel.onerror = e => {
            this.destroy(Lo(e, "ERR_DATA_CHANNEL"))
        };
        let t = !1;
        this._closingInterval = setInterval((() => {
            this._channel && "closing" === this._channel.readyState ? (t && this._onChannelClose(), t = !0) : t = !1
        }), 5e3)
    }
    _startIceCompleteTimeout() {
        this.destroyed || this._iceCompleteTimer || (this._debug("started iceComplete timeout"), this._iceCompleteTimer = setTimeout((() => {
            this._iceComplete || (this._iceComplete = !0, this._debug("iceComplete timeout completed"), this.emit("iceTimeout"), this.emit("_iceComplete"))
        }), this.iceCompleteTimeout))
    }
    _createOffer() {
        this.destroyed || this._pc.createOffer(this.offerOptions).then((e => {
            if (this.destroyed) return;
            this.trickle || this.allowHalfTrickle || (e.sdp = jo(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
            const t = () => {
                if (this.destroyed) return;
                const t = this._pc.localDescription || e;
                this._debug("signal"), this.emit("signal", {
                    type: t.type,
                    sdp: t.sdp
                })
            };
            this._pc.setLocalDescription(e).then((() => {
                this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? t() : this.once("_iceComplete", t))
            })).catch((e => {
                this.destroy(Lo(e, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((e => {
            this.destroy(Lo(e, "ERR_CREATE_OFFER"))
        }))
    }
    _requestMissingTransceivers() {
        this._pc.getTransceivers && this._pc.getTransceivers().forEach((e => {
            e.mid || !e.sender.track || e.requested || (e.requested = !0, this.addTransceiver(e.sender.track.kind))
        }))
    }
    _createAnswer() {
        this.destroyed || this._pc.createAnswer(this.answerOptions).then((e => {
            if (this.destroyed) return;
            this.trickle || this.allowHalfTrickle || (e.sdp = jo(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
            const t = () => {
                if (this.destroyed) return;
                const t = this._pc.localDescription || e;
                this._debug("signal"), this.emit("signal", {
                    type: t.type,
                    sdp: t.sdp
                }), this.initiator || this._requestMissingTransceivers()
            };
            this._pc.setLocalDescription(e).then((() => {
                this.destroyed || (this.trickle || this._iceComplete ? t() : this.once("_iceComplete", t))
            })).catch((e => {
                this.destroy(Lo(e, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((e => {
            this.destroy(Lo(e, "ERR_CREATE_ANSWER"))
        }))
    }
    _onConnectionStateChange() {
        this.destroyed || "failed" === this._pc.connectionState && this.destroy(Lo(Error("Connection failed."), "ERR_CONNECTION_FAILURE"))
    }
    _onIceStateChange() {
        if (this.destroyed) return;
        const e = this._pc.iceConnectionState,
            t = this._pc.iceGatheringState;
        this._debug("iceStateChange (connection: %s) (gathering: %s)", e, t), this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.destroy(Lo(Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === e && this.destroy(Lo(Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"))
    }
    getStats(e) {
        const t = e => ("[object Array]" === {}.toString.call(e.values) && e.values.forEach((t => {
            Object.assign(e, t)
        })), e);
        0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((r => {
            const i = [];
            r.forEach((e => {
                i.push(t(e))
            })), e(null, i)
        }), (t => e(t))) : this._pc.getStats.length > 0 ? this._pc.getStats((r => {
            if (this.destroyed) return;
            const i = [];
            r.result().forEach((e => {
                const r = {};
                e.names().forEach((t => {
                    r[t] = e.stat(t)
                })), r.id = e.id, r.type = e.type, r.timestamp = e.timestamp, i.push(t(r))
            })), e(null, i)
        }), (t => e(t))) : e(null, [])
    }
    _maybeReady() {
        if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = !0;
        const e = () => {
            this.destroyed || this.getStats(((t, r) => {
                if (this.destroyed) return;
                t && (r = []);
                const i = {},
                    n = {},
                    s = {};
                let o = !1;
                r.forEach((e => {
                    "remotecandidate" !== e.type && "remote-candidate" !== e.type || (i[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (n[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (s[e.id] = e)
                }));
                const a = e => {
                    o = !0;
                    let t = n[e.localCandidateId];
                    t && (t.ip || t.address) ? (this.localAddress = t.ip || t.address, this.localPort = Number(t.port)) : t && t.ipAddress ? (this.localAddress = t.ipAddress, this.localPort = Number(t.portNumber)) : "string" == typeof e.googLocalAddress && (t = e.googLocalAddress.split(":"), this.localAddress = t[0], this.localPort = Number(t[1])), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                    let r = i[e.remoteCandidateId];
                    r && (r.ip || r.address) ? (this.remoteAddress = r.ip || r.address, this.remotePort = Number(r.port)) : r && r.ipAddress ? (this.remoteAddress = r.ipAddress, this.remotePort = Number(r.portNumber)) : "string" == typeof e.googRemoteAddress && (r = e.googRemoteAddress.split(":"), this.remoteAddress = r[0], this.remotePort = Number(r[1])), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort)
                };
                if (r.forEach((e => {
                        "transport" === e.type && e.selectedCandidatePairId && a(s[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && a(e)
                    })), o || Object.keys(s).length && !Object.keys(n).length) {
                    if (this._connecting = !1, this._connected = !0, this._chunk) {
                        try {
                            this.send(this._chunk)
                        } catch (t) {
                            return this.destroy(Lo(t, "ERR_DATA_CHANNEL"))
                        }
                        this._chunk = null, this._debug('sent chunk from "write before connect"');
                        const e = this._cb;
                        this._cb = null, e(null)
                    }
                    "number" != typeof this._channel.bufferedAmountLowThreshold && (this._interval = setInterval((() => this._onInterval()), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect")
                } else setTimeout(e, 100)
            }))
        };
        e()
    }
    _onInterval() {
        !this._cb || !this._channel || this._channel.bufferedAmount > 65536 || this._onChannelBufferedAmountLow()
    }
    _onSignalingStateChange() {
        this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = !1, this._debug("flushing sender queue", this._sendersAwaitingStable), this._sendersAwaitingStable.forEach((e => {
            this._pc.removeTrack(e), this._queuedNegotiation = !0
        })), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._debug("flushing negotiation queue"), this._queuedNegotiation = !1, this._needsNegotiation()) : (this._debug("negotiated"), this.emit("negotiated"))), this._debug("signalingStateChange %s", this._pc.signalingState), this.emit("signalingStateChange", this._pc.signalingState))
    }
    _onIceCandidate(e) {
        this.destroyed || (e.candidate && this.trickle ? this.emit("signal", {
            type: "candidate",
            candidate: {
                candidate: e.candidate.candidate,
                sdpMLineIndex: e.candidate.sdpMLineIndex,
                sdpMid: e.candidate.sdpMid
            }
        }) : e.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), e.candidate && this._startIceCompleteTimeout())
    }
    _onChannelMessage(e) {
        if (this.destroyed) return;
        let t = e.data;
        t instanceof ArrayBuffer && (t = new Uint8Array(t)), this.emit("data", t)
    }
    _onChannelBufferedAmountLow() {
        if (this.destroyed || !this._cb) return;
        this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
        const e = this._cb;
        this._cb = null, e(null)
    }
    _onChannelOpen() {
        this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = !0, this._maybeReady())
    }
    _onChannelClose() {
        this.destroyed || (this._debug("on channel close"), this.destroy())
    }
    _onTrack(e) {
        this.destroyed || e.streams.forEach((t => {
            this._debug("on track"), this.emit("track", e.track, t), this._remoteTracks.push({
                track: e.track,
                stream: t
            }), this._remoteStreams.some((e => e.id === t.id)) || (this._remoteStreams.push(t), queueMicrotask((() => {
                this._debug("on stream"), this.emit("stream", t)
            })))
        }))
    }
    _debug(...e) {
        this._doDebug && (e[0] = "[" + this._id + "] " + e[0])
    }
    on(e, t) {
        const r = this._map;
        r.has(e) || r.set(e, new Set), r.get(e).add(t)
    }
    off(e, t) {
        const r = this._map,
            i = r.get(e);
        i && (i.delete(t), 0 === i.size && r.delete(e))
    }
    once(e, t) {
        const r = (...i) => {
            this.off(e, r), t(...i)
        };
        this.on(e, r)
    }
    emit(e, ...t) {
        const r = this._map;
        if (r.has(e))
            for (const i of r.get(e)) try {
                i(...t)
            } catch (e) {
                console.error(e)
            }
    }
}
Do.WEBRTC_SUPPORT = !!Uo(), Do.config = {
    iceServers: [{
        urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
    }],
    sdpSemantics: "unified-plan"
}, Do.channelConfig = {};
const Fo = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
    Wo = (e, t, r) => {
        const i = new Do({
                initiator: e,
                trickle: t,
                config: r
            }),
            n = e => i.__earlyDataBuffer.push(e);
        return i.on(Xo.data, n), i.__earlyDataBuffer = [], i.__drainEarlyData = e => {
            i.off(Xo.data, n), i.__earlyDataBuffer.forEach(e), delete i.__earlyDataBuffer, delete i.__drainEarlyData
        }, i
    },
    qo = "Trystero",
    $o = Array(20).fill().map((() => Fo[Math.floor(62 * Math.random())])).join("");
const {
    keys: Ho,
    values: Vo,
    entries: zo,
    fromEntries: Ko
} = Object, Yo = () => {}, Go = e => Error(`${qo}: ${e}`), Qo = e => (new TextEncoder).encode(e), Jo = e => (new TextDecoder).decode(e), Xo = Ko(["close", "connect", "data", "error", "signal", "stream", "track"].map((e => [e, e]))), Zo = Object.getPrototypeOf(Uint8Array), ea = 16369, ta = 255, ra = "bufferedamountlow";
var ia = (e, t) => {
    const r = {},
        i = {},
        n = {},
        s = {},
        o = {},
        a = {},
        l = (e, t) => (e ? Array.isArray(e) ? e : [e] : Ho(r)).flatMap((e => {
            const i = r[e];
            return i ? t(e, i) : (console.warn(`${qo}: no peer with id ${e} found`), [])
        })),
        h = e => {
            if (i[e]) return [i[e].send, i[e].setOnComplete, i[e].setOnProgress];
            if (!e) throw Go("action type argument is required");
            const t = Qo(e);
            if (t.byteLength > 12) throw Go(`action type string "${e}" (${t.byteLength}b) exceeds byte limit (12). Hint: choose a shorter name.`);
            const n = new Uint8Array(12);
            n.set(t);
            let s = 0;
            return i[e] = {
                onComplete: Yo,
                onProgress: Yo,
                setOnComplete(t) {
                    return i[e] = {
                        ...i[e],
                        onComplete: t
                    }
                },
                setOnProgress(t) {
                    return i[e] = {
                        ...i[e],
                        onProgress: t
                    }
                },
                async send(e, t, i, o) {
                    if (i && "object" != typeof i) throw Go("action meta argument must be an object");
                    if (void 0 === e) throw Go("action data cannot be undefined");
                    const a = "string" != typeof e,
                        h = e instanceof Blob,
                        u = h || e instanceof ArrayBuffer || e instanceof Zo;
                    if (i && !u) throw Go("action meta argument can only be used with binary data");
                    const c = u ? new Uint8Array(h ? await e.arrayBuffer() : e) : Qo(a ? JSON.stringify(e) : e),
                        f = i ? Qo(JSON.stringify(i)) : null,
                        d = Math.ceil(c.byteLength / ea) + (i ? 1 : 0) || 1,
                        p = Array(d).fill().map(((e, t) => {
                            const r = t === d - 1,
                                o = i && 0 === t,
                                l = new Uint8Array(15 + (o ? f.byteLength : r ? c.byteLength - ea * (d - (i ? 2 : 1)) : ea));
                            return l.set(n), l.set([s], 12), l.set([r | o << 1 | u << 2 | a << 3], 13), l.set([Math.round((t + 1) / d * ta)], 14), l.set(i ? o ? f : c.subarray((t - 1) * ea, t * ea) : c.subarray(t * ea, (t + 1) * ea), 15), l
                        }));
                    return s = s + 1 & ta, Promise.all(l(t, (async (e, t) => {
                        const n = t._channel;
                        let s = 0;
                        for (; s < d;) {
                            const a = p[s];
                            if (n.bufferedAmount > n.bufferedAmountLowThreshold && await new Promise((e => {
                                    const t = () => {
                                        n.removeEventListener(ra, t), e()
                                    };
                                    n.addEventListener(ra, t)
                                })), !r[e]) break;
                            t.send(a), s++, o && o(a[14] / ta, e, i)
                        }
                    })))
                }
            }, [i[e].send, i[e].setOnComplete, i[e].setOnProgress]
        },
        u = (e, t) => {
            const r = new Uint8Array(t),
                s = Jo(r.subarray(0, 12)).replaceAll("\0", ""),
                [o] = r.subarray(12, 13),
                [a] = r.subarray(13, 14),
                [l] = r.subarray(14, 15),
                h = r.subarray(15),
                u = !!(1 & a),
                c = !!(2 & a),
                f = !!(4 & a),
                d = !!(8 & a);
            if (!i[s]) throw Go(`received message with unregistered type (${s})`);
            n[e] || (n[e] = {}), n[e][s] || (n[e][s] = {});
            let p = n[e][s][o];
            if (p || (p = n[e][s][o] = {
                    chunks: []
                }), c ? p.meta = JSON.parse(Jo(h)) : p.chunks.push(h), i[s].onProgress(l / ta, e, p.meta), !u) return;
            const g = new Uint8Array(p.chunks.reduce(((e, t) => e + t.byteLength), 0));
            if (p.chunks.reduce(((e, t) => (g.set(t, e), e + t.byteLength)), 0), f) i[s].onComplete(g, e, p.meta);
            else {
                const t = Jo(g);
                i[s].onComplete(d ? JSON.parse(t) : t, e)
            }
            delete n[e][s][o]
        },
        [c, f] = h("__91n6__"),
        [d, p] = h("__90n6__"),
        [g, b] = h("__516n4L__"),
        [y, m] = h("__57r34m__"),
        [_, w] = h("__7r4ck__");
    let v = Yo,
        E = Yo,
        S = Yo,
        A = Yo;
    return e(((e, t) => {
        if (r[t]) return;
        const i = u.bind(null, t);
        r[t] = e, e.on(Xo.signal, (e => g(e, t))), e.on(Xo.close, (() => (e => {
            r[e] && (delete r[e], delete n[e], delete s[e], E(e))
        })(t))), e.on(Xo.data, i), e.on(Xo.stream, (e => {
            S(e, t, o[t]), delete o[t]
        })), e.on(Xo.track, ((e, r) => {
            A(e, r, t, a[t]), delete a[t]
        })), e.on(Xo.error, (e => {
            "ERR_DATA_CHANNEL" !== e.code && console.error(e)
        })), v(t), e.__drainEarlyData(i)
    })), f(((e, t) => d("", t))), p(((e, t) => {
        s[t] && (s[t](), delete s[t])
    })), b(((e, t) => {
        r[t] && r[t].signal(e)
    })), m(((e, t) => o[t] = e)), w(((e, t) => a[t] = e)), {
        makeAction: h,
        async ping(e) {
            if (!e) throw Go("ping() must be called with target peer ID");
            const t = Date.now();
            return c("", e), await new Promise((t => s[e] = t)), Date.now() - t
        },
        leave() {
            zo(r).forEach((([e, t]) => {
                t.destroy(), delete r[e]
            })), t()
        },
        getPeers() {
            return Ko(zo(r).map((([e, t]) => [e, t._pc])))
        },
        addStream(e, t, r) {
            return l(t, (async (t, i) => {
                r && await y(r, t), i.addStream(e)
            }))
        },
        removeStream(e, t) {
            return l(t, ((t, r) => r.removeStream(e)))
        },
        addTrack(e, t, r, i) {
            return l(r, (async (r, n) => {
                i && await _(i, r), n.addTrack(e, t)
            }))
        },
        removeTrack(e, t, r) {
            return l(r, ((r, i) => i.removeTrack(e, t)))
        },
        replaceTrack(e, t, r, i, n) {
            return l(i, (async (i, s) => {
                n && await _(n, i), s.replaceTrack(e, t, r)
            }))
        },
        onPeerJoin(e) {
            return v = e
        },
        onPeerLeave(e) {
            return E = e
        },
        onPeerStream(e) {
            return S = e
        },
        onPeerTrack(e) {
            return A = e
        }
    }
};
const na = "AES-CBC",
    sa = async (e, t) => {
        const r = crypto.getRandomValues(new Uint8Array(16));
        return JSON.stringify({
            c: (i = await crypto.subtle.encrypt({
                name: na,
                iv: r
            }, await e, Qo(t)), btoa(String.fromCharCode.apply(null, new Uint8Array(i)))),
            iv: [...r]
        });
        var i
    }, oa = async (e, t) => {
        const {
            c: r,
            iv: i
        } = JSON.parse(t);
        return Jo(await crypto.subtle.decrypt({
            name: na,
            iv: new Uint8Array(i)
        }, await e, (e => {
            const t = atob(e);
            return new Uint8Array(t.length).map(((e, r) => t.charCodeAt(r))).buffer
        })(r)))
    }, aa = {}, la = {}, ha = ["wss://test.mosquitto.org:8081", "wss://mqtt.eclipseprojects.io/mqtt", "wss://broker.emqx.io:8084/mqtt", "wss://broker.hivemq.com:8884/mqtt", "wss://public.mqtthq.com:8084/mqtt"], ua = ((e, t) => (r, i) => {
        if (e[i]) return e[i];
        if (!r) throw Go("requires a config map as the first argument");
        if (!r.appId && !r.firebaseApp) throw Go("config map is missing appId field");
        if (!i) throw Go("namespace argument required");
        return e[i] = t(r, i)
    })(aa, ((e, t) => {
        const r = e.password && (async (e, t) => crypto.subtle.importKey("raw", await crypto.subtle.digest({
                name: "SHA-256"
            }, Qo(`${e}:${t}`)), {
                name: na
            }, !1, ["encrypt", "decrypt"]))(e.password, t),
            i = `trystero/${e.appId}/${t}`,
            n = `${i}/${$o}`,
            s = {},
            o = {},
            a = {},
            l = ((e, t, r) => (e.relayUrls || t).slice(0, e.relayUrls ? e.relayUrls.length : e.relayRedundancy || r))(e, ha, 2),
            h = (e, t) => {
                c(e, t), a[t] = e
            },
            u = e => {
                delete s[e], delete o[e], delete a[e]
            };
        let c = Yo,
            f = [];
        return l.forEach((t => {
            const l = No.connect(t);
            la[t] = l.stream.socket, f.push(l), l.on("connect", (() => {
                l.subscribe(i), l.subscribe(n), l.publish(i, $o)
            })), l.on("message", (async (t, c) => {
                const f = c.toString();
                if (t === i) {
                    const t = f;
                    if (t !== $o && !a[t] && !o[t]) {
                        o[t] = !0;
                        const n = s[t] = Wo(!0, !1, e.rtcConfig);
                        n.once(Xo.signal, (async e => l.publish(`${i}/${t}`, JSON.stringify({
                            peerId: $o,
                            offer: r ? {
                                ...e,
                                sdp: await sa(r, e.sdp)
                            } : e
                        })))), n.once(Xo.connect, (() => h(n, t))), n.once(Xo.close, (() => u(t)))
                    }
                } else if (t === n) {
                    const {
                        peerId: t,
                        offer: n,
                        answer: o
                    } = JSON.parse(f);
                    if (s[t] && o) return void s[t].signal(r ? {
                        ...o,
                        sdp: await oa(r, o.sdp)
                    } : o);
                    if (!n) return;
                    const a = Wo(!1, !1, e.rtcConfig);
                    a.once(Xo.signal, (async e => l.publish(`${i}/${t}`, JSON.stringify({
                        peerId: $o,
                        answer: r ? {
                            ...e,
                            sdp: await sa(r, e.sdp)
                        } : e
                    })))), a.once(Xo.connect, (() => h(a, t))), a.once(Xo.close, (() => u(t))), a.signal(r ? {
                        ...n,
                        sdp: await oa(r, n.sdp)
                    } : n)
                }
            }))
        })), ia((e => c = e), (() => {
            delete aa[t], f.forEach((e => e.end()))
        }))
    })), ca = () => ({
        ...la
    });
window.getRelaySockets = ca
window.joinRoom = ua
window.selfId = $o