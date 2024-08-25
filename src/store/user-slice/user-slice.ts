import { createSlice } from '@reduxjs/toolkit';
import { checkLogin, login, logout } from './thunks';
import { AuthorizationStatus, NameSpace } from '../../const';
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
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userProfile = action.payload;
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userProfile = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userProfile = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userProfile = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userProfile = null;
      }),
});
