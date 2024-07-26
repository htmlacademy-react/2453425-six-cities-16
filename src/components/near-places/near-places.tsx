import { Offers } from '../../types';
import Card from '../card/card';

type NearPlacesProps = {
  nearOffers: Offers;
};

function NearPlaces({nearOffers}: NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((nearOffer) => <Card key={nearOffer.id} offer={nearOffer} options={{classNamePrefix: 'near-places'}}/>)}
      </div>
    </section>
  );
}

export default NearPlaces;
