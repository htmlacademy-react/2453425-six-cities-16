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
  [SortType.POPULAR]: (offers: Offers) => offers,
  [SortType.PRICE_HIGH_TO_LOW]: (offers: Offers) =>
    offers.sort((offerA, offerB) => offerB.price - offerA.price),
  [SortType.PRICE_LOW_TO_HIGH]: (offers: Offers) =>
    offers.sort((offerA, offerB) => offerA.price - offerB.price),
  [SortType.TOP_RATED_FIRST]: (offers: Offers) =>
    offers.sort((offerA, offerB) => offerB.rating - offerA.rating),
};
