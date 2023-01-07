import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { StyledHeader, StyledButton, StyledCard, StyledTitle } from './styles';
const CustomCard = ({ job }: any) => {
  return (
    <StyledCard key={job?.id}>
      <StyledHeader />
      <Card.Body>
        <StyledTitle>{job?.title}</StyledTitle>
        <Card.Text>
          {job?.company?.display_name} ({job?.location?.display_name})<br />
          {moment(job?.created).format('DD MMM YYYY')} <br />
          {job?.description.slice(0, 200)}...
        </Card.Text>
        <StyledButton>Read More &rarr;</StyledButton>
      </Card.Body>
    </StyledCard>
  );
};

export default CustomCard;
