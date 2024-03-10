const { default: styled } = require('styled-components');

export const StyledAllContactsUl = styled.ul`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
