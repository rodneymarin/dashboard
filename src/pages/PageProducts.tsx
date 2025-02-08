import { Accordion } from "../components/base/accordion/Accordion";
import { useAppContext } from "../context/AppContext";
import { PageLayout } from "../layout/PageLayout";

export default function PageProducts() {
	const { clients, sales } = useAppContext();

	return (
		<PageLayout title="Clients">
			<div className="flex flex-col gap-1.5">
				{
					clients?.sort((a, b) => a.firstName.localeCompare(b.firstName)).map(client => {
						const sale = sales?.find(s => s.buyer.id === client.id);
						return (
							<Accordion title={client.fullName}>
								<div className="flex flex-col gap-3 px-6">
									<div className="flex gap-2">
										<span className="text-mid-accent">{client.id}</span>
										{"- "}
										{client.fullName}
									</div>
									<div className="flex gap-2">
										<span>{client.gender}</span>
										<div
											data-status={client.status}
											className="w-fit px-3 py-1 rounded-full text-mid-accent text-xs data-[status=Disabled]:bg-disabled-bg data-[status=Pending]:bg-yellow-700/20 data-[status=Active]:bg-green-700/20"
										>
											{client.status}
										</div>
									</div>
									Recent purchase at {sale?.formattedDate} for {sale?.formattedTotal}
								</div>
							</Accordion>);
					})
				}
			</div>
		</PageLayout>
	);
}