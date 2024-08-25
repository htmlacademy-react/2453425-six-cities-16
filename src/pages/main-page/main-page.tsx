import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import Loader from '../../components/loader/loader';
import {
  getOffers,
  getCurrentCityName,
  getAllOffersStatus,
  getCurrentSort,
} from '../../store/offers-slice/selectors';
import { sort } from '../../util';
import { RequestStatus } from '../../const';

function MainPage(): JSX.Element {
  const [pointedOfferId, setPointedOfferId] = useState<string | null>(null);
  const currentSortType = useAppSelector(getCurrentSort);
  const offersStatus = useAppSelector(getAllOffersStatus);
  const offers = useAppSelector(getOffers);
  const currentCityName = useAppSelector(getCurrentCityName);

  if (offersStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  const filteredOffers = offers.filter(
    (offer) => offer.city.name === currentCityName
  );
  const sortedOffers = sort[currentSortType]([...filteredOffers]);
  const offersCount = filteredOffers.length;
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
      <main
        className={classNames('page__main', 'page__main--index', {
          'page__main--index-empty': offersCount === 0,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList selectedCity={currentCityName} />
        <div className="cities">
          {offersCount ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {`${offersCount} ${
                    offersCount > 1 ? 'places' : 'place'
                  } to stay in ${currentCityName}`}
                </b>
                <Sort currentSortType={currentSortType} />
                <PlacesList
                  offers={sortedOffers}
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
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in{' '}
                    {currentCityName}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
