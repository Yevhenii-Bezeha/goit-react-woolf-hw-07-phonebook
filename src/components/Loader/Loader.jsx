import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderWrapper>
      <PacmanLoader color="#cea2fd" />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
`;

export default Loader;
