import { New_Rocker } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import { Scripts } from '../scripts';
import DefaultFooter from './defaultFooter';
import DefaultMeta from './defaultMeta';
import DefaultNavigation from './defaultNavigation';

export const newRocker = New_Rocker({
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
				className={`${newRocker.className} min-h-screen bg-white p-4 text-black  dark:bg-current dark:text-white`}
			>
				<DefaultNavigation />
				<main>{children}</main>
				<DefaultFooter />
			</div>
		</>
	);
};

export default DefaultLayout;
