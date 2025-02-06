import { HTMLAttributes } from "react";
import { cn } from "../../../utils/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	classNameWrapper?: string;
}

export function Card({ title, classNameWrapper, children, className }: CardProps) {
	return (
		<div className={cn("flex flex-col gap-2 w-full", classNameWrapper)}>
			{title && <h4 className="">{title}</h4>}
			<div className={cn("rounded-lg p-6 bg-card w-full", className)}>{children}</div>
		</div>
	);
}