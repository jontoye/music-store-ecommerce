import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Banner } from '../components';

const Home: NextPage = () => {
  return (
    <div className='w-full mx-auto'>
      <Banner />
    </div>
  );
};

export default Home;
