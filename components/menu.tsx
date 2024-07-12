import Link from "next/link"

export const Menu: Component = () => {
	return (<>
		<div className="menu-container">
			<Link className="menu-link" href="/">Home</Link>
			<Link className="menu-link" href="/about">About</Link>
		</div>
	</>)
}

const Navbar: Component = () => {
	return (<>
	</>)
}


export const Footer: Component = () => {
	return (<>
		<footer>Website developed with Next js, typescript and tailwind css. Deployed through AWS. v0.1.0</footer>
	</>)
}

type PageContainerProps = {
	children: React.ReactNode;
}

export const PageContainer: PropsComponent<PageContainerProps> = ({
	children
}) => {
	return (<>
		<div
			className="container"
		>
			{children}
		</div>
	</>)
}