import { FiMenu } from "react-icons/fi";

interface TopNavBarProps {
	onMenuClick: () => void;
}

export function TopNavBar({ onMenuClick }: TopNavBarProps) {
	return (
		<div className="flex top-0 w-full h-10 bg-card items-center px-6 text-mid-accent">
			<div className="hidden md:flex w-full justify-between">
				<span >Dashboard proyect</span>
				<span>Developed by Rodney Marin</span>
			</div>
			<div className="md:hidden flex w-full justify-between">
				<FiMenu size={24} className="shrink-0" onClick={() => onMenuClick()} />
				<span>Developed by Rodney Marin</span>
			</div>
		</div>
	);
}