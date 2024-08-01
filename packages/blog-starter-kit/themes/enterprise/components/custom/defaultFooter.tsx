import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="border-t py-5">
			<div className="flex flex-col space-y-5">
				<Link
					href={'/'}
					aria-label={`Netrobase Enginnering Home Page`}
					className="flex flex-row items-center justify-center"
				>
					<Image
						src="/images/netrobase-engr-logo.png"
						height={500}
						width={300}
						alt="Netrobase Engineering Logo"
					/>
				</Link>

				<div className="flex flex-row justify-between">
					<div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
						<div className="flex flex-col items-start space-y-1 text-left">
							<p className="font-bold">Stay in touch</p>
							<ul className="flex flex-col gap-1">
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
							<p className="font-bold">Company</p>
							<ul className="spacey-1 flex flex-col">
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
							</ul>
						</div>
						<div className="flex flex-col items-start space-y-1 text-left">
							<p className="font-bold">Docs</p>
							<ul className="flex flex-col space-y-1">
								<li>
									<Link
										href="https://kralis-docs.netrobase.dev"
										target="_blank"
										className="hover:underline"
									>
										Kralis API Model
									</Link>
								</li>
								<li>
									<Link
										href="https://kralis-docs.netrobase.dev/schema/swagger"
										target="_blank"
										className="hover:underline"
									>
										Kralis Rest API
									</Link>
								</li>
								<li>
									<Link
										href="https://roxa-api.netrobase.dev/graphiql"
										target="_blank"
										className="hover:underline"
									>
										Kralis GraphiQL API
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-start space-y-1 text-left">
							<p className="font-bold">Resources</p>
							<ul className="flex flex-col space-y-1">
								<li>
									<Link
										href="https://kralis.netrobase.dev"
										target="_blank"
										className="hover:underline"
									>
										Kralis App
									</Link>
								</li>
								<li>
									<Link href="/articles" target="_blank" className="hover:underline">
										Knowledge Base
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col items-end space-y-1 text-right md:text-left">
						{/* SocialLinks Here */}
						<p>
							&copy; {new Date().getFullYear()}{' '}
							<Link href="https://netrobase.com" target="_black" className="hover:underline">
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
				</div>
			</div>
		</footer>
	);
};

export default Footer;
