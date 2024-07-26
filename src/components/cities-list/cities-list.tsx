import { Offer, Offers } from '../../types';
import Card from '../card/card';

type CitiesListProps = {
  offers: Offers;
  onPointedOfferChange: React.Dispatch<React.SetStateAction<Offer | null>>;
}

function CitiesList({offers, onPointedOfferChange}: CitiesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            onPointedOfferChange={onPointedOfferChange}
          />
        ))
      }
    </div>
  );
}

export default CitiesList;
