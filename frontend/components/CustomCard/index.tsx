import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ButtonStyle, HeaderStyle } from './styles';
export const CustomCard = () => (
  <Card>
    <Card.Header style={HeaderStyle}></Card.Header>
    <Card.Body>
      <Card.Title>Title</Card.Title>
      <Card.Text>
        Description - lorem ipsum vnfv dcnjnf dkjcnkj cjjkfv hjkfhv vkjfkjvb
      </Card.Text>
      <Button style={ButtonStyle}>Read More &rarr;</Button>
    </Card.Body>
  </Card>
);
