function t(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw Error("Wrong positive integer: " + t)
}

function e(t, ...e) {
    if (!((r = t) instanceof Uint8Array || null != r && "object" == typeof r && "Uint8Array" === r.constructor.name)) throw Error("Expected Uint8Array");
    var r;
    if (e.length > 0 && !e.includes(t.length)) throw Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
}

function r(t, e = !0) {
    if (t.destroyed) throw Error("Hash instance has been destroyed");
    if (e && t.finished) throw Error("Hash#digest() has already been called")
}
const n = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;

function i(t) {
    return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name
}
const s = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
    o = (t, e) => t << 32 - e | t >>> e;
if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])) throw Error("Non little-endian hardware is not supported");

function a(t) {
    if ("string" == typeof t && (t = function(t) {
            if ("string" != typeof t) throw Error("utf8ToBytes expected string, got " + typeof t);
            return new Uint8Array((new TextEncoder).encode(t))
        }(t)), !i(t)) throw Error("expected Uint8Array, got " + typeof t);
    return t
}
class c {
    clone() {
        return this._cloneInto()
    }
}

function h(t) {
    const e = e => t().update(a(e)).digest(),
        r = t();
    return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e
}

function d(t = 32) {
    if (n && "function" == typeof n.getRandomValues) return n.getRandomValues(new Uint8Array(t));
    throw Error("crypto.getRandomValues must be defined")
}
class l extends c {
    constructor(t, e, r, n) {
        super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = s(this.buffer)
    }
    update(t) {
        r(this);
        const {
            view: e,
            buffer: n,
            blockLen: i
        } = this, o = (t = a(t)).length;
        for (let r = 0; r < o;) {
            const a = Math.min(i - this.pos, o - r);
            if (a !== i) n.set(t.subarray(r, r + a), this.pos), this.pos += a, r += a, this.pos === i && (this.process(e, 0), this.pos = 0);
            else {
                const e = s(t);
                for (; i <= o - r; r += i) this.process(e, r)
            }
        }
        return this.length += t.length, this.roundClean(), this
    }
    digestInto(t) {
        r(this),
            function(t, r) {
                e(t);
                const n = r.outputLen;
                if (t.length < n) throw Error("digestInto() expects output buffer of length at least " + n)
            }(t, this), this.finished = !0;
        const {
            buffer: n,
            view: i,
            blockLen: o,
            isLE: a
        } = this;
        let {
            pos: c
        } = this;
        n[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > o - c && (this.process(i, 0), c = 0);
        for (let t = c; t < o; t++) n[t] = 0;
        ! function(t, e, r, n) {
            if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, n);
            const i = BigInt(32),
                s = BigInt(4294967295),
                o = Number(r >> i & s),
                a = Number(r & s),
                c = n ? 4 : 0,
                h = n ? 0 : 4;
            t.setUint32(e + c, o, n), t.setUint32(e + h, a, n)
        }(i, o - 8, BigInt(8 * this.length), a), this.process(i, 0);
        const h = s(t),
            d = this.outputLen;
        if (d % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        const l = d / 4,
            u = this.get();
        if (l > u.length) throw Error("_sha2: outputLen bigger than state");
        for (let t = 0; t < l; t++) h.setUint32(4 * t, u[t], a)
    }
    digest() {
        const {
            buffer: t,
            outputLen: e
        } = this;
        this.digestInto(t);
        const r = t.slice(0, e);
        return this.destroy(), r
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: o
        } = this;
        return t.length = n, t.pos = o, t.finished = i, t.destroyed = s, n % e && t.buffer.set(r), t
    }
}
const u = (t, e, r) => t & e ^ t & r ^ e & r,
    f = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    g = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    p = new Uint32Array(64);
class y extends l {
    constructor() {
        super(64, 32, 8, !1), this.A = 0 | g[0], this.B = 0 | g[1], this.C = 0 | g[2], this.D = 0 | g[3], this.E = 0 | g[4], this.F = 0 | g[5], this.G = 0 | g[6], this.H = 0 | g[7]
    }
    get() {
        const {
            A: t,
            B: e,
            C: r,
            D: n,
            E: i,
            F: s,
            G: o,
            H: a
        } = this;
        return [t, e, r, n, i, s, o, a]
    }
    set(t, e, r, n, i, s, o, a) {
        this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | s, this.G = 0 | o, this.H = 0 | a
    }
    process(t, e) {
        for (let r = 0; r < 16; r++, e += 4) p[r] = t.getUint32(e, !1);
        for (let t = 16; t < 64; t++) {
            const e = p[t - 15],
                r = p[t - 2],
                n = o(e, 7) ^ o(e, 18) ^ e >>> 3,
                i = o(r, 17) ^ o(r, 19) ^ r >>> 10;
            p[t] = i + p[t - 7] + n + p[t - 16] | 0
        }
        let {
            A: r,
            B: n,
            C: i,
            D: s,
            E: a,
            F: c,
            G: h,
            H: d
        } = this;
        for (let t = 0; t < 64; t++) {
            const e = d + (o(a, 6) ^ o(a, 11) ^ o(a, 25)) + ((l = a) & c ^ ~l & h) + f[t] + p[t] | 0,
                g = (o(r, 2) ^ o(r, 13) ^ o(r, 22)) + u(r, n, i) | 0;
            d = h, h = c, c = a, a = s + e | 0, s = i, i = n, n = r, r = e + g | 0
        }
        var l;
        r = r + this.A | 0, n = n + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, h = h + this.G | 0, d = d + this.H | 0, this.set(r, n, i, s, a, c, h, d)
    }
    roundClean() {
        p.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
    }
}
const m = h((() => new y)),
    _ = BigInt(0),
    b = BigInt(1),
    E = BigInt(2);

function w(t) {
    return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name
}
const R = Array.from({
    length: 256
}, ((t, e) => e.toString(16).padStart(2, "0")));

function A(t) {
    if (!w(t)) throw Error("Uint8Array expected");
    let e = "";
    for (let r = 0; r < t.length; r++) e += R[t[r]];
    return e
}

function v(t) {
    const e = t.toString(16);
    return 1 & e.length ? "0" + e : e
}

function S(t) {
    if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
    return BigInt("" === t ? "0" : "0x" + t)
}
const T = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};

function C(t) {
    return t >= T._0 && t <= T._9 ? t - T._0 : t >= T._A && t <= T._F ? t - (T._A - 10) : t >= T._a && t <= T._f ? t - (T._a - 10) : void 0
}

function B(t) {
    if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
    const e = t.length,
        r = e / 2;
    if (e % 2) throw Error("padded hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(r);
    for (let e = 0, i = 0; e < r; e++, i += 2) {
        const r = C(t.charCodeAt(i)),
            s = C(t.charCodeAt(i + 1));
        if (void 0 === r || void 0 === s) {
            const e = t[i] + t[i + 1];
            throw Error('hex string expected, got non-hex character "' + e + '" at index ' + i)
        }
        n[e] = 16 * r + s
    }
    return n
}

function I(t) {
    return S(A(t))
}

function N(t) {
    if (!w(t)) throw Error("Uint8Array expected");
    return S(A(Uint8Array.from(t).reverse()))
}

function O(t, e) {
    return B(t.toString(16).padStart(2 * e, "0"))
}

function k(t, e) {
    return O(t, e).reverse()
}

function x(t, e, r) {
    let n;
    if ("string" == typeof e) try {
        n = B(e)
    } catch (r) {
        throw Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)
    } else {
        if (!w(e)) throw Error(t + " must be hex string or Uint8Array");
        n = Uint8Array.from(e)
    }
    const i = n.length;
    if ("number" == typeof r && i !== r) throw Error(`${t} expected ${r} bytes, got ${i}`);
    return n
}

function D(...t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (!w(n)) throw Error("Uint8Array expected");
        e += n.length
    }
    let r = new Uint8Array(e),
        n = 0;
    for (let e = 0; e < t.length; e++) {
        const i = t[e];
        r.set(i, n), n += i.length
    }
    return r
}
const L = t => (E << BigInt(t - 1)) - b,
    P = t => new Uint8Array(t),
    q = t => Uint8Array.from(t);

