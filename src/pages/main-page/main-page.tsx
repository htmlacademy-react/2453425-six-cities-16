import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesList from '../../components/places-list/places-list';
import { useState } from 'react';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { getCurrentCityName, getOffers } from '../../store/selectors';
import classNames from 'classnames';


function MainPage(): JSX.Element {
  const currentCityName = useAppSelector(getCurrentCityName);
  const offers = useAppSelector(getOffers);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCityName);
  const offersCount = filteredOffers.length;

  const [pointedOfferId, setPointedOfferId] = useState<string | null>(null);
  const points = filteredOffers.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header />
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty': offersCount === 0})}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList selectedCity={currentCityName}/>
        <div className="cities">
          {
            offersCount
              ? (
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">
                      {`${offersCount} ${offersCount > 1 ? 'places' : 'place'} to stay in ${currentCityName}`}
                    </b>
                    <form className="places__sorting" action="#" method="get">
                      <span className="places__sorting-caption">Sort by</span>
                      <span className="places__sorting-type" tabIndex={0}>
                        Popular
                        <svg className="places__sorting-arrow" width="7" height="4">
                          <use xlinkHref="#icon-arrow-select"></use>
                        </svg>
                      </span>
                      <ul className="places__options places__options--custom places__options--opened">
                        <li
                          className="places__option places__option--active"
                          tabIndex={0}
                        >
                          Popular
                        </li>
                        <li className="places__option" tabIndex={0}>
                          Price: low to high
                        </li>
                        <li className="places__option" tabIndex={0}>
                          Price: high to low
                        </li>
                        <li className="places__option" tabIndex={0}>
                          Top rated first
                        </li>
                      </ul>
                    </form>
                    <PlacesList
                      offers={filteredOffers}
                      onPointedOfferChange={setPointedOfferId}
                    />
                  </section>
                  <div className="cities__right-section">
                    <Map
                      city={filteredOffers[0].city}
                      points={points}
                      selectedPointId={pointedOfferId}
                      classNamePrefix="cities"
                    />
                  </div>
                </div>
              )
              : (
                <div className="cities__places-container cities__places-container--empty container">
                  <section className="cities__no-places">
                    <div className="cities__status-wrapper tabs__content">
                      <b className="cities__status">No places to stay available</b>
                      <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                    </div>
                  </section>
                  <div className="cities__right-section"></div>
                </div>
              )
          }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
