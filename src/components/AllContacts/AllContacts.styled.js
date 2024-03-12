const { default: styled } = require('styled-components');

export const StyledAllContactsUl = styled.ul`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;
