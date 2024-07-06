import { NextPage } from "next"
import { useEffect, useState } from "react"

type PagedProps = {
	pages: JSX.Element[]
}

export const Paged: NextPage<PagedProps> = ({
	pages
}) => {
	const [numberOfPages, setNumberOfPages] = useState(pages.length)
	const [pageIndex, setPageIndex] = useState(0)

	useEffect(() => {
		setNumberOfPages(pages.length)
	}, [pages.length])

	const handlePageArrowClick = (index: number) => {
		return () => setPageIndex(index)
	}

	return (<>
		<div className="pages">
			{
				pages.map((page, index) => (
					<div key={`page-${index}`} className={`paged ${index === pageIndex ? 'active' : 'hidden'}`} >
						{page}
					</div>
				))
			}

		</div>
		<div className="page-arrows">
			{
				pages.map((_, index) => (
					<button
						key={`page-arrow-${index}`}
						className={`page-arrow ${index === pageIndex ? 'active' : 'hidden'}`}
						onClick={handlePageArrowClick(index)}
					>
						{index}
					</button>
				))
			}
		</div>
	</>)
}