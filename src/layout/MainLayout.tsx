import { useState } from "react";
import { FiBox, FiDollarSign, FiHelpCircle, FiHome, FiUsers } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/base/navigation/Navbar";
import { NavbarLink } from "../components/base/navigation/NavbarLink";
import { TopNavBar } from "../components/base/navigation/TopNavBar";


export default function MainLayout() {
	const [isNavBarVisibleMobile, setIsNavBarVisibleMobile] = useState(false);

	return (
		<main className="w-screen h-screen overflow-hidden bg-background flex flex-col text-foreground">
			<TopNavBar onMenuClick={() => setIsNavBarVisibleMobile(val => !val)} />
			<div className="flex max-h-[calc(100vh-40px)]">
				<Navbar mobileVisible={isNavBarVisibleMobile} onClose={() => setIsNavBarVisibleMobile(false)} className="flex flex-col justify-between">
					<div className="flex flex-col gap-1.5">
						<NavbarLink to="dashboard" onClick={() => setIsNavBarVisibleMobile(false)}><FiHome className="w-6 h-6 shrink-0" />Dashboard</NavbarLink>
						<NavbarLink to="sales" onClick={() => setIsNavBarVisibleMobile(false)}><FiDollarSign className="w-6 h-6 shrink-0" />Sales</NavbarLink>
						<NavbarLink to="clients" onClick={() => setIsNavBarVisibleMobile(false)}><FiUsers className="w-6 h-6 shrink-0" />Clients</NavbarLink>
						<NavbarLink to="products" onClick={() => setIsNavBarVisibleMobile(false)}><FiBox className="w-6 h-6 shrink-0" />Products</NavbarLink>
					</div>
					<NavbarLink to="about"><FiHelpCircle className="w-6 h-6 shrink-0" />About</NavbarLink>
				</Navbar>

				<div className="w-full">
					<section className="flex flex-col gap-5 p-6 w-full h-full">
						<Outlet />
					</section>
				</div>
			</div>
		</main>
	);
}