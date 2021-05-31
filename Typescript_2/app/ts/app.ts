import { NegotiationController } from "./controllers/NegotiationController";

let negotiationController = new NegotiationController()

$('.form').on("submit", negotiationController.addHandle.bind(negotiationController));