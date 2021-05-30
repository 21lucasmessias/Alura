class NegotiationController {
    constructor() {
        this._negotiationsView = new NegotiationsView('#negotiationsView');
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this._negotiations = new Negotiations();
        this._negotiationsView.update();
    }
    addHandle(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        this._negotiations.add(negotiation);
        console.log(this._negotiations.toArray());
    }
}
