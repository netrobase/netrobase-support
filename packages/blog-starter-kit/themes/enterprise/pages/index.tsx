'use client';

import Link from 'next/link';
import Footer from '../components/custom/defaultFooter';
import DefaultNavigation from '../components/custom/defaultNavigation';

export default function Home() {
	return (
		<div>
			<div className="fixed left-0 right-0 top-0">
				<DefaultNavigation />
			</div>
			<main>
				<section className="flex h-screen flex-row items-end p-14 text-left md:p-20">
					<div className="ml-8 flex flex-col space-y-10">
						<h1 className="font-mono text-4xl">Coding Dreams To Reality</h1>
						<p className="font-mono text-lg">
							We deliver custom software development and<br></br> maintenance services to Businesses
							and Institutions.
						</p>
						<Link
							href="/support"
							className="w-fit border-2 border-blue-700 p-4 text-center font-mono font-bold hover:bg-blue-700 hover:text-white"
						>
							Explore Help Center
						</Link>
					</div>
				</section>
				<Footer />
			</main>
		</div>
	);
}
