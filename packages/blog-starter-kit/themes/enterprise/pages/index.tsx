'use client';

import Link from 'next/link';
import Footer from '../components/custom/defaultFooter';
import DefaultLayout from '../components/custom/defaultLayout';
import DefaultNavigation from '../components/custom/defaultNavigation';

export default function Home() {
	return (
		<DefaultLayout>
			<div className="m-2 flex flex-col space-y-28 p-2">
				<DefaultNavigation />
				<main className="m-2 flex flex-col space-y-2 p-2">
					<section className="grid h-screen grid-cols-1 grid-rows-8">
						<div className="row-start-5 flex flex-col space-y-10 text-left sm:row-start-4 md:row-start-3 lg:row-start-3 lg:ml-20">
							<h1 className="text-4xl">Coding Dreams To Reality</h1>
							<p className="text-lg">
								We deliver custom software development and<br></br> maintenance services to
								Businesses and Institutions.
							</p>
							<Link
								href="/support"
								className="border-primary-700 hover:bg-primary-700 h-fit w-fit border-2 px-2 py-4 text-center text-xl hover:text-white"
							>
								Explore Help Center
							</Link>
						</div>
					</section>
					{/* <section className="h-screen bg-black"></section> */}
					{/* <section className="h-screen bg-neutral-500"></section> */}
				</main>
				<Footer />
			</div>
		</DefaultLayout>
	);
}
