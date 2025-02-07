import { HTMLAttributes, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { cn } from "../../../utils/utils";

interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
	title?: string;
	subtitle?: string;
	classNameWrapper?: string;
	classNameHeader?: string;
	classNameTitle?: string;
	classNameSubtitle?: string;
}

function ChevronIcon({ open }: { open: boolean; }) {
	return open ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />;
}

export function Accordion({ title, subtitle, classNameTitle, classNameSubtitle, classNameWrapper, classNameHeader, children, ...props }: AccordionProps) {
	const [isOpen, setIsOpen] = useState(false);

	function handleHeaderClick() {
		setIsOpen((val) => !val);
	}

	return (
		<div data-open={isOpen} className={cn("bg-card w-full rounded-sm data-[open=false]:cursor-pointer", classNameWrapper)} {...props}>
			<div
				data-open={isOpen}
				className={cn("flex w-full hover:bg-hover py-3 cursor-pointer gap-1.5 border-background data-[open=true]:border-b-2 data-[open=false]:border-b-0", classNameHeader)}
				onClick={() => handleHeaderClick()}
			>
				<div className="flex px-6 justify-between items-center w-full gap-3">
					<div className="flex w-full justify-between items-center">
						<span className={cn("", classNameTitle)}>{title}</span>
						<span className={cn("", classNameSubtitle)}>{subtitle}</span>
					</div>
					<ChevronIcon open={isOpen} />
				</div>
			</div>
			<div data-open={isOpen} className="data-[open=true]:h-auto data-[open=false]:h-0 data-[open=true]:py-3">
				{isOpen && children}
			</div>
		</div>
	);
}
