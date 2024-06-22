
export const Menu: Component = () => {
	return (<>
		<p>Piero</p>
	</>)
}

const Navbar: Component = () => {
	return (<>
	</>)
}


export const Footer: Component = () => {
	return (<>
		<p>Giacomo</p>
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