import styled from 'styled-components';

export const StyledPlug = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
`;

export const StyledHeaderH1 = styled.h1`
  font-size: 3rem;
  font-family: 'Playfair Display';
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(139, 90, 139, 0.5);
  line-height: 1.2;
  margin-bottom: 15px;
`;

export const AppWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
`;

export const Blur = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
  z-index: -1;
`;
