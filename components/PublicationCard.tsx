"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface PublicationCardProps {
	title: string;
	year: string;
	journal: string;
	volume: string;
	pages?: string;
	role: string;
	type: string;
	description: string;
	link: string | null;
}

export default function PublicationCard({
	title,
	year,
	journal,
	volume,
	pages,
	role,
	type,
	description,
	link,
}: PublicationCardProps) {
	const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

	const content = (
		<>
			<div className="flex items-start justify-between mb-sm">
				<div className="flex-1">
					<h3 className="text-lg md:text-xl font-semibold text-text-primary mb-xs group-hover:text-accent transition-colors duration-300 leading-tight">
						{title}
					</h3>
					<div className="text-xs text-accent uppercase tracking-wider font-semibold mb-sm">
						{type}
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
						className="text-text-muted group-hover:text-accent transition-colors duration-300 flex-shrink-0 ml-md"
					>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				)}
			</div>

			<div className="text-sm text-text-secondary mb-xs">{journal}</div>
			<div className="text-xs text-text-muted mb-md">
				{volume} {pages && `· ${pages}`}
			</div>

			<p className="text-sm md:text-base text-text-secondary leading-phi mb-md">
				{description}
			</p>

			<div className="flex items-center gap-md text-xs text-text-muted">
				<span className="font-semibold text-accent">{role}</span>
				<span>·</span>
				<span>{year}</span>
			</div>
		</>
	);

	const baseClasses = `p-lg md:p-xl bg-bg-secondary border border-border rounded transition-all duration-700 ${
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
			className={`block ${baseClasses} ${hoverClasses}`}
		>
			{content}
		</a>
	) : (
		<div ref={ref} className={`${baseClasses}`}>
			{content}
		</div>
	);
}
