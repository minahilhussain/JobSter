import colors from '@theme/colors';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const ButtonStyle = {
  background: colors.lightBlue,
  border: colors.lightBlue,
  fontFamily: 'Libre Baskerville',
};

export const CardHeader = styled(Card.Header)`
  background-color: ${colors.purple};
  border: ${colors.purple};
`;

export const StyledCard = styled(Card)`
  font-family: 'Libre Baskerville', serif;
`;
