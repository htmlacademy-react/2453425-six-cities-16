type ReviewRatingStarProps = {
  rating: {
    title: string; mark: number;
  };
};

function ReviewRatingStar({rating: {title, mark}}: ReviewRatingStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={mark} id={`${mark}-stars`} type="radio" />
      <label htmlFor={`${mark}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingStar;
