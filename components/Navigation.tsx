"use client";

import { useState, useEffect } from "react";

interface NavItem {
	id: string;
	label: string;
}

interface NavigationProps {
	items: NavItem[];
}

export default function Navigation({ items }: NavigationProps) {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = items.map((item) => document.getElementById(item.id));
			const scrollPosition = window.scrollY + 200;

			for (const section of sections) {
				if (section) {
					const sectionTop = section.offsetTop;
					const sectionHeight = section.clientHeight;

					if (
						scrollPosition >= sectionTop &&
						scrollPosition < sectionTop + sectionHeight
					) {
						setActiveSection(section.id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [items]);

	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="mb-2xl">
			{items.map((item) => (
				<button
					key={item.id}
					onClick={() => handleClick(item.id)}
					className={`flex items-center w-full py-md text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 group ${
						activeSection === item.id
							? "text-text-primary"
							: "text-text-muted hover:text-text-primary"
					}`}
				>
					<span
						className={`h-px mr-md transition-all duration-300 ${
							activeSection === item.id
								? "w-xl bg-accent opacity-100"
								: "w-lg bg-text-muted opacity-30 group-hover:w-xl group-hover:bg-accent group-hover:opacity-100"
						}`}
					/>
					{item.label}
				</button>
			))}
		</nav>
	);
}
