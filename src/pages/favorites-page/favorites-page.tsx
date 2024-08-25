import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { fetchFavoriteOffers } from '../../store/offers-slice/thunks';
import {
  getFavoriteOffers,
  getFavoriteOffersStatus,
} from '../../store/offers-slice/selectors';
import { AppRoute, RequestStatus } from '../../const';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffersStatus = useAppSelector(getFavoriteOffersStatus);

  useEffect(() => {
    if (
      favoriteOffersStatus === RequestStatus.Idle ||
      favoriteOffersStatus === RequestStatus.Failed
    ) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, favoriteOffersStatus]);

  const offers = useAppSelector(getFavoriteOffers);
  const groupedOffers = Object.groupBy(offers, (offer) => offer.city.name);
  const favoritesClassNames = offers.length
    ? 'page'
    : 'page page--favorites-empty';

  return (
    <div className={favoritesClassNames}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header />
      {!offers.length ? (
        <FavoritesEmpty />
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList groupedOffers={groupedOffers} />
            </section>
          </div>
        </main>
      )}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
