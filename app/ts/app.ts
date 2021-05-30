let negotiationController = new NegotiationController()

document.querySelector('.form').addEventListener('submit', negotiationController.addHandle.bind(negotiationController))