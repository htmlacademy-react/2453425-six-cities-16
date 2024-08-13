import { createAction } from '@reduxjs/toolkit';
import { CITY } from '../const';

export const setCurrentCityName = createAction<{city: (typeof CITY[number])}>('setCurrentCityName');

export const setOffers = createAction('setOffers');

