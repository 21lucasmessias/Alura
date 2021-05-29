let negotiationController = new NegotiationController();
document.querySelector('.form').addEventListener('submit', negotiationController.handle.bind(negotiationController));
