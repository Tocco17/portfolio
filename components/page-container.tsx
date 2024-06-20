type PageContainerProps = {
	children: React.ReactNode
}

export const PageContainer: PropsComponent<PageContainerProps> = ({
	children
}: PageContainerProps) => {
	return (<>
		<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
			{children}
		</div>
	</>
	)
}