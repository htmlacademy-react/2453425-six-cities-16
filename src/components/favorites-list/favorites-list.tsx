import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import PlaceCard from '../place-card/place-card';
import { AppRoute } from '../../const';

type FavoritesListProps = {
  groupedOffers: Record<string, Offer[]>;
};

function FavoritesList({ groupedOffers }: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {groupedOffers[city].map((offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                options={{
                  classNamePrefix: 'favorites',
                  imageWidth: 150,
                  imageHeight: 110,
                }}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
