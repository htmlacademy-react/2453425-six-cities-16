import { useState } from 'react';

type FavoritesMarkButtonProps = {
  isActive?: boolean;
  options?: {
    classNamePrefix?: string;
    width?: number;
    height?: number;
  };
  clickHandler?: () => void;
}

function FavoritesMarkButton({isActive = false, options = {}, clickHandler}: FavoritesMarkButtonProps): JSX.Element {
  const {classNamePrefix = 'place-card', width = 18, height = 19} = options;
  const [isButtonActive, setButtonActive] = useState(isActive);
  const onFavoritesMarkButtonClick = () => {
    setButtonActive(!isButtonActive);
    if (clickHandler) {
      clickHandler();
    }
  };
  const bookmarkButtonClass = isButtonActive
    ? `${classNamePrefix}__bookmark-button ${classNamePrefix}__bookmark-button--active button`
    : `${classNamePrefix}__bookmark-button button`;
  const bookmarkButtonText = isButtonActive
    ? 'In bookmarks'
    : 'To bookmarks';

  return(
    <button className={bookmarkButtonClass} type="button" onClick={onFavoritesMarkButtonClick}>
      <svg className={`${classNamePrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{bookmarkButtonText}</span>
    </button>
  );
}

export default FavoritesMarkButton;
