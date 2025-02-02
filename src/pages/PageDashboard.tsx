import { Card } from "../components/card/Card";
import { useAppContext } from "../context/AppContext";
import { PageLayout } from "../layout/PageLayout";

export default function PageDashboard() {
	const { sales, clients, products } = useAppContext();
	const totalSales = sales?.reduce((sum, value) => value.price + sum, 0);

	return (
		<PageLayout title="Dashboard">
			<div className="flex flex-col md:flex-row w-full justify-between gap-3">
				<Card className="flex flex-col gap-2 items-center w-full">
					<span className="text-mid-accent">Sales</span>
					<h3>{totalSales?.toLocaleString("EN-US", { style: "currency", currency: "USD" })}</h3>
				</Card>
				<Card className="flex flex-col gap-2 items-center w-full">
					<span className="text-mid-accent">Clients</span>
					<h3>{clients?.length}</h3>
				</Card>
				<Card className="flex flex-col gap-2 items-center w-full">
					<span className="text-mid-accent">Products</span>
					<h3>{products?.length}</h3>
				</Card>
			</div>

			<div className="grid grid-cols-2 gap-3">
				<Card>
					<h4>Recent sales</h4>
				</Card>
				<Card>
					<h4>Recent clients</h4>
				</Card>
			</div>
		</PageLayout>
	);
}