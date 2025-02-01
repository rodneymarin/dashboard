import { ReactElement } from "react";
import { cn } from "../../utils/utils";
import { NavbarLink } from "./NavbarLink";

interface NavbarProps {
	className?: string;
	children?: ReactElement<NavbarLink> | ReactElement<NavbarLink>[];
}

export function Navbar({ children, className }: NavbarProps) {
	return (
		<nav className={cn("fixed flex flex-col gap-1.5 w-80 top-0 bottom-0 left-0 bg-background p-6", className)}>
			{children}
		</nav>
	);
}