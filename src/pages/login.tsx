import { Typography } from '@mui/material';
import { BlankLayout } from 'components';
import type { AppPage } from 'app/types';
import Head from 'next/head';

const Home: AppPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Typography variant="h1" color="secondary">
        Login page
      </Typography>
    </>
  );
};

Home.layout = BlankLayout;

export default Home;
