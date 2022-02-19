import Head from 'next/head';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';

import NavBar from '../components/NavBar';

function MyApp({Component, pageProps}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blair Harper</title>
        <meta name="description" content="Blair Harper blog and portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
