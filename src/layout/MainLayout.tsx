import { Outlet } from "react-router-dom";
import { NavbarLink } from "../components/navigation/NavbarLink";
import { Navbar } from "../components/navigation/Navbar";
import { FiBox, FiHome, FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";


export default function MainLayout() {
	return (
		<main className="w-screen h-screen bg-background flex text-foreground">
			<Navbar>
				<NavbarLink value="dashboard"><FiHome className="w-6 h-6 shrink-0" /> Dashboard</NavbarLink>
				<NavbarLink value="clients"><FiUsers className="w-6 h-6 shrink-0" />Clients</NavbarLink>
				<NavbarLink value="messages"><FiMessageSquare className="w-6 h-6 shrink-0" />Messages</NavbarLink>
				<NavbarLink value="products"><FiBox className="w-6 h-6 shrink-0" />Products</NavbarLink>
				<NavbarLink value="settings"><FiSettings className="w-6 h-6 shrink-0" />Settings</NavbarLink>
			</Navbar>
			<div className="pl-80">
				<Outlet />
			</div>
		</main>
	);
}