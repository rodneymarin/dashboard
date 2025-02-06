import { PropsWithChildren } from "react";

interface PageLayoutProps extends PropsWithChildren {
	title?: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
	return (
		<>
			<h3 className="w-full">{title}</h3>
			<div className="w-full overflow-y-auto flex flex-col gap-9 pr-2">
				{children}
			</div>
		</>
	);
}