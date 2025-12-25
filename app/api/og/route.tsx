import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "center",
				backgroundColor: "#0a0a0a",
				padding: "80px",
				fontFamily: "system-ui",
			}}
		>
			{/* Accent bar */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "8px",
					background: "#ff6b35",
				}}
			/>

			{/* Main content */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				<h1
					style={{
						fontSize: "72px",
						fontWeight: "700",
						color: "#e8e8e8",
						margin: 0,
						lineHeight: 1.1,
					}}
				>
					Bayu Yudistira <span style={{ color: "#ff6b35" }}>Ramadhan</span>
				</h1>

				<p
					style={{
						fontSize: "36px",
						color: "#a0a0a0",
						margin: 0,
						fontWeight: "400",
					}}
				>
					Computer Science Student
				</p>

				<div
					style={{
						display: "flex",
						gap: "16px",
						flexWrap: "wrap",
						marginTop: "32px",
					}}
				>
					{["IoT Systems", "Machine Learning", "Full-Stack Development"].map(
						(skill) => (
							<span
								key={skill}
								style={{
									padding: "12px 24px",
									backgroundColor: "rgba(255, 107, 53, 0.1)",
									color: "#ff6b35",
									fontSize: "20px",
									borderRadius: "8px",
									fontWeight: "600",
								}}
							>
								{skill}
							</span>
						),
					)}
				</div>

				<p
					style={{
						fontSize: "24px",
						color: "#888888",
						margin: 0,
						marginTop: "48px",
					}}
				>
					📍 Udayana University · Bali, Indonesia
				</p>
			</div>

			{/* Bottom right decoration */}
			<div
				style={{
					position: "absolute",
					bottom: "80px",
					right: "80px",
					fontSize: "20px",
					color: "#888888",
				}}
			>
				bayudistira.vercel.app
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
