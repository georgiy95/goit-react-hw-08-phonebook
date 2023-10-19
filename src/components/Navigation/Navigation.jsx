import CSS from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/contactsSlice';
import UserMenu from 'components/UserMenu/UserMenu';
import LoginMenu from 'components/LoginMenu/LoginMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={CSS.navigation}>
      <ul>
        <li>
          <Link to="/">Add contact</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        )}
      </ul>
      {isLoggedIn ? <UserMenu /> : <LoginMenu />}
    </nav>
  );
};

export default Navigation;
