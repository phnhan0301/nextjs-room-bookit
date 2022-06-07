import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Box height={2000}>
        <Typography variant="h1" color="secondary">
          Home
        </Typography>
      </Box>
    </>
  );
};

export default Home;
