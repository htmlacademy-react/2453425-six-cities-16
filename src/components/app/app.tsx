import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRoute, PublicRoute } from '../access-route.tsx/access-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types';

const authorizationStatus = AuthorizationStatus.Auth;

type AppProps = {
  mockOffers: Offers;
};

function App({ mockOffers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<MainPage mockOffers={mockOffers} />} />
            <Route
              path={AppRoute.Login}
              element={
                <PublicRoute status={authorizationStatus}>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute status={authorizationStatus}>
                  <FavoritesPage mockOffers={mockOffers} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<OfferPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
