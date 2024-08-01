import { Scripts } from '../scripts';
import DefaultMeta from './defaultMeta';

type Props = {
	children: React.ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
	return (
		<>
			<DefaultMeta />
			<Scripts />
			<div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white">
				<main>{children}</main>
			</div>
		</>
	);
};

export default DefaultLayout;
