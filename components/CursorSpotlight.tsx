"use client";

import { useEffect } from "react";

export default function CursorSpotlight() {
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const spotlight = document.getElementById("cursor-spotlight");
			if (spotlight) {
				spotlight.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(255, 107, 53, 0.06), transparent 80%)`;
			}
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			id="cursor-spotlight"
			className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
			style={{
				background:
					"radial-gradient(600px at 50% 50%, rgba(255, 107, 53, 0.06), transparent 80%)",
			}}
		/>
	);
}