function U(t, e, r) {
    if ("number" != typeof t || t < 2) throw Error("hashLen must be a number");
    if ("number" != typeof e || e < 2) throw Error("qByteLen must be a number");
    if ("function" != typeof r) throw Error("hmacFn must be a function");
    let n = P(t),
        i = P(t),
        s = 0;
    const o = () => {
            n.fill(1), i.fill(0), s = 0
        },
        a = (...t) => r(i, n, ...t),
        c = (t = P()) => {
            i = a(q([0]), t), n = a(), 0 !== t.length && (i = a(q([1]), t), n = a())
        },
        h = () => {
            if (s++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0;
            const r = [];
            for (; t < e;) {
                n = a();
                const e = n.slice();
                r.push(e), t += n.length
            }
            return D(...r)
        };
    return (t, e) => {
        let r;
        for (o(), c(t); !(r = e(h()));) c();
        return o(), r
    }
}
const H = {
    bigint(t) {
        return "bigint" == typeof t
    },
    function(t) {
        return "function" == typeof t
    },
    boolean(t) {
        return "boolean" == typeof t
    },
    string(t) {
        return "string" == typeof t
    },
    stringOrUint8Array(t) {
        return "string" == typeof t || w(t)
    },
    isSafeInteger(t) {
        return Number.isSafeInteger(t)
    },
    array(t) {
        return Array.isArray(t)
    },
    field(t, e) {
        return e.Fp.isValid(t)
    },
    hash(t) {
        return "function" == typeof t && Number.isSafeInteger(t.outputLen)
    }
};

function $(t, e, r = {}) {
    const n = (e, r, n) => {
        const i = H[r];
        if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
        const s = t[e];
        if (!(n && void 0 === s || i(s, t))) throw Error(`Invalid param ${e+""}=${s} (${typeof s}), expected ${r}`)
    };
    for (const [t, r] of Object.entries(e)) n(t, r, !1);
    for (const [t, e] of Object.entries(r)) n(t, e, !0);
    return t
}
var F = Object.freeze({
    __proto__: null,
    bitGet(t, e) {
        return t >> BigInt(e) & b
    },
    bitLen(t) {
        let e;
        for (e = 0; t > _; t >>= b, e += 1);
        return e
    },
    bitMask: L,
    bitSet(t, e, r) {
        return t | (r ? b : _) << BigInt(e)
    },
    bytesToHex: A,
    bytesToNumberBE: I,
    bytesToNumberLE: N,
    concatBytes: D,
    createHmacDrbg: U,
    ensureBytes: x,
    equalBytes(t, e) {
        if (t.length !== e.length) return !1;
        let r = 0;
        for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
        return 0 === r
    },
    hexToBytes: B,
    hexToNumber: S,
    isBytes: w,
    numberToBytesBE: O,
    numberToBytesLE: k,
    numberToHexUnpadded: v,
    numberToVarBytesBE(t) {
        return B(v(t))
    },
    utf8ToBytes(t) {
        if ("string" != typeof t) throw Error("utf8ToBytes expected string, got " + typeof t);
        return new Uint8Array((new TextEncoder).encode(t))
    },
    validateObject: $
});
const M = BigInt(0),
    z = BigInt(1),
    j = BigInt(2),
    V = BigInt(3),
    K = BigInt(4),
    Y = BigInt(5),
    Z = BigInt(8);

function W(t, e) {
    const r = t % e;
    return r >= M ? r : e + r
}

function G(t, e, r) {
    if (r <= M || e < M) throw Error("Expected power/modulo > 0");
    if (r === z) return M;
    let n = z;
    for (; e > M;) e & z && (n = n * t % r), t = t * t % r, e >>= z;
    return n
}

function J(t, e, r) {
    let n = t;
    for (; e-- > M;) n *= n, n %= r;
    return n
}

function Q(t, e) {
    if (t === M || e <= M) throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let r = W(t, e),
        n = e,
        i = M,
        s = z;
    for (; r !== M;) {
        const t = n % r,
            e = i - s * (n / r);
        n = r, r = t, i = s, s = e
    }
    if (n !== z) throw Error("invert: does not exist");
    return W(i, e)
}

function X(t) {
    if (t % K === V) {
        const e = (t + z) / K;
        return function(t, r) {
            const n = t.pow(r, e);
            if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
            return n
        }
    }
    if (t % Z === Y) {
        const e = (t - Y) / Z;
        return function(t, r) {
            const n = t.mul(r, j),
                i = t.pow(n, e),
                s = t.mul(r, i),
                o = t.mul(t.mul(s, j), i),
                a = t.mul(s, t.sub(o, t.ONE));
            if (!t.eql(t.sqr(a), r)) throw Error("Cannot find square root");
            return a
        }
    }
    return function(t) {
        const e = (t - z) / j;
        let r, n, i;
        for (r = t - z, n = 0; r % j === M; r /= j, n++);
        for (i = j; i < t && G(i, e, t) !== t - z; i++);
        if (1 === n) {
            const e = (t + z) / K;
            return (t, r) => {
                const n = t.pow(r, e);
                if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                return n
            }
        }
        const s = (r + z) / j;
        return (t, o) => {
            if (t.pow(o, e) === t.neg(t.ONE)) throw Error("Cannot find square root");
            let a = n,
                c = t.pow(t.mul(t.ONE, i), r),
                h = t.pow(o, s),
                d = t.pow(o, r);
            for (; !t.eql(d, t.ONE);) {
                if (t.eql(d, t.ZERO)) return t.ZERO;
                let e = 1;
                for (let r = t.sqr(d); e < a && !t.eql(r, t.ONE); e++) r = t.sqr(r);
                const r = t.pow(c, z << BigInt(a - e - 1));
                c = t.sqr(r), h = t.mul(h, r), d = t.mul(d, c), a = e
            }
            return h
        }
    }(t)
}
BigInt(9), BigInt(16);
const tt = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

function et(t, e) {
    const r = void 0 !== e ? e : t.toString(2).length;
    return {
        nBitLength: r,
        nByteLength: Math.ceil(r / 8)
    }
}

function rt(t) {
    if ("bigint" != typeof t) throw Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8)
}

function nt(t) {
    const e = rt(t);
    return e + Math.ceil(e / 2)
}
const it = BigInt(0),
    st = BigInt(1);

function ot(t) {
    return $(t.Fp, tt.reduce(((t, e) => (t[e] = "function", t)), {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    })), $(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...et(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    })
}
const {
    bytesToNumberBE: at,
    hexToBytes: ct
} = F, ht = {
    Err: class extends Error {
        constructor(t = "") {
            super(t)
        }
    },
    _parseInt(t) {
        const {
            Err: e
        } = ht;
        if (t.length < 2 || 2 !== t[0]) throw new e("Invalid signature integer tag");
        const r = t[1],
            n = t.subarray(2, r + 2);
        if (!r || n.length !== r) throw new e("Invalid signature integer: wrong length");
        if (128 & n[0]) throw new e("Invalid signature integer: negative");
        if (0 === n[0] && !(128 & n[1])) throw new e("Invalid signature integer: unnecessary leading zero");
        return {
            d: at(n),
            l: t.subarray(r + 2)
        }
    },
    toSig(t) {
        const {
            Err: e
        } = ht, r = "string" == typeof t ? ct(t) : t;
        if (!w(r)) throw Error("ui8a expected");
        let n = r.length;
        if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
        if (r[1] !== n - 2) throw new e("Invalid signature: incorrect length");
        const {
            d: i,
            l: s
        } = ht._parseInt(r.subarray(2)), {
            d: o,
            l: a
        } = ht._parseInt(s);
        if (a.length) throw new e("Invalid signature: left bytes after parsing");
        return {
            r: i,
            s: o
        }
    },
    hexFromSig(t) {
        const e = t => 8 & Number.parseInt(t[0], 16) ? "00" + t : t,
            r = t => {
                const e = t.toString(16);
                return 1 & e.length ? "0" + e : e
            },
            n = e(r(t.s)),
            i = e(r(t.r)),
            s = n.length / 2,
            o = i.length / 2,
            a = r(s),
            c = r(o);
        return `30${r(o+s+4)}02${c}${i}02${a}${n}`
    }
}, dt = BigInt(0), lt = BigInt(1);
BigInt(2);
const ut = BigInt(3);

