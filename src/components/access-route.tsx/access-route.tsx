import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type AccessRouteProps = {
  children: JSX.Element;
  status: AuthorizationStatus;
}

function createAccessRoute(statusToCheck: AuthorizationStatus, fallbackPath: AppRoute) {
  return function AccessRoute({children, status} : AccessRouteProps) {
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

const PrivateRoute = createAccessRoute(AuthorizationStatus.Auth, AppRoute.Login);
const PublicRoute = createAccessRoute(AuthorizationStatus.NoAuth, AppRoute.Main);

export {PrivateRoute, PublicRoute};
