import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import StarsRating from '../../components/stars-rating/stars-rating';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHost from '../../components/offer-host/offer-host';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import PremiumMark from '../../components/premium-mark/premium-mark';
import FavoritesMarkButton from '../../components/favorites-mark-button/favorites-mark-button';
import OfferFeatures from '../../components/offer-features/offer-features';
import Price from '../../components/price/price';
import NearPlaces from '../../components/near-places/near-places';
import Map from '../../components/map/map';
import {
  fetchNearOffers,
  fetchOfferDetails,
  fetchOfferReviews,
} from '../../store/offers/thunks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getNearOffers,
  getOffer,
  getOfferDetailsStatus,
  getReviews,
} from '../../store/offers/selectors';
import { useEffect } from 'react';
import { RequestStatus } from '../../const';
import Loader from '../../components/loader/loader';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const detailsStatus = useAppSelector(getOfferDetailsStatus);

  useEffect(() => {
    dispatch(fetchOfferDetails({ id }));
    dispatch(fetchOfferReviews({ id }));
    dispatch(fetchNearOffers({ id }));
  }, [dispatch, id]);

  const offer = useAppSelector(getOffer);
  const comments = useAppSelector(getReviews);
  const nearOffers = useAppSelector(getNearOffers).slice(0, 3);

  if (
    detailsStatus === RequestStatus.Loading ||
    detailsStatus === RequestStatus.Idle
  ) {
    return <Loader />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  const offerPoint = { id: offer.id, location: offer.location };
  const points = nearOffers
    .map((nearOffer) => ({
      id: nearOffer.id,
      location: nearOffer.location,
    }))
    .concat(offerPoint);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && <PremiumMark classNamePrefix="offer" />}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <FavoritesMarkButton
                  id={offer.id}
                  options={{ classNamePrefix: 'offer', width: 31, height: 33 }}
                  isActive={offer.isFavorite}
                />
              </div>

              <StarsRating rating={offer.rating} classNamePrefix="offer">
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </StarsRating>

              <OfferFeatures
                type={offer.type}
                bedrooms={offer.bedrooms}
                maxAdults={offer.maxAdults}
              />

              <Price price={offer.price} classNamePrefix="offer" />

              <OfferInside goods={offer.goods} />

              <OfferHost host={offer.host} description={offer.description} />

              <OfferReviews comments={comments} />
            </div>
          </div>

          <Map
            city={offer.city}
            points={points}
            selectedPointId={offer.id}
            classNamePrefix="offer"
          />
        </section>

        <div className="container">
          <NearPlaces nearOffers={nearOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
