import Head from 'next/head';
import '../styles/globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const MyApp = ({ Component, pageProps }) => (
  <>
    <LanguageProvider>
      <Head>
        <title>PressurePro Latam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Monitoreo en tiempo real de la presión y temperatura de los neumáticos" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  </>
);

export default MyApp;
