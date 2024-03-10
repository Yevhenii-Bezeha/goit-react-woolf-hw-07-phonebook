import React from 'react';
import { NavLink } from 'react-router-dom';

import { ImgWrapper } from './StyledNotFound';

export const NotFound = () => {
  return (
    <ImgWrapper>
      <h2>It seems like You can find nothing here😭</h2>
      <span>
        You can go <NavLink to="/">back</NavLink>
      </span>
    </ImgWrapper>
  );
};
