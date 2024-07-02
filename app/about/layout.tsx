import Link from "next/link";

export default function AboutPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (<>
		<div className="page-with-menu">
			<ul className="horizontal-navbar">
				<li><Link href="/about">Introduction</Link></li>
				<li><Link href="/about/passions">Passions</Link></li>
				<li><Link href="/about/studies">Studies</Link></li>
				<li><Link href="/about/work">Work Experience</Link></li>
				{/* <li><Link href="/about/extra">Extra curriculum experience</Link></li> */}
				<li><Link href="/about/skills">Skills</Link></li>
				{/* <li><Link href="/about/certificates">Certificates</Link></li> */}
			</ul>
			<div className="page">{children}</div>
		</div>
	</>)
}