import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from 'components/NavBar/NavBar';
import { Blur } from 'components/StyledApp';
import { GlobalWrapper } from './StyledLayout';

export const Layout = () => {
  return (
    <GlobalWrapper>
      <header>
        <NavBar />
      </header>
      <Blur></Blur>
      <Outlet />
    </GlobalWrapper>
  );
};
