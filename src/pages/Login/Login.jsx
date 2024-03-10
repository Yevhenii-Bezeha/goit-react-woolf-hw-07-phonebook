import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { schemaLogin } from 'helpers/schemas';

import {
  EmailPasswordInput,
  EmailPasswordInputWrapper,
  LoginButton,
  LoginForm,
} from './StyledLogin';

export const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const submit = ({ confirmPassword, ...data }) => {
    dispatch(loginThunk(data));
    reset();
  };

  if (isLoggedIn) {
    toast.success(`Greetings, ${name}!`);
    return <Navigate to="/home" />;
  }
  return (
    <LoginForm action="" onSubmit={handleSubmit(submit)}>
      <EmailPasswordInputWrapper>
        <EmailPasswordInput
          type="text"
          {...register('email')}
          placeholder="Enter email"
        />
      </EmailPasswordInputWrapper>
      {errors?.email && <div>{errors.email.message}</div>}
      <EmailPasswordInputWrapper>
        <EmailPasswordInput
          type="password"
          {...register('password')}
          placeholder="Enter password"
        />
      </EmailPasswordInputWrapper>
      {errors?.password && <div>{errors.password.message}</div>}
      <LoginButton>Login</LoginButton>
      <span>
        Don't have an account?{' '}
        <NavLink to="/register">Let's create it!</NavLink>
      </span>
    </LoginForm>
  );
};
