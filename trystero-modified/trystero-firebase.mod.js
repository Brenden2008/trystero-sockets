const e = !1,
    t = "${JSCORE_VERSION}",
    n = (e, t) => {
        if (!e) throw i(t)
    },
    i = e => Error("Firebase Database (" + t + ") INTERNAL ASSERT FAILED: " + e),
    s = e => {
        const t = [];
        let n = 0;
        for (let i = 0; i < e.length; i++) {
            let s = e.charCodeAt(i);
            s < 128 ? t[n++] = s : s < 2048 ? (t[n++] = s >> 6 | 192, t[n++] = 63 & s | 128) : 55296 == (64512 & s) && i + 1 < e.length && 56320 == (64512 & e.charCodeAt(i + 1)) ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++i)), t[n++] = s >> 18 | 240, t[n++] = s >> 12 & 63 | 128, t[n++] = s >> 6 & 63 | 128, t[n++] = 63 & s | 128) : (t[n++] = s >> 12 | 224, t[n++] = s >> 6 & 63 | 128, t[n++] = 63 & s | 128)
        }
        return t
    },
    r = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray(e, t) {
            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                i = [];
            for (let t = 0; t < e.length; t += 3) {
                const s = e[t],
                    r = t + 1 < e.length,
                    o = r ? e[t + 1] : 0,
                    a = t + 2 < e.length,
                    h = a ? e[t + 2] : 0,
                    l = s >> 2,
                    c = (3 & s) << 4 | o >> 4;
                let d = (15 & o) << 2 | h >> 6,
                    u = 63 & h;
                a || (u = 64, r || (d = 64)), i.push(n[l], n[c], n[d], n[u])
            }
            return i.join("")
        },
        encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(s(e), t)
        },
        decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : (e => {
                const t = [];
                let n = 0,
                    i = 0;
                for (; n < e.length;) {
                    const s = e[n++];
                    if (s < 128) t[i++] = String.fromCharCode(s);
                    else if (s > 191 && s < 224) {
                        const r = e[n++];
                        t[i++] = String.fromCharCode((31 & s) << 6 | 63 & r)
                    } else if (s > 239 && s < 365) {
                        const r = ((7 & s) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                        t[i++] = String.fromCharCode(55296 + (r >> 10)), t[i++] = String.fromCharCode(56320 + (1023 & r))
                    } else {
                        const r = e[n++],
                            o = e[n++];
                        t[i++] = String.fromCharCode((15 & s) << 12 | (63 & r) << 6 | 63 & o)
                    }
                }
                return t.join("")
            })(this.decodeStringToByteArray(e, t))
        },
        decodeStringToByteArray(e, t) {
            this.init_();
            const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                i = [];
            for (let t = 0; t < e.length;) {
                const s = n[e.charAt(t++)],
                    r = t < e.length ? n[e.charAt(t)] : 0;
                ++t;
                const a = t < e.length ? n[e.charAt(t)] : 64;
                ++t;
                const h = t < e.length ? n[e.charAt(t)] : 64;
                if (++t, null == s || null == r || null == a || null == h) throw new o;
                const l = s << 2 | r >> 4;
                if (i.push(l), 64 !== a) {
                    const e = r << 4 & 240 | a >> 2;
                    if (i.push(e), 64 !== h) {
                        const e = a << 6 & 192 | h;
                        i.push(e)
                    }
                }
            }
            return i
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
            }
        }
    };
class o extends Error {
    constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
    }
}
const a = e => {
        const t = s(e);
        return r.encodeByteArray(t, !0)
    },
    h = e => a(e).replace(/\./g, ""),
    l = e => {
        try {
            return r.decodeString(e, !0)
        } catch (e) {
            console.error("base64Decode failed: ", e)
        }
        return null
    };

function c(e) {
    return d(void 0, e)
}

function d(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
        case Date:
            return new Date(t.getTime());
        case Object:
            void 0 === e && (e = {});
            break;
        case Array:
            e = [];
            break;
        default:
            return t
    }
    for (const n in t) t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = d(e[n], t[n]));
    return e
}
const u = () => function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw Error("Unable to locate global object.")
    }().__FIREBASE_DEFAULTS__,
    _ = () => {
        try {
            return u() || (() => {
                if ("undefined" == typeof process || void 0 === process.env) return;
                const e = process.env.__FIREBASE_DEFAULTS__;
                return e ? JSON.parse(e) : void 0
            })() || (() => {
                if ("undefined" == typeof document) return;
                let e;
                try {
                    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                } catch (e) {
                    return
                }
                const t = e && l(e[1]);
                return t && JSON.parse(t)
            })()
        } catch (e) {
            return
        }
    },
    p = e => {
        const t = (e => {
            var t, n;
            return null === (n = null === (t = _()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
        })(e);
        if (!t) return;
        const n = t.lastIndexOf(":");
        if (n <= 0 || n + 1 === t.length) throw Error(`Invalid host ${t} with no separate hostname and port!`);
        const i = parseInt(t.substring(n + 1), 10);
        return "[" === t[0] ? [t.substring(1, n - 1), i] : [t.substring(0, n), i]
    },
    f = () => {
        var e;
        return null === (e = _()) || void 0 === e ? void 0 : e.config
    };
class g {
    constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((e, t) => {
            this.resolve = e, this.reject = t
        }))
    }
    wrapCallback(e) {
        return (t, n) => {
            t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
        }
    }
}

function m() {
    return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "")
}

function y() {
    return !0 === e
}
class v extends Error {
    constructor(e, t, n) {
        super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, v.prototype), Error.captureStackTrace && Error.captureStackTrace(this, C.prototype.create)
    }
}
class C {
    constructor(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n
    }
    create(e, ...t) {
        const n = t[0] || {},
            i = `${this.service}/${e}`,
            s = this.errors[e],
            r = s ? function(e, t) {
                return e.replace(b, ((e, n) => {
                    const i = t[n];
                    return null != i ? i + "" : `<${n}?>`
                }))
            }(s, n) : "Error",
            o = `${this.serviceName}: ${r} (${i}).`;
        return new v(i, o, n)
    }
}
const b = /\{\$([^}]+)}/g;

function w(e) {
    return JSON.parse(e)
}

function E(e) {
    return JSON.stringify(e)
}
const T = e => {
    let t = {},
        n = {},
        i = {},
        s = "";
    try {
        const r = e.split(".");
        t = w(l(r[0]) || ""), n = w(l(r[1]) || ""), s = r[2], i = n.d || {}, delete n.d
    } catch (e) {}
    return {
        header: t,
        claims: n,
        data: i,
        signature: s
    }
};

function I(e, t) {
    return {}.hasOwnProperty.call(e, t)
}

function S(e, t) {
    return {}.hasOwnProperty.call(e, t) ? e[t] : void 0
}

function k(e) {
    for (const t in e)
        if ({}.hasOwnProperty.call(e, t)) return !1;
    return !0
}

function R(e, t, n) {
    const i = {};
    for (const s in e)({}).hasOwnProperty.call(e, s) && (i[s] = t.call(n, e[s], s, e));
    return i
}

function N(e, t) {
    if (e === t) return !0;
    const n = Object.keys(e),
        i = Object.keys(t);
    for (const s of n) {
        if (!i.includes(s)) return !1;
        const n = e[s],
            r = t[s];
        if (P(n) && P(r)) {
            if (!N(n, r)) return !1
        } else if (n !== r) return !1
    }
    for (const e of i)
        if (!n.includes(e)) return !1;
    return !0
}

function P(e) {
    return null !== e && "object" == typeof e
}
class D {
    constructor() {
        this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
        for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
        this.reset()
    }
    reset() {
        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
    }
    compress_(e, t) {
        t || (t = 0);
        const n = this.W_;
        if ("string" == typeof e)
            for (let i = 0; i < 16; i++) n[i] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
        else
            for (let i = 0; i < 16; i++) n[i] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
        for (let e = 16; e < 80; e++) {
            const t = n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16];
            n[e] = 4294967295 & (t << 1 | t >>> 31)
        }
        let i, s, r = this.chain_[0],
            o = this.chain_[1],
            a = this.chain_[2],
            h = this.chain_[3],
            l = this.chain_[4];
        for (let e = 0; e < 80; e++) {
            e < 40 ? e < 20 ? (i = h ^ o & (a ^ h), s = 1518500249) : (i = o ^ a ^ h, s = 1859775393) : e < 60 ? (i = o & a | h & (o | a), s = 2400959708) : (i = o ^ a ^ h, s = 3395469782);
            const t = (r << 5 | r >>> 27) + i + l + s + n[e] & 4294967295;
            l = h, h = a, a = 4294967295 & (o << 30 | o >>> 2), o = r, r = t
        }
        this.chain_[0] = this.chain_[0] + r & 4294967295, this.chain_[1] = this.chain_[1] + o & 4294967295, this.chain_[2] = this.chain_[2] + a & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295
    }
    update(e, t) {
        if (null == e) return;
        void 0 === t && (t = e.length);
        const n = t - this.blockSize;
        let i = 0;
        const s = this.buf_;
        let r = this.inbuf_;
        for (; i < t;) {
            if (0 === r)
                for (; i <= n;) this.compress_(e, i), i += this.blockSize;
            if ("string" == typeof e) {
                for (; i < t;)
                    if (s[r] = e.charCodeAt(i), ++r, ++i, r === this.blockSize) {
                        this.compress_(s), r = 0;
                        break
                    }
            } else
                for (; i < t;)
                    if (s[r] = e[i], ++r, ++i, r === this.blockSize) {
                        this.compress_(s), r = 0;
                        break
                    }
        }
        this.inbuf_ = r, this.total_ += t
    }
    digest() {
        const e = [];
        let t = 8 * this.total_;
        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        for (let e = this.blockSize - 1; e >= 56; e--) this.buf_[e] = 255 & t, t /= 256;
        this.compress_(this.buf_);
        let n = 0;
        for (let t = 0; t < 5; t++)
            for (let i = 24; i >= 0; i -= 8) e[n] = this.chain_[t] >> i & 255, ++n;
        return e
    }
}

function x(e, t) {
    return `${e} failed: ${t} argument `
}
const A = e => {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
        const i = e.charCodeAt(n);
        i < 128 ? t++ : i < 2048 ? t += 2 : i >= 55296 && i <= 56319 ? (t += 4, n++) : t += 3
    }
    return t
};

function O(e) {
    return e && e._delegate ? e._delegate : e
}
class L {
    constructor(e, t, n) {
        this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e, this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e, this
    }
    setServiceProps(e) {
        return this.serviceProps = e, this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e, this
    }
}
const M = "[DEFAULT]";
class F {
    constructor(e, t) {
        this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }
    get(e) {
        const t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
            const e = new g;
            if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                const n = this.getOrInitializeService({
                    instanceIdentifier: t
                });
                n && e.resolve(n)
            } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise
    }
    getImmediate(e) {
        var t;
        const n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
            i = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
        if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
            if (i) return null;
            throw Error(`Service ${this.name} is not available`)
        }
        try {
            return this.getOrInitializeService({
                instanceIdentifier: n
            })
        } catch (e) {
            if (i) return null;
            throw e
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e, this.shouldAutoInitialize()) {
            if (function(e) {
                    return "EAGER" === e.instantiationMode
                }(e)) try {
                this.getOrInitializeService({
                    instanceIdentifier: M
                })
            } catch (e) {}
            for (const [e, t] of this.instancesDeferred.entries()) {
                const n = this.normalizeInstanceIdentifier(e);
                try {
                    const e = this.getOrInitializeService({
                        instanceIdentifier: n
                    });
                    t.resolve(e)
                } catch (e) {}
            }
        }
    }
    clearInstance(e = M) {
        this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
    }
    async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
    }
    isComponentSet() {
        return null != this.component
    }
    isInitialized(e = M) {
        return this.instances.has(e)
    }
    getOptions(e = M) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
        const {
            options: t = {}
        } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const i = this.getOrInitializeService({
            instanceIdentifier: n,
            options: t
        });
        for (const [e, t] of this.instancesDeferred.entries()) {
            n === this.normalizeInstanceIdentifier(e) && t.resolve(i)
        }
        return i
    }
    onInit(e, t) {
        var n;
        const i = this.normalizeInstanceIdentifier(t),
            s = null !== (n = this.onInitCallbacks.get(i)) && void 0 !== n ? n : new Set;
        s.add(e), this.onInitCallbacks.set(i, s);
        const r = this.instances.get(i);
        return r && e(r, i), () => {
            s.delete(e)
        }
    }
    invokeOnInitCallbacks(e, t) {
        const n = this.onInitCallbacks.get(t);
        if (n)
            for (const i of n) try {
                i(e, t)
            } catch (e) {}
    }
    getOrInitializeService({
        instanceIdentifier: e,
        options: t = {}
    }) {
        let n = this.instances.get(e);
        if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                instanceIdentifier: (i = e, i === M ? void 0 : i),
                options: t
            }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, e, n)
        } catch (e) {}
        var i;
        return n || null
    }
    normalizeInstanceIdentifier(e = M) {
        return this.component ? this.component.multipleInstances ? e : M : e
    }
    shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
    }
}
class q {
    constructor(e) {
        this.name = e, this.providers = new Map
    }
    addComponent(e) {
        const t = this.getProvider(e.name);
        if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
        t.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        const t = new F(e, this);
        return this.providers.set(e, t), t
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
var U;
(e => {
    e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
})(U || (U = {}));
const W = {
        debug: U.DEBUG,
        verbose: U.VERBOSE,
        info: U.INFO,
        warn: U.WARN,
        error: U.ERROR,
        silent: U.SILENT
    },
    B = U.INFO,
    j = {
        [U.DEBUG]: "log",
        [U.VERBOSE]: "log",
        [U.INFO]: "info",
        [U.WARN]: "warn",
        [U.ERROR]: "error"
    },
    H = (e, t, ...n) => {
        if (t < e.logLevel) return;
        const i = (new Date).toISOString(),
            s = j[t];
        if (!s) throw Error(`Attempted to log a message with an invalid logType (value: ${t})`);
        console[s](`[${i}]  ${e.name}:`, ...n)
    };
class z {
    constructor(e) {
        this.name = e, this._logLevel = B, this._logHandler = H, this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(e) {
        if (!(e in U)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
    }
    setLogLevel(e) {
        this._logLevel = "string" == typeof e ? W[e] : e
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(e) {
        if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(e) {
        this._userLogHandler = e
    }
    debug(...e) {
        this._userLogHandler && this._userLogHandler(this, U.DEBUG, ...e), this._logHandler(this, U.DEBUG, ...e)
    }
    log(...e) {
        this._userLogHandler && this._userLogHandler(this, U.VERBOSE, ...e), this._logHandler(this, U.VERBOSE, ...e)
    }
    info(...e) {
        this._userLogHandler && this._userLogHandler(this, U.INFO, ...e), this._logHandler(this, U.INFO, ...e)
    }
    warn(...e) {
        this._userLogHandler && this._userLogHandler(this, U.WARN, ...e), this._logHandler(this, U.WARN, ...e)
    }
    error(...e) {
        this._userLogHandler && this._userLogHandler(this, U.ERROR, ...e), this._logHandler(this, U.ERROR, ...e)
    }
}
const V = (e, t) => t.some((t => e instanceof t));
let $, Y;
const K = new WeakMap,
    G = new WeakMap,
    Q = new WeakMap,
    J = new WeakMap,
    X = new WeakMap;
let Z = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if ("done" === t) return G.get(e);
            if ("objectStoreNames" === t) return e.objectStoreNames || Q.get(e);
            if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return ne(e[t])
    },
    set: (e, t, n) => (e[t] = n, !0),
    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
};

function ee(e) {
    return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Y || (Y = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
        return e.apply(ie(this), t), ne(K.get(this))
    } : function(...t) {
        return ne(e.apply(ie(this), t))
    } : function(t, ...n) {
        const i = e.call(ie(this), t, ...n);
        return Q.set(i, t.sort ? t.sort() : [t]), ne(i)
    }
}

function te(e) {
    return "function" == typeof e ? ee(e) : (e instanceof IDBTransaction && function(e) {
        if (G.has(e)) return;
        const t = new Promise(((t, n) => {
            const i = () => {
                    e.removeEventListener("complete", s), e.removeEventListener("error", r), e.removeEventListener("abort", r)
                },
                s = () => {
                    t(), i()
                },
                r = () => {
                    n(e.error || new DOMException("AbortError", "AbortError")), i()
                };
            e.addEventListener("complete", s), e.addEventListener("error", r), e.addEventListener("abort", r)
        }));
        G.set(e, t)
    }(e), V(e, $ || ($ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, Z) : e)
}

function ne(e) {
    if (e instanceof IDBRequest) return function(e) {
        const t = new Promise(((t, n) => {
            const i = () => {
                    e.removeEventListener("success", s), e.removeEventListener("error", r)
                },
                s = () => {
                    t(ne(e.result)), i()
                },
                r = () => {
                    n(e.error), i()
                };
            e.addEventListener("success", s), e.addEventListener("error", r)
        }));
        return t.then((t => {
            t instanceof IDBCursor && K.set(t, e)
        })).catch((() => {})), X.set(t, e), t
    }(e);
    if (J.has(e)) return J.get(e);
    const t = te(e);
    return t !== e && (J.set(e, t), X.set(t, e)), t
}
const ie = e => X.get(e);
const se = ["get", "getKey", "getAll", "getAllKeys", "count"],
    re = ["put", "add", "delete", "clear"],
    oe = new Map;

function ae(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
    if (oe.get(t)) return oe.get(t);
    const n = t.replace(/FromIndex$/, ""),
        i = t !== n,
        s = re.includes(n);
    if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || !s && !se.includes(n)) return;
    const r = async function(e, ...t) {
        const r = this.transaction(e, s ? "readwrite" : "readonly");
        let o = r.store;
        return i && (o = o.index(t.shift())), (await Promise.all([o[n](...t), s && r.done]))[0]
    };
    return oe.set(t, r), r
}
Z = (e => ({
    ...e,
    get: (t, n, i) => ae(t, n) || e.get(t, n, i),
    has: (t, n) => !!ae(t, n) || e.has(t, n)
}))(Z);
class he {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map((e => {
            if (function(e) {
                    const t = e.getComponent();
                    return "VERSION" === (null == t ? void 0 : t.type)
                }(e)) {
                const t = e.getImmediate();
                return `${t.library}/${t.version}`
            }
            return null
        })).filter((e => e)).join(" ")
    }
}
const le = "@firebase/app",
    ce = "0.9.27",
    de = new z("@firebase/app"),
    ue = "[DEFAULT]",
    _e = {
        [le]: "fire-core",
        "@firebase/app-compat": "fire-core-compat",
        "@firebase/analytics": "fire-analytics",
        "@firebase/analytics-compat": "fire-analytics-compat",
        "@firebase/app-check": "fire-app-check",
        "@firebase/app-check-compat": "fire-app-check-compat",
        "@firebase/auth": "fire-auth",
        "@firebase/auth-compat": "fire-auth-compat",
        "@firebase/database": "fire-rtdb",
        "@firebase/database-compat": "fire-rtdb-compat",
        "@firebase/functions": "fire-fn",
        "@firebase/functions-compat": "fire-fn-compat",
        "@firebase/installations": "fire-iid",
        "@firebase/installations-compat": "fire-iid-compat",
        "@firebase/messaging": "fire-fcm",
        "@firebase/messaging-compat": "fire-fcm-compat",
        "@firebase/performance": "fire-perf",
        "@firebase/performance-compat": "fire-perf-compat",
        "@firebase/remote-config": "fire-rc",
        "@firebase/remote-config-compat": "fire-rc-compat",
        "@firebase/storage": "fire-gcs",
        "@firebase/storage-compat": "fire-gcs-compat",
        "@firebase/firestore": "fire-fst",
        "@firebase/firestore-compat": "fire-fst-compat",
        "fire-js": "fire-js",
        firebase: "fire-js-all"
    },
    pe = new Map,
    fe = new Map;

function ge(e, t) {
    try {
        e.container.addComponent(t)
    } catch (n) {
        de.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
}

function me(e) {
    const t = e.name;
    if (fe.has(t)) return de.debug(`There were multiple attempts to register component ${t}.`), !1;
    fe.set(t, e);
    for (const t of pe.values()) ge(t, e);
    return !0
}
const ye = new C("app", "Firebase", {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
});
class ve {
    constructor(e, t, n) {
        this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new L("app", (() => this), "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(), this._name
    }
    get options() {
        return this.checkDestroyed(), this._options
    }
    get config() {
        return this.checkDestroyed(), this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted) throw ye.create("app-deleted", {
            appName: this._name
        })
    }
}

function Ce(e, t = {}) {
    let n = e;
    if ("object" != typeof t) {
        t = {
            name: t
        }
    }
    const i = Object.assign({
            name: ue,
            automaticDataCollectionEnabled: !1
        }, t),
        s = i.name;
    if ("string" != typeof s || !s) throw ye.create("bad-app-name", {
        appName: s + ""
    });
    if (n || (n = f()), !n) throw ye.create("no-options");
    const r = pe.get(s);
    if (r) {
        if (N(n, r.options) && N(i, r.config)) return r;
        throw ye.create("duplicate-app", {
            appName: s
        })
    }
    const o = new q(s);
    for (const e of fe.values()) o.addComponent(e);
    const a = new ve(n, i, o);
    return pe.set(s, a), a
}

function be(e, t, n) {
    var i;
    let s = null !== (i = _e[e]) && void 0 !== i ? i : e;
    n && (s += "-" + n);
    const r = s.match(/\s|\//),
        o = t.match(/\s|\//);
    if (r || o) {
        const e = [`Unable to register library "${s}" with version "${t}":`];
        return r && e.push(`library name "${s}" contains illegal characters (whitespace or "/")`), r && o && e.push("and"), o && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void de.warn(e.join(" "))
    }
    me(new L(s + "-version", (() => ({
        library: s,
        version: t
    })), "VERSION"))
}
const we = "firebase-heartbeat-database",
    Ee = 1,
    Te = "firebase-heartbeat-store";
let Ie = null;

function Se() {
    return Ie || (Ie = function(e, t, {
        blocked: n,
        upgrade: i,
        blocking: s,
        terminated: r
    } = {}) {
        const o = indexedDB.open(e, t),
            a = ne(o);
        return i && o.addEventListener("upgradeneeded", (e => {
            i(ne(o.result), e.oldVersion, e.newVersion, ne(o.transaction), e)
        })), n && o.addEventListener("blocked", (e => n(e.oldVersion, e.newVersion, e))), a.then((e => {
            r && e.addEventListener("close", (() => r())), s && e.addEventListener("versionchange", (e => s(e.oldVersion, e.newVersion, e)))
        })).catch((() => {})), a
    }(we, Ee, {
        upgrade(e, t) {
            if (0 === t) try {
                e.createObjectStore(Te)
            } catch (e) {
                console.warn(e)
            }
        }
    }).catch((e => {
        throw ye.create("idb-open", {
            originalErrorMessage: e.message
        })
    }))), Ie
}
async function ke(e, t) {
    try {
        const n = (await Se()).transaction(Te, "readwrite"),
            i = n.objectStore(Te);
        await i.put(t, Re(e)), await n.done
    } catch (e) {
        if (e instanceof v) de.warn(e.message);
        else {
            const t = ye.create("idb-set", {
                originalErrorMessage: null == e ? void 0 : e.message
            });
            de.warn(t.message)
        }
    }
}

function Re(e) {
    return `${e.name}!${e.options.appId}`
}
class Ne {
    constructor(e) {
        this.container = e, this._heartbeatsCache = null;
        const t = this.container.getProvider("app").getImmediate();
        this._storage = new De(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
    }
    async triggerHeartbeat() {
        var e, t;
        const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
            i = Pe();
        if ((null != (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || (this._heartbeatsCache = await this._heartbeatsCachePromise, null != (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats))) && this._heartbeatsCache.lastSentHeartbeatDate !== i && !this._heartbeatsCache.heartbeats.some((e => e.date === i))) return this._heartbeatsCache.heartbeats.push({
            date: i,
            agent: n
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
            const t = new Date(e.date).valueOf();
            return Date.now() - t <= 2592e6
        })), this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        var e;
        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length) return "";
        const t = Pe(),
            {
                heartbeatsToSend: n,
                unsentEntries: i
            } = function(e, t = 1024) {
                const n = [];
                let i = e.slice();
                for (const s of e) {
                    const e = n.find((e => e.agent === s.agent));
                    if (e) {
                        if (e.dates.push(s.date), xe(n) > t) {
                            e.dates.pop();
                            break
                        }
                    } else if (n.push({
                            agent: s.agent,
                            dates: [s.date]
                        }), xe(n) > t) {
                        n.pop();
                        break
                    }
                    i = i.slice(1)
                }
                return {
                    heartbeatsToSend: n,
                    unsentEntries: i
                }
            }(this._heartbeatsCache.heartbeats),
            s = h(JSON.stringify({
                version: 2,
                heartbeats: n
            }));
        return this._heartbeatsCache.lastSentHeartbeatDate = t, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s
    }
}

function Pe() {
    return (new Date).toISOString().substring(0, 10)
}
class De {
    constructor(e) {
        this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return !! function() {
            try {
                return "object" == typeof indexedDB
            } catch (e) {
                return !1
            }
        }() && new Promise(((e, t) => {
            try {
                let n = !0;
                const i = "validate-browser-context-for-indexeddb-analytics-module",
                    s = self.indexedDB.open(i);
                s.onsuccess = () => {
                    s.result.close(), n || self.indexedDB.deleteDatabase(i), e(!0)
                }, s.onupgradeneeded = () => {
                    n = !1
                }, s.onerror = () => {
                    var e;
                    t((null === (e = s.error) || void 0 === e ? void 0 : e.message) || "")
                }
            } catch (e) {
                t(e)
            }
        })).then((() => !0)).catch((() => !1))
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const e = await async function(e) {
                try {
                    const t = (await Se()).transaction(Te),
                        n = await t.objectStore(Te).get(Re(e));
                    return await t.done, n
                } catch (e) {
                    if (e instanceof v) de.warn(e.message);
                    else {
                        const t = ye.create("idb-get", {
                            originalErrorMessage: null == e ? void 0 : e.message
                        });
                        de.warn(t.message)
                    }
                }
            }(this.app);
            return (null == e ? void 0 : e.heartbeats) ? e : {
                heartbeats: []
            }
        }
        return {
            heartbeats: []
        }
    }
    async overwrite(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const n = await this.read();
            return ke(this.app, {
                lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                heartbeats: e.heartbeats
            })
        }
    }
    async add(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const n = await this.read();
            return ke(this.app, {
                lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                heartbeats: [...n.heartbeats, ...e.heartbeats]
            })
        }
    }
}

function xe(e) {
    return h(JSON.stringify({
        version: 2,
        heartbeats: e
    })).length
}
var Ae;
Ae = "", me(new L("platform-logger", (e => new he(e)), "PRIVATE")), me(new L("heartbeat", (e => new Ne(e)), "PRIVATE")), be(le, ce, Ae), be(le, ce, "esm2017"), be("fire-js", "");
be("firebase", "10.8.0", "app");
const Oe = "@firebase/database",
    Le = "1.0.3";
let Me = "";
class Fe {
    constructor(e) {
        this.domStorage_ = e, this.prefix_ = "firebase:"
    }
    set(e, t) {
        null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), E(t))
    }
    get(e) {
        const t = this.domStorage_.getItem(this.prefixedName_(e));
        return null == t ? null : w(t)
    }
    remove(e) {
        this.domStorage_.removeItem(this.prefixedName_(e))
    }
    prefixedName_(e) {
        return this.prefix_ + e
    }
    toString() {
        return this.domStorage_.toString()
    }
}
class qe {
    constructor() {
        this.cache_ = {}, this.isInMemoryStorage = !0
    }
    set(e, t) {
        null == t ? delete this.cache_[e] : this.cache_[e] = t
    }
    get(e) {
        return I(this.cache_, e) ? this.cache_[e] : null
    }
    remove(e) {
        delete this.cache_[e]
    }
}
const Ue = e => {
        try {
            if ("undefined" != typeof window && void 0 !== window[e]) {
                const t = window[e];
                return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new Fe(t)
            }
        } catch (e) {}
        return new qe
    },
    We = Ue("localStorage"),
    Be = Ue("sessionStorage"),
    je = new z("@firebase/database"),
    He = (() => {
        let e = 1;
        return () => e++
    })(),
    ze = e => {
        const t = (e => {
                const t = [];
                let i = 0;
                for (let s = 0; s < e.length; s++) {
                    let r = e.charCodeAt(s);
                    if (r >= 55296 && r <= 56319) {
                        const t = r - 55296;
                        s++, n(s < e.length, "Surrogate pair missing trail surrogate."), r = 65536 + (t << 10) + (e.charCodeAt(s) - 56320)
                    }
                    r < 128 ? t[i++] = r : r < 2048 ? (t[i++] = r >> 6 | 192, t[i++] = 63 & r | 128) : r < 65536 ? (t[i++] = r >> 12 | 224, t[i++] = r >> 6 & 63 | 128, t[i++] = 63 & r | 128) : (t[i++] = r >> 18 | 240, t[i++] = r >> 12 & 63 | 128, t[i++] = r >> 6 & 63 | 128, t[i++] = 63 & r | 128)
                }
                return t
            })(e),
            i = new D;
        i.update(t);
        const s = i.digest();
        return r.encodeByteArray(s)
    },
    Ve = (...e) => {
        let t = "";
        for (let n = 0; n < e.length; n++) {
            const i = e[n];
            Array.isArray(i) || i && "object" == typeof i && "number" == typeof i.length ? t += Ve.apply(null, i) : t += "object" == typeof i ? E(i) : i, t += " "
        }
        return t
    };
let $e = null,
    Ye = !0;
const Ke = (...e) => {
        var t, i;
        if (!0 === Ye && (Ye = !1, null === $e && !0 === Be.get("logging_enabled") && (t = !0, n(!i || !0 === t || !1 === t, "Can't turn on custom loggers persistently."), !0 === t ? (je.logLevel = U.VERBOSE, $e = je.log.bind(je), i && Be.set("logging_enabled", !0)) : "function" == typeof t ? $e = t : ($e = null, Be.remove("logging_enabled")))), $e) {
            const t = Ve.apply(null, e);
            $e(t)
        }
    },
    Ge = e => (...t) => {
        Ke(e, ...t)
    },
    Qe = (...e) => {
        const t = "FIREBASE INTERNAL ERROR: " + Ve(...e);
        je.error(t)
    },
    Je = (...e) => {
        const t = "FIREBASE FATAL ERROR: " + Ve(...e);
        throw je.error(t), Error(t)
    },
    Xe = (...e) => {
        const t = "FIREBASE WARNING: " + Ve(...e);
        je.warn(t)
    },
    Ze = e => "number" == typeof e && (e != e || e === 1 / 0 || e === -1 / 0),
    et = "[MIN_NAME]",
    tt = "[MAX_NAME]",
    nt = (e, t) => {
        if (e === t) return 0;
        if (e === et || t === tt) return -1;
        if (t === et || e === tt) return 1;
        {
            const n = ct(e),
                i = ct(t);
            return null !== n ? null !== i ? n - i == 0 ? e.length - t.length : n - i : -1 : null !== i ? 1 : e < t ? -1 : 1
        }
    },
    it = (e, t) => e === t ? 0 : e < t ? -1 : 1,
    st = (e, t) => {
        if (t && e in t) return t[e];
        throw Error("Missing required key (" + e + ") in object: " + E(t))
    },
    rt = e => {
        if ("object" != typeof e || null === e) return E(e);
        const t = [];
        for (const n in e) t.push(n);
        t.sort();
        let n = "{";
        for (let i = 0; i < t.length; i++) 0 !== i && (n += ","), n += E(t[i]), n += ":", n += rt(e[t[i]]);
        return n += "}", n
    },
    ot = (e, t) => {
        const n = e.length;
        if (n <= t) return [e];
        const i = [];
        for (let s = 0; s < n; s += t) s + t > n ? i.push(e.substring(s, n)) : i.push(e.substring(s, s + t));
        return i
    };

function at(e, t) {
    for (const n in e) e.hasOwnProperty(n) && t(n, e[n])
}
const ht = e => {
    n(!Ze(e), "Invalid JSON number");
    const t = 1023;
    let i, s, r, o, a;
    0 === e ? (s = 0, r = 0, i = 1 / e == -1 / 0 ? 1 : 0) : (i = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (o = Math.min(Math.floor(Math.log(e) / Math.LN2), t), s = o + t, r = Math.round(e * Math.pow(2, 52 - o) - Math.pow(2, 52))) : (s = 0, r = Math.round(e / 5e-324)));
    const h = [];
    for (a = 52; a; a -= 1) h.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
    for (a = 11; a; a -= 1) h.push(s % 2 ? 1 : 0), s = Math.floor(s / 2);
    h.push(i ? 1 : 0), h.reverse();
    const l = h.join("");
    let c = "";
    for (a = 0; a < 64; a += 8) {
        let e = parseInt(l.substr(a, 8), 2).toString(16);
        1 === e.length && (e = "0" + e), c += e
    }
    return c.toLowerCase()
};
const lt = RegExp("^-?(0*)\\d{1,10}$"),
    ct = e => {
        if (lt.test(e)) {
            const t = Number(e);
            if (t >= -2147483648 && t <= 2147483647) return t
        }
        return null
    },
    dt = e => {
        try {
            e()
        } catch (e) {
            setTimeout((() => {
                const t = e.stack || "";
                throw Xe("Exception was thrown by user callback.", t), e
            }), 0)
        }
    },
    ut = (e, t) => {
        const n = setTimeout(e, t);
        return "number" == typeof n && "undefined" != typeof Deno && Deno.unrefTimer ? Deno.unrefTimer(n) : "object" == typeof n && n.unref && n.unref(), n
    };
class _t {
    constructor(e, t) {
        this.appName_ = e, this.appCheckProvider = t, this.appCheck = null == t ? void 0 : t.getImmediate({
            optional: !0
        }), this.appCheck || null == t || t.get().then((e => this.appCheck = e))
    }
    getToken(e) {
        return this.appCheck ? this.appCheck.getToken(e) : new Promise(((t, n) => {
            setTimeout((() => {
                this.appCheck ? this.getToken(e).then(t, n) : t(null)
            }), 0)
        }))
    }
    addTokenChangeListener(e) {
        var t;
        null === (t = this.appCheckProvider) || void 0 === t || t.get().then((t => t.addTokenListener(e)))
    }
    notifyForInvalidToken() {
        Xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)
    }
}
class pt {
    constructor(e, t, n) {
        this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = n, this.auth_ = null, this.auth_ = n.getImmediate({
            optional: !0
        }), this.auth_ || n.onInit((e => this.auth_ = e))
    }
    getToken(e) {
        return this.auth_ ? this.auth_.getToken(e).catch((e => e && "auth/token-not-initialized" === e.code ? (Ke("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e))) : new Promise(((t, n) => {
            setTimeout((() => {
                this.auth_ ? this.getToken(e).then(t, n) : t(null)
            }), 0)
        }))
    }
    addTokenChangeListener(e) {
        this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then((t => t.addAuthTokenListener(e)))
    }
    removeTokenChangeListener(e) {
        this.authProvider_.get().then((t => t.removeAuthTokenListener(e)))
    }
    notifyForInvalidToken() {
        let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
        "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', Xe(e)
    }
}
class ft {
    constructor(e) {
        this.accessToken = e
    }
    getToken(e) {
        return Promise.resolve({
            accessToken: this.accessToken
        })
    }
    addTokenChangeListener(e) {
        e(this.accessToken)
    }
    removeTokenChangeListener(e) {}
    notifyForInvalidToken() {}
}
ft.OWNER = "owner";
const gt = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
    mt = "ac",
    yt = "websocket",
    vt = "long_polling";
class Ct {
    constructor(e, t, n, i, s = !1, r = "", o = !1, a = !1) {
        this.secure = t, this.namespace = n, this.webSocketOnly = i, this.nodeAdmin = s, this.persistenceKey = r, this.includeNamespaceInQueryParams = o, this.isUsingEmulator = a, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = We.get("host:" + e) || this._host
    }
    isCacheableHost() {
        return "s-" === this.internalHost.substr(0, 2)
    }
    isCustomHost() {
        return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain
    }
    get host() {
        return this._host
    }
    set host(e) {
        e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && We.set("host:" + this._host, this.internalHost))
    }
    toString() {
        let e = this.toURLString();
        return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
    }
    toURLString() {
        const e = this.secure ? "https://" : "http://",
            t = this.includeNamespaceInQueryParams ? "?ns=" + this.namespace : "";
        return `${e}${this.host}/${t}`
    }
}

