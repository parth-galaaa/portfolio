"use client";

import { useState } from "react";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { HomeIcon } from "@heroicons/react/24/solid";

const navLinks = [
	{ name: "About", link: "#about" },
	{ name: "Experiences", link: "#experiences" },
	{ name: "Projects", link: "#project" },
	{ name: "Contact", link: "#contact" },
];

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="fixed mx-auto top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
			<Navbar className="w-full max-w-none px-4 py-2 md:px-8">
				{/* Desktop Navigation */}
				<NavBody>
					<a href="#" className="text-white">
						<button className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white">
							<HomeIcon className="h-6 w-6" />
						</button>
					</a>
					<NavItems
						items={navLinks}
						className="ml-auto justify-end text-[#ADB7BE] sm:text-xl"
						onItemClick={() => setIsMobileMenuOpen(false)}
					/>

				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<a href="#" className="text-white">
							<button className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white">
								<HomeIcon className="h-6 w-6" />
							</button>
						</a>
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
						className={`transition-colors duration-300 ${isMobileMenuOpen ? "bg-[rgba(18,18,18,0.95)]" : "bg-transparent"
							}`}
					>
						{navLinks.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="block px-4 py-2 text-[#ADB7BE] hover:text-white hover:font-bold"
							>
								{item.name}
							</a>
						))}
					</MobileNavMenu>

				</MobileNav>
			</Navbar>
		</div>
	);
}
