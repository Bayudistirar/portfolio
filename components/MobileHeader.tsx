"use client";
import { useState } from "react";
import { PERSONAL_INFO, NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

export default function MobileHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	return (
		<>
			<header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-md border-b border-border">
				<div className="flex items-center justify-between px-lg py-md">
					<div>
						<h1 className="font-serif text-xl font-semibold text-text-primary tracking-tighter">
							{PERSONAL_INFO.name}{" "}
							<span className="text-accent">{PERSONAL_INFO.nameAccent}</span>
						</h1>
						<p className="text-xs text-text-muted">{PERSONAL_INFO.title}</p>
					</div>

					{/* Animated Hamburger Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="relative w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors duration-300"
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						<div className="w-6 h-5 flex flex-col justify-between">
							{/* Top line */}
							<span
								className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
									isMenuOpen
										? "rotate-45 translate-y-2"
										: "rotate-0 translate-y-0"
								}`}
							/>
							{/* Middle line */}
							<span
								className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
									isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
								}`}
							/>
							{/* Bottom line */}
							<span
								className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
									isMenuOpen
										? "-rotate-45 -translate-y-2"
										: "rotate-0 translate-y-0"
								}`}
							/>
						</div>
					</button>
				</div>
			</header>

			{/* Backdrop */}
			<div
				className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
					isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setIsMenuOpen(false)}
			/>

			{/* Sliding Menu */}
			<nav
				className={`lg:hidden fixed top-[100px] right-0 bottom-0 w-[80%] max-w-sm bg-bg-secondary border-l border-border z-40 transition-transform duration-300 ease-in-out ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex flex-col h-full p-lg">
					{/* Navigation Items */}
					<div className="flex-1 space-y-sm">
						{NAV_ITEMS.map((item, index) => (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								className="w-full text-left py-md px-md text-sm tracking-[0.15em] uppercase font-medium text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded transition-all duration-300 flex items-center group"
								style={{
									animationDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
								}}
							>
								<span
									className={`h-px mr-md transition-all duration-300 ${
										isMenuOpen
											? "w-lg bg-accent opacity-100"
											: "w-0 bg-text-muted opacity-0"
									} group-hover:w-xl group-hover:bg-accent group-hover:opacity-100`}
									style={{
										transitionDelay: isMenuOpen
											? `${index * 50 + 100}ms`
											: "0ms",
									}}
								/>
								{item.label}
							</button>
						))}
					</div>

					{/* Resume Download Button */}
					<div className="py-lg border-t border-border">
						<a
							href="/resume.pdf"
							download="Bayu_Yudistira_Ramadhan_Resume.pdf"
							className="flex items-center justify-center gap-sm px-lg py-md bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent text-accent rounded transition-all duration-300 group"
							onClick={() => setIsMenuOpen(false)}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="group-hover:translate-y-1 transition-transform duration-300"
							>
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
								<polyline points="7 10 12 15 17 10" />
								<line x1="12" y1="15" x2="12" y2="3" />
							</svg>
							<span className="text-sm font-medium">Download Resume</span>
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-lg pt-md pb-lg border-t border-border">
						<a
							href={SOCIAL_LINKS.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1"
							aria-label="GitHub"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
						<a
							href={SOCIAL_LINKS.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1"
							aria-label="LinkedIn"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect x="2" y="9" width="4" height="12"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</a>
						<a
							href={SOCIAL_LINKS.email}
							className="text-text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1"
							aria-label="Email"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
								<polyline points="22,6 12,13 2,6"></polyline>
							</svg>
						</a>
					</div>
				</div>
			</nav>
		</>
	);
}
