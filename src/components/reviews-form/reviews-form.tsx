import { useEffect, useState } from 'react';
import ReviewRatingStars from '../review-rating-stars/review-rating-stars';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { postReview } from '../../store/offers/thunks';
import { updateReviews } from '../../store/offers/offers-slice';

function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (rating && review.length > 50 && review.length < 300) {
      setIsSubmitButtonDisabled(false);
      return;
    }
    setIsSubmitButtonDisabled(true);
  }, [rating, review]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!id) {
          return;
        }
        setIsSubmitButtonDisabled(true);
        dispatch(postReview({ id, rating, comment: review }))
          .unwrap()
          .then(
            (result) => {
              dispatch(updateReviews(result));
              setRating(0);
              setReview('');
            },
            () => setIsSubmitButtonDisabled(false)
          );
      }}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatingStars onRatingChange={setRating} stars={rating} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => setReview(event.target.value)}
        value={review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
