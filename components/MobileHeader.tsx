"use client";

import { useState } from "react";
import { PERSONAL_INFO, NAV_ITEMS } from "@/lib/constants";
import SocialLinks from "./SocialLinks";

export default function MobileHeader() {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false);
		}
	};

	return (
		<header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-[12px] border-b border-border">
			<div className="flex items-center justify-between px-lg py-md md:px-xl md:py-lg">
				<div>
					<h1 className="font-serif text-xl md:text-2xl font-semibold text-text-primary">
						{PERSONAL_INFO.name}{" "}
						<span className="text-accent">{PERSONAL_INFO.nameAccent}</span>
					</h1>
					<p className="text-sm md:text-base text-text-secondary mt-1">
						{PERSONAL_INFO.title}
					</p>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="p-sm text-text-primary hover:text-accent transition-colors"
					aria-label="Toggle menu"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						{isOpen ? (
							<path d="M18 6L6 18M6 6l12 12" />
						) : (
							<path d="M3 12h18M3 6h18M3 18h18" />
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="border-t border-border bg-bg-secondary">
					<div className="px-lg py-lg md:px-xl md:py-xl space-y-sm">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								className="block w-full text-left py-md text-base uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
							>
								{item.label}
							</button>
						))}
					</div>
					<div className="px-lg py-lg md:px-xl md:py-xl border-t border-border">
						<SocialLinks />
					</div>
				</nav>
			)}
		</header>
	);
}
