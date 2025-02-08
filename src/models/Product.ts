export interface ProductData {
	id: string;
	title: string;
	price: number;
	description: string;
	images: Array<string>;
}

export class Product {
	id: string;
	title: string;
	price: number;
	description: string;
	images: Array<string>;

	constructor(data: ProductData) {
		this.id = data.id;
		this.title = data.title;
		this.price = data.price;
		this.description = data.description;
		this.images = data.images;
	}

	get formattedPrice(): string {
		return `$ ${this.price.toFixed(2)}`;
	}
}