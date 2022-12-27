import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CustomCard } from '../CustomCard';
import { CardContainer } from './style';

export const CustomCards = () => {
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
