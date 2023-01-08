import CustomDropDown from '@components/CustomDropDown';
import React from 'react';
import { SearchBar } from './style';

const SearchJob = ({ jobs }: any) => {
  return (
    <SearchBar>
      <CustomDropDown />
      <CustomDropDown />
      <CustomDropDown />
    </SearchBar>
  );
};
export default SearchJob;
