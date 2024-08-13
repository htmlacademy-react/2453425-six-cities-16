import { User } from '../../types/types';
import UserAvatar from '../user-avatar/user-avatar';

type OfferHostProps = {
  host: User;
  description: string;
};

function OfferHost({ host, description }: OfferHostProps): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <UserAvatar user={host} isHost />
      <div className="offer__description">
        <p className="offer__text">{description}</p>
        <p className="offer__text">
          An independent House, strategically located between Rembrand Square
          and National Opera, but where the bustle of the city comes to rest in
          this alley flowery and colorful.
        </p>
      </div>
    </div>
  );
}

export default OfferHost;
