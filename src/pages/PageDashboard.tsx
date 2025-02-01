import { Card } from "../components/card/Card";

export default function PageDashboard() {
	return (
		<div className="flex flex-col md:flex-row w-full justify-between">
			<Card className="flex flex-col gap-4 items-center w-full">
				<span>Sales</span>
				<h3>{123}</h3>
			</Card>
		</div>
	);
}