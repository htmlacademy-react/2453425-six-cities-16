import { ReviewFormRating } from '../../const';
import ReviewRatingStar from '../review-rating-star/review-rating-star';

function ReviewRatingStars(): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating" >
      {ReviewFormRating.map(
        (ratingItem) => <ReviewRatingStar key={ratingItem.mark} rating={ratingItem} />
      )}
    </div>
  );
}

export default ReviewRatingStars;
