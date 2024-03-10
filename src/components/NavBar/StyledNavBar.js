import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLinksWrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    padding: 5px;
    text-decoration: none;
    color: #8b5a8b;
    transition: color 0.5s, background-color 0.5s;
    border-radius: 3px;
    position: relative;

    &:hover {
      background-color: #8b5a8b;
      color: white;
    }

    &.active {
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        background-color: #8b5a8b;
      }
    }
  }
`;

export const LoggedLinksWrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }

  a {
    padding: 5px;
    text-decoration: none;
    color: #8b5a8b;
    transition: color 0.5s, background-color 0.5s;
    border-radius: 3px;
    position: relative;

    &:hover {
      background-color: #8b5a8b;
      color: white;
    }

    &.active {
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        background-color: #8b5a8b;
      }
    }
  }

  button {
    max-width: 150px;
    padding: 5px 10px;
    margin: 0 auto;
    border: none;
    color: #333333;
    background: linear-gradient(
      to bottom,
      rgb(227, 213, 255),
      rgb(255, 231, 231)
    );
    border-radius: 20px;
    background-size: 100% auto;
    font-family: inherit;
    font-size: 18px;
    transition: transform 0.2s;

    &:active:not(:disabled) {
      opacity: 0.7;
      transform: scale(0.95);
    }
    &:hover:not(:disabled) {
      background-position: right center;
      background-size: 200% auto;
      -webkit-animation: pulse 2s infinite;
      animation: pulse512 1.5s infinite;
    }

    @keyframes pulse512 {
      0% {
        box-shadow: 0 0 0 0 #cea2fd;
      }

      70% {
        box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
      }

      100% {
        box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
      }
    }
  }

  @media (min-width: 768px) {
    min-width: 620px;
  }

  @media (min-width: 1440px) {
    min-width: 780px;
  }
`;
