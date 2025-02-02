import { createContext, PropsWithChildren, useState } from "react";
import { Client, ClientData } from "../models/Client";
import { Product } from "../models/Product";
import { Sale } from "../models/Sale";

type AppContextType = {

};

interface AppContextProps extends PropsWithChildren { }

const AppContext = createContext({} as AppContextType);

function AppContextProvider({ children }: AppContextProps) {
	const [clients, setClients] = useState<Client[]>();
	const [products, setProducts] = useState<Product[]>();
	const [sales, setSales] = useState<Sale[]>();

	async function fetchClients() {
		try {
			const response = await fetch("src/data/clients_data.json");
			if (!response.ok) {
				console.error("error fetching clients");
			}
			const json = await response.json();
			if (Array.isArray(json)) {
				responseData: ClientData[] = json;

			}
		} catch (error) {
			console.error(error);
		}
	}
}