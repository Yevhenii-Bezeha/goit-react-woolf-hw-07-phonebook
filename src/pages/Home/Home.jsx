import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { AddContact } from 'components/AddContact/AddContact';
import { AllContacts } from 'components/AllContacts/AllContacts';
import Loader from 'components/Loader/Loader';
import { SearchContacts } from 'components/SearchContact/SearchContact';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { fetchContactsThunk } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import { AppWrapper, StyledPlug } from 'components/StyledApp';

export const Home = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContactsThunk());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <AppWrapper>
      <AddContact />
      <SearchContacts />
      {!contacts.length && !error && !loading && (
        <StyledPlug>There are no contacts yet😭</StyledPlug>
      )}
      {error && <h2>{error}</h2>}
      {loading && <Loader />}
      <AllContacts />
    </AppWrapper>
  );
};
