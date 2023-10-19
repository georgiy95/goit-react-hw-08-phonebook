import CSS from './Header.module.css';
import { Link } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <header>
      <div className={CSS.container}>
        <div className={CSS.logo}>
          <Link to="/">Phonebook</Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
