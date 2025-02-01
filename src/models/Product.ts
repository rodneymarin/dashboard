export enum ProductStatus {
	published = "Published",
	paused = "Paused",
	discontinued = "Discontinued"
}

export interface ProductData {
	id: string;
	name: string;
	price: number;
	inventory: number;
	status: ProductStatus;
}

export class Product {
	id: string;
	name: string;
	price: number;
	inventory: number;
	status: ProductStatus;

	constructor(data: ProductData) {
		this.id = data.id;
		this.name = data.name;
		this.price = data.price;
		this.inventory = data.inventory;
		this.status = data.status;
	}

	get formattedPrice(): string {
		return `$ ${this.price.toFixed(2)}`;
	}
}