import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
import { cn } from "../../../utils/utils";

export interface NavbarLink extends NavLinkProps {

}


export function NavbarLink({ children, className, to, ...props }: NavbarLink) {
	const location = useLocation();
	const isSelected = location.pathname.includes(to.toString());

	return (
		<NavLink
			to={to}
			data-selected={isSelected}
			className={cn("flex gap-3.5 items-center px-3 py-2 rounded-md bg-none hover:bg-selected data-[selected=true]:bg-selected hover:cursor-pointer", className)}
			{...props}
		>
			{children}
		</NavLink>);
}