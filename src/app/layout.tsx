import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Gerador de Posts",
	description: "Gerador de Posts para redes sociais",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
