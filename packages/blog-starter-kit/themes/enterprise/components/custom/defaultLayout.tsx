import { New_Rocker } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import { Scripts } from '../scripts';
import DefaultMeta from './defaultMeta';

const newRocker = New_Rocker({
	subsets: ['latin'],
	weight: '400',
	style: 'normal',
	preload: true,
	fallback: ['monospace'],
});

export const DefaultLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<DefaultMeta />
			<Scripts />
			<div
				className={`${newRocker.className} min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white`}
			>
				<main>{children}</main>
			</div>
		</>
	);
};

export default DefaultLayout;
