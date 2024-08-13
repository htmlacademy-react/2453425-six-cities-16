import { createReducer } from '@reduxjs/toolkit';
import { setCurrentCityName, setOffers } from './action';
import { CITY } from '../const';
import { mockOffers } from '../mocks/offers';
import { InitialStateType } from '../types';

const initialState: InitialStateType = {
  currentCityName: CITY[0],
  offers: [],
  sortOptions: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCityName, (state, action) => {
      const {city} = action.payload;
      state.currentCityName = city;
    })
    .addCase(setOffers, (state) => {
      state.offers = mockOffers;
    });
});

export { reducer };
