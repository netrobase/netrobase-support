import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { LeftFooterSVG, RightFooterSVG } from './custom/footerSVG';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="z-10 border-t py-20 dark:border-neutral-800">
			<LeftFooterSVG />
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} Home Page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">
						{publication.title}
					</p>
				)}
				<div className="flex flex-row justify-between">
					<div className="z-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
						<div className="flex flex-col items-start space-y-1 text-left">
							<p className="font-bold text-slate-600 dark:text-neutral-200">Stay in touch</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<Link
										href="mailto:info@netrobase.dev?subject=I have a question about..."
										className="hover:underline"
									>
										info@netrobase.dev
									</Link>
								</li>
								<li>
									<Link href="https://netrobase.com" target="_blank" className="hover:underline">
										netrobase.com
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-start space-y-1 text-left">
							<p className="font-bold text-slate-600 dark:text-neutral-200">Company</p>
							<ul className="spacey-1 flex flex-col text-slate-700 dark:text-neutral-300">
								<li>
									<Link
										href="https://netrobase.com/careers"
										target="_blank"
										className="hover:underline"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="https://netrobase.com/about"
										target="_blank"
										className="hover:underline"
									>
										About
									</Link>
								</li>
								<li>
									<Link href="/team" className="hover:underline">
										Dev Team
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-start space-y-1 text-left">
							<p className="font-bold text-slate-600 dark:text-neutral-200">Docs</p>
							<ul className="flex flex-col space-y-1 text-slate-700 dark:text-neutral-300">
								<li>
									<Link
										href="https://docs.kralis.app/tenets"
										target="_blank"
										className="hover:underline"
									>
										Kralis API Model
									</Link>
								</li>
								<li>
									<Link
										href="https://api.kralis.app/schema/swagger"
										target="_blank"
										className="hover:underline"
									>
										Kralis Rest API
									</Link>
								</li>
								<li>
									<Link
										href="https://api.kralis.app/graphiql"
										target="_blank"
										className="hover:underline"
									>
										Kralis GraphiQL API
									</Link>
								</li>
								<li>
									<Link href="https://api.kralis.app" target="_blank" className="hover:underline">
										Kralis Middleware
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-start space-y-1 text-left">
							<p className="font-bold text-slate-600 dark:text-neutral-200">Resources</p>
							<ul className="flex flex-col space-y-1 text-slate-700 dark:text-neutral-300">
								<li>
									<Link href="https://kralis.app" target="_blank" className="hover:underline">
										Kralis App
									</Link>
								</li>
								<li>
									<Link href="/articles" className="hover:underline">
										Knowledge Base
									</Link>
								</li>
								<li>
									<Link
										href="https://status.netrobase.dev"
										target="_blank"
										className="hover:underline"
									>
										Status Page
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="z-10 flex flex-col items-end space-y-1 text-right text-slate-600 md:text-left dark:text-neutral-300">
						<SocialLinks />
						<p>
							&copy; {new Date().getFullYear()}{' '}
							<Link
								href="https://netrobase.com"
								target="_black"
								className="underline-offset-4 hover:underline"
							>
								Netrobase Limited
							</Link>
						</p>
						<p>
							<Link href="/privacy-policy" className="hover:underline">
								Privacy Policy
							</Link>{' '}
							·{' '}
							<Link href="/terms-of-service" className="hover:underline">
								Terms
							</Link>
						</p>
					</div>
					<RightFooterSVG />
				</div>
			</Container>
		</footer>
	);
};
