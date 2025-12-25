// Golden Ratio
export const PHI = 1.618;

// Personal Information
export const PERSONAL_INFO = {
	name: "Bayu Yudistira",
	nameAccent: "Ramadhan",
	title: "Computer Science Student",
	tagline:
		"Building intelligent systems at the intersection of IoT, machine learning, and full-stack development. Specializing in wireless sensor networks with hands-on experience in scalable web applications.",
	contact: {
		email: "bayuramadhaan81@gmail.com",
		phone: "087776479695",
	},
};

// Navigation Items
export const NAV_ITEMS = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "publications", label: "Publications" },
];

// Social Links
export const SOCIAL_LINKS = {
	github: "https://github.com/Bayudistirar",
	linkedin: "https://www.linkedin.com/in/bayu-yudistira-ramadhan/",
	instagram: "https://www.instagram.com/bayudistira.r/",
	email: "mailto:bayuramadhaan81@gmail.com",
};

// Experience Data
export const EXPERIENCE = [
	{
		id: 1,
		date: "AUG — SEP 2024",
		role: "Full Stack Developer Intern",
		company: "PT Econdelight",
		type: "Internship",
		description:
			"Built custom CMS with Laravel and Vue.js. Implemented authentication, role-based access control, and optimized database queries for improved performance.",
		tech: ["PHP", "Laravel", "Vue.js", "MySQL", "Git"],
		link: "https://gecko.co.id/",
	},
	{
		id: 2,
		date: "SEP 2022 — PRESENT",
		role: "Computer Science Student",
		company: "Udayana University",
		type: "Education",
		description:
			"Focus on IoT systems, machine learning, and full-stack development. Current GPA: 3.74/4.00. Published research on fuzzy logic-based IoT systems.",
		tech: ["IoT Systems", "Web Development", "Research", "Embedded Systems"],
		link: "https://www.unud.ac.id/",
	},
];

// Projects Data
export const PROJECTS = [
	{
		id: 1,
		title: "Fuzzy Credit Scoring System",
		year: "2024 - 2025",
		description:
			"Intelligent credit assessment using fuzzy logic for 5C analysis. Built with MATLAB and web interface. Officially copyrighted by Indonesian Ministry of Law.",
		tech: ["MATLAB", "Fuzzy Logic", "Decision Support System"],
		icon: "💳",
		// Remove: image: "/projects/fuzzy-credit.jpg",
		link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
		github: "https://github.com/Bayudistirar/fuzzy-credit-system",
	},
	{
		id: 2,
		title: "IoT Aloe Vera Monitoring",
		year: "2024",
		description:
			"Automated plant monitoring with fuzzy logic control. Processes real-time sensor data to regulate water pump and cooling fan. Published in national journal.",
		tech: ["Arduino Uno", "Fuzzy Logic", "MATLAB", "IoT"],
		icon: "🌱",
		// Remove: image: "/projects/aloe-vera.jpg",
		link: "http://ojs.unud.ac.id/index.php/jnatia/article/download/115988/57452/",
	},
	{
		id: 3,
		title: "LOKACMS",
		year: "2024",
		description:
			"Full-featured content management system with Laravel backend and Vue.js frontend. User authentication, RBAC, content versioning, and media management.",
		tech: ["PHP", "Laravel", "Vue.js", "MySQL"],
		icon: "📝",
		// Remove: image: "/projects/lokacms.jpg",
		demo: "https://www.figma.com/proto/bo7B3d7uEJK5yJpyOuIHWf/PKL?page-id=0%3A1&node-id=55-48&p=f&viewport=363%2C-1373%2C0.09&t=9825OYFGVR8y5Nxs-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=55%3A48",
	},
];

// Publications Data
export const PUBLICATIONS = [
	{
		id: 1,
		title:
			"Simulasi IoT Pemantauan Tanaman Lidah Buaya Berbasis Algoritma Fuzzy",
		year: "2024",
		journal: "Jurnal Nasional Teknologi Informasi dan Aplikasinya",
		volume: "Vol. 3 No. 1",
		pages: "pp. 189-194",
		role: "First Author",
		type: "Research Paper",
		description:
			"IoT monitoring system using fuzzy logic for optimal Aloe vera cultivation conditions.",
		link: "http://ojs.unud.ac.id/index.php/jnatia/article/download/115988/57452/",
	},
	{
		id: 2,
		title: "Sistem Fuzzy Pendukung Keputusan Kelayakan Kredit 5C",
		year: "2025",
		journal: "Kementerian Hukum dan HAM Republik Indonesia",
		volume: "Sentra HKI UNUD",
		pages: "Registration No. 000850583",
		role: "Creator",
		type: "Copyright",
		description:
			"Official copyright registration for fuzzy logic-based credit feasibility decision support system implementing 5C credit analysis.",
		link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
	},
];
