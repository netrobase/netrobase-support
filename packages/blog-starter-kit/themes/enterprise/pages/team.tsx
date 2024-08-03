'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaDribbble, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';
import Footer from '../components/custom/defaultFooter';
import DefaultLayout from '../components/custom/defaultLayout';
import DefaultNavigation from '../components/custom/defaultNavigation';

export default function Team() {
	return (
		<DefaultLayout>
			<div className="m-2 flex flex-col space-y-28 p-2">
				<DefaultNavigation />
				<main className="m-2 flex flex-col items-center space-y-10 p-2">
					<h1 className="text-center text-4xl underline underline-offset-4">Engineering Team</h1>
					<section className="flex flex-row items-center">
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
							{/* Team members */}
							<div className="flex flex-col items-center space-y-2 rounded-md border p-5">
								<Image
									src="/images/leo.png"
									alt="Leonard Nzekwe"
									width={100}
									height={100}
									priority={true}
									placeholder="empty"
									className="h-auto w-auto rounded-full"
								/>
								<p>Leonard Nzekwe</p>
								<p>Software Engineer</p>
								<div className="flex flex-row space-x-2">
									<Link href="https://www.linkedin.com/in/leonardnzekwe/" target="_blank">
										<SlSocialLinkedin />
									</Link>
									<Link href="https://github.com/leonardnzekwe" target="_blank">
										<SiGithub />
									</Link>
									<Link href="https://twitter.com/LeonardNzekwe" target="_blank">
										<FaXTwitter />
									</Link>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-md border p-5">
								<Image
									src="/images/fortune.png"
									alt="Eso Fortunatus"
									width={100}
									height={100}
									priority={true}
									placeholder="empty"
									className="h-auto w-auto rounded-full"
								/>
								<p>Eso Fortunatus</p>
								<p>Front End/Web3 Developer</p>
								<div className="flex flex-row space-x-2">
									<Link href="https://www.linkedin.com/in/fortune-eso/" target="_blank">
										<SlSocialLinkedin />
									</Link>
									<Link href="https://github.com/michealfortunatus" target="_blank">
										<SiGithub />
									</Link>
									<Link href="https://twitter.com/DevvFortune" target="_blank">
										<FaXTwitter />
									</Link>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-md border p-5">
								<Image
									src="/images/stephen.png"
									alt="Anioche Stephen"
									width={100}
									height={100}
									priority={true}
									placeholder="empty"
									className="h-auto w-auto rounded-full"
								/>
								<p>Anioche Stephen</p>
								<p>UI/UX/Graphics Desingner</p>
								<div className="flex flex-row space-x-2">
									<Link href="https://www.linkedin.com/in/kc-aniochie/" target="_blank">
										<SlSocialLinkedin />
									</Link>
									<Link href="https://dribbble.com/Milly_Design" target="_blank">
										<FaDribbble />
									</Link>
									<Link href="https://www.instagram.com/kcee_milly/" target="_blank">
										<FaInstagram />
									</Link>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</DefaultLayout>
	);
}
