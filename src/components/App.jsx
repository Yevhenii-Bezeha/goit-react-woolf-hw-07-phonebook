import { AddContact } from './AddContact/AddContact';
import { AllContacts } from './AllContacts/AllContacts';
import { SearchContacts } from './SearchContact/SearchContact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import Loader from './Loader/Loader';
import { AppWrapper, StyledHeaderH1, StyledPlug } from './StyledApp';
import styled from 'styled-components';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Blur></Blur>
      <StyledHeaderH1>PHONEBOOK</StyledHeaderH1>
      <div>
        <AddContact />
        <SearchContacts />
        {!contacts.length && !error && !loading && (
          <StyledPlug>There are no contacts yet😭</StyledPlug>
        )}
        {error && <h2>{error}</h2>}
        {loading && <Loader />}
        <AllContacts />
      </div>
    </AppWrapper>
  );
};

const Blur = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
  z-index: -1;
`;
