"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ToastProps {
	message: string;
	onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
	useEffect(() => {
		const timer = setTimeout(onClose, 2000);
		return () => clearTimeout(timer);
	}, [onClose]);

	// Use portal to render at document root, escaping parent stacking contexts
	if (typeof window === "undefined") return null;

	return createPortal(
		<div className="fixed bottom-lg right-lg z-[9999] animate-slide-up pointer-events-none">
			<div className="bg-bg-tertiary border border-accent/30 rounded px-lg py-md shadow-lg backdrop-blur-md pointer-events-auto">
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
		</div>,
		document.body,
	);
}
