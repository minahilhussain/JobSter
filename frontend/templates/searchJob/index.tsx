import CustomDropDown from '@components/CustomDropDown';
import React from 'react';
import { SearchBar } from './style';

const SearchJob = ({ jobs }: any) => {
  let jobTypeProps = {
    dropDownLabel: 'Job Type',
    dropDownValues: [
      ...new Set(
        jobs.results.map(
          (value: { category: { label: any } }) => value.category.label,
        ),
      ),
    ],
  };

  let jobRoleProps = {
    dropDownLabel: 'Job Role',
    dropDownValues: ['Instructor', 'Engineering', 'Management', 'IT'],
  };
  let jobLocationProps = {
    dropDownLabel: 'Job Location',
    dropDownValues: [
      ...new Set(
        [].concat(
          ...jobs.results.map(
            (value: {
              location: { area: Iterable<unknown> | null | undefined };
            }) => {
              return [...new Set(value.location.area)];
            },
          ),
        ),
      ),
    ],
  };
  return (
    <SearchBar>
      <CustomDropDown {...jobTypeProps} />
      <CustomDropDown {...jobRoleProps} />
      <CustomDropDown {...jobLocationProps} />
    </SearchBar>
  );
};
export default SearchJob;
