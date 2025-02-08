import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card } from "../components/base/card/Card";
import { useAppContext } from "../context/AppContext";
import { PageLayout } from "../layout/PageLayout";
import { useViewportWidthMatch, ViewportBreakpoint } from "../hooks/useViewportWidthMatch";

export default function PageClients() {
	const { sales, products } = useAppContext();
	const isMobile = useViewportWidthMatch((value) => value < ViewportBreakpoint.md);

	const totalSales = sales?.reduce((sum, value) => value.price + sum, 0);
	const orderMonth = sales?.filter(sale => {
		const saleDate = new Date(sale.timeStamp);
		const today = new Date();
		return (saleDate.getFullYear() === today.getFullYear() && saleDate.getMonth() === today.getMonth());
	}).length;
	const averagePurchase = (totalSales ?? 0) / (sales?.length ?? 0);
	const fakeGrowth = Math.random();
	const salesMonths = [
		{ month: "Jan", value: (Math.random() * 12000 + 6000) },
		{ month: "Feb", value: (Math.random() * 12000 + 6000) },
		{ month: "Mar", value: (Math.random() * 12000 + 6000) },
		{ month: "Apr", value: (Math.random() * 12000 + 6000) },
		{ month: "May", value: (Math.random() * 12000 + 6000) },
		{ month: "Jun", value: (Math.random() * 12000 + 6000) },
		{ month: "Jul", value: (Math.random() * 12000 + 6000) },
		{ month: "Ago", value: (Math.random() * 12000 + 6000) },
		{ month: "Sep", value: (Math.random() * 12000 + 6000) },
		{ month: "Oct", value: (Math.random() * 12000 + 6000) },
		{ month: "Nov", value: (Math.random() * 12000 + 6000) },
		{ month: "Dec", value: (Math.random() * 12000 + 6000) },
	];
	const salesByProduct = products?.map(product => {
		const saleByProd = sales?.filter(sale => sale.product.id === product.id).reduce((sum, val) => sum + val.total, 0);
		return {
			product: product.title,
			value: saleByProd
		};
	}).sort((a, b) => (b.value ?? 0) - (a.value ?? 0)).slice(0, 8) ?? [];

	function formatterFunction(value: number) {
		return value.toLocaleString("EN-US", { style: "currency", currency: "USD" });
	}

	console.log({ salesByProduct });

	return (
		<PageLayout title="Sales">
			<div className="flex flex-col md:flex-row w-full gap-3">
				<Card className="flex flex-col gap-2 items-center">
					<span className="text-mid-accent">Total Sales</span>
					<h3>{totalSales?.toLocaleString("EN-US", { style: "currency", currency: "USD" })}</h3>
				</Card>
				<Card className="flex flex-col gap-2 items-center">
					<span className="text-mid-accent">Orders this month</span>
					<h3>{orderMonth}</h3>
				</Card>
				<Card className="flex flex-col gap-2 items-center">
					<span className="text-mid-accent">Average purchase</span>
					<h3>{averagePurchase.toLocaleString("EN-US", { style: "currency", currency: "USD" })}</h3>
				</Card>
				<Card className="flex flex-col gap-2 items-center">
					<span className="text-mid-accent">Growth this month</span>
					<h3>{fakeGrowth.toLocaleString("EN-US", { style: "percent" })}</h3>
				</Card>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3">
				<Card title="Sales last year">
					<ResponsiveContainer width="100%" height="100%" aspect={isMobile ? 0.4 : 0.8} >
						<BarChart data={salesMonths}>
							<Bar radius={[isMobile ? 2 : 6, isMobile ? 2 : 6, 0, 0]} dataKey="value" fill="#136691" />
							<XAxis dataKey="month" />
							<YAxis />
						</BarChart>
					</ResponsiveContainer>
				</Card>

				<Card title="Top 8 products by sales">
					<ResponsiveContainer width="100%" height="100%" aspect={isMobile ? 0.4 : 0.8} >
						<BarChart data={salesByProduct} layout="vertical">
							<Bar label={{ position: "outside", fill: "white", formatter: formatterFunction }} radius={[0, isMobile ? 4 : 6, isMobile ? 4 : 6, 0]} dataKey="value" fill="#136691" />
							<XAxis type="number" />
							<YAxis type="category" dataKey="product" width={100} />
						</BarChart>
					</ResponsiveContainer>
				</Card>
			</div>
		</PageLayout>
	);
}