import styled from 'styled-components';

export const GameContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 60px;
  font-size: 18px;
  gap: 10px;

  h3 {
    margin-top: 15px;
    a {
      padding: 2px;
      color: #8b5a8b;
      transition: color 0.5s, background-color 0.5s;
      border-radius: 3px;
      &:hover {
        background-color: #8b5a8b;
        color: white;
      }
    }
  }
`;

export const OptionsContainer = styled.div`
  margin-top: 20px;
`;

export const OptionButton = styled.button`
  margin: 10px;
  max-width: 150px;
  padding: 10px;
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
  font-size: 17px;
  padding: 0.6em 1.5em;
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
`;

export const ResultText = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;
