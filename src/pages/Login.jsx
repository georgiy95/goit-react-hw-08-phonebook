import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { selectLoggedIn } from 'redux/auth/selectors';
import { Link} from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    dispatch(logIn({ email, password }));
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="title">Email:</span><input className="input" type="email" name="email" placeholder="email" required />
      <span className="title">Password:</span><input className="input" type="password" name="password" placeholder="password" required />
      <button className="btn" type="submit">Login</button><br /><br />

      <span className="signup">
          <Link className="home-link" to="/register">Signup 
          </Link>{' '}if you don't have an account yet
        </span>
    </form>
    
  );
};

export default Login;