function ft(t) {
    const e = function(t) {
            const e = ot(t);
            $(e, {
                a: "field",
                b: "field"
            }, {
                allowedPrivateKeyLengths: "array",
                wrapPrivateKey: "boolean",
                isTorsionFree: "function",
                clearCofactor: "function",
                allowInfinityPoint: "boolean",
                fromBytes: "function",
                toBytes: "function"
            });
            const {
                endo: r,
                Fp: n,
                a: i
            } = e;
            if (r) {
                if (!n.eql(i, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
            }
            return Object.freeze({
                ...e
            })
        }(t),
        {
            Fp: r
        } = e,
        n = e.toBytes || ((t, e) => {
            const n = e.toAffine();
            return D(Uint8Array.from([4]), r.toBytes(n.x), r.toBytes(n.y))
        }),
        i = e.fromBytes || (t => {
            const e = t.subarray(1);
            return {
                x: r.fromBytes(e.subarray(0, r.BYTES)),
                y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES))
            }
        });

    function s(t) {
        const {
            a: n,
            b: i
        } = e, s = r.sqr(t), o = r.mul(s, t);
        return r.add(r.add(o, r.mul(t, n)), i)
    }
    if (!r.eql(r.sqr(e.Gy), s(e.Gx))) throw Error("bad generator point: equation left != right");

    function o(t) {
        return "bigint" == typeof t && dt < t && t < e.n
    }

    function a(t) {
        if (!o(t)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
    }

    function c(t) {
        const {
            allowedPrivateKeyLengths: r,
            nByteLength: n,
            wrapPrivateKey: i,
            n: s
        } = e;
        if (r && "bigint" != typeof t) {
            if (w(t) && (t = A(t)), "string" != typeof t || !r.includes(t.length)) throw Error("Invalid key");
            t = t.padStart(2 * n, "0")
        }
        let o;
        try {
            o = "bigint" == typeof t ? t : I(x("private key", t, n))
        } catch (e) {
            throw Error(`private key must be ${n} bytes, hex or bigint, not ${typeof t}`)
        }
        return i && (o = W(o, s)), a(o), o
    }
    const h = new Map;

    function d(t) {
        if (!(t instanceof l)) throw Error("ProjectivePoint expected")
    }
    class l {
        constructor(t, e, n) {
            if (this.px = t, this.py = e, this.pz = n, null == t || !r.isValid(t)) throw Error("x required");
            if (null == e || !r.isValid(e)) throw Error("y required");
            if (null == n || !r.isValid(n)) throw Error("z required")
        }
        static fromAffine(t) {
            const {
                x: e,
                y: n
            } = t || {};
            if (!t || !r.isValid(e) || !r.isValid(n)) throw Error("invalid affine point");
            if (t instanceof l) throw Error("projective point not allowed");
            const i = t => r.eql(t, r.ZERO);
            return i(e) && i(n) ? l.ZERO : new l(e, n, r.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(t) {
            const e = r.invertBatch(t.map((t => t.pz)));
            return t.map(((t, r) => t.toAffine(e[r]))).map(l.fromAffine)
        }
        static fromHex(t) {
            const e = l.fromAffine(i(x("pointHex", t)));
            return e.assertValidity(), e
        }
        static fromPrivateKey(t) {
            return l.BASE.multiply(c(t))
        }
        _setWindowSize(t) {
            this._WINDOW_SIZE = t, h.delete(this)
        }
        assertValidity() {
            if (this.is0()) {
                if (e.allowInfinityPoint && !r.is0(this.py)) return;
                throw Error("bad point: ZERO")
            }
            const {
                x: t,
                y: n
            } = this.toAffine();
            if (!r.isValid(t) || !r.isValid(n)) throw Error("bad point: x or y not FE");
            const i = r.sqr(n),
                o = s(t);
            if (!r.eql(i, o)) throw Error("bad point: equation left != right");
            if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
        }
        hasEvenY() {
            const {
                y: t
            } = this.toAffine();
            if (r.isOdd) return !r.isOdd(t);
            throw Error("Field doesn't support isOdd")
        }
        equals(t) {
            d(t);
            const {
                px: e,
                py: n,
                pz: i
            } = this, {
                px: s,
                py: o,
                pz: a
            } = t, c = r.eql(r.mul(e, a), r.mul(s, i)), h = r.eql(r.mul(n, a), r.mul(o, i));
            return c && h
        }
        negate() {
            return new l(this.px, r.neg(this.py), this.pz)
        }
        double() {
            const {
                a: t,
                b: n
            } = e, i = r.mul(n, ut), {
                px: s,
                py: o,
                pz: a
            } = this;
            let c = r.ZERO,
                h = r.ZERO,
                d = r.ZERO,
                u = r.mul(s, s),
                f = r.mul(o, o),
                g = r.mul(a, a),
                p = r.mul(s, o);
            return p = r.add(p, p), d = r.mul(s, a), d = r.add(d, d), c = r.mul(t, d), h = r.mul(i, g), h = r.add(c, h), c = r.sub(f, h), h = r.add(f, h), h = r.mul(c, h), c = r.mul(p, c), d = r.mul(i, d), g = r.mul(t, g), p = r.sub(u, g), p = r.mul(t, p), p = r.add(p, d), d = r.add(u, u), u = r.add(d, u), u = r.add(u, g), u = r.mul(u, p), h = r.add(h, u), g = r.mul(o, a), g = r.add(g, g), u = r.mul(g, p), c = r.sub(c, u), d = r.mul(g, f), d = r.add(d, d), d = r.add(d, d), new l(c, h, d)
        }
        add(t) {
            d(t);
            const {
                px: n,
                py: i,
                pz: s
            } = this, {
                px: o,
                py: a,
                pz: c
            } = t;
            let h = r.ZERO,
                u = r.ZERO,
                f = r.ZERO;
            const g = e.a,
                p = r.mul(e.b, ut);
            let y = r.mul(n, o),
                m = r.mul(i, a),
                _ = r.mul(s, c),
                b = r.add(n, i),
                E = r.add(o, a);
            b = r.mul(b, E), E = r.add(y, m), b = r.sub(b, E), E = r.add(n, s);
            let w = r.add(o, c);
            return E = r.mul(E, w), w = r.add(y, _), E = r.sub(E, w), w = r.add(i, s), h = r.add(a, c), w = r.mul(w, h), h = r.add(m, _), w = r.sub(w, h), f = r.mul(g, E), h = r.mul(p, _), f = r.add(h, f), h = r.sub(m, f), f = r.add(m, f), u = r.mul(h, f), m = r.add(y, y), m = r.add(m, y), _ = r.mul(g, _), E = r.mul(p, E), m = r.add(m, _), _ = r.sub(y, _), _ = r.mul(g, _), E = r.add(E, _), y = r.mul(m, E), u = r.add(u, y), y = r.mul(w, E), h = r.mul(b, h), h = r.sub(h, y), y = r.mul(b, m), f = r.mul(w, f), f = r.add(f, y), new l(h, u, f)
        }
        subtract(t) {
            return this.add(t.negate())
        }
        is0() {
            return this.equals(l.ZERO)
        }
        wNAF(t) {
            return f.wNAFCached(this, h, t, (t => {
                const e = r.invertBatch(t.map((t => t.pz)));
                return t.map(((t, r) => t.toAffine(e[r]))).map(l.fromAffine)
            }))
        }
        multiplyUnsafe(t) {
            const n = l.ZERO;
            if (t === dt) return n;
            if (a(t), t === lt) return this;
            const {
                endo: i
            } = e;
            if (!i) return f.unsafeLadder(this, t);
            let {
                k1neg: s,
                k1: o,
                k2neg: c,
                k2: h
            } = i.splitScalar(t), d = n, u = n, g = this;
            for (; o > dt || h > dt;) o & lt && (d = d.add(g)), h & lt && (u = u.add(g)), g = g.double(), o >>= lt, h >>= lt;
            return s && (d = d.negate()), c && (u = u.negate()), u = new l(r.mul(u.px, i.beta), u.py, u.pz), d.add(u)
        }
        multiply(t) {
            a(t);
            let n, i, s = t;
            const {
                endo: o
            } = e;
            if (o) {
                const {
                    k1neg: t,
                    k1: e,
                    k2neg: a,
                    k2: c
                } = o.splitScalar(s);
                let {
                    p: h,
                    f: d
                } = this.wNAF(e), {
                    p: u,
                    f: g
                } = this.wNAF(c);
                h = f.constTimeNegate(t, h), u = f.constTimeNegate(a, u), u = new l(r.mul(u.px, o.beta), u.py, u.pz), n = h.add(u), i = d.add(g)
            } else {
                const {
                    p: t,
                    f: e
                } = this.wNAF(s);
                n = t, i = e
            }
            return l.normalizeZ([n, i])[0]
        }
        multiplyAndAddUnsafe(t, e, r) {
            const n = l.BASE,
                i = (t, e) => e !== dt && e !== lt && t.equals(n) ? t.multiply(e) : t.multiplyUnsafe(e),
                s = i(this, e).add(i(t, r));
            return s.is0() ? void 0 : s
        }
        toAffine(t) {
            const {
                px: e,
                py: n,
                pz: i
            } = this, s = this.is0();
            null == t && (t = s ? r.ONE : r.inv(i));
            const o = r.mul(e, t),
                a = r.mul(n, t),
                c = r.mul(i, t);
            if (s) return {
                x: r.ZERO,
                y: r.ZERO
            };
            if (!r.eql(c, r.ONE)) throw Error("invZ was invalid");
            return {
                x: o,
                y: a
            }
        }
        isTorsionFree() {
            const {
                h: t,
                isTorsionFree: r
            } = e;
            if (t === lt) return !0;
            if (r) return r(l, this);
            throw Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {
                h: t,
                clearCofactor: r
            } = e;
            return t === lt ? this : r ? r(l, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(t = !0) {
            return this.assertValidity(), n(l, this, t)
        }
        toHex(t = !0) {
            return A(this.toRawBytes(t))
        }
    }
    l.BASE = new l(e.Gx, e.Gy, r.ONE), l.ZERO = new l(r.ZERO, r.ONE, r.ZERO);
    const u = e.nBitLength,
        f = function(t, e) {
            const r = (t, e) => {
                    const r = e.negate();
                    return t ? r : e
                },
                n = t => ({
                    windows: Math.ceil(e / t) + 1,
                    windowSize: 2 ** (t - 1)
                });
            return {
                constTimeNegate: r,
                unsafeLadder(e, r) {
                    let n = t.ZERO,
                        i = e;
                    for (; r > it;) r & st && (n = n.add(i)), i = i.double(), r >>= st;
                    return n
                },
                precomputeWindow(t, e) {
                    const {
                        windows: r,
                        windowSize: i
                    } = n(e), s = [];
                    let o = t,
                        a = o;
                    for (let t = 0; t < r; t++) {
                        a = o, s.push(a);
                        for (let t = 1; t < i; t++) a = a.add(o), s.push(a);
                        o = a.double()
                    }
                    return s
                },
                wNAF(e, i, s) {
                    const {
                        windows: o,
                        windowSize: a
                    } = n(e);
                    let c = t.ZERO,
                        h = t.BASE;
                    const d = BigInt(2 ** e - 1),
                        l = 2 ** e,
                        u = BigInt(e);
                    for (let t = 0; t < o; t++) {
                        const e = t * a;
                        let n = Number(s & d);
                        s >>= u, n > a && (n -= l, s += st);
                        const o = e,
                            f = e + Math.abs(n) - 1,
                            g = t % 2 != 0,
                            p = n < 0;
                        0 === n ? h = h.add(r(g, i[o])) : c = c.add(r(p, i[f]))
                    }
                    return {
                        p: c,
                        f: h
                    }
                },
                wNAFCached(t, e, r, n) {
                    const i = t._WINDOW_SIZE || 1;
                    let s = e.get(t);
                    return s || (s = this.precomputeWindow(t, i), 1 !== i && e.set(t, n(s))), this.wNAF(i, s, r)
                }
            }
        }(l, e.endo ? Math.ceil(u / 2) : u);
    return {
        CURVE: e,
        ProjectivePoint: l,
        normPrivateKeyToScalar: c,
        weierstrassEquation: s,
        isWithinCurveOrder: o
    }
}

function gt(t) {
    const e = function(t) {
            const e = ot(t);
            return $(e, {
                hash: "hash",
                hmac: "function",
                randomBytes: "function"
            }, {
                bits2int: "function",
                bits2int_modN: "function",
                lowS: "boolean"
            }), Object.freeze({
                lowS: !0,
                ...e
            })
        }(t),
        {
            Fp: r,
            n
        } = e,
        i = r.BYTES + 1,
        s = 2 * r.BYTES + 1;

    function o(t) {
        return W(t, n)
    }

    function a(t) {
        return Q(t, n)
    }
    const {
        ProjectivePoint: c,
        normPrivateKeyToScalar: h,
        weierstrassEquation: d,
        isWithinCurveOrder: l
    } = ft({
        ...e,
        toBytes(t, e, n) {
            const i = e.toAffine(),
                s = r.toBytes(i.x),
                o = D;
            return n ? o(Uint8Array.from([e.hasEvenY() ? 2 : 3]), s) : o(Uint8Array.from([4]), s, r.toBytes(i.y))
        },
        fromBytes(t) {
            const e = t.length,
                n = t[0],
                o = t.subarray(1);
            if (e !== i || 2 !== n && 3 !== n) {
                if (e === s && 4 === n) {
                    return {
                        x: r.fromBytes(o.subarray(0, r.BYTES)),
                        y: r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES))
                    }
                }
                throw Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`)
            } {
                const t = I(o);
                if (!(dt < (a = t) && a < r.ORDER)) throw Error("Point is not on curve");
                const e = d(t);
                let i = r.sqrt(e);
                return 1 == (1 & n) !== ((i & lt) === lt) && (i = r.neg(i)), {
                    x: t,
                    y: i
                }
            }
            var a
        }
    }), u = t => A(O(t, e.nByteLength));

    function f(t) {
        return t > n >> lt
    }
    const g = (t, e, r) => I(t.slice(e, r));
    class p {
        constructor(t, e, r) {
            this.r = t, this.s = e, this.recovery = r, this.assertValidity()
        }
        static fromCompact(t) {
            const r = e.nByteLength;
            return t = x("compactSignature", t, 2 * r), new p(g(t, 0, r), g(t, r, 2 * r))
        }
        static fromDER(t) {
            const {
                r: e,
                s: r
            } = ht.toSig(x("DER", t));
            return new p(e, r)
        }
        assertValidity() {
            if (!l(this.r)) throw Error("r must be 0 < r < CURVE.n");
            if (!l(this.s)) throw Error("s must be 0 < s < CURVE.n")
        }
        addRecoveryBit(t) {
            return new p(this.r, this.s, t)
        }
        recoverPublicKey(t) {
            const {
                r: n,
                s: i,
                recovery: s
            } = this, h = b(x("msgHash", t));
            if (null == s || ![0, 1, 2, 3].includes(s)) throw Error("recovery id invalid");
            const d = 2 === s || 3 === s ? n + e.n : n;
            if (d >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
            const l = 0 == (1 & s) ? "02" : "03",
                f = c.fromHex(l + u(d)),
                g = a(d),
                p = o(-h * g),
                y = o(i * g),
                m = c.BASE.multiplyAndAddUnsafe(f, p, y);
            if (!m) throw Error("point at infinify");
            return m.assertValidity(), m
        }
        hasHighS() {
            return f(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new p(this.r, o(-this.s), this.recovery) : this
        }
        toDERRawBytes() {
            return B(this.toDERHex())
        }
        toDERHex() {
            return ht.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return B(this.toCompactHex())
        }
        toCompactHex() {
            return u(this.r) + u(this.s)
        }
    }
    const y = {
        isValidPrivateKey(t) {
            try {
                return h(t), !0
            } catch (t) {
                return !1
            }
        },
        normPrivateKeyToScalar: h,
        randomPrivateKey() {
            const t = nt(e.n);
            return function(t, e, r = !1) {
                const n = t.length,
                    i = rt(e),
                    s = nt(e);
                if (n < 16 || n < s || n > 1024) throw Error(`expected ${s}-1024 bytes of input, got ${n}`);
                const o = W(r ? I(t) : N(t), e - z) + z;
                return r ? k(o, i) : O(o, i)
            }(e.randomBytes(t), e.n)
        },
        precompute: (t = 8, e = c.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), e)
    };

    function m(t) {
        const e = w(t),
            r = "string" == typeof t,
            n = (e || r) && t.length;
        return e ? n === i || n === s : r ? n === 2 * i || n === 2 * s : t instanceof c
    }
    const _ = e.bits2int || (t => {
            const r = I(t),
                n = 8 * t.length - e.nBitLength;
            return n > 0 ? r >> BigInt(n) : r
        }),
        b = e.bits2int_modN || (t => o(_(t))),
        E = L(e.nBitLength);

    function R(t) {
        if ("bigint" != typeof t) throw Error("bigint expected");
        if (!(dt <= t && t < E)) throw Error("bigint expected < 2^" + e.nBitLength);
        return O(t, e.nByteLength)
    }

    function v(t, n, i = S) {
        if (["recovered", "canonical"].some((t => t in i))) throw Error("sign() legacy options not supported");
        const {
            hash: s,
            randomBytes: d
        } = e;
        let {
            lowS: u,
            prehash: g,
            extraEntropy: y
        } = i;
        null == u && (u = !0), t = x("msgHash", t), g && (t = x("prehashed msgHash", s(t)));
        const m = b(t),
            E = h(n),
            w = [R(E), R(m)];
        if (null != y) {
            const t = !0 === y ? d(r.BYTES) : y;
            w.push(x("extraEntropy", t))
        }
        const A = D(...w),
            v = m;
        return {
            seed: A,
            k2sig(t) {
                const e = _(t);
                if (!l(e)) return;
                const r = a(e),
                    n = c.BASE.multiply(e).toAffine(),
                    i = o(n.x);
                if (i === dt) return;
                const s = o(r * o(v + i * E));
                if (s === dt) return;
                let h = (n.x === i ? 0 : 2) | Number(n.y & lt),
                    d = s;
                return u && f(s) && (d = function(t) {
                    return f(t) ? o(-t) : t
                }(s), h ^= 1), new p(i, d, h)
            }
        }
    }
    const S = {
            lowS: e.lowS,
            prehash: !1
        },
        T = {
            lowS: e.lowS,
            prehash: !1
        };
    return c.BASE._setWindowSize(8), {
        CURVE: e,
        getPublicKey(t, e = !0) {
            return c.fromPrivateKey(t).toRawBytes(e)
        },
        getSharedSecret(t, e, r = !0) {
            if (m(t)) throw Error("first arg must be private key");
            if (!m(e)) throw Error("second arg must be public key");
            return c.fromHex(e).multiply(h(t)).toRawBytes(r)
        },
        sign(t, r, n = S) {
            const {
                seed: i,
                k2sig: s
            } = v(t, r, n), o = e;
            return U(o.hash.outputLen, o.nByteLength, o.hmac)(i, s)
        },
        verify(t, r, n, i = T) {
            const s = t;
            if (r = x("msgHash", r), n = x("publicKey", n), "strict" in i) throw Error("options.strict was renamed to lowS");
            const {
                lowS: h,
                prehash: d
            } = i;
            let l, u;
            try {
                if ("string" == typeof s || w(s)) try {
                    l = p.fromDER(s)
                } catch (t) {
                    if (!(t instanceof ht.Err)) throw t;
                    l = p.fromCompact(s)
                } else {
                    if ("object" != typeof s || "bigint" != typeof s.r || "bigint" != typeof s.s) throw Error("PARSE");
                    {
                        const {
                            r: t,
                            s: e
                        } = s;
                        l = new p(t, e)
                    }
                }
                u = c.fromHex(n)
            } catch (t) {
                if ("PARSE" === t.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                return !1
            }
            if (h && l.hasHighS()) return !1;
            d && (r = e.hash(r));
            const {
                r: f,
                s: g
            } = l, y = b(r), m = a(g), _ = o(y * m), E = o(f * m), R = c.BASE.multiplyAndAddUnsafe(u, _, E)?.toAffine();
            return !!R && o(R.x) === f
        },
        ProjectivePoint: c,
        Signature: p,
        utils: y
    }
}
BigInt(4);
class pt extends c {
    constructor(e, r) {
        super(), this.finished = !1, this.destroyed = !1,
            function(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                t(e.outputLen), t(e.blockLen)
            }(e);
        const n = a(r);
        if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const i = this.blockLen,
            s = new Uint8Array(i);
        s.set(n.length > i ? e.create().update(n).digest() : n);
        for (let t = 0; t < s.length; t++) s[t] ^= 54;
        this.iHash.update(s), this.oHash = e.create();
        for (let t = 0; t < s.length; t++) s[t] ^= 106;
        this.oHash.update(s), s.fill(0)
    }
    update(t) {
        return r(this), this.iHash.update(t), this
    }
    digestInto(t) {
        r(this), e(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: o
        } = this;
        return t.finished = n, t.destroyed = i, t.blockLen = s, t.outputLen = o, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const yt = (t, e, r) => new pt(t, e).update(r).digest();

function mt(t) {
    return {
        hash: t,
        hmac(e, ...r) {
            return yt(t, e, function(...t) {
                let e = 0;
                for (let r = 0; r < t.length; r++) {
                    const n = t[r];
                    if (!i(n)) throw Error("Uint8Array expected");
                    e += n.length
                }
                const r = new Uint8Array(e);
                for (let e = 0, n = 0; e < t.length; e++) {
                    const i = t[e];
                    r.set(i, n), n += i.length
                }
                return r
            }(...r))
        },
        randomBytes: d
    }
}
yt.create = (t, e) => new pt(t, e);
const _t = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    bt = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    Et = BigInt(1),
    wt = BigInt(2),
    Rt = (t, e) => (t + e / wt) / e;

function At(t) {
    const e = _t,
        r = BigInt(3),
        n = BigInt(6),
        i = BigInt(11),
        s = BigInt(22),
        o = BigInt(23),
        a = BigInt(44),
        c = BigInt(88),
        h = t * t * t % e,
        d = h * h * t % e,
        l = J(d, r, e) * d % e,
        u = J(l, r, e) * d % e,
        f = J(u, wt, e) * h % e,
        g = J(f, i, e) * f % e,
        p = J(g, s, e) * g % e,
        y = J(p, a, e) * p % e,
        m = J(y, c, e) * y % e,
        _ = J(m, a, e) * p % e,
        b = J(_, r, e) * d % e,
        E = J(b, o, e) * g % e,
        w = J(E, n, e) * h % e,
        R = J(w, wt, e);
    if (!vt.eql(vt.sqr(R), t)) throw Error("Cannot find square root");
    return R
}
const vt = function(t, e, r = !1, n = {}) {
        if (t <= M) throw Error("Expected Field ORDER > 0, got " + t);
        const {
            nBitLength: i,
            nByteLength: s
        } = et(t, e);
        if (s > 2048) throw Error("Field lengths over 2048 bytes are not supported");
        const o = X(t),
            a = Object.freeze({
                ORDER: t,
                BITS: i,
                BYTES: s,
                MASK: L(i),
                ZERO: M,
                ONE: z,
                create(e) {
                    return W(e, t)
                },
                isValid(e) {
                    if ("bigint" != typeof e) throw Error("Invalid field element: expected bigint, got " + typeof e);
                    return M <= e && e < t
                },
                is0(t) {
                    return t === M
                },
                isOdd(t) {
                    return (t & z) === z
                },
                neg(e) {
                    return W(-e, t)
                },
                eql(t, e) {
                    return t === e
                },
                sqr(e) {
                    return W(e * e, t)
                },
                add(e, r) {
                    return W(e + r, t)
                },
                sub(e, r) {
                    return W(e - r, t)
                },
                mul(e, r) {
                    return W(e * r, t)
                },
                pow(t, e) {
                    return function(t, e, r) {
                        if (r < M) throw Error("Expected power > 0");
                        if (r === M) return t.ONE;
                        if (r === z) return e;
                        let n = t.ONE,
                            i = e;
                        for (; r > M;) r & z && (n = t.mul(n, i)), i = t.sqr(i), r >>= z;
                        return n
                    }(a, t, e)
                },
                div(e, r) {
                    return W(e * Q(r, t), t)
                },
                sqrN(t) {
                    return t * t
                },
                addN(t, e) {
                    return t + e
                },
                subN(t, e) {
                    return t - e
                },
                mulN(t, e) {
                    return t * e
                },
                inv(e) {
                    return Q(e, t)
                },
                sqrt: n.sqrt || (t => o(a, t)),
                invertBatch(t) {
                    return function(t, e) {
                        const r = Array(e.length),
                            n = e.reduce(((e, n, i) => t.is0(n) ? e : (r[i] = e, t.mul(e, n))), t.ONE),
                            i = t.inv(n);
                        return e.reduceRight(((e, n, i) => t.is0(n) ? e : (r[i] = t.mul(e, r[i]), t.mul(e, n))), i), r
                    }(a, t)
                },
                cmov(t, e, r) {
                    return r ? e : t
                },
                toBytes(t) {
                    return r ? k(t, s) : O(t, s)
                },
                fromBytes(t) {
                    if (t.length !== s) throw Error(`Fp.fromBytes: expected ${s}, got ${t.length}`);
                    return r ? N(t) : I(t)
                }
            });
        return Object.freeze(a)
    }(_t, void 0, void 0, {
        sqrt: At
    }),
    St = function(t, e) {
        const r = e => gt({
            ...t,
            ...mt(e)
        });
        return Object.freeze({
            ...r(e),
            create: r
        })
    }({
        a: BigInt(0),
        b: BigInt(7),
        Fp: vt,
        n: bt,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar(t) {
                const e = bt,
                    r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    n = -Et * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    s = r,
                    o = BigInt("0x100000000000000000000000000000000"),
                    a = Rt(s * t, e),
                    c = Rt(-n * t, e);
                let h = W(t - a * r - c * i, e),
                    d = W(-a * n - c * s, e);
                const l = h > o,
                    u = d > o;
                if (l && (h = e - h), u && (d = e - d), h > o || d > o) throw Error("splitScalar: Endomorphism failed, k=" + t);
                return {
                    k1neg: l,
                    k1: h,
                    k2neg: u,
                    k2: d
                }
            }
        }
    }, m),
    Tt = BigInt(0),
    Ct = t => "bigint" == typeof t && Tt < t && t < _t,
    Bt = t => "bigint" == typeof t && Tt < t && t < bt,
    It = {};

function Nt(t, ...e) {
    let r = It[t];
    if (void 0 === r) {
        const e = m(Uint8Array.from(t, (t => t.charCodeAt(0))));
        r = D(e, e), It[t] = r
    }
    return m(D(r, ...e))
}
const Ot = t => t.toRawBytes(!0).slice(1),
    kt = t => O(t, 32),
    xt = t => W(t, _t),
    Dt = t => W(t, bt),
    Lt = St.ProjectivePoint,
    Pt = (t, e, r) => Lt.BASE.multiplyAndAddUnsafe(t, e, r);

function qt(t) {
    let e = St.utils.normPrivateKeyToScalar(t),
        r = Lt.fromPrivateKey(e);
    return {
        scalar: r.hasEvenY() ? e : Dt(-e),
        bytes: Ot(r)
    }
}

function Ut(t) {
    if (!Ct(t)) throw Error("bad x: need 0 < x < p");
    const e = xt(t * t);
    let r = At(xt(e * t + BigInt(7)));
    r % wt !== Tt && (r = xt(-r));
    const n = new Lt(t, r, Et);
    return n.assertValidity(), n
}

function Ht(...t) {
    return Dt(I(Nt("BIP0340/challenge", ...t)))
}

function $t(t) {
    return qt(t).bytes
}

function Ft(t, e, r = d(32)) {
    const n = x("message", t),
        {
            bytes: i,
            scalar: s
        } = qt(e),
        o = x("auxRand", r, 32),
        a = kt(s ^ I(Nt("BIP0340/aux", o))),
        c = Nt("BIP0340/nonce", a, i, n),
        h = Dt(I(c));
    if (h === Tt) throw Error("sign failed: k is zero");
    const {
        bytes: l,
        scalar: u
    } = qt(h), f = Ht(l, i, n), g = new Uint8Array(64);
    if (g.set(l, 0), g.set(kt(Dt(u + f * s)), 32), !Mt(g, n, i)) throw Error("sign: Invalid signature produced");
    return g
}

function Mt(t, e, r) {
    const n = x("signature", t, 64),
        i = x("message", e),
        s = x("publicKey", r, 32);
    try {
        const t = Ut(I(s)),
            e = I(n.subarray(0, 32));
        if (!Ct(e)) return !1;
        const r = I(n.subarray(32, 64));
        if (!Bt(r)) return !1;
        const o = Ht(kt(e), Ot(t), i),
            a = Pt(t, r, Dt(-o));
        return !(!a || !a.hasEvenY() || a.toAffine().x !== e)
    } catch (t) {
        return !1
    }
}
const zt = (() => ({
    getPublicKey: $t,
    sign: Ft,
    verify: Mt,
    utils: {
        randomPrivateKey: St.utils.randomPrivateKey,
        lift_x: Ut,
        pointToBytes: Ot,
        numberToBytesBE: O,
        bytesToNumberBE: I,
        taggedHash: Nt,
        mod: W
    }
}))();

function jt(t) {
    const e = new Uint8Array(t);
    for (let r = 0; r < t; r++) e[r] = 256 * Math.random() | 0;
    return e
}

function Vt() {
    if ("undefined" == typeof globalThis) return null;
    const t = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
    };
    return t.RTCPeerConnection ? t : null
}

function Kt(t, e) {
    return Object.defineProperty(t, "code", {
        value: e,
        enumerable: !0,
        configurable: !0
    }), t
}

function Yt(t) {
    return t.replace(/a=ice-options:trickle\s\n/g, "")
}
class Zt {
    constructor(t = {}) {
        if (this._map = new Map, this._id = jt(4).toString("hex").slice(0, 7), this._doDebug = t.debug, this._debug("new peer %o", t), this.channelName = t.initiator ? t.channelName || jt(20).toString("hex") : null, this.initiator = t.initiator || !1, this.channelConfig = t.channelConfig || Zt.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, Zt.config, t.config), this.offerOptions = t.offerOptions || {}, this.answerOptions = t.answerOptions || {}, this.sdpTransform = t.sdpTransform || (t => t), this.streams = t.streams || (t.stream ? [t.stream] : []), this.trickle = void 0 === t.trickle || t.trickle, this.allowHalfTrickle = void 0 !== t.allowHalfTrickle && t.allowHalfTrickle, this.iceCompleteTimeout = t.iceCompleteTimeout || 5e3, this.destroyed = !1, this.destroying = !1, this._connected = !1, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, this._wrtc = t.wrtc && "object" == typeof t.wrtc ? t.wrtc : Vt(), !this._wrtc) throw "undefined" == typeof window ? Kt(Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT") : Kt(Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
        this._pcReady = !1, this._channelReady = !1, this._iceComplete = !1, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = !1, this._firstNegotiation = !0, this._batchedNegotiation = !1, this._queuedNegotiation = !1, this._sendersAwaitingStable = [], this._senderMap = new Map, this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
        try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config)
        } catch (t) {
            return void this.destroy(Kt(t, "ERR_PC_CONSTRUCTOR"))
        }
        this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId, this._pc.oniceconnectionstatechange = () => {
            this._onIceStateChange()
        }, this._pc.onicegatheringstatechange = () => {
            this._onIceStateChange()
        }, this._pc.onconnectionstatechange = () => {
            this._onConnectionStateChange()
        }, this._pc.onsignalingstatechange = () => {
            this._onSignalingStateChange()
        }, this._pc.onicecandidate = t => {
            this._onIceCandidate(t)
        }, "object" == typeof this._pc.peerIdentity && this._pc.peerIdentity.catch((t => {
            this.destroy(Kt(t, "ERR_PC_PEER_IDENTITY"))
        })), this.initiator || this.channelNegotiated ? this._setupData({
            channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
        }) : this._pc.ondatachannel = t => {
            this._setupData(t)
        }, this.streams && this.streams.forEach((t => {
            this.addStream(t)
        })), this._pc.ontrack = t => {
            this._onTrack(t)
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
    signal(t) {
        if (!this.destroying) {
            if (this.destroyed) throw Kt(Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
            if ("string" == typeof t) try {
                t = JSON.parse(t)
            } catch (e) {
                t = {}
            }
            this._debug("signal()"), t.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()), t.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), this.addTransceiver(t.transceiverRequest.kind, t.transceiverRequest.init)), t.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(t.candidate) : this._pendingCandidates.push(t.candidate)), t.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(t)).then((() => {
                this.destroyed || (this._pendingCandidates.forEach((t => {
                    this._addIceCandidate(t)
                })), this._pendingCandidates = [], "offer" === this._pc.remoteDescription.type && this._createAnswer())
            })).catch((t => {
                this.destroy(Kt(t, "ERR_SET_REMOTE_DESCRIPTION"))
            })), t.sdp || t.candidate || t.renegotiate || t.transceiverRequest || this.destroy(Kt(Error("signal() called with invalid signal data"), "ERR_SIGNALING"))
        }
    }
    _addIceCandidate(t) {
        const e = new this._wrtc.RTCIceCandidate(t);
        this._pc.addIceCandidate(e).catch((t => {
            !e.address || e.address.endsWith(".local") ? console.warn("Ignoring unsupported ICE candidate.") : this.destroy(Kt(t, "ERR_ADD_ICE_CANDIDATE"))
        }))
    }
    send(t) {
        if (!this.destroying) {
            if (this.destroyed) throw Kt(Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
            this._channel.send(t)
        }
    }
    addTransceiver(t, e) {
        if (!this.destroying) {
            if (this.destroyed) throw Kt(Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
            if (this._debug("addTransceiver()"), this.initiator) try {
                this._pc.addTransceiver(t, e), this._needsNegotiation()
            } catch (t) {
                this.destroy(Kt(t, "ERR_ADD_TRANSCEIVER"))
            } else this.emit("signal", {
                type: "transceiverRequest",
                transceiverRequest: {
                    kind: t,
                    init: e
                }
            })
        }
    }
    addStream(t) {
        if (!this.destroying) {
            if (this.destroyed) throw Kt(Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
            this._debug("addStream()"), t.getTracks().forEach((e => {
                this.addTrack(e, t)
            }))
        }
    }
    addTrack(t, e) {
        if (this.destroying) return;
        if (this.destroyed) throw Kt(Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTrack()");
        const r = this._senderMap.get(t) || new Map;
        let n = r.get(e);
        if (n) throw n.removed ? Kt(Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED") : Kt(Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
        n = this._pc.addTrack(t, e), r.set(e, n), this._senderMap.set(t, r), this._needsNegotiation()
    }
    replaceTrack(t, e, r) {
        if (this.destroying) return;
        if (this.destroyed) throw Kt(Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("replaceTrack()");
        const n = this._senderMap.get(t),
            i = n ? n.get(r) : null;
        if (!i) throw Kt(Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        e && this._senderMap.set(e, n), null != i.replaceTrack ? i.replaceTrack(e) : this.destroy(Kt(Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"))
    }
    removeTrack(t, e) {
        if (this.destroying) return;
        if (this.destroyed) throw Kt(Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSender()");
        const r = this._senderMap.get(t),
            n = r ? r.get(e) : null;
        if (!n) throw Kt(Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        try {
            n.removed = !0, this._pc.removeTrack(n)
        } catch (t) {
            "NS_ERROR_UNEXPECTED" === t.name ? this._sendersAwaitingStable.push(n) : this.destroy(Kt(t, "ERR_REMOVE_TRACK"))
        }
        this._needsNegotiation()
    }
    removeStream(t) {
        if (!this.destroying) {
            if (this.destroyed) throw Kt(Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
            this._debug("removeSenders()"), t.getTracks().forEach((e => {
                this.removeTrack(e, t)
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
            if (this.destroyed) throw Kt(Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
            this.initiator ? this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("start negotiation"), setTimeout((() => {
                this._createOffer()
            }), 0)) : this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("requesting negotiation from initiator"), this.emit("signal", {
                type: "renegotiate",
                renegotiate: !0
            })), this._isNegotiating = !0
        }
    }
    destroy(t) {
        this.destroyed || this.destroying || (this.destroying = !0, this._debug("destroying (error: %s)", t && (t.message || t)), queueMicrotask((() => {
            if (this.destroyed = !0, this.destroying = !1, this._debug("destroy (error: %s)", t && (t.message || t)), this._connected = !1, this._pcReady = !1, this._channelReady = !1, this._remoteTracks = null, this._remoteStreams = null, this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._channel) {
                try {
                    this._channel.close()
                } catch (t) {}
                this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, this._channel.onerror = null
            }
            if (this._pc) {
                try {
                    this._pc.close()
                } catch (t) {}
                this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, this._pc.ondatachannel = null
            }
            this._pc = null, this._channel = null, t && this.emit("error", t), this.emit("close")
        })))
    }
    _setupData(t) {
        if (!t.channel) return this.destroy(Kt(Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        this._channel = t.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = 65536), this.channelName = this._channel.label, this._channel.onmessage = t => {
            this._onChannelMessage(t)
        }, this._channel.onbufferedamountlow = () => {
            this._onChannelBufferedAmountLow()
        }, this._channel.onopen = () => {
            this._onChannelOpen()
        }, this._channel.onclose = () => {
            this._onChannelClose()
        }, this._channel.onerror = t => {
            this.destroy(Kt(t, "ERR_DATA_CHANNEL"))
        };
        let e = !1;
        this._closingInterval = setInterval((() => {
            this._channel && "closing" === this._channel.readyState ? (e && this._onChannelClose(), e = !0) : e = !1
        }), 5e3)
    }
    _startIceCompleteTimeout() {
        this.destroyed || this._iceCompleteTimer || (this._debug("started iceComplete timeout"), this._iceCompleteTimer = setTimeout((() => {
            this._iceComplete || (this._iceComplete = !0, this._debug("iceComplete timeout completed"), this.emit("iceTimeout"), this.emit("_iceComplete"))
        }), this.iceCompleteTimeout))
    }
    _createOffer() {
        this.destroyed || this._pc.createOffer(this.offerOptions).then((t => {
            if (this.destroyed) return;
            this.trickle || this.allowHalfTrickle || (t.sdp = Yt(t.sdp)), t.sdp = this.sdpTransform(t.sdp);
            const e = () => {
                if (this.destroyed) return;
                const e = this._pc.localDescription || t;
                this._debug("signal"), this.emit("signal", {
                    type: e.type,
                    sdp: e.sdp
                })
            };
            this._pc.setLocalDescription(t).then((() => {
                this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e))
            })).catch((t => {
                this.destroy(Kt(t, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((t => {
            this.destroy(Kt(t, "ERR_CREATE_OFFER"))
        }))
    }
    _requestMissingTransceivers() {
        this._pc.getTransceivers && this._pc.getTransceivers().forEach((t => {
            t.mid || !t.sender.track || t.requested || (t.requested = !0, this.addTransceiver(t.sender.track.kind))
        }))
    }
    _createAnswer() {
        this.destroyed || this._pc.createAnswer(this.answerOptions).then((t => {
            if (this.destroyed) return;
            this.trickle || this.allowHalfTrickle || (t.sdp = Yt(t.sdp)), t.sdp = this.sdpTransform(t.sdp);
            const e = () => {
                if (this.destroyed) return;
                const e = this._pc.localDescription || t;
                this._debug("signal"), this.emit("signal", {
                    type: e.type,
                    sdp: e.sdp
                }), this.initiator || this._requestMissingTransceivers()
            };
            this._pc.setLocalDescription(t).then((() => {
                this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e))
            })).catch((t => {
                this.destroy(Kt(t, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((t => {
            this.destroy(Kt(t, "ERR_CREATE_ANSWER"))
        }))
    }
    _onConnectionStateChange() {
        this.destroyed || "failed" === this._pc.connectionState && this.destroy(Kt(Error("Connection failed."), "ERR_CONNECTION_FAILURE"))
    }
    _onIceStateChange() {
        if (this.destroyed) return;
        const t = this._pc.iceConnectionState,
            e = this._pc.iceGatheringState;
        this._debug("iceStateChange (connection: %s) (gathering: %s)", t, e), this.emit("iceStateChange", t, e), "connected" !== t && "completed" !== t || (this._pcReady = !0, this._maybeReady()), "failed" === t && this.destroy(Kt(Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === t && this.destroy(Kt(Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"))
    }
    getStats(t) {
        const e = t => ("[object Array]" === {}.toString.call(t.values) && t.values.forEach((e => {
            Object.assign(t, e)
        })), t);
        0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((r => {
            const n = [];
            r.forEach((t => {
                n.push(e(t))
            })), t(null, n)
        }), (e => t(e))) : this._pc.getStats.length > 0 ? this._pc.getStats((r => {
            if (this.destroyed) return;
            const n = [];
            r.result().forEach((t => {
                const r = {};
                t.names().forEach((e => {
                    r[e] = t.stat(e)
                })), r.id = t.id, r.type = t.type, r.timestamp = t.timestamp, n.push(e(r))
            })), t(null, n)
        }), (e => t(e))) : t(null, [])
    }
    _maybeReady() {
        if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = !0;
        const t = () => {
            this.destroyed || this.getStats(((e, r) => {
                if (this.destroyed) return;
                e && (r = []);
                const n = {},
                    i = {},
                    s = {};
                let o = !1;
                r.forEach((t => {
                    "remotecandidate" !== t.type && "remote-candidate" !== t.type || (n[t.id] = t), "localcandidate" !== t.type && "local-candidate" !== t.type || (i[t.id] = t), "candidatepair" !== t.type && "candidate-pair" !== t.type || (s[t.id] = t)
                }));
                const a = t => {
                    o = !0;
                    let e = i[t.localCandidateId];
                    e && (e.ip || e.address) ? (this.localAddress = e.ip || e.address, this.localPort = Number(e.port)) : e && e.ipAddress ? (this.localAddress = e.ipAddress, this.localPort = Number(e.portNumber)) : "string" == typeof t.googLocalAddress && (e = t.googLocalAddress.split(":"), this.localAddress = e[0], this.localPort = Number(e[1])), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                    let r = n[t.remoteCandidateId];
                    r && (r.ip || r.address) ? (this.remoteAddress = r.ip || r.address, this.remotePort = Number(r.port)) : r && r.ipAddress ? (this.remoteAddress = r.ipAddress, this.remotePort = Number(r.portNumber)) : "string" == typeof t.googRemoteAddress && (r = t.googRemoteAddress.split(":"), this.remoteAddress = r[0], this.remotePort = Number(r[1])), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort)
                };
                if (r.forEach((t => {
                        "transport" === t.type && t.selectedCandidatePairId && a(s[t.selectedCandidatePairId]), ("googCandidatePair" === t.type && "true" === t.googActiveConnection || ("candidatepair" === t.type || "candidate-pair" === t.type) && t.selected) && a(t)
                    })), o || Object.keys(s).length && !Object.keys(i).length) {
                    if (this._connecting = !1, this._connected = !0, this._chunk) {
                        try {
                            this.send(this._chunk)
                        } catch (e) {
                            return this.destroy(Kt(e, "ERR_DATA_CHANNEL"))
                        }
                        this._chunk = null, this._debug('sent chunk from "write before connect"');
                        const t = this._cb;
                        this._cb = null, t(null)
                    }
                    "number" != typeof this._channel.bufferedAmountLowThreshold && (this._interval = setInterval((() => this._onInterval()), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect")
                } else setTimeout(t, 100)
            }))
        };
        t()
    }
    _onInterval() {
        !this._cb || !this._channel || this._channel.bufferedAmount > 65536 || this._onChannelBufferedAmountLow()
    }
    _onSignalingStateChange() {
        this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = !1, this._debug("flushing sender queue", this._sendersAwaitingStable), this._sendersAwaitingStable.forEach((t => {
            this._pc.removeTrack(t), this._queuedNegotiation = !0
        })), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._debug("flushing negotiation queue"), this._queuedNegotiation = !1, this._needsNegotiation()) : (this._debug("negotiated"), this.emit("negotiated"))), this._debug("signalingStateChange %s", this._pc.signalingState), this.emit("signalingStateChange", this._pc.signalingState))
    }
    _onIceCandidate(t) {
        this.destroyed || (t.candidate && this.trickle ? this.emit("signal", {
            type: "candidate",
            candidate: {
                candidate: t.candidate.candidate,
                sdpMLineIndex: t.candidate.sdpMLineIndex,
                sdpMid: t.candidate.sdpMid
            }
        }) : t.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), t.candidate && this._startIceCompleteTimeout())
    }
    _onChannelMessage(t) {
        if (this.destroyed) return;
        let e = t.data;
        e instanceof ArrayBuffer && (e = new Uint8Array(e)), this.emit("data", e)
    }
    _onChannelBufferedAmountLow() {
        if (this.destroyed || !this._cb) return;
        this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
        const t = this._cb;
        this._cb = null, t(null)
    }
    _onChannelOpen() {
        this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = !0, this._maybeReady())
    }
    _onChannelClose() {
        this.destroyed || (this._debug("on channel close"), this.destroy())
    }
    _onTrack(t) {
        this.destroyed || t.streams.forEach((e => {
            this._debug("on track"), this.emit("track", t.track, e), this._remoteTracks.push({
                track: t.track,
                stream: e
            }), this._remoteStreams.some((t => t.id === e.id)) || (this._remoteStreams.push(e), queueMicrotask((() => {
                this._debug("on stream"), this.emit("stream", e)
            })))
        }))
    }
    _debug(...t) {
        this._doDebug && (t[0] = "[" + this._id + "] " + t[0])
    }
    on(t, e) {
        const r = this._map;
        r.has(t) || r.set(t, new Set), r.get(t).add(e)
    }
    off(t, e) {
        const r = this._map,
            n = r.get(t);
        n && (n.delete(e), 0 === n.size && r.delete(t))
    }
    once(t, e) {
        const r = (...n) => {
            this.off(t, r), e(...n)
        };
        this.on(t, r)
    }
    emit(t, ...e) {
        const r = this._map;
        if (r.has(t))
            for (const n of r.get(t)) try {
                n(...e)
            } catch (t) {
                console.error(t)
            }
    }
}
Zt.WEBRTC_SUPPORT = !!Vt(), Zt.config = {
    iceServers: [{
        urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
    }],
    sdpSemantics: "unified-plan"
}, Zt.channelConfig = {};
const Wt = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
    Gt = (t, e, r) => {
        const n = new Zt({
                initiator: t,
                trickle: e,
                config: r
            }),
            i = t => n.__earlyDataBuffer.push(t);
        return n.on(he.data, i), n.__earlyDataBuffer = [], n.__drainEarlyData = t => {
            n.off(he.data, i), n.__earlyDataBuffer.forEach(t), delete n.__earlyDataBuffer, delete n.__drainEarlyData
        }, n
    },
    Jt = t => Array(t).fill().map((() => Wt[Math.floor(62 * Math.random())])).join(""),
    Qt = "Trystero",
    Xt = Jt(20),
    {
        keys: te,
        values: ee,
        entries: re,
        fromEntries: ne
    } = Object,
    ie = () => {},
    se = t => Error(`${Qt}: ${t}`),
    oe = t => (new TextEncoder).encode(t),
    ae = t => (new TextDecoder).decode(t),
    ce = t => t.reduce(((t, e) => t + e.toString(16).padStart(2, "0")), ""),
    he = ne(["close", "connect", "data", "error", "signal", "stream", "track"].map((t => [t, t]))),
    de = Object.getPrototypeOf(Uint8Array),
    le = 16369,
    ue = 255,
    fe = "bufferedamountlow";
var ge = (t, e) => {
    const r = {},
        n = {},
        i = {},
        s = {},
        o = {},
        a = {},
        c = (t, e) => (t ? Array.isArray(t) ? t : [t] : te(r)).flatMap((t => {
            const n = r[t];
            return n ? e(t, n) : (console.warn(`${Qt}: no peer with id ${t} found`), [])
        })),
        h = t => {
            if (n[t]) return [n[t].send, n[t].setOnComplete, n[t].setOnProgress];
            if (!t) throw se("action type argument is required");
            const e = oe(t);
            if (e.byteLength > 12) throw se(`action type string "${t}" (${e.byteLength}b) exceeds byte limit (12). Hint: choose a shorter name.`);
            const i = new Uint8Array(12);
            i.set(e);
            let s = 0;
            return n[t] = {
                onComplete: ie,
                onProgress: ie,
                setOnComplete(e) {
                    return n[t] = {
                        ...n[t],
                        onComplete: e
                    }
                },
                setOnProgress(e) {
                    return n[t] = {
                        ...n[t],
                        onProgress: e
                    }
                },
                async send(t, e, n, o) {
                    if (n && "object" != typeof n) throw se("action meta argument must be an object");
                    if (void 0 === t) throw se("action data cannot be undefined");
                    const a = "string" != typeof t,
                        h = t instanceof Blob,
                        d = h || t instanceof ArrayBuffer || t instanceof de;
                    if (n && !d) throw se("action meta argument can only be used with binary data");
                    const l = d ? new Uint8Array(h ? await t.arrayBuffer() : t) : oe(a ? JSON.stringify(t) : t),
                        u = n ? oe(JSON.stringify(n)) : null,
                        f = Math.ceil(l.byteLength / le) + (n ? 1 : 0) || 1,
                        g = Array(f).fill().map(((t, e) => {
                            const r = e === f - 1,
                                o = n && 0 === e,
                                c = new Uint8Array(15 + (o ? u.byteLength : r ? l.byteLength - le * (f - (n ? 2 : 1)) : le));
                            return c.set(i), c.set([s], 12), c.set([r | o << 1 | d << 2 | a << 3], 13), c.set([Math.round((e + 1) / f * ue)], 14), c.set(n ? o ? u : l.subarray((e - 1) * le, e * le) : l.subarray(e * le, (e + 1) * le), 15), c
                        }));
                    return s = s + 1 & ue, Promise.all(c(e, (async (t, e) => {
                        const i = e._channel;
                        let s = 0;
                        for (; s < f;) {
                            const a = g[s];
                            if (i.bufferedAmount > i.bufferedAmountLowThreshold && await new Promise((t => {
                                    const e = () => {
                                        i.removeEventListener(fe, e), t()
                                    };
                                    i.addEventListener(fe, e)
                                })), !r[t]) break;
                            e.send(a), s++, o && o(a[14] / ue, t, n)
                        }
                    })))
                }
            }, [n[t].send, n[t].setOnComplete, n[t].setOnProgress]
        },
        d = (t, e) => {
            const r = new Uint8Array(e),
                s = ae(r.subarray(0, 12)).replaceAll("\0", ""),
                [o] = r.subarray(12, 13),
                [a] = r.subarray(13, 14),
                [c] = r.subarray(14, 15),
                h = r.subarray(15),
                d = !!(1 & a),
                l = !!(2 & a),
                u = !!(4 & a),
                f = !!(8 & a);
            if (!n[s]) throw se(`received message with unregistered type (${s})`);
            i[t] || (i[t] = {}), i[t][s] || (i[t][s] = {});
            let g = i[t][s][o];
            if (g || (g = i[t][s][o] = {
                    chunks: []
                }), l ? g.meta = JSON.parse(ae(h)) : g.chunks.push(h), n[s].onProgress(c / ue, t, g.meta), !d) return;
            const p = new Uint8Array(g.chunks.reduce(((t, e) => t + e.byteLength), 0));
            if (g.chunks.reduce(((t, e) => (p.set(e, t), t + e.byteLength)), 0), u) n[s].onComplete(p, t, g.meta);
            else {
                const e = ae(p);
                n[s].onComplete(f ? JSON.parse(e) : e, t)
            }
            delete i[t][s][o]
        },
        [l, u] = h("__91n6__"),
        [f, g] = h("__90n6__"),
        [p, y] = h("__516n4L__"),
        [m, _] = h("__57r34m__"),
        [b, E] = h("__7r4ck__");
    let w = ie,
        R = ie,
        A = ie,
        v = ie;
    return t(((t, e) => {
        if (r[e]) return;
        const n = d.bind(null, e);
        r[e] = t, t.on(he.signal, (t => p(t, e))), t.on(he.close, (() => (t => {
            r[t] && (delete r[t], delete i[t], delete s[t], R(t))
        })(e))), t.on(he.data, n), t.on(he.stream, (t => {
            A(t, e, o[e]), delete o[e]
        })), t.on(he.track, ((t, r) => {
            v(t, r, e, a[e]), delete a[e]
        })), t.on(he.error, (t => {
            "ERR_DATA_CHANNEL" !== t.code && console.error(t)
        })), w(e), t.__drainEarlyData(n)
    })), u(((t, e) => f("", e))), g(((t, e) => {
        s[e] && (s[e](), delete s[e])
    })), y(((t, e) => {
        r[e] && r[e].signal(t)
    })), _(((t, e) => o[e] = t)), E(((t, e) => a[e] = t)), {
        makeAction: h,
        async ping(t) {
            if (!t) throw se("ping() must be called with target peer ID");
            const e = Date.now();
            return l("", t), await new Promise((e => s[t] = e)), Date.now() - e
        },
        leave() {
            re(r).forEach((([t, e]) => {
                e.destroy(), delete r[t]
            })), e()
        },
        getPeers() {
            return ne(re(r).map((([t, e]) => [t, e._pc])))
        },
        addStream(t, e, r) {
            return c(e, (async (e, n) => {
                r && await m(r, e), n.addStream(t)
            }))
        },
        removeStream(t, e) {
            return c(e, ((e, r) => r.removeStream(t)))
        },
        addTrack(t, e, r, n) {
            return c(r, (async (r, i) => {
                n && await b(n, r), i.addTrack(t, e)
            }))
        },
        removeTrack(t, e, r) {
            return c(r, ((r, n) => n.removeTrack(t, e)))
        },
        replaceTrack(t, e, r, n, i) {
            return c(n, (async (n, s) => {
                i && await b(i, n), s.replaceTrack(t, e, r)
            }))
        },
        onPeerJoin(t) {
            return w = t
        },
        onPeerLeave(t) {
            return R = t
        },
        onPeerStream(t) {
            return A = t
        },
        onPeerTrack(t) {
            return v = t
        }
    }
};
const pe = "AES-CBC",
    ye = async (t, e) => {
        const r = crypto.getRandomValues(new Uint8Array(16));
        return JSON.stringify({
            c: (n = await crypto.subtle.encrypt({
                name: pe,
                iv: r
            }, await t, oe(e)), btoa(String.fromCharCode.apply(null, new Uint8Array(n)))),
            iv: [...r]
        });
        var n
    }, me = async (t, e) => {
        const {
            c: r,
            iv: n
        } = JSON.parse(e);
        return ae(await crypto.subtle.decrypt({
            name: pe,
            iv: new Uint8Array(n)
        }, await t, (t => {
            const e = atob(t);
            return new Uint8Array(e.length).map(((t, r) => e.charCodeAt(r))).buffer
        })(r)))
    }, _e = {}, be = ce(crypto.getRandomValues(new Uint8Array(32))), Ee = ce(zt.getPublicKey(be)), we = {}, Re = () => Math.floor(Date.now() / 1e3), Ae = ["wss://relay.nostr.net", "wss://relay.blackbyte.nl", "wss://relay.piazza.today", "wss://relay.exit.pub", "wss://relay.nostr.band", "wss://relay.damus.io", "wss://nostr.mom", "wss://relay.snort.social", "wss://nostr.lu.ke", "wss://relay.plebstr.com", "wss://nostr.sathoarder.com", "wss://nsrelay.assilvestrar.club", "wss://nostrasia.casa", "wss://relay.nostr.bg", "wss://relay.nostrr.de", "wss://relay.nostrss.re"], ve = ((t, e) => (r, n) => {
        if (t[n]) return t[n];
        if (!r) throw se("requires a config map as the first argument");
        if (!r.appId && !r.firebaseApp) throw se("config map is missing appId field");
        if (!n) throw se("namespace argument required");
        return t[n] = e(r, n)
    })(_e, ((t, e) => {
        const r = t.password && (async (t, e) => crypto.subtle.importKey("raw", await crypto.subtle.digest({
                name: "SHA-256"
            }, oe(`${t}:${e}`)), {
                name: pe
            }, !1, ["encrypt", "decrypt"]))(t.password, e),
            n = `trystero/${t.appId}/${e}`,
            i = `${n}/${Xt}`,
            s = Jt(64),
            o = Jt(64),
            a = {},
            c = {},
            h = {},
            d = ((t, e, r) => (t.relayUrls || e).slice(0, t.relayUrls ? t.relayUrls.length : t.relayRedundancy || r))(t, Ae, 4),
            l = (t, e) => {
                y(t, e), h[e] = t
            },
            u = t => {
                delete a[t], delete c[t], delete h[t]
            },
            f = (t, e) => JSON.stringify(["REQ", t, {
                kinds: [29333],
                since: Re(),
                "#x": [e]
            }]),
            g = t => JSON.stringify(["CLOSE", t]),
            p = async (t, e) => {
                const r = {
                        kind: 29333,
                        content: JSON.stringify(e),
                        pubkey: Ee,
                        created_at: Re(),
                        tags: [
                            ["x", t]
                        ]
                    },
                    n = ce(new Uint8Array(await crypto.subtle.digest("SHA-256", oe(JSON.stringify([0, r.pubkey, r.created_at, r.kind, r.tags, r.content])))));
                return JSON.stringify(["EVENT", {
                    ...r,
                    id: n,
                    sig: ce(await zt.sign(n, be))
                }])
            };
        let y = ie;
        return d.forEach((e => {
            const d = new WebSocket(e);
            we[e] = d, d.addEventListener("open", (async () => {
                d.send(f(s, n)), d.send(f(o, i)), d.send(await p(n, Xt))
            })), d.addEventListener("message", (async e => {
                const [i, f, g, y] = JSON.parse(e.data);
                if ("EVENT" !== i) return void("OK" !== i || g || console.warn(`${Qt}: relay failure from ${d.url} - ${y}`));
                const m = JSON.parse(g.content);
                if (f === s) {
                    const e = m;
                    if (e !== Xt && !h[e] && !c[e]) {
                        c[e] = !0;
                        const i = a[e] = Gt(!0, !1, t.rtcConfig);
                        i.once(he.signal, (async t => {
                            d.send(await p(`${n}/${e}`, {
                                peerId: Xt,
                                offer: r ? {
                                    ...t,
                                    sdp: await ye(r, t.sdp)
                                } : t
                            }))
                        })), i.once(he.connect, (() => l(i, e))), i.once(he.close, (() => u(e)))
                    }
                } else if (f === o) {
                    const {
                        peerId: e,
                        offer: i,
                        answer: s
                    } = m;
                    if (a[e] && s) return void a[e].signal(r ? {
                        ...s,
                        sdp: await me(r, s.sdp)
                    } : s);
                    if (!i) return;
                    const o = Gt(!1, !1, t.rtcConfig);
                    o.once(he.signal, (async t => d.send(await p(`${n}/${e}`, {
                        peerId: Xt,
                        answer: r ? {
                            ...t,
                            sdp: await ye(r, t.sdp)
                        } : t
                    })))), o.once(he.connect, (() => l(o, e))), o.once(he.close, (() => u(e))), o.signal(i)
                }
            }))
        })), ge((t => y = t), (() => {
            delete _e[e], ee(we).forEach((t => {
                t.send(g(s)), t.send(g(o))
            }))
        }))
    })), Se = () => ({
        ...we
    });
window.getRelaySockets = Se
window.joinRoom = ve
window.selfId = Xt