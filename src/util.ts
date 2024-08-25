import { SortType } from './const';
import { Comments, Offers } from './types/types';

export const capitalize = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);

export const sortCommentsByDate = (comments: Comments) => {
  const result = [...comments].sort((commentA, commentB) => {
    const CommentADate = Date.parse(commentA.date);
    const commentBDate = Date.parse(commentB.date);
    return commentBDate - CommentADate;
  });

  return result;
};

export const sort = {
  [SortType.Popular]: (offers: Offers) => offers,
  [SortType.PriceHighToLow]: (offers: Offers) =>
    offers.sort((offerA, offerB) => offerB.price - offerA.price),
  [SortType.PriceLowToHigh]: (offers: Offers) =>
    offers.sort((offerA, offerB) => offerA.price - offerB.price),
  [SortType.TopRatedFirst]: (offers: Offers) =>
    offers.sort((offerA, offerB) => offerB.rating - offerA.rating),
};

export const getRandomArrayItem = <T>(array: readonly T[]): T => {
  const randomInteger = Math.floor(Math.random() * array.length);
  return array[randomInteger];
};

export function getRatingPercent(rating: number, total: number = 5): number {
  return (Math.round(rating) / total) * 100;
}
