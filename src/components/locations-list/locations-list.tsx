import classNames from 'classnames';
import { CITY } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCurrentCityName } from '../../store/action';
import { Link } from 'react-router-dom';
import { CityName } from '../../types';

type LocationListProps = {
  selectedCity: CityName;
}

function LocationsList({selectedCity}: LocationListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onCityClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    const targetElement = event.target as HTMLElement;
    if (targetElement.closest('.locations__item')) {
      const selectCityName = targetElement.innerText;

      CITY.some((city) => {
        if (city === selectCityName) {
          dispatch(setCurrentCityName({city}));
        }
      });
    }
  };


  return (
    <div className="tabs" onClick={onCityClick}>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY.map((city) => {
            const isSelectedCity = city === selectedCity;

            return (
              <li key={city} className="locations__item">
                <Link className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': isSelectedCity})} to="#">
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
