class TrysteroSocket extends EventTarget {
    constructor(room, debug = false) {
        super();
        this.room = room;
        this.connectedTo = "";
        this.connected = false;

        const [sendTx, getRx] = this.room.makeAction('transport')
        const [sendConnect, getConnected] = this.room.makeAction('connect')
        const [sendClose, getClose] = this.room.makeAction('close')

        this.sendTx = sendTx;
        this.sendClose = sendClose;

        getRx((data, peerId) => {
            if(this.connectedTo == peerId){
                this.onmessage({data: data})
            }
        })

        getClose((data, peerId) => {
            if(this.connectedTo == peerId){
                this.onclose()
            }
        })

        getConnected((data, peerId) => {
            if(this.connectedTo == ""){
                if(debug) console.log(`${peerId} connected`)
                this.connected = true
                this.connectedTo = peerId
                this.onopen()
                sendConnect("", peerId)
            }
        })

        this.room.onPeerJoin(peerId => {
            if(debug) console.log(`${peerId} joined`)
            if(this.connectedTo == ""){
                sendConnect("", peerId)
            }
        })

        this.room.onPeerLeave(peerId => {
            if(debug) console.log(`${peerId} left`)
            if(this.connectedTo == peerId){
                this.connected = false
                this.connectedTo = ""
                this.onclose()
            }
        })

        this.onopen = () => this.dispatchEvent(new Event('open'));
        this.onclose = () => {
            this.dispatchEvent(new Event('close'))
            room.leave()
        };
        this.onmessage = (event) => {
            this.dispatchEvent(new MessageEvent('message', event));
        };
    }
    send(message) {
        this.sendTx(message, this.connectedTo);
    }
    close() {
        this.sendClose("", this.connectedTo);
        this.onclose();
    }
}