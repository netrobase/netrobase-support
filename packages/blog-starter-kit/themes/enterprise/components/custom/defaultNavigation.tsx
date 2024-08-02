import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

// Default Navigation Component

const DefaultNavigation = () => {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const MenuBar = () => {
		return (
			<div className="absolute right-0 top-8 border border-gray-500/50 bg-white">
				<HiXMark className="sticky m-2 ml-auto h-6 w-6" />
				<div className="m-3 flex flex-col space-y-3 p-7">
					<section className="text-left">
						<p className="text-primary-700 flex flex-row justify-between border-b-2 border-b-neutral-500">
							RESOURCES
						</p>
						<div className="flex flex-col">
							<Link href="/support" className="hover:underline">
								Support
							</Link>
							<Link href="/articles" className="hover:underline">
								Knowledge Base
							</Link>
						</div>
					</section>
					<section className="text-left">
						<p className="text-primary-700 flex flex-row justify-between border-b-2 border-b-neutral-500">
							DOCS
						</p>
						<div className="flex flex-col space-y-0.5">
							<Link
								href="https://kralis-api.netrobase.dev/schema/swagger"
								target="_blank"
								className="hover:underline"
							>
								Kralis Rest API
							</Link>
							<Link
								href="https://kralis-api.netrobase.dev/graphiql"
								target="_blank"
								className="hover:underline"
							>
								Kralis GraphiQL API
							</Link>
							<Link
								href="https://kralis-docs.netrobase.dev/"
								target="_blank"
								className="hover:underline"
							>
								Kralis API Model
							</Link>
						</div>
					</section>
					<section className="text-left">
						<p className="text-primary-700 flex flex-row justify-between border-b-2 border-b-neutral-500">
							ABOUT
						</p>
						<div className="flex flex-col space-y-0.5">
							<Link href="https://netrobase.com/about" target="_blank" className="hover:underline">
								Company
							</Link>
							<Link href="/team" className="hover:underline">
								Engineering Team
							</Link>
						</div>
					</section>
					<section className="text-left">
						<p className="text-primary-700 flex flex-row justify-between border-b-2 border-b-neutral-500">
							CONTACT
						</p>
						<div className="flex flex-col space-y-0.5">
							<Link href="mailto:info@netrobase.dev" className="hover:underline">
								info@netrobase.dev
							</Link>
						</div>
					</section>
				</div>
			</div>
		);
	};

	return (
		<div className="fixed left-0 right-0 top-0 bg-white text-black dark:text-white">
			<div className="sticky top-0 m-3 flex flex-row items-center">
				<Link href="/">
					<Image
						src="/images/netrobase-engr-logo.png"
						alt="Netrobase Engineering Logo"
						height={500}
						width={300}
						priority={true}
						placeholder="empty"
						className="left-0 h-auto w-auto"
					/>
				</Link>
				<button className="ml-auto p-1" onClick={toggleMenu}>
					{!showMenu ? <HiBars3 className="h-6 w-6" /> : <MenuBar />}
				</button>
			</div>
		</div>
	);
};

export default DefaultNavigation;
