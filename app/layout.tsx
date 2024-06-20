import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Menu } from "./menu";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<main className="flex min-h-screen flex-col items-center justify-between p-24">
					<Menu />
					{children}
				</main>
			</body>
		</html>
	);
}
