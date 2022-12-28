import React from 'react';
import CustomCard from '@components/CustomCard';
import { CardContainer } from './style';

const CustomCards = () => {
  return (
    <>
      <CardContainer>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
      </CardContainer>
    </>
  );
};
export default CustomCards;
