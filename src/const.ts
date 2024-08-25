export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ReviewFormRating = [
  { title: 'perfect', mark: 5 },
  { title: 'good', mark: 4 },
  { title: 'not bad', mark: 3 },
  { title: 'badly', mark: 2 },
  { title: 'terribly', mark: 1 },
] as const;

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_ACTIVE = './img/pin-active.svg';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum Endpoint {
  Offers = '/offers',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum RequestStatus {
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
  Idle = 'Idle',
}

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
}
