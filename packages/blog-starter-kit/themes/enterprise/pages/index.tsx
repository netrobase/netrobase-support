'use client';

import Link from 'next/link';
import Footer from '../components/custom/defaultFooter';
import DefaultNavigation from '../components/custom/defaultNavigation';

export default function Home() {
	return (
		<div className="m-2 bg-white p-2 text-black">
			<DefaultNavigation />
			<main className="m-2 flex flex-col space-y-2">
				<section className="flex h-screen flex-row items-end pb-20 text-left">
					<div className="flex flex-col space-y-10">
						<h1 className="font-mono text-4xl">Coding Dreams To Reality</h1>
						<p className="font-mono text-lg">
							We deliver custom software development and<br></br> maintenance services to Businesses
							and Institutions.
						</p>
						<Link
							href="/support"
							className="h-fit w-fit border-2 border-blue-700 px-2 py-4 text-center font-mono font-bold hover:bg-blue-700 hover:text-white"
						>
							Explore Help Center
						</Link>
					</div>
				</section>
				<section className="h-screen bg-black">{/* Implement */}</section>
				<section className="h-screen bg-neutral-500">{/* Implement */}</section>
			</main>
			<Footer />
		</div>
	);
}
