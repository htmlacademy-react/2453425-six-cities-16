import { useAppSelector } from '../../hooks';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';
import { getUserStatus } from '../../store/user-slice/selectors';
import { AuthorizationStatus } from '../../const';
import { sortCommentsByDate } from '../../util';
import { Comments } from '../../types/types';

type OfferReviewsProps = {
  comments: Comments;
};

function OfferReviews({ comments }: OfferReviewsProps): JSX.Element {
  const userStatus = useAppSelector(getUserStatus);
  const isAuth = userStatus === AuthorizationStatus.Auth;
  const sortedComments = sortCommentsByDate(comments);
  const showedComments = sortedComments.slice(0, 10);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={showedComments} />
      {isAuth && <ReviewsForm />}
    </section>
  );
}

export default OfferReviews;
