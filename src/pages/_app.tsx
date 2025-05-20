import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import { AppProps } from 'next/app';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}

export default MyApp;