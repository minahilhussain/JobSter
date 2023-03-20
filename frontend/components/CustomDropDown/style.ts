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
  width: 180px !important;
  :hover {
    background-color: ${colors.darkBlue} !important;
    border: 2px solid ${colors.darkBlue} !important;
    color: ${colors.white} !important;
  }
  :focus {
    background-color: ${colors.white};
    border: 2px solid ${colors.darkBlue};
    color: ${colors.darkBlue};
  }
`;

export const DropdownMenu = styled(Dropdown.Menu)`
  width: 100% !important;
`;

export const DropdownItem = styled(Dropdown.Item)`
  word-wrap: break-word !important;
`;
