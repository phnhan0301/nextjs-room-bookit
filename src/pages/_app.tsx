import 'styles/globals.css';

import { ThemeProvider } from '@material-tailwind/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextJs - Room BookIT</title>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default App;
