import { Offers } from '../../types';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offers;
  onPointedOfferChange: React.Dispatch<React.SetStateAction<string | null>>;
};

function PlacesList({
  offers,
  onPointedOfferChange,
}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onPointedOfferChange={onPointedOfferChange}
        />
      ))}
    </div>
  );
}

export default PlacesList;
