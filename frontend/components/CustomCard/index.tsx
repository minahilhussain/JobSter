import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ButtonStyle, CardHeader } from './styles';
const CustomCard = ({ job }: any) => {
  return (
    <Card key={job.id}>
      <CardHeader />
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Text>
          {job.company.display_name} ({job.location.display_name})
        </Card.Text>
        <Card.Text>{moment(job.created).format('DD MMM YYYY')}</Card.Text>
        <Card.Text>{job.description.slice(0, 200)}...</Card.Text>
        <Button style={ButtonStyle}>Read More &rarr;</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
