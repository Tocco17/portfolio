import Link from "next/link";

export default function AboutPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (<>
		<div className="menued-paged">
			<div className="left-menu">
				<Link className="menu-link" href="/about">Introduction</Link>
				<Link className="menu-link" href="/about/passions">Passions</Link>
				<Link className="menu-link" href="/about/studies">Studies</Link>
				<Link className="menu-link" href="/about/work">Work Experience</Link>
				{/* <Link className="menu-link" href="/about/extra">Extra curriculum experience</Link> */}
				<Link className="menu-link" href="/about/skills">Skills</Link>
				{/* <Link className="menu-link" href="/about/certificates">Certificates</Link> */}
			</div>

			<div className="page">
				{children}
			</div>
		</div>
	</>)

	return (<>
		<div className="page-with-menu">
			<div className="horizontal-navbar">
				<ul>
					<li><Link href="/about">Introduction</Link></li>
					<li><Link href="/about/passions">Passions</Link></li>
					<li><Link href="/about/studies">Studies</Link></li>
					<li><Link href="/about/work">Work Experience</Link></li>
					<li><Link href="/about/extra">Extra curriculum experience</Link></li>
					<li><Link href="/about/skills">Skills</Link></li>
					<li><Link href="/about/certificates">Certificates</Link></li>
				</ul>
			</div>
			<div className="page">{children}</div>
		</div>
	</>)
}