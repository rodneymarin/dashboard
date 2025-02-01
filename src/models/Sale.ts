import { Client } from "./Client";
import { Product } from "./Product";

export interface SaleData {
	product: Product;
	quantity: number;
	price: number;
	timeStamp: number;
	buyer: Client;
}

export class Sale {
	product: Product;
	quantity: number;
	price: number;
	timeStamp: number;
	buyer: Client;

	public constructor(data: SaleData) {
		this.product = data.product;
		this.quantity = data.quantity;
		this.price = data.price;
		this.timeStamp = data.timeStamp;
		this.buyer = data.buyer;
	}

	get getFormattedDate(): string {
		const newDate = new Date(this.timeStamp);
		return newDate.toDateString();
	}
}

