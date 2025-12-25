"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;
			const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
			setScrollProgress(Math.min(progress, 100));
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-[2px] bg-border z-50 pointer-events-none">
			<div
				className="h-full bg-accent transition-all duration-150 ease-out"
				style={{ width: `${scrollProgress}%` }}
			/>
		</div>
	);
}
