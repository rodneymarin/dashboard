import { Link } from "react-router-dom";
import { Card } from "../components/base/card/Card";
import { PageLayout } from "../layout/PageLayout";

export default function PageAbout() {
	return (
		<PageLayout title="About">
			<Card className="flex justify-center">
				<div className="max-w-2xl w-fit flex flex-col gap-2">
					<p>This demo proyect was created by me, Rodney, using React, Tailwind, custom components, ReCharts and RESTApi calls to Fake Store Api. Also this proyect is 100% mobile frendly.</p>
					<p>You can contact me at <Link className="px-2 py-0.5 rounded-sm bg-mid-accent/20" to="mailto:rodney.marin@gmail.com">rodney.marin@gmail.com</Link></p>
				</div>
			</Card>
		</PageLayout>
	);
}