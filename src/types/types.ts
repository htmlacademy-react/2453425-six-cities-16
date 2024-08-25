import { CITIES } from '../const';

declare global {
  interface ObjectConstructor {
    groupBy<Item, Key extends PropertyKey>(
      items: Iterable<Item>,
      keySelector: (item: Item, index: number) => Key
    ): Record<Key, Item[]>;
  }
}

export type GroupedOffers = Record<string, Offer[]>;

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Offers = Offer[];

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type AuthInfo = User & {
  email: string;
  token: string;
};

export type OfferDetails = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type Comments = Comment[];

export type CityName = (typeof CITIES)[number];
