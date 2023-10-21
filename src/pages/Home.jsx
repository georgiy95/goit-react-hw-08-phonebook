import { ContactList } from 'components/ContactList';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';
import { Link} from 'react-router-dom';


const Home = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <main className="main">
      {isLoggedIn ? (
        <ContactList />
      ) : (
        <h1 className="home-header">
          Welcome, please <Link className="home-link" to="/login">log
          </Link> in or <Link className="home-link" to="/register">register</Link> 
          {' '}to use the PhoneBook &#9742;!
        </h1>
      )}
    </main>
  );
};

export default Home;

