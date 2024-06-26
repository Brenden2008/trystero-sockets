function e(e) {
    const t = new Uint8Array(e);
    for (let i = 0; i < e; i++) t[i] = 256 * Math.random() | 0;
    return t
}

function t() {
    if ("undefined" == typeof globalThis) return null;
    const e = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
    };
    return e.RTCPeerConnection ? e : null
}

function i(e, t) {
    return Object.defineProperty(e, "code", {
        value: t,
        enumerable: !0,
        configurable: !0
    }), e
}

function s(e) {
    return e.replace(/a=ice-options:trickle\s\n/g, "")
}
class n {
    constructor(s = {}) {
        if (this._map = new Map, this._id = e(4).toString("hex").slice(0, 7), this._doDebug = s.debug, this._debug("new peer %o", s), this.channelName = s.initiator ? s.channelName || e(20).toString("hex") : null, this.initiator = s.initiator || !1, this.channelConfig = s.channelConfig || n.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, n.config, s.config), this.offerOptions = s.offerOptions || {}, this.answerOptions = s.answerOptions || {}, this.sdpTransform = s.sdpTransform || (e => e), this.streams = s.streams || (s.stream ? [s.stream] : []), this.trickle = void 0 === s.trickle || s.trickle, this.allowHalfTrickle = void 0 !== s.allowHalfTrickle && s.allowHalfTrickle, this.iceCompleteTimeout = s.iceCompleteTimeout || 5e3, this.destroyed = !1, this.destroying = !1, this._connected = !1, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, this._wrtc = s.wrtc && "object" == typeof s.wrtc ? s.wrtc : t(), !this._wrtc) throw "undefined" == typeof window ? i(Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT") : i(Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
        this._pcReady = !1, this._channelReady = !1, this._iceComplete = !1, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = !1, this._firstNegotiation = !0, this._batchedNegotiation = !1, this._queuedNegotiation = !1, this._sendersAwaitingStable = [], this._senderMap = new Map, this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
        try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config)
        } catch (e) {
            return void this.destroy(i(e, "ERR_PC_CONSTRUCTOR"))
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
            this.destroy(i(e, "ERR_PC_PEER_IDENTITY"))
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
            if (this.destroyed) throw i(Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
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
                this.destroy(i(e, "ERR_SET_REMOTE_DESCRIPTION"))
            })), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || this.destroy(i(Error("signal() called with invalid signal data"), "ERR_SIGNALING"))
        }
    }
    _addIceCandidate(e) {
        const t = new this._wrtc.RTCIceCandidate(e);
        this._pc.addIceCandidate(t).catch((e => {
            !t.address || t.address.endsWith(".local") ? console.warn("Ignoring unsupported ICE candidate.") : this.destroy(i(e, "ERR_ADD_ICE_CANDIDATE"))
        }))
    }
    send(e) {
        if (!this.destroying) {
            if (this.destroyed) throw i(Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
            this._channel.send(e)
        }
    }
    addTransceiver(e, t) {
        if (!this.destroying) {
            if (this.destroyed) throw i(Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
            if (this._debug("addTransceiver()"), this.initiator) try {
                this._pc.addTransceiver(e, t), this._needsNegotiation()
            } catch (e) {
                this.destroy(i(e, "ERR_ADD_TRANSCEIVER"))
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
            if (this.destroyed) throw i(Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
            this._debug("addStream()"), e.getTracks().forEach((t => {
                this.addTrack(t, e)
            }))
        }
    }
    addTrack(e, t) {
        if (this.destroying) return;
        if (this.destroyed) throw i(Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTrack()");
        const s = this._senderMap.get(e) || new Map;
        let n = s.get(t);
        if (n) throw n.removed ? i(Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED") : i(Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
        n = this._pc.addTrack(e, t), s.set(t, n), this._senderMap.set(e, s), this._needsNegotiation()
    }
    replaceTrack(e, t, s) {
        if (this.destroying) return;
        if (this.destroyed) throw i(Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("replaceTrack()");
        const n = this._senderMap.get(e),
            r = n ? n.get(s) : null;
        if (!r) throw i(Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        t && this._senderMap.set(t, n), null != r.replaceTrack ? r.replaceTrack(t) : this.destroy(i(Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"))
    }
    removeTrack(e, t) {
        if (this.destroying) return;
        if (this.destroyed) throw i(Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSender()");
        const s = this._senderMap.get(e),
            n = s ? s.get(t) : null;
        if (!n) throw i(Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        try {
            n.removed = !0, this._pc.removeTrack(n)
        } catch (e) {
            "NS_ERROR_UNEXPECTED" === e.name ? this._sendersAwaitingStable.push(n) : this.destroy(i(e, "ERR_REMOVE_TRACK"))
        }
        this._needsNegotiation()
    }
    removeStream(e) {
        if (!this.destroying) {
            if (this.destroyed) throw i(Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
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
            if (this.destroyed) throw i(Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
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
        if (!e.channel) return this.destroy(i(Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        this._channel = e.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = 65536), this.channelName = this._channel.label, this._channel.onmessage = e => {
            this._onChannelMessage(e)
        }, this._channel.onbufferedamountlow = () => {
            this._onChannelBufferedAmountLow()
        }, this._channel.onopen = () => {
            this._onChannelOpen()
        }, this._channel.onclose = () => {
            this._onChannelClose()
        }, this._channel.onerror = e => {
            this.destroy(i(e, "ERR_DATA_CHANNEL"))
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
            this.trickle || this.allowHalfTrickle || (e.sdp = s(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
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
                this.destroy(i(e, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((e => {
            this.destroy(i(e, "ERR_CREATE_OFFER"))
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
            this.trickle || this.allowHalfTrickle || (e.sdp = s(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
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
                this.destroy(i(e, "ERR_SET_LOCAL_DESCRIPTION"))
            }))
        })).catch((e => {
            this.destroy(i(e, "ERR_CREATE_ANSWER"))
        }))
    }
    _onConnectionStateChange() {
        this.destroyed || "failed" === this._pc.connectionState && this.destroy(i(Error("Connection failed."), "ERR_CONNECTION_FAILURE"))
    }
    _onIceStateChange() {
        if (this.destroyed) return;
        const e = this._pc.iceConnectionState,
            t = this._pc.iceGatheringState;
        this._debug("iceStateChange (connection: %s) (gathering: %s)", e, t), this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.destroy(i(Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === e && this.destroy(i(Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"))
    }
    getStats(e) {
        const t = e => ("[object Array]" === {}.toString.call(e.values) && e.values.forEach((t => {
            Object.assign(e, t)
        })), e);
        0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((i => {
            const s = [];
            i.forEach((e => {
                s.push(t(e))
            })), e(null, s)
        }), (t => e(t))) : this._pc.getStats.length > 0 ? this._pc.getStats((i => {
            if (this.destroyed) return;
            const s = [];
            i.result().forEach((e => {
                const i = {};
                e.names().forEach((t => {
                    i[t] = e.stat(t)
                })), i.id = e.id, i.type = e.type, i.timestamp = e.timestamp, s.push(t(i))
            })), e(null, s)
        }), (t => e(t))) : e(null, [])
    }
    _maybeReady() {
        if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = !0;
        const e = () => {
            this.destroyed || this.getStats(((t, s) => {
                if (this.destroyed) return;
                t && (s = []);
                const n = {},
                    r = {},
                    a = {};
                let o = !1;
                s.forEach((e => {
                    "remotecandidate" !== e.type && "remote-candidate" !== e.type || (n[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (r[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (a[e.id] = e)
                }));
                const c = e => {
                    o = !0;
                    let t = r[e.localCandidateId];
                    t && (t.ip || t.address) ? (this.localAddress = t.ip || t.address, this.localPort = Number(t.port)) : t && t.ipAddress ? (this.localAddress = t.ipAddress, this.localPort = Number(t.portNumber)) : "string" == typeof e.googLocalAddress && (t = e.googLocalAddress.split(":"), this.localAddress = t[0], this.localPort = Number(t[1])), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                    let i = n[e.remoteCandidateId];
                    i && (i.ip || i.address) ? (this.remoteAddress = i.ip || i.address, this.remotePort = Number(i.port)) : i && i.ipAddress ? (this.remoteAddress = i.ipAddress, this.remotePort = Number(i.portNumber)) : "string" == typeof e.googRemoteAddress && (i = e.googRemoteAddress.split(":"), this.remoteAddress = i[0], this.remotePort = Number(i[1])), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort)
                };
                if (s.forEach((e => {
                        "transport" === e.type && e.selectedCandidatePairId && c(a[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && c(e)
                    })), o || Object.keys(a).length && !Object.keys(r).length) {
                    if (this._connecting = !1, this._connected = !0, this._chunk) {
                        try {
                            this.send(this._chunk)
                        } catch (t) {
                            return this.destroy(i(t, "ERR_DATA_CHANNEL"))
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
        const i = this._map;
        i.has(e) || i.set(e, new Set), i.get(e).add(t)
    }
    off(e, t) {
        const i = this._map,
            s = i.get(e);
        s && (s.delete(t), 0 === s.size && i.delete(e))
    }
    once(e, t) {
        const i = (...s) => {
            this.off(e, i), t(...s)
        };
        this.on(e, i)
    }
    emit(e, ...t) {
        const i = this._map;
        if (i.has(e))
            for (const s of i.get(e)) try {
                s(...t)
            } catch (e) {
                console.error(e)
            }
    }
}
n.WEBRTC_SUPPORT = !!t(), n.config = {
    iceServers: [{
        urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
    }],
    sdpSemantics: "unified-plan"
}, n.channelConfig = {};
const r = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
    a = (e, t, i) => {
        const s = new n({
                initiator: e,
                trickle: t,
                config: i
            }),
            r = e => s.__earlyDataBuffer.push(e);
        return s.on(m.data, r), s.__earlyDataBuffer = [], s.__drainEarlyData = e => {
            s.off(m.data, r), s.__earlyDataBuffer.forEach(e), delete s.__earlyDataBuffer, delete s.__drainEarlyData
        }, s
    },
    o = e => Array(e).fill().map((() => r[Math.floor(62 * Math.random())])).join(""),
    c = "Trystero",
    d = o(20),
    {
        keys: h,
        values: l,
        entries: _,
        fromEntries: u
    } = Object,
    p = () => {},
    g = e => Error(`${c}: ${e}`),
    f = e => (new TextEncoder).encode(e),
    y = e => (new TextDecoder).decode(e),
    m = u(["close", "connect", "data", "error", "signal", "stream", "track"].map((e => [e, e]))),
    b = Object.getPrototypeOf(Uint8Array),
    E = 16369,
    R = 255,
    C = "bufferedamountlow";
var w = (e, t) => {
    const i = {},
        s = {},
        n = {},
        r = {},
        a = {},
        o = {},
        d = (e, t) => (e ? Array.isArray(e) ? e : [e] : h(i)).flatMap((e => {
            const s = i[e];
            return s ? t(e, s) : (console.warn(`${c}: no peer with id ${e} found`), [])
        })),
        l = e => {
            if (s[e]) return [s[e].send, s[e].setOnComplete, s[e].setOnProgress];
            if (!e) throw g("action type argument is required");
            const t = f(e);
            if (t.byteLength > 12) throw g(`action type string "${e}" (${t.byteLength}b) exceeds byte limit (12). Hint: choose a shorter name.`);
            const n = new Uint8Array(12);
            n.set(t);
            let r = 0;
            return s[e] = {
                onComplete: p,
                onProgress: p,
                setOnComplete(t) {
                    return s[e] = {
                        ...s[e],
                        onComplete: t
                    }
                },
                setOnProgress(t) {
                    return s[e] = {
                        ...s[e],
                        onProgress: t
                    }
                },
                async send(e, t, s, a) {
                    if (s && "object" != typeof s) throw g("action meta argument must be an object");
                    if (void 0 === e) throw g("action data cannot be undefined");
                    const o = "string" != typeof e,
                        c = e instanceof Blob,
                        h = c || e instanceof ArrayBuffer || e instanceof b;
                    if (s && !h) throw g("action meta argument can only be used with binary data");
                    const l = h ? new Uint8Array(c ? await e.arrayBuffer() : e) : f(o ? JSON.stringify(e) : e),
                        _ = s ? f(JSON.stringify(s)) : null,
                        u = Math.ceil(l.byteLength / E) + (s ? 1 : 0) || 1,
                        p = Array(u).fill().map(((e, t) => {
                            const i = t === u - 1,
                                a = s && 0 === t,
                                c = new Uint8Array(15 + (a ? _.byteLength : i ? l.byteLength - E * (u - (s ? 2 : 1)) : E));
                            return c.set(n), c.set([r], 12), c.set([i | a << 1 | h << 2 | o << 3], 13), c.set([Math.round((t + 1) / u * R)], 14), c.set(s ? a ? _ : l.subarray((t - 1) * E, t * E) : l.subarray(t * E, (t + 1) * E), 15), c
                        }));
                    return r = r + 1 & R, Promise.all(d(t, (async (e, t) => {
                        const n = t._channel;
                        let r = 0;
                        for (; r < u;) {
                            const o = p[r];
                            if (n.bufferedAmount > n.bufferedAmountLowThreshold && await new Promise((e => {
                                    const t = () => {
                                        n.removeEventListener(C, t), e()
                                    };
                                    n.addEventListener(C, t)
                                })), !i[e]) break;
                            t.send(o), r++, a && a(o[14] / R, e, s)
                        }
                    })))
                }
            }, [s[e].send, s[e].setOnComplete, s[e].setOnProgress]
        },
        w = (e, t) => {
            const i = new Uint8Array(t),
                r = y(i.subarray(0, 12)).replaceAll("\0", ""),
                [a] = i.subarray(12, 13),
                [o] = i.subarray(13, 14),
                [c] = i.subarray(14, 15),
                d = i.subarray(15),
                h = !!(1 & o),
                l = !!(2 & o),
                _ = !!(4 & o),
                u = !!(8 & o);
            if (!s[r]) throw g(`received message with unregistered type (${r})`);
            n[e] || (n[e] = {}), n[e][r] || (n[e][r] = {});
            let p = n[e][r][a];
            if (p || (p = n[e][r][a] = {
                    chunks: []
                }), l ? p.meta = JSON.parse(y(d)) : p.chunks.push(d), s[r].onProgress(c / R, e, p.meta), !h) return;
            const f = new Uint8Array(p.chunks.reduce(((e, t) => e + t.byteLength), 0));
            if (p.chunks.reduce(((e, t) => (f.set(t, e), e + t.byteLength)), 0), _) s[r].onComplete(f, e, p.meta);
            else {
                const t = y(f);
                s[r].onComplete(u ? JSON.parse(t) : t, e)
            }
            delete n[e][r][a]
        },
        [T, S] = l("__91n6__"),
        [A, v] = l("__90n6__"),
        [k, N] = l("__516n4L__"),
        [D, O] = l("__57r34m__"),
        [I, P] = l("__7r4ck__");
    let L = p,
        q = p,
        M = p,
        U = p;
    return e(((e, t) => {
        if (i[t]) return;
        const s = w.bind(null, t);
        i[t] = e, e.on(m.signal, (e => k(e, t))), e.on(m.close, (() => (e => {
            i[e] && (delete i[e], delete n[e], delete r[e], q(e))
        })(t))), e.on(m.data, s), e.on(m.stream, (e => {
            M(e, t, a[t]), delete a[t]
        })), e.on(m.track, ((e, i) => {
            U(e, i, t, o[t]), delete o[t]
        })), e.on(m.error, (e => {
            "ERR_DATA_CHANNEL" !== e.code && console.error(e)
        })), L(t), e.__drainEarlyData(s)
    })), S(((e, t) => A("", t))), v(((e, t) => {
        r[t] && (r[t](), delete r[t])
    })), N(((e, t) => {
        i[t] && i[t].signal(e)
    })), O(((e, t) => a[t] = e)), P(((e, t) => o[t] = e)), {
        makeAction: l,
        async ping(e) {
            if (!e) throw g("ping() must be called with target peer ID");
            const t = Date.now();
            return T("", e), await new Promise((t => r[e] = t)), Date.now() - t
        },
        leave() {
            _(i).forEach((([e, t]) => {
                t.destroy(), delete i[e]
            })), t()
        },
        getPeers() {
            return u(_(i).map((([e, t]) => [e, t._pc])))
        },
        addStream(e, t, i) {
            return d(t, (async (t, s) => {
                i && await D(i, t), s.addStream(e)
            }))
        },
        removeStream(e, t) {
            return d(t, ((t, i) => i.removeStream(e)))
        },
        addTrack(e, t, i, s) {
            return d(i, (async (i, n) => {
                s && await I(s, i), n.addTrack(e, t)
            }))
        },
        removeTrack(e, t, i) {
            return d(i, ((i, s) => s.removeTrack(e, t)))
        },
        replaceTrack(e, t, i, s, n) {
            return d(s, (async (s, r) => {
                n && await I(n, s), r.replaceTrack(e, t, i)
            }))
        },
        onPeerJoin(e) {
            return L = e
        },
        onPeerLeave(e) {
            return q = e
        },
        onPeerStream(e) {
            return M = e
        },
        onPeerTrack(e) {
            return U = e
        }
    }
};
const T = "AES-CBC",
    S = async (e, t) => {
        const i = crypto.getRandomValues(new Uint8Array(16));
        return JSON.stringify({
            c: (s = await crypto.subtle.encrypt({
                name: T,
                iv: i
            }, await e, f(t)), btoa(String.fromCharCode.apply(null, new Uint8Array(s)))),
            iv: [...i]
        });
        var s
    }, A = async (e, t) => {
        const {
            c: i,
            iv: s
        } = JSON.parse(t);
        return y(await crypto.subtle.decrypt({
            name: T,
            iv: new Uint8Array(s)
        }, await e, (e => {
            const t = atob(e);
            return new Uint8Array(t.length).map(((e, i) => t.charCodeAt(i))).buffer
        })(i)))
    }, v = {}, k = {}, N = {}, D = {}, O = {}, I = "announce", P = ["wss://tracker.webtorrent.dev", "wss://tracker.openwebtorrent.com", "wss://tracker.files.fm:7073/announce", "wss://tracker.btorrent.xyz"], L = ((e, t) => (i, s) => {
        if (e[s]) return e[s];
        if (!i) throw g("requires a config map as the first argument");
        if (!i.appId && !i.firebaseApp) throw g("config map is missing appId field");
        if (!s) throw g("namespace argument required");
        return e[s] = t(i, s)
    })(v, ((e, t) => {
        if (e.trackerUrls || e.trackerRedundancy) throw g("trackerUrls/trackerRedundancy have been replaced by relayUrls/relayRedundancy");
        const i = {},
            s = e.password && (async (e, t) => crypto.subtle.importKey("raw", await crypto.subtle.digest({
                name: "SHA-256"
            }, f(`${e}:${t}`)), {
                name: T
            }, !1, ["encrypt", "decrypt"]))(e.password, t),
            n = ((e, t, i) => (e.relayUrls || t).slice(0, e.relayUrls ? e.relayUrls.length : e.relayRedundancy || i))(e, P, 3),
            r = crypto.subtle.digest("SHA-1", f(`${c}:${e.appId}:${t}`)).then((e => Array.from(new Uint8Array(e)).map((e => e.toString(36))).join("").slice(0, 20))),
            h = t => u(Array(t).fill().map((() => {
                const t = a(!0, !1, e.rtcConfig);
                return [o(20), {
                    peer: t,
                    offerP: new Promise((e => t.once(m.signal, e)))
                }]
            }))),
            y = async (t, n) => {
                const o = await r;
                let h;
                try {
                    h = JSON.parse(n.data)
                } catch (n) {
                    return void console.error(c + ": received malformed SDP JSON")
                }
                if (h.info_hash !== o || h.peer_id && h.peer_id === d) return;
                const l = h["failure reason"];
                if (l) console.warn(`${c}: torrent tracker failure from ${t.url} - ${l}`);
                else {
                    if (h.interval && h.interval > U && h.interval <= 120 && (clearInterval(B), U = h.interval, B = setInterval(R, 1e3 * U)), h.offer && h.offer_id) {
                        if (i[h.peer_id] || $[h.offer_id]) return;
                        $[h.offer_id] = !0;
                        const n = a(!1, !1, e.rtcConfig);
                        return n.once(m.signal, (async e => t.send(JSON.stringify({
                            answer: s ? {
                                ...e,
                                sdp: await S(s, e.sdp)
                            } : e,
                            action: I,
                            info_hash: o,
                            peer_id: d,
                            to_peer_id: h.peer_id,
                            offer_id: h.offer_id
                        })))), n.on(m.connect, (() => L(n, h.peer_id))), n.on(m.close, (() => q(n, h.peer_id, h.offer_id))), void n.signal(s ? {
                            ...h.offer,
                            sdp: await A(s, h.offer.sdp)
                        } : h.offer)
                    }
                    if (h.answer) {
                        if (i[h.peer_id] || $[h.offer_id]) return;
                        const e = M[h.offer_id];
                        if (e) {
                            const {
                                peer: t
                            } = e;
                            if (t.destroyed) return;
                            $[h.offer_id] = !0, t.on(m.connect, (() => L(t, h.peer_id, h.offer_id))), t.on(m.close, (() => q(t, h.peer_id, h.offer_id))), t.signal(s ? {
                                ...h.answer,
                                sdp: await A(s, h.answer.sdp)
                            } : h.answer)
                        }
                    }
                }
            }, b = async (e, t) => e.send(JSON.stringify({
                action: I,
                info_hash: t,
                numwant: 10,
                peer_id: d,
                offers: await Promise.all(_(M).map((async ([e, {
                    offerP: t
                }]) => {
                    const i = await t;
                    return {
                        offer_id: e,
                        offer: s ? {
                            ...i,
                            sdp: await S(s, i.sdp)
                        } : i
                    }
                })))
            })), E = (e, t, i) => (i || !k[e] ? (O[e] = {
                ...O[e],
                [t]: y
            }, k[e] = new Promise((i => {
                const s = new WebSocket(e);
                N[e] = s, s.addEventListener("open", (() => {
                    D[e] = 4e3, i(s)
                })), s.addEventListener("message", (t => l(O[e]).forEach((e => e(s, t))))), s.addEventListener("close", (async () => {
                    var i;
                    D[e] = D[e] ?? 4e3, await (i = D[e], new Promise((e => setTimeout(e, i)))), D[e] *= 2, E(e, t, !0)
                }))
            }))) : O[e][t] = y, k[e]), R = async () => {
                const e = await r;
                M && C(), M = h(10), n.forEach((async t => {
                    const i = await E(t, e);
                    i.readyState === WebSocket.OPEN ? b(i, e) : i.readyState !== WebSocket.CONNECTING && b(await E(t, e, !0), e)
                }))
            }, C = () => {
                _(M).forEach((([e, {
                    peer: t
                }]) => {
                    $[e] || i[e] || t.destroy()
                })), $ = {}
            }, L = (e, t, s) => {
                j(e, t), i[t] = !0, s && (i[s] = !0)
            }, q = (e, t, s) => {
                delete i[t], e.destroy();
                s in M && (delete M[s], M = {
                    ...M,
                    ...h(1)
                })
            };
        let M, U = 33,
            B = setInterval(R, 1e3 * U),
            j = p,
            $ = {};
        return R(), w((e => j = e), (async () => {
            const e = await r;
            n.forEach((t => delete O[t][e])), delete v[t], clearInterval(B), C()
        }))
    })), q = () => ({
        ...N
    });
window.getRelaySockets = q
window.joinRoom = L
window.selfId = d