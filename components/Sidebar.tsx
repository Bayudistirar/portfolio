"use client";

import { PERSONAL_INFO, NAV_ITEMS } from "@/lib/constants";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
	return (
		<aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[38.2%] flex-col justify-between p-3xl bg-gradient-to-br from-bg-primary to-bg-secondary border-r border-border">
			<div className="relative">
				<h1 className="font-serif text-4xl xl:text-5xl font-semibold text-text-primary mb-sm tracking-tighter leading-tight">
					{PERSONAL_INFO.name}
					<span className="block text-accent">{PERSONAL_INFO.nameAccent}</span>
				</h1>

				<h2 className="text-xl xl:text-2xl text-text-secondary mb-xl font-light tracking-wide">
					{PERSONAL_INFO.title}
				</h2>

				<p className="text-base text-text-muted leading-phi mb-xl max-w-[61.8%]">
					{PERSONAL_INFO.tagline}
				</p>

				{/* Resume Download Button */}
				<a
					href="/resume.pdf"
					download="Bayu_Yudistira_Ramadhan_Resume.pdf"
					className="inline-flex items-center gap-sm px-lg py-md bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent text-accent rounded transition-all duration-300 mb-2xl group"
				>
					<svg
						width="16"
						height="16"
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
					<span className="text-sm font-medium">Download Resume</span>
				</a>

				<Navigation items={NAV_ITEMS} />
			</div>

			<SocialLinks />
		</aside>
	);
}
