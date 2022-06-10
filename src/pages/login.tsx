import { Container, Typography } from '@mui/material';
import { BlankLayout } from 'layout';
import type { AppPage } from 'app/types';
import Head from 'next/head';

const Home: AppPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Container>
        <Typography variant="h1" color="secondary">
          Login page
        </Typography>
      </Container>
    </>
  );
};

Home.layout = BlankLayout;

export default Home;
