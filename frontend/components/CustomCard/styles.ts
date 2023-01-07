import colors from '@theme/colors';
import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';

export const StyledButton = styled(Button)`
  background: ${colors.lightBlue};
  border: ${colors.lightBlue};
  font-family: 'Libre Baskerville', serif;
  cursor: pointer;
  :hover {
    box-shadow: 0 10px 10px 0 rgba(0 0 0 /5%);
    background: ${colors.purple};
  }
`;

export const StyledHeader = styled(Card.Header)`
  background-color: ${colors.purple};
  border: ${colors.purple};
`;

export const StyledCard = styled(Card)`
  font-family: 'Libre Baskerville', serif;
  cursor: pointer;
  :hover {
    box-shadow: 0 10px 10px 0 rgba(0 0 0 /5%);
  }
`;
export const StyledTitle = styled(Card.Title)`
  padding: 10px 0;
  font-size: 1.5em;
`;
