import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, Endpoint } from '../../const';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/user/thunks';
import { getUserEmail, getUserStatus } from '../../store/user/selectors';
import { getFavoriteOffers } from '../../store/offers/selectors';
import { fetchFavoriteOffers } from '../../store/offers/thunks';

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
  const dispatch = useAppDispatch();
  const email = useAppSelector(getUserEmail);
  const favoritesCount = useAppSelector(getFavoriteOffers).length;

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

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
