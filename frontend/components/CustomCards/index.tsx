import React from 'react';
import CustomCard from '@components/CustomCard';
import { CardContainer } from './style';

const CustomCards = (jobs: any) => {
  return (
    <>
      <CardContainer>
        {jobs?.jobs?.results
          .sort(
            (a: any, b: any) =>
              new Date(b.created).valueOf() - new Date(a.created).valueOf(),
          )
          .map((job: any) => (
            <CustomCard job={job} key={job.id} />
          ))}
      </CardContainer>
    </>
  );
};
export default CustomCards;
