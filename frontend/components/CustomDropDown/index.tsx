import Dropdown from 'react-bootstrap/Dropdown';
import { StyledDropDown, Toggle } from './style';

type customDropDownProps = {
  dropDownLabel: string;
  dropDownValues: string[];
};

function CustomDropDown({
  dropDownLabel,
  dropDownValues,
}: customDropDownProps) {
  return (
    <StyledDropDown>
      <Toggle variant="success">{dropDownLabel}</Toggle>
      <Dropdown.Menu>
        {dropDownValues.map((value): string => (
          <Dropdown.Item href="#/action-3">{value}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </StyledDropDown>
  );
}

export default CustomDropDown;
