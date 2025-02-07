import { useAppContext } from "../context/AppContext";
import { Table } from "./base/table/Table";
import { TableBody } from "./base/table/TableBody";
import { TableCell } from "./base/table/TableCell";
import { TableHead } from "./base/table/TableHead";
import { TableHeader } from "./base/table/TableHeader";
import { TableRow } from "./base/table/TableRow";

interface DashboardTableSalesProps {
	limit: number;
}

export function DashboardTableSales({ limit }: DashboardTableSalesProps) {
	const { sales } = useAppContext();

	return (
		<>
			{/** -----------------------
			 *           Desktop
			 ---------------------------*/}
			<Table className="hidden md:flex md:flex-col">
				<TableHeader className="border-b-2 border-background">
					<TableHead className="flex-1">Product</TableHead>
					<TableHead className="w-[12ch]">Date</TableHead>
					<TableHead className="w-[6ch] text-center">Qty</TableHead>
					<TableHead className="w-[10ch] text-center">Price</TableHead>
					<TableHead className="w-[10ch] text-center">Total</TableHead>
				</TableHeader>

				<TableBody>
					{sales?.sort((a, b) => b.timeStamp - a.timeStamp).slice(0, limit).map((sale) => {
						return (
							<TableRow key={sale.id} className="hover:bg-hover px-6">
								<TableCell className="flex-1">{sale.product.name}</TableCell>
								<TableCell className="w-[12ch]">{sale.formattedDate}</TableCell>
								<TableCell className="w-[6ch] text-center">{sale.quantity}</TableCell>
								<TableCell className="w-[10ch] text-center">{sale.formattedPrice}</TableCell>
								<TableCell className="w-[10ch] text-center">{sale.formattedTotal}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>

			{/** ---------------------------
			 *        Mobile
			 ------------------------------*/}
			<div className="w-full flex md:hidden flex-col divide-y-2 divide-background">
				{sales?.sort((a, b) => b.timeStamp - a.timeStamp).slice(0, limit).map((sale) => {
					return (
						<div className="w-full flex flex-col py-6 hover:bg-hover">
							<div className="flex flex-col px-6">
								<div className="w-full">{sale.product.name}</div>
								<div className="w-full text-mid-accent">Bought at: {sale.formattedDate}</div>
								<div className="w-full flex gap-x-3 flex-wrap">
									<span className="">Quantity: {sale.quantity}</span> <span className="">Price: {sale.formattedPrice}</span> <span className="">Total: {sale.formattedTotal}</span>
								</div>
							</div>
						</div>
					);
				})}

			</div>
		</>
	);
}