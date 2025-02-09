import { ReactElement } from "react";
import { cn } from "../../../utils/utils";
import { NavbarLink } from "./NavbarLink";

interface NavbarProps {
	className?: string;
	children?: ReactElement<NavbarLink> | ReactElement<NavbarLink>[];
	mobileVisible: boolean;
	onClose: () => void;
}

export function Navbar({ mobileVisible, onClose, children, className, ...props }: NavbarProps) {

	return (
		<>
			<div data-hidden={!mobileVisible} className="absolute z-10 md:hidden data-[hidden=true]:hidden inset-0 w-screen h-screen" onClick={() => onClose()} />
			<nav data-visible={mobileVisible} className={cn("bg-background top-0 md:top-10 data-[visible=true]:left-0 data-[visible=false]:-left-full md:data-[visible=true]:left-0 md:data-[visible=false]:left-0  absolute md:relative gap-1.5 w-60 h-screen md:h-[calc(100vh-40px)] shrink-0 p-6 z-20 transition-all duration-200", className)} {...props}>
				{children}
			</nav>
		</>
	);
}