import * as React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import clsx from 'clsx';
import NavBar from '../components/NavBar';

function MyApp({Component, pageProps}) {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  return (
    <div
      className={clsx({
        'bg-white': !isDarkMode,
        dark: isDarkMode,
        'bg-slate-800': isDarkMode,
      })}>
      <div className={styles.container}>
        <Head>
          <title>Blair Harper</title>
          <meta name="description" content="Blair Harper blog and portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
