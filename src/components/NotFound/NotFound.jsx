import emptyImg from 'images/noImage.webp';
import { Link } from 'react-router-dom';
import CSS from './NotFound.module.css';

const NotFound = () => (
  <picture className={CSS.picture}>
    <img
      className={CSS.imageNotFound}
      src={emptyImg}
      alt="Not found"
      width={250}
      height={250}
    />
    <b>
      Phonebook is empty! You can add your contacts <Link to="/">here</Link>.
    </b>
  </picture>
);

export default NotFound;
