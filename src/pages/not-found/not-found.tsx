import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import css from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className={css.page}>
      <h1>404: Page Not Found</h1>
      <Link to={AppRoute.Main} className="button form__submit">Go to Main page</Link>
    </div>
  );
}

export default NotFound;
