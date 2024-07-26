import CommentsForm from '../comments-form/comments-form';
import { comments } from '../../mocks/comments';
import OfferComment from '../offer-comment/offer-comment';

function OfferReviews(): JSX.Element {
  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          comments.map((comment) => <OfferComment key={comment.id} comment={comment} />)
        }
      </ul>
      <CommentsForm />
    </section>
  );
}

export default OfferReviews;
