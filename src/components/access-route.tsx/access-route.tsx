import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Loader from '../loader/loader';
import { getUserStatus } from '../../store/user-slice/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';

type AccessRouteProps = {
  children: JSX.Element;
};

function createAccessRoute(
  statusToCheck: AuthorizationStatus,
  fallbackPath: AppRoute
) {
  return function AccessRoute({ children }: AccessRouteProps) {
    const status = useAppSelector(getUserStatus);
    switch (status) {
      case statusToCheck:
        return children;
      case AuthorizationStatus.Unknown:
        return <Loader />;
      default:
        return <Navigate to={fallbackPath} />;
    }
  };
}

const PrivateRoute = createAccessRoute(
  AuthorizationStatus.Auth,
  AppRoute.Login
);
const PublicRoute = createAccessRoute(
  AuthorizationStatus.NoAuth,
  AppRoute.Main
);

export { PrivateRoute, PublicRoute };
