import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import {
  StyledHeader,
  StyledButton,
  StyledCard,
  StyledTitle,
  StyledIcon,
  StyledCardText,
} from './styles';
import { FaBlackTie } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsFillCalendarDayFill } from 'react-icons/bs';

const CustomCard = ({ job }: any) => {
  return (
    <StyledCard key={job?.id}>
      <StyledHeader />
      <Card.Body>
        <StyledTitle>{job?.title}</StyledTitle>
        <StyledCardText>
          <StyledIcon>
            <MdLocationOn />
          </StyledIcon>
          {job?.company?.display_name} ({job?.location?.display_name}) <br />
          <StyledIcon>
            <BsFillCalendarDayFill />
          </StyledIcon>
          {moment(job?.created).format('DD MMM YYYY')} <br />
          <StyledIcon>
            <FaBlackTie />
          </StyledIcon>
          {job?.description.slice(0, 200)}...
        </StyledCardText>
        <StyledButton>Read More &rarr;</StyledButton>
      </Card.Body>
    </StyledCard>
  );
};

export default CustomCard;
