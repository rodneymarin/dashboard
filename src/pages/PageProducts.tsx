import { Accordion } from "../components/base/accordion/Accordion";
import FilePreviewer from "../components/base/images/FilePreviewer";
import { useAppContext } from "../context/AppContext";
import { PageLayout } from "../layout/PageLayout";

export default function PageProducts() {
	const { products } = useAppContext();

	return (
		<PageLayout title="Products">
			<div className="flex flex-col gap-1.5">
				{
					products?.map(product => {
						return (
							<Accordion title={product.title} subtitle={product.formattedPrice}>
								<div className="flex flex-col gap-3 px-6">
									<div className="flex flex-col gap-6">
										<div className="flex flex-col gap-1	">
											Title
											<span className="text-mid-accent">{product.title}</span>
										</div>
										<div className="flex flex-col gap-1">
											Description
											<span className="text-mid-accent">{product.description}</span>
										</div>
										<div className="flex gap-2 flex-wrap">
											{
												product.images.map(image => {
													return <div className="max-w-32 md:max-w-3xs"><FilePreviewer fileURL={image} /></div>;
												})
											}
										</div>
									</div>
								</div>
							</Accordion>);
					})
				}
			</div>
		</PageLayout>
	);
}