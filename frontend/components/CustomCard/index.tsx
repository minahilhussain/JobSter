import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { CardHeader, StyledButton, StyledCard } from './styles';
const CustomCard = ({ job }: any) => {
  return (
    <StyledCard key={job?.id}>
      <CardHeader />
      <Card.Body>
        <Card.Title>{job?.title}</Card.Title>
        <Card.Text>
          {job?.company?.display_name} ({job?.location?.display_name})
        </Card.Text>
        <Card.Text>{moment(job?.created).format('DD MMM YYYY')}</Card.Text>
        <Card.Text>{job?.description.slice(0, 200)}...</Card.Text>
        <StyledButton>Read More &rarr;</StyledButton>
      </Card.Body>
    </StyledCard>
  );
};

export default CustomCard;
