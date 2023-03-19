import React from 'react';
import Nav from '@components/Nav';
import Head from 'next/head';
import CustomCards from '@components/CustomCards';
import SearchJob from '@templates/searchJob';

const AllJobsPage = ({ jobs }: any) => {
  return (
    <>
      <Head>
        <title>Jobster</title>
        <meta name="description" content="Job search app" />
      </Head>
      <div>
        <Nav />
        <SearchJob jobs={jobs} />
        <CustomCards jobs={jobs} />
      </div>
    </>
  );
};
export default AllJobsPage;
