class Negotiation {
    constructor(data, quantity,  value) {
        this._data = data;
        this._quantity = quantity;
        this._value = value;
    }

    get data() {
        return this._data;
    }

    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._quantity * this._value;
    }
}