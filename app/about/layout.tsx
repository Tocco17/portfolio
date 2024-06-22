export default function AboutPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (<>
		{/* <div> */}
			<div>Layout</div>
			<div>
				<p>Link pagine</p>
				<ul>
					<li>Passions</li>
					<li>Studies</li>
					<li>Work Experience</li>
					<li>Extra curriculum experience</li>
					<li>Skills</li>
					<li>Certificates</li>
				</ul>
			</div>
			<div>{children}</div>
		{/* </div> */}
	</>)
}