function bt(e, t, i) {
    let s;
    if (n("string" == typeof t, "typeof type must == string"), n("object" == typeof i, "typeof params must == object"), t === yt) s = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
    else {
        if (t !== vt) throw Error("Unknown connection type: " + t);
        s = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?"
    }(function(e) {
        return e.host !== e.internalHost || e.isCustomHost() || e.includeNamespaceInQueryParams
    })(e) && (i.ns = e.namespace);
    const r = [];
    return at(i, ((e, t) => {
        r.push(e + "=" + t)
    })), s + r.join("&")
}
class wt {
    constructor() {
        this.counters_ = {}
    }
    incrementCounter(e, t = 1) {
        I(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
    }
    get() {
        return c(this.counters_)
    }
}
const Et = {},
    Tt = {};

function It(e) {
    const t = e.toString();
    return Et[t] || (Et[t] = new wt), Et[t]
}
class St {
    constructor(e) {
        this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
    }
    closeAfter(e, t) {
        this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
    }
    handleResponse(e, t) {
        for (this.pendingResponses[e] = t; this.pendingResponses[this.currentResponseNum];) {
            const e = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for (let t = 0; t < e.length; ++t) e[t] && dt((() => {
                this.onMessage_(e[t])
            }));
            if (this.currentResponseNum === this.closeAfterResponse) {
                this.onClose && (this.onClose(), this.onClose = null);
                break
            }
            this.currentResponseNum++
        }
    }
}
const kt = "start";
class Rt {
    constructor(e, t, n, i, s, r, o) {
        this.connId = e, this.repoInfo = t, this.applicationId = n, this.appCheckToken = i, this.authToken = s, this.transportSessionId = r, this.lastSessionId = o, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = Ge(e), this.stats_ = It(t), this.urlFn = e => (this.appCheckToken && (e[mt] = this.appCheckToken), bt(t, vt, e))
    }
    open(e, t) {
        this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new St(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout((() => {
            this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null
        }), 3e4), (e => {
            if ("complete" === document.readyState) e();
            else {
                let t = !1;
                const n = () => {
                    document.body ? t || (t = !0, e()) : setTimeout(n, 10)
                };
                document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", (() => {
                    "complete" === document.readyState && n()
                })), window.attachEvent("onload", n))
            }
        })((() => {
            if (this.isClosed_) return;
            this.scriptTagHolder = new Nt(((...e) => {
                const [t, n, i, s, r] = e;
                if (this.incrementIncomingBytes_(e), this.scriptTagHolder)
                    if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, t === kt) this.id = n, this.password = i;
                    else {
                        if ("close" !== t) throw Error("Unrecognized command received: " + t);
                        n ? (this.scriptTagHolder.sendNewPolls = !1, this.myPacketOrderer.closeAfter(n, (() => {
                            this.onClosed_()
                        }))) : this.onClosed_()
                    }
            }), ((...e) => {
                const [t, n] = e;
                this.incrementIncomingBytes_(e), this.myPacketOrderer.handleResponse(t, n)
            }), (() => {
                this.onClosed_()
            }), this.urlFn);
            const e = {};
            e[kt] = "t", e.ser = Math.floor(1e8 * Math.random()), this.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = this.scriptTagHolder.uniqueCallbackIdentifier), e.v = "5", this.transportSessionId && (e.s = this.transportSessionId), this.lastSessionId && (e.ls = this.lastSessionId), this.applicationId && (e.p = this.applicationId), this.appCheckToken && (e[mt] = this.appCheckToken), "undefined" != typeof location && location.hostname && gt.test(location.hostname) && (e.r = "f");
            const t = this.urlFn(e);
            this.log_("Connecting via long-poll to " + t), this.scriptTagHolder.addTag(t, (() => {}))
        }))
    }
    start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
    }
    static forceAllow() {
        Rt.forceAllow_ = !0
    }
    static forceDisallow() {
        Rt.forceDisallow_ = !0
    }
    static isAvailable() {
        return !!Rt.forceAllow_ || !(Rt.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.UI)
    }
    markConnectionHealthy() {}
    shutdown_() {
        this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
    }
    close() {
        this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
    }
    send(e) {
        const t = E(e);
        this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
        const n = a(t),
            i = ot(n, 1840);
        for (let e = 0; e < i.length; e++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[e]), this.curSegmentNum++
    }
    addDisconnectPingFrame(e, t) {
        this.myDisconnFrame = document.createElement("iframe");
        const n = {
            dframe: "t"
        };
        n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
    }
    incrementIncomingBytes_(e) {
        const t = E(e).length;
        this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
    }
}
class Nt {
    constructor(e, t, n, i) {
        this.onDisconnect = n, this.urlFn = i, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0;
        {
            this.uniqueCallbackIdentifier = He(), window["pLPCommand" + this.uniqueCallbackIdentifier] = e, window["pRTLPCB" + this.uniqueCallbackIdentifier] = t, this.myIFrame = Nt.createIFrame_();
            let n = "";
            if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, 11)) {
                n = '<script>document.domain="' + document.domain + '";<\/script>'
            }
            const i = "<html><body>" + n + "</body></html>";
            try {
                this.myIFrame.doc.open(), this.myIFrame.doc.write(i), this.myIFrame.doc.close()
            } catch (e) {
                Ke("frame writing exception"), e.stack && Ke(e.stack), Ke(e)
            }
        }
    }
    static createIFrame_() {
        const e = document.createElement("iframe");
        if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        document.body.appendChild(e);
        try {
            e.contentWindow.document || Ke("No IE domain setting required")
        } catch (t) {
            const n = document.domain;
            e.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())"
        }
        return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
    }
    close() {
        this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.textContent = "", setTimeout((() => {
            null !== this.myIFrame && (document.body.removeChild(this.myIFrame), this.myIFrame = null)
        }), 0));
        const e = this.onDisconnect;
        e && (this.onDisconnect = null, e())
    }
    startLongPoll(e, t) {
        for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
    }
    newRequest_() {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            this.currentSerial++;
            const e = {};
            e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
            let t = this.urlFn(e),
                n = "",
                i = 0;
            for (; this.pendingSegs.length > 0;) {
                if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
                {
                    const e = this.pendingSegs.shift();
                    n = n + "&seg" + i + "=" + e.seg + "&ts" + i + "=" + e.ts + "&d" + i + "=" + e.d, i++
                }
            }
            return t += n, this.addLongPollTag_(t, this.currentSerial), !0
        }
        return !1
    }
    enqueueSegment(e, t, n) {
        this.pendingSegs.push({
            seg: e,
            ts: t,
            d: n
        }), this.alive && this.newRequest_()
    }
    addLongPollTag_(e, t) {
        this.outstandingRequests.add(t);
        const n = () => {
                this.outstandingRequests.delete(t), this.newRequest_()
            },
            i = setTimeout(n, 25e3);
        this.addTag(e, (() => {
            clearTimeout(i), n()
        }))
    }
    addTag(e, t) {
        setTimeout((() => {
            try {
                if (!this.sendNewPolls) return;
                const n = this.myIFrame.doc.createElement("script");
                n.type = "text/javascript", n.async = !0, n.src = e, n.onload = n.onreadystatechange = () => {
                    const e = n.readyState;
                    e && "loaded" !== e && "complete" !== e || (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), t())
                }, n.onerror = () => {
                    Ke("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close()
                }, this.myIFrame.doc.body.appendChild(n)
            } catch (e) {}
        }), 1)
    }
}
let Pt = null;
"undefined" != typeof MozWebSocket ? Pt = MozWebSocket : "undefined" != typeof WebSocket && (Pt = WebSocket);
class Dt {
    constructor(e, t, n, i, s, r, o) {
        this.connId = e, this.applicationId = n, this.appCheckToken = i, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = Ge(this.connId), this.stats_ = It(t), this.connURL = Dt.connectionURL_(t, r, o, i, n), this.nodeAdmin = t.nodeAdmin
    }
    static connectionURL_(e, t, n, i, s) {
        const r = {
            v: "5"
        };
        return "undefined" != typeof location && location.hostname && gt.test(location.hostname) && (r.r = "f"), t && (r.s = t), n && (r.ls = n), i && (r[mt] = i), s && (r.p = s), bt(e, yt, r)
    }
    open(e, t) {
        this.onDisconnect = t, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, We.set("previous_websocket_failure", !0);
        try {
            let e;
            y(), this.mySock = new Pt(this.connURL, [], e)
        } catch (e) {
            this.log_("Error instantiating WebSocket.");
            const t = e.message || e.data;
            return t && this.log_(t), void this.onClosed_()
        }
        this.mySock.onopen = () => {
            this.log_("Websocket connected."), this.everConnected_ = !0
        }, this.mySock.onclose = () => {
            this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_()
        }, this.mySock.onmessage = e => {
            this.handleIncomingFrame(e)
        }, this.mySock.onerror = e => {
            this.log_("WebSocket error.  Closing connection.");
            const t = e.message || e.data;
            t && this.log_(t), this.onClosed_()
        }
    }
    start() {}
    static forceDisallow() {
        Dt.forceDisallow_ = !0
    }
    static isAvailable() {
        let e = !1;
        if ("undefined" != typeof navigator && navigator.userAgent) {
            const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
                n = navigator.userAgent.match(t);
            n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
        }
        return !e && null !== Pt && !Dt.forceDisallow_
    }
    static previouslyFailed() {
        return We.isInMemoryStorage || !0 === We.get("previous_websocket_failure")
    }
    markConnectionHealthy() {
        We.remove("previous_websocket_failure")
    }
    appendFrame_(e) {
        if (this.frames.push(e), this.frames.length === this.totalFrames) {
            const e = this.frames.join("");
            this.frames = null;
            const t = w(e);
            this.onMessage(t)
        }
    }
    handleNewFrameCount_(e) {
        this.totalFrames = e, this.frames = []
    }
    extractFrameCount_(e) {
        if (n(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
            const t = Number(e);
            if (!isNaN(t)) return this.handleNewFrameCount_(t), null
        }
        return this.handleNewFrameCount_(1), e
    }
    handleIncomingFrame(e) {
        if (null === this.mySock) return;
        const t = e.data;
        if (this.bytesReceived += t.length, this.stats_.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(t);
        else {
            const e = this.extractFrameCount_(t);
            null !== e && this.appendFrame_(e)
        }
    }
    send(e) {
        this.resetKeepAlive();
        const t = E(e);
        this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
        const n = ot(t, 16384);
        n.length > 1 && this.sendString_(n.length + "");
        for (let e = 0; e < n.length; e++) this.sendString_(n[e])
    }
    shutdown_() {
        this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
    }
    close() {
        this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
    }
    resetKeepAlive() {
        clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval((() => {
            this.mySock && this.sendString_("0"), this.resetKeepAlive()
        }), 45e3)
    }
    sendString_(e) {
        try {
            this.mySock.send(e)
        } catch (e) {
            this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
        }
    }
}
Dt.responsesRequiredToBeHealthy = 2, Dt.healthyTimeout = 3e4;
class xt {
    constructor(e) {
        this.initTransports_(e)
    }
    static get ALL_TRANSPORTS() {
        return [Rt, Dt]
    }
    static get IS_TRANSPORT_INITIALIZED() {
        return this.globalTransportInitialized_
    }
    initTransports_(e) {
        const t = Dt && Dt.isAvailable();
        let n = t && !Dt.previouslyFailed();
        if (e.webSocketOnly && (t || Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), n = !0), n) this.transports_ = [Dt];
        else {
            const e = this.transports_ = [];
            for (const t of xt.ALL_TRANSPORTS) t && t.isAvailable() && e.push(t);
            xt.globalTransportInitialized_ = !0
        }
    }
    initialTransport() {
        if (this.transports_.length > 0) return this.transports_[0];
        throw Error("No transports available")
    }
    upgradeTransport() {
        return this.transports_.length > 1 ? this.transports_[1] : null
    }
}
xt.globalTransportInitialized_ = !1;
class At {
    constructor(e, t, n, i, s, r, o, a, h, l) {
        this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.appCheckToken_ = i, this.authToken_ = s, this.onMessage_ = r, this.onReady_ = o, this.onDisconnect_ = a, this.onKill_ = h, this.lastSessionId = l, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = Ge("c:" + this.id + ":"), this.transportManager_ = new xt(t), this.log_("Connection created"), this.start_()
    }
    start_() {
        const e = this.transportManager_.initialTransport();
        this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        const t = this.connReceiver_(this.conn_),
            n = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout((() => {
            this.conn_ && this.conn_.open(t, n)
        }), 0);
        const i = e.healthyTimeout || 0;
        i > 0 && (this.healthyTimeout_ = ut((() => {
            this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > 102400 ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > 10240 ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()))
        }), Math.floor(i)))
    }
    nextTransportId_() {
        return "c:" + this.id + ":" + this.connectionCount++
    }
    disconnReceiver_(e) {
        return t => {
            e === this.conn_ ? this.onConnectionLost_(t) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."), this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
        }
    }
    connReceiver_(e) {
        return t => {
            2 !== this.state_ && (e === this.rx_ ? this.onPrimaryMessageReceived_(t) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(t) : this.log_("message on old connection"))
        }
    }
    sendRequest(e) {
        const t = {
            t: "d",
            d: e
        };
        this.sendData_(t)
    }
    tryCleanupConnection() {
        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
    }
    onSecondaryControl_(e) {
        if ("t" in e) {
            const t = e.t;
            "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" === t ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === t && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
        }
    }
    onSecondaryMessageReceived_(e) {
        const t = st("t", e),
            n = st("d", e);
        if ("c" === t) this.onSecondaryControl_(n);
        else {
            if ("d" !== t) throw Error("Unknown protocol layer: " + t);
            this.pendingDataMessages.push(n)
        }
    }
    upgradeIfSecondaryHealthy_() {
        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }
    proceedWithUpgrade_() {
        this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
            t: "c",
            d: {
                t: "a",
                d: {}
            }
        }), this.log_("Ending transmission on primary"), this.conn_.send({
            t: "c",
            d: {
                t: "n",
                d: {}
            }
        }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
    }
    onPrimaryMessageReceived_(e) {
        const t = st("t", e),
            n = st("d", e);
        "c" === t ? this.onControl_(n) : "d" === t && this.onDataMessage_(n)
    }
    onDataMessage_(e) {
        this.onPrimaryResponse_(), this.onMessage_(e)
    }
    onPrimaryResponse_() {
        this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
    }
    onControl_(e) {
        const t = st("t", e);
        if ("d" in e) {
            const n = e.d;
            if ("h" === t) {
                const e = Object.assign({}, n);
                this.repoInfo_.isUsingEmulator && (e.h = this.repoInfo_.host), this.onHandshake_(e)
            } else if ("n" === t) {
                this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                for (let e = 0; e < this.pendingDataMessages.length; ++e) this.onDataMessage_(this.pendingDataMessages[e]);
                this.pendingDataMessages = [], this.tryCleanupConnection()
            } else "s" === t ? this.onConnectionShutdown_(n) : "r" === t ? this.onReset_(n) : "e" === t ? Qe("Server Error: " + n) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : Qe("Unknown control packet command: " + t)
        }
    }
    onHandshake_(e) {
        const t = e.ts,
            n = e.v,
            i = e.h;
        this.sessionId = e.s, this.repoInfo_.host = i, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), "5" !== n && Xe("Protocol version mismatch detected"), this.tryStartUpgrade_())
    }
    tryStartUpgrade_() {
        const e = this.transportManager_.upgradeTransport();
        e && this.startUpgrade_(e)
    }
    startUpgrade_(e) {
        this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        const t = this.connReceiver_(this.secondaryConn_),
            n = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(t, n), ut((() => {
            this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close())
        }), 6e4)
    }
    onReset_(e) {
        this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
    }
    onConnectionEstablished_(e, t) {
        this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : ut((() => {
            this.sendPingOnPrimaryIfNecessary_()
        }), 5e3)
    }
    sendPingOnPrimaryIfNecessary_() {
        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }
    onSecondaryConnectionLost_() {
        const e = this.secondaryConn_;
        this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
    }
    onConnectionLost_(e) {
        this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (We.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
    }
    onConnectionShutdown_(e) {
        this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
    }
    sendData_(e) {
        if (1 !== this.state_) throw "Connection is not connected";
        this.tx_.send(e)
    }
    close() {
        2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
    }
    closeConnections_() {
        this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
    }
}
class Ot {
    put(e, t, n, i) {}
    merge(e, t, n, i) {}
    refreshAuthToken(e) {}
    refreshAppCheckToken(e) {}
    onDisconnectPut(e, t, n) {}
    onDisconnectMerge(e, t, n) {}
    onDisconnectCancel(e, t) {}
    reportStats(e) {}
}
class Lt {
    constructor(e) {
        this.allowedEvents_ = e, this.listeners_ = {}, n(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
    }
    trigger(e, ...t) {
        if (Array.isArray(this.listeners_[e])) {
            const n = [...this.listeners_[e]];
            for (let e = 0; e < n.length; e++) n[e].callback.apply(n[e].context, t)
        }
    }
    on(e, t, n) {
        this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
            callback: t,
            context: n
        });
        const i = this.getInitialEvent(e);
        i && t.apply(n, i)
    }
    off(e, t, n) {
        this.validateEventType_(e);
        const i = this.listeners_[e] || [];
        for (let e = 0; e < i.length; e++)
            if (i[e].callback === t && (!n || n === i[e].context)) return void i.splice(e, 1)
    }
    validateEventType_(e) {
        n(this.allowedEvents_.find((t => t === e)), "Unknown event: " + e)
    }
}
class Mt extends Lt {
    constructor() {
        super(["online"]), this.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || m() || (window.addEventListener("online", (() => {
            this.online_ || (this.online_ = !0, this.trigger("online", !0))
        }), !1), window.addEventListener("offline", (() => {
            this.online_ && (this.online_ = !1, this.trigger("online", !1))
        }), !1))
    }
    static getInstance() {
        return new Mt
    }
    getInitialEvent(e) {
        return n("online" === e, "Unknown event type: " + e), [this.online_]
    }
    currentlyOnline() {
        return this.online_
    }
}
const Ft = 32,
    qt = 768;
