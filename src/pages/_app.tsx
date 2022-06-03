import { DbConnect } from 'app/helpers';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextJs - Room BookIT</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export const getServerSideProps = async () => {
  
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default App;
