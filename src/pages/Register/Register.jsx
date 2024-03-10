import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { registerThunk } from 'redux/auth/operations';
import { schemaRegister } from 'helpers/schemas';

import {
  InputWrapper,
  RegisterButton,
  RegisterForm,
  RegisterInput,
} from './StyledRegister';

export const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const submit = ({ confirmPassword, ...data }) => {
    dispatch(registerThunk(data))
      .unwrap()
      .catch(e => {
        toast.error('This email is invalid or already in the database');
      });
    reset();
  };

  if (isLoggedIn) {
    toast.success(`Welcome ${name}`);
    return <Navigate to="/home" />;
  }

  return (
    <RegisterForm action="" onSubmit={handleSubmit(submit)}>
      <InputWrapper>
        <RegisterInput
          type="text"
          {...register('name')}
          placeholder="Enter name"
        />
      </InputWrapper>
      {errors?.name && <div>{errors.name.message}</div>}
      <InputWrapper>
        <RegisterInput
          type="text"
          {...register('email')}
          placeholder="Enter email"
        />
      </InputWrapper>
      {errors?.email && <div>{errors.email.message}</div>}
      <InputWrapper>
        <RegisterInput
          type="password"
          {...register('password')}
          placeholder="Enter password"
        />
      </InputWrapper>
      {errors?.password && <div>{errors.password.message}</div>}
      <InputWrapper>
        <RegisterInput
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm password"
        />
      </InputWrapper>
      {errors?.confirmPassword && <div>Passwords are not equal!</div>}
      <RegisterButton>Register</RegisterButton>
      <span>
        Already have an account? <NavLink to="/login">Let's log in!</NavLink>
      </span>
    </RegisterForm>
  );
};
