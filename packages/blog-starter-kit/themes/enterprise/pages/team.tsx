'use client';

import Footer from '../components/custom/defaultFooter';
import DefaultLayout from '../components/custom/defaultLayout';
import DefaultNavigation from '../components/custom/defaultNavigation';

export default function Team() {
	return (
		<DefaultLayout>
			<div className="m-2 flex flex-col space-y-40 p-2">
				<DefaultNavigation />
				<main className="m-2 flex h-screen flex-col items-center space-y-10">
					<h1 className="text-center font-mono text-4xl underline underline-offset-4">
						Engineering Team
					</h1>
					<section className="flex flex-row items-center">
						<div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
							{/* Team members */}
							<div className="flex flex-col space-y-2">
								<p>Leonard Nzekwe</p>
								<p>Software Engineer</p>
							</div>
							<div className="flex flex-col space-y-2">
								<p>Eso Fortunatus</p>
								<p>Front End/Web3 Developer</p>
							</div>
							<div className="flex flex-col space-y-2">
								<p>Anioche Stephen</p>
								<p>UI/UX/Graphics Desingner</p>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</DefaultLayout>
	);
}
