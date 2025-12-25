import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import CursorSpotlight from "@/components/CursorSpotlight";
import { EXPERIENCE, PROJECTS, PUBLICATIONS } from "@/lib/constants";

export default function Home() {
	return (
		<div className="flex min-h-screen">
			<CursorSpotlight />
			<MobileHeader />
			<Sidebar />

			<main className="w-full lg:ml-[38.2%] lg:w-[61.8%] px-lg md:px-xl lg:px-3xl pt-[120px] md:pt-[140px] lg:pt-3xl pb-lg md:pb-xl lg:pb-2xl">
				{/* About Section */}
				<section
					id="about"
					className="mb-2xl lg:mb-3xl scroll-mt-[120px] lg:scroll-mt-2xl"
				>
					<div className="mb-lg lg:mb-xl">
						<div className="text-[0.688rem] md:text-xs text-accent tracking-[0.25em] font-semibold mb-sm uppercase">
							01
						</div>
						<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tighter">
							About
						</h2>
					</div>

					<div className="space-y-md lg:space-y-lg">
						<p className="text-base lg:text-lg text-text-secondary leading-phi">
							A results-oriented Computer Science student from{" "}
							<a
								href="https://www.unud.ac.id/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-accent after:opacity-30 hover:text-text-primary hover:after:opacity-100 transition-all duration-300"
							>
								Udayana University
							</a>{" "}
							with hands-on experience in full-stack development. Proficient in
							building and maintaining scalable web applications using PHP
							Laravel, Vue.js, and React.
						</p>

						<p className="text-base lg:text-lg text-text-secondary leading-phi">
							Combines strong software development fundamentals with practical
							IoT and hardware integration experience. Currently maintaining a{" "}
							<span className="text-accent font-semibold">3.74/4.00 GPA</span>{" "}
							while specializing in wireless sensor networks and developing
							intelligent systems that bridge the gap between embedded systems
							and modern web technologies.
						</p>

						<p className="text-base lg:text-lg text-text-secondary leading-phi">
							Published research on fuzzy logic-based IoT systems in national
							journals, with a focus on creating practical solutions for
							real-world problems. Eager to contribute to innovative,
							user-centric solutions that leverage the intersection of hardware
							and software engineering.
						</p>
					</div>
				</section>

				{/* Experience Section */}
				<section
					id="experience"
					className="mb-2xl lg:mb-3xl scroll-mt-[120px] lg:scroll-mt-2xl"
				>
					<div className="mb-lg lg:mb-xl">
						<div className="text-[0.688rem] md:text-xs text-accent tracking-[0.25em] font-semibold mb-sm uppercase">
							02
						</div>
						<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tighter">
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
						<div className="text-[0.688rem] md:text-xs text-accent tracking-[0.25em] font-semibold mb-sm uppercase">
							03
						</div>
						<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tighter">
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
						<div className="text-[0.688rem] md:text-xs text-accent tracking-[0.25em] font-semibold mb-sm uppercase">
							04
						</div>
						<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tighter">
							Publications
						</h2>
					</div>

					<div className="space-y-lg lg:space-y-xl">
						{PUBLICATIONS.map((pub) => {
							const content = (
								<>
									<h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary mb-sm group-hover:text-accent transition-colors duration-300 leading-tight">
										{pub.title}
									</h3>
									<div className="text-sm lg:text-base text-text-secondary mb-xs">
										{pub.journal} · {pub.volume} · {pub.pages}
									</div>
									<div className="text-xs lg:text-sm text-accent uppercase tracking-wider mb-md font-semibold">
										{pub.role} · {pub.year}
									</div>
									<p className="text-base lg:text-lg text-text-secondary leading-phi">
										{pub.description}
									</p>
								</>
							);

							const baseClasses =
								"p-lg md:p-xl bg-bg-secondary border border-border rounded transition-all duration-700";
							const hoverClasses =
								"hover:bg-bg-tertiary hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(255,107,53,0.12),0_0_48px_rgba(255,107,53,0.08)] group";

							return pub.link ? (
								<a
									key={pub.id}
									href={pub.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`block ${baseClasses} ${hoverClasses}`}
								>
									{content}
								</a>
							) : (
								<div key={pub.id} className={baseClasses}>
									{content}
								</div>
							);
						})}
					</div>
				</section>

				{/* Footer */}
				<footer className="pt-lg lg:pt-xl mt-lg lg:mt-xl border-t border-border">
					<p className="text-sm lg:text-base text-text-muted mb-sm">
						Designed & built by Bayu Yudistira Ramadhan
					</p>
					<p className="text-xs lg:text-sm text-text-muted/60">
						Next.js · TypeScript · Tailwind CSS
					</p>
					<p className="text-xs text-text-muted/60 mt-md">
						Denpasar, Bali · 2024
					</p>
				</footer>
			</main>
		</div>
	);
}
