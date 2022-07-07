import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner, Categories, EmptySpace } from '../components';
import SectionHeader from '../components/SectionHeader';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sound Music | Home</title>
      </Head>
      <main className='max-w-screen-lg mx-auto px-8'>
        <Banner />
        <EmptySpace />
        <Categories />
        <SectionHeader title='Shop by Category' />
        <SectionHeader title='Best Sellers' />
        <SectionHeader title='New' />
        <SectionHeader title='Instagram Feed' />
      </main>
    </>
  );
};

export default Home;
