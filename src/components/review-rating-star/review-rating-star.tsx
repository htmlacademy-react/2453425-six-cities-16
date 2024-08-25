type ReviewRatingStarProps = {
  rating: {
    title: string;
    mark: number;
  };
  onRatingChange: React.Dispatch<React.SetStateAction<number>>;
  stars: number;
  isDisabled: boolean;
};

function ReviewRatingStar({
  rating: { title, mark },
  onRatingChange,
  stars,
  isDisabled,
}: ReviewRatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={mark}
        id={`${mark}-stars`}
        type="radio"
        disabled={isDisabled}
        checked={mark === stars}
        onChange={(event) => {
          onRatingChange(+event.target.value);
        }}
      />
      <label
        htmlFor={`${mark}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingStar;
