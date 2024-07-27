export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '404',
  City = '/:city',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ReviewFormRating = [
  {title: 'perfect', mark: 5},
  {title: 'good', mark: 4},
  {title: 'not bad', mark: 3},
  {title: 'badly', mark: 2},
  {title: 'terribly', mark: 1}
] as const;

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_ACTIVE = './img/pin-active.svg';
