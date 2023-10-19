import { Link } from 'react-router-dom';
import emptyImg from 'images/noImage.webp';

const NotFoundPage = () => {
  return (
    <div className="container">
      <picture style={{ textAlign: 'center' }}>
        <img src={emptyImg} alt="Not found" width={250} height={250} />
      </picture>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
