import React from 'react';
import Nav from '@components/Nav';
import Head from 'next/head';
import CustomCards from '@components/CustomCards';

const AllJobsPage = ({ jobs }: any) => {
  return (
    <>
      <Head>
        <title>Jobster</title>
        <meta name="description" content="Job search app" />
      </Head>
      <div>
        <Nav />
        <CustomCards jobs={jobs} />
      </div>
    </>
  );
};
export default AllJobsPage;
