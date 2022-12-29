import React from 'react';
import Nav from '@components/Nav';
import CustomCard from '@components/CustomCard';
import { JobContainer } from './style';

const ViewPage = () => {
  return (
    <>
      <Nav />
      <JobContainer>
        <CustomCard />
      </JobContainer>
    </>
  );
};
export default ViewPage;
