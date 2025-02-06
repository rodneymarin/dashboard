
import { Card } from "../components/base/card/Card";
import { TableClients } from "../components/TableClients";
import { TableSales } from "../components/TableSales";
import { useAppContext } from "../context/AppContext";
import { PageLayout } from "../layout/PageLayout";

export default function PageDashboard() {
	const { sales, clients, products } = useAppContext();
	const totalSales = sales?.reduce((sum, value) => value.price + sum, 0);

	return (
		<PageLayout title="Dashboard">
			<div className="flex flex-col md:flex-row w-full gap-3">
				<Card className="flex flex-col gap-2 items-center">
					<span className="text-mid-accent">Sales</span>
					<h3>{totalSales?.toLocaleString("EN-US", { style: "currency", currency: "USD" })}</h3>
				</Card>
				<Card className="flex flex-col gap-2 items-center">
					<span className="text-mid-accent">Clients</span>
					<h3>{clients?.length}</h3>
				</Card>
				<Card className="flex flex-col gap-2 items-center">
					<span className="text-mid-accent">Products</span>
					<h3>{products?.length}</h3>
				</Card>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3">
				<Card title="Recent sales" className="p-0 md:py-6 px-0 gap-0">
					<TableSales limit={6} />
				</Card>
				<Card title="Recent clients" className="p-0 md:py-6 px-0 gap-0">
					<TableClients limit={6} />
				</Card>
			</div>
		</PageLayout>
	);
}