import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffers } from '../../store/offers-slice/thunks';
import {
  getFavoriteOffers,
  getFavoriteOffersStatus,
} from '../../store/offers-slice/selectors';
import { logout } from '../../store/user-slice/thunks';
import { getUserEmail, getUserStatus } from '../../store/user-slice/selectors';
import {
  AppRoute,
  AuthorizationStatus,
  Endpoint,
  RequestStatus,
} from '../../const';

function SignIn(): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={Endpoint.Login}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

function SignOut(): JSX.Element {
  const favoritesStatus = useAppSelector(getFavoriteOffersStatus);
  const email = useAppSelector(getUserEmail);
  const favoritesCount = useAppSelector(getFavoriteOffers).length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      favoritesStatus === RequestStatus.Idle ||
      favoritesStatus === RequestStatus.Failed
    ) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, favoritesStatus]);

  const handleLogoutClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{favoritesCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="" onClick={handleLogoutClick}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

function SignUser(): JSX.Element {
  const userStatus = useAppSelector(getUserStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {userStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />}
      </ul>
    </nav>
  );
}

export default SignUser;
