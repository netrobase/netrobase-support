import { New_Rocker } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import { Scripts } from '../scripts';
import DefaultMeta from './defaultMeta';

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
				className={`${newRocker.className} m-2 min-h-screen overflow-hidden bg-white p-2 text-black dark:bg-current dark:text-white`}
			>
				{children}
			</div>
		</>
	);
};

export default DefaultLayout;
