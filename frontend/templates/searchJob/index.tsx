import CustomDropDown from '@components/CustomDropDown';
import React from 'react';
import { SearchBar } from './style';

const SearchJob = ({ jobs }: any) => {
  return (
    <SearchBar>
      <CustomDropDown dropDownLabel="Job Type" />
      <CustomDropDown dropDownLabel="Job Location" />
      <CustomDropDown dropDownLabel="Job Role" />
    </SearchBar>
  );
};
export default SearchJob;
