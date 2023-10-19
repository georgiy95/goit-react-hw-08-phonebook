import { Link } from 'react-router-dom';
import CSS from './LoginMenu.module.css';

const LoginMenu = () => {
  return (
    <div className={CSS.loginMenu}>
      <ul>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginMenu;
