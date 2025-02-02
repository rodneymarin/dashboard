import { PropsWithChildren } from "react";

interface PageLayoutProps extends PropsWithChildren {
	title?: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
	return (
		<>
			<h3>{title}</h3>
			<div className="w-full overflow-y-auto flex flex-col gap-3">
				{children}
			</div>
		</>
	);
}