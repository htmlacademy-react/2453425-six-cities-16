import { Link, useLocation } from 'react-router-dom';
import SignUser from '../sign-user/sign-user';
import { AppRoute } from '../../const';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const isLoginPage = pathname === String(AppRoute.Login);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.Main}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {!isLoginPage && <SignUser />}
        </div>
      </div>
    </header>
  );
}

export default Header;
