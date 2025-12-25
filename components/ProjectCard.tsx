"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	year: string;
	description: string;
	tech: string[];
	link?: string | null;
	icon: string;
	image?: string;
	github?: string | null;
	demo?: string | null;
}

export default function ProjectCard({
	title,
	year,
	description,
	tech,
	link,
	icon,
	image,
	github,
	demo,
}: ProjectCardProps) {
	const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

	const primaryLink = link || github || demo;

	const handleLinkClick = (e: React.MouseEvent, url: string) => {
		e.preventDefault();
		e.stopPropagation();
		window.open(url, "_blank", "noopener,noreferrer");
	};

	const content = (
		<>
			{/* Image or Icon */}
			{image ? (
				<div className="relative w-full md:w-[200px] lg:w-[240px] h-[160px] md:h-[140px] lg:h-[160px] flex-shrink-0 bg-bg-tertiary rounded overflow-hidden">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-500"
					/>
				</div>
			) : (
				<div className="flex items-center justify-center w-lg md:w-xl lg:w-2xl h-lg md:h-xl lg:h-2xl bg-accent/10 rounded text-xl md:text-2xl lg:text-[2rem] flex-shrink-0">
					{icon}
				</div>
			)}

			<div className="flex-1">
				<div className="flex items-start justify-between mb-xs md:mb-sm">
					<div>
						<h3 className="text-lg md:text-xl font-semibold text-text-primary mb-xs group-hover:text-accent transition-colors duration-300 leading-tight">
							{title}
						</h3>
						<div className="text-xs text-text-muted uppercase tracking-[0.15em] font-semibold">
							{year}
						</div>
					</div>
					{primaryLink && (
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="text-text-muted group-hover:text-accent transition-colors duration-300"
						>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					)}
				</div>
				<p className="text-sm md:text-base text-text-secondary leading-phi mb-sm md:mb-md">
					{description}
				</p>
				<div className="flex flex-wrap gap-xs md:gap-sm mb-md">
					{tech.map((item, index) => (
						<span
							key={index}
							className="px-sm py-xs bg-accent/10 text-accent text-[0.688rem] rounded font-semibold uppercase tracking-wide"
						>
							{item}
						</span>
					))}
				</div>

				{/* GitHub and Demo Links - Use buttons instead of anchors to avoid nesting */}
				{((github && github !== primaryLink) ||
					(demo && demo !== primaryLink)) && (
					<div className="flex gap-md">
						{github && github !== primaryLink && (
							<button
								onClick={(e) => handleLinkClick(e, github)}
								className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-xs cursor-pointer"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
								</svg>
								Code
							</button>
						)}
						{demo && demo !== primaryLink && (
							<button
								onClick={(e) => handleLinkClick(e, demo)}
								className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-xs cursor-pointer"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									<polyline points="15 3 21 3 21 9" />
									<line x1="10" y1="14" x2="21" y2="3" />
								</svg>
								Demo
							</button>
						)}
					</div>
				)}
			</div>
		</>
	);

	const baseClasses = `flex flex-col md:flex-row gap-md md:gap-lg p-md md:p-lg lg:p-xl bg-bg-secondary border border-border rounded transition-all duration-700 ${
		isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
	}`;

	const hoverClasses =
		"hover:bg-bg-tertiary hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(255,107,53,0.12),0_0_48px_rgba(255,107,53,0.08)] group";

	return primaryLink ? (
		<a
			ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
			href={primaryLink}
			target="_blank"
			rel="noopener noreferrer"
			className={`${baseClasses} ${hoverClasses}`}
		>
			{content}
		</a>
	) : (
		<div ref={ref} className={`${baseClasses} ${hoverClasses} cursor-default`}>
			{content}
		</div>
	);
}
