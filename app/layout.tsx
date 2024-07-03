import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Footer, Menu, PageContainer } from "../components/menu";

const inter = Inter({
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Federico Ruocco Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Menu />

				{children}

				<Footer />
			</body>
		</html>
	);
}
