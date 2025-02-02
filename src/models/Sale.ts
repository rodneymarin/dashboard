import { Client, ClientData } from "./Client";
import { Product, ProductData } from "./Product";

export interface SaleData {
	id: string;
	product: ProductData;
	quantity: number;
	price: number;
	timeStamp: number;
	buyer: ClientData;
}

export class Sale {
	id: string;
	product: Product;
	quantity: number;
	price: number;
	timeStamp: number;
	buyer: Client;

	public constructor(data: SaleData) {
		this.id = data.id;
		this.product = new Product(data.product);
		this.quantity = data.quantity;
		this.price = data.price;
		this.timeStamp = data.timeStamp;
		this.buyer = new Client(data.buyer);
	}

	get getFormattedDate(): string {
		const newDate = new Date(this.timeStamp);
		return newDate.toDateString();
	}
}

