import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import {
  GameContainer,
  OptionButton,
  OptionsContainer,
  ResultText,
} from './StyledGamePlug';

export const GamePlug = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const choices = useMemo(() => ['rock🏔️', 'paper🧻', 'scissors✂️'], []);

  useEffect(() => {
    if (userChoice !== null) {
      const newComputerChoice = choices[Math.floor(Math.random() * 3)];
      setComputerChoice(newComputerChoice);
      const gameResult = determineWinner(userChoice, newComputerChoice);
      setResult(gameResult);
    }
  }, [userChoice, choices]);

  const playGame = choice => {
    setUserChoice(choice);
  };

  const determineWinner = (player, computer) => {
    switch (true) {
      case player === computer:
        return "It's a tie!";
      case (player === 'rock🏔️' && computer === 'scissors✂️') ||
        (player === 'paper🧻' && computer === 'rock🏔️') ||
        (player === 'scissors✂️' && computer === 'paper🧻'):
        return 'You win!';
      default:
        return 'You lose!';
    }
  };

  return (
    <GameContainer>
      <h2>Welcome to Phonebook!</h2>
      <h2>Don`t know what to do? You can play minigame while thinking🤪</h2>
      <p>Choose: Rock, Paper, or Scissors</p>
      <OptionsContainer>
        {choices.map(choice => (
          <OptionButton key={choice} onClick={() => playGame(choice)}>
            {choice}
          </OptionButton>
        ))}
      </OptionsContainer>
      <ResultText>
        {userChoice &&
          `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`}
      </ResultText>
      {!isLoggedIn && (
        <h3>
          Tired of playing game and wasting your time? Let`s{' '}
          <NavLink to="/login"> Log in</NavLink> or{' '}
          <NavLink to="/register">Register</NavLink>!
        </h3>
      )}
    </GameContainer>
  );
};
