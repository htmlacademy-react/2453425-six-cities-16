import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './offers/offers-slice';
import { userSlice } from './user/user';

export const rootReducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
