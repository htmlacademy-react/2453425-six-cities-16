import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SortType } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCurrentSort } from '../../store/offers-slice/offers-slice';

type SortProps = {
  currentSortType: SortType;
};

function Sort({ currentSortType }: SortProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSortClick = () => {
    setIsActive(!isActive);
  };

  const handleSortOptionClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const targetElement = event.target as HTMLElement;

    if (!targetElement.classList.contains('places__option')) {
      return;
    }

    const selectedSort = Object.values(SortType).find(
      (sortType) => String(sortType) === targetElement.innerText
    );

    if (!selectedSort) {
      return;
    }

    dispatch(setCurrentSort(selectedSort));
    setIsActive(!isActive);
  };

  const handleEscKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setIsActive(!isActive);
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const tartgetElement = event.target as HTMLElement;
    if (
      tartgetElement.closest('.places__options') ||
      tartgetElement.closest('.places__sorting-type')
    ) {
      return;
    }
    event.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleEscKeyDown);
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
      document.removeEventListener('click', handleDocumentClick);
    };
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
      >
        &nbsp;{currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options places__options--custom', {
          'places__options--opened': isActive,
        })}
        onClick={handleSortOptionClick}
      >
        {Object.values(SortType).map((sortItem) => (
          <li
            key={sortItem}
            className={classNames('places__option', {
              'places__option--active': sortItem === currentSortType,
            })}
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
