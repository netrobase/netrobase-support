import Link from 'next/link';
import { PiFacebookLogoBold, PiInstagramLogo, PiYoutubeLogo } from 'react-icons/pi';
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from '../icons';

export const DefaultSocialLinks = () => {
	return (
		<div className="grid grid-cols-3 gap-0.5 lg:grid-cols-4">
			<Link
				href="https://x.com/netrobase"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Find us on Twitter, external website, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<XSVG className="h-5 w-5 stroke-current" />
			</Link>
			<Link
				href="https://github.com/netrobase"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Find us on Github, external website, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<GithubSVG className="h-5 w-5 stroke-current" />
			</Link>
			<Link
				href="https://linkedin.com/netrobase"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Find us on Linkedin, external website, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<LinkedinSVG className="h-5 w-5 stroke-current" />
			</Link>
			<Link
				href="https://hashnode.com/@netrobase"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Find us on Hashnode, external website, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<HashnodeSVG className="h-5 w-5 stroke-current" />
			</Link>
			<Link
				href="https://youtube.com/@netro_base"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Find us on Youtube, external website, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<PiYoutubeLogo className="h-5 w-5 stroke-current" />
			</Link>
			<Link
				href="https://instagram.com/netro_base"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Find us on Instagram, external website, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<PiInstagramLogo className="h-5 w-5 stroke-current" />
			</Link>
			<Link
				href="https://facebook.com/netrobase"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Find us on Facebook, external website, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<PiFacebookLogoBold className="h-5 w-5 stroke-current" />
			</Link>
			<Link
				prefetch={false}
				href={`/rss.xml`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Open blog XML Feed, opens in new tab"
				className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<RssSVG className="h-5 w-5 stroke-current" />
			</Link>
		</div>
	);
};

export default DefaultSocialLinks;
