"use client";

import { PERSONAL_INFO, NAV_ITEMS } from "@/lib/constants";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
	return (
		<aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[38.2%] flex-col justify-between p-2xl bg-gradient-to-br from-bg-primary to-bg-secondary border-r border-border overflow-y-auto">
			<div className="relative">
				<h1 className="font-serif text-3xl xl:text-4xl font-semibold text-text-primary mb-sm tracking-tighter leading-tight">
					{PERSONAL_INFO.name}
					<span className="block text-accent">{PERSONAL_INFO.nameAccent}</span>
				</h1>

				<h2 className="text-lg xl:text-xl text-text-secondary mb-lg font-light tracking-wide">
					{PERSONAL_INFO.title}
				</h2>

				<p className="text-sm text-text-muted leading-phi mb-xl max-w-[61.8%]">
					{PERSONAL_INFO.tagline}
				</p>

				<Navigation items={NAV_ITEMS} />

				{/* Resume Download Button */}
				<a
					href="/resume.pdf"
					download="Bayu_Yudistira_Ramadhan_Resume.pdf"
					className="inline-flex items-center gap-sm px-md py-sm bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent text-accent rounded transition-all duration-300 mt-lg group"
				>
					<svg
						width="14"
						height="14"
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
					<span className="text-xs font-medium">Download Resume</span>
				</a>
			</div>

			<div className="mt-lg">
				<SocialLinks />
			</div>
		</aside>
	);
}
