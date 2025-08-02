import Image from 'next/image';
import Link from 'next/link';
import { FaDribbble, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';
import DefaultFooter from '../components/custom/defaultFooter';
import DefaultLayout from '../components/custom/defaultLayout';
import DefaultNavigation from '../components/custom/defaultNavigation';
import { TeamSVG } from '../components/custom/teamSVG';

export default function Team() {
	return (
		<DefaultLayout>
			<DefaultNavigation />
			<TeamSVG />
			<main className="m-2 flex flex-col items-center space-y-10 p-2">
				<h1 className="text-center text-4xl underline underline-offset-4">Engineering Team</h1>
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
					{/* Team members */}
					<div className="flex flex-col items-center space-y-2 rounded-md border p-5">
						<Image
							src="/images/netrobase_leonard.jpg"
							alt="Leonard Nzekwe"
							width={100}
							height={100}
							priority={true}
							placeholder="empty"
							className="h-auto w-auto rounded-full"
						/>
						<p>Leonard Nzekwe</p>
						<p className="text-sm">CTO/Web Dev (Backend & Frontend)</p>
						<div className="flex flex-row space-x-2">
							<Link href="https://www.linkedin.com/in/leonardnzekwe/" target="_blank">
								<SlSocialLinkedin />
							</Link>
							<Link href="https://github.com/leonardnzekwe" target="_blank">
								<SiGithub />
							</Link>
							<Link href="https://twitter.com/leonardnzekwe" target="_blank">
								<FaXTwitter />
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center space-y-2 rounded-md border p-5">
						<Image
							src="/images/netrobase_fortunatus.jpg"
							alt="Eso Fortunatus"
							width={100}
							height={100}
							priority={true}
							placeholder="empty"
							className="h-auto w-auto rounded-full"
						/>
						<p>Eso Fortunatus</p>
						<p>Front End/Web3 Dev</p>
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
							src="/images/netrobase_stephen.jpg"
							alt="Anioche Stephen"
							width={100}
							height={100}
							priority={true}
							placeholder="empty"
							className="h-auto w-auto rounded-full"
						/>
						<p>Anioche Stephen</p>
						<p>Product Designer</p>
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
					<div className="flex flex-col items-center space-y-2 rounded-md border p-5">
						<Image
							src="/images/netrobase_precious.jpg"
							alt="Nicholas Precious"
							width={100}
							height={100}
							priority={true}
							placeholder="empty"
							className="h-auto w-auto rounded-full"
						/>
						<p>Nicholas Precious</p>
						<p>Product Manager</p>
						<div className="flex flex-row space-x-2">
							<Link href="https://www.linkedin.com/in/nicholas-precious-19697525b/" target="_blank">
								<SlSocialLinkedin />
							</Link>
							<Link href="https://twitter.com/NicholasPreci18" target="_blank">
								<FaXTwitter />
							</Link>
							<Link href="https://www.instagram.com/chinnydiamond24/" target="_blank">
								<FaInstagram />
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center space-y-2 rounded-md border p-5">
						<Image
							src="/images/melvin4.jpg"
							alt="Melvin Oluebube"
							width={100}
							height={100}
							priority={true}
							placeholder="empty"
							className="h-auto w-auto rounded-full"
						/>
						<p>Melvin Oluebube</p>
						<p>Front End Developer</p>
						<div className="flex flex-row space-x-2">
							<Link href="https://www.linkedin.com/in/melvin-nzekwe/" target="_blank">
								<SlSocialLinkedin />
							</Link>
							<Link href="https://github.com/RichardMelvin019" target="_blank">
								<SiGithub />
							</Link>
							<Link href="https://twitter.com/Richardmelvin99" target="_blank">
								<FaXTwitter />
							</Link>
						</div>
					</div>
				</div>
			</main>
			<DefaultFooter />
		</DefaultLayout>
	);
}