class Ut {
    constructor(e, t) {
        if (void 0 === t) {
            this.pieces_ = e.split("/");
            let t = 0;
            for (let e = 0; e < this.pieces_.length; e++) this.pieces_[e].length > 0 && (this.pieces_[t] = this.pieces_[e], t++);
            this.pieces_.length = t, this.pieceNum_ = 0
        } else this.pieces_ = e, this.pieceNum_ = t
    }
    toString() {
        let e = "";
        for (let t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
        return e || "/"
    }
}

function Wt() {
    return new Ut("")
}

function Bt(e) {
    return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_]
}

function jt(e) {
    return e.pieces_.length - e.pieceNum_
}

function Ht(e) {
    let t = e.pieceNum_;
    return t < e.pieces_.length && t++, new Ut(e.pieces_, t)
}

function zt(e) {
    return e.pieceNum_ < e.pieces_.length ? e.pieces_[e.pieces_.length - 1] : null
}

function Vt(e, t = 0) {
    return e.pieces_.slice(e.pieceNum_ + t)
}

function $t(e) {
    if (e.pieceNum_ >= e.pieces_.length) return null;
    const t = [];
    for (let n = e.pieceNum_; n < e.pieces_.length - 1; n++) t.push(e.pieces_[n]);
    return new Ut(t, 0)
}

function Yt(e, t) {
    const n = [];
    for (let t = e.pieceNum_; t < e.pieces_.length; t++) n.push(e.pieces_[t]);
    if (t instanceof Ut)
        for (let e = t.pieceNum_; e < t.pieces_.length; e++) n.push(t.pieces_[e]);
    else {
        const e = t.split("/");
        for (let t = 0; t < e.length; t++) e[t].length > 0 && n.push(e[t])
    }
    return new Ut(n, 0)
}

function Kt(e) {
    return e.pieceNum_ >= e.pieces_.length
}

function Gt(e, t) {
    const n = Bt(e),
        i = Bt(t);
    if (null === n) return t;
    if (n === i) return Gt(Ht(e), Ht(t));
    throw Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")")
}

function Qt(e, t) {
    const n = Vt(e, 0),
        i = Vt(t, 0);
    for (let e = 0; e < n.length && e < i.length; e++) {
        const t = nt(n[e], i[e]);
        if (0 !== t) return t
    }
    return n.length === i.length ? 0 : n.length < i.length ? -1 : 1
}

function Jt(e, t) {
    if (jt(e) !== jt(t)) return !1;
    for (let n = e.pieceNum_, i = t.pieceNum_; n <= e.pieces_.length; n++, i++)
        if (e.pieces_[n] !== t.pieces_[i]) return !1;
    return !0
}

function Xt(e, t) {
    let n = e.pieceNum_,
        i = t.pieceNum_;
    if (jt(e) > jt(t)) return !1;
    for (; n < e.pieces_.length;) {
        if (e.pieces_[n] !== t.pieces_[i]) return !1;
        ++n, ++i
    }
    return !0
}
class Zt {
    constructor(e, t) {
        this.errorPrefix_ = t, this.parts_ = Vt(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
        for (let e = 0; e < this.parts_.length; e++) this.byteLength_ += A(this.parts_[e]);
        en(this)
    }
}

function en(e) {
    if (e.byteLength_ > qt) throw Error(e.errorPrefix_ + "has a key path longer than " + qt + " bytes (" + e.byteLength_ + ").");
    if (e.parts_.length > Ft) throw Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Ft + ") or object contains a cycle " + tn(e))
}

