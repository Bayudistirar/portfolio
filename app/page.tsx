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
						{PUBLICATIONS.map((pub) => {
							const content = (
								<>
									<div className="flex items-start justify-between mb-sm">
										<div className="flex-1">
											<h3 className="text-lg md:text-xl font-semibold text-text-primary mb-xs group-hover:text-accent transition-colors duration-300 leading-tight">
												{pub.title}
											</h3>
											<div className="text-xs text-accent uppercase tracking-wider font-semibold mb-sm">
												{pub.type}
											</div>
										</div>
										{pub.link && (
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

									<div className="text-sm text-text-secondary mb-xs">
										{pub.journal}
									</div>
									<div className="text-xs text-text-muted mb-md">
										{pub.volume} {pub.pages && `· ${pub.pages}`}
									</div>

									<p className="text-sm md:text-base text-text-secondary leading-phi mb-md">
										{pub.description}
									</p>

									<div className="flex items-center gap-md text-xs text-text-muted">
										<span className="font-semibold text-accent">
											{pub.role}
										</span>
										<span>·</span>
										<span>{pub.year}</span>
									</div>
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
								<div key={pub.id} className={`${baseClasses}`}>
									{content}
								</div>
							);
						})}
					</div>
				</section>

				{/* Footer */}
				<footer className="pt-lg lg:pt-xl mt-lg lg:mt-xl border-t border-border">
					<p className="text-sm text-text-muted mb-sm">
						Designed & built by Bayu Yudistira Ramadhan
					</p>
					<p className="text-xs text-text-muted/60">
						Next.js · TypeScript · Tailwind CSS
					</p>
					<p className="text-xs text-text-muted/60 mt-md">
						Denpasar, Bali · 2025
					</p>
				</footer>
			</main>
		</div>
	);
}
