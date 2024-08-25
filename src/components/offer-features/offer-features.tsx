import { capitalize } from '../../util';

type OfferFeaturesProps = {
  type: string;
  bedroomsCount: number;
  maxAdults: number;
};

function OfferFeatures({
  type,
  bedroomsCount,
  maxAdults,
}: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalize(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {`${bedroomsCount} ${bedroomsCount > 1 ? 'Bedrooms' : 'Bedroom'}`}
      </li>
      <li className="offer__feature offer__feature--adults">
        {`Max ${maxAdults} ${maxAdults > 1 ? 'adults' : 'adult'}`}
      </li>
    </ul>
  );
}

export default OfferFeatures;
