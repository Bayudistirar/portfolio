"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show button after scrolling 400px
			setIsVisible(window.scrollY > 400);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-lg right-lg z-50 w-12 h-12 bg-bg-tertiary border border-accent/30 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300 shadow-lg hover:shadow-[0_8px_16px_rgba(255,107,53,0.3)] lg:bottom-xl lg:right-xl ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-4 pointer-events-none"
			}`}
			aria-label="Back to top"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="12" y1="19" x2="12" y2="5"></line>
				<polyline points="5 12 12 5 19 12"></polyline>
			</svg>
		</button>
	);
}
