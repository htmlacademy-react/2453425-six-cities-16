import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setCurrentCityName } from '../../store/offers-slice/offers-slice';
import { CITIES } from '../../const';
import { CityName } from '../../types/types';

type LocationListProps = {
  selectedCity: CityName;
};

function LocationsList({ selectedCity }: LocationListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetElement = event.target as HTMLElement;

    if (targetElement.closest('.locations__item')) {
      const selectCityName = targetElement.innerText;

      CITIES.some((city) => {
        if (city === selectCityName) {
          dispatch(setCurrentCityName(city));
        }
      });
    }
  };

  return (
    <div className="tabs" onClick={handleCityClick}>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const isSelectedCity = city === selectedCity;
            return (
              <li key={city} className="locations__item">
                <Link
                  className={classNames('locations__item-link', 'tabs__item', {
                    'tabs__item--active': isSelectedCity,
                  })}
                  to="#"
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
