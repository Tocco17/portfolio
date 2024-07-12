import PagesMetaHead from "@/components/layout/PagesMetaHead";
import { PageContainer } from "../components/page-container";
import { PageTitle } from "../components/page-title";
import Image from 'next/image'

export default function Home() {
	return (<>
		<div className="homepage">
			<h1 className="homepage-title">Federico's Portfolio</h1>

			<div className="homepage-page">

				<div className="homepage-paragraph">
					<h2>Hi, I'm Federico</h2>
					<p>Wander around to see who I am!</p>
					<div className="contacts-link">

						<a href="https://www.linkedin.com/in/federico-ruocco/" target="_blank">
							<img
								src="linkedin-icon-light.png"
								alt="Linkedin"
							/>
						</a>

						<a href="https://github.com/Tocco17" target="_blank">
							<img
								src="github-icon.png"
								alt="Github"
							/>
						</a>

						<a href="mailto:fede.ruocco@gmail.com" target="_blank">
							<img
								src="gmail-icon.png"
								alt="gmail"
							/>
						</a>

					</div>
				</div>

				<img className="homepage-photo" src="/io.jpg" alt="io" />
			</div>
		</div>
	</>);
}
