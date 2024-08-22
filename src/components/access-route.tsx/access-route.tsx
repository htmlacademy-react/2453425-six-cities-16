import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUserStatus } from '../../store/user/selectors';

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
        return 'Loading...';
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
