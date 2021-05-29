class Negotiation {
    constructor(_data, _quantity, _value) {
        this._data = _data;
        this._quantity = _quantity;
        this._value = _value;
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
