import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const userAuthApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const addToken = token => {
  userAuthApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  userAuthApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await userAuthApi.post('users/signup', credentials);
      addToken(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await userAuthApi.post('users/login', credentials);
      addToken(data.token);
      return data;
    } catch (error) {
      toast.error('Email or password is incorrect');
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await userAuthApi.post('users/logout');
    clearToken();
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('Token doesn`t exist');
  }
  try {
    addToken(savedToken);
    const { data } = await userAuthApi.get('users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// if (error.response.data.code === 11000) {
//   toast.error('Sorry, this account already exists');
// }
