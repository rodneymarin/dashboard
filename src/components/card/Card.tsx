import { HTMLAttributes } from "react";
import { cn } from "../../utils/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> { }

export function Card({ children, className }: CardProps) {
	return <div className={cn("rounded-lg p-6 bg-card", className)}>{children}</div>;
}