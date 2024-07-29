import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { Offers } from '../../types';
import FavoritesList from '../../components/favorites-list/favorites-list';

type FavoritesProps = {
  mockOffers: Offers;
};

function FavoritesPage({ mockOffers }: FavoritesProps): JSX.Element {
  const groupedOffers = Object.groupBy(mockOffers, (offer) => offer.city.name);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList groupedOffers={groupedOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
