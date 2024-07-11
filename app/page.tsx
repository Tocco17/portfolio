import PagesMetaHead from "@/components/layout/PagesMetaHead";
import { PageContainer } from "../components/page-container";
import { PageTitle } from "../components/page-title";
import Image from 'next/image'

export default function Home() {
	return (<>
		<div className="homepage">
			<div className="homepage-title">
				<h2>Hi, I'm Federico</h2>
				<p>And this is my portfolio!</p>
			</div>
			
			<img className="homepage-photo" src="/io.jpg" alt="io" />
		</div>
	</>);
}
