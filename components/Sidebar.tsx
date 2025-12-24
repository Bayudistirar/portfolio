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

				<p className="text-base text-text-muted leading-phi mb-2xl max-w-[61.8%]">
					{PERSONAL_INFO.tagline}
				</p>

				<Navigation items={NAV_ITEMS} />
			</div>

			<SocialLinks />
		</aside>
	);
}
