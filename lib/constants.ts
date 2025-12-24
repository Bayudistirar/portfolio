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

// Experience Data
export const EXPERIENCE = [
	{
		id: 1,
		date: "Aug — Sep 2024",
		role: "Full Stack Developer",
		company: "PT Econdelight",
		type: "Internship",
		location: "Badung, Bali",
		description:
			"Developed and maintained a full-stack hotel website using PHP Laravel for the backend and React for the frontend. Implemented and optimized PostgreSQL database queries to enhance application performance and ensure scalability. Utilized Git for version control and collaborated within an Agile framework, actively participating in daily stand-ups and sprint planning.",
		tech: ["Laravel 11", "React", "PostgreSQL", "Git", "Agile"],
		link: null,
	},
	{
		id: 2,
		date: "Sep 2022 — Present",
		role: "Computer Science Student",
		company: "Udayana University",
		type: "Wireless Sensor Network",
		location: "Badung, Bali",
		description:
			"Pursuing Bachelor's degree in Computer Science with specialization in wireless sensor networks. Maintaining 3.74/4.00 GPA while developing practical projects in IoT systems, full-stack development, and intelligent algorithms. Published research on fuzzy logic-based IoT systems in national journals.",
		tech: ["IoT Systems", "Web Development", "Research", "Embedded Systems"],
		link: "https://www.unud.ac.id/",
	},
];

// Projects Data
export const PROJECTS = [
	{
		id: 1,
		title: "IoT-Based Automatic Door Control System",
		year: "2024",
		description:
			"ESP32-based automatic gate system with RFID/PIN authentication and proximity sensors for secure residential access control. Integrated conductive foil sensors on handles to differentiate interior/exterior access and servo actuators for automated gate operation. Implemented intelligent positioning control with magnetic sensors to ensure precise gate movement and safety stops.",
		tech: ["ESP32", "RFID", "Servo Control", "Security Systems", "Arduino"],
		link: null,
		icon: "🚪",
	},
	{
		id: 2,
		title: "Soil Moisture and Temperature Detection",
		year: "2023",
		description:
			"IoT-based system to maintain optimal growing conditions for Aloe vera by monitoring soil moisture and temperature. Utilized Arduino Uno to process real-time data from LM35 temperature sensor and SEN1 soil moisture sensor. Developed Fuzzy Logic control system in MATLAB to automatically activate water pump and fan. Built and tested virtual prototype using Tinkercad simulation platform.",
		tech: ["Arduino Uno", "Fuzzy Logic", "MATLAB", "Tinkercad", "IoT"],
		link: null,
		icon: "🌱",
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
