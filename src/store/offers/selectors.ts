import { RequestStatus } from '../../const';
import { State } from '../../types/state';
import { CityName, Comments, OfferDetails, Offers } from '../../types/types';

export const getOffers = (state: Pick<State, 'offers'>): Offers =>
  state.offers.allOffers;
export const getAllOffersStatus = (
  state: Pick<State, 'offers'>
): RequestStatus => state.offers.allOffersStatus;
export const getCurrentCityName = (state: Pick<State, 'offers'>): CityName =>
  state.offers.currentCityName;
export const getFavoriteOffers = (state: Pick<State, 'offers'>): Offers =>
  state.offers.favoriteOffers;

export const getOffer = (state: Pick<State, 'offers'>): OfferDetails | null =>
  state.offers.offerDetails;
export const getReviews = (state: Pick<State, 'offers'>): Comments =>
  state.offers.reviews;
export const getNearOffers = (state: Pick<State, 'offers'>): Offers =>
  state.offers.nearOffers;
export const getOfferCommentsStatus = (
  state: Pick<State, 'offers'>
): RequestStatus => state.offers.reviewsStatus;
export const getOfferDetailsStatus = (
  state: Pick<State, 'offers'>
): RequestStatus => state.offers.offerDetailsStatus;
