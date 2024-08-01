'use client';

import Link from 'next/link';
import Footer from '../components/custom/defaultFooter';
import DefaultLayout from '../components/custom/defaultLayout';
import DefaultNavigation from '../components/custom/defaultNavigation';

export default function Home() {
	return (
		<DefaultLayout>
			<div className="m-2 p-2">
				<DefaultNavigation />
				<main className="m-2 flex flex-col space-y-2">
					<section className="flex h-screen flex-row items-end pb-20 text-left">
						<div className="flex flex-col space-y-10">
							<h1 className="font-mono text-4xl">Coding Dreams To Reality</h1>
							<p className="font-mono text-lg">
								We deliver custom software development and<br></br> maintenance services to
								Businesses and Institutions.
							</p>
							<Link
								href="/support"
								className="border-primary-700 hover:bg-primary-700 h-fit w-fit border-2 px-2 py-4 text-center font-mono font-bold hover:text-white"
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
