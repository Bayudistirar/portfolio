import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-jetbrains-mono",
	display: "swap",
	preload: true,
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-playfair",
	display: "swap",
	preload: true,
});

const siteUrl = "https://bayudistira.vercel.app";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: "Bayu Yudistira Ramadhan | IoT & Full-Stack Developer",
	description:
		"Computer Science student at Udayana University specializing in IoT systems, machine learning, and full-stack web development with Laravel, Vue.js, and React. Published researcher in fuzzy logic systems with hands-on experience building intelligent solutions.",
	keywords: [
		"Bayu Yudistira Ramadhan",
		"Computer Science",
		"Full Stack Developer",
		"IoT Systems",
		"Machine Learning",
		"Udayana University",
		"Laravel Developer",
		"Vue.js Developer",
		"React Developer",
		"Next.js",
		"Arduino",
		"Fuzzy Logic",
		"Indonesia Developer",
		"Bali",
		"Web Development",
		"Embedded Systems",
		"ESP32",
		"MATLAB",
	],
	authors: [{ name: "Bayu Yudistira Ramadhan" }],
	creator: "Bayu Yudistira Ramadhan",
	publisher: "Bayu Yudistira Ramadhan",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/logo.png",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		title:
			"Bayu Yudistira Ramadhan | IoT & Full-Stack Developer from Indonesia",
		description:
			"Computer Science student specializing in IoT systems, machine learning, and full-stack development. Published researcher with experience in Laravel, Vue.js, React, and embedded systems. Building intelligent solutions at Udayana University, Bali.",
		siteName: "Bayu Yudistira Ramadhan",
		images: [
			{
				url: "/api/og", // Changed to use dynamic OG image
				width: 1200,
				height: 630,
				alt: "Bayu Yudistira Ramadhan - IoT & Full-Stack Developer",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Bayu Yudistira Ramadhan | IoT & Full-Stack Developer",
		description:
			"Computer Science student specializing in IoT, machine learning, and full-stack development. Published researcher building intelligent solutions with Laravel, Vue.js, and React.",
		images: ["/api/og"], // Changed to use dynamic OG image
	},
	verification: {
		// Add these later if you want Google Search Console
		// google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>

				{/* JSON-LD Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Bayu Yudistira Ramadhan",
							url: siteUrl,
							image: `${siteUrl}/logo.png`,
							jobTitle: "Computer Science Student & Full Stack Developer",
							description:
								"IoT systems specialist and full-stack developer with published research in fuzzy logic systems",
							worksFor: {
								"@type": "Organization",
								name: "Udayana University",
							},
							alumniOf: {
								"@type": "EducationalOrganization",
								name: "Udayana University",
							},
							address: {
								"@type": "PostalAddress",
								addressLocality: "Denpasar",
								addressRegion: "Bali",
								addressCountry: "ID",
							},
							sameAs: [
								"https://github.com/Bayudistirar",
								"https://www.linkedin.com/in/bayu-yudistira-ramadhan/",
								"https://www.instagram.com/bayudistira.r/",
							],
							knowsAbout: [
								"IoT Systems",
								"Machine Learning",
								"Full Stack Development",
								"Laravel",
								"Vue.js",
								"React",
								"Next.js",
								"Arduino",
								"ESP32",
								"Fuzzy Logic",
								"Embedded Systems",
								"Web Development",
							],
						}),
					}}
				/>
			</head>
			<body
				className={`${jetbrainsMono.variable} ${playfair.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
