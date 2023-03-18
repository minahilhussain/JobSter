import CustomDropDown from '@components/CustomDropDown';
import React from 'react';
import { SearchBar } from './style';

const SearchJob = ({ jobs }: any) => {
  let jobTypeProps = {
    dropDownLabel: 'Job Type',
    dropDownValues: ['Instructor', 'Engineering', 'Management', 'IT'],
  };
  return (
    <SearchBar>
      <CustomDropDown {...jobTypeProps} />
    </SearchBar>
  );
};
export default SearchJob;
