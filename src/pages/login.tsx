import { Typography } from '@material-tailwind/react';
import { BlankLayout } from 'app/components';
import type { AppPage } from 'app/types';
import Head from 'next/head';

const Home: AppPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Typography>Login</Typography>
    </>
  );
};

Home.layout = BlankLayout;

export default Home;
