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

export const metadata: Metadata = {
	title:
		"Bayu Yudistira Ramadhan - Computer Science Student & Full Stack Developer",
	description:
		"Computer Science student from Udayana University specializing in IoT systems, machine learning, and full-stack development. Published researcher with experience in Laravel, Vue.js, React, and embedded systems. Based in Bali, Indonesia.",
	keywords: [
		"Bayu Yudistira Ramadhan",
		"Computer Science",
		"Full Stack Developer",
		"IoT Systems",
		"Machine Learning",
		"Udayana University",
		"Laravel",
		"Vue.js",
		"React",
		"Next.js",
		"Arduino",
		"Fuzzy Logic",
		"Indonesia",
		"Bali",
		"Web Development",
		"Embedded Systems",
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
		url: "https://bayudistira.vercel.app",
		title: "Bayu Yudistira Ramadhan - Computer Science Student & Developer",
		description:
			"Computer Science student specializing in IoT, machine learning, and full-stack development. Published researcher from Udayana University, Indonesia.",
		siteName: "Bayu Yudistira Ramadhan Portfolio",
		images: [
			{
				url: "https://bayudistira.vercel.app/og-image.png", // We'll create this
				width: 1200,
				height: 630,
				alt: "Bayu Yudistira Ramadhan - Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Bayu Yudistira Ramadhan - Computer Science Student",
		description:
			"IoT systems, machine learning, and full-stack development. Published researcher from Bali, Indonesia.",
		images: ["https://bayudistira.vercel.app/og-image.png"],
	},
	verification: {
		// Add these later if you want
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
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
							url: "https://bayudistira.vercel.app",
							image: "https://bayudistira.vercel.app/logo.png",
							jobTitle: "Computer Science Student & Full Stack Developer",
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
								addressCountry: "Indonesia",
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
								"Fuzzy Logic",
								"Embedded Systems",
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
