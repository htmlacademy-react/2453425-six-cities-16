import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoint } from '../../const';
import { AuthInfo } from '../../types/types';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../../services/token';
import { fetchAllOffers } from '../offers/thunks';

export const checkLogin = createAsyncThunk<
  AuthInfo,
  undefined,
  { extra: AxiosInstance }
>('checkLogin', async (_arg, { extra: api }) => {
  const response = await api.get<AuthInfo>(Endpoint.Login);
  return response.data;
});

export type LoginAuth = {
  email: string;
  password: string;
};

export const login = createAsyncThunk<
  AuthInfo,
  LoginAuth,
  { extra: AxiosInstance }
>('login', async ({ email, password }, { dispatch, extra: api }) => {
  const requestBody: LoginAuth = {
    email: email,
    password: password,
  };

  const { data } = await api.post<AuthInfo>(Endpoint.Login, requestBody);
  saveToken(data.token);
  dispatch(fetchAllOffers());

  return data;
});

export const logout = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(Endpoint.Logout);
  dropToken();
  dispatch(fetchAllOffers());
});
