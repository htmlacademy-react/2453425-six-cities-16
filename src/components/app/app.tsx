import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import {PrivateRoute, PublicRoute} from '../access-route.tsx/access-route';
import { HelmetProvider } from 'react-helmet-async';

const authorizationStatus = AuthorizationStatus.NoAuth;

function App(props: {offersCount: number}): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<Main offersCount={props.offersCount} />} />
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
                  <Favorites />
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
