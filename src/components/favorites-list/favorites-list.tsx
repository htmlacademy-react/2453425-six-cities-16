import { Link } from 'react-router-dom';
import PlaceCard from '../place-card/place-card';
import { CityName, GroupedOffers } from '../../types/types';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCurrentCityName } from '../../store/offers-slice/offers-slice';

type FavoritesListProps = {
  groupedOffers: GroupedOffers;
};

function FavoritesList({ groupedOffers }: FavoritesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => dispatch(setCurrentCityName(city as CityName))}
              >
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
