import css from './HomePage.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className={css.container}>
        <h1 className={css.title}>
          Welcome, please <Link className={css.homeLink} to="/login">log
          </Link> in or <Link className={css.homeLink} to="/register">register</Link> 
          {' '}to use the PhoneBook &#9742;!
        </h1>
    </div>
  );
}
