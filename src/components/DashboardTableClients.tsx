import { useAppContext } from "../context/AppContext";
import { Table } from "./base/table/Table";
import { TableBody } from "./base/table/TableBody";
import { TableCell } from "./base/table/TableCell";
import { TableHead } from "./base/table/TableHead";
import { TableHeader } from "./base/table/TableHeader";
import { TableRow } from "./base/table/TableRow";

interface DashboardTableClientsProps {
	limit: number;
}

export function DashboardTableClients({ limit }: DashboardTableClientsProps) {
	const { clients } = useAppContext();

	return (
		<>
			{/** -----------------------
			 *           Desktop
			 ---------------------------*/}
			<Table className="hidden md:flex md:flex-col">
				<TableHeader className="border-b-2 border-background">
					<TableHead className="flex-1">Name</TableHead>
					<TableHead className="w-[12ch] text-center">Gender</TableHead>
					<TableHead className="w-[12ch] text-center">Status</TableHead>
				</TableHeader>

				<TableBody>
					{clients?.slice(0, limit).map((client) => {
						return (
							<TableRow key={client.id} className="hover:bg-hover px-6">
								<TableCell className="flex-1">{client.fullName}</TableCell>
								<TableCell className="w-[12ch] text-center">{client.gender}</TableCell>
								<TableCell className="w-[12ch] text-center">
									<div
										data-status={client.status}
										className="w-full px-1.5 py-1 rounded-full text-mid-accent text-xs data-[status=Disabled]:bg-disabled-bg data-[status=Pending]:bg-yellow-700/20 data-[status=Active]:bg-green-700/20"
									>
										{client.status}
									</div>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>

			{/** ---------------------------
			 *        Mobile
			 ------------------------------*/}
			<div className="w-full flex md:hidden flex-col  divide-y-2 divide-background">
				{clients?.slice(0, limit).map((client) => {
					return (
						<div className="w-full flex flex-col py-6 hover:bg-hover">
							<div className="flex flex-col px-6 gap-2">
								<div className="w-full">{client.fullName}</div>
								<div className="flex gap-2 w-fit">
									<div className="w-full text-mid-accent">{client.gender}</div>
									<div
										data-status={client.status}
										className="w-fit px-3 py-1 rounded-full text-mid-accent text-xs data-[status=Disabled]:bg-disabled-bg data-[status=Pending]:bg-yellow-700/20 data-[status=Active]:bg-green-700/20"
									>
										{client.status}
									</div>
								</div>

							</div>
						</div>
					);
				})}

			</div>
		</>
	);
}