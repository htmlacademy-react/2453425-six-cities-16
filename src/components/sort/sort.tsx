import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { SortType } from '../../const';

type SortProps = {
  sort: string;
  onSortChange: React.Dispatch<React.SetStateAction<string>>;
}

function Sort({sort, onSortChange}: SortProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSortClick = () => {
    setIsActive(!isActive);
  };

  const onSortOptionClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('places__option')) {
      onSortChange(targetElement.innerText);
      setIsActive(!isActive);
    }
  };

  const onEscKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setIsActive(!isActive);
    }
  };

  const onDocumentClick = (event: MouseEvent) => {
    const tartgetElement = event.target as HTMLElement;
    if (tartgetElement.closest('.places__options') || tartgetElement.closest('.places__sorting-type')) {
      return;
    }
    event.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', onEscKeyDown);
      document.addEventListener('click', onDocumentClick);
    }

    return () => {
      document.removeEventListener('keydown', onEscKeyDown);
      document.removeEventListener('click', onDocumentClick);
    };
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortClick}>
        &nbsp;{sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', {'places__options--opened': isActive})} onClick={onSortOptionClick}>
        {Object.values(SortType).map((sortItem) => (
          <li
            key={sortItem}
            className={classNames('places__option', {'places__option--active': (sortItem === sort)})}
            tabIndex={0}
          >
            {sortItem}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
