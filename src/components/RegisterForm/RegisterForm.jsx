import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'services/operations';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import CSS from './RegisterForm.module.css';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmite = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form
        action=""
        autoComplete="off"
        className={CSS.userForm}
        onSubmit={handleSubmite}
      >
        <label htmlFor="formNameInput" className={CSS.userForm__label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([\-][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="formUserInput"
          className={CSS.userForm__input}
        />

        <label htmlFor="formNumberInput" className={CSS.userForm__label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          title="Please enter a valid email address."
          required
          id="formEmailInput"
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
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
