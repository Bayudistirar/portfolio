"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface ExperienceItemProps {
	date: string;
	role: string;
	company: string;
	type: string;
	description: string;
	tech: string[];
	link: string | null;
}

export default function ExperienceItem({
	date,
	role,
	company,
	type,
	description,
	tech,
	link,
}: ExperienceItemProps) {
	const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

	const content = (
		<>
			<div className="text-xs text-text-muted uppercase tracking-[0.15em] font-semibold mb-md md:mb-0">
				{date}
			</div>
			<div>
				<h3 className="text-lg md:text-xl font-semibold text-text-primary mb-xs group-hover:text-accent transition-colors duration-300 leading-tight">
					{role}
				</h3>
				<div className="text-sm text-text-secondary mb-md">
					{company} · {type}
				</div>
				<p className="text-sm md:text-base text-text-secondary leading-phi mb-md">
					{description}
				</p>
				<div className="flex flex-wrap gap-xs md:gap-sm">
					{tech.map((item, index) => (
						<span
							key={index}
							className="px-sm py-xs bg-accent/10 text-accent text-[0.688rem] rounded font-semibold uppercase tracking-wide"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</>
	);

	const baseClasses = `grid grid-cols-1 md:grid-cols-[calc(61.8%/4)_1fr] gap-md md:gap-xl p-md md:p-lg lg:p-xl bg-bg-secondary border border-border rounded transition-all duration-700 ${
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
