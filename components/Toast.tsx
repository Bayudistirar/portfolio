"use client";
import { useEffect } from "react";

interface ToastProps {
	message: string;
	onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
	useEffect(() => {
		const timer = setTimeout(onClose, 2000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div className="fixed bottom-lg right-lg z-50 animate-slide-up">
			<div className="bg-bg-tertiary border border-accent/30 rounded px-lg py-md shadow-lg backdrop-blur-md">
				<p className="text-sm text-text-primary flex items-center gap-sm">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="text-accent"
					>
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
					{message}
				</p>
			</div>
		</div>
	);
}
