import { ReactNode } from 'react';
import { getRatingPercent } from '../../util';

type StarsRatingProps = {
  rating: number;
  classNamePrefix?: string;
  children?: ReactNode;
};

function StarsRating({
  rating,
  classNamePrefix = 'place-card',
  children,
}: StarsRatingProps): JSX.Element {
  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{ width: `${getRatingPercent(rating)}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default StarsRating;
