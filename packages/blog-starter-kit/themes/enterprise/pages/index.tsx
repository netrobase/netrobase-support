import Link from 'next/link';
import DefaultFooter from '../components/custom/defaultFooter';
import DefaultLayout from '../components/custom/defaultLayout';
import DefaultNavigation from '../components/custom/defaultNavigation';
import { BottomHeroSVG, TopHeroSVG } from '../components/custom/heroSVG';

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-5 overflow-hidden bg-black lg:grid-cols-7">
				<iframe
					src="https://status.netrobase.dev/badge?theme=dark"
					loading="lazy"
					width="250"
					height="30"
					frameBorder="0"
					scrolling="no"
					style={{ colorScheme: 'none' }}
					className="z-10 col-start-2 sm:col-start-3 md:col-start-3 lg:col-start-4"
				></iframe>
			</div>
			<DefaultLayout>
				<DefaultNavigation hasTopStatusBar={true} />
				<TopHeroSVG />
				<BottomHeroSVG />
				<main className="m-2 flex flex-col space-y-28 p-2">
					<div className="m-2 flex flex-col space-y-2 p-2">
						<section className="grid h-svh grid-cols-1 grid-rows-8">
							<div className="row-start-3 flex flex-col space-y-10 text-left lg:ml-10">
								<h1 className="text-3xl lg:text-4xl">Coding Dreams To Reality</h1>
								<p className="text-lg">
									We deliver custom software development and<br></br> maintenance services to
									Businesses and Institutions.
								</p>
								<Link
									href="/support"
									className="border-primary-700 hover:bg-primary-700 z-10 h-fit w-fit border-2 px-2 py-4 text-center text-xl hover:text-white"
								>
									Explore Help Center
								</Link>
							</div>
						</section>
					</div>
				</main>
				<DefaultFooter />
			</DefaultLayout>
		</>
	);
}
