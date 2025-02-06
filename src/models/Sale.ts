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

	get formattedDate(): string {
		const newDate = new Date(this.timeStamp);
		return newDate.toLocaleDateString("es-US", { day: "2-digit", month: "2-digit", year: "numeric" });
	}

	get formattedPrice(): string {
		const price = this.price.toLocaleString("EN-US", { style: "currency", currency: "USD" });
		return price;
	}

	get total(): number {
		return this.price * this.quantity;
	}

	get formattedTotal(): string {
		const formatTotal = this.total.toLocaleString("EN-US", { style: "currency", currency: "USD" });
		return formatTotal;
	}
}

