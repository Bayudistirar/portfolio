import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-jetbrains-mono",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-playfair",
});

export const metadata = {
	title: "Bayu Yudistira Ramadhan",
	description:
		"Computer Science student specializing in IoT systems, machine learning, and full-stack development.",
	icons: {
		icon: "/favicon.ico",
		apple: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${jetbrainsMono.variable} ${playfair.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
