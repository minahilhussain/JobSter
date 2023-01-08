import Dropdown from 'react-bootstrap/Dropdown';
import { StyledDropDown, Toggle } from './style';

function CustomDropDown({ dropDownText }: any) {
  return (
    <StyledDropDown>
      <Toggle variant="success">Dropdown</Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </StyledDropDown>
  );
}

export default CustomDropDown;
