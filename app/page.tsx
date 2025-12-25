"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import PublicationCard from "@/components/PublicationCard";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { EXPERIENCE, PROJECTS, PUBLICATIONS } from "@/lib/constants";

export default function Home() {
	const [isLoaded] = useState(() => {
		if (typeof window === "undefined") return false;
		const hasVisited = sessionStorage.getItem("hasVisited");
		if (!hasVisited) {
			sessionStorage.setItem("hasVisited", "true");
			return false;
		}
		return true;
	});

	return (
		<div
			className={`flex min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0 animate-fade-in"}`}
		>
			<ScrollProgress />
			<CursorSpotlight />
			<MobileHeader />
			<Sidebar />
			<BackToTop />

			<main className="w-full lg:ml-[38.2%] lg:w-[61.8%] px-lg md:px-xl lg:px-3xl pt-[120px] md:pt-[140px] lg:pt-3xl pb-lg md:pb-xl lg:pb-2xl">
				{/* About Section */}
				<section
					id="about"
					className="mb-2xl lg:mb-3xl scroll-mt-[120px] lg:scroll-mt-2xl"
				>
					<div className="mb-lg lg:mb-xl">
						<div className="text-[0.688rem] text-accent tracking-[0.25em] font-semibold mb-xs uppercase">
							01
						</div>
						<h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary tracking-tighter">
							About
						</h2>
					</div>

					<div className="space-y-md">
						<p className="text-sm md:text-base text-text-secondary leading-phi">
							Back in 2022, I started exploring IoT systems and discovered my
							passion for building intelligent solutions that bridge hardware
							and software. Fast-forward to today, and I&apos;ve had the
							privilege of developing web applications at{" "}
							<a
								href="https://gecko.co.id/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-accent after:opacity-30 hover:text-text-primary hover:after:opacity-100 transition-all duration-300"
							>
								a tech company
							</a>
							, publishing research in national journals, and earning official
							copyright for my decision support system.
						</p>

						<p className="text-sm md:text-base text-text-secondary leading-phi">
							My main focus these days is building intelligent systems that
							combine IoT, machine learning, and full-stack development.
							I&apos;m currently pursuing my degree at{" "}
							<a
								href="https://www.unud.ac.id/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-accent after:opacity-30 hover:text-text-primary hover:after:opacity-100 transition-all duration-300"
							>
								Udayana University
							</a>{" "}
							with a <span className="text-accent font-semibold">3.74 GPA</span>
							, specializing in wireless sensor networks and scalable web
							applications.
						</p>

						<p className="text-sm md:text-base text-text-secondary leading-phi">
							When I&apos;m not coding, I&apos;m usually exploring new IoT
							projects, contributing to research in fuzzy logic systems, or
							experimenting with emerging technologies.
						</p>
					</div>
				</section>

				{/* Experience Section */}
				<section
					id="experience"
					className="mb-2xl lg:mb-3xl scroll-mt-[120px] lg:scroll-mt-2xl"
				>
					<div className="mb-lg lg:mb-xl">
						<div className="text-[0.688rem] text-accent tracking-[0.25em] font-semibold mb-xs uppercase">
							02
						</div>
						<h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary tracking-tighter">
							Experience
						</h2>
					</div>

					<div className="space-y-lg lg:space-y-xl">
						{EXPERIENCE.map((exp) => (
							<ExperienceItem key={exp.id} {...exp} />
						))}
					</div>
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="mb-2xl lg:mb-3xl scroll-mt-[120px] lg:scroll-mt-2xl"
				>
					<div className="mb-lg lg:mb-xl">
						<div className="text-[0.688rem] text-accent tracking-[0.25em] font-semibold mb-xs uppercase">
							03
						</div>
						<h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary tracking-tighter">
							Projects
						</h2>
					</div>

					<div className="space-y-lg lg:space-y-xl">
						{PROJECTS.map((project) => (
							<ProjectCard key={project.id} {...project} />
						))}
					</div>
				</section>

				{/* Publications Section */}
				<section
					id="publications"
					className="mb-2xl lg:mb-3xl scroll-mt-[120px] lg:scroll-mt-2xl"
				>
					<div className="mb-lg lg:mb-xl">
						<div className="text-[0.688rem] text-accent tracking-[0.25em] font-semibold mb-xs uppercase">
							04
						</div>
						<h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary tracking-tighter">
							Publications
						</h2>
					</div>

					<div className="space-y-lg lg:space-y-xl">
						{PUBLICATIONS.map((pub) => (
							<PublicationCard key={pub.id} {...pub} />
						))}
					</div>
				</section>

				{/* Footer */}
				<footer className="pt-lg lg:pt-xl mt-lg lg:mt-xl border-t border-border">
					<p className="text-sm text-text-muted mb-sm">
						Designed & built by Bayu Yudistira Ramadhan
					</p>
					<p className="text-xs text-text-muted opacity-75">
						Next.js · TypeScript · Tailwind CSS
					</p>
					<p className="text-xs text-text-muted opacity-75 mt-md">
						Denpasar, Bali · 2025
					</p>
				</footer>
			</main>
		</div>
	);
}
