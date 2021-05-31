import { Negotiations } from "../models/index";
import { View } from "./index";

export class NegotiationsView extends View<Negotiations> {
	template(negotiations: Negotiations): string {
		return `
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>DATA</th>
						<th>QUANTIDADE</th>
						<th>VALOR</th>
						<th>VOLUME</th>
					</tr>
				</thead>
				
				<tbody>
					${negotiations.toArray().map((negotiation) => (
						`
							<tr>
								<td>${negotiation.data.getDate()}/${negotiation.data.getMonth()+1}/${negotiation.data.getFullYear()}</td>
								<td>${negotiation.quantity}</td>
								<td>${negotiation.value}</td>
								<td>${negotiation.volume}</td>
							</tr>
						`
					)).join('')}
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		`
	}
}