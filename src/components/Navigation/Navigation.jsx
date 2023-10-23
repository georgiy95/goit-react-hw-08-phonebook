import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <div className={css.pagesNav}>
            <Link className={css.link} to="/">
            Home
            </Link>
          </div>
      {isLoggedIn && <Link className={css.contactsBtn} to="/contacts">Contacts</Link>}
    </nav>
  );
};
