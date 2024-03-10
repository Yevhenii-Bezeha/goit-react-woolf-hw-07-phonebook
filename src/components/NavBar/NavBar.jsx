import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

import { StyledHeaderH1 } from 'components/StyledApp';
import { LoggedLinksWrapper, NavLinksWrapper, StyledNav } from './StyledNavBar';

export const NavBar = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledNav>
        <div>
          <StyledHeaderH1>PHONEBOOK</StyledHeaderH1>
        </div>
        {!isLoggedIn ? (
          <NavLinksWrapper>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/">Game</NavLink>
          </NavLinksWrapper>
        ) : (
          <LoggedLinksWrapper>
            <div>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/">Game</NavLink>
            </div>
            <div>
              <span>{name}</span>
              <button onClick={() => dispatch(logoutThunk())}>Log out</button>
            </div>
          </LoggedLinksWrapper>
        )}
      </StyledNav>
    </div>
  );
};