function tn(e) {
    return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'"
}
class nn extends Lt {
    constructor() {
        let e, t;
        super(["visible"]), "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, t && document.addEventListener(t, (() => {
            const t = !document[e];
            t !== this.visible_ && (this.visible_ = t, this.trigger("visible", t))
        }), !1)
    }
    static getInstance() {
        return new nn
    }
    getInitialEvent(e) {
        return n("visible" === e, "Unknown event type: " + e), [this.visible_]
    }
}
const sn = 1e3;
class rn extends Ot {
    constructor(e, t, n, i, s, r, o, a) {
        if (super(), this.repoInfo_ = e, this.applicationId_ = t, this.onDataUpdate_ = n, this.onConnectStatus_ = i, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = r, this.appCheckTokenProvider_ = o, this.authOverride_ = a, this.id = rn.nextPersistentConnectionId_++, this.log_ = Ge("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = new Map, this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = sn, this.maxReconnectDelay_ = 3e5, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, a && !y()) throw Error("Auth override specified in options, but not supported on non Node.js platforms");
        nn.getInstance().on("visible", this.onVisible_, this), -1 === e.host.indexOf("fblocal") && Mt.getInstance().on("online", this.onOnline_, this)
    }
    sendRequest(e, t, i) {
        const s = ++this.requestNumber_,
            r = {
                r: s,
                a: e,
                b: t
            };
        this.log_(E(r)), n(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(r), i && (this.requestCBHash_[s] = i)
    }
    get(e) {
        this.initConnection_();
        const t = new g,
            n = {
                action: "g",
                request: {
                    p: e._path.toString(),
                    q: e._queryObject
                },
                onComplete(e) {
                    const n = e.d;
                    "ok" === e.s ? t.resolve(n) : t.reject(n)
                }
            };
        this.outstandingGets_.push(n), this.outstandingGetCount_++;
        const i = this.outstandingGets_.length - 1;
        return this.connected_ && this.sendGet_(i), t.promise
    }
    listen(e, t, i, s) {
        this.initConnection_();
        const r = e._queryIdentifier,
            o = e._path.toString();
        this.log_("Listen called for " + o + " " + r), this.listens.has(o) || this.listens.set(o, new Map), n(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), n(!this.listens.get(o).has(r), "listen() called twice for same path/queryId.");
        const a = {
            onComplete: s,
            hashFn: t,
            query: e,
            tag: i
        };
        this.listens.get(o).set(r, a), this.connected_ && this.sendListen_(a)
    }
    sendGet_(e) {
        const t = this.outstandingGets_[e];
        this.sendRequest("g", t.request, (n => {
            delete this.outstandingGets_[e], this.outstandingGetCount_--, 0 === this.outstandingGetCount_ && (this.outstandingGets_ = []), t.onComplete && t.onComplete(n)
        }))
    }
    sendListen_(e) {
        const t = e.query,
            n = t._path.toString(),
            i = t._queryIdentifier;
        this.log_("Listen on " + n + " for " + i);
        const s = {
            p: n
        };
        e.tag && (s.q = t._queryObject, s.t = e.tag), s.h = e.hashFn(), this.sendRequest("q", s, (s => {
            const r = s.d,
                o = s.s;
            rn.warnOnListenWarnings_(r, t);
            (this.listens.get(n) && this.listens.get(n).get(i)) === e && (this.log_("listen response", s), "ok" !== o && this.removeListen_(n, i), e.onComplete && e.onComplete(o, r))
        }))
    }
    static warnOnListenWarnings_(e, t) {
        if (e && "object" == typeof e && I(e, "w")) {
            const n = S(e, "w");
            if (Array.isArray(n) && ~n.indexOf("no_index")) {
                const e = '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
                    n = t._path.toString();
                Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ` + n + " to your security rules for better performance.")
            }
        }
    }
    refreshAuthToken(e) {
        this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, (() => {})), this.reduceReconnectDelayIfAdminCredential_(e)
    }
    reduceReconnectDelayIfAdminCredential_(e) {
        (e && 40 === e.length || (e => {
            const t = T(e).claims;
            return "object" == typeof t && !0 === t.admin
        })(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
    }
    refreshAppCheckToken(e) {
        this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, (() => {}))
    }
    tryAuth() {
        if (this.connected_ && this.authToken_) {
            const e = this.authToken_,
                t = (e => {
                    const t = T(e).claims;
                    return !!t && "object" == typeof t && t.hasOwnProperty("iat")
                })(e) ? "auth" : "gauth",
                n = {
                    cred: e
                };
            null === this.authOverride_ ? n.noauth = !0 : "object" == typeof this.authOverride_ && (n.authvar = this.authOverride_), this.sendRequest(t, n, (t => {
                const n = t.s,
                    i = t.d || "error";
                this.authToken_ === e && ("ok" === n ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(n, i))
            }))
        }
    }
    tryAppCheck() {
        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
            token: this.appCheckToken_
        }, (e => {
            const t = e.s,
                n = e.d || "error";
            "ok" === t ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(t, n)
        }))
    }
    unlisten(e, t) {
        const i = e._path.toString(),
            s = e._queryIdentifier;
        this.log_("Unlisten called for " + i + " " + s), n(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
        this.removeListen_(i, s) && this.connected_ && this.sendUnlisten_(i, s, e._queryObject, t)
    }
    sendUnlisten_(e, t, n, i) {
        this.log_("Unlisten on " + e + " for " + t);
        const s = {
            p: e
        };
        i && (s.q = n, s.t = i), this.sendRequest("n", s)
    }
    onDisconnectPut(e, t, n) {
        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "o",
            data: t,
            onComplete: n
        })
    }
    onDisconnectMerge(e, t, n) {
        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "om",
            data: t,
            onComplete: n
        })
    }
    onDisconnectCancel(e, t) {
        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "oc",
            data: null,
            onComplete: t
        })
    }
    sendOnDisconnect_(e, t, n, i) {
        const s = {
            p: t,
            d: n
        };
        this.log_("onDisconnect " + e, s), this.sendRequest(e, s, (e => {
            i && setTimeout((() => {
                i(e.s, e.d)
            }), 0)
        }))
    }
    put(e, t, n, i) {
        this.putInternal("p", e, t, n, i)
    }
    merge(e, t, n, i) {
        this.putInternal("m", e, t, n, i)
    }
    putInternal(e, t, n, i, s) {
        this.initConnection_();
        const r = {
            p: t,
            d: n
        };
        void 0 !== s && (r.h = s), this.outstandingPuts_.push({
            action: e,
            request: r,
            onComplete: i
        }), this.outstandingPutCount_++;
        const o = this.outstandingPuts_.length - 1;
        this.connected_ ? this.sendPut_(o) : this.log_("Buffering put: " + t)
    }
    sendPut_(e) {
        const t = this.outstandingPuts_[e].action,
            n = this.outstandingPuts_[e].request,
            i = this.outstandingPuts_[e].onComplete;
        this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(t, n, (n => {
            this.log_(t + " response", n), delete this.outstandingPuts_[e], this.outstandingPutCount_--, 0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []), i && i(n.s, n.d)
        }))
    }
    reportStats(e) {
        if (this.connected_) {
            const t = {
                c: e
            };
            this.log_("reportStats", t), this.sendRequest("s", t, (e => {
                if ("ok" !== e.s) {
                    const t = e.d;
                    this.log_("reportStats", "Error sending stats: " + t)
                }
            }))
        }
    }
    onDataMessage_(e) {
        if ("r" in e) {
            this.log_("from server: " + E(e));
            const t = e.r,
                n = this.requestCBHash_[t];
            n && (delete this.requestCBHash_[t], n(e.b))
        } else {
            if ("error" in e) throw "A server-side error has occurred: " + e.error;
            "a" in e && this.onDataPush_(e.a, e.b)
        }
    }
    onDataPush_(e, t) {
        this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) : "apc" === e ? this.onAppCheckRevoked_(t.s, t.d) : "sd" === e ? this.onSecurityDebugPacket_(t) : Qe("Unrecognized action received from server: " + E(e) + "\nAre you using the latest client?")
    }
    onReady_(e, t) {
        this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
    }
    scheduleConnect_(e) {
        n(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout((() => {
            this.establishConnectionTimer_ = null, this.establishConnection_()
        }), Math.floor(e))
    }
    initConnection_() {
        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
    }
    onVisible_(e) {
        e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = sn, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
    }
    onOnline_(e) {
        e ? (this.log_("Browser went online."), this.reconnectDelay_ = sn, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
    }
    onRealtimeDisconnect_() {
        if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
            if (this.visible_) {
                if (this.lastConnectionEstablishedTime_) {
                    (new Date).getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = sn), this.lastConnectionEstablishedTime_ = null
                }
            } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
            const e = (new Date).getTime() - this.lastConnectionAttemptTime_;
            let t = Math.max(0, this.reconnectDelay_ - e);
            t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
        }
        this.onConnectStatus_(!1)
    }
    async establishConnection_() {
        if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
            const e = this.onDataMessage_.bind(this),
                t = this.onReady_.bind(this),
                i = this.onRealtimeDisconnect_.bind(this),
                s = this.id + ":" + rn.nextConnectionId_++,
                r = this.lastSessionId;
            let o = !1,
                a = null;
            const h = () => {
                    a ? a.close() : (o = !0, i())
                },
                l = e => {
                    n(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(e)
                };
            this.realtime_ = {
                close: h,
                sendRequest: l
            };
            const c = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = !1;
            try {
                const [n, h] = await Promise.all([this.authTokenProvider_.getToken(c), this.appCheckTokenProvider_.getToken(c)]);
                o ? Ke("getToken() completed but was canceled") : (Ke("getToken() completed. Creating connection."), this.authToken_ = n && n.accessToken, this.appCheckToken_ = h && h.token, a = new At(s, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, e, t, i, (e => {
                    Xe(e + " (" + this.repoInfo_.toString() + ")"), this.interrupt("server_kill")
                }), r))
            } catch (e) {
                this.log_("Failed to get token: " + e), o || (this.repoInfo_.nodeAdmin && Xe(e), h())
            }
        }
    }
    interrupt(e) {
        Ke("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
    }
    resume(e) {
        Ke("Resuming connection for reason: " + e), delete this.interruptReasons_[e], k(this.interruptReasons_) && (this.reconnectDelay_ = sn, this.realtime_ || this.scheduleConnect_(0))
    }
    handleTimestamp_(e) {
        const t = e - (new Date).getTime();
        this.onServerInfoUpdate_({
            serverTimeOffset: t
        })
    }
    cancelSentTransactions_() {
        for (let e = 0; e < this.outstandingPuts_.length; e++) {
            const t = this.outstandingPuts_[e];
            t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--)
        }
        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
    }
    onListenRevoked_(e, t) {
        let n;
        n = t ? t.map((e => rt(e))).join("$") : "default";
        const i = this.removeListen_(e, n);
        i && i.onComplete && i.onComplete("permission_denied")
    }
    removeListen_(e, t) {
        const n = new Ut(e).toString();
        let i;
        if (this.listens.has(n)) {
            const e = this.listens.get(n);
            i = e.get(t), e.delete(t), 0 === e.size && this.listens.delete(n)
        } else i = void 0;
        return i
    }
    onAuthRevoked_(e, t) {
        Ke("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
    }
    onAppCheckRevoked_(e, t) {
        Ke("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= 3 && this.appCheckTokenProvider_.notifyForInvalidToken())
    }
    onSecurityDebugPacket_(e) {
        this.securityDebugCallback_ && this.securityDebugCallback_(e)
    }
    restoreState_() {
        this.tryAuth(), this.tryAppCheck();
        for (const e of this.listens.values())
            for (const t of e.values()) this.sendListen_(t);
        for (let e = 0; e < this.outstandingPuts_.length; e++) this.outstandingPuts_[e] && this.sendPut_(e);
        for (; this.onDisconnectRequestQueue_.length;) {
            const e = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
        }
        for (let e = 0; e < this.outstandingGets_.length; e++) this.outstandingGets_[e] && this.sendGet_(e)
    }
    sendConnectStats_() {
        const e = {};
        e["sdk.js." + Me.replace(/\./g, "-")] = 1, m() ? e["framework.cordova"] = 1 : "object" == typeof navigator && "ReactNative" === navigator.product && (e["framework.reactnative"] = 1), this.reportStats(e)
    }
    shouldReconnect_() {
        const e = Mt.getInstance().currentlyOnline();
        return k(this.interruptReasons_) && e
    }
}
rn.nextPersistentConnectionId_ = 0, rn.nextConnectionId_ = 0;
class on {
    constructor(e, t) {
        this.name = e, this.node = t
    }
    static Wrap(e, t) {
        return new on(e, t)
    }
}
class an {
    getCompare() {
        return this.compare.bind(this)
    }
    indexedValueChanged(e, t) {
        const n = new on(et, e),
            i = new on(et, t);
        return 0 !== this.compare(n, i)
    }
    minPost() {
        return on.MIN
    }
}
let hn;
class ln extends an {
    static get __EMPTY_NODE() {
        return hn
    }
    static set __EMPTY_NODE(e) {
        hn = e
    }
    compare(e, t) {
        return nt(e.name, t.name)
    }
    isDefinedOn(e) {
        throw i("KeyIndex.isDefinedOn not expected to be called.")
    }
    indexedValueChanged(e, t) {
        return !1
    }
    minPost() {
        return on.MIN
    }
    maxPost() {
        return new on(tt, hn)
    }
    makePost(e, t) {
        return n("string" == typeof e, "KeyIndex indexValue must always be a string."), new on(e, hn)
    }
    toString() {
        return ".key"
    }
}
const cn = new ln;
class dn {
    constructor(e, t, n, i, s = null) {
        this.isReverse_ = i, this.resultGenerator_ = s, this.nodeStack_ = [];
        let r = 1;
        for (; !e.isEmpty();)
            if (r = t ? n(e.key, t) : 1, i && (r *= -1), r < 0) e = this.isReverse_ ? e.left : e.right;
            else {
                if (0 === r) {
                    this.nodeStack_.push(e);
                    break
                }
                this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
            }
    }
    getNext() {
        if (0 === this.nodeStack_.length) return null;
        let e, t = this.nodeStack_.pop();
        if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                key: t.key,
                value: t.value
            }, this.isReverse_)
            for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
        else
            for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
        return e
    }
    hasNext() {
        return this.nodeStack_.length > 0
    }
    peek() {
        if (0 === this.nodeStack_.length) return null;
        const e = this.nodeStack_[this.nodeStack_.length - 1];
        return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
            key: e.key,
            value: e.value
        }
    }
}
class un {
    constructor(e, t, n, i, s) {
        this.key = e, this.value = t, this.color = null != n ? n : un.RED, this.left = null != i ? i : _n.EMPTY_NODE, this.right = null != s ? s : _n.EMPTY_NODE
    }
    copy(e, t, n, i, s) {
        return new un(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != i ? i : this.left, null != s ? s : this.right)
    }
    count() {
        return this.left.count() + 1 + this.right.count()
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(e) {
        return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
    }
    min_() {
        return this.left.isEmpty() ? this : this.left.min_()
    }
    minKey() {
        return this.min_().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(e, t, n) {
        let i = this;
        const s = n(e, i.key);
        return i = s < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === s ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n)), i.fixUp_()
    }
    removeMin_() {
        if (this.left.isEmpty()) return _n.EMPTY_NODE;
        let e = this;
        return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_()
    }
    remove(e, t) {
        let n, i;
        if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
        else {
            if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                if (n.right.isEmpty()) return _n.EMPTY_NODE;
                i = n.right.min_(), n = n.copy(i.key, i.value, null, null, n.right.removeMin_())
            }
            n = n.copy(null, null, null, null, n.right.remove(e, t))
        }
        return n.fixUp_()
    }
    isRed_() {
        return this.color
    }
    fixUp_() {
        let e = this;
        return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
    }
    moveRedLeft_() {
        let e = this.colorFlip_();
        return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()), e = e.rotateLeft_(), e = e.colorFlip_()), e
    }
    moveRedRight_() {
        let e = this.colorFlip_();
        return e.left.left.isRed_() && (e = e.rotateRight_(), e = e.colorFlip_()), e
    }
    rotateLeft_() {
        const e = this.copy(null, null, un.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null)
    }
    rotateRight_() {
        const e = this.copy(null, null, un.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e)
    }
    colorFlip_() {
        const e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, e, t)
    }
    checkMaxDepth_() {
        const e = this.check_();
        return Math.pow(2, e) <= this.count() + 1
    }
    check_() {
        if (this.isRed_() && this.left.isRed_()) throw Error("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.isRed_()) throw Error("Right child of (" + this.key + "," + this.value + ") is red");
        const e = this.left.check_();
        if (e !== this.right.check_()) throw Error("Black depths differ");
        return e + (this.isRed_() ? 0 : 1)
    }
}
un.RED = !0, un.BLACK = !1;
class _n {
    constructor(e, t = _n.EMPTY_NODE) {
        this.comparator_ = e, this.root_ = t
    }
    insert(e, t) {
        return new _n(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, un.BLACK, null, null))
    }
    remove(e) {
        return new _n(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, un.BLACK, null, null))
    }
    get(e) {
        let t, n = this.root_;
        for (; !n.isEmpty();) {
            if (t = this.comparator_(e, n.key), 0 === t) return n.value;
            t < 0 ? n = n.left : t > 0 && (n = n.right)
        }
        return null
    }
    getPredecessorKey(e) {
        let t, n = this.root_,
            i = null;
        for (; !n.isEmpty();) {
            if (t = this.comparator_(e, n.key), 0 === t) {
                if (n.left.isEmpty()) return i ? i.key : null;
                for (n = n.left; !n.right.isEmpty();) n = n.right;
                return n.key
            }
            t < 0 ? n = n.left : t > 0 && (i = n, n = n.right)
        }
        throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
    }
    isEmpty() {
        return this.root_.isEmpty()
    }
    count() {
        return this.root_.count()
    }
    minKey() {
        return this.root_.minKey()
    }
    maxKey() {
        return this.root_.maxKey()
    }
    inorderTraversal(e) {
        return this.root_.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.root_.reverseTraversal(e)
    }
    getIterator(e) {
        return new dn(this.root_, null, this.comparator_, !1, e)
    }
    getIteratorFrom(e, t) {
        return new dn(this.root_, e, this.comparator_, !1, t)
    }
    getReverseIteratorFrom(e, t) {
        return new dn(this.root_, e, this.comparator_, !0, t)
    }
    getReverseIterator(e) {
        return new dn(this.root_, null, this.comparator_, !0, e)
    }
}

function pn(e, t) {
    return nt(e.name, t.name)
}

function fn(e, t) {
    return nt(e, t)
}
let gn;
_n.EMPTY_NODE = new class {
    copy(e, t, n, i, s) {
        return this
    }
    insert(e, t, n) {
        return new un(e, t, null)
    }
    remove(e, t) {
        return this
    }
    count() {
        return 0
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(e) {
        return !1
    }
    reverseTraversal(e) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    check_() {
        return 0
    }
    isRed_() {
        return !1
    }
};
const mn = e => "number" == typeof e ? "number:" + ht(e) : "string:" + e,
    yn = e => {
        if (e.isLeafNode()) {
            const t = e.val();
            n("string" == typeof t || "number" == typeof t || "object" == typeof t && I(t, ".sv"), "Priority must be a string or number.")
        } else n(e === gn || e.isEmpty(), "priority of unexpected type.");
        n(e === gn || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
    };
let vn, Cn, bn;
class wn {
    constructor(e, t = wn.__childrenNodeConstructor.EMPTY_NODE) {
        this.value_ = e, this.priorityNode_ = t, this.lazyHash_ = null, n(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), yn(this.priorityNode_)
    }
    static set __childrenNodeConstructor(e) {
        vn = e
    }
    static get __childrenNodeConstructor() {
        return vn
    }
    isLeafNode() {
        return !0
    }
    getPriority() {
        return this.priorityNode_
    }
    updatePriority(e) {
        return new wn(this.value_, e)
    }
    getImmediateChild(e) {
        return ".priority" === e ? this.priorityNode_ : wn.__childrenNodeConstructor.EMPTY_NODE
    }
    getChild(e) {
        return Kt(e) ? this : ".priority" === Bt(e) ? this.priorityNode_ : wn.__childrenNodeConstructor.EMPTY_NODE
    }
    hasChild() {
        return !1
    }
    getPredecessorChildName(e, t) {
        return null
    }
    updateImmediateChild(e, t) {
        return ".priority" === e ? this.updatePriority(t) : t.isEmpty() && ".priority" !== e ? this : wn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_)
    }
    updateChild(e, t) {
        const i = Bt(e);
        return null === i ? t : t.isEmpty() && ".priority" !== i ? this : (n(".priority" !== i || 1 === jt(e), ".priority must be the last token in a path"), this.updateImmediateChild(i, wn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ht(e), t)))
    }
    isEmpty() {
        return !1
    }
    numChildren() {
        return 0
    }
    forEachChild(e, t) {
        return !1
    }
    val(e) {
        return e && !this.getPriority().isEmpty() ? {
            ".value": this.getValue(),
            ".priority": this.getPriority().val()
        } : this.getValue()
    }
    hash() {
        if (null === this.lazyHash_) {
            let e = "";
            this.priorityNode_.isEmpty() || (e += "priority:" + mn(this.priorityNode_.val()) + ":");
            const t = typeof this.value_;
            e += t + ":", e += "number" === t ? ht(this.value_) : this.value_, this.lazyHash_ = ze(e)
        }
        return this.lazyHash_
    }
    getValue() {
        return this.value_
    }
    compareTo(e) {
        return e === wn.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof wn.__childrenNodeConstructor ? -1 : (n(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e))
    }
    compareToLeafNode_(e) {
        const t = typeof e.value_,
            i = typeof this.value_,
            s = wn.VALUE_TYPE_ORDER.indexOf(t),
            r = wn.VALUE_TYPE_ORDER.indexOf(i);
        return n(s >= 0, "Unknown leaf type: " + t), n(r >= 0, "Unknown leaf type: " + i), s === r ? "object" === i ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : r - s
    }
    withIndex() {
        return this
    }
    isIndexed() {
        return !0
    }
    equals(e) {
        if (e === this) return !0;
        if (e.isLeafNode()) {
            const t = e;
            return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
        }
        return !1
    }
}
wn.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
const En = new class extends an {
    compare(e, t) {
        const n = e.node.getPriority(),
            i = t.node.getPriority(),
            s = n.compareTo(i);
        return 0 === s ? nt(e.name, t.name) : s
    }
    isDefinedOn(e) {
        return !e.getPriority().isEmpty()
    }
    indexedValueChanged(e, t) {
        return !e.getPriority().equals(t.getPriority())
    }
    minPost() {
        return on.MIN
    }
    maxPost() {
        return new on(tt, new wn("[PRIORITY-POST]", bn))
    }
    makePost(e, t) {
        const n = Cn(e);
        return new on(t, new wn("[PRIORITY-POST]", n))
    }
    toString() {
        return ".priority"
    }
};
class Tn {
    constructor(e) {
        this.count = parseInt(Math.log(e + 1) / .6931471805599453, 10), this.current_ = this.count - 1;
        const t = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
        var n;
        this.bits_ = e + 1 & t
    }
    nextBitIsOne() {
        const e = !(this.bits_ & 1 << this.current_);
        return this.current_--, e
    }
}
const In = (e, t, n, i) => {
    e.sort(t);
    const s = (t, i) => {
            const r = i - t;
            let o, a;
            if (0 === r) return null;
            if (1 === r) return o = e[t], a = n ? n(o) : o, new un(a, o.node, un.BLACK, null, null);
            {
                const h = parseInt(r / 2, 10) + t,
                    l = s(t, h),
                    c = s(h + 1, i);
                return o = e[h], a = n ? n(o) : o, new un(a, o.node, un.BLACK, l, c)
            }
        },
        r = (t => {
            let i = null,
                r = null,
                o = e.length;
            const a = (t, i) => {
                    const r = o - t,
                        a = o;
                    o -= t;
                    const l = s(r + 1, a),
                        c = e[r],
                        d = n ? n(c) : c;
                    h(new un(d, c.node, i, null, l))
                },
                h = e => {
                    i ? (i.left = e, i = e) : (r = e, i = e)
                };
            for (let e = 0; e < t.count; ++e) {
                const n = t.nextBitIsOne(),
                    i = Math.pow(2, t.count - (e + 1));
                n ? a(i, un.BLACK) : (a(i, un.BLACK), a(i, un.RED))
            }
            return r
        })(new Tn(e.length));
    return new _n(i || t, r)
};
let Sn;
const kn = {};
class Rn {
    constructor(e, t) {
        this.indexes_ = e, this.indexSet_ = t
    }
    static get Default() {
        return n(kn && En, "ChildrenNode.ts has not been loaded"), Sn = Sn || new Rn({
            ".priority": kn
        }, {
            ".priority": En
        }), Sn
    }
    get(e) {
        const t = S(this.indexes_, e);
        if (!t) throw Error("No index defined for " + e);
        return t instanceof _n ? t : null
    }
    hasIndex(e) {
        return I(this.indexSet_, e.toString())
    }
    addIndex(e, t) {
        n(e !== cn, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        const i = [];
        let s = !1;
        const r = t.getIterator(on.Wrap);
        let o, a = r.getNext();
        for (; a;) s = s || e.isDefinedOn(a.node), i.push(a), a = r.getNext();
        o = s ? In(i, e.getCompare()) : kn;
        const h = e.toString(),
            l = Object.assign({}, this.indexSet_);
        l[h] = e;
        const c = Object.assign({}, this.indexes_);
        return c[h] = o, new Rn(c, l)
    }
    addToIndexes(e, t) {
        const i = R(this.indexes_, ((i, s) => {
            const r = S(this.indexSet_, s);
            if (n(r, "Missing index implementation for " + s), i === kn) {
                if (r.isDefinedOn(e.node)) {
                    const n = [],
                        i = t.getIterator(on.Wrap);
                    let s = i.getNext();
                    for (; s;) s.name !== e.name && n.push(s), s = i.getNext();
                    return n.push(e), In(n, r.getCompare())
                }
                return kn
            } {
                const n = t.get(e.name);
                let s = i;
                return n && (s = s.remove(new on(e.name, n))), s.insert(e, e.node)
            }
        }));
        return new Rn(i, this.indexSet_)
    }
    removeFromIndexes(e, t) {
        const n = R(this.indexes_, (n => {
            if (n === kn) return n;
            {
                const i = t.get(e.name);
                return i ? n.remove(new on(e.name, i)) : n
            }
        }));
        return new Rn(n, this.indexSet_)
    }
}
let Nn;
class Pn {
    constructor(e, t, i) {
        this.children_ = e, this.priorityNode_ = t, this.indexMap_ = i, this.lazyHash_ = null, this.priorityNode_ && yn(this.priorityNode_), this.children_.isEmpty() && n(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
    }
    static get EMPTY_NODE() {
        return Nn || (Nn = new Pn(new _n(fn), null, Rn.Default))
    }
    isLeafNode() {
        return !1
    }
    getPriority() {
        return this.priorityNode_ || Nn
    }
    updatePriority(e) {
        return this.children_.isEmpty() ? this : new Pn(this.children_, e, this.indexMap_)
    }
    getImmediateChild(e) {
        if (".priority" === e) return this.getPriority();
        {
            const t = this.children_.get(e);
            return null === t ? Nn : t
        }
    }
    getChild(e) {
        const t = Bt(e);
        return null === t ? this : this.getImmediateChild(t).getChild(Ht(e))
    }
    hasChild(e) {
        return null !== this.children_.get(e)
    }
    updateImmediateChild(e, t) {
        if (n(t, "We should always be passing snapshot nodes"), ".priority" === e) return this.updatePriority(t);
        {
            const n = new on(e, t);
            let i, s;
            t.isEmpty() ? (i = this.children_.remove(e), s = this.indexMap_.removeFromIndexes(n, this.children_)) : (i = this.children_.insert(e, t), s = this.indexMap_.addToIndexes(n, this.children_));
            const r = i.isEmpty() ? Nn : this.priorityNode_;
            return new Pn(i, r, s)
        }
    }
    updateChild(e, t) {
        const i = Bt(e);
        if (null === i) return t;
        {
            n(".priority" !== Bt(e) || 1 === jt(e), ".priority must be the last token in a path");
            const s = this.getImmediateChild(i).updateChild(Ht(e), t);
            return this.updateImmediateChild(i, s)
        }
    }
    isEmpty() {
        return this.children_.isEmpty()
    }
    numChildren() {
        return this.children_.count()
    }
    val(e) {
        if (this.isEmpty()) return null;
        const t = {};
        let n = 0,
            i = 0,
            s = !0;
        if (this.forEachChild(En, ((r, o) => {
                t[r] = o.val(e), n++, s && Pn.INTEGER_REGEXP_.test(r) ? i = Math.max(i, Number(r)) : s = !1
            })), !e && s && i < 2 * n) {
            const e = [];
            for (const n in t) e[n] = t[n];
            return e
        }
        return e && !this.getPriority().isEmpty() && (t[".priority"] = this.getPriority().val()), t
    }
    hash() {
        if (null === this.lazyHash_) {
            let e = "";
            this.getPriority().isEmpty() || (e += "priority:" + mn(this.getPriority().val()) + ":"), this.forEachChild(En, ((t, n) => {
                const i = n.hash();
                "" !== i && (e += ":" + t + ":" + i)
            })), this.lazyHash_ = "" === e ? "" : ze(e)
        }
        return this.lazyHash_
    }
    getPredecessorChildName(e, t, n) {
        const i = this.resolveIndex_(n);
        if (i) {
            const n = i.getPredecessorKey(new on(e, t));
            return n ? n.name : null
        }
        return this.children_.getPredecessorKey(e)
    }
    getFirstChildName(e) {
        const t = this.resolveIndex_(e);
        if (t) {
            const e = t.minKey();
            return e && e.name
        }
        return this.children_.minKey()
    }
    getFirstChild(e) {
        const t = this.getFirstChildName(e);
        return t ? new on(t, this.children_.get(t)) : null
    }
    getLastChildName(e) {
        const t = this.resolveIndex_(e);
        if (t) {
            const e = t.maxKey();
            return e && e.name
        }
        return this.children_.maxKey()
    }
    getLastChild(e) {
        const t = this.getLastChildName(e);
        return t ? new on(t, this.children_.get(t)) : null
    }
    forEachChild(e, t) {
        const n = this.resolveIndex_(e);
        return n ? n.inorderTraversal((e => t(e.name, e.node))) : this.children_.inorderTraversal(t)
    }
    getIterator(e) {
        return this.getIteratorFrom(e.minPost(), e)
    }
    getIteratorFrom(e, t) {
        const n = this.resolveIndex_(t);
        if (n) return n.getIteratorFrom(e, (e => e));
        {
            const n = this.children_.getIteratorFrom(e.name, on.Wrap);
            let i = n.peek();
            for (; null != i && t.compare(i, e) < 0;) n.getNext(), i = n.peek();
            return n
        }
    }
    getReverseIterator(e) {
        return this.getReverseIteratorFrom(e.maxPost(), e)
    }
    getReverseIteratorFrom(e, t) {
        const n = this.resolveIndex_(t);
        if (n) return n.getReverseIteratorFrom(e, (e => e));
        {
            const n = this.children_.getReverseIteratorFrom(e.name, on.Wrap);
            let i = n.peek();
            for (; null != i && t.compare(i, e) > 0;) n.getNext(), i = n.peek();
            return n
        }
    }
    compareTo(e) {
        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === Dn ? -1 : 0
    }
    withIndex(e) {
        if (e === cn || this.indexMap_.hasIndex(e)) return this;
        {
            const t = this.indexMap_.addIndex(e, this.children_);
            return new Pn(this.children_, this.priorityNode_, t)
        }
    }
    isIndexed(e) {
        return e === cn || this.indexMap_.hasIndex(e)
    }
    equals(e) {
        if (e === this) return !0;
        if (e.isLeafNode()) return !1;
        {
            const t = e;
            if (this.getPriority().equals(t.getPriority())) {
                if (this.children_.count() === t.children_.count()) {
                    const e = this.getIterator(En),
                        n = t.getIterator(En);
                    let i = e.getNext(),
                        s = n.getNext();
                    for (; i && s;) {
                        if (i.name !== s.name || !i.node.equals(s.node)) return !1;
                        i = e.getNext(), s = n.getNext()
                    }
                    return null === i && null === s
                }
                return !1
            }
            return !1
        }
    }
    resolveIndex_(e) {
        return e === cn ? null : this.indexMap_.get(e.toString())
    }
}
Pn.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
const Dn = new class extends Pn {
    constructor() {
        super(new _n(fn), Pn.EMPTY_NODE, Rn.Default)
    }
    compareTo(e) {
        return e === this ? 0 : 1
    }
    equals(e) {
        return e === this
    }
    getPriority() {
        return this
    }
    getImmediateChild(e) {
        return Pn.EMPTY_NODE
    }
    isEmpty() {
        return !1
    }
};
Object.defineProperties(on, {
        MIN: {
            value: new on(et, Pn.EMPTY_NODE)
        },
        MAX: {
            value: new on(tt, Dn)
        }
    }), ln.__EMPTY_NODE = Pn.EMPTY_NODE, wn.__childrenNodeConstructor = Pn, gn = Dn,
    function(e) {
        bn = e
    }(Dn);
const xn = !0;

function An(e, t = null) {
    if (null === e) return Pn.EMPTY_NODE;
    if ("object" == typeof e && ".priority" in e && (t = e[".priority"]), n(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != typeof e || ".sv" in e) {
        return new wn(e, An(t))
    }
    if (e instanceof Array || !xn) {
        let n = Pn.EMPTY_NODE;
        return at(e, ((t, i) => {
            if (I(e, t) && "." !== t.substring(0, 1)) {
                const e = An(i);
                !e.isLeafNode() && e.isEmpty() || (n = n.updateImmediateChild(t, e))
            }
        })), n.updatePriority(An(t))
    } {
        const n = [];
        let i = !1;
        if (at(e, ((e, t) => {
                if ("." !== e.substring(0, 1)) {
                    const s = An(t);
                    s.isEmpty() || (i = i || !s.getPriority().isEmpty(), n.push(new on(e, s)))
                }
            })), 0 === n.length) return Pn.EMPTY_NODE;
        const s = In(n, pn, (e => e.name), fn);
        if (i) {
            const e = In(n, En.getCompare());
            return new Pn(s, An(t), new Rn({
                ".priority": e
            }, {
                ".priority": En
            }))
        }
        return new Pn(s, An(t), Rn.Default)
    }
}! function(e) {
    Cn = e
}(An);
class On extends an {
    constructor(e) {
        super(), this.indexPath_ = e, n(!Kt(e) && ".priority" !== Bt(e), "Can't create PathIndex with empty path or .priority key")
    }
    extractChild(e) {
        return e.getChild(this.indexPath_)
    }
    isDefinedOn(e) {
        return !e.getChild(this.indexPath_).isEmpty()
    }
    compare(e, t) {
        const n = this.extractChild(e.node),
            i = this.extractChild(t.node),
            s = n.compareTo(i);
        return 0 === s ? nt(e.name, t.name) : s
    }
    makePost(e, t) {
        const n = An(e),
            i = Pn.EMPTY_NODE.updateChild(this.indexPath_, n);
        return new on(t, i)
    }
    maxPost() {
        const e = Pn.EMPTY_NODE.updateChild(this.indexPath_, Dn);
        return new on(tt, e)
    }
    toString() {
        return Vt(this.indexPath_, 0).join("/")
    }
}
const Ln = new class extends an {
    compare(e, t) {
        const n = e.node.compareTo(t.node);
        return 0 === n ? nt(e.name, t.name) : n
    }
    isDefinedOn(e) {
        return !0
    }
    indexedValueChanged(e, t) {
        return !e.equals(t)
    }
    minPost() {
        return on.MIN
    }
    maxPost() {
        return on.MAX
    }
    makePost(e, t) {
        const n = An(e);
        return new on(t, n)
    }
    toString() {
        return ".value"
    }
};

function Mn(e) {
    return {
        type: "value",
        snapshotNode: e
    }
}

function Fn(e, t) {
    return {
        type: "child_added",
        snapshotNode: t,
        childName: e
    }
}

function qn(e, t) {
    return {
        type: "child_removed",
        snapshotNode: t,
        childName: e
    }
}

function Un(e, t, n) {
    return {
        type: "child_changed",
        snapshotNode: t,
        childName: e,
        oldSnap: n
    }
}
class Wn {
    constructor(e) {
        this.index_ = e
    }
    updateChild(e, t, i, s, r, o) {
        n(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        const a = e.getImmediateChild(t);
        return a.getChild(s).equals(i.getChild(s)) && a.isEmpty() === i.isEmpty() ? e : (null != o && (i.isEmpty() ? e.hasChild(t) ? o.trackChildChange(qn(t, a)) : n(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(Fn(t, i)) : o.trackChildChange(Un(t, i, a))), e.isLeafNode() && i.isEmpty() ? e : e.updateImmediateChild(t, i).withIndex(this.index_))
    }
    updateFullNode(e, t, n) {
        return null != n && (e.isLeafNode() || e.forEachChild(En, ((e, i) => {
            t.hasChild(e) || n.trackChildChange(qn(e, i))
        })), t.isLeafNode() || t.forEachChild(En, ((t, i) => {
            if (e.hasChild(t)) {
                const s = e.getImmediateChild(t);
                s.equals(i) || n.trackChildChange(Un(t, i, s))
            } else n.trackChildChange(Fn(t, i))
        }))), t.withIndex(this.index_)
    }
    updatePriority(e, t) {
        return e.isEmpty() ? Pn.EMPTY_NODE : e.updatePriority(t)
    }
    filtersNodes() {
        return !1
    }
    getIndexedFilter() {
        return this
    }
    getIndex() {
        return this.index_
    }
}
class Bn {
    constructor(e) {
        this.indexedFilter_ = new Wn(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = Bn.getStartPost_(e), this.endPost_ = Bn.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_
    }
    getStartPost() {
        return this.startPost_
    }
    getEndPost() {
        return this.endPost_
    }
    matches(e) {
        const t = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0,
            n = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
        return t && n
    }
    updateChild(e, t, n, i, s, r) {
        return this.matches(new on(t, n)) || (n = Pn.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, i, s, r)
    }
    updateFullNode(e, t, n) {
        t.isLeafNode() && (t = Pn.EMPTY_NODE);
        let i = t.withIndex(this.index_);
        i = i.updatePriority(Pn.EMPTY_NODE);
        const s = this;
        return t.forEachChild(En, ((e, t) => {
            s.matches(new on(e, t)) || (i = i.updateImmediateChild(e, Pn.EMPTY_NODE))
        })), this.indexedFilter_.updateFullNode(e, i, n)
    }
    updatePriority(e, t) {
        return e
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.indexedFilter_
    }
    getIndex() {
        return this.index_
    }
    static getStartPost_(e) {
        if (e.hasStart()) {
            const t = e.getIndexStartName();
            return e.getIndex().makePost(e.getIndexStartValue(), t)
        }
        return e.getIndex().minPost()
    }
    static getEndPost_(e) {
        if (e.hasEnd()) {
            const t = e.getIndexEndName();
            return e.getIndex().makePost(e.getIndexEndValue(), t)
        }
        return e.getIndex().maxPost()
    }
}
class jn {
    constructor(e) {
        this.withinDirectionalStart = e => this.reverse_ ? this.withinEndPost(e) : this.withinStartPost(e), this.withinDirectionalEnd = e => this.reverse_ ? this.withinStartPost(e) : this.withinEndPost(e), this.withinStartPost = e => {
            const t = this.index_.compare(this.rangedFilter_.getStartPost(), e);
            return this.startIsInclusive_ ? t <= 0 : t < 0
        }, this.withinEndPost = e => {
            const t = this.index_.compare(e, this.rangedFilter_.getEndPost());
            return this.endIsInclusive_ ? t <= 0 : t < 0
        }, this.rangedFilter_ = new Bn(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_
    }
    updateChild(e, t, n, i, s, r) {
        return this.rangedFilter_.matches(new on(t, n)) || (n = Pn.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, i, s, r) : this.fullLimitUpdateChild_(e, t, n, s, r)
    }
    updateFullNode(e, t, n) {
        let i;
        if (t.isLeafNode() || t.isEmpty()) i = Pn.EMPTY_NODE.withIndex(this.index_);
        else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
            let e;
            i = Pn.EMPTY_NODE.withIndex(this.index_), e = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            let n = 0;
            for (; e.hasNext() && n < this.limit_;) {
                const t = e.getNext();
                if (this.withinDirectionalStart(t)) {
                    if (!this.withinDirectionalEnd(t)) break;
                    i = i.updateImmediateChild(t.name, t.node), n++
                }
            }
        } else {
            let e;
            i = t.withIndex(this.index_), i = i.updatePriority(Pn.EMPTY_NODE), e = this.reverse_ ? i.getReverseIterator(this.index_) : i.getIterator(this.index_);
            let n = 0;
            for (; e.hasNext();) {
                const t = e.getNext();
                n < this.limit_ && this.withinDirectionalStart(t) && this.withinDirectionalEnd(t) ? n++ : i = i.updateImmediateChild(t.name, Pn.EMPTY_NODE)
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, n)
    }
    updatePriority(e, t) {
        return e
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter()
    }
    getIndex() {
        return this.index_
    }
    fullLimitUpdateChild_(e, t, i, s, r) {
        let o;
        if (this.reverse_) {
            const e = this.index_.getCompare();
            o = (t, n) => e(n, t)
        } else o = this.index_.getCompare();
        const a = e;
        n(a.numChildren() === this.limit_, "");
        const h = new on(t, i),
            l = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_),
            c = this.rangedFilter_.matches(h);
        if (a.hasChild(t)) {
            const e = a.getImmediateChild(t);
            let n = s.getChildAfterChild(this.index_, l, this.reverse_);
            for (; null != n && (n.name === t || a.hasChild(n.name));) n = s.getChildAfterChild(this.index_, n, this.reverse_);
            const d = null == n ? 1 : o(n, h);
            if (c && !i.isEmpty() && d >= 0) return null != r && r.trackChildChange(Un(t, i, e)), a.updateImmediateChild(t, i);
            {
                null != r && r.trackChildChange(qn(t, e));
                const i = a.updateImmediateChild(t, Pn.EMPTY_NODE);
                return null != n && this.rangedFilter_.matches(n) ? (null != r && r.trackChildChange(Fn(n.name, n.node)), i.updateImmediateChild(n.name, n.node)) : i
            }
        }
        return i.isEmpty() ? e : c && o(l, h) >= 0 ? (null != r && (r.trackChildChange(qn(l.name, l.node)), r.trackChildChange(Fn(t, i))), a.updateImmediateChild(t, i).updateImmediateChild(l.name, Pn.EMPTY_NODE)) : e
    }
}
class Hn {
    constructor() {
        this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = En
    }
    hasStart() {
        return this.startSet_
    }
    isViewFromLeft() {
        return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_
    }
    getIndexStartValue() {
        return n(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
    }
    getIndexStartName() {
        return n(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : et
    }
    hasEnd() {
        return this.endSet_
    }
    getIndexEndValue() {
        return n(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
    }
    getIndexEndName() {
        return n(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : tt
    }
    hasLimit() {
        return this.limitSet_
    }
    hasAnchoredLimit() {
        return this.limitSet_ && "" !== this.viewFrom_
    }
    getLimit() {
        return n(this.limitSet_, "Only valid if limit has been set"), this.limit_
    }
    getIndex() {
        return this.index_
    }
    loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_)
    }
    isDefault() {
        return this.loadsAllData() && this.index_ === En
    }
    copy() {
        const e = new Hn;
        return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e
    }
}

function zn(e) {
    const t = {};
    if (e.isDefault()) return t;
    let i;
    if (e.index_ === En ? i = "$priority" : e.index_ === Ln ? i = "$value" : e.index_ === cn ? i = "$key" : (n(e.index_ instanceof On, "Unrecognized index type!"), i = e.index_.toString()), t.orderBy = E(i), e.startSet_) {
        const n = e.startAfterSet_ ? "startAfter" : "startAt";
        t[n] = E(e.indexStartValue_), e.startNameSet_ && (t[n] += "," + E(e.indexStartName_))
    }
    if (e.endSet_) {
        const n = e.endBeforeSet_ ? "endBefore" : "endAt";
        t[n] = E(e.indexEndValue_), e.endNameSet_ && (t[n] += "," + E(e.indexEndName_))
    }
    return e.limitSet_ && (e.isViewFromLeft() ? t.limitToFirst = e.limit_ : t.limitToLast = e.limit_), t
}

function Vn(e) {
    const t = {};
    if (e.startSet_ && (t.sp = e.indexStartValue_, e.startNameSet_ && (t.sn = e.indexStartName_), t.sin = !e.startAfterSet_), e.endSet_ && (t.ep = e.indexEndValue_, e.endNameSet_ && (t.en = e.indexEndName_), t.ein = !e.endBeforeSet_), e.limitSet_) {
        t.l = e.limit_;
        let n = e.viewFrom_;
        "" === n && (n = e.isViewFromLeft() ? "l" : "r"), t.vf = n
    }
    return e.index_ !== En && (t.i = e.index_.toString()), t
}
class $n extends Ot {
    constructor(e, t, n, i) {
        super(), this.repoInfo_ = e, this.onDataUpdate_ = t, this.authTokenProvider_ = n, this.appCheckTokenProvider_ = i, this.log_ = Ge("p:rest:"), this.listens_ = {}
    }
    reportStats(e) {
        throw Error("Method not implemented.")
    }
    static getListenId_(e, t) {
        return void 0 !== t ? "tag$" + t : (n(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString())
    }
    listen(e, t, n, i) {
        const s = e._path.toString();
        this.log_("Listen called for " + s + " " + e._queryIdentifier);
        const r = $n.getListenId_(e, n),
            o = {};
        this.listens_[r] = o;
        const a = zn(e._queryParams);
        this.restRequest_(s + ".json", a, ((e, t) => {
            let a = t;
            if (404 === e && (a = null, e = null), null === e && this.onDataUpdate_(s, a, !1, n), S(this.listens_, r) === o) {
                let t;
                t = e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", i(t, null)
            }
        }))
    }
    unlisten(e, t) {
        const n = $n.getListenId_(e, t);
        delete this.listens_[n]
    }
    get(e) {
        const t = zn(e._queryParams),
            n = e._path.toString(),
            i = new g;
        return this.restRequest_(n + ".json", t, ((e, t) => {
            let s = t;
            404 === e && (s = null, e = null), null === e ? (this.onDataUpdate_(n, s, !1, null), i.resolve(s)) : i.reject(Error(s))
        })), i.promise
    }
    refreshAuthToken(e) {}
    restRequest_(e, t = {}, n) {
        return t.format = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then((([i, s]) => {
            i && i.accessToken && (t.auth = i.accessToken), s && s.token && (t.ac = s.token);
            const r = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + function(e) {
                const t = [];
                for (const [n, i] of Object.entries(e)) Array.isArray(i) ? i.forEach((e => {
                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                })) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
                return t.length ? "&" + t.join("&") : ""
            }(t);
            this.log_("Sending REST request for " + r);
            const o = new XMLHttpRequest;
            o.onreadystatechange = () => {
                if (n && 4 === o.readyState) {
                    this.log_("REST Response for " + r + " received. status:", o.status, "response:", o.responseText);
                    let e = null;
                    if (o.status >= 200 && o.status < 300) {
                        try {
                            e = w(o.responseText)
                        } catch (e) {
                            Xe("Failed to parse JSON response for " + r + ": " + o.responseText)
                        }
                        n(null, e)
                    } else 401 !== o.status && 404 !== o.status && Xe("Got unsuccessful REST response for " + r + " Status: " + o.status), n(o.status);
                    n = null
                }
            }, o.open("GET", r, !0), o.send()
        }))
    }
}
class Yn {
    constructor() {
        this.rootNode_ = Pn.EMPTY_NODE
    }
    getNode(e) {
        return this.rootNode_.getChild(e)
    }
    updateSnapshot(e, t) {
        this.rootNode_ = this.rootNode_.updateChild(e, t)
    }
}

function Kn() {
    return {
        value: null,
        children: new Map
    }
}

function Gn(e, t, n) {
    if (Kt(t)) e.value = n, e.children.clear();
    else if (null !== e.value) e.value = e.value.updateChild(t, n);
    else {
        const i = Bt(t);
        e.children.has(i) || e.children.set(i, Kn());
        Gn(e.children.get(i), t = Ht(t), n)
    }
}

function Qn(e, t) {
    if (Kt(t)) return e.value = null, e.children.clear(), !0;
    if (null !== e.value) {
        if (e.value.isLeafNode()) return !1;
        {
            const n = e.value;
            return e.value = null, n.forEachChild(En, ((t, n) => {
                Gn(e, new Ut(t), n)
            })), Qn(e, t)
        }
    }
    if (e.children.size > 0) {
        const n = Bt(t);
        if (t = Ht(t), e.children.has(n)) {
            Qn(e.children.get(n), t) && e.children.delete(n)
        }
        return 0 === e.children.size
    }
    return !0
}

function Jn(e, t, n) {
    null !== e.value ? n(t, e.value) : function(e, t) {
        e.children.forEach(((e, n) => {
            t(n, e)
        }))
    }(e, ((e, i) => {
        Jn(i, new Ut(t.toString() + "/" + e), n)
    }))
}
class Xn {
    constructor(e) {
        this.collection_ = e, this.last_ = null
    }
    get() {
        const e = this.collection_.get(),
            t = Object.assign({}, e);
        return this.last_ && at(this.last_, ((e, n) => {
            t[e] = t[e] - n
        })), this.last_ = e, t
    }
}
class Zn {
    constructor(e, t) {
        this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Xn(e);
        const n = 1e4 + 2e4 * Math.random();
        ut(this.reportStats_.bind(this), Math.floor(n))
    }
    reportStats_() {
        const e = this.statsListener_.get(),
            t = {};
        let n = !1;
        at(e, ((e, i) => {
            i > 0 && I(this.statsToReport_, e) && (t[e] = i, n = !0)
        })), n && this.server_.reportStats(t), ut(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
    }
}
var ei;

function ti(e) {
    return {
        fromUser: !1,
        fromServer: !0,
        queryId: e,
        tagged: !0
    }
}(e => {
    e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
})(ei || (ei = {}));
class ni {
    constructor(e, t, n) {
        this.path = e, this.affectedTree = t, this.revert = n, this.type = ei.ACK_USER_WRITE, this.source = {
            fromUser: !0,
            fromServer: !1,
            queryId: null,
            tagged: !1
        }
    }
    operationForChild(e) {
        if (Kt(this.path)) {
            if (null != this.affectedTree.value) return n(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
            {
                const t = this.affectedTree.subtree(new Ut(e));
                return new ni(Wt(), t, this.revert)
            }
        }
        return n(Bt(this.path) === e, "operationForChild called for unrelated child."), new ni(Ht(this.path), this.affectedTree, this.revert)
    }
}
class ii {
    constructor(e, t) {
        this.source = e, this.path = t, this.type = ei.LISTEN_COMPLETE
    }
    operationForChild(e) {
        return Kt(this.path) ? new ii(this.source, Wt()) : new ii(this.source, Ht(this.path))
    }
}
class si {
    constructor(e, t, n) {
        this.source = e, this.path = t, this.snap = n, this.type = ei.OVERWRITE
    }
    operationForChild(e) {
        return Kt(this.path) ? new si(this.source, Wt(), this.snap.getImmediateChild(e)) : new si(this.source, Ht(this.path), this.snap)
    }
}
class ri {
    constructor(e, t, n) {
        this.source = e, this.path = t, this.children = n, this.type = ei.MERGE
    }
    operationForChild(e) {
        if (Kt(this.path)) {
            const t = this.children.subtree(new Ut(e));
            return t.isEmpty() ? null : t.value ? new si(this.source, Wt(), t.value) : new ri(this.source, Wt(), t)
        }
        return n(Bt(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new ri(this.source, Ht(this.path), this.children)
    }
    toString() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    }
}
class oi {
    constructor(e, t, n) {
        this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
    }
    isFullyInitialized() {
        return this.fullyInitialized_
    }
    isFiltered() {
        return this.filtered_
    }
    isCompleteForPath(e) {
        if (Kt(e)) return this.isFullyInitialized() && !this.filtered_;
        const t = Bt(e);
        return this.isCompleteForChild(t)
    }
    isCompleteForChild(e) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
    }
    getNode() {
        return this.node_
    }
}
class ai {
    constructor(e) {
        this.query_ = e, this.index_ = this.query_._queryParams.getIndex()
    }
}

function hi(e, t, n, s, r, o) {
    const a = s.filter((e => e.type === n));
    a.sort(((t, n) => function(e, t, n) {
        if (null == t.childName || null == n.childName) throw i("Should only compare child_ events.");
        const s = new on(t.childName, t.snapshotNode),
            r = new on(n.childName, n.snapshotNode);
        return e.index_.compare(s, r)
    }(e, t, n))), a.forEach((n => {
        const i = function(e, t, n) {
            return "value" === t.type || "child_removed" === t.type || (t.prevName = n.getPredecessorChildName(t.childName, t.snapshotNode, e.index_)), t
        }(e, n, o);
        r.forEach((s => {
            s.respondsTo(n.type) && t.push(s.createEvent(i, e.query_))
        }))
    }))
}

function li(e, t) {
    return {
        eventCache: e,
        serverCache: t
    }
}

function ci(e, t, n, i) {
    return li(new oi(t, n, i), e.serverCache)
}

function di(e, t, n, i) {
    return li(e.eventCache, new oi(t, n, i))
}

function ui(e) {
    return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null
}

function _i(e) {
    return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null
}
let pi;
class fi {
    constructor(e, t = (() => (pi || (pi = new _n(it)), pi))()) {
        this.value = e, this.children = t
    }
    static fromObject(e) {
        let t = new fi(null);
        return at(e, ((e, n) => {
            t = t.set(new Ut(e), n)
        })), t
    }
    isEmpty() {
        return null === this.value && this.children.isEmpty()
    }
    findRootMostMatchingPathAndValue(e, t) {
        if (null != this.value && t(this.value)) return {
            path: Wt(),
            value: this.value
        };
        if (Kt(e)) return null;
        {
            const n = Bt(e),
                i = this.children.get(n);
            if (null !== i) {
                const s = i.findRootMostMatchingPathAndValue(Ht(e), t);
                if (null != s) {
                    return {
                        path: Yt(new Ut(n), s.path),
                        value: s.value
                    }
                }
                return null
            }
            return null
        }
    }
    findRootMostValueAndPath(e) {
        return this.findRootMostMatchingPathAndValue(e, (() => !0))
    }
    subtree(e) {
        if (Kt(e)) return this;
        {
            const t = Bt(e),
                n = this.children.get(t);
            return null !== n ? n.subtree(Ht(e)) : new fi(null)
        }
    }
    set(e, t) {
        if (Kt(e)) return new fi(t, this.children);
        {
            const n = Bt(e),
                i = (this.children.get(n) || new fi(null)).set(Ht(e), t),
                s = this.children.insert(n, i);
            return new fi(this.value, s)
        }
    }
    remove(e) {
        if (Kt(e)) return this.children.isEmpty() ? new fi(null) : new fi(null, this.children);
        {
            const t = Bt(e),
                n = this.children.get(t);
            if (n) {
                const i = n.remove(Ht(e));
                let s;
                return s = i.isEmpty() ? this.children.remove(t) : this.children.insert(t, i), null === this.value && s.isEmpty() ? new fi(null) : new fi(this.value, s)
            }
            return this
        }
    }
    get(e) {
        if (Kt(e)) return this.value;
        {
            const t = Bt(e),
                n = this.children.get(t);
            return n ? n.get(Ht(e)) : null
        }
    }
    setTree(e, t) {
        if (Kt(e)) return t;
        {
            const n = Bt(e),
                i = (this.children.get(n) || new fi(null)).setTree(Ht(e), t);
            let s;
            return s = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), new fi(this.value, s)
        }
    }
    fold(e) {
        return this.fold_(Wt(), e)
    }
    fold_(e, t) {
        const n = {};
        return this.children.inorderTraversal(((i, s) => {
            n[i] = s.fold_(Yt(e, i), t)
        })), t(e, this.value, n)
    }
    findOnPath(e, t) {
        return this.findOnPath_(e, Wt(), t)
    }
    findOnPath_(e, t, n) {
        const i = !!this.value && n(t, this.value);
        if (i) return i;
        if (Kt(e)) return null;
        {
            const i = Bt(e),
                s = this.children.get(i);
            return s ? s.findOnPath_(Ht(e), Yt(t, i), n) : null
        }
    }
    foreachOnPath(e, t) {
        return this.foreachOnPath_(e, Wt(), t)
    }
    foreachOnPath_(e, t, n) {
        if (Kt(e)) return this;
        {
            this.value && n(t, this.value);
            const i = Bt(e),
                s = this.children.get(i);
            return s ? s.foreachOnPath_(Ht(e), Yt(t, i), n) : new fi(null)
        }
    }
    foreach(e) {
        this.foreach_(Wt(), e)
    }
    foreach_(e, t) {
        this.children.inorderTraversal(((n, i) => {
            i.foreach_(Yt(e, n), t)
        })), this.value && t(e, this.value)
    }
    foreachChild(e) {
        this.children.inorderTraversal(((t, n) => {
            n.value && e(t, n.value)
        }))
    }
}
class gi {
    constructor(e) {
        this.writeTree_ = e
    }
    static empty() {
        return new gi(new fi(null))
    }
}

function mi(e, t, n) {
    if (Kt(t)) return new gi(new fi(n));
    {
        const i = e.writeTree_.findRootMostValueAndPath(t);
        if (null != i) {
            const s = i.path;
            let r = i.value;
            const o = Gt(s, t);
            return r = r.updateChild(o, n), new gi(e.writeTree_.set(s, r))
        } {
            const i = new fi(n),
                s = e.writeTree_.setTree(t, i);
            return new gi(s)
        }
    }
}

function yi(e, t, n) {
    let i = e;
    return at(n, ((e, n) => {
        i = mi(i, Yt(t, e), n)
    })), i
}

function vi(e, t) {
    if (Kt(t)) return gi.empty();
    {
        const n = e.writeTree_.setTree(t, new fi(null));
        return new gi(n)
    }
}

function Ci(e, t) {
    return null != bi(e, t)
}

function bi(e, t) {
    const n = e.writeTree_.findRootMostValueAndPath(t);
    return null != n ? e.writeTree_.get(n.path).getChild(Gt(n.path, t)) : null
}

function wi(e) {
    const t = [],
        n = e.writeTree_.value;
    return null != n ? n.isLeafNode() || n.forEachChild(En, ((e, n) => {
        t.push(new on(e, n))
    })) : e.writeTree_.children.inorderTraversal(((e, n) => {
        null != n.value && t.push(new on(e, n.value))
    })), t
}

function Ei(e, t) {
    if (Kt(t)) return e;
    {
        const n = bi(e, t);
        return new gi(null != n ? new fi(n) : e.writeTree_.subtree(t))
    }
}

function Ti(e) {
    return e.writeTree_.isEmpty()
}

function Ii(e, t) {
    return Si(Wt(), e.writeTree_, t)
}

function Si(e, t, i) {
    if (null != t.value) return i.updateChild(e, t.value);
    {
        let s = null;
        return t.children.inorderTraversal(((t, r) => {
            ".priority" === t ? (n(null !== r.value, "Priority writes must always be leaf nodes"), s = r.value) : i = Si(Yt(e, t), r, i)
        })), i.getChild(e).isEmpty() || null === s || (i = i.updateChild(Yt(e, ".priority"), s)), i
    }
}

function ki(e, t) {
    return Wi(t, e)
}

function Ri(e, t) {
    const i = e.allWrites.findIndex((e => e.writeId === t));
    n(i >= 0, "removeWrite called with nonexistent writeId.");
    const s = e.allWrites[i];
    e.allWrites.splice(i, 1);
    let r = s.visible,
        o = !1,
        a = e.allWrites.length - 1;
    for (; r && a >= 0;) {
        const t = e.allWrites[a];
        t.visible && (a >= i && Ni(t, s.path) ? r = !1 : Xt(s.path, t.path) && (o = !0)), a--
    }
    if (r) {
        if (o) return function(e) {
            e.visibleWrites = Di(e.allWrites, Pi, Wt()), e.allWrites.length > 0 ? e.lastWriteId = e.allWrites[e.allWrites.length - 1].writeId : e.lastWriteId = -1
        }(e), !0;
        if (s.snap) e.visibleWrites = vi(e.visibleWrites, s.path);
        else {
            at(s.children, (t => {
                e.visibleWrites = vi(e.visibleWrites, Yt(s.path, t))
            }))
        }
        return !0
    }
    return !1
}

function Ni(e, t) {
    if (e.snap) return Xt(e.path, t);
    for (const n in e.children)
        if (e.children.hasOwnProperty(n) && Xt(Yt(e.path, n), t)) return !0;
    return !1
}

function Pi(e) {
    return e.visible
}

function Di(e, t, n) {
    let s = gi.empty();
    for (let r = 0; r < e.length; ++r) {
        const o = e[r];
        if (t(o)) {
            const e = o.path;
            let t;
            if (o.snap) Xt(n, e) ? (t = Gt(n, e), s = mi(s, t, o.snap)) : Xt(e, n) && (t = Gt(e, n), s = mi(s, Wt(), o.snap.getChild(t)));
            else {
                if (!o.children) throw i("WriteRecord should have .snap or .children");
                if (Xt(n, e)) t = Gt(n, e), s = yi(s, t, o.children);
                else if (Xt(e, n))
                    if (t = Gt(e, n), Kt(t)) s = yi(s, Wt(), o.children);
                    else {
                        const e = S(o.children, Bt(t));
                        if (e) {
                            const n = e.getChild(Ht(t));
                            s = mi(s, Wt(), n)
                        }
                    }
            }
        }
    }
    return s
}

function xi(e, t, n, i, s) {
    if (i || s) {
        const r = Ei(e.visibleWrites, t);
        if (!s && Ti(r)) return n;
        if (s || null != n || Ci(r, Wt())) {
            const r = e => (e.visible || s) && (!i || !~i.indexOf(e.writeId)) && (Xt(e.path, t) || Xt(t, e.path));
            return Ii(Di(e.allWrites, r, t), n || Pn.EMPTY_NODE)
        }
        return null
    } {
        const i = bi(e.visibleWrites, t);
        if (null != i) return i;
        {
            const i = Ei(e.visibleWrites, t);
            if (Ti(i)) return n;
            if (null != n || Ci(i, Wt())) {
                return Ii(i, n || Pn.EMPTY_NODE)
            }
            return null
        }
    }
}

function Ai(e, t, n, i) {
    return xi(e.writeTree, e.treePath, t, n, i)
}

function Oi(e, t) {
    return function(e, t, n) {
        let i = Pn.EMPTY_NODE;
        const s = bi(e.visibleWrites, t);
        if (s) return s.isLeafNode() || s.forEachChild(En, ((e, t) => {
            i = i.updateImmediateChild(e, t)
        })), i;
        if (n) {
            const s = Ei(e.visibleWrites, t);
            return n.forEachChild(En, ((e, t) => {
                const n = Ii(Ei(s, new Ut(e)), t);
                i = i.updateImmediateChild(e, n)
            })), wi(s).forEach((e => {
                i = i.updateImmediateChild(e.name, e.node)
            })), i
        }
        return wi(Ei(e.visibleWrites, t)).forEach((e => {
            i = i.updateImmediateChild(e.name, e.node)
        })), i
    }(e.writeTree, e.treePath, t)
}

function Li(e, t, i, s) {
    return function(e, t, i, s, r) {
        n(s || r, "Either existingEventSnap or existingServerSnap must exist");
        const o = Yt(t, i);
        if (Ci(e.visibleWrites, o)) return null;
        {
            const t = Ei(e.visibleWrites, o);
            return Ti(t) ? r.getChild(i) : Ii(t, r.getChild(i))
        }
    }(e.writeTree, e.treePath, t, i, s)
}

function Mi(e, t) {
    return function(e, t) {
        return bi(e.visibleWrites, t)
    }(e.writeTree, Yt(e.treePath, t))
}

function Fi(e, t, n, i, s, r) {
    return function(e, t, n, i, s, r, o) {
        let a;
        const h = Ei(e.visibleWrites, t),
            l = bi(h, Wt());
        if (null != l) a = l;
        else {
            if (null == n) return [];
            a = Ii(h, n)
        }
        if (a = a.withIndex(o), a.isEmpty() || a.isLeafNode()) return [];
        {
            const e = [],
                t = o.getCompare(),
                n = r ? a.getReverseIteratorFrom(i, o) : a.getIteratorFrom(i, o);
            let h = n.getNext();
            for (; h && e.length < s;) 0 !== t(h, i) && e.push(h), h = n.getNext();
            return e
        }
    }(e.writeTree, e.treePath, t, n, i, s, r)
}

function qi(e, t, n) {
    return function(e, t, n, i) {
        const s = Yt(t, n),
            r = bi(e.visibleWrites, s);
        if (null != r) return r;
        if (i.isCompleteForChild(n)) return Ii(Ei(e.visibleWrites, s), i.getNode().getImmediateChild(n));
        return null
    }(e.writeTree, e.treePath, t, n)
}

function Ui(e, t) {
    return Wi(Yt(e.treePath, t), e.writeTree)
}

function Wi(e, t) {
    return {
        treePath: e,
        writeTree: t
    }
}
class Bi {
    constructor() {
        this.changeMap = new Map
    }
    trackChildChange(e) {
        const t = e.type,
            s = e.childName;
        n("child_added" === t || "child_changed" === t || "child_removed" === t, "Only child changes supported for tracking"), n(".priority" !== s, "Only non-priority child changes can be tracked.");
        const r = this.changeMap.get(s);
        if (r) {
            const n = r.type;
            if ("child_added" === t && "child_removed" === n) this.changeMap.set(s, Un(s, e.snapshotNode, r.snapshotNode));
            else if ("child_removed" === t && "child_added" === n) this.changeMap.delete(s);
            else if ("child_removed" === t && "child_changed" === n) this.changeMap.set(s, qn(s, r.oldSnap));
            else if ("child_changed" === t && "child_added" === n) this.changeMap.set(s, Fn(s, e.snapshotNode));
            else {
                if ("child_changed" !== t || "child_changed" !== n) throw i("Illegal combination of changes: " + e + " occurred after " + r);
                this.changeMap.set(s, Un(s, e.snapshotNode, r.oldSnap))
            }
        } else this.changeMap.set(s, e)
    }
    getChanges() {
        return Array.from(this.changeMap.values())
    }
}
const ji = new class {
    getCompleteChild(e) {
        return null
    }
    getChildAfterChild(e, t, n) {
        return null
    }
};
class Hi {
    constructor(e, t, n = null) {
        this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
    }
    getCompleteChild(e) {
        const t = this.viewCache_.eventCache;
        if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
        {
            const t = null != this.optCompleteServerCache_ ? new oi(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
            return qi(this.writes_, e, t)
        }
    }
    getChildAfterChild(e, t, n) {
        const i = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : _i(this.viewCache_),
            s = Fi(this.writes_, i, t, 1, n, e);
        return 0 === s.length ? null : s[0]
    }
}

function zi(e, t, s, r, o) {
    const a = new Bi;
    let h, l;
    if (s.type === ei.OVERWRITE) {
        const i = s;
        i.source.fromUser ? h = Yi(e, t, i.path, i.snap, r, o, a) : (n(i.source.fromServer, "Unknown source."), l = i.source.tagged || t.serverCache.isFiltered() && !Kt(i.path), h = $i(e, t, i.path, i.snap, r, o, l, a))
    } else if (s.type === ei.MERGE) {
        const i = s;
        i.source.fromUser ? h = function(e, t, n, i, s, r, o) {
            let a = t;
            return i.foreach(((i, h) => {
                const l = Yt(n, i);
                Ki(t, Bt(l)) && (a = Yi(e, a, l, h, s, r, o))
            })), i.foreach(((i, h) => {
                const l = Yt(n, i);
                Ki(t, Bt(l)) || (a = Yi(e, a, l, h, s, r, o))
            })), a
        }(e, t, i.path, i.children, r, o, a) : (n(i.source.fromServer, "Unknown source."), l = i.source.tagged || t.serverCache.isFiltered(), h = Qi(e, t, i.path, i.children, r, o, l, a))
    } else if (s.type === ei.ACK_USER_WRITE) {
        const i = s;
        h = i.revert ? function(e, t, i, s, r, o) {
            let a;
            if (null != Mi(s, i)) return t;
            {
                const h = new Hi(s, t, r),
                    l = t.eventCache.getNode();
                let c;
                if (Kt(i) || ".priority" === Bt(i)) {
                    let i;
                    if (t.serverCache.isFullyInitialized()) i = Ai(s, _i(t));
                    else {
                        const e = t.serverCache.getNode();
                        n(e instanceof Pn, "serverChildren would be complete if leaf node"), i = Oi(s, e)
                    }
                    c = e.filter.updateFullNode(l, i, o)
                } else {
                    const n = Bt(i);
                    let r = qi(s, n, t.serverCache);
                    null == r && t.serverCache.isCompleteForChild(n) && (r = l.getImmediateChild(n)), c = null != r ? e.filter.updateChild(l, n, r, Ht(i), h, o) : t.eventCache.getNode().hasChild(n) ? e.filter.updateChild(l, n, Pn.EMPTY_NODE, Ht(i), h, o) : l, c.isEmpty() && t.serverCache.isFullyInitialized() && (a = Ai(s, _i(t)), a.isLeafNode() && (c = e.filter.updateFullNode(c, a, o)))
                }
                return a = t.serverCache.isFullyInitialized() || null != Mi(s, Wt()), ci(t, c, a, e.filter.filtersNodes())
            }
        }(e, t, i.path, r, o, a) : function(e, t, n, i, s, r, o) {
            if (null != Mi(s, n)) return t;
            const a = t.serverCache.isFiltered(),
                h = t.serverCache;
            if (null != i.value) {
                if (Kt(n) && h.isFullyInitialized() || h.isCompleteForPath(n)) return $i(e, t, n, h.getNode().getChild(n), s, r, a, o);
                if (Kt(n)) {
                    let i = new fi(null);
                    return h.getNode().forEachChild(cn, ((e, t) => {
                        i = i.set(new Ut(e), t)
                    })), Qi(e, t, n, i, s, r, a, o)
                }
                return t
            } {
                let l = new fi(null);
                return i.foreach((e => {
                    const t = Yt(n, e);
                    h.isCompleteForPath(t) && (l = l.set(e, h.getNode().getChild(t)))
                })), Qi(e, t, n, l, s, r, a, o)
            }
        }(e, t, i.path, i.affectedTree, r, o, a)
    } else {
        if (s.type !== ei.LISTEN_COMPLETE) throw i("Unknown operation type: " + s.type);
        h = function(e, t, n, i, s) {
            const r = t.serverCache,
                o = di(t, r.getNode(), r.isFullyInitialized() || Kt(n), r.isFiltered());
            return Vi(e, o, n, i, ji, s)
        }(e, t, s.path, r, a)
    }
    const c = a.getChanges();
    return function(e, t, n) {
        const i = t.eventCache;
        if (i.isFullyInitialized()) {
            const s = i.getNode().isLeafNode() || i.getNode().isEmpty(),
                r = ui(e);
            (n.length > 0 || !e.eventCache.isFullyInitialized() || s && !i.getNode().equals(r) || !i.getNode().getPriority().equals(r.getPriority())) && n.push(Mn(ui(t)))
        }
    }(t, h, c), {
        viewCache: h,
        changes: c
    }
}

function Vi(e, t, i, s, r, o) {
    const a = t.eventCache;
    if (null != Mi(s, i)) return t;
    {
        let h, l;
        if (Kt(i))
            if (n(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), t.serverCache.isFiltered()) {
                const n = _i(t),
                    i = Oi(s, n instanceof Pn ? n : Pn.EMPTY_NODE);
                h = e.filter.updateFullNode(t.eventCache.getNode(), i, o)
            } else {
                const n = Ai(s, _i(t));
                h = e.filter.updateFullNode(t.eventCache.getNode(), n, o)
            }
        else {
            const c = Bt(i);
            if (".priority" === c) {
                n(1 === jt(i), "Can't have a priority with additional path components");
                const r = a.getNode();
                l = t.serverCache.getNode();
                const o = Li(s, i, r, l);
                h = null != o ? e.filter.updatePriority(r, o) : a.getNode()
            } else {
                const n = Ht(i);
                let d;
                if (a.isCompleteForChild(c)) {
                    l = t.serverCache.getNode();
                    const e = Li(s, i, a.getNode(), l);
                    d = null != e ? a.getNode().getImmediateChild(c).updateChild(n, e) : a.getNode().getImmediateChild(c)
                } else d = qi(s, c, t.serverCache);
                h = null != d ? e.filter.updateChild(a.getNode(), c, d, n, r, o) : a.getNode()
            }
        }
        return ci(t, h, a.isFullyInitialized() || Kt(i), e.filter.filtersNodes())
    }
}

function $i(e, t, n, i, s, r, o, a) {
    const h = t.serverCache;
    let l;
    const c = o ? e.filter : e.filter.getIndexedFilter();
    if (Kt(n)) l = c.updateFullNode(h.getNode(), i, null);
    else if (c.filtersNodes() && !h.isFiltered()) {
        const e = h.getNode().updateChild(n, i);
        l = c.updateFullNode(h.getNode(), e, null)
    } else {
        const e = Bt(n);
        if (!h.isCompleteForPath(n) && jt(n) > 1) return t;
        const s = Ht(n),
            r = h.getNode().getImmediateChild(e).updateChild(s, i);
        l = ".priority" === e ? c.updatePriority(h.getNode(), r) : c.updateChild(h.getNode(), e, r, s, ji, null)
    }
    const d = di(t, l, h.isFullyInitialized() || Kt(n), c.filtersNodes());
    return Vi(e, d, n, s, new Hi(s, d, r), a)
}

function Yi(e, t, n, i, s, r, o) {
    const a = t.eventCache;
    let h, l;
    const c = new Hi(s, t, r);
    if (Kt(n)) l = e.filter.updateFullNode(t.eventCache.getNode(), i, o), h = ci(t, l, !0, e.filter.filtersNodes());
    else {
        const s = Bt(n);
        if (".priority" === s) l = e.filter.updatePriority(t.eventCache.getNode(), i), h = ci(t, l, a.isFullyInitialized(), a.isFiltered());
        else {
            const r = Ht(n),
                l = a.getNode().getImmediateChild(s);
            let d;
            if (Kt(r)) d = i;
            else {
                const e = c.getCompleteChild(s);
                d = null != e ? ".priority" === zt(r) && e.getChild($t(r)).isEmpty() ? e : e.updateChild(r, i) : Pn.EMPTY_NODE
            }
            if (l.equals(d)) h = t;
            else {
                h = ci(t, e.filter.updateChild(a.getNode(), s, d, r, c, o), a.isFullyInitialized(), e.filter.filtersNodes())
            }
        }
    }
    return h
}

function Ki(e, t) {
    return e.eventCache.isCompleteForChild(t)
}

function Gi(e, t, n) {
    return n.foreach(((e, n) => {
        t = t.updateChild(e, n)
    })), t
}

function Qi(e, t, n, i, s, r, o, a) {
    if (t.serverCache.getNode().isEmpty() && !t.serverCache.isFullyInitialized()) return t;
    let h, l = t;
    h = Kt(n) ? i : new fi(null).setTree(n, i);
    const c = t.serverCache.getNode();
    return h.children.inorderTraversal(((n, i) => {
        if (c.hasChild(n)) {
            const h = Gi(0, t.serverCache.getNode().getImmediateChild(n), i);
            l = $i(e, l, new Ut(n), h, s, r, o, a)
        }
    })), h.children.inorderTraversal(((n, i) => {
        const h = !t.serverCache.isCompleteForChild(n) && null === i.value;
        if (!c.hasChild(n) && !h) {
            const h = Gi(0, t.serverCache.getNode().getImmediateChild(n), i);
            l = $i(e, l, new Ut(n), h, s, r, o, a)
        }
    })), l
}
class Ji {
    constructor(e, t) {
        this.query_ = e, this.eventRegistrations_ = [];
        const n = this.query_._queryParams,
            i = new Wn(n.getIndex()),
            s = (r = n).loadsAllData() ? new Wn(r.getIndex()) : r.hasLimit() ? new jn(r) : new Bn(r);
        var r;
        this.processor_ = function(e) {
            return {
                filter: e
            }
        }(s);
        const o = t.serverCache,
            a = t.eventCache,
            h = i.updateFullNode(Pn.EMPTY_NODE, o.getNode(), null),
            l = s.updateFullNode(Pn.EMPTY_NODE, a.getNode(), null),
            c = new oi(h, o.isFullyInitialized(), i.filtersNodes()),
            d = new oi(l, a.isFullyInitialized(), s.filtersNodes());
        this.viewCache_ = li(d, c), this.eventGenerator_ = new ai(this.query_)
    }
    get query() {
        return this.query_
    }
}

function Xi(e, t) {
    const n = _i(e.viewCache_);
    return n && (e.query._queryParams.loadsAllData() || !Kt(t) && !n.getImmediateChild(Bt(t)).isEmpty()) ? n.getChild(t) : null
}

function Zi(e) {
    return 0 === e.eventRegistrations_.length
}

function es(e, t, i) {
    const s = [];
    if (i) {
        n(null == t, "A cancel should cancel all event registrations.");
        const r = e.query._path;
        e.eventRegistrations_.forEach((e => {
            const t = e.createCancelEvent(i, r);
            t && s.push(t)
        }))
    }
    if (t) {
        let n = [];
        for (let i = 0; i < e.eventRegistrations_.length; ++i) {
            const s = e.eventRegistrations_[i];
            if (s.matches(t)) {
                if (t.hasAnyCallback()) {
                    n = n.concat(e.eventRegistrations_.slice(i + 1));
                    break
                }
            } else n.push(s)
        }
        e.eventRegistrations_ = n
    } else e.eventRegistrations_ = [];
    return s
}

function ts(e, t, i, s) {
    t.type === ei.MERGE && null !== t.source.queryId && (n(_i(e.viewCache_), "We should always have a full cache before handling merges"), n(ui(e.viewCache_), "Missing event cache, even though we have a server cache"));
    const r = e.viewCache_,
        o = zi(e.processor_, r, t, i, s);
    var a, h;
    return a = e.processor_, h = o.viewCache, n(h.eventCache.getNode().isIndexed(a.filter.getIndex()), "Event snap not indexed"), n(h.serverCache.getNode().isIndexed(a.filter.getIndex()), "Server snap not indexed"), n(o.viewCache.serverCache.isFullyInitialized() || !r.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), e.viewCache_ = o.viewCache, ns(e, o.changes, o.viewCache.eventCache.getNode(), null)
}

function ns(e, t, n, i) {
    const s = i ? [i] : e.eventRegistrations_;
    return function(e, t, n, i) {
        const s = [],
            r = [];
        return t.forEach((t => {
            var n;
            "child_changed" === t.type && e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && r.push((n = t.childName, {
                type: "child_moved",
                snapshotNode: t.snapshotNode,
                childName: n
            }))
        })), hi(e, s, "child_removed", t, i, n), hi(e, s, "child_added", t, i, n), hi(e, s, "child_moved", r, i, n), hi(e, s, "child_changed", t, i, n), hi(e, s, "value", t, i, n), s
    }(e.eventGenerator_, t, n, s)
}
let is, ss;
class rs {
    constructor() {
        this.views = new Map
    }
}

function os(e, t, i, s) {
    const r = t.source.queryId;
    if (null !== r) {
        const o = e.views.get(r);
        return n(null != o, "SyncTree gave us an op for an invalid query."), ts(o, t, i, s)
    } {
        let n = [];
        for (const r of e.views.values()) n = n.concat(ts(r, t, i, s));
        return n
    }
}

function as(e, t, n, i, s, r) {
    const o = function(e, t, n, i, s) {
        const r = t._queryIdentifier,
            o = e.views.get(r);
        if (!o) {
            let e = Ai(n, s ? i : null),
                r = !1;
            e ? r = !0 : i instanceof Pn ? (e = Oi(n, i), r = !1) : (e = Pn.EMPTY_NODE, r = !1);
            const o = li(new oi(e, r, !1), new oi(i, s, !1));
            return new Ji(t, o)
        }
        return o
    }(e, t, i, s, r);
    return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o),
        function(e, t) {
            e.eventRegistrations_.push(t)
        }(o, n),
        function(e, t) {
            const n = e.viewCache_.eventCache,
                i = [];
            n.getNode().isLeafNode() || n.getNode().forEachChild(En, ((e, t) => {
                i.push(Fn(e, t))
            }));
            return n.isFullyInitialized() && i.push(Mn(n.getNode())), ns(e, i, n.getNode(), t)
        }(o, n)
}

function hs(e, t, i, s) {
    const r = t._queryIdentifier,
        o = [];
    let a = [];
    const h = _s(e);
    if ("default" === r)
        for (const [t, n] of e.views.entries()) a = a.concat(es(n, i, s)), Zi(n) && (e.views.delete(t), n.query._queryParams.loadsAllData() || o.push(n.query));
    else {
        const t = e.views.get(r);
        t && (a = a.concat(es(t, i, s)), Zi(t) && (e.views.delete(r), t.query._queryParams.loadsAllData() || o.push(t.query)))
    }
    return h && !_s(e) && o.push(new(n(is, "Reference.ts has not been loaded"), is)(t._repo, t._path)), {
        removed: o,
        events: a
    }
}

function ls(e) {
    const t = [];
    for (const n of e.views.values()) n.query._queryParams.loadsAllData() || t.push(n);
    return t
}

function cs(e, t) {
    let n = null;
    for (const i of e.views.values()) n = n || Xi(i, t);
    return n
}

function ds(e, t) {
    if (t._queryParams.loadsAllData()) return ps(e);
    {
        const n = t._queryIdentifier;
        return e.views.get(n)
    }
}

function us(e, t) {
    return null != ds(e, t)
}

function _s(e) {
    return null != ps(e)
}

function ps(e) {
    for (const t of e.views.values())
        if (t.query._queryParams.loadsAllData()) return t;
    return null
}
let fs = 1;
class gs {
    constructor(e) {
        this.listenProvider_ = e, this.syncPointTree_ = new fi(null), this.pendingWriteTree_ = {
            visibleWrites: gi.empty(),
            allWrites: [],
            lastWriteId: -1
        }, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
    }
}

function ms(e, t, i, s, r) {
    return function(e, t, i, s, r) {
        n(s > e.lastWriteId, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), e.allWrites.push({
            path: t,
            snap: i,
            writeId: s,
            visible: r
        }), r && (e.visibleWrites = mi(e.visibleWrites, t, i)), e.lastWriteId = s
    }(e.pendingWriteTree_, t, i, s, r), r ? Es(e, new si({
        fromUser: !0,
        fromServer: !1,
        queryId: null,
        tagged: !1
    }, t, i)) : []
}

function ys(e, t, n = !1) {
    const i = function(e, t) {
        for (let n = 0; n < e.allWrites.length; n++) {
            const i = e.allWrites[n];
            if (i.writeId === t) return i
        }
        return null
    }(e.pendingWriteTree_, t);
    if (Ri(e.pendingWriteTree_, t)) {
        let t = new fi(null);
        return null != i.snap ? t = t.set(Wt(), !0) : at(i.children, (e => {
            t = t.set(new Ut(e), !0)
        })), Es(e, new ni(i.path, t, n))
    }
    return []
}

function vs(e, t, n) {
    return Es(e, new si({
        fromUser: !1,
        fromServer: !0,
        queryId: null,
        tagged: !1
    }, t, n))
}

function Cs(e, t, n, i, s = !1) {
    const r = t._path,
        o = e.syncPointTree_.get(r);
    let a = [];
    if (o && ("default" === t._queryIdentifier || us(o, t))) {
        const h = hs(o, t, n, i);
        0 === o.views.size && (e.syncPointTree_ = e.syncPointTree_.remove(r));
        const l = h.removed;
        if (a = h.events, !s) {
            const n = -1 !== l.findIndex((e => e._queryParams.loadsAllData())),
                s = e.syncPointTree_.findOnPath(r, ((e, t) => _s(t)));
            if (n && !s) {
                const t = e.syncPointTree_.subtree(r);
                if (!t.isEmpty()) {
                    const n = function(e) {
                        return e.fold(((e, t, n) => {
                            if (t && _s(t)) {
                                return [ps(t)]
                            } {
                                let e = [];
                                return t && (e = ls(t)), at(n, ((t, n) => {
                                    e = e.concat(n)
                                })), e
                            }
                        }))
                    }(t);
                    for (let t = 0; t < n.length; ++t) {
                        const i = n[t],
                            s = i.query,
                            r = Ss(e, i);
                        e.listenProvider_.startListening(xs(s), ks(e, s), r.hashFn, r.onComplete)
                    }
                }
            }
            if (!s && l.length > 0 && !i)
                if (n) {
                    const n = null;
                    e.listenProvider_.stopListening(xs(t), n)
                } else l.forEach((t => {
                    const n = e.queryToTagMap.get(Rs(t));
                    e.listenProvider_.stopListening(xs(t), n)
                }))
        }! function(e, t) {
            for (let n = 0; n < t.length; ++n) {
                const i = t[n];
                if (!i._queryParams.loadsAllData()) {
                    const t = Rs(i),
                        n = e.queryToTagMap.get(t);
                    e.queryToTagMap.delete(t), e.tagToQueryMap.delete(n)
                }
            }
        }(e, l)
    }
    return a
}

function bs(e, t, i, s = !1) {
    const r = t._path;
    let o = null,
        a = !1;
    e.syncPointTree_.foreachOnPath(r, ((e, t) => {
        const n = Gt(e, r);
        o = o || cs(t, n), a = a || _s(t)
    }));
    let h, l = e.syncPointTree_.get(r);
    if (l ? (a = a || _s(l), o = o || cs(l, Wt())) : (l = new rs, e.syncPointTree_ = e.syncPointTree_.set(r, l)), null != o) h = !0;
    else {
        h = !1, o = Pn.EMPTY_NODE;
        e.syncPointTree_.subtree(r).foreachChild(((e, t) => {
            const n = cs(t, Wt());
            n && (o = o.updateImmediateChild(e, n))
        }))
    }
    const c = us(l, t);
    if (!c && !t._queryParams.loadsAllData()) {
        const i = Rs(t);
        n(!e.queryToTagMap.has(i), "View does not exist, but we have a tag");
        const s = fs++;
        e.queryToTagMap.set(i, s), e.tagToQueryMap.set(s, i)
    }
    let d = as(l, t, i, ki(e.pendingWriteTree_, r), o, h);
    if (!c && !a && !s) {
        const i = ds(l, t);
        d = d.concat(function(e, t, i) {
            const s = t._path,
                r = ks(e, t),
                o = Ss(e, i),
                a = e.listenProvider_.startListening(xs(t), r, o.hashFn, o.onComplete),
                h = e.syncPointTree_.subtree(s);
            if (r) n(!_s(h.value), "If we're adding a query, it shouldn't be shadowed");
            else {
                const t = h.fold(((e, t, n) => {
                    if (!Kt(e) && t && _s(t)) return [ps(t).query];
                    {
                        let e = [];
                        return t && (e = e.concat(ls(t).map((e => e.query)))), at(n, ((t, n) => {
                            e = e.concat(n)
                        })), e
                    }
                }));
                for (let n = 0; n < t.length; ++n) {
                    const i = t[n];
                    e.listenProvider_.stopListening(xs(i), ks(e, i))
                }
            }
            return a
        }(e, t, i))
    }
    return d
}

function ws(e, t, n) {
    const i = e.pendingWriteTree_,
        s = e.syncPointTree_.findOnPath(t, ((e, n) => {
            const i = cs(n, Gt(e, t));
            if (i) return i
        }));
    return xi(i, t, s, n, !0)
}

function Es(e, t) {
    return Ts(t, e.syncPointTree_, null, ki(e.pendingWriteTree_, Wt()))
}

function Ts(e, t, n, i) {
    if (Kt(e.path)) return Is(e, t, n, i);
    {
        const s = t.get(Wt());
        null == n && null != s && (n = cs(s, Wt()));
        let r = [];
        const o = Bt(e.path),
            a = e.operationForChild(o),
            h = t.children.get(o);
        if (h && a) {
            const e = n ? n.getImmediateChild(o) : null,
                t = Ui(i, o);
            r = r.concat(Ts(a, h, e, t))
        }
        return s && (r = r.concat(os(s, e, i, n))), r
    }
}

function Is(e, t, n, i) {
    const s = t.get(Wt());
    null == n && null != s && (n = cs(s, Wt()));
    let r = [];
    return t.children.inorderTraversal(((t, s) => {
        const o = n ? n.getImmediateChild(t) : null,
            a = Ui(i, t),
            h = e.operationForChild(t);
        h && (r = r.concat(Is(h, s, o, a)))
    })), s && (r = r.concat(os(s, e, i, n))), r
}

function Ss(e, t) {
    const n = t.query,
        i = ks(e, n);
    return {
        hashFn() {
            const e = function(e) {
                return e.viewCache_.serverCache.getNode()
            }(t) || Pn.EMPTY_NODE;
            return e.hash()
        },
        onComplete(t) {
            if ("ok" === t) return i ? function(e, t, n) {
                const i = Ns(e, n);
                if (i) {
                    const n = Ps(i),
                        s = n.path,
                        r = n.queryId,
                        o = Gt(s, t);
                    return Ds(e, s, new ii(ti(r), o))
                }
                return []
            }(e, n._path, i) : function(e, t) {
                return Es(e, new ii({
                    fromUser: !1,
                    fromServer: !0,
                    queryId: null,
                    tagged: !1
                }, t))
            }(e, n._path);
            {
                const i = function(e, t) {
                    let n = "Unknown Error";
                    "too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === e ? n = "Client doesn't have permission to access the desired data." : "unavailable" === e && (n = "The service is unavailable");
                    const i = Error(e + " at " + t._path.toString() + ": " + n);
                    return i.code = e.toUpperCase(), i
                }(t, n);
                return Cs(e, n, null, i)
            }
        }
    }
}

function ks(e, t) {
    const n = Rs(t);
    return e.queryToTagMap.get(n)
}

function Rs(e) {
    return e._path.toString() + "$" + e._queryIdentifier
}

function Ns(e, t) {
    return e.tagToQueryMap.get(t)
}

function Ps(e) {
    const t = e.indexOf("$");
    return n(-1 !== t && t < e.length - 1, "Bad queryKey."), {
        queryId: e.substr(t + 1),
        path: new Ut(e.substr(0, t))
    }
}

function Ds(e, t, i) {
    const s = e.syncPointTree_.get(t);
    n(s, "Missing sync point for query tag that we're tracking");
    return os(s, i, ki(e.pendingWriteTree_, t), null)
}

function xs(e) {
    return e._queryParams.loadsAllData() && !e._queryParams.isDefault() ? new(n(ss, "Reference.ts has not been loaded"), ss)(e._repo, e._path) : e
}
class As {
    constructor(e) {
        this.node_ = e
    }
    getImmediateChild(e) {
        const t = this.node_.getImmediateChild(e);
        return new As(t)
    }
    node() {
        return this.node_
    }
}
class Os {
    constructor(e, t) {
        this.syncTree_ = e, this.path_ = t
    }
    getImmediateChild(e) {
        const t = Yt(this.path_, e);
        return new Os(this.syncTree_, t)
    }
    node() {
        return ws(this.syncTree_, this.path_)
    }
}
const Ls = e => ((e = e || {}).timestamp = e.timestamp || (new Date).getTime(), e),
    Ms = (e, t, i) => e && "object" == typeof e ? (n(".sv" in e, "Unexpected leaf node or priority contents"), "string" == typeof e[".sv"] ? Fs(e[".sv"], t, i) : "object" == typeof e[".sv"] ? qs(e[".sv"], t) : void n(!1, "Unexpected server value: " + JSON.stringify(e, null, 2))) : e,
    Fs = (e, t, i) => {
        if ("timestamp" === e) return i.timestamp;
        n(!1, "Unexpected server value: " + e)
    },
    qs = (e, t) => {
        e.hasOwnProperty("increment") || n(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
        const i = e.increment;
        "number" != typeof i && n(!1, "Unexpected increment value: " + i);
        const s = t.node();
        if (n(null != s, "Expected ChildrenNode.EMPTY_NODE for nulls"), !s.isLeafNode()) return i;
        const r = s.getValue();
        return "number" != typeof r ? i : r + i
    },
    Us = (e, t, n, i) => Bs(t, new Os(n, e), i),
    Ws = (e, t, n) => Bs(e, new As(t), n);

function Bs(e, t, n) {
    const i = e.getPriority().val(),
        s = Ms(i, t.getImmediateChild(".priority"), n);
    let r;
    if (e.isLeafNode()) {
        const i = e,
            r = Ms(i.getValue(), t, n);
        return r !== i.getValue() || s !== i.getPriority().val() ? new wn(r, An(s)) : e
    } {
        const i = e;
        return r = i, s !== i.getPriority().val() && (r = r.updatePriority(new wn(s))), i.forEachChild(En, ((e, i) => {
            const s = Bs(i, t.getImmediateChild(e), n);
            s !== i && (r = r.updateImmediateChild(e, s))
        })), r
    }
}
class js {
    constructor(e = "", t = null, n = {
        children: {},
        childCount: 0
    }) {
        this.name = e, this.parent = t, this.node = n
    }
}

function Hs(e, t) {
    let n = t instanceof Ut ? t : new Ut(t),
        i = e,
        s = Bt(n);
    for (; null !== s;) {
        const e = S(i.node.children, s) || {
            children: {},
            childCount: 0
        };
        i = new js(s, i, e), n = Ht(n), s = Bt(n)
    }
    return i
}

function zs(e) {
    return e.node.value
}

function Vs(e, t) {
    e.node.value = t, Qs(e)
}

function $s(e) {
    return e.node.childCount > 0
}

function Ys(e, t) {
    at(e.node.children, ((n, i) => {
        t(new js(n, e, i))
    }))
}

function Ks(e, t, n, i) {
    n && !i && t(e), Ys(e, (e => {
        Ks(e, t, !0, i)
    })), n && i && t(e)
}

function Gs(e) {
    return new Ut(null === e.parent ? e.name : Gs(e.parent) + "/" + e.name)
}

function Qs(e) {
    null !== e.parent && function(e, t, n) {
        const i = function(e) {
                return void 0 === zs(e) && !$s(e)
            }(n),
            s = I(e.node.children, t);
        i && s ? (delete e.node.children[t], e.node.childCount--, Qs(e)) : i || s || (e.node.children[t] = n.node, e.node.childCount++, Qs(e))
    }(e.parent, e.name, e)
}
const Js = /[\[\].#$\/\u0000-\u001F\u007F]/,
    Xs = /[\[\].#$\u0000-\u001F\u007F]/,
    Zs = 10485760,
    er = e => "string" == typeof e && 0 !== e.length && !Js.test(e),
    tr = e => "string" == typeof e && 0 !== e.length && !Xs.test(e),
    nr = e => null === e || "string" == typeof e || "number" == typeof e && !Ze(e) || e && "object" == typeof e && I(e, ".sv"),
    ir = (e, t, n, i) => {
        i && void 0 === t || sr(x(e, "value"), t, n)
    },
    sr = (e, t, n) => {
        const i = n instanceof Ut ? new Zt(n, e) : n;
        if (void 0 === t) throw Error(e + "contains undefined " + tn(i));
        if ("function" == typeof t) throw Error(e + "contains a function " + tn(i) + " with contents = " + t.toString());
        if (Ze(t)) throw Error(e + "contains " + t.toString() + " " + tn(i));
        if ("string" == typeof t && t.length > Zs / 3 && A(t) > Zs) throw Error(e + "contains a string greater than " + Zs + " utf8 bytes " + tn(i) + " ('" + t.substring(0, 50) + "...')");
        if (t && "object" == typeof t) {
            let n = !1,
                s = !1;
            if (at(t, ((t, r) => {
                    if (".value" === t) n = !0;
                    else if (".priority" !== t && ".sv" !== t && (s = !0, !er(t))) throw Error(e + " contains an invalid key (" + t + ") " + tn(i) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                    ! function(e, t) {
                        e.parts_.length > 0 && (e.byteLength_ += 1), e.parts_.push(t), e.byteLength_ += A(t), en(e)
                    }(i, t), sr(e, r, i),
                        function(e) {
                            const t = e.parts_.pop();
                            e.byteLength_ -= A(t), e.parts_.length > 0 && (e.byteLength_ -= 1)
                        }(i)
                })), n && s) throw Error(e + ' contains ".value" child ' + tn(i) + " in addition to actual children.")
        }
    },
    rr = (e, t, n, i) => {
        if (!(i && void 0 === n || tr(n))) throw Error(x(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
    },
    or = (e, t, n, i) => {
        n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), rr(e, t, n, i)
    },
    ar = (e, t) => {
        if (".info" === Bt(t)) throw Error(e + " failed = Can't modify data under /.info/")
    },
    hr = (e, t) => {
        const n = t.path.toString();
        if ("string" != typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !er(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && !(e => (e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), tr(e)))(n)) throw Error(x(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
    };
class lr {
    constructor() {
        this.eventLists_ = [], this.recursionDepth_ = 0
    }
}

function cr(e, t) {
    let n = null;
    for (let i = 0; i < t.length; i++) {
        const s = t[i],
            r = s.getPath();
        null === n || Jt(r, n.path) || (e.eventLists_.push(n), n = null), null === n && (n = {
            events: [],
            path: r
        }), n.events.push(s)
    }
    n && e.eventLists_.push(n)
}

function dr(e, t, n) {
    cr(e, n), _r(e, (e => Jt(e, t)))
}

function ur(e, t, n) {
    cr(e, n), _r(e, (e => Xt(e, t) || Xt(t, e)))
}

function _r(e, t) {
    e.recursionDepth_++;
    let n = !0;
    for (let i = 0; i < e.eventLists_.length; i++) {
        const s = e.eventLists_[i];
        if (s) {
            t(s.path) ? (pr(e.eventLists_[i]), e.eventLists_[i] = null) : n = !1
        }
    }
    n && (e.eventLists_ = []), e.recursionDepth_--
}

function pr(e) {
    for (let t = 0; t < e.events.length; t++) {
        const n = e.events[t];
        if (null !== n) {
            e.events[t] = null;
            const i = n.getEventRunner();
            $e && Ke("event: " + n.toString()), dt(i)
        }
    }
}
const fr = "repo_interrupt",
    gr = 25;
class mr {
    constructor(e, t, n, i) {
        this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = n, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new lr, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = Kn(), this.transactionQueueTree_ = new js, this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString()
    }
    toString() {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
    }
}

function yr(e, t, n) {
    if (e.stats_ = It(e.repoInfo_), e.forceRestClient_ || ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0) e.server_ = new $n(e.repoInfo_, ((t, n, i, s) => {
        br(e, t, n, i, s)
    }), e.authTokenProvider_, e.appCheckProvider_), setTimeout((() => wr(e, !0)), 0);
    else {
        if (null != n) {
            if ("object" != typeof n) throw Error("Only objects are supported for option databaseAuthVariableOverride");
            try {
                E(n)
            } catch (e) {
                throw Error("Invalid authOverride provided: " + e)
            }
        }
        e.persistentConnection_ = new rn(e.repoInfo_, t, ((t, n, i, s) => {
            br(e, t, n, i, s)
        }), (t => {
            wr(e, t)
        }), (t => {
            ! function(e, t) {
                at(t, ((t, n) => {
                    Er(e, t, n)
                }))
            }(e, t)
        }), e.authTokenProvider_, e.appCheckProvider_, n), e.server_ = e.persistentConnection_
    }
    e.authTokenProvider_.addTokenChangeListener((t => {
        e.server_.refreshAuthToken(t)
    })), e.appCheckProvider_.addTokenChangeListener((t => {
        e.server_.refreshAppCheckToken(t.token)
    })), e.statsReporter_ = function(e, t) {
        const n = e.toString();
        return Tt[n] || (Tt[n] = t()), Tt[n]
    }(e.repoInfo_, (() => new Zn(e.stats_, e.server_))), e.infoData_ = new Yn, e.infoSyncTree_ = new gs({
        startListening(t, n, i, s) {
            let r = [];
            const o = e.infoData_.getNode(t._path);
            return o.isEmpty() || (r = vs(e.infoSyncTree_, t._path, o), setTimeout((() => {
                s("ok")
            }), 0)), r
        },
        stopListening() {}
    }), Er(e, "connected", !1), e.serverSyncTree_ = new gs({
        startListening(t, n, i, s) {
            return e.server_.listen(t, i, n, ((n, i) => {
                const r = s(n, i);
                ur(e.eventQueue_, t._path, r)
            })), []
        },
        stopListening(t, n) {
            e.server_.unlisten(t, n)
        }
    })
}

function vr(e) {
    const t = e.infoData_.getNode(new Ut(".info/serverTimeOffset")).val() || 0;
    return (new Date).getTime() + t
}

function Cr(e) {
    return Ls({
        timestamp: vr(e)
    })
}

function br(e, t, n, i, s) {
    e.dataUpdateCount++;
    const r = new Ut(t);
    n = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, n) : n;
    let o = [];
    if (s)
        if (i) {
            const t = R(n, (e => An(e)));
            o = function(e, t, n, i) {
                const s = Ns(e, i);
                if (s) {
                    const i = Ps(s),
                        r = i.path,
                        o = i.queryId,
                        a = Gt(r, t),
                        h = fi.fromObject(n);
                    return Ds(e, r, new ri(ti(o), a, h))
                }
                return []
            }(e.serverSyncTree_, r, t, s)
        } else {
            const t = An(n);
            o = function(e, t, n, i) {
                const s = Ns(e, i);
                if (null != s) {
                    const i = Ps(s),
                        r = i.path,
                        o = i.queryId,
                        a = Gt(r, t);
                    return Ds(e, r, new si(ti(o), a, n))
                }
                return []
            }(e.serverSyncTree_, r, t, s)
        }
    else if (i) {
        const t = R(n, (e => An(e)));
        o = function(e, t, n) {
            const i = fi.fromObject(n);
            return Es(e, new ri({
                fromUser: !1,
                fromServer: !0,
                queryId: null,
                tagged: !1
            }, t, i))
        }(e.serverSyncTree_, r, t)
    } else {
        const t = An(n);
        o = vs(e.serverSyncTree_, r, t)
    }
    let a = r;
    o.length > 0 && (a = xr(e, r)), ur(e.eventQueue_, a, o)
}

function wr(e, t) {
    Er(e, "connected", t), !1 === t && function(e) {
        Rr(e, "onDisconnectEvents");
        const t = Cr(e),
            n = Kn();
        Jn(e.onDisconnect_, Wt(), ((i, s) => {
            const r = Us(i, s, e.serverSyncTree_, t);
            Gn(n, i, r)
        }));
        let i = [];
        Jn(n, Wt(), ((t, n) => {
            i = i.concat(vs(e.serverSyncTree_, t, n));
            const s = Fr(e, t);
            xr(e, s)
        })), e.onDisconnect_ = Kn(), ur(e.eventQueue_, Wt(), i)
    }(e)
}

function Er(e, t, n) {
    const i = new Ut("/.info/" + t),
        s = An(n);
    e.infoData_.updateSnapshot(i, s);
    const r = vs(e.infoSyncTree_, i, s);
    ur(e.eventQueue_, i, r)
}

function Tr(e) {
    return e.nextWriteId_++
}

function Ir(e, t, n) {
    e.server_.onDisconnectCancel(t.toString(), ((i, s) => {
        "ok" === i && Qn(e.onDisconnect_, t), Nr(e, n, i, s)
    }))
}

function Sr(e, t, n, i) {
    const s = An(n);
    e.server_.onDisconnectPut(t.toString(), s.val(!0), ((n, r) => {
        "ok" === n && Gn(e.onDisconnect_, t, s), Nr(e, i, n, r)
    }))
}

function kr(e, t, n) {
    let i;
    i = ".info" === Bt(t._path) ? Cs(e.infoSyncTree_, t, n) : Cs(e.serverSyncTree_, t, n), dr(e.eventQueue_, t._path, i)
}

function Rr(e, ...t) {
    let n = "";
    e.persistentConnection_ && (n = e.persistentConnection_.id + ":"), Ke(n, ...t)
}

function Nr(e, t, n, i) {
    t && dt((() => {
        if ("ok" === n) t(null);
        else {
            const e = (n || "error").toUpperCase();
            let s = e;
            i && (s += ": " + i);
            const r = Error(s);
            r.code = e, t(r)
        }
    }))
}

function Pr(e, t, n) {
    return ws(e.serverSyncTree_, t, n) || Pn.EMPTY_NODE
}

function Dr(e, t = e.transactionQueueTree_) {
    if (t || Mr(e, t), zs(t)) {
        const i = Or(e, t);
        n(i.length > 0, "Sending zero length transaction queue");
        i.every((e => 0 === e.status)) && function(e, t, i) {
            const s = i.map((e => e.currentWriteId)),
                r = Pr(e, t, s);
            let o = r;
            const a = r.hash();
            for (let e = 0; e < i.length; e++) {
                const s = i[e];
                n(0 === s.status, "tryToSendTransactionQueue_: items in queue should all be run."), s.status = 1, s.retryCount++;
                const r = Gt(t, s.path);
                o = o.updateChild(r, s.currentOutputSnapshotRaw)
            }
            const h = o.val(!0),
                l = t;
            e.server_.put(l.toString(), h, (n => {
                Rr(e, "transaction put response", {
                    path: l.toString(),
                    status: n
                });
                let s = [];
                if ("ok" === n) {
                    const n = [];
                    for (let t = 0; t < i.length; t++) i[t].status = 2, s = s.concat(ys(e.serverSyncTree_, i[t].currentWriteId)), i[t].onComplete && n.push((() => i[t].onComplete(null, !0, i[t].currentOutputSnapshotResolved))), i[t].unwatcher();
                    Mr(e, Hs(e.transactionQueueTree_, t)), Dr(e, e.transactionQueueTree_), ur(e.eventQueue_, t, s);
                    for (let e = 0; e < n.length; e++) dt(n[e])
                } else {
                    if ("datastale" === n)
                        for (let e = 0; e < i.length; e++) 3 === i[e].status ? i[e].status = 4 : i[e].status = 0;
                    else {
                        Xe("transaction at " + l.toString() + " failed: " + n);
                        for (let e = 0; e < i.length; e++) i[e].status = 4, i[e].abortReason = n
                    }
                    xr(e, t)
                }
            }), a)
        }(e, Gs(t), i)
    } else $s(t) && Ys(t, (t => {
        Dr(e, t)
    }))
}

function xr(e, t) {
    const i = Ar(e, t),
        s = Gs(i);
    return function(e, t, i) {
        if (0 === t.length) return;
        const s = [];
        let r = [];
        const o = t.filter((e => 0 === e.status)),
            a = o.map((e => e.currentWriteId));
        for (let o = 0; o < t.length; o++) {
            const l = t[o],
                c = Gt(i, l.path);
            let d, u = !1;
            if (n(null !== c, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === l.status) u = !0, d = l.abortReason, r = r.concat(ys(e.serverSyncTree_, l.currentWriteId, !0));
            else if (0 === l.status)
                if (l.retryCount >= gr) u = !0, d = "maxretry", r = r.concat(ys(e.serverSyncTree_, l.currentWriteId, !0));
                else {
                    const n = Pr(e, l.path, a);
                    l.currentInputSnapshot = n;
                    const i = t[o].update(n.val());
                    if (void 0 !== i) {
                        sr("transaction failed: Data returned ", i, l.path);
                        let t = An(i);
                        "object" == typeof i && null != i && I(i, ".priority") || (t = t.updatePriority(n.getPriority()));
                        const s = l.currentWriteId,
                            o = Cr(e),
                            h = Ws(t, n, o);
                        l.currentOutputSnapshotRaw = t, l.currentOutputSnapshotResolved = h, l.currentWriteId = Tr(e), a.splice(a.indexOf(s), 1), r = r.concat(ms(e.serverSyncTree_, l.path, h, l.currentWriteId, l.applyLocally)), r = r.concat(ys(e.serverSyncTree_, s, !0))
                    } else u = !0, d = "nodata", r = r.concat(ys(e.serverSyncTree_, l.currentWriteId, !0))
                } ur(e.eventQueue_, i, r), r = [], u && (t[o].status = 2, h = t[o].unwatcher, setTimeout(h, 0), t[o].onComplete && ("nodata" === d ? s.push((() => t[o].onComplete(null, !1, t[o].currentInputSnapshot))) : s.push((() => t[o].onComplete(Error(d), !1, null)))))
        }
        var h;
        Mr(e, e.transactionQueueTree_);
        for (let e = 0; e < s.length; e++) dt(s[e]);
        Dr(e, e.transactionQueueTree_)
    }(e, Or(e, i), s), s
}

function Ar(e, t) {
    let n, i = e.transactionQueueTree_;
    for (n = Bt(t); null !== n && void 0 === zs(i);) i = Hs(i, n), n = Bt(t = Ht(t));
    return i
}

function Or(e, t) {
    const n = [];
    return Lr(e, t, n), n.sort(((e, t) => e.order - t.order)), n
}

function Lr(e, t, n) {
    const i = zs(t);
    if (i)
        for (let e = 0; e < i.length; e++) n.push(i[e]);
    Ys(t, (t => {
        Lr(e, t, n)
    }))
}

function Mr(e, t) {
    const n = zs(t);
    if (n) {
        let e = 0;
        for (let t = 0; t < n.length; t++) 2 !== n[t].status && (n[e] = n[t], e++);
        n.length = e, Vs(t, n.length > 0 ? n : void 0)
    }
    Ys(t, (t => {
        Mr(e, t)
    }))
}

function Fr(e, t) {
    const n = Gs(Ar(e, t)),
        i = Hs(e.transactionQueueTree_, t);
    return function(e, t, n) {
        let i = n ? e : e.parent;
        for (; null !== i;) {
            if (t(i)) return !0;
            i = i.parent
        }
    }(i, (t => {
        qr(e, t)
    })), qr(e, i), Ks(i, (t => {
        qr(e, t)
    })), n
}

function qr(e, t) {
    const i = zs(t);
    if (i) {
        const s = [];
        let r = [],
            o = -1;
        for (let t = 0; t < i.length; t++) 3 === i[t].status || (1 === i[t].status ? (n(o === t - 1, "All SENT items should be at beginning of queue."), o = t, i[t].status = 3, i[t].abortReason = "set") : (n(0 === i[t].status, "Unexpected transaction status in abort"), i[t].unwatcher(), r = r.concat(ys(e.serverSyncTree_, i[t].currentWriteId, !0)), i[t].onComplete && s.push(i[t].onComplete.bind(null, Error("set"), !1, null)))); - 1 === o ? Vs(t, void 0) : i.length = o + 1, ur(e.eventQueue_, Gs(t), r);
        for (let e = 0; e < s.length; e++) dt(s[e])
    }
}
const Ur = (e, t) => {
        const n = Wr(e),
            i = n.namespace;
        "firebase.com" === n.domain && Je(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), i && "undefined" !== i || "localhost" === n.domain || Je("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
        const s = "ws" === n.scheme || "wss" === n.scheme;
        return {
            repoInfo: new Ct(n.host, n.secure, i, s, t, "", i !== n.subdomain),
            path: new Ut(n.pathString)
        }
    },
    Wr = e => {
        let t = "",
            n = "",
            i = "",
            s = "",
            r = "",
            o = !0,
            a = "https",
            h = 443;
        if ("string" == typeof e) {
            let l = e.indexOf("//");
            l >= 0 && (a = e.substring(0, l - 1), e = e.substring(l + 2));
            let c = e.indexOf("/"); - 1 === c && (c = e.length);
            let d = e.indexOf("?"); - 1 === d && (d = e.length), t = e.substring(0, Math.min(c, d)), c < d && (s = function(e) {
                let t = "";
                const n = e.split("/");
                for (let e = 0; e < n.length; e++)
                    if (n[e].length > 0) {
                        let i = n[e];
                        try {
                            i = decodeURIComponent(i.replace(/\+/g, " "))
                        } catch (e) {}
                        t += "/" + i
                    } return t
            }(e.substring(c, d)));
            const u = function(e) {
                const t = {};
                "?" === e.charAt(0) && (e = e.substring(1));
                for (const n of e.split("&")) {
                    if (0 === n.length) continue;
                    const i = n.split("=");
                    2 === i.length ? t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]) : Xe(`Invalid query segment '${n}' in query '${e}'`)
                }
                return t
            }(e.substring(Math.min(e.length, d)));
            l = t.indexOf(":"), l >= 0 ? (o = "https" === a || "wss" === a, h = parseInt(t.substring(l + 1), 10)) : l = t.length;
            const _ = t.slice(0, l);
            if ("localhost" === _.toLowerCase()) n = "localhost";
            else if (_.split(".").length <= 2) n = _;
            else {
                const e = t.indexOf(".");
                i = t.substring(0, e).toLowerCase(), n = t.substring(e + 1), r = i
            }
            "ns" in u && (r = u.ns)
        }
        return {
            host: t,
            port: h,
            domain: n,
            subdomain: i,
            secure: o,
            scheme: a,
            pathString: s,
            namespace: r
        }
    },
    Br = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
    jr = (() => {
        let e = 0;
        const t = [];
        return i => {
            const s = i === e;
            let r;
            e = i;
            const o = [, , , , , , , , ];
            for (r = 7; r >= 0; r--) o[r] = Br.charAt(i % 64), i = Math.floor(i / 64);
            n(0 === i, "Cannot push at time == 0");
            let a = o.join("");
            if (s) {
                for (r = 11; r >= 0 && 63 === t[r]; r--) t[r] = 0;
                t[r]++
            } else
                for (r = 0; r < 12; r++) t[r] = Math.floor(64 * Math.random());
            for (r = 0; r < 12; r++) a += Br.charAt(t[r]);
            return n(20 === a.length, "nextPushId: Length should be 20."), a
        }
    })();
class Hr {
    constructor(e, t, n, i) {
        this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = i
    }
    getPath() {
        const e = this.snapshot.ref;
        return "value" === this.eventType ? e._path : e.parent._path
    }
    getEventType() {
        return this.eventType
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.getPath().toString() + ":" + this.eventType + ":" + E(this.snapshot.exportVal())
    }
}
class zr {
    constructor(e, t, n) {
        this.eventRegistration = e, this.error = t, this.path = n
    }
    getPath() {
        return this.path
    }
    getEventType() {
        return "cancel"
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.path.toString() + ":cancel"
    }
}
class Vr {
    constructor(e, t) {
        this.snapshotCallback = e, this.cancelCallback = t
    }
    onValue(e, t) {
        this.snapshotCallback.call(null, e, t)
    }
    onCancel(e) {
        return n(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e)
    }
    get hasCancelCallback() {
        return !!this.cancelCallback
    }
    matches(e) {
        return this.snapshotCallback === e.snapshotCallback || void 0 !== this.snapshotCallback.userCallback && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
    }
}
class $r {
    constructor(e, t) {
        this._repo = e, this._path = t
    }
    cancel() {
        const e = new g;
        return Ir(this._repo, this._path, e.wrapCallback((() => {}))), e.promise
    }
    remove() {
        ar("OnDisconnect.remove", this._path);
        const e = new g;
        return Sr(this._repo, this._path, null, e.wrapCallback((() => {}))), e.promise
    }
    set(e) {
        ar("OnDisconnect.set", this._path), ir("OnDisconnect.set", e, this._path, !1);
        const t = new g;
        return Sr(this._repo, this._path, e, t.wrapCallback((() => {}))), t.promise
    }
    setWithPriority(e, t) {
        ar("OnDisconnect.setWithPriority", this._path), ir("OnDisconnect.setWithPriority", e, this._path, !1), ((e, t, n) => {
            if (!n || void 0 !== t) {
                if (Ze(t)) throw Error(x(e, "priority") + "is " + t.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                if (!nr(t)) throw Error(x(e, "priority") + "must be a valid Firebase priority (a string, finite number, server value, or null).")
            }
        })("OnDisconnect.setWithPriority", t, !1);
        const n = new g;
        return function(e, t, n, i, s) {
            const r = An(n, i);
            e.server_.onDisconnectPut(t.toString(), r.val(!0), ((n, i) => {
                "ok" === n && Gn(e.onDisconnect_, t, r), Nr(0, s, n, i)
            }))
        }(this._repo, this._path, e, t, n.wrapCallback((() => {}))), n.promise
    }
    update(e) {
        ar("OnDisconnect.update", this._path), ((e, t, n, i) => {
            if (i && void 0 === t) return;
            const s = x(e, "values");
            if (!t || "object" != typeof t || Array.isArray(t)) throw Error(s + " must be an object containing the children to replace.");
            const r = [];
            at(t, ((e, t) => {
                const i = new Ut(e);
                if (sr(s, t, Yt(n, i)), ".priority" === zt(i) && !nr(t)) throw Error(s + "contains an invalid value for '" + i.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                r.push(i)
            })), ((e, t) => {
                let n, i;
                for (n = 0; n < t.length; n++) {
                    i = t[n];
                    const s = Vt(i);
                    for (let t = 0; t < s.length; t++)
                        if (".priority" === s[t] && t === s.length - 1);
                        else if (!er(s[t])) throw Error(e + "contains an invalid key (" + s[t] + ") in path " + i.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
                }
                t.sort(Qt);
                let s = null;
                for (n = 0; n < t.length; n++) {
                    if (i = t[n], null !== s && Xt(s, i)) throw Error(e + "contains a path " + s.toString() + " that is ancestor of another path " + i.toString());
                    s = i
                }
            })(s, r)
        })("OnDisconnect.update", e, this._path, !1);
        const t = new g;
        return function(e, t, n, i) {
            if (k(n)) return Ke("onDisconnect().update() called with empty data.  Don't do anything."), void Nr(0, i, "ok", void 0);
            e.server_.onDisconnectMerge(t.toString(), n, ((s, r) => {
                "ok" === s && at(n, ((n, i) => {
                    const s = An(i);
                    Gn(e.onDisconnect_, Yt(t, n), s)
                })), Nr(0, i, s, r)
            }))
        }(this._repo, this._path, e, t.wrapCallback((() => {}))), t.promise
    }
}
class Yr {
    constructor(e, t, n, i) {
        this._repo = e, this._path = t, this._queryParams = n, this._orderByCalled = i
    }
    get key() {
        return Kt(this._path) ? null : zt(this._path)
    }
    get ref() {
        return new Kr(this._repo, this._path)
    }
    get _queryIdentifier() {
        const e = Vn(this._queryParams),
            t = rt(e);
        return "{}" === t ? "default" : t
    }
    get _queryObject() {
        return Vn(this._queryParams)
    }
    isEqual(e) {
        if (!((e = O(e)) instanceof Yr)) return !1;
        const t = this._repo === e._repo,
            n = Jt(this._path, e._path),
            i = this._queryIdentifier === e._queryIdentifier;
        return t && n && i
    }
    toJSON() {
        return this.toString()
    }
    toString() {
        return this._repo.toString() + function(e) {
            let t = "";
            for (let n = e.pieceNum_; n < e.pieces_.length; n++) "" !== e.pieces_[n] && (t += "/" + encodeURIComponent(e.pieces_[n] + ""));
            return t || "/"
        }(this._path)
    }
}
class Kr extends Yr {
    constructor(e, t) {
        super(e, t, new Hn, !1)
    }
    get parent() {
        const e = $t(this._path);
        return null === e ? null : new Kr(this._repo, e)
    }
    get root() {
        let e = this;
        for (; null !== e.parent;) e = e.parent;
        return e
    }
}
class Gr {
    constructor(e, t, n) {
        this._node = e, this.ref = t, this._index = n
    }
    get priority() {
        return this._node.getPriority().val()
    }
    get key() {
        return this.ref.key
    }
    get size() {
        return this._node.numChildren()
    }
    child(e) {
        const t = new Ut(e),
            n = Jr(this.ref, e);
        return new Gr(this._node.getChild(t), n, En)
    }
    exists() {
        return !this._node.isEmpty()
    }
    exportVal() {
        return this._node.val(!0)
    }
    forEach(e) {
        if (this._node.isLeafNode()) return !1;
        return !!this._node.forEachChild(this._index, ((t, n) => e(new Gr(n, Jr(this.ref, t), En))))
    }
    hasChild(e) {
        const t = new Ut(e);
        return !this._node.getChild(t).isEmpty()
    }
    hasChildren() {
        return !this._node.isLeafNode() && !this._node.isEmpty()
    }
    toJSON() {
        return this.exportVal()
    }
    val() {
        return this._node.val()
    }
}

function Qr(e, t) {
    return (e = O(e))._checkNotDeleted("ref"), void 0 !== t ? Jr(e._root, t) : e._root
}

function Jr(e, t) {
    return null === Bt((e = O(e))._path) ? or("child", "path", t, !1) : rr("child", "path", t, !1), new Kr(e._repo, Yt(e._path, t))
}

function Xr(e) {
    return e = O(e), new $r(e._repo, e._path)
}

function Zr(e) {
    return ar("remove", e._path), eo(e, null)
}

function eo(e, t) {
    e = O(e), ar("set", e._path), ir("set", t, e._path, !1);
    const n = new g;
    return function(e, t, n, i, s) {
        Rr(e, "set", {
            path: t.toString(),
            value: n,
            priority: i
        });
        const r = Cr(e),
            o = An(n, i),
            a = ws(e.serverSyncTree_, t),
            h = Ws(o, a, r),
            l = Tr(e),
            c = ms(e.serverSyncTree_, t, h, l, !0);
        cr(e.eventQueue_, c), e.server_.put(t.toString(), o.val(!0), ((n, i) => {
            const r = "ok" === n;
            r || Xe("set at " + t + " failed: " + n);
            const o = ys(e.serverSyncTree_, l, !r);
            ur(e.eventQueue_, t, o), Nr(0, s, n, i)
        }));
        const d = Fr(e, t);
        xr(e, d), ur(e.eventQueue_, d, [])
    }(e._repo, e._path, t, null, n.wrapCallback((() => {}))), n.promise
}
class to {
    constructor(e) {
        this.callbackContext = e
    }
    respondsTo(e) {
        return "value" === e
    }
    createEvent(e, t) {
        const n = t._queryParams.getIndex();
        return new Hr("value", this, new Gr(e.snapshotNode, new Kr(t._repo, t._path), n))
    }
    getEventRunner(e) {
        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null)
    }
    createCancelEvent(e, t) {
        return this.callbackContext.hasCancelCallback ? new zr(this, e, t) : null
    }
    matches(e) {
        return e instanceof to && (!e.callbackContext || !this.callbackContext || e.callbackContext.matches(this.callbackContext))
    }
    hasAnyCallback() {
        return null !== this.callbackContext
    }
}
class no {
    constructor(e, t) {
        this.eventType = e, this.callbackContext = t
    }
    respondsTo(e) {
        let t = "children_added" === e ? "child_added" : e;
        return t = "children_removed" === t ? "child_removed" : t, this.eventType === t
    }
    createCancelEvent(e, t) {
        return this.callbackContext.hasCancelCallback ? new zr(this, e, t) : null
    }
    createEvent(e, t) {
        n(null != e.childName, "Child events should have a childName.");
        const i = Jr(new Kr(t._repo, t._path), e.childName),
            s = t._queryParams.getIndex();
        return new Hr(e.type, this, new Gr(e.snapshotNode, i, s), e.prevName)
    }
    getEventRunner(e) {
        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, e.prevName)
    }
    matches(e) {
        return e instanceof no && (this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext)))
    }
    hasAnyCallback() {
        return !!this.callbackContext
    }
}

function io(e, t, n, i, s) {
    let r;
    if ("object" == typeof i && (r = void 0, s = i), "function" == typeof i && (r = i), s && s.onlyOnce) {
        const t = n,
            i = (n, i) => {
                kr(e._repo, e, a), t(n, i)
            };
        i.userCallback = n.userCallback, i.context = n.context, n = i
    }
    const o = new Vr(n, r || void 0),
        a = "value" === t ? new to(o) : new no(t, o);
    return function(e, t, n) {
        let i;
        i = ".info" === Bt(t._path) ? bs(e.infoSyncTree_, t, n) : bs(e.serverSyncTree_, t, n), dr(e.eventQueue_, t._path, i)
    }(e._repo, e, a), () => kr(e._repo, e, a)
}

function so(e, t, n, i) {
    return io(e, "value", t, n, i)
}

function ro(e, t, n, i) {
    return io(e, "child_added", t, n, i)
}

function oo(e, t, n) {
    let i = null;
    const s = n ? new Vr(n) : null;
    "value" === t ? i = new to(s) : t && (i = new no(t, s)), kr(e._repo, e, i)
}! function(e) {
    n(!is, "__referenceConstructor has already been defined"), is = e
}(Kr),
function(e) {
    n(!ss, "__referenceConstructor has already been defined"), ss = e
}(Kr);
const ao = "FIREBASE_DATABASE_EMULATOR_HOST",
    ho = {};
let lo = !1;

function co(e, t, n, i, s) {
    let r = i || e.options.databaseURL;
    void 0 === r && (e.options.projectId || Je("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), Ke("Using default host for project ", e.options.projectId), r = e.options.projectId + "-default-rtdb.firebaseio.com");
    let o, a, h = Ur(r, s),
        l = h.repoInfo;
    "undefined" != typeof process && process.env && (a = process.env[ao]), a ? (o = !0, r = `http://${a}?ns=${l.namespace}`, h = Ur(r, s), l = h.repoInfo) : o = !h.repoInfo.secure;
    const c = s && o ? new ft(ft.OWNER) : new pt(e.name, e.options, t);
    hr("Invalid Firebase Database URL", h), Kt(h.path) || Je("Database URL must point to the root of a Firebase Database (not including a child path).");
    const d = function(e, t, n, i) {
        let s = ho[t.name];
        s || (s = {}, ho[t.name] = s);
        let r = s[e.toURLString()];
        r && Je("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
        return r = new mr(e, lo, n, i), s[e.toURLString()] = r, r
    }(l, e, c, new _t(e.name, n));
    return new _o(d, e)
}

function uo(e, t) {
    const n = ho[t];
    n && n[e.key] === e || Je(`Database ${t}(${e.repoInfo_}) has already been deleted.`),
        function(e) {
            e.persistentConnection_ && e.persistentConnection_.interrupt(fr)
        }(e), delete n[e.key]
}
class _o {
    constructor(e, t) {
        this._repoInternal = e, this.app = t, this.type = "database", this._instanceStarted = !1
    }
    get _repo() {
        return this._instanceStarted || (yr(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal
    }
    get _root() {
        return this._rootInternal || (this._rootInternal = new Kr(this._repo, Wt())), this._rootInternal
    }
    _delete() {
        return null !== this._rootInternal && (uo(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve()
    }
    _checkNotDeleted(e) {
        null === this._rootInternal && Je("Cannot call " + e + " on a deleted database.")
    }
}

function po(e = function(e = ue) {
    const t = pe.get(e);
    if (!t && e === ue && f()) return Ce();
    if (!t) throw ye.create("no-app", {
        appName: e
    });
    return t
}(), t) {
    const n = function(e, t) {
        const n = e.container.getProvider("heartbeat").getImmediate({
            optional: !0
        });
        return n && n.triggerHeartbeat(), e.container.getProvider(t)
    }(e, "database").getImmediate({
        identifier: t
    });
    if (!n._instanceStarted) {
        const e = p("database");
        e && function(e, t, n, i = {}) {
            e = O(e), e._checkNotDeleted("useEmulator"), e._instanceStarted && Je("Cannot call useEmulator() after instance has already been initialized.");
            const s = e._repoInternal;
            let r;
            if (s.repoInfo_.nodeAdmin) i.mockUserToken && Je('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), r = new ft(ft.OWNER);
            else if (i.mockUserToken) {
                const t = "string" == typeof i.mockUserToken ? i.mockUserToken : function(e, t) {
                    if (e.uid) throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                    const n = t || "demo-project",
                        i = e.iat || 0,
                        s = e.sub || e.user_id;
                    if (!s) throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
                    const r = Object.assign({
                        iss: "https://securetoken.google.com/" + n,
                        aud: n,
                        iat: i,
                        exp: i + 3600,
                        auth_time: i,
                        sub: s,
                        user_id: s,
                        firebase: {
                            sign_in_provider: "custom",
                            identities: {}
                        }
                    }, e);
                    return [h(JSON.stringify({
                        alg: "none",
                        type: "JWT"
                    })), h(JSON.stringify(r)), ""].join(".")
                }(i.mockUserToken, e.app.options.projectId);
                r = new ft(t)
            }! function(e, t, n, i) {
                e.repoInfo_ = new Ct(`${t}:${n}`, !1, e.repoInfo_.namespace, e.repoInfo_.webSocketOnly, e.repoInfo_.nodeAdmin, e.repoInfo_.persistenceKey, e.repoInfo_.includeNamespaceInQueryParams, !0), i && (e.authTokenProvider_ = i)
            }(s, t, n, r)
        }(n, ...e)
    }
    return n
}
rn.prototype.simpleListen = function(e, t) {
        this.sendRequest("q", {
            p: e
        }, t)
    }, rn.prototype.echo = function(e, t) {
        this.sendRequest("echo", {
            d: e
        }, t)
    },
    function(e) {
        ! function(e) {
            Me = e
        }("10.8.0"), me(new L("database", ((e, {
            instanceIdentifier: t
        }) => co(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"), e.getProvider("app-check-internal"), t)), "PUBLIC").setMultipleInstances(!0)), be(Oe, Le, e), be(Oe, Le, "esm2017")
    }();

function fo(e) {
    const t = new Uint8Array(e);
    for (let n = 0; n < e; n++) t[n] = 256 * Math.random() | 0;
    return t
}

function go() {
    if ("undefined" == typeof globalThis) return null;
    const e = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
    };
    return e.RTCPeerConnection ? e : null
}

function mo(e, t) {
    return Object.defineProperty(e, "code", {
        value: t,
        enumerable: !0,
        configurable: !0
    }), e
}

function yo(e) {
    return e.replace(/a=ice-options:trickle\s\n/g, "")
}
class vo {
    constructor(e = {}) {
        if (this._map = new Map, this._id = fo(4).toString("hex").slice(0, 7), this._doDebug = e.debug, this._debug("new peer %o", e), this.channelName = e.initiator ? e.channelName || fo(20).toString("hex") : null, this.initiator = e.initiator || !1, this.channelConfig = e.channelConfig || vo.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, vo.config, e.config), this.offerOptions = e.offerOptions || {}, this.answerOptions = e.answerOptions || {}, this.sdpTransform = e.sdpTransform || (e => e), this.streams = e.streams || (e.stream ? [e.stream] : []), this.trickle = void 0 === e.trickle || e.trickle, this.allowHalfTrickle = void 0 !== e.allowHalfTrickle && e.allowHalfTrickle, this.iceCompleteTimeout = e.iceCompleteTimeout || 5e3, this.destroyed = !1, this.destroying = !1, this._connected = !1, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, this._wrtc = e.wrtc && "object" == typeof e.wrtc ? e.wrtc : go(), !this._wrtc) throw "undefined" == typeof window ? mo(Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT") : mo(Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
        this._pcReady = !1, this._channelReady = !1, this._iceComplete = !1, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = !1, this._firstNegotiation = !0, this._batchedNegotiation = !1, this._queuedNegotiation = !1, this._sendersAwaitingStable = [], this._senderMap = new Map, this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
        try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config)
        } catch (e) {
            return void this.destroy(mo(e, "ERR_PC_CONSTRUCTOR"))
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
            this.destroy(mo(e, "ERR_PC_PEER_IDENTITY"))
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
            if (this.destroyed) throw mo(Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
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
                this.destroy(mo(e, "ERR_SET_REMOTE_DESCRIPTION"))
            })), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || this.destroy(mo(Error("signal() called with invalid signal data"), "ERR_SIGNALING"))
        }
    }
    _addIceCandidate(e) {
        const t = new this._wrtc.RTCIceCandidate(e);
        this._pc.addIceCandidate(t).catch((e => {
            !t.address || t.address.endsWith(".local") ? console.warn("Ignoring unsupported ICE candidate.") : this.destroy(mo(e, "ERR_ADD_ICE_CANDIDATE"))
        }))
    }
    send(e) {
        if (!this.destroying) {
            if (this.destroyed) throw mo(Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
            this._channel.send(e)
        }
    }
    addTransceiver(e, t) {
        if (!this.destroying) {
            if (this.destroyed) throw mo(Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
            if (this._debug("addTransceiver()"), this.initiator) try {
                this._pc.addTransceiver(e, t), this._needsNegotiation()
            } catch (e) {
                this.destroy(mo(e, "ERR_ADD_TRANSCEIVER"))
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
            if (this.destroyed) throw mo(Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
            this._debug("addStream()"), e.getTracks().forEach((t => {
                this.addTrack(t, e)
            }))
        }
    }
    addTrack(e, t) {
        if (this.destroying) return;
        if (this.destroyed) throw mo(Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTrack()");
        const n = this._senderMap.get(e) || new Map;
        let i = n.get(t);
        if (i) throw i.removed ? mo(Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED") : mo(Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
        i = this._pc.addTrack(e, t), n.set(t, i), this._senderMap.set(e, n), this._needsNegotiation()
    }
    replaceTrack(e, t, n) {
        if (this.destroying) return;
        if (this.destroyed) throw mo(Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("replaceTrack()");
        const i = this._senderMap.get(e),
            s = i ? i.get(n) : null;
        if (!s) throw mo(Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        t && this._senderMap.set(t, i), null != s.replaceTrack ? s.replaceTrack(t) : this.destroy(mo(Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"))
    }
    removeTrack(e, t) {
        if (this.destroying) return;
        if (this.destroyed) throw mo(Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSender()");
        const n = this._senderMap.get(e),
            i = n ? n.get(t) : null;
        if (!i) throw mo(Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        try {
            i.removed = !0, this._pc.removeTrack(i)
        } catch (e) {
            "NS_ERROR_UNEXPECTED" === e.name ? this._sendersAwaitingStable.push(i) : this.destroy(mo(e, "ERR_REMOVE_TRACK"))
        }
        this._needsNegotiation()
    }
    removeStream(e) {
        if (!this.destroying) {
            if (this.destroyed) throw mo(Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
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
            if (this.destroyed) throw mo(Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
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
        if (!e.channel) return this.destroy(mo(Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        this._channel = e.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = 65536), this.channelName = this._channel.label, this._channel.onmessage = e => {
            this._onChannelMessage(e)
        }, this._channel.onbufferedamountlow = () => {
            this._onChannelBufferedAmountLow()
        }, this._channel.onopen = () => {
            this._onChannelOpen()
        }, this._channel.onclose = () => {
            this._onChannelClose()
        }, this._channel.onerror = e => {
            this.destroy(mo(e, "ERR_DATA_CHANNEL"))
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
            this.trickle || this.allowHalfTrickle || (e.sdp = yo(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
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
                this.destroy(mo(e, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((e => {
            this.destroy(mo(e, "ERR_CREATE_OFFER"))
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
            this.trickle || this.allowHalfTrickle || (e.sdp = yo(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
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
                this.destroy(mo(e, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((e => {
            this.destroy(mo(e, "ERR_CREATE_ANSWER"))
        }))
    }
    _onConnectionStateChange() {
        this.destroyed || "failed" === this._pc.connectionState && this.destroy(mo(Error("Connection failed."), "ERR_CONNECTION_FAILURE"))
    }
    _onIceStateChange() {
        if (this.destroyed) return;
        const e = this._pc.iceConnectionState,
            t = this._pc.iceGatheringState;
        this._debug("iceStateChange (connection: %s) (gathering: %s)", e, t), this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.destroy(mo(Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === e && this.destroy(mo(Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"))
    }
    getStats(e) {
        const t = e => ("[object Array]" === {}.toString.call(e.values) && e.values.forEach((t => {
            Object.assign(e, t)
        })), e);
        0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((n => {
            const i = [];
            n.forEach((e => {
                i.push(t(e))
            })), e(null, i)
        }), (t => e(t))) : this._pc.getStats.length > 0 ? this._pc.getStats((n => {
            if (this.destroyed) return;
            const i = [];
            n.result().forEach((e => {
                const n = {};
                e.names().forEach((t => {
                    n[t] = e.stat(t)
                })), n.id = e.id, n.type = e.type, n.timestamp = e.timestamp, i.push(t(n))
            })), e(null, i)
        }), (t => e(t))) : e(null, [])
    }
    _maybeReady() {
        if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = !0;
        const e = () => {
            this.destroyed || this.getStats(((t, n) => {
                if (this.destroyed) return;
                t && (n = []);
                const i = {},
                    s = {},
                    r = {};
                let o = !1;
                n.forEach((e => {
                    "remotecandidate" !== e.type && "remote-candidate" !== e.type || (i[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (s[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (r[e.id] = e)
                }));
                const a = e => {
                    o = !0;
                    let t = s[e.localCandidateId];
                    t && (t.ip || t.address) ? (this.localAddress = t.ip || t.address, this.localPort = Number(t.port)) : t && t.ipAddress ? (this.localAddress = t.ipAddress, this.localPort = Number(t.portNumber)) : "string" == typeof e.googLocalAddress && (t = e.googLocalAddress.split(":"), this.localAddress = t[0], this.localPort = Number(t[1])), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                    let n = i[e.remoteCandidateId];
                    n && (n.ip || n.address) ? (this.remoteAddress = n.ip || n.address, this.remotePort = Number(n.port)) : n && n.ipAddress ? (this.remoteAddress = n.ipAddress, this.remotePort = Number(n.portNumber)) : "string" == typeof e.googRemoteAddress && (n = e.googRemoteAddress.split(":"), this.remoteAddress = n[0], this.remotePort = Number(n[1])), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort)
                };
                if (n.forEach((e => {
                        "transport" === e.type && e.selectedCandidatePairId && a(r[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && a(e)
                    })), o || Object.keys(r).length && !Object.keys(s).length) {
                    if (this._connecting = !1, this._connected = !0, this._chunk) {
                        try {
                            this.send(this._chunk)
                        } catch (t) {
                            return this.destroy(mo(t, "ERR_DATA_CHANNEL"))
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
        const n = this._map;
        n.has(e) || n.set(e, new Set), n.get(e).add(t)
    }
    off(e, t) {
        const n = this._map,
            i = n.get(e);
        i && (i.delete(t), 0 === i.size && n.delete(e))
    }
    once(e, t) {
        const n = (...i) => {
            this.off(e, n), t(...i)
        };
        this.on(e, n)
    }
    emit(e, ...t) {
        const n = this._map;
        if (n.has(e))
            for (const i of n.get(e)) try {
                i(...t)
            } catch (e) {
                console.error(e)
            }
    }
}
vo.WEBRTC_SUPPORT = !!go(), vo.config = {
    iceServers: [{
        urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
    }],
    sdpSemantics: "unified-plan"
}, vo.channelConfig = {};
const Co = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
    bo = "Trystero",
    wo = Array(20).fill().map((() => Co[Math.floor(62 * Math.random())])).join("");
const {
    keys: Eo,
    values: To,
    entries: Io,
    fromEntries: So
} = Object, ko = () => {}, Ro = e => Error(`${bo}: ${e}`), No = e => (new TextEncoder).encode(e), Po = e => (new TextDecoder).decode(e), Do = So(["close", "connect", "data", "error", "signal", "stream", "track"].map((e => [e, e]))), xo = Object.getPrototypeOf(Uint8Array), Ao = 16369, Oo = 255, Lo = "bufferedamountlow";
var Mo = (e, t) => {
    const n = {},
        i = {},
        s = {},
        r = {},
        o = {},
        a = {},
        h = (e, t) => (e ? Array.isArray(e) ? e : [e] : Eo(n)).flatMap((e => {
            const i = n[e];
            return i ? t(e, i) : (console.warn(`${bo}: no peer with id ${e} found`), [])
        })),
        l = e => {
            if (i[e]) return [i[e].send, i[e].setOnComplete, i[e].setOnProgress];
            if (!e) throw Ro("action type argument is required");
            const t = No(e);
            if (t.byteLength > 12) throw Ro(`action type string "${e}" (${t.byteLength}b) exceeds byte limit (12). Hint: choose a shorter name.`);
            const s = new Uint8Array(12);
            s.set(t);
            let r = 0;
            return i[e] = {
                onComplete: ko,
                onProgress: ko,
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
                    if (i && "object" != typeof i) throw Ro("action meta argument must be an object");
                    if (void 0 === e) throw Ro("action data cannot be undefined");
                    const a = "string" != typeof e,
                        l = e instanceof Blob,
                        c = l || e instanceof ArrayBuffer || e instanceof xo;
                    if (i && !c) throw Ro("action meta argument can only be used with binary data");
                    const d = c ? new Uint8Array(l ? await e.arrayBuffer() : e) : No(a ? JSON.stringify(e) : e),
                        u = i ? No(JSON.stringify(i)) : null,
                        _ = Math.ceil(d.byteLength / Ao) + (i ? 1 : 0) || 1,
                        p = Array(_).fill().map(((e, t) => {
                            const n = t === _ - 1,
                                o = i && 0 === t,
                                h = new Uint8Array(15 + (o ? u.byteLength : n ? d.byteLength - Ao * (_ - (i ? 2 : 1)) : Ao));
                            return h.set(s), h.set([r], 12), h.set([n | o << 1 | c << 2 | a << 3], 13), h.set([Math.round((t + 1) / _ * Oo)], 14), h.set(i ? o ? u : d.subarray((t - 1) * Ao, t * Ao) : d.subarray(t * Ao, (t + 1) * Ao), 15), h
                        }));
                    return r = r + 1 & Oo, Promise.all(h(t, (async (e, t) => {
                        const s = t._channel;
                        let r = 0;
                        for (; r < _;) {
                            const a = p[r];
                            if (s.bufferedAmount > s.bufferedAmountLowThreshold && await new Promise((e => {
                                    const t = () => {
                                        s.removeEventListener(Lo, t), e()
                                    };
                                    s.addEventListener(Lo, t)
                                })), !n[e]) break;
                            t.send(a), r++, o && o(a[14] / Oo, e, i)
                        }
                    })))
                }
            }, [i[e].send, i[e].setOnComplete, i[e].setOnProgress]
        },
        c = (e, t) => {
            const n = new Uint8Array(t),
                r = Po(n.subarray(0, 12)).replaceAll("\0", ""),
                [o] = n.subarray(12, 13),
                [a] = n.subarray(13, 14),
                [h] = n.subarray(14, 15),
                l = n.subarray(15),
                c = !!(1 & a),
                d = !!(2 & a),
                u = !!(4 & a),
                _ = !!(8 & a);
            if (!i[r]) throw Ro(`received message with unregistered type (${r})`);
            s[e] || (s[e] = {}), s[e][r] || (s[e][r] = {});
            let p = s[e][r][o];
            if (p || (p = s[e][r][o] = {
                    chunks: []
                }), d ? p.meta = JSON.parse(Po(l)) : p.chunks.push(l), i[r].onProgress(h / Oo, e, p.meta), !c) return;
            const f = new Uint8Array(p.chunks.reduce(((e, t) => e + t.byteLength), 0));
            if (p.chunks.reduce(((e, t) => (f.set(t, e), e + t.byteLength)), 0), u) i[r].onComplete(f, e, p.meta);
            else {
                const t = Po(f);
                i[r].onComplete(_ ? JSON.parse(t) : t, e)
            }
            delete s[e][r][o]
        },
        [d, u] = l("__91n6__"),
        [_, p] = l("__90n6__"),
        [f, g] = l("__516n4L__"),
        [m, y] = l("__57r34m__"),
        [v, C] = l("__7r4ck__");
    let b = ko,
        w = ko,
        E = ko,
        T = ko;
    return e(((e, t) => {
        if (n[t]) return;
        const i = c.bind(null, t);
        n[t] = e, e.on(Do.signal, (e => f(e, t))), e.on(Do.close, (() => (e => {
            n[e] && (delete n[e], delete s[e], delete r[e], w(e))
        })(t))), e.on(Do.data, i), e.on(Do.stream, (e => {
            E(e, t, o[t]), delete o[t]
        })), e.on(Do.track, ((e, n) => {
            T(e, n, t, a[t]), delete a[t]
        })), e.on(Do.error, (e => {
            "ERR_DATA_CHANNEL" !== e.code && console.error(e)
        })), b(t), e.__drainEarlyData(i)
    })), u(((e, t) => _("", t))), p(((e, t) => {
        r[t] && (r[t](), delete r[t])
    })), g(((e, t) => {
        n[t] && n[t].signal(e)
    })), y(((e, t) => o[t] = e)), C(((e, t) => a[t] = e)), {
        makeAction: l,
        async ping(e) {
            if (!e) throw Ro("ping() must be called with target peer ID");
            const t = Date.now();
            return d("", e), await new Promise((t => r[e] = t)), Date.now() - t
        },
        leave() {
            Io(n).forEach((([e, t]) => {
                t.destroy(), delete n[e]
            })), t()
        },
        getPeers() {
            return So(Io(n).map((([e, t]) => [e, t._pc])))
        },
        addStream(e, t, n) {
            return h(t, (async (t, i) => {
                n && await m(n, t), i.addStream(e)
            }))
        },
        removeStream(e, t) {
            return h(t, ((t, n) => n.removeStream(e)))
        },
        addTrack(e, t, n, i) {
            return h(n, (async (n, s) => {
                i && await v(i, n), s.addTrack(e, t)
            }))
        },
        removeTrack(e, t, n) {
            return h(n, ((n, i) => i.removeTrack(e, t)))
        },
        replaceTrack(e, t, n, i, s) {
            return h(i, (async (i, r) => {
                s && await v(s, i), r.replaceTrack(e, t, n)
            }))
        },
        onPeerJoin(e) {
            return b = e
        },
        onPeerLeave(e) {
            return w = e
        },
        onPeerStream(e) {
            return E = e
        },
        onPeerTrack(e) {
            return T = e
        }
    }
};
const Fo = "AES-CBC",
    qo = async (e, t) => {
        const {
            c: n,
            iv: i
        } = JSON.parse(t);
        return Po(await crypto.subtle.decrypt({
            name: Fo,
            iv: new Uint8Array(i)
        }, await e, (e => {
            const t = atob(e);
            return new Uint8Array(t.length).map(((e, n) => t.charCodeAt(n))).buffer
        })(n)))
    }, Uo = "__trystero__", Wo = {}, Bo = {}, jo = (...e) => e.join("/"), Ho = e => {
        if (e.firebaseApp) {
            const t = e.firebaseApp.options.databaseURL;
            return Bo[t] || (Bo[t] = po(e.firebaseApp))
        }
        return Bo[e.appId] || (Bo[e.appId] = po(Ce({
            databaseURL: e.appId
        })))
    }, zo = ((e, t) => (n, i) => {
        if (e[i]) return e[i];
        if (!n) throw Ro("requires a config map as the first argument");
        if (!n.appId && !n.firebaseApp) throw Ro("config map is missing appId field");
        if (!i) throw Ro("namespace argument required");
        return e[i] = t(n, i)
    })(Wo, ((e, t) => {
        const n = Ho(e),
            i = {},
            s = {},
            r = {},
            o = e.rootPath || Uo,
            a = Qr(n, jo(o, t)),
            h = Jr(a, wo),
            l = e.password && (async (e, t) => crypto.subtle.importKey("raw", await crypto.subtle.digest({
                name: "SHA-256"
            }, No(`${e}:${t}`)), {
                name: Fo
            }, !1, ["encrypt", "decrypt"]))(e.password, t),
            c = [],
            d = (a, h) => {
                if (i[a] && !i[a].destroyed) return i[a];
                const c = ((e, t, n) => {
                    const i = new vo({
                            initiator: e,
                            trickle: t,
                            config: n
                        }),
                        s = e => i.__earlyDataBuffer.push(e);
                    return i.on(Do.data, s), i.__earlyDataBuffer = [], i.__drainEarlyData = e => {
                        i.off(Do.data, s), i.__earlyDataBuffer.forEach(e), delete i.__earlyDataBuffer, delete i.__drainEarlyData
                    }, i
                })(h, !0, e.rtcConfig);
                return c.once(Do.connect, (() => {
                    _(c, a), r[a] = !0
                })), c.on(Do.signal, (async e => {
                    if (r[a]) return;
                    const i = JSON.stringify(e),
                        s = function(e, t) {
                            e = O(e), ar("push", e._path), ir("push", t, e._path, !0);
                            const n = vr(e._repo),
                                i = jr(n),
                                s = Jr(e, i),
                                r = Jr(e, i);
                            let o;
                            return o = null != t ? eo(r, t).then((() => r)) : Promise.resolve(r), s.then = o.then.bind(o), s.catch = o.then.bind(o, void 0), s
                        }(Qr(n, jo(o, t, a, wo)));
                    Xr(s).remove(), eo(s, l ? await (async (e, t) => {
                        const n = crypto.getRandomValues(new Uint8Array(16));
                        return JSON.stringify({
                            c: (i = await crypto.subtle.encrypt({
                                name: Fo,
                                iv: n
                            }, await e, No(t)), btoa(String.fromCharCode.apply(null, new Uint8Array(i)))),
                            iv: [...n]
                        });
                        var i
                    })(l, i) : i)
                })), c.once(Do.close, (() => {
                    delete i[a], delete s[a], delete r[a]
                })), i[a] = c, c
            };
        let u = !1,
            _ = ko;
        return eo(h, {
            _: !0
        }), Xr(h).remove(), ro(h, (e => {
            const t = e.key;
            "_" === t || r[t] || c.push(ro(e.ref, (async e => {
                if (t in s || (s[t] = {}), e.key in s[t]) return;
                let n;
                s[t][e.key] = !0;
                try {
                    n = JSON.parse(l ? await qo(l, e.val()) : e.val())
                } catch (e) {
                    return void console.error(bo + ": received malformed SDP JSON")
                }
                d(t, !1).signal(n), Zr(e.ref)
            })))
        })), so(a, (() => u = !0), {
            onlyOnce: !0
        }), ro(a, (({
            key: e
        }) => {
            u && e !== wo && d(e, !0)
        })), Mo((e => _ = e), (() => {
            oo(h), Zr(h), oo(a), c.forEach((e => e())), delete Wo[t]
        }))
    })), Vo = (e, t) => new Promise((n => so(Qr(Ho(e), jo(e.rootPath || Uo, t)), (e => n(Eo(e.val() || {}))), {
        onlyOnce: !0
    })));
window.getOccupants = Vo
window.joinRoom = zo
window.selfId = wo