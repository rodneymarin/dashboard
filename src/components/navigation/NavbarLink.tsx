import { HTMLAttributes, useEffect, useState } from "react";
import { cn } from "../../utils/utils";

export interface NavbarLink extends HTMLAttributes<HTMLDivElement> {
	selected?: boolean;
	value: string;
	onSelected?: (value: string) => void;
}

export function NavbarLink({ children, className, selected = false, value, onSelected }: NavbarLink) {
	const [internalSelected, setInternalSelected] = useState(false);

	useEffect(() => {
		setInternalSelected(selected);
	}, [selected]);

	return (
		<div
			data-selected={internalSelected}
			className={cn("flex gap-3.5 items-center p-2.5 rounded-md bg-none hover:bg-selected data-[selected=true]:bg-selected hover:cursor-pointer", className)}
			onClick={() => onSelected && onSelected(value)}
		>
			{children}
		</div>);
}