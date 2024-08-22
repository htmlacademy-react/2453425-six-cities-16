import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteOffer } from '../../store/offers/thunks';
import { setOfferFavorite } from '../../store/offers/offers-slice';
import { setDetailedOfferFavorite } from '../../store/offers/offers-slice';
import { getUserStatus } from '../../store/user/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

type FavoritesMarkButtonProps = {
  id: string;
  isActive?: boolean;
  options?: {
    classNamePrefix?: string;
    width?: number;
    height?: number;
  };
};

function FavoritesMarkButton({
  id,
  isActive = false,
  options = {},
}: FavoritesMarkButtonProps): JSX.Element {
  const authStatus = useAppSelector(getUserStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { classNamePrefix = 'place-card', width = 18, height = 19 } = options;
  const onFavoritesMarkButtonClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    const isFavorite = !isActive;
    dispatch(postFavoriteOffer({ id, isFavorite }))
      .unwrap()
      .then((updatedOffer) => {
        dispatch(setOfferFavorite(updatedOffer));
        dispatch(setDetailedOfferFavorite(updatedOffer));
      })
      .then(() => {
        isActive = !isActive;
      });
  };
  const bookmarkButtonClass = isActive
    ? `${classNamePrefix}__bookmark-button ${classNamePrefix}__bookmark-button--active button`
    : `${classNamePrefix}__bookmark-button button`;
  const bookmarkButtonText = isActive ? 'In bookmarks' : 'To bookmarks';

  return (
    <button
      className={bookmarkButtonClass}
      type="button"
      onClick={onFavoritesMarkButtonClick}
    >
      <svg
        className={`${classNamePrefix}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{bookmarkButtonText}</span>
    </button>
  );
}

export default FavoritesMarkButton;
