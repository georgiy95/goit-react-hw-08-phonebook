import CSS from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'services/operations';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmite = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <p>
        Login or <Link to="/register">register</Link> please.
      </p>
      <form
        action=""
        className={CSS.userForm}
        onSubmit={handleSubmite}
      >
        <label htmlFor="formNumberInput" className={CSS.userForm__label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          title="Please enter a valid email address."
          required
          id="formEmailInput"
          placeholder='example@mail.com'
          className={CSS.userForm__input}
        />

        <div className={CSS.passwordInputContainer}>
          <label htmlFor="formNumberInput" className={CSS.userForm__label}>
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            autoComplete="username"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Password must be at least 8 characters long and include a mix of letters, numbers, and special characters."
            required
            id="formPasswordInput"
            className={CSS.userForm__input}
          />

          {showPassword ? (
            <BsEyeSlash
              className={CSS.passwordIcon}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <BsEye
              className={CSS.passwordIcon}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        <button type="submit" className={CSS.userForm__btn}>
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
