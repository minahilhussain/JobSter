import colors from '@theme/colors';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const ButtonStyle = {
  background: colors.lightBlue,
  border: colors.lightBlue,
};

export const CardHeader = styled(Card.Header)`
  background-color: ${colors.purple};
  border: ${colors.purple};
`;
