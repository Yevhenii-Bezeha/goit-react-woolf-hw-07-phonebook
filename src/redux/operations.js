import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentId } from './contactsSlice';

axios.defaults.baseURL = 'https://654a30b8e182221f8d52b0a2.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'fetchAllContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    try {
      thunkApi.dispatch(setCurrentId(id));
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post('contacts', body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'editContact',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.put(`contacts/${body.id}`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
