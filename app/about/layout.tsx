"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "@react-icons/all-files/io/IoIosMenu";
import { IoClose } from "@react-icons/all-files/io5/IoClose";

export default function AboutPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(prev => !prev)
	}

	return (<>
		<div className="menued-paged">
			<div className={`left-menu ${open ? 'open' : 'closed'}`}>
				<button className="left-menu-button" onClick={handleClick}>
					{
						open 
						? (<IoClose height={'10em'}/>)
						: (<IoIosMenu height={'10em'}/>)
					}
				</button>
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
}