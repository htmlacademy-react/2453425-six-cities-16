import { User } from '../../types/types';

type UserAvatarProps = {
  user: User;
  isHost: boolean;
};

function UserAvatar({ user, isHost }: UserAvatarProps): JSX.Element {
  const { name, avatarUrl, isPro } = user;
  const containerClassName = isHost
    ? 'offer__host-user user'
    : 'reviews__user user';
  const classNamePrefix = isHost ? 'offer' : 'reviews';
  const proClassName = isHost && isPro ? 'offer__avatar-wrapper--pro' : '';
  const [imageWidth, imageHeight] = isHost ? [74, 74] : [54, 54];
  const alt = isHost ? 'Host avatar' : 'Reviews avatar';
  const userName = isHost ? name : name.split(' ')[0];

  return (
    <div className={containerClassName}>
      <div
        className={`${classNamePrefix}__avatar-wrapper ${proClassName} user__avatar-wrapper`}
      >
        <img
          className={`${classNamePrefix}__avatar user__avatar`}
          src={avatarUrl}
          width={imageWidth}
          height={imageHeight}
          alt={alt}
        />
      </div>
      <span className={`${classNamePrefix}__user-name`}>{userName}</span>
      {isPro && isHost && <span className="offer__user-status">Pro</span>}
    </div>
  );
}

export default UserAvatar;
