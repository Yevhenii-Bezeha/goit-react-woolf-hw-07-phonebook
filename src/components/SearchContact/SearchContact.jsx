import { useDispatch, useSelector } from 'react-redux';
import {
  StyledSearchWrapper,
  StyledSearchLabel,
  StyledSearchInput,
  StyledInputSearchWrapper,
} from './SearchContact.styled';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const SearchContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
    return dispatch(filterContacts(e.target.value));
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchLabel htmlFor="filter">Find contacts👇</StyledSearchLabel>
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
