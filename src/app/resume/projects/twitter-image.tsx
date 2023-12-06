import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Hugo Champy";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
	// Font
	const interSemiBold = fetch(
		new URL("src/assets/fonts/Geist-SemiBold.otf", import.meta.url),
	).then((res) => res.arrayBuffer());

	return new ImageResponse(
		// ImageResponse JSX element
		<div
			style={{
				fontSize: "4.75rem",
				background: "#ffffff",
				color: "#020817",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<span
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					padding: "1rem",
				}}
			>
				<span
					style={{
						fontSize: "2rem",

						color: "#479efa",
					}}
				>
					Hugo/
				</span>
				<span
					style={{
						marginTop: "-.75rem",
					}}
				>
					Projects
				</span>
			</span>
			<span
				style={{
					color: "#353945",
					fontSize: "2.5rem",
					fontWeight: 400,
				}}
			>
				Full stack developer
			</span>
		</div>,
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
			fonts: [
				{
					name: "Inter",
					data: await interSemiBold,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
}
