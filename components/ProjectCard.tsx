"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface ProjectCardProps {
	title: string;
	year: string;
	description: string;
	tech: string[];
	link: string | null;
	icon: string;
}

export default function ProjectCard({
	title,
	year,
	description,
	tech,
	link,
	icon,
}: ProjectCardProps) {
	const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

	const content = (
		<>
			<div className="flex items-center justify-center w-lg md:w-xl lg:w-2xl h-lg md:h-xl lg:h-2xl bg-accent/10 rounded text-xl md:text-2xl lg:text-[2rem] flex-shrink-0">
				{icon}
			</div>
			<div className="flex-1">
				<div className="flex items-start justify-between mb-xs md:mb-sm">
					<div>
						<h3 className="text-lg md:text-xl lg:text-2xl font-medium text-text-primary mb-xs group-hover:text-accent transition-colors duration-300">
							{title}
						</h3>
						<div className="text-sm text-text-muted uppercase tracking-wider">
							{year}
						</div>
					</div>
					{link && (
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
				<p className="text-base lg:text-lg text-text-secondary leading-phi mb-sm md:mb-md">
					{description}
				</p>
				<div className="flex flex-wrap gap-xs md:gap-sm">
					{tech.map((item, index) => (
						<span
							key={index}
							className="px-sm py-xs bg-accent/10 text-accent text-xs rounded font-medium"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</>
	);

	const baseClasses = `flex gap-md md:gap-lg p-md md:p-lg lg:p-xl bg-bg-secondary border border-border rounded transition-all duration-700 ${
		isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
	}`;

	const hoverClasses =
		"hover:bg-bg-tertiary hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(255,107,53,0.12),0_0_48px_rgba(255,107,53,0.08)] group";

	return link ? (
		<a
			ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={`${baseClasses} ${hoverClasses}`}
		>
			{content}
		</a>
	) : (
		<div ref={ref} className={`${baseClasses} ${hoverClasses}`}>
			{content}
		</div>
	);
}
