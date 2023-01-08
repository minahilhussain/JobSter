import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import colors from '@theme/colors';

export const StyledDropDown = styled(Dropdown)`
  margin: 0.5em;
`;
export const Toggle = styled(Dropdown.Toggle)`
  background-color: ${colors.white};
  border: 2px solid ${colors.darkBlue};
  color: ${colors.darkBlue};
  :hover {
    background-color: ${colors.darkBlue};
    border: 2px solid ${colors.darkBlue};
  }
`;
