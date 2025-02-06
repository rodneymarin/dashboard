import { ReactElement } from "react";
import { cn } from "../../../utils/utils";
import { NavbarLink } from "./NavbarLink";

interface NavbarProps {
	className?: string;
	children?: ReactElement<NavbarLink> | ReactElement<NavbarLink>[];
}

export function Navbar({ children, className, ...props }: NavbarProps) {
	return (
		<nav className={cn("fixed flex flex-col gap-1.5 w-60 top-0 bottom-0 -left-full md:left-0 bg-background p-6 transition-all duration-200", className)} {...props}>
			{children}
		</nav>
	);
}