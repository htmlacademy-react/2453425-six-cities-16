import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import Header from '../../components/header/header';
import { login } from '../../store/user-slice/thunks';
import { setCurrentCityName } from '../../store/offers-slice/offers-slice';
import { getRandomArrayItem } from '../../util';
import { AppRoute, CITIES } from '../../const';

function LoginPage(): JSX.Element {
  const randomCity = getRandomArrayItem(CITIES);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const isPasswordValid = (password: string) =>
    password.length && /\d/g.test(password) && /[a-zA-Zа-яА-Я]/g.test(password);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    if (!isPasswordValid(password)) {
      return;
    }

    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleFormSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div
              className="locations__item"
              onClick={() => dispatch(setCurrentCityName(randomCity))}
            >
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
