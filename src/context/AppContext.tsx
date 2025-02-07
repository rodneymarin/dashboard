import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Client, ClientData } from "../models/Client";
import { Product } from "../models/Product";
import { Sale } from "../models/Sale";
import { randomDate, uuid } from "../utils/utils";

type AppContextType = {
	clients: Client[] | undefined;
	products: Product[] | undefined;
	sales: Sale[] | undefined;
};

interface AppContextProps extends PropsWithChildren { }

const AppContext = createContext({} as AppContextType);

export function AppContextProvider({ children }: AppContextProps) {
	const [clients, setClients] = useState<Client[]>();
	const [products, setProducts] = useState<Product[]>();
	const [sales, setSales] = useState<Sale[]>();

	useEffect(() => {
		fetchClients();
		fetchProducts();
	}, []);

	useEffect(() => {
		if (clients && products) {
			fetchSales();
		}
	}, [clients, products]);

	async function fetchClients() {
		try {
			const response = await fetch("src/data/clients_data.json");
			if (!response.ok) {
				console.error("error fetching clients");
			}
			const json = await response.json();
			const newClients: Client[] = [];
			if (Array.isArray(json)) {
				json.forEach((clientData: ClientData) => {
					const client = new Client(clientData);
					newClients.push(client);
				});
				setClients(newClients);
			}
		} catch (error) {
			console.error(error);
		}
	}

	async function fetchProducts() {
		try {
			const response = await fetch("src/data/products_data.json");
			if (!response.ok) {
				console.error("error fetching products");
			}
			const json = await response.json();
			const newProducts: Product[] = [];
			if (Array.isArray(json)) {
				json.forEach((productData) => {
					const product = new Product(productData);
					newProducts.push(product);
				});
				setProducts(newProducts);
			}
		} catch (error) {
			console.error(error);
		}
	}

	function fetchSales() {
		if (!clients || !products) return;

		const newSales: Sale[] = Array.from({ length: 1000 }, () => {
			const randomProduct = products[Math.floor(Math.random() * products.length)];
			const randomClient = clients[Math.floor(Math.random() * clients.length)];
			const newSale: Sale = new Sale({
				id: uuid(),
				product: randomProduct,
				quantity: Math.floor((Math.random() * 25) + 10),
				price: Math.floor((Math.random() * 500) + 125),
				timeStamp: randomDate(new Date(2024, 5, 5), new Date()).getTime(),
				buyer: randomClient
			});
			return newSale;
		});

		setSales(newSales);
	}

	return <AppContext.Provider value={{
		clients,
		products,
		sales
	}}>
		{children}
	</AppContext.Provider>;
}

//-----------------------------------------------
export function useAppContext() {
	return useContext(AppContext);
}