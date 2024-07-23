import { Comment } from '../../types';
import StarsRating from '../stars-rating/stars-rating';

type OfferCommentProps = {
  comment: Comment;
}

function OfferComment({comment}: OfferCommentProps): JSX.Element {
  const date = new Date(comment.date);
  const dateString = date.toISOString().slice(0, 10);
  const dateText = date.toLocaleString('en-US', {month: 'long', year: 'numeric'});
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <StarsRating rating={comment.rating} classNamePrefix='reviews' />
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={dateString}>{dateText}</time>
      </div>
    </li>
  );
}

export default OfferComment;
