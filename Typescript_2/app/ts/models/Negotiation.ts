export class Negotiation {
	constructor(private _data: Date, private _quantity: number, private _value: number) {}

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