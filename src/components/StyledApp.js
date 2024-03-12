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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  line-height: 1.2;
  margin-bottom: 10px;
  animation: glow 2s infinite;

  @keyframes glow {
    0% {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    50% {
      text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
    }
    100% {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
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
