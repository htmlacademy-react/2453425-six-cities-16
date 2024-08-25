import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  Comment,
  Comments,
  Offer,
  OfferDetails,
  Offers,
} from '../../types/types';
import { Endpoint } from '../../const';

export const fetchAllOffers = createAsyncThunk<
  Offers,
  undefined,
  { extra: AxiosInstance }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  const response = await api.get<Offers>(Endpoint.Offers);
  return response.data;
});

export const fetchFavoriteOffers = createAsyncThunk<
  Offers,
  undefined,
  { extra: AxiosInstance }
>('fetchOffers/favorites', async (_arg, { extra: api }) => {
  const response = await api.get<Offers>(Endpoint.Favorite);
  return response.data;
});

export const fetchOfferDetails = createAsyncThunk<
  OfferDetails,
  { id: string | undefined },
  { extra: AxiosInstance }
>('fetchOffer/details', async ({ id }, { extra: api }) => {
  const response = await api.get<OfferDetails>(`${Endpoint.Offers}/${id}`);
  return response.data;
});

export const fetchOfferReviews = createAsyncThunk<
  Comments,
  { id: string | undefined },
  { extra: AxiosInstance }
>('fetchOffer/reviews', async ({ id }, { extra: api }) => {
  const response = await api.get<Comments>(`${Endpoint.Comments}/${id}`);
  return response.data;
});

export const fetchNearOffers = createAsyncThunk<
  Offers,
  { id: string | undefined },
  { extra: AxiosInstance }
>('fetchOffer/near', async ({ id }, { extra: api }) => {
  const response = await api.get<Offers>(`${Endpoint.Offers}/${id}/nearby`);
  return response.data;
});

export const postFavoriteOffer = createAsyncThunk<
  Offer,
  { id: string | undefined; isFavorite: boolean },
  { extra: AxiosInstance }
>('postOffer/favorite', async ({ id, isFavorite }, { extra: api }) => {
  const response = await api.post<Offer>(
    `${Endpoint.Favorite}/${id}/${Number(isFavorite)}`
  );
  return response.data;
});

export const postReview = createAsyncThunk<
  Comment,
  { comment: string; rating: number; id: string },
  { extra: AxiosInstance }
>('postReview', async ({ comment, rating, id }, { extra: api }) => {
  const response = await api.post<Comment>(`${Endpoint.Comments}/${id}`, {
    comment,
    rating,
  });
  return response.data;
});
