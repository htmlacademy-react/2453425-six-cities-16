import ReviewsForm from '../reviews-form/reviews-form';
import { Comments } from '../../types/types';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviewsProps = {
  comments: Comments;
};

function OfferReviews({ comments }: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={comments} />
      <ReviewsForm />
    </section>
  );
}

export default OfferReviews;
