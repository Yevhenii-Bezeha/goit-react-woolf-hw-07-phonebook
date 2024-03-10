import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import {
  StyledSearchWrapper,
  StyledSearchLabel,
  StyledSearchInput,
  StyledInputSearchWrapper,
} from './SearchContact.styled';

export const SearchContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
    return dispatch(filterContacts(e.target.value));
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchLabel htmlFor="filter">Contacts hunter👇</StyledSearchLabel>
      <StyledInputSearchWrapper>
        <StyledSearchInput
          id="filter"
          type="text"
          name="name"
          value={filter}
          onChange={handleChangeFilter}
          placeholder="Enter name or number"
        />
      </StyledInputSearchWrapper>
    </StyledSearchWrapper>
  );
};
