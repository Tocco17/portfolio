export default function AboutPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (<>
		<div>
			<div>Layout</div>
			<div>{children}</div>
		</div>
	</>)
}