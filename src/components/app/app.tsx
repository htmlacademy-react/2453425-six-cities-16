import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import {PrivateRoute, PublicRoute} from '../access-route.tsx/access-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types';

const authorizationStatus = AuthorizationStatus.Auth;

type AppProps = {
  mockOffers: Offers;
}

function App({mockOffers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<Main mockOffers={mockOffers} />} />
            <Route
              path={AppRoute.Login}
              element={
                <PublicRoute status={authorizationStatus}>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute status={authorizationStatus}>
                  <Favorites mockOffers={mockOffers} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Offer />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
