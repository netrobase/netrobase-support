import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Netrobase Engineering</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content="netrobase" />
				<meta
					name="description"
					content="We deliver custom software development and maintenance services to businesses and institutions."
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}
