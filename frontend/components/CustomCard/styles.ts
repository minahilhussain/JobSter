import colors from '@theme/colors';
import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';

export const StyledButton = styled(Button)`
  background: ${colors.lightBlue};
  border: ${colors.lightBlue};
  font-family: 'Libre Baskerville', serif;
`;

export const CardHeader = styled(Card.Header)`
  background-color: ${colors.purple};
  border: ${colors.purple};
`;

export const StyledCard = styled(Card)`
  font-family: 'Libre Baskerville', serif;
`;
