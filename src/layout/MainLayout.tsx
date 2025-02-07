import { FiBox, FiDollarSign, FiHome, FiSettings, FiUsers } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/base/navigation/Navbar";
import { NavbarLink } from "../components/base/navigation/NavbarLink";


export default function MainLayout() {
	return (
		<main className="w-screen h-screen bg-background flex text-foreground">
			<Navbar>
				<NavbarLink to="dashboard"><FiHome className="w-6 h-6 shrink-0" />Dashboard</NavbarLink>
				<NavbarLink to="sales"><FiDollarSign className="w-6 h-6 shrink-0" />Sales</NavbarLink>
				<NavbarLink to="clients"><FiUsers className="w-6 h-6 shrink-0" />Clients</NavbarLink>
				<NavbarLink to="products"><FiBox className="w-6 h-6 shrink-0" />Products</NavbarLink>
				<NavbarLink to="settings"><FiSettings className="w-6 h-6 shrink-0" />Settings</NavbarLink>
			</Navbar>
			<div className="md:pl-60 w-full">
				<section className="flex flex-col gap-5 p-6 w-full h-full">
					<Outlet />
				</section>
			</div>
		</main>
	);
}