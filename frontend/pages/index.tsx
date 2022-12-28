import Head from 'next/head';
import CustomCards from '@components/CustomCards';
import Nav from '@components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jobster</title>
        <meta name="description" content="Job search app" />
      </Head>
      <div>
        <Nav />
        <CustomCards />
      </div>
    </div>
  );
}
