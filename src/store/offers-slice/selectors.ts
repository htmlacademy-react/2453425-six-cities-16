import { NameSpace, RequestStatus, SortType } from '../../const';
import { State } from '../../types/state';
import { CityName, Comments, OfferDetails, Offers } from '../../types/types';

export const getOffers = (state: Pick<State, NameSpace.Offers>): Offers =>
  state[NameSpace.Offers].allOffers;

export const getAllOffersStatus = (
  state: Pick<State, NameSpace.Offers>
): RequestStatus => state[NameSpace.Offers].allOffersStatus;

export const getCurrentCityName = (
  state: Pick<State, NameSpace.Offers>
): CityName => state[NameSpace.Offers].currentCityName;

export const getFavoriteOffers = (
  state: Pick<State, NameSpace.Offers>
): Offers => state[NameSpace.Offers].favoriteOffers;

export const getFavoriteOffersStatus = (
  state: Pick<State, NameSpace.Offers>
): RequestStatus => state[NameSpace.Offers].favoriteOffersStatus;

export const getOffer = (
  state: Pick<State, NameSpace.Offers>
): OfferDetails | null => state[NameSpace.Offers].offerDetails;

export const getReviews = (state: Pick<State, NameSpace.Offers>): Comments =>
  state[NameSpace.Offers].reviews;

export const getNearOffers = (state: Pick<State, NameSpace.Offers>): Offers =>
  state[NameSpace.Offers].nearOffers;

export const getOfferCommentsStatus = (
  state: Pick<State, NameSpace.Offers>
): RequestStatus => state[NameSpace.Offers].reviewsStatus;

export const getOfferDetailsStatus = (
  state: Pick<State, NameSpace.Offers>
): RequestStatus => state[NameSpace.Offers].offerDetailsStatus;

export const getPostReviewStatus = (
  state: Pick<State, NameSpace.Offers>
): RequestStatus => state[NameSpace.Offers].postReviewStatus;

export const getCurrentSort = (
  state: Pick<State, NameSpace.Offers>
): SortType => state[NameSpace.Offers].currentSort;
