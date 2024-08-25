import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './offers-slice/offers-slice';
import { userSlice } from './user-slice/user-slice';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
