import { Comment } from '../../types/types';
import StarsRating from '../stars-rating/stars-rating';
import UserAvatar from '../user-avatar/user-avatar';

type ReviewsItemProps = {
  comment: Comment;
};

function ReviewsItem({ comment }: ReviewsItemProps): JSX.Element {
  const date = new Date(comment.date);
  const dateString = date.toISOString().slice(0, 10);
  const dateText = date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return (
    <li className="reviews__item">
      <UserAvatar user={comment.user} isHost={false} />
      <div className="reviews__info">
        <StarsRating rating={comment.rating} classNamePrefix="reviews" />
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={dateString}>
          {dateText}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
