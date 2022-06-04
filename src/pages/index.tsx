import { Button } from '@material-tailwind/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello NextJs - BookIT</h1>
      <Button variant="filled">I&apos;m a Button</Button>
    </>
  );
};

export default Home;
