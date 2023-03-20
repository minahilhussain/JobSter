import Dropdown from 'react-bootstrap/Dropdown';
import { StyledDropDown, Toggle, DropdownMenu, DropdownItem } from './style';

type customDropDownProps = {
  dropDownLabel: string;
  dropDownValues: any[];
};

function CustomDropDown({
  dropDownLabel,
  dropDownValues,
}: customDropDownProps) {
  return (
    <StyledDropDown>
      <Toggle variant="success">{dropDownLabel}</Toggle>
      <DropdownMenu>
        {dropDownValues.map((value) => (
          <DropdownItem href="#/action-3">{value}</DropdownItem>
        ))}
      </DropdownMenu>
    </StyledDropDown>
  );
}

export default CustomDropDown;
