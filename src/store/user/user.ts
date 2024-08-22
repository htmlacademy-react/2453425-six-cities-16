import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { checkLogin, login, logout } from './thunks';
import { dropToken, saveToken } from '../../services/token';
import { AuthInfo } from '../../types/types';

type UserState = {
  authorizationStatus: AuthorizationStatus;
  userProfile: AuthInfo | null;
};

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userProfile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userProfile = action.payload;
        saveToken(action.payload.token);
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userProfile = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userProfile = action.payload;
        saveToken(action.payload.token);
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userProfile = null;
      })
      .addCase(logout.fulfilled, (state) => {
        dropToken();
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userProfile = null;
      }),
});
