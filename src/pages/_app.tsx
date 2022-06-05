import 'styles/globals.css';

import { ThemeProvider } from '@material-tailwind/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppPage } from 'app/types';
import { ClientLayout } from 'app/components';

type MyAppProps = AppProps & {
  Component: AppPage;
};

const App = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout || ClientLayout;

  return (
    <>
      <Head>
        <title>NextJs - Room BookIT</title>
      </Head>

      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
