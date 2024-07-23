import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import { mockOfferDetails } from '../../mocks/offer';
import StarsRating from '../../components/stars-rating/stars-rating';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHost from '../../components/offer-host/offer-host';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import { mockOffers } from '../../mocks/offers';
import PremiumMark from '../../components/premium-mark/premium-mark';
import FavoritesMarkButton from '../../components/favorites-mark/favorites-mark';
import OfferFeatures from '../../components/offer-features/offer-features';
import Price from '../../components/price/price';
import NearPlaces from '../../components/near-places/near-places';

function Offer(): JSX.Element {
  const {id} = useParams();
  const offer = mockOfferDetails.find((mockOffer) => id === mockOffer.id);
  const nearOffers = mockOffers.slice(0, 3);

  if (!offer) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferGallery />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && <PremiumMark classNamePrefix='offer'/>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <FavoritesMarkButton options={{classNamePrefix: 'offer', width: 31, height: 33}} isActive={offer.isFavorite}/>
              </div>

              <StarsRating rating={offer.rating} classNamePrefix='offer'>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </StarsRating>

              <OfferFeatures type={offer.type} bedrooms={offer.bedrooms} maxAdults={offer.maxAdults} />

              <Price price={offer.price} classNamePrefix='offer'/>

              <OfferInside goods={offer.goods} />

              <OfferHost host={offer.host} description={offer.description} />

              <OfferReviews />
            </div>
          </div>

          <section className="offer__map map"></section>

        </section>

        <div className="container">
          <NearPlaces nearOffers={nearOffers} />
        </div>
      </main>

    </div>
  );
}

export default Offer;
