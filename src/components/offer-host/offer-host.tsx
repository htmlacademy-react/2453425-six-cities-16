import UserAvatar from '../user-avatar/user-avatar';
import { User } from '../../types/types';

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
      </div>
    </div>
  );
}

export default OfferHost;
