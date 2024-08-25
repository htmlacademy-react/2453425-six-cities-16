import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ReviewRatingStars from '../review-rating-stars/review-rating-stars';
import { postReview } from '../../store/offers-slice/thunks';
import { getPostReviewStatus } from '../../store/offers-slice/selectors';
import { RequestStatus } from '../../const';

function ReviewsForm(): JSX.Element {
  const { id } = useParams();
  const postReviewStatus = useAppSelector(getPostReviewStatus);
  const isPostReviewSending = postReviewStatus === RequestStatus.Loading;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postReviewStatus === RequestStatus.Success) {
      setRating(0);
      setReview('');
    }
  }, [postReviewStatus]);

  const isSubmitButtonDisabled =
    !rating || review.length < 50 || review.length > 300 || isPostReviewSending;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!id) {
      return;
    }
    dispatch(postReview({ id, rating, comment: review }));
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <ReviewRatingStars
        onRatingChange={setRating}
        stars={rating}
        isDisabled={isPostReviewSending}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => setReview(event.target.value)}
        value={review}
        disabled={isPostReviewSending}
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
