import ReviewsForm from '../reviews-form/reviews-form';
import { Comments } from '../../types/types';
import ReviewsList from '../reviews-list/reviews-list';
import { sortCommentsByDate } from '../../util';

type OfferReviewsProps = {
  comments: Comments;
};

function OfferReviews({ comments }: OfferReviewsProps): JSX.Element {
  comments = sortCommentsByDate(comments);
  const showedComments = comments.slice(0, 10);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={showedComments} />
      <ReviewsForm />
    </section>
  );
}

export default OfferReviews;
