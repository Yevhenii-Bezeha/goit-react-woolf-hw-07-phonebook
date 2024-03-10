import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Loader from './Loader/Loader';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { NotFound } from 'pages/NotFound/NotFound';
import { Layout } from './Layout/Layout';
import { refreshThunk } from 'redux/auth/operations';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { GamePlug } from './GamePlug/GamePlug';
import { selectIsRefresh } from 'redux/auth/selectors';
import { Home } from 'pages/Home/Home';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GamePlug />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const LoaderWrapper = styled.div`
  display: block;
  width: 150px;
  margin: 0 auto;
`;
