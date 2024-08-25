import ReviewRatingStar from '../review-rating-star/review-rating-star';
import { ReviewFormRating } from '../../const';

type ReviewRatingStars = {
  onRatingChange: React.Dispatch<React.SetStateAction<number>>;
  stars: number;
  isDisabled: boolean;
};

function ReviewRatingStars({
  onRatingChange,
  stars,
  isDisabled,
}: ReviewRatingStars): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {ReviewFormRating.map((ratingItem) => (
        <ReviewRatingStar
          key={ratingItem.mark}
          rating={ratingItem}
          onRatingChange={onRatingChange}
          stars={stars}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
}

export default ReviewRatingStars;
