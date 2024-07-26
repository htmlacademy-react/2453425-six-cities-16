import { ReactNode } from 'react';

type StarsRatingProps = {
  rating: number;
  classNamePrefix?: string;
  children?: ReactNode;
}

function getRatingPercent(rating: number, total: number = 5): number {
  return Math.floor(rating) / total * 100;
}


function StarsRating({rating, classNamePrefix = 'place-card', children}: StarsRatingProps): JSX.Element {
  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{width: `${getRatingPercent(rating)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default StarsRating;
