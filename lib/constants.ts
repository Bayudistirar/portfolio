// Golden Ratio Constants
export const PHI = 1.618;

// Personal Information
export const PERSONAL_INFO = {
	name: "Bayu Yudistira",
	nameAccent: "Ramadhan",
	title: "Computer Science Student",
	tagline:
		"Building intelligent systems at the intersection of IoT, machine learning, and full-stack development. Specializing in wireless sensor networks with hands-on experience in scalable web applications.",
	location: "Denpasar, Bali · Indonesia",
	university: "Udayana University",
	major: "Computer Science | Wireless Sensor Network",
	gpa: "3.74/4.00",
	phone: "087776479695",
	email: "bayuramadhaan81@gmail.com",
	expectedGraduation: "Sep 2026",
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
	linkedin: "https://linkedin.com/in/bayu-yudistira-ramadhan",
	email: "mailto:bayuramadhaan81@gmail.com",
};

// Email obfuscation helper (use in components to prevent spam bots)
export const getEmail = () => {
	const user = "bayuramadhaan81";
	const domain = "gmail.com";
	return `${user}@${domain}`;
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
			"Developed and maintained web applications using PHP Laravel and Vue.js. Collaborated with senior developers to implement new features and optimize database queries for improved performance.",
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
			"Pursuing Bachelor's degree in Computer Science with a focus on IoT systems, machine learning, and full-stack development. Current GPA: 3.74/4.00. Active in research projects developing practical projects in IoT systems, full-stack development, and intelligent algorithms. Published research on fuzzy logic-based IoT systems in national journals.",
		tech: ["IoT Systems", "Web Development", "Research", "Embedded Systems"],
		link: "https://www.unud.ac.id/",
	},
];

// Projects Data
export const PROJECTS = [
	{
		id: 1,
		title: "Fuzzy Credit Scoring Decision Support System",
		year: "2024 - 2025",
		description:
			"Developed intelligent credit assessment system using fuzzy logic algorithm implementing 5C credit analysis (Character, Capacity, Capital, Collateral, Condition). Built with MATLAB for fuzzy inference engine and web interface for user interaction. Officially copyrighted by Indonesian Ministry of Law (Registration No. 000850583).",
		tech: [
			"MATLAB",
			"Fuzzy Logic",
			"Decision Support System",
			"Credit Scoring",
			"Web Interface",
		],
		icon: "💳",
		github: "https://github.com/Bayudistirar/fuzzy-credit-system",
	},
	{
		id: 2,
		title: "IoT Aloe Vera Monitoring System",
		year: "2023 - 2024",
		description:
			"IoT-based system maintaining optimal Aloe vera growing conditions through automated monitoring and control. Processes real-time data from LM35 temperature and SEN1 soil moisture sensors using Arduino Uno. Implements fuzzy logic control in MATLAB to automatically activate water pump and cooling fan based on environmental conditions.",
		tech: [
			"Arduino Uno",
			"Fuzzy Logic",
			"MATLAB",
			"Tinkercad",
			"IoT",
			"Sensor Integration",
		],
		icon: "🌱",
	},
	{
		id: 3,
		title: "LOKACMS - Custom Content Management System",
		year: "2024",
		description:
			"Full-featured CMS platform developed during internship at PT Econdelight. Built with PHP Laravel for robust backend architecture and Vue.js for dynamic, reactive frontend. Implemented user authentication, role-based access control, content versioning, and media management. Optimized database queries resulting in improved page load performance.",
		tech: ["PHP", "Laravel", "Vue.js", "MySQL", "Authentication", "CMS"],
		icon: "📝",
		github: "https://github.com/Bayudistirar/LOKACMS-PKL-BAYU",
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
		description:
			"Developed IoT-based monitoring system using fuzzy logic algorithm for optimal Aloe vera cultivation conditions.",
		link: "http://ojs.unud.ac.id/index.php/jnatia/article/download/115988/57452/",
	},
];
