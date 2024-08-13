import { State } from '../types/state';
import { CityName, Offers } from '../types';

export const getCurrentCityName = (state: State): CityName => state.currentCityName;
export const getOffers = (state: State): Offers => state.offers;
