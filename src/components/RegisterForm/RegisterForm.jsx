import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
       <h2 className={css.phn2}>Register</h2>
      <label className={css.label}>
        Username:
        <input
          placeholder="name"
          className={css.input}
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={css.formikMessage}>{formik.errors.name}</div>
        ) : null}
      </label>
      <label className={css.label}>
        Email:
        <input
          placeholder="email"
          className={css.input}
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={css.formikMessage}>{formik.errors.email}</div>
        ) : null}
      </label>
      <label className={css.label}>
        Password:
        <input
          title="Minimum 7 characters"
          placeholder="password"
          className={css.input}
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
           {formik.touched.email && formik.errors.email ? (
          <div className={css.formikMessage}>{formik.errors.email}</div>
        ) : null}
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
      <br />
      <div className={css.signup}>
      If you have an account then &#128073;
    <Link to="/login"> login.
    </Link>
  </div>
    </form>
  );
};



