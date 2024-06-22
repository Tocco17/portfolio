
export const Menu: Component = () => {
	return (<>
		<div className="menu-container">
			<div className="menu-title">Federico's Portfolio</div>
			<div className="menu-link-container">
				<ul>
					<li className="menu-link">Home</li>
					<li className="menu-link">About</li>
				</ul>
			</div>
		</div>
	</>)
}

const Navbar: Component = () => {
	return (<>
	</>)
}


export const Footer: Component = () => {
	return (<>
		<p>Footer</p>
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