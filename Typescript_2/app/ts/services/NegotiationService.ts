import { ApiNegotiation } from "../models/types/index";
import { Negotiation } from "../models/index";

export class NegotiationService {
  getNegotiations(handler: HandlerFunction): Promise<Array<Negotiation>> {
    
    return fetch('http://localhost:8080/dados')
      .then(res => handler(res))
      .then(res => res.json())
      .then((res: Array<ApiNegotiation>) => (
        res.map(data => new Negotiation(new Date(), data.vezes, data.montante))
      ))
      .catch(e => {
        console.log(e)

        throw new Error('Service offline.')
      })
  }
}

export interface HandlerFunction {
  (res: Response): Response
}