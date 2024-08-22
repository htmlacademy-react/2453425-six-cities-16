import { ReviewFormRating } from '../../const';
import ReviewRatingStar from '../review-rating-star/review-rating-star';

type ReviewRatingStars = {
  onRatingChange: React.Dispatch<React.SetStateAction<number>>;
  stars: number;
};

function ReviewRatingStars({
  onRatingChange,
  stars,
}: ReviewRatingStars): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {ReviewFormRating.map((ratingItem) => (
        <ReviewRatingStar
          key={ratingItem.mark}
          rating={ratingItem}
          onRatingChange={onRatingChange}
          stars={stars}
        />
      ))}
    </div>
  );
}

export default ReviewRatingStars;
