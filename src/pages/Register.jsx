import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { selectLoggedIn } from 'redux/auth/selectors';
import { Link} from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    dispatch(register({ name, email, password }));
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form className="form"  onSubmit={handleSubmit}>
      <span className="title">Name:</span><input className="input"  type="text" name="name" placeholder="name" required />
      <span className="title">Email:</span><input className="input"  type="email" name="email" placeholder="email" required />
      <span className="title">Password:</span><input className="input"  type="password" name="password" placeholder="password" required />
      <button className="btn" type="submit">Register</button><br /><br />
<span className="signup">
If you have an account then &#128073;<Link className="home-link" to="/login"> login
    </Link>
  </span>
    </form>
  );
};

export default Register;

